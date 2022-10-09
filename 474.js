(()=>{var e,n,t,r,i={69314:()=>{},18983:()=>{},11377:(e,n,t)=>{"use strict";var r=t(94158),i=t(6424),o=t(48801);new(t.n(o)())(6);const l={info:{display:null,legal:null,web:null,email:null,twitter:null}};var a=t(36631),u=t(60576),s=t(38090);const d=(0,t(45951).Rf)(((e,n)=>n||e)),c=(0,a.Z)((async function(e){var n,t;if(!e)return;const r=null!==(n=null==e||null===(t=e.name)||void 0===t?void 0:t.replace(" Relay Chain",""))&&void 0!==n?n:e,i=d.filter((n=>{return t=n,(null===(i=String(t.text))||void 0===i?void 0:i.toLowerCase())===(null==r?void 0:r.toLowerCase())||t.genesisHash===e;var t,i}))[0],o=new u.U(null==i?void 0:i.value),l=await s.G.create({provider:o});return{api:l,chainName:String(null==i?void 0:i.text),coin:l.registry.chainTokens[0],decimals:l.registry.chainDecimals[0],genesisHash:null==i?void 0:i.genesisHash,url:null==i?void 0:i.value}}));onmessage=e=>{const{chain:n}=e.data;(async function(e){console.log("getting crowdloans ...");const{api:n}=await c(e),t=(await n.query.paras.paraLifecycles.entries()).map((([e,n])=>e.args[0])),[o,a,u,s,d]=await Promise.all([n.query.auctions.auctionInfo(),n.query.auctions.auctionCounter(),n.query.crowdloan.funds.multi(t),n.query.slots.leases.multi(t),n.rpc.chain.getHeader()]),f=[];s.forEach(((e,n)=>{e.length&&f.push(t[n].toString())}));const p=u.map(((e,n)=>{if(e.toString()){const r=JSON.parse(e.toString());return r.raised=(0,i.m)(r.raised).toString(),r.cap=(0,i.m)(r.cap).toString(),r.deposit=r.deposit.toString(),r.paraId=String(t[n]),r.hasLeased=f.includes(r.paraId),r}return null})).filter((e=>e)),v=p.map((e=>e.depositor)),g=await async function(e,n){console.log(`getting identities of .... on ${e}`);const{api:t}=await c(e);return(await t.query.identity.identityOf.multi(n)).map((e=>{var n,t,i,o,a,u,s,d,c,f,p,v,g,w,y,m,h,b,S,O;if(!e.toString())return l;const j=JSON.parse(e.toString());return{info:{display:(null==j||null===(n=j.info)||void 0===n||null===(t=n.display)||void 0===t?void 0:t.raw)&&(0,r.r)(null==j||null===(i=j.info)||void 0===i||null===(o=i.display)||void 0===o?void 0:o.raw),legal:(null==j||null===(a=j.info)||void 0===a||null===(u=a.legal)||void 0===u?void 0:u.raw)&&(0,r.r)(null==j||null===(s=j.info)||void 0===s||null===(d=s.legal)||void 0===d?void 0:d.raw),web:(null==j||null===(c=j.info)||void 0===c||null===(f=c.web)||void 0===f?void 0:f.raw)&&(0,r.r)(null==j||null===(p=j.info)||void 0===p||null===(v=p.web)||void 0===v?void 0:v.raw),email:(null==j||null===(g=j.info)||void 0===g||null===(w=g.email)||void 0===w?void 0:w.raw)&&(0,r.r)(null==j||null===(y=j.info)||void 0===y||null===(m=y.email)||void 0===m?void 0:m.raw),twitter:(null==j||null===(h=j.info)||void 0===h||null===(b=h.twitter)||void 0===b?void 0:b.raw)&&(0,r.r)(null==j||null===(S=j.info)||void 0===S||null===(O=S.twitter)||void 0===O?void 0:O.raw)}}}))}(e,v),w=p.map(((e,n)=>({fund:e,identity:g[n]}))),y=await n.query.auctions.winning(u);return{auctionCounter:Number(a),auctionInfo:o.toString()?JSON.parse(o.toString()):null,blockchain:e,crowdloans:w,currentBlockNumber:Number(String(d.number)),minContribution:n.consts.crowdloan.minContribution.toString(),winning:y.toString()?Array.from(y.toHuman()):[]}})(n).then((e=>{postMessage(e)}))}}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.loaded=!0,t.exports}l.m=i,l.x=()=>{var e=l.O(void 0,[593,371],(()=>l(11377)));return l.O(e)},e=[],l.O=(n,t,r,i)=>{if(!t){var o=1/0;for(d=0;d<e.length;d++){for(var[t,r,i]=e[d],a=!0,u=0;u<t.length;u++)(!1&i||o>=i)&&Object.keys(l.O).every((e=>l.O[e](t[u])))?t.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,r,i]},l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);l.r(i);var o={};n=n||[null,t({}),t([]),t(t)];for(var a=2&r&&e;"object"==typeof a&&!~n.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((n=>o[n]=()=>e[n]));return o.default=()=>e,l.d(i,o),i},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((n,t)=>(l.f[t](e,n),n)),[])),l.u=e=>e+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var n=l.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={474:1};l.f.i=(n,t)=>{e[n]||importScripts(l.p+l.u(n))};var n=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],t=n.push.bind(n);n.push=n=>{var[r,i,o]=n;for(var a in i)l.o(i,a)&&(l.m[a]=i[a]);for(o&&o(l);r.length;)e[r.pop()]=1;t(n)}})(),r=l.x,l.x=()=>Promise.all([l.e(593),l.e(371)]).then(r),l.x()})();