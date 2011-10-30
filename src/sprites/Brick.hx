/**
 * ...
 * @author paul
 */

package sprites;

class Brick extends Sprite
{
	public static var currentIndex:Int;
	public static var listById:Hash<Brick> ;
	public inline static var idClass = "brick";
	public function new(aId:String, ax:Int, ay:Int ) 
	{
		
		id = aId;
		x = ax;
		y= ay;
		className =  "sprite brick";
		super();
		
		
	}
	public static function removeAll() {
		for (brick in Brick.listById.iterator()) {
				brick.remove();
			}
			Brick.currentIndex = null ;
		}
	public function remove() {
		this.removeSprite();
		Brick.listById.remove(this.id);
		}
	
	public static function addBrick(x:Int, y:Int) {
			if (Brick.listById == null) Brick.listById = new Hash<Brick>();
			var newId:String = Brick.getNewId();
			Brick.listById.set(newId, new Brick(newId, x, y));
		}
		
	
	public static function getNewId():String {
		if (currentIndex == null) currentIndex = 0 ;
		currentIndex ++ ;
		return idClass + Std.string(currentIndex) ;
		}
}