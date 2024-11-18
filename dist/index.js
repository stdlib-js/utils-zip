"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var w=m(function(A,h){"use strict";var g=require("@stdlib/assert-is-boolean").isPrimitive,b=require("@stdlib/assert-is-plain-object"),c=require("@stdlib/assert-is-array"),y=require("@stdlib/assert-has-own-property"),u=require("@stdlib/string-format");function d(){var i,r,f,e,t,v,n,l,p,o,a,s;for(e={},f=null,r=Array.prototype.slice.call(arguments),i=r.length,a=0;a<i-1;a++)if(!c(r[a]))throw new TypeError(u("invalid argument. Must provide array arguments. Value: `%s`.",r[a]));if(t=r[i-1],v=b(t),!v&&!c(t))throw new TypeError(u("invalid argument. Last argument must be either an array or an options object. Value: `%s`.",t));if(v&&(e=r.pop()),i=r.length,i===0)throw new Error("insufficient arguments. Must provide at least one array.");if(y(e,"trunc")){if(!g(e.trunc))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","trunc",e.trunc))}else e.trunc=!0;if(y(e,"fill")&&(f=e.fill),y(e,"arrays")){if(!g(e.arrays))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","arrays",e.arrays))}else e.arrays=!1;if(i===1&&e.arrays&&(r=r[0],i=r.length),n=r[0].length,e.trunc)for(a=0;a<i;a++)o=r[a].length,o<n&&(n=o);else for(a=0;a<i;a++)o=r[a].length,o>n&&(n=o);for(p=new Array(n),s=0;s<n;s++){for(l=new Array(i),a=0;a<i;a++){if(t=r[a],t.length<=s){l[a]=f;continue}l[a]=t[s]}p[s]=l}return p}h.exports=d});var q=w();module.exports=q;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
