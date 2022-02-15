"use strict";µBlock.scriptletFilteringEngine=function(){const e=µBlock,t=new Set,n=new e.MRUCache(32),i=/[\\'"]/g,r=new e.staticExtFilteringEngine.HostnameBasedDB(1),o=new e.staticExtFilteringEngine.SessionDB;let s=0,c=0;const a={get acceptedCount(){return s},get discardedCount(){return c}},l=(()=>{const e=["(",function(e,t){null!==document.location&&e===document.location.hostname&&function(e){let n;try{n=e.createElement("script"),n.appendChild(e.createTextNode(decodeURIComponent(t))),(e.head||e.documentElement).appendChild(n)}catch(e){}n&&(n.parentNode&&n.parentNode.removeChild(n),n.textContent="")}(document)}.toString(),")(",'"',"hostname-slot",'", ','"',"scriptlets-slot",'"',"); void 0;"];return{parts:e,hostnameSlot:e.indexOf("hostname-slot"),scriptletsSlot:e.indexOf("scriptlets-slot"),assemble:function(e,t){return this.parts[this.hostnameSlot]=e,this.parts[this.scriptletsSlot]=encodeURIComponent(t),this.parts.join("")}}})(),d=function(e,t,i){if(i.has(e))return;n.resetTime<t.modifyTime&&n.reset();let r=n.lookup(e);if(void 0===r){const i=e.indexOf(",");let o,s;if(-1===i?o=e:(o=e.slice(0,i).trim(),s=e.slice(i+1).trim()),o=t.aliases.has(o)?t.aliases.get(o):`${o}.js`,r=t.resourceContentFromName(o,"application/javascript"),!r)return;if(s&&(r=u(r,s),!r))return;r="try {\n"+r+"\n} catch ( e ) { }",n.add(e,r)}i.set(e,r)},u=function(e,t){let n=t,r=n.length,o=0,s=0,c=1;for(;o<r;)s=n.indexOf(",",s),s>0&&92===n.charCodeAt(s-1)?(n=n.slice(0,s-1)+n.slice(s),r-=1):(-1===s&&(s=r),e=e.replace(`{{${c}}}`,n.slice(o,s).trim().replace(i,"\\$&")),o=s+=1,c++);return e},m=function(e,t,n){µBlock.filteringContext.duplicate().fromTabId(n.tabId).setRealm("cosmetic").setType("dom").setURL(n.url).setDocOriginFromURL(n.url).setFilter({source:"cosmetic",raw:(e?"#@#":"##")+`+js(${t})`}).toLogger()};a.reset=function(){r.clear(),t.clear(),s=0,c=0},a.freeze=function(){t.clear(),r.collectGarbage()},a.compile=function(t,n){n.select(e.compiledScriptletSection);const{raw:i,exception:r}=t.result,o=function(t){const n=t.slice(4,-1),i=n.length;let r=n.indexOf(",");-1===r&&(r=i);const o=n.slice(0,r).trim(),s=o.endsWith(".js")?o.slice(0,-3):o;let c=e.redirectEngine.aliases.get(`${s}.js`);c=void 0===c?s:c.slice(0,-3);let a=r+1;for(;a<i;)r=n.indexOf(",",a),-1===r&&(r=i),c+=", "+n.slice(a,r).trim(),a=r+1;return`+js(${c})`}(i);if("+js()"!==o||!1!==r)if(!1!==t.hasOptions())for(const{hn:e,not:i,bad:s}of t.extOptions()){if(s)continue;let t=0;if(r){if(i)continue;t|=1}else i&&(t|=1);n.push([32,e,t,o])}else r&&n.push([32,"",1,o])},a.fromCompiledContent=function(n){for(n.select(e.compiledScriptletSection);n.next();){s+=1;const e=n.fingerprint();if(t.has(e)){c+=1;continue}t.add(e);const i=n.args();i.length<4||r.store(i[1],i[2],i[3].slice(4,-1))}},a.getSession=function(){return o};const f=new Set,p=new Set,h=new Map;return a.retrieve=function(t){if(0===r.size)return;if(e.hiddenSettings.ignoreScriptInjectFilters)return;const n=e.redirectEngine;if(!n)return;const i=t.hostname;if(e.userSettings.advancedUserEnabled&&2===e.sessionFirewall.evaluateCellZY(i,i,"*"))return;f.clear(),p.clear(),o.isNotEmpty&&o.retrieve([null,p]),r.retrieve(i,[f,p]);const s=""!==t.entity?`${i.slice(0,-t.domain.length)}${t.entity}`:"*";if(r.retrieve(s,[f,p],1),0===f.size)return;const c=e.logger.enabled;if(p.has(""))return void(c&&m(!0,"",t));h.clear();for(const e of f)d(e,n,h);if(0===h.size)return;const a=[];for(const[e,n]of h){const i=p.has(e);!1===i&&a.push(n),c&&m(i,e,t)}return 0!==a.length?(e.hiddenSettings.debugScriptlets&&a.unshift("debugger;"),a.unshift("(function() {","// >>>> start of private namespace",""),a.push("","// <<<< end of private namespace","})();"),a.join("\n")):void 0},a.injectNow=function(t){if("number"!=typeof t.frameId)return;const n={tabId:t.tabId,frameId:t.frameId,url:t.url,hostname:e.URI.hostnameFromURI(t.url),domain:void 0,entity:void 0};n.domain=e.URI.domainFromHostname(n.hostname),n.entity=e.URI.entityFromDomain(n.domain);const i=e.scriptletFilteringEngine.retrieve(n);if(void 0===i)return;let r=l.assemble(n.hostname,i);e.hiddenSettings.debugScriptletInjector&&(r="debugger;\n"+r),vAPI.tabs.executeScript(t.tabId,{code:r,frameId:t.frameId,matchAboutBlank:!0,runAt:"document_start"})},a.toSelfie=function(){return r.toSelfie()},a.fromSelfie=function(e){r.fromSelfie(e)},a.benchmark=async function(){const t=await e.loadBenchmarkDataset();if(!1===Array.isArray(t)||0===t.length)return void log.print("No requests found to benchmark");log.print("Benchmarking scriptletFilteringEngine.retrieve()...");const n={domain:"",entity:"",hostname:"",tabId:0,url:""};let i=0;const r=self.performance.now();for(let r=0;r<t.length;r++){const o=t[r];"main_frame"===o.cpt&&(i+=1,n.url=o.url,n.hostname=e.URI.hostnameFromURI(o.url),n.domain=e.URI.domainFromHostname(n.hostname),n.entity=e.URI.entityFromDomain(n.domain),this.retrieve(n))}const o=self.performance.now()-r;log.print(`Evaluated ${i} requests in ${o.toFixed(0)} ms`),log.print(`\tAverage: ${(o/i).toFixed(3)} ms per request`)},a}();