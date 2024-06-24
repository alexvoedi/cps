import{_ as P}from"./default-layout-DkrCzS9J.js";import{u as D,_ as R}from"./useBingo-DzIZgSzZ.js";import{i as F,g as j,t as A,d as v,r as w,o as f,h as z,a as r,w as o,e as m,j as M,F as W,b as e,f as n,B as $,_ as Z,k as E,l as y,m as S,c as x,n as V}from"./index-BU9n6QeP.js";import"./Layout-GbEoal-1.js";import"./_commonjsHelpers-C4iS2aBk.js";function C(){const s=F(j,null);return s===null&&A("use-dialog","No outer <n-dialog-provider /> founded."),s}const I=e("span",{class:"ico-mdi-help"},null,-1),J=e("div",{class:"space-y-4"},[e("p",null," Ziel ist es, eine Reihe, Spalte oder Diagonale zu füllen. "),e("p",null,[n(" Ein Feld als "),e("strong",{class:"text-green-700"},"erledigt"),n(" oder "),e("strong",{class:"text-red-700"},"fehlgeschlagen"),n(" markiert werden. Außerdem können "),e("strong",{class:"text-blue-600"},"persönliche Ziele"),n(" markiert werden. ")]),e("div",null,[e("h3",{class:"font-bold"}," Allgemeine Regeln: "),e("ul",{class:"list-disc pl-6"},[e("li",null,"Das Auktionshaus darf nicht verwendet werden."),e("li",null,"Es dürfen keine Gegenstände oder Gold von anderne Spielern gehandelt werden."),e("li",null,"Den Hinweisen ist Folge zu leisten.")])]),e("div",null,[e("h3",{class:"font-bold"}," Tastenkürzel: "),e("p",null,"Durch zeigen auf ein Feld und drücken der entsprechenden Taste können die Felder markiert werden."),e("ul",{class:"list-disc pl-6"},[e("li",null,[e("kbd",null,[e("span",{class:"ico-mdi-mouse"}),n(" Links")]),n("/"),e("kbd",null,"s"),n(" - Status durchschalten ")]),e("li",null,[e("kbd",null,[e("span",{class:"ico-mdi-mouse"}),n(" Rechts")]),n("/"),e("kbd",null,"p"),n(" - Priorität durchschalten ")]),e("li",null,[e("kbd",null,[e("span",{class:"ico-mdi-mouse"}),n(" Mitte")]),n("/"),e("kbd",null,"r"),n(" - Status zurücksetzen ")]),e("li",null,[e("kbd",null,"d"),n(" - Status auf "),e("strong",{class:"text-green-800"},"erledigt"),n(" setzen ")]),e("li",null,[e("kbd",null,"f"),n(" - Status auf "),e("strong",{class:"text-red-900"},"fehlgeschlagen"),n(" setzen ")]),e("li",null,[e("kbd",null,"u"),n(" - Status zurücksetzen ")]),e("li",null,[e("kbd",null,"1"),n(" - Priorität zurücksetzen ")]),e("li",null,[e("kbd",null,"2"),n(" - Priorität auf "),e("strong",{class:"text-blue-400"},"mittel"),n(" setzen ")]),e("li",null,[e("kbd",null,"3"),n(" - Priorität auf "),e("strong",{class:"text-blue-700"},"hoch"),n(" setzen ")]),e("li",null,[e("kbd",null,"r"),n(" - Alles zurücksetzen ")]),e("li",null,[e("kbd",null,[e("span",{class:"ico-mdi-arrow-up"})]),n(" - Zähler erhöhen ")]),e("li",null,[e("kbd",null,[e("span",{class:"ico-mdi-arrow-down"})]),n(" - Zähler verringern ")])])])],-1),L=v({__name:"bingo-help",setup(s){const t=w(!1);return(a,l)=>{const c=$,g=Z,d=E;return f(),z(W,null,[r(c,{tertiary:"",circle:"",onClick:l[0]||(l[0]=_=>t.value=!0)},{icon:o(()=>[I]),_:1}),r(d,{show:m(t),"onUpdate:show":l[2]||(l[2]=_=>M(t)?t.value=_:null)},{default:o(()=>[r(g,{title:"Bingo",class:"max-w-900px",closable:"",onClose:l[1]||(l[1]=_=>t.value=!1)},{"header-extra":o(()=>[]),footer:o(()=>[]),default:o(()=>[J]),_:1})]),_:1},8,["show"])],64)}}});function U(){const s=w(0),t=w(null);let a=0,l=0,c=0;const g=()=>{t.value||(a=Date.now(),t.value=setInterval(()=>{l=Date.now(),s.value+=l-a,a=l},100))},d=()=>{t.value&&(c=Date.now(),s.value+=c-a,clearInterval(t.value),t.value=null)},_=()=>{d(),s.value=0},k=y(()=>{const p=Math.floor(s.value/36e5),i=Math.floor(s.value/6e4)%60,b=Math.floor(s.value/1e3)%60,h=Math.floor(s.value/100)%10;return`${String(p).padStart(2,"0")}:${String(i).padStart(2,"0")}:${String(b).padStart(2,"0")}.${String(h)}`}),u=y(()=>t.value!==null);return{time:s,formattedTime:k,running:u,startTimer:g,stopTimer:d,resetTimer:_}}const q={class:"flex items-center justify-center gap-4"},G=e("span",{class:"ico-mdi-replay"},null,-1),H={class:"font-mono text-xl"},K=e("span",{class:"ico-mdi-pause"},null,-1),O=e("span",{class:"ico-mdi-play"},null,-1),Q=v({__name:"bingo-timer",setup(s){const{formattedTime:t,running:a,startTimer:l,stopTimer:c,resetTimer:g}=U(),d=C();function _(){d.warning({title:"Timer zurücksetzen",content:"Willst du wirklich den Timer zurücksetzen?",onPositiveClick:()=>{g()},onNegativeClick:()=>{},positiveText:"Ja!",negativeText:"Nein, lieber nicht"})}return(k,u)=>{const p=$;return f(),z("div",q,[r(p,{type:"warning",circle:"",quaternary:"",onClick:u[0]||(u[0]=i=>_())},{icon:o(()=>[G]),_:1}),e("div",H,S(m(t)),1),m(a)?(f(),x(p,{key:0,secondary:"",type:"success",circle:"",onClick:u[1]||(u[1]=i=>m(c)())},{icon:o(()=>[K]),_:1})):(f(),x(p,{key:1,tertiary:"",circle:"",onClick:u[2]||(u[2]=i=>m(l)())},{icon:o(()=>[O]),_:1}))])}}}),X={class:"flex flex-col h-full"},Y={class:"p-8 bg-dark-9 bg-opacity-90"},ee={class:"mx-auto container flex justify-between items-center"},ne={class:"text-4xl"},te=e("span",null,"Bingo",-1),le={class:"text-xs"},se={class:"flex gap-4 items-center"},oe=e("span",{class:"ico-mdi-open-in-new"},null,-1),ie=e("span",null,"Popout",-1),re=e("span",{class:"ico-mdi-delete"},null,-1),ae=e("span",null,"Zurücksetzen",-1),ce=e("span",{class:"ico-mdi-dice"},null,-1),ue=e("span",null,"Randomize",-1),de={class:"overflow-hidden p-4 m-auto"},_e=v({__name:"bingo-game",setup(s){const{cells:t,size:a,resetCells:l,mostRecentVersion:c,newSeed:g}=D(),d=C();function _(){const p=new URL("/bingo/popout",window.location.origin),i=new URLSearchParams(window.location.search);window.open(`${p.origin}/cps${p.pathname}?${i}`,"WoW Bingo","width=800,height=800,location=no,scrollbars=no,status=no,titlebar=no,toolbar=no")}function k(){d.warning({title:"Spieldaten zurücksetzen",content:"Willst du wirklich alle Spieldaten zurücksetzen?",onPositiveClick:()=>{l()},onNegativeClick:()=>{},positiveText:"Jop!",negativeText:"Nee, lieber nicht"})}function u(){d.warning({title:"Neuer Seed",content:"Willst du wirklich einen neuen Seed generieren?",onPositiveClick:()=>{g()},onNegativeClick:()=>{},positiveText:"Jop!",negativeText:"Nee, lieber nicht"})}return(p,i)=>{const b=Q,h=$,N=L,B=R;return f(),z("div",X,[e("div",Y,[e("div",ee,[e("h1",ne,[te,n(),e("span",le,"v"+S(m(c)),1)]),e("div",null,[r(b)]),e("div",se,[r(h,{tertiary:"",onClick:i[0]||(i[0]=T=>_())},{icon:o(()=>[oe]),default:o(()=>[ie]),_:1}),r(h,{type:"warning",tertiary:"",onClick:i[1]||(i[1]=T=>k())},{icon:o(()=>[re]),default:o(()=>[ae]),_:1}),r(h,{type:"warning",tertiary:"",onClick:i[2]||(i[2]=T=>u())},{icon:o(()=>[ce]),default:o(()=>[ue]),_:1}),r(N)])])]),e("div",de,[r(B,{cells:m(t),size:Number(m(a))},null,8,["cells","size"])])])}}}),ke=v({__name:"bingo",setup(s){return V("CPS | Bingo"),(t,a)=>{const l=_e,c=P;return f(),x(c,null,{default:o(()=>[r(l)]),_:1})}}});export{ke as default};
