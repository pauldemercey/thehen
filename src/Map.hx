/**
 * ...
 * @author paul
 */

package ;

import js.Lib;
import sprites.Wall ;
import sprites.Worm ;
import sprites.Hen ;
import sprites.Nest ;
import haxe.Http;
class Map 
{
	public static var gridOfMap:Int;
	
	public function new() 
	{
		
	}

	public static function load(filename:String) {
	    var r = new Http("./maps/" + filename);
		r.onError = js.Lib.alert;
		r.onData = Map.analyseData;
		r.request(false);
		}
	
	
	public static function analyseData(data:String) {
	var xml:Xml = Xml.parse(data).firstElement();
	for (elt in xml.elementsNamed("sodipodi:namedview")){
		for (elt in xml.elementsNamed("inkscape:grid")) {
			var empspacing:Null<String> = elt.get("empspacing");
			if (empspacing != null) {
				gridOfMap = Std.parseInt(empspacing);
				}
			break;
			}
		break;
	}
	if (gridOfMap == null) {
		gridOfMap = Main.gridSize ;
		}
		for ( elt in xml.elementsNamed("g") ) {
			if (elt.get("inkscape:label") == "walls") {
				for (rect in elt.elementsNamed("rect")) {
					var x1:Int = Std.int(Std.parseInt(rect.get("x")) / gridOfMap);
					var x2:Int = x1 + Std.int(Std.parseInt(rect.get("width")) / gridOfMap);
					var y1:Int = Std.int(Std.parseInt(rect.get("y")) / gridOfMap);
					var y2:Int = y1 + Std.int(Std.parseInt(rect.get("height")) / gridOfMap);
					Wall.addWall(x1, x2, y1, y2);
					}
				}
			else if (elt.get("inkscape:label") == "worms") {
				for (rect in elt.elementsNamed("rect")) {
					var x1:Int = Math.floor(Std.parseInt(rect.get("x")) / gridOfMap);
					var y1:Int = Math.floor(Std.parseInt(rect.get("y")) / gridOfMap);
					Worm.addWorm(x1, y1);
				}
				}
			else if (elt.get("inkscape:label") == "fieldofworms") {
				for (rect in elt.elementsNamed("rect")) {
					var x1:Int = Math.floor(Std.parseInt(rect.get("x")) / gridOfMap);
					var y1:Int = Math.floor(Std.parseInt(rect.get("y")) / gridOfMap);
					var w1:Int = Std.int(Std.parseInt(rect.get("width")) / gridOfMap);
					var h1:Int = Std.int(Std.parseInt(rect.get("height")) / gridOfMap);
					for (x in 0...w1) {
						for (y in 0...h1) {
								Worm.addWorm(x1 + x, y1 + y);
							}
						}
					
				}
				}
			else if (elt.get("inkscape:label") == "entrance") {
				for (rect in elt.elementsNamed("rect")) {
					var x1:Int = Math.floor(Std.parseInt(rect.get("x")) / gridOfMap);
					var y1:Int = Math.floor(Std.parseInt(rect.get("y")) / gridOfMap);
					Hen.addHen(x1, y1);
				}
				}
			else if (elt.get("inkscape:label") == "exit") {
				for (rect in elt.elementsNamed("rect")) {
					var x1:Int = Math.floor(Std.parseInt(rect.get("x")) / gridOfMap);
					var y1:Int = Math.floor(Std.parseInt(rect.get("y")) / gridOfMap);
					Nest.addNest(x1, y1);
				}
				}
			}
		Main.mapIsReady();
	   }


}