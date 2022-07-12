import{_ as ha,r as hi,C as ca,L as la,f as he,S as da,h as fa,F as ga,g as ce,j as ma,a as pa,b as ya,s as va,o as wa,t as Ea,c as Ta}from"./index.esm2017-da53403b.js";var Ia=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,fs=fs||{},T=Ia||self;function He(){}function Gn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ie(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Sa(e){return Object.prototype.hasOwnProperty.call(e,Mn)&&e[Mn]||(e[Mn]=++Ca)}var Mn="closure_uid_"+(1e9*Math.random()>>>0),Ca=0;function Aa(e,t,n){return e.call.apply(e.bind,arguments)}function Da(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function q(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q=Aa:q=Da,q.apply(null,arguments)}function Fe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function vt(){this.s=this.s,this.o=this.o}var ka=0;vt.prototype.s=!1;vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ka!=0)&&Sa(this)};vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const er=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},nr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Na(e){t:{var t=wu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function ci(e){return Array.prototype.concat.apply([],arguments)}function gs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Xe(e){return/^[\s\xa0]*$/.test(e)}var li=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function On(e,t){return e<t?-1:e>t?1:0}var Y;t:{var di=T.navigator;if(di){var fi=di.userAgent;if(fi){Y=fi;break t}}Y=""}function ms(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function sr(e){const t={};for(const n in e)t[n]=e[n];return t}var gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ir(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<gi.length;r++)n=gi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ps(e){return ps[" "](e),e}ps[" "]=He;function ba(e){var t=xa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ra=W(Y,"Opera"),Ft=W(Y,"Trident")||W(Y,"MSIE"),rr=W(Y,"Edge"),zn=rr||Ft,or=W(Y,"Gecko")&&!(W(Y.toLowerCase(),"webkit")&&!W(Y,"Edge"))&&!(W(Y,"Trident")||W(Y,"MSIE"))&&!W(Y,"Edge"),_a=W(Y.toLowerCase(),"webkit")&&!W(Y,"Edge");function ar(){var e=T.document;return e?e.documentMode:void 0}var We;t:{var Vn="",Fn=function(){var e=Y;if(or)return/rv:([^\);]+)(\)|;)/.exec(e);if(rr)return/Edge\/([\d\.]+)/.exec(e);if(Ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_a)return/WebKit\/(\S+)/.exec(e);if(Ra)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fn&&(Vn=Fn?Fn[1]:""),Ft){var Pn=ar();if(Pn!=null&&Pn>parseFloat(Vn)){We=String(Pn);break t}}We=Vn}var xa={};function La(){return ba(function(){let e=0;const t=li(String(We)).split("."),n=li("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=On(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||On(i[2].length==0,r[2].length==0)||On(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Qn;if(T.document&&Ft){var mi=ar();Qn=mi||parseInt(We,10)||void 0}else Qn=void 0;var Ma=Qn,Oa=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",He,t),T.removeEventListener("test",He,t)}catch{}return e}();function H(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};function le(e,t){if(H.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(or){t:{try{ps(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Va[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.Z.h.call(this)}}z(le,H);var Va={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),Fa=0;function Pa(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Fa,this.ca=this.fa=!1}function ln(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function dn(e){this.src=e,this.g={},this.h=0}dn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Xn(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Pa(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Hn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=er(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ln(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var ys="closure_lm_"+(1e6*Math.random()|0),Un={};function ur(e,t,n,s,i){if(s&&s.once)return cr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ur(e,t[r],n,s,i);return null}return n=Es(n),e&&e[Se]?e.N(t,n,Ie(s)?!!s.capture:!!s,i):hr(e,t,n,!1,s,i)}function hr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ie(i)?!!i.capture:!!i,a=ws(e);if(a||(e[ys]=a=new dn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ua(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Oa||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(dr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ua(){function e(n){return t.call(e.src,e.listener,n)}var t=Ba;return e}function cr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)cr(e,t[r],n,s,i);return null}return n=Es(n),e&&e[Se]?e.O(t,n,Ie(s)?!!s.capture:!!s,i):hr(e,t,n,!0,s,i)}function lr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)lr(e,t[r],n,s,i);else s=Ie(s)?!!s.capture:!!s,n=Es(n),e&&e[Se]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Xn(r,n,s,i),-1<n&&(ln(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ws(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xn(t,n,s,i)),(n=-1<e?t[e]:null)&&vs(n))}function vs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Se])Hn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(dr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ws(t))?(Hn(n,e),n.h==0&&(n.src=null,t[ys]=null)):ln(e)}}}function dr(e){return e in Un?Un[e]:Un[e]="on"+e}function Ba(e,t){if(e.ca)e=!0;else{t=new le(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&vs(e),e=n.call(s,t)}return e}function ws(e){return e=e[ys],e instanceof dn?e:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Es(e){return typeof e=="function"?e:(e[Bn]||(e[Bn]=function(t){return e.handleEvent(t)}),e[Bn])}function B(){vt.call(this),this.i=new dn(this),this.P=this,this.I=null}z(B,vt);B.prototype[Se]=!0;B.prototype.removeEventListener=function(e,t,n,s){lr(this,e,t,n,s)};function K(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new H(t,e);else if(t instanceof H)t.target=t.target||e;else{var i=t;t=new H(s,e),ir(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Pe(o,s,!0,t)&&i}if(o=t.g=e,i=Pe(o,s,!0,t)&&i,i=Pe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Pe(o,s,!1,t)&&i}B.prototype.M=function(){if(B.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ln(n[s]);delete e.g[t],e.h--}}this.I=null};B.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};B.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Pe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Hn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ts=T.JSON.stringify;function $a(){var e=gr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ja{constructor(){this.h=this.g=null}add(t,n){const s=fr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new qa,e=>e.reset());class qa{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ka(e){T.setTimeout(()=>{throw e},0)}function Is(e,t){Wn||Ga(),Yn||(Wn(),Yn=!0),gr.add(e,t)}var Wn;function Ga(){var e=T.Promise.resolve(void 0);Wn=function(){e.then(za)}}var Yn=!1,gr=new ja;function za(){for(var e;e=$a();){try{e.h.call(e.g)}catch(n){Ka(n)}var t=fr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yn=!1}function fn(e,t){B.call(this),this.h=e||1,this.g=t||T,this.j=q(this.kb,this),this.l=Date.now()}z(fn,B);m=fn.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),K(this,"tick"),this.da&&(Ss(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ss(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}m.M=function(){fn.Z.M.call(this),Ss(this),delete this.g};function Cs(e,t,n){if(typeof e=="function")n&&(e=q(e,n));else if(e&&typeof e.handleEvent=="function")e=q(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function mr(e){e.g=Cs(()=>{e.g=null,e.i&&(e.i=!1,mr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Qa extends vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:mr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function de(e){vt.call(this),this.h=e,this.g={}}z(de,vt);var pi=[];function pr(e,t,n,s){Array.isArray(n)||(n&&(pi[0]=n.toString()),n=pi);for(var i=0;i<n.length;i++){var r=ur(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function yr(e){ms(e.g,function(t,n){this.g.hasOwnProperty(n)&&vs(t)},e),e.g={}}de.prototype.M=function(){de.Z.M.call(this),yr(this)};de.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gn(){this.g=!0}gn.prototype.Aa=function(){this.g=!1};function Ha(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Xa(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Lt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ya(e,n)+(s?" "+s:"")})}function Wa(e,t){e.info(function(){return"TIMEOUT: "+t})}gn.prototype.info=function(){};function Ya(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ts(n)}catch{return t}}var bt={},yi=null;function mn(){return yi=yi||new B}bt.Ma="serverreachability";function vr(e){H.call(this,bt.Ma,e)}z(vr,H);function fe(e){const t=mn();K(t,new vr(t))}bt.STAT_EVENT="statevent";function wr(e,t){H.call(this,bt.STAT_EVENT,e),this.stat=t}z(wr,H);function J(e){const t=mn();K(t,new wr(t,e))}bt.Na="timingevent";function Er(e,t){H.call(this,bt.Na,e),this.size=t}z(Er,H);function Ce(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var pn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Tr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function As(){}As.prototype.h=null;function vi(e){return e.h||(e.h=e.i())}function Ir(){}var Ae={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ds(){H.call(this,"d")}z(Ds,H);function ks(){H.call(this,"c")}z(ks,H);var Jn;function yn(){}z(yn,As);yn.prototype.g=function(){return new XMLHttpRequest};yn.prototype.i=function(){return{}};Jn=new yn;function De(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new de(this),this.P=Ja,e=zn?125:void 0,this.W=new fn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Sr}function Sr(){this.i=null,this.g="",this.h=!1}var Ja=45e3,Zn={},Ye={};m=De.prototype;m.setTimeout=function(e){this.P=e};function ts(e,t,n){e.K=1,e.v=wn(ct(t)),e.s=n,e.U=!0,Cr(e,null)}function Cr(e,t){e.F=Date.now(),ke(e),e.A=ct(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),_r(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Sr,e.g=Yr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qa(q(e.Ia,e,e.g),e.O)),pr(e.V,e.g,"readystatechange",e.gb),t=e.H?sr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),fe(),Ha(e.j,e.u,e.A,e.m,e.X,e.s)}m.gb=function(e){e=e.target;const t=this.L;t&&at(e)==3?t.l():this.Ia(e)};m.Ia=function(e){try{if(e==this.g)t:{const c=at(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||zn||this.g&&(this.h.h||this.g.ga()||Ii(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?fe(3):fe(2)),vn(this);var n=this.g.ba();this.N=n;e:if(Ar(this)){var s=Ii(this.g);e="";var i=s.length,r=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),se(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Xa(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var h=a;break e}}h=null}if(n=h)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,es(this,n);else{this.i=!1,this.o=3,J(12),Et(this),se(this);break t}}this.U?(Dr(this,c,o),zn&&this.i&&c==3&&(pr(this.V,this.W,"tick",this.fb),this.W.start())):(Lt(this.j,this.m,o,null),es(this,o)),c==4&&Et(this),this.i&&!this.I&&(c==4?Qr(this.l,this):(this.i=!1,ke(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,J(12)):(this.o=0,J(13)),Et(this),se(this)}}}catch{}finally{}};function Ar(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Dr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Za(e,n),i==Ye){t==4&&(e.o=4,J(14),s=!1),Lt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Zn){e.o=4,J(15),Lt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Lt(e.j,e.m,i,null),es(e,i);Ar(e)&&i!=Ye&&i!=Zn&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,J(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vs(t),t.L=!0,J(11))):(Lt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),se(e))}m.fb=function(){if(this.g){var e=at(this.g),t=this.g.ga();this.C<t.length&&(vn(this),Dr(this,e,t),this.i&&e!=4&&ke(this))}};function Za(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ye:(n=Number(t.substring(n,s)),isNaN(n)?Zn:(s+=1,s+n>t.length?Ye:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Et(this)};function ke(e){e.Y=Date.now()+e.P,kr(e,e.P)}function kr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ce(q(e.eb,e),t)}function vn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Wa(this.j,this.A),this.K!=2&&(fe(),J(17)),Et(this),this.o=2,se(this)):kr(this,this.Y-e)};function se(e){e.l.G==0||e.I||Qr(e.l,e)}function Et(e){vn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ss(e.W),yr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function es(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ns(n.i,e))){if(n.I=e.N,!e.J&&ns(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)en(n),In(n);else break t;Os(n),J(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ce(q(n.ab,n),6e3));if(1>=Mr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Tt(n,11)}else if((e.J||n.g==e)&&en(n),!Xe(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=s.i;!r.g&&(W(E,"spdy")||W(E,"quic")||W(E,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Rs(r,r.h),r.h=null))}if(s.D){const N=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,_(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Wr(s,s.H?s.la:null,s.W),o.J){Or(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(vn(a),ke(a)),s.g=o}else Gr(s);0<n.l.length&&Sn(n)}else h[0]!="stop"&&h[0]!="close"||Tt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Tt(n,7):Ms(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}fe(4)}catch{}}function tu(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Gn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ns(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Gn(e)||typeof e=="string")nr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Gn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=tu(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Gt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Gt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}m=Gt.prototype;m.R=function(){bs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};m.T=function(){return bs(this),this.g.concat()};function bs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ct(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Ct(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}m.get=function(e,t){return Ct(this.h,e)?this.h[e]:t};m.set=function(e,t){Ct(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};m.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Ct(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Nr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function eu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function At(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof At){this.g=t!==void 0?t:e.g,Je(this,e.j),this.s=e.s,Ze(this,e.i),tn(this,e.m),this.l=e.l,t=e.h;var n=new ge;n.i=t.i,t.g&&(n.g=new Gt(t.g),n.h=t.h),wi(this,n),this.o=e.o}else e&&(n=String(e).match(Nr))?(this.g=!!t,Je(this,n[1]||"",!0),this.s=ie(n[2]||""),Ze(this,n[3]||"",!0),tn(this,n[4]),this.l=ie(n[5]||"",!0),wi(this,n[6]||"",!0),this.o=ie(n[7]||"")):(this.g=!!t,this.h=new ge(null,this.g))}At.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ee(t,Ei,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ee(t,Ei,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ee(n,n.charAt(0)=="/"?ou:ru,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ee(n,uu)),e.join("")};function ct(e){return new At(e)}function Je(e,t,n){e.j=n?ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ze(e,t,n){e.i=n?ie(t,!0):t}function tn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wi(e,t,n){t instanceof ge?(e.h=t,hu(e.h,e.g)):(n||(t=ee(t,au)),e.h=new ge(t,e.g))}function _(e,t,n){e.h.set(t,n)}function wn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nu(e){return e instanceof At?ct(e):new At(e,void 0)}function su(e,t,n,s){var i=new At(null,void 0);return e&&Je(i,e),t&&Ze(i,t),n&&tn(i,n),s&&(i.l=s),i}function ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ee(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,iu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function iu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ei=/[#\/\?@]/g,ru=/[#\?:]/g,ou=/[#\?]/g,au=/[#\?@]/g,uu=/#/g;function ge(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Gt,e.h=0,e.i&&eu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ge.prototype;m.add=function(e,t){wt(this),this.i=null,e=zt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function br(e,t){wt(e),t=zt(e,t),Ct(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ct(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&bs(e)))}function Rr(e,t){return wt(e),t=zt(e,t),Ct(e.g.h,t)}m.forEach=function(e,t){wt(this),this.g.forEach(function(n,s){nr(n,function(i){e.call(t,i,s,this)},this)},this)};m.T=function(){wt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};m.R=function(e){wt(this);var t=[];if(typeof e=="string")Rr(this,e)&&(t=ci(t,this.g.get(zt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ci(t,e[n])}return t};m.set=function(e,t){return wt(this),this.i=null,e=zt(this,e),Rr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function _r(e,t,n){br(e,t),0<n.length&&(e.i=null,e.g.set(zt(e,t),gs(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hu(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(br(this,s),_r(this,i,n))},e)),e.j=t}var cu=class{constructor(e,t){this.h=e,this.g=t}};function xr(e){this.l=e||lu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lu=10;function Lr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Mr(e){return e.h?1:e.g?e.g.size:0}function ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Rs(e,t){e.g?e.g.add(t):e.h=t}function Or(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xr.prototype.cancel=function(){if(this.i=Vr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Vr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return gs(e.i)}function _s(){}_s.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};_s.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function du(){this.g=new _s}function fu(e,t,n){const s=n||"";try{Ns(e,function(i,r){let o=i;Ie(i)&&(o=Ts(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function gu(e,t){const n=new gn;if(T.Image){const s=new Image;s.onload=Fe(Ue,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Fe(Ue,n,s,"TestLoadImage: error",!1,t),s.onabort=Fe(Ue,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Fe(Ue,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ue(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ne(e){this.l=e.$b||null,this.j=e.ib||!1}z(Ne,As);Ne.prototype.g=function(){return new En(this.l,this.j)};Ne.prototype.i=function(e){return function(){return e}}({});function En(e,t){B.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(En,B);var xs=0;m=En.prototype;m.open=function(e,t){if(this.readyState!=xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,me(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,be(this)),this.readyState=xs};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,me(this)),this.g&&(this.readyState=3,me(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Fr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?be(this):me(this),this.readyState==3&&Fr(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,be(this))};m.Ta=function(e){this.g&&(this.response=e,be(this))};m.ha=function(){this.g&&be(this)};function be(e){e.readyState=4,e.l=null,e.j=null,e.A=null,me(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function me(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mu=T.JSON.parse;function O(e){B.call(this),this.headers=new Gt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pr,this.K=this.L=!1}z(O,B);var Pr="",pu=/^https?$/i,yu=["POST","PUT"];m=O.prototype;m.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jn.g(),this.C=this.u?vi(this.u):vi(Jn),this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ti(this,r);return}e=n||"";const i=new Gt(this.headers);s&&Ns(s,function(r,o){i.set(o,r)}),s=Na(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=er(yu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$r(this),0<this.B&&((this.K=vu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=Cs(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ti(this,r)}};function vu(e){return Ft&&La()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function wu(e){return e.toLowerCase()=="content-type"}m.pa=function(){typeof fs!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Ti(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ur(e),Tn(e)}function Ur(e){e.D||(e.D=!0,K(e,"complete"),K(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Tn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),O.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Br(this):this.cb())};m.cb=function(){Br(this)};function Br(e){if(e.h&&typeof fs!="undefined"&&(!e.C[1]||at(e)!=4||e.ba()!=2)){if(e.v&&at(e)==4)Cs(e.Fa,0,e);else if(K(e,"readystatechange"),at(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Nr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!pu.test(i?i.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var o=2<at(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Ur(e)}}finally{Tn(e)}}}}function Tn(e,t){if(e.g){$r(e);const n=e.g,s=e.C[0]?He:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function $r(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function at(e){return e.g?e.g.readyState:0}m.ba=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mu(t)}};function Ii(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Pr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Eu(e){let t="";return ms(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ls(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Eu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jr(e){this.za=0,this.l=[],this.h=new gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=te("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=te("baseRetryDelayMs",5e3,e),this.$a=te("retryDelaySeedMs",1e4,e),this.Ya=te("forwardChannelMaxRetries",2,e),this.ra=te("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new xr(e&&e.concurrentRequestLimit),this.Ca=new du,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}m=jr.prototype;m.ma=8;m.G=1;function Ms(e){if(qr(e),e.G==3){var t=e.V++,n=ct(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Re(e,n),t=new De(e,e.h,t,void 0),t.K=2,t.v=wn(ct(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Yr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ke(t)}Xr(e)}m.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function In(e){e.g&&(Vs(e),e.g.cancel(),e.g=null)}function qr(e){In(e),e.u&&(T.clearTimeout(e.u),e.u=null),en(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function $n(e,t){e.l.push(new cu(e.Za++,t)),e.G==3&&Sn(e)}function Sn(e){Lr(e.i)||e.m||(e.m=!0,Is(e.Ha,e),e.C=0)}function Tu(e,t){return Mr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Ce(q(e.Ha,e,t),Hr(e,e.C)),e.C++,!0)}m.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new De(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=sr(r),ir(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Kr(this,i,t),n=ct(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Re(this,n),this.o&&r&&Ls(n,this.o,r),Rs(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),i.$=!0,ts(i,n,null)):ts(i,n,t),this.G=2}}else this.G==3&&(e?Si(this,e):this.l.length==0||Lr(this.i)||Si(this))};function Si(e,t){var n;t?n=t.m:n=e.V++;const s=ct(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),Re(e,s),e.o&&e.s&&Ls(s,e.o,e.s),n=new De(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Kr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Rs(e.i,n),ts(n,s,t)}function Re(e,t){e.j&&Ns({},function(n,s){_(t,s,n)})}function Kr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?q(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{fu(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Gr(e){e.g||e.u||(e.Y=1,Is(e.Ga,e),e.A=0)}function Os(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Ce(q(e.Ga,e),Hr(e,e.A)),e.A++,!0)}m.Ga=function(){if(this.u=null,zr(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ce(q(this.bb,this),e)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,J(10),In(this),zr(this))};function Vs(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function zr(e){e.g=new De(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ct(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),Re(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&Ls(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=wn(ct(t)),n.s=null,n.U=!0,Cr(n,e)}m.ab=function(){this.v!=null&&(this.v=null,In(this),Os(this),J(19))};function en(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Qr(e,t){var n=null;if(e.g==t){en(e),Vs(e),e.g=null;var s=2}else if(ns(e.i,t))n=t.D,Or(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=mn(),K(s,new Er(s,n)),Sn(e)}else Gr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Tu(e,t)||s==2&&Os(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Tt(e,5);break;case 4:Tt(e,10);break;case 3:Tt(e,6);break;default:Tt(e,2)}}}function Hr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Tt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=q(e.jb,e);n||(n=new At("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Je(n,"https"),wn(n)),gu(n.toString(),s)}else J(2);e.G=0,e.j&&e.j.va(t),Xr(e),qr(e)}m.jb=function(e){e?(this.h.info("Successfully pinged google.com"),J(2)):(this.h.info("Failed to ping google.com"),J(1))};function Xr(e){e.G=0,e.I=-1,e.j&&((Vr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,gs(e.l),e.l.length=0),e.j.ua())}function Wr(e,t,n){let s=nu(n);if(s.i!="")t&&Ze(s,t+"."+s.i),tn(s,s.m);else{const i=T.location;s=su(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&ms(e.aa,function(i,r){_(s,r,i)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),Re(e,s),s}function Yr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new O(new Ne({ib:!0})):new O(e.qa),t.L=e.H,t}function Jr(){}m=Jr.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function nn(){if(Ft&&!(10<=Number(Ma)))throw Error("Environmental error: no available transport.")}nn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){B.call(this),this.g=new jr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qt(this)}z(nt,B);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Is(q(e.hb,e,t))),J(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Wr(e,null,e.W),Sn(e)};nt.prototype.close=function(){Ms(this.g)};nt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,$n(this.g,t)}else this.v?(t={},t.__data__=Ts(e),$n(this.g,t)):$n(this.g,e)};nt.prototype.M=function(){this.g.j=null,delete this.j,Ms(this.g),delete this.g,nt.Z.M.call(this)};function Zr(e){Ds.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Zr,Ds);function to(){ks.call(this),this.status=1}z(to,ks);function Qt(e){this.g=e}z(Qt,Jr);Qt.prototype.xa=function(){K(this.g,"a")};Qt.prototype.wa=function(e){K(this.g,new Zr(e))};Qt.prototype.va=function(e){K(this.g,new to)};Qt.prototype.ua=function(){K(this.g,"b")};nn.prototype.createWebChannel=nn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;pn.NO_ERROR=0;pn.TIMEOUT=8;pn.HTTP_ERROR=6;Tr.COMPLETE="complete";Ir.EventType=Ae;Ae.OPEN="a";Ae.CLOSE="b";Ae.ERROR="c";Ae.MESSAGE="d";B.prototype.listen=B.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.La;O.prototype.getLastErrorCode=O.prototype.Da;O.prototype.getStatus=O.prototype.ba;O.prototype.getResponseJson=O.prototype.Qa;O.prototype.getResponseText=O.prototype.ga;O.prototype.send=O.prototype.ea;var Iu=function(){return new nn},Su=function(){return mn()},jn=pn,Cu=Tr,Au=bt,Ci={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Du=Ne,Be=Ir,ku=O;const Ai="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new la("@firebase/firestore");function Di(){return Dt.logLevel}function y(e,...t){if(Dt.logLevel<=he.DEBUG){const n=t.map(Fs);Dt.debug(`Firestore (${Ht}): ${e}`,...n)}}function gt(e,...t){if(Dt.logLevel<=he.ERROR){const n=t.map(Fs);Dt.error(`Firestore (${Ht}): ${e}`,...n)}}function ki(e,...t){if(Dt.logLevel<=he.WARN){const n=t.map(Fs);Dt.warn(`Firestore (${Ht}): ${e}`,...n)}}function Fs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function R(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends ga{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Ru{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new dt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new dt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Nu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new Z(t)}}class _u{constructor(t,n,s){this.type="FirstParty",this.user=Z.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class xu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new _u(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.p=n.token,new Lu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ou(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function Pt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new V(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new V(0,0))}static max(){return new C(new V(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return pe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof pe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends pe{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends pe{construct(t,n,s){return new Q(t,n,s)}static isValidIdentifier(t){return Vu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(x.fromString(t))}static fromName(t){return new v(x.fromString(t).popFirst(5))}static empty(){return new v(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new x(t.slice()))}}function Fu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new V(n+1,0):new V(n,s));return new mt(i,v.empty(),t)}function Pu(e){return new mt(e.readTime,e.key,-1)}class mt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new mt(C.min(),v.empty(),-1)}static max(){return new mt(C.max(),v.empty(),-1)}}function Uu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $u{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Bu)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(c=>{o[h]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function xe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function no(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps.ot=-1;class P{constructor(t,n){this.comparator=t,this.root=n||$.EMPTY}insert(t,n){return new P(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new P(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $e(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $e(this.root,t,this.comparator,!1)}getReverseIterator(){return new $e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $e(this.root,t,this.comparator,!0)}}class $e{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:$.RED,this.left=i!=null?i:$.EMPTY,this.right=r!=null?r:$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new $(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return $.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new $(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.comparator=t,this.data=new P(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bi(this.data.getIterator())}getIteratorFrom(t){return new bi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof F)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new F(this.comparator);return n.data=t,n}}class bi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new rt([])}unionWith(t){let n=new F(Q.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Pt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new G(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new G(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const ju=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(e){if(R(!!e),typeof e=="string"){let t=0;const n=ju.exec(e);if(R(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ut(e){return typeof e=="string"?G.fromBase64String(e):G.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function io(e){const t=e.mapValue.fields.__previous_value__;return so(t)?io(t):t}function ye(e){const t=pt(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Bt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Bt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return e==null}function sn(e){return e===0&&1/e==-1/0}function Ku(e){return typeof e=="number"&&Number.isInteger(e)&&!sn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?so(e)?4:Gu(e)?9007199254740991:10:I()}function ot(e,t){if(e===t)return!0;const n=kt(e);if(n!==kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ye(e).isEqual(ye(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=pt(s.timestampValue),o=pt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?sn(r)===sn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Pt(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ni(r)!==Ni(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function ve(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function $t(e,t){if(e===t)return 0;const n=kt(e),s=kt(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ri(e.timestampValue,t.timestampValue);case 4:return Ri(ye(e),ye(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ut(i),a=Ut(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=k(o[u],a[u]);if(h!==0)return h}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=k(M(i.latitude),M(r.latitude));return o!==0?o:k(M(i.longitude),M(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=$t(o[u],a[u]);if(h)return h}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===je.mapValue&&r===je.mapValue)return 0;if(i===je.mapValue)return 1;if(r===je.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=k(a[c],h[c]);if(l!==0)return l;const g=$t(o[a[c]],u[h[c]]);if(g!==0)return g}return k(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Ri(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=pt(e),s=pt(t),i=k(n.seconds,s.seconds);return i!==0?i:k(n.nanos,s.nanos)}function Ot(e){return ss(e)}function ss(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=pt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ut(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ss(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ss(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function is(e){return!!e&&"integerValue"in e}function Us(e){return!!e&&"arrayValue"in e}function _i(e){return!!e&&"nullValue"in e}function xi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ke(e){return!!e&&"mapValue"in e}function re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Gu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ke(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(n)}setAll(t){let n=Q.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=re(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ke(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ke(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Xt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new st(re(this.value))}}function ro(e){const t=[];return Xt(e.fields,(n,s)=>{const i=new Q([n]);if(Ke(s)){const r=ro(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new j(t,0,C.min(),C.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new j(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new j(t,2,n,C.min(),st.empty(),0)}static newUnknownDocument(t,n){return new j(t,3,n,C.min(),st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof j&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new j(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Li(e,t=null,n=[],s=[],i=null,r=null,o=null){return new zu(e,t,n,s,i,r,o)}function Bs(e){const t=S(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Ot(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Cn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ot(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ot(s)).join(",")),t.ut=n}return t.ut}function Qu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ot(s.value)}`;var s}).join(", ")}]`),Cn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ot(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ot(n)).join(",")),`Target(${t})`}function $s(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!eh(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Oi(e.startAt,t.startAt)&&Oi(e.endAt,t.endAt)}function rs(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new Hu(t,n,s):n==="array-contains"?new Yu(t,s):n==="in"?new Ju(t,s):n==="not-in"?new Zu(t,s):n==="array-contains-any"?new th(t,s):new tt(t,n,s)}static ct(t,n,s){return n==="in"?new Xu(t,s):new Wu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at($t(n,this.value)):n!==null&&kt(this.value)===kt(n)&&this.at($t(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Hu extends tt{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.at(n)}}class Xu extends tt{constructor(t,n){super(t,"in",n),this.keys=oo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wu extends tt{constructor(t,n){super(t,"not-in",n),this.keys=oo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function oo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Yu extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Us(n)&&ve(n.arrayValue,this.value)}}class Ju extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ve(this.value.arrayValue,n)}}class Zu extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ve(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ve(this.value.arrayValue,n)}}class th extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Us(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ve(this.value.arrayValue,s))}}class rn{constructor(t,n){this.position=t,this.inclusive=n}}class oe{constructor(t,n="asc"){this.field=t,this.dir=n}}function eh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Mi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=$t(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function nh(e,t,n,s,i,r,o,a){return new An(e,t,n,s,i,r,o,a)}function ao(e){return new An(e)}function sh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ih(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function rh(e){for(const t of e.filters)if(t.ht())return t.field;return null}function oh(e){return e.collectionGroup!==null}function we(e){const t=S(e);if(t.lt===null){t.lt=[];const n=rh(t),s=ih(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new oe(n)),t.lt.push(new oe(Q.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new oe(Q.keyField(),r))}}}return t.lt}function Nt(e){const t=S(e);if(!t.ft)if(t.limitType==="F")t.ft=Li(t.path,t.collectionGroup,we(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of we(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new oe(r.field,o))}const s=t.endAt?new rn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new rn(t.startAt.position,t.startAt.inclusive):null;t.ft=Li(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.ft}function ah(e,t,n){return new An(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Dn(e,t){return $s(Nt(e),Nt(t))&&e.limitType===t.limitType}function uo(e){return`${Bs(Nt(e))}|lt:${e.limitType}`}function os(e){return`Query(target=${Qu(Nt(e))}; limitType=${e.limitType})`}function js(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Mi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,we(n),s)||n.endAt&&!function(i,r,o){const a=Mi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,we(n),s))}(e,t)}function uh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ho(e){return(t,n)=>{let s=!1;for(const i of we(e)){const r=hh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function hh(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?$t(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sn(t)?"-0":t}}function lo(e){return{integerValue:""+e}}function ch(e,t){return Ku(t)?lo(t):co(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this._=void 0}}function lh(e,t,n){return e instanceof on?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ee?go(e,t):e instanceof Te?mo(e,t):function(s,i){const r=fo(s,i),o=Vi(r)+Vi(s._t);return is(r)&&is(s._t)?lo(o):co(s.wt,o)}(e,t)}function dh(e,t,n){return e instanceof Ee?go(e,t):e instanceof Te?mo(e,t):n}function fo(e,t){return e instanceof an?is(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class on extends kn{}class Ee extends kn{constructor(t){super(),this.elements=t}}function go(e,t){const n=po(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class Te extends kn{constructor(t){super(),this.elements=t}}function mo(e,t){let n=po(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class an extends kn{constructor(t,n){super(),this.wt=t,this._t=n}}function Vi(e){return M(e.integerValue||e.doubleValue)}function po(e){return Us(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function fh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ee&&s instanceof Ee||n instanceof Te&&s instanceof Te?Pt(n.elements,s.elements,ot):n instanceof an&&s instanceof an?ot(n._t,s._t):n instanceof on&&s instanceof on}(e.transform,t.transform)}class gh{constructor(t,n){this.version=t,this.transformResults=n}}class ut{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ge(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Nn{}function yo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new wo(e.key,ut.none()):new Le(e.key,e.data,ut.none());{const n=e.data,s=st.empty();let i=new F(Q.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Rt(e.key,s,new rt(i.toArray()),ut.none())}}function mh(e,t,n){e instanceof Le?function(s,i,r){const o=s.value.clone(),a=Pi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Rt?function(s,i,r){if(!Ge(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Pi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ae(e,t,n,s){return e instanceof Le?function(i,r,o,a){if(!Ge(i.precondition,r))return o;const u=i.value.clone(),h=Ui(i.fieldTransforms,a,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Rt?function(i,r,o,a){if(!Ge(i.precondition,r))return o;const u=Ui(i.fieldTransforms,a,r),h=r.data;return h.setAll(vo(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,s):function(i,r,o){return Ge(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function ph(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=fo(s.transform,i||null);r!=null&&(n===null&&(n=st.empty()),n.set(s.field,r))}return n||null}function Fi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pt(n,s,(i,r)=>fh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Le extends Nn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rt extends Nn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Pi(e,t,n){const s=new Map;R(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,dh(o,a,n[i]))}return s}function Ui(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,lh(r,o,t))}return s}class wo extends Nn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yh extends Nn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,D;function wh(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Eo(e){if(e===void 0)return gt("GRPC error has no .code"),f.UNKNOWN;switch(e){case L.OK:return f.OK;case L.CANCELLED:return f.CANCELLED;case L.UNKNOWN:return f.UNKNOWN;case L.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case L.INTERNAL:return f.INTERNAL;case L.UNAVAILABLE:return f.UNAVAILABLE;case L.UNAUTHENTICATED:return f.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case L.NOT_FOUND:return f.NOT_FOUND;case L.ALREADY_EXISTS:return f.ALREADY_EXISTS;case L.PERMISSION_DENIED:return f.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case L.ABORTED:return f.ABORTED;case L.OUT_OF_RANGE:return f.OUT_OF_RANGE;case L.UNIMPLEMENTED:return f.UNIMPLEMENTED;case L.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(D=L||(L={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Xt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return no(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new P(v.comparator);function lt(){return Eh}const To=new P(v.comparator);function ne(...e){let t=To;for(const n of e)t=t.insert(n.key,n);return t}function Io(e){let t=To;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function It(){return ue()}function So(){return ue()}function ue(){return new Wt(e=>e.toString(),(e,t)=>e.isEqual(t))}const Th=new P(v.comparator),Ih=new F(v.comparator);function A(...e){let t=Ih;for(const n of e)t=t.add(n);return t}const Sh=new F(k);function Co(){return Sh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Me.createSynthesizedTargetChangeForCurrentChange(t,n)),new bn(C.min(),s,Co(),lt(),A())}}class Me{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Me(G.EMPTY_BYTE_STRING,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n,s,i){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=i}}class Ao{constructor(t,n){this.targetId=t,this.It=n}}class Do{constructor(t,n,s=G.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Bi{constructor(){this.Tt=0,this.Et=ji(),this.At=G.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=A(),n=A(),s=A();return this.Et.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Me(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=ji()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Ch{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=lt(),this.Bt=$i(),this.Lt=new F(k)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(t){const n=t.targetId,s=t.It.count,i=this.Ht(n);if(i){const r=i.target;if(rs(r))if(s===0){const o=new v(r.path);this.Kt(n,o,j.newNoDocument(o,C.min()))}else R(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&rs(a.target)){const u=new v(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,j.newNoDocument(u,t))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=A();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ht(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(t));const i=new bn(t,n,this.Lt,this.$t,s);return this.$t=lt(),this.Bt=$i(),this.Lt=new F(k),i}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new Bi,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new F(k),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Bi),this.Mt.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Mt.getRemoteKeysForTarget(t).has(n)}}function $i(){return new P(v.comparator)}function ji(){return new P(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Dh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class kh{constructor(t,n){this.databaseId=t,this.dt=n}}function un(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ko(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Nh(e,t){return un(e,t.toTimestamp())}function ht(e){return R(!!e),C.fromTimestamp(function(t){const n=pt(t);return new V(n.seconds,n.nanos)}(e))}function qs(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function No(e){const t=x.fromString(e);return R(_o(t)),t}function as(e,t){return qs(e.databaseId,t.path)}function qn(e,t){const n=No(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(bo(n))}function us(e,t){return qs(e.databaseId,t)}function bh(e){const t=No(e);return t.length===4?x.emptyPath():bo(t)}function hs(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bo(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function qi(e,t,n){return{name:as(e,t),fields:n.value.mapValue.fields}}function Rh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.dt?(R(h===void 0||typeof h=="string"),G.fromBase64String(h||"")):(R(h===void 0||h instanceof Uint8Array),G.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?f.UNKNOWN:Eo(u.code);return new w(h,u.message||"")}(o);n=new Do(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=qn(e,s.document.name),r=ht(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=j.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new ze(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=qn(e,s.document),r=s.readTime?ht(s.readTime):C.min(),o=j.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ze([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=qn(e,s.document),r=s.removedTargetIds||[];n=new ze([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new vh(i),o=s.targetId;n=new Ao(o,r)}}return n}function _h(e,t){let n;if(t instanceof Le)n={update:qi(e,t.key,t.value)};else if(t instanceof wo)n={delete:as(e,t.key)};else if(t instanceof Rt)n={update:qi(e,t.key,t.data),updateMask:$h(t.fieldMask)};else{if(!(t instanceof yh))return I();n={verify:as(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof on)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ee)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Te)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof an)return{fieldPath:r.field.canonicalString(),increment:o._t};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Nh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function xh(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(C.min())&&(r=ht(i)),new gh(r,s.transformResults||[])}(n,t))):[]}function Lh(e,t){return{documents:[us(e,t.path)]}}function Mh(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=us(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=us(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if(xi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NAN"}};if(_i(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(xi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NAN"}};if(_i(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xt(l.field),op:Ph(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:xt(c.field),direction:Fh(c.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.dt||Cn(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Oh(e){let t=bh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){R(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=Ro(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new oe(Mt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Cn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,g=c.values||[];return new rn(g,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,g=c.values||[];return new rn(g,l)}(n.endAt)),nh(t,i,o,r,a,"F",u,h)}function Vh(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ro(e){return e?e.unaryFilter!==void 0?[Bh(e)]:e.fieldFilter!==void 0?[Uh(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Ro(t)).reduce((t,n)=>t.concat(n)):I():[]}function Fh(e){return Ah[e]}function Ph(e){return Dh[e]}function xt(e){return{fieldPath:e.canonicalString()}}function Mt(e){return Q.fromServerFormat(e.fieldPath)}function Uh(e){return tt.create(Mt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Bh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Mt(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Mt(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mt(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Mt(e.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function $h(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function _o(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&mh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ae(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ae(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=So();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=yo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&Pt(this.mutations,t.mutations,(n,s)=>Fi(n,s))&&Pt(this.baseMutations,t.baseMutations,(n,s)=>Fi(n,s))}}class Ks{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){R(t.mutations.length===s.length);let i=Th;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ks(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n,s,i,r=C.min(),o=C.min(),a=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new St(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.ne=t}}function Gh(e){const t=Oh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ah(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.ze=new Qh}addToCollectionParentIndex(t,n){return this.ze.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(mt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(mt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Qh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new F(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new F(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new jt(0)}static Rn(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.changes=new Wt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,j.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&ae(s.mutation,i,rt.empty(),V.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const i=It();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=ne();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=It();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=lt();const o=ue(),a=ue();return n.forEach((u,h)=>{const c=s.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof Rt)?r=r.insert(h.key,h):c!==void 0&&(o.set(h.key,c.mutation.getFieldMask()),ae(c.mutation,h,c.mutation.getFieldMask(),V.now()))}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new Xh(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ue();let i=new P((o,a)=>o-a),r=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=s.get(u)||rt.empty();c=a.applyToLocalView(h,c),s.set(u,c);const l=(i.get(a.batchId)||A()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=So();c.forEach(g=>{if(!r.has(g)){const p=yo(n.get(g),s.get(g));p!==null&&l.set(g,p),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):oh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(It());let a=-1,u=r;return o.next(h=>d.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(c)?d.resolve():this.getBaseDocument(t,c,l).next(g=>{u=u.insert(c,g)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,A())).next(c=>({batchId:a,changes:Io(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let i=ne();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=ne();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(h,c){return new An(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const h=u.getKey();i.get(h)===null&&(i=i.insert(h,j.newInvalidDocument(h)))});let o=ne();return i.forEach((a,u)=>{const h=r.get(a);h!==void 0&&ae(h.mutation,u,rt.empty(),V.now()),js(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve(j.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return d.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Gh(s.bundledQuery),readTime:ht(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.overlays=new P(v.comparator),this.Xn=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=It();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ie(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=It(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new P((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=It(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=It(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return d.resolve(a)}ie(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new qh(n,s));let r=this.Xn.get(n);r===void 0&&(r=A(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.Zn=new F(U.ts),this.es=new F(U.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new U(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new U(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new v(new x([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new v(new x([])),s=new U(n,t),i=new U(n,t+1);let r=A();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return v.comparator(t.key,n.key)||k(t.ls,n.ls)}static ns(t,n){return k(t.ls,n.ls)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new F(U.ts)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new F(k);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),d.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new U(new v(r),0);let a=new F(k);return this.ds.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.ls)),!0)},o),d.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){R(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return d.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new U(n,0),i=this.ds.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.ps=t,this.docs=new P(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():j.newInvalidDocument(n))}getEntries(t,n){let s=lt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():j.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=lt();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Uu(Pu(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Is(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ec(this)}getSize(t){return d.resolve(this.size)}}class ec extends Hh{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(t,i)):this.zn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t){this.persistence=t,this.Ts=new Wt(n=>Bs(n),$s),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Es=0,this.As=new Gs,this.targetCount=0,this.Rs=jt.An()}forEachTarget(t,n){return this.Ts.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),d.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new jt(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.vn(n),d.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Ps(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new nc(this),this.indexManager=new zh,this.remoteDocumentCache=function(s){return new tc(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Kh(n),this.Ds=new Yh(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Jh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new Zh(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new ic(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(t,n){return d.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class ic extends $u{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.ks=new Gs,this.Os=null}static Ms(t){return new zs(t)}get Fs(){if(this.Os)return this.Os;throw I()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),d.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Os=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Fs,s=>{const i=v.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.Os=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return d.or([()=>d.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(t,n){let s=A(),i=A();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Qs(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ci(t,n).next(r=>r||this.xi(t,n,i,s)).next(r=>r||this.Ni(t,n))}Ci(t,n){return d.resolve(null)}xi(t,n,s,i){return sh(n)||i.isEqual(C.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(t,n):(Di()<=he.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.Mi(t,o,n,Fu(i,-1)))})}ki(t,n){let s=new F(ho(t));return n.forEach((i,r)=>{js(t,r)&&(s=s.add(r))}),s}Oi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,n){return Di()<=he.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",os(n)),this.Di.getDocumentsMatchingQuery(t,n,mt.min())}Mi(t,n,s,i){return this.Di.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n,s,i){this.persistence=t,this.Fi=n,this.wt=i,this.$i=new P(k),this.Bi=new Wt(r=>Bs(r),$s),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wh(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function ac(e,t,n,s){return new oc(e,t,n,s)}async function xo(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=A();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(h=>({Ki:h,removedBatchIds:o,addedBatchIds:a}))})})}function uc(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let g=d.resolve();return l.forEach(p=>{g=g.next(()=>h.getEntry(a,p)).next(E=>{const N=u.docVersions.get(p);R(N!==null),E.version.compareTo(N)<0&&(c.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),h.addEntry(E)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Lo(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function hc(e,t){const n=S(e),s=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];t.targetChanges.forEach((c,l)=>{const g=i.get(l);if(!g)return;a.push(n.Vs.removeMatchingKeys(r,c.removedDocuments,l).next(()=>n.Vs.addMatchingKeys(r,c.addedDocuments,l)));let p=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?p=p.withResumeToken(G.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,s)),i=i.insert(l,p),function(E,N,b){return E.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(g,p,c)&&a.push(n.Vs.updateTargetData(r,p))});let u=lt(),h=A();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(cc(r,o,t.documentUpdates).next(c=>{u=c.Gi,h=c.Qi})),!s.isEqual(C.min())){const c=n.Vs.getLastRemoteSnapshotVersion(r).next(l=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.$i=i,r))}function cc(e,t,n){let s=A(),i=A();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=lt();return n.forEach((a,u)=>{const h=r.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(C.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{Gi:o,Qi:i}})}function lc(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function dc(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new St(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function cs(e,t,n){const s=S(e),i=s.$i.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(i.target)}function Ki(e,t,n){const s=S(e);let i=C.min(),r=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=S(a),l=c.Bi.get(h);return l!==void 0?d.resolve(c.$i.get(l)):c.Vs.getTargetData(u,h)}(s,o,Nt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?i:C.min(),n?r:A())).next(a=>(fc(s,uh(t),a),{documents:a,ji:r})))}function fc(e,t,n){let s=C.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Li.set(t,s)}class Gi{constructor(){this.activeTargetIds=Co()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gc{constructor(){this.Fr=new Gi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Gi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(t,o,a,s).then(u=>(y("RestConnection","Received: ",u),u),u=>{throw ki("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}ao(t,n,s,i,r,o){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ht,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=pc[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new ku;a.listenOnce(Cu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jn.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case jn.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const c=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const g=function(p){const E=p.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(E)>=0?E:f.UNKNOWN}(l.status);o(new w(g,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Iu(),o=Su(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Du({})),this.uo(a.initMessageHeaders,n,s),pa()||ya()||va()||wa()||Ea()||Ta()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");y("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const g=new yc({jr:E=>{l?y("Connection","Not sending because WebChannel is closed:",E):(c||(y("Connection","Opening WebChannel transport."),h.open(),c=!0),y("Connection","WebChannel sending:",E),h.send(E))},Wr:()=>h.close()}),p=(E,N,b)=>{E.listen(N,X=>{try{b(X)}catch(et){setTimeout(()=>{throw et},0)}})};return p(h,Be.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),p(h,Be.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),g.eo())}),p(h,Be.EventType.ERROR,E=>{l||(l=!0,ki("Connection","WebChannel transport errored:",E),g.eo(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(h,Be.EventType.MESSAGE,E=>{var N;if(!l){const b=E.data[0];R(!!b);const X=b,et=X.error||((N=X[0])===null||N===void 0?void 0:N.error);if(et){y("Connection","WebChannel received error:",et);const Jt=et.status;let Zt=function(ua){const ui=L[ua];if(ui!==void 0)return Eo(ui)}(Jt),ai=et.message;Zt===void 0&&(Zt=f.INTERNAL,ai="Unknown error status: "+Jt+" with message "+et.message),l=!0,g.eo(new w(Zt,ai)),h.close()}else y("Connection","WebChannel received:",b),g.no(b)}}),p(o,Au.STAT_EVENT,E=>{E.stat===Ci.PROXY?y("Connection","Detected buffering proxy"):E.stat===Ci.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.Zr()},0),g}}function Kn(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return new kh(e,!0)}class Mo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,n,s,i,r,o,a,u){this.js=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Mo(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wc extends Oo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Rh(this.wt,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?ht(r.readTime):C.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=hs(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=rs(a)?{documents:Lh(i,a)}:{query:Mh(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ko(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=un(i,r.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=Vh(this.wt,t);s&&(n.labels=s),this.Mo(n)}jo(t){const n={};n.database=hs(this.wt),n.removeTarget=t,this.Mo(n)}}class Ec extends Oo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=xh(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.Jo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=hs(this.wt),this.Mo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>_h(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}ao(t,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Ic{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(gt(n),this.su=!1):y("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{_t(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=S(a);u.lu.add(4),await Oe(u),u._u.set("Unknown"),u.lu.delete(4),await _n(u)}(this))})}),this._u=new Ic(s,i)}}async function _n(e){if(_t(e))for(const t of e.fu)await t(!0)}async function Oe(e){for(const t of e.fu)await t(!1)}function Vo(e,t){const n=S(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Ws(n)?Xs(n):Yt(n).Co()&&Hs(n,t))}function Fo(e,t){const n=S(e),s=Yt(n);n.hu.delete(t),s.Co()&&Po(n,t),n.hu.size===0&&(s.Co()?s.ko():_t(n)&&n._u.set("Unknown"))}function Hs(e,t){e.wu.Nt(t.targetId),Yt(e).Qo(t)}function Po(e,t){e.wu.Nt(t),Yt(e).jo(t)}function Xs(e){e.wu=new Ch({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Yt(e).start(),e._u.iu()}function Ws(e){return _t(e)&&!Yt(e).Do()&&e.hu.size>0}function _t(e){return S(e).lu.size===0}function Uo(e){e.wu=void 0}async function Cc(e){e.hu.forEach((t,n)=>{Hs(e,t)})}async function Ac(e,t){Uo(e),Ws(e)?(e._u.uu(t),Xs(e)):e._u.set("Unknown")}async function Dc(e,t,n){if(e._u.set("Online"),t instanceof Do&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await hn(e,s)}else if(t instanceof ze?e.wu.Ut(t):t instanceof Ao?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(C.min()))try{const s=await Lo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.hu.get(u);h&&i.hu.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(G.EMPTY_BYTE_STRING,u.snapshotVersion)),Po(i,a);const h=new St(u.target,a,1,u.sequenceNumber);Hs(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await hn(e,s)}}async function hn(e,t,n){if(!xe(t))throw t;e.lu.add(1),await Oe(e),e._u.set("Offline"),n||(n=()=>Lo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await _n(e)})}function Bo(e,t){return t().catch(n=>hn(e,n,t))}async function xn(e){const t=S(e),n=yt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;kc(t);)try{const i=await lc(t.localStore,s);if(i===null){t.au.length===0&&n.ko();break}s=i.batchId,Nc(t,i)}catch(i){await hn(t,i)}$o(t)&&jo(t)}function kc(e){return _t(e)&&e.au.length<10}function Nc(e,t){e.au.push(t);const n=yt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function $o(e){return _t(e)&&!yt(e).Do()&&e.au.length>0}function jo(e){yt(e).start()}async function bc(e){yt(e).Xo()}async function Rc(e){const t=yt(e);for(const n of e.au)t.Ho(n.mutations)}async function _c(e,t,n){const s=e.au.shift(),i=Ks.from(s,t,n);await Bo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await xn(e)}async function xc(e,t){t&&yt(e).zo&&await async function(n,s){if(i=s.code,wh(i)&&i!==f.ABORTED){const r=n.au.shift();yt(n).No(),await Bo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await xn(n)}var i}(e,t),$o(e)&&jo(e)}async function Qi(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=_t(n);n.lu.add(3),await Oe(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await _n(n)}async function Lc(e,t){const n=S(e);t?(n.lu.delete(2),await _n(n)):t||(n.lu.add(2),await Oe(n),n._u.set("Unknown"))}function Yt(e){return e.mu||(e.mu=function(t,n,s){const i=S(t);return i.tu(),new wc(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:Cc.bind(null,e),Jr:Ac.bind(null,e),Go:Dc.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),Ws(e)?Xs(e):e._u.set("Unknown")):(await e.mu.stop(),Uo(e))})),e.mu}function yt(e){return e.gu||(e.gu=function(t,n,s){const i=S(t);return i.tu(),new Ec(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:bc.bind(null,e),Jr:xc.bind(null,e),Yo:Rc.bind(null,e),Jo:_c.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await xn(e)):(await e.gu.stop(),e.au.length>0&&(y("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ys(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(e,t){if(gt("AsyncQueue",`${t}: ${e}`),xe(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=ne(),this.sortedSet=new P(this.comparator)}static emptySet(t){return new Vt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Vt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Vt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.yu=new P(v.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class qt{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new qt(t,n,Vt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.Iu=void 0,this.listeners=[]}}class Oc{constructor(){this.queries=new Wt(t=>uo(t),Dn),this.onlineState="Unknown",this.Tu=new Set}}async function Vc(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Mc),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Js(o,`Initialization of query '${os(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&Zs(n)}async function Fc(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Pc(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Zs(n)}function Uc(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Zs(e){e.Tu.forEach(t=>{t.next()})}class Bc{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new qt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=qt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t){this.key=t}}class Ko{constructor(t){this.key=t}}class $c{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=A(),this.mutatedKeys=A(),this.Lu=ho(t),this.Uu=new Vt(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new Hi,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const g=i.get(c),p=js(this.query,l)?l:null,E=!!g&&this.mutatedKeys.has(g.key),N=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;g&&p?g.data.isEqual(p.data)?E!==N&&(s.track({type:3,doc:p}),b=!0):this.Qu(g,p)||(s.track({type:2,doc:p}),b=!0,(u&&this.Lu(p,u)>0||h&&this.Lu(p,h)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),b=!0):g&&!p&&(s.track({type:1,doc:g}),b=!0,(u||h)&&(a=!0)),b&&(p?(o=o.add(p),r=N?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort((h,c)=>function(l,g){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(l)-p(g)}(h.type,c.type)||this.Lu(h.doc,c.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,r.length!==0||u?{snapshot:new qt(this.query,t.Uu,i,r,t.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Hi,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=A(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new Ko(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new qo(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=A();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return qt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class jc{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class qc{constructor(t){this.key=t,this.Xu=!1}}class Kc{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Wt(a=>uo(a),Dn),this.ec=new Map,this.nc=new Set,this.sc=new P(v.comparator),this.ic=new Map,this.rc=new Gs,this.oc={},this.uc=new Map,this.cc=jt.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Gc(e,t){const n=el(e);let s,i;const r=n.tc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await dc(n.localStore,Nt(t));n.isPrimaryClient&&Vo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await zc(n,t,s,a==="current")}return i}async function zc(e,t,n,s){e.hc=(c,l,g)=>async function(p,E,N,b){let X=E.view.Ku(N);X.Oi&&(X=await Ki(p.localStore,E.query,!1).then(({documents:Zt})=>E.view.Ku(Zt,X)));const et=b&&b.targetChanges.get(E.targetId),Jt=E.view.applyChanges(X,p.isPrimaryClient,et);return Wi(p,E.targetId,Jt.zu),Jt.snapshot}(e,c,l,g);const i=await Ki(e.localStore,t,!0),r=new $c(t,i.ji),o=r.Ku(i.documents),a=Me.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);Wi(e,n,u.zu);const h=new jc(t,n,r);return e.tc.set(t,h),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),u.snapshot}async function Qc(e,t){const n=S(e),s=n.tc.get(t),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!Dn(r,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await cs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Fo(n.remoteStore,s.targetId),ls(n,s.targetId)}).catch(_e)):(ls(n,s.targetId),await cs(n.localStore,s.targetId,!0))}async function Hc(e,t,n){const s=nl(e);try{const i=await function(r,o){const a=S(r),u=V.now(),h=o.reduce((g,p)=>g.add(p.key),A());let c,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=lt(),E=A();return a.Ui.getEntries(g,h).next(N=>{p=N,p.forEach((b,X)=>{X.isValidDocument()||(E=E.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(N=>{c=N;const b=[];for(const X of o){const et=ph(X,c.get(X.key).overlayedDocument);et!=null&&b.push(new Rt(X.key,et,ro(et.value.mapValue),ut.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,b,o)}).next(N=>{l=N;const b=N.applyToLocalDocumentSet(c,E);return a.documentOverlayCache.saveOverlays(g,N.batchId,b)})}).then(()=>({batchId:l.batchId,changes:Io(c)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.oc[r.currentUser.toKey()];u||(u=new P(k)),u=u.insert(o,a),r.oc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Ve(s,i.changes),await xn(s.remoteStore)}catch(i){const r=Js(i,"Failed to persist write");n.reject(r)}}async function Go(e,t){const n=S(e);try{const s=await hc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?R(o.Xu):i.removedDocuments.size>0&&(R(o.Xu),o.Xu=!1))}),await Ve(n,s,t)}catch(s){await _e(s)}}function Xi(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.Eu(o)&&(u=!0)}),u&&Zs(a)}(s.eventManager,t),i.length&&s.Zu.Go(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Xc(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ic.get(t),r=i&&i.key;if(r){let o=new P(v.comparator);o=o.insert(r,j.newNoDocument(r,C.min()));const a=A().add(r),u=new bn(C.min(),new Map,new F(k),o,a);await Go(s,u),s.sc=s.sc.remove(r),s.ic.delete(t),ti(s)}else await cs(s.localStore,t,!1).then(()=>ls(s,t,n)).catch(_e)}async function Wc(e,t){const n=S(e),s=t.batch.batchId;try{const i=await uc(n.localStore,t);Qo(n,s,null),zo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ve(n,i)}catch(i){await _e(i)}}async function Yc(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(R(c!==null),h=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>a.localDocuments.getDocuments(u,h))})}(s.localStore,t);Qo(s,t,n),zo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ve(s,i)}catch(i){await _e(i)}}function zo(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function Qo(e,t,n){const s=S(e);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.oc[s.currentUser.toKey()]=i}}function ls(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||Ho(e,s)})}function Ho(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(Fo(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),ti(e))}function Wi(e,t,n){for(const s of n)s instanceof qo?(e.rc.addReference(s.key,t),Jc(e,s)):s instanceof Ko?(y("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||Ho(e,s.key)):I()}function Jc(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.nc.add(s),ti(e))}function ti(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new v(x.fromString(t)),s=e.cc.next();e.ic.set(s,new qc(n)),e.sc=e.sc.insert(n,s),Vo(e.remoteStore,new St(Nt(ao(n.path)),s,2,Ps.ot))}}async function Ve(e,t,n){const s=S(e),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,u)=>{o.push(s.hc(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=Qs.Vi(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,u){const h=S(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(u,l=>d.forEach(l.Pi,g=>h.persistence.referenceDelegate.addReference(c,l.targetId,g)).next(()=>d.forEach(l.vi,g=>h.persistence.referenceDelegate.removeReference(c,l.targetId,g)))))}catch(c){if(!xe(c))throw c;y("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const g=h.$i.get(l),p=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(p);h.$i=h.$i.insert(l,E)}}}(s.localStore,r))}async function Zc(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await xo(n.localStore,t);n.currentUser=t,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ve(n,s.Ki)}}function tl(e,t){const n=S(e),s=n.ic.get(t);if(s&&s.Xu)return A().add(s.key);{let i=A();const r=n.ec.get(t);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function el(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Go.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xc.bind(null,t),t.Zu.Go=Pc.bind(null,t.eventManager),t.Zu.lc=Uc.bind(null,t.eventManager),t}function nl(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yc.bind(null,t),t}class sl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Rn(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return ac(this.persistence,new rc,t.initialUser,this.wt)}_c(t){return new sc(zs.Ms,this.wt)}dc(t){return new gc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class il{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zc.bind(null,this.syncEngine),await Lc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Oc}createDatastore(t){const n=Rn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new vc(i));var i;return function(r,o,a,u){return new Tc(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Xi(this.syncEngine,a,0),o=zi.V()?new zi:new mc,new Sc(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const c=new Kc(s,i,r,o,a,u);return h&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);y("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Oe(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=eo.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Js(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function al(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await xo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ul(e,t){e.asyncQueue.verifyOperationInProgress();const n=await hl(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Qi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Qi(t.remoteStore,r)),e.onlineComponents=t}async function hl(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await al(e,new sl)),e.offlineComponents}async function Xo(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await ul(e,new il)),e.onlineComponents}function cl(e){return Xo(e).then(t=>t.syncEngine)}async function ll(e){const t=await Xo(e),n=t.eventManager;return n.onListen=Gc.bind(null,t.syncEngine),n.onUnlisten=Qc.bind(null,t.syncEngine),n}function dl(e,t,n={}){const s=new dt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new rl({next:l=>{r.enqueueAndForget(()=>Fc(i,c)),l.fromCache&&a.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new Bc(o,h,{includeMetadataChanges:!0,Du:!0});return Vc(i,c)}(await ll(e),e.asyncQueue,t,n,s)),s.promise}const Yi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fl(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ji(e){if(!v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Zi(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ei(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ds(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ei(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,fl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tr({}),this._settingsFrozen=!1,t instanceof Bt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bu;switch(n.type){case"gapi":const s=n.client;return R(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new xu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Yi.get(t);n&&(y("ComponentProvider","Removing Datastore"),Yi.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class Ln{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ln(this.firestore,t,this._query)}}class ft extends Ln{constructor(t,n,s){super(t,n,ao(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new v(t))}withConverter(t){return new ft(this.firestore,t,this._path)}}function Ml(e,t,...n){if(e=ce(e),Wo("collection","path",t),e instanceof ni){const s=x.fromString(t,...n);return Zi(s),new ft(e,null,s)}{if(!(e instanceof it||e instanceof ft))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Zi(s),new ft(e.firestore,null,s)}}function gl(e,t,...n){if(e=ce(e),arguments.length===1&&(t=eo.I()),Wo("doc","path",t),e instanceof ni){const s=x.fromString(t,...n);return Ji(s),new it(e,null,new v(s))}{if(!(e instanceof it||e instanceof ft))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Ji(s),new it(e.firestore,e instanceof ft?e.converter:null,new v(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Mo(this,"async_queue_retry"),this.Kc=()=>{const n=Kn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Kn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Kn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new dt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!xe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Oc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const i=Ys.createAndSchedule(this,t,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&I()}verifyOperationInProgress(){}async zc(){let t;do t=this.Oc,await t;while(t!==this.Oc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class si extends ni{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new ml,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Jo(this),this._firestoreClient.terminate()}}function Ol(e=ma()){return fa(e,"firestore").getImmediate()}function Yo(e){return e._firestoreClient||Jo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Jo(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new qu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ol(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kt(G.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Kt(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=/^__.*__$/;class yl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Rt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Le(t,this.data,n,this.fieldTransforms)}}function ta(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class oi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.sa(t),i}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return cn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(ta(this.Zc)&&pl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class vl{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||Rn(t)}aa(t,n,s,i=!1){return new oi({Zc:t,methodName:n,ca:s,path:Q.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function wl(e){const t=e._freezeSettings(),n=Rn(e._databaseId);return new vl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function El(e,t,n,s,i,r={}){const o=e.aa(r.merge||r.mergeFields?2:0,t,n,i);ia("Data must be an object, but it was:",o,s);const a=na(s,o);let u,h;if(r.merge)u=new rt(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const g=Tl(t,l,n);if(!o.contains(g))throw new w(f.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Sl(c,g)||c.push(g)}u=new rt(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new yl(new st(a),u,h)}function ea(e,t){if(sa(e=ce(e)))return ia("Unsupported field value:",t,e),na(e,t);if(e instanceof Zo)return function(n,s){if(!ta(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ea(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ch(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=V.fromDate(n);return{timestampValue:un(s.wt,i)}}if(n instanceof V){const i=new V(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:un(s.wt,i)}}if(n instanceof ri)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kt)return{bytesValue:ko(s.wt,n._byteString)};if(n instanceof it){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qs(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ei(n)}`)}(e,t)}function na(e,t){const n={};return no(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xt(e,(s,i)=>{const r=ea(i,t.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function sa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof V||e instanceof ri||e instanceof Kt||e instanceof it||e instanceof Zo)}function ia(e,t,n){if(!sa(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ei(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function Tl(e,t,n){if((t=ce(t))instanceof ii)return t._internalPath;if(typeof t=="string")return ra(e,t);throw cn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Il=new RegExp("[~\\*/\\[\\]]");function ra(e,t,n){if(t.search(Il)>=0)throw cn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ii(...t.split("."))._internalPath}catch{throw cn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new w(f.INVALID_ARGUMENT,a+e+u)}function Sl(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(aa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cl extends oa{data(){return super.data()}}function aa(e,t){return typeof t=="string"?ra(e,t):t instanceof ii?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Al extends oa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Qe(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(aa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qe extends Al{data(t={}){return super.data(t)}}class Dl{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new qe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Qe(this._firestore,this._userDataWriter,s.key,s,new qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Qe(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Qe(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:kl(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{convertValue(t,n="none"){switch(kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Xt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ri(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=io(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ye(t));default:return null}}convertTimestamp(t){const n=pt(t);return new V(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);R(_o(s));const i=new Bt(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||gt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class _l extends bl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Vl(e){e=ds(e,Ln);const t=ds(e.firestore,si),n=Yo(t),s=new _l(t);return Nl(e._query),dl(n,e._query).then(i=>new Dl(t,s,e,i))}function Fl(e,t){const n=ds(e.firestore,si),s=gl(e),i=Rl(e.converter,t);return xl(n,[El(wl(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,ut.exists(!1))]).then(()=>s)}function xl(e,t){return function(n,s){const i=new dt;return n.asyncQueue.enqueueAndForget(async()=>Hc(await cl(n),s,i)),i.promise}(Yo(e),t)}(function(e,t=!0){(function(n){Ht=n})(da),ha(new ca("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new si(i,new Ru(n.getProvider("auth-internal")),new Mu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),hi(Ai,"3.4.12",e),hi(Ai,"3.4.12","esm2017")})();export{Ol as B,Fl as T,Ml as V,Vl as w};
