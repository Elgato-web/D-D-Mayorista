"use strict";if("object"==typeof vAPI&&!vAPI.contentScript){vAPI.contentScript=!0;{let e=self;try{for(;e!==self.top&&e.location.href.startsWith("about:blank")&&e.parent.location.href;)e=e.parent}catch(e){}vAPI.effectiveSelf=e}vAPI.userStylesheet={added:new Set,removed:new Set,apply:function(e){0===this.added.size&&0===this.removed.size||(vAPI.messaging.send("vapi",{what:"userCSS",add:Array.from(this.added),remove:Array.from(this.removed)}).then((()=>{e instanceof Function!=0&&e()})),this.added.clear(),this.removed.clear())},add:function(e,t){""!==e&&(this.added.add(e),t&&this.apply())},remove:function(e,t){""!==e&&(this.removed.add(e),t&&this.apply())}},vAPI.SafeAnimationFrame=class{constructor(e){this.fid=this.tid=void 0,this.callback=e}start(e){if(self.vAPI instanceof Object!=0)return void 0===e?(void 0===this.fid&&(this.fid=requestAnimationFrame((()=>{this.onRAF()}))),void(void 0===this.tid&&(this.tid=vAPI.setTimeout((()=>{this.onSTO()}),2e4)))):void(void 0===this.fid&&void 0===this.tid&&(this.tid=vAPI.setTimeout((()=>{this.macroToMicro()}),e)))}clear(){void 0!==this.fid&&(cancelAnimationFrame(this.fid),this.fid=void 0),void 0!==this.tid&&(clearTimeout(this.tid),this.tid=void 0)}macroToMicro(){this.tid=void 0,this.start()}onRAF(){void 0!==this.tid&&(clearTimeout(this.tid),this.tid=void 0),this.fid=void 0,this.callback()}onSTO(){void 0!==this.fid&&(cancelAnimationFrame(this.fid),this.fid=void 0),this.tid=void 0,this.callback()}};{const e=new Set,t=new Set;let s;const o=function(){vAPI.messaging.send("scriptlets",{what:"securityPolicyViolation",type:"net",docURL:document.location.href,violations:Array.from(e)}).then((e=>{!0!==e&&r()}));for(const s of e)t.add(s);e.clear()},n=function(){void 0===s&&(s=self.requestIdleCallback((()=>{s=void 0,o()}),{timeout:2063}))},i=function(s){if(!0!==s.isTrusted)return;if("enforce"!==s.disposition)return;const o=JSON.stringify({url:s.blockedURL||s.blockedURI,policy:s.originalPolicy,directive:s.effectiveDirective||s.violatedDirective});t.has(o)||(e.add(o),n())},r=function(){e.clear(),t.clear(),void 0!==s&&(self.cancelIdleCallback(s),s=void 0),document.removeEventListener("securitypolicyviolation",i),vAPI.shutdown.remove(r)};document.addEventListener("securitypolicyviolation",i),vAPI.shutdown.add(r),n()}{vAPI.domMutationTime=Date.now();const e=[],t=[],s=[],o=new Set(["br","head","link","meta","script","style"]),n=[];let i,r,l=[],c=!1,a=!1;const d=function(){let n=e.length;for(;n--;){const t=e[n];let i=t.length;for(;i--;){const e=t[i];1===e.nodeType&&(o.has(e.localName)||null!==e.parentElement&&s.push(e))}}for(e.length=0,n=t.length;n--&&!1===a;){const e=t[n];let s=e.length;for(;s--;)if(1===e[s].nodeType){a=!0;break}}if(t.length=0,0!==s.length||!1!==a){for(const e of f())try{e.onDOMChanged(s,a)}catch(e){}s.length=0,a=!1,vAPI.domMutationTime=Date.now()}},h=function(s){let o=s.length;for(;o--;){const n=s[o];let i=n.addedNodes;0!==i.length&&e.push(i),i=n.removedNodes,0!==i.length&&t.push(i)}0===e.length&&0===t.length||r.start(e.length<100?1:void 0)},u=function(){void 0===i&&(i=new MutationObserver(h),i.observe(document.documentElement,{childList:!0,subtree:!0}),r=new vAPI.SafeAnimationFrame(d),vAPI.shutdown.add(A))},m=function(){void 0!==i&&(A(),vAPI.shutdown.remove(A))},f=function(){return c&&(l=n.slice(),c=!1),l},p=function(e){if(-1===n.indexOf(e)&&(n.push(e),c=!0,void 0!==i)){try{e.onDOMCreated()}catch(e){}u()}},v=function(e){const t=n.indexOf(e);-1!==t&&(n.splice(t,1),c=!0,0===n.length&&m())},A=function(){void 0!==i&&(i.disconnect(),i=void 0),void 0!==r&&(r.clear(),r=void 0)},g=function(){for(const e of f())try{e.onDOMCreated()}catch(e){}u()};vAPI.domWatcher={start:g,addListener:p,removeListener:v}}vAPI.injectScriptlet=function(e,t){if(!e)return;let s;try{s=e.createElement("script"),s.appendChild(e.createTextNode(t)),(e.head||e.documentElement).appendChild(s)}catch(e){}s&&(s.parentNode&&s.parentNode.removeChild(s),s.textContent="")};{vAPI.hideStyle="display:none!important;";const e=class{constructor(e){let t,s=e[1];Array.isArray(e[1])&&(t=s[1],s=s[0]),this.needle=new RegExp(s,t)}transpose(e,t){this.needle.test(e.textContent)&&t.push(e)}},t=class{constructor(e){this.pselector=new h(e[1])}transpose(e,t){this.pselector.test(e)===this.target&&t.push(e)}};t.prototype.target=!0;const s=class extends t{};s.prototype.target=!1;const o=class{constructor(e){this.name=e[1].name;let t,s=e[1].value;Array.isArray(s)&&(t=s[1],s=s[0]),this.value=new RegExp(s,t)}transpose(e,t){const s=window.getComputedStyle(e,this.pseudo);null!==s&&this.value.test(s[this.name])&&t.push(e)}};o.prototype.pseudo=null;const n=class extends o{};n.prototype.pseudo=":after";const i=class extends o{};i.prototype.pseudo=":before";const r=class{constructor(e){this.min=e[1]}transpose(e,t){e.textContent.length>=this.min&&t.push(e)}},l=class{constructor(e){this.spath=e[1],this.nth=/^(?:\s*[+~]|:)/.test(this.spath),this.nth||/^\s*>/.test(this.spath)&&(this.spath=`:scope ${this.spath.trim()}`)}qsa(e){if(!1===this.nth)return e.querySelectorAll(this.spath);const t=e.parentElement;if(null===t)return;let s=1;for(;null!==(e=e.previousElementSibling);)s+=1;return t.querySelectorAll(`:scope > :nth-child(${s})${this.spath}`)}transpose(e,t){const s=this.qsa(e);if(void 0!==s)for(const e of s)t.push(e)}},c=class{constructor(e){const t=e[1];"number"==typeof t?this.i=t:this.s=t}transpose(e,t){if(""!==this.s){const t=e.parentElement;if(null===t)return;if(null===(e=t.closest(this.s)))return}else{let t=this.i;for(;;){if(null===(e=e.parentElement))return;if(t-=1,0===t)break}}t.push(e)}};c.prototype.i=0,c.prototype.s="";const a=class{constructor(e){this.observer=null,this.observed=new WeakSet,this.observerOptions={attributes:!0,subtree:!0};const t=e[1];Array.isArray(t)&&0!==t.length&&(this.observerOptions.attributeFilter=e[1])}handler(){const e=vAPI.domFilterer&&vAPI.domFilterer.proceduralFilterer;e instanceof Object&&e.onDOMChanged([null])}transpose(e,t){t.push(e),this.observed.has(e)||(null===this.observer&&(this.observer=new MutationObserver(this.handler)),this.observer.observe(e,this.observerOptions),this.observed.add(e))}},d=class{constructor(e){this.xpe=document.createExpression(e[1],null),this.xpr=null}transpose(e,t){this.xpr=this.xpe.evaluate(e,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,this.xpr);let s=this.xpr.snapshotLength;for(;s--;){const e=this.xpr.snapshotItem(s);1===e.nodeType&&t.push(e)}}},h=class{constructor(u){void 0===h.prototype.operatorToTaskMap&&(h.prototype.operatorToTaskMap=new Map([[":has",t],[":has-text",e],[":if",t],[":if-not",s],[":matches-css",o],[":matches-css-after",n],[":matches-css-before",i],[":min-text-length",r],[":not",s],[":nth-ancestor",c],[":spath",l],[":upward",c],[":watch-attr",a],[":xpath",d]])),this.raw=u.raw,this.selector=u.selector,this.tasks=[];const m=u.tasks;if(Array.isArray(m))for(const e of m)this.tasks.push(new(this.operatorToTaskMap.get(e[0]))(e))}prime(e){const t=e||document;return""===this.selector?[t]:Array.from(t.querySelectorAll(this.selector))}exec(e){let t=this.prime(e);for(const e of this.tasks){if(0===t.length)break;const s=[];for(const o of t)e.transpose(o,s);t=s}return t}test(e){const t=this.prime(e);for(const e of t){let t=[e];for(const e of this.tasks){const s=[];for(const o of t)e.transpose(o,s);if(t=s,0===t.length)break}if(0!==t.length)return!0}return!1}};h.prototype.operatorToTaskMap=void 0;const u=class extends h{constructor(e,t){super(e),this.budget=200,this.raw=e.raw,this.cost=0,this.lastAllowanceTime=0,this.styleToken=t}};u.prototype.hit=!1;const m=class{constructor(e){this.domFilterer=e,this.domIsReady=!1,this.domIsWatched=!1,this.mustApplySelectors=!1,this.selectors=new Map,this.masterToken=vAPI.randomToken(),this.styleTokenMap=new Map,this.styledNodes=new Set,vAPI.domWatcher instanceof Object&&vAPI.domWatcher.addListener(this)}addProceduralSelectors(e){const t=[];let s=this.domIsWatched;for(const o of e){if(this.selectors.has(o.raw))continue;let e,n;void 0===o.action?e=vAPI.hideStyle:":style"===o.action[0]&&(e=o.action[1]),void 0!==e&&(n=this.styleTokenFromStyle(e));const i=new u(o,n);this.selectors.set(o.raw,i),t.push(i),s=!0}!1!==s&&(this.mustApplySelectors=0!==this.selectors.size,this.domFilterer.commit(),this.domFilterer.hasListeners()&&this.domFilterer.triggerListeners({procedural:t}))}commitNow(){if(0===this.selectors.size||!1===this.domIsReady)return;this.mustApplySelectors=!1;const e=this.styledNodes;this.styledNodes=new Set;let t=Date.now();for(const e of this.selectors.values()){const s=Math.floor((t-e.lastAllowanceTime)/2e3);if(s>=1&&(e.budget+=50*s,e.budget>200&&(e.budget=200),e.lastAllowanceTime=t),e.budget<=0)continue;const o=e.exec(),n=Date.now();e.budget+=t-n,e.budget<-500&&(console.info("uBO: disabling %s",e.raw),e.budget=-2147483647),t=n,0!==o.length&&(e.hit=!0,this.styleNodes(o,e.styleToken))}this.unstyleNodes(e)}styleTokenFromStyle(e){if(void 0===e)return;let t=this.styleTokenMap.get(e);return void 0!==t||(t=vAPI.randomToken(),this.styleTokenMap.set(e,t),this.domFilterer.addCSSRule(`[${this.masterToken}][${t}]`,e,{silent:!0,mustInject:!0})),t}styleNodes(e,t){if(void 0!==t)for(const s of e)s.setAttribute(this.masterToken,""),s.setAttribute(t,""),this.styledNodes.add(s);else for(const t of e)t.textContent="",t.remove()}unstyleNodes(e){for(const t of e)this.styledNodes.has(t)||t.removeAttribute(this.masterToken)}createProceduralFilter(e){return new u(e)}onDOMCreated(){this.domIsReady=!0,this.domFilterer.commit()}onDOMChanged(e,t){0!==this.selectors.size&&(this.mustApplySelectors=this.mustApplySelectors||0!==e.length||t,this.domFilterer.commit())}};vAPI.DOMFilterer=class{constructor(){this.commitTimer=new vAPI.SafeAnimationFrame((()=>{this.commitNow()})),this.domIsReady="loading"!==document.readyState,this.disabled=!1,this.listeners=[],this.filterset=new Set,this.exceptedCSSRules=[],this.exceptions=[],this.proceduralFilterer=null,!0!==this.domIsReady&&document.addEventListener("DOMContentLoaded",(()=>{vAPI instanceof Object!=0&&(this.domIsReady=!0,this.commit())}))}addCSSRule(e,t,s={}){if(void 0===e)return;const o=Array.isArray(e)?e.join(",\n"):e;0!==o.length&&(this.filterset.add({selectors:o,declarations:t}),s.mustInject&&!1===this.disabled&&vAPI.userStylesheet.add(`${o}\n{${t}}`),this.commit(),!0!==s.silent&&this.hasListeners()&&this.triggerListeners({declarative:[[o,t]]}))}exceptCSSRules(e){0!==e.length&&(this.exceptedCSSRules.push(...e),this.hasListeners()&&this.triggerListeners({exceptions:e}))}addListener(e){-1===this.listeners.indexOf(e)&&this.listeners.push(e)}removeListener(e){const t=this.listeners.indexOf(e);-1!==t&&this.listeners.splice(t,1)}hasListeners(){return 0!==this.listeners.length}triggerListeners(e){for(const t of this.listeners)t.onFiltersetChanged(e)}toggle(e,t){if(void 0===e&&(e=this.disabled),e!==this.disabled)return;this.disabled=!e;const s=vAPI.userStylesheet;for(const e of this.filterset){const t=`${e.selectors}\n{${e.declarations}}`;this.disabled?s.remove(t):s.add(t)}s.apply(t)}commitNow(){this.commitTimer.clear(),vAPI instanceof Object!=0&&(vAPI.userStylesheet.apply(),this.proceduralFilterer instanceof Object&&this.proceduralFilterer.commitNow())}commit(e){e?(this.commitTimer.clear(),this.commitNow()):this.commitTimer.start()}proceduralFiltererInstance(){return this.proceduralFilterer instanceof Object==0&&(this.proceduralFilterer=new m(this)),this.proceduralFilterer}addProceduralSelectors(e){if(!1===Array.isArray(e)||0===e.length)return;const t=[];for(const s of e){const e=JSON.parse(s);void 0===e.action||":style"!==e.action[0]||void 0!==e.tasks?void 0===e.pseudo?t.push(e):this.addCSSRule(e.selector,vAPI.hideStyle,{mustInject:!0}):this.addCSSRule(e.selector,e.action[1],{mustInject:!0})}0!==t.length&&this.proceduralFiltererInstance().addProceduralSelectors(t)}createProceduralFilter(e){return this.proceduralFiltererInstance().createProceduralFilter(e)}getAllSelectors(e=0){const t={declarative:[],exceptions:this.exceptedCSSRules},s=this.proceduralFilterer instanceof Object,o=0!=(1&e),n=s?`[${this.proceduralFilterer.masterToken}]`:void 0;for(const e of this.filterset){const s=e.selectors;!1===o&&void 0!==n&&s.startsWith(n)||t.declarative.push([s,e.declarations])}return!0!=(0!=(2&e))&&(t.procedural=s?Array.from(this.proceduralFilterer.selectors.values()):[]),t}getAllExceptionSelectors(){return this.exceptions.join(",\n")}}}{const e=vAPI.messaging,t=new Map,s={audio:"currentSrc",embed:"src",iframe:"src",img:"currentSrc",object:"data",video:"currentSrc"},o={audio:"src",img:"src",video:"src"},n={audio:"media",embed:"object",iframe:"sub_frame",img:"image",object:"object",video:"media"};let i,r,l,c,a=1,d=[],h=[],u=0;const m=function(){r=l=c=void 0},f=()=>(void 0===p&&(p=vAPI.randomToken(),vAPI.userStylesheet.add(`[${p}]\n{display:none!important;}`,!0)),p);let p;const v=function(i){if(i instanceof Object==0)return void t.clear();const a=t.get(i.id);if(void 0===a)return;if(t.delete(i.id),l!==i.hash&&(r=new Set(i.blockedResources),l=i.hash,void 0!==c&&clearTimeout(c),c=vAPI.setTimeout(m,3e4)),void 0===r||0===r.size)return;const d=[];let h=i.netSelectorCacheCountMax;for(const e of a){const t=e.localName;let i=s[t];if(void 0===i)continue;let l=e[i];if("string"!=typeof l||0===l.length){if(i=o[t],void 0===i)continue;if(l=e[i],"string"!=typeof l||0===l.length)continue}if(!1===r.has(n[t]+" "+l))continue;if(e.setAttribute(f(),""),u>h)continue;const c=e.getAttribute(i);c&&(d.push(`${t}[${i}="${CSS.escape(c)}"]`),u+=1)}0!==d.length&&e.send("contentscript",{what:"cosmeticFiltersInjected",type:"net",hostname:window.location.hostname,selectors:d})},A=function(){i=void 0,t.set(a,d),e.send("contentscript",{what:"getCollapsibleBlockedRequests",id:a,frameURL:window.location.href,resources:h,hash:l}).then((e=>{v(e)})),d=[],h=[],a+=1},g=function(e){0!==d.length&&(0===e?(void 0!==i&&clearTimeout(i),A()):void 0===i&&(i=vAPI.setTimeout(A,e||20)))},y=function(e){d[d.length]=e},I=function(e){for(const t of e)y(t)},P=new MutationObserver((function(e){for(const t of e)S(t.target,!0);g()})),b={attributes:!0,attributeFilter:["src"]},S=function(e,t){!0!==t&&P.observe(e,b);const s=e.src;"string"==typeof s&&""!==s&&!1!==s.startsWith("http")&&(h.push({type:"sub_frame",url:e.src}),y(e))},w=function(e){for(const t of e)S(t)},T=function(e){void 0!==n[e.target.localName]&&(y(e.target),g())},O=function(){document.removeEventListener("error",T,!0),void 0!==i&&clearTimeout(i),vAPI.domWatcher instanceof Object&&vAPI.domWatcher.removeListener(C),vAPI.shutdown.remove(O),vAPI.domCollapser=null},F=function(){vAPI.domWatcher instanceof Object&&vAPI.domWatcher.addListener(C)},C={onDOMCreated:function(){if(self.vAPI instanceof Object==0)return;if(vAPI.domCollapser instanceof Object==0)return void(vAPI.domWatcher instanceof Object&&vAPI.domWatcher.removeListener(C));const e=document.images||document.getElementsByTagName("img");for(const t of e)t.complete&&y(t);I(document.embeds||document.getElementsByTagName("embed")),I(document.getElementsByTagName("object")),w(document.getElementsByTagName("iframe")),g(0),document.addEventListener("error",T,!0),vAPI.shutdown.add(O)},onDOMChanged:function(e){if(0!==e.length){for(const t of e){if("iframe"===t.localName&&S(t),0===t.childElementCount)continue;const e=t.getElementsByTagName("iframe");0!==e.length&&w(e)}g()}}};vAPI.domCollapser={start:F}}{const e=vAPI.messaging,t=new Set,s=new Set,o=65536,n=4,i=64;let r,l="",c=0;const a={nodeLists:[],buffer:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],j:0,accepted:0,iterated:0,stopped:!1,add:function(e){0===e.length||this.accepted>=o||(this.nodeLists.push(e),this.accepted+=e.length)},next:function(){if(0===this.nodeLists.length||this.stopped)return 0;const e=this.nodeLists;let t=0;do{const s=e[0];let o=this.j,n=o+i-t;n>s.length&&(n=s.length);for(let e=o;e<n;e++)this.buffer[t++]=s[o++];if(o!==s.length){this.j=o;break}this.j=0,this.nodeLists.shift()}while(t<i&&0!==e.length);return this.iterated+=t,this.iterated>=o&&(this.nodeLists=[],this.stopped=!0),t},hasNodes:function(){return 0!==this.nodeLists.length}},d=/\s/,h=function(){const o=performance.now(),i=d,h=[],u=[],m=a.buffer,f=o+n;let v=t,A=s,g=0;for(;;){const e=a.next();if(0===e)break;for(let t=0;t<e;t++){const e=m[t];m[t]=null;let s=e.id;"string"==typeof s&&0!==s.length&&(s=s.trim(),!1===v.has(s)&&0!==s.length&&(h.push(s),v.add(s)));let o=e.className;if("string"==typeof o&&0!==o.length)if(!1===i.test(o))!1===A.has(o)&&(u.push(o),A.add(o));else{o=e.classList;let t=o.length;for(;t--;){const e=o[t];!1===A.has(e)&&(u.push(e),A.add(e))}}}if(g+=e,performance.now()>=f)break}const y=performance.now();c+=y-o,0!==h.length||0!==u.length?e.send("contentscript",{what:"retrieveGenericCosmeticSelectors",hostname:l,ids:h,classes:u,exceptions:r.exceptions,cost:c}).then((e=>{p(e)})):p(null)},u=new vAPI.SafeAnimationFrame(h);let m=Date.now()+3e5,f=0;const p=function(e){const t=e&&e.result;let s=!1;if(t){let e=t.injected;"string"==typeof e&&0!==e.length&&(r.addCSSRule(e,vAPI.hideStyle),s=!0),e=t.excepted,Array.isArray(e)&&0!==e.length&&r.exceptCSSRules(e)}if(!1===a.stopped){if(a.hasNodes()&&u.start(1),s)return f=0,void(m=Date.now()+3e5);if(f+=1,f<256||Date.now()<m)return}u.clear(),vAPI.domWatcher.removeListener(v),vAPI.domSurveyor=null},v={onDOMCreated:function(){self.vAPI instanceof Object!=0&&vAPI.domSurveyor instanceof Object!=0&&vAPI.domFilterer instanceof Object!=0?(r=vAPI.domFilterer,a.add(document.querySelectorAll("[id],[class]")),u.start()):self.vAPI instanceof Object&&(vAPI.domWatcher instanceof Object&&vAPI.domWatcher.removeListener(v),vAPI.domSurveyor=null)},onDOMChanged:function(e){if(0===e.length)return;let t=e.length;for(;t--;){const s=e[t];a.add([s]),0!==s.childElementCount&&a.add(s.querySelectorAll("[id],[class]"))}a.hasNodes()&&u.start(1)}},A=function(e){vAPI.domWatcher instanceof Object!=0&&(l=e.hostname,vAPI.domWatcher.addListener(v))};vAPI.domSurveyor={start:A}}{const e=function(){if(null===window.location)return;if(self.vAPI instanceof Object==0)return;if(vAPI.messaging.send("contentscript",{what:"shouldRenderNoscriptTags"}),vAPI.domWatcher instanceof Object&&vAPI.domWatcher.start(),window!==window.top||vAPI.domFilterer instanceof Object==0)return;vAPI.mouseClick={x:-1,y:-1};const e=function(e){if(!1===e.isTrusted)return;vAPI.mouseClick.x=e.clientX,vAPI.mouseClick.y=e.clientY;const t=e.target.closest("a[href]");null!==t&&"string"==typeof t.href&&vAPI.messaging.send("contentscript",{what:"maybeGoodPopup",url:t.href||""})};document.addEventListener("mousedown",e,!0),vAPI.shutdown.add((function(){document.removeEventListener("mousedown",e,!0)}))},t=function(t){if(t instanceof Object==0)return;vAPI.bootstrap=void 0;const s=t&&t.specificCosmeticFilters;if(s&&s.ready){if(vAPI.domCollapser.start(),t.noCosmeticFiltering)vAPI.domFilterer=null,vAPI.domSurveyor=null;else{const e=vAPI.domFilterer=new vAPI.DOMFilterer;(t.noGenericCosmeticFiltering||s.noDOMSurveying)&&(vAPI.domSurveyor=null),e.exceptions=s.exceptionFilters,e.addCSSRule(s.injectedHideFilters,vAPI.hideStyle),e.addProceduralSelectors(s.proceduralFilters),e.exceptCSSRules(s.exceptedFilters)}vAPI.userStylesheet.apply(),t.scriptlets&&(vAPI.injectScriptlet(document,t.scriptlets),vAPI.injectedScripts=t.scriptlets),vAPI.domSurveyor instanceof Object&&vAPI.domSurveyor.start(s),"string"==typeof document.readyState&&"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e,{once:!0})}else vAPI.domWatcher=vAPI.domCollapser=vAPI.domFilterer=vAPI.domSurveyor=vAPI.domIsLoaded=null};vAPI.bootstrap=function(){vAPI.messaging.send("contentscript",{what:"retrieveContentScriptParameters",url:vAPI.effectiveSelf.location.href}).then((e=>{t(e)}))}}vAPI.bootstrap()}