// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,i,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(i=(-s).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=s.toString(e),s||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):l.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,i,a,o,p,l,u,f;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,u=0;u<r.length;u++)if(c(i=r[u]))p+=i;else{if(e=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,i,n;for(t=[],n=0,i=T.exec(r);i;)(e=r.slice(n,T.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=T.lastIndex,i=T.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var O,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,L=C.__lookupGetter__,W=C.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var G=O;function B(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"boolean"==typeof r}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return N&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=U()?function(r){var e,t,i;if(null==r)return X.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return X.call(r)}return i=X.call(r),e?r[H]=t:delete r[H],i}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var Y=U();function rr(r){return"object"==typeof r&&(r instanceof K||(Y?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return M(r)||rr(r)}B(er,"isPrimitive",M),B(er,"isObject",rr);var tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var ir=/./;function nr(r){return"number"==typeof r}function ar(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function or(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ar(n):ar(n)+r,i&&(r="-"+r)),r}var sr=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function pr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!nr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=or(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=or(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===cr.call(r.specifier)?cr.call(t):sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function lr(r){return"string"==typeof r}var ur=Math.abs,fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,br=/^(\d+)$/,yr=/^(\d+)e/,vr=/\.0$/,mr=/\.0*e/,Er=/(\..*[^0])0*e/;function xr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ur(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=dr.call(t,Er,"$1e"),t=dr.call(t,mr,"e"),t=dr.call(t,vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dr.call(t,hr,"e+0$1"),t=dr.call(t,wr,"e-0$1"),r.alternate&&(t=dr.call(t,br,"$1."),t=dr.call(t,yr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gr.call(r.specifier)?gr.call(t):fr.call(t)}function kr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Sr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+kr(i):kr(i)+r}var jr=String.fromCharCode,Vr=isNaN,_r=Array.isArray;function Tr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,i,n,a,o,s,c,p;if(!_r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(lr(i=r[c]))o+=i;else{if(e=void 0!==i.precision,!(i=Tr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,Vr(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,Vr(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=pr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Vr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Vr(a)?String(i.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=xr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=or(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Sr(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var Ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ir(r){var e,t,i,n;for(t=[],n=0,i=Ar.exec(r);i;)(e=r.slice(n,Ar.lastIndex-i[0].length)).length&&t.push(e),t.push(Fr(i)),n=Ar.lastIndex,i=Ar.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function Cr(r){var e,t;if(!Or(r))throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ir(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}function Rr(){return new Function("return this;")()}var Zr="object"==typeof self?self:null,Pr="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wr="object"==typeof Lr?Lr:null,Gr="object"==typeof globalThis?globalThis:null;var Br=function(r){if(arguments.length){if(!M(r))throw new TypeError(Cr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Rr()}if(Gr)return Gr;if(Zr)return Zr;if(Pr)return Pr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Br.document&&Br.document.childNodes,Nr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr=/^\s*function\s*([^(]*)/i;function zr(r){return null!==r&&"object"==typeof r}function qr(r){var e,t,i,n;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Xr.exec(i.toString()))return e[1]}return zr(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}B(Ur,"REGEXP",Xr),B(zr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Cr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!tr(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(zr));var Dr="function"==typeof ir||"object"==typeof Nr||"function"==typeof Mr?function(r){return qr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?qr(r).toLowerCase():e};function Hr(r){return"function"===Dr(r)}var Jr,Kr=Object,Qr=Object.getPrototypeOf;Jr=Hr(Object.getPrototypeOf)?Qr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Yr=Jr;var re=Object.prototype;function ee(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!tr(r)}(r)&&(e=function(r){return null==r?null:(r=Kr(r),Yr(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&Hr(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&Hr(e.isPrototypeOf)&&(e===re||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function te(r){return"number"==typeof r}function ie(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ne(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ie(n):ie(n)+r,i&&(r="-"+r)),r}var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function se(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!te(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ne(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ne(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===oe.call(r.specifier)?oe.call(t):ae.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ce(r){return"string"==typeof r}var pe=Math.abs,le=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,ve=/(\..*[^0])0*e/;function me(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!te(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":pe(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=fe.call(t,ve,"$1e"),t=fe.call(t,ye,"e"),t=fe.call(t,be,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fe.call(t,ge,"e+0$1"),t=fe.call(t,de,"e-0$1"),r.alternate&&(t=fe.call(t,he,"$1."),t=fe.call(t,we,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ue.call(r.specifier)?ue.call(t):le.call(t)}function Ee(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function xe(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Ee(i):Ee(i)+r}var ke=String.fromCharCode,Se=isNaN,je=Array.isArray;function Ve(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _e(r){var e,t,i,n,a,o,s,c,p;if(!je(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(ce(i=r[c]))o+=i;else{if(e=void 0!==i.precision,!(i=Ve(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,Se(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,Se(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=se(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Se(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Se(a)?String(i.arg):ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=me(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=xe(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ae(r){var e,t,i,n;for(t=[],n=0,i=Te.exec(r);i;)(e=r.slice(n,Te.lastIndex-i[0].length)).length&&t.push(e),t.push($e(i)),n=Te.lastIndex,i=Te.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Fe(r){return"string"==typeof r}function Ie(r){var e,t,i;if(!Fe(r))throw new TypeError(Ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ae(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return _e.apply(null,t)}function Oe(){var r,e,t,i,n,a,o,s,c,p,l,u;for(i={},t=null,r=(e=Array.prototype.slice.call(arguments)).length,l=0;l<r-1;l++)if(!tr(e[l]))throw new TypeError(Ie("invalid argument. Must provide array arguments. Value: `%s`.",e[l]));if(!(a=ee(n=e[r-1]))&&!tr(n))throw new TypeError(Ie("invalid argument. Last argument must be either an array or an options object. Value: `%s`.",n));if(a&&(i=e.pop()),0===(r=e.length))throw new Error("insufficient arguments. Must provide at least one array.");if(q(i,"trunc")){if(!M(i.trunc))throw new TypeError(Ie("invalid option. `%s` option must be a boolean. Option: `%s`.","trunc",i.trunc))}else i.trunc=!0;if(q(i,"fill")&&(t=i.fill),q(i,"arrays")){if(!M(i.arrays))throw new TypeError(Ie("invalid option. `%s` option must be a boolean. Option: `%s`.","arrays",i.arrays))}else i.arrays=!1;if(1===r&&i.arrays&&(r=(e=e[0]).length),o=e[0].length,i.trunc)for(l=0;l<r;l++)(p=e[l].length)<o&&(o=p);else for(l=0;l<r;l++)(p=e[l].length)>o&&(o=p);for(c=new Array(o),u=0;u<o;u++){for(s=new Array(r),l=0;l<r;l++)(n=e[l]).length<=u?s[l]=t:s[l]=n[u];c[u]=s}return c}export{Oe as default};
//# sourceMappingURL=mod.js.map
