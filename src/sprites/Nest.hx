/**
 * ...
 * @author paul
 */

package sprites;
import js.Dom;
import js.Lib;


class Nest extends Sprite
{
	public static var currentIndex:Int;
	public static var listById:Hash<Nest> ;
	public inline static var idClass = "nest";

	public function new(aId:String, ax:Int, ay:Int ) 
	{
		id = aId;
		x = ax;
		y= ay;
		className =  "sprite nest";
		super();
	}
	
	public static function addNest(x:Int, y:Int) {
			if (Nest.listById == null) Nest.listById = new Hash<Nest>();
			var newId:String = Nest.getNewId();
			Nest.listById.set(newId, new Nest(newId, x, y));
		}
		
	public static function removeAll() {
		for (nest in Nest.listById.iterator()) {
				nest.remove();
			}
			Nest.currentIndex = null;
		}
	public function remove() {
		this.removeSprite();
		Nest.listById.remove(this.id);
		}
	public static function getNewId():String {
		if (currentIndex == null) currentIndex = 0 ;
		currentIndex ++ ;
		return idClass + Std.string(currentIndex) ;
		}
}