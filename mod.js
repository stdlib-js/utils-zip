// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,l,s,f,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(u(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,o;for(t=[],o=0,n=A.exec(r);n;)(e=r.slice(o,A.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=A.lastIndex,n=A.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t,n;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var $,C=Object.prototype,I=C.toString,B=C.__defineGetter__,L=C.__defineSetter__,R=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var M=$;function Z(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"boolean"==typeof r}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return N&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=U()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[H]=t:delete r[H],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var Y=U();function rr(r){return"object"==typeof r&&(r instanceof K||(Y?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return W(r)||rr(r)}Z(er,"isPrimitive",W),Z(er,"isObject",rr);var tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var nr=/./;function or(){return new Function("return this;")()}var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof cr?cr:null,lr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!W(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(lr)return lr;if(ir)return ir;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=sr.document&&sr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function dr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(gr,"REGEXP",yr),Z(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var hr="function"==typeof nr||"object"==typeof pr||"function"==typeof fr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};function wr(r){return"function"===hr(r)}var vr,mr=Object,jr=Object.getPrototypeOf;vr=wr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=vr;var Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!tr(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&wr(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Sr(){var r,e,t,n,o,i,a,c,u,l,s,f;for(n={},t=null,r=(e=Array.prototype.slice.call(arguments)).length,s=0;s<r-1;s++)if(!tr(e[s]))throw new TypeError(P("invalid argument. Must provide array arguments. Value: `%s`.",e[s]));if(!(i=Or(o=e[r-1]))&&!tr(o))throw new TypeError(P("invalid argument. Last argument must be either an array or an options object. Value: `%s`.",o));if(i&&(n=e.pop()),0===(r=e.length))throw new Error("insufficient arguments. Must provide at least one array.");if(q(n,"trunc")){if(!W(n.trunc))throw new TypeError(P("invalid option. `%s` option must be a boolean. Option: `%s`.","trunc",n.trunc))}else n.trunc=!0;if(q(n,"fill")&&(t=n.fill),q(n,"arrays")){if(!W(n.arrays))throw new TypeError(P("invalid option. `%s` option must be a boolean. Option: `%s`.","arrays",n.arrays))}else n.arrays=!1;if(1===r&&n.arrays&&(r=(e=e[0]).length),a=e[0].length,n.trunc)for(s=0;s<r;s++)(l=e[s].length)<a&&(a=l);else for(s=0;s<r;s++)(l=e[s].length)>a&&(a=l);for(u=new Array(a),f=0;f<a;f++){for(c=new Array(r),s=0;s<r;s++)(o=e[s]).length<=f?c[s]=t:c[s]=o[f];u[f]=c}return u}export{Sr as default};
//# sourceMappingURL=mod.js.map
