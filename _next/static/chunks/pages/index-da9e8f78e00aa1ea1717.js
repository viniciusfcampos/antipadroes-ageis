_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"3H7G":function(e,t,n){"use strict";var r=n("Gqia"),a=n("jOs7"),o=n("q1tI"),i=n.n(o),c=n("vOnD"),u=i.a.createElement,l=Object(c.c)(a.a).withConfig({displayName:"PageHeader__Container",componentId:"sc-oeclau-0"})(["display:grid;grid-auto-flow:column;justify-content:space-between;align-items:center;margin-bottom:2rem;"]),s=Object(c.c)(a.a).withConfig({displayName:"PageHeader__TitleContainer",componentId:"sc-oeclau-1"})(["display:grid;grid-auto-flow:column;grid-gap:0.5rem;justify-content:start;align-items:center;color:",";fill:",";"],(function(e){return e.theme.colors.lightText}),(function(e){return e.theme.colors.lightText})),d=Object(c.c)(r.a).withConfig({displayName:"PageHeader__Title",componentId:"sc-oeclau-2"})(["font-size:1rem;font-weight:600;line-height:1.2srem;"]);t.a=function(e){var t=e.icon,n=e.title,r=e.sideComponent;return u(l,null,u(s,null,t,u(d,{variant:"h1"},n)),r)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],d=r[l]||new Set;d.has(s)?o=!1:(d.add(s),r[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"A+QN":function(e,t,n){"use strict";var r=n("EiBv"),a=n("NFhf"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("+NmR"),u=n("2Qr1"),l=n("Vn7y"),s=n("tCRK"),d=n("WOV/"),f=n("nKUr");const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=Object(l.a)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>Object(a.a)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:Object(u.a)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>Object(a.a)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>Object(a.a)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>Object(a.a)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=Object(l.a)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>Object(a.a)({display:"inline-block",paddingLeft:e.spacing(1.2),paddingRight:e.spacing(1.2)},"vertical"===t.orientation&&{paddingTop:e.spacing(1.2),paddingBottom:e.spacing(1.2)})),v=o.forwardRef((function(e,t){const n=Object(s.a)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:u,className:l,component:v=(u?"div":"hr"),flexItem:g=!1,light:b=!1,orientation:y="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:x="center",variant:j="fullWidth"}=n,M=Object(r.a)(n,p),_=Object(a.a)({},n,{absolute:o,component:v,flexItem:g,light:b,orientation:y,role:w,textAlign:x,variant:j}),O=(e=>{const{absolute:t,children:n,classes:r,flexItem:a,light:o,orientation:i,textAlign:u,variant:l}=e,s={root:["root",t&&"absolute",l,o&&"light","vertical"===i&&"vertical",a&&"flexItem",n&&"withChildren",n&&"vertical"===i&&"withChildrenVertical","right"===u&&"vertical"!==i&&"textAlignRight","left"===u&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return Object(c.a)(s,d.b,r)})(_);return Object(f.jsx)(h,Object(a.a)({as:v,className:Object(i.a)(O.root,l),role:w,ref:t,ownerState:_},M,{children:u?Object(f.jsx)(m,{className:O.wrapper,ownerState:_,children:u}):null}))}));t.a=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Gcu1:function(e,t,n){"use strict";t.a=function(e,t,n,r,a){return null}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},NoS8:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},"O/jS":function(e,t,n){"use strict";var r=n("M7pN"),a=n("nKUr");t.a=Object(r.a)(Object(a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddCircleRounded")},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("uqvA"),a=n.n(r),o=n("qAqx"),i=n("Gqia"),c=n("A+QN"),u=n("5I82"),l=n("vOnD"),s=n("8Kt/"),d=n.n(s),f=n("q1tI"),p=n.n(f),h=n("3H7G"),m=n("YFqc"),v=n.n(m),g=n("O/jS"),b=n("jOs7"),y=p.a.createElement,w=Object(l.c)(o.a).withConfig({displayName:"pages__Card",componentId:"sc-1f6k82n-0"})(["padding-top:4rem;.MuiTypography-root{margin-bottom:1rem;}.MuiDivider-root{margin:1.5rem 0;}"]),x=Object(l.c)(b.a).withConfig({displayName:"pages__ButtonArea",componentId:"sc-1f6k82n-1"})(["padding:2rem 0;display:grid;justify-content:start;"]);t.default=function(){return y(p.a.Fragment,null,y(d.a,null,y("title",null,"Home")),y(h.a,{icon:y(a.a,null),title:"Home"}),y(w,null,y(i.a,{variant:"h4"},"Bem vindo!"),y(c.a,null),y(i.a,null,y("b",null,"Pr\xe1ticas \xe1geis")," s\xe3o atividades utilizadas para manifestar ou implementar os princ\xedpios e valores apresentados no Manifesto \xc1gil. Por serem pouco prescritivas, pode ser dif\xedcil para uma organiza\xe7\xe3o identificar se ela est\xe1 cumprindo o objetivo esperado. Al\xe9m disso, a alta adaptabilidade de uma pr\xe1tica \xe1gil permite que sejam introduzidas certas caracter\xedsticas ou comportamentos, conhecidos como"," ",y("b",null,"antipadr\xf5es"),", que podem torn\xe1-la ineficaz ou at\xe9 mesmo prejudicial para o time."),y(i.a,null,"O objetivo deste sistema \xe9 permitir que o time fa\xe7a um diagn\xf3stico da execu\xe7\xe3o das pr\xe1ticas \xe1geis em seu contexto para identificar poss\xedveis antipadr\xf5es. Ap\xf3s isso, \xe9 apresentado um plano de a\xe7\xe3o para elimin\xe1-los que pode ser acompanhado por meio de um kanban."),y(x,null,y(v.a,{href:"/new-diagnostic"},y(u.a,{variant:"contained",startIcon:y(g.a,null)},"Realizar diagn\xf3stico"))),y(c.a,null),y(i.a,{variant:"caption"},"Desenvolvido por Vin\xedcius Felic\xedssimo Campos para o Trabalho de Conclus\xe3o de Curso II do curso Engenharia de Sistemas da UFMG.")))}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Udd0:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return a.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return u.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return s.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f})),n.d(t,"unstable_useEnhancedEffect",(function(){return p.a})),n.d(t,"unstable_useId",(function(){return h.a})),n.d(t,"unsupportedProp",(function(){return m.a})),n.d(t,"useControlled",(function(){return v.a})),n.d(t,"useEventCallback",(function(){return g.a})),n.d(t,"useForkRef",(function(){return b.a})),n.d(t,"useIsFocusVisible",(function(){return y.a})),n.d(t,"unstable_ClassNameGenerator",(function(){return w.a}));var r=n("xeev"),a=n("j3nj"),o=n("M7pN"),i=n("7yHM");var c=function(e,t){return()=>null},u=n("M3M6"),l=n("rdfb"),s=n("WFZb"),d=n("hxbm"),f=n("wB8u").a,p=n("6q60"),h=n("DSU1"),m=n("Gcu1"),v=n("1vOf"),g=n("KXty"),b=n("ZfBw"),y=n("8rms"),w=n("TZj1")},"WOV/":function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("PDDv"),a=n("HltC");function o(e){return Object(r.a)("MuiDivider",e)}const i=Object(a.a)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.a=i},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),c=n("7W2i"),u=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1,p=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,f&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),l=new Map,s=window.IntersectionObserver,d={};var f=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],h=(0,u.useRouter)(),m=h&&h.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href);return{href:t,as:e.as?(0,c.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),g=v.href,b=v.as;i.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!d[g+"%"+b])return f(o,(function(){p(h,g,b)}))}),[t,o,g,b,h]);var y=e.children,w=e.replace,x=e.shallow,j=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var M=i.Children.only(y),_={ref:function(e){e&&l(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,b,w,x,j)}};return t&&(_.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),p(h,g,b,{priority:!0}))}),!e.passHref&&("a"!==M.type||"href"in M.props)||(_.href=(0,c.addBasePath)(b)),i.default.cloneElement(M,_)};t.default=h},hxbm:function(e,t,n){"use strict";n("+F0K");t.a=function(e,t){return()=>null}},jelL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n("Udd0")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},uqvA:function(e,t,n){"use strict";var r=n("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("jelL")),o=n("nKUr"),i=(0,a.default)((0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"}),"HomeRounded");t.default=i}},[["/EDR",0,2,1,4,3,5]]]);