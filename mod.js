// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,b,"e"),n=f.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,u,l,s,f,p,g,d,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",l+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=O.exec(r);n;)(e=r.slice(o,O.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=O.lastIndex,n=O.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var V,F=Object.prototype,P=F.toString,C=F.__defineGetter__,I=F.__defineSetter__,$=F.__lookupGetter__,B=F.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&I&&I.call(r,e,t.set),r};var R=V;function L(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"boolean"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return Y&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&W.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";var N=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[z],e=M(r,z);try{r[z]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[z]=t:delete r[z],n}:function(r){return U.call(r)},q=Boolean,D=Boolean.prototype.toString;var H=Z();function J(r){return"object"==typeof r&&(r instanceof q||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===N(r)))}function K(r){return G(r)||J(r)}L(K,"isPrimitive",G),L(K,"isObject",J);var Q=Array.isArray?Array.isArray:function(r){return"[object Array]"===N(r)};var rr=/./;var er="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},or="object"==typeof nr?nr:null,ir="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!G(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(er)return er;if(tr)return tr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function fr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,o;if(("Object"===(t=N(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(lr,"REGEXP",sr),L(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var gr="function"==typeof rr||"object"==typeof ur||"function"==typeof cr?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function dr(r){return"function"===gr(r)}var yr,hr=Object,br=Object.getPrototypeOf;yr=dr(Object.getPrototypeOf)?br:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===N(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var wr=yr;var vr=Object.prototype;function mr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Q(r)}(r)&&(e=function(r){return null==r?null:(r=hr(r),wr(r))}(r),!e||!M(r,"constructor")&&M(e,"constructor")&&dr(e.constructor)&&"[object Function]"===N(e.constructor)&&M(e,"isPrototypeOf")&&dr(e.isPrototypeOf)&&(e===vr||function(r){var e;for(e in r)if(!M(r,e))return!1;return!0}(r)))}function jr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function _r(){var r,e,t,n,o,i,a,c,u,l,s,f;for(n={},t=null,r=(e=Array.prototype.slice.call(arguments)).length,s=0;s<r-1;s++)if(!Q(e[s]))throw new TypeError(jr("1YhBw",e[s]));if(!(i=mr(o=e[r-1]))&&!Q(o))throw new TypeError(jr("1YhBx",o));if(i&&(n=e.pop()),0===(r=e.length))throw new Error(jr("1Yh1x"));if(M(n,"trunc")){if(!G(n.trunc))throw new TypeError(jr("1Yh2o","trunc",n.trunc))}else n.trunc=!0;if(M(n,"fill")&&(t=n.fill),M(n,"arrays")){if(!G(n.arrays))throw new TypeError(jr("1Yh2o","arrays",n.arrays))}else n.arrays=!1;if(1===r&&n.arrays&&(r=(e=e[0]).length),a=e[0].length,n.trunc)for(s=0;s<r;s++)(l=e[s].length)<a&&(a=l);else for(s=0;s<r;s++)(l=e[s].length)>a&&(a=l);for(u=new Array(a),f=0;f<a;f++){for(c=new Array(r),s=0;s<r;s++)(o=e[s]).length<=f?c[s]=t:c[s]=o[f];u[f]=c}return u}export{_r as default};
//# sourceMappingURL=mod.js.map
