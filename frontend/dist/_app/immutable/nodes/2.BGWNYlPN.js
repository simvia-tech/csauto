import{b as Pr,a as u,f as P,c as be,t as Ve,d as Ht}from"../chunks/C14P8jaG.js";import{o as Jn,a as vr}from"../chunks/Cz6m6K8p.js";import{h as Fe,L as Pt,G as Tt,c as Er,J as Gt,b as ea,o as e,N as Ba,ag as qa,O as Pn,P as zt,f as _t,ay as ta,aF as Ka,ao as En,e as mt,a as dr,aM as Ga,s as Wa,a5 as Xa,aN as ra,aE as un,aO as Ya,a7 as Rn,aP as Qa,aQ as Za,aI as Ja,aR as ht,aS as na,a1 as es,r as aa,p as sa,aT as Ur,ae as oa,aU as ts,aV as rs,aC as ns,m as as,d as Nr,az as ia,y as ee,F as la,aW as ss,aG as os,aA as is,D as ca,aX as ua,aY as ls,aZ as cs,E as us,aw as da,S as Ir,k as Mr,a_ as fa,a$ as ds,b0 as fs,b1 as va,b2 as vs,b3 as gs,b4 as gr,b5 as hs,b6 as ps,b7 as ms,b8 as _s,b9 as bs,ba as xs,bb as ys,aJ as Et,U as ws,aK as D,_ as ce,$ as f,A as _,B as v,x as Me,g as G,z as Ae,C as E,j as Ne,ap as we,aL as V,bc as ks,bd as ga,q as Ut,be as it,bf as Cs}from"../chunks/VJhVTb1A.js";import{p as me,i as Y,b as nt,c as Ss,l as Oe,s as Ue}from"../chunks/zf4GFcxs.js";import{i as $s,a as Ps,d as ue,b as Ge,c as Es,n as Rs,e as Ns,s as ae,f as rt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Ms}from"../chunks/DmjnTBOd.js";import{B as As}from"../chunks/U5yjBaoU.js";function dn(t,r){return r}function Ts(t,r,a){for(var n=[],s=r.length,i,o=r.length,l=0;l<s;l++){let k=r[l];sa(k,()=>{if(i){if(i.pending.delete(k),i.done.add(k),i.pending.size===0){var b=t.outrogroups;Qr(t,un(i.done)),b.delete(i),b.size===0&&(t.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&a!==null;if(d){var m=a,x=m.parentNode;ns(x),x.append(m),t.items.clear()}Qr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Qr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const o of t.pending.values())for(const l of o)n.add(t.items.get(l).e)}for(var s=0;s<r.length;s++){var i=r[s];if(n!=null&&n.has(i)){i.f|=ht;const o=document.createDocumentFragment();as(i,o)}else Nr(r[s],a)}}var Nn;function He(t,r,a,n,s,i=null){var o=t,l=new Map,d=(r&na)!==0;if(d){var m=t;o=Fe?Pt(Tt(m)):m.appendChild(Er())}Fe&&Gt();var x=null,k=Xa(()=>{var p=a();return ra(p)?p:p==null?[]:un(p)}),b,z=new Map,A=!0;function h(p){(R.effect.f&es)===0&&(R.pending.delete(p),R.fallback=x,Ls(R,b,o,r,n),x!==null&&(b.length===0?(x.f&ht)===0?aa(x):(x.f^=ht,lr(x,null,o)):sa(x,()=>{x=null})))}function c(p){R.pending.delete(p)}var C=ea(()=>{b=e(k);var p=b.length;let w=!1;if(Fe){var $=Ba(o)===qa;$!==(p===0)&&(o=Pn(),Pt(o),zt(!1),w=!0)}for(var g=new Set,N=mt,I=Wa(),T=0;T<p;T+=1){Fe&&_t.nodeType===ta&&_t.data===Ka&&(o=_t,w=!0,zt(!1));var q=b[T],H=n(q,T),j=A?null:l.get(H);j?(j.v&&En(j.v,q),j.i&&En(j.i,T),I&&N.unskip_effect(j.e)):(j=Fs(l,A?o:Nn??(Nn=Er()),q,H,T,s,r,a),A||(j.e.f|=ht),l.set(H,j)),g.add(H)}if(p===0&&i&&!x&&(A?x=dr(()=>i(o)):(x=dr(()=>i(Nn??(Nn=Er()))),x.f|=ht)),p>g.size&&Ga(),Fe&&p>0&&Pt(Pn()),!A)if(z.set(N,g),I){for(const[U,X]of l)g.has(U)||N.skip_effect(X.e);N.oncommit(h),N.ondiscard(c)}else h(N);w&&zt(!0),e(k)}),R={effect:C,items:l,pending:z,outrogroups:null,fallback:x};A=!1,Fe&&(o=_t)}function ar(t){for(;t!==null&&(t.f&ts)===0;)t=t.next;return t}function Ls(t,r,a,n,s){var q,H,j,U,X,K,re,y,S;var i=(n&rs)!==0,o=r.length,l=t.items,d=ar(t.effect.first),m,x=null,k,b=[],z=[],A,h,c,C;if(i)for(C=0;C<o;C+=1)A=r[C],h=s(A,C),c=l.get(h).e,(c.f&ht)===0&&((H=(q=c.nodes)==null?void 0:q.a)==null||H.measure(),(k??(k=new Set)).add(c));for(C=0;C<o;C+=1){if(A=r[C],h=s(A,C),c=l.get(h).e,t.outrogroups!==null)for(const O of t.outrogroups)O.pending.delete(c),O.done.delete(c);if((c.f&Ur)!==0&&(aa(c),i&&((U=(j=c.nodes)==null?void 0:j.a)==null||U.unfix(),(k??(k=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)lr(c,null,a);else{var R=x?x.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),kt(t,x,c),kt(t,c,R),lr(c,R,a),x=c,b=[],z=[],d=ar(x.next);continue}if(c!==d){if(m!==void 0&&m.has(c)){if(b.length<z.length){var p=z[0],w;x=p.prev;var $=b[0],g=b[b.length-1];for(w=0;w<b.length;w+=1)lr(b[w],p,a);for(w=0;w<z.length;w+=1)m.delete(z[w]);kt(t,$.prev,g.next),kt(t,x,$),kt(t,g,p),d=p,x=g,C-=1,b=[],z=[]}else m.delete(c),lr(c,d,a),kt(t,c.prev,c.next),kt(t,c,x===null?t.effect.first:x.next),kt(t,x,c),x=c;continue}for(b=[],z=[];d!==null&&d!==c;)(m??(m=new Set)).add(d),z.push(d),d=ar(d.next);if(d===null)continue}(c.f&ht)===0&&b.push(c),x=c,d=ar(c.next)}if(t.outrogroups!==null){for(const O of t.outrogroups)O.pending.size===0&&(Qr(t,un(O.done)),(X=t.outrogroups)==null||X.delete(O));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||m!==void 0){var N=[];if(m!==void 0)for(c of m)(c.f&Ur)===0&&N.push(c);for(;d!==null;)(d.f&Ur)===0&&d!==t.fallback&&N.push(d),d=ar(d.next);var I=N.length;if(I>0){var T=(n&na)!==0&&o===0?a:null;if(i){for(C=0;C<I;C+=1)(re=(K=N[C].nodes)==null?void 0:K.a)==null||re.measure();for(C=0;C<I;C+=1)(S=(y=N[C].nodes)==null?void 0:y.a)==null||S.fix()}Ts(t,N,T)}}i&&oa(()=>{var O,F;if(k!==void 0)for(c of k)(F=(O=c.nodes)==null?void 0:O.a)==null||F.apply()})}function Fs(t,r,a,n,s,i,o,l){var d=(o&Qa)!==0?(o&Za)===0?Ja(a,!1,!1):Rn(a):null,m=(o&Ya)!==0?Rn(s):null;return{v:d,i:m,e:dr(()=>(i(r,d??a,m??s,l),()=>{t.delete(n)}))}}function lr(t,r,a){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var o=ia(n);if(i.before(n),n===s)return;n=o}}function kt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function zr(t,r,a=!1,n=!1,s=!1,i=!1){var o=t,l="";if(a){var d=t;Fe&&(o=Pt(Tt(d)))}ee(()=>{var m=la;if(l===(l=r()??"")){Fe&&Gt();return}if(a&&!Fe){m.nodes=null,d.innerHTML=l,l!==""&&Pr(Tt(d),d.lastChild);return}if(m.nodes!==null&&(ss(m.nodes.start,m.nodes.end),m.nodes=null),l!==""){if(Fe){_t.data;for(var x=Gt(),k=x;x!==null&&(x.nodeType!==ta||x.data!=="");)k=x,x=ia(x);if(x===null)throw os(),is;Pr(_t,k),o=Pt(x);return}var b=n?ua:s?ls:void 0,z=ca(n?"svg":s?"math":"template",b);z.innerHTML=l;var A=n||s?z:z.content;if(Pr(Tt(A),A.lastChild),n||s)for(;Tt(A);)o.before(Tt(A));else o.before(A)}})}function je(t,r,a,n,s){var l;Fe&&Gt();var i=(l=r.$$slots)==null?void 0:l[a],o=!1;i===!0&&(i=r.children,o=!0),i===void 0||i(t,o?()=>n:n)}function Is(t,r,a,n,s,i){let o=Fe;Fe&&Gt();var l=null;Fe&&_t.nodeType===cs&&(l=_t,Gt());var d=Fe?_t:t,m=new As(d,!1);ea(()=>{const x=r()||null;var k=ua;if(x===null){m.ensure(null,null);return}return m.ensure(x,b=>{if(x){if(l=Fe?l:ca(x,k),Pr(l,l),n){Fe&&$s(x)&&l.append(document.createComment(""));var z=Fe?Tt(l):l.appendChild(Er());Fe&&(z===null?zt(!1):Pt(z)),n(l,z)}la.nodes.end=l,b.before(l)}Fe&&Pt(b)}),()=>{}},us),da(()=>{}),o&&(zt(!0),Pt(d))}function zs(t,r,a){Ir(()=>{var n=Mr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Ds(t,r){var a=void 0,n;fa(()=>{a!==(a=r())&&(n&&(Nr(n),n=null),a&&(n=dr(()=>{Ir(()=>a(t))})))})}function ha(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(a=ha(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Os(){for(var t,r,a=0,n="",s=arguments.length;a<s;a++)(t=arguments[a])&&(r=ha(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?Os(t):t??""}const Mn=[...` 	
\r\f \v\uFEFF`];function Hs(t,r,a){var n=t==null?"":""+t;if(a){for(var s of Object.keys(a))if(a[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||Mn.includes(n[o-1]))&&(l===n.length||Mn.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function An(t,r=!1){var a=r?" !important;":";",n="";for(var s of Object.keys(t)){var i=t[s];i!=null&&i!==""&&(n+=" "+s+": "+i+a)}return n}function Br(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function js(t,r){if(r){var a="",n,s;if(Array.isArray(r)?(n=r[0],s=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Br)),s&&d.push(...Object.keys(s).map(Br));var m=0,x=-1;const h=t.length;for(var k=0;k<h;k++){var b=t[k];if(l?b==="/"&&t[k-1]==="*"&&(l=!1):i?i===b&&(i=!1):b==="/"&&t[k+1]==="*"?l=!0:b==='"'||b==="'"?i=b:b==="("?o++:b===")"&&o--,!l&&i===!1&&o===0){if(b===":"&&x===-1)x=k;else if(b===";"||k===h-1){if(x!==-1){var z=Br(t.substring(m,x).trim());if(!d.includes(z)){b!==";"&&k++;var A=t.substring(m,k).trim();a+=" "+A+";"}}m=k+1,x=-1}}}}return n&&(a+=An(n)),s&&(a+=An(s,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Se(t,r,a,n,s,i){var o=t.__className;if(Fe||o!==a||o===void 0){var l=Hs(a,n,i);(!Fe||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&s!==i)for(var d in i){var m=!!i[d];(s==null||m!==!!s[d])&&t.classList.toggle(d,m)}return i}function qr(t,r={},a,n){for(var s in a){var i=a[s];r[s]!==i&&(a[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,n))}}function Ze(t,r,a,n){var s=t.__style;if(Fe||s!==r){var i=js(r,n);(!Fe||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(qr(t,a==null?void 0:a[0],n[0]),qr(t,a==null?void 0:a[1],n[1],"important")):qr(t,a,n));return n}function Ar(t,r,a=!1){if(t.multiple){if(r==null)return;if(!ra(r))return ds();for(var n of t.options)n.selected=r.includes(ur(n));return}for(n of t.options){var s=ur(n);if(fs(s,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function pa(t){var r=new MutationObserver(()=>{Ar(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),da(()=>{r.disconnect()})}function Zr(t,r,a=r){var n=new WeakSet,s=!0;va(t,"change",i=>{var o=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(o),ur);else{var d=t.querySelector(o)??t.querySelector("option:not([disabled])");l=d&&ur(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Ir(()=>{var i=r();if(t===document.activeElement){var o=mt;if(n.has(o))return}if(Ar(t,i,s),s&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=ur(l),a(i))}t.__value=i,s=!1}),pa(t)}function ur(t){return"__value"in t?t.__value:t.value}const sr=Symbol("class"),or=Symbol("style"),ma=Symbol("is custom element"),_a=Symbol("is html"),Vs=gr?"link":"LINK",Us=gr?"input":"INPUT",Bs=gr?"option":"OPTION",qs=gr?"select":"SELECT",Ks=gr?"progress":"PROGRESS";function Ye(t){if(Fe){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;ke(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;ke(t,"checked",null),t.checked=s}}};t.__on_r=a,oa(a),ms()}}function fn(t,r){var a=vn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Ks)||(t.value=r??"")}function Gs(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ke(t,r,a,n){var s=vn(t);Fe&&(s[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Vs)||s[r]!==(s[r]=a)&&(r==="loading"&&(t[xs]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ba(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Ws(t,r,a,n,s=!1,i=!1){if(Fe&&s&&t.nodeName===Us){var o=t,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Ye(o)}var d=vn(t),m=d[ma],x=!d[_a];let k=Fe&&m;k&&zt(!1);var b=r||{},z=t.nodeName===Bs;for(var A in r)A in a||(a[A]=null);a.class?a.class=dt(a.class):a[sr]&&(a.class=null),a[or]&&(a.style??(a.style=null));var h=ba(t);for(const g in a){let N=a[g];if(z&&g==="value"&&N==null){t.value=t.__value="",b[g]=N;continue}if(g==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Se(t,c,N,n,r==null?void 0:r[sr],a[sr]),b[g]=N,b[sr]=a[sr];continue}if(g==="style"){Ze(t,N,r==null?void 0:r[or],a[or]),b[g]=N,b[or]=a[or];continue}var C=b[g];if(!(N===C&&!(N===void 0&&t.hasAttribute(g)))){b[g]=N;var R=g[0]+g[1];if(R!=="$$")if(R==="on"){const I={},T="$$"+g;let q=g.slice(2);var p=Ns(q);if(Ps(q)&&(q=q.slice(0,-7),I.capture=!0),!p&&C){if(N!=null)continue;t.removeEventListener(q,b[T],I),b[T]=null}if(p)ue(q,t,N),Ge([q]);else if(N!=null){let H=function(j){b[g].call(this,j)};b[T]=Es(q,t,H,I)}}else if(g==="style")ke(t,g,N);else if(g==="autofocus")hs(t,!!N);else if(!m&&(g==="__value"||g==="value"&&N!=null))t.value=t.__value=N;else if(g==="selected"&&z)Gs(t,N);else{var w=g;x||(w=Rs(w));var $=w==="defaultValue"||w==="defaultChecked";if(N==null&&!m&&!$)if(d[g]=null,w==="value"||w==="checked"){let I=t;const T=r===void 0;if(w==="value"){let q=I.defaultValue;I.removeAttribute(w),I.defaultValue=q,I.value=I.__value=T?q:null}else{let q=I.defaultChecked;I.removeAttribute(w),I.defaultChecked=q,I.checked=T?q:!1}}else t.removeAttribute(g);else $||h.includes(w)&&(m||typeof N!="string")?(t[w]=N,w in d&&(d[w]=ps)):typeof N!="function"&&ke(t,w,N)}}}return k&&zt(!0),b}function Tn(t,r,a=[],n=[],s=[],i,o=!1,l=!1){vs(s,a,n,d=>{var m=void 0,x={},k=t.nodeName===qs,b=!1;if(fa(()=>{var A=r(...d.map(e)),h=Ws(t,m,A,i,o,l);b&&k&&"value"in A&&Ar(t,A.value);for(let C of Object.getOwnPropertySymbols(x))A[C]||Nr(x[C]);for(let C of Object.getOwnPropertySymbols(A)){var c=A[C];C.description===gs&&(!m||c!==m[C])&&(x[C]&&Nr(x[C]),x[C]=dr(()=>Ds(t,()=>c))),h[C]=c}m=h}),k){var z=t;Ir(()=>{Ar(z,m.value,!0),pa(z)})}b=!0})}function vn(t){return t.__attributes??(t.__attributes={[ma]:t.nodeName.includes("-"),[_a]:t.namespaceURI===_s})}var Ln=new Map;function ba(t){var r=t.getAttribute("is")||t.nodeName,a=Ln.get(r);if(a)return a;Ln.set(r,a=[]);for(var n,s=t,i=Element.prototype;i!==s;){n=ys(s);for(var o in n)n[o].set&&a.push(o);s=bs(s)}return a}function tt(t,r,a=r){var n=new WeakSet;va(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Kr(t)?Gr(i):i,a(i),mt!==null&&n.add(mt),await Et(),i!==(i=r())){var o=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var m=t.value.length;o===l&&l===d&&m>d?(t.selectionStart=m,t.selectionEnd=m):(t.selectionStart=o,t.selectionEnd=Math.min(l,m))}}}),(Fe&&t.defaultValue!==t.value||Mr(r)==null&&t.value)&&(a(Kr(t)?Gr(t.value):t.value),mt!==null&&n.add(mt)),ws(()=>{var s=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Kr(t)&&s===Gr(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Kr(t){var r=t.type;return r==="number"||r==="range"}function Gr(t){return t===""?null:+t}let xt=D(ce({type:"none",props:{},resolve:null}));function Xs(){return e(xt)}function ot(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Ys(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Qs(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Zs(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Xe(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Fn(t,r="Confirm",a="OK",n="primary"){return new Promise(s=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:s},!0)})}function gn(t,r="",a="Input",n="",s=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:s},resolve:i},!0)})}var Js=P('<div style="display:contents;"><!></div>');function Jt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Js(),s=_(n);ft(s,()=>r.children),v(n),zs(n,i=>a==null?void 0:a(i)),u(t,n)}var eo=P('<div class="text-xs text-muted font-light"> </div>'),to=P('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function hr(t,r){Me(r,!0);const a=A=>{var h=to(),c=_(h),C=_(c),R=_(C),p=_(R,!0);v(R);var w=E(R,2);{var $=T=>{var q=eo(),H=_(q,!0);v(q),ee(()=>ae(H,r.subtitle)),u(T,q)};Y(w,T=>{r.subtitle&&T($)})}v(C);var g=E(C,2);ft(g,()=>r.children);var N=E(g,2),I=_(N);ft(I,()=>r.footer),v(N),v(c),v(h),ee(()=>{Se(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),ke(c,"aria-labelledby",r.titleId),ke(R,"id",r.titleId),ae(p,r.title)}),ue("keydown",h,o),ue("mousedown",h,d),ue("click",h,m),u(A,h)};let n=me(r,"maxWidth",3,"520px"),s=me(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():ot(null)}function o(A){A.key==="Escape"?i():A.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(A){l=A.target.dataset.backdrop!==void 0}function m(A){const h=A.target.dataset.backdrop!==void 0;l&&h&&i(),l=!1}var x=be(),k=G(x);{var b=A=>{Jt(A,{children:(h,c)=>{a(h)}})},z=A=>{a(A)};Y(k,A=>{s()?A(b):A(z,-1)})}u(t,x),Ae()}Ge(["keydown","mousedown","click"]);var ro=P("<button><!></button>");function Pe(t,r){let a=me(r,"variant",3,"primary"),n=me(r,"size",3,"default"),s=me(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},o={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=ro(),d=_(l);ft(d,()=>r.children),v(l),ee(()=>{Se(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${o[a()]??""}`),l.disabled=s()}),ue("click",l,function(...m){var x;(x=r.onclick)==null||x.apply(this,m)}),u(t,l)}Ge(["click"]);var no=P("<!> <span><!></span>",1),ao=P('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),so=P('<input class="w-full"/>'),oo=P('<div class="mb-4.5"><!></div>'),io=P('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function lo(t,r){Me(r,!0);let a=me(r,"confirmLabel",3,"OK"),n=me(r,"confirmVariant",3,"primary"),s=me(r,"value",3,""),i=me(r,"placeholder",3,""),o=me(r,"multiline",3,!1);const l=s();let d=D(ce(l)),m=D(void 0),x=D(void 0);Ne(()=>{var z;r.mode==="prompt"&&e(m)?(e(m).focus(),"select"in e(m)&&e(m).select()):e(x)&&((z=e(x).querySelector("button"))==null||z.focus())});function k(){r.mode==="prompt"?ot(e(d)):r.mode==="confirm"?ot(!0):ot()}function b(){r.mode==="confirm"?ot(!1):r.mode==="prompt"?ot(null):ot()}{const z=h=>{var c=no(),C=G(c);{var R=$=>{Pe($,{variant:"secondary",onclick:b,children:(g,N)=>{we();var I=Ve("Cancel");u(g,I)},$$slots:{default:!0}})};Y(C,$=>{r.mode!=="alert"&&$(R)})}var p=E(C,2),w=_(p);Pe(w,{get variant(){return n()},onclick:k,children:($,g)=>{we();var N=Ve();ee(()=>ae(N,a())),u($,N)},$$slots:{default:!0}}),v(p),nt(p,$=>f(x,$),()=>e(x)),u(h,c)};let A=V(()=>o()?void 0:k);hr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(A)},onCancel:b,footer:z,children:(h,c)=>{var C=io(),R=G(C),p=_(R,!0);v(R);var w=E(R,2);{var $=g=>{var N=oo(),I=_(N);{var T=H=>{var j=ao();ks(j),nt(j,U=>f(m,U),()=>e(m)),ee(()=>ke(j,"placeholder",i())),tt(j,()=>e(d),U=>f(d,U)),u(H,j)},q=H=>{var j=so();Ye(j),nt(j,U=>f(m,U),()=>e(m)),ee(()=>ke(j,"placeholder",i())),tt(j,()=>e(d),U=>f(d,U)),u(H,j)};Y(I,H=>{o()?H(T):H(q,-1)})}v(N),u(g,N)};Y(w,g=>{r.mode==="prompt"&&g($)})}ee(()=>ae(p,r.message)),u(h,C)},$$slots:{footer:!0,default:!0}})}Ae()}var co=P('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Re(t,r){var a=co(),n=_(a),s=E(n);ft(s,()=>r.children),v(a),ee(()=>ae(n,`${r.text??""} `)),u(t,a)}function St(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function $t(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function xa(t,r){return localStorage.getItem(t)??r}function uo(t,r){r?localStorage.setItem(t,r):localStorage.removeItem(t)}function fo(){return{n:St("csauto_run_n",1),nt:St("csauto_run_nt",1),maxParallel:St("csauto_run_max_parallel",0)||null,backend:xa("csauto_run_backend","")||null}}function vo(t){$t("csauto_run_n",t.n),$t("csauto_run_nt",t.nt),t.maxParallel&&$t("csauto_run_max_parallel",t.maxParallel),uo("csauto_run_backend",t.backend??"")}function go(){return{n:St("csauto_restart_n",1),nt:St("csauto_restart_nt",1),maxParallel:St("csauto_restart_max_parallel",0)||null,mode:xa("csauto_restart_mode","iterations"),value:St("csauto_restart_value",100)}}function ho(t){$t("csauto_restart_n",t.n),$t("csauto_restart_nt",t.nt),t.maxParallel&&$t("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),$t("csauto_restart_value",t.value)}function po(){return{keepLast:St("csauto_clean_keep_last",1)}}function mo(t){$t("csauto_clean_keep_last",t.keepLast)}let Dt=D(null);function _o(t){f(Dt,t,!0)}function Ft(){return e(Dt)}function cr(t){return e(Dt)===null||e(Dt).capabilities.includes(t)}function bo(t){return e(Dt)===null||e(Dt).control_actions.includes(t)}function xo(){var t;return((t=e(Dt))==null?void 0:t.backends)??[]}const Jr="csauto_token";let ya=D(ce(localStorage.getItem(Jr)??""));function wa(){return e(ya)}function ka(t){f(ya,t,!0),t?localStorage.setItem(Jr,t):localStorage.removeItem(Jr)}let wr=null;async function hn(t,r={}){const a=new Headers(r.headers),n=wa();n&&a.set("X-CSAUTO-TOKEN",n);const s=await fetch(t,{...r,headers:a});if(s.status===401){wr||(wr=gn("API token required:",n,"Authentication"));const i=await wr;return wr=null,i===null?s:(ka(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return s}async function ct(t){const r=await hn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Dr(t){const r=await hn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function yt(t,r){const a=await hn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function Or(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function yo(t){return ct(`/api/launch_options?backend=${encodeURIComponent(t)}`)}function wo(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function In(t){return ct(`/api/perf?${Or(t)}`)}function ko(){return ct("/api/app_config")}function Co(t){return ct(`/api/residual_columns?${Or(t)}`).then(r=>r.columns??[])}function So(t,r,a={}){const n=new URLSearchParams;return t.forEach(s=>n.append("case",s)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Dr(`/api/residuals_svg?${n}`)}function Ca(t){return ct(`/api/restart_origin?${Or(t)}`)}function $o(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function Po(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Dr(`/api/tail?${n}`)}function Eo(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function Ro(t){return ct(`/api/resu_dirs?${Or(t)}`).then(r=>r.dirs??[])}function en(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function No(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function Mo(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(s=>n.append("column",s)),ct(`/api/probe_position?${n}`)}function Ao(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Dr(`/api/probe_svg?${r}`)}function To(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Dr(`/api/compare_runs?${r}`)}function Lo(){return yt("/api/sync_backends",{}).then(()=>{}).catch(()=>{})}function zn(t){return yt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,backend:t.backend??void 0,options:t.options??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function Fo(t){return yt("/api/kill_case",{cases:t}).then(()=>{})}function kr(t){return yt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function Io(t){return yt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function zo(t,r){return yt("/api/case_note",{case:t,note:r}).then(()=>{})}function Do(t,r){return yt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function Oo(t){return yt("/api/open_gui",{case:t}).then(()=>{})}function Ho(){return ct("/api/settings/telemetry")}function jo(t){return yt("/api/settings/telemetry",{enabled:t})}var Vo=P("<!> <!>",1),Uo=P('<input type="number" min="1" step="1"/>'),Bo=P('<input type="number" min="1" step="1"/>'),qo=P('<input type="number" min="0" step="1"/>'),Ko=P("<option> </option>"),Go=P("<select><option>This machine</option><!></select>"),Wo=P('<div class="mb-3"><!></div>'),Xo=P(`<p class="mb-3 rounded border border-amber-400/50 bg-amber-400/10 px-3 py-2 text-sm" role="status">About to submit <strong> </strong> <strong> </strong>, which runs on your own account and
      bills you for the compute. Results come back automatically.</p>`),Yo=P("<option> </option>"),Qo=P("<select></select>"),Zo=P('<div class="grid grid-cols-2 gap-2.5 mb-3"></div>'),Jo=P('<p class="mb-3 text-sm opacity-75" role="status"> </p>'),ei=P('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <!> <!> <!> <!>',1);function ti(t,r){Me(r,!0);const a=fo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=D(ce(a.n)),i=D(ce(a.nt)),o=D(ce(n));const l=xo().filter(z=>z!=="fake");let d=D(ce(l.includes(a.backend??"")?a.backend:"")),m=D(ce([])),x=D(!1),k=D(ce({}));Ne(()=>{const z=e(d);if(!z){f(m,[],!0),f(x,!1),f(k,{},!0);return}let A=!1;return yo(z).then(h=>{A||(f(m,h.options,!0),f(x,h.degraded,!0),f(k,Object.fromEntries(h.options.map(c=>[c.key,c.default])),!0))}).catch(()=>{A||(f(m,[],!0),f(x,!0),f(k,{},!0))}),()=>{A=!0}});async function b(){if(!Number.isFinite(e(s))||e(s)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}const z={n:e(s),nt:e(i),maxParallel:e(o)||null,backend:e(d)||null,options:e(d)?e(k):void 0};vo(z),ot(z)}{const z=c=>{var C=Vo(),R=G(C);Pe(R,{variant:"secondary",onclick:()=>ot(null),children:(w,$)=>{we();var g=Ve("Cancel");u(w,g)},$$slots:{default:!0}});var p=E(R,2);Pe(p,{variant:"run",onclick:b,children:(w,$)=>{we();var g=Ve();ee(()=>ae(g,e(d)?`Run on ${e(d)}`:"Run")),u(w,g)},$$slots:{default:!0}}),u(c,C)};let A=V(()=>r.cases.length),h=V(()=>r.cases.length>1?"s":"");hr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(A)??""} case${e(h)??""} selected`},onConfirm:b,footer:z,children:(c,C)=>{var R=ei(),p=G(R),w=_(p);Re(w,{text:"MPI Ranks (n)",children:(K,re)=>{var y=Uo();Ye(y),tt(y,()=>e(s),S=>f(s,S)),u(K,y)}});var $=E(w,2);Re($,{text:"OMP Threads (nt)",children:(K,re)=>{var y=Bo();Ye(y),tt(y,()=>e(i),S=>f(i,S)),u(K,y)}});var g=E($,2);Re(g,{text:"Max Parallel",children:(K,re)=>{var y=qo();Ye(y),tt(y,()=>e(o),S=>f(o,S)),u(K,y)}}),v(p);var N=E(p,2);{var I=K=>{var re=Wo(),y=_(re);Re(y,{text:"Run on",children:(S,O)=>{var F=Go(),M=_(F);M.value=M.__value="";var L=E(M);He(L,16,()=>l,B=>B,(B,te)=>{var ie=Ko(),W=_(ie,!0);v(ie);var ne={};ee(()=>{ae(W,te),ne!==(ne=te)&&(ie.value=(ie.__value=te)??"")}),u(B,ie)}),v(F),Zr(F,()=>e(d),B=>f(d,B)),u(S,F)}}),v(re),u(K,re)};Y(N,K=>{l.length&&K(I)})}var T=E(N,2);{var q=K=>{var re=Xo(),y=E(_(re)),S=_(y,!0);v(y);var O=E(y),F=E(O),M=_(F,!0);v(F),we(),v(re),ee(()=>{ae(S,r.cases.length),ae(O,` case${r.cases.length>1?"s":""} to `),ae(M,e(d))}),u(K,re)};Y(T,K=>{e(d)&&K(q)})}var H=E(T,2);{var j=K=>{var re=Zo();He(re,21,()=>e(m),y=>y.key,(y,S)=>{Re(y,{get text(){return e(S).label},children:(O,F)=>{var M=Qo();He(M,21,()=>e(S).choices,([L,B])=>L,(L,B)=>{var te=V(()=>ga(e(B),2));let ie=()=>e(te)[0],W=()=>e(te)[1];var ne=Yo(),oe=_(ne,!0);v(ne);var de={};ee(()=>{ae(oe,W()),de!==(de=ie())&&(ne.value=(ne.__value=ie())??"")}),u(L,ne)}),v(M),Zr(M,()=>e(k)[e(S).key],L=>e(k)[e(S).key]=L),u(O,M)}})}),v(re),u(K,re)};Y(H,K=>{e(d)&&e(m).length&&K(j)})}var U=E(H,2);{var X=K=>{var re=Jo(),y=_(re);v(re),ee(()=>ae(y,`Could not reach ${e(d)??""} to list what is available. The run will use the defaults.`)),u(K,re)};Y(U,K=>{e(d)&&e(x)&&K(X)})}u(c,R)},$$slots:{footer:!0,default:!0}})}Ae()}var ri=P("<!> <!>",1),ni=P('<input type="number" min="1" step="1"/>'),ai=P('<input type="number" min="1" step="1"/>'),si=P('<input type="number" min="0" step="1"/>'),oi=P("<select><option>Iterations</option><option>Physical time</option></select>"),ii=P('<input type="number"/>'),li=P('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function ci(t,r){Me(r,!0);const a=go(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=D(ce(a.n)),i=D(ce(a.nt)),o=D(ce(n)),l=D(ce(a.mode)),d=D(ce(a.value)),m=V(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),x=V(()=>e(l)==="iterations"?"1":"any"),k=V(()=>e(l)==="iterations"?"1":"0");async function b(){if(!Number.isFinite(e(s))||e(s)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await Xe("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await Xe("Iterations must be an integer.","Invalid value");return}const z={n:e(s),nt:e(i),maxParallel:e(o)||null,restartMode:e(l),restartValue:e(d)};ho({n:e(s),nt:e(i),maxParallel:e(o)||null,mode:e(l),value:e(d)}),ot(z)}{const z=c=>{var C=ri(),R=G(C);Pe(R,{variant:"secondary",onclick:()=>ot(null),children:(w,$)=>{we();var g=Ve("Cancel");u(w,g)},$$slots:{default:!0}});var p=E(R,2);Pe(p,{variant:"warning",onclick:b,children:(w,$)=>{we();var g=Ve("Restart");u(w,g)},$$slots:{default:!0}}),u(c,C)};let A=V(()=>r.cases.length),h=V(()=>r.cases.length>1?"s":"");hr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(A)??""} case${e(h)??""} selected`},onConfirm:b,footer:z,children:(c,C)=>{var R=li(),p=G(R),w=_(p);Re(w,{text:"MPI Ranks (n)",children:(q,H)=>{var j=ni();Ye(j),tt(j,()=>e(s),U=>f(s,U)),u(q,j)}});var $=E(w,2);Re($,{text:"OMP Threads (nt)",children:(q,H)=>{var j=ai();Ye(j),tt(j,()=>e(i),U=>f(i,U)),u(q,j)}});var g=E($,2);Re(g,{text:"Max Parallel",children:(q,H)=>{var j=si();Ye(j),tt(j,()=>e(o),U=>f(o,U)),u(q,j)}}),v(p);var N=E(p,2),I=_(N);Re(I,{text:"Stop criterion",children:(q,H)=>{var j=oi(),U=_(j);U.value=U.__value="iterations";var X=E(U);X.value=X.__value="physical_time",v(j),Zr(j,()=>e(l),K=>f(l,K)),u(q,j)}});var T=E(I,2);Re(T,{get text(){return e(m)},children:(q,H)=>{var j=ii();Ye(j),ee(()=>{ke(j,"min",e(k)),ke(j,"step",e(x))}),tt(j,()=>e(d),U=>f(d,U)),u(q,j)}}),v(N),u(c,R)},$$slots:{footer:!0,default:!0}})}Ae()}function Le(t,r){let a=me(r,"size",3,14);var n=be(),s=G(n);Ss(s,()=>r.icon,(i,o)=>{o(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const ui={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const di=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const Dn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var fi=Ht("<svg><!><!></svg>");function Be(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]),n=Oe(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let s=me(r,"name",8,void 0),i=me(r,"color",8,"currentColor"),o=me(r,"size",8,24),l=me(r,"strokeWidth",8,2),d=me(r,"absoluteStrokeWidth",8,!1),m=me(r,"iconNode",24,()=>[]);Ms();var x=fi();Tn(x,(z,A,h)=>({...ui,...z,...n,width:o(),height:o(),stroke:i(),"stroke-width":A,class:h}),[()=>di(n)?void 0:{"aria-hidden":"true"},()=>(Ut(d()),Ut(l()),Ut(o()),Mr(()=>d()?Number(l())*24/Number(o()):l())),()=>(Ut(Dn),Ut(s()),Ut(a),Mr(()=>Dn("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var k=_(x);He(k,1,m,dn,(z,A)=>{var h=V(()=>ga(e(A),2));let c=()=>e(h)[0],C=()=>e(h)[1];var R=be(),p=G(R);Is(p,c,!0,(w,$)=>{Tn(w,()=>({...C()}))}),u(z,R)});var b=E(k);je(b,r,"default",{}),v(x),u(t,x),Ae()}function vi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Be(t,Ue({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function gi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Be(t,Ue({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function hi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Be(t,Ue({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pn(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Be(t,Ue({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Be(t,Ue({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function mi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Be(t,Ue({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function _i(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Be(t,Ue({name:"circle-x"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pr(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Be(t,Ue({name:"download"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function bi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Be(t,Ue({name:"droplets"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function xi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Be(t,Ue({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function yi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Be(t,Ue({name:"external-link"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function wi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Be(t,Ue({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function ki(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Be(t,Ue({name:"pause"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ci(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Be(t,Ue({name:"pen-line"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Si(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Be(t,Ue({name:"pencil"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Sa(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Be(t,Ue({name:"play"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function $i(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Be(t,Ue({name:"plus"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function er(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Be(t,Ue({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Pi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Be(t,Ue({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ei(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Be(t,Ue({name:"save"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ri(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Be(t,Ue({name:"settings"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ni(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Be(t,Ue({name:"trash-2"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);je(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}var Mi=P('<li role="option"> </li>'),Ai=P('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Ti=P('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Me(r,!0);let a=me(r,"value",3,""),n=me(r,"placeholder",3,"Select..."),s=me(r,"class",3,""),i=me(r,"buttonClass",3,""),o=D(!1),l=D(void 0),d=D(void 0),m=D(""),x=V(()=>{var T;return((T=r.options.find(q=>q.value===a()))==null?void 0:T.label)??n()});function k(T){var q;f(o,!1),(q=r.onchange)==null||q.call(r,T)}function b(){if(!e(l)||!e(d))return;const T=e(l).getBoundingClientRect(),q=e(d).offsetHeight,H=4,j=window.innerHeight-T.bottom-H,X=j<q&&T.top-H>j?T.top-H-q:T.bottom+H,K=Math.min(T.left,window.innerWidth-T.width);f(m,`position:fixed; top:${X}px; left:${K}px; width:${T.width}px; z-index:9999;`)}async function z(){f(o,!e(o)),e(o)&&(await Et(),b())}function A(T){T.key==="Escape"&&f(o,!1)}function h(T){e(o)&&e(l)&&!e(l).contains(T.target)&&e(d)&&!e(d).contains(T.target)&&f(o,!1)}var c=Ti();rt("mousedown",it,h),rt("keydown",it,A),rt("scroll",it,()=>{e(o)&&f(o,!1)});var C=G(c),R=_(C),p=_(R),w=_(p,!0);v(p);var $=E(p,2),g=_($);Le(g,{get icon(){return pn},size:14}),v($),v(R),nt(R,T=>f(l,T),()=>e(l)),v(C);var N=E(C,2);{var I=T=>{Jt(T,{children:(q,H)=>{var j=Ai();He(j,21,()=>r.options,U=>U.value,(U,X)=>{var K=Mi();ke(K,"tabindex",0);var re=_(K,!0);v(K),ee(()=>{ke(K,"aria-selected",e(X).value===a()),Se(K,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(X).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ae(re,e(X).label)}),ue("mousedown",K,y=>{y.stopPropagation(),k(e(X).value)}),u(U,K)}),v(j),nt(j,U=>f(d,U),()=>e(d)),ee(()=>Ze(j,e(m))),u(q,j)}})};Y(N,T=>{e(o)&&T(I)})}ee(()=>{Se(C,1,`relative inline-flex ${s()??""}`),Se(R,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),ke(R,"aria-expanded",e(o)),ae(w,e(x)),Se($,1,`text-muted shrink-0 transition-transform duration-150 ${e(o)?"rotate-180":""}`)}),ue("mousedown",R,T=>{T.stopPropagation(),z()}),u(t,c),Ae()}Ge(["mousedown"]);var Li=Ht('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Fi=P('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),Ii=P('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),zi=P('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Wt(t,r){Me(r,!0);let a=me(r,"selected",19,()=>[]),n=me(r,"placeholder",3,"Select..."),s=me(r,"class",3,""),i=D(!1),o=D(void 0),l=D(void 0),d=D(""),m=V(()=>new Set(a())),x=V(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(H=>{var j;return((j=r.options.find(U=>U.value===H))==null?void 0:j.label)??H}).join(", "):`${a().length} selected`);function k(H){var U;const j=new Set(e(m));j.has(H)?j.delete(H):j.add(H),(U=r.onchange)==null||U.call(r,[...j])}function b(){var H;(H=r.onchange)==null||H.call(r,r.options.map(j=>j.value))}function z(){var H;(H=r.onchange)==null||H.call(r,[])}function A(){if(!e(o)||!e(l))return;const H=e(o).getBoundingClientRect(),j=e(l).offsetHeight,U=4,X=window.innerHeight-H.bottom-U,re=X<j&&H.top-U>X?H.top-U-j:H.bottom+U,y=Math.min(H.left,window.innerWidth-H.width);f(d,`position:fixed; top:${re}px; left:${y}px; min-width:${H.width}px; z-index:9999;`)}async function h(){f(i,!e(i)),e(i)&&(await Et(),A())}function c(H){e(i)&&e(o)&&!e(o).contains(H.target)&&e(l)&&!e(l).contains(H.target)&&f(i,!1)}function C(H){H.key==="Escape"&&f(i,!1)}var R=zi();rt("mousedown",it,c),rt("keydown",it,C),rt("scroll",it,()=>{e(i)&&f(i,!1)});var p=G(R),w=_(p),$=_(w),g=_($,!0);v($);var N=E($,2),I=_(N);Le(I,{get icon(){return pn},size:14}),v(N),v(w),nt(w,H=>f(o,H),()=>e(o)),v(p);var T=E(p,2);{var q=H=>{Jt(H,{children:(j,U)=>{var X=Ii(),K=_(X),re=_(K),y=E(re,2);v(K);var S=E(K,2);He(S,17,()=>r.options,O=>O.value,(O,F)=>{var M=Fi(),L=_(M),B=_(L);{var te=oe=>{var de=Li();u(oe,de)},ie=V(()=>e(m).has(e(F).value));Y(B,oe=>{e(ie)&&oe(te)})}v(L);var W=E(L,2),ne=_(W,!0);v(W),v(M),ee(oe=>{Se(L,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${oe??""}`),ae(ne,e(F).label)},[()=>e(m).has(e(F).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),ue("mousedown",M,oe=>{oe.stopPropagation(),k(e(F).value)}),u(O,M)}),v(X),nt(X,O=>f(l,O),()=>e(l)),ee(()=>Ze(X,e(d))),ue("mousedown",re,O=>{O.stopPropagation(),b()}),ue("mousedown",y,O=>{O.stopPropagation(),z()}),u(j,X)}})};Y(T,H=>{e(i)&&H(q)})}ee(()=>{Se(p,1,`relative inline-flex ${s()??""}`),ke(w,"aria-expanded",e(i)),ae(g,e(x)),Se(N,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),ue("mousedown",w,H=>{H.stopPropagation(),h()}),u(t,R),Ae()}Ge(["mousedown"]);var Di=P("<!> <!>",1),Oi=P('<input type="number" min="0" step="1" class="w-[80px]"/>'),Hi=P('<span class="text-xs text-muted">Loading...</span>'),ji=P('<span class="text-xs text-muted">No folders found</span>'),Vi=P('<div class="mb-3"><!></div>'),Ui=P('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Bi(t,r){Me(r,!0);const a=po();let n=D("keep_latest"),s=D(ce(a.keepLast)),i=D(ce([])),o=D(ce([])),l=D(!0),d=V(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const m=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let x=V(()=>e(i).map(b=>({value:b,label:b})));Jn(async()=>{try{f(i,await Ro(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function k(){if(e(d)&&e(o).length===0){await Xe("Please select at least one RESU folder.","Missing selection");return}const b={action:e(n)};e(n)==="keep_latest"?(b.keepLast=e(s),mo({keepLast:e(s)})):e(n)==="delete_all"?b.keepLast=0:e(n)==="keep_folder"?b.keepResu=e(o):e(n)==="delete_folder"&&(b.deleteResu=e(o)),ot(b)}{const b=h=>{var c=Di(),C=G(c);Pe(C,{variant:"secondary",onclick:()=>ot(null),children:(p,w)=>{we();var $=Ve("Cancel");u(p,$)},$$slots:{default:!0}});var R=E(C,2);Pe(R,{variant:"primary",onclick:k,children:(p,w)=>{we();var $=Ve("Clean");u(p,$)},$$slots:{default:!0}}),u(h,c)};let z=V(()=>r.cases.length),A=V(()=>r.cases.length>1?"s":"");hr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(z)??""} case${e(A)??""} selected`},footer:b,children:(h,c)=>{var C=Ui(),R=G(C),p=_(R);Re(p,{text:"Action",children:(I,T)=>{lt(I,{class:"w-[200px]",get options(){return m},get value(){return e(n)},onchange:q=>f(n,q,!0)})}});var w=E(p,2);{var $=I=>{Re(I,{text:"Keep last",children:(T,q)=>{var H=Oi();Ye(H),tt(H,()=>e(s),j=>f(s,j)),u(T,H)}})};Y(w,I=>{e(n)==="keep_latest"&&I($)})}v(R);var g=E(R,2);{var N=I=>{var T=Vi(),q=_(T);Re(q,{text:"RESU folders",children:(H,j)=>{var U=be(),X=G(U);{var K=S=>{var O=Hi();u(S,O)},re=S=>{var O=ji();u(S,O)},y=S=>{Wt(S,{class:"w-full",get options(){return e(x)},get selected(){return e(o)},onchange:O=>f(o,O,!0),placeholder:"Select folders..."})};Y(X,S=>{e(l)?S(K):e(i).length===0?S(re,1):S(y,-1)})}u(H,U)}}),v(T),u(I,T)};Y(g,I=>{e(d)&&I(N)})}u(h,C)},$$slots:{footer:!0,default:!0}})}Ae()}function qi(t,r){Me(r,!0);let a=V(Xs);var n=be(),s=G(n);{var i=m=>{ti(m,{get cases(){return e(a).props.cases}})},o=m=>{ci(m,{get cases(){return e(a).props.cases}})},l=m=>{Bi(m,{get cases(){return e(a).props.cases}})},d=m=>{lo(m,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Y(s,m=>{e(a).type==="run"?m(i):e(a).type==="restart"?m(o,1):e(a).type==="clean"?m(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&m(d,3)})}u(t,n),Ae()}let fr=D(ce([])),Ki=0;function Gi(){return e(fr)}function Cr(t,r="success",a=3500){const n=++Ki;f(fr,[...e(fr),{id:n,message:t,variant:r}],!0),setTimeout(()=>$a(n),a)}function $a(t){f(fr,e(fr).filter(r=>r.id!==t),!0)}var Wi=P('<div role="status"> </div>'),Xi=P('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Yi(t,r){Me(r,!0);let a=V(Gi);Jt(t,{children:(n,s)=>{var i=Xi();He(i,21,()=>e(a),o=>o.id,(o,l)=>{var d=Wi(),m=_(d,!0);v(d),ee(()=>{Se(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ae(m,e(l).message)}),ue("click",d,()=>$a(e(l).id)),u(o,d)}),v(i),u(n,i)}}),Ae()}Ge(["click"]);var Qi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Zi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Ji=P('<span role="checkbox"><!></span>'),el=P("<span> </span><!>",1),tl=P("<!><span> </span>",1),rl=P('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function Ot(t,r){Me(r,!0);const a=h=>{var c=Ji(),C=_(c);{var R=w=>{var $=Qi();ee(()=>Ze($,`width: ${o()-4}px; height: ${o()-4}px;`)),u(w,$)},p=w=>{var $=Zi();ee(()=>Ze($,`width: ${o()-4}px; height: ${o()-4}px;`)),u(w,$)};Y(C,w=>{n()&&!s()?w(R):s()&&w(p,1)})}v(c),ee(()=>{Se(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||s()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${o()??""}px; height: ${o()??""}px;`),ke(c,"aria-checked",s()?"mixed":n()),ke(c,"aria-disabled",i()),ke(c,"tabindex",i()?-1:0)}),ue("click",c,m),ue("keydown",c,x),u(h,c)};let n=me(r,"checked",3,!1),s=me(r,"indeterminate",3,!1),i=me(r,"disabled",3,!1),o=me(r,"size",3,16),l=me(r,"label",3,""),d=me(r,"labelFirst",3,!1);function m(h){var C;if(h.stopPropagation(),i())return;const c=s()?!0:!n();(C=r.onchange)==null||C.call(r,c)}function x(h){(h.key===" "||h.key==="Enter")&&(h.preventDefault(),h.stopPropagation(),m(h))}var k=be(),b=G(k);{var z=h=>{var c=rl(),C=_(c);{var R=w=>{var $=el(),g=G($),N=_(g,!0);v(g);var I=E(g);a(I),ee(()=>ae(N,l())),u(w,$)},p=w=>{var $=tl(),g=G($);a(g);var N=E(g),I=_(N,!0);v(N),ee(()=>ae(I,l())),u(w,$)};Y(C,w=>{d()?w(R):w(p,-1)})}v(c),ue("click",c,m),ue("keydown",c,x),u(h,c)},A=h=>{a(h)};Y(b,h=>{l()?h(z):h(A,-1)})}u(t,k),Ae()}Ge(["click","keydown"]);function mn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Hr(t,r){localStorage.setItem(t,JSON.stringify(r))}const tn=new Map;function mr(t,r,a){vt(t),tn.set(t,setInterval(r,a))}function vt(t){const r=tn.get(t);r!==void 0&&(clearInterval(r),tn.delete(t))}const Lt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},nl=["status","plot","probe","tail","errors"],Wr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ir=mn("csauto_refresh_rates",{});let bt=D(ce({status:ir.status??Lt.status,tail:ir.tail??Lt.tail,plot:ir.plot??Lt.plot,probe:ir.probe??Lt.probe,errors:ir.errors??Lt.errors}));function al(){return e(bt)}function sl(t,r){f(bt,{...e(bt),[t]:r},!0),Hr("csauto_refresh_rates",e(bt))}function ol(){return e(bt).status}function On(){return e(bt).tail}function Hn(){return e(bt).plot}function il(){return e(bt).probe}function jn(){return e(bt).errors}const rn=new Set;function _r(t){return rn.add(t),()=>rn.delete(t)}function ll(){rn.forEach(t=>t())}const nn=mn("csauto_autorefresh_enabled",{});function tr(t){return nn[t]??!0}function rr(t,r){nn[t]=r,Hr("csauto_autorefresh_enabled",nn)}var cl=P("<!> <!>",1),ul=P('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),dl=P('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),fl=P('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function vl(t,r){Me(r,!0);let a=D(ce(wa())),n=D(ce({...al()})),s=D(!0),i=D(!1);Ne(()=>{Ho().then(m=>{f(s,m.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function o(m){const{min:x}=Wr[m];let k=e(n)[m];(typeof k!="number"||isNaN(k))&&(k=Lt[m]),f(n,{...e(n),[m]:Math.max(x,Math.round(k))},!0)}function l(m,x){const k=x.target,b=k.value.replace(/[^0-9]/g,""),z=parseInt(b,10);isNaN(z)?b===""&&f(n,{...e(n),[m]:Wr[m].min},!0):f(n,{...e(n),[m]:z},!0),k.value=String(e(n)[m])}function d(){ka(e(a));for(const m of Object.keys(e(n)))o(m),sl(m,e(n)[m]);e(i)&&jo(e(s)).catch(()=>{}),r.onClose()}hr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:x=>{var k=cl(),b=G(k);Pe(b,{variant:"secondary",get onclick(){return r.onClose},children:(A,h)=>{we();var c=Ve("Cancel");u(A,c)},$$slots:{default:!0}});var z=E(b,2);Pe(z,{variant:"primary",onclick:d,children:(A,h)=>{we();var c=Ve("Save");u(A,c)},$$slots:{default:!0}}),u(x,k)},children:(x,k)=>{var b=fl(),z=G(b),A=E(_(z),2);Ye(A),v(z);var h=E(z,2),c=_(h),C=E(_(c),2);v(c);var R=E(c,2);He(R,20,()=>nl,$=>$,($,g)=>{const N=V(()=>Wr[g]);var I=ul(),T=_(I),q=_(T),H=_(q,!0);v(q);var j=E(q,2),U=_(j);v(j),v(T);var X=E(T,2),K=_(X);Ye(K),we(2),v(X),v(I),ee(()=>{ae(H,e(N).label),ae(U,`min ${e(N).min??""}ms`),fn(K,e(n)[g])}),ue("input",K,re=>l(g,re)),rt("blur",K,()=>o(g)),u($,I)}),v(R),v(h);var p=E(h,2);{var w=$=>{var g=dl(),N=E(_(g),2);Ot(N,{get checked(){return e(s)},onchange:I=>f(s,I,!0),label:"Send anonymous usage statistics"}),v(g),u($,g)};Y(p,$=>{e(i)&&$(w)})}tt(A,()=>e(a),$=>f(a,$)),ue("click",C,()=>f(n,{...Lt},!0)),u(x,b)},$$slots:{footer:!0,default:!0}}),Ae()}Ge(["click","input"]);const gl=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,hl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";var pl=P('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),ml=P('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),_l=P('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),bl=P('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function xl(t,r){Me(r,!0);let a=V(()=>r.shownCases!==r.totalCases),n=D(!1);var s=bl(),i=G(s),o=_(i),l=_(o);{var d=F=>{var M=pl();ee(()=>ke(M,"src",gl)),u(F,M)},m=V(()=>{var F;return!Ft()||((F=Ft())==null?void 0:F.solver)==="code_saturne"}),x=F=>{var M=ml();ee(()=>ke(M,"src",hl)),u(F,M)},k=V(()=>{var F;return((F=Ft())==null?void 0:F.solver)==="code_aster"}),b=F=>{var M=_l(),L=_(M,!0);v(M),ee(B=>ae(L,B),[()=>{var B;return(B=Ft())==null?void 0:B.solver}]),u(F,M)};Y(l,F=>{e(m)?F(d):e(k)?F(x,1):F(b,-1)})}v(o);var z=E(o,2),A=_(z),h=_(A),c=_(h);{var C=F=>{var M=Ve();ee(()=>ae(M,`${r.shownCases??""}/`)),u(F,M)};Y(c,F=>{e(a)&&F(C)})}var R=E(c,1,!0);v(h);var p=E(h,2),w=_(p,!0);v(p),v(A);var $=E(A,2),g=_($),N=_(g);{var I=F=>{var M=Ve();ee(()=>ae(M,`${r.shownRunning??""}/`)),u(F,M)};Y(N,F=>{e(a)&&F(I)})}var T=E(N,1,!0);v(g),we(2),v($);var q=E($,2),H=_(q),j=_(H);{var U=F=>{var M=Ve();ee(()=>ae(M,`${r.shownConverged??""}/`)),u(F,M)};Y(j,F=>{e(a)&&F(U)})}var X=E(j,1,!0);v(H),we(2),v(q),v(z);var K=E(z,2),re=_(K),y=_(re);Le(y,{get icon(){return Ri},size:18}),v(re),v(K),v(i);var S=E(i,2);{var O=F=>{vl(F,{onClose:()=>f(n,!1)})};Y(S,F=>{e(n)&&F(O)})}ee(()=>{ae(R,r.totalCases),ae(w,r.totalCases===1?"case":"cases"),ae(T,r.totalRunning),ae(X,r.totalConverged)}),ue("click",re,()=>f(n,!0)),u(t,s),Ae()}Ge(["click"]);const yl=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var wl=P('<div class="text-xs text-muted font-normal"> </div>'),kl=P('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),Cl=P("<div><!> <!></div>"),Sl=P('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),$l=P('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),Pl=P('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function jt(t,r){let a=me(r,"eyebrow",3,""),n=me(r,"title",3,""),s=me(r,"wide",3,!1);var i=Pl(),o=E(_(i),2);{var l=m=>{var x=$l(),k=_(x);{var b=c=>{var C=be(),R=G(C);ft(R,()=>r.titleSlot),u(c,C)},z=c=>{var C=Cl(),R=_(C);{var p=g=>{var N=wl(),I=_(N,!0);v(N),ee(()=>ae(I,a())),u(g,N)};Y(R,g=>{a()&&g(p)})}var w=E(R,2);{var $=g=>{var N=kl(),I=_(N,!0);v(N),ee(()=>ae(I,n())),u(g,N)};Y(w,g=>{n()&&g($)})}v(C),u(c,C)};Y(k,c=>{r.titleSlot?c(b):c(z,-1)})}var A=E(k,2);{var h=c=>{var C=Sl(),R=_(C);ft(R,()=>r.actions),v(C),u(c,C)};Y(A,c=>{r.actions&&c(h)})}v(x),u(m,x)};Y(o,m=>{(a()||n()||r.titleSlot||r.actions)&&m(l)})}var d=E(o,2);ft(d,()=>r.children),v(i),ee(()=>{Se(i,1,`${s()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),ke(i,"id",r.id)}),u(t,i)}function nr(t,r){Me(r,!0);let a=me(r,"checked",15,!0);Ne(()=>{a()?mr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),vr(()=>vt(r.name)),Ot(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Ae()}var El=P("<!> ",1),Rl=P('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),Nl=P('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),Ml=P('<span class="inline-flex"><!></span> <!>',1);function Al(t,r){Me(r,!0);let a=me(r,"label",3,"More"),n=D(!1),s=D(void 0),i=D(void 0),o=D("");function l(){if(!e(s)||!e(i))return;const c=e(s).getBoundingClientRect(),C=e(i).offsetHeight,R=4,p=window.innerHeight-c.bottom-R,$=p<C&&c.top-R>p?c.top-R-C:c.bottom+R,g=Math.min(c.left,window.innerWidth-180);f(o,`position:fixed; top:${$}px; left:${g}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Et(),l())}function m(c){c.disabled||(f(n,!1),c.onClick())}function x(c){e(n)&&e(s)&&!e(s).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var k=Ml();rt("mousedown",it,x),rt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),rt("scroll",it,()=>{e(n)&&f(n,!1)});var b=G(k),z=_(b);Pe(z,{variant:"secondary",size:"sm",onclick:d,children:(c,C)=>{var R=El(),p=G(R);Le(p,{get icon(){return xi}});var w=E(p);ee(()=>ae(w,` ${a()??""}`)),u(c,R)},$$slots:{default:!0}}),v(b),nt(b,c=>f(s,c),()=>e(s));var A=E(b,2);{var h=c=>{Jt(c,{children:(C,R)=>{var p=Nl();He(p,21,()=>r.items,w=>w.label,(w,$)=>{var g=Rl(),N=_(g),I=_(N);Le(I,{get icon(){return e($).icon},size:14});var T=E(I);v(N),v(g),ee(()=>{N.disabled=e($).disabled,ke(N,"aria-disabled",e($).disabled),Se(N,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e($).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ae(T,` ${e($).label??""}`)}),ue("mousedown",N,q=>{q.stopPropagation(),m(e($))}),u(w,g)}),v(p),nt(p,w=>f(i,w),()=>e(i)),ee(()=>Ze(p,e(o))),u(C,p)}})};Y(A,c=>{e(n)&&c(h)})}u(t,k),Ae()}Ge(["mousedown"]);const It=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"},{key:"backend_execution_time_s",label:"Cloud Time (s)"},{key:"backend_core_count",label:"Cloud Cores"}];let Xt=D(ce([])),Tr=D(ce([])),pt=D(ce(new Set)),br=D(""),_n=D(""),Rt=D(ce([])),st=D(ce([])),Yt=D(""),Pa=D(!0),Tl=D(!0),Kt=D(ce(mn("csauto_status_views",{}))),bn=D(ce(localStorage.getItem("csauto_status_view_selected")??""));function xn(){return e(Xt)}function yn(){return e(Tr)}function Bt(){return e(pt)}function Vn(){return e(br)}function an(){return e(_n)}function Ll(){return e(Rt)}function Fl(){return e(Rt).filter(t=>e(Tr).includes(t))}function Il(){return e(Rt).filter(t=>It.some(r=>r.key===t))}function zl(){return e(st)}function Dl(){return e(Yt)}function Ol(){return e(Pa)}function Un(){return e(Kt)}function Hl(){return e(bn)}function jl(t){f(Xt,t,!0)}function Vl(t){const r=e(Tr).length===0&&t.length>0;f(Tr,t,!0),r&&e(Rt).length===0&&f(Rt,[...t,...It.map(a=>a.key)],!0)}function Ul(t){f(br,t,!0)}function Bn(t){f(Rt,t,!0)}function Bl(t){f(Yt,t,!0)}function ql(t){f(Pa,t,!0)}function Kl(t){f(Tl,t,!0)}function wn(t){f(bn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function sn(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(br,t,!0),f(_n,t,!0)}function Ea(t){f(pt,new Set([t]),!0),f(br,t,!0),f(_n,t,!0)}function on(t,r,a){const n=a.indexOf(t),s=a.indexOf(r);if(n<0||s<0)return;const[i,o]=n<s?[n,s]:[s,n],l=new Set(e(pt));for(let d=i;d<=o;d++)l.add(a[d]);f(pt,l,!0),f(br,r,!0)}function qn(t){f(pt,new Set(t),!0)}function Kn(){f(pt,new Set,!0)}function Gl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function Ra(){if(!e(Yt).trim())return e(Xt);const t=e(Yt).toLowerCase().trim().split(/\s+/);return e(Xt).filter(r=>{const a=Gl(r);return t.every(n=>a.includes(n))})}function Wl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Gn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;if(r==="backend_execution_time_s")return t.backend_execution_time_s??0;if(r==="backend_core_count")return t.backend_core_count??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Wl(a):""}function Xl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Na(){const t=Ra();return e(st).length===0?t:[...t].sort((r,a)=>{for(const n of e(st)){const s=Gn(r,n.key),i=Gn(a,n.key),o=Xl(s,i);if(o!==0)return n.dir==="asc"?o:-o}return 0})}function Rr(){return Na().map(t=>t.case_id)}function Yl(t,r){const a=e(st).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(st)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(st,n,!0)}else f(st,[...e(st),{key:t,dir:"asc"}],!0);else a>=0&&e(st).length===1?f(st,[{key:t,dir:e(st)[0].dir==="asc"?"desc":"asc"}],!0):f(st,[{key:t,dir:"asc"}],!0)}function Ql(){return{visibleColumns:[...e(Rt)],search:e(Yt),sorts:e(st).map(t=>({...t}))}}function Zl(t){f(Rt,[...t.visibleColumns],!0),f(Yt,t.search,!0),f(st,t.sorts.map(r=>({...r})),!0)}function Jl(t){f(Kt,{...e(Kt),[t]:Ql()},!0),Hr("csauto_status_views",e(Kt)),wn(t)}function ec(t){const r={...e(Kt)};delete r[t],f(Kt,r,!0),Hr("csauto_status_views",r),e(bn)===t&&wn("")}function Sr(){const t=new Set;for(const r of e(Xt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Wn(){for(const t of e(Xt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function tc(t,r){const a=r.length,n=t.length,s=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,o=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:s,shownRunning:i,totalConverged:o,shownConverged:l}}var rc=P('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),nc=P('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function ac(t,r){Me(r,!0);let a=me(r,"initialName",3,""),n=V(yn),s=D(ce(a())),i=D(ce(new Set(r.initialColumns??[...e(n),...It.map(U=>U.key)])));function o(U){const X=new Set(e(i));X.has(U)?X.delete(U):X.add(U),f(i,X,!0)}function l(U,X){const K=new Set(e(i));U.forEach(re=>X?K.add(re):K.delete(re)),f(i,K,!0)}function d(){const U=e(s).trim();U&&r.onSave(U,[...e(i)])}function m(U){U.key==="Escape"&&r.onCancel()}function x(U){U.target.dataset.backdrop!==void 0&&r.onCancel()}let k=D(void 0);Ne(()=>{var U,X;(U=e(k))==null||U.focus(),(X=e(k))==null||X.select()});var b=nc(),z=_(b),A=_(z),h=_(A,!0);v(A);var c=E(A,2),C=E(_(c),2);Ye(C),nt(C,U=>f(k,U),()=>e(k)),v(c);var R=E(c,2);{var p=U=>{var X=rc(),K=_(X),re=E(_(K),2),y=_(re),S=E(y,2);v(re),v(K);var O=E(K,2);He(O,20,()=>e(n),F=>F,(F,M)=>{{let L=V(()=>e(i).has(M));Ot(F,{get checked(){return e(L)},onchange:()=>o(M),size:14,get label(){return M}})}}),v(O),v(X),ue("click",y,()=>l(e(n),!0)),ue("click",S,()=>l(e(n),!1)),u(U,X)};Y(R,U=>{e(n).length>0&&U(p)})}var w=E(R,2),$=_(w),g=E(_($),2),N=_(g),I=E(N,2);v(g),v($);var T=E($,2);He(T,21,()=>It,U=>U.key,(U,X)=>{{let K=V(()=>e(i).has(e(X).key));Ot(U,{get checked(){return e(K)},onchange:()=>o(e(X).key),size:14,get label(){return e(X).label}})}}),v(T),v(w);var q=E(w,2),H=_(q);Pe(H,{variant:"secondary",get onclick(){return r.onCancel},children:(U,X)=>{we();var K=Ve("Cancel");u(U,K)},$$slots:{default:!0}});var j=E(H,2);{let U=V(()=>!e(s).trim());Pe(j,{variant:"primary",onclick:d,get disabled(){return e(U)},children:(X,K)=>{we();var re=Ve("Save");u(X,re)},$$slots:{default:!0}})}v(q),v(z),v(b),ee(()=>ae(h,r.mode==="create"?"New view":"Edit view")),ue("keydown",b,m),ue("click",b,x),tt(C,()=>e(s),U=>f(s,U)),ue("click",N,()=>l(It.map(U=>U.key),!0)),ue("click",I,()=>l(It.map(U=>U.key),!1)),u(t,b),Ae()}Ge(["keydown","click"]);var sc=P('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function oc(t,r){Me(r,!0);let a=V(()=>Object.keys(Un())),n=D(ce(Hl())),s=D(!1),i=D("create"),o=V(()=>[{value:"",label:"All columns"},...e(a).map($=>({value:$,label:$}))]);function l($){if(f(n,$,!0),wn($),$==="")Bn([...yn(),...It.map(g=>g.key)]);else{const g=Un();g[$]&&Zl(g[$])}}function d(){f(i,"edit"),f(s,!0)}function m(){f(i,"create"),f(s,!0)}function x($,g){Bn(g),e(i)==="edit"&&e(n)&&$!==e(n)&&ec(e(n)),Jl($),f(n,$,!0),f(s,!1)}function k(){f(s,!1)}var b=sc(),z=G(b),A=_(z);lt(A,{class:"w-[140px]",get options(){return e(o)},get value(){return e(n)},onchange:l});var h=E(A,2),c=_(h);Le(c,{get icon(){return Si},size:14}),v(h);var C=E(h,2),R=_(C);Le(R,{get icon(){return $i},size:14}),v(C),v(z);var p=E(z,2);{var w=$=>{Jt($,{children:(g,N)=>{{let I=V(()=>e(i)==="edit"?e(n):""),T=V(Ll);ac(g,{get mode(){return e(i)},get initialName(){return e(I)},get initialColumns(){return e(T)},onSave:x,onCancel:k})}}})};Y(p,$=>{e(s)&&$(w)})}ue("click",h,d),ue("click",C,m),u(t,b),Ae()}Ge(["click"]);var ic=P('<th><div class="flex items-center justify-center h-full"><!></div></th>'),lc=P("<th></th>"),cc=P('<span style="margin-left: 4px; font-size: 9px;"> </span>'),uc=P('<th role="button" tabindex="0"> <!></th>'),dc=P('<td><div class="flex items-center justify-center h-full"><!></div></td>'),fc=P("<td><span> </span></td>"),vc=P('<span class="text-muted"><!></span>'),gc=P('<td role="button" tabindex="0"><!></td>'),hc=P("<!> Open GUI",1),pc=P("<td><!></td>"),mc=P("<td> </td>"),_c=P("<tr></tr>"),bc=P('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function xc(t,r){Me(r,!0);let a=V(()=>r.rows.length>0&&r.rows.every(y=>e(m).has(y.case_id))),n=V(()=>r.rows.some(y=>e(m).has(y.case_id))),s=V(()=>e(n)&&!e(a)),i=V(Fl),o=V(()=>new Set(Il())),l=V(zl),d=V(Ol),m=V(Bt),x=V(()=>{const y=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(o).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],S=e(i).map(L=>({key:L,label:L,kind:"doe"})),F=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"},{key:"backend_execution_time_s",label:"Cloud Time (s)",kind:"calc"},{key:"backend_core_count",label:"Cloud Cores",kind:"calc"}].filter(L=>e(o).has(L.key)),M=cr("gui")?[{key:"_actions",label:"",kind:"meta",sticky:"right"}]:[];return[...y,...S,...F,...M]});function k(y){const S=e(l).findIndex(F=>F.key===y);if(S<0)return"";const O=e(l)[S].dir==="asc"?"▲":"▼";return e(l).length>1?`${O}${S+1}`:O}function b(y,S){y!=="_actions"&&Yl(y,S.ctrlKey||S.metaKey)}function z(y,S){S.shiftKey?on(an()||y,y,Rr()):S.ctrlKey||S.metaKey?sn(y):Ea(y)}function A(y,S){var F;const O=((F=y.status)==null?void 0:F.toUpperCase())??"";O!=="DONE"&&O!=="FAILED"||(S.preventDefault(),r.onContextMenu(y.case_id,S.clientX,S.clientY,y.convergence??""))}async function h(y){const S=y.note??"",O=await gn("Case note:",S,`Note — ${y.case_id}`,"",!0);if(O!==null)try{await zo(y.case_id,O)}catch(F){await Xe(`Failed to set note: ${F instanceof Error?F.message:F}`,"Error")}}async function c(y){try{await Oo(y)}catch(S){await Xe(`Failed to open GUI: ${S instanceof Error?S.message:S}`,"Error")}}function C(y,S){const O=(y==null?void 0:y.toUpperCase())??"";return(O==="DONE"||O==="FAILED")&&S==="converged"?"CONVERGED":(O==="DONE"||O==="FAILED")&&S==="not_converged"?"NOT CONVERGED":O}function R(y,S){const O=(y==null?void 0:y.toUpperCase())??"";return(O==="DONE"||O==="FAILED")&&S==="converged"?"status-converged":(O==="DONE"||O==="FAILED")&&S==="not_converged"?"status-not-converged":O==="RUNNING"?"status-running":O==="DONE"?"status-done":O==="FAILED"?"status-failed":O==="PREPARED"?"status-prepared":"status-unknown"}function p(y){return e(m).has(y.case_id)?"row-selected":""}function w(y,S){var O;return S.key==="case_id"?y.case_id:S.key==="nprocs"?y.nprocs!=null?String(y.nprocs):"":S.key==="nt"?y.nt!=null?String(y.nt):"":S.key==="last_iter"?y.last_iter!=null?String(y.last_iter):"":S.key==="duration"?y.duration??"":S.key==="last_mod"?$(y.last_mod):S.key==="resu_size_mb"?y.resu_size_mb!=null?String(y.resu_size_mb):"":S.key==="backend_execution_time_s"?y.backend_execution_time_s!=null?y.backend_execution_time_s.toFixed(1):"":S.key==="backend_core_count"?y.backend_core_count!=null?String(y.backend_core_count):"":S.kind==="doe"?((O=y.doe)==null?void 0:O[S.key])!=null&&String(y.doe[S.key])!==""?String(y.doe[S.key]):"—":""}function $(y){if(!y)return"";try{const S=new Date(y),O=new Date,F=S.toDateString()===O.toDateString(),M=new Date(O);M.setDate(M.getDate()-1);const L=S.toDateString()===M.toDateString(),B=S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return F?`Today ${B}`:L?`Yesterday ${B}`:S.toLocaleDateString([],{month:"short",day:"numeric"})+` ${B}`}catch{return y}}let g=D(ce({})),N=D(void 0);Ne(()=>{e(d),e(x),r.rows,!(!e(N)||!e(d))&&Et().then(()=>{if(!e(N))return;const y=Array.from(e(N).querySelectorAll("thead th.sticky-left")),S={};let O=0;y.forEach(F=>{const M=F.dataset.colKey??"";S[M]=O,O+=F.getBoundingClientRect().width}),f(g,S,!0)})});function I(y,S,O){const F=O&&y.key!=="_select"&&y.key!=="_actions"?["status-sortable"]:[];if(!O&&y.key==="case_id"&&F.push("case-id"),y.kind==="doe"&&F.push("status-col-doe"),!O&&y.key==="note"&&F.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&y.sticky==="left"&&F.push("sticky-left"),e(d)&&y.sticky==="right"&&F.push("sticky-right"),e(d)&&y.sticky==="left"){const M=e(x)[S+1];(!M||M.sticky!=="left")&&F.push("sticky-divider")}if(e(d)&&y.sticky==="right"){const M=e(x)[S-1];(!M||M.sticky!=="right")&&F.push("sticky-divider")}return F.join(" ")}function T(y,S){return I(y,S,!0)}function q(y,S){return I(y,S,!1)}function H(y){return!e(d)||!y.sticky?"":y.sticky==="right"?"position:sticky;right:0;":y.sticky==="left"&&y.key in e(g)?`position:sticky;left:${e(g)[y.key]}px;`:""}var j=bc(),U=_(j),X=_(U),K=_(X);He(K,23,()=>e(x),y=>y.key,(y,S,O)=>{var F=be(),M=G(F);{var L=ie=>{var W=ic(),ne=_(W),oe=_(ne);Ot(oe,{get checked(){return e(a)},get indeterminate(){return e(s)},get onchange(){return r.onToggleAll},size:14}),v(ne),v(W),ee((de,ve)=>{Se(W,1,`${de??""} !px-2.5 !py-0 w-9`),ke(W,"data-col-key",e(S).key),Ze(W,ve)},[()=>T(e(S),e(O)),()=>H(e(S))]),u(ie,W)},B=ie=>{var W=lc();ee((ne,oe)=>{Se(W,1,ne),ke(W,"data-col-key",e(S).key),Ze(W,oe)},[()=>dt(T(e(S),e(O))),()=>H(e(S))]),u(ie,W)},te=ie=>{var W=uc(),ne=_(W),oe=E(ne);{var de=se=>{var _e=cc(),he=_(_e,!0);v(_e),ee(Ee=>ae(he,Ee),[()=>k(e(S).key)]),u(se,_e)},ve=V(()=>k(e(S).key));Y(oe,se=>{e(ve)&&se(de)})}v(W),ee((se,_e)=>{Se(W,1,se),ke(W,"data-col-key",e(S).key),Ze(W,_e),ae(ne,`${e(S).label??""} `)},[()=>dt(T(e(S),e(O))),()=>H(e(S))]),ue("click",W,se=>b(e(S).key,se)),ue("keydown",W,se=>{(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),b(e(S).key,se))}),u(ie,W)};Y(M,ie=>{e(S).key==="_select"?ie(L):e(S).key==="_actions"?ie(B,1):ie(te,-1)})}u(y,F)}),v(K),v(X);var re=E(X);He(re,21,()=>r.rows,y=>y.case_id,(y,S)=>{var O=_c();He(O,23,()=>e(x),F=>F.key,(F,M,L)=>{var B=be(),te=G(B);{var ie=ve=>{var se=dc(),_e=_(se),he=_(_e);{let Ee=V(()=>e(m).has(e(S).case_id));Ot(he,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e(S).case_id),size:14})}v(_e),v(se),ee((Ee,pe)=>{Se(se,1,`${Ee??""} !px-2.5 !py-0 w-9`),ke(se,"data-col-key",e(M).key),Ze(se,pe)},[()=>q(e(M),e(L)),()=>H(e(M))]),u(ve,se)},W=ve=>{var se=fc(),_e=_(se),he=_(_e,!0);v(_e),v(se),ee((Ee,pe,Ie,ze)=>{Se(se,1,Ee),ke(se,"data-col-key",e(M).key),Ze(se,pe),Se(_e,1,`status-pill ${Ie??""}`),ae(he,ze)},[()=>dt(q(e(M),e(L))),()=>H(e(M)),()=>R(e(S).status,e(S).convergence),()=>C(e(S).status,e(S).convergence)]),u(ve,se)},ne=ve=>{var se=gc(),_e=_(se);{var he=pe=>{var Ie=Ve();ee(()=>ae(Ie,e(S).note)),u(pe,Ie)},Ee=pe=>{var Ie=vc(),ze=_(Ie);Le(ze,{get icon(){return Ci},size:12}),v(Ie),u(pe,Ie)};Y(_e,pe=>{e(S).note?pe(he):pe(Ee,-1)})}v(se),ee((pe,Ie)=>{Se(se,1,pe),ke(se,"data-col-key",e(M).key),Ze(se,Ie),ke(se,"title",e(S).note||"Add note")},[()=>dt(q(e(M),e(L))),()=>H(e(M))]),ue("click",se,pe=>{pe.stopPropagation(),h(e(S))}),ue("keydown",se,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),pe.stopPropagation(),h(e(S)))}),u(ve,se)},oe=ve=>{var se=pc(),_e=_(se);Pe(_e,{variant:"primary",size:"sm",onclick:he=>{he.stopPropagation(),c(e(S).case_id)},children:(he,Ee)=>{var pe=hc(),Ie=G(pe);Le(Ie,{get icon(){return yi},size:12}),we(),u(he,pe)},$$slots:{default:!0}}),v(se),ee((he,Ee)=>{Se(se,1,he),ke(se,"data-col-key",e(M).key),Ze(se,Ee)},[()=>dt(q(e(M),e(L))),()=>H(e(M))]),u(ve,se)},de=ve=>{var se=mc(),_e=_(se,!0);v(se),ee((he,Ee,pe)=>{Se(se,1,he),ke(se,"data-col-key",e(M).key),Ze(se,Ee),ae(_e,pe)},[()=>dt(q(e(M),e(L))),()=>H(e(M)),()=>w(e(S),e(M))]),u(ve,se)};Y(te,ve=>{e(M).key==="_select"?ve(ie):e(M).key==="status"?ve(W,1):e(M).key==="note"?ve(ne,2):e(M).key==="_actions"?ve(oe,3):ve(de,-1)})}u(F,B)}),v(O),ee(F=>Se(O,1,F),[()=>dt(p(e(S)))]),ue("click",O,F=>z(e(S).case_id,F)),ue("contextmenu",O,F=>A(e(S),F)),u(y,O)}),v(re),v(U),nt(U,y=>f(N,y),()=>e(N)),v(j),ee(()=>Se(j,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,j),Ae()}Ge(["click","keydown","contextmenu"]);var yc=P('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function wc(t,r){Me(r,!0);let a=V(()=>{const b=Math.min(r.x,window.innerWidth-180),z=Math.min(r.y,window.innerHeight-120);return`left: ${b}px; top: ${z}px;`});async function n(b){try{for(const z of r.cases)await Do(z,b)}catch(z){console.error("Failed to set convergence:",z)}r.onClose()}const s=r.cases.length>1?` (${r.cases.length})`:"";var i=yc();rt("keydown",it,b=>{b.key==="Escape"&&r.onClose()});var o=_(i),l=_(o);v(o);var d=E(o,2),m=_(d);v(d);var x=E(d,2),k=_(x);v(x),v(i),ee(()=>{Ze(i,e(a)),Se(o,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ae(l,`Mark Converged${s}`),Se(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ae(m,`Mark Not Converged${s}`),Se(x,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ae(k,`Clear Mark${s}`)}),ue("click",o,()=>n("converged")),ue("click",d,()=>n("not_converged")),ue("click",x,()=>n("")),u(t,i),Ae()}Ge(["click"]);var kc=P("<!> Refresh",1),Cc=P("<!> <!>",1),Sc=P("<!> Run",1),$c=P("<!> Restart",1),Pc=P("<!> Stop",1),Ec=P("<!> Kill",1),Rc=P("<!> Clean",1),Nc=P('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),Mc=P('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function Ac(t,r){Me(r,!0);async function a(){await Lo(),r.onRefresh()}function n(){return[...Bt()]}async function s(){const L=n();if(!L.length)return;const B=await Ys(L);if(B)try{await zn({cases:L,n:B.n,nt:B.nt,maxParallel:B.maxParallel,backend:B.backend,options:B.options}),r.onRefresh()}catch(te){await Xe(`Run failed: ${te instanceof Error?te.message:te}`,"Error")}}async function i(){const L=n();if(!L.length)return;const B=await Qs(L);if(B)try{await zn({cases:L,n:B.n,nt:B.nt,maxParallel:B.maxParallel,restart:!0,restartMode:B.restartMode,restartValue:B.restartValue}),r.onRefresh()}catch(te){await Xe(`Restart failed: ${te instanceof Error?te.message:te}`,"Error")}}async function o(){const L=n();if(!(!L.length||!await Fn(`Kill ${L.length} case${L.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await Fo(L),r.onRefresh()}catch(te){await Xe(`Kill failed: ${te instanceof Error?te.message:te}`,"Error")}}async function l(){const L=n();if(!(!L.length||!await Fn(`Stop ${L.length} case${L.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await kr({cases:L,action:"stop"}),r.onRefresh(),Cr(`Stop requested for ${L.length} case${L.length>1?"s":""} — will checkpoint and exit`)}catch(te){await Xe(`Stop failed: ${te instanceof Error?te.message:te}`,"Error")}}async function d(){const L=n();if(L.length)try{await kr({cases:L,action:"checkpoint"}),r.onRefresh(),Cr(`Checkpoint requested for ${L.length} case${L.length>1?"s":""}`)}catch(B){await Xe(`Checkpoint failed: ${B instanceof Error?B.message:B}`,"Error")}}async function m(){const L=n();if(!L.length)return;const B=await gn("Extend by how many additional time steps?","500","Extend Run");if(B===null)return;const te=parseInt(B,10);if(!Number.isFinite(te)||te<=0){await Xe("Enter a positive integer number of time steps.","Error");return}try{await kr({cases:L,action:"extend",value:te}),r.onRefresh(),Cr(`Extended ${L.length} case${L.length>1?"s":""} by ${te} time steps`)}catch(ie){await Xe(`Extend failed: ${ie instanceof Error?ie.message:ie}`,"Error")}}async function x(){const L=n();if(L.length)try{await kr({cases:L,action:"flush"}),Cr(`Flush requested for ${L.length} case${L.length>1?"s":""}`)}catch(B){await Xe(`Flush failed: ${B instanceof Error?B.message:B}`,"Error")}}async function k(){const L=n();if(!L.length)return;const B=await Zs(L);if(B)try{await Io({cases:L,keepLast:B.keepLast,keepResu:B.keepResu,deleteResu:B.deleteResu,pruneResu:!0}),r.onRefresh(),ll()}catch(te){await Xe(`Cleanup failed: ${te instanceof Error?te.message:te}`,"Error")}}function b(){const L=Rr();L.length>0&&L.every(te=>Bt().has(te))?Kn():qn(L)}function z(L){sn(L)}let A=D(ce(tr("status")));Ne(()=>{rr("status",e(A))}),ql(!0);let h=V(()=>{const L=Sr();return L.size>0&&[...L].some(B=>B==="PREPARED"||B==="DONE"||B==="FAILED")}),c=V(()=>{if(!cr("restart"))return!1;const L=Sr();return L.size>0&&[...L].some(B=>B==="DONE"||B==="FAILED")&&Wn()}),C=V(()=>{const L=Sr();return L.size>0&&L.has("RUNNING")}),R=V(()=>{if(!cr("control"))return!1;const L=Sr();return L.size>0&&L.has("RUNNING")});const p=[{label:"Extend",icon:wi,onClick:m,action:"extend"},{label:"Checkpoint",icon:Ei,onClick:d,action:"checkpoint"},{label:"Flush",icon:bi,onClick:x,action:"flush"}];let w=V(()=>p.filter(L=>bo(L.action)).map(L=>({label:L.label,icon:L.icon,onClick:L.onClick,disabled:!e(R)}))),$=V(Wn),g=D(ce(Dl())),N=null;function I(){N&&clearTimeout(N),N=setTimeout(()=>{Bl(e(g))},200)}Ne(()=>Kl(e(A)));let T=D(!1),q=D(0),H=D(0),j=D(ce([])),U=D("");function X(L,B,te,ie){f(j,Bt().has(L)?[...Bt()]:[L],!0),f(U,ie,!0),f(q,B,!0),f(H,te,!0),f(T,!0)}function K(){f(T,!1)}function re(L){const B=Rr();if(B.length){if(L.key==="Escape"){Kn(),K();return}if((L.ctrlKey||L.metaKey)&&L.key==="a"){L.preventDefault(),qn(B);return}if(L.key==="ArrowDown"||L.key==="ArrowUp"){L.preventDefault();const te=L.key==="ArrowDown"?1:-1,ie=Vn(),W=B.indexOf(ie),ne=Math.max(0,Math.min(B.length-1,W+te)),oe=B[ne];L.shiftKey?on(an()||B[0],oe,B):Ea(oe),Ul(oe);return}if(L.key===" "){L.preventDefault();const te=Vn();te&&(L.shiftKey?on(an()||te,te,Rr()):sn(te))}}}var y=Mc();rt("click",it,K),rt("scroll",it,K);var S=G(y),O=_(S);jt(O,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:B=>{var te=Cc(),ie=G(te);{let oe=V(ol);nr(ie,{name:"status",get intervalMs(){return e(oe)},get onRefresh(){return r.onRefresh},get checked(){return e(A)},set checked(de){f(A,de,!0)}})}var W=E(ie,2);{var ne=oe=>{Pe(oe,{variant:"primary",onclick:a,children:(de,ve)=>{var se=kc(),_e=G(se);Le(_e,{get icon(){return er}}),we(),u(de,se)},$$slots:{default:!0}})};Y(W,oe=>{e(A)||oe(ne)})}u(B,te)},children:(B,te)=>{var ie=Nc(),W=G(ie),ne=_(W),oe=_(ne);Ye(oe);var de=E(oe,2);oc(de,{}),v(ne);var ve=E(ne,2),se=_(ve),_e=_(se);v(se);var he=E(se,2);{let J=V(()=>!e(h));Pe(he,{variant:"run",size:"sm",onclick:s,get disabled(){return e(J)},children:(le,xe)=>{var ye=Sc(),fe=G(ye);Le(fe,{get icon(){return Sa}}),we(),u(le,ye)},$$slots:{default:!0}})}var Ee=E(he,2);{var pe=J=>{{let le=V(()=>!e(c));Pe(J,{variant:"warning",size:"sm",onclick:i,get disabled(){return e(le)},children:(xe,ye)=>{var fe=$c(),ge=G(fe);Le(ge,{get icon(){return Pi}}),we(),u(xe,fe)},$$slots:{default:!0}})}},Ie=V(()=>cr("restart"));Y(Ee,J=>{e(Ie)&&J(pe)})}var ze=E(Ee,2);{var Qe=J=>{{let le=V(()=>!e(R));Pe(J,{variant:"warning",size:"sm",onclick:l,get disabled(){return e(le)},children:(xe,ye)=>{var fe=Pc(),ge=G(fe);Le(ge,{get icon(){return mi}}),we(),u(xe,fe)},$$slots:{default:!0}})}},qe=V(()=>cr("control"));Y(ze,J=>{e(qe)&&J(Qe)})}var Je=E(ze,2);{var Te=J=>{Al(J,{get items(){return e(w)}})};Y(Je,J=>{e(w).length>0&&J(Te)})}var $e=E(Je,2);{let J=V(()=>!e(C));Pe($e,{variant:"danger",size:"sm",onclick:o,get disabled(){return e(J)},children:(le,xe)=>{var ye=Ec(),fe=G(ye);Le(fe,{get icon(){return _i}}),we(),u(le,ye)},$$slots:{default:!0}})}var Q=E($e,2);{let J=V(()=>!e($));Pe(Q,{variant:"secondary",size:"sm",onclick:k,get disabled(){return e(J)},children:(le,xe)=>{var ye=Rc(),fe=G(ye);Le(fe,{get icon(){return Ni}}),we(),u(le,ye)},$$slots:{default:!0}})}v(ve),v(W);var Z=E(W,2);{let J=V(Na);xc(Z,{get rows(){return e(J)},onContextMenu:X,onToggleAll:b,onToggleRow:z})}ee(J=>ae(_e,`${J??""} selected`),[()=>Bt().size]),ue("input",oe,I),tt(oe,()=>e(g),J=>f(g,J)),u(B,ie)},$$slots:{actions:!0,default:!0}}),v(S);var F=E(S,2);{var M=L=>{wc(L,{get cases(){return e(j)},get x(){return e(q)},get y(){return e(H)},get currentValue(){return e(U)},onClose:K})};Y(F,L=>{e(T)&&L(M)})}ue("keydown",S,re),u(t,y),Ae()}Ge(["keydown","input"]);var Tc=P('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Qt(t,r){var a=Tc(),n=_(a);ft(n,()=>r.children),v(a),u(t,a)}function kn(t){return t.map(r=>({value:r,label:r}))}var Lc=P('<input type="number" step="any" class="w-[110px]"/>'),Fc=P("<!> <!> <!> <!> <!> <!>",1);function Cn(t,r){Me(r,!0);let a=me(r,"columnLabel",3,"Columns"),n=me(r,"xMinLabel",3,"Iter min"),s=V(()=>kn(r.allCases)),i=V(()=>r.columns.map(d=>({value:d,label:d}))),o=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Qt(t,{children:(d,m)=>{var x=Fc(),k=G(x);Re(k,{text:"Cases",children:(w,$)=>{Wt(w,{class:"w-[160px]",get options(){return e(s)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var b=E(k,2);{var z=w=>{var $=be(),g=G($);ft(g,()=>r.middleSlot),u(w,$)};Y(b,w=>{r.middleSlot&&w(z)})}var A=E(b,2);Re(A,{get text(){return a()},children:(w,$)=>{Wt(w,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var h=E(A,2);Re(h,{text:"Start from",children:(w,$)=>{lt(w,{class:"w-[140px]",get options(){return o},get value(){return r.startFrom},onchange:g=>r.onStartFromChange(g)})}});var c=E(h,2);{var C=w=>{Re(w,{get text(){return n()},children:($,g)=>{var N=Lc();Ye(N),ee(()=>fn(N,r.xMin)),ue("input",N,l),u($,N)}})};Y(c,w=>{r.startFrom==="custom"&&w(C)})}var R=E(c,2);{var p=w=>{var $=be(),g=G($);ft(g,()=>r.extraSlot),u(w,$)};Y(R,w=>{r.extraSlot&&w(p)})}u(d,x)}}),Ae()}Ge(["input"]);var Ic=P('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),zc=P('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Zt(t,r){let a=me(r,"emptyMessage",3,"");var n=zc(),s=_(n);{var i=l=>{var d=be(),m=G(d);zr(m,()=>r.svgHtml),u(l,d)},o=l=>{var d=Ic(),m=_(d),x=_(m,!0);v(m),v(d),ee(()=>ae(x,a()||"No data to display.")),u(l,d)};Y(s,l=>{r.svgHtml?l(i):l(o,-1)})}v(n),ee(()=>ke(n,"id",r.id)),u(t,n)}async function Sn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:s,height:i}=Dc(n),o=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=s*o,l.height=i*o;const d=l.getContext("2d");if(!d)return;d.scale(o,o);const m=new XMLSerializer().serializeToString(n),x=new Blob([m],{type:"image/svg+xml;charset=utf-8"}),k=URL.createObjectURL(x),b=new Image;b.width=s,b.height=i,await new Promise((A,h)=>{b.onload=()=>{d.drawImage(b,0,0,s,i),URL.revokeObjectURL(k),A()},b.onerror=h,b.src=k});const z=await new Promise(A=>l.toBlob(A,"image/png"));z&&await Aa(z,Oc(r))}function xr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,s=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Hc(`${t}_${n}_${s}.${a}`)}async function Ma(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Aa(a,r)}function Dc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Aa(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(s){if((s==null?void 0:s.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function Oc(t){return t.endsWith(".png")?t:`${t}.png`}function Hc(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Ta=D(ce([])),La=D(ce([])),Fa=D(ce([])),Ia=D("zero"),za=D(0),Da=D(""),jc=D(!0);function Vc(){return{selectedCases:e(Ta),columns:e(La),selectedColumns:e(Fa),startFrom:e(Ia),iterMin:e(za),svgHtml:e(Da),autoRefresh:e(jc)}}function Xn(t){f(Ta,t,!0)}function Uc(t){f(La,t,!0)}function Xr(t){f(Fa,t,!0)}function Bc(t){f(Ia,t,!0)}function qc(t){f(za,t,!0)}function $r(t){f(Da,t,!0)}var Kc=P("<!> Refresh",1),Gc=P("<!> <!>",1),Wc=P("<!> Download as PNG",1),Xc=P('<div class="self-end ml-auto"><!></div>'),Yc=P('<!> <div class="flex justify-center"><!></div>',1),Qc=P('<div class="flex justify-center"><!></div>'),Zc=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Jc=P("<!> <!>",1);function eu(t,r){Me(r,!0);let a=V(Vc),n=D("");const s=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function o(){if(e(a).selectedCases.length)try{const h=await Co(e(a).selectedCases);f(n,"");const c=h.filter(C=>!s.has(C.toLowerCase().replace(/\s+/g,"_")));if(Uc(c),c.length===0){Xr([]),$r("");return}if(e(a).selectedColumns.length===0){const C=c.filter(R=>i.some(p=>R.toLowerCase().includes(p)));Xr(C.length>0?C:[c[0]])}}catch(h){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",h)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await o(),!e(a).selectedColumns.length)))try{let h=0,c=!0;if(e(a).startFrom==="restart"){const R=await Ca(e(a).selectedCases),p=Object.values(R.origins).map(w=>w.iteration).filter(w=>w!==void 0&&Number.isFinite(w));h=p.length>0?Math.min(...p):0}else e(a).startFrom==="custom"&&(h=e(a).iterMin);const C=await So(e(a).selectedCases,e(a).selectedColumns,{xMin:h,includeHistory:c});f(n,""),C&&$r(C)}catch(h){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",h)}}function d(h){if(Xn(h),h.length===0){$r("");return}o(),l()}function m(h){if(Xr(h),h.length===0){$r("");return}l()}function x(h){Bc(h),l()}function k(h){qc(h),l()}let b=D(ce(tr("plot")));Ne(()=>{rr("plot",e(b))}),Ne(()=>{e(b)?mr("residualPlot",l,Hn()):vt("residualPlot")});let z=!1;Ne(()=>{r.allCases.length>0&&!z&&(z=!0,Xn([...r.allCases]),o().then(()=>l()))});const A=_r(()=>{z&&o().then(()=>l())});vr(()=>{vt("residualPlot"),A()}),jt(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var C=Gc(),R=G(C);{let $=V(Hn);nr(R,{name:"residualPlot",get intervalMs(){return e($)},onRefresh:l,get checked(){return e(b)},set checked(g){f(b,g,!0)}})}var p=E(R,2);{var w=$=>{Pe($,{variant:"primary",onclick:l,children:(g,N)=>{var I=Kc(),T=G(I);Le(T,{get icon(){return er}}),we(),u(g,I)},$$slots:{default:!0}})};Y(p,$=>{e(b)||$(w)})}u(c,C)},children:(c,C)=>{var R=Jc(),p=G(R);{var w=I=>{const T=X=>{var K=Xc(),re=_(K);{let y=V(()=>!e(a).svgHtml);Pe(re,{variant:"secondary",size:"sm",onclick:()=>Sn("plot-holder",xr("residuals",e(a).selectedCases)),get disabled(){return e(y)},children:(S,O)=>{var F=Wc(),M=G(F);Le(M,{get icon(){return pr}}),we(),u(S,F)},$$slots:{default:!0}})}v(K),u(X,K)};var q=Yc(),H=G(q);Cn(H,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:m,get startFrom(){return e(a).startFrom},onStartFromChange:x,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:k,get extraSlot(){return T}});var j=E(H,2),U=_(j);{let X=V(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).columns.length===0?"No residuals for the selected cases yet.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Zt(U,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(X)}})}v(j),u(I,q)},$=I=>{var T=Qc(),q=_(T);Zt(q,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),v(T),u(I,T)};Y(p,I=>{r.allCases.length>0?I(w):I($,-1)})}var g=E(p,2);{var N=I=>{var T=Zc(),q=_(T,!0);v(T),ee(()=>ae(q,e(n))),u(I,T)};Y(g,I=>{e(n)&&I(N)})}u(c,R)},$$slots:{actions:!0,default:!0}}),Ae()}function Oa(t){const{scope:r,getState:a,setState:n,getAxis:s}=t;async function i(){const k=a();if(k.selectedCases.length)try{let b=await en(k.selectedCases,r);if(t.filterFiles&&(b=t.filterFiles(b)),n({files:b}),b.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!k.file||!b.includes(k.file))&&(n({file:b[0]}),await o())}catch(b){console.error(`Failed to load ${r} files:`,b)}}async function o(){const k=a();if(!(!k.selectedCases.length||!k.file))try{const b=await No(k.selectedCases,[k.file]),z=t.filterColumns?t.filterColumns(b):b;t.onColumnsLoaded?t.onColumnsLoaded(b):n({columns:z});const A=a();if(A.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}A.selectedColumns.length===0&&n({selectedColumns:[A.columns[0]]})}catch(b){console.error(`Failed to load ${r} columns:`,b)}}async function l(){let k=a();if(k.selectedCases.length){if(await i(),k=a(),!k.file){n({positionText:"",svgHtml:""});return}if((k.columns.length===0||k.selectedColumns.length===0)&&(await o(),k=a(),!k.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let b;const z=a();if(z.startFrom==="restart"){const h=await Ca(z.selectedCases),c=s().toLowerCase(),C=c==="t"||c==="time"?"time":"iteration",R=Object.values(h.origins).map(p=>p[C]).filter(p=>p!==void 0&&Number.isFinite(p));b=R.length>0?Math.min(...R):void 0}else z.startFrom==="custom"&&(b=z.xMin);const A=await Ao({cases:z.selectedCases,probes:[z.file],columns:z.selectedColumns,axis:s(),timeMin:typeof b=="number"?b:void 0,xMin:b,includeHistory:!0});A&&n({svgHtml:A})}catch(b){console.error(`Failed to load ${r} plot:`,b)}}}async function d(k){if(n({selectedCases:k}),k.length===0){n({svgHtml:""});return}await i(),r==="monitoring"&&await l()}function m(k){if(n({selectedColumns:k}),k.length===0){n({svgHtml:""});return}l()}async function x(k){n({file:k}),await o(),await l()}return{loadFiles:i,loadColumns:o,loadPlot:l,handleCasesChange:d,handleColumnsChange:m,handleFileChange:x}}function Ha(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let qt=D("time"),ln=D(ce(Ha())),cn=D(ce({...Ha(),axis:""})),tu=D(!0),Lr=D(!1),Fr=D(!1);function ru(){return e(qt)}function nu(t){f(qt,t,!0)}function au(){return e(Lr)}function Yn(t){f(Lr,t,!0)}function su(){return e(Fr)}function Qn(t){f(Fr,t,!0)}function ou(){e(qt)==="time"&&!e(Lr)&&e(Fr)?f(qt,"profile"):e(qt)==="profile"&&!e(Fr)&&e(Lr)&&f(qt,"time")}function Zn(){return e(ln)}function Yr(){return e(cn)}function Ct(t){f(ln,{...e(ln),...t},!0)}function At(t){f(cn,{...e(cn),...t},!0)}function iu(){return e(tu)}var lu=P("<!> Download as PNG",1),cu=P('<div class="self-end ml-auto"><!></div>'),uu=P("<div> </div>"),du=P('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),fu=P('<!>  <!> <div class="flex justify-center"><!></div>',1),vu=P('<div class="flex justify-center"><!></div>');function gu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=V(Zn);const s=new Set(["time","t","iteration","iter"]),i=Oa({scope:"monitoring",getState:Zn,setState:Ct,filterFiles:h=>h.filter(c=>{const C=c.replace(/\.csv$/i,"").toLowerCase();return C!=="coords"&&!C.includes("coordinates")}),filterColumns:h=>h.filter(c=>!s.has(c.toLowerCase())),onColumnsLoaded:h=>{const c=h.filter(C=>!s.has(C.toLowerCase()));Ct({columns:c}),o()},getAxis:()=>"time"});async function o(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const h=[];for(const $ of e(n).selectedColumns){const g=await Mo(e(n).selectedCases[0],e(n).file,[$]);g.found&&h.push({col:$,x:g.x,y:g.y,z:g.z})}if(!h.length){Ct({positionText:""});return}const c=$=>{let g=0;for(const N of $){if(N===void 0)continue;const I=String(N),T=I.indexOf(".");T>=0&&(g=Math.max(g,I.length-T-1))}return g},C=c(h.map($=>$.x)),R=c(h.map($=>$.y)),p=c(h.map($=>$.z)),w=h.map($=>{const g=[];return $.x!==void 0&&g.push(`x=${$.x.toFixed(C)}`),$.y!==void 0&&g.push(`y=${$.y.toFixed(R)}`),$.z!==void 0&&g.push(`z=${$.z.toFixed(p)}`),`Probe position [${$.col}] : ${g.join(" · ")}`});Ct({positionText:w.join(`
`)})}catch{Ct({positionText:""})}}function l(h){i.handleColumnsChange(h),h.length>0&&o()}let d=V(()=>e(n).files.map(h=>({value:h,label:h.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),m=!1;Ne(()=>{r.allCases.length>0&&!m&&(m=!0,Ct({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let x=V(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).files.length===0?"No probe data for the selected cases yet.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var k=be(),b=G(k);{var z=h=>{const c=I=>{Re(I,{text:"Quantity",children:(T,q)=>{lt(T,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},C=I=>{var T=cu(),q=_(T);{let H=V(()=>!e(n).svgHtml);Pe(q,{variant:"secondary",size:"sm",onclick:()=>Sn("probe-plot-holder",xr("probe",e(n).selectedCases)),get disabled(){return e(H)},children:(j,U)=>{var X=lu(),K=G(X);Le(K,{get icon(){return pr}}),we(),u(j,X)},$$slots:{default:!0}})}v(T),u(I,T)};var R=fu(),p=G(R);Cn(p,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:I=>{Ct({startFrom:I}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:I=>{Ct({xMin:I}),i.loadPlot()},get extraSlot(){return C}});var w=E(p,2);{var $=I=>{var T=du();He(T,21,()=>e(n).positionText.split(`
`).sort(),dn,(q,H)=>{var j=uu(),U=_(j,!0);v(j),ee(()=>ae(U,e(H))),u(q,j)}),v(T),u(I,T)};Y(w,I=>{e(n).positionText&&I($)})}var g=E(w,2),N=_(g);Zt(N,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(x)}}),v(g),u(h,R)},A=h=>{var c=vu(),C=_(c);Zt(C,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),v(c),u(h,c)};Y(b,h=>{r.allCases.length>0?h(z):h(A,-1)})}u(t,k),Ae()}var hu=P("<!> <!>",1),pu=P("<!> Download as PNG",1),mu=P('<div class="self-end ml-auto"><!></div>'),_u=P('<!>  <div class="flex justify-center"><!></div>',1),bu=P('<div class="flex justify-center"><!></div>');function xu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=V(Yr);const s=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const C=c.map(R=>R.toLowerCase());for(const R of s){const p=C.indexOf(R);if(p>=0)return c[p]}return c[0]??""}const o=Oa({scope:"profiles",getState:Yr,setState:At,onColumnsLoaded:c=>{const C=e(n).axis||i(c),R=c.filter(p=>p!==C).toSorted((p,w)=>p.localeCompare(w));At({columns:R,axis:C,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:R.length?[R[0]]:[]})},getAxis:()=>Yr().axis});function l(c){const C=e(n).axis;At({axis:c});const p=[...e(n).columns,...C?[C]:[]].filter(w=>w!==c).toSorted((w,$)=>w.localeCompare($));At({columns:p}),o.loadPlot()}let d=V(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),m=V(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,C)=>c.localeCompare(C)).map(c=>({value:c,label:c}))),x=!1;Ne(()=>{r.allCases.length>0&&!x&&(x=!0,At({selectedCases:[...r.allCases]}),o.loadFiles().then(()=>o.loadPlot()))}),Ne(()=>{a(o.loadPlot)});let k=V(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).files.length===0?"No profile data for the selected cases yet.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var b=be(),z=G(b);{var A=c=>{const C=N=>{var I=hu(),T=G(I);Re(T,{text:"Profile",children:(H,j)=>{lt(H,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return o.handleFileChange}})}});var q=E(T,2);Re(q,{text:"X axis",children:(H,j)=>{lt(H,{class:"w-[140px]",get options(){return e(m)},get value(){return e(n).axis},onchange:l})}}),u(N,I)},R=N=>{var I=mu(),T=_(I);{let q=V(()=>!e(n).svgHtml);Pe(T,{variant:"secondary",size:"sm",onclick:()=>Sn("profile-plot-holder",xr("profile",e(n).selectedCases)),get disabled(){return e(q)},children:(H,j)=>{var U=pu(),X=G(U);Le(X,{get icon(){return pr}}),we(),u(H,U)},$$slots:{default:!0}})}v(I),u(N,I)};var p=_u(),w=G(p);Cn(w,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return o.handleCasesChange},get middleSlot(){return C},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return o.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:N=>{At({startFrom:N}),o.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:N=>{At({xMin:N}),o.loadPlot()},get extraSlot(){return R}});var $=E(w,2),g=_($);Zt(g,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(k)}}),v($),u(c,p)},h=c=>{var C=bu(),R=_(C);Zt(R,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),v(C),u(c,C)};Y(z,c=>{r.allCases.length>0?c(A):c(h,-1)})}u(t,b),Ae()}var yu=P('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),wu=P("<!> Refresh",1),ku=P("<!> <!>",1);function Cu(t,r){Me(r,!0);let a=V(ru),n=V(iu),s=V(au),i=V(su),o=D(ce(tr("probe")));Ne(()=>{rr("probe",e(o))});let l=D(void 0);function d(){var A;(A=e(l))==null||A()}async function m(){if(r.allCases.length){try{const h=(await en(r.allCases,"monitoring")).filter(c=>{const C=c.replace(/\.csv$/i,"").toLowerCase();return C!=="coords"&&!C.includes("coordinates")});Yn(h.length>0)}catch{Yn(!1)}try{const A=await en(r.allCases,"profiles");Qn(A.length>0)}catch{Qn(!1)}}}Ne(()=>{r.allCases.length>0&&m()}),_r(()=>{m(),d()}),Ne(()=>{e(s),e(i),ou()});function x(A){A==="time"&&!e(s)||A==="profile"&&!e(i)||nu(A)}var k=be(),b=G(k);{var z=A=>{{const h=C=>{var R=yu(),p=E(_(R),2),w=_(p),$=E(w,2);v(p),v(R),ee(()=>{Se(w,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(s)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),w.disabled=!e(s),ke(w,"title",e(s)?"":"No probe data available. Run a simulation first."),Se($,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),$.disabled=!e(i),ke($,"title",e(i)?"":"No profile data available. Run a simulation first.")}),ue("click",w,()=>x("time")),ue("click",$,()=>x("profile")),u(C,R)};jt(A,{wide:!0,titleSlot:h,tabs:h,actions:C=>{var R=ku(),p=G(R);{let g=V(()=>e(a)==="time"?"probePlot":"profilePlot"),N=V(il);nr(p,{get name(){return e(g)},get intervalMs(){return e(N)},onRefresh:d,get checked(){return e(o)},set checked(I){f(o,I,!0)}})}var w=E(p,2);{var $=g=>{Pe(g,{variant:"primary",onclick:d,children:(N,I)=>{var T=wu(),q=G(T);Le(q,{get icon(){return er}}),we(),u(N,T)},$$slots:{default:!0}})};Y(w,g=>{e(o)||g($)})}u(C,R)},children:(C,R)=>{var p=be(),w=G(p);{var $=N=>{gu(N,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(I){f(l,I,!0)}})},g=N=>{xu(N,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(I){f(l,I,!0)}})};Y(w,N=>{e(a)==="time"?N($):N(g,-1)})}u(C,p)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Y(b,A=>{e(n)&&A(z)})}u(t,k),Ae()}Ge(["click"]);var Su=P("<!> Refresh",1),$u=P("<!> <!>",1),Pu=P("<!> Download as CSV",1),Eu=P('<!> <div class="self-end ml-auto"><!></div>',1),Ru=P("<th> </th>"),Nu=P('<td class="whitespace-nowrap"> </td>'),Mu=P('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),Au=P('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),Tu=P('<p class="text-sm text-muted italic text-center py-8"><!></p>'),Lu=P("<!> <!>",1);function Fu(t,r){Me(r,!0);let a=D(ce([])),n=D(ce([])),s=D(!1),i=D(!1),o=D(ce(tr("perf")));Ne(()=>{rr("perf",e(o))});const l=5e3;let m=D(ce([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),x=V(()=>r.allCases.map(R=>({value:R,label:R}))),k=V(()=>e(n).length>0);async function b(){var R;if(e(a).length){f(i,!0);try{const p=await In(e(a));(R=p.columns)!=null&&R.length&&f(m,p.columns,!0),f(n,p.records,!0),e(n).length>0&&f(s,!0)}catch(p){console.error("Failed to load perf:",p)}f(i,!1)}}function z(R){if(f(a,R,!0),R.length===0){f(n,[],!0);return}b()}function A(R,p){if(p==null||p==="")return"-";if(R==="text")return p;const w=Number(p);return Number.isFinite(w)?R==="int"?String(Math.round(w)):w.toFixed(3):p}async function h(){if(!e(n).length)return;const R=["case_id",...e(m).map(g=>g.key)],p=e(n).map(g=>[g.case_id,...e(m).map(N=>g[N.key]??"")].join(",")),w=[R.join(","),...p].join(`
`),$=xr("timing_snapshot",e(a),"csv");await Ma(w,$)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),In(r.allCases).then(R=>{var p;(p=R.columns)!=null&&p.length&&f(m,R.columns,!0),f(s,R.records.length>0),f(n,R.records,!0)}).catch(()=>{}))}),Ne(()=>{e(o)?mr("perf",b,l):vt("perf")});const C=_r(()=>{c&&b()});vr(()=>{vt("perf"),C()}),jt(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:p=>{var w=$u(),$=G(w);nr($,{name:"perf",intervalMs:l,onRefresh:b,get checked(){return e(o)},set checked(I){f(o,I,!0)}});var g=E($,2);{var N=I=>{Pe(I,{variant:"primary",onclick:b,children:(T,q)=>{var H=Su(),j=G(H);Le(j,{get icon(){return er}}),we(),u(T,H)},$$slots:{default:!0}})};Y(g,I=>{e(o)||I(N)})}u(p,w)},children:(p,w)=>{var $=Lu(),g=G($);{var N=H=>{Qt(H,{children:(j,U)=>{var X=Eu(),K=G(X);Re(K,{text:"Cases",children:(S,O)=>{Wt(S,{class:"w-[160px]",get options(){return e(x)},get selected(){return e(a)},onchange:z,placeholder:"Select cases..."})}});var re=E(K,2),y=_(re);{let S=V(()=>!e(k));Pe(y,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(S)},children:(O,F)=>{var M=Pu(),L=G(M);Le(L,{get icon(){return pr}}),we(),u(O,M)},$$slots:{default:!0}})}v(re),u(j,X)}})};Y(g,H=>{e(s)&&H(N)})}var I=E(g,2);{var T=H=>{var j=Au(),U=_(j),X=_(U),K=_(X),re=E(_(K));He(re,17,()=>e(m),S=>S.key,(S,O)=>{var F=Ru(),M=_(F,!0);v(F),ee(()=>ae(M,e(O).label)),u(S,F)}),v(K),v(X);var y=E(X);He(y,21,()=>e(n),S=>S.case_id,(S,O)=>{var F=Mu(),M=_(F),L=_(M,!0);v(M);var B=E(M);He(B,17,()=>e(m),te=>te.key,(te,ie)=>{var W=Nu(),ne=_(W,!0);v(W),ee(oe=>ae(ne,oe),[()=>A(e(ie).kind,e(O)[e(ie).key])]),u(te,W)}),v(F),ee(()=>ae(L,e(O).case_id)),u(S,F)}),v(y),v(U),v(j),u(H,j)},q=H=>{var j=Tu(),U=_(j);{var X=re=>{var y=Ve("Select cases above to view timing information.");u(re,y)},K=re=>{var y=Ve("No performance data available. Please run a simulation first.");u(re,y)};Y(U,re=>{e(s)?re(X):re(K,-1)})}v(j),u(H,j)};Y(I,H=>{e(k)?H(T):H(q,-1)})}u(p,$)},$$slots:{actions:!0,default:!0}}),Ae()}const Iu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ja(t){return t.replace(/[&<>"']/g,r=>Iu[r]??r)}var zu=P("<div></div>"),Du=P('<pre class="code-box tail-pane"></pre>');function Ou(t,r){Me(r,!0);let a=D(void 0);function n(m){const x=ja(m);if(!r.searchQuery.trim())return x;try{const k=new RegExp(`(${r.searchQuery})`,"gi");return x.replace(k,'<span class="tail-query-hit">$1</span>')}catch{return x}}function s(m){return m==="error"?"tail-sev-error":m==="warn"?"tail-sev-warn":m==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let o=D(!0);function l(){f(o,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(o)&&Et().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=Du();He(d,21,()=>r.lines,m=>m.index,(m,x)=>{var k=zu();zr(k,()=>n(e(x).text),!0),v(k),ee(b=>Se(k,1,`tail-line ${b??""} ${e(x).isNew?"tail-new":""}`),[()=>s(e(x).severity)]),u(m,k)}),v(d),nt(d,m=>f(a,m),()=>e(a)),rt("scroll",d,l),u(t,d),Ae()}const Hu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,ju=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function Vu(t){return Hu.test(t)?"error":ju.test(t)?"warn":"none"}function Uu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Bu=P("<!> Refresh",1),qu=P("<!> <!>",1),Ku=P('<input type="number" min="1" class="w-[70px]"/>'),Gu=P('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Wu=P("<!> <!> <!> <!> <!>",1),Xu=Ht('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Yu=Ht('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Qu=Ht('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Zu=P("<!> Resume",1),Ju=P("<!> Pause",1),ed=P('<span class="text-xs text-muted">Case not running</span>'),td=P('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),rd=P('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),nd=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),ad=P("<!> <!> <!>",1);function sd(t,r){Me(r,!0);const a=80;let n=D(""),s=D(""),i=D(!1),o=D(ce([])),l=D(a),d=D(ce([])),m=D(ce(new Set)),x=D(!1),k=D(ce(tr("tail")));Ne(()=>{rr("tail",e(k))});let b=D(!0),z=D("all"),A=D(""),h=D(""),c=D(void 0),C=V(()=>kn(r.allCases)),R=V(()=>e(o).map(y=>{const S=y.split("/").pop()??y;return{value:y,label:S}})),p=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],w=V(()=>e(o).length>0),$=V(()=>xn().some(y=>{var S;return y.case_id===e(n)&&((S=y.status)==null?void 0:S.toUpperCase())==="RUNNING"}));const g={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function N(y){const S=y.split("/").pop()??y;return g[S]??99}async function I(){if(e(n))try{const O=(await Eo(e(n))).filter(F=>{const M=F.split("/").pop()??F;return F.endsWith(".log")||F.endsWith("/summary")||M in g}).sort((F,M)=>N(F)-N(M));if(f(o,O,!0),O.length>0){const F=O[0];!e(s)||!O.includes(e(s))?(f(s,F,!0),f(i,!1)):!e(i)&&N(F)<N(e(s))&&f(s,F,!0)}e(o).length===0&&(f(s,""),f(d,[],!0))}catch(y){console.error("Failed to load tail files:",y),f(o,[],!0)}}async function T(y=!1){if(e(n)&&!(e(x)&&!y)&&(await I(),!!e(s)))try{const S=await Po(e(n),e(s),e(l));f(h,"");const O=S.split(`
`),F=O.length>0&&O[O.length-1]===""?O.slice(0,-1):O;if(e(d).length>0){const M=q(e(d),F),L=new Set;for(let B=M;B<F.length;B++)L.add(B);f(m,L,!0)}f(d,F,!0)}catch(S){f(h,"Failed to load log tail"),console.error("Failed to load tail:",S)}}function q(y,S){const O=Math.min(y.length,S.length);for(let F=0;F<O;F++){let M=!0;for(let L=0;L<Math.min(y.length-F,S.length);L++)if(y[F+L]!==S[L]){M=!1;break}if(M)return y.length-F}return 0}let H=V(()=>{let y=e(d).map((S,O)=>({text:S,index:O,severity:Vu(S),isNew:e(m).has(O)}));if(e(z)!=="all"&&(y=y.filter(S=>Uu(S.severity,e(z)))),e(A).trim())try{const S=new RegExp(e(A),"i");y=y.filter(O=>S.test(O.text))}catch{}return y});function j(y){f(n,y,!0),f(s,""),f(i,!1),f(d,[],!0),I().then(()=>T(!0))}function U(y){f(s,y,!0),f(i,!0),f(d,[],!0),T(!0)}function X(){f(x,!e(x)),e(x)||T(!0)}function K(y){(y.ctrlKey||y.metaKey)&&y.key==="f"&&e(c)&&(y.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),I().then(()=>T(!0)))}),Ne(()=>{e(k)&&!e(x)&&e(n)?mr("tail",()=>T(!1),On()):vt("tail")});const re=_r(()=>{e(n)&&I().then(()=>T(!0))});vr(()=>{vt("tail"),re()}),rt("keydown",it,K),jt(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:S=>{var O=qu(),F=G(O);{let B=V(On);nr(F,{name:"tail",get intervalMs(){return e(B)},onRefresh:()=>T(!1),get checked(){return e(k)},set checked(te){f(k,te,!0)}})}var M=E(F,2);{var L=B=>{Pe(B,{variant:"primary",onclick:()=>T(!0),children:(te,ie)=>{var W=Bu(),ne=G(W);Le(ne,{get icon(){return er}}),we(),u(te,W)},$$slots:{default:!0}})};Y(M,B=>{e(k)||B(L)})}u(S,O)},children:(S,O)=>{var F=ad(),M=G(F);{var L=oe=>{Qt(oe,{children:(de,ve)=>{var se=Wu(),_e=G(se);Re(_e,{text:"Case",children:(ze,Qe)=>{lt(ze,{class:"w-[130px]",get options(){return e(C)},get value(){return e(n)},onchange:j})}});var he=E(_e,2);Re(he,{text:"File",children:(ze,Qe)=>{lt(ze,{class:"w-[150px]",get options(){return e(R)},get value(){return e(s)},onchange:U})}});var Ee=E(he,2);Re(Ee,{text:"Lines",children:(ze,Qe)=>{var qe=Ku();Ye(qe),ue("change",qe,()=>T(!0)),tt(qe,()=>e(l),Je=>f(l,Je)),u(ze,qe)}});var pe=E(Ee,2);Re(pe,{text:"Filter",children:(ze,Qe)=>{var qe=Gu();Ye(qe),nt(qe,Je=>f(c,Je),()=>e(c)),tt(qe,()=>e(A),Je=>f(A,Je)),u(ze,qe)}});var Ie=E(pe,2);Re(Ie,{text:"Severity",children:(ze,Qe)=>{lt(ze,{class:"w-[90px]",get options(){return p},get value(){return e(z)},onchange:qe=>f(z,qe,!0)})}}),u(de,se)}})};Y(M,oe=>{e(w)&&oe(L)})}var B=E(M,2);{var te=oe=>{var de=td(),ve=G(de);Ou(ve,{get lines(){return e(H)},get searchQuery(){return e(A)},get autoScroll(){return e(b)}});var se=E(ve,2),_e=_(se),he=_(_e);{var Ee=Q=>{var Z=Xu();u(Q,Z)},pe=Q=>{var Z=Yu();u(Q,Z)},Ie=Q=>{var Z=Qu();u(Q,Z)};Y(he,Q=>{e(x)?Q(Ee):e($)?Q(pe,1):Q(Ie,-1)})}var ze=E(he);v(_e);var Qe=E(_e,2);{var qe=Q=>{Pe(Q,{variant:"secondary",size:"sm",onclick:X,children:(Z,J)=>{var le=be(),xe=G(le);{var ye=ge=>{var Ce=Zu(),De=G(Ce);Le(De,{get icon(){return Sa}}),we(),u(ge,Ce)},fe=ge=>{var Ce=Ju(),De=G(Ce);Le(De,{get icon(){return ki}}),we(),u(ge,Ce)};Y(xe,ge=>{e(x)?ge(ye):ge(fe,-1)})}u(Z,le)},$$slots:{default:!0}})},Je=Q=>{var Z=ed();u(Q,Z)};Y(Qe,Q=>{e($)?Q(qe):Q(Je,-1)})}var Te=E(Qe,2),$e=_(Te);Ot($e,{get checked(){return e(b)},onchange:Q=>f(b,Q,!0),size:14,label:"Auto-scroll",labelFirst:!0}),v(Te),v(se),ee(()=>ae(ze,` ${e(H).length??""} / ${e(d).length??""}`)),u(oe,de)},ie=oe=>{var de=rd();u(oe,de)};Y(B,oe=>{e(d).length>0?oe(te):oe(ie,-1)})}var W=E(B,2);{var ne=oe=>{var de=nd(),ve=_(de,!0);v(de),ee(()=>ae(ve,e(h))),u(oe,de)};Y(W,oe=>{e(h)&&oe(ne)})}u(S,F)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["change"]);function od(t,r=3){var z,A;const a=t.split(`
`),n=[];let s=0,i=0,o=!1;for(const h of a){if(h.startsWith("===")||h.startsWith("---")||h.startsWith("+++"))continue;const c=h.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){s=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,o=!0;continue}if(o)if(h.startsWith("-"))s++,n.push({type:"del",leftNum:s,rightNum:null,leftContent:h.slice(1),rightContent:""});else if(h.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:h.slice(1)});else{s++,i++;const C=h.startsWith(" ")?h.slice(1):h;n.push({type:"equal",leftNum:s,rightNum:i,leftContent:C,rightContent:C})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const h=[];for(;d<n.length&&n[d].type==="del";)h.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const C=Math.max(h.length,c.length);for(let R=0;R<C;R++){const p=h[R],w=c[R];p&&w?l.push({type:"del",leftNum:p.leftNum,rightNum:w.rightNum,leftContent:p.leftContent,rightContent:w.rightContent}):p?l.push(p):w&&l.push(w)}}else l.push(n[d]),d++;const m=new Set;for(let h=0;h<l.length;h++)if(l[h].type!=="equal")for(let c=Math.max(0,h-r);c<=Math.min(l.length-1,h+r);c++)m.add(c);if(m.size===0)return[];const x=[];let k=-1,b=!1;for(let h=0;h<l.length;h++)if(m.has(h)){k>=0&&h-k>1&&x.push({kind:"separator",skipped:h-k-1});const c=l[h].type!=="equal",C=c&&!b;x.push({kind:"line",row:l[h],hunkStart:C}),b=c,k=h}if(k<l.length-1&&k>=0&&x.push({kind:"separator",skipped:l.length-1-k}),x.length>0&&x[0].kind==="line"){const h=((z=x[0].row)==null?void 0:z.leftNum)??0,c=((A=x[0].row)==null?void 0:A.rightNum)??0,C=Math.max(h,c)-1;C>0&&x.unshift({kind:"separator",skipped:C})}return x}var id=P('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),ld=P('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),cd=P('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),ud=P('<span class="text-xs text-muted">No matches</span>'),dd=P('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),fd=P('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),vd=P('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),gd=P('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function hd(t,r){Me(r,!0);let a=me(r,"loading",3,!1),n=D(void 0),s=V(()=>od(r.diffText)),i=V(()=>{const Q=[];return e(s).forEach((Z,J)=>{Z.hunkStart&&Q.push(J)}),Q}),o=V(()=>e(i).length>0),l=V(()=>{var Z;const Q=new Array(e(s).length).fill(-1);for(let J=0;J<e(i).length;J++){let le=e(i)[J];for(;le<e(s).length&&e(s)[le].kind==="line"&&((Z=e(s)[le].row)==null?void 0:Z.type)!=="equal";)Q[le]=J,le++}return Q}),d=D(-1),m="";Ne(()=>{r.diffText!==m&&(m=r.diffText,f(d,-1))});let x=V(()=>{if(!r.search.trim())return[];try{const Q=new RegExp(r.search,"i"),Z=[];return e(s).forEach((J,le)=>{J.kind==="line"&&J.row&&(Q.test(J.row.leftContent)||Q.test(J.row.rightContent))&&Z.push(le)}),Z}catch{return[]}}),k=D(-1),b="";Ne(()=>{r.search!==b&&(b=r.search,f(k,e(x).length>0?0:-1,!0))});async function z(Q){var le;f(k,Q,!0),await Et();const Z=e(x)[Q],J=(le=e(p))==null?void 0:le.querySelector(`[data-item-idx="${Z}"]`);if(J&&e(p)&&e(w)){const xe=e(p).getBoundingClientRect(),fe=J.getBoundingClientRect().top-xe.top+e(p).scrollTop-e(p).clientHeight/3;g=!0,e(p).scrollTop=fe,e(w).scrollTop=fe,requestAnimationFrame(()=>{g=!1})}}function A(){e(k)>0&&z(e(k)-1)}function h(){e(k)<0&&e(x).length>0?z(0):e(k)<e(x).length-1&&z(e(k)+1)}function c(Q,Z){const J=ja(Q);if(!r.search.trim())return J;try{const le=new RegExp(`(${r.search})`,"gi"),xe=Z?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return J.replace(le,`<span class="${xe}">$1</span>`)}catch{return J}}function C(Q,Z){return Q==="equal"?"":Q==="del"&&Z==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":Q==="del"&&Z==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":Q==="add"&&Z==="left"?"bg-edf-gris-clair":Q==="add"&&Z==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function R(Q,Z){return Q==="del"&&Z==="left"?"rgb(251,237,233)":Q==="del"&&Z==="right"?"rgb(238,247,236)":Q==="add"&&Z==="left"?"var(--color-edf-gris-clair)":Q==="add"&&Z==="right"?"rgb(238,247,236)":"white"}let p=D(void 0),w=D(void 0),$=!1,g=!1;function N(Q){$||g||!e(p)||!e(w)||($=!0,Q==="left"?(e(w).scrollTop=e(p).scrollTop,e(w).scrollLeft=e(p).scrollLeft):(e(p).scrollTop=e(w).scrollTop,e(p).scrollLeft=e(w).scrollLeft),requestAnimationFrame(()=>{$=!1}))}async function I(Q){var J;f(d,Q,!0),await Et();const Z=(J=e(p))==null?void 0:J.querySelector(`[data-hunk-start="${Q}"]`);if(Z&&e(p)&&e(w)){g=!0;const le=e(p).getBoundingClientRect(),ye=Z.getBoundingClientRect().top-le.top+e(p).scrollTop-e(p).clientHeight/3;e(p).scrollTop=ye,e(w).scrollTop=ye,requestAnimationFrame(()=>{g=!1})}}function T(){e(d)>0&&I(e(d)-1)}function q(){e(d)<0?I(0):e(d)<e(i).length-1&&I(e(d)+1)}function H(Q){const Z=e(l)[Q];Z>=0&&f(d,Z,!0)}function j(Q){Q.target instanceof HTMLInputElement||(Q.key==="n"&&!Q.shiftKey?(Q.preventDefault(),q()):Q.key==="N"||Q.key==="n"&&Q.shiftKey?(Q.preventDefault(),T()):Q.key==="j"?(Q.preventDefault(),h()):(Q.key==="J"||Q.key==="j"&&Q.shiftKey)&&(Q.preventDefault(),A()))}var U=gd();{const Q=(Z,J=Cs)=>{var le=be(),xe=G(le);He(xe,17,()=>e(s),dn,(ye,fe,ge)=>{const Ce=V(()=>e(i).indexOf(ge)),De=V(()=>e(l)[ge]>=0&&e(l)[ge]===e(d)),We=V(()=>{var at,Ke;return J()==="left"?(at=e(fe).row)==null?void 0:at.leftNum:(Ke=e(fe).row)==null?void 0:Ke.rightNum}),gt=V(()=>{var at,Ke;return J()==="left"?((at=e(fe).row)==null?void 0:at.leftContent)??"":((Ke=e(fe).row)==null?void 0:Ke.rightContent)??""});var Vt=be(),jr=G(Vt);{var et=at=>{var Ke=id(),Nt=E(_(Ke),2),Vr=_(Nt);v(Nt),v(Ke),ee(()=>ae(Vr,`... ${e(fe).skipped??""} lines hidden ...`)),u(at,Ke)},ut=at=>{var Ke=ld(),Nt=_(Ke),Vr=_(Nt,!0);v(Nt);var $n=E(Nt,2);zr($n,()=>c(e(gt),e(k)>=0&&e(x)[e(k)]===ge),!0),v($n),v(Ke),ee((wt,Mt,yr,Va,Ua)=>{Se(Ke,1,`flex w-full ${wt??""} ${Mt??""}`),Ze(Ke,e(De)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),ke(Ke,"role",yr),ke(Ke,"tabindex",Va),ke(Ke,"data-hunk-start",J()==="left"&&e(Ce)>=0?e(Ce):void 0),ke(Ke,"data-item-idx",J()==="left"?ge:void 0),Ze(Nt,`background: ${Ua??""}; color: ${e(De)?"white":"var(--color-muted)"};`),ae(Vr,e(We)??"")},[()=>C(e(fe).row.type,J()),()=>e(fe).row.type!=="equal"||e(x).includes(ge)?"cursor-pointer":"",()=>e(fe).row.type!=="equal"||e(x).includes(ge)?"button":void 0,()=>e(fe).row.type!=="equal"||e(x).includes(ge)?0:void 0,()=>e(De)?"rgb(16,87,200)":R(e(fe).row.type,J())]),ue("click",Ke,()=>{var Mt;((Mt=e(fe).row)==null?void 0:Mt.type)!=="equal"&&H(ge);const wt=e(x).indexOf(ge);wt>=0&&f(k,wt,!0)}),ue("keydown",Ke,wt=>{var Mt;if(wt.key==="Enter"||wt.key===" "){wt.preventDefault(),((Mt=e(fe).row)==null?void 0:Mt.type)!=="equal"&&H(ge);const yr=e(x).indexOf(ge);yr>=0&&f(k,yr,!0)}}),u(at,Ke)};Y(jr,at=>{e(fe).kind==="separator"?at(et):e(fe).row&&at(ut,1)})}u(ye,Vt)}),u(Z,le)};var X=_(U),K=_(X),re=_(K),y=_(re,!0);v(re);var S=E(re,2),O=_(S,!0);v(S),v(K);var F=E(K,2),M=_(F),L=_(M,!0);v(M);var B=E(M,2),te=_(B,!0);v(B),v(F),v(X);var ie=E(X,2),W=_(ie),ne=_(W);Ye(ne);var oe=E(ne,2);{var de=Z=>{var J=cd(),le=G(J);{let ge=V(()=>e(k)<=0);Pe(le,{variant:"secondary",size:"sm",onclick:A,get disabled(){return e(ge)},children:(Ce,De)=>{we();var We=Ve("Prev");u(Ce,We)},$$slots:{default:!0}})}var xe=E(le,2),ye=_(xe);v(xe);var fe=E(xe,2);{let ge=V(()=>e(k)>=e(x).length-1);Pe(fe,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(ge)},children:(Ce,De)=>{we();var We=Ve("Next");u(Ce,We)},$$slots:{default:!0}})}ee(()=>ae(ye,`${e(k)>=0?e(k)+1:"–"} / ${e(x).length??""} occurrence${e(x).length!==1?"s":""}`)),u(Z,J)},ve=V(()=>r.search.trim()&&e(x).length>0),se=Z=>{var J=ud();u(Z,J)},_e=V(()=>r.search.trim());Y(oe,Z=>{e(ve)?Z(de):e(_e)&&Z(se,1)})}v(W);var he=E(W,2),Ee=_(he);{let Z=V(()=>e(i).length===0||e(d)<=0);Pe(Ee,{variant:"secondary",size:"sm",onclick:T,get disabled(){return e(Z)},children:(J,le)=>{we();var xe=Ve("Prev");u(J,xe)},$$slots:{default:!0}})}var pe=E(Ee,2),Ie=_(pe);v(pe);var ze=E(pe,2);{let Z=V(()=>e(i).length===0||e(d)>=e(i).length-1);Pe(ze,{variant:"secondary",size:"sm",onclick:q,get disabled(){return e(Z)},children:(J,le)=>{we();var xe=Ve("Next");u(J,xe)},$$slots:{default:!0}})}v(he),v(ie);var Qe=E(ie,2);{var qe=Z=>{var J=dd(),le=_(J),xe=_(le),ye=_(xe);Q(ye,()=>"left"),v(xe),v(le),nt(le,De=>f(p,De),()=>e(p));var fe=E(le,2),ge=_(fe),Ce=_(ge);Q(Ce,()=>"right"),v(ge),v(fe),nt(fe,De=>f(w,De),()=>e(w)),v(J),rt("scroll",le,()=>N("left")),rt("scroll",fe,()=>N("right")),u(Z,J)},Je=Z=>{var J=fd();u(Z,J)};Y(Qe,Z=>{e(o)?Z(qe):Z(Je,-1)})}var Te=E(Qe,2);{var $e=Z=>{var J=vd();u(Z,J)};Y(Te,Z=>{a()&&Z($e)})}v(U),nt(U,Z=>f(n,Z),()=>e(n)),ee(()=>{ae(y,r.leftLabel),ae(O,r.kind),ae(L,r.rightLabel),ae(te,r.kind),fn(ne,r.search),ae(Ie,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),ue("input",ne,Z=>r.onSearchChange(Z.target.value)),ue("keydown",ne,Z=>{Z.key==="Enter"&&(Z.preventDefault(),h())})}ue("keydown",U,j),u(t,U),Ae()}Ge(["keydown","click","input"]);var pd=P("<!> <!> <!>",1),md=P('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),_d=P('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),bd=P('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),xd=P('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),yd=P('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),wd=P('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),kd=P('<p class="text-sm text-red-600 text-center py-8"> </p>'),Cd=P('<p class="text-sm text-muted text-center py-8">Loading...</p>'),Sd=P("<!> <!> <!>",1),$d=P("<!> <!>",1);function Pd(t,r){Me(r,!0);let a=D(""),n=D(""),s=D(""),i=D(""),o=D(""),l=D(!1),d=D(!1),m=D(""),x=V(()=>r.allCases.map(g=>({value:g,label:g})));const k=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let b=V(()=>{var g;return((g=Ft())==null?void 0:g.compare_kinds)??k});Ne(()=>{var g;e(b).some(N=>N.value===e(s))||f(s,((g=e(b)[0])==null?void 0:g.value)??"",!0)});let z=D(!1),A=V(()=>e(a)&&e(n)&&e(a)!==e(n));function h(){const g=e(a);f(a,e(n),!0),f(n,g,!0)}async function c(){if(e(A)){f(l,!0),f(m,"");try{const g=await To({cases:[e(a),e(n)],base:e(a),kind:e(s)});f(o,g,!0),f(d,!0)}catch(g){console.error("Failed to load diff:",g),f(o,""),f(d,!1);const N=g instanceof Error?g.message:String(g);f(m,N.includes("404")?`File "${e(s)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(s)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(o,""),f(d,!0))});let C=!1;Ne(()=>{r.allCases.length>=2&&!C?(C=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!C&&(C=!0,f(a,r.allCases[0],!0))});let R=V(yn),p=V(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(R).length===0)return[];const g=xn(),N=g.find(T=>T.case_id===e(a)),I=g.find(T=>T.case_id===e(n));return!N&&!I?[]:e(R).map(T=>{var j,U;const q=((j=N==null?void 0:N.doe)==null?void 0:j[T])!=null&&String(N.doe[T])!==""?String(N.doe[T]):"—",H=((U=I==null?void 0:I.doe)==null?void 0:U[T])!=null&&String(I.doe[T])!==""?String(I.doe[T]):"—";return{param:T,left:q,right:H,differs:q!==H}})}),w=V(()=>e(z)?e(p):e(p).filter(g=>g.differs)),$=V(()=>e(p).filter(g=>g.differs).length);jt(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(g,N)=>{var I=$d(),T=G(I);Qt(T,{children:(X,K)=>{var re=pd(),y=G(re);Re(y,{text:"First case",children:(F,M)=>{lt(F,{class:"w-32.5",get options(){return e(x)},get value(){return e(a)},onchange:L=>f(a,L,!0),placeholder:"Select..."})}});var S=E(y,2);{let F=V(()=>!e(a)&&!e(n));Pe(S,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(F)},children:(M,L)=>{Le(M,{get icon(){return gi}})},$$slots:{default:!0}})}var O=E(S,2);Re(O,{text:"Second case",children:(F,M)=>{lt(F,{class:"w-32.5",get options(){return e(x)},get value(){return e(n)},onchange:L=>f(n,L,!0),placeholder:"Select..."})}}),u(X,re)}});var q=E(T,2);{var H=X=>{var K=md();u(X,K)},j=X=>{var K=_d();u(X,K)},U=X=>{var K=Sd(),re=G(K);{var y=B=>{var te=wd(),ie=G(te),W=_(ie),ne=_(W);v(W);var oe=E(W,2),de=_(oe,!0);v(oe),v(ie);var ve=E(ie,2);{var se=he=>{var Ee=xd(),pe=_(Ee),Ie=_(pe),ze=_(Ie),Qe=_(ze),qe=_(Qe,!0);v(Qe);var Je=E(Qe,2),Te=_(Je,!0);v(Je),v(ze),v(Ie);var $e=E(Ie);He($e,21,()=>e(w),Q=>Q.param,(Q,Z)=>{var J=bd(),le=_(J),xe=_(le,!0);v(le);var ye=E(le),fe=_(ye,!0);v(ye);var ge=E(ye),Ce=_(ge,!0);v(ge),v(J),ee(()=>{Se(le,1,dt(e(Z).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ae(xe,e(Z).left),ae(fe,e(Z).param),Se(ge,1,dt(e(Z).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ae(Ce,e(Z).right)}),u(Q,J)}),v($e),v(pe),v(Ee),ee(()=>{ae(qe,e(a)),ae(Te,e(n))}),u(he,Ee)},_e=he=>{var Ee=yd();u(he,Ee)};Y(ve,he=>{e(w).length>0?he(se):he(_e,-1)})}ee(()=>{ae(ne,`${e($)??""} difference${e($)!==1?"s":""} out of ${e(p).length??""}
          parameters`),ae(de,e(z)?"Show differences only":"Show all parameters")}),ue("click",oe,()=>f(z,!e(z))),u(B,te)};Y(re,B=>{e(p).length>0&&B(y)})}var S=E(re,2);Qt(S,{children:(B,te)=>{Re(B,{text:"File",children:(ie,W)=>{lt(ie,{class:"w-37.5",get options(){return e(b)},get value(){return e(s)},onchange:ne=>f(s,ne,!0)})}})}});var O=E(S,2);{var F=B=>{var te=kd(),ie=_(te,!0);v(te),ee(()=>ae(ie,e(m))),u(B,te)},M=B=>{hd(B,{get diffText(){return e(o)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(s)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:te=>f(i,te,!0)})},L=B=>{var te=Cd();u(B,te)};Y(O,B=>{e(m)?B(F):e(d)?B(M,1):e(l)&&B(L,2)})}u(X,K)};Y(q,X=>{e(a)&&e(n)&&e(a)===e(n)?X(H):!e(a)||!e(n)?X(j,1):X(U,-1)})}u(g,I)},$$slots:{default:!0}}),Ae()}Ge(["click"]);var Ed=P("<!> Refresh",1),Rd=P("<!> <!>",1),Nd=P('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),Md=P('<input type="number" min="0" max="50" style="width: 70px;"/>'),Ad=P("<!> Download as CSV",1),Td=P('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),Ld=P("&nbsp;<!>",1),Fd=P("<button> <!></button>"),Id=P('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),zd=P('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),Dd=P('<span class="error-badge"> </span>'),Od=P('<span class="error-badge error-badge-new">NEW</span>'),Hd=P('<div class="error-line"></div>'),jd=P('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),Vd=P('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Ud=P('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Bd=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),qd=P("<!> <!> <div><!> <!></div> <!> <!>",1);function Kd(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let s=D(ce([])),i=D(ce([...n])),o=!1;Ne(()=>{var ne;const W=(ne=Ft())==null?void 0:ne.error_files;W!=null&&W.length&&!o&&f(i,[...W],!0)});let l=D("all"),d=D(""),m=D(a),x=D(!1),k=D(""),b=D(ce(tr("errors")));Ne(()=>{rr("errors",e(b))});let z=D(ce([])),A=D(ce(new Set));function h(W){return W.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(W){const ne=W.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${W.case_id}|${W.file}|${W.severity}|${h(ne)}`}function C(W){const ne=new Map;for(const oe of W){const de=c(oe),ve=ne.get(de);ve?ve.count++:ne.set(de,{...oe,count:1,fingerprint:de,isNew:!e(A).has(de)})}return Array.from(ne.values())}async function R(){if(!(!e(s).length||!e(i).length)){f(x,!0);try{const W=await $o({cases:e(s),files:e(i),context:e(m),sev:e(l)==="all"?"":e(l),q:e(d)});f(k,"");const ne=C(W.items);f(z,W.items,!0);const oe=new Set(ne.map(de=>de.fingerprint));f(A,oe,!0),f(p,ne,!0)}catch(W){f(k,"Failed to load errors"),console.error("Failed to load errors:",W)}finally{f(x,!1)}}}let p=D(ce([])),w=null;function $(){w&&clearTimeout(w),w=setTimeout(R,250)}function g(W){return W==="error"?"error-sev-error":W==="warn"?"error-sev-warn":"error-sev-info"}let N=V(()=>kn(r.allCases));const I=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let T=V(()=>{var W;return(((W=Ft())==null?void 0:W.error_files)??I).map(ne=>({value:ne,label:ne}))}),q=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function H(W){if(f(s,W,!0),W.length===0){f(p,[],!0),f(z,[],!0);return}R()}function j(W){if(o=!0,f(i,W,!0),W.length===0){f(p,[],!0),f(z,[],!0);return}R()}function U(W){f(l,W,!0),R()}function X(){R()}let K=!1;Ne(()=>{r.allCases.length>0&&!K&&(K=!0,f(s,[...r.allCases],!0),R())}),Ne(()=>{e(b)?mr("errors",R,jn()):vt("errors")});const re=_r(()=>{K&&R()});vr(()=>{vt("errors"),re()});let y=D(ce(new Set));function S(W){const ne=new Set(e(y));ne.has(W)?ne.delete(W):ne.add(W),f(y,ne,!0)}let O=D("severity"),F=D("desc");const M={info:0,warn:1,error:2};let L=V(()=>{const W=[...e(p)];return W.sort((ne,oe)=>{let de=0;return e(O)==="severity"?de=(M[ne.severity]??9)-(M[oe.severity]??9):e(O)==="count"?de=ne.count-oe.count:de=ne[e(O)].localeCompare(oe[e(O)]),e(F)==="asc"?de:-de}),W});const B={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function te(W){e(O)===W?f(F,e(F)==="asc"?"desc":"asc",!0):(f(O,W,!0),f(F,B[W],!0))}function ie(){if(!e(p).length)return;const W=["case_id","file","severity","count","is_new","line_text"],ne=e(L).map(ve=>[ve.case_id,ve.file,ve.severity,ve.count,ve.isNew?"yes":"no",`"${ve.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),oe=[W.join(","),...ne].join(`
`),de=xr("errors",e(s),"csv");Ma(oe,de)}jt(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:ne=>{var oe=Rd(),de=G(oe);{let _e=V(jn);nr(de,{name:"errors",get intervalMs(){return e(_e)},onRefresh:R,get checked(){return e(b)},set checked(he){f(b,he,!0)}})}var ve=E(de,2);{var se=_e=>{Pe(_e,{variant:"primary",onclick:R,children:(he,Ee)=>{var pe=Ed(),Ie=G(pe);Le(Ie,{get icon(){return er}}),we(),u(he,pe)},$$slots:{default:!0}})};Y(ve,_e=>{e(b)||_e(se)})}u(ne,oe)},children:(ne,oe)=>{var de=qd(),ve=G(de);Qt(ve,{children:(Te,$e)=>{var Q=Td(),Z=G(Q);Re(Z,{text:"Cases",children:(Ce,De)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(N)},get selected(){return e(s)},onchange:H,placeholder:"Select cases..."})}});var J=E(Z,2);Re(J,{text:"Files",children:(Ce,De)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(T)},get selected(){return e(i)},onchange:j,placeholder:"Select files..."})}});var le=E(J,2);Re(le,{text:"Severity",children:(Ce,De)=>{lt(Ce,{class:"w-[90px]",get options(){return q},get value(){return e(l)},onchange:U})}});var xe=E(le,2);Re(xe,{text:"Search",children:(Ce,De)=>{var We=Nd();Ye(We),ue("input",We,$),tt(We,()=>e(d),gt=>f(d,gt)),u(Ce,We)}});var ye=E(xe,2);Re(ye,{text:"Context",children:(Ce,De)=>{var We=Md();Ye(We),ue("change",We,X),tt(We,()=>e(m),gt=>f(m,gt)),u(Ce,We)}});var fe=E(ye,2),ge=_(fe);{let Ce=V(()=>e(p).length===0);Pe(ge,{variant:"secondary",size:"sm",onclick:ie,get disabled(){return e(Ce)},children:(De,We)=>{var gt=Ad(),Vt=G(gt);Le(Vt,{get icon(){return pr}}),we(),u(De,gt)},$$slots:{default:!0}})}v(fe),u(Te,Q)}});var se=E(ve,2);{var _e=Te=>{var $e=Id(),Q=E(_($e),2);He(Q,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],Z=>Z.key,(Z,J)=>{var le=Fd(),xe=_(le,!0),ye=E(xe);{var fe=ge=>{var Ce=Ld(),De=E(G(Ce));{let We=V(()=>e(F)==="asc"?hi:vi);Le(De,{get icon(){return e(We)},size:12})}u(ge,Ce)};Y(ye,ge=>{e(O)===J.key&&ge(fe)})}v(le),ee(()=>{Se(le,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(O)===J.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ae(xe,J.label)}),ue("click",le,()=>te(J.key)),u(Z,le)}),v($e),u(Te,$e)};Y(se,Te=>{e(L).length>0&&Te(_e)})}var he=E(se,2),Ee=_(he);{var pe=Te=>{var $e=zd();u(Te,$e)};Y(Ee,Te=>{e(L).length===0&&Te(pe)})}var Ie=E(Ee,2);He(Ie,17,()=>e(L),Te=>Te.fingerprint,(Te,$e)=>{var Q=jd(),Z=_(Q),J=_(Z),le=_(J);{let et=V(()=>e(y).has(e($e).fingerprint)?pn:pi);Le(le,{get icon(){return e(et)},size:14})}v(J);var xe=E(J,2),ye=_(xe);v(xe);var fe=E(xe,2),ge=_(fe);{var Ce=et=>{var ut=Dd(),at=_(ut);v(ut),ee(()=>ae(at,`${e($e).count??""}x`)),u(et,ut)};Y(ge,et=>{e($e).count>1&&et(Ce)})}var De=E(ge,2);{var We=et=>{var ut=Od();u(et,ut)};Y(De,et=>{e($e).isNew&&et(We)})}v(fe),v(Z);var gt=E(Z,2);{var Vt=et=>{var ut=Hd();zr(ut,()=>e($e).line_html,!0),v(ut),u(et,ut)},jr=V(()=>e(y).has(e($e).fingerprint));Y(gt,et=>{e(jr)&&et(Vt)})}v(Q),ee(et=>{Se(Q,1,`error-item ${et??""}`),ae(ye,`${e($e).case_id??""} / ${e($e).file??""} : ${e($e).severity??""}`)},[()=>g(e($e).severity)]),ue("click",Z,()=>S(e($e).fingerprint)),u(Te,Q)}),v(he);var ze=E(he,2);{var Qe=Te=>{var $e=Ud(),Q=_($e),Z=_(Q);v(Q);var J=E(Q,2);{var le=ye=>{var fe=Vd(),ge=_(fe);v(fe),ee(Ce=>ae(ge,`${Ce??""} new`),[()=>e(p).filter(Ce=>Ce.isNew).length]),u(ye,fe)},xe=V(()=>e(p).some(ye=>ye.isNew));Y(J,ye=>{e(xe)&&ye(le)})}v($e),ee(()=>ae(Z,`${e(p).length??""} unique / ${e(z).length??""} total`)),u(Te,$e)};Y(ze,Te=>{e(L).length>0&&Te(Qe)})}var qe=E(ze,2);{var Je=Te=>{var $e=Bd(),Q=_($e,!0);v($e),ee(()=>ae(Q,e(k))),u(Te,$e)};Y(qe,Te=>{e(k)&&Te(Je)})}ee(()=>Se(he,1,`error-list ${e(x)?"opacity-50 pointer-events-none":""}`)),u(ne,de)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["input","change","click"]);var Gd=P('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function rf(t,r){Me(r,!0);let a=D(ce({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=D(ce([])),s=D(null);const i=M=>e(s)===null||e(s).includes(M);async function o(M){var te;const L=`/favicon-${M}.svg`;try{const ie=await fetch(L);if(!ie.ok||!((te=ie.headers.get("content-type"))!=null&&te.includes("svg")))return}catch{return}const B=document.querySelector('link[rel="icon"]');B&&(B.href=L)}async function l(){try{const M=await wo();jl(M.rows),Vl(M.doe_columns),f(n,M.rows.map(L=>L.case_id),!0),f(a,tc(Ra(),xn()),!0)}catch(M){console.error("Failed to load status:",M)}}Jn(()=>{l(),ko().then(M=>{_o(M),f(s,M.panels,!0),o(M.solver)}).catch(()=>{})});var d=Gd(),m=G(d);qi(m,{});var x=E(m,2);Yi(x,{});var k=E(x,2);xl(k,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var b=E(k,2),z=_(b);{var A=M=>{Ac(M,{onRefresh:l})},h=V(()=>i("status"));Y(z,M=>{e(h)&&M(A)})}var c=E(z,2);{var C=M=>{eu(M,{get allCases(){return e(n)}})},R=V(()=>i("residuals"));Y(c,M=>{e(R)&&M(C)})}var p=E(c,2);{var w=M=>{Cu(M,{get allCases(){return e(n)}})},$=V(()=>i("probes"));Y(p,M=>{e($)&&M(w)})}var g=E(p,2);{var N=M=>{Fu(M,{get allCases(){return e(n)}})},I=V(()=>i("performance"));Y(g,M=>{e(I)&&M(N)})}var T=E(g,2);{var q=M=>{Pd(M,{get allCases(){return e(n)}})},H=V(()=>i("compare"));Y(T,M=>{e(H)&&M(q)})}var j=E(T,2);{var U=M=>{sd(M,{get allCases(){return e(n)}})},X=V(()=>i("tail"));Y(j,M=>{e(X)&&M(U)})}var K=E(j,2);{var re=M=>{Kd(M,{get allCases(){return e(n)}})},y=V(()=>i("errors"));Y(K,M=>{e(y)&&M(re)})}v(b);var S=E(b,2),O=E(_(S),2),F=_(O);v(O),v(S),ee(()=>ke(F,"src",yl)),u(t,d),Ae()}export{rf as component};
