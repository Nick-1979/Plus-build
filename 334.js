(()=>{var e,t,r={69314:()=>{},18983:()=>{},47716:(e,t,r)=>{"use strict";var o=r(36631),n=r(44235),i=r(38090);const a=(0,o.Z)((async function(e){const t=new n.U(e);return await i.G.create({provider:t})}));onmessage=e=>{const{endpoint:t,validatorsAccountIds:r}=e.data;(async function(e,t){try{const r=await a(e);let o=[];const n=50;let i=0;for(;t.length>i;){console.log(`_accountIds.length  :${t.length}  totalFetched :${i}`);const e=await Promise.all(t.slice(i,i+n).map((e=>r.derive.accounts.info(e))));o=o.concat(e),i+=n}return JSON.parse(JSON.stringify(o))}catch(e){return console.log("something went wrong while getting validators id, err:",e),null}})(t,r).then((e=>{postMessage(e)}))}}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=r,n.x=()=>{var e=n.O(void 0,[593],(()=>n(47716)));return n.O(e)},e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,o,i]=e[p],s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={334:1};n.f.i=(t,r)=>{e[t]||importScripts(n.p+n.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],r=t.push.bind(t);t.push=t=>{var[o,i,a]=t;for(var s in i)n.o(i,s)&&(n.m[s]=i[s]);for(a&&a(n);o.length;)e[o.pop()]=1;r(t)}})(),t=n.x,n.x=()=>n.e(593).then(t),n.x()})();