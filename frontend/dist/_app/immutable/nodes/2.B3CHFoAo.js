import{b as Sr,a as u,f as $,c as _e,t as Be,d as It}from"../chunks/C14P8jaG.js";import{o as Yn,a as dr}from"../chunks/Cz6m6K8p.js";import{h as De,L as $t,G as Lt,c as $r,J as Kt,b as Qn,o as e,N as Ha,ag as ja,O as $n,P as Dt,f as _t,ay as Jn,aF as Ua,ao as Pn,e as mt,a as cr,aM as Va,s as Ba,a5 as qa,aN as Zn,aE as cn,aO as Ka,a7 as En,aP as Ga,aQ as Wa,aI as Xa,aR as ht,aS as ea,a1 as Ya,r as ta,p as ra,aT as jr,ae as na,aU as Qa,aV as Ja,aC as Za,m as eo,d as Er,az as aa,y as Q,F as oa,aW as to,aG as ro,aA as no,D as sa,aX as ia,aY as ao,aZ as oo,E as so,aw as la,S as Tr,k as Rr,a_ as ca,a$ as io,b0 as lo,b1 as ua,b2 as co,b3 as uo,b4 as fr,b5 as fo,b6 as vo,b7 as go,b8 as ho,b9 as po,ba as mo,bb as _o,aJ as Pt,U as bo,aK as I,_ as se,$ as f,A as k,B as p,x as Ae,g as B,z as Le,C as P,j as Ne,ap as we,aL as U,bc as xo,q as jt,bd as yo,be as it,bf as wo}from"../chunks/VJhVTb1A.js";import{p as he,i as X,b as nt,c as ko,l as Ue,s as qe}from"../chunks/zf4GFcxs.js";import{i as Co,a as So,d as ie,b as We,c as $o,n as Po,e as Eo,s as ee,f as rt}from"../chunks/BeON-0X8.js";import{s as ft}from"../chunks/CiUbu-1F.js";import{i as Ro}from"../chunks/DmjnTBOd.js";import{B as No}from"../chunks/U5yjBaoU.js";function un(t,r){return r}function Mo(t,r,a){for(var n=[],o=r.length,i,s=r.length,l=0;l<o;l++){let A=r[l];ra(A,()=>{if(i){if(i.pending.delete(A),i.done.add(A),i.pending.size===0){var m=t.outrogroups;Xr(t,cn(i.done)),m.delete(i),m.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var d=n.length===0&&a!==null;if(d){var y=a,w=y.parentNode;Za(w),w.append(y),t.items.clear()}Xr(t,r,!d)}else i={pending:new Set(r),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Xr(t,r,a=!0){var n;if(t.pending.size>0){n=new Set;for(const s of t.pending.values())for(const l of s)n.add(t.items.get(l).e)}for(var o=0;o<r.length;o++){var i=r[o];if(n!=null&&n.has(i)){i.f|=ht;const s=document.createDocumentFragment();eo(i,s)}else Er(r[o],a)}}var Rn;function Je(t,r,a,n,o,i=null){var s=t,l=new Map,d=(r&ea)!==0;if(d){var y=t;s=De?$t(Lt(y)):y.appendChild($r())}De&&Kt();var w=null,A=qa(()=>{var g=a();return Zn(g)?g:g==null?[]:cn(g)}),m,M=new Map,F=!0;function h(g){(E.effect.f&Ya)===0&&(E.pending.delete(g),E.fallback=w,Ao(E,m,s,r,n),w!==null&&(m.length===0?(w.f&ht)===0?ta(w):(w.f^=ht,ir(w,null,s)):ra(w,()=>{w=null})))}function c(g){E.pending.delete(g)}var x=Qn(()=>{m=e(A);var g=m.length;let _=!1;if(De){var S=Ha(s)===ja;S!==(g===0)&&(s=$n(),$t(s),Dt(!1),_=!0)}for(var b=new Set,L=mt,z=Ba(),D=0;D<g;D+=1){De&&_t.nodeType===Jn&&_t.data===Ua&&(s=_t,_=!0,Dt(!1));var V=m[D],H=n(V,D),O=F?null:l.get(H);O?(O.v&&Pn(O.v,V),O.i&&Pn(O.i,D),z&&L.unskip_effect(O.e)):(O=Lo(l,F?s:Rn??(Rn=$r()),V,H,D,o,r,a),F||(O.e.f|=ht),l.set(H,O)),b.add(H)}if(g===0&&i&&!w&&(F?w=cr(()=>i(s)):(w=cr(()=>i(Rn??(Rn=$r()))),w.f|=ht)),g>b.size&&Va(),De&&g>0&&$t($n()),!F)if(M.set(L,b),z){for(const[j,q]of l)b.has(j)||L.skip_effect(q.e);L.oncommit(h),L.ondiscard(c)}else h(L);_&&Dt(!0),e(A)}),E={effect:x,items:l,pending:M,outrogroups:null,fallback:w};F=!1,De&&(s=_t)}function nr(t){for(;t!==null&&(t.f&Qa)===0;)t=t.next;return t}function Ao(t,r,a,n,o){var V,H,O,j,q,Y,ae,N,C;var i=(n&Ja)!==0,s=r.length,l=t.items,d=nr(t.effect.first),y,w=null,A,m=[],M=[],F,h,c,x;if(i)for(x=0;x<s;x+=1)F=r[x],h=o(F,x),c=l.get(h).e,(c.f&ht)===0&&((H=(V=c.nodes)==null?void 0:V.a)==null||H.measure(),(A??(A=new Set)).add(c));for(x=0;x<s;x+=1){if(F=r[x],h=o(F,x),c=l.get(h).e,t.outrogroups!==null)for(const v of t.outrogroups)v.pending.delete(c),v.done.delete(c);if((c.f&jr)!==0&&(ta(c),i&&((j=(O=c.nodes)==null?void 0:O.a)==null||j.unfix(),(A??(A=new Set)).delete(c))),(c.f&ht)!==0)if(c.f^=ht,c===d)ir(c,null,a);else{var E=w?w.next:d;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),wt(t,w,c),wt(t,c,E),ir(c,E,a),w=c,m=[],M=[],d=nr(w.next);continue}if(c!==d){if(y!==void 0&&y.has(c)){if(m.length<M.length){var g=M[0],_;w=g.prev;var S=m[0],b=m[m.length-1];for(_=0;_<m.length;_+=1)ir(m[_],g,a);for(_=0;_<M.length;_+=1)y.delete(M[_]);wt(t,S.prev,b.next),wt(t,w,S),wt(t,b,g),d=g,w=b,x-=1,m=[],M=[]}else y.delete(c),ir(c,d,a),wt(t,c.prev,c.next),wt(t,c,w===null?t.effect.first:w.next),wt(t,w,c),w=c;continue}for(m=[],M=[];d!==null&&d!==c;)(y??(y=new Set)).add(d),M.push(d),d=nr(d.next);if(d===null)continue}(c.f&ht)===0&&m.push(c),w=c,d=nr(c.next)}if(t.outrogroups!==null){for(const v of t.outrogroups)v.pending.size===0&&(Xr(t,cn(v.done)),(q=t.outrogroups)==null||q.delete(v));t.outrogroups.size===0&&(t.outrogroups=null)}if(d!==null||y!==void 0){var L=[];if(y!==void 0)for(c of y)(c.f&jr)===0&&L.push(c);for(;d!==null;)(d.f&jr)===0&&d!==t.fallback&&L.push(d),d=nr(d.next);var z=L.length;if(z>0){var D=(n&ea)!==0&&s===0?a:null;if(i){for(x=0;x<z;x+=1)(ae=(Y=L[x].nodes)==null?void 0:Y.a)==null||ae.measure();for(x=0;x<z;x+=1)(C=(N=L[x].nodes)==null?void 0:N.a)==null||C.fix()}Mo(t,L,D)}}i&&na(()=>{var v,T;if(A!==void 0)for(c of A)(T=(v=c.nodes)==null?void 0:v.a)==null||T.apply()})}function Lo(t,r,a,n,o,i,s,l){var d=(s&Ga)!==0?(s&Wa)===0?Xa(a,!1,!1):En(a):null,y=(s&Ka)!==0?En(o):null;return{v:d,i:y,e:cr(()=>(i(r,d??a,y??o,l),()=>{t.delete(n)}))}}function ir(t,r,a){if(t.nodes)for(var n=t.nodes.start,o=t.nodes.end,i=r&&(r.f&ht)===0?r.nodes.start:a;n!==null;){var s=aa(n);if(i.before(n),n===o)return;n=s}}function wt(t,r,a){r===null?t.effect.first=a:r.next=a,a===null?t.effect.last=r:a.prev=r}function Fr(t,r,a=!1,n=!1,o=!1,i=!1){var s=t,l="";if(a){var d=t;De&&(s=$t(Lt(d)))}Q(()=>{var y=oa;if(l===(l=r()??"")){De&&Kt();return}if(a&&!De){y.nodes=null,d.innerHTML=l,l!==""&&Sr(Lt(d),d.lastChild);return}if(y.nodes!==null&&(to(y.nodes.start,y.nodes.end),y.nodes=null),l!==""){if(De){_t.data;for(var w=Kt(),A=w;w!==null&&(w.nodeType!==Jn||w.data!=="");)A=w,w=aa(w);if(w===null)throw ro(),no;Sr(_t,A),s=$t(w);return}var m=n?ia:o?ao:void 0,M=sa(n?"svg":o?"math":"template",m);M.innerHTML=l;var F=n||o?M:M.content;if(Sr(Lt(F),F.lastChild),n||o)for(;Lt(F);)s.before(Lt(F));else s.before(F)}})}function Ve(t,r,a,n,o){var l;De&&Kt();var i=(l=r.$$slots)==null?void 0:l[a],s=!1;i===!0&&(i=r.children,s=!0),i===void 0||i(t,s?()=>n:n)}function To(t,r,a,n,o,i){let s=De;De&&Kt();var l=null;De&&_t.nodeType===oo&&(l=_t,Kt());var d=De?_t:t,y=new No(d,!1);Qn(()=>{const w=r()||null;var A=ia;if(w===null){y.ensure(null,null);return}return y.ensure(w,m=>{if(w){if(l=De?l:sa(w,A),Sr(l,l),n){De&&Co(w)&&l.append(document.createComment(""));var M=De?Lt(l):l.appendChild($r());De&&(M===null?Dt(!1):$t(M)),n(l,M)}oa.nodes.end=l,m.before(l)}De&&$t(m)}),()=>{}},so),la(()=>{}),s&&(Dt(!0),$t(d))}function Fo(t,r,a){Tr(()=>{var n=Rr(()=>r(t,a==null?void 0:a())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Do(t,r){var a=void 0,n;ca(()=>{a!==(a=r())&&(n&&(Er(n),n=null),a&&(n=cr(()=>{Tr(()=>a(t))})))})}function da(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(a=da(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function zo(){for(var t,r,a=0,n="",o=arguments.length;a<o;a++)(t=arguments[a])&&(r=da(t))&&(n&&(n+=" "),n+=r);return n}function dt(t){return typeof t=="object"?zo(t):t??""}const Nn=[...` 	
\r\f \v\uFEFF`];function Io(t,r,a){var n=t==null?"":""+t;if(a){for(var o of Object.keys(a))if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var l=s+i;(s===0||Nn.includes(n[s-1]))&&(l===n.length||Nn.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function Mn(t,r=!1){var a=r?" !important;":";",n="";for(var o of Object.keys(t)){var i=t[o];i!=null&&i!==""&&(n+=" "+o+": "+i+a)}return n}function Ur(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Oo(t,r){if(r){var a="",n,o;if(Array.isArray(r)?(n=r[0],o=r[1]):n=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Ur)),o&&d.push(...Object.keys(o).map(Ur));var y=0,w=-1;const h=t.length;for(var A=0;A<h;A++){var m=t[A];if(l?m==="/"&&t[A-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[A+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?s++:m===")"&&s--,!l&&i===!1&&s===0){if(m===":"&&w===-1)w=A;else if(m===";"||A===h-1){if(w!==-1){var M=Ur(t.substring(y,w).trim());if(!d.includes(M)){m!==";"&&A++;var F=t.substring(y,A).trim();a+=" "+F+";"}}y=A+1,w=-1}}}}return n&&(a+=Mn(n)),o&&(a+=Mn(o,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Ce(t,r,a,n,o,i){var s=t.__className;if(De||s!==a||s===void 0){var l=Io(a,n,i);(!De||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):r?t.className=l:t.setAttribute("class",l)),t.__className=a}else if(i&&o!==i)for(var d in i){var y=!!i[d];(o==null||y!==!!o[d])&&t.classList.toggle(d,y)}return i}function Vr(t,r={},a,n){for(var o in a){var i=a[o];r[o]!==i&&(a[o]==null?t.style.removeProperty(o):t.style.setProperty(o,i,n))}}function Ze(t,r,a,n){var o=t.__style;if(De||o!==r){var i=Oo(r,n);(!De||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=r}else n&&(Array.isArray(n)?(Vr(t,a==null?void 0:a[0],n[0]),Vr(t,a==null?void 0:a[1],n[1],"important")):Vr(t,a,n));return n}function Nr(t,r,a=!1){if(t.multiple){if(r==null)return;if(!Zn(r))return io();for(var n of t.options)n.selected=r.includes(lr(n));return}for(n of t.options){var o=lr(n);if(lo(o,r)){n.selected=!0;return}}(!a||r!==void 0)&&(t.selectedIndex=-1)}function fa(t){var r=new MutationObserver(()=>{Nr(t,t.__value)});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),la(()=>{r.disconnect()})}function Ho(t,r,a=r){var n=new WeakSet,o=!0;ua(t,"change",i=>{var s=i?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(s),lr);else{var d=t.querySelector(s)??t.querySelector("option:not([disabled])");l=d&&lr(d)}a(l),t.__value=l,mt!==null&&n.add(mt)}),Tr(()=>{var i=r();if(t===document.activeElement){var s=mt;if(n.has(s))return}if(Nr(t,i,o),o&&i===void 0){var l=t.querySelector(":checked");l!==null&&(i=lr(l),a(i))}t.__value=i,o=!1}),fa(t)}function lr(t){return"__value"in t?t.__value:t.value}const ar=Symbol("class"),or=Symbol("style"),va=Symbol("is custom element"),ga=Symbol("is html"),jo=fr?"link":"LINK",Uo=fr?"input":"INPUT",Vo=fr?"option":"OPTION",Bo=fr?"select":"SELECT",qo=fr?"progress":"PROGRESS";function Qe(t){if(De){var r=!1,a=()=>{if(!r){if(r=!0,t.hasAttribute("value")){var n=t.value;Se(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var o=t.checked;Se(t,"checked",null),t.checked=o}}};t.__on_r=a,na(a),go()}}function dn(t,r){var a=fn(t);a.value===(a.value=r??void 0)||t.value===r&&(r!==0||t.nodeName!==qo)||(t.value=r??"")}function Ko(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Se(t,r,a,n){var o=fn(t);De&&(o[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName===jo)||o[r]!==(o[r]=a)&&(r==="loading"&&(t[mo]=a),a==null?t.removeAttribute(r):typeof a!="string"&&ha(t).includes(r)?t[r]=a:t.setAttribute(r,a))}function Go(t,r,a,n,o=!1,i=!1){if(De&&o&&t.nodeName===Uo){var s=t,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in a||Qe(s)}var d=fn(t),y=d[va],w=!d[ga];let A=De&&y;A&&Dt(!1);var m=r||{},M=t.nodeName===Vo;for(var F in r)F in a||(a[F]=null);a.class?a.class=dt(a.class):a[ar]&&(a.class=null),a[or]&&(a.style??(a.style=null));var h=ha(t);for(const b in a){let L=a[b];if(M&&b==="value"&&L==null){t.value=t.__value="",m[b]=L;continue}if(b==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ce(t,c,L,n,r==null?void 0:r[ar],a[ar]),m[b]=L,m[ar]=a[ar];continue}if(b==="style"){Ze(t,L,r==null?void 0:r[or],a[or]),m[b]=L,m[or]=a[or];continue}var x=m[b];if(!(L===x&&!(L===void 0&&t.hasAttribute(b)))){m[b]=L;var E=b[0]+b[1];if(E!=="$$")if(E==="on"){const z={},D="$$"+b;let V=b.slice(2);var g=Eo(V);if(So(V)&&(V=V.slice(0,-7),z.capture=!0),!g&&x){if(L!=null)continue;t.removeEventListener(V,m[D],z),m[D]=null}if(g)ie(V,t,L),We([V]);else if(L!=null){let H=function(O){m[b].call(this,O)};m[D]=$o(V,t,H,z)}}else if(b==="style")Se(t,b,L);else if(b==="autofocus")fo(t,!!L);else if(!y&&(b==="__value"||b==="value"&&L!=null))t.value=t.__value=L;else if(b==="selected"&&M)Ko(t,L);else{var _=b;w||(_=Po(_));var S=_==="defaultValue"||_==="defaultChecked";if(L==null&&!y&&!S)if(d[b]=null,_==="value"||_==="checked"){let z=t;const D=r===void 0;if(_==="value"){let V=z.defaultValue;z.removeAttribute(_),z.defaultValue=V,z.value=z.__value=D?V:null}else{let V=z.defaultChecked;z.removeAttribute(_),z.defaultChecked=V,z.checked=D?V:!1}}else t.removeAttribute(b);else S||h.includes(_)&&(y||typeof L!="string")?(t[_]=L,_ in d&&(d[_]=vo)):typeof L!="function"&&Se(t,_,L)}}}return A&&Dt(!0),m}function An(t,r,a=[],n=[],o=[],i,s=!1,l=!1){co(o,a,n,d=>{var y=void 0,w={},A=t.nodeName===Bo,m=!1;if(ca(()=>{var F=r(...d.map(e)),h=Go(t,y,F,i,s,l);m&&A&&"value"in F&&Nr(t,F.value);for(let x of Object.getOwnPropertySymbols(w))F[x]||Er(w[x]);for(let x of Object.getOwnPropertySymbols(F)){var c=F[x];x.description===uo&&(!y||c!==y[x])&&(w[x]&&Er(w[x]),w[x]=cr(()=>Do(t,()=>c))),h[x]=c}y=h}),A){var M=t;Tr(()=>{Nr(M,y.value,!0),fa(M)})}m=!0})}function fn(t){return t.__attributes??(t.__attributes={[va]:t.nodeName.includes("-"),[ga]:t.namespaceURI===ho})}var Ln=new Map;function ha(t){var r=t.getAttribute("is")||t.nodeName,a=Ln.get(r);if(a)return a;Ln.set(r,a=[]);for(var n,o=t,i=Element.prototype;i!==o;){n=_o(o);for(var s in n)n[s].set&&a.push(s);o=po(o)}return a}function tt(t,r,a=r){var n=new WeakSet;ua(t,"input",async o=>{var i=o?t.defaultValue:t.value;if(i=Br(t)?qr(i):i,a(i),mt!==null&&n.add(mt),await Pt(),i!==(i=r())){var s=t.selectionStart,l=t.selectionEnd,d=t.value.length;if(t.value=i??"",l!==null){var y=t.value.length;s===l&&l===d&&y>d?(t.selectionStart=y,t.selectionEnd=y):(t.selectionStart=s,t.selectionEnd=Math.min(l,y))}}}),(De&&t.defaultValue!==t.value||Rr(r)==null&&t.value)&&(a(Br(t)?qr(t.value):t.value),mt!==null&&n.add(mt)),bo(()=>{var o=r();if(t===document.activeElement){var i=mt;if(n.has(i))return}Br(t)&&o===qr(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function Br(t){var r=t.type;return r==="number"||r==="range"}function qr(t){return t===""?null:+t}let xt=I(se({type:"none",props:{},resolve:null}));function Wo(){return e(xt)}function st(t=void 0){const{resolve:r}=e(xt);f(xt,{type:"none",props:{},resolve:null},!0),r==null||r(t)}function Xo(t){return new Promise(r=>{f(xt,{type:"run",props:{cases:t},resolve:r},!0)})}function Yo(t){return new Promise(r=>{f(xt,{type:"restart",props:{cases:t},resolve:r},!0)})}function Qo(t){return new Promise(r=>{f(xt,{type:"clean",props:{cases:t},resolve:r},!0)})}function Ye(t,r="Alert"){return new Promise(a=>{f(xt,{type:"alert",props:{title:r,message:t},resolve:()=>a()},!0)})}function Tn(t,r="Confirm",a="OK",n="primary"){return new Promise(o=>{f(xt,{type:"confirm",props:{title:r,message:t,confirmLabel:a,confirmVariant:n},resolve:o},!0)})}function vn(t,r="",a="Input",n="",o=!1){return new Promise(i=>{f(xt,{type:"prompt",props:{title:a,message:t,value:r,placeholder:n,multiline:o},resolve:i},!0)})}var Jo=$('<div style="display:contents;"><!></div>');function Jt(t,r){function a(i){return document.body.appendChild(i),{destroy(){i.remove()}}}var n=Jo(),o=k(n);ft(o,()=>r.children),p(n),Fo(n,i=>a==null?void 0:a(i)),u(t,n)}var Zo=$('<div class="text-xs text-muted font-light"> </div>'),es=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div role="dialog" aria-modal="true"><div class="mb-3.5 grid gap-1"><div class="text-lg font-bold text-edf-bleu-fonce"> </div> <!></div> <!> <div class="flex justify-end gap-2"><!></div></div></div>');function vr(t,r){Ae(r,!0);const a=F=>{var h=es(),c=k(h),x=k(c),E=k(x),g=k(E,!0);p(E);var _=P(E,2);{var S=D=>{var V=Zo(),H=k(V,!0);p(V),Q(()=>ee(H,r.subtitle)),u(D,V)};X(_,D=>{r.subtitle&&D(S)})}p(x);var b=P(x,2);ft(b,()=>r.children);var L=P(b,2),z=k(L);ft(z,()=>r.footer),p(L),p(c),p(h),Q(()=>{Ce(c,1,`w-[min(${n()??""},96vw)] bg-white border border-border rounded-[10px] p-4.5`),Se(c,"aria-labelledby",r.titleId),Se(E,"id",r.titleId),ee(g,r.title)}),ie("keydown",h,s),ie("mousedown",h,d),ie("click",h,y),u(F,h)};let n=he(r,"maxWidth",3,"520px"),o=he(r,"portal",3,!1);function i(){r.onCancel?r.onCancel():st(null)}function s(F){F.key==="Escape"?i():F.key==="Enter"&&r.onConfirm&&r.onConfirm()}let l=!1;function d(F){l=F.target.dataset.backdrop!==void 0}function y(F){const h=F.target.dataset.backdrop!==void 0;l&&h&&i(),l=!1}var w=_e(),A=B(w);{var m=F=>{Jt(F,{children:(h,c)=>{a(h)}})},M=F=>{a(F)};X(A,F=>{o()?F(m):F(M,-1)})}u(t,w),Le()}We(["keydown","mousedown","click"]);var ts=$("<button><!></button>");function $e(t,r){let a=he(r,"variant",3,"primary"),n=he(r,"size",3,"default"),o=he(r,"disabled",3,!1);const i={default:"h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",sm:"h-[30px] rounded-md px-2.5 leading-none text-xs"},s={primary:"bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",secondary:"bg-white text-ink border border-border hover:bg-edf-gris-clair",run:"bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",warning:"bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",danger:"bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]"};var l=ts(),d=k(l);ft(d,()=>r.children),p(l),Q(()=>{Ce(l,1,`inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none ${i[n()]??""} ${s[a()]??""}`),l.disabled=o()}),ie("click",l,function(...y){var w;(w=r.onclick)==null||w.apply(this,y)}),u(t,l)}We(["click"]);var rs=$("<!> <span><!></span>",1),ns=$('<textarea class="w-full !min-h-[80px]" rows="3"></textarea>'),as=$('<input class="w-full"/>'),os=$('<div class="mb-4.5"><!></div>'),ss=$('<p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]"> </p> <!>',1);function is(t,r){Ae(r,!0);let a=he(r,"confirmLabel",3,"OK"),n=he(r,"confirmVariant",3,"primary"),o=he(r,"value",3,""),i=he(r,"placeholder",3,""),s=he(r,"multiline",3,!1);const l=o();let d=I(se(l)),y=I(void 0),w=I(void 0);Ne(()=>{var M;r.mode==="prompt"&&e(y)?(e(y).focus(),"select"in e(y)&&e(y).select()):e(w)&&((M=e(w).querySelector("button"))==null||M.focus())});function A(){r.mode==="prompt"?st(e(d)):r.mode==="confirm"?st(!0):st()}function m(){r.mode==="confirm"?st(!1):r.mode==="prompt"?st(null):st()}{const M=h=>{var c=rs(),x=B(c);{var E=S=>{$e(S,{variant:"secondary",onclick:m,children:(b,L)=>{we();var z=Be("Cancel");u(b,z)},$$slots:{default:!0}})};X(x,S=>{r.mode!=="alert"&&S(E)})}var g=P(x,2),_=k(g);$e(_,{get variant(){return n()},onclick:A,children:(S,b)=>{we();var L=Be();Q(()=>ee(L,a())),u(S,L)},$$slots:{default:!0}}),p(g),nt(g,S=>f(w,S),()=>e(w)),u(h,c)};let F=U(()=>s()?void 0:A);vr(t,{get title(){return r.title},titleId:"app-dialog-title",get onConfirm(){return e(F)},onCancel:m,footer:M,children:(h,c)=>{var x=ss(),E=B(x),g=k(E,!0);p(E);var _=P(E,2);{var S=b=>{var L=os(),z=k(L);{var D=H=>{var O=ns();xo(O),nt(O,j=>f(y,j),()=>e(y)),Q(()=>Se(O,"placeholder",i())),tt(O,()=>e(d),j=>f(d,j)),u(H,O)},V=H=>{var O=as();Qe(O),nt(O,j=>f(y,j),()=>e(y)),Q(()=>Se(O,"placeholder",i())),tt(O,()=>e(d),j=>f(d,j)),u(H,O)};X(z,H=>{s()?H(D):H(V,-1)})}p(L),u(b,L)};X(_,b=>{r.mode==="prompt"&&b(S)})}Q(()=>ee(g,r.message)),u(h,x)},$$slots:{footer:!0,default:!0}})}Le()}var ls=$('<label class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"> <!></label>');function Me(t,r){var a=ls(),n=k(a),o=P(n);ft(o,()=>r.children),p(a),Q(()=>ee(n,`${r.text??""} `)),u(t,a)}function Ct(t,r){const a=localStorage.getItem(t);if(a===null)return r;const n=Number(a);return Number.isFinite(n)?n:r}function St(t,r){Number.isFinite(r)&&localStorage.setItem(t,String(r))}function cs(t,r){return localStorage.getItem(t)??r}function us(){return{n:Ct("csauto_run_n",1),nt:Ct("csauto_run_nt",1),maxParallel:Ct("csauto_run_max_parallel",0)||null}}function ds(t){St("csauto_run_n",t.n),St("csauto_run_nt",t.nt),t.maxParallel&&St("csauto_run_max_parallel",t.maxParallel)}function fs(){return{n:Ct("csauto_restart_n",1),nt:Ct("csauto_restart_nt",1),maxParallel:Ct("csauto_restart_max_parallel",0)||null,mode:cs("csauto_restart_mode","iterations"),value:Ct("csauto_restart_value",100)}}function vs(t){St("csauto_restart_n",t.n),St("csauto_restart_nt",t.nt),t.maxParallel&&St("csauto_restart_max_parallel",t.maxParallel),localStorage.setItem("csauto_restart_mode",t.mode),St("csauto_restart_value",t.value)}function gs(){return{keepLast:Ct("csauto_clean_keep_last",1)}}function hs(t){St("csauto_clean_keep_last",t.keepLast)}var ps=$("<!> <!>",1),ms=$('<input type="number" min="1" step="1"/>'),_s=$('<input type="number" min="1" step="1"/>'),bs=$('<input type="number" min="0" step="1"/>'),xs=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div>');function ys(t,r){Ae(r,!0);const a=us(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=I(se(a.n)),i=I(se(a.nt)),s=I(se(n));async function l(){if(!Number.isFinite(e(o))||e(o)<=0){await Ye("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Ye("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Ye("Max parallel must be empty or > 0.","Invalid value");return}const d={n:e(o),nt:e(i),maxParallel:e(s)||null};ds(d),st(d)}{const d=A=>{var m=ps(),M=B(m);$e(M,{variant:"secondary",onclick:()=>st(null),children:(h,c)=>{we();var x=Be("Cancel");u(h,x)},$$slots:{default:!0}});var F=P(M,2);$e(F,{variant:"run",onclick:l,children:(h,c)=>{we();var x=Be("Run");u(h,x)},$$slots:{default:!0}}),u(A,m)};let y=U(()=>r.cases.length),w=U(()=>r.cases.length>1?"s":"");vr(t,{title:"Run Cases",titleId:"run-dialog-title",get subtitle(){return`${e(y)??""} case${e(w)??""} selected`},onConfirm:l,footer:d,children:(A,m)=>{var M=xs(),F=k(M);Me(F,{text:"MPI Ranks (n)",children:(x,E)=>{var g=ms();Qe(g),tt(g,()=>e(o),_=>f(o,_)),u(x,g)}});var h=P(F,2);Me(h,{text:"OMP Threads (nt)",children:(x,E)=>{var g=_s();Qe(g),tt(g,()=>e(i),_=>f(i,_)),u(x,g)}});var c=P(h,2);Me(c,{text:"Max Parallel",children:(x,E)=>{var g=bs();Qe(g),tt(g,()=>e(s),_=>f(s,_)),u(x,g)}}),p(M),u(A,M)},$$slots:{footer:!0,default:!0}})}Le()}var ws=$("<!> <!>",1),ks=$('<input type="number" min="1" step="1"/>'),Cs=$('<input type="number" min="1" step="1"/>'),Ss=$('<input type="number" min="0" step="1"/>'),$s=$("<select><option>Iterations</option><option>Physical time</option></select>"),Ps=$('<input type="number"/>'),Es=$('<div class="grid grid-cols-3 gap-2.5 mb-3"><!> <!> <!></div> <div class="grid grid-cols-2 gap-2.5 mb-3"><!> <!></div>',1);function Rs(t,r){Ae(r,!0);const a=fs(),n=a.maxParallel??(r.cases.length>1?r.cases.length:0);let o=I(se(a.n)),i=I(se(a.nt)),s=I(se(n)),l=I(se(a.mode)),d=I(se(a.value)),y=U(()=>e(l)==="iterations"?"Additional iterations":"Additional physical time"),w=U(()=>e(l)==="iterations"?"1":"any"),A=U(()=>e(l)==="iterations"?"1":"0");async function m(){if(!Number.isFinite(e(o))||e(o)<=0){await Ye("MPI ranks must be an integer > 0.","Invalid value");return}if(!Number.isFinite(e(i))||e(i)<=0){await Ye("Threads must be an integer > 0.","Invalid value");return}if(e(s)&&(!Number.isFinite(e(s))||e(s)<=0)){await Ye("Max parallel must be empty or > 0.","Invalid value");return}if(!Number.isFinite(e(d))||e(d)<=0){await Ye("Value must be > 0.","Invalid value");return}if(e(l)==="iterations"&&!Number.isInteger(e(d))){await Ye("Iterations must be an integer.","Invalid value");return}const M={n:e(o),nt:e(i),maxParallel:e(s)||null,restartMode:e(l),restartValue:e(d)};vs({n:e(o),nt:e(i),maxParallel:e(s)||null,mode:e(l),value:e(d)}),st(M)}{const M=c=>{var x=ws(),E=B(x);$e(E,{variant:"secondary",onclick:()=>st(null),children:(_,S)=>{we();var b=Be("Cancel");u(_,b)},$$slots:{default:!0}});var g=P(E,2);$e(g,{variant:"warning",onclick:m,children:(_,S)=>{we();var b=Be("Restart");u(_,b)},$$slots:{default:!0}}),u(c,x)};let F=U(()=>r.cases.length),h=U(()=>r.cases.length>1?"s":"");vr(t,{title:"Restart Cases",titleId:"restart-dialog-title",get subtitle(){return`${e(F)??""} case${e(h)??""} selected`},onConfirm:m,footer:M,children:(c,x)=>{var E=Es(),g=B(E),_=k(g);Me(_,{text:"MPI Ranks (n)",children:(V,H)=>{var O=ks();Qe(O),tt(O,()=>e(o),j=>f(o,j)),u(V,O)}});var S=P(_,2);Me(S,{text:"OMP Threads (nt)",children:(V,H)=>{var O=Cs();Qe(O),tt(O,()=>e(i),j=>f(i,j)),u(V,O)}});var b=P(S,2);Me(b,{text:"Max Parallel",children:(V,H)=>{var O=Ss();Qe(O),tt(O,()=>e(s),j=>f(s,j)),u(V,O)}}),p(g);var L=P(g,2),z=k(L);Me(z,{text:"Stop criterion",children:(V,H)=>{var O=$s(),j=k(O);j.value=j.__value="iterations";var q=P(j);q.value=q.__value="physical_time",p(O),Ho(O,()=>e(l),Y=>f(l,Y)),u(V,O)}});var D=P(z,2);Me(D,{get text(){return e(y)},children:(V,H)=>{var O=Ps();Qe(O),Q(()=>{Se(O,"min",e(A)),Se(O,"step",e(w))}),tt(O,()=>e(d),j=>f(d,j)),u(V,O)}}),p(L),u(c,E)},$$slots:{footer:!0,default:!0}})}Le()}function Te(t,r){let a=he(r,"size",3,14);var n=_e(),o=B(n);ko(o,()=>r.icon,(i,s)=>{s(i,{get size(){return a()},class:"icon"})}),u(t,n)}/**
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
 */const Ns={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Ms=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const Fn=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim();var As=It("<svg><!><!></svg>");function Ke(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]),n=Ue(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ae(r,!1);let o=he(r,"name",8,void 0),i=he(r,"color",8,"currentColor"),s=he(r,"size",8,24),l=he(r,"strokeWidth",8,2),d=he(r,"absoluteStrokeWidth",8,!1),y=he(r,"iconNode",24,()=>[]);Ro();var w=As();An(w,(M,F,h)=>({...Ns,...M,...n,width:s(),height:s(),stroke:i(),"stroke-width":F,class:h}),[()=>Ms(n)?void 0:{"aria-hidden":"true"},()=>(jt(d()),jt(l()),jt(s()),Rr(()=>d()?Number(l())*24/Number(s()):l())),()=>(jt(Fn),jt(o()),jt(a),Rr(()=>Fn("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var A=k(w);Je(A,1,y,un,(M,F)=>{var h=U(()=>yo(e(F),2));let c=()=>e(h)[0],x=()=>e(h)[1];var E=_e(),g=B(E);To(g,c,!0,(_,S)=>{An(_,()=>({...x()}))}),u(M,E)});var m=P(A);Ve(m,r,"default",{}),p(w),u(t,w),Le()}function Ls(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];Ke(t,qe({name:"arrow-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ts(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];Ke(t,qe({name:"arrow-left-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Fs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ke(t,qe({name:"arrow-up"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function gn(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];Ke(t,qe({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ds(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];Ke(t,qe({name:"chevron-right"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function zs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];Ke(t,qe({name:"circle-stop"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Is(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Ke(t,qe({name:"circle-x"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function gr(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ke(t,qe({name:"download"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Os(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];Ke(t,qe({name:"droplets"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Hs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ke(t,qe({name:"ellipsis"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function js(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ke(t,qe({name:"external-link"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Us(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];Ke(t,qe({name:"fast-forward"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Vs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];Ke(t,qe({name:"pause"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Bs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Ke(t,qe({name:"pen-line"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function qs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];Ke(t,qe({name:"pencil"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function pa(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];Ke(t,qe({name:"play"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ks(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ke(t,qe({name:"plus"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Zt(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ke(t,qe({name:"refresh-cw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Gs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];Ke(t,qe({name:"rotate-ccw"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ws(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ke(t,qe({name:"save"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Xs(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Ke(t,qe({name:"settings"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}function Ys(t,r){const a=Ue(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ke(t,qe({name:"trash-2"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=_e(),l=B(s);Ve(l,r,"default",{}),u(o,s)},$$slots:{default:!0}}))}var Qs=$('<li role="option"> </li>'),Js=$('<ul role="listbox" class="bg-white border border-border rounded-md max-h-[240px] overflow-y-auto py-1"></ul>'),Zs=$('<div><button type="button" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function lt(t,r){Ae(r,!0);let a=he(r,"value",3,""),n=he(r,"placeholder",3,"Select..."),o=he(r,"class",3,""),i=he(r,"buttonClass",3,""),s=I(!1),l=I(void 0),d=I(void 0),y=I(""),w=U(()=>{var D;return((D=r.options.find(V=>V.value===a()))==null?void 0:D.label)??n()});function A(D){var V;f(s,!1),(V=r.onchange)==null||V.call(r,D)}function m(){if(!e(l)||!e(d))return;const D=e(l).getBoundingClientRect(),V=e(d).offsetHeight,H=4,O=window.innerHeight-D.bottom-H,q=O<V&&D.top-H>O?D.top-H-V:D.bottom+H,Y=Math.min(D.left,window.innerWidth-D.width);f(y,`position:fixed; top:${q}px; left:${Y}px; width:${D.width}px; z-index:9999;`)}async function M(){f(s,!e(s)),e(s)&&(await Pt(),m())}function F(D){D.key==="Escape"&&f(s,!1)}function h(D){e(s)&&e(l)&&!e(l).contains(D.target)&&e(d)&&!e(d).contains(D.target)&&f(s,!1)}var c=Zs();rt("mousedown",it,h),rt("keydown",it,F),rt("scroll",it,()=>{e(s)&&f(s,!1)});var x=B(c),E=k(x),g=k(E),_=k(g,!0);p(g);var S=P(g,2),b=k(S);Te(b,{get icon(){return gn},size:14}),p(S),p(E),nt(E,D=>f(l,D),()=>e(l)),p(x);var L=P(x,2);{var z=D=>{Jt(D,{children:(V,H)=>{var O=Js();Je(O,21,()=>r.options,j=>j.value,(j,q)=>{var Y=Qs();Se(Y,"tabindex",0);var ae=k(Y,!0);p(Y),Q(()=>{Se(Y,"aria-selected",e(q).value===a()),Ce(Y,1,`px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						${e(q).value===a()?"text-edf-bleu-fonce font-bold bg-[rgba(16,87,200,0.06)]":"text-ink hover:bg-edf-gris-clair"}`),ee(ae,e(q).label)}),ie("mousedown",Y,N=>{N.stopPropagation(),A(e(q).value)}),u(j,Y)}),p(O),nt(O,j=>f(d,j),()=>e(d)),Q(()=>Ze(O,e(y))),u(V,O)}})};X(L,D=>{e(s)&&D(z)})}Q(()=>{Ce(x,1,`relative inline-flex ${o()??""}`),Ce(E,1,dt(i()||"flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen")),Se(E,"aria-expanded",e(s)),ee(_,e(w)),Ce(S,1,`text-muted shrink-0 transition-transform duration-150 ${e(s)?"rotate-180":""}`)}),ie("mousedown",E,D=>{D.stopPropagation(),M()}),u(t,c),Le()}We(["mousedown"]);var ei=It('<svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ti=$('<div class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-edf-gris-clair select-none"><span><!></span> <span class="text-[13px] text-ink"> </span></div>'),ri=$('<div class="bg-white border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"><div class="flex gap-2 px-2.5 py-1 border-b border-[rgba(51,51,51,0.08)]"><button class="link-btn">All</button> <button class="link-btn">None</button></div> <!></div>'),ni=$('<div><button type="button" class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-edf-gris-clair focus:outline-none focus:border-edf-bleu-moyen" aria-haspopup="listbox"><span class="truncate"> </span> <span><!></span></button></div> <!>',1);function Gt(t,r){Ae(r,!0);let a=he(r,"selected",19,()=>[]),n=he(r,"placeholder",3,"Select..."),o=he(r,"class",3,""),i=I(!1),s=I(void 0),l=I(void 0),d=I(""),y=U(()=>new Set(a())),w=U(()=>a().length===0?n():a().length===r.options.length?`All (${r.options.length})`:a().length<=2?a().map(H=>{var O;return((O=r.options.find(j=>j.value===H))==null?void 0:O.label)??H}).join(", "):`${a().length} selected`);function A(H){var j;const O=new Set(e(y));O.has(H)?O.delete(H):O.add(H),(j=r.onchange)==null||j.call(r,[...O])}function m(){var H;(H=r.onchange)==null||H.call(r,r.options.map(O=>O.value))}function M(){var H;(H=r.onchange)==null||H.call(r,[])}function F(){if(!e(s)||!e(l))return;const H=e(s).getBoundingClientRect(),O=e(l).offsetHeight,j=4,q=window.innerHeight-H.bottom-j,ae=q<O&&H.top-j>q?H.top-j-O:H.bottom+j,N=Math.min(H.left,window.innerWidth-H.width);f(d,`position:fixed; top:${ae}px; left:${N}px; min-width:${H.width}px; z-index:9999;`)}async function h(){f(i,!e(i)),e(i)&&(await Pt(),F())}function c(H){e(i)&&e(s)&&!e(s).contains(H.target)&&e(l)&&!e(l).contains(H.target)&&f(i,!1)}function x(H){H.key==="Escape"&&f(i,!1)}var E=ni();rt("mousedown",it,c),rt("keydown",it,x),rt("scroll",it,()=>{e(i)&&f(i,!1)});var g=B(E),_=k(g),S=k(_),b=k(S,!0);p(S);var L=P(S,2),z=k(L);Te(z,{get icon(){return gn},size:14}),p(L),p(_),nt(_,H=>f(s,H),()=>e(s)),p(g);var D=P(g,2);{var V=H=>{Jt(H,{children:(O,j)=>{var q=ri(),Y=k(q),ae=k(Y),N=P(ae,2);p(Y);var C=P(Y,2);Je(C,17,()=>r.options,v=>v.value,(v,T)=>{var R=ti(),J=k(R),oe=k(J);{var ge=ne=>{var ue=ei();u(ne,ue)},le=U(()=>e(y).has(e(T).value));X(oe,ne=>{e(le)&&ne(ge)})}p(J);var K=P(J,2),re=k(K,!0);p(K),p(R),Q(ne=>{Ce(J,1,`inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						${ne??""}`),ee(re,e(T).label)},[()=>e(y).has(e(T).value)?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen"]),ie("mousedown",R,ne=>{ne.stopPropagation(),A(e(T).value)}),u(v,R)}),p(q),nt(q,v=>f(l,v),()=>e(l)),Q(()=>Ze(q,e(d))),ie("mousedown",ae,v=>{v.stopPropagation(),m()}),ie("mousedown",N,v=>{v.stopPropagation(),M()}),u(O,q)}})};X(D,H=>{e(i)&&H(V)})}Q(()=>{Ce(g,1,`relative inline-flex ${o()??""}`),Se(_,"aria-expanded",e(i)),ee(b,e(w)),Ce(L,1,`text-muted shrink-0 transition-transform duration-150 ${e(i)?"rotate-180":""}`)}),ie("mousedown",_,H=>{H.stopPropagation(),h()}),u(t,E),Le()}We(["mousedown"]);const Yr="csauto_token";let ma=I(se(localStorage.getItem(Yr)??""));function _a(){return e(ma)}function ba(t){f(ma,t,!0),t?localStorage.setItem(Yr,t):localStorage.removeItem(Yr)}let xr=null;async function hn(t,r={}){const a=new Headers(r.headers),n=_a();n&&a.set("X-CSAUTO-TOKEN",n);const o=await fetch(t,{...r,headers:a});if(o.status===401){xr||(xr=vn("API token required:",n,"Authentication"));const i=await xr;return xr=null,i===null?o:(ba(i),a.set("X-CSAUTO-TOKEN",i),fetch(t,{...r,headers:a}))}return o}async function ct(t){const r=await hn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.json()}async function Dr(t){const r=await hn(t);if(!r.ok)throw new Error(`GET ${t} failed: ${r.status}`);return r.text()}async function Rt(t,r){const a=await hn(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const n=await a.text().catch(()=>a.statusText);throw new Error(`POST ${t} failed: ${a.status} — ${n}`)}return a.json()}function zr(t){return t.map(r=>`case=${encodeURIComponent(r)}`).join("&")}function ai(t=!1){return ct(`/api/status${t?"?log=1":""}`)}function Dn(t){return ct(`/api/perf?${zr(t)}`)}function oi(){return ct("/api/app_config")}function si(t){return ct(`/api/residual_columns?${zr(t)}`).then(r=>r.columns??[])}function ii(t,r,a={}){const n=new URLSearchParams;return t.forEach(o=>n.append("case",o)),n.set("columns",r.join(",")),a.width&&n.set("width",String(a.width)),a.height&&n.set("height",String(a.height)),a.xMin!==void 0&&n.set("x_min",String(a.xMin)),a.includeHistory&&n.set("include_history","true"),Dr(`/api/residuals_svg?${n}`)}function xa(t){return ct(`/api/restart_origin?${zr(t)}`)}function li(t){var a;const r=new URLSearchParams;return t.cases.forEach(n=>r.append("case",n)),(a=t.files)!=null&&a.length&&r.set("files",t.files.join(",")),t.maxHits&&r.set("max_hits",String(t.maxHits)),t.context!==void 0&&r.set("context",String(t.context)),t.sev&&r.set("sev",t.sev),t.q&&r.set("q",t.q),ct(`/api/recent_errors?${r}`)}function ci(t,r,a){const n=new URLSearchParams({case:t,file:r,n:String(a)});return Dr(`/api/tail?${n}`)}function ui(t){return ct(`/api/resu_files?case=${encodeURIComponent(t)}`).then(r=>r.files??[])}function di(t){return ct(`/api/resu_dirs?${zr(t)}`).then(r=>r.dirs??[])}function Qr(t,r){const a=new URLSearchParams({scope:r});return t.forEach(n=>a.append("case",n)),ct(`/api/probes?${a}`).then(n=>n.files??[])}function fi(t,r){const a=new URLSearchParams;return t.forEach(n=>a.append("case",n)),r.forEach(n=>a.append("probe",n)),ct(`/api/probe_columns?${a}`).then(n=>n.columns??[])}function vi(t,r,a){const n=new URLSearchParams({case:t,probe:r});return a.forEach(o=>n.append("column",o)),ct(`/api/probe_position?${n}`)}function gi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.probes.forEach(a=>r.append("probe",a)),r.set("columns",t.columns.join(",")),t.axis&&r.set("axis",t.axis),t.xMin!==void 0&&r.set("x_min",String(t.xMin)),t.timeMin!==void 0&&r.set("time_min",String(t.timeMin)),r.set("include_history","true"),t.width&&r.set("width",String(t.width)),t.height&&r.set("height",String(t.height)),Dr(`/api/probe_svg?${r}`)}function hi(t){const r=new URLSearchParams;return t.cases.forEach(a=>r.append("case",a)),t.base&&r.set("base",t.base),t.kind&&r.set("kind",t.kind),t.filter&&r.set("filter",t.filter),Dr(`/api/compare_runs?${r}`)}function zn(t){return Rt("/api/run_case",{cases:t.cases,n:t.n,nt:t.nt,max_parallel:t.maxParallel??void 0,restart:t.restart??!1,restart_mode:t.restartMode??"",restart_value:t.restartValue??void 0}).then(()=>{})}function pi(t){return Rt("/api/kill_case",{cases:t}).then(()=>{})}function yr(t){return Rt("/api/control_case",{cases:t.cases,action:t.action,value:t.value??void 0}).then(()=>{})}function mi(t){return Rt("/api/cleanup_cases",{cases:t.cases,keep_last:t.keepLast??1,prune_resu:t.pruneResu??!0,keep_resu:t.keepResu??[],delete_resu:t.deleteResu??[],max_log_mb:t.maxLogMb??50,clear_cid:!0,clear_pyc:!1})}function _i(t,r){return Rt("/api/case_note",{case:t,note:r}).then(()=>{})}function bi(t,r){return Rt("/api/case_convergence",{case:t,convergence:r}).then(()=>{})}function xi(t){return Rt("/api/open_gui",{case:t}).then(()=>{})}function yi(){return ct("/api/settings/telemetry")}function wi(t){return Rt("/api/settings/telemetry",{enabled:t})}var ki=$("<!> <!>",1),Ci=$('<input type="number" min="0" step="1" class="w-[80px]"/>'),Si=$('<span class="text-xs text-muted">Loading...</span>'),$i=$('<span class="text-xs text-muted">No folders found</span>'),Pi=$('<div class="mb-3"><!></div>'),Ei=$('<div class="flex gap-2.5 flex-wrap items-end mb-3"><!> <!></div> <!>',1);function Ri(t,r){Ae(r,!0);const a=gs();let n=I("keep_latest"),o=I(se(a.keepLast)),i=I(se([])),s=I(se([])),l=I(!0),d=U(()=>e(n)==="keep_folder"||e(n)==="delete_folder");const y=[{value:"keep_latest",label:"Keep latest N"},{value:"delete_all",label:"Delete all RESU"},{value:"keep_folder",label:"Keep specific folders"},{value:"delete_folder",label:"Delete specific folders"}];let w=U(()=>e(i).map(m=>({value:m,label:m})));Yn(async()=>{try{f(i,await di(r.cases),!0)}catch{f(i,[],!0)}f(l,!1)});async function A(){if(e(d)&&e(s).length===0){await Ye("Please select at least one RESU folder.","Missing selection");return}const m={action:e(n)};e(n)==="keep_latest"?(m.keepLast=e(o),hs({keepLast:e(o)})):e(n)==="delete_all"?m.keepLast=0:e(n)==="keep_folder"?m.keepResu=e(s):e(n)==="delete_folder"&&(m.deleteResu=e(s)),st(m)}{const m=h=>{var c=ki(),x=B(c);$e(x,{variant:"secondary",onclick:()=>st(null),children:(g,_)=>{we();var S=Be("Cancel");u(g,S)},$$slots:{default:!0}});var E=P(x,2);$e(E,{variant:"primary",onclick:A,children:(g,_)=>{we();var S=Be("Clean");u(g,S)},$$slots:{default:!0}}),u(h,c)};let M=U(()=>r.cases.length),F=U(()=>r.cases.length>1?"s":"");vr(t,{title:"Cleanup Cases",titleId:"clean-dialog-title",get subtitle(){return`${e(M)??""} case${e(F)??""} selected`},footer:m,children:(h,c)=>{var x=Ei(),E=B(x),g=k(E);Me(g,{text:"Action",children:(z,D)=>{lt(z,{class:"w-[200px]",get options(){return y},get value(){return e(n)},onchange:V=>f(n,V,!0)})}});var _=P(g,2);{var S=z=>{Me(z,{text:"Keep last",children:(D,V)=>{var H=Ci();Qe(H),tt(H,()=>e(o),O=>f(o,O)),u(D,H)}})};X(_,z=>{e(n)==="keep_latest"&&z(S)})}p(E);var b=P(E,2);{var L=z=>{var D=Pi(),V=k(D);Me(V,{text:"RESU folders",children:(H,O)=>{var j=_e(),q=B(j);{var Y=C=>{var v=Si();u(C,v)},ae=C=>{var v=$i();u(C,v)},N=C=>{Gt(C,{class:"w-full",get options(){return e(w)},get selected(){return e(s)},onchange:v=>f(s,v,!0),placeholder:"Select folders..."})};X(q,C=>{e(l)?C(Y):e(i).length===0?C(ae,1):C(N,-1)})}u(H,j)}}),p(D),u(z,D)};X(b,z=>{e(d)&&z(L)})}u(h,x)},$$slots:{footer:!0,default:!0}})}Le()}function Ni(t,r){Ae(r,!0);let a=U(Wo);var n=_e(),o=B(n);{var i=y=>{ys(y,{get cases(){return e(a).props.cases}})},s=y=>{Rs(y,{get cases(){return e(a).props.cases}})},l=y=>{Ri(y,{get cases(){return e(a).props.cases}})},d=y=>{is(y,{get mode(){return e(a).type},get title(){return e(a).props.title},get message(){return e(a).props.message},get confirmLabel(){return e(a).props.confirmLabel},get confirmVariant(){return e(a).props.confirmVariant},get value(){return e(a).props.value},get placeholder(){return e(a).props.placeholder},get multiline(){return e(a).props.multiline}})};X(o,y=>{e(a).type==="run"?y(i):e(a).type==="restart"?y(s,1):e(a).type==="clean"?y(l,2):(e(a).type==="alert"||e(a).type==="confirm"||e(a).type==="prompt")&&y(d,3)})}u(t,n),Le()}let ur=I(se([])),Mi=0;function Ai(){return e(ur)}function wr(t,r="success",a=3500){const n=++Mi;f(ur,[...e(ur),{id:n,message:t,variant:r}],!0),setTimeout(()=>ya(n),a)}function ya(t){f(ur,e(ur).filter(r=>r.id!==t),!0)}var Li=$('<div role="status"> </div>'),Ti=$('<div class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"></div>');function Fi(t,r){Ae(r,!0);let a=U(Ai);Jt(t,{children:(n,o)=>{var i=Ti();Je(i,21,()=>e(a),s=>s.id,(s,l)=>{var d=Li(),y=k(d,!0);p(d),Q(()=>{Ce(d,1,`pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer ${e(l).variant==="success"?"bg-edf-vert-fonce":"bg-edf-orange-fonce"}`),ee(y,e(l).message)}),ie("click",d,()=>ya(e(l).id)),u(s,d)}),p(i),u(n,i)}}),Le()}We(["click"]);var Di=It('<svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),zi=It('<svg viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>'),Ii=$('<span role="checkbox"><!></span>'),Oi=$("<span> </span><!>",1),Hi=$("<!><span> </span>",1),ji=$('<span class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"><!></span>');function zt(t,r){Ae(r,!0);const a=h=>{var c=Ii(),x=k(c);{var E=_=>{var S=Di();Q(()=>Ze(S,`width: ${s()-4}px; height: ${s()-4}px;`)),u(_,S)},g=_=>{var S=zi();Q(()=>Ze(S,`width: ${s()-4}px; height: ${s()-4}px;`)),u(_,S)};X(x,_=>{n()&&!o()?_(E):o()&&_(g,1)})}p(c),Q(()=>{Ce(c,1,`inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			${i()?"opacity-40 cursor-not-allowed":""}
			${n()||o()?"bg-edf-bleu-moyen border-edf-bleu-moyen text-white":"bg-white border-edf-gris-moyen hover:border-edf-bleu-clair"}`),Ze(c,`width: ${s()??""}px; height: ${s()??""}px;`),Se(c,"aria-checked",o()?"mixed":n()),Se(c,"aria-disabled",i()),Se(c,"tabindex",i()?-1:0)}),ie("click",c,y),ie("keydown",c,w),u(h,c)};let n=he(r,"checked",3,!1),o=he(r,"indeterminate",3,!1),i=he(r,"disabled",3,!1),s=he(r,"size",3,16),l=he(r,"label",3,""),d=he(r,"labelFirst",3,!1);function y(h){var x;if(h.stopPropagation(),i())return;const c=o()?!0:!n();(x=r.onchange)==null||x.call(r,c)}function w(h){(h.key===" "||h.key==="Enter")&&(h.preventDefault(),h.stopPropagation(),y(h))}var A=_e(),m=B(A);{var M=h=>{var c=ji(),x=k(c);{var E=_=>{var S=Oi(),b=B(S),L=k(b,!0);p(b);var z=P(b);a(z),Q(()=>ee(L,l())),u(_,S)},g=_=>{var S=Hi(),b=B(S);a(b);var L=P(b),z=k(L,!0);p(L),Q(()=>ee(z,l())),u(_,S)};X(x,_=>{d()?_(E):_(g,-1)})}p(c),ie("click",c,y),ie("keydown",c,w),u(h,c)},F=h=>{a(h)};X(m,h=>{l()?h(M):h(F,-1)})}u(t,A),Le()}We(["click","keydown"]);function pn(t,r){try{const a=localStorage.getItem(t);return a===null?r:JSON.parse(a)}catch{return r}}function Ir(t,r){localStorage.setItem(t,JSON.stringify(r))}const Jr=new Map;function hr(t,r,a){vt(t),Jr.set(t,setInterval(r,a))}function vt(t){const r=Jr.get(t);r!==void 0&&(clearInterval(r),Jr.delete(t))}const Tt={status:1e3,tail:1e3,plot:3e3,probe:3e3,errors:5e3},Ui=["status","plot","probe","tail","errors"],Kr={status:{label:"Status table",min:500},plot:{label:"Residual plots",min:1e3},probe:{label:"Probe plots",min:1e3},tail:{label:"Log tail",min:500},errors:{label:"Recent errors",min:2e3}},sr=pn("csauto_refresh_rates",{});let bt=I(se({status:sr.status??Tt.status,tail:sr.tail??Tt.tail,plot:sr.plot??Tt.plot,probe:sr.probe??Tt.probe,errors:sr.errors??Tt.errors}));function Vi(){return e(bt)}function Bi(t,r){f(bt,{...e(bt),[t]:r},!0),Ir("csauto_refresh_rates",e(bt))}function qi(){return e(bt).status}function In(){return e(bt).tail}function On(){return e(bt).plot}function Ki(){return e(bt).probe}function Hn(){return e(bt).errors}const Zr=new Set;function pr(t){return Zr.add(t),()=>Zr.delete(t)}function Gi(){Zr.forEach(t=>t())}const en=pn("csauto_autorefresh_enabled",{});function er(t){return en[t]??!0}function tr(t,r){en[t]=r,Ir("csauto_autorefresh_enabled",en)}var Wi=$("<!> <!>",1),Xi=$('<div class="flex items-center justify-between gap-3"><div><span class="text-sm text-ink"> </span> <span class="text-[11px] text-muted ml-1"> </span></div> <div class="flex items-center gap-1"><input type="text" inputmode="numeric" class="w-[72px] text-right"/> <span class="text-[11px] text-muted">ms</span></div></div>'),Yi=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">Telemetry</div> <!></div>'),Qi=$('<div class="mb-5"><div class="text-xs font-bold text-ink mb-2">API token</div> <input type="text" placeholder="Enter your API token" class="w-full"/></div> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs font-bold text-ink">Auto-refresh intervals</span> <button class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline">Reset defaults</button></div> <div class="flex flex-col gap-2"></div></div> <!>',1);function Ji(t,r){Ae(r,!0);let a=I(se(_a())),n=I(se({...Vi()})),o=I(!0),i=I(!1);Ne(()=>{yi().then(y=>{f(o,y.enabled,!0),f(i,!0)}).catch(()=>{f(i,!1)})});function s(y){const{min:w}=Kr[y];let A=e(n)[y];(typeof A!="number"||isNaN(A))&&(A=Tt[y]),f(n,{...e(n),[y]:Math.max(w,Math.round(A))},!0)}function l(y,w){const A=w.target,m=A.value.replace(/[^0-9]/g,""),M=parseInt(m,10);isNaN(M)?m===""&&f(n,{...e(n),[y]:Kr[y].min},!0):f(n,{...e(n),[y]:M},!0),A.value=String(e(n)[y])}function d(){ba(e(a));for(const y of Object.keys(e(n)))s(y),Bi(y,e(n)[y]);e(i)&&wi(e(o)).catch(()=>{}),r.onClose()}vr(t,{title:"Settings",titleId:"settings-dialog-title",get onCancel(){return r.onClose},onConfirm:d,maxWidth:"400px",portal:!0,footer:w=>{var A=Wi(),m=B(A);$e(m,{variant:"secondary",get onclick(){return r.onClose},children:(F,h)=>{we();var c=Be("Cancel");u(F,c)},$$slots:{default:!0}});var M=P(m,2);$e(M,{variant:"primary",onclick:d,children:(F,h)=>{we();var c=Be("Save");u(F,c)},$$slots:{default:!0}}),u(w,A)},children:(w,A)=>{var m=Qi(),M=B(m),F=P(k(M),2);Qe(F),p(M);var h=P(M,2),c=k(h),x=P(k(c),2);p(c);var E=P(c,2);Je(E,20,()=>Ui,S=>S,(S,b)=>{const L=U(()=>Kr[b]);var z=Xi(),D=k(z),V=k(D),H=k(V,!0);p(V);var O=P(V,2),j=k(O);p(O),p(D);var q=P(D,2),Y=k(q);Qe(Y),we(2),p(q),p(z),Q(()=>{ee(H,e(L).label),ee(j,`min ${e(L).min??""}ms`),dn(Y,e(n)[b])}),ie("input",Y,ae=>l(b,ae)),rt("blur",Y,()=>s(b)),u(S,z)}),p(E),p(h);var g=P(h,2);{var _=S=>{var b=Yi(),L=P(k(b),2);zt(L,{get checked(){return e(o)},onchange:z=>f(o,z,!0),label:"Send anonymous usage statistics"}),p(b),u(S,b)};X(g,S=>{e(i)&&S(_)})}tt(F,()=>e(a),S=>f(a,S)),ie("click",x,()=>f(n,{...Tt},!0)),u(w,m)},$$slots:{footer:!0,default:!0}}),Le()}We(["click","input"]);const Zi=""+new URL("../assets/code-saturne.BHojVttu.svg",import.meta.url).href;let wa=I(null);function el(t){f(wa,t,!0)}function Bt(){return e(wa)}var tl=$('<img alt="CODE_SATURNE" class="h-7 w-auto"/>'),rl=$('<span class="text-lg font-bold text-ink tracking-tight"> </span>'),nl=$('<header class="sticky top-0 z-40 flex items-center gap-6 h-14 bg-edf-blanc border-b border-edf-gris-moyen max-lg:flex-wrap max-lg:h-auto max-lg:gap-2" style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"><div class="flex items-center gap-3 mr-auto"><!></div> <nav class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"><div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"> </span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-bleu-clair tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">running</span></div> <div class="flex items-baseline gap-1.5"><span class="text-lg font-bold text-edf-vert-fonce tracking-tight"><!> </span> <span class="text-sm font-[edf-2020-soft] italic text-edf-noir">converged</span></div></nav> <div class="flex items-center"><button class="flex items-center justify-center w-9 h-9 border border-edf-gris-moyen rounded-md bg-white text-ink cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair hover:border-edf-gris-moyen" title="Settings"><!></button></div></header> <!>',1);function al(t,r){Ae(r,!0);let a=U(()=>r.shownCases!==r.totalCases),n=I(!1);var o=nl(),i=B(o),s=k(i),l=k(s);{var d=C=>{var v=tl();Q(()=>Se(v,"src",Zi)),u(C,v)},y=U(()=>{var C;return!Bt()||((C=Bt())==null?void 0:C.solver)==="code_saturne"}),w=C=>{var v=rl(),T=k(v,!0);p(v),Q(R=>ee(T,R),[()=>{var R;return(R=Bt())==null?void 0:R.solver}]),u(C,v)};X(l,C=>{e(y)?C(d):C(w,-1)})}p(s);var A=P(s,2),m=k(A),M=k(m),F=k(M);{var h=C=>{var v=Be();Q(()=>ee(v,`${r.shownCases??""}/`)),u(C,v)};X(F,C=>{e(a)&&C(h)})}var c=P(F,1,!0);p(M);var x=P(M,2),E=k(x,!0);p(x),p(m);var g=P(m,2),_=k(g),S=k(_);{var b=C=>{var v=Be();Q(()=>ee(v,`${r.shownRunning??""}/`)),u(C,v)};X(S,C=>{e(a)&&C(b)})}var L=P(S,1,!0);p(_),we(2),p(g);var z=P(g,2),D=k(z),V=k(D);{var H=C=>{var v=Be();Q(()=>ee(v,`${r.shownConverged??""}/`)),u(C,v)};X(V,C=>{e(a)&&C(H)})}var O=P(V,1,!0);p(D),we(2),p(z),p(A);var j=P(A,2),q=k(j),Y=k(q);Te(Y,{get icon(){return Xs},size:18}),p(q),p(j),p(i);var ae=P(i,2);{var N=C=>{Ji(C,{onClose:()=>f(n,!1)})};X(ae,C=>{e(n)&&C(N)})}Q(()=>{ee(c,r.totalCases),ee(E,r.totalCases===1?"case":"cases"),ee(L,r.totalRunning),ee(O,r.totalConverged)}),ie("click",q,()=>f(n,!0)),u(t,o),Le()}We(["click"]);const ol=""+new URL("../assets/simvia-logo.kLDq7Uoj.svg",import.meta.url).href;var sl=$('<div class="text-xs text-muted font-normal"> </div>'),il=$('<h2 class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"> </h2>'),ll=$("<div><!> <!></div>"),cl=$('<div class="flex items-center gap-2.5 flex-wrap"><!></div>'),ul=$('<div class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"><!> <!></div>'),dl=$('<section><div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div> <!> <!></section>');function Ot(t,r){let a=he(r,"eyebrow",3,""),n=he(r,"title",3,""),o=he(r,"wide",3,!1);var i=dl(),s=P(k(i),2);{var l=y=>{var w=ul(),A=k(w);{var m=c=>{var x=_e(),E=B(x);ft(E,()=>r.titleSlot),u(c,x)},M=c=>{var x=ll(),E=k(x);{var g=b=>{var L=sl(),z=k(L,!0);p(L),Q(()=>ee(z,a())),u(b,L)};X(E,b=>{a()&&b(g)})}var _=P(E,2);{var S=b=>{var L=il(),z=k(L,!0);p(L),Q(()=>ee(z,n())),u(b,L)};X(_,b=>{n()&&b(S)})}p(x),u(c,x)};X(A,c=>{r.titleSlot?c(m):c(M,-1)})}var F=P(A,2);{var h=c=>{var x=cl(),E=k(x);ft(E,()=>r.actions),p(x),u(c,x)};X(F,c=>{r.actions&&c(h)})}p(w),u(y,w)};X(s,y=>{(a()||n()||r.titleSlot||r.actions)&&y(l)})}var d=P(s,2);ft(d,()=>r.children),p(i),Q(()=>{Ce(i,1,`${o()?"col-span-12":"col-span-6"} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise`),Se(i,"id",r.id)}),u(t,i)}function rr(t,r){Ae(r,!0);let a=he(r,"checked",15,!0);Ne(()=>{a()?hr(r.name,r.onRefresh,r.intervalMs):vt(r.name)}),dr(()=>vt(r.name)),zt(t,{get checked(){return a()},onchange:n=>a(n),size:14,label:"Auto-refresh",labelFirst:!0}),Le()}var fl=$("<!> ",1),vl=$('<li role="none"><button role="menuitem" type="button"><!> </button></li>'),gl=$('<ul role="menu" class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"></ul>'),hl=$('<span class="inline-flex"><!></span> <!>',1);function pl(t,r){Ae(r,!0);let a=he(r,"label",3,"More"),n=I(!1),o=I(void 0),i=I(void 0),s=I("");function l(){if(!e(o)||!e(i))return;const c=e(o).getBoundingClientRect(),x=e(i).offsetHeight,E=4,g=window.innerHeight-c.bottom-E,S=g<x&&c.top-E>g?c.top-E-x:c.bottom+E,b=Math.min(c.left,window.innerWidth-180);f(s,`position:fixed; top:${S}px; left:${b}px; min-width:170px; z-index:9999;`)}async function d(){f(n,!e(n)),e(n)&&(await Pt(),l())}function y(c){c.disabled||(f(n,!1),c.onClick())}function w(c){e(n)&&e(o)&&!e(o).contains(c.target)&&e(i)&&!e(i).contains(c.target)&&f(n,!1)}var A=hl();rt("mousedown",it,w),rt("keydown",it,c=>{c.key==="Escape"&&f(n,!1)}),rt("scroll",it,()=>{e(n)&&f(n,!1)});var m=B(A),M=k(m);$e(M,{variant:"secondary",size:"sm",onclick:d,children:(c,x)=>{var E=fl(),g=B(E);Te(g,{get icon(){return Hs}});var _=P(g);Q(()=>ee(_,` ${a()??""}`)),u(c,E)},$$slots:{default:!0}}),p(m),nt(m,c=>f(o,c),()=>e(o));var F=P(m,2);{var h=c=>{Jt(c,{children:(x,E)=>{var g=gl();Je(g,21,()=>r.items,_=>_.label,(_,S)=>{var b=vl(),L=k(b),z=k(L);Te(z,{get icon(){return e(S).icon},size:14});var D=P(z);p(L),p(b),Q(()=>{L.disabled=e(S).disabled,Se(L,"aria-disabled",e(S).disabled),Ce(L,1,`w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none ${e(S).disabled?"":"cursor-pointer hover:bg-edf-gris-clair hover:border-border"}`),ee(D,` ${e(S).label??""}`)}),ie("mousedown",L,V=>{V.stopPropagation(),y(e(S))}),u(_,b)}),p(g),nt(g,_=>f(i,_),()=>e(i)),Q(()=>Ze(g,e(s))),u(x,g)}})};X(F,c=>{e(n)&&c(h)})}u(t,A),Le()}We(["mousedown"]);const Ft=[{key:"note",label:"Note"},{key:"nprocs",label:"MPI Ranks"},{key:"nt",label:"Thread Count"},{key:"last_iter",label:"Last Iter"},{key:"duration",label:"Duration"},{key:"last_mod",label:"Last Modified"},{key:"resu_size_mb",label:"RESU Size (MB)"}];let Wt=I(se([])),Mr=I(se([])),pt=I(se(new Set)),mr=I(""),mn=I(""),Et=I(se([])),ot=I(se([])),Xt=I(""),ka=I(!0),ml=I(!0),qt=I(se(pn("csauto_status_views",{}))),_n=I(se(localStorage.getItem("csauto_status_view_selected")??""));function bn(){return e(Wt)}function xn(){return e(Mr)}function Ut(){return e(pt)}function jn(){return e(mr)}function tn(){return e(mn)}function _l(){return e(Et)}function bl(){return e(Et).filter(t=>e(Mr).includes(t))}function xl(){return e(Et).filter(t=>Ft.some(r=>r.key===t))}function yl(){return e(ot)}function wl(){return e(Xt)}function kl(){return e(ka)}function Un(){return e(qt)}function Cl(){return e(_n)}function Sl(t){f(Wt,t,!0)}function $l(t){const r=e(Mr).length===0&&t.length>0;f(Mr,t,!0),r&&e(Et).length===0&&f(Et,[...t,...Ft.map(a=>a.key)],!0)}function Pl(t){f(mr,t,!0)}function Vn(t){f(Et,t,!0)}function El(t){f(Xt,t,!0)}function Rl(t){f(ka,t,!0)}function Nl(t){f(ml,t,!0)}function yn(t){f(_n,t,!0),localStorage.setItem("csauto_status_view_selected",t)}function rn(t){const r=new Set(e(pt));r.has(t)?r.delete(t):r.add(t),f(pt,r,!0),f(mr,t,!0),f(mn,t,!0)}function Ca(t){f(pt,new Set([t]),!0),f(mr,t,!0),f(mn,t,!0)}function nn(t,r,a){const n=a.indexOf(t),o=a.indexOf(r);if(n<0||o<0)return;const[i,s]=n<o?[n,o]:[o,n],l=new Set(e(pt));for(let d=i;d<=s;d++)l.add(a[d]);f(pt,l,!0),f(mr,r,!0)}function Bn(t){f(pt,new Set(t),!0)}function qn(){f(pt,new Set,!0)}function Ml(t){const r=[t.case_id,t.status??"",t.note??""];if(t.doe)for(const a of Object.values(t.doe))r.push(String(a));return r.join(" ").toLowerCase()}function Sa(){if(!e(Xt).trim())return e(Wt);const t=e(Xt).toLowerCase().trim().split(/\s+/);return e(Wt).filter(r=>{const a=Ml(r);return t.every(n=>a.includes(n))})}function Al(t){if(t==null||t==="")return"";const r=Number(t);return Number.isFinite(r)?r:String(t).toLowerCase()}function Kn(t,r){var n;if(r==="case_id")return t.case_id;if(r==="status")return t.status??"";if(r==="note")return t.note??"";if(r==="nprocs")return t.nprocs??0;if(r==="nt")return t.nt??0;if(r==="last_iter")return t.last_iter??0;if(r==="duration")return t.duration_s??0;if(r==="last_mod")return t.last_mod??"";if(r==="resu_size_mb")return t.resu_size_mb??0;const a=(n=t.doe)==null?void 0:n[r];return a!==void 0?Al(a):""}function Ll(t,r){return t===""&&r===""?0:t===""?1:r===""?-1:typeof t=="number"&&typeof r=="number"?t-r:String(t).localeCompare(String(r))}function $a(){const t=Sa();return e(ot).length===0?t:[...t].sort((r,a)=>{for(const n of e(ot)){const o=Kn(r,n.key),i=Kn(a,n.key),s=Ll(o,i);if(s!==0)return n.dir==="asc"?s:-s}return 0})}function Pr(){return $a().map(t=>t.case_id)}function Tl(t,r){const a=e(ot).findIndex(n=>n.key===t);if(r)if(a>=0){const n=[...e(ot)];n[a]={key:t,dir:n[a].dir==="asc"?"desc":"asc"},f(ot,n,!0)}else f(ot,[...e(ot),{key:t,dir:"asc"}],!0);else a>=0&&e(ot).length===1?f(ot,[{key:t,dir:e(ot)[0].dir==="asc"?"desc":"asc"}],!0):f(ot,[{key:t,dir:"asc"}],!0)}function Fl(){return{visibleColumns:[...e(Et)],search:e(Xt),sorts:e(ot).map(t=>({...t}))}}function Dl(t){f(Et,[...t.visibleColumns],!0),f(Xt,t.search,!0),f(ot,t.sorts.map(r=>({...r})),!0)}function zl(t){f(qt,{...e(qt),[t]:Fl()},!0),Ir("csauto_status_views",e(qt)),yn(t)}function Il(t){const r={...e(qt)};delete r[t],f(qt,r,!0),Ir("csauto_status_views",r),e(_n)===t&&yn("")}function kr(){const t=new Set;for(const r of e(Wt))e(pt).has(r.case_id)&&t.add((r.status??"").toUpperCase());return t}function Gn(){for(const t of e(Wt))if(e(pt).has(t.case_id)&&t.resu_size_mb!=null&&t.resu_size_mb>0)return!0;return!1}function Ol(t,r){const a=r.length,n=t.length,o=r.filter(d=>d.status==="RUNNING").length,i=t.filter(d=>d.status==="RUNNING").length,s=r.filter(d=>d.convergence==="converged").length,l=t.filter(d=>d.convergence==="converged").length;return{totalCases:a,shownCases:n,totalRunning:o,shownRunning:i,totalConverged:s,shownConverged:l}}var Hl=$('<div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">DOE columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div>'),jl=$('<div class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50" data-backdrop=""><div class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5" role="dialog" aria-modal="true"><div class="text-base font-bold text-edf-bleu-fonce mb-4"> </div> <div class="mb-4"><div class="text-xs text-muted mb-1">Name</div> <input type="text" placeholder="e.g. My view" class="w-full"/></div> <!> <div class="mb-5"><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted">Computed columns</span> <div class="flex gap-2"><button class="link-btn">All</button> <button class="link-btn">None</button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5"></div></div> <div class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"><!> <!></div></div></div>');function Ul(t,r){Ae(r,!0);let a=he(r,"initialName",3,""),n=U(xn),o=I(se(a())),i=I(se(new Set(r.initialColumns??[...e(n),...Ft.map(j=>j.key)])));function s(j){const q=new Set(e(i));q.has(j)?q.delete(j):q.add(j),f(i,q,!0)}function l(j,q){const Y=new Set(e(i));j.forEach(ae=>q?Y.add(ae):Y.delete(ae)),f(i,Y,!0)}function d(){const j=e(o).trim();j&&r.onSave(j,[...e(i)])}function y(j){j.key==="Escape"&&r.onCancel()}function w(j){j.target.dataset.backdrop!==void 0&&r.onCancel()}let A=I(void 0);Ne(()=>{var j,q;(j=e(A))==null||j.focus(),(q=e(A))==null||q.select()});var m=jl(),M=k(m),F=k(M),h=k(F,!0);p(F);var c=P(F,2),x=P(k(c),2);Qe(x),nt(x,j=>f(A,j),()=>e(A)),p(c);var E=P(c,2);{var g=j=>{var q=Hl(),Y=k(q),ae=P(k(Y),2),N=k(ae),C=P(N,2);p(ae),p(Y);var v=P(Y,2);Je(v,20,()=>e(n),T=>T,(T,R)=>{{let J=U(()=>e(i).has(R));zt(T,{get checked(){return e(J)},onchange:()=>s(R),size:14,get label(){return R}})}}),p(v),p(q),ie("click",N,()=>l(e(n),!0)),ie("click",C,()=>l(e(n),!1)),u(j,q)};X(E,j=>{e(n).length>0&&j(g)})}var _=P(E,2),S=k(_),b=P(k(S),2),L=k(b),z=P(L,2);p(b),p(S);var D=P(S,2);Je(D,21,()=>Ft,j=>j.key,(j,q)=>{{let Y=U(()=>e(i).has(e(q).key));zt(j,{get checked(){return e(Y)},onchange:()=>s(e(q).key),size:14,get label(){return e(q).label}})}}),p(D),p(_);var V=P(_,2),H=k(V);$e(H,{variant:"secondary",get onclick(){return r.onCancel},children:(j,q)=>{we();var Y=Be("Cancel");u(j,Y)},$$slots:{default:!0}});var O=P(H,2);{let j=U(()=>!e(o).trim());$e(O,{variant:"primary",onclick:d,get disabled(){return e(j)},children:(q,Y)=>{we();var ae=Be("Save");u(q,ae)},$$slots:{default:!0}})}p(V),p(M),p(m),Q(()=>ee(h,r.mode==="create"?"New view":"Edit view")),ie("keydown",m,y),ie("click",m,w),tt(x,()=>e(o),j=>f(o,j)),ie("click",L,()=>l(Ft.map(j=>j.key),!0)),ie("click",z,()=>l(Ft.map(j=>j.key),!1)),u(t,m),Le()}We(["keydown","click"]);var Vl=$('<div class="flex items-center gap-1.5"><!> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Edit current view"><!></button> <button class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair" title="Create new view"><!></button></div> <!>',1);function Bl(t,r){Ae(r,!0);let a=U(()=>Object.keys(Un())),n=I(se(Cl())),o=I(!1),i=I("create"),s=U(()=>[{value:"",label:"All columns"},...e(a).map(S=>({value:S,label:S}))]);function l(S){if(f(n,S,!0),yn(S),S==="")Vn([...xn(),...Ft.map(b=>b.key)]);else{const b=Un();b[S]&&Dl(b[S])}}function d(){f(i,"edit"),f(o,!0)}function y(){f(i,"create"),f(o,!0)}function w(S,b){Vn(b),e(i)==="edit"&&e(n)&&S!==e(n)&&Il(e(n)),zl(S),f(n,S,!0),f(o,!1)}function A(){f(o,!1)}var m=Vl(),M=B(m),F=k(M);lt(F,{class:"w-[140px]",get options(){return e(s)},get value(){return e(n)},onchange:l});var h=P(F,2),c=k(h);Te(c,{get icon(){return qs},size:14}),p(h);var x=P(h,2),E=k(x);Te(E,{get icon(){return Ks},size:14}),p(x),p(M);var g=P(M,2);{var _=S=>{Jt(S,{children:(b,L)=>{{let z=U(()=>e(i)==="edit"?e(n):""),D=U(_l);Ul(b,{get mode(){return e(i)},get initialName(){return e(z)},get initialColumns(){return e(D)},onSave:w,onCancel:A})}}})};X(g,S=>{e(o)&&S(_)})}ie("click",h,d),ie("click",x,y),u(t,m),Le()}We(["click"]);var ql=$('<th><div class="flex items-center justify-center h-full"><!></div></th>'),Kl=$("<th></th>"),Gl=$('<span style="margin-left: 4px; font-size: 9px;"> </span>'),Wl=$('<th role="button" tabindex="0"> <!></th>'),Xl=$('<td><div class="flex items-center justify-center h-full"><!></div></td>'),Yl=$("<td><span> </span></td>"),Ql=$('<span class="text-muted"><!></span>'),Jl=$('<td role="button" tabindex="0"><!></td>'),Zl=$("<!> Open GUI",1),ec=$("<td><!></td>"),tc=$("<td> </td>"),rc=$("<tr></tr>"),nc=$('<div id="status-table-wrap"><table id="status-table"><thead><tr></tr></thead><tbody id="status-body"></tbody></table></div>');function ac(t,r){Ae(r,!0);let a=U(()=>r.rows.length>0&&r.rows.every(N=>e(y).has(N.case_id))),n=U(()=>r.rows.some(N=>e(y).has(N.case_id))),o=U(()=>e(n)&&!e(a)),i=U(bl),s=U(()=>new Set(xl())),l=U(yl),d=U(kl),y=U(Ut),w=U(()=>{const N=[{key:"_select",label:"",kind:"meta",sticky:"left"},{key:"case_id",label:"Case",kind:"meta",sticky:"left"},{key:"status",label:"Status",kind:"meta",sticky:"left"},...e(s).has("note")?[{key:"note",label:"Note",kind:"meta"}]:[]],C=e(i).map(J=>({key:J,label:J,kind:"doe"})),T=[{key:"nprocs",label:"MPI Ranks",kind:"calc"},{key:"nt",label:"Thread Count",kind:"calc"},{key:"last_iter",label:"Last Iter",kind:"calc"},{key:"duration",label:"Duration",kind:"calc"},{key:"last_mod",label:"Last Modified",kind:"calc"},{key:"resu_size_mb",label:"RESU Size (MB)",kind:"calc"}].filter(J=>e(s).has(J.key)),R=[{key:"_actions",label:"",kind:"meta",sticky:"right"}];return[...N,...C,...T,...R]});function A(N){const C=e(l).findIndex(T=>T.key===N);if(C<0)return"";const v=e(l)[C].dir==="asc"?"▲":"▼";return e(l).length>1?`${v}${C+1}`:v}function m(N,C){N!=="_actions"&&Tl(N,C.ctrlKey||C.metaKey)}function M(N,C){C.shiftKey?nn(tn()||N,N,Pr()):C.ctrlKey||C.metaKey?rn(N):Ca(N)}function F(N,C){var T;const v=((T=N.status)==null?void 0:T.toUpperCase())??"";v!=="DONE"&&v!=="FAILED"||(C.preventDefault(),r.onContextMenu(N.case_id,C.clientX,C.clientY,N.convergence??""))}async function h(N){const C=N.note??"",v=await vn("Case note:",C,`Note — ${N.case_id}`,"",!0);if(v!==null)try{await _i(N.case_id,v)}catch(T){await Ye(`Failed to set note: ${T instanceof Error?T.message:T}`,"Error")}}async function c(N){try{await xi(N)}catch(C){await Ye(`Failed to open GUI: ${C instanceof Error?C.message:C}`,"Error")}}function x(N,C){const v=(N==null?void 0:N.toUpperCase())??"";return(v==="DONE"||v==="FAILED")&&C==="converged"?"CONVERGED":(v==="DONE"||v==="FAILED")&&C==="not_converged"?"NOT CONVERGED":v}function E(N,C){const v=(N==null?void 0:N.toUpperCase())??"";return(v==="DONE"||v==="FAILED")&&C==="converged"?"status-converged":(v==="DONE"||v==="FAILED")&&C==="not_converged"?"status-not-converged":v==="RUNNING"?"status-running":v==="DONE"?"status-done":v==="FAILED"?"status-failed":v==="PREPARED"?"status-prepared":"status-unknown"}function g(N){return e(y).has(N.case_id)?"row-selected":""}function _(N,C){var v;return C.key==="case_id"?N.case_id:C.key==="nprocs"?N.nprocs!=null?String(N.nprocs):"":C.key==="nt"?N.nt!=null?String(N.nt):"":C.key==="last_iter"?N.last_iter!=null?String(N.last_iter):"":C.key==="duration"?N.duration??"":C.key==="last_mod"?S(N.last_mod):C.key==="resu_size_mb"?N.resu_size_mb!=null?String(N.resu_size_mb):"":C.kind==="doe"?((v=N.doe)==null?void 0:v[C.key])!=null&&String(N.doe[C.key])!==""?String(N.doe[C.key]):"—":""}function S(N){if(!N)return"";try{const C=new Date(N),v=new Date,T=C.toDateString()===v.toDateString(),R=new Date(v);R.setDate(R.getDate()-1);const J=C.toDateString()===R.toDateString(),oe=C.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return T?`Today ${oe}`:J?`Yesterday ${oe}`:C.toLocaleDateString([],{month:"short",day:"numeric"})+` ${oe}`}catch{return N}}let b=I(se({})),L=I(void 0);Ne(()=>{e(d),e(w),r.rows,!(!e(L)||!e(d))&&Pt().then(()=>{if(!e(L))return;const N=Array.from(e(L).querySelectorAll("thead th.sticky-left")),C={};let v=0;N.forEach(T=>{const R=T.dataset.colKey??"";C[R]=v,v+=T.getBoundingClientRect().width}),f(b,C,!0)})});function z(N,C,v){const T=v&&N.key!=="_select"&&N.key!=="_actions"?["status-sortable"]:[];if(!v&&N.key==="case_id"&&T.push("case-id"),N.kind==="doe"&&T.push("status-col-doe"),!v&&N.key==="note"&&T.push("max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2"),e(d)&&N.sticky==="left"&&T.push("sticky-left"),e(d)&&N.sticky==="right"&&T.push("sticky-right"),e(d)&&N.sticky==="left"){const R=e(w)[C+1];(!R||R.sticky!=="left")&&T.push("sticky-divider")}if(e(d)&&N.sticky==="right"){const R=e(w)[C-1];(!R||R.sticky!=="right")&&T.push("sticky-divider")}return T.join(" ")}function D(N,C){return z(N,C,!0)}function V(N,C){return z(N,C,!1)}function H(N){return!e(d)||!N.sticky?"":N.sticky==="right"?"position:sticky;right:0;":N.sticky==="left"&&N.key in e(b)?`position:sticky;left:${e(b)[N.key]}px;`:""}var O=nc(),j=k(O),q=k(j),Y=k(q);Je(Y,23,()=>e(w),N=>N.key,(N,C,v)=>{var T=_e(),R=B(T);{var J=le=>{var K=ql(),re=k(K),ne=k(re);zt(ne,{get checked(){return e(a)},get indeterminate(){return e(o)},get onchange(){return r.onToggleAll},size:14}),p(re),p(K),Q((ue,de)=>{Ce(K,1,`${ue??""} !px-2.5 !py-0 w-9`),Se(K,"data-col-key",e(C).key),Ze(K,de)},[()=>D(e(C),e(v)),()=>H(e(C))]),u(le,K)},oe=le=>{var K=Kl();Q((re,ne)=>{Ce(K,1,re),Se(K,"data-col-key",e(C).key),Ze(K,ne)},[()=>dt(D(e(C),e(v))),()=>H(e(C))]),u(le,K)},ge=le=>{var K=Wl(),re=k(K),ne=P(re);{var ue=Z=>{var be=Gl(),fe=k(be,!0);p(be),Q(Pe=>ee(fe,Pe),[()=>A(e(C).key)]),u(Z,be)},de=U(()=>A(e(C).key));X(ne,Z=>{e(de)&&Z(ue)})}p(K),Q((Z,be)=>{Ce(K,1,Z),Se(K,"data-col-key",e(C).key),Ze(K,be),ee(re,`${e(C).label??""} `)},[()=>dt(D(e(C),e(v))),()=>H(e(C))]),ie("click",K,Z=>m(e(C).key,Z)),ie("keydown",K,Z=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),m(e(C).key,Z))}),u(le,K)};X(R,le=>{e(C).key==="_select"?le(J):e(C).key==="_actions"?le(oe,1):le(ge,-1)})}u(N,T)}),p(Y),p(q);var ae=P(q);Je(ae,21,()=>r.rows,N=>N.case_id,(N,C)=>{var v=rc();Je(v,23,()=>e(w),T=>T.key,(T,R,J)=>{var oe=_e(),ge=B(oe);{var le=de=>{var Z=Xl(),be=k(Z),fe=k(be);{let Pe=U(()=>e(y).has(e(C).case_id));zt(fe,{get checked(){return e(Pe)},onchange:()=>r.onToggleRow(e(C).case_id),size:14})}p(be),p(Z),Q((Pe,ve)=>{Ce(Z,1,`${Pe??""} !px-2.5 !py-0 w-9`),Se(Z,"data-col-key",e(R).key),Ze(Z,ve)},[()=>V(e(R),e(J)),()=>H(e(R))]),u(de,Z)},K=de=>{var Z=Yl(),be=k(Z),fe=k(be,!0);p(be),p(Z),Q((Pe,ve,ze,pe)=>{Ce(Z,1,Pe),Se(Z,"data-col-key",e(R).key),Ze(Z,ve),Ce(be,1,`status-pill ${ze??""}`),ee(fe,pe)},[()=>dt(V(e(R),e(J))),()=>H(e(R)),()=>E(e(C).status,e(C).convergence),()=>x(e(C).status,e(C).convergence)]),u(de,Z)},re=de=>{var Z=Jl(),be=k(Z);{var fe=ve=>{var ze=Be();Q(()=>ee(ze,e(C).note)),u(ve,ze)},Pe=ve=>{var ze=Ql(),pe=k(ze);Te(pe,{get icon(){return Bs},size:12}),p(ze),u(ve,ze)};X(be,ve=>{e(C).note?ve(fe):ve(Pe,-1)})}p(Z),Q((ve,ze)=>{Ce(Z,1,ve),Se(Z,"data-col-key",e(R).key),Ze(Z,ze),Se(Z,"title",e(C).note||"Add note")},[()=>dt(V(e(R),e(J))),()=>H(e(R))]),ie("click",Z,ve=>{ve.stopPropagation(),h(e(C))}),ie("keydown",Z,ve=>{(ve.key==="Enter"||ve.key===" ")&&(ve.preventDefault(),ve.stopPropagation(),h(e(C)))}),u(de,Z)},ne=de=>{var Z=ec(),be=k(Z);$e(be,{variant:"primary",size:"sm",onclick:fe=>{fe.stopPropagation(),c(e(C).case_id)},children:(fe,Pe)=>{var ve=Zl(),ze=B(ve);Te(ze,{get icon(){return js},size:12}),we(),u(fe,ve)},$$slots:{default:!0}}),p(Z),Q((fe,Pe)=>{Ce(Z,1,fe),Se(Z,"data-col-key",e(R).key),Ze(Z,Pe)},[()=>dt(V(e(R),e(J))),()=>H(e(R))]),u(de,Z)},ue=de=>{var Z=tc(),be=k(Z,!0);p(Z),Q((fe,Pe,ve)=>{Ce(Z,1,fe),Se(Z,"data-col-key",e(R).key),Ze(Z,Pe),ee(be,ve)},[()=>dt(V(e(R),e(J))),()=>H(e(R)),()=>_(e(C),e(R))]),u(de,Z)};X(ge,de=>{e(R).key==="_select"?de(le):e(R).key==="status"?de(K,1):e(R).key==="note"?de(re,2):e(R).key==="_actions"?de(ne,3):de(ue,-1)})}u(T,oe)}),p(v),Q(T=>Ce(v,1,T),[()=>dt(g(e(C)))]),ie("click",v,T=>M(e(C).case_id,T)),ie("contextmenu",v,T=>F(e(C),T)),u(N,v)}),p(ae),p(j),nt(j,N=>f(L,N),()=>e(L)),p(O),Q(()=>Ce(O,1,`table-wrap ${e(d)?"sticky-enabled":""}`)),u(t,O),Le()}We(["click","keydown","contextmenu"]);var oc=$('<div class="fixed z-80 min-w-[170px] bg-white border border-border rounded-lg p-1 grid gap-0.5"><button> </button> <button> </button> <button> </button></div>');function sc(t,r){Ae(r,!0);let a=U(()=>{const m=Math.min(r.x,window.innerWidth-180),M=Math.min(r.y,window.innerHeight-120);return`left: ${m}px; top: ${M}px;`});async function n(m){try{for(const M of r.cases)await bi(M,m)}catch(M){console.error("Failed to set convergence:",M)}r.onClose()}const o=r.cases.length>1?` (${r.cases.length})`:"";var i=oc();rt("keydown",it,m=>{m.key==="Escape"&&r.onClose()});var s=k(i),l=k(s);p(s);var d=P(s,2),y=k(d);p(d);var w=P(d,2),A=k(w);p(w),p(i),Q(()=>{Ze(i,e(a)),Ce(s,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="converged"?"is-active":""}`),ee(l,`Mark Converged${o}`),Ce(d,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue==="not_converged"?"is-active":""}`),ee(y,`Mark Not Converged${o}`),Ce(w,1,`w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-edf-gris-clair hover:border-border ${r.currentValue===""?"is-active":""}`),ee(A,`Clear Mark${o}`)}),ie("click",s,()=>n("converged")),ie("click",d,()=>n("not_converged")),ie("click",w,()=>n("")),u(t,i),Le()}We(["click"]);var ic=$("<!> Refresh",1),lc=$("<!> <!>",1),cc=$("<!> Run",1),uc=$("<!> Restart",1),dc=$("<!> Stop",1),fc=$("<!> Kill",1),vc=$("<!> Clean",1),gc=$('<div class="flex items-center justify-between gap-3 flex-wrap mb-2.5"><div class="flex items-center gap-2"><input type="search" placeholder="Search cases..." class="w-[180px] !py-1 h-[30px]"/> <!></div> <div class="flex items-center gap-2.5"><span class="text-xs text-muted"> </span> <!> <!> <!> <!> <!> <!></div></div> <!>',1),hc=$('<div id="status-card" class="col-span-12" tabindex="0" role="grid"><!></div> <!>',1);function pc(t,r){Ae(r,!0);function a(){return[...Ut()]}async function n(){const v=a();if(!v.length)return;const T=await Xo(v);if(T)try{await zn({cases:v,n:T.n,nt:T.nt,maxParallel:T.maxParallel}),r.onRefresh()}catch(R){await Ye(`Run failed: ${R instanceof Error?R.message:R}`,"Error")}}async function o(){const v=a();if(!v.length)return;const T=await Yo(v);if(T)try{await zn({cases:v,n:T.n,nt:T.nt,maxParallel:T.maxParallel,restart:!0,restartMode:T.restartMode,restartValue:T.restartValue}),r.onRefresh()}catch(R){await Ye(`Restart failed: ${R instanceof Error?R.message:R}`,"Error")}}async function i(){const v=a();if(!(!v.length||!await Tn(`Kill ${v.length} case${v.length>1?"s":""}?`,"Confirm Kill","Kill","danger")))try{await pi(v),r.onRefresh()}catch(R){await Ye(`Kill failed: ${R instanceof Error?R.message:R}`,"Error")}}async function s(){const v=a();if(!(!v.length||!await Tn(`Stop ${v.length} case${v.length>1?"s":""} gracefully (checkpoint + exit)?`,"Confirm Stop","Stop","danger")))try{await yr({cases:v,action:"stop"}),r.onRefresh(),wr(`Stop requested for ${v.length} case${v.length>1?"s":""} — will checkpoint and exit`)}catch(R){await Ye(`Stop failed: ${R instanceof Error?R.message:R}`,"Error")}}async function l(){const v=a();if(v.length)try{await yr({cases:v,action:"checkpoint"}),r.onRefresh(),wr(`Checkpoint requested for ${v.length} case${v.length>1?"s":""}`)}catch(T){await Ye(`Checkpoint failed: ${T instanceof Error?T.message:T}`,"Error")}}async function d(){const v=a();if(!v.length)return;const T=await vn("Extend by how many additional time steps?","500","Extend Run");if(T===null)return;const R=parseInt(T,10);if(!Number.isFinite(R)||R<=0){await Ye("Enter a positive integer number of time steps.","Error");return}try{await yr({cases:v,action:"extend",value:R}),r.onRefresh(),wr(`Extended ${v.length} case${v.length>1?"s":""} by ${R} time steps`)}catch(J){await Ye(`Extend failed: ${J instanceof Error?J.message:J}`,"Error")}}async function y(){const v=a();if(v.length)try{await yr({cases:v,action:"flush"}),wr(`Flush requested for ${v.length} case${v.length>1?"s":""}`)}catch(T){await Ye(`Flush failed: ${T instanceof Error?T.message:T}`,"Error")}}async function w(){const v=a();if(!v.length)return;const T=await Qo(v);if(T)try{await mi({cases:v,keepLast:T.keepLast,keepResu:T.keepResu,deleteResu:T.deleteResu,pruneResu:!0}),r.onRefresh(),Gi()}catch(R){await Ye(`Cleanup failed: ${R instanceof Error?R.message:R}`,"Error")}}function A(){const v=Pr();v.length>0&&v.every(R=>Ut().has(R))?qn():Bn(v)}function m(v){rn(v)}let M=I(se(er("status")));Ne(()=>{tr("status",e(M))}),Rl(!0);let F=U(()=>{const v=kr();return v.size>0&&[...v].some(T=>T==="PREPARED"||T==="DONE"||T==="FAILED")}),h=U(()=>{const v=kr();return v.size>0&&[...v].some(T=>T==="DONE"||T==="FAILED")&&Gn()}),c=U(()=>{const v=kr();return v.size>0&&v.has("RUNNING")}),x=U(()=>{const v=kr();return v.size>0&&v.has("RUNNING")}),E=U(Gn),g=I(se(wl())),_=null;function S(){_&&clearTimeout(_),_=setTimeout(()=>{El(e(g))},200)}Ne(()=>Nl(e(M)));let b=I(!1),L=I(0),z=I(0),D=I(se([])),V=I("");function H(v,T,R,J){f(D,Ut().has(v)?[...Ut()]:[v],!0),f(V,J,!0),f(L,T,!0),f(z,R,!0),f(b,!0)}function O(){f(b,!1)}function j(v){const T=Pr();if(T.length){if(v.key==="Escape"){qn(),O();return}if((v.ctrlKey||v.metaKey)&&v.key==="a"){v.preventDefault(),Bn(T);return}if(v.key==="ArrowDown"||v.key==="ArrowUp"){v.preventDefault();const R=v.key==="ArrowDown"?1:-1,J=jn(),oe=T.indexOf(J),ge=Math.max(0,Math.min(T.length-1,oe+R)),le=T[ge];v.shiftKey?nn(tn()||T[0],le,T):Ca(le),Pl(le);return}if(v.key===" "){v.preventDefault();const R=jn();R&&(v.shiftKey?nn(tn()||R,R,Pr()):rn(R))}}}var q=hc();rt("click",it,O),rt("scroll",it,O);var Y=B(q),ae=k(Y);Ot(ae,{eyebrow:"Overview",title:"Status",wide:!0,id:"status-card-shell",actions:T=>{var R=lc(),J=B(R);{let le=U(qi);rr(J,{name:"status",get intervalMs(){return e(le)},get onRefresh(){return r.onRefresh},get checked(){return e(M)},set checked(K){f(M,K,!0)}})}var oe=P(J,2);{var ge=le=>{$e(le,{variant:"primary",onclick:()=>r.onRefresh(),children:(K,re)=>{var ne=ic(),ue=B(ne);Te(ue,{get icon(){return Zt}}),we(),u(K,ne)},$$slots:{default:!0}})};X(oe,le=>{e(M)||le(ge)})}u(T,R)},children:(T,R)=>{var J=gc(),oe=B(J),ge=k(oe),le=k(ge);Qe(le);var K=P(le,2);Bl(K,{}),p(ge);var re=P(ge,2),ne=k(re),ue=k(ne);p(ne);var de=P(ne,2);{let pe=U(()=>!e(F));$e(de,{variant:"run",size:"sm",onclick:n,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=cc(),ye=B(Fe);Te(ye,{get icon(){return pa}}),we(),u(Oe,Fe)},$$slots:{default:!0}})}var Z=P(de,2);{let pe=U(()=>!e(h));$e(Z,{variant:"warning",size:"sm",onclick:o,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=uc(),ye=B(Fe);Te(ye,{get icon(){return Gs}}),we(),u(Oe,Fe)},$$slots:{default:!0}})}var be=P(Z,2);{let pe=U(()=>!e(x));$e(be,{variant:"warning",size:"sm",onclick:s,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=dc(),ye=B(Fe);Te(ye,{get icon(){return zs}}),we(),u(Oe,Fe)},$$slots:{default:!0}})}var fe=P(be,2);{let pe=U(()=>[{label:"Extend",icon:Us,onClick:d,disabled:!e(x)},{label:"Checkpoint",icon:Ws,onClick:l,disabled:!e(x)},{label:"Flush",icon:Os,onClick:y,disabled:!e(x)}]);pl(fe,{get items(){return e(pe)}})}var Pe=P(fe,2);{let pe=U(()=>!e(c));$e(Pe,{variant:"danger",size:"sm",onclick:i,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=fc(),ye=B(Fe);Te(ye,{get icon(){return Is}}),we(),u(Oe,Fe)},$$slots:{default:!0}})}var ve=P(Pe,2);{let pe=U(()=>!e(E));$e(ve,{variant:"secondary",size:"sm",onclick:w,get disabled(){return e(pe)},children:(Oe,He)=>{var Fe=vc(),ye=B(Fe);Te(ye,{get icon(){return Ys}}),we(),u(Oe,Fe)},$$slots:{default:!0}})}p(re),p(oe);var ze=P(oe,2);{let pe=U($a);ac(ze,{get rows(){return e(pe)},onContextMenu:H,onToggleAll:A,onToggleRow:m})}Q(pe=>ee(ue,`${pe??""} selected`),[()=>Ut().size]),ie("input",le,S),tt(le,()=>e(g),pe=>f(g,pe)),u(T,J)},$$slots:{actions:!0,default:!0}}),p(Y);var N=P(Y,2);{var C=v=>{sc(v,{get cases(){return e(D)},get x(){return e(L)},get y(){return e(z)},get currentValue(){return e(V)},onClose:O})};X(N,v=>{e(b)&&v(C)})}ie("keydown",Y,j),u(t,q),Le()}We(["keydown","input"]);var mc=$('<div class="flex gap-3 flex-wrap items-end mb-2.5"><!></div>');function Yt(t,r){var a=mc(),n=k(a);ft(n,()=>r.children),p(a),u(t,a)}function wn(t){return t.map(r=>({value:r,label:r}))}var _c=$('<input type="number" step="any" class="w-[110px]"/>'),bc=$("<!> <!> <!> <!> <!> <!>",1);function kn(t,r){Ae(r,!0);let a=he(r,"columnLabel",3,"Columns"),n=he(r,"xMinLabel",3,"Iter min"),o=U(()=>wn(r.allCases)),i=U(()=>r.columns.map(d=>({value:d,label:d}))),s=[{value:"zero",label:"Zero"},{value:"restart",label:"Restart start"},{value:"custom",label:"Custom"}];function l(d){r.onXMinChange(Number(d.target.value)||0)}Yt(t,{children:(d,y)=>{var w=bc(),A=B(w);Me(A,{text:"Cases",children:(_,S)=>{Gt(_,{class:"w-[160px]",get options(){return e(o)},get selected(){return r.selectedCases},get onchange(){return r.onCasesChange},placeholder:"Select cases..."})}});var m=P(A,2);{var M=_=>{var S=_e(),b=B(S);ft(b,()=>r.middleSlot),u(_,S)};X(m,_=>{r.middleSlot&&_(M)})}var F=P(m,2);Me(F,{get text(){return a()},children:(_,S)=>{Gt(_,{class:"w-[160px]",get options(){return e(i)},get selected(){return r.selectedColumns},get onchange(){return r.onColumnsChange},placeholder:"Select..."})}});var h=P(F,2);Me(h,{text:"Start from",children:(_,S)=>{lt(_,{class:"w-[140px]",get options(){return s},get value(){return r.startFrom},onchange:b=>r.onStartFromChange(b)})}});var c=P(h,2);{var x=_=>{Me(_,{get text(){return n()},children:(S,b)=>{var L=_c();Qe(L),Q(()=>dn(L,r.xMin)),ie("input",L,l),u(S,L)}})};X(c,_=>{r.startFrom==="custom"&&_(x)})}var E=P(c,2);{var g=_=>{var S=_e(),b=B(S);ft(b,()=>r.extraSlot),u(_,S)};X(E,_=>{r.extraSlot&&_(g)})}u(d,w)}}),Le()}We(["input"]);var xc=$('<div class="flex items-center justify-center aspect-[900/500] svelte-1kfua4v"><span class="text-sm text-muted italic"> </span></div>'),yc=$('<div class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5 svelte-1kfua4v"><!></div>');function Qt(t,r){let a=he(r,"emptyMessage",3,"");var n=yc(),o=k(n);{var i=l=>{var d=_e(),y=B(d);Fr(y,()=>r.svgHtml),u(l,d)},s=l=>{var d=xc(),y=k(d),w=k(y,!0);p(y),p(d),Q(()=>ee(w,a()||"No data to display.")),u(l,d)};X(o,l=>{r.svgHtml?l(i):l(s,-1)})}p(n),Q(()=>Se(n,"id",r.id)),u(t,n)}async function Cn(t,r="plot.png"){const a=document.getElementById(t),n=a==null?void 0:a.querySelector("svg");if(!n)return;const{width:o,height:i}=wc(n),s=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=o*s,l.height=i*s;const d=l.getContext("2d");if(!d)return;d.scale(s,s);const y=new XMLSerializer().serializeToString(n),w=new Blob([y],{type:"image/svg+xml;charset=utf-8"}),A=URL.createObjectURL(w),m=new Image;m.width=o,m.height=i,await new Promise((F,h)=>{m.onload=()=>{d.drawImage(m,0,0,o,i),URL.revokeObjectURL(A),F()},m.onerror=h,m.src=A});const M=await new Promise(F=>l.toBlob(F,"image/png"));M&&await Ea(M,kc(r))}function _r(t,r,a="png"){const n=r.length<=3?r.join("_"):`${r.length}_cases`,o=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return Cc(`${t}_${n}_${o}.${a}`)}async function Pa(t,r){const a=new Blob([t],{type:"text/csv;charset=utf-8"});await Ea(a,r)}function wc(t){const r=t.getAttribute("viewBox");if(r){const a=r.split(/[\s,]+/).map(Number);if(a.length===4)return{width:a[2],height:a[3]}}return{width:t.width.baseVal.value||900,height:t.height.baseVal.value||500}}async function Ea(t,r){if("showSaveFilePicker"in window)try{const i=await(await window.showSaveFilePicker({suggestedName:r,types:[{description:t.type.startsWith("image/")?"Image":"File",accept:{[t.type]:[`.${r.split(".").pop()}`]}}]})).createWritable();await i.write(t),await i.close();return}catch(o){if((o==null?void 0:o.name)==="AbortError")return}const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=r,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function kc(t){return t.endsWith(".png")?t:`${t}.png`}function Cc(t){return t.replace(/[^a-zA-Z0-9._-]/g,"_")}let Ra=I(se([])),Na=I(se([])),Ma=I(se([])),Aa=I("zero"),La=I(0),Ta=I(""),Sc=I(!0);function $c(){return{selectedCases:e(Ra),columns:e(Na),selectedColumns:e(Ma),startFrom:e(Aa),iterMin:e(La),svgHtml:e(Ta),autoRefresh:e(Sc)}}function Wn(t){f(Ra,t,!0)}function Pc(t){f(Na,t,!0)}function Gr(t){f(Ma,t,!0)}function Ec(t){f(Aa,t,!0)}function Rc(t){f(La,t,!0)}function Cr(t){f(Ta,t,!0)}var Nc=$("<!> Refresh",1),Mc=$("<!> <!>",1),Ac=$("<!> Download as PNG",1),Lc=$('<div class="self-end ml-auto"><!></div>'),Tc=$('<!> <div class="flex justify-center"><!></div>',1),Fc=$('<div class="flex justify-center"><!></div>'),Dc=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),zc=$("<!> <!>",1);function Ic(t,r){Ae(r,!0);let a=U($c),n=I("");const o=new Set(["iteration","wall_distance","walldistance"]),i=["velocity","pressure"];async function s(){if(e(a).selectedCases.length)try{const h=await si(e(a).selectedCases);f(n,"");const c=h.filter(x=>!o.has(x.toLowerCase().replace(/\s+/g,"_")));if(Pc(c),c.length===0){Gr([]),Cr("");return}if(e(a).selectedColumns.length===0){const x=c.filter(E=>i.some(g=>E.toLowerCase().includes(g)));Gr(x.length>0?x:[c[0]])}}catch(h){f(n,"Failed to load residual columns"),console.error("Failed to load residual columns:",h)}}async function l(){if(e(a).selectedCases.length&&!((e(a).columns.length===0||e(a).selectedColumns.length===0)&&(await s(),!e(a).selectedColumns.length)))try{let h=0,c=!0;if(e(a).startFrom==="restart"){const E=await xa(e(a).selectedCases),g=Object.values(E.origins).map(_=>_.iteration).filter(_=>_!==void 0&&Number.isFinite(_));h=g.length>0?Math.min(...g):0}else e(a).startFrom==="custom"&&(h=e(a).iterMin);const x=await ii(e(a).selectedCases,e(a).selectedColumns,{xMin:h,includeHistory:c});f(n,""),x&&Cr(x)}catch(h){f(n,"Failed to load residual plot"),console.error("Failed to load residual plot:",h)}}function d(h){if(Wn(h),h.length===0){Cr("");return}s(),l()}function y(h){if(Gr(h),h.length===0){Cr("");return}l()}function w(h){Ec(h),l()}function A(h){Rc(h),l()}let m=I(se(er("plot")));Ne(()=>{tr("plot",e(m))}),Ne(()=>{e(m)?hr("residualPlot",l,On()):vt("residualPlot")});let M=!1;Ne(()=>{r.allCases.length>0&&!M&&(M=!0,Wn([...r.allCases]),s().then(()=>l()))});const F=pr(()=>{M&&s().then(()=>l())});dr(()=>{vt("residualPlot"),F()}),Ot(t,{eyebrow:"Diagnostics",title:"Residuals Plot",wide:!0,actions:c=>{var x=Mc(),E=B(x);{let S=U(On);rr(E,{name:"residualPlot",get intervalMs(){return e(S)},onRefresh:l,get checked(){return e(m)},set checked(b){f(m,b,!0)}})}var g=P(E,2);{var _=S=>{$e(S,{variant:"primary",onclick:l,children:(b,L)=>{var z=Nc(),D=B(z);Te(D,{get icon(){return Zt}}),we(),u(b,z)},$$slots:{default:!0}})};X(g,S=>{e(m)||S(_)})}u(c,x)},children:(c,x)=>{var E=zc(),g=B(E);{var _=z=>{const D=q=>{var Y=Lc(),ae=k(Y);{let N=U(()=>!e(a).svgHtml);$e(ae,{variant:"secondary",size:"sm",onclick:()=>Cn("plot-holder",_r("residuals",e(a).selectedCases)),get disabled(){return e(N)},children:(C,v)=>{var T=Ac(),R=B(T);Te(R,{get icon(){return gr}}),we(),u(C,T)},$$slots:{default:!0}})}p(Y),u(q,Y)};var V=Tc(),H=B(V);kn(H,{prefix:"plot",get allCases(){return r.allCases},get selectedCases(){return e(a).selectedCases},onCasesChange:d,columnLabel:"Variables",get columns(){return e(a).columns},get selectedColumns(){return e(a).selectedColumns},onColumnsChange:y,get startFrom(){return e(a).startFrom},onStartFromChange:w,xMinLabel:"Iter min",get xMin(){return e(a).iterMin},onXMinChange:A,get extraSlot(){return D}});var O=P(H,2),j=k(O);{let q=U(()=>e(a).selectedCases.length===0?"Please select at least one case.":e(a).selectedColumns.length===0?"Please select at least one variable.":"No data to display.");Qt(j,{id:"plot-holder",get svgHtml(){return e(a).svgHtml},get emptyMessage(){return e(q)}})}p(O),u(z,V)},S=z=>{var D=Fc(),V=k(D);Qt(V,{id:"plot-holder",svgHtml:"",emptyMessage:"No data available. Please run a simulation first."}),p(D),u(z,D)};X(g,z=>{e(a).columns.length>0?z(_):z(S,-1)})}var b=P(g,2);{var L=z=>{var D=Dc(),V=k(D,!0);p(D),Q(()=>ee(V,e(n))),u(z,D)};X(b,z=>{e(n)&&z(L)})}u(c,E)},$$slots:{actions:!0,default:!0}}),Le()}function Fa(t){const{scope:r,getState:a,setState:n,setHasData:o,getAxis:i}=t;async function s(){const m=a();if(m.selectedCases.length)try{let M=await Qr(m.selectedCases,r);if(t.filterFiles&&(M=t.filterFiles(M)),n({files:M}),o(M.length>0),M.length===0){n({file:"",columns:[],selectedColumns:[],positionText:"",svgHtml:""});return}(!m.file||!M.includes(m.file))&&(n({file:M[0]}),await l())}catch(M){console.error(`Failed to load ${r} files:`,M)}}async function l(){const m=a();if(!(!m.selectedCases.length||!m.file))try{const M=await fi(m.selectedCases,[m.file]),F=t.filterColumns?t.filterColumns(M):M;t.onColumnsLoaded?t.onColumnsLoaded(M):n({columns:F});const h=a();if(h.columns.length===0){n({selectedColumns:[],positionText:"",svgHtml:""});return}h.selectedColumns.length===0&&n({selectedColumns:[h.columns[0]]})}catch(M){console.error(`Failed to load ${r} columns:`,M)}}async function d(){let m=a();if(m.selectedCases.length){if(await s(),m=a(),!m.file){n({positionText:"",svgHtml:""});return}if((m.columns.length===0||m.selectedColumns.length===0)&&(await l(),m=a(),!m.selectedColumns.length)){n({positionText:"",svgHtml:""});return}try{let M;const F=a();if(F.startFrom==="restart"){const c=await xa(F.selectedCases),x=i().toLowerCase(),E=x==="t"||x==="time"?"time":"iteration",g=Object.values(c.origins).map(_=>_[E]).filter(_=>_!==void 0&&Number.isFinite(_));M=g.length>0?Math.min(...g):void 0}else F.startFrom==="custom"&&(M=F.xMin);const h=await gi({cases:F.selectedCases,probes:[F.file],columns:F.selectedColumns,axis:i(),timeMin:typeof M=="number"?M:void 0,xMin:M,includeHistory:!0});h&&n({svgHtml:h})}catch(M){console.error(`Failed to load ${r} plot:`,M)}}}async function y(m){if(n({selectedCases:m}),m.length===0){n({svgHtml:""});return}await s(),r==="monitoring"&&await d()}function w(m){if(n({selectedColumns:m}),m.length===0){n({svgHtml:""});return}d()}async function A(m){n({file:m}),await l(),await d()}return{loadFiles:s,loadColumns:l,loadPlot:d,handleCasesChange:y,handleColumnsChange:w,handleFileChange:A}}function Da(){return{selectedCases:[],file:"",files:[],columns:[],selectedColumns:[],axis:"time",startFrom:"zero",xMin:0,positionText:"",svgHtml:"",autoRefresh:!0}}let Vt=I("time"),an=I(se(Da())),on=I(se({...Da(),axis:""})),Oc=I(!0),Ar=I(!1),Lr=I(!1);function Hc(){return e(Vt)}function jc(t){f(Vt,t,!0)}function Uc(){return e(Ar)}function sn(t){f(Ar,t,!0)}function Vc(){return e(Lr)}function ln(t){f(Lr,t,!0)}function Bc(){e(Vt)==="time"&&!e(Ar)&&e(Lr)?f(Vt,"profile"):e(Vt)==="profile"&&!e(Lr)&&e(Ar)&&f(Vt,"time")}function Xn(){return e(an)}function Wr(){return e(on)}function kt(t){f(an,{...e(an),...t},!0)}function At(t){f(on,{...e(on),...t},!0)}function qc(){return e(Oc)}var Kc=$("<!> Download as PNG",1),Gc=$('<div class="self-end ml-auto"><!></div>'),Wc=$("<div> </div>"),Xc=$('<div class="text-xs text-muted mb-1 text-center font-mono"></div>'),Yc=$('<!>  <!> <div class="flex justify-center"><!></div>',1),Qc=$('<div class="flex justify-center"><!></div>');function Jc(t,r){Ae(r,!0);let a=he(r,"onRefresh",15),n=U(Xn);const o=new Set(["time","t","iteration","iter"]),i=Fa({scope:"monitoring",getState:Xn,setState:kt,setHasData:sn,filterFiles:h=>h.filter(c=>{const x=c.replace(/\.csv$/i,"").toLowerCase();return x!=="coords"&&!x.includes("coordinates")}),filterColumns:h=>h.filter(c=>!o.has(c.toLowerCase())),onColumnsLoaded:h=>{const c=h.filter(x=>!o.has(x.toLowerCase()));kt({columns:c}),s()},getAxis:()=>"time"});async function s(){if(!(!e(n).selectedCases.length||!e(n).file||!e(n).selectedColumns.length))try{const h=[];for(const S of e(n).selectedColumns){const b=await vi(e(n).selectedCases[0],e(n).file,[S]);b.found&&h.push({col:S,x:b.x,y:b.y,z:b.z})}if(!h.length){kt({positionText:""});return}const c=S=>{let b=0;for(const L of S){if(L===void 0)continue;const z=String(L),D=z.indexOf(".");D>=0&&(b=Math.max(b,z.length-D-1))}return b},x=c(h.map(S=>S.x)),E=c(h.map(S=>S.y)),g=c(h.map(S=>S.z)),_=h.map(S=>{const b=[];return S.x!==void 0&&b.push(`x=${S.x.toFixed(x)}`),S.y!==void 0&&b.push(`y=${S.y.toFixed(E)}`),S.z!==void 0&&b.push(`z=${S.z.toFixed(g)}`),`Probe position [${S.col}] : ${b.join(" · ")}`});kt({positionText:_.join(`
`)})}catch{kt({positionText:""})}}function l(h){i.handleColumnsChange(h),h.length>0&&s()}let d=U(()=>e(n).files.map(h=>({value:h,label:h.replace(/\.csv$/i,"").replace(/^probes?_/i,"")}))),y=!1;Ne(()=>{r.allCases.length>0&&!y&&(y=!0,kt({selectedCases:[...r.allCases]}),i.loadFiles().then(()=>i.loadPlot()))}),Ne(()=>{a(i.loadPlot)});let w=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one probe.":"No data to display.");var A=_e(),m=B(A);{var M=h=>{const c=z=>{Me(z,{text:"Quantity",children:(D,V)=>{lt(D,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return i.handleFileChange}})}})},x=z=>{var D=Gc(),V=k(D);{let H=U(()=>!e(n).svgHtml);$e(V,{variant:"secondary",size:"sm",onclick:()=>Cn("probe-plot-holder",_r("probe",e(n).selectedCases)),get disabled(){return e(H)},children:(O,j)=>{var q=Kc(),Y=B(q);Te(Y,{get icon(){return gr}}),we(),u(O,q)},$$slots:{default:!0}})}p(D),u(z,D)};var E=Yc(),g=B(E);kn(g,{prefix:"probe",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return i.handleCasesChange},get middleSlot(){return c},columnLabel:"Probes",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},onColumnsChange:l,get startFrom(){return e(n).startFrom},onStartFromChange:z=>{kt({startFrom:z}),i.loadPlot()},xMinLabel:"Time min",get xMin(){return e(n).xMin},onXMinChange:z=>{kt({xMin:z}),i.loadPlot()},get extraSlot(){return x}});var _=P(g,2);{var S=z=>{var D=Xc();Je(D,21,()=>e(n).positionText.split(`
`).sort(),un,(V,H)=>{var O=Wc(),j=k(O,!0);p(O),Q(()=>ee(j,e(H))),u(V,O)}),p(D),u(z,D)};X(_,z=>{e(n).positionText&&z(S)})}var b=P(_,2),L=k(b);Qt(L,{id:"probe-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(w)}}),p(b),u(h,E)},F=h=>{var c=Qc(),x=k(c);Qt(x,{id:"probe-plot-holder",svgHtml:"",emptyMessage:"No probe data available. Please run a simulation first."}),p(c),u(h,c)};X(m,h=>{e(n).files.length>0?h(M):h(F,-1)})}u(t,A),Le()}var Zc=$("<!> <!>",1),eu=$("<!> Download as PNG",1),tu=$('<div class="self-end ml-auto"><!></div>'),ru=$('<!>  <div class="flex justify-center"><!></div>',1),nu=$('<div class="flex justify-center"><!></div>');function au(t,r){Ae(r,!0);let a=he(r,"onRefresh",15),n=U(Wr);const o=["s","x","abscissa","distance","arclength","arc_length","curvilinear","length","r","y","z","coord","position"];function i(c){const x=c.map(E=>E.toLowerCase());for(const E of o){const g=x.indexOf(E);if(g>=0)return c[g]}return c[0]??""}const s=Fa({scope:"profiles",getState:Wr,setState:At,setHasData:ln,onColumnsLoaded:c=>{const x=e(n).axis||i(c),E=c.filter(g=>g!==x).toSorted((g,_)=>g.localeCompare(_));At({columns:E,axis:x,selectedColumns:e(n).selectedColumns.length?e(n).selectedColumns:E.length?[E[0]]:[]})},getAxis:()=>Wr().axis});function l(c){const x=e(n).axis;At({axis:c});const g=[...e(n).columns,...x?[x]:[]].filter(_=>_!==c).toSorted((_,S)=>_.localeCompare(S));At({columns:g}),s.loadPlot()}let d=U(()=>e(n).files.map(c=>({value:c,label:c.replace(/\.csv$/i,"").replace(/^profiles\//i,"").replace(/_/g," ")}))),y=U(()=>[...e(n).axis?[e(n).axis]:[],...e(n).columns].toSorted((c,x)=>c.localeCompare(x)).map(c=>({value:c,label:c}))),w=!1;Ne(()=>{r.allCases.length>0&&!w&&(w=!0,At({selectedCases:[...r.allCases]}),s.loadFiles().then(()=>s.loadPlot()))}),Ne(()=>{a(s.loadPlot)});let A=U(()=>e(n).selectedCases.length===0?"Please select at least one case.":e(n).selectedColumns.length===0?"Please select at least one value.":"No data to display.");var m=_e(),M=B(m);{var F=c=>{const x=L=>{var z=Zc(),D=B(z);Me(D,{text:"Profile",children:(H,O)=>{lt(H,{class:"w-[160px]",get options(){return e(d)},get value(){return e(n).file},get onchange(){return s.handleFileChange}})}});var V=P(D,2);Me(V,{text:"X axis",children:(H,O)=>{lt(H,{class:"w-[140px]",get options(){return e(y)},get value(){return e(n).axis},onchange:l})}}),u(L,z)},E=L=>{var z=tu(),D=k(z);{let V=U(()=>!e(n).svgHtml);$e(D,{variant:"secondary",size:"sm",onclick:()=>Cn("profile-plot-holder",_r("profile",e(n).selectedCases)),get disabled(){return e(V)},children:(H,O)=>{var j=eu(),q=B(j);Te(q,{get icon(){return gr}}),we(),u(H,j)},$$slots:{default:!0}})}p(z),u(L,z)};var g=ru(),_=B(g);kn(_,{prefix:"profile",get allCases(){return r.allCases},get selectedCases(){return e(n).selectedCases},get onCasesChange(){return s.handleCasesChange},get middleSlot(){return x},columnLabel:"Values",get columns(){return e(n).columns},get selectedColumns(){return e(n).selectedColumns},get onColumnsChange(){return s.handleColumnsChange},get startFrom(){return e(n).startFrom},onStartFromChange:L=>{At({startFrom:L}),s.loadPlot()},xMinLabel:"X min",get xMin(){return e(n).xMin},onXMinChange:L=>{At({xMin:L}),s.loadPlot()},get extraSlot(){return E}});var S=P(_,2),b=k(S);Qt(b,{id:"profile-plot-holder",get svgHtml(){return e(n).svgHtml},get emptyMessage(){return e(A)}}),p(S),u(c,g)},h=c=>{var x=nu(),E=k(x);Qt(E,{id:"profile-plot-holder",svgHtml:"",emptyMessage:"No profile data available. Please run a simulation first."}),p(x),u(c,x)};X(M,c=>{e(n).files.length>0?c(F):c(h,-1)})}u(t,m),Le()}var ou=$('<div><div class="text-xs text-muted font-normal">Diagnostics</div> <div class="flex items-baseline gap-4 mt-1"><button>Probes</button> <button>Profiles</button></div></div>'),su=$("<!> Refresh",1),iu=$("<!> <!>",1);function lu(t,r){Ae(r,!0);let a=U(Hc),n=U(qc),o=U(Uc),i=U(Vc),s=I(se(er("probe")));Ne(()=>{tr("probe",e(s))});let l=I(void 0);function d(){var F;(F=e(l))==null||F()}async function y(){if(r.allCases.length){try{const h=(await Qr(r.allCases,"monitoring")).filter(c=>{const x=c.replace(/\.csv$/i,"").toLowerCase();return x!=="coords"&&!x.includes("coordinates")});sn(h.length>0)}catch{sn(!1)}try{const F=await Qr(r.allCases,"profiles");ln(F.length>0)}catch{ln(!1)}}}Ne(()=>{r.allCases.length>0&&y()}),pr(()=>{y(),d()}),Ne(()=>{e(o),e(i),Bc()});function w(F){F==="time"&&!e(o)||F==="profile"&&!e(i)||jc(F)}var A=_e(),m=B(A);{var M=F=>{{const h=x=>{var E=ou(),g=P(k(E),2),_=k(g),S=P(_,2);p(g),p(E),Q(()=>{Ce(_,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(o)?e(a)==="time"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),_.disabled=!e(o),Se(_,"title",e(o)?"":"No probe data available. Run a simulation first."),Ce(S,1,`bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							${e(i)?e(a)==="profile"?"text-edf-bleu-fonce cursor-pointer":"text-edf-gris-moyen cursor-pointer hover:text-muted":"text-edf-gris-moyen cursor-not-allowed opacity-50"}`),S.disabled=!e(i),Se(S,"title",e(i)?"":"No profile data available. Run a simulation first.")}),ie("click",_,()=>w("time")),ie("click",S,()=>w("profile")),u(x,E)};Ot(F,{wide:!0,titleSlot:h,tabs:h,actions:x=>{var E=iu(),g=B(E);{let b=U(()=>e(a)==="time"?"probePlot":"profilePlot"),L=U(Ki);rr(g,{get name(){return e(b)},get intervalMs(){return e(L)},onRefresh:d,get checked(){return e(s)},set checked(z){f(s,z,!0)}})}var _=P(g,2);{var S=b=>{$e(b,{variant:"primary",onclick:d,children:(L,z)=>{var D=su(),V=B(D);Te(V,{get icon(){return Zt}}),we(),u(L,D)},$$slots:{default:!0}})};X(_,b=>{e(s)||b(S)})}u(x,E)},children:(x,E)=>{var g=_e(),_=B(g);{var S=L=>{Jc(L,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(z){f(l,z,!0)}})},b=L=>{au(L,{get allCases(){return r.allCases},get onRefresh(){return e(l)},set onRefresh(z){f(l,z,!0)}})};X(_,L=>{e(a)==="time"?L(S):L(b,-1)})}u(x,g)},$$slots:{tabs:!0,actions:!0,default:!0}})}};X(m,F=>{e(n)&&F(M)})}u(t,A),Le()}We(["click"]);var cu=$("<!> Refresh",1),uu=$("<!> <!>",1),du=$("<!> Download as CSV",1),fu=$('<!> <div class="self-end ml-auto"><!></div>',1),vu=$("<th> </th>"),gu=$('<td class="whitespace-nowrap"> </td>'),hu=$('<tr><td class="case-id whitespace-nowrap" style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"> </td><!></tr>'),pu=$('<div class="table-wrap"><table id="perf-table" style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"><thead><tr><th style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);">Case</th><!></tr></thead><tbody id="perf-body"></tbody></table></div>'),mu=$('<p class="text-sm text-muted italic text-center py-8"><!></p>'),_u=$("<!> <!>",1);function bu(t,r){Ae(r,!0);let a=I(se([])),n=I(se([])),o=I(!1),i=I(!1),s=I(se(er("perf")));Ne(()=>{tr("perf",e(s))});const l=5e3;let y=I(se([{key:"elapsed_time",label:"Elapsed (s)",kind:"time"},{key:"io_time",label:"I/O (s)",kind:"time"},{key:"linear_solver_time",label:"Linear Solver (s)",kind:"time"},{key:"gradients_time",label:"Gradients (s)",kind:"time"},{key:"balances_time",label:"Balances (s)",kind:"time"},{key:"mpi_ranks",label:"MPI Ranks",kind:"int"},{key:"threads",label:"Threads",kind:"int"}])),w=U(()=>r.allCases.map(E=>({value:E,label:E}))),A=U(()=>e(n).length>0);async function m(){var E;if(e(a).length){f(i,!0);try{const g=await Dn(e(a));(E=g.columns)!=null&&E.length&&f(y,g.columns,!0),f(n,g.records,!0),e(n).length>0&&f(o,!0)}catch(g){console.error("Failed to load perf:",g)}f(i,!1)}}function M(E){if(f(a,E,!0),E.length===0){f(n,[],!0);return}m()}function F(E,g){if(g==null||g==="")return"-";if(E==="text")return g;const _=Number(g);return Number.isFinite(_)?E==="int"?String(Math.round(_)):_.toFixed(3):g}async function h(){if(!e(n).length)return;const E=["case_id",...e(y).map(b=>b.key)],g=e(n).map(b=>[b.case_id,...e(y).map(L=>b[L.key]??"")].join(",")),_=[E.join(","),...g].join(`
`),S=_r("timing_snapshot",e(a),"csv");await Pa(_,S)}let c=!1;Ne(()=>{r.allCases.length>0&&!c&&(c=!0,f(a,[...r.allCases],!0),Dn(r.allCases).then(E=>{var g;(g=E.columns)!=null&&g.length&&f(y,E.columns,!0),f(o,E.records.length>0),f(n,E.records,!0)}).catch(()=>{}))}),Ne(()=>{e(s)?hr("perf",m,l):vt("perf")});const x=pr(()=>{c&&m()});dr(()=>{vt("perf"),x()}),Ot(t,{eyebrow:"Performance",title:"Timing Snapshot",wide:!0,actions:g=>{var _=uu(),S=B(_);rr(S,{name:"perf",intervalMs:l,onRefresh:m,get checked(){return e(s)},set checked(z){f(s,z,!0)}});var b=P(S,2);{var L=z=>{$e(z,{variant:"primary",onclick:m,children:(D,V)=>{var H=cu(),O=B(H);Te(O,{get icon(){return Zt}}),we(),u(D,H)},$$slots:{default:!0}})};X(b,z=>{e(s)||z(L)})}u(g,_)},children:(g,_)=>{var S=_u(),b=B(S);{var L=H=>{Yt(H,{children:(O,j)=>{var q=fu(),Y=B(q);Me(Y,{text:"Cases",children:(C,v)=>{Gt(C,{class:"w-[160px]",get options(){return e(w)},get selected(){return e(a)},onchange:M,placeholder:"Select cases..."})}});var ae=P(Y,2),N=k(ae);{let C=U(()=>!e(A));$e(N,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(C)},children:(v,T)=>{var R=du(),J=B(R);Te(J,{get icon(){return gr}}),we(),u(v,R)},$$slots:{default:!0}})}p(ae),u(O,q)}})};X(b,H=>{e(o)&&H(L)})}var z=P(b,2);{var D=H=>{var O=pu(),j=k(O),q=k(j),Y=k(q),ae=P(k(Y));Je(ae,17,()=>e(y),C=>C.key,(C,v)=>{var T=vu(),R=k(T,!0);p(T),Q(()=>ee(R,e(v).label)),u(C,T)}),p(Y),p(q);var N=P(q);Je(N,21,()=>e(n),C=>C.case_id,(C,v)=>{var T=hu(),R=k(T),J=k(R,!0);p(R);var oe=P(R);Je(oe,17,()=>e(y),ge=>ge.key,(ge,le)=>{var K=gu(),re=k(K,!0);p(K),Q(ne=>ee(re,ne),[()=>F(e(le).kind,e(v)[e(le).key])]),u(ge,K)}),p(T),Q(()=>ee(J,e(v).case_id)),u(C,T)}),p(N),p(j),p(O),u(H,O)},V=H=>{var O=mu(),j=k(O);{var q=ae=>{var N=Be("Select cases above to view timing information.");u(ae,N)},Y=ae=>{var N=Be("No performance data available. Please run a simulation first.");u(ae,N)};X(j,ae=>{e(o)?ae(q):ae(Y,-1)})}p(O),u(H,O)};X(z,H=>{e(A)?H(D):H(V,-1)})}u(g,S)},$$slots:{actions:!0,default:!0}}),Le()}const xu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function za(t){return t.replace(/[&<>"']/g,r=>xu[r]??r)}var yu=$("<div></div>"),wu=$('<pre class="code-box tail-pane"></pre>');function ku(t,r){Ae(r,!0);let a=I(void 0);function n(y){const w=za(y);if(!r.searchQuery.trim())return w;try{const A=new RegExp(`(${r.searchQuery})`,"gi");return w.replace(A,'<span class="tail-query-hit">$1</span>')}catch{return w}}function o(y){return y==="error"?"tail-sev-error":y==="warn"?"tail-sev-warn":y==="info"?"tail-sev-info":""}function i(){return e(a)?e(a).scrollHeight-e(a).scrollTop-e(a).clientHeight<=24:!0}let s=I(!0);function l(){f(s,i(),!0)}Ne(()=>{r.autoScroll&&r.lines.length>0&&e(a)&&e(s)&&Pt().then(()=>{e(a)&&(e(a).scrollTop=e(a).scrollHeight)})});var d=wu();Je(d,21,()=>r.lines,y=>y.index,(y,w)=>{var A=yu();Fr(A,()=>n(e(w).text),!0),p(A),Q(m=>Ce(A,1,`tail-line ${m??""} ${e(w).isNew?"tail-new":""}`),[()=>o(e(w).severity)]),u(y,A)}),p(d),nt(d,y=>f(a,y),()=>e(a)),rt("scroll",d,l),u(t,d),Le()}const Cu=/(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i,Su=/(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;function $u(t){return Cu.test(t)?"error":Su.test(t)?"warn":"none"}function Pu(t,r){return r==="all"||r===""?!0:r==="info"?t!=="none":t===r}var Eu=$("<!> Refresh",1),Ru=$("<!> <!>",1),Nu=$('<input type="number" min="1" class="w-[70px]"/>'),Mu=$('<input type="text" placeholder="regex..." class="w-[140px]"/>'),Au=$("<!> <!> <!> <!> <!>",1),Lu=It('<svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"><rect x="0" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect><rect x="5" y="0" width="3" height="10" rx="0.5" fill="currentColor"></rect></svg>'),Tu=It('<svg class="shrink-0 mr-2 animate-pulse" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)"></circle></svg>'),Fu=It('<svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)"></circle></svg>'),Du=$("<!> Resume",1),zu=$("<!> Pause",1),Iu=$('<span class="text-xs text-muted">Case not running</span>'),Ou=$('<!> <div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"><!> </span> <!> <div class="ml-auto"><!></div></div>',1),Hu=$('<p class="text-sm text-muted italic text-center py-8">No log data available. Please run a simulation first.</p>'),ju=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Uu=$("<!> <!> <!>",1);function Vu(t,r){Ae(r,!0);const a=80;let n=I(""),o=I(""),i=I(!1),s=I(se([])),l=I(a),d=I(se([])),y=I(se(new Set)),w=I(!1),A=I(se(er("tail")));Ne(()=>{tr("tail",e(A))});let m=I(!0),M=I("all"),F=I(""),h=I(""),c=I(void 0),x=U(()=>wn(r.allCases)),E=U(()=>e(s).map(N=>{const C=N.split("/").pop()??N;return{value:N,label:C}})),g=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"}],_=U(()=>e(s).length>0),S=U(()=>bn().some(N=>{var C;return N.case_id===e(n)&&((C=N.status)==null?void 0:C.toUpperCase())==="RUNNING"}));const b={"run_solver.log":1,listing:2,"run_status.running":3,"csauto.stdout":4,"csauto.stderr":5,"performance.log":6};function L(N){const C=N.split("/").pop()??N;return b[C]??99}async function z(){if(e(n))try{const v=(await ui(e(n))).filter(T=>T.endsWith(".log")||T.endsWith("/summary")).sort((T,R)=>L(T)-L(R));if(f(s,v,!0),v.length>0){const T=v[0];!e(o)||!v.includes(e(o))?(f(o,T,!0),f(i,!1)):!e(i)&&L(T)<L(e(o))&&f(o,T,!0)}e(s).length===0&&(f(o,""),f(d,[],!0))}catch(N){console.error("Failed to load tail files:",N),f(s,[],!0)}}async function D(N=!1){if(e(n)&&!(e(w)&&!N)&&(await z(),!!e(o)))try{const C=await ci(e(n),e(o),e(l));f(h,"");const v=C.split(`
`),T=v.length>0&&v[v.length-1]===""?v.slice(0,-1):v;if(e(d).length>0){const R=V(e(d),T),J=new Set;for(let oe=R;oe<T.length;oe++)J.add(oe);f(y,J,!0)}f(d,T,!0)}catch(C){f(h,"Failed to load log tail"),console.error("Failed to load tail:",C)}}function V(N,C){const v=Math.min(N.length,C.length);for(let T=0;T<v;T++){let R=!0;for(let J=0;J<Math.min(N.length-T,C.length);J++)if(N[T+J]!==C[J]){R=!1;break}if(R)return N.length-T}return 0}let H=U(()=>{let N=e(d).map((C,v)=>({text:C,index:v,severity:$u(C),isNew:e(y).has(v)}));if(e(M)!=="all"&&(N=N.filter(C=>Pu(C.severity,e(M)))),e(F).trim())try{const C=new RegExp(e(F),"i");N=N.filter(v=>C.test(v.text))}catch{}return N});function O(N){f(n,N,!0),f(o,""),f(i,!1),f(d,[],!0),z().then(()=>D(!0))}function j(N){f(o,N,!0),f(i,!0),f(d,[],!0),D(!0)}function q(){f(w,!e(w)),e(w)||D(!0)}function Y(N){(N.ctrlKey||N.metaKey)&&N.key==="f"&&e(c)&&(N.preventDefault(),e(c).focus())}Ne(()=>{r.allCases.length>0&&!e(n)&&(f(n,r.allCases[0],!0),z().then(()=>D(!0)))}),Ne(()=>{e(A)&&!e(w)&&e(n)?hr("tail",()=>D(!1),In()):vt("tail")});const ae=pr(()=>{e(n)&&z().then(()=>D(!0))});dr(()=>{vt("tail"),ae()}),rt("keydown",it,Y),Ot(t,{eyebrow:"Live",title:"Log Tail",wide:!0,actions:C=>{var v=Ru(),T=B(v);{let oe=U(In);rr(T,{name:"tail",get intervalMs(){return e(oe)},onRefresh:()=>D(!1),get checked(){return e(A)},set checked(ge){f(A,ge,!0)}})}var R=P(T,2);{var J=oe=>{$e(oe,{variant:"primary",onclick:()=>D(!0),children:(ge,le)=>{var K=Eu(),re=B(K);Te(re,{get icon(){return Zt}}),we(),u(ge,K)},$$slots:{default:!0}})};X(R,oe=>{e(A)||oe(J)})}u(C,v)},children:(C,v)=>{var T=Uu(),R=B(T);{var J=ne=>{Yt(ne,{children:(ue,de)=>{var Z=Au(),be=B(Z);Me(be,{text:"Case",children:(pe,Oe)=>{lt(pe,{class:"w-[130px]",get options(){return e(x)},get value(){return e(n)},onchange:O})}});var fe=P(be,2);Me(fe,{text:"File",children:(pe,Oe)=>{lt(pe,{class:"w-[150px]",get options(){return e(E)},get value(){return e(o)},onchange:j})}});var Pe=P(fe,2);Me(Pe,{text:"Lines",children:(pe,Oe)=>{var He=Nu();Qe(He),ie("change",He,()=>D(!0)),tt(He,()=>e(l),Fe=>f(l,Fe)),u(pe,He)}});var ve=P(Pe,2);Me(ve,{text:"Filter",children:(pe,Oe)=>{var He=Mu();Qe(He),nt(He,Fe=>f(c,Fe),()=>e(c)),tt(He,()=>e(F),Fe=>f(F,Fe)),u(pe,He)}});var ze=P(ve,2);Me(ze,{text:"Severity",children:(pe,Oe)=>{lt(pe,{class:"w-[90px]",get options(){return g},get value(){return e(M)},onchange:He=>f(M,He,!0)})}}),u(ue,Z)}})};X(R,ne=>{e(_)&&ne(J)})}var oe=P(R,2);{var ge=ne=>{var ue=Ou(),de=B(ue);ku(de,{get lines(){return e(H)},get searchQuery(){return e(F)},get autoScroll(){return e(m)}});var Z=P(de,2),be=k(Z),fe=k(be);{var Pe=G=>{var W=Lu();u(G,W)},ve=G=>{var W=Tu();u(G,W)},ze=G=>{var W=Fu();u(G,W)};X(fe,G=>{e(w)?G(Pe):e(S)?G(ve,1):G(ze,-1)})}var pe=P(fe);p(be);var Oe=P(be,2);{var He=G=>{$e(G,{variant:"secondary",size:"sm",onclick:q,children:(W,te)=>{var ce=_e(),Re=B(ce);{var Ie=me=>{var ke=Du(),je=B(ke);Te(je,{get icon(){return pa}}),we(),u(me,ke)},xe=me=>{var ke=zu(),je=B(ke);Te(je,{get icon(){return Vs}}),we(),u(me,ke)};X(Re,me=>{e(w)?me(Ie):me(xe,-1)})}u(W,ce)},$$slots:{default:!0}})},Fe=G=>{var W=Iu();u(G,W)};X(Oe,G=>{e(S)?G(He):G(Fe,-1)})}var ye=P(Oe,2),Ee=k(ye);zt(Ee,{get checked(){return e(m)},onchange:G=>f(m,G,!0),size:14,label:"Auto-scroll",labelFirst:!0}),p(ye),p(Z),Q(()=>ee(pe,` ${e(H).length??""} / ${e(d).length??""}`)),u(ne,ue)},le=ne=>{var ue=Hu();u(ne,ue)};X(oe,ne=>{e(d).length>0?ne(ge):ne(le,-1)})}var K=P(oe,2);{var re=ne=>{var ue=ju(),de=k(ue,!0);p(ue),Q(()=>ee(de,e(h))),u(ne,ue)};X(K,ne=>{e(h)&&ne(re)})}u(C,T)},$$slots:{actions:!0,default:!0}}),Le()}We(["change"]);function Bu(t,r=3){var M,F;const a=t.split(`
`),n=[];let o=0,i=0,s=!1;for(const h of a){if(h.startsWith("===")||h.startsWith("---")||h.startsWith("+++"))continue;const c=h.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);if(c){o=parseInt(c[1],10)-1,i=parseInt(c[2],10)-1,s=!0;continue}if(s)if(h.startsWith("-"))o++,n.push({type:"del",leftNum:o,rightNum:null,leftContent:h.slice(1),rightContent:""});else if(h.startsWith("+"))i++,n.push({type:"add",leftNum:null,rightNum:i,leftContent:"",rightContent:h.slice(1)});else{o++,i++;const x=h.startsWith(" ")?h.slice(1):h;n.push({type:"equal",leftNum:o,rightNum:i,leftContent:x,rightContent:x})}}const l=[];let d=0;for(;d<n.length;)if(n[d].type==="del"){const h=[];for(;d<n.length&&n[d].type==="del";)h.push(n[d]),d++;const c=[];for(;d<n.length&&n[d].type==="add";)c.push(n[d]),d++;const x=Math.max(h.length,c.length);for(let E=0;E<x;E++){const g=h[E],_=c[E];g&&_?l.push({type:"del",leftNum:g.leftNum,rightNum:_.rightNum,leftContent:g.leftContent,rightContent:_.rightContent}):g?l.push(g):_&&l.push(_)}}else l.push(n[d]),d++;const y=new Set;for(let h=0;h<l.length;h++)if(l[h].type!=="equal")for(let c=Math.max(0,h-r);c<=Math.min(l.length-1,h+r);c++)y.add(c);if(y.size===0)return[];const w=[];let A=-1,m=!1;for(let h=0;h<l.length;h++)if(y.has(h)){A>=0&&h-A>1&&w.push({kind:"separator",skipped:h-A-1});const c=l[h].type!=="equal",x=c&&!m;w.push({kind:"line",row:l[h],hunkStart:x}),m=c,A=h}if(A<l.length-1&&A>=0&&w.push({kind:"separator",skipped:l.length-1-A}),w.length>0&&w[0].kind==="line"){const h=((M=w[0].row)==null?void 0:M.leftNum)??0,c=((F=w[0].row)==null?void 0:F.rightNum)??0,x=Math.max(h,c)-1;x>0&&w.unshift({kind:"separator",skipped:x})}return w}var qu=$('<div class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"><span class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"></span> <span class="px-2 text-[11px]"> </span></div>'),Ku=$('<div><span class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"> </span> <span class="px-2 whitespace-pre"></span></div>'),Gu=$('<!> <span class="text-xs min-w-[36px] text-center text-muted px-1.5"> </span> <!>',1),Wu=$('<span class="text-xs text-muted">No matches</span>'),Xu=$('<div class="grid grid-cols-2"><div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"><div class="inline-block min-w-full"><!></div></div> <div class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"><div class="inline-block min-w-full"><!></div></div></div>'),Yu=$('<p class="text-sm text-muted text-center py-8">Files are identical.</p>'),Qu=$('<div class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"><span class="text-sm text-muted">Loading...</span></div>'),Ju=$('<div class="border border-border rounded-lg overflow-hidden relative" tabindex="-1"><div class="grid grid-cols-2"><div class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"><span class="text-[13px] font-bold text-edf-orange-fonce"> </span> <span class="text-xs text-edf-orange-fonce"> </span></div> <div class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"><span class="text-[13px] font-bold text-edf-vert-fonce"> </span> <span class="text-xs text-edf-vert-fonce"> </span></div></div> <div class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"><div class="flex items-center gap-1"><input type="text" placeholder="Search..." class="w-[140px] text-xs"/> <!></div> <div class="flex items-center gap-1"><!> <span class="text-xs font-bold min-w-[40px] text-center px-1.5"> </span> <!></div></div> <!> <!></div>');function Zu(t,r){Ae(r,!0);let a=he(r,"loading",3,!1),n=I(void 0),o=U(()=>Bu(r.diffText)),i=U(()=>{const G=[];return e(o).forEach((W,te)=>{W.hunkStart&&G.push(te)}),G}),s=U(()=>e(i).length>0),l=U(()=>{var W;const G=new Array(e(o).length).fill(-1);for(let te=0;te<e(i).length;te++){let ce=e(i)[te];for(;ce<e(o).length&&e(o)[ce].kind==="line"&&((W=e(o)[ce].row)==null?void 0:W.type)!=="equal";)G[ce]=te,ce++}return G}),d=I(-1),y="";Ne(()=>{r.diffText!==y&&(y=r.diffText,f(d,-1))});let w=U(()=>{if(!r.search.trim())return[];try{const G=new RegExp(r.search,"i"),W=[];return e(o).forEach((te,ce)=>{te.kind==="line"&&te.row&&(G.test(te.row.leftContent)||G.test(te.row.rightContent))&&W.push(ce)}),W}catch{return[]}}),A=I(-1),m="";Ne(()=>{r.search!==m&&(m=r.search,f(A,e(w).length>0?0:-1,!0))});async function M(G){var ce;f(A,G,!0),await Pt();const W=e(w)[G],te=(ce=e(g))==null?void 0:ce.querySelector(`[data-item-idx="${W}"]`);if(te&&e(g)&&e(_)){const Re=e(g).getBoundingClientRect(),xe=te.getBoundingClientRect().top-Re.top+e(g).scrollTop-e(g).clientHeight/3;b=!0,e(g).scrollTop=xe,e(_).scrollTop=xe,requestAnimationFrame(()=>{b=!1})}}function F(){e(A)>0&&M(e(A)-1)}function h(){e(A)<0&&e(w).length>0?M(0):e(A)<e(w).length-1&&M(e(A)+1)}function c(G,W){const te=za(G);if(!r.search.trim())return te;try{const ce=new RegExp(`(${r.search})`,"gi"),Re=W?"bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]":"bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";return te.replace(ce,`<span class="${Re}">$1</span>`)}catch{return te}}function x(G,W){return G==="equal"?"":G==="del"&&W==="left"?"bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce":G==="del"&&W==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":G==="add"&&W==="left"?"bg-edf-gris-clair":G==="add"&&W==="right"?"bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce":""}function E(G,W){return G==="del"&&W==="left"?"rgb(251,237,233)":G==="del"&&W==="right"?"rgb(238,247,236)":G==="add"&&W==="left"?"var(--color-edf-gris-clair)":G==="add"&&W==="right"?"rgb(238,247,236)":"white"}let g=I(void 0),_=I(void 0),S=!1,b=!1;function L(G){S||b||!e(g)||!e(_)||(S=!0,G==="left"?(e(_).scrollTop=e(g).scrollTop,e(_).scrollLeft=e(g).scrollLeft):(e(g).scrollTop=e(_).scrollTop,e(g).scrollLeft=e(_).scrollLeft),requestAnimationFrame(()=>{S=!1}))}async function z(G){var te;f(d,G,!0),await Pt();const W=(te=e(g))==null?void 0:te.querySelector(`[data-hunk-start="${G}"]`);if(W&&e(g)&&e(_)){b=!0;const ce=e(g).getBoundingClientRect(),Ie=W.getBoundingClientRect().top-ce.top+e(g).scrollTop-e(g).clientHeight/3;e(g).scrollTop=Ie,e(_).scrollTop=Ie,requestAnimationFrame(()=>{b=!1})}}function D(){e(d)>0&&z(e(d)-1)}function V(){e(d)<0?z(0):e(d)<e(i).length-1&&z(e(d)+1)}function H(G){const W=e(l)[G];W>=0&&f(d,W,!0)}function O(G){G.target instanceof HTMLInputElement||(G.key==="n"&&!G.shiftKey?(G.preventDefault(),V()):G.key==="N"||G.key==="n"&&G.shiftKey?(G.preventDefault(),D()):G.key==="j"?(G.preventDefault(),h()):(G.key==="J"||G.key==="j"&&G.shiftKey)&&(G.preventDefault(),F()))}var j=Ju();{const G=(W,te=wo)=>{var ce=_e(),Re=B(ce);Je(Re,17,()=>e(o),un,(Ie,xe,me)=>{const ke=U(()=>e(i).indexOf(me)),je=U(()=>e(l)[me]>=0&&e(l)[me]===e(d)),Xe=U(()=>{var at,Ge;return te()==="left"?(at=e(xe).row)==null?void 0:at.leftNum:(Ge=e(xe).row)==null?void 0:Ge.rightNum}),gt=U(()=>{var at,Ge;return te()==="left"?((at=e(xe).row)==null?void 0:at.leftContent)??"":((Ge=e(xe).row)==null?void 0:Ge.rightContent)??""});var Ht=_e(),Or=B(Ht);{var et=at=>{var Ge=qu(),Nt=P(k(Ge),2),Hr=k(Nt);p(Nt),p(Ge),Q(()=>ee(Hr,`... ${e(xe).skipped??""} lines hidden ...`)),u(at,Ge)},ut=at=>{var Ge=Ku(),Nt=k(Ge),Hr=k(Nt,!0);p(Nt);var Sn=P(Nt,2);Fr(Sn,()=>c(e(gt),e(A)>=0&&e(w)[e(A)]===me),!0),p(Sn),p(Ge),Q((yt,Mt,br,Ia,Oa)=>{Ce(Ge,1,`flex w-full ${yt??""} ${Mt??""}`),Ze(Ge,e(je)?"background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);":""),Se(Ge,"role",br),Se(Ge,"tabindex",Ia),Se(Ge,"data-hunk-start",te()==="left"&&e(ke)>=0?e(ke):void 0),Se(Ge,"data-item-idx",te()==="left"?me:void 0),Ze(Nt,`background: ${Oa??""}; color: ${e(je)?"white":"var(--color-muted)"};`),ee(Hr,e(Xe)??"")},[()=>x(e(xe).row.type,te()),()=>e(xe).row.type!=="equal"||e(w).includes(me)?"cursor-pointer":"",()=>e(xe).row.type!=="equal"||e(w).includes(me)?"button":void 0,()=>e(xe).row.type!=="equal"||e(w).includes(me)?0:void 0,()=>e(je)?"rgb(16,87,200)":E(e(xe).row.type,te())]),ie("click",Ge,()=>{var Mt;((Mt=e(xe).row)==null?void 0:Mt.type)!=="equal"&&H(me);const yt=e(w).indexOf(me);yt>=0&&f(A,yt,!0)}),ie("keydown",Ge,yt=>{var Mt;if(yt.key==="Enter"||yt.key===" "){yt.preventDefault(),((Mt=e(xe).row)==null?void 0:Mt.type)!=="equal"&&H(me);const br=e(w).indexOf(me);br>=0&&f(A,br,!0)}}),u(at,Ge)};X(Or,at=>{e(xe).kind==="separator"?at(et):e(xe).row&&at(ut,1)})}u(Ie,Ht)}),u(W,ce)};var q=k(j),Y=k(q),ae=k(Y),N=k(ae,!0);p(ae);var C=P(ae,2),v=k(C,!0);p(C),p(Y);var T=P(Y,2),R=k(T),J=k(R,!0);p(R);var oe=P(R,2),ge=k(oe,!0);p(oe),p(T),p(q);var le=P(q,2),K=k(le),re=k(K);Qe(re);var ne=P(re,2);{var ue=W=>{var te=Gu(),ce=B(te);{let me=U(()=>e(A)<=0);$e(ce,{variant:"secondary",size:"sm",onclick:F,get disabled(){return e(me)},children:(ke,je)=>{we();var Xe=Be("Prev");u(ke,Xe)},$$slots:{default:!0}})}var Re=P(ce,2),Ie=k(Re);p(Re);var xe=P(Re,2);{let me=U(()=>e(A)>=e(w).length-1);$e(xe,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(me)},children:(ke,je)=>{we();var Xe=Be("Next");u(ke,Xe)},$$slots:{default:!0}})}Q(()=>ee(Ie,`${e(A)>=0?e(A)+1:"–"} / ${e(w).length??""} occurrence${e(w).length!==1?"s":""}`)),u(W,te)},de=U(()=>r.search.trim()&&e(w).length>0),Z=W=>{var te=Wu();u(W,te)},be=U(()=>r.search.trim());X(ne,W=>{e(de)?W(ue):e(be)&&W(Z,1)})}p(K);var fe=P(K,2),Pe=k(fe);{let W=U(()=>e(i).length===0||e(d)<=0);$e(Pe,{variant:"secondary",size:"sm",onclick:D,get disabled(){return e(W)},children:(te,ce)=>{we();var Re=Be("Prev");u(te,Re)},$$slots:{default:!0}})}var ve=P(Pe,2),ze=k(ve);p(ve);var pe=P(ve,2);{let W=U(()=>e(i).length===0||e(d)>=e(i).length-1);$e(pe,{variant:"secondary",size:"sm",onclick:V,get disabled(){return e(W)},children:(te,ce)=>{we();var Re=Be("Next");u(te,Re)},$$slots:{default:!0}})}p(fe),p(le);var Oe=P(le,2);{var He=W=>{var te=Xu(),ce=k(te),Re=k(ce),Ie=k(Re);G(Ie,()=>"left"),p(Re),p(ce),nt(ce,je=>f(g,je),()=>e(g));var xe=P(ce,2),me=k(xe),ke=k(me);G(ke,()=>"right"),p(me),p(xe),nt(xe,je=>f(_,je),()=>e(_)),p(te),rt("scroll",ce,()=>L("left")),rt("scroll",xe,()=>L("right")),u(W,te)},Fe=W=>{var te=Yu();u(W,te)};X(Oe,W=>{e(s)?W(He):W(Fe,-1)})}var ye=P(Oe,2);{var Ee=W=>{var te=Qu();u(W,te)};X(ye,W=>{a()&&W(Ee)})}p(j),nt(j,W=>f(n,W),()=>e(n)),Q(()=>{ee(N,r.leftLabel),ee(v,r.kind),ee(J,r.rightLabel),ee(ge,r.kind),dn(re,r.search),ee(ze,`${e(d)>=0?e(d)+1:"–"} / ${e(i).length??""} diff${e(i).length!==1?"s":""}`)}),ie("input",re,W=>r.onSearchChange(W.target.value)),ie("keydown",re,W=>{W.key==="Enter"&&(W.preventDefault(),h())})}ie("keydown",j,O),u(t,j),Le()}We(["keydown","click","input"]);var ed=$("<!> <!> <!>",1),td=$('<p class="text-sm text-muted text-center py-8">Please select two different cases to compare.</p>'),rd=$('<p class="text-sm text-muted text-center py-8">Select two cases to compare.</p>'),nd=$('<tr><td style="text-align: center;"> </td><td style="text-align: center;" class="font-bold"> </td><td style="text-align: center;"> </td></tr>'),ad=$('<div class="table-wrap mb-3"><table style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"><thead><tr><th style="text-align: center;"> </th><th style="text-align: center;">Parameter</th><th style="text-align: center;"> </th></tr></thead><tbody></tbody></table></div>'),od=$('<p class="text-sm text-muted text-center py-4 mb-3">All parameters are identical.</p>'),sd=$('<div class="flex items-center justify-between mb-1"><span class="text-xs text-muted"> </span> <button class="text-xs text-edf-bleu-moyen cursor-pointer hover:underline"> </button></div> <!>',1),id=$('<p class="text-sm text-red-600 text-center py-8"> </p>'),ld=$('<p class="text-sm text-muted text-center py-8">Loading...</p>'),cd=$("<!> <!> <!>",1),ud=$("<!> <!>",1);function dd(t,r){Ae(r,!0);let a=I(""),n=I(""),o=I(""),i=I(""),s=I(""),l=I(!1),d=I(!1),y=I(""),w=U(()=>r.allCases.map(b=>({value:b,label:b})));const A=[{value:"setup.xml",label:"setup.xml"},{value:"doe_row.csv",label:"doe_row.csv"},{value:"run_solver.log",label:"run_solver.log"},{value:"performance.log",label:"performance.log"}];let m=U(()=>{var b;return((b=Bt())==null?void 0:b.compare_kinds)??A});Ne(()=>{var b;e(m).some(L=>L.value===e(o))||f(o,((b=e(m)[0])==null?void 0:b.value)??"",!0)});let M=I(!1),F=U(()=>e(a)&&e(n)&&e(a)!==e(n));function h(){const b=e(a);f(a,e(n),!0),f(n,b,!0)}async function c(){if(e(F)){f(l,!0),f(y,"");try{const b=await hi({cases:[e(a),e(n)],base:e(a),kind:e(o)});f(s,b,!0),f(d,!0)}catch(b){console.error("Failed to load diff:",b),f(s,""),f(d,!1);const L=b instanceof Error?b.message:String(b);f(y,L.includes("404")?`File "${e(o)}" not found for one of the selected cases. It may not have been run yet.`:"Failed to load comparison.",!0)}f(l,!1)}}Ne(()=>{e(a)&&e(n)&&e(a)!==e(n)&&e(o)?c():e(a)&&e(n)&&e(a)===e(n)&&(f(s,""),f(d,!0))});let x=!1;Ne(()=>{r.allCases.length>=2&&!x?(x=!0,f(a,r.allCases[0],!0),f(n,r.allCases[1],!0)):r.allCases.length===1&&!x&&(x=!0,f(a,r.allCases[0],!0))});let E=U(xn),g=U(()=>{if(!e(a)||!e(n)||e(a)===e(n)||e(E).length===0)return[];const b=bn(),L=b.find(D=>D.case_id===e(a)),z=b.find(D=>D.case_id===e(n));return!L&&!z?[]:e(E).map(D=>{var O,j;const V=((O=L==null?void 0:L.doe)==null?void 0:O[D])!=null&&String(L.doe[D])!==""?String(L.doe[D]):"—",H=((j=z==null?void 0:z.doe)==null?void 0:j[D])!=null&&String(z.doe[D])!==""?String(z.doe[D]):"—";return{param:D,left:V,right:H,differs:V!==H}})}),_=U(()=>e(M)?e(g):e(g).filter(b=>b.differs)),S=U(()=>e(g).filter(b=>b.differs).length);Ot(t,{eyebrow:"Compare",title:"Side-by-Side Comparison",wide:!0,children:(b,L)=>{var z=ud(),D=B(z);Yt(D,{children:(q,Y)=>{var ae=ed(),N=B(ae);Me(N,{text:"First case",children:(T,R)=>{lt(T,{class:"w-32.5",get options(){return e(w)},get value(){return e(a)},onchange:J=>f(a,J,!0),placeholder:"Select..."})}});var C=P(N,2);{let T=U(()=>!e(a)&&!e(n));$e(C,{variant:"secondary",size:"sm",onclick:h,get disabled(){return e(T)},children:(R,J)=>{Te(R,{get icon(){return Ts}})},$$slots:{default:!0}})}var v=P(C,2);Me(v,{text:"Second case",children:(T,R)=>{lt(T,{class:"w-32.5",get options(){return e(w)},get value(){return e(n)},onchange:J=>f(n,J,!0),placeholder:"Select..."})}}),u(q,ae)}});var V=P(D,2);{var H=q=>{var Y=td();u(q,Y)},O=q=>{var Y=rd();u(q,Y)},j=q=>{var Y=cd(),ae=B(Y);{var N=oe=>{var ge=sd(),le=B(ge),K=k(le),re=k(K);p(K);var ne=P(K,2),ue=k(ne,!0);p(ne),p(le);var de=P(le,2);{var Z=fe=>{var Pe=ad(),ve=k(Pe),ze=k(ve),pe=k(ze),Oe=k(pe),He=k(Oe,!0);p(Oe);var Fe=P(Oe,2),ye=k(Fe,!0);p(Fe),p(pe),p(ze);var Ee=P(ze);Je(Ee,21,()=>e(_),G=>G.param,(G,W)=>{var te=nd(),ce=k(te),Re=k(ce,!0);p(ce);var Ie=P(ce),xe=k(Ie,!0);p(Ie);var me=P(Ie),ke=k(me,!0);p(me),p(te),Q(()=>{Ce(ce,1,dt(e(W).differs?"text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]":"")),ee(Re,e(W).left),ee(xe,e(W).param),Ce(me,1,dt(e(W).differs?"text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]":"")),ee(ke,e(W).right)}),u(G,te)}),p(Ee),p(ve),p(Pe),Q(()=>{ee(He,e(a)),ee(ye,e(n))}),u(fe,Pe)},be=fe=>{var Pe=od();u(fe,Pe)};X(de,fe=>{e(_).length>0?fe(Z):fe(be,-1)})}Q(()=>{ee(re,`${e(S)??""} difference${e(S)!==1?"s":""} out of ${e(g).length??""}
          parameters`),ee(ue,e(M)?"Show differences only":"Show all parameters")}),ie("click",ne,()=>f(M,!e(M))),u(oe,ge)};X(ae,oe=>{e(g).length>0&&oe(N)})}var C=P(ae,2);Yt(C,{children:(oe,ge)=>{Me(oe,{text:"File",children:(le,K)=>{lt(le,{class:"w-37.5",get options(){return e(m)},get value(){return e(o)},onchange:re=>f(o,re,!0)})}})}});var v=P(C,2);{var T=oe=>{var ge=id(),le=k(ge,!0);p(ge),Q(()=>ee(le,e(y))),u(oe,ge)},R=oe=>{Zu(oe,{get diffText(){return e(s)},get leftLabel(){return e(a)},get rightLabel(){return e(n)},get kind(){return e(o)},get search(){return e(i)},get loading(){return e(l)},onSearchChange:ge=>f(i,ge,!0)})},J=oe=>{var ge=ld();u(oe,ge)};X(v,oe=>{e(y)?oe(T):e(d)?oe(R,1):e(l)&&oe(J,2)})}u(q,Y)};X(V,q=>{e(a)&&e(n)&&e(a)===e(n)?q(H):!e(a)||!e(n)?q(O,1):q(j,-1)})}u(b,z)},$$slots:{default:!0}}),Le()}We(["click"]);var fd=$("<!> Refresh",1),vd=$("<!> <!>",1),gd=$('<input type="text" placeholder="text filter..." class="min-w-[200px]"/>'),hd=$('<input type="number" min="0" max="50" style="width: 70px;"/>'),pd=$("<!> Download as CSV",1),md=$('<!> <!> <!> <!> <!> <div class="self-end ml-auto"><!></div>',1),_d=$("&nbsp;<!>",1),bd=$("<button> <!></button>"),xd=$('<div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2"><span>Sort by:</span> <!></div>'),yd=$('<p class="error-empty">No errors found. Select cases and adjust filters above.</p>'),wd=$('<span class="error-badge"> </span>'),kd=$('<span class="error-badge error-badge-new">NEW</span>'),Cd=$('<div class="error-line"></div>'),Sd=$('<div><button class="error-item-toggle error-meta-row" type="button"><span class="error-expand-icon"><!></span> <span class="error-meta"> </span> <span class="error-badges"><!> <!></span></button> <!></div>'),$d=$('<span class="text-xs font-bold text-edf-bleu-fonce"> </span>'),Pd=$('<div class="flex items-center gap-3 mt-2"><span class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"> </span> <!></div>'),Ed=$('<p class="text-xs text-edf-orange-fonce text-center mt-1"> </p>'),Rd=$("<!> <!> <div><!> <!></div> <!> <!>",1);function Nd(t,r){Ae(r,!0);const a=6,n=["csauto.stderr","run_solver.log","listing"];let o=I(se([])),i=I(se([...n])),s=!1;Ne(()=>{var re;const K=(re=Bt())==null?void 0:re.error_files;K!=null&&K.length&&!s&&f(i,[...K],!0)});let l=I("all"),d=I(""),y=I(a),w=I(!1),A=I(""),m=I(se(er("errors")));Ne(()=>{tr("errors",e(m))});let M=I(se([])),F=I(se(new Set));function h(K){return K.toLowerCase().replace(/[0-9]+/g,"#").replace(/0x[0-9a-f]+/gi,"#").replace(/\s+/g," ").trim()}function c(K){const re=K.line_html.replace(/<[^>]*>/g,"").slice(0,120);return`${K.case_id}|${K.file}|${K.severity}|${h(re)}`}function x(K){const re=new Map;for(const ne of K){const ue=c(ne),de=re.get(ue);de?de.count++:re.set(ue,{...ne,count:1,fingerprint:ue,isNew:!e(F).has(ue)})}return Array.from(re.values())}async function E(){if(!(!e(o).length||!e(i).length)){f(w,!0);try{const K=await li({cases:e(o),files:e(i),context:e(y),sev:e(l)==="all"?"":e(l),q:e(d)});f(A,"");const re=x(K.items);f(M,K.items,!0);const ne=new Set(re.map(ue=>ue.fingerprint));f(F,ne,!0),f(g,re,!0)}catch(K){f(A,"Failed to load errors"),console.error("Failed to load errors:",K)}finally{f(w,!1)}}}let g=I(se([])),_=null;function S(){_&&clearTimeout(_),_=setTimeout(E,250)}function b(K){return K==="error"?"error-sev-error":K==="warn"?"error-sev-warn":"error-sev-info"}let L=U(()=>wn(r.allCases));const z=["csauto.stderr","run_solver.log","listing","csauto.stdout"];let D=U(()=>{var K;return(((K=Bt())==null?void 0:K.error_files)??z).map(re=>({value:re,label:re}))}),V=[{value:"all",label:"All"},{value:"error",label:"Error"},{value:"warn",label:"Warn"},{value:"info",label:"Info"}];function H(K){if(f(o,K,!0),K.length===0){f(g,[],!0),f(M,[],!0);return}E()}function O(K){if(s=!0,f(i,K,!0),K.length===0){f(g,[],!0),f(M,[],!0);return}E()}function j(K){f(l,K,!0),E()}function q(){E()}let Y=!1;Ne(()=>{r.allCases.length>0&&!Y&&(Y=!0,f(o,[...r.allCases],!0),E())}),Ne(()=>{e(m)?hr("errors",E,Hn()):vt("errors")});const ae=pr(()=>{Y&&E()});dr(()=>{vt("errors"),ae()});let N=I(se(new Set));function C(K){const re=new Set(e(N));re.has(K)?re.delete(K):re.add(K),f(N,re,!0)}let v=I("severity"),T=I("desc");const R={info:0,warn:1,error:2};let J=U(()=>{const K=[...e(g)];return K.sort((re,ne)=>{let ue=0;return e(v)==="severity"?ue=(R[re.severity]??9)-(R[ne.severity]??9):e(v)==="count"?ue=re.count-ne.count:ue=re[e(v)].localeCompare(ne[e(v)]),e(T)==="asc"?ue:-ue}),K});const oe={severity:"desc",count:"desc",case_id:"asc",file:"asc"};function ge(K){e(v)===K?f(T,e(T)==="asc"?"desc":"asc",!0):(f(v,K,!0),f(T,oe[K],!0))}function le(){if(!e(g).length)return;const K=["case_id","file","severity","count","is_new","line_text"],re=e(J).map(de=>[de.case_id,de.file,de.severity,de.count,de.isNew?"yes":"no",`"${de.line_html.replace(/<[^>]*>/g,"").replace(/"/g,'""')}"`].join(",")),ne=[K.join(","),...re].join(`
`),ue=_r("errors",e(o),"csv");Pa(ne,ue)}Ot(t,{eyebrow:"Diagnostics",title:"Recent Errors",wide:!0,actions:re=>{var ne=vd(),ue=B(ne);{let be=U(Hn);rr(ue,{name:"errors",get intervalMs(){return e(be)},onRefresh:E,get checked(){return e(m)},set checked(fe){f(m,fe,!0)}})}var de=P(ue,2);{var Z=be=>{$e(be,{variant:"primary",onclick:E,children:(fe,Pe)=>{var ve=fd(),ze=B(ve);Te(ze,{get icon(){return Zt}}),we(),u(fe,ve)},$$slots:{default:!0}})};X(de,be=>{e(m)||be(Z)})}u(re,ne)},children:(re,ne)=>{var ue=Rd(),de=B(ue);Yt(de,{children:(ye,Ee)=>{var G=md(),W=B(G);Me(W,{text:"Cases",children:(ke,je)=>{Gt(ke,{class:"w-[160px]",get options(){return e(L)},get selected(){return e(o)},onchange:H,placeholder:"Select cases..."})}});var te=P(W,2);Me(te,{text:"Files",children:(ke,je)=>{Gt(ke,{class:"w-[160px]",get options(){return e(D)},get selected(){return e(i)},onchange:O,placeholder:"Select files..."})}});var ce=P(te,2);Me(ce,{text:"Severity",children:(ke,je)=>{lt(ke,{class:"w-[90px]",get options(){return V},get value(){return e(l)},onchange:j})}});var Re=P(ce,2);Me(Re,{text:"Search",children:(ke,je)=>{var Xe=gd();Qe(Xe),ie("input",Xe,S),tt(Xe,()=>e(d),gt=>f(d,gt)),u(ke,Xe)}});var Ie=P(Re,2);Me(Ie,{text:"Context",children:(ke,je)=>{var Xe=hd();Qe(Xe),ie("change",Xe,q),tt(Xe,()=>e(y),gt=>f(y,gt)),u(ke,Xe)}});var xe=P(Ie,2),me=k(xe);{let ke=U(()=>e(g).length===0);$e(me,{variant:"secondary",size:"sm",onclick:le,get disabled(){return e(ke)},children:(je,Xe)=>{var gt=pd(),Ht=B(gt);Te(Ht,{get icon(){return gr}}),we(),u(je,gt)},$$slots:{default:!0}})}p(xe),u(ye,G)}});var Z=P(de,2);{var be=ye=>{var Ee=xd(),G=P(k(Ee),2);Je(G,16,()=>[{key:"severity",label:"Severity"},{key:"count",label:"Count"},{key:"case_id",label:"Case"},{key:"file",label:"File"}],W=>W.key,(W,te)=>{var ce=bd(),Re=k(ce,!0),Ie=P(Re);{var xe=me=>{var ke=_d(),je=P(B(ke));{let Xe=U(()=>e(T)==="asc"?Fs:Ls);Te(je,{get icon(){return e(Xe)},size:12})}u(me,ke)};X(Ie,me=>{e(v)===te.key&&me(xe)})}p(ce),Q(()=>{Ce(ce,1,`cursor-pointer bg-transparent border-none text-xs hover:underline ${e(v)===te.key?"text-edf-bleu-fonce font-bold":"text-muted"}`),ee(Re,te.label)}),ie("click",ce,()=>ge(te.key)),u(W,ce)}),p(Ee),u(ye,Ee)};X(Z,ye=>{e(J).length>0&&ye(be)})}var fe=P(Z,2),Pe=k(fe);{var ve=ye=>{var Ee=yd();u(ye,Ee)};X(Pe,ye=>{e(J).length===0&&ye(ve)})}var ze=P(Pe,2);Je(ze,17,()=>e(J),ye=>ye.fingerprint,(ye,Ee)=>{var G=Sd(),W=k(G),te=k(W),ce=k(te);{let et=U(()=>e(N).has(e(Ee).fingerprint)?gn:Ds);Te(ce,{get icon(){return e(et)},size:14})}p(te);var Re=P(te,2),Ie=k(Re);p(Re);var xe=P(Re,2),me=k(xe);{var ke=et=>{var ut=wd(),at=k(ut);p(ut),Q(()=>ee(at,`${e(Ee).count??""}x`)),u(et,ut)};X(me,et=>{e(Ee).count>1&&et(ke)})}var je=P(me,2);{var Xe=et=>{var ut=kd();u(et,ut)};X(je,et=>{e(Ee).isNew&&et(Xe)})}p(xe),p(W);var gt=P(W,2);{var Ht=et=>{var ut=Cd();Fr(ut,()=>e(Ee).line_html,!0),p(ut),u(et,ut)},Or=U(()=>e(N).has(e(Ee).fingerprint));X(gt,et=>{e(Or)&&et(Ht)})}p(G),Q(et=>{Ce(G,1,`error-item ${et??""}`),ee(Ie,`${e(Ee).case_id??""} / ${e(Ee).file??""} : ${e(Ee).severity??""}`)},[()=>b(e(Ee).severity)]),ie("click",W,()=>C(e(Ee).fingerprint)),u(ye,G)}),p(fe);var pe=P(fe,2);{var Oe=ye=>{var Ee=Pd(),G=k(Ee),W=k(G);p(G);var te=P(G,2);{var ce=Ie=>{var xe=$d(),me=k(xe);p(xe),Q(ke=>ee(me,`${ke??""} new`),[()=>e(g).filter(ke=>ke.isNew).length]),u(Ie,xe)},Re=U(()=>e(g).some(Ie=>Ie.isNew));X(te,Ie=>{e(Re)&&Ie(ce)})}p(Ee),Q(()=>ee(W,`${e(g).length??""} unique / ${e(M).length??""} total`)),u(ye,Ee)};X(pe,ye=>{e(J).length>0&&ye(Oe)})}var He=P(pe,2);{var Fe=ye=>{var Ee=Ed(),G=k(Ee,!0);p(Ee),Q(()=>ee(G,e(A))),u(ye,Ee)};X(He,ye=>{e(A)&&ye(Fe)})}Q(()=>Ce(fe,1,`error-list ${e(w)?"opacity-50 pointer-events-none":""}`)),u(re,ue)},$$slots:{actions:!0,default:!0}}),Le()}We(["input","change","click"]);var Md=$('<!> <!> <!> <main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12"><!> <!> <!> <!> <!> <!> <!></main> <footer class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"><span>Developed by</span> <a href="https://simvia.tech" target="_blank" rel="noopener noreferrer" class="flex items-center"><img alt="Simvia" class="h-10 w-auto"/></a></footer>',1);function Hd(t,r){Ae(r,!0);let a=I(se({totalCases:0,shownCases:0,totalRunning:0,shownRunning:0,totalConverged:0,shownConverged:0})),n=I(se([])),o=I(null);const i=R=>e(o)===null||e(o).includes(R);async function s(R){var ge;const J=`/favicon-${R}.svg`;try{const le=await fetch(J);if(!le.ok||!((ge=le.headers.get("content-type"))!=null&&ge.includes("svg")))return}catch{return}const oe=document.querySelector('link[rel="icon"]');oe&&(oe.href=J)}async function l(){try{const R=await ai();Sl(R.rows),$l(R.doe_columns),f(n,R.rows.map(J=>J.case_id),!0),f(a,Ol(Sa(),bn()),!0)}catch(R){console.error("Failed to load status:",R)}}Yn(()=>{l(),oi().then(R=>{el(R),f(o,R.panels,!0),s(R.solver)}).catch(()=>{})});var d=Md(),y=B(d);Ni(y,{});var w=P(y,2);Fi(w,{});var A=P(w,2);al(A,{get totalCases(){return e(a).totalCases},get shownCases(){return e(a).shownCases},get totalRunning(){return e(a).totalRunning},get shownRunning(){return e(a).shownRunning},get totalConverged(){return e(a).totalConverged},get shownConverged(){return e(a).shownConverged}});var m=P(A,2),M=k(m);{var F=R=>{pc(R,{onRefresh:l})},h=U(()=>i("status"));X(M,R=>{e(h)&&R(F)})}var c=P(M,2);{var x=R=>{Ic(R,{get allCases(){return e(n)}})},E=U(()=>i("residuals"));X(c,R=>{e(E)&&R(x)})}var g=P(c,2);{var _=R=>{lu(R,{get allCases(){return e(n)}})},S=U(()=>i("probes"));X(g,R=>{e(S)&&R(_)})}var b=P(g,2);{var L=R=>{bu(R,{get allCases(){return e(n)}})},z=U(()=>i("performance"));X(b,R=>{e(z)&&R(L)})}var D=P(b,2);{var V=R=>{dd(R,{get allCases(){return e(n)}})},H=U(()=>i("compare"));X(D,R=>{e(H)&&R(V)})}var O=P(D,2);{var j=R=>{Vu(R,{get allCases(){return e(n)}})},q=U(()=>i("tail"));X(O,R=>{e(q)&&R(j)})}var Y=P(O,2);{var ae=R=>{Nd(R,{get allCases(){return e(n)}})},N=U(()=>i("errors"));X(Y,R=>{e(N)&&R(ae)})}p(m);var C=P(m,2),v=P(k(C),2),T=k(v);p(v),p(C),Q(()=>Se(T,"src",ol)),u(t,d),Le()}export{Hd as component};
