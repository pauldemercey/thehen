<?php





 // Interface PHPMail



require "mime_mail.class.php";


function sendMail($nomFrom,$mailFrom,$nomTo,$mailTo,$sujet) {

   // pas en local

   if(getenv("SERVER_NAME")=="localhost") return;


   // EXPEDITEUR

   $tete = "From: ".$nomFrom." <".$mailFrom.">\n";

   $tete .= "Reply-To: ".$mailFrom."\n";



   if(strtolower(substr($body,0,6)) == "<html>") 

      $tete .= "Content-Type: text/html; charset=UTF-8\n"; // Type MIME

   // et zou... retourne false si erreur !

   return mail($nomTo." <".$mailTo.">",$sujet,$body,$tete);

}
	$regexp = "/^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/";
	if (isset($_POST["email"]) && preg_match($regexp, $_POST["email"])) {
	
				sendMail("hen game subscriber",

						"contact@pauldemercey.net",

						"Admin",

						"pauldemercey@gmail.com",
						
						$_POST["email"]

					);
		echo "merci";

	}else{
		echo "non merci" . $_POST["email"];
	}



?>


