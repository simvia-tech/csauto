import{b as Cr,a as d,f as $,c as be,t as Be,d as Dt}from"../chunks/BNbyt5vD.js";import{o as Xn,a as cr}from"../chunks/aS-GCExk.js";import{h as Ae,L as St,G as Tt,c as Sr,J as Ut,b as Yn,o as e,N as Ia,ag as Oa,O as Sn,P as Ft,f as pt,ay as Qn,aF as Ha,ao as $n,e as mt,a as ir,aM as ja,s as Va,ab as Ua,aN as Jn,aE as ln,aO as Ba,X as Pn,aP as qa,aQ as Ka,aI as Ga,aR as gt,aS as Zn,a6 as Wa,r as ea,p as ta,aT as Hr,ae as ra,aU as Xa,aV as Ya,aC as Qa,m as Ja,d as Pr,az as na,y as Y,F as aa,aW as Za,aG as eo,aA as to,D as oa,aX as sa,aY as ro,aZ as no,E as ao,au as ia,S as Lr,k as Er,a_ as la,a$ as oo,b0 as so,b1 as ca,b2 as io,b3 as lo,b4 as ur,b5 as co,b6 as uo,b7 as fo,b8 as vo,b9 as go,ba as ho,bb as mo,aJ as $t,U as po,aK as I,a3 as oe,a4 as f,A as w,B as h,x as Me,g as B,z as Te,C as S,j as Ne,ap as xe,aL as U,bc as _o,q as Ot,bd as bo,be as st,bf as xo}from"../chunks/Dc3-F78A.js";import{i as yo,a as wo,d as se,b as We,c as ko,n as Co,e as So,s as te,f as tt}from"../chunks/B_A-7lJB.js";import{p as he,i as Q,b as rt,c as $o,l as je,s as qe}from"../chunks/CJGdJT5k.js";import{s as dt}from"../chunks/BWLKnJAp.js";import{i as Po}from"../chunks/CUMEY0Si.js";import{B as Eo}from"../chunks/DNwZ73UZ.js";function cn(t,r){return r}function Ro(t,r,a){for(var n=[],o=r.length,i,s=r.length,l=0;l<o;l++){let E=r[l];ta(E,()=>{if(i){if(i.pending.delete(E),i.done.add(E),i.pending.size===0){var _=t.outrogroups;Wr(t,ln(i.done)),_.delete(i),_.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&a!==null;if(u){var y=a,p=y.parentNode;Qa(p),p.append(y),t.items.clear()}Wr(t,r,!u)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Wr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const s of t.pending.values())for(const l of s)n.add(t.items.get(l).e)}for(var o=0;o<r.length;o++){var i=r[o];if(n!=null&&n.has(i)){i.f|=gt;const s=document.createDocumentFragment();Ja(i,s)}else Pr(r[o],a)}}var En;function Qe(t,r,a,n,o,i=null){var s=t,l=new Map,u=(r&Zn)!==0;if(u){var y=t;s=Ae?St(Tt(y)):y.appendChild(Sr())}Ae&&Ut();var p=null,E=Ua(()=>{var k=a();return Jn(k)?k:k==null?[]:ln(k)}),_,T=new Map,A=!0;function g(k){(P.effect.f&Wa)===0&&(P.pending.delete(k),P.fallback=p,No(P,_,s,r,n),p!==null&&(_.length===0?(p.f&gt)===0?ea(p):(p.f^=gt,or(p,null,s)):ta(p,()=>{p=null})))}function c(k){P.pending.delete(k)}var v=Yn(()=>{_=e(E);var k=_.length;let b=!1;if(Ae){var x=Ia(s)===Oa;x!==(k===0)&&(s=Sn(),St(s),Ft(!1),b=!0)}for(var C=new Set,M=mt,F=Va(),z=0;z<k;z+=1){Ae&&pt.nodeType===Qn&&pt.data===Ha&&(s=pt,b=!0,Ft(!1));var V=_[z],O=n(V,z),H=A?null:l.get(O);H?(H.v&&$n(H.v,V),H.i&&$n(H.i,z),F&&M.unskip_effect(H.e)):(H=Mo(l,A?s:En??(En=Sr()),V,O,z,o,r,a),A||(H.e.f|=gt),l.set(O,H)),C.add(O)}if(k===0&&i&&!p&&(A?p=ir(()=>i(s)):(p=ir(()=>i(En??(En=Sr()))),p.f|=gt)),k>C.size&&ja(),Ae&&k>0&&St(Sn()),!A)if(T.set(M,C),F){for(const[D,K]of l)C.has(D)||M.skip_effect(K.e);M.oncommit(g),M.ondiscard(c)}else g(M);b&&Ft(!0),e(E)}),P={effect:v,items:l,pending:T,outrogroups:null,fallback:p};A=!1,Ae&&(s=pt)}function tr(t){for(;t!==null&&(t.f&Xa)===0;)t=t.next;return t}function No(t,r,a,n,o){var V,O,H,D,K,q,ne,R,N;var i=(n&Ya)!==0,s=r.length,l=t.items,u=tr(t.effect.first),y,p=null,E,_=[],T=[],A,g,c,v;if(i)for(v=0;v<s;v+=1)A=r[v],g=o(A,v),c=l.get(g).e,(c.f&gt)===0&&((O=(V=c.nodes)==null?void 0:V.a)==null||O.measure(),(E??(E=new Set)).add(c));for(v=0;v<s;v+=1){if(A=r[v],g=o(A,v),c=l.get(g).e,t.outrogroups!==null)for(const m of t.outrogroups)m.pending.delete(c),m.done.delete(c);if((c.f&Hr)!==0&&(ea(c),i&&((D=(H=c.nodes)==null?void 0:H.a)==null||D.unfix(),(E??(E=new Set)).delete(c))),(c.f&gt)!==0)if(c.f^=gt,c===u)or(c,null,a);else{var P=p?p.next:u;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),yt(t,p,c),yt(t,c,P),or(c,P,a),p=c,_=[],T=[],u=tr(p.next);continue}if(c!==u){if(y!==void 0&&y.has(c)){if(_.length<T.length){var k=T[0],b;p=k.prev;var x=_[0],C=_[_.length-1];for(b=0;b<_.length;b+=1)or(_[b],k,a);for(b=0;b<T.length;b+=1)y.delete(T[b]);yt(t,x.prev,C.next),yt(t,p,x),yt(t,C,k),u=k,p=C,v-=1,_=[],T=[]}else y.delete(c),or(c,u,a),yt(t,c.prev,c.next),yt(t,c,p===null?t.effect.first:p.next),yt(t,p,c),p=c;continue}for(_=[],T=[];u!==null&&u!==c;)(y??(y=new Set)).add(u),T.push(u),u=tr(u.next);if(u===null)continue}(c.f&gt)===0&&_.push(c),p=c,u=tr(c.next)}if(t.outrogroups!==null){for(const m of t.outrogroups)m.pending.size===0&&(Wr(t,ln(m.done)),(K=t.outrogroups)==null||K.delete(m));t.outrogroups.size===0&&(t.outrogroups=null)}if(u!==null||y!==void 0){var M=[];if(y!==void 0)for(c of y)(c.f&Hr)===0&&M.push(c);for(;u!==null;)(u.f&Hr)===0&&u!==t.fallback&&M.push(u),u=tr(u.next);var F=M.length;if(F>0){var z=(n&Zn)!==0&&s===0?a:null;if(i){for(v=0;v<F;v+=1)(ne=(q=M[v].nodes)==null?void 0:q.a)==null||ne.measure();for(v=0;v<F;v+=1)(N=(R=M[v].nodes)==null?void 0:R.a)==null||N.fix()}Ro(t,M,z)}}i&&ra(()=>{var m,L;if(E!==void 0)for(c of E)(L=(m=c.nodes)==null?void 0:m.a)==null||L.apply()})}function Mo(t,r,a,n,o,i,s,l){var u=(s&qa)!==0?(s&Ka)===0?Ga(a,!1,!1):Pn(a):null,y=(s&Ba)!==0?Pn(o):null;return{v:u,i:y,e:ir(()=>(i(r,u??a,y??o,l),()=>{t.delete(n)}))}}function or(t,r,a){if(t.nodes)for(var n=t.nodes.start,o=t.nodes.end,i=r&&(r.f&gt)===0?r.nodes.start:a;n!==null;){var s=na(n);if(i.before(n),n===o)return;n=s}}function yt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Ar(t,r,a=!1,n=!1,o=!1,i=!1){var s=t,l="";if(a){var u=t;Ae&&(s=St(Tt(u)))}Y(()=>{var y=aa;if(l===(l=r()??"")){Ae&&Ut();return}if(a&&!Ae){y.nodes=null,u.innerHTML=l,l!==""&&Cr(Tt(u),u.lastChild);return}if(y.nodes!==null&&(Za(y.nodes.start,y.nodes.end),y.nodes=null),l!==""){if(Ae){pt.data;for(var p=Ut(),E=p;p!==null&&(p.nodeType!==Qn||p.data!=="");)E=p,p=na(p);if(p===null)throw eo(),to;Cr(pt,E),s=St(p);return}var _=n?sa:o?ro:void 0,T=oa(n?"svg":o?"math":"template",_);T.innerHTML=l;var A=n||o?T:T.content;if(Cr(Tt(A),A.lastChild),n||o)for(;Tt(A);)s.before(Tt(A));else s.before(A)}})}function Ue(t,r,a,n,o){var l;Ae&&Ut();var i=(l=r.$$slots)==null?void 0:l[a],s=!1;i===!0&&(i=r.children,s=!0),i===void 0||i(t,s?()=>n:n)}function To(t,r,a,n,o,i){let s=Ae;Ae&&Ut();var l=null;Ae&&pt.nodeType===no&&(l=pt,Ut());var u=Ae?pt:t,y=new Eo(u,!1);Yn(()=>{const p=r()||null;var E=sa;if(p===null){y.ensure(null,null);return}return y.ensure(p,_=>{if(p){if(l=Ae?l:oa(p,E),Cr(l,l),n){Ae&&yo(p)&&l.append(document.createComment(""));var T=Ae?Tt(l):l.appendChild(Sr());Ae&&(T===null?Ft(!1):St(T)),n(l,T)}aa.nodes.end=l,_.before(l)}Ae&&St(_)}),()=>{}},ao),ia(()=>{}),s&&(Ft(!0),St(u))}function Lo(t,r,a){Lr(()=>{var n=Er(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Ao(t,r){var a=void 0,n;la(()=>{a!==(a=r())&&(n&&(Pr(n),n=null),a&&(n=ir(()=>{Lr(()=>a(t))})))})}function ua(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(a=ua(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Fo(){for(var t,r,a=0,n="",o=arguments.length;a<o;a++)(t=arguments[a])&&(r=ua(t))&&(n&&(n+=" "),n+=r);return n}function ut(t){return typeof t=="object"?Fo(t):t??""}const Rn=[...` 	
\r\f \v\uFEFF`];function zo(t,r,a){var n=t==null?"":""+t;if(a){for(var o of Object.keys(a))if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var l=s+i;(s===0||Rn.includes(n[s-1]))&&(l===n.length||Rn.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function Nn(t,r=!1){var a=r?" !important;":";",n="";for(var o of Object.keys(t)){var i=t[o];i!=null&&i!==""&&(n+=" "+o+": "+i+a)}return n}function jr(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Do(t,r){if(r){var a="",n,o;if(Array.isArray(r)?(n=r[0],o=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(jr)),o&&u.push(...Object.keys(o).map(jr));var y=0,p=-1;const g=t.length;for(var E=0;E<g;E++){var _=t[E];if(l?_==="/"&&t[E-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&t[E+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?s++:_===")"&&s--,!l&&i===!1&&s===0){if(_===":"&&p===-1)p=E;else if(_===";"||E===g-1){if(p!==-1){var T=jr(t.substring(y,p).trim());if(!u.includes(T)){_!==";"&&E++;var A=t.substring(y,E).trim();a+=" "+A+";"}}y=E+1,p=-1}}}}return n&&(a+=Nn(n)),o&&(a+=Nn(o,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function ke(t,r,a,n,o,i){var s=t.__className;if(Ae||s!==a||s===void 0){var l=zo(a,n,i);(!Ae||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&o!==i)for(var u in i){var y=!!i[u];(o==null||y!==!!o[u])&&t.classList.toggle(u,y)}return i}function Vr(t,r={},a,n){for(var o in a){var i=a[o];r[o]!==i&&(a[o]==null?t.style.removeProperty(o):t.style.setProperty(o,i,n))}}function Je(t,r,a,n){var o=t.__style;if(Ae||o!==r){var i=Do(r,n);(!Ae||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(Vr(t,a==null?void 0:a[0],n[0]),Vr(t,a==null?void 0:a[1],n[1],"important")):Vr(t,a,n));return n}function Rr(t,r,a=!1){if(t.multiple){if(r==null)return;if(!Jn(r))return oo();for(var n of t.options)n.selected=r.includes(sr(n));return}for(n of t.options){var o=sr(n);if(so(o,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function da(t){var r=new MutationObserver(()=>{Rr(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ia(()=>{r.disconnect()})}function Io(t,r,a=r){var n=new WeakSet,o=!0;ca(t,"change",i=>{var s=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(s),sr);else{var u=t.querySelector(s)??t.querySelector("option:not([disabled])");l=u&&sr(u)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Lr(()=>{var i=r();if(t===document.activeElement){var s=mt;if(n.has(s))return}if(Rr(t,i,o),o&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=sr(l),a(i))}t.__value=i,o=!1}),da(t)}function sr(t){return"__value"in t?t.__value:t.value}const rr=Symbol("class"),nr=Symbol("style"),fa=Symbol("is custom element"),va=Symbol("is html"),Oo=ur?"link":"LINK",Ho=ur?"input":"INPUT",jo=ur?"option":"OPTION",Vo=ur?"select":"SELECT",Uo=ur?"progress":"PROGRESS";function Ye(t){if(Ae){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;Ce(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var o=t.checked;Ce(t,"checked",null),t.checked=o}}};t.__on_r=a,ra(a),vo()}}function un(t,r){var a=dn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Uo)||(t.value=r??"")}function Bo(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Ce(t,r,a,n){var o=dn(t);Ae&&(o[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Oo)||o[r]!==(o[r]=a)&&(r==="loading"&&(t[ho]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ga(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function qo(t,r,a,n,o=!1,i=!1){if(Ae&&o&&t.nodeName===Ho){var s=t,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Ye(s)}var u=dn(t),y=u[fa],p=!u[va];let E=Ae&&y;E&&Ft(!1);var _=r||{},T=t.nodeName===jo;for(var A in r)A in a||(a[A]=null);a.class?a.class=ut(a.class):a[rr]&&(a.class=null),a[nr]&&(a.style??(a.style=null));var g=ga(t);for(const C in a){let M=a[C];if(T&&C==="value"&&M==null){t.value=t.__value="",_[C]=M;continue}if(C==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";ke(t,c,M,n,r==null?void 0:r[rr],a[rr]),_[C]=M,_[rr]=a[rr];continue}if(C==="style"){Je(t,M,r==null?void 0:r[nr],a[nr]),_[C]=M,_[nr]=a[nr];continue}var v=_[C];if(!(M===v&&!(M===void 0&&t.hasAttribute(C)))){_[C]=M;var P=C[0]+C[1];if(P!=="$$")if(P==="on"){const F={},z="$$"+C;let V=C.slice(2);var k=So(V);if(wo(V)&&(V=V.slice(0,-7),F.capture=!0),!k&&v){if(M!=null)continue;t.removeEventListener(V,_[z],F),_[z]=null}if(k)se(V,t,M),We([V]);else if(M!=null){let O=function(H){_[C].call(this,H)};_[z]=ko(V,t,O,F)}}else if(C==="style")Ce(t,C,M);else if(C==="autofocus")co(t,!!M);else if(!y&&(C==="__value"||C==="value"&&M!=null))t.value=t.__value=M;else if(C==="selected"&&T)Bo(t,M);else{var b=C;p||(b=Co(b));var x=b==="defaultValue"||b==="defaultChecked";if(M==null&&!y&&!x)if(u[C]=null,b==="value"||b==="checked"){let F=t;const z=r===void 0;if(b==="value"){let V=F.defaultValue;F.removeAttribute(b),F.defaultValue=V,F.value=F.__value=z?V:null}else{let V=F.defaultChecked;F.removeAttribute(b),F.defaultChecked=V,F.checked=z?V:!1}}else t.removeAttribute(C);else x||g.includes(b)&&(y||typeof M!="string")?(t[b]=M,b in u&&(u[b]=uo)):typeof M!="function"&&Ce(t,b,M)}}}return E&&Ft(!0),_}function Mn(t,r,a=[],n=[],o=[],i,s=!1,l=!1){io(o,a,n,u=>{var y=void 0,p={},E=t.nodeName===Vo,_=!1;if(la(()=>{var A=r(...u.map(e)),g=qo(t,y,A,i,s,l);_&&E&&"value"in A&&Rr(t,A.value);for(let v of Object.getOwnPropertySymbols(p))A[v]||Pr(p[v]);for(let v of Object.getOwnPropertySymbols(A)){var c=A[v];v.description===lo&&(!y||c!==y[v])&&(p[v]&&Pr(p[v]),p[v]=ir(()=>Ao(t,()=>c))),g[v]=c}y=g}),E){var T=t;Lr(()=>{Rr(T,y.value,!0),da(T)})}_=!0})}function dn(t){return t.__attributes??(t.__attributes={[fa]:t.nodeName.includes("-"),[va]:t.namespaceURI===fo})}var Tn=new Map;function ga(t){var r=t.getAttribute("is")||t.nodeName,a=Tn.get(r);if(a)return a;Tn.set(r,a=[]);for(var n,o=t,i=Element.prototype;i!==o;){n=mo(o);for(var s in n)n[s].set&&a.push(s);o=go(o)}return a}function et(t,r,a=r){var n=new WeakSet;ca(t,"input",async o=>{var i=o?t.defaultValue:t.value;if(i=Ur(t)?Br(i):i,a(i),mt!==null&&n.add(mt),await $t(),i!==(i=r())){var s=t.selectionStart,l=t.selectionEnd,u=t.value.length;if(t.value=i??"",l!==null){var y=t.value.length;s===l&&l===u&&y>u?(t.selectionStart=y,t.selectionEnd=y):(t.selectionStart=s,t.selectionEnd=Math.min(l,y))}}}),(Ae&&t.defaultValue!==t.value||Er(r)==null&&t.value)&&(a(Ur(t)?Br(t.value):t.value),mt!==null&&n.add(mt)),po(()=>{var o=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Ur(t)&&o===Br(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function Ur(t){var r=t.type;return r==="number"||r==="range"}function Br(t){return t===""?null:+t}let bt=I(oe({type:"none",props:{},resolve:null}));function Ko(){return e(bt)}function ot(t=void 0){const{resolve:r}=e(bt);f(bt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Go(t){return new Promise(r=>{f(bt,{type:"run",props:{cases:t},resolve:r},!0)})}function Wo(t){return new Promise(r=>{f(bt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Xo(t){return new Promise(r=>{f(bt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Xe(t,r="Alert"){return new Promise(a=>{f(bt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Ln(t,r="Confirm",a="OK",n="primary"){return new Promise(o=>{f(bt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:o},!0)})}function fn(t,r="",a="Input",n="",o=!1){return new Promise(i=>{f(bt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:o},resolve:i},!0)})}var Yo=$('<div style="display:contents;"><!></div>');function Xt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Yo(),o=w(n);dt(o,()=>r.children),h(n),Lo(n,i=>a==null?void 0:a(i)),d(t,n)}var Qo=$('<div class="text-xs text-muted font-light"> </div>'),Jo=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function dr(t,r){Me(r,!0);const a=A=>{var g=Jo(),c=w(g),v=w(c),P=w(v),k=w(P,!0);h(P);var b=S(P,2);{var x=z=>{var V=Qo(),O=w(V,!0);h(V),Y(()=>te(O,r.subtitle)),d(z,V)};Q(b,z=>{r.subtitle&&z(x)})}h(v);var C=S(v,2);dt(C,()=>r.children);var M=S(C,2),F=w(M);dt(F,()=>r.footer),h(M),h(c),h(g),Y(()=>{ke(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),Ce(c,"aria-labelledby",r.titleId),Ce(P,"id",r.titleId),te(k,r.title)}),se("keydown",g,s),se("mousedown",g,u),se("click",g,y),d(A,g)};let n=he(r,"maxWidth",3,"520px"),o=he(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():ot(null)}function s(A){A.key==="Escape"?i():A.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function u(A){l=A.target.dataset.backdrop!==void 0}function y(A){const g=A.target.dataset.backdrop!==void 0;l&&g&&i(),l=!1}var p=be(),E=B(p);{var _=A=>{Xt(A,{children:(g,c)=>{a(g)}})},T=A=>{a(A)};Q(E,A=>{o()?A(_):A(T,-1)})}d(t,p),Te()}We(["keydown","mousedown","click"]);var Zo=$("<button><!></button>");function $e(t,r){let a=he(r,"variant",3,"primary"),n=he(r,"size",3,"default"),o=he(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},s={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=Zo(),u=w(l);dt(u,()=>r.children),h(l),Y(()=>{ke(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${s[a()]??""}`),l.disabled=o()}),se("click",l,function(...y){var p;(p=r.onclick)==null||p.apply(this,y)}),d(t,l)}We(["click"]);var es=$("<!> <span><!></span>",1),ts=$('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),rs=$('<input class="w-full"/>'),ns=$('<div class="mb-4.5"><!></div>'),as=$('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function os(t,r){Me(r,!0);let a=he(r,"confirmLabel",3,"OK"),n=he(r,"confirmVariant",3,"primary"),o=he(r,"value",3,""),i=he(r,"placeholder",3,""),s=he(r,"multiline",3,!1);const l=o();let u=I(oe(l)),y=I(void 0),p=I(void 0);Ne(()=>{var T;r.mode==="prompt"&&e(y)?(e(y).focus(),"select"in e(y)&&e(y).select()):e(p)&&((T=e(p).querySelector("button"))==null||T.focus())});function E(){r.mode==="prompt"?ot(e(u)):r.mode==="confirm"?ot(!0):ot()}function _(){r.mode==="confirm"?ot(!1):r.mode==="prompt"?ot(null):ot()}{const T=g=>{var c=es(),v=B(c);{var P=x=>{$e(x,{variant:"secondary",onclick:_,children:(C,M)=>{xe();var F=Be("Cancel");d(C,F)},$$slots:{default:!0}})};Q(v,x=>{r.mode!=="alert"&&x(P)})}var k=S(v,2),b=w(k);$e(b,{get variant(){return n()},onclick:E,children:(x,C)=>{xe();var M=Be();Y(()=>te(M,a())),d(x,M)},$$slots:{default:!0}}),h(k),rt(k,x=>f(p,x),()=>e(p)),d(g,c)};let A=U(()=>s()?void 0:E);dr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(A)},onCancel:_,footer:T,children:(g,c)=>{var v=as(),P=B(v),k=w(P,!0);h(P);var b=S(P,2);{var x=C=>{var M=ns(),F=w(M);{var z=O=>{var H=ts();_o(H),rt(H,D=>f(y,D),()=>e(y)),Y(()=>Ce(H,"placeholder",i())),et(H,()=>e(u),D=>f(u,D)),d(O,H)},V=O=>{var H=rs();Ye(H),rt(H,D=>f(y,D),()=>e(y)),Y(()=>Ce(H,"placeholder",i())),et(H,()=>e(u),D=>f(u,D)),d(O,H)};Q(F,O=>{s()?O(z):O(V,-1)})}h(M),d(C,M)};Q(b,C=>{r.mode==="prompt"&&C(x)})}Y(()=>te(k,r.message)),d(g,v)},$$slots:{footer:!0,default:!0}})}Te()}var ss=$('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Re(t,r){var a=ss(),n=w(a),o=S(n);dt(o,()=>r.children),h(a),Y(()=>te(n,`${r.text??""} `)),d(t,a)}function kt(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function Ct(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function is(t,r){return localStorage.getItem(t)??r}function ls(){return{n:kt("csauto_run_n",1),nt:kt("csauto_run_nt",1),maxParallel:kt("csauto_run_max_parallel",0)||null}}function cs(t){Ct("csauto_run_n",t.n),Ct("csauto_run_nt",t.nt),t.maxParallel&&Ct("csauto_run_max_parallel",t.maxParallel)}function us(){return{n:kt("csauto_restart_n",1),nt:kt("csauto_restart_nt",1),maxParallel:kt("csauto_restart_max_parallel",0)||null,mode:is("csauto_restart_mode","iterations"),value:kt("csauto_restart_value",100)}}function ds(t){Ct("csauto_restart_n",t.n),Ct("csauto_restart_nt",t.nt),t.maxParallel&&Ct("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),Ct("csauto_restart_value",t.value)}function fs(){return{keepLast:kt("csauto_clean_keep_last",1)}}function vs(t){Ct("csauto_clean_keep_last",t.keepLast)}var gs=$("<!> <!>",1),hs=$('<input type="number" min="1" step="1"/>'),ms=$('<input type="number" min="1" step="1"/>'),ps=$('<input type="number" min="0" step="1"/>'),_s=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div>');function bs(t,r){Me(r,!0);const a=ls(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=I(oe(a.n)),i=I(oe(a.nt)),s=I(oe(n));async function l(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}const u={n:e(o),nt:e(i),maxParallel:e(s)||null};cs(u),ot(u)}{const u=E=>{var _=gs(),T=B(_);$e(T,{variant:"secondary",onclick:()=>ot(null),children:(g,c)=>{xe();var v=Be("Cancel");d(g,v)},$$slots:{default:!0}});var A=S(T,2);$e(A,{variant:"run",onclick:l,children:(g,c)=>{xe();var v=Be("Run");d(g,v)},$$slots:{default:!0}}),d(E,_)};let y=U(()=>r.cases.length),p=U(()=>r.cases.length>1?"s":"");dr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(y)??""} case${e(p)??""} selected`},onConfirm:l,footer:u,children:(E,_)=>{var T=_s(),A=w(T);Re(A,{text:"MPI Ranks (n)",children:(v,P)=>{var k=hs();Ye(k),et(k,()=>e(o),b=>f(o,b)),d(v,k)}});var g=S(A,2);Re(g,{text:"OMP Threads (nt)",children:(v,P)=>{var k=ms();Ye(k),et(k,()=>e(i),b=>f(i,b)),d(v,k)}});var c=S(g,2);Re(c,{text:"Max Parallel",children:(v,P)=>{var k=ps();Ye(k),et(k,()=>e(s),b=>f(s,b)),d(v,k)}}),h(T),d(E,T)},$$slots:{footer:!0,default:!0}})}Te()}var xs=$("<!> <!>",1),ys=$('<input type="number" min="1" step="1"/>'),ws=$('<input type="number" min="1" step="1"/>'),ks=$('<input type="number" min="0" step="1"/>'),Cs=$("<select><option>Iterations</option><option>Physical time</option></select>"),Ss=$('<input type="number"/>'),$s=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function Ps(t,r){Me(r,!0);const a=us(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=I(oe(a.n)),i=I(oe(a.nt)),s=I(oe(n)),l=I(oe(a.mode)),u=I(oe(a.value)),y=U(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),p=U(()=>e(l)==="iterations"?"1":"any"),E=U(()=>e(l)==="iterations"?"1":"0");async function _(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(u))||e(u)<=0){await Xe("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(u))){await Xe("Iterations must be an integer.","Invalid value");return}const T={n:e(o),nt:e(i),maxParallel:e(s)||null,restartMode:e(l),restartValue:e(u)};ds({n:e(o),nt:e(i),maxParallel:e(s)||null,mode:e(l),value:e(u)}),ot(T)}{const T=c=>{var v=xs(),P=B(v);$e(P,{variant:"secondary",onclick:()=>ot(null),children:(b,x)=>{xe();var C=Be("Cancel");d(b,C)},$$slots:{default:!0}});var k=S(P,2);$e(k,{variant:"warning",onclick:_,children:(b,x)=>{xe();var C=Be("Restart");d(b,C)},$$slots:{default:!0}}),d(c,v)};let A=U(()=>r.cases.length),g=U(()=>r.cases.length>1?"s":"");dr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(A)??""} case${e(g)??""} selected`},onConfirm:_,footer:T,children:(c,v)=>{var P=$s(),k=B(P),b=w(k);Re(b,{text:"MPI Ranks (n)",children:(V,O)=>{var H=ys();Ye(H),et(H,()=>e(o),D=>f(o,D)),d(V,H)}});var x=S(b,2);Re(x,{text:"OMP Threads (nt)",children:(V,O)=>{var H=ws();Ye(H),et(H,()=>e(i),D=>f(i,D)),d(V,H)}});var C=S(x,2);Re(C,{text:"Max Parallel",children:(V,O)=>{var H=ks();Ye(H),et(H,()=>e(s),D=>f(s,D)),d(V,H)}}),h(k);var M=S(k,2),F=w(M);Re(F,{text:"Stop criterion",children:(V,O)=>{var H=Cs(),D=w(H);D.value=D.__value="iterations";var K=S(D);K.value=K.__value="physical_time",h(H),Io(H,()=>e(l),q=>f(l,q)),d(V,H)}});var z=S(F,2);Re(z,{get text(){return e(y)},children:(V,O)=>{var H=Ss();Ye(H),Y(()=>{Ce(H,"min",e(E)),Ce(H,"step",e(p))}),et(H,()=>e(u),D=>f(u,D)),d(V,H)}}),h(M),d(c,P)},$$slots:{footer:!0,default:!0}})}Te()}function Le(t,r){let a=he(r,"size",3,14);var n=be(),o=B(n);$o(o,()=>r.icon,(i,s)=>{s(i,{get size(){return a()},class:"icon"})}),d(t,n)}/**
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
 */const Es={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Rs=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const An=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var Ns=Dt("<svg><!><!></svg>");function Ke(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]),n=je(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let o=he(r,"name",8,void 0),i=he(r,"color",8,"currentColor"),s=he(r,"size",8,24),l=he(r,"strokeWidth",8,2),u=he(r,"absoluteStrokeWidth",8,!1),y=he(r,"iconNode",24,()=>[]);Po();var p=Ns();Mn(p,(T,A,g)=>({...Es,...T,...n,width:s(),height:s(),stroke:i(),"stroke-width":A,class:g}),[()=>Rs(n)?void 0:{"aria-hidden":"true"},()=>(Ot(u()),Ot(l()),Ot(s()),Er(()=>u()?Number(l())*24/Number(s()):l())),()=>(Ot(An),Ot(o()),Ot(a),Er(()=>An("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var E=w(p);Qe(E,1,y,cn,(T,A)=>{var g=U(()=>bo(e(A),2));let c=()=>e(g)[0],v=()=>e(g)[1];var P=be(),k=B(P);To(k,c,!0,(b,x)=>{Mn(b,()=>({...v()}))}),d(T,P)});var _=S(E);Ue(_,r,"default",{}),h(p),d(t,p),Te()}function Ms(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Ke(t,qe({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ts(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Ke(t,qe({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ls(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ke(t,qe({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function vn(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Ke(t,qe({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function As(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Ke(t,qe({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Fs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Ke(t,qe({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function zs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Ke(t,qe({name:"circle-x"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function fr(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ke(t,qe({name:"download"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ds(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Ke(t,qe({name:"droplets"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Is(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ke(t,qe({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Os(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ke(t,qe({name:"external-link"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Hs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Ke(t,qe({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function js(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Ke(t,qe({name:"pause"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Vs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Ke(t,qe({name:"pen-line"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Us(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Ke(t,qe({name:"pencil"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function ha(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Ke(t,qe({name:"play"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Bs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ke(t,qe({name:"plus"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Yt(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ke(t,qe({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function qs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Ke(t,qe({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ks(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ke(t,qe({name:"save"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Gs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Ke(t,qe({name:"settings"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ws(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ke(t,qe({name:"trash-2"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ue(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}var Xs=$('<li role="option"> </li>'),Ys=$('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Qs=$('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function it(t,r){Me(r,!0);let a=he(r,"value",3,""),n=he(r,"placeholder",3,"Select..."),o=he(r,"class",3,""),i=he(r,"buttonClass",3,""),s=I(!1),l=I(void 0),u=I(void 0),y=I(""),p=U(()=>{var z;return((z=r.options.find(V=>V.value===a()))==null?void 0:z.label)??n()});function E(z){var V;f(s,!1),(V=r.onchange)==null||V.call(r,z)}function _(){if(!e(l)||!e(u))return;const z=e(l).getBoundingClientRect(),V=e(u).offsetHeight,O=4,H=window.innerHeight-z.bottom-O,K=H<V&&z.top-O>H?z.top-O-V:z.bottom+O,q=Math.min(z.left,window.innerWidth-z.width);f(y,`position:fixed; top:${K}px; left:${q}px; width:${z.width}px; z-index:9999;`)}async function T(){f(s,!e(s)),e(s)&&(await $t(),_())}function A(z){z.key==="Escape"&&f(s,!1)}function g(z){e(s)&&e(l)&&!e(l).contains(z.target)&&e(u)&&!e(u).contains(z.target)&&f(s,!1)}var c=Qs();tt("mousedown",st,g),tt("keydown",st,A),tt("scroll",st,()=>{e(s)&&f(s,!1)});var v=B(c),P=w(v),k=w(P),b=w(k,!0);h(k);var x=S(k,2),C=w(x);Le(C,{get icon(){return vn},size:14}),h(x),h(P),rt(P,z=>f(l,z),()=>e(l)),h(v);var M=S(v,2);{var F=z=>{Xt(z,{children:(V,O)=>{var H=Ys();Qe(H,21,()=>r.options,D=>D.value,(D,K)=>{var q=Xs();Ce(q,"tabindex",0);var ne=w(q,!0);h(q),Y(()=>{Ce(q,"aria-selected",e(K).value===a()),ke(q,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(K).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),te(ne,e(K).label)}),se("mousedown",q,R=>{R.stopPropagation(),E(e(K).value)}),d(D,q)}),h(H),rt(H,D=>f(u,D),()=>e(u)),Y(()=>Je(H,e(y))),d(V,H)}})};Q(M,z=>{e(s)&&z(F)})}Y(()=>{ke(v,1,`relative inline-flex ${o()??""}`),ke(P,1,ut(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),Ce(P,"aria-expanded",e(s)),te(b,e(p)),ke(x,1,`text-muted shrink-0 transition-transform duration-150 ${e(s)?"rotate-180":""}`)}),se("mousedown",P,z=>{z.stopPropagation(),T()}),d(t,c),Te()}We(["mousedown"]);var Js=Dt('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Zs=$('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),ei=$('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),ti=$('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Bt(t,r){Me(r,!0);let a=he(r,"selected",19,()=>[]),n=he(r,"placeholder",3,"Select..."),o=he(r,"class",3,""),i=I(!1),s=I(void 0),l=I(void 0),u=I(""),y=U(()=>new Set(a())),p=U(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(O=>{var H;return((H=r.options.find(D=>D.value===O))==null?void 0:H.label)??O}).join(", "):`${a().length} selected`);function E(O){var D;const H=new Set(e(y));H.has(O)?H.delete(O):H.add(O),(D=r.onchange)==null||D.call(r,[...H])}function _(){var O;(O=r.onchange)==null||O.call(r,r.options.map(H=>H.value))}function T(){var O;(O=r.onchange)==null||O.call(r,[])}function A(){if(!e(s)||!e(l))return;const O=e(s).getBoundingClientRect(),H=e(l).offsetHeight,D=4,K=window.innerHeight-O.bottom-D,ne=K<H&&O.top-D>K?O.top-D-H:O.bottom+D,R=Math.min(O.left,window.innerWidth-O.width);f(u,`position:fixed; top:${ne}px; left:${R}px; min-width:${O.width}px; z-index:9999;`)}async function g(){f(i,!e(i)),e(i)&&(await $t(),A())}function c(O){e(i)&&e(s)&&!e(s).contains(O.target)&&e(l)&&!e(l).contains(O.target)&&f(i,!1)}function v(O){O.key==="Escape"&&f(i,!1)}var P=ti();tt("mousedown",st,c),tt("keydown",st,v),tt("scroll",st,()=>{e(i)&&f(i,!1)});var k=B(P),b=w(k),x=w(b),C=w(x,!0);h(x);var M=S(x,2),F=w(M);Le(F,{get icon(){return vn},size:14}),h(M),h(b),rt(b,O=>f(s,O),()=>e(s)),h(k);var z=S(k,2);{var V=O=>{Xt(O,{children:(H,D)=>{var K=ei(),q=w(K),ne=w(q),R=S(ne,2);h(q);var N=S(q,2);Qe(N,17,()=>r.options,m=>m.value,(m,L)=>{var j=Zs(),ee=w(j),ie=w(ee);{var Pe=ae=>{var me=Js();d(ae,me)},W=U(()=>e(y).has(e(L).value));Q(ie,ae=>{e(W)&&ae(Pe)})}h(ee);var Z=S(ee,2),ue=w(Z,!0);h(Z),h(j),Y(ae=>{ke(ee,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${ae??""}`),te(ue,e(L).label)},[()=>e(y).has(e(L).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),se("mousedown",j,ae=>{ae.stopPropagation(),E(e(L).value)}),d(m,j)}),h(K),rt(K,m=>f(l,m),()=>e(l)),Y(()=>Je(K,e(u))),se("mousedown",ne,m=>{m.stopPropagation(),_()}),se("mousedown",R,m=>{m.stopPropagation(),T()}),d(H,K)}})};Q(z,O=>{e(i)&&O(V)})}Y(()=>{ke(k,1,`relative inline-flex ${o()??""}`),Ce(b,"aria-expanded",e(i)),te(C,e(p)),ke(M,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),se("mousedown",b,O=>{O.stopPropagation(),g()}),d(t,P),Te()}We(["mousedown"]);const Xr="csauto_token";let ma=I(oe(localStorage.getItem(Xr)??""));function pa(){return e(ma)}function _a(t){f(ma,t,!0),t?localStorage.setItem(Xr,t):localStorage.removeItem(Xr)}let br=null;async function gn(t,r={}){const a=new Headers(r.headers),n=pa();n&&a.set("X-CSAUTO-TOKEN",n);const o=await fetch(t,{...r,headers:a});if(o.status===401){br||(br=fn("API token required:",n,"Authentication"));const i=await br;return br=null,i===null?o:(_a(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return o}async function vt(t){const r=await gn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Fr(t){const r=await gn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Et(t,r){const a=await gn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function zr(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function ri(t=!1){return vt(`/api/status${t?"?log=1":""}`)}function Fn(t){return vt(`/api/perf?${zr(t)}`)}function ni(t){return vt(`/api/residual_columns?${zr(t)}`).then(r=>r.columns??[])}function ai(t,r,a={}){const n=new URLSearchParams;return t.forEach(o=>n.append("case",o)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Fr(`/api/residuals_svg?${n}`)}function ba(t){return vt(`/api/restart_origin?${zr(t)}`)}function oi(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),vt(`/api/recent_errors?${r}`)}function si(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Fr(`/api/tail?${n}`)}function ii(t){return vt(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function li(t){return vt(`/api/resu_dirs?${zr(t)}`).then(r=>r.dirs??[])}function Yr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),vt(`/api/probes?${a}`).then(n=>n.files??[])}function ci(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),vt(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function ui(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(o=>n.append("column",o)),vt(`/api/probe_position?${n}`)}function di(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Fr(`/api/probe_svg?${r}`)}function fi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Fr(`/api/compare_runs?${r}`)}function zn(t){return Et("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function vi(t){return Et("/api/kill_case",{cases:t}).then(()=>{})}function xr(t){return Et("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function gi(t){return Et("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function hi(t,r){return Et("/api/case_note",{case:t,note:r}).then(()=>{})}function mi(t,r){return Et("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function pi(t){return Et("/api/open_gui",{case:t}).then(()=>{})}function _i(){return vt("/api/settings/telemetry")}function bi(t){return Et("/api/settings/telemetry",{enabled:t})}var xi=$("<!> <!>",1),yi=$('<input type="number" min="0" step="1" class="w-[80px]"/>'),wi=$('<span class="text-xs text-muted">Loading...</span>'),ki=$('<span class="text-xs text-muted">No folders found</span>'),Ci=$('<div class="mb-3"><!></div>'),Si=$('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function $i(t,r){Me(r,!0);const a=fs();let n=I("keep_latest"),o=I(oe(a.keepLast)),i=I(oe([])),s=I(oe([])),l=I(!0),u=U(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const y=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let p=U(()=>e(i).map(_=>({value:_,label:_})));Xn(async()=>{try{f(i,await li(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function E(){if(e(u)&&e(s).length===0){await Xe("Please select at least one RESU folder.","Missing selection");return}const _={action:e(n)};e(n)==="keep_latest"?(_.keepLast=e(o),vs({keepLast:e(o)})):e(n)==="delete_all"?_.keepLast=0:e(n)==="keep_folder"?_.keepResu=e(s):e(n)==="delete_folder"&&(_.deleteResu=e(s)),ot(_)}{const _=g=>{var c=xi(),v=B(c);$e(v,{variant:"secondary",onclick:()=>ot(null),children:(k,b)=>{xe();var x=Be("Cancel");d(k,x)},$$slots:{default:!0}});var P=S(v,2);$e(P,{variant:"primary",onclick:E,children:(k,b)=>{xe();var x=Be("Clean");d(k,x)},$$slots:{default:!0}}),d(g,c)};let T=U(()=>r.cases.length),A=U(()=>r.cases.length>1?"s":"");dr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(T)??""} case${e(A)??""} selected`},footer:_,children:(g,c)=>{var v=Si(),P=B(v),k=w(P);Re(k,{text:"Action",children:(F,z)=>{it(F,{class:"w-[200px]",get options(){return y},get value(){return e(n)},onchange:V=>f(n,V,!0)})}});var b=S(k,2);{var x=F=>{Re(F,{text:"Keep last",children:(z,V)=>{var O=yi();Ye(O),et(O,()=>e(o),H=>f(o,H)),d(z,O)}})};Q(b,F=>{e(n)==="keep_latest"&&F(x)})}h(P);var C=S(P,2);{var M=F=>{var z=Ci(),V=w(z);Re(V,{text:"RESU folders",children:(O,H)=>{var D=be(),K=B(D);{var q=N=>{var m=wi();d(N,m)},ne=N=>{var m=ki();d(N,m)},R=N=>{Bt(N,{class:"w-full",get options(){return e(p)},get selected(){return e(s)},onchange:m=>f(s,m,!0),placeholder:"Select folders..."})};Q(K,N=>{e(l)?N(q):e(i).length===0?N(ne,1):N(R,-1)})}d(O,D)}}),h(z),d(F,z)};Q(C,F=>{e(u)&&F(M)})}d(g,v)},$$slots:{footer:!0,default:!0}})}Te()}function Pi(t,r){Me(r,!0);let a=U(Ko);var n=be(),o=B(n);{var i=y=>{bs(y,{get cases(){return e(a).props.cases}})},s=y=>{Ps(y,{get cases(){return e(a).props.cases}})},l=y=>{$i(y,{get cases(){return e(a).props.cases}})},u=y=>{os(y,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Q(o,y=>{e(a).type==="run"?y(i):e(a).type==="restart"?y(s,1):e(a).type==="clean"?y(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&y(u,3)})}d(t,n),Te()}let lr=I(oe([])),Ei=0;function Ri(){return e(lr)}function yr(t,r="success",a=3500){const n=++Ei;f(lr,[...e(lr),{id:n,message:t,variant:r}],!0),setTimeout(()=>xa(n),a)}function xa(t){f(lr,e(lr).filter(r=>r.id!==t),!0)}var Ni=$('<div role="status"> </div>'),Mi=$('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Ti(t,r){Me(r,!0);let a=U(Ri);Xt(t,{children:(n,o)=>{var i=Mi();Qe(i,21,()=>e(a),s=>s.id,(s,l)=>{var u=Ni(),y=w(u,!0);h(u),Y(()=>{ke(u,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),te(y,e(l).message)}),se("click",u,()=>xa(e(l).id)),d(s,u)}),h(i),d(n,i)}}),Te()}We(["click"]);var Li=Dt('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Ai=Dt('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Fi=$('<span role="checkbox"><!></span>'),zi=$("<span> </span><!>",1),Di=$("<!><span> </span>",1),Ii=$('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function zt(t,r){Me(r,!0);const a=g=>{var c=Fi(),v=w(c);{var P=b=>{var x=Li();Y(()=>Je(x,`width: ${s()-4}px; height: ${s()-4}px;`)),d(b,x)},k=b=>{var x=Ai();Y(()=>Je(x,`width: ${s()-4}px; height: ${s()-4}px;`)),d(b,x)};Q(v,b=>{n()&&!o()?b(P):o()&&b(k,1)})}h(c),Y(()=>{ke(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||o()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Je(c,`width: ${s()??""}px; height: ${s()??""}px;`),Ce(c,"aria-checked",o()?"mixed":n()),Ce(c,"aria-disabled",i()),Ce(c,"tabindex",i()?-1:0)}),se("click",c,y),se("keydown",c,p),d(g,c)};let n=he(r,"checked",3,!1),o=he(r,"indeterminate",3,!1),i=he(r,"disabled",3,!1),s=he(r,"size",3,16),l=he(r,"label",3,""),u=he(r,"labelFirst",3,!1);function y(g){var v;if(g.stopPropagation(),i())return;const c=o()?!0:!n();(v=r.onchange)==null||v.call(r,c)}function p(g){(g.key===" "||g.key==="Enter")&&(g.preventDefault(),g.stopPropagation(),y(g))}var E=be(),_=B(E);{var T=g=>{var c=Ii(),v=w(c);{var P=b=>{var x=zi(),C=B(x),M=w(C,!0);h(C);var F=S(C);a(F),Y(()=>te(M,l())),d(b,x)},k=b=>{var x=Di(),C=B(x);a(C);var M=S(C),F=w(M,!0);h(M),Y(()=>te(F,l())),d(b,x)};Q(v,b=>{u()?b(P):b(k,-1)})}h(c),se("click",c,y),se("keydown",c,p),d(g,c)},A=g=>{a(g)};Q(_,g=>{l()?g(T):g(A,-1)})}d(t,E),Te()}We(["click","keydown"]);function hn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Dr(t,r){localStorage.setItem(t,JSON.stringify(r))}const Qr=new Map;function vr(t,r,a){ft(t),Qr.set(t,setInterval(r,a))}function ft(t){const r=Qr.get(t);r!==void 0&&(clearInterval(r),Qr.delete(t))}const Lt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Oi=["status","plot","probe","tail","errors"],qr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ar=hn("csauto_refresh_rates",{});let _t=I(oe({status:ar.status??Lt.status,tail:ar.tail??Lt.tail,plot:ar.plot??Lt.plot,probe:ar.probe??Lt.probe,errors:ar.errors??Lt.errors}));function Hi(){return e(_t)}function ji(t,r){f(_t,{...e(_t),[t]:r},!0),Dr("csauto_refresh_rates",e(_t))}function Vi(){return e(_t).status}function Dn(){return e(_t).tail}function In(){return e(_t).plot}function Ui(){return e(_t).probe}function On(){return e(_t).errors}const Jr=new Set;function gr(t){return Jr.add(t),()=>Jr.delete(t)}function Bi(){Jr.forEach(t=>t())}const Zr=hn("csauto_autorefresh_enabled",{});function Qt(t){return Zr[t]??!0}function Jt(t,r){Zr[t]=r,Dr("csauto_autorefresh_enabled",Zr)}var qi=$("<!> <!>",1),Ki=$('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),Gi=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),Wi=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function Xi(t,r){Me(r,!0);let a=I(oe(pa())),n=I(oe({...Hi()})),o=I(!0),i=I(!1);Ne(()=>{_i().then(y=>{f(o,y.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function s(y){const{min:p}=qr[y];let E=e(n)[y];(typeof E!="number"||isNaN(E))&&(E=Lt[y]),f(n,{...e(n),[y]:Math.max(p,Math.round(E))},!0)}function l(y,p){const E=p.target,_=E.value.replace(/[^0-9]/g,""),T=parseInt(_,10);isNaN(T)?_===""&&f(n,{...e(n),[y]:qr[y].min},!0):f(n,{...e(n),[y]:T},!0),E.value=String(e(n)[y])}function u(){_a(e(a));for(const y of Object.keys(e(n)))s(y),ji(y,e(n)[y]);e(i)&&bi(e(o)).catch(()=>{}),r.onClose()}dr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:u,maxWidth:"400px",portal:!0,footer:p=>{var E=qi(),_=B(E);$e(_,{variant:"secondary",get onclick(){return r.onClose},children:(A,g)=>{xe();var c=Be("Cancel");d(A,c)},$$slots:{default:!0}});var T=S(_,2);$e(T,{variant:"primary",onclick:u,children:(A,g)=>{xe();var c=Be("Save");d(A,c)},$$slots:{default:!0}}),d(p,E)},children:(p,E)=>{var _=Wi(),T=B(_),A=S(w(T),2);Ye(A),h(T);var g=S(T,2),c=w(g),v=S(w(c),2);h(c);var P=S(c,2);Qe(P,20,()=>Oi,x=>x,(x,C)=>{const M=U(()=>qr[C]);var F=Ki(),z=w(F),V=w(z),O=w(V,!0);h(V);var H=S(V,2),D=w(H);h(H),h(z);var K=S(z,2),q=w(K);Ye(q),xe(2),h(K),h(F),Y(()=>{te(O,e(M).label),te(D,`min ${e(M).min??""}ms`),un(q,e(n)[C])}),se("input",q,ne=>l(C,ne)),tt("blur",q,()=>s(C)),d(x,F)}),h(P),h(g);var k=S(g,2);{var b=x=>{var C=Gi(),M=S(w(C),2);zt(M,{get checked(){return e(o)},onchange:F=>f(o,F,!0),label:"Send anonymous usage statistics"}),h(C),d(x,C)};Q(k,x=>{e(i)&&x(b)})}et(A,()=>e(a),x=>f(a,x)),se("click",v,()=>f(n,{...Lt},!0)),d(p,_)},$$slots:{footer:!0,default:!0}}),Te()}We(["click","input"]);const Yi=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href;var Qi=$('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><img alt="CODE_SATURNE" class="h-7 w-auto"/></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function Ji(t,r){let a=U(()=>r.shownCases!==r.totalCases),n=I(!1);var o=Qi(),i=B(o),s=w(i),l=w(s);h(s);var u=S(s,2),y=w(u),p=w(y),E=w(p);{var _=q=>{var ne=Be();Y(()=>te(ne,`${r.shownCases??""}/`)),d(q,ne)};Q(E,q=>{e(a)&&q(_)})}var T=S(E,1,!0);h(p);var A=S(p,2),g=w(A,!0);h(A),h(y);var c=S(y,2),v=w(c),P=w(v);{var k=q=>{var ne=Be();Y(()=>te(ne,`${r.shownRunning??""}/`)),d(q,ne)};Q(P,q=>{e(a)&&q(k)})}var b=S(P,1,!0);h(v),xe(2),h(c);var x=S(c,2),C=w(x),M=w(C);{var F=q=>{var ne=Be();Y(()=>te(ne,`${r.shownConverged??""}/`)),d(q,ne)};Q(M,q=>{e(a)&&q(F)})}var z=S(M,1,!0);h(C),xe(2),h(x),h(u);var V=S(u,2),O=w(V),H=w(O);Le(H,{get icon(){return Gs},size:18}),h(O),h(V),h(i);var D=S(i,2);{var K=q=>{Xi(q,{onClose:()=>f(n,!1)})};Q(D,q=>{e(n)&&q(K)})}Y(()=>{Ce(l,"src",Yi),te(T,r.totalCases),te(g,r.totalCases===1?"case":"cases"),te(b,r.totalRunning),te(z,r.totalConverged)}),se("click",O,()=>f(n,!0)),d(t,o)}We(["click"]);const Zi=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var el=$('<div class="text-xs text-muted font-normal"> </div>'),tl=$('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),rl=$("<div><!> <!></div>"),nl=$('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),al=$('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),ol=$('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function It(t,r){let a=he(r,"eyebrow",3,""),n=he(r,"title",3,""),o=he(r,"wide",3,!1);var i=ol(),s=S(w(i),2);{var l=y=>{var p=al(),E=w(p);{var _=c=>{var v=be(),P=B(v);dt(P,()=>r.titleSlot),d(c,v)},T=c=>{var v=rl(),P=w(v);{var k=C=>{var M=el(),F=w(M,!0);h(M),Y(()=>te(F,a())),d(C,M)};Q(P,C=>{a()&&C(k)})}var b=S(P,2);{var x=C=>{var M=tl(),F=w(M,!0);h(M),Y(()=>te(F,n())),d(C,M)};Q(b,C=>{n()&&C(x)})}h(v),d(c,v)};Q(E,c=>{r.titleSlot?c(_):c(T,-1)})}var A=S(E,2);{var g=c=>{var v=nl(),P=w(v);dt(P,()=>r.actions),h(v),d(c,v)};Q(A,c=>{r.actions&&c(g)})}h(p),d(y,p)};Q(s,y=>{(a()||n()||r.titleSlot||r.actions)&&y(l)})}var u=S(s,2);dt(u,()=>r.children),h(i),Y(()=>{ke(i,1,`${o()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),Ce(i,"id",r.id)}),d(t,i)}function Zt(t,r){Me(r,!0);let a=he(r,"checked",15,!0);Ne(()=>{a()?vr(r.name,r.onRefresh,r.intervalMs):ft(r.name)}),cr(()=>ft(r.name)),zt(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Te()}var sl=$("<!> ",1),il=$('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),ll=$('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),cl=$('<span class="inline-flex"><!></span> <!>',1);function ul(t,r){Me(r,!0);let a=he(r,"label",3,"More"),n=I(!1),o=I(void 0),i=I(void 0),s=I("");function l(){if(!e(o)||!e(i))return;const c=e(o).getBoundingClientRect(),v=e(i).offsetHeight,P=4,k=window.innerHeight-c.bottom-P,x=k<v&&c.top-P>k?c.top-P-v:c.bottom+P,C=Math.min(c.left,window.innerWidth-180);f(s,`position:fixed; top:${x}px; left:${C}px; min-width:170px; z-index:9999;`)}async function u(){f(n,!e(n)),e(n)&&(await $t(),l())}function y(c){c.disabled||(f(n,!1),c.onClick())}function p(c){e(n)&&e(o)&&!e(o).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var E=cl();tt("mousedown",st,p),tt("keydown",st,c=>{c.key==="Escape"&&f(n,!1)}),tt("scroll",st,()=>{e(n)&&f(n,!1)});var _=B(E),T=w(_);$e(T,{variant:"secondary",size:"sm",onclick:u,children:(c,v)=>{var P=sl(),k=B(P);Le(k,{get icon(){return Is}});var b=S(k);Y(()=>te(b,` ${a()??""}`)),d(c,P)},$$slots:{default:!0}}),h(_),rt(_,c=>f(o,c),()=>e(o));var A=S(_,2);{var g=c=>{Xt(c,{children:(v,P)=>{var k=ll();Qe(k,21,()=>r.items,b=>b.label,(b,x)=>{var C=il(),M=w(C),F=w(M);Le(F,{get icon(){return e(x).icon},size:14});var z=S(F);h(M),h(C),Y(()=>{M.disabled=e(x).disabled,Ce(M,"aria-disabled",e(x).disabled),ke(M,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(x).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),te(z,` ${e(x).label??""}`)}),se("mousedown",M,V=>{V.stopPropagation(),y(e(x))}),d(b,C)}),h(k),rt(k,b=>f(i,b),()=>e(i)),Y(()=>Je(k,e(s))),d(v,k)}})};Q(A,c=>{e(n)&&c(g)})}d(t,E),Te()}We(["mousedown"]);const At=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"}];let qt=I(oe([])),Nr=I(oe([])),ht=I(oe(new Set)),hr=I(""),mn=I(""),Pt=I(oe([])),at=I(oe([])),Kt=I(""),ya=I(!0),dl=I(!0),Vt=I(oe(hn("csauto_status_views",{}))),pn=I(oe(localStorage.getItem("csauto_status_view_selected")??""));function _n(){return e(qt)}function bn(){return e(Nr)}function Ht(){return e(ht)}function Hn(){return e(hr)}function en(){return e(mn)}function fl(){return e(Pt)}function vl(){return e(Pt).filter(t=>e(Nr).includes(t))}function gl(){return e(Pt).filter(t=>At.some(r=>r.key===t))}function hl(){return e(at)}function ml(){return e(Kt)}function pl(){return e(ya)}function jn(){return e(Vt)}function _l(){return e(pn)}function bl(t){f(qt,t,!0)}function xl(t){const r=e(Nr).length===0&&t.length>0;f(Nr,t,!0),r&&e(Pt).length===0&&f(Pt,[...t,...At.map(a=>a.key)],!0)}function yl(t){f(hr,t,!0)}function Vn(t){f(Pt,t,!0)}function wl(t){f(Kt,t,!0)}function kl(t){f(ya,t,!0)}function Cl(t){f(dl,t,!0)}function xn(t){f(pn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function tn(t){const r=new Set(e(ht));r.has(t)?r.delete(t):r.add(t),f(ht,r,!0),f(hr,t,!0),f(mn,t,!0)}function wa(t){f(ht,new Set([t]),!0),f(hr,t,!0),f(mn,t,!0)}function rn(t,r,a){const n=a.indexOf(t),o=a.indexOf(r);if(n<0||o<0)return;const[i,s]=n<o?[n,o]:[o,n],l=new Set(e(ht));for(let u=i;u<=s;u++)l.add(a[u]);f(ht,l,!0),f(hr,r,!0)}function Un(t){f(ht,new Set(t),!0)}function Bn(){f(ht,new Set,!0)}function Sl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function ka(){if(!e(Kt).trim())return e(qt);const t=e(Kt).toLowerCase().trim().split(/\s+/);return e(qt).filter(r=>{const a=Sl(r);return t.every(n=>a.includes(n))})}function $l(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function qn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?$l(a):""}function Pl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Ca(){const t=ka();return e(at).length===0?t:[...t].sort((r,a)=>{for(const n of e(at)){const o=qn(r,n.key),i=qn(a,n.key),s=Pl(o,i);if(s!==0)return n.dir==="asc"?s:-s}return 0})}function $r(){return Ca().map(t=>t.case_id)}function El(t,r){const a=e(at).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(at)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(at,n,!0)}else f(at,[...e(at),{key:t,dir:"asc"}],!0);else a>=0&&e(at).length===1?f(at,[{key:t,dir:e(at)[0].dir==="asc"?"desc":"asc"}],!0):f(at,[{key:t,dir:"asc"}],!0)}function Rl(){return{visibleColumns:[...e(Pt)],search:e(Kt),sorts:e(at).map(t=>({...t}))}}function Nl(t){f(Pt,[...t.visibleColumns],!0),f(Kt,t.search,!0),f(at,t.sorts.map(r=>({...r})),!0)}function Ml(t){f(Vt,{...e(Vt),[t]:Rl()},!0),Dr("csauto_status_views",e(Vt)),xn(t)}function Tl(t){const r={...e(Vt)};delete r[t],f(Vt,r,!0),Dr("csauto_status_views",r),e(pn)===t&&xn("")}function wr(){const t=new Set;for(const r of e(qt))e(ht).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Kn(){for(const t of e(qt))if(e(ht).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function Ll(t,r){const a=r.length,n=t.length,o=r.filter(u=>u.status==="RUNNING").length,i=t.filter(u=>u.status==="RUNNING").length,s=r.filter(u=>u.convergence==="converged").length,l=t.filter(u=>u.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:o,shownRunning:i,totalConverged:s,shownConverged:l}}var Al=$('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),Fl=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function zl(t,r){Me(r,!0);let a=he(r,"initialName",3,""),n=U(bn),o=I(oe(a())),i=I(oe(new Set(r.initialColumns??[...e(n),...At.map(D=>D.key)])));function s(D){const K=new Set(e(i));K.has(D)?K.delete(D):K.add(D),f(i,K,!0)}function l(D,K){const q=new Set(e(i));D.forEach(ne=>K?q.add(ne):q.delete(ne)),f(i,q,!0)}function u(){const D=e(o).trim();D&&r.onSave(D,[...e(i)])}function y(D){D.key==="Escape"&&r.onCancel()}function p(D){D.target.dataset.backdrop!==void 0&&r.onCancel()}let E=I(void 0);Ne(()=>{var D,K;(D=e(E))==null||D.focus(),(K=e(E))==null||K.select()});var _=Fl(),T=w(_),A=w(T),g=w(A,!0);h(A);var c=S(A,2),v=S(w(c),2);Ye(v),rt(v,D=>f(E,D),()=>e(E)),h(c);var P=S(c,2);{var k=D=>{var K=Al(),q=w(K),ne=S(w(q),2),R=w(ne),N=S(R,2);h(ne),h(q);var m=S(q,2);Qe(m,20,()=>e(n),L=>L,(L,j)=>{{let ee=U(()=>e(i).has(j));zt(L,{get checked(){return e(ee)},onchange:()=>s(j),size:14,get label(){return j}})}}),h(m),h(K),se("click",R,()=>l(e(n),!0)),se("click",N,()=>l(e(n),!1)),d(D,K)};Q(P,D=>{e(n).length>0&&D(k)})}var b=S(P,2),x=w(b),C=S(w(x),2),M=w(C),F=S(M,2);h(C),h(x);var z=S(x,2);Qe(z,21,()=>At,D=>D.key,(D,K)=>{{let q=U(()=>e(i).has(e(K).key));zt(D,{get checked(){return e(q)},onchange:()=>s(e(K).key),size:14,get label(){return e(K).label}})}}),h(z),h(b);var V=S(b,2),O=w(V);$e(O,{variant:"secondary",get onclick(){return r.onCancel},children:(D,K)=>{xe();var q=Be("Cancel");d(D,q)},$$slots:{default:!0}});var H=S(O,2);{let D=U(()=>!e(o).trim());$e(H,{variant:"primary",onclick:u,get disabled(){return e(D)},children:(K,q)=>{xe();var ne=Be("Save");d(K,ne)},$$slots:{default:!0}})}h(V),h(T),h(_),Y(()=>te(g,r.mode==="create"?"New view":"Edit view")),se("keydown",_,y),se("click",_,p),et(v,()=>e(o),D=>f(o,D)),se("click",M,()=>l(At.map(D=>D.key),!0)),se("click",F,()=>l(At.map(D=>D.key),!1)),d(t,_),Te()}We(["keydown","click"]);var Dl=$('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function Il(t,r){Me(r,!0);let a=U(()=>Object.keys(jn())),n=I(oe(_l())),o=I(!1),i=I("create"),s=U(()=>[{value:"",label:"All columns"},...e(a).map(x=>({value:x,label:x}))]);function l(x){if(f(n,x,!0),xn(x),x==="")Vn([...bn(),...At.map(C=>C.key)]);else{const C=jn();C[x]&&Nl(C[x])}}function u(){f(i,"edit"),f(o,!0)}function y(){f(i,"create"),f(o,!0)}function p(x,C){Vn(C),e(i)==="edit"&&e(n)&&x!==e(n)&&Tl(e(n)),Ml(x),f(n,x,!0),f(o,!1)}function E(){f(o,!1)}var _=Dl(),T=B(_),A=w(T);it(A,{class:"w-[140px]",get options(){return e(s)},get value(){return e(n)},onchange:l});var g=S(A,2),c=w(g);Le(c,{get icon(){return Us},size:14}),h(g);var v=S(g,2),P=w(v);Le(P,{get icon(){return Bs},size:14}),h(v),h(T);var k=S(T,2);{var b=x=>{Xt(x,{children:(C,M)=>{{let F=U(()=>e(i)==="edit"?e(n):""),z=U(fl);zl(C,{get mode(){return e(i)},get initialName(){return e(F)},get initialColumns(){return e(z)},onSave:p,onCancel:E})}}})};Q(k,x=>{e(o)&&x(b)})}se("click",g,u),se("click",v,y),d(t,_),Te()}We(["click"]);var Ol=$('<th><div class="flex items-center justify-center h-full"><!></div></th>'),Hl=$("<th></th>"),jl=$('<span style="margin-left: 4px; font-size: 9px;"> </span>'),Vl=$('<th role="button" tabindex="0"> <!></th>'),Ul=$('<td><div class="flex items-center justify-center h-full"><!></div></td>'),Bl=$("<td><span> </span></td>"),ql=$('<span class="text-muted"><!></span>'),Kl=$('<td role="button" tabindex="0"><!></td>'),Gl=$("<!> Open GUI",1),Wl=$("<td><!></td>"),Xl=$("<td> </td>"),Yl=$("<tr></tr>"),Ql=$('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function Jl(t,r){Me(r,!0);let a=U(()=>r.rows.length>0&&r.rows.every(R=>e(y).has(R.case_id))),n=U(()=>r.rows.some(R=>e(y).has(R.case_id))),o=U(()=>e(n)&&!e(a)),i=U(vl),s=U(()=>new Set(gl())),l=U(hl),u=U(pl),y=U(Ht),p=U(()=>{const R=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(s).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],N=e(i).map(ee=>({key:ee,label:ee,kind:"doe"})),L=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"}].filter(ee=>e(s).has(ee.key)),j=[{key:"_actions",label:"",kind:"meta",sticky:"right"}];return[...R,...N,...L,...j]});function E(R){const N=e(l).findIndex(L=>L.key===R);if(N<0)return"";const m=e(l)[N].dir==="asc"?"▲":"▼";return e(l).length>1?`${m}${N+1}`:m}function _(R,N){R!=="_actions"&&El(R,N.ctrlKey||N.metaKey)}function T(R,N){N.shiftKey?rn(en()||R,R,$r()):N.ctrlKey||N.metaKey?tn(R):wa(R)}function A(R,N){var L;const m=((L=R.status)==null?void 0:L.toUpperCase())??"";m!=="DONE"&&m!=="FAILED"||(N.preventDefault(),r.onContextMenu(R.case_id,N.clientX,N.clientY,R.convergence??""))}async function g(R){const N=R.note??"",m=await fn("Case note:",N,`Note — ${R.case_id}`,"",!0);if(m!==null)try{await hi(R.case_id,m)}catch(L){await Xe(`Failed to set note: ${L instanceof Error?L.message:L}`,"Error")}}async function c(R){try{await pi(R)}catch(N){await Xe(`Failed to open GUI: ${N instanceof Error?N.message:N}`,"Error")}}function v(R,N){const m=(R==null?void 0:R.toUpperCase())??"";return(m==="DONE"||m==="FAILED")&&N==="converged"?"CONVERGED":(m==="DONE"||m==="FAILED")&&N==="not_converged"?"NOT CONVERGED":m}function P(R,N){const m=(R==null?void 0:R.toUpperCase())??"";return(m==="DONE"||m==="FAILED")&&N==="converged"?"status-converged":(m==="DONE"||m==="FAILED")&&N==="not_converged"?"status-not-converged":m==="RUNNING"?"status-running":m==="DONE"?"status-done":m==="FAILED"?"status-failed":m==="PREPARED"?"status-prepared":"status-unknown"}function k(R){return e(y).has(R.case_id)?"row-selected":""}function b(R,N){var m;return N.key==="case_id"?R.case_id:N.key==="nprocs"?R.nprocs!=null?String(R.nprocs):"":N.key==="nt"?R.nt!=null?String(R.nt):"":N.key==="last_iter"?R.last_iter!=null?String(R.last_iter):"":N.key==="duration"?R.duration??"":N.key==="last_mod"?x(R.last_mod):N.key==="resu_size_mb"?R.resu_size_mb!=null?String(R.resu_size_mb):"":N.kind==="doe"?((m=R.doe)==null?void 0:m[N.key])!=null&&String(R.doe[N.key])!==""?String(R.doe[N.key]):"—":""}function x(R){if(!R)return"";try{const N=new Date(R),m=new Date,L=N.toDateString()===m.toDateString(),j=new Date(m);j.setDate(j.getDate()-1);const ee=N.toDateString()===j.toDateString(),ie=N.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return L?`Today ${ie}`:ee?`Yesterday ${ie}`:N.toLocaleDateString([],{month:"short",day:"numeric"})+` ${ie}`}catch{return R}}let C=I(oe({})),M=I(void 0);Ne(()=>{e(u),e(p),r.rows,!(!e(M)||!e(u))&&$t().then(()=>{if(!e(M))return;const R=Array.from(e(M).querySelectorAll("thead th.sticky-left")),N={};let m=0;R.forEach(L=>{const j=L.dataset.colKey??"";N[j]=m,m+=L.getBoundingClientRect().width}),f(C,N,!0)})});function F(R,N,m){const L=m&&R.key!=="_select"&&R.key!=="_actions"?["status-sortable"]:[];if(!m&&R.key==="case_id"&&L.push("case-id"),R.kind==="doe"&&L.push("status-col-doe"),!m&&R.key==="note"&&L.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(u)&&R.sticky==="left"&&L.push("sticky-left"),e(u)&&R.sticky==="right"&&L.push("sticky-right"),e(u)&&R.sticky==="left"){const j=e(p)[N+1];(!j||j.sticky!=="left")&&L.push("sticky-divider")}if(e(u)&&R.sticky==="right"){const j=e(p)[N-1];(!j||j.sticky!=="right")&&L.push("sticky-divider")}return L.join(" ")}function z(R,N){return F(R,N,!0)}function V(R,N){return F(R,N,!1)}function O(R){return!e(u)||!R.sticky?"":R.sticky==="right"?"position:sticky;right:0;":R.sticky==="left"&&R.key in e(C)?`position:sticky;left:${e(C)[R.key]}px;`:""}var H=Ql(),D=w(H),K=w(D),q=w(K);Qe(q,23,()=>e(p),R=>R.key,(R,N,m)=>{var L=be(),j=B(L);{var ee=W=>{var Z=Ol(),ue=w(Z),ae=w(ue);zt(ae,{get checked(){return e(a)},get indeterminate(){return e(o)},get onchange(){return r.onToggleAll},size:14}),h(ue),h(Z),Y((me,ye)=>{ke(Z,1,`${me??""} !px-2.5 !py-0 w-9`),Ce(Z,"data-col-key",e(N).key),Je(Z,ye)},[()=>z(e(N),e(m)),()=>O(e(N))]),d(W,Z)},ie=W=>{var Z=Hl();Y((ue,ae)=>{ke(Z,1,ue),Ce(Z,"data-col-key",e(N).key),Je(Z,ae)},[()=>ut(z(e(N),e(m))),()=>O(e(N))]),d(W,Z)},Pe=W=>{var Z=Vl(),ue=w(Z),ae=S(ue);{var me=J=>{var de=jl(),we=w(de,!0);h(de),Y(Ee=>te(we,Ee),[()=>E(e(N).key)]),d(J,de)},ye=U(()=>E(e(N).key));Q(ae,J=>{e(ye)&&J(me)})}h(Z),Y((J,de)=>{ke(Z,1,J),Ce(Z,"data-col-key",e(N).key),Je(Z,de),te(ue,`${e(N).label??""} `)},[()=>ut(z(e(N),e(m))),()=>O(e(N))]),se("click",Z,J=>_(e(N).key,J)),se("keydown",Z,J=>{(J.key==="Enter"||J.key===" ")&&(J.preventDefault(),_(e(N).key,J))}),d(W,Z)};Q(j,W=>{e(N).key==="_select"?W(ee):e(N).key==="_actions"?W(ie,1):W(Pe,-1)})}d(R,L)}),h(q),h(K);var ne=S(K);Qe(ne,21,()=>r.rows,R=>R.case_id,(R,N)=>{var m=Yl();Qe(m,23,()=>e(p),L=>L.key,(L,j,ee)=>{var ie=be(),Pe=B(ie);{var W=ye=>{var J=Ul(),de=w(J),we=w(de);{let Ee=U(()=>e(y).has(e(N).case_id));zt(we,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e(N).case_id),size:14})}h(de),h(J),Y((Ee,ge)=>{ke(J,1,`${Ee??""} !px-2.5 !py-0 w-9`),Ce(J,"data-col-key",e(j).key),Je(J,ge)},[()=>V(e(j),e(ee)),()=>O(e(j))]),d(ye,J)},Z=ye=>{var J=Bl(),de=w(J),we=w(de,!0);h(de),h(J),Y((Ee,ge,ze,pe)=>{ke(J,1,Ee),Ce(J,"data-col-key",e(j).key),Je(J,ge),ke(de,1,`status-pill ${ze??""}`),te(we,pe)},[()=>ut(V(e(j),e(ee))),()=>O(e(j)),()=>P(e(N).status,e(N).convergence),()=>v(e(N).status,e(N).convergence)]),d(ye,J)},ue=ye=>{var J=Kl(),de=w(J);{var we=ge=>{var ze=Be();Y(()=>te(ze,e(N).note)),d(ge,ze)},Ee=ge=>{var ze=ql(),pe=w(ze);Le(pe,{get icon(){return Vs},size:12}),h(ze),d(ge,ze)};Q(de,ge=>{e(N).note?ge(we):ge(Ee,-1)})}h(J),Y((ge,ze)=>{ke(J,1,ge),Ce(J,"data-col-key",e(j).key),Je(J,ze),Ce(J,"title",e(N).note||"Add note")},[()=>ut(V(e(j),e(ee))),()=>O(e(j))]),se("click",J,ge=>{ge.stopPropagation(),g(e(N))}),se("keydown",J,ge=>{(ge.key==="Enter"||ge.key===" ")&&(ge.preventDefault(),ge.stopPropagation(),g(e(N)))}),d(ye,J)},ae=ye=>{var J=Wl(),de=w(J);$e(de,{variant:"primary",size:"sm",onclick:we=>{we.stopPropagation(),c(e(N).case_id)},children:(we,Ee)=>{var ge=Gl(),ze=B(ge);Le(ze,{get icon(){return Os},size:12}),xe(),d(we,ge)},$$slots:{default:!0}}),h(J),Y((we,Ee)=>{ke(J,1,we),Ce(J,"data-col-key",e(j).key),Je(J,Ee)},[()=>ut(V(e(j),e(ee))),()=>O(e(j))]),d(ye,J)},me=ye=>{var J=Xl(),de=w(J,!0);h(J),Y((we,Ee,ge)=>{ke(J,1,we),Ce(J,"data-col-key",e(j).key),Je(J,Ee),te(de,ge)},[()=>ut(V(e(j),e(ee))),()=>O(e(j)),()=>b(e(N),e(j))]),d(ye,J)};Q(Pe,ye=>{e(j).key==="_select"?ye(W):e(j).key==="status"?ye(Z,1):e(j).key==="note"?ye(ue,2):e(j).key==="_actions"?ye(ae,3):ye(me,-1)})}d(L,ie)}),h(m),Y(L=>ke(m,1,L),[()=>ut(k(e(N)))]),se("click",m,L=>T(e(N).case_id,L)),se("contextmenu",m,L=>A(e(N),L)),d(R,m)}),h(ne),h(D),rt(D,R=>f(M,R),()=>e(M)),h(H),Y(()=>ke(H,1,`table-wrap ${e(u)?"sticky-enabled":""}`)),d(t,H),Te()}We(["click","keydown","contextmenu"]);var Zl=$('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function ec(t,r){Me(r,!0);let a=U(()=>{const _=Math.min(r.x,window.innerWidth-180),T=Math.min(r.y,window.innerHeight-120);return`left: ${_}px; top: ${T}px;`});async function n(_){try{for(const T of r.cases)await mi(T,_)}catch(T){console.error("Failed to set convergence:",T)}r.onClose()}const o=r.cases.length>1?` (${r.cases.length})`:"";var i=Zl();tt("keydown",st,_=>{_.key==="Escape"&&r.onClose()});var s=w(i),l=w(s);h(s);var u=S(s,2),y=w(u);h(u);var p=S(u,2),E=w(p);h(p),h(i),Y(()=>{Je(i,e(a)),ke(s,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),te(l,`Mark Converged${o}`),ke(u,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),te(y,`Mark Not Converged${o}`),ke(p,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),te(E,`Clear Mark${o}`)}),se("click",s,()=>n("converged")),se("click",u,()=>n("not_converged")),se("click",p,()=>n("")),d(t,i),Te()}We(["click"]);var tc=$("<!> Refresh",1),rc=$("<!> <!>",1),nc=$("<!> Run",1),ac=$("<!> Restart",1),oc=$("<!> Stop",1),sc=$("<!> Kill",1),ic=$("<!> Clean",1),lc=$('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),cc=$('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function uc(t,r){Me(r,!0);function a(){return[...Ht()]}async function n(){const m=a();if(!m.length)return;const L=await Go(m);if(L)try{await zn({cases:m,n:L.n,nt:L.nt,maxParallel:L.maxParallel}),r.onRefresh()}catch(j){await Xe(`Run failed: ${j instanceof Error?j.message:j}`,"Error")}}async function o(){const m=a();if(!m.length)return;const L=await Wo(m);if(L)try{await zn({cases:m,n:L.n,nt:L.nt,maxParallel:L.maxParallel,restart:!0,restartMode:L.restartMode,restartValue:L.restartValue}),r.onRefresh()}catch(j){await Xe(`Restart failed: ${j instanceof Error?j.message:j}`,"Error")}}async function i(){const m=a();if(!(!m.length||!await Ln(`Kill ${m.length} case${m.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await vi(m),r.onRefresh()}catch(j){await Xe(`Kill failed: ${j instanceof Error?j.message:j}`,"Error")}}async function s(){const m=a();if(!(!m.length||!await Ln(`Stop ${m.length} case${m.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await xr({cases:m,action:"stop"}),r.onRefresh(),yr(`Stop requested for ${m.length} case${m.length>1?"s":""} — will checkpoint and exit`)}catch(j){await Xe(`Stop failed: ${j instanceof Error?j.message:j}`,"Error")}}async function l(){const m=a();if(m.length)try{await xr({cases:m,action:"checkpoint"}),r.onRefresh(),yr(`Checkpoint requested for ${m.length} case${m.length>1?"s":""}`)}catch(L){await Xe(`Checkpoint failed: ${L instanceof Error?L.message:L}`,"Error")}}async function u(){const m=a();if(!m.length)return;const L=await fn("Extend by how many additional time steps?","500","Extend Run");if(L===null)return;const j=parseInt(L,10);if(!Number.isFinite(j)||j<=0){await Xe("Enter a positive integer number of time steps.","Error");return}try{await xr({cases:m,action:"extend",value:j}),r.onRefresh(),yr(`Extended ${m.length} case${m.length>1?"s":""} by ${j} time steps`)}catch(ee){await Xe(`Extend failed: ${ee instanceof Error?ee.message:ee}`,"Error")}}async function y(){const m=a();if(m.length)try{await xr({cases:m,action:"flush"}),yr(`Flush requested for ${m.length} case${m.length>1?"s":""}`)}catch(L){await Xe(`Flush failed: ${L instanceof Error?L.message:L}`,"Error")}}async function p(){const m=a();if(!m.length)return;const L=await Xo(m);if(L)try{await gi({cases:m,keepLast:L.keepLast,keepResu:L.keepResu,deleteResu:L.deleteResu,pruneResu:!0}),r.onRefresh(),Bi()}catch(j){await Xe(`Cleanup failed: ${j instanceof Error?j.message:j}`,"Error")}}function E(){const m=$r();m.length>0&&m.every(j=>Ht().has(j))?Bn():Un(m)}function _(m){tn(m)}let T=I(oe(Qt("status")));Ne(()=>{Jt("status",e(T))}),kl(!0);let A=U(()=>{const m=wr();return m.size>0&&[...m].some(L=>L==="PREPARED"||L==="DONE"||L==="FAILED")}),g=U(()=>{const m=wr();return m.size>0&&[...m].some(L=>L==="DONE"||L==="FAILED")&&Kn()}),c=U(()=>{const m=wr();return m.size>0&&m.has("RUNNING")}),v=U(()=>{const m=wr();return m.size>0&&m.has("RUNNING")}),P=U(Kn),k=I(oe(ml())),b=null;function x(){b&&clearTimeout(b),b=setTimeout(()=>{wl(e(k))},200)}Ne(()=>Cl(e(T)));let C=I(!1),M=I(0),F=I(0),z=I(oe([])),V=I("");function O(m,L,j,ee){f(z,Ht().has(m)?[...Ht()]:[m],!0),f(V,ee,!0),f(M,L,!0),f(F,j,!0),f(C,!0)}function H(){f(C,!1)}function D(m){const L=$r();if(L.length){if(m.key==="Escape"){Bn(),H();return}if((m.ctrlKey||m.metaKey)&&m.key==="a"){m.preventDefault(),Un(L);return}if(m.key==="ArrowDown"||m.key==="ArrowUp"){m.preventDefault();const j=m.key==="ArrowDown"?1:-1,ee=Hn(),ie=L.indexOf(ee),Pe=Math.max(0,Math.min(L.length-1,ie+j)),W=L[Pe];m.shiftKey?rn(en()||L[0],W,L):wa(W),yl(W);return}if(m.key===" "){m.preventDefault();const j=Hn();j&&(m.shiftKey?rn(en()||j,j,$r()):tn(j))}}}var K=cc();tt("click",st,H),tt("scroll",st,H);var q=B(K),ne=w(q);It(ne,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:L=>{var j=rc(),ee=B(j);{let W=U(Vi);Zt(ee,{name:"status",get intervalMs(){return e(W)},get onRefresh(){return r.onRefresh},get checked(){return e(T)},set checked(Z){f(T,Z,!0)}})}var ie=S(ee,2);{var Pe=W=>{$e(W,{variant:"primary",onclick:()=>r.onRefresh(),children:(Z,ue)=>{var ae=tc(),me=B(ae);Le(me,{get icon(){return Yt}}),xe(),d(Z,ae)},$$slots:{default:!0}})};Q(ie,W=>{e(T)||W(Pe)})}d(L,j)},children:(L,j)=>{var ee=lc(),ie=B(ee),Pe=w(ie),W=w(Pe);Ye(W);var Z=S(W,2);Il(Z,{}),h(Pe);var ue=S(Pe,2),ae=w(ue),me=w(ae);h(ae);var ye=S(ae,2);{let pe=U(()=>!e(A));$e(ye,{variant:"run",size:"sm",onclick:n,get disabled(){return e(pe)},children:(He,De)=>{var ce=nc(),ve=B(ce);Le(ve,{get icon(){return ha}}),xe(),d(He,ce)},$$slots:{default:!0}})}var J=S(ye,2);{let pe=U(()=>!e(g));$e(J,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(pe)},children:(He,De)=>{var ce=ac(),ve=B(ce);Le(ve,{get icon(){return qs}}),xe(),d(He,ce)},$$slots:{default:!0}})}var de=S(J,2);{let pe=U(()=>!e(v));$e(de,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(pe)},children:(He,De)=>{var ce=oc(),ve=B(ce);Le(ve,{get icon(){return Fs}}),xe(),d(He,ce)},$$slots:{default:!0}})}var we=S(de,2);{let pe=U(()=>[{label:"Extend",icon:Hs,onClick:u,disabled:!e(v)},{label:"Checkpoint",icon:Ks,onClick:l,disabled:!e(v)},{label:"Flush",icon:Ds,onClick:y,disabled:!e(v)}]);ul(we,{get items(){return e(pe)}})}var Ee=S(we,2);{let pe=U(()=>!e(c));$e(Ee,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(pe)},children:(He,De)=>{var ce=sc(),ve=B(ce);Le(ve,{get icon(){return zs}}),xe(),d(He,ce)},$$slots:{default:!0}})}var ge=S(Ee,2);{let pe=U(()=>!e(P));$e(ge,{variant:"secondary",size:"sm",onclick:p,get disabled(){return e(pe)},children:(He,De)=>{var ce=ic(),ve=B(ce);Le(ve,{get icon(){return Ws}}),xe(),d(He,ce)},$$slots:{default:!0}})}h(ue),h(ie);var ze=S(ie,2);{let pe=U(Ca);Jl(ze,{get rows(){return e(pe)},onContextMenu:O,onToggleAll:E,onToggleRow:_})}Y(pe=>te(me,`${pe??""} selected`),[()=>Ht().size]),se("input",W,x),et(W,()=>e(k),pe=>f(k,pe)),d(L,ee)},$$slots:{actions:!0,default:!0}}),h(q);var R=S(q,2);{var N=m=>{ec(m,{get cases(){return e(z)},get x(){return e(M)},get y(){return e(F)},get currentValue(){return e(V)},onClose:H})};Q(R,m=>{e(C)&&m(N)})}se("keydown",q,D),d(t,K),Te()}We(["keydown","input"]);var dc=$('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Gt(t,r){var a=dc(),n=w(a);dt(n,()=>r.children),h(a),d(t,a)}function yn(t){return t.map(r=>({value:r,label:r}))}var fc=$('<input type="number" step="any" class="w-[110px]"/>'),vc=$("<!> <!> <!> <!> <!> <!>",1);function wn(t,r){Me(r,!0);let a=he(r,"columnLabel",3,"Columns"),n=he(r,"xMinLabel",3,"Iter min"),o=U(()=>yn(r.allCases)),i=U(()=>r.columns.map(u=>({value:u,label:u}))),s=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(u){r.onXMinChange(Number(u.target.value)||0)}Gt(t,{children:(u,y)=>{var p=vc(),E=B(p);Re(E,{text:"Cases",children:(b,x)=>{Bt(b,{class:"w-[160px]",get options(){return e(o)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var _=S(E,2);{var T=b=>{var x=be(),C=B(x);dt(C,()=>r.middleSlot),d(b,x)};Q(_,b=>{r.middleSlot&&b(T)})}var A=S(_,2);Re(A,{get text(){return a()},children:(b,x)=>{Bt(b,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var g=S(A,2);Re(g,{text:"Start from",children:(b,x)=>{it(b,{class:"w-[140px]",get options(){return s},get value(){return r.startFrom},onchange:C=>r.onStartFromChange(C)})}});var c=S(g,2);{var v=b=>{Re(b,{get text(){return n()},children:(x,C)=>{var M=fc();Ye(M),Y(()=>un(M,r.xMin)),se("input",M,l),d(x,M)}})};Q(c,b=>{r.startFrom==="custom"&&b(v)})}var P=S(c,2);{var k=b=>{var x=be(),C=B(x);dt(C,()=>r.extraSlot),d(b,x)};Q(P,b=>{r.extraSlot&&b(k)})}d(u,p)}}),Te()}We(["input"]);var gc=$('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),hc=$('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Wt(t,r){let a=he(r,"emptyMessage",3,"");var n=hc(),o=w(n);{var i=l=>{var u=be(),y=B(u);Ar(y,()=>r.svgHtml),d(l,u)},s=l=>{var u=gc(),y=w(u),p=w(y,!0);h(y),h(u),Y(()=>te(p,a()||"No data to display.")),d(l,u)};Q(o,l=>{r.svgHtml?l(i):l(s,-1)})}h(n),Y(()=>Ce(n,"id",r.id)),d(t,n)}async function kn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:o,height:i}=mc(n),s=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=o*s,l.height=i*s;const u=l.getContext("2d");if(!u)return;u.scale(s,s);const y=new XMLSerializer().serializeToString(n),p=new Blob([y],{type:"image/svg+xml;charset=utf-8"}),E=URL.createObjectURL(p),_=new Image;_.width=o,_.height=i,await new Promise((A,g)=>{_.onload=()=>{u.drawImage(_,0,0,o,i),URL.revokeObjectURL(E),A()},_.onerror=g,_.src=E});const T=await new Promise(A=>l.toBlob(A,"image/png"));T&&await $a(T,pc(r))}function mr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,o=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return _c(`${t}_${n}_${o}.${a}`)}async function Sa(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await $a(a,r)}function mc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function $a(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(o){if((o==null?void 0:o.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function pc(t){return t.endsWith(".png")?t:`${t}.png`}function _c(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Pa=I(oe([])),Ea=I(oe([])),Ra=I(oe([])),Na=I("zero"),Ma=I(0),Ta=I(""),bc=I(!0);function xc(){return{selectedCases:e(Pa),columns:e(Ea),selectedColumns:e(Ra),startFrom:e(Na),iterMin:e(Ma),svgHtml:e(Ta),autoRefresh:e(bc)}}function Gn(t){f(Pa,t,!0)}function yc(t){f(Ea,t,!0)}function Kr(t){f(Ra,t,!0)}function wc(t){f(Na,t,!0)}function kc(t){f(Ma,t,!0)}function kr(t){f(Ta,t,!0)}var Cc=$("<!> Refresh",1),Sc=$("<!> <!>",1),$c=$("<!> Download as PNG",1),Pc=$('<div class="self-end ml-auto"><!></div>'),Ec=$('<!> <div class="flex justify-center"><!></div>',1),Rc=$('<div class="flex justify-center"><!></div>'),Nc=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Mc=$("<!> <!>",1);function Tc(t,r){Me(r,!0);let a=U(xc),n=I("");const o=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function s(){if(e(a).selectedCases.length)try{const g=await ni(e(a).selectedCases);f(n,"");const c=g.filter(v=>!o.has(v.toLowerCase().replace(/\s+/g,"_")));if(yc(c),c.length===0){Kr([]),kr("");return}if(e(a).selectedColumns.length===0){const v=c.filter(P=>i.some(k=>P.toLowerCase().includes(k)));Kr(v.length>0?v:[c[0]])}}catch(g){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",g)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await s(),!e(a).selectedColumns.length)))try{let g=0,c=!0;if(e(a).startFrom==="restart"){const P=await ba(e(a).selectedCases),k=Object.values(P.origins).map(b=>b.iteration).filter(b=>b!==void 0&&Number.isFinite(b));g=k.length>0?Math.min(...k):0}else e(a).startFrom==="custom"&&(g=e(a).iterMin);const v=await ai(e(a).selectedCases,e(a).selectedColumns,{xMin:g,includeHistory:c});f(n,""),v&&kr(v)}catch(g){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",g)}}function u(g){if(Gn(g),g.length===0){kr("");return}s(),l()}function y(g){if(Kr(g),g.length===0){kr("");return}l()}function p(g){wc(g),l()}function E(g){kc(g),l()}let _=I(oe(Qt("plot")));Ne(()=>{Jt("plot",e(_))}),Ne(()=>{e(_)?vr("residualPlot",l,In()):ft("residualPlot")});let T=!1;Ne(()=>{r.allCases.length>0&&!T&&(T=!0,Gn([...r.allCases]),s().then(()=>l()))});const A=gr(()=>{T&&s().then(()=>l())});cr(()=>{ft("residualPlot"),A()}),It(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var v=Sc(),P=B(v);{let x=U(In);Zt(P,{name:"residualPlot",get intervalMs(){return e(x)},onRefresh:l,get checked(){return e(_)},set checked(C){f(_,C,!0)}})}var k=S(P,2);{var b=x=>{$e(x,{variant:"primary",onclick:l,children:(C,M)=>{var F=Cc(),z=B(F);Le(z,{get icon(){return Yt}}),xe(),d(C,F)},$$slots:{default:!0}})};Q(k,x=>{e(_)||x(b)})}d(c,v)},children:(c,v)=>{var P=Mc(),k=B(P);{var b=F=>{const z=K=>{var q=Pc(),ne=w(q);{let R=U(()=>!e(a).svgHtml);$e(ne,{variant:"secondary",size:"sm",onclick:()=>kn("plot-holder",mr("residuals",e(a).selectedCases)),get disabled(){return e(R)},children:(N,m)=>{var L=$c(),j=B(L);Le(j,{get icon(){return fr}}),xe(),d(N,L)},$$slots:{default:!0}})}h(q),d(K,q)};var V=Ec(),O=B(V);wn(O,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:u,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:y,get startFrom(){return e(a).startFrom},onStartFromChange:p,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:E,get extraSlot(){return z}});var H=S(O,2),D=w(H);{let K=U(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Wt(D,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(K)}})}h(H),d(F,V)},x=F=>{var z=Rc(),V=w(z);Wt(V,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),h(z),d(F,z)};Q(k,F=>{e(a).columns.length>0?F(b):F(x,-1)})}var C=S(k,2);{var M=F=>{var z=Nc(),V=w(z,!0);h(z),Y(()=>te(V,e(n))),d(F,z)};Q(C,F=>{e(n)&&F(M)})}d(c,P)},$$slots:{actions:!0,default:!0}}),Te()}function La(t){const{scope:r,getState:a,setState:n,setHasData:o,getAxis:i}=t;async function s(){const _=a();if(_.selectedCases.length)try{let T=await Yr(_.selectedCases,r);if(t.filterFiles&&(T=t.filterFiles(T)),n({files:T}),o(T.length>0),T.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!_.file||!T.includes(_.file))&&(n({file:T[0]}),await l())}catch(T){console.error(`Failed to load ${r} files:`,T)}}async function l(){const _=a();if(!(!_.selectedCases.length||!_.file))try{const T=await ci(_.selectedCases,[_.file]),A=t.filterColumns?t.filterColumns(T):T;t.onColumnsLoaded?t.onColumnsLoaded(T):n({columns:A});const g=a();if(g.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}g.selectedColumns.length===0&&n({selectedColumns:[g.columns[0]]})}catch(T){console.error(`Failed to load ${r} columns:`,T)}}async function u(){let _=a();if(_.selectedCases.length){if(await s(),_=a(),!_.file){n({positionText:"",svgHtml:""});return}if((_.columns.length===0||_.selectedColumns.length===0)&&(await l(),_=a(),!_.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let T;const A=a();if(A.startFrom==="restart"){const c=await ba(A.selectedCases),v=i().toLowerCase(),P=v==="t"||v==="time"?"time":"iteration",k=Object.values(c.origins).map(b=>b[P]).filter(b=>b!==void 0&&Number.isFinite(b));T=k.length>0?Math.min(...k):void 0}else A.startFrom==="custom"&&(T=A.xMin);const g=await di({cases:A.selectedCases,probes:[A.file],columns:A.selectedColumns,axis:i(),timeMin:typeof T=="number"?T:void 0,xMin:T,includeHistory:!0});g&&n({svgHtml:g})}catch(T){console.error(`Failed to load ${r} plot:`,T)}}}async function y(_){if(n({selectedCases:_}),_.length===0){n({svgHtml:""});return}await s(),r==="monitoring"&&await u()}function p(_){if(n({selectedColumns:_}),_.length===0){n({svgHtml:""});return}u()}async function E(_){n({file:_}),await l(),await u()}return{loadFiles:s,loadColumns:l,loadPlot:u,handleCasesChange:y,handleColumnsChange:p,handleFileChange:E}}function Aa(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let jt=I("time"),nn=I(oe(Aa())),an=I(oe({...Aa(),axis:""})),Lc=I(!0),Mr=I(!1),Tr=I(!1);function Ac(){return e(jt)}function Fc(t){f(jt,t,!0)}function zc(){return e(Mr)}function on(t){f(Mr,t,!0)}function Dc(){return e(Tr)}function sn(t){f(Tr,t,!0)}function Ic(){e(jt)==="time"&&!e(Mr)&&e(Tr)?f(jt,"profile"):e(jt)==="profile"&&!e(Tr)&&e(Mr)&&f(jt,"time")}function Wn(){return e(nn)}function Gr(){return e(an)}function wt(t){f(nn,{...e(nn),...t},!0)}function Mt(t){f(an,{...e(an),...t},!0)}function Oc(){return e(Lc)}var Hc=$("<!> Download as PNG",1),jc=$('<div class="self-end ml-auto"><!></div>'),Vc=$("<div> </div>"),Uc=$('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),Bc=$('<!>  <!> <div class="flex justify-center"><!></div>',1),qc=$('<div class="flex justify-center"><!></div>');function Kc(t,r){Me(r,!0);let a=he(r,"onRefresh",15),n=U(Wn);const o=new Set(["time","t","iteration","iter"]),i=La({scope:"monitoring",getState:Wn,setState:wt,setHasData:on,filterFiles:g=>g.filter(c=>{const v=c.replace(/\.csv$/i,"").toLowerCase();return v!=="coords"&&!v.includes("coordinates")}),filterColumns:g=>g.filter(c=>!o.has(c.toLowerCase())),onColumnsLoaded:g=>{const c=g.filter(v=>!o.has(v.toLowerCase()));wt({columns:c}),s()},getAxis:()=>"time"});async function s(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const g=[];for(const x of e(n).selectedColumns){const C=await ui(e(n).selectedCases[0],e(n).file,[x]);C.found&&g.push({col:x,x:C.x,y:C.y,z:C.z})}if(!g.length){wt({positionText:""});return}const c=x=>{let C=0;for(const M of x){if(M===void 0)continue;const F=String(M),z=F.indexOf(".");z>=0&&(C=Math.max(C,F.length-z-1))}return C},v=c(g.map(x=>x.x)),P=c(g.map(x=>x.y)),k=c(g.map(x=>x.z)),b=g.map(x=>{const C=[];return x.x!==void 0&&C.push(`x=${x.x.toFixed(v)}`),x.y!==void 0&&C.push(`y=${x.y.toFixed(P)}`),x.z!==void 0&&C.push(`z=${x.z.toFixed(k)}`),`Probe position [${x.col}] : ${C.join(" · ")}`});wt({positionText:b.join(`
`)})}catch{wt({positionText:""})}}function l(g){i.handleColumnsChange(g),g.length>0&&s()}let u=U(()=>e(n).files.map(g=>({value:g,label:g.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),y=!1;Ne(()=>{r.allCases.length>0&&!y&&(y=!0,wt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let p=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var E=be(),_=B(E);{var T=g=>{const c=F=>{Re(F,{text:"Quantity",children:(z,V)=>{it(z,{class:"w-[160px]",get options(){return e(u)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},v=F=>{var z=jc(),V=w(z);{let O=U(()=>!e(n).svgHtml);$e(V,{variant:"secondary",size:"sm",onclick:()=>kn("probe-plot-holder",mr("probe",e(n).selectedCases)),get disabled(){return e(O)},children:(H,D)=>{var K=Hc(),q=B(K);Le(q,{get icon(){return fr}}),xe(),d(H,K)},$$slots:{default:!0}})}h(z),d(F,z)};var P=Bc(),k=B(P);wn(k,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:F=>{wt({startFrom:F}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:F=>{wt({xMin:F}),i.loadPlot()},get extraSlot(){return v}});var b=S(k,2);{var x=F=>{var z=Uc();Qe(z,21,()=>e(n).positionText.split(`
`).sort(),cn,(V,O)=>{var H=Vc(),D=w(H,!0);h(H),Y(()=>te(D,e(O))),d(V,H)}),h(z),d(F,z)};Q(b,F=>{e(n).positionText&&F(x)})}var C=S(b,2),M=w(C);Wt(M,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(p)}}),h(C),d(g,P)},A=g=>{var c=qc(),v=w(c);Wt(v,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),h(c),d(g,c)};Q(_,g=>{e(n).files.length>0?g(T):g(A,-1)})}d(t,E),Te()}var Gc=$("<!> <!>",1),Wc=$("<!> Download as PNG",1),Xc=$('<div class="self-end ml-auto"><!></div>'),Yc=$('<!>  <div class="flex justify-center"><!></div>',1),Qc=$('<div class="flex justify-center"><!></div>');function Jc(t,r){Me(r,!0);let a=he(r,"onRefresh",15),n=U(Gr);const o=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const v=c.map(P=>P.toLowerCase());for(const P of o){const k=v.indexOf(P);if(k>=0)return c[k]}return c[0]??""}const s=La({scope:"profiles",getState:Gr,setState:Mt,setHasData:sn,onColumnsLoaded:c=>{const v=e(n).axis||i(c),P=c.filter(k=>k!==v).toSorted((k,b)=>k.localeCompare(b));Mt({columns:P,axis:v,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:P.length?[P[0]]:[]})},getAxis:()=>Gr().axis});function l(c){const v=e(n).axis;Mt({axis:c});const k=[...e(n).columns,...v?[v]:[]].filter(b=>b!==c).toSorted((b,x)=>b.localeCompare(x));Mt({columns:k}),s.loadPlot()}let u=U(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),y=U(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,v)=>c.localeCompare(v)).map(c=>({value:c,label:c}))),p=!1;Ne(()=>{r.allCases.length>0&&!p&&(p=!0,Mt({selectedCases:[...r.allCases]}),s.loadFiles().then(()=>s.loadPlot()))}),Ne(()=>{a(s.loadPlot)});let E=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var _=be(),T=B(_);{var A=c=>{const v=M=>{var F=Gc(),z=B(F);Re(z,{text:"Profile",children:(O,H)=>{it(O,{class:"w-[160px]",get options(){return e(u)},get value(){return e(n).file},get onchange(){return s.handleFileChange}})}});var V=S(z,2);Re(V,{text:"X axis",children:(O,H)=>{it(O,{class:"w-[140px]",get options(){return e(y)},get value(){return e(n).axis},onchange:l})}}),d(M,F)},P=M=>{var F=Xc(),z=w(F);{let V=U(()=>!e(n).svgHtml);$e(z,{variant:"secondary",size:"sm",onclick:()=>kn("profile-plot-holder",mr("profile",e(n).selectedCases)),get disabled(){return e(V)},children:(O,H)=>{var D=Wc(),K=B(D);Le(K,{get icon(){return fr}}),xe(),d(O,D)},$$slots:{default:!0}})}h(F),d(M,F)};var k=Yc(),b=B(k);wn(b,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return s.handleCasesChange},get middleSlot(){return v},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return s.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:M=>{Mt({startFrom:M}),s.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:M=>{Mt({xMin:M}),s.loadPlot()},get extraSlot(){return P}});var x=S(b,2),C=w(x);Wt(C,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(E)}}),h(x),d(c,k)},g=c=>{var v=Qc(),P=w(v);Wt(P,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),h(v),d(c,v)};Q(T,c=>{e(n).files.length>0?c(A):c(g,-1)})}d(t,_),Te()}var Zc=$('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),eu=$("<!> Refresh",1),tu=$("<!> <!>",1);function ru(t,r){Me(r,!0);let a=U(Ac),n=U(Oc),o=U(zc),i=U(Dc),s=I(oe(Qt("probe")));Ne(()=>{Jt("probe",e(s))});let l=I(void 0);function u(){var A;(A=e(l))==null||A()}async function y(){if(r.allCases.length){try{const g=(await Yr(r.allCases,"monitoring")).filter(c=>{const v=c.replace(/\.csv$/i,"").toLowerCase();return v!=="coords"&&!v.includes("coordinates")});on(g.length>0)}catch{on(!1)}try{const A=await Yr(r.allCases,"profiles");sn(A.length>0)}catch{sn(!1)}}}Ne(()=>{r.allCases.length>0&&y()}),gr(()=>{y(),u()}),Ne(()=>{e(o),e(i),Ic()});function p(A){A==="time"&&!e(o)||A==="profile"&&!e(i)||Fc(A)}var E=be(),_=B(E);{var T=A=>{{const g=v=>{var P=Zc(),k=S(w(P),2),b=w(k),x=S(b,2);h(k),h(P),Y(()=>{ke(b,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(o)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),b.disabled=!e(o),Ce(b,"title",e(o)?"":"No probe data available. Run a simulation first."),ke(x,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),x.disabled=!e(i),Ce(x,"title",e(i)?"":"No profile data available. Run a simulation first.")}),se("click",b,()=>p("time")),se("click",x,()=>p("profile")),d(v,P)};It(A,{wide:!0,titleSlot:g,tabs:g,actions:v=>{var P=tu(),k=B(P);{let C=U(()=>e(a)==="time"?"probePlot":"profilePlot"),M=U(Ui);Zt(k,{get name(){return e(C)},get intervalMs(){return e(M)},onRefresh:u,get checked(){return e(s)},set checked(F){f(s,F,!0)}})}var b=S(k,2);{var x=C=>{$e(C,{variant:"primary",onclick:u,children:(M,F)=>{var z=eu(),V=B(z);Le(V,{get icon(){return Yt}}),xe(),d(M,z)},$$slots:{default:!0}})};Q(b,C=>{e(s)||C(x)})}d(v,P)},children:(v,P)=>{var k=be(),b=B(k);{var x=M=>{Kc(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(F){f(l,F,!0)}})},C=M=>{Jc(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(F){f(l,F,!0)}})};Q(b,M=>{e(a)==="time"?M(x):M(C,-1)})}d(v,k)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Q(_,A=>{e(n)&&A(T)})}d(t,E),Te()}We(["click"]);var nu=$("<!> Refresh",1),au=$("<!> <!>",1),ou=$("<!> Download as CSV",1),su=$('<!> <div class="self-end ml-auto"><!></div>',1),iu=$("<th> </th>"),lu=$('<td class="whitespace-nowrap"> </td>'),cu=$('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),uu=$('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),du=$('<p class="text-sm text-muted italic text-center py-8"><!></p>'),fu=$("<!> <!>",1);function vu(t,r){Me(r,!0);let a=I(oe([])),n=I(oe([])),o=I(!1),i=I(!1),s=I(oe(Qt("perf")));Ne(()=>{Jt("perf",e(s))});const l=5e3,u=[{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}];let y=U(()=>r.allCases.map(v=>({value:v,label:v}))),p=U(()=>e(n).length>0);async function E(){if(e(a).length){f(i,!0);try{const v=await Fn(e(a));f(n,v.records,!0),e(n).length>0&&f(o,!0)}catch(v){console.error("Failed to load perf:",v)}f(i,!1)}}function _(v){if(f(a,v,!0),v.length===0){f(n,[],!0);return}E()}function T(v,P){if(P===null||P==="")return"-";const k=Number(P);return Number.isFinite(k)?v==="time"?k.toFixed(3):String(Math.round(k)):P}async function A(){if(!e(n).length)return;const v=["case_id",...u.map(x=>x.key)],P=e(n).map(x=>[x.case_id,...u.map(C=>x[C.key]??"")].join(",")),k=[v.join(","),...P].join(`
`),b=mr("timing_snapshot",e(a),"csv");await Sa(k,b)}let g=!1;Ne(()=>{r.allCases.length>0&&!g&&(g=!0,f(a,[...r.allCases],!0),Fn(r.allCases).then(v=>{f(o,v.records.length>0),f(n,v.records,!0)}).catch(()=>{}))}),Ne(()=>{e(s)?vr("perf",E,l):ft("perf")});const c=gr(()=>{g&&E()});cr(()=>{ft("perf"),c()}),It(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:P=>{var k=au(),b=B(k);Zt(b,{name:"perf",intervalMs:l,onRefresh:E,get checked(){return e(s)},set checked(M){f(s,M,!0)}});var x=S(b,2);{var C=M=>{$e(M,{variant:"primary",onclick:E,children:(F,z)=>{var V=nu(),O=B(V);Le(O,{get icon(){return Yt}}),xe(),d(F,V)},$$slots:{default:!0}})};Q(x,M=>{e(s)||M(C)})}d(P,k)},children:(P,k)=>{var b=fu(),x=B(b);{var C=V=>{Gt(V,{children:(O,H)=>{var D=su(),K=B(D);Re(K,{text:"Cases",children:(R,N)=>{Bt(R,{class:"w-[160px]",get options(){return e(y)},get selected(){return e(a)},onchange:_,placeholder:"Select cases..."})}});var q=S(K,2),ne=w(q);{let R=U(()=>!e(p));$e(ne,{variant:"secondary",size:"sm",onclick:A,get disabled(){return e(R)},children:(N,m)=>{var L=ou(),j=B(L);Le(j,{get icon(){return fr}}),xe(),d(N,L)},$$slots:{default:!0}})}h(q),d(O,D)}})};Q(x,V=>{e(o)&&V(C)})}var M=S(x,2);{var F=V=>{var O=uu(),H=w(O),D=w(H),K=w(D),q=S(w(K));Qe(q,17,()=>u,R=>R.key,(R,N)=>{var m=iu(),L=w(m,!0);h(m),Y(()=>te(L,e(N).label)),d(R,m)}),h(K),h(D);var ne=S(D);Qe(ne,21,()=>e(n),R=>R.case_id,(R,N)=>{var m=cu(),L=w(m),j=w(L,!0);h(L);var ee=S(L);Qe(ee,17,()=>u,ie=>ie.key,(ie,Pe)=>{var W=lu(),Z=w(W,!0);h(W),Y(ue=>te(Z,ue),[()=>T(e(Pe).kind,e(N)[e(Pe).key])]),d(ie,W)}),h(m),Y(()=>te(j,e(N).case_id)),d(R,m)}),h(ne),h(H),h(O),d(V,O)},z=V=>{var O=du(),H=w(O);{var D=q=>{var ne=Be("Select cases above to view timing information.");d(q,ne)},K=q=>{var ne=Be("No performance data available. Please run a simulation first.");d(q,ne)};Q(H,q=>{e(o)?q(D):q(K,-1)})}h(O),d(V,O)};Q(M,V=>{e(p)?V(F):V(z,-1)})}d(P,b)},$$slots:{actions:!0,default:!0}}),Te()}const gu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Fa(t){return t.replace(/[&<>"']/g,r=>gu[r]??r)}var hu=$("<div></div>"),mu=$('<pre class="code-box tail-pane"></pre>');function pu(t,r){Me(r,!0);let a=I(void 0);function n(y){const p=Fa(y);if(!r.searchQuery.trim())return p;try{const E=new RegExp(`(${r.searchQuery})`,"gi");return p.replace(E,'<span class="tail-query-hit">$1</span>')}catch{return p}}function o(y){return y==="error"?"tail-sev-error":y==="warn"?"tail-sev-warn":y==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let s=I(!0);function l(){f(s,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(s)&&$t().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var u=mu();Qe(u,21,()=>r.lines,y=>y.index,(y,p)=>{var E=hu();Ar(E,()=>n(e(p).text),!0),h(E),Y(_=>ke(E,1,`tail-line ${_??""} ${e(p).isNew?"tail-new":""}`),[()=>o(e(p).severity)]),d(y,E)}),h(u),rt(u,y=>f(a,y),()=>e(a)),tt("scroll",u,l),d(t,u),Te()}const _u=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,bu=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function xu(t){return _u.test(t)?"error":bu.test(t)?"warn":"none"}function yu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var wu=$("<!> Refresh",1),ku=$("<!> <!>",1),Cu=$('<input type="number" min="1" class="w-[70px]"/>'),Su=$('<input type="text" placeholder="regex..." class="w-[140px]"/>'),$u=$("<!> <!> <!> <!> <!>",1),Pu=Dt('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Eu=Dt('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Ru=Dt('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Nu=$("<!> Resume",1),Mu=$("<!> Pause",1),Tu=$('<span class="text-xs text-muted">Case not running</span>'),Lu=$('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Au=$('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),Fu=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),zu=$("<!> <!> <!>",1);function Du(t,r){Me(r,!0);const a=80;let n=I(""),o=I(""),i=I(!1),s=I(oe([])),l=I(a),u=I(oe([])),y=I(oe(new Set)),p=I(!1),E=I(oe(Qt("tail")));Ne(()=>{Jt("tail",e(E))});let _=I(!0),T=I("all"),A=I(""),g=I(""),c=I(void 0),v=U(()=>yn(r.allCases)),P=U(()=>e(s).map(R=>{const N=R.split("/").pop()??R;return{value:R,label:N}})),k=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],b=U(()=>e(s).length>0),x=U(()=>_n().some(R=>{var N;return R.case_id===e(n)&&((N=R.status)==null?void 0:N.toUpperCase())==="RUNNING"}));const C={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function M(R){const N=R.split("/").pop()??R;return C[N]??99}async function F(){if(e(n))try{const m=(await ii(e(n))).filter(L=>L.endsWith(".log")||L.endsWith("/summary")).sort((L,j)=>M(L)-M(j));if(f(s,m,!0),m.length>0){const L=m[0];!e(o)||!m.includes(e(o))?(f(o,L,!0),f(i,!1)):!e(i)&&M(L)<M(e(o))&&f(o,L,!0)}e(s).length===0&&(f(o,""),f(u,[],!0))}catch(R){console.error("Failed to load tail files:",R),f(s,[],!0)}}async function z(R=!1){if(e(n)&&!(e(p)&&!R)&&(await F(),!!e(o)))try{const N=await si(e(n),e(o),e(l));f(g,"");const m=N.split(`
`),L=m.length>0&&m[m.length-1]===""?m.slice(0,-1):m;if(e(u).length>0){const j=V(e(u),L),ee=new Set;for(let ie=j;ie<L.length;ie++)ee.add(ie);f(y,ee,!0)}f(u,L,!0)}catch(N){f(g,"Failed to load log tail"),console.error("Failed to load tail:",N)}}function V(R,N){const m=Math.min(R.length,N.length);for(let L=0;L<m;L++){let j=!0;for(let ee=0;ee<Math.min(R.length-L,N.length);ee++)if(R[L+ee]!==N[ee]){j=!1;break}if(j)return R.length-L}return 0}let O=U(()=>{let R=e(u).map((N,m)=>({text:N,index:m,severity:xu(N),isNew:e(y).has(m)}));if(e(T)!=="all"&&(R=R.filter(N=>yu(N.severity,e(T)))),e(A).trim())try{const N=new RegExp(e(A),"i");R=R.filter(m=>N.test(m.text))}catch{}return R});function H(R){f(n,R,!0),f(o,""),f(i,!1),f(u,[],!0),F().then(()=>z(!0))}function D(R){f(o,R,!0),f(i,!0),f(u,[],!0),z(!0)}function K(){f(p,!e(p)),e(p)||z(!0)}function q(R){(R.ctrlKey||R.metaKey)&&R.key==="f"&&e(c)&&(R.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),F().then(()=>z(!0)))}),Ne(()=>{e(E)&&!e(p)&&e(n)?vr("tail",()=>z(!1),Dn()):ft("tail")});const ne=gr(()=>{e(n)&&F().then(()=>z(!0))});cr(()=>{ft("tail"),ne()}),tt("keydown",st,q),It(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:N=>{var m=ku(),L=B(m);{let ie=U(Dn);Zt(L,{name:"tail",get intervalMs(){return e(ie)},onRefresh:()=>z(!1),get checked(){return e(E)},set checked(Pe){f(E,Pe,!0)}})}var j=S(L,2);{var ee=ie=>{$e(ie,{variant:"primary",onclick:()=>z(!0),children:(Pe,W)=>{var Z=wu(),ue=B(Z);Le(ue,{get icon(){return Yt}}),xe(),d(Pe,Z)},$$slots:{default:!0}})};Q(j,ie=>{e(E)||ie(ee)})}d(N,m)},children:(N,m)=>{var L=zu(),j=B(L);{var ee=ae=>{Gt(ae,{children:(me,ye)=>{var J=$u(),de=B(J);Re(de,{text:"Case",children:(pe,He)=>{it(pe,{class:"w-[130px]",get options(){return e(v)},get value(){return e(n)},onchange:H})}});var we=S(de,2);Re(we,{text:"File",children:(pe,He)=>{it(pe,{class:"w-[150px]",get options(){return e(P)},get value(){return e(o)},onchange:D})}});var Ee=S(we,2);Re(Ee,{text:"Lines",children:(pe,He)=>{var De=Cu();Ye(De),se("change",De,()=>z(!0)),et(De,()=>e(l),ce=>f(l,ce)),d(pe,De)}});var ge=S(Ee,2);Re(ge,{text:"Filter",children:(pe,He)=>{var De=Su();Ye(De),rt(De,ce=>f(c,ce),()=>e(c)),et(De,()=>e(A),ce=>f(A,ce)),d(pe,De)}});var ze=S(ge,2);Re(ze,{text:"Severity",children:(pe,He)=>{it(pe,{class:"w-[90px]",get options(){return k},get value(){return e(T)},onchange:De=>f(T,De,!0)})}}),d(me,J)}})};Q(j,ae=>{e(b)&&ae(ee)})}var ie=S(j,2);{var Pe=ae=>{var me=Lu(),ye=B(me);pu(ye,{get lines(){return e(O)},get searchQuery(){return e(A)},get autoScroll(){return e(_)}});var J=S(ye,2),de=w(J),we=w(de);{var Ee=G=>{var X=Pu();d(G,X)},ge=G=>{var X=Eu();d(G,X)},ze=G=>{var X=Ru();d(G,X)};Q(we,G=>{e(p)?G(Ee):e(x)?G(ge,1):G(ze,-1)})}var pe=S(we);h(de);var He=S(de,2);{var De=G=>{$e(G,{variant:"secondary",size:"sm",onclick:K,children:(X,re)=>{var fe=be(),Se=B(fe);{var Ie=le=>{var Oe=Nu(),Fe=B(Oe);Le(Fe,{get icon(){return ha}}),xe(),d(le,Oe)},_e=le=>{var Oe=Mu(),Fe=B(Oe);Le(Fe,{get icon(){return js}}),xe(),d(le,Oe)};Q(Se,le=>{e(p)?le(Ie):le(_e,-1)})}d(X,fe)},$$slots:{default:!0}})},ce=G=>{var X=Tu();d(G,X)};Q(He,G=>{e(x)?G(De):G(ce,-1)})}var ve=S(He,2),Ve=w(ve);zt(Ve,{get checked(){return e(_)},onchange:G=>f(_,G,!0),size:14,label:"Auto-scroll",labelFirst:!0}),h(ve),h(J),Y(()=>te(pe,` ${e(O).length??""} / ${e(u).length??""}`)),d(ae,me)},W=ae=>{var me=Au();d(ae,me)};Q(ie,ae=>{e(u).length>0?ae(Pe):ae(W,-1)})}var Z=S(ie,2);{var ue=ae=>{var me=Fu(),ye=w(me,!0);h(me),Y(()=>te(ye,e(g))),d(ae,me)};Q(Z,ae=>{e(g)&&ae(ue)})}d(N,L)},$$slots:{actions:!0,default:!0}}),Te()}We(["change"]);function Iu(t,r=3){var T,A;const a=t.split(`
`),n=[];let o=0,i=0,s=!1;for(const g of a){if(g.startsWith("===")||g.startsWith("---")||g.startsWith("+++"))continue;const c=g.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){o=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,s=!0;continue}if(s)if(g.startsWith("-"))o++,n.push({type:"del",leftNum:o,rightNum:null,leftContent:g.slice(1),rightContent:""});else if(g.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:g.slice(1)});else{o++,i++;const v=g.startsWith(" ")?g.slice(1):g;n.push({type:"equal",leftNum:o,rightNum:i,leftContent:v,rightContent:v})}}const l=[];let u=0;for(;u<n.length;)if(n[u].type==="del"){const g=[];for(;u<n.length&&n[u].type==="del";)g.push(n[u]),u++;const c=[];for(;u<n.length&&n[u].type==="add";)c.push(n[u]),u++;const v=Math.max(g.length,c.length);for(let P=0;P<v;P++){const k=g[P],b=c[P];k&&b?l.push({type:"del",leftNum:k.leftNum,rightNum:b.rightNum,leftContent:k.leftContent,rightContent:b.rightContent}):k?l.push(k):b&&l.push(b)}}else l.push(n[u]),u++;const y=new Set;for(let g=0;g<l.length;g++)if(l[g].type!=="equal")for(let c=Math.max(0,g-r);c<=Math.min(l.length-1,g+r);c++)y.add(c);if(y.size===0)return[];const p=[];let E=-1,_=!1;for(let g=0;g<l.length;g++)if(y.has(g)){E>=0&&g-E>1&&p.push({kind:"separator",skipped:g-E-1});const c=l[g].type!=="equal",v=c&&!_;p.push({kind:"line",row:l[g],hunkStart:v}),_=c,E=g}if(E<l.length-1&&E>=0&&p.push({kind:"separator",skipped:l.length-1-E}),p.length>0&&p[0].kind==="line"){const g=((T=p[0].row)==null?void 0:T.leftNum)??0,c=((A=p[0].row)==null?void 0:A.rightNum)??0,v=Math.max(g,c)-1;v>0&&p.unshift({kind:"separator",skipped:v})}return p}var Ou=$('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),Hu=$('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),ju=$('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),Vu=$('<span class="text-xs text-muted">No matches</span>'),Uu=$('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),Bu=$('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),qu=$('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),Ku=$('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function Gu(t,r){Me(r,!0);let a=he(r,"loading",3,!1),n=I(void 0),o=U(()=>Iu(r.diffText)),i=U(()=>{const G=[];return e(o).forEach((X,re)=>{X.hunkStart&&G.push(re)}),G}),s=U(()=>e(i).length>0),l=U(()=>{var X;const G=new Array(e(o).length).fill(-1);for(let re=0;re<e(i).length;re++){let fe=e(i)[re];for(;fe<e(o).length&&e(o)[fe].kind==="line"&&((X=e(o)[fe].row)==null?void 0:X.type)!=="equal";)G[fe]=re,fe++}return G}),u=I(-1),y="";Ne(()=>{r.diffText!==y&&(y=r.diffText,f(u,-1))});let p=U(()=>{if(!r.search.trim())return[];try{const G=new RegExp(r.search,"i"),X=[];return e(o).forEach((re,fe)=>{re.kind==="line"&&re.row&&(G.test(re.row.leftContent)||G.test(re.row.rightContent))&&X.push(fe)}),X}catch{return[]}}),E=I(-1),_="";Ne(()=>{r.search!==_&&(_=r.search,f(E,e(p).length>0?0:-1,!0))});async function T(G){var fe;f(E,G,!0),await $t();const X=e(p)[G],re=(fe=e(k))==null?void 0:fe.querySelector(`[data-item-idx="${X}"]`);if(re&&e(k)&&e(b)){const Se=e(k).getBoundingClientRect(),_e=re.getBoundingClientRect().top-Se.top+e(k).scrollTop-e(k).clientHeight/3;C=!0,e(k).scrollTop=_e,e(b).scrollTop=_e,requestAnimationFrame(()=>{C=!1})}}function A(){e(E)>0&&T(e(E)-1)}function g(){e(E)<0&&e(p).length>0?T(0):e(E)<e(p).length-1&&T(e(E)+1)}function c(G,X){const re=Fa(G);if(!r.search.trim())return re;try{const fe=new RegExp(`(${r.search})`,"gi"),Se=X?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return re.replace(fe,`<span class="${Se}">$1</span>`)}catch{return re}}function v(G,X){return G==="equal"?"":G==="del"&&X==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":G==="del"&&X==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":G==="add"&&X==="left"?"bg-edf-gris-clair":G==="add"&&X==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function P(G,X){return G==="del"&&X==="left"?"rgb(251,237,233)":G==="del"&&X==="right"?"rgb(238,247,236)":G==="add"&&X==="left"?"var(--color-edf-gris-clair)":G==="add"&&X==="right"?"rgb(238,247,236)":"white"}let k=I(void 0),b=I(void 0),x=!1,C=!1;function M(G){x||C||!e(k)||!e(b)||(x=!0,G==="left"?(e(b).scrollTop=e(k).scrollTop,e(b).scrollLeft=e(k).scrollLeft):(e(k).scrollTop=e(b).scrollTop,e(k).scrollLeft=e(b).scrollLeft),requestAnimationFrame(()=>{x=!1}))}async function F(G){var re;f(u,G,!0),await $t();const X=(re=e(k))==null?void 0:re.querySelector(`[data-hunk-start="${G}"]`);if(X&&e(k)&&e(b)){C=!0;const fe=e(k).getBoundingClientRect(),Ie=X.getBoundingClientRect().top-fe.top+e(k).scrollTop-e(k).clientHeight/3;e(k).scrollTop=Ie,e(b).scrollTop=Ie,requestAnimationFrame(()=>{C=!1})}}function z(){e(u)>0&&F(e(u)-1)}function V(){e(u)<0?F(0):e(u)<e(i).length-1&&F(e(u)+1)}function O(G){const X=e(l)[G];X>=0&&f(u,X,!0)}function H(G){G.target instanceof HTMLInputElement||(G.key==="n"&&!G.shiftKey?(G.preventDefault(),V()):G.key==="N"||G.key==="n"&&G.shiftKey?(G.preventDefault(),z()):G.key==="j"?(G.preventDefault(),g()):(G.key==="J"||G.key==="j"&&G.shiftKey)&&(G.preventDefault(),A()))}var D=Ku();{const G=(X,re=xo)=>{var fe=be(),Se=B(fe);Qe(Se,17,()=>e(o),cn,(Ie,_e,le)=>{const Oe=U(()=>e(i).indexOf(le)),Fe=U(()=>e(l)[le]>=0&&e(l)[le]===e(u)),nt=U(()=>{var lt,Ge;return re()==="left"?(lt=e(_e).row)==null?void 0:lt.leftNum:(Ge=e(_e).row)==null?void 0:Ge.rightNum}),er=U(()=>{var lt,Ge;return re()==="left"?((lt=e(_e).row)==null?void 0:lt.leftContent)??"":((Ge=e(_e).row)==null?void 0:Ge.rightContent)??""});var pr=be(),Ze=B(pr);{var ct=lt=>{var Ge=Ou(),Rt=S(w(Ge),2),Or=w(Rt);h(Rt),h(Ge),Y(()=>te(Or,`... ${e(_e).skipped??""} lines hidden ...`)),d(lt,Ge)},Ir=lt=>{var Ge=Hu(),Rt=w(Ge),Or=w(Rt,!0);h(Rt);var Cn=S(Rt,2);Ar(Cn,()=>c(e(er),e(E)>=0&&e(p)[e(E)]===le),!0),h(Cn),h(Ge),Y((xt,Nt,_r,za,Da)=>{ke(Ge,1,`flex w-full ${xt??""} ${Nt??""}`),Je(Ge,e(Fe)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),Ce(Ge,"role",_r),Ce(Ge,"tabindex",za),Ce(Ge,"data-hunk-start",re()==="left"&&e(Oe)>=0?e(Oe):void 0),Ce(Ge,"data-item-idx",re()==="left"?le:void 0),Je(Rt,`background: ${Da??""}; color: ${e(Fe)?"white":"var(--color-muted)"};`),te(Or,e(nt)??"")},[()=>v(e(_e).row.type,re()),()=>e(_e).row.type!=="equal"||e(p).includes(le)?"cursor-pointer":"",()=>e(_e).row.type!=="equal"||e(p).includes(le)?"button":void 0,()=>e(_e).row.type!=="equal"||e(p).includes(le)?0:void 0,()=>e(Fe)?"rgb(16,87,200)":P(e(_e).row.type,re())]),se("click",Ge,()=>{var Nt;((Nt=e(_e).row)==null?void 0:Nt.type)!=="equal"&&O(le);const xt=e(p).indexOf(le);xt>=0&&f(E,xt,!0)}),se("keydown",Ge,xt=>{var Nt;if(xt.key==="Enter"||xt.key===" "){xt.preventDefault(),((Nt=e(_e).row)==null?void 0:Nt.type)!=="equal"&&O(le);const _r=e(p).indexOf(le);_r>=0&&f(E,_r,!0)}}),d(lt,Ge)};Q(Ze,lt=>{e(_e).kind==="separator"?lt(ct):e(_e).row&&lt(Ir,1)})}d(Ie,pr)}),d(X,fe)};var K=w(D),q=w(K),ne=w(q),R=w(ne,!0);h(ne);var N=S(ne,2),m=w(N,!0);h(N),h(q);var L=S(q,2),j=w(L),ee=w(j,!0);h(j);var ie=S(j,2),Pe=w(ie,!0);h(ie),h(L),h(K);var W=S(K,2),Z=w(W),ue=w(Z);Ye(ue);var ae=S(ue,2);{var me=X=>{var re=ju(),fe=B(re);{let le=U(()=>e(E)<=0);$e(fe,{variant:"secondary",size:"sm",onclick:A,get disabled(){return e(le)},children:(Oe,Fe)=>{xe();var nt=Be("Prev");d(Oe,nt)},$$slots:{default:!0}})}var Se=S(fe,2),Ie=w(Se);h(Se);var _e=S(Se,2);{let le=U(()=>e(E)>=e(p).length-1);$e(_e,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(le)},children:(Oe,Fe)=>{xe();var nt=Be("Next");d(Oe,nt)},$$slots:{default:!0}})}Y(()=>te(Ie,`${e(E)>=0?e(E)+1:"–"} / ${e(p).length??""} occurrence${e(p).length!==1?"s":""}`)),d(X,re)},ye=U(()=>r.search.trim()&&e(p).length>0),J=X=>{var re=Vu();d(X,re)},de=U(()=>r.search.trim());Q(ae,X=>{e(ye)?X(me):e(de)&&X(J,1)})}h(Z);var we=S(Z,2),Ee=w(we);{let X=U(()=>e(i).length===0||e(u)<=0);$e(Ee,{variant:"secondary",size:"sm",onclick:z,get disabled(){return e(X)},children:(re,fe)=>{xe();var Se=Be("Prev");d(re,Se)},$$slots:{default:!0}})}var ge=S(Ee,2),ze=w(ge);h(ge);var pe=S(ge,2);{let X=U(()=>e(i).length===0||e(u)>=e(i).length-1);$e(pe,{variant:"secondary",size:"sm",onclick:V,get disabled(){return e(X)},children:(re,fe)=>{xe();var Se=Be("Next");d(re,Se)},$$slots:{default:!0}})}h(we),h(W);var He=S(W,2);{var De=X=>{var re=Uu(),fe=w(re),Se=w(fe),Ie=w(Se);G(Ie,()=>"left"),h(Se),h(fe),rt(fe,Fe=>f(k,Fe),()=>e(k));var _e=S(fe,2),le=w(_e),Oe=w(le);G(Oe,()=>"right"),h(le),h(_e),rt(_e,Fe=>f(b,Fe),()=>e(b)),h(re),tt("scroll",fe,()=>M("left")),tt("scroll",_e,()=>M("right")),d(X,re)},ce=X=>{var re=Bu();d(X,re)};Q(He,X=>{e(s)?X(De):X(ce,-1)})}var ve=S(He,2);{var Ve=X=>{var re=qu();d(X,re)};Q(ve,X=>{a()&&X(Ve)})}h(D),rt(D,X=>f(n,X),()=>e(n)),Y(()=>{te(R,r.leftLabel),te(m,r.kind),te(ee,r.rightLabel),te(Pe,r.kind),un(ue,r.search),te(ze,`${e(u)>=0?e(u)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),se("input",ue,X=>r.onSearchChange(X.target.value)),se("keydown",ue,X=>{X.key==="Enter"&&(X.preventDefault(),g())})}se("keydown",D,H),d(t,D),Te()}We(["keydown","click","input"]);var Wu=$("<!> <!> <!>",1),Xu=$('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),Yu=$('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),Qu=$('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),Ju=$('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),Zu=$('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),ed=$('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),td=$('<p class="text-sm text-red-600 text-center py-8"> </p>'),rd=$('<p class="text-sm text-muted text-center py-8">Loading...</p>'),nd=$("<!> <!> <!>",1),ad=$("<!> <!>",1);function od(t,r){Me(r,!0);let a=I(""),n=I(""),o=I("setup.xml"),i=I(""),s=I(""),l=I(!1),u=I(!1),y=I(""),p=U(()=>r.allCases.map(x=>({value:x,label:x}))),E=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}],_=I(!1),T=U(()=>e(a)&&e(n)&&e(a)!==e(n));function A(){const x=e(a);f(a,e(n),!0),f(n,x,!0)}async function g(){if(e(T)){f(l,!0),f(y,"");try{const x=await fi({cases:[e(a),e(n)],base:e(a),kind:e(o)});f(s,x,!0),f(u,!0)}catch(x){console.error("Failed to load diff:",x),f(s,""),f(u,!1);const C=x instanceof Error?x.message:String(x);f(y,C.includes("404")?`File "${e(o)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(o)?g():e(a)&&e(n)&&e(a)===e(n)&&(f(s,""),f(u,!0))});let c=!1;Ne(()=>{r.allCases.length>=2&&!c?(c=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!c&&(c=!0,f(a,r.allCases[0],!0))});let v=U(bn),P=U(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(v).length===0)return[];const x=_n(),C=x.find(F=>F.case_id===e(a)),M=x.find(F=>F.case_id===e(n));return!C&&!M?[]:e(v).map(F=>{var O,H;const z=((O=C==null?void 0:C.doe)==null?void 0:O[F])!=null&&String(C.doe[F])!==""?String(C.doe[F]):"—",V=((H=M==null?void 0:M.doe)==null?void 0:H[F])!=null&&String(M.doe[F])!==""?String(M.doe[F]):"—";return{param:F,left:z,right:V,differs:z!==V}})}),k=U(()=>e(_)?e(P):e(P).filter(x=>x.differs)),b=U(()=>e(P).filter(x=>x.differs).length);It(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(x,C)=>{var M=ad(),F=B(M);Gt(F,{children:(D,K)=>{var q=Wu(),ne=B(q);Re(ne,{text:"First case",children:(m,L)=>{it(m,{class:"w-32.5",get options(){return e(p)},get value(){return e(a)},onchange:j=>f(a,j,!0),placeholder:"Select..."})}});var R=S(ne,2);{let m=U(()=>!e(a)&&!e(n));$e(R,{variant:"secondary",size:"sm",onclick:A,get disabled(){return e(m)},children:(L,j)=>{Le(L,{get icon(){return Ts}})},$$slots:{default:!0}})}var N=S(R,2);Re(N,{text:"Second case",children:(m,L)=>{it(m,{class:"w-32.5",get options(){return e(p)},get value(){return e(n)},onchange:j=>f(n,j,!0),placeholder:"Select..."})}}),d(D,q)}});var z=S(F,2);{var V=D=>{var K=Xu();d(D,K)},O=D=>{var K=Yu();d(D,K)},H=D=>{var K=nd(),q=B(K);{var ne=ee=>{var ie=ed(),Pe=B(ie),W=w(Pe),Z=w(W);h(W);var ue=S(W,2),ae=w(ue,!0);h(ue),h(Pe);var me=S(Pe,2);{var ye=de=>{var we=Ju(),Ee=w(we),ge=w(Ee),ze=w(ge),pe=w(ze),He=w(pe,!0);h(pe);var De=S(pe,2),ce=w(De,!0);h(De),h(ze),h(ge);var ve=S(ge);Qe(ve,21,()=>e(k),Ve=>Ve.param,(Ve,G)=>{var X=Qu(),re=w(X),fe=w(re,!0);h(re);var Se=S(re),Ie=w(Se,!0);h(Se);var _e=S(Se),le=w(_e,!0);h(_e),h(X),Y(()=>{ke(re,1,ut(e(G).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),te(fe,e(G).left),te(Ie,e(G).param),ke(_e,1,ut(e(G).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),te(le,e(G).right)}),d(Ve,X)}),h(ve),h(Ee),h(we),Y(()=>{te(He,e(a)),te(ce,e(n))}),d(de,we)},J=de=>{var we=Zu();d(de,we)};Q(me,de=>{e(k).length>0?de(ye):de(J,-1)})}Y(()=>{te(Z,`${e(b)??""} difference${e(b)!==1?"s":""} out of ${e(P).length??""}
          parameters`),te(ae,e(_)?"Show differences only":"Show all parameters")}),se("click",ue,()=>f(_,!e(_))),d(ee,ie)};Q(q,ee=>{e(P).length>0&&ee(ne)})}var R=S(q,2);Gt(R,{children:(ee,ie)=>{Re(ee,{text:"File",children:(Pe,W)=>{it(Pe,{class:"w-37.5",get options(){return E},get value(){return e(o)},onchange:Z=>f(o,Z,!0)})}})}});var N=S(R,2);{var m=ee=>{var ie=td(),Pe=w(ie,!0);h(ie),Y(()=>te(Pe,e(y))),d(ee,ie)},L=ee=>{Gu(ee,{get diffText(){return e(s)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(o)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:ie=>f(i,ie,!0)})},j=ee=>{var ie=rd();d(ee,ie)};Q(N,ee=>{e(y)?ee(m):e(u)?ee(L,1):e(l)&&ee(j,2)})}d(D,K)};Q(z,D=>{e(a)&&e(n)&&e(a)===e(n)?D(V):!e(a)||!e(n)?D(O,1):D(H,-1)})}d(x,M)},$$slots:{default:!0}}),Te()}We(["click"]);var sd=$("<!> Refresh",1),id=$("<!> <!>",1),ld=$('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),cd=$('<input type="number" min="0" max="50" style="width: 70px;"/>'),ud=$("<!> Download as CSV",1),dd=$('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),fd=$("&nbsp;<!>",1),vd=$("<button> <!></button>"),gd=$('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),hd=$('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),md=$('<span class="error-badge"> </span>'),pd=$('<span class="error-badge error-badge-new">NEW</span>'),_d=$('<div class="error-line"></div>'),bd=$('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),xd=$('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),yd=$('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),wd=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),kd=$("<!> <!> <div><!> <!></div> <!> <!>",1);function Cd(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let o=I(oe([])),i=I(oe([...n])),s=I("all"),l=I(""),u=I(a),y=I(!1),p=I(""),E=I(oe(Qt("errors")));Ne(()=>{Jt("errors",e(E))});let _=I(oe([])),T=I(oe(new Set));function A(W){return W.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function g(W){const Z=W.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${W.case_id}|${W.file}|${W.severity}|${A(Z)}`}function c(W){const Z=new Map;for(const ue of W){const ae=g(ue),me=Z.get(ae);me?me.count++:Z.set(ae,{...ue,count:1,fingerprint:ae,isNew:!e(T).has(ae)})}return Array.from(Z.values())}async function v(){if(!(!e(o).length||!e(i).length)){f(y,!0);try{const W=await oi({cases:e(o),files:e(i),context:e(u),sev:e(s)==="all"?"":e(s),q:e(l)});f(p,"");const Z=c(W.items);f(_,W.items,!0);const ue=new Set(Z.map(ae=>ae.fingerprint));f(T,ue,!0),f(P,Z,!0)}catch(W){f(p,"Failed to load errors"),console.error("Failed to load errors:",W)}finally{f(y,!1)}}}let P=I(oe([])),k=null;function b(){k&&clearTimeout(k),k=setTimeout(v,250)}function x(W){return W==="error"?"error-sev-error":W==="warn"?"error-sev-warn":"error-sev-info"}let C=U(()=>yn(r.allCases)),F=["csauto.stderr","run_solver.log","listing","csauto.stdout"].map(W=>({value:W,label:W})),z=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function V(W){if(f(o,W,!0),W.length===0){f(P,[],!0),f(_,[],!0);return}v()}function O(W){if(f(i,W,!0),W.length===0){f(P,[],!0),f(_,[],!0);return}v()}function H(W){f(s,W,!0),v()}function D(){v()}let K=!1;Ne(()=>{r.allCases.length>0&&!K&&(K=!0,f(o,[...r.allCases],!0),v())}),Ne(()=>{e(E)?vr("errors",v,On()):ft("errors")});const q=gr(()=>{K&&v()});cr(()=>{ft("errors"),q()});let ne=I(oe(new Set));function R(W){const Z=new Set(e(ne));Z.has(W)?Z.delete(W):Z.add(W),f(ne,Z,!0)}let N=I("severity"),m=I("desc");const L={info:0,warn:1,error:2};let j=U(()=>{const W=[...e(P)];return W.sort((Z,ue)=>{let ae=0;return e(N)==="severity"?ae=(L[Z.severity]??9)-(L[ue.severity]??9):e(N)==="count"?ae=Z.count-ue.count:ae=Z[e(N)].localeCompare(ue[e(N)]),e(m)==="asc"?ae:-ae}),W});const ee={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function ie(W){e(N)===W?f(m,e(m)==="asc"?"desc":"asc",!0):(f(N,W,!0),f(m,ee[W],!0))}function Pe(){if(!e(P).length)return;const W=["case_id","file","severity","count","is_new","line_text"],Z=e(j).map(me=>[me.case_id,me.file,me.severity,me.count,me.isNew?"yes":"no",`"${me.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),ue=[W.join(","),...Z].join(`
`),ae=mr("errors",e(o),"csv");Sa(ue,ae)}It(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:Z=>{var ue=id(),ae=B(ue);{let J=U(On);Zt(ae,{name:"errors",get intervalMs(){return e(J)},onRefresh:v,get checked(){return e(E)},set checked(de){f(E,de,!0)}})}var me=S(ae,2);{var ye=J=>{$e(J,{variant:"primary",onclick:v,children:(de,we)=>{var Ee=sd(),ge=B(Ee);Le(ge,{get icon(){return Yt}}),xe(),d(de,Ee)},$$slots:{default:!0}})};Q(me,J=>{e(E)||J(ye)})}d(Z,ue)},children:(Z,ue)=>{var ae=kd(),me=B(ae);Gt(me,{children:(ce,ve)=>{var Ve=dd(),G=B(Ve);Re(G,{text:"Cases",children:(le,Oe)=>{Bt(le,{class:"w-[160px]",get options(){return e(C)},get selected(){return e(o)},onchange:V,placeholder:"Select cases..."})}});var X=S(G,2);Re(X,{text:"Files",children:(le,Oe)=>{Bt(le,{class:"w-[160px]",get options(){return F},get selected(){return e(i)},onchange:O,placeholder:"Select files..."})}});var re=S(X,2);Re(re,{text:"Severity",children:(le,Oe)=>{it(le,{class:"w-[90px]",get options(){return z},get value(){return e(s)},onchange:H})}});var fe=S(re,2);Re(fe,{text:"Search",children:(le,Oe)=>{var Fe=ld();Ye(Fe),se("input",Fe,b),et(Fe,()=>e(l),nt=>f(l,nt)),d(le,Fe)}});var Se=S(fe,2);Re(Se,{text:"Context",children:(le,Oe)=>{var Fe=cd();Ye(Fe),se("change",Fe,D),et(Fe,()=>e(u),nt=>f(u,nt)),d(le,Fe)}});var Ie=S(Se,2),_e=w(Ie);{let le=U(()=>e(P).length===0);$e(_e,{variant:"secondary",size:"sm",onclick:Pe,get disabled(){return e(le)},children:(Oe,Fe)=>{var nt=ud(),er=B(nt);Le(er,{get icon(){return fr}}),xe(),d(Oe,nt)},$$slots:{default:!0}})}h(Ie),d(ce,Ve)}});var ye=S(me,2);{var J=ce=>{var ve=gd(),Ve=S(w(ve),2);Qe(Ve,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],G=>G.key,(G,X)=>{var re=vd(),fe=w(re,!0),Se=S(fe);{var Ie=_e=>{var le=fd(),Oe=S(B(le));{let Fe=U(()=>e(m)==="asc"?Ls:Ms);Le(Oe,{get icon(){return e(Fe)},size:12})}d(_e,le)};Q(Se,_e=>{e(N)===X.key&&_e(Ie)})}h(re),Y(()=>{ke(re,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(N)===X.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),te(fe,X.label)}),se("click",re,()=>ie(X.key)),d(G,re)}),h(ve),d(ce,ve)};Q(ye,ce=>{e(j).length>0&&ce(J)})}var de=S(ye,2),we=w(de);{var Ee=ce=>{var ve=hd();d(ce,ve)};Q(we,ce=>{e(j).length===0&&ce(Ee)})}var ge=S(we,2);Qe(ge,17,()=>e(j),ce=>ce.fingerprint,(ce,ve)=>{var Ve=bd(),G=w(Ve),X=w(G),re=w(X);{let Ze=U(()=>e(ne).has(e(ve).fingerprint)?vn:As);Le(re,{get icon(){return e(Ze)},size:14})}h(X);var fe=S(X,2),Se=w(fe);h(fe);var Ie=S(fe,2),_e=w(Ie);{var le=Ze=>{var ct=md(),Ir=w(ct);h(ct),Y(()=>te(Ir,`${e(ve).count??""}x`)),d(Ze,ct)};Q(_e,Ze=>{e(ve).count>1&&Ze(le)})}var Oe=S(_e,2);{var Fe=Ze=>{var ct=pd();d(Ze,ct)};Q(Oe,Ze=>{e(ve).isNew&&Ze(Fe)})}h(Ie),h(G);var nt=S(G,2);{var er=Ze=>{var ct=_d();Ar(ct,()=>e(ve).line_html,!0),h(ct),d(Ze,ct)},pr=U(()=>e(ne).has(e(ve).fingerprint));Q(nt,Ze=>{e(pr)&&Ze(er)})}h(Ve),Y(Ze=>{ke(Ve,1,`error-item ${Ze??""}`),te(Se,`${e(ve).case_id??""} / ${e(ve).file??""} : ${e(ve).severity??""}`)},[()=>x(e(ve).severity)]),se("click",G,()=>R(e(ve).fingerprint)),d(ce,Ve)}),h(de);var ze=S(de,2);{var pe=ce=>{var ve=yd(),Ve=w(ve),G=w(Ve);h(Ve);var X=S(Ve,2);{var re=Se=>{var Ie=xd(),_e=w(Ie);h(Ie),Y(le=>te(_e,`${le??""} new`),[()=>e(P).filter(le=>le.isNew).length]),d(Se,Ie)},fe=U(()=>e(P).some(Se=>Se.isNew));Q(X,Se=>{e(fe)&&Se(re)})}h(ve),Y(()=>te(G,`${e(P).length??""} unique / ${e(_).length??""} total`)),d(ce,ve)};Q(ze,ce=>{e(j).length>0&&ce(pe)})}var He=S(ze,2);{var De=ce=>{var ve=wd(),Ve=w(ve,!0);h(ve),Y(()=>te(Ve,e(p))),d(ce,ve)};Q(He,ce=>{e(p)&&ce(De)})}Y(()=>ke(de,1,`error-list ${e(y)?"opacity-50 pointer-events-none":""}`)),d(Z,ae)},$$slots:{actions:!0,default:!0}}),Te()}We(["input","change","click"]);var Sd=$('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Ad(t,r){Me(r,!0);let a=I(oe({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=I(oe([]));async function o(){try{const b=await ri();bl(b.rows),xl(b.doe_columns),f(n,b.rows.map(x=>x.case_id),!0),f(a,Ll(ka(),_n()),!0)}catch(b){console.error("Failed to load status:",b)}}Xn(()=>{o()});var i=Sd(),s=B(i);Pi(s,{});var l=S(s,2);Ti(l,{});var u=S(l,2);Ji(u,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var y=S(u,2),p=w(y);uc(p,{onRefresh:o});var E=S(p,2);Tc(E,{get allCases(){return e(n)}});var _=S(E,2);ru(_,{get allCases(){return e(n)}});var T=S(_,2);vu(T,{get allCases(){return e(n)}});var A=S(T,2);od(A,{get allCases(){return e(n)}});var g=S(A,2);Du(g,{get allCases(){return e(n)}});var c=S(g,2);Cd(c,{get allCases(){return e(n)}}),h(y);var v=S(y,2),P=S(w(v),2),k=w(P);h(P),h(v),Y(()=>Ce(k,"src",Zi)),d(t,i),Te()}export{Ad as component};
