import{S as re,i as ae,s as ue,e as z,k as A,t as P,c as b,a as T,m as N,h as V,d as v,b as a,g as K,H as r,j as F,F as ce,n as Y,X as fe,x as he,y as me,z as ve,r as O,p as M,C as pe,f as ge,U as _e,I as Z,J as ke,q as qe,K as ze,w as be,T as Ie,o as we}from"../chunks/index-a089e1db.js";import{B as $,V as ee,w as ye,T as Ee}from"../chunks/index.esm2017-8c7e9b39.js";import{g as Te,o as Ce,a as te}from"../chunks/index-90ebcfae-9888bf42.js";import"../chunks/index.esm2017-da53403b.js";import"../chunks/singletons-cdeec3fd.js";function se(u,s,e){const c=u.slice();return c[7]=s[e],c}function le(u){let s,e,c,q,_,p,n=u[7]+"",d,f;return{c(){s=z("div"),e=z("input"),_=A(),p=z("label"),d=P(n),f=A(),this.h()},l(h){s=b(h,"DIV",{class:!0});var m=T(s);e=b(m,"INPUT",{class:!0,type:!0,name:!0}),_=N(m),p=b(m,"LABEL",{class:!0,for:!0});var w=T(p);d=V(w,n),w.forEach(v),f=N(m),m.forEach(v),this.h()},h(){a(e,"class","inputs form-check-input"),a(e,"type","radio"),a(e,"name",c="question"+u[0]),e.value=q=u[2].indexOf(u[7]),a(p,"class","form-check-label svelte-7ek9rk"),a(p,"for","flexRadioDefault1"),a(s,"class","col-sm-3 svelte-7ek9rk")},m(h,m){K(h,s,m),r(s,e),r(s,_),r(s,p),r(p,d),r(s,f)},p(h,m){m&1&&c!==(c="question"+h[0])&&a(e,"name",c),m&4&&q!==(q=h[2].indexOf(h[7]))&&(e.value=q),m&4&&n!==(n=h[7]+"")&&F(d,n)},d(h){h&&v(s)}}}function Ae(u){let s,e,c,q,_,p,n,d,f,h,m,w=u[2],l=[];for(let t=0;t<w.length;t+=1)l[t]=le(se(u,w,t));return{c(){s=A(),e=z("section"),c=z("div"),q=A(),_=z("div"),p=A(),n=z("div"),d=z("div"),f=P(u[1]),h=A(),m=z("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){ce('[data-svelte="svelte-19pswq8"]',document.head).forEach(v),s=N(t),e=b(t,"SECTION",{class:!0});var i=T(e);c=b(i,"DIV",{class:!0}),T(c).forEach(v),q=N(i),_=b(i,"DIV",{class:!0}),T(_).forEach(v),p=N(i),n=b(i,"DIV",{class:!0});var y=T(n);d=b(y,"DIV",{class:!0,for:!0});var S=T(d);f=V(S,u[1]),S.forEach(v),h=N(y),m=b(y,"DIV",{class:!0});var C=T(m);for(let Q=0;Q<l.length;Q+=1)l[Q].l(C);C.forEach(v),y.forEach(v),i.forEach(v),this.h()},h(){document.title="Question - number",a(c,"class","d1"),a(_,"class","d2"),a(d,"class","question col-12 question-title svelte-7ek9rk"),a(d,"for","questionTitle"),a(m,"class","answers row g-3 options-form col-12 svelte-7ek9rk"),a(n,"class","question-form row svelte-7ek9rk"),a(e,"class","quizPage svelte-7ek9rk")},m(t,o){K(t,s,o),K(t,e,o),r(e,c),r(e,q),r(e,_),r(e,p),r(e,n),r(n,d),r(d,f),r(n,h),r(n,m);for(let i=0;i<l.length;i+=1)l[i].m(m,null)},p(t,[o]){if(o&2&&F(f,t[1]),o&5){w=t[2];let i;for(i=0;i<w.length;i+=1){const y=se(t,w,i);l[i]?l[i].p(y,o):(l[i]=le(y),l[i].c(),l[i].m(m,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=w.length}},i:Y,o:Y,d(t){t&&v(s),t&&v(e),fe(l,t)}}}function Ne(u,s,e){let{questionNumber:c}=s,{questionTitle:q}=s,{options:_}=s,{type:p}=s,{timeAlotted:n}=s,{correctResponseIndex:d}=s;return u.$$set=f=>{"questionNumber"in f&&e(0,c=f.questionNumber),"questionTitle"in f&&e(1,q=f.questionTitle),"options"in f&&e(2,_=f.options),"type"in f&&e(3,p=f.type),"timeAlotted"in f&&e(4,n=f.timeAlotted),"correctResponseIndex"in f&&e(5,d=f.correctResponseIndex)},[c,q,_,p,n,d]}class De extends re{constructor(s){super(),ae(this,s,Ne,Ae,ue,{questionNumber:0,questionTitle:1,options:2,type:3,timeAlotted:4,correctResponseIndex:5})}}const{document:L}=Ie;function oe(u,s,e){const c=u.slice();return c[13]=s[e],c[15]=e,c}function ne(u){let s,e,c,q=Re+u[15]+"",_,p,n=u[0].length+"",d,f,h,m,w;return h=new De({props:{questionNumber:u[13].questionNumber,questionTitle:u[13].question,options:u[13].options,type:u[13].type,timeAlotted:u[13].timeAlotted,correctResponseIndex:u[13].correctResponseIndex}}),{c(){s=z("div"),e=z("p"),c=P("Question "),_=P(q),p=P(" out of "),d=P(n),f=A(),he(h.$$.fragment),m=A(),this.h()},l(l){s=b(l,"DIV",{class:!0});var t=T(s);e=b(t,"P",{class:!0});var o=T(e);c=V(o,"Question "),_=V(o,q),p=V(o," out of "),d=V(o,n),o.forEach(v),f=N(t),me(h.$$.fragment,t),m=N(t),t.forEach(v),this.h()},h(){a(e,"class","header svelte-i6z0dc"),a(s,"class","q col-md-8 svelte-i6z0dc")},m(l,t){K(l,s,t),r(s,e),r(e,c),r(e,_),r(e,p),r(e,d),r(s,f),ve(h,s,null),r(s,m),w=!0},p(l,t){(!w||t&1)&&n!==(n=l[0].length+"")&&F(d,n);const o={};t&1&&(o.questionNumber=l[13].questionNumber),t&1&&(o.questionTitle=l[13].question),t&1&&(o.options=l[13].options),t&1&&(o.type=l[13].type),t&1&&(o.timeAlotted=l[13].timeAlotted),t&1&&(o.correctResponseIndex=l[13].correctResponseIndex),h.$set(o)},i(l){w||(O(h.$$.fragment,l),w=!0)},o(l){M(h.$$.fragment,l),w=!1},d(l){l&&v(s),pe(h)}}}function Qe(u){let s,e,c,q,_,p,n,d,f,h,m,w,l,t,o,i,y,S,C,Q,R,x,j,D=u[0],I=[];for(let g=0;g<D.length;g+=1)I[g]=ne(oe(u,D,g));const de=g=>M(I[g],1,1,()=>{I[g]=null});return{c(){s=z("link"),e=z("link"),c=z("link"),q=z("link"),_=z("link"),p=A(),n=z("section"),d=z("div"),f=z("div"),h=z("p"),m=P("Game ID: "),w=P(ie),l=A(),t=z("div"),o=z("p"),i=A(),y=z("div");for(let g=0;g<I.length;g+=1)I[g].c();S=A(),C=z("button"),Q=P("Finish and Show Results"),this.h()},l(g){const E=ce('[data-svelte="svelte-lftf5d"]',L.head);s=b(E,"LINK",{href:!0,rel:!0,integrity:!0,crossorigin:!0}),e=b(E,"LINK",{rel:!0,href:!0}),c=b(E,"LINK",{rel:!0,href:!0}),q=b(E,"LINK",{href:!0,rel:!0}),_=b(E,"LINK",{href:!0,rel:!0}),E.forEach(v),p=N(g),n=b(g,"SECTION",{class:!0});var k=T(n);d=b(k,"DIV",{class:!0});var B=T(d);f=b(B,"DIV",{class:!0});var W=T(f);h=b(W,"P",{});var U=T(h);m=V(U,"Game ID: "),w=V(U,ie),U.forEach(v),W.forEach(v),l=N(B),t=b(B,"DIV",{class:!0});var G=T(t);o=b(G,"P",{contenteditable:!0,id:!0,style:!0}),T(o).forEach(v),G.forEach(v),B.forEach(v),i=N(k),y=b(k,"DIV",{id:!0,class:!0});var X=T(y);for(let H=0;H<I.length;H+=1)I[H].l(X);X.forEach(v),S=N(k),C=b(k,"BUTTON",{class:!0});var J=T(C);Q=V(J,"Finish and Show Results"),J.forEach(v),k.forEach(v),this.h()},h(){L.title="Quiz Page",a(s,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"),a(s,"rel","stylesheet"),a(s,"integrity","sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"),a(s,"crossorigin","anonymous"),a(e,"rel","preconnect"),a(e,"href","https://fonts.googleapis.com"),a(c,"rel","preconnect"),a(c,"href","https://fonts.gstatic.com"),a(q,"href","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"),a(q,"rel","stylesheet"),a(_,"href","https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"),a(_,"rel","stylesheet"),a(f,"class","col-6"),a(o,"contenteditable","true"),a(o,"id","timer"),ge(o,"text-align","right"),u[1]===void 0&&_e(()=>u[3].call(o)),a(t,"class","col-6"),a(d,"class","row justify-content-between quizHeader svelte-i6z0dc"),a(y,"id","quiz"),a(y,"class","quiz svelte-i6z0dc"),a(C,"class","result-button btn btn-primary svelte-i6z0dc"),a(n,"class","CreateQuizzes svelte-i6z0dc")},m(g,E){r(L.head,s),r(L.head,e),r(L.head,c),r(L.head,q),r(L.head,_),K(g,p,E),K(g,n,E),r(n,d),r(d,f),r(f,h),r(h,m),r(h,w),r(d,l),r(d,t),r(t,o),u[1]!==void 0&&(o.textContent=u[1]),r(n,i),r(n,y);for(let k=0;k<I.length;k+=1)I[k].m(y,null);r(n,S),r(n,C),r(C,Q),R=!0,x||(j=[Z(o,"input",u[3]),Z(C,"click",ke(u[2]))],x=!0)},p(g,[E]){if(E&2&&g[1]!==o.textContent&&(o.textContent=g[1]),E&1){D=g[0];let k;for(k=0;k<D.length;k+=1){const B=oe(g,D,k);I[k]?(I[k].p(B,E),O(I[k],1)):(I[k]=ne(B),I[k].c(),O(I[k],1),I[k].m(y,null))}for(we(),k=D.length;k<I.length;k+=1)de(k);qe()}},i(g){if(!R){for(let E=0;E<D.length;E+=1)O(I[E]);R=!0}},o(g){I=I.filter(Boolean);for(let E=0;E<I.length;E+=1)M(I[E]);R=!1},d(g){v(s),v(e),v(c),v(q),v(_),g&&v(p),g&&v(n),fe(I,g),x=!1,ze(j)}}}let Re=1,ie="4A6985";function Pe(u,s,e){const c=Te(),q=c.currentUser;let _;q!==null&&(_=q.email),Ce(c,l=>{if(console.log("changed!"),l){l.uid;var t=document.getElementById("login-button");t.innerHTML="Sign Out"}else te("/login")});let p=0,n=[],d=[],f=[];be(async()=>{const l=$(),t=ee(l,"questions"),o=await ye(t);e(0,n=o.docs.map(i=>i.data()));for(let i=0;i<n.length;i++)d.push(n[i].correctResponseIndex),f.push(n[i].timeAlotted)});async function h(l){console.log("Hello World!");let o=document.getElementById("quiz").querySelectorAll(".answers");console.log(o);let i=0,y=0;for(let R=0;R<d.length;R++){let x=o[R].querySelectorAll(".inputs");console.log(x);for(let j=0;j<x.length;j++){let D=x[j];D.checked&&(i=parseInt(D.value)+1)}if(i==d[R])y++;else continue}let S=y;const C=$(),Q=ee(C,"results");console.log(_),await Ee(Q,{userEmail:_,userScore:S}),alert(y),te("/result")}let m="";setTimeout(()=>{for(let o=0;o<n.length;o++)p+=Number(n[o].timeAlotted)*60;setInterval(t,1e3);function l(){let o=Math.floor(p/60),i=p%60;return o+":"+i}function t(){p==-1?clearTimeout(p):(e(1,m="Time Remaining: "+l()),p--)}},3e3);function w(){m=this.textContent,e(1,m)}return[n,m,h,w]}class je extends re{constructor(s){super(),ae(this,s,Pe,Qe,ue,{})}}export{je as default};
