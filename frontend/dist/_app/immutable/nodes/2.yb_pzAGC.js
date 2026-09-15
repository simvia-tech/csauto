import{b as Pr,a as u,f as P,c as be,t as Ue,d as Ht}from"../chunks/C14P8jaG.js";import{o as Jn,a as vr}from"../chunks/Cz6m6K8p.js";import{h as Ie,L as $t,G as Tt,c as Er,J as Gt,b as ea,o as e,N as Ba,ag as qa,O as Rn,P as Dt,f as _t,ay as ta,aF as Ka,ao as Nn,e as mt,a as dr,aM as Ga,s as Wa,a5 as Xa,aN as ra,aE as fn,aO as Ya,a7 as Mn,aP as Qa,aQ as Za,aI as Ja,aR as ht,aS as na,a1 as eo,r as aa,p as oa,aT as Ur,ae as sa,aU as to,aV as ro,aC as no,m as ao,d as Nr,az as ia,y as J,F as la,aW as oo,aG as so,aA as io,D as ca,aX as ua,aY as lo,aZ as co,E as uo,aw as da,S as Ir,k as Mr,a_ as fa,a$ as fo,b0 as vo,b1 as va,b2 as go,b3 as ho,b4 as gr,b5 as po,b6 as mo,b7 as _o,b8 as bo,b9 as xo,ba as yo,bb as wo,aJ as Pt,U as ko,aK as D,_ as se,$ as f,A as x,B as g,x as Me,g as K,z as Ae,C as E,j as Ne,ap as we,aL as j,bc as Co,bd as ga,q as Ut,be as it,bf as So}from"../chunks/VJhVTb1A.js";import{p as me,i as Q,b as nt,c as $o,l as Oe,s as Be}from"../chunks/zf4GFcxs.js";import{i as Po,a as Eo,d as ue,b as Ge,c as Ro,n as No,e as Mo,s as ne,f as tt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Ao}from"../chunks/DmjnTBOd.js";import{B as To}from"../chunks/U5yjBaoU.js";function vn(t,r){return r}function Lo(t,r,a){for(var n=[],o=r.length,i,s=r.length,l=0;l<o;l++){let A=r[l];oa(A,()=>{if(i){if(i.pending.delete(A),i.done.add(A),i.pending.size===0){var _=t.outrogroups;Qr(t,fn(i.done)),_.delete(i),_.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var d=n.length===0&&a!==null;if(d){var b=a,y=b.parentNode;no(y),y.append(b),t.items.clear()}Qr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Qr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const s of t.pending.values())for(const l of s)n.add(t.items.get(l).e)}for(var o=0;o<r.length;o++){var i=r[o];if(n!=null&&n.has(i)){i.f|=ht;const s=document.createDocumentFragment();ao(i,s)}else Nr(r[o],a)}}var An;function He(t,r,a,n,o,i=null){var s=t,l=new Map,d=(r&na)!==0;if(d){var b=t;s=Ie?$t(Tt(b)):b.appendChild(Er())}Ie&&Gt();var y=null,A=Xa(()=>{var m=a();return ra(m)?m:m==null?[]:fn(m)}),_,N=new Map,T=!0;function h(m){(R.effect.f&eo)===0&&(R.pending.delete(m),R.fallback=y,Fo(R,_,s,r,n),y!==null&&(_.length===0?(y.f&ht)===0?aa(y):(y.f^=ht,lr(y,null,s)):oa(y,()=>{y=null})))}function c(m){R.pending.delete(m)}var C=ea(()=>{_=e(A);var m=_.length;let k=!1;if(Ie){var S=Ba(s)===qa;S!==(m===0)&&(s=Rn(),$t(s),Dt(!1),k=!0)}for(var p=new Set,M=mt,I=Wa(),L=0;L<m;L+=1){Ie&&_t.nodeType===ta&&_t.data===Ka&&(s=_t,k=!0,Dt(!1));var B=_[L],O=n(B,L),H=T?null:l.get(O);H?(H.v&&Nn(H.v,B),H.i&&Nn(H.i,L),I&&M.unskip_effect(H.e)):(H=Io(l,T?s:An??(An=Er()),B,O,L,o,r,a),T||(H.e.f|=ht),l.set(O,H)),p.add(O)}if(m===0&&i&&!y&&(T?y=dr(()=>i(s)):(y=dr(()=>i(An??(An=Er()))),y.f|=ht)),m>p.size&&Ga(),Ie&&m>0&&$t(Rn()),!T)if(N.set(M,p),I){for(const[V,X]of l)p.has(V)||M.skip_effect(X.e);M.oncommit(h),M.ondiscard(c)}else h(M);k&&Dt(!0),e(A)}),R={effect:C,items:l,pending:N,outrogroups:null,fallback:y};T=!1,Ie&&(s=_t)}function ar(t){for(;t!==null&&(t.f&to)===0;)t=t.next;return t}function Fo(t,r,a,n,o){var B,O,H,V,X,G,te,w,$;var i=(n&ro)!==0,s=r.length,l=t.items,d=ar(t.effect.first),b,y=null,A,_=[],N=[],T,h,c,C;if(i)for(C=0;C<s;C+=1)T=r[C],h=o(T,C),c=l.get(h).e,(c.f&ht)===0&&((O=(B=c.nodes)==null?void 0:B.a)==null||O.measure(),(A??(A=new Set)).add(c));for(C=0;C<s;C+=1){if(T=r[C],h=o(T,C),c=l.get(h).e,t.outrogroups!==null)for(const z of t.outrogroups)z.pending.delete(c),z.done.delete(c);if((c.f&Ur)!==0&&(aa(c),i&&((V=(H=c.nodes)==null?void 0:H.a)==null||V.unfix(),(A??(A=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)lr(c,null,a);else{var R=y?y.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),wt(t,y,c),wt(t,c,R),lr(c,R,a),y=c,_=[],N=[],d=ar(y.next);continue}if(c!==d){if(b!==void 0&&b.has(c)){if(_.length<N.length){var m=N[0],k;y=m.prev;var S=_[0],p=_[_.length-1];for(k=0;k<_.length;k+=1)lr(_[k],m,a);for(k=0;k<N.length;k+=1)b.delete(N[k]);wt(t,S.prev,p.next),wt(t,y,S),wt(t,p,m),d=m,y=p,C-=1,_=[],N=[]}else b.delete(c),lr(c,d,a),wt(t,c.prev,c.next),wt(t,c,y===null?t.effect.first:y.next),wt(t,y,c),y=c;continue}for(_=[],N=[];d!==null&&d!==c;)(b??(b=new Set)).add(d),N.push(d),d=ar(d.next);if(d===null)continue}(c.f&ht)===0&&_.push(c),y=c,d=ar(c.next)}if(t.outrogroups!==null){for(const z of t.outrogroups)z.pending.size===0&&(Qr(t,fn(z.done)),(X=t.outrogroups)==null||X.delete(z));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||b!==void 0){var M=[];if(b!==void 0)for(c of b)(c.f&Ur)===0&&M.push(c);for(;d!==null;)(d.f&Ur)===0&&d!==t.fallback&&M.push(d),d=ar(d.next);var I=M.length;if(I>0){var L=(n&na)!==0&&s===0?a:null;if(i){for(C=0;C<I;C+=1)(te=(G=M[C].nodes)==null?void 0:G.a)==null||te.measure();for(C=0;C<I;C+=1)($=(w=M[C].nodes)==null?void 0:w.a)==null||$.fix()}Lo(t,M,L)}}i&&sa(()=>{var z,F;if(A!==void 0)for(c of A)(F=(z=c.nodes)==null?void 0:z.a)==null||F.apply()})}function Io(t,r,a,n,o,i,s,l){var d=(s&Qa)!==0?(s&Za)===0?Ja(a,!1,!1):Mn(a):null,b=(s&Ya)!==0?Mn(o):null;return{v:d,i:b,e:dr(()=>(i(r,d??a,b??o,l),()=>{t.delete(n)}))}}function lr(t,r,a){if(t.nodes)for(var n=t.nodes.start,o=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var s=ia(n);if(i.before(n),n===o)return;n=s}}function wt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Dr(t,r,a=!1,n=!1,o=!1,i=!1){var s=t,l="";if(a){var d=t;Ie&&(s=$t(Tt(d)))}J(()=>{var b=la;if(l===(l=r()??"")){Ie&&Gt();return}if(a&&!Ie){b.nodes=null,d.innerHTML=l,l!==""&&Pr(Tt(d),d.lastChild);return}if(b.nodes!==null&&(oo(b.nodes.start,b.nodes.end),b.nodes=null),l!==""){if(Ie){_t.data;for(var y=Gt(),A=y;y!==null&&(y.nodeType!==ta||y.data!=="");)A=y,y=ia(y);if(y===null)throw so(),io;Pr(_t,A),s=$t(y);return}var _=n?ua:o?lo:void 0,N=ca(n?"svg":o?"math":"template",_);N.innerHTML=l;var T=n||o?N:N.content;if(Pr(Tt(T),T.lastChild),n||o)for(;Tt(T);)s.before(Tt(T));else s.before(T)}})}function je(t,r,a,n,o){var l;Ie&&Gt();var i=(l=r.$$slots)==null?void 0:l[a],s=!1;i===!0&&(i=r.children,s=!0),i===void 0||i(t,s?()=>n:n)}function Do(t,r,a,n,o,i){let s=Ie;Ie&&Gt();var l=null;Ie&&_t.nodeType===co&&(l=_t,Gt());var d=Ie?_t:t,b=new To(d,!1);ea(()=>{const y=r()||null;var A=ua;if(y===null){b.ensure(null,null);return}return b.ensure(y,_=>{if(y){if(l=Ie?l:ca(y,A),Pr(l,l),n){Ie&&Po(y)&&l.append(document.createComment(""));var N=Ie?Tt(l):l.appendChild(Er());Ie&&(N===null?Dt(!1):$t(N)),n(l,N)}la.nodes.end=l,_.before(l)}Ie&&$t(_)}),()=>{}},uo),da(()=>{}),s&&(Dt(!0),$t(d))}function zo(t,r,a){Ir(()=>{var n=Mr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Oo(t,r){var a=void 0,n;fa(()=>{a!==(a=r())&&(n&&(Nr(n),n=null),a&&(n=dr(()=>{Ir(()=>a(t))})))})}function ha(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(a=ha(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Ho(){for(var t,r,a=0,n="",o=arguments.length;a<o;a++)(t=arguments[a])&&(r=ha(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?Ho(t):t??""}const Tn=[...` 	
\r\f \v\uFEFF`];function jo(t,r,a){var n=t==null?"":""+t;if(a){for(var o of Object.keys(a))if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var l=s+i;(s===0||Tn.includes(n[s-1]))&&(l===n.length||Tn.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function Ln(t,r=!1){var a=r?" !important;":";",n="";for(var o of Object.keys(t)){var i=t[o];i!=null&&i!==""&&(n+=" "+o+": "+i+a)}return n}function Br(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vo(t,r){if(r){var a="",n,o;if(Array.isArray(r)?(n=r[0],o=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Br)),o&&d.push(...Object.keys(o).map(Br));var b=0,y=-1;const h=t.length;for(var A=0;A<h;A++){var _=t[A];if(l?_==="/"&&t[A-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&t[A+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?s++:_===")"&&s--,!l&&i===!1&&s===0){if(_===":"&&y===-1)y=A;else if(_===";"||A===h-1){if(y!==-1){var N=Br(t.substring(b,y).trim());if(!d.includes(N)){_!==";"&&A++;var T=t.substring(b,A).trim();a+=" "+T+";"}}b=A+1,y=-1}}}}return n&&(a+=Ln(n)),o&&(a+=Ln(o,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Se(t,r,a,n,o,i){var s=t.__className;if(Ie||s!==a||s===void 0){var l=jo(a,n,i);(!Ie||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&o!==i)for(var d in i){var b=!!i[d];(o==null||b!==!!o[d])&&t.classList.toggle(d,b)}return i}function qr(t,r={},a,n){for(var o in a){var i=a[o];r[o]!==i&&(a[o]==null?t.style.removeProperty(o):t.style.setProperty(o,i,n))}}function Ze(t,r,a,n){var o=t.__style;if(Ie||o!==r){var i=Vo(r,n);(!Ie||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(qr(t,a==null?void 0:a[0],n[0]),qr(t,a==null?void 0:a[1],n[1],"important")):qr(t,a,n));return n}function Ar(t,r,a=!1){if(t.multiple){if(r==null)return;if(!ra(r))return fo();for(var n of t.options)n.selected=r.includes(ur(n));return}for(n of t.options){var o=ur(n);if(vo(o,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function pa(t){var r=new MutationObserver(()=>{Ar(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),da(()=>{r.disconnect()})}function Zr(t,r,a=r){var n=new WeakSet,o=!0;va(t,"change",i=>{var s=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(s),ur);else{var d=t.querySelector(s)??t.querySelector("option:not([disabled])");l=d&&ur(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Ir(()=>{var i=r();if(t===document.activeElement){var s=mt;if(n.has(s))return}if(Ar(t,i,o),o&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=ur(l),a(i))}t.__value=i,o=!1}),pa(t)}function ur(t){return"__value"in t?t.__value:t.value}const or=Symbol("class"),sr=Symbol("style"),ma=Symbol("is custom element"),_a=Symbol("is html"),Uo=gr?"link":"LINK",Bo=gr?"input":"INPUT",qo=gr?"option":"OPTION",Ko=gr?"select":"SELECT",Go=gr?"progress":"PROGRESS";function Ye(t){if(Ie){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;ke(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var o=t.checked;ke(t,"checked",null),t.checked=o}}};t.__on_r=a,sa(a),_o()}}function gn(t,r){var a=hn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Go)||(t.value=r??"")}function Wo(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ke(t,r,a,n){var o=hn(t);Ie&&(o[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Uo)||o[r]!==(o[r]=a)&&(r==="loading"&&(t[yo]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ba(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Xo(t,r,a,n,o=!1,i=!1){if(Ie&&o&&t.nodeName===Bo){var s=t,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Ye(s)}var d=hn(t),b=d[ma],y=!d[_a];let A=Ie&&b;A&&Dt(!1);var _=r||{},N=t.nodeName===qo;for(var T in r)T in a||(a[T]=null);a.class?a.class=dt(a.class):a[or]&&(a.class=null),a[sr]&&(a.style??(a.style=null));var h=ba(t);for(const p in a){let M=a[p];if(N&&p==="value"&&M==null){t.value=t.__value="",_[p]=M;continue}if(p==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Se(t,c,M,n,r==null?void 0:r[or],a[or]),_[p]=M,_[or]=a[or];continue}if(p==="style"){Ze(t,M,r==null?void 0:r[sr],a[sr]),_[p]=M,_[sr]=a[sr];continue}var C=_[p];if(!(M===C&&!(M===void 0&&t.hasAttribute(p)))){_[p]=M;var R=p[0]+p[1];if(R!=="$$")if(R==="on"){const I={},L="$$"+p;let B=p.slice(2);var m=Mo(B);if(Eo(B)&&(B=B.slice(0,-7),I.capture=!0),!m&&C){if(M!=null)continue;t.removeEventListener(B,_[L],I),_[L]=null}if(m)ue(B,t,M),Ge([B]);else if(M!=null){let O=function(H){_[p].call(this,H)};_[L]=Ro(B,t,O,I)}}else if(p==="style")ke(t,p,M);else if(p==="autofocus")po(t,!!M);else if(!b&&(p==="__value"||p==="value"&&M!=null))t.value=t.__value=M;else if(p==="selected"&&N)Wo(t,M);else{var k=p;y||(k=No(k));var S=k==="defaultValue"||k==="defaultChecked";if(M==null&&!b&&!S)if(d[p]=null,k==="value"||k==="checked"){let I=t;const L=r===void 0;if(k==="value"){let B=I.defaultValue;I.removeAttribute(k),I.defaultValue=B,I.value=I.__value=L?B:null}else{let B=I.defaultChecked;I.removeAttribute(k),I.defaultChecked=B,I.checked=L?B:!1}}else t.removeAttribute(p);else S||h.includes(k)&&(b||typeof M!="string")?(t[k]=M,k in d&&(d[k]=mo)):typeof M!="function"&&ke(t,k,M)}}}return A&&Dt(!0),_}function Fn(t,r,a=[],n=[],o=[],i,s=!1,l=!1){go(o,a,n,d=>{var b=void 0,y={},A=t.nodeName===Ko,_=!1;if(fa(()=>{var T=r(...d.map(e)),h=Xo(t,b,T,i,s,l);_&&A&&"value"in T&&Ar(t,T.value);for(let C of Object.getOwnPropertySymbols(y))T[C]||Nr(y[C]);for(let C of Object.getOwnPropertySymbols(T)){var c=T[C];C.description===ho&&(!b||c!==b[C])&&(y[C]&&Nr(y[C]),y[C]=dr(()=>Oo(t,()=>c))),h[C]=c}b=h}),A){var N=t;Ir(()=>{Ar(N,b.value,!0),pa(N)})}_=!0})}function hn(t){return t.__attributes??(t.__attributes={[ma]:t.nodeName.includes("-"),[_a]:t.namespaceURI===bo})}var In=new Map;function ba(t){var r=t.getAttribute("is")||t.nodeName,a=In.get(r);if(a)return a;In.set(r,a=[]);for(var n,o=t,i=Element.prototype;i!==o;){n=wo(o);for(var s in n)n[s].set&&a.push(s);o=xo(o)}return a}function et(t,r,a=r){var n=new WeakSet;va(t,"input",async o=>{var i=o?t.defaultValue:t.value;if(i=Kr(t)?Gr(i):i,a(i),mt!==null&&n.add(mt),await Pt(),i!==(i=r())){var s=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var b=t.value.length;s===l&&l===d&&b>d?(t.selectionStart=b,t.selectionEnd=b):(t.selectionStart=s,t.selectionEnd=Math.min(l,b))}}}),(Ie&&t.defaultValue!==t.value||Mr(r)==null&&t.value)&&(a(Kr(t)?Gr(t.value):t.value),mt!==null&&n.add(mt)),ko(()=>{var o=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Kr(t)&&o===Gr(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function Kr(t){var r=t.type;return r==="number"||r==="range"}function Gr(t){return t===""?null:+t}let xt=D(se({type:"none",props:{},resolve:null}));function Yo(){return e(xt)}function st(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Qo(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Zo(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Jo(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Xe(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Dn(t,r="Confirm",a="OK",n="primary"){return new Promise(o=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:o},!0)})}function pn(t,r="",a="Input",n="",o=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:o},resolve:i},!0)})}var es=P('<div style="display:contents;"><!></div>');function Jt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=es(),o=x(n);ft(o,()=>r.children),g(n),zo(n,i=>a==null?void 0:a(i)),u(t,n)}var ts=P('<div class="text-xs text-muted font-light"> </div>'),rs=P('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function hr(t,r){Me(r,!0);const a=T=>{var h=rs(),c=x(h),C=x(c),R=x(C),m=x(R,!0);g(R);var k=E(R,2);{var S=L=>{var B=ts(),O=x(B,!0);g(B),J(()=>ne(O,r.subtitle)),u(L,B)};Q(k,L=>{r.subtitle&&L(S)})}g(C);var p=E(C,2);ft(p,()=>r.children);var M=E(p,2),I=x(M);ft(I,()=>r.footer),g(M),g(c),g(h),J(()=>{Se(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),ke(c,"aria-labelledby",r.titleId),ke(R,"id",r.titleId),ne(m,r.title)}),ue("keydown",h,s),ue("mousedown",h,d),ue("click",h,b),u(T,h)};let n=me(r,"maxWidth",3,"520px"),o=me(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():st(null)}function s(T){T.key==="Escape"?i():T.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(T){l=T.target.dataset.backdrop!==void 0}function b(T){const h=T.target.dataset.backdrop!==void 0;l&&h&&i(),l=!1}var y=be(),A=K(y);{var _=T=>{Jt(T,{children:(h,c)=>{a(h)}})},N=T=>{a(T)};Q(A,T=>{o()?T(_):T(N,-1)})}u(t,y),Ae()}Ge(["keydown","mousedown","click"]);var ns=P("<button><!></button>");function $e(t,r){let a=me(r,"variant",3,"primary"),n=me(r,"size",3,"default"),o=me(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},s={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=ns(),d=x(l);ft(d,()=>r.children),g(l),J(()=>{Se(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${s[a()]??""}`),l.disabled=o()}),ue("click",l,function(...b){var y;(y=r.onclick)==null||y.apply(this,b)}),u(t,l)}Ge(["click"]);var as=P("<!> <span><!></span>",1),os=P('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),ss=P('<input class="w-full"/>'),is=P('<div class="mb-4.5"><!></div>'),ls=P('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function cs(t,r){Me(r,!0);let a=me(r,"confirmLabel",3,"OK"),n=me(r,"confirmVariant",3,"primary"),o=me(r,"value",3,""),i=me(r,"placeholder",3,""),s=me(r,"multiline",3,!1);const l=o();let d=D(se(l)),b=D(void 0),y=D(void 0);Ne(()=>{var N;r.mode==="prompt"&&e(b)?(e(b).focus(),"select"in e(b)&&e(b).select()):e(y)&&((N=e(y).querySelector("button"))==null||N.focus())});function A(){r.mode==="prompt"?st(e(d)):r.mode==="confirm"?st(!0):st()}function _(){r.mode==="confirm"?st(!1):r.mode==="prompt"?st(null):st()}{const N=h=>{var c=as(),C=K(c);{var R=S=>{$e(S,{variant:"secondary",onclick:_,children:(p,M)=>{we();var I=Ue("Cancel");u(p,I)},$$slots:{default:!0}})};Q(C,S=>{r.mode!=="alert"&&S(R)})}var m=E(C,2),k=x(m);$e(k,{get variant(){return n()},onclick:A,children:(S,p)=>{we();var M=Ue();J(()=>ne(M,a())),u(S,M)},$$slots:{default:!0}}),g(m),nt(m,S=>f(y,S),()=>e(y)),u(h,c)};let T=j(()=>s()?void 0:A);hr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(T)},onCancel:_,footer:N,children:(h,c)=>{var C=ls(),R=K(C),m=x(R,!0);g(R);var k=E(R,2);{var S=p=>{var M=is(),I=x(M);{var L=O=>{var H=os();Co(H),nt(H,V=>f(b,V),()=>e(b)),J(()=>ke(H,"placeholder",i())),et(H,()=>e(d),V=>f(d,V)),u(O,H)},B=O=>{var H=ss();Ye(H),nt(H,V=>f(b,V),()=>e(b)),J(()=>ke(H,"placeholder",i())),et(H,()=>e(d),V=>f(d,V)),u(O,H)};Q(I,O=>{s()?O(L):O(B,-1)})}g(M),u(p,M)};Q(k,p=>{r.mode==="prompt"&&p(S)})}J(()=>ne(m,r.message)),u(h,C)},$$slots:{footer:!0,default:!0}})}Ae()}var us=P('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Re(t,r){var a=us(),n=x(a),o=E(n);ft(o,()=>r.children),g(a),J(()=>ne(n,`${r.text??""} `)),u(t,a)}function Ct(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function St(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function xa(t,r){return localStorage.getItem(t)??r}function ds(t,r){r?localStorage.setItem(t,r):localStorage.removeItem(t)}function fs(){return{n:Ct("csauto_run_n",1),nt:Ct("csauto_run_nt",1),maxParallel:Ct("csauto_run_max_parallel",0)||null,backend:xa("csauto_run_backend","")||null}}function vs(t){St("csauto_run_n",t.n),St("csauto_run_nt",t.nt),t.maxParallel&&St("csauto_run_max_parallel",t.maxParallel),ds("csauto_run_backend",t.backend??"")}function gs(){return{n:Ct("csauto_restart_n",1),nt:Ct("csauto_restart_nt",1),maxParallel:Ct("csauto_restart_max_parallel",0)||null,mode:xa("csauto_restart_mode","iterations"),value:Ct("csauto_restart_value",100)}}function hs(t){St("csauto_restart_n",t.n),St("csauto_restart_nt",t.nt),t.maxParallel&&St("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),St("csauto_restart_value",t.value)}function ps(){return{keepLast:Ct("csauto_clean_keep_last",1)}}function ms(t){St("csauto_clean_keep_last",t.keepLast)}let zt=D(null);function _s(t){f(zt,t,!0)}function Ft(){return e(zt)}function cr(t){return e(zt)===null||e(zt).capabilities.includes(t)}function bs(t){return e(zt)===null||e(zt).control_actions.includes(t)}function xs(){var t;return((t=e(zt))==null?void 0:t.backends)??[]}const Jr="csauto_token";let ya=D(se(localStorage.getItem(Jr)??""));function wa(){return e(ya)}function ka(t){f(ya,t,!0),t?localStorage.setItem(Jr,t):localStorage.removeItem(Jr)}let wr=null;async function mn(t,r={}){const a=new Headers(r.headers),n=wa();n&&a.set("X-CSAUTO-TOKEN",n);const o=await fetch(t,{...r,headers:a});if(o.status===401){wr||(wr=pn("API token required:",n,"Authentication"));const i=await wr;return wr=null,i===null?o:(ka(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return o}async function ct(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function zr(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Rt(t,r){const a=await mn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function Or(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function ys(t){return ct(`/api/launch_options?backend=${encodeURIComponent(t)}`)}function ws(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function zn(t){return ct(`/api/perf?${Or(t)}`)}function ks(){return ct("/api/app_config")}function Cs(t){return ct(`/api/residual_columns?${Or(t)}`).then(r=>r.columns??[])}function Ss(t,r,a={}){const n=new URLSearchParams;return t.forEach(o=>n.append("case",o)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),zr(`/api/residuals_svg?${n}`)}function Ca(t){return ct(`/api/restart_origin?${Or(t)}`)}function $s(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function Ps(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return zr(`/api/tail?${n}`)}function Es(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function Rs(t){return ct(`/api/resu_dirs?${Or(t)}`).then(r=>r.dirs??[])}function en(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function Ns(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function Ms(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(o=>n.append("column",o)),ct(`/api/probe_position?${n}`)}function As(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),zr(`/api/probe_svg?${r}`)}function Ts(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),zr(`/api/compare_runs?${r}`)}function On(t){return Rt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,backend:t.backend??void 0,options:t.options??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function Ls(t){return Rt("/api/kill_case",{cases:t}).then(()=>{})}function kr(t){return Rt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function Fs(t){return Rt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function Is(t,r){return Rt("/api/case_note",{case:t,note:r}).then(()=>{})}function Ds(t,r){return Rt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function zs(t){return Rt("/api/open_gui",{case:t}).then(()=>{})}function Os(){return ct("/api/settings/telemetry")}function Hs(t){return Rt("/api/settings/telemetry",{enabled:t})}var js=P("<!> <!>",1),Vs=P('<input type="number" min="1" step="1"/>'),Us=P('<input type="number" min="1" step="1"/>'),Bs=P('<input type="number" min="0" step="1"/>'),qs=P("<option> </option>"),Ks=P("<select><option>This machine</option><!></select>"),Gs=P('<div class="mb-3"><!></div>'),Ws=P(`<p class="mb-3 rounded border border-amber-400/50 bg-amber-400/10 px-3 py-2 text-sm" role="status">About to submit <strong> </strong> <strong> </strong>, which runs on your own account and
      bills you for the compute. Results come back automatically.</p>`),Xs=P("<option> </option>"),Ys=P("<select></select>"),Qs=P('<div class="grid grid-cols-2 gap-2.5 mb-3"></div>'),Zs=P('<p class="mb-3 text-sm opacity-75" role="status"> </p>'),Js=P('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <!> <!> <!> <!>',1);function ei(t,r){Me(r,!0);const a=fs(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=D(se(a.n)),i=D(se(a.nt)),s=D(se(n));const l=xs().filter(N=>N!=="fake");let d=D(se(l.includes(a.backend??"")?a.backend:"")),b=D(se([])),y=D(!1),A=D(se({}));Ne(()=>{const N=e(d);if(!N){f(b,[],!0),f(y,!1),f(A,{},!0);return}let T=!1;return ys(N).then(h=>{T||(f(b,h.options,!0),f(y,h.degraded,!0),f(A,Object.fromEntries(h.options.map(c=>[c.key,c.default])),!0))}).catch(()=>{T||(f(b,[],!0),f(y,!0),f(A,{},!0))}),()=>{T=!0}});async function _(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}const N={n:e(o),nt:e(i),maxParallel:e(s)||null,backend:e(d)||null,options:e(d)?e(A):void 0};vs(N),st(N)}{const N=c=>{var C=js(),R=K(C);$e(R,{variant:"secondary",onclick:()=>st(null),children:(k,S)=>{we();var p=Ue("Cancel");u(k,p)},$$slots:{default:!0}});var m=E(R,2);$e(m,{variant:"run",onclick:_,children:(k,S)=>{we();var p=Ue();J(()=>ne(p,e(d)?`Run on ${e(d)}`:"Run")),u(k,p)},$$slots:{default:!0}}),u(c,C)};let T=j(()=>r.cases.length),h=j(()=>r.cases.length>1?"s":"");hr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(T)??""} case${e(h)??""} selected`},onConfirm:_,footer:N,children:(c,C)=>{var R=Js(),m=K(R),k=x(m);Re(k,{text:"MPI Ranks (n)",children:(G,te)=>{var w=Vs();Ye(w),et(w,()=>e(o),$=>f(o,$)),u(G,w)}});var S=E(k,2);Re(S,{text:"OMP Threads (nt)",children:(G,te)=>{var w=Us();Ye(w),et(w,()=>e(i),$=>f(i,$)),u(G,w)}});var p=E(S,2);Re(p,{text:"Max Parallel",children:(G,te)=>{var w=Bs();Ye(w),et(w,()=>e(s),$=>f(s,$)),u(G,w)}}),g(m);var M=E(m,2);{var I=G=>{var te=Gs(),w=x(te);Re(w,{text:"Run on",children:($,z)=>{var F=Ks(),v=x(F);v.value=v.__value="";var U=E(v);He(U,16,()=>l,W=>W,(W,le)=>{var ce=qs(),Y=x(ce,!0);g(ce);var ee={};J(()=>{ne(Y,le),ee!==(ee=le)&&(ce.value=(ce.__value=le)??"")}),u(W,ce)}),g(F),Zr(F,()=>e(d),W=>f(d,W)),u($,F)}}),g(te),u(G,te)};Q(M,G=>{l.length&&G(I)})}var L=E(M,2);{var B=G=>{var te=Ws(),w=E(x(te)),$=x(w,!0);g(w);var z=E(w),F=E(z),v=x(F,!0);g(F),we(),g(te),J(()=>{ne($,r.cases.length),ne(z,` case${r.cases.length>1?"s":""} to `),ne(v,e(d))}),u(G,te)};Q(L,G=>{e(d)&&G(B)})}var O=E(L,2);{var H=G=>{var te=Qs();He(te,21,()=>e(b),w=>w.key,(w,$)=>{Re(w,{get text(){return e($).label},children:(z,F)=>{var v=Ys();He(v,21,()=>e($).choices,([U,W])=>U,(U,W)=>{var le=j(()=>ga(e(W),2));let ce=()=>e(le)[0],Y=()=>e(le)[1];var ee=Xs(),oe=x(ee,!0);g(ee);var fe={};J(()=>{ne(oe,Y()),fe!==(fe=ce())&&(ee.value=(ee.__value=ce())??"")}),u(U,ee)}),g(v),Zr(v,()=>e(A)[e($).key],U=>e(A)[e($).key]=U),u(z,v)}})}),g(te),u(G,te)};Q(O,G=>{e(d)&&e(b).length&&G(H)})}var V=E(O,2);{var X=G=>{var te=Zs(),w=x(te);g(te),J(()=>ne(w,`Could not reach ${e(d)??""} to list what is available. The run will use the defaults.`)),u(G,te)};Q(V,G=>{e(d)&&e(y)&&G(X)})}u(c,R)},$$slots:{footer:!0,default:!0}})}Ae()}var ti=P("<!> <!>",1),ri=P('<input type="number" min="1" step="1"/>'),ni=P('<input type="number" min="1" step="1"/>'),ai=P('<input type="number" min="0" step="1"/>'),oi=P("<select><option>Iterations</option><option>Physical time</option></select>"),si=P('<input type="number"/>'),ii=P('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function li(t,r){Me(r,!0);const a=gs(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=D(se(a.n)),i=D(se(a.nt)),s=D(se(n)),l=D(se(a.mode)),d=D(se(a.value)),b=j(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),y=j(()=>e(l)==="iterations"?"1":"any"),A=j(()=>e(l)==="iterations"?"1":"0");async function _(){if(!Number.isFinite(e(o))||e(o)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await Xe("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await Xe("Iterations must be an integer.","Invalid value");return}const N={n:e(o),nt:e(i),maxParallel:e(s)||null,restartMode:e(l),restartValue:e(d)};hs({n:e(o),nt:e(i),maxParallel:e(s)||null,mode:e(l),value:e(d)}),st(N)}{const N=c=>{var C=ti(),R=K(C);$e(R,{variant:"secondary",onclick:()=>st(null),children:(k,S)=>{we();var p=Ue("Cancel");u(k,p)},$$slots:{default:!0}});var m=E(R,2);$e(m,{variant:"warning",onclick:_,children:(k,S)=>{we();var p=Ue("Restart");u(k,p)},$$slots:{default:!0}}),u(c,C)};let T=j(()=>r.cases.length),h=j(()=>r.cases.length>1?"s":"");hr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(T)??""} case${e(h)??""} selected`},onConfirm:_,footer:N,children:(c,C)=>{var R=ii(),m=K(R),k=x(m);Re(k,{text:"MPI Ranks (n)",children:(B,O)=>{var H=ri();Ye(H),et(H,()=>e(o),V=>f(o,V)),u(B,H)}});var S=E(k,2);Re(S,{text:"OMP Threads (nt)",children:(B,O)=>{var H=ni();Ye(H),et(H,()=>e(i),V=>f(i,V)),u(B,H)}});var p=E(S,2);Re(p,{text:"Max Parallel",children:(B,O)=>{var H=ai();Ye(H),et(H,()=>e(s),V=>f(s,V)),u(B,H)}}),g(m);var M=E(m,2),I=x(M);Re(I,{text:"Stop criterion",children:(B,O)=>{var H=oi(),V=x(H);V.value=V.__value="iterations";var X=E(V);X.value=X.__value="physical_time",g(H),Zr(H,()=>e(l),G=>f(l,G)),u(B,H)}});var L=E(I,2);Re(L,{get text(){return e(b)},children:(B,O)=>{var H=si();Ye(H),J(()=>{ke(H,"min",e(A)),ke(H,"step",e(y))}),et(H,()=>e(d),V=>f(d,V)),u(B,H)}}),g(M),u(c,R)},$$slots:{footer:!0,default:!0}})}Ae()}function Le(t,r){let a=me(r,"size",3,14);var n=be(),o=K(n);$o(o,()=>r.icon,(i,s)=>{s(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const ci={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const ui=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const Hn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var di=Ht("<svg><!><!></svg>");function qe(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]),n=Oe(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let o=me(r,"name",8,void 0),i=me(r,"color",8,"currentColor"),s=me(r,"size",8,24),l=me(r,"strokeWidth",8,2),d=me(r,"absoluteStrokeWidth",8,!1),b=me(r,"iconNode",24,()=>[]);Ao();var y=di();Fn(y,(N,T,h)=>({...ci,...N,...n,width:s(),height:s(),stroke:i(),"stroke-width":T,class:h}),[()=>ui(n)?void 0:{"aria-hidden":"true"},()=>(Ut(d()),Ut(l()),Ut(s()),Mr(()=>d()?Number(l())*24/Number(s()):l())),()=>(Ut(Hn),Ut(o()),Ut(a),Mr(()=>Hn("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var A=x(y);He(A,1,b,vn,(N,T)=>{var h=j(()=>ga(e(T),2));let c=()=>e(h)[0],C=()=>e(h)[1];var R=be(),m=K(R);Do(m,c,!0,(k,S)=>{Fn(k,()=>({...C()}))}),u(N,R)});var _=E(A);je(_,r,"default",{}),g(y),u(t,y),Ae()}function fi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];qe(t,Be({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function vi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];qe(t,Be({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function gi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];qe(t,Be({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function _n(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];qe(t,Be({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function hi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];qe(t,Be({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function pi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];qe(t,Be({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function mi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];qe(t,Be({name:"circle-x"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function pr(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];qe(t,Be({name:"download"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function _i(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];qe(t,Be({name:"droplets"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function bi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];qe(t,Be({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function xi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];qe(t,Be({name:"external-link"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function yi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];qe(t,Be({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function wi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];qe(t,Be({name:"pause"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function ki(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];qe(t,Be({name:"pen-line"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ci(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];qe(t,Be({name:"pencil"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Sa(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];qe(t,Be({name:"play"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Si(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];qe(t,Be({name:"plus"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function er(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];qe(t,Be({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function $i(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];qe(t,Be({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Pi(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];qe(t,Be({name:"save"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ei(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];qe(t,Be({name:"settings"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ri(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];qe(t,Be({name:"trash-2"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=be(),l=K(s);je(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}var Ni=P('<li role="option"> </li>'),Mi=P('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Ai=P('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Me(r,!0);let a=me(r,"value",3,""),n=me(r,"placeholder",3,"Select..."),o=me(r,"class",3,""),i=me(r,"buttonClass",3,""),s=D(!1),l=D(void 0),d=D(void 0),b=D(""),y=j(()=>{var L;return((L=r.options.find(B=>B.value===a()))==null?void 0:L.label)??n()});function A(L){var B;f(s,!1),(B=r.onchange)==null||B.call(r,L)}function _(){if(!e(l)||!e(d))return;const L=e(l).getBoundingClientRect(),B=e(d).offsetHeight,O=4,H=window.innerHeight-L.bottom-O,X=H<B&&L.top-O>H?L.top-O-B:L.bottom+O,G=Math.min(L.left,window.innerWidth-L.width);f(b,`position:fixed; top:${X}px; left:${G}px; width:${L.width}px; z-index:9999;`)}async function N(){f(s,!e(s)),e(s)&&(await Pt(),_())}function T(L){L.key==="Escape"&&f(s,!1)}function h(L){e(s)&&e(l)&&!e(l).contains(L.target)&&e(d)&&!e(d).contains(L.target)&&f(s,!1)}var c=Ai();tt("mousedown",it,h),tt("keydown",it,T),tt("scroll",it,()=>{e(s)&&f(s,!1)});var C=K(c),R=x(C),m=x(R),k=x(m,!0);g(m);var S=E(m,2),p=x(S);Le(p,{get icon(){return _n},size:14}),g(S),g(R),nt(R,L=>f(l,L),()=>e(l)),g(C);var M=E(C,2);{var I=L=>{Jt(L,{children:(B,O)=>{var H=Mi();He(H,21,()=>r.options,V=>V.value,(V,X)=>{var G=Ni();ke(G,"tabindex",0);var te=x(G,!0);g(G),J(()=>{ke(G,"aria-selected",e(X).value===a()),Se(G,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(X).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ne(te,e(X).label)}),ue("mousedown",G,w=>{w.stopPropagation(),A(e(X).value)}),u(V,G)}),g(H),nt(H,V=>f(d,V),()=>e(d)),J(()=>Ze(H,e(b))),u(B,H)}})};Q(M,L=>{e(s)&&L(I)})}J(()=>{Se(C,1,`relative inline-flex ${o()??""}`),Se(R,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),ke(R,"aria-expanded",e(s)),ne(k,e(y)),Se(S,1,`text-muted shrink-0 transition-transform duration-150 ${e(s)?"rotate-180":""}`)}),ue("mousedown",R,L=>{L.stopPropagation(),N()}),u(t,c),Ae()}Ge(["mousedown"]);var Ti=Ht('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Li=P('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),Fi=P('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),Ii=P('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Wt(t,r){Me(r,!0);let a=me(r,"selected",19,()=>[]),n=me(r,"placeholder",3,"Select..."),o=me(r,"class",3,""),i=D(!1),s=D(void 0),l=D(void 0),d=D(""),b=j(()=>new Set(a())),y=j(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(O=>{var H;return((H=r.options.find(V=>V.value===O))==null?void 0:H.label)??O}).join(", "):`${a().length} selected`);function A(O){var V;const H=new Set(e(b));H.has(O)?H.delete(O):H.add(O),(V=r.onchange)==null||V.call(r,[...H])}function _(){var O;(O=r.onchange)==null||O.call(r,r.options.map(H=>H.value))}function N(){var O;(O=r.onchange)==null||O.call(r,[])}function T(){if(!e(s)||!e(l))return;const O=e(s).getBoundingClientRect(),H=e(l).offsetHeight,V=4,X=window.innerHeight-O.bottom-V,te=X<H&&O.top-V>X?O.top-V-H:O.bottom+V,w=Math.min(O.left,window.innerWidth-O.width);f(d,`position:fixed; top:${te}px; left:${w}px; min-width:${O.width}px; z-index:9999;`)}async function h(){f(i,!e(i)),e(i)&&(await Pt(),T())}function c(O){e(i)&&e(s)&&!e(s).contains(O.target)&&e(l)&&!e(l).contains(O.target)&&f(i,!1)}function C(O){O.key==="Escape"&&f(i,!1)}var R=Ii();tt("mousedown",it,c),tt("keydown",it,C),tt("scroll",it,()=>{e(i)&&f(i,!1)});var m=K(R),k=x(m),S=x(k),p=x(S,!0);g(S);var M=E(S,2),I=x(M);Le(I,{get icon(){return _n},size:14}),g(M),g(k),nt(k,O=>f(s,O),()=>e(s)),g(m);var L=E(m,2);{var B=O=>{Jt(O,{children:(H,V)=>{var X=Fi(),G=x(X),te=x(G),w=E(te,2);g(G);var $=E(G,2);He($,17,()=>r.options,z=>z.value,(z,F)=>{var v=Li(),U=x(v),W=x(U);{var le=oe=>{var fe=Ti();u(oe,fe)},ce=j(()=>e(b).has(e(F).value));Q(W,oe=>{e(ce)&&oe(le)})}g(U);var Y=E(U,2),ee=x(Y,!0);g(Y),g(v),J(oe=>{Se(U,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${oe??""}`),ne(ee,e(F).label)},[()=>e(b).has(e(F).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),ue("mousedown",v,oe=>{oe.stopPropagation(),A(e(F).value)}),u(z,v)}),g(X),nt(X,z=>f(l,z),()=>e(l)),J(()=>Ze(X,e(d))),ue("mousedown",te,z=>{z.stopPropagation(),_()}),ue("mousedown",w,z=>{z.stopPropagation(),N()}),u(H,X)}})};Q(L,O=>{e(i)&&O(B)})}J(()=>{Se(m,1,`relative inline-flex ${o()??""}`),ke(k,"aria-expanded",e(i)),ne(p,e(y)),Se(M,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),ue("mousedown",k,O=>{O.stopPropagation(),h()}),u(t,R),Ae()}Ge(["mousedown"]);var Di=P("<!> <!>",1),zi=P('<input type="number" min="0" step="1" class="w-[80px]"/>'),Oi=P('<span class="text-xs text-muted">Loading...</span>'),Hi=P('<span class="text-xs text-muted">No folders found</span>'),ji=P('<div class="mb-3"><!></div>'),Vi=P('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Ui(t,r){Me(r,!0);const a=ps();let n=D("keep_latest"),o=D(se(a.keepLast)),i=D(se([])),s=D(se([])),l=D(!0),d=j(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const b=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let y=j(()=>e(i).map(_=>({value:_,label:_})));Jn(async()=>{try{f(i,await Rs(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function A(){if(e(d)&&e(s).length===0){await Xe("Please select at least one RESU folder.","Missing selection");return}const _={action:e(n)};e(n)==="keep_latest"?(_.keepLast=e(o),ms({keepLast:e(o)})):e(n)==="delete_all"?_.keepLast=0:e(n)==="keep_folder"?_.keepResu=e(s):e(n)==="delete_folder"&&(_.deleteResu=e(s)),st(_)}{const _=h=>{var c=Di(),C=K(c);$e(C,{variant:"secondary",onclick:()=>st(null),children:(m,k)=>{we();var S=Ue("Cancel");u(m,S)},$$slots:{default:!0}});var R=E(C,2);$e(R,{variant:"primary",onclick:A,children:(m,k)=>{we();var S=Ue("Clean");u(m,S)},$$slots:{default:!0}}),u(h,c)};let N=j(()=>r.cases.length),T=j(()=>r.cases.length>1?"s":"");hr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(N)??""} case${e(T)??""} selected`},footer:_,children:(h,c)=>{var C=Vi(),R=K(C),m=x(R);Re(m,{text:"Action",children:(I,L)=>{lt(I,{class:"w-[200px]",get options(){return b},get value(){return e(n)},onchange:B=>f(n,B,!0)})}});var k=E(m,2);{var S=I=>{Re(I,{text:"Keep last",children:(L,B)=>{var O=zi();Ye(O),et(O,()=>e(o),H=>f(o,H)),u(L,O)}})};Q(k,I=>{e(n)==="keep_latest"&&I(S)})}g(R);var p=E(R,2);{var M=I=>{var L=ji(),B=x(L);Re(B,{text:"RESU folders",children:(O,H)=>{var V=be(),X=K(V);{var G=$=>{var z=Oi();u($,z)},te=$=>{var z=Hi();u($,z)},w=$=>{Wt($,{class:"w-full",get options(){return e(y)},get selected(){return e(s)},onchange:z=>f(s,z,!0),placeholder:"Select folders..."})};Q(X,$=>{e(l)?$(G):e(i).length===0?$(te,1):$(w,-1)})}u(O,V)}}),g(L),u(I,L)};Q(p,I=>{e(d)&&I(M)})}u(h,C)},$$slots:{footer:!0,default:!0}})}Ae()}function Bi(t,r){Me(r,!0);let a=j(Yo);var n=be(),o=K(n);{var i=b=>{ei(b,{get cases(){return e(a).props.cases}})},s=b=>{li(b,{get cases(){return e(a).props.cases}})},l=b=>{Ui(b,{get cases(){return e(a).props.cases}})},d=b=>{cs(b,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Q(o,b=>{e(a).type==="run"?b(i):e(a).type==="restart"?b(s,1):e(a).type==="clean"?b(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&b(d,3)})}u(t,n),Ae()}let fr=D(se([])),qi=0;function Ki(){return e(fr)}function Cr(t,r="success",a=3500){const n=++qi;f(fr,[...e(fr),{id:n,message:t,variant:r}],!0),setTimeout(()=>$a(n),a)}function $a(t){f(fr,e(fr).filter(r=>r.id!==t),!0)}var Gi=P('<div role="status"> </div>'),Wi=P('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Xi(t,r){Me(r,!0);let a=j(Ki);Jt(t,{children:(n,o)=>{var i=Wi();He(i,21,()=>e(a),s=>s.id,(s,l)=>{var d=Gi(),b=x(d,!0);g(d),J(()=>{Se(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ne(b,e(l).message)}),ue("click",d,()=>$a(e(l).id)),u(s,d)}),g(i),u(n,i)}}),Ae()}Ge(["click"]);var Yi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Qi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Zi=P('<span role="checkbox"><!></span>'),Ji=P("<span> </span><!>",1),el=P("<!><span> </span>",1),tl=P('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function Ot(t,r){Me(r,!0);const a=h=>{var c=Zi(),C=x(c);{var R=k=>{var S=Yi();J(()=>Ze(S,`width: ${s()-4}px; height: ${s()-4}px;`)),u(k,S)},m=k=>{var S=Qi();J(()=>Ze(S,`width: ${s()-4}px; height: ${s()-4}px;`)),u(k,S)};Q(C,k=>{n()&&!o()?k(R):o()&&k(m,1)})}g(c),J(()=>{Se(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||o()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${s()??""}px; height: ${s()??""}px;`),ke(c,"aria-checked",o()?"mixed":n()),ke(c,"aria-disabled",i()),ke(c,"tabindex",i()?-1:0)}),ue("click",c,b),ue("keydown",c,y),u(h,c)};let n=me(r,"checked",3,!1),o=me(r,"indeterminate",3,!1),i=me(r,"disabled",3,!1),s=me(r,"size",3,16),l=me(r,"label",3,""),d=me(r,"labelFirst",3,!1);function b(h){var C;if(h.stopPropagation(),i())return;const c=o()?!0:!n();(C=r.onchange)==null||C.call(r,c)}function y(h){(h.key===" "||h.key==="Enter")&&(h.preventDefault(),h.stopPropagation(),b(h))}var A=be(),_=K(A);{var N=h=>{var c=tl(),C=x(c);{var R=k=>{var S=Ji(),p=K(S),M=x(p,!0);g(p);var I=E(p);a(I),J(()=>ne(M,l())),u(k,S)},m=k=>{var S=el(),p=K(S);a(p);var M=E(p),I=x(M,!0);g(M),J(()=>ne(I,l())),u(k,S)};Q(C,k=>{d()?k(R):k(m,-1)})}g(c),ue("click",c,b),ue("keydown",c,y),u(h,c)},T=h=>{a(h)};Q(_,h=>{l()?h(N):h(T,-1)})}u(t,A),Ae()}Ge(["click","keydown"]);function bn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Hr(t,r){localStorage.setItem(t,JSON.stringify(r))}const tn=new Map;function mr(t,r,a){vt(t),tn.set(t,setInterval(r,a))}function vt(t){const r=tn.get(t);r!==void 0&&(clearInterval(r),tn.delete(t))}const Lt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},rl=["status","plot","probe","tail","errors"],Wr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ir=bn("csauto_refresh_rates",{});let bt=D(se({status:ir.status??Lt.status,tail:ir.tail??Lt.tail,plot:ir.plot??Lt.plot,probe:ir.probe??Lt.probe,errors:ir.errors??Lt.errors}));function nl(){return e(bt)}function al(t,r){f(bt,{...e(bt),[t]:r},!0),Hr("csauto_refresh_rates",e(bt))}function ol(){return e(bt).status}function jn(){return e(bt).tail}function Vn(){return e(bt).plot}function sl(){return e(bt).probe}function Un(){return e(bt).errors}const rn=new Set;function _r(t){return rn.add(t),()=>rn.delete(t)}function il(){rn.forEach(t=>t())}const nn=bn("csauto_autorefresh_enabled",{});function tr(t){return nn[t]??!0}function rr(t,r){nn[t]=r,Hr("csauto_autorefresh_enabled",nn)}var ll=P("<!> <!>",1),cl=P('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),ul=P('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),dl=P('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function fl(t,r){Me(r,!0);let a=D(se(wa())),n=D(se({...nl()})),o=D(!0),i=D(!1);Ne(()=>{Os().then(b=>{f(o,b.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function s(b){const{min:y}=Wr[b];let A=e(n)[b];(typeof A!="number"||isNaN(A))&&(A=Lt[b]),f(n,{...e(n),[b]:Math.max(y,Math.round(A))},!0)}function l(b,y){const A=y.target,_=A.value.replace(/[^0-9]/g,""),N=parseInt(_,10);isNaN(N)?_===""&&f(n,{...e(n),[b]:Wr[b].min},!0):f(n,{...e(n),[b]:N},!0),A.value=String(e(n)[b])}function d(){ka(e(a));for(const b of Object.keys(e(n)))s(b),al(b,e(n)[b]);e(i)&&Hs(e(o)).catch(()=>{}),r.onClose()}hr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:y=>{var A=ll(),_=K(A);$e(_,{variant:"secondary",get onclick(){return r.onClose},children:(T,h)=>{we();var c=Ue("Cancel");u(T,c)},$$slots:{default:!0}});var N=E(_,2);$e(N,{variant:"primary",onclick:d,children:(T,h)=>{we();var c=Ue("Save");u(T,c)},$$slots:{default:!0}}),u(y,A)},children:(y,A)=>{var _=dl(),N=K(_),T=E(x(N),2);Ye(T),g(N);var h=E(N,2),c=x(h),C=E(x(c),2);g(c);var R=E(c,2);He(R,20,()=>rl,S=>S,(S,p)=>{const M=j(()=>Wr[p]);var I=cl(),L=x(I),B=x(L),O=x(B,!0);g(B);var H=E(B,2),V=x(H);g(H),g(L);var X=E(L,2),G=x(X);Ye(G),we(2),g(X),g(I),J(()=>{ne(O,e(M).label),ne(V,`min ${e(M).min??""}ms`),gn(G,e(n)[p])}),ue("input",G,te=>l(p,te)),tt("blur",G,()=>s(p)),u(S,I)}),g(R),g(h);var m=E(h,2);{var k=S=>{var p=ul(),M=E(x(p),2);Ot(M,{get checked(){return e(o)},onchange:I=>f(o,I,!0),label:"Send anonymous usage statistics"}),g(p),u(S,p)};Q(m,S=>{e(i)&&S(k)})}et(T,()=>e(a),S=>f(a,S)),ue("click",C,()=>f(n,{...Lt},!0)),u(y,_)},$$slots:{footer:!0,default:!0}}),Ae()}Ge(["click","input"]);const vl=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,gl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";var hl=P('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),pl=P('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),ml=P('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),_l=P('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function bl(t,r){Me(r,!0);let a=j(()=>r.shownCases!==r.totalCases),n=D(!1);var o=_l(),i=K(o),s=x(i),l=x(s);{var d=F=>{var v=hl();J(()=>ke(v,"src",vl)),u(F,v)},b=j(()=>{var F;return!Ft()||((F=Ft())==null?void 0:F.solver)==="code_saturne"}),y=F=>{var v=pl();J(()=>ke(v,"src",gl)),u(F,v)},A=j(()=>{var F;return((F=Ft())==null?void 0:F.solver)==="code_aster"}),_=F=>{var v=ml(),U=x(v,!0);g(v),J(W=>ne(U,W),[()=>{var W;return(W=Ft())==null?void 0:W.solver}]),u(F,v)};Q(l,F=>{e(b)?F(d):e(A)?F(y,1):F(_,-1)})}g(s);var N=E(s,2),T=x(N),h=x(T),c=x(h);{var C=F=>{var v=Ue();J(()=>ne(v,`${r.shownCases??""}/`)),u(F,v)};Q(c,F=>{e(a)&&F(C)})}var R=E(c,1,!0);g(h);var m=E(h,2),k=x(m,!0);g(m),g(T);var S=E(T,2),p=x(S),M=x(p);{var I=F=>{var v=Ue();J(()=>ne(v,`${r.shownRunning??""}/`)),u(F,v)};Q(M,F=>{e(a)&&F(I)})}var L=E(M,1,!0);g(p),we(2),g(S);var B=E(S,2),O=x(B),H=x(O);{var V=F=>{var v=Ue();J(()=>ne(v,`${r.shownConverged??""}/`)),u(F,v)};Q(H,F=>{e(a)&&F(V)})}var X=E(H,1,!0);g(O),we(2),g(B),g(N);var G=E(N,2),te=x(G),w=x(te);Le(w,{get icon(){return Ei},size:18}),g(te),g(G),g(i);var $=E(i,2);{var z=F=>{fl(F,{onClose:()=>f(n,!1)})};Q($,F=>{e(n)&&F(z)})}J(()=>{ne(R,r.totalCases),ne(k,r.totalCases===1?"case":"cases"),ne(L,r.totalRunning),ne(X,r.totalConverged)}),ue("click",te,()=>f(n,!0)),u(t,o),Ae()}Ge(["click"]);const xl=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var yl=P('<div class="text-xs text-muted font-normal"> </div>'),wl=P('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),kl=P("<div><!> <!></div>"),Cl=P('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),Sl=P('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),$l=P('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function jt(t,r){let a=me(r,"eyebrow",3,""),n=me(r,"title",3,""),o=me(r,"wide",3,!1);var i=$l(),s=E(x(i),2);{var l=b=>{var y=Sl(),A=x(y);{var _=c=>{var C=be(),R=K(C);ft(R,()=>r.titleSlot),u(c,C)},N=c=>{var C=kl(),R=x(C);{var m=p=>{var M=yl(),I=x(M,!0);g(M),J(()=>ne(I,a())),u(p,M)};Q(R,p=>{a()&&p(m)})}var k=E(R,2);{var S=p=>{var M=wl(),I=x(M,!0);g(M),J(()=>ne(I,n())),u(p,M)};Q(k,p=>{n()&&p(S)})}g(C),u(c,C)};Q(A,c=>{r.titleSlot?c(_):c(N,-1)})}var T=E(A,2);{var h=c=>{var C=Cl(),R=x(C);ft(R,()=>r.actions),g(C),u(c,C)};Q(T,c=>{r.actions&&c(h)})}g(y),u(b,y)};Q(s,b=>{(a()||n()||r.titleSlot||r.actions)&&b(l)})}var d=E(s,2);ft(d,()=>r.children),g(i),J(()=>{Se(i,1,`${o()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),ke(i,"id",r.id)}),u(t,i)}function nr(t,r){Me(r,!0);let a=me(r,"checked",15,!0);Ne(()=>{a()?mr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),vr(()=>vt(r.name)),Ot(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Ae()}var Pl=P("<!> ",1),El=P('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),Rl=P('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),Nl=P('<span class="inline-flex"><!></span> <!>',1);function Ml(t,r){Me(r,!0);let a=me(r,"label",3,"More"),n=D(!1),o=D(void 0),i=D(void 0),s=D("");function l(){if(!e(o)||!e(i))return;const c=e(o).getBoundingClientRect(),C=e(i).offsetHeight,R=4,m=window.innerHeight-c.bottom-R,S=m<C&&c.top-R>m?c.top-R-C:c.bottom+R,p=Math.min(c.left,window.innerWidth-180);f(s,`position:fixed; top:${S}px; left:${p}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Pt(),l())}function b(c){c.disabled||(f(n,!1),c.onClick())}function y(c){e(n)&&e(o)&&!e(o).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var A=Nl();tt("mousedown",it,y),tt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),tt("scroll",it,()=>{e(n)&&f(n,!1)});var _=K(A),N=x(_);$e(N,{variant:"secondary",size:"sm",onclick:d,children:(c,C)=>{var R=Pl(),m=K(R);Le(m,{get icon(){return bi}});var k=E(m);J(()=>ne(k,` ${a()??""}`)),u(c,R)},$$slots:{default:!0}}),g(_),nt(_,c=>f(o,c),()=>e(o));var T=E(_,2);{var h=c=>{Jt(c,{children:(C,R)=>{var m=Rl();He(m,21,()=>r.items,k=>k.label,(k,S)=>{var p=El(),M=x(p),I=x(M);Le(I,{get icon(){return e(S).icon},size:14});var L=E(I);g(M),g(p),J(()=>{M.disabled=e(S).disabled,ke(M,"aria-disabled",e(S).disabled),Se(M,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(S).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ne(L,` ${e(S).label??""}`)}),ue("mousedown",M,B=>{B.stopPropagation(),b(e(S))}),u(k,p)}),g(m),nt(m,k=>f(i,k),()=>e(i)),J(()=>Ze(m,e(s))),u(C,m)}})};Q(T,c=>{e(n)&&c(h)})}u(t,A),Ae()}Ge(["mousedown"]);const It=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"},{key:"backend_execution_time_s",label:"Cloud Time (s)"},{key:"backend_core_count",label:"Cloud Cores"}];let Xt=D(se([])),Tr=D(se([])),pt=D(se(new Set)),br=D(""),xn=D(""),Et=D(se([])),ot=D(se([])),Yt=D(""),Pa=D(!0),Al=D(!0),Kt=D(se(bn("csauto_status_views",{}))),yn=D(se(localStorage.getItem("csauto_status_view_selected")??""));function wn(){return e(Xt)}function kn(){return e(Tr)}function Bt(){return e(pt)}function Bn(){return e(br)}function an(){return e(xn)}function Tl(){return e(Et)}function Ll(){return e(Et).filter(t=>e(Tr).includes(t))}function Fl(){return e(Et).filter(t=>It.some(r=>r.key===t))}function Il(){return e(ot)}function Dl(){return e(Yt)}function zl(){return e(Pa)}function qn(){return e(Kt)}function Ol(){return e(yn)}function Hl(t){f(Xt,t,!0)}function jl(t){const r=e(Tr).length===0&&t.length>0;f(Tr,t,!0),r&&e(Et).length===0&&f(Et,[...t,...It.map(a=>a.key)],!0)}function Vl(t){f(br,t,!0)}function Kn(t){f(Et,t,!0)}function Ul(t){f(Yt,t,!0)}function Bl(t){f(Pa,t,!0)}function ql(t){f(Al,t,!0)}function Cn(t){f(yn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function on(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(br,t,!0),f(xn,t,!0)}function Ea(t){f(pt,new Set([t]),!0),f(br,t,!0),f(xn,t,!0)}function sn(t,r,a){const n=a.indexOf(t),o=a.indexOf(r);if(n<0||o<0)return;const[i,s]=n<o?[n,o]:[o,n],l=new Set(e(pt));for(let d=i;d<=s;d++)l.add(a[d]);f(pt,l,!0),f(br,r,!0)}function Gn(t){f(pt,new Set(t),!0)}function Wn(){f(pt,new Set,!0)}function Kl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function Ra(){if(!e(Yt).trim())return e(Xt);const t=e(Yt).toLowerCase().trim().split(/\s+/);return e(Xt).filter(r=>{const a=Kl(r);return t.every(n=>a.includes(n))})}function Gl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Xn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;if(r==="backend_execution_time_s")return t.backend_execution_time_s??0;if(r==="backend_core_count")return t.backend_core_count??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Gl(a):""}function Wl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Na(){const t=Ra();return e(ot).length===0?t:[...t].sort((r,a)=>{for(const n of e(ot)){const o=Xn(r,n.key),i=Xn(a,n.key),s=Wl(o,i);if(s!==0)return n.dir==="asc"?s:-s}return 0})}function Rr(){return Na().map(t=>t.case_id)}function Xl(t,r){const a=e(ot).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(ot)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(ot,n,!0)}else f(ot,[...e(ot),{key:t,dir:"asc"}],!0);else a>=0&&e(ot).length===1?f(ot,[{key:t,dir:e(ot)[0].dir==="asc"?"desc":"asc"}],!0):f(ot,[{key:t,dir:"asc"}],!0)}function Yl(){return{visibleColumns:[...e(Et)],search:e(Yt),sorts:e(ot).map(t=>({...t}))}}function Ql(t){f(Et,[...t.visibleColumns],!0),f(Yt,t.search,!0),f(ot,t.sorts.map(r=>({...r})),!0)}function Zl(t){f(Kt,{...e(Kt),[t]:Yl()},!0),Hr("csauto_status_views",e(Kt)),Cn(t)}function Jl(t){const r={...e(Kt)};delete r[t],f(Kt,r,!0),Hr("csauto_status_views",r),e(yn)===t&&Cn("")}function Sr(){const t=new Set;for(const r of e(Xt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Yn(){for(const t of e(Xt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function ec(t,r){const a=r.length,n=t.length,o=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,s=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:o,shownRunning:i,totalConverged:s,shownConverged:l}}var tc=P('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),rc=P('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function nc(t,r){Me(r,!0);let a=me(r,"initialName",3,""),n=j(kn),o=D(se(a())),i=D(se(new Set(r.initialColumns??[...e(n),...It.map(V=>V.key)])));function s(V){const X=new Set(e(i));X.has(V)?X.delete(V):X.add(V),f(i,X,!0)}function l(V,X){const G=new Set(e(i));V.forEach(te=>X?G.add(te):G.delete(te)),f(i,G,!0)}function d(){const V=e(o).trim();V&&r.onSave(V,[...e(i)])}function b(V){V.key==="Escape"&&r.onCancel()}function y(V){V.target.dataset.backdrop!==void 0&&r.onCancel()}let A=D(void 0);Ne(()=>{var V,X;(V=e(A))==null||V.focus(),(X=e(A))==null||X.select()});var _=rc(),N=x(_),T=x(N),h=x(T,!0);g(T);var c=E(T,2),C=E(x(c),2);Ye(C),nt(C,V=>f(A,V),()=>e(A)),g(c);var R=E(c,2);{var m=V=>{var X=tc(),G=x(X),te=E(x(G),2),w=x(te),$=E(w,2);g(te),g(G);var z=E(G,2);He(z,20,()=>e(n),F=>F,(F,v)=>{{let U=j(()=>e(i).has(v));Ot(F,{get checked(){return e(U)},onchange:()=>s(v),size:14,get label(){return v}})}}),g(z),g(X),ue("click",w,()=>l(e(n),!0)),ue("click",$,()=>l(e(n),!1)),u(V,X)};Q(R,V=>{e(n).length>0&&V(m)})}var k=E(R,2),S=x(k),p=E(x(S),2),M=x(p),I=E(M,2);g(p),g(S);var L=E(S,2);He(L,21,()=>It,V=>V.key,(V,X)=>{{let G=j(()=>e(i).has(e(X).key));Ot(V,{get checked(){return e(G)},onchange:()=>s(e(X).key),size:14,get label(){return e(X).label}})}}),g(L),g(k);var B=E(k,2),O=x(B);$e(O,{variant:"secondary",get onclick(){return r.onCancel},children:(V,X)=>{we();var G=Ue("Cancel");u(V,G)},$$slots:{default:!0}});var H=E(O,2);{let V=j(()=>!e(o).trim());$e(H,{variant:"primary",onclick:d,get disabled(){return e(V)},children:(X,G)=>{we();var te=Ue("Save");u(X,te)},$$slots:{default:!0}})}g(B),g(N),g(_),J(()=>ne(h,r.mode==="create"?"New view":"Edit view")),ue("keydown",_,b),ue("click",_,y),et(C,()=>e(o),V=>f(o,V)),ue("click",M,()=>l(It.map(V=>V.key),!0)),ue("click",I,()=>l(It.map(V=>V.key),!1)),u(t,_),Ae()}Ge(["keydown","click"]);var ac=P('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function oc(t,r){Me(r,!0);let a=j(()=>Object.keys(qn())),n=D(se(Ol())),o=D(!1),i=D("create"),s=j(()=>[{value:"",label:"All columns"},...e(a).map(S=>({value:S,label:S}))]);function l(S){if(f(n,S,!0),Cn(S),S==="")Kn([...kn(),...It.map(p=>p.key)]);else{const p=qn();p[S]&&Ql(p[S])}}function d(){f(i,"edit"),f(o,!0)}function b(){f(i,"create"),f(o,!0)}function y(S,p){Kn(p),e(i)==="edit"&&e(n)&&S!==e(n)&&Jl(e(n)),Zl(S),f(n,S,!0),f(o,!1)}function A(){f(o,!1)}var _=ac(),N=K(_),T=x(N);lt(T,{class:"w-[140px]",get options(){return e(s)},get value(){return e(n)},onchange:l});var h=E(T,2),c=x(h);Le(c,{get icon(){return Ci},size:14}),g(h);var C=E(h,2),R=x(C);Le(R,{get icon(){return Si},size:14}),g(C),g(N);var m=E(N,2);{var k=S=>{Jt(S,{children:(p,M)=>{{let I=j(()=>e(i)==="edit"?e(n):""),L=j(Tl);nc(p,{get mode(){return e(i)},get initialName(){return e(I)},get initialColumns(){return e(L)},onSave:y,onCancel:A})}}})};Q(m,S=>{e(o)&&S(k)})}ue("click",h,d),ue("click",C,b),u(t,_),Ae()}Ge(["click"]);var sc=P('<th><div class="flex items-center justify-center h-full"><!></div></th>'),ic=P("<th></th>"),lc=P('<span style="margin-left: 4px; font-size: 9px;"> </span>'),cc=P('<th role="button" tabindex="0"> <!></th>'),uc=P('<td><div class="flex items-center justify-center h-full"><!></div></td>'),dc=P("<td><span> </span></td>"),fc=P('<span class="text-muted"><!></span>'),vc=P('<td role="button" tabindex="0"><!></td>'),gc=P("<!> Open GUI",1),hc=P("<td><!></td>"),pc=P("<td> </td>"),mc=P("<tr></tr>"),_c=P('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function bc(t,r){Me(r,!0);let a=j(()=>r.rows.length>0&&r.rows.every(w=>e(b).has(w.case_id))),n=j(()=>r.rows.some(w=>e(b).has(w.case_id))),o=j(()=>e(n)&&!e(a)),i=j(Ll),s=j(()=>new Set(Fl())),l=j(Il),d=j(zl),b=j(Bt),y=j(()=>{const w=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(s).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],$=e(i).map(U=>({key:U,label:U,kind:"doe"})),F=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"},{key:"backend_execution_time_s",label:"Cloud Time (s)",kind:"calc"},{key:"backend_core_count",label:"Cloud Cores",kind:"calc"}].filter(U=>e(s).has(U.key)),v=cr("gui")?[{key:"_actions",label:"",kind:"meta",sticky:"right"}]:[];return[...w,...$,...F,...v]});function A(w){const $=e(l).findIndex(F=>F.key===w);if($<0)return"";const z=e(l)[$].dir==="asc"?"▲":"▼";return e(l).length>1?`${z}${$+1}`:z}function _(w,$){w!=="_actions"&&Xl(w,$.ctrlKey||$.metaKey)}function N(w,$){$.shiftKey?sn(an()||w,w,Rr()):$.ctrlKey||$.metaKey?on(w):Ea(w)}function T(w,$){var F;const z=((F=w.status)==null?void 0:F.toUpperCase())??"";z!=="DONE"&&z!=="FAILED"||($.preventDefault(),r.onContextMenu(w.case_id,$.clientX,$.clientY,w.convergence??""))}async function h(w){const $=w.note??"",z=await pn("Case note:",$,`Note — ${w.case_id}`,"",!0);if(z!==null)try{await Is(w.case_id,z)}catch(F){await Xe(`Failed to set note: ${F instanceof Error?F.message:F}`,"Error")}}async function c(w){try{await zs(w)}catch($){await Xe(`Failed to open GUI: ${$ instanceof Error?$.message:$}`,"Error")}}function C(w,$){const z=(w==null?void 0:w.toUpperCase())??"";return(z==="DONE"||z==="FAILED")&&$==="converged"?"CONVERGED":(z==="DONE"||z==="FAILED")&&$==="not_converged"?"NOT CONVERGED":z}function R(w,$){const z=(w==null?void 0:w.toUpperCase())??"";return(z==="DONE"||z==="FAILED")&&$==="converged"?"status-converged":(z==="DONE"||z==="FAILED")&&$==="not_converged"?"status-not-converged":z==="RUNNING"?"status-running":z==="DONE"?"status-done":z==="FAILED"?"status-failed":z==="PREPARED"?"status-prepared":"status-unknown"}function m(w){return e(b).has(w.case_id)?"row-selected":""}function k(w,$){var z;return $.key==="case_id"?w.case_id:$.key==="nprocs"?w.nprocs!=null?String(w.nprocs):"":$.key==="nt"?w.nt!=null?String(w.nt):"":$.key==="last_iter"?w.last_iter!=null?String(w.last_iter):"":$.key==="duration"?w.duration??"":$.key==="last_mod"?S(w.last_mod):$.key==="resu_size_mb"?w.resu_size_mb!=null?String(w.resu_size_mb):"":$.key==="backend_execution_time_s"?w.backend_execution_time_s!=null?w.backend_execution_time_s.toFixed(1):"":$.key==="backend_core_count"?w.backend_core_count!=null?String(w.backend_core_count):"":$.kind==="doe"?((z=w.doe)==null?void 0:z[$.key])!=null&&String(w.doe[$.key])!==""?String(w.doe[$.key]):"—":""}function S(w){if(!w)return"";try{const $=new Date(w),z=new Date,F=$.toDateString()===z.toDateString(),v=new Date(z);v.setDate(v.getDate()-1);const U=$.toDateString()===v.toDateString(),W=$.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return F?`Today ${W}`:U?`Yesterday ${W}`:$.toLocaleDateString([],{month:"short",day:"numeric"})+` ${W}`}catch{return w}}let p=D(se({})),M=D(void 0);Ne(()=>{e(d),e(y),r.rows,!(!e(M)||!e(d))&&Pt().then(()=>{if(!e(M))return;const w=Array.from(e(M).querySelectorAll("thead th.sticky-left")),$={};let z=0;w.forEach(F=>{const v=F.dataset.colKey??"";$[v]=z,z+=F.getBoundingClientRect().width}),f(p,$,!0)})});function I(w,$,z){const F=z&&w.key!=="_select"&&w.key!=="_actions"?["status-sortable"]:[];if(!z&&w.key==="case_id"&&F.push("case-id"),w.kind==="doe"&&F.push("status-col-doe"),!z&&w.key==="note"&&F.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&w.sticky==="left"&&F.push("sticky-left"),e(d)&&w.sticky==="right"&&F.push("sticky-right"),e(d)&&w.sticky==="left"){const v=e(y)[$+1];(!v||v.sticky!=="left")&&F.push("sticky-divider")}if(e(d)&&w.sticky==="right"){const v=e(y)[$-1];(!v||v.sticky!=="right")&&F.push("sticky-divider")}return F.join(" ")}function L(w,$){return I(w,$,!0)}function B(w,$){return I(w,$,!1)}function O(w){return!e(d)||!w.sticky?"":w.sticky==="right"?"position:sticky;right:0;":w.sticky==="left"&&w.key in e(p)?`position:sticky;left:${e(p)[w.key]}px;`:""}var H=_c(),V=x(H),X=x(V),G=x(X);He(G,23,()=>e(y),w=>w.key,(w,$,z)=>{var F=be(),v=K(F);{var U=ce=>{var Y=sc(),ee=x(Y),oe=x(ee);Ot(oe,{get checked(){return e(a)},get indeterminate(){return e(o)},get onchange(){return r.onToggleAll},size:14}),g(ee),g(Y),J((fe,de)=>{Se(Y,1,`${fe??""} !px-2.5 !py-0 w-9`),ke(Y,"data-col-key",e($).key),Ze(Y,de)},[()=>L(e($),e(z)),()=>O(e($))]),u(ce,Y)},W=ce=>{var Y=ic();J((ee,oe)=>{Se(Y,1,ee),ke(Y,"data-col-key",e($).key),Ze(Y,oe)},[()=>dt(L(e($),e(z))),()=>O(e($))]),u(ce,Y)},le=ce=>{var Y=cc(),ee=x(Y),oe=E(ee);{var fe=ae=>{var xe=lc(),he=x(xe,!0);g(xe),J(Ee=>ne(he,Ee),[()=>A(e($).key)]),u(ae,xe)},de=j(()=>A(e($).key));Q(oe,ae=>{e(de)&&ae(fe)})}g(Y),J((ae,xe)=>{Se(Y,1,ae),ke(Y,"data-col-key",e($).key),Ze(Y,xe),ne(ee,`${e($).label??""} `)},[()=>dt(L(e($),e(z))),()=>O(e($))]),ue("click",Y,ae=>_(e($).key,ae)),ue("keydown",Y,ae=>{(ae.key==="Enter"||ae.key===" ")&&(ae.preventDefault(),_(e($).key,ae))}),u(ce,Y)};Q(v,ce=>{e($).key==="_select"?ce(U):e($).key==="_actions"?ce(W,1):ce(le,-1)})}u(w,F)}),g(G),g(X);var te=E(X);He(te,21,()=>r.rows,w=>w.case_id,(w,$)=>{var z=mc();He(z,23,()=>e(y),F=>F.key,(F,v,U)=>{var W=be(),le=K(W);{var ce=de=>{var ae=uc(),xe=x(ae),he=x(xe);{let Ee=j(()=>e(b).has(e($).case_id));Ot(he,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e($).case_id),size:14})}g(xe),g(ae),J((Ee,pe)=>{Se(ae,1,`${Ee??""} !px-2.5 !py-0 w-9`),ke(ae,"data-col-key",e(v).key),Ze(ae,pe)},[()=>B(e(v),e(U)),()=>O(e(v))]),u(de,ae)},Y=de=>{var ae=dc(),xe=x(ae),he=x(xe,!0);g(xe),g(ae),J((Ee,pe,Fe,De)=>{Se(ae,1,Ee),ke(ae,"data-col-key",e(v).key),Ze(ae,pe),Se(xe,1,`status-pill ${Fe??""}`),ne(he,De)},[()=>dt(B(e(v),e(U))),()=>O(e(v)),()=>R(e($).status,e($).convergence),()=>C(e($).status,e($).convergence)]),u(de,ae)},ee=de=>{var ae=vc(),xe=x(ae);{var he=pe=>{var Fe=Ue();J(()=>ne(Fe,e($).note)),u(pe,Fe)},Ee=pe=>{var Fe=fc(),De=x(Fe);Le(De,{get icon(){return ki},size:12}),g(Fe),u(pe,Fe)};Q(xe,pe=>{e($).note?pe(he):pe(Ee,-1)})}g(ae),J((pe,Fe)=>{Se(ae,1,pe),ke(ae,"data-col-key",e(v).key),Ze(ae,Fe),ke(ae,"title",e($).note||"Add note")},[()=>dt(B(e(v),e(U))),()=>O(e(v))]),ue("click",ae,pe=>{pe.stopPropagation(),h(e($))}),ue("keydown",ae,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),pe.stopPropagation(),h(e($)))}),u(de,ae)},oe=de=>{var ae=hc(),xe=x(ae);$e(xe,{variant:"primary",size:"sm",onclick:he=>{he.stopPropagation(),c(e($).case_id)},children:(he,Ee)=>{var pe=gc(),Fe=K(pe);Le(Fe,{get icon(){return xi},size:12}),we(),u(he,pe)},$$slots:{default:!0}}),g(ae),J((he,Ee)=>{Se(ae,1,he),ke(ae,"data-col-key",e(v).key),Ze(ae,Ee)},[()=>dt(B(e(v),e(U))),()=>O(e(v))]),u(de,ae)},fe=de=>{var ae=pc(),xe=x(ae,!0);g(ae),J((he,Ee,pe)=>{Se(ae,1,he),ke(ae,"data-col-key",e(v).key),Ze(ae,Ee),ne(xe,pe)},[()=>dt(B(e(v),e(U))),()=>O(e(v)),()=>k(e($),e(v))]),u(de,ae)};Q(le,de=>{e(v).key==="_select"?de(ce):e(v).key==="status"?de(Y,1):e(v).key==="note"?de(ee,2):e(v).key==="_actions"?de(oe,3):de(fe,-1)})}u(F,W)}),g(z),J(F=>Se(z,1,F),[()=>dt(m(e($)))]),ue("click",z,F=>N(e($).case_id,F)),ue("contextmenu",z,F=>T(e($),F)),u(w,z)}),g(te),g(V),nt(V,w=>f(M,w),()=>e(M)),g(H),J(()=>Se(H,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,H),Ae()}Ge(["click","keydown","contextmenu"]);var xc=P('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function yc(t,r){Me(r,!0);let a=j(()=>{const _=Math.min(r.x,window.innerWidth-180),N=Math.min(r.y,window.innerHeight-120);return`left: ${_}px; top: ${N}px;`});async function n(_){try{for(const N of r.cases)await Ds(N,_)}catch(N){console.error("Failed to set convergence:",N)}r.onClose()}const o=r.cases.length>1?` (${r.cases.length})`:"";var i=xc();tt("keydown",it,_=>{_.key==="Escape"&&r.onClose()});var s=x(i),l=x(s);g(s);var d=E(s,2),b=x(d);g(d);var y=E(d,2),A=x(y);g(y),g(i),J(()=>{Ze(i,e(a)),Se(s,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ne(l,`Mark Converged${o}`),Se(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ne(b,`Mark Not Converged${o}`),Se(y,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ne(A,`Clear Mark${o}`)}),ue("click",s,()=>n("converged")),ue("click",d,()=>n("not_converged")),ue("click",y,()=>n("")),u(t,i),Ae()}Ge(["click"]);var wc=P("<!> Refresh",1),kc=P("<!> <!>",1),Cc=P("<!> Run",1),Sc=P("<!> Restart",1),$c=P("<!> Stop",1),Pc=P("<!> Kill",1),Ec=P("<!> Clean",1),Rc=P('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),Nc=P('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function Mc(t,r){Me(r,!0);function a(){return[...Bt()]}async function n(){const v=a();if(!v.length)return;const U=await Qo(v);if(U)try{await On({cases:v,n:U.n,nt:U.nt,maxParallel:U.maxParallel,backend:U.backend,options:U.options}),r.onRefresh()}catch(W){await Xe(`Run failed: ${W instanceof Error?W.message:W}`,"Error")}}async function o(){const v=a();if(!v.length)return;const U=await Zo(v);if(U)try{await On({cases:v,n:U.n,nt:U.nt,maxParallel:U.maxParallel,restart:!0,restartMode:U.restartMode,restartValue:U.restartValue}),r.onRefresh()}catch(W){await Xe(`Restart failed: ${W instanceof Error?W.message:W}`,"Error")}}async function i(){const v=a();if(!(!v.length||!await Dn(`Kill ${v.length} case${v.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await Ls(v),r.onRefresh()}catch(W){await Xe(`Kill failed: ${W instanceof Error?W.message:W}`,"Error")}}async function s(){const v=a();if(!(!v.length||!await Dn(`Stop ${v.length} case${v.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await kr({cases:v,action:"stop"}),r.onRefresh(),Cr(`Stop requested for ${v.length} case${v.length>1?"s":""} — will checkpoint and exit`)}catch(W){await Xe(`Stop failed: ${W instanceof Error?W.message:W}`,"Error")}}async function l(){const v=a();if(v.length)try{await kr({cases:v,action:"checkpoint"}),r.onRefresh(),Cr(`Checkpoint requested for ${v.length} case${v.length>1?"s":""}`)}catch(U){await Xe(`Checkpoint failed: ${U instanceof Error?U.message:U}`,"Error")}}async function d(){const v=a();if(!v.length)return;const U=await pn("Extend by how many additional time steps?","500","Extend Run");if(U===null)return;const W=parseInt(U,10);if(!Number.isFinite(W)||W<=0){await Xe("Enter a positive integer number of time steps.","Error");return}try{await kr({cases:v,action:"extend",value:W}),r.onRefresh(),Cr(`Extended ${v.length} case${v.length>1?"s":""} by ${W} time steps`)}catch(le){await Xe(`Extend failed: ${le instanceof Error?le.message:le}`,"Error")}}async function b(){const v=a();if(v.length)try{await kr({cases:v,action:"flush"}),Cr(`Flush requested for ${v.length} case${v.length>1?"s":""}`)}catch(U){await Xe(`Flush failed: ${U instanceof Error?U.message:U}`,"Error")}}async function y(){const v=a();if(!v.length)return;const U=await Jo(v);if(U)try{await Fs({cases:v,keepLast:U.keepLast,keepResu:U.keepResu,deleteResu:U.deleteResu,pruneResu:!0}),r.onRefresh(),il()}catch(W){await Xe(`Cleanup failed: ${W instanceof Error?W.message:W}`,"Error")}}function A(){const v=Rr();v.length>0&&v.every(W=>Bt().has(W))?Wn():Gn(v)}function _(v){on(v)}let N=D(se(tr("status")));Ne(()=>{rr("status",e(N))}),Bl(!0);let T=j(()=>{const v=Sr();return v.size>0&&[...v].some(U=>U==="PREPARED"||U==="DONE"||U==="FAILED")}),h=j(()=>{if(!cr("restart"))return!1;const v=Sr();return v.size>0&&[...v].some(U=>U==="DONE"||U==="FAILED")&&Yn()}),c=j(()=>{const v=Sr();return v.size>0&&v.has("RUNNING")}),C=j(()=>{if(!cr("control"))return!1;const v=Sr();return v.size>0&&v.has("RUNNING")});const R=[{label:"Extend",icon:yi,onClick:d,action:"extend"},{label:"Checkpoint",icon:Pi,onClick:l,action:"checkpoint"},{label:"Flush",icon:_i,onClick:b,action:"flush"}];let m=j(()=>R.filter(v=>bs(v.action)).map(v=>({label:v.label,icon:v.icon,onClick:v.onClick,disabled:!e(C)}))),k=j(Yn),S=D(se(Dl())),p=null;function M(){p&&clearTimeout(p),p=setTimeout(()=>{Ul(e(S))},200)}Ne(()=>ql(e(N)));let I=D(!1),L=D(0),B=D(0),O=D(se([])),H=D("");function V(v,U,W,le){f(O,Bt().has(v)?[...Bt()]:[v],!0),f(H,le,!0),f(L,U,!0),f(B,W,!0),f(I,!0)}function X(){f(I,!1)}function G(v){const U=Rr();if(U.length){if(v.key==="Escape"){Wn(),X();return}if((v.ctrlKey||v.metaKey)&&v.key==="a"){v.preventDefault(),Gn(U);return}if(v.key==="ArrowDown"||v.key==="ArrowUp"){v.preventDefault();const W=v.key==="ArrowDown"?1:-1,le=Bn(),ce=U.indexOf(le),Y=Math.max(0,Math.min(U.length-1,ce+W)),ee=U[Y];v.shiftKey?sn(an()||U[0],ee,U):Ea(ee),Vl(ee);return}if(v.key===" "){v.preventDefault();const W=Bn();W&&(v.shiftKey?sn(an()||W,W,Rr()):on(W))}}}var te=Nc();tt("click",it,X),tt("scroll",it,X);var w=K(te),$=x(w);jt($,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:U=>{var W=kc(),le=K(W);{let ee=j(ol);nr(le,{name:"status",get intervalMs(){return e(ee)},get onRefresh(){return r.onRefresh},get checked(){return e(N)},set checked(oe){f(N,oe,!0)}})}var ce=E(le,2);{var Y=ee=>{$e(ee,{variant:"primary",onclick:()=>r.onRefresh(),children:(oe,fe)=>{var de=wc(),ae=K(de);Le(ae,{get icon(){return er}}),we(),u(oe,de)},$$slots:{default:!0}})};Q(ce,ee=>{e(N)||ee(Y)})}u(U,W)},children:(U,W)=>{var le=Rc(),ce=K(le),Y=x(ce),ee=x(Y);Ye(ee);var oe=E(ee,2);oc(oe,{}),g(Y);var fe=E(Y,2),de=x(fe),ae=x(de);g(de);var xe=E(de,2);{let q=j(()=>!e(T));$e(xe,{variant:"run",size:"sm",onclick:n,get disabled(){return e(q)},children:(re,ie)=>{var ve=Cc(),ye=K(ve);Le(ye,{get icon(){return Sa}}),we(),u(re,ve)},$$slots:{default:!0}})}var he=E(xe,2);{var Ee=q=>{{let re=j(()=>!e(h));$e(q,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(re)},children:(ie,ve)=>{var ye=Sc(),ge=K(ye);Le(ge,{get icon(){return $i}}),we(),u(ie,ye)},$$slots:{default:!0}})}},pe=j(()=>cr("restart"));Q(he,q=>{e(pe)&&q(Ee)})}var Fe=E(he,2);{var De=q=>{{let re=j(()=>!e(C));$e(q,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(re)},children:(ie,ve)=>{var ye=$c(),ge=K(ye);Le(ge,{get icon(){return pi}}),we(),u(ie,ye)},$$slots:{default:!0}})}},Qe=j(()=>cr("control"));Q(Fe,q=>{e(Qe)&&q(De)})}var Ve=E(Fe,2);{var rt=q=>{Ml(q,{get items(){return e(m)}})};Q(Ve,q=>{e(m).length>0&&q(rt)})}var Te=E(Ve,2);{let q=j(()=>!e(c));$e(Te,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(q)},children:(re,ie)=>{var ve=Pc(),ye=K(ve);Le(ye,{get icon(){return mi}}),we(),u(re,ve)},$$slots:{default:!0}})}var Pe=E(Te,2);{let q=j(()=>!e(k));$e(Pe,{variant:"secondary",size:"sm",onclick:y,get disabled(){return e(q)},children:(re,ie)=>{var ve=Ec(),ye=K(ve);Le(ye,{get icon(){return Ri}}),we(),u(re,ve)},$$slots:{default:!0}})}g(fe),g(ce);var Z=E(ce,2);{let q=j(Na);bc(Z,{get rows(){return e(q)},onContextMenu:V,onToggleAll:A,onToggleRow:_})}J(q=>ne(ae,`${q??""} selected`),[()=>Bt().size]),ue("input",ee,M),et(ee,()=>e(S),q=>f(S,q)),u(U,le)},$$slots:{actions:!0,default:!0}}),g(w);var z=E(w,2);{var F=v=>{yc(v,{get cases(){return e(O)},get x(){return e(L)},get y(){return e(B)},get currentValue(){return e(H)},onClose:X})};Q(z,v=>{e(I)&&v(F)})}ue("keydown",w,G),u(t,te),Ae()}Ge(["keydown","input"]);var Ac=P('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Qt(t,r){var a=Ac(),n=x(a);ft(n,()=>r.children),g(a),u(t,a)}function Sn(t){return t.map(r=>({value:r,label:r}))}var Tc=P('<input type="number" step="any" class="w-[110px]"/>'),Lc=P("<!> <!> <!> <!> <!> <!>",1);function $n(t,r){Me(r,!0);let a=me(r,"columnLabel",3,"Columns"),n=me(r,"xMinLabel",3,"Iter min"),o=j(()=>Sn(r.allCases)),i=j(()=>r.columns.map(d=>({value:d,label:d}))),s=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Qt(t,{children:(d,b)=>{var y=Lc(),A=K(y);Re(A,{text:"Cases",children:(k,S)=>{Wt(k,{class:"w-[160px]",get options(){return e(o)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var _=E(A,2);{var N=k=>{var S=be(),p=K(S);ft(p,()=>r.middleSlot),u(k,S)};Q(_,k=>{r.middleSlot&&k(N)})}var T=E(_,2);Re(T,{get text(){return a()},children:(k,S)=>{Wt(k,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var h=E(T,2);Re(h,{text:"Start from",children:(k,S)=>{lt(k,{class:"w-[140px]",get options(){return s},get value(){return r.startFrom},onchange:p=>r.onStartFromChange(p)})}});var c=E(h,2);{var C=k=>{Re(k,{get text(){return n()},children:(S,p)=>{var M=Tc();Ye(M),J(()=>gn(M,r.xMin)),ue("input",M,l),u(S,M)}})};Q(c,k=>{r.startFrom==="custom"&&k(C)})}var R=E(c,2);{var m=k=>{var S=be(),p=K(S);ft(p,()=>r.extraSlot),u(k,S)};Q(R,k=>{r.extraSlot&&k(m)})}u(d,y)}}),Ae()}Ge(["input"]);var Fc=P('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),Ic=P('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Zt(t,r){let a=me(r,"emptyMessage",3,"");var n=Ic(),o=x(n);{var i=l=>{var d=be(),b=K(d);Dr(b,()=>r.svgHtml),u(l,d)},s=l=>{var d=Fc(),b=x(d),y=x(b,!0);g(b),g(d),J(()=>ne(y,a()||"No data to display.")),u(l,d)};Q(o,l=>{r.svgHtml?l(i):l(s,-1)})}g(n),J(()=>ke(n,"id",r.id)),u(t,n)}async function Pn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:o,height:i}=Dc(n),s=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=o*s,l.height=i*s;const d=l.getContext("2d");if(!d)return;d.scale(s,s);const b=new XMLSerializer().serializeToString(n),y=new Blob([b],{type:"image/svg+xml;charset=utf-8"}),A=URL.createObjectURL(y),_=new Image;_.width=o,_.height=i,await new Promise((T,h)=>{_.onload=()=>{d.drawImage(_,0,0,o,i),URL.revokeObjectURL(A),T()},_.onerror=h,_.src=A});const N=await new Promise(T=>l.toBlob(T,"image/png"));N&&await Aa(N,zc(r))}function xr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,o=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Oc(`${t}_${n}_${o}.${a}`)}async function Ma(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Aa(a,r)}function Dc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Aa(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(o){if((o==null?void 0:o.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function zc(t){return t.endsWith(".png")?t:`${t}.png`}function Oc(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Ta=D(se([])),La=D(se([])),Fa=D(se([])),Ia=D("zero"),Da=D(0),za=D(""),Hc=D(!0);function jc(){return{selectedCases:e(Ta),columns:e(La),selectedColumns:e(Fa),startFrom:e(Ia),iterMin:e(Da),svgHtml:e(za),autoRefresh:e(Hc)}}function Qn(t){f(Ta,t,!0)}function Vc(t){f(La,t,!0)}function Xr(t){f(Fa,t,!0)}function Uc(t){f(Ia,t,!0)}function Bc(t){f(Da,t,!0)}function $r(t){f(za,t,!0)}var qc=P("<!> Refresh",1),Kc=P("<!> <!>",1),Gc=P("<!> Download as PNG",1),Wc=P('<div class="self-end ml-auto"><!></div>'),Xc=P('<!> <div class="flex justify-center"><!></div>',1),Yc=P('<div class="flex justify-center"><!></div>'),Qc=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Zc=P("<!> <!>",1);function Jc(t,r){Me(r,!0);let a=j(jc),n=D("");const o=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function s(){if(e(a).selectedCases.length)try{const h=await Cs(e(a).selectedCases);f(n,"");const c=h.filter(C=>!o.has(C.toLowerCase().replace(/\s+/g,"_")));if(Vc(c),c.length===0){Xr([]),$r("");return}if(e(a).selectedColumns.length===0){const C=c.filter(R=>i.some(m=>R.toLowerCase().includes(m)));Xr(C.length>0?C:[c[0]])}}catch(h){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",h)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await s(),!e(a).selectedColumns.length)))try{let h=0,c=!0;if(e(a).startFrom==="restart"){const R=await Ca(e(a).selectedCases),m=Object.values(R.origins).map(k=>k.iteration).filter(k=>k!==void 0&&Number.isFinite(k));h=m.length>0?Math.min(...m):0}else e(a).startFrom==="custom"&&(h=e(a).iterMin);const C=await Ss(e(a).selectedCases,e(a).selectedColumns,{xMin:h,includeHistory:c});f(n,""),C&&$r(C)}catch(h){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",h)}}function d(h){if(Qn(h),h.length===0){$r("");return}s(),l()}function b(h){if(Xr(h),h.length===0){$r("");return}l()}function y(h){Uc(h),l()}function A(h){Bc(h),l()}let _=D(se(tr("plot")));Ne(()=>{rr("plot",e(_))}),Ne(()=>{e(_)?mr("residualPlot",l,Vn()):vt("residualPlot")});let N=!1;Ne(()=>{r.allCases.length>0&&!N&&(N=!0,Qn([...r.allCases]),s().then(()=>l()))});const T=_r(()=>{N&&s().then(()=>l())});vr(()=>{vt("residualPlot"),T()}),jt(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var C=Kc(),R=K(C);{let S=j(Vn);nr(R,{name:"residualPlot",get intervalMs(){return e(S)},onRefresh:l,get checked(){return e(_)},set checked(p){f(_,p,!0)}})}var m=E(R,2);{var k=S=>{$e(S,{variant:"primary",onclick:l,children:(p,M)=>{var I=qc(),L=K(I);Le(L,{get icon(){return er}}),we(),u(p,I)},$$slots:{default:!0}})};Q(m,S=>{e(_)||S(k)})}u(c,C)},children:(c,C)=>{var R=Zc(),m=K(R);{var k=I=>{const L=X=>{var G=Wc(),te=x(G);{let w=j(()=>!e(a).svgHtml);$e(te,{variant:"secondary",size:"sm",onclick:()=>Pn("plot-holder",xr("residuals",e(a).selectedCases)),get disabled(){return e(w)},children:($,z)=>{var F=Gc(),v=K(F);Le(v,{get icon(){return pr}}),we(),u($,F)},$$slots:{default:!0}})}g(G),u(X,G)};var B=Xc(),O=K(B);$n(O,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:b,get startFrom(){return e(a).startFrom},onStartFromChange:y,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:A,get extraSlot(){return L}});var H=E(O,2),V=x(H);{let X=j(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Zt(V,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(X)}})}g(H),u(I,B)},S=I=>{var L=Yc(),B=x(L);Zt(B,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),g(L),u(I,L)};Q(m,I=>{e(a).columns.length>0?I(k):I(S,-1)})}var p=E(m,2);{var M=I=>{var L=Qc(),B=x(L,!0);g(L),J(()=>ne(B,e(n))),u(I,L)};Q(p,I=>{e(n)&&I(M)})}u(c,R)},$$slots:{actions:!0,default:!0}}),Ae()}function Oa(t){const{scope:r,getState:a,setState:n,setHasData:o,getAxis:i}=t;async function s(){const _=a();if(_.selectedCases.length)try{let N=await en(_.selectedCases,r);if(t.filterFiles&&(N=t.filterFiles(N)),n({files:N}),o(N.length>0),N.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!_.file||!N.includes(_.file))&&(n({file:N[0]}),await l())}catch(N){console.error(`Failed to load ${r} files:`,N)}}async function l(){const _=a();if(!(!_.selectedCases.length||!_.file))try{const N=await Ns(_.selectedCases,[_.file]),T=t.filterColumns?t.filterColumns(N):N;t.onColumnsLoaded?t.onColumnsLoaded(N):n({columns:T});const h=a();if(h.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}h.selectedColumns.length===0&&n({selectedColumns:[h.columns[0]]})}catch(N){console.error(`Failed to load ${r} columns:`,N)}}async function d(){let _=a();if(_.selectedCases.length){if(await s(),_=a(),!_.file){n({positionText:"",svgHtml:""});return}if((_.columns.length===0||_.selectedColumns.length===0)&&(await l(),_=a(),!_.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let N;const T=a();if(T.startFrom==="restart"){const c=await Ca(T.selectedCases),C=i().toLowerCase(),R=C==="t"||C==="time"?"time":"iteration",m=Object.values(c.origins).map(k=>k[R]).filter(k=>k!==void 0&&Number.isFinite(k));N=m.length>0?Math.min(...m):void 0}else T.startFrom==="custom"&&(N=T.xMin);const h=await As({cases:T.selectedCases,probes:[T.file],columns:T.selectedColumns,axis:i(),timeMin:typeof N=="number"?N:void 0,xMin:N,includeHistory:!0});h&&n({svgHtml:h})}catch(N){console.error(`Failed to load ${r} plot:`,N)}}}async function b(_){if(n({selectedCases:_}),_.length===0){n({svgHtml:""});return}await s(),r==="monitoring"&&await d()}function y(_){if(n({selectedColumns:_}),_.length===0){n({svgHtml:""});return}d()}async function A(_){n({file:_}),await l(),await d()}return{loadFiles:s,loadColumns:l,loadPlot:d,handleCasesChange:b,handleColumnsChange:y,handleFileChange:A}}function Ha(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let qt=D("time"),ln=D(se(Ha())),cn=D(se({...Ha(),axis:""})),eu=D(!0),Lr=D(!1),Fr=D(!1);function tu(){return e(qt)}function ru(t){f(qt,t,!0)}function nu(){return e(Lr)}function un(t){f(Lr,t,!0)}function au(){return e(Fr)}function dn(t){f(Fr,t,!0)}function ou(){e(qt)==="time"&&!e(Lr)&&e(Fr)?f(qt,"profile"):e(qt)==="profile"&&!e(Fr)&&e(Lr)&&f(qt,"time")}function Zn(){return e(ln)}function Yr(){return e(cn)}function kt(t){f(ln,{...e(ln),...t},!0)}function At(t){f(cn,{...e(cn),...t},!0)}function su(){return e(eu)}var iu=P("<!> Download as PNG",1),lu=P('<div class="self-end ml-auto"><!></div>'),cu=P("<div> </div>"),uu=P('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),du=P('<!>  <!> <div class="flex justify-center"><!></div>',1),fu=P('<div class="flex justify-center"><!></div>');function vu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=j(Zn);const o=new Set(["time","t","iteration","iter"]),i=Oa({scope:"monitoring",getState:Zn,setState:kt,setHasData:un,filterFiles:h=>h.filter(c=>{const C=c.replace(/\.csv$/i,"").toLowerCase();return C!=="coords"&&!C.includes("coordinates")}),filterColumns:h=>h.filter(c=>!o.has(c.toLowerCase())),onColumnsLoaded:h=>{const c=h.filter(C=>!o.has(C.toLowerCase()));kt({columns:c}),s()},getAxis:()=>"time"});async function s(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const h=[];for(const S of e(n).selectedColumns){const p=await Ms(e(n).selectedCases[0],e(n).file,[S]);p.found&&h.push({col:S,x:p.x,y:p.y,z:p.z})}if(!h.length){kt({positionText:""});return}const c=S=>{let p=0;for(const M of S){if(M===void 0)continue;const I=String(M),L=I.indexOf(".");L>=0&&(p=Math.max(p,I.length-L-1))}return p},C=c(h.map(S=>S.x)),R=c(h.map(S=>S.y)),m=c(h.map(S=>S.z)),k=h.map(S=>{const p=[];return S.x!==void 0&&p.push(`x=${S.x.toFixed(C)}`),S.y!==void 0&&p.push(`y=${S.y.toFixed(R)}`),S.z!==void 0&&p.push(`z=${S.z.toFixed(m)}`),`Probe position [${S.col}] : ${p.join(" · ")}`});kt({positionText:k.join(`
`)})}catch{kt({positionText:""})}}function l(h){i.handleColumnsChange(h),h.length>0&&s()}let d=j(()=>e(n).files.map(h=>({value:h,label:h.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),b=!1;Ne(()=>{r.allCases.length>0&&!b&&(b=!0,kt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let y=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var A=be(),_=K(A);{var N=h=>{const c=I=>{Re(I,{text:"Quantity",children:(L,B)=>{lt(L,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},C=I=>{var L=lu(),B=x(L);{let O=j(()=>!e(n).svgHtml);$e(B,{variant:"secondary",size:"sm",onclick:()=>Pn("probe-plot-holder",xr("probe",e(n).selectedCases)),get disabled(){return e(O)},children:(H,V)=>{var X=iu(),G=K(X);Le(G,{get icon(){return pr}}),we(),u(H,X)},$$slots:{default:!0}})}g(L),u(I,L)};var R=du(),m=K(R);$n(m,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:I=>{kt({startFrom:I}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:I=>{kt({xMin:I}),i.loadPlot()},get extraSlot(){return C}});var k=E(m,2);{var S=I=>{var L=uu();He(L,21,()=>e(n).positionText.split(`
`).sort(),vn,(B,O)=>{var H=cu(),V=x(H,!0);g(H),J(()=>ne(V,e(O))),u(B,H)}),g(L),u(I,L)};Q(k,I=>{e(n).positionText&&I(S)})}var p=E(k,2),M=x(p);Zt(M,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(y)}}),g(p),u(h,R)},T=h=>{var c=fu(),C=x(c);Zt(C,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),g(c),u(h,c)};Q(_,h=>{e(n).files.length>0?h(N):h(T,-1)})}u(t,A),Ae()}var gu=P("<!> <!>",1),hu=P("<!> Download as PNG",1),pu=P('<div class="self-end ml-auto"><!></div>'),mu=P('<!>  <div class="flex justify-center"><!></div>',1),_u=P('<div class="flex justify-center"><!></div>');function bu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=j(Yr);const o=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const C=c.map(R=>R.toLowerCase());for(const R of o){const m=C.indexOf(R);if(m>=0)return c[m]}return c[0]??""}const s=Oa({scope:"profiles",getState:Yr,setState:At,setHasData:dn,onColumnsLoaded:c=>{const C=e(n).axis||i(c),R=c.filter(m=>m!==C).toSorted((m,k)=>m.localeCompare(k));At({columns:R,axis:C,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:R.length?[R[0]]:[]})},getAxis:()=>Yr().axis});function l(c){const C=e(n).axis;At({axis:c});const m=[...e(n).columns,...C?[C]:[]].filter(k=>k!==c).toSorted((k,S)=>k.localeCompare(S));At({columns:m}),s.loadPlot()}let d=j(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),b=j(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,C)=>c.localeCompare(C)).map(c=>({value:c,label:c}))),y=!1;Ne(()=>{r.allCases.length>0&&!y&&(y=!0,At({selectedCases:[...r.allCases]}),s.loadFiles().then(()=>s.loadPlot()))}),Ne(()=>{a(s.loadPlot)});let A=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var _=be(),N=K(_);{var T=c=>{const C=M=>{var I=gu(),L=K(I);Re(L,{text:"Profile",children:(O,H)=>{lt(O,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return s.handleFileChange}})}});var B=E(L,2);Re(B,{text:"X axis",children:(O,H)=>{lt(O,{class:"w-[140px]",get options(){return e(b)},get value(){return e(n).axis},onchange:l})}}),u(M,I)},R=M=>{var I=pu(),L=x(I);{let B=j(()=>!e(n).svgHtml);$e(L,{variant:"secondary",size:"sm",onclick:()=>Pn("profile-plot-holder",xr("profile",e(n).selectedCases)),get disabled(){return e(B)},children:(O,H)=>{var V=hu(),X=K(V);Le(X,{get icon(){return pr}}),we(),u(O,V)},$$slots:{default:!0}})}g(I),u(M,I)};var m=mu(),k=K(m);$n(k,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return s.handleCasesChange},get middleSlot(){return C},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return s.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:M=>{At({startFrom:M}),s.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:M=>{At({xMin:M}),s.loadPlot()},get extraSlot(){return R}});var S=E(k,2),p=x(S);Zt(p,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(A)}}),g(S),u(c,m)},h=c=>{var C=_u(),R=x(C);Zt(R,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),g(C),u(c,C)};Q(N,c=>{e(n).files.length>0?c(T):c(h,-1)})}u(t,_),Ae()}var xu=P('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),yu=P("<!> Refresh",1),wu=P("<!> <!>",1);function ku(t,r){Me(r,!0);let a=j(tu),n=j(su),o=j(nu),i=j(au),s=D(se(tr("probe")));Ne(()=>{rr("probe",e(s))});let l=D(void 0);function d(){var T;(T=e(l))==null||T()}async function b(){if(r.allCases.length){try{const h=(await en(r.allCases,"monitoring")).filter(c=>{const C=c.replace(/\.csv$/i,"").toLowerCase();return C!=="coords"&&!C.includes("coordinates")});un(h.length>0)}catch{un(!1)}try{const T=await en(r.allCases,"profiles");dn(T.length>0)}catch{dn(!1)}}}Ne(()=>{r.allCases.length>0&&b()}),_r(()=>{b(),d()}),Ne(()=>{e(o),e(i),ou()});function y(T){T==="time"&&!e(o)||T==="profile"&&!e(i)||ru(T)}var A=be(),_=K(A);{var N=T=>{{const h=C=>{var R=xu(),m=E(x(R),2),k=x(m),S=E(k,2);g(m),g(R),J(()=>{Se(k,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(o)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),k.disabled=!e(o),ke(k,"title",e(o)?"":"No probe data available. Run a simulation first."),Se(S,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),S.disabled=!e(i),ke(S,"title",e(i)?"":"No profile data available. Run a simulation first.")}),ue("click",k,()=>y("time")),ue("click",S,()=>y("profile")),u(C,R)};jt(T,{wide:!0,titleSlot:h,tabs:h,actions:C=>{var R=wu(),m=K(R);{let p=j(()=>e(a)==="time"?"probePlot":"profilePlot"),M=j(sl);nr(m,{get name(){return e(p)},get intervalMs(){return e(M)},onRefresh:d,get checked(){return e(s)},set checked(I){f(s,I,!0)}})}var k=E(m,2);{var S=p=>{$e(p,{variant:"primary",onclick:d,children:(M,I)=>{var L=yu(),B=K(L);Le(B,{get icon(){return er}}),we(),u(M,L)},$$slots:{default:!0}})};Q(k,p=>{e(s)||p(S)})}u(C,R)},children:(C,R)=>{var m=be(),k=K(m);{var S=M=>{vu(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(I){f(l,I,!0)}})},p=M=>{bu(M,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(I){f(l,I,!0)}})};Q(k,M=>{e(a)==="time"?M(S):M(p,-1)})}u(C,m)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Q(_,T=>{e(n)&&T(N)})}u(t,A),Ae()}Ge(["click"]);var Cu=P("<!> Refresh",1),Su=P("<!> <!>",1),$u=P("<!> Download as CSV",1),Pu=P('<!> <div class="self-end ml-auto"><!></div>',1),Eu=P("<th> </th>"),Ru=P('<td class="whitespace-nowrap"> </td>'),Nu=P('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),Mu=P('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),Au=P('<p class="text-sm text-muted italic text-center py-8"><!></p>'),Tu=P("<!> <!>",1);function Lu(t,r){Me(r,!0);let a=D(se([])),n=D(se([])),o=D(!1),i=D(!1),s=D(se(tr("perf")));Ne(()=>{rr("perf",e(s))});const l=5e3;let b=D(se([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),y=j(()=>r.allCases.map(R=>({value:R,label:R}))),A=j(()=>e(n).length>0);async function _(){var R;if(e(a).length){f(i,!0);try{const m=await zn(e(a));(R=m.columns)!=null&&R.length&&f(b,m.columns,!0),f(n,m.records,!0),e(n).length>0&&f(o,!0)}catch(m){console.error("Failed to load perf:",m)}f(i,!1)}}function N(R){if(f(a,R,!0),R.length===0){f(n,[],!0);return}_()}function T(R,m){if(m==null||m==="")return"-";if(R==="text")return m;const k=Number(m);return Number.isFinite(k)?R==="int"?String(Math.round(k)):k.toFixed(3):m}async function h(){if(!e(n).length)return;const R=["case_id",...e(b).map(p=>p.key)],m=e(n).map(p=>[p.case_id,...e(b).map(M=>p[M.key]??"")].join(",")),k=[R.join(","),...m].join(`
`),S=xr("timing_snapshot",e(a),"csv");await Ma(k,S)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),zn(r.allCases).then(R=>{var m;(m=R.columns)!=null&&m.length&&f(b,R.columns,!0),f(o,R.records.length>0),f(n,R.records,!0)}).catch(()=>{}))}),Ne(()=>{e(s)?mr("perf",_,l):vt("perf")});const C=_r(()=>{c&&_()});vr(()=>{vt("perf"),C()}),jt(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:m=>{var k=Su(),S=K(k);nr(S,{name:"perf",intervalMs:l,onRefresh:_,get checked(){return e(s)},set checked(I){f(s,I,!0)}});var p=E(S,2);{var M=I=>{$e(I,{variant:"primary",onclick:_,children:(L,B)=>{var O=Cu(),H=K(O);Le(H,{get icon(){return er}}),we(),u(L,O)},$$slots:{default:!0}})};Q(p,I=>{e(s)||I(M)})}u(m,k)},children:(m,k)=>{var S=Tu(),p=K(S);{var M=O=>{Qt(O,{children:(H,V)=>{var X=Pu(),G=K(X);Re(G,{text:"Cases",children:($,z)=>{Wt($,{class:"w-[160px]",get options(){return e(y)},get selected(){return e(a)},onchange:N,placeholder:"Select cases..."})}});var te=E(G,2),w=x(te);{let $=j(()=>!e(A));$e(w,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e($)},children:(z,F)=>{var v=$u(),U=K(v);Le(U,{get icon(){return pr}}),we(),u(z,v)},$$slots:{default:!0}})}g(te),u(H,X)}})};Q(p,O=>{e(o)&&O(M)})}var I=E(p,2);{var L=O=>{var H=Mu(),V=x(H),X=x(V),G=x(X),te=E(x(G));He(te,17,()=>e(b),$=>$.key,($,z)=>{var F=Eu(),v=x(F,!0);g(F),J(()=>ne(v,e(z).label)),u($,F)}),g(G),g(X);var w=E(X);He(w,21,()=>e(n),$=>$.case_id,($,z)=>{var F=Nu(),v=x(F),U=x(v,!0);g(v);var W=E(v);He(W,17,()=>e(b),le=>le.key,(le,ce)=>{var Y=Ru(),ee=x(Y,!0);g(Y),J(oe=>ne(ee,oe),[()=>T(e(ce).kind,e(z)[e(ce).key])]),u(le,Y)}),g(F),J(()=>ne(U,e(z).case_id)),u($,F)}),g(w),g(V),g(H),u(O,H)},B=O=>{var H=Au(),V=x(H);{var X=te=>{var w=Ue("Select cases above to view timing information.");u(te,w)},G=te=>{var w=Ue("No performance data available. Please run a simulation first.");u(te,w)};Q(V,te=>{e(o)?te(X):te(G,-1)})}g(H),u(O,H)};Q(I,O=>{e(A)?O(L):O(B,-1)})}u(m,S)},$$slots:{actions:!0,default:!0}}),Ae()}const Fu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ja(t){return t.replace(/[&<>"']/g,r=>Fu[r]??r)}var Iu=P("<div></div>"),Du=P('<pre class="code-box tail-pane"></pre>');function zu(t,r){Me(r,!0);let a=D(void 0);function n(b){const y=ja(b);if(!r.searchQuery.trim())return y;try{const A=new RegExp(`(${r.searchQuery})`,"gi");return y.replace(A,'<span class="tail-query-hit">$1</span>')}catch{return y}}function o(b){return b==="error"?"tail-sev-error":b==="warn"?"tail-sev-warn":b==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let s=D(!0);function l(){f(s,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(s)&&Pt().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=Du();He(d,21,()=>r.lines,b=>b.index,(b,y)=>{var A=Iu();Dr(A,()=>n(e(y).text),!0),g(A),J(_=>Se(A,1,`tail-line ${_??""} ${e(y).isNew?"tail-new":""}`),[()=>o(e(y).severity)]),u(b,A)}),g(d),nt(d,b=>f(a,b),()=>e(a)),tt("scroll",d,l),u(t,d),Ae()}const Ou=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,Hu=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function ju(t){return Ou.test(t)?"error":Hu.test(t)?"warn":"none"}function Vu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Uu=P("<!> Refresh",1),Bu=P("<!> <!>",1),qu=P('<input type="number" min="1" class="w-[70px]"/>'),Ku=P('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Gu=P("<!> <!> <!> <!> <!>",1),Wu=Ht('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Xu=Ht('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Yu=Ht('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Qu=P("<!> Resume",1),Zu=P("<!> Pause",1),Ju=P('<span class="text-xs text-muted">Case not running</span>'),ed=P('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),td=P('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),rd=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),nd=P("<!> <!> <!>",1);function ad(t,r){Me(r,!0);const a=80;let n=D(""),o=D(""),i=D(!1),s=D(se([])),l=D(a),d=D(se([])),b=D(se(new Set)),y=D(!1),A=D(se(tr("tail")));Ne(()=>{rr("tail",e(A))});let _=D(!0),N=D("all"),T=D(""),h=D(""),c=D(void 0),C=j(()=>Sn(r.allCases)),R=j(()=>e(s).map(w=>{const $=w.split("/").pop()??w;return{value:w,label:$}})),m=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],k=j(()=>e(s).length>0),S=j(()=>wn().some(w=>{var $;return w.case_id===e(n)&&(($=w.status)==null?void 0:$.toUpperCase())==="RUNNING"}));const p={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function M(w){const $=w.split("/").pop()??w;return p[$]??99}async function I(){if(e(n))try{const z=(await Es(e(n))).filter(F=>{const v=F.split("/").pop()??F;return F.endsWith(".log")||F.endsWith("/summary")||v in p}).sort((F,v)=>M(F)-M(v));if(f(s,z,!0),z.length>0){const F=z[0];!e(o)||!z.includes(e(o))?(f(o,F,!0),f(i,!1)):!e(i)&&M(F)<M(e(o))&&f(o,F,!0)}e(s).length===0&&(f(o,""),f(d,[],!0))}catch(w){console.error("Failed to load tail files:",w),f(s,[],!0)}}async function L(w=!1){if(e(n)&&!(e(y)&&!w)&&(await I(),!!e(o)))try{const $=await Ps(e(n),e(o),e(l));f(h,"");const z=$.split(`
`),F=z.length>0&&z[z.length-1]===""?z.slice(0,-1):z;if(e(d).length>0){const v=B(e(d),F),U=new Set;for(let W=v;W<F.length;W++)U.add(W);f(b,U,!0)}f(d,F,!0)}catch($){f(h,"Failed to load log tail"),console.error("Failed to load tail:",$)}}function B(w,$){const z=Math.min(w.length,$.length);for(let F=0;F<z;F++){let v=!0;for(let U=0;U<Math.min(w.length-F,$.length);U++)if(w[F+U]!==$[U]){v=!1;break}if(v)return w.length-F}return 0}let O=j(()=>{let w=e(d).map(($,z)=>({text:$,index:z,severity:ju($),isNew:e(b).has(z)}));if(e(N)!=="all"&&(w=w.filter($=>Vu($.severity,e(N)))),e(T).trim())try{const $=new RegExp(e(T),"i");w=w.filter(z=>$.test(z.text))}catch{}return w});function H(w){f(n,w,!0),f(o,""),f(i,!1),f(d,[],!0),I().then(()=>L(!0))}function V(w){f(o,w,!0),f(i,!0),f(d,[],!0),L(!0)}function X(){f(y,!e(y)),e(y)||L(!0)}function G(w){(w.ctrlKey||w.metaKey)&&w.key==="f"&&e(c)&&(w.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),I().then(()=>L(!0)))}),Ne(()=>{e(A)&&!e(y)&&e(n)?mr("tail",()=>L(!1),jn()):vt("tail")});const te=_r(()=>{e(n)&&I().then(()=>L(!0))});vr(()=>{vt("tail"),te()}),tt("keydown",it,G),jt(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:$=>{var z=Bu(),F=K(z);{let W=j(jn);nr(F,{name:"tail",get intervalMs(){return e(W)},onRefresh:()=>L(!1),get checked(){return e(A)},set checked(le){f(A,le,!0)}})}var v=E(F,2);{var U=W=>{$e(W,{variant:"primary",onclick:()=>L(!0),children:(le,ce)=>{var Y=Uu(),ee=K(Y);Le(ee,{get icon(){return er}}),we(),u(le,Y)},$$slots:{default:!0}})};Q(v,W=>{e(A)||W(U)})}u($,z)},children:($,z)=>{var F=nd(),v=K(F);{var U=oe=>{Qt(oe,{children:(fe,de)=>{var ae=Gu(),xe=K(ae);Re(xe,{text:"Case",children:(De,Qe)=>{lt(De,{class:"w-[130px]",get options(){return e(C)},get value(){return e(n)},onchange:H})}});var he=E(xe,2);Re(he,{text:"File",children:(De,Qe)=>{lt(De,{class:"w-[150px]",get options(){return e(R)},get value(){return e(o)},onchange:V})}});var Ee=E(he,2);Re(Ee,{text:"Lines",children:(De,Qe)=>{var Ve=qu();Ye(Ve),ue("change",Ve,()=>L(!0)),et(Ve,()=>e(l),rt=>f(l,rt)),u(De,Ve)}});var pe=E(Ee,2);Re(pe,{text:"Filter",children:(De,Qe)=>{var Ve=Ku();Ye(Ve),nt(Ve,rt=>f(c,rt),()=>e(c)),et(Ve,()=>e(T),rt=>f(T,rt)),u(De,Ve)}});var Fe=E(pe,2);Re(Fe,{text:"Severity",children:(De,Qe)=>{lt(De,{class:"w-[90px]",get options(){return m},get value(){return e(N)},onchange:Ve=>f(N,Ve,!0)})}}),u(fe,ae)}})};Q(v,oe=>{e(k)&&oe(U)})}var W=E(v,2);{var le=oe=>{var fe=ed(),de=K(fe);zu(de,{get lines(){return e(O)},get searchQuery(){return e(T)},get autoScroll(){return e(_)}});var ae=E(de,2),xe=x(ae),he=x(xe);{var Ee=Z=>{var q=Wu();u(Z,q)},pe=Z=>{var q=Xu();u(Z,q)},Fe=Z=>{var q=Yu();u(Z,q)};Q(he,Z=>{e(y)?Z(Ee):e(S)?Z(pe,1):Z(Fe,-1)})}var De=E(he);g(xe);var Qe=E(xe,2);{var Ve=Z=>{$e(Z,{variant:"secondary",size:"sm",onclick:X,children:(q,re)=>{var ie=be(),ve=K(ie);{var ye=_e=>{var Ce=Qu(),ze=K(Ce);Le(ze,{get icon(){return Sa}}),we(),u(_e,Ce)},ge=_e=>{var Ce=Zu(),ze=K(Ce);Le(ze,{get icon(){return wi}}),we(),u(_e,Ce)};Q(ve,_e=>{e(y)?_e(ye):_e(ge,-1)})}u(q,ie)},$$slots:{default:!0}})},rt=Z=>{var q=Ju();u(Z,q)};Q(Qe,Z=>{e(S)?Z(Ve):Z(rt,-1)})}var Te=E(Qe,2),Pe=x(Te);Ot(Pe,{get checked(){return e(_)},onchange:Z=>f(_,Z,!0),size:14,label:"Auto-scroll",labelFirst:!0}),g(Te),g(ae),J(()=>ne(De,` ${e(O).length??""} / ${e(d).length??""}`)),u(oe,fe)},ce=oe=>{var fe=td();u(oe,fe)};Q(W,oe=>{e(d).length>0?oe(le):oe(ce,-1)})}var Y=E(W,2);{var ee=oe=>{var fe=rd(),de=x(fe,!0);g(fe),J(()=>ne(de,e(h))),u(oe,fe)};Q(Y,oe=>{e(h)&&oe(ee)})}u($,F)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["change"]);function od(t,r=3){var N,T;const a=t.split(`
`),n=[];let o=0,i=0,s=!1;for(const h of a){if(h.startsWith("===")||h.startsWith("---")||h.startsWith("+++"))continue;const c=h.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){o=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,s=!0;continue}if(s)if(h.startsWith("-"))o++,n.push({type:"del",leftNum:o,rightNum:null,leftContent:h.slice(1),rightContent:""});else if(h.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:h.slice(1)});else{o++,i++;const C=h.startsWith(" ")?h.slice(1):h;n.push({type:"equal",leftNum:o,rightNum:i,leftContent:C,rightContent:C})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const h=[];for(;d<n.length&&n[d].type==="del";)h.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const C=Math.max(h.length,c.length);for(let R=0;R<C;R++){const m=h[R],k=c[R];m&&k?l.push({type:"del",leftNum:m.leftNum,rightNum:k.rightNum,leftContent:m.leftContent,rightContent:k.rightContent}):m?l.push(m):k&&l.push(k)}}else l.push(n[d]),d++;const b=new Set;for(let h=0;h<l.length;h++)if(l[h].type!=="equal")for(let c=Math.max(0,h-r);c<=Math.min(l.length-1,h+r);c++)b.add(c);if(b.size===0)return[];const y=[];let A=-1,_=!1;for(let h=0;h<l.length;h++)if(b.has(h)){A>=0&&h-A>1&&y.push({kind:"separator",skipped:h-A-1});const c=l[h].type!=="equal",C=c&&!_;y.push({kind:"line",row:l[h],hunkStart:C}),_=c,A=h}if(A<l.length-1&&A>=0&&y.push({kind:"separator",skipped:l.length-1-A}),y.length>0&&y[0].kind==="line"){const h=((N=y[0].row)==null?void 0:N.leftNum)??0,c=((T=y[0].row)==null?void 0:T.rightNum)??0,C=Math.max(h,c)-1;C>0&&y.unshift({kind:"separator",skipped:C})}return y}var sd=P('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),id=P('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),ld=P('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),cd=P('<span class="text-xs text-muted">No matches</span>'),ud=P('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),dd=P('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),fd=P('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),vd=P('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function gd(t,r){Me(r,!0);let a=me(r,"loading",3,!1),n=D(void 0),o=j(()=>od(r.diffText)),i=j(()=>{const Z=[];return e(o).forEach((q,re)=>{q.hunkStart&&Z.push(re)}),Z}),s=j(()=>e(i).length>0),l=j(()=>{var q;const Z=new Array(e(o).length).fill(-1);for(let re=0;re<e(i).length;re++){let ie=e(i)[re];for(;ie<e(o).length&&e(o)[ie].kind==="line"&&((q=e(o)[ie].row)==null?void 0:q.type)!=="equal";)Z[ie]=re,ie++}return Z}),d=D(-1),b="";Ne(()=>{r.diffText!==b&&(b=r.diffText,f(d,-1))});let y=j(()=>{if(!r.search.trim())return[];try{const Z=new RegExp(r.search,"i"),q=[];return e(o).forEach((re,ie)=>{re.kind==="line"&&re.row&&(Z.test(re.row.leftContent)||Z.test(re.row.rightContent))&&q.push(ie)}),q}catch{return[]}}),A=D(-1),_="";Ne(()=>{r.search!==_&&(_=r.search,f(A,e(y).length>0?0:-1,!0))});async function N(Z){var ie;f(A,Z,!0),await Pt();const q=e(y)[Z],re=(ie=e(m))==null?void 0:ie.querySelector(`[data-item-idx="${q}"]`);if(re&&e(m)&&e(k)){const ve=e(m).getBoundingClientRect(),ge=re.getBoundingClientRect().top-ve.top+e(m).scrollTop-e(m).clientHeight/3;p=!0,e(m).scrollTop=ge,e(k).scrollTop=ge,requestAnimationFrame(()=>{p=!1})}}function T(){e(A)>0&&N(e(A)-1)}function h(){e(A)<0&&e(y).length>0?N(0):e(A)<e(y).length-1&&N(e(A)+1)}function c(Z,q){const re=ja(Z);if(!r.search.trim())return re;try{const ie=new RegExp(`(${r.search})`,"gi"),ve=q?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return re.replace(ie,`<span class="${ve}">$1</span>`)}catch{return re}}function C(Z,q){return Z==="equal"?"":Z==="del"&&q==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":Z==="del"&&q==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":Z==="add"&&q==="left"?"bg-edf-gris-clair":Z==="add"&&q==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function R(Z,q){return Z==="del"&&q==="left"?"rgb(251,237,233)":Z==="del"&&q==="right"?"rgb(238,247,236)":Z==="add"&&q==="left"?"var(--color-edf-gris-clair)":Z==="add"&&q==="right"?"rgb(238,247,236)":"white"}let m=D(void 0),k=D(void 0),S=!1,p=!1;function M(Z){S||p||!e(m)||!e(k)||(S=!0,Z==="left"?(e(k).scrollTop=e(m).scrollTop,e(k).scrollLeft=e(m).scrollLeft):(e(m).scrollTop=e(k).scrollTop,e(m).scrollLeft=e(k).scrollLeft),requestAnimationFrame(()=>{S=!1}))}async function I(Z){var re;f(d,Z,!0),await Pt();const q=(re=e(m))==null?void 0:re.querySelector(`[data-hunk-start="${Z}"]`);if(q&&e(m)&&e(k)){p=!0;const ie=e(m).getBoundingClientRect(),ye=q.getBoundingClientRect().top-ie.top+e(m).scrollTop-e(m).clientHeight/3;e(m).scrollTop=ye,e(k).scrollTop=ye,requestAnimationFrame(()=>{p=!1})}}function L(){e(d)>0&&I(e(d)-1)}function B(){e(d)<0?I(0):e(d)<e(i).length-1&&I(e(d)+1)}function O(Z){const q=e(l)[Z];q>=0&&f(d,q,!0)}function H(Z){Z.target instanceof HTMLInputElement||(Z.key==="n"&&!Z.shiftKey?(Z.preventDefault(),B()):Z.key==="N"||Z.key==="n"&&Z.shiftKey?(Z.preventDefault(),L()):Z.key==="j"?(Z.preventDefault(),h()):(Z.key==="J"||Z.key==="j"&&Z.shiftKey)&&(Z.preventDefault(),T()))}var V=vd();{const Z=(q,re=So)=>{var ie=be(),ve=K(ie);He(ve,17,()=>e(o),vn,(ye,ge,_e)=>{const Ce=j(()=>e(i).indexOf(_e)),ze=j(()=>e(l)[_e]>=0&&e(l)[_e]===e(d)),We=j(()=>{var at,Ke;return re()==="left"?(at=e(ge).row)==null?void 0:at.leftNum:(Ke=e(ge).row)==null?void 0:Ke.rightNum}),gt=j(()=>{var at,Ke;return re()==="left"?((at=e(ge).row)==null?void 0:at.leftContent)??"":((Ke=e(ge).row)==null?void 0:Ke.rightContent)??""});var Vt=be(),jr=K(Vt);{var Je=at=>{var Ke=sd(),Nt=E(x(Ke),2),Vr=x(Nt);g(Nt),g(Ke),J(()=>ne(Vr,`... ${e(ge).skipped??""} lines hidden ...`)),u(at,Ke)},ut=at=>{var Ke=id(),Nt=x(Ke),Vr=x(Nt,!0);g(Nt);var En=E(Nt,2);Dr(En,()=>c(e(gt),e(A)>=0&&e(y)[e(A)]===_e),!0),g(En),g(Ke),J((yt,Mt,yr,Va,Ua)=>{Se(Ke,1,`flex w-full ${yt??""} ${Mt??""}`),Ze(Ke,e(ze)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),ke(Ke,"role",yr),ke(Ke,"tabindex",Va),ke(Ke,"data-hunk-start",re()==="left"&&e(Ce)>=0?e(Ce):void 0),ke(Ke,"data-item-idx",re()==="left"?_e:void 0),Ze(Nt,`background: ${Ua??""}; color: ${e(ze)?"white":"var(--color-muted)"};`),ne(Vr,e(We)??"")},[()=>C(e(ge).row.type,re()),()=>e(ge).row.type!=="equal"||e(y).includes(_e)?"cursor-pointer":"",()=>e(ge).row.type!=="equal"||e(y).includes(_e)?"button":void 0,()=>e(ge).row.type!=="equal"||e(y).includes(_e)?0:void 0,()=>e(ze)?"rgb(16,87,200)":R(e(ge).row.type,re())]),ue("click",Ke,()=>{var Mt;((Mt=e(ge).row)==null?void 0:Mt.type)!=="equal"&&O(_e);const yt=e(y).indexOf(_e);yt>=0&&f(A,yt,!0)}),ue("keydown",Ke,yt=>{var Mt;if(yt.key==="Enter"||yt.key===" "){yt.preventDefault(),((Mt=e(ge).row)==null?void 0:Mt.type)!=="equal"&&O(_e);const yr=e(y).indexOf(_e);yr>=0&&f(A,yr,!0)}}),u(at,Ke)};Q(jr,at=>{e(ge).kind==="separator"?at(Je):e(ge).row&&at(ut,1)})}u(ye,Vt)}),u(q,ie)};var X=x(V),G=x(X),te=x(G),w=x(te,!0);g(te);var $=E(te,2),z=x($,!0);g($),g(G);var F=E(G,2),v=x(F),U=x(v,!0);g(v);var W=E(v,2),le=x(W,!0);g(W),g(F),g(X);var ce=E(X,2),Y=x(ce),ee=x(Y);Ye(ee);var oe=E(ee,2);{var fe=q=>{var re=ld(),ie=K(re);{let _e=j(()=>e(A)<=0);$e(ie,{variant:"secondary",size:"sm",onclick:T,get disabled(){return e(_e)},children:(Ce,ze)=>{we();var We=Ue("Prev");u(Ce,We)},$$slots:{default:!0}})}var ve=E(ie,2),ye=x(ve);g(ve);var ge=E(ve,2);{let _e=j(()=>e(A)>=e(y).length-1);$e(ge,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(_e)},children:(Ce,ze)=>{we();var We=Ue("Next");u(Ce,We)},$$slots:{default:!0}})}J(()=>ne(ye,`${e(A)>=0?e(A)+1:"–"} / ${e(y).length??""} occurrence${e(y).length!==1?"s":""}`)),u(q,re)},de=j(()=>r.search.trim()&&e(y).length>0),ae=q=>{var re=cd();u(q,re)},xe=j(()=>r.search.trim());Q(oe,q=>{e(de)?q(fe):e(xe)&&q(ae,1)})}g(Y);var he=E(Y,2),Ee=x(he);{let q=j(()=>e(i).length===0||e(d)<=0);$e(Ee,{variant:"secondary",size:"sm",onclick:L,get disabled(){return e(q)},children:(re,ie)=>{we();var ve=Ue("Prev");u(re,ve)},$$slots:{default:!0}})}var pe=E(Ee,2),Fe=x(pe);g(pe);var De=E(pe,2);{let q=j(()=>e(i).length===0||e(d)>=e(i).length-1);$e(De,{variant:"secondary",size:"sm",onclick:B,get disabled(){return e(q)},children:(re,ie)=>{we();var ve=Ue("Next");u(re,ve)},$$slots:{default:!0}})}g(he),g(ce);var Qe=E(ce,2);{var Ve=q=>{var re=ud(),ie=x(re),ve=x(ie),ye=x(ve);Z(ye,()=>"left"),g(ve),g(ie),nt(ie,ze=>f(m,ze),()=>e(m));var ge=E(ie,2),_e=x(ge),Ce=x(_e);Z(Ce,()=>"right"),g(_e),g(ge),nt(ge,ze=>f(k,ze),()=>e(k)),g(re),tt("scroll",ie,()=>M("left")),tt("scroll",ge,()=>M("right")),u(q,re)},rt=q=>{var re=dd();u(q,re)};Q(Qe,q=>{e(s)?q(Ve):q(rt,-1)})}var Te=E(Qe,2);{var Pe=q=>{var re=fd();u(q,re)};Q(Te,q=>{a()&&q(Pe)})}g(V),nt(V,q=>f(n,q),()=>e(n)),J(()=>{ne(w,r.leftLabel),ne(z,r.kind),ne(U,r.rightLabel),ne(le,r.kind),gn(ee,r.search),ne(Fe,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),ue("input",ee,q=>r.onSearchChange(q.target.value)),ue("keydown",ee,q=>{q.key==="Enter"&&(q.preventDefault(),h())})}ue("keydown",V,H),u(t,V),Ae()}Ge(["keydown","click","input"]);var hd=P("<!> <!> <!>",1),pd=P('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),md=P('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),_d=P('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),bd=P('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),xd=P('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),yd=P('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),wd=P('<p class="text-sm text-red-600 text-center py-8"> </p>'),kd=P('<p class="text-sm text-muted text-center py-8">Loading...</p>'),Cd=P("<!> <!> <!>",1),Sd=P("<!> <!>",1);function $d(t,r){Me(r,!0);let a=D(""),n=D(""),o=D(""),i=D(""),s=D(""),l=D(!1),d=D(!1),b=D(""),y=j(()=>r.allCases.map(p=>({value:p,label:p})));const A=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let _=j(()=>{var p;return((p=Ft())==null?void 0:p.compare_kinds)??A});Ne(()=>{var p;e(_).some(M=>M.value===e(o))||f(o,((p=e(_)[0])==null?void 0:p.value)??"",!0)});let N=D(!1),T=j(()=>e(a)&&e(n)&&e(a)!==e(n));function h(){const p=e(a);f(a,e(n),!0),f(n,p,!0)}async function c(){if(e(T)){f(l,!0),f(b,"");try{const p=await Ts({cases:[e(a),e(n)],base:e(a),kind:e(o)});f(s,p,!0),f(d,!0)}catch(p){console.error("Failed to load diff:",p),f(s,""),f(d,!1);const M=p instanceof Error?p.message:String(p);f(b,M.includes("404")?`File "${e(o)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(o)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(s,""),f(d,!0))});let C=!1;Ne(()=>{r.allCases.length>=2&&!C?(C=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!C&&(C=!0,f(a,r.allCases[0],!0))});let R=j(kn),m=j(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(R).length===0)return[];const p=wn(),M=p.find(L=>L.case_id===e(a)),I=p.find(L=>L.case_id===e(n));return!M&&!I?[]:e(R).map(L=>{var H,V;const B=((H=M==null?void 0:M.doe)==null?void 0:H[L])!=null&&String(M.doe[L])!==""?String(M.doe[L]):"—",O=((V=I==null?void 0:I.doe)==null?void 0:V[L])!=null&&String(I.doe[L])!==""?String(I.doe[L]):"—";return{param:L,left:B,right:O,differs:B!==O}})}),k=j(()=>e(N)?e(m):e(m).filter(p=>p.differs)),S=j(()=>e(m).filter(p=>p.differs).length);jt(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(p,M)=>{var I=Sd(),L=K(I);Qt(L,{children:(X,G)=>{var te=hd(),w=K(te);Re(w,{text:"First case",children:(F,v)=>{lt(F,{class:"w-32.5",get options(){return e(y)},get value(){return e(a)},onchange:U=>f(a,U,!0),placeholder:"Select..."})}});var $=E(w,2);{let F=j(()=>!e(a)&&!e(n));$e($,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(F)},children:(v,U)=>{Le(v,{get icon(){return vi}})},$$slots:{default:!0}})}var z=E($,2);Re(z,{text:"Second case",children:(F,v)=>{lt(F,{class:"w-32.5",get options(){return e(y)},get value(){return e(n)},onchange:U=>f(n,U,!0),placeholder:"Select..."})}}),u(X,te)}});var B=E(L,2);{var O=X=>{var G=pd();u(X,G)},H=X=>{var G=md();u(X,G)},V=X=>{var G=Cd(),te=K(G);{var w=W=>{var le=yd(),ce=K(le),Y=x(ce),ee=x(Y);g(Y);var oe=E(Y,2),fe=x(oe,!0);g(oe),g(ce);var de=E(ce,2);{var ae=he=>{var Ee=bd(),pe=x(Ee),Fe=x(pe),De=x(Fe),Qe=x(De),Ve=x(Qe,!0);g(Qe);var rt=E(Qe,2),Te=x(rt,!0);g(rt),g(De),g(Fe);var Pe=E(Fe);He(Pe,21,()=>e(k),Z=>Z.param,(Z,q)=>{var re=_d(),ie=x(re),ve=x(ie,!0);g(ie);var ye=E(ie),ge=x(ye,!0);g(ye);var _e=E(ye),Ce=x(_e,!0);g(_e),g(re),J(()=>{Se(ie,1,dt(e(q).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ne(ve,e(q).left),ne(ge,e(q).param),Se(_e,1,dt(e(q).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ne(Ce,e(q).right)}),u(Z,re)}),g(Pe),g(pe),g(Ee),J(()=>{ne(Ve,e(a)),ne(Te,e(n))}),u(he,Ee)},xe=he=>{var Ee=xd();u(he,Ee)};Q(de,he=>{e(k).length>0?he(ae):he(xe,-1)})}J(()=>{ne(ee,`${e(S)??""} difference${e(S)!==1?"s":""} out of ${e(m).length??""}
          parameters`),ne(fe,e(N)?"Show differences only":"Show all parameters")}),ue("click",oe,()=>f(N,!e(N))),u(W,le)};Q(te,W=>{e(m).length>0&&W(w)})}var $=E(te,2);Qt($,{children:(W,le)=>{Re(W,{text:"File",children:(ce,Y)=>{lt(ce,{class:"w-37.5",get options(){return e(_)},get value(){return e(o)},onchange:ee=>f(o,ee,!0)})}})}});var z=E($,2);{var F=W=>{var le=wd(),ce=x(le,!0);g(le),J(()=>ne(ce,e(b))),u(W,le)},v=W=>{gd(W,{get diffText(){return e(s)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(o)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:le=>f(i,le,!0)})},U=W=>{var le=kd();u(W,le)};Q(z,W=>{e(b)?W(F):e(d)?W(v,1):e(l)&&W(U,2)})}u(X,G)};Q(B,X=>{e(a)&&e(n)&&e(a)===e(n)?X(O):!e(a)||!e(n)?X(H,1):X(V,-1)})}u(p,I)},$$slots:{default:!0}}),Ae()}Ge(["click"]);var Pd=P("<!> Refresh",1),Ed=P("<!> <!>",1),Rd=P('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),Nd=P('<input type="number" min="0" max="50" style="width: 70px;"/>'),Md=P("<!> Download as CSV",1),Ad=P('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),Td=P("&nbsp;<!>",1),Ld=P("<button> <!></button>"),Fd=P('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),Id=P('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),Dd=P('<span class="error-badge"> </span>'),zd=P('<span class="error-badge error-badge-new">NEW</span>'),Od=P('<div class="error-line"></div>'),Hd=P('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),jd=P('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Vd=P('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Ud=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Bd=P("<!> <!> <div><!> <!></div> <!> <!>",1);function qd(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let o=D(se([])),i=D(se([...n])),s=!1;Ne(()=>{var ee;const Y=(ee=Ft())==null?void 0:ee.error_files;Y!=null&&Y.length&&!s&&f(i,[...Y],!0)});let l=D("all"),d=D(""),b=D(a),y=D(!1),A=D(""),_=D(se(tr("errors")));Ne(()=>{rr("errors",e(_))});let N=D(se([])),T=D(se(new Set));function h(Y){return Y.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(Y){const ee=Y.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${Y.case_id}|${Y.file}|${Y.severity}|${h(ee)}`}function C(Y){const ee=new Map;for(const oe of Y){const fe=c(oe),de=ee.get(fe);de?de.count++:ee.set(fe,{...oe,count:1,fingerprint:fe,isNew:!e(T).has(fe)})}return Array.from(ee.values())}async function R(){if(!(!e(o).length||!e(i).length)){f(y,!0);try{const Y=await $s({cases:e(o),files:e(i),context:e(b),sev:e(l)==="all"?"":e(l),q:e(d)});f(A,"");const ee=C(Y.items);f(N,Y.items,!0);const oe=new Set(ee.map(fe=>fe.fingerprint));f(T,oe,!0),f(m,ee,!0)}catch(Y){f(A,"Failed to load errors"),console.error("Failed to load errors:",Y)}finally{f(y,!1)}}}let m=D(se([])),k=null;function S(){k&&clearTimeout(k),k=setTimeout(R,250)}function p(Y){return Y==="error"?"error-sev-error":Y==="warn"?"error-sev-warn":"error-sev-info"}let M=j(()=>Sn(r.allCases));const I=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let L=j(()=>{var Y;return(((Y=Ft())==null?void 0:Y.error_files)??I).map(ee=>({value:ee,label:ee}))}),B=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function O(Y){if(f(o,Y,!0),Y.length===0){f(m,[],!0),f(N,[],!0);return}R()}function H(Y){if(s=!0,f(i,Y,!0),Y.length===0){f(m,[],!0),f(N,[],!0);return}R()}function V(Y){f(l,Y,!0),R()}function X(){R()}let G=!1;Ne(()=>{r.allCases.length>0&&!G&&(G=!0,f(o,[...r.allCases],!0),R())}),Ne(()=>{e(_)?mr("errors",R,Un()):vt("errors")});const te=_r(()=>{G&&R()});vr(()=>{vt("errors"),te()});let w=D(se(new Set));function $(Y){const ee=new Set(e(w));ee.has(Y)?ee.delete(Y):ee.add(Y),f(w,ee,!0)}let z=D("severity"),F=D("desc");const v={info:0,warn:1,error:2};let U=j(()=>{const Y=[...e(m)];return Y.sort((ee,oe)=>{let fe=0;return e(z)==="severity"?fe=(v[ee.severity]??9)-(v[oe.severity]??9):e(z)==="count"?fe=ee.count-oe.count:fe=ee[e(z)].localeCompare(oe[e(z)]),e(F)==="asc"?fe:-fe}),Y});const W={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function le(Y){e(z)===Y?f(F,e(F)==="asc"?"desc":"asc",!0):(f(z,Y,!0),f(F,W[Y],!0))}function ce(){if(!e(m).length)return;const Y=["case_id","file","severity","count","is_new","line_text"],ee=e(U).map(de=>[de.case_id,de.file,de.severity,de.count,de.isNew?"yes":"no",`"${de.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),oe=[Y.join(","),...ee].join(`
`),fe=xr("errors",e(o),"csv");Ma(oe,fe)}jt(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:ee=>{var oe=Ed(),fe=K(oe);{let xe=j(Un);nr(fe,{name:"errors",get intervalMs(){return e(xe)},onRefresh:R,get checked(){return e(_)},set checked(he){f(_,he,!0)}})}var de=E(fe,2);{var ae=xe=>{$e(xe,{variant:"primary",onclick:R,children:(he,Ee)=>{var pe=Pd(),Fe=K(pe);Le(Fe,{get icon(){return er}}),we(),u(he,pe)},$$slots:{default:!0}})};Q(de,xe=>{e(_)||xe(ae)})}u(ee,oe)},children:(ee,oe)=>{var fe=Bd(),de=K(fe);Qt(de,{children:(Te,Pe)=>{var Z=Ad(),q=K(Z);Re(q,{text:"Cases",children:(Ce,ze)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(M)},get selected(){return e(o)},onchange:O,placeholder:"Select cases..."})}});var re=E(q,2);Re(re,{text:"Files",children:(Ce,ze)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(L)},get selected(){return e(i)},onchange:H,placeholder:"Select files..."})}});var ie=E(re,2);Re(ie,{text:"Severity",children:(Ce,ze)=>{lt(Ce,{class:"w-[90px]",get options(){return B},get value(){return e(l)},onchange:V})}});var ve=E(ie,2);Re(ve,{text:"Search",children:(Ce,ze)=>{var We=Rd();Ye(We),ue("input",We,S),et(We,()=>e(d),gt=>f(d,gt)),u(Ce,We)}});var ye=E(ve,2);Re(ye,{text:"Context",children:(Ce,ze)=>{var We=Nd();Ye(We),ue("change",We,X),et(We,()=>e(b),gt=>f(b,gt)),u(Ce,We)}});var ge=E(ye,2),_e=x(ge);{let Ce=j(()=>e(m).length===0);$e(_e,{variant:"secondary",size:"sm",onclick:ce,get disabled(){return e(Ce)},children:(ze,We)=>{var gt=Md(),Vt=K(gt);Le(Vt,{get icon(){return pr}}),we(),u(ze,gt)},$$slots:{default:!0}})}g(ge),u(Te,Z)}});var ae=E(de,2);{var xe=Te=>{var Pe=Fd(),Z=E(x(Pe),2);He(Z,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],q=>q.key,(q,re)=>{var ie=Ld(),ve=x(ie,!0),ye=E(ve);{var ge=_e=>{var Ce=Td(),ze=E(K(Ce));{let We=j(()=>e(F)==="asc"?gi:fi);Le(ze,{get icon(){return e(We)},size:12})}u(_e,Ce)};Q(ye,_e=>{e(z)===re.key&&_e(ge)})}g(ie),J(()=>{Se(ie,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(z)===re.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ne(ve,re.label)}),ue("click",ie,()=>le(re.key)),u(q,ie)}),g(Pe),u(Te,Pe)};Q(ae,Te=>{e(U).length>0&&Te(xe)})}var he=E(ae,2),Ee=x(he);{var pe=Te=>{var Pe=Id();u(Te,Pe)};Q(Ee,Te=>{e(U).length===0&&Te(pe)})}var Fe=E(Ee,2);He(Fe,17,()=>e(U),Te=>Te.fingerprint,(Te,Pe)=>{var Z=Hd(),q=x(Z),re=x(q),ie=x(re);{let Je=j(()=>e(w).has(e(Pe).fingerprint)?_n:hi);Le(ie,{get icon(){return e(Je)},size:14})}g(re);var ve=E(re,2),ye=x(ve);g(ve);var ge=E(ve,2),_e=x(ge);{var Ce=Je=>{var ut=Dd(),at=x(ut);g(ut),J(()=>ne(at,`${e(Pe).count??""}x`)),u(Je,ut)};Q(_e,Je=>{e(Pe).count>1&&Je(Ce)})}var ze=E(_e,2);{var We=Je=>{var ut=zd();u(Je,ut)};Q(ze,Je=>{e(Pe).isNew&&Je(We)})}g(ge),g(q);var gt=E(q,2);{var Vt=Je=>{var ut=Od();Dr(ut,()=>e(Pe).line_html,!0),g(ut),u(Je,ut)},jr=j(()=>e(w).has(e(Pe).fingerprint));Q(gt,Je=>{e(jr)&&Je(Vt)})}g(Z),J(Je=>{Se(Z,1,`error-item ${Je??""}`),ne(ye,`${e(Pe).case_id??""} / ${e(Pe).file??""} : ${e(Pe).severity??""}`)},[()=>p(e(Pe).severity)]),ue("click",q,()=>$(e(Pe).fingerprint)),u(Te,Z)}),g(he);var De=E(he,2);{var Qe=Te=>{var Pe=Vd(),Z=x(Pe),q=x(Z);g(Z);var re=E(Z,2);{var ie=ye=>{var ge=jd(),_e=x(ge);g(ge),J(Ce=>ne(_e,`${Ce??""} new`),[()=>e(m).filter(Ce=>Ce.isNew).length]),u(ye,ge)},ve=j(()=>e(m).some(ye=>ye.isNew));Q(re,ye=>{e(ve)&&ye(ie)})}g(Pe),J(()=>ne(q,`${e(m).length??""} unique / ${e(N).length??""} total`)),u(Te,Pe)};Q(De,Te=>{e(U).length>0&&Te(Qe)})}var Ve=E(De,2);{var rt=Te=>{var Pe=Ud(),Z=x(Pe,!0);g(Pe),J(()=>ne(Z,e(A))),u(Te,Pe)};Q(Ve,Te=>{e(A)&&Te(rt)})}J(()=>Se(he,1,`error-list ${e(y)?"opacity-50 pointer-events-none":""}`)),u(ee,fe)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["input","change","click"]);var Kd=P('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function tf(t,r){Me(r,!0);let a=D(se({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=D(se([])),o=D(null);const i=v=>e(o)===null||e(o).includes(v);async function s(v){var le;const U=`/favicon-${v}.svg`;try{const ce=await fetch(U);if(!ce.ok||!((le=ce.headers.get("content-type"))!=null&&le.includes("svg")))return}catch{return}const W=document.querySelector('link[rel="icon"]');W&&(W.href=U)}async function l(){try{const v=await ws();Hl(v.rows),jl(v.doe_columns),f(n,v.rows.map(U=>U.case_id),!0),f(a,ec(Ra(),wn()),!0)}catch(v){console.error("Failed to load status:",v)}}Jn(()=>{l(),ks().then(v=>{_s(v),f(o,v.panels,!0),s(v.solver)}).catch(()=>{})});var d=Kd(),b=K(d);Bi(b,{});var y=E(b,2);Xi(y,{});var A=E(y,2);bl(A,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var _=E(A,2),N=x(_);{var T=v=>{Mc(v,{onRefresh:l})},h=j(()=>i("status"));Q(N,v=>{e(h)&&v(T)})}var c=E(N,2);{var C=v=>{Jc(v,{get allCases(){return e(n)}})},R=j(()=>i("residuals"));Q(c,v=>{e(R)&&v(C)})}var m=E(c,2);{var k=v=>{ku(v,{get allCases(){return e(n)}})},S=j(()=>i("probes"));Q(m,v=>{e(S)&&v(k)})}var p=E(m,2);{var M=v=>{Lu(v,{get allCases(){return e(n)}})},I=j(()=>i("performance"));Q(p,v=>{e(I)&&v(M)})}var L=E(p,2);{var B=v=>{$d(v,{get allCases(){return e(n)}})},O=j(()=>i("compare"));Q(L,v=>{e(O)&&v(B)})}var H=E(L,2);{var V=v=>{ad(v,{get allCases(){return e(n)}})},X=j(()=>i("tail"));Q(H,v=>{e(X)&&v(V)})}var G=E(H,2);{var te=v=>{qd(v,{get allCases(){return e(n)}})},w=j(()=>i("errors"));Q(G,v=>{e(w)&&v(te)})}g(_);var $=E(_,2),z=E(x($),2),F=x(z);g(z),g($),J(()=>ke(F,"src",xl)),u(t,d),Ae()}export{tf as component};
