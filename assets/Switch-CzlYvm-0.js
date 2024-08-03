import{Q as be,aC as rt,w as Xe,X as it,l as T,a1 as A,m as ne,N as Je,d as Ve,p as ze,R as fe,y as G,a6 as Pe,s as R,aN as Qe,aO as Me,f as $,aP as _e,aQ as Ge,aR as at,n as k,a7 as he,aS as Be,aT as ot,E as st,T as N,U as et,aE as lt,Z as ae,aU as Ie,aV as dt,aW as ft,aX as ct,aY as Le,a0 as We,aZ as ut,ah as ht,a_ as Se,an as te,a$ as Fe,b0 as mt,b1 as gt,am as qe}from"./index-Dy_zQsdw.js";function vt(n,e,t){var r;const i=be(n,null);if(i===null)return;const o=(r=rt())===null||r===void 0?void 0:r.proxy;Xe(t,a),a(t.value),it(()=>{a(void 0,t.value)});function a(f,l){if(!i)return;const h=i[e];l!==void 0&&s(h,l),f!==void 0&&d(h,f)}function s(f,l){f[l]||(f[l]=[]),f[l].splice(f[l].findIndex(h=>h===o),1)}function d(f,l){f[l]||(f[l]=[]),~f[l].findIndex(h=>h===o)||f[l].push(o)}}const bt=T("form",[A("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[T("form-item",{width:"auto",marginRight:"18px"},[ne("&:last-child",{marginRight:0})])])]),pe=Je("n-form"),tt=Je("n-form-item-insts");var pt=function(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(l){try{f(r.next(l))}catch(h){a(h)}}function d(l){try{f(r.throw(l))}catch(h){a(h)}}function f(l){l.done?o(l.value):i(l.value).then(s,d)}f((r=r.apply(n,e||[])).next())})};const yt=Object.assign(Object.assign({},fe.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>{n.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),fn=Ve({name:"Form",props:yt,setup(n){const{mergedClsPrefixRef:e}=ze(n);fe("Form","-form",bt,Qe,n,e);const t={},r=G(void 0),i=d=>{const f=r.value;(f===void 0||d>=f)&&(r.value=d)};function o(d){return pt(this,arguments,void 0,function*(f,l=()=>!0){return yield new Promise((h,g)=>{const _=[];for(const c of Me(t)){const m=t[c];for(const y of m)y.path&&_.push(y.internalValidate(null,l))}Promise.all(_).then(c=>{const m=c.some(q=>!q.valid),y=[],u=[];c.forEach(q=>{var v,w;!((v=q.errors)===null||v===void 0)&&v.length&&y.push(q.errors),!((w=q.warnings)===null||w===void 0)&&w.length&&u.push(q.warnings)}),f&&f(y.length?y:void 0,{warnings:u.length?u:void 0}),m?g(y.length?y:void 0):h({warnings:u.length?u:void 0})})})})}function a(){for(const d of Me(t)){const f=t[d];for(const l of f)l.restoreValidation()}}return Pe(pe,{props:n,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:i}),Pe(tt,{formItems:t}),Object.assign({validate:o,restoreValidation:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:n}=this;return R("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function oe(){return oe=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},oe.apply(this,arguments)}function wt(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ve(n,e)}function Oe(n){return Oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Oe(n)}function ve(n,e){return ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ve(n,e)}function xt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Re(n,e,t){return xt()?Re=Reflect.construct.bind():Re=function(i,o,a){var s=[null];s.push.apply(s,o);var d=Function.bind.apply(i,s),f=new d;return a&&ve(f,a.prototype),f},Re.apply(null,arguments)}function kt(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function Ae(n){var e=typeof Map=="function"?new Map:void 0;return Ae=function(r){if(r===null||!kt(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return Re(r,arguments,Oe(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ve(i,r)},Ae(n)}var Rt=/%[sdj%]/g,_t=function(){};function Ce(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function D(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,o=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var a=n.replace(Rt,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return s}});return a}return n}function St(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function C(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||St(e)&&typeof n=="string"&&!n)}function Ft(n,e,t){var r=[],i=0,o=n.length;function a(s){r.push.apply(r,s||[]),i++,i===o&&t(r)}n.forEach(function(s){e(s,a)})}function Ne(n,e,t){var r=0,i=n.length;function o(a){if(a&&a.length){t(a);return}var s=r;r=r+1,s<i?e(n[s],o):t([])}o([])}function qt(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var Te=function(n){wt(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e}(Ae(Error));function $t(n,e,t,r,i){if(e.first){var o=new Promise(function(g,_){var c=function(u){return r(u),u.length?_(new Te(u,Ce(u))):g(i)},m=qt(n);Ne(m,t,c)});return o.catch(function(g){return g}),o}var a=e.firstFields===!0?Object.keys(n):e.firstFields||[],s=Object.keys(n),d=s.length,f=0,l=[],h=new Promise(function(g,_){var c=function(y){if(l.push.apply(l,y),f++,f===d)return r(l),l.length?_(new Te(l,Ce(l))):g(i)};s.length||(r(l),g(i)),s.forEach(function(m){var y=n[m];a.indexOf(m)!==-1?Ne(y,t,c):Ft(y,t,c)})});return h.catch(function(g){return g}),h}function Pt(n){return!!(n&&n.message!==void 0)}function Ot(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function De(n,e){return function(t){var r;return n.fullFields?r=Ot(e,n.fullFields):r=e[t.field||n.fullField],Pt(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function He(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=oe({},n[t],r):n[t]=r}}return n}var nt=function(e,t,r,i,o,a){e.required&&(!r.hasOwnProperty(e.field)||C(t,a||e.type))&&i.push(D(o.messages.required,e.fullField))},At=function(e,t,r,i,o){(/^\s+$/.test(t)||t==="")&&i.push(D(o.messages.whitespace,e.fullField))},ke,Ct=function(){if(ke)return ke;var n="[a-fA-F\\d:]",e=function(w){return w&&w.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),d=function(w){return w&&w.exact?o:new RegExp("(?:"+e(w)+t+e(w)+")|(?:"+e(w)+i+e(w)+")","g")};d.v4=function(v){return v&&v.exact?a:new RegExp(""+e(v)+t+e(v),"g")},d.v6=function(v){return v&&v.exact?s:new RegExp(""+e(v)+i+e(v),"g")};var f="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",h=d.v4().source,g=d.v6().source,_="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",c="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",m="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',q="(?:"+f+"|www\\.)"+l+"(?:localhost|"+h+"|"+g+"|"+_+c+m+")"+y+u;return ke=new RegExp("(?:^"+q+"$)","i"),ke},Ue={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},me={integer:function(e){return me.number(e)&&parseInt(e,10)===e},float:function(e){return me.number(e)&&!me.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!me.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ue.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Ct())},hex:function(e){return typeof e=="string"&&!!e.match(Ue.hex)}},Et=function(e,t,r,i,o){if(e.required&&t===void 0){nt(e,t,r,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?me[s](t)||i.push(D(o.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&i.push(D(o.messages.types[s],e.fullField,e.type))},jt=function(e,t,r,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",d=typeof e.max=="number",f=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=t,h=null,g=typeof t=="number",_=typeof t=="string",c=Array.isArray(t);if(g?h="number":_?h="string":c&&(h="array"),!h)return!1;c&&(l=t.length),_&&(l=t.replace(f,"_").length),a?l!==e.len&&i.push(D(o.messages[h].len,e.fullField,e.len)):s&&!d&&l<e.min?i.push(D(o.messages[h].min,e.fullField,e.min)):d&&!s&&l>e.max?i.push(D(o.messages[h].max,e.fullField,e.max)):s&&d&&(l<e.min||l>e.max)&&i.push(D(o.messages[h].range,e.fullField,e.min,e.max))},le="enum",Vt=function(e,t,r,i,o){e[le]=Array.isArray(e[le])?e[le]:[],e[le].indexOf(t)===-1&&i.push(D(o.messages[le],e.fullField,e[le].join(", ")))},zt=function(e,t,r,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(D(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(D(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},p={required:nt,whitespace:At,type:Et,range:jt,enum:Vt,pattern:zt},Mt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t,"string")&&!e.required)return r();p.required(e,t,i,a,o,"string"),C(t,"string")||(p.type(e,t,i,a,o),p.range(e,t,i,a,o),p.pattern(e,t,i,a,o),e.whitespace===!0&&p.whitespace(e,t,i,a,o))}r(a)},Bt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&p.type(e,t,i,a,o)}r(a)},It=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t===""&&(t=void 0),C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&(p.type(e,t,i,a,o),p.range(e,t,i,a,o))}r(a)},Lt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&p.type(e,t,i,a,o)}r(a)},Wt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),C(t)||p.type(e,t,i,a,o)}r(a)},Nt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&(p.type(e,t,i,a,o),p.range(e,t,i,a,o))}r(a)},Tt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&(p.type(e,t,i,a,o),p.range(e,t,i,a,o))}r(a)},Dt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t==null&&!e.required)return r();p.required(e,t,i,a,o,"array"),t!=null&&(p.type(e,t,i,a,o),p.range(e,t,i,a,o))}r(a)},Ht=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&p.type(e,t,i,a,o)}r(a)},Ut="enum",Kt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o),t!==void 0&&p[Ut](e,t,i,a,o)}r(a)},Yt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t,"string")&&!e.required)return r();p.required(e,t,i,a,o),C(t,"string")||p.pattern(e,t,i,a,o)}r(a)},Zt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t,"date")&&!e.required)return r();if(p.required(e,t,i,a,o),!C(t,"date")){var d;t instanceof Date?d=t:d=new Date(t),p.type(e,d,i,a,o),d&&p.range(e,d.getTime(),i,a,o)}}r(a)},Xt=function(e,t,r,i,o){var a=[],s=Array.isArray(t)?"array":typeof t;p.required(e,t,i,a,o,s),r(a)},$e=function(e,t,r,i,o){var a=e.type,s=[],d=e.required||!e.required&&i.hasOwnProperty(e.field);if(d){if(C(t,a)&&!e.required)return r();p.required(e,t,i,s,o,a),C(t,a)||p.type(e,t,i,s,o)}r(s)},Jt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(C(t)&&!e.required)return r();p.required(e,t,i,a,o)}r(a)},ge={string:Mt,method:Bt,number:It,boolean:Lt,regexp:Wt,integer:Nt,float:Tt,array:Dt,object:Ht,enum:Kt,pattern:Yt,date:Zt,url:$e,hex:$e,email:$e,required:Xt,any:Jt};function Ee(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var je=Ee(),de=function(){function n(t){this.rules=null,this._messages=je,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var a=r[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(r){return r&&(this._messages=He(Ee(),r)),this._messages},e.validate=function(r,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=r,d=i,f=o;if(typeof d=="function"&&(f=d,d={}),!this.rules||Object.keys(this.rules).length===0)return f&&f(null,s),Promise.resolve(s);function l(m){var y=[],u={};function q(w){if(Array.isArray(w)){var E;y=(E=y).concat.apply(E,w)}else y.push(w)}for(var v=0;v<m.length;v++)q(m[v]);y.length?(u=Ce(y),f(y,u)):f(null,s)}if(d.messages){var h=this.messages();h===je&&(h=Ee()),He(h,d.messages),d.messages=h}else d.messages=this.messages();var g={},_=d.keys||Object.keys(this.rules);_.forEach(function(m){var y=a.rules[m],u=s[m];y.forEach(function(q){var v=q;typeof v.transform=="function"&&(s===r&&(s=oe({},s)),u=s[m]=v.transform(u)),typeof v=="function"?v={validator:v}:v=oe({},v),v.validator=a.getValidationMethod(v),v.validator&&(v.field=m,v.fullField=v.fullField||m,v.type=a.getType(v),g[m]=g[m]||[],g[m].push({rule:v,value:u,source:s,field:m}))})});var c={};return $t(g,d,function(m,y){var u=m.rule,q=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");q=q&&(u.required||!u.required&&m.value),u.field=m.field;function v(P,z){return oe({},z,{fullField:u.fullField+"."+P,fullFields:u.fullFields?[].concat(u.fullFields,[P]):[P]})}function w(P){P===void 0&&(P=[]);var z=Array.isArray(P)?P:[P];!d.suppressWarning&&z.length&&n.warning("async-validator:",z),z.length&&u.message!==void 0&&(z=[].concat(u.message));var b=z.map(De(u,s));if(d.first&&b.length)return c[u.field]=1,y(b);if(!q)y(b);else{if(u.required&&!m.value)return u.message!==void 0?b=[].concat(u.message).map(De(u,s)):d.error&&(b=[d.error(u,D(d.messages.required,u.field))]),y(b);var H={};u.defaultField&&Object.keys(m.value).map(function(O){H[O]=u.defaultField}),H=oe({},H,m.rule.fields);var Y={};Object.keys(H).forEach(function(O){var M=H[O],x=Array.isArray(M)?M:[M];Y[O]=x.map(v.bind(null,O))});var Z=new n(Y);Z.messages(d.messages),m.rule.options&&(m.rule.options.messages=d.messages,m.rule.options.error=d.error),Z.validate(m.value,m.rule.options||d,function(O){var M=[];b&&b.length&&M.push.apply(M,b),O&&O.length&&M.push.apply(M,O),y(M.length?M:null)})}}var E;if(u.asyncValidator)E=u.asyncValidator(u,m.value,w,m.source,d);else if(u.validator){try{E=u.validator(u,m.value,w,m.source,d)}catch(P){console.error==null||console.error(P),d.suppressValidatorError||setTimeout(function(){throw P},0),w(P.message)}E===!0?w():E===!1?w(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):E instanceof Array?w(E):E instanceof Error&&w(E.message)}E&&E.then&&E.then(function(){return w()},function(P){return w(P)})},function(m){l(m)},s)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!ge.hasOwnProperty(r.type))throw new Error(D("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?ge.required:ge[this.getType(r)]||void 0},n}();de.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");ge[e]=t};de.warning=_t;de.messages=je;de.validators=ge;function Qt(n){const e=be(pe,null);return{mergedSize:$(()=>n.size!==void 0?n.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Gt(n){const e=be(pe,null),t=$(()=>{const{labelPlacement:c}=n;return c!==void 0?c:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),r=$(()=>t.value==="left"&&(n.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),i=$(()=>{if(t.value==="top")return;const{labelWidth:c}=n;if(c!==void 0&&c!=="auto")return _e(c);if(r.value){const m=e==null?void 0:e.maxChildLabelWidthRef.value;return m!==void 0?_e(m):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return _e(e.props.labelWidth)}),o=$(()=>{const{labelAlign:c}=n;if(c)return c;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),a=$(()=>{var c;return[(c=n.labelProps)===null||c===void 0?void 0:c.style,n.labelStyle,{width:i.value}]}),s=$(()=>{const{showRequireMark:c}=n;return c!==void 0?c:e==null?void 0:e.props.showRequireMark}),d=$(()=>{const{requireMarkPlacement:c}=n;return c!==void 0?c:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),f=G(!1),l=G(!1),h=$(()=>{const{validationStatus:c}=n;if(c!==void 0)return c;if(f.value)return"error";if(l.value)return"warning"}),g=$(()=>{const{showFeedback:c}=n;return c!==void 0?c:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),_=$(()=>{const{showLabel:c}=n;return c!==void 0?c:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:f,validationWarned:l,mergedLabelStyle:a,mergedLabelPlacement:t,mergedLabelAlign:o,mergedShowRequireMark:s,mergedRequireMarkPlacement:d,mergedValidationStatus:h,mergedShowFeedback:g,mergedShowLabel:_,isAutoLabelWidth:r}}function en(n){const e=be(pe,null),t=$(()=>{const{rulePath:a}=n;if(a!==void 0)return a;const{path:s}=n;if(s!==void 0)return s}),r=$(()=>{const a=[],{rule:s}=n;if(s!==void 0&&(Array.isArray(s)?a.push(...s):a.push(s)),e){const{rules:d}=e.props,{value:f}=t;if(d!==void 0&&f!==void 0){const l=Ge(d,f);l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l))}}return a}),i=$(()=>r.value.some(a=>a.required)),o=$(()=>i.value||n.required);return{mergedRules:r,mergedRequired:o}}const{cubicBezierEaseInOut:Ke}=at;function tn({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=Ke,leaveCubicBezier:o=Ke}={}){return[ne(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),ne(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),ne(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${o}, transform ${r} ${o}`}),ne(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const nn=T("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[T("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[k("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),k("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),T("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),A("auto-label-width",[T("form-item-label","white-space: nowrap;")]),A("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[T("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[A("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),A("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),A("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),A("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),k("text",`
 grid-area: text; 
 `),k("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),A("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[A("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),T("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),T("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),T("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[ne("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),T("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[A("warning",{color:"var(--n-feedback-text-color-warning)"}),A("error",{color:"var(--n-feedback-text-color-error)"}),tn({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ye=function(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(l){try{f(r.next(l))}catch(h){a(h)}}function d(l){try{f(r.throw(l))}catch(h){a(h)}}function f(l){l.done?o(l.value):i(l.value).then(s,d)}f((r=r.apply(n,e||[])).next())})};const rn=Object.assign(Object.assign({},fe.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object});function Ze(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r!=null&&r.then?r:(r===void 0||Ie("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ${e?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(r){Ie("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const cn=Ve({name:"FormItem",props:rn,setup(n){vt(tt,"formItems",he(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=ze(n),r=be(pe,null),i=Qt(n),o=Gt(n),{validationErrored:a,validationWarned:s}=o,{mergedRequired:d,mergedRules:f}=en(n),{mergedSize:l}=i,{mergedLabelPlacement:h,mergedLabelAlign:g,mergedRequireMarkPlacement:_}=o,c=G([]),m=G(Be()),y=r?he(r.props,"disabled"):G(!1),u=fe("Form","-form-item",nn,Qe,n,e);Xe(he(n,"path"),()=>{n.ignorePathChange||q()});function q(){c.value=[],a.value=!1,s.value=!1,n.feedback&&(m.value=Be())}const v=(...x)=>Ye(this,[...x],void 0,function*(I=null,K=()=>!0,j={suppressWarning:!0}){const{path:V}=n;j?j.first||(j.first=n.first):j={};const{value:ee}=f,re=r?Ge(r.props.model,V||""):void 0,L={},U={},X=(I?ee.filter(S=>Array.isArray(S.trigger)?S.trigger.includes(I):S.trigger===I):ee).filter(K).map((S,W)=>{const F=Object.assign({},S);if(F.validator&&(F.validator=Ze(F.validator,!1)),F.asyncValidator&&(F.asyncValidator=Ze(F.asyncValidator,!0)),F.renderMessage){const xe=`__renderMessage__${W}`;U[xe]=F.message,F.message=xe,L[xe]=F.renderMessage}return F}),J=X.filter(S=>S.level!=="warning"),se=X.filter(S=>S.level==="warning"),B={valid:!0,errors:void 0,warnings:void 0};if(!X.length)return B;const Q=V??"__n_no_path__",ie=new de({[Q]:J}),ye=new de({[Q]:se}),{validateMessages:ce}=(r==null?void 0:r.props)||{};ce&&(ie.messages(ce),ye.messages(ce));const we=S=>{c.value=S.map(W=>{const F=(W==null?void 0:W.message)||"";return{key:F,render:()=>F.startsWith("__renderMessage__")?L[F]():F}}),S.forEach(W=>{var F;!((F=W.message)===null||F===void 0)&&F.startsWith("__renderMessage__")&&(W.message=U[W.message])})};if(J.length){const S=yield new Promise(W=>{ie.validate({[Q]:re},j,W)});S!=null&&S.length&&(B.valid=!1,B.errors=S,we(S))}if(se.length&&!B.errors){const S=yield new Promise(W=>{ye.validate({[Q]:re},j,W)});S!=null&&S.length&&(we(S),B.warnings=S)}return!B.errors&&!B.warnings?q():(a.value=!!B.errors,s.value=!!B.warnings),B});function w(){v("blur")}function E(){v("change")}function P(){v("focus")}function z(){v("input")}function b(x,I){return Ye(this,void 0,void 0,function*(){let K,j,V,ee;return typeof x=="string"?(K=x,j=I):x!==null&&typeof x=="object"&&(K=x.trigger,j=x.callback,V=x.shouldRuleBeApplied,ee=x.options),yield new Promise((re,L)=>{v(K,V,ee).then(({valid:U,errors:X,warnings:J})=>{U?(j&&j(void 0,{warnings:J}),re({warnings:J})):(j&&j(X,{warnings:J}),L(X))})})})}Pe(ot,{path:he(n,"path"),disabled:y,mergedSize:i.mergedSize,mergedValidationStatus:o.mergedValidationStatus,restoreValidation:q,handleContentBlur:w,handleContentChange:E,handleContentFocus:P,handleContentInput:z});const H={validate:b,restoreValidation:q,internalValidate:v},Y=G(null);st(()=>{if(!o.isAutoLabelWidth.value)return;const x=Y.value;if(x!==null){const I=x.style.whiteSpace;x.style.whiteSpace="nowrap",x.style.width="",r==null||r.deriveMaxChildLabelWidth(Number(getComputedStyle(x).width.slice(0,-2))),x.style.whiteSpace=I}});const Z=$(()=>{var x;const{value:I}=l,{value:K}=h,j=K==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:V},self:{labelTextColor:ee,asteriskColor:re,lineHeight:L,feedbackTextColor:U,feedbackTextColorWarning:X,feedbackTextColorError:J,feedbackPadding:se,labelFontWeight:B,[N("labelHeight",I)]:Q,[N("blankHeight",I)]:ie,[N("feedbackFontSize",I)]:ye,[N("feedbackHeight",I)]:ce,[N("labelPadding",j)]:we,[N("labelTextAlign",j)]:S,[N(N("labelFontSize",K),I)]:W}}=u.value;let F=(x=g.value)!==null&&x!==void 0?x:S;return K==="top"&&(F=F==="right"?"flex-end":"flex-start"),{"--n-bezier":V,"--n-line-height":L,"--n-blank-height":ie,"--n-label-font-size":W,"--n-label-text-align":F,"--n-label-height":Q,"--n-label-padding":we,"--n-label-font-weight":B,"--n-asterisk-color":re,"--n-label-text-color":ee,"--n-feedback-padding":se,"--n-feedback-font-size":ye,"--n-feedback-height":ce,"--n-feedback-text-color":U,"--n-feedback-text-color-warning":X,"--n-feedback-text-color-error":J}}),O=t?et("form-item",$(()=>{var x;return`${l.value[0]}${h.value[0]}${((x=g.value)===null||x===void 0?void 0:x[0])||""}`}),Z,n):void 0,M=$(()=>h.value==="left"&&_.value==="left"&&g.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:Y,mergedClsPrefix:e,mergedRequired:d,feedbackId:m,renderExplains:c,reverseColSpace:M},o),i),H),{cssVars:t?void 0:Z,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender})},render(){const{$slots:n,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:r,mergedRequireMarkPlacement:i,onRender:o}=this,a=r!==void 0?r:this.mergedRequired;o==null||o();const s=()=>{const d=this.$slots.label?this.$slots.label():this.label;if(!d)return null;const f=R("span",{class:`${e}-form-item-label__text`},d),l=a?R("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?" *":"* "):i==="right-hanging"&&R("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:h}=this;return R("label",Object.assign({},h,{class:[h==null?void 0:h.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[l,f]:[f,l])};return R("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&s(),R("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},n),this.mergedShowFeedback?R("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${e}-form-item-feedback-wrapper`,this.feedbackClass]},R(lt,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:d}=this;return ae(n.feedback,f=>{var l;const{feedback:h}=this,g=f||h?R("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},f||h):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:_,render:c})=>R("div",{key:_,class:`${e}-form-item-feedback__line`},c())):null;return g?d==="warning"?R("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},g):d==="error"?R("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},g):d==="success"?R("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},g):R("div",{key:"controlled-default",class:`${e}-form-item-feedback`},g):null})}})):null)}});function an(n){const{primaryColor:e,opacityDisabled:t,borderRadius:r,textColor3:i}=n;return Object.assign(Object.assign({},ft),{iconColor:i,textColor:"white",loadingColor:e,opacityDisabled:t,railColor:"rgba(0, 0, 0, .14)",railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${ct(e,{alpha:.2})}`})}const on={name:"Switch",common:dt,self:an},sn=T("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[k("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),k("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),k("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),T("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Le({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),k("checked, unchecked",`
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
 `),k("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),k("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),ne("&:focus",[k("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),A("round",[k("rail","border-radius: calc(var(--n-rail-height) / 2);",[k("button","border-radius: calc(var(--n-button-height) / 2);")])]),We("disabled",[We("icon",[A("rubber-band",[A("pressed",[k("rail",[k("button","max-width: var(--n-button-width-pressed);")])]),k("rail",[ne("&:active",[k("button","max-width: var(--n-button-width-pressed);")])]),A("active",[A("pressed",[k("rail",[k("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),k("rail",[ne("&:active",[k("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),A("active",[k("rail",[k("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),k("rail",`
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
 `,[k("button-icon",`
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
 `,[Le()]),k("button",`
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
 `)]),A("active",[k("rail","background-color: var(--n-rail-color-active);")]),A("loading",[k("rail",`
 cursor: wait;
 `)]),A("disabled",[k("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ln=Object.assign(Object.assign({},fe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ue;const un=Ve({name:"Switch",props:ln,setup(n){ue===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ue=CSS.supports("width","max(1px)"):ue=!1:ue=!0);const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=ze(n),r=fe("Switch","-switch",sn,on,n,e),i=ut(n),{mergedSizeRef:o,mergedDisabledRef:a}=i,s=G(n.defaultValue),d=he(n,"value"),f=ht(d,s),l=$(()=>f.value===n.checkedValue),h=G(!1),g=G(!1),_=$(()=>{const{railStyle:b}=n;if(b)return b({focused:g.value,checked:l.value})});function c(b){const{"onUpdate:value":H,onChange:Y,onUpdateValue:Z}=n,{nTriggerFormInput:O,nTriggerFormChange:M}=i;H&&qe(H,b),Z&&qe(Z,b),Y&&qe(Y,b),s.value=b,O(),M()}function m(){const{nTriggerFormFocus:b}=i;b()}function y(){const{nTriggerFormBlur:b}=i;b()}function u(){n.loading||a.value||(f.value!==n.checkedValue?c(n.checkedValue):c(n.uncheckedValue))}function q(){g.value=!0,m()}function v(){g.value=!1,y(),h.value=!1}function w(b){n.loading||a.value||b.key===" "&&(f.value!==n.checkedValue?c(n.checkedValue):c(n.uncheckedValue),h.value=!1)}function E(b){n.loading||a.value||b.key===" "&&(b.preventDefault(),h.value=!0)}const P=$(()=>{const{value:b}=o,{self:{opacityDisabled:H,railColor:Y,railColorActive:Z,buttonBoxShadow:O,buttonColor:M,boxShadowFocus:x,loadingColor:I,textColor:K,iconColor:j,[N("buttonHeight",b)]:V,[N("buttonWidth",b)]:ee,[N("buttonWidthPressed",b)]:re,[N("railHeight",b)]:L,[N("railWidth",b)]:U,[N("railBorderRadius",b)]:X,[N("buttonBorderRadius",b)]:J},common:{cubicBezierEaseInOut:se}}=r.value;let B,Q,ie;return ue?(B=`calc((${L} - ${V}) / 2)`,Q=`max(${L}, ${V})`,ie=`max(${U}, calc(${U} + ${V} - ${L}))`):(B=Se((te(L)-te(V))/2),Q=Se(Math.max(te(L),te(V))),ie=te(L)>te(V)?U:Se(te(U)+te(V)-te(L))),{"--n-bezier":se,"--n-button-border-radius":J,"--n-button-box-shadow":O,"--n-button-color":M,"--n-button-width":ee,"--n-button-width-pressed":re,"--n-button-height":V,"--n-height":Q,"--n-offset":B,"--n-opacity-disabled":H,"--n-rail-border-radius":X,"--n-rail-color":Y,"--n-rail-color-active":Z,"--n-rail-height":L,"--n-rail-width":U,"--n-width":ie,"--n-box-shadow-focus":x,"--n-loading-color":I,"--n-text-color":K,"--n-icon-color":j}}),z=t?et("switch",$(()=>o.value[0]),P,n):void 0;return{handleClick:u,handleBlur:v,handleFocus:q,handleKeyup:w,handleKeydown:E,mergedRailStyle:_,pressed:h,mergedClsPrefix:e,mergedValue:f,checked:l,mergedDisabled:a,cssVars:t?void 0:P,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:n,mergedDisabled:e,checked:t,mergedRailStyle:r,onRender:i,$slots:o}=this;i==null||i();const{checked:a,unchecked:s,icon:d,"checked-icon":f,"unchecked-icon":l}=o,h=!(Fe(d)&&Fe(f)&&Fe(l));return R("div",{role:"switch","aria-checked":t,class:[`${n}-switch`,this.themeClass,h&&`${n}-switch--icon`,t&&`${n}-switch--active`,e&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},R("div",{class:`${n}-switch__rail`,"aria-hidden":"true",style:r},ae(a,g=>ae(s,_=>g||_?R("div",{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},R("div",{class:`${n}-switch__rail-placeholder`},R("div",{class:`${n}-switch__button-placeholder`}),g),R("div",{class:`${n}-switch__rail-placeholder`},R("div",{class:`${n}-switch__button-placeholder`}),_)):null)),R("div",{class:`${n}-switch__button`},ae(d,g=>ae(f,_=>ae(l,c=>R(mt,null,{default:()=>this.loading?R(gt,{key:"loading",clsPrefix:n,strokeWidth:20}):this.checked&&(_||g)?R("div",{class:`${n}-switch__button-icon`,key:_?"checked-icon":"icon"},_||g):!this.checked&&(c||g)?R("div",{class:`${n}-switch__button-icon`,key:c?"unchecked-icon":"icon"},c||g):null})))),ae(a,g=>g&&R("div",{key:"checked",class:`${n}-switch__checked`},g)),ae(s,g=>g&&R("div",{key:"unchecked",class:`${n}-switch__unchecked`},g)))))}});export{un as _,cn as a,fn as b};
