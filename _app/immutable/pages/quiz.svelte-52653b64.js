import{S as aa,i as ua,s as ha,e as X,k as ge,t as Et,I as ca,c as W,d as U,m as pe,a as lt,h as Tt,b as x,f as Hn,F as N,g as Si,j as Xn,E as Ci,v as la,M as da}from"../chunks/index-6e6a97b6.js";import{_ as fa,r as Ai,C as ga,L as pa,f as Ae,S as ma,h as ya,F as va,g as wa,j as Ea,a as Ta,b as Ia,s as Sa,m as Ca,t as Aa,c as ka}from"../chunks/index.esm2017-86d43a5f.js";var Da=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,bs=bs||{},E=Da||self;function hn(){}function us(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Me(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Na(e){return Object.prototype.hasOwnProperty.call(e,Wn)&&e[Wn]||(e[Wn]=++xa)}var Wn="closure_uid_"+(1e9*Math.random()>>>0),xa=0;function ba(e,t,n){return e.call.apply(e.bind,arguments)}function Ra(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?z=ba:z=Ra,z.apply(null,arguments)}function Je(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function H(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var _a=0;kt.prototype.s=!1;kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_a!=0)&&Na(this)};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Er=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function La(e){t:{var t=Cu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function ki(e){return Array.prototype.concat.apply([],arguments)}function Rs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function cn(e){return/^[\s\xa0]*$/.test(e)}var Di=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function J(e,t){return e.indexOf(t)!=-1}function Yn(e,t){return e<t?-1:e>t?1:0}var Z;t:{var Ni=E.navigator;if(Ni){var xi=Ni.userAgent;if(xi){Z=xi;break t}}Z=""}function _s(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Tr(e){const t={};for(const n in e)t[n]=e[n];return t}var bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ir(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<bi.length;r++)n=bi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ls(e){return Ls[" "](e),e}Ls[" "]=hn;function Oa(e){var t=Fa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Va=J(Z,"Opera"),te=J(Z,"Trident")||J(Z,"MSIE"),Sr=J(Z,"Edge"),hs=Sr||te,Cr=J(Z,"Gecko")&&!(J(Z.toLowerCase(),"webkit")&&!J(Z,"Edge"))&&!(J(Z,"Trident")||J(Z,"MSIE"))&&!J(Z,"Edge"),Ma=J(Z.toLowerCase(),"webkit")&&!J(Z,"Edge");function Ar(){var e=E.document;return e?e.documentMode:void 0}var ln;t:{var Jn="",Zn=function(){var e=Z;if(Cr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sr)return/Edge\/([\d\.]+)/.exec(e);if(te)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ma)return/WebKit\/(\S+)/.exec(e);if(Va)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Zn&&(Jn=Zn?Zn[1]:""),te){var ts=Ar();if(ts!=null&&ts>parseFloat(Jn)){ln=String(ts);break t}}ln=Jn}var Fa={};function Pa(){return Oa(function(){let e=0;const t=Di(String(ln)).split("."),n=Di("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Yn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Yn(i[2].length==0,r[2].length==0)||Yn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var cs;if(E.document&&te){var Ri=Ar();cs=Ri||parseInt(ln,10)||void 0}else cs=void 0;var Ua=cs,qa=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",hn,t),E.removeEventListener("test",hn,t)}catch{}return e}();function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};function ke(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Cr){t:{try{Ls(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ba[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ke.Z.h.call(this)}}H(ke,Y);var Ba={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),$a=0;function ja(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++$a,this.ca=this.fa=!1}function In(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Sn(e){this.src=e,this.g={},this.h=0}Sn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ds(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ja(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function ls(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=wr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(In(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ds(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var Os="closure_lm_"+(1e6*Math.random()|0),es={};function kr(e,t,n,s,i){if(s&&s.once)return Nr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)kr(e,t[r],n,s,i);return null}return n=Fs(n),e&&e[Fe]?e.N(t,n,Me(s)?!!s.capture:!!s,i):Dr(e,t,n,!1,s,i)}function Dr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Me(i)?!!i.capture:!!i,a=Ms(e);if(a||(e[Os]=a=new Sn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ka(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)qa||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(br(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ka(){function e(n){return t.call(e.src,e.listener,n)}var t=za;return e}function Nr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Nr(e,t[r],n,s,i);return null}return n=Fs(n),e&&e[Fe]?e.O(t,n,Me(s)?!!s.capture:!!s,i):Dr(e,t,n,!0,s,i)}function xr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)xr(e,t[r],n,s,i);else s=Me(s)?!!s.capture:!!s,n=Fs(n),e&&e[Fe]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ds(r,n,s,i),-1<n&&(In(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ms(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ds(t,n,s,i)),(n=-1<e?t[e]:null)&&Vs(n))}function Vs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Fe])ls(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(br(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ms(t))?(ls(n,e),n.h==0&&(n.src=null,t[Os]=null)):In(e)}}}function br(e){return e in es?es[e]:es[e]="on"+e}function za(e,t){if(e.ca)e=!0;else{t=new ke(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Vs(e),e=n.call(s,t)}return e}function Ms(e){return e=e[Os],e instanceof Sn?e:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fs(e){return typeof e=="function"?e:(e[ns]||(e[ns]=function(t){return e.handleEvent(t)}),e[ns])}function B(){kt.call(this),this.i=new Sn(this),this.P=this,this.I=null}H(B,kt);B.prototype[Fe]=!0;B.prototype.removeEventListener=function(e,t,n,s){xr(this,e,t,n,s)};function G(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(s,e),Ir(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ze(o,s,!0,t)&&i}if(o=t.g=e,i=Ze(o,s,!0,t)&&i,i=Ze(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ze(o,s,!1,t)&&i}B.prototype.M=function(){if(B.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)In(n[s]);delete e.g[t],e.h--}}this.I=null};B.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};B.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&ls(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ps=E.JSON.stringify;function Ga(){var e=_r;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Qa{constructor(){this.h=this.g=null}add(t,n){const s=Rr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Rr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ha,e=>e.reset());class Ha{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xa(e){E.setTimeout(()=>{throw e},0)}function Us(e,t){fs||Wa(),gs||(fs(),gs=!0),_r.add(e,t)}var fs;function Wa(){var e=E.Promise.resolve(void 0);fs=function(){e.then(Ya)}}var gs=!1,_r=new Qa;function Ya(){for(var e;e=Ga();){try{e.h.call(e.g)}catch(n){Xa(n)}var t=Rr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}gs=!1}function Cn(e,t){B.call(this),this.h=e||1,this.g=t||E,this.j=z(this.kb,this),this.l=Date.now()}H(Cn,B);g=Cn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),G(this,"tick"),this.da&&(qs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){Cn.Z.M.call(this),qs(this),delete this.g};function Bs(e,t,n){if(typeof e=="function")n&&(e=z(e,n));else if(e&&typeof e.handleEvent=="function")e=z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Lr(e){e.g=Bs(()=>{e.g=null,e.i&&(e.i=!1,Lr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ja extends kt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Lr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){kt.call(this),this.h=e,this.g={}}H(De,kt);var _i=[];function Or(e,t,n,s){Array.isArray(n)||(n&&(_i[0]=n.toString()),n=_i);for(var i=0;i<n.length;i++){var r=kr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Vr(e){_s(e.g,function(t,n){this.g.hasOwnProperty(n)&&Vs(t)},e),e.g={}}De.prototype.M=function(){De.Z.M.call(this),Vr(this)};De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function An(){this.g=!0}An.prototype.Aa=function(){this.g=!1};function Za(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function tu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Xt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+nu(e,n)+(s?" "+s:"")})}function eu(e,t){e.info(function(){return"TIMEOUT: "+t})}An.prototype.info=function(){};function nu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ps(n)}catch{return t}}var $t={},Li=null;function kn(){return Li=Li||new B}$t.Ma="serverreachability";function Mr(e){Y.call(this,$t.Ma,e)}H(Mr,Y);function Ne(e){const t=kn();G(t,new Mr(t))}$t.STAT_EVENT="statevent";function Fr(e,t){Y.call(this,$t.STAT_EVENT,e),this.stat=t}H(Fr,Y);function tt(e){const t=kn();G(t,new Fr(t,e))}$t.Na="timingevent";function Pr(e,t){Y.call(this,$t.Na,e),this.size=t}H(Pr,Y);function Pe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var Dn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ur={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $s(){}$s.prototype.h=null;function Oi(e){return e.h||(e.h=e.i())}function qr(){}var Ue={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function js(){Y.call(this,"d")}H(js,Y);function Ks(){Y.call(this,"c")}H(Ks,Y);var ps;function Nn(){}H(Nn,$s);Nn.prototype.g=function(){return new XMLHttpRequest};Nn.prototype.i=function(){return{}};ps=new Nn;function qe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new De(this),this.P=su,e=hs?125:void 0,this.W=new Cn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Br}function Br(){this.i=null,this.g="",this.h=!1}var su=45e3,ms={},dn={};g=qe.prototype;g.setTimeout=function(e){this.P=e};function ys(e,t,n){e.K=1,e.v=bn(yt(t)),e.s=n,e.U=!0,$r(e,null)}function $r(e,t){e.F=Date.now(),Be(e),e.A=yt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Xr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Br,e.g=mo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ja(z(e.Ia,e,e.g),e.O)),Or(e.V,e.g,"readystatechange",e.gb),t=e.H?Tr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ne(),Za(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&mt(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const c=mt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||hs||this.g&&(this.h.h||this.g.ga()||Pi(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?Ne(3):Ne(2)),xn(this);var n=this.g.ba();this.N=n;e:if(jr(this)){var s=Pi(this.g);e="";var i=s.length,r=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){bt(this),we(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,tu(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cn(a)){var h=a;break e}}h=null}if(n=h)Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vs(this,n);else{this.i=!1,this.o=3,tt(12),bt(this),we(this);break t}}this.U?(Kr(this,c,o),hs&&this.i&&c==3&&(Or(this.V,this.W,"tick",this.fb),this.W.start())):(Xt(this.j,this.m,o,null),vs(this,o)),c==4&&bt(this),this.i&&!this.I&&(c==4?lo(this.l,this):(this.i=!1,Be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),bt(this),we(this)}}}catch{}finally{}};function jr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Kr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=iu(e,n),i==dn){t==4&&(e.o=4,tt(14),s=!1),Xt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ms){e.o=4,tt(15),Xt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Xt(e.j,e.m,i,null),vs(e,i);jr(e)&&i!=dn&&i!=ms&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zs(t),t.L=!0,tt(11))):(Xt(e.j,e.m,n,"[Invalid Chunked Response]"),bt(e),we(e))}g.fb=function(){if(this.g){var e=mt(this.g),t=this.g.ga();this.C<t.length&&(xn(this),Kr(this,e,t),this.i&&e!=4&&Be(this))}};function iu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?dn:(n=Number(t.substring(n,s)),isNaN(n)?ms:(s+=1,s+n>t.length?dn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,bt(this)};function Be(e){e.Y=Date.now()+e.P,zr(e,e.P)}function zr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Pe(z(e.eb,e),t)}function xn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(eu(this.j,this.A),this.K!=2&&(Ne(),tt(17)),bt(this),this.o=2,we(this)):zr(this,this.Y-e)};function we(e){e.l.G==0||e.I||lo(e.l,e)}function bt(e){xn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,qs(e.W),Vr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ws(n.i,e))){if(n.I=e.N,!e.J&&ws(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)mn(n),Ln(n);else break t;Js(n),tt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Pe(z(n.ab,n),6e3));if(1>=Jr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Rt(n,11)}else if((e.J||n.g==e)&&mn(n),!cn(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.i;!r.g&&(J(T,"spdy")||J(T,"quic")||J(T,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Qs(r,r.h),r.h=null))}if(s.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.sa=_,R(s.F,s.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=po(s,s.H?s.la:null,s.W),o.J){Zr(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(xn(a),Be(a)),s.g=o}else ho(s);0<n.l.length&&On(n)}else h[0]!="stop"&&h[0]!="close"||Rt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Rt(n,7):Ys(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}Ne(4)}catch{}}function ru(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(us(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function zs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(us(e)||typeof e=="string")Er(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(us(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=ru(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function ae(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ae)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=ae.prototype;g.R=function(){Gs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Gs(this),this.g.concat()};function Gs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ft(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Ft(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Ft(this.h,e)?this.h[e]:t};g.set=function(e,t){Ft(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Ft(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Gr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ou(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Pt){this.g=t!==void 0?t:e.g,fn(this,e.j),this.s=e.s,gn(this,e.i),pn(this,e.m),this.l=e.l,t=e.h;var n=new xe;n.i=t.i,t.g&&(n.g=new ae(t.g),n.h=t.h),Vi(this,n),this.o=e.o}else e&&(n=String(e).match(Gr))?(this.g=!!t,fn(this,n[1]||"",!0),this.s=Ee(n[2]||""),gn(this,n[3]||"",!0),pn(this,n[4]),this.l=Ee(n[5]||"",!0),Vi(this,n[6]||"",!0),this.o=Ee(n[7]||"")):(this.g=!!t,this.h=new xe(null,this.g))}Pt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ye(t,Mi,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ye(t,Mi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ye(n,n.charAt(0)=="/"?lu:cu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ye(n,fu)),e.join("")};function yt(e){return new Pt(e)}function fn(e,t,n){e.j=n?Ee(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gn(e,t,n){e.i=n?Ee(t,!0):t}function pn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Vi(e,t,n){t instanceof xe?(e.h=t,gu(e.h,e.g)):(n||(t=ye(t,du)),e.h=new xe(t,e.g))}function R(e,t,n){e.h.set(t,n)}function bn(e){return R(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function au(e){return e instanceof Pt?yt(e):new Pt(e,void 0)}function uu(e,t,n,s){var i=new Pt(null,void 0);return e&&fn(i,e),t&&gn(i,t),n&&pn(i,n),s&&(i.l=s),i}function Ee(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ye(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,hu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Mi=/[#\/\?@]/g,cu=/[#\?:]/g,lu=/[#\?]/g,du=/[#\?@]/g,fu=/#/g;function xe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Dt(e){e.g||(e.g=new ae,e.h=0,e.i&&ou(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=xe.prototype;g.add=function(e,t){Dt(this),this.i=null,e=ue(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Qr(e,t){Dt(e),t=ue(e,t),Ft(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ft(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gs(e)))}function Hr(e,t){return Dt(e),t=ue(e,t),Ft(e.g.h,t)}g.forEach=function(e,t){Dt(this),this.g.forEach(function(n,s){Er(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){Dt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){Dt(this);var t=[];if(typeof e=="string")Hr(this,e)&&(t=ki(t,this.g.get(ue(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ki(t,e[n])}return t};g.set=function(e,t){return Dt(this),this.i=null,e=ue(this,e),Hr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Xr(e,t,n){Qr(e,t),0<n.length&&(e.i=null,e.g.set(ue(e,t),Rs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function ue(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gu(e,t){t&&!e.j&&(Dt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Qr(this,s),Xr(this,i,n))},e)),e.j=t}var pu=class{constructor(e,t){this.h=e,this.g=t}};function Wr(e){this.l=e||mu,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mu=10;function Yr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Jr(e){return e.h?1:e.g?e.g.size:0}function ws(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qs(e,t){e.g?e.g.add(t):e.h=t}function Zr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Wr.prototype.cancel=function(){if(this.i=to(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function to(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Rs(e.i)}function Hs(){}Hs.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Hs.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function yu(){this.g=new Hs}function vu(e,t,n){const s=n||"";try{zs(e,function(i,r){let o=i;Me(i)&&(o=Ps(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function wu(e,t){const n=new An;if(E.Image){const s=new Image;s.onload=Je(tn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Je(tn,n,s,"TestLoadImage: error",!1,t),s.onabort=Je(tn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Je(tn,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function tn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function $e(e){this.l=e.$b||null,this.j=e.ib||!1}H($e,$s);$e.prototype.g=function(){return new Rn(this.l,this.j)};$e.prototype.i=function(e){return function(){return e}}({});function Rn(e,t){B.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Rn,B);var Xs=0;g=Rn.prototype;g.open=function(e,t){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,be(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=Xs};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,be(this)),this.g&&(this.readyState=3,be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function eo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?je(this):be(this),this.readyState==3&&eo(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,je(this))};g.Ta=function(e){this.g&&(this.response=e,je(this))};g.ha=function(){this.g&&je(this)};function je(e){e.readyState=4,e.l=null,e.j=null,e.A=null,be(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Eu=E.JSON.parse;function F(e){B.call(this),this.headers=new ae,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=no,this.K=this.L=!1}H(F,B);var no="",Tu=/^https?$/i,Iu=["POST","PUT"];g=F.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ps.g(),this.C=this.u?Oi(this.u):Oi(ps),this.g.onreadystatechange=z(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Fi(this,r);return}e=n||"";const i=new ae(this.headers);s&&zs(s,function(r,o){i.set(o,r)}),s=La(i.T()),n=E.FormData&&e instanceof E.FormData,!(0<=wr(Iu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ro(this),0<this.B&&((this.K=Su(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.pa,this)):this.A=Bs(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Fi(this,r)}};function Su(e){return te&&Pa()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Cu(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof bs!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Fi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,so(e),_n(e)}function so(e){e.D||(e.D=!0,G(e,"complete"),G(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,G(this,"complete"),G(this,"abort"),_n(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_n(this,!0)),F.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?io(this):this.cb())};g.cb=function(){io(this)};function io(e){if(e.h&&typeof bs!="undefined"&&(!e.C[1]||mt(e)!=4||e.ba()!=2)){if(e.v&&mt(e)==4)Bs(e.Fa,0,e);else if(G(e,"readystatechange"),mt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Gr)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!Tu.test(i?i.toLowerCase():"")}n=s}if(n)G(e,"complete"),G(e,"success");else{e.m=6;try{var o=2<mt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",so(e)}}finally{_n(e)}}}}function _n(e,t){if(e.g){ro(e);const n=e.g,s=e.C[0]?hn:null;e.g=null,e.C=null,t||G(e,"ready");try{n.onreadystatechange=s}catch{}}}function ro(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function mt(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Eu(t)}};function Pi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case no:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Au(e){let t="";return _s(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ws(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Au(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):R(e,t,n))}function me(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function oo(e){this.za=0,this.l=[],this.h=new An,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=me("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=me("baseRetryDelayMs",5e3,e),this.$a=me("retryDelaySeedMs",1e4,e),this.Ya=me("forwardChannelMaxRetries",2,e),this.ra=me("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Wr(e&&e.concurrentRequestLimit),this.Ca=new yu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=oo.prototype;g.ma=8;g.G=1;function Ys(e){if(ao(e),e.G==3){var t=e.V++,n=yt(e.F);R(n,"SID",e.J),R(n,"RID",t),R(n,"TYPE","terminate"),Ke(e,n),t=new qe(e,e.h,t,void 0),t.K=2,t.v=bn(yt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=mo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Be(t)}go(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Ln(e){e.g&&(Zs(e),e.g.cancel(),e.g=null)}function ao(e){Ln(e),e.u&&(E.clearTimeout(e.u),e.u=null),mn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function ss(e,t){e.l.push(new pu(e.Za++,t)),e.G==3&&On(e)}function On(e){Yr(e.i)||e.m||(e.m=!0,Us(e.Ha,e),e.C=0)}function ku(e,t){return Jr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Pe(z(e.Ha,e,t),fo(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new qe(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=Tr(r),Ir(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=uo(this,i,t),n=yt(this.F),R(n,"RID",e),R(n,"CVER",22),this.D&&R(n,"X-HTTP-Session-Id",this.D),Ke(this,n),this.o&&r&&Ws(n,this.o,r),Qs(this.i,i),this.Ra&&R(n,"TYPE","init"),this.ja?(R(n,"$req",t),R(n,"SID","null"),i.$=!0,ys(i,n,null)):ys(i,n,t),this.G=2}}else this.G==3&&(e?Ui(this,e):this.l.length==0||Yr(this.i)||Ui(this))};function Ui(e,t){var n;t?n=t.m:n=e.V++;const s=yt(e.F);R(s,"SID",e.J),R(s,"RID",n),R(s,"AID",e.U),Ke(e,s),e.o&&e.s&&Ws(s,e.o,e.s),n=new qe(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=uo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Qs(e.i,n),ys(n,s,t)}function Ke(e,t){e.j&&zs({},function(n,s){R(t,s,n)})}function uo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?z(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{vu(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function ho(e){e.g||e.u||(e.Y=1,Us(e.Ga,e),e.A=0)}function Js(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Pe(z(e.Ga,e),fo(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,co(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Pe(z(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tt(10),Ln(this),co(this))};function Zs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function co(e){e.g=new qe(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=yt(e.oa);R(t,"RID","rpc"),R(t,"SID",e.J),R(t,"CI",e.N?"0":"1"),R(t,"AID",e.U),Ke(e,t),R(t,"TYPE","xmlhttp"),e.o&&e.s&&Ws(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=bn(yt(t)),n.s=null,n.U=!0,$r(n,e)}g.ab=function(){this.v!=null&&(this.v=null,Ln(this),Js(this),tt(19))};function mn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function lo(e,t){var n=null;if(e.g==t){mn(e),Zs(e),e.g=null;var s=2}else if(ws(e.i,t))n=t.D,Zr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=kn(),G(s,new Pr(s,n)),On(e)}else ho(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&ku(e,t)||s==2&&Js(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Rt(e,5);break;case 4:Rt(e,10);break;case 3:Rt(e,6);break;default:Rt(e,2)}}}function fo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Rt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=z(e.jb,e);n||(n=new Pt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||fn(n,"https"),bn(n)),wu(n.toString(),s)}else tt(2);e.G=0,e.j&&e.j.va(t),go(e),ao(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),tt(2)):(this.h.info("Failed to ping google.com"),tt(1))};function go(e){e.G=0,e.I=-1,e.j&&((to(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Rs(e.l),e.l.length=0),e.j.ua())}function po(e,t,n){let s=au(n);if(s.i!="")t&&gn(s,t+"."+s.i),pn(s,s.m);else{const i=E.location;s=uu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&_s(e.aa,function(i,r){R(s,r,i)}),t=e.D,n=e.sa,t&&n&&R(s,t,n),R(s,"VER",e.ma),Ke(e,s),s}function mo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new F(new $e({ib:!0})):new F(e.qa),t.L=e.H,t}function yo(){}g=yo.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function yn(){if(te&&!(10<=Number(Ua)))throw Error("Environmental error: no available transport.")}yn.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){B.call(this),this.g=new oo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!cn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new he(this)}H(ht,B);ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Us(z(e.hb,e,t))),tt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=po(e,null,e.W),On(e)};ht.prototype.close=function(){Ys(this.g)};ht.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,ss(this.g,t)}else this.v?(t={},t.__data__=Ps(e),ss(this.g,t)):ss(this.g,e)};ht.prototype.M=function(){this.g.j=null,delete this.j,Ys(this.g),delete this.g,ht.Z.M.call(this)};function vo(e){js.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(vo,js);function wo(){Ks.call(this),this.status=1}H(wo,Ks);function he(e){this.g=e}H(he,yo);he.prototype.xa=function(){G(this.g,"a")};he.prototype.wa=function(e){G(this.g,new vo(e))};he.prototype.va=function(e){G(this.g,new wo)};he.prototype.ua=function(){G(this.g,"b")};yn.prototype.createWebChannel=yn.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Dn.NO_ERROR=0;Dn.TIMEOUT=8;Dn.HTTP_ERROR=6;Ur.COMPLETE="complete";qr.EventType=Ue;Ue.OPEN="a";Ue.CLOSE="b";Ue.ERROR="c";Ue.MESSAGE="d";B.prototype.listen=B.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var Du=function(){return new yn},Nu=function(){return kn()},is=Dn,xu=Ur,bu=$t,qi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ru=$e,en=qr,_u=F;const Bi="@firebase/firestore";/**
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
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let ce="9.9.0";/**
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
 */const Ut=new pa("@firebase/firestore");function $i(){return Ut.logLevel}function y(e,...t){if(Ut.logLevel<=Ae.DEBUG){const n=t.map(ti);Ut.debug(`Firestore (${ce}): ${e}`,...n)}}function It(e,...t){if(Ut.logLevel<=Ae.ERROR){const n=t.map(ti);Ut.error(`Firestore (${ce}): ${e}`,...n)}}function ji(e,...t){if(Ut.logLevel<=Ae.WARN){const n=t.map(ti);Ut.warn(`Firestore (${ce}): ${e}`,...n)}}function ti(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ce}) INTERNAL ASSERTION FAILED: `+e;throw It(t),new Error(t)}function M(e,t){e||I()}function k(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends va{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Lu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ou{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Vu{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Lt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Lt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Lu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new nt(t)}}class Mu{constructor(t,n,s){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Fu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Mu(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.p=n.token,new Pu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Bu{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=qu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function ee(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class rt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new rt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new rt(0,0))}static max(){return new S(new rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Re{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends Re{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const $u=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Re{construct(t,n,s){return new st(t,n,s)}static isValidIdentifier(t){return $u.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(L.fromString(t))}static fromName(t){return new v(L.fromString(t).popFirst(5))}static empty(){return new v(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new L(t.slice()))}}function ju(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new St(i,v.empty(),t)}function Ku(e){return new St(e.readTime,e.key,-1)}class St{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new St(S.min(),v.empty(),-1)}static max(){return new St(S.max(),v.empty(),-1)}}function zu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
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
 */const Gu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ei(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Gu)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(c=>{o[h]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function ze(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class ni{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
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
 */function Ki(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Vn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Hu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */ni.ot=-1;class ${constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nn(this.root,t,this.comparator,!0)}}class nn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:j.RED,this.left=i!=null?i:j.EMPTY,this.right=r!=null?r:j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new j(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return j.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class P{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zi(this.data.getIterator())}getIteratorFrom(t){return new zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof P)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new P(this.comparator);return n.data=t,n}}class zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Ot([])}unionWith(t){let n=new P(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ee(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Q{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Q(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new Q(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const Xu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(e){if(M(!!e),typeof e=="string"){let t=0;const n=Xu.exec(e);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ne(e){return typeof e=="string"?Q.fromBase64String(e):Q.fromUint8Array(e)}/**
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
 */function Eo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function To(e){const t=e.mapValue.fields.__previous_value__;return Eo(t)?To(t):t}function _e(e){const t=Ct(e.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
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
 */class Wu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class se{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new se("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof se&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Mn(e){return e==null}function Es(e){return e===0&&1/e==-1/0}/**
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
 */const sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Eo(e)?4:Yu(e)?9007199254740991:10:I()}function ft(e,t){if(e===t)return!0;const n=qt(e);if(n!==qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _e(e).isEqual(_e(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ct(s.timestampValue),o=Ct(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ne(s.bytesValue).isEqual(ne(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?Es(r)===Es(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return ee(e.arrayValue.values||[],t.arrayValue.values||[],ft);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ki(r)!==Ki(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ft(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Le(e,t){return(e.values||[]).find(n=>ft(n,t))!==void 0}function ie(e,t){if(e===t)return 0;const n=qt(e),s=qt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Gi(e.timestampValue,t.timestampValue);case 4:return Gi(_e(e),_e(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ne(i),a=ne(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=D(o[u],a[u]);if(h!==0)return h}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=D(V(i.latitude),V(r.latitude));return o!==0?o:D(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=ie(o[u],a[u]);if(h)return h}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===sn.mapValue&&r===sn.mapValue)return 0;if(i===sn.mapValue)return 1;if(r===sn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=D(a[c],h[c]);if(l!==0)return l;const p=ie(o[a[c]],u[h[c]]);if(p!==0)return p}return D(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Gi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Ct(e),s=Ct(t),i=D(n.seconds,s.seconds);return i!==0?i:D(n.nanos,s.nanos)}function Yt(e){return Ts(e)}function Ts(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Ct(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ne(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ts(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ts(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Is(e){return!!e&&"integerValue"in e}function si(e){return!!e&&"arrayValue"in e}function Qi(e){return!!e&&"nullValue"in e}function Hi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rs(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Vn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Te(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!rs(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Te(n)}setAll(t){let n=st.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Te(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());rs(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ft(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];rs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Vn(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new dt(Te(this.value))}}/**
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
 */class K{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new K(t,0,S.min(),S.min(),dt.empty(),0)}static newFoundDocument(t,n,s){return new K(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new K(t,2,n,S.min(),dt.empty(),0)}static newUnknownDocument(t,n){return new K(t,3,n,S.min(),dt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof K&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ju{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Xi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Ju(e,t,n,s,i,r,o)}function ii(e){const t=k(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Yt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Mn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Yt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Yt(s)).join(",")),t.ut=n}return t.ut}function Zu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Yt(s.value)}`;var s}).join(", ")}]`),Mn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Yt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Yt(n)).join(",")),`Target(${t})`}function ri(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ah(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ft(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yi(e.startAt,t.startAt)&&Yi(e.endAt,t.endAt)}function Ss(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class it extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new th(t,n,s):n==="array-contains"?new sh(t,s):n==="in"?new ih(t,s):n==="not-in"?new rh(t,s):n==="array-contains-any"?new oh(t,s):new it(t,n,s)}static ct(t,n,s){return n==="in"?new eh(t,s):new nh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(ie(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.at(ie(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class th extends it{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.at(n)}}class eh extends it{constructor(t,n){super(t,"in",n),this.keys=Io("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class nh extends it{constructor(t,n){super(t,"not-in",n),this.keys=Io("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Io(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class sh extends it{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return si(n)&&Le(n.arrayValue,this.value)}}class ih extends it{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Le(this.value.arrayValue,n)}}class rh extends it{constructor(t,n){super(t,"not-in",n)}matches(t){if(Le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Le(this.value.arrayValue,n)}}class oh extends it{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!si(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Le(this.value.arrayValue,s))}}class vn{constructor(t,n){this.position=t,this.inclusive=n}}class Ie{constructor(t,n="asc"){this.field=t,this.dir=n}}function ah(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Wi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=ie(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ft(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Fn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function uh(e,t,n,s,i,r,o,a){return new Fn(e,t,n,s,i,r,o,a)}function So(e){return new Fn(e)}function hh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ch(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function lh(e){for(const t of e.filters)if(t.ht())return t.field;return null}function dh(e){return e.collectionGroup!==null}function Oe(e){const t=k(e);if(t.lt===null){t.lt=[];const n=lh(t),s=ch(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new Ie(n)),t.lt.push(new Ie(st.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Ie(st.keyField(),r))}}}return t.lt}function Bt(e){const t=k(e);if(!t.ft)if(t.limitType==="F")t.ft=Xi(t.path,t.collectionGroup,Oe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Oe(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ie(r.field,o))}const s=t.endAt?new vn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new vn(t.startAt.position,t.startAt.inclusive):null;t.ft=Xi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.ft}function fh(e,t,n){return new Fn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Pn(e,t){return ri(Bt(e),Bt(t))&&e.limitType===t.limitType}function Co(e){return`${ii(Bt(e))}|lt:${e.limitType}`}function Cs(e){return`Query(target=${Zu(Bt(e))}; limitType=${e.limitType})`}function oi(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Wi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Oe(n),s)||n.endAt&&!function(i,r,o){const a=Wi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Oe(n),s))}(e,t)}function gh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ao(e){return(t,n)=>{let s=!1;for(const i of Oe(e)){const r=ph(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ph(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ie(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function mh(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Es(t)?"-0":t}}function yh(e){return{integerValue:""+e}}/**
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
 */class Un{constructor(){this._=void 0}}function vh(e,t,n){return e instanceof As?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof wn?ko(e,t):e instanceof En?Do(e,t):function(s,i){const r=Eh(s,i),o=Ji(r)+Ji(s._t);return Is(r)&&Is(s._t)?yh(o):mh(s.wt,o)}(e,t)}function wh(e,t,n){return e instanceof wn?ko(e,t):e instanceof En?Do(e,t):n}function Eh(e,t){return e instanceof ks?Is(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class As extends Un{}class wn extends Un{constructor(t){super(),this.elements=t}}function ko(e,t){const n=No(t);for(const s of e.elements)n.some(i=>ft(i,s))||n.push(s);return{arrayValue:{values:n}}}class En extends Un{constructor(t){super(),this.elements=t}}function Do(e,t){let n=No(t);for(const s of e.elements)n=n.filter(i=>!ft(i,s));return{arrayValue:{values:n}}}class ks extends Un{constructor(t,n){super(),this.wt=t,this._t=n}}function Ji(e){return V(e.integerValue||e.doubleValue)}function No(e){return si(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Th(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof wn&&s instanceof wn||n instanceof En&&s instanceof En?ee(n.elements,s.elements,ft):n instanceof ks&&s instanceof ks?ft(n._t,s._t):n instanceof As&&s instanceof As}(e.transform,t.transform)}class Vt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function on(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ai{}function xo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Sh(e.key,Vt.none()):new ui(e.key,e.data,Vt.none());{const n=e.data,s=dt.empty();let i=new P(st.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new qn(e.key,s,new Ot(i.toArray()),Vt.none())}}function Ih(e,t,n){e instanceof ui?function(s,i,r){const o=s.value.clone(),a=tr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof qn?function(s,i,r){if(!on(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=tr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(bo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Se(e,t,n,s){return e instanceof ui?function(i,r,o,a){if(!on(i.precondition,r))return o;const u=i.value.clone(),h=er(i.fieldTransforms,a,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof qn?function(i,r,o,a){if(!on(i.precondition,r))return o;const u=er(i.fieldTransforms,a,r),h=r.data;return h.setAll(bo(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,s):function(i,r,o){return on(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ee(n,s,(i,r)=>Th(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ui extends ai{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qn extends ai{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function tr(e,t,n){const s=new Map;M(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,wh(o,a,n[i]))}return s}function er(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,vh(r,o,t))}return s}class Sh extends ai{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ch{constructor(t){this.count=t}}/**
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
 */var O,C;function Ro(e){if(e===void 0)return It("GRPC error has no .code"),f.UNKNOWN;switch(e){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(C=O||(O={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class le{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Vn(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}}/**
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
 */const Ah=new $(v.comparator);function At(){return Ah}const _o=new $(v.comparator);function ve(...e){let t=_o;for(const n of e)t=t.insert(n.key,n);return t}function kh(e){let t=_o;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function _t(){return Ce()}function Lo(){return Ce()}function Ce(){return new le(e=>e.toString(),(e,t)=>e.isEqual(t))}new $(v.comparator);const Dh=new P(v.comparator);function A(...e){let t=Dh;for(const n of e)t=t.add(n);return t}const Nh=new P(D);function Oo(){return Nh}/**
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
 */class Bn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ge.createSynthesizedTargetChangeForCurrentChange(t,n)),new Bn(S.min(),s,Oo(),At(),A())}}class Ge{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ge(Q.EMPTY_BYTE_STRING,n,A(),A(),A())}}/**
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
 */class an{constructor(t,n,s,i){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=i}}class Vo{constructor(t,n){this.targetId=t,this.It=n}}class Mo{constructor(t,n,s=Q.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class nr{constructor(){this.Tt=0,this.Et=ir(),this.At=Q.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=A(),n=A(),s=A();return this.Et.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Ge(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=ir()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class xh{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=At(),this.Bt=sr(),this.Lt=new P(D)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(t){const n=t.targetId,s=t.It.count,i=this.Ht(n);if(i){const r=i.target;if(Ss(r))if(s===0){const o=new v(r.path);this.Kt(n,o,K.newNoDocument(o,S.min()))}else M(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&Ss(a.target)){const u=new v(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,K.newNoDocument(u,t))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=A();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ht(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(t));const i=new Bn(t,n,this.Lt,this.$t,s);return this.$t=At(),this.Bt=sr(),this.Lt=new P(D),i}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new nr,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new P(D),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new nr),this.Mt.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Mt.getRemoteKeysForTarget(t).has(n)}}function sr(){return new $(v.comparator)}function ir(){return new $(v.comparator)}/**
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
 */const bh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _h{constructor(t,n){this.databaseId=t,this.dt=n}}function Lh(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Oh(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Ve(e){return M(!!e),S.fromTimestamp(function(t){const n=Ct(t);return new rt(n.seconds,n.nanos)}(e))}function Vh(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Fo(e){const t=L.fromString(e);return M(qo(t)),t}function os(e,t){const n=Fo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(Po(n))}function Ds(e,t){return Vh(e.databaseId,t)}function Mh(e){const t=Fo(e);return t.length===4?L.emptyPath():Po(t)}function rr(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Po(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Fh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.dt?(M(h===void 0||typeof h=="string"),Q.fromBase64String(h||"")):(M(h===void 0||h instanceof Uint8Array),Q.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?f.UNKNOWN:Ro(u.code);return new w(h,u.message||"")}(o);n=new Mo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=os(e,s.document.name),r=Ve(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=K.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new an(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=os(e,s.document),r=s.readTime?Ve(s.readTime):S.min(),o=K.newNoDocument(i,r),a=s.removedTargetIds||[];n=new an([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=os(e,s.document),r=s.removedTargetIds||[];n=new an([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Ch(i),o=s.targetId;n=new Vo(o,r)}}return n}function Ph(e,t){return{documents:[Ds(e,t.path)]}}function Uh(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ds(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ds(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if(Hi(l.value))return{unaryFilter:{field:Ht(l.field),op:"IS_NAN"}};if(Qi(l.value))return{unaryFilter:{field:Ht(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Hi(l.value))return{unaryFilter:{field:Ht(l.field),op:"IS_NOT_NAN"}};if(Qi(l.value))return{unaryFilter:{field:Ht(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ht(l.field),op:jh(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:Ht(c.field),direction:$h(c.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.dt||Mn(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function qh(e){let t=Mh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=Uo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new Ie(Wt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Mn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,p=c.values||[];return new vn(p,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,p=c.values||[];return new vn(p,l)}(n.endAt)),uh(t,i,o,r,a,"F",u,h)}function Bh(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Uo(e){return e?e.unaryFilter!==void 0?[zh(e)]:e.fieldFilter!==void 0?[Kh(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Uo(t)).reduce((t,n)=>t.concat(n)):I():[]}function $h(e){return bh[e]}function jh(e){return Rh[e]}function Ht(e){return{fieldPath:e.canonicalString()}}function Wt(e){return st.fromServerFormat(e.fieldPath)}function Kh(e){return it.create(Wt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function zh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Wt(e.unaryFilter.field);return it.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Wt(e.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wt(e.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wt(e.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function qo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Gh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Ih(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Se(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Se(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Lo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=xo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&ee(this.mutations,t.mutations,(n,s)=>Zi(n,s))&&ee(this.baseMutations,t.baseMutations,(n,s)=>Zi(n,s))}}/**
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
 */class Qh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Mt{constructor(t,n,s,i,r=S.min(),o=S.min(),a=Q.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Mt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Hh{constructor(t){this.ne=t}}function Xh(e){const t=qh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?fh(t,t.limit,"L"):t}/**
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
 */class Wh{constructor(){this.ze=new Yh}addToCollectionParentIndex(t,n){return this.ze.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(St.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(St.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Yh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new P(L.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new P(L.comparator)).toArray()}}/**
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
 */class re{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new re(0)}static Rn(){return new re(-1)}}/**
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
 */class Jh{constructor(){this.changes=new le(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,K.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Zh{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class tc{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&Se(s.mutation,i,Ot.empty(),rt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const i=_t();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=ve();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=_t();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=At();const o=Ce(),a=Ce();return n.forEach((u,h)=>{const c=s.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof qn)?r=r.insert(h.key,h):c!==void 0&&(o.set(h.key,c.mutation.getFieldMask()),Se(c.mutation,h,c.mutation.getFieldMask(),rt.now()))}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new Zh(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ce();let i=new $((o,a)=>o-a),r=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=s.get(u)||Ot.empty();c=a.applyToLocalView(h,c),s.set(u,c);const l=(i.get(a.batchId)||A()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=Lo();c.forEach(p=>{if(!r.has(p)){const m=xo(n.get(p),s.get(p));m!==null&&l.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):dh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(_t());let a=-1,u=r;return o.next(h=>d.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(c)?d.resolve():this.getBaseDocument(t,c,l).next(p=>{u=u.insert(c,p)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,A())).next(c=>({batchId:a,changes:kh(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let i=ve();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=ve();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(h,c){return new Fn(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const h=u.getKey();i.get(h)===null&&(i=i.insert(h,K.newInvalidDocument(h)))});let o=ve();return i.forEach((a,u)=>{const h=r.get(a);h!==void 0&&Se(h.mutation,u,Ot.empty(),rt.now()),oi(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve(K.newInvalidDocument(n))}}/**
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
 */class ec{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return d.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ve(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Xh(s.bundledQuery),readTime:Ve(s.readTime)}}(n)),d.resolve()}}/**
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
 */class nc{constructor(){this.overlays=new $(v.comparator),this.Xn=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=_t();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ie(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=_t(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new $((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=_t(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=_t(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return d.resolve(a)}ie(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Qh(n,s));let r=this.Xn.get(n);r===void 0&&(r=A(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
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
 */class hi{constructor(){this.Zn=new P(q.ts),this.es=new P(q.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new q(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new q(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new v(new L([])),s=new q(n,t),i=new q(n,t+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new v(new L([])),s=new q(n,t),i=new q(n,t+1);let r=A();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new q(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class q{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return v.comparator(t.key,n.key)||D(t.ls,n.ls)}static ns(t,n){return D(t.ls,n.ls)||v.comparator(t.key,n.key)}}/**
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
 */class sc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new P(q.ts)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new q(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new P(D);return n.forEach(i=>{const r=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),d.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new q(new v(r),0);let a=new P(D);return this.ds.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.ls)),!0)},o),d.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){M(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return d.forEach(n.mutations,i=>{const r=new q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new q(n,0),i=this.ds.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ic{constructor(t){this.ps=t,this.docs=new $(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():K.newInvalidDocument(n))}getEntries(t,n){let s=At();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():K.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=At();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||zu(Ku(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Is(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new rc(this)}getSize(t){return d.resolve(this.size)}}class rc extends Jh{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(t,i)):this.zn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
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
 */class oc{constructor(t){this.persistence=t,this.Ts=new le(n=>ii(n),ri),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Es=0,this.As=new hi,this.targetCount=0,this.Rs=re.An()}forEachTarget(t,n){return this.Ts.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),d.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new re(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.vn(n),d.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.As.containsKey(n))}}/**
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
 */class ac{constructor(t,n){this.bs={},this.overlays={},this.Ps=new ni(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new oc(this),this.indexManager=new Wh,this.remoteDocumentCache=function(s){return new ic(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Hh(n),this.Ds=new ec(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new sc(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new uc(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(t,n){return d.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class uc extends Qu{constructor(t){super(),this.currentSequenceNumber=t}}class ci{constructor(t){this.persistence=t,this.ks=new hi,this.Os=null}static Ms(t){return new ci(t)}get Fs(){if(this.Os)return this.Os;throw I()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),d.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Os=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Fs,s=>{const i=v.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.Os=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return d.or([()=>d.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
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
 */class li{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(t,n){let s=A(),i=A();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new li(t,n.fromCache,s,i)}}/**
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
 */class hc{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ci(t,n).next(r=>r||this.xi(t,n,i,s)).next(r=>r||this.Ni(t,n))}Ci(t,n){return d.resolve(null)}xi(t,n,s,i){return hh(n)||i.isEqual(S.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(t,n):($i()<=Ae.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cs(n)),this.Mi(t,o,n,ju(i,-1)))})}ki(t,n){let s=new P(Ao(t));return n.forEach((i,r)=>{oi(t,r)&&(s=s.add(r))}),s}Oi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,n){return $i()<=Ae.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.Di.getDocumentsMatchingQuery(t,n,St.min())}Mi(t,n,s,i){return this.Di.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class cc{constructor(t,n,s,i){this.persistence=t,this.Fi=n,this.wt=i,this.$i=new $(D),this.Bi=new le(r=>ii(r),ri),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tc(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function lc(e,t,n,s){return new cc(e,t,n,s)}async function Bo(e,t){const n=k(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=A();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(h=>({Ki:h,removedBatchIds:o,addedBatchIds:a}))})})}function $o(e){const t=k(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function dc(e,t){const n=k(e),s=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];t.targetChanges.forEach((c,l)=>{const p=i.get(l);if(!p)return;a.push(n.Vs.removeMatchingKeys(r,c.removedDocuments,l).next(()=>n.Vs.addMatchingKeys(r,c.addedDocuments,l)));let m=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?m=m.withResumeToken(Q.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,s)),i=i.insert(l,m),function(T,_,b){return T.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(p,m,c)&&a.push(n.Vs.updateTargetData(r,m))});let u=At(),h=A();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(fc(r,o,t.documentUpdates).next(c=>{u=c.Gi,h=c.Qi})),!s.isEqual(S.min())){const c=n.Vs.getLastRemoteSnapshotVersion(r).next(l=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.$i=i,r))}function fc(e,t,n){let s=A(),i=A();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=At();return n.forEach((a,u)=>{const h=r.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{Gi:o,Qi:i}})}function gc(e,t){const n=k(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new Mt(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function Ns(e,t,n){const s=k(e),i=s.$i.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ze(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(i.target)}function or(e,t,n){const s=k(e);let i=S.min(),r=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=k(a),l=c.Bi.get(h);return l!==void 0?d.resolve(c.$i.get(l)):c.Vs.getTargetData(u,h)}(s,o,Bt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?r:A())).next(a=>(pc(s,gh(t),a),{documents:a,ji:r})))}function pc(e,t,n){let s=S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Li.set(t,s)}class ar{constructor(){this.activeTargetIds=Oo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mc{constructor(){this.Fr=new ar,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new ar,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yc{Br(t){}shutdown(){}}/**
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
 */class ur{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class wc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class Ec extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(t,o,a,s).then(u=>(y("RestConnection","Received: ",u),u),u=>{throw ji("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}ao(t,n,s,i,r,o){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ce,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=vc[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new _u;a.listenOnce(xu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case is.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case is.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const c=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const T=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(T)>=0?T:f.UNKNOWN}(l.status);o(new w(p,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Du(),o=Nu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ru({})),this.uo(a.initMessageHeaders,n,s),Ta()||Ia()||Sa()||Ca()||Aa()||ka()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");y("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const p=new wc({jr:T=>{l?y("Connection","Not sending because WebChannel is closed:",T):(c||(y("Connection","Opening WebChannel transport."),h.open(),c=!0),y("Connection","WebChannel sending:",T),h.send(T))},Wr:()=>h.close()}),m=(T,_,b)=>{T.listen(_,ot=>{try{b(ot)}catch(at){setTimeout(()=>{throw at},0)}})};return m(h,en.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(h,en.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),p.eo())}),m(h,en.EventType.ERROR,T=>{l||(l=!0,ji("Connection","WebChannel transport errored:",T),p.eo(new w(f.UNAVAILABLE,"The operation could not be completed")))}),m(h,en.EventType.MESSAGE,T=>{var _;if(!l){const b=T.data[0];M(!!b);const ot=b,at=ot.error||((_=ot[0])===null||_===void 0?void 0:_.error);if(at){y("Connection","WebChannel received error:",at);const gt=at.status;let et=function(Kt){const zt=O[Kt];if(zt!==void 0)return Ro(zt)}(gt),jt=at.message;et===void 0&&(et=f.INTERNAL,jt="Unknown error status: "+gt+" with message "+at.message),l=!0,p.eo(new w(et,jt)),h.close()}else y("Connection","WebChannel received:",b),p.no(b)}}),m(o,bu.STAT_EVENT,T=>{T.stat===qi.PROXY?y("Connection","Detected buffering proxy"):T.stat===qi.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function as(){return typeof document!="undefined"?document:null}/**
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
 */function jo(e){return new _h(e,!0)}class Ko{constructor(t,n,s=1e3,i=1.5,r=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Tc{constructor(t,n,s,i,r,o,a,u){this.js=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ko(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ic extends Tc{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Fh(this.wt,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?Ve(r.readTime):S.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=rr(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ss(a)?{documents:Ph(i,a)}:{query:Uh(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Oh(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Lh(i,r.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=Bh(this.wt,t);s&&(n.labels=s),this.Mo(n)}jo(t){const n={};n.database=rr(this.wt),n.removeTarget=t,this.Mo(n)}}/**
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
 */class Sc extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}ao(t,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Cc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(It(n),this.su=!1):y("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class Ac{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{He(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=k(a);u.lu.add(4),await Qe(u),u._u.set("Unknown"),u.lu.delete(4),await $n(u)}(this))})}),this._u=new Cc(s,i)}}async function $n(e){if(He(e))for(const t of e.fu)await t(!0)}async function Qe(e){for(const t of e.fu)await t(!1)}function zo(e,t){const n=k(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),gi(n)?fi(n):de(n).Co()&&di(n,t))}function Go(e,t){const n=k(e),s=de(n);n.hu.delete(t),s.Co()&&Qo(n,t),n.hu.size===0&&(s.Co()?s.ko():He(n)&&n._u.set("Unknown"))}function di(e,t){e.wu.Nt(t.targetId),de(e).Qo(t)}function Qo(e,t){e.wu.Nt(t),de(e).jo(t)}function fi(e){e.wu=new xh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),de(e).start(),e._u.iu()}function gi(e){return He(e)&&!de(e).Do()&&e.hu.size>0}function He(e){return k(e).lu.size===0}function Ho(e){e.wu=void 0}async function kc(e){e.hu.forEach((t,n)=>{di(e,t)})}async function Dc(e,t){Ho(e),gi(e)?(e._u.uu(t),fi(e)):e._u.set("Unknown")}async function Nc(e,t,n){if(e._u.set("Online"),t instanceof Mo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await hr(e,s)}else if(t instanceof an?e.wu.Ut(t):t instanceof Vo?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(S.min()))try{const s=await $o(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.hu.get(u);h&&i.hu.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(Q.EMPTY_BYTE_STRING,u.snapshotVersion)),Qo(i,a);const h=new Mt(u.target,a,1,u.sequenceNumber);di(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await hr(e,s)}}async function hr(e,t,n){if(!ze(t))throw t;e.lu.add(1),await Qe(e),e._u.set("Offline"),n||(n=()=>$o(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await $n(e)})}async function cr(e,t){const n=k(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=He(n);n.lu.add(3),await Qe(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await $n(n)}async function xc(e,t){const n=k(e);t?(n.lu.delete(2),await $n(n)):t||(n.lu.add(2),await Qe(n),n._u.set("Unknown"))}function de(e){return e.mu||(e.mu=function(t,n,s){const i=k(t);return i.tu(),new Ic(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:kc.bind(null,e),Jr:Dc.bind(null,e),Go:Nc.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),gi(e)?fi(e):e._u.set("Unknown")):(await e.mu.stop(),Ho(e))})),e.mu}/**
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
 */class pi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new pi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xo(e,t){if(It("AsyncQueue",`${t}: ${e}`),ze(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Jt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=ve(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new Jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class lr{constructor(){this.yu=new $(v.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class oe{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new oe(t,n,Jt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class bc{constructor(){this.Iu=void 0,this.listeners=[]}}class Rc{constructor(){this.queries=new le(t=>Co(t),Pn),this.onlineState="Unknown",this.Tu=new Set}}async function _c(e,t){const n=k(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new bc),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Xo(o,`Initialization of query '${Cs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&mi(n)}async function Lc(e,t){const n=k(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Oc(e,t){const n=k(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&mi(n)}function Vc(e,t,n){const s=k(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function mi(e){e.Tu.forEach(t=>{t.next()})}class Mc{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
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
 */class Wo{constructor(t){this.key=t}}class Yo{constructor(t){this.key=t}}class Fc{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=A(),this.mutatedKeys=A(),this.Lu=Ao(t),this.Uu=new Jt(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new lr,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const p=i.get(c),m=oi(this.query,l)?l:null,T=!!p&&this.mutatedKeys.has(p.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?T!==_&&(s.track({type:3,doc:m}),b=!0):this.Qu(p,m)||(s.track({type:2,doc:m}),b=!0,(u&&this.Lu(m,u)>0||h&&this.Lu(m,h)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),b=!0):p&&!m&&(s.track({type:1,doc:p}),b=!0,(u||h)&&(a=!0)),b&&(m?(o=o.add(m),r=_?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort((h,c)=>function(l,p){const m=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(h.type,c.type)||this.Lu(h.doc,c.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,r.length!==0||u?{snapshot:new oe(this.query,t.Uu,i,r,t.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new lr,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=A(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new Yo(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new Wo(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=A();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return oe.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Pc{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Uc{constructor(t){this.key=t,this.Xu=!1}}class qc{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new le(a=>Co(a),Pn),this.ec=new Map,this.nc=new Set,this.sc=new $(v.comparator),this.ic=new Map,this.rc=new hi,this.oc={},this.uc=new Map,this.cc=re.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Bc(e,t){const n=Hc(e);let s,i;const r=n.tc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await gc(n.localStore,Bt(t));n.isPrimaryClient&&zo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await $c(n,t,s,a==="current")}return i}async function $c(e,t,n,s){e.hc=(c,l,p)=>async function(m,T,_,b){let ot=T.view.Ku(_);ot.Oi&&(ot=await or(m.localStore,T.query,!1).then(({documents:et})=>T.view.Ku(et,ot)));const at=b&&b.targetChanges.get(T.targetId),gt=T.view.applyChanges(ot,m.isPrimaryClient,at);return fr(m,T.targetId,gt.zu),gt.snapshot}(e,c,l,p);const i=await or(e.localStore,t,!0),r=new Fc(t,i.ji),o=r.Ku(i.documents),a=Ge.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);fr(e,n,u.zu);const h=new Pc(t,n,r);return e.tc.set(t,h),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),u.snapshot}async function jc(e,t){const n=k(e),s=n.tc.get(t),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!Pn(r,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ns(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Go(n.remoteStore,s.targetId),xs(n,s.targetId)}).catch(ei)):(xs(n,s.targetId),await Ns(n.localStore,s.targetId,!0))}async function Jo(e,t){const n=k(e);try{const s=await dc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?M(o.Xu):i.removedDocuments.size>0&&(M(o.Xu),o.Xu=!1))}),await ta(n,s,t)}catch(s){await ei(s)}}function dr(e,t,n){const s=k(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=k(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.Eu(o)&&(u=!0)}),u&&mi(a)}(s.eventManager,t),i.length&&s.Zu.Go(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Kc(e,t,n){const s=k(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ic.get(t),r=i&&i.key;if(r){let o=new $(v.comparator);o=o.insert(r,K.newNoDocument(r,S.min()));const a=A().add(r),u=new Bn(S.min(),new Map,new P(D),o,a);await Jo(s,u),s.sc=s.sc.remove(r),s.ic.delete(t),yi(s)}else await Ns(s.localStore,t,!1).then(()=>xs(s,t,n)).catch(ei)}function xs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||Zo(e,s)})}function Zo(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(Go(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),yi(e))}function fr(e,t,n){for(const s of n)s instanceof Wo?(e.rc.addReference(s.key,t),zc(e,s)):s instanceof Yo?(y("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||Zo(e,s.key)):I()}function zc(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.nc.add(s),yi(e))}function yi(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new v(L.fromString(t)),s=e.cc.next();e.ic.set(s,new Uc(n)),e.sc=e.sc.insert(n,s),zo(e.remoteStore,new Mt(Bt(So(n.path)),s,2,ni.ot))}}async function ta(e,t,n){const s=k(e),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,u)=>{o.push(s.hc(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=li.Vi(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,u){const h=k(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(u,l=>d.forEach(l.Pi,p=>h.persistence.referenceDelegate.addReference(c,l.targetId,p)).next(()=>d.forEach(l.vi,p=>h.persistence.referenceDelegate.removeReference(c,l.targetId,p)))))}catch(c){if(!ze(c))throw c;y("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const p=h.$i.get(l),m=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(m);h.$i=h.$i.insert(l,T)}}}(s.localStore,r))}async function Gc(e,t){const n=k(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Bo(n.localStore,t);n.currentUser=t,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ta(n,s.Ki)}}function Qc(e,t){const n=k(e),s=n.ic.get(t);if(s&&s.Xu)return A().add(s.key);{let i=A();const r=n.ec.get(t);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function Hc(e){const t=k(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kc.bind(null,t),t.Zu.Go=Oc.bind(null,t.eventManager),t.Zu.lc=Vc.bind(null,t.eventManager),t}class Xc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=jo(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return lc(this.persistence,new hc,t.initialUser,this.wt)}_c(t){return new ac(ci.Ms,this.wt)}dc(t){return new mc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wc{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>dr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gc.bind(null,this.syncEngine),await xc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Rc}createDatastore(t){const n=jo(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ec(i));var i;return function(r,o,a,u){return new Sc(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>dr(this.syncEngine,a,0),o=ur.V()?new ur:new yc,new Ac(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const c=new qc(s,i,r,o,a,u);return h&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=k(t);y("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Qe(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class Yc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Jc{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Bu.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Xo(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Zc(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Bo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function tl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await el(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>cr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>cr(t.remoteStore,r)),e.onlineComponents=t}async function el(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Zc(e,new Xc)),e.offlineComponents}async function nl(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await tl(e,new Wc)),e.onlineComponents}async function sl(e){const t=await nl(e),n=t.eventManager;return n.onListen=Bc.bind(null,t.syncEngine),n.onUnlisten=jc.bind(null,t.syncEngine),n}function il(e,t,n={}){const s=new Lt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new Yc({next:l=>{r.enqueueAndForget(()=>Lc(i,c)),l.fromCache&&a.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new Mc(o,h,{includeMetadataChanges:!0,Du:!0});return _c(i,c)}(await sl(e),e.asyncQueue,t,n,s)),s.promise}const gr=new Map;/**
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
 */function rl(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ol(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function pr(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function al(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function mr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=al(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class yr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ol("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class ea{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yr({}),this._settingsFrozen=!1,t instanceof se?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new se(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ou;switch(n.type){case"gapi":const s=n.client;return M(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Fu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=gr.get(t);n&&(y("ComponentProvider","Removing Datastore"),gr.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class fe{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fe(this.firestore,t,this._key)}}class jn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new jn(this.firestore,t,this._query)}}class Zt extends jn{constructor(t,n,s){super(t,n,So(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fe(this.firestore,null,new v(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function ul(e,t,...n){if(e=wa(e),rl("collection","path",t),e instanceof ea){const s=L.fromString(t,...n);return pr(s),new Zt(e,null,s)}{if(!(e instanceof fe||e instanceof Zt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return pr(s),new Zt(e.firestore,null,s)}}/**
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
 */class hl{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ko(this,"async_queue_retry"),this.Kc=()=>{const n=as();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=as();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=as();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Lt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!ze(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Oc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const i=pi.createAndSchedule(this,t,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&I()}verifyOperationInProgress(){}async zc(){let t;do t=this.Oc,await t;while(t!==this.Oc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class na extends ea{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new hl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||sa(this),this._firestoreClient.terminate()}}function cl(e=Ea()){return ya(e,"firestore").getImmediate()}function ll(e){return e._firestoreClient||sa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Wu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Jc(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class ia{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Tn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tn(Q.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Tn(Q.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class dl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}const fl=new RegExp("[~\\*/\\[\\]]");function gl(e,t,n){if(t.search(fl)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ia(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vr(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new w(f.INVALID_ARGUMENT,a+e+u)}/**
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
 */class ra{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(oa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pl extends ra{data(){return super.data()}}function oa(e,t){return typeof t=="string"?gl(e,t):t instanceof ia?t._internalPath:t._delegate._internalPath}/**
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
 */class rn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ml extends ra{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new un(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(oa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class un extends ml{data(t={}){return super.data(t)}}class yl{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new un(this._firestore,this._userDataWriter,s.key,s,new rn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new un(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new un(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:vl(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function wl(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class El{convertValue(t,n="none"){switch(qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Vn(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new dl(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=To(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_e(t));default:return null}}convertTimestamp(t){const n=Ct(t);return new rt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);M(qo(s));const i=new se(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||It(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class Tl extends El{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new fe(this.firestore,null,n)}}function Il(e){e=mr(e,jn);const t=mr(e.firestore,na),n=ll(t),s=new Tl(t);return wl(e._query),il(n,e._query).then(i=>new yl(t,s,e,i))}(function(e,t=!0){(function(n){ce=n})(ma),fa(new ga("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new na(i,new Vu(n.getProvider("auth-internal")),new Uu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Ai(Bi,"3.4.12",e),Ai(Bi,"3.4.12","esm2017")})();const{document:xt}=da;function Sl(e){let t,n,s,i,r,o,a,u,h,c,l,p=e[0]+1+"",m,T,_=e[2].length+"",b,ot,at,gt,et,jt,Kt,zt,vt,Gt,pt,Kn,zn,Qt,wt,Gn;return{c(){t=X("link"),n=X("link"),s=X("link"),i=X("link"),r=X("link"),o=ge(),a=X("section"),u=X("div"),h=X("div"),c=X("p"),l=Et("Question "),m=Et(p),T=Et(" out of "),b=Et(_),ot=ge(),at=X("br"),gt=ge(),et=X("p"),jt=Et("Your Result: "),Kt=Et(e[1]),zt=ge(),vt=X("div"),Gt=X("div"),pt=X("button"),Kn=Et("Finish Quiz!"),zn=ge(),Qt=X("div"),wt=X("button"),Gn=Et("Next Question"),this.h()},l(ct){const ut=ca('[data-svelte="svelte-zdkh2x"]',xt.head);t=W(ut,"LINK",{href:!0,rel:!0,integrity:!0,crossorigin:!0}),n=W(ut,"LINK",{rel:!0,href:!0}),s=W(ut,"LINK",{rel:!0,href:!0}),i=W(ut,"LINK",{href:!0,rel:!0}),r=W(ut,"LINK",{href:!0,rel:!0}),ut.forEach(U),o=pe(ct),a=W(ct,"SECTION",{class:!0});var Xe=lt(a);u=W(Xe,"DIV",{class:!0});var vi=lt(u);h=W(vi,"DIV",{class:!0});var We=lt(h);c=W(We,"P",{style:!0});var Nt=lt(c);l=Tt(Nt,"Question "),m=Tt(Nt,p),T=Tt(Nt," out of "),b=Tt(Nt,_),ot=pe(Nt),at=W(Nt,"BR",{}),Nt.forEach(U),gt=pe(We),et=W(We,"P",{style:!0,id:!0});var Qn=lt(et);jt=Tt(Qn,"Your Result: "),Kt=Tt(Qn,e[1]),Qn.forEach(U),We.forEach(U),vi.forEach(U),zt=pe(Xe),vt=W(Xe,"DIV",{class:!0});var Ye=lt(vt);Gt=W(Ye,"DIV",{class:!0});var wi=lt(Gt);pt=W(wi,"BUTTON",{class:!0,for:!0,id:!0,style:!0});var Ei=lt(pt);Kn=Tt(Ei,"Finish Quiz!"),Ei.forEach(U),wi.forEach(U),zn=pe(Ye),Qt=W(Ye,"DIV",{class:!0});var Ti=lt(Qt);wt=W(Ti,"BUTTON",{class:!0,for:!0,id:!0});var Ii=lt(wt);Gn=Tt(Ii,"Next Question"),Ii.forEach(U),Ti.forEach(U),Ye.forEach(U),Xe.forEach(U),this.h()},h(){xt.title="Quiz Page",x(t,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"),x(t,"rel","stylesheet"),x(t,"integrity","sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"),x(t,"crossorigin","anonymous"),x(n,"rel","preconnect"),x(n,"href","https://fonts.googleapis.com"),x(s,"rel","preconnect"),x(s,"href","https://fonts.gstatic.com"),x(i,"href","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"),x(i,"rel","stylesheet"),x(r,"href","https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"),x(r,"rel","stylesheet"),Hn(c,"font-size","20px"),Hn(et,"visibility","hidden"),x(et,"id","result"),x(h,"class","question-part svelte-l8lxhc"),x(u,"class","questions"),x(pt,"class","btn btn-primary transitionButtons svelte-l8lxhc"),x(pt,"for","flexRadioDefault1"),x(pt,"id","finishButton"),Hn(pt,"visibility","hidden"),x(Gt,"class","col-md-6"),x(wt,"class","btn btn-primary transitionButtons svelte-l8lxhc"),x(wt,"for","flexRadioDefault1"),x(wt,"id","nextButton"),x(Qt,"class","col-md-6 align-self-center"),x(vt,"class","buttons-container row g-3 svelte-l8lxhc"),x(a,"class","svelte-l8lxhc")},m(ct,ut){N(xt.head,t),N(xt.head,n),N(xt.head,s),N(xt.head,i),N(xt.head,r),Si(ct,o,ut),Si(ct,a,ut),N(a,u),N(u,h),N(h,c),N(c,l),N(c,m),N(c,T),N(c,b),N(c,ot),N(c,at),N(h,gt),N(h,et),N(et,jt),N(et,Kt),N(a,zt),N(a,vt),N(vt,Gt),N(Gt,pt),N(pt,Kn),N(vt,zn),N(vt,Qt),N(Qt,wt),N(wt,Gn)},p(ct,[ut]){ut&1&&p!==(p=ct[0]+1+"")&&Xn(m,p),ut&4&&_!==(_=ct[2].length+"")&&Xn(b,_),ut&2&&Xn(Kt,ct[1])},i:Ci,o:Ci,d(ct){U(t),U(n),U(s),U(i),U(r),ct&&U(o),ct&&U(a)}}}function Cl(e,t,n){let s=0,i=0,r=[];return la(async()=>{const o=cl(),a=ul(o,"questions"),u=await Il(a);n(2,r=u.docs.map(h=>h.data()))}),setTimeout(()=>{console.log("Hello Worlsdsadd!"),console.log(r)},3e3),console.log(r),[s,i,r]}class Dl extends aa{constructor(t){super(),ua(this,t,Cl,Sl,ha,{})}}export{Dl as default};
