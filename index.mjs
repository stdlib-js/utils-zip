// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(){var o,i,l,a,h,f,p,d,m,j,y,c;for(a={},l=null,o=(i=Array.prototype.slice.call(arguments)).length,y=0;y<o-1;y++)if(!t(i[y]))throw new TypeError(n("1YhBw",i[y]));if(h=i[o-1],!(f=e(h))&&!t(h))throw new TypeError(n("1YhBx",h));if(f&&(a=i.pop()),0===(o=i.length))throw new Error(n("1Yh1x"));if(s(a,"trunc")){if(!r(a.trunc))throw new TypeError(n("1Yh2o","trunc",a.trunc))}else a.trunc=!0;if(s(a,"fill")&&(l=a.fill),s(a,"arrays")){if(!r(a.arrays))throw new TypeError(n("1Yh2o","arrays",a.arrays))}else a.arrays=!1;if(1===o&&a.arrays&&(o=(i=i[0]).length),p=i[0].length,a.trunc)for(y=0;y<o;y++)(j=i[y].length)<p&&(p=j);else for(y=0;y<o;y++)(j=i[y].length)>p&&(p=j);for(m=new Array(p),c=0;c<p;c++){for(d=new Array(o),y=0;y<o;y++)(h=i[y]).length<=c?d[y]=l:d[y]=h[c];m[c]=d}return m}export{o as default};
//# sourceMappingURL=index.mjs.map