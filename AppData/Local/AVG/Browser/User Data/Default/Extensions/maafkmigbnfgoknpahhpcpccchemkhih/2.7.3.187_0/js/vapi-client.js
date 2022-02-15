"use strict";"object"==typeof vAPI&&vAPI.randomToken instanceof Function==0&&(vAPI.randomToken=function(){const t=Math.random();return String.fromCharCode(26*t+97)+Math.floor((.25+.75*t)*Number.MAX_SAFE_INTEGER).toString(36).slice(-8)},vAPI.sessionId=vAPI.randomToken(),vAPI.setTimeout=vAPI.setTimeout||self.setTimeout.bind(self),vAPI.shutdown={jobs:[],add:function(t){this.jobs.push(t)},exec:function(){self.requestIdleCallback((()=>{const t=this.jobs.slice();for(this.jobs.length=0;0!==t.length;)t.pop()()}))},remove:function(t){let e;for(;-1!==(e=this.jobs.indexOf(t));)this.jobs.splice(e,1)}},vAPI.messaging={port:null,portTimer:null,portTimerDelay:1e4,extended:void 0,extensions:[],msgIdGenerator:1,pending:new Map,shuttingDown:!1,shutdown:function(){this.shuttingDown=!0,this.destroyPort()},disconnectListener:function(){this.port=null,window!==window.top&&vAPI.shutdown.exec()},disconnectListenerBound:null,messageListener:function(t){if("object"==typeof t&&null!==t){if(void 0!==t.msgId){const e=this.pending.get(t.msgId);if(void 0!==e)return this.pending.delete(t.msgId),void e(t.msg)}this.extensions.every((e=>!0!==e.canProcessMessage(t)))}},messageListenerBound:null,canDestroyPort:function(){return 0===this.pending.size&&(0===this.extensions.length||this.extensions.every((t=>t.canDestroyPort())))},mustDestroyPort:function(){0!==this.extensions.length&&(this.extensions.forEach((t=>t.mustDestroyPort())),this.extensions.length=0)},portPoller:function(){if(this.portTimer=null,null!==this.port&&this.canDestroyPort())return this.destroyPort();this.portTimer=vAPI.setTimeout(this.portPollerBound,this.portTimerDelay),this.portTimerDelay=Math.min(2*this.portTimerDelay,36e5)},portPollerBound:null,destroyPort:function(){null!==this.portTimer&&(clearTimeout(this.portTimer),this.portTimer=null);const t=this.port;if(null!==t&&(t.disconnect(),t.onMessage.removeListener(this.messageListenerBound),t.onDisconnect.removeListener(this.disconnectListenerBound),this.port=null),this.mustDestroyPort(),0!==this.pending.size){const t=this.pending;this.pending=new Map;for(const e of t.values())e()}},createPort:function(){if(this.shuttingDown)return null;null===this.messageListenerBound&&(this.messageListenerBound=this.messageListener.bind(this),this.disconnectListenerBound=this.disconnectListener.bind(this),this.portPollerBound=this.portPoller.bind(this));try{this.port=browser.runtime.connect({name:vAPI.sessionId})||null}catch(t){this.port=null}return null===this.port?(vAPI.shutdown.exec(),null):(this.port.onMessage.addListener(this.messageListenerBound),this.port.onDisconnect.addListener(this.disconnectListenerBound),this.portTimerDelay=1e4,null===this.portTimer&&(this.portTimer=vAPI.setTimeout(this.portPollerBound,this.portTimerDelay)),this.port)},getPort:function(){return null!==this.port?this.port:this.createPort()},send:function(t,e){this.pending.size>50&&vAPI.shutdown.exec();const n=this.getPort();if(null===n)return Promise.resolve();const s=this.msgIdGenerator++,i=new Promise((t=>{this.pending.set(s,t)}));return n.postMessage({channel:t,msgId:s,msg:e}),i},extend:function(){return void 0===this.extended&&(this.extended=vAPI.messaging.send("vapi",{what:"extendClient"}).then((()=>self.vAPI instanceof Object&&0!==this.extensions.length)).catch((()=>{}))),this.extended}},vAPI.shutdown.add((()=>{vAPI.messaging.shutdown(),window.vAPI=void 0})));