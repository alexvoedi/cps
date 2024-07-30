import{_ as he}from"./centered-layout-DRbdCn0m.js";import{a4 as be,aO as fe,aP as ve,l as E,n as t,aQ as I,m as P,a1 as d,a0 as L,d as Y,p as ge,R as Q,aR as me,y as W,a5 as pe,a6 as we,f as z,T as w,aS as H,as as u,U as _e,aT as K,s as n,Z as _,aU as xe,aV as ye,ac as M,x as ke,o as Se,a as Ce,h as F,j as T,k as X,aH as Be}from"./index-AW5M5ngI.js";import{_ as Re,a as $e}from"./FormItem-CVR24LJc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function Ve(e){const{primaryColor:l,opacityDisabled:h,borderRadius:i,textColor3:r}=e;return Object.assign(Object.assign({},fe),{iconColor:r,textColor:"white",loadingColor:l,opacityDisabled:h,railColor:"rgba(0, 0, 0, .14)",railColorActive:l,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${ve(l,{alpha:.2})}`})}const ze={name:"Switch",common:be,self:Ve},Fe=E("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),E("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),P("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),L("disabled",[L("icon",[d("rubber-band",[d("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[P("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),d("active",[d("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[P("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),d("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),d("active",[t("rail","background-color: var(--n-rail-color-active);")]),d("loading",[t("rail",`
 cursor: wait;
 `)]),d("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Te=Object.assign(Object.assign({},Q.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Ue=Y({name:"Switch",props:Te,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=ge(e),i=Q("Switch","-switch",Fe,ze,e,l),r=me(e),{mergedSizeRef:m,mergedDisabledRef:s}=r,p=W(e.defaultValue),x=pe(e,"value"),c=we(x,p),S=z(()=>c.value===e.checkedValue),y=W(!1),a=W(!1),b=z(()=>{const{railStyle:o}=e;if(o)return o({focused:a.value,checked:S.value})});function f(o){const{"onUpdate:value":R,onChange:$,onUpdateValue:V}=e,{nTriggerFormInput:U,nTriggerFormChange:j}=r;R&&M(R,o),V&&M(V,o),$&&M($,o),p.value=o,U(),j()}function Z(){const{nTriggerFormFocus:o}=r;o()}function q(){const{nTriggerFormBlur:o}=r;o()}function G(){e.loading||s.value||(c.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue))}function J(){a.value=!0,Z()}function ee(){a.value=!1,q(),y.value=!1}function te(o){e.loading||s.value||o.key===" "&&(c.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue),y.value=!1)}function oe(o){e.loading||s.value||o.key===" "&&(o.preventDefault(),y.value=!0)}const A=z(()=>{const{value:o}=m,{self:{opacityDisabled:R,railColor:$,railColorActive:V,buttonBoxShadow:U,buttonColor:j,boxShadowFocus:ae,loadingColor:ne,textColor:ie,iconColor:re,[w("buttonHeight",o)]:v,[w("buttonWidth",o)]:le,[w("buttonWidthPressed",o)]:se,[w("railHeight",o)]:g,[w("railWidth",o)]:C,[w("railBorderRadius",o)]:ce,[w("buttonBorderRadius",o)]:de},common:{cubicBezierEaseInOut:ue}}=i.value;let D,N,O;return B?(D=`calc((${g} - ${v}) / 2)`,N=`max(${g}, ${v})`,O=`max(${C}, calc(${C} + ${v} - ${g}))`):(D=H((u(g)-u(v))/2),N=H(Math.max(u(g),u(v))),O=u(g)>u(v)?C:H(u(C)+u(v)-u(g))),{"--n-bezier":ue,"--n-button-border-radius":de,"--n-button-box-shadow":U,"--n-button-color":j,"--n-button-width":le,"--n-button-width-pressed":se,"--n-button-height":v,"--n-height":N,"--n-offset":D,"--n-opacity-disabled":R,"--n-rail-border-radius":ce,"--n-rail-color":$,"--n-rail-color-active":V,"--n-rail-height":g,"--n-rail-width":C,"--n-width":O,"--n-box-shadow-focus":ae,"--n-loading-color":ne,"--n-text-color":ie,"--n-icon-color":re}}),k=h?_e("switch",z(()=>m.value[0]),A,e):void 0;return{handleClick:G,handleBlur:ee,handleFocus:J,handleKeyup:te,handleKeydown:oe,mergedRailStyle:b,pressed:y,mergedClsPrefix:l,mergedValue:c,checked:S,mergedDisabled:s,cssVars:h?void 0:A,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:l,checked:h,mergedRailStyle:i,onRender:r,$slots:m}=this;r==null||r();const{checked:s,unchecked:p,icon:x,"checked-icon":c,"unchecked-icon":S}=m,y=!(K(x)&&K(c)&&K(S));return n("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,h&&`${e}-switch--active`,l&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},_(s,a=>_(p,b=>a||b?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),a),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),b)):null)),n("div",{class:`${e}-switch__button`},_(x,a=>_(c,b=>_(S,f=>n(xe,null,{default:()=>this.loading?n(ye,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||a)?n("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||a):!this.checked&&(f||a)?n("div",{class:`${e}-switch__button-icon`,key:f?"unchecked-icon":"icon"},f||a):null})))),_(s,a=>a&&n("div",{key:"checked",class:`${e}-switch__checked`},a)),_(p,a=>a&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}}),Pe=Y({__name:"settings",setup(e){const l=ke();return(h,i)=>{const r=Ue,m=Re,s=$e,p=Be,x=he;return Se(),Ce(x,null,{default:F(()=>[T(p,{title:"Einstellungen",class:"max-w-160"},{default:F(()=>[T(s,{"label-placement":"left","show-feedback":!1},{default:F(()=>[T(m,{label:"Hintergrundvideo"},{default:F(()=>[T(r,{value:X(l).video,"onUpdate:value":i[0]||(i[0]=c=>X(l).video=c)},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Pe as default};
