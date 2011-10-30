/**
 * ...
 * @author paul
 */

package sprites;

class Indicator  extends Sprite
{
	public static var currentIndex:Int;
	public static var listById:Hash<Indicator> ;
	public inline static var idClass = "indicator";
	public function new(aId:String, ax:Int, ay:Int , colision:Bool) 
	{
		id = aId;
		x = ax;
		y= ay;
		className =  "sprite indicator";
		if (colision) {
				className += " colision";
			}
		super();
	}
	
	static public function draw(pathX:Array<Int>, pathY:Array<Int>) {
		for ( i in 0...pathX.length) {
			addIndicator(pathX[i], pathY[i]);
			}
		}
	
	static public function removeAll() {
		if (Indicator.listById == null) return;
		for (iId in listById.keys()) {
			removeIndicator(iId);
			}
		currentIndex = 0 ;
		}
	static public function removeIndicator(aId:String) {
		var pi:Indicator = Indicator.listById.get(aId);
		pi.removeSprite();
		Indicator.listById.remove(aId);
		}
		
	public static function addIndicator(x:Int, y:Int, ?colision:Bool=false) {
			if (Indicator.listById == null) Indicator.listById = new Hash<Indicator>();
			var newId:String = Indicator.getNewId();
			Indicator.listById.set(newId, new Indicator(newId, x, y, colision));
		}
		
	
	public static function getNewId():String {
		if (currentIndex == null) currentIndex = 0 ;
		currentIndex ++ ;
		return idClass + Std.string(currentIndex) ;
		}
}