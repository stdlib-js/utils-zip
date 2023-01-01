// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function o(){var o,i,l,a,m,f,p,d,h,y,c,j;for(a={},l=null,o=(i=Array.prototype.slice.call(arguments)).length,c=0;c<o-1;c++)if(!t(i[c]))throw new TypeError(n("0mCCl",i[c]));if(m=i[o-1],!(f=e(m))&&!t(m))throw new TypeError(n("0mCCm",m));if(f&&(a=i.pop()),0===(o=i.length))throw new Error("insufficient arguments. Must provide at least one array.");if(s(a,"trunc")){if(!r(a.trunc))throw new TypeError(n("0mC30","trunc",a.trunc))}else a.trunc=!0;if(s(a,"fill")&&(l=a.fill),s(a,"arrays")){if(!r(a.arrays))throw new TypeError(n("0mC30","arrays",a.arrays))}else a.arrays=!1;if(1===o&&a.arrays&&(o=(i=i[0]).length),p=i[0].length,a.trunc)for(c=0;c<o;c++)(y=i[c].length)<p&&(p=y);else for(c=0;c<o;c++)(y=i[c].length)>p&&(p=y);for(h=new Array(p),j=0;j<p;j++){for(d=new Array(o),c=0;c<o;c++)(m=i[c]).length<=j?d[c]=l:d[c]=m[j];h[j]=d}return h}export{o as default};
//# sourceMappingURL=index.mjs.map
