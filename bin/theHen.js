$estr = function() { return js.Boot.__string_rec(this,''); }
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	{
		var $tmp = encodeURIComponent(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	{
		var $tmp = decodeURIComponent(s.split("+").join(" "));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	{
		var $tmp = (s.length >= start.length && s.substr(0,start.length) == start);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	{
		var $tmp = (slen >= elen && s.substr(slen - elen,elen) == end);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	{
		var $tmp = (c >= 9 && c <= 13) || c == 32;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	}
	else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,(l - r) - 1)) {
		r++;
	}
	if(r > 0) {
		{
			var $tmp = s.substr(0,l - r);
			$s.pop();
			return $tmp;
		}
	}
	else {
		{
			$s.pop();
			return s;
		}
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	{
		var $tmp = StringTools.ltrim(StringTools.rtrim(s));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	{
		var $tmp = ns + s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	{
		var $tmp = s.split(sub).join(by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var neg = false;
	if(n < 0) {
		neg = true;
		n = -n;
	}
	var s = n.toString(16);
	s = s.toUpperCase();
	if(digits != null) while(s.length < digits) s = "0" + s;
	if(neg) s = "-" + s;
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
Message = function(p) { if( p === $_ ) return; {
	$s.push("Message::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
Message.__name__ = ["Message"];
Message.currentWindow = null;
Message.display = function(message) {
	$s.push("Message::display");
	var $spos = $s.length;
	if(Message.currentWindow != null) Message.closeLayer("popin");
	Message.addLayer("popin",message);
	$s.pop();
}
Message.closeLayer = function(theobject) {
	$s.push("Message::closeLayer");
	var $spos = $s.length;
	var par = Message.currentWindow.parentNode;
	par.removeChild(Message.currentWindow);
	Message.currentWindow = null;
	$s.pop();
}
Message.addLayer = function(id,message) {
	$s.push("Message::addLayer");
	var $spos = $s.length;
	var doc = js.Lib.document;
	var bgLayer = doc.createElement("div");
	bgLayer.id = id;
	bgLayer.style.position = "absolute";
	bgLayer.style.height = "100%";
	bgLayer.style.width = "100%";
	bgLayer.style.zIndex = 990;
	bgLayer.style.top = "0";
	bgLayer.style.left = "0";
	bgLayer.onclick = $closure(Message,"closeEvent");
	var windowWidth = ((js.Lib.window.innerWidth != null)?js.Lib.window.innerWidth:doc.body.offsetWidth);
	var windowHeight = ((js.Lib.window.innerHeight != null)?js.Lib.window.innerHeight:doc.body.offsetHeight);
	var topPosition = Math.floor((windowHeight / 2) - 60);
	var leftPosition = Math.floor((windowWidth / 2) - 200);
	bgLayer.innerHTML = ((((("<div id=\"iWindow\" style=\"position:relative;width:100%;margin:0px auto;z-index:1000;color:#000000;\"><div style=\"position:absolute;top:" + topPosition) + "px;left:") + leftPosition) + "px;width:400px;padding:25px 25px;background-color:#ffffff;border:5px solid #333;font-size:14px;\"><div style=\"text-align:center;\">") + message) + "<a href=\"#\" style=\"font-size:10px;position:absolute;right:5px;top:5px;\" id=\"windowCloser\">Close</a></div></div></div>";
	doc.body.appendChild(bgLayer);
	doc.getElementById("windowCloser").onclick = $closure(Message,"closeEvent");
	Message.currentWindow = bgLayer;
	$s.pop();
}
Message.closeEvent = function(e) {
	$s.push("Message::closeEvent");
	var $spos = $s.length;
	if(!e) e = js.Lib.window.event;
	else null;
	e.cancelBubble = true;
	js.Lib.document.getElementById("popin").onclick = function(e1) {
		$s.push("Message::closeEvent@63");
		var $spos = $s.length;
		null;
		$s.pop();
	}
	js.Lib.document.getElementById("windowCloser").onclick = function(e1) {
		$s.push("Message::closeEvent@64");
		var $spos = $s.length;
		null;
		$s.pop();
	}
	Message.closeLayer("popin");
	$s.pop();
}
Message.prototype.__class__ = Message;
EReg = function(r,opt) { if( r === $_ ) return; {
	$s.push("EReg::new");
	var $spos = $s.length;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
	$s.pop();
}}
EReg.__name__ = ["EReg"];
EReg.prototype.customReplace = function(s,f) {
	$s.push("EReg::customReplace");
	var $spos = $s.length;
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	{
		var $tmp = buf.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.match = function(s) {
	$s.push("EReg::match");
	var $spos = $s.length;
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	{
		var $tmp = (this.r.m != null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matched = function(n) {
	$s.push("EReg::matched");
	var $spos = $s.length;
	{
		var $tmp = (this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this)));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedLeft = function() {
	$s.push("EReg::matchedLeft");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) {
		var $tmp = this.r.s.substr(0,this.r.m.index);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = this.r.l;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedPos = function() {
	$s.push("EReg::matchedPos");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	{
		var $tmp = { pos : this.r.m.index, len : this.r.m[0].length}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedRight = function() {
	$s.push("EReg::matchedRight");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		{
			var $tmp = this.r.s.substr(sz,this.r.s.length - sz);
			$s.pop();
			return $tmp;
		}
	}
	{
		var $tmp = this.r.r;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.r = null;
EReg.prototype.replace = function(s,by) {
	$s.push("EReg::replace");
	var $spos = $s.length;
	{
		var $tmp = s.replace(this.r,by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.split = function(s) {
	$s.push("EReg::split");
	var $spos = $s.length;
	var d = "#__delim__#";
	{
		var $tmp = s.replace(this.r,d).split(d);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.__class__ = EReg;
if(typeof js=='undefined') js = {}
js.JsXml__ = function(p) { if( p === $_ ) return; {
	$s.push("js.JsXml__::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
js.JsXml__.__name__ = ["js","JsXml__"];
js.JsXml__.parse = function(str) {
	$s.push("js.JsXml__::parse");
	var $spos = $s.length;
	var rules = [js.JsXml__.enode,js.JsXml__.epcdata,js.JsXml__.eend,js.JsXml__.ecdata,js.JsXml__.edoctype,js.JsXml__.ecomment,js.JsXml__.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(js.JsXml__.eattribute.match(str)) {
							x.set(js.JsXml__.eattribute.matched(1),js.JsXml__.eattribute.matched(3));
							str = js.JsXml__.eattribute.matchedRight();
						}
						if(!js.JsXml__.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(js.JsXml__.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = js.JsXml__.eclose.matchedRight();
					}break;
					case 1:{
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!js.JsXml__.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(js.JsXml__.ecdata_end.matchedLeft());
						current.addChild(x);
						str = js.JsXml__.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!js.JsXml__.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = js.JsXml__.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = js.JsXml__.edoctype_elt.matchedRight();
								switch(js.JsXml__.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(0,pos));
						current.addChild(x);
					}break;
					case 5:{
						if(!js.JsXml__.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = js.JsXml__.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(0,p.pos + p.len));
						current.addChild(x);
						str = js.JsXml__.ecomment_end.matchedRight();
					}break;
					case 6:{
						var x = Xml.createProlog(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw (("Xml parse error : Unexpected " + str.substr(0,10)) + "...");
			else throw ("Xml parse error : Unexpected " + str);
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	{
		$s.pop();
		return current;
	}
	$s.pop();
}
js.JsXml__.createElement = function(name) {
	$s.push("js.JsXml__::createElement");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createPCData = function(data) {
	$s.push("js.JsXml__::createPCData");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createCData = function(data) {
	$s.push("js.JsXml__::createCData");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createComment = function(data) {
	$s.push("js.JsXml__::createComment");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createDocType = function(data) {
	$s.push("js.JsXml__::createDocType");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createProlog = function(data) {
	$s.push("js.JsXml__::createProlog");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createDocument = function() {
	$s.push("js.JsXml__::createDocument");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Document;
	r._children = new Array();
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.prototype._attributes = null;
js.JsXml__.prototype._children = null;
js.JsXml__.prototype._nodeName = null;
js.JsXml__.prototype._nodeValue = null;
js.JsXml__.prototype._parent = null;
js.JsXml__.prototype.addChild = function(x) {
	$s.push("js.JsXml__::addChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
	$s.pop();
}
js.JsXml__.prototype.attributes = function() {
	$s.push("js.JsXml__::attributes");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.keys();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.elements = function() {
	$s.push("js.JsXml__::elements");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("js.JsXml__::elements@285");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("js.JsXml__::elements@296");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.elementsNamed = function(name) {
	$s.push("js.JsXml__::elementsNamed");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("js.JsXml__::elementsNamed@317");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("js.JsXml__::elementsNamed@329");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == Xml.Element && n._nodeName == name) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.exists = function(att) {
	$s.push("js.JsXml__::exists");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.exists(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.firstChild = function() {
	$s.push("js.JsXml__::firstChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = this._children[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.firstElement = function() {
	$s.push("js.JsXml__::firstElement");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) {
			$s.pop();
			return n;
		}
		cur++;
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
js.JsXml__.prototype.get = function(att) {
	$s.push("js.JsXml__::get");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.get(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.getNodeName = function() {
	$s.push("js.JsXml__::getNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.getNodeValue = function() {
	$s.push("js.JsXml__::getNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.getParent = function() {
	$s.push("js.JsXml__::getParent");
	var $spos = $s.length;
	{
		var $tmp = this._parent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.insertChild = function(x,pos) {
	$s.push("js.JsXml__::insertChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
	$s.pop();
}
js.JsXml__.prototype.iterator = function() {
	$s.push("js.JsXml__::iterator");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("js.JsXml__::iterator@271");
			var $spos = $s.length;
			{
				var $tmp = this.cur < this.x.length;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("js.JsXml__::iterator@274");
			var $spos = $s.length;
			{
				var $tmp = this.x[this.cur++];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.nodeName = null;
js.JsXml__.prototype.nodeType = null;
js.JsXml__.prototype.nodeValue = null;
js.JsXml__.prototype.parent = null;
js.JsXml__.prototype.remove = function(att) {
	$s.push("js.JsXml__::remove");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
	$s.pop();
}
js.JsXml__.prototype.removeChild = function(x) {
	$s.push("js.JsXml__::removeChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
js.JsXml__.prototype.set = function(att,value) {
	$s.push("js.JsXml__::set");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
	$s.pop();
}
js.JsXml__.prototype.setNodeName = function(n) {
	$s.push("js.JsXml__::setNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName = n;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.setNodeValue = function(v) {
	$s.push("js.JsXml__::setNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.toString = function() {
	$s.push("js.JsXml__::toString");
	var $spos = $s.length;
	if(this.nodeType == Xml.PCData) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.CData) {
		var $tmp = ("<![CDATA[" + this._nodeValue) + "]]>";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.Comment || this.nodeType == Xml.DocType || this.nodeType == Xml.Prolog) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<";
		s.b[s.b.length] = this._nodeName;
		{ var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) { var k = $it0.next();
		{
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			{
				var $tmp = s.b.join("");
				$s.pop();
				return $tmp;
			}
		}
		s.b[s.b.length] = ">";
	}
	{ var $it1 = this.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	s.b[s.b.length] = x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.__class__ = js.JsXml__;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	{ var $it2 = arr.iterator();
	while( $it2.hasNext() ) { var t = $it2.next();
	if(t == field) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	}
	catch( $e3 ) {
		{
			var e = $e3;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
	var a = new Array();
	if(o.hasOwnProperty) {
		
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e4 ) {
			{
				var e = $e4;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
		if(t != null) o.__proto__ = t;
	}
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = ((a == b)?0:((((a) > (b))?1:-1)));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	{
		var $tmp = (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@378");
			var $spos = $s.length;
			var a = new Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
Map = function(p) { if( p === $_ ) return; {
	$s.push("Map::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
Map.__name__ = ["Map"];
Map.gridOfMap = null;
Map.load = function(filename) {
	$s.push("Map::load");
	var $spos = $s.length;
	var r = new haxe.Http("./maps/" + filename);
	r.onError = $closure(js.Lib,"alert");
	r.onData = $closure(Map,"analyseData");
	r.request(false);
	$s.pop();
}
Map.analyseData = function(data) {
	$s.push("Map::analyseData");
	var $spos = $s.length;
	var xml = Xml.parse(data).firstElement();
	{ var $it5 = xml.elementsNamed("sodipodi:namedview");
	while( $it5.hasNext() ) { var elt = $it5.next();
	{
		{ var $it6 = xml.elementsNamed("inkscape:grid");
		while( $it6.hasNext() ) { var elt1 = $it6.next();
		{
			var empspacing = elt1.get("empspacing");
			if(empspacing != null) {
				Map.gridOfMap = Std.parseInt(empspacing);
			}
			break;
		}
		}}
		break;
	}
	}}
	if(Map.gridOfMap == null) {
		Map.gridOfMap = 20;
	}
	{ var $it7 = xml.elementsNamed("g");
	while( $it7.hasNext() ) { var elt = $it7.next();
	{
		if(elt.get("inkscape:label") == "walls") {
			{ var $it8 = elt.elementsNamed("rect");
			while( $it8.hasNext() ) { var rect = $it8.next();
			{
				var x1 = Std["int"](Std.parseInt(rect.get("x")) / Map.gridOfMap);
				var x2 = x1 + Std["int"](Std.parseInt(rect.get("width")) / Map.gridOfMap);
				var y1 = Std["int"](Std.parseInt(rect.get("y")) / Map.gridOfMap);
				var y2 = y1 + Std["int"](Std.parseInt(rect.get("height")) / Map.gridOfMap);
				sprites.Wall.addWall(x1,x2,y1,y2);
			}
			}}
		}
		else if(elt.get("inkscape:label") == "worms") {
			{ var $it9 = elt.elementsNamed("rect");
			while( $it9.hasNext() ) { var rect = $it9.next();
			{
				var x1 = Math.floor(Std.parseInt(rect.get("x")) / Map.gridOfMap);
				var y1 = Math.floor(Std.parseInt(rect.get("y")) / Map.gridOfMap);
				sprites.Worm.addWorm(x1,y1);
			}
			}}
		}
		else if(elt.get("inkscape:label") == "fieldofworms") {
			{ var $it10 = elt.elementsNamed("rect");
			while( $it10.hasNext() ) { var rect = $it10.next();
			{
				var x1 = Math.floor(Std.parseInt(rect.get("x")) / Map.gridOfMap);
				var y1 = Math.floor(Std.parseInt(rect.get("y")) / Map.gridOfMap);
				var w1 = Std["int"](Std.parseInt(rect.get("width")) / Map.gridOfMap);
				var h1 = Std["int"](Std.parseInt(rect.get("height")) / Map.gridOfMap);
				{
					var _g = 0;
					while(_g < w1) {
						var x = _g++;
						{
							var _g1 = 0;
							while(_g1 < h1) {
								var y = _g1++;
								sprites.Worm.addWorm(x1 + x,y1 + y);
							}
						}
					}
				}
			}
			}}
		}
		else if(elt.get("inkscape:label") == "entrance") {
			{ var $it11 = elt.elementsNamed("rect");
			while( $it11.hasNext() ) { var rect = $it11.next();
			{
				var x1 = Math.floor(Std.parseInt(rect.get("x")) / Map.gridOfMap);
				var y1 = Math.floor(Std.parseInt(rect.get("y")) / Map.gridOfMap);
				sprites.Hen.addHen(x1,y1);
			}
			}}
		}
		else if(elt.get("inkscape:label") == "exit") {
			{ var $it12 = elt.elementsNamed("rect");
			while( $it12.hasNext() ) { var rect = $it12.next();
			{
				var x1 = Math.floor(Std.parseInt(rect.get("x")) / Map.gridOfMap);
				var y1 = Math.floor(Std.parseInt(rect.get("y")) / Map.gridOfMap);
				sprites.Nest.addNest(x1,y1);
			}
			}}
		}
	}
	}}
	Main.mapIsReady();
	$s.pop();
}
Map.prototype.__class__ = Map;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
if(typeof sprites=='undefined') sprites = {}
sprites.Wall = function(aid,ax1,ax2,ay1,ay2) { if( aid === $_ ) return; {
	$s.push("sprites.Wall::new");
	var $spos = $s.length;
	this.id = aid;
	this.x1 = ax1;
	this.x2 = ax2 - 1;
	this.y1 = ay1;
	this.y2 = ay2 - 1;
	if(this.x2 < this.x1 || this.y2 < this.y1) haxe.Log.trace("some rect are badly built",{ fileName : "Wall.hx", lineNumber : 28, className : "sprites.Wall", methodName : "new"});
	{
		var _g = ax1;
		while(_g < ax2) {
			var i = _g++;
			{
				var _g1 = ay1;
				while(_g1 < ay2) {
					var j = _g1++;
					sprites.Brick.addBrick(i,j);
				}
			}
		}
	}
	$s.pop();
}}
sprites.Wall.__name__ = ["sprites","Wall"];
sprites.Wall.currentIndex = null;
sprites.Wall.listById = null;
sprites.Wall.removeAll = function() {
	$s.push("sprites.Wall::removeAll");
	var $spos = $s.length;
	{ var $it13 = sprites.Wall.listById.iterator();
	while( $it13.hasNext() ) { var wall = $it13.next();
	{
		wall.remove();
	}
	}}
	sprites.Wall.currentIndex = null;
	$s.pop();
}
sprites.Wall.addWall = function(ax1,ax2,ay1,ay2) {
	$s.push("sprites.Wall::addWall");
	var $spos = $s.length;
	if(sprites.Wall.listById == null) sprites.Wall.listById = new Hash();
	var newId = sprites.Wall.getNewId();
	sprites.Wall.listById.set(newId,new sprites.Wall(newId,ax1,ax2,ay1,ay2));
	$s.pop();
}
sprites.Wall.getNewId = function() {
	$s.push("sprites.Wall::getNewId");
	var $spos = $s.length;
	if(sprites.Wall.currentIndex == null) sprites.Wall.currentIndex = 0;
	sprites.Wall.currentIndex++;
	{
		var $tmp = "wall" + Std.string(sprites.Wall.currentIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Wall.prototype.crosses = function(ax1,ax2,ay1,ay2) {
	$s.push("sprites.Wall::crosses");
	var $spos = $s.length;
	var tx1, tx2, ty1, ty2;
	if(ax1 <= ax2) {
		tx1 = ax1;
		tx2 = ax2;
	}
	else {
		tx1 = ax2;
		tx2 = ax1;
	}
	if(ay1 <= ay2) {
		ty1 = ay1;
		ty2 = ay2;
	}
	else {
		ty1 = ay2;
		ty2 = ay1;
	}
	if(tx1 > this.x2 || tx2 < this.x1) {
		$s.pop();
		return false;
	}
	if(ty1 > this.y2 || ty2 < this.y1) {
		$s.pop();
		return false;
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
sprites.Wall.prototype.crossesPath = function(pathX,pathY) {
	$s.push("sprites.Wall::crossesPath");
	var $spos = $s.length;
	{
		var _g1 = 0, _g = pathX.length;
		while(_g1 < _g) {
			var i = _g1++;
			var xi = pathX[i], yi = pathY[i];
			if(xi >= this.x1 && xi <= this.x2 && yi >= this.y1 && yi <= this.y2) {
				{
					$s.pop();
					return true;
				}
			}
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
sprites.Wall.prototype.id = null;
sprites.Wall.prototype.remove = function() {
	$s.push("sprites.Wall::remove");
	var $spos = $s.length;
	sprites.Wall.listById.remove(this.id);
	$s.pop();
}
sprites.Wall.prototype.x1 = null;
sprites.Wall.prototype.x2 = null;
sprites.Wall.prototype.y1 = null;
sprites.Wall.prototype.y2 = null;
sprites.Wall.prototype.__class__ = sprites.Wall;
sprites.Sprite = function(p) { if( p === $_ ) return; {
	$s.push("sprites.Sprite::new");
	var $spos = $s.length;
	var document = js.Lib.document;
	var scene = document.getElementById("scene");
	this.domSprite = document.createElement("div");
	this.domSprite.setAttribute("id",this.id);
	this.domSprite.className = this.className;
	scene.appendChild(this.domSprite);
	this.updateVisible();
	$s.pop();
}}
sprites.Sprite.__name__ = ["sprites","Sprite"];
sprites.Sprite.prototype.className = null;
sprites.Sprite.prototype.domSprite = null;
sprites.Sprite.prototype.exactCoords = function(ax,ay) {
	$s.push("sprites.Sprite::exactCoords");
	var $spos = $s.length;
	if(ax == this.x && ay == this.y) {
		$s.pop();
		return true;
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
sprites.Sprite.prototype.getId = function() {
	$s.push("sprites.Sprite::getId");
	var $spos = $s.length;
	{
		var $tmp = this.id;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Sprite.prototype.getXY = function() {
	$s.push("sprites.Sprite::getXY");
	var $spos = $s.length;
	{
		var $tmp = [this.x,this.y];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Sprite.prototype.id = null;
sprites.Sprite.prototype.removeSprite = function() {
	$s.push("sprites.Sprite::removeSprite");
	var $spos = $s.length;
	var document = js.Lib.document;
	try {
		var toRemove = document.getElementById(this.id);
		var parent = toRemove.parentNode;
		parent.removeChild(toRemove);
	}
	catch( $e14 ) {
		{
			var e = $e14;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				js.Lib.alert(this.id);
			}
		}
	}
	$s.pop();
}
sprites.Sprite.prototype.updateVisible = function() {
	$s.push("sprites.Sprite::updateVisible");
	var $spos = $s.length;
	var style = this.domSprite.style;
	style.left = Std.string(20 * this.x) + "px";
	style.top = Std.string(20 * this.y) + "px";
	$s.pop();
}
sprites.Sprite.prototype.x = null;
sprites.Sprite.prototype.y = null;
sprites.Sprite.prototype.__class__ = sprites.Sprite;
sprites.Hen = function(aId,aX,aY) { if( aId === $_ ) return; {
	$s.push("sprites.Hen::new");
	var $spos = $s.length;
	this.pathX = [];
	this.pathY = [];
	this.id = aId;
	this.x = aX;
	this.y = aY;
	this.animStep = 0;
	this.className = "sprite hen";
	sprites.Sprite.apply(this,[]);
	$s.pop();
}}
sprites.Hen.__name__ = ["sprites","Hen"];
sprites.Hen.__super__ = sprites.Sprite;
for(var k in sprites.Sprite.prototype ) sprites.Hen.prototype[k] = sprites.Sprite.prototype[k];
sprites.Hen.currentIndex = null;
sprites.Hen.listById = null;
sprites.Hen.clickOnHen = function(aId) {
	$s.push("sprites.Hen::clickOnHen");
	var $spos = $s.length;
	var hen = sprites.Hen.listById.get(aId);
	haxe.Log.trace((hen.x + " : ") + hen.y,{ fileName : "Hen.hx", lineNumber : 55, className : "sprites.Hen", methodName : "clickOnHen"});
	haxe.Log.trace(hen.pathX,{ fileName : "Hen.hx", lineNumber : 56, className : "sprites.Hen", methodName : "clickOnHen"});
	haxe.Log.trace(hen.pathY,{ fileName : "Hen.hx", lineNumber : 57, className : "sprites.Hen", methodName : "clickOnHen"});
	$s.pop();
}
sprites.Hen.removeAll = function() {
	$s.push("sprites.Hen::removeAll");
	var $spos = $s.length;
	{ var $it15 = sprites.Hen.listById.iterator();
	while( $it15.hasNext() ) { var hen = $it15.next();
	{
		hen.remove();
	}
	}}
	sprites.Hen.currentIndex = null;
	$s.pop();
}
sprites.Hen.getNewId = function() {
	$s.push("sprites.Hen::getNewId");
	var $spos = $s.length;
	if(sprites.Hen.currentIndex == null) sprites.Hen.currentIndex = 0;
	sprites.Hen.currentIndex++;
	{
		var $tmp = "hen" + Std.string(sprites.Hen.currentIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.getFirstHen = function() {
	$s.push("sprites.Hen::getFirstHen");
	var $spos = $s.length;
	{
		var $tmp = sprites.Hen.listById.get("hen1");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.addHen = function(x,y) {
	$s.push("sprites.Hen::addHen");
	var $spos = $s.length;
	if(sprites.Hen.listById == null) sprites.Hen.listById = new Hash();
	var newId = sprites.Hen.getNewId();
	sprites.Hen.listById.set(newId,new sprites.Hen(newId,x,y));
	{
		var $tmp = sprites.Hen.listById.get(newId);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.prototype.animStep = null;
sprites.Hen.prototype.defineNestTarget = function() {
	$s.push("sprites.Hen::defineNestTarget");
	var $spos = $s.length;
	var nest = sprites.Nest.listById.get("nest1");
	if(nest == this.nestTarget) {
		$s.pop();
		return;
	}
	else this.nestTarget = null;
	var nestXY = nest.getXY();
	var nx = nestXY[0];
	var ny = nestXY[1];
	var test = this.isTargetInView(nx,ny);
	if(Type["typeof"](test) == ValueType.TBool) {
		if(test == true) {
			var thePaths = this.definePath(this.x,this.y,nx,ny);
			this.pathX = thePaths[0];
			this.pathY = thePaths[1];
			this.nestTarget = nest;
		}
	}
	else {
		this.pathX = test[0];
		this.pathY = test[1];
		this.nestTarget = nest;
	}
	$s.pop();
}
sprites.Hen.prototype.definePath = function(x1,y1,x2,y2) {
	$s.push("sprites.Hen::definePath");
	var $spos = $s.length;
	var pathX = [];
	var pathY = [];
	var x_end = x2, y_end = y2;
	var invertX, invertY, invertXY, tmp_x1, tmp_x2, Int, tmp_y1, tmp_y2, dx, dy, e;
	invertX = (x2 < x1);
	invertY = (y2 < y1);
	tmp_x1 = (invertX?x2:x1);
	tmp_x2 = (invertX?x1:x2);
	tmp_y1 = (invertY?y2:y1);
	tmp_y2 = (invertY?y1:y2);
	invertXY = tmp_y2 - tmp_y1 > tmp_x2 - tmp_x1;
	if(invertXY) {
		x1 = tmp_y1;
		x2 = tmp_y2;
		y1 = tmp_x1;
		y2 = tmp_x2;
	}
	else {
		x1 = tmp_x1;
		x2 = tmp_x2;
		y1 = tmp_y1;
		y2 = tmp_y2;
	}
	tmp_x1 = tmp_x2 = tmp_y1 = tmp_y2 = null;
	e = x2 - x1;
	dx = 2 * e;
	dy = 2 * (y2 - y1);
	while(x1 < x2) {
		pathX.push(x1);
		pathY.push(y1);
		x1++;
		e -= dy;
		if(e <= 0) {
			y1++;
			e += dx;
		}
	}
	if(invertXY) {
		var tmp = pathX;
		pathX = pathY;
		pathY = tmp;
		tmp = null;
	}
	if(invertX) pathX.reverse();
	if(invertY) pathY.reverse();
	if(!invertX || !invertY) {
		pathX.push(x_end);
		pathY.push(y_end);
	}
	{
		var $tmp = [pathX,pathY];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.prototype.defineTarget = function() {
	$s.push("sprites.Hen::defineTarget");
	var $spos = $s.length;
	sprites.Worm.listDistance.sort($closure(this,"sorter"));
	{
		var _g = 0, _g1 = sprites.Worm.listDistance;
		while(_g < _g1.length) {
			var idWorm = _g1[_g];
			++_g;
			var nTarget = sprites.Worm.listById.get(idWorm);
			if(nTarget == this.target) {
				$s.pop();
				return;
			}
			nTarget = sprites.Worm.listById.get(idWorm);
			var tXY = nTarget.getXY();
			var tmpFinalX = tXY[0];
			var tmpFinalY = tXY[1];
			var tmpPathX = new Array();
			var tmpPathY = new Array();
			var test = this.isTargetInView(tmpFinalX,tmpFinalY);
			if(Type["typeof"](test) == ValueType.TBool) {
				if(test == false) {
					nTarget = null;
					continue;
				}
				else if(test == true) {
					var thePaths = this.definePath(this.x,this.y,tmpFinalX,tmpFinalY);
					tmpPathX = thePaths[0];
					tmpPathY = thePaths[1];
				}
			}
			else {
				tmpPathX = test[0];
				tmpPathY = test[1];
			}
			this.nestTarget = null;
			this.target = nTarget;
			this.pathX = tmpPathX;
			this.pathY = tmpPathY;
			break;
		}
	}
	$s.pop();
}
sprites.Hen.prototype.eat = function() {
	$s.push("sprites.Hen::eat");
	var $spos = $s.length;
	this.target.getEaten();
	this.target = null;
	$s.pop();
}
sprites.Hen.prototype.getTargetId = function() {
	$s.push("sprites.Hen::getTargetId");
	var $spos = $s.length;
	{
		var $tmp = this.target.getId();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.prototype.hasNestTarget = function() {
	$s.push("sprites.Hen::hasNestTarget");
	var $spos = $s.length;
	{
		var $tmp = (this.nestTarget != null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.prototype.hasTarget = function() {
	$s.push("sprites.Hen::hasTarget");
	var $spos = $s.length;
	{
		var $tmp = (this.target != null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.prototype.isTargetInView = function(fx,fy) {
	$s.push("sprites.Hen::isTargetInView");
	var $spos = $s.length;
	var tmpPathX = new Array();
	var tmpPathY = new Array();
	var pathIsDefined = false;
	{ var $it16 = sprites.Wall.listById.iterator();
	while( $it16.hasNext() ) { var wall = $it16.next();
	{
		if(wall.crosses(this.x,fx,this.y,fy)) {
			var thePaths = this.definePath(this.x,this.y,fx,fy);
			tmpPathX = thePaths[0];
			tmpPathY = thePaths[1];
			pathIsDefined = true;
			if(wall.crossesPath(tmpPathX,tmpPathY)) {
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	}}
	if(pathIsDefined) {
		var $tmp = [tmpPathX,tmpPathY];
		$s.pop();
		return $tmp;
	}
	else {
		$s.pop();
		return true;
	}
	$s.pop();
}
sprites.Hen.prototype.lay = function() {
	$s.push("sprites.Hen::lay");
	var $spos = $s.length;
	this.nestTarget = null;
	this.target = null;
	Main.stopGame();
	$s.pop();
}
sprites.Hen.prototype.moveOn = function() {
	$s.push("sprites.Hen::moveOn");
	var $spos = $s.length;
	sprites.Indicator.removeAll();
	sprites.Indicator.draw(this.pathX,this.pathY);
	if(this.pathX.length > 0) {
		var xx = this.x;
		var yy = this.y;
		this.x = this.pathX.shift();
		this.y = this.pathY.shift();
		if(this.x > xx) this.towardRight = true;
		else if(this.x < xx) this.towardRight = false;
		else if(xx == this.x && yy == this.y) null;
	}
	else {
		if(this.hasTarget()) this.eat();
		else if(this.hasNestTarget()) this.lay();
	}
	this.updateVisible();
	$s.pop();
}
sprites.Hen.prototype.nestTarget = null;
sprites.Hen.prototype.pathX = null;
sprites.Hen.prototype.pathY = null;
sprites.Hen.prototype.remove = function() {
	$s.push("sprites.Hen::remove");
	var $spos = $s.length;
	this.removeSprite();
	sprites.Hen.listById.remove(this.id);
	$s.pop();
}
sprites.Hen.prototype.resetTarget = function() {
	$s.push("sprites.Hen::resetTarget");
	var $spos = $s.length;
	this.target = null;
	$s.pop();
}
sprites.Hen.prototype.sorter = function(a,b) {
	$s.push("sprites.Hen::sorter");
	var $spos = $s.length;
	var aa = sprites.Worm.listById.get(a).getXY();
	var aDist = Std["int"](Math.pow((aa[0] - this.x),2) + Math.pow((aa[1] - this.y),2));
	var bb = sprites.Worm.listById.get(b).getXY();
	var bDist = Std["int"](Math.pow((bb[0] - this.x),2) + Math.pow((bb[1] - this.y),2));
	{
		var $tmp = aDist - bDist;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Hen.prototype.target = null;
sprites.Hen.prototype.towardRight = null;
sprites.Hen.prototype.updateGraphic = function() {
	$s.push("sprites.Hen::updateGraphic");
	var $spos = $s.length;
	var style = this.domSprite.style;
	var xbg = (this.towardRight?"0px":Std.string(20) + "px");
	if(this.animStep++ > 3) this.animStep = 0;
	var ybg = Std.string(this.animStep * 20) + "px";
	style.backgroundPosition = (xbg + " ") + ybg;
	$s.pop();
}
sprites.Hen.prototype.__class__ = sprites.Hen;
StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x;
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b[this.b.length] = String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b[this.b.length] = s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringBuf.prototype.__class__ = StringBuf;
sprites.Worm = function(aId,ax,ay) { if( aId === $_ ) return; {
	$s.push("sprites.Worm::new");
	var $spos = $s.length;
	this.id = aId;
	this.x = ax;
	this.y = ay;
	this.className = "sprite worm";
	this.animStep = Math.floor(10 * Math.random());
	sprites.Worm.listDistance.push(this.id);
	sprites.Worm.addIsPossible = (sprites.Worm.listDistance.length < 80);
	sprites.Sprite.apply(this,[]);
	this.domSprite.onclick = function(e) {
		$s.push("sprites.Worm::new@35");
		var $spos = $s.length;
		var targ;
		if(!e) e = js.Lib.window.event;
		else null;
		e.cancelBubble = true;
		if(e.target) targ = e.target;
		else if(e.srcElement) targ = e.srcElement;
		else targ = e.target;
		if(targ.nodeType == 3) targ = targ.parentNode;
		sprites.Worm.clickOnWorm(targ.id);
		$s.pop();
	}
	$s.pop();
}}
sprites.Worm.__name__ = ["sprites","Worm"];
sprites.Worm.__super__ = sprites.Sprite;
for(var k in sprites.Sprite.prototype ) sprites.Worm.prototype[k] = sprites.Sprite.prototype[k];
sprites.Worm.currentIndex = null;
sprites.Worm.listDistance = null;
sprites.Worm.listById = null;
sprites.Worm.addIsPossible = null;
sprites.Worm.updateAllGraphics = function() {
	$s.push("sprites.Worm::updateAllGraphics");
	var $spos = $s.length;
	{ var $it17 = sprites.Worm.listById.iterator();
	while( $it17.hasNext() ) { var w = $it17.next();
	w.updateGraphic();
	}}
	$s.pop();
}
sprites.Worm.clickOnWorm = function(aId) {
	$s.push("sprites.Worm::clickOnWorm");
	var $spos = $s.length;
	var relaunch = false;
	if(Main.hen.hasTarget() && Main.hen.getTargetId() == aId) {
		Main.pause();
		relaunch = true;
		Main.hen.resetTarget();
	}
	sprites.Worm.removeWorm(aId);
	if(relaunch) Main.start();
	$s.pop();
}
sprites.Worm.addRandomWorm = function() {
	$s.push("sprites.Worm::addRandomWorm");
	var $spos = $s.length;
	var rx = Math.floor(24 * Math.random());
	var ry = Math.floor(24 * Math.random());
	while(!Main.isFreeLocation(rx,ry)) {
		rx = Math.floor(24 * Math.random());
		ry = Math.floor(24 * Math.random());
	}
	sprites.Worm.addWorm(rx,ry);
	$s.pop();
}
sprites.Worm.removeWorm = function(aId) {
	$s.push("sprites.Worm::removeWorm");
	var $spos = $s.length;
	var worm = sprites.Worm.listById.get(aId);
	worm.removeSprite();
	sprites.Worm.listById.remove(aId);
	sprites.Worm.listDistance.remove(aId);
	$s.pop();
}
sprites.Worm.removeAll = function() {
	$s.push("sprites.Worm::removeAll");
	var $spos = $s.length;
	{ var $it18 = sprites.Worm.listById.iterator();
	while( $it18.hasNext() ) { var worm = $it18.next();
	{
		worm.remove();
	}
	}}
	sprites.Worm.currentIndex = null;
	sprites.Worm.listDistance = null;
	$s.pop();
}
sprites.Worm.addWorm = function(x,y) {
	$s.push("sprites.Worm::addWorm");
	var $spos = $s.length;
	if(sprites.Worm.listById == null) sprites.Worm.listById = new Hash();
	if(sprites.Worm.listDistance == null) sprites.Worm.listDistance = new Array();
	var newId = sprites.Worm.getNewId();
	sprites.Worm.listById.set(newId,new sprites.Worm(newId,x,y));
	$s.pop();
}
sprites.Worm.getNewId = function() {
	$s.push("sprites.Worm::getNewId");
	var $spos = $s.length;
	if(sprites.Worm.currentIndex == null) sprites.Worm.currentIndex = 0;
	sprites.Worm.currentIndex++;
	{
		var $tmp = "worm" + Std.string(sprites.Worm.currentIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Worm.prototype.animStep = null;
sprites.Worm.prototype.getEaten = function() {
	$s.push("sprites.Worm::getEaten");
	var $spos = $s.length;
	sprites.Worm.removeWorm(this.id);
	$s.pop();
}
sprites.Worm.prototype.remove = function() {
	$s.push("sprites.Worm::remove");
	var $spos = $s.length;
	this.removeSprite();
	sprites.Worm.listById.remove(this.id);
	$s.pop();
}
sprites.Worm.prototype.updateGraphic = function() {
	$s.push("sprites.Worm::updateGraphic");
	var $spos = $s.length;
	var style = this.domSprite.style;
	if(this.animStep++ > 10) this.animStep = 0;
	var ybg = Std.string(this.animStep * 20) + "px";
	style.backgroundPosition = "0px " + ybg;
	$s.pop();
}
sprites.Worm.prototype.__class__ = sprites.Worm;
IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	$s.push("haxe.Timer::new");
	var $spos = $s.length;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval(("haxe.Timer.arr[" + this.id) + "].run();",time_ms);
	$s.pop();
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	$s.push("haxe.Timer::delay");
	var $spos = $s.length;
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		$s.push("haxe.Timer::delay@78");
		var $spos = $s.length;
		t.stop();
		f();
		$s.pop();
	}
	{
		$s.pop();
		return t;
	}
	$s.pop();
}
haxe.Timer.stamp = function() {
	$s.push("haxe.Timer::stamp");
	var $spos = $s.length;
	{
		var $tmp = Date.now().getTime() / 1000;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.run = function() {
	$s.push("haxe.Timer::run");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.Timer.prototype.stop = function() {
	$s.push("haxe.Timer::stop");
	var $spos = $s.length;
	if(this.id == null) {
		$s.pop();
		return;
	}
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
	$s.pop();
}
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.__class__ = haxe.Timer;
sprites.Nest = function(aId,ax,ay) { if( aId === $_ ) return; {
	$s.push("sprites.Nest::new");
	var $spos = $s.length;
	this.id = aId;
	this.x = ax;
	this.y = ay;
	this.className = "sprite nest";
	sprites.Sprite.apply(this,[]);
	$s.pop();
}}
sprites.Nest.__name__ = ["sprites","Nest"];
sprites.Nest.__super__ = sprites.Sprite;
for(var k in sprites.Sprite.prototype ) sprites.Nest.prototype[k] = sprites.Sprite.prototype[k];
sprites.Nest.currentIndex = null;
sprites.Nest.listById = null;
sprites.Nest.addNest = function(x,y) {
	$s.push("sprites.Nest::addNest");
	var $spos = $s.length;
	if(sprites.Nest.listById == null) sprites.Nest.listById = new Hash();
	var newId = sprites.Nest.getNewId();
	sprites.Nest.listById.set(newId,new sprites.Nest(newId,x,y));
	$s.pop();
}
sprites.Nest.removeAll = function() {
	$s.push("sprites.Nest::removeAll");
	var $spos = $s.length;
	{ var $it19 = sprites.Nest.listById.iterator();
	while( $it19.hasNext() ) { var nest = $it19.next();
	{
		nest.remove();
	}
	}}
	sprites.Nest.currentIndex = null;
	$s.pop();
}
sprites.Nest.getNewId = function() {
	$s.push("sprites.Nest::getNewId");
	var $spos = $s.length;
	if(sprites.Nest.currentIndex == null) sprites.Nest.currentIndex = 0;
	sprites.Nest.currentIndex++;
	{
		var $tmp = "nest" + Std.string(sprites.Nest.currentIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Nest.prototype.remove = function() {
	$s.push("sprites.Nest::remove");
	var $spos = $s.length;
	this.removeSprite();
	sprites.Nest.listById.remove(this.id);
	$s.pop();
}
sprites.Nest.prototype.__class__ = sprites.Nest;
sprites.Indicator = function(aId,ax,ay,colision) { if( aId === $_ ) return; {
	$s.push("sprites.Indicator::new");
	var $spos = $s.length;
	this.id = aId;
	this.x = ax;
	this.y = ay;
	this.className = "sprite indicator";
	if(colision) {
		this.className += " colision";
	}
	sprites.Sprite.apply(this,[]);
	$s.pop();
}}
sprites.Indicator.__name__ = ["sprites","Indicator"];
sprites.Indicator.__super__ = sprites.Sprite;
for(var k in sprites.Sprite.prototype ) sprites.Indicator.prototype[k] = sprites.Sprite.prototype[k];
sprites.Indicator.currentIndex = null;
sprites.Indicator.listById = null;
sprites.Indicator.draw = function(pathX,pathY) {
	$s.push("sprites.Indicator::draw");
	var $spos = $s.length;
	var _g1 = 0, _g = pathX.length;
	while(_g1 < _g) {
		var i = _g1++;
		sprites.Indicator.addIndicator(pathX[i],pathY[i]);
	}
	$s.pop();
}
sprites.Indicator.removeAll = function() {
	$s.push("sprites.Indicator::removeAll");
	var $spos = $s.length;
	if(sprites.Indicator.listById == null) {
		$s.pop();
		return;
	}
	{ var $it20 = sprites.Indicator.listById.keys();
	while( $it20.hasNext() ) { var iId = $it20.next();
	{
		sprites.Indicator.removeIndicator(iId);
	}
	}}
	sprites.Indicator.currentIndex = 0;
	$s.pop();
}
sprites.Indicator.removeIndicator = function(aId) {
	$s.push("sprites.Indicator::removeIndicator");
	var $spos = $s.length;
	var pi = sprites.Indicator.listById.get(aId);
	pi.removeSprite();
	sprites.Indicator.listById.remove(aId);
	$s.pop();
}
sprites.Indicator.addIndicator = function(x,y,colision) {
	$s.push("sprites.Indicator::addIndicator");
	var $spos = $s.length;
	if(colision == null) colision = false;
	if(sprites.Indicator.listById == null) sprites.Indicator.listById = new Hash();
	var newId = sprites.Indicator.getNewId();
	sprites.Indicator.listById.set(newId,new sprites.Indicator(newId,x,y,colision));
	$s.pop();
}
sprites.Indicator.getNewId = function() {
	$s.push("sprites.Indicator::getNewId");
	var $spos = $s.length;
	if(sprites.Indicator.currentIndex == null) sprites.Indicator.currentIndex = 0;
	sprites.Indicator.currentIndex++;
	{
		var $tmp = "indicator" + Std.string(sprites.Indicator.currentIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Indicator.prototype.__class__ = sprites.Indicator;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x);
	if(Math.isNaN(v)) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = Math.floor(Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.prototype.__class__ = Std;
List = function(p) { if( p === $_ ) return; {
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.q = null;
	this.length = 0;
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	{
		$s.pop();
		return l2;
	}
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null?null:this.h[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	{
		var $tmp = { h : this.h, hasNext : function() {
			$s.push("List::iterator@196");
			var $spos = $s.length;
			{
				var $tmp = (this.h != null);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("List::iterator@199");
			var $spos = $s.length;
			if(this.h == null) {
				$s.pop();
				return null;
			}
			var x = this.h[0];
			this.h = this.h[1];
			{
				$s.pop();
				return x;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	{
		var $tmp = (this.q == null?null:this.q[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.length = null;
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	{
		$s.pop();
		return x;
	}
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			{
				$s.pop();
				return true;
			}
		}
		prev = l;
		l = l[1];
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.__class__ = List;
haxe.Http = function(url) { if( url === $_ ) return; {
	$s.push("haxe.Http::new");
	var $spos = $s.length;
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
	$s.pop();
}}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	$s.push("haxe.Http::requestUrl");
	var $spos = $s.length;
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		$s.push("haxe.Http::requestUrl@621");
		var $spos = $s.length;
		r = d;
		$s.pop();
	}
	h.onError = function(e) {
		$s.push("haxe.Http::requestUrl@624");
		var $spos = $s.length;
		throw e;
		$s.pop();
	}
	h.request(false);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
haxe.Http.prototype.async = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.onData = function(data) {
	$s.push("haxe.Http::onData");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.Http.prototype.onError = function(msg) {
	$s.push("haxe.Http::onError");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.Http.prototype.onStatus = function(status) {
	$s.push("haxe.Http::onStatus");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.Http.prototype.params = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.request = function(post) {
	$s.push("haxe.Http::request");
	var $spos = $s.length;
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		$s.push("haxe.Http::request@104");
		var $spos = $s.length;
		if(r.readyState != 4) {
			$s.pop();
			return;
		}
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			}
			catch( $e21 ) {
				{
					var e = $e21;
					$r = (function($this) {
						var $r;
						$e = [];
						while($s.length >= $spos) $e.unshift($s.pop());
						$s.push($e[0]);
						$r = null;
						return $r;
					}($this));
				}
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText);
		else switch(s) {
		case null:{
			me.onError("Failed to connect or resolve host");
		}break;
		case 12029:{
			me.onError("Failed to connect to host");
		}break;
		case 12007:{
			me.onError("Unknown host");
		}break;
		default:{
			me.onError("Http Error #" + r.status);
		}break;
		}
		$s.pop();
	}
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true;
	else { var $it22 = this.params.keys();
	while( $it22.hasNext() ) { var p = $it22.next();
	{
		if(uri == null) uri = "";
		else uri += "&";
		uri += (StringTools.urlDecode(p) + "=") + StringTools.urlEncode(this.params.get(p));
	}
	}}
	try {
		if(post) r.open("POST",this.url,this.async);
		else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",(this.url + ((question?"?":"&"))) + uri,this.async);
			uri = null;
		}
		else r.open("GET",this.url,this.async);
	}
	catch( $e23 ) {
		{
			var e = $e23;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				this.onError(e.toString());
				{
					$s.pop();
					return;
				}
			}
		}
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	{ var $it24 = this.headers.keys();
	while( $it24.hasNext() ) { var h = $it24.next();
	r.setRequestHeader(h,this.headers.get(h));
	}}
	r.send(uri);
	if(!this.async) onreadystatechange();
	$s.pop();
}
haxe.Http.prototype.setHeader = function(header,value) {
	$s.push("haxe.Http::setHeader");
	var $spos = $s.length;
	this.headers.set(header,value);
	$s.pop();
}
haxe.Http.prototype.setParameter = function(param,value) {
	$s.push("haxe.Http::setParameter");
	var $spos = $s.length;
	this.params.set(param,value);
	$s.pop();
}
haxe.Http.prototype.setPostData = function(data) {
	$s.push("haxe.Http::setPostData");
	var $spos = $s.length;
	this.postData = data;
	$s.pop();
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.__class__ = haxe.Http;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__class__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__enum__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	{
		var $tmp = c.__super__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	if(c == null) {
		$s.pop();
		return null;
	}
	var a = c.__name__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e25 ) {
		{
			var e = $e25;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return cl;
	}
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		e = eval(name);
	}
	catch( $e26 ) {
		{
			var err = $e26;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return e;
	}
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	{
		var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	{
		var $tmp = new cl($_);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw ("Constructor " + constr) + " need parameters";
		{
			var $tmp = f.apply(e,params);
			$s.pop();
			return $tmp;
		}
	}
	if(params != null && params.length != 0) throw ("Constructor " + constr) + " does not need parameters";
	{
		$s.pop();
		return f;
	}
	$s.pop();
}
Type.createEnumIndex = function(e,index,params) {
	$s.push("Type::createEnumIndex");
	var $spos = $s.length;
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	{
		var $tmp = Type.createEnum(e,c,params);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	{
		var $tmp = e.__constructs__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":{
		{
			var $tmp = ValueType.TBool;
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = ValueType.TClass(String);
			$s.pop();
			return $tmp;
		}
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
	}break;
	case "object":{
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
	}break;
	case "function":{
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFunction;
			$s.pop();
			return $tmp;
		}
	}break;
	case "undefined":{
		{
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
	}break;
	default:{
		{
			var $tmp = ValueType.TUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	try {
		if(a[0] != b[0]) {
			$s.pop();
			return false;
		}
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) {
					$s.pop();
					return false;
				}
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) {
			$s.pop();
			return false;
		}
	}
	catch( $e27 ) {
		{
			var e = $e27;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	{
		var $tmp = e[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	{
		var $tmp = e.slice(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	{
		var $tmp = e[1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.prototype.__class__ = Type;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
sprites.Brick = function(aId,ax,ay) { if( aId === $_ ) return; {
	$s.push("sprites.Brick::new");
	var $spos = $s.length;
	this.id = aId;
	this.x = ax;
	this.y = ay;
	this.className = "sprite brick";
	sprites.Sprite.apply(this,[]);
	$s.pop();
}}
sprites.Brick.__name__ = ["sprites","Brick"];
sprites.Brick.__super__ = sprites.Sprite;
for(var k in sprites.Sprite.prototype ) sprites.Brick.prototype[k] = sprites.Sprite.prototype[k];
sprites.Brick.currentIndex = null;
sprites.Brick.listById = null;
sprites.Brick.removeAll = function() {
	$s.push("sprites.Brick::removeAll");
	var $spos = $s.length;
	{ var $it28 = sprites.Brick.listById.iterator();
	while( $it28.hasNext() ) { var brick = $it28.next();
	{
		brick.remove();
	}
	}}
	sprites.Brick.currentIndex = null;
	$s.pop();
}
sprites.Brick.addBrick = function(x,y) {
	$s.push("sprites.Brick::addBrick");
	var $spos = $s.length;
	if(sprites.Brick.listById == null) sprites.Brick.listById = new Hash();
	var newId = sprites.Brick.getNewId();
	sprites.Brick.listById.set(newId,new sprites.Brick(newId,x,y));
	$s.pop();
}
sprites.Brick.getNewId = function() {
	$s.push("sprites.Brick::getNewId");
	var $spos = $s.length;
	if(sprites.Brick.currentIndex == null) sprites.Brick.currentIndex = 0;
	sprites.Brick.currentIndex++;
	{
		var $tmp = "brick" + Std.string(sprites.Brick.currentIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sprites.Brick.prototype.remove = function() {
	$s.push("sprites.Brick::remove");
	var $spos = $s.length;
	this.removeSprite();
	sprites.Brick.listById.remove(this.id);
	$s.pop();
}
sprites.Brick.prototype.__class__ = sprites.Brick;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = (i != null?((i.fileName + ":") + i.lineNumber) + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		{
			var $tmp = m.apply(o,arguments);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	f1.scope = o;
	f1.method = m;
	{
		$s.pop();
		return f1;
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				{
					var $tmp = str + ")";
					$s.pop();
					return $tmp;
				}
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			{
				$s.pop();
				return str;
			}
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e29 ) {
			{
				var e = $e29;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					{
						$s.pop();
						return "???";
					}
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += ((s + k) + " : ") + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += ("\n" + s) + "}";
		{
			$s.pop();
			return str;
		}
	}break;
	case "function":{
		{
			$s.pop();
			return "<function>";
		}
	}break;
	case "string":{
		{
			$s.pop();
			return o;
		}
	}break;
	default:{
		{
			var $tmp = String(o);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = (o.__enum__ == null);
				$s.pop();
				return $tmp;
			}
			{
				$s.pop();
				return true;
			}
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	}
	catch( $e30 ) {
		{
			var e = $e30;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				if(cl == null) {
					$s.pop();
					return false;
				}
			}
		}
	}
	switch(cl) {
	case Int:{
		{
			var $tmp = Math.ceil(o%2147483648.0) === o;
			$s.pop();
			return $tmp;
		}
	}break;
	case Float:{
		{
			var $tmp = typeof(o) == "number";
			$s.pop();
			return $tmp;
		}
	}break;
	case Bool:{
		{
			var $tmp = o === true || o === false;
			$s.pop();
			return $tmp;
		}
	}break;
	case String:{
		{
			var $tmp = typeof(o) == "string";
			$s.pop();
			return $tmp;
		}
	}break;
	case Dynamic:{
		{
			$s.pop();
			return true;
		}
	}break;
	default:{
		if(o == null) {
			$s.pop();
			return false;
		}
		{
			var $tmp = o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = (typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null);
	js.Lib.isOpera = (typeof window!='undefined' && window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@205");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@208");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		{
			$s.pop();
			return true;
		}
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@213");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				{
					$s.pop();
					return true;
				}
			}
			i++;
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	});
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@225");
		var $spos = $s.length;
		{
			var $tmp = { cur : 0, arr : this, hasNext : function() {
				$s.push("js.Boot::__init@225@229");
				var $spos = $s.length;
				{
					var $tmp = this.cur < this.arr.length;
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}, next : function() {
				$s.push("js.Boot::__init@225@232");
				var $spos = $s.length;
				{
					var $tmp = this.arr[this.cur++];
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}}
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = cca.call(this,i);
		if(isNaN(x)) {
			$s.pop();
			return null;
		}
		{
			$s.pop();
			return x;
		}
		$s.pop();
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@246");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = (this.length + len) - pos;
		}
		{
			var $tmp = oldsub.apply(this,[pos,len]);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e31 ) {
		{
			var e = $e31;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@214");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@215");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it32 = it;
	while( $it32.hasNext() ) { var i = $it32.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.__class__ = Hash;
Main = function() { }
Main.__name__ = ["Main"];
Main.hen = null;
Main.t1 = null;
Main.t2 = null;
Main.t3 = null;
Main.currentMap = null;
Main.currentMapId = null;
Main.currentScreen = null;
Main.strOfRandomInt = null;
Main.lenOfRandomStr = null;
Main.randomIndex = null;
Main.scene = null;
Main.main = function() {
	$s.push("Main::main");
	var $spos = $s.length;
	Main.currentMapId = 1;
	Main.scene = js.Lib.document.getElementById("scene");
	Main.setScreenIntro();
	$s.pop();
}
Main.setScreenOutro = function() {
	$s.push("Main::setScreenOutro");
	var $spos = $s.length;
	Main.currentScreen = 2;
	sprites.Brick.removeAll();
	sprites.Wall.removeAll();
	sprites.Worm.removeAll();
	sprites.Nest.removeAll();
	sprites.Hen.removeAll();
	Main.setCommunicateMode();
	js.Lib.document.getElementById("instructions").style.display = "none";
	var containsIllustr = js.Lib.document.getElementById("illustrations");
	var children = containsIllustr.childNodes;
	while(containsIllustr.hasChildNodes()) {
		var firstChild = containsIllustr.firstChild;
		var clone = firstChild.cloneNode(true);
		Main.scene.appendChild(clone);
		containsIllustr.removeChild(firstChild);
	}
	var outroTxt = js.Lib.document.getElementById("outroText");
	children = outroTxt.childNodes;
	while(outroTxt.hasChildNodes()) {
		var firstChild = outroTxt.firstChild;
		var clone = firstChild.cloneNode(true);
		Main.scene.appendChild(clone);
		outroTxt.removeChild(firstChild);
	}
	js.Lib.document.getElementById("playAgainButton").onclick = $closure(Main,"eventPlay");
	var forms = js.Lib.document.forms;
	var form = forms[0];
	{
		var _g1 = 0, _g = forms.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(forms[i].id == "emailCollector") form = forms[i];
		}
	}
	form.onsubmit = function(e) {
		$s.push("Main::setScreenOutro@114");
		var $spos = $s.length;
		if(!e) e = js.Lib.window.event;
		else null;
		var emailField = js.Lib.document.getElementById("emailField");
		var email = "";
		email = emailField.value;
		var r = new EReg("[A-Z0-9._%-]+@[A-Z0-9.-]+\\.[A-Z][A-Z][A-Z]?","i");
		if(r.match(email)) {
			var r1 = new haxe.Http("./sendEmail.php");
			r1.setParameter("email",email);
			r1.onError = $closure(js.Lib,"alert");
			r1.onData = $closure(Main,"merci");
			r1.request(true);
		}
		else {
			Message.display("Please, check your email.");
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	}
	Main.currentMapId++;
	if(Main.currentMapId > 10) Main.currentMapId = 1;
	Main.currentScreen = 3;
	$s.pop();
}
Main.setScreenIntro = function() {
	$s.push("Main::setScreenIntro");
	var $spos = $s.length;
	Main.currentScreen = 1;
	Main.setCommunicateMode();
	var containsIllustr = js.Lib.document.getElementById("illustrations");
	var children = containsIllustr.childNodes;
	while(containsIllustr.hasChildNodes()) {
		var firstChild = containsIllustr.firstChild;
		var clone = firstChild.cloneNode(true);
		Main.scene.appendChild(clone);
		containsIllustr.removeChild(firstChild);
	}
	var introTxt = js.Lib.document.getElementById("introText");
	children = introTxt.childNodes;
	while(introTxt.hasChildNodes()) {
		var firstChild = introTxt.firstChild;
		var clone = firstChild.cloneNode(true);
		Main.scene.appendChild(clone);
		introTxt.removeChild(firstChild);
	}
	js.Lib.document.getElementById("playButton").onclick = $closure(Main,"eventPlay");
	$s.pop();
}
Main.setScreenPlay = function() {
	$s.push("Main::setScreenPlay");
	var $spos = $s.length;
	Main.setPlayMode();
	js.Lib.document.getElementById("instructions").style.display = "block";
	var illustrNode = js.Lib.document.getElementById("illustrations");
	var destNode = js.Lib.document.getElementById("outroText");
	if(Main.currentScreen == 1) destNode = js.Lib.document.getElementById("introText");
	var children = Main.scene.childNodes;
	while(Main.scene.hasChildNodes()) {
		var firstChild = Main.scene.firstChild;
		var clone = firstChild.cloneNode(true);
		var id = clone.id;
		if(id == "logo" || id == "henIntro" || id == "wormIllustration") illustrNode.appendChild(clone);
		else destNode.appendChild(clone);
		Main.scene.removeChild(firstChild);
	}
	if(Main.currentScreen == 1) {
		js.Lib.document.getElementById("playButton").onclick = function(e) {
			$s.push("Main::setScreenPlay@196");
			var $spos = $s.length;
			null;
			$s.pop();
		}
	}
	else if(Main.currentScreen == 3) {
		js.Lib.document.getElementById("playAgainButton").onclick = function(e) {
			$s.push("Main::setScreenPlay@199");
			var $spos = $s.length;
			null;
			$s.pop();
		}
		var forms = js.Lib.document.forms;
		var form = forms[0];
		{
			var _g1 = 0, _g = forms.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(forms[i].id == "emailCollector") form = forms[i];
			}
		}
		form.onsubmit = function(e) {
			$s.push("Main::setScreenPlay@207");
			var $spos = $s.length;
			{
				$s.pop();
				return false;
			}
			$s.pop();
		}
	}
	Main.currentScreen = 2;
	Main.play();
	$s.pop();
}
Main.eventPlay = function(e) {
	$s.push("Main::eventPlay");
	var $spos = $s.length;
	if(!e) e = js.Lib.window.event;
	else null;
	e.cancelBubble = true;
	Main.setScreenPlay();
	$s.pop();
}
Main.setPlayMode = function() {
	$s.push("Main::setPlayMode");
	var $spos = $s.length;
	var str = StringTools.replace(Main.scene.className,"communicateScene","");
	str = StringTools.trim(str);
	Main.scene.className = str + " playscene";
	$s.pop();
}
Main.setCommunicateMode = function() {
	$s.push("Main::setCommunicateMode");
	var $spos = $s.length;
	var str = StringTools.replace(Main.scene.className,"playscene","");
	str = StringTools.trim(str);
	Main.scene.className = str + " communicateScene";
	$s.pop();
}
Main.play = function() {
	$s.push("Main::play");
	var $spos = $s.length;
	Main.strOfRandomInt = "";
	{
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			Main.strOfRandomInt += Std.string(Math.random()).substr(2);
		}
	}
	Main.lenOfRandomStr = Main.strOfRandomInt.length;
	Main.randomIndex = 0;
	var mapFile = ("map" + Std.string(Main.currentMapId)) + ".svg";
	Map.load(mapFile);
	$s.pop();
}
Main.mapIsReady = function() {
	$s.push("Main::mapIsReady");
	var $spos = $s.length;
	var document = js.Lib.document;
	var scene = document.getElementById("scene");
	scene.onclick = function(e) {
		$s.push("Main::mapIsReady@263");
		var $spos = $s.length;
		if(!e) e = js.Lib.window.event;
		else null;
		e.cancelBubble = true;
		var wx = 0;
		var wy = 0;
		if(e.layerX) {
			wx = Math.floor(e.layerX / 20);
			wy = Math.floor(e.layerY / 20);
		}
		else if(e.offsetX) {
			wx = Math.floor(e.offsetX / 20);
			wy = Math.floor(e.offsetY / 20);
		}
		sprites.Worm.addWorm(wx,wy);
		$s.pop();
	}
	Main.hen = sprites.Hen.getFirstHen();
	Main.start();
	$s.pop();
}
Main.update = function() {
	$s.push("Main::update");
	var $spos = $s.length;
	if(Main.randomIndex > Main.lenOfRandomStr) Main.randomIndex = 0;
	if(sprites.Worm.addIsPossible && Std.parseInt(Main.strOfRandomInt.substr(Main.randomIndex,1)) > 7) sprites.Worm.addRandomWorm();
	Main.randomIndex++;
	if(sprites.Worm.listDistance.length > 0) {
		Main.hen.defineTarget();
		if(Main.hen.hasTarget()) Main.hen.moveOn();
		else {
			Main.hen.defineNestTarget();
			if(Main.hen.hasNestTarget()) Main.hen.moveOn();
		}
	}
	else {
		Main.t1.stop();
		Main.t3.stop();
	}
	$s.pop();
}
Main.stopGame = function() {
	$s.push("Main::stopGame");
	var $spos = $s.length;
	Main.t1.stop();
	Main.t2.stop();
	Main.t3.stop();
	Main.scene.onclick = function(e) {
		$s.push("Main::stopGame@321");
		var $spos = $s.length;
		null;
		$s.pop();
	}
	Main.setScreenOutro();
	$s.pop();
}
Main.pause = function() {
	$s.push("Main::pause");
	var $spos = $s.length;
	Main.t1.stop();
	$s.pop();
}
Main.start = function() {
	$s.push("Main::start");
	var $spos = $s.length;
	Main.t1 = new haxe.Timer(200);
	Main.t2 = new haxe.Timer(125);
	Main.t3 = new haxe.Timer(125);
	Main.t1.run = $closure(Main,"update");
	Main.t2.run = $closure(Main.hen,"updateGraphic");
	Main.t3.run = $closure(sprites.Worm,"updateAllGraphics");
	$s.pop();
}
Main.isFreeLocation = function(x,y) {
	$s.push("Main::isFreeLocation");
	var $spos = $s.length;
	{ var $it33 = sprites.Hen.listById.iterator();
	while( $it33.hasNext() ) { var hen = $it33.next();
	if(hen.exactCoords(x,y)) {
		$s.pop();
		return false;
	}
	}}
	{ var $it34 = sprites.Brick.listById.iterator();
	while( $it34.hasNext() ) { var brick = $it34.next();
	if(brick.exactCoords(x,y)) {
		$s.pop();
		return false;
	}
	}}
	{ var $it35 = sprites.Worm.listById.iterator();
	while( $it35.hasNext() ) { var worm = $it35.next();
	if(worm.exactCoords(x,y)) {
		$s.pop();
		return false;
	}
	}}
	{ var $it36 = sprites.Nest.listById.iterator();
	while( $it36.hasNext() ) { var nest = $it36.next();
	if(nest.exactCoords(x,y)) {
		$s.pop();
		return false;
	}
	}}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Main.merci = function(data) {
	$s.push("Main::merci");
	var $spos = $s.length;
	Message.display("Thank you / ありがとう / merci.");
	$s.pop();
}
Main.getRandIntString = function() {
	$s.push("Main::getRandIntString");
	var $spos = $s.length;
	{
		var $tmp = Std.string(Math.random()).substr(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Main.prototype.__class__ = Main;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	Xml = js.JsXml__;
	Xml.__name__ = ["Xml"];
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
{
	Date.now = function() {
		$s.push("@Main::new@124");
		var $spos = $s.length;
		{
			var $tmp = new Date();
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Date.fromTime = function(t) {
		$s.push("@Main::new@127");
		var $spos = $s.length;
		var d = new Date();
		d["setTime"](t);
		{
			$s.pop();
			return d;
		}
		$s.pop();
	}
	Date.fromString = function(s) {
		$s.push("@Main::new@136");
		var $spos = $s.length;
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d = new Date();
			d["setTime"](0);
			d["setUTCHours"](k[0]);
			d["setUTCMinutes"](k[1]);
			d["setUTCSeconds"](k[2]);
			{
				$s.pop();
				return d;
			}
		}break;
		case 10:{
			var k = s.split("-");
			{
				var $tmp = new Date(k[0],k[1] - 1,k[2],0,0,0);
				$s.pop();
				return $tmp;
			}
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			{
				var $tmp = new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
		$s.pop();
	}
	Date.prototype["toString"] = function() {
		$s.push("@Main::new@165");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		{
			var $tmp = (((((((((date.getFullYear() + "-") + ((m < 10?"0" + m:"" + m))) + "-") + ((d < 10?"0" + d:"" + d))) + " ") + ((h < 10?"0" + h:"" + h))) + ":") + ((mi < 10?"0" + mi:"" + mi))) + ":") + ((s < 10?"0" + s:"" + s));
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Date.prototype.__class__ = Date;
	Date.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("@Main::new@73");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("@Main::new@85");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.__name__ = ["Math"];
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
{
	js["XMLHttpRequest"] = (window.XMLHttpRequest?XMLHttpRequest:(window.ActiveXObject?function() {
		$s.push("@Main::new@53");
		var $spos = $s.length;
		try {
			{
				var $tmp = new ActiveXObject("Msxml2.XMLHTTP");
				$s.pop();
				return $tmp;
			}
		}
		catch( $e37 ) {
			{
				var e = $e37;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					try {
						{
							var $tmp = new ActiveXObject("Microsoft.XMLHTTP");
							$s.pop();
							return $tmp;
						}
					}
					catch( $e38 ) {
						{
							var e1 = $e38;
							{
								$e = [];
								while($s.length >= $spos) $e.unshift($s.pop());
								$s.push($e[0]);
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
		$s.pop();
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this))));
}
js.JsXml__.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
js.JsXml__.ecdata = new EReg("^<!\\[CDATA\\[","i");
js.JsXml__.edoctype = new EReg("^<!DOCTYPE","i");
js.JsXml__.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
js.JsXml__.epcdata = new EReg("^[^<]+","");
js.JsXml__.ecomment = new EReg("^<!--","");
js.JsXml__.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
js.JsXml__.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
js.JsXml__.eclose = new EReg("^[ \\r\\n\\t]*(>|(/>))","");
js.JsXml__.ecdata_end = new EReg("\\]\\]>","");
js.JsXml__.edoctype_elt = new EReg("[\\[|\\]>]","");
js.JsXml__.ecomment_end = new EReg("-->","");
sprites.Wall.idClass = "wall";
sprites.Sprite.idClass = "sprite";
sprites.Hen.idClass = "hen";
sprites.Hen.animStepMax = 3;
sprites.Worm.idClass = "worm";
sprites.Worm.animStepMax = 10;
haxe.Timer.arr = new Array();
sprites.Nest.idClass = "nest";
sprites.Indicator.idClass = "indicator";
js.Lib.onerror = null;
sprites.Brick.idClass = "brick";
Main.gridSize = 20;
Main.timer1Period = 200;
Main.timer2Period = 125;
Main.timer3Period = 125;
Main.SCREEN_INTRO = 1;
Main.SCREEN_PLAY = 2;
Main.SCREEN_OUTRO = 3;
Main.N_MAP_MAX = 10;
$Main.init = Main.main();
