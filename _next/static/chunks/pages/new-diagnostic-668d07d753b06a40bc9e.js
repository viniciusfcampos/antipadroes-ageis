_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"5lnm":function(n,e,t){"use strict";t.r(e);var a=t("wx14"),i=t("DM5o"),u=t.n(i),r=t("qAqx"),o=t("Gqia"),c=t("MGIy"),l=t("Fg+5"),s=t("kQF4"),d=t("rT0G"),f=t("LutX"),m=t("5I82"),p=t("jOs7"),v=t("8Kt/"),g=t.n(v),O=t("q1tI"),b=t.n(O),h=t("3H7G"),w=t("vOnD"),_=t("o0o1"),j=t.n(_),y=t("HaE+"),N=t("1OyB"),E=t("rePB"),M=t("KLqG"),x=function n(){Object(N.a)(this,n)};Object(E.a)(x,"getTeams",Object(y.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.get("teams");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))));var P=t("in7y"),S=t("8cYg"),q=t("bXnD"),C=b.a.createElement,D=Object(w.c)(p.a).withConfig({displayName:"new-diagnostic__Form",componentId:"sc-su4syg-0"})(["display:grid;grid-gap:1rem;margin:5rem auto;max-width:340px;"]),I=Object(P.a)();e.default=function(){var n=Object(O.useState)([]),e=n[0],t=n[1],i=Object(O.useState)([]),p=i[0],v=i[1],w=Object(O.useState)(null),_=w[0],j=w[1],y=Object(O.useState)(null),N=y[0],E=y[1];Object(O.useEffect)((function(){q.a.getPractices().then((function(n){t(n)})),x.getTeams().then((function(n){v(n)}))}),[]);return C(b.a.Fragment,null,C(g.a,null,C("title",null,"Novo Diagn\xf3stico")),C(h.a,{icon:C(u.a,null),title:"Novo Diagn\xf3stico"}),C(r.a,null,C(o.a,null,"Para realizar um novo diagn\xf3stico, selecione o time e a pr\xe1tica que ser\xe3o analisados:"),C(D,null,C(S.a,{value:N,onChange:function(n,e){"string"===typeof e?E({id:null,name:e}):e&&e.inputValue?E({id:null,name:e.inputValue}):E(e)},filterOptions:function(n,e){var t=I(n,e),a=e.inputValue,i=n.some((function(n){return a===n.title}));return""===a||i||t.push({inputValue:a,name:'Criar time "'.concat(a,'"')}),t},options:p,getOptionLabel:function(n){return n.name},renderOption:function(n,e){return C("li",n,e.name)},renderInput:function(n){return C(c.a,Object(a.a)({},n,{variant:"filled",label:"Time"}))},freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0}),C(l.a,{fullWidth:!0},C(s.a,null,"Pr\xe1tica"),C(d.a,{variant:"filled",value:_?_.id:"",onChange:function(n){var t=n.target.value,a=e.find((function(n){return n.id===t}));j(a)}},C(f.a,{value:""},C("em",null,"None")),e.map((function(n){return C(f.a,{value:n.id,key:n.id},n.name)})))),C(m.a,{variant:"contained",color:"primary"},"Iniciar"))))}},DM5o:function(n,e,t){"use strict";var a=t("NoS8");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("jelL")),u=t("nKUr"),r=(0,i.default)((0,u.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddCircleRounded");e.default=r},oMMt:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-diagnostic",function(){return t("5lnm")}])}},[["oMMt",0,1,7,2,3,4,5,6,9]]]);