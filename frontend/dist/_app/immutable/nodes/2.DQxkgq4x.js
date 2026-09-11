import{b as Pr,a as u,f as S,c as be,t as Ve,d as Ot}from"../chunks/C14P8jaG.js";import{o as Zn,a as vr}from"../chunks/Cz6m6K8p.js";import{h as De,L as $t,G as Lt,c as Er,J as Kt,b as Jn,o as e,N as ja,ag as Va,O as En,P as zt,f as _t,ay as ea,aF as Ua,ao as Rn,e as mt,a as dr,aM as Ba,s as qa,a5 as Ka,aN as ta,aE as dn,aO as Ga,a7 as Nn,aP as Wa,aQ as Xa,aI as Ya,aR as ht,aS as ra,a1 as Qa,r as na,p as aa,aT as Ur,ae as sa,aU as Za,aV as Ja,aC as es,m as ts,d as Nr,az as oa,y as J,F as ia,aW as rs,aG as ns,aA as as,D as la,aX as ca,aY as ss,aZ as os,E as is,aw as ua,S as Dr,k as Mr,a_ as da,a$ as ls,b0 as cs,b1 as fa,b2 as us,b3 as ds,b4 as gr,b5 as fs,b6 as vs,b7 as gs,b8 as hs,b9 as ps,ba as ms,bb as _s,aJ as Pt,U as bs,aK as z,_ as ie,$ as f,A as k,B as p,x as Me,g as K,z as Ae,C as $,j as Re,ap as ke,aL as j,bc as xs,q as Vt,bd as ys,be as it,bf as ws}from"../chunks/VJhVTb1A.js";import{p as me,i as Q,b as nt,c as ks,l as Oe,s as Ue}from"../chunks/zf4GFcxs.js";import{i as Cs,a as Ss,d as le,b as Ke,c as $s,n as Ps,e as Es,s as ne,f as tt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Rs}from"../chunks/DmjnTBOd.js";import{B as Ns}from"../chunks/U5yjBaoU.js";function fn(t,r){return r}function Ms(t,r,a){for(var n=[],s=r.length,i,o=r.length,l=0;l<s;l++){let A=r[l];aa(A,()=>{if(i){if(i.pending.delete(A),i.done.add(A),i.pending.size===0){var m=t.outrogroups;Qr(t,dn(i.done)),m.delete(i),m.size===0&&(t.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&a!==null;if(d){var b=a,x=b.parentNode;es(x),x.append(b),t.items.clear()}Qr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Qr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const o of t.pending.values())for(const l of o)n.add(t.items.get(l).e)}for(var s=0;s<r.length;s++){var i=r[s];if(n!=null&&n.has(i)){i.f|=ht;const o=document.createDocumentFragment();ts(i,o)}else Nr(r[s],a)}}var Mn;function Ye(t,r,a,n,s,i=null){var o=t,l=new Map,d=(r&ra)!==0;if(d){var b=t;o=De?$t(Lt(b)):b.appendChild(Er())}De&&Kt();var x=null,A=Ka(()=>{var h=a();return ta(h)?h:h==null?[]:dn(h)}),m,N=new Map,L=!0;function g(h){(P.effect.f&Qa)===0&&(P.pending.delete(h),P.fallback=x,As(P,m,o,r,n),x!==null&&(m.length===0?(x.f&ht)===0?na(x):(x.f^=ht,lr(x,null,o)):aa(x,()=>{x=null})))}function c(h){P.pending.delete(h)}var w=Jn(()=>{m=e(A);var h=m.length;let y=!1;if(De){var C=ja(o)===Va;C!==(h===0)&&(o=En(),$t(o),zt(!1),y=!0)}for(var _=new Set,M=mt,F=qa(),T=0;T<h;T+=1){De&&_t.nodeType===ea&&_t.data===Ua&&(o=_t,y=!0,zt(!1));var q=m[T],I=n(q,T),O=L?null:l.get(I);O?(O.v&&Rn(O.v,q),O.i&&Rn(O.i,T),F&&M.unskip_effect(O.e)):(O=Ls(l,L?o:Mn??(Mn=Er()),q,I,T,s,r,a),L||(O.e.f|=ht),l.set(I,O)),_.add(I)}if(h===0&&i&&!x&&(L?x=dr(()=>i(o)):(x=dr(()=>i(Mn??(Mn=Er()))),x.f|=ht)),h>_.size&&Ba(),De&&h>0&&$t(En()),!L)if(N.set(M,_),F){for(const[V,G]of l)_.has(V)||M.skip_effect(G.e);M.oncommit(g),M.ondiscard(c)}else g(M);y&&zt(!0),e(A)}),P={effect:w,items:l,pending:N,outrogroups:null,fallback:x};L=!1,De&&(o=_t)}function ar(t){for(;t!==null&&(t.f&Za)===0;)t=t.next;return t}function As(t,r,a,n,s){var q,I,O,V,G,Z,ae,E,R;var i=(n&Ja)!==0,o=r.length,l=t.items,d=ar(t.effect.first),b,x=null,A,m=[],N=[],L,g,c,w;if(i)for(w=0;w<o;w+=1)L=r[w],g=s(L,w),c=l.get(g).e,(c.f&ht)===0&&((I=(q=c.nodes)==null?void 0:q.a)==null||I.measure(),(A??(A=new Set)).add(c));for(w=0;w<o;w+=1){if(L=r[w],g=s(L,w),c=l.get(g).e,t.outrogroups!==null)for(const H of t.outrogroups)H.pending.delete(c),H.done.delete(c);if((c.f&Ur)!==0&&(na(c),i&&((V=(O=c.nodes)==null?void 0:O.a)==null||V.unfix(),(A??(A=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)lr(c,null,a);else{var P=x?x.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),wt(t,x,c),wt(t,c,P),lr(c,P,a),x=c,m=[],N=[],d=ar(x.next);continue}if(c!==d){if(b!==void 0&&b.has(c)){if(m.length<N.length){var h=N[0],y;x=h.prev;var C=m[0],_=m[m.length-1];for(y=0;y<m.length;y+=1)lr(m[y],h,a);for(y=0;y<N.length;y+=1)b.delete(N[y]);wt(t,C.prev,_.next),wt(t,x,C),wt(t,_,h),d=h,x=_,w-=1,m=[],N=[]}else b.delete(c),lr(c,d,a),wt(t,c.prev,c.next),wt(t,c,x===null?t.effect.first:x.next),wt(t,x,c),x=c;continue}for(m=[],N=[];d!==null&&d!==c;)(b??(b=new Set)).add(d),N.push(d),d=ar(d.next);if(d===null)continue}(c.f&ht)===0&&m.push(c),x=c,d=ar(c.next)}if(t.outrogroups!==null){for(const H of t.outrogroups)H.pending.size===0&&(Qr(t,dn(H.done)),(G=t.outrogroups)==null||G.delete(H));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||b!==void 0){var M=[];if(b!==void 0)for(c of b)(c.f&Ur)===0&&M.push(c);for(;d!==null;)(d.f&Ur)===0&&d!==t.fallback&&M.push(d),d=ar(d.next);var F=M.length;if(F>0){var T=(n&ra)!==0&&o===0?a:null;if(i){for(w=0;w<F;w+=1)(ae=(Z=M[w].nodes)==null?void 0:Z.a)==null||ae.measure();for(w=0;w<F;w+=1)(R=(E=M[w].nodes)==null?void 0:E.a)==null||R.fix()}Ms(t,M,T)}}i&&sa(()=>{var H,D;if(A!==void 0)for(c of A)(D=(H=c.nodes)==null?void 0:H.a)==null||D.apply()})}function Ls(t,r,a,n,s,i,o,l){var d=(o&Wa)!==0?(o&Xa)===0?Ya(a,!1,!1):Nn(a):null,b=(o&Ga)!==0?Nn(s):null;return{v:d,i:b,e:dr(()=>(i(r,d??a,b??s,l),()=>{t.delete(n)}))}}function lr(t,r,a){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var o=oa(n);if(i.before(n),n===s)return;n=o}}function wt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function zr(t,r,a=!1,n=!1,s=!1,i=!1){var o=t,l="";if(a){var d=t;De&&(o=$t(Lt(d)))}J(()=>{var b=ia;if(l===(l=r()??"")){De&&Kt();return}if(a&&!De){b.nodes=null,d.innerHTML=l,l!==""&&Pr(Lt(d),d.lastChild);return}if(b.nodes!==null&&(rs(b.nodes.start,b.nodes.end),b.nodes=null),l!==""){if(De){_t.data;for(var x=Kt(),A=x;x!==null&&(x.nodeType!==ea||x.data!=="");)A=x,x=oa(x);if(x===null)throw ns(),as;Pr(_t,A),o=$t(x);return}var m=n?ca:s?ss:void 0,N=la(n?"svg":s?"math":"template",m);N.innerHTML=l;var L=n||s?N:N.content;if(Pr(Lt(L),L.lastChild),n||s)for(;Lt(L);)o.before(Lt(L));else o.before(L)}})}function He(t,r,a,n,s){var l;De&&Kt();var i=(l=r.$$slots)==null?void 0:l[a],o=!1;i===!0&&(i=r.children,o=!0),i===void 0||i(t,o?()=>n:n)}function Ts(t,r,a,n,s,i){let o=De;De&&Kt();var l=null;De&&_t.nodeType===os&&(l=_t,Kt());var d=De?_t:t,b=new Ns(d,!1);Jn(()=>{const x=r()||null;var A=ca;if(x===null){b.ensure(null,null);return}return b.ensure(x,m=>{if(x){if(l=De?l:la(x,A),Pr(l,l),n){De&&Cs(x)&&l.append(document.createComment(""));var N=De?Lt(l):l.appendChild(Er());De&&(N===null?zt(!1):$t(N)),n(l,N)}ia.nodes.end=l,m.before(l)}De&&$t(m)}),()=>{}},is),ua(()=>{}),o&&(zt(!0),$t(d))}function Fs(t,r,a){Dr(()=>{var n=Mr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Ds(t,r){var a=void 0,n;da(()=>{a!==(a=r())&&(n&&(Nr(n),n=null),a&&(n=dr(()=>{Dr(()=>a(t))})))})}function va(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(a=va(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function zs(){for(var t,r,a=0,n="",s=arguments.length;a<s;a++)(t=arguments[a])&&(r=va(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?zs(t):t??""}const An=[...` 	
\r\f \v\uFEFF`];function Is(t,r,a){var n=t==null?"":""+t;if(a){for(var s of Object.keys(a))if(a[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||An.includes(n[o-1]))&&(l===n.length||An.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Ln(t,r=!1){var a=r?" !important;":";",n="";for(var s of Object.keys(t)){var i=t[s];i!=null&&i!==""&&(n+=" "+s+": "+i+a)}return n}function Br(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Os(t,r){if(r){var a="",n,s;if(Array.isArray(r)?(n=r[0],s=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Br)),s&&d.push(...Object.keys(s).map(Br));var b=0,x=-1;const g=t.length;for(var A=0;A<g;A++){var m=t[A];if(l?m==="/"&&t[A-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[A+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&x===-1)x=A;else if(m===";"||A===g-1){if(x!==-1){var N=Br(t.substring(b,x).trim());if(!d.includes(N)){m!==";"&&A++;var L=t.substring(b,A).trim();a+=" "+L+";"}}b=A+1,x=-1}}}}return n&&(a+=Ln(n)),s&&(a+=Ln(s,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Se(t,r,a,n,s,i){var o=t.__className;if(De||o!==a||o===void 0){var l=Is(a,n,i);(!De||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&s!==i)for(var d in i){var b=!!i[d];(s==null||b!==!!s[d])&&t.classList.toggle(d,b)}return i}function qr(t,r={},a,n){for(var s in a){var i=a[s];r[s]!==i&&(a[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,n))}}function Ze(t,r,a,n){var s=t.__style;if(De||s!==r){var i=Os(r,n);(!De||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(qr(t,a==null?void 0:a[0],n[0]),qr(t,a==null?void 0:a[1],n[1],"important")):qr(t,a,n));return n}function Ar(t,r,a=!1){if(t.multiple){if(r==null)return;if(!ta(r))return ls();for(var n of t.options)n.selected=r.includes(ur(n));return}for(n of t.options){var s=ur(n);if(cs(s,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function ga(t){var r=new MutationObserver(()=>{Ar(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ua(()=>{r.disconnect()})}function Hs(t,r,a=r){var n=new WeakSet,s=!0;fa(t,"change",i=>{var o=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(o),ur);else{var d=t.querySelector(o)??t.querySelector("option:not([disabled])");l=d&&ur(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Dr(()=>{var i=r();if(t===document.activeElement){var o=mt;if(n.has(o))return}if(Ar(t,i,s),s&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=ur(l),a(i))}t.__value=i,s=!1}),ga(t)}function ur(t){return"__value"in t?t.__value:t.value}const sr=Symbol("class"),or=Symbol("style"),ha=Symbol("is custom element"),pa=Symbol("is html"),js=gr?"link":"LINK",Vs=gr?"input":"INPUT",Us=gr?"option":"OPTION",Bs=gr?"select":"SELECT",qs=gr?"progress":"PROGRESS";function Xe(t){if(De){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;we(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;we(t,"checked",null),t.checked=s}}};t.__on_r=a,sa(a),gs()}}function vn(t,r){var a=gn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==qs)||(t.value=r??"")}function Ks(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function we(t,r,a,n){var s=gn(t);De&&(s[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===js)||s[r]!==(s[r]=a)&&(r==="loading"&&(t[ms]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ma(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Gs(t,r,a,n,s=!1,i=!1){if(De&&s&&t.nodeName===Vs){var o=t,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Xe(o)}var d=gn(t),b=d[ha],x=!d[pa];let A=De&&b;A&&zt(!1);var m=r||{},N=t.nodeName===Us;for(var L in r)L in a||(a[L]=null);a.class?a.class=dt(a.class):a[sr]&&(a.class=null),a[or]&&(a.style??(a.style=null));var g=ma(t);for(const _ in a){let M=a[_];if(N&&_==="value"&&M==null){t.value=t.__value="",m[_]=M;continue}if(_==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Se(t,c,M,n,r==null?void 0:r[sr],a[sr]),m[_]=M,m[sr]=a[sr];continue}if(_==="style"){Ze(t,M,r==null?void 0:r[or],a[or]),m[_]=M,m[or]=a[or];continue}var w=m[_];if(!(M===w&&!(M===void 0&&t.hasAttribute(_)))){m[_]=M;var P=_[0]+_[1];if(P!=="$$")if(P==="on"){const F={},T="$$"+_;let q=_.slice(2);var h=Es(q);if(Ss(q)&&(q=q.slice(0,-7),F.capture=!0),!h&&w){if(M!=null)continue;t.removeEventListener(q,m[T],F),m[T]=null}if(h)le(q,t,M),Ke([q]);else if(M!=null){let I=function(O){m[_].call(this,O)};m[T]=$s(q,t,I,F)}}else if(_==="style")we(t,_,M);else if(_==="autofocus")fs(t,!!M);else if(!b&&(_==="__value"||_==="value"&&M!=null))t.value=t.__value=M;else if(_==="selected"&&N)Ks(t,M);else{var y=_;x||(y=Ps(y));var C=y==="defaultValue"||y==="defaultChecked";if(M==null&&!b&&!C)if(d[_]=null,y==="value"||y==="checked"){let F=t;const T=r===void 0;if(y==="value"){let q=F.defaultValue;F.removeAttribute(y),F.defaultValue=q,F.value=F.__value=T?q:null}else{let q=F.defaultChecked;F.removeAttribute(y),F.defaultChecked=q,F.checked=T?q:!1}}else t.removeAttribute(_);else C||g.includes(y)&&(b||typeof M!="string")?(t[y]=M,y in d&&(d[y]=vs)):typeof M!="function"&&we(t,y,M)}}}return A&&zt(!0),m}function Tn(t,r,a=[],n=[],s=[],i,o=!1,l=!1){us(s,a,n,d=>{var b=void 0,x={},A=t.nodeName===Bs,m=!1;if(da(()=>{var L=r(...d.map(e)),g=Gs(t,b,L,i,o,l);m&&A&&"value"in L&&Ar(t,L.value);for(let w of Object.getOwnPropertySymbols(x))L[w]||Nr(x[w]);for(let w of Object.getOwnPropertySymbols(L)){var c=L[w];w.description===ds&&(!b||c!==b[w])&&(x[w]&&Nr(x[w]),x[w]=dr(()=>Ds(t,()=>c))),g[w]=c}b=g}),A){var N=t;Dr(()=>{Ar(N,b.value,!0),ga(N)})}m=!0})}function gn(t){return t.__attributes??(t.__attributes={[ha]:t.nodeName.includes("-"),[pa]:t.namespaceURI===hs})}var Fn=new Map;function ma(t){var r=t.getAttribute("is")||t.nodeName,a=Fn.get(r);if(a)return a;Fn.set(r,a=[]);for(var n,s=t,i=Element.prototype;i!==s;){n=_s(s);for(var o in n)n[o].set&&a.push(o);s=ps(s)}return a}function et(t,r,a=r){var n=new WeakSet;fa(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Kr(t)?Gr(i):i,a(i),mt!==null&&n.add(mt),await Pt(),i!==(i=r())){var o=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var b=t.value.length;o===l&&l===d&&b>d?(t.selectionStart=b,t.selectionEnd=b):(t.selectionStart=o,t.selectionEnd=Math.min(l,b))}}}),(De&&t.defaultValue!==t.value||Mr(r)==null&&t.value)&&(a(Kr(t)?Gr(t.value):t.value),mt!==null&&n.add(mt)),bs(()=>{var s=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Kr(t)&&s===Gr(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Kr(t){var r=t.type;return r==="number"||r==="range"}function Gr(t){return t===""?null:+t}let xt=z(ie({type:"none",props:{},resolve:null}));function Ws(){return e(xt)}function ot(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Xs(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Ys(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Qs(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function We(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Dn(t,r="Confirm",a="OK",n="primary"){return new Promise(s=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:s},!0)})}function hn(t,r="",a="Input",n="",s=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:s},resolve:i},!0)})}var Zs=S('<div style="display:contents;"><!></div>');function Jt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Zs(),s=k(n);ft(s,()=>r.children),p(n),Fs(n,i=>a==null?void 0:a(i)),u(t,n)}var Js=S('<div class="text-xs text-muted font-light"> </div>'),eo=S('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function hr(t,r){Me(r,!0);const a=L=>{var g=eo(),c=k(g),w=k(c),P=k(w),h=k(P,!0);p(P);var y=$(P,2);{var C=T=>{var q=Js(),I=k(q,!0);p(q),J(()=>ne(I,r.subtitle)),u(T,q)};Q(y,T=>{r.subtitle&&T(C)})}p(w);var _=$(w,2);ft(_,()=>r.children);var M=$(_,2),F=k(M);ft(F,()=>r.footer),p(M),p(c),p(g),J(()=>{Se(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),we(c,"aria-labelledby",r.titleId),we(P,"id",r.titleId),ne(h,r.title)}),le("keydown",g,o),le("mousedown",g,d),le("click",g,b),u(L,g)};let n=me(r,"maxWidth",3,"520px"),s=me(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():ot(null)}function o(L){L.key==="Escape"?i():L.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(L){l=L.target.dataset.backdrop!==void 0}function b(L){const g=L.target.dataset.backdrop!==void 0;l&&g&&i(),l=!1}var x=be(),A=K(x);{var m=L=>{Jt(L,{children:(g,c)=>{a(g)}})},N=L=>{a(L)};Q(A,L=>{s()?L(m):L(N,-1)})}u(t,x),Ae()}Ke(["keydown","mousedown","click"]);var to=S("<button><!></button>");function $e(t,r){let a=me(r,"variant",3,"primary"),n=me(r,"size",3,"default"),s=me(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},o={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=to(),d=k(l);ft(d,()=>r.children),p(l),J(()=>{Se(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${o[a()]??""}`),l.disabled=s()}),le("click",l,function(...b){var x;(x=r.onclick)==null||x.apply(this,b)}),u(t,l)}Ke(["click"]);var ro=S("<!> <span><!></span>",1),no=S('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),ao=S('<input class="w-full"/>'),so=S('<div class="mb-4.5"><!></div>'),oo=S('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function io(t,r){Me(r,!0);let a=me(r,"confirmLabel",3,"OK"),n=me(r,"confirmVariant",3,"primary"),s=me(r,"value",3,""),i=me(r,"placeholder",3,""),o=me(r,"multiline",3,!1);const l=s();let d=z(ie(l)),b=z(void 0),x=z(void 0);Re(()=>{var N;r.mode==="prompt"&&e(b)?(e(b).focus(),"select"in e(b)&&e(b).select()):e(x)&&((N=e(x).querySelector("button"))==null||N.focus())});function A(){r.mode==="prompt"?ot(e(d)):r.mode==="confirm"?ot(!0):ot()}function m(){r.mode==="confirm"?ot(!1):r.mode==="prompt"?ot(null):ot()}{const N=g=>{var c=ro(),w=K(c);{var P=C=>{$e(C,{variant:"secondary",onclick:m,children:(_,M)=>{ke();var F=Ve("Cancel");u(_,F)},$$slots:{default:!0}})};Q(w,C=>{r.mode!=="alert"&&C(P)})}var h=$(w,2),y=k(h);$e(y,{get variant(){return n()},onclick:A,children:(C,_)=>{ke();var M=Ve();J(()=>ne(M,a())),u(C,M)},$$slots:{default:!0}}),p(h),nt(h,C=>f(x,C),()=>e(x)),u(g,c)};let L=j(()=>o()?void 0:A);hr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(L)},onCancel:m,footer:N,children:(g,c)=>{var w=oo(),P=K(w),h=k(P,!0);p(P);var y=$(P,2);{var C=_=>{var M=so(),F=k(M);{var T=I=>{var O=no();xs(O),nt(O,V=>f(b,V),()=>e(b)),J(()=>we(O,"placeholder",i())),et(O,()=>e(d),V=>f(d,V)),u(I,O)},q=I=>{var O=ao();Xe(O),nt(O,V=>f(b,V),()=>e(b)),J(()=>we(O,"placeholder",i())),et(O,()=>e(d),V=>f(d,V)),u(I,O)};Q(F,I=>{o()?I(T):I(q,-1)})}p(M),u(_,M)};Q(y,_=>{r.mode==="prompt"&&_(C)})}J(()=>ne(h,r.message)),u(g,w)},$$slots:{footer:!0,default:!0}})}Ae()}var lo=S('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Ne(t,r){var a=lo(),n=k(a),s=$(n);ft(s,()=>r.children),p(a),J(()=>ne(n,`${r.text??""} `)),u(t,a)}function Ct(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function St(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function co(t,r){return localStorage.getItem(t)??r}function uo(){return{n:Ct("csauto_run_n",1),nt:Ct("csauto_run_nt",1),maxParallel:Ct("csauto_run_max_parallel",0)||null}}function fo(t){St("csauto_run_n",t.n),St("csauto_run_nt",t.nt),t.maxParallel&&St("csauto_run_max_parallel",t.maxParallel)}function vo(){return{n:Ct("csauto_restart_n",1),nt:Ct("csauto_restart_nt",1),maxParallel:Ct("csauto_restart_max_parallel",0)||null,mode:co("csauto_restart_mode","iterations"),value:Ct("csauto_restart_value",100)}}function go(t){St("csauto_restart_n",t.n),St("csauto_restart_nt",t.nt),t.maxParallel&&St("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),St("csauto_restart_value",t.value)}function ho(){return{keepLast:Ct("csauto_clean_keep_last",1)}}function po(t){St("csauto_clean_keep_last",t.keepLast)}var mo=S("<!> <!>",1),_o=S('<input type="number" min="1" step="1"/>'),bo=S('<input type="number" min="1" step="1"/>'),xo=S('<input type="number" min="0" step="1"/>'),yo=S('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div>');function wo(t,r){Me(r,!0);const a=uo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=z(ie(a.n)),i=z(ie(a.nt)),o=z(ie(n));async function l(){if(!Number.isFinite(e(s))||e(s)<=0){await We("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await We("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await We("Max parallel must be empty or > 0.","Invalid value");return}const d={n:e(s),nt:e(i),maxParallel:e(o)||null};fo(d),ot(d)}{const d=A=>{var m=mo(),N=K(m);$e(N,{variant:"secondary",onclick:()=>ot(null),children:(g,c)=>{ke();var w=Ve("Cancel");u(g,w)},$$slots:{default:!0}});var L=$(N,2);$e(L,{variant:"run",onclick:l,children:(g,c)=>{ke();var w=Ve("Run");u(g,w)},$$slots:{default:!0}}),u(A,m)};let b=j(()=>r.cases.length),x=j(()=>r.cases.length>1?"s":"");hr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(b)??""} case${e(x)??""} selected`},onConfirm:l,footer:d,children:(A,m)=>{var N=yo(),L=k(N);Ne(L,{text:"MPI Ranks (n)",children:(w,P)=>{var h=_o();Xe(h),et(h,()=>e(s),y=>f(s,y)),u(w,h)}});var g=$(L,2);Ne(g,{text:"OMP Threads (nt)",children:(w,P)=>{var h=bo();Xe(h),et(h,()=>e(i),y=>f(i,y)),u(w,h)}});var c=$(g,2);Ne(c,{text:"Max Parallel",children:(w,P)=>{var h=xo();Xe(h),et(h,()=>e(o),y=>f(o,y)),u(w,h)}}),p(N),u(A,N)},$$slots:{footer:!0,default:!0}})}Ae()}var ko=S("<!> <!>",1),Co=S('<input type="number" min="1" step="1"/>'),So=S('<input type="number" min="1" step="1"/>'),$o=S('<input type="number" min="0" step="1"/>'),Po=S("<select><option>Iterations</option><option>Physical time</option></select>"),Eo=S('<input type="number"/>'),Ro=S('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function No(t,r){Me(r,!0);const a=vo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=z(ie(a.n)),i=z(ie(a.nt)),o=z(ie(n)),l=z(ie(a.mode)),d=z(ie(a.value)),b=j(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),x=j(()=>e(l)==="iterations"?"1":"any"),A=j(()=>e(l)==="iterations"?"1":"0");async function m(){if(!Number.isFinite(e(s))||e(s)<=0){await We("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await We("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await We("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await We("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await We("Iterations must be an integer.","Invalid value");return}const N={n:e(s),nt:e(i),maxParallel:e(o)||null,restartMode:e(l),restartValue:e(d)};go({n:e(s),nt:e(i),maxParallel:e(o)||null,mode:e(l),value:e(d)}),ot(N)}{const N=c=>{var w=ko(),P=K(w);$e(P,{variant:"secondary",onclick:()=>ot(null),children:(y,C)=>{ke();var _=Ve("Cancel");u(y,_)},$$slots:{default:!0}});var h=$(P,2);$e(h,{variant:"warning",onclick:m,children:(y,C)=>{ke();var _=Ve("Restart");u(y,_)},$$slots:{default:!0}}),u(c,w)};let L=j(()=>r.cases.length),g=j(()=>r.cases.length>1?"s":"");hr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(L)??""} case${e(g)??""} selected`},onConfirm:m,footer:N,children:(c,w)=>{var P=Ro(),h=K(P),y=k(h);Ne(y,{text:"MPI Ranks (n)",children:(q,I)=>{var O=Co();Xe(O),et(O,()=>e(s),V=>f(s,V)),u(q,O)}});var C=$(y,2);Ne(C,{text:"OMP Threads (nt)",children:(q,I)=>{var O=So();Xe(O),et(O,()=>e(i),V=>f(i,V)),u(q,O)}});var _=$(C,2);Ne(_,{text:"Max Parallel",children:(q,I)=>{var O=$o();Xe(O),et(O,()=>e(o),V=>f(o,V)),u(q,O)}}),p(h);var M=$(h,2),F=k(M);Ne(F,{text:"Stop criterion",children:(q,I)=>{var O=Po(),V=k(O);V.value=V.__value="iterations";var G=$(V);G.value=G.__value="physical_time",p(O),Hs(O,()=>e(l),Z=>f(l,Z)),u(q,O)}});var T=$(F,2);Ne(T,{get text(){return e(b)},children:(q,I)=>{var O=Eo();Xe(O),J(()=>{we(O,"min",e(A)),we(O,"step",e(x))}),et(O,()=>e(d),V=>f(d,V)),u(q,O)}}),p(M),u(c,P)},$$slots:{footer:!0,default:!0}})}Ae()}function Te(t,r){let a=me(r,"size",3,14);var n=be(),s=K(n);ks(s,()=>r.icon,(i,o)=>{o(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Mo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ao=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var Lo=Ot("<svg><!><!></svg>");function Be(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]),n=Oe(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let s=me(r,"name",8,void 0),i=me(r,"color",8,"currentColor"),o=me(r,"size",8,24),l=me(r,"strokeWidth",8,2),d=me(r,"absoluteStrokeWidth",8,!1),b=me(r,"iconNode",24,()=>[]);Rs();var x=Lo();Tn(x,(N,L,g)=>({...Mo,...N,...n,width:o(),height:o(),stroke:i(),"stroke-width":L,class:g}),[()=>Ao(n)?void 0:{"aria-hidden":"true"},()=>(Vt(d()),Vt(l()),Vt(o()),Mr(()=>d()?Number(l())*24/Number(o()):l())),()=>(Vt(zn),Vt(s()),Vt(a),Mr(()=>zn("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var A=k(x);Ye(A,1,b,fn,(N,L)=>{var g=j(()=>ys(e(L),2));let c=()=>e(g)[0],w=()=>e(g)[1];var P=be(),h=K(P);Ts(h,c,!0,(y,C)=>{Tn(y,()=>({...w()}))}),u(N,P)});var m=$(A);He(m,r,"default",{}),p(x),u(t,x),Ae()}function To(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Be(t,Ue({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Fo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Be(t,Ue({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Do(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Be(t,Ue({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pn(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Be(t,Ue({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function zo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Be(t,Ue({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Io(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Be(t,Ue({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Oo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Be(t,Ue({name:"circle-x"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pr(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Be(t,Ue({name:"download"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ho(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Be(t,Ue({name:"droplets"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function jo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Be(t,Ue({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Vo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Be(t,Ue({name:"external-link"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Uo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Be(t,Ue({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Bo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Be(t,Ue({name:"pause"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function qo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Be(t,Ue({name:"pen-line"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ko(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Be(t,Ue({name:"pencil"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function _a(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Be(t,Ue({name:"play"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Go(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Be(t,Ue({name:"plus"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function er(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Be(t,Ue({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Wo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Be(t,Ue({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Xo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Be(t,Ue({name:"save"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Yo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Be(t,Ue({name:"settings"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Qo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Be(t,Ue({name:"trash-2"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}var Zo=S('<li role="option"> </li>'),Jo=S('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),ei=S('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Me(r,!0);let a=me(r,"value",3,""),n=me(r,"placeholder",3,"Select..."),s=me(r,"class",3,""),i=me(r,"buttonClass",3,""),o=z(!1),l=z(void 0),d=z(void 0),b=z(""),x=j(()=>{var T;return((T=r.options.find(q=>q.value===a()))==null?void 0:T.label)??n()});function A(T){var q;f(o,!1),(q=r.onchange)==null||q.call(r,T)}function m(){if(!e(l)||!e(d))return;const T=e(l).getBoundingClientRect(),q=e(d).offsetHeight,I=4,O=window.innerHeight-T.bottom-I,G=O<q&&T.top-I>O?T.top-I-q:T.bottom+I,Z=Math.min(T.left,window.innerWidth-T.width);f(b,`position:fixed; top:${G}px; left:${Z}px; width:${T.width}px; z-index:9999;`)}async function N(){f(o,!e(o)),e(o)&&(await Pt(),m())}function L(T){T.key==="Escape"&&f(o,!1)}function g(T){e(o)&&e(l)&&!e(l).contains(T.target)&&e(d)&&!e(d).contains(T.target)&&f(o,!1)}var c=ei();tt("mousedown",it,g),tt("keydown",it,L),tt("scroll",it,()=>{e(o)&&f(o,!1)});var w=K(c),P=k(w),h=k(P),y=k(h,!0);p(h);var C=$(h,2),_=k(C);Te(_,{get icon(){return pn},size:14}),p(C),p(P),nt(P,T=>f(l,T),()=>e(l)),p(w);var M=$(w,2);{var F=T=>{Jt(T,{children:(q,I)=>{var O=Jo();Ye(O,21,()=>r.options,V=>V.value,(V,G)=>{var Z=Zo();we(Z,"tabindex",0);var ae=k(Z,!0);p(Z),J(()=>{we(Z,"aria-selected",e(G).value===a()),Se(Z,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(G).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ne(ae,e(G).label)}),le("mousedown",Z,E=>{E.stopPropagation(),A(e(G).value)}),u(V,Z)}),p(O),nt(O,V=>f(d,V),()=>e(d)),J(()=>Ze(O,e(b))),u(q,O)}})};Q(M,T=>{e(o)&&T(F)})}J(()=>{Se(w,1,`relative inline-flex ${s()??""}`),Se(P,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),we(P,"aria-expanded",e(o)),ne(y,e(x)),Se(C,1,`text-muted shrink-0 transition-transform duration-150 ${e(o)?"rotate-180":""}`)}),le("mousedown",P,T=>{T.stopPropagation(),N()}),u(t,c),Ae()}Ke(["mousedown"]);var ti=Ot('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ri=S('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),ni=S('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),ai=S('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Gt(t,r){Me(r,!0);let a=me(r,"selected",19,()=>[]),n=me(r,"placeholder",3,"Select..."),s=me(r,"class",3,""),i=z(!1),o=z(void 0),l=z(void 0),d=z(""),b=j(()=>new Set(a())),x=j(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(I=>{var O;return((O=r.options.find(V=>V.value===I))==null?void 0:O.label)??I}).join(", "):`${a().length} selected`);function A(I){var V;const O=new Set(e(b));O.has(I)?O.delete(I):O.add(I),(V=r.onchange)==null||V.call(r,[...O])}function m(){var I;(I=r.onchange)==null||I.call(r,r.options.map(O=>O.value))}function N(){var I;(I=r.onchange)==null||I.call(r,[])}function L(){if(!e(o)||!e(l))return;const I=e(o).getBoundingClientRect(),O=e(l).offsetHeight,V=4,G=window.innerHeight-I.bottom-V,ae=G<O&&I.top-V>G?I.top-V-O:I.bottom+V,E=Math.min(I.left,window.innerWidth-I.width);f(d,`position:fixed; top:${ae}px; left:${E}px; min-width:${I.width}px; z-index:9999;`)}async function g(){f(i,!e(i)),e(i)&&(await Pt(),L())}function c(I){e(i)&&e(o)&&!e(o).contains(I.target)&&e(l)&&!e(l).contains(I.target)&&f(i,!1)}function w(I){I.key==="Escape"&&f(i,!1)}var P=ai();tt("mousedown",it,c),tt("keydown",it,w),tt("scroll",it,()=>{e(i)&&f(i,!1)});var h=K(P),y=k(h),C=k(y),_=k(C,!0);p(C);var M=$(C,2),F=k(M);Te(F,{get icon(){return pn},size:14}),p(M),p(y),nt(y,I=>f(o,I),()=>e(o)),p(h);var T=$(h,2);{var q=I=>{Jt(I,{children:(O,V)=>{var G=ni(),Z=k(G),ae=k(Z),E=$(ae,2);p(Z);var R=$(Z,2);Ye(R,17,()=>r.options,H=>H.value,(H,D)=>{var v=ri(),B=k(v),X=k(B);{var ue=se=>{var de=ti();u(se,de)},fe=j(()=>e(b).has(e(D).value));Q(X,se=>{e(fe)&&se(ue)})}p(B);var W=$(B,2),te=k(W,!0);p(W),p(v),J(se=>{Se(B,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${se??""}`),ne(te,e(D).label)},[()=>e(b).has(e(D).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),le("mousedown",v,se=>{se.stopPropagation(),A(e(D).value)}),u(H,v)}),p(G),nt(G,H=>f(l,H),()=>e(l)),J(()=>Ze(G,e(d))),le("mousedown",ae,H=>{H.stopPropagation(),m()}),le("mousedown",E,H=>{H.stopPropagation(),N()}),u(O,G)}})};Q(T,I=>{e(i)&&I(q)})}J(()=>{Se(h,1,`relative inline-flex ${s()??""}`),we(y,"aria-expanded",e(i)),ne(_,e(x)),Se(M,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),le("mousedown",y,I=>{I.stopPropagation(),g()}),u(t,P),Ae()}Ke(["mousedown"]);const Zr="csauto_token";let ba=z(ie(localStorage.getItem(Zr)??""));function xa(){return e(ba)}function ya(t){f(ba,t,!0),t?localStorage.setItem(Zr,t):localStorage.removeItem(Zr)}let wr=null;async function mn(t,r={}){const a=new Headers(r.headers),n=xa();n&&a.set("X-CSAUTO-TOKEN",n);const s=await fetch(t,{...r,headers:a});if(s.status===401){wr||(wr=hn("API token required:",n,"Authentication"));const i=await wr;return wr=null,i===null?s:(ya(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return s}async function ct(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Ir(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Rt(t,r){const a=await mn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function Or(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function si(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function In(t){return ct(`/api/perf?${Or(t)}`)}function oi(){return ct("/api/app_config")}function ii(t){return ct(`/api/residual_columns?${Or(t)}`).then(r=>r.columns??[])}function li(t,r,a={}){const n=new URLSearchParams;return t.forEach(s=>n.append("case",s)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Ir(`/api/residuals_svg?${n}`)}function wa(t){return ct(`/api/restart_origin?${Or(t)}`)}function ci(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function ui(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Ir(`/api/tail?${n}`)}function di(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function fi(t){return ct(`/api/resu_dirs?${Or(t)}`).then(r=>r.dirs??[])}function Jr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function vi(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function gi(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(s=>n.append("column",s)),ct(`/api/probe_position?${n}`)}function hi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Ir(`/api/probe_svg?${r}`)}function pi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Ir(`/api/compare_runs?${r}`)}function On(t){return Rt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function mi(t){return Rt("/api/kill_case",{cases:t}).then(()=>{})}function kr(t){return Rt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function _i(t){return Rt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function bi(t,r){return Rt("/api/case_note",{case:t,note:r}).then(()=>{})}function xi(t,r){return Rt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function yi(t){return Rt("/api/open_gui",{case:t}).then(()=>{})}function wi(){return ct("/api/settings/telemetry")}function ki(t){return Rt("/api/settings/telemetry",{enabled:t})}var Ci=S("<!> <!>",1),Si=S('<input type="number" min="0" step="1" class="w-[80px]"/>'),$i=S('<span class="text-xs text-muted">Loading...</span>'),Pi=S('<span class="text-xs text-muted">No folders found</span>'),Ei=S('<div class="mb-3"><!></div>'),Ri=S('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Ni(t,r){Me(r,!0);const a=ho();let n=z("keep_latest"),s=z(ie(a.keepLast)),i=z(ie([])),o=z(ie([])),l=z(!0),d=j(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const b=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let x=j(()=>e(i).map(m=>({value:m,label:m})));Zn(async()=>{try{f(i,await fi(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function A(){if(e(d)&&e(o).length===0){await We("Please select at least one RESU folder.","Missing selection");return}const m={action:e(n)};e(n)==="keep_latest"?(m.keepLast=e(s),po({keepLast:e(s)})):e(n)==="delete_all"?m.keepLast=0:e(n)==="keep_folder"?m.keepResu=e(o):e(n)==="delete_folder"&&(m.deleteResu=e(o)),ot(m)}{const m=g=>{var c=Ci(),w=K(c);$e(w,{variant:"secondary",onclick:()=>ot(null),children:(h,y)=>{ke();var C=Ve("Cancel");u(h,C)},$$slots:{default:!0}});var P=$(w,2);$e(P,{variant:"primary",onclick:A,children:(h,y)=>{ke();var C=Ve("Clean");u(h,C)},$$slots:{default:!0}}),u(g,c)};let N=j(()=>r.cases.length),L=j(()=>r.cases.length>1?"s":"");hr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(N)??""} case${e(L)??""} selected`},footer:m,children:(g,c)=>{var w=Ri(),P=K(w),h=k(P);Ne(h,{text:"Action",children:(F,T)=>{lt(F,{class:"w-[200px]",get options(){return b},get value(){return e(n)},onchange:q=>f(n,q,!0)})}});var y=$(h,2);{var C=F=>{Ne(F,{text:"Keep last",children:(T,q)=>{var I=Si();Xe(I),et(I,()=>e(s),O=>f(s,O)),u(T,I)}})};Q(y,F=>{e(n)==="keep_latest"&&F(C)})}p(P);var _=$(P,2);{var M=F=>{var T=Ei(),q=k(T);Ne(q,{text:"RESU folders",children:(I,O)=>{var V=be(),G=K(V);{var Z=R=>{var H=$i();u(R,H)},ae=R=>{var H=Pi();u(R,H)},E=R=>{Gt(R,{class:"w-full",get options(){return e(x)},get selected(){return e(o)},onchange:H=>f(o,H,!0),placeholder:"Select folders..."})};Q(G,R=>{e(l)?R(Z):e(i).length===0?R(ae,1):R(E,-1)})}u(I,V)}}),p(T),u(F,T)};Q(_,F=>{e(d)&&F(M)})}u(g,w)},$$slots:{footer:!0,default:!0}})}Ae()}function Mi(t,r){Me(r,!0);let a=j(Ws);var n=be(),s=K(n);{var i=b=>{wo(b,{get cases(){return e(a).props.cases}})},o=b=>{No(b,{get cases(){return e(a).props.cases}})},l=b=>{Ni(b,{get cases(){return e(a).props.cases}})},d=b=>{io(b,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Q(s,b=>{e(a).type==="run"?b(i):e(a).type==="restart"?b(o,1):e(a).type==="clean"?b(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&b(d,3)})}u(t,n),Ae()}let fr=z(ie([])),Ai=0;function Li(){return e(fr)}function Cr(t,r="success",a=3500){const n=++Ai;f(fr,[...e(fr),{id:n,message:t,variant:r}],!0),setTimeout(()=>ka(n),a)}function ka(t){f(fr,e(fr).filter(r=>r.id!==t),!0)}var Ti=S('<div role="status"> </div>'),Fi=S('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Di(t,r){Me(r,!0);let a=j(Li);Jt(t,{children:(n,s)=>{var i=Fi();Ye(i,21,()=>e(a),o=>o.id,(o,l)=>{var d=Ti(),b=k(d,!0);p(d),J(()=>{Se(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ne(b,e(l).message)}),le("click",d,()=>ka(e(l).id)),u(o,d)}),p(i),u(n,i)}}),Ae()}Ke(["click"]);var zi=Ot('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Ii=Ot('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Oi=S('<span role="checkbox"><!></span>'),Hi=S("<span> </span><!>",1),ji=S("<!><span> </span>",1),Vi=S('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function It(t,r){Me(r,!0);const a=g=>{var c=Oi(),w=k(c);{var P=y=>{var C=zi();J(()=>Ze(C,`width: ${o()-4}px; height: ${o()-4}px;`)),u(y,C)},h=y=>{var C=Ii();J(()=>Ze(C,`width: ${o()-4}px; height: ${o()-4}px;`)),u(y,C)};Q(w,y=>{n()&&!s()?y(P):s()&&y(h,1)})}p(c),J(()=>{Se(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||s()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${o()??""}px; height: ${o()??""}px;`),we(c,"aria-checked",s()?"mixed":n()),we(c,"aria-disabled",i()),we(c,"tabindex",i()?-1:0)}),le("click",c,b),le("keydown",c,x),u(g,c)};let n=me(r,"checked",3,!1),s=me(r,"indeterminate",3,!1),i=me(r,"disabled",3,!1),o=me(r,"size",3,16),l=me(r,"label",3,""),d=me(r,"labelFirst",3,!1);function b(g){var w;if(g.stopPropagation(),i())return;const c=s()?!0:!n();(w=r.onchange)==null||w.call(r,c)}function x(g){(g.key===" "||g.key==="Enter")&&(g.preventDefault(),g.stopPropagation(),b(g))}var A=be(),m=K(A);{var N=g=>{var c=Vi(),w=k(c);{var P=y=>{var C=Hi(),_=K(C),M=k(_,!0);p(_);var F=$(_);a(F),J(()=>ne(M,l())),u(y,C)},h=y=>{var C=ji(),_=K(C);a(_);var M=$(_),F=k(M,!0);p(M),J(()=>ne(F,l())),u(y,C)};Q(w,y=>{d()?y(P):y(h,-1)})}p(c),le("click",c,b),le("keydown",c,x),u(g,c)},L=g=>{a(g)};Q(m,g=>{l()?g(N):g(L,-1)})}u(t,A),Ae()}Ke(["click","keydown"]);function _n(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Hr(t,r){localStorage.setItem(t,JSON.stringify(r))}const en=new Map;function mr(t,r,a){vt(t),en.set(t,setInterval(r,a))}function vt(t){const r=en.get(t);r!==void 0&&(clearInterval(r),en.delete(t))}const Tt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Ui=["status","plot","probe","tail","errors"],Wr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ir=_n("csauto_refresh_rates",{});let bt=z(ie({status:ir.status??Tt.status,tail:ir.tail??Tt.tail,plot:ir.plot??Tt.plot,probe:ir.probe??Tt.probe,errors:ir.errors??Tt.errors}));function Bi(){return e(bt)}function qi(t,r){f(bt,{...e(bt),[t]:r},!0),Hr("csauto_refresh_rates",e(bt))}function Ki(){return e(bt).status}function Hn(){return e(bt).tail}function jn(){return e(bt).plot}function Gi(){return e(bt).probe}function Vn(){return e(bt).errors}const tn=new Set;function _r(t){return tn.add(t),()=>tn.delete(t)}function Wi(){tn.forEach(t=>t())}const rn=_n("csauto_autorefresh_enabled",{});function tr(t){return rn[t]??!0}function rr(t,r){rn[t]=r,Hr("csauto_autorefresh_enabled",rn)}var Xi=S("<!> <!>",1),Yi=S('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),Qi=S('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),Zi=S('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function Ji(t,r){Me(r,!0);let a=z(ie(xa())),n=z(ie({...Bi()})),s=z(!0),i=z(!1);Re(()=>{wi().then(b=>{f(s,b.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function o(b){const{min:x}=Wr[b];let A=e(n)[b];(typeof A!="number"||isNaN(A))&&(A=Tt[b]),f(n,{...e(n),[b]:Math.max(x,Math.round(A))},!0)}function l(b,x){const A=x.target,m=A.value.replace(/[^0-9]/g,""),N=parseInt(m,10);isNaN(N)?m===""&&f(n,{...e(n),[b]:Wr[b].min},!0):f(n,{...e(n),[b]:N},!0),A.value=String(e(n)[b])}function d(){ya(e(a));for(const b of Object.keys(e(n)))o(b),qi(b,e(n)[b]);e(i)&&ki(e(s)).catch(()=>{}),r.onClose()}hr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:x=>{var A=Xi(),m=K(A);$e(m,{variant:"secondary",get onclick(){return r.onClose},children:(L,g)=>{ke();var c=Ve("Cancel");u(L,c)},$$slots:{default:!0}});var N=$(m,2);$e(N,{variant:"primary",onclick:d,children:(L,g)=>{ke();var c=Ve("Save");u(L,c)},$$slots:{default:!0}}),u(x,A)},children:(x,A)=>{var m=Zi(),N=K(m),L=$(k(N),2);Xe(L),p(N);var g=$(N,2),c=k(g),w=$(k(c),2);p(c);var P=$(c,2);Ye(P,20,()=>Ui,C=>C,(C,_)=>{const M=j(()=>Wr[_]);var F=Yi(),T=k(F),q=k(T),I=k(q,!0);p(q);var O=$(q,2),V=k(O);p(O),p(T);var G=$(T,2),Z=k(G);Xe(Z),ke(2),p(G),p(F),J(()=>{ne(I,e(M).label),ne(V,`min ${e(M).min??""}ms`),vn(Z,e(n)[_])}),le("input",Z,ae=>l(_,ae)),tt("blur",Z,()=>o(_)),u(C,F)}),p(P),p(g);var h=$(g,2);{var y=C=>{var _=Qi(),M=$(k(_),2);It(M,{get checked(){return e(s)},onchange:F=>f(s,F,!0),label:"Send anonymous usage statistics"}),p(_),u(C,_)};Q(h,C=>{e(i)&&C(y)})}et(L,()=>e(a),C=>f(a,C)),le("click",w,()=>f(n,{...Tt},!0)),u(x,m)},$$slots:{footer:!0,default:!0}}),Ae()}Ke(["click","input"]);const el=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,tl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";let Wt=z(null);function rl(t){f(Wt,t,!0)}function Ft(){return e(Wt)}function cr(t){return e(Wt)===null||e(Wt).capabilities.includes(t)}function nl(t){return e(Wt)===null||e(Wt).control_actions.includes(t)}var al=S('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),sl=S('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),ol=S('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),il=S('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function ll(t,r){Me(r,!0);let a=j(()=>r.shownCases!==r.totalCases),n=z(!1);var s=il(),i=K(s),o=k(i),l=k(o);{var d=D=>{var v=al();J(()=>we(v,"src",el)),u(D,v)},b=j(()=>{var D;return!Ft()||((D=Ft())==null?void 0:D.solver)==="code_saturne"}),x=D=>{var v=sl();J(()=>we(v,"src",tl)),u(D,v)},A=j(()=>{var D;return((D=Ft())==null?void 0:D.solver)==="code_aster"}),m=D=>{var v=ol(),B=k(v,!0);p(v),J(X=>ne(B,X),[()=>{var X;return(X=Ft())==null?void 0:X.solver}]),u(D,v)};Q(l,D=>{e(b)?D(d):e(A)?D(x,1):D(m,-1)})}p(o);var N=$(o,2),L=k(N),g=k(L),c=k(g);{var w=D=>{var v=Ve();J(()=>ne(v,`${r.shownCases??""}/`)),u(D,v)};Q(c,D=>{e(a)&&D(w)})}var P=$(c,1,!0);p(g);var h=$(g,2),y=k(h,!0);p(h),p(L);var C=$(L,2),_=k(C),M=k(_);{var F=D=>{var v=Ve();J(()=>ne(v,`${r.shownRunning??""}/`)),u(D,v)};Q(M,D=>{e(a)&&D(F)})}var T=$(M,1,!0);p(_),ke(2),p(C);var q=$(C,2),I=k(q),O=k(I);{var V=D=>{var v=Ve();J(()=>ne(v,`${r.shownConverged??""}/`)),u(D,v)};Q(O,D=>{e(a)&&D(V)})}var G=$(O,1,!0);p(I),ke(2),p(q),p(N);var Z=$(N,2),ae=k(Z),E=k(ae);Te(E,{get icon(){return Yo},size:18}),p(ae),p(Z),p(i);var R=$(i,2);{var H=D=>{Ji(D,{onClose:()=>f(n,!1)})};Q(R,D=>{e(n)&&D(H)})}J(()=>{ne(P,r.totalCases),ne(y,r.totalCases===1?"case":"cases"),ne(T,r.totalRunning),ne(G,r.totalConverged)}),le("click",ae,()=>f(n,!0)),u(t,s),Ae()}Ke(["click"]);const cl=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var ul=S('<div class="text-xs text-muted font-normal"> </div>'),dl=S('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),fl=S("<div><!> <!></div>"),vl=S('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),gl=S('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),hl=S('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function Ht(t,r){let a=me(r,"eyebrow",3,""),n=me(r,"title",3,""),s=me(r,"wide",3,!1);var i=hl(),o=$(k(i),2);{var l=b=>{var x=gl(),A=k(x);{var m=c=>{var w=be(),P=K(w);ft(P,()=>r.titleSlot),u(c,w)},N=c=>{var w=fl(),P=k(w);{var h=_=>{var M=ul(),F=k(M,!0);p(M),J(()=>ne(F,a())),u(_,M)};Q(P,_=>{a()&&_(h)})}var y=$(P,2);{var C=_=>{var M=dl(),F=k(M,!0);p(M),J(()=>ne(F,n())),u(_,M)};Q(y,_=>{n()&&_(C)})}p(w),u(c,w)};Q(A,c=>{r.titleSlot?c(m):c(N,-1)})}var L=$(A,2);{var g=c=>{var w=vl(),P=k(w);ft(P,()=>r.actions),p(w),u(c,w)};Q(L,c=>{r.actions&&c(g)})}p(x),u(b,x)};Q(o,b=>{(a()||n()||r.titleSlot||r.actions)&&b(l)})}var d=$(o,2);ft(d,()=>r.children),p(i),J(()=>{Se(i,1,`${s()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),we(i,"id",r.id)}),u(t,i)}function nr(t,r){Me(r,!0);let a=me(r,"checked",15,!0);Re(()=>{a()?mr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),vr(()=>vt(r.name)),It(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Ae()}var pl=S("<!> ",1),ml=S('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),_l=S('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),bl=S('<span class="inline-flex"><!></span> <!>',1);function xl(t,r){Me(r,!0);let a=me(r,"label",3,"More"),n=z(!1),s=z(void 0),i=z(void 0),o=z("");function l(){if(!e(s)||!e(i))return;const c=e(s).getBoundingClientRect(),w=e(i).offsetHeight,P=4,h=window.innerHeight-c.bottom-P,C=h<w&&c.top-P>h?c.top-P-w:c.bottom+P,_=Math.min(c.left,window.innerWidth-180);f(o,`position:fixed; top:${C}px; left:${_}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Pt(),l())}function b(c){c.disabled||(f(n,!1),c.onClick())}function x(c){e(n)&&e(s)&&!e(s).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var A=bl();tt("mousedown",it,x),tt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),tt("scroll",it,()=>{e(n)&&f(n,!1)});var m=K(A),N=k(m);$e(N,{variant:"secondary",size:"sm",onclick:d,children:(c,w)=>{var P=pl(),h=K(P);Te(h,{get icon(){return jo}});var y=$(h);J(()=>ne(y,` ${a()??""}`)),u(c,P)},$$slots:{default:!0}}),p(m),nt(m,c=>f(s,c),()=>e(s));var L=$(m,2);{var g=c=>{Jt(c,{children:(w,P)=>{var h=_l();Ye(h,21,()=>r.items,y=>y.label,(y,C)=>{var _=ml(),M=k(_),F=k(M);Te(F,{get icon(){return e(C).icon},size:14});var T=$(F);p(M),p(_),J(()=>{M.disabled=e(C).disabled,we(M,"aria-disabled",e(C).disabled),Se(M,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(C).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ne(T,` ${e(C).label??""}`)}),le("mousedown",M,q=>{q.stopPropagation(),b(e(C))}),u(y,_)}),p(h),nt(h,y=>f(i,y),()=>e(i)),J(()=>Ze(h,e(o))),u(w,h)}})};Q(L,c=>{e(n)&&c(g)})}u(t,A),Ae()}Ke(["mousedown"]);const Dt=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"}];let Xt=z(ie([])),Lr=z(ie([])),pt=z(ie(new Set)),br=z(""),bn=z(""),Et=z(ie([])),st=z(ie([])),Yt=z(""),Ca=z(!0),yl=z(!0),qt=z(ie(_n("csauto_status_views",{}))),xn=z(ie(localStorage.getItem("csauto_status_view_selected")??""));function yn(){return e(Xt)}function wn(){return e(Lr)}function Ut(){return e(pt)}function Un(){return e(br)}function nn(){return e(bn)}function wl(){return e(Et)}function kl(){return e(Et).filter(t=>e(Lr).includes(t))}function Cl(){return e(Et).filter(t=>Dt.some(r=>r.key===t))}function Sl(){return e(st)}function $l(){return e(Yt)}function Pl(){return e(Ca)}function Bn(){return e(qt)}function El(){return e(xn)}function Rl(t){f(Xt,t,!0)}function Nl(t){const r=e(Lr).length===0&&t.length>0;f(Lr,t,!0),r&&e(Et).length===0&&f(Et,[...t,...Dt.map(a=>a.key)],!0)}function Ml(t){f(br,t,!0)}function qn(t){f(Et,t,!0)}function Al(t){f(Yt,t,!0)}function Ll(t){f(Ca,t,!0)}function Tl(t){f(yl,t,!0)}function kn(t){f(xn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function an(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(br,t,!0),f(bn,t,!0)}function Sa(t){f(pt,new Set([t]),!0),f(br,t,!0),f(bn,t,!0)}function sn(t,r,a){const n=a.indexOf(t),s=a.indexOf(r);if(n<0||s<0)return;const[i,o]=n<s?[n,s]:[s,n],l=new Set(e(pt));for(let d=i;d<=o;d++)l.add(a[d]);f(pt,l,!0),f(br,r,!0)}function Kn(t){f(pt,new Set(t),!0)}function Gn(){f(pt,new Set,!0)}function Fl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function $a(){if(!e(Yt).trim())return e(Xt);const t=e(Yt).toLowerCase().trim().split(/\s+/);return e(Xt).filter(r=>{const a=Fl(r);return t.every(n=>a.includes(n))})}function Dl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Wn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Dl(a):""}function zl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Pa(){const t=$a();return e(st).length===0?t:[...t].sort((r,a)=>{for(const n of e(st)){const s=Wn(r,n.key),i=Wn(a,n.key),o=zl(s,i);if(o!==0)return n.dir==="asc"?o:-o}return 0})}function Rr(){return Pa().map(t=>t.case_id)}function Il(t,r){const a=e(st).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(st)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(st,n,!0)}else f(st,[...e(st),{key:t,dir:"asc"}],!0);else a>=0&&e(st).length===1?f(st,[{key:t,dir:e(st)[0].dir==="asc"?"desc":"asc"}],!0):f(st,[{key:t,dir:"asc"}],!0)}function Ol(){return{visibleColumns:[...e(Et)],search:e(Yt),sorts:e(st).map(t=>({...t}))}}function Hl(t){f(Et,[...t.visibleColumns],!0),f(Yt,t.search,!0),f(st,t.sorts.map(r=>({...r})),!0)}function jl(t){f(qt,{...e(qt),[t]:Ol()},!0),Hr("csauto_status_views",e(qt)),kn(t)}function Vl(t){const r={...e(qt)};delete r[t],f(qt,r,!0),Hr("csauto_status_views",r),e(xn)===t&&kn("")}function Sr(){const t=new Set;for(const r of e(Xt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Xn(){for(const t of e(Xt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function Ul(t,r){const a=r.length,n=t.length,s=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,o=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:s,shownRunning:i,totalConverged:o,shownConverged:l}}var Bl=S('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),ql=S('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function Kl(t,r){Me(r,!0);let a=me(r,"initialName",3,""),n=j(wn),s=z(ie(a())),i=z(ie(new Set(r.initialColumns??[...e(n),...Dt.map(V=>V.key)])));function o(V){const G=new Set(e(i));G.has(V)?G.delete(V):G.add(V),f(i,G,!0)}function l(V,G){const Z=new Set(e(i));V.forEach(ae=>G?Z.add(ae):Z.delete(ae)),f(i,Z,!0)}function d(){const V=e(s).trim();V&&r.onSave(V,[...e(i)])}function b(V){V.key==="Escape"&&r.onCancel()}function x(V){V.target.dataset.backdrop!==void 0&&r.onCancel()}let A=z(void 0);Re(()=>{var V,G;(V=e(A))==null||V.focus(),(G=e(A))==null||G.select()});var m=ql(),N=k(m),L=k(N),g=k(L,!0);p(L);var c=$(L,2),w=$(k(c),2);Xe(w),nt(w,V=>f(A,V),()=>e(A)),p(c);var P=$(c,2);{var h=V=>{var G=Bl(),Z=k(G),ae=$(k(Z),2),E=k(ae),R=$(E,2);p(ae),p(Z);var H=$(Z,2);Ye(H,20,()=>e(n),D=>D,(D,v)=>{{let B=j(()=>e(i).has(v));It(D,{get checked(){return e(B)},onchange:()=>o(v),size:14,get label(){return v}})}}),p(H),p(G),le("click",E,()=>l(e(n),!0)),le("click",R,()=>l(e(n),!1)),u(V,G)};Q(P,V=>{e(n).length>0&&V(h)})}var y=$(P,2),C=k(y),_=$(k(C),2),M=k(_),F=$(M,2);p(_),p(C);var T=$(C,2);Ye(T,21,()=>Dt,V=>V.key,(V,G)=>{{let Z=j(()=>e(i).has(e(G).key));It(V,{get checked(){return e(Z)},onchange:()=>o(e(G).key),size:14,get label(){return e(G).label}})}}),p(T),p(y);var q=$(y,2),I=k(q);$e(I,{variant:"secondary",get onclick(){return r.onCancel},children:(V,G)=>{ke();var Z=Ve("Cancel");u(V,Z)},$$slots:{default:!0}});var O=$(I,2);{let V=j(()=>!e(s).trim());$e(O,{variant:"primary",onclick:d,get disabled(){return e(V)},children:(G,Z)=>{ke();var ae=Ve("Save");u(G,ae)},$$slots:{default:!0}})}p(q),p(N),p(m),J(()=>ne(g,r.mode==="create"?"New view":"Edit view")),le("keydown",m,b),le("click",m,x),et(w,()=>e(s),V=>f(s,V)),le("click",M,()=>l(Dt.map(V=>V.key),!0)),le("click",F,()=>l(Dt.map(V=>V.key),!1)),u(t,m),Ae()}Ke(["keydown","click"]);var Gl=S('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function Wl(t,r){Me(r,!0);let a=j(()=>Object.keys(Bn())),n=z(ie(El())),s=z(!1),i=z("create"),o=j(()=>[{value:"",label:"All columns"},...e(a).map(C=>({value:C,label:C}))]);function l(C){if(f(n,C,!0),kn(C),C==="")qn([...wn(),...Dt.map(_=>_.key)]);else{const _=Bn();_[C]&&Hl(_[C])}}function d(){f(i,"edit"),f(s,!0)}function b(){f(i,"create"),f(s,!0)}function x(C,_){qn(_),e(i)==="edit"&&e(n)&&C!==e(n)&&Vl(e(n)),jl(C),f(n,C,!0),f(s,!1)}function A(){f(s,!1)}var m=Gl(),N=K(m),L=k(N);lt(L,{class:"w-[140px]",get options(){return e(o)},get value(){return e(n)},onchange:l});var g=$(L,2),c=k(g);Te(c,{get icon(){return Ko},size:14}),p(g);var w=$(g,2),P=k(w);Te(P,{get icon(){return Go},size:14}),p(w),p(N);var h=$(N,2);{var y=C=>{Jt(C,{children:(_,M)=>{{let F=j(()=>e(i)==="edit"?e(n):""),T=j(wl);Kl(_,{get mode(){return e(i)},get initialName(){return e(F)},get initialColumns(){return e(T)},onSave:x,onCancel:A})}}})};Q(h,C=>{e(s)&&C(y)})}le("click",g,d),le("click",w,b),u(t,m),Ae()}Ke(["click"]);var Xl=S('<th><div class="flex items-center justify-center h-full"><!></div></th>'),Yl=S("<th></th>"),Ql=S('<span style="margin-left: 4px; font-size: 9px;"> </span>'),Zl=S('<th role="button" tabindex="0"> <!></th>'),Jl=S('<td><div class="flex items-center justify-center h-full"><!></div></td>'),ec=S("<td><span> </span></td>"),tc=S('<span class="text-muted"><!></span>'),rc=S('<td role="button" tabindex="0"><!></td>'),nc=S("<!> Open GUI",1),ac=S("<td><!></td>"),sc=S("<td> </td>"),oc=S("<tr></tr>"),ic=S('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function lc(t,r){Me(r,!0);let a=j(()=>r.rows.length>0&&r.rows.every(E=>e(b).has(E.case_id))),n=j(()=>r.rows.some(E=>e(b).has(E.case_id))),s=j(()=>e(n)&&!e(a)),i=j(kl),o=j(()=>new Set(Cl())),l=j(Sl),d=j(Pl),b=j(Ut),x=j(()=>{const E=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(o).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],R=e(i).map(B=>({key:B,label:B,kind:"doe"})),D=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"}].filter(B=>e(o).has(B.key)),v=cr("gui")?[{key:"_actions",label:"",kind:"meta",sticky:"right"}]:[];return[...E,...R,...D,...v]});function A(E){const R=e(l).findIndex(D=>D.key===E);if(R<0)return"";const H=e(l)[R].dir==="asc"?"▲":"▼";return e(l).length>1?`${H}${R+1}`:H}function m(E,R){E!=="_actions"&&Il(E,R.ctrlKey||R.metaKey)}function N(E,R){R.shiftKey?sn(nn()||E,E,Rr()):R.ctrlKey||R.metaKey?an(E):Sa(E)}function L(E,R){var D;const H=((D=E.status)==null?void 0:D.toUpperCase())??"";H!=="DONE"&&H!=="FAILED"||(R.preventDefault(),r.onContextMenu(E.case_id,R.clientX,R.clientY,E.convergence??""))}async function g(E){const R=E.note??"",H=await hn("Case note:",R,`Note — ${E.case_id}`,"",!0);if(H!==null)try{await bi(E.case_id,H)}catch(D){await We(`Failed to set note: ${D instanceof Error?D.message:D}`,"Error")}}async function c(E){try{await yi(E)}catch(R){await We(`Failed to open GUI: ${R instanceof Error?R.message:R}`,"Error")}}function w(E,R){const H=(E==null?void 0:E.toUpperCase())??"";return(H==="DONE"||H==="FAILED")&&R==="converged"?"CONVERGED":(H==="DONE"||H==="FAILED")&&R==="not_converged"?"NOT CONVERGED":H}function P(E,R){const H=(E==null?void 0:E.toUpperCase())??"";return(H==="DONE"||H==="FAILED")&&R==="converged"?"status-converged":(H==="DONE"||H==="FAILED")&&R==="not_converged"?"status-not-converged":H==="RUNNING"?"status-running":H==="DONE"?"status-done":H==="FAILED"?"status-failed":H==="PREPARED"?"status-prepared":"status-unknown"}function h(E){return e(b).has(E.case_id)?"row-selected":""}function y(E,R){var H;return R.key==="case_id"?E.case_id:R.key==="nprocs"?E.nprocs!=null?String(E.nprocs):"":R.key==="nt"?E.nt!=null?String(E.nt):"":R.key==="last_iter"?E.last_iter!=null?String(E.last_iter):"":R.key==="duration"?E.duration??"":R.key==="last_mod"?C(E.last_mod):R.key==="resu_size_mb"?E.resu_size_mb!=null?String(E.resu_size_mb):"":R.kind==="doe"?((H=E.doe)==null?void 0:H[R.key])!=null&&String(E.doe[R.key])!==""?String(E.doe[R.key]):"—":""}function C(E){if(!E)return"";try{const R=new Date(E),H=new Date,D=R.toDateString()===H.toDateString(),v=new Date(H);v.setDate(v.getDate()-1);const B=R.toDateString()===v.toDateString(),X=R.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return D?`Today ${X}`:B?`Yesterday ${X}`:R.toLocaleDateString([],{month:"short",day:"numeric"})+` ${X}`}catch{return E}}let _=z(ie({})),M=z(void 0);Re(()=>{e(d),e(x),r.rows,!(!e(M)||!e(d))&&Pt().then(()=>{if(!e(M))return;const E=Array.from(e(M).querySelectorAll("thead th.sticky-left")),R={};let H=0;E.forEach(D=>{const v=D.dataset.colKey??"";R[v]=H,H+=D.getBoundingClientRect().width}),f(_,R,!0)})});function F(E,R,H){const D=H&&E.key!=="_select"&&E.key!=="_actions"?["status-sortable"]:[];if(!H&&E.key==="case_id"&&D.push("case-id"),E.kind==="doe"&&D.push("status-col-doe"),!H&&E.key==="note"&&D.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&E.sticky==="left"&&D.push("sticky-left"),e(d)&&E.sticky==="right"&&D.push("sticky-right"),e(d)&&E.sticky==="left"){const v=e(x)[R+1];(!v||v.sticky!=="left")&&D.push("sticky-divider")}if(e(d)&&E.sticky==="right"){const v=e(x)[R-1];(!v||v.sticky!=="right")&&D.push("sticky-divider")}return D.join(" ")}function T(E,R){return F(E,R,!0)}function q(E,R){return F(E,R,!1)}function I(E){return!e(d)||!E.sticky?"":E.sticky==="right"?"position:sticky;right:0;":E.sticky==="left"&&E.key in e(_)?`position:sticky;left:${e(_)[E.key]}px;`:""}var O=ic(),V=k(O),G=k(V),Z=k(G);Ye(Z,23,()=>e(x),E=>E.key,(E,R,H)=>{var D=be(),v=K(D);{var B=fe=>{var W=Xl(),te=k(W),se=k(te);It(se,{get checked(){return e(a)},get indeterminate(){return e(s)},get onchange(){return r.onToggleAll},size:14}),p(te),p(W),J((de,ce)=>{Se(W,1,`${de??""} !px-2.5 !py-0 w-9`),we(W,"data-col-key",e(R).key),Ze(W,ce)},[()=>T(e(R),e(H)),()=>I(e(R))]),u(fe,W)},X=fe=>{var W=Yl();J((te,se)=>{Se(W,1,te),we(W,"data-col-key",e(R).key),Ze(W,se)},[()=>dt(T(e(R),e(H))),()=>I(e(R))]),u(fe,W)},ue=fe=>{var W=Zl(),te=k(W),se=$(te);{var de=re=>{var xe=Ql(),he=k(xe,!0);p(xe),J(Ee=>ne(he,Ee),[()=>A(e(R).key)]),u(re,xe)},ce=j(()=>A(e(R).key));Q(se,re=>{e(ce)&&re(de)})}p(W),J((re,xe)=>{Se(W,1,re),we(W,"data-col-key",e(R).key),Ze(W,xe),ne(te,`${e(R).label??""} `)},[()=>dt(T(e(R),e(H))),()=>I(e(R))]),le("click",W,re=>m(e(R).key,re)),le("keydown",W,re=>{(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),m(e(R).key,re))}),u(fe,W)};Q(v,fe=>{e(R).key==="_select"?fe(B):e(R).key==="_actions"?fe(X,1):fe(ue,-1)})}u(E,D)}),p(Z),p(G);var ae=$(G);Ye(ae,21,()=>r.rows,E=>E.case_id,(E,R)=>{var H=oc();Ye(H,23,()=>e(x),D=>D.key,(D,v,B)=>{var X=be(),ue=K(X);{var fe=ce=>{var re=Jl(),xe=k(re),he=k(xe);{let Ee=j(()=>e(b).has(e(R).case_id));It(he,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e(R).case_id),size:14})}p(xe),p(re),J((Ee,pe)=>{Se(re,1,`${Ee??""} !px-2.5 !py-0 w-9`),we(re,"data-col-key",e(v).key),Ze(re,pe)},[()=>q(e(v),e(B)),()=>I(e(v))]),u(ce,re)},W=ce=>{var re=ec(),xe=k(re),he=k(xe,!0);p(xe),p(re),J((Ee,pe,Fe,ze)=>{Se(re,1,Ee),we(re,"data-col-key",e(v).key),Ze(re,pe),Se(xe,1,`status-pill ${Fe??""}`),ne(he,ze)},[()=>dt(q(e(v),e(B))),()=>I(e(v)),()=>P(e(R).status,e(R).convergence),()=>w(e(R).status,e(R).convergence)]),u(ce,re)},te=ce=>{var re=rc(),xe=k(re);{var he=pe=>{var Fe=Ve();J(()=>ne(Fe,e(R).note)),u(pe,Fe)},Ee=pe=>{var Fe=tc(),ze=k(Fe);Te(ze,{get icon(){return qo},size:12}),p(Fe),u(pe,Fe)};Q(xe,pe=>{e(R).note?pe(he):pe(Ee,-1)})}p(re),J((pe,Fe)=>{Se(re,1,pe),we(re,"data-col-key",e(v).key),Ze(re,Fe),we(re,"title",e(R).note||"Add note")},[()=>dt(q(e(v),e(B))),()=>I(e(v))]),le("click",re,pe=>{pe.stopPropagation(),g(e(R))}),le("keydown",re,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),pe.stopPropagation(),g(e(R)))}),u(ce,re)},se=ce=>{var re=ac(),xe=k(re);$e(xe,{variant:"primary",size:"sm",onclick:he=>{he.stopPropagation(),c(e(R).case_id)},children:(he,Ee)=>{var pe=nc(),Fe=K(pe);Te(Fe,{get icon(){return Vo},size:12}),ke(),u(he,pe)},$$slots:{default:!0}}),p(re),J((he,Ee)=>{Se(re,1,he),we(re,"data-col-key",e(v).key),Ze(re,Ee)},[()=>dt(q(e(v),e(B))),()=>I(e(v))]),u(ce,re)},de=ce=>{var re=sc(),xe=k(re,!0);p(re),J((he,Ee,pe)=>{Se(re,1,he),we(re,"data-col-key",e(v).key),Ze(re,Ee),ne(xe,pe)},[()=>dt(q(e(v),e(B))),()=>I(e(v)),()=>y(e(R),e(v))]),u(ce,re)};Q(ue,ce=>{e(v).key==="_select"?ce(fe):e(v).key==="status"?ce(W,1):e(v).key==="note"?ce(te,2):e(v).key==="_actions"?ce(se,3):ce(de,-1)})}u(D,X)}),p(H),J(D=>Se(H,1,D),[()=>dt(h(e(R)))]),le("click",H,D=>N(e(R).case_id,D)),le("contextmenu",H,D=>L(e(R),D)),u(E,H)}),p(ae),p(V),nt(V,E=>f(M,E),()=>e(M)),p(O),J(()=>Se(O,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,O),Ae()}Ke(["click","keydown","contextmenu"]);var cc=S('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function uc(t,r){Me(r,!0);let a=j(()=>{const m=Math.min(r.x,window.innerWidth-180),N=Math.min(r.y,window.innerHeight-120);return`left: ${m}px; top: ${N}px;`});async function n(m){try{for(const N of r.cases)await xi(N,m)}catch(N){console.error("Failed to set convergence:",N)}r.onClose()}const s=r.cases.length>1?` (${r.cases.length})`:"";var i=cc();tt("keydown",it,m=>{m.key==="Escape"&&r.onClose()});var o=k(i),l=k(o);p(o);var d=$(o,2),b=k(d);p(d);var x=$(d,2),A=k(x);p(x),p(i),J(()=>{Ze(i,e(a)),Se(o,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ne(l,`Mark Converged${s}`),Se(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ne(b,`Mark Not Converged${s}`),Se(x,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ne(A,`Clear Mark${s}`)}),le("click",o,()=>n("converged")),le("click",d,()=>n("not_converged")),le("click",x,()=>n("")),u(t,i),Ae()}Ke(["click"]);var dc=S("<!> Refresh",1),fc=S("<!> <!>",1),vc=S("<!> Run",1),gc=S("<!> Restart",1),hc=S("<!> Stop",1),pc=S("<!> Kill",1),mc=S("<!> Clean",1),_c=S('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),bc=S('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function xc(t,r){Me(r,!0);function a(){return[...Ut()]}async function n(){const v=a();if(!v.length)return;const B=await Xs(v);if(B)try{await On({cases:v,n:B.n,nt:B.nt,maxParallel:B.maxParallel}),r.onRefresh()}catch(X){await We(`Run failed: ${X instanceof Error?X.message:X}`,"Error")}}async function s(){const v=a();if(!v.length)return;const B=await Ys(v);if(B)try{await On({cases:v,n:B.n,nt:B.nt,maxParallel:B.maxParallel,restart:!0,restartMode:B.restartMode,restartValue:B.restartValue}),r.onRefresh()}catch(X){await We(`Restart failed: ${X instanceof Error?X.message:X}`,"Error")}}async function i(){const v=a();if(!(!v.length||!await Dn(`Kill ${v.length} case${v.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await mi(v),r.onRefresh()}catch(X){await We(`Kill failed: ${X instanceof Error?X.message:X}`,"Error")}}async function o(){const v=a();if(!(!v.length||!await Dn(`Stop ${v.length} case${v.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await kr({cases:v,action:"stop"}),r.onRefresh(),Cr(`Stop requested for ${v.length} case${v.length>1?"s":""} — will checkpoint and exit`)}catch(X){await We(`Stop failed: ${X instanceof Error?X.message:X}`,"Error")}}async function l(){const v=a();if(v.length)try{await kr({cases:v,action:"checkpoint"}),r.onRefresh(),Cr(`Checkpoint requested for ${v.length} case${v.length>1?"s":""}`)}catch(B){await We(`Checkpoint failed: ${B instanceof Error?B.message:B}`,"Error")}}async function d(){const v=a();if(!v.length)return;const B=await hn("Extend by how many additional time steps?","500","Extend Run");if(B===null)return;const X=parseInt(B,10);if(!Number.isFinite(X)||X<=0){await We("Enter a positive integer number of time steps.","Error");return}try{await kr({cases:v,action:"extend",value:X}),r.onRefresh(),Cr(`Extended ${v.length} case${v.length>1?"s":""} by ${X} time steps`)}catch(ue){await We(`Extend failed: ${ue instanceof Error?ue.message:ue}`,"Error")}}async function b(){const v=a();if(v.length)try{await kr({cases:v,action:"flush"}),Cr(`Flush requested for ${v.length} case${v.length>1?"s":""}`)}catch(B){await We(`Flush failed: ${B instanceof Error?B.message:B}`,"Error")}}async function x(){const v=a();if(!v.length)return;const B=await Qs(v);if(B)try{await _i({cases:v,keepLast:B.keepLast,keepResu:B.keepResu,deleteResu:B.deleteResu,pruneResu:!0}),r.onRefresh(),Wi()}catch(X){await We(`Cleanup failed: ${X instanceof Error?X.message:X}`,"Error")}}function A(){const v=Rr();v.length>0&&v.every(X=>Ut().has(X))?Gn():Kn(v)}function m(v){an(v)}let N=z(ie(tr("status")));Re(()=>{rr("status",e(N))}),Ll(!0);let L=j(()=>{const v=Sr();return v.size>0&&[...v].some(B=>B==="PREPARED"||B==="DONE"||B==="FAILED")}),g=j(()=>{if(!cr("restart"))return!1;const v=Sr();return v.size>0&&[...v].some(B=>B==="DONE"||B==="FAILED")&&Xn()}),c=j(()=>{const v=Sr();return v.size>0&&v.has("RUNNING")}),w=j(()=>{if(!cr("control"))return!1;const v=Sr();return v.size>0&&v.has("RUNNING")});const P=[{label:"Extend",icon:Uo,onClick:d,action:"extend"},{label:"Checkpoint",icon:Xo,onClick:l,action:"checkpoint"},{label:"Flush",icon:Ho,onClick:b,action:"flush"}];let h=j(()=>P.filter(v=>nl(v.action)).map(v=>({label:v.label,icon:v.icon,onClick:v.onClick,disabled:!e(w)}))),y=j(Xn),C=z(ie($l())),_=null;function M(){_&&clearTimeout(_),_=setTimeout(()=>{Al(e(C))},200)}Re(()=>Tl(e(N)));let F=z(!1),T=z(0),q=z(0),I=z(ie([])),O=z("");function V(v,B,X,ue){f(I,Ut().has(v)?[...Ut()]:[v],!0),f(O,ue,!0),f(T,B,!0),f(q,X,!0),f(F,!0)}function G(){f(F,!1)}function Z(v){const B=Rr();if(B.length){if(v.key==="Escape"){Gn(),G();return}if((v.ctrlKey||v.metaKey)&&v.key==="a"){v.preventDefault(),Kn(B);return}if(v.key==="ArrowDown"||v.key==="ArrowUp"){v.preventDefault();const X=v.key==="ArrowDown"?1:-1,ue=Un(),fe=B.indexOf(ue),W=Math.max(0,Math.min(B.length-1,fe+X)),te=B[W];v.shiftKey?sn(nn()||B[0],te,B):Sa(te),Ml(te);return}if(v.key===" "){v.preventDefault();const X=Un();X&&(v.shiftKey?sn(nn()||X,X,Rr()):an(X))}}}var ae=bc();tt("click",it,G),tt("scroll",it,G);var E=K(ae),R=k(E);Ht(R,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:B=>{var X=fc(),ue=K(X);{let te=j(Ki);nr(ue,{name:"status",get intervalMs(){return e(te)},get onRefresh(){return r.onRefresh},get checked(){return e(N)},set checked(se){f(N,se,!0)}})}var fe=$(ue,2);{var W=te=>{$e(te,{variant:"primary",onclick:()=>r.onRefresh(),children:(se,de)=>{var ce=dc(),re=K(ce);Te(re,{get icon(){return er}}),ke(),u(se,ce)},$$slots:{default:!0}})};Q(fe,te=>{e(N)||te(W)})}u(B,X)},children:(B,X)=>{var ue=_c(),fe=K(ue),W=k(fe),te=k(W);Xe(te);var se=$(te,2);Wl(se,{}),p(W);var de=$(W,2),ce=k(de),re=k(ce);p(ce);var xe=$(ce,2);{let U=j(()=>!e(L));$e(xe,{variant:"run",size:"sm",onclick:n,get disabled(){return e(U)},children:(ee,oe)=>{var ve=vc(),ye=K(ve);Te(ye,{get icon(){return _a}}),ke(),u(ee,ve)},$$slots:{default:!0}})}var he=$(xe,2);{var Ee=U=>{{let ee=j(()=>!e(g));$e(U,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(ee)},children:(oe,ve)=>{var ye=gc(),ge=K(ye);Te(ge,{get icon(){return Wo}}),ke(),u(oe,ye)},$$slots:{default:!0}})}},pe=j(()=>cr("restart"));Q(he,U=>{e(pe)&&U(Ee)})}var Fe=$(he,2);{var ze=U=>{{let ee=j(()=>!e(w));$e(U,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(ee)},children:(oe,ve)=>{var ye=hc(),ge=K(ye);Te(ge,{get icon(){return Io}}),ke(),u(oe,ye)},$$slots:{default:!0}})}},Qe=j(()=>cr("control"));Q(Fe,U=>{e(Qe)&&U(ze)})}var je=$(Fe,2);{var rt=U=>{xl(U,{get items(){return e(h)}})};Q(je,U=>{e(h).length>0&&U(rt)})}var Le=$(je,2);{let U=j(()=>!e(c));$e(Le,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(U)},children:(ee,oe)=>{var ve=pc(),ye=K(ve);Te(ye,{get icon(){return Oo}}),ke(),u(ee,ve)},$$slots:{default:!0}})}var Pe=$(Le,2);{let U=j(()=>!e(y));$e(Pe,{variant:"secondary",size:"sm",onclick:x,get disabled(){return e(U)},children:(ee,oe)=>{var ve=mc(),ye=K(ve);Te(ye,{get icon(){return Qo}}),ke(),u(ee,ve)},$$slots:{default:!0}})}p(de),p(fe);var Y=$(fe,2);{let U=j(Pa);lc(Y,{get rows(){return e(U)},onContextMenu:V,onToggleAll:A,onToggleRow:m})}J(U=>ne(re,`${U??""} selected`),[()=>Ut().size]),le("input",te,M),et(te,()=>e(C),U=>f(C,U)),u(B,ue)},$$slots:{actions:!0,default:!0}}),p(E);var H=$(E,2);{var D=v=>{uc(v,{get cases(){return e(I)},get x(){return e(T)},get y(){return e(q)},get currentValue(){return e(O)},onClose:G})};Q(H,v=>{e(F)&&v(D)})}le("keydown",E,Z),u(t,ae),Ae()}Ke(["keydown","input"]);var yc=S('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Qt(t,r){var a=yc(),n=k(a);ft(n,()=>r.children),p(a),u(t,a)}function Cn(t){return t.map(r=>({value:r,label:r}))}var wc=S('<input type="number" step="any" class="w-[110px]"/>'),kc=S("<!> <!> <!> <!> <!> <!>",1);function Sn(t,r){Me(r,!0);let a=me(r,"columnLabel",3,"Columns"),n=me(r,"xMinLabel",3,"Iter min"),s=j(()=>Cn(r.allCases)),i=j(()=>r.columns.map(d=>({value:d,label:d}))),o=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Qt(t,{children:(d,b)=>{var x=kc(),A=K(x);Ne(A,{text:"Cases",children:(y,C)=>{Gt(y,{class:"w-[160px]",get options(){return e(s)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var m=$(A,2);{var N=y=>{var C=be(),_=K(C);ft(_,()=>r.middleSlot),u(y,C)};Q(m,y=>{r.middleSlot&&y(N)})}var L=$(m,2);Ne(L,{get text(){return a()},children:(y,C)=>{Gt(y,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var g=$(L,2);Ne(g,{text:"Start from",children:(y,C)=>{lt(y,{class:"w-[140px]",get options(){return o},get value(){return r.startFrom},onchange:_=>r.onStartFromChange(_)})}});var c=$(g,2);{var w=y=>{Ne(y,{get text(){return n()},children:(C,_)=>{var M=wc();Xe(M),J(()=>vn(M,r.xMin)),le("input",M,l),u(C,M)}})};Q(c,y=>{r.startFrom==="custom"&&y(w)})}var P=$(c,2);{var h=y=>{var C=be(),_=K(C);ft(_,()=>r.extraSlot),u(y,C)};Q(P,y=>{r.extraSlot&&y(h)})}u(d,x)}}),Ae()}Ke(["input"]);var Cc=S('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),Sc=S('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Zt(t,r){let a=me(r,"emptyMessage",3,"");var n=Sc(),s=k(n);{var i=l=>{var d=be(),b=K(d);zr(b,()=>r.svgHtml),u(l,d)},o=l=>{var d=Cc(),b=k(d),x=k(b,!0);p(b),p(d),J(()=>ne(x,a()||"No data to display.")),u(l,d)};Q(s,l=>{r.svgHtml?l(i):l(o,-1)})}p(n),J(()=>we(n,"id",r.id)),u(t,n)}async function $n(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:s,height:i}=$c(n),o=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=s*o,l.height=i*o;const d=l.getContext("2d");if(!d)return;d.scale(o,o);const b=new XMLSerializer().serializeToString(n),x=new Blob([b],{type:"image/svg+xml;charset=utf-8"}),A=URL.createObjectURL(x),m=new Image;m.width=s,m.height=i,await new Promise((L,g)=>{m.onload=()=>{d.drawImage(m,0,0,s,i),URL.revokeObjectURL(A),L()},m.onerror=g,m.src=A});const N=await new Promise(L=>l.toBlob(L,"image/png"));N&&await Ra(N,Pc(r))}function xr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,s=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Ec(`${t}_${n}_${s}.${a}`)}async function Ea(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Ra(a,r)}function $c(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Ra(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(s){if((s==null?void 0:s.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function Pc(t){return t.endsWith(".png")?t:`${t}.png`}function Ec(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Na=z(ie([])),Ma=z(ie([])),Aa=z(ie([])),La=z("zero"),Ta=z(0),Fa=z(""),Rc=z(!0);function Nc(){return{selectedCases:e(Na),columns:e(Ma),selectedColumns:e(Aa),startFrom:e(La),iterMin:e(Ta),svgHtml:e(Fa),autoRefresh:e(Rc)}}function Yn(t){f(Na,t,!0)}function Mc(t){f(Ma,t,!0)}function Xr(t){f(Aa,t,!0)}function Ac(t){f(La,t,!0)}function Lc(t){f(Ta,t,!0)}function $r(t){f(Fa,t,!0)}var Tc=S("<!> Refresh",1),Fc=S("<!> <!>",1),Dc=S("<!> Download as PNG",1),zc=S('<div class="self-end ml-auto"><!></div>'),Ic=S('<!> <div class="flex justify-center"><!></div>',1),Oc=S('<div class="flex justify-center"><!></div>'),Hc=S('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),jc=S("<!> <!>",1);function Vc(t,r){Me(r,!0);let a=j(Nc),n=z("");const s=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function o(){if(e(a).selectedCases.length)try{const g=await ii(e(a).selectedCases);f(n,"");const c=g.filter(w=>!s.has(w.toLowerCase().replace(/\s+/g,"_")));if(Mc(c),c.length===0){Xr([]),$r("");return}if(e(a).selectedColumns.length===0){const w=c.filter(P=>i.some(h=>P.toLowerCase().includes(h)));Xr(w.length>0?w:[c[0]])}}catch(g){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",g)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await o(),!e(a).selectedColumns.length)))try{let g=0,c=!0;if(e(a).startFrom==="restart"){const P=await wa(e(a).selectedCases),h=Object.values(P.origins).map(y=>y.iteration).filter(y=>y!==void 0&&Number.isFinite(y));g=h.length>0?Math.min(...h):0}else e(a).startFrom==="custom"&&(g=e(a).iterMin);const w=await li(e(a).selectedCases,e(a).selectedColumns,{xMin:g,includeHistory:c});f(n,""),w&&$r(w)}catch(g){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",g)}}function d(g){if(Yn(g),g.length===0){$r("");return}o(),l()}function b(g){if(Xr(g),g.length===0){$r("");return}l()}function x(g){Ac(g),l()}function A(g){Lc(g),l()}let m=z(ie(tr("plot")));Re(()=>{rr("plot",e(m))}),Re(()=>{e(m)?mr("residualPlot",l,jn()):vt("residualPlot")});let N=!1;Re(()=>{r.allCases.length>0&&!N&&(N=!0,Yn([...r.allCases]),o().then(()=>l()))});const L=_r(()=>{N&&o().then(()=>l())});vr(()=>{vt("residualPlot"),L()}),Ht(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var w=Fc(),P=K(w);{let C=j(jn);nr(P,{name:"residualPlot",get intervalMs(){return e(C)},onRefresh:l,get checked(){return e(m)},set checked(_){f(m,_,!0)}})}var h=$(P,2);{var y=C=>{$e(C,{variant:"primary",onclick:l,children:(_,M)=>{var F=Tc(),T=K(F);Te(T,{get icon(){return er}}),ke(),u(_,F)},$$slots:{default:!0}})};Q(h,C=>{e(m)||C(y)})}u(c,w)},children:(c,w)=>{var P=jc(),h=K(P);{var y=F=>{const T=G=>{var Z=zc(),ae=k(Z);{let E=j(()=>!e(a).svgHtml);$e(ae,{variant:"secondary",size:"sm",onclick:()=>$n("plot-holder",xr("residuals",e(a).selectedCases)),get disabled(){return e(E)},children:(R,H)=>{var D=Dc(),v=K(D);Te(v,{get icon(){return pr}}),ke(),u(R,D)},$$slots:{default:!0}})}p(Z),u(G,Z)};var q=Ic(),I=K(q);Sn(I,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:b,get startFrom(){return e(a).startFrom},onStartFromChange:x,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:A,get extraSlot(){return T}});var O=$(I,2),V=k(O);{let G=j(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Zt(V,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(G)}})}p(O),u(F,q)},C=F=>{var T=Oc(),q=k(T);Zt(q,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),p(T),u(F,T)};Q(h,F=>{e(a).columns.length>0?F(y):F(C,-1)})}var _=$(h,2);{var M=F=>{var T=Hc(),q=k(T,!0);p(T),J(()=>ne(q,e(n))),u(F,T)};Q(_,F=>{e(n)&&F(M)})}u(c,P)},$$slots:{actions:!0,default:!0}}),Ae()}function Da(t){const{scope:r,getState:a,setState:n,setHasData:s,getAxis:i}=t;async function o(){const m=a();if(m.selectedCases.length)try{let N=await Jr(m.selectedCases,r);if(t.filterFiles&&(N=t.filterFiles(N)),n({files:N}),s(N.length>0),N.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!m.file||!N.includes(m.file))&&(n({file:N[0]}),await l())}catch(N){console.error(`Failed to load ${r} files:`,N)}}async function l(){const m=a();if(!(!m.selectedCases.length||!m.file))try{const N=await vi(m.selectedCases,[m.file]),L=t.filterColumns?t.filterColumns(N):N;t.onColumnsLoaded?t.onColumnsLoaded(N):n({columns:L});const g=a();if(g.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}g.selectedColumns.length===0&&n({selectedColumns:[g.columns[0]]})}catch(N){console.error(`Failed to load ${r} columns:`,N)}}async function d(){let m=a();if(m.selectedCases.length){if(await o(),m=a(),!m.file){n({positionText:"",svgHtml:""});return}if((m.columns.length===0||m.selectedColumns.length===0)&&(await l(),m=a(),!m.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let N;const L=a();if(L.startFrom==="restart"){const c=await wa(L.selectedCases),w=i().toLowerCase(),P=w==="t"||w==="time"?"time":"iteration",h=Object.values(c.origins).map(y=>y[P]).filter(y=>y!==void 0&&Number.isFinite(y));N=h.length>0?Math.min(...h):void 0}else L.startFrom==="custom"&&(N=L.xMin);const g=await hi({cases:L.selectedCases,probes:[L.file],columns:L.selectedColumns,axis:i(),timeMin:typeof N=="number"?N:void 0,xMin:N,includeHistory:!0});g&&n({svgHtml:g})}catch(N){console.error(`Failed to load ${r} plot:`,N)}}}async function b(m){if(n({selectedCases:m}),m.length===0){n({svgHtml:""});return}await o(),r==="monitoring"&&await d()}function x(m){if(n({selectedColumns:m}),m.length===0){n({svgHtml:""});return}d()}async function A(m){n({file:m}),await l(),await d()}return{loadFiles:o,loadColumns:l,loadPlot:d,handleCasesChange:b,handleColumnsChange:x,handleFileChange:A}}function za(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let Bt=z("time"),on=z(ie(za())),ln=z(ie({...za(),axis:""})),Uc=z(!0),Tr=z(!1),Fr=z(!1);function Bc(){return e(Bt)}function qc(t){f(Bt,t,!0)}function Kc(){return e(Tr)}function cn(t){f(Tr,t,!0)}function Gc(){return e(Fr)}function un(t){f(Fr,t,!0)}function Wc(){e(Bt)==="time"&&!e(Tr)&&e(Fr)?f(Bt,"profile"):e(Bt)==="profile"&&!e(Fr)&&e(Tr)&&f(Bt,"time")}function Qn(){return e(on)}function Yr(){return e(ln)}function kt(t){f(on,{...e(on),...t},!0)}function At(t){f(ln,{...e(ln),...t},!0)}function Xc(){return e(Uc)}var Yc=S("<!> Download as PNG",1),Qc=S('<div class="self-end ml-auto"><!></div>'),Zc=S("<div> </div>"),Jc=S('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),eu=S('<!>  <!> <div class="flex justify-center"><!></div>',1),tu=S('<div class="flex justify-center"><!></div>');function ru(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=j(Qn);const s=new Set(["time","t","iteration","iter"]),i=Da({scope:"monitoring",getState:Qn,setState:kt,setHasData:cn,filterFiles:g=>g.filter(c=>{const w=c.replace(/\.csv$/i,"").toLowerCase();return w!=="coords"&&!w.includes("coordinates")}),filterColumns:g=>g.filter(c=>!s.has(c.toLowerCase())),onColumnsLoaded:g=>{const c=g.filter(w=>!s.has(w.toLowerCase()));kt({columns:c}),o()},getAxis:()=>"time"});async function o(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const g=[];for(const C of e(n).selectedColumns){const _=await gi(e(n).selectedCases[0],e(n).file,[C]);_.found&&g.push({col:C,x:_.x,y:_.y,z:_.z})}if(!g.length){kt({positionText:""});return}const c=C=>{let _=0;for(const M of C){if(M===void 0)continue;const F=String(M),T=F.indexOf(".");T>=0&&(_=Math.max(_,F.length-T-1))}return _},w=c(g.map(C=>C.x)),P=c(g.map(C=>C.y)),h=c(g.map(C=>C.z)),y=g.map(C=>{const _=[];return C.x!==void 0&&_.push(`x=${C.x.toFixed(w)}`),C.y!==void 0&&_.push(`y=${C.y.toFixed(P)}`),C.z!==void 0&&_.push(`z=${C.z.toFixed(h)}`),`Probe position [${C.col}] : ${_.join(" · ")}`});kt({positionText:y.join(`
`)})}catch{kt({positionText:""})}}function l(g){i.handleColumnsChange(g),g.length>0&&o()}let d=j(()=>e(n).files.map(g=>({value:g,label:g.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),b=!1;Re(()=>{r.allCases.length>0&&!b&&(b=!0,kt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Re(()=>{a(i.loadPlot)});let x=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var A=be(),m=K(A);{var N=g=>{const c=F=>{Ne(F,{text:"Quantity",children:(T,q)=>{lt(T,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},w=F=>{var T=Qc(),q=k(T);{let I=j(()=>!e(n).svgHtml);$e(q,{variant:"secondary",size:"sm",onclick:()=>$n("probe-plot-holder",xr("probe",e(n).selectedCases)),get disabled(){return e(I)},children:(O,V)=>{var G=Yc(),Z=K(G);Te(Z,{get icon(){return pr}}),ke(),u(O,G)},$$slots:{default:!0}})}p(T),u(F,T)};var P=eu(),h=K(P);Sn(h,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:F=>{kt({startFrom:F}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:F=>{kt({xMin:F}),i.loadPlot()},get extraSlot(){return w}});var y=$(h,2);{var C=F=>{var T=Jc();Ye(T,21,()=>e(n).positionText.split(`
`).sort(),fn,(q,I)=>{var O=Zc(),V=k(O,!0);p(O),J(()=>ne(V,e(I))),u(q,O)}),p(T),u(F,T)};Q(y,F=>{e(n).positionText&&F(C)})}var _=$(y,2),M=k(_);Zt(M,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(x)}}),p(_),u(g,P)},L=g=>{var c=tu(),w=k(c);Zt(w,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),p(c),u(g,c)};Q(m,g=>{e(n).files.length>0?g(N):g(L,-1)})}u(t,A),Ae()}var nu=S("<!> <!>",1),au=S("<!> Download as PNG",1),su=S('<div class="self-end ml-auto"><!></div>'),ou=S('<!>  <div class="flex justify-center"><!></div>',1),iu=S('<div class="flex justify-center"><!></div>');function lu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=j(Yr);const s=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const w=c.map(P=>P.toLowerCase());for(const P of s){const h=w.indexOf(P);if(h>=0)return c[h]}return c[0]??""}const o=Da({scope:"profiles",getState:Yr,setState:At,setHasData:un,onColumnsLoaded:c=>{const w=e(n).axis||i(c),P=c.filter(h=>h!==w).toSorted((h,y)=>h.localeCompare(y));At({columns:P,axis:w,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:P.length?[P[0]]:[]})},getAxis:()=>Yr().axis});function l(c){const w=e(n).axis;At({axis:c});const h=[...e(n).columns,...w?[w]:[]].filter(y=>y!==c).toSorted((y,C)=>y.localeCompare(C));At({columns:h}),o.loadPlot()}let d=j(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),b=j(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,w)=>c.localeCompare(w)).map(c=>({value:c,label:c}))),x=!1;Re(()=>{r.allCases.length>0&&!x&&(x=!0,At({selectedCases:[...r.allCases]}),o.loadFiles().then(()=>o.loadPlot()))}),Re(()=>{a(o.loadPlot)});let A=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var m=be(),N=K(m);{var L=c=>{const w=M=>{var F=nu(),T=K(F);Ne(T,{text:"Profile",children:(I,O)=>{lt(I,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return o.handleFileChange}})}});var q=$(T,2);Ne(q,{text:"X axis",children:(I,O)=>{lt(I,{class:"w-[140px]",get options(){return e(b)},get value(){return e(n).axis},onchange:l})}}),u(M,F)},P=M=>{var F=su(),T=k(F);{let q=j(()=>!e(n).svgHtml);$e(T,{variant:"secondary",size:"sm",onclick:()=>$n("profile-plot-holder",xr("profile",e(n).selectedCases)),get disabled(){return e(q)},children:(I,O)=>{var V=au(),G=K(V);Te(G,{get icon(){return pr}}),ke(),u(I,V)},$$slots:{default:!0}})}p(F),u(M,F)};var h=ou(),y=K(h);Sn(y,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return o.handleCasesChange},get middleSlot(){return w},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return o.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:M=>{At({startFrom:M}),o.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:M=>{At({xMin:M}),o.loadPlot()},get extraSlot(){return P}});var C=$(y,2),_=k(C);Zt(_,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(A)}}),p(C),u(c,h)},g=c=>{var w=iu(),P=k(w);Zt(P,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),p(w),u(c,w)};Q(N,c=>{e(n).files.length>0?c(L):c(g,-1)})}u(t,m),Ae()}var cu=S('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),uu=S("<!> Refresh",1),du=S("<!> <!>",1);function fu(t,r){Me(r,!0);let a=j(Bc),n=j(Xc),s=j(Kc),i=j(Gc),o=z(ie(tr("probe")));Re(()=>{rr("probe",e(o))});let l=z(void 0);function d(){var L;(L=e(l))==null||L()}async function b(){if(r.allCases.length){try{const g=(await Jr(r.allCases,"monitoring")).filter(c=>{const w=c.replace(/\.csv$/i,"").toLowerCase();return w!=="coords"&&!w.includes("coordinates")});cn(g.length>0)}catch{cn(!1)}try{const L=await Jr(r.allCases,"profiles");un(L.length>0)}catch{un(!1)}}}Re(()=>{r.allCases.length>0&&b()}),_r(()=>{b(),d()}),Re(()=>{e(s),e(i),Wc()});function x(L){L==="time"&&!e(s)||L==="profile"&&!e(i)||qc(L)}var A=be(),m=K(A);{var N=L=>{{const g=w=>{var P=cu(),h=$(k(P),2),y=k(h),C=$(y,2);p(h),p(P),J(()=>{Se(y,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(s)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),y.disabled=!e(s),we(y,"title",e(s)?"":"No probe data available. Run a simulation first."),Se(C,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),C.disabled=!e(i),we(C,"title",e(i)?"":"No profile data available. Run a simulation first.")}),le("click",y,()=>x("time")),le("click",C,()=>x("profile")),u(w,P)};Ht(L,{wide:!0,titleSlot:g,tabs:g,actions:w=>{var P=du(),h=K(P);{let _=j(()=>e(a)==="time"?"probePlot":"profilePlot"),M=j(Gi);nr(h,{get name(){return e(_)},get intervalMs(){return e(M)},onRefresh:d,get checked(){return e(o)},set checked(F){f(o,F,!0)}})}var y=$(h,2);{var C=_=>{$e(_,{variant:"primary",onclick:d,children:(M,F)=>{var T=uu(),q=K(T);Te(q,{get icon(){return er}}),ke(),u(M,T)},$$slots:{default:!0}})};Q(y,_=>{e(o)||_(C)})}u(w,P)},children:(w,P)=>{var h=be(),y=K(h);{var C=M=>{ru(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(F){f(l,F,!0)}})},_=M=>{lu(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(F){f(l,F,!0)}})};Q(y,M=>{e(a)==="time"?M(C):M(_,-1)})}u(w,h)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Q(m,L=>{e(n)&&L(N)})}u(t,A),Ae()}Ke(["click"]);var vu=S("<!> Refresh",1),gu=S("<!> <!>",1),hu=S("<!> Download as CSV",1),pu=S('<!> <div class="self-end ml-auto"><!></div>',1),mu=S("<th> </th>"),_u=S('<td class="whitespace-nowrap"> </td>'),bu=S('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),xu=S('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),yu=S('<p class="text-sm text-muted italic text-center py-8"><!></p>'),wu=S("<!> <!>",1);function ku(t,r){Me(r,!0);let a=z(ie([])),n=z(ie([])),s=z(!1),i=z(!1),o=z(ie(tr("perf")));Re(()=>{rr("perf",e(o))});const l=5e3;let b=z(ie([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),x=j(()=>r.allCases.map(P=>({value:P,label:P}))),A=j(()=>e(n).length>0);async function m(){var P;if(e(a).length){f(i,!0);try{const h=await In(e(a));(P=h.columns)!=null&&P.length&&f(b,h.columns,!0),f(n,h.records,!0),e(n).length>0&&f(s,!0)}catch(h){console.error("Failed to load perf:",h)}f(i,!1)}}function N(P){if(f(a,P,!0),P.length===0){f(n,[],!0);return}m()}function L(P,h){if(h==null||h==="")return"-";if(P==="text")return h;const y=Number(h);return Number.isFinite(y)?P==="int"?String(Math.round(y)):y.toFixed(3):h}async function g(){if(!e(n).length)return;const P=["case_id",...e(b).map(_=>_.key)],h=e(n).map(_=>[_.case_id,...e(b).map(M=>_[M.key]??"")].join(",")),y=[P.join(","),...h].join(`
`),C=xr("timing_snapshot",e(a),"csv");await Ea(y,C)}let c=!1;Re(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),In(r.allCases).then(P=>{var h;(h=P.columns)!=null&&h.length&&f(b,P.columns,!0),f(s,P.records.length>0),f(n,P.records,!0)}).catch(()=>{}))}),Re(()=>{e(o)?mr("perf",m,l):vt("perf")});const w=_r(()=>{c&&m()});vr(()=>{vt("perf"),w()}),Ht(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:h=>{var y=gu(),C=K(y);nr(C,{name:"perf",intervalMs:l,onRefresh:m,get checked(){return e(o)},set checked(F){f(o,F,!0)}});var _=$(C,2);{var M=F=>{$e(F,{variant:"primary",onclick:m,children:(T,q)=>{var I=vu(),O=K(I);Te(O,{get icon(){return er}}),ke(),u(T,I)},$$slots:{default:!0}})};Q(_,F=>{e(o)||F(M)})}u(h,y)},children:(h,y)=>{var C=wu(),_=K(C);{var M=I=>{Qt(I,{children:(O,V)=>{var G=pu(),Z=K(G);Ne(Z,{text:"Cases",children:(R,H)=>{Gt(R,{class:"w-[160px]",get options(){return e(x)},get selected(){return e(a)},onchange:N,placeholder:"Select cases..."})}});var ae=$(Z,2),E=k(ae);{let R=j(()=>!e(A));$e(E,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(R)},children:(H,D)=>{var v=hu(),B=K(v);Te(B,{get icon(){return pr}}),ke(),u(H,v)},$$slots:{default:!0}})}p(ae),u(O,G)}})};Q(_,I=>{e(s)&&I(M)})}var F=$(_,2);{var T=I=>{var O=xu(),V=k(O),G=k(V),Z=k(G),ae=$(k(Z));Ye(ae,17,()=>e(b),R=>R.key,(R,H)=>{var D=mu(),v=k(D,!0);p(D),J(()=>ne(v,e(H).label)),u(R,D)}),p(Z),p(G);var E=$(G);Ye(E,21,()=>e(n),R=>R.case_id,(R,H)=>{var D=bu(),v=k(D),B=k(v,!0);p(v);var X=$(v);Ye(X,17,()=>e(b),ue=>ue.key,(ue,fe)=>{var W=_u(),te=k(W,!0);p(W),J(se=>ne(te,se),[()=>L(e(fe).kind,e(H)[e(fe).key])]),u(ue,W)}),p(D),J(()=>ne(B,e(H).case_id)),u(R,D)}),p(E),p(V),p(O),u(I,O)},q=I=>{var O=yu(),V=k(O);{var G=ae=>{var E=Ve("Select cases above to view timing information.");u(ae,E)},Z=ae=>{var E=Ve("No performance data available. Please run a simulation first.");u(ae,E)};Q(V,ae=>{e(s)?ae(G):ae(Z,-1)})}p(O),u(I,O)};Q(F,I=>{e(A)?I(T):I(q,-1)})}u(h,C)},$$slots:{actions:!0,default:!0}}),Ae()}const Cu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Ia(t){return t.replace(/[&<>"']/g,r=>Cu[r]??r)}var Su=S("<div></div>"),$u=S('<pre class="code-box tail-pane"></pre>');function Pu(t,r){Me(r,!0);let a=z(void 0);function n(b){const x=Ia(b);if(!r.searchQuery.trim())return x;try{const A=new RegExp(`(${r.searchQuery})`,"gi");return x.replace(A,'<span class="tail-query-hit">$1</span>')}catch{return x}}function s(b){return b==="error"?"tail-sev-error":b==="warn"?"tail-sev-warn":b==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let o=z(!0);function l(){f(o,i(),!0)}Re(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(o)&&Pt().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=$u();Ye(d,21,()=>r.lines,b=>b.index,(b,x)=>{var A=Su();zr(A,()=>n(e(x).text),!0),p(A),J(m=>Se(A,1,`tail-line ${m??""} ${e(x).isNew?"tail-new":""}`),[()=>s(e(x).severity)]),u(b,A)}),p(d),nt(d,b=>f(a,b),()=>e(a)),tt("scroll",d,l),u(t,d),Ae()}const Eu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,Ru=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function Nu(t){return Eu.test(t)?"error":Ru.test(t)?"warn":"none"}function Mu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Au=S("<!> Refresh",1),Lu=S("<!> <!>",1),Tu=S('<input type="number" min="1" class="w-[70px]"/>'),Fu=S('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Du=S("<!> <!> <!> <!> <!>",1),zu=Ot('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Iu=Ot('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Ou=Ot('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Hu=S("<!> Resume",1),ju=S("<!> Pause",1),Vu=S('<span class="text-xs text-muted">Case not running</span>'),Uu=S('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Bu=S('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),qu=S('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Ku=S("<!> <!> <!>",1);function Gu(t,r){Me(r,!0);const a=80;let n=z(""),s=z(""),i=z(!1),o=z(ie([])),l=z(a),d=z(ie([])),b=z(ie(new Set)),x=z(!1),A=z(ie(tr("tail")));Re(()=>{rr("tail",e(A))});let m=z(!0),N=z("all"),L=z(""),g=z(""),c=z(void 0),w=j(()=>Cn(r.allCases)),P=j(()=>e(o).map(E=>{const R=E.split("/").pop()??E;return{value:E,label:R}})),h=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],y=j(()=>e(o).length>0),C=j(()=>yn().some(E=>{var R;return E.case_id===e(n)&&((R=E.status)==null?void 0:R.toUpperCase())==="RUNNING"}));const _={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function M(E){const R=E.split("/").pop()??E;return _[R]??99}async function F(){if(e(n))try{const H=(await di(e(n))).filter(D=>{const v=D.split("/").pop()??D;return D.endsWith(".log")||D.endsWith("/summary")||v in _}).sort((D,v)=>M(D)-M(v));if(f(o,H,!0),H.length>0){const D=H[0];!e(s)||!H.includes(e(s))?(f(s,D,!0),f(i,!1)):!e(i)&&M(D)<M(e(s))&&f(s,D,!0)}e(o).length===0&&(f(s,""),f(d,[],!0))}catch(E){console.error("Failed to load tail files:",E),f(o,[],!0)}}async function T(E=!1){if(e(n)&&!(e(x)&&!E)&&(await F(),!!e(s)))try{const R=await ui(e(n),e(s),e(l));f(g,"");const H=R.split(`
`),D=H.length>0&&H[H.length-1]===""?H.slice(0,-1):H;if(e(d).length>0){const v=q(e(d),D),B=new Set;for(let X=v;X<D.length;X++)B.add(X);f(b,B,!0)}f(d,D,!0)}catch(R){f(g,"Failed to load log tail"),console.error("Failed to load tail:",R)}}function q(E,R){const H=Math.min(E.length,R.length);for(let D=0;D<H;D++){let v=!0;for(let B=0;B<Math.min(E.length-D,R.length);B++)if(E[D+B]!==R[B]){v=!1;break}if(v)return E.length-D}return 0}let I=j(()=>{let E=e(d).map((R,H)=>({text:R,index:H,severity:Nu(R),isNew:e(b).has(H)}));if(e(N)!=="all"&&(E=E.filter(R=>Mu(R.severity,e(N)))),e(L).trim())try{const R=new RegExp(e(L),"i");E=E.filter(H=>R.test(H.text))}catch{}return E});function O(E){f(n,E,!0),f(s,""),f(i,!1),f(d,[],!0),F().then(()=>T(!0))}function V(E){f(s,E,!0),f(i,!0),f(d,[],!0),T(!0)}function G(){f(x,!e(x)),e(x)||T(!0)}function Z(E){(E.ctrlKey||E.metaKey)&&E.key==="f"&&e(c)&&(E.preventDefault(),e(c).focus())}Re(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),F().then(()=>T(!0)))}),Re(()=>{e(A)&&!e(x)&&e(n)?mr("tail",()=>T(!1),Hn()):vt("tail")});const ae=_r(()=>{e(n)&&F().then(()=>T(!0))});vr(()=>{vt("tail"),ae()}),tt("keydown",it,Z),Ht(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:R=>{var H=Lu(),D=K(H);{let X=j(Hn);nr(D,{name:"tail",get intervalMs(){return e(X)},onRefresh:()=>T(!1),get checked(){return e(A)},set checked(ue){f(A,ue,!0)}})}var v=$(D,2);{var B=X=>{$e(X,{variant:"primary",onclick:()=>T(!0),children:(ue,fe)=>{var W=Au(),te=K(W);Te(te,{get icon(){return er}}),ke(),u(ue,W)},$$slots:{default:!0}})};Q(v,X=>{e(A)||X(B)})}u(R,H)},children:(R,H)=>{var D=Ku(),v=K(D);{var B=se=>{Qt(se,{children:(de,ce)=>{var re=Du(),xe=K(re);Ne(xe,{text:"Case",children:(ze,Qe)=>{lt(ze,{class:"w-[130px]",get options(){return e(w)},get value(){return e(n)},onchange:O})}});var he=$(xe,2);Ne(he,{text:"File",children:(ze,Qe)=>{lt(ze,{class:"w-[150px]",get options(){return e(P)},get value(){return e(s)},onchange:V})}});var Ee=$(he,2);Ne(Ee,{text:"Lines",children:(ze,Qe)=>{var je=Tu();Xe(je),le("change",je,()=>T(!0)),et(je,()=>e(l),rt=>f(l,rt)),u(ze,je)}});var pe=$(Ee,2);Ne(pe,{text:"Filter",children:(ze,Qe)=>{var je=Fu();Xe(je),nt(je,rt=>f(c,rt),()=>e(c)),et(je,()=>e(L),rt=>f(L,rt)),u(ze,je)}});var Fe=$(pe,2);Ne(Fe,{text:"Severity",children:(ze,Qe)=>{lt(ze,{class:"w-[90px]",get options(){return h},get value(){return e(N)},onchange:je=>f(N,je,!0)})}}),u(de,re)}})};Q(v,se=>{e(y)&&se(B)})}var X=$(v,2);{var ue=se=>{var de=Uu(),ce=K(de);Pu(ce,{get lines(){return e(I)},get searchQuery(){return e(L)},get autoScroll(){return e(m)}});var re=$(ce,2),xe=k(re),he=k(xe);{var Ee=Y=>{var U=zu();u(Y,U)},pe=Y=>{var U=Iu();u(Y,U)},Fe=Y=>{var U=Ou();u(Y,U)};Q(he,Y=>{e(x)?Y(Ee):e(C)?Y(pe,1):Y(Fe,-1)})}var ze=$(he);p(xe);var Qe=$(xe,2);{var je=Y=>{$e(Y,{variant:"secondary",size:"sm",onclick:G,children:(U,ee)=>{var oe=be(),ve=K(oe);{var ye=_e=>{var Ce=Hu(),Ie=K(Ce);Te(Ie,{get icon(){return _a}}),ke(),u(_e,Ce)},ge=_e=>{var Ce=ju(),Ie=K(Ce);Te(Ie,{get icon(){return Bo}}),ke(),u(_e,Ce)};Q(ve,_e=>{e(x)?_e(ye):_e(ge,-1)})}u(U,oe)},$$slots:{default:!0}})},rt=Y=>{var U=Vu();u(Y,U)};Q(Qe,Y=>{e(C)?Y(je):Y(rt,-1)})}var Le=$(Qe,2),Pe=k(Le);It(Pe,{get checked(){return e(m)},onchange:Y=>f(m,Y,!0),size:14,label:"Auto-scroll",labelFirst:!0}),p(Le),p(re),J(()=>ne(ze,` ${e(I).length??""} / ${e(d).length??""}`)),u(se,de)},fe=se=>{var de=Bu();u(se,de)};Q(X,se=>{e(d).length>0?se(ue):se(fe,-1)})}var W=$(X,2);{var te=se=>{var de=qu(),ce=k(de,!0);p(de),J(()=>ne(ce,e(g))),u(se,de)};Q(W,se=>{e(g)&&se(te)})}u(R,D)},$$slots:{actions:!0,default:!0}}),Ae()}Ke(["change"]);function Wu(t,r=3){var N,L;const a=t.split(`
`),n=[];let s=0,i=0,o=!1;for(const g of a){if(g.startsWith("===")||g.startsWith("---")||g.startsWith("+++"))continue;const c=g.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){s=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,o=!0;continue}if(o)if(g.startsWith("-"))s++,n.push({type:"del",leftNum:s,rightNum:null,leftContent:g.slice(1),rightContent:""});else if(g.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:g.slice(1)});else{s++,i++;const w=g.startsWith(" ")?g.slice(1):g;n.push({type:"equal",leftNum:s,rightNum:i,leftContent:w,rightContent:w})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const g=[];for(;d<n.length&&n[d].type==="del";)g.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const w=Math.max(g.length,c.length);for(let P=0;P<w;P++){const h=g[P],y=c[P];h&&y?l.push({type:"del",leftNum:h.leftNum,rightNum:y.rightNum,leftContent:h.leftContent,rightContent:y.rightContent}):h?l.push(h):y&&l.push(y)}}else l.push(n[d]),d++;const b=new Set;for(let g=0;g<l.length;g++)if(l[g].type!=="equal")for(let c=Math.max(0,g-r);c<=Math.min(l.length-1,g+r);c++)b.add(c);if(b.size===0)return[];const x=[];let A=-1,m=!1;for(let g=0;g<l.length;g++)if(b.has(g)){A>=0&&g-A>1&&x.push({kind:"separator",skipped:g-A-1});const c=l[g].type!=="equal",w=c&&!m;x.push({kind:"line",row:l[g],hunkStart:w}),m=c,A=g}if(A<l.length-1&&A>=0&&x.push({kind:"separator",skipped:l.length-1-A}),x.length>0&&x[0].kind==="line"){const g=((N=x[0].row)==null?void 0:N.leftNum)??0,c=((L=x[0].row)==null?void 0:L.rightNum)??0,w=Math.max(g,c)-1;w>0&&x.unshift({kind:"separator",skipped:w})}return x}var Xu=S('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),Yu=S('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),Qu=S('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),Zu=S('<span class="text-xs text-muted">No matches</span>'),Ju=S('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),ed=S('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),td=S('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),rd=S('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function nd(t,r){Me(r,!0);let a=me(r,"loading",3,!1),n=z(void 0),s=j(()=>Wu(r.diffText)),i=j(()=>{const Y=[];return e(s).forEach((U,ee)=>{U.hunkStart&&Y.push(ee)}),Y}),o=j(()=>e(i).length>0),l=j(()=>{var U;const Y=new Array(e(s).length).fill(-1);for(let ee=0;ee<e(i).length;ee++){let oe=e(i)[ee];for(;oe<e(s).length&&e(s)[oe].kind==="line"&&((U=e(s)[oe].row)==null?void 0:U.type)!=="equal";)Y[oe]=ee,oe++}return Y}),d=z(-1),b="";Re(()=>{r.diffText!==b&&(b=r.diffText,f(d,-1))});let x=j(()=>{if(!r.search.trim())return[];try{const Y=new RegExp(r.search,"i"),U=[];return e(s).forEach((ee,oe)=>{ee.kind==="line"&&ee.row&&(Y.test(ee.row.leftContent)||Y.test(ee.row.rightContent))&&U.push(oe)}),U}catch{return[]}}),A=z(-1),m="";Re(()=>{r.search!==m&&(m=r.search,f(A,e(x).length>0?0:-1,!0))});async function N(Y){var oe;f(A,Y,!0),await Pt();const U=e(x)[Y],ee=(oe=e(h))==null?void 0:oe.querySelector(`[data-item-idx="${U}"]`);if(ee&&e(h)&&e(y)){const ve=e(h).getBoundingClientRect(),ge=ee.getBoundingClientRect().top-ve.top+e(h).scrollTop-e(h).clientHeight/3;_=!0,e(h).scrollTop=ge,e(y).scrollTop=ge,requestAnimationFrame(()=>{_=!1})}}function L(){e(A)>0&&N(e(A)-1)}function g(){e(A)<0&&e(x).length>0?N(0):e(A)<e(x).length-1&&N(e(A)+1)}function c(Y,U){const ee=Ia(Y);if(!r.search.trim())return ee;try{const oe=new RegExp(`(${r.search})`,"gi"),ve=U?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return ee.replace(oe,`<span class="${ve}">$1</span>`)}catch{return ee}}function w(Y,U){return Y==="equal"?"":Y==="del"&&U==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":Y==="del"&&U==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":Y==="add"&&U==="left"?"bg-edf-gris-clair":Y==="add"&&U==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function P(Y,U){return Y==="del"&&U==="left"?"rgb(251,237,233)":Y==="del"&&U==="right"?"rgb(238,247,236)":Y==="add"&&U==="left"?"var(--color-edf-gris-clair)":Y==="add"&&U==="right"?"rgb(238,247,236)":"white"}let h=z(void 0),y=z(void 0),C=!1,_=!1;function M(Y){C||_||!e(h)||!e(y)||(C=!0,Y==="left"?(e(y).scrollTop=e(h).scrollTop,e(y).scrollLeft=e(h).scrollLeft):(e(h).scrollTop=e(y).scrollTop,e(h).scrollLeft=e(y).scrollLeft),requestAnimationFrame(()=>{C=!1}))}async function F(Y){var ee;f(d,Y,!0),await Pt();const U=(ee=e(h))==null?void 0:ee.querySelector(`[data-hunk-start="${Y}"]`);if(U&&e(h)&&e(y)){_=!0;const oe=e(h).getBoundingClientRect(),ye=U.getBoundingClientRect().top-oe.top+e(h).scrollTop-e(h).clientHeight/3;e(h).scrollTop=ye,e(y).scrollTop=ye,requestAnimationFrame(()=>{_=!1})}}function T(){e(d)>0&&F(e(d)-1)}function q(){e(d)<0?F(0):e(d)<e(i).length-1&&F(e(d)+1)}function I(Y){const U=e(l)[Y];U>=0&&f(d,U,!0)}function O(Y){Y.target instanceof HTMLInputElement||(Y.key==="n"&&!Y.shiftKey?(Y.preventDefault(),q()):Y.key==="N"||Y.key==="n"&&Y.shiftKey?(Y.preventDefault(),T()):Y.key==="j"?(Y.preventDefault(),g()):(Y.key==="J"||Y.key==="j"&&Y.shiftKey)&&(Y.preventDefault(),L()))}var V=rd();{const Y=(U,ee=ws)=>{var oe=be(),ve=K(oe);Ye(ve,17,()=>e(s),fn,(ye,ge,_e)=>{const Ce=j(()=>e(i).indexOf(_e)),Ie=j(()=>e(l)[_e]>=0&&e(l)[_e]===e(d)),Ge=j(()=>{var at,qe;return ee()==="left"?(at=e(ge).row)==null?void 0:at.leftNum:(qe=e(ge).row)==null?void 0:qe.rightNum}),gt=j(()=>{var at,qe;return ee()==="left"?((at=e(ge).row)==null?void 0:at.leftContent)??"":((qe=e(ge).row)==null?void 0:qe.rightContent)??""});var jt=be(),jr=K(jt);{var Je=at=>{var qe=Xu(),Nt=$(k(qe),2),Vr=k(Nt);p(Nt),p(qe),J(()=>ne(Vr,`... ${e(ge).skipped??""} lines hidden ...`)),u(at,qe)},ut=at=>{var qe=Yu(),Nt=k(qe),Vr=k(Nt,!0);p(Nt);var Pn=$(Nt,2);zr(Pn,()=>c(e(gt),e(A)>=0&&e(x)[e(A)]===_e),!0),p(Pn),p(qe),J((yt,Mt,yr,Oa,Ha)=>{Se(qe,1,`flex w-full ${yt??""} ${Mt??""}`),Ze(qe,e(Ie)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),we(qe,"role",yr),we(qe,"tabindex",Oa),we(qe,"data-hunk-start",ee()==="left"&&e(Ce)>=0?e(Ce):void 0),we(qe,"data-item-idx",ee()==="left"?_e:void 0),Ze(Nt,`background: ${Ha??""}; color: ${e(Ie)?"white":"var(--color-muted)"};`),ne(Vr,e(Ge)??"")},[()=>w(e(ge).row.type,ee()),()=>e(ge).row.type!=="equal"||e(x).includes(_e)?"cursor-pointer":"",()=>e(ge).row.type!=="equal"||e(x).includes(_e)?"button":void 0,()=>e(ge).row.type!=="equal"||e(x).includes(_e)?0:void 0,()=>e(Ie)?"rgb(16,87,200)":P(e(ge).row.type,ee())]),le("click",qe,()=>{var Mt;((Mt=e(ge).row)==null?void 0:Mt.type)!=="equal"&&I(_e);const yt=e(x).indexOf(_e);yt>=0&&f(A,yt,!0)}),le("keydown",qe,yt=>{var Mt;if(yt.key==="Enter"||yt.key===" "){yt.preventDefault(),((Mt=e(ge).row)==null?void 0:Mt.type)!=="equal"&&I(_e);const yr=e(x).indexOf(_e);yr>=0&&f(A,yr,!0)}}),u(at,qe)};Q(jr,at=>{e(ge).kind==="separator"?at(Je):e(ge).row&&at(ut,1)})}u(ye,jt)}),u(U,oe)};var G=k(V),Z=k(G),ae=k(Z),E=k(ae,!0);p(ae);var R=$(ae,2),H=k(R,!0);p(R),p(Z);var D=$(Z,2),v=k(D),B=k(v,!0);p(v);var X=$(v,2),ue=k(X,!0);p(X),p(D),p(G);var fe=$(G,2),W=k(fe),te=k(W);Xe(te);var se=$(te,2);{var de=U=>{var ee=Qu(),oe=K(ee);{let _e=j(()=>e(A)<=0);$e(oe,{variant:"secondary",size:"sm",onclick:L,get disabled(){return e(_e)},children:(Ce,Ie)=>{ke();var Ge=Ve("Prev");u(Ce,Ge)},$$slots:{default:!0}})}var ve=$(oe,2),ye=k(ve);p(ve);var ge=$(ve,2);{let _e=j(()=>e(A)>=e(x).length-1);$e(ge,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(_e)},children:(Ce,Ie)=>{ke();var Ge=Ve("Next");u(Ce,Ge)},$$slots:{default:!0}})}J(()=>ne(ye,`${e(A)>=0?e(A)+1:"–"} / ${e(x).length??""} occurrence${e(x).length!==1?"s":""}`)),u(U,ee)},ce=j(()=>r.search.trim()&&e(x).length>0),re=U=>{var ee=Zu();u(U,ee)},xe=j(()=>r.search.trim());Q(se,U=>{e(ce)?U(de):e(xe)&&U(re,1)})}p(W);var he=$(W,2),Ee=k(he);{let U=j(()=>e(i).length===0||e(d)<=0);$e(Ee,{variant:"secondary",size:"sm",onclick:T,get disabled(){return e(U)},children:(ee,oe)=>{ke();var ve=Ve("Prev");u(ee,ve)},$$slots:{default:!0}})}var pe=$(Ee,2),Fe=k(pe);p(pe);var ze=$(pe,2);{let U=j(()=>e(i).length===0||e(d)>=e(i).length-1);$e(ze,{variant:"secondary",size:"sm",onclick:q,get disabled(){return e(U)},children:(ee,oe)=>{ke();var ve=Ve("Next");u(ee,ve)},$$slots:{default:!0}})}p(he),p(fe);var Qe=$(fe,2);{var je=U=>{var ee=Ju(),oe=k(ee),ve=k(oe),ye=k(ve);Y(ye,()=>"left"),p(ve),p(oe),nt(oe,Ie=>f(h,Ie),()=>e(h));var ge=$(oe,2),_e=k(ge),Ce=k(_e);Y(Ce,()=>"right"),p(_e),p(ge),nt(ge,Ie=>f(y,Ie),()=>e(y)),p(ee),tt("scroll",oe,()=>M("left")),tt("scroll",ge,()=>M("right")),u(U,ee)},rt=U=>{var ee=ed();u(U,ee)};Q(Qe,U=>{e(o)?U(je):U(rt,-1)})}var Le=$(Qe,2);{var Pe=U=>{var ee=td();u(U,ee)};Q(Le,U=>{a()&&U(Pe)})}p(V),nt(V,U=>f(n,U),()=>e(n)),J(()=>{ne(E,r.leftLabel),ne(H,r.kind),ne(B,r.rightLabel),ne(ue,r.kind),vn(te,r.search),ne(Fe,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),le("input",te,U=>r.onSearchChange(U.target.value)),le("keydown",te,U=>{U.key==="Enter"&&(U.preventDefault(),g())})}le("keydown",V,O),u(t,V),Ae()}Ke(["keydown","click","input"]);var ad=S("<!> <!> <!>",1),sd=S('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),od=S('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),id=S('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),ld=S('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),cd=S('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),ud=S('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),dd=S('<p class="text-sm text-red-600 text-center py-8"> </p>'),fd=S('<p class="text-sm text-muted text-center py-8">Loading...</p>'),vd=S("<!> <!> <!>",1),gd=S("<!> <!>",1);function hd(t,r){Me(r,!0);let a=z(""),n=z(""),s=z(""),i=z(""),o=z(""),l=z(!1),d=z(!1),b=z(""),x=j(()=>r.allCases.map(_=>({value:_,label:_})));const A=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let m=j(()=>{var _;return((_=Ft())==null?void 0:_.compare_kinds)??A});Re(()=>{var _;e(m).some(M=>M.value===e(s))||f(s,((_=e(m)[0])==null?void 0:_.value)??"",!0)});let N=z(!1),L=j(()=>e(a)&&e(n)&&e(a)!==e(n));function g(){const _=e(a);f(a,e(n),!0),f(n,_,!0)}async function c(){if(e(L)){f(l,!0),f(b,"");try{const _=await pi({cases:[e(a),e(n)],base:e(a),kind:e(s)});f(o,_,!0),f(d,!0)}catch(_){console.error("Failed to load diff:",_),f(o,""),f(d,!1);const M=_ instanceof Error?_.message:String(_);f(b,M.includes("404")?`File "${e(s)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Re(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(s)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(o,""),f(d,!0))});let w=!1;Re(()=>{r.allCases.length>=2&&!w?(w=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!w&&(w=!0,f(a,r.allCases[0],!0))});let P=j(wn),h=j(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(P).length===0)return[];const _=yn(),M=_.find(T=>T.case_id===e(a)),F=_.find(T=>T.case_id===e(n));return!M&&!F?[]:e(P).map(T=>{var O,V;const q=((O=M==null?void 0:M.doe)==null?void 0:O[T])!=null&&String(M.doe[T])!==""?String(M.doe[T]):"—",I=((V=F==null?void 0:F.doe)==null?void 0:V[T])!=null&&String(F.doe[T])!==""?String(F.doe[T]):"—";return{param:T,left:q,right:I,differs:q!==I}})}),y=j(()=>e(N)?e(h):e(h).filter(_=>_.differs)),C=j(()=>e(h).filter(_=>_.differs).length);Ht(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(_,M)=>{var F=gd(),T=K(F);Qt(T,{children:(G,Z)=>{var ae=ad(),E=K(ae);Ne(E,{text:"First case",children:(D,v)=>{lt(D,{class:"w-32.5",get options(){return e(x)},get value(){return e(a)},onchange:B=>f(a,B,!0),placeholder:"Select..."})}});var R=$(E,2);{let D=j(()=>!e(a)&&!e(n));$e(R,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(D)},children:(v,B)=>{Te(v,{get icon(){return Fo}})},$$slots:{default:!0}})}var H=$(R,2);Ne(H,{text:"Second case",children:(D,v)=>{lt(D,{class:"w-32.5",get options(){return e(x)},get value(){return e(n)},onchange:B=>f(n,B,!0),placeholder:"Select..."})}}),u(G,ae)}});var q=$(T,2);{var I=G=>{var Z=sd();u(G,Z)},O=G=>{var Z=od();u(G,Z)},V=G=>{var Z=vd(),ae=K(Z);{var E=X=>{var ue=ud(),fe=K(ue),W=k(fe),te=k(W);p(W);var se=$(W,2),de=k(se,!0);p(se),p(fe);var ce=$(fe,2);{var re=he=>{var Ee=ld(),pe=k(Ee),Fe=k(pe),ze=k(Fe),Qe=k(ze),je=k(Qe,!0);p(Qe);var rt=$(Qe,2),Le=k(rt,!0);p(rt),p(ze),p(Fe);var Pe=$(Fe);Ye(Pe,21,()=>e(y),Y=>Y.param,(Y,U)=>{var ee=id(),oe=k(ee),ve=k(oe,!0);p(oe);var ye=$(oe),ge=k(ye,!0);p(ye);var _e=$(ye),Ce=k(_e,!0);p(_e),p(ee),J(()=>{Se(oe,1,dt(e(U).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ne(ve,e(U).left),ne(ge,e(U).param),Se(_e,1,dt(e(U).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ne(Ce,e(U).right)}),u(Y,ee)}),p(Pe),p(pe),p(Ee),J(()=>{ne(je,e(a)),ne(Le,e(n))}),u(he,Ee)},xe=he=>{var Ee=cd();u(he,Ee)};Q(ce,he=>{e(y).length>0?he(re):he(xe,-1)})}J(()=>{ne(te,`${e(C)??""} difference${e(C)!==1?"s":""} out of ${e(h).length??""}
          parameters`),ne(de,e(N)?"Show differences only":"Show all parameters")}),le("click",se,()=>f(N,!e(N))),u(X,ue)};Q(ae,X=>{e(h).length>0&&X(E)})}var R=$(ae,2);Qt(R,{children:(X,ue)=>{Ne(X,{text:"File",children:(fe,W)=>{lt(fe,{class:"w-37.5",get options(){return e(m)},get value(){return e(s)},onchange:te=>f(s,te,!0)})}})}});var H=$(R,2);{var D=X=>{var ue=dd(),fe=k(ue,!0);p(ue),J(()=>ne(fe,e(b))),u(X,ue)},v=X=>{nd(X,{get diffText(){return e(o)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(s)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:ue=>f(i,ue,!0)})},B=X=>{var ue=fd();u(X,ue)};Q(H,X=>{e(b)?X(D):e(d)?X(v,1):e(l)&&X(B,2)})}u(G,Z)};Q(q,G=>{e(a)&&e(n)&&e(a)===e(n)?G(I):!e(a)||!e(n)?G(O,1):G(V,-1)})}u(_,F)},$$slots:{default:!0}}),Ae()}Ke(["click"]);var pd=S("<!> Refresh",1),md=S("<!> <!>",1),_d=S('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),bd=S('<input type="number" min="0" max="50" style="width: 70px;"/>'),xd=S("<!> Download as CSV",1),yd=S('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),wd=S("&nbsp;<!>",1),kd=S("<button> <!></button>"),Cd=S('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),Sd=S('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),$d=S('<span class="error-badge"> </span>'),Pd=S('<span class="error-badge error-badge-new">NEW</span>'),Ed=S('<div class="error-line"></div>'),Rd=S('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),Nd=S('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Md=S('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Ad=S('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Ld=S("<!> <!> <div><!> <!></div> <!> <!>",1);function Td(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let s=z(ie([])),i=z(ie([...n])),o=!1;Re(()=>{var te;const W=(te=Ft())==null?void 0:te.error_files;W!=null&&W.length&&!o&&f(i,[...W],!0)});let l=z("all"),d=z(""),b=z(a),x=z(!1),A=z(""),m=z(ie(tr("errors")));Re(()=>{rr("errors",e(m))});let N=z(ie([])),L=z(ie(new Set));function g(W){return W.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(W){const te=W.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${W.case_id}|${W.file}|${W.severity}|${g(te)}`}function w(W){const te=new Map;for(const se of W){const de=c(se),ce=te.get(de);ce?ce.count++:te.set(de,{...se,count:1,fingerprint:de,isNew:!e(L).has(de)})}return Array.from(te.values())}async function P(){if(!(!e(s).length||!e(i).length)){f(x,!0);try{const W=await ci({cases:e(s),files:e(i),context:e(b),sev:e(l)==="all"?"":e(l),q:e(d)});f(A,"");const te=w(W.items);f(N,W.items,!0);const se=new Set(te.map(de=>de.fingerprint));f(L,se,!0),f(h,te,!0)}catch(W){f(A,"Failed to load errors"),console.error("Failed to load errors:",W)}finally{f(x,!1)}}}let h=z(ie([])),y=null;function C(){y&&clearTimeout(y),y=setTimeout(P,250)}function _(W){return W==="error"?"error-sev-error":W==="warn"?"error-sev-warn":"error-sev-info"}let M=j(()=>Cn(r.allCases));const F=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let T=j(()=>{var W;return(((W=Ft())==null?void 0:W.error_files)??F).map(te=>({value:te,label:te}))}),q=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function I(W){if(f(s,W,!0),W.length===0){f(h,[],!0),f(N,[],!0);return}P()}function O(W){if(o=!0,f(i,W,!0),W.length===0){f(h,[],!0),f(N,[],!0);return}P()}function V(W){f(l,W,!0),P()}function G(){P()}let Z=!1;Re(()=>{r.allCases.length>0&&!Z&&(Z=!0,f(s,[...r.allCases],!0),P())}),Re(()=>{e(m)?mr("errors",P,Vn()):vt("errors")});const ae=_r(()=>{Z&&P()});vr(()=>{vt("errors"),ae()});let E=z(ie(new Set));function R(W){const te=new Set(e(E));te.has(W)?te.delete(W):te.add(W),f(E,te,!0)}let H=z("severity"),D=z("desc");const v={info:0,warn:1,error:2};let B=j(()=>{const W=[...e(h)];return W.sort((te,se)=>{let de=0;return e(H)==="severity"?de=(v[te.severity]??9)-(v[se.severity]??9):e(H)==="count"?de=te.count-se.count:de=te[e(H)].localeCompare(se[e(H)]),e(D)==="asc"?de:-de}),W});const X={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function ue(W){e(H)===W?f(D,e(D)==="asc"?"desc":"asc",!0):(f(H,W,!0),f(D,X[W],!0))}function fe(){if(!e(h).length)return;const W=["case_id","file","severity","count","is_new","line_text"],te=e(B).map(ce=>[ce.case_id,ce.file,ce.severity,ce.count,ce.isNew?"yes":"no",`"${ce.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),se=[W.join(","),...te].join(`
`),de=xr("errors",e(s),"csv");Ea(se,de)}Ht(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:te=>{var se=md(),de=K(se);{let xe=j(Vn);nr(de,{name:"errors",get intervalMs(){return e(xe)},onRefresh:P,get checked(){return e(m)},set checked(he){f(m,he,!0)}})}var ce=$(de,2);{var re=xe=>{$e(xe,{variant:"primary",onclick:P,children:(he,Ee)=>{var pe=pd(),Fe=K(pe);Te(Fe,{get icon(){return er}}),ke(),u(he,pe)},$$slots:{default:!0}})};Q(ce,xe=>{e(m)||xe(re)})}u(te,se)},children:(te,se)=>{var de=Ld(),ce=K(de);Qt(ce,{children:(Le,Pe)=>{var Y=yd(),U=K(Y);Ne(U,{text:"Cases",children:(Ce,Ie)=>{Gt(Ce,{class:"w-[160px]",get options(){return e(M)},get selected(){return e(s)},onchange:I,placeholder:"Select cases..."})}});var ee=$(U,2);Ne(ee,{text:"Files",children:(Ce,Ie)=>{Gt(Ce,{class:"w-[160px]",get options(){return e(T)},get selected(){return e(i)},onchange:O,placeholder:"Select files..."})}});var oe=$(ee,2);Ne(oe,{text:"Severity",children:(Ce,Ie)=>{lt(Ce,{class:"w-[90px]",get options(){return q},get value(){return e(l)},onchange:V})}});var ve=$(oe,2);Ne(ve,{text:"Search",children:(Ce,Ie)=>{var Ge=_d();Xe(Ge),le("input",Ge,C),et(Ge,()=>e(d),gt=>f(d,gt)),u(Ce,Ge)}});var ye=$(ve,2);Ne(ye,{text:"Context",children:(Ce,Ie)=>{var Ge=bd();Xe(Ge),le("change",Ge,G),et(Ge,()=>e(b),gt=>f(b,gt)),u(Ce,Ge)}});var ge=$(ye,2),_e=k(ge);{let Ce=j(()=>e(h).length===0);$e(_e,{variant:"secondary",size:"sm",onclick:fe,get disabled(){return e(Ce)},children:(Ie,Ge)=>{var gt=xd(),jt=K(gt);Te(jt,{get icon(){return pr}}),ke(),u(Ie,gt)},$$slots:{default:!0}})}p(ge),u(Le,Y)}});var re=$(ce,2);{var xe=Le=>{var Pe=Cd(),Y=$(k(Pe),2);Ye(Y,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],U=>U.key,(U,ee)=>{var oe=kd(),ve=k(oe,!0),ye=$(ve);{var ge=_e=>{var Ce=wd(),Ie=$(K(Ce));{let Ge=j(()=>e(D)==="asc"?Do:To);Te(Ie,{get icon(){return e(Ge)},size:12})}u(_e,Ce)};Q(ye,_e=>{e(H)===ee.key&&_e(ge)})}p(oe),J(()=>{Se(oe,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(H)===ee.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ne(ve,ee.label)}),le("click",oe,()=>ue(ee.key)),u(U,oe)}),p(Pe),u(Le,Pe)};Q(re,Le=>{e(B).length>0&&Le(xe)})}var he=$(re,2),Ee=k(he);{var pe=Le=>{var Pe=Sd();u(Le,Pe)};Q(Ee,Le=>{e(B).length===0&&Le(pe)})}var Fe=$(Ee,2);Ye(Fe,17,()=>e(B),Le=>Le.fingerprint,(Le,Pe)=>{var Y=Rd(),U=k(Y),ee=k(U),oe=k(ee);{let Je=j(()=>e(E).has(e(Pe).fingerprint)?pn:zo);Te(oe,{get icon(){return e(Je)},size:14})}p(ee);var ve=$(ee,2),ye=k(ve);p(ve);var ge=$(ve,2),_e=k(ge);{var Ce=Je=>{var ut=$d(),at=k(ut);p(ut),J(()=>ne(at,`${e(Pe).count??""}x`)),u(Je,ut)};Q(_e,Je=>{e(Pe).count>1&&Je(Ce)})}var Ie=$(_e,2);{var Ge=Je=>{var ut=Pd();u(Je,ut)};Q(Ie,Je=>{e(Pe).isNew&&Je(Ge)})}p(ge),p(U);var gt=$(U,2);{var jt=Je=>{var ut=Ed();zr(ut,()=>e(Pe).line_html,!0),p(ut),u(Je,ut)},jr=j(()=>e(E).has(e(Pe).fingerprint));Q(gt,Je=>{e(jr)&&Je(jt)})}p(Y),J(Je=>{Se(Y,1,`error-item ${Je??""}`),ne(ye,`${e(Pe).case_id??""} / ${e(Pe).file??""} : ${e(Pe).severity??""}`)},[()=>_(e(Pe).severity)]),le("click",U,()=>R(e(Pe).fingerprint)),u(Le,Y)}),p(he);var ze=$(he,2);{var Qe=Le=>{var Pe=Md(),Y=k(Pe),U=k(Y);p(Y);var ee=$(Y,2);{var oe=ye=>{var ge=Nd(),_e=k(ge);p(ge),J(Ce=>ne(_e,`${Ce??""} new`),[()=>e(h).filter(Ce=>Ce.isNew).length]),u(ye,ge)},ve=j(()=>e(h).some(ye=>ye.isNew));Q(ee,ye=>{e(ve)&&ye(oe)})}p(Pe),J(()=>ne(U,`${e(h).length??""} unique / ${e(N).length??""} total`)),u(Le,Pe)};Q(ze,Le=>{e(B).length>0&&Le(Qe)})}var je=$(ze,2);{var rt=Le=>{var Pe=Ad(),Y=k(Pe,!0);p(Pe),J(()=>ne(Y,e(A))),u(Le,Pe)};Q(je,Le=>{e(A)&&Le(rt)})}J(()=>Se(he,1,`error-list ${e(x)?"opacity-50 pointer-events-none":""}`)),u(te,de)},$$slots:{actions:!0,default:!0}}),Ae()}Ke(["input","change","click"]);var Fd=S('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Bd(t,r){Me(r,!0);let a=z(ie({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=z(ie([])),s=z(null);const i=v=>e(s)===null||e(s).includes(v);async function o(v){var ue;const B=`/favicon-${v}.svg`;try{const fe=await fetch(B);if(!fe.ok||!((ue=fe.headers.get("content-type"))!=null&&ue.includes("svg")))return}catch{return}const X=document.querySelector('link[rel="icon"]');X&&(X.href=B)}async function l(){try{const v=await si();Rl(v.rows),Nl(v.doe_columns),f(n,v.rows.map(B=>B.case_id),!0),f(a,Ul($a(),yn()),!0)}catch(v){console.error("Failed to load status:",v)}}Zn(()=>{l(),oi().then(v=>{rl(v),f(s,v.panels,!0),o(v.solver)}).catch(()=>{})});var d=Fd(),b=K(d);Mi(b,{});var x=$(b,2);Di(x,{});var A=$(x,2);ll(A,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var m=$(A,2),N=k(m);{var L=v=>{xc(v,{onRefresh:l})},g=j(()=>i("status"));Q(N,v=>{e(g)&&v(L)})}var c=$(N,2);{var w=v=>{Vc(v,{get allCases(){return e(n)}})},P=j(()=>i("residuals"));Q(c,v=>{e(P)&&v(w)})}var h=$(c,2);{var y=v=>{fu(v,{get allCases(){return e(n)}})},C=j(()=>i("probes"));Q(h,v=>{e(C)&&v(y)})}var _=$(h,2);{var M=v=>{ku(v,{get allCases(){return e(n)}})},F=j(()=>i("performance"));Q(_,v=>{e(F)&&v(M)})}var T=$(_,2);{var q=v=>{hd(v,{get allCases(){return e(n)}})},I=j(()=>i("compare"));Q(T,v=>{e(I)&&v(q)})}var O=$(T,2);{var V=v=>{Gu(v,{get allCases(){return e(n)}})},G=j(()=>i("tail"));Q(O,v=>{e(G)&&v(V)})}var Z=$(O,2);{var ae=v=>{Td(v,{get allCases(){return e(n)}})},E=j(()=>i("errors"));Q(Z,v=>{e(E)&&v(ae)})}p(m);var R=$(m,2),H=$(k(R),2),D=k(H);p(H),p(R),J(()=>we(D,"src",cl)),u(t,d),Ae()}export{Bd as component};
