import{r as q,E as Oe,U as wo,V as Co,X as So,Y as zo,Z as ve,$ as Io,a0 as pe,d as D,a1 as Po,p as Ro,a2 as ko,J as c,a3 as Qe,M as de,O as J,a4 as No,l as x,H as b,I as R,G as N,a5 as _o,Q as ue,a6 as eo,a7 as Te,a8 as he,i as Y,a9 as oo,aa as ee,ab as se,ac as Ao,ad as te,F as to,ae as Oo,af as To,ag as Ko,ah as $o,ai as ae,aj as y,ak as Q,al as Eo,am as Z,P as ie,an as ge,N as no,ao as Lo,ap as Ho,aq as Fo,ar as Ke,as as Bo,at as Mo,au as Ve,av as jo,aw as Do,ax as Go,o as ro,c as io,w as be,a as ce,e as Vo,ay as Ue}from"./index-OKOBJwNy.js";import{c as Uo,b as Wo,a as lo,p as $e,f as ye,B as qo,V as Yo,d as Xo,r as Zo,u as we,e as Jo,l as Ee,g as Le,h as Qo,i as ao,j as et,_ as ot}from"./Layout-ByiJvs9F.js";function We(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function tt(e){return o=>{o?e.value=o.$el:e.value=null}}function nt(e,o,t){const n=q(e.value);let r=null;return Oe(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function rt(e={},o){const t=wo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(h=>{if(h!==a.key)return;const f=n[h];if(typeof f=="function")f(a);else{const{stop:m=!1,prevent:g=!1}=f;m&&a.stopPropagation(),g&&a.preventDefault(),f.handler(a)}})},l=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(h=>{if(h!==a.key)return;const f=r[h];if(typeof f=="function")f(a);else{const{stop:m=!1,prevent:g=!1}=f;m&&a.stopPropagation(),g&&a.preventDefault(),f.handler(a)}})},s=()=>{(o===void 0||o.value)&&(pe("keydown",document,i),pe("keyup",document,l)),o!==void 0&&Oe(o,a=>{a?(pe("keydown",document,i),pe("keyup",document,l)):(ve("keydown",document,i),ve("keyup",document,l))})};return Co()?(So(s),zo(()=>{(o===void 0||o.value)&&(ve("keydown",document,i),ve("keyup",document,l))})):s(),Io(t)}const re="v-hidden",it=Wo("[v-hidden]",{display:"none!important"}),lt=D({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=q(null),n=q(null);function r(l){const{value:s}=t,{getCounter:a,getTail:h}=e;let f;if(a!==void 0?f=a():f=n.value,!s||!f)return;f.hasAttribute(re)&&f.removeAttribute(re);const{children:m}=s;if(l.showAllItemsBeforeCalculate)for(const T of m)T.hasAttribute(re)&&T.removeAttribute(re);const g=s.offsetWidth,$=[],z=o.tail?h==null?void 0:h():null;let O=z?z.offsetWidth:0,A=!1;const H=s.children.length-(o.tail?1:0);for(let T=0;T<H-1;++T){if(T<0)continue;const v=m[T];if(A){v.hasAttribute(re)||v.setAttribute(re,"");continue}else v.hasAttribute(re)&&v.removeAttribute(re);const p=v.offsetWidth;if(O+=p,$[T]=p,O>g){const{updateCounter:w}=e;for(let C=T;C>=0;--C){const B=H-1-C;w!==void 0?w(B):f.textContent=`${B}`;const F=f.offsetWidth;if(O-=$[C],O+F<=g||C===0){A=!0,T=C-1,z&&(T===-1?(z.style.maxWidth=`${g-F}px`,z.style.boxSizing="border-box"):z.style.maxWidth="");const{onUpdateCount:E}=e;E&&E(B);break}}}}const{onUpdateOverflow:W}=e;A?W!==void 0&&W(!0):(W!==void 0&&W(!1),f.setAttribute(re,""))}const i=Po();return it.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Uo,ssr:i}),Ro(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return ko(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[Qe(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),so=D({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),at=D({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function qe(e){return Array.isArray(e)?e:[e]}const ke={STOP:"STOP"};function co(e,o){const t=o(e);e.children!==void 0&&t!==ke.STOP&&e.children.forEach(n=>co(n,o))}function st(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function dt(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function ct(e){return e.children}function ut(e){return e.key}function ht(){return!1}function ft(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function vt(e){return e.disabled===!0}function pt(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function Ie(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function Pe(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function mt(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function gt(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function bt(e){return(e==null?void 0:e.type)==="group"}class yt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function xt(e,o,t,n){return Ce(o.concat(e),t,n,!1)}function wt(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Ct(e,o,t,n){const r=Ce(o,t,n,!1),i=Ce(e,t,n,!0),l=wt(e,t),s=[];return r.forEach(a=>{(i.has(a)||l.has(a))&&s.push(a)}),s.forEach(a=>r.delete(a)),r}function Re(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:a,allowNotLoaded:h}=e;if(!l)return n!==void 0?{checkedKeys:mt(t,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:gt(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=o;let m;r!==void 0?m=Ct(r,t,o,h):n!==void 0?m=xt(n,t,o,h):m=Ce(t,o,h,!1);const g=a==="parent",$=a==="child"||s,z=m,O=new Set,A=Math.max.apply(null,Array.from(f.keys()));for(let H=A;H>=0;H-=1){const W=H===0,T=f.get(H);for(const v of T){if(v.isLeaf)continue;const{key:p,shallowLoaded:w}=v;if($&&w&&v.children.forEach(E=>{!E.disabled&&!E.isLeaf&&E.shallowLoaded&&z.has(E.key)&&z.delete(E.key)}),v.disabled||!w)continue;let C=!0,B=!1,F=!0;for(const E of v.children){const M=E.key;if(!E.disabled){if(F&&(F=!1),z.has(M))B=!0;else if(O.has(M)){B=!0,C=!1;break}else if(C=!1,B)break}}C&&!F?(g&&v.children.forEach(E=>{!E.disabled&&z.has(E.key)&&z.delete(E.key)}),z.add(p)):B&&O.add(p),W&&$&&z.has(p)&&z.delete(p)}}return{checkedKeys:Array.from(z),indeterminateKeys:Array.from(O)}}function Ce(e,o,t,n){const{treeNodeMap:r,getChildren:i}=o,l=new Set,s=new Set(e);return e.forEach(a=>{const h=r.get(a);h!==void 0&&co(h,f=>{if(f.disabled)return ke.STOP;const{key:m}=f;if(!l.has(m)&&(l.add(m),s.add(m),pt(f.rawNode,i))){if(n)return ke.STOP;if(!t)throw new yt}})}),s}function St(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(o||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function zt(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function It(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function Ye(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?Pt:It,i={reverse:o==="prev"};let l=!1,s=null;function a(h){if(h!==null){if(h===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!h.disabled||n)&&!h.ignored&&!h.isGroup){s=h;return}if(h.isGroup){const f=He(h,i);f!==null?s=f:a(r(h,t))}else{const f=r(h,!1);if(f!==null)a(f);else{const m=Rt(h);m!=null&&m.isGroup?a(r(m,t)):t&&a(r(h,!0))}}}}return a(e),s}function Pt(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function Rt(e){return e.parent}function He(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,i=t?r-1:0,l=t?-1:r,s=t?-1:1;for(let a=i;a!==l;a+=s){const h=n[a];if(!h.disabled&&!h.ignored)if(h.isGroup){const f=He(h,o);if(f!==null)return f}else return h}}return null}const kt={getChild(){return this.ignored?null:He(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Ye(this,"next",e)},getPrev(e={}){return Ye(this,"prev",e)}};function Nt(e,o){const t=o?new Set(o):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),n}function _t(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function uo(e,o,t,n,r,i=null,l=0){const s=[];return e.forEach((a,h)=>{var f;const m=Object.create(n);if(m.rawNode=a,m.siblings=s,m.level=l,m.index=h,m.isFirstChild=h===0,m.isLastChild=h+1===e.length,m.parent=i,!m.ignored){const g=r(a);Array.isArray(g)&&(m.children=uo(g,o,t,n,r,m,l+1))}s.push(m),o.set(m.key,m),t.has(l)||t.set(l,[]),(f=t.get(l))===null||f===void 0||f.push(m)}),s}function xe(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:i=vt,getIgnored:l=ht,getIsGroup:s=bt,getKey:a=ut}=o,h=(t=o.getChildren)!==null&&t!==void 0?t:ct,f=o.ignoreEmptyChildren?v=>{const p=h(v);return Array.isArray(p)?p.length?p:null:p}:h,m=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return dt(this.rawNode,f)},get shallowLoaded(){return ft(this.rawNode,f)},get ignored(){return l(this.rawNode)},contains(v){return _t(this,v)}},kt),g=uo(e,n,r,m,f);function $(v){if(v==null)return null;const p=n.get(v);return p&&!p.isGroup&&!p.ignored?p:null}function z(v){if(v==null)return null;const p=n.get(v);return p&&!p.ignored?p:null}function O(v,p){const w=z(v);return w?w.getPrev(p):null}function A(v,p){const w=z(v);return w?w.getNext(p):null}function H(v){const p=z(v);return p?p.getParent():null}function W(v){const p=z(v);return p?p.getChild():null}const T={treeNodes:g,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:f,getFlattenedNodes(v){return Nt(g,v)},getNode:$,getPrev:O,getNext:A,getParent:H,getChild:W,getFirstAvailableNode(){return zt(g)},getPath(v,p={}){return St(v,p,T)},getCheckedKeys(v,p={}){const{cascade:w=!0,leafOnly:C=!1,checkStrategy:B="all",allowNotLoaded:F=!1}=p;return Re({checkedKeys:Ie(v),indeterminateKeys:Pe(v),cascade:w,leafOnly:C,checkStrategy:B,allowNotLoaded:F},T)},check(v,p,w={}){const{cascade:C=!0,leafOnly:B=!1,checkStrategy:F="all",allowNotLoaded:E=!1}=w;return Re({checkedKeys:Ie(p),indeterminateKeys:Pe(p),keysToCheck:v==null?[]:qe(v),cascade:C,leafOnly:B,checkStrategy:F,allowNotLoaded:E},T)},uncheck(v,p,w={}){const{cascade:C=!0,leafOnly:B=!1,checkStrategy:F="all",allowNotLoaded:E=!1}=w;return Re({checkedKeys:Ie(p),indeterminateKeys:Pe(p),keysToUncheck:v==null?[]:qe(v),cascade:C,leafOnly:B,checkStrategy:F,allowNotLoaded:E},T)},getNonLeafKeys(v={}){return st(g,v)}};return T}const At=Object.assign(Object.assign({},$e),J.props),Ot=D({name:"Tooltip",props:At,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=de(e),t=J("Tooltip","-tooltip",void 0,No,e,o),n=q(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:x(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return c(lo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ho=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Tt=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[R("color-transition",{transition:"color .3s var(--n-bezier)"}),R("depth",{color:"var(--n-color)"},[N("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),N("svg",{height:"1em",width:"1em"})]),Kt=Object.assign(Object.assign({},J.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),$t=D({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Kt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=J("Icon","-icon",Tt,_o,e,o),r=x(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:s},self:a}=n.value;if(l!==void 0){const{color:h,[`opacity${l}Depth`]:f}=a;return{"--n-bezier":s,"--n-color":h,"--n-opacity":f}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?ue("icon",x(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:x(()=>{const{size:l,color:s}=e;return{fontSize:ye(l),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:l}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&eo("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),c("i",Te(this.$attrs,{role:"img",class:[`${n}-icon`,l,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?c(r):this.$slots)}}),Fe=he("n-dropdown-menu"),Se=he("n-dropdown"),Xe=he("n-dropdown-option");function Ne(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Et(e){return e.type==="group"}function fo(e){return e.type==="divider"}function Lt(e){return e.type==="render"}const vo=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=Y(Se),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:a,renderLabelRef:h,renderIconRef:f,labelFieldRef:m,childrenFieldRef:g,renderOptionRef:$,nodePropsRef:z,menuPropsRef:O}=o,A=Y(Xe,null),H=Y(Fe),W=Y(oo),T=x(()=>e.tmNode.rawNode),v=x(()=>{const{value:_}=g;return Ne(e.tmNode.rawNode,_)}),p=x(()=>{const{disabled:_}=e.tmNode;return _}),w=x(()=>{if(!v.value)return!1;const{key:_,disabled:U}=e.tmNode;if(U)return!1;const{value:oe}=t,{value:ne}=n,{value:S}=r,{value:I}=i;return oe!==null?I.includes(_):ne!==null?I.includes(_)&&I[I.length-1]!==_:S!==null?I.includes(_):!1}),C=x(()=>n.value===null&&!s.value),B=nt(w,300,C),F=x(()=>!!(A!=null&&A.enteringSubmenuRef.value)),E=q(!1);ee(Xe,{enteringSubmenuRef:E});function M(){E.value=!0}function k(){E.value=!1}function V(){const{parentKey:_,tmNode:U}=e;U.disabled||a.value&&(r.value=_,n.value=null,t.value=U.key)}function K(){const{tmNode:_}=e;_.disabled||a.value&&t.value!==_.key&&V()}function L(_){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:U}=_;U&&!We({target:U},"dropdownOption")&&!We({target:U},"scrollbarRail")&&(t.value=null)}function X(){const{value:_}=v,{tmNode:U}=e;a.value&&!_&&!U.disabled&&(o.doSelect(U.key,U.rawNode),o.doUpdateShow(!1))}return{labelField:m,renderLabel:h,renderIcon:f,siblingHasIcon:H.showIconRef,siblingHasSubmenu:H.hasSubmenuRef,menuProps:O,popoverBody:W,animated:s,mergedShowSubmenu:x(()=>B.value&&!F.value),rawNode:T,hasSubmenu:v,pending:se(()=>{const{value:_}=i,{key:U}=e.tmNode;return _.includes(U)}),childActive:se(()=>{const{value:_}=l,{key:U}=e.tmNode,oe=_.findIndex(ne=>U===ne);return oe===-1?!1:oe<_.length-1}),active:se(()=>{const{value:_}=l,{key:U}=e.tmNode,oe=_.findIndex(ne=>U===ne);return oe===-1?!1:oe===_.length-1}),mergedDisabled:p,renderOption:$,nodeProps:z,handleClick:X,handleMouseMove:K,handleMouseEnter:V,handleMouseLeave:L,handleSubmenuBeforeEnter:M,handleSubmenuAfterEnter:k}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:a,renderIcon:h,renderOption:f,nodeProps:m,props:g,scrollable:$}=this;let z=null;if(r){const W=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);z=c(po,Object.assign({},W,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const O={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},A=m==null?void 0:m(n),H=c("div",Object.assign({class:[`${i}-dropdown-option`,A==null?void 0:A.class],"data-dropdown-option":!0},A),c("div",Te(O,g),[c("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[h?h(n):te(n.icon)]),c("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(n):te((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),c("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c($t,null,{default:()=>c(so,null)}):null)]),this.hasSubmenu?c(qo,null,{default:()=>[c(Yo,null,{default:()=>c("div",{class:`${i}-dropdown-offset-container`},c(Xo,{show:this.mergedShowSubmenu,placement:this.placement,to:$&&this.popoverBody||void 0,teleportDisabled:!$},{default:()=>c("div",{class:`${i}-dropdown-menu-wrapper`},t?c(Ao,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>z}):z)}))})]}):null);return f?f({node:H,option:n}):H}}),Ht=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=Y(Fe),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=Y(Se);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,a=c("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(s)),c("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},te(s.icon)),c("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):te((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),c("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:s}):a}}),Ft=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return c(to,null,c(Ht,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:fo(i)?c(ho,{clsPrefix:t,key:r.key}):r.isGroup?(eo("dropdown","`group` node is not allowed to be put in `group` node."),null):c(vo,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),Bt=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return c("div",o,[e==null?void 0:e()])}}),po=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=Y(Se);ee(Fe,{showIconRef:x(()=>{const r=o.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:x(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>Ne(a,r));const{rawNode:s}=i;return Ne(s,r)})})});const n=q(null);return ee(Oo,null),ee(To,null),ee(oo,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Lt(i)?c(Bt,{tmNode:r,key:r.key}):fo(i)?c(ho,{clsPrefix:o,key:r.key}):Et(i)?c(Ft,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):c(vo,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return c("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(Ko,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Zo({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Mt=b("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[$o(),b("dropdown-option",`
 position: relative;
 `,[N("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[N("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[N("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[R("pending",`
 color: var(--n-option-text-color-hover);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),N("&::before","background-color: var(--n-option-color-hover);")]),R("active",`
 color: var(--n-option-text-color-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),N("&::before","background-color: var(--n-option-color-active);")]),R("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),R("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),R("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[y("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[R("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),y("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[R("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),y("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),y("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[R("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),b("dropdown-menu","pointer-events: all;")]),b("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),N(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),R("scrollable",[y("content",`
 padding: var(--n-padding);
 `)])]),jt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Dt=Object.keys($e),Gt=Object.assign(Object.assign(Object.assign({},$e),jt),J.props),Vt=D({name:"Dropdown",inheritAttrs:!1,props:Gt,setup(e){const o=q(!1),t=we(Q(e,"show"),o),n=x(()=>{const{keyField:k,childrenField:V}=e;return xe(e.options,{getKey(K){return K[k]},getDisabled(K){return K.disabled===!0},getIgnored(K){return K.type==="divider"||K.type==="render"},getChildren(K){return K[V]}})}),r=x(()=>n.value.treeNodes),i=q(null),l=q(null),s=q(null),a=x(()=>{var k,V,K;return(K=(V=(k=i.value)!==null&&k!==void 0?k:l.value)!==null&&V!==void 0?V:s.value)!==null&&K!==void 0?K:null}),h=x(()=>n.value.getPath(a.value).keyPath),f=x(()=>n.value.getPath(e.value).keyPath),m=se(()=>e.keyboard&&t.value);rt({keydown:{ArrowUp:{prevent:!0,handler:p},ArrowRight:{prevent:!0,handler:v},ArrowDown:{prevent:!0,handler:w},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:C},Escape:W}},m);const{mergedClsPrefixRef:g,inlineThemeDisabled:$}=de(e),z=J("Dropdown","-dropdown",Mt,Eo,e,g);ee(Se,{labelFieldRef:Q(e,"labelField"),childrenFieldRef:Q(e,"childrenField"),renderLabelRef:Q(e,"renderLabel"),renderIconRef:Q(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:h,activeKeyPathRef:f,animatedRef:Q(e,"animated"),mergedShowRef:t,nodePropsRef:Q(e,"nodeProps"),renderOptionRef:Q(e,"renderOption"),menuPropsRef:Q(e,"menuProps"),doSelect:O,doUpdateShow:A}),Oe(t,k=>{!e.animated&&!k&&H()});function O(k,V){const{onSelect:K}=e;K&&Z(K,k,V)}function A(k){const{"onUpdate:show":V,onUpdateShow:K}=e;V&&Z(V,k),K&&Z(K,k),o.value=k}function H(){i.value=null,l.value=null,s.value=null}function W(){A(!1)}function T(){F("left")}function v(){F("right")}function p(){F("up")}function w(){F("down")}function C(){const k=B();k!=null&&k.isLeaf&&t.value&&(O(k.key,k.rawNode),A(!1))}function B(){var k;const{value:V}=n,{value:K}=a;return!V||K===null?null:(k=V.getNode(K))!==null&&k!==void 0?k:null}function F(k){const{value:V}=a,{value:{getFirstAvailableNode:K}}=n;let L=null;if(V===null){const X=K();X!==null&&(L=X.key)}else{const X=B();if(X){let _;switch(k){case"down":_=X.getNext();break;case"up":_=X.getPrev();break;case"right":_=X.getChild();break;case"left":_=X.getParent();break}_&&(L=_.key)}}L!==null&&(i.value=null,l.value=L)}const E=x(()=>{const{size:k,inverted:V}=e,{common:{cubicBezierEaseInOut:K},self:L}=z.value,{padding:X,dividerColor:_,borderRadius:U,optionOpacityDisabled:oe,[ie("optionIconSuffixWidth",k)]:ne,[ie("optionSuffixWidth",k)]:S,[ie("optionIconPrefixWidth",k)]:I,[ie("optionPrefixWidth",k)]:d,[ie("fontSize",k)]:P,[ie("optionHeight",k)]:j,[ie("optionIconSize",k)]:ze}=L,G={"--n-bezier":K,"--n-font-size":P,"--n-padding":X,"--n-border-radius":U,"--n-option-height":j,"--n-option-prefix-width":d,"--n-option-icon-prefix-width":I,"--n-option-suffix-width":S,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":ze,"--n-divider-color":_,"--n-option-opacity-disabled":oe};return V?(G["--n-color"]=L.colorInverted,G["--n-option-color-hover"]=L.optionColorHoverInverted,G["--n-option-color-active"]=L.optionColorActiveInverted,G["--n-option-text-color"]=L.optionTextColorInverted,G["--n-option-text-color-hover"]=L.optionTextColorHoverInverted,G["--n-option-text-color-active"]=L.optionTextColorActiveInverted,G["--n-option-text-color-child-active"]=L.optionTextColorChildActiveInverted,G["--n-prefix-color"]=L.prefixColorInverted,G["--n-suffix-color"]=L.suffixColorInverted,G["--n-group-header-text-color"]=L.groupHeaderTextColorInverted):(G["--n-color"]=L.color,G["--n-option-color-hover"]=L.optionColorHover,G["--n-option-color-active"]=L.optionColorActive,G["--n-option-text-color"]=L.optionTextColor,G["--n-option-text-color-hover"]=L.optionTextColorHover,G["--n-option-text-color-active"]=L.optionTextColorActive,G["--n-option-text-color-child-active"]=L.optionTextColorChildActive,G["--n-prefix-color"]=L.prefixColor,G["--n-suffix-color"]=L.suffixColor,G["--n-group-header-text-color"]=L.groupHeaderTextColor),G}),M=$?ue("dropdown",x(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:g,mergedTheme:z,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&H()},doUpdateShow:A,cssVars:$?void 0:E,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const e=(n,r,i,l,s)=>{var a;const{mergedClsPrefix:h,menuProps:f}=this;(a=this.onRender)===null||a===void 0||a.call(this);const m=(f==null?void 0:f(void 0,this.tmNodes.map($=>$.rawNode)))||{},g={ref:tt(r),class:[n,`${h}-dropdown`,this.themeClass],clsPrefix:h,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return c(po,Te(this.$attrs,g,m))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(lo,Object.assign({},ge(this.$props,Dt),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Ut=Jo(!0),Wt=b("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),R("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),qt={position:Le,inverted:Boolean,bordered:{type:Boolean,default:!1}},Yt=D({name:"LayoutHeader",props:Object.assign(Object.assign({},J.props),qt),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=J("Layout","-layout-header",Wt,Ee,e,o),r=x(()=>{const{common:{cubicBezierEaseInOut:l},self:s}=n.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=s.headerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.headerBorderColorInverted):(a["--n-color"]=s.headerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.headerBorderColor),a}),i=t?ue("layout-header",x(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Xt=b("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),R("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),Zt=Object.assign(Object.assign({},J.props),{inverted:Boolean,position:Le,bordered:Boolean}),Jt=D({name:"LayoutFooter",props:Zt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=J("Layout","-layout-footer",Xt,Ee,e,o),r=x(()=>{const{common:{cubicBezierEaseInOut:l},self:s}=n.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=s.footerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.footerBorderColorInverted):(a["--n-color"]=s.footerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.footerBorderColor),a}),i=t?ue("layout-footer",x(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${o}-layout-footer`,this.themeClass,this.position&&`${o}-layout-footer--${this.position}-positioned`,this.bordered&&`${o}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Qt=b("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[R("bordered",[y("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),y("left-placement",[R("bordered",[y("border",`
 right: 0;
 `)])]),R("right-placement",`
 justify-content: flex-start;
 `,[R("bordered",[y("border",`
 left: 0;
 `)]),R("collapsed",[b("layout-toggle-button",[b("base-icon",`
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",[N("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),b("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[b("base-icon",`
 transform: rotate(0);
 `)]),b("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[N("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),R("collapsed",[b("layout-toggle-bar",[N("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),b("layout-toggle-button",[b("base-icon",`
 transform: rotate(0);
 `)])]),b("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[b("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[y("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),y("bottom",`
 position: absolute;
 top: 34px;
 `),N("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),N("&:hover",[y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),y("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),b("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),R("show-content",[b("layout-sider-scroll-container",{opacity:1})]),R("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),en=D({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(no,{clsPrefix:e},{default:()=>c(so,null)}))}}),on=D({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),tn={position:Le,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},nn=D({name:"LayoutSider",props:Object.assign(Object.assign({},J.props),tn),setup(e){const o=Y(Qo),t=q(null),n=q(null),r=x(()=>ye(a.value?e.collapsedWidth:e.width)),i=x(()=>e.collapseMode!=="transform"?{}:{minWidth:ye(e.width)}),l=x(()=>o?o.siderPlacement:"left"),s=q(e.defaultCollapsed),a=we(Q(e,"collapsed"),s);function h(p,w){if(e.nativeScrollbar){const{value:C}=t;C&&(w===void 0?C.scrollTo(p):C.scrollTo(p,w))}else{const{value:C}=n;C&&C.scrollTo(p,w)}}function f(){const{"onUpdate:collapsed":p,onUpdateCollapsed:w,onExpand:C,onCollapse:B}=e,{value:F}=a;w&&Z(w,!F),p&&Z(p,!F),s.value=!F,F?C&&Z(C):B&&Z(B)}let m=0,g=0;const $=p=>{var w;const C=p.target;m=C.scrollLeft,g=C.scrollTop,(w=e.onScroll)===null||w===void 0||w.call(e,p)};Lo(()=>{if(e.nativeScrollbar){const p=t.value;p&&(p.scrollTop=g,p.scrollLeft=m)}}),ee(ao,{collapsedRef:a,collapseModeRef:Q(e,"collapseMode")});const{mergedClsPrefixRef:z,inlineThemeDisabled:O}=de(e),A=J("Layout","-layout-sider",Qt,Ee,e,z);function H(p){var w,C;p.propertyName==="max-width"&&(a.value?(w=e.onAfterLeave)===null||w===void 0||w.call(e):(C=e.onAfterEnter)===null||C===void 0||C.call(e))}const W={scrollTo:h},T=x(()=>{const{common:{cubicBezierEaseInOut:p},self:w}=A.value,{siderToggleButtonColor:C,siderToggleButtonBorder:B,siderToggleBarColor:F,siderToggleBarColorHover:E}=w,M={"--n-bezier":p,"--n-toggle-button-color":C,"--n-toggle-button-border":B,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":E};return e.inverted?(M["--n-color"]=w.siderColorInverted,M["--n-text-color"]=w.textColorInverted,M["--n-border-color"]=w.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColorInverted,M.__invertScrollbar=w.__invertScrollbar):(M["--n-color"]=w.siderColor,M["--n-text-color"]=w.textColor,M["--n-border-color"]=w.siderBorderColor,M["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColor),M}),v=O?ue("layout-sider",x(()=>e.inverted?"a":"b"),T,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:n,mergedClsPrefix:z,mergedTheme:A,styleMaxWidth:r,mergedCollapsed:a,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:$,handleTransitionend:H,handleTriggerClick:f,inlineThemeDisabled:O,cssVars:T,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender},W)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ye(this.width)}]},this.nativeScrollbar?c("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(Ho,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?c(on,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(en,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}}),fe=he("n-menu"),Be=he("n-submenu"),Me=he("n-menu-item-group"),me=8;function je(e){const o=Y(fe),{props:t,mergedCollapsedRef:n}=o,r=Y(Be,null),i=Y(Me,null),l=x(()=>t.mode==="horizontal"),s=x(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=x(()=>{var g;return Math.max((g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize,t.iconSize)}),h=x(()=>{var g;return!l.value&&e.root&&n.value&&(g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize}),f=x(()=>{if(l.value)return;const{collapsedWidth:g,indent:$,rootIndent:z}=t,{root:O,isGroup:A}=e,H=z===void 0?$:z;return O?n.value?g/2-a.value/2:H:i&&typeof i.paddingLeftRef.value=="number"?$/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(A?$/2:$)+r.paddingLeftRef.value:0}),m=x(()=>{const{collapsedWidth:g,indent:$,rootIndent:z}=t,{value:O}=a,{root:A}=e;return l.value||!A||!n.value?me:(z===void 0?$:z)+O+me-(g+O)/2});return{dropdownPlacement:s,activeIconSize:h,maxIconSize:a,paddingLeft:f,iconMarginRight:m,NMenu:o,NSubmenu:r}}const De={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},mo=Object.assign(Object.assign({},De),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),rn=D({name:"MenuOptionGroup",props:mo,setup(e){ee(Be,null);const o=je(e);ee(Me,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=Y(fe);return function(){const{value:r}=t,i=o.paddingLeft.value,{nodeProps:l}=n,s=l==null?void 0:l(e.tmNode.rawNode);return c("div",{class:`${r}-menu-item-group`,role:"group"},c("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),te(e.title),e.extra?c(to,null," ",te(e.extra)):null),c("div",null,e.tmNodes.map(a=>Ge(a,n))))}}}),go=D({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=Y(fe);return{menuProps:o,style:x(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:x(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=t?t(o.rawNode):te(this.icon);return c("div",{onClick:s=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(o.rawNode):te(this.title),this.extra||r?c("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):te(this.extra)):null),this.showArrow?c(no,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):c(at,null)}):null)}}),bo=Object.assign(Object.assign({},De),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),_e=D({name:"Submenu",props:bo,setup(e){const o=je(e),{NMenu:t,NSubmenu:n}=o,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,s=x(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:g}),a=q(!1);ee(Be,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),ee(Me,null);function h(){const{onClick:g}=e;g&&g()}function f(){s.value||(i.value||t.toggleExpand(e.internalKey),h())}function m(g){a.value=g}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:a,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:se(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:t.activePathRef.value.includes(e.internalKey)}),collapsed:x(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:m,handleClick:f}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:a,mergedDisabled:h,maxIconSize:f,activeIconSize:m,title:g,childActive:$,icon:z,handleClick:O,menuProps:{nodeProps:A},dropdownShow:H,iconMarginRight:W,tmNode:T,mergedClsPrefix:v,isEllipsisPlaceholder:p,extra:w}=this,C=A==null?void 0:A(T.rawNode);return c("div",Object.assign({},C,{class:[`${v}-menu-item`,C==null?void 0:C.class],role:"menuitem"}),c(go,{tmNode:T,paddingLeft:s,collapsed:a,disabled:h,iconMarginRight:W,maxIconSize:f,activeIconSize:m,title:g,extra:w,showArrow:!l,childActive:$,clsPrefix:v,icon:z,hover:H,onClick:O,isEllipsisPlaceholder:p}))},i=()=>c(Fo,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:c("div",{class:`${o}-submenu-children`,role:"menu"},l.map(a=>Ge(a,this.menuProps)))}});return this.root?c(Vt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>c("div",{class:`${o}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):c("div",{class:`${o}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),yo=Object.assign(Object.assign({},De),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ln=D({name:"MenuOption",props:yo,setup(e){const o=je(e),{NSubmenu:t,NMenu:n}=o,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,s=t?t.mergedDisabledRef:{value:!1},a=x(()=>s.value||e.disabled);function h(m){const{onClick:g}=e;g&&g(m)}function f(m){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),h(m))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:se(()=>e.root&&l.value&&r.mode!=="horizontal"&&!a.value),selected:se(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return c("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),c(Ot,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):te(this.title),trigger:()=>c(go,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),an=D({name:"MenuDivider",setup(){const e=Y(fe),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${o.value}-menu-divider`})}}),sn=Ke(mo),dn=Ke(yo),cn=Ke(bo);function Ae(e){return e.type==="divider"||e.type==="render"}function un(e){return e.type==="divider"}function Ge(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(Ae(t))return un(t)?c(an,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:i,level:l,isGroup:s}=e,a=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:s});return e.children?e.isGroup?c(rn,ge(a,sn,{tmNode:e,tmNodes:e.children,key:i})):c(_e,ge(a,cn,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):c(ln,ge(a,dn,{key:i,tmNode:e}))}const Ze=[N("&::before","background-color: var(--n-item-color-hover);"),y("arrow",`
 color: var(--n-arrow-color-hover);
 `),y("icon",`
 color: var(--n-item-icon-color-hover);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[N("a",`
 color: var(--n-item-text-color-hover);
 `),y("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Je=[y("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[N("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],hn=N([b("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[b("submenu","margin: 0;"),b("menu-item","margin: 0;"),b("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[N("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),b("menu-item-content",[R("selected",[y("icon","color: var(--n-item-icon-color-active-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[N("a","color: var(--n-item-text-color-active-horizontal);"),y("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[N("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),y("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[N("&:focus-within",Je)]),R("selected",[le(null,[y("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[N("a","color: var(--n-item-text-color-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[le(null,[y("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[N("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),le("border-bottom: 2px solid var(--n-border-color-horizontal);",Je)]),b("menu-item-content-header",[N("a","color: var(--n-item-text-color-horizontal);")])])]),ae("responsive",[b("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),R("collapsed",[b("menu-item-content",[R("selected",[N("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),b("menu-item-content-header","opacity: 0;"),y("arrow","opacity: 0;"),y("icon","color: var(--n-item-icon-color-collapsed);")])]),b("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),b("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[N("> *","z-index: 1;"),N("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[y("arrow","transform: rotate(0);")]),R("selected",[N("&::before","background-color: var(--n-item-color-active);"),y("arrow","color: var(--n-arrow-color-active);"),y("icon","color: var(--n-item-icon-color-active);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[N("a","color: var(--n-item-text-color-active);"),y("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[N("a",`
 color: var(--n-item-text-color-child-active);
 `),y("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),y("arrow",`
 color: var(--n-arrow-color-child-active);
 `),y("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[N("&:focus-within",Ze)]),R("selected",[le(null,[y("arrow","color: var(--n-arrow-color-active-hover);"),y("icon","color: var(--n-item-icon-color-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[N("a","color: var(--n-item-text-color-active-hover);"),y("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[le(null,[y("arrow","color: var(--n-arrow-color-child-active-hover);"),y("icon","color: var(--n-item-icon-color-child-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[N("a","color: var(--n-item-text-color-child-active-hover);"),y("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[le(null,[N("&::before","background-color: var(--n-item-color-active-hover);")])]),le(null,Ze)]),y("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),y("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),b("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[N("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[N("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),y("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),b("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[b("menu-item-content",`
 height: var(--n-item-height);
 `),b("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Bo({duration:".2s"})])]),b("menu-item-group",[b("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),b("menu-tooltip",[N("a",`
 color: inherit;
 text-decoration: none;
 `)]),b("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function le(e,o){return[R("hover",e,o),N("&:hover",e,o)]}const fn=Object.assign(Object.assign({},J.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),vn=D({name:"Menu",props:fn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=J("Menu","-menu",hn,Mo,e,o),r=Y(ao,null),i=x(()=>{var S;const{collapsed:I}=e;if(I!==void 0)return I;if(r){const{collapseModeRef:d,collapsedRef:P}=r;if(d.value==="width")return(S=P.value)!==null&&S!==void 0?S:!1}return!1}),l=x(()=>{const{keyField:S,childrenField:I,disabledField:d}=e;return xe(e.items||e.options,{getIgnored(P){return Ae(P)},getChildren(P){return P[I]},getDisabled(P){return P[d]},getKey(P){var j;return(j=P[S])!==null&&j!==void 0?j:P.name}})}),s=x(()=>new Set(l.value.treeNodes.map(S=>S.key))),{watchProps:a}=e,h=q(null);a!=null&&a.includes("defaultValue")?Ve(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const f=Q(e,"value"),m=we(f,h),g=q([]),$=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?Ve($):$();const z=et(e,["expandedNames","expandedKeys"]),O=we(z,g),A=x(()=>l.value.treeNodes),H=x(()=>l.value.getPath(m.value).keyPath);ee(fe,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:O,activePathRef:H,mergedClsPrefixRef:o,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:Q(e,"inverted"),doSelect:W,toggleExpand:v});function W(S,I){const{"onUpdate:value":d,onUpdateValue:P,onSelect:j}=e;P&&Z(P,S,I),d&&Z(d,S,I),j&&Z(j,S,I),h.value=S}function T(S){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:d,onExpandedNamesChange:P,onOpenNamesChange:j}=e;I&&Z(I,S),d&&Z(d,S),P&&Z(P,S),j&&Z(j,S),g.value=S}function v(S){const I=Array.from(O.value),d=I.findIndex(P=>P===S);if(~d)I.splice(d,1);else{if(e.accordion&&s.value.has(S)){const P=I.findIndex(j=>s.value.has(j));P>-1&&I.splice(P,1)}I.push(S)}T(I)}const p=S=>{const I=l.value.getPath(S??m.value,{includeSelf:!1}).keyPath;if(!I.length)return;const d=Array.from(O.value),P=new Set([...d,...I]);e.accordion&&s.value.forEach(j=>{P.has(j)&&!I.includes(j)&&P.delete(j)}),T(Array.from(P))},w=x(()=>{const{inverted:S}=e,{common:{cubicBezierEaseInOut:I},self:d}=n.value,{borderRadius:P,borderColorHorizontal:j,fontSize:ze,itemHeight:G,dividerColor:xo}=d,u={"--n-divider-color":xo,"--n-bezier":I,"--n-font-size":ze,"--n-border-color-horizontal":j,"--n-border-radius":P,"--n-item-height":G};return S?(u["--n-group-text-color"]=d.groupTextColorInverted,u["--n-color"]=d.colorInverted,u["--n-item-text-color"]=d.itemTextColorInverted,u["--n-item-text-color-hover"]=d.itemTextColorHoverInverted,u["--n-item-text-color-active"]=d.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=d.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=d.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=d.itemIconColorInverted,u["--n-item-icon-color-hover"]=d.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=d.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=d.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=d.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=d.arrowColorInverted,u["--n-arrow-color-hover"]=d.arrowColorHoverInverted,u["--n-arrow-color-active"]=d.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=d.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=d.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=d.itemColorHoverInverted,u["--n-item-color-active"]=d.itemColorActiveInverted,u["--n-item-color-active-hover"]=d.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=d.groupTextColor,u["--n-color"]=d.color,u["--n-item-text-color"]=d.itemTextColor,u["--n-item-text-color-hover"]=d.itemTextColorHover,u["--n-item-text-color-active"]=d.itemTextColorActive,u["--n-item-text-color-child-active"]=d.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=d.itemTextColorActiveHover,u["--n-item-icon-color"]=d.itemIconColor,u["--n-item-icon-color-hover"]=d.itemIconColorHover,u["--n-item-icon-color-active"]=d.itemIconColorActive,u["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=d.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=d.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=d.arrowColor,u["--n-arrow-color-hover"]=d.arrowColorHover,u["--n-arrow-color-active"]=d.arrowColorActive,u["--n-arrow-color-active-hover"]=d.arrowColorActiveHover,u["--n-arrow-color-child-active"]=d.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHover,u["--n-item-color-hover"]=d.itemColorHover,u["--n-item-color-active"]=d.itemColorActive,u["--n-item-color-active-hover"]=d.itemColorActiveHover,u["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsed),u}),C=t?ue("menu",x(()=>e.inverted?"a":"b"),w,e):void 0,B=jo(),F=q(null),E=q(null);let M=!0;const k=()=>{var S;M?M=!1:(S=F.value)===null||S===void 0||S.sync({showAllItemsBeforeCalculate:!0})};function V(){return document.getElementById(B)}const K=q(-1);function L(S){K.value=e.options.length-S}function X(S){S||(K.value=-1)}const _=x(()=>{const S=K.value;return{children:S===-1?[]:e.options.slice(S)}}),U=x(()=>{const{childrenField:S,disabledField:I,keyField:d}=e;return xe([_.value],{getIgnored(P){return Ae(P)},getChildren(P){return P[S]},getDisabled(P){return P[I]},getKey(P){var j;return(j=P[d])!==null&&j!==void 0?j:P.name}})}),oe=x(()=>xe([{}]).treeNodes[0]);function ne(){var S;if(K.value===-1)return c(_e,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:oe.value,domId:B,isEllipsisPlaceholder:!0});const I=U.value.treeNodes[0],d=H.value,P=!!(!((S=I.children)===null||S===void 0)&&S.some(j=>d.includes(j.key)));return c(_e,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:P,tmNode:I,domId:B,rawNodes:I.rawNode.children||[],tmNodes:I.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:z,uncontrolledExpanededKeys:g,mergedExpandedKeys:O,uncontrolledValue:h,mergedValue:m,activePath:H,tmNodes:A,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:w,themeClass:C==null?void 0:C.themeClass,overflowRef:F,counterRef:E,updateCounter:()=>{},onResize:k,onUpdateOverflow:X,onUpdateCount:L,renderCounter:ne,getCounter:V,onRender:C==null?void 0:C.onRender,showOption:p,deriveResponsiveState:k}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(a=>Ge(a,this.$props)),l=o==="horizontal"&&this.responsive,s=()=>c("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?c(lt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?c(Do,{onResize:this.onResize},{default:s}):s()}}),pn=D({__name:"the-nav",setup(e){const o=Go();function t(i){return c("span",{class:i})}const n=[{label:()=>c(Ue,{to:"/"},{default:()=>"Home"}),key:"/",icon:()=>t("ico-mdi-home")},{label:()=>c(Ue,{to:"/bingo"},{default:()=>"Bingo"}),key:"/bingo",icon:()=>t("ico-ic:baseline-grid-on")}],r=x(()=>o.path);return(i,l)=>{const s=vn,a=nn;return ro(),io(a,{class:"bg-color",bordered:"","collapse-mode":"width","collapsed-width":64,collapsed:""},{default:be(()=>[ce(s,{options:n,value:Vo(r),collapsed:"","collapsed-width":64,"collapse-mode":"width"},null,8,["value"])]),_:1})}}}),mn=(e,o)=>{const t=e.__vccOpts||e;for(const[n,r]of o)t[n]=r;return t},gn={};function bn(e,o){const t=pn,n=Yt,r=Ut,i=Jt,l=ot;return ro(),io(l,{"has-sider":"",class:"h-100dvh"},{default:be(()=>[ce(t),ce(l,{class:"bg-image"},{default:be(()=>[ce(n),ce(r,{"native-scrollbar":!1,class:"h-full","content-class":"h-full bg-image"},{default:be(()=>[Qe(e.$slots,"default")]),_:3}),ce(i)]),_:3})]),_:3})}const wn=mn(gn,[["render",bn]]);export{wn as _};
