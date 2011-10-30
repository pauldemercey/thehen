package ;

import js.Lib;
import js.Dom;
import sprites.Wall;
import sprites.Worm;
import sprites.Hen;
import sprites.Brick;
import sprites.Nest;
import haxe.Http;
import Message ;
/**
 * ...
 * @author paul
 */

class Main 
{
	static public var hen			:Hen;
	public static inline var gridSize:Int = 20 ;
	//movements
	static var t1			: haxe.Timer;
	//animation of the hen
	static var t2			: haxe.Timer;
	//animation of the worms
	static var t3			: haxe.Timer;
	
	static var currentMap :Map;
	static inline var timer1Period:Int = 200;
	static inline var timer2Period:Int = 125;
	static inline var timer3Period:Int = 125;
	
	static inline var SCREEN_INTRO 	= 1;
	static inline var SCREEN_PLAY 	= 2;
	static inline var SCREEN_OUTRO 	= 3;
	
	static inline var N_MAP_MAX 	= 10;
	static private var currentMapId:Int;
	
	static var currentScreen:Int;
	
	static var strOfRandomInt:String;
	static var lenOfRandomStr:Int;
	static var randomIndex:Int;
	
	static var scene:HtmlDom;
	
	
	
	static function main() 
	{	

		currentMapId = 1;
		scene = Lib.document.getElementById("scene") ;
		setScreenIntro();
	}
	
	
	
	static function setScreenOutro() {
			currentScreen = SCREEN_PLAY ;
			
			Brick.removeAll();
			
			Wall.removeAll();
			
			Worm.removeAll();
			
			Nest.removeAll();
			
			Hen.removeAll();
			
			setCommunicateMode() ;
			
			
			
			
			Lib.document.getElementById("instructions").style.display = "none" ;
			
			
			
			var containsIllustr:HtmlDom= Lib.document.getElementById("illustrations");
			var children:HtmlCollection<HtmlDom> = containsIllustr.childNodes  ;
			
			while (containsIllustr.hasChildNodes()) {
				var firstChild:HtmlDom = containsIllustr.firstChild ;
				var clone = firstChild.cloneNode (true);
				scene.appendChild (clone);
				containsIllustr.removeChild (firstChild );
				}
			
			
			
			
			var outroTxt:HtmlDom = Lib.document.getElementById("outroText");
			children = outroTxt.childNodes  ;
		
			
			while (outroTxt.hasChildNodes()) {
				var firstChild:HtmlDom = outroTxt.firstChild ;
				var clone = firstChild.cloneNode (true);
				scene.appendChild (clone);
				outroTxt.removeChild (firstChild );
				}
		
			Lib.document.getElementById("playAgainButton").onclick = eventPlay ;
			
			var forms:HtmlCollection<Form> = Lib.document.forms ;
				var form:Form = forms[0];
				for (i in 0...forms.length)
					if ( forms[i].id == "emailCollector" )
						form = forms[i] ;
				
				form.onsubmit  = function(e:Event) { 
					untyped if (!e) e = Lib.window.event;
					var emailField:HtmlDom = Lib.document.getElementById("emailField");
					var email:String = "";
					untyped email = emailField.value;
					var r : EReg = ~/[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]?/i;
					if (r.match(email) ) { 
							
							var r = new Http("./sendEmail.php");
							r.setParameter( "email", email) ;
							r.onError = js.Lib.alert;
							r.onData = merci;
							r.request(true);
						
						}
					else {
							Message.display("Please, check your email.");
						}
					return false; } 
				
			currentMapId ++;
			if (currentMapId > N_MAP_MAX ) currentMapId = 1 ;
			
			currentScreen = SCREEN_OUTRO ; 
			
		}
	static function setScreenIntro() {
			currentScreen = SCREEN_INTRO ;
			setCommunicateMode() ;
			
			var containsIllustr:HtmlDom= Lib.document.getElementById("illustrations");
			var children:HtmlCollection<HtmlDom> = containsIllustr.childNodes  ;
			
			while (containsIllustr.hasChildNodes()) {
				var firstChild:HtmlDom = containsIllustr.firstChild ;
				var clone = firstChild.cloneNode (true);
				scene.appendChild (clone);
				containsIllustr.removeChild (firstChild );
				}
			
			
			
			var introTxt:HtmlDom = Lib.document.getElementById("introText");
			children = introTxt.childNodes  ;
			
			while (introTxt.hasChildNodes()) {
				var firstChild:HtmlDom = introTxt.firstChild ;
				var clone = firstChild.cloneNode (true);
				scene.appendChild (clone);
				introTxt.removeChild (firstChild );
				}
			Lib.document.getElementById("playButton").onclick = eventPlay ;
		}
		
	static function setScreenPlay() {
			setPlayMode() ;
			
			
			Lib.document.getElementById("instructions").style.display = "block" ;
			
			
			
			var illustrNode:HtmlDom = Lib.document.getElementById("illustrations");
			
			
			var destNode:HtmlDom = Lib.document.getElementById("outroText");
			if(currentScreen == SCREEN_INTRO )
				destNode = Lib.document.getElementById("introText");
				
			var children:HtmlCollection<HtmlDom> = scene.childNodes  ;
			
			while (scene.hasChildNodes()) {
				var firstChild:HtmlDom = scene.firstChild ;
				var clone = firstChild.cloneNode (true);
				var id:String = clone.id ;
				if (id == "logo" || id == "henIntro" || id == "wormIllustration")
					illustrNode.appendChild (clone);
				else
					destNode.appendChild (clone);
				scene.removeChild (firstChild );
				}
			if(currentScreen == SCREEN_INTRO ){
				Lib.document.getElementById("playButton").onclick = function(e:Dynamic){} ;
			}
			else if(currentScreen == SCREEN_OUTRO ){
				Lib.document.getElementById("playAgainButton").onclick = function(e:Dynamic) { } ;
				
				var forms:HtmlCollection<Form> = Lib.document.forms ;
				var form:Form = forms[0];
				for (i in 0...forms.length)
					if ( forms[i].id == "emailCollector" )
						form = forms[i] ;
				
				form.onsubmit  = function(e:Event) { return false; } 
			}
			currentScreen = SCREEN_PLAY;
			play() ;
		}
		
		
		
		
		
		
		static function eventPlay (e:Dynamic) {
					untyped if (!e) e = Lib.window.event;
					e.cancelBubble = true;
					setScreenPlay();
				}
		
		
		
		
	static function setPlayMode() {
		var str:String = StringTools.replace(scene.className, "communicateScene", "");
		str = StringTools.trim(str);
		scene.className = str + " playscene";
		}
	static function setCommunicateMode() {
		var str:String = StringTools.replace(scene.className, "playscene", "");
		str = StringTools.trim(str);
		scene.className = str + " communicateScene";
		}
	
	
	
	static function play() {
		strOfRandomInt = "" ;
		for ( i in 0...10)	strOfRandomInt += getRandIntString();
		lenOfRandomStr = strOfRandomInt.length;
		randomIndex = 0 ;
		
		var mapFile:String  = "map" + Std.string(currentMapId) + ".svg" ;
		
		Map.load(mapFile);
	
		}
	
	
	

	
	public static function mapIsReady():Void {
		
		
		
		var document = Lib.document ;
		var scene : HtmlDom = document.getElementById("scene");
		
		scene.onclick = function(e:Dynamic):Void {
			
			untyped if (!e) e = Lib.window.event;
				e.cancelBubble = true;
				var wx:Int=0;
				var wy:Int=0;
			if (e.layerX) {
				wx = Math.floor(e.layerX / Main.gridSize);
				wy = Math.floor(e.layerY / Main.gridSize);
				}
			else if (e.offsetX) {
				wx = Math.floor(e.offsetX / Main.gridSize);
				wy = Math.floor(e.offsetY / Main.gridSize);
				}
				Worm.addWorm(wx, wy);
		};
		
		
		hen = Hen.getFirstHen();
		start();
		}
	
	static function update() {
		
		
		
		if (randomIndex > lenOfRandomStr) randomIndex = 0;
		if ( Worm.addIsPossible && Std.parseInt(strOfRandomInt.substr(randomIndex, 1)) > 7 )
			Worm.addRandomWorm();
		
		randomIndex++;
	
	
		
		if (Worm.listDistance.length > 0) {
			hen.defineTarget();
			if (hen.hasTarget() )
				hen.moveOn();
			else {
				hen.defineNestTarget();
				if (hen.hasNestTarget()) 
					hen.moveOn();
				
			}
		}
		else {
			t1.stop();
			t3.stop();
			}
			

		}
		
		
	public static function stopGame() {
		t1.stop();
		t2.stop();
		t3.stop();
		scene.onclick = function(e:Dynamic):Void {}
		setScreenOutro() ;
		}
		
		
	public static function pause() {
		t1.stop();
		}
		
		
		
	public static function start() {
		t1 = new haxe.Timer( timer1Period );
		t2 = new haxe.Timer( timer2Period );
		t3 = new haxe.Timer( timer3Period );
		t1.run = update;
		t2.run = hen.updateGraphic;
		t3.run = Worm.updateAllGraphics;
		}
		
		
	public static function isFreeLocation(x:Int, y:Int):Bool {
		for (hen in Hen.listById.iterator()) 
				if (hen.exactCoords(x, y)) return false;
		for (brick in Brick.listById.iterator())
				if (brick.exactCoords(x, y))return false;
		for (worm in Worm.listById.iterator())
				if (worm.exactCoords(x, y)) return false;
		for (nest in Nest.listById.iterator())
				if (nest.exactCoords(x, y)) return false;
		return true;
		}
	public static function merci(data:String) { 
			Message.display("Thank you / ありがとう / merci.");
		}
	static inline function getRandIntString():String { return Std.string(Math.random()).substr(2) ; }
}