(()=>{var e,t,r,n,o={69314:()=>{},18983:()=>{},48731:(e,t,r)=>{"use strict";r.d(t,{UT:()=>i,k8:()=>o});var n=r(33661);function o(e,t){return function(e,t){if(!e)throw new Error((0,n.m)(t)?t():t)}(null!=e,t),e}function i(e){throw new Error(`This codepath should be unreachable. Unhandled input: ${e}`)}},48524:(e,t,r)=>{"use strict";var n=r(36631),o=r(60576),i=r(38090);const a=(0,n.Z)((async function(e){const t=new o.U(e);return await i.G.create({provider:t})}));onmessage=e=>{const{endpoint:t,stakerAddress:r}=e.data;(async function(e,t){try{const r=await a(e),n=await r.rpc.chain.getFinalizedHead(),o=await r.at(n),i=await o.query.staking.nominators(t),c=JSON.parse(JSON.stringify(i));return c?c.targets:null}catch(e){return console.log("something went wrong while getting nominators ",e),null}})(t,r).then((e=>{postMessage(e)}))}}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,a.x=()=>{var e=a.O(void 0,[593],(()=>a(48524)));return a.O(e)},e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],c=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={760:1};a.f.i=(t,r)=>{e[t]||importScripts(a.p+a.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],r=t.push.bind(t);t.push=t=>{var[n,o,i]=t;for(var c in o)a.o(o,c)&&(a.m[c]=o[c]);for(i&&i(a);n.length;)e[n.pop()]=1;r(t)}})(),n=a.x,a.x=()=>a.e(593).then(n),a.x()})();