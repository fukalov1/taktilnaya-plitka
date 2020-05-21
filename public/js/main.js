// ==================================================
// fancyBox v3.2.5
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function a(t){var e=n(t.currentTarget),o=t.data?t.data.options:{},a=e.attr("data-fancybox")||"",i=0,s=[];t.isDefaultPrevented()||(t.preventDefault(),a?(s=o.selector?n(o.selector):t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),i=s.index(e),i<0&&(i=0)):s=[e],n.fancybox.open(s,o,i))}if(n){if(n.fn.fancybox)return void("console"in t&&console.log("fancyBox already initialized"));var i={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","share","close"],idleTime:3,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{margin:0,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(n.style[t]!==o)return a[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,o,a){var i=this;i.opts=n.extend(!0,{index:a},n.fancybox.defaults,o||{}),n.fancybox.isMobile&&(i.opts=n.extend(!0,{},i.opts,i.opts.mobile)),o&&n.isArray(o.buttons)&&(i.opts.buttons=o.buttons),i.id=i.opts.id||++c,i.group=[],i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=null,i.createGroup(t),i.group.length&&(i.$lastFocus=n(e.activeElement).blur(),i.slides={},i.init())};n.extend(p.prototype,{init:function(){var a,i,s,c=this,l=c.group[c.currIndex],u=l.opts,d=n.fancybox.scrollbarWidth;c.scrollTop=r.scrollTop(),c.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||(n("body").addClass("fancybox-active"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream?"image"!==l.type&&n("body").css("top",n("body").scrollTop()*-1).addClass("fancybox-iosfix"):!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(a=n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=a[0].offsetWidth-a[0].clientWidth,a.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(u.buttons,function(t,e){s+=u.btnTpl[e]||""}),i=n(c.translate(c,u.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",u.btnTpl.arrowLeft+u.btnTpl.arrowRight))).attr("id","fancybox-container-"+c.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox",c).appendTo(u.parentEl),c.$refs={container:i},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){c.$refs[t]=i.find(".fancybox-"+t)}),c.trigger("onInit"),c.activate(),c.jumpTo(c.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var a=n[e];return a===o?t:a})},createGroup:function(t){var e=this,a=n.makeArray(t);n.each(a,function(t,a){var i,s,r,c,l={},u={};n.isPlainObject(a)?(l=a,u=a.opts||a):"object"===n.type(a)&&n(a).length?(i=n(a),u=i.data(),u=n.extend({},u,u.options||{}),u.$orig=i,l.src=u.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=a)):l={type:"html",src:a+""},l.opts=n.extend(!0,{},e.opts,u),n.isArray(u.buttons)&&(l.opts.buttons=u.buttons),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),s?l.type=s:e.trigger("objectNeedsType",l),l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(a,[e,l])),"function"===n.type(e.opts.caption)&&(l.opts.caption=e.opts.caption.apply(a,[e,l])),l.opts.caption instanceof n||(l.opts.caption=l.opts.caption===o?"":l.opts.caption+""),"ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},600))}),r.on("focusin.fb",function(t){var a=n.fancybox?n.fancybox.getInstance():null;a.isClosing||!a.current||!a.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||a&&"fixed"!==n(t.target).css("position")&&!a.$refs.container.has(t.target).length&&(t.stopPropagation(),a.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,a=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===a||27===a?(t.preventDefault(),void o.close(t)):37===a||38===a?(t.preventDefault(),void o.previous()):39===a||40===a?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,a)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,a){var i,s,r,c,l,u,d,p=this,h=p.group.length;if(!(p.isSliding||p.isClosing||p.isAnimating&&p.firstRun)){if(t=parseInt(t,10),s=p.current?p.current.opts.loop:p.opts.loop,!s&&(t<0||t>=h))return!1;if(i=p.firstRun=null===p.firstRun,!(h<2&&!i&&p.isSliding)){if(c=p.current,p.prevIndex=p.currIndex,p.prevPos=p.currPos,r=p.createSlide(t),h>1&&((s||r.index>0)&&p.createSlide(t-1),(s||r.index<h-1)&&p.createSlide(t+1)),p.current=r,p.currIndex=r.index,p.currPos=r.pos,p.trigger("beforeShow",i),p.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return r.opts.animationEffect&&e&&p.$refs.container.css("transition-duration",e+"ms"),p.$refs.container.removeClass("fancybox-is-hidden"),f(p.$refs.container),p.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),p.loadSlide(r),void p.preload();n.each(p.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(p.slides,function(t,o){var a=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:a*l+a*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===p.currPos&&(r.isMoved=!1,p.complete())})})):p.$refs.stage.children().removeAttr("style"),r.isLoaded?p.revealContent(r):p.loadSlide(r),p.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,a=this;return o=t%a.group.length,o=o<0?a.group.length+o:o,!a.slides[t]&&a.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage),a.slides[t]=n.extend(!0,{},a.group[o],{pos:t,$slide:e,isLoaded:!1}),a.updateSlide(a.slides[t])),a.slides[t]},scaleToActual:function(t,e,a){var i,s,r,c,l,u=this,d=u.current,f=d.$content,p=parseInt(d.$slide.width(),10),h=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,i=n.fancybox.getTranslate(f),c=g/i.width,l=b/i.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=i.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},a||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,a=o.current,i=a.$content;"image"!=a.type||a.hasError||!i||o.isAnimating||(n.fancybox.stop(i),o.isAnimating=!0,e=o.getFitPos(a),o.updateCursor(e.width,e.height),n.fancybox.animate(i,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,a,i,s,r=this,c=t.$content,l=t.width,u=t.height,d=t.opts.margin;return!(!c||!c.length||!l&&!u)&&("number"===n.type(d)&&(d=[d,d]),2==d.length&&(d=[d[0],d[1],d[0],d[1]]),e=parseInt(r.$refs.stage.width(),10)-(d[1]+d[3]),o=parseInt(r.$refs.stage.height(),10)-(d[0]+d[2]),a=Math.min(1,e/l,o/u),i=Math.floor(a*l),s=Math.floor(a*u),{top:Math.floor(.5*(o-s))+d[0],left:Math.floor(.5*(e-i))+d[3],width:i,height:s})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(e.isAnimating=!1,n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,a=this,i=a.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a.current&&!a.isClosing&&(a.isZoomable()?(i.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<a.current.width&&e<a.current.height:a.isScaledDown(),n?i.addClass("fancybox-can-zoomIn"):a.current.opts.touch?i.addClass("fancybox-can-drag"):i.addClass("fancybox-can-zoomOut")):a.current.opts.touch&&i.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,a=!1;return o&&(a=n.fancybox.getTranslate(o),a=a.width<e.width||a.height<e.height),a},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,a,i=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,i.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),a=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){a.abort()});break;default:i.setError(t)}return!0}},setImage:function(e){var o,a,i,s,r=this,c=e.opts.srcset||e.opts.image.srcset;if(c){i=t.devicePixelRatio||1,s=t.innerWidth*i,a=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var l=0;l<a.length;l++){var u=a[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=i){o=u;break}}!o&&a.length&&(o=a[a.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,a=this,i=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(s),e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(a.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),a.afterLoad(t)}),s.on("refresh.fb",function(){var n,a,s,r=t.$content,c=i.css.width,l=i.css.height;if(1===e[0].isReady){try{a=e.contents(),s=a.find("body")}catch(t){}s&&s.length&&(c===o&&(n=e[0].contentWindow.document.documentElement.scrollWidth,c=Math.ceil(s.outerWidth(!0)+(r.width()-n)),c+=r.outerWidth()-r.innerWidth()),l===o&&(l=Math.ceil(s.outerHeight(!0)),l+=r.outerHeight()-r.innerHeight()),c&&r.width(c),l&&r.height(l)),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(a.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,a,i,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],i=t.opts[c.firstRun?"animationDuration":"transitionDuration"],i=parseInt(t.forcedDuration===o?i:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&i||(e=!1),"zoom"!==e||t.pos===c.currPos&&i&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=r.width/u.width,r.scaleY=r.height/u.height,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,i,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),a="fancybox-animated fancybox-slide--"+(t.pos>=c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(a),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",i,function(e){l.removeClass(a).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var a,i=this,s=!1,r=function(e){for(var o,a=e[0],i=a.getBoundingClientRect(),s=[];null!==a.parentElement;)"hidden"!==n(a.parentElement).css("overflow")&&"auto"!==n(a.parentElement).css("overflow")||s.push(a.parentElement.getBoundingClientRect()),a=a.parentElement;return o=s.every(function(t){var e=Math.min(i.right,t.right)-Math.max(i.left,t.left),n=Math.min(i.bottom,t.bottom)-Math.max(i.top,t.top);return e>0&&n>0}),o&&i.bottom>0&&i.right>0&&i.left<n(t).width()&&i.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(a=i.$refs.stage.offset(),s={top:l.top-a.top+parseFloat(c.css("border-top-width")||0),left:l.left-a.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,a={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?a[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=a,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(e&&e.isComplete&&(t=e.$slide.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,a,i,s,r,c,l=this,p=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),p.timouts&&clearTimeout(p.timouts),i=p.$content,o=p.opts.animationEffect,a=n.isNumeric(e)?e:o?p.opts.animationDuration:0,p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),p.$slide.siblings().trigger("onReset").remove(),a&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(p),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&i&&a&&"image"===p.type&&!p.hasError&&(c=l.getThumbPos(p))||(o="fade"),"zoom"===o?(n.fancybox.stop(i),r=n.fancybox.getTranslate(i),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=p.opts.zoomOpacity,"auto"==s&&(s=Math.abs(p.width/p.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(p.$content,r),f(p.$content),n.fancybox.animate(p.$content,c,a,h),!0):(o&&a?t===!0?setTimeout(h,a):n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,a,h):h(),!0)))},cleanUp:function(t){var o,a,i=this,r=n("body");i.current.$slide.trigger("onReset"),i.$refs.container.empty().remove(),i.trigger("afterClose",t),i.$lastFocus&&i.current.opts.backFocus&&i.$lastFocus.focus(),i.current=null,o=n.fancybox.getInstance(),o?o.activate():(s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft),r.removeClass("fancybox-active compensate-for-scrollbar"),r.hasClass("fancybox-iosfix")&&(a=parseInt(e.body.style.top,10),r.removeClass("fancybox-iosfix").css("top","").scrollTop(a*-1)),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,a=Array.prototype.slice.call(arguments,1),i=this,s=e&&e.opts?e:i.current;return s?a.unshift(s):s=i,a.unshift(i),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,a)),o===!1?o:void("afterClose"!==t&&i.$refs?i.$refs.container.trigger(t+".fb",a):r.trigger(t+".fb",a))},updateControls:function(t){var e=this,n=e.current,o=n.index,a=n.opts.caption,i=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=a&&a.length?s.html(a):null,e.isHiddenControls||e.isIdle||e.showControls(),i.find("[data-fancybox-count]").html(e.group.length),i.find("[data-fancybox-index]").html(o+1),i.find("[data-fancybox-prev]").prop("disabled",!n.opts.loop&&o<=0),i.find("[data-fancybox-next]").prop("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?i.find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():i.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.2.5",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",a={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(a.transform=n),e.opacity!==o&&(a.opacity=e.opacity),e.width!==o&&(a.width=e.width),e.height!==o&&(a.height=e.height),t.css(a)},animate:function(t,e,a,i,s){n.isFunction(a)&&(i=a,a=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(d,function(a){(!a||!a.originalEvent||t.is(a.originalEvent.target)&&"z-index"!=a.originalEvent.propertyName)&&(n.fancybox.stop(t),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration",""),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(i)&&i(a))}),n.isNumeric(a)&&t.css("transition-duration",a+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),e.scaleX&&t.hasClass("fancybox-image-wrap")&&t.parent().addClass("fancybox-is-scaling"),t.data("timer",setTimeout(function(){t.trigger("transitionend")},a+16))},stop:function(t){clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.hasClass("fancybox-image-wrap")&&t.parent().removeClass("fancybox-is-scaling")}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},a):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},a),this},r.on("click.fb-start","[data-fancybox]",a)}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"
},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,a,i){var s,r,c,l,u,d,f,p=i.src||"",h=!1;s=t.extend(!0,{},n,i.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,d={},o.paramPlace&&c[o.paramPlace]){u=c[o.paramPlace],"?"==u[0]&&(u=u.substring(1)),u=u.split("&");for(var a=0;a<u.length;++a){var s=u[a].split("=",2);2==s.length&&(d[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,i.opts[n],d),p="function"===t.type(o.url)?o.url.call(this,c,l,i):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,i):e(o.thumb,c),"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(i.src=p,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=r),"iframe"===h&&(t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=f,i.opts.slideClass+=" fancybox-slide--"+("gmap_place"==f||"gmap_search"==f?"map":"video"))):p&&(i.type=i.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),i=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,a=o.length;e<a;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],a=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return a||i},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var a=this,c=n(o.target),u=a.instance,d=u.current,f=d.$content,p="touchstart"==o.type;if(p&&a.$container.off("mousedown.fb.touch"),!d||a.instance.isAnimating||a.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(a.startPoints=i(o),a.startPoints&&!(a.startPoints.length>1&&u.isSliding))){if(a.$target=c,a.$content=f,a.canTap=!0,a.opts=d.opts.touch,n(e).off(".fb.touch"),n(e).on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(a,"ontouchend")),n(e).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(a,"ontouchmove")),!a.opts&&!u.canPan()||!c.is(a.$stage)&&!a.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());o.stopPropagation(),n.fancybox.isMobile&&(l(a.$target)||l(a.$target.parent()))||o.preventDefault(),a.canvasWidth=Math.round(d.$slide[0].clientWidth),a.canvasHeight=Math.round(d.$slide[0].clientHeight),a.startTime=(new Date).getTime(),a.distanceX=a.distanceY=a.distance=0,a.isPanning=!1,a.isSwiping=!1,a.isZooming=!1,a.sliderStartPos=a.sliderLastPos||{top:0,left:0},a.contentStartPos=n.fancybox.getTranslate(a.$content),a.contentLastPos=null,1!==a.startPoints.length||a.isZooming||(a.canTap=!u.isSliding,"image"===d.type&&(a.contentStartPos.width>a.canvasWidth+1||a.contentStartPos.height>a.canvasHeight+1)?(n.fancybox.stop(a.$content),a.$content.css("transition-duration","0ms"),a.isPanning=!0):a.isSwiping=!0,a.$container.addClass("fancybox-controls--isGrabbing")),2!==a.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(a.isZooming=!0,a.isSwiping=!1,a.isPanning=!1,n.fancybox.stop(a.$content),a.$content.css("transition-duration","0ms"),a.centerPointStartX=.5*(a.startPoints[0].x+a.startPoints[1].x)-n(t).scrollLeft(),a.centerPointStartY=.5*(a.startPoints[0].y+a.startPoints[1].y)-n(t).scrollTop(),a.percentageOfImageAtPinchPointX=(a.centerPointStartX-a.contentStartPos.left)/a.contentStartPos.width,a.percentageOfImageAtPinchPointY=(a.centerPointStartY-a.contentStartPos.top)/a.contentStartPos.height,a.startDistanceBetweenFingers=s(a.startPoints[0],a.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=i(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.opts||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,i=this,s=i.isSwiping,r=i.sliderStartPos.left||0;s===!0?Math.abs(i.distance)>10&&(i.canTap=!1,i.instance.group.length<2&&i.opts.vertical?i.isSwiping="y":i.instance.isSliding||i.opts.vertical===!1||"auto"===i.opts.vertical&&n(t).width()>800?i.isSwiping="x":(e=Math.abs(180*Math.atan2(i.distanceY,i.distanceX)/Math.PI),i.isSwiping=e>45&&e<135?"y":"x"),i.instance.isSliding=i.isSwiping,i.startPoints=i.newPoints,n.each(i.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===i.instance.current.pos&&(i.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),i.instance.SlideShow&&i.instance.SlideShow.isActive&&i.instance.SlideShow.stop()):("x"==s&&(i.distanceX>0&&(i.instance.group.length<2||0===i.instance.current.index&&!i.instance.current.opts.loop)?r+=Math.pow(i.distanceX,.8):i.distanceX<0&&(i.instance.group.length<2||i.instance.current.index===i.instance.group.length-1&&!i.instance.current.opts.loop)?r-=Math.pow(-i.distanceX,.8):r+=i.distanceX),i.sliderLastPos={top:"x"==s?0:i.sliderStartPos.top+i.distanceY,left:r},i.requestId&&(a(i.requestId),i.requestId=null),i.requestId=o(function(){i.sliderLastPos&&(n.each(i.instance.slides,function(t,e){var o=e.pos-i.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:i.sliderLastPos.top,left:i.sliderLastPos.left+o*i.canvasWidth+o*e.opts.gutter})}),i.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,i,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,i=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),i.scaleX=s.contentStartPos.scaleX,i.scaleY=s.contentStartPos.scaleY,s.contentLastPos=i,s.requestId&&(a(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var a,i,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,p=c.distanceX,h=c.distanceY;return a=Math.max(0,.5*l-.5*n),i=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(p>0&&t>a&&(t=a-1+Math.pow(-a+d+p,.8)||0),p<0&&t<s&&(t=s+1-Math.pow(s-d-p,.8)||0)),o>u&&(h>0&&e>i&&(e=i-1+Math.pow(-i+f+h,.8)||0),h<0&&e<r&&(e=r+1-Math.pow(r-f-h,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var a=this,i=a.canvasWidth,s=a.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,i=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(i*d),p=Math.floor(r*d),h=(i-f)*e.percentageOfImageAtPinchPointX,g=(r-p)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(h+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=p,e.contentLastPos=$,e.requestId&&(a(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=i(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(a(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,a=this;a.contentLastPos&&(a.opts.momentum===!1?(t=a.contentLastPos.left,e=a.contentLastPos.top):(t=a.contentLastPos.left+a.velocityX*a.speed,e=a.contentLastPos.top+a.velocityY*a.speed),o=a.limitPosition(t,e,a.contentStartPos.width,a.contentStartPos.height),o.width=a.contentStartPos.width,o.height=a.contentStartPos.height,n.fancybox.animate(a.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,a,i=this,s=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,a={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,a),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>s.width||c>s.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.setTranslate(i.content,n.fancybox.getTranslate(i.$content)),n.fancybox.animate(i.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,a=n(t.target),s=o.instance,r=s.current,c=t&&i(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var a=r.opts[e];if(n.isFunction(a)&&(a=a.apply(s,[r,t])),a)switch(a){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>a[0].clientWidth+a.offset().left)){if(a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(a.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var a=e&&e.SlideShow;o?a&&n.opts.slideShow.autoStart&&a.start():a&&a.isActive&&a.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,a,i,s){var r=o&&o.SlideShow;!r||!a.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(i.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){var e,n,o,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={};for(n=0;n<a.length;n++)if(e=a[n],e&&e[1]in t){for(o=0;o<e.length;o++)i[a[0][o]]=e[o];return i}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,a){e&&e.FullScreen&&70===a&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var n=function(t){this.init(t)};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this;e.instance=t,t.Thumbs=e;var n=t.group[0],o=t.group[1];e.opts=t.group[t.currIndex].opts.thumbs,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),e.opts&&n&&o&&("image"==n.type||n.opts.thumb||n.opts.$thumb)&&("image"==o.type||o.opts.thumb||o.opts.$thumb)?(e.$button.show().on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,n,o=this,a=o.instance,i=o.opts.parentEl;o.$grid=e('<div class="fancybox-thumbs fancybox-thumbs-'+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)),t="<ul>",e.each(a.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",o.$list=e(t).appendTo(o.$grid).on("click","li",function(){a.jumpTo(e(this).data("index"))}),o.$list.find("img").hide().one("load",function(){var t,n,o,a,i=e(this).parent().removeClass("fancybox-thumbs-loading"),s=i.outerWidth(),r=i.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,a=n/r,o>=1&&a>=1&&(o>a?(t/=a,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":n>r?Math.floor(.3*r-.3*n):Math.floor(.5*r-.5*n),"margin-left":Math.floor(.5*s-.5*t)}).show()}).each(function(){this.src=e(this).data("src")}),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"))+a.group.length*o.$list.children().eq(0).outerWidth(!0)+"px")},focus:function(t){var e,n,o=this,a=o.$list;o.instance.current&&(e=a.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.parent().scrollLeft()||n.left>a.parent().scrollLeft()+(a.parent().width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus(0)):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var o;e&&!e.Thumbs&&(o=new n(e),o.isActive&&o.opts.autoStart===!0&&o.show())},"beforeShow.fb":function(t,e,n,o){var a=e&&e.Thumbs;a&&a.isVisible&&a.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.Thumbs;i&&i.isActive&&71===a&&(o.preventDefault(),i.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a href="https://www.facebook.com/sharer/sharer.php?u={{src}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#3b5998"><path d="M27.6 3h-23.2c-.8 0-1.4.6-1.4 1.4v23.1c0 .9.6 1.5 1.4 1.5h12.5v-10.1h-3.4v-3.9h3.4v-2.9c0-3.4 2.1-5.2 5-5.2 1.4 0 2.7.1 3 .2v3.5h-2.1c-1.6 0-1.9.8-1.9 1.9v2.5h3.9l-.5 3.9h-3.4v10.1h6.6c.8 0 1.4-.6 1.4-1.4v-23.2c.1-.8-.5-1.4-1.3-1.4z"></path></svg><span>Facebook</span></a><a href="https://www.pinterest.com/pin/create/button/?url={{src}}&amp;description={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#c92228"><path d="M16 3c-7.2 0-13 5.8-13 13 0 5.5 3.4 10.2 8.3 12.1-.1-1-.2-2.6 0-3.7.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.6 0 1.1.4 2.3 1 3 .1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 7.2 0 13-5.8 13-13 0-7.1-5.8-12.9-13-12.9z"></path></svg><span>Pinterest</span></a><a href="https://twitter.com/intent/tweet?url={{src}}&amp;text={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#1da1f2"><path d="M30 7.3c-1 .5-2.1.8-3.3.9 1.2-.7 2.1-1.8 2.5-3.2-1.1.7-2.3 1.1-3.6 1.4-1-1.1-2.5-1.8-4.2-1.8-3.2 0-5.7 2.6-5.7 5.7 0 .5.1.9.1 1.3-4.8-.2-9-2.5-11.8-6-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.6 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.6 5.6-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.3 2.9 3.9 5.4 4-2 1.5-4.4 2.5-7.1 2.5-.5 0-.9 0-1.4-.1 2.5 1.6 5.6 2.6 8.8 2.6 10.6 0 16.3-8.8 16.3-16.3v-.7c1.1-1 2-2 2.8-3.2z"></path></svg><span>Twitter</span></a></p><p><input type="text" value="{{src_raw}}" onfocus="this.select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,a=e.fancybox.getInstance();a&&(t=a.current.opts.hash===!1?a.current.src:window.location,o=a.current.opts.share.tpl.replace(/\{\{src\}\}/g,encodeURIComponent(t)).replace(/\{\{src_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,a.$caption?encodeURIComponent(a.$caption.text()):""),e.fancybox.open({src:a.translate(a,o),type:"html",opts:{animationEffect:"fade",animationDuration:250}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,a=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:a}}function a(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function i(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.hash||(e.$orig?e.$orig.data("fancybox"):""))}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=!0,r=null,c=null;n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,a;e.group[e.currIndex].opts.hash!==!1&&(n=o(),a=i(e),a&&n.gallery&&a==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,a){var l;a&&a.opts.hash!==!1&&(l=i(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),r=l+(o.group.length>1?"-"+(a.index+1):""),"replaceState"in e.history?(c&&clearTimeout(c),c=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+r),c=null,s=!1},300)):e.location.hash=r))},"beforeClose.fb":function(o,a,s){var l,u;c&&clearTimeout(c),s.opts.hash!==!1&&(l=i(a),u=a&&a.opts.origHash?a.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(a.scrollTop).scrollLeft(a.scrollLeft))),r=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!r||r===t.gallery+"-"+t.index||1===t.index&&r==t.gallery||(r=null,n.fancybox.close()):""!==t.gallery&&a(t)}),setTimeout(function(){a(o())},50))})}(document,window,window.jQuery||jQuery);
/**
 * Swiper 5.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 26, 2019
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Swiper = factory());
}(this, function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  function filter(callback) {
    var matchedItems = [];
    var dom = this;
    for (var i = 0; i < dom.length; i += 1) {
      if (callback.call(dom[i], i, dom[i])) { matchedItems.push(dom[i]); }
    }
    return new Dom7(matchedItems);
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!win.PointerEvent && ('maxTouchPoints' in win.navigator) && win.navigator.maxTouchPoints > 0,

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    function slidesForMargin(slideIndex) {
      if (!params.cssMode) { return true; }
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup = groupIndex === 0
            ? params.slidesPerGroup
            : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = (slideIndexInGroup - row * columnsInGroup) + groupIndex * params.slidesPerGroup;

          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide.css(
          ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
          (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
        );
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.filter(slidesForMargin).css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.filter(slidesForMargin).css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.filter(slidesForMargin).css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) { return -offsetBefore; }
        if (snap > maxSnap) { return maxSnap + offsetAfter; }
        return snap;
      });
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize$1 = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize$1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize$1 -= params.spaceBetween;
      if (allSlidesSize$1 < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize$1) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                  || (slideAfter > 1 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    var swiper = this;
    if (typeof translate === 'undefined') {
      var multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var wrapperEl = swiper.wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)"));
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  function translateTo (translate, speed, runCallbacks, translateBounds, internal) {
    var obj;

    if ( translate === void 0 ) translate = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;
    if ( translateBounds === void 0 ) translateBounds = true;
    var swiper = this;

    var params = swiper.params;
    var wrapperEl = swiper.wrapperEl;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) { newTranslate = minTranslate; }
    else if (translateBounds && translate < maxTranslate) { newTranslate = maxTranslate; }
    else { newTranslate = translate; }

    // Update progress
    swiper.updateProgress(newTranslate);

    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo(( obj = {}, obj[isH ? 'left' : 'top'] = -newTranslate, obj.behavior = 'smooth', obj ));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        }
      }
      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
      }
    }

    return true;
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.cssMode) { return; }
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    var params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) { return; }
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    var obj;

    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    var wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo(( obj = {}, obj[isH ? 'left' : 'top'] = -translate, obj.behavior = 'smooth', obj ));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
        }
      }
      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      snapGrid.forEach(function (snap) {
        if (!prevSnap && normalizedTranslate >= snap) { prevSnap = snap; }
      });
    }
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal, threshold) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;
    if ( threshold === void 0 ) threshold = 0.5;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if ((translate - currentSnap) > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var currentSnap$1 = swiper.snapGrid[snapIndex];
      if ((translate - prevSnap) <= (currentSnap$1 - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.snapGrid.length - 1);

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var platform = win.navigator.platform;
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      iphone: false,
      ipod: false,
      ipad: false,
      edge: false,
      ie: false,
      firefox: false,
      macos: false,
      windows: false,
      cordova: !!(win.cordova || win.phonegap),
      phonegap: !!(win.cordova || win.phonegap),
      electron: false,
    };

    var screenWidth = win.screen.width;
    var screenHeight = win.screen.height;

    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
    var edge = ua.indexOf('Edge/') >= 0;
    var firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
    var windows = platform === 'Win32';
    var electron = ua.toLowerCase().indexOf('electron') >= 0;
    var macos = platform === 'MacIntel';

    // iPadOs 13 fix
    if (!ipad
      && macos
      && Support.touch
      && (
        (screenWidth === 1024 && screenHeight === 1366) // Pro 12.9
        || (screenWidth === 834 && screenHeight === 1194) // Pro 11
        || (screenWidth === 834 && screenHeight === 1112) // Pro 10.5
        || (screenWidth === 768 && screenHeight === 1024) // other
      )
    ) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      macos = false;
    }

    device.ie = ie;
    device.edge = edge;
    device.firefox = firefox;

    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.ipod = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Webview
    device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone))
      || (win.matchMedia && win.matchMedia('(display-mode: standalone)').matches);
    device.webview = device.webView;
    device.standalone = device.webView;

    // Desktop
    device.desktop = !(device.ios || device.android) || electron;
    if (device.desktop) {
      device.electron = electron;
      device.macos = macos;
      device.windows = windows;
      if (device.macos) {
        device.os = 'macos';
      }
      if (device.windows) {
        device.os = 'windows';
      }
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    var $targetEl = $(e.target);

    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(swiper.wrapperEl).length) { return; }
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($targetEl.is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== $targetEl[0]
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger || params.cssMode) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.cssMode) {
      return;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeModeSticky) {
            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }

    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll () {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl;
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop;
    // eslint-disable-next-line
    if (swiper.translate === -0) { swiper.translate = 0; }

    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(swiper.translate);
    }

    swiper.emit('setTranslate', swiper.translate, false);
  }

  var dummyEventAttached = false;
  function dummyEventListener() {}

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var capture = !!params.nested;

    // Touch Events
    if (!Support.touch && Support.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
        if (!dummyEventAttached) {
          doc.addEventListener('touchstart', dummyEventListener);
          dummyEventAttached = true;
        }
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        el.addEventListener('mousedown', swiper.onTouchStart, false);
        doc.addEventListener('mousemove', swiper.onTouchMove, capture);
        doc.addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.addEventListener('scroll', swiper.onScroll);
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var capture = !!params.nested;

    // Touch Events
    if (!Support.touch && Support.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        el.removeEventListener('mousedown', swiper.onTouchStart, false);
        doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
        doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener('click', swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.removeEventListener('scroll', swiper.onScroll);
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Get breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerColumn'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(((params.containerModifierClass) + "multirow " + (params.containerModifierClass) + "multirow-column"));
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(((params.containerModifierClass) + "multirow"));
        if (breakpointParams.slidesPerColumnFill === 'column') {
          $el.addClass(((params.containerModifierClass) + "multirow-column"));
        }
      }

      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (point <= win.innerWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
      if (params.slidesPerColumnFill === 'column') {
        suffixes.push('multirow-column');
      }
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }

    if (params.cssMode) {
      suffixes.push('css-mode');
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition = swiper.slides.length > 0 && (params.slidesOffsetBefore + (params.spaceBetween * (swiper.slides.length - 1)) + ((swiper.slides[0]).offsetWidth) * swiper.slides.length);

    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }

    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl;
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = $(el.shadowRoot.querySelector(("." + (swiper.params.wrapperClass))));
        // Children needs to return slot items
        $wrapperEl.children = function (options) { return $el.children(options); };
      } else {
        $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));
      }
      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
      if ( needUpdate === void 0 ) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }

      swiper.$el
        .removeClass(("" + (swiper.params.containerModifierClass) + currentDirection))
        .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) { swiper.update(); }

      return swiper;
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          var $cachedEl = cache[cachedIndex];
          var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
          if (cachedElIndex) {
            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) { swiper.slideNext(); }
        if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 34 || kc === 40) { swiper.slideNext(); }
        if (kc === 33 || kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    },
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if (e.shiftKey && !pX) { // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (swiper.params.cssMode) {
        e.preventDefault();
      }

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:

        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the declereration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        var newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) };
        var ref = swiper.mousewheel;
        var lastEventBeforeSnap = ref.lastEventBeforeSnap;
        var ignoreWheelEvents = lastEventBeforeSnap
          && newEvent.time < lastEventBeforeSnap.time + 500
          && newEvent.delta <= lastEventBeforeSnap.delta
          && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          swiper.mousewheel.lastEventBeforeSnap = undefined;

          if (swiper.params.loop) {
            swiper.loopFix();
          }
          var position = swiper.getTranslate() + (delta * params.sensitivity);
          var wasBeginning = swiper.isBeginning;
          var wasEnd = swiper.isEnd;

          if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
          if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();

          if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
            swiper.updateSlidesClasses();
          }

          if (swiper.params.freeModeSticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(swiper.mousewheel.timeout);
            swiper.mousewheel.timeout = undefined;
            var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift(); // only store the last N events
            }
            var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            var firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15
                && newEvent.time - firstEvent.time < 500
                && firstEvent.delta - newEvent.delta >= 1
                && newEvent.delta <= 6
            ) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
              swiper.mousewheel.lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.mousewheel.timeout = Utils.nextTick(function () {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }
            if (!swiper.mousewheel.timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              swiper.mousewheel.timeout = Utils.nextTick(function () {
                var snapToThreshold = 0.5;
                swiper.mousewheel.lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          }

          // Emit event
          if (!ignoreWheelEvents) { swiper.emit('scroll', e); }

          // Stop autoplay
          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
          // Return page scroll on edge positions
          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
        }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      var event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      var event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          swiper.mousewheel.disable();
        }
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.cssMode) {
          swiper.mousewheel.enable();
        }
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var i$1 = params.dynamicMainBullets; i$1 >= 0; i$1 -= 1) {
                  bullets.eq(bullets.length - i$1).addClass(((params.bulletActiveClass) + "-main"));
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(((params.bulletActiveClass) + "-prev"));
              } else {
                $firstDisplayedBullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
                $lastDisplayedBullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            } else {
              $firstDisplayedBullet
                .prev()
                .addClass(((params.bulletActiveClass) + "-prev"))
                .prev()
                .addClass(((params.bulletActiveClass) + "-prev-prev"));
              $lastDisplayedBullet
                .next()
                .addClass(((params.bulletActiveClass) + "-next"))
                .next()
                .addClass(((params.bulletActiveClass) + "-next-next"));
            }
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        $dragEl[0].style.width = newSize + "px";
      } else {
        $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
      var swiper = this;
      if (swiper.isHorizontal()) {
        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientX : e.clientX);
      }
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientY : e.clientY);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var dragStartPos = scrollbar.dragStartPos;

      var positionRatio;
      positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
        - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
        ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', 'none');
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', '');
        $wrapperEl.transition('');
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
      var activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove, activeListenerWithCapture);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
      var activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove, activeListenerWithCapture);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.history.initialized && swiper.params.cssMode) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running) { swiper.autoplay.run(); }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onVisibilityChange: function onVisibilityChange() {
            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
              swiper.autoplay.pause();
            }
            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
              swiper.autoplay.run();
              swiper.autoplay.paused = false;
            }
          },
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd() {
        var swiper = this;
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.run();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
        document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

}));
//# sourceMappingURL=swiper.js.map


$(document).ready(function(){

// mobile_menu

    $('.burger').click( function() {
        $('header .navbar').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' );
    });

	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 919) {
			$('header .navbar').hide();
			$('.burger').removeClass('burger_active');
		}
	});

	$('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('.burger').is(':visible'))return;
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
	});

// 	slider

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        autoHeight: "true",
        autoplay: true,
        speed: 500,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         return '<span class="' + className + '">' + (index + 1) + '</span>';
        //     },
        // },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    })



	$(window).resize();
	setTimeout(function(){
		ww=0;
		$(window).resize();
	},400)
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIGZhbmN5Qm94IHYzLjIuNVxyXG4vL1xyXG4vLyBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXHJcbi8vIG9yIGZhbmN5Qm94IENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcclxuLy9cclxuLy8gaHR0cDovL2ZhbmN5YXBwcy5jb20vZmFuY3lib3gvXHJcbi8vIENvcHlyaWdodCAyMDE3IGZhbmN5QXBwc1xyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4hZnVuY3Rpb24odCxlLG4sbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYSh0KXt2YXIgZT1uKHQuY3VycmVudFRhcmdldCksbz10LmRhdGE/dC5kYXRhLm9wdGlvbnM6e30sYT1lLmF0dHIoXCJkYXRhLWZhbmN5Ym94XCIpfHxcIlwiLGk9MCxzPVtdO3QuaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0LnByZXZlbnREZWZhdWx0KCksYT8ocz1vLnNlbGVjdG9yP24oby5zZWxlY3Rvcik6dC5kYXRhP3QuZGF0YS5pdGVtczpbXSxzPXMubGVuZ3RoP3MuZmlsdGVyKCdbZGF0YS1mYW5jeWJveD1cIicrYSsnXCJdJyk6bignW2RhdGEtZmFuY3lib3g9XCInK2ErJ1wiXScpLGk9cy5pbmRleChlKSxpPDAmJihpPTApKTpzPVtlXSxuLmZhbmN5Ym94Lm9wZW4ocyxvLGkpKX1pZihuKXtpZihuLmZuLmZhbmN5Ym94KXJldHVybiB2b2lkKFwiY29uc29sZVwiaW4gdCYmY29uc29sZS5sb2coXCJmYW5jeUJveCBhbHJlYWR5IGluaXRpYWxpemVkXCIpKTt2YXIgaT17bG9vcDohMSxtYXJnaW46WzQ0LDBdLGd1dHRlcjo1MCxrZXlib2FyZDohMCxhcnJvd3M6ITAsaW5mb2JhcjohMCx0b29sYmFyOiEwLGJ1dHRvbnM6W1wic2xpZGVTaG93XCIsXCJmdWxsU2NyZWVuXCIsXCJ0aHVtYnNcIixcInNoYXJlXCIsXCJjbG9zZVwiXSxpZGxlVGltZTozLHNtYWxsQnRuOlwiYXV0b1wiLHByb3RlY3Q6ITEsbW9kYWw6ITEsaW1hZ2U6e3ByZWxvYWQ6XCJhdXRvXCJ9LGFqYXg6e3NldHRpbmdzOntkYXRhOntmYW5jeWJveDohMH19fSxpZnJhbWU6e3RwbDonPGlmcmFtZSBpZD1cImZhbmN5Ym94LWZyYW1le3JuZH1cIiBuYW1lPVwiZmFuY3lib3gtZnJhbWV7cm5kfVwiIGNsYXNzPVwiZmFuY3lib3gtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgdnNwYWNlPVwiMFwiIGhzcGFjZT1cIjBcIiB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBzcmM9XCJcIj48L2lmcmFtZT4nLHByZWxvYWQ6ITAsY3NzOnt9LGF0dHI6e3Njcm9sbGluZzpcImF1dG9cIn19LGRlZmF1bHRUeXBlOlwiaW1hZ2VcIixhbmltYXRpb25FZmZlY3Q6XCJ6b29tXCIsYW5pbWF0aW9uRHVyYXRpb246NTAwLHpvb21PcGFjaXR5OlwiYXV0b1wiLHRyYW5zaXRpb25FZmZlY3Q6XCJmYWRlXCIsdHJhbnNpdGlvbkR1cmF0aW9uOjM2NixzbGlkZUNsYXNzOlwiXCIsYmFzZUNsYXNzOlwiXCIsYmFzZVRwbDonPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiB0YWJpbmRleD1cIi0xXCI+PGRpdiBjbGFzcz1cImZhbmN5Ym94LWJnXCI+PC9kaXY+PGRpdiBjbGFzcz1cImZhbmN5Ym94LWlubmVyXCI+PGRpdiBjbGFzcz1cImZhbmN5Ym94LWluZm9iYXJcIj48c3BhbiBkYXRhLWZhbmN5Ym94LWluZGV4Pjwvc3Bhbj4mbmJzcDsvJm5ic3A7PHNwYW4gZGF0YS1mYW5jeWJveC1jb3VudD48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cImZhbmN5Ym94LXRvb2xiYXJcIj57e2J1dHRvbnN9fTwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC1uYXZpZ2F0aW9uXCI+e3thcnJvd3N9fTwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC1zdGFnZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC1jYXB0aW9uLXdyYXBcIj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtY2FwdGlvblwiPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2Picsc3Bpbm5lclRwbDonPGRpdiBjbGFzcz1cImZhbmN5Ym94LWxvYWRpbmdcIj48L2Rpdj4nLGVycm9yVHBsOic8ZGl2IGNsYXNzPVwiZmFuY3lib3gtZXJyb3JcIj48cD57e0VSUk9SfX08cD48L2Rpdj4nLGJ0blRwbDp7ZG93bmxvYWQ6JzxhIGRvd25sb2FkIGRhdGEtZmFuY3lib3gtZG93bmxvYWQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1kb3dubG9hZFwiIHRpdGxlPVwie3tET1dOTE9BRH19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHBhdGggZD1cIk0yMCwyMyBMMjAsOCBMMjAsMjMgTDEzLDE2IEwyMCwyMyBMMjcsMTYgTDIwLDIzIE0yNiwyOCBMMTMsMjggTDI3LDI4IEwxNCwyOFwiIC8+PC9zdmc+PC9hPicsem9vbTonPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXpvb20gY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS16b29tXCIgdGl0bGU9XCJ7e1pPT019fVwiPjxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIGQ9XCJNIDE4LDE3IG0tOCwwIGEgOCw4IDAgMSwwIDE2LDAgYSA4LDggMCAxLDAgLTE2LDAgTTI1LDIzIEwzMSwyOSBMMjUsMjNcIiAvPjwvc3ZnPjwvYnV0dG9uPicsY2xvc2U6JzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBkPVwiTTEwLDEwIEwzMCwzMCBNMzAsMTAgTDEwLDMwXCIgLz48L3N2Zz48L2J1dHRvbj4nLHNtYWxsQnRuOic8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbFwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxhcnJvd0xlZnQ6JzxidXR0b24gZGF0YS1mYW5jeWJveC1wcmV2IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfbGVmdFwiIHRpdGxlPVwie3tQUkVWfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBkPVwiTTEwLDIwIEwzMCwyMCBMMTAsMjAgTDE4LDI4IEwxMCwyMCBMMTgsMTIgTDEwLDIwXCI+PC9wYXRoPjwvc3ZnPjwvYnV0dG9uPicsYXJyb3dSaWdodDonPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LW5leHQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1hcnJvd19yaWdodFwiIHRpdGxlPVwie3tORVhUfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBkPVwiTTMwLDIwIEwxMCwyMCBMMzAsMjAgTDIyLDI4IEwzMCwyMCBMMjIsMTIgTDMwLDIwXCI+PC9wYXRoPjwvc3ZnPjwvYnV0dG9uPid9LHBhcmVudEVsOlwiYm9keVwiLGF1dG9Gb2N1czohMSxiYWNrRm9jdXM6ITAsdHJhcEZvY3VzOiEwLGZ1bGxTY3JlZW46e2F1dG9TdGFydDohMX0sdG91Y2g6e3ZlcnRpY2FsOiEwLG1vbWVudHVtOiEwfSxoYXNoOm51bGwsbWVkaWE6e30sc2xpZGVTaG93OnthdXRvU3RhcnQ6ITEsc3BlZWQ6NGUzfSx0aHVtYnM6e2F1dG9TdGFydDohMSxoaWRlT25DbG9zZTohMCxwYXJlbnRFbDpcIi5mYW5jeWJveC1jb250YWluZXJcIixheGlzOlwieVwifSxvbkluaXQ6bi5ub29wLGJlZm9yZUxvYWQ6bi5ub29wLGFmdGVyTG9hZDpuLm5vb3AsYmVmb3JlU2hvdzpuLm5vb3AsYWZ0ZXJTaG93Om4ubm9vcCxiZWZvcmVDbG9zZTpuLm5vb3AsYWZ0ZXJDbG9zZTpuLm5vb3Asb25BY3RpdmF0ZTpuLm5vb3Asb25EZWFjdGl2YXRlOm4ubm9vcCxjbGlja0NvbnRlbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm5cImltYWdlXCI9PT10LnR5cGUmJlwiem9vbVwifSxjbGlja1NsaWRlOlwiY2xvc2VcIixjbGlja091dHNpZGU6XCJjbG9zZVwiLGRibGNsaWNrQ29udGVudDohMSxkYmxjbGlja1NsaWRlOiExLGRibGNsaWNrT3V0c2lkZTohMSxtb2JpbGU6e21hcmdpbjowLGNsaWNrQ29udGVudDpmdW5jdGlvbih0LGUpe3JldHVyblwiaW1hZ2VcIj09PXQudHlwZSYmXCJ0b2dnbGVDb250cm9sc1wifSxjbGlja1NsaWRlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJpbWFnZVwiPT09dC50eXBlP1widG9nZ2xlQ29udHJvbHNcIjpcImNsb3NlXCJ9LGRibGNsaWNrQ29udGVudDpmdW5jdGlvbih0LGUpe3JldHVyblwiaW1hZ2VcIj09PXQudHlwZSYmXCJ6b29tXCJ9LGRibGNsaWNrU2xpZGU6ZnVuY3Rpb24odCxlKXtyZXR1cm5cImltYWdlXCI9PT10LnR5cGUmJlwiem9vbVwifX0sbGFuZzpcImVuXCIsaTE4bjp7ZW46e0NMT1NFOlwiQ2xvc2VcIixORVhUOlwiTmV4dFwiLFBSRVY6XCJQcmV2aW91c1wiLEVSUk9SOlwiVGhlIHJlcXVlc3RlZCBjb250ZW50IGNhbm5vdCBiZSBsb2FkZWQuIDxici8+IFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsUExBWV9TVEFSVDpcIlN0YXJ0IHNsaWRlc2hvd1wiLFBMQVlfU1RPUDpcIlBhdXNlIHNsaWRlc2hvd1wiLEZVTExfU0NSRUVOOlwiRnVsbCBzY3JlZW5cIixUSFVNQlM6XCJUaHVtYm5haWxzXCIsRE9XTkxPQUQ6XCJEb3dubG9hZFwiLFNIQVJFOlwiU2hhcmVcIixaT09NOlwiWm9vbVwifSxkZTp7Q0xPU0U6XCJTY2hsaWVzc2VuXCIsTkVYVDpcIldlaXRlclwiLFBSRVY6XCJadXLDvGNrXCIsRVJST1I6XCJEaWUgYW5nZWZvcmRlcnRlbiBEYXRlbiBrb25udGVuIG5pY2h0IGdlbGFkZW4gd2VyZGVuLiA8YnIvPiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVzIHNww6R0ZXIgbm9jaG1hbC5cIixQTEFZX1NUQVJUOlwiRGlhc2NoYXUgc3RhcnRlblwiLFBMQVlfU1RPUDpcIkRpYXNjaGF1IGJlZW5kZW5cIixGVUxMX1NDUkVFTjpcIlZvbGxiaWxkXCIsVEhVTUJTOlwiVm9yc2NoYXViaWxkZXJcIixET1dOTE9BRDpcIkhlcnVudGVybGFkZW5cIixTSEFSRTpcIlRlaWxlblwiLFpPT006XCJNYcOfc3RhYlwifX19LHM9bih0KSxyPW4oZSksYz0wLGw9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuaGFzT3duUHJvcGVydHkmJnQgaW5zdGFuY2VvZiBufSx1PWZ1bmN0aW9uKCl7cmV0dXJuIHQucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7cmV0dXJuIHQuc2V0VGltZW91dChlLDFlMy82MCl9fSgpLGQ9ZnVuY3Rpb24oKXt2YXIgdCxuPWUuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpLGE9e3RyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsV2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn07Zm9yKHQgaW4gYSlpZihuLnN0eWxlW3RdIT09bylyZXR1cm4gYVt0XTtyZXR1cm5cInRyYW5zaXRpb25lbmRcIn0oKSxmPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aCYmdFswXS5vZmZzZXRIZWlnaHR9LHA9ZnVuY3Rpb24odCxvLGEpe3ZhciBpPXRoaXM7aS5vcHRzPW4uZXh0ZW5kKCEwLHtpbmRleDphfSxuLmZhbmN5Ym94LmRlZmF1bHRzLG98fHt9KSxuLmZhbmN5Ym94LmlzTW9iaWxlJiYoaS5vcHRzPW4uZXh0ZW5kKCEwLHt9LGkub3B0cyxpLm9wdHMubW9iaWxlKSksbyYmbi5pc0FycmF5KG8uYnV0dG9ucykmJihpLm9wdHMuYnV0dG9ucz1vLmJ1dHRvbnMpLGkuaWQ9aS5vcHRzLmlkfHwrK2MsaS5ncm91cD1bXSxpLmN1cnJJbmRleD1wYXJzZUludChpLm9wdHMuaW5kZXgsMTApfHwwLGkucHJldkluZGV4PW51bGwsaS5wcmV2UG9zPW51bGwsaS5jdXJyUG9zPTAsaS5maXJzdFJ1bj1udWxsLGkuY3JlYXRlR3JvdXAodCksaS5ncm91cC5sZW5ndGgmJihpLiRsYXN0Rm9jdXM9bihlLmFjdGl2ZUVsZW1lbnQpLmJsdXIoKSxpLnNsaWRlcz17fSxpLmluaXQoKSl9O24uZXh0ZW5kKHAucHJvdG90eXBlLHtpbml0OmZ1bmN0aW9uKCl7dmFyIGEsaSxzLGM9dGhpcyxsPWMuZ3JvdXBbYy5jdXJySW5kZXhdLHU9bC5vcHRzLGQ9bi5mYW5jeWJveC5zY3JvbGxiYXJXaWR0aDtjLnNjcm9sbFRvcD1yLnNjcm9sbFRvcCgpLGMuc2Nyb2xsTGVmdD1yLnNjcm9sbExlZnQoKSxuLmZhbmN5Ym94LmdldEluc3RhbmNlKCl8fChuKFwiYm9keVwiKS5hZGRDbGFzcyhcImZhbmN5Ym94LWFjdGl2ZVwiKSwvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIXQuTVNTdHJlYW0/XCJpbWFnZVwiIT09bC50eXBlJiZuKFwiYm9keVwiKS5jc3MoXCJ0b3BcIixuKFwiYm9keVwiKS5zY3JvbGxUb3AoKSotMSkuYWRkQ2xhc3MoXCJmYW5jeWJveC1pb3NmaXhcIik6IW4uZmFuY3lib3guaXNNb2JpbGUmJmUuYm9keS5zY3JvbGxIZWlnaHQ+dC5pbm5lckhlaWdodCYmKGQ9PT1vJiYoYT1uKCc8ZGl2IHN0eWxlPVwid2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGw7XCIgLz4nKS5hcHBlbmRUbyhcImJvZHlcIiksZD1uLmZhbmN5Ym94LnNjcm9sbGJhcldpZHRoPWFbMF0ub2Zmc2V0V2lkdGgtYVswXS5jbGllbnRXaWR0aCxhLnJlbW92ZSgpKSxuKFwiaGVhZFwiKS5hcHBlbmQoJzxzdHlsZSBpZD1cImZhbmN5Ym94LXN0eWxlLW5vc2Nyb2xsXCIgdHlwZT1cInRleHQvY3NzXCI+LmNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhciB7IG1hcmdpbi1yaWdodDogJytkK1wicHg7IH08L3N0eWxlPlwiKSxuKFwiYm9keVwiKS5hZGRDbGFzcyhcImNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiKSkpLHM9XCJcIixuLmVhY2godS5idXR0b25zLGZ1bmN0aW9uKHQsZSl7cys9dS5idG5UcGxbZV18fFwiXCJ9KSxpPW4oYy50cmFuc2xhdGUoYyx1LmJhc2VUcGwucmVwbGFjZShcInt7YnV0dG9uc319XCIscykucmVwbGFjZShcInt7YXJyb3dzfX1cIix1LmJ0blRwbC5hcnJvd0xlZnQrdS5idG5UcGwuYXJyb3dSaWdodCkpKS5hdHRyKFwiaWRcIixcImZhbmN5Ym94LWNvbnRhaW5lci1cIitjLmlkKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKS5hZGRDbGFzcyh1LmJhc2VDbGFzcykuZGF0YShcIkZhbmN5Qm94XCIsYykuYXBwZW5kVG8odS5wYXJlbnRFbCksYy4kcmVmcz17Y29udGFpbmVyOml9LFtcImJnXCIsXCJpbm5lclwiLFwiaW5mb2JhclwiLFwidG9vbGJhclwiLFwic3RhZ2VcIixcImNhcHRpb25cIixcIm5hdmlnYXRpb25cIl0uZm9yRWFjaChmdW5jdGlvbih0KXtjLiRyZWZzW3RdPWkuZmluZChcIi5mYW5jeWJveC1cIit0KX0pLGMudHJpZ2dlcihcIm9uSW5pdFwiKSxjLmFjdGl2YXRlKCksYy5qdW1wVG8oYy5jdXJySW5kZXgpfSx0cmFuc2xhdGU6ZnVuY3Rpb24odCxlKXt2YXIgbj10Lm9wdHMuaTE4blt0Lm9wdHMubGFuZ107cmV0dXJuIGUucmVwbGFjZSgvXFx7XFx7KFxcdyspXFx9XFx9L2csZnVuY3Rpb24odCxlKXt2YXIgYT1uW2VdO3JldHVybiBhPT09bz90OmF9KX0sY3JlYXRlR3JvdXA6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPW4ubWFrZUFycmF5KHQpO24uZWFjaChhLGZ1bmN0aW9uKHQsYSl7dmFyIGkscyxyLGMsbD17fSx1PXt9O24uaXNQbGFpbk9iamVjdChhKT8obD1hLHU9YS5vcHRzfHxhKTpcIm9iamVjdFwiPT09bi50eXBlKGEpJiZuKGEpLmxlbmd0aD8oaT1uKGEpLHU9aS5kYXRhKCksdT1uLmV4dGVuZCh7fSx1LHUub3B0aW9uc3x8e30pLHUuJG9yaWc9aSxsLnNyYz11LnNyY3x8aS5hdHRyKFwiaHJlZlwiKSxsLnR5cGV8fGwuc3JjfHwobC50eXBlPVwiaW5saW5lXCIsbC5zcmM9YSkpOmw9e3R5cGU6XCJodG1sXCIsc3JjOmErXCJcIn0sbC5vcHRzPW4uZXh0ZW5kKCEwLHt9LGUub3B0cyx1KSxuLmlzQXJyYXkodS5idXR0b25zKSYmKGwub3B0cy5idXR0b25zPXUuYnV0dG9ucykscz1sLnR5cGV8fGwub3B0cy50eXBlLHI9bC5zcmN8fFwiXCIsIXMmJnImJihyLm1hdGNoKC8oXmRhdGE6aW1hZ2VcXC9bYS16MC05K1xcLz1dKiwpfChcXC4oanAoZXxnfGVnKXxnaWZ8cG5nfGJtcHx3ZWJwfHN2Z3xpY28pKChcXD98IykuKik/JCkvaSk/cz1cImltYWdlXCI6ci5tYXRjaCgvXFwuKHBkZikoKFxcP3wjKS4qKT8kL2kpP3M9XCJwZGZcIjpcIiNcIj09PXIuY2hhckF0KDApJiYocz1cImlubGluZVwiKSkscz9sLnR5cGU9czplLnRyaWdnZXIoXCJvYmplY3ROZWVkc1R5cGVcIixsKSxsLmluZGV4PWUuZ3JvdXAubGVuZ3RoLGwub3B0cy4kb3JpZyYmIWwub3B0cy4kb3JpZy5sZW5ndGgmJmRlbGV0ZSBsLm9wdHMuJG9yaWcsIWwub3B0cy4kdGh1bWImJmwub3B0cy4kb3JpZyYmKGwub3B0cy4kdGh1bWI9bC5vcHRzLiRvcmlnLmZpbmQoXCJpbWc6Zmlyc3RcIikpLGwub3B0cy4kdGh1bWImJiFsLm9wdHMuJHRodW1iLmxlbmd0aCYmZGVsZXRlIGwub3B0cy4kdGh1bWIsXCJmdW5jdGlvblwiPT09bi50eXBlKGwub3B0cy5jYXB0aW9uKSYmKGwub3B0cy5jYXB0aW9uPWwub3B0cy5jYXB0aW9uLmFwcGx5KGEsW2UsbF0pKSxcImZ1bmN0aW9uXCI9PT1uLnR5cGUoZS5vcHRzLmNhcHRpb24pJiYobC5vcHRzLmNhcHRpb249ZS5vcHRzLmNhcHRpb24uYXBwbHkoYSxbZSxsXSkpLGwub3B0cy5jYXB0aW9uIGluc3RhbmNlb2Ygbnx8KGwub3B0cy5jYXB0aW9uPWwub3B0cy5jYXB0aW9uPT09bz9cIlwiOmwub3B0cy5jYXB0aW9uK1wiXCIpLFwiYWpheFwiPT09cyYmKGM9ci5zcGxpdCgvXFxzKy8sMiksYy5sZW5ndGg+MSYmKGwuc3JjPWMuc2hpZnQoKSxsLm9wdHMuZmlsdGVyPWMuc2hpZnQoKSkpLFwiYXV0b1wiPT1sLm9wdHMuc21hbGxCdG4mJihuLmluQXJyYXkocyxbXCJodG1sXCIsXCJpbmxpbmVcIixcImFqYXhcIl0pPi0xPyhsLm9wdHMudG9vbGJhcj0hMSxsLm9wdHMuc21hbGxCdG49ITApOmwub3B0cy5zbWFsbEJ0bj0hMSksXCJwZGZcIj09PXMmJihsLnR5cGU9XCJpZnJhbWVcIixsLm9wdHMuaWZyYW1lLnByZWxvYWQ9ITEpLGwub3B0cy5tb2RhbCYmKGwub3B0cz1uLmV4dGVuZCghMCxsLm9wdHMse2luZm9iYXI6MCx0b29sYmFyOjAsc21hbGxCdG46MCxrZXlib2FyZDowLHNsaWRlU2hvdzowLGZ1bGxTY3JlZW46MCx0aHVtYnM6MCx0b3VjaDowLGNsaWNrQ29udGVudDohMSxjbGlja1NsaWRlOiExLGNsaWNrT3V0c2lkZTohMSxkYmxjbGlja0NvbnRlbnQ6ITEsZGJsY2xpY2tTbGlkZTohMSxkYmxjbGlja091dHNpZGU6ITF9KSksZS5ncm91cC5wdXNoKGwpfSl9LGFkZEV2ZW50czpmdW5jdGlvbigpe3ZhciBvPXRoaXM7by5yZW1vdmVFdmVudHMoKSxvLiRyZWZzLmNvbnRhaW5lci5vbihcImNsaWNrLmZiLWNsb3NlXCIsXCJbZGF0YS1mYW5jeWJveC1jbG9zZV1cIixmdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSxvLmNsb3NlKHQpfSkub24oXCJjbGljay5mYi1wcmV2IHRvdWNoZW5kLmZiLXByZXZcIixcIltkYXRhLWZhbmN5Ym94LXByZXZdXCIsZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksby5wcmV2aW91cygpfSkub24oXCJjbGljay5mYi1uZXh0IHRvdWNoZW5kLmZiLW5leHRcIixcIltkYXRhLWZhbmN5Ym94LW5leHRdXCIsZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksby5uZXh0KCl9KS5vbihcImNsaWNrLmZiXCIsXCJbZGF0YS1mYW5jeWJveC16b29tXVwiLGZ1bmN0aW9uKHQpe29bby5pc1NjYWxlZERvd24oKT9cInNjYWxlVG9BY3R1YWxcIjpcInNjYWxlVG9GaXRcIl0oKX0pLHMub24oXCJvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmJcIixmdW5jdGlvbih0KXt0JiZ0Lm9yaWdpbmFsRXZlbnQmJlwicmVzaXplXCI9PT10Lm9yaWdpbmFsRXZlbnQudHlwZT91KGZ1bmN0aW9uKCl7by51cGRhdGUoKX0pOihvLiRyZWZzLnN0YWdlLmhpZGUoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by4kcmVmcy5zdGFnZS5zaG93KCksby51cGRhdGUoKX0sNjAwKSl9KSxyLm9uKFwiZm9jdXNpbi5mYlwiLGZ1bmN0aW9uKHQpe3ZhciBhPW4uZmFuY3lib3g/bi5mYW5jeWJveC5nZXRJbnN0YW5jZSgpOm51bGw7YS5pc0Nsb3Npbmd8fCFhLmN1cnJlbnR8fCFhLmN1cnJlbnQub3B0cy50cmFwRm9jdXN8fG4odC50YXJnZXQpLmhhc0NsYXNzKFwiZmFuY3lib3gtY29udGFpbmVyXCIpfHxuKHQudGFyZ2V0KS5pcyhlKXx8YSYmXCJmaXhlZFwiIT09bih0LnRhcmdldCkuY3NzKFwicG9zaXRpb25cIikmJiFhLiRyZWZzLmNvbnRhaW5lci5oYXModC50YXJnZXQpLmxlbmd0aCYmKHQuc3RvcFByb3BhZ2F0aW9uKCksYS5mb2N1cygpLHMuc2Nyb2xsVG9wKG8uc2Nyb2xsVG9wKS5zY3JvbGxMZWZ0KG8uc2Nyb2xsTGVmdCkpfSksci5vbihcImtleWRvd24uZmJcIixmdW5jdGlvbih0KXt2YXIgZT1vLmN1cnJlbnQsYT10LmtleUNvZGV8fHQud2hpY2g7aWYoZSYmZS5vcHRzLmtleWJvYXJkJiYhbih0LnRhcmdldCkuaXMoXCJpbnB1dFwiKSYmIW4odC50YXJnZXQpLmlzKFwidGV4dGFyZWFcIikpcmV0dXJuIDg9PT1hfHwyNz09PWE/KHQucHJldmVudERlZmF1bHQoKSx2b2lkIG8uY2xvc2UodCkpOjM3PT09YXx8Mzg9PT1hPyh0LnByZXZlbnREZWZhdWx0KCksdm9pZCBvLnByZXZpb3VzKCkpOjM5PT09YXx8NDA9PT1hPyh0LnByZXZlbnREZWZhdWx0KCksdm9pZCBvLm5leHQoKSk6dm9pZCBvLnRyaWdnZXIoXCJhZnRlcktleWRvd25cIix0LGEpfSksby5ncm91cFtvLmN1cnJJbmRleF0ub3B0cy5pZGxlVGltZSYmKG8uaWRsZVNlY29uZHNDb3VudGVyPTAsci5vbihcIm1vdXNlbW92ZS5mYi1pZGxlIG1vdXNlbGVhdmUuZmItaWRsZSBtb3VzZWRvd24uZmItaWRsZSB0b3VjaHN0YXJ0LmZiLWlkbGUgdG91Y2htb3ZlLmZiLWlkbGUgc2Nyb2xsLmZiLWlkbGUga2V5ZG93bi5mYi1pZGxlXCIsZnVuY3Rpb24odCl7by5pZGxlU2Vjb25kc0NvdW50ZXI9MCxvLmlzSWRsZSYmby5zaG93Q29udHJvbHMoKSxvLmlzSWRsZT0hMX0pLG8uaWRsZUludGVydmFsPXQuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtvLmlkbGVTZWNvbmRzQ291bnRlcisrLG8uaWRsZVNlY29uZHNDb3VudGVyPj1vLmdyb3VwW28uY3VyckluZGV4XS5vcHRzLmlkbGVUaW1lJiYoby5pc0lkbGU9ITAsby5pZGxlU2Vjb25kc0NvdW50ZXI9MCxvLmhpZGVDb250cm9scygpKX0sMWUzKSl9LHJlbW92ZUV2ZW50czpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cy5vZmYoXCJvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmJcIiksci5vZmYoXCJmb2N1c2luLmZiIGtleWRvd24uZmIgLmZiLWlkbGVcIiksdGhpcy4kcmVmcy5jb250YWluZXIub2ZmKFwiLmZiLWNsb3NlIC5mYi1wcmV2IC5mYi1uZXh0XCIpLGUuaWRsZUludGVydmFsJiYodC5jbGVhckludGVydmFsKGUuaWRsZUludGVydmFsKSxlLmlkbGVJbnRlcnZhbD1udWxsKX0scHJldmlvdXM6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuanVtcFRvKHRoaXMuY3VyclBvcy0xLHQpfSxuZXh0OmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmp1bXBUbyh0aGlzLmN1cnJQb3MrMSx0KX0sanVtcFRvOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaSxzLHIsYyxsLHUsZCxwPXRoaXMsaD1wLmdyb3VwLmxlbmd0aDtpZighKHAuaXNTbGlkaW5nfHxwLmlzQ2xvc2luZ3x8cC5pc0FuaW1hdGluZyYmcC5maXJzdFJ1bikpe2lmKHQ9cGFyc2VJbnQodCwxMCkscz1wLmN1cnJlbnQ/cC5jdXJyZW50Lm9wdHMubG9vcDpwLm9wdHMubG9vcCwhcyYmKHQ8MHx8dD49aCkpcmV0dXJuITE7aWYoaT1wLmZpcnN0UnVuPW51bGw9PT1wLmZpcnN0UnVuLCEoaDwyJiYhaSYmcC5pc1NsaWRpbmcpKXtpZihjPXAuY3VycmVudCxwLnByZXZJbmRleD1wLmN1cnJJbmRleCxwLnByZXZQb3M9cC5jdXJyUG9zLHI9cC5jcmVhdGVTbGlkZSh0KSxoPjEmJigoc3x8ci5pbmRleD4wKSYmcC5jcmVhdGVTbGlkZSh0LTEpLChzfHxyLmluZGV4PGgtMSkmJnAuY3JlYXRlU2xpZGUodCsxKSkscC5jdXJyZW50PXIscC5jdXJySW5kZXg9ci5pbmRleCxwLmN1cnJQb3M9ci5wb3MscC50cmlnZ2VyKFwiYmVmb3JlU2hvd1wiLGkpLHAudXBkYXRlQ29udHJvbHMoKSx1PW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKHIuJHNsaWRlKSxyLmlzTW92ZWQ9KDAhPT11LmxlZnR8fDAhPT11LnRvcCkmJiFyLiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpLHIuZm9yY2VkRHVyYXRpb249byxuLmlzTnVtZXJpYyhlKT9yLmZvcmNlZER1cmF0aW9uPWU6ZT1yLm9wdHNbaT9cImFuaW1hdGlvbkR1cmF0aW9uXCI6XCJ0cmFuc2l0aW9uRHVyYXRpb25cIl0sZT1wYXJzZUludChlLDEwKSxpKXJldHVybiByLm9wdHMuYW5pbWF0aW9uRWZmZWN0JiZlJiZwLiRyZWZzLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsZStcIm1zXCIpLHAuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLGYocC4kcmVmcy5jb250YWluZXIpLHAuJHJlZnMuY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtb3BlblwiKSxyLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpLHAubG9hZFNsaWRlKHIpLHZvaWQgcC5wcmVsb2FkKCk7bi5lYWNoKHAuc2xpZGVzLGZ1bmN0aW9uKHQsZSl7bi5mYW5jeWJveC5zdG9wKGUuJHNsaWRlKX0pLHIuJHNsaWRlLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIiksci5pc01vdmVkPyhsPU1hdGgucm91bmQoci4kc2xpZGUud2lkdGgoKSksbi5lYWNoKHAuc2xpZGVzLGZ1bmN0aW9uKHQsbyl7dmFyIGE9by5wb3Mtci5wb3M7bi5mYW5jeWJveC5hbmltYXRlKG8uJHNsaWRlLHt0b3A6MCxsZWZ0OmEqbCthKm8ub3B0cy5ndXR0ZXJ9LGUsZnVuY3Rpb24oKXtvLiRzbGlkZS5yZW1vdmVBdHRyKFwic3R5bGVcIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tbmV4dCBmYW5jeWJveC1zbGlkZS0tcHJldmlvdXNcIiksby5wb3M9PT1wLmN1cnJQb3MmJihyLmlzTW92ZWQ9ITEscC5jb21wbGV0ZSgpKX0pfSkpOnAuJHJlZnMuc3RhZ2UuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksci5pc0xvYWRlZD9wLnJldmVhbENvbnRlbnQocik6cC5sb2FkU2xpZGUocikscC5wcmVsb2FkKCksYy5wb3MhPT1yLnBvcyYmKGQ9XCJmYW5jeWJveC1zbGlkZS0tXCIrKGMucG9zPnIucG9zP1wibmV4dFwiOlwicHJldmlvdXNcIiksYy4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGUgZmFuY3lib3gtc2xpZGUtLWN1cnJlbnQgZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpLGMuaXNDb21wbGV0ZT0hMSxlJiYoci5pc01vdmVkfHxyLm9wdHMudHJhbnNpdGlvbkVmZmVjdCkmJihyLmlzTW92ZWQ/Yy4kc2xpZGUuYWRkQ2xhc3MoZCk6KGQ9XCJmYW5jeWJveC1hbmltYXRlZCBcIitkK1wiIGZhbmN5Ym94LWZ4LVwiK3Iub3B0cy50cmFuc2l0aW9uRWZmZWN0LG4uZmFuY3lib3guYW5pbWF0ZShjLiRzbGlkZSxkLGUsZnVuY3Rpb24oKXtjLiRzbGlkZS5yZW1vdmVDbGFzcyhkKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9KSkpKX19fSxjcmVhdGVTbGlkZTpmdW5jdGlvbih0KXt2YXIgZSxvLGE9dGhpcztyZXR1cm4gbz10JWEuZ3JvdXAubGVuZ3RoLG89bzwwP2EuZ3JvdXAubGVuZ3RoK286bywhYS5zbGlkZXNbdF0mJmEuZ3JvdXBbb10mJihlPW4oJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zbGlkZVwiPjwvZGl2PicpLmFwcGVuZFRvKGEuJHJlZnMuc3RhZ2UpLGEuc2xpZGVzW3RdPW4uZXh0ZW5kKCEwLHt9LGEuZ3JvdXBbb10se3Bvczp0LCRzbGlkZTplLGlzTG9hZGVkOiExfSksYS51cGRhdGVTbGlkZShhLnNsaWRlc1t0XSkpLGEuc2xpZGVzW3RdfSxzY2FsZVRvQWN0dWFsOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaSxzLHIsYyxsLHU9dGhpcyxkPXUuY3VycmVudCxmPWQuJGNvbnRlbnQscD1wYXJzZUludChkLiRzbGlkZS53aWR0aCgpLDEwKSxoPXBhcnNlSW50KGQuJHNsaWRlLmhlaWdodCgpLDEwKSxnPWQud2lkdGgsYj1kLmhlaWdodDtcImltYWdlXCIhPWQudHlwZXx8ZC5oYXNFcnJvcnx8IWZ8fHUuaXNBbmltYXRpbmd8fChuLmZhbmN5Ym94LnN0b3AoZiksdS5pc0FuaW1hdGluZz0hMCx0PXQ9PT1vPy41KnA6dCxlPWU9PT1vPy41Kmg6ZSxpPW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGYpLGM9Zy9pLndpZHRoLGw9Yi9pLmhlaWdodCxzPS41KnAtLjUqZyxyPS41KmgtLjUqYixnPnAmJihzPWkubGVmdCpjLSh0KmMtdCkscz4wJiYocz0wKSxzPHAtZyYmKHM9cC1nKSksYj5oJiYocj1pLnRvcCpsLShlKmwtZSkscj4wJiYocj0wKSxyPGgtYiYmKHI9aC1iKSksdS51cGRhdGVDdXJzb3IoZyxiKSxuLmZhbmN5Ym94LmFuaW1hdGUoZix7dG9wOnIsbGVmdDpzLHNjYWxlWDpjLHNjYWxlWTpsfSxhfHwzMzAsZnVuY3Rpb24oKXt1LmlzQW5pbWF0aW5nPSExfSksdS5TbGlkZVNob3cmJnUuU2xpZGVTaG93LmlzQWN0aXZlJiZ1LlNsaWRlU2hvdy5zdG9wKCkpfSxzY2FsZVRvRml0OmZ1bmN0aW9uKHQpe3ZhciBlLG89dGhpcyxhPW8uY3VycmVudCxpPWEuJGNvbnRlbnQ7XCJpbWFnZVwiIT1hLnR5cGV8fGEuaGFzRXJyb3J8fCFpfHxvLmlzQW5pbWF0aW5nfHwobi5mYW5jeWJveC5zdG9wKGkpLG8uaXNBbmltYXRpbmc9ITAsZT1vLmdldEZpdFBvcyhhKSxvLnVwZGF0ZUN1cnNvcihlLndpZHRoLGUuaGVpZ2h0KSxuLmZhbmN5Ym94LmFuaW1hdGUoaSx7dG9wOmUudG9wLGxlZnQ6ZS5sZWZ0LHNjYWxlWDplLndpZHRoL2kud2lkdGgoKSxzY2FsZVk6ZS5oZWlnaHQvaS5oZWlnaHQoKX0sdHx8MzMwLGZ1bmN0aW9uKCl7by5pc0FuaW1hdGluZz0hMX0pKX0sZ2V0Rml0UG9zOmZ1bmN0aW9uKHQpe3ZhciBlLG8sYSxpLHMscj10aGlzLGM9dC4kY29udGVudCxsPXQud2lkdGgsdT10LmhlaWdodCxkPXQub3B0cy5tYXJnaW47cmV0dXJuISghY3x8IWMubGVuZ3RofHwhbCYmIXUpJiYoXCJudW1iZXJcIj09PW4udHlwZShkKSYmKGQ9W2QsZF0pLDI9PWQubGVuZ3RoJiYoZD1bZFswXSxkWzFdLGRbMF0sZFsxXV0pLGU9cGFyc2VJbnQoci4kcmVmcy5zdGFnZS53aWR0aCgpLDEwKS0oZFsxXStkWzNdKSxvPXBhcnNlSW50KHIuJHJlZnMuc3RhZ2UuaGVpZ2h0KCksMTApLShkWzBdK2RbMl0pLGE9TWF0aC5taW4oMSxlL2wsby91KSxpPU1hdGguZmxvb3IoYSpsKSxzPU1hdGguZmxvb3IoYSp1KSx7dG9wOk1hdGguZmxvb3IoLjUqKG8tcykpK2RbMF0sbGVmdDpNYXRoLmZsb29yKC41KihlLWkpKStkWzNdLHdpZHRoOmksaGVpZ2h0OnN9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztuLmVhY2godC5zbGlkZXMsZnVuY3Rpb24oZSxuKXt0LnVwZGF0ZVNsaWRlKG4pfSl9LHVwZGF0ZVNsaWRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbz10LiRjb250ZW50O28mJih0LndpZHRofHx0LmhlaWdodCkmJihlLmlzQW5pbWF0aW5nPSExLG4uZmFuY3lib3guc3RvcChvKSxuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShvLGUuZ2V0Rml0UG9zKHQpKSx0LnBvcz09PWUuY3VyclBvcyYmZS51cGRhdGVDdXJzb3IoKSksdC4kc2xpZGUudHJpZ2dlcihcInJlZnJlc2hcIiksZS50cmlnZ2VyKFwib25VcGRhdGVcIix0KX0sdXBkYXRlQ3Vyc29yOmZ1bmN0aW9uKHQsZSl7dmFyIG4sYT10aGlzLGk9YS4kcmVmcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy16b29tYWJsZSBmYW5jeWJveC1jYW4tem9vbUluIGZhbmN5Ym94LWNhbi1kcmFnIGZhbmN5Ym94LWNhbi16b29tT3V0XCIpO2EuY3VycmVudCYmIWEuaXNDbG9zaW5nJiYoYS5pc1pvb21hYmxlKCk/KGkuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy16b29tYWJsZVwiKSxuPXQhPT1vJiZlIT09bz90PGEuY3VycmVudC53aWR0aCYmZTxhLmN1cnJlbnQuaGVpZ2h0OmEuaXNTY2FsZWREb3duKCksbj9pLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLXpvb21JblwiKTphLmN1cnJlbnQub3B0cy50b3VjaD9pLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLWRyYWdcIik6aS5hZGRDbGFzcyhcImZhbmN5Ym94LWNhbi16b29tT3V0XCIpKTphLmN1cnJlbnQub3B0cy50b3VjaCYmaS5hZGRDbGFzcyhcImZhbmN5Ym94LWNhbi1kcmFnXCIpKX0saXNab29tYWJsZTpmdW5jdGlvbigpe3ZhciB0LGU9dGhpcyxvPWUuY3VycmVudDtpZihvJiYhZS5pc0Nsb3NpbmcpcmV0dXJuISEoXCJpbWFnZVwiPT09by50eXBlJiZvLmlzTG9hZGVkJiYhby5oYXNFcnJvciYmKFwiem9vbVwiPT09by5vcHRzLmNsaWNrQ29udGVudHx8bi5pc0Z1bmN0aW9uKG8ub3B0cy5jbGlja0NvbnRlbnQpJiZcInpvb21cIj09PW8ub3B0cy5jbGlja0NvbnRlbnQobykpJiYodD1lLmdldEZpdFBvcyhvKSxvLndpZHRoPnQud2lkdGh8fG8uaGVpZ2h0PnQuaGVpZ2h0KSl9LGlzU2NhbGVkRG93bjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmN1cnJlbnQsbz1lLiRjb250ZW50LGE9ITE7cmV0dXJuIG8mJihhPW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKG8pLGE9YS53aWR0aDxlLndpZHRofHxhLmhlaWdodDxlLmhlaWdodCksYX0sY2FuUGFuOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuY3VycmVudCxuPWUuJGNvbnRlbnQsbz0hMTtyZXR1cm4gbiYmKG89dC5nZXRGaXRQb3MoZSksbz1NYXRoLmFicyhuLndpZHRoKCktby53aWR0aCk+MXx8TWF0aC5hYnMobi5oZWlnaHQoKS1vLmhlaWdodCk+MSksb30sbG9hZFNsaWRlOmZ1bmN0aW9uKHQpe3ZhciBlLG8sYSxpPXRoaXM7aWYoIXQuaXNMb2FkaW5nJiYhdC5pc0xvYWRlZCl7c3dpdGNoKHQuaXNMb2FkaW5nPSEwLGkudHJpZ2dlcihcImJlZm9yZUxvYWRcIix0KSxlPXQudHlwZSxvPXQuJHNsaWRlLG8ub2ZmKFwicmVmcmVzaFwiKS50cmlnZ2VyKFwib25SZXNldFwiKS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1cIisoZXx8XCJ1bmtub3duXCIpKS5hZGRDbGFzcyh0Lm9wdHMuc2xpZGVDbGFzcyksZSl7Y2FzZVwiaW1hZ2VcIjppLnNldEltYWdlKHQpO2JyZWFrO2Nhc2VcImlmcmFtZVwiOmkuc2V0SWZyYW1lKHQpO2JyZWFrO2Nhc2VcImh0bWxcIjppLnNldENvbnRlbnQodCx0LnNyY3x8dC5jb250ZW50KTticmVhaztjYXNlXCJpbmxpbmVcIjpuKHQuc3JjKS5sZW5ndGg/aS5zZXRDb250ZW50KHQsbih0LnNyYykpOmkuc2V0RXJyb3IodCk7YnJlYWs7Y2FzZVwiYWpheFwiOmkuc2hvd0xvYWRpbmcodCksYT1uLmFqYXgobi5leHRlbmQoe30sdC5vcHRzLmFqYXguc2V0dGluZ3Mse3VybDp0LnNyYyxzdWNjZXNzOmZ1bmN0aW9uKGUsbil7XCJzdWNjZXNzXCI9PT1uJiZpLnNldENvbnRlbnQodCxlKX0sZXJyb3I6ZnVuY3Rpb24oZSxuKXtlJiZcImFib3J0XCIhPT1uJiZpLnNldEVycm9yKHQpfX0pKSxvLm9uZShcIm9uUmVzZXRcIixmdW5jdGlvbigpe2EuYWJvcnQoKX0pO2JyZWFrO2RlZmF1bHQ6aS5zZXRFcnJvcih0KX1yZXR1cm4hMH19LHNldEltYWdlOmZ1bmN0aW9uKGUpe3ZhciBvLGEsaSxzLHI9dGhpcyxjPWUub3B0cy5zcmNzZXR8fGUub3B0cy5pbWFnZS5zcmNzZXQ7aWYoYyl7aT10LmRldmljZVBpeGVsUmF0aW98fDEscz10LmlubmVyV2lkdGgqaSxhPWMuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gdC50cmltKCkuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7dmFyIG89cGFyc2VJbnQodC5zdWJzdHJpbmcoMCx0Lmxlbmd0aC0xKSwxMCk7cmV0dXJuIDA9PT1uP2UudXJsPXQ6dm9pZChvJiYoZS52YWx1ZT1vLGUucG9zdGZpeD10W3QubGVuZ3RoLTFdKSl9KSxlfSksYS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQudmFsdWUtZS52YWx1ZX0pO2Zvcih2YXIgbD0wO2w8YS5sZW5ndGg7bCsrKXt2YXIgdT1hW2xdO2lmKFwid1wiPT09dS5wb3N0Zml4JiZ1LnZhbHVlPj1zfHxcInhcIj09PXUucG9zdGZpeCYmdS52YWx1ZT49aSl7bz11O2JyZWFrfX0hbyYmYS5sZW5ndGgmJihvPWFbYS5sZW5ndGgtMV0pLG8mJihlLnNyYz1vLnVybCxlLndpZHRoJiZlLmhlaWdodCYmXCJ3XCI9PW8ucG9zdGZpeCYmKGUuaGVpZ2h0PWUud2lkdGgvZS5oZWlnaHQqby52YWx1ZSxlLndpZHRoPW8udmFsdWUpKX1lLiRjb250ZW50PW4oJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbWFnZS13cmFwXCI+PC9kaXY+JykuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIikuYXBwZW5kVG8oZS4kc2xpZGUpLGUub3B0cy5wcmVsb2FkIT09ITEmJmUub3B0cy53aWR0aCYmZS5vcHRzLmhlaWdodCYmKGUub3B0cy50aHVtYnx8ZS5vcHRzLiR0aHVtYik/KGUud2lkdGg9ZS5vcHRzLndpZHRoLGUuaGVpZ2h0PWUub3B0cy5oZWlnaHQsZS4kZ2hvc3Q9bihcIjxpbWcgLz5cIikub25lKFwiZXJyb3JcIixmdW5jdGlvbigpe24odGhpcykucmVtb3ZlKCksZS4kZ2hvc3Q9bnVsbCxyLnNldEJpZ0ltYWdlKGUpfSkub25lKFwibG9hZFwiLGZ1bmN0aW9uKCl7ci5hZnRlckxvYWQoZSksci5zZXRCaWdJbWFnZShlKX0pLmFkZENsYXNzKFwiZmFuY3lib3gtaW1hZ2VcIikuYXBwZW5kVG8oZS4kY29udGVudCkuYXR0cihcInNyY1wiLGUub3B0cy50aHVtYnx8ZS5vcHRzLiR0aHVtYi5hdHRyKFwic3JjXCIpKSk6ci5zZXRCaWdJbWFnZShlKX0sc2V0QmlnSW1hZ2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxvPW4oXCI8aW1nIC8+XCIpO3QuJGltYWdlPW8ub25lKFwiZXJyb3JcIixmdW5jdGlvbigpe2Uuc2V0RXJyb3IodCl9KS5vbmUoXCJsb2FkXCIsZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodC50aW1vdXRzKSx0LnRpbW91dHM9bnVsbCxlLmlzQ2xvc2luZ3x8KHQud2lkdGg9dGhpcy5uYXR1cmFsV2lkdGgsdC5oZWlnaHQ9dGhpcy5uYXR1cmFsSGVpZ2h0LHQub3B0cy5pbWFnZS5zcmNzZXQmJm8uYXR0cihcInNpemVzXCIsXCIxMDB2d1wiKS5hdHRyKFwic3Jjc2V0XCIsdC5vcHRzLmltYWdlLnNyY3NldCksZS5oaWRlTG9hZGluZyh0KSx0LiRnaG9zdD90LnRpbW91dHM9c2V0VGltZW91dChmdW5jdGlvbigpe3QudGltb3V0cz1udWxsLHQuJGdob3N0LmhpZGUoKX0sTWF0aC5taW4oMzAwLE1hdGgubWF4KDFlMyx0LmhlaWdodC8xNjAwKSkpOmUuYWZ0ZXJMb2FkKHQpKX0pLmFkZENsYXNzKFwiZmFuY3lib3gtaW1hZ2VcIikuYXR0cihcInNyY1wiLHQuc3JjKS5hcHBlbmRUbyh0LiRjb250ZW50KSwob1swXS5jb21wbGV0ZXx8XCJjb21wbGV0ZVwiPT1vWzBdLnJlYWR5U3RhdGUpJiZvWzBdLm5hdHVyYWxXaWR0aCYmb1swXS5uYXR1cmFsSGVpZ2h0P28udHJpZ2dlcihcImxvYWRcIik6b1swXS5lcnJvcj9vLnRyaWdnZXIoXCJlcnJvclwiKTp0LnRpbW91dHM9c2V0VGltZW91dChmdW5jdGlvbigpe29bMF0uY29tcGxldGV8fHQuaGFzRXJyb3J8fGUuc2hvd0xvYWRpbmcodCl9LDEwMCl9LHNldElmcmFtZTpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT10Lm9wdHMuaWZyYW1lLHM9dC4kc2xpZGU7dC4kY29udGVudD1uKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtY29udGVudCcrKGkucHJlbG9hZD9cIiBmYW5jeWJveC1pcy1oaWRkZW5cIjpcIlwiKSsnXCI+PC9kaXY+JykuY3NzKGkuY3NzKS5hcHBlbmRUbyhzKSxlPW4oaS50cGwucmVwbGFjZSgvXFx7cm5kXFx9L2csKG5ldyBEYXRlKS5nZXRUaW1lKCkpKS5hdHRyKGkuYXR0cikuYXBwZW5kVG8odC4kY29udGVudCksaS5wcmVsb2FkPyhhLnNob3dMb2FkaW5nKHQpLGUub24oXCJsb2FkLmZiIGVycm9yLmZiXCIsZnVuY3Rpb24oZSl7dGhpcy5pc1JlYWR5PTEsdC4kc2xpZGUudHJpZ2dlcihcInJlZnJlc2hcIiksYS5hZnRlckxvYWQodCl9KSxzLm9uKFwicmVmcmVzaC5mYlwiLGZ1bmN0aW9uKCl7dmFyIG4sYSxzLHI9dC4kY29udGVudCxjPWkuY3NzLndpZHRoLGw9aS5jc3MuaGVpZ2h0O2lmKDE9PT1lWzBdLmlzUmVhZHkpe3RyeXthPWUuY29udGVudHMoKSxzPWEuZmluZChcImJvZHlcIil9Y2F0Y2godCl7fXMmJnMubGVuZ3RoJiYoYz09PW8mJihuPWVbMF0uY29udGVudFdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsYz1NYXRoLmNlaWwocy5vdXRlcldpZHRoKCEwKSsoci53aWR0aCgpLW4pKSxjKz1yLm91dGVyV2lkdGgoKS1yLmlubmVyV2lkdGgoKSksbD09PW8mJihsPU1hdGguY2VpbChzLm91dGVySGVpZ2h0KCEwKSksbCs9ci5vdXRlckhlaWdodCgpLXIuaW5uZXJIZWlnaHQoKSksYyYmci53aWR0aChjKSxsJiZyLmhlaWdodChsKSksci5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKX19KSk6dGhpcy5hZnRlckxvYWQodCksZS5hdHRyKFwic3JjXCIsdC5zcmMpLHQub3B0cy5zbWFsbEJ0bj09PSEwJiZ0LiRjb250ZW50LnByZXBlbmQoYS50cmFuc2xhdGUodCx0Lm9wdHMuYnRuVHBsLnNtYWxsQnRuKSkscy5vbmUoXCJvblJlc2V0XCIsZnVuY3Rpb24oKXt0cnl7bih0aGlzKS5maW5kKFwiaWZyYW1lXCIpLmhpZGUoKS5hdHRyKFwic3JjXCIsXCIvL2Fib3V0OmJsYW5rXCIpfWNhdGNoKHQpe31uKHRoaXMpLmVtcHR5KCksdC5pc0xvYWRlZD0hMX0pfSxzZXRDb250ZW50OmZ1bmN0aW9uKHQsZSl7dmFyIG89dGhpcztvLmlzQ2xvc2luZ3x8KG8uaGlkZUxvYWRpbmcodCksdC4kc2xpZGUuZW1wdHkoKSxsKGUpJiZlLnBhcmVudCgpLmxlbmd0aD8oZS5wYXJlbnQoXCIuZmFuY3lib3gtc2xpZGUtLWlubGluZVwiKS50cmlnZ2VyKFwib25SZXNldFwiKSx0LiRwbGFjZWhvbGRlcj1uKFwiPGRpdj48L2Rpdj5cIikuaGlkZSgpLmluc2VydEFmdGVyKGUpLGUuY3NzKFwiZGlzcGxheVwiLFwiaW5saW5lLWJsb2NrXCIpKTp0Lmhhc0Vycm9yfHwoXCJzdHJpbmdcIj09PW4udHlwZShlKSYmKGU9bihcIjxkaXY+XCIpLmFwcGVuZChuLnRyaW0oZSkpLmNvbnRlbnRzKCksMz09PWVbMF0ubm9kZVR5cGUmJihlPW4oXCI8ZGl2PlwiKS5odG1sKGUpKSksdC5vcHRzLmZpbHRlciYmKGU9bihcIjxkaXY+XCIpLmh0bWwoZSkuZmluZCh0Lm9wdHMuZmlsdGVyKSkpLHQuJHNsaWRlLm9uZShcIm9uUmVzZXRcIixmdW5jdGlvbigpe3QuJHBsYWNlaG9sZGVyJiYodC4kcGxhY2Vob2xkZXIuYWZ0ZXIoZS5oaWRlKCkpLnJlbW92ZSgpLHQuJHBsYWNlaG9sZGVyPW51bGwpLHQuJHNtYWxsQnRuJiYodC4kc21hbGxCdG4ucmVtb3ZlKCksdC4kc21hbGxCdG49bnVsbCksdC5oYXNFcnJvcnx8KG4odGhpcykuZW1wdHkoKSx0LmlzTG9hZGVkPSExKX0pLHQuJGNvbnRlbnQ9bihlKS5hcHBlbmRUbyh0LiRzbGlkZSksdGhpcy5hZnRlckxvYWQodCkpfSxzZXRFcnJvcjpmdW5jdGlvbih0KXt0Lmhhc0Vycm9yPSEwLHQuJHNsaWRlLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiK3QudHlwZSksdGhpcy5zZXRDb250ZW50KHQsdGhpcy50cmFuc2xhdGUodCx0Lm9wdHMuZXJyb3JUcGwpKX0sc2hvd0xvYWRpbmc6ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0PXR8fGUuY3VycmVudCx0JiYhdC4kc3Bpbm5lciYmKHQuJHNwaW5uZXI9bihlLm9wdHMuc3Bpbm5lclRwbCkuYXBwZW5kVG8odC4kc2xpZGUpKX0saGlkZUxvYWRpbmc6ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0PXR8fGUuY3VycmVudCx0JiZ0LiRzcGlubmVyJiYodC4kc3Bpbm5lci5yZW1vdmUoKSxkZWxldGUgdC4kc3Bpbm5lcil9LGFmdGVyTG9hZDpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2UuaXNDbG9zaW5nfHwodC5pc0xvYWRpbmc9ITEsdC5pc0xvYWRlZD0hMCxlLnRyaWdnZXIoXCJhZnRlckxvYWRcIix0KSxlLmhpZGVMb2FkaW5nKHQpLHQub3B0cy5zbWFsbEJ0biYmIXQuJHNtYWxsQnRuJiYodC4kc21hbGxCdG49bihlLnRyYW5zbGF0ZSh0LHQub3B0cy5idG5UcGwuc21hbGxCdG4pKS5hcHBlbmRUbyh0LiRjb250ZW50LmZpbHRlcihcImRpdixmb3JtXCIpLmZpcnN0KCkpKSx0Lm9wdHMucHJvdGVjdCYmdC4kY29udGVudCYmIXQuaGFzRXJyb3ImJih0LiRjb250ZW50Lm9uKFwiY29udGV4dG1lbnUuZmJcIixmdW5jdGlvbih0KXtyZXR1cm4gMj09dC5idXR0b24mJnQucHJldmVudERlZmF1bHQoKSwhMH0pLFwiaW1hZ2VcIj09PXQudHlwZSYmbignPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNwYWNlYmFsbFwiPjwvZGl2PicpLmFwcGVuZFRvKHQuJGNvbnRlbnQpKSxlLnJldmVhbENvbnRlbnQodCkpfSxyZXZlYWxDb250ZW50OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaSxzLHIsYz10aGlzLGw9dC4kc2xpZGUsdT0hMTtyZXR1cm4gZT10Lm9wdHNbYy5maXJzdFJ1bj9cImFuaW1hdGlvbkVmZmVjdFwiOlwidHJhbnNpdGlvbkVmZmVjdFwiXSxpPXQub3B0c1tjLmZpcnN0UnVuP1wiYW5pbWF0aW9uRHVyYXRpb25cIjpcInRyYW5zaXRpb25EdXJhdGlvblwiXSxpPXBhcnNlSW50KHQuZm9yY2VkRHVyYXRpb249PT1vP2k6dC5mb3JjZWREdXJhdGlvbiwxMCksIXQuaXNNb3ZlZCYmdC5wb3M9PT1jLmN1cnJQb3MmJml8fChlPSExKSxcInpvb21cIiE9PWV8fHQucG9zPT09Yy5jdXJyUG9zJiZpJiZcImltYWdlXCI9PT10LnR5cGUmJiF0Lmhhc0Vycm9yJiYodT1jLmdldFRodW1iUG9zKHQpKXx8KGU9XCJmYWRlXCIpLFwiem9vbVwiPT09ZT8ocj1jLmdldEZpdFBvcyh0KSxyLnNjYWxlWD1yLndpZHRoL3Uud2lkdGgsci5zY2FsZVk9ci5oZWlnaHQvdS5oZWlnaHQsZGVsZXRlIHIud2lkdGgsZGVsZXRlIHIuaGVpZ2h0LHM9dC5vcHRzLnpvb21PcGFjaXR5LFwiYXV0b1wiPT1zJiYocz1NYXRoLmFicyh0LndpZHRoL3QuaGVpZ2h0LXUud2lkdGgvdS5oZWlnaHQpPi4xKSxzJiYodS5vcGFjaXR5PS4xLHIub3BhY2l0eT0xKSxuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSh0LiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLHUpLGYodC4kY29udGVudCksdm9pZCBuLmZhbmN5Ym94LmFuaW1hdGUodC4kY29udGVudCxyLGksZnVuY3Rpb24oKXtjLmNvbXBsZXRlKCl9KSk6KGMudXBkYXRlU2xpZGUodCksZT8obi5mYW5jeWJveC5zdG9wKGwpLGE9XCJmYW5jeWJveC1hbmltYXRlZCBmYW5jeWJveC1zbGlkZS0tXCIrKHQucG9zPj1jLnByZXZQb3M/XCJuZXh0XCI6XCJwcmV2aW91c1wiKStcIiBmYW5jeWJveC1meC1cIitlLGwucmVtb3ZlQXR0cihcInN0eWxlXCIpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnQgZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpLmFkZENsYXNzKGEpLHQuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIiksZihsKSx2b2lkIG4uZmFuY3lib3guYW5pbWF0ZShsLFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIixpLGZ1bmN0aW9uKGUpe2wucmVtb3ZlQ2xhc3MoYSkucmVtb3ZlQXR0cihcInN0eWxlXCIpLHQucG9zPT09Yy5jdXJyUG9zJiZjLmNvbXBsZXRlKCl9LCEwKSk6KGYobCksdC4kY29udGVudC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKSx2b2lkKHQucG9zPT09Yy5jdXJyUG9zJiZjLmNvbXBsZXRlKCkpKSl9LGdldFRodW1iUG9zOmZ1bmN0aW9uKG8pe3ZhciBhLGk9dGhpcyxzPSExLHI9ZnVuY3Rpb24oZSl7Zm9yKHZhciBvLGE9ZVswXSxpPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscz1bXTtudWxsIT09YS5wYXJlbnRFbGVtZW50OylcImhpZGRlblwiIT09bihhLnBhcmVudEVsZW1lbnQpLmNzcyhcIm92ZXJmbG93XCIpJiZcImF1dG9cIiE9PW4oYS5wYXJlbnRFbGVtZW50KS5jc3MoXCJvdmVyZmxvd1wiKXx8cy5wdXNoKGEucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksYT1hLnBhcmVudEVsZW1lbnQ7cmV0dXJuIG89cy5ldmVyeShmdW5jdGlvbih0KXt2YXIgZT1NYXRoLm1pbihpLnJpZ2h0LHQucmlnaHQpLU1hdGgubWF4KGkubGVmdCx0LmxlZnQpLG49TWF0aC5taW4oaS5ib3R0b20sdC5ib3R0b20pLU1hdGgubWF4KGkudG9wLHQudG9wKTtyZXR1cm4gZT4wJiZuPjB9KSxvJiZpLmJvdHRvbT4wJiZpLnJpZ2h0PjAmJmkubGVmdDxuKHQpLndpZHRoKCkmJmkudG9wPG4odCkuaGVpZ2h0KCl9LGM9by5vcHRzLiR0aHVtYixsPWM/Yy5vZmZzZXQoKTowO3JldHVybiBsJiZjWzBdLm93bmVyRG9jdW1lbnQ9PT1lJiZyKGMpJiYoYT1pLiRyZWZzLnN0YWdlLm9mZnNldCgpLHM9e3RvcDpsLnRvcC1hLnRvcCtwYXJzZUZsb2F0KGMuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKXx8MCksbGVmdDpsLmxlZnQtYS5sZWZ0K3BhcnNlRmxvYXQoYy5jc3MoXCJib3JkZXItbGVmdC13aWR0aFwiKXx8MCksd2lkdGg6Yy53aWR0aCgpLGhlaWdodDpjLmhlaWdodCgpLHNjYWxlWDoxLHNjYWxlWToxfSksc30sY29tcGxldGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG89dC5jdXJyZW50LGE9e307by5pc01vdmVkfHwhby5pc0xvYWRlZHx8by5pc0NvbXBsZXRlfHwoby5pc0NvbXBsZXRlPSEwLG8uJHNsaWRlLnNpYmxpbmdzKCkudHJpZ2dlcihcIm9uUmVzZXRcIiksZihvLiRzbGlkZSksby4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGVcIiksbi5lYWNoKHQuc2xpZGVzLGZ1bmN0aW9uKGUsbyl7by5wb3M+PXQuY3VyclBvcy0xJiZvLnBvczw9dC5jdXJyUG9zKzE/YVtvLnBvc109bzpvJiYobi5mYW5jeWJveC5zdG9wKG8uJHNsaWRlKSxvLiRzbGlkZS5vZmYoKS5yZW1vdmUoKSl9KSx0LnNsaWRlcz1hLHQudXBkYXRlQ3Vyc29yKCksdC50cmlnZ2VyKFwiYWZ0ZXJTaG93XCIpLChuKGUuYWN0aXZlRWxlbWVudCkuaXMoXCJbZGlzYWJsZWRdXCIpfHxvLm9wdHMuYXV0b0ZvY3VzJiZcImltYWdlXCIhPW8udHlwZSYmXCJpZnJhbWVcIiE9PW8udHlwZSkmJnQuZm9jdXMoKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt2YXIgdCxlLG49dGhpcztuLmdyb3VwLmxlbmd0aDwyfHwodD1uLnNsaWRlc1tuLmN1cnJQb3MrMV0sZT1uLnNsaWRlc1tuLmN1cnJQb3MtMV0sdCYmXCJpbWFnZVwiPT09dC50eXBlJiZuLmxvYWRTbGlkZSh0KSxlJiZcImltYWdlXCI9PT1lLnR5cGUmJm4ubG9hZFNsaWRlKGUpKX0sZm9jdXM6ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuY3VycmVudDt0aGlzLmlzQ2xvc2luZ3x8KGUmJmUuaXNDb21wbGV0ZSYmKHQ9ZS4kc2xpZGUuZmluZChcImlucHV0W2F1dG9mb2N1c106ZW5hYmxlZDp2aXNpYmxlOmZpcnN0XCIpLHQubGVuZ3RofHwodD1lLiRzbGlkZS5maW5kKFwiYnV0dG9uLDppbnB1dCxbdGFiaW5kZXhdLGFcIikuZmlsdGVyKFwiOmVuYWJsZWQ6dmlzaWJsZTpmaXJzdFwiKSkpLHQ9dCYmdC5sZW5ndGg/dDp0aGlzLiRyZWZzLmNvbnRhaW5lcix0LmZvY3VzKCkpfSxhY3RpdmF0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7bihcIi5mYW5jeWJveC1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPW4odGhpcykuZGF0YShcIkZhbmN5Qm94XCIpO2UmJmUuaWQhPT10LmlkJiYhZS5pc0Nsb3NpbmcmJihlLnRyaWdnZXIoXCJvbkRlYWN0aXZhdGVcIiksZS5yZW1vdmVFdmVudHMoKSxlLmlzVmlzaWJsZT0hMSl9KSx0LmlzVmlzaWJsZT0hMCwodC5jdXJyZW50fHx0LmlzSWRsZSkmJih0LnVwZGF0ZSgpLHQudXBkYXRlQ29udHJvbHMoKSksdC50cmlnZ2VyKFwib25BY3RpdmF0ZVwiKSx0LmFkZEV2ZW50cygpfSxjbG9zZTpmdW5jdGlvbih0LGUpe3ZhciBvLGEsaSxzLHIsYyxsPXRoaXMscD1sLmN1cnJlbnQsaD1mdW5jdGlvbigpe2wuY2xlYW5VcCh0KX07cmV0dXJuIWwuaXNDbG9zaW5nJiYobC5pc0Nsb3Npbmc9ITAsbC50cmlnZ2VyKFwiYmVmb3JlQ2xvc2VcIix0KT09PSExPyhsLmlzQ2xvc2luZz0hMSx1KGZ1bmN0aW9uKCl7bC51cGRhdGUoKX0pLCExKToobC5yZW1vdmVFdmVudHMoKSxwLnRpbW91dHMmJmNsZWFyVGltZW91dChwLnRpbW91dHMpLGk9cC4kY29udGVudCxvPXAub3B0cy5hbmltYXRpb25FZmZlY3QsYT1uLmlzTnVtZXJpYyhlKT9lOm8/cC5vcHRzLmFuaW1hdGlvbkR1cmF0aW9uOjAscC4kc2xpZGUub2ZmKGQpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlIGZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1hbmltYXRlZFwiKSxwLiRzbGlkZS5zaWJsaW5ncygpLnRyaWdnZXIoXCJvblJlc2V0XCIpLnJlbW92ZSgpLGEmJmwuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtb3BlblwiKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWNsb3NpbmdcIiksbC5oaWRlTG9hZGluZyhwKSxsLmhpZGVDb250cm9scygpLGwudXBkYXRlQ3Vyc29yKCksXCJ6b29tXCIhPT1vfHx0IT09ITAmJmkmJmEmJlwiaW1hZ2VcIj09PXAudHlwZSYmIXAuaGFzRXJyb3ImJihjPWwuZ2V0VGh1bWJQb3MocCkpfHwobz1cImZhZGVcIiksXCJ6b29tXCI9PT1vPyhuLmZhbmN5Ym94LnN0b3AoaSkscj1uLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShpKSxyLndpZHRoPXIud2lkdGgqci5zY2FsZVgsci5oZWlnaHQ9ci5oZWlnaHQqci5zY2FsZVkscz1wLm9wdHMuem9vbU9wYWNpdHksXCJhdXRvXCI9PXMmJihzPU1hdGguYWJzKHAud2lkdGgvcC5oZWlnaHQtYy53aWR0aC9jLmhlaWdodCk+LjEpLHMmJihjLm9wYWNpdHk9MCksci5zY2FsZVg9ci53aWR0aC9jLndpZHRoLHIuc2NhbGVZPXIuaGVpZ2h0L2MuaGVpZ2h0LHIud2lkdGg9Yy53aWR0aCxyLmhlaWdodD1jLmhlaWdodCxuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShwLiRjb250ZW50LHIpLGYocC4kY29udGVudCksbi5mYW5jeWJveC5hbmltYXRlKHAuJGNvbnRlbnQsYyxhLGgpLCEwKToobyYmYT90PT09ITA/c2V0VGltZW91dChoLGEpOm4uZmFuY3lib3guYW5pbWF0ZShwLiRzbGlkZS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpLFwiZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzIGZhbmN5Ym94LWZ4LVwiK28sYSxoKTpoKCksITApKSl9LGNsZWFuVXA6ZnVuY3Rpb24odCl7dmFyIG8sYSxpPXRoaXMscj1uKFwiYm9keVwiKTtpLmN1cnJlbnQuJHNsaWRlLnRyaWdnZXIoXCJvblJlc2V0XCIpLGkuJHJlZnMuY29udGFpbmVyLmVtcHR5KCkucmVtb3ZlKCksaS50cmlnZ2VyKFwiYWZ0ZXJDbG9zZVwiLHQpLGkuJGxhc3RGb2N1cyYmaS5jdXJyZW50Lm9wdHMuYmFja0ZvY3VzJiZpLiRsYXN0Rm9jdXMuZm9jdXMoKSxpLmN1cnJlbnQ9bnVsbCxvPW4uZmFuY3lib3guZ2V0SW5zdGFuY2UoKSxvP28uYWN0aXZhdGUoKToocy5zY3JvbGxUb3AoaS5zY3JvbGxUb3ApLnNjcm9sbExlZnQoaS5zY3JvbGxMZWZ0KSxyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYWN0aXZlIGNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiKSxyLmhhc0NsYXNzKFwiZmFuY3lib3gtaW9zZml4XCIpJiYoYT1wYXJzZUludChlLmJvZHkuc3R5bGUudG9wLDEwKSxyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaW9zZml4XCIpLmNzcyhcInRvcFwiLFwiXCIpLnNjcm9sbFRvcChhKi0xKSksbihcIiNmYW5jeWJveC1zdHlsZS1ub3Njcm9sbFwiKS5yZW1vdmUoKSl9LHRyaWdnZXI6ZnVuY3Rpb24odCxlKXt2YXIgbyxhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxpPXRoaXMscz1lJiZlLm9wdHM/ZTppLmN1cnJlbnQ7cmV0dXJuIHM/YS51bnNoaWZ0KHMpOnM9aSxhLnVuc2hpZnQoaSksbi5pc0Z1bmN0aW9uKHMub3B0c1t0XSkmJihvPXMub3B0c1t0XS5hcHBseShzLGEpKSxvPT09ITE/bzp2b2lkKFwiYWZ0ZXJDbG9zZVwiIT09dCYmaS4kcmVmcz9pLiRyZWZzLmNvbnRhaW5lci50cmlnZ2VyKHQrXCIuZmJcIixhKTpyLnRyaWdnZXIodCtcIi5mYlwiLGEpKX0sdXBkYXRlQ29udHJvbHM6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPWUuY3VycmVudCxvPW4uaW5kZXgsYT1uLm9wdHMuY2FwdGlvbixpPWUuJHJlZnMuY29udGFpbmVyLHM9ZS4kcmVmcy5jYXB0aW9uO24uJHNsaWRlLnRyaWdnZXIoXCJyZWZyZXNoXCIpLGUuJGNhcHRpb249YSYmYS5sZW5ndGg/cy5odG1sKGEpOm51bGwsZS5pc0hpZGRlbkNvbnRyb2xzfHxlLmlzSWRsZXx8ZS5zaG93Q29udHJvbHMoKSxpLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1jb3VudF1cIikuaHRtbChlLmdyb3VwLmxlbmd0aCksaS5maW5kKFwiW2RhdGEtZmFuY3lib3gtaW5kZXhdXCIpLmh0bWwobysxKSxpLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhbi5vcHRzLmxvb3AmJm88PTApLGkuZmluZChcIltkYXRhLWZhbmN5Ym94LW5leHRdXCIpLnByb3AoXCJkaXNhYmxlZFwiLCFuLm9wdHMubG9vcCYmbz49ZS5ncm91cC5sZW5ndGgtMSksXCJpbWFnZVwiPT09bi50eXBlP2kuZmluZChcIltkYXRhLWZhbmN5Ym94LWRvd25sb2FkXVwiKS5hdHRyKFwiaHJlZlwiLG4ub3B0cy5pbWFnZS5zcmN8fG4uc3JjKS5zaG93KCk6aS5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdLFtkYXRhLWZhbmN5Ym94LXpvb21dXCIpLmhpZGUoKX0saGlkZUNvbnRyb2xzOmZ1bmN0aW9uKCl7dGhpcy5pc0hpZGRlbkNvbnRyb2xzPSEwLHRoaXMuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1pbmZvYmFyIGZhbmN5Ym94LXNob3ctdG9vbGJhciBmYW5jeWJveC1zaG93LWNhcHRpb24gZmFuY3lib3gtc2hvdy1uYXZcIil9LHNob3dDb250cm9sczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmN1cnJlbnQ/dC5jdXJyZW50Lm9wdHM6dC5vcHRzLG49dC4kcmVmcy5jb250YWluZXI7dC5pc0hpZGRlbkNvbnRyb2xzPSExLHQuaWRsZVNlY29uZHNDb3VudGVyPTAsbi50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctdG9vbGJhclwiLCEoIWUudG9vbGJhcnx8IWUuYnV0dG9ucykpLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1pbmZvYmFyXCIsISEoZS5pbmZvYmFyJiZ0Lmdyb3VwLmxlbmd0aD4xKSkudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LW5hdlwiLCEhKGUuYXJyb3dzJiZ0Lmdyb3VwLmxlbmd0aD4xKSkudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy1tb2RhbFwiLCEhZS5tb2RhbCksdC4kY2FwdGlvbj9uLmFkZENsYXNzKFwiZmFuY3lib3gtc2hvdy1jYXB0aW9uIFwiKTpuLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1jYXB0aW9uXCIpfSx0b2dnbGVDb250cm9sczpmdW5jdGlvbigpe3RoaXMuaXNIaWRkZW5Db250cm9scz90aGlzLnNob3dDb250cm9scygpOnRoaXMuaGlkZUNvbnRyb2xzKCl9fSksbi5mYW5jeWJveD17dmVyc2lvbjpcIjMuMi41XCIsZGVmYXVsdHM6aSxnZXRJbnN0YW5jZTpmdW5jdGlvbih0KXt2YXIgZT1uKCcuZmFuY3lib3gtY29udGFpbmVyOm5vdChcIi5mYW5jeWJveC1pcy1jbG9zaW5nXCIpOmxhc3QnKS5kYXRhKFwiRmFuY3lCb3hcIiksbz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGUgaW5zdGFuY2VvZiBwJiYoXCJzdHJpbmdcIj09PW4udHlwZSh0KT9lW3RdLmFwcGx5KGUsbyk6XCJmdW5jdGlvblwiPT09bi50eXBlKHQpJiZ0LmFwcGx5KGUsbyksZSl9LG9wZW46ZnVuY3Rpb24odCxlLG4pe3JldHVybiBuZXcgcCh0LGUsbil9LGNsb3NlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SW5zdGFuY2UoKTtlJiYoZS5jbG9zZSgpLHQ9PT0hMCYmdGhpcy5jbG9zZSgpKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuY2xvc2UoITApLHIub2ZmKFwiY2xpY2suZmItc3RhcnRcIil9LGlzTW9iaWxlOmUuY3JlYXRlVG91Y2ghPT1vJiYvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksdXNlM2Q6ZnVuY3Rpb24oKXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuZ2V0Q29tcHV0ZWRTdHlsZSYmdC5nZXRDb21wdXRlZFN0eWxlKG4pLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIikmJiEoZS5kb2N1bWVudE1vZGUmJmUuZG9jdW1lbnRNb2RlPDExKX0oKSxnZXRUcmFuc2xhdGU6ZnVuY3Rpb24odCl7dmFyIGU7aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm4hMTtpZihlPXQuZXEoMCkuY3NzKFwidHJhbnNmb3JtXCIpLGUmJmUuaW5kZXhPZihcIm1hdHJpeFwiKSE9PS0xPyhlPWUuc3BsaXQoXCIoXCIpWzFdLGU9ZS5zcGxpdChcIilcIilbMF0sZT1lLnNwbGl0KFwiLFwiKSk6ZT1bXSxlLmxlbmd0aCllPWUubGVuZ3RoPjEwP1tlWzEzXSxlWzEyXSxlWzBdLGVbNV1dOltlWzVdLGVbNF0sZVswXSxlWzNdXSxlPWUubWFwKHBhcnNlRmxvYXQpO2Vsc2V7ZT1bMCwwLDEsMV07dmFyIG49L1xcLip0cmFuc2xhdGVcXCgoLiopcHgsKC4qKXB4XFwpL2ksbz1uLmV4ZWModC5lcSgwKS5hdHRyKFwic3R5bGVcIikpO28mJihlWzBdPXBhcnNlRmxvYXQob1syXSksZVsxXT1wYXJzZUZsb2F0KG9bMV0pKX1yZXR1cm57dG9wOmVbMF0sbGVmdDplWzFdLHNjYWxlWDplWzJdLHNjYWxlWTplWzNdLG9wYWNpdHk6cGFyc2VGbG9hdCh0LmNzcyhcIm9wYWNpdHlcIikpLHdpZHRoOnQud2lkdGgoKSxoZWlnaHQ6dC5oZWlnaHQoKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbih0LGUpe3ZhciBuPVwiXCIsYT17fTtpZih0JiZlKXJldHVybiBlLmxlZnQ9PT1vJiZlLnRvcD09PW98fChuPShlLmxlZnQ9PT1vP3QucG9zaXRpb24oKS5sZWZ0OmUubGVmdCkrXCJweCwgXCIrKGUudG9wPT09bz90LnBvc2l0aW9uKCkudG9wOmUudG9wKStcInB4XCIsbj10aGlzLnVzZTNkP1widHJhbnNsYXRlM2QoXCIrbitcIiwgMHB4KVwiOlwidHJhbnNsYXRlKFwiK24rXCIpXCIpLGUuc2NhbGVYIT09byYmZS5zY2FsZVkhPT1vJiYobj0obi5sZW5ndGg/bitcIiBcIjpcIlwiKStcInNjYWxlKFwiK2Uuc2NhbGVYK1wiLCBcIitlLnNjYWxlWStcIilcIiksbi5sZW5ndGgmJihhLnRyYW5zZm9ybT1uKSxlLm9wYWNpdHkhPT1vJiYoYS5vcGFjaXR5PWUub3BhY2l0eSksZS53aWR0aCE9PW8mJihhLndpZHRoPWUud2lkdGgpLGUuaGVpZ2h0IT09byYmKGEuaGVpZ2h0PWUuaGVpZ2h0KSx0LmNzcyhhKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsYSxpLHMpe24uaXNGdW5jdGlvbihhKSYmKGk9YSxhPW51bGwpLG4uaXNQbGFpbk9iamVjdChlKXx8dC5yZW1vdmVBdHRyKFwic3R5bGVcIiksdC5vbihkLGZ1bmN0aW9uKGEpeyghYXx8IWEub3JpZ2luYWxFdmVudHx8dC5pcyhhLm9yaWdpbmFsRXZlbnQudGFyZ2V0KSYmXCJ6LWluZGV4XCIhPWEub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUpJiYobi5mYW5jeWJveC5zdG9wKHQpLG4uaXNQbGFpbk9iamVjdChlKT9lLnNjYWxlWCE9PW8mJmUuc2NhbGVZIT09byYmKHQuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiXCIpLGUud2lkdGg9TWF0aC5yb3VuZCh0LndpZHRoKCkqZS5zY2FsZVgpLGUuaGVpZ2h0PU1hdGgucm91bmQodC5oZWlnaHQoKSplLnNjYWxlWSksZS5zY2FsZVg9MSxlLnNjYWxlWT0xLG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKHQsZSkpOnMhPT0hMCYmdC5yZW1vdmVDbGFzcyhlKSxuLmlzRnVuY3Rpb24oaSkmJmkoYSkpfSksbi5pc051bWVyaWMoYSkmJnQuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGErXCJtc1wiKSxuLmlzUGxhaW5PYmplY3QoZSk/bi5mYW5jeWJveC5zZXRUcmFuc2xhdGUodCxlKTp0LmFkZENsYXNzKGUpLGUuc2NhbGVYJiZ0Lmhhc0NsYXNzKFwiZmFuY3lib3gtaW1hZ2Utd3JhcFwiKSYmdC5wYXJlbnQoKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIiksdC5kYXRhKFwidGltZXJcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC50cmlnZ2VyKFwidHJhbnNpdGlvbmVuZFwiKX0sYSsxNikpfSxzdG9wOmZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0LmRhdGEoXCJ0aW1lclwiKSksdC5vZmYoXCJ0cmFuc2l0aW9uZW5kXCIpLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixcIlwiKSx0Lmhhc0NsYXNzKFwiZmFuY3lib3gtaW1hZ2Utd3JhcFwiKSYmdC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIil9fSxuLmZuLmZhbmN5Ym94PWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiB0PXR8fHt9LGU9dC5zZWxlY3Rvcnx8ITEsZT9uKFwiYm9keVwiKS5vZmYoXCJjbGljay5mYi1zdGFydFwiLGUpLm9uKFwiY2xpY2suZmItc3RhcnRcIixlLHtvcHRpb25zOnR9LGEpOnRoaXMub2ZmKFwiY2xpY2suZmItc3RhcnRcIikub24oXCJjbGljay5mYi1zdGFydFwiLHtpdGVtczp0aGlzLG9wdGlvbnM6dH0sYSksdGhpc30sci5vbihcImNsaWNrLmZiLXN0YXJ0XCIsXCJbZGF0YS1mYW5jeWJveF1cIixhKX19KHdpbmRvdyxkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciBlPWZ1bmN0aW9uKGUsbixvKXtpZihlKXJldHVybiBvPW98fFwiXCIsXCJvYmplY3RcIj09PXQudHlwZShvKSYmKG89dC5wYXJhbShvLCEwKSksdC5lYWNoKG4sZnVuY3Rpb24odCxuKXtlPWUucmVwbGFjZShcIiRcIit0LG58fFwiXCIpfSksby5sZW5ndGgmJihlKz0oZS5pbmRleE9mKFwiP1wiKT4wP1wiJlwiOlwiP1wiKStvKSxlfSxuPXt5b3V0dWJlOnttYXRjaGVyOi8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlfHlvdXR1YmVcXC1ub2Nvb2tpZVxcLmNvbSlcXC8od2F0Y2hcXD8oLiomKT92PXx2XFwvfHVcXC98ZW1iZWRcXC8/KT8odmlkZW9zZXJpZXNcXD9saXN0PSguKil8W1xcdy1dezExfXxcXD9saXN0VHlwZT0oLiopJmxpc3Q9KC4qKSkoLiopL2kscGFyYW1zOnthdXRvcGxheToxLGF1dG9oaWRlOjEsZnM6MSxyZWw6MCxoZDoxLHdtb2RlOlwidHJhbnNwYXJlbnRcIixlbmFibGVqc2FwaToxLGh0bWw1OjF9LHBhcmFtUGxhY2U6OCx0eXBlOlwiaWZyYW1lXCIsdXJsOlwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJDRcIix0aHVtYjpcIi8vaW1nLnlvdXR1YmUuY29tL3ZpLyQ0L2hxZGVmYXVsdC5qcGdcIn0sdmltZW86e21hdGNoZXI6L14uK3ZpbWVvLmNvbVxcLyguKlxcLyk/KFtcXGRdKykoLiopPy8scGFyYW1zOnthdXRvcGxheToxLGhkOjEsc2hvd190aXRsZToxLHNob3dfYnlsaW5lOjEsc2hvd19wb3J0cmFpdDowLGZ1bGxzY3JlZW46MSxhcGk6MX0scGFyYW1QbGFjZTozLHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJDJcIn0sbWV0YWNhZmU6e21hdGNoZXI6L21ldGFjYWZlLmNvbVxcL3dhdGNoXFwvKFxcZCspXFwvKC4qKT8vLHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3d3dy5tZXRhY2FmZS5jb20vZW1iZWQvJDEvP2FwPTFcIn0sZGFpbHltb3Rpb246e21hdGNoZXI6L2RhaWx5bW90aW9uLmNvbVxcL3ZpZGVvXFwvKC4qKVxcLz8oLiopLyxwYXJhbXM6e2FkZGl0aW9uYWxJbmZvczowLGF1dG9TdGFydDoxfSx0eXBlOlwiaWZyYW1lXCIsdXJsOlwiLy93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvLyQxXCJ9LHZpbmU6e21hdGNoZXI6L3ZpbmUuY29cXC92XFwvKFthLXpBLVowLTlcXD9cXD1cXC1dKykvLHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3ZpbmUuY28vdi8kMS9lbWJlZC9zaW1wbGVcIn0saW5zdGFncmFtOnttYXRjaGVyOi8oaW5zdGFnclxcLmFtfGluc3RhZ3JhbVxcLmNvbSlcXC9wXFwvKFthLXpBLVowLTlfXFwtXSspXFwvPy9pLHR5cGU6XCJpbWFnZVwiLHVybDpcIi8vJDEvcC8kMi9tZWRpYS8/c2l6ZT1sXCJcclxufSxnbWFwX3BsYWNlOnttYXRjaGVyOi8obWFwc1xcLik/Z29vZ2xlXFwuKFthLXpdezIsM30oXFwuW2Etel17Mn0pPylcXC8oKChtYXBzXFwvKHBsYWNlXFwvKC4qKVxcLyk/XFxAKC4qKSwoXFxkKy4/XFxkKz8peikpfChcXD9sbD0pKSguKik/L2ksdHlwZTpcImlmcmFtZVwiLHVybDpmdW5jdGlvbih0KXtyZXR1cm5cIi8vbWFwcy5nb29nbGUuXCIrdFsyXStcIi8/bGw9XCIrKHRbOV0/dFs5XStcIiZ6PVwiK01hdGguZmxvb3IodFsxMF0pKyh0WzEyXT90WzEyXS5yZXBsYWNlKC9eXFwvLyxcIiZcIik6XCJcIik6dFsxMl0pK1wiJm91dHB1dD1cIisodFsxMl0mJnRbMTJdLmluZGV4T2YoXCJsYXllcj1jXCIpPjA/XCJzdmVtYmVkXCI6XCJlbWJlZFwiKX19LGdtYXBfc2VhcmNoOnttYXRjaGVyOi8obWFwc1xcLik/Z29vZ2xlXFwuKFthLXpdezIsM30oXFwuW2Etel17Mn0pPylcXC8obWFwc1xcL3NlYXJjaFxcLykoLiopL2ksdHlwZTpcImlmcmFtZVwiLHVybDpmdW5jdGlvbih0KXtyZXR1cm5cIi8vbWFwcy5nb29nbGUuXCIrdFsyXStcIi9tYXBzP3E9XCIrdFs1XS5yZXBsYWNlKFwicXVlcnk9XCIsXCJxPVwiKS5yZXBsYWNlKFwiYXBpPTFcIixcIlwiKStcIiZvdXRwdXQ9ZW1iZWRcIn19fTt0KGRvY3VtZW50KS5vbihcIm9iamVjdE5lZWRzVHlwZS5mYlwiLGZ1bmN0aW9uKG8sYSxpKXt2YXIgcyxyLGMsbCx1LGQsZixwPWkuc3JjfHxcIlwiLGg9ITE7cz10LmV4dGVuZCghMCx7fSxuLGkub3B0cy5tZWRpYSksdC5lYWNoKHMsZnVuY3Rpb24obixvKXtpZihjPXAubWF0Y2goby5tYXRjaGVyKSl7aWYoaD1vLnR5cGUsZD17fSxvLnBhcmFtUGxhY2UmJmNbby5wYXJhbVBsYWNlXSl7dT1jW28ucGFyYW1QbGFjZV0sXCI/XCI9PXVbMF0mJih1PXUuc3Vic3RyaW5nKDEpKSx1PXUuc3BsaXQoXCImXCIpO2Zvcih2YXIgYT0wO2E8dS5sZW5ndGg7KythKXt2YXIgcz11W2FdLnNwbGl0KFwiPVwiLDIpOzI9PXMubGVuZ3RoJiYoZFtzWzBdXT1kZWNvZGVVUklDb21wb25lbnQoc1sxXS5yZXBsYWNlKC9cXCsvZyxcIiBcIikpKX19cmV0dXJuIGw9dC5leHRlbmQoITAse30sby5wYXJhbXMsaS5vcHRzW25dLGQpLHA9XCJmdW5jdGlvblwiPT09dC50eXBlKG8udXJsKT9vLnVybC5jYWxsKHRoaXMsYyxsLGkpOmUoby51cmwsYyxsKSxyPVwiZnVuY3Rpb25cIj09PXQudHlwZShvLnRodW1iKT9vLnRodW1iLmNhbGwodGhpcyxjLGwsaSk6ZShvLnRodW1iLGMpLFwidmltZW9cIj09PW4mJihwPXAucmVwbGFjZShcIiYlMjNcIixcIiNcIikpLCExfX0pLGg/KGkuc3JjPXAsaS50eXBlPWgsaS5vcHRzLnRodW1ifHxpLm9wdHMuJHRodW1iJiZpLm9wdHMuJHRodW1iLmxlbmd0aHx8KGkub3B0cy50aHVtYj1yKSxcImlmcmFtZVwiPT09aCYmKHQuZXh0ZW5kKCEwLGkub3B0cyx7aWZyYW1lOntwcmVsb2FkOiExLGF0dHI6e3Njcm9sbGluZzpcIm5vXCJ9fX0pLGkuY29udGVudFByb3ZpZGVyPWYsaS5vcHRzLnNsaWRlQ2xhc3MrPVwiIGZhbmN5Ym94LXNsaWRlLS1cIisoXCJnbWFwX3BsYWNlXCI9PWZ8fFwiZ21hcF9zZWFyY2hcIj09Zj9cIm1hcFwiOlwidmlkZW9cIikpKTpwJiYoaS50eXBlPWkub3B0cy5kZWZhdWx0VHlwZSl9KX0od2luZG93LmpRdWVyeXx8alF1ZXJ5KSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZnVuY3Rpb24oKXtyZXR1cm4gdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtyZXR1cm4gdC5zZXRUaW1lb3V0KGUsMWUzLzYwKX19KCksYT1mdW5jdGlvbigpe3JldHVybiB0LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx0LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHx0Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lfHx0Lm9DYW5jZWxBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7dC5jbGVhclRpbWVvdXQoZSl9fSgpLGk9ZnVuY3Rpb24oZSl7dmFyIG49W107ZT1lLm9yaWdpbmFsRXZlbnR8fGV8fHQuZSxlPWUudG91Y2hlcyYmZS50b3VjaGVzLmxlbmd0aD9lLnRvdWNoZXM6ZS5jaGFuZ2VkVG91Y2hlcyYmZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg/ZS5jaGFuZ2VkVG91Y2hlczpbZV07Zm9yKHZhciBvIGluIGUpZVtvXS5wYWdlWD9uLnB1c2goe3g6ZVtvXS5wYWdlWCx5OmVbb10ucGFnZVl9KTplW29dLmNsaWVudFgmJm4ucHVzaCh7eDplW29dLmNsaWVudFgseTplW29dLmNsaWVudFl9KTtyZXR1cm4gbn0scz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIGUmJnQ/XCJ4XCI9PT1uP3QueC1lLng6XCJ5XCI9PT1uP3QueS1lLnk6TWF0aC5zcXJ0KE1hdGgucG93KHQueC1lLngsMikrTWF0aC5wb3codC55LWUueSwyKSk6MH0scj1mdW5jdGlvbih0KXtpZih0LmlzKCdhLGFyZWEsYnV0dG9uLFtyb2xlPVwiYnV0dG9uXCJdLGlucHV0LGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhJyl8fG4uaXNGdW5jdGlvbih0LmdldCgwKS5vbmNsaWNrKXx8dC5kYXRhKFwic2VsZWN0YWJsZVwiKSlyZXR1cm4hMDtmb3IodmFyIGU9MCxvPXRbMF0uYXR0cmlidXRlcyxhPW8ubGVuZ3RoO2U8YTtlKyspaWYoXCJkYXRhLWZhbmN5Ym94LVwiPT09b1tlXS5ub2RlTmFtZS5zdWJzdHIoMCwxNCkpcmV0dXJuITA7cmV0dXJuITF9LGM9ZnVuY3Rpb24oZSl7dmFyIG49dC5nZXRDb21wdXRlZFN0eWxlKGUpW1wib3ZlcmZsb3cteVwiXSxvPXQuZ2V0Q29tcHV0ZWRTdHlsZShlKVtcIm92ZXJmbG93LXhcIl0sYT0oXCJzY3JvbGxcIj09PW58fFwiYXV0b1wiPT09bikmJmUuc2Nyb2xsSGVpZ2h0PmUuY2xpZW50SGVpZ2h0LGk9KFwic2Nyb2xsXCI9PT1vfHxcImF1dG9cIj09PW8pJiZlLnNjcm9sbFdpZHRoPmUuY2xpZW50V2lkdGg7cmV0dXJuIGF8fGl9LGw9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPSExOzspe2lmKGU9Yyh0LmdldCgwKSkpYnJlYWs7aWYodD10LnBhcmVudCgpLCF0Lmxlbmd0aHx8dC5oYXNDbGFzcyhcImZhbmN5Ym94LXN0YWdlXCIpfHx0LmlzKFwiYm9keVwiKSlicmVha31yZXR1cm4gZX0sdT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2UuaW5zdGFuY2U9dCxlLiRiZz10LiRyZWZzLmJnLGUuJHN0YWdlPXQuJHJlZnMuc3RhZ2UsZS4kY29udGFpbmVyPXQuJHJlZnMuY29udGFpbmVyLGUuZGVzdHJveSgpLGUuJGNvbnRhaW5lci5vbihcInRvdWNoc3RhcnQuZmIudG91Y2ggbW91c2Vkb3duLmZiLnRvdWNoXCIsbi5wcm94eShlLFwib250b3VjaHN0YXJ0XCIpKX07dS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuJGNvbnRhaW5lci5vZmYoXCIuZmIudG91Y2hcIil9LHUucHJvdG90eXBlLm9udG91Y2hzdGFydD1mdW5jdGlvbihvKXt2YXIgYT10aGlzLGM9bihvLnRhcmdldCksdT1hLmluc3RhbmNlLGQ9dS5jdXJyZW50LGY9ZC4kY29udGVudCxwPVwidG91Y2hzdGFydFwiPT1vLnR5cGU7aWYocCYmYS4kY29udGFpbmVyLm9mZihcIm1vdXNlZG93bi5mYi50b3VjaFwiKSwhZHx8YS5pbnN0YW5jZS5pc0FuaW1hdGluZ3x8YS5pbnN0YW5jZS5pc0Nsb3NpbmcpcmV0dXJuIG8uc3RvcFByb3BhZ2F0aW9uKCksdm9pZCBvLnByZXZlbnREZWZhdWx0KCk7aWYoKCFvLm9yaWdpbmFsRXZlbnR8fDIhPW8ub3JpZ2luYWxFdmVudC5idXR0b24pJiZjLmxlbmd0aCYmIXIoYykmJiFyKGMucGFyZW50KCkpJiYhKG8ub3JpZ2luYWxFdmVudC5jbGllbnRYPmNbMF0uY2xpZW50V2lkdGgrYy5vZmZzZXQoKS5sZWZ0KSYmKGEuc3RhcnRQb2ludHM9aShvKSxhLnN0YXJ0UG9pbnRzJiYhKGEuc3RhcnRQb2ludHMubGVuZ3RoPjEmJnUuaXNTbGlkaW5nKSkpe2lmKGEuJHRhcmdldD1jLGEuJGNvbnRlbnQ9ZixhLmNhblRhcD0hMCxhLm9wdHM9ZC5vcHRzLnRvdWNoLG4oZSkub2ZmKFwiLmZiLnRvdWNoXCIpLG4oZSkub24ocD9cInRvdWNoZW5kLmZiLnRvdWNoIHRvdWNoY2FuY2VsLmZiLnRvdWNoXCI6XCJtb3VzZXVwLmZiLnRvdWNoIG1vdXNlbGVhdmUuZmIudG91Y2hcIixuLnByb3h5KGEsXCJvbnRvdWNoZW5kXCIpKSxuKGUpLm9uKHA/XCJ0b3VjaG1vdmUuZmIudG91Y2hcIjpcIm1vdXNlbW92ZS5mYi50b3VjaFwiLG4ucHJveHkoYSxcIm9udG91Y2htb3ZlXCIpKSwhYS5vcHRzJiYhdS5jYW5QYW4oKXx8IWMuaXMoYS4kc3RhZ2UpJiYhYS4kc3RhZ2UuZmluZChjKS5sZW5ndGgpcmV0dXJuIHZvaWQoYy5pcyhcImltZ1wiKSYmby5wcmV2ZW50RGVmYXVsdCgpKTtvLnN0b3BQcm9wYWdhdGlvbigpLG4uZmFuY3lib3guaXNNb2JpbGUmJihsKGEuJHRhcmdldCl8fGwoYS4kdGFyZ2V0LnBhcmVudCgpKSl8fG8ucHJldmVudERlZmF1bHQoKSxhLmNhbnZhc1dpZHRoPU1hdGgucm91bmQoZC4kc2xpZGVbMF0uY2xpZW50V2lkdGgpLGEuY2FudmFzSGVpZ2h0PU1hdGgucm91bmQoZC4kc2xpZGVbMF0uY2xpZW50SGVpZ2h0KSxhLnN0YXJ0VGltZT0obmV3IERhdGUpLmdldFRpbWUoKSxhLmRpc3RhbmNlWD1hLmRpc3RhbmNlWT1hLmRpc3RhbmNlPTAsYS5pc1Bhbm5pbmc9ITEsYS5pc1N3aXBpbmc9ITEsYS5pc1pvb21pbmc9ITEsYS5zbGlkZXJTdGFydFBvcz1hLnNsaWRlckxhc3RQb3N8fHt0b3A6MCxsZWZ0OjB9LGEuY29udGVudFN0YXJ0UG9zPW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGEuJGNvbnRlbnQpLGEuY29udGVudExhc3RQb3M9bnVsbCwxIT09YS5zdGFydFBvaW50cy5sZW5ndGh8fGEuaXNab29taW5nfHwoYS5jYW5UYXA9IXUuaXNTbGlkaW5nLFwiaW1hZ2VcIj09PWQudHlwZSYmKGEuY29udGVudFN0YXJ0UG9zLndpZHRoPmEuY2FudmFzV2lkdGgrMXx8YS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0PmEuY2FudmFzSGVpZ2h0KzEpPyhuLmZhbmN5Ym94LnN0b3AoYS4kY29udGVudCksYS4kY29udGVudC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsXCIwbXNcIiksYS5pc1Bhbm5pbmc9ITApOmEuaXNTd2lwaW5nPSEwLGEuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWNvbnRyb2xzLS1pc0dyYWJiaW5nXCIpKSwyIT09YS5zdGFydFBvaW50cy5sZW5ndGh8fHUuaXNBbmltYXRpbmd8fGQuaGFzRXJyb3J8fFwiaW1hZ2VcIiE9PWQudHlwZXx8IWQuaXNMb2FkZWQmJiFkLiRnaG9zdHx8KGEuaXNab29taW5nPSEwLGEuaXNTd2lwaW5nPSExLGEuaXNQYW5uaW5nPSExLG4uZmFuY3lib3guc3RvcChhLiRjb250ZW50KSxhLiRjb250ZW50LmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixcIjBtc1wiKSxhLmNlbnRlclBvaW50U3RhcnRYPS41KihhLnN0YXJ0UG9pbnRzWzBdLngrYS5zdGFydFBvaW50c1sxXS54KS1uKHQpLnNjcm9sbExlZnQoKSxhLmNlbnRlclBvaW50U3RhcnRZPS41KihhLnN0YXJ0UG9pbnRzWzBdLnkrYS5zdGFydFBvaW50c1sxXS55KS1uKHQpLnNjcm9sbFRvcCgpLGEucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYPShhLmNlbnRlclBvaW50U3RhcnRYLWEuY29udGVudFN0YXJ0UG9zLmxlZnQpL2EuY29udGVudFN0YXJ0UG9zLndpZHRoLGEucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZPShhLmNlbnRlclBvaW50U3RhcnRZLWEuY29udGVudFN0YXJ0UG9zLnRvcCkvYS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0LGEuc3RhcnREaXN0YW5jZUJldHdlZW5GaW5nZXJzPXMoYS5zdGFydFBvaW50c1swXSxhLnN0YXJ0UG9pbnRzWzFdKSl9fSx1LnByb3RvdHlwZS5vbnRvdWNobW92ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKGUubmV3UG9pbnRzPWkodCksbi5mYW5jeWJveC5pc01vYmlsZSYmKGwoZS4kdGFyZ2V0KXx8bChlLiR0YXJnZXQucGFyZW50KCkpKSlyZXR1cm4gdC5zdG9wUHJvcGFnYXRpb24oKSx2b2lkKGUuY2FuVGFwPSExKTtpZigoZS5vcHRzfHxlLmluc3RhbmNlLmNhblBhbigpKSYmZS5uZXdQb2ludHMmJmUubmV3UG9pbnRzLmxlbmd0aCYmKGUuZGlzdGFuY2VYPXMoZS5uZXdQb2ludHNbMF0sZS5zdGFydFBvaW50c1swXSxcInhcIiksZS5kaXN0YW5jZVk9cyhlLm5ld1BvaW50c1swXSxlLnN0YXJ0UG9pbnRzWzBdLFwieVwiKSxlLmRpc3RhbmNlPXMoZS5uZXdQb2ludHNbMF0sZS5zdGFydFBvaW50c1swXSksZS5kaXN0YW5jZT4wKSl7aWYoIWUuJHRhcmdldC5pcyhlLiRzdGFnZSkmJiFlLiRzdGFnZS5maW5kKGUuJHRhcmdldCkubGVuZ3RoKXJldHVybjt0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSxlLmlzU3dpcGluZz9lLm9uU3dpcGUoKTplLmlzUGFubmluZz9lLm9uUGFuKCk6ZS5pc1pvb21pbmcmJmUub25ab29tKCl9fSx1LnByb3RvdHlwZS5vblN3aXBlPWZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLHM9aS5pc1N3aXBpbmcscj1pLnNsaWRlclN0YXJ0UG9zLmxlZnR8fDA7cz09PSEwP01hdGguYWJzKGkuZGlzdGFuY2UpPjEwJiYoaS5jYW5UYXA9ITEsaS5pbnN0YW5jZS5ncm91cC5sZW5ndGg8MiYmaS5vcHRzLnZlcnRpY2FsP2kuaXNTd2lwaW5nPVwieVwiOmkuaW5zdGFuY2UuaXNTbGlkaW5nfHxpLm9wdHMudmVydGljYWw9PT0hMXx8XCJhdXRvXCI9PT1pLm9wdHMudmVydGljYWwmJm4odCkud2lkdGgoKT44MDA/aS5pc1N3aXBpbmc9XCJ4XCI6KGU9TWF0aC5hYnMoMTgwKk1hdGguYXRhbjIoaS5kaXN0YW5jZVksaS5kaXN0YW5jZVgpL01hdGguUEkpLGkuaXNTd2lwaW5nPWU+NDUmJmU8MTM1P1wieVwiOlwieFwiKSxpLmluc3RhbmNlLmlzU2xpZGluZz1pLmlzU3dpcGluZyxpLnN0YXJ0UG9pbnRzPWkubmV3UG9pbnRzLG4uZWFjaChpLmluc3RhbmNlLnNsaWRlcyxmdW5jdGlvbih0LGUpe24uZmFuY3lib3guc3RvcChlLiRzbGlkZSksZS4kc2xpZGUuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiMG1zXCIpLGUuaW5UcmFuc2l0aW9uPSExLGUucG9zPT09aS5pbnN0YW5jZS5jdXJyZW50LnBvcyYmKGkuc2xpZGVyU3RhcnRQb3MubGVmdD1uLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShlLiRzbGlkZSkubGVmdCl9KSxpLmluc3RhbmNlLlNsaWRlU2hvdyYmaS5pbnN0YW5jZS5TbGlkZVNob3cuaXNBY3RpdmUmJmkuaW5zdGFuY2UuU2xpZGVTaG93LnN0b3AoKSk6KFwieFwiPT1zJiYoaS5kaXN0YW5jZVg+MCYmKGkuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoPDJ8fDA9PT1pLmluc3RhbmNlLmN1cnJlbnQuaW5kZXgmJiFpLmluc3RhbmNlLmN1cnJlbnQub3B0cy5sb29wKT9yKz1NYXRoLnBvdyhpLmRpc3RhbmNlWCwuOCk6aS5kaXN0YW5jZVg8MCYmKGkuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoPDJ8fGkuaW5zdGFuY2UuY3VycmVudC5pbmRleD09PWkuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoLTEmJiFpLmluc3RhbmNlLmN1cnJlbnQub3B0cy5sb29wKT9yLT1NYXRoLnBvdygtaS5kaXN0YW5jZVgsLjgpOnIrPWkuZGlzdGFuY2VYKSxpLnNsaWRlckxhc3RQb3M9e3RvcDpcInhcIj09cz8wOmkuc2xpZGVyU3RhcnRQb3MudG9wK2kuZGlzdGFuY2VZLGxlZnQ6cn0saS5yZXF1ZXN0SWQmJihhKGkucmVxdWVzdElkKSxpLnJlcXVlc3RJZD1udWxsKSxpLnJlcXVlc3RJZD1vKGZ1bmN0aW9uKCl7aS5zbGlkZXJMYXN0UG9zJiYobi5lYWNoKGkuaW5zdGFuY2Uuc2xpZGVzLGZ1bmN0aW9uKHQsZSl7dmFyIG89ZS5wb3MtaS5pbnN0YW5jZS5jdXJyUG9zO24uZmFuY3lib3guc2V0VHJhbnNsYXRlKGUuJHNsaWRlLHt0b3A6aS5zbGlkZXJMYXN0UG9zLnRvcCxsZWZ0Omkuc2xpZGVyTGFzdFBvcy5sZWZ0K28qaS5jYW52YXNXaWR0aCtvKmUub3B0cy5ndXR0ZXJ9KX0pLGkuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNsaWRpbmdcIikpfSkpfSx1LnByb3RvdHlwZS5vblBhbj1mdW5jdGlvbigpe3ZhciB0LGUsaSxzPXRoaXM7cy5jYW5UYXA9ITEsdD1zLmNvbnRlbnRTdGFydFBvcy53aWR0aD5zLmNhbnZhc1dpZHRoP3MuY29udGVudFN0YXJ0UG9zLmxlZnQrcy5kaXN0YW5jZVg6cy5jb250ZW50U3RhcnRQb3MubGVmdCxlPXMuY29udGVudFN0YXJ0UG9zLnRvcCtzLmRpc3RhbmNlWSxpPXMubGltaXRNb3ZlbWVudCh0LGUscy5jb250ZW50U3RhcnRQb3Mud2lkdGgscy5jb250ZW50U3RhcnRQb3MuaGVpZ2h0KSxpLnNjYWxlWD1zLmNvbnRlbnRTdGFydFBvcy5zY2FsZVgsaS5zY2FsZVk9cy5jb250ZW50U3RhcnRQb3Muc2NhbGVZLHMuY29udGVudExhc3RQb3M9aSxzLnJlcXVlc3RJZCYmKGEocy5yZXF1ZXN0SWQpLHMucmVxdWVzdElkPW51bGwpLHMucmVxdWVzdElkPW8oZnVuY3Rpb24oKXtuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShzLiRjb250ZW50LHMuY29udGVudExhc3RQb3MpfSl9LHUucHJvdG90eXBlLmxpbWl0TW92ZW1lbnQ9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGEsaSxzLHIsYz10aGlzLGw9Yy5jYW52YXNXaWR0aCx1PWMuY2FudmFzSGVpZ2h0LGQ9Yy5jb250ZW50U3RhcnRQb3MubGVmdCxmPWMuY29udGVudFN0YXJ0UG9zLnRvcCxwPWMuZGlzdGFuY2VYLGg9Yy5kaXN0YW5jZVk7cmV0dXJuIGE9TWF0aC5tYXgoMCwuNSpsLS41Km4pLGk9TWF0aC5tYXgoMCwuNSp1LS41Km8pLHM9TWF0aC5taW4obC1uLC41KmwtLjUqbikscj1NYXRoLm1pbih1LW8sLjUqdS0uNSpvKSxuPmwmJihwPjAmJnQ+YSYmKHQ9YS0xK01hdGgucG93KC1hK2QrcCwuOCl8fDApLHA8MCYmdDxzJiYodD1zKzEtTWF0aC5wb3cocy1kLXAsLjgpfHwwKSksbz51JiYoaD4wJiZlPmkmJihlPWktMStNYXRoLnBvdygtaStmK2gsLjgpfHwwKSxoPDAmJmU8ciYmKGU9cisxLU1hdGgucG93KHItZi1oLC44KXx8MCkpLHt0b3A6ZSxsZWZ0OnR9fSx1LnByb3RvdHlwZS5saW1pdFBvc2l0aW9uPWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBhPXRoaXMsaT1hLmNhbnZhc1dpZHRoLHM9YS5jYW52YXNIZWlnaHQ7cmV0dXJuIG4+aT8odD10PjA/MDp0LHQ9dDxpLW4/aS1uOnQpOnQ9TWF0aC5tYXgoMCxpLzItbi8yKSxvPnM/KGU9ZT4wPzA6ZSxlPWU8cy1vP3MtbzplKTplPU1hdGgubWF4KDAscy8yLW8vMikse3RvcDplLGxlZnQ6dH19LHUucHJvdG90eXBlLm9uWm9vbT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsaT1lLmNvbnRlbnRTdGFydFBvcy53aWR0aCxyPWUuY29udGVudFN0YXJ0UG9zLmhlaWdodCxjPWUuY29udGVudFN0YXJ0UG9zLmxlZnQsbD1lLmNvbnRlbnRTdGFydFBvcy50b3AsdT1zKGUubmV3UG9pbnRzWzBdLGUubmV3UG9pbnRzWzFdKSxkPXUvZS5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMsZj1NYXRoLmZsb29yKGkqZCkscD1NYXRoLmZsb29yKHIqZCksaD0oaS1mKSplLnBlcmNlbnRhZ2VPZkltYWdlQXRQaW5jaFBvaW50WCxnPShyLXApKmUucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZLGI9KGUubmV3UG9pbnRzWzBdLngrZS5uZXdQb2ludHNbMV0ueCkvMi1uKHQpLnNjcm9sbExlZnQoKSxtPShlLm5ld1BvaW50c1swXS55K2UubmV3UG9pbnRzWzFdLnkpLzItbih0KS5zY3JvbGxUb3AoKSx5PWItZS5jZW50ZXJQb2ludFN0YXJ0WCx2PW0tZS5jZW50ZXJQb2ludFN0YXJ0WSx4PWMrKGgreSksdz1sKyhnK3YpLCQ9e3RvcDp3LGxlZnQ6eCxzY2FsZVg6ZS5jb250ZW50U3RhcnRQb3Muc2NhbGVYKmQsc2NhbGVZOmUuY29udGVudFN0YXJ0UG9zLnNjYWxlWSpkfTtlLmNhblRhcD0hMSxlLm5ld1dpZHRoPWYsZS5uZXdIZWlnaHQ9cCxlLmNvbnRlbnRMYXN0UG9zPSQsZS5yZXF1ZXN0SWQmJihhKGUucmVxdWVzdElkKSxlLnJlcXVlc3RJZD1udWxsKSxlLnJlcXVlc3RJZD1vKGZ1bmN0aW9uKCl7bi5mYW5jeWJveC5zZXRUcmFuc2xhdGUoZS4kY29udGVudCxlLmNvbnRlbnRMYXN0UG9zKX0pfSx1LnByb3RvdHlwZS5vbnRvdWNoZW5kPWZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMscz1NYXRoLm1heCgobmV3IERhdGUpLmdldFRpbWUoKS1vLnN0YXJ0VGltZSwxKSxyPW8uaXNTd2lwaW5nLGM9by5pc1Bhbm5pbmcsbD1vLmlzWm9vbWluZztyZXR1cm4gby5lbmRQb2ludHM9aSh0KSxvLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1jb250cm9scy0taXNHcmFiYmluZ1wiKSxuKGUpLm9mZihcIi5mYi50b3VjaFwiKSxvLnJlcXVlc3RJZCYmKGEoby5yZXF1ZXN0SWQpLG8ucmVxdWVzdElkPW51bGwpLG8uaXNTd2lwaW5nPSExLG8uaXNQYW5uaW5nPSExLG8uaXNab29taW5nPSExLG8uY2FuVGFwP28ub25UYXAodCk6KG8uc3BlZWQ9MzY2LG8udmVsb2NpdHlYPW8uZGlzdGFuY2VYL3MqLjUsby52ZWxvY2l0eVk9by5kaXN0YW5jZVkvcyouNSxvLnNwZWVkWD1NYXRoLm1heCguNSpvLnNwZWVkLE1hdGgubWluKDEuNSpvLnNwZWVkLDEvTWF0aC5hYnMoby52ZWxvY2l0eVgpKm8uc3BlZWQpKSx2b2lkKGM/by5lbmRQYW5uaW5nKCk6bD9vLmVuZFpvb21pbmcoKTpvLmVuZFN3aXBpbmcocikpKX0sdS5wcm90b3R5cGUuZW5kU3dpcGluZz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG89ITE7ZS5pbnN0YW5jZS5pc1NsaWRpbmc9ITEsZS5zbGlkZXJMYXN0UG9zPW51bGwsXCJ5XCI9PXQmJk1hdGguYWJzKGUuZGlzdGFuY2VZKT41MD8obi5mYW5jeWJveC5hbmltYXRlKGUuaW5zdGFuY2UuY3VycmVudC4kc2xpZGUse3RvcDplLnNsaWRlclN0YXJ0UG9zLnRvcCtlLmRpc3RhbmNlWSsxNTAqZS52ZWxvY2l0eVksb3BhY2l0eTowfSwxNTApLG89ZS5pbnN0YW5jZS5jbG9zZSghMCwzMDApKTpcInhcIj09dCYmZS5kaXN0YW5jZVg+NTAmJmUuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoPjE/bz1lLmluc3RhbmNlLnByZXZpb3VzKGUuc3BlZWRYKTpcInhcIj09dCYmZS5kaXN0YW5jZVg8LTUwJiZlLmluc3RhbmNlLmdyb3VwLmxlbmd0aD4xJiYobz1lLmluc3RhbmNlLm5leHQoZS5zcGVlZFgpKSxvIT09ITF8fFwieFwiIT10JiZcInlcIiE9dHx8ZS5pbnN0YW5jZS5qdW1wVG8oZS5pbnN0YW5jZS5jdXJyZW50LmluZGV4LDE1MCksZS4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2xpZGluZ1wiKX0sdS5wcm90b3R5cGUuZW5kUGFubmluZz1mdW5jdGlvbigpe3ZhciB0LGUsbyxhPXRoaXM7YS5jb250ZW50TGFzdFBvcyYmKGEub3B0cy5tb21lbnR1bT09PSExPyh0PWEuY29udGVudExhc3RQb3MubGVmdCxlPWEuY29udGVudExhc3RQb3MudG9wKToodD1hLmNvbnRlbnRMYXN0UG9zLmxlZnQrYS52ZWxvY2l0eVgqYS5zcGVlZCxlPWEuY29udGVudExhc3RQb3MudG9wK2EudmVsb2NpdHlZKmEuc3BlZWQpLG89YS5saW1pdFBvc2l0aW9uKHQsZSxhLmNvbnRlbnRTdGFydFBvcy53aWR0aCxhLmNvbnRlbnRTdGFydFBvcy5oZWlnaHQpLG8ud2lkdGg9YS5jb250ZW50U3RhcnRQb3Mud2lkdGgsby5oZWlnaHQ9YS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0LG4uZmFuY3lib3guYW5pbWF0ZShhLiRjb250ZW50LG8sMzMwKSl9LHUucHJvdG90eXBlLmVuZFpvb21pbmc9ZnVuY3Rpb24oKXt2YXIgdCxlLG8sYSxpPXRoaXMscz1pLmluc3RhbmNlLmN1cnJlbnQscj1pLm5ld1dpZHRoLGM9aS5uZXdIZWlnaHQ7aS5jb250ZW50TGFzdFBvcyYmKHQ9aS5jb250ZW50TGFzdFBvcy5sZWZ0LGU9aS5jb250ZW50TGFzdFBvcy50b3AsYT17dG9wOmUsbGVmdDp0LHdpZHRoOnIsaGVpZ2h0OmMsc2NhbGVYOjEsc2NhbGVZOjF9LG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKGkuJGNvbnRlbnQsYSkscjxpLmNhbnZhc1dpZHRoJiZjPGkuY2FudmFzSGVpZ2h0P2kuaW5zdGFuY2Uuc2NhbGVUb0ZpdCgxNTApOnI+cy53aWR0aHx8Yz5zLmhlaWdodD9pLmluc3RhbmNlLnNjYWxlVG9BY3R1YWwoaS5jZW50ZXJQb2ludFN0YXJ0WCxpLmNlbnRlclBvaW50U3RhcnRZLDE1MCk6KG89aS5saW1pdFBvc2l0aW9uKHQsZSxyLGMpLG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKGkuY29udGVudCxuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShpLiRjb250ZW50KSksbi5mYW5jeWJveC5hbmltYXRlKGkuJGNvbnRlbnQsbywxNTApKSl9LHUucHJvdG90eXBlLm9uVGFwPWZ1bmN0aW9uKHQpe3ZhciBlLG89dGhpcyxhPW4odC50YXJnZXQpLHM9by5pbnN0YW5jZSxyPXMuY3VycmVudCxjPXQmJmkodCl8fG8uc3RhcnRQb2ludHMsbD1jWzBdP2NbMF0ueC1vLiRzdGFnZS5vZmZzZXQoKS5sZWZ0OjAsdT1jWzBdP2NbMF0ueS1vLiRzdGFnZS5vZmZzZXQoKS50b3A6MCxkPWZ1bmN0aW9uKGUpe3ZhciBhPXIub3B0c1tlXTtpZihuLmlzRnVuY3Rpb24oYSkmJihhPWEuYXBwbHkocyxbcix0XSkpLGEpc3dpdGNoKGEpe2Nhc2VcImNsb3NlXCI6cy5jbG9zZShvLnN0YXJ0RXZlbnQpO2JyZWFrO2Nhc2VcInRvZ2dsZUNvbnRyb2xzXCI6cy50b2dnbGVDb250cm9scyghMCk7YnJlYWs7Y2FzZVwibmV4dFwiOnMubmV4dCgpO2JyZWFrO2Nhc2VcIm5leHRPckNsb3NlXCI6cy5ncm91cC5sZW5ndGg+MT9zLm5leHQoKTpzLmNsb3NlKG8uc3RhcnRFdmVudCk7YnJlYWs7Y2FzZVwiem9vbVwiOlwiaW1hZ2VcIj09ci50eXBlJiYoci5pc0xvYWRlZHx8ci4kZ2hvc3QpJiYocy5jYW5QYW4oKT9zLnNjYWxlVG9GaXQoKTpzLmlzU2NhbGVkRG93bigpP3Muc2NhbGVUb0FjdHVhbChsLHUpOnMuZ3JvdXAubGVuZ3RoPDImJnMuY2xvc2Uoby5zdGFydEV2ZW50KSl9fTtpZighKHQub3JpZ2luYWxFdmVudCYmMj09dC5vcmlnaW5hbEV2ZW50LmJ1dHRvbnx8cy5pc1NsaWRpbmd8fGw+YVswXS5jbGllbnRXaWR0aCthLm9mZnNldCgpLmxlZnQpKXtpZihhLmlzKFwiLmZhbmN5Ym94LWJnLC5mYW5jeWJveC1pbm5lciwuZmFuY3lib3gtb3V0ZXIsLmZhbmN5Ym94LWNvbnRhaW5lclwiKSllPVwiT3V0c2lkZVwiO2Vsc2UgaWYoYS5pcyhcIi5mYW5jeWJveC1zbGlkZVwiKSllPVwiU2xpZGVcIjtlbHNle2lmKCFzLmN1cnJlbnQuJGNvbnRlbnR8fCFzLmN1cnJlbnQuJGNvbnRlbnQuaGFzKHQudGFyZ2V0KS5sZW5ndGgpcmV0dXJuO2U9XCJDb250ZW50XCJ9aWYoby50YXBwZWQpe2lmKGNsZWFyVGltZW91dChvLnRhcHBlZCksby50YXBwZWQ9bnVsbCxNYXRoLmFicyhsLW8udGFwWCk+NTB8fE1hdGguYWJzKHUtby50YXBZKT41MHx8cy5pc1NsaWRpbmcpcmV0dXJuIHRoaXM7ZChcImRibGNsaWNrXCIrZSl9ZWxzZSBvLnRhcFg9bCxvLnRhcFk9dSxyLm9wdHNbXCJkYmxjbGlja1wiK2VdJiZyLm9wdHNbXCJkYmxjbGlja1wiK2VdIT09ci5vcHRzW1wiY2xpY2tcIitlXT9vLnRhcHBlZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by50YXBwZWQ9bnVsbCxkKFwiY2xpY2tcIitlKX0sMzAwKTpkKFwiY2xpY2tcIitlKTtyZXR1cm4gdGhpc319LG4oZSkub24oXCJvbkFjdGl2YXRlLmZiXCIsZnVuY3Rpb24odCxlKXtlJiYhZS5HdWVzdHVyZXMmJihlLkd1ZXN0dXJlcz1uZXcgdShlKSl9KSxuKGUpLm9uKFwiYmVmb3JlQ2xvc2UuZmJcIixmdW5jdGlvbih0LGUpe2UmJmUuR3Vlc3R1cmVzJiZlLkd1ZXN0dXJlcy5kZXN0cm95KCl9KX0od2luZG93LGRvY3VtZW50LHdpbmRvdy5qUXVlcnl8fGpRdWVyeSksZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtlLmV4dGVuZCghMCxlLmZhbmN5Ym94LmRlZmF1bHRzLHtidG5UcGw6e3NsaWRlU2hvdzonPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXBsYXkgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIGQ9XCJNMTMsMTIgTDI3LDIwIEwxMywyNyBaXCIgLz48cGF0aCBkPVwiTTE1LDEwIHYxOSBNMjMsMTAgdjE5XCIgLz48L3N2Zz48L2J1dHRvbj4nfSxzbGlkZVNob3c6e2F1dG9TdGFydDohMSxzcGVlZDozZTN9fSk7dmFyIG49ZnVuY3Rpb24odCl7dGhpcy5pbnN0YW5jZT10LHRoaXMuaW5pdCgpfTtlLmV4dGVuZChuLnByb3RvdHlwZSx7dGltZXI6bnVsbCxpc0FjdGl2ZTohMSwkYnV0dG9uOm51bGwsaW5pdDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC4kYnV0dG9uPXQuaW5zdGFuY2UuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtcGxheV1cIikub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7dC50b2dnbGUoKX0pLCh0Lmluc3RhbmNlLmdyb3VwLmxlbmd0aDwyfHwhdC5pbnN0YW5jZS5ncm91cFt0Lmluc3RhbmNlLmN1cnJJbmRleF0ub3B0cy5zbGlkZVNob3cpJiZ0LiRidXR0b24uaGlkZSgpfSxzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztlLmluc3RhbmNlJiZlLmluc3RhbmNlLmN1cnJlbnQmJih0PT09ITB8fGUuaW5zdGFuY2UuY3VycmVudC5vcHRzLmxvb3B8fGUuaW5zdGFuY2UuY3VyckluZGV4PGUuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoLTEpP2UudGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe2UuaXNBY3RpdmUmJmUuaW5zdGFuY2UuanVtcFRvKChlLmluc3RhbmNlLmN1cnJJbmRleCsxKSVlLmluc3RhbmNlLmdyb3VwLmxlbmd0aCl9LGUuaW5zdGFuY2UuY3VycmVudC5vcHRzLnNsaWRlU2hvdy5zcGVlZCk6KGUuc3RvcCgpLGUuaW5zdGFuY2UuaWRsZVNlY29uZHNDb3VudGVyPTAsZS5pbnN0YW5jZS5zaG93Q29udHJvbHMoKSl9LGNsZWFyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztjbGVhclRpbWVvdXQodC50aW1lciksdC50aW1lcj1udWxsfSxzdGFydDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lmluc3RhbmNlLmN1cnJlbnQ7ZSYmKHQuaXNBY3RpdmU9ITAsdC4kYnV0dG9uLmF0dHIoXCJ0aXRsZVwiLGUub3B0cy5pMThuW2Uub3B0cy5sYW5nXS5QTEFZX1NUT1ApLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wYXVzZVwiKSx0LnNldCghMCkpfSxzdG9wOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuaW5zdGFuY2UuY3VycmVudDt0LmNsZWFyKCksdC4kYnV0dG9uLmF0dHIoXCJ0aXRsZVwiLGUub3B0cy5pMThuW2Uub3B0cy5sYW5nXS5QTEFZX1NUQVJUKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tcGF1c2VcIikuYWRkQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBsYXlcIiksdC5pc0FjdGl2ZT0hMX0sdG9nZ2xlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzQWN0aXZlP3Quc3RvcCgpOnQuc3RhcnQoKX19KSxlKHQpLm9uKHtcIm9uSW5pdC5mYlwiOmZ1bmN0aW9uKHQsZSl7ZSYmIWUuU2xpZGVTaG93JiYoZS5TbGlkZVNob3c9bmV3IG4oZSkpfSxcImJlZm9yZVNob3cuZmJcIjpmdW5jdGlvbih0LGUsbixvKXt2YXIgYT1lJiZlLlNsaWRlU2hvdztvP2EmJm4ub3B0cy5zbGlkZVNob3cuYXV0b1N0YXJ0JiZhLnN0YXJ0KCk6YSYmYS5pc0FjdGl2ZSYmYS5jbGVhcigpfSxcImFmdGVyU2hvdy5mYlwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1lJiZlLlNsaWRlU2hvdztvJiZvLmlzQWN0aXZlJiZvLnNldCgpfSxcImFmdGVyS2V5ZG93bi5mYlwiOmZ1bmN0aW9uKG4sbyxhLGkscyl7dmFyIHI9byYmby5TbGlkZVNob3c7IXJ8fCFhLm9wdHMuc2xpZGVTaG93fHw4MCE9PXMmJjMyIT09c3x8ZSh0LmFjdGl2ZUVsZW1lbnQpLmlzKFwiYnV0dG9uLGEsaW5wdXRcIil8fChpLnByZXZlbnREZWZhdWx0KCksci50b2dnbGUoKSl9LFwiYmVmb3JlQ2xvc2UuZmIgb25EZWFjdGl2YXRlLmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZlLlNsaWRlU2hvdztuJiZuLnN0b3AoKX19KSxlKHQpLm9uKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIG49ZS5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLG89biYmbi5TbGlkZVNob3c7byYmby5pc0FjdGl2ZSYmKHQuaGlkZGVuP28uY2xlYXIoKTpvLnNldCgpKX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZSxuLG8sYT1bW1wicmVxdWVzdEZ1bGxzY3JlZW5cIixcImV4aXRGdWxsc2NyZWVuXCIsXCJmdWxsc2NyZWVuRWxlbWVudFwiLFwiZnVsbHNjcmVlbkVuYWJsZWRcIixcImZ1bGxzY3JlZW5jaGFuZ2VcIixcImZ1bGxzY3JlZW5lcnJvclwiXSxbXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiLFwid2Via2l0RXhpdEZ1bGxzY3JlZW5cIixcIndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50XCIsXCJ3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZFwiLFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFwid2Via2l0ZnVsbHNjcmVlbmVycm9yXCJdLFtcIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuXCIsXCJ3ZWJraXRDYW5jZWxGdWxsU2NyZWVuXCIsXCJ3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnRcIixcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiXSxbXCJtb3pSZXF1ZXN0RnVsbFNjcmVlblwiLFwibW96Q2FuY2VsRnVsbFNjcmVlblwiLFwibW96RnVsbFNjcmVlbkVsZW1lbnRcIixcIm1vekZ1bGxTY3JlZW5FbmFibGVkXCIsXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsXCJtb3pmdWxsc2NyZWVuZXJyb3JcIl0sW1wibXNSZXF1ZXN0RnVsbHNjcmVlblwiLFwibXNFeGl0RnVsbHNjcmVlblwiLFwibXNGdWxsc2NyZWVuRWxlbWVudFwiLFwibXNGdWxsc2NyZWVuRW5hYmxlZFwiLFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCIsXCJNU0Z1bGxzY3JlZW5FcnJvclwiXV0saT17fTtmb3Iobj0wO248YS5sZW5ndGg7bisrKWlmKGU9YVtuXSxlJiZlWzFdaW4gdCl7Zm9yKG89MDtvPGUubGVuZ3RoO28rKylpW2FbMF1bb11dPWVbb107cmV0dXJuIGl9cmV0dXJuITF9KCk7aWYoIW4pcmV0dXJuIHZvaWQoZSYmZS5mYW5jeWJveCYmKGUuZmFuY3lib3guZGVmYXVsdHMuYnRuVHBsLmZ1bGxTY3JlZW49ITEpKTt2YXIgbz17cmVxdWVzdDpmdW5jdGlvbihlKXtlPWV8fHQuZG9jdW1lbnRFbGVtZW50LGVbbi5yZXF1ZXN0RnVsbHNjcmVlbl0oZS5BTExPV19LRVlCT0FSRF9JTlBVVCl9LGV4aXQ6ZnVuY3Rpb24oKXt0W24uZXhpdEZ1bGxzY3JlZW5dKCl9LHRvZ2dsZTpmdW5jdGlvbihlKXtlPWV8fHQuZG9jdW1lbnRFbGVtZW50LHRoaXMuaXNGdWxsc2NyZWVuKCk/dGhpcy5leGl0KCk6dGhpcy5yZXF1ZXN0KGUpfSxpc0Z1bGxzY3JlZW46ZnVuY3Rpb24oKXtyZXR1cm4gQm9vbGVhbih0W24uZnVsbHNjcmVlbkVsZW1lbnRdKX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiBCb29sZWFuKHRbbi5mdWxsc2NyZWVuRW5hYmxlZF0pfX07ZS5leHRlbmQoITAsZS5mYW5jeWJveC5kZWZhdWx0cyx7YnRuVHBsOntmdWxsU2NyZWVuOic8YnV0dG9uIGRhdGEtZmFuY3lib3gtZnVsbHNjcmVlbiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWZ1bGxzY3JlZW5cIiB0aXRsZT1cInt7RlVMTF9TQ1JFRU59fVwiPjxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIGQ9XCJNOSwxMiBoMjIgdjE2IGgtMjIgdi0xNiB2MTYgaDIyIHYtMTYgWlwiIC8+PC9zdmc+PC9idXR0b24+J30sZnVsbFNjcmVlbjp7YXV0b1N0YXJ0OiExfX0pLGUodCkub24oe1wib25Jbml0LmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbjtlJiZlLmdyb3VwW2UuY3VyckluZGV4XS5vcHRzLmZ1bGxTY3JlZW4/KG49ZS4kcmVmcy5jb250YWluZXIsbi5vbihcImNsaWNrLmZiLWZ1bGxzY3JlZW5cIixcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIsZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksby50b2dnbGUoblswXSl9KSxlLm9wdHMuZnVsbFNjcmVlbiYmZS5vcHRzLmZ1bGxTY3JlZW4uYXV0b1N0YXJ0PT09ITAmJm8ucmVxdWVzdChuWzBdKSxlLkZ1bGxTY3JlZW49byk6ZSYmZS4kcmVmcy50b29sYmFyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuXVwiKS5oaWRlKCl9LFwiYWZ0ZXJLZXlkb3duLmZiXCI6ZnVuY3Rpb24odCxlLG4sbyxhKXtlJiZlLkZ1bGxTY3JlZW4mJjcwPT09YSYmKG8ucHJldmVudERlZmF1bHQoKSxlLkZ1bGxTY3JlZW4udG9nZ2xlKGUuJHJlZnMuY29udGFpbmVyWzBdKSl9LFwiYmVmb3JlQ2xvc2UuZmJcIjpmdW5jdGlvbih0KXt0JiZ0LkZ1bGxTY3JlZW4mJm8uZXhpdCgpfX0pLGUodCkub24obi5mdWxsc2NyZWVuY2hhbmdlLGZ1bmN0aW9uKCl7dmFyIHQ9by5pc0Z1bGxzY3JlZW4oKSxuPWUuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtuJiYobi5jdXJyZW50JiZcImltYWdlXCI9PT1uLmN1cnJlbnQudHlwZSYmbi5pc0FuaW1hdGluZyYmKG4uY3VycmVudC4kY29udGVudC5jc3MoXCJ0cmFuc2l0aW9uXCIsXCJub25lXCIpLG4uaXNBbmltYXRpbmc9ITEsbi51cGRhdGUoITAsITAsMCkpLG4udHJpZ2dlcihcIm9uRnVsbHNjcmVlbkNoYW5nZVwiLHQpLG4uJHJlZnMuY29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtaXMtZnVsbHNjcmVlblwiLHQpKX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5mYW5jeWJveC5kZWZhdWx0cz1lLmV4dGVuZCghMCx7YnRuVHBsOnt0aHVtYnM6JzxidXR0b24gZGF0YS1mYW5jeWJveC10aHVtYnMgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS10aHVtYnNcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiPjxwYXRoIGQ9XCJNMzAsMzAgaDE0IHYxNCBoLTE0IFogTTUwLDMwIGgxNCB2MTQgaC0xNCBaIE03MCwzMCBoMTQgdjE0IGgtMTQgWiBNMzAsNTAgaDE0IHYxNCBoLTE0IFogTTUwLDUwIGgxNCB2MTQgaC0xNCBaIE03MCw1MCBoMTQgdjE0IGgtMTQgWiBNMzAsNzAgaDE0IHYxNCBoLTE0IFogTTUwLDcwIGgxNCB2MTQgaC0xNCBaIE03MCw3MCBoMTQgdjE0IGgtMTQgWlwiIC8+PC9zdmc+PC9idXR0b24+J30sdGh1bWJzOnthdXRvU3RhcnQ6ITEsaGlkZU9uQ2xvc2U6ITAscGFyZW50RWw6XCIuZmFuY3lib3gtY29udGFpbmVyXCIsYXhpczpcInlcIn19LGUuZmFuY3lib3guZGVmYXVsdHMpO3ZhciBuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdCh0KX07ZS5leHRlbmQobi5wcm90b3R5cGUseyRidXR0b246bnVsbCwkZ3JpZDpudWxsLCRsaXN0Om51bGwsaXNWaXNpYmxlOiExLGlzQWN0aXZlOiExLGluaXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztlLmluc3RhbmNlPXQsdC5UaHVtYnM9ZTt2YXIgbj10Lmdyb3VwWzBdLG89dC5ncm91cFsxXTtlLm9wdHM9dC5ncm91cFt0LmN1cnJJbmRleF0ub3B0cy50aHVtYnMsZS4kYnV0dG9uPXQuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtdGh1bWJzXVwiKSxlLm9wdHMmJm4mJm8mJihcImltYWdlXCI9PW4udHlwZXx8bi5vcHRzLnRodW1ifHxuLm9wdHMuJHRodW1iKSYmKFwiaW1hZ2VcIj09by50eXBlfHxvLm9wdHMudGh1bWJ8fG8ub3B0cy4kdGh1bWIpPyhlLiRidXR0b24uc2hvdygpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2UudG9nZ2xlKCl9KSxlLmlzQWN0aXZlPSEwKTplLiRidXR0b24uaGlkZSgpfSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgdCxuLG89dGhpcyxhPW8uaW5zdGFuY2UsaT1vLm9wdHMucGFyZW50RWw7by4kZ3JpZD1lKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtdGh1bWJzIGZhbmN5Ym94LXRodW1icy0nK28ub3B0cy5heGlzKydcIj48L2Rpdj4nKS5hcHBlbmRUbyhhLiRyZWZzLmNvbnRhaW5lci5maW5kKGkpLmFkZEJhY2soKS5maWx0ZXIoaSkpLHQ9XCI8dWw+XCIsZS5lYWNoKGEuZ3JvdXAsZnVuY3Rpb24oZSxvKXtuPW8ub3B0cy50aHVtYnx8KG8ub3B0cy4kdGh1bWI/by5vcHRzLiR0aHVtYi5hdHRyKFwic3JjXCIpOm51bGwpLG58fFwiaW1hZ2VcIiE9PW8udHlwZXx8KG49by5zcmMpLG4mJm4ubGVuZ3RoJiYodCs9JzxsaSBkYXRhLWluZGV4PVwiJytlKydcIiAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYW5jeWJveC10aHVtYnMtbG9hZGluZ1wiPjxpbWcgZGF0YS1zcmM9XCInK24rJ1wiIC8+PC9saT4nKX0pLHQrPVwiPC91bD5cIixvLiRsaXN0PWUodCkuYXBwZW5kVG8oby4kZ3JpZCkub24oXCJjbGlja1wiLFwibGlcIixmdW5jdGlvbigpe2EuanVtcFRvKGUodGhpcykuZGF0YShcImluZGV4XCIpKX0pLG8uJGxpc3QuZmluZChcImltZ1wiKS5oaWRlKCkub25lKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIHQsbixvLGEsaT1lKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtdGh1bWJzLWxvYWRpbmdcIikscz1pLm91dGVyV2lkdGgoKSxyPWkub3V0ZXJIZWlnaHQoKTt0PXRoaXMubmF0dXJhbFdpZHRofHx0aGlzLndpZHRoLG49dGhpcy5uYXR1cmFsSGVpZ2h0fHx0aGlzLmhlaWdodCxvPXQvcyxhPW4vcixvPj0xJiZhPj0xJiYobz5hPyh0Lz1hLG49cik6KHQ9cyxuLz1vKSksZSh0aGlzKS5jc3Moe3dpZHRoOk1hdGguZmxvb3IodCksaGVpZ2h0Ok1hdGguZmxvb3IobiksXCJtYXJnaW4tdG9wXCI6bj5yP01hdGguZmxvb3IoLjMqci0uMypuKTpNYXRoLmZsb29yKC41KnItLjUqbiksXCJtYXJnaW4tbGVmdFwiOk1hdGguZmxvb3IoLjUqcy0uNSp0KX0pLnNob3coKX0pLmVhY2goZnVuY3Rpb24oKXt0aGlzLnNyYz1lKHRoaXMpLmRhdGEoXCJzcmNcIil9KSxcInhcIj09PW8ub3B0cy5heGlzJiZvLiRsaXN0LndpZHRoKHBhcnNlSW50KG8uJGdyaWQuY3NzKFwicGFkZGluZy1yaWdodFwiKSkrYS5ncm91cC5sZW5ndGgqby4kbGlzdC5jaGlsZHJlbigpLmVxKDApLm91dGVyV2lkdGgoITApK1wicHhcIil9LGZvY3VzOmZ1bmN0aW9uKHQpe3ZhciBlLG4sbz10aGlzLGE9by4kbGlzdDtvLmluc3RhbmNlLmN1cnJlbnQmJihlPWEuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXRodW1icy1hY3RpdmVcIikuZmlsdGVyKCdbZGF0YS1pbmRleD1cIicrby5pbnN0YW5jZS5jdXJyZW50LmluZGV4KydcIl0nKS5hZGRDbGFzcyhcImZhbmN5Ym94LXRodW1icy1hY3RpdmVcIiksbj1lLnBvc2l0aW9uKCksXCJ5XCI9PT1vLm9wdHMuYXhpcyYmKG4udG9wPDB8fG4udG9wPmEuaGVpZ2h0KCktZS5vdXRlckhlaWdodCgpKT9hLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6YS5zY3JvbGxUb3AoKStuLnRvcH0sdCk6XCJ4XCI9PT1vLm9wdHMuYXhpcyYmKG4ubGVmdDxhLnBhcmVudCgpLnNjcm9sbExlZnQoKXx8bi5sZWZ0PmEucGFyZW50KCkuc2Nyb2xsTGVmdCgpKyhhLnBhcmVudCgpLndpZHRoKCktZS5vdXRlcldpZHRoKCkpKSYmYS5wYXJlbnQoKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsTGVmdDpuLmxlZnR9LHQpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LXRodW1ic1wiLHRoaXMuaXNWaXNpYmxlKSx0aGlzLmlzVmlzaWJsZT8odGhpcy4kZ3JpZHx8dGhpcy5jcmVhdGUoKSx0aGlzLmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic1Nob3dcIiksdGhpcy5mb2N1cygwKSk6dGhpcy4kZ3JpZCYmdGhpcy5pbnN0YW5jZS50cmlnZ2VyKFwib25UaHVtYnNIaWRlXCIpLHRoaXMuaW5zdGFuY2UudXBkYXRlKCl9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmlzVmlzaWJsZT0hMSx0aGlzLnVwZGF0ZSgpfSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5pc1Zpc2libGU9ITAsdGhpcy51cGRhdGUoKX0sdG9nZ2xlOmZ1bmN0aW9uKCl7dGhpcy5pc1Zpc2libGU9IXRoaXMuaXNWaXNpYmxlLHRoaXMudXBkYXRlKCl9fSksZSh0KS5vbih7XCJvbkluaXQuZmJcIjpmdW5jdGlvbih0LGUpe3ZhciBvO2UmJiFlLlRodW1icyYmKG89bmV3IG4oZSksby5pc0FjdGl2ZSYmby5vcHRzLmF1dG9TdGFydD09PSEwJiZvLnNob3coKSl9LFwiYmVmb3JlU2hvdy5mYlwiOmZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBhPWUmJmUuVGh1bWJzO2EmJmEuaXNWaXNpYmxlJiZhLmZvY3VzKG8/MDoyNTApfSxcImFmdGVyS2V5ZG93bi5mYlwiOmZ1bmN0aW9uKHQsZSxuLG8sYSl7dmFyIGk9ZSYmZS5UaHVtYnM7aSYmaS5pc0FjdGl2ZSYmNzE9PT1hJiYoby5wcmV2ZW50RGVmYXVsdCgpLGkudG9nZ2xlKCkpfSxcImJlZm9yZUNsb3NlLmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZlLlRodW1icztuJiZuLmlzVmlzaWJsZSYmbi5vcHRzLmhpZGVPbkNsb3NlIT09ITEmJm4uJGdyaWQuaGlkZSgpfX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5KSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7dmFyIGU9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtyZXR1cm4gU3RyaW5nKHQpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0pfWUuZXh0ZW5kKCEwLGUuZmFuY3lib3guZGVmYXVsdHMse2J0blRwbDp7c2hhcmU6JzxidXR0b24gZGF0YS1mYW5jeWJveC1zaGFyZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXNoYXJlXCIgdGl0bGU9XCJ7e1NIQVJFfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBkPVwiTTYsMzAgQzgsMTggMTksMTYgMjMsMTYgTDIzLDE2IEwyMywxMCBMMzMsMjAgTDIzLDI5IEwyMywyNCBDMTksMjQgOCwyNyA2LDMwIFpcIj48L3N2Zz48L2J1dHRvbj4nfSxzaGFyZTp7dHBsOic8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc2hhcmVcIj48aDE+e3tTSEFSRX19PC9oMT48cD48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9e3tzcmN9fVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfYnV0dG9uXCI+PHN2ZyB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCIjM2I1OTk4XCI+PHBhdGggZD1cIk0yNy42IDNoLTIzLjJjLS44IDAtMS40LjYtMS40IDEuNHYyMy4xYzAgLjkuNiAxLjUgMS40IDEuNWgxMi41di0xMC4xaC0zLjR2LTMuOWgzLjR2LTIuOWMwLTMuNCAyLjEtNS4yIDUtNS4yIDEuNCAwIDIuNy4xIDMgLjJ2My41aC0yLjFjLTEuNiAwLTEuOS44LTEuOSAxLjl2Mi41aDMuOWwtLjUgMy45aC0zLjR2MTAuMWg2LjZjLjggMCAxLjQtLjYgMS40LTEuNHYtMjMuMmMuMS0uOC0uNS0xLjQtMS4zLTEuNHpcIj48L3BhdGg+PC9zdmc+PHNwYW4+RmFjZWJvb2s8L3NwYW4+PC9hPjxhIGhyZWY9XCJodHRwczovL3d3dy5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz91cmw9e3tzcmN9fSZhbXA7ZGVzY3JpcHRpb249e3tkZXNjcn19XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9idXR0b25cIj48c3ZnIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIiNjOTIyMjhcIj48cGF0aCBkPVwiTTE2IDNjLTcuMiAwLTEzIDUuOC0xMyAxMyAwIDUuNSAzLjQgMTAuMiA4LjMgMTIuMS0uMS0xLS4yLTIuNiAwLTMuNy4yLTEgMS41LTYuNSAxLjUtNi41cy0uNC0uOC0uNC0xLjljMC0xLjggMS0zLjIgMi40LTMuMiAxLjEgMCAxLjYuOCAxLjYgMS44IDAgMS4xLS43IDIuOC0xLjEgNC4zLS4zIDEuMy42IDIuMyAxLjkgMi4zIDIuMyAwIDQuMS0yLjQgNC4xLTYgMC0zLjEtMi4yLTUuMy01LjQtNS4zLTMuNyAwLTUuOSAyLjgtNS45IDUuNiAwIDEuMS40IDIuMyAxIDMgLjEuMS4xLjIuMS40LS4xLjQtLjMgMS4zLS40IDEuNS0uMS4yLS4yLjMtLjQuMi0xLjYtLjgtMi42LTMuMS0yLjYtNSAwLTQuMSAzLTcuOSA4LjYtNy45IDQuNSAwIDggMy4yIDggNy41IDAgNC41LTIuOCA4LjEtNi43IDguMS0xLjMgMC0yLjYtLjctMy0xLjUgMCAwLS43IDIuNS0uOCAzLjEtLjMgMS4xLTEuMSAyLjUtMS42IDMuNCAxLjIuNCAyLjUuNiAzLjguNiA3LjIgMCAxMy01LjggMTMtMTMgMC03LjEtNS44LTEyLjktMTMtMTIuOXpcIj48L3BhdGg+PC9zdmc+PHNwYW4+UGludGVyZXN0PC9zcGFuPjwvYT48YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPXt7c3JjfX0mYW1wO3RleHQ9e3tkZXNjcn19XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9idXR0b25cIj48c3ZnIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIiMxZGExZjJcIj48cGF0aCBkPVwiTTMwIDcuM2MtMSAuNS0yLjEuOC0zLjMuOSAxLjItLjcgMi4xLTEuOCAyLjUtMy4yLTEuMS43LTIuMyAxLjEtMy42IDEuNC0xLTEuMS0yLjUtMS44LTQuMi0xLjgtMy4yIDAtNS43IDIuNi01LjcgNS43IDAgLjUuMS45LjEgMS4zLTQuOC0uMi05LTIuNS0xMS44LTYtLjUuOS0uOCAxLjktLjggMyAwIDIgMSAzLjggMi42IDQuOC0uOSAwLTEuOC0uMy0yLjYtLjd2LjFjMCAyLjggMiA1LjEgNC42IDUuNi0uNS4xLTEgLjItMS41LjItLjQgMC0uNyAwLTEuMS0uMS43IDIuMyAyLjkgMy45IDUuNCA0LTIgMS41LTQuNCAyLjUtNy4xIDIuNS0uNSAwLS45IDAtMS40LS4xIDIuNSAxLjYgNS42IDIuNiA4LjggMi42IDEwLjYgMCAxNi4zLTguOCAxNi4zLTE2LjN2LS43YzEuMS0xIDItMiAyLjgtMy4yelwiPjwvcGF0aD48L3N2Zz48c3Bhbj5Ud2l0dGVyPC9zcGFuPjwvYT48L3A+PHA+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ7e3NyY19yYXd9fVwiIG9uZm9jdXM9XCJ0aGlzLnNlbGVjdCgpXCIgLz48L3A+PC9kaXY+J319KSxlKHQpLm9uKFwiY2xpY2tcIixcIltkYXRhLWZhbmN5Ym94LXNoYXJlXVwiLGZ1bmN0aW9uKCl7dmFyIHQsbyxhPWUuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTthJiYodD1hLmN1cnJlbnQub3B0cy5oYXNoPT09ITE/YS5jdXJyZW50LnNyYzp3aW5kb3cubG9jYXRpb24sbz1hLmN1cnJlbnQub3B0cy5zaGFyZS50cGwucmVwbGFjZSgvXFx7XFx7c3JjXFx9XFx9L2csZW5jb2RlVVJJQ29tcG9uZW50KHQpKS5yZXBsYWNlKC9cXHtcXHtzcmNfcmF3XFx9XFx9L2csbih0KSkucmVwbGFjZSgvXFx7XFx7ZGVzY3JcXH1cXH0vZyxhLiRjYXB0aW9uP2VuY29kZVVSSUNvbXBvbmVudChhLiRjYXB0aW9uLnRleHQoKSk6XCJcIiksZS5mYW5jeWJveC5vcGVuKHtzcmM6YS50cmFuc2xhdGUoYSxvKSx0eXBlOlwiaHRtbFwiLG9wdHM6e2FuaW1hdGlvbkVmZmVjdDpcImZhZGVcIixhbmltYXRpb25EdXJhdGlvbjoyNTB9fSkpfSl9KGRvY3VtZW50LHdpbmRvdy5qUXVlcnl8fGpRdWVyeSksZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oKXt2YXIgdD1lLmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLG49dC5zcGxpdChcIi1cIiksbz1uLmxlbmd0aD4xJiYvXlxcKz9cXGQrJC8udGVzdChuW24ubGVuZ3RoLTFdKT9wYXJzZUludChuLnBvcCgtMSksMTApfHwxOjEsYT1uLmpvaW4oXCItXCIpO3JldHVybiBvPDEmJihvPTEpLHtoYXNoOnQsaW5kZXg6byxnYWxsZXJ5OmF9fWZ1bmN0aW9uIGEodCl7dmFyIGU7XCJcIiE9PXQuZ2FsbGVyeSYmKGU9bihcIltkYXRhLWZhbmN5Ym94PSdcIituLmVzY2FwZVNlbGVjdG9yKHQuZ2FsbGVyeSkrXCInXVwiKS5lcSh0LmluZGV4LTEpLGUubGVuZ3RofHwoZT1uKFwiI1wiK24uZXNjYXBlU2VsZWN0b3IodC5nYWxsZXJ5KSkpLGUubGVuZ3RoJiYocz0hMSxlLnRyaWdnZXIoXCJjbGlja1wiKSkpfWZ1bmN0aW9uIGkodCl7dmFyIGU7cmV0dXJuISF0JiYoZT10LmN1cnJlbnQ/dC5jdXJyZW50Lm9wdHM6dC5vcHRzLGUuaGFzaHx8KGUuJG9yaWc/ZS4kb3JpZy5kYXRhKFwiZmFuY3lib3hcIik6XCJcIikpfW4uZXNjYXBlU2VsZWN0b3J8fChuLmVzY2FwZVNlbGVjdG9yPWZ1bmN0aW9uKHQpe3ZhciBlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxceDgwLVxcdUZGRkZcXHctXS9nLG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gZT9cIlxcMFwiPT09dD9cIu+/vVwiOnQuc2xpY2UoMCwtMSkrXCJcXFxcXCIrdC5jaGFyQ29kZUF0KHQubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIit0fTtyZXR1cm4odCtcIlwiKS5yZXBsYWNlKGUsbil9KTt2YXIgcz0hMCxyPW51bGwsYz1udWxsO24oZnVuY3Rpb24oKXtuLmZhbmN5Ym94LmRlZmF1bHRzLmhhc2ghPT0hMSYmKG4odCkub24oe1wib25Jbml0LmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbixhO2UuZ3JvdXBbZS5jdXJySW5kZXhdLm9wdHMuaGFzaCE9PSExJiYobj1vKCksYT1pKGUpLGEmJm4uZ2FsbGVyeSYmYT09bi5nYWxsZXJ5JiYoZS5jdXJySW5kZXg9bi5pbmRleC0xKSl9LFwiYmVmb3JlU2hvdy5mYlwiOmZ1bmN0aW9uKG4sbyxhKXt2YXIgbDthJiZhLm9wdHMuaGFzaCE9PSExJiYobD1pKG8pLGwmJlwiXCIhPT1sJiYoZS5sb2NhdGlvbi5oYXNoLmluZGV4T2YobCk8MCYmKG8ub3B0cy5vcmlnSGFzaD1lLmxvY2F0aW9uLmhhc2gpLHI9bCsoby5ncm91cC5sZW5ndGg+MT9cIi1cIisoYS5pbmRleCsxKTpcIlwiKSxcInJlcGxhY2VTdGF0ZVwiaW4gZS5oaXN0b3J5PyhjJiZjbGVhclRpbWVvdXQoYyksYz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5oaXN0b3J5W3M/XCJwdXNoU3RhdGVcIjpcInJlcGxhY2VTdGF0ZVwiXSh7fSx0LnRpdGxlLGUubG9jYXRpb24ucGF0aG5hbWUrZS5sb2NhdGlvbi5zZWFyY2grXCIjXCIrciksYz1udWxsLHM9ITF9LDMwMCkpOmUubG9jYXRpb24uaGFzaD1yKSl9LFwiYmVmb3JlQ2xvc2UuZmJcIjpmdW5jdGlvbihvLGEscyl7dmFyIGwsdTtjJiZjbGVhclRpbWVvdXQoYykscy5vcHRzLmhhc2ghPT0hMSYmKGw9aShhKSx1PWEmJmEub3B0cy5vcmlnSGFzaD9hLm9wdHMub3JpZ0hhc2g6XCJcIixsJiZcIlwiIT09bCYmKFwicmVwbGFjZVN0YXRlXCJpbiBoaXN0b3J5P2UuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sdC50aXRsZSxlLmxvY2F0aW9uLnBhdGhuYW1lK2UubG9jYXRpb24uc2VhcmNoK3UpOihlLmxvY2F0aW9uLmhhc2g9dSxuKGUpLnNjcm9sbFRvcChhLnNjcm9sbFRvcCkuc2Nyb2xsTGVmdChhLnNjcm9sbExlZnQpKSkscj1udWxsKX19KSxuKGUpLm9uKFwiaGFzaGNoYW5nZS5mYlwiLGZ1bmN0aW9uKCl7dmFyIHQ9bygpO24uZmFuY3lib3guZ2V0SW5zdGFuY2UoKT8hcnx8cj09PXQuZ2FsbGVyeStcIi1cIit0LmluZGV4fHwxPT09dC5pbmRleCYmcj09dC5nYWxsZXJ5fHwocj1udWxsLG4uZmFuY3lib3guY2xvc2UoKSk6XCJcIiE9PXQuZ2FsbGVyeSYmYSh0KX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKG8oKSl9LDUwKSl9KX0oZG9jdW1lbnQsd2luZG93LHdpbmRvdy5qUXVlcnl8fGpRdWVyeSk7XHJcbi8qKlxuICogU3dpcGVyIDUuMi4wXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMTkgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogT2N0b2JlciAyNiwgMjAxOVxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuU3dpcGVyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFNTUiBXaW5kb3cgMS4wLjFcbiAgICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vbm9saW1pdHM0d2ViL3Nzci13aW5kb3dcbiAgICpcbiAgICogQ29weXJpZ2h0IDIwMTgsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICAgKlxuICAgKiBSZWxlYXNlZCBvbjogSnVseSAxOCwgMjAxOFxuICAgKi9cbiAgdmFyIGRvYyA9ICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSA/IHtcbiAgICBib2R5OiB7fSxcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9LFxuICAgIGFjdGl2ZUVsZW1lbnQ6IHtcbiAgICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7fSxcbiAgICAgIG5vZGVOYW1lOiAnJyxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JBbGwoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGNyZWF0ZUV2ZW50OiBmdW5jdGlvbiBjcmVhdGVFdmVudCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRFdmVudDogZnVuY3Rpb24gaW5pdEV2ZW50KCkge30sXG4gICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgc2V0QXR0cmlidXRlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoKSB7fSxcbiAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBsb2NhdGlvbjogeyBoYXNoOiAnJyB9LFxuICB9IDogZG9jdW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgd2luID0gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSA/IHtcbiAgICBkb2N1bWVudDogZG9jLFxuICAgIG5hdmlnYXRvcjoge1xuICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7fSxcbiAgICBoaXN0b3J5OiB7fSxcbiAgICBDdXN0b21FdmVudDogZnVuY3Rpb24gQ3VzdG9tRXZlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKCkge30sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIEltYWdlOiBmdW5jdGlvbiBJbWFnZSgpIHt9LFxuICAgIERhdGU6IGZ1bmN0aW9uIERhdGUoKSB7fSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIHNldFRpbWVvdXQoKSB7fSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIGNsZWFyVGltZW91dCgpIHt9LFxuICB9IDogd2luZG93OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgLyoqXG4gICAqIERvbTcgMi4xLjNcbiAgICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICAgKiBodHRwOi8vZnJhbWV3b3JrNy5pby9kb2NzL2RvbS5odG1sXG4gICAqXG4gICAqIENvcHlyaWdodCAyMDE5LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICAgKiBUaGUgaURhbmdlcm8udXNcbiAgICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9cbiAgICpcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUXG4gICAqXG4gICAqIFJlbGVhc2VkIG9uOiBGZWJydWFyeSAxMSwgMjAxOVxuICAgKi9cblxuICB2YXIgRG9tNyA9IGZ1bmN0aW9uIERvbTcoYXJyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIENyZWF0ZSBhcnJheS1saWtlIG9iamVjdFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzZWxmW2ldID0gYXJyW2ldO1xuICAgIH1cbiAgICBzZWxmLmxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgLy8gUmV0dXJuIGNvbGxlY3Rpb24gd2l0aCBtZXRob2RzXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgaWYgKHNlbGVjdG9yICYmICFjb250ZXh0KSB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGVscztcbiAgICAgICAgdmFyIHRlbXBQYXJlbnQ7XG4gICAgICAgIHZhciBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8JykgPj0gMCAmJiBodG1sLmluZGV4T2YoJz4nKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHsgdG9DcmVhdGUgPSAndWwnOyB9XG4gICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHsgdG9DcmVhdGUgPSAndGJvZHknOyB9XG4gICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRkJykgPT09IDAgfHwgaHRtbC5pbmRleE9mKCc8dGgnKSA9PT0gMCkgeyB0b0NyZWF0ZSA9ICd0cic7IH1cbiAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgeyB0b0NyZWF0ZSA9ICd0YWJsZSc7IH1cbiAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHsgdG9DcmVhdGUgPSAnc2VsZWN0JzsgfVxuICAgICAgICAgIHRlbXBQYXJlbnQgPSBkb2MuY3JlYXRlRWxlbWVudCh0b0NyZWF0ZSk7XG4gICAgICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZW1wUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRlbXBQYXJlbnQuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghY29udGV4dCAmJiBzZWxlY3RvclswXSA9PT0gJyMnICYmICFzZWxlY3Rvci5tYXRjaCgvWyAuPD46fl0vKSkge1xuICAgICAgICAgICAgLy8gUHVyZSBJRCBzZWxlY3RvclxuICAgICAgICAgICAgZWxzID0gW2RvYy5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci50cmltKCkuc3BsaXQoJyMnKVsxXSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlciBzZWxlY3RvcnNcbiAgICAgICAgICAgIGVscyA9IChjb250ZXh0IHx8IGRvYykucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvci50cmltKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoZWxzW2ldKSB7IGFyci5wdXNoKGVsc1tpXSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbiB8fCBzZWxlY3RvciA9PT0gZG9jKSB7XG4gICAgICAgIC8vIE5vZGUvZWxlbWVudFxuICAgICAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDAgJiYgc2VsZWN0b3JbMF0ubm9kZVR5cGUpIHtcbiAgICAgICAgLy8gQXJyYXkgb2YgZWxlbWVudHMgb3IgaW5zdGFuY2Ugb2YgRG9tXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGFyci5wdXNoKHNlbGVjdG9yW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcoYXJyKTtcbiAgfVxuXG4gICQuZm4gPSBEb203LnByb3RvdHlwZTtcbiAgJC5DbGFzcyA9IERvbTc7XG4gICQuRG9tNyA9IERvbTc7XG5cbiAgZnVuY3Rpb24gdW5pcXVlKGFycikge1xuICAgIHZhciB1bmlxdWVBcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodW5pcXVlQXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgeyB1bmlxdWVBcnJheS5wdXNoKGFycltpXSk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5O1xuICB9XG5cbiAgLy8gQ2xhc3NlcyBhbmQgYXR0cmlidXRlc1xuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXNbal0uY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykgeyB0aGlzW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbal0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzW2pdLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHsgdGhpc1tqXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbaV0pOyB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghdGhpc1swXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXNbal0uY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykgeyB0aGlzW2pdLmNsYXNzTGlzdC50b2dnbGUoY2xhc3Nlc1tpXSk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gYXR0cihhdHRycywgdmFsdWUpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXR0cnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBHZXQgYXR0clxuICAgICAgaWYgKHRoaXNbMF0pIHsgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTsgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBTZXQgYXR0cnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMkMS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPYmplY3RcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJzKSB7XG4gICAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJzW2F0dHJOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGZ1bmN0aW9uIHJlbW92ZUF0dHIoYXR0cikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZWwgPSB0aGlzWzBdO1xuICAgICAgLy8gR2V0IHZhbHVlXG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgKGtleSBpbiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSkge1xuICAgICAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YUtleSA9IGVsLmdldEF0dHJpYnV0ZSgoXCJkYXRhLVwiICsga2V5KSk7XG4gICAgICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFLZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0IHZhbHVlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBlbCA9IHRoaXNbaV07XG4gICAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHsgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9OyB9XG4gICAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gVHJhbnNmb3Jtc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZnVuY3Rpb24gdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICBlbFN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uICsgXCJtc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgIGVsU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vIEV2ZW50c1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB2YXIgYXNzaWduO1xuXG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgIHZhciBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIHZhciB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV07XG4gICAgdmFyIGxpc3RlbmVyID0gYXJnc1syXTtcbiAgICB2YXIgY2FwdHVyZSA9IGFyZ3NbM107XG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAoYXNzaWduID0gYXJncywgZXZlbnRUeXBlID0gYXNzaWduWzBdLCBsaXN0ZW5lciA9IGFzc2lnblsxXSwgY2FwdHVyZSA9IGFzc2lnblsyXSk7XG4gICAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFjYXB0dXJlKSB7IGNhcHR1cmUgPSBmYWxzZTsgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGl2ZUV2ZW50KGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIGlmICghdGFyZ2V0KSB7IHJldHVybjsgfVxuICAgICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG4gICAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgICAgfVxuICAgICAgaWYgKCQodGFyZ2V0KS5pcyh0YXJnZXRTZWxlY3RvcikpIHsgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpOyB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRhcmdldCkucGFyZW50cygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcGFyZW50cy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgIGlmICgkKHBhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgeyBsaXN0ZW5lci5hcHBseShwYXJlbnRzW2tdLCBldmVudERhdGEpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgdmFyIGV2ZW50RGF0YSA9IGUgJiYgZS50YXJnZXQgPyBlLnRhcmdldC5kb203RXZlbnREYXRhIHx8IFtdIDogW107XG4gICAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgICB9XG4gICAgdmFyIGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuICAgIHZhciBqO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tpXTtcbiAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHZhciBldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnMpIHsgZWwuZG9tN0xpc3RlbmVycyA9IHt9OyB9XG4gICAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzW2V2ZW50XSkgeyBlbC5kb203TGlzdGVuZXJzW2V2ZW50XSA9IFtdOyB9XG4gICAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVFdmVudCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICB2YXIgZXZlbnQkMSA9IGV2ZW50c1tqXTtcbiAgICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7IGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307IH1cbiAgICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50JDFdKSB7IGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50JDFdID0gW107IH1cbiAgICAgICAgICBlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudCQxXS5wdXNoKHtcbiAgICAgICAgICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcbiAgICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50JDEsIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gb2ZmKCkge1xuICAgIHZhciBhc3NpZ247XG5cbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgdmFyIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXTtcbiAgICB2YXIgbGlzdGVuZXIgPSBhcmdzWzJdO1xuICAgIHZhciBjYXB0dXJlID0gYXJnc1szXTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIChhc3NpZ24gPSBhcmdzLCBldmVudFR5cGUgPSBhc3NpZ25bMF0sIGxpc3RlbmVyID0gYXNzaWduWzFdLCBjYXB0dXJlID0gYXNzaWduWzJdKTtcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIWNhcHR1cmUpIHsgY2FwdHVyZSA9IGZhbHNlOyB9XG5cbiAgICB2YXIgZXZlbnRzID0gZXZlbnRUeXBlLnNwbGl0KCcgJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzW2pdO1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSAodm9pZCAwKTtcbiAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgICAgaGFuZGxlcnMgPSBlbC5kb203TGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKHZhciBrID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgayA+PSAwOyBrIC09IDEpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIGV2ZW50cyA9IGFyZ3NbMF0uc3BsaXQoJyAnKTtcbiAgICB2YXIgZXZlbnREYXRhID0gYXJnc1sxXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXNbal07XG4gICAgICAgIHZhciBldnQgPSAodm9pZCAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBldnQgPSBuZXcgd2luLkN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50RGF0YSxcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGV2dC5kZXRhaWwgPSBldmVudERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBhcmdzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSwgZGF0YUluZGV4KSB7IHJldHVybiBkYXRhSW5kZXggPiAwOyB9KTtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gW107XG4gICAgICAgIGRlbGV0ZSBlbC5kb203RXZlbnREYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGNhbGxiYWNrKSB7XG4gICAgdmFyIGV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJ107XG4gICAgdmFyIGRvbSA9IHRoaXM7XG4gICAgdmFyIGk7XG4gICAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7IHJldHVybjsgfVxuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZG9tLm9mZihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiBvdXRlcldpZHRoKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgc3R5bGVzID0gdGhpcy5zdHlsZXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdmFyIHN0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgIHZhciBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gICAgICB2YXIgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICB2YXIgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gZWwgPT09IHdpbiA/IHdpbi5zY3JvbGxZIDogZWwuc2Nyb2xsVG9wO1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSBlbCA9PT0gd2luID8gd2luLnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiAoYm94LnRvcCArIHNjcm9sbFRvcCkgLSBjbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IChib3gubGVmdCArIHNjcm9sbExlZnQpIC0gY2xpZW50TGVmdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gc3R5bGVzKCkge1xuICAgIGlmICh0aGlzWzBdKSB7IHJldHVybiB3aW4uZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTsgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuICBmdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0aGlzWzBdKSB7IHJldHVybiB3aW4uZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgY29sbGVjdGlvbiBwYXNzaW5nIGVsZW1lbnRzIHRvIGBjYWxsYmFja2BcbiAgZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICAgIC8vIERvbid0IGJvdGhlciBjb250aW51aW5nIHdpdGhvdXQgYSBjYWxsYmFja1xuICAgIGlmICghY2FsbGJhY2spIHsgcmV0dXJuIHRoaXM7IH1cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGN1cnJlbnQgY29sbGVjdGlvblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gSWYgdGhlIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNbaV0sIGksIHRoaXNbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAvLyBFbmQgdGhlIGxvb3AgZWFybHlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJldHVybiBgdGhpc2AgdG8gYWxsb3cgY2hhaW5lZCBET00gb3BlcmF0aW9uc1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICAgIHZhciBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICB2YXIgZG9tID0gdGhpcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZG9tW2ldLCBpLCBkb21baV0pKSB7IG1hdGNoZWRJdGVtcy5wdXNoKGRvbVtpXSk7IH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KG1hdGNoZWRJdGVtcyk7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBmdW5jdGlvbiB0ZXh0KHRleHQpIHtcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGNvbXBhcmVXaXRoO1xuICAgIHZhciBpO1xuICAgIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGVsLm1hdGNoZXMpIHsgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpOyB9XG4gICAgICBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHsgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7IH1cbiAgICAgIGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7IHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7IH1cblxuICAgICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciA9PT0gZG9jKSB7IHJldHVybiBlbCA9PT0gZG9jOyB9XG4gICAgZWxzZSBpZiAoc2VsZWN0b3IgPT09IHdpbikgeyByZXR1cm4gZWwgPT09IHdpbjsgfVxuXG4gICAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBpbmRleCgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzWzBdO1xuICAgIHZhciBpO1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaSA9IDA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgeyBpICs9IDE7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBmdW5jdGlvbiBlcShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB0aGlzOyB9XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciByZXR1cm5JbmRleDtcbiAgICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5JbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgICAgaWYgKHJldHVybkluZGV4IDwgMCkgeyByZXR1cm4gbmV3IERvbTcoW10pOyB9XG4gICAgICByZXR1cm4gbmV3IERvbTcoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1tpbmRleF1dKTtcbiAgfVxuICBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIG5ld0NoaWxkO1xuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBhcmdzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICBuZXdDaGlsZCA9IGFyZ3Nba107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuICAgICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGVuZChuZXdDaGlsZCkge1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdGVtcERpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZFtqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHsgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pOyB9XG4gICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICB9XG4gIGZ1bmN0aW9uIG5leHRBbGwoc2VsZWN0b3IpIHtcbiAgICB2YXIgbmV4dEVscyA9IFtdO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgaWYgKCFlbCkgeyByZXR1cm4gbmV3IERvbTcoW10pOyB9XG4gICAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgdmFyIG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChuZXh0KS5pcyhzZWxlY3RvcikpIHsgbmV4dEVscy5wdXNoKG5leHQpOyB9XG4gICAgICB9IGVsc2UgeyBuZXh0RWxzLnB1c2gobmV4dCk7IH1cbiAgICAgIGVsID0gbmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KG5leHRFbHMpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXYoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmICQoZWwucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEb203KFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHsgcmV0dXJuIG5ldyBEb203KFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7IH1cbiAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gIH1cbiAgZnVuY3Rpb24gcHJldkFsbChzZWxlY3Rvcikge1xuICAgIHZhciBwcmV2RWxzID0gW107XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKSB7IHJldHVybiBuZXcgRG9tNyhbXSk7IH1cbiAgICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgdmFyIHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQocHJldikuaXMoc2VsZWN0b3IpKSB7IHByZXZFbHMucHVzaChwcmV2KTsgfVxuICAgICAgfSBlbHNlIHsgcHJldkVscy5wdXNoKHByZXYpOyB9XG4gICAgICBlbCA9IHByZXY7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhwcmV2RWxzKTtcbiAgfVxuICBmdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKSB7IHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICQodW5pcXVlKHBhcmVudHMpKTtcbiAgfVxuICBmdW5jdGlvbiBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXNbaV0ucGFyZW50Tm9kZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoJChwYXJlbnQpLmlzKHNlbGVjdG9yKSkgeyBwYXJlbnRzLnB1c2gocGFyZW50KTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJCh1bmlxdWUocGFyZW50cykpO1xuICB9XG4gIGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2xvc2VzdCA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICB9XG4gICAgaWYgKCFjbG9zZXN0LmlzKHNlbGVjdG9yKSkge1xuICAgICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gICAgfVxuICAgIHJldHVybiBjbG9zZXN0O1xuICB9XG4gIGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGZvdW5kID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KGZvdW5kRWxlbWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZE5vZGVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxKSB7IGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7IH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxICYmICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcodW5pcXVlKGNoaWxkcmVuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSkgeyB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gYWRkKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciBkb20gPSB0aGlzO1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgdG9BZGQgPSAkKGFyZ3NbaV0pO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHRvQWRkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGRvbVtkb20ubGVuZ3RoXSA9IHRvQWRkW2pdO1xuICAgICAgICBkb20ubGVuZ3RoICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH1cblxuICB2YXIgTWV0aG9kcyA9IHtcbiAgICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICAgIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gICAgYXR0cjogYXR0cixcbiAgICByZW1vdmVBdHRyOiByZW1vdmVBdHRyLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgICBvbjogb24sXG4gICAgb2ZmOiBvZmYsXG4gICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLFxuICAgIG91dGVyV2lkdGg6IG91dGVyV2lkdGgsXG4gICAgb3V0ZXJIZWlnaHQ6IG91dGVySGVpZ2h0LFxuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIGNzczogY3NzLFxuICAgIGVhY2g6IGVhY2gsXG4gICAgaHRtbDogaHRtbCxcbiAgICB0ZXh0OiB0ZXh0LFxuICAgIGlzOiBpcyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgZXE6IGVxLFxuICAgIGFwcGVuZDogYXBwZW5kLFxuICAgIHByZXBlbmQ6IHByZXBlbmQsXG4gICAgbmV4dDogbmV4dCxcbiAgICBuZXh0QWxsOiBuZXh0QWxsLFxuICAgIHByZXY6IHByZXYsXG4gICAgcHJldkFsbDogcHJldkFsbCxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBwYXJlbnRzOiBwYXJlbnRzLFxuICAgIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gICAgZmluZDogZmluZCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgYWRkOiBhZGQsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICQuZm5bbWV0aG9kTmFtZV0gPSAkLmZuW21ldGhvZE5hbWVdIHx8IE1ldGhvZHNbbWV0aG9kTmFtZV07XG4gIH0pO1xuXG4gIHZhciBVdGlscyA9IHtcbiAgICBkZWxldGVQcm9wczogZnVuY3Rpb24gZGVsZXRlUHJvcHMob2JqKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqO1xuICAgICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG5leHRUaWNrOiBmdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgICAgIGlmICggZGVsYXkgPT09IHZvaWQgMCApIGRlbGF5ID0gMDtcblxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KTtcbiAgICB9LFxuICAgIG5vdzogZnVuY3Rpb24gbm93KCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfSxcbiAgICBnZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCwgYXhpcykge1xuICAgICAgaWYgKCBheGlzID09PSB2b2lkIDAgKSBheGlzID0gJ3gnO1xuXG4gICAgICB2YXIgbWF0cml4O1xuICAgICAgdmFyIGN1clRyYW5zZm9ybTtcbiAgICAgIHZhciB0cmFuc2Zvcm1NYXRyaXg7XG5cbiAgICAgIHZhciBjdXJTdHlsZSA9IHdpbi5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcblxuICAgICAgaWYgKHdpbi5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLnJlcGxhY2UoJywnLCAnLicpOyB9KS5qb2luKCcsICcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAgICAgLy8gZW1wdHkgc3RyaW5nIGluc3RlYWQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW4uV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoJ3RyYW5zbGF0ZSgnLCAnbWF0cml4KDEsIDAsIDAsIDEsJyk7XG4gICAgICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgICAgaWYgKHdpbi5XZWJLaXRDU1NNYXRyaXgpIHsgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTsgfVxuICAgICAgICAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgeyBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pOyB9XG4gICAgICAgIC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgICBlbHNlIHsgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pOyB9XG4gICAgICB9XG4gICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgIGlmICh3aW4uV2ViS2l0Q1NTTWF0cml4KSB7IGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IH1cbiAgICAgICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIHsgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTsgfVxuICAgICAgICAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgICAgZWxzZSB7IGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzVdKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xuICAgIH0sXG4gICAgcGFyc2VVcmxRdWVyeTogZnVuY3Rpb24gcGFyc2VVcmxRdWVyeSh1cmwpIHtcbiAgICAgIHZhciBxdWVyeSA9IHt9O1xuICAgICAgdmFyIHVybFRvUGFyc2UgPSB1cmwgfHwgd2luLmxvY2F0aW9uLmhyZWY7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBwYXJhbXM7XG4gICAgICB2YXIgcGFyYW07XG4gICAgICB2YXIgbGVuZ3RoO1xuICAgICAgaWYgKHR5cGVvZiB1cmxUb1BhcnNlID09PSAnc3RyaW5nJyAmJiB1cmxUb1BhcnNlLmxlbmd0aCkge1xuICAgICAgICB1cmxUb1BhcnNlID0gdXJsVG9QYXJzZS5pbmRleE9mKCc/JykgPiAtMSA/IHVybFRvUGFyc2UucmVwbGFjZSgvXFxTKlxcPy8sICcnKSA6ICcnO1xuICAgICAgICBwYXJhbXMgPSB1cmxUb1BhcnNlLnNwbGl0KCcmJykuZmlsdGVyKGZ1bmN0aW9uIChwYXJhbXNQYXJ0KSB7IHJldHVybiBwYXJhbXNQYXJ0ICE9PSAnJzsgfSk7XG4gICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgcGFyYW0gPSBwYXJhbXNbaV0ucmVwbGFjZSgvI1xcUysvZywgJycpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgcXVlcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtWzBdKV0gPSB0eXBlb2YgcGFyYW1bMV0gPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtWzFdKSB8fCAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH0sXG4gICAgaXNPYmplY3Q6IGZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIG8uY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICB9LFxuICAgIGV4dGVuZDogZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuJDEgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4kMS0tICkgYXJnc1sgbGVuJDEgXSA9IGFyZ3VtZW50c1sgbGVuJDEgXTtcblxuICAgICAgdmFyIHRvID0gT2JqZWN0KGFyZ3NbMF0pO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBuZXh0U291cmNlID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKG5leHRTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBuZXh0U291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSk7XG4gICAgICAgICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXggKz0gMSkge1xuICAgICAgICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcbiAgICAgICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICAgIGlmIChVdGlscy5pc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgVXRpbHMuaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5leHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFVdGlscy5pc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgVXRpbHMuaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIFV0aWxzLmV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG87XG4gICAgfSxcbiAgfTtcblxuICB2YXIgU3VwcG9ydCA9IChmdW5jdGlvbiBTdXBwb3J0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3VjaDogKHdpbi5Nb2Rlcm5penIgJiYgd2luLk1vZGVybml6ci50b3VjaCA9PT0gdHJ1ZSkgfHwgKGZ1bmN0aW9uIGNoZWNrVG91Y2goKSB7XG4gICAgICAgIHJldHVybiAhISgod2luLm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApIHx8ICgnb250b3VjaHN0YXJ0JyBpbiB3aW4pIHx8ICh3aW4uRG9jdW1lbnRUb3VjaCAmJiBkb2MgaW5zdGFuY2VvZiB3aW4uRG9jdW1lbnRUb3VjaCkpO1xuICAgICAgfSgpKSxcblxuICAgICAgcG9pbnRlckV2ZW50czogISF3aW4uUG9pbnRlckV2ZW50ICYmICgnbWF4VG91Y2hQb2ludHMnIGluIHdpbi5uYXZpZ2F0b3IpICYmIHdpbi5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwLFxuXG4gICAgICBvYnNlcnZlcjogKGZ1bmN0aW9uIGNoZWNrT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJldHVybiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbiB8fCAnV2Via2l0TXV0YXRpb25PYnNlcnZlcicgaW4gd2luKTtcbiAgICAgIH0oKSksXG5cbiAgICAgIHBhc3NpdmVMaXN0ZW5lcjogKGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIE5vIHN1cHBvcnRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgICAgfSgpKSxcblxuICAgICAgZ2VzdHVyZXM6IChmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW47XG4gICAgICB9KCkpLFxuICAgIH07XG4gIH0oKSk7XG5cbiAgdmFyIFN3aXBlckNsYXNzID0gZnVuY3Rpb24gU3dpcGVyQ2xhc3MocGFyYW1zKSB7XG4gICAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYucGFyYW1zID0gcGFyYW1zO1xuXG4gICAgLy8gRXZlbnRzXG4gICAgc2VsZi5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcblxuICAgIGlmIChzZWxmLnBhcmFtcyAmJiBzZWxmLnBhcmFtcy5vbikge1xuICAgICAgT2JqZWN0LmtleXMoc2VsZi5wYXJhbXMub24pLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICBzZWxmLm9uKGV2ZW50TmFtZSwgc2VsZi5wYXJhbXMub25bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHN0YXRpY0FjY2Vzc29ycyA9IHsgY29tcG9uZW50czogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4gIFN3aXBlckNsYXNzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uIChldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gc2VsZjsgfVxuICAgIHZhciBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHsgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107IH1cbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIFN3aXBlckNsYXNzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSAoZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHNlbGY7IH1cbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgaGFuZGxlci5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuICAgICAgaWYgKG9uY2VIYW5kbGVyLmY3cHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmY3cHJveHk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uY2VIYW5kbGVyLmY3cHJveHkgPSBoYW5kbGVyO1xuICAgIHJldHVybiBzZWxmLm9uKGV2ZW50cywgb25jZUhhbmRsZXIsIHByaW9yaXR5KTtcbiAgfTtcblxuICBTd2lwZXJDbGFzcy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmIChldmVudHMsIGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgeyByZXR1cm4gc2VsZjsgfVxuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyLCBpbmRleCkge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgKGV2ZW50SGFuZGxlci5mN3Byb3h5ICYmIGV2ZW50SGFuZGxlci5mN3Byb3h5ID09PSBoYW5kbGVyKSkge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICBTd2lwZXJDbGFzcy5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQgKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgeyByZXR1cm4gc2VsZjsgfVxuICAgIHZhciBldmVudHM7XG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIGNvbnRleHQ7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG4gICAgdmFyIGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gW107XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICBoYW5kbGVycy5wdXNoKGV2ZW50SGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIFN3aXBlckNsYXNzLnByb3RvdHlwZS51c2VNb2R1bGVzUGFyYW1zID0gZnVuY3Rpb24gdXNlTW9kdWxlc1BhcmFtcyAoaW5zdGFuY2VQYXJhbXMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgeyByZXR1cm47IH1cbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgIC8vIEV4dGVuZCBwYXJhbXNcbiAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgIFV0aWxzLmV4dGVuZChpbnN0YW5jZVBhcmFtcywgbW9kdWxlLnBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU3dpcGVyQ2xhc3MucHJvdG90eXBlLnVzZU1vZHVsZXMgPSBmdW5jdGlvbiB1c2VNb2R1bGVzIChtb2R1bGVzUGFyYW1zKSB7XG4gICAgICBpZiAoIG1vZHVsZXNQYXJhbXMgPT09IHZvaWQgMCApIG1vZHVsZXNQYXJhbXMgPSB7fTtcblxuICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgaWYgKCFpbnN0YW5jZS5tb2R1bGVzKSB7IHJldHVybjsgfVxuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZXNQYXJhbXNbbW9kdWxlTmFtZV0gfHwge307XG4gICAgICAvLyBFeHRlbmQgaW5zdGFuY2UgbWV0aG9kcyBhbmQgcHJvcHNcbiAgICAgIGlmIChtb2R1bGUuaW5zdGFuY2UpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlLmluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVQcm9wTmFtZSkge1xuICAgICAgICAgIHZhciBtb2R1bGVQcm9wID0gbW9kdWxlLmluc3RhbmNlW21vZHVsZVByb3BOYW1lXTtcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW21vZHVsZVByb3BOYW1lXSA9IG1vZHVsZVByb3AuYmluZChpbnN0YW5jZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlW21vZHVsZVByb3BOYW1lXSA9IG1vZHVsZVByb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICAgIGlmIChtb2R1bGUub24gJiYgaW5zdGFuY2Uub24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVFdmVudE5hbWUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5vbihtb2R1bGVFdmVudE5hbWUsIG1vZHVsZS5vblttb2R1bGVFdmVudE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vZHVsZSBjcmVhdGUgY2FsbGJhY2tcbiAgICAgIGlmIChtb2R1bGUuY3JlYXRlKSB7XG4gICAgICAgIG1vZHVsZS5jcmVhdGUuYmluZChpbnN0YW5jZSkobW9kdWxlUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWNBY2Nlc3NvcnMuY29tcG9uZW50cy5zZXQgPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgIHZhciBDbGFzcyA9IHRoaXM7XG4gICAgaWYgKCFDbGFzcy51c2UpIHsgcmV0dXJuOyB9XG4gICAgQ2xhc3MudXNlKGNvbXBvbmVudHMpO1xuICB9O1xuXG4gIFN3aXBlckNsYXNzLmluc3RhbGxNb2R1bGUgPSBmdW5jdGlvbiBpbnN0YWxsTW9kdWxlIChtb2R1bGUpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHBhcmFtc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgIHZhciBDbGFzcyA9IHRoaXM7XG4gICAgaWYgKCFDbGFzcy5wcm90b3R5cGUubW9kdWxlcykgeyBDbGFzcy5wcm90b3R5cGUubW9kdWxlcyA9IHt9OyB9XG4gICAgdmFyIG5hbWUgPSBtb2R1bGUubmFtZSB8fCAoKChPYmplY3Qua2V5cyhDbGFzcy5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RoKSArIFwiX1wiICsgKFV0aWxzLm5vdygpKSkpO1xuICAgIENsYXNzLnByb3RvdHlwZS5tb2R1bGVzW25hbWVdID0gbW9kdWxlO1xuICAgIC8vIFByb3RvdHlwZVxuICAgIGlmIChtb2R1bGUucHJvdG8pIHtcbiAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5wcm90bykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIENsYXNzLnByb3RvdHlwZVtrZXldID0gbW9kdWxlLnByb3RvW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2xhc3NcbiAgICBpZiAobW9kdWxlLnN0YXRpYykge1xuICAgICAgT2JqZWN0LmtleXMobW9kdWxlLnN0YXRpYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIENsYXNzW2tleV0gPSBtb2R1bGUuc3RhdGljW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2FsbGJhY2tcbiAgICBpZiAobW9kdWxlLmluc3RhbGwpIHtcbiAgICAgIG1vZHVsZS5pbnN0YWxsLmFwcGx5KENsYXNzLCBwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gQ2xhc3M7XG4gIH07XG5cbiAgU3dpcGVyQ2xhc3MudXNlID0gZnVuY3Rpb24gdXNlIChtb2R1bGUpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHBhcmFtc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgIHZhciBDbGFzcyA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgbW9kdWxlLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIENsYXNzLmluc3RhbGxNb2R1bGUobSk7IH0pO1xuICAgICAgcmV0dXJuIENsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gQ2xhc3MuaW5zdGFsbE1vZHVsZS5hcHBseShDbGFzcywgWyBtb2R1bGUgXS5jb25jYXQoIHBhcmFtcyApKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggU3dpcGVyQ2xhc3MsIHN0YXRpY0FjY2Vzc29ycyApO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNpemUgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3aWR0aDtcbiAgICB2YXIgaGVpZ2h0O1xuICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVpZ2h0ID0gJGVsWzBdLmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgaWYgKCh3aWR0aCA9PT0gMCAmJiBzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHx8IChoZWlnaHQgPT09IDAgJiYgc3dpcGVyLmlzVmVydGljYWwoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdWJ0cmFjdCBwYWRkaW5nc1xuICAgIHdpZHRoID0gd2lkdGggLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWxlZnQnKSwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1yaWdodCcpLCAxMCk7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1ib3R0b20nKSwgMTApO1xuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcyAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG5cbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciBzd2lwZXJTaXplID0gc3dpcGVyLnNpemU7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyIHdyb25nUlRMID0gc3dpcGVyLndyb25nUlRMO1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgIHZhciBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSkpO1xuICAgIHZhciBzbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc2xpZGVzLmxlbmd0aDtcbiAgICB2YXIgc25hcEdyaWQgPSBbXTtcbiAgICB2YXIgc2xpZGVzR3JpZCA9IFtdO1xuICAgIHZhciBzbGlkZXNTaXplc0dyaWQgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHNsaWRlc0Zvck1hcmdpbihzbGlkZUluZGV4KSB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICBpZiAoc2xpZGVJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG4gICAgaWYgKHR5cGVvZiBvZmZzZXRCZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUuY2FsbChzd2lwZXIpO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlci5jYWxsKHN3aXBlcik7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgIHZhciBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuXG4gICAgdmFyIHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgdmFyIHNsaWRlUG9zaXRpb24gPSAtb2Zmc2V0QmVmb3JlO1xuICAgIHZhciBwcmV2U2xpZGVTaXplID0gMDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgc3BhY2VCZXR3ZWVuID0gKHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwKSAqIHN3aXBlclNpemU7XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjtcblxuICAgIC8vIHJlc2V0IG1hcmdpbnNcbiAgICBpZiAocnRsKSB7IHNsaWRlcy5jc3MoeyBtYXJnaW5MZWZ0OiAnJywgbWFyZ2luVG9wOiAnJyB9KTsgfVxuICAgIGVsc2UgeyBzbGlkZXMuY3NzKHsgbWFyZ2luUmlnaHQ6ICcnLCBtYXJnaW5Cb3R0b206ICcnIH0pOyB9XG5cbiAgICB2YXIgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIGlmIChNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gc2xpZGVzTGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHBhcmFtcy5zbGlkZXNQZXJWaWV3ICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FsYyBzbGlkZXNcbiAgICB2YXIgc2xpZGVTaXplO1xuICAgIHZhciBzbGlkZXNQZXJDb2x1bW4gPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICAgIHZhciBzbGlkZXNQZXJSb3cgPSBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgIHZhciBudW1GdWxsQ29sdW1ucyA9IE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVTaXplID0gMDtcbiAgICAgIHZhciBzbGlkZSA9IHNsaWRlcy5lcShpKTtcbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgICAvLyBTZXQgc2xpZGVzIG9yZGVyXG4gICAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXggPSAodm9pZCAwKTtcbiAgICAgICAgdmFyIGNvbHVtbiA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgcm93ID0gKHZvaWQgMCk7XG4gICAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSkge1xuICAgICAgICAgIHZhciBncm91cEluZGV4ID0gTWF0aC5mbG9vcihpIC8gKHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pKTtcbiAgICAgICAgICB2YXIgc2xpZGVJbmRleEluR3JvdXAgPSBpIC0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbiAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIGdyb3VwSW5kZXg7XG4gICAgICAgICAgdmFyIGNvbHVtbnNJbkdyb3VwID0gZ3JvdXBJbmRleCA9PT0gMFxuICAgICAgICAgICAgPyBwYXJhbXMuc2xpZGVzUGVyR3JvdXBcbiAgICAgICAgICAgIDogTWF0aC5taW4oTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBncm91cEluZGV4ICogc2xpZGVzUGVyQ29sdW1uICogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSAvIHNsaWRlc1BlckNvbHVtbiksIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4SW5Hcm91cCAvIGNvbHVtbnNJbkdyb3VwKTtcbiAgICAgICAgICBjb2x1bW4gPSAoc2xpZGVJbmRleEluR3JvdXAgLSByb3cgKiBjb2x1bW5zSW5Hcm91cCkgKyBncm91cEluZGV4ICogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gICAgICAgICAgbmV3U2xpZGVPcmRlckluZGV4ID0gY29sdW1uICsgKChyb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzKSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgc2xpZGVcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAnLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgJy1tb3otYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAgICctbXMtZmxleC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgJy13ZWJraXQtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAgIG9yZGVyOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgIHJvdyA9IGkgLSAoY29sdW1uICogc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgICBpZiAoY29sdW1uID4gbnVtRnVsbENvbHVtbnMgfHwgKGNvbHVtbiA9PT0gbnVtRnVsbENvbHVtbnMgJiYgcm93ID09PSBzbGlkZXNQZXJDb2x1bW4gLSAxKSkge1xuICAgICAgICAgICAgcm93ICs9IDE7XG4gICAgICAgICAgICBpZiAocm93ID49IHNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyUm93KTtcbiAgICAgICAgICBjb2x1bW4gPSBpIC0gKHJvdyAqIHNsaWRlc1BlclJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGUuY3NzKFxuICAgICAgICAgIChcIm1hcmdpbi1cIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndG9wJyA6ICdsZWZ0JykpLFxuICAgICAgICAgIChyb3cgIT09IDAgJiYgcGFyYW1zLnNwYWNlQmV0d2VlbikgJiYgKCgocGFyYW1zLnNwYWNlQmV0d2VlbikgKyBcInB4XCIpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHNsaWRlLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHsgY29udGludWU7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICB2YXIgc2xpZGVTdHlsZXMgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZVswXSwgbnVsbCk7XG4gICAgICAgIHZhciBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKClcbiAgICAgICAgICAgID8gc2xpZGUub3V0ZXJXaWR0aCh0cnVlKVxuICAgICAgICAgICAgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgICAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1sZWZ0JykpO1xuICAgICAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSk7XG4gICAgICAgICAgICB2YXIgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuICAgICAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nVG9wID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpKTtcbiAgICAgICAgICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSk7XG4gICAgICAgICAgICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpO1xuICAgICAgICAgICAgdmFyIGJveFNpemluZyQxID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuICAgICAgICAgICAgaWYgKGJveFNpemluZyQxICYmIGJveFNpemluZyQxID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICAgICAgc2xpZGVTaXplID0gaGVpZ2h0ICsgbWFyZ2luVG9wICsgbWFyZ2luQm90dG9tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2xpZGVTaXplID0gaGVpZ2h0ICsgcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b20gKyBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHsgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtICgocGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikpIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7IHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTsgfVxuXG4gICAgICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSBzbGlkZVNpemUgKyBcInB4XCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5oZWlnaHQgPSBzbGlkZVNpemUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgICB9XG4gICAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG5cbiAgICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyAoc2xpZGVTaXplIC8gMikgKyAocHJldlNsaWRlU2l6ZSAvIDIpICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSB7IHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gKHN3aXBlclNpemUgLyAyKSAtIHNwYWNlQmV0d2VlbjsgfVxuICAgICAgICBpZiAoaSA9PT0gMCkgeyBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIChzd2lwZXJTaXplIC8gMikgLSBzcGFjZUJldHdlZW47IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHNsaWRlUG9zaXRpb24pIDwgMSAvIDEwMDApIHsgc2xpZGVQb3NpdGlvbiA9IDA7IH1cbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHsgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7IH1cbiAgICAgICAgaWYgKChpbmRleCkgJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHsgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTsgfVxuICAgICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgeyBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTsgfVxuICAgICAgICBpZiAoKGluZGV4KSAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgeyBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pOyB9XG4gICAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci52aXJ0dWFsU2l6ZSArPSBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG5cbiAgICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG5cbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcbiAgICB2YXIgbmV3U2xpZGVzR3JpZDtcblxuICAgIGlmIChcbiAgICAgIHJ0bCAmJiB3cm9uZ1JUTCAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAgICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6ICgoc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKyBcInB4XCIpIH0pO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNldFdyYXBwZXJTaXplKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7ICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6ICgoc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKyBcInB4XCIpIH0pOyB9XG4gICAgICBlbHNlIHsgJHdyYXBwZXJFbC5jc3MoeyBoZWlnaHQ6ICgoc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKyBcInB4XCIpIH0pOyB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICBzd2lwZXIudmlydHVhbFNpemUgPSAoc2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5jZWlsKHN3aXBlci52aXJ0dWFsU2l6ZSAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIC0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHsgJHdyYXBwZXJFbC5jc3MoeyB3aWR0aDogKChzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKSArIFwicHhcIikgfSk7IH1cbiAgICAgIGVsc2UgeyAkd3JhcHBlckVsLmNzcyh7IGhlaWdodDogKChzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKSArIFwicHhcIikgfSk7IH1cbiAgICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBzbmFwR3JpZC5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAgICAgdmFyIHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaSQxXTtcbiAgICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgeyBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pOyB9XG4gICAgICAgICAgaWYgKHNuYXBHcmlkW2kkMV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgeyBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pOyB9XG4gICAgICAgIH1cbiAgICAgICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBsYXN0IGdyaWQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHdpZHRoXG4gICAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkkMiA9IDA7IGkkMiA8IHNuYXBHcmlkLmxlbmd0aDsgaSQyICs9IDEpIHtcbiAgICAgICAgdmFyIHNsaWRlc0dyaWRJdGVtJDEgPSBzbmFwR3JpZFtpJDJdO1xuICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgeyBzbGlkZXNHcmlkSXRlbSQxID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSQxKTsgfVxuICAgICAgICBpZiAoc25hcEdyaWRbaSQyXSA8PSBzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSB7XG4gICAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtJDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG4gICAgICBpZiAoTWF0aC5mbG9vcihzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSAtIE1hdGguZmxvb3Ioc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xuICAgICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc25hcEdyaWQubGVuZ3RoID09PSAwKSB7IHNuYXBHcmlkID0gWzBdOyB9XG5cbiAgICBpZiAocGFyYW1zLnNwYWNlQmV0d2VlbiAhPT0gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICBpZiAocnRsKSB7IHNsaWRlcy5maWx0ZXIoc2xpZGVzRm9yTWFyZ2luKS5jc3MoeyBtYXJnaW5MZWZ0OiAoc3BhY2VCZXR3ZWVuICsgXCJweFwiKSB9KTsgfVxuICAgICAgICBlbHNlIHsgc2xpZGVzLmZpbHRlcihzbGlkZXNGb3JNYXJnaW4pLmNzcyh7IG1hcmdpblJpZ2h0OiAoc3BhY2VCZXR3ZWVuICsgXCJweFwiKSB9KTsgfVxuICAgICAgfSBlbHNlIHsgc2xpZGVzLmZpbHRlcihzbGlkZXNGb3JNYXJnaW4pLmNzcyh7IG1hcmdpbkJvdHRvbTogKHNwYWNlQmV0d2VlbiArIFwicHhcIikgfSk7IH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgICAgdmFyIGFsbFNsaWRlc1NpemUgPSAwO1xuICAgICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAocGFyYW1zLnNwYWNlQmV0d2VlbiA/IHBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKTtcbiAgICAgIH0pO1xuICAgICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICAgdmFyIG1heFNuYXAgPSBhbGxTbGlkZXNTaXplIC0gc3dpcGVyU2l6ZTtcbiAgICAgIHNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICAgIGlmIChzbmFwIDwgMCkgeyByZXR1cm4gLW9mZnNldEJlZm9yZTsgfVxuICAgICAgICBpZiAoc25hcCA+IG1heFNuYXApIHsgcmV0dXJuIG1heFNuYXAgKyBvZmZzZXRBZnRlcjsgfVxuICAgICAgICByZXR1cm4gc25hcDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgICB2YXIgYWxsU2xpZGVzU2l6ZSQxID0gMDtcbiAgICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZVNpemVWYWx1ZSkge1xuICAgICAgICBhbGxTbGlkZXNTaXplJDEgKz0gc2xpZGVTaXplVmFsdWUgKyAocGFyYW1zLnNwYWNlQmV0d2VlbiA/IHBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKTtcbiAgICAgIH0pO1xuICAgICAgYWxsU2xpZGVzU2l6ZSQxIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgICBpZiAoYWxsU2xpZGVzU2l6ZSQxIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICB2YXIgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBhbGxTbGlkZXNTaXplJDEpIC8gMjtcbiAgICAgICAgc25hcEdyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICAgIH0pO1xuICAgICAgICBzbGlkZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXAsIHNuYXBJbmRleCkge1xuICAgICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgIHNsaWRlczogc2xpZGVzLFxuICAgICAgc25hcEdyaWQ6IHNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZDogc2xpZGVzR3JpZCxcbiAgICAgIHNsaWRlc1NpemVzR3JpZDogc2xpZGVzU2l6ZXNHcmlkLFxuICAgIH0pO1xuXG4gICAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZXNMZW5ndGhDaGFuZ2UnKTtcbiAgICB9XG4gICAgaWYgKHNuYXBHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbmFwR3JpZExlbmd0aCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgeyBzd2lwZXIuY2hlY2tPdmVyZmxvdygpOyB9XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgICB9XG4gICAgaWYgKHNsaWRlc0dyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBdXRvSGVpZ2h0IChzcGVlZCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgICB2YXIgbmV3SGVpZ2h0ID0gMDtcbiAgICB2YXIgaTtcbiAgICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIH0gZWxzZSBpZiAoc3BlZWQgPT09IHRydWUpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICAgIH1cbiAgICAvLyBGaW5kIHNsaWRlcyBjdXJyZW50bHkgaW4gdmlld1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCkgeyBicmVhazsgfVxuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKGluZGV4KVswXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KVswXSk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG4gICAgZm9yIChpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZXNbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBoZWlnaHQgPSBhY3RpdmVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIEhlaWdodFxuICAgIGlmIChuZXdIZWlnaHQpIHsgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdoZWlnaHQnLCAobmV3SGVpZ2h0ICsgXCJweFwiKSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyAodHJhbnNsYXRlKSB7XG4gICAgaWYgKCB0cmFuc2xhdGUgPT09IHZvaWQgMCApIHRyYW5zbGF0ZSA9ICh0aGlzICYmIHRoaXMudHJhbnNsYXRlKSB8fCAwO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG5cbiAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcblxuICAgIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgIGlmICh0eXBlb2Ygc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgeyBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7IH1cblxuICAgIHZhciBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICAgIGlmIChydGwpIHsgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlOyB9XG5cbiAgICAvLyBWaXNpYmxlIFNsaWRlc1xuICAgIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuXG4gICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzID0gW107XG4gICAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IChcbiAgICAgICAgKG9mZnNldENlbnRlciArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSkgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldFxuICAgICAgKSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKTtcbiAgICAgIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgIHZhciBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgICB2YXIgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgICAgdmFyIGlzVmlzaWJsZSA9IChzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgc3dpcGVyLnNpemUgLSAxKVxuICAgICAgICAgICAgICAgICAgfHwgKHNsaWRlQWZ0ZXIgPiAxICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUpXG4gICAgICAgICAgICAgICAgICB8fCAoc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHN3aXBlci5zaXplKTtcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgICB9XG4gICAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSAkKHN3aXBlci52aXNpYmxlU2xpZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzICh0cmFuc2xhdGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBtdWx0aXBsaWVyID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgdHJhbnNsYXRlID0gKHN3aXBlciAmJiBzd2lwZXIudHJhbnNsYXRlICYmIChzd2lwZXIudHJhbnNsYXRlICogbXVsdGlwbGllcikpIHx8IDA7XG4gICAgfVxuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3M7XG4gICAgdmFyIGlzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nO1xuICAgIHZhciBpc0VuZCA9IHN3aXBlci5pc0VuZDtcbiAgICB2YXIgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gICAgdmFyIHdhc0VuZCA9IGlzRW5kO1xuICAgIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgICAgaXNFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgIGlzQmVnaW5uaW5nID0gcHJvZ3Jlc3MgPD0gMDtcbiAgICAgIGlzRW5kID0gcHJvZ3Jlc3MgPj0gMTtcbiAgICB9XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgaXNCZWdpbm5pbmc6IGlzQmVnaW5uaW5nLFxuICAgICAgaXNFbmQ6IGlzRW5kLFxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHsgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7IH1cblxuICAgIGlmIChpc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gICAgfVxuICAgIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gICAgfVxuICAgIGlmICgod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZykgfHwgKHdhc0VuZCAmJiAhaXNFbmQpKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZXNDbGFzc2VzICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciByZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gICAgc2xpZGVzLnJlbW92ZUNsYXNzKCgocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpICsgXCIgXCIgKyAocGFyYW1zLnNsaWRlTmV4dENsYXNzKSArIFwiIFwiICsgKHBhcmFtcy5zbGlkZVByZXZDbGFzcykgKyBcIiBcIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcykgKyBcIiBcIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpICsgXCIgXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKSkpO1xuXG4gICAgdmFyIGFjdGl2ZVNsaWRlO1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIGFjdGl2ZVNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgYWN0aXZlSW5kZXggKyBcIlxcXCJdXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICAgIH1cblxuICAgIC8vIEFjdGl2ZSBjbGFzc2VzXG4gICAgYWN0aXZlU2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCI6bm90KC5cIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKSlcbiAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCIuXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKSlcbiAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBOZXh0IFNsaWRlXG4gICAgdmFyIG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRBbGwoKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSkpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgIG5leHRTbGlkZSA9IHNsaWRlcy5lcSgwKTtcbiAgICAgIG5leHRTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgIH1cbiAgICAvLyBQcmV2IFNsaWRlXG4gICAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSkpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgaWYgKHBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgICBwcmV2U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgICAuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiOm5vdCguXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIChuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkgKyBcIlxcXCJdXCIpKVxuICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCIuXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgKG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpKSArIFwiXFxcIl1cIikpXG4gICAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJldlNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAkd3JhcHBlckVsXG4gICAgICAgICAgLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIjpub3QoLlwiICsgKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyAocHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykpICsgXCJcXFwiXVwiKSlcbiAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgICAuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiLlwiICsgKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIChwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkgKyBcIlxcXCJdXCIpKVxuICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4IChuZXdBY3RpdmVJbmRleCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICAgIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQ7XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBwcmV2aW91c0luZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBwcmV2aW91c1JlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgdmFyIHByZXZpb3VzU25hcEluZGV4ID0gc3dpcGVyLnNuYXBJbmRleDtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgICB2YXIgc25hcEluZGV4O1xuICAgIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoKHNsaWRlc0dyaWRbaSArIDFdIC0gc2xpZGVzR3JpZFtpXSkgLyAyKSkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgICAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgeyBhY3RpdmVJbmRleCA9IDA7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNuYXBJbmRleCA9IE1hdGguZmxvb3IoYWN0aXZlSW5kZXggLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgIH1cbiAgICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgeyBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxOyB9XG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgICBzd2lwZXIuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHJlYWwgaW5kZXhcbiAgICB2YXIgcmVhbEluZGV4ID0gcGFyc2VJbnQoc3dpcGVyLnNsaWRlcy5lcShhY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBhY3RpdmVJbmRleCwgMTApO1xuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgc25hcEluZGV4OiBzbmFwSW5kZXgsXG4gICAgICByZWFsSW5kZXg6IHJlYWxJbmRleCxcbiAgICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICAgIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhbEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgfHwgc3dpcGVyLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2xpY2tlZFNsaWRlIChlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHNsaWRlID0gJChlLnRhcmdldCkuY2xvc2VzdCgoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpKSlbMF07XG4gICAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgICBpZiAoc2xpZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHsgc2xpZGVGb3VuZCA9IHRydWU7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludCgkKHNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gJChzbGlkZSkuaW5kZXgoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1cGRhdGUgPSB7XG4gICAgdXBkYXRlU2l6ZTogdXBkYXRlU2l6ZSxcbiAgICB1cGRhdGVTbGlkZXM6IHVwZGF0ZVNsaWRlcyxcbiAgICB1cGRhdGVBdXRvSGVpZ2h0OiB1cGRhdGVBdXRvSGVpZ2h0LFxuICAgIHVwZGF0ZVNsaWRlc09mZnNldDogdXBkYXRlU2xpZGVzT2Zmc2V0LFxuICAgIHVwZGF0ZVNsaWRlc1Byb2dyZXNzOiB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgICB1cGRhdGVQcm9ncmVzczogdXBkYXRlUHJvZ3Jlc3MsXG4gICAgdXBkYXRlU2xpZGVzQ2xhc3NlczogdXBkYXRlU2xpZGVzQ2xhc3NlcyxcbiAgICB1cGRhdGVBY3RpdmVJbmRleDogdXBkYXRlQWN0aXZlSW5kZXgsXG4gICAgdXBkYXRlQ2xpY2tlZFNsaWRlOiB1cGRhdGVDbGlja2VkU2xpZGUsXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlIChheGlzKSB7XG4gICAgaWYgKCBheGlzID09PSB2b2lkIDAgKSBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcblxuICAgIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFRyYW5zbGF0ZSA9IFV0aWxzLmdldFRyYW5zbGF0ZSgkd3JhcHBlckVsWzBdLCBheGlzKTtcbiAgICBpZiAocnRsKSB7IGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTsgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSAodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuICAgIHZhciBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgICB2YXIgeCA9IDA7XG4gICAgdmFyIHkgPSAwO1xuICAgIHZhciB6ID0gMDtcblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHggPSBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gdHJhbnNsYXRlO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgd3JhcHBlckVsW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IC14IDogLXk7XG4gICAgfSBlbHNlIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIFwiICsgeiArIFwicHgpXCIpKTtcbiAgICB9XG4gICAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuICAgIHZhciBuZXdQcm9ncmVzcztcbiAgICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgICBuZXdQcm9ncmVzcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xuICAgIH1cbiAgICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1pblRyYW5zbGF0ZSAoKSB7XG4gICAgcmV0dXJuICgtdGhpcy5zbmFwR3JpZFswXSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXhUcmFuc2xhdGUgKCkge1xuICAgIHJldHVybiAoLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGVUbyAodHJhbnNsYXRlLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCB0cmFuc2xhdGVCb3VuZHMsIGludGVybmFsKSB7XG4gICAgdmFyIG9iajtcblxuICAgIGlmICggdHJhbnNsYXRlID09PSB2b2lkIDAgKSB0cmFuc2xhdGUgPSAwO1xuICAgIGlmICggc3BlZWQgPT09IHZvaWQgMCApIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gICAgaWYgKCBydW5DYWxsYmFja3MgPT09IHZvaWQgMCApIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gICAgaWYgKCB0cmFuc2xhdGVCb3VuZHMgPT09IHZvaWQgMCApIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWU7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcblxuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgIHZhciBtYXhUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgdmFyIG5ld1RyYW5zbGF0ZTtcbiAgICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgeyBuZXdUcmFuc2xhdGUgPSBtaW5UcmFuc2xhdGU7IH1cbiAgICBlbHNlIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlIDwgbWF4VHJhbnNsYXRlKSB7IG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTsgfVxuICAgIGVsc2UgeyBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7IH1cblxuICAgIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICB2YXIgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGlmICh3cmFwcGVyRWwuc2Nyb2xsVG8pIHtcbiAgICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKCBvYmogPSB7fSwgb2JqW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXSA9IC1uZXdUcmFuc2xhdGUsIG9iai5iZWhhdmlvciA9ICdzbW9vdGgnLCBvYmogKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlID0ge1xuICAgIGdldFRyYW5zbGF0ZTogZ2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zbGF0ZTogc2V0VHJhbnNsYXRlLFxuICAgIG1pblRyYW5zbGF0ZTogbWluVHJhbnNsYXRlLFxuICAgIG1heFRyYW5zbGF0ZTogbWF4VHJhbnNsYXRlLFxuICAgIHRyYW5zbGF0ZVRvOiB0cmFuc2xhdGVUbyxcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uIChkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zaXRpb24nLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydCAocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICAgIGlmIChwYXJhbXMuY3NzTW9kZSkgeyByZXR1cm47IH1cbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgdmFyIGRpciA9IGRpcmVjdGlvbjtcbiAgICBpZiAoIWRpcikge1xuICAgICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgeyBkaXIgPSAnbmV4dCc7IH1cbiAgICAgIGVsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgeyBkaXIgPSAncHJldic7IH1cbiAgICAgIGVsc2UgeyBkaXIgPSAncmVzZXQnOyB9XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCQxIChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMuY3NzTW9kZSkgeyByZXR1cm47IH1cbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcblxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XG4gICAgaWYgKCFkaXIpIHtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIHsgZGlyID0gJ25leHQnOyB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIHsgZGlyID0gJ3ByZXYnOyB9XG4gICAgICBlbHNlIHsgZGlyID0gJ3Jlc2V0JzsgfVxuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG5cbiAgICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVByZXZUcmFuc2l0aW9uRW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHRyYW5zaXRpb24kMSA9IHtcbiAgICBzZXRUcmFuc2l0aW9uOiBzZXRUcmFuc2l0aW9uLFxuICAgIHRyYW5zaXRpb25TdGFydDogdHJhbnNpdGlvblN0YXJ0LFxuICAgIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQkMSxcbiAgfTtcblxuICBmdW5jdGlvbiBzbGlkZVRvIChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICB2YXIgb2JqO1xuXG4gICAgaWYgKCBpbmRleCA9PT0gdm9pZCAwICkgaW5kZXggPSAwO1xuICAgIGlmICggc3BlZWQgPT09IHZvaWQgMCApIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gICAgaWYgKCBydW5DYWxsYmFja3MgPT09IHZvaWQgMCApIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNsaWRlSW5kZXggPSBpbmRleDtcbiAgICBpZiAoc2xpZGVJbmRleCA8IDApIHsgc2xpZGVJbmRleCA9IDA7IH1cblxuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDtcbiAgICB2YXIgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkO1xuICAgIHZhciBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgc25hcEluZGV4ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4IC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgeyBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxOyB9XG5cbiAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IHBhcmFtcy5pbml0aWFsU2xpZGUgfHwgMCkgPT09IChwcmV2aW91c0luZGV4IHx8IDApICYmIHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07XG5cbiAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcblxuICAgIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gICAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCkgPj0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKSkge1xuICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkICYmIHNsaWRlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkaXJlY3Rpb247XG4gICAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgeyBkaXJlY3Rpb24gPSAnbmV4dCc7IH1cbiAgICBlbHNlIGlmIChzbGlkZUluZGV4IDwgYWN0aXZlSW5kZXgpIHsgZGlyZWN0aW9uID0gJ3ByZXYnOyB9XG4gICAgZWxzZSB7IGRpcmVjdGlvbiA9ICdyZXNldCc7IH1cblxuXG4gICAgLy8gVXBkYXRlIEluZGV4XG4gICAgaWYgKChydGwgJiYgLXRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkgfHwgKCFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICAgICAgLy8gVXBkYXRlIEhlaWdodFxuICAgICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHZhciBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC10cmFuc2xhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICAgIHdyYXBwZXJFbC5zY3JvbGxUbygoIG9iaiA9IHt9LCBvYmpbaXNIID8gJ2xlZnQnIDogJ3RvcCddID0gLXRyYW5zbGF0ZSwgb2JqLmJlaGF2aW9yID0gJ3Ntb290aCcsIG9iaiApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gLXRyYW5zbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZVRvTG9vcCAoaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gICAgaWYgKCBpbmRleCA9PT0gdm9pZCAwICkgaW5kZXggPSAwO1xuICAgIGlmICggc3BlZWQgPT09IHZvaWQgMCApIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gICAgaWYgKCBydW5DYWxsYmFja3MgPT09IHZvaWQgMCApIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgbmV3SW5kZXggPSBpbmRleDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBuZXdJbmRleCArPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIH1cblxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG5cbiAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG4gIGZ1bmN0aW9uIHNsaWRlTmV4dCAoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICBpZiAoIHNwZWVkID09PSB2b2lkIDAgKSBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmc7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBpZiAoYW5pbWF0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG5cbiAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG4gIGZ1bmN0aW9uIHNsaWRlUHJldiAoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICBpZiAoIHNwZWVkID09PSB2b2lkIDAgKSBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmc7XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQ7XG4gICAgdmFyIHJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG5cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIGlmIChhbmltYXRpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgIH1cbiAgICB2YXIgdHJhbnNsYXRlID0gcnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwpIHtcbiAgICAgIGlmICh2YWwgPCAwKSB7IHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTsgfVxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsKTtcbiAgICB9XG4gICAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgICB2YXIgbm9ybWFsaXplZFNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG5vcm1hbGl6ZSh2YWwpOyB9KTtcbiAgICB2YXIgbm9ybWFsaXplZFNsaWRlc0dyaWQgPSBzbGlkZXNHcmlkLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBub3JtYWxpemUodmFsKTsgfSk7XG5cbiAgICB2YXIgY3VycmVudFNuYXAgPSBzbmFwR3JpZFtub3JtYWxpemVkU25hcEdyaWQuaW5kZXhPZihub3JtYWxpemVkVHJhbnNsYXRlKV07XG4gICAgdmFyIHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcbiAgICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc25hcEdyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCkge1xuICAgICAgICBpZiAoIXByZXZTbmFwICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkgeyBwcmV2U25hcCA9IHNuYXA7IH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgcHJldkluZGV4O1xuICAgIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcmV2SW5kZXggPSBzbGlkZXNHcmlkLmluZGV4T2YocHJldlNuYXApO1xuICAgICAgaWYgKHByZXZJbmRleCA8IDApIHsgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTsgfVxuICAgIH1cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gIH1cblxuICAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbiAgZnVuY3Rpb24gc2xpZGVSZXNldCAoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICBpZiAoIHNwZWVkID09PSB2b2lkIDAgKSBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG5cbiAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG4gIGZ1bmN0aW9uIHNsaWRlVG9DbG9zZXN0IChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgdGhyZXNob2xkKSB7XG4gICAgaWYgKCBzcGVlZCA9PT0gdm9pZCAwICkgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICBpZiAoIHRocmVzaG9sZCA9PT0gdm9pZCAwICkgdGhyZXNob2xkID0gMC41O1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbmFwSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG5cbiAgICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICAgIGlmICh0cmFuc2xhdGUgPj0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF0pIHtcbiAgICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgICAgdmFyIGN1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG4gICAgICB2YXIgbmV4dFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4ICsgMV07XG4gICAgICBpZiAoKHRyYW5zbGF0ZSAtIGN1cnJlbnRTbmFwKSA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgICBpbmRleCArPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYmVmb3JlIGl0LlxuICAgICAgdmFyIHByZXZTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCAtIDFdO1xuICAgICAgdmFyIGN1cnJlbnRTbmFwJDEgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICAgIGlmICgodHJhbnNsYXRlIC0gcHJldlNuYXApIDw9IChjdXJyZW50U25hcCQxIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICAgIGluZGV4IC09IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICB9XG4gICAgfVxuICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICAgIGluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHN3aXBlci5zbmFwR3JpZC5sZW5ndGggLSAxKTtcblxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcblxuICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgdmFyIHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gICAgdmFyIHJlYWxJbmRleDtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSB7IHJldHVybjsgfVxuICAgICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoJChzd2lwZXIuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoc2xpZGVUb0luZGV4IDwgc3dpcGVyLmxvb3BlZFNsaWRlcyAtIChzbGlkZXNQZXJWaWV3IC8gMikpXG4gICAgICAgICAgfHwgKHNsaWRlVG9JbmRleCA+IChzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMpICsgKHNsaWRlc1BlclZpZXcgLyAyKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsXG4gICAgICAgICAgICAuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl06bm90KC5cIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykgKyBcIilcIikpXG4gICAgICAgICAgICAuZXEoMClcbiAgICAgICAgICAgIC5pbmRleCgpO1xuXG4gICAgICAgICAgVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsXG4gICAgICAgICAgLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCIpXCIpKVxuICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgIC5pbmRleCgpO1xuXG4gICAgICAgIFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNsaWRlID0ge1xuICAgIHNsaWRlVG86IHNsaWRlVG8sXG4gICAgc2xpZGVUb0xvb3A6IHNsaWRlVG9Mb29wLFxuICAgIHNsaWRlTmV4dDogc2xpZGVOZXh0LFxuICAgIHNsaWRlUHJldjogc2xpZGVQcmV2LFxuICAgIHNsaWRlUmVzZXQ6IHNsaWRlUmVzZXQsXG4gICAgc2xpZGVUb0Nsb3Nlc3Q6IHNsaWRlVG9DbG9zZXN0LFxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHNsaWRlVG9DbGlja2VkU2xpZGUsXG4gIH07XG5cbiAgZnVuY3Rpb24gbG9vcENyZWF0ZSAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcbiAgICAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIi5cIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpKS5yZW1vdmUoKTtcblxuICAgIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykpKTtcblxuICAgIGlmIChwYXJhbXMubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgICAgdmFyIGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gKHNsaWRlcy5sZW5ndGggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgaWYgKGJsYW5rU2xpZGVzTnVtICE9PSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibGFua1NsaWRlc051bTsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIGJsYW5rTm9kZSA9ICQoZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5hZGRDbGFzcygoKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiIFwiICsgKHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpKSk7XG4gICAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoYmxhbmtOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiAhcGFyYW1zLmxvb3BlZFNsaWRlcykgeyBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDsgfVxuXG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICBzd2lwZXIubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgcHJlcGVuZFNsaWRlcyA9IFtdO1xuICAgIHZhciBhcHBlbmRTbGlkZXMgPSBbXTtcbiAgICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICB2YXIgc2xpZGUgPSAkKGVsKTtcbiAgICAgIGlmIChpbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMpIHsgYXBwZW5kU2xpZGVzLnB1c2goZWwpOyB9XG4gICAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSB7IHByZXBlbmRTbGlkZXMucHVzaChlbCk7IH1cbiAgICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAkd3JhcHBlckVsLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tpJDFdLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSQyID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBpJDIgPj0gMDsgaSQyIC09IDEpIHtcbiAgICAgICR3cmFwcGVyRWwucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaSQyXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9vcEZpeCAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgIHZhciBsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHZhciBhbGxvd1NsaWRlUHJldiA9IHN3aXBlci5hbGxvd1NsaWRlUHJldjtcbiAgICB2YXIgYWxsb3dTbGlkZU5leHQgPSBzd2lwZXIuYWxsb3dTbGlkZU5leHQ7XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciBuZXdJbmRleDtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG5cbiAgICB2YXIgc25hcFRyYW5zbGF0ZSA9IC1zbmFwR3JpZFthY3RpdmVJbmRleF07XG4gICAgdmFyIGRpZmYgPSBzbmFwVHJhbnNsYXRlIC0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuXG5cbiAgICAvLyBGaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG4gICAgaWYgKGFjdGl2ZUluZGV4IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgICBuZXdJbmRleCA9IChzbGlkZXMubGVuZ3RoIC0gKGxvb3BlZFNsaWRlcyAqIDMpKSArIGFjdGl2ZUluZGV4O1xuICAgICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgICAgdmFyIHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcykge1xuICAgICAgLy8gRml4IEZvciBQb3NpdGl2ZSBPdmVyc2xpZGluZ1xuICAgICAgbmV3SW5kZXggPSAtc2xpZGVzLmxlbmd0aCArIGFjdGl2ZUluZGV4ICsgbG9vcGVkU2xpZGVzO1xuICAgICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgICAgdmFyIHNsaWRlQ2hhbmdlZCQxID0gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIGlmIChzbGlkZUNoYW5nZWQkMSAmJiBkaWZmICE9PSAwKSB7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsb29wRGVzdHJveSAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIi5cIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykgKyBcIiwuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCIuXCIgKyAocGFyYW1zLnNsaWRlQmxhbmtDbGFzcykpKS5yZW1vdmUoKTtcbiAgICBzbGlkZXMucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgfVxuXG4gIHZhciBsb29wID0ge1xuICAgIGxvb3BDcmVhdGU6IGxvb3BDcmVhdGUsXG4gICAgbG9vcEZpeDogbG9vcEZpeCxcbiAgICBsb29wRGVzdHJveTogbG9vcERlc3Ryb3ksXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0R3JhYkN1cnNvciAobW92aW5nKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKFN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCB8fCAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCkgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7IHJldHVybjsgfVxuICAgIHZhciBlbCA9IHN3aXBlci5lbDtcbiAgICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy13ZWJraXQtZ3JhYmJpbmcnIDogJy13ZWJraXQtZ3JhYic7XG4gICAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy1tb3otZ3JhYmJpbicgOiAnLW1vei1ncmFiJztcbiAgICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5zZXRHcmFiQ3Vyc29yICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoU3VwcG9ydC50b3VjaCB8fCAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCkgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7IHJldHVybjsgfVxuICAgIHN3aXBlci5lbC5zdHlsZS5jdXJzb3IgPSAnJztcbiAgfVxuXG4gIHZhciBncmFiQ3Vyc29yID0ge1xuICAgIHNldEdyYWJDdXJzb3I6IHNldEdyYWJDdXJzb3IsXG4gICAgdW5zZXRHcmFiQ3Vyc29yOiB1bnNldEdyYWJDdXJzb3IsXG4gIH07XG5cbiAgZnVuY3Rpb24gYXBwZW5kU2xpZGUgKHNsaWRlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSkgeyAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNbaV0pOyB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG4gICAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGVuZFNsaWRlIChzbGlkZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcblxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfVxuICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgMTtcbiAgICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldKSB7ICR3cmFwcGVyRWwucHJlcGVuZChzbGlkZXNbaV0pOyB9XG4gICAgICB9XG4gICAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlcyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG4gICAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTbGlkZSAoaW5kZXgsIHNsaWRlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSkpO1xuICAgIH1cbiAgICB2YXIgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgMSA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuXG4gICAgdmFyIHNsaWRlc0J1ZmZlciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBiYXNlTGVuZ3RoIC0gMTsgaSA+PSBpbmRleDsgaSAtPSAxKSB7XG4gICAgICB2YXIgY3VycmVudFNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgIGN1cnJlbnRTbGlkZS5yZW1vdmUoKTtcbiAgICAgIHNsaWRlc0J1ZmZlci51bnNoaWZ0KGN1cnJlbnRTbGlkZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgc2xpZGVzLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpJDFdKSB7ICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpJDFdKTsgfVxuICAgICAgfVxuICAgICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSQyID0gMDsgaSQyIDwgc2xpZGVzQnVmZmVyLmxlbmd0aDsgaSQyICs9IDEpIHtcbiAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc0J1ZmZlcltpJDJdKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgfVxuICAgIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBTdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNsaWRlIChzbGlkZXNJbmRleGVzKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykpKTtcbiAgICB9XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gICAgdmFyIGluZGV4VG9SZW1vdmU7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlc0luZGV4ZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlc1tpXTtcbiAgICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHsgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTsgfVxuICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSB7IG5ld0FjdGl2ZUluZGV4IC09IDE7IH1cbiAgICAgIH1cbiAgICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlcztcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSB7IHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7IH1cbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIHsgbmV3QWN0aXZlSW5kZXggLT0gMTsgfVxuICAgICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH1cblxuICAgIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBTdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcyAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgIH1cbiAgICBzd2lwZXIucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG4gIH1cblxuICB2YXIgbWFuaXB1bGF0aW9uID0ge1xuICAgIGFwcGVuZFNsaWRlOiBhcHBlbmRTbGlkZSxcbiAgICBwcmVwZW5kU2xpZGU6IHByZXBlbmRTbGlkZSxcbiAgICBhZGRTbGlkZTogYWRkU2xpZGUsXG4gICAgcmVtb3ZlU2xpZGU6IHJlbW92ZVNsaWRlLFxuICAgIHJlbW92ZUFsbFNsaWRlczogcmVtb3ZlQWxsU2xpZGVzLFxuICB9O1xuXG4gIHZhciBEZXZpY2UgPSAoZnVuY3Rpb24gRGV2aWNlKCkge1xuICAgIHZhciBwbGF0Zm9ybSA9IHdpbi5uYXZpZ2F0b3IucGxhdGZvcm07XG4gICAgdmFyIHVhID0gd2luLm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICB2YXIgZGV2aWNlID0ge1xuICAgICAgaW9zOiBmYWxzZSxcbiAgICAgIGFuZHJvaWQ6IGZhbHNlLFxuICAgICAgYW5kcm9pZENocm9tZTogZmFsc2UsXG4gICAgICBkZXNrdG9wOiBmYWxzZSxcbiAgICAgIGlwaG9uZTogZmFsc2UsXG4gICAgICBpcG9kOiBmYWxzZSxcbiAgICAgIGlwYWQ6IGZhbHNlLFxuICAgICAgZWRnZTogZmFsc2UsXG4gICAgICBpZTogZmFsc2UsXG4gICAgICBmaXJlZm94OiBmYWxzZSxcbiAgICAgIG1hY29zOiBmYWxzZSxcbiAgICAgIHdpbmRvd3M6IGZhbHNlLFxuICAgICAgY29yZG92YTogISEod2luLmNvcmRvdmEgfHwgd2luLnBob25lZ2FwKSxcbiAgICAgIHBob25lZ2FwOiAhISh3aW4uY29yZG92YSB8fCB3aW4ucGhvbmVnYXApLFxuICAgICAgZWxlY3Ryb246IGZhbHNlLFxuICAgIH07XG5cbiAgICB2YXIgc2NyZWVuV2lkdGggPSB3aW4uc2NyZWVuLndpZHRoO1xuICAgIHZhciBzY3JlZW5IZWlnaHQgPSB3aW4uc2NyZWVuLmhlaWdodDtcblxuICAgIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgdmFyIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICAgIHZhciBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgICB2YXIgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPU3xpT1MpXFxzKFtcXGRfXSspLyk7XG4gICAgdmFyIGllID0gdWEuaW5kZXhPZignTVNJRSAnKSA+PSAwIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgPj0gMDtcbiAgICB2YXIgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJykgPj0gMDtcbiAgICB2YXIgZmlyZWZveCA9IHVhLmluZGV4T2YoJ0dlY2tvLycpID49IDAgJiYgdWEuaW5kZXhPZignRmlyZWZveC8nKSA+PSAwO1xuICAgIHZhciB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gICAgdmFyIGVsZWN0cm9uID0gdWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlbGVjdHJvbicpID49IDA7XG4gICAgdmFyIG1hY29zID0gcGxhdGZvcm0gPT09ICdNYWNJbnRlbCc7XG5cbiAgICAvLyBpUGFkT3MgMTMgZml4XG4gICAgaWYgKCFpcGFkXG4gICAgICAmJiBtYWNvc1xuICAgICAgJiYgU3VwcG9ydC50b3VjaFxuICAgICAgJiYgKFxuICAgICAgICAoc2NyZWVuV2lkdGggPT09IDEwMjQgJiYgc2NyZWVuSGVpZ2h0ID09PSAxMzY2KSAvLyBQcm8gMTIuOVxuICAgICAgICB8fCAoc2NyZWVuV2lkdGggPT09IDgzNCAmJiBzY3JlZW5IZWlnaHQgPT09IDExOTQpIC8vIFBybyAxMVxuICAgICAgICB8fCAoc2NyZWVuV2lkdGggPT09IDgzNCAmJiBzY3JlZW5IZWlnaHQgPT09IDExMTIpIC8vIFBybyAxMC41XG4gICAgICAgIHx8IChzY3JlZW5XaWR0aCA9PT0gNzY4ICYmIHNjcmVlbkhlaWdodCA9PT0gMTAyNCkgLy8gb3RoZXJcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGlwYWQgPSB1YS5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyk7XG4gICAgICBtYWNvcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRldmljZS5pZSA9IGllO1xuICAgIGRldmljZS5lZGdlID0gZWRnZTtcbiAgICBkZXZpY2UuZmlyZWZveCA9IGZpcmVmb3g7XG5cbiAgICAvLyBBbmRyb2lkXG4gICAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICAgIGRldmljZS5vc1ZlcnNpb24gPSBhbmRyb2lkWzJdO1xuICAgICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICAgICAgZGV2aWNlLmFuZHJvaWRDaHJvbWUgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID49IDA7XG4gICAgfVxuICAgIGlmIChpcGFkIHx8IGlwaG9uZSB8fCBpcG9kKSB7XG4gICAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpT1NcbiAgICBpZiAoaXBob25lICYmICFpcG9kKSB7XG4gICAgICBkZXZpY2Uub3NWZXJzaW9uID0gaXBob25lWzJdLnJlcGxhY2UoL18vZywgJy4nKTtcbiAgICAgIGRldmljZS5pcGhvbmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXBhZCkge1xuICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwYWRbMl0ucmVwbGFjZSgvXy9nLCAnLicpO1xuICAgICAgZGV2aWNlLmlwYWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXBvZCkge1xuICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwb2RbM10gPyBpcG9kWzNdLnJlcGxhY2UoL18vZywgJy4nKSA6IG51bGw7XG4gICAgICBkZXZpY2UuaXBvZCA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlPUyA4KyBjaGFuZ2VkIFVBXG4gICAgaWYgKGRldmljZS5pb3MgJiYgZGV2aWNlLm9zVmVyc2lvbiAmJiB1YS5pbmRleE9mKCdWZXJzaW9uLycpID49IDApIHtcbiAgICAgIGlmIChkZXZpY2Uub3NWZXJzaW9uLnNwbGl0KCcuJylbMF0gPT09ICcxMCcpIHtcbiAgICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IHVhLnRvTG93ZXJDYXNlKCkuc3BsaXQoJ3ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZWJ2aWV3XG4gICAgZGV2aWNlLndlYlZpZXcgPSAhISgoaXBob25lIHx8IGlwYWQgfHwgaXBvZCkgJiYgKHVhLm1hdGNoKC8uKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kpIHx8IHdpbi5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpXG4gICAgICB8fCAod2luLm1hdGNoTWVkaWEgJiYgd2luLm1hdGNoTWVkaWEoJyhkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpJykubWF0Y2hlcyk7XG4gICAgZGV2aWNlLndlYnZpZXcgPSBkZXZpY2Uud2ViVmlldztcbiAgICBkZXZpY2Uuc3RhbmRhbG9uZSA9IGRldmljZS53ZWJWaWV3O1xuXG4gICAgLy8gRGVza3RvcFxuICAgIGRldmljZS5kZXNrdG9wID0gIShkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkKSB8fCBlbGVjdHJvbjtcbiAgICBpZiAoZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIGRldmljZS5lbGVjdHJvbiA9IGVsZWN0cm9uO1xuICAgICAgZGV2aWNlLm1hY29zID0gbWFjb3M7XG4gICAgICBkZXZpY2Uud2luZG93cyA9IHdpbmRvd3M7XG4gICAgICBpZiAoZGV2aWNlLm1hY29zKSB7XG4gICAgICAgIGRldmljZS5vcyA9ICdtYWNvcyc7XG4gICAgICB9XG4gICAgICBpZiAoZGV2aWNlLndpbmRvd3MpIHtcbiAgICAgICAgZGV2aWNlLm9zID0gJ3dpbmRvd3MnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBpeGVsIFJhdGlvXG4gICAgZGV2aWNlLnBpeGVsUmF0aW8gPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgLy8gRXhwb3J0IG9iamVjdFxuICAgIHJldHVybiBkZXZpY2U7XG4gIH0oKSk7XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0IChldmVudCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzO1xuXG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHsgZSA9IGUub3JpZ2luYWxFdmVudDsgfVxuICAgIHZhciAkdGFyZ2V0RWwgPSAkKGUudGFyZ2V0KTtcblxuICAgIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChzd2lwZXIud3JhcHBlckVsKS5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgfVxuICAgIGRhdGEuaXNUb3VjaEV2ZW50ID0gZS50eXBlID09PSAndG91Y2hzdGFydCc7XG4gICAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgeyByZXR1cm47IH1cbiAgICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPiAwKSB7IHJldHVybjsgfVxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHBhcmFtcy5ub1N3aXBpbmcgJiYgJHRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yID8gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yIDogKFwiLlwiICsgKHBhcmFtcy5ub1N3aXBpbmdDbGFzcykpKVswXSkge1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKVswXSkgeyByZXR1cm47IH1cbiAgICB9XG5cbiAgICB0b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIHRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgdmFyIHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgdmFyIHN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG5cbiAgICAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIChVSVdlYlZpZXcpIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICAgIHZhciBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb247XG4gICAgdmFyIGVkZ2VTd2lwZVRocmVzaG9sZCA9IHBhcmFtcy5lZGdlU3dpcGVUaHJlc2hvbGQgfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZDtcbiAgICBpZiAoXG4gICAgICBlZGdlU3dpcGVEZXRlY3Rpb25cbiAgICAgICYmICgoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZClcbiAgICAgIHx8IChzdGFydFggPj0gd2luLnNjcmVlbi53aWR0aCAtIGVkZ2VTd2lwZVRocmVzaG9sZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVXRpbHMuZXh0ZW5kKGRhdGEsIHtcbiAgICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogdHJ1ZSxcbiAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gICAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IFV0aWxzLm5vdygpO1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIHsgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTsgfVxuICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgdmFyIHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgIGlmICgkdGFyZ2V0RWwuaXMoZGF0YS5mb3JtRWxlbWVudHMpKSB7IHByZXZlbnREZWZhdWx0ID0gZmFsc2U7IH1cbiAgICAgIGlmIChcbiAgICAgICAgZG9jLmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgJiYgJChkb2MuYWN0aXZlRWxlbWVudCkuaXMoZGF0YS5mb3JtRWxlbWVudHMpXG4gICAgICAgICYmIGRvYy5hY3RpdmVFbGVtZW50ICE9PSAkdGFyZ2V0RWxbMF1cbiAgICAgICkge1xuICAgICAgICBkb2MuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuICAgICAgaWYgKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcztcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHsgZSA9IGUub3JpZ2luYWxFdmVudDsgfVxuICAgIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7IHJldHVybjsgfVxuICAgIHZhciB0YXJnZXRUb3VjaCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XG4gICAgdmFyIHBhZ2VYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IHRhcmdldFRvdWNoLnBhZ2VYIDogZS5wYWdlWDtcbiAgICB2YXIgcGFnZVkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVkgOiBlLnBhZ2VZO1xuICAgIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAgIC8vIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgICBVdGlscy5leHRlbmQodG91Y2hlcywge1xuICAgICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgICAgY3VycmVudFk6IHBhZ2VZLFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IFV0aWxzLm5vdygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgcGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgIXBhcmFtcy5sb29wKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgICAvLyBWZXJ0aWNhbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpXG4gICAgICAgICAgfHwgKHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpXG4gICAgICAgICkge1xuICAgICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSlcbiAgICAgICAgfHwgKHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZG9jLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZGF0YS5mb3JtRWxlbWVudHMpKSB7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZScsIGUpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7IHJldHVybjsgfVxuXG4gICAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuY3VycmVudFkgPSBwYWdlWTtcblxuICAgIHZhciBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgICB2YXIgZGlmZlkgPSB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydCgoTWF0aC5wb3coIGRpZmZYLCAyICkpICsgKE1hdGgucG93KCBkaWZmWSwgMiApKSkgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgeyByZXR1cm47IH1cblxuICAgIGlmICh0eXBlb2YgZGF0YS5pc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB0b3VjaEFuZ2xlO1xuICAgICAgaWYgKChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkpIHx8IChzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSkge1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgaWYgKChkaWZmWCAqIGRpZmZYKSArIChkaWZmWSAqIGRpZmZZKSA+PSAyNSkge1xuICAgICAgICAgIHRvdWNoQW5nbGUgPSAoTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODApIC8gTWF0aC5QSTtcbiAgICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogKDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0b3VjaGVzLmN1cnJlbnRYICE9PSB0b3VjaGVzLnN0YXJ0WCB8fCB0b3VjaGVzLmN1cnJlbnRZICE9PSB0b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZGF0YS5zdGFydE1vdmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIGlmICghcGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXBhcmFtcy5uZXN0ZWQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhLmlzTW92ZWQpIHtcbiAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgfVxuICAgICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgICB9XG4gICAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTtcbiAgICAgIC8vIEdyYWIgQ3Vyc29yXG4gICAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlckZpcnN0TW92ZScsIGUpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG5cbiAgICB2YXIgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gICAgdG91Y2hlcy5kaWZmID0gZGlmZjtcblxuICAgIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gICAgaWYgKHJ0bCkgeyBkaWZmID0gLWRpZmY7IH1cblxuICAgIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuXG4gICAgdmFyIGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICAgIHZhciByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuICAgIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgICAgcmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgICB9XG4gICAgaWYgKChkaWZmID4gMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIHsgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gKHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIDEpICsgKE1hdGgucG93KCAoLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmKSwgcmVzaXN0YW5jZVJhdGlvICkpOyB9XG4gICAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgeyBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgMSkgLSAoTWF0aC5wb3coIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZiksIHJlc2lzdGFuY2VSYXRpbyApKTsgfVxuICAgIH1cblxuICAgIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgICBlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICB9XG5cblxuICAgIC8vIFRocmVzaG9sZFxuICAgIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBpZiAoIWRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgICB0b3VjaGVzLnN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG4gICAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSB7IHJldHVybjsgfVxuXG4gICAgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgLy8gVmVsb2NpdHlcbiAgICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc3RhcnRYJyA6ICdzdGFydFknXSxcbiAgICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2N1cnJlbnRYJyA6ICdjdXJyZW50WSddLFxuICAgICAgICB0aW1lOiBVdGlscy5ub3coKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbiAgICAvLyBVcGRhdGUgdHJhbnNsYXRlXG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaEVuZCAoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG5cbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZDtcbiAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gICAgdmFyIGUgPSBldmVudDtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSB7IGUgPSBlLm9yaWdpbmFsRXZlbnQ7IH1cbiAgICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgICB9XG4gICAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG4gICAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgaWYgKGRhdGEuaXNNb3ZlZCAmJiBwYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgICB9XG4gICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmV0dXJuIEdyYWIgQ3Vyc29yXG4gICAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBUaW1lIGRpZmZcbiAgICB2YXIgdG91Y2hFbmRUaW1lID0gVXRpbHMubm93KCk7XG4gICAgdmFyIHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTtcblxuICAgIC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuICAgIGlmIChzd2lwZXIuYWxsb3dDbGljaykge1xuICAgICAgc3dpcGVyLnVwZGF0ZUNsaWNrZWRTbGlkZShlKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0YXAgY2xpY2snLCBlKTtcbiAgICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiAodG91Y2hFbmRUaW1lIC0gZGF0YS5sYXN0Q2xpY2tUaW1lKSA8IDMwMCkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnZG91YmxlVGFwIGRvdWJsZUNsaWNrJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gVXRpbHMubm93KCk7XG4gICAgVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSB7IHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTsgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwIHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcblxuICAgIHZhciBjdXJyZW50UG9zO1xuICAgIGlmIChwYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgICBjdXJyZW50UG9zID0gcnRsID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UG9zID0gLWRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBpZiAoY3VycmVudFBvcyA8IC1zd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRQb3MgPiAtc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA8IHNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW0pIHtcbiAgICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGxhc3RNb3ZlRXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgICAgdmFyIHZlbG9jaXR5RXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG5cbiAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcbiAgICAgICAgICB2YXIgdGltZSA9IGxhc3RNb3ZlRXZlbnQudGltZSAtIHZlbG9jaXR5RXZlbnQudGltZTtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5IC89IDI7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgPCBwYXJhbXMuZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHRoaXMgaW1wbGllcyB0aGF0IHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGEgZmluZ2VyIHRoZW4gcmVsZWFzZWQuXG4gICAgICAgICAgLy8gVGhlcmUgd291bGQgYmUgbm8gZXZlbnRzIHdpdGggZGlzdGFuY2UgemVybywgc28gdGhlIGxhc3QgZXZlbnQgaXMgc3RhbGUuXG4gICAgICAgICAgaWYgKHRpbWUgPiAxNTAgfHwgKFV0aWxzLm5vdygpIC0gbGFzdE1vdmVFdmVudC50aW1lKSA+IDMwMCkge1xuICAgICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIudmVsb2NpdHkgKj0gcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvO1xuXG4gICAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IDEwMDAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bVJhdGlvO1xuICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZSA9IHN3aXBlci52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG5cbiAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gc3dpcGVyLnRyYW5zbGF0ZSArIG1vbWVudHVtRGlzdGFuY2U7XG4gICAgICAgIGlmIChydGwpIHsgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247IH1cblxuICAgICAgICB2YXIgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgICAgdmFyIGFmdGVyQm91bmNlUG9zaXRpb247XG4gICAgICAgIHZhciBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpICogMjAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgICB2YXIgbmVlZHNMb29wRml4O1xuICAgICAgICBpZiAobmV3UG9zaXRpb24gPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiArIHN3aXBlci5tYXhUcmFuc2xhdGUoKSA8IC1ib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHsgbmVlZHNMb29wRml4ID0gdHJ1ZTsgfVxuICAgICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gLSBzd2lwZXIubWluVHJhbnNsYXRlKCkgPiBib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHsgbmVlZHNMb29wRml4ID0gdHJ1ZTsgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgIHZhciBuZXh0U2xpZGU7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzbmFwR3JpZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGVdIC0gbmV3UG9zaXRpb24pIDwgTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlIC0gMV0gLSBuZXdQb3NpdGlvbikgfHwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICAgIHN3aXBlci5vbmNlKCd0cmFuc2l0aW9uRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXggZHVyYXRpb25cbiAgICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAvLyBJZiBmcmVlTW9kZVN0aWNreSBpcyBhY3RpdmUgYW5kIHRoZSB1c2VyIGVuZHMgYSBzd2lwZSB3aXRoIGEgc2xvdy12ZWxvY2l0eVxuICAgICAgICAgICAgLy8gZXZlbnQsIHRoZW4gZHVyYXRpb25zIGNhbiBiZSAyMCsgc2Vjb25kcyB0byBzbGlkZSBvbmUgKG9yIHplcm8hKSBzbGlkZXMuXG4gICAgICAgICAgICAvLyBJdCdzIGVhc3kgdG8gc2VlIHRoaXMgd2hlbiBzaW11bGF0aW5nIHRvdWNoIHdpdGggbW91c2UgZXZlbnRzLiBUbyBmaXggdGhpcyxcbiAgICAgICAgICAgIC8vIGxpbWl0IHNpbmdsZS1zbGlkZSBzd2lwZXMgdG8gdGhlIGRlZmF1bHQgc2xpZGUgZHVyYXRpb24uIFRoaXMgYWxzbyBoYXMgdGhlXG4gICAgICAgICAgICAvLyBuaWNlIHNpZGUgZWZmZWN0IG9mIG1hdGNoaW5nIHNsaWRlIHNwZWVkIGlmIHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGJlZm9yZVxuICAgICAgICAgICAgLy8gbGlmdGluZyBmaW5nZXIgb3IgbW91c2UgdnMuIG1vdmluZyBzbG93bHkgYmVmb3JlIGxpZnRpbmcgdGhlIGZpbmdlci9tb3VzZS5cbiAgICAgICAgICAgIC8vIEZvciBmYXN0ZXIgc3dpcGVzLCBhbHNvIGFwcGx5IGxpbWl0cyAoYWxiZWl0IGhpZ2hlciBvbmVzKS5cbiAgICAgICAgICAgIHZhciBtb3ZlRGlzdGFuY2UgPSBNYXRoLmFicygocnRsID8gLW5ld1Bvc2l0aW9uIDogbmV3UG9zaXRpb24pIC0gc3dpcGVyLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4XTtcbiAgICAgICAgICAgIGlmIChtb3ZlRGlzdGFuY2UgPCBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVEaXN0YW5jZSA8IDIgKiBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQgKiAxLjU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMi41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcbiAgICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcblxuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24ocGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG4gICAgICAgICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcbiAgICB2YXIgc3RvcEluZGV4ID0gMDtcbiAgICB2YXIgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzbGlkZXNHcmlkW2kgKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXBdKSB7XG4gICAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW2kgKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXBdIC0gc2xpZGVzR3JpZFtpXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG4gICAgdmFyIHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuXG4gICAgaWYgKHRpbWVEaWZmID4gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBpZiAocmF0aW8gPj0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgeyBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApOyB9XG4gICAgICAgIGVsc2UgeyBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpOyB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgaWYgKHJhdGlvID4gKDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSkgeyBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApOyB9XG4gICAgICAgIGVsc2UgeyBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpOyB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNob3J0IHN3aXBlc1xuICAgICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGlzTmF2QnV0dG9uVGFyZ2V0ID0gc3dpcGVyLm5hdmlnYXRpb24gJiYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCk7XG4gICAgICBpZiAoIWlzTmF2QnV0dG9uVGFyZ2V0KSB7XG4gICAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVzaXplICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBlbCA9IHN3aXBlci5lbDtcblxuICAgIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgIC8vIEJyZWFrcG9pbnRzXG4gICAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlIGxvY2tzXG4gICAgdmFyIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0O1xuICAgIHZhciBhbGxvd1NsaWRlUHJldiA9IHN3aXBlci5hbGxvd1NsaWRlUHJldjtcbiAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG5cbiAgICAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNjcm9sbCAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWw7XG4gICAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0IDogLXdyYXBwZXJFbC5zY3JvbGxUb3A7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKHN3aXBlci50cmFuc2xhdGUgPT09IC0wKSB7IHN3aXBlci50cmFuc2xhdGUgPSAwOyB9XG5cbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgdmFyIG5ld1Byb2dyZXNzO1xuICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3UHJvZ3Jlc3MgPSAoc3dpcGVyLnRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xuICAgIH1cbiAgICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHN3aXBlci50cmFuc2xhdGUpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBmYWxzZSk7XG4gIH1cblxuICB2YXIgZHVtbXlFdmVudEF0dGFjaGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGR1bW15RXZlbnRMaXN0ZW5lcigpIHt9XG5cbiAgZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciB0b3VjaEV2ZW50cyA9IHN3aXBlci50b3VjaEV2ZW50cztcbiAgICB2YXIgZWwgPSBzd2lwZXIuZWw7XG4gICAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWw7XG5cbiAgICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgICBzd2lwZXIub25Ub3VjaE1vdmUgPSBvblRvdWNoTW92ZS5iaW5kKHN3aXBlcik7XG4gICAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcbiAgICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgICB9XG5cbiAgICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuXG4gICAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7XG5cbiAgICAvLyBUb3VjaCBFdmVudHNcbiAgICBpZiAoIVN1cHBvcnQudG91Y2ggJiYgU3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoU3VwcG9ydC50b3VjaCkge1xuICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgPyB7IHBhc3NpdmU6IGZhbHNlLCBjYXB0dXJlOiBjYXB0dXJlIH0gOiBjYXB0dXJlKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5jYW5jZWwsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZHVtbXlFdmVudEF0dGFjaGVkKSB7XG4gICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkdW1teUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGR1bW15RXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIURldmljZS5pb3MgJiYgIURldmljZS5hbmRyb2lkKSB8fCAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIVN1cHBvcnQudG91Y2ggJiYgRGV2aWNlLmlvcykpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuICAgIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICB3cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICAvLyBSZXNpemUgaGFuZGxlclxuICAgIHN3aXBlci5vbigoRGV2aWNlLmlvcyB8fCBEZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScpLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHM7XG4gICAgdmFyIGVsID0gc3dpcGVyLmVsO1xuICAgIHZhciB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuXG4gICAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7XG5cbiAgICAvLyBUb3VjaCBFdmVudHNcbiAgICBpZiAoIVN1cHBvcnQudG91Y2ggJiYgU3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoU3VwcG9ydC50b3VjaCkge1xuICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICdvblRvdWNoU3RhcnQnICYmIFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5jYW5jZWwsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFEZXZpY2UuaW9zICYmICFEZXZpY2UuYW5kcm9pZCkgfHwgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFTdXBwb3J0LnRvdWNoICYmIERldmljZS5pb3MpKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJldmVudCBMaW5rcyBDbGlja3NcbiAgICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICB3cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICAvLyBSZXNpemUgaGFuZGxlclxuICAgIHN3aXBlci5vZmYoKERldmljZS5pb3MgfHwgRGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnKSwgb25SZXNpemUpO1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IHtcbiAgICBhdHRhY2hFdmVudHM6IGF0dGFjaEV2ZW50cyxcbiAgICBkZXRhY2hFdmVudHM6IGRldGFjaEV2ZW50cyxcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRCcmVha3BvaW50ICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgdmFyIGluaXRpYWxpemVkID0gc3dpcGVyLmluaXRpYWxpemVkO1xuICAgIHZhciBsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzOyBpZiAoIGxvb3BlZFNsaWRlcyA9PT0gdm9pZCAwICkgbG9vcGVkU2xpZGVzID0gMDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICB2YXIgYnJlYWtwb2ludHMgPSBwYXJhbXMuYnJlYWtwb2ludHM7XG4gICAgaWYgKCFicmVha3BvaW50cyB8fCAoYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmxlbmd0aCA9PT0gMCkpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuICAgIHZhciBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMpO1xuXG4gICAgaWYgKGJyZWFrcG9pbnQgJiYgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ICE9PSBicmVha3BvaW50KSB7XG4gICAgICB2YXIgYnJlYWtwb2ludE9ubHlQYXJhbXMgPSBicmVha3BvaW50IGluIGJyZWFrcG9pbnRzID8gYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoYnJlYWtwb2ludE9ubHlQYXJhbXMpIHtcbiAgICAgICAgWydzbGlkZXNQZXJWaWV3JywgJ3NwYWNlQmV0d2VlbicsICdzbGlkZXNQZXJHcm91cCcsICdzbGlkZXNQZXJDb2x1bW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgIHZhciBwYXJhbVZhbHVlID0gYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycgJiYgKHBhcmFtVmFsdWUgPT09ICdBVVRPJyB8fCBwYXJhbVZhbHVlID09PSAnYXV0bycpKSB7XG4gICAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSAnYXV0byc7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnKSB7XG4gICAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUludChwYXJhbVZhbHVlLCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gICAgICB2YXIgd2FzTXVsdGlSb3cgPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMTtcbiAgICAgIHZhciBpc011bHRpUm93ID0gYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuICAgICAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgICAgICRlbC5yZW1vdmVDbGFzcygoKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwibXVsdGlyb3cgXCIgKyAocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgXCJtdWx0aXJvdy1jb2x1bW5cIikpO1xuICAgICAgfSBlbHNlIGlmICghd2FzTXVsdGlSb3cgJiYgaXNNdWx0aVJvdykge1xuICAgICAgICAkZWwuYWRkQ2xhc3MoKChwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIm11bHRpcm93XCIpKTtcbiAgICAgICAgaWYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAkZWwuYWRkQ2xhc3MoKChwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIm11bHRpcm93LWNvbHVtblwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgICAgIHZhciBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uQ2hhbmdlZCAmJiBpbml0aWFsaXplZCkge1xuICAgICAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFyYW1zLCBicmVha3BvaW50UGFyYW1zKTtcblxuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuICAgICAgfSk7XG5cbiAgICAgIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG5cbiAgICAgIGlmIChuZWVkc1JlTG9vcCAmJiBpbml0aWFsaXplZCkge1xuICAgICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgICBzd2lwZXIuc2xpZGVUbygoYWN0aXZlSW5kZXggLSBsb29wZWRTbGlkZXMpICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJyZWFrcG9pbnQgKGJyZWFrcG9pbnRzKSB7XG4gICAgLy8gR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aFxuICAgIGlmICghYnJlYWtwb2ludHMpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuICAgIHZhciBicmVha3BvaW50ID0gZmFsc2U7XG4gICAgdmFyIHBvaW50cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgIH0pO1xuICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBwYXJzZUludChhLCAxMCkgLSBwYXJzZUludChiLCAxMCk7IH0pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICBpZiAocG9pbnQgPD0gd2luLmlubmVyV2lkdGgpIHtcbiAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4JztcbiAgfVxuXG4gIHZhciBicmVha3BvaW50cyA9IHsgc2V0QnJlYWtwb2ludDogc2V0QnJlYWtwb2ludCwgZ2V0QnJlYWtwb2ludDogZ2V0QnJlYWtwb2ludCB9O1xuXG4gIGZ1bmN0aW9uIGFkZENsYXNzZXMgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmNsYXNzTmFtZXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG4gICAgdmFyIHN1ZmZpeGVzID0gW107XG5cbiAgICBzdWZmaXhlcy5wdXNoKCdpbml0aWFsaXplZCcpO1xuICAgIHN1ZmZpeGVzLnB1c2gocGFyYW1zLmRpcmVjdGlvbik7XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzdWZmaXhlcy5wdXNoKCdmcmVlLW1vZGUnKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICBzdWZmaXhlcy5wdXNoKCdhdXRvaGVpZ2h0Jyk7XG4gICAgfVxuICAgIGlmIChydGwpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ3J0bCcpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ211bHRpcm93Jyk7XG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHN1ZmZpeGVzLnB1c2goJ211bHRpcm93LWNvbHVtbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoRGV2aWNlLmFuZHJvaWQpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ2FuZHJvaWQnKTtcbiAgICB9XG4gICAgaWYgKERldmljZS5pb3MpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ2lvcycpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3VmZml4ZXMucHVzaCgnY3NzLW1vZGUnKTtcbiAgICB9XG5cbiAgICBzdWZmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdWZmaXgpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIHN1ZmZpeCk7XG4gICAgfSk7XG5cbiAgICAkZWwuYWRkQ2xhc3MoY2xhc3NOYW1lcy5qb2luKCcgJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG4gICAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcztcblxuICAgICRlbC5yZW1vdmVDbGFzcyhjbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IHsgYWRkQ2xhc3NlczogYWRkQ2xhc3NlcywgcmVtb3ZlQ2xhc3NlczogcmVtb3ZlQ2xhc3NlcyB9O1xuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZSAoaW1hZ2VFbCwgc3JjLCBzcmNzZXQsIHNpemVzLCBjaGVja0ZvckNvbXBsZXRlLCBjYWxsYmFjaykge1xuICAgIHZhciBpbWFnZTtcbiAgICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH1cbiAgICB9XG4gICAgaWYgKCFpbWFnZUVsLmNvbXBsZXRlIHx8ICFjaGVja0ZvckNvbXBsZXRlKSB7XG4gICAgICBpZiAoc3JjKSB7XG4gICAgICAgIGltYWdlID0gbmV3IHdpbi5JbWFnZSgpO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcbiAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uUmVhZHkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuaW1hZ2VzVG9Mb2FkID0gc3dpcGVyLiRlbC5maW5kKCdpbWcnKTtcbiAgICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCAhPT0gdW5kZWZpbmVkKSB7IHN3aXBlci5pbWFnZXNMb2FkZWQgKz0gMTsgfVxuICAgICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgPT09IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHsgc3dpcGVyLnVwZGF0ZSgpOyB9XG4gICAgICAgIHN3aXBlci5lbWl0KCdpbWFnZXNSZWFkeScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBpbWFnZUVsID0gc3dpcGVyLmltYWdlc1RvTG9hZFtpXTtcbiAgICAgIHN3aXBlci5sb2FkSW1hZ2UoXG4gICAgICAgIGltYWdlRWwsXG4gICAgICAgIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksXG4gICAgICAgIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSxcbiAgICAgICAgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgb25SZWFkeVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW1hZ2VzID0ge1xuICAgIGxvYWRJbWFnZTogbG9hZEltYWdlLFxuICAgIHByZWxvYWRJbWFnZXM6IHByZWxvYWRJbWFnZXMsXG4gIH07XG5cbiAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgd2FzTG9ja2VkID0gc3dpcGVyLmlzTG9ja2VkO1xuICAgIHZhciBsYXN0U2xpZGVQb3NpdGlvbiA9IHN3aXBlci5zbGlkZXMubGVuZ3RoID4gMCAmJiAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuICogKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSkpICsgKChzd2lwZXIuc2xpZGVzWzBdKS5vZmZzZXRXaWR0aCkgKiBzd2lwZXIuc2xpZGVzLmxlbmd0aCk7XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgJiYgbGFzdFNsaWRlUG9zaXRpb24pIHtcbiAgICAgIHN3aXBlci5pc0xvY2tlZCA9IGxhc3RTbGlkZVBvc2l0aW9uIDw9IHN3aXBlci5zaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICAgIH1cblxuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDtcblxuICAgIC8vIGV2ZW50c1xuICAgIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkgeyBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7IH1cblxuICAgIGlmICh3YXNMb2NrZWQgJiYgd2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrT3ZlcmZsb3ckMSA9IHsgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyB9O1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBpbml0OiB0cnVlLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIHRvdWNoRXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBjc3NNb2RlOiBmYWxzZSxcbiAgICAvL1xuICAgIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogZmFsc2UsXG5cbiAgICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCwgd2l0aCBVSVdlYlZpZXcpLlxuICAgIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gICAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcblxuICAgIC8vIEZyZWUgbW9kZVxuICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogMSxcbiAgICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICBmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzogMSxcbiAgICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG5cbiAgICAvLyBBdXRvaGVpZ2h0XG4gICAgYXV0b0hlaWdodDogZmFsc2UsXG5cbiAgICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICAgIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcblxuICAgIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG5cbiAgICAvLyBFZmZlY3RzXG4gICAgZWZmZWN0OiAnc2xpZGUnLCAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG5cbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG5cbiAgICAvLyBTbGlkZXMgZ3JpZFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAnY29sdW1uJyxcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCwgLy8gaW4gcHhcbiAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCwgLy8gaW4gcHhcbiAgICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICAgIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogZmFsc2UsXG5cbiAgICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICAgIHdhdGNoT3ZlcmZsb3c6IGZhbHNlLFxuXG4gICAgLy8gUm91bmQgbGVuZ3RoXG4gICAgcm91bmRMZW5ndGhzOiBmYWxzZSxcblxuICAgIC8vIFRvdWNoZXNcbiAgICB0b3VjaFJhdGlvOiAxLFxuICAgIHRvdWNoQW5nbGU6IDQ1LFxuICAgIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gICAgc2hvcnRTd2lwZXM6IHRydWUsXG4gICAgbG9uZ1N3aXBlczogdHJ1ZSxcbiAgICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgICBmb2xsb3dGaW5nZXI6IHRydWUsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgdGhyZXNob2xkOiAwLFxuICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICAgIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgICB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcblxuICAgIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gICAgdW5pcXVlTmF2RWxlbWVudHM6IHRydWUsXG5cbiAgICAvLyBSZXNpc3RhbmNlXG4gICAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG5cbiAgICAvLyBQcm9ncmVzc1xuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG5cbiAgICAvLyBDdXJzb3JcbiAgICBncmFiQ3Vyc29yOiBmYWxzZSxcblxuICAgIC8vIENsaWNrc1xuICAgIHByZXZlbnRDbGlja3M6IHRydWUsXG4gICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuXG4gICAgLy8gSW1hZ2VzXG4gICAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxuXG4gICAgLy8gbG9vcFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICAgIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBmYWxzZSxcblxuICAgIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICAgIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICAgIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICAgIHN3aXBlSGFuZGxlcjogbnVsbCwgLy8gJy5zd2lwZS1oYW5kbGVyJyxcbiAgICBub1N3aXBpbmc6IHRydWUsXG4gICAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gICAgbm9Td2lwaW5nU2VsZWN0b3I6IG51bGwsXG5cbiAgICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICAgIHBhc3NpdmVMaXN0ZW5lcnM6IHRydWUsXG5cbiAgICAvLyBOU1xuICAgIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLScsIC8vIE5FV1xuICAgIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICAgIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsnLFxuICAgIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgICBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1hY3RpdmUnLFxuICAgIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICAgIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcbiAgICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gICAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gICAgc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnLFxuICAgIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcblxuICAgIC8vIENhbGxiYWNrc1xuICAgIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgfTtcblxuICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cblxuICB2YXIgcHJvdG90eXBlcyA9IHtcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uJDEsXG4gICAgc2xpZGU6IHNsaWRlLFxuICAgIGxvb3A6IGxvb3AsXG4gICAgZ3JhYkN1cnNvcjogZ3JhYkN1cnNvcixcbiAgICBtYW5pcHVsYXRpb246IG1hbmlwdWxhdGlvbixcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyQxLFxuICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gICAgaW1hZ2VzOiBpbWFnZXMsXG4gIH07XG5cbiAgdmFyIGV4dGVuZGVkRGVmYXVsdHMgPSB7fTtcblxuICB2YXIgU3dpcGVyID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoU3dpcGVyQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTd2lwZXIoKSB7XG4gICAgICB2YXIgYXNzaWduO1xuXG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgIHZhciBlbDtcbiAgICAgIHZhciBwYXJhbXM7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChhc3NpZ24gPSBhcmdzLCBlbCA9IGFzc2lnblswXSwgcGFyYW1zID0gYXNzaWduWzFdKTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFyYW1zKSB7IHBhcmFtcyA9IHt9OyB9XG5cbiAgICAgIHBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSB7IHBhcmFtcy5lbCA9IGVsOyB9XG5cbiAgICAgIFN3aXBlckNsYXNzLmNhbGwodGhpcywgcGFyYW1zKTtcblxuICAgICAgT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvdG90eXBlR3JvdXApIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2goZnVuY3Rpb24gKHByb3RvTWV0aG9kKSB7XG4gICAgICAgICAgaWYgKCFTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSkge1xuICAgICAgICAgICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTd2lwZXIgSW5zdGFuY2VcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBzd2lwZXIubW9kdWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKHN3aXBlci5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBzd2lwZXIubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgICB2YXIgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZS5wYXJhbXNbbW9kdWxlUGFyYW1OYW1lXTtcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHsgZW5hYmxlZDogdHJ1ZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSB7IHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0geyBlbmFibGVkOiBmYWxzZSB9OyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuICAgICAgdmFyIHN3aXBlclBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgZGVmYXVsdHMpO1xuICAgICAgc3dpcGVyLnVzZU1vZHVsZXNQYXJhbXMoc3dpcGVyUGFyYW1zKTtcblxuICAgICAgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuICAgICAgc3dpcGVyLnBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gVXRpbHMuZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICAgIHN3aXBlci5wYXNzZWRQYXJhbXMgPSBVdGlscy5leHRlbmQoe30sIHBhcmFtcyk7XG5cbiAgICAgIC8vIFNhdmUgRG9tIGxpYlxuICAgICAgc3dpcGVyLiQgPSAkO1xuXG4gICAgICAvLyBGaW5kIGVsXG4gICAgICB2YXIgJGVsID0gJChzd2lwZXIucGFyYW1zLmVsKTtcbiAgICAgIGVsID0gJGVsWzBdO1xuXG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICgkZWwubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgICAkZWwuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGNvbnRhaW5lckVsKSB7XG4gICAgICAgICAgdmFyIG5ld1BhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zLCB7IGVsOiBjb250YWluZXJFbCB9KTtcbiAgICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcihuZXdQYXJhbXMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgICAgfVxuXG4gICAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG4gICAgICAkZWwuZGF0YSgnc3dpcGVyJywgc3dpcGVyKTtcblxuICAgICAgLy8gRmluZCBXcmFwcGVyXG4gICAgICB2YXIgJHdyYXBwZXJFbDtcbiAgICAgIGlmIChlbCAmJiBlbC5zaGFkb3dSb290ICYmIGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAkd3JhcHBlckVsID0gJChlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoKFwiLlwiICsgKHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzKSkpKTtcbiAgICAgICAgLy8gQ2hpbGRyZW4gbmVlZHMgdG8gcmV0dXJuIHNsb3QgaXRlbXNcbiAgICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7IHJldHVybiAkZWwuY2hpbGRyZW4ob3B0aW9ucyk7IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkd3JhcHBlckVsID0gJGVsLmNoaWxkcmVuKChcIi5cIiArIChzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcykpKTtcbiAgICAgIH1cbiAgICAgIC8vIEV4dGVuZCBTd2lwZXJcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgJGVsOiAkZWwsXG4gICAgICAgIGVsOiBlbCxcbiAgICAgICAgJHdyYXBwZXJFbDogJHdyYXBwZXJFbCxcbiAgICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuXG4gICAgICAgIC8vIENsYXNzZXNcbiAgICAgICAgY2xhc3NOYW1lczogW10sXG5cbiAgICAgICAgLy8gU2xpZGVzXG4gICAgICAgIHNsaWRlczogJCgpLFxuICAgICAgICBzbGlkZXNHcmlkOiBbXSxcbiAgICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuXG4gICAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICAgIGlzSG9yaXpvbnRhbDogZnVuY3Rpb24gaXNIb3Jpem9udGFsKCkge1xuICAgICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgICB9LFxuICAgICAgICBpc1ZlcnRpY2FsOiBmdW5jdGlvbiBpc1ZlcnRpY2FsKCkge1xuICAgICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUlRMXG4gICAgICAgIHJ0bDogKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgICB3cm9uZ1JUTDogJHdyYXBwZXJFbC5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94JyxcblxuICAgICAgICAvLyBJbmRleGVzXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICByZWFsSW5kZXg6IDAsXG5cbiAgICAgICAgLy9cbiAgICAgICAgaXNCZWdpbm5pbmc6IHRydWUsXG4gICAgICAgIGlzRW5kOiBmYWxzZSxcblxuICAgICAgICAvLyBQcm9wc1xuICAgICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG5cbiAgICAgICAgLy8gTG9ja3NcbiAgICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgICB0b3VjaEV2ZW50czogKGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICAgIHZhciB0b3VjaCA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXTtcbiAgICAgICAgICB2YXIgZGVza3RvcCA9IFsnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJ107XG4gICAgICAgICAgaWYgKFN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgZGVza3RvcCA9IFsncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c1RvdWNoID0ge1xuICAgICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgICAgbW92ZTogdG91Y2hbMV0sXG4gICAgICAgICAgICBlbmQ6IHRvdWNoWzJdLFxuICAgICAgICAgICAgY2FuY2VsOiB0b3VjaFszXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AgPSB7XG4gICAgICAgICAgICBzdGFydDogZGVza3RvcFswXSxcbiAgICAgICAgICAgIG1vdmU6IGRlc2t0b3BbMV0sXG4gICAgICAgICAgICBlbmQ6IGRlc2t0b3BbMl0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gU3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgICB9KCkpLFxuICAgICAgICB0b3VjaEV2ZW50c0RhdGE6IHtcbiAgICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogdW5kZWZpbmVkLFxuICAgICAgICAgIHRvdWNoU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgICAgZm9ybUVsZW1lbnRzOiAnaW5wdXQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgYnV0dG9uLCB2aWRlbycsXG4gICAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgICAgbGFzdENsaWNrVGltZTogVXRpbHMubm93KCksXG4gICAgICAgICAgY2xpY2tUaW1lb3V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICAgIHZlbG9jaXRpZXM6IFtdLFxuICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICBpc1RvdWNoRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIENsaWNrc1xuICAgICAgICBhbGxvd0NsaWNrOiB0cnVlLFxuXG4gICAgICAgIC8vIFRvdWNoZXNcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG5cbiAgICAgICAgdG91Y2hlczoge1xuICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgICAgZGlmZjogMCxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJbWFnZXNcbiAgICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgICAgaW1hZ2VzTG9hZGVkOiAwLFxuXG4gICAgICB9KTtcblxuICAgICAgLy8gSW5zdGFsbCBNb2R1bGVzXG4gICAgICBzd2lwZXIudXNlTW9kdWxlcygpO1xuXG4gICAgICAvLyBJbml0XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICAgIHN3aXBlci5pbml0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBhcHAgaW5zdGFuY2VcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuXG4gICAgaWYgKCBTd2lwZXJDbGFzcyApIFN3aXBlci5fX3Byb3RvX18gPSBTd2lwZXJDbGFzcztcbiAgICBTd2lwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3dpcGVyQ2xhc3MgJiYgU3dpcGVyQ2xhc3MucHJvdG90eXBlICk7XG4gICAgU3dpcGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN3aXBlcjtcblxuICAgIHZhciBzdGF0aWNBY2Nlc3NvcnMgPSB7IGV4dGVuZGVkRGVmYXVsdHM6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sZGVmYXVsdHM6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sQ2xhc3M6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sJDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4gICAgU3dpcGVyLnByb3RvdHlwZS5zbGlkZXNQZXJWaWV3RHluYW1pYyA9IGZ1bmN0aW9uIHNsaWRlc1BlclZpZXdEeW5hbWljICgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQ7XG4gICAgICB2YXIgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplO1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgdmFyIHNwdiA9IDE7XG4gICAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIHZhciBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgdmFyIGJyZWFrTG9vcDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSB7IGJyZWFrTG9vcCA9IHRydWU7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSQxID0gYWN0aXZlSW5kZXggLSAxOyBpJDEgPj0gMDsgaSQxIC09IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVzW2kkMV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpJDFdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIHsgYnJlYWtMb29wID0gdHJ1ZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSQyID0gYWN0aXZlSW5kZXggKyAxOyBpJDIgPCBzbGlkZXMubGVuZ3RoOyBpJDIgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZXNHcmlkW2kkMl0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemUpIHtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNwdjtcbiAgICB9O1xuXG4gICAgU3dpcGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgICAvLyBCcmVha3BvaW50c1xuICAgICAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgICB2YXIgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgICAgdmFyIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgfVxuICAgICAgdmFyIHRyYW5zbGF0ZWQ7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci5lbWl0KCd1cGRhdGUnKTtcbiAgICB9O1xuXG4gICAgU3dpcGVyLnByb3RvdHlwZS5jaGFuZ2VEaXJlY3Rpb24gPSBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24gKG5ld0RpcmVjdGlvbiwgbmVlZFVwZGF0ZSkge1xuICAgICAgaWYgKCBuZWVkVXBkYXRlID09PSB2b2lkIDAgKSBuZWVkVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uO1xuICAgICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICB9XG4gICAgICBpZiAoKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbikgfHwgKG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLiRlbFxuICAgICAgICAucmVtb3ZlQ2xhc3MoKFwiXCIgKyAoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIGN1cnJlbnREaXJlY3Rpb24pKVxuICAgICAgICAuYWRkQ2xhc3MoKFwiXCIgKyAoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIG5ld0RpcmVjdGlvbikpO1xuXG4gICAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcblxuICAgICAgc3dpcGVyLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUluZGV4LCBzbGlkZUVsKSB7XG4gICAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBzbGlkZUVsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN3aXBlci5lbWl0KCdjaGFuZ2VEaXJlY3Rpb24nKTtcbiAgICAgIGlmIChuZWVkVXBkYXRlKSB7IHN3aXBlci51cGRhdGUoKTsgfVxuXG4gICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH07XG5cbiAgICBTd2lwZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0ICgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkgeyByZXR1cm47IH1cblxuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTtcblxuICAgICAgLy8gU2V0IGJyZWFrcG9pbnRcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBDbGFzc2VzXG4gICAgICBzd2lwZXIuYWRkQ2xhc3NlcygpO1xuXG4gICAgICAvLyBDcmVhdGUgbG9vcFxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgc2l6ZVxuICAgICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcblxuICAgICAgLy8gVXBkYXRlIHNsaWRlc1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSB7XG4gICAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBHcmFiIEN1cnNvclxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICAgIHN3aXBlci5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2ggZXZlbnRzXG4gICAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7XG5cbiAgICAgIC8vIEluaXQgRmxhZ1xuICAgICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgLy8gRW1pdFxuICAgICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICB9O1xuXG4gICAgU3dpcGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoZGVsZXRlSW5zdGFuY2UsIGNsZWFuU3R5bGVzKSB7XG4gICAgICBpZiAoIGRlbGV0ZUluc3RhbmNlID09PSB2b2lkIDAgKSBkZWxldGVJbnN0YW5jZSA9IHRydWU7XG4gICAgICBpZiAoIGNsZWFuU3R5bGVzID09PSB2b2lkIDAgKSBjbGVhblN0eWxlcyA9IHRydWU7XG5cbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICAgICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlRGVzdHJveScpO1xuXG4gICAgICAvLyBJbml0IEZsYWdcbiAgICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgICAvLyBEZXRhY2ggZXZlbnRzXG4gICAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7XG5cbiAgICAgIC8vIERlc3Ryb3kgbG9vcFxuICAgICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbnVwIHN0eWxlc1xuICAgICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICAgIHN3aXBlci5yZW1vdmVDbGFzc2VzKCk7XG4gICAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAkd3JhcHBlckVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIGlmIChzbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgIHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFtcbiAgICAgICAgICAgICAgcGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLFxuICAgICAgICAgICAgICBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICAgICAgcGFyYW1zLnNsaWRlTmV4dENsYXNzLFxuICAgICAgICAgICAgICBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MgXS5qb2luKCcgJykpXG4gICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc3dpcGVyLiRlbFswXS5zd2lwZXIgPSBudWxsO1xuICAgICAgICBzd2lwZXIuJGVsLmRhdGEoJ3N3aXBlcicsIG51bGwpO1xuICAgICAgICBVdGlscy5kZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBTd2lwZXIuZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0cyAobmV3RGVmYXVsdHMpIHtcbiAgICAgIFV0aWxzLmV4dGVuZChleHRlbmRlZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gICAgfTtcblxuICAgIHN0YXRpY0FjY2Vzc29ycy5leHRlbmRlZERlZmF1bHRzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICAgIH07XG5cbiAgICBzdGF0aWNBY2Nlc3NvcnMuZGVmYXVsdHMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH07XG5cbiAgICBzdGF0aWNBY2Nlc3NvcnMuQ2xhc3MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN3aXBlckNsYXNzO1xuICAgIH07XG5cbiAgICBzdGF0aWNBY2Nlc3NvcnMuJC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN3aXBlciwgc3RhdGljQWNjZXNzb3JzICk7XG5cbiAgICByZXR1cm4gU3dpcGVyO1xuICB9KFN3aXBlckNsYXNzKSk7XG5cbiAgdmFyIERldmljZSQxID0ge1xuICAgIG5hbWU6ICdkZXZpY2UnLFxuICAgIHByb3RvOiB7XG4gICAgICBkZXZpY2U6IERldmljZSxcbiAgICB9LFxuICAgIHN0YXRpYzoge1xuICAgICAgZGV2aWNlOiBEZXZpY2UsXG4gICAgfSxcbiAgfTtcblxuICB2YXIgU3VwcG9ydCQxID0ge1xuICAgIG5hbWU6ICdzdXBwb3J0JyxcbiAgICBwcm90bzoge1xuICAgICAgc3VwcG9ydDogU3VwcG9ydCxcbiAgICB9LFxuICAgIHN0YXRpYzoge1xuICAgICAgc3VwcG9ydDogU3VwcG9ydCxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBCcm93c2VyID0gKGZ1bmN0aW9uIEJyb3dzZXIoKSB7XG4gICAgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgICB2YXIgdWEgPSB3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuICh1YS5pbmRleE9mKCdzYWZhcmknKSA+PSAwICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpIDwgMCAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRWRnZTogISF3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxcbiAgICAgIGlzU2FmYXJpOiBpc1NhZmFyaSgpLFxuICAgICAgaXNVaVdlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgfTtcbiAgfSgpKTtcblxuICB2YXIgQnJvd3NlciQxID0ge1xuICAgIG5hbWU6ICdicm93c2VyJyxcbiAgICBwcm90bzoge1xuICAgICAgYnJvd3NlcjogQnJvd3NlcixcbiAgICB9LFxuICAgIHN0YXRpYzoge1xuICAgICAgYnJvd3NlcjogQnJvd3NlcixcbiAgICB9LFxuICB9O1xuXG4gIHZhciBSZXNpemUgPSB7XG4gICAgbmFtZTogJ3Jlc2l6ZScsXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgcmVzaXplOiB7XG4gICAgICAgICAgcmVzaXplSGFuZGxlcjogZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdyZXNpemUnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ29yaWVudGF0aW9uY2hhbmdlJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAvLyBFbWl0IHJlc2l6ZVxuICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcblxuICAgICAgICAvLyBFbWl0IG9yaWVudGF0aW9uY2hhbmdlXG4gICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7XG4gICAgICAgIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgT2JzZXJ2ZXIgPSB7XG4gICAgZnVuYzogd2luLk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luLldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2godGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICAgIHZhciBPYnNlcnZlckZ1bmMgPSBPYnNlcnZlci5mdW5jO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgIC8vIFRoZSBvYnNlcnZlclVwZGF0ZSBldmVudCBzaG91bGQgb25seSBiZSB0cmlnZ2VyZWRcbiAgICAgICAgLy8gb25jZSBkZXNwaXRlIHRoZSBudW1iZXIgb2YgbXV0YXRpb25zLiAgQWRkaXRpb25hbFxuICAgICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2JzZXJ2ZXJVcGRhdGUgPSBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZSgpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luLnNldFRpbWVvdXQob2JzZXJ2ZXJVcGRhdGUsIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgICBjaGlsZExpc3Q6IHR5cGVvZiBvcHRpb25zLmNoaWxkTGlzdCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGlsZExpc3QsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFTdXBwb3J0Lm9ic2VydmVyIHx8ICFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSB7IHJldHVybjsgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lclBhcmVudHMgPSBzd2lwZXIuJGVsLnBhcmVudHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXJQYXJlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gT2JzZXJ2ZSBjb250YWluZXJcbiAgICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goc3dpcGVyLiRlbFswXSwgeyBjaGlsZExpc3Q6IHN3aXBlci5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW4gfSk7XG5cbiAgICAgIC8vIE9ic2VydmUgd3JhcHBlclxuICAgICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJHdyYXBwZXJFbFswXSwgeyBhdHRyaWJ1dGVzOiBmYWxzZSB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfSk7XG4gICAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzID0gW107XG4gICAgfSxcbiAgfTtcblxuICB2YXIgT2JzZXJ2ZXIkMSA9IHtcbiAgICBuYW1lOiAnb2JzZXJ2ZXInLFxuICAgIHBhcmFtczoge1xuICAgICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IGZhbHNlLFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgb2JzZXJ2ZXI6IHtcbiAgICAgICAgICBpbml0OiBPYnNlcnZlci5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBhdHRhY2g6IE9ic2VydmVyLmF0dGFjaC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGVzdHJveTogT2JzZXJ2ZXIuZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb2JzZXJ2ZXJzOiBbXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuaW5pdCgpO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBWaXJ0dWFsID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGZvcmNlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciByZWYgPSBzd2lwZXIucGFyYW1zO1xuICAgICAgdmFyIHNsaWRlc1BlclZpZXcgPSByZWYuc2xpZGVzUGVyVmlldztcbiAgICAgIHZhciBzbGlkZXNQZXJHcm91cCA9IHJlZi5zbGlkZXNQZXJHcm91cDtcbiAgICAgIHZhciBjZW50ZXJlZFNsaWRlcyA9IHJlZi5jZW50ZXJlZFNsaWRlcztcbiAgICAgIHZhciByZWYkMSA9IHN3aXBlci5wYXJhbXMudmlydHVhbDtcbiAgICAgIHZhciBhZGRTbGlkZXNCZWZvcmUgPSByZWYkMS5hZGRTbGlkZXNCZWZvcmU7XG4gICAgICB2YXIgYWRkU2xpZGVzQWZ0ZXIgPSByZWYkMS5hZGRTbGlkZXNBZnRlcjtcbiAgICAgIHZhciByZWYkMiA9IHN3aXBlci52aXJ0dWFsO1xuICAgICAgdmFyIHByZXZpb3VzRnJvbSA9IHJlZiQyLmZyb207XG4gICAgICB2YXIgcHJldmlvdXNUbyA9IHJlZiQyLnRvO1xuICAgICAgdmFyIHNsaWRlcyA9IHJlZiQyLnNsaWRlcztcbiAgICAgIHZhciBwcmV2aW91c1NsaWRlc0dyaWQgPSByZWYkMi5zbGlkZXNHcmlkO1xuICAgICAgdmFyIHJlbmRlclNsaWRlID0gcmVmJDIucmVuZGVyU2xpZGU7XG4gICAgICB2YXIgcHJldmlvdXNPZmZzZXQgPSByZWYkMi5vZmZzZXQ7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCB8fCAwO1xuXG4gICAgICB2YXIgb2Zmc2V0UHJvcDtcbiAgICAgIGlmIChzd2lwZXIucnRsVHJhbnNsYXRlKSB7IG9mZnNldFByb3AgPSAncmlnaHQnOyB9XG4gICAgICBlbHNlIHsgb2Zmc2V0UHJvcCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnOyB9XG5cbiAgICAgIHZhciBzbGlkZXNBZnRlcjtcbiAgICAgIHZhciBzbGlkZXNCZWZvcmU7XG4gICAgICBpZiAoY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgc2xpZGVzQWZ0ZXIgPSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQmVmb3JlO1xuICAgICAgICBzbGlkZXNCZWZvcmUgPSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQWZ0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXNBZnRlciA9IHNsaWRlc1BlclZpZXcgKyAoc2xpZGVzUGVyR3JvdXAgLSAxKSArIGFkZFNsaWRlc0JlZm9yZTtcbiAgICAgICAgc2xpZGVzQmVmb3JlID0gc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICAgIH1cbiAgICAgIHZhciBmcm9tID0gTWF0aC5tYXgoKGFjdGl2ZUluZGV4IHx8IDApIC0gc2xpZGVzQmVmb3JlLCAwKTtcbiAgICAgIHZhciB0byA9IE1hdGgubWluKChhY3RpdmVJbmRleCB8fCAwKSArIHNsaWRlc0FmdGVyLCBzbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICB2YXIgb2Zmc2V0ID0gKHN3aXBlci5zbGlkZXNHcmlkW2Zyb21dIHx8IDApIC0gKHN3aXBlci5zbGlkZXNHcmlkWzBdIHx8IDApO1xuXG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnZpcnR1YWwsIHtcbiAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgdG86IHRvLFxuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgc2xpZGVzR3JpZDogc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gb25SZW5kZXJlZCgpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgICAgaWYgKHN3aXBlci5sYXp5ICYmIHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2aW91c0Zyb20gPT09IGZyb20gJiYgcHJldmlvdXNUbyA9PT0gdG8gJiYgIWZvcmNlKSB7XG4gICAgICAgIGlmIChzd2lwZXIuc2xpZGVzR3JpZCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkICYmIG9mZnNldCAhPT0gcHJldmlvdXNPZmZzZXQpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVzLmNzcyhvZmZzZXRQcm9wLCAob2Zmc2V0ICsgXCJweFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwpIHtcbiAgICAgICAgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwoc3dpcGVyLCB7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgc2xpZGVzOiAoZnVuY3Rpb24gZ2V0U2xpZGVzKCkge1xuICAgICAgICAgICAgdmFyIHNsaWRlc1RvUmVuZGVyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZnJvbTsgaSA8PSB0bzsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvUmVuZGVyLnB1c2goc2xpZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUb1JlbmRlcjtcbiAgICAgICAgICB9KCkpLFxuICAgICAgICB9KTtcbiAgICAgICAgb25SZW5kZXJlZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcHJlcGVuZEluZGV4ZXMgPSBbXTtcbiAgICAgIHZhciBhcHBlbmRJbmRleGVzID0gW107XG4gICAgICBpZiAoZm9yY2UpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuZmluZCgoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSkpLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHByZXZpb3VzRnJvbTsgaSA8PSBwcmV2aW91c1RvOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaSA8IGZyb20gfHwgaSA+IHRvKSB7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgaSArIFwiXFxcIl1cIikpLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgc2xpZGVzLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgaWYgKGkkMSA+PSBmcm9tICYmIGkkMSA8PSB0bykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNUbyA9PT0gJ3VuZGVmaW5lZCcgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIGFwcGVuZEluZGV4ZXMucHVzaChpJDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaSQxID4gcHJldmlvdXNUbykgeyBhcHBlbmRJbmRleGVzLnB1c2goaSQxKTsgfVxuICAgICAgICAgICAgaWYgKGkkMSA8IHByZXZpb3VzRnJvbSkgeyBwcmVwZW5kSW5kZXhlcy5wdXNoKGkkMSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFwcGVuZEluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuYXBwZW5kKHJlbmRlclNsaWRlKHNsaWRlc1tpbmRleF0sIGluZGV4KSk7XG4gICAgICB9KTtcbiAgICAgIHByZXBlbmRJbmRleGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGIgLSBhOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5wcmVwZW5kKHJlbmRlclNsaWRlKHNsaWRlc1tpbmRleF0sIGluZGV4KSk7XG4gICAgICB9KTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKCcuc3dpcGVyLXNsaWRlJykuY3NzKG9mZnNldFByb3AsIChvZmZzZXQgKyBcInB4XCIpKTtcbiAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICB9LFxuICAgIHJlbmRlclNsaWRlOiBmdW5jdGlvbiByZW5kZXJTbGlkZShzbGlkZSwgaW5kZXgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMudmlydHVhbDtcbiAgICAgIGlmIChwYXJhbXMuY2FjaGUgJiYgc3dpcGVyLnZpcnR1YWwuY2FjaGVbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgICB2YXIgJHNsaWRlRWwgPSBwYXJhbXMucmVuZGVyU2xpZGVcbiAgICAgICAgPyAkKHBhcmFtcy5yZW5kZXJTbGlkZS5jYWxsKHN3aXBlciwgc2xpZGUsIGluZGV4KSlcbiAgICAgICAgOiAkKChcIjxkaXYgY2xhc3M9XFxcIlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgKyBcIlxcXCIgZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgaW5kZXggKyBcIlxcXCI+XCIgKyBzbGlkZSArIFwiPC9kaXY+XCIpKTtcbiAgICAgIGlmICghJHNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkgeyAkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTsgfVxuICAgICAgaWYgKHBhcmFtcy5jYWNoZSkgeyBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF0gPSAkc2xpZGVFbDsgfVxuICAgICAgcmV0dXJuICRzbGlkZUVsO1xuICAgIH0sXG4gICAgYXBwZW5kU2xpZGU6IGZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlc1tpXSkgeyBzd2lwZXIudmlydHVhbC5zbGlkZXMucHVzaChzbGlkZXNbaV0pOyB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5wdXNoKHNsaWRlcyk7XG4gICAgICB9XG4gICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgfSxcbiAgICBwcmVwZW5kU2xpZGU6IGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuICAgICAgdmFyIG51bWJlck9mTmV3U2xpZGVzID0gMTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2xpZGVzKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZXNbaV0pIHsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnVuc2hpZnQoc2xpZGVzW2ldKTsgfVxuICAgICAgICB9XG4gICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgICBudW1iZXJPZk5ld1NsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXMpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBzd2lwZXIudmlydHVhbC5jYWNoZTtcbiAgICAgICAgdmFyIG5ld0NhY2hlID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGNhY2hlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZWRJbmRleCkge1xuICAgICAgICAgIHZhciAkY2FjaGVkRWwgPSBjYWNoZVtjYWNoZWRJbmRleF07XG4gICAgICAgICAgdmFyIGNhY2hlZEVsSW5kZXggPSAkY2FjaGVkRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgICBpZiAoY2FjaGVkRWxJbmRleCkge1xuICAgICAgICAgICAgJGNhY2hlZEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgcGFyc2VJbnQoY2FjaGVkRWxJbmRleCwgMTApICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0NhY2hlW3BhcnNlSW50KGNhY2hlZEluZGV4LCAxMCkgKyBudW1iZXJPZk5ld1NsaWRlc10gPSAkY2FjaGVkRWw7XG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXIudmlydHVhbC5jYWNoZSA9IG5ld0NhY2hlO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDApO1xuICAgIH0sXG4gICAgcmVtb3ZlU2xpZGU6IGZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNJbmRleGVzID09PSAndW5kZWZpbmVkJyB8fCBzbGlkZXNJbmRleGVzID09PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2xpZGVzSW5kZXhlcykpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHNsaWRlc0luZGV4ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMuc3BsaWNlKHNsaWRlc0luZGV4ZXNbaV0sIDEpO1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzd2lwZXIudmlydHVhbC5jYWNoZVtzbGlkZXNJbmRleGVzW2ldXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNsaWRlc0luZGV4ZXNbaV0gPCBhY3RpdmVJbmRleCkgeyBhY3RpdmVJbmRleCAtPSAxOyB9XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5zcGxpY2Uoc2xpZGVzSW5kZXhlcywgMSk7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVbc2xpZGVzSW5kZXhlc107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlc0luZGV4ZXMgPCBhY3RpdmVJbmRleCkgeyBhY3RpdmVJbmRleCAtPSAxOyB9XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gTWF0aC5tYXgoYWN0aXZlSW5kZXgsIDApO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXgsIDApO1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsU2xpZGVzOiBmdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcyA9IFtdO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICBzd2lwZXIudmlydHVhbC5jYWNoZSA9IHt9O1xuICAgICAgfVxuICAgICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgMCk7XG4gICAgfSxcbiAgfTtcblxuICB2YXIgVmlydHVhbCQxID0ge1xuICAgIG5hbWU6ICd2aXJ0dWFsJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIHZpcnR1YWw6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIHNsaWRlczogW10sXG4gICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICByZW5kZXJTbGlkZTogbnVsbCxcbiAgICAgICAgcmVuZGVyRXh0ZXJuYWw6IG51bGwsXG4gICAgICAgIGFkZFNsaWRlc0JlZm9yZTogMCxcbiAgICAgICAgYWRkU2xpZGVzQWZ0ZXI6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgdmlydHVhbDoge1xuICAgICAgICAgIHVwZGF0ZTogVmlydHVhbC51cGRhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGFwcGVuZFNsaWRlOiBWaXJ0dWFsLmFwcGVuZFNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBwcmVwZW5kU2xpZGU6IFZpcnR1YWwucHJlcGVuZFNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICByZW1vdmVTbGlkZTogVmlydHVhbC5yZW1vdmVTbGlkZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgcmVtb3ZlQWxsU2xpZGVzOiBWaXJ0dWFsLnJlbW92ZUFsbFNsaWRlcy5iaW5kKHN3aXBlciksXG4gICAgICAgICAgcmVuZGVyU2xpZGU6IFZpcnR1YWwucmVuZGVyU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNsaWRlczogc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnNsaWRlcyxcbiAgICAgICAgICBjYWNoZToge30sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcInZpcnR1YWxcIikpO1xuICAgICAgICB2YXIgb3ZlcndyaXRlUGFyYW1zID0ge1xuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuXG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUpIHtcbiAgICAgICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKCk7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIEtleWJvYXJkID0ge1xuICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgICAgdmFyIGUgPSBldmVudDtcbiAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHsgZSA9IGUub3JpZ2luYWxFdmVudDsgfSAvLyBqcXVlcnkgZml4XG4gICAgICB2YXIga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmICgoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzOSkgfHwgKHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYga2MgPT09IDQwKSB8fCBrYyA9PT0gMzQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmICgoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzNykgfHwgKHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYga2MgPT09IDM4KSB8fCBrYyA9PT0gMzMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCAmJiBkb2MuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2MuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQgJiYgKGtjID09PSAzMyB8fCBrYyA9PT0gMzQgfHwga2MgPT09IDM3IHx8IGtjID09PSAzOSB8fCBrYyA9PT0gMzggfHwga2MgPT09IDQwKSkge1xuICAgICAgICB2YXIgaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgc3dpcGVyIHNob3VsZCBiZSBpbnNpZGUgb2YgdmlzaWJsZSBhcmVhIG9mIHdpbmRvd1xuICAgICAgICBpZiAoc3dpcGVyLiRlbC5wYXJlbnRzKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpKSkubGVuZ3RoID4gMCAmJiBzd2lwZXIuJGVsLnBhcmVudHMoKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykpKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgc3dpcGVyT2Zmc2V0ID0gc3dpcGVyLiRlbC5vZmZzZXQoKTtcbiAgICAgICAgaWYgKHJ0bCkgeyBzd2lwZXJPZmZzZXQubGVmdCAtPSBzd2lwZXIuJGVsWzBdLnNjcm9sbExlZnQ7IH1cbiAgICAgICAgdmFyIHN3aXBlckNvb3JkID0gW1xuICAgICAgICAgIFtzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcF0sXG4gICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSxcbiAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXIuaGVpZ2h0XSxcbiAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXIud2lkdGgsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXIuaGVpZ2h0XSBdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlckNvb3JkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIHBvaW50ID0gc3dpcGVyQ29vcmRbaV07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSB3aW5kb3dXaWR0aFxuICAgICAgICAgICAgJiYgcG9pbnRbMV0gPj0gMCAmJiBwb2ludFsxXSA8PSB3aW5kb3dIZWlnaHRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaW5WaWV3KSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgaWYgKGtjID09PSAzMyB8fCBrYyA9PT0gMzQgfHwga2MgPT09IDM3IHx8IGtjID09PSAzOSkge1xuICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuICAgICAgICAgIGVsc2UgeyBlLnJldHVyblZhbHVlID0gZmFsc2U7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKChrYyA9PT0gMzQgfHwga2MgPT09IDM5KSAmJiAhcnRsKSB8fCAoKGtjID09PSAzMyB8fCBrYyA9PT0gMzcpICYmIHJ0bCkpIHsgc3dpcGVyLnNsaWRlTmV4dCgpOyB9XG4gICAgICAgIGlmICgoKGtjID09PSAzMyB8fCBrYyA9PT0gMzcpICYmICFydGwpIHx8ICgoa2MgPT09IDM0IHx8IGtjID09PSAzOSkgJiYgcnRsKSkgeyBzd2lwZXIuc2xpZGVQcmV2KCk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChrYyA9PT0gMzMgfHwga2MgPT09IDM0IHx8IGtjID09PSAzOCB8fCBrYyA9PT0gNDApIHtcbiAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICAgICAgICBlbHNlIHsgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtjID09PSAzNCB8fCBrYyA9PT0gNDApIHsgc3dpcGVyLnNsaWRlTmV4dCgpOyB9XG4gICAgICAgIGlmIChrYyA9PT0gMzMgfHwga2MgPT09IDM4KSB7IHN3aXBlci5zbGlkZVByZXYoKTsgfVxuICAgICAgfVxuICAgICAgc3dpcGVyLmVtaXQoJ2tleVByZXNzJywga2MpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAkKGRvYykub24oJ2tleWRvd24nLCBzd2lwZXIua2V5Ym9hcmQuaGFuZGxlKTtcbiAgICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAkKGRvYykub2ZmKCdrZXlkb3duJywgc3dpcGVyLmtleWJvYXJkLmhhbmRsZSk7XG4gICAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH0sXG4gIH07XG5cbiAgdmFyIEtleWJvYXJkJDEgPSB7XG4gICAgbmFtZTogJ2tleWJvYXJkJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBrZXlib2FyZDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGVuYWJsZTogS2V5Ym9hcmQuZW5hYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBkaXNhYmxlOiBLZXlib2FyZC5kaXNhYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBoYW5kbGU6IEtleWJvYXJkLmhhbmRsZS5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQuZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIua2V5Ym9hcmQuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCgpIHtcbiAgICB2YXIgZXZlbnROYW1lID0gJ29ud2hlZWwnO1xuICAgIHZhciBpc1N1cHBvcnRlZCA9IGV2ZW50TmFtZSBpbiBkb2M7XG5cbiAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcbiAgICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBpZiAoIWlzU3VwcG9ydGVkXG4gICAgICAmJiBkb2MuaW1wbGVtZW50YXRpb25cbiAgICAgICYmIGRvYy5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlXG4gICAgICAvLyBhbHdheXMgcmV0dXJucyB0cnVlIGluIG5ld2VyIGJyb3dzZXJzIGFzIHBlciB0aGUgc3RhbmRhcmQuXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZVxuICAgICAgJiYgZG9jLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJycsICcnKSAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gdGVzdCBzdXBwb3J0IGZvciB0aGUgYHdoZWVsYCBldmVudCBpbiBJRTkrLlxuICAgICAgaXNTdXBwb3J0ZWQgPSBkb2MuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnRXZlbnRzLndoZWVsJywgJzMuMCcpO1xuICAgIH1cblxuICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgfVxuICB2YXIgTW91c2V3aGVlbCA9IHtcbiAgICBsYXN0U2Nyb2xsVGltZTogVXRpbHMubm93KCksXG4gICAgbGFzdEV2ZW50QmVmb3JlU25hcDogdW5kZWZpbmVkLFxuICAgIHJlY2VudFdoZWVsRXZlbnRzOiBbXSxcbiAgICBldmVudDogZnVuY3Rpb24gZXZlbnQoKSB7XG4gICAgICBpZiAod2luLm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHsgcmV0dXJuICdET01Nb3VzZVNjcm9sbCc7IH1cbiAgICAgIHJldHVybiBpc0V2ZW50U3VwcG9ydGVkKCkgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xuICAgIH0sXG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbiBub3JtYWxpemUoZSkge1xuICAgICAgLy8gUmVhc29uYWJsZSBkZWZhdWx0c1xuICAgICAgdmFyIFBJWEVMX1NURVAgPSAxMDtcbiAgICAgIHZhciBMSU5FX0hFSUdIVCA9IDQwO1xuICAgICAgdmFyIFBBR0VfSEVJR0hUID0gODAwO1xuXG4gICAgICB2YXIgc1ggPSAwO1xuICAgICAgdmFyIHNZID0gMDsgLy8gc3BpblgsIHNwaW5ZXG4gICAgICB2YXIgcFggPSAwO1xuICAgICAgdmFyIHBZID0gMDsgLy8gcGl4ZWxYLCBwaXhlbFlcblxuICAgICAgLy8gTGVnYWN5XG4gICAgICBpZiAoJ2RldGFpbCcgaW4gZSkge1xuICAgICAgICBzWSA9IGUuZGV0YWlsO1xuICAgICAgfVxuICAgICAgaWYgKCd3aGVlbERlbHRhJyBpbiBlKSB7XG4gICAgICAgIHNZID0gLWUud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgIH1cbiAgICAgIGlmICgnd2hlZWxEZWx0YVknIGluIGUpIHtcbiAgICAgICAgc1kgPSAtZS53aGVlbERlbHRhWSAvIDEyMDtcbiAgICAgIH1cbiAgICAgIGlmICgnd2hlZWxEZWx0YVgnIGluIGUpIHtcbiAgICAgICAgc1ggPSAtZS53aGVlbERlbHRhWCAvIDEyMDtcbiAgICAgIH1cblxuICAgICAgLy8gc2lkZSBzY3JvbGxpbmcgb24gRkYgd2l0aCBET01Nb3VzZVNjcm9sbFxuICAgICAgaWYgKCdheGlzJyBpbiBlICYmIGUuYXhpcyA9PT0gZS5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgc1ggPSBzWTtcbiAgICAgICAgc1kgPSAwO1xuICAgICAgfVxuXG4gICAgICBwWCA9IHNYICogUElYRUxfU1RFUDtcbiAgICAgIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuXG4gICAgICBpZiAoJ2RlbHRhWScgaW4gZSkge1xuICAgICAgICBwWSA9IGUuZGVsdGFZO1xuICAgICAgfVxuICAgICAgaWYgKCdkZWx0YVgnIGluIGUpIHtcbiAgICAgICAgcFggPSBlLmRlbHRhWDtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgIXBYKSB7IC8vIGlmIHVzZXIgc2Nyb2xscyB3aXRoIHNoaWZ0IGhlIHdhbnRzIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICAgIHBYID0gcFk7XG4gICAgICAgIHBZID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKChwWCB8fCBwWSkgJiYgZS5kZWx0YU1vZGUpIHtcbiAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7IC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgfSBlbHNlIHsgLy8gZGVsdGEgaW4gUEFHRSB1bml0c1xuICAgICAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICAgIHBZICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZhbGwtYmFjayBpZiBzcGluIGNhbm5vdCBiZSBkZXRlcm1pbmVkXG4gICAgICBpZiAocFggJiYgIXNYKSB7XG4gICAgICAgIHNYID0gKHBYIDwgMSkgPyAtMSA6IDE7XG4gICAgICB9XG4gICAgICBpZiAocFkgJiYgIXNZKSB7XG4gICAgICAgIHNZID0gKHBZIDwgMSkgPyAtMSA6IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNwaW5YOiBzWCxcbiAgICAgICAgc3Bpblk6IHNZLFxuICAgICAgICBwaXhlbFg6IHBYLFxuICAgICAgICBwaXhlbFk6IHBZLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlTW91c2VMZWF2ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQ7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWw7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN3aXBlci5tb3VzZUVudGVyZWQgJiYgIXBhcmFtcy5yZWxlYXNlT25FZGdlcykgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSB7IGUgPSBlLm9yaWdpbmFsRXZlbnQ7IH0gLy8ganF1ZXJ5IGZpeFxuICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgIHZhciBydGxGYWN0b3IgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxO1xuXG4gICAgICB2YXIgZGF0YSA9IE1vdXNld2hlZWwubm9ybWFsaXplKGUpO1xuXG4gICAgICBpZiAocGFyYW1zLmZvcmNlVG9BeGlzKSB7XG4gICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFgpID4gTWF0aC5hYnMoZGF0YS5waXhlbFkpKSB7IGRlbHRhID0gZGF0YS5waXhlbFggKiBydGxGYWN0b3I7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWSkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWCkpIHsgZGVsdGEgPSBkYXRhLnBpeGVsWTsgfVxuICAgICAgICBlbHNlIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhID0gTWF0aC5hYnMoZGF0YS5waXhlbFgpID4gTWF0aC5hYnMoZGF0YS5waXhlbFkpID8gLWRhdGEucGl4ZWxYICogcnRsRmFjdG9yIDogLWRhdGEucGl4ZWxZO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVsdGEgPT09IDApIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgaWYgKHBhcmFtcy5pbnZlcnQpIHsgZGVsdGEgPSAtZGVsdGE7IH1cblxuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgIGlmIChVdGlscy5ub3coKSAtIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID4gNjApIHtcbiAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgICBpZiAoKCFzd2lwZXIuaXNFbmQgfHwgc3dpcGVyLnBhcmFtcy5sb29wKSAmJiAhc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGwnLCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgfSBlbHNlIGlmICgoIXN3aXBlci5pc0JlZ2lubmluZyB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA9IChuZXcgd2luLkRhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRnJlZW1vZGUgb3Igc2Nyb2xsQ29udGFpbmVyOlxuXG4gICAgICAgIC8vIElmIHdlIHJlY2VudGx5IHNuYXBwZWQgYWZ0ZXIgYSBtb21lbnR1bSBzY3JvbGwsIHRoZW4gaWdub3JlIHdoZWVsIGV2ZW50c1xuICAgICAgICAvLyB0byBnaXZlIHRpbWUgZm9yIHRoZSBkZWNsZXJlcmF0aW9uIHRvIGZpbmlzaC4gU3RvcCBpZ25vcmluZyBhZnRlciA1MDAgbXNlY3NcbiAgICAgICAgLy8gb3IgaWYgaXQncyBhIG5ldyBzY3JvbGwgKGxhcmdlciBkZWx0YSBvciBpbnZlcnNlIHNpZ24gYXMgbGFzdCBldmVudCBiZWZvcmVcbiAgICAgICAgLy8gYW4gZW5kLW9mLW1vbWVudHVtIHNuYXApLlxuICAgICAgICB2YXIgbmV3RXZlbnQgPSB7IHRpbWU6IFV0aWxzLm5vdygpLCBkZWx0YTogTWF0aC5hYnMoZGVsdGEpLCBkaXJlY3Rpb246IE1hdGguc2lnbihkZWx0YSkgfTtcbiAgICAgICAgdmFyIHJlZiA9IHN3aXBlci5tb3VzZXdoZWVsO1xuICAgICAgICB2YXIgbGFzdEV2ZW50QmVmb3JlU25hcCA9IHJlZi5sYXN0RXZlbnRCZWZvcmVTbmFwO1xuICAgICAgICB2YXIgaWdub3JlV2hlZWxFdmVudHMgPSBsYXN0RXZlbnRCZWZvcmVTbmFwXG4gICAgICAgICAgJiYgbmV3RXZlbnQudGltZSA8IGxhc3RFdmVudEJlZm9yZVNuYXAudGltZSArIDUwMFxuICAgICAgICAgICYmIG5ld0V2ZW50LmRlbHRhIDw9IGxhc3RFdmVudEJlZm9yZVNuYXAuZGVsdGFcbiAgICAgICAgICAmJiBuZXdFdmVudC5kaXJlY3Rpb24gPT09IGxhc3RFdmVudEJlZm9yZVNuYXAuZGlyZWN0aW9uO1xuICAgICAgICBpZiAoIWlnbm9yZVdoZWVsRXZlbnRzKSB7XG4gICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKSArIChkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eSk7XG4gICAgICAgICAgdmFyIHdhc0JlZ2lubmluZyA9IHN3aXBlci5pc0JlZ2lubmluZztcbiAgICAgICAgICB2YXIgd2FzRW5kID0gc3dpcGVyLmlzRW5kO1xuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkgeyBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTsgfVxuICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHsgcG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7IH1cblxuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICAgICAgICBpZiAoKCF3YXNCZWdpbm5pbmcgJiYgc3dpcGVyLmlzQmVnaW5uaW5nKSB8fCAoIXdhc0VuZCAmJiBzd2lwZXIuaXNFbmQpKSB7XG4gICAgICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdoZWVsIHNjcm9sbGluZyBzdGFydHMgd2l0aCBzdGlja3kgKGFrYSBzbmFwKSBlbmFibGVkLCB0aGVuIGRldGVjdFxuICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBieSBzdG9yaW5nIHJlY2VudCAoTj0xNT8pIHdoZWVsIGV2ZW50cy5cbiAgICAgICAgICAgIC8vIDEuIGRvIGFsbCBOIGV2ZW50cyBoYXZlIGRlY3JlYXNpbmcgb3Igc2FtZSAoYWJzb2x1dGUgdmFsdWUpIGRlbHRhP1xuICAgICAgICAgICAgLy8gMi4gZGlkIGFsbCBOIGV2ZW50cyBhcnJpdmUgaW4gdGhlIGxhc3QgTSAoTT01MDA/KSBtc2Vjcz9cbiAgICAgICAgICAgIC8vIDMuIGRvZXMgdGhlIGVhcmxpZXN0IGV2ZW50IGhhdmUgYW4gKGFic29sdXRlIHZhbHVlKSBkZWx0YSB0aGF0J3NcbiAgICAgICAgICAgIC8vICAgIGF0IGxlYXN0IFAgKFA9MT8pIGxhcmdlciB0aGFuIHRoZSBtb3N0IHJlY2VudCBldmVudCdzIGRlbHRhP1xuICAgICAgICAgICAgLy8gNC4gZG9lcyB0aGUgbGF0ZXN0IGV2ZW50IGhhdmUgYSBkZWx0YSB0aGF0J3Mgc21hbGxlciB0aGFuIFEgKFE9Nj8pIHBpeGVscz9cbiAgICAgICAgICAgIC8vIElmIDEtNCBhcmUgXCJ5ZXNcIiB0aGVuIHdlJ3JlIG5lYXIgdGhlIGVuZCBvZiBhIG1vbXVudHVtIHNjcm9sbCBkZWNlbGVyYXRpb24uXG4gICAgICAgICAgICAvLyBTbmFwIGltbWVkaWF0ZWx5IGFuZCBpZ25vcmUgcmVtYWluaW5nIHdoZWVsIGV2ZW50cyBpbiB0aGlzIHNjcm9sbC5cbiAgICAgICAgICAgIC8vIFNlZSBjb21tZW50IGFib3ZlIGZvciBcInJlbWFpbmluZyB3aGVlbCBldmVudHMgaW4gdGhpcyBzY3JvbGxcIiBkZXRlcm1pbmF0aW9uLlxuICAgICAgICAgICAgLy8gSWYgMS00IGFyZW4ndCBzYXRpc2ZpZWQsIHRoZW4gd2FpdCB0byBzbmFwIHVudGlsIDUwMG1zIGFmdGVyIHRoZSBsYXN0IGV2ZW50LlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5tb3VzZXdoZWVsLnRpbWVvdXQpO1xuICAgICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciByZWNlbnRXaGVlbEV2ZW50cyA9IHN3aXBlci5tb3VzZXdoZWVsLnJlY2VudFdoZWVsRXZlbnRzO1xuICAgICAgICAgICAgaWYgKHJlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA+PSAxNSkge1xuICAgICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zaGlmdCgpOyAvLyBvbmx5IHN0b3JlIHRoZSBsYXN0IE4gZXZlbnRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldkV2ZW50ID0gcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID8gcmVjZW50V2hlZWxFdmVudHNbcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgZmlyc3RFdmVudCA9IHJlY2VudFdoZWVsRXZlbnRzWzBdO1xuICAgICAgICAgICAgcmVjZW50V2hlZWxFdmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgICAgICBpZiAocHJldkV2ZW50ICYmIChuZXdFdmVudC5kZWx0YSA+IHByZXZFdmVudC5kZWx0YSB8fCBuZXdFdmVudC5kaXJlY3Rpb24gIT09IHByZXZFdmVudC5kaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIC8vIEluY3JlYXNpbmcgb3IgcmV2ZXJzZS1zaWduIGRlbHRhIG1lYW5zIHRoZSB1c2VyIHN0YXJ0ZWQgc2Nyb2xsaW5nIGFnYWluLiBDbGVhciB0aGUgd2hlZWwgZXZlbnQgbG9nLlxuICAgICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA+PSAxNVxuICAgICAgICAgICAgICAgICYmIG5ld0V2ZW50LnRpbWUgLSBmaXJzdEV2ZW50LnRpbWUgPCA1MDBcbiAgICAgICAgICAgICAgICAmJiBmaXJzdEV2ZW50LmRlbHRhIC0gbmV3RXZlbnQuZGVsdGEgPj0gMVxuICAgICAgICAgICAgICAgICYmIG5ld0V2ZW50LmRlbHRhIDw9IDZcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBXZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBkZWNlbGVyYXRpb24gb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAgICAgICAgICAgICAvLyB0byB3YWl0IGZvciBtb3JlIGV2ZW50cy4gU25hcCBBU0FQIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgICAgICAgICAgIC8vIEFsc28sIGJlY2F1c2UgdGhlcmUncyBzb21lIHJlbWFpbmluZyBtb21lbnR1bSB3ZSdsbCBiaWFzIHRoZSBzbmFwIGluIHRoZVxuICAgICAgICAgICAgICAvLyBkaXJlY3Rpb24gb2YgdGhlIG9uZ29pbmcgc2Nyb2xsIGJlY2F1c2UgaXQncyBiZXR0ZXIgVVggZm9yIHRoZSBzY3JvbGwgdG8gc25hcFxuICAgICAgICAgICAgICAvLyBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gYXMgdGhlIHNjcm9sbCBpbnN0ZWFkIG9mIHJldmVyc2luZyB0byBzbmFwLiAgVGhlcmVmb3JlLFxuICAgICAgICAgICAgICAvLyBpZiBpdCdzIGFscmVhZHkgc2Nyb2xsZWQgbW9yZSB0aGFuIDIwJSBpbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGtlZXAgZ29pbmcuXG4gICAgICAgICAgICAgIHZhciBzbmFwVG9UaHJlc2hvbGQgPSBkZWx0YSA+IDAgPyAwLjggOiAwLjI7XG4gICAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAgPSBuZXdFdmVudDtcbiAgICAgICAgICAgICAgcmVjZW50V2hlZWxFdmVudHMuc3BsaWNlKDApO1xuICAgICAgICAgICAgICBzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0ID0gVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB1bmRlZmluZWQsIHNuYXBUb1RocmVzaG9sZCk7XG4gICAgICAgICAgICAgIH0sIDApOyAvLyBubyBkZWxheTsgbW92ZSBvbiBuZXh0IHRpY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCkge1xuICAgICAgICAgICAgICAvLyBpZiB3ZSBnZXQgaGVyZSwgdGhlbiB3ZSBoYXZlbid0IGRldGVjdGVkIHRoZSBlbmQgb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvXG4gICAgICAgICAgICAgIC8vIHdlJ2xsIGNvbnNpZGVyIGEgc2Nyb2xsIFwiY29tcGxldGVcIiB3aGVuIHRoZXJlIGhhdmVuJ3QgYmVlbiBhbnkgd2hlZWwgZXZlbnRzXG4gICAgICAgICAgICAgIC8vIGZvciA1MDBtcy5cbiAgICAgICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCA9IFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc25hcFRvVGhyZXNob2xkID0gMC41O1xuICAgICAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAgPSBuZXdFdmVudDtcbiAgICAgICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHVuZGVmaW5lZCwgc25hcFRvVGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgICAgaWYgKCFpZ25vcmVXaGVlbEV2ZW50cykgeyBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgZSk7IH1cblxuICAgICAgICAgIC8vIFN0b3AgYXV0b3BsYXlcbiAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheSAmJiBzd2lwZXIucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHsgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTsgfVxuICAgICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIHx8IHBvc2l0aW9uID09PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICAgIGVsc2UgeyBlLnJldHVyblZhbHVlID0gZmFsc2U7IH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnQgPSBNb3VzZXdoZWVsLmV2ZW50KCk7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50KSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB2YXIgdGFyZ2V0ID0gc3dpcGVyLiRlbDtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkICE9PSAnY29udGFpbmVyJykge1xuICAgICAgICB0YXJnZXQgPSAkKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZWQpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0Lm9uKCdtb3VzZWVudGVyJywgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlTW91c2VFbnRlcik7XG4gICAgICB0YXJnZXQub24oJ21vdXNlbGVhdmUnLCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIHRhcmdldC5vbihldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnQgPSBNb3VzZXdoZWVsLmV2ZW50KCk7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50KSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKCFzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgdmFyIHRhcmdldCA9IHN3aXBlci4kZWw7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgdGFyZ2V0ID0gJChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5vZmYoZXZlbnQsIHN3aXBlci5tb3VzZXdoZWVsLmhhbmRsZSk7XG4gICAgICBzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBNb3VzZXdoZWVsJDEgPSB7XG4gICAgbmFtZTogJ21vdXNld2hlZWwnLFxuICAgIHBhcmFtczoge1xuICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgcmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAgICAgICBpbnZlcnQ6IGZhbHNlLFxuICAgICAgICBmb3JjZVRvQXhpczogZmFsc2UsXG4gICAgICAgIHNlbnNpdGl2aXR5OiAxLFxuICAgICAgICBldmVudHNUYXJnZWQ6ICdjb250YWluZXInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBlbmFibGU6IE1vdXNld2hlZWwuZW5hYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBkaXNhYmxlOiBNb3VzZXdoZWVsLmRpc2FibGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGhhbmRsZTogTW91c2V3aGVlbC5oYW5kbGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXI6IE1vdXNld2hlZWwuaGFuZGxlTW91c2VFbnRlci5iaW5kKHN3aXBlciksXG4gICAgICAgICAgaGFuZGxlTW91c2VMZWF2ZTogTW91c2V3aGVlbC5oYW5kbGVNb3VzZUxlYXZlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBsYXN0U2Nyb2xsVGltZTogVXRpbHMubm93KCksXG4gICAgICAgICAgbGFzdEV2ZW50QmVmb3JlU25hcDogdW5kZWZpbmVkLFxuICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzOiBbXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmVuYWJsZWQpIHsgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlKCk7IH1cbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSB7IHN3aXBlci5tb3VzZXdoZWVsLmRpc2FibGUoKTsgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBOYXZpZ2F0aW9uID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgLy8gVXBkYXRlIE5hdmlnYXRpb24gQnV0dG9uc1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHJlZiA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgICAgdmFyICRuZXh0RWwgPSByZWYuJG5leHRFbDtcbiAgICAgIHZhciAkcHJldkVsID0gcmVmLiRwcmV2RWw7XG5cbiAgICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgJHByZXZFbC5hZGRDbGFzcyhwYXJhbXMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHByZXZFbC5yZW1vdmVDbGFzcyhwYXJhbXMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgJHByZXZFbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICAkbmV4dEVsLmFkZENsYXNzKHBhcmFtcy5kaXNhYmxlZENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbmV4dEVsLnJlbW92ZUNsYXNzKHBhcmFtcy5kaXNhYmxlZENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICAkbmV4dEVsW3N3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblByZXZDbGljazogZnVuY3Rpb24gb25QcmV2Q2xpY2soZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHsgcmV0dXJuOyB9XG4gICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgfSxcbiAgICBvbk5leHRDbGljazogZnVuY3Rpb24gb25OZXh0Q2xpY2soZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHsgcmV0dXJuOyB9XG4gICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uO1xuICAgICAgaWYgKCEocGFyYW1zLm5leHRFbCB8fCBwYXJhbXMucHJldkVsKSkgeyByZXR1cm47IH1cblxuICAgICAgdmFyICRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbDtcbiAgICAgIGlmIChwYXJhbXMubmV4dEVsKSB7XG4gICAgICAgICRuZXh0RWwgPSAkKHBhcmFtcy5uZXh0RWwpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50c1xuICAgICAgICAgICYmIHR5cGVvZiBwYXJhbXMubmV4dEVsID09PSAnc3RyaW5nJ1xuICAgICAgICAgICYmICRuZXh0RWwubGVuZ3RoID4gMVxuICAgICAgICAgICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMubmV4dEVsKS5sZW5ndGggPT09IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJG5leHRFbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMubmV4dEVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5wcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbCA9ICQocGFyYW1zLnByZXZFbCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzXG4gICAgICAgICAgJiYgdHlwZW9mIHBhcmFtcy5wcmV2RWwgPT09ICdzdHJpbmcnXG4gICAgICAgICAgJiYgJHByZXZFbC5sZW5ndGggPiAxXG4gICAgICAgICAgJiYgc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5wcmV2RWwpLmxlbmd0aCA9PT0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAkcHJldkVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5wcmV2RWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgICAkbmV4dEVsLm9uKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgICAkcHJldkVsLm9uKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uUHJldkNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgICAgICRuZXh0RWw6ICRuZXh0RWwsXG4gICAgICAgIG5leHRFbDogJG5leHRFbCAmJiAkbmV4dEVsWzBdLFxuICAgICAgICAkcHJldkVsOiAkcHJldkVsLFxuICAgICAgICBwcmV2RWw6ICRwcmV2RWwgJiYgJHByZXZFbFswXSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHJlZiA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgICAgdmFyICRuZXh0RWwgPSByZWYuJG5leHRFbDtcbiAgICAgIHZhciAkcHJldkVsID0gcmVmLiRwcmV2RWw7XG4gICAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCkge1xuICAgICAgICAkbmV4dEVsLm9mZignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vbk5leHRDbGljayk7XG4gICAgICAgICRuZXh0RWwucmVtb3ZlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGgpIHtcbiAgICAgICAgJHByZXZFbC5vZmYoJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spO1xuICAgICAgICAkcHJldkVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHZhciBOYXZpZ2F0aW9uJDEgPSB7XG4gICAgbmFtZTogJ25hdmlnYXRpb24nLFxuICAgIHBhcmFtczoge1xuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IG51bGwsXG4gICAgICAgIHByZXZFbDogbnVsbCxcblxuICAgICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICAgICAgaGlkZGVuQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWhpZGRlbicsXG4gICAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1idXR0b24tbG9jaycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIGluaXQ6IE5hdmlnYXRpb24uaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgdXBkYXRlOiBOYXZpZ2F0aW9uLnVwZGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGVzdHJveTogTmF2aWdhdGlvbi5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBvbk5leHRDbGljazogTmF2aWdhdGlvbi5vbk5leHRDbGljay5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25QcmV2Q2xpY2s6IE5hdmlnYXRpb24ub25QcmV2Q2xpY2suYmluZChzd2lwZXIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgdG9FZGdlOiBmdW5jdGlvbiB0b0VkZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICBmcm9tRWRnZTogZnVuY3Rpb24gZnJvbUVkZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24uZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayhlKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcmVmID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgICAgIHZhciAkbmV4dEVsID0gcmVmLiRuZXh0RWw7XG4gICAgICAgIHZhciAkcHJldkVsID0gcmVmLiRwcmV2RWw7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZU9uQ2xpY2tcbiAgICAgICAgICAmJiAhJChlLnRhcmdldCkuaXMoJHByZXZFbClcbiAgICAgICAgICAmJiAhJChlLnRhcmdldCkuaXMoJG5leHRFbClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFyIGlzSGlkZGVuO1xuICAgICAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgICAgICBpc0hpZGRlbiA9ICRuZXh0RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICAgIGlzSGlkZGVuID0gJHByZXZFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uU2hvdycsIHN3aXBlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uSGlkZScsIHN3aXBlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgICAgICAkbmV4dEVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAgICAgICAkcHJldkVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIFBhZ2luYXRpb24gPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAvLyBSZW5kZXIgfHwgVXBkYXRlIFBhZ2luYXRpb24gYnVsbGV0cy9pdGVtc1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgICAgdmFyICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICAgIC8vIEN1cnJlbnQvVG90YWxcbiAgICAgIHZhciBjdXJyZW50O1xuICAgICAgdmFyIHRvdGFsID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSAoc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgY3VycmVudCA9IE1hdGguY2VpbCgoc3dpcGVyLmFjdGl2ZUluZGV4IC0gc3dpcGVyLmxvb3BlZFNsaWRlcykgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPiBzbGlkZXNMZW5ndGggLSAxIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSkge1xuICAgICAgICAgIGN1cnJlbnQgLT0gKHNsaWRlc0xlbmd0aCAtIChzd2lwZXIubG9vcGVkU2xpZGVzICogMikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID4gdG90YWwgLSAxKSB7IGN1cnJlbnQgLT0gdG90YWw7IH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPCAwICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdidWxsZXRzJykgeyBjdXJyZW50ID0gdG90YWwgKyBjdXJyZW50OyB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdXJyZW50ID0gc3dpcGVyLnNuYXBJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggfHwgMDtcbiAgICAgIH1cbiAgICAgIC8vIFR5cGVzXG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICAgIHZhciBmaXJzdEluZGV4O1xuICAgICAgICB2YXIgbGFzdEluZGV4O1xuICAgICAgICB2YXIgbWlkSW5kZXg7XG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplID0gYnVsbGV0cy5lcSgwKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnb3V0ZXJXaWR0aCcgOiAnb3V0ZXJIZWlnaHQnXSh0cnVlKTtcbiAgICAgICAgICAkZWwuY3NzKHN3aXBlci5pc0hvcml6b250YWwoKSA/ICd3aWR0aCcgOiAnaGVpZ2h0JywgKChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KSkgKyBcInB4XCIpKTtcbiAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA+IDEgJiYgc3dpcGVyLnByZXZpb3VzSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ICs9IChjdXJyZW50IC0gc3dpcGVyLnByZXZpb3VzSW5kZXgpO1xuICAgICAgICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA+IChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkpIHtcbiAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZmlyc3RJbmRleCA9IGN1cnJlbnQgLSBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg7XG4gICAgICAgICAgbGFzdEluZGV4ID0gZmlyc3RJbmRleCArIChNYXRoLm1pbihidWxsZXRzLmxlbmd0aCwgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykgLSAxKTtcbiAgICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0cy5yZW1vdmVDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIiBcIiArIChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dCBcIiArIChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dC1uZXh0IFwiICsgKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2IFwiICsgKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2LXByZXYgXCIgKyAocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLW1haW5cIikpO1xuICAgICAgICBpZiAoJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBidWxsZXRzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBidWxsZXQpIHtcbiAgICAgICAgICAgIHZhciAkYnVsbGV0ID0gJChidWxsZXQpO1xuICAgICAgICAgICAgdmFyIGJ1bGxldEluZGV4ID0gJGJ1bGxldC5pbmRleCgpO1xuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGZpcnN0SW5kZXggJiYgYnVsbGV0SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1tYWluXCIpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkYnVsbGV0XG4gICAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItcHJldlwiKSlcbiAgICAgICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2LXByZXZcIikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgJGJ1bGxldFxuICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCgocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLW5leHRcIikpXG4gICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dC1uZXh0XCIpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciAkYnVsbGV0ID0gYnVsbGV0cy5lcShjdXJyZW50KTtcbiAgICAgICAgICB2YXIgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG4gICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgIHZhciAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXgpO1xuICAgICAgICAgICAgdmFyICRsYXN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0cy5lcShsYXN0SW5kZXgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgYnVsbGV0cy5lcShpKS5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1tYWluXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHM7IGkkMSA+PSAwOyBpJDEgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgYnVsbGV0cy5lcShidWxsZXRzLmxlbmd0aCAtIGkkMSkuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbWFpblwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItcHJldlwiKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZpcnN0RGlzcGxheWVkQnVsbGV0XG4gICAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItcHJldlwiKSlcbiAgICAgICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2LXByZXZcIikpO1xuICAgICAgICAgICAgICAgICRsYXN0RGlzcGxheWVkQnVsbGV0XG4gICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dFwiKSlcbiAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1uZXh0LW5leHRcIikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkZmlyc3REaXNwbGF5ZWRCdWxsZXRcbiAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCgocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLXByZXZcIikpXG4gICAgICAgICAgICAgICAgLnByZXYoKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2LXByZXZcIikpO1xuICAgICAgICAgICAgICAkbGFzdERpc3BsYXllZEJ1bGxldFxuICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dFwiKSlcbiAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCgocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLW5leHQtbmV4dFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICB2YXIgZHluYW1pY0J1bGxldHNMZW5ndGggPSBNYXRoLm1pbihidWxsZXRzLmxlbmd0aCwgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyArIDQpO1xuICAgICAgICAgIHZhciBidWxsZXRzT2Zmc2V0ID0gKCgoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSAqIGR5bmFtaWNCdWxsZXRzTGVuZ3RoKSAtIChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplKSkgLyAyKSAtIChtaWRJbmRleCAqIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUpO1xuICAgICAgICAgIHZhciBvZmZzZXRQcm9wID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgICBidWxsZXRzLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBvZmZzZXRQcm9wIDogJ3RvcCcsIChidWxsZXRzT2Zmc2V0ICsgXCJweFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICAkZWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLmN1cnJlbnRDbGFzcykpKS50ZXh0KHBhcmFtcy5mb3JtYXRGcmFjdGlvbkN1cnJlbnQoY3VycmVudCArIDEpKTtcbiAgICAgICAgJGVsLmZpbmQoKFwiLlwiICsgKHBhcmFtcy50b3RhbENsYXNzKSkpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uVG90YWwodG90YWwpKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NiYXJEaXJlY3Rpb247XG4gICAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9ncmVzc2JhckRpcmVjdGlvbiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsO1xuICAgICAgICB2YXIgc2NhbGVYID0gMTtcbiAgICAgICAgdmFyIHNjYWxlWSA9IDE7XG4gICAgICAgIGlmIChwcm9ncmVzc2JhckRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgc2NhbGVYID0gc2NhbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NhbGVZID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLmZpbmQoKFwiLlwiICsgKHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcykpKS50cmFuc2Zvcm0oKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlWChcIiArIHNjYWxlWCArIFwiKSBzY2FsZVkoXCIgKyBzY2FsZVkgKyBcIilcIikpLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdjdXN0b20nICYmIHBhcmFtcy5yZW5kZXJDdXN0b20pIHtcbiAgICAgICAgJGVsLmh0bWwocGFyYW1zLnJlbmRlckN1c3RvbShzd2lwZXIsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN3aXBlciwgJGVsWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uVXBkYXRlJywgc3dpcGVyLCAkZWxbMF0pO1xuICAgICAgfVxuICAgICAgJGVsW3N3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIC8vIFJlbmRlciBDb250YWluZXJcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICAgIGlmICghcGFyYW1zLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uJGVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG5cbiAgICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgICB2YXIgcGFnaW5hdGlvbkhUTUwgPSAnJztcbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICAgIHZhciBudW1iZXJPZkJ1bGxldHMgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIChzd2lwZXIubG9vcGVkU2xpZGVzICogMikpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IHBhcmFtcy5yZW5kZXJCdWxsZXQuY2FsbChzd2lwZXIsIGksIHBhcmFtcy5idWxsZXRDbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IFwiPFwiICsgKHBhcmFtcy5idWxsZXRFbGVtZW50KSArIFwiIGNsYXNzPVxcXCJcIiArIChwYXJhbXMuYnVsbGV0Q2xhc3MpICsgXCJcXFwiPjwvXCIgKyAocGFyYW1zLmJ1bGxldEVsZW1lbnQpICsgXCI+XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9ICRlbC5maW5kKChcIi5cIiArIChwYXJhbXMuYnVsbGV0Q2xhc3MpKSk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJGcmFjdGlvbikge1xuICAgICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlckZyYWN0aW9uLmNhbGwoc3dpcGVyLCBwYXJhbXMuY3VycmVudENsYXNzLCBwYXJhbXMudG90YWxDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIChwYXJhbXMuY3VycmVudENsYXNzKSArIFwiXFxcIj48L3NwYW4+XCJcbiAgICAgICAgICArICcgLyAnXG4gICAgICAgICAgKyBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIChwYXJhbXMudG90YWxDbGFzcykgKyBcIlxcXCI+PC9zcGFuPlwiO1xuICAgICAgICB9XG4gICAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgICBpZiAocGFyYW1zLnJlbmRlclByb2dyZXNzYmFyKSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIuY2FsbChzd2lwZXIsIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIChwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpICsgXCJcXFwiPjwvc3Bhbj5cIjtcbiAgICAgICAgfVxuICAgICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgc3dpcGVyLnBhZ2luYXRpb24uJGVsWzBdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgICBpZiAoIXBhcmFtcy5lbCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyICRlbCA9ICQocGFyYW1zLmVsKTtcbiAgICAgIGlmICgkZWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHNcbiAgICAgICAgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgJGVsLmxlbmd0aCA+IDFcbiAgICAgICAgJiYgc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCkubGVuZ3RoID09PSAxXG4gICAgICApIHtcbiAgICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jbGlja2FibGVDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcblxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICRlbC5hZGRDbGFzcygoXCJcIiArIChwYXJhbXMubW9kaWZpZXJDbGFzcykgKyAocGFyYW1zLnR5cGUpICsgXCItZHluYW1pY1wiKSk7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIDwgMSkge1xuICAgICAgICAgIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicgJiYgcGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGUpIHtcbiAgICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICAkZWwub24oJ2NsaWNrJywgKFwiLlwiICsgKHBhcmFtcy5idWxsZXRDbGFzcykpLCBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpICogc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7IGluZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7IH1cbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICAgICAgJGVsOiAkZWwsXG4gICAgICAgIGVsOiAkZWxbMF0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgdmFyICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcblxuICAgICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5oaWRkZW5DbGFzcyk7XG4gICAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBwYXJhbXMudHlwZSk7XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cykgeyBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7IH1cbiAgICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAgICRlbC5vZmYoJ2NsaWNrJywgKFwiLlwiICsgKHBhcmFtcy5idWxsZXRDbGFzcykpKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHZhciBQYWdpbmF0aW9uJDEgPSB7XG4gICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgIHBhcmFtczoge1xuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgYnVsbGV0RWxlbWVudDogJ3NwYW4nLFxuICAgICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICAgIHJlbmRlckJ1bGxldDogbnVsbCxcbiAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICAgIHJlbmRlckZyYWN0aW9uOiBudWxsLFxuICAgICAgICByZW5kZXJDdXN0b206IG51bGwsXG4gICAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsIC8vICdidWxsZXRzJyBvciAncHJvZ3Jlc3NiYXInIG9yICdmcmFjdGlvbicgb3IgJ2N1c3RvbSdcbiAgICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgICBkeW5hbWljTWFpbkJ1bGxldHM6IDEsXG4gICAgICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogZnVuY3Rpb24gKG51bWJlcikgeyByZXR1cm4gbnVtYmVyOyB9LFxuICAgICAgICBmb3JtYXRGcmFjdGlvblRvdGFsOiBmdW5jdGlvbiAobnVtYmVyKSB7IHJldHVybiBudW1iZXI7IH0sXG4gICAgICAgIGJ1bGxldENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJyxcbiAgICAgICAgbW9kaWZpZXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLScsIC8vIE5FV1xuICAgICAgICBjdXJyZW50Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50JyxcbiAgICAgICAgdG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcbiAgICAgICAgaGlkZGVuQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4nLFxuICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwnLFxuICAgICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZScsXG4gICAgICAgIGNsaWNrYWJsZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlJywgLy8gTkVXXG4gICAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBpbml0OiBQYWdpbmF0aW9uLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHJlbmRlcjogUGFnaW5hdGlvbi5yZW5kZXIuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHVwZGF0ZTogUGFnaW5hdGlvbi51cGRhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGRlc3Ryb3k6IFBhZ2luYXRpb24uZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4OiAwLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmluaXQoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIGFjdGl2ZUluZGV4Q2hhbmdlOiBmdW5jdGlvbiBhY3RpdmVJbmRleENoYW5nZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNuYXBJbmRleENoYW5nZTogZnVuY3Rpb24gc25hcEluZGV4Q2hhbmdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNsaWRlc0xlbmd0aENoYW5nZTogZnVuY3Rpb24gc2xpZGVzTGVuZ3RoQ2hhbmdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnJlbmRlcigpO1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc25hcEdyaWRMZW5ndGhDaGFuZ2U6IGZ1bmN0aW9uIHNuYXBHcmlkTGVuZ3RoQ2hhbmdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5kZXN0cm95KCk7XG4gICAgICB9LFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWxcbiAgICAgICAgICAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZU9uQ2xpY2tcbiAgICAgICAgICAmJiBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID4gMFxuICAgICAgICAgICYmICEkKGUudGFyZ2V0KS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpXG4gICAgICAgICkge1xuICAgICAgICAgIHZhciBpc0hpZGRlbiA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25TaG93Jywgc3dpcGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25IaWRlJywgc3dpcGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgU2Nyb2xsYmFyID0ge1xuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICAgIHZhciBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgICAgIHZhciBkcmFnU2l6ZSA9IHNjcm9sbGJhci5kcmFnU2l6ZTtcbiAgICAgIHZhciB0cmFja1NpemUgPSBzY3JvbGxiYXIudHJhY2tTaXplO1xuICAgICAgdmFyICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuXG4gICAgICB2YXIgbmV3U2l6ZSA9IGRyYWdTaXplO1xuICAgICAgdmFyIG5ld1BvcyA9ICh0cmFja1NpemUgLSBkcmFnU2l6ZSkgKiBwcm9ncmVzcztcbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgbmV3UG9zID0gLW5ld1BvcztcbiAgICAgICAgaWYgKG5ld1BvcyA+IDApIHtcbiAgICAgICAgICBuZXdTaXplID0gZHJhZ1NpemUgLSBuZXdQb3M7XG4gICAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICgtbmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgICAgICBuZXdTaXplID0gdHJhY2tTaXplICsgbmV3UG9zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld1BvcyA8IDApIHtcbiAgICAgICAgbmV3U2l6ZSA9IGRyYWdTaXplICsgbmV3UG9zO1xuICAgICAgICBuZXdQb3MgPSAwO1xuICAgICAgfSBlbHNlIGlmIChuZXdQb3MgKyBkcmFnU2l6ZSA+IHRyYWNrU2l6ZSkge1xuICAgICAgICBuZXdTaXplID0gdHJhY2tTaXplIC0gbmV3UG9zO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAkZHJhZ0VsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIG5ld1BvcyArIFwicHgsIDAsIDApXCIpKTtcbiAgICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IG5ld1NpemUgKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZHJhZ0VsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgbmV3UG9zICsgXCJweCwgMClcIikpO1xuICAgICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IG5ld1NpemUgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIudGltZW91dCk7XG4gICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICRlbC50cmFuc2l0aW9uKDQwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSB7IHJldHVybjsgfVxuICAgICAgc3dpcGVyLnNjcm9sbGJhci4kZHJhZ0VsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG5cbiAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB2YXIgdHJhY2tTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJGVsWzBdLm9mZnNldFdpZHRoIDogJGVsWzBdLm9mZnNldEhlaWdodDtcblxuICAgICAgdmFyIGRpdmlkZXIgPSBzd2lwZXIuc2l6ZSAvIHN3aXBlci52aXJ0dWFsU2l6ZTtcbiAgICAgIHZhciBtb3ZlRGl2aWRlciA9IGRpdmlkZXIgKiAodHJhY2tTaXplIC8gc3dpcGVyLnNpemUpO1xuICAgICAgdmFyIGRyYWdTaXplO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplID09PSAnYXV0bycpIHtcbiAgICAgICAgZHJhZ1NpemUgPSB0cmFja1NpemUgKiBkaXZpZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ1NpemUgPSBwYXJzZUludChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSwgMTApO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSBkcmFnU2l6ZSArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gZHJhZ1NpemUgKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXZpZGVyID49IDEpIHtcbiAgICAgICAgJGVsWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxbMF0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmhpZGUpIHtcbiAgICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuICAgICAgVXRpbHMuZXh0ZW5kKHNjcm9sbGJhciwge1xuICAgICAgICB0cmFja1NpemU6IHRyYWNrU2l6ZSxcbiAgICAgICAgZGl2aWRlcjogZGl2aWRlcixcbiAgICAgICAgbW92ZURpdmlkZXI6IG1vdmVEaXZpZGVyLFxuICAgICAgICBkcmFnU2l6ZTogZHJhZ1NpemUsXG4gICAgICB9KTtcbiAgICAgIHNjcm9sbGJhci4kZWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5sb2NrQ2xhc3MpO1xuICAgIH0sXG4gICAgZ2V0UG9pbnRlclBvc2l0aW9uOiBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHJldHVybiAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WSk7XG4gICAgfSxcbiAgICBzZXREcmFnUG9zaXRpb246IGZ1bmN0aW9uIHNldERyYWdQb3NpdGlvbihlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICAgIHZhciBkcmFnU2l6ZSA9IHNjcm9sbGJhci5kcmFnU2l6ZTtcbiAgICAgIHZhciB0cmFja1NpemUgPSBzY3JvbGxiYXIudHJhY2tTaXplO1xuICAgICAgdmFyIGRyYWdTdGFydFBvcyA9IHNjcm9sbGJhci5kcmFnU3RhcnRQb3M7XG5cbiAgICAgIHZhciBwb3NpdGlvblJhdGlvO1xuICAgICAgcG9zaXRpb25SYXRpbyA9ICgoc2Nyb2xsYmFyLmdldFBvaW50ZXJQb3NpdGlvbihlKSkgLSAkZWwub2Zmc2V0KClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddXG4gICAgICAgIC0gKGRyYWdTdGFydFBvcyAhPT0gbnVsbCA/IGRyYWdTdGFydFBvcyA6IGRyYWdTaXplIC8gMikpIC8gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKTtcbiAgICAgIHBvc2l0aW9uUmF0aW8gPSBNYXRoLm1heChNYXRoLm1pbihwb3NpdGlvblJhdGlvLCAxKSwgMCk7XG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIHBvc2l0aW9uUmF0aW8gPSAxIC0gcG9zaXRpb25SYXRpbztcbiAgICAgIH1cblxuICAgICAgdmFyIHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgKChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogcG9zaXRpb25SYXRpbyk7XG5cbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhwb3NpdGlvbik7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHBvc2l0aW9uKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9LFxuICAgIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICAgdmFyICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuZHJhZ1N0YXJ0UG9zID0gKGUudGFyZ2V0ID09PSAkZHJhZ0VsWzBdIHx8IGUudGFyZ2V0ID09PSAkZHJhZ0VsKVxuICAgICAgICA/IHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gOiBudWxsO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgIHNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24oZSk7XG5cbiAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KTtcblxuICAgICAgJGVsLnRyYW5zaXRpb24oMCk7XG4gICAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgICAgJGVsLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ3Njcm9sbC1zbmFwLXR5cGUnLCAnbm9uZScpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbGJhckRyYWdTdGFydCcsIGUpO1xuICAgIH0sXG4gICAgb25EcmFnTW92ZTogZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICAgdmFyICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcblxuICAgICAgaWYgKCFzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCkgeyByZXR1cm47IH1cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuICAgICAgZWxzZSB7IGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgfVxuICAgICAgc2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbigwKTtcbiAgICAgICRlbC50cmFuc2l0aW9uKDApO1xuICAgICAgJGRyYWdFbC50cmFuc2l0aW9uKDApO1xuICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbGJhckRyYWdNb3ZlJywgZSk7XG4gICAgfSxcbiAgICBvbkRyYWdFbmQ6IGZ1bmN0aW9uIG9uRHJhZ0VuZChlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG5cbiAgICAgIGlmICghc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQpIHsgcmV0dXJuOyB9XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ3Njcm9sbC1zbmFwLXR5cGUnLCAnJyk7XG4gICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbignJyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0ID0gVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRlbC5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgICAkZWwudHJhbnNpdGlvbig0MDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnRW5kJywgZSk7XG4gICAgICBpZiAocGFyYW1zLnNuYXBPblJlbGVhc2UpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmFibGVEcmFnZ2FibGU6IGZ1bmN0aW9uIGVuYWJsZURyYWdnYWJsZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgICAgdmFyIHRvdWNoRXZlbnRzVG91Y2ggPSBzd2lwZXIudG91Y2hFdmVudHNUb3VjaDtcbiAgICAgIHZhciB0b3VjaEV2ZW50c0Rlc2t0b3AgPSBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICAgIHZhciB0YXJnZXQgPSAkZWxbMF07XG4gICAgICB2YXIgYWN0aXZlTGlzdGVuZXIgPSBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogZmFsc2UsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgaWYgKCFTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3AubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLm1vdmUsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlRHJhZ2dhYmxlOiBmdW5jdGlvbiBkaXNhYmxlRHJhZ2dhYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgdG91Y2hFdmVudHNUb3VjaCA9IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoO1xuICAgICAgdmFyIHRvdWNoRXZlbnRzRGVza3RvcCA9IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3A7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICAgdmFyIHRhcmdldCA9ICRlbFswXTtcbiAgICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICBpZiAoIVN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICAgIHZhciAkc3dpcGVyRWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuXG4gICAgICB2YXIgJGVsID0gJChwYXJhbXMuZWwpO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEgJiYgJHN3aXBlckVsLmZpbmQocGFyYW1zLmVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgJGVsID0gJHN3aXBlckVsLmZpbmQocGFyYW1zLmVsKTtcbiAgICAgIH1cblxuICAgICAgdmFyICRkcmFnRWwgPSAkZWwuZmluZCgoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzKSkpO1xuICAgICAgaWYgKCRkcmFnRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICRkcmFnRWwgPSAkKChcIjxkaXYgY2xhc3M9XFxcIlwiICsgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcykgKyBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgJGVsLmFwcGVuZCgkZHJhZ0VsKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuZXh0ZW5kKHNjcm9sbGJhciwge1xuICAgICAgICAkZWw6ICRlbCxcbiAgICAgICAgZWw6ICRlbFswXSxcbiAgICAgICAgJGRyYWdFbDogJGRyYWdFbCxcbiAgICAgICAgZHJhZ0VsOiAkZHJhZ0VsWzBdLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXJhbXMuZHJhZ2dhYmxlKSB7XG4gICAgICAgIHNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuZGlzYWJsZURyYWdnYWJsZSgpO1xuICAgIH0sXG4gIH07XG5cbiAgdmFyIFNjcm9sbGJhciQxID0ge1xuICAgIG5hbWU6ICdzY3JvbGxiYXInLFxuICAgIHBhcmFtczoge1xuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkcmFnU2l6ZTogJ2F1dG8nLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgc25hcE9uUmVsZWFzZTogdHJ1ZSxcbiAgICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1sb2NrJyxcbiAgICAgICAgZHJhZ0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1kcmFnJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICBpbml0OiBTY3JvbGxiYXIuaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGVzdHJveTogU2Nyb2xsYmFyLmRlc3Ryb3kuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHVwZGF0ZVNpemU6IFNjcm9sbGJhci51cGRhdGVTaXplLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2xhdGU6IFNjcm9sbGJhci5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldFRyYW5zaXRpb246IFNjcm9sbGJhci5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBlbmFibGVEcmFnZ2FibGU6IFNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGRpc2FibGVEcmFnZ2FibGU6IFNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXREcmFnUG9zaXRpb246IFNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgICAgIGdldFBvaW50ZXJQb3NpdGlvbjogU2Nyb2xsYmFyLmdldFBvaW50ZXJQb3NpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25EcmFnU3RhcnQ6IFNjcm9sbGJhci5vbkRyYWdTdGFydC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25EcmFnTW92ZTogU2Nyb2xsYmFyLm9uRHJhZ01vdmUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIG9uRHJhZ0VuZDogU2Nyb2xsYmFyLm9uRHJhZ0VuZC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgICAgIGRyYWdUaW1lb3V0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuaW5pdCgpO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZXJVcGRhdGU6IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBQYXJhbGxheCA9IHtcbiAgICBzZXRUcmFuc2Zvcm06IGZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG5cbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgIHZhciBydGxGYWN0b3IgPSBydGwgPyAtMSA6IDE7XG5cbiAgICAgIHZhciBwID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4JykgfHwgJzAnO1xuICAgICAgdmFyIHggPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgICAgdmFyIHkgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteScpO1xuICAgICAgdmFyIHNjYWxlID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlJyk7XG4gICAgICB2YXIgb3BhY2l0eSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5Jyk7XG5cbiAgICAgIGlmICh4IHx8IHkpIHtcbiAgICAgICAgeCA9IHggfHwgJzAnO1xuICAgICAgICB5ID0geSB8fCAnMCc7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB4ID0gcDtcbiAgICAgICAgeSA9ICcwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHkgPSBwO1xuICAgICAgICB4ID0gJzAnO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHgpLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgIHggPSAocGFyc2VJbnQoeCwgMTApICogcHJvZ3Jlc3MgKiBydGxGYWN0b3IpICsgXCIlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gKHggKiBwcm9ncmVzcyAqIHJ0bEZhY3RvcikgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBpZiAoKHkpLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgIHkgPSAocGFyc2VJbnQoeSwgMTApICogcHJvZ3Jlc3MpICsgXCIlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5ID0gKHkgKiBwcm9ncmVzcykgKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgY3VycmVudE9wYWNpdHkgPSBvcGFjaXR5IC0gKChvcGFjaXR5IC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSkpO1xuICAgICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzY2FsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2NhbGUgPT09IG51bGwpIHtcbiAgICAgICAgJGVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIDBweClcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY2FsZSA9IHNjYWxlIC0gKChzY2FsZSAtIDEpICogKDEgLSBNYXRoLmFicyhwcm9ncmVzcykpKTtcbiAgICAgICAgJGVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIDBweCkgc2NhbGUoXCIgKyBjdXJyZW50U2NhbGUgKyBcIilcIikpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3M7XG4gICAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gICAgICAkZWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV0nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpO1xuICAgICAgICB9KTtcbiAgICAgIHNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUluZGV4LCBzbGlkZUVsKSB7XG4gICAgICAgIHZhciBzbGlkZVByb2dyZXNzID0gc2xpZGVFbC5wcm9ncmVzcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgc2xpZGVQcm9ncmVzcyArPSBNYXRoLmNlaWwoc2xpZGVJbmRleCAvIDIpIC0gKHByb2dyZXNzICogKHNuYXBHcmlkLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZVByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVQcm9ncmVzcywgLTEpLCAxKTtcbiAgICAgICAgJChzbGlkZUVsKS5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJylcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBzd2lwZXIucGFyYWxsYXguc2V0VHJhbnNmb3JtKGVsLCBzbGlkZVByb2dyZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKCBkdXJhdGlvbiA9PT0gdm9pZCAwICkgZHVyYXRpb24gPSB0aGlzLnBhcmFtcy5zcGVlZDtcblxuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICAgICRlbC5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGluZGV4LCBwYXJhbGxheEVsKSB7XG4gICAgICAgICAgdmFyICRwYXJhbGxheEVsID0gJChwYXJhbGxheEVsKTtcbiAgICAgICAgICB2YXIgcGFyYWxsYXhEdXJhdGlvbiA9IHBhcnNlSW50KCRwYXJhbGxheEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LWR1cmF0aW9uJyksIDEwKSB8fCBkdXJhdGlvbjtcbiAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHsgcGFyYWxsYXhEdXJhdGlvbiA9IDA7IH1cbiAgICAgICAgICAkcGFyYWxsYXhFbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBQYXJhbGxheCQxID0ge1xuICAgIG5hbWU6ICdwYXJhbGxheCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICBwYXJhbGxheDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBwYXJhbGxheDoge1xuICAgICAgICAgIHNldFRyYW5zZm9ybTogUGFyYWxsYXguc2V0VHJhbnNmb3JtLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2xhdGU6IFBhcmFsbGF4LnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbjogUGFyYWxsYXguc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIucGFyYWxsYXguc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgWm9vbSA9IHtcbiAgICAvLyBDYWxjIFNjYWxlIEZyb20gTXVsdGktdG91Y2hlc1xuICAgIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXM6IGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSB7IHJldHVybiAxOyB9XG4gICAgICB2YXIgeDEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB2YXIgeTEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICB2YXIgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgICB2YXIgeTIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKE1hdGgucG93KCAoeDIgLSB4MSksIDIgKSkgKyAoTWF0aC5wb3coICh5MiAtIHkxKSwgMiApKSk7XG4gICAgICByZXR1cm4gZGlzdGFuY2U7XG4gICAgfSxcbiAgICAvLyBFdmVudHNcbiAgICBvbkdlc3R1cmVTdGFydDogZnVuY3Rpb24gb25HZXN0dXJlU3RhcnQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgPSBmYWxzZTtcbiAgICAgIHpvb20uZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuICAgICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0JyB8fCAoZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZS5zY2FsZVN0YXJ0ID0gWm9vbS5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsIHx8ICFnZXN0dXJlLiRzbGlkZUVsLmxlbmd0aCkge1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLnN3aXBlci1zbGlkZScpO1xuICAgICAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbC5sZW5ndGggPT09IDApIHsgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTsgfVxuICAgICAgICBnZXN0dXJlLiRpbWFnZUVsID0gZ2VzdHVyZS4kc2xpZGVFbC5maW5kKCdpbWcsIHN2ZywgY2FudmFzJyk7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoKFwiLlwiICsgKHBhcmFtcy5jb250YWluZXJDbGFzcykpKTtcbiAgICAgICAgZ2VzdHVyZS5tYXhSYXRpbyA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICAgIGlmIChnZXN0dXJlLiRpbWFnZVdyYXBFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBnZXN0dXJlLiRpbWFnZUVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDApO1xuICAgICAgc3dpcGVyLnpvb20uaXNTY2FsaW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uR2VzdHVyZUNoYW5nZTogZnVuY3Rpb24gb25HZXN0dXJlQ2hhbmdlKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcbiAgICAgIGlmICghU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2htb3ZlJyB8fCAoZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZS5zY2FsZU1vdmUgPSBab29tLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICB6b29tLnNjYWxlID0gZS5zY2FsZSAqIHpvb20uY3VycmVudFNjYWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgem9vbS5zY2FsZSA9IChnZXN0dXJlLnNjYWxlTW92ZSAvIGdlc3R1cmUuc2NhbGVTdGFydCkgKiB6b29tLmN1cnJlbnRTY2FsZTtcbiAgICAgIH1cbiAgICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgICB6b29tLnNjYWxlID0gKGdlc3R1cmUubWF4UmF0aW8gLSAxKSArIChNYXRoLnBvdyggKCh6b29tLnNjYWxlIC0gZ2VzdHVyZS5tYXhSYXRpbykgKyAxKSwgMC41ICkpO1xuICAgICAgfVxuICAgICAgaWYgKHpvb20uc2NhbGUgPCBwYXJhbXMubWluUmF0aW8pIHtcbiAgICAgICAgem9vbS5zY2FsZSA9IChwYXJhbXMubWluUmF0aW8gKyAxKSAtIChNYXRoLnBvdyggKChwYXJhbXMubWluUmF0aW8gLSB6b29tLnNjYWxlKSArIDEpLCAwLjUgKSk7XG4gICAgICB9XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIgKyAoem9vbS5zY2FsZSkgKyBcIilcIikpO1xuICAgIH0sXG4gICAgb25HZXN0dXJlRW5kOiBmdW5jdGlvbiBvbkdlc3R1cmVFbmQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIGlmICghem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgfHwgIXpvb20uZmFrZUdlc3R1cmVNb3ZlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IChlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyICYmICFEZXZpY2UuYW5kcm9pZCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICB6b29tLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4oem9vbS5zY2FsZSwgZ2VzdHVyZS5tYXhSYXRpbyksIHBhcmFtcy5taW5SYXRpbyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCkudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArICh6b29tLnNjYWxlKSArIFwiKVwiKSk7XG4gICAgICB6b29tLmN1cnJlbnRTY2FsZSA9IHpvb20uc2NhbGU7XG4gICAgICB6b29tLmlzU2NhbGluZyA9IGZhbHNlO1xuICAgICAgaWYgKHpvb20uc2NhbGUgPT09IDEpIHsgZ2VzdHVyZS4kc2xpZGVFbCA9IHVuZGVmaW5lZDsgfVxuICAgIH0sXG4gICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICB2YXIgaW1hZ2UgPSB6b29tLmltYWdlO1xuICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgaWYgKGltYWdlLmlzVG91Y2hlZCkgeyByZXR1cm47IH1cbiAgICAgIGlmIChEZXZpY2UuYW5kcm9pZCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICAgIGltYWdlLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgICBpbWFnZS50b3VjaGVzU3RhcnQueCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgIH0sXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgdmFyIGltYWdlID0gem9vbS5pbWFnZTtcbiAgICAgIHZhciB2ZWxvY2l0eSA9IHpvb20udmVsb2NpdHk7XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWdlc3R1cmUuJHNsaWRlRWwpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmICghaW1hZ2UuaXNNb3ZlZCkge1xuICAgICAgICBpbWFnZS53aWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGltYWdlLmhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBpbWFnZS5zdGFydFggPSBVdGlscy5nZXRUcmFuc2xhdGUoZ2VzdHVyZS4kaW1hZ2VXcmFwRWxbMF0sICd4JykgfHwgMDtcbiAgICAgICAgaW1hZ2Uuc3RhcnRZID0gVXRpbHMuZ2V0VHJhbnNsYXRlKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneScpIHx8IDA7XG4gICAgICAgIGdlc3R1cmUuc2xpZGVXaWR0aCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGdlc3R1cmUuc2xpZGVIZWlnaHQgPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigwKTtcbiAgICAgICAgaWYgKHN3aXBlci5ydGwpIHtcbiAgICAgICAgICBpbWFnZS5zdGFydFggPSAtaW1hZ2Uuc3RhcnRYO1xuICAgICAgICAgIGltYWdlLnN0YXJ0WSA9IC1pbWFnZS5zdGFydFk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcbiAgICAgIHZhciBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICAgIHZhciBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuXG4gICAgICBpZiAoc2NhbGVkV2lkdGggPCBnZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgZ2VzdHVyZS5zbGlkZUhlaWdodCkgeyByZXR1cm47IH1cblxuICAgICAgaW1hZ2UubWluWCA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMikgLSAoc2NhbGVkV2lkdGggLyAyKSksIDApO1xuICAgICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgICAgaW1hZ2UubWluWSA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIpIC0gKHNjYWxlZEhlaWdodCAvIDIpKSwgMCk7XG4gICAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG5cbiAgICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgICAgaWYgKCFpbWFnZS5pc01vdmVkICYmICF6b29tLmlzU2NhbGluZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3dpcGVyLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgICAgJiYgKFxuICAgICAgICAgICAgKE1hdGguZmxvb3IoaW1hZ2UubWluWCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54IDwgaW1hZ2UudG91Y2hlc1N0YXJ0LngpXG4gICAgICAgICAgICB8fCAoTWF0aC5mbG9vcihpbWFnZS5tYXhYKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFgpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPiBpbWFnZS50b3VjaGVzU3RhcnQueClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBpZiAoXG4gICAgICAgICAgIXN3aXBlci5pc0hvcml6b250YWwoKVxuICAgICAgICAgICYmIChcbiAgICAgICAgICAgIChNYXRoLmZsb29yKGltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WSkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IGltYWdlLnRvdWNoZXNTdGFydC55KVxuICAgICAgICAgICAgfHwgKE1hdGguZmxvb3IoaW1hZ2UubWF4WSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGltYWdlLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIGltYWdlLnRvdWNoZXNTdGFydC54KSArIGltYWdlLnN0YXJ0WDtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSBpbWFnZS50b3VjaGVzU3RhcnQueSkgKyBpbWFnZS5zdGFydFk7XG5cbiAgICAgIGlmIChpbWFnZS5jdXJyZW50WCA8IGltYWdlLm1pblgpIHtcbiAgICAgICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UubWluWCArIDEpIC0gKE1hdGgucG93KCAoKGltYWdlLm1pblggLSBpbWFnZS5jdXJyZW50WCkgKyAxKSwgMC44ICkpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmN1cnJlbnRYID4gaW1hZ2UubWF4WCkge1xuICAgICAgICBpbWFnZS5jdXJyZW50WCA9IChpbWFnZS5tYXhYIC0gMSkgKyAoTWF0aC5wb3coICgoaW1hZ2UuY3VycmVudFggLSBpbWFnZS5tYXhYKSArIDEpLCAwLjggKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZS5jdXJyZW50WSA8IGltYWdlLm1pblkpIHtcbiAgICAgICAgaW1hZ2UuY3VycmVudFkgPSAoaW1hZ2UubWluWSArIDEpIC0gKE1hdGgucG93KCAoKGltYWdlLm1pblkgLSBpbWFnZS5jdXJyZW50WSkgKyAxKSwgMC44ICkpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmN1cnJlbnRZID4gaW1hZ2UubWF4WSkge1xuICAgICAgICBpbWFnZS5jdXJyZW50WSA9IChpbWFnZS5tYXhZIC0gMSkgKyAoTWF0aC5wb3coICgoaW1hZ2UuY3VycmVudFkgLSBpbWFnZS5tYXhZKSArIDEpLCAwLjggKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZlbG9jaXR5XG4gICAgICBpZiAoIXZlbG9jaXR5LnByZXZQb3NpdGlvblgpIHsgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7IH1cbiAgICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgeyB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTsgfVxuICAgICAgaWYgKCF2ZWxvY2l0eS5wcmV2VGltZSkgeyB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7IH1cbiAgICAgIHZlbG9jaXR5LnggPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblgpIC8gKERhdGUubm93KCkgLSB2ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xuICAgICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgICBpZiAoTWF0aC5hYnMoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblgpIDwgMikgeyB2ZWxvY2l0eS54ID0gMDsgfVxuICAgICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSA8IDIpIHsgdmVsb2NpdHkueSA9IDA7IH1cbiAgICAgIHZlbG9jaXR5LnByZXZQb3NpdGlvblggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgICAgdmVsb2NpdHkucHJldlBvc2l0aW9uWSA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lnk7XG4gICAgICB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIChpbWFnZS5jdXJyZW50WCkgKyBcInB4LCBcIiArIChpbWFnZS5jdXJyZW50WSkgKyBcInB4LDApXCIpKTtcbiAgICB9LFxuICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcbiAgICAgIHZhciBpbWFnZSA9IHpvb20uaW1hZ2U7XG4gICAgICB2YXIgdmVsb2NpdHkgPSB6b29tLnZlbG9jaXR5O1xuICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICB2YXIgbW9tZW50dW1EdXJhdGlvblggPSAzMDA7XG4gICAgICB2YXIgbW9tZW50dW1EdXJhdGlvblkgPSAzMDA7XG4gICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVggPSB2ZWxvY2l0eS54ICogbW9tZW50dW1EdXJhdGlvblg7XG4gICAgICB2YXIgbmV3UG9zaXRpb25YID0gaW1hZ2UuY3VycmVudFggKyBtb21lbnR1bURpc3RhbmNlWDtcbiAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlWSA9IHZlbG9jaXR5LnkgKiBtb21lbnR1bUR1cmF0aW9uWTtcbiAgICAgIHZhciBuZXdQb3NpdGlvblkgPSBpbWFnZS5jdXJyZW50WSArIG1vbWVudHVtRGlzdGFuY2VZO1xuXG4gICAgICAvLyBGaXggZHVyYXRpb25cbiAgICAgIGlmICh2ZWxvY2l0eS54ICE9PSAwKSB7IG1vbWVudHVtRHVyYXRpb25YID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWCAtIGltYWdlLmN1cnJlbnRYKSAvIHZlbG9jaXR5LngpOyB9XG4gICAgICBpZiAodmVsb2NpdHkueSAhPT0gMCkgeyBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTsgfVxuICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLm1heChtb21lbnR1bUR1cmF0aW9uWCwgbW9tZW50dW1EdXJhdGlvblkpO1xuXG4gICAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gbmV3UG9zaXRpb25ZO1xuXG4gICAgICAvLyBEZWZpbmUgaWYgd2UgbmVlZCBpbWFnZSBkcmFnXG4gICAgICB2YXIgc2NhbGVkV2lkdGggPSBpbWFnZS53aWR0aCAqIHpvb20uc2NhbGU7XG4gICAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgIGltYWdlLm1pblggPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIpIC0gKHNjYWxlZFdpZHRoIC8gMikpLCAwKTtcbiAgICAgIGltYWdlLm1heFggPSAtaW1hZ2UubWluWDtcbiAgICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyKSAtIChzY2FsZWRIZWlnaHQgLyAyKSksIDApO1xuICAgICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgICAgaW1hZ2UuY3VycmVudFggPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WCwgaW1hZ2UubWF4WCksIGltYWdlLm1pblgpO1xuICAgICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuXG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIChpbWFnZS5jdXJyZW50WCkgKyBcInB4LCBcIiArIChpbWFnZS5jdXJyZW50WSkgKyBcInB4LDApXCIpKTtcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbCAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcblxuICAgICAgICB6b29tLnNjYWxlID0gMTtcbiAgICAgICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuXG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gVG9nZ2xlIFpvb21cbiAgICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG5cbiAgICAgIGlmICh6b29tLnNjYWxlICYmIHpvb20uc2NhbGUgIT09IDEpIHtcbiAgICAgICAgLy8gWm9vbSBPdXRcbiAgICAgICAgem9vbS5vdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFpvb20gSW5cbiAgICAgICAgem9vbS5pbihlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluOiBmdW5jdGlvbiBpbiQxKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgdmFyIGltYWdlID0gem9vbS5pbWFnZTtcblxuICAgICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsKSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuY2xpY2tlZFNsaWRlID8gJChzd2lwZXIuY2xpY2tlZFNsaWRlKSA6IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KChcIi5cIiArIChwYXJhbXMuY29udGFpbmVyQ2xhc3MpKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwuYWRkQ2xhc3MoKFwiXCIgKyAocGFyYW1zLnpvb21lZFNsaWRlQ2xhc3MpKSk7XG5cbiAgICAgIHZhciB0b3VjaFg7XG4gICAgICB2YXIgdG91Y2hZO1xuICAgICAgdmFyIG9mZnNldFg7XG4gICAgICB2YXIgb2Zmc2V0WTtcbiAgICAgIHZhciBkaWZmWDtcbiAgICAgIHZhciBkaWZmWTtcbiAgICAgIHZhciB0cmFuc2xhdGVYO1xuICAgICAgdmFyIHRyYW5zbGF0ZVk7XG4gICAgICB2YXIgaW1hZ2VXaWR0aDtcbiAgICAgIHZhciBpbWFnZUhlaWdodDtcbiAgICAgIHZhciBzY2FsZWRXaWR0aDtcbiAgICAgIHZhciBzY2FsZWRIZWlnaHQ7XG4gICAgICB2YXIgdHJhbnNsYXRlTWluWDtcbiAgICAgIHZhciB0cmFuc2xhdGVNaW5ZO1xuICAgICAgdmFyIHRyYW5zbGF0ZU1heFg7XG4gICAgICB2YXIgdHJhbnNsYXRlTWF4WTtcbiAgICAgIHZhciBzbGlkZVdpZHRoO1xuICAgICAgdmFyIHNsaWRlSGVpZ2h0O1xuXG4gICAgICBpZiAodHlwZW9mIGltYWdlLnRvdWNoZXNTdGFydC54ID09PSAndW5kZWZpbmVkJyAmJiBlKSB7XG4gICAgICAgIHRvdWNoWCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICB0b3VjaFkgPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdWNoWCA9IGltYWdlLnRvdWNoZXNTdGFydC54O1xuICAgICAgICB0b3VjaFkgPSBpbWFnZS50b3VjaGVzU3RhcnQueTtcbiAgICAgIH1cblxuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICB6b29tLmN1cnJlbnRTY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICBpZiAoZSkge1xuICAgICAgICBzbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgc2xpZGVIZWlnaHQgPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgb2Zmc2V0WCA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgb2Zmc2V0WSA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkudG9wO1xuICAgICAgICBkaWZmWCA9IChvZmZzZXRYICsgKHNsaWRlV2lkdGggLyAyKSkgLSB0b3VjaFg7XG4gICAgICAgIGRpZmZZID0gKG9mZnNldFkgKyAoc2xpZGVIZWlnaHQgLyAyKSkgLSB0b3VjaFk7XG5cbiAgICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGltYWdlSGVpZ2h0ID0gZ2VzdHVyZS4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHNjYWxlZFdpZHRoID0gaW1hZ2VXaWR0aCAqIHpvb20uc2NhbGU7XG4gICAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcblxuICAgICAgICB0cmFuc2xhdGVNaW5YID0gTWF0aC5taW4oKChzbGlkZVdpZHRoIC8gMikgLSAoc2NhbGVkV2lkdGggLyAyKSksIDApO1xuICAgICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oKChzbGlkZUhlaWdodCAvIDIpIC0gKHNjYWxlZEhlaWdodCAvIDIpKSwgMCk7XG4gICAgICAgIHRyYW5zbGF0ZU1heFggPSAtdHJhbnNsYXRlTWluWDtcbiAgICAgICAgdHJhbnNsYXRlTWF4WSA9IC10cmFuc2xhdGVNaW5ZO1xuXG4gICAgICAgIHRyYW5zbGF0ZVggPSBkaWZmWCAqIHpvb20uc2NhbGU7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSBkaWZmWSAqIHpvb20uc2NhbGU7XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPCB0cmFuc2xhdGVNaW5YKSB7XG4gICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1pblg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVNYXhYKSB7XG4gICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNsYXRlWSA8IHRyYW5zbGF0ZU1pblkpIHtcbiAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWluWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNsYXRlWSA+IHRyYW5zbGF0ZU1heFkpIHtcbiAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWF4WTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgfVxuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHRyYW5zbGF0ZVggKyBcInB4LCBcIiArIHRyYW5zbGF0ZVkgKyBcInB4LDApXCIpKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIgKyAoem9vbS5zY2FsZSkgKyBcIilcIikpO1xuICAgIH0sXG4gICAgb3V0OiBmdW5jdGlvbiBvdXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcblxuICAgICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsKSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuY2xpY2tlZFNsaWRlID8gJChzd2lwZXIuY2xpY2tlZFNsaWRlKSA6IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KChcIi5cIiArIChwYXJhbXMuY29udGFpbmVyQ2xhc3MpKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHpvb20uc2NhbGUgPSAxO1xuICAgICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgZ2VzdHVyZS4kc2xpZGVFbC5yZW1vdmVDbGFzcygoXCJcIiArIChwYXJhbXMuem9vbWVkU2xpZGVDbGFzcykpKTtcbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICAvLyBBdHRhY2gvRGV0YWNoIEV2ZW50c1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgaWYgKHpvb20uZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgIHpvb20uZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgIHZhciBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgPyB7IHBhc3NpdmU6IGZhbHNlLCBjYXB0dXJlOiB0cnVlIH0gOiB0cnVlO1xuXG4gICAgICAvLyBTY2FsZSBpbWFnZVxuICAgICAgaWYgKFN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oJ2dlc3R1cmVzdGFydCcsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oJ2dlc3R1cmVjaGFuZ2UnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbignZ2VzdHVyZWVuZCcsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSk7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIGlmIChzd2lwZXIudG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNb3ZlIGltYWdlXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcykpLCB6b29tLm9uVG91Y2hNb3ZlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgICB9LFxuICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICBpZiAoIXpvb20uZW5hYmxlZCkgeyByZXR1cm47IH1cblxuICAgICAgc3dpcGVyLnpvb20uZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgc3dpcGVyLnBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICB2YXIgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogdHJ1ZSB9IDogdHJ1ZTtcblxuICAgICAgLy8gU2NhbGUgaW1hZ2VcbiAgICAgIGlmIChTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZignZ2VzdHVyZXN0YXJ0JywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoJ2dlc3R1cmVjaGFuZ2UnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoJ2dlc3R1cmVlbmQnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfSBlbHNlIGlmIChzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0LCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSk7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuY2FuY2VsLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgaW1hZ2VcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcykpLCB6b29tLm9uVG91Y2hNb3ZlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBab29tJDEgPSB7XG4gICAgbmFtZTogJ3pvb20nLFxuICAgIHBhcmFtczoge1xuICAgICAgem9vbToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgbWF4UmF0aW86IDMsXG4gICAgICAgIG1pblJhdGlvOiAxLFxuICAgICAgICB0b2dnbGU6IHRydWUsXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJyxcbiAgICAgICAgem9vbWVkU2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZS16b29tZWQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBjdXJyZW50U2NhbGU6IDEsXG4gICAgICAgIGlzU2NhbGluZzogZmFsc2UsXG4gICAgICAgIGdlc3R1cmU6IHtcbiAgICAgICAgICAkc2xpZGVFbDogdW5kZWZpbmVkLFxuICAgICAgICAgIHNsaWRlV2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzbGlkZUhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICAgICRpbWFnZUVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgJGltYWdlV3JhcEVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWF4UmF0aW86IDMsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGN1cnJlbnRYOiB1bmRlZmluZWQsXG4gICAgICAgICAgY3VycmVudFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtaW5YOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWluWTogdW5kZWZpbmVkLFxuICAgICAgICAgIG1heFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtYXhZOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0b3VjaGVzU3RhcnQ6IHt9LFxuICAgICAgICAgIHRvdWNoZXNDdXJyZW50OiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZQb3NpdGlvblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmV2UG9zaXRpb25ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgICgnb25HZXN0dXJlU3RhcnQgb25HZXN0dXJlQ2hhbmdlIG9uR2VzdHVyZUVuZCBvblRvdWNoU3RhcnQgb25Ub3VjaE1vdmUgb25Ub3VjaEVuZCBvblRyYW5zaXRpb25FbmQgdG9nZ2xlIGVuYWJsZSBkaXNhYmxlIGluIG91dCcpLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICB6b29tW21ldGhvZE5hbWVdID0gWm9vbVttZXRob2ROYW1lXS5iaW5kKHN3aXBlcik7XG4gICAgICB9KTtcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgem9vbTogem9vbSxcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN3aXBlci56b29tLCAnc2NhbGUnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBzY2FsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2NhbGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VFbCA9IHN3aXBlci56b29tLmdlc3R1cmUuJGltYWdlRWwgPyBzd2lwZXIuem9vbS5nZXN0dXJlLiRpbWFnZUVsWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIHNsaWRlRWwgPSBzd2lwZXIuem9vbS5nZXN0dXJlLiRzbGlkZUVsID8gc3dpcGVyLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd6b29tQ2hhbmdlJywgdmFsdWUsIGltYWdlRWwsIHNsaWRlRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY2FsZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci56b29tLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci56b29tLmRpc2FibGUoKTtcbiAgICAgIH0sXG4gICAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbiB0b3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnpvb20uZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnpvb20ub25Ub3VjaFN0YXJ0KGUpO1xuICAgICAgfSxcbiAgICAgIHRvdWNoRW5kOiBmdW5jdGlvbiB0b3VjaEVuZChlKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci56b29tLm9uVG91Y2hFbmQoZSk7XG4gICAgICB9LFxuICAgICAgZG91YmxlVGFwOiBmdW5jdGlvbiBkb3VibGVUYXAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkICYmIHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLnRvZ2dsZSkge1xuICAgICAgICAgIHN3aXBlci56b29tLnRvZ2dsZShlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci56b29tLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgICAgc3dpcGVyLnpvb20ub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgTGF6eSA9IHtcbiAgICBsb2FkSW5TbGlkZTogZnVuY3Rpb24gbG9hZEluU2xpZGUoaW5kZXgsIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgaWYgKCBsb2FkSW5EdXBsaWNhdGUgPT09IHZvaWQgMCApIGxvYWRJbkR1cGxpY2F0ZSA9IHRydWU7XG5cbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubGF6eTtcbiAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuICAgICAgaWYgKHN3aXBlci5zbGlkZXMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gICAgICB2YXIgJHNsaWRlRWwgPSBpc1ZpcnR1YWxcbiAgICAgICAgPyBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIGluZGV4ICsgXCJcXFwiXVwiKSlcbiAgICAgICAgOiBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KTtcblxuICAgICAgdmFyICRpbWFnZXMgPSAkc2xpZGVFbC5maW5kKChcIi5cIiArIChwYXJhbXMuZWxlbWVudENsYXNzKSArIFwiOm5vdCguXCIgKyAocGFyYW1zLmxvYWRlZENsYXNzKSArIFwiKTpub3QoLlwiICsgKHBhcmFtcy5sb2FkaW5nQ2xhc3MpICsgXCIpXCIpKTtcbiAgICAgIGlmICgkc2xpZGVFbC5oYXNDbGFzcyhwYXJhbXMuZWxlbWVudENsYXNzKSAmJiAhJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmxvYWRlZENsYXNzKSAmJiAhJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcykpIHtcbiAgICAgICAgJGltYWdlcyA9ICRpbWFnZXMuYWRkKCRzbGlkZUVsWzBdKTtcbiAgICAgIH1cbiAgICAgIGlmICgkaW1hZ2VzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgJGltYWdlcy5lYWNoKGZ1bmN0aW9uIChpbWFnZUluZGV4LCBpbWFnZUVsKSB7XG4gICAgICAgIHZhciAkaW1hZ2VFbCA9ICQoaW1hZ2VFbCk7XG4gICAgICAgICRpbWFnZUVsLmFkZENsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpO1xuXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gJGltYWdlRWwuYXR0cignZGF0YS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIHZhciBzcmMgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICB2YXIgc3Jjc2V0ID0gJGltYWdlRWwuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgdmFyIHNpemVzID0gJGltYWdlRWwuYXR0cignZGF0YS1zaXplcycpO1xuXG4gICAgICAgIHN3aXBlci5sb2FkSW1hZ2UoJGltYWdlRWxbMF0sIChzcmMgfHwgYmFja2dyb3VuZCksIHNyY3NldCwgc2l6ZXMsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IChzd2lwZXIgJiYgIXN3aXBlci5wYXJhbXMpIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgICRpbWFnZUVsLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIChcInVybChcXFwiXCIgKyBiYWNrZ3JvdW5kICsgXCJcXFwiKVwiKSk7XG4gICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzcmNzZXQnLCBzcmNzZXQpO1xuICAgICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgICAgICRpbWFnZUVsLmF0dHIoJ3NpemVzJywgc2l6ZXMpO1xuICAgICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICRpbWFnZUVsLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGltYWdlRWwuYWRkQ2xhc3MocGFyYW1zLmxvYWRlZENsYXNzKS5yZW1vdmVDbGFzcyhwYXJhbXMubG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAkc2xpZGVFbC5maW5kKChcIi5cIiArIChwYXJhbXMucHJlbG9hZGVyQ2xhc3MpKSkucmVtb3ZlKCk7XG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCAmJiBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZU9yaWdpbmFsSW5kZXggPSAkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICAgICAgaWYgKCRzbGlkZUVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbigoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc2xpZGVPcmlnaW5hbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykgKyBcIilcIikpO1xuICAgICAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShvcmlnaW5hbFNsaWRlLmluZGV4KCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBkdXBsaWNhdGVkU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHNsaWRlT3JpZ2luYWxJbmRleCArIFwiXFxcIl1cIikpO1xuICAgICAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShkdXBsaWNhdGVkU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbGF6eUltYWdlUmVhZHknLCAkc2xpZGVFbFswXSwgJGltYWdlRWxbMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2lwZXIuZW1pdCgnbGF6eUltYWdlTG9hZCcsICRzbGlkZUVsWzBdLCAkaW1hZ2VFbFswXSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxvYWQ6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgICB2YXIgc3dpcGVyUGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlclBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyUGFyYW1zLmxhenk7XG5cbiAgICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyUGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAoc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXcgPSAwO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzbGlkZUV4aXN0KGluZGV4KSB7XG4gICAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgICBpZiAoJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyUGFyYW1zLnNsaWRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgaW5kZXggKyBcIlxcXCJdXCIpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXNbaW5kZXhdKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHNsaWRlSW5kZXgoc2xpZGVFbCkge1xuICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgICAgcmV0dXJuICQoc2xpZGVFbCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJChzbGlkZUVsKS5pbmRleCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN3aXBlci5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkgeyBzd2lwZXIubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlOyB9XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyUGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKSkpLmVhY2goZnVuY3Rpb24gKGVsSW5kZXgsIHNsaWRlRWwpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSBpc1ZpcnR1YWwgPyAkKHNsaWRlRWwpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgOiAkKHNsaWRlRWwpLmluZGV4KCk7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluZGV4OyBpIDwgYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3OyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVFeGlzdChpKSkgeyBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShpKTsgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShhY3RpdmVJbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmxvYWRQcmV2TmV4dCkge1xuICAgICAgICBpZiAoc2xpZGVzUGVyVmlldyA+IDEgfHwgKHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgJiYgcGFyYW1zLmxvYWRQcmV2TmV4dEFtb3VudCA+IDEpKSB7XG4gICAgICAgICAgdmFyIGFtb3VudCA9IHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQ7XG4gICAgICAgICAgdmFyIHNwdiA9IHNsaWRlc1BlclZpZXc7XG4gICAgICAgICAgdmFyIG1heEluZGV4ID0gTWF0aC5taW4oYWN0aXZlSW5kZXggKyBzcHYgKyBNYXRoLm1heChhbW91bnQsIHNwdiksIHNsaWRlcy5sZW5ndGgpO1xuICAgICAgICAgIHZhciBtaW5JbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4IC0gTWF0aC5tYXgoc3B2LCBhbW91bnQpLCAwKTtcbiAgICAgICAgICAvLyBOZXh0IFNsaWRlc1xuICAgICAgICAgIGZvciAodmFyIGkkMSA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldzsgaSQxIDwgbWF4SW5kZXg7IGkkMSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVFeGlzdChpJDEpKSB7IHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGkkMSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUHJldiBTbGlkZXNcbiAgICAgICAgICBmb3IgKHZhciBpJDIgPSBtaW5JbmRleDsgaSQyIDwgYWN0aXZlSW5kZXg7IGkkMiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVFeGlzdChpJDIpKSB7IHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGkkMik7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG5leHRTbGlkZSA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlclBhcmFtcy5zbGlkZU5leHRDbGFzcykpKTtcbiAgICAgICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCA+IDApIHsgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoc2xpZGVJbmRleChuZXh0U2xpZGUpKTsgfVxuXG4gICAgICAgICAgdmFyIHByZXZTbGlkZSA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlclBhcmFtcy5zbGlkZVByZXZDbGFzcykpKTtcbiAgICAgICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCA+IDApIHsgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoc2xpZGVJbmRleChwcmV2U2xpZGUpKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICB2YXIgTGF6eSQxID0ge1xuICAgIG5hbWU6ICdsYXp5JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGxhenk6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGxvYWRQcmV2TmV4dDogZmFsc2UsXG4gICAgICAgIGxvYWRQcmV2TmV4dEFtb3VudDogMSxcbiAgICAgICAgbG9hZE9uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcblxuICAgICAgICBlbGVtZW50Q2xhc3M6ICdzd2lwZXItbGF6eScsXG4gICAgICAgIGxvYWRpbmdDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRpbmcnLFxuICAgICAgICBsb2FkZWRDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRlZCcsXG4gICAgICAgIHByZWxvYWRlckNsYXNzOiAnc3dpcGVyLWxhenktcHJlbG9hZGVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgaW5pdGlhbEltYWdlTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBsb2FkOiBMYXp5LmxvYWQuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGxvYWRJblNsaWRlOiBMYXp5LmxvYWRJblNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICAgICAgc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmICFzd2lwZXIucGFyYW1zLmxvb3AgJiYgc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgPT09IDApIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzY3JvbGw6IGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmICFzd2lwZXIucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzY3JvbGxiYXJEcmFnTW92ZTogZnVuY3Rpb24gc2Nyb2xsYmFyRHJhZ01vdmUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCkge1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0IHx8ICghc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCAmJiAhc3dpcGVyLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkKSkge1xuICAgICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgIXN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQpIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gc2xpZGVDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLyogZXNsaW50IG5vLWJpdHdpc2U6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCI+PlwiXSB9XSAqL1xuXG4gIHZhciBDb250cm9sbGVyID0ge1xuICAgIExpbmVhclNwbGluZTogZnVuY3Rpb24gTGluZWFyU3BsaW5lKHgsIHkpIHtcbiAgICAgIHZhciBiaW5hcnlTZWFyY2ggPSAoZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgICAgICB2YXIgbWF4SW5kZXg7XG4gICAgICAgIHZhciBtaW5JbmRleDtcbiAgICAgICAgdmFyIGd1ZXNzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFycmF5LCB2YWwpIHtcbiAgICAgICAgICBtaW5JbmRleCA9IC0xO1xuICAgICAgICAgIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlIChtYXhJbmRleCAtIG1pbkluZGV4ID4gMSkge1xuICAgICAgICAgICAgZ3Vlc3MgPSBtYXhJbmRleCArIG1pbkluZGV4ID4+IDE7XG4gICAgICAgICAgICBpZiAoYXJyYXlbZ3Vlc3NdIDw9IHZhbCkge1xuICAgICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWF4SW5kZXggPSBndWVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgICB9O1xuICAgICAgfSgpKTtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7XG4gICAgICAvLyBHaXZlbiBhbiB4IHZhbHVlICh4MiksIHJldHVybiB0aGUgZXhwZWN0ZWQgeTIgdmFsdWU6XG4gICAgICAvLyAoeDEseTEpIGlzIHRoZSBrbm93biBwb2ludCBiZWZvcmUgZ2l2ZW4gdmFsdWUsXG4gICAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cbiAgICAgIHZhciBpMTtcbiAgICAgIHZhciBpMztcblxuICAgICAgdGhpcy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHgyKSB7XG4gICAgICAgIGlmICgheDIpIHsgcmV0dXJuIDA7IH1cblxuICAgICAgICAvLyBHZXQgdGhlIGluZGV4ZXMgb2YgeDEgYW5kIHgzICh0aGUgYXJyYXkgaW5kZXhlcyBiZWZvcmUgYW5kIGFmdGVyIGdpdmVuIHgyKTpcbiAgICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XG4gICAgICAgIGkxID0gaTMgLSAxO1xuXG4gICAgICAgIC8vIFdlIGhhdmUgb3VyIGluZGV4ZXMgaTEgJiBpMywgc28gd2UgY2FuIGNhbGN1bGF0ZSBhbHJlYWR5OlxuICAgICAgICAvLyB5MiA6PSAoKHgy4oiSeDEpIMOXICh5M+KIknkxKSkgw7cgKHgz4oiSeDEpICsgeTFcbiAgICAgICAgcmV0dXJuICgoKHgyIC0gdGhpcy54W2kxXSkgKiAodGhpcy55W2kzXSAtIHRoaXMueVtpMV0pKSAvICh0aGlzLnhbaTNdIC0gdGhpcy54W2kxXSkpICsgdGhpcy55W2kxXTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIHh4eDogZm9yIG5vdyBpIHdpbGwganVzdCBzYXZlIG9uZSBzcGxpbmUgZnVuY3Rpb24gdG8gdG9cbiAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gc3dpcGVyLnBhcmFtcy5sb29wXG4gICAgICAgICAgPyBuZXcgQ29udHJvbGxlci5MaW5lYXJTcGxpbmUoc3dpcGVyLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZClcbiAgICAgICAgICA6IG5ldyBDb250cm9sbGVyLkxpbmVhclNwbGluZShzd2lwZXIuc25hcEdyaWQsIGMuc25hcEdyaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc2V0VHJhbnNsYXRlJDEsIGJ5Q29udHJvbGxlcikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB2YXIgbXVsdGlwbGllcjtcbiAgICAgIHZhciBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICAgIC8vIHRoaXMgd2lsbCBjcmVhdGUgYW4gSW50ZXJwb2xhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIHNuYXBHcmlkc1xuICAgICAgICAvLyB4IGlzIHRoZSBHcmlkIG9mIHRoZSBzY3JvbGxlZCBzY3JvbGxlciBhbmQgeSB3aWxsIGJlIHRoZSBjb250cm9sbGVkIHNjcm9sbGVyXG4gICAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxuICAgICAgICAvLyB0aGUgZnVuY3Rpb24gZG9lcyBhIGxvdCBvZiB2YWx1ZSBjYWNoaW5nIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgIHN3aXBlci5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oYyk7XG4gICAgICAgICAgLy8gaSBhbSBub3Qgc3VyZSB3aHkgdGhlIHZhbHVlcyBoYXZlIHRvIGJlIG11bHRpcGxpY2F0ZWQgdGhpcyB3YXksIHRyaWVkIHRvIGludmVydCB0aGUgc25hcEdyaWRcbiAgICAgICAgICAvLyBidXQgaXQgZGlkIG5vdCB3b3JrIG91dFxuICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAtc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10cmFuc2xhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICBtdWx0aXBsaWVyID0gKGMubWF4VHJhbnNsYXRlKCkgLSBjLm1pblRyYW5zbGF0ZSgpKSAvIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAoKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgKiBtdWx0aXBsaWVyKSArIGMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmludmVyc2UpIHtcbiAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gYy5tYXhUcmFuc2xhdGUoKSAtIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICAgICAgYy51cGRhdGVQcm9ncmVzcyhjb250cm9sbGVkVHJhbnNsYXRlKTtcbiAgICAgICAgYy5zZXRUcmFuc2xhdGUoY29udHJvbGxlZFRyYW5zbGF0ZSwgc3dpcGVyKTtcbiAgICAgICAgYy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICBjLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB2YXIgaTtcbiAgICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGMpIHtcbiAgICAgICAgYy5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBzd2lwZXIpO1xuICAgICAgICBpZiAoZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICBjLnRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgIGlmIChjLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICBVdGlscy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMuJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY29udHJvbGxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgICBjLmxvb3BGaXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIHZhciBDb250cm9sbGVyJDEgPSB7XG4gICAgbmFtZTogJ2NvbnRyb2xsZXInLFxuICAgIHBhcmFtczoge1xuICAgICAgY29udHJvbGxlcjoge1xuICAgICAgICBjb250cm9sOiB1bmRlZmluZWQsXG4gICAgICAgIGludmVyc2U6IGZhbHNlLFxuICAgICAgICBieTogJ3NsaWRlJywgLy8gb3IgJ2NvbnRhaW5lcidcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBjb250cm9sbGVyOiB7XG4gICAgICAgICAgY29udHJvbDogc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wsXG4gICAgICAgICAgZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbjogQ29udHJvbGxlci5nZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2xhdGU6IENvbnRyb2xsZXIuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBDb250cm9sbGVyLnNldFRyYW5zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5jb250cm9sbGVyLnNwbGluZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5jb250cm9sbGVyLnNwbGluZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIGExMXkgPSB7XG4gICAgbWFrZUVsRm9jdXNhYmxlOiBmdW5jdGlvbiBtYWtlRWxGb2N1c2FibGUoJGVsKSB7XG4gICAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgcmV0dXJuICRlbDtcbiAgICB9LFxuICAgIGFkZEVsUm9sZTogZnVuY3Rpb24gYWRkRWxSb2xlKCRlbCwgcm9sZSkge1xuICAgICAgJGVsLmF0dHIoJ3JvbGUnLCByb2xlKTtcbiAgICAgIHJldHVybiAkZWw7XG4gICAgfSxcbiAgICBhZGRFbExhYmVsOiBmdW5jdGlvbiBhZGRFbExhYmVsKCRlbCwgbGFiZWwpIHtcbiAgICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgcmV0dXJuICRlbDtcbiAgICB9LFxuICAgIGRpc2FibGVFbDogZnVuY3Rpb24gZGlzYWJsZUVsKCRlbCkge1xuICAgICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgIHJldHVybiAkZWw7XG4gICAgfSxcbiAgICBlbmFibGVFbDogZnVuY3Rpb24gZW5hYmxlRWwoJGVsKSB7XG4gICAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiAkZWw7XG4gICAgfSxcbiAgICBvbkVudGVyS2V5OiBmdW5jdGlvbiBvbkVudGVyS2V5KGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICAgIGlmIChlLmtleUNvZGUgIT09IDEzKSB7IHJldHVybjsgfVxuICAgICAgdmFyICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpKSB7XG4gICAgICAgIGlmICghKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkubm90aWZ5KHBhcmFtcy5sYXN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCAmJiAkdGFyZ2V0RWwuaXMoc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkpIHtcbiAgICAgICAgaWYgKCEoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLnByZXZTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgJHRhcmdldEVsLmlzKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSkpIHtcbiAgICAgICAgJHRhcmdldEVsWzBdLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBub3RpZmljYXRpb24gPSBzd2lwZXIuYTExeS5saXZlUmVnaW9uO1xuICAgICAgaWYgKG5vdGlmaWNhdGlvbi5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICBub3RpZmljYXRpb24uaHRtbCgnJyk7XG4gICAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgICB9LFxuICAgIHVwZGF0ZU5hdmlnYXRpb246IGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb24oKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgeyByZXR1cm47IH1cbiAgICAgIHZhciByZWYgPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICAgIHZhciAkbmV4dEVsID0gcmVmLiRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbCA9IHJlZi4kcHJldkVsO1xuXG4gICAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgIHN3aXBlci5hMTF5LmRpc2FibGVFbCgkcHJldkVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5lbmFibGVFbCgkcHJldkVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5kaXNhYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkuZW5hYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVBhZ2luYXRpb246IGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoYnVsbGV0SW5kZXgsIGJ1bGxldEVsKSB7XG4gICAgICAgICAgdmFyICRidWxsZXRFbCA9ICQoYnVsbGV0RWwpO1xuICAgICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkYnVsbGV0RWwpO1xuICAgICAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZSgkYnVsbGV0RWwsICdidXR0b24nKTtcbiAgICAgICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRidWxsZXRFbCwgcGFyYW1zLnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL3t7aW5kZXh9fS8sICRidWxsZXRFbC5pbmRleCgpICsgMSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgc3dpcGVyLiRlbC5hcHBlbmQoc3dpcGVyLmExMXkubGl2ZVJlZ2lvbik7XG5cbiAgICAgIC8vIE5hdmlnYXRpb25cbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgICB2YXIgJG5leHRFbDtcbiAgICAgIHZhciAkcHJldkVsO1xuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpIHtcbiAgICAgICAgJG5leHRFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWw7XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkge1xuICAgICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICAgIH1cbiAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkbmV4dEVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRuZXh0RWwsICdidXR0b24nKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkbmV4dEVsLCBwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICRuZXh0RWwub24oJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cbiAgICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkcHJldkVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRwcmV2RWwsICdidXR0b24nKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkcHJldkVsLCBwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgICRwcmV2RWwub24oJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwub24oJ2tleWRvd24nLCAoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSksIHN3aXBlci5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5hMTF5LmxpdmVSZWdpb24gJiYgc3dpcGVyLmExMXkubGl2ZVJlZ2lvbi5sZW5ndGggPiAwKSB7IHN3aXBlci5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCk7IH1cblxuICAgICAgdmFyICRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbDtcbiAgICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsKSB7XG4gICAgICAgICRuZXh0RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWw7XG4gICAgICB9XG4gICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAkbmV4dEVsLm9mZigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgICAgfVxuICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbC5vZmYoJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwub2ZmKCdrZXlkb3duJywgKFwiLlwiICsgKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykpLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICB2YXIgQTExeSA9IHtcbiAgICBuYW1lOiAnYTExeScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhMTF5OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXG4gICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgICAgcGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6ICdHbyB0byBzbGlkZSB7e2luZGV4fX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIGExMXk6IHtcbiAgICAgICAgICBsaXZlUmVnaW9uOiAkKChcIjxzcGFuIGNsYXNzPVxcXCJcIiArIChzd2lwZXIucGFyYW1zLmExMXkubm90aWZpY2F0aW9uQ2xhc3MpICsgXCJcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCI+PC9zcGFuPlwiKSksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKGExMXkpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLmExMXlbbWV0aG9kTmFtZV0gPSBhMTF5W21ldGhvZE5hbWVdLmJpbmQoc3dpcGVyKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuYTExeS5pbml0KCk7XG4gICAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICB0b0VkZ2U6IGZ1bmN0aW9uIHRvRWRnZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICBmcm9tRWRnZTogZnVuY3Rpb24gZnJvbUVkZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCk7XG4gICAgICB9LFxuICAgICAgcGFnaW5hdGlvblVwZGF0ZTogZnVuY3Rpb24gcGFnaW5hdGlvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmExMXkuZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBIaXN0b3J5ID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5oaXN0b3J5KSB7IHJldHVybjsgfVxuICAgICAgaWYgKCF3aW4uaGlzdG9yeSB8fCAhd2luLmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBoaXN0b3J5ID0gc3dpcGVyLmhpc3Rvcnk7XG4gICAgICBoaXN0b3J5LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIGhpc3RvcnkucGF0aHMgPSBIaXN0b3J5LmdldFBhdGhWYWx1ZXMoKTtcbiAgICAgIGlmICghaGlzdG9yeS5wYXRocy5rZXkgJiYgIWhpc3RvcnkucGF0aHMudmFsdWUpIHsgcmV0dXJuOyB9XG4gICAgICBoaXN0b3J5LnNjcm9sbFRvU2xpZGUoMCwgaGlzdG9yeS5wYXRocy52YWx1ZSwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHN3aXBlci5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEhpc3RvcnlQb3BTdGF0ZTogZnVuY3Rpb24gc2V0SGlzdG9yeVBvcFN0YXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBzd2lwZXIuaGlzdG9yeS5wYXRocyA9IEhpc3RvcnkuZ2V0UGF0aFZhbHVlcygpO1xuICAgICAgc3dpcGVyLmhpc3Rvcnkuc2Nyb2xsVG9TbGlkZShzd2lwZXIucGFyYW1zLnNwZWVkLCBzd2lwZXIuaGlzdG9yeS5wYXRocy52YWx1ZSwgZmFsc2UpO1xuICAgIH0sXG4gICAgZ2V0UGF0aFZhbHVlczogZnVuY3Rpb24gZ2V0UGF0aFZhbHVlcygpIHtcbiAgICAgIHZhciBwYXRoQXJyYXkgPSB3aW4ubG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKS5maWx0ZXIoZnVuY3Rpb24gKHBhcnQpIHsgcmV0dXJuIHBhcnQgIT09ICcnOyB9KTtcbiAgICAgIHZhciB0b3RhbCA9IHBhdGhBcnJheS5sZW5ndGg7XG4gICAgICB2YXIga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgICB2YXIgdmFsdWUgPSBwYXRoQXJyYXlbdG90YWwgLSAxXTtcbiAgICAgIHJldHVybiB7IGtleToga2V5LCB2YWx1ZTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uIHNldEhpc3Rvcnkoa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5oaXN0b3J5LmluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpO1xuICAgICAgdmFyIHZhbHVlID0gSGlzdG9yeS5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcbiAgICAgIGlmICghd2luLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgdmFsdWUgPSBrZXkgKyBcIi9cIiArIHZhbHVlO1xuICAgICAgfVxuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHdpbi5oaXN0b3J5LnN0YXRlO1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9LCBudWxsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW4uaGlzdG9yeS5wdXNoU3RhdGUoeyB2YWx1ZTogdmFsdWUgfSwgbnVsbCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2x1Z2lmeTogZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGV4dC50b1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3LV0rL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvLS0rL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL14tKy8sICcnKVxuICAgICAgICAucmVwbGFjZSgvLSskLywgJycpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9TbGlkZTogZnVuY3Rpb24gc2Nyb2xsVG9TbGlkZShzcGVlZCwgdmFsdWUsIHJ1bkNhbGxiYWNrcykge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgIHZhciBzbGlkZUhpc3RvcnkgPSBIaXN0b3J5LnNsdWdpZnkoc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5JykpO1xuICAgICAgICAgIGlmIChzbGlkZUhpc3RvcnkgPT09IHZhbHVlICYmICFzbGlkZS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICB2YXIgSGlzdG9yeSQxID0ge1xuICAgIG5hbWU6ICdoaXN0b3J5JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICAgIGtleTogJ3NsaWRlcycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgIGluaXQ6IEhpc3RvcnkuaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0SGlzdG9yeTogSGlzdG9yeS5zZXRIaXN0b3J5LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRIaXN0b3J5UG9wU3RhdGU6IEhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzY3JvbGxUb1NsaWRlOiBIaXN0b3J5LnNjcm9sbFRvU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGRlc3Ryb3k6IEhpc3RvcnkuZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmhpc3RvcnkuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci5oaXN0b3J5LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLmhpc3RvcnkuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBzd2lwZXIuaGlzdG9yeS5zZXRIaXN0b3J5KHN3aXBlci5wYXJhbXMuaGlzdG9yeS5rZXksIHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gc2xpZGVDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLmhpc3RvcnkuaW5pdGlhbGl6ZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgICAgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIEhhc2hOYXZpZ2F0aW9uID0ge1xuICAgIG9uSGFzaENhbmdlOiBmdW5jdGlvbiBvbkhhc2hDYW5nZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIG5ld0hhc2ggPSBkb2MubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgdmFyIGFjdGl2ZVNsaWRlSGFzaCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKTtcbiAgICAgIGlmIChuZXdIYXNoICE9PSBhY3RpdmVTbGlkZUhhc2gpIHtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgKyBcIltkYXRhLWhhc2g9XFxcIlwiICsgbmV3SGFzaCArIFwiXFxcIl1cIikpLmluZGV4KCk7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3SW5kZXggPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRIYXNoOiBmdW5jdGlvbiBzZXRIYXNoKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCB8fCAhc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ucmVwbGFjZVN0YXRlICYmIHdpbi5oaXN0b3J5ICYmIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgICB3aW4uaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgKChcIiNcIiArIChzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1oYXNoJykpKSB8fCAnJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgICB2YXIgaGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpIHx8IHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpO1xuICAgICAgICBkb2MubG9jYXRpb24uaGFzaCA9IGhhc2ggfHwgJyc7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCB8fCAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5ICYmIHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKSkgeyByZXR1cm47IH1cbiAgICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB2YXIgaGFzaCA9IGRvYy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICBpZiAoaGFzaCkge1xuICAgICAgICB2YXIgc3BlZWQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgdmFyIHNsaWRlSGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpIHx8IHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpO1xuICAgICAgICAgIGlmIChzbGlkZUhhc2ggPT09IGhhc2ggJiYgIXNsaWRlLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUpIHtcbiAgICAgICAgJCh3aW4pLm9uKCdoYXNoY2hhbmdlJywgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLm9uSGFzaENhbmdlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUpIHtcbiAgICAgICAgJCh3aW4pLm9mZignaGFzaGNoYW5nZScsIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5vbkhhc2hDYW5nZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgdmFyIEhhc2hOYXZpZ2F0aW9uJDEgPSB7XG4gICAgbmFtZTogJ2hhc2gtbmF2aWdhdGlvbicsXG4gICAgcGFyYW1zOiB7XG4gICAgICBoYXNoTmF2aWdhdGlvbjoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgcmVwbGFjZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgd2F0Y2hTdGF0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgaGFzaE5hdmlnYXRpb246IHtcbiAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgaW5pdDogSGFzaE5hdmlnYXRpb24uaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGVzdHJveTogSGFzaE5hdmlnYXRpb24uZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0SGFzaDogSGFzaE5hdmlnYXRpb24uc2V0SGFzaC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25IYXNoQ2FuZ2U6IEhhc2hOYXZpZ2F0aW9uLm9uSGFzaENhbmdlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIC8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogXCJvZmZcIiAqL1xuXG4gIHZhciBBdXRvcGxheSA9IHtcbiAgICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyICRhY3RpdmVTbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgdmFyIGRlbGF5ID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICAgIGlmICgkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpKSB7XG4gICAgICAgIGRlbGF5ID0gJGFjdGl2ZVNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSB8fCBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ID0gVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5yZXZlcnNlRGlyZWN0aW9uKSB7XG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSkge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCBzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5pc0VuZCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7IHN3aXBlci5hdXRvcGxheS5ydW4oKTsgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheVN0YXJ0Jyk7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBpZiAodHlwZW9mIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS50aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuYXV0b3BsYXkudGltZW91dCk7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheVN0b3AnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKHNwZWVkKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkudGltZW91dCkgeyBjbGVhclRpbWVvdXQoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpOyB9XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gdHJ1ZTtcbiAgICAgIGlmIChzcGVlZCA9PT0gMCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgdmFyIEF1dG9wbGF5JDEgPSB7XG4gICAgbmFtZTogJ2F1dG9wbGF5JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgICBzdG9wT25MYXN0U2xpZGU6IGZhbHNlLFxuICAgICAgICByZXZlcnNlRGlyZWN0aW9uOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgICAgcnVuOiBBdXRvcGxheS5ydW4uYmluZChzd2lwZXIpLFxuICAgICAgICAgIHN0YXJ0OiBBdXRvcGxheS5zdGFydC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc3RvcDogQXV0b3BsYXkuc3RvcC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgcGF1c2U6IEF1dG9wbGF5LnBhdXNlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnJ1bigpO1xuICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuJHdyYXBwZXJFbCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgc3dpcGVyLmF1dG9wbGF5Lm9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiZWZvcmVUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIGJlZm9yZVRyYW5zaXRpb25TdGFydChzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKHNwZWVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbGlkZXJGaXJzdE1vdmU6IGZ1bmN0aW9uIHNsaWRlckZpcnN0TW92ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b3VjaEVuZDogZnVuY3Rpb24gdG91Y2hFbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgJiYgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgc3dpcGVyLmF1dG9wbGF5Lm9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIEZhZGUgPSB7XG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyICRzbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgICAgdmFyIG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICB2YXIgdHggPSAtb2Zmc2V0O1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkgeyB0eCAtPSBzd2lwZXIudHJhbnNsYXRlOyB9XG4gICAgICAgIHZhciB0eSA9IDA7XG4gICAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICB0eCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNsaWRlT3BhY2l0eSA9IHN3aXBlci5wYXJhbXMuZmFkZUVmZmVjdC5jcm9zc0ZhZGVcbiAgICAgICAgICA/IE1hdGgubWF4KDEgLSBNYXRoLmFicygkc2xpZGVFbFswXS5wcm9ncmVzcyksIDApXG4gICAgICAgICAgOiAxICsgTWF0aC5taW4oTWF0aC5tYXgoJHNsaWRlRWxbMF0ucHJvZ3Jlc3MsIC0xKSwgMCk7XG4gICAgICAgICRzbGlkZUVsXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiBzbGlkZU9wYWNpdHksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKFwiICsgdHggKyBcInB4LCBcIiArIHR5ICsgXCJweCwgMHB4KVwiKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgdmFyIGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIHNsaWRlcy50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBldmVudFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJpZ2dlcih0cmlnZ2VyRXZlbnRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgdmFyIEVmZmVjdEZhZGUgPSB7XG4gICAgbmFtZTogJ2VmZmVjdC1mYWRlJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgY3Jvc3NGYWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlOiBGYWRlLnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbjogRmFkZS5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmYWRlJykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcImZhZGVcIikpO1xuICAgICAgICB2YXIgb3ZlcndyaXRlUGFyYW1zID0ge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmFkZScpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5mYWRlRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZhZGUnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuZmFkZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgQ3ViZSA9IHtcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG4gICAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgICB2YXIgc3dpcGVyV2lkdGggPSBzd2lwZXIud2lkdGg7XG4gICAgICB2YXIgc3dpcGVySGVpZ2h0ID0gc3dpcGVyLmhlaWdodDtcbiAgICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgICAgdmFyIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZTtcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmN1YmVFZmZlY3Q7XG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgICAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgICAgdmFyIHdyYXBwZXJSb3RhdGUgPSAwO1xuICAgICAgdmFyICRjdWJlU2hhZG93RWw7XG4gICAgICBpZiAocGFyYW1zLnNoYWRvdykge1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICR3cmFwcGVyRWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICAgIGlmICgkY3ViZVNoYWRvd0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKCRjdWJlU2hhZG93RWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkY3ViZVNoYWRvd0VsLmNzcyh7IGhlaWdodDogKHN3aXBlcldpZHRoICsgXCJweFwiKSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkY3ViZVNoYWRvd0VsID0gJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgICAgICBpZiAoJGN1YmVTaGFkb3dFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAkZWwuYXBwZW5kKCRjdWJlU2hhZG93RWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgICB2YXIgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gcGFyc2VJbnQoJHNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzbGlkZUFuZ2xlID0gc2xpZGVJbmRleCAqIDkwO1xuICAgICAgICB2YXIgcm91bmQgPSBNYXRoLmZsb29yKHNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgc2xpZGVBbmdsZSA9IC1zbGlkZUFuZ2xlO1xuICAgICAgICAgIHJvdW5kID0gTWF0aC5mbG9vcigtc2xpZGVBbmdsZSAvIDM2MCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oJHNsaWRlRWxbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICAgIHZhciB0eCA9IDA7XG4gICAgICAgIHZhciB0eSA9IDA7XG4gICAgICAgIHZhciB0eiA9IDA7XG4gICAgICAgIGlmIChzbGlkZUluZGV4ICUgNCA9PT0gMCkge1xuICAgICAgICAgIHR4ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgICAgdHogPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMSkgJSA0ID09PSAwKSB7XG4gICAgICAgICAgdHggPSAwO1xuICAgICAgICAgIHR6ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAyKSAlIDQgPT09IDApIHtcbiAgICAgICAgICB0eCA9IHN3aXBlclNpemUgKyAocm91bmQgKiA0ICogc3dpcGVyU2l6ZSk7XG4gICAgICAgICAgdHogPSBzd2lwZXJTaXplO1xuICAgICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMykgJSA0ID09PSAwKSB7XG4gICAgICAgICAgdHggPSAtc3dpcGVyU2l6ZTtcbiAgICAgICAgICB0eiA9ICgzICogc3dpcGVyU2l6ZSkgKyAoc3dpcGVyU2l6ZSAqIDQgKiByb3VuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgIHR4ID0gLXR4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0hvcml6b250YWwpIHtcbiAgICAgICAgICB0eSA9IHR4O1xuICAgICAgICAgIHR4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSBcInJvdGF0ZVgoXCIgKyAoaXNIb3Jpem9udGFsID8gMCA6IC1zbGlkZUFuZ2xlKSArIFwiZGVnKSByb3RhdGVZKFwiICsgKGlzSG9yaXpvbnRhbCA/IHNsaWRlQW5nbGUgOiAwKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArIHR4ICsgXCJweCwgXCIgKyB0eSArIFwicHgsIFwiICsgdHogKyBcInB4KVwiO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSAmJiBwcm9ncmVzcyA+IC0xKSB7XG4gICAgICAgICAgd3JhcHBlclJvdGF0ZSA9IChzbGlkZUluZGV4ICogOTApICsgKHByb2dyZXNzICogOTApO1xuICAgICAgICAgIGlmIChydGwpIHsgd3JhcHBlclJvdGF0ZSA9ICgtc2xpZGVJbmRleCAqIDkwKSAtIChwcm9ncmVzcyAqIDkwKTsgfVxuICAgICAgICB9XG4gICAgICAgICRzbGlkZUVsLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgICAgICBpZiAocGFyYW1zLnNsaWRlU2hhZG93cykge1xuICAgICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICAgIHZhciBzaGFkb3dBZnRlciA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2hhZG93QmVmb3JlID0gJCgoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnKSArIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJykgKyBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgICAgICRzbGlkZUVsLmFwcGVuZChzaGFkb3dBZnRlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSB7IHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTsgfVxuICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHsgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkd3JhcHBlckVsLmNzcyh7XG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOiAoXCI1MCUgNTAlIC1cIiArIChzd2lwZXJTaXplIC8gMikgKyBcInB4XCIpLFxuICAgICAgICAnLW1vei10cmFuc2Zvcm0tb3JpZ2luJzogKFwiNTAlIDUwJSAtXCIgKyAoc3dpcGVyU2l6ZSAvIDIpICsgXCJweFwiKSxcbiAgICAgICAgJy1tcy10cmFuc2Zvcm0tb3JpZ2luJzogKFwiNTAlIDUwJSAtXCIgKyAoc3dpcGVyU2l6ZSAvIDIpICsgXCJweFwiKSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAoXCI1MCUgNTAlIC1cIiArIChzd2lwZXJTaXplIC8gMikgKyBcInB4XCIpLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXJhbXMuc2hhZG93KSB7XG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAkY3ViZVNoYWRvd0VsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgKChzd2lwZXJXaWR0aCAvIDIpICsgcGFyYW1zLnNoYWRvd09mZnNldCkgKyBcInB4LCBcIiArICgtc3dpcGVyV2lkdGggLyAyKSArIFwicHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoXCIgKyAocGFyYW1zLnNoYWRvd1NjYWxlKSArIFwiKVwiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNoYWRvd0FuZ2xlID0gTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLSAoTWF0aC5mbG9vcihNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAvIDkwKSAqIDkwKTtcbiAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDEuNSAtIChcbiAgICAgICAgICAgIChNYXRoLnNpbigoc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSkgLyAzNjApIC8gMilcbiAgICAgICAgICAgICsgKE1hdGguY29zKChzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJKSAvIDM2MCkgLyAyKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdmFyIHNjYWxlMSA9IHBhcmFtcy5zaGFkb3dTY2FsZTtcbiAgICAgICAgICB2YXIgc2NhbGUyID0gcGFyYW1zLnNoYWRvd1NjYWxlIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyYW1zLnNoYWRvd09mZnNldDtcbiAgICAgICAgICAkY3ViZVNoYWRvd0VsLnRyYW5zZm9ybSgoXCJzY2FsZTNkKFwiICsgc2NhbGUxICsgXCIsIDEsIFwiICsgc2NhbGUyICsgXCIpIHRyYW5zbGF0ZTNkKDBweCwgXCIgKyAoKHN3aXBlckhlaWdodCAvIDIpICsgb2Zmc2V0KSArIFwicHgsIFwiICsgKC1zd2lwZXJIZWlnaHQgLyAyIC8gc2NhbGUyKSArIFwicHgpIHJvdGF0ZVgoLTkwZGVnKVwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB6RmFjdG9yID0gKEJyb3dzZXIuaXNTYWZhcmkgfHwgQnJvd3Nlci5pc1VpV2ViVmlldykgPyAoLXN3aXBlclNpemUgLyAyKSA6IDA7XG4gICAgICAkd3JhcHBlckVsXG4gICAgICAgIC50cmFuc2Zvcm0oKFwidHJhbnNsYXRlM2QoMHB4LDAsXCIgKyB6RmFjdG9yICsgXCJweCkgcm90YXRlWChcIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAwIDogd3JhcHBlclJvdGF0ZSkgKyBcImRlZykgcm90YXRlWShcIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAtd3JhcHBlclJvdGF0ZSA6IDApICsgXCJkZWcpXCIpKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHNsaWRlc1xuICAgICAgICAudHJhbnNpdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpXG4gICAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmN1YmVFZmZlY3Quc2hhZG93ICYmICFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHZhciBFZmZlY3RDdWJlID0ge1xuICAgIG5hbWU6ICdlZmZlY3QtY3ViZScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBjdWJlRWZmZWN0OiB7XG4gICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgICAgc2hhZG93OiB0cnVlLFxuICAgICAgICBzaGFkb3dPZmZzZXQ6IDIwLFxuICAgICAgICBzaGFkb3dTY2FsZTogMC45NCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBjdWJlRWZmZWN0OiB7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlOiBDdWJlLnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbjogQ3ViZS5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjdWJlJykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcImN1YmVcIikpO1xuICAgICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKCgoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwiM2RcIikpO1xuICAgICAgICB2YXIgb3ZlcndyaXRlUGFyYW1zID0ge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5wYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjdWJlJykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmN1YmVFZmZlY3Quc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jdWJlRWZmZWN0LnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBGbGlwID0ge1xuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAkc2xpZGVFbFswXS5wcm9ncmVzcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZmxpcEVmZmVjdC5saW1pdFJvdGF0aW9uKSB7XG4gICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2Zmc2V0ID0gJHNsaWRlRWxbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgIHZhciByb3RhdGUgPSAtMTgwICogcHJvZ3Jlc3M7XG4gICAgICAgIHZhciByb3RhdGVZID0gcm90YXRlO1xuICAgICAgICB2YXIgcm90YXRlWCA9IDA7XG4gICAgICAgIHZhciB0eCA9IC1vZmZzZXQ7XG4gICAgICAgIHZhciB0eSA9IDA7XG4gICAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgcm90YXRlWCA9IC1yb3RhdGVZO1xuICAgICAgICAgIHJvdGF0ZVkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHJ0bCkge1xuICAgICAgICAgIHJvdGF0ZVkgPSAtcm90YXRlWTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzbGlkZUVsWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHByb2dyZXNzKSkgKyBzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3Quc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgICB2YXIgc2hhZG93QmVmb3JlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzaGFkb3dCZWZvcmUgPSAkKChcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCcpICsgXCJcXFwiPjwvZGl2PlwiKSk7XG4gICAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKChcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHsgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApOyB9XG4gICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCkgeyBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApOyB9XG4gICAgICAgIH1cbiAgICAgICAgJHNsaWRlRWxcbiAgICAgICAgICAudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKFwiICsgdHggKyBcInB4LCBcIiArIHR5ICsgXCJweCwgMHB4KSByb3RhdGVYKFwiICsgcm90YXRlWCArIFwiZGVnKSByb3RhdGVZKFwiICsgcm90YXRlWSArIFwiZGVnKVwiKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHNsaWRlc1xuICAgICAgICAudHJhbnNpdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpXG4gICAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgdmFyIGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIC8vIGlmICghJCh0aGlzKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSByZXR1cm47XG4gICAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgdHJpZ2dlckV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJ107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHZhciBFZmZlY3RGbGlwID0ge1xuICAgIG5hbWU6ICdlZmZlY3QtZmxpcCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICBmbGlwRWZmZWN0OiB7XG4gICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgICAgbGltaXRSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBmbGlwRWZmZWN0OiB7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlOiBGbGlwLnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbjogRmxpcC5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmbGlwJykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcImZsaXBcIikpO1xuICAgICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKCgoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwiM2RcIikpO1xuICAgICAgICB2YXIgb3ZlcndyaXRlUGFyYW1zID0ge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmxpcCcpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5mbGlwRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZsaXAnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuZmxpcEVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgQ292ZXJmbG93ID0ge1xuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgc3dpcGVyV2lkdGggPSBzd2lwZXIud2lkdGg7XG4gICAgICB2YXIgc3dpcGVySGVpZ2h0ID0gc3dpcGVyLmhlaWdodDtcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHZhciBzbGlkZXNTaXplc0dyaWQgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY292ZXJmbG93RWZmZWN0O1xuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgdmFyIGNlbnRlciA9IGlzSG9yaXpvbnRhbCA/IC10cmFuc2Zvcm0gKyAoc3dpcGVyV2lkdGggLyAyKSA6IC10cmFuc2Zvcm0gKyAoc3dpcGVySGVpZ2h0IC8gMik7XG4gICAgICB2YXIgcm90YXRlID0gaXNIb3Jpem9udGFsID8gcGFyYW1zLnJvdGF0ZSA6IC1wYXJhbXMucm90YXRlO1xuICAgICAgdmFyIHRyYW5zbGF0ZSA9IHBhcmFtcy5kZXB0aDtcbiAgICAgIC8vIEVhY2ggc2xpZGUgb2Zmc2V0IGZyb20gY2VudGVyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgICAgdmFyIHNsaWRlU2l6ZSA9IHNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgICAgdmFyIHNsaWRlT2Zmc2V0ID0gJHNsaWRlRWxbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgIHZhciBvZmZzZXRNdWx0aXBsaWVyID0gKChjZW50ZXIgLSBzbGlkZU9mZnNldCAtIChzbGlkZVNpemUgLyAyKSkgLyBzbGlkZVNpemUpICogcGFyYW1zLm1vZGlmaWVyO1xuXG4gICAgICAgIHZhciByb3RhdGVZID0gaXNIb3Jpem9udGFsID8gcm90YXRlICogb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICAgIHZhciByb3RhdGVYID0gaXNIb3Jpem9udGFsID8gMCA6IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXI7XG4gICAgICAgIC8vIHZhciByb3RhdGVaID0gMFxuICAgICAgICB2YXIgdHJhbnNsYXRlWiA9IC10cmFuc2xhdGUgKiBNYXRoLmFicyhvZmZzZXRNdWx0aXBsaWVyKTtcblxuICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IGlzSG9yaXpvbnRhbCA/IDAgOiBwYXJhbXMuc3RyZXRjaCAqIChvZmZzZXRNdWx0aXBsaWVyKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVggPSBpc0hvcml6b250YWwgPyBwYXJhbXMuc3RyZXRjaCAqIChvZmZzZXRNdWx0aXBsaWVyKSA6IDA7XG5cbiAgICAgICAgLy8gRml4IGZvciB1bHRyYSBzbWFsbCB2YWx1ZXNcbiAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpIDwgMC4wMDEpIHsgdHJhbnNsYXRlWCA9IDA7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVkpIDwgMC4wMDEpIHsgdHJhbnNsYXRlWSA9IDA7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVopIDwgMC4wMDEpIHsgdHJhbnNsYXRlWiA9IDA7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVkpIDwgMC4wMDEpIHsgcm90YXRlWSA9IDA7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDwgMC4wMDEpIHsgcm90YXRlWCA9IDA7IH1cblxuICAgICAgICB2YXIgc2xpZGVUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgdHJhbnNsYXRlWCArIFwicHgsXCIgKyB0cmFuc2xhdGVZICsgXCJweCxcIiArIHRyYW5zbGF0ZVogKyBcInB4KSAgcm90YXRlWChcIiArIHJvdGF0ZVggKyBcImRlZykgcm90YXRlWShcIiArIHJvdGF0ZVkgKyBcImRlZylcIjtcblxuICAgICAgICAkc2xpZGVFbC50cmFuc2Zvcm0oc2xpZGVUcmFuc2Zvcm0pO1xuICAgICAgICAkc2xpZGVFbFswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChvZmZzZXRNdWx0aXBsaWVyKSkgKyAxO1xuICAgICAgICBpZiAocGFyYW1zLnNsaWRlU2hhZG93cykge1xuICAgICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgICAgdmFyICRzaGFkb3dCZWZvcmVFbCA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICAgIHZhciAkc2hhZG93QWZ0ZXJFbCA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICBpZiAoJHNoYWRvd0JlZm9yZUVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJHNoYWRvd0JlZm9yZUVsID0gJCgoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnKSArIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKCRzaGFkb3dCZWZvcmVFbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkc2hhZG93QWZ0ZXJFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRzaGFkb3dBZnRlckVsID0gJCgoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJykgKyBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgICAgICRzbGlkZUVsLmFwcGVuZCgkc2hhZG93QWZ0ZXJFbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkc2hhZG93QmVmb3JlRWwubGVuZ3RoKSB7ICRzaGFkb3dCZWZvcmVFbFswXS5zdHlsZS5vcGFjaXR5ID0gb2Zmc2V0TXVsdGlwbGllciA+IDAgPyBvZmZzZXRNdWx0aXBsaWVyIDogMDsgfVxuICAgICAgICAgIGlmICgkc2hhZG93QWZ0ZXJFbC5sZW5ndGgpIHsgJHNoYWRvd0FmdGVyRWxbMF0uc3R5bGUub3BhY2l0eSA9ICgtb2Zmc2V0TXVsdGlwbGllcikgPiAwID8gLW9mZnNldE11bHRpcGxpZXIgOiAwOyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGNvcnJlY3QgcGVyc3BlY3RpdmUgZm9yIElFMTBcbiAgICAgIGlmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgdmFyIHdzID0gJHdyYXBwZXJFbFswXS5zdHlsZTtcbiAgICAgICAgd3MucGVyc3BlY3RpdmVPcmlnaW4gPSBjZW50ZXIgKyBcInB4IDUwJVwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBzd2lwZXIuc2xpZGVzXG4gICAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JylcbiAgICAgICAgLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gIH07XG5cbiAgdmFyIEVmZmVjdENvdmVyZmxvdyA9IHtcbiAgICBuYW1lOiAnZWZmZWN0LWNvdmVyZmxvdycsXG4gICAgcGFyYW1zOiB7XG4gICAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgICAgcm90YXRlOiA1MCxcbiAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgZGVwdGg6IDEwMCxcbiAgICAgICAgbW9kaWZpZXI6IDEsXG4gICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgICAgICBzZXRUcmFuc2xhdGU6IENvdmVyZmxvdy5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldFRyYW5zaXRpb246IENvdmVyZmxvdy5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjb3ZlcmZsb3cnKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goKChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgXCJjb3ZlcmZsb3dcIikpO1xuICAgICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKCgoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwiM2RcIikpO1xuXG4gICAgICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2NvdmVyZmxvdycpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jb3ZlcmZsb3dFZmZlY3Quc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY292ZXJmbG93JykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgVGh1bWJzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciByZWYgPSBzd2lwZXIucGFyYW1zO1xuICAgICAgdmFyIHRodW1ic1BhcmFtcyA9IHJlZi50aHVtYnM7XG4gICAgICB2YXIgU3dpcGVyQ2xhc3MgPSBzd2lwZXIuY29uc3RydWN0b3I7XG4gICAgICBpZiAodGh1bWJzUGFyYW1zLnN3aXBlciBpbnN0YW5jZW9mIFN3aXBlckNsYXNzKSB7XG4gICAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyID0gdGh1bWJzUGFyYW1zLnN3aXBlcjtcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci50aHVtYnMuc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCB7XG4gICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIudGh1bWJzLnN3aXBlci5wYXJhbXMsIHtcbiAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNPYmplY3QodGh1bWJzUGFyYW1zLnN3aXBlcikpIHtcbiAgICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXIgPSBuZXcgU3dpcGVyQ2xhc3MoVXRpbHMuZXh0ZW5kKHt9LCB0aHVtYnNQYXJhbXMuc3dpcGVyLCB7XG4gICAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgIH0pKTtcbiAgICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXJDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLiRlbC5hZGRDbGFzcyhzd2lwZXIucGFyYW1zLnRodW1icy50aHVtYnNDb250YWluZXJDbGFzcyk7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlci5vbigndGFwJywgc3dpcGVyLnRodW1icy5vblRodW1iQ2xpY2spO1xuICAgIH0sXG4gICAgb25UaHVtYkNsaWNrOiBmdW5jdGlvbiBvblRodW1iQ2xpY2soKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgIGlmICghdGh1bWJzU3dpcGVyKSB7IHJldHVybjsgfVxuICAgICAgdmFyIGNsaWNrZWRJbmRleCA9IHRodW1ic1N3aXBlci5jbGlja2VkSW5kZXg7XG4gICAgICB2YXIgY2xpY2tlZFNsaWRlID0gdGh1bWJzU3dpcGVyLmNsaWNrZWRTbGlkZTtcbiAgICAgIGlmIChjbGlja2VkU2xpZGUgJiYgJChjbGlja2VkU2xpZGUpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcykpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAodHlwZW9mIGNsaWNrZWRJbmRleCA9PT0gJ3VuZGVmaW5lZCcgfHwgY2xpY2tlZEluZGV4ID09PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNsaWRlVG9JbmRleDtcbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gcGFyc2VJbnQoJCh0aHVtYnNTd2lwZXIuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZVRvSW5kZXggPSBjbGlja2VkSW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRJbmRleCkuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZJbmRleCA9IHN3aXBlci5zbGlkZXMuZXEoY3VycmVudEluZGV4KS5wcmV2QWxsKChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzbGlkZVRvSW5kZXggKyBcIlxcXCJdXCIpKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLm5leHRBbGwoKFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHNsaWRlVG9JbmRleCArIFwiXFxcIl1cIikpLmVxKDApLmluZGV4KCk7XG4gICAgICAgIGlmICh0eXBlb2YgcHJldkluZGV4ID09PSAndW5kZWZpbmVkJykgeyBzbGlkZVRvSW5kZXggPSBuZXh0SW5kZXg7IH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIG5leHRJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHsgc2xpZGVUb0luZGV4ID0gcHJldkluZGV4OyB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRJbmRleCAtIGN1cnJlbnRJbmRleCA8IGN1cnJlbnRJbmRleCAtIHByZXZJbmRleCkgeyBzbGlkZVRvSW5kZXggPSBuZXh0SW5kZXg7IH1cbiAgICAgICAgZWxzZSB7IHNsaWRlVG9JbmRleCA9IHByZXZJbmRleDsgfVxuICAgICAgfVxuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGluaXRpYWwpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgICAgaWYgKCF0aHVtYnNTd2lwZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gdGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bydcbiAgICAgICAgPyB0aHVtYnNTd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKVxuICAgICAgICA6IHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcblxuICAgICAgaWYgKHN3aXBlci5yZWFsSW5kZXggIT09IHRodW1ic1N3aXBlci5yZWFsSW5kZXgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgICAgdmFyIG5ld1RodW1ic0luZGV4O1xuICAgICAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgaWYgKHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5oYXNDbGFzcyh0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICB0aHVtYnNTd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB0aHVtYnNTd2lwZXIuX2NsaWVudExlZnQgPSB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgICAgICAgICAgY3VycmVudFRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGaW5kIGFjdHVhbCB0aHVtYnMgaW5kZXggdG8gc2xpZGUgdG9cbiAgICAgICAgICB2YXIgcHJldlRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLnNsaWRlcy5lcShjdXJyZW50VGh1bWJzSW5kZXgpLnByZXZBbGwoKFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIChzd2lwZXIucmVhbEluZGV4KSArIFwiXFxcIl1cIikpLmVxKDApLmluZGV4KCk7XG4gICAgICAgICAgdmFyIG5leHRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5uZXh0QWxsKChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyAoc3dpcGVyLnJlYWxJbmRleCkgKyBcIlxcXCJdXCIpKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICAgIGlmICh0eXBlb2YgcHJldlRodW1ic0luZGV4ID09PSAndW5kZWZpbmVkJykgeyBuZXdUaHVtYnNJbmRleCA9IG5leHRUaHVtYnNJbmRleDsgfVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBuZXh0VGh1bWJzSW5kZXggPT09ICd1bmRlZmluZWQnKSB7IG5ld1RodW1ic0luZGV4ID0gcHJldlRodW1ic0luZGV4OyB9XG4gICAgICAgICAgZWxzZSBpZiAobmV4dFRodW1ic0luZGV4IC0gY3VycmVudFRodW1ic0luZGV4ID09PSBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIHsgbmV3VGh1bWJzSW5kZXggPSBjdXJyZW50VGh1bWJzSW5kZXg7IH1cbiAgICAgICAgICBlbHNlIGlmIChuZXh0VGh1bWJzSW5kZXggLSBjdXJyZW50VGh1bWJzSW5kZXggPCBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIHsgbmV3VGh1bWJzSW5kZXggPSBuZXh0VGh1bWJzSW5kZXg7IH1cbiAgICAgICAgICBlbHNlIHsgbmV3VGh1bWJzSW5kZXggPSBwcmV2VGh1bWJzSW5kZXg7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyAmJiB0aHVtYnNTd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihuZXdUaHVtYnNJbmRleCkgPCAwKSB7XG4gICAgICAgICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgIGlmIChuZXdUaHVtYnNJbmRleCA+IGN1cnJlbnRUaHVtYnNJbmRleCkge1xuICAgICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBuZXdUaHVtYnNJbmRleCArIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4KSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRodW1ic1N3aXBlci5zbGlkZVRvKG5ld1RodW1ic0luZGV4LCBpbml0aWFsID8gMCA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWN0aXZhdGUgdGh1bWJzXG4gICAgICB2YXIgdGh1bWJzVG9BY3RpdmF0ZSA9IDE7XG4gICAgICB2YXIgdGh1bWJBY3RpdmVDbGFzcyA9IHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdGh1bWJzVG9BY3RpdmF0ZSA9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIH1cblxuICAgICAgdGh1bWJzU3dpcGVyLnNsaWRlcy5yZW1vdmVDbGFzcyh0aHVtYkFjdGl2ZUNsYXNzKTtcbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3AgfHwgKHRodW1ic1N3aXBlci5wYXJhbXMudmlydHVhbCAmJiB0aHVtYnNTd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgICB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbigoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgKHN3aXBlci5yZWFsSW5kZXggKyBpKSArIFwiXFxcIl1cIikpLmFkZENsYXNzKHRodW1iQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCB0aHVtYnNUb0FjdGl2YXRlOyBpJDEgKz0gMSkge1xuICAgICAgICAgIHRodW1ic1N3aXBlci5zbGlkZXMuZXEoc3dpcGVyLnJlYWxJbmRleCArIGkkMSkuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICB2YXIgVGh1bWJzJDEgPSB7XG4gICAgbmFtZTogJ3RodW1icycsXG4gICAgcGFyYW1zOiB7XG4gICAgICB0aHVtYnM6IHtcbiAgICAgICAgc3dpcGVyOiBudWxsLFxuICAgICAgICBzbGlkZVRodW1iQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlJyxcbiAgICAgICAgdGh1bWJzQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLXRodW1icycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgc3dpcGVyOiBudWxsLFxuICAgICAgICAgIGluaXQ6IFRodW1icy5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICB1cGRhdGU6IFRodW1icy51cGRhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIG9uVGh1bWJDbGljazogVGh1bWJzLm9uVGh1bWJDbGljay5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHJlZiA9IHN3aXBlci5wYXJhbXM7XG4gICAgICAgIHZhciB0aHVtYnMgPSByZWYudGh1bWJzO1xuICAgICAgICBpZiAoIXRodW1icyB8fCAhdGh1bWJzLnN3aXBlcikgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnRodW1icy5pbml0KCk7XG4gICAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKHRydWUpO1xuICAgICAgfSxcbiAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci50aHVtYnMuc3dpcGVyKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci50aHVtYnMuc3dpcGVyKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgICAgaWYgKCF0aHVtYnNTd2lwZXIpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRodW1ic1N3aXBlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgICAgICBpZiAoIXRodW1ic1N3aXBlcikgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHN3aXBlci50aHVtYnMuc3dpcGVyQ3JlYXRlZCAmJiB0aHVtYnNTd2lwZXIpIHtcbiAgICAgICAgICB0aHVtYnNTd2lwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLy8gU3dpcGVyIENsYXNzXG5cbiAgdmFyIGNvbXBvbmVudHMgPSBbXG4gICAgRGV2aWNlJDEsXG4gICAgU3VwcG9ydCQxLFxuICAgIEJyb3dzZXIkMSxcbiAgICBSZXNpemUsXG4gICAgT2JzZXJ2ZXIkMSxcbiAgICBWaXJ0dWFsJDEsXG4gICAgS2V5Ym9hcmQkMSxcbiAgICBNb3VzZXdoZWVsJDEsXG4gICAgTmF2aWdhdGlvbiQxLFxuICAgIFBhZ2luYXRpb24kMSxcbiAgICBTY3JvbGxiYXIkMSxcbiAgICBQYXJhbGxheCQxLFxuICAgIFpvb20kMSxcbiAgICBMYXp5JDEsXG4gICAgQ29udHJvbGxlciQxLFxuICAgIEExMXksXG4gICAgSGlzdG9yeSQxLFxuICAgIEhhc2hOYXZpZ2F0aW9uJDEsXG4gICAgQXV0b3BsYXkkMSxcbiAgICBFZmZlY3RGYWRlLFxuICAgIEVmZmVjdEN1YmUsXG4gICAgRWZmZWN0RmxpcCxcbiAgICBFZmZlY3RDb3ZlcmZsb3csXG4gICAgVGh1bWJzJDFcbiAgXTtcblxuICBpZiAodHlwZW9mIFN3aXBlci51c2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgU3dpcGVyLnVzZSA9IFN3aXBlci5DbGFzcy51c2U7XG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUgPSBTd2lwZXIuQ2xhc3MuaW5zdGFsbE1vZHVsZTtcbiAgfVxuXG4gIFN3aXBlci51c2UoY29tcG9uZW50cyk7XG5cbiAgcmV0dXJuIFN3aXBlcjtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpcGVyLmpzLm1hcFxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdFxyXG4vLyBtb2JpbGVfbWVudVxyXG4gICAgXHJcbiAgICAkKCcuYnVyZ2VyJykuY2xpY2soIGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAkKCdoZWFkZXIgLm5hdmJhcicpLnNsaWRlVG9nZ2xlKDMwMCk7IFxyXG4gICAgICAgICQoJy5idXJnZXInKS50b2dnbGVDbGFzcyggJ2J1cmdlcl9hY3RpdmUnICk7IFxyXG4gICAgfSk7XHJcblx0XHJcblx0dmFyIHd3PXdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHRcdC8v0YTRg9C90LrRhtC40Y8g0LLRi9C30YvQstCw0LXRgtGB0Y8g0LLRgdC10LPQtNCwLCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGA0LDQt9C80LXRgNCwINC+0LrQvdCwLiDQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L7QvdCwINCy0YvQt9GL0LLQsNC70LDRgdGMINGC0L7Qu9GM0LrQviDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGI0LjRgNC40L3RiyDQvtC60L3QsCAtINGN0YLQvtGCINC/0YPQvdC60YJcclxuXHRcdGlmKHd3PT13aW5kb3cuaW5uZXJXaWR0aCkgcmV0dXJuOy8vXHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDkxOSkge1xyXG5cdFx0XHQkKCdoZWFkZXIgLm5hdmJhcicpLmhpZGUoKTtcclxuXHRcdFx0JCgnLmJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXJfYWN0aXZlJyk7IFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJy5tZW51IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4+YScgKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdGlmKCEkKCcuYnVyZ2VyJykuaXMoJzp2aXNpYmxlJykpcmV0dXJuO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLnN1Yi1tZW51Jykubm90KCQodGhpcykuY2xvc2VzdCgnbGknKS5maW5kKCcuc3ViLW1lbnUnKSkuc2xpZGVVcCgnMzAwJyk7XHJcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuZmluZCgnLnN1Yi1tZW51Jykuc2xpZGVUb2dnbGUoJzMwMCcpO1xyXG5cdH0pO1xyXG5cdFxyXG4vLyBcdHNsaWRlclx0XHJcblx0XHJcblx0dmFyIG15U3dpcGVyID0gbmV3IFN3aXBlciAoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG5cdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0YXV0b0hlaWdodDogXCJ0cnVlXCIsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdHNwZWVkOiA1MDAsXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHR9KVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdCQod2luZG93KS5yZXNpemUoKTtcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHR3dz0wO1xyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgpO1xyXG5cdH0sNDAwKVxyXG59KTsgIl0sImZpbGUiOiJtYWluLmpzIn0=
