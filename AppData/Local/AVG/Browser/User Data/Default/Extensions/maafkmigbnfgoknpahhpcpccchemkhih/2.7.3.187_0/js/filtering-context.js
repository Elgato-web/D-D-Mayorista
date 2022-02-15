"use strict";{const t=µBlock.URI.originFromURI,i=vAPI.hostnameFromURI,s=vAPI.domainFromHostname,o=0,e=1,r=2,n=4,a=16,h=16,d=32,m=64,c=128,g=128,p=256,b=512,l=1024,u=2048,I=4096,D=8192,O=16384,T=32768,y=65536,f=d|u,E=n|O,v=O|T,H=e|r|p,R=b|T,A={no_type:o,beacon:e,csp_report:r,font:n,image:a,imageset:h,main_frame:d,media:m,object:c,object_subrequest:g,ping:p,script:b,stylesheet:l,sub_frame:u,websocket:I,xmlhttprequest:D,"inline-font":O,"inline-script":T,other:y},N=class{constructor(t){if(t instanceof N)return this.fromFilteringContext(t);this.tstamp=0,this.realm="",this.id=void 0,this.itype=0,this.stype=void 0,this.url=void 0,this.aliasURL=void 0,this.hostname=void 0,this.domain=void 0,this.docId=-1,this.frameId=-1,this.docOrigin=void 0,this.docHostname=void 0,this.docDomain=void 0,this.tabId=void 0,this.tabOrigin=void 0,this.tabHostname=void 0,this.tabDomain=void 0,this.redirectURL=void 0,this.filter=void 0}get type(){return this.stype}set type(t){this.itype=A[t]||o,this.stype=t}isDocument(){return 0!=(this.itype&f)}isFont(){return 0!=(this.itype&E)}fromTabId(t){const i=µBlock.tabContextManager.mustLookup(t);return this.tabOrigin=i.origin,this.tabHostname=i.rootHostname,this.tabDomain=i.rootDomain,this.tabId=i.tabId,this}fromWebrequestDetails(i){const s=i.tabId;if(this.type=i.type,this.itype===d&&s>0&&µBlock.tabContextManager.push(s,i.url),this.fromTabId(s),this.realm="",this.id=i.requestId,this.setURL(i.url),this.aliasURL=i.aliasURL||void 0,this.itype!==u?(this.docId=i.frameId,this.frameId=-1):(this.docId=i.parentFrameId,this.frameId=i.frameId),this.tabId>0)if(0===this.docId)this.docOrigin=this.tabOrigin,this.docHostname=this.tabHostname,this.docDomain=this.tabDomain;else if(void 0!==i.documentUrl)this.setDocOriginFromURL(i.documentUrl);else{const t=µBlock.pageStoreFromTabId(this.tabId),i=t&&t.getFrameStore(this.docId);i?this.setDocOriginFromURL(i.rawURL):this.setDocOrigin(this.tabOrigin)}else if(void 0!==i.documentUrl){const s=t(µBlock.normalizePageURL(0,i.documentUrl));this.setDocOrigin(s).setTabOrigin(s)}else if(-1===this.docId||0!=(this.itype&f)){const i=t(this.url);this.setDocOrigin(i).setTabOrigin(i)}else this.setDocOrigin(this.tabOrigin);return this.redirectURL=void 0,this.filter=void 0,this}fromFilteringContext(t){return this.realm=t.realm,this.type=t.type,this.url=t.url,this.hostname=t.hostname,this.domain=t.domain,this.docId=t.docId,this.frameId=t.frameId,this.docOrigin=t.docOrigin,this.docHostname=t.docHostname,this.docDomain=t.docDomain,this.tabId=t.tabId,this.tabOrigin=t.tabOrigin,this.tabHostname=t.tabHostname,this.tabDomain=t.tabDomain,this.redirectURL=t.redirectURL,this.filter=void 0,this}duplicate(){return new N(this)}setRealm(t){return this.realm=t,this}setType(t){return this.type=t,this}setURL(t){return t!==this.url&&(this.hostname=this.domain=void 0,this.url=t),this}getHostname(){return void 0===this.hostname&&(this.hostname=i(this.url)),this.hostname}setHostname(t){return t!==this.hostname&&(this.domain=void 0,this.hostname=t),this}getDomain(){return void 0===this.domain&&(this.domain=s(this.getHostname())),this.domain}setDomain(t){return this.domain=t,this}getDocOrigin(){return void 0===this.docOrigin&&(this.docOrigin=this.tabOrigin),this.docOrigin}setDocOrigin(t){return t!==this.docOrigin&&(this.docHostname=this.docDomain=void 0,this.docOrigin=t),this}setDocOriginFromURL(i){return this.setDocOrigin(t(i))}getDocHostname(){return void 0===this.docHostname&&(this.docHostname=i(this.getDocOrigin())),this.docHostname}setDocHostname(t){return t!==this.docHostname&&(this.docDomain=void 0,this.docHostname=t),this}getDocDomain(){return void 0===this.docDomain&&(this.docDomain=s(this.getDocHostname())),this.docDomain}setDocDomain(t){return this.docDomain=t,this}is3rdPartyToDoc(){let t=this.getDocDomain();if(""===t&&(t=this.docHostname),void 0!==this.domain&&""!==this.domain)return this.domain!==t;const i=this.getHostname();if(!1===i.endsWith(t))return!0;const s=i.length-t.length;return 0!==s&&46!==i.charCodeAt(s-1)}setTabId(t){return this.tabId=t,this}getTabOrigin(){if(void 0===this.tabOrigin){const t=µBlock.tabContextManager.mustLookup(this.tabId);this.tabOrigin=t.origin,this.tabHostname=t.rootHostname,this.tabDomain=t.rootDomain}return this.tabOrigin}setTabOrigin(t){return t!==this.tabOrigin&&(this.tabHostname=this.tabDomain=void 0,this.tabOrigin=t),this}setTabOriginFromURL(i){return this.setTabOrigin(t(i))}getTabHostname(){return void 0===this.tabHostname&&(this.tabHostname=i(this.getTabOrigin())),this.tabHostname}setTabHostname(t){return t!==this.tabHostname&&(this.tabDomain=void 0,this.tabHostname=t),this}getTabDomain(){return void 0===this.tabDomain&&(this.tabDomain=s(this.getTabHostname())),this.tabDomain}setTabDomain(t){return this.docDomain=t,this}is3rdPartyToTab(){let t=this.getTabDomain();if(""===t&&(t=this.tabHostname),void 0!==this.domain&&""!==this.domain)return this.domain!==t;const i=this.getHostname();if(!1===i.endsWith(t))return!0;const s=i.length-t.length;return 0!==s&&46!==i.charCodeAt(s-1)}setFilter(t){return this.filter=t,this}pushFilter(t){return void 0===this.filter?this.setFilter(t):(Array.isArray(this.filter)?this.filter.push(t):this.filter=[this.filter,t],this)}pushFilters(t){return void 0===this.filter?this.setFilter(t):(Array.isArray(this.filter)?this.filter.push(...t):this.filter=[this.filter,...t],this)}toLogger(){this.tstamp=Date.now(),void 0===this.domain&&this.getDomain(),void 0===this.docDomain&&this.getDocDomain(),void 0===this.tabDomain&&this.getTabDomain();const t=µBlock.logger,i=this.filter;if(!1===Array.isArray(i))return t.writeOne(this);for(const s of i)this.filter=s,t.writeOne(this)}};N.prototype.BEACON=N.BEACON=e,N.prototype.CSP_REPORT=N.CSP_REPORT=r,N.prototype.FONT=N.FONT=n,N.prototype.IMAGE=N.IMAGE=a,N.prototype.IMAGESET=N.IMAGESET=h,N.prototype.MAIN_FRAME=N.MAIN_FRAME=d,N.prototype.MEDIA=N.MEDIA=m,N.prototype.OBJECT=N.OBJECT=c,N.prototype.OBJECT_SUBREQUEST=N.OBJECT_SUBREQUEST=g,N.prototype.PING=N.PING=p,N.prototype.SCRIPT=N.SCRIPT=b,N.prototype.STYLESHEET=N.STYLESHEET=l,N.prototype.SUB_FRAME=N.SUB_FRAME=u,N.prototype.WEBSOCKET=N.WEBSOCKET=I,N.prototype.XMLHTTPREQUEST=N.XMLHTTPREQUEST=D,N.prototype.INLINE_FONT=N.INLINE_FONT=O,N.prototype.INLINE_SCRIPT=N.INLINE_SCRIPT=T,N.prototype.OTHER=N.OTHER=y,N.prototype.FRAME_ANY=N.FRAME_ANY=f,N.prototype.FONT_ANY=N.FONT_ANY=E,N.prototype.INLINE_ANY=N.INLINE_ANY=v,N.prototype.PING_ANY=N.PING_ANY=H,N.prototype.SCRIPT_ANY=N.SCRIPT_ANY=R,µBlock.FilteringContext=N,µBlock.filteringContext=new N}