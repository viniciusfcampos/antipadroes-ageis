(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{Gcu1:function(n,e,t){"use strict";e.a=function(n,e,t,r,u){return null}},NoS8:function(n,e){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.default=n.exports,n.exports.__esModule=!0},Udd0:function(n,e,t){"use strict";t.r(e),t.d(e,"capitalize",(function(){return r.a})),t.d(e,"createChainedFunction",(function(){return u.a})),t.d(e,"createSvgIcon",(function(){return a.a})),t.d(e,"debounce",(function(){return c.a})),t.d(e,"deprecatedPropType",(function(){return o})),t.d(e,"isMuiElement",(function(){return i.a})),t.d(e,"ownerDocument",(function(){return s.a})),t.d(e,"ownerWindow",(function(){return f.a})),t.d(e,"requirePropFactory",(function(){return l.a})),t.d(e,"setRef",(function(){return d})),t.d(e,"unstable_useEnhancedEffect",(function(){return p.a})),t.d(e,"unstable_useId",(function(){return b.a})),t.d(e,"unsupportedProp",(function(){return v.a})),t.d(e,"useControlled",(function(){return h.a})),t.d(e,"useEventCallback",(function(){return O.a})),t.d(e,"useForkRef",(function(){return m.a})),t.d(e,"useIsFocusVisible",(function(){return w.a})),t.d(e,"unstable_ClassNameGenerator",(function(){return j.a}));var r=t("xeev"),u=t("j3nj"),a=t("M7pN"),c=t("7yHM");var o=function(n,e){return()=>null},i=t("M3M6"),s=t("rdfb"),f=t("WFZb"),l=t("hxbm"),d=t("wB8u").a,p=t("6q60"),b=t("DSU1"),v=t("Gcu1"),h=t("1vOf"),O=t("KXty"),m=t("ZfBw"),w=t("8rms"),j=t("TZj1")},hxbm:function(n,e,t){"use strict";t("+F0K");e.a=function(n,e){return()=>null}},jelL:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t("Udd0")},m3ny:function(n,e,t){"use strict";t.d(e,"b",(function(){return h}));var r=t("o0o1"),u=t.n(r),a=t("HaE+"),c=t("nOHt"),o=t("q1tI"),i=t.n(o),s=t("1OyB"),f=t("rePB"),l=t("mVNT"),d=(t("H9WU"),t("WJvL"),t("5pEQ"),t("IuUc"),function n(){Object(s.a)(this,n)});Object(f.a)(d,"signIn",(function(n,e){var t=Object(l.c)();return Object(l.b)(t,n,e).then((function(n){return n.user})).catch((function(n){var e=n.code;throw new Error({"auth/invalid-email":"Email inv\xe1lido.","auth/weak-password":"A senha deve ter ao menos 6 caracteres."}[e]||"Usu\xe1rio ou senha inv\xe1lidos.")}))})),Object(f.a)(d,"signUp",(function(n,e){var t=Object(l.c)();return Object(l.a)(t,n,e).then((function(n){return n.user})).catch((function(n){var e=n.code;throw console.log(e),new Error({"auth/invalid-email":"Email inv\xe1lido.","auth/weak-password":"A senha deve ter ao menos 6 caracteres.","auth/email-already-in-use":"J\xe1 existe um usu\xe1rio com este email. Realize o login."}[e]||"Usu\xe1rio ou senha inv\xe1lidos.")}))}));var p=t("adgz"),b=i.a.createElement,v=Object(o.createContext)({authenticated:!1,adminAuthenticated:!1,user:null,loading:!0,signIn:function(){var n=Object(a.a)(u.a.mark((function n(e,t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),signUp:function(){var n=Object(a.a)(u.a.mark((function n(e,t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),signOut:function(){var n=Object(a.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),signInModal:{open:!1,redirectTo:null},setSignInModal:function(n){n.open,n.redirectTo}});function h(){return Object(o.useContext)(v)}e.a=function(n){var e=n.children,t=Object(o.useState)(null),r=t[0],i=t[1],s=Object(o.useState)(!0),f=s[0],l=s[1],h=Object(o.useState)({open:!1,redirectTo:null}),O=h[0],m=h[1],w=Object(c.useRouter)();Object(o.useEffect)((function(){Object(p.b)(),i(j()),l(!1)}),[]);var j=function(){return JSON.parse(localStorage.getItem("user"))},g=function(n){var e={id:n.uid,email:n.email,isAdmin:"admin@ufmg.br"===n.email};localStorage.setItem("user",JSON.stringify(e)),i(e)},y=function(){var n=Object(a.a)(u.a.mark((function n(e,t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",d.signIn(e,t).then((function(n){return g(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),x=function(){var n=Object(a.a)(u.a.mark((function n(e,t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",d.signUp(e,t).then((function(n){return g(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),I=function(){var n=Object(a.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:localStorage.setItem("user",JSON.stringify(null)),i(null),w.push("/");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S={authenticated:!!r,adminAuthenticated:r&&r.isAdmin,user:r,loading:f,signIn:y,signUp:x,signOut:I,signInModal:O,setSignInModal:m};return b(v.Provider,{value:S},e)}},teXz:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));function r(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var u=0;for(r=Object.getOwnPropertySymbols(n);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(t[r[u]]=n[r[u]])}return t}Object.create;Object.create}}]);