import{b as Pr,a as u,f as S,c as be,t as Ue,d as It}from"../chunks/C14P8jaG.js";import{o as Zn,a as fr}from"../chunks/Cz6m6K8p.js";import{h as Le,L as $t,G as Tt,c as Er,J as Bt,b as Jn,o as e,N as ja,ag as Va,O as En,P as Dt,f as mt,ay as ea,aF as Ua,ao as Rn,e as pt,a as ur,aM as Ba,s as qa,a5 as Ka,aN as ta,aE as dn,aO as Ga,a7 as Nn,aP as Wa,aQ as Xa,aI as Ya,aR as gt,aS as ra,a1 as Qa,r as na,p as aa,aT as Ur,ae as sa,aU as Za,aV as Ja,aC as es,m as ts,d as Nr,az as oa,y as ee,F as ia,aW as rs,aG as ns,aA as as,D as la,aX as ca,aY as ss,aZ as os,E as is,aw as ua,S as Dr,k as Mr,a_ as da,a$ as ls,b0 as cs,b1 as fa,b2 as us,b3 as ds,b4 as vr,b5 as fs,b6 as vs,b7 as gs,b8 as hs,b9 as ps,ba as ms,bb as _s,aJ as Pt,U as bs,aK as z,_ as ie,$ as f,A as k,B as p,x as Me,g as K,z as Ae,C as P,j as Re,ap as ke,aL as j,bc as xs,q as Ht,bd as ys,be as ot,bf as ws}from"../chunks/VJhVTb1A.js";import{p as he,i as Q,b as rt,c as ks,l as He,s as Be}from"../chunks/zf4GFcxs.js";import{i as Cs,a as Ss,d as ce,b as Ge,c as $s,n as Ps,e as Es,s as ne,f as tt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Rs}from"../chunks/DmjnTBOd.js";import{B as Ns}from"../chunks/U5yjBaoU.js";function fn(t,r){return r}function Ms(t,r,a){for(var n=[],s=r.length,i,o=r.length,l=0;l<s;l++){let A=r[l];aa(A,()=>{if(i){if(i.pending.delete(A),i.done.add(A),i.pending.size===0){var m=t.outrogroups;Qr(t,dn(i.done)),m.delete(i),m.size===0&&(t.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&a!==null;if(d){var b=a,x=b.parentNode;es(x),x.append(b),t.items.clear()}Qr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Qr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const o of t.pending.values())for(const l of o)n.add(t.items.get(l).e)}for(var s=0;s<r.length;s++){var i=r[s];if(n!=null&&n.has(i)){i.f|=gt;const o=document.createDocumentFragment();ts(i,o)}else Nr(r[s],a)}}var Mn;function Ye(t,r,a,n,s,i=null){var o=t,l=new Map,d=(r&ra)!==0;if(d){var b=t;o=Le?$t(Tt(b)):b.appendChild(Er())}Le&&Bt();var x=null,A=Ka(()=>{var h=a();return ta(h)?h:h==null?[]:dn(h)}),m,N=new Map,T=!0;function g(h){(E.effect.f&Qa)===0&&(E.pending.delete(h),E.fallback=x,As(E,m,o,r,n),x!==null&&(m.length===0?(x.f&gt)===0?na(x):(x.f^=gt,ir(x,null,o)):aa(x,()=>{x=null})))}function c(h){E.pending.delete(h)}var w=Jn(()=>{m=e(A);var h=m.length;let y=!1;if(Le){var C=ja(o)===Va;C!==(h===0)&&(o=En(),$t(o),Dt(!1),y=!0)}for(var _=new Set,M=pt,F=qa(),L=0;L<h;L+=1){Le&&mt.nodeType===ea&&mt.data===Ua&&(o=mt,y=!0,Dt(!1));var B=m[L],I=n(B,L),O=T?null:l.get(I);O?(O.v&&Rn(O.v,B),O.i&&Rn(O.i,L),F&&M.unskip_effect(O.e)):(O=Ts(l,T?o:Mn??(Mn=Er()),B,I,L,s,r,a),T||(O.e.f|=gt),l.set(I,O)),_.add(I)}if(h===0&&i&&!x&&(T?x=ur(()=>i(o)):(x=ur(()=>i(Mn??(Mn=Er()))),x.f|=gt)),h>_.size&&Ba(),Le&&h>0&&$t(En()),!T)if(N.set(M,_),F){for(const[V,G]of l)_.has(V)||M.skip_effect(G.e);M.oncommit(g),M.ondiscard(c)}else g(M);y&&Dt(!0),e(A)}),E={effect:w,items:l,pending:N,outrogroups:null,fallback:x};T=!1,Le&&(o=mt)}function nr(t){for(;t!==null&&(t.f&Za)===0;)t=t.next;return t}function As(t,r,a,n,s){var B,I,O,V,G,J,se,R,$;var i=(n&Ja)!==0,o=r.length,l=t.items,d=nr(t.effect.first),b,x=null,A,m=[],N=[],T,g,c,w;if(i)for(w=0;w<o;w+=1)T=r[w],g=s(T,w),c=l.get(g).e,(c.f&gt)===0&&((I=(B=c.nodes)==null?void 0:B.a)==null||I.measure(),(A??(A=new Set)).add(c));for(w=0;w<o;w+=1){if(T=r[w],g=s(T,w),c=l.get(g).e,t.outrogroups!==null)for(const H of t.outrogroups)H.pending.delete(c),H.done.delete(c);if((c.f&Ur)!==0&&(na(c),i&&((V=(O=c.nodes)==null?void 0:O.a)==null||V.unfix(),(A??(A=new Set)).delete(c))),(c.f&gt)!==0)if(c.f^=gt,c===d)ir(c,null,a);else{var E=x?x.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),yt(t,x,c),yt(t,c,E),ir(c,E,a),x=c,m=[],N=[],d=nr(x.next);continue}if(c!==d){if(b!==void 0&&b.has(c)){if(m.length<N.length){var h=N[0],y;x=h.prev;var C=m[0],_=m[m.length-1];for(y=0;y<m.length;y+=1)ir(m[y],h,a);for(y=0;y<N.length;y+=1)b.delete(N[y]);yt(t,C.prev,_.next),yt(t,x,C),yt(t,_,h),d=h,x=_,w-=1,m=[],N=[]}else b.delete(c),ir(c,d,a),yt(t,c.prev,c.next),yt(t,c,x===null?t.effect.first:x.next),yt(t,x,c),x=c;continue}for(m=[],N=[];d!==null&&d!==c;)(b??(b=new Set)).add(d),N.push(d),d=nr(d.next);if(d===null)continue}(c.f&gt)===0&&m.push(c),x=c,d=nr(c.next)}if(t.outrogroups!==null){for(const H of t.outrogroups)H.pending.size===0&&(Qr(t,dn(H.done)),(G=t.outrogroups)==null||G.delete(H));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||b!==void 0){var M=[];if(b!==void 0)for(c of b)(c.f&Ur)===0&&M.push(c);for(;d!==null;)(d.f&Ur)===0&&d!==t.fallback&&M.push(d),d=nr(d.next);var F=M.length;if(F>0){var L=(n&ra)!==0&&o===0?a:null;if(i){for(w=0;w<F;w+=1)(se=(J=M[w].nodes)==null?void 0:J.a)==null||se.measure();for(w=0;w<F;w+=1)($=(R=M[w].nodes)==null?void 0:R.a)==null||$.fix()}Ms(t,M,L)}}i&&sa(()=>{var H,D;if(A!==void 0)for(c of A)(D=(H=c.nodes)==null?void 0:H.a)==null||D.apply()})}function Ts(t,r,a,n,s,i,o,l){var d=(o&Wa)!==0?(o&Xa)===0?Ya(a,!1,!1):Nn(a):null,b=(o&Ga)!==0?Nn(s):null;return{v:d,i:b,e:ur(()=>(i(r,d??a,b??s,l),()=>{t.delete(n)}))}}function ir(t,r,a){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,i=r&&(r.f&gt)===0?r.nodes.start:a;n!==null;){var o=oa(n);if(i.before(n),n===s)return;n=o}}function yt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function zr(t,r,a=!1,n=!1,s=!1,i=!1){var o=t,l="";if(a){var d=t;Le&&(o=$t(Tt(d)))}ee(()=>{var b=ia;if(l===(l=r()??"")){Le&&Bt();return}if(a&&!Le){b.nodes=null,d.innerHTML=l,l!==""&&Pr(Tt(d),d.lastChild);return}if(b.nodes!==null&&(rs(b.nodes.start,b.nodes.end),b.nodes=null),l!==""){if(Le){mt.data;for(var x=Bt(),A=x;x!==null&&(x.nodeType!==ea||x.data!=="");)A=x,x=oa(x);if(x===null)throw ns(),as;Pr(mt,A),o=$t(x);return}var m=n?ca:s?ss:void 0,N=la(n?"svg":s?"math":"template",m);N.innerHTML=l;var T=n||s?N:N.content;if(Pr(Tt(T),T.lastChild),n||s)for(;Tt(T);)o.before(Tt(T));else o.before(T)}})}function je(t,r,a,n,s){var l;Le&&Bt();var i=(l=r.$$slots)==null?void 0:l[a],o=!1;i===!0&&(i=r.children,o=!0),i===void 0||i(t,o?()=>n:n)}function Ls(t,r,a,n,s,i){let o=Le;Le&&Bt();var l=null;Le&&mt.nodeType===os&&(l=mt,Bt());var d=Le?mt:t,b=new Ns(d,!1);Jn(()=>{const x=r()||null;var A=ca;if(x===null){b.ensure(null,null);return}return b.ensure(x,m=>{if(x){if(l=Le?l:la(x,A),Pr(l,l),n){Le&&Cs(x)&&l.append(document.createComment(""));var N=Le?Tt(l):l.appendChild(Er());Le&&(N===null?Dt(!1):$t(N)),n(l,N)}ia.nodes.end=l,m.before(l)}Le&&$t(m)}),()=>{}},is),ua(()=>{}),o&&(Dt(!0),$t(d))}function Fs(t,r,a){Dr(()=>{var n=Mr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Ds(t,r){var a=void 0,n;da(()=>{a!==(a=r())&&(n&&(Nr(n),n=null),a&&(n=ur(()=>{Dr(()=>a(t))})))})}function va(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(a=va(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function zs(){for(var t,r,a=0,n="",s=arguments.length;a<s;a++)(t=arguments[a])&&(r=va(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?zs(t):t??""}const An=[...` 	
\r\f \v\uFEFF`];function Is(t,r,a){var n=t==null?"":""+t;if(a){for(var s of Object.keys(a))if(a[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||An.includes(n[o-1]))&&(l===n.length||An.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Tn(t,r=!1){var a=r?" !important;":";",n="";for(var s of Object.keys(t)){var i=t[s];i!=null&&i!==""&&(n+=" "+s+": "+i+a)}return n}function Br(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Os(t,r){if(r){var a="",n,s;if(Array.isArray(r)?(n=r[0],s=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Br)),s&&d.push(...Object.keys(s).map(Br));var b=0,x=-1;const g=t.length;for(var A=0;A<g;A++){var m=t[A];if(l?m==="/"&&t[A-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[A+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&x===-1)x=A;else if(m===";"||A===g-1){if(x!==-1){var N=Br(t.substring(b,x).trim());if(!d.includes(N)){m!==";"&&A++;var T=t.substring(b,A).trim();a+=" "+T+";"}}b=A+1,x=-1}}}}return n&&(a+=Tn(n)),s&&(a+=Tn(s,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Ce(t,r,a,n,s,i){var o=t.__className;if(Le||o!==a||o===void 0){var l=Is(a,n,i);(!Le||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&s!==i)for(var d in i){var b=!!i[d];(s==null||b!==!!s[d])&&t.classList.toggle(d,b)}return i}function qr(t,r={},a,n){for(var s in a){var i=a[s];r[s]!==i&&(a[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,n))}}function Ze(t,r,a,n){var s=t.__style;if(Le||s!==r){var i=Os(r,n);(!Le||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(qr(t,a==null?void 0:a[0],n[0]),qr(t,a==null?void 0:a[1],n[1],"important")):qr(t,a,n));return n}function Ar(t,r,a=!1){if(t.multiple){if(r==null)return;if(!ta(r))return ls();for(var n of t.options)n.selected=r.includes(cr(n));return}for(n of t.options){var s=cr(n);if(cs(s,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function ga(t){var r=new MutationObserver(()=>{Ar(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ua(()=>{r.disconnect()})}function Hs(t,r,a=r){var n=new WeakSet,s=!0;fa(t,"change",i=>{var o=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(o),cr);else{var d=t.querySelector(o)??t.querySelector("option:not([disabled])");l=d&&cr(d)}a(l),t.__value=l,pt!==null&&n.add(pt)}),Dr(()=>{var i=r();if(t===document.activeElement){var o=pt;if(n.has(o))return}if(Ar(t,i,s),s&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=cr(l),a(i))}t.__value=i,s=!1}),ga(t)}function cr(t){return"__value"in t?t.__value:t.value}const ar=Symbol("class"),sr=Symbol("style"),ha=Symbol("is custom element"),pa=Symbol("is html"),js=vr?"link":"LINK",Vs=vr?"input":"INPUT",Us=vr?"option":"OPTION",Bs=vr?"select":"SELECT",qs=vr?"progress":"PROGRESS";function Xe(t){if(Le){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;we(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;we(t,"checked",null),t.checked=s}}};t.__on_r=a,sa(a),gs()}}function vn(t,r){var a=gn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==qs)||(t.value=r??"")}function Ks(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function we(t,r,a,n){var s=gn(t);Le&&(s[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===js)||s[r]!==(s[r]=a)&&(r==="loading"&&(t[ms]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ma(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Gs(t,r,a,n,s=!1,i=!1){if(Le&&s&&t.nodeName===Vs){var o=t,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Xe(o)}var d=gn(t),b=d[ha],x=!d[pa];let A=Le&&b;A&&Dt(!1);var m=r||{},N=t.nodeName===Us;for(var T in r)T in a||(a[T]=null);a.class?a.class=dt(a.class):a[ar]&&(a.class=null),a[sr]&&(a.style??(a.style=null));var g=ma(t);for(const _ in a){let M=a[_];if(N&&_==="value"&&M==null){t.value=t.__value="",m[_]=M;continue}if(_==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ce(t,c,M,n,r==null?void 0:r[ar],a[ar]),m[_]=M,m[ar]=a[ar];continue}if(_==="style"){Ze(t,M,r==null?void 0:r[sr],a[sr]),m[_]=M,m[sr]=a[sr];continue}var w=m[_];if(!(M===w&&!(M===void 0&&t.hasAttribute(_)))){m[_]=M;var E=_[0]+_[1];if(E!=="$$")if(E==="on"){const F={},L="$$"+_;let B=_.slice(2);var h=Es(B);if(Ss(B)&&(B=B.slice(0,-7),F.capture=!0),!h&&w){if(M!=null)continue;t.removeEventListener(B,m[L],F),m[L]=null}if(h)ce(B,t,M),Ge([B]);else if(M!=null){let I=function(O){m[_].call(this,O)};m[L]=$s(B,t,I,F)}}else if(_==="style")we(t,_,M);else if(_==="autofocus")fs(t,!!M);else if(!b&&(_==="__value"||_==="value"&&M!=null))t.value=t.__value=M;else if(_==="selected"&&N)Ks(t,M);else{var y=_;x||(y=Ps(y));var C=y==="defaultValue"||y==="defaultChecked";if(M==null&&!b&&!C)if(d[_]=null,y==="value"||y==="checked"){let F=t;const L=r===void 0;if(y==="value"){let B=F.defaultValue;F.removeAttribute(y),F.defaultValue=B,F.value=F.__value=L?B:null}else{let B=F.defaultChecked;F.removeAttribute(y),F.defaultChecked=B,F.checked=L?B:!1}}else t.removeAttribute(_);else C||g.includes(y)&&(b||typeof M!="string")?(t[y]=M,y in d&&(d[y]=vs)):typeof M!="function"&&we(t,y,M)}}}return A&&Dt(!0),m}function Ln(t,r,a=[],n=[],s=[],i,o=!1,l=!1){us(s,a,n,d=>{var b=void 0,x={},A=t.nodeName===Bs,m=!1;if(da(()=>{var T=r(...d.map(e)),g=Gs(t,b,T,i,o,l);m&&A&&"value"in T&&Ar(t,T.value);for(let w of Object.getOwnPropertySymbols(x))T[w]||Nr(x[w]);for(let w of Object.getOwnPropertySymbols(T)){var c=T[w];w.description===ds&&(!b||c!==b[w])&&(x[w]&&Nr(x[w]),x[w]=ur(()=>Ds(t,()=>c))),g[w]=c}b=g}),A){var N=t;Dr(()=>{Ar(N,b.value,!0),ga(N)})}m=!0})}function gn(t){return t.__attributes??(t.__attributes={[ha]:t.nodeName.includes("-"),[pa]:t.namespaceURI===hs})}var Fn=new Map;function ma(t){var r=t.getAttribute("is")||t.nodeName,a=Fn.get(r);if(a)return a;Fn.set(r,a=[]);for(var n,s=t,i=Element.prototype;i!==s;){n=_s(s);for(var o in n)n[o].set&&a.push(o);s=ps(s)}return a}function et(t,r,a=r){var n=new WeakSet;fa(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Kr(t)?Gr(i):i,a(i),pt!==null&&n.add(pt),await Pt(),i!==(i=r())){var o=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var b=t.value.length;o===l&&l===d&&b>d?(t.selectionStart=b,t.selectionEnd=b):(t.selectionStart=o,t.selectionEnd=Math.min(l,b))}}}),(Le&&t.defaultValue!==t.value||Mr(r)==null&&t.value)&&(a(Kr(t)?Gr(t.value):t.value),pt!==null&&n.add(pt)),bs(()=>{var s=r();if(t===document.activeElement){var i=pt;if(n.has(i))return}Kr(t)&&s===Gr(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Kr(t){var r=t.type;return r==="number"||r==="range"}function Gr(t){return t===""?null:+t}let bt=z(ie({type:"none",props:{},resolve:null}));function Ws(){return e(bt)}function st(t=void 0){const{resolve:r}=e(bt);f(bt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Xs(t){return new Promise(r=>{f(bt,{type:"run",props:{cases:t},resolve:r},!0)})}function Ys(t){return new Promise(r=>{f(bt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Qs(t){return new Promise(r=>{f(bt,{type:"clean",props:{cases:t},resolve:r},!0)})}function We(t,r="Alert"){return new Promise(a=>{f(bt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Dn(t,r="Confirm",a="OK",n="primary"){return new Promise(s=>{f(bt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:s},!0)})}function hn(t,r="",a="Input",n="",s=!1){return new Promise(i=>{f(bt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:s},resolve:i},!0)})}var Zs=S('<div style="display:contents;"><!></div>');function Qt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Zs(),s=k(n);ft(s,()=>r.children),p(n),Fs(n,i=>a==null?void 0:a(i)),u(t,n)}var Js=S('<div class="text-xs text-muted font-light"> </div>'),eo=S('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function gr(t,r){Me(r,!0);const a=T=>{var g=eo(),c=k(g),w=k(c),E=k(w),h=k(E,!0);p(E);var y=P(E,2);{var C=L=>{var B=Js(),I=k(B,!0);p(B),ee(()=>ne(I,r.subtitle)),u(L,B)};Q(y,L=>{r.subtitle&&L(C)})}p(w);var _=P(w,2);ft(_,()=>r.children);var M=P(_,2),F=k(M);ft(F,()=>r.footer),p(M),p(c),p(g),ee(()=>{Ce(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),we(c,"aria-labelledby",r.titleId),we(E,"id",r.titleId),ne(h,r.title)}),ce("keydown",g,o),ce("mousedown",g,d),ce("click",g,b),u(T,g)};let n=he(r,"maxWidth",3,"520px"),s=he(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():st(null)}function o(T){T.key==="Escape"?i():T.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(T){l=T.target.dataset.backdrop!==void 0}function b(T){const g=T.target.dataset.backdrop!==void 0;l&&g&&i(),l=!1}var x=be(),A=K(x);{var m=T=>{Qt(T,{children:(g,c)=>{a(g)}})},N=T=>{a(T)};Q(A,T=>{s()?T(m):T(N,-1)})}u(t,x),Ae()}Ge(["keydown","mousedown","click"]);var to=S("<button><!></button>");function Pe(t,r){let a=he(r,"variant",3,"primary"),n=he(r,"size",3,"default"),s=he(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},o={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=to(),d=k(l);ft(d,()=>r.children),p(l),ee(()=>{Ce(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${o[a()]??""}`),l.disabled=s()}),ce("click",l,function(...b){var x;(x=r.onclick)==null||x.apply(this,b)}),u(t,l)}Ge(["click"]);var ro=S("<!> <span><!></span>",1),no=S('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),ao=S('<input class="w-full"/>'),so=S('<div class="mb-4.5"><!></div>'),oo=S('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function io(t,r){Me(r,!0);let a=he(r,"confirmLabel",3,"OK"),n=he(r,"confirmVariant",3,"primary"),s=he(r,"value",3,""),i=he(r,"placeholder",3,""),o=he(r,"multiline",3,!1);const l=s();let d=z(ie(l)),b=z(void 0),x=z(void 0);Re(()=>{var N;r.mode==="prompt"&&e(b)?(e(b).focus(),"select"in e(b)&&e(b).select()):e(x)&&((N=e(x).querySelector("button"))==null||N.focus())});function A(){r.mode==="prompt"?st(e(d)):r.mode==="confirm"?st(!0):st()}function m(){r.mode==="confirm"?st(!1):r.mode==="prompt"?st(null):st()}{const N=g=>{var c=ro(),w=K(c);{var E=C=>{Pe(C,{variant:"secondary",onclick:m,children:(_,M)=>{ke();var F=Ue("Cancel");u(_,F)},$$slots:{default:!0}})};Q(w,C=>{r.mode!=="alert"&&C(E)})}var h=P(w,2),y=k(h);Pe(y,{get variant(){return n()},onclick:A,children:(C,_)=>{ke();var M=Ue();ee(()=>ne(M,a())),u(C,M)},$$slots:{default:!0}}),p(h),rt(h,C=>f(x,C),()=>e(x)),u(g,c)};let T=j(()=>o()?void 0:A);gr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(T)},onCancel:m,footer:N,children:(g,c)=>{var w=oo(),E=K(w),h=k(E,!0);p(E);var y=P(E,2);{var C=_=>{var M=so(),F=k(M);{var L=I=>{var O=no();xs(O),rt(O,V=>f(b,V),()=>e(b)),ee(()=>we(O,"placeholder",i())),et(O,()=>e(d),V=>f(d,V)),u(I,O)},B=I=>{var O=ao();Xe(O),rt(O,V=>f(b,V),()=>e(b)),ee(()=>we(O,"placeholder",i())),et(O,()=>e(d),V=>f(d,V)),u(I,O)};Q(F,I=>{o()?I(L):I(B,-1)})}p(M),u(_,M)};Q(y,_=>{r.mode==="prompt"&&_(C)})}ee(()=>ne(h,r.message)),u(g,w)},$$slots:{footer:!0,default:!0}})}Ae()}var lo=S('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Ne(t,r){var a=lo(),n=k(a),s=P(n);ft(s,()=>r.children),p(a),ee(()=>ne(n,`${r.text??""} `)),u(t,a)}function kt(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function Ct(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function co(t,r){return localStorage.getItem(t)??r}function uo(){return{n:kt("csauto_run_n",1),nt:kt("csauto_run_nt",1),maxParallel:kt("csauto_run_max_parallel",0)||null}}function fo(t){Ct("csauto_run_n",t.n),Ct("csauto_run_nt",t.nt),t.maxParallel&&Ct("csauto_run_max_parallel",t.maxParallel)}function vo(){return{n:kt("csauto_restart_n",1),nt:kt("csauto_restart_nt",1),maxParallel:kt("csauto_restart_max_parallel",0)||null,mode:co("csauto_restart_mode","iterations"),value:kt("csauto_restart_value",100)}}function go(t){Ct("csauto_restart_n",t.n),Ct("csauto_restart_nt",t.nt),t.maxParallel&&Ct("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),Ct("csauto_restart_value",t.value)}function ho(){return{keepLast:kt("csauto_clean_keep_last",1)}}function po(t){Ct("csauto_clean_keep_last",t.keepLast)}var mo=S("<!> <!>",1),_o=S('<input type="number" min="1" step="1"/>'),bo=S('<input type="number" min="1" step="1"/>'),xo=S('<input type="number" min="0" step="1"/>'),yo=S('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div>');function wo(t,r){Me(r,!0);const a=uo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=z(ie(a.n)),i=z(ie(a.nt)),o=z(ie(n));async function l(){if(!Number.isFinite(e(s))||e(s)<=0){await We("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await We("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await We("Max parallel must be empty or > 0.","Invalid value");return}const d={n:e(s),nt:e(i),maxParallel:e(o)||null};fo(d),st(d)}{const d=A=>{var m=mo(),N=K(m);Pe(N,{variant:"secondary",onclick:()=>st(null),children:(g,c)=>{ke();var w=Ue("Cancel");u(g,w)},$$slots:{default:!0}});var T=P(N,2);Pe(T,{variant:"run",onclick:l,children:(g,c)=>{ke();var w=Ue("Run");u(g,w)},$$slots:{default:!0}}),u(A,m)};let b=j(()=>r.cases.length),x=j(()=>r.cases.length>1?"s":"");gr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(b)??""} case${e(x)??""} selected`},onConfirm:l,footer:d,children:(A,m)=>{var N=yo(),T=k(N);Ne(T,{text:"MPI Ranks (n)",children:(w,E)=>{var h=_o();Xe(h),et(h,()=>e(s),y=>f(s,y)),u(w,h)}});var g=P(T,2);Ne(g,{text:"OMP Threads (nt)",children:(w,E)=>{var h=bo();Xe(h),et(h,()=>e(i),y=>f(i,y)),u(w,h)}});var c=P(g,2);Ne(c,{text:"Max Parallel",children:(w,E)=>{var h=xo();Xe(h),et(h,()=>e(o),y=>f(o,y)),u(w,h)}}),p(N),u(A,N)},$$slots:{footer:!0,default:!0}})}Ae()}var ko=S("<!> <!>",1),Co=S('<input type="number" min="1" step="1"/>'),So=S('<input type="number" min="1" step="1"/>'),$o=S('<input type="number" min="0" step="1"/>'),Po=S("<select><option>Iterations</option><option>Physical time</option></select>"),Eo=S('<input type="number"/>'),Ro=S('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function No(t,r){Me(r,!0);const a=vo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=z(ie(a.n)),i=z(ie(a.nt)),o=z(ie(n)),l=z(ie(a.mode)),d=z(ie(a.value)),b=j(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),x=j(()=>e(l)==="iterations"?"1":"any"),A=j(()=>e(l)==="iterations"?"1":"0");async function m(){if(!Number.isFinite(e(s))||e(s)<=0){await We("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await We("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await We("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await We("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await We("Iterations must be an integer.","Invalid value");return}const N={n:e(s),nt:e(i),maxParallel:e(o)||null,restartMode:e(l),restartValue:e(d)};go({n:e(s),nt:e(i),maxParallel:e(o)||null,mode:e(l),value:e(d)}),st(N)}{const N=c=>{var w=ko(),E=K(w);Pe(E,{variant:"secondary",onclick:()=>st(null),children:(y,C)=>{ke();var _=Ue("Cancel");u(y,_)},$$slots:{default:!0}});var h=P(E,2);Pe(h,{variant:"warning",onclick:m,children:(y,C)=>{ke();var _=Ue("Restart");u(y,_)},$$slots:{default:!0}}),u(c,w)};let T=j(()=>r.cases.length),g=j(()=>r.cases.length>1?"s":"");gr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(T)??""} case${e(g)??""} selected`},onConfirm:m,footer:N,children:(c,w)=>{var E=Ro(),h=K(E),y=k(h);Ne(y,{text:"MPI Ranks (n)",children:(B,I)=>{var O=Co();Xe(O),et(O,()=>e(s),V=>f(s,V)),u(B,O)}});var C=P(y,2);Ne(C,{text:"OMP Threads (nt)",children:(B,I)=>{var O=So();Xe(O),et(O,()=>e(i),V=>f(i,V)),u(B,O)}});var _=P(C,2);Ne(_,{text:"Max Parallel",children:(B,I)=>{var O=$o();Xe(O),et(O,()=>e(o),V=>f(o,V)),u(B,O)}}),p(h);var M=P(h,2),F=k(M);Ne(F,{text:"Stop criterion",children:(B,I)=>{var O=Po(),V=k(O);V.value=V.__value="iterations";var G=P(V);G.value=G.__value="physical_time",p(O),Hs(O,()=>e(l),J=>f(l,J)),u(B,O)}});var L=P(F,2);Ne(L,{get text(){return e(b)},children:(B,I)=>{var O=Eo();Xe(O),ee(()=>{we(O,"min",e(A)),we(O,"step",e(x))}),et(O,()=>e(d),V=>f(d,V)),u(B,O)}}),p(M),u(c,E)},$$slots:{footer:!0,default:!0}})}Ae()}function Te(t,r){let a=he(r,"size",3,14);var n=be(),s=K(n);ks(s,()=>r.icon,(i,o)=>{o(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const zn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var To=It("<svg><!><!></svg>");function qe(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]),n=He(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let s=he(r,"name",8,void 0),i=he(r,"color",8,"currentColor"),o=he(r,"size",8,24),l=he(r,"strokeWidth",8,2),d=he(r,"absoluteStrokeWidth",8,!1),b=he(r,"iconNode",24,()=>[]);Rs();var x=To();Ln(x,(N,T,g)=>({...Mo,...N,...n,width:o(),height:o(),stroke:i(),"stroke-width":T,class:g}),[()=>Ao(n)?void 0:{"aria-hidden":"true"},()=>(Ht(d()),Ht(l()),Ht(o()),Mr(()=>d()?Number(l())*24/Number(o()):l())),()=>(Ht(zn),Ht(s()),Ht(a),Mr(()=>zn("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var A=k(x);Ye(A,1,b,fn,(N,T)=>{var g=j(()=>ys(e(T),2));let c=()=>e(g)[0],w=()=>e(g)[1];var E=be(),h=K(E);Ls(h,c,!0,(y,C)=>{Ln(y,()=>({...w()}))}),u(N,E)});var m=P(A);je(m,r,"default",{}),p(x),u(t,x),Ae()}function Lo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];qe(t,Be({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Fo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];qe(t,Be({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Do(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];qe(t,Be({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pn(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];qe(t,Be({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function zo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];qe(t,Be({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Io(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];qe(t,Be({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Oo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];qe(t,Be({name:"circle-x"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function hr(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];qe(t,Be({name:"download"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ho(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];qe(t,Be({name:"droplets"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function jo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];qe(t,Be({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Vo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];qe(t,Be({name:"external-link"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Uo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];qe(t,Be({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Bo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];qe(t,Be({name:"pause"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function qo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];qe(t,Be({name:"pen-line"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ko(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];qe(t,Be({name:"pencil"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function _a(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];qe(t,Be({name:"play"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Go(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];qe(t,Be({name:"plus"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Zt(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];qe(t,Be({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Wo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];qe(t,Be({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Xo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];qe(t,Be({name:"save"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Yo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];qe(t,Be({name:"settings"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Qo(t,r){const a=He(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];qe(t,Be({name:"trash-2"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=K(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}var Zo=S('<li role="option"> </li>'),Jo=S('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),ei=S('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function it(t,r){Me(r,!0);let a=he(r,"value",3,""),n=he(r,"placeholder",3,"Select..."),s=he(r,"class",3,""),i=he(r,"buttonClass",3,""),o=z(!1),l=z(void 0),d=z(void 0),b=z(""),x=j(()=>{var L;return((L=r.options.find(B=>B.value===a()))==null?void 0:L.label)??n()});function A(L){var B;f(o,!1),(B=r.onchange)==null||B.call(r,L)}function m(){if(!e(l)||!e(d))return;const L=e(l).getBoundingClientRect(),B=e(d).offsetHeight,I=4,O=window.innerHeight-L.bottom-I,G=O<B&&L.top-I>O?L.top-I-B:L.bottom+I,J=Math.min(L.left,window.innerWidth-L.width);f(b,`position:fixed; top:${G}px; left:${J}px; width:${L.width}px; z-index:9999;`)}async function N(){f(o,!e(o)),e(o)&&(await Pt(),m())}function T(L){L.key==="Escape"&&f(o,!1)}function g(L){e(o)&&e(l)&&!e(l).contains(L.target)&&e(d)&&!e(d).contains(L.target)&&f(o,!1)}var c=ei();tt("mousedown",ot,g),tt("keydown",ot,T),tt("scroll",ot,()=>{e(o)&&f(o,!1)});var w=K(c),E=k(w),h=k(E),y=k(h,!0);p(h);var C=P(h,2),_=k(C);Te(_,{get icon(){return pn},size:14}),p(C),p(E),rt(E,L=>f(l,L),()=>e(l)),p(w);var M=P(w,2);{var F=L=>{Qt(L,{children:(B,I)=>{var O=Jo();Ye(O,21,()=>r.options,V=>V.value,(V,G)=>{var J=Zo();we(J,"tabindex",0);var se=k(J,!0);p(J),ee(()=>{we(J,"aria-selected",e(G).value===a()),Ce(J,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(G).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ne(se,e(G).label)}),ce("mousedown",J,R=>{R.stopPropagation(),A(e(G).value)}),u(V,J)}),p(O),rt(O,V=>f(d,V),()=>e(d)),ee(()=>Ze(O,e(b))),u(B,O)}})};Q(M,L=>{e(o)&&L(F)})}ee(()=>{Ce(w,1,`relative inline-flex ${s()??""}`),Ce(E,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),we(E,"aria-expanded",e(o)),ne(y,e(x)),Ce(C,1,`text-muted shrink-0 transition-transform duration-150 ${e(o)?"rotate-180":""}`)}),ce("mousedown",E,L=>{L.stopPropagation(),N()}),u(t,c),Ae()}Ge(["mousedown"]);var ti=It('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ri=S('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),ni=S('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),ai=S('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function qt(t,r){Me(r,!0);let a=he(r,"selected",19,()=>[]),n=he(r,"placeholder",3,"Select..."),s=he(r,"class",3,""),i=z(!1),o=z(void 0),l=z(void 0),d=z(""),b=j(()=>new Set(a())),x=j(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(I=>{var O;return((O=r.options.find(V=>V.value===I))==null?void 0:O.label)??I}).join(", "):`${a().length} selected`);function A(I){var V;const O=new Set(e(b));O.has(I)?O.delete(I):O.add(I),(V=r.onchange)==null||V.call(r,[...O])}function m(){var I;(I=r.onchange)==null||I.call(r,r.options.map(O=>O.value))}function N(){var I;(I=r.onchange)==null||I.call(r,[])}function T(){if(!e(o)||!e(l))return;const I=e(o).getBoundingClientRect(),O=e(l).offsetHeight,V=4,G=window.innerHeight-I.bottom-V,se=G<O&&I.top-V>G?I.top-V-O:I.bottom+V,R=Math.min(I.left,window.innerWidth-I.width);f(d,`position:fixed; top:${se}px; left:${R}px; min-width:${I.width}px; z-index:9999;`)}async function g(){f(i,!e(i)),e(i)&&(await Pt(),T())}function c(I){e(i)&&e(o)&&!e(o).contains(I.target)&&e(l)&&!e(l).contains(I.target)&&f(i,!1)}function w(I){I.key==="Escape"&&f(i,!1)}var E=ai();tt("mousedown",ot,c),tt("keydown",ot,w),tt("scroll",ot,()=>{e(i)&&f(i,!1)});var h=K(E),y=k(h),C=k(y),_=k(C,!0);p(C);var M=P(C,2),F=k(M);Te(F,{get icon(){return pn},size:14}),p(M),p(y),rt(y,I=>f(o,I),()=>e(o)),p(h);var L=P(h,2);{var B=I=>{Qt(I,{children:(O,V)=>{var G=ni(),J=k(G),se=k(J),R=P(se,2);p(J);var $=P(J,2);Ye($,17,()=>r.options,H=>H.value,(H,D)=>{var v=ri(),q=k(v),W=k(q);{var de=ae=>{var pe=ti();u(ae,pe)},X=j(()=>e(b).has(e(D).value));Q(W,ae=>{e(X)&&ae(de)})}p(q);var Z=P(q,2),oe=k(Z,!0);p(Z),p(v),ee(ae=>{Ce(q,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${ae??""}`),ne(oe,e(D).label)},[()=>e(b).has(e(D).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),ce("mousedown",v,ae=>{ae.stopPropagation(),A(e(D).value)}),u(H,v)}),p(G),rt(G,H=>f(l,H),()=>e(l)),ee(()=>Ze(G,e(d))),ce("mousedown",se,H=>{H.stopPropagation(),m()}),ce("mousedown",R,H=>{H.stopPropagation(),N()}),u(O,G)}})};Q(L,I=>{e(i)&&I(B)})}ee(()=>{Ce(h,1,`relative inline-flex ${s()??""}`),we(y,"aria-expanded",e(i)),ne(_,e(x)),Ce(M,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),ce("mousedown",y,I=>{I.stopPropagation(),g()}),u(t,E),Ae()}Ge(["mousedown"]);const Zr="csauto_token";let ba=z(ie(localStorage.getItem(Zr)??""));function xa(){return e(ba)}function ya(t){f(ba,t,!0),t?localStorage.setItem(Zr,t):localStorage.removeItem(Zr)}let wr=null;async function mn(t,r={}){const a=new Headers(r.headers),n=xa();n&&a.set("X-CSAUTO-TOKEN",n);const s=await fetch(t,{...r,headers:a});if(s.status===401){wr||(wr=hn("API token required:",n,"Authentication"));const i=await wr;return wr=null,i===null?s:(ya(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return s}async function ct(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Ir(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Rt(t,r){const a=await mn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function Or(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function si(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function In(t){return ct(`/api/perf?${Or(t)}`)}function oi(){return ct("/api/app_config")}function ii(t){return ct(`/api/residual_columns?${Or(t)}`).then(r=>r.columns??[])}function li(t,r,a={}){const n=new URLSearchParams;return t.forEach(s=>n.append("case",s)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Ir(`/api/residuals_svg?${n}`)}function wa(t){return ct(`/api/restart_origin?${Or(t)}`)}function ci(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function ui(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Ir(`/api/tail?${n}`)}function di(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function fi(t){return ct(`/api/resu_dirs?${Or(t)}`).then(r=>r.dirs??[])}function Jr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function vi(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function gi(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(s=>n.append("column",s)),ct(`/api/probe_position?${n}`)}function hi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Ir(`/api/probe_svg?${r}`)}function pi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Ir(`/api/compare_runs?${r}`)}function On(t){return Rt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function mi(t){return Rt("/api/kill_case",{cases:t}).then(()=>{})}function kr(t){return Rt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function _i(t){return Rt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function bi(t,r){return Rt("/api/case_note",{case:t,note:r}).then(()=>{})}function xi(t,r){return Rt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function yi(t){return Rt("/api/open_gui",{case:t}).then(()=>{})}function wi(){return ct("/api/settings/telemetry")}function ki(t){return Rt("/api/settings/telemetry",{enabled:t})}var Ci=S("<!> <!>",1),Si=S('<input type="number" min="0" step="1" class="w-[80px]"/>'),$i=S('<span class="text-xs text-muted">Loading...</span>'),Pi=S('<span class="text-xs text-muted">No folders found</span>'),Ei=S('<div class="mb-3"><!></div>'),Ri=S('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Ni(t,r){Me(r,!0);const a=ho();let n=z("keep_latest"),s=z(ie(a.keepLast)),i=z(ie([])),o=z(ie([])),l=z(!0),d=j(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const b=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let x=j(()=>e(i).map(m=>({value:m,label:m})));Zn(async()=>{try{f(i,await fi(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function A(){if(e(d)&&e(o).length===0){await We("Please select at least one RESU folder.","Missing selection");return}const m={action:e(n)};e(n)==="keep_latest"?(m.keepLast=e(s),po({keepLast:e(s)})):e(n)==="delete_all"?m.keepLast=0:e(n)==="keep_folder"?m.keepResu=e(o):e(n)==="delete_folder"&&(m.deleteResu=e(o)),st(m)}{const m=g=>{var c=Ci(),w=K(c);Pe(w,{variant:"secondary",onclick:()=>st(null),children:(h,y)=>{ke();var C=Ue("Cancel");u(h,C)},$$slots:{default:!0}});var E=P(w,2);Pe(E,{variant:"primary",onclick:A,children:(h,y)=>{ke();var C=Ue("Clean");u(h,C)},$$slots:{default:!0}}),u(g,c)};let N=j(()=>r.cases.length),T=j(()=>r.cases.length>1?"s":"");gr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(N)??""} case${e(T)??""} selected`},footer:m,children:(g,c)=>{var w=Ri(),E=K(w),h=k(E);Ne(h,{text:"Action",children:(F,L)=>{it(F,{class:"w-[200px]",get options(){return b},get value(){return e(n)},onchange:B=>f(n,B,!0)})}});var y=P(h,2);{var C=F=>{Ne(F,{text:"Keep last",children:(L,B)=>{var I=Si();Xe(I),et(I,()=>e(s),O=>f(s,O)),u(L,I)}})};Q(y,F=>{e(n)==="keep_latest"&&F(C)})}p(E);var _=P(E,2);{var M=F=>{var L=Ei(),B=k(L);Ne(B,{text:"RESU folders",children:(I,O)=>{var V=be(),G=K(V);{var J=$=>{var H=$i();u($,H)},se=$=>{var H=Pi();u($,H)},R=$=>{qt($,{class:"w-full",get options(){return e(x)},get selected(){return e(o)},onchange:H=>f(o,H,!0),placeholder:"Select folders..."})};Q(G,$=>{e(l)?$(J):e(i).length===0?$(se,1):$(R,-1)})}u(I,V)}}),p(L),u(F,L)};Q(_,F=>{e(d)&&F(M)})}u(g,w)},$$slots:{footer:!0,default:!0}})}Ae()}function Mi(t,r){Me(r,!0);let a=j(Ws);var n=be(),s=K(n);{var i=b=>{wo(b,{get cases(){return e(a).props.cases}})},o=b=>{No(b,{get cases(){return e(a).props.cases}})},l=b=>{Ni(b,{get cases(){return e(a).props.cases}})},d=b=>{io(b,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Q(s,b=>{e(a).type==="run"?b(i):e(a).type==="restart"?b(o,1):e(a).type==="clean"?b(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&b(d,3)})}u(t,n),Ae()}let dr=z(ie([])),Ai=0;function Ti(){return e(dr)}function Cr(t,r="success",a=3500){const n=++Ai;f(dr,[...e(dr),{id:n,message:t,variant:r}],!0),setTimeout(()=>ka(n),a)}function ka(t){f(dr,e(dr).filter(r=>r.id!==t),!0)}var Li=S('<div role="status"> </div>'),Fi=S('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Di(t,r){Me(r,!0);let a=j(Ti);Qt(t,{children:(n,s)=>{var i=Fi();Ye(i,21,()=>e(a),o=>o.id,(o,l)=>{var d=Li(),b=k(d,!0);p(d),ee(()=>{Ce(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ne(b,e(l).message)}),ce("click",d,()=>ka(e(l).id)),u(o,d)}),p(i),u(n,i)}}),Ae()}Ge(["click"]);var zi=It('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Ii=It('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Oi=S('<span role="checkbox"><!></span>'),Hi=S("<span> </span><!>",1),ji=S("<!><span> </span>",1),Vi=S('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function zt(t,r){Me(r,!0);const a=g=>{var c=Oi(),w=k(c);{var E=y=>{var C=zi();ee(()=>Ze(C,`width: ${o()-4}px; height: ${o()-4}px;`)),u(y,C)},h=y=>{var C=Ii();ee(()=>Ze(C,`width: ${o()-4}px; height: ${o()-4}px;`)),u(y,C)};Q(w,y=>{n()&&!s()?y(E):s()&&y(h,1)})}p(c),ee(()=>{Ce(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||s()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${o()??""}px; height: ${o()??""}px;`),we(c,"aria-checked",s()?"mixed":n()),we(c,"aria-disabled",i()),we(c,"tabindex",i()?-1:0)}),ce("click",c,b),ce("keydown",c,x),u(g,c)};let n=he(r,"checked",3,!1),s=he(r,"indeterminate",3,!1),i=he(r,"disabled",3,!1),o=he(r,"size",3,16),l=he(r,"label",3,""),d=he(r,"labelFirst",3,!1);function b(g){var w;if(g.stopPropagation(),i())return;const c=s()?!0:!n();(w=r.onchange)==null||w.call(r,c)}function x(g){(g.key===" "||g.key==="Enter")&&(g.preventDefault(),g.stopPropagation(),b(g))}var A=be(),m=K(A);{var N=g=>{var c=Vi(),w=k(c);{var E=y=>{var C=Hi(),_=K(C),M=k(_,!0);p(_);var F=P(_);a(F),ee(()=>ne(M,l())),u(y,C)},h=y=>{var C=ji(),_=K(C);a(_);var M=P(_),F=k(M,!0);p(M),ee(()=>ne(F,l())),u(y,C)};Q(w,y=>{d()?y(E):y(h,-1)})}p(c),ce("click",c,b),ce("keydown",c,x),u(g,c)},T=g=>{a(g)};Q(m,g=>{l()?g(N):g(T,-1)})}u(t,A),Ae()}Ge(["click","keydown"]);function _n(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Hr(t,r){localStorage.setItem(t,JSON.stringify(r))}const en=new Map;function pr(t,r,a){vt(t),en.set(t,setInterval(r,a))}function vt(t){const r=en.get(t);r!==void 0&&(clearInterval(r),en.delete(t))}const Lt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Ui=["status","plot","probe","tail","errors"],Wr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},or=_n("csauto_refresh_rates",{});let _t=z(ie({status:or.status??Lt.status,tail:or.tail??Lt.tail,plot:or.plot??Lt.plot,probe:or.probe??Lt.probe,errors:or.errors??Lt.errors}));function Bi(){return e(_t)}function qi(t,r){f(_t,{...e(_t),[t]:r},!0),Hr("csauto_refresh_rates",e(_t))}function Ki(){return e(_t).status}function Hn(){return e(_t).tail}function jn(){return e(_t).plot}function Gi(){return e(_t).probe}function Vn(){return e(_t).errors}const tn=new Set;function mr(t){return tn.add(t),()=>tn.delete(t)}function Wi(){tn.forEach(t=>t())}const rn=_n("csauto_autorefresh_enabled",{});function Jt(t){return rn[t]??!0}function er(t,r){rn[t]=r,Hr("csauto_autorefresh_enabled",rn)}var Xi=S("<!> <!>",1),Yi=S('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),Qi=S('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),Zi=S('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function Ji(t,r){Me(r,!0);let a=z(ie(xa())),n=z(ie({...Bi()})),s=z(!0),i=z(!1);Re(()=>{wi().then(b=>{f(s,b.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function o(b){const{min:x}=Wr[b];let A=e(n)[b];(typeof A!="number"||isNaN(A))&&(A=Lt[b]),f(n,{...e(n),[b]:Math.max(x,Math.round(A))},!0)}function l(b,x){const A=x.target,m=A.value.replace(/[^0-9]/g,""),N=parseInt(m,10);isNaN(N)?m===""&&f(n,{...e(n),[b]:Wr[b].min},!0):f(n,{...e(n),[b]:N},!0),A.value=String(e(n)[b])}function d(){ya(e(a));for(const b of Object.keys(e(n)))o(b),qi(b,e(n)[b]);e(i)&&ki(e(s)).catch(()=>{}),r.onClose()}gr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:x=>{var A=Xi(),m=K(A);Pe(m,{variant:"secondary",get onclick(){return r.onClose},children:(T,g)=>{ke();var c=Ue("Cancel");u(T,c)},$$slots:{default:!0}});var N=P(m,2);Pe(N,{variant:"primary",onclick:d,children:(T,g)=>{ke();var c=Ue("Save");u(T,c)},$$slots:{default:!0}}),u(x,A)},children:(x,A)=>{var m=Zi(),N=K(m),T=P(k(N),2);Xe(T),p(N);var g=P(N,2),c=k(g),w=P(k(c),2);p(c);var E=P(c,2);Ye(E,20,()=>Ui,C=>C,(C,_)=>{const M=j(()=>Wr[_]);var F=Yi(),L=k(F),B=k(L),I=k(B,!0);p(B);var O=P(B,2),V=k(O);p(O),p(L);var G=P(L,2),J=k(G);Xe(J),ke(2),p(G),p(F),ee(()=>{ne(I,e(M).label),ne(V,`min ${e(M).min??""}ms`),vn(J,e(n)[_])}),ce("input",J,se=>l(_,se)),tt("blur",J,()=>o(_)),u(C,F)}),p(E),p(g);var h=P(g,2);{var y=C=>{var _=Qi(),M=P(k(_),2);zt(M,{get checked(){return e(s)},onchange:F=>f(s,F,!0),label:"Send anonymous usage statistics"}),p(_),u(C,_)};Q(h,C=>{e(i)&&C(y)})}et(T,()=>e(a),C=>f(a,C)),ce("click",w,()=>f(n,{...Lt},!0)),u(x,m)},$$slots:{footer:!0,default:!0}}),Ae()}Ge(["click","input"]);const el=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,tl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";let Kt=z(null);function rl(t){f(Kt,t,!0)}function St(){return e(Kt)}function lr(t){return e(Kt)===null||e(Kt).capabilities.includes(t)}function nl(t){return e(Kt)===null||e(Kt).control_actions.includes(t)}var al=S('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),sl=S('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),ol=S('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),il=S('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function ll(t,r){Me(r,!0);let a=j(()=>r.shownCases!==r.totalCases),n=z(!1);var s=il(),i=K(s),o=k(i),l=k(o);{var d=D=>{var v=al();ee(()=>we(v,"src",el)),u(D,v)},b=j(()=>{var D;return!St()||((D=St())==null?void 0:D.solver)==="code_saturne"}),x=D=>{var v=sl();ee(()=>we(v,"src",tl)),u(D,v)},A=j(()=>{var D;return((D=St())==null?void 0:D.solver)==="code_aster"}),m=D=>{var v=ol(),q=k(v,!0);p(v),ee(W=>ne(q,W),[()=>{var W;return(W=St())==null?void 0:W.solver}]),u(D,v)};Q(l,D=>{e(b)?D(d):e(A)?D(x,1):D(m,-1)})}p(o);var N=P(o,2),T=k(N),g=k(T),c=k(g);{var w=D=>{var v=Ue();ee(()=>ne(v,`${r.shownCases??""}/`)),u(D,v)};Q(c,D=>{e(a)&&D(w)})}var E=P(c,1,!0);p(g);var h=P(g,2),y=k(h,!0);p(h),p(T);var C=P(T,2),_=k(C),M=k(_);{var F=D=>{var v=Ue();ee(()=>ne(v,`${r.shownRunning??""}/`)),u(D,v)};Q(M,D=>{e(a)&&D(F)})}var L=P(M,1,!0);p(_),ke(2),p(C);var B=P(C,2),I=k(B),O=k(I);{var V=D=>{var v=Ue();ee(()=>ne(v,`${r.shownConverged??""}/`)),u(D,v)};Q(O,D=>{e(a)&&D(V)})}var G=P(O,1,!0);p(I),ke(2),p(B),p(N);var J=P(N,2),se=k(J),R=k(se);Te(R,{get icon(){return Yo},size:18}),p(se),p(J),p(i);var $=P(i,2);{var H=D=>{Ji(D,{onClose:()=>f(n,!1)})};Q($,D=>{e(n)&&D(H)})}ee(()=>{ne(E,r.totalCases),ne(y,r.totalCases===1?"case":"cases"),ne(L,r.totalRunning),ne(G,r.totalConverged)}),ce("click",se,()=>f(n,!0)),u(t,s),Ae()}Ge(["click"]);const cl=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var ul=S('<div class="text-xs text-muted font-normal"> </div>'),dl=S('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),fl=S("<div><!> <!></div>"),vl=S('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),gl=S('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),hl=S('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function Ot(t,r){let a=he(r,"eyebrow",3,""),n=he(r,"title",3,""),s=he(r,"wide",3,!1);var i=hl(),o=P(k(i),2);{var l=b=>{var x=gl(),A=k(x);{var m=c=>{var w=be(),E=K(w);ft(E,()=>r.titleSlot),u(c,w)},N=c=>{var w=fl(),E=k(w);{var h=_=>{var M=ul(),F=k(M,!0);p(M),ee(()=>ne(F,a())),u(_,M)};Q(E,_=>{a()&&_(h)})}var y=P(E,2);{var C=_=>{var M=dl(),F=k(M,!0);p(M),ee(()=>ne(F,n())),u(_,M)};Q(y,_=>{n()&&_(C)})}p(w),u(c,w)};Q(A,c=>{r.titleSlot?c(m):c(N,-1)})}var T=P(A,2);{var g=c=>{var w=vl(),E=k(w);ft(E,()=>r.actions),p(w),u(c,w)};Q(T,c=>{r.actions&&c(g)})}p(x),u(b,x)};Q(o,b=>{(a()||n()||r.titleSlot||r.actions)&&b(l)})}var d=P(o,2);ft(d,()=>r.children),p(i),ee(()=>{Ce(i,1,`${s()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),we(i,"id",r.id)}),u(t,i)}function tr(t,r){Me(r,!0);let a=he(r,"checked",15,!0);Re(()=>{a()?pr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),fr(()=>vt(r.name)),zt(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Ae()}var pl=S("<!> ",1),ml=S('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),_l=S('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),bl=S('<span class="inline-flex"><!></span> <!>',1);function xl(t,r){Me(r,!0);let a=he(r,"label",3,"More"),n=z(!1),s=z(void 0),i=z(void 0),o=z("");function l(){if(!e(s)||!e(i))return;const c=e(s).getBoundingClientRect(),w=e(i).offsetHeight,E=4,h=window.innerHeight-c.bottom-E,C=h<w&&c.top-E>h?c.top-E-w:c.bottom+E,_=Math.min(c.left,window.innerWidth-180);f(o,`position:fixed; top:${C}px; left:${_}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Pt(),l())}function b(c){c.disabled||(f(n,!1),c.onClick())}function x(c){e(n)&&e(s)&&!e(s).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var A=bl();tt("mousedown",ot,x),tt("keydown",ot,c=>{c.key==="Escape"&&f(n,!1)}),tt("scroll",ot,()=>{e(n)&&f(n,!1)});var m=K(A),N=k(m);Pe(N,{variant:"secondary",size:"sm",onclick:d,children:(c,w)=>{var E=pl(),h=K(E);Te(h,{get icon(){return jo}});var y=P(h);ee(()=>ne(y,` ${a()??""}`)),u(c,E)},$$slots:{default:!0}}),p(m),rt(m,c=>f(s,c),()=>e(s));var T=P(m,2);{var g=c=>{Qt(c,{children:(w,E)=>{var h=_l();Ye(h,21,()=>r.items,y=>y.label,(y,C)=>{var _=ml(),M=k(_),F=k(M);Te(F,{get icon(){return e(C).icon},size:14});var L=P(F);p(M),p(_),ee(()=>{M.disabled=e(C).disabled,we(M,"aria-disabled",e(C).disabled),Ce(M,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(C).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ne(L,` ${e(C).label??""}`)}),ce("mousedown",M,B=>{B.stopPropagation(),b(e(C))}),u(y,_)}),p(h),rt(h,y=>f(i,y),()=>e(i)),ee(()=>Ze(h,e(o))),u(w,h)}})};Q(T,c=>{e(n)&&c(g)})}u(t,A),Ae()}Ge(["mousedown"]);const Ft=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"}];let Gt=z(ie([])),Tr=z(ie([])),ht=z(ie(new Set)),_r=z(""),bn=z(""),Et=z(ie([])),at=z(ie([])),Wt=z(""),Ca=z(!0),yl=z(!0),Ut=z(ie(_n("csauto_status_views",{}))),xn=z(ie(localStorage.getItem("csauto_status_view_selected")??""));function yn(){return e(Gt)}function wn(){return e(Tr)}function jt(){return e(ht)}function Un(){return e(_r)}function nn(){return e(bn)}function wl(){return e(Et)}function kl(){return e(Et).filter(t=>e(Tr).includes(t))}function Cl(){return e(Et).filter(t=>Ft.some(r=>r.key===t))}function Sl(){return e(at)}function $l(){return e(Wt)}function Pl(){return e(Ca)}function Bn(){return e(Ut)}function El(){return e(xn)}function Rl(t){f(Gt,t,!0)}function Nl(t){const r=e(Tr).length===0&&t.length>0;f(Tr,t,!0),r&&e(Et).length===0&&f(Et,[...t,...Ft.map(a=>a.key)],!0)}function Ml(t){f(_r,t,!0)}function qn(t){f(Et,t,!0)}function Al(t){f(Wt,t,!0)}function Tl(t){f(Ca,t,!0)}function Ll(t){f(yl,t,!0)}function kn(t){f(xn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function an(t){const r=new Set(e(ht));r.has(t)?r.delete(t):r.add(t),f(ht,r,!0),f(_r,t,!0),f(bn,t,!0)}function Sa(t){f(ht,new Set([t]),!0),f(_r,t,!0),f(bn,t,!0)}function sn(t,r,a){const n=a.indexOf(t),s=a.indexOf(r);if(n<0||s<0)return;const[i,o]=n<s?[n,s]:[s,n],l=new Set(e(ht));for(let d=i;d<=o;d++)l.add(a[d]);f(ht,l,!0),f(_r,r,!0)}function Kn(t){f(ht,new Set(t),!0)}function Gn(){f(ht,new Set,!0)}function Fl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function $a(){if(!e(Wt).trim())return e(Gt);const t=e(Wt).toLowerCase().trim().split(/\s+/);return e(Gt).filter(r=>{const a=Fl(r);return t.every(n=>a.includes(n))})}function Dl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Wn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Dl(a):""}function zl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Pa(){const t=$a();return e(at).length===0?t:[...t].sort((r,a)=>{for(const n of e(at)){const s=Wn(r,n.key),i=Wn(a,n.key),o=zl(s,i);if(o!==0)return n.dir==="asc"?o:-o}return 0})}function Rr(){return Pa().map(t=>t.case_id)}function Il(t,r){const a=e(at).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(at)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(at,n,!0)}else f(at,[...e(at),{key:t,dir:"asc"}],!0);else a>=0&&e(at).length===1?f(at,[{key:t,dir:e(at)[0].dir==="asc"?"desc":"asc"}],!0):f(at,[{key:t,dir:"asc"}],!0)}function Ol(){return{visibleColumns:[...e(Et)],search:e(Wt),sorts:e(at).map(t=>({...t}))}}function Hl(t){f(Et,[...t.visibleColumns],!0),f(Wt,t.search,!0),f(at,t.sorts.map(r=>({...r})),!0)}function jl(t){f(Ut,{...e(Ut),[t]:Ol()},!0),Hr("csauto_status_views",e(Ut)),kn(t)}function Vl(t){const r={...e(Ut)};delete r[t],f(Ut,r,!0),Hr("csauto_status_views",r),e(xn)===t&&kn("")}function Sr(){const t=new Set;for(const r of e(Gt))e(ht).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Xn(){for(const t of e(Gt))if(e(ht).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function Ul(t,r){const a=r.length,n=t.length,s=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,o=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:s,shownRunning:i,totalConverged:o,shownConverged:l}}var Bl=S('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),ql=S('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function Kl(t,r){Me(r,!0);let a=he(r,"initialName",3,""),n=j(wn),s=z(ie(a())),i=z(ie(new Set(r.initialColumns??[...e(n),...Ft.map(V=>V.key)])));function o(V){const G=new Set(e(i));G.has(V)?G.delete(V):G.add(V),f(i,G,!0)}function l(V,G){const J=new Set(e(i));V.forEach(se=>G?J.add(se):J.delete(se)),f(i,J,!0)}function d(){const V=e(s).trim();V&&r.onSave(V,[...e(i)])}function b(V){V.key==="Escape"&&r.onCancel()}function x(V){V.target.dataset.backdrop!==void 0&&r.onCancel()}let A=z(void 0);Re(()=>{var V,G;(V=e(A))==null||V.focus(),(G=e(A))==null||G.select()});var m=ql(),N=k(m),T=k(N),g=k(T,!0);p(T);var c=P(T,2),w=P(k(c),2);Xe(w),rt(w,V=>f(A,V),()=>e(A)),p(c);var E=P(c,2);{var h=V=>{var G=Bl(),J=k(G),se=P(k(J),2),R=k(se),$=P(R,2);p(se),p(J);var H=P(J,2);Ye(H,20,()=>e(n),D=>D,(D,v)=>{{let q=j(()=>e(i).has(v));zt(D,{get checked(){return e(q)},onchange:()=>o(v),size:14,get label(){return v}})}}),p(H),p(G),ce("click",R,()=>l(e(n),!0)),ce("click",$,()=>l(e(n),!1)),u(V,G)};Q(E,V=>{e(n).length>0&&V(h)})}var y=P(E,2),C=k(y),_=P(k(C),2),M=k(_),F=P(M,2);p(_),p(C);var L=P(C,2);Ye(L,21,()=>Ft,V=>V.key,(V,G)=>{{let J=j(()=>e(i).has(e(G).key));zt(V,{get checked(){return e(J)},onchange:()=>o(e(G).key),size:14,get label(){return e(G).label}})}}),p(L),p(y);var B=P(y,2),I=k(B);Pe(I,{variant:"secondary",get onclick(){return r.onCancel},children:(V,G)=>{ke();var J=Ue("Cancel");u(V,J)},$$slots:{default:!0}});var O=P(I,2);{let V=j(()=>!e(s).trim());Pe(O,{variant:"primary",onclick:d,get disabled(){return e(V)},children:(G,J)=>{ke();var se=Ue("Save");u(G,se)},$$slots:{default:!0}})}p(B),p(N),p(m),ee(()=>ne(g,r.mode==="create"?"New view":"Edit view")),ce("keydown",m,b),ce("click",m,x),et(w,()=>e(s),V=>f(s,V)),ce("click",M,()=>l(Ft.map(V=>V.key),!0)),ce("click",F,()=>l(Ft.map(V=>V.key),!1)),u(t,m),Ae()}Ge(["keydown","click"]);var Gl=S('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function Wl(t,r){Me(r,!0);let a=j(()=>Object.keys(Bn())),n=z(ie(El())),s=z(!1),i=z("create"),o=j(()=>[{value:"",label:"All columns"},...e(a).map(C=>({value:C,label:C}))]);function l(C){if(f(n,C,!0),kn(C),C==="")qn([...wn(),...Ft.map(_=>_.key)]);else{const _=Bn();_[C]&&Hl(_[C])}}function d(){f(i,"edit"),f(s,!0)}function b(){f(i,"create"),f(s,!0)}function x(C,_){qn(_),e(i)==="edit"&&e(n)&&C!==e(n)&&Vl(e(n)),jl(C),f(n,C,!0),f(s,!1)}function A(){f(s,!1)}var m=Gl(),N=K(m),T=k(N);it(T,{class:"w-[140px]",get options(){return e(o)},get value(){return e(n)},onchange:l});var g=P(T,2),c=k(g);Te(c,{get icon(){return Ko},size:14}),p(g);var w=P(g,2),E=k(w);Te(E,{get icon(){return Go},size:14}),p(w),p(N);var h=P(N,2);{var y=C=>{Qt(C,{children:(_,M)=>{{let F=j(()=>e(i)==="edit"?e(n):""),L=j(wl);Kl(_,{get mode(){return e(i)},get initialName(){return e(F)},get initialColumns(){return e(L)},onSave:x,onCancel:A})}}})};Q(h,C=>{e(s)&&C(y)})}ce("click",g,d),ce("click",w,b),u(t,m),Ae()}Ge(["click"]);var Xl=S('<th><div class="flex items-center justify-center h-full"><!></div></th>'),Yl=S("<th></th>"),Ql=S('<span style="margin-left: 4px; font-size: 9px;"> </span>'),Zl=S('<th role="button" tabindex="0"> <!></th>'),Jl=S('<td><div class="flex items-center justify-center h-full"><!></div></td>'),ec=S("<td><span> </span></td>"),tc=S('<span class="text-muted"><!></span>'),rc=S('<td role="button" tabindex="0"><!></td>'),nc=S("<!> Open GUI",1),ac=S("<td><!></td>"),sc=S("<td> </td>"),oc=S("<tr></tr>"),ic=S('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function lc(t,r){Me(r,!0);let a=j(()=>r.rows.length>0&&r.rows.every(R=>e(b).has(R.case_id))),n=j(()=>r.rows.some(R=>e(b).has(R.case_id))),s=j(()=>e(n)&&!e(a)),i=j(kl),o=j(()=>new Set(Cl())),l=j(Sl),d=j(Pl),b=j(jt),x=j(()=>{const R=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(o).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],$=e(i).map(q=>({key:q,label:q,kind:"doe"})),D=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"}].filter(q=>e(o).has(q.key)),v=lr("gui")?[{key:"_actions",label:"",kind:"meta",sticky:"right"}]:[];return[...R,...$,...D,...v]});function A(R){const $=e(l).findIndex(D=>D.key===R);if($<0)return"";const H=e(l)[$].dir==="asc"?"▲":"▼";return e(l).length>1?`${H}${$+1}`:H}function m(R,$){R!=="_actions"&&Il(R,$.ctrlKey||$.metaKey)}function N(R,$){$.shiftKey?sn(nn()||R,R,Rr()):$.ctrlKey||$.metaKey?an(R):Sa(R)}function T(R,$){var D;const H=((D=R.status)==null?void 0:D.toUpperCase())??"";H!=="DONE"&&H!=="FAILED"||($.preventDefault(),r.onContextMenu(R.case_id,$.clientX,$.clientY,R.convergence??""))}async function g(R){const $=R.note??"",H=await hn("Case note:",$,`Note — ${R.case_id}`,"",!0);if(H!==null)try{await bi(R.case_id,H)}catch(D){await We(`Failed to set note: ${D instanceof Error?D.message:D}`,"Error")}}async function c(R){try{await yi(R)}catch($){await We(`Failed to open GUI: ${$ instanceof Error?$.message:$}`,"Error")}}function w(R,$){const H=(R==null?void 0:R.toUpperCase())??"";return(H==="DONE"||H==="FAILED")&&$==="converged"?"CONVERGED":(H==="DONE"||H==="FAILED")&&$==="not_converged"?"NOT CONVERGED":H}function E(R,$){const H=(R==null?void 0:R.toUpperCase())??"";return(H==="DONE"||H==="FAILED")&&$==="converged"?"status-converged":(H==="DONE"||H==="FAILED")&&$==="not_converged"?"status-not-converged":H==="RUNNING"?"status-running":H==="DONE"?"status-done":H==="FAILED"?"status-failed":H==="PREPARED"?"status-prepared":"status-unknown"}function h(R){return e(b).has(R.case_id)?"row-selected":""}function y(R,$){var H;return $.key==="case_id"?R.case_id:$.key==="nprocs"?R.nprocs!=null?String(R.nprocs):"":$.key==="nt"?R.nt!=null?String(R.nt):"":$.key==="last_iter"?R.last_iter!=null?String(R.last_iter):"":$.key==="duration"?R.duration??"":$.key==="last_mod"?C(R.last_mod):$.key==="resu_size_mb"?R.resu_size_mb!=null?String(R.resu_size_mb):"":$.kind==="doe"?((H=R.doe)==null?void 0:H[$.key])!=null&&String(R.doe[$.key])!==""?String(R.doe[$.key]):"—":""}function C(R){if(!R)return"";try{const $=new Date(R),H=new Date,D=$.toDateString()===H.toDateString(),v=new Date(H);v.setDate(v.getDate()-1);const q=$.toDateString()===v.toDateString(),W=$.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return D?`Today ${W}`:q?`Yesterday ${W}`:$.toLocaleDateString([],{month:"short",day:"numeric"})+` ${W}`}catch{return R}}let _=z(ie({})),M=z(void 0);Re(()=>{e(d),e(x),r.rows,!(!e(M)||!e(d))&&Pt().then(()=>{if(!e(M))return;const R=Array.from(e(M).querySelectorAll("thead th.sticky-left")),$={};let H=0;R.forEach(D=>{const v=D.dataset.colKey??"";$[v]=H,H+=D.getBoundingClientRect().width}),f(_,$,!0)})});function F(R,$,H){const D=H&&R.key!=="_select"&&R.key!=="_actions"?["status-sortable"]:[];if(!H&&R.key==="case_id"&&D.push("case-id"),R.kind==="doe"&&D.push("status-col-doe"),!H&&R.key==="note"&&D.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&R.sticky==="left"&&D.push("sticky-left"),e(d)&&R.sticky==="right"&&D.push("sticky-right"),e(d)&&R.sticky==="left"){const v=e(x)[$+1];(!v||v.sticky!=="left")&&D.push("sticky-divider")}if(e(d)&&R.sticky==="right"){const v=e(x)[$-1];(!v||v.sticky!=="right")&&D.push("sticky-divider")}return D.join(" ")}function L(R,$){return F(R,$,!0)}function B(R,$){return F(R,$,!1)}function I(R){return!e(d)||!R.sticky?"":R.sticky==="right"?"position:sticky;right:0;":R.sticky==="left"&&R.key in e(_)?`position:sticky;left:${e(_)[R.key]}px;`:""}var O=ic(),V=k(O),G=k(V),J=k(G);Ye(J,23,()=>e(x),R=>R.key,(R,$,H)=>{var D=be(),v=K(D);{var q=X=>{var Z=Xl(),oe=k(Z),ae=k(oe);zt(ae,{get checked(){return e(a)},get indeterminate(){return e(s)},get onchange(){return r.onToggleAll},size:14}),p(oe),p(Z),ee((pe,me)=>{Ce(Z,1,`${pe??""} !px-2.5 !py-0 w-9`),we(Z,"data-col-key",e($).key),Ze(Z,me)},[()=>L(e($),e(H)),()=>I(e($))]),u(X,Z)},W=X=>{var Z=Yl();ee((oe,ae)=>{Ce(Z,1,oe),we(Z,"data-col-key",e($).key),Ze(Z,ae)},[()=>dt(L(e($),e(H))),()=>I(e($))]),u(X,Z)},de=X=>{var Z=Zl(),oe=k(Z),ae=P(oe);{var pe=re=>{var _e=Ql(),ye=k(_e,!0);p(_e),ee(Ee=>ne(ye,Ee),[()=>A(e($).key)]),u(re,_e)},me=j(()=>A(e($).key));Q(ae,re=>{e(me)&&re(pe)})}p(Z),ee((re,_e)=>{Ce(Z,1,re),we(Z,"data-col-key",e($).key),Ze(Z,_e),ne(oe,`${e($).label??""} `)},[()=>dt(L(e($),e(H))),()=>I(e($))]),ce("click",Z,re=>m(e($).key,re)),ce("keydown",Z,re=>{(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),m(e($).key,re))}),u(X,Z)};Q(v,X=>{e($).key==="_select"?X(q):e($).key==="_actions"?X(W,1):X(de,-1)})}u(R,D)}),p(J),p(G);var se=P(G);Ye(se,21,()=>r.rows,R=>R.case_id,(R,$)=>{var H=oc();Ye(H,23,()=>e(x),D=>D.key,(D,v,q)=>{var W=be(),de=K(W);{var X=me=>{var re=Jl(),_e=k(re),ye=k(_e);{let Ee=j(()=>e(b).has(e($).case_id));zt(ye,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e($).case_id),size:14})}p(_e),p(re),ee((Ee,ge)=>{Ce(re,1,`${Ee??""} !px-2.5 !py-0 w-9`),we(re,"data-col-key",e(v).key),Ze(re,ge)},[()=>B(e(v),e(q)),()=>I(e(v))]),u(me,re)},Z=me=>{var re=ec(),_e=k(re),ye=k(_e,!0);p(_e),p(re),ee((Ee,ge,Fe,Ie)=>{Ce(re,1,Ee),we(re,"data-col-key",e(v).key),Ze(re,ge),Ce(_e,1,`status-pill ${Fe??""}`),ne(ye,Ie)},[()=>dt(B(e(v),e(q))),()=>I(e(v)),()=>E(e($).status,e($).convergence),()=>w(e($).status,e($).convergence)]),u(me,re)},oe=me=>{var re=rc(),_e=k(re);{var ye=ge=>{var Fe=Ue();ee(()=>ne(Fe,e($).note)),u(ge,Fe)},Ee=ge=>{var Fe=tc(),Ie=k(Fe);Te(Ie,{get icon(){return qo},size:12}),p(Fe),u(ge,Fe)};Q(_e,ge=>{e($).note?ge(ye):ge(Ee,-1)})}p(re),ee((ge,Fe)=>{Ce(re,1,ge),we(re,"data-col-key",e(v).key),Ze(re,Fe),we(re,"title",e($).note||"Add note")},[()=>dt(B(e(v),e(q))),()=>I(e(v))]),ce("click",re,ge=>{ge.stopPropagation(),g(e($))}),ce("keydown",re,ge=>{(ge.key==="Enter"||ge.key===" ")&&(ge.preventDefault(),ge.stopPropagation(),g(e($)))}),u(me,re)},ae=me=>{var re=ac(),_e=k(re);Pe(_e,{variant:"primary",size:"sm",onclick:ye=>{ye.stopPropagation(),c(e($).case_id)},children:(ye,Ee)=>{var ge=nc(),Fe=K(ge);Te(Fe,{get icon(){return Vo},size:12}),ke(),u(ye,ge)},$$slots:{default:!0}}),p(re),ee((ye,Ee)=>{Ce(re,1,ye),we(re,"data-col-key",e(v).key),Ze(re,Ee)},[()=>dt(B(e(v),e(q))),()=>I(e(v))]),u(me,re)},pe=me=>{var re=sc(),_e=k(re,!0);p(re),ee((ye,Ee,ge)=>{Ce(re,1,ye),we(re,"data-col-key",e(v).key),Ze(re,Ee),ne(_e,ge)},[()=>dt(B(e(v),e(q))),()=>I(e(v)),()=>y(e($),e(v))]),u(me,re)};Q(de,me=>{e(v).key==="_select"?me(X):e(v).key==="status"?me(Z,1):e(v).key==="note"?me(oe,2):e(v).key==="_actions"?me(ae,3):me(pe,-1)})}u(D,W)}),p(H),ee(D=>Ce(H,1,D),[()=>dt(h(e($)))]),ce("click",H,D=>N(e($).case_id,D)),ce("contextmenu",H,D=>T(e($),D)),u(R,H)}),p(se),p(V),rt(V,R=>f(M,R),()=>e(M)),p(O),ee(()=>Ce(O,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,O),Ae()}Ge(["click","keydown","contextmenu"]);var cc=S('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function uc(t,r){Me(r,!0);let a=j(()=>{const m=Math.min(r.x,window.innerWidth-180),N=Math.min(r.y,window.innerHeight-120);return`left: ${m}px; top: ${N}px;`});async function n(m){try{for(const N of r.cases)await xi(N,m)}catch(N){console.error("Failed to set convergence:",N)}r.onClose()}const s=r.cases.length>1?` (${r.cases.length})`:"";var i=cc();tt("keydown",ot,m=>{m.key==="Escape"&&r.onClose()});var o=k(i),l=k(o);p(o);var d=P(o,2),b=k(d);p(d);var x=P(d,2),A=k(x);p(x),p(i),ee(()=>{Ze(i,e(a)),Ce(o,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ne(l,`Mark Converged${s}`),Ce(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ne(b,`Mark Not Converged${s}`),Ce(x,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ne(A,`Clear Mark${s}`)}),ce("click",o,()=>n("converged")),ce("click",d,()=>n("not_converged")),ce("click",x,()=>n("")),u(t,i),Ae()}Ge(["click"]);var dc=S("<!> Refresh",1),fc=S("<!> <!>",1),vc=S("<!> Run",1),gc=S("<!> Restart",1),hc=S("<!> Stop",1),pc=S("<!> Kill",1),mc=S("<!> Clean",1),_c=S('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),bc=S('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function xc(t,r){Me(r,!0);function a(){return[...jt()]}async function n(){const v=a();if(!v.length)return;const q=await Xs(v);if(q)try{await On({cases:v,n:q.n,nt:q.nt,maxParallel:q.maxParallel}),r.onRefresh()}catch(W){await We(`Run failed: ${W instanceof Error?W.message:W}`,"Error")}}async function s(){const v=a();if(!v.length)return;const q=await Ys(v);if(q)try{await On({cases:v,n:q.n,nt:q.nt,maxParallel:q.maxParallel,restart:!0,restartMode:q.restartMode,restartValue:q.restartValue}),r.onRefresh()}catch(W){await We(`Restart failed: ${W instanceof Error?W.message:W}`,"Error")}}async function i(){const v=a();if(!(!v.length||!await Dn(`Kill ${v.length} case${v.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await mi(v),r.onRefresh()}catch(W){await We(`Kill failed: ${W instanceof Error?W.message:W}`,"Error")}}async function o(){const v=a();if(!(!v.length||!await Dn(`Stop ${v.length} case${v.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await kr({cases:v,action:"stop"}),r.onRefresh(),Cr(`Stop requested for ${v.length} case${v.length>1?"s":""} — will checkpoint and exit`)}catch(W){await We(`Stop failed: ${W instanceof Error?W.message:W}`,"Error")}}async function l(){const v=a();if(v.length)try{await kr({cases:v,action:"checkpoint"}),r.onRefresh(),Cr(`Checkpoint requested for ${v.length} case${v.length>1?"s":""}`)}catch(q){await We(`Checkpoint failed: ${q instanceof Error?q.message:q}`,"Error")}}async function d(){const v=a();if(!v.length)return;const q=await hn("Extend by how many additional time steps?","500","Extend Run");if(q===null)return;const W=parseInt(q,10);if(!Number.isFinite(W)||W<=0){await We("Enter a positive integer number of time steps.","Error");return}try{await kr({cases:v,action:"extend",value:W}),r.onRefresh(),Cr(`Extended ${v.length} case${v.length>1?"s":""} by ${W} time steps`)}catch(de){await We(`Extend failed: ${de instanceof Error?de.message:de}`,"Error")}}async function b(){const v=a();if(v.length)try{await kr({cases:v,action:"flush"}),Cr(`Flush requested for ${v.length} case${v.length>1?"s":""}`)}catch(q){await We(`Flush failed: ${q instanceof Error?q.message:q}`,"Error")}}async function x(){const v=a();if(!v.length)return;const q=await Qs(v);if(q)try{await _i({cases:v,keepLast:q.keepLast,keepResu:q.keepResu,deleteResu:q.deleteResu,pruneResu:!0}),r.onRefresh(),Wi()}catch(W){await We(`Cleanup failed: ${W instanceof Error?W.message:W}`,"Error")}}function A(){const v=Rr();v.length>0&&v.every(W=>jt().has(W))?Gn():Kn(v)}function m(v){an(v)}let N=z(ie(Jt("status")));Re(()=>{er("status",e(N))}),Tl(!0);let T=j(()=>{const v=Sr();return v.size>0&&[...v].some(q=>q==="PREPARED"||q==="DONE"||q==="FAILED")}),g=j(()=>{if(!lr("restart"))return!1;const v=Sr();return v.size>0&&[...v].some(q=>q==="DONE"||q==="FAILED")&&Xn()}),c=j(()=>{const v=Sr();return v.size>0&&v.has("RUNNING")}),w=j(()=>{if(!lr("control"))return!1;const v=Sr();return v.size>0&&v.has("RUNNING")});const E=[{label:"Extend",icon:Uo,onClick:d,action:"extend"},{label:"Checkpoint",icon:Xo,onClick:l,action:"checkpoint"},{label:"Flush",icon:Ho,onClick:b,action:"flush"}];let h=j(()=>E.filter(v=>nl(v.action)).map(v=>({label:v.label,icon:v.icon,onClick:v.onClick,disabled:!e(w)}))),y=j(Xn),C=z(ie($l())),_=null;function M(){_&&clearTimeout(_),_=setTimeout(()=>{Al(e(C))},200)}Re(()=>Ll(e(N)));let F=z(!1),L=z(0),B=z(0),I=z(ie([])),O=z("");function V(v,q,W,de){f(I,jt().has(v)?[...jt()]:[v],!0),f(O,de,!0),f(L,q,!0),f(B,W,!0),f(F,!0)}function G(){f(F,!1)}function J(v){const q=Rr();if(q.length){if(v.key==="Escape"){Gn(),G();return}if((v.ctrlKey||v.metaKey)&&v.key==="a"){v.preventDefault(),Kn(q);return}if(v.key==="ArrowDown"||v.key==="ArrowUp"){v.preventDefault();const W=v.key==="ArrowDown"?1:-1,de=Un(),X=q.indexOf(de),Z=Math.max(0,Math.min(q.length-1,X+W)),oe=q[Z];v.shiftKey?sn(nn()||q[0],oe,q):Sa(oe),Ml(oe);return}if(v.key===" "){v.preventDefault();const W=Un();W&&(v.shiftKey?sn(nn()||W,W,Rr()):an(W))}}}var se=bc();tt("click",ot,G),tt("scroll",ot,G);var R=K(se),$=k(R);Ot($,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:q=>{var W=fc(),de=K(W);{let oe=j(Ki);tr(de,{name:"status",get intervalMs(){return e(oe)},get onRefresh(){return r.onRefresh},get checked(){return e(N)},set checked(ae){f(N,ae,!0)}})}var X=P(de,2);{var Z=oe=>{Pe(oe,{variant:"primary",onclick:()=>r.onRefresh(),children:(ae,pe)=>{var me=dc(),re=K(me);Te(re,{get icon(){return Zt}}),ke(),u(ae,me)},$$slots:{default:!0}})};Q(X,oe=>{e(N)||oe(Z)})}u(q,W)},children:(q,W)=>{var de=_c(),X=K(de),Z=k(X),oe=k(Z);Xe(oe);var ae=P(oe,2);Wl(ae,{}),p(Z);var pe=P(Z,2),me=k(pe),re=k(me);p(me);var _e=P(me,2);{let U=j(()=>!e(T));Pe(_e,{variant:"run",size:"sm",onclick:n,get disabled(){return e(U)},children:(te,le)=>{var fe=vc(),xe=K(fe);Te(xe,{get icon(){return _a}}),ke(),u(te,fe)},$$slots:{default:!0}})}var ye=P(_e,2);{var Ee=U=>{{let te=j(()=>!e(g));Pe(U,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(te)},children:(le,fe)=>{var xe=gc(),ve=K(xe);Te(ve,{get icon(){return Wo}}),ke(),u(le,xe)},$$slots:{default:!0}})}},ge=j(()=>lr("restart"));Q(ye,U=>{e(ge)&&U(Ee)})}var Fe=P(ye,2);{var Ie=U=>{{let te=j(()=>!e(w));Pe(U,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(te)},children:(le,fe)=>{var xe=hc(),ve=K(xe);Te(ve,{get icon(){return Io}}),ke(),u(le,xe)},$$slots:{default:!0}})}},Qe=j(()=>lr("control"));Q(Fe,U=>{e(Qe)&&U(Ie)})}var Ve=P(Fe,2);{var Se=U=>{xl(U,{get items(){return e(h)}})};Q(Ve,U=>{e(h).length>0&&U(Se)})}var $e=P(Ve,2);{let U=j(()=>!e(c));Pe($e,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(U)},children:(te,le)=>{var fe=pc(),xe=K(fe);Te(xe,{get icon(){return Oo}}),ke(),u(te,fe)},$$slots:{default:!0}})}var Oe=P($e,2);{let U=j(()=>!e(y));Pe(Oe,{variant:"secondary",size:"sm",onclick:x,get disabled(){return e(U)},children:(te,le)=>{var fe=mc(),xe=K(fe);Te(xe,{get icon(){return Qo}}),ke(),u(te,fe)},$$slots:{default:!0}})}p(pe),p(X);var Y=P(X,2);{let U=j(Pa);lc(Y,{get rows(){return e(U)},onContextMenu:V,onToggleAll:A,onToggleRow:m})}ee(U=>ne(re,`${U??""} selected`),[()=>jt().size]),ce("input",oe,M),et(oe,()=>e(C),U=>f(C,U)),u(q,de)},$$slots:{actions:!0,default:!0}}),p(R);var H=P(R,2);{var D=v=>{uc(v,{get cases(){return e(I)},get x(){return e(L)},get y(){return e(B)},get currentValue(){return e(O)},onClose:G})};Q(H,v=>{e(F)&&v(D)})}ce("keydown",R,J),u(t,se),Ae()}Ge(["keydown","input"]);var yc=S('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Xt(t,r){var a=yc(),n=k(a);ft(n,()=>r.children),p(a),u(t,a)}function Cn(t){return t.map(r=>({value:r,label:r}))}var wc=S('<input type="number" step="any" class="w-[110px]"/>'),kc=S("<!> <!> <!> <!> <!> <!>",1);function Sn(t,r){Me(r,!0);let a=he(r,"columnLabel",3,"Columns"),n=he(r,"xMinLabel",3,"Iter min"),s=j(()=>Cn(r.allCases)),i=j(()=>r.columns.map(d=>({value:d,label:d}))),o=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Xt(t,{children:(d,b)=>{var x=kc(),A=K(x);Ne(A,{text:"Cases",children:(y,C)=>{qt(y,{class:"w-[160px]",get options(){return e(s)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var m=P(A,2);{var N=y=>{var C=be(),_=K(C);ft(_,()=>r.middleSlot),u(y,C)};Q(m,y=>{r.middleSlot&&y(N)})}var T=P(m,2);Ne(T,{get text(){return a()},children:(y,C)=>{qt(y,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var g=P(T,2);Ne(g,{text:"Start from",children:(y,C)=>{it(y,{class:"w-[140px]",get options(){return o},get value(){return r.startFrom},onchange:_=>r.onStartFromChange(_)})}});var c=P(g,2);{var w=y=>{Ne(y,{get text(){return n()},children:(C,_)=>{var M=wc();Xe(M),ee(()=>vn(M,r.xMin)),ce("input",M,l),u(C,M)}})};Q(c,y=>{r.startFrom==="custom"&&y(w)})}var E=P(c,2);{var h=y=>{var C=be(),_=K(C);ft(_,()=>r.extraSlot),u(y,C)};Q(E,y=>{r.extraSlot&&y(h)})}u(d,x)}}),Ae()}Ge(["input"]);var Cc=S('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),Sc=S('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Yt(t,r){let a=he(r,"emptyMessage",3,"");var n=Sc(),s=k(n);{var i=l=>{var d=be(),b=K(d);zr(b,()=>r.svgHtml),u(l,d)},o=l=>{var d=Cc(),b=k(d),x=k(b,!0);p(b),p(d),ee(()=>ne(x,a()||"No data to display.")),u(l,d)};Q(s,l=>{r.svgHtml?l(i):l(o,-1)})}p(n),ee(()=>we(n,"id",r.id)),u(t,n)}async function $n(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:s,height:i}=$c(n),o=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=s*o,l.height=i*o;const d=l.getContext("2d");if(!d)return;d.scale(o,o);const b=new XMLSerializer().serializeToString(n),x=new Blob([b],{type:"image/svg+xml;charset=utf-8"}),A=URL.createObjectURL(x),m=new Image;m.width=s,m.height=i,await new Promise((T,g)=>{m.onload=()=>{d.drawImage(m,0,0,s,i),URL.revokeObjectURL(A),T()},m.onerror=g,m.src=A});const N=await new Promise(T=>l.toBlob(T,"image/png"));N&&await Ra(N,Pc(r))}function br(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,s=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Ec(`${t}_${n}_${s}.${a}`)}async function Ea(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Ra(a,r)}function $c(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Ra(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(s){if((s==null?void 0:s.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function Pc(t){return t.endsWith(".png")?t:`${t}.png`}function Ec(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Na=z(ie([])),Ma=z(ie([])),Aa=z(ie([])),Ta=z("zero"),La=z(0),Fa=z(""),Rc=z(!0);function Nc(){return{selectedCases:e(Na),columns:e(Ma),selectedColumns:e(Aa),startFrom:e(Ta),iterMin:e(La),svgHtml:e(Fa),autoRefresh:e(Rc)}}function Yn(t){f(Na,t,!0)}function Mc(t){f(Ma,t,!0)}function Xr(t){f(Aa,t,!0)}function Ac(t){f(Ta,t,!0)}function Tc(t){f(La,t,!0)}function $r(t){f(Fa,t,!0)}var Lc=S("<!> Refresh",1),Fc=S("<!> <!>",1),Dc=S("<!> Download as PNG",1),zc=S('<div class="self-end ml-auto"><!></div>'),Ic=S('<!> <div class="flex justify-center"><!></div>',1),Oc=S('<div class="flex justify-center"><!></div>'),Hc=S('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),jc=S("<!> <!>",1);function Vc(t,r){Me(r,!0);let a=j(Nc),n=z("");const s=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function o(){if(e(a).selectedCases.length)try{const g=await ii(e(a).selectedCases);f(n,"");const c=g.filter(w=>!s.has(w.toLowerCase().replace(/\s+/g,"_")));if(Mc(c),c.length===0){Xr([]),$r("");return}if(e(a).selectedColumns.length===0){const w=c.filter(E=>i.some(h=>E.toLowerCase().includes(h)));Xr(w.length>0?w:[c[0]])}}catch(g){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",g)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await o(),!e(a).selectedColumns.length)))try{let g=0,c=!0;if(e(a).startFrom==="restart"){const E=await wa(e(a).selectedCases),h=Object.values(E.origins).map(y=>y.iteration).filter(y=>y!==void 0&&Number.isFinite(y));g=h.length>0?Math.min(...h):0}else e(a).startFrom==="custom"&&(g=e(a).iterMin);const w=await li(e(a).selectedCases,e(a).selectedColumns,{xMin:g,includeHistory:c});f(n,""),w&&$r(w)}catch(g){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",g)}}function d(g){if(Yn(g),g.length===0){$r("");return}o(),l()}function b(g){if(Xr(g),g.length===0){$r("");return}l()}function x(g){Ac(g),l()}function A(g){Tc(g),l()}let m=z(ie(Jt("plot")));Re(()=>{er("plot",e(m))}),Re(()=>{e(m)?pr("residualPlot",l,jn()):vt("residualPlot")});let N=!1;Re(()=>{r.allCases.length>0&&!N&&(N=!0,Yn([...r.allCases]),o().then(()=>l()))});const T=mr(()=>{N&&o().then(()=>l())});fr(()=>{vt("residualPlot"),T()}),Ot(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var w=Fc(),E=K(w);{let C=j(jn);tr(E,{name:"residualPlot",get intervalMs(){return e(C)},onRefresh:l,get checked(){return e(m)},set checked(_){f(m,_,!0)}})}var h=P(E,2);{var y=C=>{Pe(C,{variant:"primary",onclick:l,children:(_,M)=>{var F=Lc(),L=K(F);Te(L,{get icon(){return Zt}}),ke(),u(_,F)},$$slots:{default:!0}})};Q(h,C=>{e(m)||C(y)})}u(c,w)},children:(c,w)=>{var E=jc(),h=K(E);{var y=F=>{const L=G=>{var J=zc(),se=k(J);{let R=j(()=>!e(a).svgHtml);Pe(se,{variant:"secondary",size:"sm",onclick:()=>$n("plot-holder",br("residuals",e(a).selectedCases)),get disabled(){return e(R)},children:($,H)=>{var D=Dc(),v=K(D);Te(v,{get icon(){return hr}}),ke(),u($,D)},$$slots:{default:!0}})}p(J),u(G,J)};var B=Ic(),I=K(B);Sn(I,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:b,get startFrom(){return e(a).startFrom},onStartFromChange:x,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:A,get extraSlot(){return L}});var O=P(I,2),V=k(O);{let G=j(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Yt(V,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(G)}})}p(O),u(F,B)},C=F=>{var L=Oc(),B=k(L);Yt(B,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),p(L),u(F,L)};Q(h,F=>{e(a).columns.length>0?F(y):F(C,-1)})}var _=P(h,2);{var M=F=>{var L=Hc(),B=k(L,!0);p(L),ee(()=>ne(B,e(n))),u(F,L)};Q(_,F=>{e(n)&&F(M)})}u(c,E)},$$slots:{actions:!0,default:!0}}),Ae()}function Da(t){const{scope:r,getState:a,setState:n,setHasData:s,getAxis:i}=t;async function o(){const m=a();if(m.selectedCases.length)try{let N=await Jr(m.selectedCases,r);if(t.filterFiles&&(N=t.filterFiles(N)),n({files:N}),s(N.length>0),N.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!m.file||!N.includes(m.file))&&(n({file:N[0]}),await l())}catch(N){console.error(`Failed to load ${r} files:`,N)}}async function l(){const m=a();if(!(!m.selectedCases.length||!m.file))try{const N=await vi(m.selectedCases,[m.file]),T=t.filterColumns?t.filterColumns(N):N;t.onColumnsLoaded?t.onColumnsLoaded(N):n({columns:T});const g=a();if(g.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}g.selectedColumns.length===0&&n({selectedColumns:[g.columns[0]]})}catch(N){console.error(`Failed to load ${r} columns:`,N)}}async function d(){let m=a();if(m.selectedCases.length){if(await o(),m=a(),!m.file){n({positionText:"",svgHtml:""});return}if((m.columns.length===0||m.selectedColumns.length===0)&&(await l(),m=a(),!m.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let N;const T=a();if(T.startFrom==="restart"){const c=await wa(T.selectedCases),w=i().toLowerCase(),E=w==="t"||w==="time"?"time":"iteration",h=Object.values(c.origins).map(y=>y[E]).filter(y=>y!==void 0&&Number.isFinite(y));N=h.length>0?Math.min(...h):void 0}else T.startFrom==="custom"&&(N=T.xMin);const g=await hi({cases:T.selectedCases,probes:[T.file],columns:T.selectedColumns,axis:i(),timeMin:typeof N=="number"?N:void 0,xMin:N,includeHistory:!0});g&&n({svgHtml:g})}catch(N){console.error(`Failed to load ${r} plot:`,N)}}}async function b(m){if(n({selectedCases:m}),m.length===0){n({svgHtml:""});return}await o(),r==="probes"&&await d()}function x(m){if(n({selectedColumns:m}),m.length===0){n({svgHtml:""});return}d()}async function A(m){n({file:m}),await l(),await d()}return{loadFiles:o,loadColumns:l,loadPlot:d,handleCasesChange:b,handleColumnsChange:x,handleFileChange:A}}function za(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let Vt=z("time"),on=z(ie(za())),ln=z(ie({...za(),axis:""})),Uc=z(!0),Lr=z(!1),Fr=z(!1);function Bc(){return e(Vt)}function qc(t){f(Vt,t,!0)}function Kc(){return e(Lr)}function cn(t){f(Lr,t,!0)}function Gc(){return e(Fr)}function un(t){f(Fr,t,!0)}function Wc(){e(Vt)==="time"&&!e(Lr)&&e(Fr)?f(Vt,"profile"):e(Vt)==="profile"&&!e(Fr)&&e(Lr)&&f(Vt,"time")}function Qn(){return e(on)}function Yr(){return e(ln)}function wt(t){f(on,{...e(on),...t},!0)}function At(t){f(ln,{...e(ln),...t},!0)}function Xc(){return e(Uc)}var Yc=S("<!> Download as PNG",1),Qc=S('<div class="self-end ml-auto"><!></div>'),Zc=S("<div> </div>"),Jc=S('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),eu=S('<!>  <!> <div class="flex justify-center"><!></div>',1),tu=S('<div class="flex justify-center"><!></div>');function ru(t,r){Me(r,!0);let a=he(r,"onRefresh",15),n=j(Qn);const s=new Set(["time","t","iteration","iter"]),i=Da({scope:"probes",getState:Qn,setState:wt,setHasData:cn,filterFiles:g=>g.filter(c=>{const w=c.replace(/\.csv$/i,"").toLowerCase();return w!=="coords"&&!w.includes("coordinates")}),filterColumns:g=>g.filter(c=>!s.has(c.toLowerCase())),onColumnsLoaded:g=>{const c=g.filter(w=>!s.has(w.toLowerCase()));wt({columns:c}),o()},getAxis:()=>"time"});async function o(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const g=[];for(const C of e(n).selectedColumns){const _=await gi(e(n).selectedCases[0],e(n).file,[C]);_.found&&g.push({col:C,x:_.x,y:_.y,z:_.z})}if(!g.length){wt({positionText:""});return}const c=C=>{let _=0;for(const M of C){if(M===void 0)continue;const F=String(M),L=F.indexOf(".");L>=0&&(_=Math.max(_,F.length-L-1))}return _},w=c(g.map(C=>C.x)),E=c(g.map(C=>C.y)),h=c(g.map(C=>C.z)),y=g.map(C=>{const _=[];return C.x!==void 0&&_.push(`x=${C.x.toFixed(w)}`),C.y!==void 0&&_.push(`y=${C.y.toFixed(E)}`),C.z!==void 0&&_.push(`z=${C.z.toFixed(h)}`),`Probe position [${C.col}] : ${_.join(" · ")}`});wt({positionText:y.join(`
`)})}catch{wt({positionText:""})}}function l(g){i.handleColumnsChange(g),g.length>0&&o()}let d=j(()=>e(n).files.map(g=>({value:g,label:g.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),b=!1;Re(()=>{r.allCases.length>0&&!b&&(b=!0,wt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Re(()=>{a(i.loadPlot)});let x=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var A=be(),m=K(A);{var N=g=>{const c=F=>{Ne(F,{text:"Quantity",children:(L,B)=>{it(L,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},w=F=>{var L=Qc(),B=k(L);{let I=j(()=>!e(n).svgHtml);Pe(B,{variant:"secondary",size:"sm",onclick:()=>$n("probe-plot-holder",br("probe",e(n).selectedCases)),get disabled(){return e(I)},children:(O,V)=>{var G=Yc(),J=K(G);Te(J,{get icon(){return hr}}),ke(),u(O,G)},$$slots:{default:!0}})}p(L),u(F,L)};var E=eu(),h=K(E);Sn(h,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:F=>{wt({startFrom:F}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:F=>{wt({xMin:F}),i.loadPlot()},get extraSlot(){return w}});var y=P(h,2);{var C=F=>{var L=Jc();Ye(L,21,()=>e(n).positionText.split(`
`).sort(),fn,(B,I)=>{var O=Zc(),V=k(O,!0);p(O),ee(()=>ne(V,e(I))),u(B,O)}),p(L),u(F,L)};Q(y,F=>{e(n).positionText&&F(C)})}var _=P(y,2),M=k(_);Yt(M,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(x)}}),p(_),u(g,E)},T=g=>{var c=tu(),w=k(c);Yt(w,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),p(c),u(g,c)};Q(m,g=>{e(n).files.length>0?g(N):g(T,-1)})}u(t,A),Ae()}var nu=S("<!> <!>",1),au=S("<!> Download as PNG",1),su=S('<div class="self-end ml-auto"><!></div>'),ou=S('<!>  <div class="flex justify-center"><!></div>',1),iu=S('<div class="flex justify-center"><!></div>');function lu(t,r){Me(r,!0);let a=he(r,"onRefresh",15),n=j(Yr);const s=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const w=c.map(E=>E.toLowerCase());for(const E of s){const h=w.indexOf(E);if(h>=0)return c[h]}return c[0]??""}const o=Da({scope:"profiles",getState:Yr,setState:At,setHasData:un,onColumnsLoaded:c=>{const w=e(n).axis||i(c),E=c.filter(h=>h!==w).toSorted((h,y)=>h.localeCompare(y));At({columns:E,axis:w,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:E.length?[E[0]]:[]})},getAxis:()=>Yr().axis});function l(c){const w=e(n).axis;At({axis:c});const h=[...e(n).columns,...w?[w]:[]].filter(y=>y!==c).toSorted((y,C)=>y.localeCompare(C));At({columns:h}),o.loadPlot()}let d=j(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),b=j(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,w)=>c.localeCompare(w)).map(c=>({value:c,label:c}))),x=!1;Re(()=>{r.allCases.length>0&&!x&&(x=!0,At({selectedCases:[...r.allCases]}),o.loadFiles().then(()=>o.loadPlot()))}),Re(()=>{a(o.loadPlot)});let A=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var m=be(),N=K(m);{var T=c=>{const w=M=>{var F=nu(),L=K(F);Ne(L,{text:"Profile",children:(I,O)=>{it(I,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return o.handleFileChange}})}});var B=P(L,2);Ne(B,{text:"X axis",children:(I,O)=>{it(I,{class:"w-[140px]",get options(){return e(b)},get value(){return e(n).axis},onchange:l})}}),u(M,F)},E=M=>{var F=su(),L=k(F);{let B=j(()=>!e(n).svgHtml);Pe(L,{variant:"secondary",size:"sm",onclick:()=>$n("profile-plot-holder",br("profile",e(n).selectedCases)),get disabled(){return e(B)},children:(I,O)=>{var V=au(),G=K(V);Te(G,{get icon(){return hr}}),ke(),u(I,V)},$$slots:{default:!0}})}p(F),u(M,F)};var h=ou(),y=K(h);Sn(y,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return o.handleCasesChange},get middleSlot(){return w},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return o.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:M=>{At({startFrom:M}),o.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:M=>{At({xMin:M}),o.loadPlot()},get extraSlot(){return E}});var C=P(y,2),_=k(C);Yt(_,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(A)}}),p(C),u(c,h)},g=c=>{var w=iu(),E=k(w);Yt(E,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),p(w),u(c,w)};Q(N,c=>{e(n).files.length>0?c(T):c(g,-1)})}u(t,m),Ae()}var cu=S('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),uu=S("<!> Refresh",1),du=S("<!> <!>",1);function fu(t,r){Me(r,!0);let a=j(Bc),n=j(Xc),s=j(Kc),i=j(Gc),o=z(ie(Jt("probe")));Re(()=>{er("probe",e(o))});let l=z(void 0);function d(){var T;(T=e(l))==null||T()}async function b(){if(r.allCases.length){try{const g=(await Jr(r.allCases,"probes")).filter(c=>{const w=c.replace(/\.csv$/i,"").toLowerCase();return w!=="coords"&&!w.includes("coordinates")});cn(g.length>0)}catch{cn(!1)}try{const T=await Jr(r.allCases,"profiles");un(T.length>0)}catch{un(!1)}}}Re(()=>{r.allCases.length>0&&b()}),mr(()=>{b(),d()}),Re(()=>{e(s),e(i),Wc()});function x(T){T==="time"&&!e(s)||T==="profile"&&!e(i)||qc(T)}var A=be(),m=K(A);{var N=T=>{{const g=w=>{var E=cu(),h=P(k(E),2),y=k(h),C=P(y,2);p(h),p(E),ee(()=>{Ce(y,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(s)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),y.disabled=!e(s),we(y,"title",e(s)?"":"No probe data available. Run a simulation first."),Ce(C,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),C.disabled=!e(i),we(C,"title",e(i)?"":"No profile data available. Run a simulation first.")}),ce("click",y,()=>x("time")),ce("click",C,()=>x("profile")),u(w,E)};Ot(T,{wide:!0,titleSlot:g,tabs:g,actions:w=>{var E=du(),h=K(E);{let _=j(()=>e(a)==="time"?"probePlot":"profilePlot"),M=j(Gi);tr(h,{get name(){return e(_)},get intervalMs(){return e(M)},onRefresh:d,get checked(){return e(o)},set checked(F){f(o,F,!0)}})}var y=P(h,2);{var C=_=>{Pe(_,{variant:"primary",onclick:d,children:(M,F)=>{var L=uu(),B=K(L);Te(B,{get icon(){return Zt}}),ke(),u(M,L)},$$slots:{default:!0}})};Q(y,_=>{e(o)||_(C)})}u(w,E)},children:(w,E)=>{var h=be(),y=K(h);{var C=M=>{ru(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(F){f(l,F,!0)}})},_=M=>{lu(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(F){f(l,F,!0)}})};Q(y,M=>{e(a)==="time"?M(C):M(_,-1)})}u(w,h)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Q(m,T=>{e(n)&&T(N)})}u(t,A),Ae()}Ge(["click"]);var vu=S("<!> Refresh",1),gu=S("<!> <!>",1),hu=S("<!> Download as CSV",1),pu=S('<!> <div class="self-end ml-auto"><!></div>',1),mu=S("<th> </th>"),_u=S('<td class="whitespace-nowrap"> </td>'),bu=S('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),xu=S('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),yu=S('<p class="text-sm text-muted italic text-center py-8"><!></p>'),wu=S("<!> <!>",1);function ku(t,r){Me(r,!0);let a=z(ie([])),n=z(ie([])),s=z(!1),i=z(!1),o=z(ie(Jt("perf")));Re(()=>{er("perf",e(o))});const l=5e3;let b=z(ie([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),x=j(()=>r.allCases.map(E=>({value:E,label:E}))),A=j(()=>e(n).length>0);async function m(){var E;if(e(a).length){f(i,!0);try{const h=await In(e(a));(E=h.columns)!=null&&E.length&&f(b,h.columns,!0),f(n,h.records,!0),e(n).length>0&&f(s,!0)}catch(h){console.error("Failed to load perf:",h)}f(i,!1)}}function N(E){if(f(a,E,!0),E.length===0){f(n,[],!0);return}m()}function T(E,h){if(h==null||h==="")return"-";if(E==="text")return h;const y=Number(h);return Number.isFinite(y)?E==="int"?String(Math.round(y)):y.toFixed(3):h}async function g(){if(!e(n).length)return;const E=["case_id",...e(b).map(_=>_.key)],h=e(n).map(_=>[_.case_id,...e(b).map(M=>_[M.key]??"")].join(",")),y=[E.join(","),...h].join(`
`),C=br("timing_snapshot",e(a),"csv");await Ea(y,C)}let c=!1;Re(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),In(r.allCases).then(E=>{var h;(h=E.columns)!=null&&h.length&&f(b,E.columns,!0),f(s,E.records.length>0),f(n,E.records,!0)}).catch(()=>{}))}),Re(()=>{e(o)?pr("perf",m,l):vt("perf")});const w=mr(()=>{c&&m()});fr(()=>{vt("perf"),w()}),Ot(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:h=>{var y=gu(),C=K(y);tr(C,{name:"perf",intervalMs:l,onRefresh:m,get checked(){return e(o)},set checked(F){f(o,F,!0)}});var _=P(C,2);{var M=F=>{Pe(F,{variant:"primary",onclick:m,children:(L,B)=>{var I=vu(),O=K(I);Te(O,{get icon(){return Zt}}),ke(),u(L,I)},$$slots:{default:!0}})};Q(_,F=>{e(o)||F(M)})}u(h,y)},children:(h,y)=>{var C=wu(),_=K(C);{var M=I=>{Xt(I,{children:(O,V)=>{var G=pu(),J=K(G);Ne(J,{text:"Cases",children:($,H)=>{qt($,{class:"w-[160px]",get options(){return e(x)},get selected(){return e(a)},onchange:N,placeholder:"Select cases..."})}});var se=P(J,2),R=k(se);{let $=j(()=>!e(A));Pe(R,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e($)},children:(H,D)=>{var v=hu(),q=K(v);Te(q,{get icon(){return hr}}),ke(),u(H,v)},$$slots:{default:!0}})}p(se),u(O,G)}})};Q(_,I=>{e(s)&&I(M)})}var F=P(_,2);{var L=I=>{var O=xu(),V=k(O),G=k(V),J=k(G),se=P(k(J));Ye(se,17,()=>e(b),$=>$.key,($,H)=>{var D=mu(),v=k(D,!0);p(D),ee(()=>ne(v,e(H).label)),u($,D)}),p(J),p(G);var R=P(G);Ye(R,21,()=>e(n),$=>$.case_id,($,H)=>{var D=bu(),v=k(D),q=k(v,!0);p(v);var W=P(v);Ye(W,17,()=>e(b),de=>de.key,(de,X)=>{var Z=_u(),oe=k(Z,!0);p(Z),ee(ae=>ne(oe,ae),[()=>T(e(X).kind,e(H)[e(X).key])]),u(de,Z)}),p(D),ee(()=>ne(q,e(H).case_id)),u($,D)}),p(R),p(V),p(O),u(I,O)},B=I=>{var O=yu(),V=k(O);{var G=se=>{var R=Ue("Select cases above to view timing information.");u(se,R)},J=se=>{var R=Ue("No performance data available. Please run a simulation first.");u(se,R)};Q(V,se=>{e(s)?se(G):se(J,-1)})}p(O),u(I,O)};Q(F,I=>{e(A)?I(L):I(B,-1)})}u(h,C)},$$slots:{actions:!0,default:!0}}),Ae()}const Cu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Ia(t){return t.replace(/[&<>"']/g,r=>Cu[r]??r)}var Su=S("<div></div>"),$u=S('<pre class="code-box tail-pane"></pre>');function Pu(t,r){Me(r,!0);let a=z(void 0);function n(b){const x=Ia(b);if(!r.searchQuery.trim())return x;try{const A=new RegExp(`(${r.searchQuery})`,"gi");return x.replace(A,'<span class="tail-query-hit">$1</span>')}catch{return x}}function s(b){return b==="error"?"tail-sev-error":b==="warn"?"tail-sev-warn":b==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let o=z(!0);function l(){f(o,i(),!0)}Re(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(o)&&Pt().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=$u();Ye(d,21,()=>r.lines,b=>b.index,(b,x)=>{var A=Su();zr(A,()=>n(e(x).text),!0),p(A),ee(m=>Ce(A,1,`tail-line ${m??""} ${e(x).isNew?"tail-new":""}`),[()=>s(e(x).severity)]),u(b,A)}),p(d),rt(d,b=>f(a,b),()=>e(a)),tt("scroll",d,l),u(t,d),Ae()}const Eu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,Ru=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function Nu(t){return Eu.test(t)?"error":Ru.test(t)?"warn":"none"}function Mu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Au=S("<!> Refresh",1),Tu=S("<!> <!>",1),Lu=S('<input type="number" min="1" class="w-[70px]"/>'),Fu=S('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Du=S("<!> <!> <!> <!> <!>",1),zu=It('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Iu=It('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Ou=It('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Hu=S("<!> Resume",1),ju=S("<!> Pause",1),Vu=S('<span class="text-xs text-muted">Case not running</span>'),Uu=S('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Bu=S('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),qu=S('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Ku=S("<!> <!> <!>",1);function Gu(t,r){Me(r,!0);const a=80;let n=z(""),s=z(""),i=z(!1),o=z(ie([])),l=z(a),d=z(ie([])),b=z(ie(new Set)),x=z(!1),A=z(ie(Jt("tail")));Re(()=>{er("tail",e(A))});let m=z(!0),N=z("all"),T=z(""),g=z(""),c=z(void 0),w=j(()=>Cn(r.allCases)),E=j(()=>e(o).map(R=>{const $=R.split("/").pop()??R;return{value:R,label:$}})),h=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],y=j(()=>e(o).length>0),C=j(()=>yn().some(R=>{var $;return R.case_id===e(n)&&(($=R.status)==null?void 0:$.toUpperCase())==="RUNNING"})),_=j(()=>{var R;return((R=St())==null?void 0:R.tail_files)??["csauto.stdout","csauto.stderr"]});function M(R){const $=R.split("/").pop()??R,H=e(_).indexOf($);return H===-1?99:H}async function F(){if(e(n))try{const H=(await di(e(n))).filter(D=>{const v=D.split("/").pop()??D;return D.endsWith(".log")||D.endsWith("/summary")||e(_).includes(v)}).sort((D,v)=>M(D)-M(v));if(f(o,H,!0),H.length>0){const D=H[0];!e(s)||!H.includes(e(s))?(f(s,D,!0),f(i,!1)):!e(i)&&M(D)<M(e(s))&&f(s,D,!0)}e(o).length===0&&(f(s,""),f(d,[],!0))}catch(R){console.error("Failed to load tail files:",R),f(o,[],!0)}}async function L(R=!1){if(e(n)&&!(e(x)&&!R)&&(await F(),!!e(s)))try{const $=await ui(e(n),e(s),e(l));f(g,"");const H=$.split(`
`),D=H.length>0&&H[H.length-1]===""?H.slice(0,-1):H;if(e(d).length>0){const v=B(e(d),D),q=new Set;for(let W=v;W<D.length;W++)q.add(W);f(b,q,!0)}f(d,D,!0)}catch($){f(g,"Failed to load log tail"),console.error("Failed to load tail:",$)}}function B(R,$){const H=Math.min(R.length,$.length);for(let D=0;D<H;D++){let v=!0;for(let q=0;q<Math.min(R.length-D,$.length);q++)if(R[D+q]!==$[q]){v=!1;break}if(v)return R.length-D}return 0}let I=j(()=>{let R=e(d).map(($,H)=>({text:$,index:H,severity:Nu($),isNew:e(b).has(H)}));if(e(N)!=="all"&&(R=R.filter($=>Mu($.severity,e(N)))),e(T).trim())try{const $=new RegExp(e(T),"i");R=R.filter(H=>$.test(H.text))}catch{}return R});function O(R){f(n,R,!0),f(s,""),f(i,!1),f(d,[],!0),F().then(()=>L(!0))}function V(R){f(s,R,!0),f(i,!0),f(d,[],!0),L(!0)}function G(){f(x,!e(x)),e(x)||L(!0)}function J(R){(R.ctrlKey||R.metaKey)&&R.key==="f"&&e(c)&&(R.preventDefault(),e(c).focus())}Re(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),F().then(()=>L(!0)))}),Re(()=>{e(A)&&!e(x)&&e(n)?pr("tail",()=>L(!1),Hn()):vt("tail")});const se=mr(()=>{e(n)&&F().then(()=>L(!0))});fr(()=>{vt("tail"),se()}),tt("keydown",ot,J),Ot(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:$=>{var H=Tu(),D=K(H);{let W=j(Hn);tr(D,{name:"tail",get intervalMs(){return e(W)},onRefresh:()=>L(!1),get checked(){return e(A)},set checked(de){f(A,de,!0)}})}var v=P(D,2);{var q=W=>{Pe(W,{variant:"primary",onclick:()=>L(!0),children:(de,X)=>{var Z=Au(),oe=K(Z);Te(oe,{get icon(){return Zt}}),ke(),u(de,Z)},$$slots:{default:!0}})};Q(v,W=>{e(A)||W(q)})}u($,H)},children:($,H)=>{var D=Ku(),v=K(D);{var q=ae=>{Xt(ae,{children:(pe,me)=>{var re=Du(),_e=K(re);Ne(_e,{text:"Case",children:(Ie,Qe)=>{it(Ie,{class:"w-[130px]",get options(){return e(w)},get value(){return e(n)},onchange:O})}});var ye=P(_e,2);Ne(ye,{text:"File",children:(Ie,Qe)=>{it(Ie,{class:"w-[150px]",get options(){return e(E)},get value(){return e(s)},onchange:V})}});var Ee=P(ye,2);Ne(Ee,{text:"Lines",children:(Ie,Qe)=>{var Ve=Lu();Xe(Ve),ce("change",Ve,()=>L(!0)),et(Ve,()=>e(l),Se=>f(l,Se)),u(Ie,Ve)}});var ge=P(Ee,2);Ne(ge,{text:"Filter",children:(Ie,Qe)=>{var Ve=Fu();Xe(Ve),rt(Ve,Se=>f(c,Se),()=>e(c)),et(Ve,()=>e(T),Se=>f(T,Se)),u(Ie,Ve)}});var Fe=P(ge,2);Ne(Fe,{text:"Severity",children:(Ie,Qe)=>{it(Ie,{class:"w-[90px]",get options(){return h},get value(){return e(N)},onchange:Ve=>f(N,Ve,!0)})}}),u(pe,re)}})};Q(v,ae=>{e(y)&&ae(q)})}var W=P(v,2);{var de=ae=>{var pe=Uu(),me=K(pe);Pu(me,{get lines(){return e(I)},get searchQuery(){return e(T)},get autoScroll(){return e(m)}});var re=P(me,2),_e=k(re),ye=k(_e);{var Ee=Y=>{var U=zu();u(Y,U)},ge=Y=>{var U=Iu();u(Y,U)},Fe=Y=>{var U=Ou();u(Y,U)};Q(ye,Y=>{e(x)?Y(Ee):e(C)?Y(ge,1):Y(Fe,-1)})}var Ie=P(ye);p(_e);var Qe=P(_e,2);{var Ve=Y=>{Pe(Y,{variant:"secondary",size:"sm",onclick:G,children:(U,te)=>{var le=be(),fe=K(le);{var xe=ue=>{var ze=Hu(),De=K(ze);Te(De,{get icon(){return _a}}),ke(),u(ue,ze)},ve=ue=>{var ze=ju(),De=K(ze);Te(De,{get icon(){return Bo}}),ke(),u(ue,ze)};Q(fe,ue=>{e(x)?ue(xe):ue(ve,-1)})}u(U,le)},$$slots:{default:!0}})},Se=Y=>{var U=Vu();u(Y,U)};Q(Qe,Y=>{e(C)?Y(Ve):Y(Se,-1)})}var $e=P(Qe,2),Oe=k($e);zt(Oe,{get checked(){return e(m)},onchange:Y=>f(m,Y,!0),size:14,label:"Auto-scroll",labelFirst:!0}),p($e),p(re),ee(()=>ne(Ie,` ${e(I).length??""} / ${e(d).length??""}`)),u(ae,pe)},X=ae=>{var pe=Bu();u(ae,pe)};Q(W,ae=>{e(d).length>0?ae(de):ae(X,-1)})}var Z=P(W,2);{var oe=ae=>{var pe=qu(),me=k(pe,!0);p(pe),ee(()=>ne(me,e(g))),u(ae,pe)};Q(Z,ae=>{e(g)&&ae(oe)})}u($,D)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["change"]);function Wu(t,r=3){var N,T;const a=t.split(`
`),n=[];let s=0,i=0,o=!1;for(const g of a){if(g.startsWith("===")||g.startsWith("---")||g.startsWith("+++"))continue;const c=g.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){s=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,o=!0;continue}if(o)if(g.startsWith("-"))s++,n.push({type:"del",leftNum:s,rightNum:null,leftContent:g.slice(1),rightContent:""});else if(g.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:g.slice(1)});else{s++,i++;const w=g.startsWith(" ")?g.slice(1):g;n.push({type:"equal",leftNum:s,rightNum:i,leftContent:w,rightContent:w})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const g=[];for(;d<n.length&&n[d].type==="del";)g.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const w=Math.max(g.length,c.length);for(let E=0;E<w;E++){const h=g[E],y=c[E];h&&y?l.push({type:"del",leftNum:h.leftNum,rightNum:y.rightNum,leftContent:h.leftContent,rightContent:y.rightContent}):h?l.push(h):y&&l.push(y)}}else l.push(n[d]),d++;const b=new Set;for(let g=0;g<l.length;g++)if(l[g].type!=="equal")for(let c=Math.max(0,g-r);c<=Math.min(l.length-1,g+r);c++)b.add(c);if(b.size===0)return[];const x=[];let A=-1,m=!1;for(let g=0;g<l.length;g++)if(b.has(g)){A>=0&&g-A>1&&x.push({kind:"separator",skipped:g-A-1});const c=l[g].type!=="equal",w=c&&!m;x.push({kind:"line",row:l[g],hunkStart:w}),m=c,A=g}if(A<l.length-1&&A>=0&&x.push({kind:"separator",skipped:l.length-1-A}),x.length>0&&x[0].kind==="line"){const g=((N=x[0].row)==null?void 0:N.leftNum)??0,c=((T=x[0].row)==null?void 0:T.rightNum)??0,w=Math.max(g,c)-1;w>0&&x.unshift({kind:"separator",skipped:w})}return x}var Xu=S('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),Yu=S('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),Qu=S('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),Zu=S('<span class="text-xs text-muted">No matches</span>'),Ju=S('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),ed=S('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),td=S('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),rd=S('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function nd(t,r){Me(r,!0);let a=he(r,"loading",3,!1),n=z(void 0),s=j(()=>Wu(r.diffText)),i=j(()=>{const Y=[];return e(s).forEach((U,te)=>{U.hunkStart&&Y.push(te)}),Y}),o=j(()=>e(i).length>0),l=j(()=>{var U;const Y=new Array(e(s).length).fill(-1);for(let te=0;te<e(i).length;te++){let le=e(i)[te];for(;le<e(s).length&&e(s)[le].kind==="line"&&((U=e(s)[le].row)==null?void 0:U.type)!=="equal";)Y[le]=te,le++}return Y}),d=z(-1),b="";Re(()=>{r.diffText!==b&&(b=r.diffText,f(d,-1))});let x=j(()=>{if(!r.search.trim())return[];try{const Y=new RegExp(r.search,"i"),U=[];return e(s).forEach((te,le)=>{te.kind==="line"&&te.row&&(Y.test(te.row.leftContent)||Y.test(te.row.rightContent))&&U.push(le)}),U}catch{return[]}}),A=z(-1),m="";Re(()=>{r.search!==m&&(m=r.search,f(A,e(x).length>0?0:-1,!0))});async function N(Y){var le;f(A,Y,!0),await Pt();const U=e(x)[Y],te=(le=e(h))==null?void 0:le.querySelector(`[data-item-idx="${U}"]`);if(te&&e(h)&&e(y)){const fe=e(h).getBoundingClientRect(),ve=te.getBoundingClientRect().top-fe.top+e(h).scrollTop-e(h).clientHeight/3;_=!0,e(h).scrollTop=ve,e(y).scrollTop=ve,requestAnimationFrame(()=>{_=!1})}}function T(){e(A)>0&&N(e(A)-1)}function g(){e(A)<0&&e(x).length>0?N(0):e(A)<e(x).length-1&&N(e(A)+1)}function c(Y,U){const te=Ia(Y);if(!r.search.trim())return te;try{const le=new RegExp(`(${r.search})`,"gi"),fe=U?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return te.replace(le,`<span class="${fe}">$1</span>`)}catch{return te}}function w(Y,U){return Y==="equal"?"":Y==="del"&&U==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":Y==="del"&&U==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":Y==="add"&&U==="left"?"bg-edf-gris-clair":Y==="add"&&U==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function E(Y,U){return Y==="del"&&U==="left"?"rgb(251,237,233)":Y==="del"&&U==="right"?"rgb(238,247,236)":Y==="add"&&U==="left"?"var(--color-edf-gris-clair)":Y==="add"&&U==="right"?"rgb(238,247,236)":"white"}let h=z(void 0),y=z(void 0),C=!1,_=!1;function M(Y){C||_||!e(h)||!e(y)||(C=!0,Y==="left"?(e(y).scrollTop=e(h).scrollTop,e(y).scrollLeft=e(h).scrollLeft):(e(h).scrollTop=e(y).scrollTop,e(h).scrollLeft=e(y).scrollLeft),requestAnimationFrame(()=>{C=!1}))}async function F(Y){var te;f(d,Y,!0),await Pt();const U=(te=e(h))==null?void 0:te.querySelector(`[data-hunk-start="${Y}"]`);if(U&&e(h)&&e(y)){_=!0;const le=e(h).getBoundingClientRect(),xe=U.getBoundingClientRect().top-le.top+e(h).scrollTop-e(h).clientHeight/3;e(h).scrollTop=xe,e(y).scrollTop=xe,requestAnimationFrame(()=>{_=!1})}}function L(){e(d)>0&&F(e(d)-1)}function B(){e(d)<0?F(0):e(d)<e(i).length-1&&F(e(d)+1)}function I(Y){const U=e(l)[Y];U>=0&&f(d,U,!0)}function O(Y){Y.target instanceof HTMLInputElement||(Y.key==="n"&&!Y.shiftKey?(Y.preventDefault(),B()):Y.key==="N"||Y.key==="n"&&Y.shiftKey?(Y.preventDefault(),L()):Y.key==="j"?(Y.preventDefault(),g()):(Y.key==="J"||Y.key==="j"&&Y.shiftKey)&&(Y.preventDefault(),T()))}var V=rd();{const Y=(U,te=ws)=>{var le=be(),fe=K(le);Ye(fe,17,()=>e(s),fn,(xe,ve,ue)=>{const ze=j(()=>e(i).indexOf(ue)),De=j(()=>e(l)[ue]>=0&&e(l)[ue]===e(d)),nt=j(()=>{var lt,Ke;return te()==="left"?(lt=e(ve).row)==null?void 0:lt.leftNum:(Ke=e(ve).row)==null?void 0:Ke.rightNum}),rr=j(()=>{var lt,Ke;return te()==="left"?((lt=e(ve).row)==null?void 0:lt.leftContent)??"":((Ke=e(ve).row)==null?void 0:Ke.rightContent)??""});var xr=be(),Je=K(xr);{var ut=lt=>{var Ke=Xu(),Nt=P(k(Ke),2),Vr=k(Nt);p(Nt),p(Ke),ee(()=>ne(Vr,`... ${e(ve).skipped??""} lines hidden ...`)),u(lt,Ke)},jr=lt=>{var Ke=Yu(),Nt=k(Ke),Vr=k(Nt,!0);p(Nt);var Pn=P(Nt,2);zr(Pn,()=>c(e(rr),e(A)>=0&&e(x)[e(A)]===ue),!0),p(Pn),p(Ke),ee((xt,Mt,yr,Oa,Ha)=>{Ce(Ke,1,`flex w-full ${xt??""} ${Mt??""}`),Ze(Ke,e(De)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),we(Ke,"role",yr),we(Ke,"tabindex",Oa),we(Ke,"data-hunk-start",te()==="left"&&e(ze)>=0?e(ze):void 0),we(Ke,"data-item-idx",te()==="left"?ue:void 0),Ze(Nt,`background: ${Ha??""}; color: ${e(De)?"white":"var(--color-muted)"};`),ne(Vr,e(nt)??"")},[()=>w(e(ve).row.type,te()),()=>e(ve).row.type!=="equal"||e(x).includes(ue)?"cursor-pointer":"",()=>e(ve).row.type!=="equal"||e(x).includes(ue)?"button":void 0,()=>e(ve).row.type!=="equal"||e(x).includes(ue)?0:void 0,()=>e(De)?"rgb(16,87,200)":E(e(ve).row.type,te())]),ce("click",Ke,()=>{var Mt;((Mt=e(ve).row)==null?void 0:Mt.type)!=="equal"&&I(ue);const xt=e(x).indexOf(ue);xt>=0&&f(A,xt,!0)}),ce("keydown",Ke,xt=>{var Mt;if(xt.key==="Enter"||xt.key===" "){xt.preventDefault(),((Mt=e(ve).row)==null?void 0:Mt.type)!=="equal"&&I(ue);const yr=e(x).indexOf(ue);yr>=0&&f(A,yr,!0)}}),u(lt,Ke)};Q(Je,lt=>{e(ve).kind==="separator"?lt(ut):e(ve).row&&lt(jr,1)})}u(xe,xr)}),u(U,le)};var G=k(V),J=k(G),se=k(J),R=k(se,!0);p(se);var $=P(se,2),H=k($,!0);p($),p(J);var D=P(J,2),v=k(D),q=k(v,!0);p(v);var W=P(v,2),de=k(W,!0);p(W),p(D),p(G);var X=P(G,2),Z=k(X),oe=k(Z);Xe(oe);var ae=P(oe,2);{var pe=U=>{var te=Qu(),le=K(te);{let ue=j(()=>e(A)<=0);Pe(le,{variant:"secondary",size:"sm",onclick:T,get disabled(){return e(ue)},children:(ze,De)=>{ke();var nt=Ue("Prev");u(ze,nt)},$$slots:{default:!0}})}var fe=P(le,2),xe=k(fe);p(fe);var ve=P(fe,2);{let ue=j(()=>e(A)>=e(x).length-1);Pe(ve,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(ue)},children:(ze,De)=>{ke();var nt=Ue("Next");u(ze,nt)},$$slots:{default:!0}})}ee(()=>ne(xe,`${e(A)>=0?e(A)+1:"–"} / ${e(x).length??""} occurrence${e(x).length!==1?"s":""}`)),u(U,te)},me=j(()=>r.search.trim()&&e(x).length>0),re=U=>{var te=Zu();u(U,te)},_e=j(()=>r.search.trim());Q(ae,U=>{e(me)?U(pe):e(_e)&&U(re,1)})}p(Z);var ye=P(Z,2),Ee=k(ye);{let U=j(()=>e(i).length===0||e(d)<=0);Pe(Ee,{variant:"secondary",size:"sm",onclick:L,get disabled(){return e(U)},children:(te,le)=>{ke();var fe=Ue("Prev");u(te,fe)},$$slots:{default:!0}})}var ge=P(Ee,2),Fe=k(ge);p(ge);var Ie=P(ge,2);{let U=j(()=>e(i).length===0||e(d)>=e(i).length-1);Pe(Ie,{variant:"secondary",size:"sm",onclick:B,get disabled(){return e(U)},children:(te,le)=>{ke();var fe=Ue("Next");u(te,fe)},$$slots:{default:!0}})}p(ye),p(X);var Qe=P(X,2);{var Ve=U=>{var te=Ju(),le=k(te),fe=k(le),xe=k(fe);Y(xe,()=>"left"),p(fe),p(le),rt(le,De=>f(h,De),()=>e(h));var ve=P(le,2),ue=k(ve),ze=k(ue);Y(ze,()=>"right"),p(ue),p(ve),rt(ve,De=>f(y,De),()=>e(y)),p(te),tt("scroll",le,()=>M("left")),tt("scroll",ve,()=>M("right")),u(U,te)},Se=U=>{var te=ed();u(U,te)};Q(Qe,U=>{e(o)?U(Ve):U(Se,-1)})}var $e=P(Qe,2);{var Oe=U=>{var te=td();u(U,te)};Q($e,U=>{a()&&U(Oe)})}p(V),rt(V,U=>f(n,U),()=>e(n)),ee(()=>{ne(R,r.leftLabel),ne(H,r.kind),ne(q,r.rightLabel),ne(de,r.kind),vn(oe,r.search),ne(Fe,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),ce("input",oe,U=>r.onSearchChange(U.target.value)),ce("keydown",oe,U=>{U.key==="Enter"&&(U.preventDefault(),g())})}ce("keydown",V,O),u(t,V),Ae()}Ge(["keydown","click","input"]);var ad=S("<!> <!> <!>",1),sd=S('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),od=S('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),id=S('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),ld=S('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),cd=S('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),ud=S('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),dd=S('<p class="text-sm text-red-600 text-center py-8"> </p>'),fd=S('<p class="text-sm text-muted text-center py-8">Loading...</p>'),vd=S("<!> <!> <!>",1),gd=S("<!> <!>",1);function hd(t,r){Me(r,!0);let a=z(""),n=z(""),s=z(""),i=z(""),o=z(""),l=z(!1),d=z(!1),b=z(""),x=j(()=>r.allCases.map(_=>({value:_,label:_})));const A=[{value:"doe_row.csv",label:"doe_row.csv"}];let m=j(()=>{var _;return((_=St())==null?void 0:_.compare_kinds)??A});Re(()=>{var _;e(m).some(M=>M.value===e(s))||f(s,((_=e(m)[0])==null?void 0:_.value)??"",!0)});let N=z(!1),T=j(()=>e(a)&&e(n)&&e(a)!==e(n));function g(){const _=e(a);f(a,e(n),!0),f(n,_,!0)}async function c(){if(e(T)){f(l,!0),f(b,"");try{const _=await pi({cases:[e(a),e(n)],base:e(a),kind:e(s)});f(o,_,!0),f(d,!0)}catch(_){console.error("Failed to load diff:",_),f(o,""),f(d,!1);const M=_ instanceof Error?_.message:String(_);f(b,M.includes("404")?`File "${e(s)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Re(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(s)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(o,""),f(d,!0))});let w=!1;Re(()=>{r.allCases.length>=2&&!w?(w=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!w&&(w=!0,f(a,r.allCases[0],!0))});let E=j(wn),h=j(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(E).length===0)return[];const _=yn(),M=_.find(L=>L.case_id===e(a)),F=_.find(L=>L.case_id===e(n));return!M&&!F?[]:e(E).map(L=>{var O,V;const B=((O=M==null?void 0:M.doe)==null?void 0:O[L])!=null&&String(M.doe[L])!==""?String(M.doe[L]):"—",I=((V=F==null?void 0:F.doe)==null?void 0:V[L])!=null&&String(F.doe[L])!==""?String(F.doe[L]):"—";return{param:L,left:B,right:I,differs:B!==I}})}),y=j(()=>e(N)?e(h):e(h).filter(_=>_.differs)),C=j(()=>e(h).filter(_=>_.differs).length);Ot(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(_,M)=>{var F=gd(),L=K(F);Xt(L,{children:(G,J)=>{var se=ad(),R=K(se);Ne(R,{text:"First case",children:(D,v)=>{it(D,{class:"w-32.5",get options(){return e(x)},get value(){return e(a)},onchange:q=>f(a,q,!0),placeholder:"Select..."})}});var $=P(R,2);{let D=j(()=>!e(a)&&!e(n));Pe($,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(D)},children:(v,q)=>{Te(v,{get icon(){return Fo}})},$$slots:{default:!0}})}var H=P($,2);Ne(H,{text:"Second case",children:(D,v)=>{it(D,{class:"w-32.5",get options(){return e(x)},get value(){return e(n)},onchange:q=>f(n,q,!0),placeholder:"Select..."})}}),u(G,se)}});var B=P(L,2);{var I=G=>{var J=sd();u(G,J)},O=G=>{var J=od();u(G,J)},V=G=>{var J=vd(),se=K(J);{var R=W=>{var de=ud(),X=K(de),Z=k(X),oe=k(Z);p(Z);var ae=P(Z,2),pe=k(ae,!0);p(ae),p(X);var me=P(X,2);{var re=ye=>{var Ee=ld(),ge=k(Ee),Fe=k(ge),Ie=k(Fe),Qe=k(Ie),Ve=k(Qe,!0);p(Qe);var Se=P(Qe,2),$e=k(Se,!0);p(Se),p(Ie),p(Fe);var Oe=P(Fe);Ye(Oe,21,()=>e(y),Y=>Y.param,(Y,U)=>{var te=id(),le=k(te),fe=k(le,!0);p(le);var xe=P(le),ve=k(xe,!0);p(xe);var ue=P(xe),ze=k(ue,!0);p(ue),p(te),ee(()=>{Ce(le,1,dt(e(U).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ne(fe,e(U).left),ne(ve,e(U).param),Ce(ue,1,dt(e(U).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ne(ze,e(U).right)}),u(Y,te)}),p(Oe),p(ge),p(Ee),ee(()=>{ne(Ve,e(a)),ne($e,e(n))}),u(ye,Ee)},_e=ye=>{var Ee=cd();u(ye,Ee)};Q(me,ye=>{e(y).length>0?ye(re):ye(_e,-1)})}ee(()=>{ne(oe,`${e(C)??""} difference${e(C)!==1?"s":""} out of ${e(h).length??""}
          parameters`),ne(pe,e(N)?"Show differences only":"Show all parameters")}),ce("click",ae,()=>f(N,!e(N))),u(W,de)};Q(se,W=>{e(h).length>0&&W(R)})}var $=P(se,2);Xt($,{children:(W,de)=>{Ne(W,{text:"File",children:(X,Z)=>{it(X,{class:"w-37.5",get options(){return e(m)},get value(){return e(s)},onchange:oe=>f(s,oe,!0)})}})}});var H=P($,2);{var D=W=>{var de=dd(),X=k(de,!0);p(de),ee(()=>ne(X,e(b))),u(W,de)},v=W=>{nd(W,{get diffText(){return e(o)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(s)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:de=>f(i,de,!0)})},q=W=>{var de=fd();u(W,de)};Q(H,W=>{e(b)?W(D):e(d)?W(v,1):e(l)&&W(q,2)})}u(G,J)};Q(B,G=>{e(a)&&e(n)&&e(a)===e(n)?G(I):!e(a)||!e(n)?G(O,1):G(V,-1)})}u(_,F)},$$slots:{default:!0}}),Ae()}Ge(["click"]);var pd=S("<!> Refresh",1),md=S("<!> <!>",1),_d=S('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),bd=S('<input type="number" min="0" max="50" style="width: 70px;"/>'),xd=S("<!> Download as CSV",1),yd=S('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),wd=S("&nbsp;<!>",1),kd=S("<button> <!></button>"),Cd=S('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),Sd=S('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),$d=S('<span class="error-badge"> </span>'),Pd=S('<span class="error-badge error-badge-new">NEW</span>'),Ed=S('<div class="error-line"></div>'),Rd=S('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),Nd=S('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Md=S('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Ad=S('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Td=S("<!> <!> <div><!> <!></div> <!> <!>",1);function Ld(t,r){Me(r,!0);const a=6,n=["csauto.stderr","csauto.stdout"];let s=z(ie([])),i=z(ie([...n])),o=!1;Re(()=>{var Z;const X=(Z=St())==null?void 0:Z.error_files;X!=null&&X.length&&!o&&f(i,[...X],!0)});let l=z("all"),d=z(""),b=z(a),x=z(!1),A=z(""),m=z(ie(Jt("errors")));Re(()=>{er("errors",e(m))});let N=z(ie([])),T=z(ie(new Set));function g(X){return X.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(X){const Z=X.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${X.case_id}|${X.file}|${X.severity}|${g(Z)}`}function w(X){const Z=new Map;for(const oe of X){const ae=c(oe),pe=Z.get(ae);pe?pe.count++:Z.set(ae,{...oe,count:1,fingerprint:ae,isNew:!e(T).has(ae)})}return Array.from(Z.values())}async function E(){if(!(!e(s).length||!e(i).length)){f(x,!0);try{const X=await ci({cases:e(s),files:e(i),context:e(b),sev:e(l)==="all"?"":e(l),q:e(d)});f(A,"");const Z=w(X.items);f(N,X.items,!0);const oe=new Set(Z.map(ae=>ae.fingerprint));f(T,oe,!0),f(h,Z,!0)}catch(X){f(A,"Failed to load errors"),console.error("Failed to load errors:",X)}finally{f(x,!1)}}}let h=z(ie([])),y=null;function C(){y&&clearTimeout(y),y=setTimeout(E,250)}function _(X){return X==="error"?"error-sev-error":X==="warn"?"error-sev-warn":"error-sev-info"}let M=j(()=>Cn(r.allCases)),F=j(()=>{var X;return(((X=St())==null?void 0:X.error_files)??n).map(Z=>({value:Z,label:Z}))}),L=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function B(X){if(f(s,X,!0),X.length===0){f(h,[],!0),f(N,[],!0);return}E()}function I(X){if(o=!0,f(i,X,!0),X.length===0){f(h,[],!0),f(N,[],!0);return}E()}function O(X){f(l,X,!0),E()}function V(){E()}let G=!1;Re(()=>{r.allCases.length>0&&!G&&(G=!0,f(s,[...r.allCases],!0),E())}),Re(()=>{e(m)?pr("errors",E,Vn()):vt("errors")});const J=mr(()=>{G&&E()});fr(()=>{vt("errors"),J()});let se=z(ie(new Set));function R(X){const Z=new Set(e(se));Z.has(X)?Z.delete(X):Z.add(X),f(se,Z,!0)}let $=z("severity"),H=z("desc");const D={info:0,warn:1,error:2};let v=j(()=>{const X=[...e(h)];return X.sort((Z,oe)=>{let ae=0;return e($)==="severity"?ae=(D[Z.severity]??9)-(D[oe.severity]??9):e($)==="count"?ae=Z.count-oe.count:ae=Z[e($)].localeCompare(oe[e($)]),e(H)==="asc"?ae:-ae}),X});const q={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function W(X){e($)===X?f(H,e(H)==="asc"?"desc":"asc",!0):(f($,X,!0),f(H,q[X],!0))}function de(){if(!e(h).length)return;const X=["case_id","file","severity","count","is_new","line_text"],Z=e(v).map(pe=>[pe.case_id,pe.file,pe.severity,pe.count,pe.isNew?"yes":"no",`"${pe.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),oe=[X.join(","),...Z].join(`
`),ae=br("errors",e(s),"csv");Ea(oe,ae)}Ot(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:Z=>{var oe=md(),ae=K(oe);{let re=j(Vn);tr(ae,{name:"errors",get intervalMs(){return e(re)},onRefresh:E,get checked(){return e(m)},set checked(_e){f(m,_e,!0)}})}var pe=P(ae,2);{var me=re=>{Pe(re,{variant:"primary",onclick:E,children:(_e,ye)=>{var Ee=pd(),ge=K(Ee);Te(ge,{get icon(){return Zt}}),ke(),u(_e,Ee)},$$slots:{default:!0}})};Q(pe,re=>{e(m)||re(me)})}u(Z,oe)},children:(Z,oe)=>{var ae=Td(),pe=K(ae);Xt(pe,{children:(Se,$e)=>{var Oe=yd(),Y=K(Oe);Ne(Y,{text:"Cases",children:(ue,ze)=>{qt(ue,{class:"w-[160px]",get options(){return e(M)},get selected(){return e(s)},onchange:B,placeholder:"Select cases..."})}});var U=P(Y,2);Ne(U,{text:"Files",children:(ue,ze)=>{qt(ue,{class:"w-[160px]",get options(){return e(F)},get selected(){return e(i)},onchange:I,placeholder:"Select files..."})}});var te=P(U,2);Ne(te,{text:"Severity",children:(ue,ze)=>{it(ue,{class:"w-[90px]",get options(){return L},get value(){return e(l)},onchange:O})}});var le=P(te,2);Ne(le,{text:"Search",children:(ue,ze)=>{var De=_d();Xe(De),ce("input",De,C),et(De,()=>e(d),nt=>f(d,nt)),u(ue,De)}});var fe=P(le,2);Ne(fe,{text:"Context",children:(ue,ze)=>{var De=bd();Xe(De),ce("change",De,V),et(De,()=>e(b),nt=>f(b,nt)),u(ue,De)}});var xe=P(fe,2),ve=k(xe);{let ue=j(()=>e(h).length===0);Pe(ve,{variant:"secondary",size:"sm",onclick:de,get disabled(){return e(ue)},children:(ze,De)=>{var nt=xd(),rr=K(nt);Te(rr,{get icon(){return hr}}),ke(),u(ze,nt)},$$slots:{default:!0}})}p(xe),u(Se,Oe)}});var me=P(pe,2);{var re=Se=>{var $e=Cd(),Oe=P(k($e),2);Ye(Oe,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],Y=>Y.key,(Y,U)=>{var te=kd(),le=k(te,!0),fe=P(le);{var xe=ve=>{var ue=wd(),ze=P(K(ue));{let De=j(()=>e(H)==="asc"?Do:Lo);Te(ze,{get icon(){return e(De)},size:12})}u(ve,ue)};Q(fe,ve=>{e($)===U.key&&ve(xe)})}p(te),ee(()=>{Ce(te,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e($)===U.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ne(le,U.label)}),ce("click",te,()=>W(U.key)),u(Y,te)}),p($e),u(Se,$e)};Q(me,Se=>{e(v).length>0&&Se(re)})}var _e=P(me,2),ye=k(_e);{var Ee=Se=>{var $e=Sd();u(Se,$e)};Q(ye,Se=>{e(v).length===0&&Se(Ee)})}var ge=P(ye,2);Ye(ge,17,()=>e(v),Se=>Se.fingerprint,(Se,$e)=>{var Oe=Rd(),Y=k(Oe),U=k(Y),te=k(U);{let Je=j(()=>e(se).has(e($e).fingerprint)?pn:zo);Te(te,{get icon(){return e(Je)},size:14})}p(U);var le=P(U,2),fe=k(le);p(le);var xe=P(le,2),ve=k(xe);{var ue=Je=>{var ut=$d(),jr=k(ut);p(ut),ee(()=>ne(jr,`${e($e).count??""}x`)),u(Je,ut)};Q(ve,Je=>{e($e).count>1&&Je(ue)})}var ze=P(ve,2);{var De=Je=>{var ut=Pd();u(Je,ut)};Q(ze,Je=>{e($e).isNew&&Je(De)})}p(xe),p(Y);var nt=P(Y,2);{var rr=Je=>{var ut=Ed();zr(ut,()=>e($e).line_html,!0),p(ut),u(Je,ut)},xr=j(()=>e(se).has(e($e).fingerprint));Q(nt,Je=>{e(xr)&&Je(rr)})}p(Oe),ee(Je=>{Ce(Oe,1,`error-item ${Je??""}`),ne(fe,`${e($e).case_id??""} / ${e($e).file??""} : ${e($e).severity??""}`)},[()=>_(e($e).severity)]),ce("click",Y,()=>R(e($e).fingerprint)),u(Se,Oe)}),p(_e);var Fe=P(_e,2);{var Ie=Se=>{var $e=Md(),Oe=k($e),Y=k(Oe);p(Oe);var U=P(Oe,2);{var te=fe=>{var xe=Nd(),ve=k(xe);p(xe),ee(ue=>ne(ve,`${ue??""} new`),[()=>e(h).filter(ue=>ue.isNew).length]),u(fe,xe)},le=j(()=>e(h).some(fe=>fe.isNew));Q(U,fe=>{e(le)&&fe(te)})}p($e),ee(()=>ne(Y,`${e(h).length??""} unique / ${e(N).length??""} total`)),u(Se,$e)};Q(Fe,Se=>{e(v).length>0&&Se(Ie)})}var Qe=P(Fe,2);{var Ve=Se=>{var $e=Ad(),Oe=k($e,!0);p($e),ee(()=>ne(Oe,e(A))),u(Se,$e)};Q(Qe,Se=>{e(A)&&Se(Ve)})}ee(()=>Ce(_e,1,`error-list ${e(x)?"opacity-50 pointer-events-none":""}`)),u(Z,ae)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["input","change","click"]);var Fd=S('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Bd(t,r){Me(r,!0);let a=z(ie({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=z(ie([])),s=z(null);const i=v=>e(s)===null||e(s).includes(v);async function o(v){var de;const q=`/favicon-${v}.svg`;try{const X=await fetch(q);if(!X.ok||!((de=X.headers.get("content-type"))!=null&&de.includes("svg")))return}catch{return}const W=document.querySelector('link[rel="icon"]');W&&(W.href=q)}async function l(){try{const v=await si();Rl(v.rows),Nl(v.doe_columns),f(n,v.rows.map(q=>q.case_id),!0),f(a,Ul($a(),yn()),!0)}catch(v){console.error("Failed to load status:",v)}}Zn(()=>{l(),oi().then(v=>{rl(v),f(s,v.panels,!0),o(v.solver)}).catch(()=>{})});var d=Fd(),b=K(d);Mi(b,{});var x=P(b,2);Di(x,{});var A=P(x,2);ll(A,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var m=P(A,2),N=k(m);{var T=v=>{xc(v,{onRefresh:l})},g=j(()=>i("status"));Q(N,v=>{e(g)&&v(T)})}var c=P(N,2);{var w=v=>{Vc(v,{get allCases(){return e(n)}})},E=j(()=>i("residuals"));Q(c,v=>{e(E)&&v(w)})}var h=P(c,2);{var y=v=>{fu(v,{get allCases(){return e(n)}})},C=j(()=>i("probes"));Q(h,v=>{e(C)&&v(y)})}var _=P(h,2);{var M=v=>{ku(v,{get allCases(){return e(n)}})},F=j(()=>i("performance"));Q(_,v=>{e(F)&&v(M)})}var L=P(_,2);{var B=v=>{hd(v,{get allCases(){return e(n)}})},I=j(()=>i("compare"));Q(L,v=>{e(I)&&v(B)})}var O=P(L,2);{var V=v=>{Gu(v,{get allCases(){return e(n)}})},G=j(()=>i("tail"));Q(O,v=>{e(G)&&v(V)})}var J=P(O,2);{var se=v=>{Ld(v,{get allCases(){return e(n)}})},R=j(()=>i("errors"));Q(J,v=>{e(R)&&v(se)})}p(m);var $=P(m,2),H=P(k($),2),D=k(H);p(H),p($),ee(()=>we(D,"src",cl)),u(t,d),Ae()}export{Bd as component};
