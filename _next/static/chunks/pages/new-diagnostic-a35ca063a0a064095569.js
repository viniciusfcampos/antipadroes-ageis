_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"1L54":function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n("PDDv"),r=n("HltC");function c(e){return Object(a.a)("MuiFormControlLabel",e)}const o=Object(r.a)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]);t.a=o},"3sWg":function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"m10.88 21.94 5.53-5.54c.37-.37.58-.88.58-1.41V5c0-1.1-.9-2-2-2H6c-.8 0-1.52.48-1.83 1.21L.91 11.82C.06 13.8 1.51 16 3.66 16h5.65l-.95 4.58c-.1.5.05 1.01.41 1.37.59.58 1.53.58 2.11-.01zM21 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ThumbDownAltRounded");t.default=o},"5lnm":function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("o0o1"),c=n.n(r),o=n("KQm4"),i=n("HaE+"),u=n("rePB"),s=n("DM5o"),l=n.n(s),d=n("qAqx"),p=n("MGIy"),f=n("O3LO"),m=n("O8tK"),b=n("5I82"),g=n("H/m6"),h=n("w+1Z"),O=n("jOs7"),v=n("8Kt/"),j=n.n(v),y=n("q1tI"),w=n.n(y),x=n("vOnD"),C=n("OwGX"),P=n.n(C),_=n("OGDC"),k=n("CjiS"),N=n("iuhU"),S=n("Gqia"),I=n("tSRN"),M=n("dCu3"),E=n.n(M),D=n("qgBN"),R=n.n(D),F=w.a.createElement,B=Object(x.c)(O.a).withConfig({displayName:"Carousel__Container",componentId:"sc-1xa0vtr-0"})(["display:grid;grid-gap:4rem;"]),L=Object(x.c)(O.a).withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-1xa0vtr-1"})(["display:grid;grid-auto-flow:column;transition:all 0.3s ease-in-out;transform:translateX(0);width:calc(300px + 32px);& > *{transform:scale(0.75);margin:0 -16px;opacity:0.5;transition:all 0.3s ease-in-out;user-select:none;&.current{transform:scale(1);margin:0 16px;opacity:1;}}"]),q=Object(x.c)(O.a).withConfig({displayName:"Carousel__Controls",componentId:"sc-1xa0vtr-2"})(["display:grid;grid-auto-flow:column;justify-content:space-between;user-select:none;margin:0 auto;width:300px;color:#fff;align-items:center;.MuiSvgIcon-root{fill:white;}.MuiIconButton-root.Mui-disabled{.MuiSvgIcon-root{opacity:0.5;}}"]),T=function(e){var t=e.position,n=e.handleChangePosition,a=e.children;return F(B,null,F(L,{style:{transform:"translateX(".concat(-225*t+-43*t,"px)")}},w.a.Children.map(a,(function(e,n){return w.a.cloneElement(e,{className:"".concat(n===t?"current":"")})}))),F(q,null,F(_.a,{onClick:function(){return n(-1)},disabled:0===t},F(E.a,null)),F(S.a,null,t+1,"/",w.a.Children.count(a)),F(_.a,{onClick:function(){return n(1)},disabled:t===w.a.Children.count(a)-1},F(R.a,null))))},z=n("d5Jl"),A=n.n(z),K=w.a.createElement,H=Object(x.c)(d.a).withConfig({displayName:"FinalCard__Container",componentId:"sc-6x2mts-0"})(["display:grid;grid-auto-rows:1fr auto;width:320px;"]),U=Object(x.c)(O.a).withConfig({displayName:"FinalCard__Message",componentId:"sc-6x2mts-1"})(["display:grid;align-content:center;justify-content:center;text-align:center;justify-items:center;grid-gap:2rem;"]),G=Object(x.c)(A.a).withConfig({displayName:"FinalCard__Check",componentId:"sc-6x2mts-2"})(["width:2rem;height:2rem;"]),X=function(e){var t=e.message,n=e.action,a=e.color,r=void 0===a?"primary":a,c=e.onFinish,o=e.className;return K(H,{className:o},K(U,null,K(G,{color:r}),K(S.a,null,t)),K(b.a,{onClick:c,color:r,variant:"contained"},n))},V=w.a.createElement,$=Object(x.c)(O.a).withConfig({displayName:"CardHeader__Container",componentId:"sc-1vbo00x-0"})(["padding:0.5rem 0;"]),J=function(e){var t=e.practice,n=e.index,a=e.className;return V($,{className:a},V(S.a,{variant:"caption"},"#",n+1," - ",null===t||void 0===t?void 0:t.name))},W=w.a.createElement,Z=Object(x.c)(d.a).withConfig({displayName:"QuestionCard__Container",componentId:"sc-1opm0cc-0"})(["width:300px;height:350px;display:grid;grid-gap:1rem;grid-template-rows:auto 1fr auto;"]),Q=Object(x.d)(Object(x.c)(O.a).withConfig({displayName:"QuestionCard__Buttons",componentId:"sc-1opm0cc-1"})(["display:grid;grid-gap:1rem;grid-auto-flow:column;margin:0 -2rem -1.5rem;padding:1rem 2rem;background-color:",";"],(function(e){return e.theme.colors.lightBackground}))),Y=function(e){var t=e.id,n=e.identificationStrategy,a=e.practice,r=e.index,c=e.answer,o=e.handleOnAnswer,i=e.className,u=function(e){o(t,e)};return W(Z,{className:i},W(J,{index:r,practice:a}),W(S.a,{variant:"body1"},n),W(Q,null,W(b.a,{variant:!0===c?"outlined":"text",onClick:function(){return u(!0)}},"Sim"),W(b.a,{variant:!1===c?"outlined":"text",onClick:function(){return u(!1)}},"N\xe3o")))},ee=w.a.createElement;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=Object(x.c)(O.a).withConfig({displayName:"DiagnosticTab__Container",componentId:"sc-4sdeqk-0"})(["height:100%;display:grid;align-items:center;align-content:center;justify-items:center;grid-gap:4rem;overflow:hidden;.MuiIconButton-root{.MuiSvgIcon-root{fill:white;}}"]),re=Object(x.c)(O.a).withConfig({displayName:"DiagnosticTab__Header",componentId:"sc-4sdeqk-1"})(["text-align:center;user-select:none;height:80px;.MuiTypography-root{color:white;}"]),ce=function(e){var t,n,r=e.team,o=e.practices,u=e.onFinish,s=Object(y.useState)(0),l=s[0],d=s[1],p=Object(y.useState)([]),f=p[0],m=p[1];Object(y.useEffect)((function(){d(0),m(o?b():[])}),[r,o]);var b=function(){var e=[];return o.forEach((function(t){t.antipatterns.forEach((function(n){e.push(ne(ne({},n),{},{practice:t,answer:null}))}))})),e},g=function(e,t){var n=f.map((function(n){return n.id===e?ne(ne({},n),{},{answer:t}):ne({},n)}));m(n),h(1)},h=function(e){var t=e+l;t>=0&&t<=f.length&&d(t)},O=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.createDiagnostic(r,f);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return ee(ae,null,ee(re,null,f[l]&&ee(w.a.Fragment,null,ee(S.a,{variant:"h4"},null===(t=f[l])||void 0===t?void 0:t.practice.name),ee(S.a,{variant:"caption"},null===(n=f[l])||void 0===n?void 0:n.practice.antipatterns.length," perguntas"))),ee(T,{position:l,handleChangePosition:h},f.map((function(e,t){return ee(Y,Object(a.a)({},e,{index:t,answer:e.answer,handleOnAnswer:g}))})),ee(X,{message:"Deseja finalizar o diagn\xf3stico?",action:"Finalizar",onFinish:O})))},oe=n("nOHt"),ie=n("N6p1"),ue=n.n(ie),se=n("3sWg"),le=n.n(se),de=w.a.createElement,pe=Object(x.c)(d.a).withConfig({displayName:"ResultCard__Container",componentId:"sc-1bny057-0"})(["width:300px;height:540px;display:grid;grid-template-rows:auto auto 1fr auto;.MuiTypography-caption{margin-bottom:1rem;color:gray;}"]),fe=Object(x.c)(O.a).withConfig({displayName:"ResultCard__Content",componentId:"sc-1bny057-1"})(["overflow:auto;margin:0 -2rem;padding:0 2rem 2rem;"]),me=Object(x.c)(S.a).withConfig({displayName:"ResultCard__Action",componentId:"sc-1bny057-2"})(["margin-top:2rem;font-weight:500;"]),be=Object(x.d)(Object(x.c)(O.a).withConfig({displayName:"ResultCard__Buttons",componentId:"sc-1bny057-3"})(["display:grid;grid-gap:1rem;grid-auto-flow:column;margin:0 -2rem -1.5rem;padding:1rem 2rem;background-color:",";"],(function(e){return e.theme.colors.lightBackground}))),ge=function(e){var t=e.id,n=e.name,a=e.description,r=e.eliminationStrategy,c=e.practice,o=e.useful,i=e.index,u=e.handleOnAnswer,s=e.className,l=function(e){u(t,e)};return de(pe,{className:s},de(J,{index:i,practice:c}),de(S.a,{variant:"h6"},n),de(fe,null,de(S.a,{variant:"caption"},a),de(me,null,"A\xe7\xe3o:"),de(S.a,{variant:"body2"},r)),de(be,null,de(b.a,{startIcon:de(ue.a,null),variant:!0===o?"outlined":"text",onClick:function(){return l(!0)}},"\xdatil"),de(b.a,{startIcon:de(le.a,null),variant:!1===o?"outlined":"text",onClick:function(){return l(!1)}},"N\xe3o")))},he=w.a.createElement;function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=Object(x.c)(O.a).withConfig({displayName:"ResultsTab__Container",componentId:"sc-1u7bnki-0"})(["height:100%;display:grid;align-items:center;align-content:center;justify-items:center;grid-gap:4rem;.MuiIconButton-root{.MuiSvgIcon-root{fill:white;}}"]),ye=Object(x.c)(O.a).withConfig({displayName:"ResultsTab__Header",componentId:"sc-1u7bnki-1"})(["text-align:center;user-select:none;height:100px;max-width:580px;.MuiTypography-root{color:white;}"]),we=function(e){var t=e.team,n=e.teamAntipatterns,r=Object(oe.useRouter)(),u=Object(y.useState)(0),s=u[0],l=u[1],d=Object(y.useState)(Object(o.a)(n)),p=d[0],f=d[1];Object(y.useEffect)((function(){return f(Object(o.a)(n))}),[n]);var m=function(e,t){var n=p.map((function(n){return n.id===e?ve(ve({},n),{},{useful:t}):ve({},n)}));f(n),b(1)},b=function(e){var t=e+s;t>=0&&t<=p.length&&l(t)},g=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.createDiagnostic(t,p);case 2:r.push("diagnostics/".concat(t.id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return he(je,null,he(ye,null,he(S.a,{variant:"h4"},"Resultado"),he(S.a,{variant:"caption"},"Veja abaixo os antipadr\xf5es que possivelmente ocorrem em seu time e formas de elimin\xe1-lo. Avalie se voc\xea considera que as sugest\xf5es abaixo podem ser \xfateis para seu contexto ou n\xe3o.")),he(T,{position:s,handleChangePosition:b},p.map((function(e,t){return he(ge,Object(a.a)({},e,{index:t,handleOnAnswer:m}))})),he(X,{message:"Agora voc\xea pode acompanhar o progresso das a\xe7\xf5es mapeadas por meio de um Kanban.",action:"Salvar e Acessar Kanban",color:"success",onFinish:g})))},xe=w.a.createElement,Ce=Object(x.c)(O.a).withConfig({displayName:"DiagnosticModal__Container",componentId:"sc-1hkdqoh-0"})(["height:100%;width:100vw;grid-gap:4rem;position:relative;.MuiIconButton-root{.MuiSvgIcon-root{fill:white;}}"]),Pe=Object(x.c)(O.a).withConfig({displayName:"DiagnosticModal__Tabs",componentId:"sc-1hkdqoh-1"})(["display:grid;grid-template-columns:100vw 100vw;position:absolute;height:100vh;left:0;transition:left 0.3s ease-in-out;&.showResults{left:-100vw;}"]),_e=Object(x.c)(_.a).withConfig({displayName:"DiagnosticModal__CancelButton",componentId:"sc-1hkdqoh-2"})(["position:absolute;top:1rem;right:1rem;z-index:1000;"]),ke=function(e){var t=e.open,n=e.team,a=e.practices,r=e.handleClose,c=Object(y.useState)([]),o=c[0],i=c[1],u=Object(y.useState)(!1),s=u[0],l=u[1];Object(y.useEffect)((function(){l(!1)}),[t]);return xe(k.a,{open:t},xe(Ce,null,xe(_e,{onClick:function(){return r()}},xe(P.a,null)),xe(Pe,{className:Object(N.a)({showResults:s})},xe(ce,{team:n,practices:a,onFinish:function(e){i(e),l(!0)}}),xe(we,{team:n,teamAntipatterns:o}))))},Ne=n("3H7G"),Se=n("bXnD"),Ie=n("iEmJ"),Me=w.a.createElement;function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=Object(x.c)(O.a).withConfig({displayName:"new-diagnostic__Form",componentId:"sc-su4syg-0"})(["display:grid;grid-gap:1rem;margin:2rem auto;max-width:400px;"]),Fe=Object(x.c)(O.a).withConfig({displayName:"new-diagnostic__Practices",componentId:"sc-su4syg-1"})(["display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;margin-bottom:2rem;"]);t.default=function(){var e=Object(y.useState)([]),t=e[0],n=e[1],r=Object(y.useState)(null),s=r[0],O=r[1],v=Object(y.useState)({}),x=v[0],C=v[1],P=Object(y.useState)({}),_=P[0],k=P[1],N=Object(y.useState)({open:!1}),S=N[0],I=N[1];Object(y.useEffect)((function(){Se.a.getPractices().then((function(e){n(e),M(e)}))}),[]);var M=function(e){var t=e.reduce((function(e,t){return e[t.id]=!0,e}),{});O(t)},E=function(e){var t=e.target,n=t.name,a=t.checked,r=De(De({},s),{},Object(u.a)({},n,a));O(r)},D=function(e){var t=e.target,n=t.name,a=t.value;C(De(De({},x),{},Object(u.a)({},n,a)))},R=function(){var e=function(e){return 0===(null===e||void 0===e?void 0:e.trim().length)},t=!e(x.name)&&!e(x.description),n=Object.values(s).some((function(e){return e}));return t&&n},F=function(){var e=Object(i.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R()){e.next=3;break}return k({open:!0,message:"Preencha as informa\xe7\xf5es corretamente e selecione pelo menos uma pr\xe1tica."}),e.abrupt("return");case 3:return e.next=5,Ie.a.addTeam(x);case 5:n=e.sent,a=Object.keys(s).filter((function(e){return s[e]})).reduce((function(e,n){return[].concat(Object(o.a)(e),[t.find((function(e){return e.id===n}))])}),[]),I({open:!0,team:De(De({},x),{},{id:n}),practices:a}),M(t),C({name:null,description:null});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Me(w.a.Fragment,null,Me(j.a,null,Me("title",null,"Novo Diagn\xf3stico")),Me(Ne.a,{icon:Me(l.a,null),title:"Novo Diagn\xf3stico"}),Me(d.a,null,Me(Re,null,Me(p.a,{name:"name",label:"Nome do Time",value:x.name,onChange:D,autoFocus:!0}),Me(p.a,{name:"description",label:"Descri\xe7\xe3o do Produto",placeholder:"Sistema de planejamento log\xedstico de uma empresa atacadista",value:x.description,onChange:D,rows:4,multiline:!0}),Me(Fe,null,s&&t.map((function(e){return Me(f.a,{key:e.id,label:e.name,control:Me(m.a,{name:e.id,checked:s[e.id],onChange:E})})}))),Me(b.a,{variant:"contained",color:"primary",onClick:F},"Iniciar"))),Me(ke,Object(a.a)({},S,{handleClose:function(){return I({open:!1})}})),Me(g.a,{open:_.open,onClose:function(){return k({open:!1})},anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:6e3},Me(h.a,{severity:"error"},_.message)))}},DM5o:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddCircleRounded");t.default=o},Epe3:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e[e.backlog=0]="backlog",e[e.prioritazed=1]="prioritazed",e[e.doing=2]="doing",e[e.done=3]="done"}(a||(a={}))},Gcu1:function(e,t,n){"use strict";t.a=function(e,t,n,a,r){return null}},N6p1:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"M13.12 2.06 7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"}),"ThumbUpAltRounded");t.default=o},NoS8:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},O3LO:function(e,t,n){"use strict";var a=n("EiBv"),r=n("NFhf"),c=n("q1tI"),o=(n("17x9"),n("iuhU")),i=n("+NmR"),u=n("7EOP"),s=n("Gqia"),l=n("xeev"),d=n("Vn7y"),p=n("tCRK"),f=n("1L54"),m=n("nKUr");const b=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],g=Object(d.a)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${f.a.label}`]:t.label},t.root,t[`labelPlacement${Object(l.a)(n.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>Object(r.a)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${f.a.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${f.a.label}`]:{[`&.${f.a.disabled}`]:{color:e.palette.text.disabled}}})),h=c.forwardRef((function(e,t){const n=Object(p.a)({props:e,name:"MuiFormControlLabel"}),{className:d,componentsProps:h={},control:O,disabled:v,disableTypography:j,label:y,labelPlacement:w="end"}=n,x=Object(a.a)(n,b),C=Object(u.a)();let P=v;"undefined"===typeof P&&"undefined"!==typeof O.props.disabled&&(P=O.props.disabled),"undefined"===typeof P&&C&&(P=C.disabled);const _={disabled:P};["checked","name","onChange","value","inputRef"].forEach(e=>{"undefined"===typeof O.props[e]&&"undefined"!==typeof n[e]&&(_[e]=n[e])});const k=Object(r.a)({},n,{disabled:P,label:y,labelPlacement:w}),N=(e=>{const{classes:t,disabled:n,labelPlacement:a}=e,r={root:["root",n&&"disabled",`labelPlacement${Object(l.a)(a)}`],label:["label",n&&"disabled"]};return Object(i.a)(r,f.b,t)})(k);return Object(m.jsxs)(g,Object(r.a)({className:Object(o.a)(N.root,d),ownerState:k,ref:t},x,{children:[c.cloneElement(O,_),y.type===s.a||j?y:Object(m.jsx)(s.a,Object(r.a)({component:"span",className:N.label},h.typography,{children:y}))]}))}));t.a=h},OwGX:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=o},Udd0:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return r.a})),n.d(t,"createSvgIcon",(function(){return c.a})),n.d(t,"debounce",(function(){return o.a})),n.d(t,"deprecatedPropType",(function(){return i})),n.d(t,"isMuiElement",(function(){return u.a})),n.d(t,"ownerDocument",(function(){return s.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return p})),n.d(t,"unstable_useEnhancedEffect",(function(){return f.a})),n.d(t,"unstable_useId",(function(){return m.a})),n.d(t,"unsupportedProp",(function(){return b.a})),n.d(t,"useControlled",(function(){return g.a})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return O.a})),n.d(t,"useIsFocusVisible",(function(){return v.a})),n.d(t,"unstable_ClassNameGenerator",(function(){return j.a}));var a=n("xeev"),r=n("j3nj"),c=n("M7pN"),o=n("7yHM");var i=function(e,t){return()=>null},u=n("M3M6"),s=n("rdfb"),l=n("WFZb"),d=n("hxbm"),p=n("wB8u").a,f=n("6q60"),m=n("DSU1"),b=n("Gcu1"),g=n("1vOf"),h=n("KXty"),O=n("ZfBw"),v=n("8rms"),j=n("TZj1")},bXnD:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),o=n("1OyB"),i=n("rePB"),u=n("KLqG"),s=function e(){Object(o.a)(this,e)};Object(i.a)(s,"getPractices",Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("practices",["antipatterns"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),Object(i.a)(s,"addPractice",Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.push("practices",{name:"",antipatterns:[]});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),Object(i.a)(s,"updatePracticeName",function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.name,e.next=3,u.a.update(Object(i.a)({},"practices/".concat(n,"/name"),a));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(i.a)(s,"removePractice",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,u.a.remove("practices/".concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(i.a)(s,"addAntipattern",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,u.a.push("practices/".concat(n,"/antipatterns"),{name:""});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(i.a)(s,"removeAntipattern",function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.antipatternId,e.next=3,u.a.remove("practices/".concat(n,"/antipatterns/").concat(a));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(i.a)(s,"updateAntipatternField",function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.antipatternId,c=t.field,o=t.value,e.next=3,u.a.update(Object(i.a)({},"practices/".concat(n,"/antipatterns/").concat(a,"/").concat(c),o));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},d5Jl:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");t.default=o},dCu3:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=o},hxbm:function(e,t,n){"use strict";n("+F0K");t.a=function(e,t){return()=>null}},iEmJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),o=n("1OyB"),i=n("rePB"),u=n("KLqG"),s=function e(){Object(o.a)(this,e)};Object(i.a)(s,"getTeams",Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("teams",["antipatterns"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),Object(i.a)(s,"getTeam",function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getById("teams/".concat(t),["antipatterns"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(i.a)(s,"addTeam",function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.push("teams",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},jelL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n("Udd0")},oMMt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-diagnostic",function(){return n("5lnm")}])},oyeo:function(e,t,n){"use strict";var a=n("EiBv"),r=n("NFhf"),c=n("q1tI"),o=(n("17x9"),n("iuhU")),i=n("+NmR"),u=n("xeev"),s=n("Vn7y"),l=n("1vOf"),d=n("7EOP"),p=n("nLn5"),f=n("PDDv"),m=n("HltC");function b(e){return Object(f.a)("PrivateSwitchBase",e)}Object(m.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=n("nKUr");const h=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],O=Object(s.a)(p.a,{skipSx:!0})(({ownerState:e})=>Object(r.a)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),v=Object(s.a)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=c.forwardRef((function(e,t){const{autoFocus:n,checked:c,checkedIcon:s,className:p,defaultChecked:f,disabled:m,disableFocusRipple:j=!1,edge:y=!1,icon:w,id:x,inputProps:C,inputRef:P,name:_,onBlur:k,onChange:N,onFocus:S,readOnly:I,required:M,tabIndex:E,type:D,value:R}=e,F=Object(a.a)(e,h),[B,L]=Object(l.a)({controlled:c,default:Boolean(f),name:"SwitchBase",state:"checked"}),q=Object(d.a)();let T=m;q&&"undefined"===typeof T&&(T=q.disabled);const z="checkbox"===D||"radio"===D,A=Object(r.a)({},e,{checked:B,disabled:T,disableFocusRipple:j,edge:y}),K=(e=>{const{classes:t,checked:n,disabled:a,edge:r}=e,c={root:["root",n&&"checked",a&&"disabled",r&&`edge${Object(u.a)(r)}`],input:["input"]};return Object(i.a)(c,b,t)})(A);return Object(g.jsxs)(O,Object(r.a)({component:"span",className:Object(o.a)(K.root,p),centerRipple:!0,focusRipple:!j,disabled:T,tabIndex:null,role:void 0,onFocus:e=>{S&&S(e),q&&q.onFocus&&q.onFocus(e)},onBlur:e=>{k&&k(e),q&&q.onBlur&&q.onBlur(e)},ownerState:A,ref:t},F,{children:[Object(g.jsx)(v,Object(r.a)({autoFocus:n,checked:c,defaultChecked:f,className:K.input,disabled:T,id:z&&x,name:_,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;L(t),N&&N(e,t)},readOnly:I,ref:P,required:M,ownerState:A,tabIndex:E,type:D},"checkbox"===D&&void 0===R?{}:{value:R},C)),B?s:w]}))}));t.a=j},qgBN:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),c=n("nKUr"),o=(0,r.default)((0,c.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=o},tSRN:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),o=n("1OyB"),i=n("rePB"),u=n("Epe3"),s=n("KLqG");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function e(){Object(o.a)(this,e)};Object(i.a)(p,"createDiagnostic",function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.filter((function(e){return null!==e.answer&&e.answer.toString()!==e.idealAnswer})).map((function(e){return d(d({},e),{},{practice:{id:e.practice.id,name:e.practice.name},order:null,useful:0!=e.useful,status:u.a.backlog})})),e.next=3,s.a.update(Object(i.a)({},"teams/".concat(t.id,"/antipatterns"),a));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(i.a)(p,"updateDiagnostic",function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.update(Object(i.a)({},"teams/".concat(t,"/antipatterns"),n));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}},[["oMMt",0,2,9,1,4,3,5,6,8,7,11]]]);