import{S as X,i as Z,s as z,e as d,t as H,k as B,c as u,a as y,h as K,d as r,m as I,b as n,g as C,H as e,j as M,F as G,n as V,Y as J,w as ee}from"../chunks/index-a0179a11.js";import{B as te,V as se,w as le}from"../chunks/index.esm2017-8c7e9b39.js";import"../chunks/index.esm2017-da53403b.js";function P(b,t,c){const o=b.slice();return o[2]=t[c],o}function Q(b){let t,c,o=b[2].userEmail+"",f,p,m,i=b[2].userScore+"",g,T;return{c(){t=d("tr"),c=d("th"),f=H(o),p=B(),m=d("td"),g=H(i),T=B(),this.h()},l(_){t=u(_,"TR",{});var a=y(t);c=u(a,"TH",{scope:!0});var k=y(c);f=K(k,o),k.forEach(r),p=I(a),m=u(a,"TD",{});var E=y(m);g=K(E,i),E.forEach(r),T=I(a),a.forEach(r),this.h()},h(){n(c,"scope","row")},m(_,a){C(_,t,a),e(t,c),e(c,f),e(t,p),e(t,m),e(m,g),e(t,T)},p(_,a){a&1&&o!==(o=_[2].userEmail+"")&&M(f,o),a&1&&i!==(i=_[2].userScore+"")&&M(g,i)},d(_){_&&r(t)}}}function re(b){let t,c,o,f,p,m,i,g,T,_,a,k,E,w,U,q,j,D,$,S,x=b[0],h=[];for(let s=0;s<x.length;s+=1)h[s]=Q(P(b,x,s));return{c(){t=d("link"),c=d("link"),o=d("link"),f=d("link"),p=d("link"),m=B(),i=d("section"),g=d("p"),T=H("Result"),_=B(),a=d("table"),k=d("thead"),E=d("tr"),w=d("th"),U=H("User Email"),q=B(),j=d("th"),D=H("Score"),$=B(),S=d("tbody");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){const v=G('[data-svelte="svelte-yfve9p"]',document.head);t=u(v,"LINK",{href:!0,rel:!0,integrity:!0,crossorigin:!0}),c=u(v,"LINK",{rel:!0,href:!0}),o=u(v,"LINK",{rel:!0,href:!0}),f=u(v,"LINK",{href:!0,rel:!0}),p=u(v,"LINK",{href:!0,rel:!0}),v.forEach(r),m=I(s),i=u(s,"SECTION",{});var l=y(i);g=u(l,"P",{class:!0});var L=y(g);T=K(L,"Result"),L.forEach(r),_=I(l),a=u(l,"TABLE",{class:!0});var N=y(a);k=u(N,"THEAD",{class:!0});var O=y(k);E=u(O,"TR",{});var R=y(E);w=u(R,"TH",{scope:!0});var W=y(w);U=K(W,"User Email"),W.forEach(r),q=I(R),j=u(R,"TH",{scope:!0});var Y=y(j);D=K(Y,"Score"),Y.forEach(r),R.forEach(r),O.forEach(r),$=I(N),S=u(N,"TBODY",{});var F=y(S);for(let A=0;A<h.length;A+=1)h[A].l(F);F.forEach(r),N.forEach(r),l.forEach(r),this.h()},h(){document.title="Result!",n(t,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"),n(t,"rel","stylesheet"),n(t,"integrity","sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"),n(t,"crossorigin","anonymous"),n(c,"rel","preconnect"),n(c,"href","https://fonts.googleapis.com"),n(o,"rel","preconnect"),n(o,"href","https://fonts.gstatic.com"),n(f,"href","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"),n(f,"rel","stylesheet"),n(p,"href","https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"),n(p,"rel","stylesheet"),n(g,"class","top-heading display-6 svelte-113jrim"),n(w,"scope","col"),n(j,"scope","col"),n(k,"class","table-dark"),n(a,"class","result-table table table-striped table-bordered svelte-113jrim")},m(s,v){e(document.head,t),e(document.head,c),e(document.head,o),e(document.head,f),e(document.head,p),C(s,m,v),C(s,i,v),e(i,g),e(g,T),e(i,_),e(i,a),e(a,k),e(k,E),e(E,w),e(w,U),e(E,q),e(E,j),e(j,D),e(a,$),e(a,S);for(let l=0;l<h.length;l+=1)h[l].m(S,null)},p(s,[v]){if(v&1){x=s[0];let l;for(l=0;l<x.length;l+=1){const L=P(s,x,l);h[l]?h[l].p(L,v):(h[l]=Q(L),h[l].c(),h[l].m(S,null))}for(;l<h.length;l+=1)h[l].d(1);h.length=x.length}},i:V,o:V,d(s){r(t),r(c),r(o),r(f),r(p),s&&r(m),s&&r(i),J(h,s)}}}function ae(b,t,c){let o=[];return ee(async()=>{const f=te(),p=se(f,"results"),m=await le(p);c(0,o=m.docs.map(i=>i.data()))}),[o]}class ie extends X{constructor(t){super(),Z(this,t,ae,re,z,{})}}export{ie as default};
