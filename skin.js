// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: button1.ggsk
// Generated 2020-01-12T23:09:14

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 67px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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'+
			'PSWsjF3x0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 62px;';
		hs+='left : -74px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.appendChild(me._image_4);
		me.__div = me._hotspot_1;
	};
	function SkinHotspotClass_hotspot_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_2=document.createElement('div');
		el.ggId="Hotspot 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 187px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_2.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 162px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 206px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_2.appendChild(me._image_2);
		me.__div = me._hotspot_2;
	};
	function SkinHotspotClass_hotspot_3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_3=document.createElement('div');
		el.ggId="Hotspot 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 310px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_3.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 255px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_3.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_3.appendChild(me._image_3);
		me.__div = me._hotspot_3;
	};
	function SkinHotspotClass_hotspot_4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_4=document.createElement('div');
		el.ggId="Hotspot 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 442px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_4.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_4.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgYAAAFkCAYAAABb6/NsAAAZlklEQVR4nO3d27N3dX0f8PdGzpgEEoEHEwfSSSudiqCpBTtJJTeCowJewZWSm/Tf6WV7VcgV5EZ41BlxJuMhbcVOGx/wiDlBasKDkCjRCAhx92KxFsdnn36/tb6f7/q9XjNceGDv79577bXe63t47739/f0AACTJea0HAADUIRgAABPBAACYCAYAwEQwAAAmggEAMBEMAICJYAAATAQDAGAiGAAAE8EAAJgIBgDARDAAACaCAQAwEQwAgIlgAABMBAMAYCIYAAATwQAAmAgGAMBEMAAAJoIBADARDACAiWAAAEwEAwBgIhgAABPBAACYCAYAwEQwAAAmggEAMBEMAICJYAAATAQDAGAiGAAAE8EAAJgIBgDARDAAACaCAQAwEQwAgIlgAABMBAMAYC'+
			'IYAAATwQAAmAgGAMBEMAAAJoIBADARDACAiWAAAEwEAwBgIhgAABPBAACYCAYAwEQwAAAmggEAMBEMAICJYAAATAQDAGAiGAAAE8EAAJgIBgDARDAAACaCAQAwEQwAgIlgAABMBAMAYCIYAAATwQAAmAgGAMBEMAAAJoIBADARDACAiWAAAEwEAwBgIhgAABPBAACYCAYAwOT81gMAFrWX5LeTXJfk6iQXve5/20/yN0nOJnkqyUtLDw5ob29/f7/1GIB57SX59SS3JLkxyYVH+Hd+meSbSR5L8rfzDQ2oRjCAdbs0yX9M8nsn/Pd/meS7SR5J8tNtDQqoSzCAddpL8ptJ7kxy5RY+3j8n+WySv9zCxwIKEwxgfcZQ8JkkF2zx4/5LkoeSfGuLHxMoxqkEWJe5QkGSvCPJXUlu2PLHBQoRDGBdLktyd7YfCkZjOHjP'+
			'TB8faEwwgPW4LMNMwa/M/HnekeSebGfvAlCMYADrsPTD+rIk9y74+YCFCAbQv1bT+5dmOPUw17IF0IBgAH1ruSFwzo2OQCOCAfTrvCQfSNtTAmM4uLvhGIAtEgygT+cl+WCST7QeSIZw8K9SYyzAhgQD6M9eknen1oO4UlABNiAYQF9ev65fTYWlDWBDggH0ZewqqLrZTzsidE4wgH5UDwUj7YjQMcEA+vCO9FUopB0ROiUYQH3jG3hvD1ntiNAhwQBq633NXjsidEYwgLrWsMtfOyJ0RjCAmvYyhII19AKM4eDexuMAjkAwgHrGAqNPth7IFq3xa4JVEgyglvEBWrHAaFN7GdoRhQMoTDCAWi7NEAoubD2QmYxLJB9qPRDg7QkGUMdYYLTWUDA6L8nH0vemSlgtwQBqGAuMrmo8jqWcl+RTSf5164EAbyQYQHvnpc'+
			'8Co02NX/euhCHogmAAbY1vzrs6rT4unwgHUIRgAO2MG/F2NRSMLk1yd9a/twK6IBhAG47uvWYvya9nNzZeQnmCASxP2c9brbm/AboiGMCyPADPTWCCAgQDWNbaC4w2ZYkFGhMMYDm7UmC0Ke2I0JBgAMvYtQKjTWlHhEYEA5jfrhYYbUo7IjQgGMC8dr3AaFPaEWFhggHMZy/JTREKNnVZLMPAYgQDmMe4ge6O1gM5xC+TPJTkmdYDOcQlSe6JjZswO8EAtm88j99LKDiT5P4k/9R2OAfaS3JFhpmDi9oOBdZNMIDt2ktyTZJPtx7IIfaTfCXJ46/+5xeSPJDkpVYDOoJevrfQNcEAtuuS1H+r3U/yzSRfe9N/93SGmYPq4aCH2RjolmAA23NphlBQeR18P8n3kpw+x//2dJKHFx3R8fWyfwO6JBjAdpyX+jvnj/Lg'+
			'Pyg4VDKe+PgPrQcCayMYwOZ6OGt/nKWCcanhS3MPakPnJbk9yftbDwTWRDCAzYyhoPrD6YUMJxCOun9gP8mjeW1zYlXj9//ftB4IrIVgACc3TmdXDwU/T3Jfkh8d898bjzP2Eg4qz9hANwQDOJleNsCND/fjhoJt/ftLGTd+CgewIcEAjq+XI3PjQ/0HW/g496V+ONCOCFsgGMDx9FKy8+YCo02NyxHaEWHlBAM4nl4LjLZBOyLsAMEAjq73AqNtfGztiLByggEczVoKjHr4HNvQy+ZQKEcwgMPtJbkzfYSCJd7me2pH/ECSm1sPBHoiGMDB9jKckb+x9UAO8WKGt/ilpvh7aUfcy9COWP3nB2UIBnBue0k+nPoPlRcynBh4ZuHPu5/k60keW/jzHtcY7t7beiDQA8EA3t44Df3R1gM5xH6GroKlQ8GbP38v4eDq1g'+
			'OB6gQDeKu9JL+d+hvXxofyE0XG0SqcHNV41FQ4gAMIBvBG4zn4u1sP5BBjgVGVN/X9tFnOOK5LMvxsK/dQQFOCAbzRFUk+k9oPjnHj31dbD+RNXshwKuL51gM5RA8/Y2hGMIDX9PA2Wf2o4AtJHkz9AqRrMoQD4E0EAxj0sP7cQ7lQT+2I16T+PhJYnGAAr5117yEUVH/gJn0EmEQ7IrwtwYBdp8BoHtWXPEbaEeFNBAN2mQKjeWlHhA4JBuwqBUbL0I4InREM2EUKjJalHRE6IhiwaxQYtdHLzEcPp1NgVoIBu6aHcpuqBUab6qkdsfo1ArMRDNglCoza66UdUThgZwkG7IrxRl99ivhs1hsKRj9P8kCGI5hV7SV5d4ZlhYvbDgWWJRiwC/aS3JbkVOuBHGIsMKr8wNyWXr7WUxmuHdgZggFrt5fkziQ3tR7IIV7I'+
			'UGBU/UG5Tb20I96U4RqCnSAYsGZ7SW5JH6Hg/gzLCLvm++knHNzaeBywCMGAtRpv5tWngfczPBh3MRQkw9d/JskjrQdyiL0kH0n9kAkbEwxYq+tSf/p3DAXfbz2QxvaTPJohIFTWy7IUbEQwYI16KTD6auo/DJcyhqTq349eNrLCiQkGrM1YYFT5iNk4ff6VxuOoppdllfHoq3DAKgkGrMlYYFQ5FCR9bLhrZT99bMQcw0H1aw2OTTBgLXp5i+vhiF5rvZzSEA5YJcGANehl3beXUp8Keul1uCbCASsjGNC7XnaKv5DkwdR/0FXSS5DSjsiqCAb0rLcCo5+0HkiHns4QqCrTjsiqCAb0qqcCowdTf728sidTf1+GdkRWQzCgV9el/hvaePzuycbj6N14vLOHcKAdke6d33oAcAK9FBg9knqFPdckuT7JtUkuf/Wf0Y'+
			'sZpu7PJnkqtRoZx3BwbWo/eMc9L0m9nz0cyd7+/n7rMcBxXJHkP6f2LvBqb7jjNPfNOd7JjR8neSxDXXGVDYA9bTbt4cglvIVgQE8uTnJv6h9LPJPkodaDeNXlSe7KsPRyUj9J8sXUmkG4N5t9TUt4Mcl9EQ7ojGBAL3oJBWczPAwqvGHflOT2bG925dEMAaGCXq6HF5P8l9S4HuBIbD6kF7en/kOgWii4K9tdcrnl1Y9ZQS9v42OAqbz0BW8gGNCDu1J/TfnFJA+kVijo7WMf14sZlmwqfM8PcirCAR0RDKiuhwKj8e21QoHRqQyzK3O6KcPPpYJKszQHWeLnAlshGFDZuEZe3QOpMaW95Jvp7akT2M5m+BlUV2m2Bc5JMKCq69LHTfSh1CgwujjJPVl2uvquDJ0IFTyZOidBDqIdkfIEAyo6leEhV90XU6PEZtzg'+
			'dvkh/7853JU6m0IrHRM9yK2pM9sCbyEYUM3l6WOj1pkMx/cquCftHs7Vjg2eSY2wdpgeNtSyowQDKmkxHX4Sld5MNy0v2oZqP7eH0kc46OEILjtIMKCKam+e53I2dUp+Km0ArDbTU2Xvx0F6uebZMYIBVfTw9lTpaFylI4Oj8VREFVVOixxEARLlCAZU0MN6664UGG3qVOqMTTsinIBgQGu3po9QcF92p8BoU5WCi3ZEOCbBgJZ6OdNdZUq6p4dHpaWOSktAB+kh9LEDBANauT513ioPUmUTW7Wd/0dRaXOkdkQ4IsGAFiqtQx9EgdHmtCMeXy8zaayUYMDSTiX5TOq/+Z5J8o3Wg3jV3al/YuMgdyW5pvUgXjV2UOy3Hsghbk3ygSR7jcfBDhIMWNLFSe5McknrgRziTJKHU+PhcWfaFxht6uIMYbBSODiTGj/fg9'+
			'yZYfZAOGBRggFLqfZwOJezSR5JjYfGbVnPg+HiDDMfVULhw+kjHNyWvmeL6JBgwFLuTB+h4P4kL7QeSF7b1b+GUDC6PEM4rBQOnmw9iEP0EqhZEcGAJdyZOhvQzuXFJA+mTii4M+sKBaNxj0mVr+3BJE+3HsQhxnBQJVCxcoIBc7s19afDX8wwU/Dj1gPJ8OC8LbW/X5s6lTrBZ/zZCwfwKsGAOV2X5COp8QA4SJW3xvFtehdu/pVmRV7MsKxQYbboIJUCFSsmGDCX8QRC9ZtYlXXmapvzllBpH0Wl/SUHuT71l+XonGDAXG5J/UKeR1JjZ/o4TXxF43G0UOnkxdkMs0etr4fDrH2picYEA+ZyY2rfvM4keTQ1HgJ3Z7d3nVfanPpk6nRYnMvlqROmWCHBgDlcn9qzBQqM6ql0nLXS9XEu7209ANZLMGAO17YewAEU'+
			'GNVU7bx+9XbEKjMsrJBgwByuS82HXaUNZpU23lVRbQNm9XbE61oPgHUSDJhDxQpXBUZ90I54dJWX6+iYYMAuqFZgJBQcTDvi0QgGzEIwYBdUubFXe+BVVilA9dKOCFshGLB2VaaCVdoeX6Ull17aEWFjggFzqLJZ60upsXnsoiSfzhAOOJ6bknw4NcLB2ST3pU44eL71AFgnwYA5nE37h/FjSb5eYBzJa8fwKjzcevTRJB9Ije/fM0keSI3r6ietB8A6CQbM4Wzjz/9YkodS4+Z9R4SCbbgjyb9Nje/jU6lxfT3Z+POzUoIBc3ii4ed+JskX0/6mnQwPsypvuufyUpL/luSbqfE9O8jYjljh+9k6fD7R8HOzcoIBc3gibdZhn0mdNeAb00couD/DDM/DGXbdV37YXJRayzKPpV2gahm+WTnBgLl8I8veMMeHXJVQcF'+
			'dqPLwO8kjeGAbuTx/hoFI74uksHw6eT41NtayUYMBcHs1yhUKVQsHV6SMUvN0Dbfw+ViiCOsivpdbRz9NJvpflHtRV/tYHKyUYMJeXstxfqKvypnt1kntTPxR8I+d+y30pdaqjD1Lte73UUswTWTaEsIMEA+b0VJKvZN6b2OnUCAXj+neVt9hzeSyHb86stFfjIJVmZ8bZljmvxWdS4zQEKycYMLevZr412Bbru2+nl1BwnGN2vTyEKu3nGGdb5liKeT59zOSwAoIBSzid7c4cvJQ6oSCptVP+XE5SzPNE+gkHVdoRn89w/PPvs73v2zNJ/muSf9zSx4MD7e3vV/+dZ0WuzfB2d8UGH+OpDFPhFdoVkz66CsaH1c9P+O/fnOT21P4ak1phMUk+kuTWbPZ9+1qSL6fO18QOEAxo4eYkt+R4AeH5zLsscRI9hIJtrX33'+
			'8LUmyZ+k1ua8X8sQEI77vXsswyxb9RMirJBgQEvXJrk+w5/YPZU3rtH/5NV/nkry/dSZIRhVWts+l21viOshHCyxCfAkLk7y3iTX5bXr/fXfx7Ov/jNe7/YS0IxgAMfXQyhI5pla/6PU309RNRxAF2w+hOOpdETuIHOtt/fwwO3llAiUJBjA0VUr1TmXgwqMNtVLO6JwACckGMDRXJg+HjSPZ/7K3JcyHH086SmHpVyd5A+TXNp6INATwQAOd1GGmYLqoeBvM/QO/HKBz/WjDO2I1cPBVRmOWrrXwRH5ZYHDfTr1N9z9KMNb/BKh4PWfc6kgson3Z9gX4n4HR+AXBQ52R5J3p3Yo+Ke0e3v/QfoJB7em9s8RShAM4Nx6Obf/QNqee388Qxtl9XDwn1L/5wnNCQbw9t6f5KbUfohUOq//v5OcKTCOw/QQ9qApwQDeqp'+
			'c16YdTIxSMqv2tgnO5LfX3jEAz1W98sLSr0kcoOJ1afxNgdDrb/cuCcxg7DoQDeBvVb36wpKsyHEus/nvxtdR+M//j1JrJeDu9HEGFxVW/AcJSLszwoKhehvN4hr+6V/mhW2nvw0F6+ZnDogQD6OftsZejgckQDh5K/b8SOM4SCQfwKsEA+ikw6iUUjLQjQof8IrDreigw6uUB+3ZaNDKeRC8nUWB2fgnYZT2cae9lSv4gS/4Nh01oR4QIBuwuBUbLejx9hAPtiOw8wYBd1Mu0cbUCo009Hu2IUF71GyNsmwKjtrQjQnHVb46wTVdlaLyrft3/Wfp4sz6p00n+OrW/vvEIa/WNqbB11W+QsC0XZggFl7UeyCG+leTLqb8Wv6kHU786ebxmdBywUwQDdkEvN/i/SPLZrD8UJMkvMmys7CUcVA+UsDWCAbvgM6k/Jdxj'+
			'gdGmfpFhg2X1foZxCUo4YCcIBqzdJ9NHKLg/yT+3HkgDvXzt2hHZGS5y1uyTST6Y2qGgl7fmOY3tiP/SeiCHuCHJp+K+ycq5wFmrG1L/LHov6+xL+H/pYynlhiR/EPdOVszFzRr18mb3cISC1/tW+th8+fupHzrhxKrfOOG4rkwfBUafS/LdCAVv9q30UYDUwzIVnEj1myccx1UZSmne0Xgch/mz9PHwa+VzSf489b8/t6X+xlY4NsGAtfjV9HGkbFcKjDb1udRvRxw7DoQDVkUwYA0uTHJ3FBitjXZEaEAwoHe9vLXtYoHRpno5taEdkVURDOhdD+u8vZT4VNRLz4N2RFZDMKBnPewM7+XBVlkvwUo7IqvgAqZXH0r9s+S9TIX3QDsiLMTFS49uSPKx1L9+FRhtl3ZEWIALl968J30UGH0+yfciFGzb2I5Yfebg9z'+
			'Msc1W/TuEtXLT05Mok96R+gdH/yFDQU/3NtldjO2L17+8nIhzQIRcsvfiV9LHrW4HRMj6fPsJXD6dm4A0EA3pwQYYCo+qh4C8yrIFXn+Zei8+nfjviBRkC7W9GOKATggHV9XJjfTZCQQsPJvm79BEOqgdbSCIYUF8PU7HPJrkv9c/Zr9HLGY6ECgewJYIBlfWweevlKDBqrZefwZUZ/vqncEBplW+47LYPpY9Q0MPb6i7oZdbmygztiNVP1rDDKt902V03pI9q2YcjFFTybPppR7wrwgFFVb/xsnvGAqPqN83PJ/luhIJqxnbEHsKBdkRKclFSiQIjtuFb6SMc/F7qL5exg1yQVKHAiG3Sjggn5GKkAgVGzKGXdsRPpP6RXHaIYEBrCoyYUw/tiEkfvwPsCMGA1hQYMbee2hF/I7V/F9gBggEt9bC+2kt5DufWS9/E'+
			'uKR2aeuBsNsq35BZNwVGLKmXgKcdkeYq35RZr/eljwKj00n+PkLBWjyb5L8n+VnrgRziyiSfSv1ju6xU9Rsz6/Nb6aPA6AtJvpP6O9o5nucytCO+0nogh/idCAc0IhiwpHdlKDA6v/VADvGnSf5vhIK1+mH6OGHyviQfi3DAwgQDlvLODGun72w8jsN8O8n/ilCwdt9O8tnUDwf/PvX34rAyLjaW0EuBUS8PC7bj2+mjAOnjSX437tcsxIXG3C5I8ukMewsqn89+LskXIxTsmi+kj2Wjj0cBEgsRDJjbR1P/hvZchgKj6rvVmUcvG017CNisgGDAnHpYH305QzOeVsPddjr1+youSHJnbEZkZpVv2PTt/CQfSe2b2MtJ/jjDjEHlBwLzG6+FH6b2tfCuJH+Q2r9XdE4wYC63pf5mwz9J/QcBy+ll9ujmqE1mRoIBcz'+
			'g/yfWpfX19IclfRSjgjX6W+vtNevj9omMuLOZwfWq/0Sgw4iDjZtTK7Yg3x/2bmbiwmMO1qbtzWoERR/FcarcjvivJJa0HwToJBszhutQMBgqMOI7q18up1gNgnQQD5nB56gUDBUacROUZJsGAWQgG7AIFRmyi6p6Ui1sPgHUSDFi7Xo6gUVsv7YiwMcGAOVQ5AvhKFBixPQ+nfjsibEwwYM0UGLFNryS5P3WuqbOtB8A6CQbM4cm0v3F+IclfFhgH6/JKhqWpCvtVnm89ANZJMGAOz6TtWuyfJvnzxmNgvX6WYebgpw3H8EqSpxt+flZMMGAOZ9LuofydJF+PY4nMazzp8nKjz/9EzIYxE8GAOfxDkh9n+RvXdzIU0lSusmU9/iFDO2KL6+2xCL/MRDBgLl/NsjeuscBIKGBJLcLo3yX565gxYCaCAXP5Tpa7eT2X'+
			'9mu+7K6ll68eWfBzsYMEA+b0pcy/e7vSLnF211IbXv9ndCkwM8GAOc09vT+eK1dgRAVztyP+VZIvx2wBMxMMmNtca7DVymYgSU5neIBv+5r8YWysZSF7+/vuqSzit5Lck+SdW/hYP8uwfCAUUNXHk/xutvPy5bQNixIMWNIFSe5I8u9y8hvm/8kwneqPIlHd7yS5Pclv5GR/hvynGfbp+ONNLEowoIX3JLkxyQdztIDwiyQ/yBAI/jFmCejL+5J8OMm7c7SA8GySb0R7J40IBrR0UZJrk5xKcl3eGBJeylCt/FSSv4kbJP371STXJ7k8yTV5LSTsZfiDSM9n+DsjT0f4pSHBAACYOJUAAEwEAwBgIhgAABPBAACYCAYAwEQwAAAmggEAMBEMAICJYAAATAQDAGAiGAAAE8EAAJgIBgDARDAAACaCAQAwEQwAgIlgAA'+
			'BMBAMAYCIYAAATwQAAmAgGAMBEMAAAJoIBADARDACAiWAAAEwEAwBgIhgAABPBAACYCAYAwEQwAAAmggEAMBEMAICJYAAATAQDAGAiGAAAE8EAAJgIBgDARDAAACaCAQAwEQwAgIlgAABMBAMAYCIYAAATwQAAmAgGAMBEMAAAJoIBADARDACAiWAAAEwEAwBgIhgAABPBAACYCAYAwEQwAAAmggEAMBEMAIDJ/wfxsld3SVT5RgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 91px;';
		hs+='left : -36px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_4.appendChild(me._image_9);
		me.__div = me._hotspot_4;
	};
	function SkinHotspotClass_hotspot_5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_5=document.createElement('div');
		el.ggId="Hotspot 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_5.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_5.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAH8ElEQVR4nO3VwQ3AIBDAsNL9dz6G4IGI7Anyy5qZDwB42387AAA4Z+gAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6A'+
			'AQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQ'+
			'YOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYO'+
			'gAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgA'+
			'EGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEG'+
			'DoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDo'+
			'ABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQYOgAEGDoABBg6AAQsAGv2wblsePWjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 407px;';
		hs+='left : 186px;';
		hs+='position : absolute;';
		hs+='top : 125px;';
		hs+='visibility : inherit;';
		hs+='width : 407px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_5.appendChild(me._image_5);
		me.__div = me._hotspot_5;
	};
	function SkinHotspotClass_hotspot_6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_6=document.createElement('div');
		el.ggId="Hotspot 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 218px;';
		hs+='position : absolute;';
		hs+='top : 193px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_6.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_6.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_6.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_6.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'/wHGCAn3kXoRhwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 71px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_6.appendChild(me._image_1);
		me.__div = me._hotspot_6;
	};
	function SkinHotspotClass_hotspot_7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_7=document.createElement('div');
		el.ggId="Hotspot 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 330px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_7.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_7.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_7.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_7.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAAGCCAYAAABdBeK7AAAOz0lEQVR4nO3d0XLkthVFUdrlDz9/rrzYnrGiltjdF7gAudaLKxYIHs2otEvjOPnj4+PjAABq/Nk9AACuRFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQWAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoJCwAkAhYQ'+
			'WAQsIKAIWEFQAKCSsAFBJWACgkrABQSFgBoNBf3QPgxrLYPUCBPz4+Pro3wBWle8Bv0j0A7kRY4X3pHvCidA+AKxJWeE66BwyU7gFwBcIKP0v3gCbpHgA7Elb4WroHLCbdA2AXwgq/pHvAJtI9AFYmrNxdugdsLt0DYDXCyh2le8Dx/YavPvbd+TMfH637/bAMYeVOssm7Hj376p2vPveq2e+DpQgrd5CN7v/urlnv2ekdsBxh5cqy2b1n7h717lH3jr4bliOsXFE2ufOVd5w5U2HEe0bcCcsRVq4ki99X9b6z56pUv6/6PliKsHIFWfSuke999nyVyvdW3gXL8H8bx86y6F1Xlk9/ffeuintgKX5iZVdZ5I4KmfxctSxyByzBT6zsJovcwS/59NeuO2AJfmJlJ2l+foQ0Pz9Cmp+HVn5iZQdpfp7n5NNfZz8PrfzE'+
			'yurS9OwMWeyeUdL0LLTwEyurStOz1Munvz777CvPQRs/sbKiTH6uQxa/b5Q0PQvT/Nk9AD7J5Oc6pHtAoxz3+D3mxvzEyioy+blO2ezeUTL5OZhCWFlBJj/XKZvePVImPwdD+aNguuXFZ1557urSPeBFmfwcDCWsdMqkZ1aR7gELy3G/rwcuSljpkknP3E26B7wpk56BYfwzVjpk8PkV5aLvGimDz8MQfmJltgw+z3V+zTL4PAwhrMyS477fKNM9YGMZfB7KCSszZNIz/JLuAYUy+DyUElZWk+Na3xhz03dXy+DzUEZYGS2DznI/OXw9sQFhZaQMOruLdA841thQLYPOQglhZZQMOgvH4euLhQkrI2TQ2Z2ke8Bv0j1gkAw6C28RVqpl0Fn4SgadhZcJK5Uy6Oxu0j3gC+keMFAGnYWXCCtVMugsnJFBZ+FpwkqFDD'+
			'q7o3QP+Ea6BwyW7gFwHMLKXOkeMFi6B3BaugdwXcLKu1J8jrHSPWCwDDoLpwkr70j3gIWkewD/yqCzcIqw8qoMOst46R4wQboHcF/CymjpHjBBugfwpRSfg1OElVek+BzzpXvAJCk+Bz8SVp6V4nO7S/cAYC3CCveV7gGTpPgcfEtYeUaKz+0u3QMKpHvAJCk+Bw8JK2el+BzMlu4B3IOwUindAyZK94BC6R6wmHQPYG/CyhnpHgBFUnwO/o+w8pMUn7uCdA8YIN0DJkr3AK5NWKmQ7gEwQLoHsCdh5TvpHrCgdA8YKN0DJkr3AK5LWHlXugfAi1J0Bv5DWHkk3QMWlO4BE6R7wILSPYC9CCvvSPeAidI9gCHSPYDrEVa+kqIz7CndAxaU7gHsQ1jhZ+kewFDpHsC1CCufpegMe0v3gAWlewB7EFb4XroHMEW6B3Ad'+
			'wsrvUnSGa0j3gMnSPYBrEFZ4LN0DWE66B7A+YeUfKTrDtaR7wGTpHsD+hBW+lu4BC0n3gMWkewBrE1bOSvcAgB0IK8chmp+le8CC0j1gohSd4aaElTPSPQBgF8JKugcsJt0DFpbuAROlewD7ElaA16R7AGsSVn6S7gETpXvABtI9YKJ0D2BPwnpv6R4AcDXCynfSPWCidA/YSLoHLCTdA1iPsIJvjjyW7gHsR1jvK90D2Fq6B8CqhJVH0j1gknQPYHvpHsBahBV4VboHTJLuAexFWO8p3QMWke4BwPUIK19J9wC2ke4Bi0j3ANYhrNxVugewlXQPYB/CCrwr3QNgJcJ6P+kesIB0DwCuS1j5LN0D2FK6Bywg3QNYg7ByN+kecGHpHjBYugewB2EFgELCei/pHtAs3QNuIN0DoJuw8rt0DwDYnbByF+kecCPpHjBQ3v'+
			'w4NyCsAFBIWLmDdA+4oXQPgC7CCgCFhPU+8ubHd5XuATeW7gHQQVi5snQPAO5HWIGR0j1ggLz5cS5OWLmqdA8A7klYgdHSPQBmElauKN0DgPsSVmCGdA+AWYSVq0n3AODehJXjECPmSPcAmEFYuZJ0D+BH6R4AownrPaR7AMBdCCtXke4BnJbuAQXSPYB1CSsAFBJWriDdA3haugfAKMIKAIWEld2lewAvS/cAGEFYAaCQsLKzdA/gbekeANWElV2lewDAV4QV6JbuAVBJWNlRugcAPCKswArSPQCqCCu7SfcAOHwd8g1hvYd0D4AT0j0AKggrO0n3gMly3O9zhu0JK6wnx3+Dmi9PXVO6B8C7hJXj2OObWboHTJJv/v6jjwELEVZYQ45z4Tx7bmfpHgDvEFZ2kO4Bg2XSMztJ9wB41V/dA+DGUvT8u/cAhfzEyurS'+
			'PWCAHLWfV+VdK0n3AHiFsMJcGXjvqLt5TroH0EtYWVm6BxTKMefzmfWeWdI94AvpHsDahPU+8ubHeV1u8k7gEFbWle4BBXL0fh7d76+S7gHwDGGFejnWikG6B8CdCCsrSveAN6R7wAM51t12RroHwFnCymrSPeBFOfbYnu4Bm0v3ANYnrPC+dA94Uo79Nh/HHpvTPYB+wnovefPjo3W//1k59tv8uxx774clCSs8L8e1gpTuAU9I9wD4ibCyinQPOCndAwbJcd3PDaYSVjgnxz3Ck+4BJ2TR9/70cW5CWPksN3nnM9I9YLIc9/ucoYyw3k+6B2wkx71/vXKs+/mnewA8Iqx0S/eAB9I9YCHpHvBALvouNiesfCXdAxrluPfn/0gOvy7fSfcA1iGs95TuAX9L94Df5Fhrz6rSPeCTdA+Az4QVfHN+Vg6/ZvCQsPJINr'+
			'//jBxr7NhVjjV+/bL5/VyMsHJX6R5wIeke0CzdA1iLsN5XbvzuzvdfVY7+39ed7uXChJXvpHtAoRzX+nxWle4B0E1YmS03eeed5bjP73PHO1mcsN5bbvC+2e/klxx7//qnewB7ElZ+ku4BL0r3AP6Vi74LviSs5ILvmfUuzstxvd+XdA9gTcLKGekecEKOPXbeXTZ5R8Ud3JSwMkM2v59aOfb/PUv3ANYlrBzHuW8SZ87MlmPNXZyTY81///SdZ0FYGS6b3ct86R4Alf74+Pjo3sA6UnTmnfOz72Mtab7vzPln7+Rm/MTKSCm+q/I+1pTF74MfCSu/S9GZah3vpE+Odb/Ozpzh5oSVUVJ0R8U97CmL3QOnCCuvyEXewfpyrPP1duYMCCv/J813pGgD15LDv0LDJoSVV2WTO7mWNN054r1clLDylUx+Nm++k3vJ8frX'+
			'2Zm/B28RVh5J0Zmfnn/3Du4rF3sPFyGsVMqgs/BIjte/7p55Dk4TVr6TJ86cOfvPubNn4awc/rk/i/A/achPsuhd8EgWvYubEFbOSPPz8Io0P89N+aNgRsrhmxN90vQsNyesnJFJz0C1HL4WmcwfBfOMFJ2BDik+B1/yEyvV0j0A3pDuAexPWHlGis/BLOkewH0IK89K8TkYLcXn4FvCykjpHsDtpfgc/EhYeUW6B8AJ6R7APQkrr0rxOeiS7gFci7DyjhSfgyopPgenCSuzpHsAt5Hic/AUYeVdGXQWXpHuASCsVMigs/CMDDoLTxFWqmTQWTgjg87C04SVShl0Fr6TQWfhJcJKp3QPYHsZdBZeJqxUy+Dz8I8MOgtvEVZGyODzkO4B8IiwMkoGn+e+Mvg8vEVYGSmDz3M/GXwe3iasjJbB57mPDD4PJYSVGTL4PN'+
			'eXweehzB8fHx/dG7iPDD7P9WTSM1BGWJktk55hf5n0DJTyR8HMlknPsLdMegbK+YmVLpn0DPvJ4PMwlLDSKZOfY22Z9AwMJaysIJOeYV2Z9AwMJ6ysIpOfYw2Z/BwM57+8xCoy+Tn6ZfJzMIWfWFlNmp5lnkx+DqYSVlaVyc8xXpqehamElZWl6VnqpelZmE5YWV2an+c9aXoW2ggru0jz8zwnzc9DG2FlJ1nkDh5L8/PQTljZURa5g1+yyB3QTljZWRa5466y2D2wBGFld1n0rivLYvfAUoSVq8ji9+0ui98HyxBWriaL37eTbHInLEVYuapsdu8qstm9sBxh5eqy6d2zZPP7YTnCyl3kYu95VS72HliOsHI3ucl7Z7+v+72wDGHlztI94Bv54T+vJN0DYCXCCsLwinQPgFUJK/xXugcsLt0DYHXCCo+le8Ai0j0A'+
			'diKscF66B0yS7gGwM2GF16V7QJF0D4ArEVaole4BP0j3ALg6YYU5cvH3AX8TVgAo9Gf3AAC4EmEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVg'+
			'AoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAIWEFgELCCgCFhBUACgkrABQSVgAoJKwAUEhYAaCQsAJAof8BQwJST2QPZsUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 54px;';
		hs+='left : -31px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_7.appendChild(me._image_6);
		me.__div = me._hotspot_7;
	};
	function SkinHotspotClass_hotspot_8(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_8=document.createElement('div');
		el.ggId="Hotspot 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 444px;';
		hs+='position : absolute;';
		hs+='top : 194px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_8.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_8.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_8.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_8.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_8.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,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'+
			'ELO5oQVo5yS5hZuFAkSlg5Q1zplVvANCOs1CKu1CKqNCWsnHX0K7ugBOcYzQkrCeJKD3wfMF0QVlLElZZElW4IK0niSguiSleElZbElbNEle4IK2l7Fy9x5ShRpUvCSgniSmnOGbolrJQirpSy91wxrVKVsFKSuJImqnRPWClNXEkRVYYgrNQgrpwlqgxDWKlFXDnidhFVBiOs1HQkrgK7riPHXlRpTlip7cjCJ67rEVWGJay0IK58cuTWr6jSDWGllaNxFdh5eT+VKQgrLR2dNMR1Pm79Mg1hpQem13UdPY6iSreElV4cXSjFdVxHj52o0rW/Wm8APLheji22939jwR2DoDI1Eyu9OfOEp+m1b2du34sqwxBWenUmrgLbnzPHRFQZilvB9OzoreHLxe3hXggqyxFWendfXAV2LGfvGjheDEtYGcWZ6fVyEdhaBJXl'+
			'CSsjOTu9Pv5bC3hW4n1tx4QpCCsjEtg+pB4ScwyYirAysrO3hy9P/94Cv42gwgfCyugS0+udyL6X/hMm+5dpCSuzSAb28eesHIASfw+88v5kEcLKbEoF9vnnz6rUh2vMvt/gH8LKrNKBvZvtdnHpT6maYR/BLsLK7EoF9t3P7D0ktT7usff9AMUIK6soGdhH735+7dC0+rxkQWV5wspqHhf+mvHZ+7ueA9XzFwuIKTwQVlZWa4o9osdteiSm8IawQrspdkSCCl8IK/wksr+JKewgrPDeSO9zJgkpnCCssN2soRVSCBJWOO5VkHqPrYhCYcIKWe/CVTu4AgqNXG+33i+wAWAc/2m9AQAwE2EFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQ'+
			'WAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAIGEFgCBhBYAgYQWAoP8Dky82mkAgRb4AAAAASUVORK5CYII='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -63px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_8.appendChild(me._image_8);
		me.__div = me._hotspot_8;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot 1') {
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot 2') {
			hotspot.skinid = 'Hotspot 2';
			hsinst = new SkinHotspotClass_hotspot_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot 3') {
			hotspot.skinid = 'Hotspot 3';
			hsinst = new SkinHotspotClass_hotspot_3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot 4') {
			hotspot.skinid = 'Hotspot 4';
			hsinst = new SkinHotspotClass_hotspot_4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot 5') {
			hotspot.skinid = 'Hotspot 5';
			hsinst = new SkinHotspotClass_hotspot_5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot 6') {
			hotspot.skinid = 'Hotspot 6';
			hsinst = new SkinHotspotClass_hotspot_6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot 7') {
			hotspot.skinid = 'Hotspot 7';
			hsinst = new SkinHotspotClass_hotspot_7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'Hotspot 8';
			hsinst = new SkinHotspotClass_hotspot_8(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				hotspotTemplates['Hotspot 2'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 3']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 3'].length; i++) {
				hotspotTemplates['Hotspot 3'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 4']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 4'].length; i++) {
				hotspotTemplates['Hotspot 4'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 5']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 5'].length; i++) {
				hotspotTemplates['Hotspot 5'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 6']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 6'].length; i++) {
				hotspotTemplates['Hotspot 6'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 7']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 7'].length; i++) {
				hotspotTemplates['Hotspot 7'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 8']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 8'].length; i++) {
				hotspotTemplates['Hotspot 8'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	me.skinTimerEvent();
};