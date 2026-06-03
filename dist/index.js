"use strict";var w=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var m=w(function(O,c){"use strict";var h=require("@stdlib/assert-is-boolean").isPrimitive,b=require("@stdlib/assert-is-plain-object"),y=require("@stdlib/assert-is-array"),g=require("@stdlib/assert-has-own-property"),l=require("@stdlib/string-format");function d(){var i,r,f,e,t,v,n,u,p,o,a,s;for(e={},f=null,r=Array.prototype.slice.call(arguments),i=r.length,a=0;a<i-1;a++)if(!y(r[a]))throw new TypeError(l("invalid argument. Must provide array arguments. Value: `%s`.",r[a]));if(t=r[i-1],v=b(t),!v&&!y(t))throw new TypeError(l("invalid argument. Last argument must be either an array or an options object. Value: `%s`.",t));if(v&&(e=r.pop()),i=r.length,i===0)throw new Error("insufficient arguments. Must provide at least one array.");if(g(e,"trunc")){if(!h(e.trunc))throw new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","trunc",e.trunc))}else e.trunc=!0;if(g(e,"fill")&&(f=e.fill),g(e,"arrays")){if(!h(e.arrays))throw new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","arrays",e.arrays))}else e.arrays=!1;if(i===1&&e.arrays&&(r=r[0],i=r.length),n=r[0].length,e.trunc)for(a=0;a<i;a++)o=r[a].length,o<n&&(n=o);else for(a=0;a<i;a++)o=r[a].length,o>n&&(n=o);for(p=[],s=0;s<n;s++){for(u=[],a=0;a<i;a++){if(t=r[a],t.length<=s){u.push(f);continue}u.push(t[s])}p.push(u)}return p}c.exports=d});var q=m();module.exports=q;
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
