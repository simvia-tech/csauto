import{b as Pr,a as u,f as $,c as be,t as Ve,d as Ht}from"../chunks/C14P8jaG.js";import{o as Zn,a as vr}from"../chunks/Cz6m6K8p.js";import{h as De,L as $t,G as Tt,c as Er,J as Gt,b as Jn,o as e,N as Ua,ag as Ba,O as En,P as It,f as _t,ay as ea,aF as qa,ao as Rn,e as mt,a as dr,aM as Ka,s as Ga,a5 as Wa,aN as ta,aE as dn,aO as Xa,a7 as Nn,aP as Ya,aQ as Qa,aI as Za,aR as ht,aS as ra,a1 as Ja,r as na,p as aa,aT as Ur,ae as sa,aU as es,aV as ts,aC as rs,m as ns,d as Nr,az as oa,y as J,F as ia,aW as as,aG as ss,aA as os,D as la,aX as ca,aY as is,aZ as ls,E as cs,aw as ua,S as Dr,k as Mr,a_ as da,a$ as us,b0 as ds,b1 as fa,b2 as fs,b3 as vs,b4 as gr,b5 as gs,b6 as hs,b7 as ps,b8 as ms,b9 as _s,ba as bs,bb as xs,aJ as Pt,U as ys,aK as z,_ as oe,$ as f,A as x,B as g,x as Me,g as G,z as Ae,C as S,j as Ne,ap as we,aL as U,bc as ws,q as Ut,bd as ks,be as it,bf as Cs}from"../chunks/VJhVTb1A.js";import{p as me,i as Q,b as nt,c as Ss,l as Oe,s as Ue}from"../chunks/zf4GFcxs.js";import{i as $s,a as Ps,d as le,b as Ge,c as Es,n as Rs,e as Ns,s as re,f as tt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Ms}from"../chunks/DmjnTBOd.js";import{B as As}from"../chunks/U5yjBaoU.js";function fn(t,r){return r}function Ts(t,r,a){for(var n=[],s=r.length,i,o=r.length,l=0;l<s;l++){let L=r[l];aa(L,()=>{if(i){if(i.pending.delete(L),i.done.add(L),i.pending.size===0){var _=t.outrogroups;Qr(t,dn(i.done)),_.delete(i),_.size===0&&(t.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&a!==null;if(d){var y=a,b=y.parentNode;rs(b),b.append(y),t.items.clear()}Qr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Qr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const o of t.pending.values())for(const l of o)n.add(t.items.get(l).e)}for(var s=0;s<r.length;s++){var i=r[s];if(n!=null&&n.has(i)){i.f|=ht;const o=document.createDocumentFragment();ns(i,o)}else Nr(r[s],a)}}var Mn;function Ke(t,r,a,n,s,i=null){var o=t,l=new Map,d=(r&ra)!==0;if(d){var y=t;o=De?$t(Tt(y)):y.appendChild(Er())}De&&Gt();var b=null,L=Wa(()=>{var p=a();return ta(p)?p:p==null?[]:dn(p)}),_,T=new Map,F=!0;function h(p){(R.effect.f&Ja)===0&&(R.pending.delete(p),R.fallback=b,Ls(R,_,o,r,n),b!==null&&(_.length===0?(b.f&ht)===0?na(b):(b.f^=ht,lr(b,null,o)):aa(b,()=>{b=null})))}function c(p){R.pending.delete(p)}var k=Jn(()=>{_=e(L);var p=_.length;let w=!1;if(De){var C=Ua(o)===Ba;C!==(p===0)&&(o=En(),$t(o),It(!1),w=!0)}for(var m=new Set,N=mt,M=Ga(),A=0;A<p;A+=1){De&&_t.nodeType===ea&&_t.data===qa&&(o=_t,w=!0,It(!1));var V=_[A],I=n(V,A),O=F?null:l.get(I);O?(O.v&&Rn(O.v,V),O.i&&Rn(O.i,A),M&&N.unskip_effect(O.e)):(O=Fs(l,F?o:Mn??(Mn=Er()),V,I,A,s,r,a),F||(O.e.f|=ht),l.set(I,O)),m.add(I)}if(p===0&&i&&!b&&(F?b=dr(()=>i(o)):(b=dr(()=>i(Mn??(Mn=Er()))),b.f|=ht)),p>m.size&&Ka(),De&&p>0&&$t(En()),!F)if(T.set(N,m),M){for(const[H,K]of l)m.has(H)||N.skip_effect(K.e);N.oncommit(h),N.ondiscard(c)}else h(N);w&&It(!0),e(L)}),R={effect:k,items:l,pending:T,outrogroups:null,fallback:b};F=!1,De&&(o=_t)}function ar(t){for(;t!==null&&(t.f&es)===0;)t=t.next;return t}function Ls(t,r,a,n,s){var V,I,O,H,K,Z,ae,P,E;var i=(n&ts)!==0,o=r.length,l=t.items,d=ar(t.effect.first),y,b=null,L,_=[],T=[],F,h,c,k;if(i)for(k=0;k<o;k+=1)F=r[k],h=s(F,k),c=l.get(h).e,(c.f&ht)===0&&((I=(V=c.nodes)==null?void 0:V.a)==null||I.measure(),(L??(L=new Set)).add(c));for(k=0;k<o;k+=1){if(F=r[k],h=s(F,k),c=l.get(h).e,t.outrogroups!==null)for(const j of t.outrogroups)j.pending.delete(c),j.done.delete(c);if((c.f&Ur)!==0&&(na(c),i&&((H=(O=c.nodes)==null?void 0:O.a)==null||H.unfix(),(L??(L=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)lr(c,null,a);else{var R=b?b.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),wt(t,b,c),wt(t,c,R),lr(c,R,a),b=c,_=[],T=[],d=ar(b.next);continue}if(c!==d){if(y!==void 0&&y.has(c)){if(_.length<T.length){var p=T[0],w;b=p.prev;var C=_[0],m=_[_.length-1];for(w=0;w<_.length;w+=1)lr(_[w],p,a);for(w=0;w<T.length;w+=1)y.delete(T[w]);wt(t,C.prev,m.next),wt(t,b,C),wt(t,m,p),d=p,b=m,k-=1,_=[],T=[]}else y.delete(c),lr(c,d,a),wt(t,c.prev,c.next),wt(t,c,b===null?t.effect.first:b.next),wt(t,b,c),b=c;continue}for(_=[],T=[];d!==null&&d!==c;)(y??(y=new Set)).add(d),T.push(d),d=ar(d.next);if(d===null)continue}(c.f&ht)===0&&_.push(c),b=c,d=ar(c.next)}if(t.outrogroups!==null){for(const j of t.outrogroups)j.pending.size===0&&(Qr(t,dn(j.done)),(K=t.outrogroups)==null||K.delete(j));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||y!==void 0){var N=[];if(y!==void 0)for(c of y)(c.f&Ur)===0&&N.push(c);for(;d!==null;)(d.f&Ur)===0&&d!==t.fallback&&N.push(d),d=ar(d.next);var M=N.length;if(M>0){var A=(n&ra)!==0&&o===0?a:null;if(i){for(k=0;k<M;k+=1)(ae=(Z=N[k].nodes)==null?void 0:Z.a)==null||ae.measure();for(k=0;k<M;k+=1)(E=(P=N[k].nodes)==null?void 0:P.a)==null||E.fix()}Ts(t,N,A)}}i&&sa(()=>{var j,D;if(L!==void 0)for(c of L)(D=(j=c.nodes)==null?void 0:j.a)==null||D.apply()})}function Fs(t,r,a,n,s,i,o,l){var d=(o&Ya)!==0?(o&Qa)===0?Za(a,!1,!1):Nn(a):null,y=(o&Xa)!==0?Nn(s):null;return{v:d,i:y,e:dr(()=>(i(r,d??a,y??s,l),()=>{t.delete(n)}))}}function lr(t,r,a){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var o=oa(n);if(i.before(n),n===s)return;n=o}}function wt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Ir(t,r,a=!1,n=!1,s=!1,i=!1){var o=t,l="";if(a){var d=t;De&&(o=$t(Tt(d)))}J(()=>{var y=ia;if(l===(l=r()??"")){De&&Gt();return}if(a&&!De){y.nodes=null,d.innerHTML=l,l!==""&&Pr(Tt(d),d.lastChild);return}if(y.nodes!==null&&(as(y.nodes.start,y.nodes.end),y.nodes=null),l!==""){if(De){_t.data;for(var b=Gt(),L=b;b!==null&&(b.nodeType!==ea||b.data!=="");)L=b,b=oa(b);if(b===null)throw ss(),os;Pr(_t,L),o=$t(b);return}var _=n?ca:s?is:void 0,T=la(n?"svg":s?"math":"template",_);T.innerHTML=l;var F=n||s?T:T.content;if(Pr(Tt(F),F.lastChild),n||s)for(;Tt(F);)o.before(Tt(F));else o.before(F)}})}function He(t,r,a,n,s){var l;De&&Gt();var i=(l=r.$$slots)==null?void 0:l[a],o=!1;i===!0&&(i=r.children,o=!0),i===void 0||i(t,o?()=>n:n)}function Ds(t,r,a,n,s,i){let o=De;De&&Gt();var l=null;De&&_t.nodeType===ls&&(l=_t,Gt());var d=De?_t:t,y=new As(d,!1);Jn(()=>{const b=r()||null;var L=ca;if(b===null){y.ensure(null,null);return}return y.ensure(b,_=>{if(b){if(l=De?l:la(b,L),Pr(l,l),n){De&&$s(b)&&l.append(document.createComment(""));var T=De?Tt(l):l.appendChild(Er());De&&(T===null?It(!1):$t(T)),n(l,T)}ia.nodes.end=l,_.before(l)}De&&$t(_)}),()=>{}},cs),ua(()=>{}),o&&(It(!0),$t(d))}function Is(t,r,a){Dr(()=>{var n=Mr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function zs(t,r){var a=void 0,n;da(()=>{a!==(a=r())&&(n&&(Nr(n),n=null),a&&(n=dr(()=>{Dr(()=>a(t))})))})}function va(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(a=va(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Os(){for(var t,r,a=0,n="",s=arguments.length;a<s;a++)(t=arguments[a])&&(r=va(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?Os(t):t??""}const An=[...` 	
\r\f \v\uFEFF`];function Hs(t,r,a){var n=t==null?"":""+t;if(a){for(var s of Object.keys(a))if(a[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||An.includes(n[o-1]))&&(l===n.length||An.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Tn(t,r=!1){var a=r?" !important;":";",n="";for(var s of Object.keys(t)){var i=t[s];i!=null&&i!==""&&(n+=" "+s+": "+i+a)}return n}function Br(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function js(t,r){if(r){var a="",n,s;if(Array.isArray(r)?(n=r[0],s=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Br)),s&&d.push(...Object.keys(s).map(Br));var y=0,b=-1;const h=t.length;for(var L=0;L<h;L++){var _=t[L];if(l?_==="/"&&t[L-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&t[L+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?o++:_===")"&&o--,!l&&i===!1&&o===0){if(_===":"&&b===-1)b=L;else if(_===";"||L===h-1){if(b!==-1){var T=Br(t.substring(y,b).trim());if(!d.includes(T)){_!==";"&&L++;var F=t.substring(y,L).trim();a+=" "+F+";"}}y=L+1,b=-1}}}}return n&&(a+=Tn(n)),s&&(a+=Tn(s,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Se(t,r,a,n,s,i){var o=t.__className;if(De||o!==a||o===void 0){var l=Hs(a,n,i);(!De||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&s!==i)for(var d in i){var y=!!i[d];(s==null||y!==!!s[d])&&t.classList.toggle(d,y)}return i}function qr(t,r={},a,n){for(var s in a){var i=a[s];r[s]!==i&&(a[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,n))}}function Ze(t,r,a,n){var s=t.__style;if(De||s!==r){var i=js(r,n);(!De||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(qr(t,a==null?void 0:a[0],n[0]),qr(t,a==null?void 0:a[1],n[1],"important")):qr(t,a,n));return n}function Ar(t,r,a=!1){if(t.multiple){if(r==null)return;if(!ta(r))return us();for(var n of t.options)n.selected=r.includes(ur(n));return}for(n of t.options){var s=ur(n);if(ds(s,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function ga(t){var r=new MutationObserver(()=>{Ar(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ua(()=>{r.disconnect()})}function ha(t,r,a=r){var n=new WeakSet,s=!0;fa(t,"change",i=>{var o=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(o),ur);else{var d=t.querySelector(o)??t.querySelector("option:not([disabled])");l=d&&ur(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Dr(()=>{var i=r();if(t===document.activeElement){var o=mt;if(n.has(o))return}if(Ar(t,i,s),s&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=ur(l),a(i))}t.__value=i,s=!1}),ga(t)}function ur(t){return"__value"in t?t.__value:t.value}const sr=Symbol("class"),or=Symbol("style"),pa=Symbol("is custom element"),ma=Symbol("is html"),Vs=gr?"link":"LINK",Us=gr?"input":"INPUT",Bs=gr?"option":"OPTION",qs=gr?"select":"SELECT",Ks=gr?"progress":"PROGRESS";function Ye(t){if(De){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;ke(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;ke(t,"checked",null),t.checked=s}}};t.__on_r=a,sa(a),ps()}}function vn(t,r){var a=gn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Ks)||(t.value=r??"")}function Gs(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ke(t,r,a,n){var s=gn(t);De&&(s[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Vs)||s[r]!==(s[r]=a)&&(r==="loading"&&(t[bs]=a),a==null?t.removeAttribute(r):typeof a!="string"&&_a(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Ws(t,r,a,n,s=!1,i=!1){if(De&&s&&t.nodeName===Us){var o=t,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Ye(o)}var d=gn(t),y=d[pa],b=!d[ma];let L=De&&y;L&&It(!1);var _=r||{},T=t.nodeName===Bs;for(var F in r)F in a||(a[F]=null);a.class?a.class=dt(a.class):a[sr]&&(a.class=null),a[or]&&(a.style??(a.style=null));var h=_a(t);for(const m in a){let N=a[m];if(T&&m==="value"&&N==null){t.value=t.__value="",_[m]=N;continue}if(m==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Se(t,c,N,n,r==null?void 0:r[sr],a[sr]),_[m]=N,_[sr]=a[sr];continue}if(m==="style"){Ze(t,N,r==null?void 0:r[or],a[or]),_[m]=N,_[or]=a[or];continue}var k=_[m];if(!(N===k&&!(N===void 0&&t.hasAttribute(m)))){_[m]=N;var R=m[0]+m[1];if(R!=="$$")if(R==="on"){const M={},A="$$"+m;let V=m.slice(2);var p=Ns(V);if(Ps(V)&&(V=V.slice(0,-7),M.capture=!0),!p&&k){if(N!=null)continue;t.removeEventListener(V,_[A],M),_[A]=null}if(p)le(V,t,N),Ge([V]);else if(N!=null){let I=function(O){_[m].call(this,O)};_[A]=Es(V,t,I,M)}}else if(m==="style")ke(t,m,N);else if(m==="autofocus")gs(t,!!N);else if(!y&&(m==="__value"||m==="value"&&N!=null))t.value=t.__value=N;else if(m==="selected"&&T)Gs(t,N);else{var w=m;b||(w=Rs(w));var C=w==="defaultValue"||w==="defaultChecked";if(N==null&&!y&&!C)if(d[m]=null,w==="value"||w==="checked"){let M=t;const A=r===void 0;if(w==="value"){let V=M.defaultValue;M.removeAttribute(w),M.defaultValue=V,M.value=M.__value=A?V:null}else{let V=M.defaultChecked;M.removeAttribute(w),M.defaultChecked=V,M.checked=A?V:!1}}else t.removeAttribute(m);else C||h.includes(w)&&(y||typeof N!="string")?(t[w]=N,w in d&&(d[w]=hs)):typeof N!="function"&&ke(t,w,N)}}}return L&&It(!0),_}function Ln(t,r,a=[],n=[],s=[],i,o=!1,l=!1){fs(s,a,n,d=>{var y=void 0,b={},L=t.nodeName===qs,_=!1;if(da(()=>{var F=r(...d.map(e)),h=Ws(t,y,F,i,o,l);_&&L&&"value"in F&&Ar(t,F.value);for(let k of Object.getOwnPropertySymbols(b))F[k]||Nr(b[k]);for(let k of Object.getOwnPropertySymbols(F)){var c=F[k];k.description===vs&&(!y||c!==y[k])&&(b[k]&&Nr(b[k]),b[k]=dr(()=>zs(t,()=>c))),h[k]=c}y=h}),L){var T=t;Dr(()=>{Ar(T,y.value,!0),ga(T)})}_=!0})}function gn(t){return t.__attributes??(t.__attributes={[pa]:t.nodeName.includes("-"),[ma]:t.namespaceURI===ms})}var Fn=new Map;function _a(t){var r=t.getAttribute("is")||t.nodeName,a=Fn.get(r);if(a)return a;Fn.set(r,a=[]);for(var n,s=t,i=Element.prototype;i!==s;){n=xs(s);for(var o in n)n[o].set&&a.push(o);s=_s(s)}return a}function et(t,r,a=r){var n=new WeakSet;fa(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Kr(t)?Gr(i):i,a(i),mt!==null&&n.add(mt),await Pt(),i!==(i=r())){var o=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var y=t.value.length;o===l&&l===d&&y>d?(t.selectionStart=y,t.selectionEnd=y):(t.selectionStart=o,t.selectionEnd=Math.min(l,y))}}}),(De&&t.defaultValue!==t.value||Mr(r)==null&&t.value)&&(a(Kr(t)?Gr(t.value):t.value),mt!==null&&n.add(mt)),ys(()=>{var s=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Kr(t)&&s===Gr(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Kr(t){var r=t.type;return r==="number"||r==="range"}function Gr(t){return t===""?null:+t}let xt=z(oe({type:"none",props:{},resolve:null}));function Xs(){return e(xt)}function ot(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Ys(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Qs(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Zs(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Xe(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Dn(t,r="Confirm",a="OK",n="primary"){return new Promise(s=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:s},!0)})}function hn(t,r="",a="Input",n="",s=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:s},resolve:i},!0)})}var Js=$('<div style="display:contents;"><!></div>');function Jt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Js(),s=x(n);ft(s,()=>r.children),g(n),Is(n,i=>a==null?void 0:a(i)),u(t,n)}var eo=$('<div class="text-xs text-muted font-light"> </div>'),to=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function hr(t,r){Me(r,!0);const a=F=>{var h=to(),c=x(h),k=x(c),R=x(k),p=x(R,!0);g(R);var w=S(R,2);{var C=A=>{var V=eo(),I=x(V,!0);g(V),J(()=>re(I,r.subtitle)),u(A,V)};Q(w,A=>{r.subtitle&&A(C)})}g(k);var m=S(k,2);ft(m,()=>r.children);var N=S(m,2),M=x(N);ft(M,()=>r.footer),g(N),g(c),g(h),J(()=>{Se(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),ke(c,"aria-labelledby",r.titleId),ke(R,"id",r.titleId),re(p,r.title)}),le("keydown",h,o),le("mousedown",h,d),le("click",h,y),u(F,h)};let n=me(r,"maxWidth",3,"520px"),s=me(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():ot(null)}function o(F){F.key==="Escape"?i():F.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(F){l=F.target.dataset.backdrop!==void 0}function y(F){const h=F.target.dataset.backdrop!==void 0;l&&h&&i(),l=!1}var b=be(),L=G(b);{var _=F=>{Jt(F,{children:(h,c)=>{a(h)}})},T=F=>{a(F)};Q(L,F=>{s()?F(_):F(T,-1)})}u(t,b),Ae()}Ge(["keydown","mousedown","click"]);var ro=$("<button><!></button>");function $e(t,r){let a=me(r,"variant",3,"primary"),n=me(r,"size",3,"default"),s=me(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},o={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=ro(),d=x(l);ft(d,()=>r.children),g(l),J(()=>{Se(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${o[a()]??""}`),l.disabled=s()}),le("click",l,function(...y){var b;(b=r.onclick)==null||b.apply(this,y)}),u(t,l)}Ge(["click"]);var no=$("<!> <span><!></span>",1),ao=$('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),so=$('<input class="w-full"/>'),oo=$('<div class="mb-4.5"><!></div>'),io=$('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function lo(t,r){Me(r,!0);let a=me(r,"confirmLabel",3,"OK"),n=me(r,"confirmVariant",3,"primary"),s=me(r,"value",3,""),i=me(r,"placeholder",3,""),o=me(r,"multiline",3,!1);const l=s();let d=z(oe(l)),y=z(void 0),b=z(void 0);Ne(()=>{var T;r.mode==="prompt"&&e(y)?(e(y).focus(),"select"in e(y)&&e(y).select()):e(b)&&((T=e(b).querySelector("button"))==null||T.focus())});function L(){r.mode==="prompt"?ot(e(d)):r.mode==="confirm"?ot(!0):ot()}function _(){r.mode==="confirm"?ot(!1):r.mode==="prompt"?ot(null):ot()}{const T=h=>{var c=no(),k=G(c);{var R=C=>{$e(C,{variant:"secondary",onclick:_,children:(m,N)=>{we();var M=Ve("Cancel");u(m,M)},$$slots:{default:!0}})};Q(k,C=>{r.mode!=="alert"&&C(R)})}var p=S(k,2),w=x(p);$e(w,{get variant(){return n()},onclick:L,children:(C,m)=>{we();var N=Ve();J(()=>re(N,a())),u(C,N)},$$slots:{default:!0}}),g(p),nt(p,C=>f(b,C),()=>e(b)),u(h,c)};let F=U(()=>o()?void 0:L);hr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(F)},onCancel:_,footer:T,children:(h,c)=>{var k=io(),R=G(k),p=x(R,!0);g(R);var w=S(R,2);{var C=m=>{var N=oo(),M=x(N);{var A=I=>{var O=ao();ws(O),nt(O,H=>f(y,H),()=>e(y)),J(()=>ke(O,"placeholder",i())),et(O,()=>e(d),H=>f(d,H)),u(I,O)},V=I=>{var O=so();Ye(O),nt(O,H=>f(y,H),()=>e(y)),J(()=>ke(O,"placeholder",i())),et(O,()=>e(d),H=>f(d,H)),u(I,O)};Q(M,I=>{o()?I(A):I(V,-1)})}g(N),u(m,N)};Q(w,m=>{r.mode==="prompt"&&m(C)})}J(()=>re(p,r.message)),u(h,k)},$$slots:{footer:!0,default:!0}})}Ae()}var co=$('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Re(t,r){var a=co(),n=x(a),s=S(n);ft(s,()=>r.children),g(a),J(()=>re(n,`${r.text??""} `)),u(t,a)}function Ct(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function St(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function ba(t,r){return localStorage.getItem(t)??r}function uo(t,r){r?localStorage.setItem(t,r):localStorage.removeItem(t)}function fo(){return{n:Ct("csauto_run_n",1),nt:Ct("csauto_run_nt",1),maxParallel:Ct("csauto_run_max_parallel",0)||null,backend:ba("csauto_run_backend","")||null}}function vo(t){St("csauto_run_n",t.n),St("csauto_run_nt",t.nt),t.maxParallel&&St("csauto_run_max_parallel",t.maxParallel),uo("csauto_run_backend",t.backend??"")}function go(){return{n:Ct("csauto_restart_n",1),nt:Ct("csauto_restart_nt",1),maxParallel:Ct("csauto_restart_max_parallel",0)||null,mode:ba("csauto_restart_mode","iterations"),value:Ct("csauto_restart_value",100)}}function ho(t){St("csauto_restart_n",t.n),St("csauto_restart_nt",t.nt),t.maxParallel&&St("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),St("csauto_restart_value",t.value)}function po(){return{keepLast:Ct("csauto_clean_keep_last",1)}}function mo(t){St("csauto_clean_keep_last",t.keepLast)}let zt=z(null);function _o(t){f(zt,t,!0)}function Ft(){return e(zt)}function cr(t){return e(zt)===null||e(zt).capabilities.includes(t)}function bo(t){return e(zt)===null||e(zt).control_actions.includes(t)}function xo(){var t;return((t=e(zt))==null?void 0:t.backends)??[]}var yo=$("<!> <!>",1),wo=$('<input type="number" min="1" step="1"/>'),ko=$('<input type="number" min="1" step="1"/>'),Co=$('<input type="number" min="0" step="1"/>'),So=$("<option> </option>"),$o=$("<select><option>This machine</option><!></select>"),Po=$('<div class="mb-3"><!></div>'),Eo=$(`<p class="mb-3 rounded border border-amber-400/50 bg-amber-400/10 px-3 py-2 text-sm" role="status">About to submit <strong> </strong> <strong> </strong>, which runs on your own account and
      bills you for the compute. Results come back automatically.</p>`),Ro=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <!> <!>',1);function No(t,r){Me(r,!0);const a=fo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=z(oe(a.n)),i=z(oe(a.nt)),o=z(oe(n));const l=xo().filter(b=>b!=="fake");let d=z(oe(l.includes(a.backend??"")?a.backend:""));async function y(){if(!Number.isFinite(e(s))||e(s)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}const b={n:e(s),nt:e(i),maxParallel:e(o)||null,backend:e(d)||null};vo(b),ot(b)}{const b=T=>{var F=yo(),h=G(F);$e(h,{variant:"secondary",onclick:()=>ot(null),children:(k,R)=>{we();var p=Ve("Cancel");u(k,p)},$$slots:{default:!0}});var c=S(h,2);$e(c,{variant:"run",onclick:y,children:(k,R)=>{we();var p=Ve();J(()=>re(p,e(d)?`Run on ${e(d)}`:"Run")),u(k,p)},$$slots:{default:!0}}),u(T,F)};let L=U(()=>r.cases.length),_=U(()=>r.cases.length>1?"s":"");hr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(L)??""} case${e(_)??""} selected`},onConfirm:y,footer:b,children:(T,F)=>{var h=Ro(),c=G(h),k=x(c);Re(k,{text:"MPI Ranks (n)",children:(M,A)=>{var V=wo();Ye(V),et(V,()=>e(s),I=>f(s,I)),u(M,V)}});var R=S(k,2);Re(R,{text:"OMP Threads (nt)",children:(M,A)=>{var V=ko();Ye(V),et(V,()=>e(i),I=>f(i,I)),u(M,V)}});var p=S(R,2);Re(p,{text:"Max Parallel",children:(M,A)=>{var V=Co();Ye(V),et(V,()=>e(o),I=>f(o,I)),u(M,V)}}),g(c);var w=S(c,2);{var C=M=>{var A=Po(),V=x(A);Re(V,{text:"Run on",children:(I,O)=>{var H=$o(),K=x(H);K.value=K.__value="";var Z=S(K);Ke(Z,16,()=>l,ae=>ae,(ae,P)=>{var E=So(),j=x(E,!0);g(E);var D={};J(()=>{re(j,P),D!==(D=P)&&(E.value=(E.__value=P)??"")}),u(ae,E)}),g(H),ha(H,()=>e(d),ae=>f(d,ae)),u(I,H)}}),g(A),u(M,A)};Q(w,M=>{l.length&&M(C)})}var m=S(w,2);{var N=M=>{var A=Eo(),V=S(x(A)),I=x(V,!0);g(V);var O=S(V),H=S(O),K=x(H,!0);g(H),we(),g(A),J(()=>{re(I,r.cases.length),re(O,` case${r.cases.length>1?"s":""} to `),re(K,e(d))}),u(M,A)};Q(m,M=>{e(d)&&M(N)})}u(T,h)},$$slots:{footer:!0,default:!0}})}Ae()}var Mo=$("<!> <!>",1),Ao=$('<input type="number" min="1" step="1"/>'),To=$('<input type="number" min="1" step="1"/>'),Lo=$('<input type="number" min="0" step="1"/>'),Fo=$("<select><option>Iterations</option><option>Physical time</option></select>"),Do=$('<input type="number"/>'),Io=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function zo(t,r){Me(r,!0);const a=go(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=z(oe(a.n)),i=z(oe(a.nt)),o=z(oe(n)),l=z(oe(a.mode)),d=z(oe(a.value)),y=U(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),b=U(()=>e(l)==="iterations"?"1":"any"),L=U(()=>e(l)==="iterations"?"1":"0");async function _(){if(!Number.isFinite(e(s))||e(s)<=0){await Xe("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Xe("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await Xe("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await Xe("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await Xe("Iterations must be an integer.","Invalid value");return}const T={n:e(s),nt:e(i),maxParallel:e(o)||null,restartMode:e(l),restartValue:e(d)};ho({n:e(s),nt:e(i),maxParallel:e(o)||null,mode:e(l),value:e(d)}),ot(T)}{const T=c=>{var k=Mo(),R=G(k);$e(R,{variant:"secondary",onclick:()=>ot(null),children:(w,C)=>{we();var m=Ve("Cancel");u(w,m)},$$slots:{default:!0}});var p=S(R,2);$e(p,{variant:"warning",onclick:_,children:(w,C)=>{we();var m=Ve("Restart");u(w,m)},$$slots:{default:!0}}),u(c,k)};let F=U(()=>r.cases.length),h=U(()=>r.cases.length>1?"s":"");hr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(F)??""} case${e(h)??""} selected`},onConfirm:_,footer:T,children:(c,k)=>{var R=Io(),p=G(R),w=x(p);Re(w,{text:"MPI Ranks (n)",children:(V,I)=>{var O=Ao();Ye(O),et(O,()=>e(s),H=>f(s,H)),u(V,O)}});var C=S(w,2);Re(C,{text:"OMP Threads (nt)",children:(V,I)=>{var O=To();Ye(O),et(O,()=>e(i),H=>f(i,H)),u(V,O)}});var m=S(C,2);Re(m,{text:"Max Parallel",children:(V,I)=>{var O=Lo();Ye(O),et(O,()=>e(o),H=>f(o,H)),u(V,O)}}),g(p);var N=S(p,2),M=x(N);Re(M,{text:"Stop criterion",children:(V,I)=>{var O=Fo(),H=x(O);H.value=H.__value="iterations";var K=S(H);K.value=K.__value="physical_time",g(O),ha(O,()=>e(l),Z=>f(l,Z)),u(V,O)}});var A=S(M,2);Re(A,{get text(){return e(y)},children:(V,I)=>{var O=Do();Ye(O),J(()=>{ke(O,"min",e(L)),ke(O,"step",e(b))}),et(O,()=>e(d),H=>f(d,H)),u(V,O)}}),g(N),u(c,R)},$$slots:{footer:!0,default:!0}})}Ae()}function Le(t,r){let a=me(r,"size",3,14);var n=be(),s=G(n);Ss(s,()=>r.icon,(i,o)=>{o(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const Oo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Ho=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const In=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var jo=Ht("<svg><!><!></svg>");function Be(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]),n=Oe(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(r,!1);let s=me(r,"name",8,void 0),i=me(r,"color",8,"currentColor"),o=me(r,"size",8,24),l=me(r,"strokeWidth",8,2),d=me(r,"absoluteStrokeWidth",8,!1),y=me(r,"iconNode",24,()=>[]);Ms();var b=jo();Ln(b,(T,F,h)=>({...Oo,...T,...n,width:o(),height:o(),stroke:i(),"stroke-width":F,class:h}),[()=>Ho(n)?void 0:{"aria-hidden":"true"},()=>(Ut(d()),Ut(l()),Ut(o()),Mr(()=>d()?Number(l())*24/Number(o()):l())),()=>(Ut(In),Ut(s()),Ut(a),Mr(()=>In("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var L=x(b);Ke(L,1,y,fn,(T,F)=>{var h=U(()=>ks(e(F),2));let c=()=>e(h)[0],k=()=>e(h)[1];var R=be(),p=G(R);Ds(p,c,!0,(w,C)=>{Ln(w,()=>({...k()}))}),u(T,R)});var _=S(L);He(_,r,"default",{}),g(b),u(t,b),Ae()}function Vo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Be(t,Ue({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Uo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Be(t,Ue({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Bo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Be(t,Ue({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pn(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Be(t,Ue({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function qo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Be(t,Ue({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ko(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Be(t,Ue({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Go(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Be(t,Ue({name:"circle-x"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pr(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Be(t,Ue({name:"download"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Wo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Be(t,Ue({name:"droplets"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Xo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Be(t,Ue({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Yo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Be(t,Ue({name:"external-link"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Qo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Be(t,Ue({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Zo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Be(t,Ue({name:"pause"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Jo(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Be(t,Ue({name:"pen-line"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function ei(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Be(t,Ue({name:"pencil"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function xa(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Be(t,Ue({name:"play"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function ti(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Be(t,Ue({name:"plus"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function er(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Be(t,Ue({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function ri(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Be(t,Ue({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function ni(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Be(t,Ue({name:"save"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function ai(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Be(t,Ue({name:"settings"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function si(t,r){const a=Oe(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Be(t,Ue({name:"trash-2"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=be(),l=G(o);He(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}var oi=$('<li role="option"> </li>'),ii=$('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),li=$('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Me(r,!0);let a=me(r,"value",3,""),n=me(r,"placeholder",3,"Select..."),s=me(r,"class",3,""),i=me(r,"buttonClass",3,""),o=z(!1),l=z(void 0),d=z(void 0),y=z(""),b=U(()=>{var A;return((A=r.options.find(V=>V.value===a()))==null?void 0:A.label)??n()});function L(A){var V;f(o,!1),(V=r.onchange)==null||V.call(r,A)}function _(){if(!e(l)||!e(d))return;const A=e(l).getBoundingClientRect(),V=e(d).offsetHeight,I=4,O=window.innerHeight-A.bottom-I,K=O<V&&A.top-I>O?A.top-I-V:A.bottom+I,Z=Math.min(A.left,window.innerWidth-A.width);f(y,`position:fixed; top:${K}px; left:${Z}px; width:${A.width}px; z-index:9999;`)}async function T(){f(o,!e(o)),e(o)&&(await Pt(),_())}function F(A){A.key==="Escape"&&f(o,!1)}function h(A){e(o)&&e(l)&&!e(l).contains(A.target)&&e(d)&&!e(d).contains(A.target)&&f(o,!1)}var c=li();tt("mousedown",it,h),tt("keydown",it,F),tt("scroll",it,()=>{e(o)&&f(o,!1)});var k=G(c),R=x(k),p=x(R),w=x(p,!0);g(p);var C=S(p,2),m=x(C);Le(m,{get icon(){return pn},size:14}),g(C),g(R),nt(R,A=>f(l,A),()=>e(l)),g(k);var N=S(k,2);{var M=A=>{Jt(A,{children:(V,I)=>{var O=ii();Ke(O,21,()=>r.options,H=>H.value,(H,K)=>{var Z=oi();ke(Z,"tabindex",0);var ae=x(Z,!0);g(Z),J(()=>{ke(Z,"aria-selected",e(K).value===a()),Se(Z,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(K).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),re(ae,e(K).label)}),le("mousedown",Z,P=>{P.stopPropagation(),L(e(K).value)}),u(H,Z)}),g(O),nt(O,H=>f(d,H),()=>e(d)),J(()=>Ze(O,e(y))),u(V,O)}})};Q(N,A=>{e(o)&&A(M)})}J(()=>{Se(k,1,`relative inline-flex ${s()??""}`),Se(R,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),ke(R,"aria-expanded",e(o)),re(w,e(b)),Se(C,1,`text-muted shrink-0 transition-transform duration-150 ${e(o)?"rotate-180":""}`)}),le("mousedown",R,A=>{A.stopPropagation(),T()}),u(t,c),Ae()}Ge(["mousedown"]);var ci=Ht('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ui=$('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),di=$('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),fi=$('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Wt(t,r){Me(r,!0);let a=me(r,"selected",19,()=>[]),n=me(r,"placeholder",3,"Select..."),s=me(r,"class",3,""),i=z(!1),o=z(void 0),l=z(void 0),d=z(""),y=U(()=>new Set(a())),b=U(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(I=>{var O;return((O=r.options.find(H=>H.value===I))==null?void 0:O.label)??I}).join(", "):`${a().length} selected`);function L(I){var H;const O=new Set(e(y));O.has(I)?O.delete(I):O.add(I),(H=r.onchange)==null||H.call(r,[...O])}function _(){var I;(I=r.onchange)==null||I.call(r,r.options.map(O=>O.value))}function T(){var I;(I=r.onchange)==null||I.call(r,[])}function F(){if(!e(o)||!e(l))return;const I=e(o).getBoundingClientRect(),O=e(l).offsetHeight,H=4,K=window.innerHeight-I.bottom-H,ae=K<O&&I.top-H>K?I.top-H-O:I.bottom+H,P=Math.min(I.left,window.innerWidth-I.width);f(d,`position:fixed; top:${ae}px; left:${P}px; min-width:${I.width}px; z-index:9999;`)}async function h(){f(i,!e(i)),e(i)&&(await Pt(),F())}function c(I){e(i)&&e(o)&&!e(o).contains(I.target)&&e(l)&&!e(l).contains(I.target)&&f(i,!1)}function k(I){I.key==="Escape"&&f(i,!1)}var R=fi();tt("mousedown",it,c),tt("keydown",it,k),tt("scroll",it,()=>{e(i)&&f(i,!1)});var p=G(R),w=x(p),C=x(w),m=x(C,!0);g(C);var N=S(C,2),M=x(N);Le(M,{get icon(){return pn},size:14}),g(N),g(w),nt(w,I=>f(o,I),()=>e(o)),g(p);var A=S(p,2);{var V=I=>{Jt(I,{children:(O,H)=>{var K=di(),Z=x(K),ae=x(Z),P=S(ae,2);g(Z);var E=S(Z,2);Ke(E,17,()=>r.options,j=>j.value,(j,D)=>{var v=ui(),B=x(v),X=x(B);{var ue=se=>{var de=ci();u(se,de)},fe=U(()=>e(y).has(e(D).value));Q(X,se=>{e(fe)&&se(ue)})}g(B);var W=S(B,2),te=x(W,!0);g(W),g(v),J(se=>{Se(B,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${se??""}`),re(te,e(D).label)},[()=>e(y).has(e(D).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),le("mousedown",v,se=>{se.stopPropagation(),L(e(D).value)}),u(j,v)}),g(K),nt(K,j=>f(l,j),()=>e(l)),J(()=>Ze(K,e(d))),le("mousedown",ae,j=>{j.stopPropagation(),_()}),le("mousedown",P,j=>{j.stopPropagation(),T()}),u(O,K)}})};Q(A,I=>{e(i)&&I(V)})}J(()=>{Se(p,1,`relative inline-flex ${s()??""}`),ke(w,"aria-expanded",e(i)),re(m,e(b)),Se(N,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),le("mousedown",w,I=>{I.stopPropagation(),h()}),u(t,R),Ae()}Ge(["mousedown"]);const Zr="csauto_token";let ya=z(oe(localStorage.getItem(Zr)??""));function wa(){return e(ya)}function ka(t){f(ya,t,!0),t?localStorage.setItem(Zr,t):localStorage.removeItem(Zr)}let wr=null;async function mn(t,r={}){const a=new Headers(r.headers),n=wa();n&&a.set("X-CSAUTO-TOKEN",n);const s=await fetch(t,{...r,headers:a});if(s.status===401){wr||(wr=hn("API token required:",n,"Authentication"));const i=await wr;return wr=null,i===null?s:(ka(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return s}async function ct(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function zr(t){const r=await mn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Rt(t,r){const a=await mn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function Or(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function vi(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function zn(t){return ct(`/api/perf?${Or(t)}`)}function gi(){return ct("/api/app_config")}function hi(t){return ct(`/api/residual_columns?${Or(t)}`).then(r=>r.columns??[])}function pi(t,r,a={}){const n=new URLSearchParams;return t.forEach(s=>n.append("case",s)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),zr(`/api/residuals_svg?${n}`)}function Ca(t){return ct(`/api/restart_origin?${Or(t)}`)}function mi(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function _i(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return zr(`/api/tail?${n}`)}function bi(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function xi(t){return ct(`/api/resu_dirs?${Or(t)}`).then(r=>r.dirs??[])}function Jr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function yi(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function wi(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(s=>n.append("column",s)),ct(`/api/probe_position?${n}`)}function ki(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),zr(`/api/probe_svg?${r}`)}function Ci(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),zr(`/api/compare_runs?${r}`)}function On(t){return Rt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,backend:t.backend??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function Si(t){return Rt("/api/kill_case",{cases:t}).then(()=>{})}function kr(t){return Rt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function $i(t){return Rt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function Pi(t,r){return Rt("/api/case_note",{case:t,note:r}).then(()=>{})}function Ei(t,r){return Rt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function Ri(t){return Rt("/api/open_gui",{case:t}).then(()=>{})}function Ni(){return ct("/api/settings/telemetry")}function Mi(t){return Rt("/api/settings/telemetry",{enabled:t})}var Ai=$("<!> <!>",1),Ti=$('<input type="number" min="0" step="1" class="w-[80px]"/>'),Li=$('<span class="text-xs text-muted">Loading...</span>'),Fi=$('<span class="text-xs text-muted">No folders found</span>'),Di=$('<div class="mb-3"><!></div>'),Ii=$('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function zi(t,r){Me(r,!0);const a=po();let n=z("keep_latest"),s=z(oe(a.keepLast)),i=z(oe([])),o=z(oe([])),l=z(!0),d=U(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const y=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let b=U(()=>e(i).map(_=>({value:_,label:_})));Zn(async()=>{try{f(i,await xi(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function L(){if(e(d)&&e(o).length===0){await Xe("Please select at least one RESU folder.","Missing selection");return}const _={action:e(n)};e(n)==="keep_latest"?(_.keepLast=e(s),mo({keepLast:e(s)})):e(n)==="delete_all"?_.keepLast=0:e(n)==="keep_folder"?_.keepResu=e(o):e(n)==="delete_folder"&&(_.deleteResu=e(o)),ot(_)}{const _=h=>{var c=Ai(),k=G(c);$e(k,{variant:"secondary",onclick:()=>ot(null),children:(p,w)=>{we();var C=Ve("Cancel");u(p,C)},$$slots:{default:!0}});var R=S(k,2);$e(R,{variant:"primary",onclick:L,children:(p,w)=>{we();var C=Ve("Clean");u(p,C)},$$slots:{default:!0}}),u(h,c)};let T=U(()=>r.cases.length),F=U(()=>r.cases.length>1?"s":"");hr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(T)??""} case${e(F)??""} selected`},footer:_,children:(h,c)=>{var k=Ii(),R=G(k),p=x(R);Re(p,{text:"Action",children:(M,A)=>{lt(M,{class:"w-[200px]",get options(){return y},get value(){return e(n)},onchange:V=>f(n,V,!0)})}});var w=S(p,2);{var C=M=>{Re(M,{text:"Keep last",children:(A,V)=>{var I=Ti();Ye(I),et(I,()=>e(s),O=>f(s,O)),u(A,I)}})};Q(w,M=>{e(n)==="keep_latest"&&M(C)})}g(R);var m=S(R,2);{var N=M=>{var A=Di(),V=x(A);Re(V,{text:"RESU folders",children:(I,O)=>{var H=be(),K=G(H);{var Z=E=>{var j=Li();u(E,j)},ae=E=>{var j=Fi();u(E,j)},P=E=>{Wt(E,{class:"w-full",get options(){return e(b)},get selected(){return e(o)},onchange:j=>f(o,j,!0),placeholder:"Select folders..."})};Q(K,E=>{e(l)?E(Z):e(i).length===0?E(ae,1):E(P,-1)})}u(I,H)}}),g(A),u(M,A)};Q(m,M=>{e(d)&&M(N)})}u(h,k)},$$slots:{footer:!0,default:!0}})}Ae()}function Oi(t,r){Me(r,!0);let a=U(Xs);var n=be(),s=G(n);{var i=y=>{No(y,{get cases(){return e(a).props.cases}})},o=y=>{zo(y,{get cases(){return e(a).props.cases}})},l=y=>{zi(y,{get cases(){return e(a).props.cases}})},d=y=>{lo(y,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Q(s,y=>{e(a).type==="run"?y(i):e(a).type==="restart"?y(o,1):e(a).type==="clean"?y(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&y(d,3)})}u(t,n),Ae()}let fr=z(oe([])),Hi=0;function ji(){return e(fr)}function Cr(t,r="success",a=3500){const n=++Hi;f(fr,[...e(fr),{id:n,message:t,variant:r}],!0),setTimeout(()=>Sa(n),a)}function Sa(t){f(fr,e(fr).filter(r=>r.id!==t),!0)}var Vi=$('<div role="status"> </div>'),Ui=$('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Bi(t,r){Me(r,!0);let a=U(ji);Jt(t,{children:(n,s)=>{var i=Ui();Ke(i,21,()=>e(a),o=>o.id,(o,l)=>{var d=Vi(),y=x(d,!0);g(d),J(()=>{Se(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),re(y,e(l).message)}),le("click",d,()=>Sa(e(l).id)),u(o,d)}),g(i),u(n,i)}}),Ae()}Ge(["click"]);var qi=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Ki=Ht('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Gi=$('<span role="checkbox"><!></span>'),Wi=$("<span> </span><!>",1),Xi=$("<!><span> </span>",1),Yi=$('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function Ot(t,r){Me(r,!0);const a=h=>{var c=Gi(),k=x(c);{var R=w=>{var C=qi();J(()=>Ze(C,`width: ${o()-4}px; height: ${o()-4}px;`)),u(w,C)},p=w=>{var C=Ki();J(()=>Ze(C,`width: ${o()-4}px; height: ${o()-4}px;`)),u(w,C)};Q(k,w=>{n()&&!s()?w(R):s()&&w(p,1)})}g(c),J(()=>{Se(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||s()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${o()??""}px; height: ${o()??""}px;`),ke(c,"aria-checked",s()?"mixed":n()),ke(c,"aria-disabled",i()),ke(c,"tabindex",i()?-1:0)}),le("click",c,y),le("keydown",c,b),u(h,c)};let n=me(r,"checked",3,!1),s=me(r,"indeterminate",3,!1),i=me(r,"disabled",3,!1),o=me(r,"size",3,16),l=me(r,"label",3,""),d=me(r,"labelFirst",3,!1);function y(h){var k;if(h.stopPropagation(),i())return;const c=s()?!0:!n();(k=r.onchange)==null||k.call(r,c)}function b(h){(h.key===" "||h.key==="Enter")&&(h.preventDefault(),h.stopPropagation(),y(h))}var L=be(),_=G(L);{var T=h=>{var c=Yi(),k=x(c);{var R=w=>{var C=Wi(),m=G(C),N=x(m,!0);g(m);var M=S(m);a(M),J(()=>re(N,l())),u(w,C)},p=w=>{var C=Xi(),m=G(C);a(m);var N=S(m),M=x(N,!0);g(N),J(()=>re(M,l())),u(w,C)};Q(k,w=>{d()?w(R):w(p,-1)})}g(c),le("click",c,y),le("keydown",c,b),u(h,c)},F=h=>{a(h)};Q(_,h=>{l()?h(T):h(F,-1)})}u(t,L),Ae()}Ge(["click","keydown"]);function _n(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Hr(t,r){localStorage.setItem(t,JSON.stringify(r))}const en=new Map;function mr(t,r,a){vt(t),en.set(t,setInterval(r,a))}function vt(t){const r=en.get(t);r!==void 0&&(clearInterval(r),en.delete(t))}const Lt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Qi=["status","plot","probe","tail","errors"],Wr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},ir=_n("csauto_refresh_rates",{});let bt=z(oe({status:ir.status??Lt.status,tail:ir.tail??Lt.tail,plot:ir.plot??Lt.plot,probe:ir.probe??Lt.probe,errors:ir.errors??Lt.errors}));function Zi(){return e(bt)}function Ji(t,r){f(bt,{...e(bt),[t]:r},!0),Hr("csauto_refresh_rates",e(bt))}function el(){return e(bt).status}function Hn(){return e(bt).tail}function jn(){return e(bt).plot}function tl(){return e(bt).probe}function Vn(){return e(bt).errors}const tn=new Set;function _r(t){return tn.add(t),()=>tn.delete(t)}function rl(){tn.forEach(t=>t())}const rn=_n("csauto_autorefresh_enabled",{});function tr(t){return rn[t]??!0}function rr(t,r){rn[t]=r,Hr("csauto_autorefresh_enabled",rn)}var nl=$("<!> <!>",1),al=$('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),sl=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),ol=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function il(t,r){Me(r,!0);let a=z(oe(wa())),n=z(oe({...Zi()})),s=z(!0),i=z(!1);Ne(()=>{Ni().then(y=>{f(s,y.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function o(y){const{min:b}=Wr[y];let L=e(n)[y];(typeof L!="number"||isNaN(L))&&(L=Lt[y]),f(n,{...e(n),[y]:Math.max(b,Math.round(L))},!0)}function l(y,b){const L=b.target,_=L.value.replace(/[^0-9]/g,""),T=parseInt(_,10);isNaN(T)?_===""&&f(n,{...e(n),[y]:Wr[y].min},!0):f(n,{...e(n),[y]:T},!0),L.value=String(e(n)[y])}function d(){ka(e(a));for(const y of Object.keys(e(n)))o(y),Ji(y,e(n)[y]);e(i)&&Mi(e(s)).catch(()=>{}),r.onClose()}hr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:b=>{var L=nl(),_=G(L);$e(_,{variant:"secondary",get onclick(){return r.onClose},children:(F,h)=>{we();var c=Ve("Cancel");u(F,c)},$$slots:{default:!0}});var T=S(_,2);$e(T,{variant:"primary",onclick:d,children:(F,h)=>{we();var c=Ve("Save");u(F,c)},$$slots:{default:!0}}),u(b,L)},children:(b,L)=>{var _=ol(),T=G(_),F=S(x(T),2);Ye(F),g(T);var h=S(T,2),c=x(h),k=S(x(c),2);g(c);var R=S(c,2);Ke(R,20,()=>Qi,C=>C,(C,m)=>{const N=U(()=>Wr[m]);var M=al(),A=x(M),V=x(A),I=x(V,!0);g(V);var O=S(V,2),H=x(O);g(O),g(A);var K=S(A,2),Z=x(K);Ye(Z),we(2),g(K),g(M),J(()=>{re(I,e(N).label),re(H,`min ${e(N).min??""}ms`),vn(Z,e(n)[m])}),le("input",Z,ae=>l(m,ae)),tt("blur",Z,()=>o(m)),u(C,M)}),g(R),g(h);var p=S(h,2);{var w=C=>{var m=sl(),N=S(x(m),2);Ot(N,{get checked(){return e(s)},onchange:M=>f(s,M,!0),label:"Send anonymous usage statistics"}),g(m),u(C,m)};Q(p,C=>{e(i)&&C(w)})}et(F,()=>e(a),C=>f(a,C)),le("click",k,()=>f(n,{...Lt},!0)),u(b,_)},$$slots:{footer:!0,default:!0}}),Ae()}Ge(["click","input"]);const ll=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,cl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";var ul=$('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),dl=$('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),fl=$('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),vl=$('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function gl(t,r){Me(r,!0);let a=U(()=>r.shownCases!==r.totalCases),n=z(!1);var s=vl(),i=G(s),o=x(i),l=x(o);{var d=D=>{var v=ul();J(()=>ke(v,"src",ll)),u(D,v)},y=U(()=>{var D;return!Ft()||((D=Ft())==null?void 0:D.solver)==="code_saturne"}),b=D=>{var v=dl();J(()=>ke(v,"src",cl)),u(D,v)},L=U(()=>{var D;return((D=Ft())==null?void 0:D.solver)==="code_aster"}),_=D=>{var v=fl(),B=x(v,!0);g(v),J(X=>re(B,X),[()=>{var X;return(X=Ft())==null?void 0:X.solver}]),u(D,v)};Q(l,D=>{e(y)?D(d):e(L)?D(b,1):D(_,-1)})}g(o);var T=S(o,2),F=x(T),h=x(F),c=x(h);{var k=D=>{var v=Ve();J(()=>re(v,`${r.shownCases??""}/`)),u(D,v)};Q(c,D=>{e(a)&&D(k)})}var R=S(c,1,!0);g(h);var p=S(h,2),w=x(p,!0);g(p),g(F);var C=S(F,2),m=x(C),N=x(m);{var M=D=>{var v=Ve();J(()=>re(v,`${r.shownRunning??""}/`)),u(D,v)};Q(N,D=>{e(a)&&D(M)})}var A=S(N,1,!0);g(m),we(2),g(C);var V=S(C,2),I=x(V),O=x(I);{var H=D=>{var v=Ve();J(()=>re(v,`${r.shownConverged??""}/`)),u(D,v)};Q(O,D=>{e(a)&&D(H)})}var K=S(O,1,!0);g(I),we(2),g(V),g(T);var Z=S(T,2),ae=x(Z),P=x(ae);Le(P,{get icon(){return ai},size:18}),g(ae),g(Z),g(i);var E=S(i,2);{var j=D=>{il(D,{onClose:()=>f(n,!1)})};Q(E,D=>{e(n)&&D(j)})}J(()=>{re(R,r.totalCases),re(w,r.totalCases===1?"case":"cases"),re(A,r.totalRunning),re(K,r.totalConverged)}),le("click",ae,()=>f(n,!0)),u(t,s),Ae()}Ge(["click"]);const hl=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var pl=$('<div class="text-xs text-muted font-normal"> </div>'),ml=$('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),_l=$("<div><!> <!></div>"),bl=$('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),xl=$('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),yl=$('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function jt(t,r){let a=me(r,"eyebrow",3,""),n=me(r,"title",3,""),s=me(r,"wide",3,!1);var i=yl(),o=S(x(i),2);{var l=y=>{var b=xl(),L=x(b);{var _=c=>{var k=be(),R=G(k);ft(R,()=>r.titleSlot),u(c,k)},T=c=>{var k=_l(),R=x(k);{var p=m=>{var N=pl(),M=x(N,!0);g(N),J(()=>re(M,a())),u(m,N)};Q(R,m=>{a()&&m(p)})}var w=S(R,2);{var C=m=>{var N=ml(),M=x(N,!0);g(N),J(()=>re(M,n())),u(m,N)};Q(w,m=>{n()&&m(C)})}g(k),u(c,k)};Q(L,c=>{r.titleSlot?c(_):c(T,-1)})}var F=S(L,2);{var h=c=>{var k=bl(),R=x(k);ft(R,()=>r.actions),g(k),u(c,k)};Q(F,c=>{r.actions&&c(h)})}g(b),u(y,b)};Q(o,y=>{(a()||n()||r.titleSlot||r.actions)&&y(l)})}var d=S(o,2);ft(d,()=>r.children),g(i),J(()=>{Se(i,1,`${s()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),ke(i,"id",r.id)}),u(t,i)}function nr(t,r){Me(r,!0);let a=me(r,"checked",15,!0);Ne(()=>{a()?mr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),vr(()=>vt(r.name)),Ot(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Ae()}var wl=$("<!> ",1),kl=$('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),Cl=$('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),Sl=$('<span class="inline-flex"><!></span> <!>',1);function $l(t,r){Me(r,!0);let a=me(r,"label",3,"More"),n=z(!1),s=z(void 0),i=z(void 0),o=z("");function l(){if(!e(s)||!e(i))return;const c=e(s).getBoundingClientRect(),k=e(i).offsetHeight,R=4,p=window.innerHeight-c.bottom-R,C=p<k&&c.top-R>p?c.top-R-k:c.bottom+R,m=Math.min(c.left,window.innerWidth-180);f(o,`position:fixed; top:${C}px; left:${m}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Pt(),l())}function y(c){c.disabled||(f(n,!1),c.onClick())}function b(c){e(n)&&e(s)&&!e(s).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var L=Sl();tt("mousedown",it,b),tt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),tt("scroll",it,()=>{e(n)&&f(n,!1)});var _=G(L),T=x(_);$e(T,{variant:"secondary",size:"sm",onclick:d,children:(c,k)=>{var R=wl(),p=G(R);Le(p,{get icon(){return Xo}});var w=S(p);J(()=>re(w,` ${a()??""}`)),u(c,R)},$$slots:{default:!0}}),g(_),nt(_,c=>f(s,c),()=>e(s));var F=S(_,2);{var h=c=>{Jt(c,{children:(k,R)=>{var p=Cl();Ke(p,21,()=>r.items,w=>w.label,(w,C)=>{var m=kl(),N=x(m),M=x(N);Le(M,{get icon(){return e(C).icon},size:14});var A=S(M);g(N),g(m),J(()=>{N.disabled=e(C).disabled,ke(N,"aria-disabled",e(C).disabled),Se(N,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(C).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),re(A,` ${e(C).label??""}`)}),le("mousedown",N,V=>{V.stopPropagation(),y(e(C))}),u(w,m)}),g(p),nt(p,w=>f(i,w),()=>e(i)),J(()=>Ze(p,e(o))),u(k,p)}})};Q(F,c=>{e(n)&&c(h)})}u(t,L),Ae()}Ge(["mousedown"]);const Dt=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"},{key:"backend_execution_time_s",label:"Cloud Time (s)"},{key:"backend_core_count",label:"Cloud Cores"}];let Xt=z(oe([])),Tr=z(oe([])),pt=z(oe(new Set)),br=z(""),bn=z(""),Et=z(oe([])),st=z(oe([])),Yt=z(""),$a=z(!0),Pl=z(!0),Kt=z(oe(_n("csauto_status_views",{}))),xn=z(oe(localStorage.getItem("csauto_status_view_selected")??""));function yn(){return e(Xt)}function wn(){return e(Tr)}function Bt(){return e(pt)}function Un(){return e(br)}function nn(){return e(bn)}function El(){return e(Et)}function Rl(){return e(Et).filter(t=>e(Tr).includes(t))}function Nl(){return e(Et).filter(t=>Dt.some(r=>r.key===t))}function Ml(){return e(st)}function Al(){return e(Yt)}function Tl(){return e($a)}function Bn(){return e(Kt)}function Ll(){return e(xn)}function Fl(t){f(Xt,t,!0)}function Dl(t){const r=e(Tr).length===0&&t.length>0;f(Tr,t,!0),r&&e(Et).length===0&&f(Et,[...t,...Dt.map(a=>a.key)],!0)}function Il(t){f(br,t,!0)}function qn(t){f(Et,t,!0)}function zl(t){f(Yt,t,!0)}function Ol(t){f($a,t,!0)}function Hl(t){f(Pl,t,!0)}function kn(t){f(xn,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function an(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(br,t,!0),f(bn,t,!0)}function Pa(t){f(pt,new Set([t]),!0),f(br,t,!0),f(bn,t,!0)}function sn(t,r,a){const n=a.indexOf(t),s=a.indexOf(r);if(n<0||s<0)return;const[i,o]=n<s?[n,s]:[s,n],l=new Set(e(pt));for(let d=i;d<=o;d++)l.add(a[d]);f(pt,l,!0),f(br,r,!0)}function Kn(t){f(pt,new Set(t),!0)}function Gn(){f(pt,new Set,!0)}function jl(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function Ea(){if(!e(Yt).trim())return e(Xt);const t=e(Yt).toLowerCase().trim().split(/\s+/);return e(Xt).filter(r=>{const a=jl(r);return t.every(n=>a.includes(n))})}function Vl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Wn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;if(r==="backend_execution_time_s")return t.backend_execution_time_s??0;if(r==="backend_core_count")return t.backend_core_count??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Vl(a):""}function Ul(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function Ra(){const t=Ea();return e(st).length===0?t:[...t].sort((r,a)=>{for(const n of e(st)){const s=Wn(r,n.key),i=Wn(a,n.key),o=Ul(s,i);if(o!==0)return n.dir==="asc"?o:-o}return 0})}function Rr(){return Ra().map(t=>t.case_id)}function Bl(t,r){const a=e(st).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(st)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(st,n,!0)}else f(st,[...e(st),{key:t,dir:"asc"}],!0);else a>=0&&e(st).length===1?f(st,[{key:t,dir:e(st)[0].dir==="asc"?"desc":"asc"}],!0):f(st,[{key:t,dir:"asc"}],!0)}function ql(){return{visibleColumns:[...e(Et)],search:e(Yt),sorts:e(st).map(t=>({...t}))}}function Kl(t){f(Et,[...t.visibleColumns],!0),f(Yt,t.search,!0),f(st,t.sorts.map(r=>({...r})),!0)}function Gl(t){f(Kt,{...e(Kt),[t]:ql()},!0),Hr("csauto_status_views",e(Kt)),kn(t)}function Wl(t){const r={...e(Kt)};delete r[t],f(Kt,r,!0),Hr("csauto_status_views",r),e(xn)===t&&kn("")}function Sr(){const t=new Set;for(const r of e(Xt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Xn(){for(const t of e(Xt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function Xl(t,r){const a=r.length,n=t.length,s=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,o=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:s,shownRunning:i,totalConverged:o,shownConverged:l}}var Yl=$('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),Ql=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function Zl(t,r){Me(r,!0);let a=me(r,"initialName",3,""),n=U(wn),s=z(oe(a())),i=z(oe(new Set(r.initialColumns??[...e(n),...Dt.map(H=>H.key)])));function o(H){const K=new Set(e(i));K.has(H)?K.delete(H):K.add(H),f(i,K,!0)}function l(H,K){const Z=new Set(e(i));H.forEach(ae=>K?Z.add(ae):Z.delete(ae)),f(i,Z,!0)}function d(){const H=e(s).trim();H&&r.onSave(H,[...e(i)])}function y(H){H.key==="Escape"&&r.onCancel()}function b(H){H.target.dataset.backdrop!==void 0&&r.onCancel()}let L=z(void 0);Ne(()=>{var H,K;(H=e(L))==null||H.focus(),(K=e(L))==null||K.select()});var _=Ql(),T=x(_),F=x(T),h=x(F,!0);g(F);var c=S(F,2),k=S(x(c),2);Ye(k),nt(k,H=>f(L,H),()=>e(L)),g(c);var R=S(c,2);{var p=H=>{var K=Yl(),Z=x(K),ae=S(x(Z),2),P=x(ae),E=S(P,2);g(ae),g(Z);var j=S(Z,2);Ke(j,20,()=>e(n),D=>D,(D,v)=>{{let B=U(()=>e(i).has(v));Ot(D,{get checked(){return e(B)},onchange:()=>o(v),size:14,get label(){return v}})}}),g(j),g(K),le("click",P,()=>l(e(n),!0)),le("click",E,()=>l(e(n),!1)),u(H,K)};Q(R,H=>{e(n).length>0&&H(p)})}var w=S(R,2),C=x(w),m=S(x(C),2),N=x(m),M=S(N,2);g(m),g(C);var A=S(C,2);Ke(A,21,()=>Dt,H=>H.key,(H,K)=>{{let Z=U(()=>e(i).has(e(K).key));Ot(H,{get checked(){return e(Z)},onchange:()=>o(e(K).key),size:14,get label(){return e(K).label}})}}),g(A),g(w);var V=S(w,2),I=x(V);$e(I,{variant:"secondary",get onclick(){return r.onCancel},children:(H,K)=>{we();var Z=Ve("Cancel");u(H,Z)},$$slots:{default:!0}});var O=S(I,2);{let H=U(()=>!e(s).trim());$e(O,{variant:"primary",onclick:d,get disabled(){return e(H)},children:(K,Z)=>{we();var ae=Ve("Save");u(K,ae)},$$slots:{default:!0}})}g(V),g(T),g(_),J(()=>re(h,r.mode==="create"?"New view":"Edit view")),le("keydown",_,y),le("click",_,b),et(k,()=>e(s),H=>f(s,H)),le("click",N,()=>l(Dt.map(H=>H.key),!0)),le("click",M,()=>l(Dt.map(H=>H.key),!1)),u(t,_),Ae()}Ge(["keydown","click"]);var Jl=$('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function ec(t,r){Me(r,!0);let a=U(()=>Object.keys(Bn())),n=z(oe(Ll())),s=z(!1),i=z("create"),o=U(()=>[{value:"",label:"All columns"},...e(a).map(C=>({value:C,label:C}))]);function l(C){if(f(n,C,!0),kn(C),C==="")qn([...wn(),...Dt.map(m=>m.key)]);else{const m=Bn();m[C]&&Kl(m[C])}}function d(){f(i,"edit"),f(s,!0)}function y(){f(i,"create"),f(s,!0)}function b(C,m){qn(m),e(i)==="edit"&&e(n)&&C!==e(n)&&Wl(e(n)),Gl(C),f(n,C,!0),f(s,!1)}function L(){f(s,!1)}var _=Jl(),T=G(_),F=x(T);lt(F,{class:"w-[140px]",get options(){return e(o)},get value(){return e(n)},onchange:l});var h=S(F,2),c=x(h);Le(c,{get icon(){return ei},size:14}),g(h);var k=S(h,2),R=x(k);Le(R,{get icon(){return ti},size:14}),g(k),g(T);var p=S(T,2);{var w=C=>{Jt(C,{children:(m,N)=>{{let M=U(()=>e(i)==="edit"?e(n):""),A=U(El);Zl(m,{get mode(){return e(i)},get initialName(){return e(M)},get initialColumns(){return e(A)},onSave:b,onCancel:L})}}})};Q(p,C=>{e(s)&&C(w)})}le("click",h,d),le("click",k,y),u(t,_),Ae()}Ge(["click"]);var tc=$('<th><div class="flex items-center justify-center h-full"><!></div></th>'),rc=$("<th></th>"),nc=$('<span style="margin-left: 4px; font-size: 9px;"> </span>'),ac=$('<th role="button" tabindex="0"> <!></th>'),sc=$('<td><div class="flex items-center justify-center h-full"><!></div></td>'),oc=$("<td><span> </span></td>"),ic=$('<span class="text-muted"><!></span>'),lc=$('<td role="button" tabindex="0"><!></td>'),cc=$("<!> Open GUI",1),uc=$("<td><!></td>"),dc=$("<td> </td>"),fc=$("<tr></tr>"),vc=$('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function gc(t,r){Me(r,!0);let a=U(()=>r.rows.length>0&&r.rows.every(P=>e(y).has(P.case_id))),n=U(()=>r.rows.some(P=>e(y).has(P.case_id))),s=U(()=>e(n)&&!e(a)),i=U(Rl),o=U(()=>new Set(Nl())),l=U(Ml),d=U(Tl),y=U(Bt),b=U(()=>{const P=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(o).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],E=e(i).map(B=>({key:B,label:B,kind:"doe"})),D=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"},{key:"backend_execution_time_s",label:"Cloud Time (s)",kind:"calc"},{key:"backend_core_count",label:"Cloud Cores",kind:"calc"}].filter(B=>e(o).has(B.key)),v=cr("gui")?[{key:"_actions",label:"",kind:"meta",sticky:"right"}]:[];return[...P,...E,...D,...v]});function L(P){const E=e(l).findIndex(D=>D.key===P);if(E<0)return"";const j=e(l)[E].dir==="asc"?"▲":"▼";return e(l).length>1?`${j}${E+1}`:j}function _(P,E){P!=="_actions"&&Bl(P,E.ctrlKey||E.metaKey)}function T(P,E){E.shiftKey?sn(nn()||P,P,Rr()):E.ctrlKey||E.metaKey?an(P):Pa(P)}function F(P,E){var D;const j=((D=P.status)==null?void 0:D.toUpperCase())??"";j!=="DONE"&&j!=="FAILED"||(E.preventDefault(),r.onContextMenu(P.case_id,E.clientX,E.clientY,P.convergence??""))}async function h(P){const E=P.note??"",j=await hn("Case note:",E,`Note — ${P.case_id}`,"",!0);if(j!==null)try{await Pi(P.case_id,j)}catch(D){await Xe(`Failed to set note: ${D instanceof Error?D.message:D}`,"Error")}}async function c(P){try{await Ri(P)}catch(E){await Xe(`Failed to open GUI: ${E instanceof Error?E.message:E}`,"Error")}}function k(P,E){const j=(P==null?void 0:P.toUpperCase())??"";return(j==="DONE"||j==="FAILED")&&E==="converged"?"CONVERGED":(j==="DONE"||j==="FAILED")&&E==="not_converged"?"NOT CONVERGED":j}function R(P,E){const j=(P==null?void 0:P.toUpperCase())??"";return(j==="DONE"||j==="FAILED")&&E==="converged"?"status-converged":(j==="DONE"||j==="FAILED")&&E==="not_converged"?"status-not-converged":j==="RUNNING"?"status-running":j==="DONE"?"status-done":j==="FAILED"?"status-failed":j==="PREPARED"?"status-prepared":"status-unknown"}function p(P){return e(y).has(P.case_id)?"row-selected":""}function w(P,E){var j;return E.key==="case_id"?P.case_id:E.key==="nprocs"?P.nprocs!=null?String(P.nprocs):"":E.key==="nt"?P.nt!=null?String(P.nt):"":E.key==="last_iter"?P.last_iter!=null?String(P.last_iter):"":E.key==="duration"?P.duration??"":E.key==="last_mod"?C(P.last_mod):E.key==="resu_size_mb"?P.resu_size_mb!=null?String(P.resu_size_mb):"":E.key==="backend_execution_time_s"?P.backend_execution_time_s!=null?P.backend_execution_time_s.toFixed(1):"":E.key==="backend_core_count"?P.backend_core_count!=null?String(P.backend_core_count):"":E.kind==="doe"?((j=P.doe)==null?void 0:j[E.key])!=null&&String(P.doe[E.key])!==""?String(P.doe[E.key]):"—":""}function C(P){if(!P)return"";try{const E=new Date(P),j=new Date,D=E.toDateString()===j.toDateString(),v=new Date(j);v.setDate(v.getDate()-1);const B=E.toDateString()===v.toDateString(),X=E.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return D?`Today ${X}`:B?`Yesterday ${X}`:E.toLocaleDateString([],{month:"short",day:"numeric"})+` ${X}`}catch{return P}}let m=z(oe({})),N=z(void 0);Ne(()=>{e(d),e(b),r.rows,!(!e(N)||!e(d))&&Pt().then(()=>{if(!e(N))return;const P=Array.from(e(N).querySelectorAll("thead th.sticky-left")),E={};let j=0;P.forEach(D=>{const v=D.dataset.colKey??"";E[v]=j,j+=D.getBoundingClientRect().width}),f(m,E,!0)})});function M(P,E,j){const D=j&&P.key!=="_select"&&P.key!=="_actions"?["status-sortable"]:[];if(!j&&P.key==="case_id"&&D.push("case-id"),P.kind==="doe"&&D.push("status-col-doe"),!j&&P.key==="note"&&D.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&P.sticky==="left"&&D.push("sticky-left"),e(d)&&P.sticky==="right"&&D.push("sticky-right"),e(d)&&P.sticky==="left"){const v=e(b)[E+1];(!v||v.sticky!=="left")&&D.push("sticky-divider")}if(e(d)&&P.sticky==="right"){const v=e(b)[E-1];(!v||v.sticky!=="right")&&D.push("sticky-divider")}return D.join(" ")}function A(P,E){return M(P,E,!0)}function V(P,E){return M(P,E,!1)}function I(P){return!e(d)||!P.sticky?"":P.sticky==="right"?"position:sticky;right:0;":P.sticky==="left"&&P.key in e(m)?`position:sticky;left:${e(m)[P.key]}px;`:""}var O=vc(),H=x(O),K=x(H),Z=x(K);Ke(Z,23,()=>e(b),P=>P.key,(P,E,j)=>{var D=be(),v=G(D);{var B=fe=>{var W=tc(),te=x(W),se=x(te);Ot(se,{get checked(){return e(a)},get indeterminate(){return e(s)},get onchange(){return r.onToggleAll},size:14}),g(te),g(W),J((de,ce)=>{Se(W,1,`${de??""} !px-2.5 !py-0 w-9`),ke(W,"data-col-key",e(E).key),Ze(W,ce)},[()=>A(e(E),e(j)),()=>I(e(E))]),u(fe,W)},X=fe=>{var W=rc();J((te,se)=>{Se(W,1,te),ke(W,"data-col-key",e(E).key),Ze(W,se)},[()=>dt(A(e(E),e(j))),()=>I(e(E))]),u(fe,W)},ue=fe=>{var W=ac(),te=x(W),se=S(te);{var de=ne=>{var xe=nc(),he=x(xe,!0);g(xe),J(Ee=>re(he,Ee),[()=>L(e(E).key)]),u(ne,xe)},ce=U(()=>L(e(E).key));Q(se,ne=>{e(ce)&&ne(de)})}g(W),J((ne,xe)=>{Se(W,1,ne),ke(W,"data-col-key",e(E).key),Ze(W,xe),re(te,`${e(E).label??""} `)},[()=>dt(A(e(E),e(j))),()=>I(e(E))]),le("click",W,ne=>_(e(E).key,ne)),le("keydown",W,ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),_(e(E).key,ne))}),u(fe,W)};Q(v,fe=>{e(E).key==="_select"?fe(B):e(E).key==="_actions"?fe(X,1):fe(ue,-1)})}u(P,D)}),g(Z),g(K);var ae=S(K);Ke(ae,21,()=>r.rows,P=>P.case_id,(P,E)=>{var j=fc();Ke(j,23,()=>e(b),D=>D.key,(D,v,B)=>{var X=be(),ue=G(X);{var fe=ce=>{var ne=sc(),xe=x(ne),he=x(xe);{let Ee=U(()=>e(y).has(e(E).case_id));Ot(he,{get checked(){return e(Ee)},onchange:()=>r.onToggleRow(e(E).case_id),size:14})}g(xe),g(ne),J((Ee,pe)=>{Se(ne,1,`${Ee??""} !px-2.5 !py-0 w-9`),ke(ne,"data-col-key",e(v).key),Ze(ne,pe)},[()=>V(e(v),e(B)),()=>I(e(v))]),u(ce,ne)},W=ce=>{var ne=oc(),xe=x(ne),he=x(xe,!0);g(xe),g(ne),J((Ee,pe,Fe,Ie)=>{Se(ne,1,Ee),ke(ne,"data-col-key",e(v).key),Ze(ne,pe),Se(xe,1,`status-pill ${Fe??""}`),re(he,Ie)},[()=>dt(V(e(v),e(B))),()=>I(e(v)),()=>R(e(E).status,e(E).convergence),()=>k(e(E).status,e(E).convergence)]),u(ce,ne)},te=ce=>{var ne=lc(),xe=x(ne);{var he=pe=>{var Fe=Ve();J(()=>re(Fe,e(E).note)),u(pe,Fe)},Ee=pe=>{var Fe=ic(),Ie=x(Fe);Le(Ie,{get icon(){return Jo},size:12}),g(Fe),u(pe,Fe)};Q(xe,pe=>{e(E).note?pe(he):pe(Ee,-1)})}g(ne),J((pe,Fe)=>{Se(ne,1,pe),ke(ne,"data-col-key",e(v).key),Ze(ne,Fe),ke(ne,"title",e(E).note||"Add note")},[()=>dt(V(e(v),e(B))),()=>I(e(v))]),le("click",ne,pe=>{pe.stopPropagation(),h(e(E))}),le("keydown",ne,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),pe.stopPropagation(),h(e(E)))}),u(ce,ne)},se=ce=>{var ne=uc(),xe=x(ne);$e(xe,{variant:"primary",size:"sm",onclick:he=>{he.stopPropagation(),c(e(E).case_id)},children:(he,Ee)=>{var pe=cc(),Fe=G(pe);Le(Fe,{get icon(){return Yo},size:12}),we(),u(he,pe)},$$slots:{default:!0}}),g(ne),J((he,Ee)=>{Se(ne,1,he),ke(ne,"data-col-key",e(v).key),Ze(ne,Ee)},[()=>dt(V(e(v),e(B))),()=>I(e(v))]),u(ce,ne)},de=ce=>{var ne=dc(),xe=x(ne,!0);g(ne),J((he,Ee,pe)=>{Se(ne,1,he),ke(ne,"data-col-key",e(v).key),Ze(ne,Ee),re(xe,pe)},[()=>dt(V(e(v),e(B))),()=>I(e(v)),()=>w(e(E),e(v))]),u(ce,ne)};Q(ue,ce=>{e(v).key==="_select"?ce(fe):e(v).key==="status"?ce(W,1):e(v).key==="note"?ce(te,2):e(v).key==="_actions"?ce(se,3):ce(de,-1)})}u(D,X)}),g(j),J(D=>Se(j,1,D),[()=>dt(p(e(E)))]),le("click",j,D=>T(e(E).case_id,D)),le("contextmenu",j,D=>F(e(E),D)),u(P,j)}),g(ae),g(H),nt(H,P=>f(N,P),()=>e(N)),g(O),J(()=>Se(O,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,O),Ae()}Ge(["click","keydown","contextmenu"]);var hc=$('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function pc(t,r){Me(r,!0);let a=U(()=>{const _=Math.min(r.x,window.innerWidth-180),T=Math.min(r.y,window.innerHeight-120);return`left: ${_}px; top: ${T}px;`});async function n(_){try{for(const T of r.cases)await Ei(T,_)}catch(T){console.error("Failed to set convergence:",T)}r.onClose()}const s=r.cases.length>1?` (${r.cases.length})`:"";var i=hc();tt("keydown",it,_=>{_.key==="Escape"&&r.onClose()});var o=x(i),l=x(o);g(o);var d=S(o,2),y=x(d);g(d);var b=S(d,2),L=x(b);g(b),g(i),J(()=>{Ze(i,e(a)),Se(o,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),re(l,`Mark Converged${s}`),Se(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),re(y,`Mark Not Converged${s}`),Se(b,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),re(L,`Clear Mark${s}`)}),le("click",o,()=>n("converged")),le("click",d,()=>n("not_converged")),le("click",b,()=>n("")),u(t,i),Ae()}Ge(["click"]);var mc=$("<!> Refresh",1),_c=$("<!> <!>",1),bc=$("<!> Run",1),xc=$("<!> Restart",1),yc=$("<!> Stop",1),wc=$("<!> Kill",1),kc=$("<!> Clean",1),Cc=$('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),Sc=$('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function $c(t,r){Me(r,!0);function a(){return[...Bt()]}async function n(){const v=a();if(!v.length)return;const B=await Ys(v);if(B)try{await On({cases:v,n:B.n,nt:B.nt,maxParallel:B.maxParallel,backend:B.backend}),r.onRefresh()}catch(X){await Xe(`Run failed: ${X instanceof Error?X.message:X}`,"Error")}}async function s(){const v=a();if(!v.length)return;const B=await Qs(v);if(B)try{await On({cases:v,n:B.n,nt:B.nt,maxParallel:B.maxParallel,restart:!0,restartMode:B.restartMode,restartValue:B.restartValue}),r.onRefresh()}catch(X){await Xe(`Restart failed: ${X instanceof Error?X.message:X}`,"Error")}}async function i(){const v=a();if(!(!v.length||!await Dn(`Kill ${v.length} case${v.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await Si(v),r.onRefresh()}catch(X){await Xe(`Kill failed: ${X instanceof Error?X.message:X}`,"Error")}}async function o(){const v=a();if(!(!v.length||!await Dn(`Stop ${v.length} case${v.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await kr({cases:v,action:"stop"}),r.onRefresh(),Cr(`Stop requested for ${v.length} case${v.length>1?"s":""} — will checkpoint and exit`)}catch(X){await Xe(`Stop failed: ${X instanceof Error?X.message:X}`,"Error")}}async function l(){const v=a();if(v.length)try{await kr({cases:v,action:"checkpoint"}),r.onRefresh(),Cr(`Checkpoint requested for ${v.length} case${v.length>1?"s":""}`)}catch(B){await Xe(`Checkpoint failed: ${B instanceof Error?B.message:B}`,"Error")}}async function d(){const v=a();if(!v.length)return;const B=await hn("Extend by how many additional time steps?","500","Extend Run");if(B===null)return;const X=parseInt(B,10);if(!Number.isFinite(X)||X<=0){await Xe("Enter a positive integer number of time steps.","Error");return}try{await kr({cases:v,action:"extend",value:X}),r.onRefresh(),Cr(`Extended ${v.length} case${v.length>1?"s":""} by ${X} time steps`)}catch(ue){await Xe(`Extend failed: ${ue instanceof Error?ue.message:ue}`,"Error")}}async function y(){const v=a();if(v.length)try{await kr({cases:v,action:"flush"}),Cr(`Flush requested for ${v.length} case${v.length>1?"s":""}`)}catch(B){await Xe(`Flush failed: ${B instanceof Error?B.message:B}`,"Error")}}async function b(){const v=a();if(!v.length)return;const B=await Zs(v);if(B)try{await $i({cases:v,keepLast:B.keepLast,keepResu:B.keepResu,deleteResu:B.deleteResu,pruneResu:!0}),r.onRefresh(),rl()}catch(X){await Xe(`Cleanup failed: ${X instanceof Error?X.message:X}`,"Error")}}function L(){const v=Rr();v.length>0&&v.every(X=>Bt().has(X))?Gn():Kn(v)}function _(v){an(v)}let T=z(oe(tr("status")));Ne(()=>{rr("status",e(T))}),Ol(!0);let F=U(()=>{const v=Sr();return v.size>0&&[...v].some(B=>B==="PREPARED"||B==="DONE"||B==="FAILED")}),h=U(()=>{if(!cr("restart"))return!1;const v=Sr();return v.size>0&&[...v].some(B=>B==="DONE"||B==="FAILED")&&Xn()}),c=U(()=>{const v=Sr();return v.size>0&&v.has("RUNNING")}),k=U(()=>{if(!cr("control"))return!1;const v=Sr();return v.size>0&&v.has("RUNNING")});const R=[{label:"Extend",icon:Qo,onClick:d,action:"extend"},{label:"Checkpoint",icon:ni,onClick:l,action:"checkpoint"},{label:"Flush",icon:Wo,onClick:y,action:"flush"}];let p=U(()=>R.filter(v=>bo(v.action)).map(v=>({label:v.label,icon:v.icon,onClick:v.onClick,disabled:!e(k)}))),w=U(Xn),C=z(oe(Al())),m=null;function N(){m&&clearTimeout(m),m=setTimeout(()=>{zl(e(C))},200)}Ne(()=>Hl(e(T)));let M=z(!1),A=z(0),V=z(0),I=z(oe([])),O=z("");function H(v,B,X,ue){f(I,Bt().has(v)?[...Bt()]:[v],!0),f(O,ue,!0),f(A,B,!0),f(V,X,!0),f(M,!0)}function K(){f(M,!1)}function Z(v){const B=Rr();if(B.length){if(v.key==="Escape"){Gn(),K();return}if((v.ctrlKey||v.metaKey)&&v.key==="a"){v.preventDefault(),Kn(B);return}if(v.key==="ArrowDown"||v.key==="ArrowUp"){v.preventDefault();const X=v.key==="ArrowDown"?1:-1,ue=Un(),fe=B.indexOf(ue),W=Math.max(0,Math.min(B.length-1,fe+X)),te=B[W];v.shiftKey?sn(nn()||B[0],te,B):Pa(te),Il(te);return}if(v.key===" "){v.preventDefault();const X=Un();X&&(v.shiftKey?sn(nn()||X,X,Rr()):an(X))}}}var ae=Sc();tt("click",it,K),tt("scroll",it,K);var P=G(ae),E=x(P);jt(E,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:B=>{var X=_c(),ue=G(X);{let te=U(el);nr(ue,{name:"status",get intervalMs(){return e(te)},get onRefresh(){return r.onRefresh},get checked(){return e(T)},set checked(se){f(T,se,!0)}})}var fe=S(ue,2);{var W=te=>{$e(te,{variant:"primary",onclick:()=>r.onRefresh(),children:(se,de)=>{var ce=mc(),ne=G(ce);Le(ne,{get icon(){return er}}),we(),u(se,ce)},$$slots:{default:!0}})};Q(fe,te=>{e(T)||te(W)})}u(B,X)},children:(B,X)=>{var ue=Cc(),fe=G(ue),W=x(fe),te=x(W);Ye(te);var se=S(te,2);ec(se,{}),g(W);var de=S(W,2),ce=x(de),ne=x(ce);g(ce);var xe=S(ce,2);{let q=U(()=>!e(F));$e(xe,{variant:"run",size:"sm",onclick:n,get disabled(){return e(q)},children:(ee,ie)=>{var ve=bc(),ye=G(ve);Le(ye,{get icon(){return xa}}),we(),u(ee,ve)},$$slots:{default:!0}})}var he=S(xe,2);{var Ee=q=>{{let ee=U(()=>!e(h));$e(q,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(ee)},children:(ie,ve)=>{var ye=xc(),ge=G(ye);Le(ge,{get icon(){return ri}}),we(),u(ie,ye)},$$slots:{default:!0}})}},pe=U(()=>cr("restart"));Q(he,q=>{e(pe)&&q(Ee)})}var Fe=S(he,2);{var Ie=q=>{{let ee=U(()=>!e(k));$e(q,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(ee)},children:(ie,ve)=>{var ye=yc(),ge=G(ye);Le(ge,{get icon(){return Ko}}),we(),u(ie,ye)},$$slots:{default:!0}})}},Qe=U(()=>cr("control"));Q(Fe,q=>{e(Qe)&&q(Ie)})}var je=S(Fe,2);{var rt=q=>{$l(q,{get items(){return e(p)}})};Q(je,q=>{e(p).length>0&&q(rt)})}var Te=S(je,2);{let q=U(()=>!e(c));$e(Te,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(q)},children:(ee,ie)=>{var ve=wc(),ye=G(ve);Le(ye,{get icon(){return Go}}),we(),u(ee,ve)},$$slots:{default:!0}})}var Pe=S(Te,2);{let q=U(()=>!e(w));$e(Pe,{variant:"secondary",size:"sm",onclick:b,get disabled(){return e(q)},children:(ee,ie)=>{var ve=kc(),ye=G(ve);Le(ye,{get icon(){return si}}),we(),u(ee,ve)},$$slots:{default:!0}})}g(de),g(fe);var Y=S(fe,2);{let q=U(Ra);gc(Y,{get rows(){return e(q)},onContextMenu:H,onToggleAll:L,onToggleRow:_})}J(q=>re(ne,`${q??""} selected`),[()=>Bt().size]),le("input",te,N),et(te,()=>e(C),q=>f(C,q)),u(B,ue)},$$slots:{actions:!0,default:!0}}),g(P);var j=S(P,2);{var D=v=>{pc(v,{get cases(){return e(I)},get x(){return e(A)},get y(){return e(V)},get currentValue(){return e(O)},onClose:K})};Q(j,v=>{e(M)&&v(D)})}le("keydown",P,Z),u(t,ae),Ae()}Ge(["keydown","input"]);var Pc=$('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Qt(t,r){var a=Pc(),n=x(a);ft(n,()=>r.children),g(a),u(t,a)}function Cn(t){return t.map(r=>({value:r,label:r}))}var Ec=$('<input type="number" step="any" class="w-[110px]"/>'),Rc=$("<!> <!> <!> <!> <!> <!>",1);function Sn(t,r){Me(r,!0);let a=me(r,"columnLabel",3,"Columns"),n=me(r,"xMinLabel",3,"Iter min"),s=U(()=>Cn(r.allCases)),i=U(()=>r.columns.map(d=>({value:d,label:d}))),o=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Qt(t,{children:(d,y)=>{var b=Rc(),L=G(b);Re(L,{text:"Cases",children:(w,C)=>{Wt(w,{class:"w-[160px]",get options(){return e(s)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var _=S(L,2);{var T=w=>{var C=be(),m=G(C);ft(m,()=>r.middleSlot),u(w,C)};Q(_,w=>{r.middleSlot&&w(T)})}var F=S(_,2);Re(F,{get text(){return a()},children:(w,C)=>{Wt(w,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var h=S(F,2);Re(h,{text:"Start from",children:(w,C)=>{lt(w,{class:"w-[140px]",get options(){return o},get value(){return r.startFrom},onchange:m=>r.onStartFromChange(m)})}});var c=S(h,2);{var k=w=>{Re(w,{get text(){return n()},children:(C,m)=>{var N=Ec();Ye(N),J(()=>vn(N,r.xMin)),le("input",N,l),u(C,N)}})};Q(c,w=>{r.startFrom==="custom"&&w(k)})}var R=S(c,2);{var p=w=>{var C=be(),m=G(C);ft(m,()=>r.extraSlot),u(w,C)};Q(R,w=>{r.extraSlot&&w(p)})}u(d,b)}}),Ae()}Ge(["input"]);var Nc=$('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),Mc=$('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Zt(t,r){let a=me(r,"emptyMessage",3,"");var n=Mc(),s=x(n);{var i=l=>{var d=be(),y=G(d);Ir(y,()=>r.svgHtml),u(l,d)},o=l=>{var d=Nc(),y=x(d),b=x(y,!0);g(y),g(d),J(()=>re(b,a()||"No data to display.")),u(l,d)};Q(s,l=>{r.svgHtml?l(i):l(o,-1)})}g(n),J(()=>ke(n,"id",r.id)),u(t,n)}async function $n(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:s,height:i}=Ac(n),o=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=s*o,l.height=i*o;const d=l.getContext("2d");if(!d)return;d.scale(o,o);const y=new XMLSerializer().serializeToString(n),b=new Blob([y],{type:"image/svg+xml;charset=utf-8"}),L=URL.createObjectURL(b),_=new Image;_.width=s,_.height=i,await new Promise((F,h)=>{_.onload=()=>{d.drawImage(_,0,0,s,i),URL.revokeObjectURL(L),F()},_.onerror=h,_.src=L});const T=await new Promise(F=>l.toBlob(F,"image/png"));T&&await Ma(T,Tc(r))}function xr(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,s=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Lc(`${t}_${n}_${s}.${a}`)}async function Na(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Ma(a,r)}function Ac(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Ma(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(s){if((s==null?void 0:s.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function Tc(t){return t.endsWith(".png")?t:`${t}.png`}function Lc(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Aa=z(oe([])),Ta=z(oe([])),La=z(oe([])),Fa=z("zero"),Da=z(0),Ia=z(""),Fc=z(!0);function Dc(){return{selectedCases:e(Aa),columns:e(Ta),selectedColumns:e(La),startFrom:e(Fa),iterMin:e(Da),svgHtml:e(Ia),autoRefresh:e(Fc)}}function Yn(t){f(Aa,t,!0)}function Ic(t){f(Ta,t,!0)}function Xr(t){f(La,t,!0)}function zc(t){f(Fa,t,!0)}function Oc(t){f(Da,t,!0)}function $r(t){f(Ia,t,!0)}var Hc=$("<!> Refresh",1),jc=$("<!> <!>",1),Vc=$("<!> Download as PNG",1),Uc=$('<div class="self-end ml-auto"><!></div>'),Bc=$('<!> <div class="flex justify-center"><!></div>',1),qc=$('<div class="flex justify-center"><!></div>'),Kc=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Gc=$("<!> <!>",1);function Wc(t,r){Me(r,!0);let a=U(Dc),n=z("");const s=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function o(){if(e(a).selectedCases.length)try{const h=await hi(e(a).selectedCases);f(n,"");const c=h.filter(k=>!s.has(k.toLowerCase().replace(/\s+/g,"_")));if(Ic(c),c.length===0){Xr([]),$r("");return}if(e(a).selectedColumns.length===0){const k=c.filter(R=>i.some(p=>R.toLowerCase().includes(p)));Xr(k.length>0?k:[c[0]])}}catch(h){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",h)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await o(),!e(a).selectedColumns.length)))try{let h=0,c=!0;if(e(a).startFrom==="restart"){const R=await Ca(e(a).selectedCases),p=Object.values(R.origins).map(w=>w.iteration).filter(w=>w!==void 0&&Number.isFinite(w));h=p.length>0?Math.min(...p):0}else e(a).startFrom==="custom"&&(h=e(a).iterMin);const k=await pi(e(a).selectedCases,e(a).selectedColumns,{xMin:h,includeHistory:c});f(n,""),k&&$r(k)}catch(h){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",h)}}function d(h){if(Yn(h),h.length===0){$r("");return}o(),l()}function y(h){if(Xr(h),h.length===0){$r("");return}l()}function b(h){zc(h),l()}function L(h){Oc(h),l()}let _=z(oe(tr("plot")));Ne(()=>{rr("plot",e(_))}),Ne(()=>{e(_)?mr("residualPlot",l,jn()):vt("residualPlot")});let T=!1;Ne(()=>{r.allCases.length>0&&!T&&(T=!0,Yn([...r.allCases]),o().then(()=>l()))});const F=_r(()=>{T&&o().then(()=>l())});vr(()=>{vt("residualPlot"),F()}),jt(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var k=jc(),R=G(k);{let C=U(jn);nr(R,{name:"residualPlot",get intervalMs(){return e(C)},onRefresh:l,get checked(){return e(_)},set checked(m){f(_,m,!0)}})}var p=S(R,2);{var w=C=>{$e(C,{variant:"primary",onclick:l,children:(m,N)=>{var M=Hc(),A=G(M);Le(A,{get icon(){return er}}),we(),u(m,M)},$$slots:{default:!0}})};Q(p,C=>{e(_)||C(w)})}u(c,k)},children:(c,k)=>{var R=Gc(),p=G(R);{var w=M=>{const A=K=>{var Z=Uc(),ae=x(Z);{let P=U(()=>!e(a).svgHtml);$e(ae,{variant:"secondary",size:"sm",onclick:()=>$n("plot-holder",xr("residuals",e(a).selectedCases)),get disabled(){return e(P)},children:(E,j)=>{var D=Vc(),v=G(D);Le(v,{get icon(){return pr}}),we(),u(E,D)},$$slots:{default:!0}})}g(Z),u(K,Z)};var V=Bc(),I=G(V);Sn(I,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:y,get startFrom(){return e(a).startFrom},onStartFromChange:b,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:L,get extraSlot(){return A}});var O=S(I,2),H=x(O);{let K=U(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Zt(H,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(K)}})}g(O),u(M,V)},C=M=>{var A=qc(),V=x(A);Zt(V,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),g(A),u(M,A)};Q(p,M=>{e(a).columns.length>0?M(w):M(C,-1)})}var m=S(p,2);{var N=M=>{var A=Kc(),V=x(A,!0);g(A),J(()=>re(V,e(n))),u(M,A)};Q(m,M=>{e(n)&&M(N)})}u(c,R)},$$slots:{actions:!0,default:!0}}),Ae()}function za(t){const{scope:r,getState:a,setState:n,setHasData:s,getAxis:i}=t;async function o(){const _=a();if(_.selectedCases.length)try{let T=await Jr(_.selectedCases,r);if(t.filterFiles&&(T=t.filterFiles(T)),n({files:T}),s(T.length>0),T.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!_.file||!T.includes(_.file))&&(n({file:T[0]}),await l())}catch(T){console.error(`Failed to load ${r} files:`,T)}}async function l(){const _=a();if(!(!_.selectedCases.length||!_.file))try{const T=await yi(_.selectedCases,[_.file]),F=t.filterColumns?t.filterColumns(T):T;t.onColumnsLoaded?t.onColumnsLoaded(T):n({columns:F});const h=a();if(h.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}h.selectedColumns.length===0&&n({selectedColumns:[h.columns[0]]})}catch(T){console.error(`Failed to load ${r} columns:`,T)}}async function d(){let _=a();if(_.selectedCases.length){if(await o(),_=a(),!_.file){n({positionText:"",svgHtml:""});return}if((_.columns.length===0||_.selectedColumns.length===0)&&(await l(),_=a(),!_.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let T;const F=a();if(F.startFrom==="restart"){const c=await Ca(F.selectedCases),k=i().toLowerCase(),R=k==="t"||k==="time"?"time":"iteration",p=Object.values(c.origins).map(w=>w[R]).filter(w=>w!==void 0&&Number.isFinite(w));T=p.length>0?Math.min(...p):void 0}else F.startFrom==="custom"&&(T=F.xMin);const h=await ki({cases:F.selectedCases,probes:[F.file],columns:F.selectedColumns,axis:i(),timeMin:typeof T=="number"?T:void 0,xMin:T,includeHistory:!0});h&&n({svgHtml:h})}catch(T){console.error(`Failed to load ${r} plot:`,T)}}}async function y(_){if(n({selectedCases:_}),_.length===0){n({svgHtml:""});return}await o(),r==="monitoring"&&await d()}function b(_){if(n({selectedColumns:_}),_.length===0){n({svgHtml:""});return}d()}async function L(_){n({file:_}),await l(),await d()}return{loadFiles:o,loadColumns:l,loadPlot:d,handleCasesChange:y,handleColumnsChange:b,handleFileChange:L}}function Oa(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let qt=z("time"),on=z(oe(Oa())),ln=z(oe({...Oa(),axis:""})),Xc=z(!0),Lr=z(!1),Fr=z(!1);function Yc(){return e(qt)}function Qc(t){f(qt,t,!0)}function Zc(){return e(Lr)}function cn(t){f(Lr,t,!0)}function Jc(){return e(Fr)}function un(t){f(Fr,t,!0)}function eu(){e(qt)==="time"&&!e(Lr)&&e(Fr)?f(qt,"profile"):e(qt)==="profile"&&!e(Fr)&&e(Lr)&&f(qt,"time")}function Qn(){return e(on)}function Yr(){return e(ln)}function kt(t){f(on,{...e(on),...t},!0)}function At(t){f(ln,{...e(ln),...t},!0)}function tu(){return e(Xc)}var ru=$("<!> Download as PNG",1),nu=$('<div class="self-end ml-auto"><!></div>'),au=$("<div> </div>"),su=$('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),ou=$('<!>  <!> <div class="flex justify-center"><!></div>',1),iu=$('<div class="flex justify-center"><!></div>');function lu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=U(Qn);const s=new Set(["time","t","iteration","iter"]),i=za({scope:"monitoring",getState:Qn,setState:kt,setHasData:cn,filterFiles:h=>h.filter(c=>{const k=c.replace(/\.csv$/i,"").toLowerCase();return k!=="coords"&&!k.includes("coordinates")}),filterColumns:h=>h.filter(c=>!s.has(c.toLowerCase())),onColumnsLoaded:h=>{const c=h.filter(k=>!s.has(k.toLowerCase()));kt({columns:c}),o()},getAxis:()=>"time"});async function o(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const h=[];for(const C of e(n).selectedColumns){const m=await wi(e(n).selectedCases[0],e(n).file,[C]);m.found&&h.push({col:C,x:m.x,y:m.y,z:m.z})}if(!h.length){kt({positionText:""});return}const c=C=>{let m=0;for(const N of C){if(N===void 0)continue;const M=String(N),A=M.indexOf(".");A>=0&&(m=Math.max(m,M.length-A-1))}return m},k=c(h.map(C=>C.x)),R=c(h.map(C=>C.y)),p=c(h.map(C=>C.z)),w=h.map(C=>{const m=[];return C.x!==void 0&&m.push(`x=${C.x.toFixed(k)}`),C.y!==void 0&&m.push(`y=${C.y.toFixed(R)}`),C.z!==void 0&&m.push(`z=${C.z.toFixed(p)}`),`Probe position [${C.col}] : ${m.join(" · ")}`});kt({positionText:w.join(`
`)})}catch{kt({positionText:""})}}function l(h){i.handleColumnsChange(h),h.length>0&&o()}let d=U(()=>e(n).files.map(h=>({value:h,label:h.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),y=!1;Ne(()=>{r.allCases.length>0&&!y&&(y=!0,kt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let b=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var L=be(),_=G(L);{var T=h=>{const c=M=>{Re(M,{text:"Quantity",children:(A,V)=>{lt(A,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},k=M=>{var A=nu(),V=x(A);{let I=U(()=>!e(n).svgHtml);$e(V,{variant:"secondary",size:"sm",onclick:()=>$n("probe-plot-holder",xr("probe",e(n).selectedCases)),get disabled(){return e(I)},children:(O,H)=>{var K=ru(),Z=G(K);Le(Z,{get icon(){return pr}}),we(),u(O,K)},$$slots:{default:!0}})}g(A),u(M,A)};var R=ou(),p=G(R);Sn(p,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:M=>{kt({startFrom:M}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:M=>{kt({xMin:M}),i.loadPlot()},get extraSlot(){return k}});var w=S(p,2);{var C=M=>{var A=su();Ke(A,21,()=>e(n).positionText.split(`
`).sort(),fn,(V,I)=>{var O=au(),H=x(O,!0);g(O),J(()=>re(H,e(I))),u(V,O)}),g(A),u(M,A)};Q(w,M=>{e(n).positionText&&M(C)})}var m=S(w,2),N=x(m);Zt(N,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(b)}}),g(m),u(h,R)},F=h=>{var c=iu(),k=x(c);Zt(k,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),g(c),u(h,c)};Q(_,h=>{e(n).files.length>0?h(T):h(F,-1)})}u(t,L),Ae()}var cu=$("<!> <!>",1),uu=$("<!> Download as PNG",1),du=$('<div class="self-end ml-auto"><!></div>'),fu=$('<!>  <div class="flex justify-center"><!></div>',1),vu=$('<div class="flex justify-center"><!></div>');function gu(t,r){Me(r,!0);let a=me(r,"onRefresh",15),n=U(Yr);const s=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const k=c.map(R=>R.toLowerCase());for(const R of s){const p=k.indexOf(R);if(p>=0)return c[p]}return c[0]??""}const o=za({scope:"profiles",getState:Yr,setState:At,setHasData:un,onColumnsLoaded:c=>{const k=e(n).axis||i(c),R=c.filter(p=>p!==k).toSorted((p,w)=>p.localeCompare(w));At({columns:R,axis:k,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:R.length?[R[0]]:[]})},getAxis:()=>Yr().axis});function l(c){const k=e(n).axis;At({axis:c});const p=[...e(n).columns,...k?[k]:[]].filter(w=>w!==c).toSorted((w,C)=>w.localeCompare(C));At({columns:p}),o.loadPlot()}let d=U(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),y=U(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,k)=>c.localeCompare(k)).map(c=>({value:c,label:c}))),b=!1;Ne(()=>{r.allCases.length>0&&!b&&(b=!0,At({selectedCases:[...r.allCases]}),o.loadFiles().then(()=>o.loadPlot()))}),Ne(()=>{a(o.loadPlot)});let L=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var _=be(),T=G(_);{var F=c=>{const k=N=>{var M=cu(),A=G(M);Re(A,{text:"Profile",children:(I,O)=>{lt(I,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return o.handleFileChange}})}});var V=S(A,2);Re(V,{text:"X axis",children:(I,O)=>{lt(I,{class:"w-[140px]",get options(){return e(y)},get value(){return e(n).axis},onchange:l})}}),u(N,M)},R=N=>{var M=du(),A=x(M);{let V=U(()=>!e(n).svgHtml);$e(A,{variant:"secondary",size:"sm",onclick:()=>$n("profile-plot-holder",xr("profile",e(n).selectedCases)),get disabled(){return e(V)},children:(I,O)=>{var H=uu(),K=G(H);Le(K,{get icon(){return pr}}),we(),u(I,H)},$$slots:{default:!0}})}g(M),u(N,M)};var p=fu(),w=G(p);Sn(w,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return o.handleCasesChange},get middleSlot(){return k},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return o.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:N=>{At({startFrom:N}),o.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:N=>{At({xMin:N}),o.loadPlot()},get extraSlot(){return R}});var C=S(w,2),m=x(C);Zt(m,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(L)}}),g(C),u(c,p)},h=c=>{var k=vu(),R=x(k);Zt(R,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),g(k),u(c,k)};Q(T,c=>{e(n).files.length>0?c(F):c(h,-1)})}u(t,_),Ae()}var hu=$('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),pu=$("<!> Refresh",1),mu=$("<!> <!>",1);function _u(t,r){Me(r,!0);let a=U(Yc),n=U(tu),s=U(Zc),i=U(Jc),o=z(oe(tr("probe")));Ne(()=>{rr("probe",e(o))});let l=z(void 0);function d(){var F;(F=e(l))==null||F()}async function y(){if(r.allCases.length){try{const h=(await Jr(r.allCases,"monitoring")).filter(c=>{const k=c.replace(/\.csv$/i,"").toLowerCase();return k!=="coords"&&!k.includes("coordinates")});cn(h.length>0)}catch{cn(!1)}try{const F=await Jr(r.allCases,"profiles");un(F.length>0)}catch{un(!1)}}}Ne(()=>{r.allCases.length>0&&y()}),_r(()=>{y(),d()}),Ne(()=>{e(s),e(i),eu()});function b(F){F==="time"&&!e(s)||F==="profile"&&!e(i)||Qc(F)}var L=be(),_=G(L);{var T=F=>{{const h=k=>{var R=hu(),p=S(x(R),2),w=x(p),C=S(w,2);g(p),g(R),J(()=>{Se(w,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(s)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),w.disabled=!e(s),ke(w,"title",e(s)?"":"No probe data available. Run a simulation first."),Se(C,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),C.disabled=!e(i),ke(C,"title",e(i)?"":"No profile data available. Run a simulation first.")}),le("click",w,()=>b("time")),le("click",C,()=>b("profile")),u(k,R)};jt(F,{wide:!0,titleSlot:h,tabs:h,actions:k=>{var R=mu(),p=G(R);{let m=U(()=>e(a)==="time"?"probePlot":"profilePlot"),N=U(tl);nr(p,{get name(){return e(m)},get intervalMs(){return e(N)},onRefresh:d,get checked(){return e(o)},set checked(M){f(o,M,!0)}})}var w=S(p,2);{var C=m=>{$e(m,{variant:"primary",onclick:d,children:(N,M)=>{var A=pu(),V=G(A);Le(V,{get icon(){return er}}),we(),u(N,A)},$$slots:{default:!0}})};Q(w,m=>{e(o)||m(C)})}u(k,R)},children:(k,R)=>{var p=be(),w=G(p);{var C=N=>{lu(N,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(M){f(l,M,!0)}})},m=N=>{gu(N,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(M){f(l,M,!0)}})};Q(w,N=>{e(a)==="time"?N(C):N(m,-1)})}u(k,p)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Q(_,F=>{e(n)&&F(T)})}u(t,L),Ae()}Ge(["click"]);var bu=$("<!> Refresh",1),xu=$("<!> <!>",1),yu=$("<!> Download as CSV",1),wu=$('<!> <div class="self-end ml-auto"><!></div>',1),ku=$("<th> </th>"),Cu=$('<td class="whitespace-nowrap"> </td>'),Su=$('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),$u=$('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),Pu=$('<p class="text-sm text-muted italic text-center py-8"><!></p>'),Eu=$("<!> <!>",1);function Ru(t,r){Me(r,!0);let a=z(oe([])),n=z(oe([])),s=z(!1),i=z(!1),o=z(oe(tr("perf")));Ne(()=>{rr("perf",e(o))});const l=5e3;let y=z(oe([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),b=U(()=>r.allCases.map(R=>({value:R,label:R}))),L=U(()=>e(n).length>0);async function _(){var R;if(e(a).length){f(i,!0);try{const p=await zn(e(a));(R=p.columns)!=null&&R.length&&f(y,p.columns,!0),f(n,p.records,!0),e(n).length>0&&f(s,!0)}catch(p){console.error("Failed to load perf:",p)}f(i,!1)}}function T(R){if(f(a,R,!0),R.length===0){f(n,[],!0);return}_()}function F(R,p){if(p==null||p==="")return"-";if(R==="text")return p;const w=Number(p);return Number.isFinite(w)?R==="int"?String(Math.round(w)):w.toFixed(3):p}async function h(){if(!e(n).length)return;const R=["case_id",...e(y).map(m=>m.key)],p=e(n).map(m=>[m.case_id,...e(y).map(N=>m[N.key]??"")].join(",")),w=[R.join(","),...p].join(`
`),C=xr("timing_snapshot",e(a),"csv");await Na(w,C)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),zn(r.allCases).then(R=>{var p;(p=R.columns)!=null&&p.length&&f(y,R.columns,!0),f(s,R.records.length>0),f(n,R.records,!0)}).catch(()=>{}))}),Ne(()=>{e(o)?mr("perf",_,l):vt("perf")});const k=_r(()=>{c&&_()});vr(()=>{vt("perf"),k()}),jt(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:p=>{var w=xu(),C=G(w);nr(C,{name:"perf",intervalMs:l,onRefresh:_,get checked(){return e(o)},set checked(M){f(o,M,!0)}});var m=S(C,2);{var N=M=>{$e(M,{variant:"primary",onclick:_,children:(A,V)=>{var I=bu(),O=G(I);Le(O,{get icon(){return er}}),we(),u(A,I)},$$slots:{default:!0}})};Q(m,M=>{e(o)||M(N)})}u(p,w)},children:(p,w)=>{var C=Eu(),m=G(C);{var N=I=>{Qt(I,{children:(O,H)=>{var K=wu(),Z=G(K);Re(Z,{text:"Cases",children:(E,j)=>{Wt(E,{class:"w-[160px]",get options(){return e(b)},get selected(){return e(a)},onchange:T,placeholder:"Select cases..."})}});var ae=S(Z,2),P=x(ae);{let E=U(()=>!e(L));$e(P,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(E)},children:(j,D)=>{var v=yu(),B=G(v);Le(B,{get icon(){return pr}}),we(),u(j,v)},$$slots:{default:!0}})}g(ae),u(O,K)}})};Q(m,I=>{e(s)&&I(N)})}var M=S(m,2);{var A=I=>{var O=$u(),H=x(O),K=x(H),Z=x(K),ae=S(x(Z));Ke(ae,17,()=>e(y),E=>E.key,(E,j)=>{var D=ku(),v=x(D,!0);g(D),J(()=>re(v,e(j).label)),u(E,D)}),g(Z),g(K);var P=S(K);Ke(P,21,()=>e(n),E=>E.case_id,(E,j)=>{var D=Su(),v=x(D),B=x(v,!0);g(v);var X=S(v);Ke(X,17,()=>e(y),ue=>ue.key,(ue,fe)=>{var W=Cu(),te=x(W,!0);g(W),J(se=>re(te,se),[()=>F(e(fe).kind,e(j)[e(fe).key])]),u(ue,W)}),g(D),J(()=>re(B,e(j).case_id)),u(E,D)}),g(P),g(H),g(O),u(I,O)},V=I=>{var O=Pu(),H=x(O);{var K=ae=>{var P=Ve("Select cases above to view timing information.");u(ae,P)},Z=ae=>{var P=Ve("No performance data available. Please run a simulation first.");u(ae,P)};Q(H,ae=>{e(s)?ae(K):ae(Z,-1)})}g(O),u(I,O)};Q(M,I=>{e(L)?I(A):I(V,-1)})}u(p,C)},$$slots:{actions:!0,default:!0}}),Ae()}const Nu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Ha(t){return t.replace(/[&<>"']/g,r=>Nu[r]??r)}var Mu=$("<div></div>"),Au=$('<pre class="code-box tail-pane"></pre>');function Tu(t,r){Me(r,!0);let a=z(void 0);function n(y){const b=Ha(y);if(!r.searchQuery.trim())return b;try{const L=new RegExp(`(${r.searchQuery})`,"gi");return b.replace(L,'<span class="tail-query-hit">$1</span>')}catch{return b}}function s(y){return y==="error"?"tail-sev-error":y==="warn"?"tail-sev-warn":y==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let o=z(!0);function l(){f(o,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(o)&&Pt().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=Au();Ke(d,21,()=>r.lines,y=>y.index,(y,b)=>{var L=Mu();Ir(L,()=>n(e(b).text),!0),g(L),J(_=>Se(L,1,`tail-line ${_??""} ${e(b).isNew?"tail-new":""}`),[()=>s(e(b).severity)]),u(y,L)}),g(d),nt(d,y=>f(a,y),()=>e(a)),tt("scroll",d,l),u(t,d),Ae()}const Lu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,Fu=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function Du(t){return Lu.test(t)?"error":Fu.test(t)?"warn":"none"}function Iu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var zu=$("<!> Refresh",1),Ou=$("<!> <!>",1),Hu=$('<input type="number" min="1" class="w-[70px]"/>'),ju=$('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Vu=$("<!> <!> <!> <!> <!>",1),Uu=Ht('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Bu=Ht('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),qu=Ht('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Ku=$("<!> Resume",1),Gu=$("<!> Pause",1),Wu=$('<span class="text-xs text-muted">Case not running</span>'),Xu=$('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Yu=$('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),Qu=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Zu=$("<!> <!> <!>",1);function Ju(t,r){Me(r,!0);const a=80;let n=z(""),s=z(""),i=z(!1),o=z(oe([])),l=z(a),d=z(oe([])),y=z(oe(new Set)),b=z(!1),L=z(oe(tr("tail")));Ne(()=>{rr("tail",e(L))});let _=z(!0),T=z("all"),F=z(""),h=z(""),c=z(void 0),k=U(()=>Cn(r.allCases)),R=U(()=>e(o).map(P=>{const E=P.split("/").pop()??P;return{value:P,label:E}})),p=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],w=U(()=>e(o).length>0),C=U(()=>yn().some(P=>{var E;return P.case_id===e(n)&&((E=P.status)==null?void 0:E.toUpperCase())==="RUNNING"}));const m={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function N(P){const E=P.split("/").pop()??P;return m[E]??99}async function M(){if(e(n))try{const j=(await bi(e(n))).filter(D=>{const v=D.split("/").pop()??D;return D.endsWith(".log")||D.endsWith("/summary")||v in m}).sort((D,v)=>N(D)-N(v));if(f(o,j,!0),j.length>0){const D=j[0];!e(s)||!j.includes(e(s))?(f(s,D,!0),f(i,!1)):!e(i)&&N(D)<N(e(s))&&f(s,D,!0)}e(o).length===0&&(f(s,""),f(d,[],!0))}catch(P){console.error("Failed to load tail files:",P),f(o,[],!0)}}async function A(P=!1){if(e(n)&&!(e(b)&&!P)&&(await M(),!!e(s)))try{const E=await _i(e(n),e(s),e(l));f(h,"");const j=E.split(`
`),D=j.length>0&&j[j.length-1]===""?j.slice(0,-1):j;if(e(d).length>0){const v=V(e(d),D),B=new Set;for(let X=v;X<D.length;X++)B.add(X);f(y,B,!0)}f(d,D,!0)}catch(E){f(h,"Failed to load log tail"),console.error("Failed to load tail:",E)}}function V(P,E){const j=Math.min(P.length,E.length);for(let D=0;D<j;D++){let v=!0;for(let B=0;B<Math.min(P.length-D,E.length);B++)if(P[D+B]!==E[B]){v=!1;break}if(v)return P.length-D}return 0}let I=U(()=>{let P=e(d).map((E,j)=>({text:E,index:j,severity:Du(E),isNew:e(y).has(j)}));if(e(T)!=="all"&&(P=P.filter(E=>Iu(E.severity,e(T)))),e(F).trim())try{const E=new RegExp(e(F),"i");P=P.filter(j=>E.test(j.text))}catch{}return P});function O(P){f(n,P,!0),f(s,""),f(i,!1),f(d,[],!0),M().then(()=>A(!0))}function H(P){f(s,P,!0),f(i,!0),f(d,[],!0),A(!0)}function K(){f(b,!e(b)),e(b)||A(!0)}function Z(P){(P.ctrlKey||P.metaKey)&&P.key==="f"&&e(c)&&(P.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),M().then(()=>A(!0)))}),Ne(()=>{e(L)&&!e(b)&&e(n)?mr("tail",()=>A(!1),Hn()):vt("tail")});const ae=_r(()=>{e(n)&&M().then(()=>A(!0))});vr(()=>{vt("tail"),ae()}),tt("keydown",it,Z),jt(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:E=>{var j=Ou(),D=G(j);{let X=U(Hn);nr(D,{name:"tail",get intervalMs(){return e(X)},onRefresh:()=>A(!1),get checked(){return e(L)},set checked(ue){f(L,ue,!0)}})}var v=S(D,2);{var B=X=>{$e(X,{variant:"primary",onclick:()=>A(!0),children:(ue,fe)=>{var W=zu(),te=G(W);Le(te,{get icon(){return er}}),we(),u(ue,W)},$$slots:{default:!0}})};Q(v,X=>{e(L)||X(B)})}u(E,j)},children:(E,j)=>{var D=Zu(),v=G(D);{var B=se=>{Qt(se,{children:(de,ce)=>{var ne=Vu(),xe=G(ne);Re(xe,{text:"Case",children:(Ie,Qe)=>{lt(Ie,{class:"w-[130px]",get options(){return e(k)},get value(){return e(n)},onchange:O})}});var he=S(xe,2);Re(he,{text:"File",children:(Ie,Qe)=>{lt(Ie,{class:"w-[150px]",get options(){return e(R)},get value(){return e(s)},onchange:H})}});var Ee=S(he,2);Re(Ee,{text:"Lines",children:(Ie,Qe)=>{var je=Hu();Ye(je),le("change",je,()=>A(!0)),et(je,()=>e(l),rt=>f(l,rt)),u(Ie,je)}});var pe=S(Ee,2);Re(pe,{text:"Filter",children:(Ie,Qe)=>{var je=ju();Ye(je),nt(je,rt=>f(c,rt),()=>e(c)),et(je,()=>e(F),rt=>f(F,rt)),u(Ie,je)}});var Fe=S(pe,2);Re(Fe,{text:"Severity",children:(Ie,Qe)=>{lt(Ie,{class:"w-[90px]",get options(){return p},get value(){return e(T)},onchange:je=>f(T,je,!0)})}}),u(de,ne)}})};Q(v,se=>{e(w)&&se(B)})}var X=S(v,2);{var ue=se=>{var de=Xu(),ce=G(de);Tu(ce,{get lines(){return e(I)},get searchQuery(){return e(F)},get autoScroll(){return e(_)}});var ne=S(ce,2),xe=x(ne),he=x(xe);{var Ee=Y=>{var q=Uu();u(Y,q)},pe=Y=>{var q=Bu();u(Y,q)},Fe=Y=>{var q=qu();u(Y,q)};Q(he,Y=>{e(b)?Y(Ee):e(C)?Y(pe,1):Y(Fe,-1)})}var Ie=S(he);g(xe);var Qe=S(xe,2);{var je=Y=>{$e(Y,{variant:"secondary",size:"sm",onclick:K,children:(q,ee)=>{var ie=be(),ve=G(ie);{var ye=_e=>{var Ce=Ku(),ze=G(Ce);Le(ze,{get icon(){return xa}}),we(),u(_e,Ce)},ge=_e=>{var Ce=Gu(),ze=G(Ce);Le(ze,{get icon(){return Zo}}),we(),u(_e,Ce)};Q(ve,_e=>{e(b)?_e(ye):_e(ge,-1)})}u(q,ie)},$$slots:{default:!0}})},rt=Y=>{var q=Wu();u(Y,q)};Q(Qe,Y=>{e(C)?Y(je):Y(rt,-1)})}var Te=S(Qe,2),Pe=x(Te);Ot(Pe,{get checked(){return e(_)},onchange:Y=>f(_,Y,!0),size:14,label:"Auto-scroll",labelFirst:!0}),g(Te),g(ne),J(()=>re(Ie,` ${e(I).length??""} / ${e(d).length??""}`)),u(se,de)},fe=se=>{var de=Yu();u(se,de)};Q(X,se=>{e(d).length>0?se(ue):se(fe,-1)})}var W=S(X,2);{var te=se=>{var de=Qu(),ce=x(de,!0);g(de),J(()=>re(ce,e(h))),u(se,de)};Q(W,se=>{e(h)&&se(te)})}u(E,D)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["change"]);function ed(t,r=3){var T,F;const a=t.split(`
`),n=[];let s=0,i=0,o=!1;for(const h of a){if(h.startsWith("===")||h.startsWith("---")||h.startsWith("+++"))continue;const c=h.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){s=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,o=!0;continue}if(o)if(h.startsWith("-"))s++,n.push({type:"del",leftNum:s,rightNum:null,leftContent:h.slice(1),rightContent:""});else if(h.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:h.slice(1)});else{s++,i++;const k=h.startsWith(" ")?h.slice(1):h;n.push({type:"equal",leftNum:s,rightNum:i,leftContent:k,rightContent:k})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const h=[];for(;d<n.length&&n[d].type==="del";)h.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const k=Math.max(h.length,c.length);for(let R=0;R<k;R++){const p=h[R],w=c[R];p&&w?l.push({type:"del",leftNum:p.leftNum,rightNum:w.rightNum,leftContent:p.leftContent,rightContent:w.rightContent}):p?l.push(p):w&&l.push(w)}}else l.push(n[d]),d++;const y=new Set;for(let h=0;h<l.length;h++)if(l[h].type!=="equal")for(let c=Math.max(0,h-r);c<=Math.min(l.length-1,h+r);c++)y.add(c);if(y.size===0)return[];const b=[];let L=-1,_=!1;for(let h=0;h<l.length;h++)if(y.has(h)){L>=0&&h-L>1&&b.push({kind:"separator",skipped:h-L-1});const c=l[h].type!=="equal",k=c&&!_;b.push({kind:"line",row:l[h],hunkStart:k}),_=c,L=h}if(L<l.length-1&&L>=0&&b.push({kind:"separator",skipped:l.length-1-L}),b.length>0&&b[0].kind==="line"){const h=((T=b[0].row)==null?void 0:T.leftNum)??0,c=((F=b[0].row)==null?void 0:F.rightNum)??0,k=Math.max(h,c)-1;k>0&&b.unshift({kind:"separator",skipped:k})}return b}var td=$('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),rd=$('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),nd=$('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),ad=$('<span class="text-xs text-muted">No matches</span>'),sd=$('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),od=$('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),id=$('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),ld=$('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function cd(t,r){Me(r,!0);let a=me(r,"loading",3,!1),n=z(void 0),s=U(()=>ed(r.diffText)),i=U(()=>{const Y=[];return e(s).forEach((q,ee)=>{q.hunkStart&&Y.push(ee)}),Y}),o=U(()=>e(i).length>0),l=U(()=>{var q;const Y=new Array(e(s).length).fill(-1);for(let ee=0;ee<e(i).length;ee++){let ie=e(i)[ee];for(;ie<e(s).length&&e(s)[ie].kind==="line"&&((q=e(s)[ie].row)==null?void 0:q.type)!=="equal";)Y[ie]=ee,ie++}return Y}),d=z(-1),y="";Ne(()=>{r.diffText!==y&&(y=r.diffText,f(d,-1))});let b=U(()=>{if(!r.search.trim())return[];try{const Y=new RegExp(r.search,"i"),q=[];return e(s).forEach((ee,ie)=>{ee.kind==="line"&&ee.row&&(Y.test(ee.row.leftContent)||Y.test(ee.row.rightContent))&&q.push(ie)}),q}catch{return[]}}),L=z(-1),_="";Ne(()=>{r.search!==_&&(_=r.search,f(L,e(b).length>0?0:-1,!0))});async function T(Y){var ie;f(L,Y,!0),await Pt();const q=e(b)[Y],ee=(ie=e(p))==null?void 0:ie.querySelector(`[data-item-idx="${q}"]`);if(ee&&e(p)&&e(w)){const ve=e(p).getBoundingClientRect(),ge=ee.getBoundingClientRect().top-ve.top+e(p).scrollTop-e(p).clientHeight/3;m=!0,e(p).scrollTop=ge,e(w).scrollTop=ge,requestAnimationFrame(()=>{m=!1})}}function F(){e(L)>0&&T(e(L)-1)}function h(){e(L)<0&&e(b).length>0?T(0):e(L)<e(b).length-1&&T(e(L)+1)}function c(Y,q){const ee=Ha(Y);if(!r.search.trim())return ee;try{const ie=new RegExp(`(${r.search})`,"gi"),ve=q?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return ee.replace(ie,`<span class="${ve}">$1</span>`)}catch{return ee}}function k(Y,q){return Y==="equal"?"":Y==="del"&&q==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":Y==="del"&&q==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":Y==="add"&&q==="left"?"bg-edf-gris-clair":Y==="add"&&q==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function R(Y,q){return Y==="del"&&q==="left"?"rgb(251,237,233)":Y==="del"&&q==="right"?"rgb(238,247,236)":Y==="add"&&q==="left"?"var(--color-edf-gris-clair)":Y==="add"&&q==="right"?"rgb(238,247,236)":"white"}let p=z(void 0),w=z(void 0),C=!1,m=!1;function N(Y){C||m||!e(p)||!e(w)||(C=!0,Y==="left"?(e(w).scrollTop=e(p).scrollTop,e(w).scrollLeft=e(p).scrollLeft):(e(p).scrollTop=e(w).scrollTop,e(p).scrollLeft=e(w).scrollLeft),requestAnimationFrame(()=>{C=!1}))}async function M(Y){var ee;f(d,Y,!0),await Pt();const q=(ee=e(p))==null?void 0:ee.querySelector(`[data-hunk-start="${Y}"]`);if(q&&e(p)&&e(w)){m=!0;const ie=e(p).getBoundingClientRect(),ye=q.getBoundingClientRect().top-ie.top+e(p).scrollTop-e(p).clientHeight/3;e(p).scrollTop=ye,e(w).scrollTop=ye,requestAnimationFrame(()=>{m=!1})}}function A(){e(d)>0&&M(e(d)-1)}function V(){e(d)<0?M(0):e(d)<e(i).length-1&&M(e(d)+1)}function I(Y){const q=e(l)[Y];q>=0&&f(d,q,!0)}function O(Y){Y.target instanceof HTMLInputElement||(Y.key==="n"&&!Y.shiftKey?(Y.preventDefault(),V()):Y.key==="N"||Y.key==="n"&&Y.shiftKey?(Y.preventDefault(),A()):Y.key==="j"?(Y.preventDefault(),h()):(Y.key==="J"||Y.key==="j"&&Y.shiftKey)&&(Y.preventDefault(),F()))}var H=ld();{const Y=(q,ee=Cs)=>{var ie=be(),ve=G(ie);Ke(ve,17,()=>e(s),fn,(ye,ge,_e)=>{const Ce=U(()=>e(i).indexOf(_e)),ze=U(()=>e(l)[_e]>=0&&e(l)[_e]===e(d)),We=U(()=>{var at,qe;return ee()==="left"?(at=e(ge).row)==null?void 0:at.leftNum:(qe=e(ge).row)==null?void 0:qe.rightNum}),gt=U(()=>{var at,qe;return ee()==="left"?((at=e(ge).row)==null?void 0:at.leftContent)??"":((qe=e(ge).row)==null?void 0:qe.rightContent)??""});var Vt=be(),jr=G(Vt);{var Je=at=>{var qe=td(),Nt=S(x(qe),2),Vr=x(Nt);g(Nt),g(qe),J(()=>re(Vr,`... ${e(ge).skipped??""} lines hidden ...`)),u(at,qe)},ut=at=>{var qe=rd(),Nt=x(qe),Vr=x(Nt,!0);g(Nt);var Pn=S(Nt,2);Ir(Pn,()=>c(e(gt),e(L)>=0&&e(b)[e(L)]===_e),!0),g(Pn),g(qe),J((yt,Mt,yr,ja,Va)=>{Se(qe,1,`flex w-full ${yt??""} ${Mt??""}`),Ze(qe,e(ze)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),ke(qe,"role",yr),ke(qe,"tabindex",ja),ke(qe,"data-hunk-start",ee()==="left"&&e(Ce)>=0?e(Ce):void 0),ke(qe,"data-item-idx",ee()==="left"?_e:void 0),Ze(Nt,`background: ${Va??""}; color: ${e(ze)?"white":"var(--color-muted)"};`),re(Vr,e(We)??"")},[()=>k(e(ge).row.type,ee()),()=>e(ge).row.type!=="equal"||e(b).includes(_e)?"cursor-pointer":"",()=>e(ge).row.type!=="equal"||e(b).includes(_e)?"button":void 0,()=>e(ge).row.type!=="equal"||e(b).includes(_e)?0:void 0,()=>e(ze)?"rgb(16,87,200)":R(e(ge).row.type,ee())]),le("click",qe,()=>{var Mt;((Mt=e(ge).row)==null?void 0:Mt.type)!=="equal"&&I(_e);const yt=e(b).indexOf(_e);yt>=0&&f(L,yt,!0)}),le("keydown",qe,yt=>{var Mt;if(yt.key==="Enter"||yt.key===" "){yt.preventDefault(),((Mt=e(ge).row)==null?void 0:Mt.type)!=="equal"&&I(_e);const yr=e(b).indexOf(_e);yr>=0&&f(L,yr,!0)}}),u(at,qe)};Q(jr,at=>{e(ge).kind==="separator"?at(Je):e(ge).row&&at(ut,1)})}u(ye,Vt)}),u(q,ie)};var K=x(H),Z=x(K),ae=x(Z),P=x(ae,!0);g(ae);var E=S(ae,2),j=x(E,!0);g(E),g(Z);var D=S(Z,2),v=x(D),B=x(v,!0);g(v);var X=S(v,2),ue=x(X,!0);g(X),g(D),g(K);var fe=S(K,2),W=x(fe),te=x(W);Ye(te);var se=S(te,2);{var de=q=>{var ee=nd(),ie=G(ee);{let _e=U(()=>e(L)<=0);$e(ie,{variant:"secondary",size:"sm",onclick:F,get disabled(){return e(_e)},children:(Ce,ze)=>{we();var We=Ve("Prev");u(Ce,We)},$$slots:{default:!0}})}var ve=S(ie,2),ye=x(ve);g(ve);var ge=S(ve,2);{let _e=U(()=>e(L)>=e(b).length-1);$e(ge,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(_e)},children:(Ce,ze)=>{we();var We=Ve("Next");u(Ce,We)},$$slots:{default:!0}})}J(()=>re(ye,`${e(L)>=0?e(L)+1:"–"} / ${e(b).length??""} occurrence${e(b).length!==1?"s":""}`)),u(q,ee)},ce=U(()=>r.search.trim()&&e(b).length>0),ne=q=>{var ee=ad();u(q,ee)},xe=U(()=>r.search.trim());Q(se,q=>{e(ce)?q(de):e(xe)&&q(ne,1)})}g(W);var he=S(W,2),Ee=x(he);{let q=U(()=>e(i).length===0||e(d)<=0);$e(Ee,{variant:"secondary",size:"sm",onclick:A,get disabled(){return e(q)},children:(ee,ie)=>{we();var ve=Ve("Prev");u(ee,ve)},$$slots:{default:!0}})}var pe=S(Ee,2),Fe=x(pe);g(pe);var Ie=S(pe,2);{let q=U(()=>e(i).length===0||e(d)>=e(i).length-1);$e(Ie,{variant:"secondary",size:"sm",onclick:V,get disabled(){return e(q)},children:(ee,ie)=>{we();var ve=Ve("Next");u(ee,ve)},$$slots:{default:!0}})}g(he),g(fe);var Qe=S(fe,2);{var je=q=>{var ee=sd(),ie=x(ee),ve=x(ie),ye=x(ve);Y(ye,()=>"left"),g(ve),g(ie),nt(ie,ze=>f(p,ze),()=>e(p));var ge=S(ie,2),_e=x(ge),Ce=x(_e);Y(Ce,()=>"right"),g(_e),g(ge),nt(ge,ze=>f(w,ze),()=>e(w)),g(ee),tt("scroll",ie,()=>N("left")),tt("scroll",ge,()=>N("right")),u(q,ee)},rt=q=>{var ee=od();u(q,ee)};Q(Qe,q=>{e(o)?q(je):q(rt,-1)})}var Te=S(Qe,2);{var Pe=q=>{var ee=id();u(q,ee)};Q(Te,q=>{a()&&q(Pe)})}g(H),nt(H,q=>f(n,q),()=>e(n)),J(()=>{re(P,r.leftLabel),re(j,r.kind),re(B,r.rightLabel),re(ue,r.kind),vn(te,r.search),re(Fe,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),le("input",te,q=>r.onSearchChange(q.target.value)),le("keydown",te,q=>{q.key==="Enter"&&(q.preventDefault(),h())})}le("keydown",H,O),u(t,H),Ae()}Ge(["keydown","click","input"]);var ud=$("<!> <!> <!>",1),dd=$('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),fd=$('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),vd=$('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),gd=$('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),hd=$('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),pd=$('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),md=$('<p class="text-sm text-red-600 text-center py-8"> </p>'),_d=$('<p class="text-sm text-muted text-center py-8">Loading...</p>'),bd=$("<!> <!> <!>",1),xd=$("<!> <!>",1);function yd(t,r){Me(r,!0);let a=z(""),n=z(""),s=z(""),i=z(""),o=z(""),l=z(!1),d=z(!1),y=z(""),b=U(()=>r.allCases.map(m=>({value:m,label:m})));const L=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let _=U(()=>{var m;return((m=Ft())==null?void 0:m.compare_kinds)??L});Ne(()=>{var m;e(_).some(N=>N.value===e(s))||f(s,((m=e(_)[0])==null?void 0:m.value)??"",!0)});let T=z(!1),F=U(()=>e(a)&&e(n)&&e(a)!==e(n));function h(){const m=e(a);f(a,e(n),!0),f(n,m,!0)}async function c(){if(e(F)){f(l,!0),f(y,"");try{const m=await Ci({cases:[e(a),e(n)],base:e(a),kind:e(s)});f(o,m,!0),f(d,!0)}catch(m){console.error("Failed to load diff:",m),f(o,""),f(d,!1);const N=m instanceof Error?m.message:String(m);f(y,N.includes("404")?`File "${e(s)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(s)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(o,""),f(d,!0))});let k=!1;Ne(()=>{r.allCases.length>=2&&!k?(k=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!k&&(k=!0,f(a,r.allCases[0],!0))});let R=U(wn),p=U(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(R).length===0)return[];const m=yn(),N=m.find(A=>A.case_id===e(a)),M=m.find(A=>A.case_id===e(n));return!N&&!M?[]:e(R).map(A=>{var O,H;const V=((O=N==null?void 0:N.doe)==null?void 0:O[A])!=null&&String(N.doe[A])!==""?String(N.doe[A]):"—",I=((H=M==null?void 0:M.doe)==null?void 0:H[A])!=null&&String(M.doe[A])!==""?String(M.doe[A]):"—";return{param:A,left:V,right:I,differs:V!==I}})}),w=U(()=>e(T)?e(p):e(p).filter(m=>m.differs)),C=U(()=>e(p).filter(m=>m.differs).length);jt(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(m,N)=>{var M=xd(),A=G(M);Qt(A,{children:(K,Z)=>{var ae=ud(),P=G(ae);Re(P,{text:"First case",children:(D,v)=>{lt(D,{class:"w-32.5",get options(){return e(b)},get value(){return e(a)},onchange:B=>f(a,B,!0),placeholder:"Select..."})}});var E=S(P,2);{let D=U(()=>!e(a)&&!e(n));$e(E,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(D)},children:(v,B)=>{Le(v,{get icon(){return Uo}})},$$slots:{default:!0}})}var j=S(E,2);Re(j,{text:"Second case",children:(D,v)=>{lt(D,{class:"w-32.5",get options(){return e(b)},get value(){return e(n)},onchange:B=>f(n,B,!0),placeholder:"Select..."})}}),u(K,ae)}});var V=S(A,2);{var I=K=>{var Z=dd();u(K,Z)},O=K=>{var Z=fd();u(K,Z)},H=K=>{var Z=bd(),ae=G(Z);{var P=X=>{var ue=pd(),fe=G(ue),W=x(fe),te=x(W);g(W);var se=S(W,2),de=x(se,!0);g(se),g(fe);var ce=S(fe,2);{var ne=he=>{var Ee=gd(),pe=x(Ee),Fe=x(pe),Ie=x(Fe),Qe=x(Ie),je=x(Qe,!0);g(Qe);var rt=S(Qe,2),Te=x(rt,!0);g(rt),g(Ie),g(Fe);var Pe=S(Fe);Ke(Pe,21,()=>e(w),Y=>Y.param,(Y,q)=>{var ee=vd(),ie=x(ee),ve=x(ie,!0);g(ie);var ye=S(ie),ge=x(ye,!0);g(ye);var _e=S(ye),Ce=x(_e,!0);g(_e),g(ee),J(()=>{Se(ie,1,dt(e(q).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),re(ve,e(q).left),re(ge,e(q).param),Se(_e,1,dt(e(q).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),re(Ce,e(q).right)}),u(Y,ee)}),g(Pe),g(pe),g(Ee),J(()=>{re(je,e(a)),re(Te,e(n))}),u(he,Ee)},xe=he=>{var Ee=hd();u(he,Ee)};Q(ce,he=>{e(w).length>0?he(ne):he(xe,-1)})}J(()=>{re(te,`${e(C)??""} difference${e(C)!==1?"s":""} out of ${e(p).length??""}
          parameters`),re(de,e(T)?"Show differences only":"Show all parameters")}),le("click",se,()=>f(T,!e(T))),u(X,ue)};Q(ae,X=>{e(p).length>0&&X(P)})}var E=S(ae,2);Qt(E,{children:(X,ue)=>{Re(X,{text:"File",children:(fe,W)=>{lt(fe,{class:"w-37.5",get options(){return e(_)},get value(){return e(s)},onchange:te=>f(s,te,!0)})}})}});var j=S(E,2);{var D=X=>{var ue=md(),fe=x(ue,!0);g(ue),J(()=>re(fe,e(y))),u(X,ue)},v=X=>{cd(X,{get diffText(){return e(o)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(s)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:ue=>f(i,ue,!0)})},B=X=>{var ue=_d();u(X,ue)};Q(j,X=>{e(y)?X(D):e(d)?X(v,1):e(l)&&X(B,2)})}u(K,Z)};Q(V,K=>{e(a)&&e(n)&&e(a)===e(n)?K(I):!e(a)||!e(n)?K(O,1):K(H,-1)})}u(m,M)},$$slots:{default:!0}}),Ae()}Ge(["click"]);var wd=$("<!> Refresh",1),kd=$("<!> <!>",1),Cd=$('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),Sd=$('<input type="number" min="0" max="50" style="width: 70px;"/>'),$d=$("<!> Download as CSV",1),Pd=$('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),Ed=$("&nbsp;<!>",1),Rd=$("<button> <!></button>"),Nd=$('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),Md=$('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),Ad=$('<span class="error-badge"> </span>'),Td=$('<span class="error-badge error-badge-new">NEW</span>'),Ld=$('<div class="error-line"></div>'),Fd=$('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),Dd=$('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Id=$('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),zd=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Od=$("<!> <!> <div><!> <!></div> <!> <!>",1);function Hd(t,r){Me(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let s=z(oe([])),i=z(oe([...n])),o=!1;Ne(()=>{var te;const W=(te=Ft())==null?void 0:te.error_files;W!=null&&W.length&&!o&&f(i,[...W],!0)});let l=z("all"),d=z(""),y=z(a),b=z(!1),L=z(""),_=z(oe(tr("errors")));Ne(()=>{rr("errors",e(_))});let T=z(oe([])),F=z(oe(new Set));function h(W){return W.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(W){const te=W.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${W.case_id}|${W.file}|${W.severity}|${h(te)}`}function k(W){const te=new Map;for(const se of W){const de=c(se),ce=te.get(de);ce?ce.count++:te.set(de,{...se,count:1,fingerprint:de,isNew:!e(F).has(de)})}return Array.from(te.values())}async function R(){if(!(!e(s).length||!e(i).length)){f(b,!0);try{const W=await mi({cases:e(s),files:e(i),context:e(y),sev:e(l)==="all"?"":e(l),q:e(d)});f(L,"");const te=k(W.items);f(T,W.items,!0);const se=new Set(te.map(de=>de.fingerprint));f(F,se,!0),f(p,te,!0)}catch(W){f(L,"Failed to load errors"),console.error("Failed to load errors:",W)}finally{f(b,!1)}}}let p=z(oe([])),w=null;function C(){w&&clearTimeout(w),w=setTimeout(R,250)}function m(W){return W==="error"?"error-sev-error":W==="warn"?"error-sev-warn":"error-sev-info"}let N=U(()=>Cn(r.allCases));const M=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let A=U(()=>{var W;return(((W=Ft())==null?void 0:W.error_files)??M).map(te=>({value:te,label:te}))}),V=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function I(W){if(f(s,W,!0),W.length===0){f(p,[],!0),f(T,[],!0);return}R()}function O(W){if(o=!0,f(i,W,!0),W.length===0){f(p,[],!0),f(T,[],!0);return}R()}function H(W){f(l,W,!0),R()}function K(){R()}let Z=!1;Ne(()=>{r.allCases.length>0&&!Z&&(Z=!0,f(s,[...r.allCases],!0),R())}),Ne(()=>{e(_)?mr("errors",R,Vn()):vt("errors")});const ae=_r(()=>{Z&&R()});vr(()=>{vt("errors"),ae()});let P=z(oe(new Set));function E(W){const te=new Set(e(P));te.has(W)?te.delete(W):te.add(W),f(P,te,!0)}let j=z("severity"),D=z("desc");const v={info:0,warn:1,error:2};let B=U(()=>{const W=[...e(p)];return W.sort((te,se)=>{let de=0;return e(j)==="severity"?de=(v[te.severity]??9)-(v[se.severity]??9):e(j)==="count"?de=te.count-se.count:de=te[e(j)].localeCompare(se[e(j)]),e(D)==="asc"?de:-de}),W});const X={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function ue(W){e(j)===W?f(D,e(D)==="asc"?"desc":"asc",!0):(f(j,W,!0),f(D,X[W],!0))}function fe(){if(!e(p).length)return;const W=["case_id","file","severity","count","is_new","line_text"],te=e(B).map(ce=>[ce.case_id,ce.file,ce.severity,ce.count,ce.isNew?"yes":"no",`"${ce.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),se=[W.join(","),...te].join(`
`),de=xr("errors",e(s),"csv");Na(se,de)}jt(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:te=>{var se=kd(),de=G(se);{let xe=U(Vn);nr(de,{name:"errors",get intervalMs(){return e(xe)},onRefresh:R,get checked(){return e(_)},set checked(he){f(_,he,!0)}})}var ce=S(de,2);{var ne=xe=>{$e(xe,{variant:"primary",onclick:R,children:(he,Ee)=>{var pe=wd(),Fe=G(pe);Le(Fe,{get icon(){return er}}),we(),u(he,pe)},$$slots:{default:!0}})};Q(ce,xe=>{e(_)||xe(ne)})}u(te,se)},children:(te,se)=>{var de=Od(),ce=G(de);Qt(ce,{children:(Te,Pe)=>{var Y=Pd(),q=G(Y);Re(q,{text:"Cases",children:(Ce,ze)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(N)},get selected(){return e(s)},onchange:I,placeholder:"Select cases..."})}});var ee=S(q,2);Re(ee,{text:"Files",children:(Ce,ze)=>{Wt(Ce,{class:"w-[160px]",get options(){return e(A)},get selected(){return e(i)},onchange:O,placeholder:"Select files..."})}});var ie=S(ee,2);Re(ie,{text:"Severity",children:(Ce,ze)=>{lt(Ce,{class:"w-[90px]",get options(){return V},get value(){return e(l)},onchange:H})}});var ve=S(ie,2);Re(ve,{text:"Search",children:(Ce,ze)=>{var We=Cd();Ye(We),le("input",We,C),et(We,()=>e(d),gt=>f(d,gt)),u(Ce,We)}});var ye=S(ve,2);Re(ye,{text:"Context",children:(Ce,ze)=>{var We=Sd();Ye(We),le("change",We,K),et(We,()=>e(y),gt=>f(y,gt)),u(Ce,We)}});var ge=S(ye,2),_e=x(ge);{let Ce=U(()=>e(p).length===0);$e(_e,{variant:"secondary",size:"sm",onclick:fe,get disabled(){return e(Ce)},children:(ze,We)=>{var gt=$d(),Vt=G(gt);Le(Vt,{get icon(){return pr}}),we(),u(ze,gt)},$$slots:{default:!0}})}g(ge),u(Te,Y)}});var ne=S(ce,2);{var xe=Te=>{var Pe=Nd(),Y=S(x(Pe),2);Ke(Y,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],q=>q.key,(q,ee)=>{var ie=Rd(),ve=x(ie,!0),ye=S(ve);{var ge=_e=>{var Ce=Ed(),ze=S(G(Ce));{let We=U(()=>e(D)==="asc"?Bo:Vo);Le(ze,{get icon(){return e(We)},size:12})}u(_e,Ce)};Q(ye,_e=>{e(j)===ee.key&&_e(ge)})}g(ie),J(()=>{Se(ie,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(j)===ee.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),re(ve,ee.label)}),le("click",ie,()=>ue(ee.key)),u(q,ie)}),g(Pe),u(Te,Pe)};Q(ne,Te=>{e(B).length>0&&Te(xe)})}var he=S(ne,2),Ee=x(he);{var pe=Te=>{var Pe=Md();u(Te,Pe)};Q(Ee,Te=>{e(B).length===0&&Te(pe)})}var Fe=S(Ee,2);Ke(Fe,17,()=>e(B),Te=>Te.fingerprint,(Te,Pe)=>{var Y=Fd(),q=x(Y),ee=x(q),ie=x(ee);{let Je=U(()=>e(P).has(e(Pe).fingerprint)?pn:qo);Le(ie,{get icon(){return e(Je)},size:14})}g(ee);var ve=S(ee,2),ye=x(ve);g(ve);var ge=S(ve,2),_e=x(ge);{var Ce=Je=>{var ut=Ad(),at=x(ut);g(ut),J(()=>re(at,`${e(Pe).count??""}x`)),u(Je,ut)};Q(_e,Je=>{e(Pe).count>1&&Je(Ce)})}var ze=S(_e,2);{var We=Je=>{var ut=Td();u(Je,ut)};Q(ze,Je=>{e(Pe).isNew&&Je(We)})}g(ge),g(q);var gt=S(q,2);{var Vt=Je=>{var ut=Ld();Ir(ut,()=>e(Pe).line_html,!0),g(ut),u(Je,ut)},jr=U(()=>e(P).has(e(Pe).fingerprint));Q(gt,Je=>{e(jr)&&Je(Vt)})}g(Y),J(Je=>{Se(Y,1,`error-item ${Je??""}`),re(ye,`${e(Pe).case_id??""} / ${e(Pe).file??""} : ${e(Pe).severity??""}`)},[()=>m(e(Pe).severity)]),le("click",q,()=>E(e(Pe).fingerprint)),u(Te,Y)}),g(he);var Ie=S(he,2);{var Qe=Te=>{var Pe=Id(),Y=x(Pe),q=x(Y);g(Y);var ee=S(Y,2);{var ie=ye=>{var ge=Dd(),_e=x(ge);g(ge),J(Ce=>re(_e,`${Ce??""} new`),[()=>e(p).filter(Ce=>Ce.isNew).length]),u(ye,ge)},ve=U(()=>e(p).some(ye=>ye.isNew));Q(ee,ye=>{e(ve)&&ye(ie)})}g(Pe),J(()=>re(q,`${e(p).length??""} unique / ${e(T).length??""} total`)),u(Te,Pe)};Q(Ie,Te=>{e(B).length>0&&Te(Qe)})}var je=S(Ie,2);{var rt=Te=>{var Pe=zd(),Y=x(Pe,!0);g(Pe),J(()=>re(Y,e(L))),u(Te,Pe)};Q(je,Te=>{e(L)&&Te(rt)})}J(()=>Se(he,1,`error-list ${e(b)?"opacity-50 pointer-events-none":""}`)),u(te,de)},$$slots:{actions:!0,default:!0}}),Ae()}Ge(["input","change","click"]);var jd=$('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Yd(t,r){Me(r,!0);let a=z(oe({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=z(oe([])),s=z(null);const i=v=>e(s)===null||e(s).includes(v);async function o(v){var ue;const B=`/favicon-${v}.svg`;try{const fe=await fetch(B);if(!fe.ok||!((ue=fe.headers.get("content-type"))!=null&&ue.includes("svg")))return}catch{return}const X=document.querySelector('link[rel="icon"]');X&&(X.href=B)}async function l(){try{const v=await vi();Fl(v.rows),Dl(v.doe_columns),f(n,v.rows.map(B=>B.case_id),!0),f(a,Xl(Ea(),yn()),!0)}catch(v){console.error("Failed to load status:",v)}}Zn(()=>{l(),gi().then(v=>{_o(v),f(s,v.panels,!0),o(v.solver)}).catch(()=>{})});var d=jd(),y=G(d);Oi(y,{});var b=S(y,2);Bi(b,{});var L=S(b,2);gl(L,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var _=S(L,2),T=x(_);{var F=v=>{$c(v,{onRefresh:l})},h=U(()=>i("status"));Q(T,v=>{e(h)&&v(F)})}var c=S(T,2);{var k=v=>{Wc(v,{get allCases(){return e(n)}})},R=U(()=>i("residuals"));Q(c,v=>{e(R)&&v(k)})}var p=S(c,2);{var w=v=>{_u(v,{get allCases(){return e(n)}})},C=U(()=>i("probes"));Q(p,v=>{e(C)&&v(w)})}var m=S(p,2);{var N=v=>{Ru(v,{get allCases(){return e(n)}})},M=U(()=>i("performance"));Q(m,v=>{e(M)&&v(N)})}var A=S(m,2);{var V=v=>{yd(v,{get allCases(){return e(n)}})},I=U(()=>i("compare"));Q(A,v=>{e(I)&&v(V)})}var O=S(A,2);{var H=v=>{Ju(v,{get allCases(){return e(n)}})},K=U(()=>i("tail"));Q(O,v=>{e(K)&&v(H)})}var Z=S(O,2);{var ae=v=>{Hd(v,{get allCases(){return e(n)}})},P=U(()=>i("errors"));Q(Z,v=>{e(P)&&v(ae)})}g(_);var E=S(_,2),j=S(x(E),2),D=x(j);g(j),g(E),J(()=>ke(D,"src",hl)),u(t,d),Ae()}export{Yd as component};
