/**
 * ...
 * @author paul
 */

package ;
import js.Dom;
import js.Lib;
class Message 
{
	static var currentWindow:HtmlDom;
	
	public function new() 
	{
		
	}
	
	static public function display(message:String) {
			if (currentWindow != null )
				closeLayer("popin");
			addLayer("popin", message);
		}

	static function closeLayer(theobject) {
		var par		:HtmlDom = currentWindow.parentNode ;
		par.removeChild (currentWindow);
		currentWindow = null;
	}

	static function addLayer(id:String, message:String) {
		var doc:Document = Lib.document;
		var bgLayer = doc.createElement ("div");
		bgLayer.id = id;
		bgLayer.style.position 	= "absolute";
		bgLayer.style.height 	= "100%";
		bgLayer.style.width 	= "100%";
		bgLayer.style.zIndex 	= 990;
		bgLayer.style.top 		= "0";
		bgLayer.style.left 		= "0";
		
		bgLayer.onclick = closeEvent ;
		
		var windowWidth:Int 	= 	(Lib.window.innerWidth!= null) 	? Lib.window.innerWidth : doc.body.offsetWidth;
		var windowHeight:Int 	= 	(Lib.window.innerHeight!= null) ? Lib.window.innerHeight : doc.body.offsetHeight;

		
		var topPosition:Int = Math.floor((windowHeight / 2) - 60 );
		var leftPosition:Int = Math.floor((windowWidth/2 ) - 200 );

		
		bgLayer.innerHTML = '<div id="iWindow" style="position:relative;width:100%;margin:0px auto;z-index:1000;color:#000000;"><div style="position:absolute;top:' + topPosition + 'px;left:' + leftPosition + 'px;width:400px;padding:25px 25px;background-color:#ffffff;border:5px solid #333;font-size:14px;"><div style="text-align:center;">' + message + '<a href="#" style="font-size:10px;position:absolute;right:5px;top:5px;" id="windowCloser">Close</a></div></div></div>';
		
		
		doc.body.appendChild(bgLayer);
		
		doc.getElementById("windowCloser").onclick = closeEvent ;
		currentWindow = bgLayer ;
		}

		static function closeEvent(e:Dynamic) {
				untyped if (!e) e = Lib.window.event;
				e.cancelBubble = true;
				Lib.document.getElementById("popin").onclick = function (e:Dynamic) { }
				Lib.document.getElementById("windowCloser").onclick = function (e:Dynamic){}
				closeLayer("popin");
			}

}