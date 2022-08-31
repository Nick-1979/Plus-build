(()=>{var n,e,i={69314:()=>{},18983:()=>{},11377:(n,e,i)=>{"use strict";var t=i(94158),r=i(6424),o=i(48801);new(i.n(o)())(6);const l={info:{display:null,legal:null,web:null,email:null,twitter:null}};var a=i(36631),u=i(44235),s=i(38090);const d=(0,i(45951).Rf)(((n,e)=>e||n)),c=(0,a.Z)((async function(n){var e,i;if(!n)return;const t=null!==(e=null==n||null===(i=n.name)||void 0===i?void 0:i.replace(" Relay Chain",""))&&void 0!==e?e:n,r=d.filter((e=>{return i=e,(null===(r=String(i.text))||void 0===r?void 0:r.toLowerCase())===(null==t?void 0:t.toLowerCase())||i.genesisHash===n;var i,r}))[0],o=new u.U(null==r?void 0:r.value),l=await s.G.create({provider:o});return{api:l,chainName:String(null==r?void 0:r.text),coin:l.registry.chainTokens[0],decimals:l.registry.chainDecimals[0],genesisHash:null==r?void 0:r.genesisHash,url:null==r?void 0:r.value}}));onmessage=n=>{const{chain:e}=n.data;(async function(n){console.log("getting crowdloans ...");const{api:e}=await c(n),i=(await e.query.paras.paraLifecycles.entries()).map((([n,e])=>n.args[0])),[o,a,u,s,d]=await Promise.all([e.query.auctions.auctionInfo(),e.query.auctions.auctionCounter(),e.query.crowdloan.funds.multi(i),e.query.slots.leases.multi(i),e.rpc.chain.getHeader()]),p=[];s.forEach(((n,e)=>{n.length&&p.push(i[e].toString())}));const v=u.map(((n,e)=>{if(n.toString()){const t=JSON.parse(n.toString());return t.raised=(0,r.m)(t.raised).toString(),t.cap=(0,r.m)(t.cap).toString(),t.deposit=t.deposit.toString(),t.paraId=String(i[e]),t.hasLeased=p.includes(t.paraId),t}return null})).filter((n=>n)),f=v.map((n=>n.depositor)),g=await async function(n,e){console.log(`getting identities of .... on ${n}`);const{api:i}=await c(n);return(await i.query.identity.identityOf.multi(e)).map((n=>{var e,i,r,o,a,u,s,d,c,p,v,f,g,w,m,h,y,b,S,O;if(!n.toString())return l;const x=JSON.parse(n.toString());return{info:{display:(null==x||null===(e=x.info)||void 0===e||null===(i=e.display)||void 0===i?void 0:i.raw)&&(0,t.r)(null==x||null===(r=x.info)||void 0===r||null===(o=r.display)||void 0===o?void 0:o.raw),legal:(null==x||null===(a=x.info)||void 0===a||null===(u=a.legal)||void 0===u?void 0:u.raw)&&(0,t.r)(null==x||null===(s=x.info)||void 0===s||null===(d=s.legal)||void 0===d?void 0:d.raw),web:(null==x||null===(c=x.info)||void 0===c||null===(p=c.web)||void 0===p?void 0:p.raw)&&(0,t.r)(null==x||null===(v=x.info)||void 0===v||null===(f=v.web)||void 0===f?void 0:f.raw),email:(null==x||null===(g=x.info)||void 0===g||null===(w=g.email)||void 0===w?void 0:w.raw)&&(0,t.r)(null==x||null===(m=x.info)||void 0===m||null===(h=m.email)||void 0===h?void 0:h.raw),twitter:(null==x||null===(y=x.info)||void 0===y||null===(b=y.twitter)||void 0===b?void 0:b.raw)&&(0,t.r)(null==x||null===(S=x.info)||void 0===S||null===(O=S.twitter)||void 0===O?void 0:O.raw)}}}))}(n,f),w=v.map(((n,e)=>({fund:n,identity:g[e]}))),m=await e.query.auctions.winning(u);return{auctionCounter:Number(a),auctionInfo:o.toString()?JSON.parse(o.toString()):null,blockchain:n,crowdloans:w,currentBlockNumber:Number(String(d.number)),minContribution:e.consts.crowdloan.minContribution.toString(),winning:m.toString()?Array.from(m.toHuman()):[]}})(e).then((n=>{postMessage(n)}))}}},t={};function r(n){var e=t[n];if(void 0!==e)return e.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return i[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=i,r.x=()=>{var n=r.O(void 0,[593,371],(()=>r(11377)));return r.O(n)},n=[],r.O=(e,i,t,o)=>{if(!i){var l=1/0;for(d=0;d<n.length;d++){for(var[i,t,o]=n[d],a=!0,u=0;u<i.length;u++)(!1&o||l>=o)&&Object.keys(r.O).every((n=>r.O[n](i[u])))?i.splice(u--,1):(a=!1,o<l&&(l=o));if(a){n.splice(d--,1);var s=t();void 0!==s&&(e=s)}}return e}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[i,t,o]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var i in e)r.o(e,i)&&!r.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},r.f={},r.e=n=>Promise.all(Object.keys(r.f).reduce(((e,i)=>(r.f[i](n,e),e)),[])),r.u=n=>n+".js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n={474:1};r.f.i=(e,i)=>{n[e]||importScripts(r.p+r.u(e))};var e=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],i=e.push.bind(e);e.push=e=>{var[t,o,l]=e;for(var a in o)r.o(o,a)&&(r.m[a]=o[a]);for(l&&l(r);t.length;)n[t.pop()]=1;i(e)}})(),e=r.x,r.x=()=>Promise.all([r.e(593),r.e(371)]).then(e),r.x()})();