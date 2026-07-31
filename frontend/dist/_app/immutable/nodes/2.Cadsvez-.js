import{b as Sr,a as u,f as P,c as _e,t as Be,d as Ot}from"../chunks/C14P8jaG.js";import{o as Yn,a as dr}from"../chunks/Cz6m6K8p.js";import{h as De,L as $t,G as Lt,c as $r,J as Kt,b as Qn,o as e,N as Ha,ag as ja,O as $n,P as zt,f as _t,ay as Zn,aF as Va,ao as Pn,e as mt,a as cr,aM as Ua,s as Ba,a5 as qa,aN as Jn,aE as cn,aO as Ka,a7 as En,aP as Ga,aQ as Wa,aI as Xa,aR as ht,aS as ea,a1 as Ya,r as ta,p as ra,aT as jr,ae as na,aU as Qa,aV as Za,aC as Ja,m as es,d as Er,az as aa,y as Q,F as sa,aW as ts,aG as rs,aA as ns,D as oa,aX as ia,aY as as,aZ as ss,E as os,aw as la,S as Tr,k as Rr,a_ as ca,a$ as is,b0 as ls,b1 as ua,b2 as cs,b3 as us,b4 as fr,b5 as ds,b6 as fs,b7 as vs,b8 as gs,b9 as hs,ba as ps,bb as ms,aJ as Pt,U as _s,aK as I,_ as oe,$ as f,A as C,B as p,x as Ae,g as B,z as Le,C as E,j as Ne,ap as ke,aL as j,bc as bs,q as Vt,bd as xs,be as it,bf as ys}from"../chunks/VJhVTb1A.js";import{p as he,i as Y,b as nt,c as ws,l as Ve,s as qe}from"../chunks/zf4GFcxs.js";import{i as ks,a as Cs,d as ie,b as We,c as Ss,n as $s,e as Ps,s as ee,f as rt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Es}from"../chunks/DmjnTBOd.js";import{B as Rs}from"../chunks/U5yjBaoU.js";function un(t,r){return r}function Ns(t,r,a){for(var n=[],s=r.length,i,o=r.length,l=0;l<s;l++){let T=r[l];ra(T,()=>{if(i){if(i.pending.delete(T),i.done.add(T),i.pending.size===0){var m=t.outrogroups;Xr(t,cn(i.done)),m.delete(i),m.size===0&&(t.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&a!==null;if(d){var x=a,w=x.parentNode;Ja(w),w.append(x),t.items.clear()}Xr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Xr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const o of t.pending.values())for(const l of o)n.add(t.items.get(l).e)}for(var s=0;s<r.length;s++){var i=r[s];if(n!=null&&n.has(i)){i.f|=ht;const o=document.createDocumentFragment();es(i,o)}else Er(r[s],a)}}var Rn;function Ze(t,r,a,n,s,i=null){var o=t,l=new Map,d=(r&ea)!==0;if(d){var x=t;o=De?$t(Lt(x)):x.appendChild($r())}De&&Kt();var w=null,T=qa(()=>{var g=a();return Jn(g)?g:g==null?[]:cn(g)}),m,A=new Map,F=!0;function v(g){(R.effect.f&Ya)===0&&(R.pending.delete(g),R.fallback=w,Ms(R,m,o,r,n),w!==null&&(m.length===0?(w.f&ht)===0?ta(w):(w.f^=ht,ir(w,null,o)):ra(w,()=>{w=null})))}function c(g){R.pending.delete(g)}var y=Qn(()=>{m=e(T);var g=m.length;let b=!1;if(De){var $=Ha(o)===ja;$!==(g===0)&&(o=$n(),$t(o),zt(!1),b=!0)}for(var _=new Set,L=mt,z=Ba(),D=0;D<g;D+=1){De&&_t.nodeType===Zn&&_t.data===Va&&(o=_t,b=!0,zt(!1));var U=m[D],H=n(U,D),O=F?null:l.get(H);O?(O.v&&Pn(O.v,U),O.i&&Pn(O.i,D),z&&L.unskip_effect(O.e)):(O=As(l,F?o:Rn??(Rn=$r()),U,H,D,s,r,a),F||(O.e.f|=ht),l.set(H,O)),_.add(H)}if(g===0&&i&&!w&&(F?w=cr(()=>i(o)):(w=cr(()=>i(Rn??(Rn=$r()))),w.f|=ht)),g>_.size&&Ua(),De&&g>0&&$t($n()),!F)if(A.set(L,_),z){for(const[V,q]of l)_.has(V)||L.skip_effect(q.e);L.oncommit(v),L.ondiscard(c)}else v(L);b&&zt(!0),e(T)}),R={effect:y,items:l,pending:A,outrogroups:null,fallback:w};F=!1,De&&(o=_t)}function nr(t){for(;t!==null&&(t.f&Qa)===0;)t=t.next;return t}function Ms(t,r,a,n,s){var U,H,O,V,q,X,ae,N,M;var i=(n&Za)!==0,o=r.length,l=t.items,d=nr(t.effect.first),x,w=null,T,m=[],A=[],F,v,c,y;if(i)for(y=0;y<o;y+=1)F=r[y],v=s(F,y),c=l.get(v).e,(c.f&ht)===0&&((H=(U=c.nodes)==null?void 0:U.a)==null||H.measure(),(T??(T=new Set)).add(c));for(y=0;y<o;y+=1){if(F=r[y],v=s(F,y),c=l.get(v).e,t.outrogroups!==null)for(const h of t.outrogroups)h.pending.delete(c),h.done.delete(c);if((c.f&jr)!==0&&(ta(c),i&&((V=(O=c.nodes)==null?void 0:O.a)==null||V.unfix(),(T??(T=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)ir(c,null,a);else{var R=w?w.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),wt(t,w,c),wt(t,c,R),ir(c,R,a),w=c,m=[],A=[],d=nr(w.next);continue}if(c!==d){if(x!==void 0&&x.has(c)){if(m.length<A.length){var g=A[0],b;w=g.prev;var $=m[0],_=m[m.length-1];for(b=0;b<m.length;b+=1)ir(m[b],g,a);for(b=0;b<A.length;b+=1)x.delete(A[b]);wt(t,$.prev,_.next),wt(t,w,$),wt(t,_,g),d=g,w=_,y-=1,m=[],A=[]}else x.delete(c),ir(c,d,a),wt(t,c.prev,c.next),wt(t,c,w===null?t.effect.first:w.next),wt(t,w,c),w=c;continue}for(m=[],A=[];d!==null&&d!==c;)(x??(x=new Set)).add(d),A.push(d),d=nr(d.next);if(d===null)continue}(c.f&ht)===0&&m.push(c),w=c,d=nr(c.next)}if(t.outrogroups!==null){for(const h of t.outrogroups)h.pending.size===0&&(Xr(t,cn(h.done)),(q=t.outrogroups)==null||q.delete(h));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||x!==void 0){var L=[];if(x!==void 0)for(c of x)(c.f&jr)===0&&L.push(c);for(;d!==null;)(d.f&jr)===0&&d!==t.fallback&&L.push(d),d=nr(d.next);var z=L.length;if(z>0){var D=(n&ea)!==0&&o===0?a:null;if(i){for(y=0;y<z;y+=1)(ae=(X=L[y].nodes)==null?void 0:X.a)==null||ae.measure();for(y=0;y<z;y+=1)(M=(N=L[y].nodes)==null?void 0:N.a)==null||M.fix()}Ns(t,L,D)}}i&&na(()=>{var h,k;if(T!==void 0)for(c of T)(k=(h=c.nodes)==null?void 0:h.a)==null||k.apply()})}function As(t,r,a,n,s,i,o,l){var d=(o&Ga)!==0?(o&Wa)===0?Xa(a,!1,!1):En(a):null,x=(o&Ka)!==0?En(s):null;return{v:d,i:x,e:cr(()=>(i(r,d??a,x??s,l),()=>{t.delete(n)}))}}function ir(t,r,a){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var o=aa(n);if(i.before(n),n===s)return;n=o}}function wt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Fr(t,r,a=!1,n=!1,s=!1,i=!1){var o=t,l="";if(a){var d=t;De&&(o=$t(Lt(d)))}Q(()=>{var x=sa;if(l===(l=r()??"")){De&&Kt();return}if(a&&!De){x.nodes=null,d.innerHTML=l,l!==""&&Sr(Lt(d),d.lastChild);return}if(x.nodes!==null&&(ts(x.nodes.start,x.nodes.end),x.nodes=null),l!==""){if(De){_t.data;for(var w=Kt(),T=w;w!==null&&(w.nodeType!==Zn||w.data!=="");)T=w,w=aa(w);if(w===null)throw rs(),ns;Sr(_t,T),o=$t(w);return}var m=n?ia:s?as:void 0,A=oa(n?"svg":s?"math":"template",m);A.innerHTML=l;var F=n||s?A:A.content;if(Sr(Lt(F),F.lastChild),n||s)for(;Lt(F);)o.before(Lt(F));else o.before(F)}})}function Ue(t,r,a,n,s){var l;De&&Kt();var i=(l=r.$$slots)==null?void 0:l[a],o=!1;i===!0&&(i=r.children,o=!0),i===void 0||i(t,o?()=>n:n)}function Ls(t,r,a,n,s,i){let o=De;De&&Kt();var l=null;De&&_t.nodeType===ss&&(l=_t,Kt());var d=De?_t:t,x=new Rs(d,!1);Qn(()=>{const w=r()||null;var T=ia;if(w===null){x.ensure(null,null);return}return x.ensure(w,m=>{if(w){if(l=De?l:oa(w,T),Sr(l,l),n){De&&ks(w)&&l.append(document.createComment(""));var A=De?Lt(l):l.appendChild($r());De&&(A===null?zt(!1):$t(A)),n(l,A)}sa.nodes.end=l,m.before(l)}De&&$t(m)}),()=>{}},os),la(()=>{}),o&&(zt(!0),$t(d))}function Ts(t,r,a){Tr(()=>{var n=Rr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Fs(t,r){var a=void 0,n;ca(()=>{a!==(a=r())&&(n&&(Er(n),n=null),a&&(n=cr(()=>{Tr(()=>a(t))})))})}function da(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(a=da(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Ds(){for(var t,r,a=0,n="",s=arguments.length;a<s;a++)(t=arguments[a])&&(r=da(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?Ds(t):t??""}const Nn=[...` 	
\r\f \v\uFEFF`];function zs(t,r,a){var n=t==null?"":""+t;if(a){for(var s of Object.keys(a))if(a[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||Nn.includes(n[o-1]))&&(l===n.length||Nn.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Mn(t,r=!1){var a=r?" !important;":";",n="";for(var s of Object.keys(t)){var i=t[s];i!=null&&i!==""&&(n+=" "+s+": "+i+a)}return n}function Vr(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Is(t,r){if(r){var a="",n,s;if(Array.isArray(r)?(n=r[0],s=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Vr)),s&&d.push(...Object.keys(s).map(Vr));var x=0,w=-1;const v=t.length;for(var T=0;T<v;T++){var m=t[T];if(l?m==="/"&&t[T-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[T+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&w===-1)w=T;else if(m===";"||T===v-1){if(w!==-1){var A=Vr(t.substring(x,w).trim());if(!d.includes(A)){m!==";"&&T++;var F=t.substring(x,T).trim();a+=" "+F+";"}}x=T+1,w=-1}}}}return n&&(a+=Mn(n)),s&&(a+=Mn(s,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Se(t,r,a,n,s,i){var o=t.__className;if(De||o!==a||o===void 0){var l=zs(a,n,i);(!De||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&s!==i)for(var d in i){var x=!!i[d];(s==null||x!==!!s[d])&&t.classList.toggle(d,x)}return i}function Ur(t,r={},a,n){for(var s in a){var i=a[s];r[s]!==i&&(a[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,n))}}function Je(t,r,a,n){var s=t.__style;if(De||s!==r){var i=Is(r,n);(!De||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(Ur(t,a==null?void 0:a[0],n[0]),Ur(t,a==null?void 0:a[1],n[1],"important")):Ur(t,a,n));return n}function Nr(t,r,a=!1){if(t.multiple){if(r==null)return;if(!Jn(r))return is();for(var n of t.options)n.selected=r.includes(lr(n));return}for(n of t.options){var s=lr(n);if(ls(s,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function fa(t){var r=new MutationObserver(()=>{Nr(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),la(()=>{r.disconnect()})}function Os(t,r,a=r){var n=new WeakSet,s=!0;ua(t,"change",i=>{var o=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(o),lr);else{var d=t.querySelector(o)??t.querySelector("option:not([disabled])");l=d&&lr(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Tr(()=>{var i=r();if(t===document.activeElement){var o=mt;if(n.has(o))return}if(Nr(t,i,s),s&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=lr(l),a(i))}t.__value=i,s=!1}),fa(t)}function lr(t){return"__value"in t?t.__value:t.value}const ar=Symbol("class"),sr=Symbol("style"),va=Symbol("is custom element"),ga=Symbol("is html"),Hs=fr?"link":"LINK",js=fr?"input":"INPUT",Vs=fr?"option":"OPTION",Us=fr?"select":"SELECT",Bs=fr?"progress":"PROGRESS";function Qe(t){if(De){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;we(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;we(t,"checked",null),t.checked=s}}};t.__on_r=a,na(a),vs()}}function dn(t,r){var a=fn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==Bs)||(t.value=r??"")}function qs(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function we(t,r,a,n){var s=fn(t);De&&(s[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===Hs)||s[r]!==(s[r]=a)&&(r==="loading"&&(t[ps]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ha(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Ks(t,r,a,n,s=!1,i=!1){if(De&&s&&t.nodeName===js){var o=t,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Qe(o)}var d=fn(t),x=d[va],w=!d[ga];let T=De&&x;T&&zt(!1);var m=r||{},A=t.nodeName===Vs;for(var F in r)F in a||(a[F]=null);a.class?a.class=dt(a.class):a[ar]&&(a.class=null),a[sr]&&(a.style??(a.style=null));var v=ha(t);for(const _ in a){let L=a[_];if(A&&_==="value"&&L==null){t.value=t.__value="",m[_]=L;continue}if(_==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Se(t,c,L,n,r==null?void 0:r[ar],a[ar]),m[_]=L,m[ar]=a[ar];continue}if(_==="style"){Je(t,L,r==null?void 0:r[sr],a[sr]),m[_]=L,m[sr]=a[sr];continue}var y=m[_];if(!(L===y&&!(L===void 0&&t.hasAttribute(_)))){m[_]=L;var R=_[0]+_[1];if(R!=="$$")if(R==="on"){const z={},D="$$"+_;let U=_.slice(2);var g=Ps(U);if(Cs(U)&&(U=U.slice(0,-7),z.capture=!0),!g&&y){if(L!=null)continue;t.removeEventListener(U,m[D],z),m[D]=null}if(g)ie(U,t,L),We([U]);else if(L!=null){let H=function(O){m[_].call(this,O)};m[D]=Ss(U,t,H,z)}}else if(_==="style")we(t,_,L);else if(_==="autofocus")ds(t,!!L);else if(!x&&(_==="__value"||_==="value"&&L!=null))t.value=t.__value=L;else if(_==="selected"&&A)qs(t,L);else{var b=_;w||(b=$s(b));var $=b==="defaultValue"||b==="defaultChecked";if(L==null&&!x&&!$)if(d[_]=null,b==="value"||b==="checked"){let z=t;const D=r===void 0;if(b==="value"){let U=z.defaultValue;z.removeAttribute(b),z.defaultValue=U,z.value=z.__value=D?U:null}else{let U=z.defaultChecked;z.removeAttribute(b),z.defaultChecked=U,z.checked=D?U:!1}}else t.removeAttribute(_);else $||v.includes(b)&&(x||typeof L!="string")?(t[b]=L,b in d&&(d[b]=fs)):typeof L!="function"&&we(t,b,L)}}}return T&&zt(!0),m}function An(t,r,a=[],n=[],s=[],i,o=!1,l=!1){cs(s,a,n,d=>{var x=void 0,w={},T=t.nodeName===Us,m=!1;if(ca(()=>{var F=r(...d.map(e)),v=Ks(t,x,F,i,o,l);m&&T&&"value"in F&&Nr(t,F.value);for(let y of Object.getOwnPropertySymbols(w))F[y]||Er(w[y]);for(let y of Object.getOwnPropertySymbols(F)){var c=F[y];y.description===us&&(!x||c!==x[y])&&(w[y]&&Er(w[y]),w[y]=cr(()=>Fs(t,()=>c))),v[y]=c}x=v}),T){var A=t;Tr(()=>{Nr(A,x.value,!0),fa(A)})}m=!0})}function fn(t){return t.__attributes??(t.__attributes={[va]:t.nodeName.includes("-"),[ga]:t.namespaceURI===gs})}var Ln=new Map;function ha(t){var r=t.getAttribute("is")||t.nodeName,a=Ln.get(r);if(a)return a;Ln.set(r,a=[]);for(var n,s=t,i=Element.prototype;i!==s;){n=ms(s);for(var o in n)n[o].set&&a.push(o);s=hs(s)}return a}function tt(t,r,a=r){var n=new WeakSet;ua(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Br(t)?qr(i):i,a(i),mt!==null&&n.add(mt),await Pt(),i!==(i=r())){var o=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var x=t.value.length;o===l&&l===d&&x>d?(t.selectionStart=x,t.selectionEnd=x):(t.selectionStart=o,t.selectionEnd=Math.min(l,x))}}}),(De&&t.defaultValue!==t.value||Rr(r)==null&&t.value)&&(a(Br(t)?qr(t.value):t.value),mt!==null&&n.add(mt)),_s(()=>{var s=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Br(t)&&s===qr(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Br(t){var r=t.type;return r==="number"||r==="range"}function qr(t){return t===""?null:+t}let xt=I(oe({type:"none",props:{},resolve:null}));function Gs(){return e(xt)}function ot(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Ws(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Xs(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Ys(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Ye(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Tn(t,r="Confirm",a="OK",n="primary"){return new Promise(s=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:s},!0)})}function vn(t,r="",a="Input",n="",s=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:s},resolve:i},!0)})}var Qs=P('<div style="display:contents;"><!></div>');function Zt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Qs(),s=C(n);ft(s,()=>r.children),p(n),Ts(n,i=>a==null?void 0:a(i)),u(t,n)}var Zs=P('<div class="text-xs text-muted font-light"> </div>'),Js=P('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function vr(t,r){Ae(r,!0);const a=F=>{var v=Js(),c=C(v),y=C(c),R=C(y),g=C(R,!0);p(R);var b=E(R,2);{var $=D=>{var U=Zs(),H=C(U,!0);p(U),Q(()=>ee(H,r.subtitle)),u(D,U)};Y(b,D=>{r.subtitle&&D($)})}p(y);var _=E(y,2);ft(_,()=>r.children);var L=E(_,2),z=C(L);ft(z,()=>r.footer),p(L),p(c),p(v),Q(()=>{Se(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),we(c,"aria-labelledby",r.titleId),we(R,"id",r.titleId),ee(g,r.title)}),ie("keydown",v,o),ie("mousedown",v,d),ie("click",v,x),u(F,v)};let n=he(r,"maxWidth",3,"520px"),s=he(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():ot(null)}function o(F){F.key==="Escape"?i():F.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(F){l=F.target.dataset.backdrop!==void 0}function x(F){const v=F.target.dataset.backdrop!==void 0;l&&v&&i(),l=!1}var w=_e(),T=B(w);{var m=F=>{Zt(F,{children:(v,c)=>{a(v)}})},A=F=>{a(F)};Y(T,F=>{s()?F(m):F(A,-1)})}u(t,w),Le()}We(["keydown","mousedown","click"]);var eo=P("<button><!></button>");function $e(t,r){let a=he(r,"variant",3,"primary"),n=he(r,"size",3,"default"),s=he(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},o={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=eo(),d=C(l);ft(d,()=>r.children),p(l),Q(()=>{Se(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${o[a()]??""}`),l.disabled=s()}),ie("click",l,function(...x){var w;(w=r.onclick)==null||w.apply(this,x)}),u(t,l)}We(["click"]);var to=P("<!> <span><!></span>",1),ro=P('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),no=P('<input class="w-full"/>'),ao=P('<div class="mb-4.5"><!></div>'),so=P('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function oo(t,r){Ae(r,!0);let a=he(r,"confirmLabel",3,"OK"),n=he(r,"confirmVariant",3,"primary"),s=he(r,"value",3,""),i=he(r,"placeholder",3,""),o=he(r,"multiline",3,!1);const l=s();let d=I(oe(l)),x=I(void 0),w=I(void 0);Ne(()=>{var A;r.mode==="prompt"&&e(x)?(e(x).focus(),"select"in e(x)&&e(x).select()):e(w)&&((A=e(w).querySelector("button"))==null||A.focus())});function T(){r.mode==="prompt"?ot(e(d)):r.mode==="confirm"?ot(!0):ot()}function m(){r.mode==="confirm"?ot(!1):r.mode==="prompt"?ot(null):ot()}{const A=v=>{var c=to(),y=B(c);{var R=$=>{$e($,{variant:"secondary",onclick:m,children:(_,L)=>{ke();var z=Be("Cancel");u(_,z)},$$slots:{default:!0}})};Y(y,$=>{r.mode!=="alert"&&$(R)})}var g=E(y,2),b=C(g);$e(b,{get variant(){return n()},onclick:T,children:($,_)=>{ke();var L=Be();Q(()=>ee(L,a())),u($,L)},$$slots:{default:!0}}),p(g),nt(g,$=>f(w,$),()=>e(w)),u(v,c)};let F=j(()=>o()?void 0:T);vr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(F)},onCancel:m,footer:A,children:(v,c)=>{var y=so(),R=B(y),g=C(R,!0);p(R);var b=E(R,2);{var $=_=>{var L=ao(),z=C(L);{var D=H=>{var O=ro();bs(O),nt(O,V=>f(x,V),()=>e(x)),Q(()=>we(O,"placeholder",i())),tt(O,()=>e(d),V=>f(d,V)),u(H,O)},U=H=>{var O=no();Qe(O),nt(O,V=>f(x,V),()=>e(x)),Q(()=>we(O,"placeholder",i())),tt(O,()=>e(d),V=>f(d,V)),u(H,O)};Y(z,H=>{o()?H(D):H(U,-1)})}p(L),u(_,L)};Y(b,_=>{r.mode==="prompt"&&_($)})}Q(()=>ee(g,r.message)),u(v,y)},$$slots:{footer:!0,default:!0}})}Le()}var io=P('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Me(t,r){var a=io(),n=C(a),s=E(n);ft(s,()=>r.children),p(a),Q(()=>ee(n,`${r.text??""} `)),u(t,a)}function Ct(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function St(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function lo(t,r){return localStorage.getItem(t)??r}function co(){return{n:Ct("csauto_run_n",1),nt:Ct("csauto_run_nt",1),maxParallel:Ct("csauto_run_max_parallel",0)||null}}function uo(t){St("csauto_run_n",t.n),St("csauto_run_nt",t.nt),t.maxParallel&&St("csauto_run_max_parallel",t.maxParallel)}function fo(){return{n:Ct("csauto_restart_n",1),nt:Ct("csauto_restart_nt",1),maxParallel:Ct("csauto_restart_max_parallel",0)||null,mode:lo("csauto_restart_mode","iterations"),value:Ct("csauto_restart_value",100)}}function vo(t){St("csauto_restart_n",t.n),St("csauto_restart_nt",t.nt),t.maxParallel&&St("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),St("csauto_restart_value",t.value)}function go(){return{keepLast:Ct("csauto_clean_keep_last",1)}}function ho(t){St("csauto_clean_keep_last",t.keepLast)}var po=P("<!> <!>",1),mo=P('<input type="number" min="1" step="1"/>'),_o=P('<input type="number" min="1" step="1"/>'),bo=P('<input type="number" min="0" step="1"/>'),xo=P('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div>');function yo(t,r){Ae(r,!0);const a=co(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=I(oe(a.n)),i=I(oe(a.nt)),o=I(oe(n));async function l(){if(!Number.isFinite(e(s))||e(s)<=0){await Ye("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Ye("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await Ye("Max parallel must be empty or > 0.","Invalid value");return}const d={n:e(s),nt:e(i),maxParallel:e(o)||null};uo(d),ot(d)}{const d=T=>{var m=po(),A=B(m);$e(A,{variant:"secondary",onclick:()=>ot(null),children:(v,c)=>{ke();var y=Be("Cancel");u(v,y)},$$slots:{default:!0}});var F=E(A,2);$e(F,{variant:"run",onclick:l,children:(v,c)=>{ke();var y=Be("Run");u(v,y)},$$slots:{default:!0}}),u(T,m)};let x=j(()=>r.cases.length),w=j(()=>r.cases.length>1?"s":"");vr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(x)??""} case${e(w)??""} selected`},onConfirm:l,footer:d,children:(T,m)=>{var A=xo(),F=C(A);Me(F,{text:"MPI Ranks (n)",children:(y,R)=>{var g=mo();Qe(g),tt(g,()=>e(s),b=>f(s,b)),u(y,g)}});var v=E(F,2);Me(v,{text:"OMP Threads (nt)",children:(y,R)=>{var g=_o();Qe(g),tt(g,()=>e(i),b=>f(i,b)),u(y,g)}});var c=E(v,2);Me(c,{text:"Max Parallel",children:(y,R)=>{var g=bo();Qe(g),tt(g,()=>e(o),b=>f(o,b)),u(y,g)}}),p(A),u(T,A)},$$slots:{footer:!0,default:!0}})}Le()}var wo=P("<!> <!>",1),ko=P('<input type="number" min="1" step="1"/>'),Co=P('<input type="number" min="1" step="1"/>'),So=P('<input type="number" min="0" step="1"/>'),$o=P("<select><option>Iterations</option><option>Physical time</option></select>"),Po=P('<input type="number"/>'),Eo=P('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function Ro(t,r){Ae(r,!0);const a=fo(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let s=I(oe(a.n)),i=I(oe(a.nt)),o=I(oe(n)),l=I(oe(a.mode)),d=I(oe(a.value)),x=j(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),w=j(()=>e(l)==="iterations"?"1":"any"),T=j(()=>e(l)==="iterations"?"1":"0");async function m(){if(!Number.isFinite(e(s))||e(s)<=0){await Ye("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Ye("Threads must be an integer > 0.","Invalid value");return}if(e(o)&&(!Number.isFinite(e(o))||e(o)<=0)){await Ye("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await Ye("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await Ye("Iterations must be an integer.","Invalid value");return}const A={n:e(s),nt:e(i),maxParallel:e(o)||null,restartMode:e(l),restartValue:e(d)};vo({n:e(s),nt:e(i),maxParallel:e(o)||null,mode:e(l),value:e(d)}),ot(A)}{const A=c=>{var y=wo(),R=B(y);$e(R,{variant:"secondary",onclick:()=>ot(null),children:(b,$)=>{ke();var _=Be("Cancel");u(b,_)},$$slots:{default:!0}});var g=E(R,2);$e(g,{variant:"warning",onclick:m,children:(b,$)=>{ke();var _=Be("Restart");u(b,_)},$$slots:{default:!0}}),u(c,y)};let F=j(()=>r.cases.length),v=j(()=>r.cases.length>1?"s":"");vr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(F)??""} case${e(v)??""} selected`},onConfirm:m,footer:A,children:(c,y)=>{var R=Eo(),g=B(R),b=C(g);Me(b,{text:"MPI Ranks (n)",children:(U,H)=>{var O=ko();Qe(O),tt(O,()=>e(s),V=>f(s,V)),u(U,O)}});var $=E(b,2);Me($,{text:"OMP Threads (nt)",children:(U,H)=>{var O=Co();Qe(O),tt(O,()=>e(i),V=>f(i,V)),u(U,O)}});var _=E($,2);Me(_,{text:"Max Parallel",children:(U,H)=>{var O=So();Qe(O),tt(O,()=>e(o),V=>f(o,V)),u(U,O)}}),p(g);var L=E(g,2),z=C(L);Me(z,{text:"Stop criterion",children:(U,H)=>{var O=$o(),V=C(O);V.value=V.__value="iterations";var q=E(V);q.value=q.__value="physical_time",p(O),Os(O,()=>e(l),X=>f(l,X)),u(U,O)}});var D=E(z,2);Me(D,{get text(){return e(x)},children:(U,H)=>{var O=Po();Qe(O),Q(()=>{we(O,"min",e(T)),we(O,"step",e(w))}),tt(O,()=>e(d),V=>f(d,V)),u(U,O)}}),p(L),u(c,R)},$$slots:{footer:!0,default:!0}})}Le()}function Te(t,r){let a=he(r,"size",3,14);var n=_e(),s=B(n);ws(s,()=>r.icon,(i,o)=>{o(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const No={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Mo=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const Fn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var Ao=Ot("<svg><!><!></svg>");function Ke(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]),n=Ve(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ae(r,!1);let s=he(r,"name",8,void 0),i=he(r,"color",8,"currentColor"),o=he(r,"size",8,24),l=he(r,"strokeWidth",8,2),d=he(r,"absoluteStrokeWidth",8,!1),x=he(r,"iconNode",24,()=>[]);Es();var w=Ao();An(w,(A,F,v)=>({...No,...A,...n,width:o(),height:o(),stroke:i(),"stroke-width":F,class:v}),[()=>Mo(n)?void 0:{"aria-hidden":"true"},()=>(Vt(d()),Vt(l()),Vt(o()),Rr(()=>d()?Number(l())*24/Number(o()):l())),()=>(Vt(Fn),Vt(s()),Vt(a),Rr(()=>Fn("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var T=C(w);Ze(T,1,x,un,(A,F)=>{var v=j(()=>xs(e(F),2));let c=()=>e(v)[0],y=()=>e(v)[1];var R=_e(),g=B(R);Ls(g,c,!0,(b,$)=>{An(b,()=>({...y()}))}),u(A,R)});var m=E(T);Ue(m,r,"default",{}),p(w),u(t,w),Le()}function Lo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Ke(t,qe({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function To(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Ke(t,qe({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Fo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ke(t,qe({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function gn(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Ke(t,qe({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Do(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Ke(t,qe({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function zo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Ke(t,qe({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Io(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Ke(t,qe({name:"circle-x"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function gr(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ke(t,qe({name:"download"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Oo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Ke(t,qe({name:"droplets"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ho(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ke(t,qe({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function jo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ke(t,qe({name:"external-link"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Vo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Ke(t,qe({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Uo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Ke(t,qe({name:"pause"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Bo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Ke(t,qe({name:"pen-line"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function qo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Ke(t,qe({name:"pencil"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function pa(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Ke(t,qe({name:"play"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Ko(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ke(t,qe({name:"plus"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Jt(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ke(t,qe({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Go(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Ke(t,qe({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Wo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ke(t,qe({name:"save"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Xo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Ke(t,qe({name:"settings"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}function Yo(t,r){const a=Ve(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ke(t,qe({name:"trash-2"},()=>a,{get iconNode(){return n},children:(s,i)=>{var o=_e(),l=B(o);Ue(l,r,"default",{}),u(s,o)},$$slots:{default:!0}}))}var Qo=P('<li role="option"> </li>'),Zo=P('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Jo=P('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Ae(r,!0);let a=he(r,"value",3,""),n=he(r,"placeholder",3,"Select..."),s=he(r,"class",3,""),i=he(r,"buttonClass",3,""),o=I(!1),l=I(void 0),d=I(void 0),x=I(""),w=j(()=>{var D;return((D=r.options.find(U=>U.value===a()))==null?void 0:D.label)??n()});function T(D){var U;f(o,!1),(U=r.onchange)==null||U.call(r,D)}function m(){if(!e(l)||!e(d))return;const D=e(l).getBoundingClientRect(),U=e(d).offsetHeight,H=4,O=window.innerHeight-D.bottom-H,q=O<U&&D.top-H>O?D.top-H-U:D.bottom+H,X=Math.min(D.left,window.innerWidth-D.width);f(x,`position:fixed; top:${q}px; left:${X}px; width:${D.width}px; z-index:9999;`)}async function A(){f(o,!e(o)),e(o)&&(await Pt(),m())}function F(D){D.key==="Escape"&&f(o,!1)}function v(D){e(o)&&e(l)&&!e(l).contains(D.target)&&e(d)&&!e(d).contains(D.target)&&f(o,!1)}var c=Jo();rt("mousedown",it,v),rt("keydown",it,F),rt("scroll",it,()=>{e(o)&&f(o,!1)});var y=B(c),R=C(y),g=C(R),b=C(g,!0);p(g);var $=E(g,2),_=C($);Te(_,{get icon(){return gn},size:14}),p($),p(R),nt(R,D=>f(l,D),()=>e(l)),p(y);var L=E(y,2);{var z=D=>{Zt(D,{children:(U,H)=>{var O=Zo();Ze(O,21,()=>r.options,V=>V.value,(V,q)=>{var X=Qo();we(X,"tabindex",0);var ae=C(X,!0);p(X),Q(()=>{we(X,"aria-selected",e(q).value===a()),Se(X,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(q).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ee(ae,e(q).label)}),ie("mousedown",X,N=>{N.stopPropagation(),T(e(q).value)}),u(V,X)}),p(O),nt(O,V=>f(d,V),()=>e(d)),Q(()=>Je(O,e(x))),u(U,O)}})};Y(L,D=>{e(o)&&D(z)})}Q(()=>{Se(y,1,`relative inline-flex ${s()??""}`),Se(R,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),we(R,"aria-expanded",e(o)),ee(b,e(w)),Se($,1,`text-muted shrink-0 transition-transform duration-150 ${e(o)?"rotate-180":""}`)}),ie("mousedown",R,D=>{D.stopPropagation(),A()}),u(t,c),Le()}We(["mousedown"]);var ei=Ot('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ti=P('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),ri=P('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),ni=P('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Gt(t,r){Ae(r,!0);let a=he(r,"selected",19,()=>[]),n=he(r,"placeholder",3,"Select..."),s=he(r,"class",3,""),i=I(!1),o=I(void 0),l=I(void 0),d=I(""),x=j(()=>new Set(a())),w=j(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(H=>{var O;return((O=r.options.find(V=>V.value===H))==null?void 0:O.label)??H}).join(", "):`${a().length} selected`);function T(H){var V;const O=new Set(e(x));O.has(H)?O.delete(H):O.add(H),(V=r.onchange)==null||V.call(r,[...O])}function m(){var H;(H=r.onchange)==null||H.call(r,r.options.map(O=>O.value))}function A(){var H;(H=r.onchange)==null||H.call(r,[])}function F(){if(!e(o)||!e(l))return;const H=e(o).getBoundingClientRect(),O=e(l).offsetHeight,V=4,q=window.innerHeight-H.bottom-V,ae=q<O&&H.top-V>q?H.top-V-O:H.bottom+V,N=Math.min(H.left,window.innerWidth-H.width);f(d,`position:fixed; top:${ae}px; left:${N}px; min-width:${H.width}px; z-index:9999;`)}async function v(){f(i,!e(i)),e(i)&&(await Pt(),F())}function c(H){e(i)&&e(o)&&!e(o).contains(H.target)&&e(l)&&!e(l).contains(H.target)&&f(i,!1)}function y(H){H.key==="Escape"&&f(i,!1)}var R=ni();rt("mousedown",it,c),rt("keydown",it,y),rt("scroll",it,()=>{e(i)&&f(i,!1)});var g=B(R),b=C(g),$=C(b),_=C($,!0);p($);var L=E($,2),z=C(L);Te(z,{get icon(){return gn},size:14}),p(L),p(b),nt(b,H=>f(o,H),()=>e(o)),p(g);var D=E(g,2);{var U=H=>{Zt(H,{children:(O,V)=>{var q=ri(),X=C(q),ae=C(X),N=E(ae,2);p(X);var M=E(X,2);Ze(M,17,()=>r.options,h=>h.value,(h,k)=>{var S=ti(),Z=C(S),re=C(Z);{var ge=se=>{var ue=ei();u(se,ue)},le=j(()=>e(x).has(e(k).value));Y(re,se=>{e(le)&&se(ge)})}p(Z);var K=E(Z,2),ne=C(K,!0);p(K),p(S),Q(se=>{Se(Z,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${se??""}`),ee(ne,e(k).label)},[()=>e(x).has(e(k).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),ie("mousedown",S,se=>{se.stopPropagation(),T(e(k).value)}),u(h,S)}),p(q),nt(q,h=>f(l,h),()=>e(l)),Q(()=>Je(q,e(d))),ie("mousedown",ae,h=>{h.stopPropagation(),m()}),ie("mousedown",N,h=>{h.stopPropagation(),A()}),u(O,q)}})};Y(D,H=>{e(i)&&H(U)})}Q(()=>{Se(g,1,`relative inline-flex ${s()??""}`),we(b,"aria-expanded",e(i)),ee(_,e(w)),Se(L,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),ie("mousedown",b,H=>{H.stopPropagation(),v()}),u(t,R),Le()}We(["mousedown"]);const Yr="csauto_token";let ma=I(oe(localStorage.getItem(Yr)??""));function _a(){return e(ma)}function ba(t){f(ma,t,!0),t?localStorage.setItem(Yr,t):localStorage.removeItem(Yr)}let xr=null;async function hn(t,r={}){const a=new Headers(r.headers),n=_a();n&&a.set("X-CSAUTO-TOKEN",n);const s=await fetch(t,{...r,headers:a});if(s.status===401){xr||(xr=vn("API token required:",n,"Authentication"));const i=await xr;return xr=null,i===null?s:(ba(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return s}async function ct(t){const r=await hn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Dr(t){const r=await hn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Rt(t,r){const a=await hn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function zr(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function ai(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function Dn(t){return ct(`/api/perf?${zr(t)}`)}function si(){return ct("/api/app_config")}function oi(t){return ct(`/api/residual_columns?${zr(t)}`).then(r=>r.columns??[])}function ii(t,r,a={}){const n=new URLSearchParams;return t.forEach(s=>n.append("case",s)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Dr(`/api/residuals_svg?${n}`)}function xa(t){return ct(`/api/restart_origin?${zr(t)}`)}function li(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function ci(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Dr(`/api/tail?${n}`)}function ui(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function di(t){return ct(`/api/resu_dirs?${zr(t)}`).then(r=>r.dirs??[])}function Qr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function fi(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function vi(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(s=>n.append("column",s)),ct(`/api/probe_position?${n}`)}function gi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Dr(`/api/probe_svg?${r}`)}function hi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Dr(`/api/compare_runs?${r}`)}function zn(t){return Rt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function pi(t){return Rt("/api/kill_case",{cases:t}).then(()=>{})}function yr(t){return Rt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function mi(t){return Rt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function _i(t,r){return Rt("/api/case_note",{case:t,note:r}).then(()=>{})}function bi(t,r){return Rt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function xi(t){return Rt("/api/open_gui",{case:t}).then(()=>{})}function yi(){return ct("/api/settings/telemetry")}function wi(t){return Rt("/api/settings/telemetry",{enabled:t})}var ki=P("<!> <!>",1),Ci=P('<input type="number" min="0" step="1" class="w-[80px]"/>'),Si=P('<span class="text-xs text-muted">Loading...</span>'),$i=P('<span class="text-xs text-muted">No folders found</span>'),Pi=P('<div class="mb-3"><!></div>'),Ei=P('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Ri(t,r){Ae(r,!0);const a=go();let n=I("keep_latest"),s=I(oe(a.keepLast)),i=I(oe([])),o=I(oe([])),l=I(!0),d=j(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const x=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let w=j(()=>e(i).map(m=>({value:m,label:m})));Yn(async()=>{try{f(i,await di(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function T(){if(e(d)&&e(o).length===0){await Ye("Please select at least one RESU folder.","Missing selection");return}const m={action:e(n)};e(n)==="keep_latest"?(m.keepLast=e(s),ho({keepLast:e(s)})):e(n)==="delete_all"?m.keepLast=0:e(n)==="keep_folder"?m.keepResu=e(o):e(n)==="delete_folder"&&(m.deleteResu=e(o)),ot(m)}{const m=v=>{var c=ki(),y=B(c);$e(y,{variant:"secondary",onclick:()=>ot(null),children:(g,b)=>{ke();var $=Be("Cancel");u(g,$)},$$slots:{default:!0}});var R=E(y,2);$e(R,{variant:"primary",onclick:T,children:(g,b)=>{ke();var $=Be("Clean");u(g,$)},$$slots:{default:!0}}),u(v,c)};let A=j(()=>r.cases.length),F=j(()=>r.cases.length>1?"s":"");vr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(A)??""} case${e(F)??""} selected`},footer:m,children:(v,c)=>{var y=Ei(),R=B(y),g=C(R);Me(g,{text:"Action",children:(z,D)=>{lt(z,{class:"w-[200px]",get options(){return x},get value(){return e(n)},onchange:U=>f(n,U,!0)})}});var b=E(g,2);{var $=z=>{Me(z,{text:"Keep last",children:(D,U)=>{var H=Ci();Qe(H),tt(H,()=>e(s),O=>f(s,O)),u(D,H)}})};Y(b,z=>{e(n)==="keep_latest"&&z($)})}p(R);var _=E(R,2);{var L=z=>{var D=Pi(),U=C(D);Me(U,{text:"RESU folders",children:(H,O)=>{var V=_e(),q=B(V);{var X=M=>{var h=Si();u(M,h)},ae=M=>{var h=$i();u(M,h)},N=M=>{Gt(M,{class:"w-full",get options(){return e(w)},get selected(){return e(o)},onchange:h=>f(o,h,!0),placeholder:"Select folders..."})};Y(q,M=>{e(l)?M(X):e(i).length===0?M(ae,1):M(N,-1)})}u(H,V)}}),p(D),u(z,D)};Y(_,z=>{e(d)&&z(L)})}u(v,y)},$$slots:{footer:!0,default:!0}})}Le()}function Ni(t,r){Ae(r,!0);let a=j(Gs);var n=_e(),s=B(n);{var i=x=>{yo(x,{get cases(){return e(a).props.cases}})},o=x=>{Ro(x,{get cases(){return e(a).props.cases}})},l=x=>{Ri(x,{get cases(){return e(a).props.cases}})},d=x=>{oo(x,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};Y(s,x=>{e(a).type==="run"?x(i):e(a).type==="restart"?x(o,1):e(a).type==="clean"?x(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&x(d,3)})}u(t,n),Le()}let ur=I(oe([])),Mi=0;function Ai(){return e(ur)}function wr(t,r="success",a=3500){const n=++Mi;f(ur,[...e(ur),{id:n,message:t,variant:r}],!0),setTimeout(()=>ya(n),a)}function ya(t){f(ur,e(ur).filter(r=>r.id!==t),!0)}var Li=P('<div role="status"> </div>'),Ti=P('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Fi(t,r){Ae(r,!0);let a=j(Ai);Zt(t,{children:(n,s)=>{var i=Ti();Ze(i,21,()=>e(a),o=>o.id,(o,l)=>{var d=Li(),x=C(d,!0);p(d),Q(()=>{Se(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ee(x,e(l).message)}),ie("click",d,()=>ya(e(l).id)),u(o,d)}),p(i),u(n,i)}}),Le()}We(["click"]);var Di=Ot('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),zi=Ot('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Ii=P('<span role="checkbox"><!></span>'),Oi=P("<span> </span><!>",1),Hi=P("<!><span> </span>",1),ji=P('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function It(t,r){Ae(r,!0);const a=v=>{var c=Ii(),y=C(c);{var R=b=>{var $=Di();Q(()=>Je($,`width: ${o()-4}px; height: ${o()-4}px;`)),u(b,$)},g=b=>{var $=zi();Q(()=>Je($,`width: ${o()-4}px; height: ${o()-4}px;`)),u(b,$)};Y(y,b=>{n()&&!s()?b(R):s()&&b(g,1)})}p(c),Q(()=>{Se(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||s()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Je(c,`width: ${o()??""}px; height: ${o()??""}px;`),we(c,"aria-checked",s()?"mixed":n()),we(c,"aria-disabled",i()),we(c,"tabindex",i()?-1:0)}),ie("click",c,x),ie("keydown",c,w),u(v,c)};let n=he(r,"checked",3,!1),s=he(r,"indeterminate",3,!1),i=he(r,"disabled",3,!1),o=he(r,"size",3,16),l=he(r,"label",3,""),d=he(r,"labelFirst",3,!1);function x(v){var y;if(v.stopPropagation(),i())return;const c=s()?!0:!n();(y=r.onchange)==null||y.call(r,c)}function w(v){(v.key===" "||v.key==="Enter")&&(v.preventDefault(),v.stopPropagation(),x(v))}var T=_e(),m=B(T);{var A=v=>{var c=ji(),y=C(c);{var R=b=>{var $=Oi(),_=B($),L=C(_,!0);p(_);var z=E(_);a(z),Q(()=>ee(L,l())),u(b,$)},g=b=>{var $=Hi(),_=B($);a(_);var L=E(_),z=C(L,!0);p(L),Q(()=>ee(z,l())),u(b,$)};Y(y,b=>{d()?b(R):b(g,-1)})}p(c),ie("click",c,x),ie("keydown",c,w),u(v,c)},F=v=>{a(v)};Y(m,v=>{l()?v(A):v(F,-1)})}u(t,T),Le()}We(["click","keydown"]);function pn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Ir(t,r){localStorage.setItem(t,JSON.stringify(r))}const Zr=new Map;function hr(t,r,a){vt(t),Zr.set(t,setInterval(r,a))}function vt(t){const r=Zr.get(t);r!==void 0&&(clearInterval(r),Zr.delete(t))}const Tt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Vi=["status","plot","probe","tail","errors"],Kr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},or=pn("csauto_refresh_rates",{});let bt=I(oe({status:or.status??Tt.status,tail:or.tail??Tt.tail,plot:or.plot??Tt.plot,probe:or.probe??Tt.probe,errors:or.errors??Tt.errors}));function Ui(){return e(bt)}function Bi(t,r){f(bt,{...e(bt),[t]:r},!0),Ir("csauto_refresh_rates",e(bt))}function qi(){return e(bt).status}function In(){return e(bt).tail}function On(){return e(bt).plot}function Ki(){return e(bt).probe}function Hn(){return e(bt).errors}const Jr=new Set;function pr(t){return Jr.add(t),()=>Jr.delete(t)}function Gi(){Jr.forEach(t=>t())}const en=pn("csauto_autorefresh_enabled",{});function er(t){return en[t]??!0}function tr(t,r){en[t]=r,Ir("csauto_autorefresh_enabled",en)}var Wi=P("<!> <!>",1),Xi=P('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),Yi=P('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),Qi=P('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function Zi(t,r){Ae(r,!0);let a=I(oe(_a())),n=I(oe({...Ui()})),s=I(!0),i=I(!1);Ne(()=>{yi().then(x=>{f(s,x.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function o(x){const{min:w}=Kr[x];let T=e(n)[x];(typeof T!="number"||isNaN(T))&&(T=Tt[x]),f(n,{...e(n),[x]:Math.max(w,Math.round(T))},!0)}function l(x,w){const T=w.target,m=T.value.replace(/[^0-9]/g,""),A=parseInt(m,10);isNaN(A)?m===""&&f(n,{...e(n),[x]:Kr[x].min},!0):f(n,{...e(n),[x]:A},!0),T.value=String(e(n)[x])}function d(){ba(e(a));for(const x of Object.keys(e(n)))o(x),Bi(x,e(n)[x]);e(i)&&wi(e(s)).catch(()=>{}),r.onClose()}vr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:w=>{var T=Wi(),m=B(T);$e(m,{variant:"secondary",get onclick(){return r.onClose},children:(F,v)=>{ke();var c=Be("Cancel");u(F,c)},$$slots:{default:!0}});var A=E(m,2);$e(A,{variant:"primary",onclick:d,children:(F,v)=>{ke();var c=Be("Save");u(F,c)},$$slots:{default:!0}}),u(w,T)},children:(w,T)=>{var m=Qi(),A=B(m),F=E(C(A),2);Qe(F),p(A);var v=E(A,2),c=C(v),y=E(C(c),2);p(c);var R=E(c,2);Ze(R,20,()=>Vi,$=>$,($,_)=>{const L=j(()=>Kr[_]);var z=Xi(),D=C(z),U=C(D),H=C(U,!0);p(U);var O=E(U,2),V=C(O);p(O),p(D);var q=E(D,2),X=C(q);Qe(X),ke(2),p(q),p(z),Q(()=>{ee(H,e(L).label),ee(V,`min ${e(L).min??""}ms`),dn(X,e(n)[_])}),ie("input",X,ae=>l(_,ae)),rt("blur",X,()=>o(_)),u($,z)}),p(R),p(v);var g=E(v,2);{var b=$=>{var _=Yi(),L=E(C(_),2);It(L,{get checked(){return e(s)},onchange:z=>f(s,z,!0),label:"Send anonymous usage statistics"}),p(_),u($,_)};Y(g,$=>{e(i)&&$(b)})}tt(F,()=>e(a),$=>f(a,$)),ie("click",y,()=>f(n,{...Tt},!0)),u(w,m)},$$slots:{footer:!0,default:!0}}),Le()}We(["click","input"]);const Ji=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href,el="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20height='400px'%20viewBox='0%200%20397.89%2095.85'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.8.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%202)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23ff861d;%20}%20.st1%20{%20fill:%20%23ffb210;%20}%20.st2%20{%20fill:%20%231057c8;%20}%20.st3%20{%20fill:%20%23d6430a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st2'%20d='M26.25,61.73c-12.02,0-20.11-8.16-20.11-21.37s8.01-21.37,20.33-21.37c8.83,0,15.06,3.78,17.36,11.28l-5.64,2.52c-1.48-5.94-4.97-8.69-11.87-8.69-8.46,0-14.25,6.01-14.25,16.25s5.93,16.25,13.95,16.25,11.73-2.82,12.84-8.61l5.71,1.93c-2,7.79-9.13,11.8-18.33,11.8'/%3e%3cpath%20class='st2'%20d='M89.96,40.36c0,13.21-7.87,21.37-20.48,21.37s-20.48-8.16-20.48-21.37,7.86-21.37,20.48-21.37,20.48,8.16,20.48,21.37M54.94,40.36c0,10.24,5.64,16.25,14.54,16.25s14.54-6.01,14.54-16.25-5.64-16.25-14.54-16.25-14.54,6.01-14.54,16.25'/%3e%3cpath%20class='st2'%20d='M134.3,40.29c0,13.43-8.01,20.85-21.81,20.85h-14.84V19.58h14.84c13.8,0,21.81,7.42,21.81,20.7M128.36,40.29c0-9.94-5.57-15.58-15.44-15.58h-9.35v31.32h9.35c9.87,0,15.44-5.71,15.44-15.73'/%3e%3cpolygon%20class='st2'%20points='174.11%2056.02%20174.11%2061.14%20141.98%2061.14%20141.98%2019.58%20173.14%2019.58%20173.14%2024.7%20147.91%2024.7%20147.91%2037.54%20167.65%2037.54%20167.65%2042.66%20147.91%2042.66%20147.91%2056.02%20174.11%2056.02'/%3e%3cpath%20class='st2'%20d='M213.81,22.13c4.16-1.92,9.75-3.11,14.3-3.11,12.55,0,17.74,5.19,17.74,17.34v5.27c0,4.16.08,7.28.16,10.31.08,3.12.24,5.99.48,9.19h-9.43c-.4-2.16-.4-4.88-.48-6.15h-.16c-2.48,4.56-7.83,7.11-12.71,7.11-7.28,0-14.39-4.4-14.39-12.23,0-6.15,2.96-9.75,7.03-11.75,4.08-2,9.35-2.4,13.83-2.4h5.91c0-6.63-2.96-8.87-9.27-8.87-4.56,0-9.11,1.76-12.71,4.48l-.32-9.19ZM226.36,54.26c3.27,0,5.83-1.44,7.51-3.68,1.76-2.32,2.24-5.27,2.24-8.47h-4.63c-4.8,0-11.91.8-11.91,7.11,0,3.52,2.96,5.04,6.79,5.04'/%3e%3cpath%20class='st2'%20d='M280.98,28.61c-3.28-1.12-5.67-1.76-9.59-1.76-2.88,0-6.31,1.04-6.31,4.56,0,6.56,18.62,2.4,18.62,17.27,0,9.59-8.55,13.43-17.27,13.43-4.08,0-8.23-.72-12.15-1.76l.64-8.79c3.36,1.68,6.87,2.72,10.55,2.72,2.72,0,7.03-1.04,7.03-5.04,0-8.07-18.62-2.56-18.62-17.42,0-8.87,7.75-12.79,16.14-12.79,5.03,0,8.31.8,11.67,1.52l-.72,8.07Z'/%3e%3cpath%20class='st2'%20d='M295.25,27.81h-7.91v-7.83h7.91v-8.23l10.71-3.44v11.67h9.51v7.83h-9.51v19.18c0,3.52.96,6.79,5.04,6.79,1.92,0,3.76-.4,4.88-1.12l.32,8.47c-2.24.64-4.72.96-7.91.96-8.39,0-13.03-5.2-13.03-13.35v-20.94Z'/%3e%3cpath%20class='st2'%20d='M355.22,58.82c-3.92,2.16-8.39,3.28-14.15,3.28-13.59,0-21.5-7.83-21.5-21.34,0-11.91,6.31-21.74,19.1-21.74,15.27,0,19.58,10.47,19.58,24.85h-28.45c.48,6.63,5.11,10.39,11.75,10.39,5.2,0,9.67-1.92,13.67-4.15v8.71ZM348.03,36.52c-.32-5.19-2.72-9.67-8.71-9.67s-9.03,4.16-9.51,9.67h18.22Z'/%3e%3cpath%20class='st2'%20d='M366.57,19.98h9.51v9.35h.16c.48-3.84,4.87-10.31,11.27-10.31,1.04,0,2.16,0,3.27.32v10.79c-.96-.56-2.88-.88-4.79-.88-8.71,0-8.71,10.87-8.71,16.78v15.11h-10.71V19.98Z'/%3e%3cpath%20class='st0'%20d='M229.73,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st0'%20d='M203.17,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M296.14,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M378.47,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st1'%20d='M269.57,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3cpath%20class='st3'%20d='M107.55,80.9c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64,2.97-6.64,6.64-6.64,6.64,2.97,6.64,6.64'/%3e%3crect%20class='st0'%20x='134.12'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3crect%20class='st1'%20x='309.42'%20y='75.59'%20width='42.5'%20height='10.62'/%3e%3c/svg%3e";let wa=I(null);function tl(t){f(wa,t,!0)}function Ft(){return e(wa)}var rl=P('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),nl=P('<img alt="CODE_ASTER" class="h-7 w-auto"/>'),al=P('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),sl=P('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function ol(t,r){Ae(r,!0);let a=j(()=>r.shownCases!==r.totalCases),n=I(!1);var s=sl(),i=B(s),o=C(i),l=C(o);{var d=k=>{var S=rl();Q(()=>we(S,"src",Ji)),u(k,S)},x=j(()=>{var k;return!Ft()||((k=Ft())==null?void 0:k.solver)==="code_saturne"}),w=k=>{var S=nl();Q(()=>we(S,"src",el)),u(k,S)},T=j(()=>{var k;return((k=Ft())==null?void 0:k.solver)==="code_aster"}),m=k=>{var S=al(),Z=C(S,!0);p(S),Q(re=>ee(Z,re),[()=>{var re;return(re=Ft())==null?void 0:re.solver}]),u(k,S)};Y(l,k=>{e(x)?k(d):e(T)?k(w,1):k(m,-1)})}p(o);var A=E(o,2),F=C(A),v=C(F),c=C(v);{var y=k=>{var S=Be();Q(()=>ee(S,`${r.shownCases??""}/`)),u(k,S)};Y(c,k=>{e(a)&&k(y)})}var R=E(c,1,!0);p(v);var g=E(v,2),b=C(g,!0);p(g),p(F);var $=E(F,2),_=C($),L=C(_);{var z=k=>{var S=Be();Q(()=>ee(S,`${r.shownRunning??""}/`)),u(k,S)};Y(L,k=>{e(a)&&k(z)})}var D=E(L,1,!0);p(_),ke(2),p($);var U=E($,2),H=C(U),O=C(H);{var V=k=>{var S=Be();Q(()=>ee(S,`${r.shownConverged??""}/`)),u(k,S)};Y(O,k=>{e(a)&&k(V)})}var q=E(O,1,!0);p(H),ke(2),p(U),p(A);var X=E(A,2),ae=C(X),N=C(ae);Te(N,{get icon(){return Xo},size:18}),p(ae),p(X),p(i);var M=E(i,2);{var h=k=>{Zi(k,{onClose:()=>f(n,!1)})};Y(M,k=>{e(n)&&k(h)})}Q(()=>{ee(R,r.totalCases),ee(b,r.totalCases===1?"case":"cases"),ee(D,r.totalRunning),ee(q,r.totalConverged)}),ie("click",ae,()=>f(n,!0)),u(t,s),Le()}We(["click"]);const il=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var ll=P('<div class="text-xs text-muted font-normal"> </div>'),cl=P('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),ul=P("<div><!> <!></div>"),dl=P('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),fl=P('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),vl=P('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function Ht(t,r){let a=he(r,"eyebrow",3,""),n=he(r,"title",3,""),s=he(r,"wide",3,!1);var i=vl(),o=E(C(i),2);{var l=x=>{var w=fl(),T=C(w);{var m=c=>{var y=_e(),R=B(y);ft(R,()=>r.titleSlot),u(c,y)},A=c=>{var y=ul(),R=C(y);{var g=_=>{var L=ll(),z=C(L,!0);p(L),Q(()=>ee(z,a())),u(_,L)};Y(R,_=>{a()&&_(g)})}var b=E(R,2);{var $=_=>{var L=cl(),z=C(L,!0);p(L),Q(()=>ee(z,n())),u(_,L)};Y(b,_=>{n()&&_($)})}p(y),u(c,y)};Y(T,c=>{r.titleSlot?c(m):c(A,-1)})}var F=E(T,2);{var v=c=>{var y=dl(),R=C(y);ft(R,()=>r.actions),p(y),u(c,y)};Y(F,c=>{r.actions&&c(v)})}p(w),u(x,w)};Y(o,x=>{(a()||n()||r.titleSlot||r.actions)&&x(l)})}var d=E(o,2);ft(d,()=>r.children),p(i),Q(()=>{Se(i,1,`${s()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),we(i,"id",r.id)}),u(t,i)}function rr(t,r){Ae(r,!0);let a=he(r,"checked",15,!0);Ne(()=>{a()?hr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),dr(()=>vt(r.name)),It(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Le()}var gl=P("<!> ",1),hl=P('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),pl=P('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),ml=P('<span class="inline-flex"><!></span> <!>',1);function _l(t,r){Ae(r,!0);let a=he(r,"label",3,"More"),n=I(!1),s=I(void 0),i=I(void 0),o=I("");function l(){if(!e(s)||!e(i))return;const c=e(s).getBoundingClientRect(),y=e(i).offsetHeight,R=4,g=window.innerHeight-c.bottom-R,$=g<y&&c.top-R>g?c.top-R-y:c.bottom+R,_=Math.min(c.left,window.innerWidth-180);f(o,`position:fixed; top:${$}px; left:${_}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Pt(),l())}function x(c){c.disabled||(f(n,!1),c.onClick())}function w(c){e(n)&&e(s)&&!e(s).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var T=ml();rt("mousedown",it,w),rt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),rt("scroll",it,()=>{e(n)&&f(n,!1)});var m=B(T),A=C(m);$e(A,{variant:"secondary",size:"sm",onclick:d,children:(c,y)=>{var R=gl(),g=B(R);Te(g,{get icon(){return Ho}});var b=E(g);Q(()=>ee(b,` ${a()??""}`)),u(c,R)},$$slots:{default:!0}}),p(m),nt(m,c=>f(s,c),()=>e(s));var F=E(m,2);{var v=c=>{Zt(c,{children:(y,R)=>{var g=pl();Ze(g,21,()=>r.items,b=>b.label,(b,$)=>{var _=hl(),L=C(_),z=C(L);Te(z,{get icon(){return e($).icon},size:14});var D=E(z);p(L),p(_),Q(()=>{L.disabled=e($).disabled,we(L,"aria-disabled",e($).disabled),Se(L,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e($).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ee(D,` ${e($).label??""}`)}),ie("mousedown",L,U=>{U.stopPropagation(),x(e($))}),u(b,_)}),p(g),nt(g,b=>f(i,b),()=>e(i)),Q(()=>Je(g,e(o))),u(y,g)}})};Y(F,c=>{e(n)&&c(v)})}u(t,T),Le()}We(["mousedown"]);const Dt=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"}];let Wt=I(oe([])),Mr=I(oe([])),pt=I(oe(new Set)),mr=I(""),mn=I(""),Et=I(oe([])),st=I(oe([])),Xt=I(""),ka=I(!0),bl=I(!0),qt=I(oe(pn("csauto_status_views",{}))),_n=I(oe(localStorage.getItem("csauto_status_view_selected")??""));function bn(){return e(Wt)}function xn(){return e(Mr)}function Ut(){return e(pt)}function jn(){return e(mr)}function tn(){return e(mn)}function xl(){return e(Et)}function yl(){return e(Et).filter(t=>e(Mr).includes(t))}function wl(){return e(Et).filter(t=>Dt.some(r=>r.key===t))}function kl(){return e(st)}function Cl(){return e(Xt)}function Sl(){return e(ka)}function Vn(){return e(qt)}function $l(){return e(_n)}function Pl(t){f(Wt,t,!0)}function El(t){const r=e(Mr).length===0&&t.length>0;f(Mr,t,!0),r&&e(Et).length===0&&f(Et,[...t,...Dt.map(a=>a.key)],!0)}function Rl(t){f(mr,t,!0)}function Un(t){f(Et,t,!0)}function Nl(t){f(Xt,t,!0)}function Ml(t){f(ka,t,!0)}function Al(t){f(bl,t,!0)}function yn(t){f(_n,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function rn(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(mr,t,!0),f(mn,t,!0)}function Ca(t){f(pt,new Set([t]),!0),f(mr,t,!0),f(mn,t,!0)}function nn(t,r,a){const n=a.indexOf(t),s=a.indexOf(r);if(n<0||s<0)return;const[i,o]=n<s?[n,s]:[s,n],l=new Set(e(pt));for(let d=i;d<=o;d++)l.add(a[d]);f(pt,l,!0),f(mr,r,!0)}function Bn(t){f(pt,new Set(t),!0)}function qn(){f(pt,new Set,!0)}function Ll(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function Sa(){if(!e(Xt).trim())return e(Wt);const t=e(Xt).toLowerCase().trim().split(/\s+/);return e(Wt).filter(r=>{const a=Ll(r);return t.every(n=>a.includes(n))})}function Tl(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Kn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Tl(a):""}function Fl(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function $a(){const t=Sa();return e(st).length===0?t:[...t].sort((r,a)=>{for(const n of e(st)){const s=Kn(r,n.key),i=Kn(a,n.key),o=Fl(s,i);if(o!==0)return n.dir==="asc"?o:-o}return 0})}function Pr(){return $a().map(t=>t.case_id)}function Dl(t,r){const a=e(st).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(st)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(st,n,!0)}else f(st,[...e(st),{key:t,dir:"asc"}],!0);else a>=0&&e(st).length===1?f(st,[{key:t,dir:e(st)[0].dir==="asc"?"desc":"asc"}],!0):f(st,[{key:t,dir:"asc"}],!0)}function zl(){return{visibleColumns:[...e(Et)],search:e(Xt),sorts:e(st).map(t=>({...t}))}}function Il(t){f(Et,[...t.visibleColumns],!0),f(Xt,t.search,!0),f(st,t.sorts.map(r=>({...r})),!0)}function Ol(t){f(qt,{...e(qt),[t]:zl()},!0),Ir("csauto_status_views",e(qt)),yn(t)}function Hl(t){const r={...e(qt)};delete r[t],f(qt,r,!0),Ir("csauto_status_views",r),e(_n)===t&&yn("")}function kr(){const t=new Set;for(const r of e(Wt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Gn(){for(const t of e(Wt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function jl(t,r){const a=r.length,n=t.length,s=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,o=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:s,shownRunning:i,totalConverged:o,shownConverged:l}}var Vl=P('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),Ul=P('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function Bl(t,r){Ae(r,!0);let a=he(r,"initialName",3,""),n=j(xn),s=I(oe(a())),i=I(oe(new Set(r.initialColumns??[...e(n),...Dt.map(V=>V.key)])));function o(V){const q=new Set(e(i));q.has(V)?q.delete(V):q.add(V),f(i,q,!0)}function l(V,q){const X=new Set(e(i));V.forEach(ae=>q?X.add(ae):X.delete(ae)),f(i,X,!0)}function d(){const V=e(s).trim();V&&r.onSave(V,[...e(i)])}function x(V){V.key==="Escape"&&r.onCancel()}function w(V){V.target.dataset.backdrop!==void 0&&r.onCancel()}let T=I(void 0);Ne(()=>{var V,q;(V=e(T))==null||V.focus(),(q=e(T))==null||q.select()});var m=Ul(),A=C(m),F=C(A),v=C(F,!0);p(F);var c=E(F,2),y=E(C(c),2);Qe(y),nt(y,V=>f(T,V),()=>e(T)),p(c);var R=E(c,2);{var g=V=>{var q=Vl(),X=C(q),ae=E(C(X),2),N=C(ae),M=E(N,2);p(ae),p(X);var h=E(X,2);Ze(h,20,()=>e(n),k=>k,(k,S)=>{{let Z=j(()=>e(i).has(S));It(k,{get checked(){return e(Z)},onchange:()=>o(S),size:14,get label(){return S}})}}),p(h),p(q),ie("click",N,()=>l(e(n),!0)),ie("click",M,()=>l(e(n),!1)),u(V,q)};Y(R,V=>{e(n).length>0&&V(g)})}var b=E(R,2),$=C(b),_=E(C($),2),L=C(_),z=E(L,2);p(_),p($);var D=E($,2);Ze(D,21,()=>Dt,V=>V.key,(V,q)=>{{let X=j(()=>e(i).has(e(q).key));It(V,{get checked(){return e(X)},onchange:()=>o(e(q).key),size:14,get label(){return e(q).label}})}}),p(D),p(b);var U=E(b,2),H=C(U);$e(H,{variant:"secondary",get onclick(){return r.onCancel},children:(V,q)=>{ke();var X=Be("Cancel");u(V,X)},$$slots:{default:!0}});var O=E(H,2);{let V=j(()=>!e(s).trim());$e(O,{variant:"primary",onclick:d,get disabled(){return e(V)},children:(q,X)=>{ke();var ae=Be("Save");u(q,ae)},$$slots:{default:!0}})}p(U),p(A),p(m),Q(()=>ee(v,r.mode==="create"?"New view":"Edit view")),ie("keydown",m,x),ie("click",m,w),tt(y,()=>e(s),V=>f(s,V)),ie("click",L,()=>l(Dt.map(V=>V.key),!0)),ie("click",z,()=>l(Dt.map(V=>V.key),!1)),u(t,m),Le()}We(["keydown","click"]);var ql=P('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function Kl(t,r){Ae(r,!0);let a=j(()=>Object.keys(Vn())),n=I(oe($l())),s=I(!1),i=I("create"),o=j(()=>[{value:"",label:"All columns"},...e(a).map($=>({value:$,label:$}))]);function l($){if(f(n,$,!0),yn($),$==="")Un([...xn(),...Dt.map(_=>_.key)]);else{const _=Vn();_[$]&&Il(_[$])}}function d(){f(i,"edit"),f(s,!0)}function x(){f(i,"create"),f(s,!0)}function w($,_){Un(_),e(i)==="edit"&&e(n)&&$!==e(n)&&Hl(e(n)),Ol($),f(n,$,!0),f(s,!1)}function T(){f(s,!1)}var m=ql(),A=B(m),F=C(A);lt(F,{class:"w-[140px]",get options(){return e(o)},get value(){return e(n)},onchange:l});var v=E(F,2),c=C(v);Te(c,{get icon(){return qo},size:14}),p(v);var y=E(v,2),R=C(y);Te(R,{get icon(){return Ko},size:14}),p(y),p(A);var g=E(A,2);{var b=$=>{Zt($,{children:(_,L)=>{{let z=j(()=>e(i)==="edit"?e(n):""),D=j(xl);Bl(_,{get mode(){return e(i)},get initialName(){return e(z)},get initialColumns(){return e(D)},onSave:w,onCancel:T})}}})};Y(g,$=>{e(s)&&$(b)})}ie("click",v,d),ie("click",y,x),u(t,m),Le()}We(["click"]);var Gl=P('<th><div class="flex items-center justify-center h-full"><!></div></th>'),Wl=P("<th></th>"),Xl=P('<span style="margin-left: 4px; font-size: 9px;"> </span>'),Yl=P('<th role="button" tabindex="0"> <!></th>'),Ql=P('<td><div class="flex items-center justify-center h-full"><!></div></td>'),Zl=P("<td><span> </span></td>"),Jl=P('<span class="text-muted"><!></span>'),ec=P('<td role="button" tabindex="0"><!></td>'),tc=P("<!> Open GUI",1),rc=P("<td><!></td>"),nc=P("<td> </td>"),ac=P("<tr></tr>"),sc=P('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function oc(t,r){Ae(r,!0);let a=j(()=>r.rows.length>0&&r.rows.every(N=>e(x).has(N.case_id))),n=j(()=>r.rows.some(N=>e(x).has(N.case_id))),s=j(()=>e(n)&&!e(a)),i=j(yl),o=j(()=>new Set(wl())),l=j(kl),d=j(Sl),x=j(Ut),w=j(()=>{const N=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(o).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],M=e(i).map(Z=>({key:Z,label:Z,kind:"doe"})),k=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"}].filter(Z=>e(o).has(Z.key)),S=[{key:"_actions",label:"",kind:"meta",sticky:"right"}];return[...N,...M,...k,...S]});function T(N){const M=e(l).findIndex(k=>k.key===N);if(M<0)return"";const h=e(l)[M].dir==="asc"?"▲":"▼";return e(l).length>1?`${h}${M+1}`:h}function m(N,M){N!=="_actions"&&Dl(N,M.ctrlKey||M.metaKey)}function A(N,M){M.shiftKey?nn(tn()||N,N,Pr()):M.ctrlKey||M.metaKey?rn(N):Ca(N)}function F(N,M){var k;const h=((k=N.status)==null?void 0:k.toUpperCase())??"";h!=="DONE"&&h!=="FAILED"||(M.preventDefault(),r.onContextMenu(N.case_id,M.clientX,M.clientY,N.convergence??""))}async function v(N){const M=N.note??"",h=await vn("Case note:",M,`Note — ${N.case_id}`,"",!0);if(h!==null)try{await _i(N.case_id,h)}catch(k){await Ye(`Failed to set note: ${k instanceof Error?k.message:k}`,"Error")}}async function c(N){try{await xi(N)}catch(M){await Ye(`Failed to open GUI: ${M instanceof Error?M.message:M}`,"Error")}}function y(N,M){const h=(N==null?void 0:N.toUpperCase())??"";return(h==="DONE"||h==="FAILED")&&M==="converged"?"CONVERGED":(h==="DONE"||h==="FAILED")&&M==="not_converged"?"NOT CONVERGED":h}function R(N,M){const h=(N==null?void 0:N.toUpperCase())??"";return(h==="DONE"||h==="FAILED")&&M==="converged"?"status-converged":(h==="DONE"||h==="FAILED")&&M==="not_converged"?"status-not-converged":h==="RUNNING"?"status-running":h==="DONE"?"status-done":h==="FAILED"?"status-failed":h==="PREPARED"?"status-prepared":"status-unknown"}function g(N){return e(x).has(N.case_id)?"row-selected":""}function b(N,M){var h;return M.key==="case_id"?N.case_id:M.key==="nprocs"?N.nprocs!=null?String(N.nprocs):"":M.key==="nt"?N.nt!=null?String(N.nt):"":M.key==="last_iter"?N.last_iter!=null?String(N.last_iter):"":M.key==="duration"?N.duration??"":M.key==="last_mod"?$(N.last_mod):M.key==="resu_size_mb"?N.resu_size_mb!=null?String(N.resu_size_mb):"":M.kind==="doe"?((h=N.doe)==null?void 0:h[M.key])!=null&&String(N.doe[M.key])!==""?String(N.doe[M.key]):"—":""}function $(N){if(!N)return"";try{const M=new Date(N),h=new Date,k=M.toDateString()===h.toDateString(),S=new Date(h);S.setDate(S.getDate()-1);const Z=M.toDateString()===S.toDateString(),re=M.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return k?`Today ${re}`:Z?`Yesterday ${re}`:M.toLocaleDateString([],{month:"short",day:"numeric"})+` ${re}`}catch{return N}}let _=I(oe({})),L=I(void 0);Ne(()=>{e(d),e(w),r.rows,!(!e(L)||!e(d))&&Pt().then(()=>{if(!e(L))return;const N=Array.from(e(L).querySelectorAll("thead th.sticky-left")),M={};let h=0;N.forEach(k=>{const S=k.dataset.colKey??"";M[S]=h,h+=k.getBoundingClientRect().width}),f(_,M,!0)})});function z(N,M,h){const k=h&&N.key!=="_select"&&N.key!=="_actions"?["status-sortable"]:[];if(!h&&N.key==="case_id"&&k.push("case-id"),N.kind==="doe"&&k.push("status-col-doe"),!h&&N.key==="note"&&k.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&N.sticky==="left"&&k.push("sticky-left"),e(d)&&N.sticky==="right"&&k.push("sticky-right"),e(d)&&N.sticky==="left"){const S=e(w)[M+1];(!S||S.sticky!=="left")&&k.push("sticky-divider")}if(e(d)&&N.sticky==="right"){const S=e(w)[M-1];(!S||S.sticky!=="right")&&k.push("sticky-divider")}return k.join(" ")}function D(N,M){return z(N,M,!0)}function U(N,M){return z(N,M,!1)}function H(N){return!e(d)||!N.sticky?"":N.sticky==="right"?"position:sticky;right:0;":N.sticky==="left"&&N.key in e(_)?`position:sticky;left:${e(_)[N.key]}px;`:""}var O=sc(),V=C(O),q=C(V),X=C(q);Ze(X,23,()=>e(w),N=>N.key,(N,M,h)=>{var k=_e(),S=B(k);{var Z=le=>{var K=Gl(),ne=C(K),se=C(ne);It(se,{get checked(){return e(a)},get indeterminate(){return e(s)},get onchange(){return r.onToggleAll},size:14}),p(ne),p(K),Q((ue,de)=>{Se(K,1,`${ue??""} !px-2.5 !py-0 w-9`),we(K,"data-col-key",e(M).key),Je(K,de)},[()=>D(e(M),e(h)),()=>H(e(M))]),u(le,K)},re=le=>{var K=Wl();Q((ne,se)=>{Se(K,1,ne),we(K,"data-col-key",e(M).key),Je(K,se)},[()=>dt(D(e(M),e(h))),()=>H(e(M))]),u(le,K)},ge=le=>{var K=Yl(),ne=C(K),se=E(ne);{var ue=J=>{var be=Xl(),fe=C(be,!0);p(be),Q(Pe=>ee(fe,Pe),[()=>T(e(M).key)]),u(J,be)},de=j(()=>T(e(M).key));Y(se,J=>{e(de)&&J(ue)})}p(K),Q((J,be)=>{Se(K,1,J),we(K,"data-col-key",e(M).key),Je(K,be),ee(ne,`${e(M).label??""} `)},[()=>dt(D(e(M),e(h))),()=>H(e(M))]),ie("click",K,J=>m(e(M).key,J)),ie("keydown",K,J=>{(J.key==="Enter"||J.key===" ")&&(J.preventDefault(),m(e(M).key,J))}),u(le,K)};Y(S,le=>{e(M).key==="_select"?le(Z):e(M).key==="_actions"?le(re,1):le(ge,-1)})}u(N,k)}),p(X),p(q);var ae=E(q);Ze(ae,21,()=>r.rows,N=>N.case_id,(N,M)=>{var h=ac();Ze(h,23,()=>e(w),k=>k.key,(k,S,Z)=>{var re=_e(),ge=B(re);{var le=de=>{var J=Ql(),be=C(J),fe=C(be);{let Pe=j(()=>e(x).has(e(M).case_id));It(fe,{get checked(){return e(Pe)},onchange:()=>r.onToggleRow(e(M).case_id),size:14})}p(be),p(J),Q((Pe,ve)=>{Se(J,1,`${Pe??""} !px-2.5 !py-0 w-9`),we(J,"data-col-key",e(S).key),Je(J,ve)},[()=>U(e(S),e(Z)),()=>H(e(S))]),u(de,J)},K=de=>{var J=Zl(),be=C(J),fe=C(be,!0);p(be),p(J),Q((Pe,ve,ze,pe)=>{Se(J,1,Pe),we(J,"data-col-key",e(S).key),Je(J,ve),Se(be,1,`status-pill ${ze??""}`),ee(fe,pe)},[()=>dt(U(e(S),e(Z))),()=>H(e(S)),()=>R(e(M).status,e(M).convergence),()=>y(e(M).status,e(M).convergence)]),u(de,J)},ne=de=>{var J=ec(),be=C(J);{var fe=ve=>{var ze=Be();Q(()=>ee(ze,e(M).note)),u(ve,ze)},Pe=ve=>{var ze=Jl(),pe=C(ze);Te(pe,{get icon(){return Bo},size:12}),p(ze),u(ve,ze)};Y(be,ve=>{e(M).note?ve(fe):ve(Pe,-1)})}p(J),Q((ve,ze)=>{Se(J,1,ve),we(J,"data-col-key",e(S).key),Je(J,ze),we(J,"title",e(M).note||"Add note")},[()=>dt(U(e(S),e(Z))),()=>H(e(S))]),ie("click",J,ve=>{ve.stopPropagation(),v(e(M))}),ie("keydown",J,ve=>{(ve.key==="Enter"||ve.key===" ")&&(ve.preventDefault(),ve.stopPropagation(),v(e(M)))}),u(de,J)},se=de=>{var J=rc(),be=C(J);$e(be,{variant:"primary",size:"sm",onclick:fe=>{fe.stopPropagation(),c(e(M).case_id)},children:(fe,Pe)=>{var ve=tc(),ze=B(ve);Te(ze,{get icon(){return jo},size:12}),ke(),u(fe,ve)},$$slots:{default:!0}}),p(J),Q((fe,Pe)=>{Se(J,1,fe),we(J,"data-col-key",e(S).key),Je(J,Pe)},[()=>dt(U(e(S),e(Z))),()=>H(e(S))]),u(de,J)},ue=de=>{var J=nc(),be=C(J,!0);p(J),Q((fe,Pe,ve)=>{Se(J,1,fe),we(J,"data-col-key",e(S).key),Je(J,Pe),ee(be,ve)},[()=>dt(U(e(S),e(Z))),()=>H(e(S)),()=>b(e(M),e(S))]),u(de,J)};Y(ge,de=>{e(S).key==="_select"?de(le):e(S).key==="status"?de(K,1):e(S).key==="note"?de(ne,2):e(S).key==="_actions"?de(se,3):de(ue,-1)})}u(k,re)}),p(h),Q(k=>Se(h,1,k),[()=>dt(g(e(M)))]),ie("click",h,k=>A(e(M).case_id,k)),ie("contextmenu",h,k=>F(e(M),k)),u(N,h)}),p(ae),p(V),nt(V,N=>f(L,N),()=>e(L)),p(O),Q(()=>Se(O,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,O),Le()}We(["click","keydown","contextmenu"]);var ic=P('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function lc(t,r){Ae(r,!0);let a=j(()=>{const m=Math.min(r.x,window.innerWidth-180),A=Math.min(r.y,window.innerHeight-120);return`left: ${m}px; top: ${A}px;`});async function n(m){try{for(const A of r.cases)await bi(A,m)}catch(A){console.error("Failed to set convergence:",A)}r.onClose()}const s=r.cases.length>1?` (${r.cases.length})`:"";var i=ic();rt("keydown",it,m=>{m.key==="Escape"&&r.onClose()});var o=C(i),l=C(o);p(o);var d=E(o,2),x=C(d);p(d);var w=E(d,2),T=C(w);p(w),p(i),Q(()=>{Je(i,e(a)),Se(o,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ee(l,`Mark Converged${s}`),Se(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ee(x,`Mark Not Converged${s}`),Se(w,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ee(T,`Clear Mark${s}`)}),ie("click",o,()=>n("converged")),ie("click",d,()=>n("not_converged")),ie("click",w,()=>n("")),u(t,i),Le()}We(["click"]);var cc=P("<!> Refresh",1),uc=P("<!> <!>",1),dc=P("<!> Run",1),fc=P("<!> Restart",1),vc=P("<!> Stop",1),gc=P("<!> Kill",1),hc=P("<!> Clean",1),pc=P('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),mc=P('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function _c(t,r){Ae(r,!0);function a(){return[...Ut()]}async function n(){const h=a();if(!h.length)return;const k=await Ws(h);if(k)try{await zn({cases:h,n:k.n,nt:k.nt,maxParallel:k.maxParallel}),r.onRefresh()}catch(S){await Ye(`Run failed: ${S instanceof Error?S.message:S}`,"Error")}}async function s(){const h=a();if(!h.length)return;const k=await Xs(h);if(k)try{await zn({cases:h,n:k.n,nt:k.nt,maxParallel:k.maxParallel,restart:!0,restartMode:k.restartMode,restartValue:k.restartValue}),r.onRefresh()}catch(S){await Ye(`Restart failed: ${S instanceof Error?S.message:S}`,"Error")}}async function i(){const h=a();if(!(!h.length||!await Tn(`Kill ${h.length} case${h.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await pi(h),r.onRefresh()}catch(S){await Ye(`Kill failed: ${S instanceof Error?S.message:S}`,"Error")}}async function o(){const h=a();if(!(!h.length||!await Tn(`Stop ${h.length} case${h.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await yr({cases:h,action:"stop"}),r.onRefresh(),wr(`Stop requested for ${h.length} case${h.length>1?"s":""} — will checkpoint and exit`)}catch(S){await Ye(`Stop failed: ${S instanceof Error?S.message:S}`,"Error")}}async function l(){const h=a();if(h.length)try{await yr({cases:h,action:"checkpoint"}),r.onRefresh(),wr(`Checkpoint requested for ${h.length} case${h.length>1?"s":""}`)}catch(k){await Ye(`Checkpoint failed: ${k instanceof Error?k.message:k}`,"Error")}}async function d(){const h=a();if(!h.length)return;const k=await vn("Extend by how many additional time steps?","500","Extend Run");if(k===null)return;const S=parseInt(k,10);if(!Number.isFinite(S)||S<=0){await Ye("Enter a positive integer number of time steps.","Error");return}try{await yr({cases:h,action:"extend",value:S}),r.onRefresh(),wr(`Extended ${h.length} case${h.length>1?"s":""} by ${S} time steps`)}catch(Z){await Ye(`Extend failed: ${Z instanceof Error?Z.message:Z}`,"Error")}}async function x(){const h=a();if(h.length)try{await yr({cases:h,action:"flush"}),wr(`Flush requested for ${h.length} case${h.length>1?"s":""}`)}catch(k){await Ye(`Flush failed: ${k instanceof Error?k.message:k}`,"Error")}}async function w(){const h=a();if(!h.length)return;const k=await Ys(h);if(k)try{await mi({cases:h,keepLast:k.keepLast,keepResu:k.keepResu,deleteResu:k.deleteResu,pruneResu:!0}),r.onRefresh(),Gi()}catch(S){await Ye(`Cleanup failed: ${S instanceof Error?S.message:S}`,"Error")}}function T(){const h=Pr();h.length>0&&h.every(S=>Ut().has(S))?qn():Bn(h)}function m(h){rn(h)}let A=I(oe(er("status")));Ne(()=>{tr("status",e(A))}),Ml(!0);let F=j(()=>{const h=kr();return h.size>0&&[...h].some(k=>k==="PREPARED"||k==="DONE"||k==="FAILED")}),v=j(()=>{const h=kr();return h.size>0&&[...h].some(k=>k==="DONE"||k==="FAILED")&&Gn()}),c=j(()=>{const h=kr();return h.size>0&&h.has("RUNNING")}),y=j(()=>{const h=kr();return h.size>0&&h.has("RUNNING")}),R=j(Gn),g=I(oe(Cl())),b=null;function $(){b&&clearTimeout(b),b=setTimeout(()=>{Nl(e(g))},200)}Ne(()=>Al(e(A)));let _=I(!1),L=I(0),z=I(0),D=I(oe([])),U=I("");function H(h,k,S,Z){f(D,Ut().has(h)?[...Ut()]:[h],!0),f(U,Z,!0),f(L,k,!0),f(z,S,!0),f(_,!0)}function O(){f(_,!1)}function V(h){const k=Pr();if(k.length){if(h.key==="Escape"){qn(),O();return}if((h.ctrlKey||h.metaKey)&&h.key==="a"){h.preventDefault(),Bn(k);return}if(h.key==="ArrowDown"||h.key==="ArrowUp"){h.preventDefault();const S=h.key==="ArrowDown"?1:-1,Z=jn(),re=k.indexOf(Z),ge=Math.max(0,Math.min(k.length-1,re+S)),le=k[ge];h.shiftKey?nn(tn()||k[0],le,k):Ca(le),Rl(le);return}if(h.key===" "){h.preventDefault();const S=jn();S&&(h.shiftKey?nn(tn()||S,S,Pr()):rn(S))}}}var q=mc();rt("click",it,O),rt("scroll",it,O);var X=B(q),ae=C(X);Ht(ae,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:k=>{var S=uc(),Z=B(S);{let le=j(qi);rr(Z,{name:"status",get intervalMs(){return e(le)},get onRefresh(){return r.onRefresh},get checked(){return e(A)},set checked(K){f(A,K,!0)}})}var re=E(Z,2);{var ge=le=>{$e(le,{variant:"primary",onclick:()=>r.onRefresh(),children:(K,ne)=>{var se=cc(),ue=B(se);Te(ue,{get icon(){return Jt}}),ke(),u(K,se)},$$slots:{default:!0}})};Y(re,le=>{e(A)||le(ge)})}u(k,S)},children:(k,S)=>{var Z=pc(),re=B(Z),ge=C(re),le=C(ge);Qe(le);var K=E(le,2);Kl(K,{}),p(ge);var ne=E(ge,2),se=C(ne),ue=C(se);p(se);var de=E(se,2);{let pe=j(()=>!e(F));$e(de,{variant:"run",size:"sm",onclick:n,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=dc(),ye=B(Fe);Te(ye,{get icon(){return pa}}),ke(),u(Oe,Fe)},$$slots:{default:!0}})}var J=E(de,2);{let pe=j(()=>!e(v));$e(J,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=fc(),ye=B(Fe);Te(ye,{get icon(){return Go}}),ke(),u(Oe,Fe)},$$slots:{default:!0}})}var be=E(J,2);{let pe=j(()=>!e(y));$e(be,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=vc(),ye=B(Fe);Te(ye,{get icon(){return zo}}),ke(),u(Oe,Fe)},$$slots:{default:!0}})}var fe=E(be,2);{let pe=j(()=>[{label:"Extend",icon:Vo,onClick:d,disabled:!e(y)},{label:"Checkpoint",icon:Wo,onClick:l,disabled:!e(y)},{label:"Flush",icon:Oo,onClick:x,disabled:!e(y)}]);_l(fe,{get items(){return e(pe)}})}var Pe=E(fe,2);{let pe=j(()=>!e(c));$e(Pe,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=gc(),ye=B(Fe);Te(ye,{get icon(){return Io}}),ke(),u(Oe,Fe)},$$slots:{default:!0}})}var ve=E(Pe,2);{let pe=j(()=>!e(R));$e(ve,{variant:"secondary",size:"sm",onclick:w,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=hc(),ye=B(Fe);Te(ye,{get icon(){return Yo}}),ke(),u(Oe,Fe)},$$slots:{default:!0}})}p(ne),p(re);var ze=E(re,2);{let pe=j($a);oc(ze,{get rows(){return e(pe)},onContextMenu:H,onToggleAll:T,onToggleRow:m})}Q(pe=>ee(ue,`${pe??""} selected`),[()=>Ut().size]),ie("input",le,$),tt(le,()=>e(g),pe=>f(g,pe)),u(k,Z)},$$slots:{actions:!0,default:!0}}),p(X);var N=E(X,2);{var M=h=>{lc(h,{get cases(){return e(D)},get x(){return e(L)},get y(){return e(z)},get currentValue(){return e(U)},onClose:O})};Y(N,h=>{e(_)&&h(M)})}ie("keydown",X,V),u(t,q),Le()}We(["keydown","input"]);var bc=P('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Yt(t,r){var a=bc(),n=C(a);ft(n,()=>r.children),p(a),u(t,a)}function wn(t){return t.map(r=>({value:r,label:r}))}var xc=P('<input type="number" step="any" class="w-[110px]"/>'),yc=P("<!> <!> <!> <!> <!> <!>",1);function kn(t,r){Ae(r,!0);let a=he(r,"columnLabel",3,"Columns"),n=he(r,"xMinLabel",3,"Iter min"),s=j(()=>wn(r.allCases)),i=j(()=>r.columns.map(d=>({value:d,label:d}))),o=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Yt(t,{children:(d,x)=>{var w=yc(),T=B(w);Me(T,{text:"Cases",children:(b,$)=>{Gt(b,{class:"w-[160px]",get options(){return e(s)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var m=E(T,2);{var A=b=>{var $=_e(),_=B($);ft(_,()=>r.middleSlot),u(b,$)};Y(m,b=>{r.middleSlot&&b(A)})}var F=E(m,2);Me(F,{get text(){return a()},children:(b,$)=>{Gt(b,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var v=E(F,2);Me(v,{text:"Start from",children:(b,$)=>{lt(b,{class:"w-[140px]",get options(){return o},get value(){return r.startFrom},onchange:_=>r.onStartFromChange(_)})}});var c=E(v,2);{var y=b=>{Me(b,{get text(){return n()},children:($,_)=>{var L=xc();Qe(L),Q(()=>dn(L,r.xMin)),ie("input",L,l),u($,L)}})};Y(c,b=>{r.startFrom==="custom"&&b(y)})}var R=E(c,2);{var g=b=>{var $=_e(),_=B($);ft(_,()=>r.extraSlot),u(b,$)};Y(R,b=>{r.extraSlot&&b(g)})}u(d,w)}}),Le()}We(["input"]);var wc=P('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),kc=P('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Qt(t,r){let a=he(r,"emptyMessage",3,"");var n=kc(),s=C(n);{var i=l=>{var d=_e(),x=B(d);Fr(x,()=>r.svgHtml),u(l,d)},o=l=>{var d=wc(),x=C(d),w=C(x,!0);p(x),p(d),Q(()=>ee(w,a()||"No data to display.")),u(l,d)};Y(s,l=>{r.svgHtml?l(i):l(o,-1)})}p(n),Q(()=>we(n,"id",r.id)),u(t,n)}async function Cn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:s,height:i}=Cc(n),o=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=s*o,l.height=i*o;const d=l.getContext("2d");if(!d)return;d.scale(o,o);const x=new XMLSerializer().serializeToString(n),w=new Blob([x],{type:"image/svg+xml;charset=utf-8"}),T=URL.createObjectURL(w),m=new Image;m.width=s,m.height=i,await new Promise((F,v)=>{m.onload=()=>{d.drawImage(m,0,0,s,i),URL.revokeObjectURL(T),F()},m.onerror=v,m.src=T});const A=await new Promise(F=>l.toBlob(F,"image/png"));A&&await Ea(A,Sc(r))}function _r(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,s=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return $c(`${t}_${n}_${s}.${a}`)}async function Pa(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Ea(a,r)}function Cc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Ea(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(s){if((s==null?void 0:s.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function Sc(t){return t.endsWith(".png")?t:`${t}.png`}function $c(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Ra=I(oe([])),Na=I(oe([])),Ma=I(oe([])),Aa=I("zero"),La=I(0),Ta=I(""),Pc=I(!0);function Ec(){return{selectedCases:e(Ra),columns:e(Na),selectedColumns:e(Ma),startFrom:e(Aa),iterMin:e(La),svgHtml:e(Ta),autoRefresh:e(Pc)}}function Wn(t){f(Ra,t,!0)}function Rc(t){f(Na,t,!0)}function Gr(t){f(Ma,t,!0)}function Nc(t){f(Aa,t,!0)}function Mc(t){f(La,t,!0)}function Cr(t){f(Ta,t,!0)}var Ac=P("<!> Refresh",1),Lc=P("<!> <!>",1),Tc=P("<!> Download as PNG",1),Fc=P('<div class="self-end ml-auto"><!></div>'),Dc=P('<!> <div class="flex justify-center"><!></div>',1),zc=P('<div class="flex justify-center"><!></div>'),Ic=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Oc=P("<!> <!>",1);function Hc(t,r){Ae(r,!0);let a=j(Ec),n=I("");const s=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function o(){if(e(a).selectedCases.length)try{const v=await oi(e(a).selectedCases);f(n,"");const c=v.filter(y=>!s.has(y.toLowerCase().replace(/\s+/g,"_")));if(Rc(c),c.length===0){Gr([]),Cr("");return}if(e(a).selectedColumns.length===0){const y=c.filter(R=>i.some(g=>R.toLowerCase().includes(g)));Gr(y.length>0?y:[c[0]])}}catch(v){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",v)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await o(),!e(a).selectedColumns.length)))try{let v=0,c=!0;if(e(a).startFrom==="restart"){const R=await xa(e(a).selectedCases),g=Object.values(R.origins).map(b=>b.iteration).filter(b=>b!==void 0&&Number.isFinite(b));v=g.length>0?Math.min(...g):0}else e(a).startFrom==="custom"&&(v=e(a).iterMin);const y=await ii(e(a).selectedCases,e(a).selectedColumns,{xMin:v,includeHistory:c});f(n,""),y&&Cr(y)}catch(v){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",v)}}function d(v){if(Wn(v),v.length===0){Cr("");return}o(),l()}function x(v){if(Gr(v),v.length===0){Cr("");return}l()}function w(v){Nc(v),l()}function T(v){Mc(v),l()}let m=I(oe(er("plot")));Ne(()=>{tr("plot",e(m))}),Ne(()=>{e(m)?hr("residualPlot",l,On()):vt("residualPlot")});let A=!1;Ne(()=>{r.allCases.length>0&&!A&&(A=!0,Wn([...r.allCases]),o().then(()=>l()))});const F=pr(()=>{A&&o().then(()=>l())});dr(()=>{vt("residualPlot"),F()}),Ht(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var y=Lc(),R=B(y);{let $=j(On);rr(R,{name:"residualPlot",get intervalMs(){return e($)},onRefresh:l,get checked(){return e(m)},set checked(_){f(m,_,!0)}})}var g=E(R,2);{var b=$=>{$e($,{variant:"primary",onclick:l,children:(_,L)=>{var z=Ac(),D=B(z);Te(D,{get icon(){return Jt}}),ke(),u(_,z)},$$slots:{default:!0}})};Y(g,$=>{e(m)||$(b)})}u(c,y)},children:(c,y)=>{var R=Oc(),g=B(R);{var b=z=>{const D=q=>{var X=Fc(),ae=C(X);{let N=j(()=>!e(a).svgHtml);$e(ae,{variant:"secondary",size:"sm",onclick:()=>Cn("plot-holder",_r("residuals",e(a).selectedCases)),get disabled(){return e(N)},children:(M,h)=>{var k=Tc(),S=B(k);Te(S,{get icon(){return gr}}),ke(),u(M,k)},$$slots:{default:!0}})}p(X),u(q,X)};var U=Dc(),H=B(U);kn(H,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:x,get startFrom(){return e(a).startFrom},onStartFromChange:w,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:T,get extraSlot(){return D}});var O=E(H,2),V=C(O);{let q=j(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Qt(V,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(q)}})}p(O),u(z,U)},$=z=>{var D=zc(),U=C(D);Qt(U,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),p(D),u(z,D)};Y(g,z=>{e(a).columns.length>0?z(b):z($,-1)})}var _=E(g,2);{var L=z=>{var D=Ic(),U=C(D,!0);p(D),Q(()=>ee(U,e(n))),u(z,D)};Y(_,z=>{e(n)&&z(L)})}u(c,R)},$$slots:{actions:!0,default:!0}}),Le()}function Fa(t){const{scope:r,getState:a,setState:n,setHasData:s,getAxis:i}=t;async function o(){const m=a();if(m.selectedCases.length)try{let A=await Qr(m.selectedCases,r);if(t.filterFiles&&(A=t.filterFiles(A)),n({files:A}),s(A.length>0),A.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!m.file||!A.includes(m.file))&&(n({file:A[0]}),await l())}catch(A){console.error(`Failed to load ${r} files:`,A)}}async function l(){const m=a();if(!(!m.selectedCases.length||!m.file))try{const A=await fi(m.selectedCases,[m.file]),F=t.filterColumns?t.filterColumns(A):A;t.onColumnsLoaded?t.onColumnsLoaded(A):n({columns:F});const v=a();if(v.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}v.selectedColumns.length===0&&n({selectedColumns:[v.columns[0]]})}catch(A){console.error(`Failed to load ${r} columns:`,A)}}async function d(){let m=a();if(m.selectedCases.length){if(await o(),m=a(),!m.file){n({positionText:"",svgHtml:""});return}if((m.columns.length===0||m.selectedColumns.length===0)&&(await l(),m=a(),!m.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let A;const F=a();if(F.startFrom==="restart"){const c=await xa(F.selectedCases),y=i().toLowerCase(),R=y==="t"||y==="time"?"time":"iteration",g=Object.values(c.origins).map(b=>b[R]).filter(b=>b!==void 0&&Number.isFinite(b));A=g.length>0?Math.min(...g):void 0}else F.startFrom==="custom"&&(A=F.xMin);const v=await gi({cases:F.selectedCases,probes:[F.file],columns:F.selectedColumns,axis:i(),timeMin:typeof A=="number"?A:void 0,xMin:A,includeHistory:!0});v&&n({svgHtml:v})}catch(A){console.error(`Failed to load ${r} plot:`,A)}}}async function x(m){if(n({selectedCases:m}),m.length===0){n({svgHtml:""});return}await o(),r==="monitoring"&&await d()}function w(m){if(n({selectedColumns:m}),m.length===0){n({svgHtml:""});return}d()}async function T(m){n({file:m}),await l(),await d()}return{loadFiles:o,loadColumns:l,loadPlot:d,handleCasesChange:x,handleColumnsChange:w,handleFileChange:T}}function Da(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let Bt=I("time"),an=I(oe(Da())),sn=I(oe({...Da(),axis:""})),jc=I(!0),Ar=I(!1),Lr=I(!1);function Vc(){return e(Bt)}function Uc(t){f(Bt,t,!0)}function Bc(){return e(Ar)}function on(t){f(Ar,t,!0)}function qc(){return e(Lr)}function ln(t){f(Lr,t,!0)}function Kc(){e(Bt)==="time"&&!e(Ar)&&e(Lr)?f(Bt,"profile"):e(Bt)==="profile"&&!e(Lr)&&e(Ar)&&f(Bt,"time")}function Xn(){return e(an)}function Wr(){return e(sn)}function kt(t){f(an,{...e(an),...t},!0)}function At(t){f(sn,{...e(sn),...t},!0)}function Gc(){return e(jc)}var Wc=P("<!> Download as PNG",1),Xc=P('<div class="self-end ml-auto"><!></div>'),Yc=P("<div> </div>"),Qc=P('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),Zc=P('<!>  <!> <div class="flex justify-center"><!></div>',1),Jc=P('<div class="flex justify-center"><!></div>');function eu(t,r){Ae(r,!0);let a=he(r,"onRefresh",15),n=j(Xn);const s=new Set(["time","t","iteration","iter"]),i=Fa({scope:"monitoring",getState:Xn,setState:kt,setHasData:on,filterFiles:v=>v.filter(c=>{const y=c.replace(/\.csv$/i,"").toLowerCase();return y!=="coords"&&!y.includes("coordinates")}),filterColumns:v=>v.filter(c=>!s.has(c.toLowerCase())),onColumnsLoaded:v=>{const c=v.filter(y=>!s.has(y.toLowerCase()));kt({columns:c}),o()},getAxis:()=>"time"});async function o(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const v=[];for(const $ of e(n).selectedColumns){const _=await vi(e(n).selectedCases[0],e(n).file,[$]);_.found&&v.push({col:$,x:_.x,y:_.y,z:_.z})}if(!v.length){kt({positionText:""});return}const c=$=>{let _=0;for(const L of $){if(L===void 0)continue;const z=String(L),D=z.indexOf(".");D>=0&&(_=Math.max(_,z.length-D-1))}return _},y=c(v.map($=>$.x)),R=c(v.map($=>$.y)),g=c(v.map($=>$.z)),b=v.map($=>{const _=[];return $.x!==void 0&&_.push(`x=${$.x.toFixed(y)}`),$.y!==void 0&&_.push(`y=${$.y.toFixed(R)}`),$.z!==void 0&&_.push(`z=${$.z.toFixed(g)}`),`Probe position [${$.col}] : ${_.join(" · ")}`});kt({positionText:b.join(`
`)})}catch{kt({positionText:""})}}function l(v){i.handleColumnsChange(v),v.length>0&&o()}let d=j(()=>e(n).files.map(v=>({value:v,label:v.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),x=!1;Ne(()=>{r.allCases.length>0&&!x&&(x=!0,kt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let w=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var T=_e(),m=B(T);{var A=v=>{const c=z=>{Me(z,{text:"Quantity",children:(D,U)=>{lt(D,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},y=z=>{var D=Xc(),U=C(D);{let H=j(()=>!e(n).svgHtml);$e(U,{variant:"secondary",size:"sm",onclick:()=>Cn("probe-plot-holder",_r("probe",e(n).selectedCases)),get disabled(){return e(H)},children:(O,V)=>{var q=Wc(),X=B(q);Te(X,{get icon(){return gr}}),ke(),u(O,q)},$$slots:{default:!0}})}p(D),u(z,D)};var R=Zc(),g=B(R);kn(g,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:z=>{kt({startFrom:z}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:z=>{kt({xMin:z}),i.loadPlot()},get extraSlot(){return y}});var b=E(g,2);{var $=z=>{var D=Qc();Ze(D,21,()=>e(n).positionText.split(`
`).sort(),un,(U,H)=>{var O=Yc(),V=C(O,!0);p(O),Q(()=>ee(V,e(H))),u(U,O)}),p(D),u(z,D)};Y(b,z=>{e(n).positionText&&z($)})}var _=E(b,2),L=C(_);Qt(L,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(w)}}),p(_),u(v,R)},F=v=>{var c=Jc(),y=C(c);Qt(y,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),p(c),u(v,c)};Y(m,v=>{e(n).files.length>0?v(A):v(F,-1)})}u(t,T),Le()}var tu=P("<!> <!>",1),ru=P("<!> Download as PNG",1),nu=P('<div class="self-end ml-auto"><!></div>'),au=P('<!>  <div class="flex justify-center"><!></div>',1),su=P('<div class="flex justify-center"><!></div>');function ou(t,r){Ae(r,!0);let a=he(r,"onRefresh",15),n=j(Wr);const s=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const y=c.map(R=>R.toLowerCase());for(const R of s){const g=y.indexOf(R);if(g>=0)return c[g]}return c[0]??""}const o=Fa({scope:"profiles",getState:Wr,setState:At,setHasData:ln,onColumnsLoaded:c=>{const y=e(n).axis||i(c),R=c.filter(g=>g!==y).toSorted((g,b)=>g.localeCompare(b));At({columns:R,axis:y,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:R.length?[R[0]]:[]})},getAxis:()=>Wr().axis});function l(c){const y=e(n).axis;At({axis:c});const g=[...e(n).columns,...y?[y]:[]].filter(b=>b!==c).toSorted((b,$)=>b.localeCompare($));At({columns:g}),o.loadPlot()}let d=j(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),x=j(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,y)=>c.localeCompare(y)).map(c=>({value:c,label:c}))),w=!1;Ne(()=>{r.allCases.length>0&&!w&&(w=!0,At({selectedCases:[...r.allCases]}),o.loadFiles().then(()=>o.loadPlot()))}),Ne(()=>{a(o.loadPlot)});let T=j(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var m=_e(),A=B(m);{var F=c=>{const y=L=>{var z=tu(),D=B(z);Me(D,{text:"Profile",children:(H,O)=>{lt(H,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return o.handleFileChange}})}});var U=E(D,2);Me(U,{text:"X axis",children:(H,O)=>{lt(H,{class:"w-[140px]",get options(){return e(x)},get value(){return e(n).axis},onchange:l})}}),u(L,z)},R=L=>{var z=nu(),D=C(z);{let U=j(()=>!e(n).svgHtml);$e(D,{variant:"secondary",size:"sm",onclick:()=>Cn("profile-plot-holder",_r("profile",e(n).selectedCases)),get disabled(){return e(U)},children:(H,O)=>{var V=ru(),q=B(V);Te(q,{get icon(){return gr}}),ke(),u(H,V)},$$slots:{default:!0}})}p(z),u(L,z)};var g=au(),b=B(g);kn(b,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return o.handleCasesChange},get middleSlot(){return y},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return o.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:L=>{At({startFrom:L}),o.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:L=>{At({xMin:L}),o.loadPlot()},get extraSlot(){return R}});var $=E(b,2),_=C($);Qt(_,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(T)}}),p($),u(c,g)},v=c=>{var y=su(),R=C(y);Qt(R,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),p(y),u(c,y)};Y(A,c=>{e(n).files.length>0?c(F):c(v,-1)})}u(t,m),Le()}var iu=P('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),lu=P("<!> Refresh",1),cu=P("<!> <!>",1);function uu(t,r){Ae(r,!0);let a=j(Vc),n=j(Gc),s=j(Bc),i=j(qc),o=I(oe(er("probe")));Ne(()=>{tr("probe",e(o))});let l=I(void 0);function d(){var F;(F=e(l))==null||F()}async function x(){if(r.allCases.length){try{const v=(await Qr(r.allCases,"monitoring")).filter(c=>{const y=c.replace(/\.csv$/i,"").toLowerCase();return y!=="coords"&&!y.includes("coordinates")});on(v.length>0)}catch{on(!1)}try{const F=await Qr(r.allCases,"profiles");ln(F.length>0)}catch{ln(!1)}}}Ne(()=>{r.allCases.length>0&&x()}),pr(()=>{x(),d()}),Ne(()=>{e(s),e(i),Kc()});function w(F){F==="time"&&!e(s)||F==="profile"&&!e(i)||Uc(F)}var T=_e(),m=B(T);{var A=F=>{{const v=y=>{var R=iu(),g=E(C(R),2),b=C(g),$=E(b,2);p(g),p(R),Q(()=>{Se(b,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(s)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),b.disabled=!e(s),we(b,"title",e(s)?"":"No probe data available. Run a simulation first."),Se($,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),$.disabled=!e(i),we($,"title",e(i)?"":"No profile data available. Run a simulation first.")}),ie("click",b,()=>w("time")),ie("click",$,()=>w("profile")),u(y,R)};Ht(F,{wide:!0,titleSlot:v,tabs:v,actions:y=>{var R=cu(),g=B(R);{let _=j(()=>e(a)==="time"?"probePlot":"profilePlot"),L=j(Ki);rr(g,{get name(){return e(_)},get intervalMs(){return e(L)},onRefresh:d,get checked(){return e(o)},set checked(z){f(o,z,!0)}})}var b=E(g,2);{var $=_=>{$e(_,{variant:"primary",onclick:d,children:(L,z)=>{var D=lu(),U=B(D);Te(U,{get icon(){return Jt}}),ke(),u(L,D)},$$slots:{default:!0}})};Y(b,_=>{e(o)||_($)})}u(y,R)},children:(y,R)=>{var g=_e(),b=B(g);{var $=L=>{eu(L,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(z){f(l,z,!0)}})},_=L=>{ou(L,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(z){f(l,z,!0)}})};Y(b,L=>{e(a)==="time"?L($):L(_,-1)})}u(y,g)},$$slots:{tabs:!0,actions:!0,default:!0}})}};Y(m,F=>{e(n)&&F(A)})}u(t,T),Le()}We(["click"]);var du=P("<!> Refresh",1),fu=P("<!> <!>",1),vu=P("<!> Download as CSV",1),gu=P('<!> <div class="self-end ml-auto"><!></div>',1),hu=P("<th> </th>"),pu=P('<td class="whitespace-nowrap"> </td>'),mu=P('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),_u=P('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),bu=P('<p class="text-sm text-muted italic text-center py-8"><!></p>'),xu=P("<!> <!>",1);function yu(t,r){Ae(r,!0);let a=I(oe([])),n=I(oe([])),s=I(!1),i=I(!1),o=I(oe(er("perf")));Ne(()=>{tr("perf",e(o))});const l=5e3;let x=I(oe([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),w=j(()=>r.allCases.map(R=>({value:R,label:R}))),T=j(()=>e(n).length>0);async function m(){var R;if(e(a).length){f(i,!0);try{const g=await Dn(e(a));(R=g.columns)!=null&&R.length&&f(x,g.columns,!0),f(n,g.records,!0),e(n).length>0&&f(s,!0)}catch(g){console.error("Failed to load perf:",g)}f(i,!1)}}function A(R){if(f(a,R,!0),R.length===0){f(n,[],!0);return}m()}function F(R,g){if(g==null||g==="")return"-";if(R==="text")return g;const b=Number(g);return Number.isFinite(b)?R==="int"?String(Math.round(b)):b.toFixed(3):g}async function v(){if(!e(n).length)return;const R=["case_id",...e(x).map(_=>_.key)],g=e(n).map(_=>[_.case_id,...e(x).map(L=>_[L.key]??"")].join(",")),b=[R.join(","),...g].join(`
`),$=_r("timing_snapshot",e(a),"csv");await Pa(b,$)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),Dn(r.allCases).then(R=>{var g;(g=R.columns)!=null&&g.length&&f(x,R.columns,!0),f(s,R.records.length>0),f(n,R.records,!0)}).catch(()=>{}))}),Ne(()=>{e(o)?hr("perf",m,l):vt("perf")});const y=pr(()=>{c&&m()});dr(()=>{vt("perf"),y()}),Ht(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:g=>{var b=fu(),$=B(b);rr($,{name:"perf",intervalMs:l,onRefresh:m,get checked(){return e(o)},set checked(z){f(o,z,!0)}});var _=E($,2);{var L=z=>{$e(z,{variant:"primary",onclick:m,children:(D,U)=>{var H=du(),O=B(H);Te(O,{get icon(){return Jt}}),ke(),u(D,H)},$$slots:{default:!0}})};Y(_,z=>{e(o)||z(L)})}u(g,b)},children:(g,b)=>{var $=xu(),_=B($);{var L=H=>{Yt(H,{children:(O,V)=>{var q=gu(),X=B(q);Me(X,{text:"Cases",children:(M,h)=>{Gt(M,{class:"w-[160px]",get options(){return e(w)},get selected(){return e(a)},onchange:A,placeholder:"Select cases..."})}});var ae=E(X,2),N=C(ae);{let M=j(()=>!e(T));$e(N,{variant:"secondary",size:"sm",onclick:v,get disabled(){return e(M)},children:(h,k)=>{var S=vu(),Z=B(S);Te(Z,{get icon(){return gr}}),ke(),u(h,S)},$$slots:{default:!0}})}p(ae),u(O,q)}})};Y(_,H=>{e(s)&&H(L)})}var z=E(_,2);{var D=H=>{var O=_u(),V=C(O),q=C(V),X=C(q),ae=E(C(X));Ze(ae,17,()=>e(x),M=>M.key,(M,h)=>{var k=hu(),S=C(k,!0);p(k),Q(()=>ee(S,e(h).label)),u(M,k)}),p(X),p(q);var N=E(q);Ze(N,21,()=>e(n),M=>M.case_id,(M,h)=>{var k=mu(),S=C(k),Z=C(S,!0);p(S);var re=E(S);Ze(re,17,()=>e(x),ge=>ge.key,(ge,le)=>{var K=pu(),ne=C(K,!0);p(K),Q(se=>ee(ne,se),[()=>F(e(le).kind,e(h)[e(le).key])]),u(ge,K)}),p(k),Q(()=>ee(Z,e(h).case_id)),u(M,k)}),p(N),p(V),p(O),u(H,O)},U=H=>{var O=bu(),V=C(O);{var q=ae=>{var N=Be("Select cases above to view timing information.");u(ae,N)},X=ae=>{var N=Be("No performance data available. Please run a simulation first.");u(ae,N)};Y(V,ae=>{e(s)?ae(q):ae(X,-1)})}p(O),u(H,O)};Y(z,H=>{e(T)?H(D):H(U,-1)})}u(g,$)},$$slots:{actions:!0,default:!0}}),Le()}const wu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function za(t){return t.replace(/[&<>"']/g,r=>wu[r]??r)}var ku=P("<div></div>"),Cu=P('<pre class="code-box tail-pane"></pre>');function Su(t,r){Ae(r,!0);let a=I(void 0);function n(x){const w=za(x);if(!r.searchQuery.trim())return w;try{const T=new RegExp(`(${r.searchQuery})`,"gi");return w.replace(T,'<span class="tail-query-hit">$1</span>')}catch{return w}}function s(x){return x==="error"?"tail-sev-error":x==="warn"?"tail-sev-warn":x==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let o=I(!0);function l(){f(o,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(o)&&Pt().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=Cu();Ze(d,21,()=>r.lines,x=>x.index,(x,w)=>{var T=ku();Fr(T,()=>n(e(w).text),!0),p(T),Q(m=>Se(T,1,`tail-line ${m??""} ${e(w).isNew?"tail-new":""}`),[()=>s(e(w).severity)]),u(x,T)}),p(d),nt(d,x=>f(a,x),()=>e(a)),rt("scroll",d,l),u(t,d),Le()}const $u=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,Pu=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function Eu(t){return $u.test(t)?"error":Pu.test(t)?"warn":"none"}function Ru(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Nu=P("<!> Refresh",1),Mu=P("<!> <!>",1),Au=P('<input type="number" min="1" class="w-[70px]"/>'),Lu=P('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Tu=P("<!> <!> <!> <!> <!>",1),Fu=Ot('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Du=Ot('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),zu=Ot('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Iu=P("<!> Resume",1),Ou=P("<!> Pause",1),Hu=P('<span class="text-xs text-muted">Case not running</span>'),ju=P('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Vu=P('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),Uu=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Bu=P("<!> <!> <!>",1);function qu(t,r){Ae(r,!0);const a=80;let n=I(""),s=I(""),i=I(!1),o=I(oe([])),l=I(a),d=I(oe([])),x=I(oe(new Set)),w=I(!1),T=I(oe(er("tail")));Ne(()=>{tr("tail",e(T))});let m=I(!0),A=I("all"),F=I(""),v=I(""),c=I(void 0),y=j(()=>wn(r.allCases)),R=j(()=>e(o).map(N=>{const M=N.split("/").pop()??N;return{value:N,label:M}})),g=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],b=j(()=>e(o).length>0),$=j(()=>bn().some(N=>{var M;return N.case_id===e(n)&&((M=N.status)==null?void 0:M.toUpperCase())==="RUNNING"}));const _={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function L(N){const M=N.split("/").pop()??N;return _[M]??99}async function z(){if(e(n))try{const h=(await ui(e(n))).filter(k=>{const S=k.split("/").pop()??k;return k.endsWith(".log")||k.endsWith("/summary")||S in _}).sort((k,S)=>L(k)-L(S));if(f(o,h,!0),h.length>0){const k=h[0];!e(s)||!h.includes(e(s))?(f(s,k,!0),f(i,!1)):!e(i)&&L(k)<L(e(s))&&f(s,k,!0)}e(o).length===0&&(f(s,""),f(d,[],!0))}catch(N){console.error("Failed to load tail files:",N),f(o,[],!0)}}async function D(N=!1){if(e(n)&&!(e(w)&&!N)&&(await z(),!!e(s)))try{const M=await ci(e(n),e(s),e(l));f(v,"");const h=M.split(`
`),k=h.length>0&&h[h.length-1]===""?h.slice(0,-1):h;if(e(d).length>0){const S=U(e(d),k),Z=new Set;for(let re=S;re<k.length;re++)Z.add(re);f(x,Z,!0)}f(d,k,!0)}catch(M){f(v,"Failed to load log tail"),console.error("Failed to load tail:",M)}}function U(N,M){const h=Math.min(N.length,M.length);for(let k=0;k<h;k++){let S=!0;for(let Z=0;Z<Math.min(N.length-k,M.length);Z++)if(N[k+Z]!==M[Z]){S=!1;break}if(S)return N.length-k}return 0}let H=j(()=>{let N=e(d).map((M,h)=>({text:M,index:h,severity:Eu(M),isNew:e(x).has(h)}));if(e(A)!=="all"&&(N=N.filter(M=>Ru(M.severity,e(A)))),e(F).trim())try{const M=new RegExp(e(F),"i");N=N.filter(h=>M.test(h.text))}catch{}return N});function O(N){f(n,N,!0),f(s,""),f(i,!1),f(d,[],!0),z().then(()=>D(!0))}function V(N){f(s,N,!0),f(i,!0),f(d,[],!0),D(!0)}function q(){f(w,!e(w)),e(w)||D(!0)}function X(N){(N.ctrlKey||N.metaKey)&&N.key==="f"&&e(c)&&(N.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),z().then(()=>D(!0)))}),Ne(()=>{e(T)&&!e(w)&&e(n)?hr("tail",()=>D(!1),In()):vt("tail")});const ae=pr(()=>{e(n)&&z().then(()=>D(!0))});dr(()=>{vt("tail"),ae()}),rt("keydown",it,X),Ht(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:M=>{var h=Mu(),k=B(h);{let re=j(In);rr(k,{name:"tail",get intervalMs(){return e(re)},onRefresh:()=>D(!1),get checked(){return e(T)},set checked(ge){f(T,ge,!0)}})}var S=E(k,2);{var Z=re=>{$e(re,{variant:"primary",onclick:()=>D(!0),children:(ge,le)=>{var K=Nu(),ne=B(K);Te(ne,{get icon(){return Jt}}),ke(),u(ge,K)},$$slots:{default:!0}})};Y(S,re=>{e(T)||re(Z)})}u(M,h)},children:(M,h)=>{var k=Bu(),S=B(k);{var Z=se=>{Yt(se,{children:(ue,de)=>{var J=Tu(),be=B(J);Me(be,{text:"Case",children:(pe,Oe)=>{lt(pe,{class:"w-[130px]",get options(){return e(y)},get value(){return e(n)},onchange:O})}});var fe=E(be,2);Me(fe,{text:"File",children:(pe,Oe)=>{lt(pe,{class:"w-[150px]",get options(){return e(R)},get value(){return e(s)},onchange:V})}});var Pe=E(fe,2);Me(Pe,{text:"Lines",children:(pe,Oe)=>{var He=Au();Qe(He),ie("change",He,()=>D(!0)),tt(He,()=>e(l),Fe=>f(l,Fe)),u(pe,He)}});var ve=E(Pe,2);Me(ve,{text:"Filter",children:(pe,Oe)=>{var He=Lu();Qe(He),nt(He,Fe=>f(c,Fe),()=>e(c)),tt(He,()=>e(F),Fe=>f(F,Fe)),u(pe,He)}});var ze=E(ve,2);Me(ze,{text:"Severity",children:(pe,Oe)=>{lt(pe,{class:"w-[90px]",get options(){return g},get value(){return e(A)},onchange:He=>f(A,He,!0)})}}),u(ue,J)}})};Y(S,se=>{e(b)&&se(Z)})}var re=E(S,2);{var ge=se=>{var ue=ju(),de=B(ue);Su(de,{get lines(){return e(H)},get searchQuery(){return e(F)},get autoScroll(){return e(m)}});var J=E(de,2),be=C(J),fe=C(be);{var Pe=G=>{var W=Fu();u(G,W)},ve=G=>{var W=Du();u(G,W)},ze=G=>{var W=zu();u(G,W)};Y(fe,G=>{e(w)?G(Pe):e($)?G(ve,1):G(ze,-1)})}var pe=E(fe);p(be);var Oe=E(be,2);{var He=G=>{$e(G,{variant:"secondary",size:"sm",onclick:q,children:(W,te)=>{var ce=_e(),Re=B(ce);{var Ie=me=>{var Ce=Iu(),je=B(Ce);Te(je,{get icon(){return pa}}),ke(),u(me,Ce)},xe=me=>{var Ce=Ou(),je=B(Ce);Te(je,{get icon(){return Uo}}),ke(),u(me,Ce)};Y(Re,me=>{e(w)?me(Ie):me(xe,-1)})}u(W,ce)},$$slots:{default:!0}})},Fe=G=>{var W=Hu();u(G,W)};Y(Oe,G=>{e($)?G(He):G(Fe,-1)})}var ye=E(Oe,2),Ee=C(ye);It(Ee,{get checked(){return e(m)},onchange:G=>f(m,G,!0),size:14,label:"Auto-scroll",labelFirst:!0}),p(ye),p(J),Q(()=>ee(pe,` ${e(H).length??""} / ${e(d).length??""}`)),u(se,ue)},le=se=>{var ue=Vu();u(se,ue)};Y(re,se=>{e(d).length>0?se(ge):se(le,-1)})}var K=E(re,2);{var ne=se=>{var ue=Uu(),de=C(ue,!0);p(ue),Q(()=>ee(de,e(v))),u(se,ue)};Y(K,se=>{e(v)&&se(ne)})}u(M,k)},$$slots:{actions:!0,default:!0}}),Le()}We(["change"]);function Ku(t,r=3){var A,F;const a=t.split(`
`),n=[];let s=0,i=0,o=!1;for(const v of a){if(v.startsWith("===")||v.startsWith("---")||v.startsWith("+++"))continue;const c=v.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){s=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,o=!0;continue}if(o)if(v.startsWith("-"))s++,n.push({type:"del",leftNum:s,rightNum:null,leftContent:v.slice(1),rightContent:""});else if(v.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:v.slice(1)});else{s++,i++;const y=v.startsWith(" ")?v.slice(1):v;n.push({type:"equal",leftNum:s,rightNum:i,leftContent:y,rightContent:y})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const v=[];for(;d<n.length&&n[d].type==="del";)v.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const y=Math.max(v.length,c.length);for(let R=0;R<y;R++){const g=v[R],b=c[R];g&&b?l.push({type:"del",leftNum:g.leftNum,rightNum:b.rightNum,leftContent:g.leftContent,rightContent:b.rightContent}):g?l.push(g):b&&l.push(b)}}else l.push(n[d]),d++;const x=new Set;for(let v=0;v<l.length;v++)if(l[v].type!=="equal")for(let c=Math.max(0,v-r);c<=Math.min(l.length-1,v+r);c++)x.add(c);if(x.size===0)return[];const w=[];let T=-1,m=!1;for(let v=0;v<l.length;v++)if(x.has(v)){T>=0&&v-T>1&&w.push({kind:"separator",skipped:v-T-1});const c=l[v].type!=="equal",y=c&&!m;w.push({kind:"line",row:l[v],hunkStart:y}),m=c,T=v}if(T<l.length-1&&T>=0&&w.push({kind:"separator",skipped:l.length-1-T}),w.length>0&&w[0].kind==="line"){const v=((A=w[0].row)==null?void 0:A.leftNum)??0,c=((F=w[0].row)==null?void 0:F.rightNum)??0,y=Math.max(v,c)-1;y>0&&w.unshift({kind:"separator",skipped:y})}return w}var Gu=P('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),Wu=P('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),Xu=P('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),Yu=P('<span class="text-xs text-muted">No matches</span>'),Qu=P('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),Zu=P('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),Ju=P('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),ed=P('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function td(t,r){Ae(r,!0);let a=he(r,"loading",3,!1),n=I(void 0),s=j(()=>Ku(r.diffText)),i=j(()=>{const G=[];return e(s).forEach((W,te)=>{W.hunkStart&&G.push(te)}),G}),o=j(()=>e(i).length>0),l=j(()=>{var W;const G=new Array(e(s).length).fill(-1);for(let te=0;te<e(i).length;te++){let ce=e(i)[te];for(;ce<e(s).length&&e(s)[ce].kind==="line"&&((W=e(s)[ce].row)==null?void 0:W.type)!=="equal";)G[ce]=te,ce++}return G}),d=I(-1),x="";Ne(()=>{r.diffText!==x&&(x=r.diffText,f(d,-1))});let w=j(()=>{if(!r.search.trim())return[];try{const G=new RegExp(r.search,"i"),W=[];return e(s).forEach((te,ce)=>{te.kind==="line"&&te.row&&(G.test(te.row.leftContent)||G.test(te.row.rightContent))&&W.push(ce)}),W}catch{return[]}}),T=I(-1),m="";Ne(()=>{r.search!==m&&(m=r.search,f(T,e(w).length>0?0:-1,!0))});async function A(G){var ce;f(T,G,!0),await Pt();const W=e(w)[G],te=(ce=e(g))==null?void 0:ce.querySelector(`[data-item-idx="${W}"]`);if(te&&e(g)&&e(b)){const Re=e(g).getBoundingClientRect(),xe=te.getBoundingClientRect().top-Re.top+e(g).scrollTop-e(g).clientHeight/3;_=!0,e(g).scrollTop=xe,e(b).scrollTop=xe,requestAnimationFrame(()=>{_=!1})}}function F(){e(T)>0&&A(e(T)-1)}function v(){e(T)<0&&e(w).length>0?A(0):e(T)<e(w).length-1&&A(e(T)+1)}function c(G,W){const te=za(G);if(!r.search.trim())return te;try{const ce=new RegExp(`(${r.search})`,"gi"),Re=W?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return te.replace(ce,`<span class="${Re}">$1</span>`)}catch{return te}}function y(G,W){return G==="equal"?"":G==="del"&&W==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":G==="del"&&W==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":G==="add"&&W==="left"?"bg-edf-gris-clair":G==="add"&&W==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function R(G,W){return G==="del"&&W==="left"?"rgb(251,237,233)":G==="del"&&W==="right"?"rgb(238,247,236)":G==="add"&&W==="left"?"var(--color-edf-gris-clair)":G==="add"&&W==="right"?"rgb(238,247,236)":"white"}let g=I(void 0),b=I(void 0),$=!1,_=!1;function L(G){$||_||!e(g)||!e(b)||($=!0,G==="left"?(e(b).scrollTop=e(g).scrollTop,e(b).scrollLeft=e(g).scrollLeft):(e(g).scrollTop=e(b).scrollTop,e(g).scrollLeft=e(b).scrollLeft),requestAnimationFrame(()=>{$=!1}))}async function z(G){var te;f(d,G,!0),await Pt();const W=(te=e(g))==null?void 0:te.querySelector(`[data-hunk-start="${G}"]`);if(W&&e(g)&&e(b)){_=!0;const ce=e(g).getBoundingClientRect(),Ie=W.getBoundingClientRect().top-ce.top+e(g).scrollTop-e(g).clientHeight/3;e(g).scrollTop=Ie,e(b).scrollTop=Ie,requestAnimationFrame(()=>{_=!1})}}function D(){e(d)>0&&z(e(d)-1)}function U(){e(d)<0?z(0):e(d)<e(i).length-1&&z(e(d)+1)}function H(G){const W=e(l)[G];W>=0&&f(d,W,!0)}function O(G){G.target instanceof HTMLInputElement||(G.key==="n"&&!G.shiftKey?(G.preventDefault(),U()):G.key==="N"||G.key==="n"&&G.shiftKey?(G.preventDefault(),D()):G.key==="j"?(G.preventDefault(),v()):(G.key==="J"||G.key==="j"&&G.shiftKey)&&(G.preventDefault(),F()))}var V=ed();{const G=(W,te=ys)=>{var ce=_e(),Re=B(ce);Ze(Re,17,()=>e(s),un,(Ie,xe,me)=>{const Ce=j(()=>e(i).indexOf(me)),je=j(()=>e(l)[me]>=0&&e(l)[me]===e(d)),Xe=j(()=>{var at,Ge;return te()==="left"?(at=e(xe).row)==null?void 0:at.leftNum:(Ge=e(xe).row)==null?void 0:Ge.rightNum}),gt=j(()=>{var at,Ge;return te()==="left"?((at=e(xe).row)==null?void 0:at.leftContent)??"":((Ge=e(xe).row)==null?void 0:Ge.rightContent)??""});var jt=_e(),Or=B(jt);{var et=at=>{var Ge=Gu(),Nt=E(C(Ge),2),Hr=C(Nt);p(Nt),p(Ge),Q(()=>ee(Hr,`... ${e(xe).skipped??""} lines hidden ...`)),u(at,Ge)},ut=at=>{var Ge=Wu(),Nt=C(Ge),Hr=C(Nt,!0);p(Nt);var Sn=E(Nt,2);Fr(Sn,()=>c(e(gt),e(T)>=0&&e(w)[e(T)]===me),!0),p(Sn),p(Ge),Q((yt,Mt,br,Ia,Oa)=>{Se(Ge,1,`flex w-full ${yt??""} ${Mt??""}`),Je(Ge,e(je)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),we(Ge,"role",br),we(Ge,"tabindex",Ia),we(Ge,"data-hunk-start",te()==="left"&&e(Ce)>=0?e(Ce):void 0),we(Ge,"data-item-idx",te()==="left"?me:void 0),Je(Nt,`background: ${Oa??""}; color: ${e(je)?"white":"var(--color-muted)"};`),ee(Hr,e(Xe)??"")},[()=>y(e(xe).row.type,te()),()=>e(xe).row.type!=="equal"||e(w).includes(me)?"cursor-pointer":"",()=>e(xe).row.type!=="equal"||e(w).includes(me)?"button":void 0,()=>e(xe).row.type!=="equal"||e(w).includes(me)?0:void 0,()=>e(je)?"rgb(16,87,200)":R(e(xe).row.type,te())]),ie("click",Ge,()=>{var Mt;((Mt=e(xe).row)==null?void 0:Mt.type)!=="equal"&&H(me);const yt=e(w).indexOf(me);yt>=0&&f(T,yt,!0)}),ie("keydown",Ge,yt=>{var Mt;if(yt.key==="Enter"||yt.key===" "){yt.preventDefault(),((Mt=e(xe).row)==null?void 0:Mt.type)!=="equal"&&H(me);const br=e(w).indexOf(me);br>=0&&f(T,br,!0)}}),u(at,Ge)};Y(Or,at=>{e(xe).kind==="separator"?at(et):e(xe).row&&at(ut,1)})}u(Ie,jt)}),u(W,ce)};var q=C(V),X=C(q),ae=C(X),N=C(ae,!0);p(ae);var M=E(ae,2),h=C(M,!0);p(M),p(X);var k=E(X,2),S=C(k),Z=C(S,!0);p(S);var re=E(S,2),ge=C(re,!0);p(re),p(k),p(q);var le=E(q,2),K=C(le),ne=C(K);Qe(ne);var se=E(ne,2);{var ue=W=>{var te=Xu(),ce=B(te);{let me=j(()=>e(T)<=0);$e(ce,{variant:"secondary",size:"sm",onclick:F,get disabled(){return e(me)},children:(Ce,je)=>{ke();var Xe=Be("Prev");u(Ce,Xe)},$$slots:{default:!0}})}var Re=E(ce,2),Ie=C(Re);p(Re);var xe=E(Re,2);{let me=j(()=>e(T)>=e(w).length-1);$e(xe,{variant:"secondary",size:"sm",onclick:v,get disabled(){return e(me)},children:(Ce,je)=>{ke();var Xe=Be("Next");u(Ce,Xe)},$$slots:{default:!0}})}Q(()=>ee(Ie,`${e(T)>=0?e(T)+1:"–"} / ${e(w).length??""} occurrence${e(w).length!==1?"s":""}`)),u(W,te)},de=j(()=>r.search.trim()&&e(w).length>0),J=W=>{var te=Yu();u(W,te)},be=j(()=>r.search.trim());Y(se,W=>{e(de)?W(ue):e(be)&&W(J,1)})}p(K);var fe=E(K,2),Pe=C(fe);{let W=j(()=>e(i).length===0||e(d)<=0);$e(Pe,{variant:"secondary",size:"sm",onclick:D,get disabled(){return e(W)},children:(te,ce)=>{ke();var Re=Be("Prev");u(te,Re)},$$slots:{default:!0}})}var ve=E(Pe,2),ze=C(ve);p(ve);var pe=E(ve,2);{let W=j(()=>e(i).length===0||e(d)>=e(i).length-1);$e(pe,{variant:"secondary",size:"sm",onclick:U,get disabled(){return e(W)},children:(te,ce)=>{ke();var Re=Be("Next");u(te,Re)},$$slots:{default:!0}})}p(fe),p(le);var Oe=E(le,2);{var He=W=>{var te=Qu(),ce=C(te),Re=C(ce),Ie=C(Re);G(Ie,()=>"left"),p(Re),p(ce),nt(ce,je=>f(g,je),()=>e(g));var xe=E(ce,2),me=C(xe),Ce=C(me);G(Ce,()=>"right"),p(me),p(xe),nt(xe,je=>f(b,je),()=>e(b)),p(te),rt("scroll",ce,()=>L("left")),rt("scroll",xe,()=>L("right")),u(W,te)},Fe=W=>{var te=Zu();u(W,te)};Y(Oe,W=>{e(o)?W(He):W(Fe,-1)})}var ye=E(Oe,2);{var Ee=W=>{var te=Ju();u(W,te)};Y(ye,W=>{a()&&W(Ee)})}p(V),nt(V,W=>f(n,W),()=>e(n)),Q(()=>{ee(N,r.leftLabel),ee(h,r.kind),ee(Z,r.rightLabel),ee(ge,r.kind),dn(ne,r.search),ee(ze,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),ie("input",ne,W=>r.onSearchChange(W.target.value)),ie("keydown",ne,W=>{W.key==="Enter"&&(W.preventDefault(),v())})}ie("keydown",V,O),u(t,V),Le()}We(["keydown","click","input"]);var rd=P("<!> <!> <!>",1),nd=P('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),ad=P('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),sd=P('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),od=P('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),id=P('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),ld=P('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),cd=P('<p class="text-sm text-red-600 text-center py-8"> </p>'),ud=P('<p class="text-sm text-muted text-center py-8">Loading...</p>'),dd=P("<!> <!> <!>",1),fd=P("<!> <!>",1);function vd(t,r){Ae(r,!0);let a=I(""),n=I(""),s=I(""),i=I(""),o=I(""),l=I(!1),d=I(!1),x=I(""),w=j(()=>r.allCases.map(_=>({value:_,label:_})));const T=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let m=j(()=>{var _;return((_=Ft())==null?void 0:_.compare_kinds)??T});Ne(()=>{var _;e(m).some(L=>L.value===e(s))||f(s,((_=e(m)[0])==null?void 0:_.value)??"",!0)});let A=I(!1),F=j(()=>e(a)&&e(n)&&e(a)!==e(n));function v(){const _=e(a);f(a,e(n),!0),f(n,_,!0)}async function c(){if(e(F)){f(l,!0),f(x,"");try{const _=await hi({cases:[e(a),e(n)],base:e(a),kind:e(s)});f(o,_,!0),f(d,!0)}catch(_){console.error("Failed to load diff:",_),f(o,""),f(d,!1);const L=_ instanceof Error?_.message:String(_);f(x,L.includes("404")?`File "${e(s)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(s)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(o,""),f(d,!0))});let y=!1;Ne(()=>{r.allCases.length>=2&&!y?(y=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!y&&(y=!0,f(a,r.allCases[0],!0))});let R=j(xn),g=j(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(R).length===0)return[];const _=bn(),L=_.find(D=>D.case_id===e(a)),z=_.find(D=>D.case_id===e(n));return!L&&!z?[]:e(R).map(D=>{var O,V;const U=((O=L==null?void 0:L.doe)==null?void 0:O[D])!=null&&String(L.doe[D])!==""?String(L.doe[D]):"—",H=((V=z==null?void 0:z.doe)==null?void 0:V[D])!=null&&String(z.doe[D])!==""?String(z.doe[D]):"—";return{param:D,left:U,right:H,differs:U!==H}})}),b=j(()=>e(A)?e(g):e(g).filter(_=>_.differs)),$=j(()=>e(g).filter(_=>_.differs).length);Ht(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(_,L)=>{var z=fd(),D=B(z);Yt(D,{children:(q,X)=>{var ae=rd(),N=B(ae);Me(N,{text:"First case",children:(k,S)=>{lt(k,{class:"w-32.5",get options(){return e(w)},get value(){return e(a)},onchange:Z=>f(a,Z,!0),placeholder:"Select..."})}});var M=E(N,2);{let k=j(()=>!e(a)&&!e(n));$e(M,{variant:"secondary",size:"sm",onclick:v,get disabled(){return e(k)},children:(S,Z)=>{Te(S,{get icon(){return To}})},$$slots:{default:!0}})}var h=E(M,2);Me(h,{text:"Second case",children:(k,S)=>{lt(k,{class:"w-32.5",get options(){return e(w)},get value(){return e(n)},onchange:Z=>f(n,Z,!0),placeholder:"Select..."})}}),u(q,ae)}});var U=E(D,2);{var H=q=>{var X=nd();u(q,X)},O=q=>{var X=ad();u(q,X)},V=q=>{var X=dd(),ae=B(X);{var N=re=>{var ge=ld(),le=B(ge),K=C(le),ne=C(K);p(K);var se=E(K,2),ue=C(se,!0);p(se),p(le);var de=E(le,2);{var J=fe=>{var Pe=od(),ve=C(Pe),ze=C(ve),pe=C(ze),Oe=C(pe),He=C(Oe,!0);p(Oe);var Fe=E(Oe,2),ye=C(Fe,!0);p(Fe),p(pe),p(ze);var Ee=E(ze);Ze(Ee,21,()=>e(b),G=>G.param,(G,W)=>{var te=sd(),ce=C(te),Re=C(ce,!0);p(ce);var Ie=E(ce),xe=C(Ie,!0);p(Ie);var me=E(Ie),Ce=C(me,!0);p(me),p(te),Q(()=>{Se(ce,1,dt(e(W).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ee(Re,e(W).left),ee(xe,e(W).param),Se(me,1,dt(e(W).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ee(Ce,e(W).right)}),u(G,te)}),p(Ee),p(ve),p(Pe),Q(()=>{ee(He,e(a)),ee(ye,e(n))}),u(fe,Pe)},be=fe=>{var Pe=id();u(fe,Pe)};Y(de,fe=>{e(b).length>0?fe(J):fe(be,-1)})}Q(()=>{ee(ne,`${e($)??""} difference${e($)!==1?"s":""} out of ${e(g).length??""}
          parameters`),ee(ue,e(A)?"Show differences only":"Show all parameters")}),ie("click",se,()=>f(A,!e(A))),u(re,ge)};Y(ae,re=>{e(g).length>0&&re(N)})}var M=E(ae,2);Yt(M,{children:(re,ge)=>{Me(re,{text:"File",children:(le,K)=>{lt(le,{class:"w-37.5",get options(){return e(m)},get value(){return e(s)},onchange:ne=>f(s,ne,!0)})}})}});var h=E(M,2);{var k=re=>{var ge=cd(),le=C(ge,!0);p(ge),Q(()=>ee(le,e(x))),u(re,ge)},S=re=>{td(re,{get diffText(){return e(o)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(s)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:ge=>f(i,ge,!0)})},Z=re=>{var ge=ud();u(re,ge)};Y(h,re=>{e(x)?re(k):e(d)?re(S,1):e(l)&&re(Z,2)})}u(q,X)};Y(U,q=>{e(a)&&e(n)&&e(a)===e(n)?q(H):!e(a)||!e(n)?q(O,1):q(V,-1)})}u(_,z)},$$slots:{default:!0}}),Le()}We(["click"]);var gd=P("<!> Refresh",1),hd=P("<!> <!>",1),pd=P('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),md=P('<input type="number" min="0" max="50" style="width: 70px;"/>'),_d=P("<!> Download as CSV",1),bd=P('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),xd=P("&nbsp;<!>",1),yd=P("<button> <!></button>"),wd=P('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),kd=P('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),Cd=P('<span class="error-badge"> </span>'),Sd=P('<span class="error-badge error-badge-new">NEW</span>'),$d=P('<div class="error-line"></div>'),Pd=P('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),Ed=P('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Rd=P('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Nd=P('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Md=P("<!> <!> <div><!> <!></div> <!> <!>",1);function Ad(t,r){Ae(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let s=I(oe([])),i=I(oe([...n])),o=!1;Ne(()=>{var ne;const K=(ne=Ft())==null?void 0:ne.error_files;K!=null&&K.length&&!o&&f(i,[...K],!0)});let l=I("all"),d=I(""),x=I(a),w=I(!1),T=I(""),m=I(oe(er("errors")));Ne(()=>{tr("errors",e(m))});let A=I(oe([])),F=I(oe(new Set));function v(K){return K.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(K){const ne=K.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${K.case_id}|${K.file}|${K.severity}|${v(ne)}`}function y(K){const ne=new Map;for(const se of K){const ue=c(se),de=ne.get(ue);de?de.count++:ne.set(ue,{...se,count:1,fingerprint:ue,isNew:!e(F).has(ue)})}return Array.from(ne.values())}async function R(){if(!(!e(s).length||!e(i).length)){f(w,!0);try{const K=await li({cases:e(s),files:e(i),context:e(x),sev:e(l)==="all"?"":e(l),q:e(d)});f(T,"");const ne=y(K.items);f(A,K.items,!0);const se=new Set(ne.map(ue=>ue.fingerprint));f(F,se,!0),f(g,ne,!0)}catch(K){f(T,"Failed to load errors"),console.error("Failed to load errors:",K)}finally{f(w,!1)}}}let g=I(oe([])),b=null;function $(){b&&clearTimeout(b),b=setTimeout(R,250)}function _(K){return K==="error"?"error-sev-error":K==="warn"?"error-sev-warn":"error-sev-info"}let L=j(()=>wn(r.allCases));const z=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let D=j(()=>{var K;return(((K=Ft())==null?void 0:K.error_files)??z).map(ne=>({value:ne,label:ne}))}),U=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function H(K){if(f(s,K,!0),K.length===0){f(g,[],!0),f(A,[],!0);return}R()}function O(K){if(o=!0,f(i,K,!0),K.length===0){f(g,[],!0),f(A,[],!0);return}R()}function V(K){f(l,K,!0),R()}function q(){R()}let X=!1;Ne(()=>{r.allCases.length>0&&!X&&(X=!0,f(s,[...r.allCases],!0),R())}),Ne(()=>{e(m)?hr("errors",R,Hn()):vt("errors")});const ae=pr(()=>{X&&R()});dr(()=>{vt("errors"),ae()});let N=I(oe(new Set));function M(K){const ne=new Set(e(N));ne.has(K)?ne.delete(K):ne.add(K),f(N,ne,!0)}let h=I("severity"),k=I("desc");const S={info:0,warn:1,error:2};let Z=j(()=>{const K=[...e(g)];return K.sort((ne,se)=>{let ue=0;return e(h)==="severity"?ue=(S[ne.severity]??9)-(S[se.severity]??9):e(h)==="count"?ue=ne.count-se.count:ue=ne[e(h)].localeCompare(se[e(h)]),e(k)==="asc"?ue:-ue}),K});const re={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function ge(K){e(h)===K?f(k,e(k)==="asc"?"desc":"asc",!0):(f(h,K,!0),f(k,re[K],!0))}function le(){if(!e(g).length)return;const K=["case_id","file","severity","count","is_new","line_text"],ne=e(Z).map(de=>[de.case_id,de.file,de.severity,de.count,de.isNew?"yes":"no",`"${de.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),se=[K.join(","),...ne].join(`
`),ue=_r("errors",e(s),"csv");Pa(se,ue)}Ht(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:ne=>{var se=hd(),ue=B(se);{let be=j(Hn);rr(ue,{name:"errors",get intervalMs(){return e(be)},onRefresh:R,get checked(){return e(m)},set checked(fe){f(m,fe,!0)}})}var de=E(ue,2);{var J=be=>{$e(be,{variant:"primary",onclick:R,children:(fe,Pe)=>{var ve=gd(),ze=B(ve);Te(ze,{get icon(){return Jt}}),ke(),u(fe,ve)},$$slots:{default:!0}})};Y(de,be=>{e(m)||be(J)})}u(ne,se)},children:(ne,se)=>{var ue=Md(),de=B(ue);Yt(de,{children:(ye,Ee)=>{var G=bd(),W=B(G);Me(W,{text:"Cases",children:(Ce,je)=>{Gt(Ce,{class:"w-[160px]",get options(){return e(L)},get selected(){return e(s)},onchange:H,placeholder:"Select cases..."})}});var te=E(W,2);Me(te,{text:"Files",children:(Ce,je)=>{Gt(Ce,{class:"w-[160px]",get options(){return e(D)},get selected(){return e(i)},onchange:O,placeholder:"Select files..."})}});var ce=E(te,2);Me(ce,{text:"Severity",children:(Ce,je)=>{lt(Ce,{class:"w-[90px]",get options(){return U},get value(){return e(l)},onchange:V})}});var Re=E(ce,2);Me(Re,{text:"Search",children:(Ce,je)=>{var Xe=pd();Qe(Xe),ie("input",Xe,$),tt(Xe,()=>e(d),gt=>f(d,gt)),u(Ce,Xe)}});var Ie=E(Re,2);Me(Ie,{text:"Context",children:(Ce,je)=>{var Xe=md();Qe(Xe),ie("change",Xe,q),tt(Xe,()=>e(x),gt=>f(x,gt)),u(Ce,Xe)}});var xe=E(Ie,2),me=C(xe);{let Ce=j(()=>e(g).length===0);$e(me,{variant:"secondary",size:"sm",onclick:le,get disabled(){return e(Ce)},children:(je,Xe)=>{var gt=_d(),jt=B(gt);Te(jt,{get icon(){return gr}}),ke(),u(je,gt)},$$slots:{default:!0}})}p(xe),u(ye,G)}});var J=E(de,2);{var be=ye=>{var Ee=wd(),G=E(C(Ee),2);Ze(G,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],W=>W.key,(W,te)=>{var ce=yd(),Re=C(ce,!0),Ie=E(Re);{var xe=me=>{var Ce=xd(),je=E(B(Ce));{let Xe=j(()=>e(k)==="asc"?Fo:Lo);Te(je,{get icon(){return e(Xe)},size:12})}u(me,Ce)};Y(Ie,me=>{e(h)===te.key&&me(xe)})}p(ce),Q(()=>{Se(ce,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(h)===te.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ee(Re,te.label)}),ie("click",ce,()=>ge(te.key)),u(W,ce)}),p(Ee),u(ye,Ee)};Y(J,ye=>{e(Z).length>0&&ye(be)})}var fe=E(J,2),Pe=C(fe);{var ve=ye=>{var Ee=kd();u(ye,Ee)};Y(Pe,ye=>{e(Z).length===0&&ye(ve)})}var ze=E(Pe,2);Ze(ze,17,()=>e(Z),ye=>ye.fingerprint,(ye,Ee)=>{var G=Pd(),W=C(G),te=C(W),ce=C(te);{let et=j(()=>e(N).has(e(Ee).fingerprint)?gn:Do);Te(ce,{get icon(){return e(et)},size:14})}p(te);var Re=E(te,2),Ie=C(Re);p(Re);var xe=E(Re,2),me=C(xe);{var Ce=et=>{var ut=Cd(),at=C(ut);p(ut),Q(()=>ee(at,`${e(Ee).count??""}x`)),u(et,ut)};Y(me,et=>{e(Ee).count>1&&et(Ce)})}var je=E(me,2);{var Xe=et=>{var ut=Sd();u(et,ut)};Y(je,et=>{e(Ee).isNew&&et(Xe)})}p(xe),p(W);var gt=E(W,2);{var jt=et=>{var ut=$d();Fr(ut,()=>e(Ee).line_html,!0),p(ut),u(et,ut)},Or=j(()=>e(N).has(e(Ee).fingerprint));Y(gt,et=>{e(Or)&&et(jt)})}p(G),Q(et=>{Se(G,1,`error-item ${et??""}`),ee(Ie,`${e(Ee).case_id??""} / ${e(Ee).file??""} : ${e(Ee).severity??""}`)},[()=>_(e(Ee).severity)]),ie("click",W,()=>M(e(Ee).fingerprint)),u(ye,G)}),p(fe);var pe=E(fe,2);{var Oe=ye=>{var Ee=Rd(),G=C(Ee),W=C(G);p(G);var te=E(G,2);{var ce=Ie=>{var xe=Ed(),me=C(xe);p(xe),Q(Ce=>ee(me,`${Ce??""} new`),[()=>e(g).filter(Ce=>Ce.isNew).length]),u(Ie,xe)},Re=j(()=>e(g).some(Ie=>Ie.isNew));Y(te,Ie=>{e(Re)&&Ie(ce)})}p(Ee),Q(()=>ee(W,`${e(g).length??""} unique / ${e(A).length??""} total`)),u(ye,Ee)};Y(pe,ye=>{e(Z).length>0&&ye(Oe)})}var He=E(pe,2);{var Fe=ye=>{var Ee=Nd(),G=C(Ee,!0);p(Ee),Q(()=>ee(G,e(T))),u(ye,Ee)};Y(He,ye=>{e(T)&&ye(Fe)})}Q(()=>Se(fe,1,`error-list ${e(w)?"opacity-50 pointer-events-none":""}`)),u(ne,ue)},$$slots:{actions:!0,default:!0}}),Le()}We(["input","change","click"]);var Ld=P('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Vd(t,r){Ae(r,!0);let a=I(oe({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=I(oe([])),s=I(null);const i=S=>e(s)===null||e(s).includes(S);async function o(S){var ge;const Z=`/favicon-${S}.svg`;try{const le=await fetch(Z);if(!le.ok||!((ge=le.headers.get("content-type"))!=null&&ge.includes("svg")))return}catch{return}const re=document.querySelector('link[rel="icon"]');re&&(re.href=Z)}async function l(){try{const S=await ai();Pl(S.rows),El(S.doe_columns),f(n,S.rows.map(Z=>Z.case_id),!0),f(a,jl(Sa(),bn()),!0)}catch(S){console.error("Failed to load status:",S)}}Yn(()=>{l(),si().then(S=>{tl(S),f(s,S.panels,!0),o(S.solver)}).catch(()=>{})});var d=Ld(),x=B(d);Ni(x,{});var w=E(x,2);Fi(w,{});var T=E(w,2);ol(T,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var m=E(T,2),A=C(m);{var F=S=>{_c(S,{onRefresh:l})},v=j(()=>i("status"));Y(A,S=>{e(v)&&S(F)})}var c=E(A,2);{var y=S=>{Hc(S,{get allCases(){return e(n)}})},R=j(()=>i("residuals"));Y(c,S=>{e(R)&&S(y)})}var g=E(c,2);{var b=S=>{uu(S,{get allCases(){return e(n)}})},$=j(()=>i("probes"));Y(g,S=>{e($)&&S(b)})}var _=E(g,2);{var L=S=>{yu(S,{get allCases(){return e(n)}})},z=j(()=>i("performance"));Y(_,S=>{e(z)&&S(L)})}var D=E(_,2);{var U=S=>{vd(S,{get allCases(){return e(n)}})},H=j(()=>i("compare"));Y(D,S=>{e(H)&&S(U)})}var O=E(D,2);{var V=S=>{qu(S,{get allCases(){return e(n)}})},q=j(()=>i("tail"));Y(O,S=>{e(q)&&S(V)})}var X=E(O,2);{var ae=S=>{Ad(S,{get allCases(){return e(n)}})},N=j(()=>i("errors"));Y(X,S=>{e(N)&&S(ae)})}p(m);var M=E(m,2),h=E(C(M),2),k=C(h);p(h),p(M),Q(()=>we(k,"src",il)),u(t,d),Le()}export{Vd as component};
