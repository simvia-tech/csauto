import{b as Pr,a as u,f as $,c as be,t as Ve,d as Ht}from"../chunks/C14P8jaG.js";import{o as Jn,a as vr}from"../chunks/Cz6m6K8p.js";import{h as Fe,L as Pt,G as Tt,c as Er,J as Gt,b as ea,o as e,N as Ba,ag as qa,O as Rn,P as Dt,f as _t,ay as ta,aF as Ka,ao as Nn,e as mt,a as dr,aM as Ga,s as Wa,a5 as Xa,aN as ra,aE as fn,aO as Ya,a7 as Mn,aP as Qa,aQ as Za,aI as Ja,aR as ht,aS as na,a1 as eo,r as aa,p as oa,aT as Ur,ae as sa,aU as to,aV as ro,aC as no,m as ao,d as Nr,az as ia,y as ee,F as la,aW as oo,aG as so,aA as io,D as ca,aX as ua,aY as lo,aZ as co,E as uo,aw as da,S as Ir,k as Mr,a_ as fa,a$ as fo,b0 as vo,b1 as va,b2 as go,b3 as ho,b4 as gr,b5 as po,b6 as mo,b7 as _o,b8 as bo,b9 as xo,ba as yo,bb as wo,aJ as Et,U as ko,aK as z,_ as ce,$ as f,A as b,B as v,x as Me,g as G,z as Ae,C as P,j as Ne,ap as we,aL as V,bc as Co,bd as ga,q as Ut,be as it,bf as So}from"../chunks/VJhVTb1A.js";import{p as me,i as Y,b as nt,c as $o,l as Oe,s as Ue}from"../chunks/zf4GFcxs.js";import{i as Po,a as Eo,d as ue,b as Ge,c as Ro,n as No,e as Mo,s as ae,f as rt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Ao}from"../chunks/DmjnTBOd.js";import{B as To}from"../chunks/U5yjBaoU.js";function vn(t,r){return r}function Lo(t,r,a){for(var n=[],o=r.length,i,s=r.length,l=0;l<o;l++){let N=r[l];oa(N,()=>{if(i){if(i.pending.delete(N),i.done.add(N),i.pending.size===0){var p=t.outrogroups;Qr(t,fn(i.done)),p.delete(i),p.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var d=n.length===0&&a!==null;if(d){var _=a,x=_.parentNode;no(x),x.append(_),t.items.clear()}Qr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Qr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const s of t.pending.values())for(const l of s)n.add(t.items.get(l).e)}for(var o=0;o<r.length;o++){var i=r[o];if(n!=null&&n.has(i)){i.f|=ht;const s=document.createDocumentFragment();ao(i,s)}else Nr(r[o],a)}}var An;function He(t,r,a,n,o,i=null){var s=t,l=new Map,d=(r&na)!==0;if(d){var _=t;s=Fe?Pt(Tt(_)):_.appendChild(Er())}Fe&&Gt();var x=null,N=Xa(()=>{var m=a();return ra(m)?m:m==null?[]:fn(m)}),p,M=new Map,T=!0;function g(m){(E.effect.f&eo)===0&&(E.pending.delete(m),E.fallback=x,Fo(E,p,s,r,n),x!==null&&(p.length===0?(x.f&ht)===0?aa(x):(x.f^=ht,lr(x,null,s)):oa(x,()=>{x=null})))}function c(m){E.pending.delete(m)}var k=ea(()=>{p=e(N);var m=p.length;let y=!1;if(Fe){var S=Ba(s)===qa;S!==(m===0)&&(s=Rn(),Pt(s),Dt(!1),y=!0)}for(var h=new Set,R=mt,D=Wa(),L=0;L<m;L+=1){Fe&&_t.nodeType===ta&&_t.data===Ka&&(s=_t,y=!0,Dt(!1));var q=p[L],H=n(q,L),j=T?null:l.get(H);j?(j.v&&Nn(j.v,q),j.i&&Nn(j.i,L),D&&R.unskip_effect(j.e)):(j=Io(l,T?s:An??(An=Er()),q,H,L,o,r,a),T||(j.e.f|=ht),l.set(H,j)),h.add(H)}if(m===0&&i&&!x&&(T?x=dr(()=>i(s)):(x=dr(()=>i(An??(An=Er()))),x.f|=ht)),m>h.size&&Ga(),Fe&&m>0&&Pt(Rn()),!T)if(M.set(R,h),D){for(const[U,X]of l)h.has(U)||R.skip_effect(X.e);R.oncommit(g),R.ondiscard(c)}else g(R);y&&Dt(!0),e(N)}),E={effect:k,items:l,pending:M,outrogroups:null,fallback:x};T=!1,Fe&&(s=_t)}function ar(t){for(;t!==null&&(t.f&to)===0;)t=t.next;return t}function Fo(t,r,a,n,o){var q,H,j,U,X,K,re,w,C;var i=(n&ro)!==0,s=r.length,l=t.items,d=ar(t.effect.first),_,x=null,N,p=[],M=[],T,g,c,k;if(i)for(k=0;k<s;k+=1)T=r[k],g=o(T,k),c=l.get(g).e,(c.f&ht)===0&&((H=(q=c.nodes)==null?void 0:q.a)==null||H.measure(),(N??(N=new Set)).add(c));for(k=0;k<s;k+=1){if(T=r[k],g=o(T,k),c=l.get(g).e,t.outrogroups!==null)for(const O of t.outrogroups)O.pending.delete(c),O.done.delete(c);if((c.f&Ur)!==0&&(aa(c),i&&((U=(j=c.nodes)==null?void 0:j.a)==null||U.unfix(),(N??(N=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)lr(c,null,a);else{var E=x?x.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),kt(t,x,c),kt(t,c,E),lr(c,E,a),x=c,p=[],M=[],d=ar(x.next);continue}if(c!==d){if(_!==void 0&&_.has(c)){if(p.length<M.length){var m=M[0],y;x=m.prev;var S=p[0],h=p[p.length-1];for(y=0;y<p.length;y+=1)lr(p[y],m,a);for(y=0;y<M.length;y+=1)_.delete(M[y]);kt(t,S.prev,h.next),kt(t,x,S),kt(t,h,m),d=m,x=h,k-=1,p=[],M=[]}else _.delete(c),lr(c,d,a),kt(t,c.prev,c.next),kt(t,c,x===null?t.effect.first:x.next),kt(t,x,c),x=c;continue}for(p=[],M=[];d!==null&&d!==c;)(_??(_=new Set)).add(d),M.push(d),d=ar(d.next);if(d===null)continue}(c.f&ht)===0&&p.push(c),x=c,d=ar(c.next)}if(t.outrogroups!==null){for(const O of t.outrogroups)O.pending.size===0&&(Qr(t,fn(O.done)),(X=t.outrogroups)==null||X.delete(O));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||_!==void 0){var R=[];if(_!==void 0)for(c of _)(c.f&Ur)===0&&R.push(c);for(;d!==null;)(d.f&Ur)===0&&d!==t.fallback&&R.push(d),d=ar(d.next);var D=R.length;if(D>0){var L=(n&na)!==0&&s===0?a:null;if(i){for(k=0;k<D;k+=1)(re=(K=R[k].nodes)==null?void 0:K.a)==null||re.measure();for(k=0;k<D;k+=1)(C=(w=R[k].nodes)==null?void 0:w.a)==null||C.fix()}Lo(t,R,L)}}i&&sa(()=>{var O,I;if(N!==void 0)for(c of N)(I=(O=c.nodes)==null?void 0:O.a)==null||I.apply()})}function Io(t,r,a,n,o,i,s,l){var d=(s&Qa)!==0?(s&Za)===0?Ja(a,!1,!1):Mn(a):null,_=(s&Ya)!==0?Mn(o):null;return{v:d,i:_,e:dr(()=>(i(r,d??a,_??o,l),()=>{t.delete(n)}))}}function lr(t,r,a){if(t.nodes)for(var n=t.nodes.start,o=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var s=ia(n);if(i.before(n),n===o)return;n=s}}function kt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Dr(t,r,a=!1,n=!1,o=!1,i=!1){var s=t,l="";if(a){var d=t;Fe&&(s=Pt(Tt(d)))}ee(()=>{var _=la;if(l===(l=r()??"")){Fe&&Gt();return}if(a&&!Fe){_.nodes=null,d.innerHTML=l,l!==""&&Pr(Tt(d),d.lastChild);return}if(_.nodes!==null&&(oo(_.nodes.start,_.nodes.end),_.nodes=null),l!==""){if(Fe){_t.data;for(var x=Gt(),N=x;x!==null&&(x.nodeType!==ta||x.data!=="");)N=x,x=ia(x);if(x===null)throw so(),io;Pr(_t,N),s=Pt(x);return}var p=n?ua:o?lo:void 0,M=ca(n?"svg":o?"math":"template",p);M.innerHTML=l;var T=n||o?M:M.content;if(Pr(Tt(T),T.lastChild),n||o)for(;Tt(T);)s.before(Tt(T));else s.before(T)}})}function je(t,r,a,n,o){var l;Fe&&Gt();var i=(l=r.$$slots)==null?void 0:l[a],s=!1;i===!0&&(i=r.children,s=!0),i===void 0||i(t,s?()=>n:n)}function Do(t,r,a,n,o,i){let s=Fe;Fe&&Gt();var l=null;Fe&&_t.nodeType===co&&(l=_t,Gt());var d=Fe?_t:t,_=new To(d,!1);ea(()=>{const x=r()||null;var N=ua;if(x===null){_.ensure(null,null);return}return _.ensure(x,p=>{if(x){if(l=Fe?l:ca(x,N),Pr(l,l),n){Fe&&Po(x)&&l.append(document.createComment(""));var M=Fe?Tt(l):l.appendChild(Er());Fe&&(M===null?Dt(!1):Pt(M)),n(l,M)}la.nodes.end=l,p.before(l)}Fe&&Pt(p)}),()=>{}},uo),da(()=>{}),s&&(Dt(!0),Pt(d))}function zo(t,r,a){Ir(()=>{var n=Mr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Oo(t,r){var a=void 0,n;fa(()=>{a!==(a=r())&&(n&&(Nr(n),n=null),a&&(n=dr(()=>{Ir(()=>a(t))})))})}function ha(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(a=ha(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Ho(){for(var t,r,a=0,n="",o=arguments.length;a<o;a++)(t=arguments[a])&&(r=ha(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?Ho(t):t??""}const Tn=[...` 	
\r\f \v\uFEFF`];function jo(t,r,a){var n=t==null?"":""+t;if(a){for(var o of Object.keys(a))if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var l=s+i;(s===0||Tn.includes(n[s-1]))&&(l===n.length||Tn.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function Ln(t,r=!1){var a=r?" !important;":";",n="";for(var o of Object.keys(t)){var i=t[o];i!=null&&i!==""&&(n+=" "+o+": "+i+a)}return n}function Br(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vo(t,r){if(r){var a="",n,o;if(Array.isArray(r)?(n=r[0],o=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Br)),o&&d.push(...Object.keys(o).map(Br));var _=0,x=-1;const g=t.length;for(var N=0;N<g;N++){var p=t[N];if(l?p==="/"&&t[N-1]==="*"&&(l=!1):i?i===p&&(i=!1):p==="/"&&t[N+1]==="*"?l=!0:p==='"'||p==="'"?i=p:p==="("?s++:p===")"&&s--,!l&&i===!1&&s===0){if(p===":"&&x===-1)x=N;else if(p===";"||N===g-1){if(x!==-1){var M=Br(t.substring(_,x).trim());if(!d.includes(M)){p!==";"&&N++;var T=t.substring(_,N).trim();a+=" "+T+";"}}_=N+1,x=-1}}}}return n&&(a+=Ln(n)),o&&(a+=Ln(o,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Se(t,r,a,n,o,i){var s=t.__className;if(Fe||s!==a||s===void 0){var l=jo(a,n,i);(!Fe||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&o!==i)for(var d in i){var _=!!i[d];(o==null||_!==!!o[d])&&t.classList.toggle(d,_)}return i}function qr(t,r={},a,n){for(var o in a){var i=a[o];r[o]!==i&&(a[o]==null?t.style.removeProperty(o):t.style.setProperty(o,i,n))}}function Ze(t,r,a,n){var o=t.__style;if(Fe||o!==r){var i=Vo(r,n);(!Fe||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(qr(t,a==null?void 0:a[0],n[0]),qr(t,a==null?void 0:a[1],n[1],"important")):qr(t,a,n));return n}function Ar(t,r,a=!1){if(t.multiple){if(r==null)return;if(!ra(r))return fo();for(var n of t.options)n.selected=r.includes(ur(n));return}for(n of t.options){var o=ur(n);if(vo(o,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function pa(t){var r=new MutationObserver(()=>{Ar(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),da(()=>{r.disconnect()})}function Zr(t,r,a=r){var n=new WeakSet,o=!0;va(t,"change",i=>{var s=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(s),ur);else{var d=t.querySelector(s)??t.querySelector("option:not([disabled])");l=d&&ur(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Ir(()=>{var i=r();if(t===document.activeElement){var s=mt;if(n.has(s))return}if(Ar(t,i,o),o&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=ur(l),a(i))}t.__value=i,o=!1}),pa(t)}function ur(t){return"__value"in t?t.__value:t.value}const or=Symbol("class"),sr=Symbol("style"),ma=Symbol("is custom element"),_a=Symbol("is html"),Uo=gr?"link":"LINK",Bo=gr?"input":"INPUT",qo=gr?"option":"OPTION",Ko=gr?"select":"SELECT",Go=gr?"progress":"PROGRESS";function Ye(t){if(Fe){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;ke(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var o=t.checked;ke(t,"checked",null),t.checked=o}}};t.__on_r=a,sa(a),_o()}}function gn(t,r){var a=hn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Go)||(t.value=r??"")}function Wo(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ke(t,r,a,n){var o=hn(t);Fe&&(o[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Uo)||o[r]!==(o[r]=a)&&(r==="loading"&&(t[yo]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ba(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Xo(t,r,a,n,o=!1,i=!1){if(Fe&&o&&t.nodeName===Bo){var s=t,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Ye(s)}var d=hn(t),_=d[ma],x=!d[_a];let N=Fe&&_;N&&Dt(!1);var p=r||{},M=t.nodeName===qo;for(var T in r)T in a||(a[T]=null);a.class?a.class=dt(a.class):a[or]&&(a.class=null),a[sr]&&(a.style??(a.style=null));var g=ba(t);for(const h in a){let R=a[h];if(M&&h==="value"&&R==null){t.value=t.__value="",p[h]=R;continue}if(h==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Se(t,c,R,n,r==null?void 0:r[or],a[or]),p[h]=R,p[or]=a[or];continue}if(h==="style"){Ze(t,R,r==null?void 0:r[sr],a[sr]),p[h]=R,p[sr]=a[sr];continue}var k=p[h];if(!(R===k&&!(R===void 0&&t.hasAttribute(h)))){p[h]=R;var E=h[0]+h[1];if(E!=="$$")if(E==="on"){const D={},L="$$"+h;let q=h.slice(2);var m=Mo(q);if(Eo(q)&&(q=q.slice(0,-7),D.capture=!0),!m&&k){if(R!=null)continue;t.removeEventListener(q,p[L],D),p[L]=null}if(m)ue(q,t,R),Ge([q]);else if(R!=null){let H=function(j){p[h].call(this,j)};p[L]=Ro(q,t,H,D)}}else if(h==="style")ke(t,h,R);else if(h==="autofocus")po(t,!!R);else if(!_&&(h==="__value"||h==="value"&&R!=null))t.value=t.__value=R;else if(h==="selected"&&M)Wo(t,R);else{var y=h;x||(y=No(y));var S=y==="defaultValue"||y==="defaultChecked";if(R==null&&!_&&!S)if(d[h]=null,y==="value"||y==="checked"){let D=t;const L=r===void 0;if(y==="value"){let q=D.defaultValue;D.removeAttribute(y),D.defaultValue=q,D.value=D.__value=L?q:null}else{let q=D.defaultChecked;D.removeAttribute(y),D.defaultChecked=q,D.checked=L?q:!1}}else t.removeAttribute(h);else S||g.includes(y)&&(_||typeof R!="string")?(t[y]=R,y in d&&(d[y]=mo)):typeof R!="function"&&ke(t,y,R)}}}return N&&Dt(!0),p}function Fn(t,r,a=[],n=[],o=[],i,s=!1,l=!1){go(o,a,n,d=>{var _=void 0,x={},N=t.nodeName===Ko,p=!1;if(fa(()=>{var T=r(...d.map(e)),g=Xo(t,_,T,i,s,l);p&&N&&"value"in T&&Ar(t,T.value);for(let k of Object.getOwnPropertySymbols(x))T[k]||Nr(x[k]);for(let k of Object.getOwnPropertySymbols(T)){var c=T[k];k.description===ho&&(!_||c!==_[k])&&(x[k]&&Nr(x[k]),x[k]=dr(()=>Oo(t,()=>c))),g[k]=c}_=g}),N){var M=t;Ir(()=>{Ar(M,_.value,!0),pa(M)})}p=!0})}function hn(t){return t.__attributes??(t.__attributes={[ma]:t.nodeName.includes("-"),[_a]:t.namespaceURI===bo})}var In=new Map;function ba(t){var r=t.getAttribute("is")||t.nodeName,a=In.get(r);if(a)return a;In.set(r,a=[]);for(var n,o=t,i=Element.prototype;i!==o;){n=wo(o);for(var s in n)n[s].set&&a.push(s);o=xo(o)}return a}function tt(t,r,a=r){var n=new WeakSet;va(t,"input",async o=>{var i=o?t.defaultValue:t.value;if(i=Kr(t)?Gr(i):i,a(i),mt!==null&&n.add(mt),await Et(),i!==(i=r())){var s=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var _=t.value.length;s===l&&l===d&&_>d?(t.selectionStart=_,t.selectionEnd=_):(t.selectionStart=s,t.selectionEnd=Math.min(l,_))}}}),(Fe&&t.defaultValue!==t.value||Mr(r)==null&&t.value)&&(a(Kr(t)?Gr(t.value):t.value),mt!==null&&n.add(mt)),ko(()=>{var o=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Kr(t)&&o===Gr(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function Kr(t){var r=t.type;return r==="number"||r==="range"}function Gr(t){return t===""?null:+t}let xt=z(ce({type:"none",props:{},resolve:null}));function Yo(){return e(xt)}function st(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Qo(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Zo(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Jo(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Xe(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Dn(t,r="Confirm",a="OK",n="primary"){return new Promise(o=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:o},!0)})}function pn(t,r="",a="Input",n="",o=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:o},resolve:i},!0)})}var es=$('<div style="display:contents;"><!></div>');function Jt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=es(),o=b(n);ft(o,()=>r.children),v(n),zo(n,i=>a==null?void 0:a(i)),u(t,n)}var ts=$('<div class="text-xs text-muted font-light"> </div>'),rs=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function hr(t,r){Me(r,!0);const a=T=>{var g=rs(),c=b(g),k=b(c),E=b(k),m=b(E,!0);v(E);var y=P(E,2);{var S=L=>{var q=ts(),H=b(q,!0);v(q),ee(()=>ae(H,r.subtitle)),u(L,q)};Y(y,L=>{r.subtitle&&L(S)})}v(k);var h=P(k,2);ft(h,()=>r.children);var R=P(h,2),D=b(R);ft(D,()=>r.footer),v(R),v(c),v(g),ee(()=>{Se(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),ke(c,"aria-labelledby",r.titleId),ke(E,"id",r.titleId),ae(m,r.title)}),ue("keydown",g,s),ue("mousedown",g,d),ue("click",g,_),u(T,g)};let n=me(r,"maxWidth",3,"520px"),o=me(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():st(null)}function s(T){T.key==="Escape"?i():T.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(T){l=T.target.dataset.backdrop!==void 0}function _(T){const g=T.target.dataset.backdrop!==void 0;l&&g&&i(),l=!1}var x=be(),N=G(x);{var p=T=>{Jt(T,{children:(g,c)=>{a(g)}})},M=T=>{a(T)};Y(N,T=>{o()?T(p):T(M,-1)})}u(t,x),Ae()}Ge(["keydown","mousedown","click"]);var ns=$("<button><!></button>");function Pe(t,r){let a=me(r,"variant",3,"primary"),n=me(r,"size",3,"default"),o=me(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},s={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=ns(),d=b(l);ft(d,()=>r.children),v(l),ee(()=>{Se(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${s[a()]??""}`),l.disabled=o()}),ue("click",l,function(..._){var x;(x=r.onclick)==null||x.apply(this,_)}),u(t,l)}Ge(["click"]);var as=$("<!> <span><!></span>",1),os=$('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),ss=$('<input class="w-full"/>'),is=$('<div class="mb-4.5"><!></div>'),ls=$('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function cs(t,r){Me(r,!0);let a=me(r,"confirmLabel",3,"OK"),n=me(r,"confirmVariant",3,"primary"),o=me(r,"value",3,""),i=me(r,"placeholder",3,""),s=me(r,"multiline",3,!1);const l=o();let d=z(ce(l)),_=z(void 0),x=z(void 0);Ne(()=>{var M;r.mode==="prompt"&&e(_)?(e(_).focus(),"select"in e(_)&&e(_).select()):e(x)&&((M=e(x).querySelector("button"))==null||M.focus())});function N(){r.mode==="prompt"?st(e(d)):r.mode==="confirm"?st(!0):st()}function p(){r.mode==="confirm"?st(!1):r.mode==="prompt"?st(null):st()}{const M=g=>{var c=as(),k=G(c);{var E=S=>{Pe(S,{variant:"secondary",onclick:p,children:(h,R)=>{we();var D=Ve("Cancel");u(h,D)},$$slots:{default:!0}})};Y(k,S=>{r.mode!=="alert"&&S(E)})}var m=P(k,2),y=b(m);Pe(y,{get variant(){return n()},onclick:N,children:(S,h)=>{we();var R=Ve();ee(()=>ae(R,a())),u(S,R)},$$slots:{default:!0}}),v(m),nt(m,S=>f(x,S),()=>e(x)),u(g,c)};let T=V(()=>s()?void 0:N);hr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(T)},onCancel:p,footer:M,children:(g,c)=>{var k=ls(),E=G(k),m=b(E,!0);v(E);var y=P(E,2);{var S=h=>{var R=is(),D=b(R);{var L=H=>{var j=os();Co(j),nt(j,U=>f(_,U),()=>e(_)),ee(()=>ke(j,"placeholder",i())),tt(j,()=>e(d),U=>f(d,U)),u(H,j)},q=H=>{var j=ss();Ye(j),nt(j,U=>f(_,U),()=>e(_)),ee(()=>ke(j,"placeholder",i())),tt(j,()=>e(d),U=>f(d,U)),u(H,j)};Y(D,H=>{s()?H(L):H(q,-1)})}v(R),u(h,R)};Y(y,h=>{r.mode==="prompt"&&h(S)})}ee(()=>ae(m,r.message)),u(g,k)},$$slots:{footer:!0,default:!0}})}Ae()}var us=$('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Re(t,r){var a=us(),n=b(a),o=P(n);ft(o,()=>r.children),v(a),ee(()=>ae(n,`${r.text??""} `)),u(t,a)}function St(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function $t(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function xa(t,r){return localStorage.getItem(t)??r}function ds(t,r){r?localStorage.setItem(t,r):localStorage.removeItem(t)}function fs(){return{n:St("csauto_run_n",1),nt:St("csauto_run_nt",1),maxParallel:St("csauto_run_max_parallel",0)||null,backend:xa("csauto_run_backend","")||null}}function vs(t){$t("csauto_run_n",t.n),$t("csauto_run_nt",t.nt),t.maxParallel&&$t("csauto_run_max_parallel",t.maxParallel),ds("csauto_run_backend",t.backend??"")}function gs(){return{n:St("csauto_restart_n",1),nt:St("csauto_restart_nt",1),maxParallel:St("csauto_restart_max_parallel",0)||null,mode:xa("csauto_restart_mode","iterations"),value:St("csauto_restart_value",100)}}function hs(t){$t("csauto_restart_n",t.n),$t("csauto_restart_nt",t.nt),t.maxParallel&&$t("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),$t("csauto_restart_value",t.value)}function ps(){return{keepLast:St("csauto_clean_keep_last",1)}}function ms(t){$t("csauto_clean_keep_last",t.keepLast)}let zt=z(null);function _s(t){f(zt,t,!0)}function Ft(){return e(zt)}function cr(t){return e(zt)===null||e(zt).capabilities.includes(t)}function bs(t){return e(zt)===null||e(zt).control_actions.includes(t)}function xs(){var t;return((t=e(zt))==null?void 0:t.backends)??[]}const Jr="csauto_token";let ya=z(ce(localStorage.getItem(Jr)??""));function wa(){return e(ya)}function ka(t){f(ya,t,!0),t?localStorage.setItem(Jr,t):localStorage.removeItem(Jr)}let wr=null;async function mn(t,r={}){const a=new Headers(r.headers),n=wa();n&&a.set("X-CSAUTO-TOKEN",n);const o=await fetch(t,{...r,headers:a});if(o.status===401){wr||(wr=pn("API token required:",n,"Authentication"));const i=await wr;return wr=null,i===null?o:(ka(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return o}async function ct(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function zr(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function yt(t,r){const a=await mn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function Or(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function ys(t){return ct(`/api/launch_options?backend=${encodeURIComponent(t)}`)}function ws(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function zn(t){return ct(`/api/perf?${Or(t)}`)}function ks(){return ct("/api/app_config")}function Cs(t){return ct(`/api/residual_columns?${Or(t)}`).then(r=>r.columns??[])}function Ss(t,r,a={}){const n=new URLSearchParams;return t.forEach(o=>n.append("case",o)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),zr(`/api/residuals_svg?${n}`)}function Ca(t){return ct(`/api/restart_origin?${Or(t)}`)}function $s(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function Ps(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return zr(`/api/tail?${n}`)}function Es(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function Rs(t){return ct(`/api/resu_dirs?${Or(t)}`).then(r=>r.dirs??[])}function en(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function Ns(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function Ms(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(o=>n.append("column",o)),ct(`/api/probe_position?${n}`)}function As(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),zr(`/api/probe_svg?${r}`)}function Ts(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),zr(`/api/compare_runs?${r}`)}function Ls(){return yt("/api/sync_backends",{}).then(()=>{}).catch(()=>{})}function On(t){return yt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,backend:t.backend??void 0,options:t.options??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function Fs(t){return yt("/api/kill_case",{cases:t}).then(()=>{})}function kr(t){return yt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function Is(t){return yt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function Ds(t,r){return yt("/api/case_note",{case:t,note:r}).then(()=>{})}function zs(t,r){return yt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function Os(t){return yt("/api/open_gui",{case:t}).then(()=>{})}function Hs(){return ct("/api/settings/telemetry")}function js(t){return yt("/api/settings/telemetry",{enabled:t})}var Vs=$("<!> <!>",1),Us=$('<input type="number" min="1" step="1"/>'),Bs=$('<input type="number" min="1" step="1"/>'),qs=$('<input type="number" min="0" step="1"/>'),Ks=$("<option> </option>"),Gs=$("<select><option>This machine</option><!></select>"),Ws=$('<div class="mb-3"><!></div>'),Xs=$(`<p class="mb-3 rounded border border-amber-400/50 bg-amber-400/10 px-3 py-2 text-sm" role="status">About to submit <strong> </strong> <strong> </strong>, which runs on your own account and
      bills you for the compute. Results come back automatically.</p>`),Ys=$("<option> </option>"),Qs=$("<select></select>"),Zs=$('<div class="grid grid-cols-2 gap-2.5 mb-3"></div>'),Js=$('<p class="mb-3 text-sm opacity-75" role="status"> </p>'),ei=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <!> <!> <!> <!>',1);function ti(t,r){Me(r,!0);const a=fs(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=z(ce(a.n)),i=z(ce(a.nt)),s=z(ce(n));const l=xs().filter(M=>M!=="fake");let d=z(ce(l.includes(a.backend??"")?a.backend:"")),_=z(ce([])),x=z(!1),N=z(ce({}));Ne(()=>{const M=e(d);if(!M){f(_,[],!0),f(x,!1),f(N,{},!0);return}let T=!1;return ys(M).then(g=>{T||(f(_,g.options,!0),f(x,g.degraded,!0),f(N,Object.fromEntries(g.options.map(c=>[c.key,c.default])),!0))}).catch(()=>{T||(f(_,[],!0),f(x,!0),f(N,{},!0))}),()=>{T=!0}});async function p(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}const M={n:e(o),nt:e(i),maxParallel:e(s)||null,backend:e(d)||null,options:e(d)?e(N):void 0};vs(M),st(M)}{const M=c=>{var k=Vs(),E=G(k);Pe(E,{variant:"secondary",onclick:()=>st(null),children:(y,S)=>{we();var h=Ve("Cancel");u(y,h)},$$slots:{default:!0}});var m=P(E,2);Pe(m,{variant:"run",onclick:p,children:(y,S)=>{we();var h=Ve();ee(()=>ae(h,e(d)?`Run on ${e(d)}`:"Run")),u(y,h)},$$slots:{default:!0}}),u(c,k)};let T=V(()=>r.cases.length),g=V(()=>r.cases.length>1?"s":"");hr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(T)??""} case${e(g)??""} selected`},onConfirm:p,footer:M,children:(c,k)=>{var E=ei(),m=G(E),y=b(m);Re(y,{text:"MPI Ranks (n)",children:(K,re)=>{var w=Us();Ye(w),tt(w,()=>e(o),C=>f(o,C)),u(K,w)}});var S=P(y,2);Re(S,{text:"OMP Threads (nt)",children:(K,re)=>{var w=Bs();Ye(w),tt(w,()=>e(i),C=>f(i,C)),u(K,w)}});var h=P(S,2);Re(h,{text:"Max Parallel",children:(K,re)=>{var w=qs();Ye(w),tt(w,()=>e(s),C=>f(s,C)),u(K,w)}}),v(m);var R=P(m,2);{var D=K=>{var re=Ws(),w=b(re);Re(w,{text:"Run on",children:(C,O)=>{var I=Gs(),A=b(I);A.value=A.__value="";var F=P(A);He(F,16,()=>l,B=>B,(B,te)=>{var ie=Ks(),W=b(ie,!0);v(ie);var ne={};ee(()=>{ae(W,te),ne!==(ne=te)&&(ie.value=(ie.__value=te)??"")}),u(B,ie)}),v(I),Zr(I,()=>e(d),B=>f(d,B)),u(C,I)}}),v(re),u(K,re)};Y(R,K=>{l.length&&K(D)})}var L=P(R,2);{var q=K=>{var re=Xs(),w=P(b(re)),C=b(w,!0);v(w);var O=P(w),I=P(O),A=b(I,!0);v(I),we(),v(re),ee(()=>{ae(C,r.cases.length),ae(O,` case${r.cases.length>1?"s":""} to `),ae(A,e(d))}),u(K,re)};Y(L,K=>{e(d)&&K(q)})}var H=P(L,2);{var j=K=>{var re=Zs();He(re,21,()=>e(_),w=>w.key,(w,C)=>{Re(w,{get text(){return e(C).label},children:(O,I)=>{var A=Qs();He(A,21,()=>e(C).choices,([F,B])=>F,(F,B)=>{var te=V(()=>ga(e(B),2));let ie=()=>e(te)[0],W=()=>e(te)[1];var ne=Ys(),se=b(ne,!0);v(ne);var de={};ee(()=>{ae(se,W()),de!==(de=ie())&&(ne.value=(ne.__value=ie())??"")}),u(F,ne)}),v(A),Zr(A,()=>e(N)[e(C).key],F=>e(N)[e(C).key]=F),u(O,A)}})}),v(re),u(K,re)};Y(H,K=>{e(d)&&e(_).length&&K(j)})}var U=P(H,2);{var X=K=>{var re=Js(),w=b(re);v(re),ee(()=>ae(w,`Could not reach ${e(d)??""} to list what is available. The run will use the defaults.`)),u(K,re)};Y(U,K=>{e(d)&&e(x)&&K(X)})}u(c,E)},$$slots:{footer:!0,default:!0}})}Ae()}var ri=$("<!> <!>",1),ni=$('<input type="number" min="1" step="1"/>'),ai=$('<input type="number" min="1" step="1"/>'),oi=$('<input type="number" min="0" step="1"/>'),si=$("<select><option>Iterations</option><option>Physical time</option></select>"),ii=$('<input type="number"/>'),li=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function ci(t,r){Me(r,!0);const a=gs(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=z(ce(a.n)),i=z(ce(a.nt)),s=z(ce(n)),l=z(ce(a.mode)),d=z(ce(a.value)),_=V(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),x=V(()=>e(l)==="iterations"?"1":"any"),N=V(()=>e(l)==="iterations"?"1":"0");async function p(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await Xe("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await Xe("Iterations must be an integer.","Invalid value");return}const M={n:e(o),nt:e(i),maxParallel:e(s)||null,restartMode:e(l),restartValue:e(d)};hs({n:e(o),nt:e(i),maxParallel:e(s)||null,mode:e(l),value:e(d)}),st(M)}{const M=c=>{var k=ri(),E=G(k);Pe(E,{variant:"secondary",onclick:()=>st(null),children:(y,S)=>{we();var h=Ve("Cancel");u(y,h)},$$slots:{default:!0}});var m=P(E,2);Pe(m,{variant:"warning",onclick:p,children:(y,S)=>{we();var h=Ve("Restart");u(y,h)},$$slots:{default:!0}}),u(c,k)};let T=V(()=>r.cases.length),g=V(()=>r.cases.length>1?"s":"");hr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(T)??""} case${e(g)??""} selected`},onConfirm:p,footer:M,children:(c,k)=>{var E=li(),m=G(E),y=b(m);Re(y,{text:"MPI Ranks (n)",children:(q,H)=>{var j=ni();Ye(j),tt(j,()=>e(o),U=>f(o,U)),u(q,j)}});var S=P(y,2);Re(S,{text:"OMP Threads (nt)",children:(q,H)=>{var j=ai();Ye(j),tt(j,()=>e(i),U=>f(i,U)),u(q,j)}});var h=P(S,2);Re(h,{text:"Max Parallel",children:(q,H)=>{var j=oi();Ye(j),tt(j,()=>e(s),U=>f(s,U)),u(q,j)}}),v(m);var R=P(m,2),D=b(R);Re(D,{text:"Stop criterion",children:(q,H)=>{var j=si(),U=b(j);U.value=U.__value="iterations";var X=P(U);X.value=X.__value="physical_time",v(j),Zr(j,()=>e(l),K=>f(l,K)),u(q,j)}});var L=P(D,2);Re(L,{get text(){return e(_)},children:(q,H)=>{var j=ii();Ye(j),ee(()=>{ke(j,"min",e(N)),ke(j,"step",e(x))}),tt(j,()=>e(d),U=>f(d,U)),u(q,j)}}),v(R),u(c,E)},$$slots:{footer:!0,default:!0}})}Ae()}function Le(t,r){let a=me(r,"size",3,14);var n=be(),o=G(n);$o(o,()=>r.icon,(i,s)=>{s(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const Hn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var fi=Ht("<svg><!><!></svg>");function Be(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]),n=Oe(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let o=me(r,"name",8,void 0),i=me(r,"color",8,"currentColor"),s=me(r,"size",8,24),l=me(r,"strokeWidth",8,2),d=me(r,"absoluteStrokeWidth",8,!1),_=me(r,"iconNode",24,()=>[]);Ao();var x=fi();Fn(x,(M,T,g)=>({...ui,...M,...n,width:s(),height:s(),stroke:i(),"stroke-width":T,class:g}),[()=>di(n)?void 0:{"aria-hidden":"true"},()=>(Ut(d()),Ut(l()),Ut(s()),Mr(()=>d()?Number(l())*24/Number(s()):l())),()=>(Ut(Hn),Ut(o()),Ut(a),Mr(()=>Hn("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var N=b(x);He(N,1,_,vn,(M,T)=>{var g=V(()=>ga(e(T),2));let c=()=>e(g)[0],k=()=>e(g)[1];var E=be(),m=G(E);Do(m,c,!0,(y,S)=>{Fn(y,()=>({...k()}))}),u(M,E)});var p=P(N);je(p,r,"default",{}),v(x),u(t,x),Ae()}function vi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Be(t,Ue({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function gi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Be(t,Ue({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function hi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Be(t,Ue({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function _n(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Be(t,Ue({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function pi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Be(t,Ue({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function mi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Be(t,Ue({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function _i(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Be(t,Ue({name:"circle-x"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function pr(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Be(t,Ue({name:"download"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function bi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Be(t,Ue({name:"droplets"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function xi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Be(t,Ue({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function yi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Be(t,Ue({name:"external-link"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function wi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Be(t,Ue({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function ki(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Be(t,Ue({name:"pause"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ci(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Be(t,Ue({name:"pen-line"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Si(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Be(t,Ue({name:"pencil"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Sa(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Be(t,Ue({name:"play"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function $i(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Be(t,Ue({name:"plus"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function er(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Be(t,Ue({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Pi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Be(t,Ue({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ei(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Be(t,Ue({name:"save"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ri(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Be(t,Ue({name:"settings"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ni(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Be(t,Ue({name:"trash-2"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=G(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}var Mi=$('<li role="option"> </li>'),Ai=$('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Ti=$('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Me(r,!0);let a=me(r,"value",3,""),n=me(r,"placeholder",3,"Select..."),o=me(r,"class",3,""),i=me(r,"buttonClass",3,""),s=z(!1),l=z(void 0),d=z(void 0),_=z(""),x=V(()=>{var L;return((L=r.options.find(q=>q.value===a()))==null?void 0:L.label)??n()});function N(L){var q;f(s,!1),(q=r.onchange)==null||q.call(r,L)}function p(){if(!e(l)||!e(d))return;const L=e(l).getBoundingClientRect(),q=e(d).offsetHeight,H=4,j=window.innerHeight-L.bottom-H,X=j<q&&L.top-H>j?L.top-H-q:L.bottom+H,K=Math.min(L.left,window.innerWidth-L.width);f(_,`position:fixed; top:${X}px; left:${K}px; width:${L.width}px; z-index:9999;`)}async function M(){f(s,!e(s)),e(s)&&(await Et(),p())}function T(L){L.key==="Escape"&&f(s,!1)}function g(L){e(s)&&e(l)&&!e(l).contains(L.target)&&e(d)&&!e(d).contains(L.target)&&f(s,!1)}var c=Ti();rt("mousedown",it,g),rt("keydown",it,T),rt("scroll",it,()=>{e(s)&&f(s,!1)});var k=G(c),E=b(k),m=b(E),y=b(m,!0);v(m);var S=P(m,2),h=b(S);Le(h,{get icon(){return _n},size:14}),v(S),v(E),nt(E,L=>f(l,L),()=>e(l)),v(k);var R=P(k,2);{var D=L=>{Jt(L,{children:(q,H)=>{var j=Ai();He(j,21,()=>r.options,U=>U.value,(U,X)=>{var K=Mi();ke(K,"tabindex",0);var re=b(K,!0);v(K),ee(()=>{ke(K,"aria-selected",e(X).value===a()),Se(K,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(X).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ae(re,e(X).label)}),ue("mousedown",K,w=>{w.stopPropagation(),N(e(X).value)}),u(U,K)}),v(j),nt(j,U=>f(d,U),()=>e(d)),ee(()=>Ze(j,e(_))),u(q,j)}})};Y(R,L=>{e(s)&&L(D)})}ee(()=>{Se(k,1,`relative inline-flex ${o()??""}`),Se(E,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),ke(E,"aria-expanded",e(s)),ae(y,e(x)),Se(S,1,`text-muted shrink-0 transition-transform duration-150 ${e(s)?"rotate-180":""}`)}),ue("mousedown",E,L=>{L.stopPropagation(),M()}),u(t,c),Ae()}Ge(["mousedown"]);var Li=Ht('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Fi=$('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),Ii=$('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),Di=$('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Wt(t,r){Me(r,!0);let a=me(r,"selected",19,()=>[]),n=me(r,"placeholder",3,"Select..."),o=me(r,"class",3,""),i=z(!1),s=z(void 0),l=z(void 0),d=z(""),_=V(()=>new Set(a())),x=V(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(H=>{var j;return((j=r.options.find(U=>U.value===H))==null?void 0:j.label)??H}).join(", "):`${a().length} selected`);function N(H){var U;const j=new Set(e(_));j.has(H)?j.delete(H):j.add(H),(U=r.onchange)==null||U.call(r,[...j])}function p(){var H;(H=r.onchange)==null||H.call(r,r.options.map(j=>j.value))}function M(){var H;(H=r.onchange)==null||H.call(r,[])}function T(){if(!e(s)||!e(l))return;const H=e(s).getBoundingClientRect(),j=e(l).offsetHeight,U=4,X=window.innerHeight-H.bottom-U,re=X<j&&H.top-U>X?H.top-U-j:H.bottom+U,w=Math.min(H.left,window.innerWidth-H.width);f(d,`position:fixed; top:${re}px; left:${w}px; min-width:${H.width}px; z-index:9999;`)}async function g(){f(i,!e(i)),e(i)&&(await Et(),T())}function c(H){e(i)&&e(s)&&!e(s).contains(H.target)&&e(l)&&!e(l).contains(H.target)&&f(i,!1)}function k(H){H.key==="Escape"&&f(i,!1)}var E=Di();rt("mousedown",it,c),rt("keydown",it,k),rt("scroll",it,()=>{e(i)&&f(i,!1)});var m=G(E),y=b(m),S=b(y),h=b(S,!0);v(S);var R=P(S,2),D=b(R);Le(D,{get icon(){return _n},size:14}),v(R),v(y),nt(y,H=>f(s,H),()=>e(s)),v(m);var L=P(m,2);{var q=H=>{Jt(H,{children:(j,U)=>{var X=Ii(),K=b(X),re=b(K),w=P(re,2);v(K);var C=P(K,2);He(C,17,()=>r.options,O=>O.value,(O,I)=>{var A=Fi(),F=b(A),B=b(F);{var te=se=>{var de=Li();u(se,de)},ie=V(()=>e(_).has(e(I).value));Y(B,se=>{e(ie)&&se(te)})}v(F);var W=P(F,2),ne=b(W,!0);v(W),v(A),ee(se=>{Se(F,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${se??""}`),ae(ne,e(I).label)},[()=>e(_).has(e(I).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),ue("mousedown",A,se=>{se.stopPropagation(),N(e(I).value)}),u(O,A)}),v(X),nt(X,O=>f(l,O),()=>e(l)),ee(()=>Ze(X,e(d))),ue("mousedown",re,O=>{O.stopPropagation(),p()}),ue("mousedown",w,O=>{O.stopPropagation(),M()}),u(j,X)}})};Y(L,H=>{e(i)&&H(q)})}ee(()=>{Se(m,1,`relative inline-flex ${o()??""}`),ke(y,"aria-expanded",e(i)),ae(h,e(x)),Se(R,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),ue("mousedown",y,H=>{H.stopPropagation(),g()}),u(t,E),Ae()}Ge(["mousedown"]);var zi=$("<!> <!>",1),Oi=$('<input type="number" min="0" step="1" class="w-[80px]"/>'),Hi=$('<span class="text-xs text-muted">Loading...</span>'),ji=$('<span class="text-xs text-muted">No folders found</span>'),Vi=$('<div class="mb-3"><!></div>'),Ui=$('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Bi(t,r){Me(r,!0);const a=ps();let n=z("keep_latest"),o=z(ce(a.keepLast)),i=z(ce([])),s=z(ce([])),l=z(!0),d=V(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const _=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let x=V(()=>e(i).map(p=>({value:p,label:p})));Jn(async()=>{try{f(i,await Rs(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function N(){if(e(d)&&e(s).length===0){await Xe("Please select at least one RESU folder.","Missing selection");return}const p={action:e(n)};e(n)==="keep_latest"?(p.keepLast=e(o),ms({keepLast:e(o)})):e(n)==="delete_all"?p.keepLast=0:e(n)==="keep_folder"?p.keepResu=e(s):e(n)==="delete_folder"&&(p.deleteResu=e(s)),st(p)}{const p=g=>{var c=zi(),k=G(c);Pe(k,{variant:"secondary",onclick:()=>st(null),children:(m,y)=>{we();var S=Ve("Cancel");u(m,S)},$$slots:{default:!0}});var E=P(k,2);Pe(E,{variant:"primary",onclick:N,children:(m,y)=>{we();var S=Ve("Clean");u(m,S)},$$slots:{default:!0}}),u(g,c)};let M=V(()=>r.cases.length),T=V(()=>r.cases.length>1?"s":"");hr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(M)??""} case${e(T)??""} selected`},footer:p,children:(g,c)=>{var k=Ui(),E=G(k),m=b(E);Re(m,{text:"Action",children:(D,L)=>{lt(D,{class:"w-[200px]",get options(){return _},get value(){return e(n)},onchange:q=>f(n,q,!0)})}});var y=P(m,2);{var S=D=>{Re(D,{text:"Keep last",children:(L,q)=>{var H=Oi();Ye(H),tt(H,()=>e(o),j=>f(o,j)),u(L,H)}})};Y(y,D=>{e(n)==="keep_latest"&&D(S)})}v(E);var h=P(E,2);{var R=D=>{var L=Vi(),q=b(L);Re(q,{text:"RESU folders",children:(H,j)=>{var U=be(),X=G(U);{var K=C=>{var O=Hi();u(C,O)},re=C=>{var O=ji();u(C,O)},w=C=>{Wt(C,{class:"w-full",get options(){return e(x)},get selected(){return e(s)},onchange:O=>f(s,O,!0),placeholder:"Select folders..."})};Y(X,C=>{e(l)?C(K):e(i).length===0?C(re,1):C(w,-1)})}u(H,U)}}),v(L),u(D,L)};Y(h,D=>{e(d)&&D(R)})}u(g,k)},$$slots:{footer:!0,default:!0}})}Ae()}function qi(t,r){Me(r,!0);let a=V(Yo);var n=be(),o=G(n);{var i=_=>{ti(_,{get cases(){return e(a).props.cases}})},s=_=>{ci(_,{get cases(){return e(a).props.cases}})},l=_=>{Bi(_,{get cases(){return e(a).props.cases}})},d=_=>{cs(_,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Y(o,_=>{e(a).type==="run"?_(i):e(a).type==="restart"?_(s,1):e(a).type==="clean"?_(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&_(d,3)})}u(t,n),Ae()}let fr=z(ce([])),Ki=0;function Gi(){return e(fr)}function Cr(t,r="success",a=3500){const n=++Ki;f(fr,[...e(fr),{id:n,message:t,variant:r}],!0),setTimeout(()=>$a(n),a)}function $a(t){f(fr,e(fr).filter(r=>r.id!==t),!0)}var Wi=$('<div role="status"> </div>'),Xi=$('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Yi(t,r){Me(r,!0);let a=V(Gi);Jt(t,{children:(n,o)=>{var i=Xi();He(i,21,()=>e(a),s=>s.id,(s,l)=>{var d=Wi(),_=b(d,!0);v(d),ee(()=>{Se(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ae(_,e(l).message)}),ue("click",d,()=>$a(e(l).id)),u(s,d)}),v(i),u(n,i)}}),Ae()}Ge(["click"]);var Qi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Zi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Ji=$('<span role="checkbox"><!></span>'),el=$("<span> </span><!>",1),tl=$("<!><span> </span>",1),rl=$('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function Ot(t,r){Me(r,!0);const a=g=>{var c=Ji(),k=b(c);{var E=y=>{var S=Qi();ee(()=>Ze(S,`width: ${s()-4}px; height: ${s()-4}px;`)),u(y,S)},m=y=>{var S=Zi();ee(()=>Ze(S,`width: ${s()-4}px; height: ${s()-4}px;`)),u(y,S)};Y(k,y=>{n()&&!o()?y(E):o()&&y(m,1)})}v(c),ee(()=>{Se(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||o()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${s()??""}px; height: ${s()??""}px;`),ke(c,"aria-checked",o()?"mixed":n()),ke(c,"aria-disabled",i()),ke(c,"tabindex",i()?-1:0)}),ue("click",c,_),ue("keydown",c,x),u(g,c)};let n=me(r,"checked",3,!1),o=me(r,"indeterminate",3,!1),i=me(r,"disabled",3,!1),s=me(r,"size",3,16),l=me(r,"label",3,""),d=me(r,"labelFirst",3,!1);function _(g){var k;if(g.stopPropagation(),i())return;const c=o()?!0:!n();(k=r.onchange)==null||k.call(r,c)}function x(g){(g.key===" "||g.key==="Enter")&&(g.preventDefault(),g.stopPropagation(),_(g))}var N=be(),p=G(N);{var M=g=>{var c=rl(),k=b(c);{var E=y=>{var S=el(),h=G(S),R=b(h,!0);v(h);var D=P(h);a(D),ee(()=>ae(R,l())),u(y,S)},m=y=>{var S=tl(),h=G(S);a(h);var R=P(h),D=b(R,!0);v(R),ee(()=>ae(D,l())),u(y,S)};Y(k,y=>{d()?y(E):y(m,-1)})}v(c),ue("click",c,_),ue("keydown",c,x),u(g,c)},T=g=>{a(g)};Y(p,g=>{l()?g(M):g(T,-1)})}u(t,N),Ae()}Ge(["click","keydown"]);function bn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Hr(t,r){localStorage.setItem(t,JSON.stringify(r))}const tn=new Map;function mr(t,r,a){vt(t),tn.set(t,setInterval(r,a))}function vt(t){const r=tn.get(t);r!==void 0&&(clearInterval(r),tn.delete(t))}const Lt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},nl=["status","plot","probe","tail","errors"],Wr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ir=bn("csauto_refresh_rates",{});let bt=z(ce({status:ir.status??Lt.status,tail:ir.tail??Lt.tail,plot:ir.plot??Lt.plot,probe:ir.probe??Lt.probe,errors:ir.errors??Lt.errors}));function al(){return e(bt)}function ol(t,r){f(bt,{...e(bt),[t]:r},!0),Hr("csauto_refresh_rates",e(bt))}function sl(){return e(bt).status}function jn(){return e(bt).tail}function Vn(){return e(bt).plot}function il(){return e(bt).probe}function Un(){return e(bt).errors}const rn=new Set;function _r(t){return rn.add(t),()=>rn.delete(t)}function ll(){rn.forEach(t=>t())}const nn=bn("csauto_autorefresh_enabled",{});function tr(t){return nn[t]??!0}function rr(t,r){nn[t]=r,Hr("csauto_autorefresh_enabled",nn)}var cl=$("<!> <!>",1),ul=$('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),dl=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),fl=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function vl(t,r){Me(r,!0);let a=z(ce(wa())),n=z(ce({...al()})),o=z(!0),i=z(!1);Ne(()=>{Hs().then(_=>{f(o,_.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function s(_){const{min:x}=Wr[_];let N=e(n)[_];(typeof N!="number"||isNaN(N))&&(N=Lt[_]),f(n,{...e(n),[_]:Math.max(x,Math.round(N))},!0)}function l(_,x){const N=x.target,p=N.value.replace(/[^0-9]/g,""),M=parseInt(p,10);isNaN(M)?p===""&&f(n,{...e(n),[_]:Wr[_].min},!0):f(n,{...e(n),[_]:M},!0),N.value=String(e(n)[_])}function d(){ka(e(a));for(const _ of Object.keys(e(n)))s(_),ol(_,e(n)[_]);e(i)&&js(e(o)).catch(()=>{}),r.onClose()}hr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:x=>{var N=cl(),p=G(N);Pe(p,{variant:"secondary",get onclick(){return r.onClose},children:(T,g)=>{we();var c=Ve("Cancel");u(T,c)},$$slots:{default:!0}});var M=P(p,2);Pe(M,{variant:"primary",onclick:d,children:(T,g)=>{we();var c=Ve("Save");u(T,c)},$$slots:{default:!0}}),u(x,N)},children:(x,N)=>{var p=fl(),M=G(p),T=P(b(M),2);Ye(T),v(M);var g=P(M,2),c=b(g),k=P(b(c),2);v(c);var E=P(c,2);He(E,20,()=>nl,S=>S,(S,h)=>{const R=V(()=>Wr[h]);var D=ul(),L=b(D),q=b(L),H=b(q,!0);v(q);var j=P(q,2),U=b(j);v(j),v(L);var X=P(L,2),K=b(X);Ye(K),we(2),v(X),v(D),ee(()=>{ae(H,e(R).label),ae(U,`min ${e(R).min??""}ms`),gn(K,e(n)[h])}),ue("input",K,re=>l(h,re)),rt("blur",K,()=>s(h)),u(S,D)}),v(E),v(g);var m=P(g,2);{var y=S=>{var h=dl(),R=P(b(h),2);Ot(R,{get checked(){return e(o)},onchange:D=>f(o,D,!0),label:"Send anonymous usage statistics"}),v(h),u(S,h)};Y(m,S=>{e(i)&&S(y)})}tt(T,()=>e(a),S=>f(a,S)),ue("click",k,()=>f(n,{...Lt},!0)),u(x,p)},$$slots:{footer:!0,default:!0}}),Ae()}Ge(["click","input"]);const gl=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,hl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";var pl=$('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),ml=$('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),_l=$('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),bl=$('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function xl(t,r){Me(r,!0);let a=V(()=>r.shownCases!==r.totalCases),n=z(!1);var o=bl(),i=G(o),s=b(i),l=b(s);{var d=I=>{var A=pl();ee(()=>ke(A,"src",gl)),u(I,A)},_=V(()=>{var I;return!Ft()||((I=Ft())==null?void 0:I.solver)==="code_saturne"}),x=I=>{var A=ml();ee(()=>ke(A,"src",hl)),u(I,A)},N=V(()=>{var I;return((I=Ft())==null?void 0:I.solver)==="code_aster"}),p=I=>{var A=_l(),F=b(A,!0);v(A),ee(B=>ae(F,B),[()=>{var B;return(B=Ft())==null?void 0:B.solver}]),u(I,A)};Y(l,I=>{e(_)?I(d):e(N)?I(x,1):I(p,-1)})}v(s);var M=P(s,2),T=b(M),g=b(T),c=b(g);{var k=I=>{var A=Ve();ee(()=>ae(A,`${r.shownCases??""}/`)),u(I,A)};Y(c,I=>{e(a)&&I(k)})}var E=P(c,1,!0);v(g);var m=P(g,2),y=b(m,!0);v(m),v(T);var S=P(T,2),h=b(S),R=b(h);{var D=I=>{var A=Ve();ee(()=>ae(A,`${r.shownRunning??""}/`)),u(I,A)};Y(R,I=>{e(a)&&I(D)})}var L=P(R,1,!0);v(h),we(2),v(S);var q=P(S,2),H=b(q),j=b(H);{var U=I=>{var A=Ve();ee(()=>ae(A,`${r.shownConverged??""}/`)),u(I,A)};Y(j,I=>{e(a)&&I(U)})}var X=P(j,1,!0);v(H),we(2),v(q),v(M);var K=P(M,2),re=b(K),w=b(re);Le(w,{get icon(){return Ri},size:18}),v(re),v(K),v(i);var C=P(i,2);{var O=I=>{vl(I,{onClose:()=>f(n,!1)})};Y(C,I=>{e(n)&&I(O)})}ee(()=>{ae(E,r.totalCases),ae(y,r.totalCases===1?"case":"cases"),ae(L,r.totalRunning),ae(X,r.totalConverged)}),ue("click",re,()=>f(n,!0)),u(t,o),Ae()}Ge(["click"]);const yl=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var wl=$('<div class="text-xs text-muted font-normal"> </div>'),kl=$('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),Cl=$("<div><!> <!></div>"),Sl=$('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),$l=$('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),Pl=$('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function jt(t,r){let a=me(r,"eyebrow",3,""),n=me(r,"title",3,""),o=me(r,"wide",3,!1);var i=Pl(),s=P(b(i),2);{var l=_=>{var x=$l(),N=b(x);{var p=c=>{var k=be(),E=G(k);ft(E,()=>r.titleSlot),u(c,k)},M=c=>{var k=Cl(),E=b(k);{var m=h=>{var R=wl(),D=b(R,!0);v(R),ee(()=>ae(D,a())),u(h,R)};Y(E,h=>{a()&&h(m)})}var y=P(E,2);{var S=h=>{var R=kl(),D=b(R,!0);v(R),ee(()=>ae(D,n())),u(h,R)};Y(y,h=>{n()&&h(S)})}v(k),u(c,k)};Y(N,c=>{r.titleSlot?c(p):c(M,-1)})}var T=P(N,2);{var g=c=>{var k=Sl(),E=b(k);ft(E,()=>r.actions),v(k),u(c,k)};Y(T,c=>{r.actions&&c(g)})}v(x),u(_,x)};Y(s,_=>{(a()||n()||r.titleSlot||r.actions)&&_(l)})}var d=P(s,2);ft(d,()=>r.children),v(i),ee(()=>{Se(i,1,`${o()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),ke(i,"id",r.id)}),u(t,i)}function nr(t,r){Me(r,!0);let a=me(r,"checked",15,!0);Ne(()=>{a()?mr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),vr(()=>vt(r.name)),Ot(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Ae()}var El=$("<!> ",1),Rl=$('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),Nl=$('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),Ml=$('<span class="inline-flex"><!></span> <!>',1);function Al(t,r){Me(r,!0);let a=me(r,"label",3,"More"),n=z(!1),o=z(void 0),i=z(void 0),s=z("");function l(){if(!e(o)||!e(i))return;const c=e(o).getBoundingClientRect(),k=e(i).offsetHeight,E=4,m=window.innerHeight-c.bottom-E,S=m<k&&c.top-E>m?c.top-E-k:c.bottom+E,h=Math.min(c.left,window.innerWidth-180);f(s,`position:fixed; top:${S}px; left:${h}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Et(),l())}function _(c){c.disabled||(f(n,!1),c.onClick())}function x(c){e(n)&&e(o)&&!e(o).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var N=Ml();rt("mousedown",it,x),rt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),rt("scroll",it,()=>{e(n)&&f(n,!1)});var p=G(N),M=b(p);Pe(M,{variant:"secondary",size:"sm",onclick:d,children:(c,k)=>{var E=El(),m=G(E);Le(m,{get icon(){return xi}});var y=P(m);ee(()=>ae(y,` ${a()??""}`)),u(c,E)},$$slots:{default:!0}}),v(p),nt(p,c=>f(o,c),()=>e(o));var T=P(p,2);{var g=c=>{Jt(c,{children:(k,E)=>{var m=Nl();He(m,21,()=>r.items,y=>y.label,(y,S)=>{var h=Rl(),R=b(h),D=b(R);Le(D,{get icon(){return e(S).icon},size:14});var L=P(D);v(R),v(h),ee(()=>{R.disabled=e(S).disabled,ke(R,"aria-disabled",e(S).disabled),Se(R,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(S).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ae(L,` ${e(S).label??""}`)}),ue("mousedown",R,q=>{q.stopPropagation(),_(e(S))}),u(y,h)}),v(m),nt(m,y=>f(i,y),()=>e(i)),ee(()=>Ze(m,e(s))),u(k,m)}})};Y(T,c=>{e(n)&&c(g)})}u(t,N),Ae()}Ge(["mousedown"]);const It=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"},{key:"backend_execution_time_s",label:"Cloud Time (s)"},{key:"backend_core_count",label:"Cloud Cores"}];let Xt=z(ce([])),Tr=z(ce([])),pt=z(ce(new Set)),br=z(""),xn=z(""),Rt=z(ce([])),ot=z(ce([])),Yt=z(""),Pa=z(!0),Tl=z(!0),Kt=z(ce(bn("csauto_status_views",{}))),yn=z(ce(localStorage.getItem("csauto_status_view_selected")??""));function wn(){return e(Xt)}function kn(){return e(Tr)}function Bt(){return e(pt)}function Bn(){return e(br)}function an(){return e(xn)}function Ll(){return e(Rt)}function Fl(){return e(Rt).filter(t=>e(Tr).includes(t))}function Il(){return e(Rt).filter(t=>It.some(r=>r.key===t))}function Dl(){return e(ot)}function zl(){return e(Yt)}function Ol(){return e(Pa)}function qn(){return e(Kt)}function Hl(){return e(yn)}function jl(t){f(Xt,t,!0)}function Vl(t){const r=e(Tr).length===0&&t.length>0;f(Tr,t,!0),r&&e(Rt).length===0&&f(Rt,[...t,...It.map(a=>a.key)],!0)}function Ul(t){f(br,t,!0)}function Kn(t){f(Rt,t,!0)}function Bl(t){f(Yt,t,!0)}function ql(t){f(Pa,t,!0)}function Kl(t){f(Tl,t,!0)}function Cn(t){f(yn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function on(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(br,t,!0),f(xn,t,!0)}function Ea(t){f(pt,new Set([t]),!0),f(br,t,!0),f(xn,t,!0)}function sn(t,r,a){const n=a.indexOf(t),o=a.indexOf(r);if(n<0||o<0)return;const[i,s]=n<o?[n,o]:[o,n],l=new Set(e(pt));for(let d=i;d<=s;d++)l.add(a[d]);f(pt,l,!0),f(br,r,!0)}function Gn(t){f(pt,new Set(t),!0)}function Wn(){f(pt,new Set,!0)}function Gl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function Ra(){if(!e(Yt).trim())return e(Xt);const t=e(Yt).toLowerCase().trim().split(/\s+/);return e(Xt).filter(r=>{const a=Gl(r);return t.every(n=>a.includes(n))})}function Wl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Xn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;if(r==="backend_execution_time_s")return t.backend_execution_time_s??0;if(r==="backend_core_count")return t.backend_core_count??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Wl(a):""}function Xl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Na(){const t=Ra();return e(ot).length===0?t:[...t].sort((r,a)=>{for(const n of e(ot)){const o=Xn(r,n.key),i=Xn(a,n.key),s=Xl(o,i);if(s!==0)return n.dir==="asc"?s:-s}return 0})}function Rr(){return Na().map(t=>t.case_id)}function Yl(t,r){const a=e(ot).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(ot)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(ot,n,!0)}else f(ot,[...e(ot),{key:t,dir:"asc"}],!0);else a>=0&&e(ot).length===1?f(ot,[{key:t,dir:e(ot)[0].dir==="asc"?"desc":"asc"}],!0):f(ot,[{key:t,dir:"asc"}],!0)}function Ql(){return{visibleColumns:[...e(Rt)],search:e(Yt),sorts:e(ot).map(t=>({...t}))}}function Zl(t){f(Rt,[...t.visibleColumns],!0),f(Yt,t.search,!0),f(ot,t.sorts.map(r=>({...r})),!0)}function Jl(t){f(Kt,{...e(Kt),[t]:Ql()},!0),Hr("csauto_status_views",e(Kt)),Cn(t)}function ec(t){const r={...e(Kt)};delete r[t],f(Kt,r,!0),Hr("csauto_status_views",r),e(yn)===t&&Cn("")}function Sr(){const t=new Set;for(const r of e(Xt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Yn(){for(const t of e(Xt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function tc(t,r){const a=r.length,n=t.length,o=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,s=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:o,shownRunning:i,totalConverged:s,shownConverged:l}}var rc=$('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),nc=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function ac(t,r){Me(r,!0);let a=me(r,"initialName",3,""),n=V(kn),o=z(ce(a())),i=z(ce(new Set(r.initialColumns??[...e(n),...It.map(U=>U.key)])));function s(U){const X=new Set(e(i));X.has(U)?X.delete(U):X.add(U),f(i,X,!0)}function l(U,X){const K=new Set(e(i));U.forEach(re=>X?K.add(re):K.delete(re)),f(i,K,!0)}function d(){const U=e(o).trim();U&&r.onSave(U,[...e(i)])}function _(U){U.key==="Escape"&&r.onCancel()}function x(U){U.target.dataset.backdrop!==void 0&&r.onCancel()}let N=z(void 0);Ne(()=>{var U,X;(U=e(N))==null||U.focus(),(X=e(N))==null||X.select()});var p=nc(),M=b(p),T=b(M),g=b(T,!0);v(T);var c=P(T,2),k=P(b(c),2);Ye(k),nt(k,U=>f(N,U),()=>e(N)),v(c);var E=P(c,2);{var m=U=>{var X=rc(),K=b(X),re=P(b(K),2),w=b(re),C=P(w,2);v(re),v(K);var O=P(K,2);He(O,20,()=>e(n),I=>I,(I,A)=>{{let F=V(()=>e(i).has(A));Ot(I,{get checked(){return e(F)},onchange:()=>s(A),size:14,get label(){return A}})}}),v(O),v(X),ue("click",w,()=>l(e(n),!0)),ue("click",C,()=>l(e(n),!1)),u(U,X)};Y(E,U=>{e(n).length>0&&U(m)})}var y=P(E,2),S=b(y),h=P(b(S),2),R=b(h),D=P(R,2);v(h),v(S);var L=P(S,2);He(L,21,()=>It,U=>U.key,(U,X)=>{{let K=V(()=>e(i).has(e(X).key));Ot(U,{get checked(){return e(K)},onchange:()=>s(e(X).key),size:14,get label(){return e(X).label}})}}),v(L),v(y);var q=P(y,2),H=b(q);Pe(H,{variant:"secondary",get onclick(){return r.onCancel},children:(U,X)=>{we();var K=Ve("Cancel");u(U,K)},$$slots:{default:!0}});var j=P(H,2);{let U=V(()=>!e(o).trim());Pe(j,{variant:"primary",onclick:d,get disabled(){return e(U)},children:(X,K)=>{we();var re=Ve("Save");u(X,re)},$$slots:{default:!0}})}v(q),v(M),v(p),ee(()=>ae(g,r.mode==="create"?"New view":"Edit view")),ue("keydown",p,_),ue("click",p,x),tt(k,()=>e(o),U=>f(o,U)),ue("click",R,()=>l(It.map(U=>U.key),!0)),ue("click",D,()=>l(It.map(U=>U.key),!1)),u(t,p),Ae()}Ge(["keydown","click"]);var oc=$('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function sc(t,r){Me(r,!0);let a=V(()=>Object.keys(qn())),n=z(ce(Hl())),o=z(!1),i=z("create"),s=V(()=>[{value:"",label:"All columns"},...e(a).map(S=>({value:S,label:S}))]);function l(S){if(f(n,S,!0),Cn(S),S==="")Kn([...kn(),...It.map(h=>h.key)]);else{const h=qn();h[S]&&Zl(h[S])}}function d(){f(i,"edit"),f(o,!0)}function _(){f(i,"create"),f(o,!0)}function x(S,h){Kn(h),e(i)==="edit"&&e(n)&&S!==e(n)&&ec(e(n)),Jl(S),f(n,S,!0),f(o,!1)}function N(){f(o,!1)}var p=oc(),M=G(p),T=b(M);lt(T,{class:"w-[140px]",get options(){return e(s)},get value(){return e(n)},onchange:l});var g=P(T,2),c=b(g);Le(c,{get icon(){return Si},size:14}),v(g);var k=P(g,2),E=b(k);Le(E,{get icon(){return $i},size:14}),v(k),v(M);var m=P(M,2);{var y=S=>{Jt(S,{children:(h,R)=>{{let D=V(()=>e(i)==="edit"?e(n):""),L=V(Ll);ac(h,{get mode(){return e(i)},get initialName(){return e(D)},get initialColumns(){return e(L)},onSave:x,onCancel:N})}}})};Y(m,S=>{e(o)&&S(y)})}ue("click",g,d),ue("click",k,_),u(t,p),Ae()}Ge(["click"]);var ic=$('<th><div class="flex items-center justify-center h-full"><!></div></th>'),lc=$("<th></th>"),cc=$('<span style="margin-left: 4px; font-size: 9px;"> </span>'),uc=$('<th role="button" tabindex="0"> <!></th>'),dc=$('<td><div class="flex items-center justify-center h-full"><!></div></td>'),fc=$("<td><span> </span></td>"),vc=$('<span class="text-muted"><!></span>'),gc=$('<td role="button" tabindex="0"><!></td>'),hc=$("<!> Open GUI",1),pc=$("<td><!></td>"),mc=$("<td> </td>"),_c=$("<tr></tr>"),bc=$('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function xc(t,r){Me(r,!0);let a=V(()=>r.rows.length>0&&r.rows.every(w=>e(_).has(w.case_id))),n=V(()=>r.rows.some(w=>e(_).has(w.case_id))),o=V(()=>e(n)&&!e(a)),i=V(Fl),s=V(()=>new Set(Il())),l=V(Dl),d=V(Ol),_=V(Bt),x=V(()=>{const w=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(s).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],C=e(i).map(F=>({key:F,label:F,kind:"doe"})),I=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"},{key:"backend_execution_time_s",label:"Cloud Time (s)",kind:"calc"},{key:"backend_core_count",label:"Cloud Cores",kind:"calc"}].filter(F=>e(s).has(F.key)),A=cr("gui")?[{key:"_actions",label:"",kind:"meta",sticky:"right"}]:[];return[...w,...C,...I,...A]});function N(w){const C=e(l).findIndex(I=>I.key===w);if(C<0)return"";const O=e(l)[C].dir==="asc"?"▲":"▼";return e(l).length>1?`${O}${C+1}`:O}function p(w,C){w!=="_actions"&&Yl(w,C.ctrlKey||C.metaKey)}function M(w,C){C.shiftKey?sn(an()||w,w,Rr()):C.ctrlKey||C.metaKey?on(w):Ea(w)}function T(w,C){var I;const O=((I=w.status)==null?void 0:I.toUpperCase())??"";O!=="DONE"&&O!=="FAILED"||(C.preventDefault(),r.onContextMenu(w.case_id,C.clientX,C.clientY,w.convergence??""))}async function g(w){const C=w.note??"",O=await pn("Case note:",C,`Note — ${w.case_id}`,"",!0);if(O!==null)try{await Ds(w.case_id,O)}catch(I){await Xe(`Failed to set note: ${I instanceof Error?I.message:I}`,"Error")}}async function c(w){try{await Os(w)}catch(C){await Xe(`Failed to open GUI: ${C instanceof Error?C.message:C}`,"Error")}}function k(w,C){const O=(w==null?void 0:w.toUpperCase())??"";return(O==="DONE"||O==="FAILED")&&C==="converged"?"CONVERGED":(O==="DONE"||O==="FAILED")&&C==="not_converged"?"NOT CONVERGED":O}function E(w,C){const O=(w==null?void 0:w.toUpperCase())??"";return(O==="DONE"||O==="FAILED")&&C==="converged"?"status-converged":(O==="DONE"||O==="FAILED")&&C==="not_converged"?"status-not-converged":O==="RUNNING"?"status-running":O==="DONE"?"status-done":O==="FAILED"?"status-failed":O==="PREPARED"?"status-prepared":"status-unknown"}function m(w){return e(_).has(w.case_id)?"row-selected":""}function y(w,C){var O;return C.key==="case_id"?w.case_id:C.key==="nprocs"?w.nprocs!=null?String(w.nprocs):"":C.key==="nt"?w.nt!=null?String(w.nt):"":C.key==="last_iter"?w.last_iter!=null?String(w.last_iter):"":C.key==="duration"?w.duration??"":C.key==="last_mod"?S(w.last_mod):C.key==="resu_size_mb"?w.resu_size_mb!=null?String(w.resu_size_mb):"":C.key==="backend_execution_time_s"?w.backend_execution_time_s!=null?w.backend_execution_time_s.toFixed(1):"":C.key==="backend_core_count"?w.backend_core_count!=null?String(w.backend_core_count):"":C.kind==="doe"?((O=w.doe)==null?void 0:O[C.key])!=null&&String(w.doe[C.key])!==""?String(w.doe[C.key]):"—":""}function S(w){if(!w)return"";try{const C=new Date(w),O=new Date,I=C.toDateString()===O.toDateString(),A=new Date(O);A.setDate(A.getDate()-1);const F=C.toDateString()===A.toDateString(),B=C.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return I?`Today ${B}`:F?`Yesterday ${B}`:C.toLocaleDateString([],{month:"short",day:"numeric"})+` ${B}`}catch{return w}}let h=z(ce({})),R=z(void 0);Ne(()=>{e(d),e(x),r.rows,!(!e(R)||!e(d))&&Et().then(()=>{if(!e(R))return;const w=Array.from(e(R).querySelectorAll("thead th.sticky-left")),C={};let O=0;w.forEach(I=>{const A=I.dataset.colKey??"";C[A]=O,O+=I.getBoundingClientRect().width}),f(h,C,!0)})});function D(w,C,O){const I=O&&w.key!=="_select"&&w.key!=="_actions"?["status-sortable"]:[];if(!O&&w.key==="case_id"&&I.push("case-id"),w.kind==="doe"&&I.push("status-col-doe"),!O&&w.key==="note"&&I.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&w.sticky==="left"&&I.push("sticky-left"),e(d)&&w.sticky==="right"&&I.push("sticky-right"),e(d)&&w.sticky==="left"){const A=e(x)[C+1];(!A||A.sticky!=="left")&&I.push("sticky-divider")}if(e(d)&&w.sticky==="right"){const A=e(x)[C-1];(!A||A.sticky!=="right")&&I.push("sticky-divider")}return I.join(" ")}function L(w,C){return D(w,C,!0)}function q(w,C){return D(w,C,!1)}function H(w){return!e(d)||!w.sticky?"":w.sticky==="right"?"position:sticky;right:0;":w.sticky==="left"&&w.key in e(h)?`position:sticky;left:${e(h)[w.key]}px;`:""}var j=bc(),U=b(j),X=b(U),K=b(X);He(K,23,()=>e(x),w=>w.key,(w,C,O)=>{var I=be(),A=G(I);{var F=ie=>{var W=ic(),ne=b(W),se=b(ne);Ot(se,{get checked(){return e(a)},get indeterminate(){return e(o)},get onchange(){return r.onToggleAll},size:14}),v(ne),v(W),ee((de,ve)=>{Se(W,1,`${de??""} !px-2.5 !py-0 w-9`),ke(W,"data-col-key",e(C).key),Ze(W,ve)},[()=>L(e(C),e(O)),()=>H(e(C))]),u(ie,W)},B=ie=>{var W=lc();ee((ne,se)=>{Se(W,1,ne),ke(W,"data-col-key",e(C).key),Ze(W,se)},[()=>dt(L(e(C),e(O))),()=>H(e(C))]),u(ie,W)},te=ie=>{var W=uc(),ne=b(W),se=P(ne);{var de=oe=>{var _e=cc(),he=b(_e,!0);v(_e),ee(Ee=>ae(he,Ee),[()=>N(e(C).key)]),u(oe,_e)},ve=V(()=>N(e(C).key));Y(se,oe=>{e(ve)&&oe(de)})}v(W),ee((oe,_e)=>{Se(W,1,oe),ke(W,"data-col-key",e(C).key),Ze(W,_e),ae(ne,`${e(C).label??""} `)},[()=>dt(L(e(C),e(O))),()=>H(e(C))]),ue("click",W,oe=>p(e(C).key,oe)),ue("keydown",W,oe=>{(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),p(e(C).key,oe))}),u(ie,W)};Y(A,ie=>{e(C).key==="_select"?ie(F):e(C).key==="_actions"?ie(B,1):ie(te,-1)})}u(w,I)}),v(K),v(X);var re=P(X);He(re,21,()=>r.rows,w=>w.case_id,(w,C)=>{var O=_c();He(O,23,()=>e(x),I=>I.key,(I,A,F)=>{var B=be(),te=G(B);{var ie=ve=>{var oe=dc(),_e=b(oe),he=b(_e);{let Ee=V(()=>e(_).has(e(C).case_id));Ot(he,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e(C).case_id),size:14})}v(_e),v(oe),ee((Ee,pe)=>{Se(oe,1,`${Ee??""} !px-2.5 !py-0 w-9`),ke(oe,"data-col-key",e(A).key),Ze(oe,pe)},[()=>q(e(A),e(F)),()=>H(e(A))]),u(ve,oe)},W=ve=>{var oe=fc(),_e=b(oe),he=b(_e,!0);v(_e),v(oe),ee((Ee,pe,Ie,De)=>{Se(oe,1,Ee),ke(oe,"data-col-key",e(A).key),Ze(oe,pe),Se(_e,1,`status-pill ${Ie??""}`),ae(he,De)},[()=>dt(q(e(A),e(F))),()=>H(e(A)),()=>E(e(C).status,e(C).convergence),()=>k(e(C).status,e(C).convergence)]),u(ve,oe)},ne=ve=>{var oe=gc(),_e=b(oe);{var he=pe=>{var Ie=Ve();ee(()=>ae(Ie,e(C).note)),u(pe,Ie)},Ee=pe=>{var Ie=vc(),De=b(Ie);Le(De,{get icon(){return Ci},size:12}),v(Ie),u(pe,Ie)};Y(_e,pe=>{e(C).note?pe(he):pe(Ee,-1)})}v(oe),ee((pe,Ie)=>{Se(oe,1,pe),ke(oe,"data-col-key",e(A).key),Ze(oe,Ie),ke(oe,"title",e(C).note||"Add note")},[()=>dt(q(e(A),e(F))),()=>H(e(A))]),ue("click",oe,pe=>{pe.stopPropagation(),g(e(C))}),ue("keydown",oe,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),pe.stopPropagation(),g(e(C)))}),u(ve,oe)},se=ve=>{var oe=pc(),_e=b(oe);Pe(_e,{variant:"primary",size:"sm",onclick:he=>{he.stopPropagation(),c(e(C).case_id)},children:(he,Ee)=>{var pe=hc(),Ie=G(pe);Le(Ie,{get icon(){return yi},size:12}),we(),u(he,pe)},$$slots:{default:!0}}),v(oe),ee((he,Ee)=>{Se(oe,1,he),ke(oe,"data-col-key",e(A).key),Ze(oe,Ee)},[()=>dt(q(e(A),e(F))),()=>H(e(A))]),u(ve,oe)},de=ve=>{var oe=mc(),_e=b(oe,!0);v(oe),ee((he,Ee,pe)=>{Se(oe,1,he),ke(oe,"data-col-key",e(A).key),Ze(oe,Ee),ae(_e,pe)},[()=>dt(q(e(A),e(F))),()=>H(e(A)),()=>y(e(C),e(A))]),u(ve,oe)};Y(te,ve=>{e(A).key==="_select"?ve(ie):e(A).key==="status"?ve(W,1):e(A).key==="note"?ve(ne,2):e(A).key==="_actions"?ve(se,3):ve(de,-1)})}u(I,B)}),v(O),ee(I=>Se(O,1,I),[()=>dt(m(e(C)))]),ue("click",O,I=>M(e(C).case_id,I)),ue("contextmenu",O,I=>T(e(C),I)),u(w,O)}),v(re),v(U),nt(U,w=>f(R,w),()=>e(R)),v(j),ee(()=>Se(j,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,j),Ae()}Ge(["click","keydown","contextmenu"]);var yc=$('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function wc(t,r){Me(r,!0);let a=V(()=>{const p=Math.min(r.x,window.innerWidth-180),M=Math.min(r.y,window.innerHeight-120);return`left: ${p}px; top: ${M}px;`});async function n(p){try{for(const M of r.cases)await zs(M,p)}catch(M){console.error("Failed to set convergence:",M)}r.onClose()}const o=r.cases.length>1?` (${r.cases.length})`:"";var i=yc();rt("keydown",it,p=>{p.key==="Escape"&&r.onClose()});var s=b(i),l=b(s);v(s);var d=P(s,2),_=b(d);v(d);var x=P(d,2),N=b(x);v(x),v(i),ee(()=>{Ze(i,e(a)),Se(s,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ae(l,`Mark Converged${o}`),Se(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ae(_,`Mark Not Converged${o}`),Se(x,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ae(N,`Clear Mark${o}`)}),ue("click",s,()=>n("converged")),ue("click",d,()=>n("not_converged")),ue("click",x,()=>n("")),u(t,i),Ae()}Ge(["click"]);var kc=$("<!> Refresh",1),Cc=$("<!> <!>",1),Sc=$("<!> Run",1),$c=$("<!> Restart",1),Pc=$("<!> Stop",1),Ec=$("<!> Kill",1),Rc=$("<!> Clean",1),Nc=$('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),Mc=$('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function Ac(t,r){Me(r,!0);async function a(){await Ls(),r.onRefresh()}function n(){return[...Bt()]}async function o(){const F=n();if(!F.length)return;const B=await Qo(F);if(B)try{await On({cases:F,n:B.n,nt:B.nt,maxParallel:B.maxParallel,backend:B.backend,options:B.options}),r.onRefresh()}catch(te){await Xe(`Run failed: ${te instanceof Error?te.message:te}`,"Error")}}async function i(){const F=n();if(!F.length)return;const B=await Zo(F);if(B)try{await On({cases:F,n:B.n,nt:B.nt,maxParallel:B.maxParallel,restart:!0,restartMode:B.restartMode,restartValue:B.restartValue}),r.onRefresh()}catch(te){await Xe(`Restart failed: ${te instanceof Error?te.message:te}`,"Error")}}async function s(){const F=n();if(!(!F.length||!await Dn(`Kill ${F.length} case${F.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await Fs(F),r.onRefresh()}catch(te){await Xe(`Kill failed: ${te instanceof Error?te.message:te}`,"Error")}}async function l(){const F=n();if(!(!F.length||!await Dn(`Stop ${F.length} case${F.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await kr({cases:F,action:"stop"}),r.onRefresh(),Cr(`Stop requested for ${F.length} case${F.length>1?"s":""} — will checkpoint and exit`)}catch(te){await Xe(`Stop failed: ${te instanceof Error?te.message:te}`,"Error")}}async function d(){const F=n();if(F.length)try{await kr({cases:F,action:"checkpoint"}),r.onRefresh(),Cr(`Checkpoint requested for ${F.length} case${F.length>1?"s":""}`)}catch(B){await Xe(`Checkpoint failed: ${B instanceof Error?B.message:B}`,"Error")}}async function _(){const F=n();if(!F.length)return;const B=await pn("Extend by how many additional time steps?","500","Extend Run");if(B===null)return;const te=parseInt(B,10);if(!Number.isFinite(te)||te<=0){await Xe("Enter a positive integer number of time steps.","Error");return}try{await kr({cases:F,action:"extend",value:te}),r.onRefresh(),Cr(`Extended ${F.length} case${F.length>1?"s":""} by ${te} time steps`)}catch(ie){await Xe(`Extend failed: ${ie instanceof Error?ie.message:ie}`,"Error")}}async function x(){const F=n();if(F.length)try{await kr({cases:F,action:"flush"}),Cr(`Flush requested for ${F.length} case${F.length>1?"s":""}`)}catch(B){await Xe(`Flush failed: ${B instanceof Error?B.message:B}`,"Error")}}async function N(){const F=n();if(!F.length)return;const B=await Jo(F);if(B)try{await Is({cases:F,keepLast:B.keepLast,keepResu:B.keepResu,deleteResu:B.deleteResu,pruneResu:!0}),r.onRefresh(),ll()}catch(te){await Xe(`Cleanup failed: ${te instanceof Error?te.message:te}`,"Error")}}function p(){const F=Rr();F.length>0&&F.every(te=>Bt().has(te))?Wn():Gn(F)}function M(F){on(F)}let T=z(ce(tr("status")));Ne(()=>{rr("status",e(T))}),ql(!0);let g=V(()=>{const F=Sr();return F.size>0&&[...F].some(B=>B==="PREPARED"||B==="DONE"||B==="FAILED")}),c=V(()=>{if(!cr("restart"))return!1;const F=Sr();return F.size>0&&[...F].some(B=>B==="DONE"||B==="FAILED")&&Yn()}),k=V(()=>{const F=Sr();return F.size>0&&F.has("RUNNING")}),E=V(()=>{if(!cr("control"))return!1;const F=Sr();return F.size>0&&F.has("RUNNING")});const m=[{label:"Extend",icon:wi,onClick:_,action:"extend"},{label:"Checkpoint",icon:Ei,onClick:d,action:"checkpoint"},{label:"Flush",icon:bi,onClick:x,action:"flush"}];let y=V(()=>m.filter(F=>bs(F.action)).map(F=>({label:F.label,icon:F.icon,onClick:F.onClick,disabled:!e(E)}))),S=V(Yn),h=z(ce(zl())),R=null;function D(){R&&clearTimeout(R),R=setTimeout(()=>{Bl(e(h))},200)}Ne(()=>Kl(e(T)));let L=z(!1),q=z(0),H=z(0),j=z(ce([])),U=z("");function X(F,B,te,ie){f(j,Bt().has(F)?[...Bt()]:[F],!0),f(U,ie,!0),f(q,B,!0),f(H,te,!0),f(L,!0)}function K(){f(L,!1)}function re(F){const B=Rr();if(B.length){if(F.key==="Escape"){Wn(),K();return}if((F.ctrlKey||F.metaKey)&&F.key==="a"){F.preventDefault(),Gn(B);return}if(F.key==="ArrowDown"||F.key==="ArrowUp"){F.preventDefault();const te=F.key==="ArrowDown"?1:-1,ie=Bn(),W=B.indexOf(ie),ne=Math.max(0,Math.min(B.length-1,W+te)),se=B[ne];F.shiftKey?sn(an()||B[0],se,B):Ea(se),Ul(se);return}if(F.key===" "){F.preventDefault();const te=Bn();te&&(F.shiftKey?sn(an()||te,te,Rr()):on(te))}}}var w=Mc();rt("click",it,K),rt("scroll",it,K);var C=G(w),O=b(C);jt(O,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:B=>{var te=Cc(),ie=G(te);{let se=V(sl);nr(ie,{name:"status",get intervalMs(){return e(se)},get onRefresh(){return r.onRefresh},get checked(){return e(T)},set checked(de){f(T,de,!0)}})}var W=P(ie,2);{var ne=se=>{Pe(se,{variant:"primary",onclick:a,children:(de,ve)=>{var oe=kc(),_e=G(oe);Le(_e,{get icon(){return er}}),we(),u(de,oe)},$$slots:{default:!0}})};Y(W,se=>{e(T)||se(ne)})}u(B,te)},children:(B,te)=>{var ie=Nc(),W=G(ie),ne=b(W),se=b(ne);Ye(se);var de=P(se,2);sc(de,{}),v(ne);var ve=P(ne,2),oe=b(ve),_e=b(oe);v(oe);var he=P(oe,2);{let J=V(()=>!e(g));Pe(he,{variant:"run",size:"sm",onclick:o,get disabled(){return e(J)},children:(le,xe)=>{var ye=Sc(),fe=G(ye);Le(fe,{get icon(){return Sa}}),we(),u(le,ye)},$$slots:{default:!0}})}var Ee=P(he,2);{var pe=J=>{{let le=V(()=>!e(c));Pe(J,{variant:"warning",size:"sm",onclick:i,get disabled(){return e(le)},children:(xe,ye)=>{var fe=$c(),ge=G(fe);Le(ge,{get icon(){return Pi}}),we(),u(xe,fe)},$$slots:{default:!0}})}},Ie=V(()=>cr("restart"));Y(Ee,J=>{e(Ie)&&J(pe)})}var De=P(Ee,2);{var Qe=J=>{{let le=V(()=>!e(E));Pe(J,{variant:"warning",size:"sm",onclick:l,get disabled(){return e(le)},children:(xe,ye)=>{var fe=Pc(),ge=G(fe);Le(ge,{get icon(){return mi}}),we(),u(xe,fe)},$$slots:{default:!0}})}},qe=V(()=>cr("control"));Y(De,J=>{e(qe)&&J(Qe)})}var Je=P(De,2);{var Te=J=>{Al(J,{get items(){return e(y)}})};Y(Je,J=>{e(y).length>0&&J(Te)})}var $e=P(Je,2);{let J=V(()=>!e(k));Pe($e,{variant:"danger",size:"sm",onclick:s,get disabled(){return e(J)},children:(le,xe)=>{var ye=Ec(),fe=G(ye);Le(fe,{get icon(){return _i}}),we(),u(le,ye)},$$slots:{default:!0}})}var Q=P($e,2);{let J=V(()=>!e(S));Pe(Q,{variant:"secondary",size:"sm",onclick:N,get disabled(){return e(J)},children:(le,xe)=>{var ye=Rc(),fe=G(ye);Le(fe,{get icon(){return Ni}}),we(),u(le,ye)},$$slots:{default:!0}})}v(ve),v(W);var Z=P(W,2);{let J=V(Na);xc(Z,{get rows(){return e(J)},onContextMenu:X,onToggleAll:p,onToggleRow:M})}ee(J=>ae(_e,`${J??""} selected`),[()=>Bt().size]),ue("input",se,D),tt(se,()=>e(h),J=>f(h,J)),u(B,ie)},$$slots:{actions:!0,default:!0}}),v(C);var I=P(C,2);{var A=F=>{wc(F,{get cases(){return e(j)},get x(){return e(q)},get y(){return e(H)},get currentValue(){return e(U)},onClose:K})};Y(I,F=>{e(L)&&F(A)})}ue("keydown",C,re),u(t,w),Ae()}Ge(["keydown","input"]);var Tc=$('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Qt(t,r){var a=Tc(),n=b(a);ft(n,()=>r.children),v(a),u(t,a)}function Sn(t){return t.map(r=>({value:r,label:r}))}var Lc=$('<input type="number" step="any" class="w-[110px]"/>'),Fc=$("<!> <!> <!> <!> <!> <!>",1);function $n(t,r){Me(r,!0);let a=me(r,"columnLabel",3,"Columns"),n=me(r,"xMinLabel",3,"Iter min"),o=V(()=>Sn(r.allCases)),i=V(()=>r.columns.map(d=>({value:d,label:d}))),s=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Qt(t,{children:(d,_)=>{var x=Fc(),N=G(x);Re(N,{text:"Cases",children:(y,S)=>{Wt(y,{class:"w-[160px]",get options(){return e(o)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var p=P(N,2);{var M=y=>{var S=be(),h=G(S);ft(h,()=>r.middleSlot),u(y,S)};Y(p,y=>{r.middleSlot&&y(M)})}var T=P(p,2);Re(T,{get text(){return a()},children:(y,S)=>{Wt(y,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var g=P(T,2);Re(g,{text:"Start from",children:(y,S)=>{lt(y,{class:"w-[140px]",get options(){return s},get value(){return r.startFrom},onchange:h=>r.onStartFromChange(h)})}});var c=P(g,2);{var k=y=>{Re(y,{get text(){return n()},children:(S,h)=>{var R=Lc();Ye(R),ee(()=>gn(R,r.xMin)),ue("input",R,l),u(S,R)}})};Y(c,y=>{r.startFrom==="custom"&&y(k)})}var E=P(c,2);{var m=y=>{var S=be(),h=G(S);ft(h,()=>r.extraSlot),u(y,S)};Y(E,y=>{r.extraSlot&&y(m)})}u(d,x)}}),Ae()}Ge(["input"]);var Ic=$('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),Dc=$('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Zt(t,r){let a=me(r,"emptyMessage",3,"");var n=Dc(),o=b(n);{var i=l=>{var d=be(),_=G(d);Dr(_,()=>r.svgHtml),u(l,d)},s=l=>{var d=Ic(),_=b(d),x=b(_,!0);v(_),v(d),ee(()=>ae(x,a()||"No data to display.")),u(l,d)};Y(o,l=>{r.svgHtml?l(i):l(s,-1)})}v(n),ee(()=>ke(n,"id",r.id)),u(t,n)}async function Pn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:o,height:i}=zc(n),s=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=o*s,l.height=i*s;const d=l.getContext("2d");if(!d)return;d.scale(s,s);const _=new XMLSerializer().serializeToString(n),x=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),N=URL.createObjectURL(x),p=new Image;p.width=o,p.height=i,await new Promise((T,g)=>{p.onload=()=>{d.drawImage(p,0,0,o,i),URL.revokeObjectURL(N),T()},p.onerror=g,p.src=N});const M=await new Promise(T=>l.toBlob(T,"image/png"));M&&await Aa(M,Oc(r))}function xr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,o=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Hc(`${t}_${n}_${o}.${a}`)}async function Ma(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Aa(a,r)}function zc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Aa(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(o){if((o==null?void 0:o.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function Oc(t){return t.endsWith(".png")?t:`${t}.png`}function Hc(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Ta=z(ce([])),La=z(ce([])),Fa=z(ce([])),Ia=z("zero"),Da=z(0),za=z(""),jc=z(!0);function Vc(){return{selectedCases:e(Ta),columns:e(La),selectedColumns:e(Fa),startFrom:e(Ia),iterMin:e(Da),svgHtml:e(za),autoRefresh:e(jc)}}function Qn(t){f(Ta,t,!0)}function Uc(t){f(La,t,!0)}function Xr(t){f(Fa,t,!0)}function Bc(t){f(Ia,t,!0)}function qc(t){f(Da,t,!0)}function $r(t){f(za,t,!0)}var Kc=$("<!> Refresh",1),Gc=$("<!> <!>",1),Wc=$("<!> Download as PNG",1),Xc=$('<div class="self-end ml-auto"><!></div>'),Yc=$('<!> <div class="flex justify-center"><!></div>',1),Qc=$('<div class="flex justify-center"><!></div>'),Zc=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Jc=$("<!> <!>",1);function eu(t,r){Me(r,!0);let a=V(Vc),n=z("");const o=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function s(){if(e(a).selectedCases.length)try{const g=await Cs(e(a).selectedCases);f(n,"");const c=g.filter(k=>!o.has(k.toLowerCase().replace(/\s+/g,"_")));if(Uc(c),c.length===0){Xr([]),$r("");return}if(e(a).selectedColumns.length===0){const k=c.filter(E=>i.some(m=>E.toLowerCase().includes(m)));Xr(k.length>0?k:[c[0]])}}catch(g){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",g)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await s(),!e(a).selectedColumns.length)))try{let g=0,c=!0;if(e(a).startFrom==="restart"){const E=await Ca(e(a).selectedCases),m=Object.values(E.origins).map(y=>y.iteration).filter(y=>y!==void 0&&Number.isFinite(y));g=m.length>0?Math.min(...m):0}else e(a).startFrom==="custom"&&(g=e(a).iterMin);const k=await Ss(e(a).selectedCases,e(a).selectedColumns,{xMin:g,includeHistory:c});f(n,""),k&&$r(k)}catch(g){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",g)}}function d(g){if(Qn(g),g.length===0){$r("");return}s(),l()}function _(g){if(Xr(g),g.length===0){$r("");return}l()}function x(g){Bc(g),l()}function N(g){qc(g),l()}let p=z(ce(tr("plot")));Ne(()=>{rr("plot",e(p))}),Ne(()=>{e(p)?mr("residualPlot",l,Vn()):vt("residualPlot")});let M=!1;Ne(()=>{r.allCases.length>0&&!M&&(M=!0,Qn([...r.allCases]),s().then(()=>l()))});const T=_r(()=>{M&&s().then(()=>l())});vr(()=>{vt("residualPlot"),T()}),jt(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var k=Gc(),E=G(k);{let S=V(Vn);nr(E,{name:"residualPlot",get intervalMs(){return e(S)},onRefresh:l,get checked(){return e(p)},set checked(h){f(p,h,!0)}})}var m=P(E,2);{var y=S=>{Pe(S,{variant:"primary",onclick:l,children:(h,R)=>{var D=Kc(),L=G(D);Le(L,{get icon(){return er}}),we(),u(h,D)},$$slots:{default:!0}})};Y(m,S=>{e(p)||S(y)})}u(c,k)},children:(c,k)=>{var E=Jc(),m=G(E);{var y=D=>{const L=X=>{var K=Xc(),re=b(K);{let w=V(()=>!e(a).svgHtml);Pe(re,{variant:"secondary",size:"sm",onclick:()=>Pn("plot-holder",xr("residuals",e(a).selectedCases)),get disabled(){return e(w)},children:(C,O)=>{var I=Wc(),A=G(I);Le(A,{get icon(){return pr}}),we(),u(C,I)},$$slots:{default:!0}})}v(K),u(X,K)};var q=Yc(),H=G(q);$n(H,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:_,get startFrom(){return e(a).startFrom},onStartFromChange:x,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:N,get extraSlot(){return L}});var j=P(H,2),U=b(j);{let X=V(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Zt(U,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(X)}})}v(j),u(D,q)},S=D=>{var L=Qc(),q=b(L);Zt(q,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),v(L),u(D,L)};Y(m,D=>{e(a).columns.length>0?D(y):D(S,-1)})}var h=P(m,2);{var R=D=>{var L=Zc(),q=b(L,!0);v(L),ee(()=>ae(q,e(n))),u(D,L)};Y(h,D=>{e(n)&&D(R)})}u(c,E)},$$slots:{actions:!0,default:!0}}),Ae()}function Oa(t){const{scope:r,getState:a,setState:n,setHasData:o,getAxis:i}=t;async function s(){const p=a();if(p.selectedCases.length)try{let M=await en(p.selectedCases,r);if(t.filterFiles&&(M=t.filterFiles(M)),n({files:M}),o(M.length>0),M.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!p.file||!M.includes(p.file))&&(n({file:M[0]}),await l())}catch(M){console.error(`Failed to load ${r} files:`,M)}}async function l(){const p=a();if(!(!p.selectedCases.length||!p.file))try{const M=await Ns(p.selectedCases,[p.file]),T=t.filterColumns?t.filterColumns(M):M;t.onColumnsLoaded?t.onColumnsLoaded(M):n({columns:T});const g=a();if(g.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}g.selectedColumns.length===0&&n({selectedColumns:[g.columns[0]]})}catch(M){console.error(`Failed to load ${r} columns:`,M)}}async function d(){let p=a();if(p.selectedCases.length){if(await s(),p=a(),!p.file){n({positionText:"",svgHtml:""});return}if((p.columns.length===0||p.selectedColumns.length===0)&&(await l(),p=a(),!p.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let M;const T=a();if(T.startFrom==="restart"){const c=await Ca(T.selectedCases),k=i().toLowerCase(),E=k==="t"||k==="time"?"time":"iteration",m=Object.values(c.origins).map(y=>y[E]).filter(y=>y!==void 0&&Number.isFinite(y));M=m.length>0?Math.min(...m):void 0}else T.startFrom==="custom"&&(M=T.xMin);const g=await As({cases:T.selectedCases,probes:[T.file],columns:T.selectedColumns,axis:i(),timeMin:typeof M=="number"?M:void 0,xMin:M,includeHistory:!0});g&&n({svgHtml:g})}catch(M){console.error(`Failed to load ${r} plot:`,M)}}}async function _(p){if(n({selectedCases:p}),p.length===0){n({svgHtml:""});return}await s(),r==="monitoring"&&await d()}function x(p){if(n({selectedColumns:p}),p.length===0){n({svgHtml:""});return}d()}async function N(p){n({file:p}),await l(),await d()}return{loadFiles:s,loadColumns:l,loadPlot:d,handleCasesChange:_,handleColumnsChange:x,handleFileChange:N}}function Ha(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let qt=z("time"),ln=z(ce(Ha())),cn=z(ce({...Ha(),axis:""})),tu=z(!0),Lr=z(!1),Fr=z(!1);function ru(){return e(qt)}function nu(t){f(qt,t,!0)}function au(){return e(Lr)}function un(t){f(Lr,t,!0)}function ou(){return e(Fr)}function dn(t){f(Fr,t,!0)}function su(){e(qt)==="time"&&!e(Lr)&&e(Fr)?f(qt,"profile"):e(qt)==="profile"&&!e(Fr)&&e(Lr)&&f(qt,"time")}function Zn(){return e(ln)}function Yr(){return e(cn)}function Ct(t){f(ln,{...e(ln),...t},!0)}function At(t){f(cn,{...e(cn),...t},!0)}function iu(){return e(tu)}var lu=$("<!> Download as PNG",1),cu=$('<div class="self-end ml-auto"><!></div>'),uu=$("<div> </div>"),du=$('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),fu=$('<!>  <!> <div class="flex justify-center"><!></div>',1),vu=$('<div class="flex justify-center"><!></div>');function gu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=V(Zn);const o=new Set(["time","t","iteration","iter"]),i=Oa({scope:"monitoring",getState:Zn,setState:Ct,setHasData:un,filterFiles:g=>g.filter(c=>{const k=c.replace(/\.csv$/i,"").toLowerCase();return k!=="coords"&&!k.includes("coordinates")}),filterColumns:g=>g.filter(c=>!o.has(c.toLowerCase())),onColumnsLoaded:g=>{const c=g.filter(k=>!o.has(k.toLowerCase()));Ct({columns:c}),s()},getAxis:()=>"time"});async function s(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const g=[];for(const S of e(n).selectedColumns){const h=await Ms(e(n).selectedCases[0],e(n).file,[S]);h.found&&g.push({col:S,x:h.x,y:h.y,z:h.z})}if(!g.length){Ct({positionText:""});return}const c=S=>{let h=0;for(const R of S){if(R===void 0)continue;const D=String(R),L=D.indexOf(".");L>=0&&(h=Math.max(h,D.length-L-1))}return h},k=c(g.map(S=>S.x)),E=c(g.map(S=>S.y)),m=c(g.map(S=>S.z)),y=g.map(S=>{const h=[];return S.x!==void 0&&h.push(`x=${S.x.toFixed(k)}`),S.y!==void 0&&h.push(`y=${S.y.toFixed(E)}`),S.z!==void 0&&h.push(`z=${S.z.toFixed(m)}`),`Probe position [${S.col}] : ${h.join(" · ")}`});Ct({positionText:y.join(`
`)})}catch{Ct({positionText:""})}}function l(g){i.handleColumnsChange(g),g.length>0&&s()}let d=V(()=>e(n).files.map(g=>({value:g,label:g.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),_=!1;Ne(()=>{r.allCases.length>0&&!_&&(_=!0,Ct({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let x=V(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var N=be(),p=G(N);{var M=g=>{const c=D=>{Re(D,{text:"Quantity",children:(L,q)=>{lt(L,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},k=D=>{var L=cu(),q=b(L);{let H=V(()=>!e(n).svgHtml);Pe(q,{variant:"secondary",size:"sm",onclick:()=>Pn("probe-plot-holder",xr("probe",e(n).selectedCases)),get disabled(){return e(H)},children:(j,U)=>{var X=lu(),K=G(X);Le(K,{get icon(){return pr}}),we(),u(j,X)},$$slots:{default:!0}})}v(L),u(D,L)};var E=fu(),m=G(E);$n(m,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:D=>{Ct({startFrom:D}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:D=>{Ct({xMin:D}),i.loadPlot()},get extraSlot(){return k}});var y=P(m,2);{var S=D=>{var L=du();He(L,21,()=>e(n).positionText.split(`
`).sort(),vn,(q,H)=>{var j=uu(),U=b(j,!0);v(j),ee(()=>ae(U,e(H))),u(q,j)}),v(L),u(D,L)};Y(y,D=>{e(n).positionText&&D(S)})}var h=P(y,2),R=b(h);Zt(R,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(x)}}),v(h),u(g,E)},T=g=>{var c=vu(),k=b(c);Zt(k,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),v(c),u(g,c)};Y(p,g=>{e(n).files.length>0?g(M):g(T,-1)})}u(t,N),Ae()}var hu=$("<!> <!>",1),pu=$("<!> Download as PNG",1),mu=$('<div class="self-end ml-auto"><!></div>'),_u=$('<!>  <div class="flex justify-center"><!></div>',1),bu=$('<div class="flex justify-center"><!></div>');function xu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=V(Yr);const o=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const k=c.map(E=>E.toLowerCase());for(const E of o){const m=k.indexOf(E);if(m>=0)return c[m]}return c[0]??""}const s=Oa({scope:"profiles",getState:Yr,setState:At,setHasData:dn,onColumnsLoaded:c=>{const k=e(n).axis||i(c),E=c.filter(m=>m!==k).toSorted((m,y)=>m.localeCompare(y));At({columns:E,axis:k,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:E.length?[E[0]]:[]})},getAxis:()=>Yr().axis});function l(c){const k=e(n).axis;At({axis:c});const m=[...e(n).columns,...k?[k]:[]].filter(y=>y!==c).toSorted((y,S)=>y.localeCompare(S));At({columns:m}),s.loadPlot()}let d=V(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),_=V(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,k)=>c.localeCompare(k)).map(c=>({value:c,label:c}))),x=!1;Ne(()=>{r.allCases.length>0&&!x&&(x=!0,At({selectedCases:[...r.allCases]}),s.loadFiles().then(()=>s.loadPlot()))}),Ne(()=>{a(s.loadPlot)});let N=V(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var p=be(),M=G(p);{var T=c=>{const k=R=>{var D=hu(),L=G(D);Re(L,{text:"Profile",children:(H,j)=>{lt(H,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return s.handleFileChange}})}});var q=P(L,2);Re(q,{text:"X axis",children:(H,j)=>{lt(H,{class:"w-[140px]",get options(){return e(_)},get value(){return e(n).axis},onchange:l})}}),u(R,D)},E=R=>{var D=mu(),L=b(D);{let q=V(()=>!e(n).svgHtml);Pe(L,{variant:"secondary",size:"sm",onclick:()=>Pn("profile-plot-holder",xr("profile",e(n).selectedCases)),get disabled(){return e(q)},children:(H,j)=>{var U=pu(),X=G(U);Le(X,{get icon(){return pr}}),we(),u(H,U)},$$slots:{default:!0}})}v(D),u(R,D)};var m=_u(),y=G(m);$n(y,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return s.handleCasesChange},get middleSlot(){return k},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return s.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:R=>{At({startFrom:R}),s.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:R=>{At({xMin:R}),s.loadPlot()},get extraSlot(){return E}});var S=P(y,2),h=b(S);Zt(h,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(N)}}),v(S),u(c,m)},g=c=>{var k=bu(),E=b(k);Zt(E,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),v(k),u(c,k)};Y(M,c=>{e(n).files.length>0?c(T):c(g,-1)})}u(t,p),Ae()}var yu=$('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),wu=$("<!> Refresh",1),ku=$("<!> <!>",1);function Cu(t,r){Me(r,!0);let a=V(ru),n=V(iu),o=V(au),i=V(ou),s=z(ce(tr("probe")));Ne(()=>{rr("probe",e(s))});let l=z(void 0);function d(){var T;(T=e(l))==null||T()}async function _(){if(r.allCases.length){try{const g=(await en(r.allCases,"monitoring")).filter(c=>{const k=c.replace(/\.csv$/i,"").toLowerCase();return k!=="coords"&&!k.includes("coordinates")});un(g.length>0)}catch{un(!1)}try{const T=await en(r.allCases,"profiles");dn(T.length>0)}catch{dn(!1)}}}Ne(()=>{r.allCases.length>0&&_()}),_r(()=>{_(),d()}),Ne(()=>{e(o),e(i),su()});function x(T){T==="time"&&!e(o)||T==="profile"&&!e(i)||nu(T)}var N=be(),p=G(N);{var M=T=>{{const g=k=>{var E=yu(),m=P(b(E),2),y=b(m),S=P(y,2);v(m),v(E),ee(()=>{Se(y,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(o)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),y.disabled=!e(o),ke(y,"title",e(o)?"":"No probe data available. Run a simulation first."),Se(S,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),S.disabled=!e(i),ke(S,"title",e(i)?"":"No profile data available. Run a simulation first.")}),ue("click",y,()=>x("time")),ue("click",S,()=>x("profile")),u(k,E)};jt(T,{wide:!0,titleSlot:g,tabs:g,actions:k=>{var E=ku(),m=G(E);{let h=V(()=>e(a)==="time"?"probePlot":"profilePlot"),R=V(il);nr(m,{get name(){return e(h)},get intervalMs(){return e(R)},onRefresh:d,get checked(){return e(s)},set checked(D){f(s,D,!0)}})}var y=P(m,2);{var S=h=>{Pe(h,{variant:"primary",onclick:d,children:(R,D)=>{var L=wu(),q=G(L);Le(q,{get icon(){return er}}),we(),u(R,L)},$$slots:{default:!0}})};Y(y,h=>{e(s)||h(S)})}u(k,E)},children:(k,E)=>{var m=be(),y=G(m);{var S=R=>{gu(R,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(D){f(l,D,!0)}})},h=R=>{xu(R,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(D){f(l,D,!0)}})};Y(y,R=>{e(a)==="time"?R(S):R(h,-1)})}u(k,m)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Y(p,T=>{e(n)&&T(M)})}u(t,N),Ae()}Ge(["click"]);var Su=$("<!> Refresh",1),$u=$("<!> <!>",1),Pu=$("<!> Download as CSV",1),Eu=$('<!> <div class="self-end ml-auto"><!></div>',1),Ru=$("<th> </th>"),Nu=$('<td class="whitespace-nowrap"> </td>'),Mu=$('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),Au=$('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),Tu=$('<p class="text-sm text-muted italic text-center py-8"><!></p>'),Lu=$("<!> <!>",1);function Fu(t,r){Me(r,!0);let a=z(ce([])),n=z(ce([])),o=z(!1),i=z(!1),s=z(ce(tr("perf")));Ne(()=>{rr("perf",e(s))});const l=5e3;let _=z(ce([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),x=V(()=>r.allCases.map(E=>({value:E,label:E}))),N=V(()=>e(n).length>0);async function p(){var E;if(e(a).length){f(i,!0);try{const m=await zn(e(a));(E=m.columns)!=null&&E.length&&f(_,m.columns,!0),f(n,m.records,!0),e(n).length>0&&f(o,!0)}catch(m){console.error("Failed to load perf:",m)}f(i,!1)}}function M(E){if(f(a,E,!0),E.length===0){f(n,[],!0);return}p()}function T(E,m){if(m==null||m==="")return"-";if(E==="text")return m;const y=Number(m);return Number.isFinite(y)?E==="int"?String(Math.round(y)):y.toFixed(3):m}async function g(){if(!e(n).length)return;const E=["case_id",...e(_).map(h=>h.key)],m=e(n).map(h=>[h.case_id,...e(_).map(R=>h[R.key]??"")].join(",")),y=[E.join(","),...m].join(`
`),S=xr("timing_snapshot",e(a),"csv");await Ma(y,S)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),zn(r.allCases).then(E=>{var m;(m=E.columns)!=null&&m.length&&f(_,E.columns,!0),f(o,E.records.length>0),f(n,E.records,!0)}).catch(()=>{}))}),Ne(()=>{e(s)?mr("perf",p,l):vt("perf")});const k=_r(()=>{c&&p()});vr(()=>{vt("perf"),k()}),jt(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:m=>{var y=$u(),S=G(y);nr(S,{name:"perf",intervalMs:l,onRefresh:p,get checked(){return e(s)},set checked(D){f(s,D,!0)}});var h=P(S,2);{var R=D=>{Pe(D,{variant:"primary",onclick:p,children:(L,q)=>{var H=Su(),j=G(H);Le(j,{get icon(){return er}}),we(),u(L,H)},$$slots:{default:!0}})};Y(h,D=>{e(s)||D(R)})}u(m,y)},children:(m,y)=>{var S=Lu(),h=G(S);{var R=H=>{Qt(H,{children:(j,U)=>{var X=Eu(),K=G(X);Re(K,{text:"Cases",children:(C,O)=>{Wt(C,{class:"w-[160px]",get options(){return e(x)},get selected(){return e(a)},onchange:M,placeholder:"Select cases..."})}});var re=P(K,2),w=b(re);{let C=V(()=>!e(N));Pe(w,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(C)},children:(O,I)=>{var A=Pu(),F=G(A);Le(F,{get icon(){return pr}}),we(),u(O,A)},$$slots:{default:!0}})}v(re),u(j,X)}})};Y(h,H=>{e(o)&&H(R)})}var D=P(h,2);{var L=H=>{var j=Au(),U=b(j),X=b(U),K=b(X),re=P(b(K));He(re,17,()=>e(_),C=>C.key,(C,O)=>{var I=Ru(),A=b(I,!0);v(I),ee(()=>ae(A,e(O).label)),u(C,I)}),v(K),v(X);var w=P(X);He(w,21,()=>e(n),C=>C.case_id,(C,O)=>{var I=Mu(),A=b(I),F=b(A,!0);v(A);var B=P(A);He(B,17,()=>e(_),te=>te.key,(te,ie)=>{var W=Nu(),ne=b(W,!0);v(W),ee(se=>ae(ne,se),[()=>T(e(ie).kind,e(O)[e(ie).key])]),u(te,W)}),v(I),ee(()=>ae(F,e(O).case_id)),u(C,I)}),v(w),v(U),v(j),u(H,j)},q=H=>{var j=Tu(),U=b(j);{var X=re=>{var w=Ve("Select cases above to view timing information.");u(re,w)},K=re=>{var w=Ve("No performance data available. Please run a simulation first.");u(re,w)};Y(U,re=>{e(o)?re(X):re(K,-1)})}v(j),u(H,j)};Y(D,H=>{e(N)?H(L):H(q,-1)})}u(m,S)},$$slots:{actions:!0,default:!0}}),Ae()}const Iu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ja(t){return t.replace(/[&<>"']/g,r=>Iu[r]??r)}var Du=$("<div></div>"),zu=$('<pre class="code-box tail-pane"></pre>');function Ou(t,r){Me(r,!0);let a=z(void 0);function n(_){const x=ja(_);if(!r.searchQuery.trim())return x;try{const N=new RegExp(`(${r.searchQuery})`,"gi");return x.replace(N,'<span class="tail-query-hit">$1</span>')}catch{return x}}function o(_){return _==="error"?"tail-sev-error":_==="warn"?"tail-sev-warn":_==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let s=z(!0);function l(){f(s,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(s)&&Et().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=zu();He(d,21,()=>r.lines,_=>_.index,(_,x)=>{var N=Du();Dr(N,()=>n(e(x).text),!0),v(N),ee(p=>Se(N,1,`tail-line ${p??""} ${e(x).isNew?"tail-new":""}`),[()=>o(e(x).severity)]),u(_,N)}),v(d),nt(d,_=>f(a,_),()=>e(a)),rt("scroll",d,l),u(t,d),Ae()}const Hu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,ju=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function Vu(t){return Hu.test(t)?"error":ju.test(t)?"warn":"none"}function Uu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Bu=$("<!> Refresh",1),qu=$("<!> <!>",1),Ku=$('<input type="number" min="1" class="w-[70px]"/>'),Gu=$('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Wu=$("<!> <!> <!> <!> <!>",1),Xu=Ht('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Yu=Ht('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Qu=Ht('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Zu=$("<!> Resume",1),Ju=$("<!> Pause",1),ed=$('<span class="text-xs text-muted">Case not running</span>'),td=$('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),rd=$('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),nd=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),ad=$("<!> <!> <!>",1);function od(t,r){Me(r,!0);const a=80;let n=z(""),o=z(""),i=z(!1),s=z(ce([])),l=z(a),d=z(ce([])),_=z(ce(new Set)),x=z(!1),N=z(ce(tr("tail")));Ne(()=>{rr("tail",e(N))});let p=z(!0),M=z("all"),T=z(""),g=z(""),c=z(void 0),k=V(()=>Sn(r.allCases)),E=V(()=>e(s).map(w=>{const C=w.split("/").pop()??w;return{value:w,label:C}})),m=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],y=V(()=>e(s).length>0),S=V(()=>wn().some(w=>{var C;return w.case_id===e(n)&&((C=w.status)==null?void 0:C.toUpperCase())==="RUNNING"}));const h={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function R(w){const C=w.split("/").pop()??w;return h[C]??99}async function D(){if(e(n))try{const O=(await Es(e(n))).filter(I=>{const A=I.split("/").pop()??I;return I.endsWith(".log")||I.endsWith("/summary")||A in h}).sort((I,A)=>R(I)-R(A));if(f(s,O,!0),O.length>0){const I=O[0];!e(o)||!O.includes(e(o))?(f(o,I,!0),f(i,!1)):!e(i)&&R(I)<R(e(o))&&f(o,I,!0)}e(s).length===0&&(f(o,""),f(d,[],!0))}catch(w){console.error("Failed to load tail files:",w),f(s,[],!0)}}async function L(w=!1){if(e(n)&&!(e(x)&&!w)&&(await D(),!!e(o)))try{const C=await Ps(e(n),e(o),e(l));f(g,"");const O=C.split(`
`),I=O.length>0&&O[O.length-1]===""?O.slice(0,-1):O;if(e(d).length>0){const A=q(e(d),I),F=new Set;for(let B=A;B<I.length;B++)F.add(B);f(_,F,!0)}f(d,I,!0)}catch(C){f(g,"Failed to load log tail"),console.error("Failed to load tail:",C)}}function q(w,C){const O=Math.min(w.length,C.length);for(let I=0;I<O;I++){let A=!0;for(let F=0;F<Math.min(w.length-I,C.length);F++)if(w[I+F]!==C[F]){A=!1;break}if(A)return w.length-I}return 0}let H=V(()=>{let w=e(d).map((C,O)=>({text:C,index:O,severity:Vu(C),isNew:e(_).has(O)}));if(e(M)!=="all"&&(w=w.filter(C=>Uu(C.severity,e(M)))),e(T).trim())try{const C=new RegExp(e(T),"i");w=w.filter(O=>C.test(O.text))}catch{}return w});function j(w){f(n,w,!0),f(o,""),f(i,!1),f(d,[],!0),D().then(()=>L(!0))}function U(w){f(o,w,!0),f(i,!0),f(d,[],!0),L(!0)}function X(){f(x,!e(x)),e(x)||L(!0)}function K(w){(w.ctrlKey||w.metaKey)&&w.key==="f"&&e(c)&&(w.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),D().then(()=>L(!0)))}),Ne(()=>{e(N)&&!e(x)&&e(n)?mr("tail",()=>L(!1),jn()):vt("tail")});const re=_r(()=>{e(n)&&D().then(()=>L(!0))});vr(()=>{vt("tail"),re()}),rt("keydown",it,K),jt(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:C=>{var O=qu(),I=G(O);{let B=V(jn);nr(I,{name:"tail",get intervalMs(){return e(B)},onRefresh:()=>L(!1),get checked(){return e(N)},set checked(te){f(N,te,!0)}})}var A=P(I,2);{var F=B=>{Pe(B,{variant:"primary",onclick:()=>L(!0),children:(te,ie)=>{var W=Bu(),ne=G(W);Le(ne,{get icon(){return er}}),we(),u(te,W)},$$slots:{default:!0}})};Y(A,B=>{e(N)||B(F)})}u(C,O)},children:(C,O)=>{var I=ad(),A=G(I);{var F=se=>{Qt(se,{children:(de,ve)=>{var oe=Wu(),_e=G(oe);Re(_e,{text:"Case",children:(De,Qe)=>{lt(De,{class:"w-[130px]",get options(){return e(k)},get value(){return e(n)},onchange:j})}});var he=P(_e,2);Re(he,{text:"File",children:(De,Qe)=>{lt(De,{class:"w-[150px]",get options(){return e(E)},get value(){return e(o)},onchange:U})}});var Ee=P(he,2);Re(Ee,{text:"Lines",children:(De,Qe)=>{var qe=Ku();Ye(qe),ue("change",qe,()=>L(!0)),tt(qe,()=>e(l),Je=>f(l,Je)),u(De,qe)}});var pe=P(Ee,2);Re(pe,{text:"Filter",children:(De,Qe)=>{var qe=Gu();Ye(qe),nt(qe,Je=>f(c,Je),()=>e(c)),tt(qe,()=>e(T),Je=>f(T,Je)),u(De,qe)}});var Ie=P(pe,2);Re(Ie,{text:"Severity",children:(De,Qe)=>{lt(De,{class:"w-[90px]",get options(){return m},get value(){return e(M)},onchange:qe=>f(M,qe,!0)})}}),u(de,oe)}})};Y(A,se=>{e(y)&&se(F)})}var B=P(A,2);{var te=se=>{var de=td(),ve=G(de);Ou(ve,{get lines(){return e(H)},get searchQuery(){return e(T)},get autoScroll(){return e(p)}});var oe=P(ve,2),_e=b(oe),he=b(_e);{var Ee=Q=>{var Z=Xu();u(Q,Z)},pe=Q=>{var Z=Yu();u(Q,Z)},Ie=Q=>{var Z=Qu();u(Q,Z)};Y(he,Q=>{e(x)?Q(Ee):e(S)?Q(pe,1):Q(Ie,-1)})}var De=P(he);v(_e);var Qe=P(_e,2);{var qe=Q=>{Pe(Q,{variant:"secondary",size:"sm",onclick:X,children:(Z,J)=>{var le=be(),xe=G(le);{var ye=ge=>{var Ce=Zu(),ze=G(Ce);Le(ze,{get icon(){return Sa}}),we(),u(ge,Ce)},fe=ge=>{var Ce=Ju(),ze=G(Ce);Le(ze,{get icon(){return ki}}),we(),u(ge,Ce)};Y(xe,ge=>{e(x)?ge(ye):ge(fe,-1)})}u(Z,le)},$$slots:{default:!0}})},Je=Q=>{var Z=ed();u(Q,Z)};Y(Qe,Q=>{e(S)?Q(qe):Q(Je,-1)})}var Te=P(Qe,2),$e=b(Te);Ot($e,{get checked(){return e(p)},onchange:Q=>f(p,Q,!0),size:14,label:"Auto-scroll",labelFirst:!0}),v(Te),v(oe),ee(()=>ae(De,` ${e(H).length??""} / ${e(d).length??""}`)),u(se,de)},ie=se=>{var de=rd();u(se,de)};Y(B,se=>{e(d).length>0?se(te):se(ie,-1)})}var W=P(B,2);{var ne=se=>{var de=nd(),ve=b(de,!0);v(de),ee(()=>ae(ve,e(g))),u(se,de)};Y(W,se=>{e(g)&&se(ne)})}u(C,I)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["change"]);function sd(t,r=3){var M,T;const a=t.split(`
`),n=[];let o=0,i=0,s=!1;for(const g of a){if(g.startsWith("===")||g.startsWith("---")||g.startsWith("+++"))continue;const c=g.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){o=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,s=!0;continue}if(s)if(g.startsWith("-"))o++,n.push({type:"del",leftNum:o,rightNum:null,leftContent:g.slice(1),rightContent:""});else if(g.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:g.slice(1)});else{o++,i++;const k=g.startsWith(" ")?g.slice(1):g;n.push({type:"equal",leftNum:o,rightNum:i,leftContent:k,rightContent:k})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const g=[];for(;d<n.length&&n[d].type==="del";)g.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const k=Math.max(g.length,c.length);for(let E=0;E<k;E++){const m=g[E],y=c[E];m&&y?l.push({type:"del",leftNum:m.leftNum,rightNum:y.rightNum,leftContent:m.leftContent,rightContent:y.rightContent}):m?l.push(m):y&&l.push(y)}}else l.push(n[d]),d++;const _=new Set;for(let g=0;g<l.length;g++)if(l[g].type!=="equal")for(let c=Math.max(0,g-r);c<=Math.min(l.length-1,g+r);c++)_.add(c);if(_.size===0)return[];const x=[];let N=-1,p=!1;for(let g=0;g<l.length;g++)if(_.has(g)){N>=0&&g-N>1&&x.push({kind:"separator",skipped:g-N-1});const c=l[g].type!=="equal",k=c&&!p;x.push({kind:"line",row:l[g],hunkStart:k}),p=c,N=g}if(N<l.length-1&&N>=0&&x.push({kind:"separator",skipped:l.length-1-N}),x.length>0&&x[0].kind==="line"){const g=((M=x[0].row)==null?void 0:M.leftNum)??0,c=((T=x[0].row)==null?void 0:T.rightNum)??0,k=Math.max(g,c)-1;k>0&&x.unshift({kind:"separator",skipped:k})}return x}var id=$('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),ld=$('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),cd=$('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),ud=$('<span class="text-xs text-muted">No matches</span>'),dd=$('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),fd=$('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),vd=$('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),gd=$('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function hd(t,r){Me(r,!0);let a=me(r,"loading",3,!1),n=z(void 0),o=V(()=>sd(r.diffText)),i=V(()=>{const Q=[];return e(o).forEach((Z,J)=>{Z.hunkStart&&Q.push(J)}),Q}),s=V(()=>e(i).length>0),l=V(()=>{var Z;const Q=new Array(e(o).length).fill(-1);for(let J=0;J<e(i).length;J++){let le=e(i)[J];for(;le<e(o).length&&e(o)[le].kind==="line"&&((Z=e(o)[le].row)==null?void 0:Z.type)!=="equal";)Q[le]=J,le++}return Q}),d=z(-1),_="";Ne(()=>{r.diffText!==_&&(_=r.diffText,f(d,-1))});let x=V(()=>{if(!r.search.trim())return[];try{const Q=new RegExp(r.search,"i"),Z=[];return e(o).forEach((J,le)=>{J.kind==="line"&&J.row&&(Q.test(J.row.leftContent)||Q.test(J.row.rightContent))&&Z.push(le)}),Z}catch{return[]}}),N=z(-1),p="";Ne(()=>{r.search!==p&&(p=r.search,f(N,e(x).length>0?0:-1,!0))});async function M(Q){var le;f(N,Q,!0),await Et();const Z=e(x)[Q],J=(le=e(m))==null?void 0:le.querySelector(`[data-item-idx="${Z}"]`);if(J&&e(m)&&e(y)){const xe=e(m).getBoundingClientRect(),fe=J.getBoundingClientRect().top-xe.top+e(m).scrollTop-e(m).clientHeight/3;h=!0,e(m).scrollTop=fe,e(y).scrollTop=fe,requestAnimationFrame(()=>{h=!1})}}function T(){e(N)>0&&M(e(N)-1)}function g(){e(N)<0&&e(x).length>0?M(0):e(N)<e(x).length-1&&M(e(N)+1)}function c(Q,Z){const J=ja(Q);if(!r.search.trim())return J;try{const le=new RegExp(`(${r.search})`,"gi"),xe=Z?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return J.replace(le,`<span class="${xe}">$1</span>`)}catch{return J}}function k(Q,Z){return Q==="equal"?"":Q==="del"&&Z==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":Q==="del"&&Z==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":Q==="add"&&Z==="left"?"bg-edf-gris-clair":Q==="add"&&Z==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function E(Q,Z){return Q==="del"&&Z==="left"?"rgb(251,237,233)":Q==="del"&&Z==="right"?"rgb(238,247,236)":Q==="add"&&Z==="left"?"var(--color-edf-gris-clair)":Q==="add"&&Z==="right"?"rgb(238,247,236)":"white"}let m=z(void 0),y=z(void 0),S=!1,h=!1;function R(Q){S||h||!e(m)||!e(y)||(S=!0,Q==="left"?(e(y).scrollTop=e(m).scrollTop,e(y).scrollLeft=e(m).scrollLeft):(e(m).scrollTop=e(y).scrollTop,e(m).scrollLeft=e(y).scrollLeft),requestAnimationFrame(()=>{S=!1}))}async function D(Q){var J;f(d,Q,!0),await Et();const Z=(J=e(m))==null?void 0:J.querySelector(`[data-hunk-start="${Q}"]`);if(Z&&e(m)&&e(y)){h=!0;const le=e(m).getBoundingClientRect(),ye=Z.getBoundingClientRect().top-le.top+e(m).scrollTop-e(m).clientHeight/3;e(m).scrollTop=ye,e(y).scrollTop=ye,requestAnimationFrame(()=>{h=!1})}}function L(){e(d)>0&&D(e(d)-1)}function q(){e(d)<0?D(0):e(d)<e(i).length-1&&D(e(d)+1)}function H(Q){const Z=e(l)[Q];Z>=0&&f(d,Z,!0)}function j(Q){Q.target instanceof HTMLInputElement||(Q.key==="n"&&!Q.shiftKey?(Q.preventDefault(),q()):Q.key==="N"||Q.key==="n"&&Q.shiftKey?(Q.preventDefault(),L()):Q.key==="j"?(Q.preventDefault(),g()):(Q.key==="J"||Q.key==="j"&&Q.shiftKey)&&(Q.preventDefault(),T()))}var U=gd();{const Q=(Z,J=So)=>{var le=be(),xe=G(le);He(xe,17,()=>e(o),vn,(ye,fe,ge)=>{const Ce=V(()=>e(i).indexOf(ge)),ze=V(()=>e(l)[ge]>=0&&e(l)[ge]===e(d)),We=V(()=>{var at,Ke;return J()==="left"?(at=e(fe).row)==null?void 0:at.leftNum:(Ke=e(fe).row)==null?void 0:Ke.rightNum}),gt=V(()=>{var at,Ke;return J()==="left"?((at=e(fe).row)==null?void 0:at.leftContent)??"":((Ke=e(fe).row)==null?void 0:Ke.rightContent)??""});var Vt=be(),jr=G(Vt);{var et=at=>{var Ke=id(),Nt=P(b(Ke),2),Vr=b(Nt);v(Nt),v(Ke),ee(()=>ae(Vr,`... ${e(fe).skipped??""} lines hidden ...`)),u(at,Ke)},ut=at=>{var Ke=ld(),Nt=b(Ke),Vr=b(Nt,!0);v(Nt);var En=P(Nt,2);Dr(En,()=>c(e(gt),e(N)>=0&&e(x)[e(N)]===ge),!0),v(En),v(Ke),ee((wt,Mt,yr,Va,Ua)=>{Se(Ke,1,`flex w-full ${wt??""} ${Mt??""}`),Ze(Ke,e(ze)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),ke(Ke,"role",yr),ke(Ke,"tabindex",Va),ke(Ke,"data-hunk-start",J()==="left"&&e(Ce)>=0?e(Ce):void 0),ke(Ke,"data-item-idx",J()==="left"?ge:void 0),Ze(Nt,`background: ${Ua??""}; color: ${e(ze)?"white":"var(--color-muted)"};`),ae(Vr,e(We)??"")},[()=>k(e(fe).row.type,J()),()=>e(fe).row.type!=="equal"||e(x).includes(ge)?"cursor-pointer":"",()=>e(fe).row.type!=="equal"||e(x).includes(ge)?"button":void 0,()=>e(fe).row.type!=="equal"||e(x).includes(ge)?0:void 0,()=>e(ze)?"rgb(16,87,200)":E(e(fe).row.type,J())]),ue("click",Ke,()=>{var Mt;((Mt=e(fe).row)==null?void 0:Mt.type)!=="equal"&&H(ge);const wt=e(x).indexOf(ge);wt>=0&&f(N,wt,!0)}),ue("keydown",Ke,wt=>{var Mt;if(wt.key==="Enter"||wt.key===" "){wt.preventDefault(),((Mt=e(fe).row)==null?void 0:Mt.type)!=="equal"&&H(ge);const yr=e(x).indexOf(ge);yr>=0&&f(N,yr,!0)}}),u(at,Ke)};Y(jr,at=>{e(fe).kind==="separator"?at(et):e(fe).row&&at(ut,1)})}u(ye,Vt)}),u(Z,le)};var X=b(U),K=b(X),re=b(K),w=b(re,!0);v(re);var C=P(re,2),O=b(C,!0);v(C),v(K);var I=P(K,2),A=b(I),F=b(A,!0);v(A);var B=P(A,2),te=b(B,!0);v(B),v(I),v(X);var ie=P(X,2),W=b(ie),ne=b(W);Ye(ne);var se=P(ne,2);{var de=Z=>{var J=cd(),le=G(J);{let ge=V(()=>e(N)<=0);Pe(le,{variant:"secondary",size:"sm",onclick:T,get disabled(){return e(ge)},children:(Ce,ze)=>{we();var We=Ve("Prev");u(Ce,We)},$$slots:{default:!0}})}var xe=P(le,2),ye=b(xe);v(xe);var fe=P(xe,2);{let ge=V(()=>e(N)>=e(x).length-1);Pe(fe,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(ge)},children:(Ce,ze)=>{we();var We=Ve("Next");u(Ce,We)},$$slots:{default:!0}})}ee(()=>ae(ye,`${e(N)>=0?e(N)+1:"–"} / ${e(x).length??""} occurrence${e(x).length!==1?"s":""}`)),u(Z,J)},ve=V(()=>r.search.trim()&&e(x).length>0),oe=Z=>{var J=ud();u(Z,J)},_e=V(()=>r.search.trim());Y(se,Z=>{e(ve)?Z(de):e(_e)&&Z(oe,1)})}v(W);var he=P(W,2),Ee=b(he);{let Z=V(()=>e(i).length===0||e(d)<=0);Pe(Ee,{variant:"secondary",size:"sm",onclick:L,get disabled(){return e(Z)},children:(J,le)=>{we();var xe=Ve("Prev");u(J,xe)},$$slots:{default:!0}})}var pe=P(Ee,2),Ie=b(pe);v(pe);var De=P(pe,2);{let Z=V(()=>e(i).length===0||e(d)>=e(i).length-1);Pe(De,{variant:"secondary",size:"sm",onclick:q,get disabled(){return e(Z)},children:(J,le)=>{we();var xe=Ve("Next");u(J,xe)},$$slots:{default:!0}})}v(he),v(ie);var Qe=P(ie,2);{var qe=Z=>{var J=dd(),le=b(J),xe=b(le),ye=b(xe);Q(ye,()=>"left"),v(xe),v(le),nt(le,ze=>f(m,ze),()=>e(m));var fe=P(le,2),ge=b(fe),Ce=b(ge);Q(Ce,()=>"right"),v(ge),v(fe),nt(fe,ze=>f(y,ze),()=>e(y)),v(J),rt("scroll",le,()=>R("left")),rt("scroll",fe,()=>R("right")),u(Z,J)},Je=Z=>{var J=fd();u(Z,J)};Y(Qe,Z=>{e(s)?Z(qe):Z(Je,-1)})}var Te=P(Qe,2);{var $e=Z=>{var J=vd();u(Z,J)};Y(Te,Z=>{a()&&Z($e)})}v(U),nt(U,Z=>f(n,Z),()=>e(n)),ee(()=>{ae(w,r.leftLabel),ae(O,r.kind),ae(F,r.rightLabel),ae(te,r.kind),gn(ne,r.search),ae(Ie,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),ue("input",ne,Z=>r.onSearchChange(Z.target.value)),ue("keydown",ne,Z=>{Z.key==="Enter"&&(Z.preventDefault(),g())})}ue("keydown",U,j),u(t,U),Ae()}Ge(["keydown","click","input"]);var pd=$("<!> <!> <!>",1),md=$('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),_d=$('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),bd=$('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),xd=$('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),yd=$('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),wd=$('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),kd=$('<p class="text-sm text-red-600 text-center py-8"> </p>'),Cd=$('<p class="text-sm text-muted text-center py-8">Loading...</p>'),Sd=$("<!> <!> <!>",1),$d=$("<!> <!>",1);function Pd(t,r){Me(r,!0);let a=z(""),n=z(""),o=z(""),i=z(""),s=z(""),l=z(!1),d=z(!1),_=z(""),x=V(()=>r.allCases.map(h=>({value:h,label:h})));const N=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let p=V(()=>{var h;return((h=Ft())==null?void 0:h.compare_kinds)??N});Ne(()=>{var h;e(p).some(R=>R.value===e(o))||f(o,((h=e(p)[0])==null?void 0:h.value)??"",!0)});let M=z(!1),T=V(()=>e(a)&&e(n)&&e(a)!==e(n));function g(){const h=e(a);f(a,e(n),!0),f(n,h,!0)}async function c(){if(e(T)){f(l,!0),f(_,"");try{const h=await Ts({cases:[e(a),e(n)],base:e(a),kind:e(o)});f(s,h,!0),f(d,!0)}catch(h){console.error("Failed to load diff:",h),f(s,""),f(d,!1);const R=h instanceof Error?h.message:String(h);f(_,R.includes("404")?`File "${e(o)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(o)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(s,""),f(d,!0))});let k=!1;Ne(()=>{r.allCases.length>=2&&!k?(k=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!k&&(k=!0,f(a,r.allCases[0],!0))});let E=V(kn),m=V(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(E).length===0)return[];const h=wn(),R=h.find(L=>L.case_id===e(a)),D=h.find(L=>L.case_id===e(n));return!R&&!D?[]:e(E).map(L=>{var j,U;const q=((j=R==null?void 0:R.doe)==null?void 0:j[L])!=null&&String(R.doe[L])!==""?String(R.doe[L]):"—",H=((U=D==null?void 0:D.doe)==null?void 0:U[L])!=null&&String(D.doe[L])!==""?String(D.doe[L]):"—";return{param:L,left:q,right:H,differs:q!==H}})}),y=V(()=>e(M)?e(m):e(m).filter(h=>h.differs)),S=V(()=>e(m).filter(h=>h.differs).length);jt(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(h,R)=>{var D=$d(),L=G(D);Qt(L,{children:(X,K)=>{var re=pd(),w=G(re);Re(w,{text:"First case",children:(I,A)=>{lt(I,{class:"w-32.5",get options(){return e(x)},get value(){return e(a)},onchange:F=>f(a,F,!0),placeholder:"Select..."})}});var C=P(w,2);{let I=V(()=>!e(a)&&!e(n));Pe(C,{variant:"secondary",size:"sm",onclick:g,get disabled(){return e(I)},children:(A,F)=>{Le(A,{get icon(){return gi}})},$$slots:{default:!0}})}var O=P(C,2);Re(O,{text:"Second case",children:(I,A)=>{lt(I,{class:"w-32.5",get options(){return e(x)},get value(){return e(n)},onchange:F=>f(n,F,!0),placeholder:"Select..."})}}),u(X,re)}});var q=P(L,2);{var H=X=>{var K=md();u(X,K)},j=X=>{var K=_d();u(X,K)},U=X=>{var K=Sd(),re=G(K);{var w=B=>{var te=wd(),ie=G(te),W=b(ie),ne=b(W);v(W);var se=P(W,2),de=b(se,!0);v(se),v(ie);var ve=P(ie,2);{var oe=he=>{var Ee=xd(),pe=b(Ee),Ie=b(pe),De=b(Ie),Qe=b(De),qe=b(Qe,!0);v(Qe);var Je=P(Qe,2),Te=b(Je,!0);v(Je),v(De),v(Ie);var $e=P(Ie);He($e,21,()=>e(y),Q=>Q.param,(Q,Z)=>{var J=bd(),le=b(J),xe=b(le,!0);v(le);var ye=P(le),fe=b(ye,!0);v(ye);var ge=P(ye),Ce=b(ge,!0);v(ge),v(J),ee(()=>{Se(le,1,dt(e(Z).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ae(xe,e(Z).left),ae(fe,e(Z).param),Se(ge,1,dt(e(Z).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ae(Ce,e(Z).right)}),u(Q,J)}),v($e),v(pe),v(Ee),ee(()=>{ae(qe,e(a)),ae(Te,e(n))}),u(he,Ee)},_e=he=>{var Ee=yd();u(he,Ee)};Y(ve,he=>{e(y).length>0?he(oe):he(_e,-1)})}ee(()=>{ae(ne,`${e(S)??""} difference${e(S)!==1?"s":""} out of ${e(m).length??""}
          parameters`),ae(de,e(M)?"Show differences only":"Show all parameters")}),ue("click",se,()=>f(M,!e(M))),u(B,te)};Y(re,B=>{e(m).length>0&&B(w)})}var C=P(re,2);Qt(C,{children:(B,te)=>{Re(B,{text:"File",children:(ie,W)=>{lt(ie,{class:"w-37.5",get options(){return e(p)},get value(){return e(o)},onchange:ne=>f(o,ne,!0)})}})}});var O=P(C,2);{var I=B=>{var te=kd(),ie=b(te,!0);v(te),ee(()=>ae(ie,e(_))),u(B,te)},A=B=>{hd(B,{get diffText(){return e(s)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(o)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:te=>f(i,te,!0)})},F=B=>{var te=Cd();u(B,te)};Y(O,B=>{e(_)?B(I):e(d)?B(A,1):e(l)&&B(F,2)})}u(X,K)};Y(q,X=>{e(a)&&e(n)&&e(a)===e(n)?X(H):!e(a)||!e(n)?X(j,1):X(U,-1)})}u(h,D)},$$slots:{default:!0}}),Ae()}Ge(["click"]);var Ed=$("<!> Refresh",1),Rd=$("<!> <!>",1),Nd=$('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),Md=$('<input type="number" min="0" max="50" style="width: 70px;"/>'),Ad=$("<!> Download as CSV",1),Td=$('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),Ld=$("&nbsp;<!>",1),Fd=$("<button> <!></button>"),Id=$('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),Dd=$('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),zd=$('<span class="error-badge"> </span>'),Od=$('<span class="error-badge error-badge-new">NEW</span>'),Hd=$('<div class="error-line"></div>'),jd=$('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),Vd=$('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Ud=$('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Bd=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),qd=$("<!> <!> <div><!> <!></div> <!> <!>",1);function Kd(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let o=z(ce([])),i=z(ce([...n])),s=!1;Ne(()=>{var ne;const W=(ne=Ft())==null?void 0:ne.error_files;W!=null&&W.length&&!s&&f(i,[...W],!0)});let l=z("all"),d=z(""),_=z(a),x=z(!1),N=z(""),p=z(ce(tr("errors")));Ne(()=>{rr("errors",e(p))});let M=z(ce([])),T=z(ce(new Set));function g(W){return W.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(W){const ne=W.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${W.case_id}|${W.file}|${W.severity}|${g(ne)}`}function k(W){const ne=new Map;for(const se of W){const de=c(se),ve=ne.get(de);ve?ve.count++:ne.set(de,{...se,count:1,fingerprint:de,isNew:!e(T).has(de)})}return Array.from(ne.values())}async function E(){if(!(!e(o).length||!e(i).length)){f(x,!0);try{const W=await $s({cases:e(o),files:e(i),context:e(_),sev:e(l)==="all"?"":e(l),q:e(d)});f(N,"");const ne=k(W.items);f(M,W.items,!0);const se=new Set(ne.map(de=>de.fingerprint));f(T,se,!0),f(m,ne,!0)}catch(W){f(N,"Failed to load errors"),console.error("Failed to load errors:",W)}finally{f(x,!1)}}}let m=z(ce([])),y=null;function S(){y&&clearTimeout(y),y=setTimeout(E,250)}function h(W){return W==="error"?"error-sev-error":W==="warn"?"error-sev-warn":"error-sev-info"}let R=V(()=>Sn(r.allCases));const D=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let L=V(()=>{var W;return(((W=Ft())==null?void 0:W.error_files)??D).map(ne=>({value:ne,label:ne}))}),q=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function H(W){if(f(o,W,!0),W.length===0){f(m,[],!0),f(M,[],!0);return}E()}function j(W){if(s=!0,f(i,W,!0),W.length===0){f(m,[],!0),f(M,[],!0);return}E()}function U(W){f(l,W,!0),E()}function X(){E()}let K=!1;Ne(()=>{r.allCases.length>0&&!K&&(K=!0,f(o,[...r.allCases],!0),E())}),Ne(()=>{e(p)?mr("errors",E,Un()):vt("errors")});const re=_r(()=>{K&&E()});vr(()=>{vt("errors"),re()});let w=z(ce(new Set));function C(W){const ne=new Set(e(w));ne.has(W)?ne.delete(W):ne.add(W),f(w,ne,!0)}let O=z("severity"),I=z("desc");const A={info:0,warn:1,error:2};let F=V(()=>{const W=[...e(m)];return W.sort((ne,se)=>{let de=0;return e(O)==="severity"?de=(A[ne.severity]??9)-(A[se.severity]??9):e(O)==="count"?de=ne.count-se.count:de=ne[e(O)].localeCompare(se[e(O)]),e(I)==="asc"?de:-de}),W});const B={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function te(W){e(O)===W?f(I,e(I)==="asc"?"desc":"asc",!0):(f(O,W,!0),f(I,B[W],!0))}function ie(){if(!e(m).length)return;const W=["case_id","file","severity","count","is_new","line_text"],ne=e(F).map(ve=>[ve.case_id,ve.file,ve.severity,ve.count,ve.isNew?"yes":"no",`"${ve.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),se=[W.join(","),...ne].join(`
`),de=xr("errors",e(o),"csv");Ma(se,de)}jt(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:ne=>{var se=Rd(),de=G(se);{let _e=V(Un);nr(de,{name:"errors",get intervalMs(){return e(_e)},onRefresh:E,get checked(){return e(p)},set checked(he){f(p,he,!0)}})}var ve=P(de,2);{var oe=_e=>{Pe(_e,{variant:"primary",onclick:E,children:(he,Ee)=>{var pe=Ed(),Ie=G(pe);Le(Ie,{get icon(){return er}}),we(),u(he,pe)},$$slots:{default:!0}})};Y(ve,_e=>{e(p)||_e(oe)})}u(ne,se)},children:(ne,se)=>{var de=qd(),ve=G(de);Qt(ve,{children:(Te,$e)=>{var Q=Td(),Z=G(Q);Re(Z,{text:"Cases",children:(Ce,ze)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(R)},get selected(){return e(o)},onchange:H,placeholder:"Select cases..."})}});var J=P(Z,2);Re(J,{text:"Files",children:(Ce,ze)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(L)},get selected(){return e(i)},onchange:j,placeholder:"Select files..."})}});var le=P(J,2);Re(le,{text:"Severity",children:(Ce,ze)=>{lt(Ce,{class:"w-[90px]",get options(){return q},get value(){return e(l)},onchange:U})}});var xe=P(le,2);Re(xe,{text:"Search",children:(Ce,ze)=>{var We=Nd();Ye(We),ue("input",We,S),tt(We,()=>e(d),gt=>f(d,gt)),u(Ce,We)}});var ye=P(xe,2);Re(ye,{text:"Context",children:(Ce,ze)=>{var We=Md();Ye(We),ue("change",We,X),tt(We,()=>e(_),gt=>f(_,gt)),u(Ce,We)}});var fe=P(ye,2),ge=b(fe);{let Ce=V(()=>e(m).length===0);Pe(ge,{variant:"secondary",size:"sm",onclick:ie,get disabled(){return e(Ce)},children:(ze,We)=>{var gt=Ad(),Vt=G(gt);Le(Vt,{get icon(){return pr}}),we(),u(ze,gt)},$$slots:{default:!0}})}v(fe),u(Te,Q)}});var oe=P(ve,2);{var _e=Te=>{var $e=Id(),Q=P(b($e),2);He(Q,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],Z=>Z.key,(Z,J)=>{var le=Fd(),xe=b(le,!0),ye=P(xe);{var fe=ge=>{var Ce=Ld(),ze=P(G(Ce));{let We=V(()=>e(I)==="asc"?hi:vi);Le(ze,{get icon(){return e(We)},size:12})}u(ge,Ce)};Y(ye,ge=>{e(O)===J.key&&ge(fe)})}v(le),ee(()=>{Se(le,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(O)===J.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ae(xe,J.label)}),ue("click",le,()=>te(J.key)),u(Z,le)}),v($e),u(Te,$e)};Y(oe,Te=>{e(F).length>0&&Te(_e)})}var he=P(oe,2),Ee=b(he);{var pe=Te=>{var $e=Dd();u(Te,$e)};Y(Ee,Te=>{e(F).length===0&&Te(pe)})}var Ie=P(Ee,2);He(Ie,17,()=>e(F),Te=>Te.fingerprint,(Te,$e)=>{var Q=jd(),Z=b(Q),J=b(Z),le=b(J);{let et=V(()=>e(w).has(e($e).fingerprint)?_n:pi);Le(le,{get icon(){return e(et)},size:14})}v(J);var xe=P(J,2),ye=b(xe);v(xe);var fe=P(xe,2),ge=b(fe);{var Ce=et=>{var ut=zd(),at=b(ut);v(ut),ee(()=>ae(at,`${e($e).count??""}x`)),u(et,ut)};Y(ge,et=>{e($e).count>1&&et(Ce)})}var ze=P(ge,2);{var We=et=>{var ut=Od();u(et,ut)};Y(ze,et=>{e($e).isNew&&et(We)})}v(fe),v(Z);var gt=P(Z,2);{var Vt=et=>{var ut=Hd();Dr(ut,()=>e($e).line_html,!0),v(ut),u(et,ut)},jr=V(()=>e(w).has(e($e).fingerprint));Y(gt,et=>{e(jr)&&et(Vt)})}v(Q),ee(et=>{Se(Q,1,`error-item ${et??""}`),ae(ye,`${e($e).case_id??""} / ${e($e).file??""} : ${e($e).severity??""}`)},[()=>h(e($e).severity)]),ue("click",Z,()=>C(e($e).fingerprint)),u(Te,Q)}),v(he);var De=P(he,2);{var Qe=Te=>{var $e=Ud(),Q=b($e),Z=b(Q);v(Q);var J=P(Q,2);{var le=ye=>{var fe=Vd(),ge=b(fe);v(fe),ee(Ce=>ae(ge,`${Ce??""} new`),[()=>e(m).filter(Ce=>Ce.isNew).length]),u(ye,fe)},xe=V(()=>e(m).some(ye=>ye.isNew));Y(J,ye=>{e(xe)&&ye(le)})}v($e),ee(()=>ae(Z,`${e(m).length??""} unique / ${e(M).length??""} total`)),u(Te,$e)};Y(De,Te=>{e(F).length>0&&Te(Qe)})}var qe=P(De,2);{var Je=Te=>{var $e=Bd(),Q=b($e,!0);v($e),ee(()=>ae(Q,e(N))),u(Te,$e)};Y(qe,Te=>{e(N)&&Te(Je)})}ee(()=>Se(he,1,`error-list ${e(x)?"opacity-50 pointer-events-none":""}`)),u(ne,de)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["input","change","click"]);var Gd=$('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function rf(t,r){Me(r,!0);let a=z(ce({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=z(ce([])),o=z(null);const i=A=>e(o)===null||e(o).includes(A);async function s(A){var te;const F=`/favicon-${A}.svg`;try{const ie=await fetch(F);if(!ie.ok||!((te=ie.headers.get("content-type"))!=null&&te.includes("svg")))return}catch{return}const B=document.querySelector('link[rel="icon"]');B&&(B.href=F)}async function l(){try{const A=await ws();jl(A.rows),Vl(A.doe_columns),f(n,A.rows.map(F=>F.case_id),!0),f(a,tc(Ra(),wn()),!0)}catch(A){console.error("Failed to load status:",A)}}Jn(()=>{l(),ks().then(A=>{_s(A),f(o,A.panels,!0),s(A.solver)}).catch(()=>{})});var d=Gd(),_=G(d);qi(_,{});var x=P(_,2);Yi(x,{});var N=P(x,2);xl(N,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var p=P(N,2),M=b(p);{var T=A=>{Ac(A,{onRefresh:l})},g=V(()=>i("status"));Y(M,A=>{e(g)&&A(T)})}var c=P(M,2);{var k=A=>{eu(A,{get allCases(){return e(n)}})},E=V(()=>i("residuals"));Y(c,A=>{e(E)&&A(k)})}var m=P(c,2);{var y=A=>{Cu(A,{get allCases(){return e(n)}})},S=V(()=>i("probes"));Y(m,A=>{e(S)&&A(y)})}var h=P(m,2);{var R=A=>{Fu(A,{get allCases(){return e(n)}})},D=V(()=>i("performance"));Y(h,A=>{e(D)&&A(R)})}var L=P(h,2);{var q=A=>{Pd(A,{get allCases(){return e(n)}})},H=V(()=>i("compare"));Y(L,A=>{e(H)&&A(q)})}var j=P(L,2);{var U=A=>{od(A,{get allCases(){return e(n)}})},X=V(()=>i("tail"));Y(j,A=>{e(X)&&A(U)})}var K=P(j,2);{var re=A=>{Kd(A,{get allCases(){return e(n)}})},w=V(()=>i("errors"));Y(K,A=>{e(w)&&A(re)})}v(p);var C=P(p,2),O=P(b(C),2),I=b(O);v(O),v(C),ee(()=>ke(I,"src",yl)),u(t,d),Ae()}export{rf as component};
