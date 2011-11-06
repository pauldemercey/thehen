<?

######################################################################
#  Classe mime_mail
######################################################################
#
#   Concue par Sascha Schumann <sascha@schumann.cx>
#   Modifiee par Tobias Ratschiller <tobias@dnet.it>:
#     - Nettoyage du code
#     - Separation des propriétés body- et from- 
#     - Suppression de choses casiment innutiles
#   Modifiee par PHPFrance <contact@phpfrance.com>:
#     - Ajout d'une partie pour recuperer le type de fichier attache
#     - Commentaires en francais
#
######################################################################
#
# EXEMPLE D'UTILISATION
#
# 
#
#   // declaration de la classe
#   require "mime_mail.class.php";
#
#   // ouverture et lecture du fichier
#   $fichier_attache = fread(fopen("test.jpg", "r"), filesize("test.jpg"));
#
#   // instanciation de la classe
#   $mail = new mime_mail();
#   // parametres
#   $mail->to = "adresse@email";                // Adresse email de reception 
#   $mail->subject = "Test";                    // Sujet
#   $mail->body = "Ceci est un test.";          // Corps du message
#   $mail->from = "adresse@email";              // Adresse email de l'expediteur (optionnel)
#   $mail->headers = "Date: ";  // Entetes supplementaires (optionnel)
#   $mail->attach("$fichier", "test.jpg");      // fichier attache (optionnel)
#   // envoi du message
#   $mail->send();
#
# 
#
###################################################################### 
 
class mime_mail 
{
 
  var $parts;
  var $to;
  var $from;
  var $headers;
  var $subject;
  var $body;

  // constructeur       
  function mime_mail()
  {
    
    $this->parts = array();
    $this->to =  "";
    $this->from =  "";
    $this->subject =  "";
    $this->body =  "";
    $this->headers =  "";
  
  }

  // attache un fichier au message
  function attach($message,$name,$ctype = '')
  {
            
    // type de contenu non defini
    if(empty($ctype)){
      // on essaie de reconnaitre l'extension     
      switch(strrchr(basename($name), ".")){ 
        case ".gz":   $ctype =  "application/x-gzip"; break;
        case ".tgz":  $ctype =  "application/x-gzip"; break;
        case ".zip":  $ctype =  "application/zip";    break;
        case ".pdf":  $ctype =  "application/pdf";    break;        
        case ".png":  $ctype =  "image/png";  break;
        case ".gif":  $ctype =  "image/gif";  break;
        case ".jpg":  $ctype =  "image/jpeg"; break;
        case ".txt":  $ctype =  "text/plain"; break;
        case ".htm":  $ctype =  "text/html";  break;
        case ".html": $ctype =  "text/html";  break;
        default:      $ctype =  "application/octet-stream"; break;
      }
    }

    $this->parts[] = 
                    array (
                      "ctype" => $ctype,
                      "message" => $message,
                      "encode" => $encode,
                      "name" => $name
                    );
    
    // fin de fonction
  }

  // fonction utilisee pour contruire le message MIME
  // utilisee depuis build_multipart()
  function build_message($part)
  {
  
    $message = $part[ "message"];
    $message = chunk_split(base64_encode($message));
    $encoding =  "base64";
    
    return  "Content-Type: ".$part[ "ctype"].
            ($part[ "name"]? "; name = \"".$part[ "name"]. "\"" :  "").
            "\nContent-Transfer-Encoding: $encoding\n\n$message\n";
  
  }

  // compose le message MIME
  // utilisee depuis send()
  function build_multipart() 
  {

    $boundary =  "b".md5(uniqid(time()));
    $multipart =  "Content-Type: multipart/mixed; boundary = $boundary\n\nThis is a MIME encoded message.\n\n--$boundary";

    for($i = sizeof($this->parts) - 1; $i >= 0; $i--) 
    {
      $multipart .=  "\n".$this->build_message($this->parts[$i]). "--$boundary";
    }

    return $multipart.=  "--\n";

  }

  // envoie le message
  // derniere fonction a appeler 
  function send() 
  {

    $mime =  "";
    // parametres optionnels
    if (!empty($this->from))    $mime .=  "From: ".$this->from. "\n";
    if (!empty($this->headers)) $mime .= $this->headers. "\n";
    if (!empty($this->body))    $this->attach($this->body,  "",  "text/plain");
    // entete MIME
    $mime .=  "MIME-Version: 1.0\n".$this->build_multipart();
    // envoi du message
    mail($this->to, $this->subject,  "", $mime);
  
  }

}; // fin de la classe


?>