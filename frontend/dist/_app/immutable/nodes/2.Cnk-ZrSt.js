import{b as Cr,a as d,f as E,c as be,t as Be,d as Dt}from"../chunks/D7qCQ9Vz.js";import{o as Xn,a as cr}from"../chunks/i8px5jWd.js";import{h as Te,L as St,G as Lt,c as Sr,J as Vt,b as Yn,o as e,N as Ia,ag as Oa,O as Sn,P as Ft,f as mt,ay as Qn,aF as Ha,ao as $n,e as pt,a as ir,aM as ja,s as Ua,a5 as Va,aN as Jn,aE as ln,aO as Ba,a7 as Pn,aP as qa,aQ as Ka,aI as Ga,aR as gt,aS as Zn,a1 as Wa,r as ea,p as ta,aT as Hr,ae as ra,aU as Xa,aV as Ya,aC as Qa,m as Ja,d as Pr,az as na,y as Q,F as aa,aW as Za,aG as eo,aA as to,D as oa,aX as sa,aY as ro,aZ as no,E as ao,aw as ia,S as Ar,k as Er,a_ as la,a$ as oo,b0 as so,b1 as ca,b2 as io,b3 as lo,b4 as ur,b5 as co,b6 as uo,b7 as fo,b8 as vo,b9 as go,ba as ho,bb as po,aJ as $t,U as mo,aK as D,_ as oe,$ as f,A as k,B as g,x as Me,g as B,z as Le,C as P,j as Ne,ap as xe,aL as U,bc as _o,q as Ot,bd as bo,be as st,bf as xo}from"../chunks/YKSDnLeQ.js";import{p as he,i as Y,b as rt,c as yo,l as je,s as qe}from"../chunks/B9fr0BkO.js";import{i as wo,a as ko,d as se,b as We,c as Co,n as So,e as $o,s as re,f as tt}from"../chunks/CPch7uOu.js";import{s as ft}from"../chunks/BIya9TyJ.js";import{i as Po}from"../chunks/CX9tPVrf.js";import{B as Eo}from"../chunks/ChCvXe72.js";function cn(t,r){return r}function Ro(t,r,a){for(var n=[],o=r.length,i,s=r.length,l=0;l<o;l++){let M=r[l];ta(M,()=>{if(i){if(i.pending.delete(M),i.done.add(M),i.pending.size===0){var m=t.outrogroups;Wr(t,ln(i.done)),m.delete(i),m.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&a!==null;if(u){var b=a,x=b.parentNode;Qa(x),x.append(b),t.items.clear()}Wr(t,r,!u)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Wr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const s of t.pending.values())for(const l of s)n.add(t.items.get(l).e)}for(var o=0;o<r.length;o++){var i=r[o];if(n!=null&&n.has(i)){i.f|=gt;const s=document.createDocumentFragment();Ja(i,s)}else Pr(r[o],a)}}var En;function Qe(t,r,a,n,o,i=null){var s=t,l=new Map,u=(r&Zn)!==0;if(u){var b=t;s=Te?St(Lt(b)):b.appendChild(Sr())}Te&&Vt();var x=null,M=Va(()=>{var _=a();return Jn(_)?_:_==null?[]:ln(_)}),m,A=new Map,F=!0;function v(_){($.effect.f&Wa)===0&&($.pending.delete(_),$.fallback=x,No($,m,s,r,n),x!==null&&(m.length===0?(x.f&gt)===0?ea(x):(x.f^=gt,or(x,null,s)):ta(x,()=>{x=null})))}function c(_){$.pending.delete(_)}var p=Yn(()=>{m=e(M);var _=m.length;let w=!1;if(Te){var y=Ia(s)===Oa;y!==(_===0)&&(s=Sn(),St(s),Ft(!1),w=!0)}for(var S=new Set,L=pt,T=Ua(),z=0;z<_;z+=1){Te&&mt.nodeType===Qn&&mt.data===Ha&&(s=mt,w=!0,Ft(!1));var V=m[z],I=n(V,z),H=F?null:l.get(I);H?(H.v&&$n(H.v,V),H.i&&$n(H.i,z),T&&L.unskip_effect(H.e)):(H=Mo(l,F?s:En??(En=Sr()),V,I,z,o,r,a),F||(H.e.f|=gt),l.set(I,H)),S.add(I)}if(_===0&&i&&!x&&(F?x=ir(()=>i(s)):(x=ir(()=>i(En??(En=Sr()))),x.f|=gt)),_>S.size&&ja(),Te&&_>0&&St(Sn()),!F)if(A.set(L,S),T){for(const[O,q]of l)S.has(O)||L.skip_effect(q.e);L.oncommit(v),L.ondiscard(c)}else v(L);w&&Ft(!0),e(M)}),$={effect:p,items:l,pending:A,outrogroups:null,fallback:x};F=!1,Te&&(s=mt)}function tr(t){for(;t!==null&&(t.f&Xa)===0;)t=t.next;return t}function No(t,r,a,n,o){var V,I,H,O,q,K,te,N,R;var i=(n&Ya)!==0,s=r.length,l=t.items,u=tr(t.effect.first),b,x=null,M,m=[],A=[],F,v,c,p;if(i)for(p=0;p<s;p+=1)F=r[p],v=o(F,p),c=l.get(v).e,(c.f&gt)===0&&((I=(V=c.nodes)==null?void 0:V.a)==null||I.measure(),(M??(M=new Set)).add(c));for(p=0;p<s;p+=1){if(F=r[p],v=o(F,p),c=l.get(v).e,t.outrogroups!==null)for(const h of t.outrogroups)h.pending.delete(c),h.done.delete(c);if((c.f&Hr)!==0&&(ea(c),i&&((O=(H=c.nodes)==null?void 0:H.a)==null||O.unfix(),(M??(M=new Set)).delete(c))),(c.f&gt)!==0)if(c.f^=gt,c===u)or(c,null,a);else{var $=x?x.next:u;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),yt(t,x,c),yt(t,c,$),or(c,$,a),x=c,m=[],A=[],u=tr(x.next);continue}if(c!==u){if(b!==void 0&&b.has(c)){if(m.length<A.length){var _=A[0],w;x=_.prev;var y=m[0],S=m[m.length-1];for(w=0;w<m.length;w+=1)or(m[w],_,a);for(w=0;w<A.length;w+=1)b.delete(A[w]);yt(t,y.prev,S.next),yt(t,x,y),yt(t,S,_),u=_,x=S,p-=1,m=[],A=[]}else b.delete(c),or(c,u,a),yt(t,c.prev,c.next),yt(t,c,x===null?t.effect.first:x.next),yt(t,x,c),x=c;continue}for(m=[],A=[];u!==null&&u!==c;)(b??(b=new Set)).add(u),A.push(u),u=tr(u.next);if(u===null)continue}(c.f&gt)===0&&m.push(c),x=c,u=tr(c.next)}if(t.outrogroups!==null){for(const h of t.outrogroups)h.pending.size===0&&(Wr(t,ln(h.done)),(q=t.outrogroups)==null||q.delete(h));t.outrogroups.size===0&&(t.outrogroups=null)}if(u!==null||b!==void 0){var L=[];if(b!==void 0)for(c of b)(c.f&Hr)===0&&L.push(c);for(;u!==null;)(u.f&Hr)===0&&u!==t.fallback&&L.push(u),u=tr(u.next);var T=L.length;if(T>0){var z=(n&Zn)!==0&&s===0?a:null;if(i){for(p=0;p<T;p+=1)(te=(K=L[p].nodes)==null?void 0:K.a)==null||te.measure();for(p=0;p<T;p+=1)(R=(N=L[p].nodes)==null?void 0:N.a)==null||R.fix()}Ro(t,L,z)}}i&&ra(()=>{var h,C;if(M!==void 0)for(c of M)(C=(h=c.nodes)==null?void 0:h.a)==null||C.apply()})}function Mo(t,r,a,n,o,i,s,l){var u=(s&qa)!==0?(s&Ka)===0?Ga(a,!1,!1):Pn(a):null,b=(s&Ba)!==0?Pn(o):null;return{v:u,i:b,e:ir(()=>(i(r,u??a,b??o,l),()=>{t.delete(n)}))}}function or(t,r,a){if(t.nodes)for(var n=t.nodes.start,o=t.nodes.end,i=r&&(r.f&gt)===0?r.nodes.start:a;n!==null;){var s=na(n);if(i.before(n),n===o)return;n=s}}function yt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Tr(t,r,a=!1,n=!1,o=!1,i=!1){var s=t,l="";if(a){var u=t;Te&&(s=St(Lt(u)))}Q(()=>{var b=aa;if(l===(l=r()??"")){Te&&Vt();return}if(a&&!Te){b.nodes=null,u.innerHTML=l,l!==""&&Cr(Lt(u),u.lastChild);return}if(b.nodes!==null&&(Za(b.nodes.start,b.nodes.end),b.nodes=null),l!==""){if(Te){mt.data;for(var x=Vt(),M=x;x!==null&&(x.nodeType!==Qn||x.data!=="");)M=x,x=na(x);if(x===null)throw eo(),to;Cr(mt,M),s=St(x);return}var m=n?sa:o?ro:void 0,A=oa(n?"svg":o?"math":"template",m);A.innerHTML=l;var F=n||o?A:A.content;if(Cr(Lt(F),F.lastChild),n||o)for(;Lt(F);)s.before(Lt(F));else s.before(F)}})}function Ve(t,r,a,n,o){var l;Te&&Vt();var i=(l=r.$$slots)==null?void 0:l[a],s=!1;i===!0&&(i=r.children,s=!0),i===void 0||i(t,s?()=>n:n)}function Lo(t,r,a,n,o,i){let s=Te;Te&&Vt();var l=null;Te&&mt.nodeType===no&&(l=mt,Vt());var u=Te?mt:t,b=new Eo(u,!1);Yn(()=>{const x=r()||null;var M=sa;if(x===null){b.ensure(null,null);return}return b.ensure(x,m=>{if(x){if(l=Te?l:oa(x,M),Cr(l,l),n){Te&&wo(x)&&l.append(document.createComment(""));var A=Te?Lt(l):l.appendChild(Sr());Te&&(A===null?Ft(!1):St(A)),n(l,A)}aa.nodes.end=l,m.before(l)}Te&&St(m)}),()=>{}},ao),ia(()=>{}),s&&(Ft(!0),St(u))}function Ao(t,r,a){Ar(()=>{var n=Er(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function To(t,r){var a=void 0,n;la(()=>{a!==(a=r())&&(n&&(Pr(n),n=null),a&&(n=ir(()=>{Ar(()=>a(t))})))})}function ua(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(a=ua(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Fo(){for(var t,r,a=0,n="",o=arguments.length;a<o;a++)(t=arguments[a])&&(r=ua(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?Fo(t):t??""}const Rn=[...` 	
\r\f \v\uFEFF`];function zo(t,r,a){var n=t==null?"":""+t;if(a){for(var o of Object.keys(a))if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var l=s+i;(s===0||Rn.includes(n[s-1]))&&(l===n.length||Rn.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function Nn(t,r=!1){var a=r?" !important;":";",n="";for(var o of Object.keys(t)){var i=t[o];i!=null&&i!==""&&(n+=" "+o+": "+i+a)}return n}function jr(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Do(t,r){if(r){var a="",n,o;if(Array.isArray(r)?(n=r[0],o=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(jr)),o&&u.push(...Object.keys(o).map(jr));var b=0,x=-1;const v=t.length;for(var M=0;M<v;M++){var m=t[M];if(l?m==="/"&&t[M-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[M+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?s++:m===")"&&s--,!l&&i===!1&&s===0){if(m===":"&&x===-1)x=M;else if(m===";"||M===v-1){if(x!==-1){var A=jr(t.substring(b,x).trim());if(!u.includes(A)){m!==";"&&M++;var F=t.substring(b,M).trim();a+=" "+F+";"}}b=M+1,x=-1}}}}return n&&(a+=Nn(n)),o&&(a+=Nn(o,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function ke(t,r,a,n,o,i){var s=t.__className;if(Te||s!==a||s===void 0){var l=zo(a,n,i);(!Te||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&o!==i)for(var u in i){var b=!!i[u];(o==null||b!==!!o[u])&&t.classList.toggle(u,b)}return i}function Ur(t,r={},a,n){for(var o in a){var i=a[o];r[o]!==i&&(a[o]==null?t.style.removeProperty(o):t.style.setProperty(o,i,n))}}function Je(t,r,a,n){var o=t.__style;if(Te||o!==r){var i=Do(r,n);(!Te||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(Ur(t,a==null?void 0:a[0],n[0]),Ur(t,a==null?void 0:a[1],n[1],"important")):Ur(t,a,n));return n}function Rr(t,r,a=!1){if(t.multiple){if(r==null)return;if(!Jn(r))return oo();for(var n of t.options)n.selected=r.includes(sr(n));return}for(n of t.options){var o=sr(n);if(so(o,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function da(t){var r=new MutationObserver(()=>{Rr(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ia(()=>{r.disconnect()})}function Io(t,r,a=r){var n=new WeakSet,o=!0;ca(t,"change",i=>{var s=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(s),sr);else{var u=t.querySelector(s)??t.querySelector("option:not([disabled])");l=u&&sr(u)}a(l),t.__value=l,pt!==null&&n.add(pt)}),Ar(()=>{var i=r();if(t===document.activeElement){var s=pt;if(n.has(s))return}if(Rr(t,i,o),o&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=sr(l),a(i))}t.__value=i,o=!1}),da(t)}function sr(t){return"__value"in t?t.__value:t.value}const rr=Symbol("class"),nr=Symbol("style"),fa=Symbol("is custom element"),va=Symbol("is html"),Oo=ur?"link":"LINK",Ho=ur?"input":"INPUT",jo=ur?"option":"OPTION",Uo=ur?"select":"SELECT",Vo=ur?"progress":"PROGRESS";function Ye(t){if(Te){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;Ce(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var o=t.checked;Ce(t,"checked",null),t.checked=o}}};t.__on_r=a,ra(a),vo()}}function un(t,r){var a=dn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Vo)||(t.value=r??"")}function Bo(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Ce(t,r,a,n){var o=dn(t);Te&&(o[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Oo)||o[r]!==(o[r]=a)&&(r==="loading"&&(t[ho]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ga(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function qo(t,r,a,n,o=!1,i=!1){if(Te&&o&&t.nodeName===Ho){var s=t,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Ye(s)}var u=dn(t),b=u[fa],x=!u[va];let M=Te&&b;M&&Ft(!1);var m=r||{},A=t.nodeName===jo;for(var F in r)F in a||(a[F]=null);a.class?a.class=dt(a.class):a[rr]&&(a.class=null),a[nr]&&(a.style??(a.style=null));var v=ga(t);for(const S in a){let L=a[S];if(A&&S==="value"&&L==null){t.value=t.__value="",m[S]=L;continue}if(S==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";ke(t,c,L,n,r==null?void 0:r[rr],a[rr]),m[S]=L,m[rr]=a[rr];continue}if(S==="style"){Je(t,L,r==null?void 0:r[nr],a[nr]),m[S]=L,m[nr]=a[nr];continue}var p=m[S];if(!(L===p&&!(L===void 0&&t.hasAttribute(S)))){m[S]=L;var $=S[0]+S[1];if($!=="$$")if($==="on"){const T={},z="$$"+S;let V=S.slice(2);var _=$o(V);if(ko(V)&&(V=V.slice(0,-7),T.capture=!0),!_&&p){if(L!=null)continue;t.removeEventListener(V,m[z],T),m[z]=null}if(_)se(V,t,L),We([V]);else if(L!=null){let I=function(H){m[S].call(this,H)};m[z]=Co(V,t,I,T)}}else if(S==="style")Ce(t,S,L);else if(S==="autofocus")co(t,!!L);else if(!b&&(S==="__value"||S==="value"&&L!=null))t.value=t.__value=L;else if(S==="selected"&&A)Bo(t,L);else{var w=S;x||(w=So(w));var y=w==="defaultValue"||w==="defaultChecked";if(L==null&&!b&&!y)if(u[S]=null,w==="value"||w==="checked"){let T=t;const z=r===void 0;if(w==="value"){let V=T.defaultValue;T.removeAttribute(w),T.defaultValue=V,T.value=T.__value=z?V:null}else{let V=T.defaultChecked;T.removeAttribute(w),T.defaultChecked=V,T.checked=z?V:!1}}else t.removeAttribute(S);else y||v.includes(w)&&(b||typeof L!="string")?(t[w]=L,w in u&&(u[w]=uo)):typeof L!="function"&&Ce(t,w,L)}}}return M&&Ft(!0),m}function Mn(t,r,a=[],n=[],o=[],i,s=!1,l=!1){io(o,a,n,u=>{var b=void 0,x={},M=t.nodeName===Uo,m=!1;if(la(()=>{var F=r(...u.map(e)),v=qo(t,b,F,i,s,l);m&&M&&"value"in F&&Rr(t,F.value);for(let p of Object.getOwnPropertySymbols(x))F[p]||Pr(x[p]);for(let p of Object.getOwnPropertySymbols(F)){var c=F[p];p.description===lo&&(!b||c!==b[p])&&(x[p]&&Pr(x[p]),x[p]=ir(()=>To(t,()=>c))),v[p]=c}b=v}),M){var A=t;Ar(()=>{Rr(A,b.value,!0),da(A)})}m=!0})}function dn(t){return t.__attributes??(t.__attributes={[fa]:t.nodeName.includes("-"),[va]:t.namespaceURI===fo})}var Ln=new Map;function ga(t){var r=t.getAttribute("is")||t.nodeName,a=Ln.get(r);if(a)return a;Ln.set(r,a=[]);for(var n,o=t,i=Element.prototype;i!==o;){n=po(o);for(var s in n)n[s].set&&a.push(s);o=go(o)}return a}function et(t,r,a=r){var n=new WeakSet;ca(t,"input",async o=>{var i=o?t.defaultValue:t.value;if(i=Vr(t)?Br(i):i,a(i),pt!==null&&n.add(pt),await $t(),i!==(i=r())){var s=t.selectionStart,l=t.selectionEnd,u=t.value.length;if(t.value=i??"",l!==null){var b=t.value.length;s===l&&l===u&&b>u?(t.selectionStart=b,t.selectionEnd=b):(t.selectionStart=s,t.selectionEnd=Math.min(l,b))}}}),(Te&&t.defaultValue!==t.value||Er(r)==null&&t.value)&&(a(Vr(t)?Br(t.value):t.value),pt!==null&&n.add(pt)),mo(()=>{var o=r();if(t===document.activeElement){var i=pt;if(n.has(i))return}Vr(t)&&o===Br(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function Vr(t){var r=t.type;return r==="number"||r==="range"}function Br(t){return t===""?null:+t}let bt=D(oe({type:"none",props:{},resolve:null}));function Ko(){return e(bt)}function ot(t=void 0){const{resolve:r}=e(bt);f(bt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Go(t){return new Promise(r=>{f(bt,{type:"run",props:{cases:t},resolve:r},!0)})}function Wo(t){return new Promise(r=>{f(bt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Xo(t){return new Promise(r=>{f(bt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Xe(t,r="Alert"){return new Promise(a=>{f(bt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function An(t,r="Confirm",a="OK",n="primary"){return new Promise(o=>{f(bt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:o},!0)})}function fn(t,r="",a="Input",n="",o=!1){return new Promise(i=>{f(bt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:o},resolve:i},!0)})}var Yo=E('<div style="display:contents;"><!></div>');function Xt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Yo(),o=k(n);ft(o,()=>r.children),g(n),Ao(n,i=>a==null?void 0:a(i)),d(t,n)}var Qo=E('<div class="text-xs text-muted font-light"> </div>'),Jo=E('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function dr(t,r){Me(r,!0);const a=F=>{var v=Jo(),c=k(v),p=k(c),$=k(p),_=k($,!0);g($);var w=P($,2);{var y=z=>{var V=Qo(),I=k(V,!0);g(V),Q(()=>re(I,r.subtitle)),d(z,V)};Y(w,z=>{r.subtitle&&z(y)})}g(p);var S=P(p,2);ft(S,()=>r.children);var L=P(S,2),T=k(L);ft(T,()=>r.footer),g(L),g(c),g(v),Q(()=>{ke(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),Ce(c,"aria-labelledby",r.titleId),Ce($,"id",r.titleId),re(_,r.title)}),se("keydown",v,s),se("mousedown",v,u),se("click",v,b),d(F,v)};let n=he(r,"maxWidth",3,"520px"),o=he(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():ot(null)}function s(F){F.key==="Escape"?i():F.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function u(F){l=F.target.dataset.backdrop!==void 0}function b(F){const v=F.target.dataset.backdrop!==void 0;l&&v&&i(),l=!1}var x=be(),M=B(x);{var m=F=>{Xt(F,{children:(v,c)=>{a(v)}})},A=F=>{a(F)};Y(M,F=>{o()?F(m):F(A,-1)})}d(t,x),Le()}We(["keydown","mousedown","click"]);var Zo=E("<button><!></button>");function $e(t,r){let a=he(r,"variant",3,"primary"),n=he(r,"size",3,"default"),o=he(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},s={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=Zo(),u=k(l);ft(u,()=>r.children),g(l),Q(()=>{ke(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${s[a()]??""}`),l.disabled=o()}),se("click",l,function(...b){var x;(x=r.onclick)==null||x.apply(this,b)}),d(t,l)}We(["click"]);var es=E("<!> <span><!></span>",1),ts=E('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),rs=E('<input class="w-full"/>'),ns=E('<div class="mb-4.5"><!></div>'),as=E('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function os(t,r){Me(r,!0);let a=he(r,"confirmLabel",3,"OK"),n=he(r,"confirmVariant",3,"primary"),o=he(r,"value",3,""),i=he(r,"placeholder",3,""),s=he(r,"multiline",3,!1);const l=o();let u=D(oe(l)),b=D(void 0),x=D(void 0);Ne(()=>{var A;r.mode==="prompt"&&e(b)?(e(b).focus(),"select"in e(b)&&e(b).select()):e(x)&&((A=e(x).querySelector("button"))==null||A.focus())});function M(){r.mode==="prompt"?ot(e(u)):r.mode==="confirm"?ot(!0):ot()}function m(){r.mode==="confirm"?ot(!1):r.mode==="prompt"?ot(null):ot()}{const A=v=>{var c=es(),p=B(c);{var $=y=>{$e(y,{variant:"secondary",onclick:m,children:(S,L)=>{xe();var T=Be("Cancel");d(S,T)},$$slots:{default:!0}})};Y(p,y=>{r.mode!=="alert"&&y($)})}var _=P(p,2),w=k(_);$e(w,{get variant(){return n()},onclick:M,children:(y,S)=>{xe();var L=Be();Q(()=>re(L,a())),d(y,L)},$$slots:{default:!0}}),g(_),rt(_,y=>f(x,y),()=>e(x)),d(v,c)};let F=U(()=>s()?void 0:M);dr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(F)},onCancel:m,footer:A,children:(v,c)=>{var p=as(),$=B(p),_=k($,!0);g($);var w=P($,2);{var y=S=>{var L=ns(),T=k(L);{var z=I=>{var H=ts();_o(H),rt(H,O=>f(b,O),()=>e(b)),Q(()=>Ce(H,"placeholder",i())),et(H,()=>e(u),O=>f(u,O)),d(I,H)},V=I=>{var H=rs();Ye(H),rt(H,O=>f(b,O),()=>e(b)),Q(()=>Ce(H,"placeholder",i())),et(H,()=>e(u),O=>f(u,O)),d(I,H)};Y(T,I=>{s()?I(z):I(V,-1)})}g(L),d(S,L)};Y(w,S=>{r.mode==="prompt"&&S(y)})}Q(()=>re(_,r.message)),d(v,p)},$$slots:{footer:!0,default:!0}})}Le()}var ss=E('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Re(t,r){var a=ss(),n=k(a),o=P(n);ft(o,()=>r.children),g(a),Q(()=>re(n,`${r.text??""} `)),d(t,a)}function kt(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function Ct(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function is(t,r){return localStorage.getItem(t)??r}function ls(){return{n:kt("csauto_run_n",1),nt:kt("csauto_run_nt",1),maxParallel:kt("csauto_run_max_parallel",0)||null}}function cs(t){Ct("csauto_run_n",t.n),Ct("csauto_run_nt",t.nt),t.maxParallel&&Ct("csauto_run_max_parallel",t.maxParallel)}function us(){return{n:kt("csauto_restart_n",1),nt:kt("csauto_restart_nt",1),maxParallel:kt("csauto_restart_max_parallel",0)||null,mode:is("csauto_restart_mode","iterations"),value:kt("csauto_restart_value",100)}}function ds(t){Ct("csauto_restart_n",t.n),Ct("csauto_restart_nt",t.nt),t.maxParallel&&Ct("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),Ct("csauto_restart_value",t.value)}function fs(){return{keepLast:kt("csauto_clean_keep_last",1)}}function vs(t){Ct("csauto_clean_keep_last",t.keepLast)}var gs=E("<!> <!>",1),hs=E('<input type="number" min="1" step="1"/>'),ps=E('<input type="number" min="1" step="1"/>'),ms=E('<input type="number" min="0" step="1"/>'),_s=E('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div>');function bs(t,r){Me(r,!0);const a=ls(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=D(oe(a.n)),i=D(oe(a.nt)),s=D(oe(n));async function l(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}const u={n:e(o),nt:e(i),maxParallel:e(s)||null};cs(u),ot(u)}{const u=M=>{var m=gs(),A=B(m);$e(A,{variant:"secondary",onclick:()=>ot(null),children:(v,c)=>{xe();var p=Be("Cancel");d(v,p)},$$slots:{default:!0}});var F=P(A,2);$e(F,{variant:"run",onclick:l,children:(v,c)=>{xe();var p=Be("Run");d(v,p)},$$slots:{default:!0}}),d(M,m)};let b=U(()=>r.cases.length),x=U(()=>r.cases.length>1?"s":"");dr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(b)??""} case${e(x)??""} selected`},onConfirm:l,footer:u,children:(M,m)=>{var A=_s(),F=k(A);Re(F,{text:"MPI Ranks (n)",children:(p,$)=>{var _=hs();Ye(_),et(_,()=>e(o),w=>f(o,w)),d(p,_)}});var v=P(F,2);Re(v,{text:"OMP Threads (nt)",children:(p,$)=>{var _=ps();Ye(_),et(_,()=>e(i),w=>f(i,w)),d(p,_)}});var c=P(v,2);Re(c,{text:"Max Parallel",children:(p,$)=>{var _=ms();Ye(_),et(_,()=>e(s),w=>f(s,w)),d(p,_)}}),g(A),d(M,A)},$$slots:{footer:!0,default:!0}})}Le()}var xs=E("<!> <!>",1),ys=E('<input type="number" min="1" step="1"/>'),ws=E('<input type="number" min="1" step="1"/>'),ks=E('<input type="number" min="0" step="1"/>'),Cs=E("<select><option>Iterations</option><option>Physical time</option></select>"),Ss=E('<input type="number"/>'),$s=E('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function Ps(t,r){Me(r,!0);const a=us(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=D(oe(a.n)),i=D(oe(a.nt)),s=D(oe(n)),l=D(oe(a.mode)),u=D(oe(a.value)),b=U(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),x=U(()=>e(l)==="iterations"?"1":"any"),M=U(()=>e(l)==="iterations"?"1":"0");async function m(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(u))||e(u)<=0){await Xe("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(u))){await Xe("Iterations must be an integer.","Invalid value");return}const A={n:e(o),nt:e(i),maxParallel:e(s)||null,restartMode:e(l),restartValue:e(u)};ds({n:e(o),nt:e(i),maxParallel:e(s)||null,mode:e(l),value:e(u)}),ot(A)}{const A=c=>{var p=xs(),$=B(p);$e($,{variant:"secondary",onclick:()=>ot(null),children:(w,y)=>{xe();var S=Be("Cancel");d(w,S)},$$slots:{default:!0}});var _=P($,2);$e(_,{variant:"warning",onclick:m,children:(w,y)=>{xe();var S=Be("Restart");d(w,S)},$$slots:{default:!0}}),d(c,p)};let F=U(()=>r.cases.length),v=U(()=>r.cases.length>1?"s":"");dr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(F)??""} case${e(v)??""} selected`},onConfirm:m,footer:A,children:(c,p)=>{var $=$s(),_=B($),w=k(_);Re(w,{text:"MPI Ranks (n)",children:(V,I)=>{var H=ys();Ye(H),et(H,()=>e(o),O=>f(o,O)),d(V,H)}});var y=P(w,2);Re(y,{text:"OMP Threads (nt)",children:(V,I)=>{var H=ws();Ye(H),et(H,()=>e(i),O=>f(i,O)),d(V,H)}});var S=P(y,2);Re(S,{text:"Max Parallel",children:(V,I)=>{var H=ks();Ye(H),et(H,()=>e(s),O=>f(s,O)),d(V,H)}}),g(_);var L=P(_,2),T=k(L);Re(T,{text:"Stop criterion",children:(V,I)=>{var H=Cs(),O=k(H);O.value=O.__value="iterations";var q=P(O);q.value=q.__value="physical_time",g(H),Io(H,()=>e(l),K=>f(l,K)),d(V,H)}});var z=P(T,2);Re(z,{get text(){return e(b)},children:(V,I)=>{var H=Ss();Ye(H),Q(()=>{Ce(H,"min",e(M)),Ce(H,"step",e(x))}),et(H,()=>e(u),O=>f(u,O)),d(V,H)}}),g(L),d(c,$)},$$slots:{footer:!0,default:!0}})}Le()}function Ae(t,r){let a=he(r,"size",3,14);var n=be(),o=B(n);yo(o,()=>r.icon,(i,s)=>{s(i,{get size(){return a()},class:"icon"})}),d(t,n)}/**
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
 */const Tn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var Ns=Dt("<svg><!><!></svg>");function Ke(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]),n=je(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let o=he(r,"name",8,void 0),i=he(r,"color",8,"currentColor"),s=he(r,"size",8,24),l=he(r,"strokeWidth",8,2),u=he(r,"absoluteStrokeWidth",8,!1),b=he(r,"iconNode",24,()=>[]);Po();var x=Ns();Mn(x,(A,F,v)=>({...Es,...A,...n,width:s(),height:s(),stroke:i(),"stroke-width":F,class:v}),[()=>Rs(n)?void 0:{"aria-hidden":"true"},()=>(Ot(u()),Ot(l()),Ot(s()),Er(()=>u()?Number(l())*24/Number(s()):l())),()=>(Ot(Tn),Ot(o()),Ot(a),Er(()=>Tn("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var M=k(x);Qe(M,1,b,cn,(A,F)=>{var v=U(()=>bo(e(F),2));let c=()=>e(v)[0],p=()=>e(v)[1];var $=be(),_=B($);Lo(_,c,!0,(w,y)=>{Mn(w,()=>({...p()}))}),d(A,$)});var m=P(M);Ve(m,r,"default",{}),g(x),d(t,x),Le()}function Ms(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Ke(t,qe({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ls(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Ke(t,qe({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function As(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ke(t,qe({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function vn(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Ke(t,qe({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ts(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Ke(t,qe({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Fs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Ke(t,qe({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function zs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Ke(t,qe({name:"circle-x"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function fr(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ke(t,qe({name:"download"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ds(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Ke(t,qe({name:"droplets"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Is(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ke(t,qe({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Os(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ke(t,qe({name:"external-link"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Hs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Ke(t,qe({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function js(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Ke(t,qe({name:"pause"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Us(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Ke(t,qe({name:"pen-line"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Vs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Ke(t,qe({name:"pencil"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function ha(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Ke(t,qe({name:"play"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Bs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ke(t,qe({name:"plus"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Yt(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ke(t,qe({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function qs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Ke(t,qe({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ks(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ke(t,qe({name:"save"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Gs(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Ke(t,qe({name:"settings"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}function Ws(t,r){const a=je(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ke(t,qe({name:"trash-2"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=B(s);Ve(l,r,"default",{}),d(o,s)},$$slots:{default:!0}}))}var Xs=E('<li role="option"> </li>'),Ys=E('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Qs=E('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function it(t,r){Me(r,!0);let a=he(r,"value",3,""),n=he(r,"placeholder",3,"Select..."),o=he(r,"class",3,""),i=he(r,"buttonClass",3,""),s=D(!1),l=D(void 0),u=D(void 0),b=D(""),x=U(()=>{var z;return((z=r.options.find(V=>V.value===a()))==null?void 0:z.label)??n()});function M(z){var V;f(s,!1),(V=r.onchange)==null||V.call(r,z)}function m(){if(!e(l)||!e(u))return;const z=e(l).getBoundingClientRect(),V=e(u).offsetHeight,I=4,H=window.innerHeight-z.bottom-I,q=H<V&&z.top-I>H?z.top-I-V:z.bottom+I,K=Math.min(z.left,window.innerWidth-z.width);f(b,`position:fixed; top:${q}px; left:${K}px; width:${z.width}px; z-index:9999;`)}async function A(){f(s,!e(s)),e(s)&&(await $t(),m())}function F(z){z.key==="Escape"&&f(s,!1)}function v(z){e(s)&&e(l)&&!e(l).contains(z.target)&&e(u)&&!e(u).contains(z.target)&&f(s,!1)}var c=Qs();tt("mousedown",st,v),tt("keydown",st,F),tt("scroll",st,()=>{e(s)&&f(s,!1)});var p=B(c),$=k(p),_=k($),w=k(_,!0);g(_);var y=P(_,2),S=k(y);Ae(S,{get icon(){return vn},size:14}),g(y),g($),rt($,z=>f(l,z),()=>e(l)),g(p);var L=P(p,2);{var T=z=>{Xt(z,{children:(V,I)=>{var H=Ys();Qe(H,21,()=>r.options,O=>O.value,(O,q)=>{var K=Xs();Ce(K,"tabindex",0);var te=k(K,!0);g(K),Q(()=>{Ce(K,"aria-selected",e(q).value===a()),ke(K,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(q).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),re(te,e(q).label)}),se("mousedown",K,N=>{N.stopPropagation(),M(e(q).value)}),d(O,K)}),g(H),rt(H,O=>f(u,O),()=>e(u)),Q(()=>Je(H,e(b))),d(V,H)}})};Y(L,z=>{e(s)&&z(T)})}Q(()=>{ke(p,1,`relative inline-flex ${o()??""}`),ke($,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),Ce($,"aria-expanded",e(s)),re(w,e(x)),ke(y,1,`text-muted shrink-0 transition-transform duration-150 ${e(s)?"rotate-180":""}`)}),se("mousedown",$,z=>{z.stopPropagation(),A()}),d(t,c),Le()}We(["mousedown"]);var Js=Dt('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Zs=E('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),ei=E('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),ti=E('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Bt(t,r){Me(r,!0);let a=he(r,"selected",19,()=>[]),n=he(r,"placeholder",3,"Select..."),o=he(r,"class",3,""),i=D(!1),s=D(void 0),l=D(void 0),u=D(""),b=U(()=>new Set(a())),x=U(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(I=>{var H;return((H=r.options.find(O=>O.value===I))==null?void 0:H.label)??I}).join(", "):`${a().length} selected`);function M(I){var O;const H=new Set(e(b));H.has(I)?H.delete(I):H.add(I),(O=r.onchange)==null||O.call(r,[...H])}function m(){var I;(I=r.onchange)==null||I.call(r,r.options.map(H=>H.value))}function A(){var I;(I=r.onchange)==null||I.call(r,[])}function F(){if(!e(s)||!e(l))return;const I=e(s).getBoundingClientRect(),H=e(l).offsetHeight,O=4,q=window.innerHeight-I.bottom-O,te=q<H&&I.top-O>q?I.top-O-H:I.bottom+O,N=Math.min(I.left,window.innerWidth-I.width);f(u,`position:fixed; top:${te}px; left:${N}px; min-width:${I.width}px; z-index:9999;`)}async function v(){f(i,!e(i)),e(i)&&(await $t(),F())}function c(I){e(i)&&e(s)&&!e(s).contains(I.target)&&e(l)&&!e(l).contains(I.target)&&f(i,!1)}function p(I){I.key==="Escape"&&f(i,!1)}var $=ti();tt("mousedown",st,c),tt("keydown",st,p),tt("scroll",st,()=>{e(i)&&f(i,!1)});var _=B($),w=k(_),y=k(w),S=k(y,!0);g(y);var L=P(y,2),T=k(L);Ae(T,{get icon(){return vn},size:14}),g(L),g(w),rt(w,I=>f(s,I),()=>e(s)),g(_);var z=P(_,2);{var V=I=>{Xt(I,{children:(H,O)=>{var q=ei(),K=k(q),te=k(K),N=P(te,2);g(K);var R=P(K,2);Qe(R,17,()=>r.options,h=>h.value,(h,C)=>{var j=Zs(),Z=k(j),ie=k(Z);{var Pe=ne=>{var pe=Js();d(ne,pe)},X=U(()=>e(b).has(e(C).value));Y(ie,ne=>{e(X)&&ne(Pe)})}g(Z);var J=P(Z,2),ue=k(J,!0);g(J),g(j),Q(ne=>{ke(Z,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${ne??""}`),re(ue,e(C).label)},[()=>e(b).has(e(C).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),se("mousedown",j,ne=>{ne.stopPropagation(),M(e(C).value)}),d(h,j)}),g(q),rt(q,h=>f(l,h),()=>e(l)),Q(()=>Je(q,e(u))),se("mousedown",te,h=>{h.stopPropagation(),m()}),se("mousedown",N,h=>{h.stopPropagation(),A()}),d(H,q)}})};Y(z,I=>{e(i)&&I(V)})}Q(()=>{ke(_,1,`relative inline-flex ${o()??""}`),Ce(w,"aria-expanded",e(i)),re(S,e(x)),ke(L,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),se("mousedown",w,I=>{I.stopPropagation(),v()}),d(t,$),Le()}We(["mousedown"]);const Xr="csauto_token";let pa=D(oe(localStorage.getItem(Xr)??""));function ma(){return e(pa)}function _a(t){f(pa,t,!0),t?localStorage.setItem(Xr,t):localStorage.removeItem(Xr)}let br=null;async function gn(t,r={}){const a=new Headers(r.headers),n=ma();n&&a.set("X-CSAUTO-TOKEN",n);const o=await fetch(t,{...r,headers:a});if(o.status===401){br||(br=fn("API token required:",n,"Authentication"));const i=await br;return br=null,i===null?o:(_a(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return o}async function ct(t){const r=await gn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Fr(t){const r=await gn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Et(t,r){const a=await gn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function zr(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function ri(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function Fn(t){return ct(`/api/perf?${zr(t)}`)}function ni(){return ct("/api/app_config")}function ai(t){return ct(`/api/residual_columns?${zr(t)}`).then(r=>r.columns??[])}function oi(t,r,a={}){const n=new URLSearchParams;return t.forEach(o=>n.append("case",o)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Fr(`/api/residuals_svg?${n}`)}function ba(t){return ct(`/api/restart_origin?${zr(t)}`)}function si(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function ii(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Fr(`/api/tail?${n}`)}function li(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function ci(t){return ct(`/api/resu_dirs?${zr(t)}`).then(r=>r.dirs??[])}function Yr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function ui(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function di(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(o=>n.append("column",o)),ct(`/api/probe_position?${n}`)}function fi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Fr(`/api/probe_svg?${r}`)}function vi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Fr(`/api/compare_runs?${r}`)}function zn(t){return Et("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function gi(t){return Et("/api/kill_case",{cases:t}).then(()=>{})}function xr(t){return Et("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function hi(t){return Et("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function pi(t,r){return Et("/api/case_note",{case:t,note:r}).then(()=>{})}function mi(t,r){return Et("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function _i(t){return Et("/api/open_gui",{case:t}).then(()=>{})}function bi(){return ct("/api/settings/telemetry")}function xi(t){return Et("/api/settings/telemetry",{enabled:t})}var yi=E("<!> <!>",1),wi=E('<input type="number" min="0" step="1" class="w-[80px]"/>'),ki=E('<span class="text-xs text-muted">Loading...</span>'),Ci=E('<span class="text-xs text-muted">No folders found</span>'),Si=E('<div class="mb-3"><!></div>'),$i=E('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Pi(t,r){Me(r,!0);const a=fs();let n=D("keep_latest"),o=D(oe(a.keepLast)),i=D(oe([])),s=D(oe([])),l=D(!0),u=U(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const b=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let x=U(()=>e(i).map(m=>({value:m,label:m})));Xn(async()=>{try{f(i,await ci(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function M(){if(e(u)&&e(s).length===0){await Xe("Please select at least one RESU folder.","Missing selection");return}const m={action:e(n)};e(n)==="keep_latest"?(m.keepLast=e(o),vs({keepLast:e(o)})):e(n)==="delete_all"?m.keepLast=0:e(n)==="keep_folder"?m.keepResu=e(s):e(n)==="delete_folder"&&(m.deleteResu=e(s)),ot(m)}{const m=v=>{var c=yi(),p=B(c);$e(p,{variant:"secondary",onclick:()=>ot(null),children:(_,w)=>{xe();var y=Be("Cancel");d(_,y)},$$slots:{default:!0}});var $=P(p,2);$e($,{variant:"primary",onclick:M,children:(_,w)=>{xe();var y=Be("Clean");d(_,y)},$$slots:{default:!0}}),d(v,c)};let A=U(()=>r.cases.length),F=U(()=>r.cases.length>1?"s":"");dr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(A)??""} case${e(F)??""} selected`},footer:m,children:(v,c)=>{var p=$i(),$=B(p),_=k($);Re(_,{text:"Action",children:(T,z)=>{it(T,{class:"w-[200px]",get options(){return b},get value(){return e(n)},onchange:V=>f(n,V,!0)})}});var w=P(_,2);{var y=T=>{Re(T,{text:"Keep last",children:(z,V)=>{var I=wi();Ye(I),et(I,()=>e(o),H=>f(o,H)),d(z,I)}})};Y(w,T=>{e(n)==="keep_latest"&&T(y)})}g($);var S=P($,2);{var L=T=>{var z=Si(),V=k(z);Re(V,{text:"RESU folders",children:(I,H)=>{var O=be(),q=B(O);{var K=R=>{var h=ki();d(R,h)},te=R=>{var h=Ci();d(R,h)},N=R=>{Bt(R,{class:"w-full",get options(){return e(x)},get selected(){return e(s)},onchange:h=>f(s,h,!0),placeholder:"Select folders..."})};Y(q,R=>{e(l)?R(K):e(i).length===0?R(te,1):R(N,-1)})}d(I,O)}}),g(z),d(T,z)};Y(S,T=>{e(u)&&T(L)})}d(v,p)},$$slots:{footer:!0,default:!0}})}Le()}function Ei(t,r){Me(r,!0);let a=U(Ko);var n=be(),o=B(n);{var i=b=>{bs(b,{get cases(){return e(a).props.cases}})},s=b=>{Ps(b,{get cases(){return e(a).props.cases}})},l=b=>{Pi(b,{get cases(){return e(a).props.cases}})},u=b=>{os(b,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Y(o,b=>{e(a).type==="run"?b(i):e(a).type==="restart"?b(s,1):e(a).type==="clean"?b(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&b(u,3)})}d(t,n),Le()}let lr=D(oe([])),Ri=0;function Ni(){return e(lr)}function yr(t,r="success",a=3500){const n=++Ri;f(lr,[...e(lr),{id:n,message:t,variant:r}],!0),setTimeout(()=>xa(n),a)}function xa(t){f(lr,e(lr).filter(r=>r.id!==t),!0)}var Mi=E('<div role="status"> </div>'),Li=E('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Ai(t,r){Me(r,!0);let a=U(Ni);Xt(t,{children:(n,o)=>{var i=Li();Qe(i,21,()=>e(a),s=>s.id,(s,l)=>{var u=Mi(),b=k(u,!0);g(u),Q(()=>{ke(u,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),re(b,e(l).message)}),se("click",u,()=>xa(e(l).id)),d(s,u)}),g(i),d(n,i)}}),Le()}We(["click"]);var Ti=Dt('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Fi=Dt('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),zi=E('<span role="checkbox"><!></span>'),Di=E("<span> </span><!>",1),Ii=E("<!><span> </span>",1),Oi=E('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function zt(t,r){Me(r,!0);const a=v=>{var c=zi(),p=k(c);{var $=w=>{var y=Ti();Q(()=>Je(y,`width: ${s()-4}px; height: ${s()-4}px;`)),d(w,y)},_=w=>{var y=Fi();Q(()=>Je(y,`width: ${s()-4}px; height: ${s()-4}px;`)),d(w,y)};Y(p,w=>{n()&&!o()?w($):o()&&w(_,1)})}g(c),Q(()=>{ke(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||o()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Je(c,`width: ${s()??""}px; height: ${s()??""}px;`),Ce(c,"aria-checked",o()?"mixed":n()),Ce(c,"aria-disabled",i()),Ce(c,"tabindex",i()?-1:0)}),se("click",c,b),se("keydown",c,x),d(v,c)};let n=he(r,"checked",3,!1),o=he(r,"indeterminate",3,!1),i=he(r,"disabled",3,!1),s=he(r,"size",3,16),l=he(r,"label",3,""),u=he(r,"labelFirst",3,!1);function b(v){var p;if(v.stopPropagation(),i())return;const c=o()?!0:!n();(p=r.onchange)==null||p.call(r,c)}function x(v){(v.key===" "||v.key==="Enter")&&(v.preventDefault(),v.stopPropagation(),b(v))}var M=be(),m=B(M);{var A=v=>{var c=Oi(),p=k(c);{var $=w=>{var y=Di(),S=B(y),L=k(S,!0);g(S);var T=P(S);a(T),Q(()=>re(L,l())),d(w,y)},_=w=>{var y=Ii(),S=B(y);a(S);var L=P(S),T=k(L,!0);g(L),Q(()=>re(T,l())),d(w,y)};Y(p,w=>{u()?w($):w(_,-1)})}g(c),se("click",c,b),se("keydown",c,x),d(v,c)},F=v=>{a(v)};Y(m,v=>{l()?v(A):v(F,-1)})}d(t,M),Le()}We(["click","keydown"]);function hn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Dr(t,r){localStorage.setItem(t,JSON.stringify(r))}const Qr=new Map;function vr(t,r,a){vt(t),Qr.set(t,setInterval(r,a))}function vt(t){const r=Qr.get(t);r!==void 0&&(clearInterval(r),Qr.delete(t))}const At={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Hi=["status","plot","probe","tail","errors"],qr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ar=hn("csauto_refresh_rates",{});let _t=D(oe({status:ar.status??At.status,tail:ar.tail??At.tail,plot:ar.plot??At.plot,probe:ar.probe??At.probe,errors:ar.errors??At.errors}));function ji(){return e(_t)}function Ui(t,r){f(_t,{...e(_t),[t]:r},!0),Dr("csauto_refresh_rates",e(_t))}function Vi(){return e(_t).status}function Dn(){return e(_t).tail}function In(){return e(_t).plot}function Bi(){return e(_t).probe}function On(){return e(_t).errors}const Jr=new Set;function gr(t){return Jr.add(t),()=>Jr.delete(t)}function qi(){Jr.forEach(t=>t())}const Zr=hn("csauto_autorefresh_enabled",{});function Qt(t){return Zr[t]??!0}function Jt(t,r){Zr[t]=r,Dr("csauto_autorefresh_enabled",Zr)}var Ki=E("<!> <!>",1),Gi=E('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),Wi=E('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),Xi=E('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function Yi(t,r){Me(r,!0);let a=D(oe(ma())),n=D(oe({...ji()})),o=D(!0),i=D(!1);Ne(()=>{bi().then(b=>{f(o,b.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function s(b){const{min:x}=qr[b];let M=e(n)[b];(typeof M!="number"||isNaN(M))&&(M=At[b]),f(n,{...e(n),[b]:Math.max(x,Math.round(M))},!0)}function l(b,x){const M=x.target,m=M.value.replace(/[^0-9]/g,""),A=parseInt(m,10);isNaN(A)?m===""&&f(n,{...e(n),[b]:qr[b].min},!0):f(n,{...e(n),[b]:A},!0),M.value=String(e(n)[b])}function u(){_a(e(a));for(const b of Object.keys(e(n)))s(b),Ui(b,e(n)[b]);e(i)&&xi(e(o)).catch(()=>{}),r.onClose()}dr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:u,maxWidth:"400px",portal:!0,footer:x=>{var M=Ki(),m=B(M);$e(m,{variant:"secondary",get onclick(){return r.onClose},children:(F,v)=>{xe();var c=Be("Cancel");d(F,c)},$$slots:{default:!0}});var A=P(m,2);$e(A,{variant:"primary",onclick:u,children:(F,v)=>{xe();var c=Be("Save");d(F,c)},$$slots:{default:!0}}),d(x,M)},children:(x,M)=>{var m=Xi(),A=B(m),F=P(k(A),2);Ye(F),g(A);var v=P(A,2),c=k(v),p=P(k(c),2);g(c);var $=P(c,2);Qe($,20,()=>Hi,y=>y,(y,S)=>{const L=U(()=>qr[S]);var T=Gi(),z=k(T),V=k(z),I=k(V,!0);g(V);var H=P(V,2),O=k(H);g(H),g(z);var q=P(z,2),K=k(q);Ye(K),xe(2),g(q),g(T),Q(()=>{re(I,e(L).label),re(O,`min ${e(L).min??""}ms`),un(K,e(n)[S])}),se("input",K,te=>l(S,te)),tt("blur",K,()=>s(S)),d(y,T)}),g($),g(v);var _=P(v,2);{var w=y=>{var S=Wi(),L=P(k(S),2);zt(L,{get checked(){return e(o)},onchange:T=>f(o,T,!0),label:"Send anonymous usage statistics"}),g(S),d(y,S)};Y(_,y=>{e(i)&&y(w)})}et(F,()=>e(a),y=>f(a,y)),se("click",p,()=>f(n,{...At},!0)),d(x,m)},$$slots:{footer:!0,default:!0}}),Le()}We(["click","input"]);const Qi=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href;var Ji=E('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><img alt="CODE_SATURNE" class="h-7 w-auto"/></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function Zi(t,r){let a=U(()=>r.shownCases!==r.totalCases),n=D(!1);var o=Ji(),i=B(o),s=k(i),l=k(s);g(s);var u=P(s,2),b=k(u),x=k(b),M=k(x);{var m=K=>{var te=Be();Q(()=>re(te,`${r.shownCases??""}/`)),d(K,te)};Y(M,K=>{e(a)&&K(m)})}var A=P(M,1,!0);g(x);var F=P(x,2),v=k(F,!0);g(F),g(b);var c=P(b,2),p=k(c),$=k(p);{var _=K=>{var te=Be();Q(()=>re(te,`${r.shownRunning??""}/`)),d(K,te)};Y($,K=>{e(a)&&K(_)})}var w=P($,1,!0);g(p),xe(2),g(c);var y=P(c,2),S=k(y),L=k(S);{var T=K=>{var te=Be();Q(()=>re(te,`${r.shownConverged??""}/`)),d(K,te)};Y(L,K=>{e(a)&&K(T)})}var z=P(L,1,!0);g(S),xe(2),g(y),g(u);var V=P(u,2),I=k(V),H=k(I);Ae(H,{get icon(){return Gs},size:18}),g(I),g(V),g(i);var O=P(i,2);{var q=K=>{Yi(K,{onClose:()=>f(n,!1)})};Y(O,K=>{e(n)&&K(q)})}Q(()=>{Ce(l,"src",Qi),re(A,r.totalCases),re(v,r.totalCases===1?"case":"cases"),re(w,r.totalRunning),re(z,r.totalConverged)}),se("click",I,()=>f(n,!0)),d(t,o)}We(["click"]);const el=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var tl=E('<div class="text-xs text-muted font-normal"> </div>'),rl=E('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),nl=E("<div><!> <!></div>"),al=E('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),ol=E('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),sl=E('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function It(t,r){let a=he(r,"eyebrow",3,""),n=he(r,"title",3,""),o=he(r,"wide",3,!1);var i=sl(),s=P(k(i),2);{var l=b=>{var x=ol(),M=k(x);{var m=c=>{var p=be(),$=B(p);ft($,()=>r.titleSlot),d(c,p)},A=c=>{var p=nl(),$=k(p);{var _=S=>{var L=tl(),T=k(L,!0);g(L),Q(()=>re(T,a())),d(S,L)};Y($,S=>{a()&&S(_)})}var w=P($,2);{var y=S=>{var L=rl(),T=k(L,!0);g(L),Q(()=>re(T,n())),d(S,L)};Y(w,S=>{n()&&S(y)})}g(p),d(c,p)};Y(M,c=>{r.titleSlot?c(m):c(A,-1)})}var F=P(M,2);{var v=c=>{var p=al(),$=k(p);ft($,()=>r.actions),g(p),d(c,p)};Y(F,c=>{r.actions&&c(v)})}g(x),d(b,x)};Y(s,b=>{(a()||n()||r.titleSlot||r.actions)&&b(l)})}var u=P(s,2);ft(u,()=>r.children),g(i),Q(()=>{ke(i,1,`${o()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),Ce(i,"id",r.id)}),d(t,i)}function Zt(t,r){Me(r,!0);let a=he(r,"checked",15,!0);Ne(()=>{a()?vr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),cr(()=>vt(r.name)),zt(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Le()}var il=E("<!> ",1),ll=E('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),cl=E('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),ul=E('<span class="inline-flex"><!></span> <!>',1);function dl(t,r){Me(r,!0);let a=he(r,"label",3,"More"),n=D(!1),o=D(void 0),i=D(void 0),s=D("");function l(){if(!e(o)||!e(i))return;const c=e(o).getBoundingClientRect(),p=e(i).offsetHeight,$=4,_=window.innerHeight-c.bottom-$,y=_<p&&c.top-$>_?c.top-$-p:c.bottom+$,S=Math.min(c.left,window.innerWidth-180);f(s,`position:fixed; top:${y}px; left:${S}px; min-width:170px; z-index:9999;`)}async function u(){f(n,!e(n)),e(n)&&(await $t(),l())}function b(c){c.disabled||(f(n,!1),c.onClick())}function x(c){e(n)&&e(o)&&!e(o).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var M=ul();tt("mousedown",st,x),tt("keydown",st,c=>{c.key==="Escape"&&f(n,!1)}),tt("scroll",st,()=>{e(n)&&f(n,!1)});var m=B(M),A=k(m);$e(A,{variant:"secondary",size:"sm",onclick:u,children:(c,p)=>{var $=il(),_=B($);Ae(_,{get icon(){return Is}});var w=P(_);Q(()=>re(w,` ${a()??""}`)),d(c,$)},$$slots:{default:!0}}),g(m),rt(m,c=>f(o,c),()=>e(o));var F=P(m,2);{var v=c=>{Xt(c,{children:(p,$)=>{var _=cl();Qe(_,21,()=>r.items,w=>w.label,(w,y)=>{var S=ll(),L=k(S),T=k(L);Ae(T,{get icon(){return e(y).icon},size:14});var z=P(T);g(L),g(S),Q(()=>{L.disabled=e(y).disabled,Ce(L,"aria-disabled",e(y).disabled),ke(L,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(y).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),re(z,` ${e(y).label??""}`)}),se("mousedown",L,V=>{V.stopPropagation(),b(e(y))}),d(w,S)}),g(_),rt(_,w=>f(i,w),()=>e(i)),Q(()=>Je(_,e(s))),d(p,_)}})};Y(F,c=>{e(n)&&c(v)})}d(t,M),Le()}We(["mousedown"]);const Tt=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"}];let qt=D(oe([])),Nr=D(oe([])),ht=D(oe(new Set)),hr=D(""),pn=D(""),Pt=D(oe([])),at=D(oe([])),Kt=D(""),ya=D(!0),fl=D(!0),Ut=D(oe(hn("csauto_status_views",{}))),mn=D(oe(localStorage.getItem("csauto_status_view_selected")??""));function _n(){return e(qt)}function bn(){return e(Nr)}function Ht(){return e(ht)}function Hn(){return e(hr)}function en(){return e(pn)}function vl(){return e(Pt)}function gl(){return e(Pt).filter(t=>e(Nr).includes(t))}function hl(){return e(Pt).filter(t=>Tt.some(r=>r.key===t))}function pl(){return e(at)}function ml(){return e(Kt)}function _l(){return e(ya)}function jn(){return e(Ut)}function bl(){return e(mn)}function xl(t){f(qt,t,!0)}function yl(t){const r=e(Nr).length===0&&t.length>0;f(Nr,t,!0),r&&e(Pt).length===0&&f(Pt,[...t,...Tt.map(a=>a.key)],!0)}function wl(t){f(hr,t,!0)}function Un(t){f(Pt,t,!0)}function kl(t){f(Kt,t,!0)}function Cl(t){f(ya,t,!0)}function Sl(t){f(fl,t,!0)}function xn(t){f(mn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function tn(t){const r=new Set(e(ht));r.has(t)?r.delete(t):r.add(t),f(ht,r,!0),f(hr,t,!0),f(pn,t,!0)}function wa(t){f(ht,new Set([t]),!0),f(hr,t,!0),f(pn,t,!0)}function rn(t,r,a){const n=a.indexOf(t),o=a.indexOf(r);if(n<0||o<0)return;const[i,s]=n<o?[n,o]:[o,n],l=new Set(e(ht));for(let u=i;u<=s;u++)l.add(a[u]);f(ht,l,!0),f(hr,r,!0)}function Vn(t){f(ht,new Set(t),!0)}function Bn(){f(ht,new Set,!0)}function $l(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function ka(){if(!e(Kt).trim())return e(qt);const t=e(Kt).toLowerCase().trim().split(/\s+/);return e(qt).filter(r=>{const a=$l(r);return t.every(n=>a.includes(n))})}function Pl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function qn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Pl(a):""}function El(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Ca(){const t=ka();return e(at).length===0?t:[...t].sort((r,a)=>{for(const n of e(at)){const o=qn(r,n.key),i=qn(a,n.key),s=El(o,i);if(s!==0)return n.dir==="asc"?s:-s}return 0})}function $r(){return Ca().map(t=>t.case_id)}function Rl(t,r){const a=e(at).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(at)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(at,n,!0)}else f(at,[...e(at),{key:t,dir:"asc"}],!0);else a>=0&&e(at).length===1?f(at,[{key:t,dir:e(at)[0].dir==="asc"?"desc":"asc"}],!0):f(at,[{key:t,dir:"asc"}],!0)}function Nl(){return{visibleColumns:[...e(Pt)],search:e(Kt),sorts:e(at).map(t=>({...t}))}}function Ml(t){f(Pt,[...t.visibleColumns],!0),f(Kt,t.search,!0),f(at,t.sorts.map(r=>({...r})),!0)}function Ll(t){f(Ut,{...e(Ut),[t]:Nl()},!0),Dr("csauto_status_views",e(Ut)),xn(t)}function Al(t){const r={...e(Ut)};delete r[t],f(Ut,r,!0),Dr("csauto_status_views",r),e(mn)===t&&xn("")}function wr(){const t=new Set;for(const r of e(qt))e(ht).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Kn(){for(const t of e(qt))if(e(ht).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function Tl(t,r){const a=r.length,n=t.length,o=r.filter(u=>u.status==="RUNNING").length,i=t.filter(u=>u.status==="RUNNING").length,s=r.filter(u=>u.convergence==="converged").length,l=t.filter(u=>u.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:o,shownRunning:i,totalConverged:s,shownConverged:l}}var Fl=E('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),zl=E('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function Dl(t,r){Me(r,!0);let a=he(r,"initialName",3,""),n=U(bn),o=D(oe(a())),i=D(oe(new Set(r.initialColumns??[...e(n),...Tt.map(O=>O.key)])));function s(O){const q=new Set(e(i));q.has(O)?q.delete(O):q.add(O),f(i,q,!0)}function l(O,q){const K=new Set(e(i));O.forEach(te=>q?K.add(te):K.delete(te)),f(i,K,!0)}function u(){const O=e(o).trim();O&&r.onSave(O,[...e(i)])}function b(O){O.key==="Escape"&&r.onCancel()}function x(O){O.target.dataset.backdrop!==void 0&&r.onCancel()}let M=D(void 0);Ne(()=>{var O,q;(O=e(M))==null||O.focus(),(q=e(M))==null||q.select()});var m=zl(),A=k(m),F=k(A),v=k(F,!0);g(F);var c=P(F,2),p=P(k(c),2);Ye(p),rt(p,O=>f(M,O),()=>e(M)),g(c);var $=P(c,2);{var _=O=>{var q=Fl(),K=k(q),te=P(k(K),2),N=k(te),R=P(N,2);g(te),g(K);var h=P(K,2);Qe(h,20,()=>e(n),C=>C,(C,j)=>{{let Z=U(()=>e(i).has(j));zt(C,{get checked(){return e(Z)},onchange:()=>s(j),size:14,get label(){return j}})}}),g(h),g(q),se("click",N,()=>l(e(n),!0)),se("click",R,()=>l(e(n),!1)),d(O,q)};Y($,O=>{e(n).length>0&&O(_)})}var w=P($,2),y=k(w),S=P(k(y),2),L=k(S),T=P(L,2);g(S),g(y);var z=P(y,2);Qe(z,21,()=>Tt,O=>O.key,(O,q)=>{{let K=U(()=>e(i).has(e(q).key));zt(O,{get checked(){return e(K)},onchange:()=>s(e(q).key),size:14,get label(){return e(q).label}})}}),g(z),g(w);var V=P(w,2),I=k(V);$e(I,{variant:"secondary",get onclick(){return r.onCancel},children:(O,q)=>{xe();var K=Be("Cancel");d(O,K)},$$slots:{default:!0}});var H=P(I,2);{let O=U(()=>!e(o).trim());$e(H,{variant:"primary",onclick:u,get disabled(){return e(O)},children:(q,K)=>{xe();var te=Be("Save");d(q,te)},$$slots:{default:!0}})}g(V),g(A),g(m),Q(()=>re(v,r.mode==="create"?"New view":"Edit view")),se("keydown",m,b),se("click",m,x),et(p,()=>e(o),O=>f(o,O)),se("click",L,()=>l(Tt.map(O=>O.key),!0)),se("click",T,()=>l(Tt.map(O=>O.key),!1)),d(t,m),Le()}We(["keydown","click"]);var Il=E('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function Ol(t,r){Me(r,!0);let a=U(()=>Object.keys(jn())),n=D(oe(bl())),o=D(!1),i=D("create"),s=U(()=>[{value:"",label:"All columns"},...e(a).map(y=>({value:y,label:y}))]);function l(y){if(f(n,y,!0),xn(y),y==="")Un([...bn(),...Tt.map(S=>S.key)]);else{const S=jn();S[y]&&Ml(S[y])}}function u(){f(i,"edit"),f(o,!0)}function b(){f(i,"create"),f(o,!0)}function x(y,S){Un(S),e(i)==="edit"&&e(n)&&y!==e(n)&&Al(e(n)),Ll(y),f(n,y,!0),f(o,!1)}function M(){f(o,!1)}var m=Il(),A=B(m),F=k(A);it(F,{class:"w-[140px]",get options(){return e(s)},get value(){return e(n)},onchange:l});var v=P(F,2),c=k(v);Ae(c,{get icon(){return Vs},size:14}),g(v);var p=P(v,2),$=k(p);Ae($,{get icon(){return Bs},size:14}),g(p),g(A);var _=P(A,2);{var w=y=>{Xt(y,{children:(S,L)=>{{let T=U(()=>e(i)==="edit"?e(n):""),z=U(vl);Dl(S,{get mode(){return e(i)},get initialName(){return e(T)},get initialColumns(){return e(z)},onSave:x,onCancel:M})}}})};Y(_,y=>{e(o)&&y(w)})}se("click",v,u),se("click",p,b),d(t,m),Le()}We(["click"]);var Hl=E('<th><div class="flex items-center justify-center h-full"><!></div></th>'),jl=E("<th></th>"),Ul=E('<span style="margin-left: 4px; font-size: 9px;"> </span>'),Vl=E('<th role="button" tabindex="0"> <!></th>'),Bl=E('<td><div class="flex items-center justify-center h-full"><!></div></td>'),ql=E("<td><span> </span></td>"),Kl=E('<span class="text-muted"><!></span>'),Gl=E('<td role="button" tabindex="0"><!></td>'),Wl=E("<!> Open GUI",1),Xl=E("<td><!></td>"),Yl=E("<td> </td>"),Ql=E("<tr></tr>"),Jl=E('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function Zl(t,r){Me(r,!0);let a=U(()=>r.rows.length>0&&r.rows.every(N=>e(b).has(N.case_id))),n=U(()=>r.rows.some(N=>e(b).has(N.case_id))),o=U(()=>e(n)&&!e(a)),i=U(gl),s=U(()=>new Set(hl())),l=U(pl),u=U(_l),b=U(Ht),x=U(()=>{const N=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(s).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],R=e(i).map(Z=>({key:Z,label:Z,kind:"doe"})),C=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"}].filter(Z=>e(s).has(Z.key)),j=[{key:"_actions",label:"",kind:"meta",sticky:"right"}];return[...N,...R,...C,...j]});function M(N){const R=e(l).findIndex(C=>C.key===N);if(R<0)return"";const h=e(l)[R].dir==="asc"?"▲":"▼";return e(l).length>1?`${h}${R+1}`:h}function m(N,R){N!=="_actions"&&Rl(N,R.ctrlKey||R.metaKey)}function A(N,R){R.shiftKey?rn(en()||N,N,$r()):R.ctrlKey||R.metaKey?tn(N):wa(N)}function F(N,R){var C;const h=((C=N.status)==null?void 0:C.toUpperCase())??"";h!=="DONE"&&h!=="FAILED"||(R.preventDefault(),r.onContextMenu(N.case_id,R.clientX,R.clientY,N.convergence??""))}async function v(N){const R=N.note??"",h=await fn("Case note:",R,`Note — ${N.case_id}`,"",!0);if(h!==null)try{await pi(N.case_id,h)}catch(C){await Xe(`Failed to set note: ${C instanceof Error?C.message:C}`,"Error")}}async function c(N){try{await _i(N)}catch(R){await Xe(`Failed to open GUI: ${R instanceof Error?R.message:R}`,"Error")}}function p(N,R){const h=(N==null?void 0:N.toUpperCase())??"";return(h==="DONE"||h==="FAILED")&&R==="converged"?"CONVERGED":(h==="DONE"||h==="FAILED")&&R==="not_converged"?"NOT CONVERGED":h}function $(N,R){const h=(N==null?void 0:N.toUpperCase())??"";return(h==="DONE"||h==="FAILED")&&R==="converged"?"status-converged":(h==="DONE"||h==="FAILED")&&R==="not_converged"?"status-not-converged":h==="RUNNING"?"status-running":h==="DONE"?"status-done":h==="FAILED"?"status-failed":h==="PREPARED"?"status-prepared":"status-unknown"}function _(N){return e(b).has(N.case_id)?"row-selected":""}function w(N,R){var h;return R.key==="case_id"?N.case_id:R.key==="nprocs"?N.nprocs!=null?String(N.nprocs):"":R.key==="nt"?N.nt!=null?String(N.nt):"":R.key==="last_iter"?N.last_iter!=null?String(N.last_iter):"":R.key==="duration"?N.duration??"":R.key==="last_mod"?y(N.last_mod):R.key==="resu_size_mb"?N.resu_size_mb!=null?String(N.resu_size_mb):"":R.kind==="doe"?((h=N.doe)==null?void 0:h[R.key])!=null&&String(N.doe[R.key])!==""?String(N.doe[R.key]):"—":""}function y(N){if(!N)return"";try{const R=new Date(N),h=new Date,C=R.toDateString()===h.toDateString(),j=new Date(h);j.setDate(j.getDate()-1);const Z=R.toDateString()===j.toDateString(),ie=R.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return C?`Today ${ie}`:Z?`Yesterday ${ie}`:R.toLocaleDateString([],{month:"short",day:"numeric"})+` ${ie}`}catch{return N}}let S=D(oe({})),L=D(void 0);Ne(()=>{e(u),e(x),r.rows,!(!e(L)||!e(u))&&$t().then(()=>{if(!e(L))return;const N=Array.from(e(L).querySelectorAll("thead th.sticky-left")),R={};let h=0;N.forEach(C=>{const j=C.dataset.colKey??"";R[j]=h,h+=C.getBoundingClientRect().width}),f(S,R,!0)})});function T(N,R,h){const C=h&&N.key!=="_select"&&N.key!=="_actions"?["status-sortable"]:[];if(!h&&N.key==="case_id"&&C.push("case-id"),N.kind==="doe"&&C.push("status-col-doe"),!h&&N.key==="note"&&C.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(u)&&N.sticky==="left"&&C.push("sticky-left"),e(u)&&N.sticky==="right"&&C.push("sticky-right"),e(u)&&N.sticky==="left"){const j=e(x)[R+1];(!j||j.sticky!=="left")&&C.push("sticky-divider")}if(e(u)&&N.sticky==="right"){const j=e(x)[R-1];(!j||j.sticky!=="right")&&C.push("sticky-divider")}return C.join(" ")}function z(N,R){return T(N,R,!0)}function V(N,R){return T(N,R,!1)}function I(N){return!e(u)||!N.sticky?"":N.sticky==="right"?"position:sticky;right:0;":N.sticky==="left"&&N.key in e(S)?`position:sticky;left:${e(S)[N.key]}px;`:""}var H=Jl(),O=k(H),q=k(O),K=k(q);Qe(K,23,()=>e(x),N=>N.key,(N,R,h)=>{var C=be(),j=B(C);{var Z=X=>{var J=Hl(),ue=k(J),ne=k(ue);zt(ne,{get checked(){return e(a)},get indeterminate(){return e(o)},get onchange(){return r.onToggleAll},size:14}),g(ue),g(J),Q((pe,ye)=>{ke(J,1,`${pe??""} !px-2.5 !py-0 w-9`),Ce(J,"data-col-key",e(R).key),Je(J,ye)},[()=>z(e(R),e(h)),()=>I(e(R))]),d(X,J)},ie=X=>{var J=jl();Q((ue,ne)=>{ke(J,1,ue),Ce(J,"data-col-key",e(R).key),Je(J,ne)},[()=>dt(z(e(R),e(h))),()=>I(e(R))]),d(X,J)},Pe=X=>{var J=Vl(),ue=k(J),ne=P(ue);{var pe=ee=>{var de=Ul(),we=k(de,!0);g(de),Q(Ee=>re(we,Ee),[()=>M(e(R).key)]),d(ee,de)},ye=U(()=>M(e(R).key));Y(ne,ee=>{e(ye)&&ee(pe)})}g(J),Q((ee,de)=>{ke(J,1,ee),Ce(J,"data-col-key",e(R).key),Je(J,de),re(ue,`${e(R).label??""} `)},[()=>dt(z(e(R),e(h))),()=>I(e(R))]),se("click",J,ee=>m(e(R).key,ee)),se("keydown",J,ee=>{(ee.key==="Enter"||ee.key===" ")&&(ee.preventDefault(),m(e(R).key,ee))}),d(X,J)};Y(j,X=>{e(R).key==="_select"?X(Z):e(R).key==="_actions"?X(ie,1):X(Pe,-1)})}d(N,C)}),g(K),g(q);var te=P(q);Qe(te,21,()=>r.rows,N=>N.case_id,(N,R)=>{var h=Ql();Qe(h,23,()=>e(x),C=>C.key,(C,j,Z)=>{var ie=be(),Pe=B(ie);{var X=ye=>{var ee=Bl(),de=k(ee),we=k(de);{let Ee=U(()=>e(b).has(e(R).case_id));zt(we,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e(R).case_id),size:14})}g(de),g(ee),Q((Ee,ge)=>{ke(ee,1,`${Ee??""} !px-2.5 !py-0 w-9`),Ce(ee,"data-col-key",e(j).key),Je(ee,ge)},[()=>V(e(j),e(Z)),()=>I(e(j))]),d(ye,ee)},J=ye=>{var ee=ql(),de=k(ee),we=k(de,!0);g(de),g(ee),Q((Ee,ge,ze,me)=>{ke(ee,1,Ee),Ce(ee,"data-col-key",e(j).key),Je(ee,ge),ke(de,1,`status-pill ${ze??""}`),re(we,me)},[()=>dt(V(e(j),e(Z))),()=>I(e(j)),()=>$(e(R).status,e(R).convergence),()=>p(e(R).status,e(R).convergence)]),d(ye,ee)},ue=ye=>{var ee=Gl(),de=k(ee);{var we=ge=>{var ze=Be();Q(()=>re(ze,e(R).note)),d(ge,ze)},Ee=ge=>{var ze=Kl(),me=k(ze);Ae(me,{get icon(){return Us},size:12}),g(ze),d(ge,ze)};Y(de,ge=>{e(R).note?ge(we):ge(Ee,-1)})}g(ee),Q((ge,ze)=>{ke(ee,1,ge),Ce(ee,"data-col-key",e(j).key),Je(ee,ze),Ce(ee,"title",e(R).note||"Add note")},[()=>dt(V(e(j),e(Z))),()=>I(e(j))]),se("click",ee,ge=>{ge.stopPropagation(),v(e(R))}),se("keydown",ee,ge=>{(ge.key==="Enter"||ge.key===" ")&&(ge.preventDefault(),ge.stopPropagation(),v(e(R)))}),d(ye,ee)},ne=ye=>{var ee=Xl(),de=k(ee);$e(de,{variant:"primary",size:"sm",onclick:we=>{we.stopPropagation(),c(e(R).case_id)},children:(we,Ee)=>{var ge=Wl(),ze=B(ge);Ae(ze,{get icon(){return Os},size:12}),xe(),d(we,ge)},$$slots:{default:!0}}),g(ee),Q((we,Ee)=>{ke(ee,1,we),Ce(ee,"data-col-key",e(j).key),Je(ee,Ee)},[()=>dt(V(e(j),e(Z))),()=>I(e(j))]),d(ye,ee)},pe=ye=>{var ee=Yl(),de=k(ee,!0);g(ee),Q((we,Ee,ge)=>{ke(ee,1,we),Ce(ee,"data-col-key",e(j).key),Je(ee,Ee),re(de,ge)},[()=>dt(V(e(j),e(Z))),()=>I(e(j)),()=>w(e(R),e(j))]),d(ye,ee)};Y(Pe,ye=>{e(j).key==="_select"?ye(X):e(j).key==="status"?ye(J,1):e(j).key==="note"?ye(ue,2):e(j).key==="_actions"?ye(ne,3):ye(pe,-1)})}d(C,ie)}),g(h),Q(C=>ke(h,1,C),[()=>dt(_(e(R)))]),se("click",h,C=>A(e(R).case_id,C)),se("contextmenu",h,C=>F(e(R),C)),d(N,h)}),g(te),g(O),rt(O,N=>f(L,N),()=>e(L)),g(H),Q(()=>ke(H,1,`table-wrap ${e(u)?"sticky-enabled":""}`)),d(t,H),Le()}We(["click","keydown","contextmenu"]);var ec=E('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function tc(t,r){Me(r,!0);let a=U(()=>{const m=Math.min(r.x,window.innerWidth-180),A=Math.min(r.y,window.innerHeight-120);return`left: ${m}px; top: ${A}px;`});async function n(m){try{for(const A of r.cases)await mi(A,m)}catch(A){console.error("Failed to set convergence:",A)}r.onClose()}const o=r.cases.length>1?` (${r.cases.length})`:"";var i=ec();tt("keydown",st,m=>{m.key==="Escape"&&r.onClose()});var s=k(i),l=k(s);g(s);var u=P(s,2),b=k(u);g(u);var x=P(u,2),M=k(x);g(x),g(i),Q(()=>{Je(i,e(a)),ke(s,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),re(l,`Mark Converged${o}`),ke(u,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),re(b,`Mark Not Converged${o}`),ke(x,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),re(M,`Clear Mark${o}`)}),se("click",s,()=>n("converged")),se("click",u,()=>n("not_converged")),se("click",x,()=>n("")),d(t,i),Le()}We(["click"]);var rc=E("<!> Refresh",1),nc=E("<!> <!>",1),ac=E("<!> Run",1),oc=E("<!> Restart",1),sc=E("<!> Stop",1),ic=E("<!> Kill",1),lc=E("<!> Clean",1),cc=E('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),uc=E('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function dc(t,r){Me(r,!0);function a(){return[...Ht()]}async function n(){const h=a();if(!h.length)return;const C=await Go(h);if(C)try{await zn({cases:h,n:C.n,nt:C.nt,maxParallel:C.maxParallel}),r.onRefresh()}catch(j){await Xe(`Run failed: ${j instanceof Error?j.message:j}`,"Error")}}async function o(){const h=a();if(!h.length)return;const C=await Wo(h);if(C)try{await zn({cases:h,n:C.n,nt:C.nt,maxParallel:C.maxParallel,restart:!0,restartMode:C.restartMode,restartValue:C.restartValue}),r.onRefresh()}catch(j){await Xe(`Restart failed: ${j instanceof Error?j.message:j}`,"Error")}}async function i(){const h=a();if(!(!h.length||!await An(`Kill ${h.length} case${h.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await gi(h),r.onRefresh()}catch(j){await Xe(`Kill failed: ${j instanceof Error?j.message:j}`,"Error")}}async function s(){const h=a();if(!(!h.length||!await An(`Stop ${h.length} case${h.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await xr({cases:h,action:"stop"}),r.onRefresh(),yr(`Stop requested for ${h.length} case${h.length>1?"s":""} — will checkpoint and exit`)}catch(j){await Xe(`Stop failed: ${j instanceof Error?j.message:j}`,"Error")}}async function l(){const h=a();if(h.length)try{await xr({cases:h,action:"checkpoint"}),r.onRefresh(),yr(`Checkpoint requested for ${h.length} case${h.length>1?"s":""}`)}catch(C){await Xe(`Checkpoint failed: ${C instanceof Error?C.message:C}`,"Error")}}async function u(){const h=a();if(!h.length)return;const C=await fn("Extend by how many additional time steps?","500","Extend Run");if(C===null)return;const j=parseInt(C,10);if(!Number.isFinite(j)||j<=0){await Xe("Enter a positive integer number of time steps.","Error");return}try{await xr({cases:h,action:"extend",value:j}),r.onRefresh(),yr(`Extended ${h.length} case${h.length>1?"s":""} by ${j} time steps`)}catch(Z){await Xe(`Extend failed: ${Z instanceof Error?Z.message:Z}`,"Error")}}async function b(){const h=a();if(h.length)try{await xr({cases:h,action:"flush"}),yr(`Flush requested for ${h.length} case${h.length>1?"s":""}`)}catch(C){await Xe(`Flush failed: ${C instanceof Error?C.message:C}`,"Error")}}async function x(){const h=a();if(!h.length)return;const C=await Xo(h);if(C)try{await hi({cases:h,keepLast:C.keepLast,keepResu:C.keepResu,deleteResu:C.deleteResu,pruneResu:!0}),r.onRefresh(),qi()}catch(j){await Xe(`Cleanup failed: ${j instanceof Error?j.message:j}`,"Error")}}function M(){const h=$r();h.length>0&&h.every(j=>Ht().has(j))?Bn():Vn(h)}function m(h){tn(h)}let A=D(oe(Qt("status")));Ne(()=>{Jt("status",e(A))}),Cl(!0);let F=U(()=>{const h=wr();return h.size>0&&[...h].some(C=>C==="PREPARED"||C==="DONE"||C==="FAILED")}),v=U(()=>{const h=wr();return h.size>0&&[...h].some(C=>C==="DONE"||C==="FAILED")&&Kn()}),c=U(()=>{const h=wr();return h.size>0&&h.has("RUNNING")}),p=U(()=>{const h=wr();return h.size>0&&h.has("RUNNING")}),$=U(Kn),_=D(oe(ml())),w=null;function y(){w&&clearTimeout(w),w=setTimeout(()=>{kl(e(_))},200)}Ne(()=>Sl(e(A)));let S=D(!1),L=D(0),T=D(0),z=D(oe([])),V=D("");function I(h,C,j,Z){f(z,Ht().has(h)?[...Ht()]:[h],!0),f(V,Z,!0),f(L,C,!0),f(T,j,!0),f(S,!0)}function H(){f(S,!1)}function O(h){const C=$r();if(C.length){if(h.key==="Escape"){Bn(),H();return}if((h.ctrlKey||h.metaKey)&&h.key==="a"){h.preventDefault(),Vn(C);return}if(h.key==="ArrowDown"||h.key==="ArrowUp"){h.preventDefault();const j=h.key==="ArrowDown"?1:-1,Z=Hn(),ie=C.indexOf(Z),Pe=Math.max(0,Math.min(C.length-1,ie+j)),X=C[Pe];h.shiftKey?rn(en()||C[0],X,C):wa(X),wl(X);return}if(h.key===" "){h.preventDefault();const j=Hn();j&&(h.shiftKey?rn(en()||j,j,$r()):tn(j))}}}var q=uc();tt("click",st,H),tt("scroll",st,H);var K=B(q),te=k(K);It(te,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:C=>{var j=nc(),Z=B(j);{let X=U(Vi);Zt(Z,{name:"status",get intervalMs(){return e(X)},get onRefresh(){return r.onRefresh},get checked(){return e(A)},set checked(J){f(A,J,!0)}})}var ie=P(Z,2);{var Pe=X=>{$e(X,{variant:"primary",onclick:()=>r.onRefresh(),children:(J,ue)=>{var ne=rc(),pe=B(ne);Ae(pe,{get icon(){return Yt}}),xe(),d(J,ne)},$$slots:{default:!0}})};Y(ie,X=>{e(A)||X(Pe)})}d(C,j)},children:(C,j)=>{var Z=cc(),ie=B(Z),Pe=k(ie),X=k(Pe);Ye(X);var J=P(X,2);Ol(J,{}),g(Pe);var ue=P(Pe,2),ne=k(ue),pe=k(ne);g(ne);var ye=P(ne,2);{let me=U(()=>!e(F));$e(ye,{variant:"run",size:"sm",onclick:n,get disabled(){return e(me)},children:(He,De)=>{var ce=ac(),ve=B(ce);Ae(ve,{get icon(){return ha}}),xe(),d(He,ce)},$$slots:{default:!0}})}var ee=P(ye,2);{let me=U(()=>!e(v));$e(ee,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(me)},children:(He,De)=>{var ce=oc(),ve=B(ce);Ae(ve,{get icon(){return qs}}),xe(),d(He,ce)},$$slots:{default:!0}})}var de=P(ee,2);{let me=U(()=>!e(p));$e(de,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(me)},children:(He,De)=>{var ce=sc(),ve=B(ce);Ae(ve,{get icon(){return Fs}}),xe(),d(He,ce)},$$slots:{default:!0}})}var we=P(de,2);{let me=U(()=>[{label:"Extend",icon:Hs,onClick:u,disabled:!e(p)},{label:"Checkpoint",icon:Ks,onClick:l,disabled:!e(p)},{label:"Flush",icon:Ds,onClick:b,disabled:!e(p)}]);dl(we,{get items(){return e(me)}})}var Ee=P(we,2);{let me=U(()=>!e(c));$e(Ee,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(me)},children:(He,De)=>{var ce=ic(),ve=B(ce);Ae(ve,{get icon(){return zs}}),xe(),d(He,ce)},$$slots:{default:!0}})}var ge=P(Ee,2);{let me=U(()=>!e($));$e(ge,{variant:"secondary",size:"sm",onclick:x,get disabled(){return e(me)},children:(He,De)=>{var ce=lc(),ve=B(ce);Ae(ve,{get icon(){return Ws}}),xe(),d(He,ce)},$$slots:{default:!0}})}g(ue),g(ie);var ze=P(ie,2);{let me=U(Ca);Zl(ze,{get rows(){return e(me)},onContextMenu:I,onToggleAll:M,onToggleRow:m})}Q(me=>re(pe,`${me??""} selected`),[()=>Ht().size]),se("input",X,y),et(X,()=>e(_),me=>f(_,me)),d(C,Z)},$$slots:{actions:!0,default:!0}}),g(K);var N=P(K,2);{var R=h=>{tc(h,{get cases(){return e(z)},get x(){return e(L)},get y(){return e(T)},get currentValue(){return e(V)},onClose:H})};Y(N,h=>{e(S)&&h(R)})}se("keydown",K,O),d(t,q),Le()}We(["keydown","input"]);var fc=E('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Gt(t,r){var a=fc(),n=k(a);ft(n,()=>r.children),g(a),d(t,a)}function yn(t){return t.map(r=>({value:r,label:r}))}var vc=E('<input type="number" step="any" class="w-[110px]"/>'),gc=E("<!> <!> <!> <!> <!> <!>",1);function wn(t,r){Me(r,!0);let a=he(r,"columnLabel",3,"Columns"),n=he(r,"xMinLabel",3,"Iter min"),o=U(()=>yn(r.allCases)),i=U(()=>r.columns.map(u=>({value:u,label:u}))),s=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(u){r.onXMinChange(Number(u.target.value)||0)}Gt(t,{children:(u,b)=>{var x=gc(),M=B(x);Re(M,{text:"Cases",children:(w,y)=>{Bt(w,{class:"w-[160px]",get options(){return e(o)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var m=P(M,2);{var A=w=>{var y=be(),S=B(y);ft(S,()=>r.middleSlot),d(w,y)};Y(m,w=>{r.middleSlot&&w(A)})}var F=P(m,2);Re(F,{get text(){return a()},children:(w,y)=>{Bt(w,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var v=P(F,2);Re(v,{text:"Start from",children:(w,y)=>{it(w,{class:"w-[140px]",get options(){return s},get value(){return r.startFrom},onchange:S=>r.onStartFromChange(S)})}});var c=P(v,2);{var p=w=>{Re(w,{get text(){return n()},children:(y,S)=>{var L=vc();Ye(L),Q(()=>un(L,r.xMin)),se("input",L,l),d(y,L)}})};Y(c,w=>{r.startFrom==="custom"&&w(p)})}var $=P(c,2);{var _=w=>{var y=be(),S=B(y);ft(S,()=>r.extraSlot),d(w,y)};Y($,w=>{r.extraSlot&&w(_)})}d(u,x)}}),Le()}We(["input"]);var hc=E('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),pc=E('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Wt(t,r){let a=he(r,"emptyMessage",3,"");var n=pc(),o=k(n);{var i=l=>{var u=be(),b=B(u);Tr(b,()=>r.svgHtml),d(l,u)},s=l=>{var u=hc(),b=k(u),x=k(b,!0);g(b),g(u),Q(()=>re(x,a()||"No data to display.")),d(l,u)};Y(o,l=>{r.svgHtml?l(i):l(s,-1)})}g(n),Q(()=>Ce(n,"id",r.id)),d(t,n)}async function kn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:o,height:i}=mc(n),s=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=o*s,l.height=i*s;const u=l.getContext("2d");if(!u)return;u.scale(s,s);const b=new XMLSerializer().serializeToString(n),x=new Blob([b],{type:"image/svg+xml;charset=utf-8"}),M=URL.createObjectURL(x),m=new Image;m.width=o,m.height=i,await new Promise((F,v)=>{m.onload=()=>{u.drawImage(m,0,0,o,i),URL.revokeObjectURL(M),F()},m.onerror=v,m.src=M});const A=await new Promise(F=>l.toBlob(F,"image/png"));A&&await $a(A,_c(r))}function pr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,o=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return bc(`${t}_${n}_${o}.${a}`)}async function Sa(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await $a(a,r)}function mc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function $a(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(o){if((o==null?void 0:o.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function _c(t){return t.endsWith(".png")?t:`${t}.png`}function bc(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Pa=D(oe([])),Ea=D(oe([])),Ra=D(oe([])),Na=D("zero"),Ma=D(0),La=D(""),xc=D(!0);function yc(){return{selectedCases:e(Pa),columns:e(Ea),selectedColumns:e(Ra),startFrom:e(Na),iterMin:e(Ma),svgHtml:e(La),autoRefresh:e(xc)}}function Gn(t){f(Pa,t,!0)}function wc(t){f(Ea,t,!0)}function Kr(t){f(Ra,t,!0)}function kc(t){f(Na,t,!0)}function Cc(t){f(Ma,t,!0)}function kr(t){f(La,t,!0)}var Sc=E("<!> Refresh",1),$c=E("<!> <!>",1),Pc=E("<!> Download as PNG",1),Ec=E('<div class="self-end ml-auto"><!></div>'),Rc=E('<!> <div class="flex justify-center"><!></div>',1),Nc=E('<div class="flex justify-center"><!></div>'),Mc=E('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Lc=E("<!> <!>",1);function Ac(t,r){Me(r,!0);let a=U(yc),n=D("");const o=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function s(){if(e(a).selectedCases.length)try{const v=await ai(e(a).selectedCases);f(n,"");const c=v.filter(p=>!o.has(p.toLowerCase().replace(/\s+/g,"_")));if(wc(c),c.length===0){Kr([]),kr("");return}if(e(a).selectedColumns.length===0){const p=c.filter($=>i.some(_=>$.toLowerCase().includes(_)));Kr(p.length>0?p:[c[0]])}}catch(v){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",v)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await s(),!e(a).selectedColumns.length)))try{let v=0,c=!0;if(e(a).startFrom==="restart"){const $=await ba(e(a).selectedCases),_=Object.values($.origins).map(w=>w.iteration).filter(w=>w!==void 0&&Number.isFinite(w));v=_.length>0?Math.min(..._):0}else e(a).startFrom==="custom"&&(v=e(a).iterMin);const p=await oi(e(a).selectedCases,e(a).selectedColumns,{xMin:v,includeHistory:c});f(n,""),p&&kr(p)}catch(v){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",v)}}function u(v){if(Gn(v),v.length===0){kr("");return}s(),l()}function b(v){if(Kr(v),v.length===0){kr("");return}l()}function x(v){kc(v),l()}function M(v){Cc(v),l()}let m=D(oe(Qt("plot")));Ne(()=>{Jt("plot",e(m))}),Ne(()=>{e(m)?vr("residualPlot",l,In()):vt("residualPlot")});let A=!1;Ne(()=>{r.allCases.length>0&&!A&&(A=!0,Gn([...r.allCases]),s().then(()=>l()))});const F=gr(()=>{A&&s().then(()=>l())});cr(()=>{vt("residualPlot"),F()}),It(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var p=$c(),$=B(p);{let y=U(In);Zt($,{name:"residualPlot",get intervalMs(){return e(y)},onRefresh:l,get checked(){return e(m)},set checked(S){f(m,S,!0)}})}var _=P($,2);{var w=y=>{$e(y,{variant:"primary",onclick:l,children:(S,L)=>{var T=Sc(),z=B(T);Ae(z,{get icon(){return Yt}}),xe(),d(S,T)},$$slots:{default:!0}})};Y(_,y=>{e(m)||y(w)})}d(c,p)},children:(c,p)=>{var $=Lc(),_=B($);{var w=T=>{const z=q=>{var K=Ec(),te=k(K);{let N=U(()=>!e(a).svgHtml);$e(te,{variant:"secondary",size:"sm",onclick:()=>kn("plot-holder",pr("residuals",e(a).selectedCases)),get disabled(){return e(N)},children:(R,h)=>{var C=Pc(),j=B(C);Ae(j,{get icon(){return fr}}),xe(),d(R,C)},$$slots:{default:!0}})}g(K),d(q,K)};var V=Rc(),I=B(V);wn(I,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:u,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:b,get startFrom(){return e(a).startFrom},onStartFromChange:x,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:M,get extraSlot(){return z}});var H=P(I,2),O=k(H);{let q=U(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Wt(O,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(q)}})}g(H),d(T,V)},y=T=>{var z=Nc(),V=k(z);Wt(V,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),g(z),d(T,z)};Y(_,T=>{e(a).columns.length>0?T(w):T(y,-1)})}var S=P(_,2);{var L=T=>{var z=Mc(),V=k(z,!0);g(z),Q(()=>re(V,e(n))),d(T,z)};Y(S,T=>{e(n)&&T(L)})}d(c,$)},$$slots:{actions:!0,default:!0}}),Le()}function Aa(t){const{scope:r,getState:a,setState:n,setHasData:o,getAxis:i}=t;async function s(){const m=a();if(m.selectedCases.length)try{let A=await Yr(m.selectedCases,r);if(t.filterFiles&&(A=t.filterFiles(A)),n({files:A}),o(A.length>0),A.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!m.file||!A.includes(m.file))&&(n({file:A[0]}),await l())}catch(A){console.error(`Failed to load ${r} files:`,A)}}async function l(){const m=a();if(!(!m.selectedCases.length||!m.file))try{const A=await ui(m.selectedCases,[m.file]),F=t.filterColumns?t.filterColumns(A):A;t.onColumnsLoaded?t.onColumnsLoaded(A):n({columns:F});const v=a();if(v.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}v.selectedColumns.length===0&&n({selectedColumns:[v.columns[0]]})}catch(A){console.error(`Failed to load ${r} columns:`,A)}}async function u(){let m=a();if(m.selectedCases.length){if(await s(),m=a(),!m.file){n({positionText:"",svgHtml:""});return}if((m.columns.length===0||m.selectedColumns.length===0)&&(await l(),m=a(),!m.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let A;const F=a();if(F.startFrom==="restart"){const c=await ba(F.selectedCases),p=i().toLowerCase(),$=p==="t"||p==="time"?"time":"iteration",_=Object.values(c.origins).map(w=>w[$]).filter(w=>w!==void 0&&Number.isFinite(w));A=_.length>0?Math.min(..._):void 0}else F.startFrom==="custom"&&(A=F.xMin);const v=await fi({cases:F.selectedCases,probes:[F.file],columns:F.selectedColumns,axis:i(),timeMin:typeof A=="number"?A:void 0,xMin:A,includeHistory:!0});v&&n({svgHtml:v})}catch(A){console.error(`Failed to load ${r} plot:`,A)}}}async function b(m){if(n({selectedCases:m}),m.length===0){n({svgHtml:""});return}await s(),r==="monitoring"&&await u()}function x(m){if(n({selectedColumns:m}),m.length===0){n({svgHtml:""});return}u()}async function M(m){n({file:m}),await l(),await u()}return{loadFiles:s,loadColumns:l,loadPlot:u,handleCasesChange:b,handleColumnsChange:x,handleFileChange:M}}function Ta(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let jt=D("time"),nn=D(oe(Ta())),an=D(oe({...Ta(),axis:""})),Tc=D(!0),Mr=D(!1),Lr=D(!1);function Fc(){return e(jt)}function zc(t){f(jt,t,!0)}function Dc(){return e(Mr)}function on(t){f(Mr,t,!0)}function Ic(){return e(Lr)}function sn(t){f(Lr,t,!0)}function Oc(){e(jt)==="time"&&!e(Mr)&&e(Lr)?f(jt,"profile"):e(jt)==="profile"&&!e(Lr)&&e(Mr)&&f(jt,"time")}function Wn(){return e(nn)}function Gr(){return e(an)}function wt(t){f(nn,{...e(nn),...t},!0)}function Mt(t){f(an,{...e(an),...t},!0)}function Hc(){return e(Tc)}var jc=E("<!> Download as PNG",1),Uc=E('<div class="self-end ml-auto"><!></div>'),Vc=E("<div> </div>"),Bc=E('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),qc=E('<!>  <!> <div class="flex justify-center"><!></div>',1),Kc=E('<div class="flex justify-center"><!></div>');function Gc(t,r){Me(r,!0);let a=he(r,"onRefresh",15),n=U(Wn);const o=new Set(["time","t","iteration","iter"]),i=Aa({scope:"monitoring",getState:Wn,setState:wt,setHasData:on,filterFiles:v=>v.filter(c=>{const p=c.replace(/\.csv$/i,"").toLowerCase();return p!=="coords"&&!p.includes("coordinates")}),filterColumns:v=>v.filter(c=>!o.has(c.toLowerCase())),onColumnsLoaded:v=>{const c=v.filter(p=>!o.has(p.toLowerCase()));wt({columns:c}),s()},getAxis:()=>"time"});async function s(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const v=[];for(const y of e(n).selectedColumns){const S=await di(e(n).selectedCases[0],e(n).file,[y]);S.found&&v.push({col:y,x:S.x,y:S.y,z:S.z})}if(!v.length){wt({positionText:""});return}const c=y=>{let S=0;for(const L of y){if(L===void 0)continue;const T=String(L),z=T.indexOf(".");z>=0&&(S=Math.max(S,T.length-z-1))}return S},p=c(v.map(y=>y.x)),$=c(v.map(y=>y.y)),_=c(v.map(y=>y.z)),w=v.map(y=>{const S=[];return y.x!==void 0&&S.push(`x=${y.x.toFixed(p)}`),y.y!==void 0&&S.push(`y=${y.y.toFixed($)}`),y.z!==void 0&&S.push(`z=${y.z.toFixed(_)}`),`Probe position [${y.col}] : ${S.join(" · ")}`});wt({positionText:w.join(`
`)})}catch{wt({positionText:""})}}function l(v){i.handleColumnsChange(v),v.length>0&&s()}let u=U(()=>e(n).files.map(v=>({value:v,label:v.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),b=!1;Ne(()=>{r.allCases.length>0&&!b&&(b=!0,wt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let x=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var M=be(),m=B(M);{var A=v=>{const c=T=>{Re(T,{text:"Quantity",children:(z,V)=>{it(z,{class:"w-[160px]",get options(){return e(u)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},p=T=>{var z=Uc(),V=k(z);{let I=U(()=>!e(n).svgHtml);$e(V,{variant:"secondary",size:"sm",onclick:()=>kn("probe-plot-holder",pr("probe",e(n).selectedCases)),get disabled(){return e(I)},children:(H,O)=>{var q=jc(),K=B(q);Ae(K,{get icon(){return fr}}),xe(),d(H,q)},$$slots:{default:!0}})}g(z),d(T,z)};var $=qc(),_=B($);wn(_,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:T=>{wt({startFrom:T}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:T=>{wt({xMin:T}),i.loadPlot()},get extraSlot(){return p}});var w=P(_,2);{var y=T=>{var z=Bc();Qe(z,21,()=>e(n).positionText.split(`
`).sort(),cn,(V,I)=>{var H=Vc(),O=k(H,!0);g(H),Q(()=>re(O,e(I))),d(V,H)}),g(z),d(T,z)};Y(w,T=>{e(n).positionText&&T(y)})}var S=P(w,2),L=k(S);Wt(L,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(x)}}),g(S),d(v,$)},F=v=>{var c=Kc(),p=k(c);Wt(p,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),g(c),d(v,c)};Y(m,v=>{e(n).files.length>0?v(A):v(F,-1)})}d(t,M),Le()}var Wc=E("<!> <!>",1),Xc=E("<!> Download as PNG",1),Yc=E('<div class="self-end ml-auto"><!></div>'),Qc=E('<!>  <div class="flex justify-center"><!></div>',1),Jc=E('<div class="flex justify-center"><!></div>');function Zc(t,r){Me(r,!0);let a=he(r,"onRefresh",15),n=U(Gr);const o=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const p=c.map($=>$.toLowerCase());for(const $ of o){const _=p.indexOf($);if(_>=0)return c[_]}return c[0]??""}const s=Aa({scope:"profiles",getState:Gr,setState:Mt,setHasData:sn,onColumnsLoaded:c=>{const p=e(n).axis||i(c),$=c.filter(_=>_!==p).toSorted((_,w)=>_.localeCompare(w));Mt({columns:$,axis:p,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:$.length?[$[0]]:[]})},getAxis:()=>Gr().axis});function l(c){const p=e(n).axis;Mt({axis:c});const _=[...e(n).columns,...p?[p]:[]].filter(w=>w!==c).toSorted((w,y)=>w.localeCompare(y));Mt({columns:_}),s.loadPlot()}let u=U(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),b=U(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,p)=>c.localeCompare(p)).map(c=>({value:c,label:c}))),x=!1;Ne(()=>{r.allCases.length>0&&!x&&(x=!0,Mt({selectedCases:[...r.allCases]}),s.loadFiles().then(()=>s.loadPlot()))}),Ne(()=>{a(s.loadPlot)});let M=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var m=be(),A=B(m);{var F=c=>{const p=L=>{var T=Wc(),z=B(T);Re(z,{text:"Profile",children:(I,H)=>{it(I,{class:"w-[160px]",get options(){return e(u)},get value(){return e(n).file},get onchange(){return s.handleFileChange}})}});var V=P(z,2);Re(V,{text:"X axis",children:(I,H)=>{it(I,{class:"w-[140px]",get options(){return e(b)},get value(){return e(n).axis},onchange:l})}}),d(L,T)},$=L=>{var T=Yc(),z=k(T);{let V=U(()=>!e(n).svgHtml);$e(z,{variant:"secondary",size:"sm",onclick:()=>kn("profile-plot-holder",pr("profile",e(n).selectedCases)),get disabled(){return e(V)},children:(I,H)=>{var O=Xc(),q=B(O);Ae(q,{get icon(){return fr}}),xe(),d(I,O)},$$slots:{default:!0}})}g(T),d(L,T)};var _=Qc(),w=B(_);wn(w,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return s.handleCasesChange},get middleSlot(){return p},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return s.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:L=>{Mt({startFrom:L}),s.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:L=>{Mt({xMin:L}),s.loadPlot()},get extraSlot(){return $}});var y=P(w,2),S=k(y);Wt(S,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(M)}}),g(y),d(c,_)},v=c=>{var p=Jc(),$=k(p);Wt($,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),g(p),d(c,p)};Y(A,c=>{e(n).files.length>0?c(F):c(v,-1)})}d(t,m),Le()}var eu=E('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),tu=E("<!> Refresh",1),ru=E("<!> <!>",1);function nu(t,r){Me(r,!0);let a=U(Fc),n=U(Hc),o=U(Dc),i=U(Ic),s=D(oe(Qt("probe")));Ne(()=>{Jt("probe",e(s))});let l=D(void 0);function u(){var F;(F=e(l))==null||F()}async function b(){if(r.allCases.length){try{const v=(await Yr(r.allCases,"monitoring")).filter(c=>{const p=c.replace(/\.csv$/i,"").toLowerCase();return p!=="coords"&&!p.includes("coordinates")});on(v.length>0)}catch{on(!1)}try{const F=await Yr(r.allCases,"profiles");sn(F.length>0)}catch{sn(!1)}}}Ne(()=>{r.allCases.length>0&&b()}),gr(()=>{b(),u()}),Ne(()=>{e(o),e(i),Oc()});function x(F){F==="time"&&!e(o)||F==="profile"&&!e(i)||zc(F)}var M=be(),m=B(M);{var A=F=>{{const v=p=>{var $=eu(),_=P(k($),2),w=k(_),y=P(w,2);g(_),g($),Q(()=>{ke(w,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(o)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),w.disabled=!e(o),Ce(w,"title",e(o)?"":"No probe data available. Run a simulation first."),ke(y,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),y.disabled=!e(i),Ce(y,"title",e(i)?"":"No profile data available. Run a simulation first.")}),se("click",w,()=>x("time")),se("click",y,()=>x("profile")),d(p,$)};It(F,{wide:!0,titleSlot:v,tabs:v,actions:p=>{var $=ru(),_=B($);{let S=U(()=>e(a)==="time"?"probePlot":"profilePlot"),L=U(Bi);Zt(_,{get name(){return e(S)},get intervalMs(){return e(L)},onRefresh:u,get checked(){return e(s)},set checked(T){f(s,T,!0)}})}var w=P(_,2);{var y=S=>{$e(S,{variant:"primary",onclick:u,children:(L,T)=>{var z=tu(),V=B(z);Ae(V,{get icon(){return Yt}}),xe(),d(L,z)},$$slots:{default:!0}})};Y(w,S=>{e(s)||S(y)})}d(p,$)},children:(p,$)=>{var _=be(),w=B(_);{var y=L=>{Gc(L,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(T){f(l,T,!0)}})},S=L=>{Zc(L,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(T){f(l,T,!0)}})};Y(w,L=>{e(a)==="time"?L(y):L(S,-1)})}d(p,_)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Y(m,F=>{e(n)&&F(A)})}d(t,M),Le()}We(["click"]);var au=E("<!> Refresh",1),ou=E("<!> <!>",1),su=E("<!> Download as CSV",1),iu=E('<!> <div class="self-end ml-auto"><!></div>',1),lu=E("<th> </th>"),cu=E('<td class="whitespace-nowrap"> </td>'),uu=E('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),du=E('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),fu=E('<p class="text-sm text-muted italic text-center py-8"><!></p>'),vu=E("<!> <!>",1);function gu(t,r){Me(r,!0);let a=D(oe([])),n=D(oe([])),o=D(!1),i=D(!1),s=D(oe(Qt("perf")));Ne(()=>{Jt("perf",e(s))});const l=5e3;let b=D(oe([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),x=U(()=>r.allCases.map($=>({value:$,label:$}))),M=U(()=>e(n).length>0);async function m(){var $;if(e(a).length){f(i,!0);try{const _=await Fn(e(a));($=_.columns)!=null&&$.length&&f(b,_.columns,!0),f(n,_.records,!0),e(n).length>0&&f(o,!0)}catch(_){console.error("Failed to load perf:",_)}f(i,!1)}}function A($){if(f(a,$,!0),$.length===0){f(n,[],!0);return}m()}function F($,_){if(_==null||_==="")return"-";if($==="text")return _;const w=Number(_);return Number.isFinite(w)?$==="int"?String(Math.round(w)):w.toFixed(3):_}async function v(){if(!e(n).length)return;const $=["case_id",...e(b).map(S=>S.key)],_=e(n).map(S=>[S.case_id,...e(b).map(L=>S[L.key]??"")].join(",")),w=[$.join(","),..._].join(`
`),y=pr("timing_snapshot",e(a),"csv");await Sa(w,y)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),Fn(r.allCases).then($=>{var _;(_=$.columns)!=null&&_.length&&f(b,$.columns,!0),f(o,$.records.length>0),f(n,$.records,!0)}).catch(()=>{}))}),Ne(()=>{e(s)?vr("perf",m,l):vt("perf")});const p=gr(()=>{c&&m()});cr(()=>{vt("perf"),p()}),It(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:_=>{var w=ou(),y=B(w);Zt(y,{name:"perf",intervalMs:l,onRefresh:m,get checked(){return e(s)},set checked(T){f(s,T,!0)}});var S=P(y,2);{var L=T=>{$e(T,{variant:"primary",onclick:m,children:(z,V)=>{var I=au(),H=B(I);Ae(H,{get icon(){return Yt}}),xe(),d(z,I)},$$slots:{default:!0}})};Y(S,T=>{e(s)||T(L)})}d(_,w)},children:(_,w)=>{var y=vu(),S=B(y);{var L=I=>{Gt(I,{children:(H,O)=>{var q=iu(),K=B(q);Re(K,{text:"Cases",children:(R,h)=>{Bt(R,{class:"w-[160px]",get options(){return e(x)},get selected(){return e(a)},onchange:A,placeholder:"Select cases..."})}});var te=P(K,2),N=k(te);{let R=U(()=>!e(M));$e(N,{variant:"secondary",size:"sm",onclick:v,get disabled(){return e(R)},children:(h,C)=>{var j=su(),Z=B(j);Ae(Z,{get icon(){return fr}}),xe(),d(h,j)},$$slots:{default:!0}})}g(te),d(H,q)}})};Y(S,I=>{e(o)&&I(L)})}var T=P(S,2);{var z=I=>{var H=du(),O=k(H),q=k(O),K=k(q),te=P(k(K));Qe(te,17,()=>e(b),R=>R.key,(R,h)=>{var C=lu(),j=k(C,!0);g(C),Q(()=>re(j,e(h).label)),d(R,C)}),g(K),g(q);var N=P(q);Qe(N,21,()=>e(n),R=>R.case_id,(R,h)=>{var C=uu(),j=k(C),Z=k(j,!0);g(j);var ie=P(j);Qe(ie,17,()=>e(b),Pe=>Pe.key,(Pe,X)=>{var J=cu(),ue=k(J,!0);g(J),Q(ne=>re(ue,ne),[()=>F(e(X).kind,e(h)[e(X).key])]),d(Pe,J)}),g(C),Q(()=>re(Z,e(h).case_id)),d(R,C)}),g(N),g(O),g(H),d(I,H)},V=I=>{var H=fu(),O=k(H);{var q=te=>{var N=Be("Select cases above to view timing information.");d(te,N)},K=te=>{var N=Be("No performance data available. Please run a simulation first.");d(te,N)};Y(O,te=>{e(o)?te(q):te(K,-1)})}g(H),d(I,H)};Y(T,I=>{e(M)?I(z):I(V,-1)})}d(_,y)},$$slots:{actions:!0,default:!0}}),Le()}const hu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Fa(t){return t.replace(/[&<>"']/g,r=>hu[r]??r)}var pu=E("<div></div>"),mu=E('<pre class="code-box tail-pane"></pre>');function _u(t,r){Me(r,!0);let a=D(void 0);function n(b){const x=Fa(b);if(!r.searchQuery.trim())return x;try{const M=new RegExp(`(${r.searchQuery})`,"gi");return x.replace(M,'<span class="tail-query-hit">$1</span>')}catch{return x}}function o(b){return b==="error"?"tail-sev-error":b==="warn"?"tail-sev-warn":b==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let s=D(!0);function l(){f(s,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(s)&&$t().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var u=mu();Qe(u,21,()=>r.lines,b=>b.index,(b,x)=>{var M=pu();Tr(M,()=>n(e(x).text),!0),g(M),Q(m=>ke(M,1,`tail-line ${m??""} ${e(x).isNew?"tail-new":""}`),[()=>o(e(x).severity)]),d(b,M)}),g(u),rt(u,b=>f(a,b),()=>e(a)),tt("scroll",u,l),d(t,u),Le()}const bu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,xu=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function yu(t){return bu.test(t)?"error":xu.test(t)?"warn":"none"}function wu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var ku=E("<!> Refresh",1),Cu=E("<!> <!>",1),Su=E('<input type="number" min="1" class="w-[70px]"/>'),$u=E('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Pu=E("<!> <!> <!> <!> <!>",1),Eu=Dt('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Ru=Dt('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Nu=Dt('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Mu=E("<!> Resume",1),Lu=E("<!> Pause",1),Au=E('<span class="text-xs text-muted">Case not running</span>'),Tu=E('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Fu=E('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),zu=E('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Du=E("<!> <!> <!>",1);function Iu(t,r){Me(r,!0);const a=80;let n=D(""),o=D(""),i=D(!1),s=D(oe([])),l=D(a),u=D(oe([])),b=D(oe(new Set)),x=D(!1),M=D(oe(Qt("tail")));Ne(()=>{Jt("tail",e(M))});let m=D(!0),A=D("all"),F=D(""),v=D(""),c=D(void 0),p=U(()=>yn(r.allCases)),$=U(()=>e(s).map(N=>{const R=N.split("/").pop()??N;return{value:N,label:R}})),_=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],w=U(()=>e(s).length>0),y=U(()=>_n().some(N=>{var R;return N.case_id===e(n)&&((R=N.status)==null?void 0:R.toUpperCase())==="RUNNING"}));const S={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function L(N){const R=N.split("/").pop()??N;return S[R]??99}async function T(){if(e(n))try{const h=(await li(e(n))).filter(C=>C.endsWith(".log")||C.endsWith("/summary")).sort((C,j)=>L(C)-L(j));if(f(s,h,!0),h.length>0){const C=h[0];!e(o)||!h.includes(e(o))?(f(o,C,!0),f(i,!1)):!e(i)&&L(C)<L(e(o))&&f(o,C,!0)}e(s).length===0&&(f(o,""),f(u,[],!0))}catch(N){console.error("Failed to load tail files:",N),f(s,[],!0)}}async function z(N=!1){if(e(n)&&!(e(x)&&!N)&&(await T(),!!e(o)))try{const R=await ii(e(n),e(o),e(l));f(v,"");const h=R.split(`
`),C=h.length>0&&h[h.length-1]===""?h.slice(0,-1):h;if(e(u).length>0){const j=V(e(u),C),Z=new Set;for(let ie=j;ie<C.length;ie++)Z.add(ie);f(b,Z,!0)}f(u,C,!0)}catch(R){f(v,"Failed to load log tail"),console.error("Failed to load tail:",R)}}function V(N,R){const h=Math.min(N.length,R.length);for(let C=0;C<h;C++){let j=!0;for(let Z=0;Z<Math.min(N.length-C,R.length);Z++)if(N[C+Z]!==R[Z]){j=!1;break}if(j)return N.length-C}return 0}let I=U(()=>{let N=e(u).map((R,h)=>({text:R,index:h,severity:yu(R),isNew:e(b).has(h)}));if(e(A)!=="all"&&(N=N.filter(R=>wu(R.severity,e(A)))),e(F).trim())try{const R=new RegExp(e(F),"i");N=N.filter(h=>R.test(h.text))}catch{}return N});function H(N){f(n,N,!0),f(o,""),f(i,!1),f(u,[],!0),T().then(()=>z(!0))}function O(N){f(o,N,!0),f(i,!0),f(u,[],!0),z(!0)}function q(){f(x,!e(x)),e(x)||z(!0)}function K(N){(N.ctrlKey||N.metaKey)&&N.key==="f"&&e(c)&&(N.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),T().then(()=>z(!0)))}),Ne(()=>{e(M)&&!e(x)&&e(n)?vr("tail",()=>z(!1),Dn()):vt("tail")});const te=gr(()=>{e(n)&&T().then(()=>z(!0))});cr(()=>{vt("tail"),te()}),tt("keydown",st,K),It(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:R=>{var h=Cu(),C=B(h);{let ie=U(Dn);Zt(C,{name:"tail",get intervalMs(){return e(ie)},onRefresh:()=>z(!1),get checked(){return e(M)},set checked(Pe){f(M,Pe,!0)}})}var j=P(C,2);{var Z=ie=>{$e(ie,{variant:"primary",onclick:()=>z(!0),children:(Pe,X)=>{var J=ku(),ue=B(J);Ae(ue,{get icon(){return Yt}}),xe(),d(Pe,J)},$$slots:{default:!0}})};Y(j,ie=>{e(M)||ie(Z)})}d(R,h)},children:(R,h)=>{var C=Du(),j=B(C);{var Z=ne=>{Gt(ne,{children:(pe,ye)=>{var ee=Pu(),de=B(ee);Re(de,{text:"Case",children:(me,He)=>{it(me,{class:"w-[130px]",get options(){return e(p)},get value(){return e(n)},onchange:H})}});var we=P(de,2);Re(we,{text:"File",children:(me,He)=>{it(me,{class:"w-[150px]",get options(){return e($)},get value(){return e(o)},onchange:O})}});var Ee=P(we,2);Re(Ee,{text:"Lines",children:(me,He)=>{var De=Su();Ye(De),se("change",De,()=>z(!0)),et(De,()=>e(l),ce=>f(l,ce)),d(me,De)}});var ge=P(Ee,2);Re(ge,{text:"Filter",children:(me,He)=>{var De=$u();Ye(De),rt(De,ce=>f(c,ce),()=>e(c)),et(De,()=>e(F),ce=>f(F,ce)),d(me,De)}});var ze=P(ge,2);Re(ze,{text:"Severity",children:(me,He)=>{it(me,{class:"w-[90px]",get options(){return _},get value(){return e(A)},onchange:De=>f(A,De,!0)})}}),d(pe,ee)}})};Y(j,ne=>{e(w)&&ne(Z)})}var ie=P(j,2);{var Pe=ne=>{var pe=Tu(),ye=B(pe);_u(ye,{get lines(){return e(I)},get searchQuery(){return e(F)},get autoScroll(){return e(m)}});var ee=P(ye,2),de=k(ee),we=k(de);{var Ee=G=>{var W=Eu();d(G,W)},ge=G=>{var W=Ru();d(G,W)},ze=G=>{var W=Nu();d(G,W)};Y(we,G=>{e(x)?G(Ee):e(y)?G(ge,1):G(ze,-1)})}var me=P(we);g(de);var He=P(de,2);{var De=G=>{$e(G,{variant:"secondary",size:"sm",onclick:q,children:(W,ae)=>{var fe=be(),Se=B(fe);{var Ie=le=>{var Oe=Mu(),Fe=B(Oe);Ae(Fe,{get icon(){return ha}}),xe(),d(le,Oe)},_e=le=>{var Oe=Lu(),Fe=B(Oe);Ae(Fe,{get icon(){return js}}),xe(),d(le,Oe)};Y(Se,le=>{e(x)?le(Ie):le(_e,-1)})}d(W,fe)},$$slots:{default:!0}})},ce=G=>{var W=Au();d(G,W)};Y(He,G=>{e(y)?G(De):G(ce,-1)})}var ve=P(He,2),Ue=k(ve);zt(Ue,{get checked(){return e(m)},onchange:G=>f(m,G,!0),size:14,label:"Auto-scroll",labelFirst:!0}),g(ve),g(ee),Q(()=>re(me,` ${e(I).length??""} / ${e(u).length??""}`)),d(ne,pe)},X=ne=>{var pe=Fu();d(ne,pe)};Y(ie,ne=>{e(u).length>0?ne(Pe):ne(X,-1)})}var J=P(ie,2);{var ue=ne=>{var pe=zu(),ye=k(pe,!0);g(pe),Q(()=>re(ye,e(v))),d(ne,pe)};Y(J,ne=>{e(v)&&ne(ue)})}d(R,C)},$$slots:{actions:!0,default:!0}}),Le()}We(["change"]);function Ou(t,r=3){var A,F;const a=t.split(`
`),n=[];let o=0,i=0,s=!1;for(const v of a){if(v.startsWith("===")||v.startsWith("---")||v.startsWith("+++"))continue;const c=v.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){o=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,s=!0;continue}if(s)if(v.startsWith("-"))o++,n.push({type:"del",leftNum:o,rightNum:null,leftContent:v.slice(1),rightContent:""});else if(v.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:v.slice(1)});else{o++,i++;const p=v.startsWith(" ")?v.slice(1):v;n.push({type:"equal",leftNum:o,rightNum:i,leftContent:p,rightContent:p})}}const l=[];let u=0;for(;u<n.length;)if(n[u].type==="del"){const v=[];for(;u<n.length&&n[u].type==="del";)v.push(n[u]),u++;const c=[];for(;u<n.length&&n[u].type==="add";)c.push(n[u]),u++;const p=Math.max(v.length,c.length);for(let $=0;$<p;$++){const _=v[$],w=c[$];_&&w?l.push({type:"del",leftNum:_.leftNum,rightNum:w.rightNum,leftContent:_.leftContent,rightContent:w.rightContent}):_?l.push(_):w&&l.push(w)}}else l.push(n[u]),u++;const b=new Set;for(let v=0;v<l.length;v++)if(l[v].type!=="equal")for(let c=Math.max(0,v-r);c<=Math.min(l.length-1,v+r);c++)b.add(c);if(b.size===0)return[];const x=[];let M=-1,m=!1;for(let v=0;v<l.length;v++)if(b.has(v)){M>=0&&v-M>1&&x.push({kind:"separator",skipped:v-M-1});const c=l[v].type!=="equal",p=c&&!m;x.push({kind:"line",row:l[v],hunkStart:p}),m=c,M=v}if(M<l.length-1&&M>=0&&x.push({kind:"separator",skipped:l.length-1-M}),x.length>0&&x[0].kind==="line"){const v=((A=x[0].row)==null?void 0:A.leftNum)??0,c=((F=x[0].row)==null?void 0:F.rightNum)??0,p=Math.max(v,c)-1;p>0&&x.unshift({kind:"separator",skipped:p})}return x}var Hu=E('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),ju=E('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),Uu=E('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),Vu=E('<span class="text-xs text-muted">No matches</span>'),Bu=E('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),qu=E('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),Ku=E('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),Gu=E('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function Wu(t,r){Me(r,!0);let a=he(r,"loading",3,!1),n=D(void 0),o=U(()=>Ou(r.diffText)),i=U(()=>{const G=[];return e(o).forEach((W,ae)=>{W.hunkStart&&G.push(ae)}),G}),s=U(()=>e(i).length>0),l=U(()=>{var W;const G=new Array(e(o).length).fill(-1);for(let ae=0;ae<e(i).length;ae++){let fe=e(i)[ae];for(;fe<e(o).length&&e(o)[fe].kind==="line"&&((W=e(o)[fe].row)==null?void 0:W.type)!=="equal";)G[fe]=ae,fe++}return G}),u=D(-1),b="";Ne(()=>{r.diffText!==b&&(b=r.diffText,f(u,-1))});let x=U(()=>{if(!r.search.trim())return[];try{const G=new RegExp(r.search,"i"),W=[];return e(o).forEach((ae,fe)=>{ae.kind==="line"&&ae.row&&(G.test(ae.row.leftContent)||G.test(ae.row.rightContent))&&W.push(fe)}),W}catch{return[]}}),M=D(-1),m="";Ne(()=>{r.search!==m&&(m=r.search,f(M,e(x).length>0?0:-1,!0))});async function A(G){var fe;f(M,G,!0),await $t();const W=e(x)[G],ae=(fe=e(_))==null?void 0:fe.querySelector(`[data-item-idx="${W}"]`);if(ae&&e(_)&&e(w)){const Se=e(_).getBoundingClientRect(),_e=ae.getBoundingClientRect().top-Se.top+e(_).scrollTop-e(_).clientHeight/3;S=!0,e(_).scrollTop=_e,e(w).scrollTop=_e,requestAnimationFrame(()=>{S=!1})}}function F(){e(M)>0&&A(e(M)-1)}function v(){e(M)<0&&e(x).length>0?A(0):e(M)<e(x).length-1&&A(e(M)+1)}function c(G,W){const ae=Fa(G);if(!r.search.trim())return ae;try{const fe=new RegExp(`(${r.search})`,"gi"),Se=W?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return ae.replace(fe,`<span class="${Se}">$1</span>`)}catch{return ae}}function p(G,W){return G==="equal"?"":G==="del"&&W==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":G==="del"&&W==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":G==="add"&&W==="left"?"bg-edf-gris-clair":G==="add"&&W==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function $(G,W){return G==="del"&&W==="left"?"rgb(251,237,233)":G==="del"&&W==="right"?"rgb(238,247,236)":G==="add"&&W==="left"?"var(--color-edf-gris-clair)":G==="add"&&W==="right"?"rgb(238,247,236)":"white"}let _=D(void 0),w=D(void 0),y=!1,S=!1;function L(G){y||S||!e(_)||!e(w)||(y=!0,G==="left"?(e(w).scrollTop=e(_).scrollTop,e(w).scrollLeft=e(_).scrollLeft):(e(_).scrollTop=e(w).scrollTop,e(_).scrollLeft=e(w).scrollLeft),requestAnimationFrame(()=>{y=!1}))}async function T(G){var ae;f(u,G,!0),await $t();const W=(ae=e(_))==null?void 0:ae.querySelector(`[data-hunk-start="${G}"]`);if(W&&e(_)&&e(w)){S=!0;const fe=e(_).getBoundingClientRect(),Ie=W.getBoundingClientRect().top-fe.top+e(_).scrollTop-e(_).clientHeight/3;e(_).scrollTop=Ie,e(w).scrollTop=Ie,requestAnimationFrame(()=>{S=!1})}}function z(){e(u)>0&&T(e(u)-1)}function V(){e(u)<0?T(0):e(u)<e(i).length-1&&T(e(u)+1)}function I(G){const W=e(l)[G];W>=0&&f(u,W,!0)}function H(G){G.target instanceof HTMLInputElement||(G.key==="n"&&!G.shiftKey?(G.preventDefault(),V()):G.key==="N"||G.key==="n"&&G.shiftKey?(G.preventDefault(),z()):G.key==="j"?(G.preventDefault(),v()):(G.key==="J"||G.key==="j"&&G.shiftKey)&&(G.preventDefault(),F()))}var O=Gu();{const G=(W,ae=xo)=>{var fe=be(),Se=B(fe);Qe(Se,17,()=>e(o),cn,(Ie,_e,le)=>{const Oe=U(()=>e(i).indexOf(le)),Fe=U(()=>e(l)[le]>=0&&e(l)[le]===e(u)),nt=U(()=>{var lt,Ge;return ae()==="left"?(lt=e(_e).row)==null?void 0:lt.leftNum:(Ge=e(_e).row)==null?void 0:Ge.rightNum}),er=U(()=>{var lt,Ge;return ae()==="left"?((lt=e(_e).row)==null?void 0:lt.leftContent)??"":((Ge=e(_e).row)==null?void 0:Ge.rightContent)??""});var mr=be(),Ze=B(mr);{var ut=lt=>{var Ge=Hu(),Rt=P(k(Ge),2),Or=k(Rt);g(Rt),g(Ge),Q(()=>re(Or,`... ${e(_e).skipped??""} lines hidden ...`)),d(lt,Ge)},Ir=lt=>{var Ge=ju(),Rt=k(Ge),Or=k(Rt,!0);g(Rt);var Cn=P(Rt,2);Tr(Cn,()=>c(e(er),e(M)>=0&&e(x)[e(M)]===le),!0),g(Cn),g(Ge),Q((xt,Nt,_r,za,Da)=>{ke(Ge,1,`flex w-full ${xt??""} ${Nt??""}`),Je(Ge,e(Fe)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),Ce(Ge,"role",_r),Ce(Ge,"tabindex",za),Ce(Ge,"data-hunk-start",ae()==="left"&&e(Oe)>=0?e(Oe):void 0),Ce(Ge,"data-item-idx",ae()==="left"?le:void 0),Je(Rt,`background: ${Da??""}; color: ${e(Fe)?"white":"var(--color-muted)"};`),re(Or,e(nt)??"")},[()=>p(e(_e).row.type,ae()),()=>e(_e).row.type!=="equal"||e(x).includes(le)?"cursor-pointer":"",()=>e(_e).row.type!=="equal"||e(x).includes(le)?"button":void 0,()=>e(_e).row.type!=="equal"||e(x).includes(le)?0:void 0,()=>e(Fe)?"rgb(16,87,200)":$(e(_e).row.type,ae())]),se("click",Ge,()=>{var Nt;((Nt=e(_e).row)==null?void 0:Nt.type)!=="equal"&&I(le);const xt=e(x).indexOf(le);xt>=0&&f(M,xt,!0)}),se("keydown",Ge,xt=>{var Nt;if(xt.key==="Enter"||xt.key===" "){xt.preventDefault(),((Nt=e(_e).row)==null?void 0:Nt.type)!=="equal"&&I(le);const _r=e(x).indexOf(le);_r>=0&&f(M,_r,!0)}}),d(lt,Ge)};Y(Ze,lt=>{e(_e).kind==="separator"?lt(ut):e(_e).row&&lt(Ir,1)})}d(Ie,mr)}),d(W,fe)};var q=k(O),K=k(q),te=k(K),N=k(te,!0);g(te);var R=P(te,2),h=k(R,!0);g(R),g(K);var C=P(K,2),j=k(C),Z=k(j,!0);g(j);var ie=P(j,2),Pe=k(ie,!0);g(ie),g(C),g(q);var X=P(q,2),J=k(X),ue=k(J);Ye(ue);var ne=P(ue,2);{var pe=W=>{var ae=Uu(),fe=B(ae);{let le=U(()=>e(M)<=0);$e(fe,{variant:"secondary",size:"sm",onclick:F,get disabled(){return e(le)},children:(Oe,Fe)=>{xe();var nt=Be("Prev");d(Oe,nt)},$$slots:{default:!0}})}var Se=P(fe,2),Ie=k(Se);g(Se);var _e=P(Se,2);{let le=U(()=>e(M)>=e(x).length-1);$e(_e,{variant:"secondary",size:"sm",onclick:v,get disabled(){return e(le)},children:(Oe,Fe)=>{xe();var nt=Be("Next");d(Oe,nt)},$$slots:{default:!0}})}Q(()=>re(Ie,`${e(M)>=0?e(M)+1:"–"} / ${e(x).length??""} occurrence${e(x).length!==1?"s":""}`)),d(W,ae)},ye=U(()=>r.search.trim()&&e(x).length>0),ee=W=>{var ae=Vu();d(W,ae)},de=U(()=>r.search.trim());Y(ne,W=>{e(ye)?W(pe):e(de)&&W(ee,1)})}g(J);var we=P(J,2),Ee=k(we);{let W=U(()=>e(i).length===0||e(u)<=0);$e(Ee,{variant:"secondary",size:"sm",onclick:z,get disabled(){return e(W)},children:(ae,fe)=>{xe();var Se=Be("Prev");d(ae,Se)},$$slots:{default:!0}})}var ge=P(Ee,2),ze=k(ge);g(ge);var me=P(ge,2);{let W=U(()=>e(i).length===0||e(u)>=e(i).length-1);$e(me,{variant:"secondary",size:"sm",onclick:V,get disabled(){return e(W)},children:(ae,fe)=>{xe();var Se=Be("Next");d(ae,Se)},$$slots:{default:!0}})}g(we),g(X);var He=P(X,2);{var De=W=>{var ae=Bu(),fe=k(ae),Se=k(fe),Ie=k(Se);G(Ie,()=>"left"),g(Se),g(fe),rt(fe,Fe=>f(_,Fe),()=>e(_));var _e=P(fe,2),le=k(_e),Oe=k(le);G(Oe,()=>"right"),g(le),g(_e),rt(_e,Fe=>f(w,Fe),()=>e(w)),g(ae),tt("scroll",fe,()=>L("left")),tt("scroll",_e,()=>L("right")),d(W,ae)},ce=W=>{var ae=qu();d(W,ae)};Y(He,W=>{e(s)?W(De):W(ce,-1)})}var ve=P(He,2);{var Ue=W=>{var ae=Ku();d(W,ae)};Y(ve,W=>{a()&&W(Ue)})}g(O),rt(O,W=>f(n,W),()=>e(n)),Q(()=>{re(N,r.leftLabel),re(h,r.kind),re(Z,r.rightLabel),re(Pe,r.kind),un(ue,r.search),re(ze,`${e(u)>=0?e(u)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),se("input",ue,W=>r.onSearchChange(W.target.value)),se("keydown",ue,W=>{W.key==="Enter"&&(W.preventDefault(),v())})}se("keydown",O,H),d(t,O),Le()}We(["keydown","click","input"]);var Xu=E("<!> <!> <!>",1),Yu=E('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),Qu=E('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),Ju=E('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),Zu=E('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),ed=E('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),td=E('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),rd=E('<p class="text-sm text-red-600 text-center py-8"> </p>'),nd=E('<p class="text-sm text-muted text-center py-8">Loading...</p>'),ad=E("<!> <!> <!>",1),od=E("<!> <!>",1);function sd(t,r){Me(r,!0);let a=D(""),n=D(""),o=D("setup.xml"),i=D(""),s=D(""),l=D(!1),u=D(!1),b=D(""),x=U(()=>r.allCases.map(y=>({value:y,label:y}))),M=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}],m=D(!1),A=U(()=>e(a)&&e(n)&&e(a)!==e(n));function F(){const y=e(a);f(a,e(n),!0),f(n,y,!0)}async function v(){if(e(A)){f(l,!0),f(b,"");try{const y=await vi({cases:[e(a),e(n)],base:e(a),kind:e(o)});f(s,y,!0),f(u,!0)}catch(y){console.error("Failed to load diff:",y),f(s,""),f(u,!1);const S=y instanceof Error?y.message:String(y);f(b,S.includes("404")?`File "${e(o)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(o)?v():e(a)&&e(n)&&e(a)===e(n)&&(f(s,""),f(u,!0))});let c=!1;Ne(()=>{r.allCases.length>=2&&!c?(c=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!c&&(c=!0,f(a,r.allCases[0],!0))});let p=U(bn),$=U(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(p).length===0)return[];const y=_n(),S=y.find(T=>T.case_id===e(a)),L=y.find(T=>T.case_id===e(n));return!S&&!L?[]:e(p).map(T=>{var I,H;const z=((I=S==null?void 0:S.doe)==null?void 0:I[T])!=null&&String(S.doe[T])!==""?String(S.doe[T]):"—",V=((H=L==null?void 0:L.doe)==null?void 0:H[T])!=null&&String(L.doe[T])!==""?String(L.doe[T]):"—";return{param:T,left:z,right:V,differs:z!==V}})}),_=U(()=>e(m)?e($):e($).filter(y=>y.differs)),w=U(()=>e($).filter(y=>y.differs).length);It(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(y,S)=>{var L=od(),T=B(L);Gt(T,{children:(O,q)=>{var K=Xu(),te=B(K);Re(te,{text:"First case",children:(h,C)=>{it(h,{class:"w-32.5",get options(){return e(x)},get value(){return e(a)},onchange:j=>f(a,j,!0),placeholder:"Select..."})}});var N=P(te,2);{let h=U(()=>!e(a)&&!e(n));$e(N,{variant:"secondary",size:"sm",onclick:F,get disabled(){return e(h)},children:(C,j)=>{Ae(C,{get icon(){return Ls}})},$$slots:{default:!0}})}var R=P(N,2);Re(R,{text:"Second case",children:(h,C)=>{it(h,{class:"w-32.5",get options(){return e(x)},get value(){return e(n)},onchange:j=>f(n,j,!0),placeholder:"Select..."})}}),d(O,K)}});var z=P(T,2);{var V=O=>{var q=Yu();d(O,q)},I=O=>{var q=Qu();d(O,q)},H=O=>{var q=ad(),K=B(q);{var te=Z=>{var ie=td(),Pe=B(ie),X=k(Pe),J=k(X);g(X);var ue=P(X,2),ne=k(ue,!0);g(ue),g(Pe);var pe=P(Pe,2);{var ye=de=>{var we=Zu(),Ee=k(we),ge=k(Ee),ze=k(ge),me=k(ze),He=k(me,!0);g(me);var De=P(me,2),ce=k(De,!0);g(De),g(ze),g(ge);var ve=P(ge);Qe(ve,21,()=>e(_),Ue=>Ue.param,(Ue,G)=>{var W=Ju(),ae=k(W),fe=k(ae,!0);g(ae);var Se=P(ae),Ie=k(Se,!0);g(Se);var _e=P(Se),le=k(_e,!0);g(_e),g(W),Q(()=>{ke(ae,1,dt(e(G).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),re(fe,e(G).left),re(Ie,e(G).param),ke(_e,1,dt(e(G).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),re(le,e(G).right)}),d(Ue,W)}),g(ve),g(Ee),g(we),Q(()=>{re(He,e(a)),re(ce,e(n))}),d(de,we)},ee=de=>{var we=ed();d(de,we)};Y(pe,de=>{e(_).length>0?de(ye):de(ee,-1)})}Q(()=>{re(J,`${e(w)??""} difference${e(w)!==1?"s":""} out of ${e($).length??""}
          parameters`),re(ne,e(m)?"Show differences only":"Show all parameters")}),se("click",ue,()=>f(m,!e(m))),d(Z,ie)};Y(K,Z=>{e($).length>0&&Z(te)})}var N=P(K,2);Gt(N,{children:(Z,ie)=>{Re(Z,{text:"File",children:(Pe,X)=>{it(Pe,{class:"w-37.5",get options(){return M},get value(){return e(o)},onchange:J=>f(o,J,!0)})}})}});var R=P(N,2);{var h=Z=>{var ie=rd(),Pe=k(ie,!0);g(ie),Q(()=>re(Pe,e(b))),d(Z,ie)},C=Z=>{Wu(Z,{get diffText(){return e(s)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(o)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:ie=>f(i,ie,!0)})},j=Z=>{var ie=nd();d(Z,ie)};Y(R,Z=>{e(b)?Z(h):e(u)?Z(C,1):e(l)&&Z(j,2)})}d(O,q)};Y(z,O=>{e(a)&&e(n)&&e(a)===e(n)?O(V):!e(a)||!e(n)?O(I,1):O(H,-1)})}d(y,L)},$$slots:{default:!0}}),Le()}We(["click"]);var id=E("<!> Refresh",1),ld=E("<!> <!>",1),cd=E('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),ud=E('<input type="number" min="0" max="50" style="width: 70px;"/>'),dd=E("<!> Download as CSV",1),fd=E('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),vd=E("&nbsp;<!>",1),gd=E("<button> <!></button>"),hd=E('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),pd=E('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),md=E('<span class="error-badge"> </span>'),_d=E('<span class="error-badge error-badge-new">NEW</span>'),bd=E('<div class="error-line"></div>'),xd=E('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),yd=E('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),wd=E('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),kd=E('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Cd=E("<!> <!> <div><!> <!></div> <!> <!>",1);function Sd(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let o=D(oe([])),i=D(oe([...n])),s=D("all"),l=D(""),u=D(a),b=D(!1),x=D(""),M=D(oe(Qt("errors")));Ne(()=>{Jt("errors",e(M))});let m=D(oe([])),A=D(oe(new Set));function F(X){return X.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function v(X){const J=X.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${X.case_id}|${X.file}|${X.severity}|${F(J)}`}function c(X){const J=new Map;for(const ue of X){const ne=v(ue),pe=J.get(ne);pe?pe.count++:J.set(ne,{...ue,count:1,fingerprint:ne,isNew:!e(A).has(ne)})}return Array.from(J.values())}async function p(){if(!(!e(o).length||!e(i).length)){f(b,!0);try{const X=await si({cases:e(o),files:e(i),context:e(u),sev:e(s)==="all"?"":e(s),q:e(l)});f(x,"");const J=c(X.items);f(m,X.items,!0);const ue=new Set(J.map(ne=>ne.fingerprint));f(A,ue,!0),f($,J,!0)}catch(X){f(x,"Failed to load errors"),console.error("Failed to load errors:",X)}finally{f(b,!1)}}}let $=D(oe([])),_=null;function w(){_&&clearTimeout(_),_=setTimeout(p,250)}function y(X){return X==="error"?"error-sev-error":X==="warn"?"error-sev-warn":"error-sev-info"}let S=U(()=>yn(r.allCases)),T=["csauto.stderr","run_solver.log","listing","csauto.stdout"].map(X=>({value:X,label:X})),z=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function V(X){if(f(o,X,!0),X.length===0){f($,[],!0),f(m,[],!0);return}p()}function I(X){if(f(i,X,!0),X.length===0){f($,[],!0),f(m,[],!0);return}p()}function H(X){f(s,X,!0),p()}function O(){p()}let q=!1;Ne(()=>{r.allCases.length>0&&!q&&(q=!0,f(o,[...r.allCases],!0),p())}),Ne(()=>{e(M)?vr("errors",p,On()):vt("errors")});const K=gr(()=>{q&&p()});cr(()=>{vt("errors"),K()});let te=D(oe(new Set));function N(X){const J=new Set(e(te));J.has(X)?J.delete(X):J.add(X),f(te,J,!0)}let R=D("severity"),h=D("desc");const C={info:0,warn:1,error:2};let j=U(()=>{const X=[...e($)];return X.sort((J,ue)=>{let ne=0;return e(R)==="severity"?ne=(C[J.severity]??9)-(C[ue.severity]??9):e(R)==="count"?ne=J.count-ue.count:ne=J[e(R)].localeCompare(ue[e(R)]),e(h)==="asc"?ne:-ne}),X});const Z={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function ie(X){e(R)===X?f(h,e(h)==="asc"?"desc":"asc",!0):(f(R,X,!0),f(h,Z[X],!0))}function Pe(){if(!e($).length)return;const X=["case_id","file","severity","count","is_new","line_text"],J=e(j).map(pe=>[pe.case_id,pe.file,pe.severity,pe.count,pe.isNew?"yes":"no",`"${pe.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),ue=[X.join(","),...J].join(`
`),ne=pr("errors",e(o),"csv");Sa(ue,ne)}It(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:J=>{var ue=ld(),ne=B(ue);{let ee=U(On);Zt(ne,{name:"errors",get intervalMs(){return e(ee)},onRefresh:p,get checked(){return e(M)},set checked(de){f(M,de,!0)}})}var pe=P(ne,2);{var ye=ee=>{$e(ee,{variant:"primary",onclick:p,children:(de,we)=>{var Ee=id(),ge=B(Ee);Ae(ge,{get icon(){return Yt}}),xe(),d(de,Ee)},$$slots:{default:!0}})};Y(pe,ee=>{e(M)||ee(ye)})}d(J,ue)},children:(J,ue)=>{var ne=Cd(),pe=B(ne);Gt(pe,{children:(ce,ve)=>{var Ue=fd(),G=B(Ue);Re(G,{text:"Cases",children:(le,Oe)=>{Bt(le,{class:"w-[160px]",get options(){return e(S)},get selected(){return e(o)},onchange:V,placeholder:"Select cases..."})}});var W=P(G,2);Re(W,{text:"Files",children:(le,Oe)=>{Bt(le,{class:"w-[160px]",get options(){return T},get selected(){return e(i)},onchange:I,placeholder:"Select files..."})}});var ae=P(W,2);Re(ae,{text:"Severity",children:(le,Oe)=>{it(le,{class:"w-[90px]",get options(){return z},get value(){return e(s)},onchange:H})}});var fe=P(ae,2);Re(fe,{text:"Search",children:(le,Oe)=>{var Fe=cd();Ye(Fe),se("input",Fe,w),et(Fe,()=>e(l),nt=>f(l,nt)),d(le,Fe)}});var Se=P(fe,2);Re(Se,{text:"Context",children:(le,Oe)=>{var Fe=ud();Ye(Fe),se("change",Fe,O),et(Fe,()=>e(u),nt=>f(u,nt)),d(le,Fe)}});var Ie=P(Se,2),_e=k(Ie);{let le=U(()=>e($).length===0);$e(_e,{variant:"secondary",size:"sm",onclick:Pe,get disabled(){return e(le)},children:(Oe,Fe)=>{var nt=dd(),er=B(nt);Ae(er,{get icon(){return fr}}),xe(),d(Oe,nt)},$$slots:{default:!0}})}g(Ie),d(ce,Ue)}});var ye=P(pe,2);{var ee=ce=>{var ve=hd(),Ue=P(k(ve),2);Qe(Ue,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],G=>G.key,(G,W)=>{var ae=gd(),fe=k(ae,!0),Se=P(fe);{var Ie=_e=>{var le=vd(),Oe=P(B(le));{let Fe=U(()=>e(h)==="asc"?As:Ms);Ae(Oe,{get icon(){return e(Fe)},size:12})}d(_e,le)};Y(Se,_e=>{e(R)===W.key&&_e(Ie)})}g(ae),Q(()=>{ke(ae,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(R)===W.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),re(fe,W.label)}),se("click",ae,()=>ie(W.key)),d(G,ae)}),g(ve),d(ce,ve)};Y(ye,ce=>{e(j).length>0&&ce(ee)})}var de=P(ye,2),we=k(de);{var Ee=ce=>{var ve=pd();d(ce,ve)};Y(we,ce=>{e(j).length===0&&ce(Ee)})}var ge=P(we,2);Qe(ge,17,()=>e(j),ce=>ce.fingerprint,(ce,ve)=>{var Ue=xd(),G=k(Ue),W=k(G),ae=k(W);{let Ze=U(()=>e(te).has(e(ve).fingerprint)?vn:Ts);Ae(ae,{get icon(){return e(Ze)},size:14})}g(W);var fe=P(W,2),Se=k(fe);g(fe);var Ie=P(fe,2),_e=k(Ie);{var le=Ze=>{var ut=md(),Ir=k(ut);g(ut),Q(()=>re(Ir,`${e(ve).count??""}x`)),d(Ze,ut)};Y(_e,Ze=>{e(ve).count>1&&Ze(le)})}var Oe=P(_e,2);{var Fe=Ze=>{var ut=_d();d(Ze,ut)};Y(Oe,Ze=>{e(ve).isNew&&Ze(Fe)})}g(Ie),g(G);var nt=P(G,2);{var er=Ze=>{var ut=bd();Tr(ut,()=>e(ve).line_html,!0),g(ut),d(Ze,ut)},mr=U(()=>e(te).has(e(ve).fingerprint));Y(nt,Ze=>{e(mr)&&Ze(er)})}g(Ue),Q(Ze=>{ke(Ue,1,`error-item ${Ze??""}`),re(Se,`${e(ve).case_id??""} / ${e(ve).file??""} : ${e(ve).severity??""}`)},[()=>y(e(ve).severity)]),se("click",G,()=>N(e(ve).fingerprint)),d(ce,Ue)}),g(de);var ze=P(de,2);{var me=ce=>{var ve=wd(),Ue=k(ve),G=k(Ue);g(Ue);var W=P(Ue,2);{var ae=Se=>{var Ie=yd(),_e=k(Ie);g(Ie),Q(le=>re(_e,`${le??""} new`),[()=>e($).filter(le=>le.isNew).length]),d(Se,Ie)},fe=U(()=>e($).some(Se=>Se.isNew));Y(W,Se=>{e(fe)&&Se(ae)})}g(ve),Q(()=>re(G,`${e($).length??""} unique / ${e(m).length??""} total`)),d(ce,ve)};Y(ze,ce=>{e(j).length>0&&ce(me)})}var He=P(ze,2);{var De=ce=>{var ve=kd(),Ue=k(ve,!0);g(ve),Q(()=>re(Ue,e(x))),d(ce,ve)};Y(He,ce=>{e(x)&&ce(De)})}Q(()=>ke(de,1,`error-list ${e(b)?"opacity-50 pointer-events-none":""}`)),d(J,ne)},$$slots:{actions:!0,default:!0}}),Le()}We(["input","change","click"]);var $d=E('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Fd(t,r){Me(r,!0);let a=D(oe({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=D(oe([])),o=D(null);const i=C=>e(o)===null||e(o).includes(C);async function s(){try{const C=await ri();xl(C.rows),yl(C.doe_columns),f(n,C.rows.map(j=>j.case_id),!0),f(a,Tl(ka(),_n()),!0)}catch(C){console.error("Failed to load status:",C)}}Xn(()=>{s(),ni().then(C=>{f(o,C.panels,!0)}).catch(()=>{})});var l=$d(),u=B(l);Ei(u,{});var b=P(u,2);Ai(b,{});var x=P(b,2);Zi(x,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var M=P(x,2),m=k(M);{var A=C=>{dc(C,{onRefresh:s})},F=U(()=>i("status"));Y(m,C=>{e(F)&&C(A)})}var v=P(m,2);{var c=C=>{Ac(C,{get allCases(){return e(n)}})},p=U(()=>i("residuals"));Y(v,C=>{e(p)&&C(c)})}var $=P(v,2);{var _=C=>{nu(C,{get allCases(){return e(n)}})},w=U(()=>i("probes"));Y($,C=>{e(w)&&C(_)})}var y=P($,2);{var S=C=>{gu(C,{get allCases(){return e(n)}})},L=U(()=>i("performance"));Y(y,C=>{e(L)&&C(S)})}var T=P(y,2);{var z=C=>{sd(C,{get allCases(){return e(n)}})},V=U(()=>i("compare"));Y(T,C=>{e(V)&&C(z)})}var I=P(T,2);{var H=C=>{Iu(C,{get allCases(){return e(n)}})},O=U(()=>i("tail"));Y(I,C=>{e(O)&&C(H)})}var q=P(I,2);{var K=C=>{Sd(C,{get allCases(){return e(n)}})},te=U(()=>i("errors"));Y(q,C=>{e(te)&&C(K)})}g(M);var N=P(M,2),R=P(k(N),2),h=k(R);g(R),g(N),Q(()=>Ce(h,"src",el)),d(t,l),Le()}export{Fd as component};
