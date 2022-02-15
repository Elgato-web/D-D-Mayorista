"use strict";(()=>{if("object"!=typeof vAPI)return;const e=e=>document.getElementById(e),t=e=>document.querySelector(e),s=document.documentElement,n=t("aside");let i;const o=t("svg"),a=o.children[0],c=o.children[1],r="M0 0",l=/^#[$?]?#/,u=(()=>{const e=new URL(self.location.href);return e.searchParams.has("zap")&&s.classList.add("zap"),e.searchParams.get("epid")})();if(null===u)return;const d=new URL(vAPI.getURL(""));let h,p,f=[],g=[],v=0,m="";const y=new Map;let L=!1;const A=new CodeMirror(document.querySelector(".codeMirrorContainer"),{autoCloseBrackets:!0,autofocus:!0,extraKeys:{"Ctrl-Space":"autocomplete"},lineWrapping:!0,matchBrackets:!0,maxScanLines:1});vAPI.messaging.send("dashboard",{what:"getAutoCompleteDetails"}).then((e=>{if("object"!=typeof e)return;const t=A.getMode();t.setHints instanceof Function&&t.setHints(e)}));const w=function(){const e=A.getValue(),t=e.indexOf("\n");return-1===t?e:e.slice(0,t)},P=function(){const e=w();if(""===e)return"";const t=i;return t.analyze(e),t.analyzeExtra(),t.category!==t.CATStaticExtFilter&&t.category!==t.CATStaticNetFilter||t.shouldDiscard()?"!":e},C=function(e,s,n=!1){const i=t(`#${e} input`),o=parseInt(i.max,10);"number"!=typeof s&&(s=parseInt(i.value,10)),n&&(s=o-s),i.value=s;const a=t(`#${e} > span`),c=a.children[0],r=a.children[1],l=a.offsetWidth,u=s/o*((l-r.offsetWidth)/l*100);c.style.width=`${u}%`},E=function(e){let{slot:s,filters:n}=e,i=n[s];for(const e of("#candidateFilters li",document.querySelectorAll("#candidateFilters li")))e.classList.remove("active");return v=s,m="",void 0===i?"":!1===i.startsWith("##")?(t(`#netFilters li:nth-of-type(${s+1})`).classList.add("active"),i):(t(`#cosmeticFilters li:nth-of-type(${s+1})`).classList.add("active"),I(e))},I=function(e){let{slot:t,filters:s}=e;if(C("resultsetDepth",t,!0),C("resultsetSpecificity"),y.has(t))return void b({slot:t});const n=[0,2,3,8,10,12,14,15],i=[];let o=s[t];for(const e of n){const n=[];for(let i=t;i<s.length;i++){if(o=s[i].slice(2),0==(1&e)&&(o=o.replace(/:nth-of-type\(\d+\)/,""),"#"===o.charAt(0)&&(0==(8&e)||i===t))){const e=o.search(/[^\\]\./);-1!==e&&(o=o.slice(e+1))}if(0==(2&e)){const e=/^\[([^^=]+)\^?=.+\]$/.exec(o);null!==e&&(o=`[${e[1]}]`)}if("#"===o.charAt(0)&&(o=o.replace(/([^\\])\..+$/,"$1")),0!==n.length&&(o+=" > "),n.unshift(o),0==(8&e)||o.startsWith("#"))break}if(8==(12&e)){let e=0;for(;e<n.length-1;)/^[a-z0-9]+ > $/.test(n[e+1])?(n[e].endsWith(" > ")&&(n[e]=n[e].slice(0,-2)),n.splice(e+1,1)):e+=1}L&&0!==n.length&&!1===n[0].startsWith("#")&&!1===n[0].startsWith("body ")&&0!=(12&e)&&n.unshift("body > "),i.push(n)}vAPI.MessagingConnection.sendTo(h,{what:"optimizeCandidates",candidates:i,slot:t})},b=function(s){e("resultsetModifiers").classList.remove("hide");const n=parseInt(t("#resultsetSpecificity input").value,10);Array.isArray(s.candidates)&&y.set(s.slot,s.candidates);const i=y.get(s.slot);m=i[n],A.setValue(m),A.clearHistory(),S()},M=function(e){s.classList.contains("zap")?vAPI.MessagingConnection.sendTo(h,{what:"zapElementAtPoint",mx:e.clientX,my:e.clientY,options:{stay:e.shiftKey||"touch"===e.type,highlight:e.target!==c}}):s.classList.contains("paused")?!1===s.classList.contains("preview")&&B():("touch"===e.type&&s.classList.add("show"),vAPI.MessagingConnection.sendTo(h,{what:"filterElementAtPoint",mx:e.clientX,my:e.clientY,broad:e.ctrlKey}))},k=(()=>{let e=0,t=0,n=0;return i=>{if("touchstart"===i.type)return e=i.touches[0].screenX,t=i.touches[0].screenY,void(n=i.timeStamp);if(void 0===e)return;const o=i.changedTouches[0].screenX,a=i.changedTouches[0].screenY,l=Math.abs(Math.atan2(a-t,o-e)),u=Math.sqrt(Math.pow(o-e,2),Math.pow(a-t,2)),d=i.timeStamp-n;if(u<32&&d<200)return M({type:"touch",target:i.target,clientX:i.changedTouches[0].pageX,clientY:i.changedTouches[0].pageY}),void i.preventDefault();if(u<64)return;const p=.25*Math.PI*.5,f=l<p;if(!(!1===f&&l<Math.PI-p))if(i.cancelable&&i.preventDefault(),!1!==f){if(!s.classList.contains("zap")||c.getAttribute("d")===r)return s.classList.contains("paused")&&s.classList.contains("show")?(s.classList.remove("show"),void s.classList.add("hide")):void R();vAPI.MessagingConnection.sendTo(h,{what:"unhighlight"})}else s.classList.contains("paused")&&(s.classList.remove("hide"),s.classList.add("show"))}})(),S=function(){const s=P(),n="!"===s;t("section").classList.toggle("invalidFilter",n),e("create").disabled=n,n&&(e("resultsetCount").textContent="E",e("create").setAttribute("disabled",""));const o=w();e("resultsetModifiers").classList.toggle("hide",""===o||o!==m),vAPI.MessagingConnection.sendTo(h,{what:"dialogSetFilter",filter:s,compiled:l.test(s)?i.result.compiled:void 0})},x=function(){const e=s.classList.toggle("preview");vAPI.MessagingConnection.sendTo(h,{what:"togglePreview",state:e})},F=function(){const e=P(),t=function(e){if(""===e||"!"===e)return;const t=vAPI.hostnameFromURI(d.href);if(l.test(e))return t+e;const s=[];return!1===e.startsWith("||")&&s.push(`domain=${t}`),void 0!==p&&s.push(p),s.length&&(e+="$"+s.join(",")),e}(e);void 0!==t&&vAPI.messaging.send("elementPicker",{what:"createUserFilter",autoComment:!0,filters:t,docURL:d.href,killCache:!1===l.test(e)}),vAPI.MessagingConnection.sendTo(h,{what:"dialogCreate",filter:e,compiled:l.test(e)?i.result.compiled:void 0})},T=function(){B()},$=function(){R()},q=function(){const e=t("#resultsetDepth input"),s=parseInt(e.max,10),n=parseInt(e.value,10),i=E({filters:g,slot:s-n});void 0!==i&&(A.setValue(i),A.clearHistory(),S())},D=function(){if(C("resultsetSpecificity"),w()!==m)return;const e=t("#resultsetDepth input"),s=parseInt(e.max,10)-parseInt(e.value,10),n=parseInt(t("#resultsetSpecificity input").value,10),i=y.get(s);m=i[n],A.setValue(m),A.clearHistory(),S()},z=function(e){let t=e.target.closest("li");if(null===t)return;const s=t.closest(".changeFilter");if(null===s)return;const n={filters:Array.from(s.querySelectorAll("li")).map((e=>e.textContent)),slot:0};for(;null!==t.previousElementSibling;)t=t.previousElementSibling,n.slot+=1;const i=E(n);void 0!==i&&(A.setValue(i),A.clearHistory(),S())},W=function(e){"Delete"!==e.key&&"Backspace"!==e.key||!s.classList.contains("zap")?"Escape"!==e.key&&27!==e.which||$():vAPI.MessagingConnection.sendTo(h,{what:"zapElementAtPoint",options:{stay:!0}})},X=(()=>{let e,t=!1,i=0,o=0,a=0,c=0,r=0,l=0,u=0,d=0;const h=()=>{e=void 0;const t=Math.min(Math.max(r-a+i,2),u),s=Math.min(Math.max(l-c+o,2),d);n.style.setProperty("right",`${t}px`),n.style.setProperty("bottom",`${s}px`)},p=s=>{if(void 0===e){if(t){const e=s.touches[0];a=e.pageX,c=e.pageY}else a=s.pageX,c=s.pageY;e=self.requestAnimationFrame(h)}},f=e=>{!1!==n.classList.contains("moving")&&(n.classList.remove("moving"),t?self.removeEventListener("touchmove",p,{capture:!0}):self.removeEventListener("mousemove",p,{capture:!0}),H(e))};return function(e){const a=n.querySelector("#move");if(e.target!==a)return;if(n.classList.contains("moving"))return;if(t=e.type.startsWith("touch"),t){const t=e.touches[0];i=t.pageX,o=t.pageY}else i=e.pageX,o=e.pageY;const c=self.getComputedStyle(n);r=parseInt(c.right,10),l=parseInt(c.bottom,10);const h=n.getBoundingClientRect();u=s.clientWidth-2-h.width,d=s.clientHeight-2-h.height,n.classList.add("moving"),t?(self.addEventListener("touchmove",p,{capture:!0}),self.addEventListener("touchend",f,{capture:!0,once:!0})):(self.addEventListener("mousemove",p,{capture:!0}),self.addEventListener("mouseup",f,{capture:!0,once:!0})),H(e)}})(),Y=(()=>{let e,t=!1,s=0,n=0;const i=()=>{e=void 0,vAPI.MessagingConnection.sendTo(h,{what:"highlightElementAtPoint",mx:s,my:n})},o=t=>{s=t.clientX,n=t.clientY,void 0===e&&(e=self.requestAnimationFrame(i))};return s=>{s!==t&&(t=s,t?document.addEventListener("mousemove",o,{passive:!0}):(document.removeEventListener("mousemove",o,{passive:!0}),void 0!==e&&(self.cancelAnimationFrame(e),e=void 0)))}})(),H=function(e){e.stopPropagation(),e.preventDefault()},V=function(e,t){const s=n.querySelector(t),i=s.querySelector("ul");for(;null!==i.firstChild;)i.firstChild.remove();for(let t=0;t<e.length;t++){const s=document.createElement("li");s.textContent=e[t],i.appendChild(s)}0!==e.length?s.style.removeProperty("display"):s.style.setProperty("display","none")},B=function(){s.classList.remove("paused","preview"),vAPI.MessagingConnection.sendTo(h,{what:"togglePreview",state:!1}),Y(!0)},R=function(){vAPI.MessagingConnection.sendTo(h,{what:"quitPicker"}),vAPI.MessagingConnection.disconnectFrom(h)},U=function(i){switch(i.what){case"candidatesOptimized":b(i);break;case"showDialog":!function(e){s.classList.add("paused"),Y(!1);const{netFilters:i,cosmeticFilters:o,filter:a}=e;f=i,L=0!==o.length&&"##body"===o[o.length-1],L&&o.pop(),g=o,d.href=e.url,V(i,"#netFilters"),V(o,"#cosmeticFilters"),y.clear();const c=t("#resultsetDepth input");if(c.max=o.length-1,c.value=c.max,n.querySelector("ul").style.display=i.length||o.length?"":"none",n.querySelector("#create").disabled=!0,"object"!=typeof a||null===a)return void A.setValue("");const r={filters:a.filters,slot:a.slot},l=E(r);void 0!==l&&(A.setValue(l),S())}(i);break;case"resultsetDetails":p=i.opt,e("resultsetCount").textContent=i.count,0!==i.count?e("create").removeAttribute("disabled"):e("create").setAttribute("disabled","");break;case"svgPaths":{let{ocean:e,islands:t}=i;e+=t,a.setAttribute("d",e),c.setAttribute("d",t||r);break}}};vAPI.MessagingConnection.connectTo(`epickerDialog-${u}`,`epicker-${u}`,(function(n){switch(n.what){case"connectionBroken":break;case"connectionMessage":U(n.payload);break;case"connectionAccepted":h=n.id,function(){self.addEventListener("keydown",W,!0);const n=t("svg");n.addEventListener("click",M),n.addEventListener("touchstart",k),n.addEventListener("touchend",k),B(),s.classList.contains("zap")||(A.on("changes",S),e("preview").addEventListener("click",x),e("create").addEventListener("click",F),e("pick").addEventListener("click",T),e("quit").addEventListener("click",$),e("move").addEventListener("mousedown",X),e("move").addEventListener("touchstart",X),e("candidateFilters").addEventListener("click",z),t("#resultsetDepth input").addEventListener("input",q),t("#resultsetSpecificity input").addEventListener("input",D),i=new vAPI.StaticFilteringParser({interactive:!0}))}(),vAPI.MessagingConnection.sendTo(h,{what:"start"})}}))})();