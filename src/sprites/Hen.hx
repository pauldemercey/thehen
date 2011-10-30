/**
 * ...
 * @author paul
 */

package sprites;
import js.Dom;
import js.Lib;
import Type;
class Hen extends Sprite
{

	public static var currentIndex:Int;
	public static var listById:Hash<Hen>;
	private var target : Worm ;
	private var pathX:Array<Int>;
	private var pathY:Array<Int>;
	public inline static var idClass = "hen";
	private var nestTarget:Nest;
	
	//direction 
	//	
	private var towardRight:Bool;
	
	private var animStep:Int;
	public inline static var animStepMax:Int = 3 ;
	
	
	public function new(aId:String, aX:Int, aY:Int) 
	{
		pathX = [];
		pathY = [];
		
		id = aId;
		x = aX;
		y = aY;
		animStep = 0 ;
		className =  "sprite hen";

		super();

	}
	
	public function updateGraphic() {
		var style:Style = domSprite.style;
		var xbg:String = towardRight ? "0px" : Std.string(Main.gridSize) + "px" ;
		if( animStep++ > Hen.animStepMax ) animStep = 0 ;
		var ybg:String = Std.string(animStep * Main.gridSize) + "px";
		style.backgroundPosition = xbg + " " + ybg;
		}
	
	
	public static function clickOnHen(aId:String) {
		var hen:Hen = Hen.listById.get(aId);
		trace(hen.x + " : " + hen.y);
		trace(hen.pathX);
		trace(hen.pathY);
		}
	
	
	public function hasTarget():Bool {
		return (target != null) ; 
		}

	public function getTargetId():String {
		return target.getId() ;
		}
	public function resetTarget() {
		target = null ;
		}
	public function defineTarget() {

		Worm.listDistance.sort(sorter);
		//worms are ordered from the closest to the farthest
		//are they visible from the hen ?
		
			for (idWorm in sprites.Worm.listDistance ) {
				var nTarget:Worm = Worm.listById.get(idWorm);
				if (nTarget == target)  return ;
				
				nTarget = Worm.listById.get(idWorm);
				var tXY:Array<Int> = nTarget.getXY();
				var tmpFinalX:Int = tXY[0];
				var tmpFinalY:Int = tXY[1];
				var tmpPathX:Array<Int> = new Array<Int>();
				var tmpPathY:Array<Int> = new Array<Int>();
				
				var test : Dynamic = isTargetInView(tmpFinalX, tmpFinalY) ;
				
				if(Type.typeof(test) ==  ValueType.TBool){
					if (test == false){
						nTarget = null ;
						continue ;
					}else if (test == true ){
						var thePaths:Array<Array<Int>> = definePath(x, y, tmpFinalX, tmpFinalY);
						tmpPathX = thePaths[0] ;
						tmpPathY = thePaths[1] ;
					}
				}else{
						tmpPathX = test[0] ;
						tmpPathY = test[1] ;
					
				}
				nestTarget = null;
				target = nTarget ;
				pathX = tmpPathX;
				pathY = tmpPathY;
				break;
			}
		}
	
		
		
		/*	Function isTargetInView
		 * 
		 *	Return are :	-False
		 * 					-True , then calculate the path
		 * 					-the path as Array<Array<Int>>
		 * 				
		 * 
		 */
	private function isTargetInView(fx:Int, fy:Int):Dynamic {
				var tmpPathX:Array<Int> = new Array<Int>();
				var tmpPathY:Array<Int> = new Array<Int>();
				
				var pathIsDefined:Bool = false;
				//check if the path will Cross a wall
				for (wall in sprites.Wall.listById.iterator()) {
					if ( wall.crosses(x, fx, y, fy)) {
						
						var thePaths:Array<Array<Int>> = definePath(x, y, fx, fy);
						tmpPathX = thePaths[0] ;
						tmpPathY = thePaths[1] ;
						
						pathIsDefined = true;
						if (wall.crossesPath(tmpPathX, tmpPathY)) {
							return false;
							}
						}
					}
				if (pathIsDefined) return [tmpPathX, tmpPathY];
				else return true;
		}	
		
		
		
		
		
		
	/*	Implementation of Bresenham's algorithm
	 * 
	 * 
	 * 
	 * */
	private function definePath(x1:Int, y1:Int, x2:Int, y2:Int):Array<Array<Int>> {
		var pathX:Array<Int> = [];
		var pathY:Array<Int> = [];
		
		var x_end = x2, y_end = y2;
		
		var invertX:Bool, invertY:Bool, invertXY:Bool, tmp_x1:Int, tmp_x2, Int, tmp_y1:Int, tmp_y2:Int, dx:Int, dy:Int, e:Int ;
		invertX = (x2 < x1);
		invertY = (y2 < y1);
		tmp_x1 = invertX ? x2 : x1 ;
		tmp_x2 = invertX ? x1 : x2 ;
		tmp_y1 = invertY ? y2 : y1 ;
		tmp_y2 = invertY ? y1 : y2 ;
		
		invertXY = tmp_y2 - tmp_y1 > tmp_x2 -tmp_x1 ;
		
		if (invertXY) {
			x1 = tmp_y1; x2 = tmp_y2; y1 = tmp_x1 ; y2 = tmp_x2;
			}
		else {
			x1 = tmp_x1; x2 = tmp_x2; y1 = tmp_y1 ; y2 = tmp_y2;
			}
		tmp_x1 = tmp_x2 = tmp_y1 = tmp_y2 = null;
			
			
		e = x2 - x1;
		dx = 2 * e;
		dy = 2 * (y2 - y1);
		while (x1 < x2) {
			pathX.push(x1);
			pathY.push(y1);
			x1++;
			e -= dy;
			if ( e <= 0) {
				y1++;
				e += dx;
				}
			}
		if (invertXY) {
			var tmp:Array<Int> = pathX ;
			pathX = pathY;
			pathY = tmp;
			tmp = null;
			}
		if (invertX) pathX.reverse();
		if (invertY) pathY.reverse();
		
		if (!invertX || !invertY) {
			pathX.push(x_end); pathY.push(y_end);
			}
			
		return [pathX, pathY];
		}
		
		
		
	private function sorter (a:String, b:String) {
				
		var aa :Array<Int> = Worm.listById.get(a).getXY();
		var aDist:Int = Std.int(Math.pow((aa[0] - x), 2) + Math.pow((aa[1] - y), 2)) ;
		var bb :Array<Int> = Worm.listById.get(b).getXY();
		var bDist:Int = Std.int(Math.pow((bb[0] - x), 2) + Math.pow((bb[1] - y), 2)) ;
		
		return aDist - bDist ;
			
	}
	public function moveOn() {
		Indicator.removeAll();
		Indicator.draw(pathX, pathY);
		if (pathX.length > 0) {
			var xx = x;
			var yy = y;
			x = pathX.shift();
			y = pathY.shift();
			if (x > xx) towardRight = true;
			else if (x < xx) towardRight = false;
			else if (xx == x && yy == y) {  }
			}
		else {
			if (hasTarget())
				eat();
			else if (hasNestTarget())
				lay();
			}
		updateVisible();

	}
	
	
	
		public function defineNestTarget() {
			var nest:Nest = Nest.listById.get("nest1");
			
			if (nest == nestTarget ) return ;
			else nestTarget = null;
			
			var nestXY:Array<Int> = nest.getXY();
			var nx:Int = nestXY[0];
			var ny:Int = nestXY[1];
			var test : Dynamic = isTargetInView(nx, ny) ;
			
			if(Type.typeof(test) ==  ValueType.TBool){
					if (test == true ) {
						var thePaths:Array<Array<Int>> = definePath(x, y, nx, ny);
						pathX = thePaths[0] ;
						pathY = thePaths[1] ;
						nestTarget = nest;
					}
				}else{
						pathX = test[0] ;
						pathY = test[1] ;
						nestTarget = nest;
				}
		}
	
	
	public static function removeAll() {
		for (hen in Hen.listById.iterator()) {
				hen.remove();
			}
			Hen.currentIndex = null ;
		}
	public function remove() {
		this.removeSprite();
		Hen.listById.remove(this.id);
		}
	
	
	public function hasNestTarget():Bool {
			return (nestTarget != null);
		}

	public static function getNewId():String {
		if (currentIndex == null) currentIndex = 0 ;
		currentIndex ++ ;
		return idClass + Std.string(currentIndex) ;
	}
	
	private function lay() {
		nestTarget = null;
		target = null ;
		Main.stopGame();
		}
	
	private function eat() {
			target.getEaten();
			target = null ;
		}
	public static function getFirstHen() {
		return Hen.listById.get("hen1");
		}
	public static function addHen(x:Int, y:Int):Hen {
		if (Hen.listById == null) Hen.listById = new Hash<Hen>();
		var newId:String = Hen.getNewId();
		Hen.listById.set(newId, new Hen(newId, x, y));
		return Hen.listById.get(newId);
	}
}