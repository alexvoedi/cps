import{r as W,E as Le,aZ as Io,b9 as Po,ba as ko,P as Ro,aO as me,bb as No,aw as ge,d as D,G as _o,p as Ao,a8 as To,M as c,a_ as oo,T as de,U as ee,bc as Oo,l as C,Q as b,a2 as N,S as R,bd as Ko,Z as ve,aQ as to,N as He,ak as ce,i as Y,be as no,aa as J,J as se,a1 as $o,a0 as te,F as ro,bf as Eo,bg as Lo,bh as Ho,a4 as Fo,a3 as ae,R as y,a6 as Q,bi as Bo,al as X,Y as ie,az as xe,$ as io,bj as Mo,ad as jo,bk as Do,ay as Fe,bl as Go,bm as Uo,an as qe,au as Vo,V as Wo,s as lo,v as ao,bn as qo,u as ue,o as _e,c as Ae,w as he,a as fe,bo as be,b as Te,bp as Yo}from"./index-BEUmazRN.js";import{c as Zo,b as Xo,a as so,p as Be,j as we,B as Qo,V as Jo,h as et,r as ot,u as Se,l as tt,m as co,n as uo,o as nt,q as ho,f as rt,_ as it}from"./Layout-CMAAJ7Az.js";function Ye(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function lt(e){return o=>{o?e.value=o.$el:e.value=null}}function at(e,o,t){const n=W(e.value);let r=null;return Le(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function st(e={},o){const t=Io({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(h=>{if(h!==a.key)return;const f=n[h];if(typeof f=="function")f(a);else{const{stop:m=!1,prevent:g=!1}=f;m&&a.stopPropagation(),g&&a.preventDefault(),f.handler(a)}})},l=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(h=>{if(h!==a.key)return;const f=r[h];if(typeof f=="function")f(a);else{const{stop:m=!1,prevent:g=!1}=f;m&&a.stopPropagation(),g&&a.preventDefault(),f.handler(a)}})},s=()=>{(o===void 0||o.value)&&(ge("keydown",document,i),ge("keyup",document,l)),o!==void 0&&Le(o,a=>{a?(ge("keydown",document,i),ge("keyup",document,l)):(me("keydown",document,i),me("keyup",document,l))})};return Po()?(ko(s),Ro(()=>{(o===void 0||o.value)&&(me("keydown",document,i),me("keyup",document,l))})):s(),No(t)}const re="v-hidden",dt=Xo("[v-hidden]",{display:"none!important"}),ct=D({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=W(null),n=W(null);function r(l){const{value:s}=t,{getCounter:a,getTail:h}=e;let f;if(a!==void 0?f=a():f=n.value,!s||!f)return;f.hasAttribute(re)&&f.removeAttribute(re);const{children:m}=s;if(l.showAllItemsBeforeCalculate)for(const O of m)O.hasAttribute(re)&&O.removeAttribute(re);const g=s.offsetWidth,$=[],z=o.tail?h==null?void 0:h():null;let T=z?z.offsetWidth:0,A=!1;const H=s.children.length-(o.tail?1:0);for(let O=0;O<H-1;++O){if(O<0)continue;const v=m[O];if(A){v.hasAttribute(re)||v.setAttribute(re,"");continue}else v.hasAttribute(re)&&v.removeAttribute(re);const p=v.offsetWidth;if(T+=p,$[O]=p,T>g){const{updateCounter:x}=e;for(let w=O;w>=0;--w){const B=H-1-w;x!==void 0?x(B):f.textContent=`${B}`;const F=f.offsetWidth;if(T-=$[w],T+F<=g||w===0){A=!0,O=w-1,z&&(O===-1?(z.style.maxWidth=`${g-F}px`,z.style.boxSizing="border-box"):z.style.maxWidth="");const{onUpdateCount:E}=e;E&&E(B);break}}}}const{onUpdateOverflow:q}=e;A?q!==void 0&&q(!0):(q!==void 0&&q(!1),f.setAttribute(re,""))}const i=_o();return dt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Zo,ssr:i}),Ao(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return To(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[oo(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),fo=D({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ut=D({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Ze(e){return Array.isArray(e)?e:[e]}const Oe={STOP:"STOP"};function vo(e,o){const t=o(e);e.children!==void 0&&t!==Oe.STOP&&e.children.forEach(n=>vo(n,o))}function ht(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function ft(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function vt(e){return e.children}function pt(e){return e.key}function mt(){return!1}function gt(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function bt(e){return e.disabled===!0}function yt(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function ke(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function Re(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function xt(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function wt(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function Ct(e){return(e==null?void 0:e.type)==="group"}function zn(e){const o=new Map;return e.forEach((t,n)=>{o.set(t.key,n)}),t=>{var n;return(n=o.get(t))!==null&&n!==void 0?n:null}}class St extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function zt(e,o,t,n){return ze(o.concat(e),t,n,!1)}function It(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Pt(e,o,t,n){const r=ze(o,t,n,!1),i=ze(e,t,n,!0),l=It(e,t),s=[];return r.forEach(a=>{(i.has(a)||l.has(a))&&s.push(a)}),s.forEach(a=>r.delete(a)),r}function Ne(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:a,allowNotLoaded:h}=e;if(!l)return n!==void 0?{checkedKeys:xt(t,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:wt(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=o;let m;r!==void 0?m=Pt(r,t,o,h):n!==void 0?m=zt(n,t,o,h):m=ze(t,o,h,!1);const g=a==="parent",$=a==="child"||s,z=m,T=new Set,A=Math.max.apply(null,Array.from(f.keys()));for(let H=A;H>=0;H-=1){const q=H===0,O=f.get(H);for(const v of O){if(v.isLeaf)continue;const{key:p,shallowLoaded:x}=v;if($&&x&&v.children.forEach(E=>{!E.disabled&&!E.isLeaf&&E.shallowLoaded&&z.has(E.key)&&z.delete(E.key)}),v.disabled||!x)continue;let w=!0,B=!1,F=!0;for(const E of v.children){const M=E.key;if(!E.disabled){if(F&&(F=!1),z.has(M))B=!0;else if(T.has(M)){B=!0,w=!1;break}else if(w=!1,B)break}}w&&!F?(g&&v.children.forEach(E=>{!E.disabled&&z.has(E.key)&&z.delete(E.key)}),z.add(p)):B&&T.add(p),q&&$&&z.has(p)&&z.delete(p)}}return{checkedKeys:Array.from(z),indeterminateKeys:Array.from(T)}}function ze(e,o,t,n){const{treeNodeMap:r,getChildren:i}=o,l=new Set,s=new Set(e);return e.forEach(a=>{const h=r.get(a);h!==void 0&&vo(h,f=>{if(f.disabled)return Oe.STOP;const{key:m}=f;if(!l.has(m)&&(l.add(m),s.add(m),yt(f.rawNode,i))){if(n)return Oe.STOP;if(!t)throw new St}})}),s}function kt(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(o||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function Rt(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Nt(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function Xe(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?_t:Nt,i={reverse:o==="prev"};let l=!1,s=null;function a(h){if(h!==null){if(h===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!h.disabled||n)&&!h.ignored&&!h.isGroup){s=h;return}if(h.isGroup){const f=Me(h,i);f!==null?s=f:a(r(h,t))}else{const f=r(h,!1);if(f!==null)a(f);else{const m=At(h);m!=null&&m.isGroup?a(r(m,t)):t&&a(r(h,!0))}}}}return a(e),s}function _t(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function At(e){return e.parent}function Me(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,i=t?r-1:0,l=t?-1:r,s=t?-1:1;for(let a=i;a!==l;a+=s){const h=n[a];if(!h.disabled&&!h.ignored)if(h.isGroup){const f=Me(h,o);if(f!==null)return f}else return h}}return null}const Tt={getChild(){return this.ignored?null:Me(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Xe(this,"next",e)},getPrev(e={}){return Xe(this,"prev",e)}};function Ot(e,o){const t=o?new Set(o):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),n}function Kt(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function po(e,o,t,n,r,i=null,l=0){const s=[];return e.forEach((a,h)=>{var f;const m=Object.create(n);if(m.rawNode=a,m.siblings=s,m.level=l,m.index=h,m.isFirstChild=h===0,m.isLastChild=h+1===e.length,m.parent=i,!m.ignored){const g=r(a);Array.isArray(g)&&(m.children=po(g,o,t,n,r,m,l+1))}s.push(m),o.set(m.key,m),t.has(l)||t.set(l,[]),(f=t.get(l))===null||f===void 0||f.push(m)}),s}function Ce(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:i=bt,getIgnored:l=mt,getIsGroup:s=Ct,getKey:a=pt}=o,h=(t=o.getChildren)!==null&&t!==void 0?t:vt,f=o.ignoreEmptyChildren?v=>{const p=h(v);return Array.isArray(p)?p.length?p:null:p}:h,m=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return ft(this.rawNode,f)},get shallowLoaded(){return gt(this.rawNode,f)},get ignored(){return l(this.rawNode)},contains(v){return Kt(this,v)}},Tt),g=po(e,n,r,m,f);function $(v){if(v==null)return null;const p=n.get(v);return p&&!p.isGroup&&!p.ignored?p:null}function z(v){if(v==null)return null;const p=n.get(v);return p&&!p.ignored?p:null}function T(v,p){const x=z(v);return x?x.getPrev(p):null}function A(v,p){const x=z(v);return x?x.getNext(p):null}function H(v){const p=z(v);return p?p.getParent():null}function q(v){const p=z(v);return p?p.getChild():null}const O={treeNodes:g,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:f,getFlattenedNodes(v){return Ot(g,v)},getNode:$,getPrev:T,getNext:A,getParent:H,getChild:q,getFirstAvailableNode(){return Rt(g)},getPath(v,p={}){return kt(v,p,O)},getCheckedKeys(v,p={}){const{cascade:x=!0,leafOnly:w=!1,checkStrategy:B="all",allowNotLoaded:F=!1}=p;return Ne({checkedKeys:ke(v),indeterminateKeys:Re(v),cascade:x,leafOnly:w,checkStrategy:B,allowNotLoaded:F},O)},check(v,p,x={}){const{cascade:w=!0,leafOnly:B=!1,checkStrategy:F="all",allowNotLoaded:E=!1}=x;return Ne({checkedKeys:ke(p),indeterminateKeys:Re(p),keysToCheck:v==null?[]:Ze(v),cascade:w,leafOnly:B,checkStrategy:F,allowNotLoaded:E},O)},uncheck(v,p,x={}){const{cascade:w=!0,leafOnly:B=!1,checkStrategy:F="all",allowNotLoaded:E=!1}=x;return Ne({checkedKeys:ke(p),indeterminateKeys:Re(p),keysToUncheck:v==null?[]:Ze(v),cascade:w,leafOnly:B,checkStrategy:F,allowNotLoaded:E},O)},getNonLeafKeys(v={}){return ht(g,v)}};return O}const $t=Object.assign(Object.assign({},Be),ee.props),Et=D({name:"Tooltip",props:$t,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=de(e),t=ee("Tooltip","-tooltip",void 0,Oo,e,o),n=W(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:C(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return c(so,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),mo=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Lt=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("color-transition",{transition:"color .3s var(--n-bezier)"}),N("depth",{color:"var(--n-color)"},[R("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),R("svg",{height:"1em",width:"1em"})]),Ht=Object.assign(Object.assign({},ee.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Ft=D({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Ht,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=ee("Icon","-icon",Lt,Ko,e,o),r=C(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:s},self:a}=n.value;if(l!==void 0){const{color:h,[`opacity${l}Depth`]:f}=a;return{"--n-bezier":s,"--n-color":h,"--n-opacity":f}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?ve("icon",C(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:C(()=>{const{size:l,color:s}=e;return{fontSize:we(l),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:l}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&to("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),c("i",He(this.$attrs,{role:"img",class:[`${n}-icon`,l,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?c(r):this.$slots)}}),je=ce("n-dropdown-menu"),Ie=ce("n-dropdown"),Qe=ce("n-dropdown-option");function Ke(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Bt(e){return e.type==="group"}function go(e){return e.type==="divider"}function Mt(e){return e.type==="render"}const bo=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=Y(Ie),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:a,renderLabelRef:h,renderIconRef:f,labelFieldRef:m,childrenFieldRef:g,renderOptionRef:$,nodePropsRef:z,menuPropsRef:T}=o,A=Y(Qe,null),H=Y(je),q=Y(no),O=C(()=>e.tmNode.rawNode),v=C(()=>{const{value:_}=g;return Ke(e.tmNode.rawNode,_)}),p=C(()=>{const{disabled:_}=e.tmNode;return _}),x=C(()=>{if(!v.value)return!1;const{key:_,disabled:V}=e.tmNode;if(V)return!1;const{value:oe}=t,{value:ne}=n,{value:S}=r,{value:I}=i;return oe!==null?I.includes(_):ne!==null?I.includes(_)&&I[I.length-1]!==_:S!==null?I.includes(_):!1}),w=C(()=>n.value===null&&!s.value),B=at(x,300,w),F=C(()=>!!(A!=null&&A.enteringSubmenuRef.value)),E=W(!1);J(Qe,{enteringSubmenuRef:E});function M(){E.value=!0}function k(){E.value=!1}function U(){const{parentKey:_,tmNode:V}=e;V.disabled||a.value&&(r.value=_,n.value=null,t.value=V.key)}function K(){const{tmNode:_}=e;_.disabled||a.value&&t.value!==_.key&&U()}function L(_){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:V}=_;V&&!Ye({target:V},"dropdownOption")&&!Ye({target:V},"scrollbarRail")&&(t.value=null)}function Z(){const{value:_}=v,{tmNode:V}=e;a.value&&!_&&!V.disabled&&(o.doSelect(V.key,V.rawNode),o.doUpdateShow(!1))}return{labelField:m,renderLabel:h,renderIcon:f,siblingHasIcon:H.showIconRef,siblingHasSubmenu:H.hasSubmenuRef,menuProps:T,popoverBody:q,animated:s,mergedShowSubmenu:C(()=>B.value&&!F.value),rawNode:O,hasSubmenu:v,pending:se(()=>{const{value:_}=i,{key:V}=e.tmNode;return _.includes(V)}),childActive:se(()=>{const{value:_}=l,{key:V}=e.tmNode,oe=_.findIndex(ne=>V===ne);return oe===-1?!1:oe<_.length-1}),active:se(()=>{const{value:_}=l,{key:V}=e.tmNode,oe=_.findIndex(ne=>V===ne);return oe===-1?!1:oe===_.length-1}),mergedDisabled:p,renderOption:$,nodeProps:z,handleClick:Z,handleMouseMove:K,handleMouseEnter:U,handleMouseLeave:L,handleSubmenuBeforeEnter:M,handleSubmenuAfterEnter:k}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:a,renderIcon:h,renderOption:f,nodeProps:m,props:g,scrollable:$}=this;let z=null;if(r){const q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);z=c(yo,Object.assign({},q,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const T={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},A=m==null?void 0:m(n),H=c("div",Object.assign({class:[`${i}-dropdown-option`,A==null?void 0:A.class],"data-dropdown-option":!0},A),c("div",He(T,g),[c("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[h?h(n):te(n.icon)]),c("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(n):te((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),c("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(Ft,null,{default:()=>c(fo,null)}):null)]),this.hasSubmenu?c(Qo,null,{default:()=>[c(Jo,null,{default:()=>c("div",{class:`${i}-dropdown-offset-container`},c(et,{show:this.mergedShowSubmenu,placement:this.placement,to:$&&this.popoverBody||void 0,teleportDisabled:!$},{default:()=>c("div",{class:`${i}-dropdown-menu-wrapper`},t?c($o,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>z}):z)}))})]}):null);return f?f({node:H,option:n}):H}}),jt=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=Y(je),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=Y(Ie);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,a=c("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(s)),c("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},te(s.icon)),c("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):te((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),c("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:s}):a}}),Dt=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return c(ro,null,c(jt,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:go(i)?c(mo,{clsPrefix:t,key:r.key}):r.isGroup?(to("dropdown","`group` node is not allowed to be put in `group` node."),null):c(bo,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),Gt=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return c("div",o,[e==null?void 0:e()])}}),yo=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=Y(Ie);J(je,{showIconRef:C(()=>{const r=o.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:C(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>Ke(a,r));const{rawNode:s}=i;return Ke(s,r)})})});const n=W(null);return J(Eo,null),J(Lo,null),J(no,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Mt(i)?c(Gt,{tmNode:r,key:r.key}):go(i)?c(mo,{clsPrefix:o,key:r.key}):Bt(i)?c(Dt,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):c(bo,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return c("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(Ho,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?ot({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ut=b("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Fo(),b("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
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
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[N("pending",`
 color: var(--n-option-text-color-hover);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),N("active",`
 color: var(--n-option-text-color-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),N("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[y("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),y("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N("show-icon",`
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
 `,[N("has-submenu",`
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
 `),R(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),N("scrollable",[y("content",`
 padding: var(--n-padding);
 `)])]),Vt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Wt=Object.keys(Be),qt=Object.assign(Object.assign(Object.assign({},Be),Vt),ee.props),Yt=D({name:"Dropdown",inheritAttrs:!1,props:qt,setup(e){const o=W(!1),t=Se(Q(e,"show"),o),n=C(()=>{const{keyField:k,childrenField:U}=e;return Ce(e.options,{getKey(K){return K[k]},getDisabled(K){return K.disabled===!0},getIgnored(K){return K.type==="divider"||K.type==="render"},getChildren(K){return K[U]}})}),r=C(()=>n.value.treeNodes),i=W(null),l=W(null),s=W(null),a=C(()=>{var k,U,K;return(K=(U=(k=i.value)!==null&&k!==void 0?k:l.value)!==null&&U!==void 0?U:s.value)!==null&&K!==void 0?K:null}),h=C(()=>n.value.getPath(a.value).keyPath),f=C(()=>n.value.getPath(e.value).keyPath),m=se(()=>e.keyboard&&t.value);st({keydown:{ArrowUp:{prevent:!0,handler:p},ArrowRight:{prevent:!0,handler:v},ArrowDown:{prevent:!0,handler:x},ArrowLeft:{prevent:!0,handler:O},Enter:{prevent:!0,handler:w},Escape:q}},m);const{mergedClsPrefixRef:g,inlineThemeDisabled:$}=de(e),z=ee("Dropdown","-dropdown",Ut,Bo,e,g);J(Ie,{labelFieldRef:Q(e,"labelField"),childrenFieldRef:Q(e,"childrenField"),renderLabelRef:Q(e,"renderLabel"),renderIconRef:Q(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:h,activeKeyPathRef:f,animatedRef:Q(e,"animated"),mergedShowRef:t,nodePropsRef:Q(e,"nodeProps"),renderOptionRef:Q(e,"renderOption"),menuPropsRef:Q(e,"menuProps"),doSelect:T,doUpdateShow:A}),Le(t,k=>{!e.animated&&!k&&H()});function T(k,U){const{onSelect:K}=e;K&&X(K,k,U)}function A(k){const{"onUpdate:show":U,onUpdateShow:K}=e;U&&X(U,k),K&&X(K,k),o.value=k}function H(){i.value=null,l.value=null,s.value=null}function q(){A(!1)}function O(){F("left")}function v(){F("right")}function p(){F("up")}function x(){F("down")}function w(){const k=B();k!=null&&k.isLeaf&&t.value&&(T(k.key,k.rawNode),A(!1))}function B(){var k;const{value:U}=n,{value:K}=a;return!U||K===null?null:(k=U.getNode(K))!==null&&k!==void 0?k:null}function F(k){const{value:U}=a,{value:{getFirstAvailableNode:K}}=n;let L=null;if(U===null){const Z=K();Z!==null&&(L=Z.key)}else{const Z=B();if(Z){let _;switch(k){case"down":_=Z.getNext();break;case"up":_=Z.getPrev();break;case"right":_=Z.getChild();break;case"left":_=Z.getParent();break}_&&(L=_.key)}}L!==null&&(i.value=null,l.value=L)}const E=C(()=>{const{size:k,inverted:U}=e,{common:{cubicBezierEaseInOut:K},self:L}=z.value,{padding:Z,dividerColor:_,borderRadius:V,optionOpacityDisabled:oe,[ie("optionIconSuffixWidth",k)]:ne,[ie("optionSuffixWidth",k)]:S,[ie("optionIconPrefixWidth",k)]:I,[ie("optionPrefixWidth",k)]:d,[ie("fontSize",k)]:P,[ie("optionHeight",k)]:j,[ie("optionIconSize",k)]:Pe}=L,G={"--n-bezier":K,"--n-font-size":P,"--n-padding":Z,"--n-border-radius":V,"--n-option-height":j,"--n-option-prefix-width":d,"--n-option-icon-prefix-width":I,"--n-option-suffix-width":S,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":Pe,"--n-divider-color":_,"--n-option-opacity-disabled":oe};return U?(G["--n-color"]=L.colorInverted,G["--n-option-color-hover"]=L.optionColorHoverInverted,G["--n-option-color-active"]=L.optionColorActiveInverted,G["--n-option-text-color"]=L.optionTextColorInverted,G["--n-option-text-color-hover"]=L.optionTextColorHoverInverted,G["--n-option-text-color-active"]=L.optionTextColorActiveInverted,G["--n-option-text-color-child-active"]=L.optionTextColorChildActiveInverted,G["--n-prefix-color"]=L.prefixColorInverted,G["--n-suffix-color"]=L.suffixColorInverted,G["--n-group-header-text-color"]=L.groupHeaderTextColorInverted):(G["--n-color"]=L.color,G["--n-option-color-hover"]=L.optionColorHover,G["--n-option-color-active"]=L.optionColorActive,G["--n-option-text-color"]=L.optionTextColor,G["--n-option-text-color-hover"]=L.optionTextColorHover,G["--n-option-text-color-active"]=L.optionTextColorActive,G["--n-option-text-color-child-active"]=L.optionTextColorChildActive,G["--n-prefix-color"]=L.prefixColor,G["--n-suffix-color"]=L.suffixColor,G["--n-group-header-text-color"]=L.groupHeaderTextColor),G}),M=$?ve("dropdown",C(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:g,mergedTheme:z,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&H()},doUpdateShow:A,cssVars:$?void 0:E,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const e=(n,r,i,l,s)=>{var a;const{mergedClsPrefix:h,menuProps:f}=this;(a=this.onRender)===null||a===void 0||a.call(this);const m=(f==null?void 0:f(void 0,this.tmNodes.map($=>$.rawNode)))||{},g={ref:lt(r),class:[n,`${h}-dropdown`,this.themeClass],clsPrefix:h,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return c(yo,He(this.$attrs,g,m))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(so,Object.assign({},xe(this.$props,Wt),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Zt=tt(!0),Xt=b("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),N("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Qt={position:uo,inverted:Boolean,bordered:{type:Boolean,default:!1}},Jt=D({name:"LayoutHeader",props:Object.assign(Object.assign({},ee.props),Qt),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=ee("Layout","-layout-header",Xt,co,e,o),r=C(()=>{const{common:{cubicBezierEaseInOut:l},self:s}=n.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=s.headerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.headerBorderColorInverted):(a["--n-color"]=s.headerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.headerBorderColor),a}),i=t?ve("layout-header",C(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),en=b("layout-sider",`
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
`,[N("bordered",[y("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),y("left-placement",[N("bordered",[y("border",`
 right: 0;
 `)])]),N("right-placement",`
 justify-content: flex-start;
 `,[N("bordered",[y("border",`
 left: 0;
 `)]),N("collapsed",[b("layout-toggle-button",[b("base-icon",`
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",[R("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),b("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[b("base-icon",`
 transform: rotate(0);
 `)]),b("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[R("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),N("collapsed",[b("layout-toggle-bar",[R("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),b("layout-toggle-button",[b("base-icon",`
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
 `),R("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),R("&:hover",[y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),y("border",`
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
 `),N("show-content",[b("layout-sider-scroll-container",{opacity:1})]),N("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),on=D({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(io,{clsPrefix:e},{default:()=>c(fo,null)}))}}),tn=D({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),nn={position:uo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},rn=D({name:"LayoutSider",props:Object.assign(Object.assign({},ee.props),nn),setup(e){const o=Y(nt),t=W(null),n=W(null),r=C(()=>we(a.value?e.collapsedWidth:e.width)),i=C(()=>e.collapseMode!=="transform"?{}:{minWidth:we(e.width)}),l=C(()=>o?o.siderPlacement:"left"),s=W(e.defaultCollapsed),a=Se(Q(e,"collapsed"),s);function h(p,x){if(e.nativeScrollbar){const{value:w}=t;w&&(x===void 0?w.scrollTo(p):w.scrollTo(p,x))}else{const{value:w}=n;w&&w.scrollTo(p,x)}}function f(){const{"onUpdate:collapsed":p,onUpdateCollapsed:x,onExpand:w,onCollapse:B}=e,{value:F}=a;x&&X(x,!F),p&&X(p,!F),s.value=!F,F?w&&X(w):B&&X(B)}let m=0,g=0;const $=p=>{var x;const w=p.target;m=w.scrollLeft,g=w.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,p)};Mo(()=>{if(e.nativeScrollbar){const p=t.value;p&&(p.scrollTop=g,p.scrollLeft=m)}}),J(ho,{collapsedRef:a,collapseModeRef:Q(e,"collapseMode")});const{mergedClsPrefixRef:z,inlineThemeDisabled:T}=de(e),A=ee("Layout","-layout-sider",en,co,e,z);function H(p){var x,w;p.propertyName==="max-width"&&(a.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const q={scrollTo:h},O=C(()=>{const{common:{cubicBezierEaseInOut:p},self:x}=A.value,{siderToggleButtonColor:w,siderToggleButtonBorder:B,siderToggleBarColor:F,siderToggleBarColorHover:E}=x,M={"--n-bezier":p,"--n-toggle-button-color":w,"--n-toggle-button-border":B,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":E};return e.inverted?(M["--n-color"]=x.siderColorInverted,M["--n-text-color"]=x.textColorInverted,M["--n-border-color"]=x.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,M.__invertScrollbar=x.__invertScrollbar):(M["--n-color"]=x.siderColor,M["--n-text-color"]=x.textColor,M["--n-border-color"]=x.siderBorderColor,M["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),M}),v=T?ve("layout-sider",C(()=>e.inverted?"a":"b"),O,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:n,mergedClsPrefix:z,mergedTheme:A,styleMaxWidth:r,mergedCollapsed:a,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:$,handleTransitionend:H,handleTriggerClick:f,inlineThemeDisabled:T,cssVars:O,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender},q)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:we(this.width)}]},this.nativeScrollbar?c("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(jo,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?c(tn,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(on,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}}),pe=ce("n-menu"),De=ce("n-submenu"),Ge=ce("n-menu-item-group"),ye=8;function Ue(e){const o=Y(pe),{props:t,mergedCollapsedRef:n}=o,r=Y(De,null),i=Y(Ge,null),l=C(()=>t.mode==="horizontal"),s=C(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=C(()=>{var g;return Math.max((g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize,t.iconSize)}),h=C(()=>{var g;return!l.value&&e.root&&n.value&&(g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize}),f=C(()=>{if(l.value)return;const{collapsedWidth:g,indent:$,rootIndent:z}=t,{root:T,isGroup:A}=e,H=z===void 0?$:z;return T?n.value?g/2-a.value/2:H:i&&typeof i.paddingLeftRef.value=="number"?$/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(A?$/2:$)+r.paddingLeftRef.value:0}),m=C(()=>{const{collapsedWidth:g,indent:$,rootIndent:z}=t,{value:T}=a,{root:A}=e;return l.value||!A||!n.value?ye:(z===void 0?$:z)+T+ye-(g+T)/2});return{dropdownPlacement:s,activeIconSize:h,maxIconSize:a,paddingLeft:f,iconMarginRight:m,NMenu:o,NSubmenu:r}}const Ve={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},xo=Object.assign(Object.assign({},Ve),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ln=D({name:"MenuOptionGroup",props:xo,setup(e){J(De,null);const o=Ue(e);J(Ge,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=Y(pe);return function(){const{value:r}=t,i=o.paddingLeft.value,{nodeProps:l}=n,s=l==null?void 0:l(e.tmNode.rawNode);return c("div",{class:`${r}-menu-item-group`,role:"group"},c("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),te(e.title),e.extra?c(ro,null," ",te(e.extra)):null),c("div",null,e.tmNodes.map(a=>We(a,n))))}}}),wo=D({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=Y(pe);return{menuProps:o,style:C(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:C(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=t?t(o.rawNode):te(this.icon);return c("div",{onClick:s=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(o.rawNode):te(this.title),this.extra||r?c("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):te(this.extra)):null),this.showArrow?c(io,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):c(ut,null)}):null)}}),Co=Object.assign(Object.assign({},Ve),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),$e=D({name:"Submenu",props:Co,setup(e){const o=Ue(e),{NMenu:t,NSubmenu:n}=o,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,s=C(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:g}),a=W(!1);J(De,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),J(Ge,null);function h(){const{onClick:g}=e;g&&g()}function f(){s.value||(i.value||t.toggleExpand(e.internalKey),h())}function m(g){a.value=g}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:a,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:se(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:t.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:m,handleClick:f}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:a,mergedDisabled:h,maxIconSize:f,activeIconSize:m,title:g,childActive:$,icon:z,handleClick:T,menuProps:{nodeProps:A},dropdownShow:H,iconMarginRight:q,tmNode:O,mergedClsPrefix:v,isEllipsisPlaceholder:p,extra:x}=this,w=A==null?void 0:A(O.rawNode);return c("div",Object.assign({},w,{class:[`${v}-menu-item`,w==null?void 0:w.class],role:"menuitem"}),c(wo,{tmNode:O,paddingLeft:s,collapsed:a,disabled:h,iconMarginRight:q,maxIconSize:f,activeIconSize:m,title:g,extra:x,showArrow:!l,childActive:$,clsPrefix:v,icon:z,hover:H,onClick:T,isEllipsisPlaceholder:p}))},i=()=>c(Do,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:c("div",{class:`${o}-submenu-children`,role:"menu"},l.map(a=>We(a,this.menuProps)))}});return this.root?c(Yt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>c("div",{class:`${o}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):c("div",{class:`${o}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),So=Object.assign(Object.assign({},Ve),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),an=D({name:"MenuOption",props:So,setup(e){const o=Ue(e),{NSubmenu:t,NMenu:n}=o,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,s=t?t.mergedDisabledRef:{value:!1},a=C(()=>s.value||e.disabled);function h(m){const{onClick:g}=e;g&&g(m)}function f(m){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),h(m))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:se(()=>e.root&&l.value&&r.mode!=="horizontal"&&!a.value),selected:se(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return c("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),c(Et,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):te(this.title),trigger:()=>c(wo,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),sn=D({name:"MenuDivider",setup(){const e=Y(pe),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${o.value}-menu-divider`})}}),dn=Fe(xo),cn=Fe(So),un=Fe(Co);function Ee(e){return e.type==="divider"||e.type==="render"}function hn(e){return e.type==="divider"}function We(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(Ee(t))return hn(t)?c(sn,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:i,level:l,isGroup:s}=e,a=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:s});return e.children?e.isGroup?c(ln,xe(a,dn,{tmNode:e,tmNodes:e.children,key:i})):c($e,xe(a,un,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):c(an,xe(a,cn,{key:i,tmNode:e}))}const Je=[R("&::before","background-color: var(--n-item-color-hover);"),y("arrow",`
 color: var(--n-arrow-color-hover);
 `),y("icon",`
 color: var(--n-item-icon-color-hover);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[R("a",`
 color: var(--n-item-text-color-hover);
 `),y("extra",`
 color: var(--n-item-text-color-hover);
 `)])],eo=[y("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[R("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],fn=R([b("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[b("submenu","margin: 0;"),b("menu-item","margin: 0;"),b("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[R("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),b("menu-item-content",[N("selected",[y("icon","color: var(--n-item-icon-color-active-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[R("a","color: var(--n-item-text-color-active-horizontal);"),y("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[R("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),y("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[R("&:focus-within",eo)]),N("selected",[le(null,[y("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[R("a","color: var(--n-item-text-color-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),N("child-active",[le(null,[y("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[R("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),le("border-bottom: 2px solid var(--n-border-color-horizontal);",eo)]),b("menu-item-content-header",[R("a","color: var(--n-item-text-color-horizontal);")])])]),ae("responsive",[b("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),N("collapsed",[b("menu-item-content",[N("selected",[R("&::before",`
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
 `,[R("> *","z-index: 1;"),R("&::before",`
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
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[y("arrow","transform: rotate(0);")]),N("selected",[R("&::before","background-color: var(--n-item-color-active);"),y("arrow","color: var(--n-arrow-color-active);"),y("icon","color: var(--n-item-icon-color-active);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[R("a","color: var(--n-item-text-color-active);"),y("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[R("a",`
 color: var(--n-item-text-color-child-active);
 `),y("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),y("arrow",`
 color: var(--n-arrow-color-child-active);
 `),y("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[R("&:focus-within",Je)]),N("selected",[le(null,[y("arrow","color: var(--n-arrow-color-active-hover);"),y("icon","color: var(--n-item-icon-color-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[R("a","color: var(--n-item-text-color-active-hover);"),y("extra","color: var(--n-item-text-color-active-hover);")])])]),N("child-active",[le(null,[y("arrow","color: var(--n-arrow-color-child-active-hover);"),y("icon","color: var(--n-item-icon-color-child-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[R("a","color: var(--n-item-text-color-child-active-hover);"),y("extra","color: var(--n-item-text-color-child-active-hover);")])])]),N("selected",[le(null,[R("&::before","background-color: var(--n-item-color-active-hover);")])]),le(null,Je)]),y("icon",`
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
 `,[R("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[R("&::before",`
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
 `,[Go({duration:".2s"})])]),b("menu-item-group",[b("menu-item-group-title",`
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
 `)])]),b("menu-tooltip",[R("a",`
 color: inherit;
 text-decoration: none;
 `)]),b("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function le(e,o){return[N("hover",e,o),R("&:hover",e,o)]}const vn=Object.assign(Object.assign({},ee.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),pn=D({name:"Menu",props:vn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=de(e),n=ee("Menu","-menu",fn,Uo,e,o),r=Y(ho,null),i=C(()=>{var S;const{collapsed:I}=e;if(I!==void 0)return I;if(r){const{collapseModeRef:d,collapsedRef:P}=r;if(d.value==="width")return(S=P.value)!==null&&S!==void 0?S:!1}return!1}),l=C(()=>{const{keyField:S,childrenField:I,disabledField:d}=e;return Ce(e.items||e.options,{getIgnored(P){return Ee(P)},getChildren(P){return P[I]},getDisabled(P){return P[d]},getKey(P){var j;return(j=P[S])!==null&&j!==void 0?j:P.name}})}),s=C(()=>new Set(l.value.treeNodes.map(S=>S.key))),{watchProps:a}=e,h=W(null);a!=null&&a.includes("defaultValue")?qe(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const f=Q(e,"value"),m=Se(f,h),g=W([]),$=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?qe($):$();const z=rt(e,["expandedNames","expandedKeys"]),T=Se(z,g),A=C(()=>l.value.treeNodes),H=C(()=>l.value.getPath(m.value).keyPath);J(pe,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:T,activePathRef:H,mergedClsPrefixRef:o,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:Q(e,"inverted"),doSelect:q,toggleExpand:v});function q(S,I){const{"onUpdate:value":d,onUpdateValue:P,onSelect:j}=e;P&&X(P,S,I),d&&X(d,S,I),j&&X(j,S,I),h.value=S}function O(S){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:d,onExpandedNamesChange:P,onOpenNamesChange:j}=e;I&&X(I,S),d&&X(d,S),P&&X(P,S),j&&X(j,S),g.value=S}function v(S){const I=Array.from(T.value),d=I.findIndex(P=>P===S);if(~d)I.splice(d,1);else{if(e.accordion&&s.value.has(S)){const P=I.findIndex(j=>s.value.has(j));P>-1&&I.splice(P,1)}I.push(S)}O(I)}const p=S=>{const I=l.value.getPath(S??m.value,{includeSelf:!1}).keyPath;if(!I.length)return;const d=Array.from(T.value),P=new Set([...d,...I]);e.accordion&&s.value.forEach(j=>{P.has(j)&&!I.includes(j)&&P.delete(j)}),O(Array.from(P))},x=C(()=>{const{inverted:S}=e,{common:{cubicBezierEaseInOut:I},self:d}=n.value,{borderRadius:P,borderColorHorizontal:j,fontSize:Pe,itemHeight:G,dividerColor:zo}=d,u={"--n-divider-color":zo,"--n-bezier":I,"--n-font-size":Pe,"--n-border-color-horizontal":j,"--n-border-radius":P,"--n-item-height":G};return S?(u["--n-group-text-color"]=d.groupTextColorInverted,u["--n-color"]=d.colorInverted,u["--n-item-text-color"]=d.itemTextColorInverted,u["--n-item-text-color-hover"]=d.itemTextColorHoverInverted,u["--n-item-text-color-active"]=d.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=d.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=d.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=d.itemIconColorInverted,u["--n-item-icon-color-hover"]=d.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=d.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=d.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=d.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=d.arrowColorInverted,u["--n-arrow-color-hover"]=d.arrowColorHoverInverted,u["--n-arrow-color-active"]=d.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=d.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=d.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=d.itemColorHoverInverted,u["--n-item-color-active"]=d.itemColorActiveInverted,u["--n-item-color-active-hover"]=d.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=d.groupTextColor,u["--n-color"]=d.color,u["--n-item-text-color"]=d.itemTextColor,u["--n-item-text-color-hover"]=d.itemTextColorHover,u["--n-item-text-color-active"]=d.itemTextColorActive,u["--n-item-text-color-child-active"]=d.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=d.itemTextColorActiveHover,u["--n-item-icon-color"]=d.itemIconColor,u["--n-item-icon-color-hover"]=d.itemIconColorHover,u["--n-item-icon-color-active"]=d.itemIconColorActive,u["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=d.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=d.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=d.arrowColor,u["--n-arrow-color-hover"]=d.arrowColorHover,u["--n-arrow-color-active"]=d.arrowColorActive,u["--n-arrow-color-active-hover"]=d.arrowColorActiveHover,u["--n-arrow-color-child-active"]=d.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHover,u["--n-item-color-hover"]=d.itemColorHover,u["--n-item-color-active"]=d.itemColorActive,u["--n-item-color-active-hover"]=d.itemColorActiveHover,u["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsed),u}),w=t?ve("menu",C(()=>e.inverted?"a":"b"),x,e):void 0,B=Vo(),F=W(null),E=W(null);let M=!0;const k=()=>{var S;M?M=!1:(S=F.value)===null||S===void 0||S.sync({showAllItemsBeforeCalculate:!0})};function U(){return document.getElementById(B)}const K=W(-1);function L(S){K.value=e.options.length-S}function Z(S){S||(K.value=-1)}const _=C(()=>{const S=K.value;return{children:S===-1?[]:e.options.slice(S)}}),V=C(()=>{const{childrenField:S,disabledField:I,keyField:d}=e;return Ce([_.value],{getIgnored(P){return Ee(P)},getChildren(P){return P[S]},getDisabled(P){return P[I]},getKey(P){var j;return(j=P[d])!==null&&j!==void 0?j:P.name}})}),oe=C(()=>Ce([{}]).treeNodes[0]);function ne(){var S;if(K.value===-1)return c($e,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:oe.value,domId:B,isEllipsisPlaceholder:!0});const I=V.value.treeNodes[0],d=H.value,P=!!(!((S=I.children)===null||S===void 0)&&S.some(j=>d.includes(j.key)));return c($e,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:P,tmNode:I,domId:B,rawNodes:I.rawNode.children||[],tmNodes:I.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:z,uncontrolledExpanededKeys:g,mergedExpandedKeys:T,uncontrolledValue:h,mergedValue:m,activePath:H,tmNodes:A,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:x,themeClass:w==null?void 0:w.themeClass,overflowRef:F,counterRef:E,updateCounter:()=>{},onResize:k,onUpdateOverflow:Z,onUpdateCount:L,renderCounter:ne,getCounter:U,onRender:w==null?void 0:w.onRender,showOption:p,deriveResponsiveState:k}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(a=>We(a,this.$props)),l=o==="horizontal"&&this.responsive,s=()=>c("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?c(ct,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?c(Wo,{onResize:this.onResize},{default:s}):s()}});function mn(){const e=lo(ao);return W(e.smallerOrEqual("md"))}const gn=D({__name:"the-nav",setup(e){const o=qo(),t=mn();function n(l){return c("span",{class:l})}const r=[{label:()=>c(be,{to:"/"},{default:()=>"Home"}),key:"/",icon:()=>n("ico-mdi-home")},{label:()=>c(be,{to:"/bingo"},{default:()=>"Bingo"}),key:"/bingo",icon:()=>n("ico-ic:baseline-grid-on")},{label:()=>c(be,{to:"/quiz"},{default:()=>"Quiz"}),key:"/quiz",icon:()=>n("ico-mdi-head-question")},{label:()=>c(be,{to:"/settings"},{default:()=>"Einstellungen"}),key:"/settings",icon:()=>n("ico-mdi-cog")}],i=C(()=>o.path);return(l,s)=>{const a=pn,h=Jt,f=rn;return ue(t)?(_e(),Ae(h,{key:0},{default:he(()=>[fe(a,{options:r,value:ue(i),mode:"horizontal",responsive:""},null,8,["value"])]),_:1})):(_e(),Ae(f,{key:1,"collapsed-width":64,class:"bg-color",bordered:"","collapse-mode":"width",collapsed:""},{default:he(()=>[fe(a,{options:r,value:ue(i),"collapsed-width":64,collapsed:"","collapse-mode":"width"},null,8,["value"])]),_:1}))}}}),bn="/cps/bg-image.webp",yn="/cps/bg-video.mp4",xn=Te("video",{autoplay:"",muted:"",loop:"",class:"object-cover bottom-0 right-0 top-0 left-0 h-full w-full z-1 overflow-hidden",poster:bn,preload:"auto"},[Te("source",{src:yn,type:"video/mp4"})],-1),wn={class:"absolute top-0 left-0 right-0 bottom-0"},In=D({__name:"default-layout",setup(e){const o=lo(ao),t=W(o.smallerOrEqual("md"));return(n,r)=>{const i=gn,l=Zt,s=it;return _e(),Ae(s,{"has-sider":!ue(t),class:"h-100dvh"},{default:he(()=>[fe(i),fe(s,{class:"relative",style:Yo({height:ue(t)?"calc(100% - 42px)":"100%"})},{default:he(()=>[fe(l,{"native-scrollbar":!1,class:"h-full","content-class":"relative h-full"},{default:he(()=>[xn,Te("div",wn,[oo(n.$slots,"default")])]),_:3})]),_:3},8,["style"])]),_:3},8,["has-sider"])}}});export{fo as C,Yt as N,ct as V,In as _,Ce as a,lt as b,zn as c,Et as d,Ye as h,mn as u};
