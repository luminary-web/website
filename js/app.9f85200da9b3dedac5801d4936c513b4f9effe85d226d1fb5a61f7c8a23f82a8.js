"use strict";(()=>{var Xe=Object.create;var Me=Object.defineProperty;var Qe=Object.getOwnPropertyDescriptor;var Ze=Object.getOwnPropertyNames;var Ke=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty;var me=(t,s)=>()=>(s||t((s={exports:{}}).exports,s),s.exports);var tt=(t,s,u,i)=>{if(s&&typeof s=="object"||typeof s=="function")for(let a of Ze(s))!et.call(t,a)&&a!==u&&Me(t,a,{get:()=>s[a],enumerable:!(i=Qe(s,a))||i.enumerable});return t};var be=(t,s,u)=>(u=t!=null?Xe(Ke(t)):{},tt(s||!t||!t.__esModule?Me(u,"default",{value:t,enumerable:!0}):u,t));var Le=me((lt,pe)=>{(function(t,s){var u=s(t,t.document,Date);t.lazySizes=u,typeof pe=="object"&&pe.exports&&(pe.exports=u)})(typeof window!="undefined"?window:{},function(s,u,i){"use strict";var a,e;if(function(){var p,v={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=s.lazySizesConfig||s.lazysizesConfig||{};for(p in v)p in e||(e[p]=v[p])}(),!u||!u.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var y=u.documentElement,h=s.HTMLPictureElement,b="addEventListener",L="getAttribute",z=s[b].bind(s),A=s.setTimeout,m=s.requestAnimationFrame||A,C=s.requestIdleCallback,g=/^picture$/i,T=["load","error","lazyincluded","_lazyloaded"],x={},F=Array.prototype.forEach,H=function(p,v){return x[v]||(x[v]=new RegExp("(\\s|^)"+v+"(\\s|$)")),x[v].test(p[L]("class")||"")&&x[v]},j=function(p,v){H(p,v)||p.setAttribute("class",(p[L]("class")||"").trim()+" "+v)},K=function(p,v){var S;(S=H(p,v))&&p.setAttribute("class",(p[L]("class")||"").replace(S," "))},ee=function(p,v,S){var f=S?b:"removeEventListener";S&&ee(p,v),T.forEach(function(r){p[f](r,v)})},R=function(p,v,S,f,r){var n=u.createEvent("Event");return S||(S={}),S.instance=a,n.initEvent(v,!f,!r),n.detail=S,p.dispatchEvent(n),n},te=function(p,v){var S;!h&&(S=s.picturefill||e.pf)?(v&&v.src&&!p[L]("srcset")&&p.setAttribute("srcset",v.src),S({reevaluate:!0,elements:[p]})):v&&v.src&&(p.src=v.src)},V=function(p,v){return(getComputedStyle(p,null)||{})[v]},ue=function(p,v,S){for(S=S||p.offsetWidth;S<e.minSize&&v&&!p._lazysizesWidth;)S=v.offsetWidth,v=v.parentNode;return S},J=function(){var p,v,S=[],f=[],r=S,n=function(){var c=r;for(r=S.length?f:S,p=!0,v=!1;c.length;)c.shift()();p=!1},l=function(c,d){p&&!d?c.apply(this,arguments):(r.push(c),v||(v=!0,(u.hidden?A:m)(n)))};return l._lsFlush=n,l}(),$=function(p,v){return v?function(){J(p)}:function(){var S=this,f=arguments;J(function(){p.apply(S,f)})}},he=function(p){var v,S=0,f=e.throttleDelay,r=e.ricTimeout,n=function(){v=!1,S=i.now(),p()},l=C&&r>49?function(){C(n,{timeout:r}),r!==e.ricTimeout&&(r=e.ricTimeout)}:$(function(){A(n)},!0);return function(c){var d;(c=c===!0)&&(r=33),!v&&(v=!0,d=f-(i.now()-S),d<0&&(d=0),c||d<9?l():A(l,d))}},ce=function(p){var v,S,f=99,r=function(){v=null,p()},n=function(){var l=i.now()-S;l<f?A(n,f-l):(C||r)(r)};return function(){S=i.now(),v||(v=A(n,f))}},le=function(){var p,v,S,f,r,n,l,c,d,_,P,Y,He=/^img$/i,We=/^iframe$/i,qe="onscroll"in s&&!/(gle|ing)bot/.test(navigator.userAgent),De=0,re=0,B=0,Q=-1,ze=function(o){B--,(!o||B<0||!o.target)&&(B=0)},Ae=function(o){return Y==null&&(Y=V(u.body,"visibility")=="hidden"),Y||!(V(o.parentNode,"visibility")=="hidden"&&V(o,"visibility")=="hidden")},Ue=function(o,E){var w,M=o,k=Ae(o);for(c-=E,P+=E,d-=E,_+=E;k&&(M=M.offsetParent)&&M!=u.body&&M!=y;)k=(V(M,"opacity")||1)>0,k&&V(M,"overflow")!="visible"&&(w=M.getBoundingClientRect(),k=_>w.left&&d<w.right&&P>w.top-1&&c<w.bottom+1);return k},Te=function(){var o,E,w,M,k,O,q,D,G,U,X,Z,N=a.elements;if((f=e.loadMode)&&B<8&&(o=N.length)){for(E=0,Q++;E<o;E++)if(!(!N[E]||N[E]._lazyRace)){if(!qe||a.prematureUnveil&&a.prematureUnveil(N[E])){ie(N[E]);continue}if((!(D=N[E][L]("data-expand"))||!(O=D*1))&&(O=re),U||(U=!e.expand||e.expand<1?y.clientHeight>500&&y.clientWidth>500?500:370:e.expand,a._defEx=U,X=U*e.expFactor,Z=e.hFac,Y=null,re<X&&B<1&&Q>2&&f>2&&!u.hidden?(re=X,Q=0):f>1&&Q>1&&B<6?re=U:re=De),G!==O&&(n=innerWidth+O*Z,l=innerHeight+O,q=O*-1,G=O),w=N[E].getBoundingClientRect(),(P=w.bottom)>=q&&(c=w.top)<=l&&(_=w.right)>=q*Z&&(d=w.left)<=n&&(P||_||d||c)&&(e.loadHidden||Ae(N[E]))&&(v&&B<3&&!D&&(f<3||Q<4)||Ue(N[E],O))){if(ie(N[E]),k=!0,B>9)break}else!k&&v&&!M&&B<4&&Q<4&&f>2&&(p[0]||e.preloadAfterLoad)&&(p[0]||!D&&(P||_||d||c||N[E][L](e.sizesAttr)!="auto"))&&(M=p[0]||N[E])}M&&!k&&ie(M)}},I=he(Te),we=function(o){var E=o.target;if(E._lazyCache){delete E._lazyCache;return}ze(o),j(E,e.loadedClass),K(E,e.loadingClass),ee(E,_e),R(E,"lazyloaded")},Ve=$(we),_e=function(o){Ve({target:o.target})},$e=function(o,E){var w=o.getAttribute("data-load-mode")||e.iframeLoadMode;w==0?o.contentWindow.location.replace(E):w==1&&(o.src=E)},Ye=function(o){var E,w=o[L](e.srcsetAttr);(E=e.customMedia[o[L]("data-media")||o[L]("media")])&&o.setAttribute("media",E),w&&o.setAttribute("srcset",w)},Ge=$(function(o,E,w,M,k){var O,q,D,G,U,X;(U=R(o,"lazybeforeunveil",E)).defaultPrevented||(M&&(w?j(o,e.autosizesClass):o.setAttribute("sizes",M)),q=o[L](e.srcsetAttr),O=o[L](e.srcAttr),k&&(D=o.parentNode,G=D&&g.test(D.nodeName||"")),X=E.firesLoad||"src"in o&&(q||O||G),U={target:o},j(o,e.loadingClass),X&&(clearTimeout(S),S=A(ze,2500),ee(o,_e,!0)),G&&F.call(D.getElementsByTagName("source"),Ye),q?o.setAttribute("srcset",q):O&&!G&&(We.test(o.nodeName)?$e(o,O):o.src=O),k&&(q||G)&&te(o,{src:O})),o._lazyRace&&delete o._lazyRace,K(o,e.lazyClass),J(function(){var Z=o.complete&&o.naturalWidth>1;(!X||Z)&&(Z&&j(o,e.fastLoadedClass),we(U),o._lazyCache=!0,A(function(){"_lazyCache"in o&&delete o._lazyCache},9)),o.loading=="lazy"&&B--},!0)}),ie=function(o){if(!o._lazyRace){var E,w=He.test(o.nodeName),M=w&&(o[L](e.sizesAttr)||o[L]("sizes")),k=M=="auto";(k||!v)&&w&&(o[L]("src")||o.srcset)&&!o.complete&&!H(o,e.errorClass)&&H(o,e.lazyClass)||(E=R(o,"lazyunveilread").detail,k&&ne.updateElem(o,!0,o.offsetWidth),o._lazyRace=!0,B++,Ge(o,E,k,M,w))}},Je=ce(function(){e.loadMode=3,I()}),xe=function(){e.loadMode==3&&(e.loadMode=2),Je()},fe=function(){if(!v){if(i.now()-r<999){A(fe,999);return}v=!0,e.loadMode=3,I(),z("scroll",xe,!0)}};return{_:function(){r=i.now(),a.elements=u.getElementsByClassName(e.lazyClass),p=u.getElementsByClassName(e.lazyClass+" "+e.preloadClass),z("scroll",I,!0),z("resize",I,!0),z("pageshow",function(o){if(o.persisted){var E=u.querySelectorAll("."+e.loadingClass);E.length&&E.forEach&&m(function(){E.forEach(function(w){w.complete&&ie(w)})})}}),s.MutationObserver?new MutationObserver(I).observe(y,{childList:!0,subtree:!0,attributes:!0}):(y[b]("DOMNodeInserted",I,!0),y[b]("DOMAttrModified",I,!0),setInterval(I,999)),z("hashchange",I,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(o){u[b](o,I,!0)}),/d$|^c/.test(u.readyState)?fe():(z("load",fe),u[b]("DOMContentLoaded",I),A(fe,2e4)),a.elements.length?(Te(),J._lsFlush()):I()},checkElems:I,unveil:ie,_aLSL:xe}}(),ne=function(){var p,v=$(function(n,l,c,d){var _,P,Y;if(n._lazysizesWidth=d,d+="px",n.setAttribute("sizes",d),g.test(l.nodeName||""))for(_=l.getElementsByTagName("source"),P=0,Y=_.length;P<Y;P++)_[P].setAttribute("sizes",d);c.detail.dataAttr||te(n,c.detail)}),S=function(n,l,c){var d,_=n.parentNode;_&&(c=ue(n,_,c),d=R(n,"lazybeforesizes",{width:c,dataAttr:!!l}),d.defaultPrevented||(c=d.detail.width,c&&c!==n._lazysizesWidth&&v(n,_,d,c)))},f=function(){var n,l=p.length;if(l)for(n=0;n<l;n++)S(p[n])},r=ce(f);return{_:function(){p=u.getElementsByClassName(e.autosizesClass),z("resize",r)},checkElems:r,updateElem:S}}(),W=function(){!W.i&&u.getElementsByClassName&&(W.i=!0,ne._(),le._())};return A(function(){e.init&&W()}),a={cfg:e,autoSizer:ne,loader:le,init:W,uP:te,aC:j,rC:K,hC:H,fire:R,gW:ue,rAF:J},a})});var Ne=me((ft,Se)=>{(function(t,s){var u=function(){s(t.lazySizes),t.removeEventListener("lazyunveilread",u,!0)};s=s.bind(null,t,t.document),typeof Se=="object"&&Se.exports?s(Le()):typeof define=="function"&&define.amd?define(["lazysizes"],s):t.lazySizes?u():t.addEventListener("lazyunveilread",u,!0)})(window,function(t,s,u){"use strict";var i="loading"in HTMLImageElement.prototype,a="loading"in HTMLIFrameElement.prototype,e=!1,y=u.prematureUnveil,h=u.cfg,b={focus:1,mouseover:1,click:1,load:1,transitionend:1,animationend:1,scroll:1,resize:1};if(h.nativeLoading||(h.nativeLoading={}),!t.addEventListener||!t.MutationObserver||!i&&!a)return;function L(){var A=u.loader,m=A.checkElems,C=function(){setTimeout(function(){t.removeEventListener("scroll",A._aLSL,!0)},1e3)},g=typeof h.nativeLoading.disableListeners=="object"?h.nativeLoading.disableListeners:b;g.scroll&&(t.addEventListener("load",C),C(),t.removeEventListener("scroll",m,!0)),g.resize&&t.removeEventListener("resize",m,!0),Object.keys(g).forEach(function(T){g[T]&&s.removeEventListener(T,m,!0)})}function z(){e||(e=!0,i&&a&&h.nativeLoading.disableListeners&&(h.nativeLoading.disableListeners===!0&&(h.nativeLoading.setLoadingAttribute=!0),L()),h.nativeLoading.setLoadingAttribute&&t.addEventListener("lazybeforeunveil",function(A){var m=A.target;"loading"in m&&!m.getAttribute("loading")&&m.setAttribute("loading","lazy")},!0))}u.prematureUnveil=function(m){if(e||z(),"loading"in m&&(h.nativeLoading.setLoadingAttribute||m.getAttribute("loading"))&&(m.getAttribute("data-sizes")!="auto"||m.offsetWidth))return!0;if(y)return y(m)}})});var Be=me((ae,Ce)=>{(function(s,u){typeof ae=="object"&&typeof Ce=="object"?Ce.exports=u():typeof define=="function"&&define.amd?define([],u):typeof ae=="object"?ae.ClipboardJS=u():s.ClipboardJS=u()})(ae,function(){return function(){var t={686:function(i,a,e){"use strict";e.d(a,{default:function(){return S}});var y=e(279),h=e.n(y),b=e(370),L=e.n(b),z=e(817),A=e.n(z);function m(f){try{return document.execCommand(f)}catch(r){return!1}}var C=function(r){var n=A()(r);return m("cut"),n},g=C;function T(f){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(l,"px"),n.setAttribute("readonly",""),n.value=f,n}var x=function(r,n){var l=T(r);n.container.appendChild(l);var c=A()(l);return m("copy"),l.remove(),c},F=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof r=="string"?l=x(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?l=x(r.value,n):(l=A()(r),m("copy")),l},H=F;function j(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(n){return typeof n}:j=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j(f)}var K=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,l=n===void 0?"copy":n,c=r.container,d=r.target,_=r.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&j(d)==="object"&&d.nodeType===1){if(l==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return H(_,{container:c});if(d)return l==="cut"?g(d):H(d,{container:c})},ee=K;function R(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(n){return typeof n}:R=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(f)}function te(f,r){if(!(f instanceof r))throw new TypeError("Cannot call a class as a function")}function V(f,r){for(var n=0;n<r.length;n++){var l=r[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(f,l.key,l)}}function ue(f,r,n){return r&&V(f.prototype,r),n&&V(f,n),f}function J(f,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(r&&r.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),r&&$(f,r)}function $(f,r){return $=Object.setPrototypeOf||function(l,c){return l.__proto__=c,l},$(f,r)}function he(f){var r=ne();return function(){var l=W(f),c;if(r){var d=W(this).constructor;c=Reflect.construct(l,arguments,d)}else c=l.apply(this,arguments);return ce(this,c)}}function ce(f,r){return r&&(R(r)==="object"||typeof r=="function")?r:le(f)}function le(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function ne(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(f){return!1}}function W(f){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},W(f)}function p(f,r){var n="data-clipboard-".concat(f);if(r.hasAttribute(n))return r.getAttribute(n)}var v=function(f){J(n,f);var r=he(n);function n(l,c){var d;return te(this,n),d=r.call(this),d.resolveOptions(c),d.listenClick(l),d}return ue(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=R(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var d=this;this.listener=L()(c,"click",function(_){return d.onClick(_)})}},{key:"onClick",value:function(c){var d=c.delegateTarget||c.currentTarget,_=this.action(d)||"copy",P=ee({action:_,container:this.container,target:this.target(d),text:this.text(d)});this.emit(P?"success":"error",{action:_,text:P,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return p("action",c)}},{key:"defaultTarget",value:function(c){var d=p("target",c);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(c){return p("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return H(c,d)}},{key:"cut",value:function(c){return g(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof c=="string"?[c]:c,_=!!document.queryCommandSupported;return d.forEach(function(P){_=_&&!!document.queryCommandSupported(P)}),_}}]),n}(h()),S=v},828:function(i){var a=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function y(h,b){for(;h&&h.nodeType!==a;){if(typeof h.matches=="function"&&h.matches(b))return h;h=h.parentNode}}i.exports=y},438:function(i,a,e){var y=e(828);function h(z,A,m,C,g){var T=L.apply(this,arguments);return z.addEventListener(m,T,g),{destroy:function(){z.removeEventListener(m,T,g)}}}function b(z,A,m,C,g){return typeof z.addEventListener=="function"?h.apply(null,arguments):typeof m=="function"?h.bind(null,document).apply(null,arguments):(typeof z=="string"&&(z=document.querySelectorAll(z)),Array.prototype.map.call(z,function(T){return h(T,A,m,C,g)}))}function L(z,A,m,C){return function(g){g.delegateTarget=y(g.target,A),g.delegateTarget&&C.call(z,g)}}i.exports=b},879:function(i,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var y=Object.prototype.toString.call(e);return e!==void 0&&(y==="[object NodeList]"||y==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var y=Object.prototype.toString.call(e);return y==="[object Function]"}},370:function(i,a,e){var y=e(879),h=e(438);function b(m,C,g){if(!m&&!C&&!g)throw new Error("Missing required arguments");if(!y.string(C))throw new TypeError("Second argument must be a String");if(!y.fn(g))throw new TypeError("Third argument must be a Function");if(y.node(m))return L(m,C,g);if(y.nodeList(m))return z(m,C,g);if(y.string(m))return A(m,C,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function L(m,C,g){return m.addEventListener(C,g),{destroy:function(){m.removeEventListener(C,g)}}}function z(m,C,g){return Array.prototype.forEach.call(m,function(T){T.addEventListener(C,g)}),{destroy:function(){Array.prototype.forEach.call(m,function(T){T.removeEventListener(C,g)})}}}function A(m,C,g){return h(document.body,m,C,g)}i.exports=b},817:function(i){function a(e){var y;if(e.nodeName==="SELECT")e.focus(),y=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var h=e.hasAttribute("readonly");h||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),h||e.removeAttribute("readonly"),y=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var b=window.getSelection(),L=document.createRange();L.selectNodeContents(e),b.removeAllRanges(),b.addRange(L),y=b.toString()}return y}i.exports=a},279:function(i){function a(){}a.prototype={on:function(e,y,h){var b=this.e||(this.e={});return(b[e]||(b[e]=[])).push({fn:y,ctx:h}),this},once:function(e,y,h){var b=this;function L(){b.off(e,L),y.apply(h,arguments)}return L._=y,this.on(e,L,h)},emit:function(e){var y=[].slice.call(arguments,1),h=((this.e||(this.e={}))[e]||[]).slice(),b=0,L=h.length;for(b;b<L;b++)h[b].fn.apply(h[b].ctx,y);return this},off:function(e,y){var h=this.e||(this.e={}),b=h[e],L=[];if(b&&y)for(var z=0,A=b.length;z<A;z++)b[z].fn!==y&&b[z].fn._!==y&&L.push(b[z]);return L.length?h[e]=L:delete h[e],this}},i.exports=a,i.exports.TinyEmitter=a}},s={};function u(i){if(s[i])return s[i].exports;var a=s[i]={exports:{}};return t[i](a,a.exports,u),a.exports}return function(){u.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return u.d(a,{a}),a}}(),function(){u.d=function(i,a){for(var e in a)u.o(a,e)&&!u.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:a[e]})}}(),function(){u.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)}}(),u(686)}().default})});function ke(t){return new Promise(function(s,u,i){(i=new XMLHttpRequest).open("GET",t,i.withCredentials=!0),i.onload=function(){i.status===200?s():u()},i.send()})}var Ee,nt=(Ee=document.createElement("link")).relList&&Ee.relList.supports&&Ee.relList.supports("prefetch")?function(t){return new Promise(function(s,u,i){(i=document.createElement("link")).rel="prefetch",i.href=t,i.onload=s,i.onerror=u,document.head.appendChild(i)})}:ke,rt=window.requestIdleCallback||function(t){var s=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-s))}})},1)},oe=new Set,de=new Set,ve=!1;function Pe(t){if(t){if(t.saveData)return new Error("Save-Data is enabled");if(/2g/.test(t.effectiveType))return new Error("network conditions are poor")}return!0}function Oe(t){if(t||(t={}),window.IntersectionObserver){var s=function(C){C=C||1;var g=[],T=0;function x(){T<C&&g.length>0&&(g.shift()(),T++)}return[function(F){g.push(F)>1||x()},function(){T--,x()}]}(t.throttle||1/0),u=s[0],i=s[1],a=t.limit||1/0,e=t.origins||[location.hostname],y=t.ignores||[],h=t.delay||0,b=[],L=t.timeoutFn||rt,z=typeof t.hrefFn=="function"&&t.hrefFn,A=t.prerender||!1;ve=t.prerenderAndPrefetch||!1;var m=new IntersectionObserver(function(C){C.forEach(function(g){if(g.isIntersecting)b.push((g=g.target).href),function(x,F){F?setTimeout(x,F):x()}(function(){b.indexOf(g.href)!==-1&&(m.unobserve(g),(ve||A)&&de.size<1?it(z?z(g):g.href).catch(function(x){if(!t.onError)throw x;t.onError(x)}):oe.size<a&&!A&&u(function(){Ie(z?z(g):g.href,t.priority).then(i).catch(function(x){i(),t.onError&&t.onError(x)})}))},h);else{var T=b.indexOf((g=g.target).href);T>-1&&b.splice(T)}})},{threshold:t.threshold||0});return L(function(){(t.el||document).querySelectorAll("a").forEach(function(C){e.length&&!e.includes(C.hostname)||function g(T,x){return Array.isArray(x)?x.some(function(F){return g(T,F)}):(x.test||x).call(x,T.href,T)}(C,y)||m.observe(C)})},{timeout:t.timeout||2e3}),function(){oe.clear(),m.disconnect()}}}function Ie(t,s,u){var i=Pe(navigator.connection);return i instanceof Error?Promise.reject(new Error("Cannot prefetch, "+i.message)):(de.size>0&&!ve&&console.warn("[Warning] You are using both prefetching and prerendering on the same document"),Promise.all([].concat(t).map(function(a){if(!oe.has(a))return oe.add(a),(s?function(e){return window.fetch?fetch(e,{credentials:"include"}):ke(e)}:nt)(new URL(a,location.href).toString())})))}function it(t,s){var u=Pe(navigator.connection);if(u instanceof Error)return Promise.reject(new Error("Cannot prerender, "+u.message));if(!HTMLScriptElement.supports("speculationrules"))return Ie(t),Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));if(document.querySelector('script[type="speculationrules"]'))return Promise.reject(new Error("Speculation Rules is already defined and cannot be altered."));for(var i=0,a=[].concat(t);i<a.length;i+=1){var e=a[i];if(window.location.origin!==new URL(e,window.location.href).origin)return Promise.reject(new Error("Only same origin URLs are allowed: "+e));de.add(e)}oe.size>0&&!ve&&console.warn("[Warning] You are using both prefetching and prerendering on the same document");var y=function(h){var b=document.createElement("script");b.type="speculationrules",b.text='{"prerender":[{"source": "list","urls": ["'+Array.from(h).join('","')+'"]}]}';try{document.head.appendChild(b)}catch(L){return L}return!0}(de);return y===!0?Promise.resolve():Promise.reject(y)}var Re=be(Le()),vt=be(Ne());Oe();Re.default.cfg.nativeLoading={setLoadingAttribute:!0,disableListeners:{scroll:!0}};var Fe=be(Be());(()=>{"use strict";for(var t=document.getElementsByClassName("highlight"),s=0;s<t.length;++s){var u=t[s];u.insertAdjacentHTML("afterbegin",'<div class="copy"><button title="Copy to clipboard" class="btn-copy" aria-label="Clipboard button"><div></div></button></div>')}var i=new Fe.default(".btn-copy",{target:function(a){return a.parentNode.nextElementSibling}});i.on("success",function(a){a.clearSelection()}),i.on("error",function(a){console.error("Action:",a.action),console.error("Trigger:",a.trigger)})})();var se=document.getElementById("toTop");se!==null&&(se.classList.remove("fade"),window.onscroll=function(){ot()},se.addEventListener("click",at));function ot(){document.body.scrollTop>270||document.documentElement.scrollTop>270?se.classList.add("fade"):se.classList.remove("fade")}function at(){document.body.scrollTop=0,document.documentElement.scrollTop=0}var ge,ye=document.querySelectorAll("[data-toggle-tab]"),st=document.querySelectorAll("[data-pane]");function je(t){if(t.target){t.preventDefault();var s=t.currentTarget,u=s.getAttribute("data-toggle-tab")}else var u=t;window.localStorage&&window.localStorage.setItem("configLangPref",u);for(var i=document.querySelectorAll("[data-toggle-tab="+u+"]"),a=document.querySelectorAll("[data-pane="+u+"]"),e=0;e<ye.length;e++)ye[e].classList.remove("active"),st[e].classList.remove("active");for(var e=0;e<i.length;e++)i[e].classList.add("active"),a[e].classList.add("show","active")}for(ge=0;ge<ye.length;ge++)ye[ge].addEventListener("click",je);window.localStorage.getItem("configLangPref")&&je(window.localStorage.getItem("configLangPref"));document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".navbar-toggle-btn"),s=document.querySelector(".nav-links"),u=document.querySelector(".navbar"),i=document.getElementById("menu-icon"),a=`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="3" width="24" height="4" rx="2" fill="#1B1813"/>
              <rect y="17" width="24" height="4" rx="2" fill="#1B1813"/>
          </svg>
      `,e=`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="19" width="24" height="4" rx="2" transform="rotate(-45 2 19)" fill="#1B1813"/>
              <rect x="5" y="2" width="24" height="4" rx="2" transform="rotate(45 5 2)" fill="#1B1813"/>
          </svg>
      `;t.addEventListener("click",function(){s.classList.toggle("show"),u.classList.toggle("show"),s.classList.contains("show")?i.innerHTML=e:i.innerHTML=a})});document.getElementById("menu-icon").addEventListener("click",function(){var t=document.getElementById("hero-section"),s=document.getElementById("navbar-buttons");t.style.display==="none"?(t.style.display="block",s.style.display="none"):(t.style.display="none",s.style.display="flex")});document.getElementById("menu-icon").addEventListener("click",function(){var t=document.getElementById("hero-section"),s=document.getElementById("navbar-buttons");window.innerWidth<=767.98&&(t.classList.toggle("hide"),s.classList.toggle("show"))});})();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@hyas/doks-core/assets/js/clipboard.js:
  (*!
   * clipboard.js for Bootstrap based Hyas sites
   * Copyright 2021-2023 Hyas
   * Licensed under the MIT License
   *)
*/