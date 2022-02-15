"use strict";µBlock.Firewall=function(){var t=function(){this.reset()},e={"3p":!0,image:!0,"inline-script":!0,"1p-script":!0,"3p-script":!0,"3p-frame":!0},r={"*":0,"inline-script":2,"1p-script":4,"3p-script":6,"3p-frame":8,image:10,"3p":12},s={1:"block",2:"allow",3:"noop"},i={block:1,allow:2,noop:3},o=/[^0-9a-z_.\[\]:%-]/,n=/[^\x20-\x7F]/;t.prototype.reset=function(){this.r=0,this.type="",this.y="",this.z="",this.rules=new Map,this.changed=!1,this.decomposedSource=[],this.decomposedDestination=[]},t.prototype.assign=function(t){for(var e of this.rules.keys())!1===t.rules.has(e)&&(this.rules.delete(e),this.changed=!0);for(var r of t.rules)this.rules.get(r[0])!==r[1]&&(this.rules.set(r[0],r[1]),this.changed=!0)},t.prototype.copyRules=function(t,e,r){let s=this.rules.get("* *"),i=t.rules.get("* *");i!==s&&(void 0!==i?this.rules.set("* *",i):this.rules.delete("* *"),this.changed=!0);let o=e+" *";s=this.rules.get(o),i=t.rules.get(o),i!==s&&(void 0!==i?this.rules.set(o,i):this.rules.delete(o),this.changed=!0);for(let n in r)!1!==r.hasOwnProperty(n)&&(o="* "+n,s=this.rules.get(o),i=t.rules.get(o),i!==s&&(void 0!==i?this.rules.set(o,i):this.rules.delete(o),this.changed=!0),o=e+" "+n,s=this.rules.get(o),i=t.rules.get(o),i!==s&&(void 0!==i?this.rules.set(o,i):this.rules.delete(o),this.changed=!0));return this.changed},t.prototype.hasSameRules=function(t,e,r){var s="* *";if(this.rules.get(s)!==t.rules.get(s))return!1;if(s=e+" *",this.rules.get(s)!==t.rules.get(s))return!1;for(var i in r){if(s="* "+i,this.rules.get(s)!==t.rules.get(s))return!1;if(s=e+" "+i,this.rules.get(s)!==t.rules.get(s))return!1}return!0},t.prototype.setCell=function(t,e,s,i){var o=r[s],n=t+" "+e,l=this.rules.get(n)||0,u=l&~(3<<o)|i<<o;return u!==l&&(0===u?this.rules.delete(n):this.rules.set(n,u),this.changed=!0,!0)},t.prototype.unsetCell=function(t,e,r){return this.evaluateCellZY(t,e,r),0!==this.r&&(this.setCell(t,e,r,0),this.changed=!0,!0)},t.prototype.evaluateCell=function(t,e,s){var i=t+" "+e,o=this.rules.get(i);return void 0===o?0:o>>r[s]&3},t.prototype.clearRegisters=function(){return this.r=0,this.type=this.y=this.z="",this};var l=µBlock.URI.domainFromHostname;return t.prototype.evaluateCellZ=function(t,e,s){µBlock.decomposeHostname(t,this.decomposedSource),this.type=s;let i=r[s];for(let t of this.decomposedSource){this.z=t;let r=this.rules.get(t+" "+e);if(void 0!==r&&(r=r>>>i&3,0!==r))return this.r=r,r}return this.r=0,0},t.prototype.evaluateCellZY=function(t,r,s){if(""===r)return this.r=0,0;µBlock.decomposeHostname(r,this.decomposedDestination);for(let e of this.decomposedDestination){if("*"===e)break;if(this.y=e,0!==this.evaluateCellZ(t,e,"*"))return this.r}let i=function(t,e){if("*"===e||"*"===t||""===t)return!1;var r=l(t)||t;return!1===e.endsWith(r)||e.length!==r.length&&"."!==e.charAt(e.length-r.length-1)}(t,r);if(this.y="*",i){if("script"===s){if(0!==this.evaluateCellZ(t,"*","3p-script"))return this.r}else if("sub_frame"===s&&0!==this.evaluateCellZ(t,"*","3p-frame"))return this.r;if(0!==this.evaluateCellZ(t,"*","3p"))return this.r}else if("script"===s&&0!==this.evaluateCellZ(t,"*","1p-script"))return this.r;return e.hasOwnProperty(s)&&0!==this.evaluateCellZ(t,"*",s)||0!==this.evaluateCellZ(t,"*","*")?this.r:(this.type="",0)},t.prototype.mustAllowCellZY=function(t,e,r){return 2===this.evaluateCellZY(t,e,r)},t.prototype.mustBlockOrAllow=function(){return 1===this.r||2===this.r},t.prototype.mustBlock=function(){return 1===this.r},t.prototype.mustAbort=function(){return 3===this.r},t.prototype.lookupRuleData=function(t,e,r){var s=this.evaluateCellZY(t,e,r);return 0===s?null:{src:this.z,des:this.y,type:this.type,action:1===s?"block":2===s?"allow":"noop"}},t.prototype.toLogData=function(){if(0!==this.r&&""!==this.type)return{source:"dynamicHost",result:this.r,raw:`${this.z} ${this.y} ${this.type} ${this.intToActionMap.get(this.r)}`}},t.prototype.intToActionMap=new Map([[1,"block"],[2,"allow"],[3,"noop"]]),t.prototype.srcHostnameFromRule=function(t){return t.slice(0,t.indexOf(" "))},t.prototype.desHostnameFromRule=function(t){return t.slice(t.indexOf(" ")+1)},t.prototype.toArray=function(){var t=[],e=punycode.toUnicode;for(var i of this.rules.keys()){var o=this.srcHostnameFromRule(i),n=this.desHostnameFromRule(i);for(var l in r)if(!1!==r.hasOwnProperty(l)){var u=this.evaluateCell(o,n,l);0!==u&&(-1!==o.indexOf("xn--")&&(o=e(o)),-1!==n.indexOf("xn--")&&(n=e(n)),t.push(o+" "+n+" "+l+" "+s[u]))}}return t},t.prototype.toString=function(){return this.toArray().join("\n")},t.prototype.fromString=function(t,e){var r=new µBlock.LineIterator(t);for(!0!==e&&this.reset();!1===r.eot();)this.addFromRuleParts(r.next().trim().split(/\s+/))},t.prototype.validateRuleParts=function(t){if(!(t.length<4||t[0].endsWith(":")||-1!==t[1].indexOf("/")||!1===r.hasOwnProperty(t[2])||!1===i.hasOwnProperty(t[3])||"*"!==t[1]&&"*"!==t[2]||(n.test(t[0])&&(t[0]=punycode.toASCII(t[0])),n.test(t[1])&&(t[1]=punycode.toASCII(t[1])),"*"!==t[0]&&o.test(t[0])||"*"!==t[1]&&o.test(t[1]))))return t},t.prototype.addFromRuleParts=function(t){return void 0!==this.validateRuleParts(t)&&(this.setCell(t[0],t[1],t[2],i[t[3]]),!0)},t.prototype.removeFromRuleParts=function(t){return void 0!==this.validateRuleParts(t)&&(this.setCell(t[0],t[1],t[2],0),!0)},t.prototype.toSelfie=function(){return{magicId:1,rules:Array.from(this.rules)}},t.prototype.fromSelfie=function(t){return 1===t.magicId&&(this.rules=new Map(t.rules),this.changed=!0,!0)},t.prototype.benchmark=async function(){const t=await µBlock.loadBenchmarkDataset();if(!1===Array.isArray(t)||0===t.length)return void log.print("No requests found to benchmark");log.print("Benchmarking sessionFirewall.evaluateCellZY()...");const e=µBlock.filteringContext.duplicate(),r=self.performance.now();for(const r of t)e.setURL(r.url),e.setTabOriginFromURL(r.frameUrl),e.setType(r.cpt),this.evaluateCellZY(e.getTabHostname(),e.getHostname(),e.type);const s=self.performance.now()-r;log.print(`Evaluated ${t.length} requests in ${s.toFixed(0)} ms`),log.print(`\tAverage: ${(s/t.length).toFixed(3)} ms per request`)},t}(),µBlock.sessionFirewall=new µBlock.Firewall,µBlock.permanentFirewall=new µBlock.Firewall;