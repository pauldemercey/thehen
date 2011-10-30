/**
 * ...
 * @author paul
 */

package sprites;
import js.Dom;
import js.Lib;
class Sprite 
{

	private var domSprite 	: HtmlDom;
	private var id 		: String ;
	private var x		:Int;
	private var y		:Int;
	private var className	:String;
	
	public inline static var idClass = "sprite";
	
	public function new() 
	{
		var document = Lib.document ;
		var scene : HtmlDom = document.getElementById("scene");
		domSprite = document.createElement("div");
		domSprite.setAttribute ("id", id);
		domSprite.className = className;
		
		scene.appendChild (domSprite);
		updateVisible() ;
	}
	
	function updateVisible() {
		var style:Style = domSprite.style;
		style.left = Std.string(Main.gridSize * x) + "px" ;
		style.top = Std.string(Main.gridSize * y) + "px" ;
		
		}
	
	public function getXY():Array<Int> {
		return [x, y];
		}
	public function getId():String {
		return id;	
		}
	private function removeSprite() {
		var document:Document = Lib.document ;
		try{
		var toRemove:HtmlDom = document.getElementById(id);
		var parent:HtmlDom = toRemove.parentNode ;
		parent.removeChild(toRemove);
		}catch (e:Dynamic) {
			Lib.alert(id);
			}
		}
	public function exactCoords(ax:Int, ay:Int):Bool {
			if (ax == x && ay == y ) return true;
			return false;
		}
}