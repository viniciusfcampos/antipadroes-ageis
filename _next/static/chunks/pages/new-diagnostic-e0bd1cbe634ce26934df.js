_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"3sWg":function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"m10.88 21.94 5.53-5.54c.37-.37.58-.88.58-1.41V5c0-1.1-.9-2-2-2H6c-.8 0-1.52.48-1.83 1.21L.91 11.82C.06 13.8 1.51 16 3.66 16h5.65l-.95 4.58c-.1.5.05 1.01.41 1.37.59.58 1.53.58 2.11-.01zM21 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ThumbDownAltRounded");t.default=i},"5lnm":function(e,t,n){"use strict";n.r(t);var a,r=n("wx14"),o=n("o0o1"),i=n.n(o),c=n("KQm4"),s=n("HaE+"),u=n("rePB"),l=n("DM5o"),d=n.n(l),p=n("qAqx"),f=n("Gqia"),m=n("MGIy"),g=n("O3LO"),b=n("O8tK"),h=n("5I82"),O=n("H/m6"),v=n("w+1Z"),j=n("jOs7"),y=n("8Kt/"),w=n.n(y),C=n("q1tI"),_=n.n(C),x=n("vOnD"),N=n("OwGX"),P=n.n(N),M=n("OGDC"),S=n("CjiS"),k=n("iuhU"),I=n("1OyB");!function(e){e[e.backlog=0]="backlog",e[e.prioritazed=1]="prioritazed",e[e.doing=2]="doing",e[e.done=3]="done"}(a||(a={}));var D=n("KLqG");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function e(){Object(I.a)(this,e)};Object(u.a)(A,"createDiagnostic",function(){var e=Object(s.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.filter((function(e){return e.answer.toString()!==e.idealAnswer})).map((function(e,t){return z(z({},e),{},{practice:{id:e.practice.id,name:e.practice.name},order:t+1,status:a.backlog})})),e.next=3,D.a.update(Object(u.a)({},"teams/".concat(t.id,"/antipatterns"),r));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var T=n("dCu3"),q=n.n(T),K=n("qgBN"),L=n.n(K),R=_.a.createElement,B=Object(x.c)(j.a).withConfig({displayName:"Carousel__Container",componentId:"sc-1xa0vtr-0"})(["display:grid;grid-gap:4rem;"]),F=Object(x.c)(j.a).withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-1xa0vtr-1"})(["display:grid;grid-auto-flow:column;transition:all 0.3s ease-in-out;transform:translateX(0);width:calc(320px + 32px);& > *{transform:scale(0.75);margin:0 -16px;opacity:0.5;transition:all 0.3s ease-in-out;user-select:none;&.current{transform:scale(1);margin:0 16px;opacity:1;}}"]),H=Object(x.c)(j.a).withConfig({displayName:"Carousel__Controls",componentId:"sc-1xa0vtr-2"})(["display:grid;grid-auto-flow:column;justify-content:space-between;user-select:none;margin:0 auto;width:320px;color:#fff;align-items:center;.MuiSvgIcon-root{fill:white;}.MuiIconButton-root.Mui-disabled{.MuiSvgIcon-root{opacity:0.5;}}"]),U=function(e){var t=e.position,n=e.handleChangePosition,a=e.children;return R(B,null,R(F,{style:{transform:"translateX(".concat(-240*t+-43*t,"px)")}},_.a.Children.map(a,(function(e,n){return _.a.cloneElement(e,{className:"".concat(n===t?"current":"")})}))),R(H,null,R(M.a,{onClick:function(){return n(-1)},disabled:0===t},R(q.a,null)),R(f.a,null,t+1,"/",_.a.Children.count(a)),R(M.a,{onClick:function(){return n(1)},disabled:t===_.a.Children.count(a)-1},R(L.a,null))))},G=n("d5Jl"),X=n.n(G),V=_.a.createElement,J=Object(x.c)(p.a).withConfig({displayName:"FinalCard__Container",componentId:"sc-6x2mts-0"})(["display:grid;grid-auto-rows:1fr auto;width:320px;"]),Q=Object(x.c)(j.a).withConfig({displayName:"FinalCard__Message",componentId:"sc-6x2mts-1"})(["display:grid;align-content:center;justify-content:center;text-align:center;justify-items:center;grid-gap:2rem;"]),W=Object(x.c)(X.a).withConfig({displayName:"FinalCard__Check",componentId:"sc-6x2mts-2"})(["width:2rem;height:2rem;"]),Z=function(e){var t=e.message,n=e.action,a=e.color,r=void 0===a?"primary":a,o=e.onFinish,i=e.className;return V(J,{className:i},V(Q,null,V(W,{color:r}),V(f.a,null,t)),V(h.a,{onClick:o,color:r,variant:"contained"},n))},Y=_.a.createElement,$=Object(x.c)(j.a).withConfig({displayName:"CardHeader__Container",componentId:"sc-1vbo00x-0"})(["padding:0.5rem 0;"]),ee=function(e){var t=e.practice,n=e.index,a=e.className;return Y($,{className:a},Y(f.a,{variant:"caption"},"#",n+1," - ",null===t||void 0===t?void 0:t.name))},te=_.a.createElement,ne=Object(x.c)(p.a).withConfig({displayName:"QuestionCard__Container",componentId:"sc-1opm0cc-0"})(["width:320px;height:350px;display:grid;grid-gap:1rem;grid-template-rows:auto 1fr auto;"]),ae=Object(x.d)(Object(x.c)(j.a).withConfig({displayName:"QuestionCard__Buttons",componentId:"sc-1opm0cc-1"})(["display:grid;grid-gap:1rem;grid-auto-flow:column;margin:0 -2rem -1.5rem;padding:1rem 2rem;background-color:",";"],(function(e){return e.theme.colors.lightBackground}))),re=function(e){var t=e.id,n=e.identificationStrategy,a=e.practice,r=e.index,o=e.answer,i=e.handleOnAnswer,c=e.className,s=function(e){i(t,e)};return te(ne,{className:c},te(ee,{index:r,practice:a}),te(f.a,{variant:"body1"},n),te(ae,null,te(h.a,{variant:!0===o?"outlined":"text",onClick:function(){return s(!0)}},"Sim"),te(h.a,{variant:!1===o?"outlined":"text",onClick:function(){return s(!1)}},"N\xe3o")))},oe=_.a.createElement;function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=Object(x.c)(j.a).withConfig({displayName:"DiagnosticTab__Container",componentId:"sc-4sdeqk-0"})(["height:100%;display:grid;align-items:center;align-content:center;justify-items:center;grid-gap:4rem;overflow:hidden;.MuiIconButton-root{.MuiSvgIcon-root{fill:white;}}"]),ue=Object(x.c)(j.a).withConfig({displayName:"DiagnosticTab__Header",componentId:"sc-4sdeqk-1"})(["text-align:center;user-select:none;height:80px;.MuiTypography-root{color:white;}"]),le=function(e){var t,n,a=e.team,o=e.practices,c=e.onFinish,u=Object(C.useState)(0),l=u[0],d=u[1],p=Object(C.useState)([]),m=p[0],g=p[1];Object(C.useEffect)((function(){d(0),g(o?b():[])}),[a,o]);var b=function(){var e=[];return o.forEach((function(t){t.antipatterns.forEach((function(n){e.push(ce(ce({},n),{},{practice:t,answer:null}))}))})),e},h=function(e,t){var n=m.map((function(n){return n.id===e?ce(ce({},n),{},{answer:t}):ce({},n)}));g(n),O(1)},O=function(e){var t=e+l;t>=0&&t<=m.length&&d(t)},v=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.createDiagnostic(a,m);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return oe(se,null,oe(ue,null,m[l]&&oe(_.a.Fragment,null,oe(f.a,{variant:"h4"},null===(t=m[l])||void 0===t?void 0:t.practice.name),oe(f.a,{variant:"caption"},null===(n=m[l])||void 0===n?void 0:n.practice.antipatterns.length," perguntas"))),oe(U,{position:l,handleChangePosition:O},m.map((function(e,t){return oe(re,Object(r.a)({},e,{index:t,answer:e.answer,handleOnAnswer:h}))})),oe(Z,{message:"Deseja finalizar o diagn\xf3stico?",action:"Finalizar",onFinish:v})))},de=n("nOHt"),pe=n("N6p1"),fe=n.n(pe),me=n("3sWg"),ge=n.n(me),be=_.a.createElement,he=Object(x.c)(p.a).withConfig({displayName:"ResultCard__Container",componentId:"sc-1bny057-0"})(["width:320px;height:540px;display:grid;grid-template-rows:auto auto 1fr auto;.MuiTypography-caption{margin-bottom:1rem;color:gray;}"]),Oe=Object(x.c)(j.a).withConfig({displayName:"ResultCard__Content",componentId:"sc-1bny057-1"})(["overflow:auto;margin:0 -2rem;padding:0 2rem 2rem;"]),ve=Object(x.c)(f.a).withConfig({displayName:"ResultCard__Action",componentId:"sc-1bny057-2"})(["margin-top:2rem;font-weight:500;"]),je=Object(x.d)(Object(x.c)(j.a).withConfig({displayName:"ResultCard__Buttons",componentId:"sc-1bny057-3"})(["display:grid;grid-gap:1rem;grid-auto-flow:column;margin:0 -2rem -1.5rem;padding:1rem 2rem;background-color:",";"],(function(e){return e.theme.colors.lightBackground}))),ye=function(e){var t=e.id,n=e.name,a=e.description,r=e.eliminationStrategy,o=e.practice,i=e.useful,c=e.index,s=e.handleOnAnswer,u=e.className,l=function(e){s(t,e)};return be(he,{className:u},be(ee,{index:c,practice:o}),be(f.a,{variant:"h6"},n),be(Oe,null,be(f.a,{variant:"caption"},a),be(ve,null,"A\xe7\xe3o:"),be(f.a,{variant:"body2"},r)),be(je,null,be(h.a,{startIcon:be(fe.a,null),variant:!0===i?"outlined":"text",onClick:function(){return l(!0)}},"\xdatil"),be(h.a,{startIcon:be(ge.a,null),variant:!1===i?"outlined":"text",onClick:function(){return l(!1)}},"N\xe3o")))},we=_.a.createElement;function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=Object(x.c)(j.a).withConfig({displayName:"ResultsTab__Container",componentId:"sc-1u7bnki-0"})(["height:100%;display:grid;align-items:center;align-content:center;justify-items:center;grid-gap:4rem;.MuiIconButton-root{.MuiSvgIcon-root{fill:white;}}"]),Ne=Object(x.c)(j.a).withConfig({displayName:"ResultsTab__Header",componentId:"sc-1u7bnki-1"})(["text-align:center;user-select:none;height:100px;max-width:580px;.MuiTypography-root{color:white;}"]),Pe=function(e){var t=e.team,n=e.teamAntipatterns,a=Object(de.useRouter)(),o=Object(C.useState)(0),u=o[0],l=o[1],d=Object(C.useState)(Object(c.a)(n)),p=d[0],m=d[1];Object(C.useEffect)((function(){return m(Object(c.a)(n))}),[n]);var g=function(e,t){var n=p.map((function(n){return n.id===e?_e(_e({},n),{},{useful:t}):_e({},n)}));m(n),b(1)},b=function(e){var t=e+u;t>=0&&t<=p.length&&l(t)},h=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.createDiagnostic(t,p);case 2:a.push("diagnostics");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return we(xe,null,we(Ne,null,we(f.a,{variant:"h4"},"Resultado"),we(f.a,{variant:"caption"},"Veja abaixo os antipadr\xf5es que possivelmente ocorrem em seu time e formas de elimin\xe1-lo. Avalie se voc\xea considera que as sugest\xf5es abaixo podem ser \xfateis para seu contexto ou n\xe3o.")),we(U,{position:u,handleChangePosition:b},p.map((function(e,t){return we(ye,Object(r.a)({},e,{index:t,handleOnAnswer:g}))})),we(Z,{message:"Agora voc\xea pode acompanhar o progresso das a\xe7\xf5es mapeadas por meio de um Kanban.",action:"Salvar e Acessar Kanban",color:"success",onFinish:h})))},Me=_.a.createElement,Se=Object(x.c)(j.a).withConfig({displayName:"DiagnosticModal__Container",componentId:"sc-1hkdqoh-0"})(["height:100%;width:100vw;grid-gap:4rem;position:relative;.MuiIconButton-root{.MuiSvgIcon-root{fill:white;}}"]),ke=Object(x.c)(j.a).withConfig({displayName:"DiagnosticModal__Tabs",componentId:"sc-1hkdqoh-1"})(["display:grid;grid-template-columns:100vw 100vw;position:absolute;height:100vh;left:0;transition:left 0.3s ease-in-out;&.showResults{left:-100vw;}"]),Ie=Object(x.c)(M.a).withConfig({displayName:"DiagnosticModal__CancelButton",componentId:"sc-1hkdqoh-2"})(["position:absolute;top:1rem;right:1rem;z-index:1000;"]),De=function(e){var t=e.open,n=e.team,a=e.practices,r=e.handleClose,o=Object(C.useState)([]),i=o[0],c=o[1],s=Object(C.useState)(!1),u=s[0],l=s[1];Object(C.useEffect)((function(){l(!1)}),[t]);return Me(S.a,{open:t},Me(Se,null,Me(Ie,{onClick:function(){return r()}},Me(P.a,null)),Me(ke,{className:Object(k.a)({showResults:u})},Me(le,{team:n,practices:a,onFinish:function(e){c(e),l(!0)}}),Me(Pe,{team:n,teamAntipatterns:i}))))},Ee=n("3H7G"),ze=n("bXnD"),Ae=function e(){Object(I.a)(this,e)};Object(u.a)(Ae,"getTeams",Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("teams");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),Object(u.a)(Ae,"addTeam",function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.push("teams",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var Te=_.a.createElement;function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le=Object(x.c)(j.a).withConfig({displayName:"new-diagnostic__Form",componentId:"sc-su4syg-0"})(["display:grid;grid-gap:1rem;margin:4rem auto;max-width:400px;"]),Re=Object(x.c)(j.a).withConfig({displayName:"new-diagnostic__Practices",componentId:"sc-su4syg-1"})(["display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;margin-bottom:4rem;"]);t.default=function(){var e=Object(C.useState)([]),t=e[0],n=e[1],a=Object(C.useState)(null),o=a[0],l=a[1],j=Object(C.useState)({}),y=j[0],x=j[1],N=Object(C.useState)({}),P=N[0],M=N[1],S=Object(C.useState)({open:!1}),k=S[0],I=S[1];Object(C.useEffect)((function(){ze.a.getPractices().then((function(e){n(e),D(e)}))}),[]);var D=function(e){var t=e.reduce((function(e,t){return e[t.id]=!0,e}),{});l(t)},E=function(e){var t=e.target,n=t.name,a=t.checked,r=Ke(Ke({},o),{},Object(u.a)({},n,a));l(r)},z=function(e){var t=e.target,n=t.name,a=t.value;x(Ke(Ke({},y),{},Object(u.a)({},n,a)))},A=function(){var e=function(e){return 0===(null===e||void 0===e?void 0:e.trim().length)},t=!e(y.name)&&!e(y.description)&&!!y.size,n=Object.values(o).some((function(e){return e}));return t&&n},T=function(){var e=Object(s.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A()){e.next=3;break}return M({open:!0,message:"Preencha as informa\xe7\xf5es corretamente e selecione pelo menos uma pr\xe1tica."}),e.abrupt("return");case 3:return e.next=5,Ae.addTeam(y);case 5:n=e.sent,a=Object.keys(o).filter((function(e){return o[e]})).reduce((function(e,n){return[].concat(Object(c.a)(e),[t.find((function(e){return e.id===n}))])}),[]),I({open:!0,team:Ke(Ke({},y),{},{id:n}),practices:a}),D(t),x({name:null,description:null,size:null});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Te(_.a.Fragment,null,Te(w.a,null,Te("title",null,"Novo Diagn\xf3stico")),Te(Ee.a,{icon:Te(d.a,null),title:"Novo Diagn\xf3stico"}),Te(p.a,null,Te(f.a,null,"Para realizar um novo diagn\xf3stico, insira informa\xe7\xf5es sobre o time e as pr\xe1ticas que ser\xe3o analisadas:"),Te(Le,null,Te(m.a,{name:"name",label:"Nome do Time",value:y.name,onChange:z,autoFocus:!0}),Te(m.a,{name:"size",label:"Tamanho",placeholder:"8 pessoas",value:y.size,onChange:z,type:"number"}),Te(m.a,{name:"description",label:"Descri\xe7\xe3o do Produto",placeholder:"Sistema de planejamento log\xedstico de uma empresa atacadista",value:y.description,onChange:z,rows:4,multiline:!0}),Te(Re,null,o&&t.map((function(e){return Te(g.a,{key:e.id,label:e.name,control:Te(b.a,{name:e.id,checked:o[e.id],onChange:E})})}))),Te(h.a,{variant:"contained",color:"primary",onClick:T},"Iniciar"))),Te(De,Object(r.a)({},k,{handleClose:function(){return I({open:!1})}})),Te(O.a,{open:P.open,onClose:function(){return M({open:!1})},anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:6e3},Te(v.a,{severity:"error"},P.message)))}},DM5o:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddCircleRounded");t.default=i},N6p1:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M13.12 2.06 7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"}),"ThumbUpAltRounded");t.default=i},NoS8:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},OwGX:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=i},d5Jl:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");t.default=i},dCu3:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=i},jelL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n("Udd0")},oMMt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-diagnostic",function(){return n("5lnm")}])},qgBN:function(e,t,n){"use strict";var a=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("jelL")),o=n("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=i}},[["oMMt",0,1,7,2,3,4,5,9,6]]]);