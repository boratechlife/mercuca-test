import"./hoisted.7lSlPBTo.js";function Kt(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Un(e,n,t){return n&&Kt(e.prototype,n),t&&Kt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var qt="(prefers-reduced-motion: reduce)",De=1,Bn=2,Pe=3,Me=4,qe=5,it=6,st=7,Wn={CREATED:De,MOUNTED:Bn,IDLE:Pe,MOVING:Me,SCROLLING:qe,DRAGGING:it,DESTROYED:st};function de(e){e.length=0}function _e(e,n,t){return Array.prototype.slice.call(e,n,t)}function U(e){return e.bind.apply(e,[null].concat(_e(arguments,1)))}var cn=setTimeout,Nt=function(){};function $t(e){return requestAnimationFrame(e)}function lt(e,n){return typeof n===e}function ze(e){return!Pt(e)&&lt("object",e)}var wt=Array.isArray,fn=U(lt,"function"),he=U(lt,"string"),$e=U(lt,"undefined");function Pt(e){return e===null}function vn(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function je(e){return wt(e)?e:[e]}function ne(e,n){je(e).forEach(n)}function pt(e,n){return e.indexOf(n)>-1}function at(e,n){return e.push.apply(e,je(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function oe(e,n){fe(e,he(n)?n.split(" "):n,!0)}function Ze(e,n){ne(n,e.appendChild.bind(e))}function Mt(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function Ue(e,n){return vn(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function ln(e,n){var t=e?_e(e.children):[];return n?t.filter(function(r){return Ue(r,n)}):t}function Je(e,n){return n?ln(e,n)[0]:e.firstElementChild}var Be=Object.keys;function Le(e,n,t){return e&&(t?Be(e).reverse():Be(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function We(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){e[r]=n[r]})}),e}function ge(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){wt(t)?e[r]=t.slice():ze(t)?e[r]=ge({},ze(e[r])?e[r]:{},t):e[r]=t})}),e}function jt(e,n){ne(n||Be(e),function(t){delete e[t]})}function ue(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function x(e,n,t){ze(n)?Le(n,function(r,o){x(e,o,r)}):ne(e,function(r){Pt(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function Ce(e,n,t){var r=document.createElement(e);return n&&(he(n)?oe(r,n):x(r,n)),t&&Ze(t,r),r}function re(e,n,t){if($e(t))return getComputedStyle(e)[n];Pt(t)||(e.style[n]=""+t)}function He(e,n){re(e,"display",n)}function dn(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function Zt(e,n){return e&&e.classList.contains(n)}function ee(e){return e.getBoundingClientRect()}function Ie(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function En(e){return Je(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function gn(e,n){return e&&e.querySelector(n)}function Vt(e,n){return n?_e(e.querySelectorAll(n)):[]}function ve(e,n){fe(e,n,!1)}function Rt(e){return e.timeStamp}function Te(e){return he(e)?e:e?e+"px":""}var Qe="splide",xt="data-"+Qe;function ke(e,n){if(!e)throw new Error("["+Qe+"] "+(n||""))}var me=Math.min,ct=Math.max,ft=Math.floor,Ye=Math.ceil,J=Math.abs;function hn(e,n,t){return J(e-n)<t}function ot(e,n,t,r){var o=me(n,t),l=ct(n,t);return r?o<e&&e<l:o<=e&&e<=l}function be(e,n,t){var r=me(n,t),o=ct(n,t);return me(ct(r,e),o)}function bt(e){return+(e>0)-+(e<0)}function Ot(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function Ft(e){return e<10?"0"+e:""+e}var Jt={};function Hn(e){return""+e+Ft(Jt[e]=(Jt[e]||0)+1)}function mn(){var e=[];function n(i,s,c,v){o(i,s,function(a,m,d){var E="addEventListener"in a,u=E?a.removeEventListener.bind(a,m,c,v):a.removeListener.bind(a,c);E?a.addEventListener(m,c,v):a.addListener(c),e.push([a,m,d,c,u])})}function t(i,s,c){o(i,s,function(v,a,m){e=e.filter(function(d){return d[0]===v&&d[1]===a&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function r(i,s,c){var v,a=!0;return typeof CustomEvent=="function"?v=new CustomEvent(s,{bubbles:a,detail:c}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(s,a,!1,c)),i.dispatchEvent(v),v}function o(i,s,c){ne(i,function(v){v&&ne(s,function(a){a.split(" ").forEach(function(m){var d=m.split(".");c(v,d[0],d[1])})})})}function l(){e.forEach(function(i){i[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:l}}var Re="mounted",Qt="ready",Ae="move",et="moved",An="click",Yn="active",Xn="inactive",Kn="visible",qn="hidden",K="refresh",Q="updated",Xe="resize",kt="resized",$n="drag",jn="dragging",Zn="dragged",Gt="scroll",Ve="scrolled",Jn="overflow",_n="destroy",Qn="arrows:mounted",er="arrows:updated",tr="pagination:mounted",nr="pagination:updated",yn="navigation:mounted",Sn="autoplay:play",rr="autoplay:playing",Tn="autoplay:pause",Ln="lazyload:loaded",In="sk",Nn="sh",vt="ei";function H(e){var n=e?e.event.bus:document.createDocumentFragment(),t=mn();function r(l,i){t.bind(n,je(l).join(" "),function(s){i.apply(i,wt(s.detail)?s.detail:[])})}function o(l){t.dispatch(n,l,_e(arguments,1))}return e&&e.event.on(_n,t.destroy),We(t,{bus:n,on:r,off:U(t.unbind,n),emit:o})}function dt(e,n,t,r){var o=Date.now,l,i=0,s,c=!0,v=0;function a(){if(!c){if(i=e?me((o()-l)/e,1):1,t&&t(i),i>=1&&(n(),l=o(),r&&++v>=r))return d();s=$t(a)}}function m(A){A||u(),l=o()-(A?i*e:0),c=!1,s=$t(a)}function d(){c=!0}function E(){l=o(),i=0,t&&t(i)}function u(){s&&cancelAnimationFrame(s),i=0,s=0,c=!0}function f(A){e=A}function _(){return c}return{start:m,rewind:E,pause:d,cancel:u,set:f,isPaused:_}}function ir(e){var n=e;function t(o){n=o}function r(o){return pt(je(o),n)}return{set:t,is:r}}function ar(e,n){var t=dt(n||0,e,null,1);return function(){t.isPaused()&&t.start()}}function or(e,n,t){var r=e.state,o=t.breakpoints||{},l=t.reducedMotion||{},i=mn(),s=[];function c(){var u=t.mediaQuery==="min";Be(o).sort(function(f,_){return u?+f-+_:+_-+f}).forEach(function(f){a(o[f],"("+(u?"min":"max")+"-width:"+f+"px)")}),a(l,qt),m()}function v(u){u&&i.destroy()}function a(u,f){var _=matchMedia(f);i.bind(_,"change",m),s.push([u,_])}function m(){var u=r.is(st),f=t.direction,_=s.reduce(function(A,h){return ge(A,h[1].matches?h[0]:{})},{});jt(t),E(_),t.destroy?e.destroy(t.destroy==="completely"):u?(v(!0),e.mount()):f!==t.direction&&e.refresh()}function d(u){matchMedia(qt).matches&&(u?ge(t,l):jt(t,Be(l)))}function E(u,f,_){ge(t,u),f&&ge(Object.getPrototypeOf(t),u),(_||!r.is(De))&&e.emit(Q,t)}return{setup:c,destroy:v,reduce:d,set:E}}var Et="Arrow",gt=Et+"Left",ht=Et+"Right",Rn=Et+"Up",bn=Et+"Down",en="rtl",mt="ttb",St={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Rn,ht],ArrowRight:[bn,gt]};function ur(e,n,t){function r(l,i,s){s=s||t.direction;var c=s===en&&!i?1:s===mt?0:-1;return St[l]&&St[l][c]||l.replace(/width|left|right/i,function(v,a){var m=St[v.toLowerCase()][c]||v;return a>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function o(l){return l*(t.direction===en?1:-1)}return{resolve:r,orient:o}}var le="role",we="tabindex",sr="disabled",ae="aria-",tt=ae+"controls",On=ae+"current",tn=ae+"selected",te=ae+"label",zt=ae+"labelledby",Dn=ae+"hidden",Ut=ae+"orientation",Ke=ae+"roledescription",nn=ae+"live",rn=ae+"busy",an=ae+"atomic",Bt=[le,we,sr,tt,On,te,zt,Dn,Ut,Ke],se=Qe+"__",ye="is-",Tt=Qe,on=se+"track",cr=se+"list",At=se+"slide",Cn=At+"--clone",fr=At+"__container",Wt=se+"arrows",_t=se+"arrow",wn=_t+"--prev",Pn=_t+"--next",yt=se+"pagination",pn=yt+"__page",vr=se+"progress",lr=vr+"__bar",dr=se+"toggle",Er=se+"spinner",gr=se+"sr",hr=ye+"initialized",Ne=ye+"active",Mn=ye+"prev",Vn=ye+"next",Dt=ye+"visible",Ct=ye+"loading",xn=ye+"focus-in",Fn=ye+"overflow",mr=[Ne,Dt,Mn,Vn,Ct,xn,Fn],Ar={slide:At,clone:Cn,arrows:Wt,arrow:_t,prev:wn,next:Pn,pagination:yt,page:pn,spinner:Er};function _r(e,n){if(fn(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!Ue(t,n);)t=t.parentElement;return t}var yr=5,un=200,kn="touchstart mousedown",Lt="touchmove mousemove",It="touchend touchcancel mouseup click";function Sr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=e.root,s=t.i18n,c={},v=[],a=[],m=[],d,E,u;function f(){g(),P(),h()}function _(){o(K,A),o(K,f),o(Q,h),l(document,kn+" keydown",function(S){u=S.type==="keydown"},{capture:!0}),l(i,"focusin",function(){fe(i,xn,!!u)})}function A(S){var O=Bt.concat("style");de(v),ve(i,a),ve(d,m),ue([d,E],O),ue(i,S?O:["style",Ke])}function h(){ve(i,a),ve(d,m),a=M(Tt),m=M(on),oe(i,a),oe(d,m),x(i,te,t.label),x(i,zt,t.labelledby)}function g(){d=b("."+on),E=Je(d,"."+cr),ke(d&&E,"A track/list element is missing."),at(v,ln(E,"."+At+":not(."+Cn+")")),Le({arrows:Wt,pagination:yt,prev:wn,next:Pn,bar:lr,toggle:dr},function(S,O){c[O]=b("."+S)}),We(c,{root:i,track:d,list:E,slides:v})}function P(){var S=i.id||Hn(Qe),O=t.role;i.id=S,d.id=d.id||S+"-track",E.id=E.id||S+"-list",!ie(i,le)&&i.tagName!=="SECTION"&&O&&x(i,le,O),x(i,Ke,s.carousel),x(E,le,"presentation")}function b(S){var O=gn(i,S);return O&&_r(O,"."+Tt)===i?O:void 0}function M(S){return[S+"--"+t.type,S+"--"+t.direction,t.drag&&S+"--draggable",t.isNavigation&&S+"--nav",S===Tt&&Ne]}return We(c,{setup:f,mount:_,destroy:A})}var pe="slide",xe="loop",nt="fade";function Tr(e,n,t,r){var o=H(e),l=o.on,i=o.emit,s=o.bind,c=e.Components,v=e.root,a=e.options,m=a.isNavigation,d=a.updateOnMove,E=a.i18n,u=a.pagination,f=a.slideFocus,_=c.Direction.resolve,A=ie(r,"style"),h=ie(r,te),g=t>-1,P=Je(r,"."+fr),b;function M(){g||(r.id=v.id+"-slide"+Ft(n+1),x(r,le,u?"tabpanel":"group"),x(r,Ke,E.slide),x(r,te,h||Ot(E.slideLabel,[n+1,e.length]))),S()}function S(){s(r,"click",U(i,An,p)),s(r,"keydown",U(i,In,p)),l([et,Nn,Ve],L),l(yn,k),d&&l(Ae,w)}function O(){b=!0,o.destroy(),ve(r,mr),ue(r,Bt),x(r,"style",A),x(r,te,h||"")}function k(){var C=e.splides.map(function(T){var D=T.splide.Components.Slides.getAt(n);return D?D.slide.id:""}).join(" ");x(r,te,Ot(E.slideX,(g?t:n)+1)),x(r,tt,C),x(r,le,f?"button":""),f&&ue(r,Ke)}function w(){b||L()}function L(){if(!b){var C=e.index;I(),N(),fe(r,Mn,n===C-1),fe(r,Vn,n===C+1)}}function I(){var C=F();C!==Zt(r,Ne)&&(fe(r,Ne,C),x(r,On,m&&C||""),i(C?Yn:Xn,p))}function N(){var C=Y(),T=!C&&(!F()||g);if(e.state.is([Me,qe])||x(r,Dn,T||""),x(Vt(r,a.focusableNodes||""),we,T?-1:""),f&&x(r,we,T?-1:0),C!==Zt(r,Dt)&&(fe(r,Dt,C),i(C?Kn:qn,p)),!C&&document.activeElement===r){var D=c.Slides.getAt(e.index);D&&dn(D.slide)}}function V(C,T,D){re(D&&P||r,C,T)}function F(){var C=e.index;return C===n||a.cloneStatus&&C===t}function Y(){if(e.is(nt))return F();var C=ee(c.Elements.track),T=ee(r),D=_("left",!0),G=_("right",!0);return ft(C[D])<=Ye(T[D])&&ft(T[G])<=Ye(C[G])}function W(C,T){var D=J(C-n);return!g&&(a.rewind||e.is(xe))&&(D=me(D,e.length-D)),D<=T}var p={index:n,slideIndex:t,slide:r,container:P,isClone:g,mount:M,destroy:O,update:L,style:V,isWithin:W};return p}function Lr(e,n,t){var r=H(e),o=r.on,l=r.emit,i=r.bind,s=n.Elements,c=s.slides,v=s.list,a=[];function m(){d(),o(K,E),o(K,d)}function d(){c.forEach(function(L,I){f(L,I,-1)})}function E(){b(function(L){L.destroy()}),de(a)}function u(){b(function(L){L.update()})}function f(L,I,N){var V=Tr(e,I,N,L);V.mount(),a.push(V),a.sort(function(F,Y){return F.index-Y.index})}function _(L){return L?M(function(I){return!I.isClone}):a}function A(L){var I=n.Controller,N=I.toIndex(L),V=I.hasFocus()?1:t.perPage;return M(function(F){return ot(F.index,N,N+V-1)})}function h(L){return M(L)[0]}function g(L,I){ne(L,function(N){if(he(N)&&(N=En(N)),vn(N)){var V=c[I];V?Mt(N,V):Ze(v,N),oe(N,t.classes.slide),O(N,U(l,Xe))}}),l(K)}function P(L){Ie(M(L).map(function(I){return I.slide})),l(K)}function b(L,I){_(I).forEach(L)}function M(L){return a.filter(fn(L)?L:function(I){return he(L)?Ue(I.slide,L):pt(je(L),I.index)})}function S(L,I,N){b(function(V){V.style(L,I,N)})}function O(L,I){var N=Vt(L,"img"),V=N.length;V?N.forEach(function(F){i(F,"load error",function(){--V||I()})}):I()}function k(L){return L?c.length:a.length}function w(){return a.length>t.perPage}return{mount:m,destroy:E,update:u,register:f,get:_,getIn:A,getAt:h,add:g,remove:P,forEach:b,filter:M,style:S,getLength:k,isEnough:w}}function Ir(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.emit,s=n.Slides,c=n.Direction.resolve,v=n.Elements,a=v.root,m=v.track,d=v.list,E=s.getAt,u=s.style,f,_,A;function h(){g(),l(window,"resize load",ar(U(i,Xe))),o([Q,K],g),o(Xe,P)}function g(){f=t.direction===mt,re(a,"maxWidth",Te(t.width)),re(m,c("paddingLeft"),b(!1)),re(m,c("paddingRight"),b(!0)),P(!0)}function P(p){var C=ee(a);(p||_.width!==C.width||_.height!==C.height)&&(re(m,"height",M()),u(c("marginRight"),Te(t.gap)),u("width",O()),u("height",k(),!0),_=C,i(kt),A!==(A=W())&&(fe(a,Fn,A),i(Jn,A)))}function b(p){var C=t.padding,T=c(p?"right":"left");return C&&Te(C[T]||(ze(C)?0:C))||"0px"}function M(){var p="";return f&&(p=S(),ke(p,"height or heightRatio is missing."),p="calc("+p+" - "+b(!1)+" - "+b(!0)+")"),p}function S(){return Te(t.height||ee(d).width*t.heightRatio)}function O(){return t.autoWidth?null:Te(t.fixedWidth)||(f?"":w())}function k(){return Te(t.fixedHeight)||(f?t.autoHeight?null:w():S())}function w(){var p=Te(t.gap);return"calc((100%"+(p&&" + "+p)+")/"+(t.perPage||1)+(p&&" - "+p)+")"}function L(){return ee(d)[c("width")]}function I(p,C){var T=E(p||0);return T?ee(T.slide)[c("width")]+(C?0:F()):0}function N(p,C){var T=E(p);if(T){var D=ee(T.slide)[c("right")],G=ee(d)[c("left")];return J(D-G)+(C?0:F())}return 0}function V(p){return N(e.length-1)-N(0)+I(0,p)}function F(){var p=E(0);return p&&parseFloat(re(p.slide,c("marginRight")))||0}function Y(p){return parseFloat(re(m,c("padding"+(p?"Right":"Left"))))||0}function W(){return e.is(nt)||V(!0)>L()}return{mount:h,resize:P,listSize:L,slideSize:I,sliderSize:V,totalSize:N,getPadding:Y,isOverflow:W}}var Nr=2;function Rr(e,n,t){var r=H(e),o=r.on,l=n.Elements,i=n.Slides,s=n.Direction.resolve,c=[],v;function a(){o(K,m),o([Q,Xe],E),(v=_())&&(u(v),n.Layout.resize(!0))}function m(){d(),a()}function d(){Ie(c),de(c),r.destroy()}function E(){var A=_();v!==A&&(v<A||!A)&&r.emit(K)}function u(A){var h=i.get().slice(),g=h.length;if(g){for(;h.length<A;)at(h,h);at(h.slice(-A),h.slice(0,A)).forEach(function(P,b){var M=b<A,S=f(P.slide,b);M?Mt(S,h[0].slide):Ze(l.list,S),at(c,S),i.register(S,b-A+(M?0:g),P.index)})}}function f(A,h){var g=A.cloneNode(!0);return oe(g,t.classes.clone),g.id=e.root.id+"-clone"+Ft(h+1),g}function _(){var A=t.clones;if(!e.is(xe))A=0;else if($e(A)){var h=t[s("fixedWidth")]&&n.Layout.slideSize(0),g=h&&Ye(ee(l.track)[s("width")]/h);A=g||t[s("autoWidth")]&&e.length||t.perPage*Nr}return A}return{mount:a,destroy:d}}function br(e,n,t){var r=H(e),o=r.on,l=r.emit,i=e.state.set,s=n.Layout,c=s.slideSize,v=s.getPadding,a=s.totalSize,m=s.listSize,d=s.sliderSize,E=n.Direction,u=E.resolve,f=E.orient,_=n.Elements,A=_.list,h=_.track,g;function P(){g=n.Transition,o([Re,kt,Q,K],b)}function b(){n.Controller.isBusy()||(n.Scroll.cancel(),S(e.index),n.Slides.update())}function M(T,D,G,$){T!==D&&p(T>G)&&(L(),O(w(V(),T>G),!0)),i(Me),l(Ae,D,G,T),g.start(D,function(){i(Pe),l(et,D,G,T),$&&$()})}function S(T){O(N(T,!0))}function O(T,D){if(!e.is(nt)){var G=D?T:k(T);re(A,"transform","translate"+u("X")+"("+G+"px)"),T!==G&&l(Nn)}}function k(T){if(e.is(xe)){var D=I(T),G=D>n.Controller.getEnd(),$=D<0;($||G)&&(T=w(T,G))}return T}function w(T,D){var G=T-W(D),$=d();return T-=f($*(Ye(J(G)/$)||1))*(D?1:-1),T}function L(){O(V(),!0),g.cancel()}function I(T){for(var D=n.Slides.get(),G=0,$=1/0,q=0;q<D.length;q++){var Ee=D[q].index,y=J(N(Ee,!0)-T);if(y<=$)$=y,G=Ee;else break}return G}function N(T,D){var G=f(a(T-1)-Y(T));return D?F(G):G}function V(){var T=u("left");return ee(A)[T]-ee(h)[T]+f(v(!1))}function F(T){return t.trimSpace&&e.is(pe)&&(T=be(T,0,f(d(!0)-m()))),T}function Y(T){var D=t.focus;return D==="center"?(m()-c(T,!0))/2:+D*c(T)||0}function W(T){return N(T?n.Controller.getEnd():0,!!t.trimSpace)}function p(T){var D=f(w(V(),T));return T?D>=0:D<=A[u("scrollWidth")]-ee(h)[u("width")]}function C(T,D){D=$e(D)?V():D;var G=T!==!0&&f(D)<f(W(!1)),$=T!==!1&&f(D)>f(W(!0));return G||$}return{mount:P,move:M,jump:S,translate:O,shift:w,cancel:L,toIndex:I,toPosition:N,getPosition:V,getLimit:W,exceededLimit:C,reposition:b}}function Or(e,n,t){var r=H(e),o=r.on,l=r.emit,i=n.Move,s=i.getPosition,c=i.getLimit,v=i.toPosition,a=n.Slides,m=a.isEnough,d=a.getLength,E=t.omitEnd,u=e.is(xe),f=e.is(pe),_=U(V,!1),A=U(V,!0),h=t.start||0,g,P=h,b,M,S;function O(){k(),o([Q,K,vt],k),o(kt,w)}function k(){b=d(!0),M=t.perMove,S=t.perPage,g=p();var y=be(h,0,E?g:b-1);y!==h&&(h=y,i.reposition())}function w(){g!==p()&&l(vt)}function L(y,z,Z){if(!Ee()){var X=N(y),j=W(X);j>-1&&(z||j!==h)&&(G(j),i.move(X,j,P,Z))}}function I(y,z,Z,X){n.Scroll.scroll(y,z,Z,function(){var j=W(i.toIndex(s()));G(E?me(j,g):j),X&&X()})}function N(y){var z=h;if(he(y)){var Z=y.match(/([+\-<>])(\d+)?/)||[],X=Z[1],j=Z[2];X==="+"||X==="-"?z=F(h+ +(""+X+(+j||1)),h):X===">"?z=j?C(+j):_(!0):X==="<"&&(z=A(!0))}else z=u?y:be(y,0,g);return z}function V(y,z){var Z=M||(q()?1:S),X=F(h+Z*(y?-1:1),h,!(M||q()));return X===-1&&f&&!hn(s(),c(!y),1)?y?0:g:z?X:W(X)}function F(y,z,Z){if(m()||q()){var X=Y(y);X!==y&&(z=y,y=X,Z=!1),y<0||y>g?!M&&(ot(0,y,z,!0)||ot(g,z,y,!0))?y=C(T(y)):u?y=Z?y<0?-(b%S||S):b:y:t.rewind?y=y<0?g:0:y=-1:Z&&y!==z&&(y=C(T(z)+(y<z?-1:1)))}else y=-1;return y}function Y(y){if(f&&t.trimSpace==="move"&&y!==h)for(var z=s();z===v(y,!0)&&ot(y,0,e.length-1,!t.rewind);)y<h?--y:++y;return y}function W(y){return u?(y+b)%b||0:y}function p(){for(var y=b-(q()||u&&M?1:S);E&&y-- >0;)if(v(b-1,!0)!==v(y,!0)){y++;break}return be(y,0,b-1)}function C(y){return be(q()?y:S*y,0,g)}function T(y){return q()?me(y,g):ft((y>=g?b-1:y)/S)}function D(y){var z=i.toIndex(y);return f?be(z,0,g):z}function G(y){y!==h&&(P=h,h=y)}function $(y){return y?P:h}function q(){return!$e(t.focus)||t.isNavigation}function Ee(){return e.state.is([Me,qe])&&!!t.waitForTransition}return{mount:O,go:L,scroll:I,getNext:_,getPrev:A,getAdjacent:V,getEnd:p,setIndex:G,getIndex:$,toIndex:C,toPage:T,toDest:D,hasFocus:q,isBusy:Ee}}var Dr="http://www.w3.org/2000/svg",Cr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",rt=40;function wr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.emit,s=t.classes,c=t.i18n,v=n.Elements,a=n.Controller,m=v.arrows,d=v.track,E=m,u=v.prev,f=v.next,_,A,h={};function g(){b(),o(Q,P)}function P(){M(),g()}function b(){var I=t.arrows;I&&!(u&&f)&&k(),u&&f&&(We(h,{prev:u,next:f}),He(E,I?"":"none"),oe(E,A=Wt+"--"+t.direction),I&&(S(),L(),x([u,f],tt,d.id),i(Qn,u,f)))}function M(){r.destroy(),ve(E,A),_?(Ie(m?[u,f]:E),u=f=null):ue([u,f],Bt)}function S(){o([Re,et,K,Ve,vt],L),l(f,"click",U(O,">")),l(u,"click",U(O,"<"))}function O(I){a.go(I,!0)}function k(){E=m||Ce("div",s.arrows),u=w(!0),f=w(!1),_=!0,Ze(E,[u,f]),!m&&Mt(E,d)}function w(I){var N='<button class="'+s.arrow+" "+(I?s.prev:s.next)+'" type="button"><svg xmlns="'+Dr+'" viewBox="0 0 '+rt+" "+rt+'" width="'+rt+'" height="'+rt+'" focusable="false"><path d="'+(t.arrowPath||Cr)+'" />';return En(N)}function L(){if(u&&f){var I=e.index,N=a.getPrev(),V=a.getNext(),F=N>-1&&I<N?c.last:c.prev,Y=V>-1&&I>V?c.first:c.next;u.disabled=N<0,f.disabled=V<0,x(u,te,F),x(f,te,Y),i(er,u,f,N,V)}}return{arrows:h,mount:g,destroy:M,update:L}}var Pr=xt+"-interval";function pr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.emit,s=dt(t.interval,e.go.bind(e,">"),S),c=s.isPaused,v=n.Elements,a=n.Elements,m=a.root,d=a.toggle,E=t.autoplay,u,f,_=E==="pause";function A(){E&&(h(),d&&x(d,tt,v.track.id),_||g(),M())}function h(){t.pauseOnHover&&l(m,"mouseenter mouseleave",function(k){u=k.type==="mouseenter",b()}),t.pauseOnFocus&&l(m,"focusin focusout",function(k){f=k.type==="focusin",b()}),d&&l(d,"click",function(){_?g():P(!0)}),o([Ae,Gt,K],s.rewind),o(Ae,O)}function g(){c()&&n.Slides.isEnough()&&(s.start(!t.resetProgress),f=u=_=!1,M(),i(Sn))}function P(k){k===void 0&&(k=!0),_=!!k,M(),c()||(s.pause(),i(Tn))}function b(){_||(u||f?P(!1):g())}function M(){d&&(fe(d,Ne,!_),x(d,te,t.i18n[_?"play":"pause"]))}function S(k){var w=v.bar;w&&re(w,"width",k*100+"%"),i(rr,k)}function O(k){var w=n.Slides.getAt(k);s.set(w&&+ie(w.slide,Pr)||t.interval)}return{mount:A,destroy:s.cancel,play:g,pause:P,isPaused:c}}function Mr(e,n,t){var r=H(e),o=r.on;function l(){t.cover&&(o(Ln,U(s,!0)),o([Re,Q,K],U(i,!0)))}function i(c){n.Slides.forEach(function(v){var a=Je(v.container||v.slide,"img");a&&a.src&&s(c,a,v)})}function s(c,v,a){a.style("background",c?'center/cover no-repeat url("'+v.src+'")':"",!0),He(v,c?"none":"")}return{mount:l,destroy:U(i,!1)}}var Vr=10,xr=600,Fr=.6,kr=1.5,Gr=800;function zr(e,n,t){var r=H(e),o=r.on,l=r.emit,i=e.state.set,s=n.Move,c=s.getPosition,v=s.getLimit,a=s.exceededLimit,m=s.translate,d=e.is(pe),E,u,f=1;function _(){o(Ae,P),o([Q,K],b)}function A(S,O,k,w,L){var I=c();if(P(),k&&(!d||!a())){var N=n.Layout.sliderSize(),V=bt(S)*N*ft(J(S)/N)||0;S=s.toPosition(n.Controller.toDest(S%N))+V}var F=hn(I,S,1);f=1,O=F?0:O||ct(J(S-I)/kr,Gr),u=w,E=dt(O,h,U(g,I,S,L),1),i(qe),l(Gt),E.start()}function h(){i(Pe),u&&u(),l(Ve)}function g(S,O,k,w){var L=c(),I=S+(O-S)*M(w),N=(I-L)*f;m(L+N),d&&!k&&a()&&(f*=Fr,J(N)<Vr&&A(v(a(!0)),xr,!1,u,!0))}function P(){E&&E.cancel()}function b(){E&&!E.isPaused()&&(P(),h())}function M(S){var O=t.easingFunc;return O?O(S):1-Math.pow(1-S,4)}return{mount:_,destroy:P,scroll:A,cancel:b}}var Oe={passive:!1,capture:!0};function Ur(e,n,t){var r=H(e),o=r.on,l=r.emit,i=r.bind,s=r.unbind,c=e.state,v=n.Move,a=n.Scroll,m=n.Controller,d=n.Elements.track,E=n.Media.reduce,u=n.Direction,f=u.resolve,_=u.orient,A=v.getPosition,h=v.exceededLimit,g,P,b,M,S,O=!1,k,w,L;function I(){i(d,Lt,Nt,Oe),i(d,It,Nt,Oe),i(d,kn,V,Oe),i(d,"click",W,{capture:!0}),i(d,"dragstart",ce),o([Re,Q],N)}function N(){var R=t.drag;Xt(!R),M=R==="free"}function V(R){if(k=!1,!w){var B=j(R);X(R.target)&&(B||!R.button)&&(m.isBusy()?ce(R,!0):(L=B?d:window,S=c.is([Me,qe]),b=null,i(L,Lt,F,Oe),i(L,It,Y,Oe),v.cancel(),a.cancel(),p(R)))}}function F(R){if(c.is(it)||(c.set(it),l($n)),R.cancelable)if(S){v.translate(g+Z(q(R)));var B=Ee(R)>un,Se=O!==(O=h());(B||Se)&&p(R),k=!0,l(jn),ce(R)}else D(R)&&(S=T(R),ce(R))}function Y(R){c.is(it)&&(c.set(Pe),l(Zn)),S&&(C(R),ce(R)),s(L,Lt,F),s(L,It,Y),S=!1}function W(R){!w&&k&&ce(R,!0)}function p(R){b=P,P=R,g=A()}function C(R){var B=G(R),Se=$(B),Fe=t.rewind&&t.rewindByDrag;E(!1),M?m.scroll(Se,0,t.snap):e.is(nt)?m.go(_(bt(B))<0?Fe?"<":"-":Fe?">":"+"):e.is(pe)&&O&&Fe?m.go(h(!0)?">":"<"):m.go(m.toDest(Se),!0),E(!0)}function T(R){var B=t.dragMinThreshold,Se=ze(B),Fe=Se&&B.mouse||0,zn=(Se?B.touch:+B)||10;return J(q(R))>(j(R)?zn:Fe)}function D(R){return J(q(R))>J(q(R,!0))}function G(R){if(e.is(xe)||!O){var B=Ee(R);if(B&&B<un)return q(R)/B}return 0}function $(R){return A()+bt(R)*me(J(R)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function q(R,B){return z(R,B)-z(y(R),B)}function Ee(R){return Rt(R)-Rt(y(R))}function y(R){return P===R&&b||P}function z(R,B){return(j(R)?R.changedTouches[0]:R)["page"+f(B?"Y":"X")]}function Z(R){return R/(O&&e.is(pe)?yr:1)}function X(R){var B=t.noDrag;return!Ue(R,"."+pn+", ."+_t)&&(!B||!Ue(R,B))}function j(R){return typeof TouchEvent<"u"&&R instanceof TouchEvent}function Gn(){return S}function Xt(R){w=R}return{mount:I,disable:Xt,isDragging:Gn}}var Br={Spacebar:" ",Right:ht,Left:gt,Up:Rn,Down:bn};function Ht(e){return e=he(e)?e:e.key,Br[e]||e}var sn="keydown";function Wr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.unbind,s=e.root,c=n.Direction.resolve,v,a;function m(){d(),o(Q,E),o(Q,d),o(Ae,f)}function d(){var A=t.keyboard;A&&(v=A==="global"?window:s,l(v,sn,_))}function E(){i(v,sn)}function u(A){a=A}function f(){var A=a;a=!0,cn(function(){a=A})}function _(A){if(!a){var h=Ht(A);h===c(gt)?e.go("<"):h===c(ht)&&e.go(">")}}return{mount:m,destroy:E,disable:u}}var Ge=xt+"-lazy",ut=Ge+"-srcset",Hr="["+Ge+"], ["+ut+"]";function Yr(e,n,t){var r=H(e),o=r.on,l=r.off,i=r.bind,s=r.emit,c=t.lazyLoad==="sequential",v=[et,Ve],a=[];function m(){t.lazyLoad&&(d(),o(K,d))}function d(){de(a),E(),c?A():(l(v),o(v,u),u())}function E(){n.Slides.forEach(function(h){Vt(h.slide,Hr).forEach(function(g){var P=ie(g,Ge),b=ie(g,ut);if(P!==g.src||b!==g.srcset){var M=t.classes.spinner,S=g.parentElement,O=Je(S,"."+M)||Ce("span",M,S);a.push([g,h,O]),g.src||He(g,"none")}})})}function u(){a=a.filter(function(h){var g=t.perPage*((t.preloadPages||1)+1)-1;return h[1].isWithin(e.index,g)?f(h):!0}),a.length||l(v)}function f(h){var g=h[0];oe(h[1].slide,Ct),i(g,"load error",U(_,h)),x(g,"src",ie(g,Ge)),x(g,"srcset",ie(g,ut)),ue(g,Ge),ue(g,ut)}function _(h,g){var P=h[0],b=h[1];ve(b.slide,Ct),g.type!=="error"&&(Ie(h[2]),He(P,""),s(Ln,P,b),s(Xe)),c&&A()}function A(){a.length&&f(a.shift())}return{mount:m,destroy:U(de,a),check:u}}function Xr(e,n,t){var r=H(e),o=r.on,l=r.emit,i=r.bind,s=n.Slides,c=n.Elements,v=n.Controller,a=v.hasFocus,m=v.getIndex,d=v.go,E=n.Direction.resolve,u=c.pagination,f=[],_,A;function h(){g(),o([Q,K,vt],h);var w=t.pagination;u&&He(u,w?"":"none"),w&&(o([Ae,Gt,Ve],k),P(),k(),l(tr,{list:_,items:f},O(e.index)))}function g(){_&&(Ie(u?_e(_.children):_),ve(_,A),de(f),_=null),r.destroy()}function P(){var w=e.length,L=t.classes,I=t.i18n,N=t.perPage,V=a()?v.getEnd()+1:Ye(w/N);_=u||Ce("ul",L.pagination,c.track.parentElement),oe(_,A=yt+"--"+S()),x(_,le,"tablist"),x(_,te,I.select),x(_,Ut,S()===mt?"vertical":"");for(var F=0;F<V;F++){var Y=Ce("li",null,_),W=Ce("button",{class:L.page,type:"button"},Y),p=s.getIn(F).map(function(T){return T.slide.id}),C=!a()&&N>1?I.pageX:I.slideX;i(W,"click",U(b,F)),t.paginationKeyboard&&i(W,"keydown",U(M,F)),x(Y,le,"presentation"),x(W,le,"tab"),x(W,tt,p.join(" ")),x(W,te,Ot(C,F+1)),x(W,we,-1),f.push({li:Y,button:W,page:F})}}function b(w){d(">"+w,!0)}function M(w,L){var I=f.length,N=Ht(L),V=S(),F=-1;N===E(ht,!1,V)?F=++w%I:N===E(gt,!1,V)?F=(--w+I)%I:N==="Home"?F=0:N==="End"&&(F=I-1);var Y=f[F];Y&&(dn(Y.button),d(">"+F),ce(L,!0))}function S(){return t.paginationDirection||t.direction}function O(w){return f[v.toPage(w)]}function k(){var w=O(m(!0)),L=O(m());if(w){var I=w.button;ve(I,Ne),ue(I,tn),x(I,we,-1)}if(L){var N=L.button;oe(N,Ne),x(N,tn,!0),x(N,we,"")}l(nr,{list:_,items:f},w,L)}return{items:f,mount:h,destroy:g,getAt:O,update:k}}var Kr=[" ","Enter"];function qr(e,n,t){var r=t.isNavigation,o=t.slideFocus,l=[];function i(){e.splides.forEach(function(u){u.isParent||(v(e,u.splide),v(u.splide,e))}),r&&a()}function s(){l.forEach(function(u){u.destroy()}),de(l)}function c(){s(),i()}function v(u,f){var _=H(u);_.on(Ae,function(A,h,g){f.go(f.is(xe)?g:A)}),l.push(_)}function a(){var u=H(e),f=u.on;f(An,d),f(In,E),f([Re,Q],m),l.push(u),u.emit(yn,e.splides)}function m(){x(n.Elements.list,Ut,t.direction===mt?"vertical":"")}function d(u){e.go(u.index)}function E(u,f){pt(Kr,Ht(f))&&(d(u),ce(f))}return{setup:U(n.Media.set,{slideFocus:$e(o)?r:o},!0),mount:i,destroy:s,remount:c}}function $r(e,n,t){var r=H(e),o=r.bind,l=0;function i(){t.wheel&&o(n.Elements.track,"wheel",s,Oe)}function s(v){if(v.cancelable){var a=v.deltaY,m=a<0,d=Rt(v),E=t.wheelMinThreshold||0,u=t.wheelSleep||0;J(a)>E&&d-l>u&&(e.go(m?"<":">"),l=d),c(m)&&ce(v)}}function c(v){return!t.releaseWheel||e.state.is(Me)||n.Controller.getAdjacent(v)!==-1}return{mount:i}}var jr=90;function Zr(e,n,t){var r=H(e),o=r.on,l=n.Elements.track,i=t.live&&!t.isNavigation,s=Ce("span",gr),c=dt(jr,U(a,!1));function v(){i&&(d(!n.Autoplay.isPaused()),x(l,an,!0),s.textContent="…",o(Sn,U(d,!0)),o(Tn,U(d,!1)),o([et,Ve],U(a,!0)))}function a(E){x(l,rn,E),E?(Ze(l,s),c.start()):(Ie(s),c.cancel())}function m(){ue(l,[nn,an,rn]),Ie(s)}function d(E){i&&x(l,nn,E?"off":"polite")}return{mount:v,disable:d,destroy:m}}var Jr=Object.freeze({__proto__:null,Media:or,Direction:ur,Elements:Sr,Slides:Lr,Layout:Ir,Clones:Rr,Move:br,Controller:Or,Arrows:wr,Autoplay:pr,Cover:Mr,Scroll:zr,Drag:Ur,Keyboard:Wr,LazyLoad:Yr,Pagination:Xr,Sync:qr,Wheel:$r,Live:Zr}),Qr={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ei={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ar,i18n:Qr,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ti(e,n,t){var r=n.Slides;function o(){H(e).on([Re,K],l)}function l(){r.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function i(s,c){r.style("transition","opacity "+t.speed+"ms "+t.easing),cn(c)}return{mount:o,start:i,cancel:Nt}}function ni(e,n,t){var r=n.Move,o=n.Controller,l=n.Scroll,i=n.Elements.list,s=U(re,i,"transition"),c;function v(){H(e).bind(i,"transitionend",function(E){E.target===i&&c&&(m(),c())})}function a(E,u){var f=r.toPosition(E,!0),_=r.getPosition(),A=d(E);J(f-_)>=1&&A>=1?t.useScroll?l.scroll(f,A,!1,u):(s("transform "+A+"ms "+t.easing),r.translate(f,!0),c=u):(r.jump(E),u())}function m(){s(""),l.cancel()}function d(E){var u=t.rewindSpeed;if(e.is(pe)&&u){var f=o.getIndex(!0),_=o.getEnd();if(f===0&&E>=_||f>=_&&E===0)return u}return t.speed}return{mount:v,start:a,cancel:m}}var ri=function(){function e(t,r){this.event=H(),this.Components={},this.state=ir(De),this.splides=[],this._o={},this._E={};var o=he(t)?gn(document,t):t;ke(o,o+" is invalid."),this.root=o,r=ge({label:ie(o,te)||"",labelledby:ie(o,zt)||""},ei,e.defaults,r||{});try{ge(r,JSON.parse(ie(o,xt)))}catch{ke(!1,"Invalid JSON")}this._o=Object.create(ge({},r))}var n=e.prototype;return n.mount=function(r,o){var l=this,i=this.state,s=this.Components;ke(i.is([De,st]),"Already mounted!"),i.set(De),this._C=s,this._T=o||this._T||(this.is(nt)?ti:ni),this._E=r||this._E;var c=We({},Jr,this._E,{Transition:this._T});return Le(c,function(v,a){var m=v(l,s,l._o);s[a]=m,m.setup&&m.setup()}),Le(s,function(v){v.mount&&v.mount()}),this.emit(Re),oe(this.root,hr),i.set(Pe),this.emit(Qt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Pe)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,o){return this.event.on(r,o),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var o;return(o=this.event).emit.apply(o,[r].concat(_e(arguments,1))),this},n.add=function(r,o){return this._C.Slides.add(r,o),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(K),this},n.destroy=function(r){r===void 0&&(r=!0);var o=this.event,l=this.state;return l.is(De)?H(this).on(Qt,this.destroy.bind(this,r)):(Le(this._C,function(i){i.destroy&&i.destroy(r)},!0),o.emit(_n),o.destroy(),r&&de(this.splides),l.set(st)),this},Un(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Yt=ri;Yt.defaults={};Yt.STATES=Wn;document.addEventListener("DOMContentLoaded",function(){const e=new Yt("#image-carousel",{arrows:!1,type:"loop"}).mount(),n=document.querySelector("#btnPrev");document.querySelector("#btnNext").addEventListener("click",r=>{e.go("+1")}),n.addEventListener("click",r=>{e.go("-1")})});
