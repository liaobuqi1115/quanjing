// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: button1.ggsk
// Generated 2020-01-05T23:11:17

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
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
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
		hs+='height : 62px;';
		hs+='left : -146px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
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
		me._image_1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.appendChild(me._image_1);
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
		hs+='top : 24px;';
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
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgYAAAFkCAYAAABb6/NsAAAb8UlEQVR4nO3de6xlZXnH8e8Z8IKKIDc11Tho24hAAG+t/lFmsLf0NqC2ViIyDFgttipq04tp8NLGJrWANTFakBnEakTlEoxWIzhIWwuiDEEK2Cgqpt6VixZvzOkfL/udQeacfc7Ze633edb6fhL/ETj7OXvvs9/fetb7PnthcXERSZIkgHWtC5AkSXEYDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAki'+
			'RVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVBgNJklQZDCRJUmUwkCRJlcFAkiRVe7cuQFKv1gHHARuAI4H9gMX7/tlO4JPADuAq4O4G9UlqbGFxcXH6vyUpswXgF4EzgJOAR6zgv7kXeBfwbuA/uitNUjQGA2nYDgJeC/zlGv/7e4EPAK8B/ndeRUmKy2AgDdM64BnAVuCw'+
			'Ofy8bwEnA/82h58lKTCDgTQ8C8AzgSuBh83x5/6UEg7eN8efKSkYTyVIw9JVKAB4EHAB8MI5/1xJgdgxkIbl0cD1wGM7fIyfUE41fLrDx5DUiB0DaTgOoRw37DIUADwYuJT57F2QFIzBQBqGvhfrQ4DtPT6epJ4YDKT8HgRsA57V8+MeTDn1MO+9DJIaMhhIubXcENjlRkdJjRgMpLz2ArbQ9pTAAmVewoca1iBpjgwGUk57AacB72hdCOVz5DeIUYukGXlcUcpnAfgV4h0XvBc4D3hZ60IkrZ0dAymXyX39K1oXsgcRbm1ImpEdAymXRwO3Afu0LmQZjk6WErNjIOUxGWAUORRAu+OTkubAjoGUw4OBHeQaKPQtyujkmxvXIWkV7BhI8U2uwDOFAnA6opSSwUCKLfs3GjodUUrGYCDFNYRd/k5HlJJxj4EU0zrKAK'+
			'N3ti5kThaBz1DmL0gKzI6BFM8C8HSGEwpgmL+TNEgGAymWyXcPXNm6kA4MrQsiDZK3EqRYDgG+BDy8dSEduhd4BfD21oVIeiA7BlIcB1M6BUMOBVA2Vb4VOLF1IZIeyI6BFMODKAOMntK6kB79DNgEfKR1IZJ2sWMgtbc3ZYDRmEIB7Pq9D29ch6TdGAyktvamDDAaa1v9YMr3PxgOpCAMBlI76ygDjMYaCiYOAi5m+HsrpBQMBlIbHt3bZQH4Jcax8VIKz82HUv8mswquaV1IME5HlAKwYyD1a8gDjGbldEQpADsGUr/GMMBoVjuB84CXti5EGiM7BlJ/xjLAaFbrgFOB01sXIo2RHQOpH2McYDSrnwEnA+9tXYg0JnYMpO6NdYDRrCYzHn6ndSHSmNgxkLo19gFG8/BtYCNwU+tCpDGwYyB1Zx2wGUPBrA4GtgNH'+
			'NK5DGgWDgdSNyVTDc1sXMsW9lPByY+M6pjkQuAR4ROtCpKHzVoI0f5Pz+Ne2LmSKSSh4D2Us8fXA41oWNMUi8FngOODuxrVIg2XHQJqvBeBpwBWtC5liJ/B6SigA+C5wArEX3CzPrZSaHQNpvg4CbiN2y3sncD7wkp/7/ycL75XAvn0XtQpL1S9pDuwYSPNzEOUrhCOHgkXKNxnuaVGdtOq39FrR6mXZvyGlZDCQ5mNvSiiIvHN+JQv/csEhknXAKcCftS5EGhqDgTS7vYCt5AgFK9m4N2nV/0XXRc1oL+Ac4EWtC5GGxD0G0mz2okw1jL44fYcyJOjzq/hvsvxu9wLHAx9uXYg0BAYDae2y3OteSyiYyBIOZvkdJe3GYCCtTZZQMI+r6b0pMw4i3yoBw4E0FwYDafUyDjCa1eTEReRwsAh8ETgG+EHjWqS03HworU'+
			'6WITs/P8BoVpOr8a/N6ed1YQF4EiXARJ7DIIVmx0BancwDjGaVZQDSInAd8MzWhUgZ2TGQVi77AKN5/OwM31UwCTDR939IIdkxkFYmwwa8vhbuBeB5wAc6fIx5cHSytAZ2DKTp1lEWmOih4HPAc+j+an4R+BBwWsePM6vJyZE/b12IlInBQFreOso5/pMa1zHN9ykjgu/q6fEWKWHptT093lqto0xHjP76SWF4K0Fa2gLwauAtrQuZ4nvABuDGBo+dJTjtpMxzuLx1IVJ0BgNpzxYobejzWhcyRYQFL0s4aBmgpDQMBtIDLVA28H2idSFT7KQMMLqwcR1QwsEO4MjWhUxhOJCmcI+BdH8LwFMpR/4iW6QMMIoQCqCElA3EX3APAC4h9hwGqSk7BtL9PYlyLDHywjHZ+BfxVMCBlOfv8a0LWcbkBMdx9LdZU0rDjoG0'+
			'S4aryckAo4ihAEqr/gRiL7iTrtCVrQuRIjIYSMUBwHZi3yOfXOluaV3IMrJcjU/CQfTNpVLvDAbSrrPuGUJB9AUXcgQYyHPyROqVwUBjl+WoXd8DjGYV/ZbHxALleXU6onQfg4HGbAE4g/ihIOsRO6cjSgl5KkFjlaWNHGGA0ayydGWG8FxLMzMYaIwcYNS/LOEga3dGmhuDgcZm96Nqj2xcy3IWgTOBN7UuZI6cjiglYDDQ2DjAqK0Mx0IBvgscSvdfYS2F4+ZDjYkDjNr7HrARuL11IVMcAHyS2F0lqRN2DDQWj6J80B/VupAprqcsnHe2LqRjx1Bej/1aFzLFWF4PqbJjoDFYAM7GUBBJlt/1aMp7RxoNg4GGbgHYCpzcupApJgOMoi+U83Q95XeObIFyMuT8xnVIvTEYaMgWgFeRIxRsBG5oXUgDl5JjdPJmyi'+
			'kRafDcY6ChynKlt0j5NsLLWhfS0CTAndW6kCkWKR2OC1oXInXJYKCh2kj8r9V1odklyy0fXzMNnrcSNETHUI4lRrYIvAEXmIksC26WjazSmtkx0NAcStnUFvkY3CJlPHD0e+stLFBev+gL75j3hWjgDAYakiyzCi4Bntu6iMCyvI7fpwTRMZ0k0Qh4K0FDkWUxyXBEr7UsV+OT91zk7pS0agYDDUGW+75ZhvpEkGWuQ5YJjtKKGQyUXZbd7N+nHEuMvtBFkiVIOR1Rg2IwUGbZBhh9pXUhCV1PCVSRZZmZIa2IwUBZTT6MMwzFOYH498sj2078ExxOR9RgeCpBWTnAaFyyXJX7mis9g4EyyrDhaxE4A3hr60J+zjHA8cCxwBOA9bv9szsorfsdwFXEG9OcZT+J4UCpGQyUjQOMVm9ytf1KVndy4zbK4nYOcTYAZgkH'+
			'WY5cSg9gMFAm+1M6BUe3LmSKbcSZVbCespBumOFnfJnS/bh09nLm5pPM9jv14Q5KONjRuhBpNQwGyiJLKNhBWQzuaF0IpUtwNuW5m4dzKAEhgizvhzsoXa4I7wdpRTyVoCzOJv4iEC0UbGV+oQDK0dCtc/x5s8hyNT4JMPN8HaRO2TFQBlspC11kd1A29n25cR2wKxR0ZRtxbpUcTY6FN1JolJZlx0DRvYocoWAjMUJBH1P4NlNelwiyLLhOR1QadgwU2WbitK6Xs5EyhKe1vq+eT6F0DyLYQPndo9tGnG6LtEd2DBTVBnKEglOIEQr2p3ydc58t9a2UmQgRbCfHgrsZeH3jGqRl2TFQRFnuG59B2anfWssd+tE2AW4mT6Dc1roIaU8MBopmPWWAUfRQsI04V6itz/RHCwcZNquC4UBBeStBkbRoh6/FNuKEglmHF8'+
			'1DtNcty4Kb4QiuRsiOgaLIMrAm0i74s4lzOgBiPTfQvpOyEtG6LZLBQGFkaP9GWvg2E/Ne+g7KPIcIsoRNpyMqFG8lKIIMoeAO4ARifHhvJmYogLIIR6kty9W40xEVisFArb2eHKFgTAOMZrWZWOHgFGIEuuVkOYmjETAYqKXNwJmti1iBE4hx1Zlp8dhMnP0PkW4BLSdD6NMIuMdArRxP2ckeXZQd7vtTjnGub1zHakV5/sDpiNKK2DFQC5HuQy/nDGIsapN70Osb17EWTkdcvc04HVEN2TFQ346iLHKPal3IFBdQFpEIfyBXUlrhWd1Jqf/61oXc52RKYFloXcgUWyjBNMJ7UCNix0B92o/ygWwoWLnziX8Wf5r9KGEwyjHGC8ix4J5P6R5EDzAaGDsG6ku0xWEpN1Cubr/fuhDgLMoGvqEsDF+hvP4RnlvIsfBG'+
			'67ZoBAwG6svFlN39kUUKBVna3asV6TmGHLdpDAfqlcFAfchyZXYMcFvrQhhuKJi4gfJcR/jwydLJupMyHTFKoNKAucdAXTuTHKFgIzFCwVGUs+yRn69ZHUWc4JPlanwSYKLvz9EA2DFQl46lfJhFWACWcxwxzrdnObExL5E2eWZ57i+j3JKL8JxpoOwYqCuTEwjRQ8EWyvn21vajDHyKvjDN08nE2VwZbe/DUjYRZy6EBspgoK68ivgDeV5NjGNrkzbxoY3raOEs4txquoEcV+NDv9WkxgwG6sqLif3hdQFwDjEWgUuIv/mtS+cT5yr4KuLc3ljKE4gTpjRABgN1YROxr34j3dsewgCjedhKnHAU6f2xlE2tC9BwGQzUhWNbF7CMGyjfgRDhQz9SG721aMcGo09H3ITvG3XEYKAuHEvMD61IG8wibbyLItoGzOjfVR'+
			'A5gCsxg4G6cHTrAvbgTsrGsiihIMOJjRaeQKxjg1FOrezJ+tYFaJgMBhqDaAOMDAXLm8wUiPIcnUDMAUjrWxegYTIYaAyifLBHW/AiixSgskxHlObCYKChi9IKdqTt6kW65XIn5aRChFtRUqcMBupClM1aryXG5rFHAlcA+zeuI6OTKYOoIoSDGygb/r7XupD7fLV1ARomg4G6sIP2i/GFlAlxreuA8tW+TyXG4pbRWyidnwjP342UYUw7WxcCfLl1ARomg4G6sKPx419ImQ8Q4cP7PAwF83Ae8FxiPI9XE+P9tb3x42ugDAbqwmW0u1K/kTIfoPWHNpTFLMqV7lLuogSX84nRXVnO+cQJWa3D5+XEf72UlMFAXbicNpu0bqSMF45wD/gkyma1CIvYUu6ifOX0DuBU4HPEXmweSazbMhdSNke2eM5ahm8NnMFAXXkr'+
			'/X5w3U05UhYlFGwj/t/Xq7l/GDiOHOHgEuCA1oXc5zT677bcToxNtRqohcVF31vqxL6Uc99P6uGxJle+ERa1IylX4NFDwVILWp+v2ywidYcAPkh/eyCeD1xM+/e6Bir6h5fyupvSSu/jHmykULCd+H9Xb2PpFvjdlIFQURbcpUR7rrfQz3vwckrHpPV7XQMW5Y9Kw3Q18Hq6/RA7jRihYF/KAKMoLe6lXMj0zZnRrsaXciRxbtn00bW6kRinITRw3kpQH7rand/i/u6eRNsUt5SrKQv+SheW3wcuJcbCu5zWJwR293hKQJz3rZjbKXtovjjnnys9QPQ/eA3DacCZzG8Bv4s4oQByhIK1DOa5nDgL7nJOAs4gxvN/O+W98Fnm9968kfKNpYYC9cJgoL68iTJO9ksz/pxPUa6cooSCDAOMJleba7k1sJJbDxFEmo54F/'+
			'B05hOG/44SCqLf1tGAGAzUp6spLdZXsPqA8FVKl2ADMfYUQJ4BRrNuJlxus2IkkaYjQgnD64F3sfrn7kLK38rfEj+UaWDcY6CWfo3S3j76vv/t/s2DX6HMgv8UZRd2hO9f2F2GWQXz3hCXJQhFOaWyu/2ATZRgO3m/7/483kB5j0/e736Lo5oxGEirlyEUQDf7MK4j/q2TqOFASsFgIK1O9gFGs8pyAuNu4FDgu60LkbKJ/uEmRRJtqM5SutwTcBdlI+Osm0i7lmWuhBSOHQNpZR4B3AYc1LqQKd5DOWJ4b8ePcwRl4Y3+fHyeEmS+07oQKYvoVz5SBJOrzwNbFzLFv9NPKIA8C+4RwNnAXq0LkbIwGEjTXQE8jdj31D9POZbYRyjY/TFP6fkx1+JFlM2ihgNpBQwG0vLOJX4o+Brtrt4/TH9dilm8CHgDfuZJU/lH'+
			'Ii3tXMq5/ch/J5NvQ2y5+/49lOmI0cPB64j/ekrNuflQ2rMM7ee7Kef15zmXfxYZghTASyhHOZ0oKO2BwUB6oAyhAOAPgQ8RIxRMZAgH0QKVFIrBQLq/I4Drgb1bFzJF5KveaylfIhR5X4bhQFpC5FQv9W1yNj96KPh74oYCgOcQf8HNcgRV6p0dA6lwgNF87UsZnRz9REeWeQxSb+wYSHmuHrMcDYTSqj+F+N9VkGWCo9Qbg4GUZ4BRhmFCu8tyNe50RGk3BgONXYYBRlkW2D1pMZFxLbKcRJE6ZzDQmGU5WpehJb+cPr/DYRZOR5Rw86HGK8MV4tCO1GV4ziH2UVCpcyZjjVGWBWoLwwkFUE5UbCX+gpuhkyR1xo6BxsYBRu1lWHiH1q2RVizyH6Y0b4dTztZHDwVvJseV9Vq9BPgEsRfcfYHtwDOIvTFVmjs7Bh'+
			'qLhwNfAg5pXcgU7wVOBn7WupCOPZwS0qIvvD8Engh8q3UhUl/sGGgMJovQwa0LmeIjjCMUQFlwjwM+Q+zOQZb3jjQ3dgw0BtcQ/8r0Jsqsgm+3LqRnh1MmD0ZfeMf6+miE7Bho6N5J/G/6G/Oik+V3Pxw4h/j7U6SZGQw0ZO8ETiP2+/yHlB36GacazstNwPHAT1sXMsWJwAUYDjRwkT8wpVmcSPwjcVnus/fhPynTEaPvrzgReCPxZ2BIaxb5Q1NaqyxXdluA6zAUTGQ5kfHXwKn4+amBcvOhhuYpwA7gQa0LmeKlwHkMd1bBLDLcAgJfQw1U9D88aTUOpwyliR4K3gy8CxeUpWRZcM8i/sZWadXsGGgofoEy6jj6sbcs7fIIPgb8BrEXXveJaHAMBhqCLFP0PgJswlCwUlleV6cjalC8laDssiweN5Fj130kWa7G'+
			'nY6oQTEYKLsM93mzDPGJKMuchywTHKWpDAbKLMPu9SwLW2RZgpXTETUIkT9QpeWcTvyz5Fla4Rk4HVHqSeQPVWkpJwJvJf70OQcYzZfTEaUeeCpB2TyLMqvgwY3rmOZllLP497YuZIBeSLkqjz6vwveAUrJjoEwOAy4lfij4B8oAIxeEbrwPOJ/4z+87KHtg7BwoFTsGyuKxlAFGj25dyBTvowwwin4vfAgyLLz/R9lnci3eUlISBgNl8DDKOfFnEvtY4kcpA4wMBf35KPCbxO5+Gg6UisFA0WUJBTcDG3D6Xd+yvD/uAQ4Fvtm6EGmayClbghwDjAwF7WS5Gt+HMgDpkNaFSNMYDBRZlnvIpxB/+M6QZXkNDqOcqDEcKDSDgaL6U8oAo+ihIMPV6hhk6docRpmOGP2opUbMYKCIXkgZYBR9etwWnGoYyc2U6Yg/aV'+
			'3IFFnmMGikDAaK5lnANuJ/aL4M+CCws3Uhup9PU6YjRj8Z8kLKdMTo4VcjZDBQJA4w0jxkmSXxV8S/XaYR8riionCAkeYtw+ZVcHSygjEYKIIsZ9EdYJRPlnDwLOAa3K+iAAwGai1LKMiy610P5HREaRUi/6FoHBxgpK49j/inRyYB+ZeJ/begETAYqKUMbd4sw3O0tCxX4w8DLgEObl2Ixs1goFYcYKQ+ZQl4TkdUcwYDtfACyvS36Ge4TwOuw1AwFDcDxxL/i4wOA95N/GO7GiiDgfr2q5Spb9E/9E4HLsIjZENzC2U64o9bFzLFb2E4UCMGA/XpyZQBRg9pXcgUfwOci6FgqP6LMosi+ujkFwD/TPwpoBoYjyuqL4+hDDB6TOtCpng/8GLiLxqa3QvIcVV+OvAvGFTVEzsG6sM+wMXEn2poKBiX95NjtPXbgT8h'+
			'9kZdDYgdA3VtH+AKyt6CyOezb6HMKoi+MU3zl2XhfTblNogf2uqUHQN17Z+IP9XQUDBuWTaaZgjYGgA7BurSS4G3EXvz1D3A0yjhwD+G8crU2ToG+FHrQjRcdgzUlYcCZxI/FDwHQ4F2vReit+qfDLyB2H9XSs5goK6cRfzpbc/Db7TTLvcAzyX+LaVXAAe1LkLDZTBQFx5KGSITeTPX6cDHgZ2tC1Eo3wA2EjscZPj7UmIGA3VhE3Bg6yKW4QAjLWeyGTXyffxX4O0EdcRgoC4cS9yrmfdTTkr8rHUhCu0WYDNxZ1o8GXhU6yI0TAYDdWEDMd9bDjDSakR/vxzdugANU8QPb+W3nnhHvm4BXkncD3nFFLnDZDBQJwwGGgMHGGkWUfek7N+6AA2TwUBDNzmC9q3WhSi1LNMRpZkZDNSFKEcAfwT8OnArzirQ7LZQ5l'+
			'5EeX9Hu12ngTAYaMieT5lkF+WDXLn9iF3TESO8p3a0LkDDZDBQF7bT/oPz5cDHAtShYfkRcaYjfqV1ARomg4G6cANt78W+jrJZLOJOcuX3Tcp0xK83rOHHwPUNH18DZjBQFy6g3aJ8EeV42U8bPb7G4VbKSZd7Gj3+ZbgRUh0xGKgLXwC+RP8b/i6iDKT5cc+Pq3H6AmU6Yov327sx/KojBgN15Y30O0zoVuBVGArUrxZh9FrgCtw/o44YDNSVi4BP0M+H1620v+er8er79tWrcYKnOmQwUJdeQ/e7tye7xL/R8eNIy+lrw+s/UjoGdgvUmYXFRee+qFN/RLkf+pAOfna0c+XSvwIvoJtvF/048Ad4u0wdMxioD12EA0OBItoH+CDw28y3I3sNcDx2xtQDbyWoDxcBxzK/D7VvAMdhKFA89wC/C7yD+d1WmPffj7Qs'+
			'g4H6cg3wROC9zHb++p3AUcCnMRQorpcDv8ds39PxdeDE+/7n7QP1xlsJauHZlCNepwJ7r+Df/wHwYeBM4H/wC5GUyx8DZwBPZ2UXY/8NvA04D6d3qgGDgVral9IiPZoyRW6yYWsBuBO4EbgKuBKnvCm/xwGbgEOBY9gVEtZRxoh/lfI9I5/DbpgaMhhIkqTKPQaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJK'+
			'kyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmqDAaSJKkyGEiSpMpgIEmSKoOBJEmq/h9hAmY6A4lcLgAAAABJRU5ErkJggg==';
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
		hs+='height : 80px;';
		hs+='left : -102px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
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
		me._image_4.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_4.appendChild(me._image_4);
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
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,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'+
			'g3zoxxAAAAAElFTkSuQmCC';
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
		hs+='height : 71px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
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
		me._hotspot_6.appendChild(me._image_6);
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
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAAGCCAYAAABdBeK7AAAOUklEQVR4nO3dy3YbNxRFwXZW/v+XlUGimJJFsh8H6AugauSJJRLEuhugaPnXx8fHBgBk/HX3AwCAmQgrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAAQJKwAECSsABAkrAA'+
			'QJKwAECSsABAkrAAQJKwAE/X33A4CFfYS+zq/Q1wEChBXaSEUz8b2EFzoSVriuZ0TPePb4BBcaEFY4pnpEj/j+XIQWAoQV3psppq8ILQQIK/xslZi+8rgGIgs7CSv8JqbPiSzsJKysTkyPE1l4QVhZUYWYvgrST4/vXcDuek6f31dg4T/Cykp6xicdmo83X/NoqNPcYuE/wsoKWoclGZIWj/Wnx9dyTdxiWZqwMrNW8bgrGO9urUd8/zot1kpgWZKwMqNet760O3/22zK0AstShJWZpMNUMQTJW+srj98jta4CyxJ+fXxU+IAkXJLcxHe+zXvEKI/zFYFlSm6sjMyQ7+9znRJr3+v2DV25sTKqxMatMtTPPpfRH/+jKs8FLnNjZTSGeD2JW6yfvzKNv+5+AHDA1aj+2uoN7kSMqkisb7XnBIe5sTKCRFDp5+oN1u2V'+
			'obmxUt2VqFa8oT5KfQCoqqvrX/m5wVNurFR1NajUceUG65PDDMeNlYqufEp2lCHc4jcbVXf2tfnYxnmOIKyUM/o/Pdlj5UhcOfysvG4MRFip4uytZKRbakujRUdcmZawUsEKt9RPwvDb2UORt4YpTVi5m1tqzqixcXtlKsLKnc5GdVRC8NyV2yuUIqzcZbWo9jJ6aMSV4QkrdzjzX6SNHlXDf78zr7f1pQxhpbdR/t/Rkc0SGXFlSMJKL2c+yTlLVA3888SV4QgrPfh5an8zBUZcGYqwUs0MP099dOeQnykw4sowhJXWjgy4mYJK3tFDl7hyC2GlpdWjWmGwV3gMaeJKacJKK6tHlbbElbKElRZEtdYwr/RYksSVkoSVNFGlJ3GlHGElSVT/VXGAV3xMKeJKKcJKiqhyJ3GlDGElQVR/qzy0Kz+2hNn3FoMQVnqaff'+
			'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'+
			'ZGceX2um0C24ugsjxhZSRXb6+Pf9cAz0r8XNtrwhSElREJbA2pD4l5DZiKsDKyq28Pb9/+vgG/j6DCC8LK6BK3108i+1z6nzBZX6YlrMwiGdjHr7NyAFr8e+CV15NFCCuzaRXY719/Vq1+ucbs6wb/E1ZmlQ7sp9neLm79W6pmWCM4RFiZXavAPvua1UPS69c9Vl8HaEZYWUXLwD569vV7h+au35csqCxPWFnN4+DvGZ+j3+t7oCr/xwJiCg+ElZX1usWeUfExPRJTeEJY4b5b7IgEFd4QVvhKZP8kpnCAsMJzI/2cM0lI4QJhhf1mDa2QQpCwwnk/Bal6bEUUGhNWyHoWrt7BFVC4ibBCH0IHi/jr7gcAADMRVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJW'+
			'AAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAgSVgAIElYACBJWAAj6B6tD1WYok5QgAA'+
			'AAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
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
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_7.appendChild(me._image_7);
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