// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,a,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(r,t)||f.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var l=t;function a(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&v.call(r,t)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(r){var t,e,n;if(null==r)return b.call(r);e=r[d],t=w(r,d);try{r[d]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[d]=e:delete r[d],n}:function(r){return b.call(r)},j=Boolean.prototype.toString;var _=s();function m(r){return"object"==typeof r&&(r instanceof Boolean||(_?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function h(r){return y(r)||m(r)}a(h,"isPrimitive",y),a(h,"isObject",m);var O=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var E=/./;function S(){return new Function("return this;")()}var A="object"==typeof self?self:null,P="object"==typeof window?window:null,C="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof C?C:null;var B=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(A)return A;if(P)return P;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),x=B.document&&B.document.childNodes,F=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;function G(r){return null!==r&&"object"==typeof r}function L(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=k.exec(n.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(V,"REGEXP",k),a(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!O(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(G));var M="function"==typeof E||"object"==typeof F||"function"==typeof x?function(r){return L(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?L(r).toLowerCase():t};function I(r){return"function"===M(r)}var R,U=Object.getPrototypeOf;R=I(Object.getPrototypeOf)?U:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var N=R;var X=Object.prototype;function q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!O(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),N(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&I(t.constructor)&&"[object Function]"===g(t.constructor)&&w(t,"isPrototypeOf")&&I(t.isPrototypeOf)&&(t===X||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function z(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function D(){var r,t,e,n,o,u,i,c,f,l,a,p;for(n={},e=null,r=(t=Array.prototype.slice.call(arguments)).length,a=0;a<r-1;a++)if(!O(t[a]))throw new TypeError(z("0mCCl",t[a]));if(!(u=q(o=t[r-1]))&&!O(o))throw new TypeError(z("0mCCm",o));if(u&&(n=t.pop()),0===(r=t.length))throw new Error("insufficient arguments. Must provide at least one array.");if(w(n,"trunc")){if(!y(n.trunc))throw new TypeError(z("0mC30","trunc",n.trunc))}else n.trunc=!0;if(w(n,"fill")&&(e=n.fill),w(n,"arrays")){if(!y(n.arrays))throw new TypeError(z("0mC30","arrays",n.arrays))}else n.arrays=!1;if(1===r&&n.arrays&&(r=(t=t[0]).length),i=t[0].length,n.trunc)for(a=0;a<r;a++)(l=t[a].length)<i&&(i=l);else for(a=0;a<r;a++)(l=t[a].length)>i&&(i=l);for(f=new Array(i),p=0;p<i;p++){for(c=new Array(r),a=0;a<r;a++)(o=t[a]).length<=p?c[a]=e:c[a]=o[p];f[p]=c}return f}export{D as default};
//# sourceMappingURL=mod.js.map
