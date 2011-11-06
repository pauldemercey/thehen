<?php

	
    $ifFr = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2) == "fr";
	
	$lang = $ifFr ? "fr" :"en" ;
	$TEXT = array(
					"en"=>array(
						"intro" => "<p>This cute hen seems to be lost in a worm breeding.</p><p>Would you help her find the way to her nest ?</p><p>You can guide her, adding or withdrawing worms from her visual field.</p>",
						"outro" => "<p>You win ! Congratulation...</p><p>If you want to hear about the new born chick, let me know your email :</p>",
						"instructions" => "Click on the scene to add or withdraw worms from the visual field of the hen.",
						"feedback" => "You don't understand ? Too easy ? Not playable or you simply would like to see more levels... Don't hesitate to comment <a href=' http://pauldemercey.blogspot.com/2010/09/hen-la-poule.html' class='w'>here</a>."
					),
					"fr"=>array(
						"intro" => "<p>Une poule s'est perdue dans un élevage de vers.</p><p>Pouvez-vous l'aider à rejoindre son nid ?</p><p>Vous pouvez la guider en ajoutant ou retirant des vers de son champs de vision.</p>",
						"outro" => "<p>C'est gagné ! Bravo...</p><p>Pour recevoir un faire part de naissance, laissez moi votre email :</p>",
						"instructions" => "Cliquez sur la scène pour ajouter ou enlever des vers du champs de vision de la poule.",
						"feedback" => "Vous n'y comprenez rien ? C'est trop simple ? Trop dur ? Vous voulez plus de niveaux ? N'hésitez pas à commenter <a href=' http://pauldemercey.blogspot.com/2010/09/hen-la-poule.html' class='w'>ici</a>."
					)
					
					);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<title>the Hen</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<link type="text/css" rel="stylesheet" href="thehen.css"> 
</head>
<body>
	<div>
	<div id="scene" class="">
	</div>
	<p id="instructions">
		<?php echo $TEXT[$lang]["instructions"]?>
	</p>
	<p id="feedback">
		<?php echo $TEXT[$lang]["feedback"]?>
	</p>
	<p>
		<a href = "../" class="w">Home</a>
	</p>
	<div id="hiddenContent">
		<div id="illustrations">
			<img src="img/logo.png" id="logo" width="100" height="61" alt="" />
			<img src="img/green-hen-intro.png" id="henIntro" width="46" height="46" alt="" />
			<div id="wormIllustration"></div>
		</div>
		<div id="introText">
			<div class="textContainer">
			<?php echo $TEXT[$lang]["intro"]?>
			<form id="playForm"><input type="button" id="playButton" value="PLAY" /></form>
			</div>
		</div>
		<div id="outroText">
			<div class="textContainer">
				<?php echo $TEXT[$lang]["outro"]?>
				<form id="emailCollector" action="" method="POST">
					<input type="input" name="email" id="emailField" value="" />
					<input type="submit" value="SEND" name="submitButton" id="emailSubmiter" />
				</form>
				<form id="playAgainForm">
					<input type="button" id="playAgainButton" value="NEXT LEVEL" />
				</form>
			</div>
		</div>
	</div>

	<div id="haxe:trace"></div>
	<script src="theHen.js"></script>
	
</body>
</html>