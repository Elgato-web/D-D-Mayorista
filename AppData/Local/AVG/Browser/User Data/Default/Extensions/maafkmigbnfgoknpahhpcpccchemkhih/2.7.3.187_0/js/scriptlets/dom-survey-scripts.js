"use strict";(()=>{if("object"!=typeof vAPI)return;const o=Date.now();vAPI.domSurveyScripts instanceof Object==0&&(vAPI.domSurveyScripts={busy:!1,scriptCount:-1,surveyTime:o});const n=vAPI.domSurveyScripts;if(!n.busy){if(n.busy=!0,n.surveyTime<vAPI.domMutationTime&&(n.scriptCount=-1),n.surveyTime=o,-1===n.scriptCount){const o=/^(data:|blob:|$)/;let e=0,t=0;for(const n of document.scripts)if(o.test(n.src))e=1;else if(t+=1,99===t)break;t+=e,0!==t&&(n.scriptCount=t)}if(-1===n.scriptCount&&null!==document.querySelector('a[href^="javascript:"]')&&(n.scriptCount=1),-1===n.scriptCount){n.scriptCount=0;const o=new Set(["onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragexit","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onwheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onoffline","ononline","onpagehide","onpageshow","onrejectionhandled","onpopstate","onstorage","onunhandledrejection","onunload","oncopy","oncut","onpaste"]),e=document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT);for(;;){const t=e.nextNode();if(null===t)break;if(!1!==t.hasAttributes())for(const e of t.getAttributeNames())if(!1!==o.has(e)){n.scriptCount=1;break}}}n.busy=!1,-1!==n.scriptCount&&n.scriptCount}})();