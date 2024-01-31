import{b4 as be,I as s,r as A,j as b,l as Z,ak as ke,D as xe}from"./index-ZFNVfenZ.js";import{l as Oe}from"./stripe.esm-nTdSkmMw.js";var se={exports:{}},Pe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",je=Pe,Re=je;function ce(){}function ie(){}ie.resetWarningCache=ce;var Te=function(){function t(n,c,a,u,d,o){if(o!==Re){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ie,resetWarningCache:ce};return r.PropTypes=r,r};se.exports=Te();var we=se.exports;const i=be(we);function ee(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),r.push.apply(r,n)}return r}function te(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ee(Object(r),!0).forEach(function(n){ue(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function F(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(e){return typeof e}:F=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function ue(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function B(t,e){return _e(t)||Ae(t,e)||Ne(t,e)||Ie()}function _e(t){if(Array.isArray(t))return t}function Ae(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var n=[],c=!0,a=!1,u,d;try{for(r=r.call(t);!(c=(u=r.next()).done)&&(n.push(u.value),!(e&&n.length===e));c=!0);}catch(o){a=!0,d=o}finally{try{!c&&r.return!=null&&r.return()}finally{if(a)throw d}}return n}}function Ne(t,e){if(t){if(typeof t=="string")return re(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(t,e)}}function re(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var V=function(e){var r=s.useRef(e);return s.useEffect(function(){r.current=e},[e]),r.current},j=function(e){return e!==null&&F(e)==="object"},Le=function(e){return j(e)&&typeof e.then=="function"},Ue=function(e){return j(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},ne="[object Object]",We=function t(e,r){if(!j(e)||!j(r))return e===r;var n=Array.isArray(e),c=Array.isArray(r);if(n!==c)return!1;var a=Object.prototype.toString.call(e)===ne,u=Object.prototype.toString.call(r)===ne;if(a!==u)return!1;if(!a&&!n)return e===r;var d=Object.keys(e),o=Object.keys(r);if(d.length!==o.length)return!1;for(var m={},E=0;E<d.length;E+=1)m[d[E]]=!0;for(var v=0;v<o.length;v+=1)m[o[v]]=!0;var S=Object.keys(m);if(S.length!==d.length)return!1;var R=e,T=r,g=function(P){return t(R[P],T[P])};return S.every(g)},le=function(e,r,n){return j(e)?Object.keys(e).reduce(function(c,a){var u=!j(r)||!We(e[a],r[a]);return n.includes(a)?(u&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),c):u?te(te({},c||{}),{},ue({},a,e[a])):c},null):null},pe="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ae=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pe;if(e===null||Ue(e))return e;throw new Error(r)},Me=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pe;if(Le(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(c){return ae(c,r)})};var n=ae(e,r);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},De=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.4.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.4.0",url:"https://stripe.com/docs/stripe-js/react"}))},fe=s.createContext(null);fe.displayName="CustomCheckoutSdkContext";var Fe=function(e,r){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(r," in an <CustomCheckoutProvider> provider."));return e},Be=s.createContext(null);Be.displayName="CustomCheckoutContext";i.any,i.shape({clientSecret:i.string.isRequired,elementsOptions:i.object}).isRequired;var J=function(e){var r=s.useContext(fe),n=s.useContext(Y);if(r&&n)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return r?Fe(r,e):me(n,e)},Y=s.createContext(null);Y.displayName="ElementsContext";var me=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},H=s.createContext(null);H.displayName="CartElementContext";var Ye=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},de=function(e){var r=e.stripe,n=e.options,c=e.children,a=s.useMemo(function(){return Me(r)},[r]),u=s.useState(null),d=B(u,2),o=d[0],m=d[1],E=s.useState(null),v=B(E,2),S=v[0],R=v[1],T=s.useState(function(){return{stripe:a.tag==="sync"?a.stripe:null,elements:a.tag==="sync"?a.stripe.elements(n):null}}),g=B(T,2),y=g[0],P=g[1];s.useEffect(function(){var x=!0,I=function(L){P(function(U){return U.stripe?U:{stripe:L,elements:L.elements(n)}})};return a.tag==="async"&&!y.stripe?a.stripePromise.then(function(O){O&&x&&I(O)}):a.tag==="sync"&&!y.stripe&&I(a.stripe),function(){x=!1}},[a,y,n]);var w=V(r);s.useEffect(function(){w!==null&&w!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[w,r]);var N=V(n);return s.useEffect(function(){if(y.elements){var x=le(n,N,["clientSecret","fonts"]);x&&y.elements.update(x)}},[n,N,y.elements]),s.useEffect(function(){De(y.stripe)},[y.stripe]),s.createElement(Y.Provider,{value:y},s.createElement(H.Provider,{value:{cart:o,setCart:m,cartState:S,setCartState:R}},c))};de.propTypes={stripe:i.any,options:i.object};var $e=function(e){var r=s.useContext(Y);return me(r,e)},qe={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},oe=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=s.useContext(H);return r?qe:Ye(n,e)},Ke=function(){var e=$e("calls useElements()"),r=e.elements;return r},Ve=function(){var e=J("calls useStripe()"),r=e.stripe;return r};i.func.isRequired;var h=function(e,r,n){var c=!!n,a=s.useRef(n);s.useEffect(function(){a.current=n},[n]),s.useEffect(function(){if(!c||!e)return function(){};var u=function(){a.current&&a.current.apply(a,arguments)};return e.on(r,u),function(){e.off(r,u)}},[c,r,e,a])},Je=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},l=function(e,r){var n="".concat(Je(e),"Element"),c=function(o){var m=o.id,E=o.className,v=o.options,S=v===void 0?{}:v,R=o.onBlur,T=o.onFocus,g=o.onReady,y=o.onChange,P=o.onEscape,w=o.onClick,N=o.onLoadError,x=o.onLoaderStart,I=o.onNetworksChange,O=o.onCheckout,L=o.onLineItemClick,U=o.onConfirm,Ce=o.onCancel,he=o.onShippingAddressChange,ye=o.onShippingRateChange,_=J("mounts <".concat(n,">")),W="elements"in _?_.elements:null,M="customCheckoutSdk"in _?_.customCheckoutSdk:null,ve=s.useState(null),z=B(ve,2),C=z[0],Se=z[1],k=s.useRef(null),$=s.useRef(null),G=oe("mounts <".concat(n,">"),"customCheckoutSdk"in _),q=G.setCart,K=G.setCartState;h(C,"blur",R),h(C,"focus",T),h(C,"escape",P),h(C,"click",w),h(C,"loaderror",N),h(C,"loaderstart",x),h(C,"networkschange",I),h(C,"lineitemclick",L),h(C,"confirm",U),h(C,"cancel",Ce),h(C,"shippingaddresschange",he),h(C,"shippingratechange",ye);var D;e==="cart"?D=function(X){K(X),g&&g(X)}:g&&(e==="expressCheckout"?D=g:D=function(){g(C)}),h(C,"ready",D);var ge=e==="cart"?function(f){K(f),y&&y(f)}:y;h(C,"change",ge);var Ee=e==="cart"?function(f){K(f),O&&O(f)}:O;h(C,"checkout",Ee),s.useLayoutEffect(function(){if(k.current===null&&$.current!==null&&(W||M)){var f=null;M?f=M.createElement(e,S):W&&(f=W.create(e,S)),e==="cart"&&q&&q(f),k.current=f,Se(f),f&&f.mount($.current)}},[W,M,S,q]);var Q=V(S);return s.useEffect(function(){if(k.current){var f=le(S,Q,["paymentRequest"]);f&&k.current.update(f)}},[S,Q]),s.useLayoutEffect(function(){return function(){if(k.current&&typeof k.current.destroy=="function")try{k.current.destroy(),k.current=null}catch{}}},[]),s.createElement("div",{id:m,className:E,ref:$})},a=function(o){var m=J("mounts <".concat(n,">"));oe("mounts <".concat(n,">"),"customCheckoutSdk"in m);var E=o.id,v=o.className;return s.createElement("div",{id:E,className:v})},u=r?a:c;return u.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onEscape:i.func,onClick:i.func,onLoadError:i.func,onLoaderStart:i.func,onNetworksChange:i.func,onCheckout:i.func,onLineItemClick:i.func,onConfirm:i.func,onCancel:i.func,onShippingAddressChange:i.func,onShippingRateChange:i.func,options:i.object},u.displayName=n,u.__elementType=e,u},p=typeof window>"u",He=s.createContext(null);He.displayName="EmbeddedCheckoutProviderContext";l("auBankAccount",p);l("card",p);l("cardNumber",p);l("cardExpiry",p);l("cardCvc",p);l("fpxBank",p);l("iban",p);l("idealBank",p);l("p24Bank",p);l("epsBank",p);var ze=l("payment",p);l("expressCheckout",p);l("paymentRequestButton",p);l("linkAuthentication",p);l("address",p);l("shippingAddress",p);l("cart",p);l("paymentMethodMessaging",p);l("affirmMessage",p);l("afterpayClearpayMessage",p);function Ge(){const t=Ve(),e=Ke(),[r,n]=A.useState(null),[c,a]=A.useState(!1);A.useEffect(()=>{if(!t)return;const o=new URLSearchParams(window.location.search).get("payment_intent_client_secret");o&&t.retrievePaymentIntent(o).then(({paymentIntent:m})=>{switch(m.status){case"succeeded":n("Payment succeeded!");break;case"processing":n("Your payment is processing.");break;case"requires_payment_method":n("Your payment was not successful, please try again.");break;default:n("Something went wrong.");break}})},[t]);const u=async o=>{if(o.preventDefault(),!t||!e)return;a(!0);const{error:m}=await t.confirmPayment({elements:e,confirmParams:{return_url:"http://localhost:5173/orderSuccess"}});m.type==="card_error"||m.type==="validation_error"?n(m.message):n("An unexpected error occurred."),a(!1)},d={layout:"tabs"};return b.jsxs("form",{id:"payment-form",onSubmit:u,children:[b.jsx(ze,{id:"payment-element",options:d}),b.jsx("button",{disabled:c||!t||!e,id:"submit",children:b.jsx("span",{id:"button-text",children:c?b.jsx("div",{className:"spinner",id:"spinner"}):"Pay now"})}),r&&b.jsx("div",{id:"payment-message",children:r})]})}const Qe=Oe("pk_test_51OTSOaSCLk89VVV2y65ICM1KafKVLbOIhdp06xHCYFST0x3lQGymFiCjyl2Ji6qOcmmugvwPipgsLxtF6bDOhcNM00Msw33mYG");function et(){const[t,e]=A.useState(""),r=Z(ke);Z(xe),A.useEffect(()=>{fetch("/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:r})}).then(a=>a.json()).then(a=>e(a.clientSecret))},[]);const c={clientSecret:t,appearance:{theme:"stripe"}};return b.jsx("div",{className:"Stripe",children:t&&b.jsx(de,{options:c,stripe:Qe,children:b.jsx(Ge,{})})})}export{et as default};
