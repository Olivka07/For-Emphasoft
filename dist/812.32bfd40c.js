/*! For license information please see 812.32bfd40c.js.LICENSE.txt */
"use strict";(self.webpackChunkemphasoft=self.webpackChunkemphasoft||[]).push([[812],{812:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(848),u=n(540),s=n(767),o=n(798),a=n(762),c=n(996),i=n(721),l=n(544),f=function(){var e=(0,i.e3)(l.putUserFx.pending),t=(0,i.e3)(l.deleteUserFx.pending),n=(0,s.Zp)(),u=(0,s.KC)(),f=u.username,d=u.password,p=u.first_name,v=u.last_name,h=u.is_active,y=u.id,b=u.changed,m=u.changePassword,x=u.toggle;return(0,r.jsx)("div",{className:"form__confirm",children:(0,r.jsxs)("form",{className:"form",children:[(0,r.jsx)("h2",{children:b?"Confirm changes":"Confirm deleting"}),(e||t)&&(0,r.jsx)(o.R,{})||(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{type:"password",title:"password",value:d,changeHandler:m}),(0,r.jsxs)("div",{className:"form__buttons",children:[(0,r.jsx)(c.p,{onClick:function(){return e=void 0,t=void 0,u=function(){var e;return function(e,t){var n,r,u,s,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(u=2&a[0]?r.return:a[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,a[1])).done)return u;switch(r=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((u=(u=o.trys).length>0&&u[u.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){o.label=a[1];break}if(6===a[0]&&o.label<u[1]){o.label=u[1],u=a;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(a);break}u[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,5,,6]),b?[4,(0,l.putUserFx)({postUser:{username:f,first_name:p,is_active:h,last_name:v,password:d},id:y})]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,(0,l.deleteUserFx)(y)];case 3:t.sent(),t.label=4;case 4:return n("/"),[3,6];case 5:return e=t.sent(),x("Error: ".concat(JSON.stringify(e.response.data))),[3,6];case 6:return[2]}}))},new((r=void 0)||(r=Promise))((function(n,s){function o(e){try{c(u.next(e))}catch(e){s(e)}}function a(e){try{c(u.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((u=u.apply(e,t||[])).next())}));var e,t,r,u},text:"Confirm",type:"submit"}),(0,r.jsx)(c.p,{onClick:function(){n("../")},text:"Cancel",type:"reset"})]})]})]})})};const d=function(){var e=(0,s.Zp)();function t(t){("Escape"===t.key||"Esc"===t.key)&&e("../")}return(0,u.useEffect)((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"form__confirm-modal",children:(0,r.jsx)(f,{})})})}},798:(e,t,n)=>{n.d(t,{R:()=>u});var r=n(848),u=function(){return(0,r.jsx)("div",{children:"Loading"})}},63:(e,t,n)=>{var r=n(540),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,o=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),u=r[0].inst,l=r[1];return a((function(){u.value=n,u.getSnapshot=t,i(u)&&l({inst:u})}),[e,n,t]),o((function(){return i(u)&&l({inst:u}),e((function(){i(u)&&l({inst:u})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},940:(e,t,n)=>{var r=n(540),u=n(888),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=u.useSyncExternalStore,a=r.useRef,c=r.useEffect,i=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=i((function(){function e(e){if(!c){if(c=!0,o=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(o=e,a=n)}var o,a,c=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,u]);var p=o(e,f[0],f[1]);return c((function(){d.hasValue=!0,d.value=p}),[p]),l(p),p}},888:(e,t,n)=>{e.exports=n(63)},242:(e,t,n)=>{e.exports=n(940)},721:(e,t,n)=>{n.d(t,{e3:()=>a});var r=n(540),u=n(489),s=n(242),o=n(888);function a(e,t){return function(e,t){const n=u.is.unit(e);let s={};n?s={unit:e}:"@@unitShape"in e?"function"==typeof e["@@unitShape"]?s=e["@@unitShape"]():c("expect @@unitShape to be a function"):s=e;const o=Array.isArray(s),a=r.useRef({stale:1,justSubscribed:0,scope:t}),[l,d,p,v,h]=r.useMemo((()=>{a.current.stale=1;const e=Array.isArray(s)?[]:{},r=[],o=[],i=[],l=[];for(const a in s){if(!{}.hasOwnProperty.call(s,a))continue;const f=s[a];u.is.unit(f)||c(`expect useUnit ${n?"argument":`value in key "${a}"`} to be a unit`),u.is.event(f)||u.is.effect(f)?(e[a]=t?(0,u.GY)(f,{scope:t}):f,i.push(a),l.push(f)):(e[a]=null,r.push(a),o.push(f))}return[e,r,o,i,l]}),[a,t,...Object.keys(s),...Object.values(s)]),y=r.useRef({value:l,storeKeys:d,eventKeys:v,eventValues:h}),b=r.useCallback((e=>{const n=a.current;return n.justSubscribed=1,(0,u.AX)({unit:p,fn:()=>{n.stale||(n.stale=1,e())},scope:t,batch:1})}),[p,t,y,a]),m=r.useCallback((()=>{const e=y.current,r=a.current;let u,s=0;const c=e.value,i=e.storeKeys,b=e.eventKeys,m=e.eventValues,x=t!==r.scope;if(r.stale||r.justSubscribed||x){s=!r.justSubscribed||x,u=o?[...l]:{...l},i.length===d.length&&b.length===v.length||(s=1);for(let e=0;e<d.length;e++){const n=f(p[e],t),r=d[e];s||(s=i.includes(r)?c[r]!==n:1),u[r]=n}for(let e=0;e<v.length;e++){const t=h[e],n=v[e];s||(s=b.includes(n)?m[b.indexOf(n)]!==t:1)}}return s&&(e.value=u),e.storeKeys=d,e.eventKeys=v,e.eventValues=h,r.stale=0,r.justSubscribed=!s,r.scope=t,n?e.value.unit:e.value}),[b,p,h,t,y,a]);return i(b,m,m)}(e,function(e){const t=r.useContext(d);return e&&!t&&c("No scope found, consider adding <Provider> to app root"),t}(null==t?void 0:t.forceScope))}const c=e=>{throw Error(e)},{useSyncExternalStore:i}=("undefined"!=typeof window?r.useLayoutEffect:r.useEffect,o),{useSyncExternalStoreWithSelector:l}=s,f=(e,t)=>t?t.getState(e):e.getState(),d=r.createContext(null),{Provider:p}=d}}]);