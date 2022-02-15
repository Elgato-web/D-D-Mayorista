"use strict";{const t=131072,e=0,i=2048,s=i>>>2,r=s+1,n=s+2,h=s+3,f=s+4,u=s+5,a=s+6,o=s+7,l=s+8<<2,b=12,c=8*b,d=0,y=1,m=2,g=0,x=1,w=2,p=16777215,A=(t,e,i)=>i-e<<24|t+e,C=e=>e+t-1&~(t-1);µBlock.BidiTrieContainer=class{constructor(s){const u=4*t;this.buf8=new Uint8Array(u),this.buf32=new Uint32Array(this.buf8.buffer),this.buf32[r]=l,this.buf32[n]=this.buf32[r],this.buf32[h]=u>>>1,this.buf32[f]=this.buf32[h],this.haystack=this.buf8.subarray(e,e+i),this.extraHandler=s,this.textDecoder=null,this.wasmMemory=null,this.lastStored="",this.lastStoredLen=this.lastStoredIndex=0}get haystackLen(){return this.buf32[s]}set haystackLen(t){this.buf32[s]=t}reset(t){t instanceof Object&&"number"==typeof t.byteLength&&"number"==typeof t.char0&&(t.byteLength>this.buf8.byteLength&&this.reallocateBuf(t.byteLength),this.buf32[h]=t.char0),this.buf32[n]=this.buf32[r],this.buf32[f]=this.buf32[h],this.lastStored="",this.lastStoredLen=this.lastStoredIndex=0}matches(t,e){const i=this.buf32,r=this.buf8,n=i[h],f=i[s];let u=e,a=0,o=0;for(;;){for(a=r[u],u+=1;;){o=i[t+m];let e=n+(16777215&o);if(r[e]===a){if(o=(o>>>24)-1,0!==o){if(a=u+o,a>f)return 0;for(;;){if(e+=1,r[e]!==r[u])return 0;if(u+=1,u===a)break}}break}if(0===(t=i[t+y]))return 0}if(a=i[(t=i[t+d])+w],a<=p){if(0!==a&&0!==this.matchesExtra(e,u,a))return 1;if(a=i[t+x],0!==a&&0!==this.matchesLeft(a,e,u))return 1;if(0===(t=i[t+g]))return 0}if(u===f)return 0}return 0}matchesLeft(t,e,i){const s=this.buf32,r=this.buf8,n=s[h];let f=0,u=0;for(;;){if(0===e)return 0;for(f=r[e-=1];;){u=s[t+m];let i=n+(16777215&u);if(u=(u>>>24)-1,i+=u,r[i]===f){if(0!==u){if(f=e-u,f<0)return 0;for(;;){if(i-=1,r[e-=1]!==r[i])return 0;if(e===f)break}}break}if(0===(t=s[t+y]))return 0}if(f=s[(t=s[t+d])+w],f<=p){if(0!==f&&0!==this.matchesExtra(e,i,f))return 1;if(0===(t=s[t+g]))return 0}}return 0}matchesExtra(t,e,i){let s=0;if(1!==i){if(s=this.extraHandler(t,e,i),0===s)return 0}else s=-1;return this.buf32[o]=s,this.buf32[u]=t,this.buf32[a]=e,1}createOne(t){if(Array.isArray(t))return new this.STrieRef(this,t[0],t[1]);this.buf32[h]-this.buf32[n]<b&&this.growBuf(b,0);const e=this.buf32[n]>>>2;return this.buf32[n]+=b,this.buf32[e+y]=0,this.buf32[e+d]=0,this.buf32[e+m]=0,new this.STrieRef(this,e,0)}compileOne(t){return[t.iroot,t.size]}add(t,e,i,s=0){const r=i;if(0===r)return 0;this.buf32[h]-this.buf32[n]<c&&this.growBuf(c,0);const f=this.buf32,u=f[h];let a=t,o=u+e;if(0===f[a+m])return f[a+m]=A(e,s,r),this.addLeft(a,e,s);const l=this.buf8;let b,x=s;for(;;){const t=f[a+m],i=t>>>24;if(0===i){a=f[a+g];continue}let n=u+(16777215&t);if(l[n]!==l[o+x]){if(b=f[a+y],0===b)return b=this.addCell(0,0,A(e,x,r)),f[a+y]=b,this.addLeft(b,e,s);a=b;continue}let h=1;if(x+=1,1!==i)for(;h!==i&&x!==r&&l[n+h]===l[o+x];)h+=1,x+=1;if(h===i){if(x===r)return this.addLeft(a,e,s);if(b=f[a+d],0!==f[b+d]){a=b;continue}return a=this.addCell(0,0,A(e,x,r)),f[b+d]=a,this.addLeft(a,e,s)}return n-=u,f[a+m]=h<<24|n,b=this.addCell(f[a+d],0,i-h<<24|n+h),f[a+d]=b,x===r||(a=this.addCell(0,0,A(e,x,r)),f[b+y]=a),this.addLeft(a,e,s)}}addLeft(t,e,i){const s=this.buf32,r=s[h];let n=e+r,f=s[t+d];if(0===f||s[f+m]>p){const e=f;if(f=this.allocateCell(),s[t+d]=f,s[f+g]=e,0===i)return f}if(1===s[f+w])return f;if(0===i)return f;if(0===(t=s[f+x])&&(t=this.allocateCell(),s[f+x]=t),0===s[t+m])return s[t+m]=A(e,0,i),f=this.allocateCell(),s[t+d]=f,f;const u=this.buf8;let a,o=i;for(;;){const i=s[t+m];if(i<=p){if(a=s[t+d],0!==a){t=a;continue}return f=this.allocateCell(),s[t+d]=this.addCell(f,0,A(e,0,o)),f}const h=r+(16777215&i),l=h+(i>>>24);let b=l;if(u[b-1]===u[n+o-1]){if(b-=1,o-=1,b!==h)for(;b!==h&&0!==o&&u[b-1]===u[n+o-1];)b-=1,o-=1;if(b!==h)return s[t+m]=l-b<<24|b-r,a=this.addCell(s[t+d],0,b-h<<24|h-r),0===o?(f=this.allocateCell(),s[t+d]=f,s[f+d]=a,f):(s[t+d]=a,f=this.allocateCell(),s[a+y]=this.addCell(f,0,A(e,0,o)),f);if(a=s[t+d],0===o)return s[a+w]<=p?a:(f=this.allocateCell(),s[f+d]=a,s[t+d]=f,f);0===a?(a=this.addCell(0,0,0),s[t+d]=a,s[a+d]=this.addCell(0,0,A(e,0,o))):t=a}else{if(a=s[t+y],0===a)return f=this.allocateCell(),a=this.addCell(f,0,A(e,0,o)),s[t+y]=a,f;t=a}}}optimize(t=!1){return t&&this.shrinkBuf(),{byteLength:this.buf8.byteLength,char0:this.buf32[h]}}serialize(t){return t instanceof Object?t.encode(this.buf32.buffer,this.buf32[f]):Array.from(new Uint32Array(this.buf32.buffer,0,this.buf32[f]+3>>>2))}unserialize(t,e){const i="string"==typeof t;let s=i?e.decodeSize(t):t.length<<2;return 0!==s&&(this.reallocateBuf(s),i?e.decode(t,this.buf8.buffer):this.buf32.set(t),!0)}storeString(t){const e=t.length;if(e===this.lastStoredLen&&t===this.lastStored)return this.lastStoredIndex;this.lastStored=t,this.lastStoredLen=e,this.buf8.length-this.buf32[f]<e&&this.growBuf(0,e);const i=this.buf32[f];this.buf32[f]=i+e;const s=this.buf8;for(let r=0;r<e;r++)s[i+r]=t.charCodeAt(r);return this.lastStoredIndex=i-this.buf32[h]}extractString(t,e){null===this.textDecoder&&(this.textDecoder=new TextDecoder);const i=this.buf32[h]+t;return this.textDecoder.decode(this.buf8.subarray(i,i+e))}startsWith(t,e,i,s){if(t<0||t+s>e)return 0;const r=this.buf8,n=(i+=this.buf32[h])+s;for(;r[t]===r[i];){if((i+=1)===n)return 1;t+=1}return 0}indexOf(t,e,i,s){if(0===s)return t;if((e-=s)<t)return-1;const r=(i+=this.buf32[h])+s,n=this.buf8;for(;;){let s=t,h=i;for(;n[s]===n[h];){if(h+=1,h===r)return t;s+=1}if((t+=1)>e)break}return-1}lastIndexOf(t,e,i,s){if(0===s)return t;let r=e-s;if(r<t)return-1;const n=(i+=this.buf32[h])+s,f=this.buf8;for(;;){let e=r,s=i;for(;f[e]===f[s];){if(s+=1,s===n)return r;e+=1}if(r===t)break;r-=1}return-1}async enableWASM(){if("object"!=typeof WebAssembly)return!1;if(this.wasmMemory instanceof WebAssembly.Memory)return!0;const t=await S();if(t instanceof WebAssembly.Module==0)return!1;const s=new WebAssembly.Memory({initial:C(this.buf8.length)>>>16}),r=await WebAssembly.instantiate(t,{imports:{memory:s,extraHandler:this.extraHandler}});if(r instanceof WebAssembly.Instance==0)return!1;this.wasmMemory=s;const n=s.buffer.byteLength>>>16,h=C(this.buf8.byteLength)>>>16;h>n&&s.grow(h-n);const f=new Uint8Array(s.buffer);return f.set(this.buf8),this.buf8=f,this.buf32=new Uint32Array(this.buf8.buffer),this.haystack=this.buf8.subarray(e,e+i),this.matches=r.exports.matches,this.startsWith=r.exports.startsWith,this.indexOf=r.exports.indexOf,this.lastIndexOf=r.exports.lastIndexOf,!0}allocateCell(){let t=this.buf32[n];return this.buf32[n]=t+b,t>>>=2,this.buf32[t+0]=0,this.buf32[t+1]=0,this.buf32[t+2]=0,t}addCell(t,e,i){const s=this.allocateCell();return this.buf32[s+d]=t,this.buf32[s+y]=e,this.buf32[s+m]=i,s}growBuf(t,e){const i=Math.max(C(this.buf32[n]+t),this.buf32[h]),s=i+this.buf32[f]-this.buf32[h],r=Math.max(C(s+e),this.buf8.length);r>this.buf8.length&&this.reallocateBuf(r),i!==this.buf32[h]&&(this.buf8.copyWithin(i,this.buf32[h],this.buf32[f]),this.buf32[h]=i,this.buf32[f]=s)}shrinkBuf(){const t=this.buf32[n]+c,e=t+this.buf32[f]-this.buf32[h],i=e+256;t!==this.buf32[h]&&(this.buf8.copyWithin(t,this.buf32[h],this.buf32[f]),this.buf32[h]=t,this.buf32[f]=e),i<this.buf8.length&&this.reallocateBuf(i)}reallocateBuf(t){if((t=C(t))!==this.buf8.length){if(null===this.wasmMemory){const e=new Uint8Array(t);e.set(e.length<this.buf8.length?this.buf8.subarray(0,e.length):this.buf8),this.buf8=e}else{const e=(t+65535>>>16)-(this.buf8.length>>>16);if(e<=0)return;this.wasmMemory.grow(e),this.buf8=new Uint8Array(this.wasmMemory.buffer)}this.buf32=new Uint32Array(this.buf8.buffer),this.haystack=this.buf8.subarray(e,e+i)}}},µBlock.BidiTrieContainer.prototype.STrieRef=class{constructor(t,e,i){this.container=t,this.iroot=e,this.size=i}add(t,e,i=0){const s=this.container.add(this.iroot,t,e,i);return 0!==s&&(this.size+=1),s}getExtra(t){return this.container.buf32[t+w]}setExtra(t,e){this.container.buf32[t+w]=e}matches(t){return this.container.matches(this.iroot,t)}dump(){for(const t of this)console.log(t)}get $l(){return 0|this.container.buf32[u]}get $r(){return 0|this.container.buf32[a]}get $iu(){return 0|this.container.buf32[o]}[Symbol.iterator](){return{value:void 0,done:!1,next:function(){if(0===this.icell){if(0===this.forks.length)return this.value=void 0,this.done=!0,this;this.charPtr=this.forks.pop(),this.icell=this.forks.pop()}for(;;){const t=this.container.buf32[this.icell+y];0!==t&&this.forks.push(t,this.charPtr);const e=this.container.buf32[this.icell+m];let i=this.container.buf32[h]+(16777215&e);const s=i+(e>>>24);for(;i<s;)this.charBuf[this.charPtr]=this.container.buf8[i],this.charPtr+=1,i+=1;if(this.icell=this.container.buf32[this.icell+d],0===this.icell)return this.toPattern();if(0===this.container.buf32[this.icell+m])return this.icell=this.container.buf32[this.icell+d],this.toPattern()}},toPattern:function(){return this.value=this.textDecoder.decode(new Uint8Array(this.charBuf.buffer,0,this.charPtr)),this},container:this.container,icell:this.iroot,charBuf:new Uint8Array(256),charPtr:0,forks:[],textDecoder:new TextDecoder}}};const S=(()=>{let t,e;{const t=new URL(document.currentScript.src),i=/[^\/]+$/.exec(t.pathname);null!==i&&(t.pathname=t.pathname.slice(0,i.index)),e=t.href}return async function(){if(t instanceof Promise)return t;if("object"!=typeof WebAssembly||"function"!=typeof WebAssembly.compileStreaming)return;if("object"==typeof vAPI&&!0!==vAPI.canWASM)return;const i=new Uint32Array(1),s=new Uint8Array(i.buffer);return i[0]=1,1===s[0]?(t=fetch(e+"wasm/biditrie.wasm",{mode:"same-origin"}).then(WebAssembly.compileStreaming).catch((t=>{log.info(t)})),t):void 0}})()}