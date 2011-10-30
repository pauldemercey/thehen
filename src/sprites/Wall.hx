/**
 * ...
 * @author paul
 * wall is a set of brick
 */

package sprites;
import sprites.Indicator ;
class Wall
{
	public static var currentIndex:Int;
	public inline static var idClass = "wall";
	public static var listById:Hash<Wall> ;
	
	private var x1:Int;
	private var x2:Int;
	private var y1:Int;
	private var y2:Int;
	private var id:String;
	
	public function new(aid:String, ax1:Int, ax2:Int, ay1:Int, ay2:Int) 
	{
		id = aid ; 
		x1 = ax1; 
		x2 = ax2 - 1 ; 
		y1 = ay1 ; 
		y2 = ay2-1 ;
		if (x2 < x1 || y2 < y1) trace("some rect are badly built");
		for (i in  ax1...ax2) {
			for ( j  in ay1...ay2) {
				Brick.addBrick(i, j);
				}
			} 
		
			
	}
	
	public function crosses(ax1:Int, ax2:Int, ay1:Int, ay2:Int):Bool {
		var tx1:Int, tx2:Int, ty1:Int, ty2:Int;
		if (ax1 <= ax2) { tx1 = ax1 ; tx2 = ax2; }	else{	tx1 = ax2 ; tx2 = ax1;	}
		if (ay1 <= ay2) { ty1 = ay1 ; ty2 = ay2; }	else{	ty1 = ay2 ; ty2 = ay1;	}
		if ( tx1 > x2 || tx2 < x1) return false;
		if ( ty1 > y2 || ty2 < y1) return false;
		return true;
		}
	public function crossesPath(pathX:Array<Int>, pathY:Array<Int>):Bool {
		for (i in 0...pathX.length) {
			var xi:Int = pathX[i], yi:Int = pathY[i] ;
			if (xi >= x1 && xi <= x2 && yi >= y1 && yi <= y2) {
				return true; 
				}
			}
		return false;
		}	
	public static function removeAll() {
		for (wall in Wall.listById.iterator()) {
				wall.remove();
			}
		Wall.currentIndex = null ;
		}
	public function remove() {
		Wall.listById.remove(this.id);
		}
	public static function addWall(ax1:Int, ax2:Int, ay1:Int, ay2:Int) {
			if (Wall.listById == null) Wall.listById = new Hash();
			var newId:String = Wall.getNewId();
			Wall.listById.set(newId, new Wall(newId, ax1, ax2, ay1, ay2));
		}
		
	
	public static function getNewId():String {
		if (currentIndex == null) currentIndex = 0 ;
		currentIndex ++ ;
		return idClass + Std.string(currentIndex) ;
		}
}