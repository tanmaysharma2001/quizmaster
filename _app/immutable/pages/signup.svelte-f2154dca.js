import{S as ee,i as te,s as ae,e as u,t as P,c as m,a as h,h as A,d as n,b as s,g as C,F as a,k as S,m as $,G as se,H as le,j as ie,E as j,w as re,x as ne,y as oe,q as ce,o as de,B as ue}from"../chunks/index-6e6a97b6.js";import{g as me,b as fe,a as X,c as pe}from"../chunks/index-90ebcfae-e60252f0.js";import"../chunks/index.esm2017-86d43a5f.js";import"../chunks/singletons-d1fb5791.js";function Y(g){let e,l;return{c(){e=u("div"),l=P("We'll never share your email with anyone else."),this.h()},l(t){e=m(t,"DIV",{id:!0,class:!0});var i=h(e);l=A(i,"We'll never share your email with anyone else."),i.forEach(n),this.h()},h(){s(e,"id","emailHelp"),s(e,"class","form-text")},m(t,i){C(t,e,i),a(e,l)},d(t){t&&n(e)}}}function Z(g){let e,l,t,i;return{c(){e=u("p"),l=P("Not a user? "),t=u("a"),i=P("Sign Up"),this.h()},l(v){e=m(v,"P",{class:!0});var o=h(e);l=A(o,"Not a user? "),t=m(o,"A",{href:!0,class:!0});var r=h(t);i=A(r,"Sign Up"),r.forEach(n),o.forEach(n),this.h()},h(){s(t,"href","/signup"),s(t,"class","card-link"),s(e,"class","float-end mt-3")},m(v,o){C(v,e,o),a(e,l),a(e,t),a(t,i)},d(v){v&&n(e)}}}function he(g){let e,l,t,i,v,o,r,f,_,p,y,E,N,q,I,x,F,H,w,T,L,W,z,O,G,c=g[0]!="Login"&&Y(),d=g[0]=="Login"&&Z();return{c(){e=u("div"),l=u("div"),t=u("div"),i=u("h5"),v=P(g[0]),o=S(),r=u("form"),f=u("div"),_=u("label"),p=P("Email address"),y=S(),E=u("input"),N=S(),c&&c.c(),q=S(),I=u("div"),x=u("label"),F=P("Password"),H=S(),w=u("input"),T=S(),L=u("button"),W=P("Submit"),z=S(),d&&d.c(),this.h()},l(b){e=m(b,"DIV",{class:!0});var U=h(e);l=m(U,"DIV",{class:!0});var M=h(l);t=m(M,"DIV",{class:!0});var k=h(t);i=m(k,"H5",{class:!0});var R=h(i);v=A(R,g[0]),R.forEach(n),o=$(k),r=m(k,"FORM",{});var B=h(r);f=m(B,"DIV",{class:!0});var D=h(f);_=m(D,"LABEL",{for:!0,class:!0});var J=h(_);p=A(J,"Email address"),J.forEach(n),y=$(D),E=m(D,"INPUT",{type:!0,class:!0,id:!0,"aria-describedby":!0,placeholder:!0}),N=$(D),c&&c.l(D),D.forEach(n),q=$(B),I=m(B,"DIV",{class:!0});var V=h(I);x=m(V,"LABEL",{for:!0,class:!0});var K=h(x);F=A(K,"Password"),K.forEach(n),H=$(V),w=m(V,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),V.forEach(n),T=$(B),L=m(B,"BUTTON",{type:!0,class:!0});var Q=h(L);W=A(Q,"Submit"),Q.forEach(n),B.forEach(n),z=$(k),d&&d.l(k),k.forEach(n),M.forEach(n),U.forEach(n),this.h()},h(){s(i,"class","card-title"),s(_,"for","emailInput"),s(_,"class","form-label"),s(E,"type","email"),s(E,"class","form-control"),s(E,"id","emailInput"),s(E,"aria-describedby","emailHelp"),s(E,"placeholder","Email Address"),s(f,"class","mb-3"),s(x,"for","passInput"),s(x,"class","form-label"),s(w,"type","password"),s(w,"class","form-control"),s(w,"id","passInput"),s(w,"placeholder","Password"),s(I,"class","mb-3"),s(L,"type","submit"),s(L,"class","btn btn-primary"),s(t,"class","card-body login-form svelte-yignxn"),s(l,"class","card svelte-yignxn"),s(e,"class","login svelte-yignxn")},m(b,U){C(b,e,U),a(e,l),a(l,t),a(t,i),a(i,v),a(t,o),a(t,r),a(r,f),a(f,_),a(_,p),a(f,y),a(f,E),a(f,N),c&&c.m(f,null),a(r,q),a(r,I),a(I,x),a(x,F),a(I,H),a(I,w),a(r,T),a(r,L),a(L,W),a(t,z),d&&d.m(t,null),O||(G=se(r,"submit",le(g[1])),O=!0)},p(b,[U]){U&1&&ie(v,b[0]),b[0]!="Login"?c||(c=Y(),c.c(),c.m(f,null)):c&&(c.d(1),c=null),b[0]=="Login"?d||(d=Z(),d.c(),d.m(t,null)):d&&(d.d(1),d=null)},i:j,o:j,d(b){b&&n(e),c&&c.d(),d&&d.d(),O=!1,G()}}}function ge(g,e,l){let{title:t}=e;const i=me();function v(){var f,_;let o=(f=document.getElementById("emailInput"))==null?void 0:f.value,r=(_=document.getElementById("passInput"))==null?void 0:_.value;t=="Login"?fe(i,o,r).then(p=>{const y=p.user;localStorage.setItem("uid",y.uid),X("/quiz-create")}).catch(p=>{p.code,p.message}):pe(i,o,r).then(p=>{const y=p.user;console.log(y),localStorage.setItem("uid",y.uid),X("/quiz-create")}).catch(p=>{p.code,p.message})}return g.$$set=o=>{"title"in o&&l(0,t=o.title)},[t,v]}class ve extends ee{constructor(e){super(),te(this,e,ge,he,ae,{title:0})}}function _e(g){let e,l;return e=new ve({props:{title:"Sign Up"}}),{c(){re(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,i){oe(e,t,i),l=!0},p:j,i(t){l||(ce(e.$$.fragment,t),l=!0)},o(t){de(e.$$.fragment,t),l=!1},d(t){ue(e,t)}}}class xe extends ee{constructor(e){super(),te(this,e,null,_e,ae,{})}}export{xe as default};
