"use strict";µBlock.cosmeticFilteringEngine=(()=>{const e=µBlock,t=parseInt(vAPI.localStorage.getItem("cosmeticSurveyingMissCountMax"),10)||15,i=class{constructor(){this.reset()}reset(){return this.cosmetic=new Set,this.cosmeticSurveyingMissCount=0,this.net=new Map,this.lastAccessTime=Date.now(),this}dispose(){this.cosmetic=this.net=null,i.junkyard.length<25&&i.junkyard.push(this)}addCosmetic(e){const t=e.selectors;let i=t.length||0;if(e.first&&0===i)(e.cost||0)>=80&&(this.cosmeticSurveyingMissCount+=1);else for(this.cosmeticSurveyingMissCount=0;i--;)this.cosmetic.add(t[i])}addNet(e){if("string"==typeof e?this.addNetOne(e,Date.now()):this.addNetMany(e,Date.now()),this.net.size<i.netHighWaterMark)return;const t=this.net,r=Array.from(t.keys()).sort((function(e,i){return t.get(i)-t.get(e)})).slice(i.netLowWaterMark);let s=r.length;for(;s--;)t.delete(r[s])}addNetOne(e,t){this.net.set(e,t)}addNetMany(e,t){let i=e.length||0;for(;i--;)this.net.set(e[i],t)}add(e){this.lastAccessTime=Date.now(),"cosmetic"===e.type?this.addCosmetic(e):this.addNet(e.selectors)}remove(e){this.lastAccessTime=Date.now(),void 0!==e&&"cosmetic"!==e||(this.cosmetic.clear(),this.cosmeticSurveyingMissCount=0),void 0!==e&&"net"!==e||this.net.clear()}retrieveToArray(e,t){for(let i of e)t.push(i)}retrieveToSet(e,t){for(let i of e)t.add(i)}retrieve(e,t){this.lastAccessTime=Date.now();const i="cosmetic"===e?this.cosmetic:this.net.keys();Array.isArray(t)?this.retrieveToArray(i,t):this.retrieveToSet(i,t)}static factory(){const e=i.junkyard.pop();return e?e.reset():new i}};i.netLowWaterMark=20,i.netHighWaterMark=30,i.junkyard=[];const r=function(){this.reHasUnicode=/[^\x00-\x7F]/,this.rePlainSelector=/^[#.][\w\\-]+/,this.rePlainSelectorEscaped=/^[#.](?:\\[0-9A-Fa-f]+ |\\.|\w|-)+/,this.rePlainSelectorEx=/^[^#.\[(]+([#.][\w-]+)|([#.][\w-]+)$/,this.reEscapeSequence=/\\([0-9A-Fa-f]+ |.)/g,this.reSimpleHighGeneric=/^(?:[a-z]*\[[^\]]+\]|\S+)$/,this.reHighMedium=/^\[href\^="https?:\/\/([^"]{8})[^"]*"\]$/,this.selectorCache=new Map,this.selectorCachePruneDelay=6e5,this.selectorCacheAgeMax=72e5,this.selectorCacheCountMin=25,this.netSelectorCacheCountMax=i.netHighWaterMark,this.selectorCacheTimer=null,this.specificFilters=new e.staticExtFilteringEngine.HostnameBasedDB(2),this.sessionFilterDB=new e.staticExtFilteringEngine.SessionDB,this.lowlyGeneric=Object.create(null),this.lowlyGeneric.id={canonical:"ids",prefix:"#",simple:new Set,complex:new Map},this.lowlyGeneric.cl={canonical:"classes",prefix:".",simple:new Set,complex:new Map},this.highlyGeneric=Object.create(null),this.highlyGeneric.simple={canonical:"highGenericHideSimple",dict:new Set,str:"",mru:new e.MRUCache(16)},this.highlyGeneric.complex={canonical:"highGenericHideComplex",dict:new Set,str:"",mru:new e.MRUCache(16)},this.$simpleSet=new Set,this.$complexSet=new Set,this.$specificSet=new Set,this.$exceptionSet=new Set,this.$proceduralSet=new Set,this.$dummySet=new Set,this.reset()};return r.prototype.reset=function(){this.µburi=e.URI,this.frozen=!1,this.acceptedCount=0,this.discardedCount=0,this.duplicateBuster=new Set,this.selectorCache.clear(),null!==this.selectorCacheTimer&&(clearTimeout(this.selectorCacheTimer),this.selectorCacheTimer=null),this.needDOMSurveyor=!1,this.specificFilters.clear(),this.lowlyGeneric.id.simple.clear(),this.lowlyGeneric.id.complex.clear(),this.lowlyGeneric.cl.simple.clear(),this.lowlyGeneric.cl.complex.clear(),this.highlyGeneric.simple.dict.clear(),this.highlyGeneric.simple.str="",this.highlyGeneric.simple.mru.reset(),this.highlyGeneric.complex.dict.clear(),this.highlyGeneric.complex.str="",this.highlyGeneric.complex.mru.reset()},r.prototype.freeze=function(){this.duplicateBuster.clear(),this.specificFilters.collectGarbage(),this.needDOMSurveyor=0!==this.lowlyGeneric.id.simple.size||0!==this.lowlyGeneric.id.complex.size||0!==this.lowlyGeneric.cl.simple.size||0!==this.lowlyGeneric.cl.complex.size,this.highlyGeneric.simple.str=Array.from(this.highlyGeneric.simple.dict).join(",\n"),this.highlyGeneric.simple.mru.reset(),this.highlyGeneric.complex.str=Array.from(this.highlyGeneric.complex.dict).join(",\n"),this.highlyGeneric.complex.mru.reset(),this.frozen=!0},r.prototype.keyFromSelector=function(e){let t=this.rePlainSelector.exec(e);if(null===t)return;let i=t[0];if(-1===i.indexOf("\\"))return i;if(t=this.rePlainSelectorEscaped.exec(e),null===t)return;i="";const r=t[0];let s=0;for(this.reEscapeSequence.lastIndex=0;;){if(t=this.reEscapeSequence.exec(r),null===t)return i+r.slice(s);i+=r.slice(s,t.index),s=this.reEscapeSequence.lastIndex,1===t[1].length?i+=t[1]:i+=String.fromCharCode(parseInt(t[1],16))}},r.prototype.compile=function(t,i){if(i.select(e.compiledCosmeticSection),!1===t.hasOptions())return this.compileGenericSelector(t,i),!0;let r=!0;for(const{hn:e,not:s,bad:c}of t.extOptions())c||(!1===s&&(r=!1),this.compileSpecificSelector(t,e,s,i));return r&&this.compileGenericSelector(t,i),!0},r.prototype.compileGenericSelector=function(e,t){e.isException()?this.compileGenericUnhideSelector(e,t):this.compileGenericHideSelector(e,t)},r.prototype.compileGenericHideSelector=function(t,i){const{raw:r,compiled:s,pseudoclass:c}=t.result;if(void 0===s){const t=i.properties.get("assetKey")||"?";e.logger.writeOne({realm:"message",type:"error",text:`Invalid generic cosmetic filter in ${t}: ${r}`})}const o=s.charCodeAt(0);let n;if(35===o){if(n=this.keyFromSelector(s),n===s)return void i.push([0,n.slice(1)])}else if(46===o&&(n=this.keyFromSelector(s),n===s))return void i.push([2,n.slice(1)]);if(s!==r&&!1===c){if(!0===e.hiddenSettings.allowGenericProceduralFilters)return this.compileSpecificSelector(t,"",!1,i);const s=i.properties.get("assetKey")||"?";return void e.logger.writeOne({realm:"message",type:"error",text:`Invalid generic cosmetic filter in ${s}: ##${r}`})}if(void 0!==n)return void i.push([35===o?1:3,n.slice(1),s]);const l=this.rePlainSelectorEx.exec(s);if(null===l)this.reSimpleHighGeneric.test(s)?i.push([4,s]):i.push([5,s]);else{const e=l[1]||l[2];i.push([35===e.charCodeAt(0)?1:3,e.slice(1),s])}},r.prototype.compileGenericUnhideSelector=function(t,i){const{raw:r,compiled:s}=t.result;if(void 0!==s)i.push([8,"",1,s]);else{const t=i.properties.get("assetKey")||"?";e.logger.writeOne({realm:"message",type:"error",text:`Invalid cosmetic filter in ${t}: #@#${r}`})}},r.prototype.compileSpecificSelector=function(t,i,r,s){const{raw:c,compiled:o,exception:n}=t.result;if(void 0===o){const t=s.properties.get("assetKey")||"?";return void e.logger.writeOne({realm:"message",type:"error",text:`Invalid cosmetic filter in ${t}: ##${c}`})}let l=n?1:0;r&&(l^=1);let h=0;1===l&&(h|=1),123===o.charCodeAt(0)&&(h|=2),"*"===i&&(h|=4),s.push([8,i,h,o])},r.prototype.fromCompiledContent=function(t,i){if(i.skipCosmetic)return void this.skipCompiledContent(t);if(i.skipGenericCosmetic)return void this.skipGenericCompiledContent(t);let r,s;for(t.select(e.compiledCosmeticSection);t.next();){this.acceptedCount+=1;const e=t.fingerprint();if(this.duplicateBuster.has(e)){this.discardedCount+=1;continue}this.duplicateBuster.add(e);const i=t.args();switch(i[0]){case 0:case 2:r=0===i[0]?this.lowlyGeneric.id:this.lowlyGeneric.cl,s=r.complex.get(i[1]),void 0===s?r.simple.add(i[1]):Array.isArray(s)?s.push(r.prefix+i[1]):r.complex.set(i[1],[s,r.prefix+i[1]]);break;case 1:case 3:r=1===i[0]?this.lowlyGeneric.id:this.lowlyGeneric.cl,s=r.complex.get(i[1]),void 0===s?r.simple.has(i[1])?r.complex.set(i[1],[r.prefix+i[1],i[2]]):(r.complex.set(i[1],i[2]),r.simple.add(i[1])):Array.isArray(s)?s.push(i[2]):r.complex.set(i[1],[s,i[2]]);break;case 4:this.highlyGeneric.simple.dict.add(i[1]);break;case 5:this.highlyGeneric.complex.dict.add(i[1]);break;case 8:if(4===i[2]){this.reSimpleHighGeneric.test(i[3])?this.highlyGeneric.simple.dict.add(i[3]):this.highlyGeneric.complex.dict.add(i[3]);break}this.specificFilters.store(i[1],3&i[2],i[3]);break;default:this.discardedCount+=1}}},r.prototype.skipGenericCompiledContent=function(t){for(t.select(e.compiledCosmeticSection);t.next();){this.acceptedCount+=1;const e=t.fingerprint();if(this.duplicateBuster.has(e)){this.discardedCount+=1;continue}const i=t.args();switch(i[0]){case 8:if(this.duplicateBuster.add(e),4===i[2]){this.reSimpleHighGeneric.test(i[3])?this.highlyGeneric.simple.dict.add(i[3]):this.highlyGeneric.complex.dict.add(i[3]);break}this.specificFilters.store(i[1],3&i[2],i[3]);break;default:this.discardedCount+=1}}},r.prototype.skipCompiledContent=function(t){for(t.select(e.compiledCosmeticSection);t.next();)this.acceptedCount+=1,this.discardedCount+=1},r.prototype.toSelfie=function(){return{acceptedCount:this.acceptedCount,discardedCount:this.discardedCount,specificFilters:this.specificFilters.toSelfie(),lowlyGenericSID:Array.from(this.lowlyGeneric.id.simple),lowlyGenericCID:Array.from(this.lowlyGeneric.id.complex),lowlyGenericSCL:Array.from(this.lowlyGeneric.cl.simple),lowlyGenericCCL:Array.from(this.lowlyGeneric.cl.complex),highSimpleGenericHideArray:Array.from(this.highlyGeneric.simple.dict),highComplexGenericHideArray:Array.from(this.highlyGeneric.complex.dict)}},r.prototype.fromSelfie=function(e){this.acceptedCount=e.acceptedCount,this.discardedCount=e.discardedCount,this.specificFilters.fromSelfie(e.specificFilters),this.lowlyGeneric.id.simple=new Set(e.lowlyGenericSID),this.lowlyGeneric.id.complex=new Map(e.lowlyGenericCID),this.lowlyGeneric.cl.simple=new Set(e.lowlyGenericSCL),this.lowlyGeneric.cl.complex=new Map(e.lowlyGenericCCL),this.highlyGeneric.simple.dict=new Set(e.highSimpleGenericHideArray),this.highlyGeneric.simple.str=e.highSimpleGenericHideArray.join(",\n"),this.highlyGeneric.complex.dict=new Set(e.highComplexGenericHideArray),this.highlyGeneric.complex.str=e.highComplexGenericHideArray.join(",\n"),this.needDOMSurveyor=0!==e.lowlyGenericSID.length||0!==e.lowlyGenericCID.length||0!==e.lowlyGenericSCL.length||0!==e.lowlyGenericCCL.length,this.frozen=!0},r.prototype.triggerSelectorCachePruner=function(){null===this.selectorCacheTimer&&(this.selectorCacheTimer=vAPI.setTimeout(this.pruneSelectorCacheAsync.bind(this),this.selectorCachePruneDelay))},r.prototype.addToSelectorCache=function(e){const t=e.hostname;if("string"!=typeof t||""===t)return;const r=e.selectors;if(!1===Array.isArray(r))return;let s=this.selectorCache.get(t);void 0===s&&(s=i.factory(),this.selectorCache.set(t,s),this.selectorCache.size>this.selectorCacheCountMin&&this.triggerSelectorCachePruner()),s.add(e)},r.prototype.removeFromSelectorCache=function(e="*",t){let i=e.length;for(let r of this.selectorCache){let s=r[0],c=r[1];if("*"!==e){if(!1===s.endsWith(e))continue;if(s.length!==i&&"."!==s.charAt(s.length-i-1))continue}c.remove(t)}},r.prototype.retrieveFromSelectorCache=function(e,t,i){let r=this.selectorCache.get(e);void 0!==r&&r.retrieve(t,i)},r.prototype.pruneSelectorCacheAsync=function(){if(this.selectorCacheTimer=null,this.selectorCache.size<=this.selectorCacheCountMin)return;let e=this.selectorCache,t=Array.from(e.keys()).sort((function(t,i){return e.get(i).lastAccessTime-e.get(t).lastAccessTime})).slice(this.selectorCacheCountMin),i=Date.now()-this.selectorCacheAgeMax,r=t.length;for(;r--;){let s=t[r],c=e.get(s);if(c.lastAccessTime>i)break;c.dispose(),e.delete(s)}e.size>this.selectorCacheCountMin&&this.triggerSelectorCachePruner()},r.prototype.getSession=function(){return this.sessionFilterDB},r.prototype.retrieveGenericSelectors=function(e){if(0===this.acceptedCount)return;if(!e.ids&&!e.classes)return;const t=this.$simpleSet,i=this.$complexSet,r=this.selectorCache.get(e.hostname),s=r&&r.cosmetic||this.$dummySet;for(const r in this.lowlyGeneric){const c=this.lowlyGeneric[r],o=e[c.canonical];if(!1!==Array.isArray(o))for(let e of o){if(!1===c.simple.has(e))continue;const r=c.complex.get(e);if(void 0!==r)if(Array.isArray(r))for(const e of r)!1===s.has(e)&&i.add(e);else!1===s.has(r)&&i.add(r);else e=c.prefix+e,!1===s.has(e)&&t.add(e)}}const c=[];if(Array.isArray(e.exceptions))for(const r of e.exceptions)(t.delete(r)||i.delete(r))&&c.push(r);if(0===t.size&&0===i.size&&0===c.length)return;const o={injected:"",excepted:c},n=[];return 0!==t.size&&(n.push(...t),t.clear()),0!==i.size&&(n.push(...i),i.clear()),0===n.length||("string"==typeof e.hostname&&""!==e.hostname&&this.addToSelectorCache({cost:e.surveyCost||0,hostname:e.hostname,selectors:n,type:"cosmetic"}),o.injected=n.join(",\n"),vAPI.tabs.insertCSS(e.tabId,{code:o.injected+"\n{display:none!important;}",frameId:e.frameId,matchAboutBlank:!0,runAt:"document_start"})),o},r.prototype.retrieveSpecificSelectors=function(e,i){const r=e.hostname,s=this.selectorCache.get(r),c={ready:this.frozen,hostname:r,domain:e.domain,exceptionFilters:[],exceptedFilters:[],noDOMSurveying:!1===this.needDOMSurveyor},o=[];if(!0!==i.noCosmeticFiltering){const n=this.$specificSet,l=this.$proceduralSet,h=this.$exceptionSet,a=this.$dummySet;if(void 0!==s&&(s.retrieve("cosmetic",n),!1===c.noDOMSurveying&&(c.noDOMSurveying=s.cosmeticSurveyingMissCount>t)),this.sessionFilterDB.isNotEmpty&&this.sessionFilterDB.retrieve([null,h]),this.specificFilters.retrieve(r,!0!==i.noSpecificCosmeticFiltering?[n,h,l,h]:[a,h],1),this.specificFilters.retrieve(r,!0!==i.noGenericCosmeticFiltering?[n,h,l,h]:[a,h],2),""!==e.entity&&this.specificFilters.retrieve(`${r.slice(0,-e.domain.length)}${e.entity}`,!0!==i.noSpecificCosmeticFiltering?[n,h,l,h]:[a,h],1),0!==h.size){c.exceptionFilters=Array.from(h);for(const e of h)(n.delete(e)||l.delete(e))&&c.exceptedFilters.push(e)}if(0!==n.size&&o.push(Array.from(n).join(",\n")),0!==l.size&&(c.proceduralFilters=Array.from(l)),!0!==i.noGenericCosmeticFiltering){const e=c.exceptionFilters.join();for(const t in this.highlyGeneric){const i=this.highlyGeneric[t];let r=i.mru.lookup(e);if(void 0===r){r={s:i.str,excepted:[]};let t=i.dict,s=!1;for(const e of h)if(s=t.has(e))break;if(s){t=new Set(i.dict);for(const e of h)t.delete(e)&&r.excepted.push(e);r.s=Array.from(t).join(",\n")}i.mru.add(e,r)}0!==r.excepted.length&&c.exceptedFilters.push(...r.excepted),0!==r.s.length&&o.push(r.s)}}n.clear(),l.clear(),h.clear(),a.clear()}const n={code:"",frameId:e.frameId,matchAboutBlank:!0,runAt:"document_start"};if(0!==o.length&&(c.injectedHideFilters=o.join(",\n"),n.code=c.injectedHideFilters+"\n{display:none!important;}",!0!==i.dontInject&&vAPI.tabs.insertCSS(e.tabId,n)),s){const t=[];s.retrieve("net",t),0!==t.length&&(n.code=t.join("\n")+"\n{display:none!important;}",!0!==i.dontInject&&vAPI.tabs.insertCSS(e.tabId,n))}return c},r.prototype.getFilterCount=function(){return this.acceptedCount-this.discardedCount},r.prototype.benchmark=async function(){const t=await e.loadBenchmarkDataset();if(!1===Array.isArray(t)||0===t.length)return void console.info("No requests found to benchmark");console.info("Benchmarking cosmeticFilteringEngine.retrieveSpecificSelectors()...");const i={tabId:void 0,frameId:void 0,hostname:"",domain:"",entity:""},r={noCosmeticFiltering:!1,noGenericCosmeticFiltering:!1,dontInject:!0};let s=0;const c=self.performance.now();for(let c=0;c<t.length;c++){const o=t[c];"main_frame"===o.cpt&&(s+=1,i.hostname=e.URI.hostnameFromURI(o.url),i.domain=e.URI.domainFromHostname(i.hostname),i.entity=e.URI.entityFromDomain(i.domain),this.retrieveSpecificSelectors(i,r))}const o=self.performance.now()-c;console.info(`Evaluated ${s} requests in ${o.toFixed(0)} ms`),console.info(`\tAverage: ${(o/s).toFixed(3)} ms per request`)},new r})();