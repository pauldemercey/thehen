/**
 * ...
 * @author paul
 */

package sprites;
import js.Dom;
import js.Lib;


class Worm extends Sprite
{
	public static var currentIndex:Int;
	public static var listDistance:Array<String>;
	public static var listById:Hash<Worm> ;
	public inline static var idClass = "worm";
	private var animStep:Int;
	public inline static var animStepMax:Int = 10 ;
	public static var addIsPossible:Bool;
	

	public function new(aId:String, ax:Int, ay:Int ) 
	{
		
		id = aId;
		x = ax;
		y= ay;
		className =  "sprite worm";
		animStep = Math.floor(Worm.animStepMax * Math.random());
		Worm.listDistance.push(id);
		addIsPossible = (Worm.listDistance.length < 80 ) ;
		super();
		
		
	domSprite.onclick = function(e:Dynamic):Void {
		var targ:HtmlDom;
		untyped if (!e)  e = Lib.window.event;
		e.cancelBubble = true;
		if (e.target) targ = e.target;
		else if (e.srcElement) targ = e.srcElement;
		else targ  = e.target;
		if (targ.nodeType == 3) // defeat Safari bug
			targ = targ.parentNode;
		
		clickOnWorm(targ.id);	
			
		};
	}
	
	
	public function updateGraphic() {
		var style:Style = domSprite.style;
		if( animStep++ > Worm.animStepMax ) animStep = 0 ;
		var ybg:String = Std.string(animStep * Main.gridSize) + "px";
		style.backgroundPosition = "0px " + ybg;
		}
		
	static public function updateAllGraphics() {
		for( w in listById.iterator())
			w.updateGraphic();
		
		}
		
	static public function clickOnWorm(aId:String) {
		var relaunch:Bool = false;
		if (Main.hen.hasTarget() && Main.hen.getTargetId() == aId ){
			Main.pause();
			relaunch = true;
			Main.hen.resetTarget();
		}
		Worm.removeWorm(aId);
		if (relaunch) Main.start(); 
	}
	
	public function getEaten() {
		Worm.removeWorm(id);
		}
		
	public static function addRandomWorm() {
		var rx:Int = Math.floor(24 * Math.random());
		var ry:Int = Math.floor(24 * Math.random());
		while (! Main.isFreeLocation(rx, ry)) {
			rx = Math.floor(24 * Math.random());
			ry = Math.floor(24 * Math.random());
			}
		addWorm(rx, ry);
	}	
		
	static function removeWorm(aId:String) {
		var worm:Worm = Worm.listById.get(aId);
		worm.removeSprite();
		Worm.listById.remove(aId);
		Worm.listDistance.remove(aId);
		}
	public function remove() {
		this.removeSprite();
		Worm.listById.remove(this.id);
		}	
	public static function removeAll() {
		for (worm in Worm.listById.iterator() ) {
				worm.remove();
			}
			Worm.currentIndex = null ;
			Worm.listDistance = null;
		}
	public static function addWorm(x:Int, y:Int) {
			if (Worm.listById == null) Worm.listById = new Hash<Worm>();
			if (Worm.listDistance == null) Worm.listDistance = new Array<String>();
			var newId:String = Worm.getNewId();
			Worm.listById.set(newId, new Worm(newId, x, y));
		}
		
	
	public static function getNewId():String {
		if (currentIndex == null) currentIndex = 0 ;
		currentIndex ++ ;
		return idClass + Std.string(currentIndex) ;
		}
}