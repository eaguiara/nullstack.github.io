!function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(e,t,n){},function(e,t,n){},function(e,t){"undefined"!=typeof self&&self.Prism&&self.document&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",(function(e){e.selector+=", [class*='lang-'] script[type='text/plain'], [class*='language-'] script[type='text/plain'], script[type='text/plain'][class*='lang-'], script[type='text/plain'][class*='language-']"})),Prism.hooks.add("before-sanity-check",(function(e){if((e.element.matches||e.element.msMatchesSelector).call(e.element,"script[type='text/plain']")){var t=document.createElement("code");return(n=document.createElement("pre")).className=t.className=e.element.className,e.element.dataset&&Object.keys(e.element.dataset).forEach((function(t){Object.prototype.hasOwnProperty.call(e.element.dataset,t)&&(n.dataset[t]=e.element.dataset[t])})),e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"<\/script>"),t.textContent=e.code,n.appendChild(t),e.element.parentNode.replaceChild(n,e.element),void(e.element=t)}var n=e.element.parentNode;!e.code&&n&&"pre"==n.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)})))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);const r=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/,i=/^\/Date\((d|-|.*)\)[\/|\\]$/;function dateParser(e,t){if("string"==typeof t){let e=r.exec(t);if(e)return new Date(t);if(e=i.exec(t),e){const t=e[1].split(/[-+,.]/);return new Date(t[0]?+t[0]:0-+t[1])}}return t}function deserialize(e){return JSON.parse(e,dateParser)}function element_element(e,t={},...n){return null===t&&(t={}),n=function flattenChildren(e){return e=[].concat.apply([],e).map(e=>null!=e&&("Fragment"===e.type?flattenChildren(e.children):e)),[].concat.apply([],e)}(n),"textarea"===e&&(n=[n.join("")]),"element"===e&&(e=t.tag||"Fragment",delete t.tag),t.children=n,"function"==typeof e&&void 0!==e.render?{type:e,attributes:t,children:null}:{type:e,attributes:t,children:n}}function extractParamValue(e){return"true"===e||"false"!==e&&(e?decodeURIComponent(e.replace(/\+/g," ")):"")}function serializeParam(e){return e&&void 0!==e.toJSON?e.toJSON():e}function serializeSearch(e){return Object.keys(e).map(t=>!1===e[t]||e[t]?`${t}=${e[t]}`:"").filter(e=>!!e).join("&")}const a={};var l=a;const s={},o=new Proxy(s,{set(e,t,n){const r=serializeParam(n);e[t]=r;const i=serializeSearch(e);return m.url=m.path+(i?"?":"")+i,!0},get:(e,t)=>e[t]||l[t]||""});function updateParams(e){!function resetSegments(){for(const e in a)delete a[e]}();const t=function getQueryStringParams(e){const[t,n]=e.split("?");return n?n.split("&").reduce((e,t)=>{let[n,r]=t.split("=");return e[n]=extractParamValue(r),e},{}):{}}(e);for(const e of Object.keys({...t,...s}))s[e]=t[e];return o}var c=o;const u={...window.environment,client:!0,server:!1};delete window.environment,Object.freeze(u);var d=u;function extractLocation(e){let[t,n]=e.split("?");"/"!==t&&t.endsWith("/")&&(t=t.substring(0,t.length-1));let r=t;return n&&(r+="?"+n),{path:t,search:n,url:r}}let p=null;var m=new class router_Router{constructor(){!function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(this,"_changed",!1)}_redirect(e){const{url:t}=extractLocation(e);t!=this.url&&(d.static?window.location.href=t:(clearTimeout(p),p=setTimeout(()=>{updateParams(t),history.pushState({},document.title,t),window.dispatchEvent(new Event("popstate")),this._changed=!0},0)))}get url(){return extractLocation(window.location.pathname+window.location.search).url}set url(e){this._redirect(e)}get path(){return extractLocation(window.location.pathname).path}set path(e){this._redirect(e+window.location.search)}};function isFalse(e){return null==e||!1===e||!1===e.type}function isClass(e){return"function"==typeof e.type&&"function"==typeof e.type.prototype.render}function isFunction(e){return"function"==typeof e.type&&void 0===e.type.prototype}function isStatic(e){return"function"==typeof e.type&&("function"==typeof e.type.render||e.type.name&&!e.type.prototype)}function isText(e){return"Fragment"!==e&&void 0===e.children}const f={},h={set(e,t,n){return f[t]=n,g.update(),Reflect.set(...arguments)},get:(e,t)=>void 0===e[t]?f[t]:e[t]};function generateContext(e){return new Proxy(e,h)}var b=f;function generateKey(e){return"_."+e.join(".")}function routableNode(e,t){if(function isRoutable(e){return e&&void 0!==e.attributes&&void 0!==e.attributes.route}(e)){const n=t.slice(0,-1).join(".");if(void 0!==g.routes[n])e.type=!1,e.children=[];else{const t=function routeMatches(e,t){let{path:n}=extractLocation(e);const r=n.split("/"),i=t.split("/"),a={},l=Math.max(r.length,i.length);let s=!1;for(let e=0;e<l;e++)if(!s)if("*"===i[e])s=!0;else if(i[e]&&i[e].startsWith(":")){a[i[e].replace(":","")]=extractParamValue(r[e])}else if(i[e]!==r[e])return!1;return a}(m.url,e.attributes.route);if(!1!==t){g.routes[n]=!0;for(const e in t)l[e]=t[e];e._params=t}else e.type=!1,e.children=[]}delete e.attributes.route}}function bindableNode(e){if(function isBindable(e){return void 0!==e&&void 0!==e.attributes&&void 0!==e.attributes.bind&&void 0!==e.attributes.source}(e)){const t=e.attributes.source;"textarea"===e.type?e.children=[t[e.attributes.bind]]:"input"===e.type&&"checkbox"===e.attributes.type?e.attributes.checked=t[e.attributes.bind]:e.attributes.value=t[e.attributes.bind],e.attributes.name=e.attributes.bind;let n="oninput",r="value";"checkbox"===e.attributes.type||"radio"===e.attributes.type?(n="onclick",r="checked"):"input"!==e.type&&"textarea"!==e.type&&(n="onchange");const i=e.attributes[n];e.attributes[n]=n=>{const{event:a,value:l}=n;"checked"==r?t[e.attributes.bind]=a.target[r]:!0===t[e.attributes.bind]||!1===t[e.attributes.bind]?t[e.attributes.bind]=a?"true"==a.target[r]:l:"number"==typeof t[e.attributes.bind]?t[e.attributes.bind]=parseFloat(a?a.target[r]:l)||0:t[e.attributes.bind]=a?a.target[r]:l,g.update(),void 0!==i&&setTimeout(()=>{i({...e.attributes,...n})},0)}}}function anchorableNode(e){if(function isAnchorable(e){return"a"===e.type&&e.attributes.href&&e.attributes.href.startsWith("/")&&!e.attributes.target}(e)){const t=e.attributes.onclick;e.attributes.onclick=({event:n})=>{n.preventDefault(),m.url=e.attributes.href,void 0!==t&&setTimeout(()=>{t({...e.attributes,event:n})},0)}}}function anchorableElement(e){const t=e.querySelectorAll('a[href^="/"]:not([target])');for(const e of t)e.onclick=t=>{t.preventDefault(),m.url=e.href}}function parameterizableNode_anchorableNode(e,t,n){if(function isParameterizable(e){return e&&e.attributes&&(e.attributes.params||e.attributes.path)}(e)){let r;if(e.attributes.params){r={};for(const t in e.attributes.params)r[t]=serializeParam(e.attributes.params[t])}else r=n;const i=serializeSearch(r),a=e.attributes.path||t.path;e.attributes.href=a+(i?"?":"")+i,delete e.attributes.path,delete e.attributes.params}}function objectEvent(e){for(const t in e.attributes)if(t.startsWith("on")&&"object"==typeof e.attributes[t]){const n=e.attributes.source,r=e.attributes[t];e.attributes[t]=function(){for(const e in r)n[e]=r[e]}.bind(n)}}function render(e,t){if(routableNode(e,t),isFalse(e))return document.createComment("");if(objectEvent(e),bindableNode(e),isStatic(e)){const n=(e.type.render||e.type).call(e.type,{...b,...e.attributes});return e.children=[n],render(e.children[0],[...t,0])}if(isFunction(e)){const n=e.type(e.attributes);return e.children=[n],render(e.children[0],[...t,0])}if(isClass(e)){const n=e.attributes.key||generateKey([0,...t]),r=new e.type,i=window.instances[n];if(i){for(const e in i)r[e]=i[e];delete window.instances[n],r._self.initiated=!0,r._self.prerendered=!0}r._events={},r._attributes=e.attributes,g.instances[n]=r;const a=generateContext(e.attributes);r._context=a,i||(g.initiationQueue.push(r),r.prepare&&r.prepare());const l=r.render();return e.children=[l],g.renewalQueue.push(r),r._self.element=render(e.children[0],[...t,0]),g.hydrationQueue.push(r),r._self.element}if(isText(e))return document.createTextNode(e);let n,r=g.nextVirtualDom,i=!1;for(const e of t){if(!r.children)break;if(r=r.children[e],!r)break;if("svg"===r.type){i=!0;break}}n=i?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),parameterizableNode_anchorableNode(e,m,c),anchorableNode(e);for(let r in e.attributes)if("html"===r)n.innerHTML=e.attributes[r],anchorableElement(n);else if(r.startsWith("on")){const i=r.replace("on",""),a=generateKey(t)+"."+i;g.events[a]=t=>{!0!==e.attributes.default&&t.preventDefault(),e.attributes[r]({...e.attributes,event:t})},n.addEventListener(i,g.events[a])}else"function"!=typeof e.attributes[r]&&"object"!=typeof e.attributes[r]&&("value"!=r&&!0===e.attributes[r]?n.setAttribute(r,""):("value"==r||!1!==e.attributes[r]&&null!==e.attributes[r]&&void 0!==e.attributes[r])&&n.setAttribute(r,e.attributes[r]));if(!e.attributes.html){for(let r=0;r<e.children.length;r++){const i="Fragment"===e.type?t:[...t,r],a=render(e.children[r],i);n.appendChild(a)}"select"==e.type&&(n.value=e.attributes.value)}return n}function rerender(e,t,n){if(!g.hydrated)for(const t of e.childNodes)t.tagName&&"textarea"==t.tagName.toLowerCase()&&0==t.childNodes.length&&t.appendChild(document.createTextNode("")),8===t.COMMENT_NODE&&"#"===t.textContent&&e.removeChild(t);const r=t[t.length-1];let i=g.virtualDom,a=g.nextVirtualDom;for(const e of n)i=i.children[e],a=a.children[e];const l=e.childNodes[r];if(!isFalse(i)||!isFalse(a)){if((isFalse(i)||isFalse(a))&&i!=a){const t=render(a,n);return e.replaceChild(t,l)}if("Fragment"!==a.type){if(objectEvent(a),bindableNode(a),isStatic(a)){const r=(a.type.render||a.type).call(a.type,{...b,...a.attributes});return a.children=[r],rerender(e,t,[...n,0])}if(isFunction(a)){const r=a.type(a.attributes);return a.children=[r],rerender(e,t,[...n,0])}if(isClass(i)&&i.type===a.type){const r=a.attributes.key||generateKey([0,...n]);let s=null;if(m._changed){if(m._changed){let e=!1;if(a._params)for(const t in a._params)i._params&&i._params[t]!==a._params[t]&&(e=!0);e||(s=g.instances[r])}}else s=g.instances[r];const o=generateContext(a.attributes);if(s)s._context=o,s.update&&s.update();else{s=new a.type;const e=window.instances[r];if(e){for(const t in e)s[t]=e[t];delete window.instances[r],s._self.initiated=!0,s._self.prerendered=!0}s._context=o,s._events={},g.instances[r]=s,e||(g.initiationQueue.push(s),s.prepare&&s.prepare()),g.hydrationQueue.push(s)}s._attributes=a.attributes,s._self.element=l,g.renewalQueue.push(s);const c=s.render();a.children=[c];const u=Math.max(i.children.length,a.children.length);for(let r=0;r<u;r++)rerender(e,t,[...n,r])}else if(i.type!==a.type){const t=render(a,n);e.replaceChild(t,l)}else if(isText(i)&&isText(a)){if(i!=a)return l.nodeValue=a}else if(i.type===a.type){parameterizableNode_anchorableNode(a,m,c),anchorableNode(a);const e=Object.keys({...i.attributes,...a.attributes});for(const t of e)if("html"===t)a.attributes[t]!==i.attributes[t]&&(l.innerHTML=a.attributes[t],anchorableElement(l));else if("checked"===t)a.attributes[t]!==l.value&&(l.checked=a.attributes[t]);else if("value"===t)a.attributes[t]!==l.value&&(l.value=a.attributes[t]);else if(t.startsWith("on")){const e=t.replace("on",""),r=generateKey(n)+"."+e;l.removeEventListener(e,g.events[r]),a.attributes[t]?(g.events[r]=e=>{!0!==a.attributes.default&&e.preventDefault(),a.attributes[t]({...a.attributes,event:e})},l.addEventListener(e,g.events[r])):delete g.events[r]}else"function"!=typeof a.attributes[t]&&"object"!=typeof a.attributes[t]&&(void 0===i.attributes[t]&&void 0!==a.attributes[t]?l.setAttribute(t,a.attributes[t]):void 0!==i.attributes[t]&&void 0===a.attributes[t]?l.removeAttribute(t):i.attributes[t]!==a.attributes[t]&&("value"!=t&&!1===a.attributes[t]||null===a.attributes[t]||void 0===a.attributes[t]?l.removeAttribute(t):"value"!=t&&!0===a.attributes[t]?l.setAttribute(t,""):l.setAttribute(t,a.attributes[t])));if(a.attributes.html)return;const r=Math.max(i.children.length,a.children.length);for(const e of a.children)routableNode(e,[...t,0]);if(a.children.length>i.children.length){for(let e=0;e<i.children.length;e++)rerender(l,[...t,e],[...n,e]);for(let e=i.children.length;e<a.children.length;e++){const t=render(a.children[e],[...n,e]);l.appendChild(t)}}else if(i.children.length>a.children.length){for(let e=0;e<a.children.length;e++)rerender(l,[...t,e],[...n,e]);for(let e=i.children.length-1;e>=a.children.length;e--)l.removeChild(l.childNodes[e])}else for(let e=r-1;e>-1;e--)rerender(l,[...t,e],[...n,e]);"textarea"==a.type&&(l.value=a.children.join("")),"select"==a.type&&(l.value=a.attributes.value)}}else{for(let e=Math.max(i.children.length,a.children.length)-1;e>-1;e--)rerender(l,t,[...n,e])}}}const y={initialized:!1,hydrated:!1,initializer:null,instances:{},initiationQueue:[],renewalQueue:[],hydrationQueue:[],virtualDom:{},selector:null,routes:{},events:{},renderQueue:null,update:function(){y.initialized&&(clearInterval(y.renderQueue),y.renderQueue=setTimeout(()=>{y.initialized=!1,y.routes={},y.initiationQueue=[],y.renewalQueue=[],y.hydrationQueue=[],y.nextVirtualDom=y.initializer(),rerender(y.selector,[0],[]),y.virtualDom=y.nextVirtualDom,y.nextVirtualDom=null,y.processLifecycleQueues()},16))},processLifecycleQueues:async function(){y.initialized||(y.initialized=!0,y.hydrated=!0);const e=y.initiationQueue,t=y.hydrationQueue;for(const t of e)t.initiate&&await t.initiate(),t._self.initiated=!0;e.length&&y.update();for(const e of t)e.hydrate&&await e.hydrate(),e._self.hydrated=!0;t.length&&y.update();for(const e in y.instances){const t=y.instances[e];y.renewalQueue.includes(t)||(t.terminate&&await t.terminate(),delete y.instances[e])}m._changed=!1}};var g=y;var x=new Proxy({},{set:(e,t,n)=>(e[t]=n,g.update(),!0),get:(e,t)=>e[t]||!1});var _={get(e,t){return void 0===e[t]&&!0===e.constructor[t]?async n=>{x.processing=!0,x[t]=!0;const r=`/api/${e.constructor.hash}/${t}.json`,i=await fetch(r,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n||{})}),a=await i.text();return x.processing=!1,delete x[t],deserialize(a).result}:"function"==typeof e[t]?n=>{const r=generateContext({...e._context,...n,self:e._self});return e[t](r)}:Reflect.get(...arguments)},set(e,t,n){const r=Reflect.set(...arguments);return t.startsWith("_")||g.update(),r}};const v={set(e,t,n){"title"===t&&(document.title=n);const r=Reflect.set(...arguments);return g.update(),r}},w=new Proxy({...window.page},v);delete window.page;var k=w;const N={...window.settings};delete window.settings,Object.freeze(N);var C=N;function client_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}b.page=k,b.router=m,b.network=x,b.settings=C;class client_Nullstack{static start(e){window.instances=deserialize(JSON.stringify(window.instances)),window.addEventListener("popstate",()=>{g.update()});for(const[e,t]of Object.entries(window.context))b[e]=t;b.params=c,Object.freeze(b.project),delete window.context,g.routes={},updateParams(m.url),g.currentInstance=null,g.initializer=()=>element_element(e),g.selector=document.querySelector("#application"),g.virtualDom=g.initializer(),b.environment=d,g.nextVirtualDom=g.initializer(),rerender(g.selector,[0],[]),g.virtualDom=g.nextVirtualDom,g.nextVirtualDom=null,g.processLifecycleQueues()}constructor(){client_defineProperty(this,"_self",{prerendered:!1,initiated:!1,hydrated:!1});const e=Object.getOwnPropertyNames(Object.getPrototypeOf(this)),t=new Proxy(this,_);for(const n of e)"constructor"!==n&&"function"==typeof this[n]&&(this[n]=this[n].bind(t));return t}render(){return!1}}client_defineProperty(client_Nullstack,"element",element_element);var S=client_Nullstack;class Documentation_Documentation extends S{prepare({project:e,page:t}){t.title=e.name+" - Documentação",t.description=""}renderLink({title:e}){const t="/"+e.toLowerCase().split(" ").join("-");return S.element("a",{href:t,class:"xl x12 p3y bcm2b ci1h"}," ",e," ")}renderTopic({title:e,description:t,children:n}){return S.element("div",{class:"x12"},S.element("h2",{class:"x12 sm-f8 md+f8 m2b"}," ",e," "),S.element("p",{class:"x12 f4"}," ",t," "),S.element("nav",{class:"x12 m6y"}," ",n," "))}render(){const e=this.renderLink,t=this.renderTopic;return S.element("section",{class:"x sm-p2x p20y"},S.element("h1",{class:"x12 sm-f8 md+f12 m2b"}," Nullstack Documentation "),S.element("p",{class:"x12 f4"}," Nullstack features have been extracted from real life projects with convenience and consistency in mind "),S.element(t,{title:"Core Concepts",description:"Start your journey in Nullstack with these basic concepts"},S.element(e,{title:"Getting started"}),S.element(e,{title:"Renderable components"}),S.element(e,{title:"Stateful components"}),S.element(e,{title:"Full-stack lifecycle"}),S.element(e,{title:"Server functions"}),S.element(e,{title:"Context and attributes"}),S.element(e,{title:"Routes"}),S.element(e,{title:"Two way bindings"})),S.element(t,{title:"Advanced concepts",description:"These are concepts that you will most likely learn as you need in your projects"},S.element(e,{title:"Application Startup"}),S.element(e,{title:"Context environment"}),S.element(e,{title:"Context network"}),S.element(e,{title:"Context page"}),S.element(e,{title:"Context project"}),S.element(e,{title:"Context router and params"}),S.element(e,{title:"Context secrets"}),S.element(e,{title:"Context self"}),S.element(e,{title:"Context server request response"}),S.element(e,{title:"Context settings"}),S.element(e,{title:"App manifest"}),S.element(e,{title:"Instance Key"}),S.element(e,{title:"Styles"}),S.element(e,{title:"NJS file extension"}),S.element(e,{title:"Server side rendering"}),S.element(e,{title:"Static site generation"})),S.element(t,{title:"Examples",description:"The best way to learn Nullstack is by reading some code"},S.element(e,{title:"How to deploy a Nullstack application"}),S.element(e,{title:"How to use MongoDB with Nullstack"}),S.element(e,{title:"How to use Google Analytics with Nullstack"}),S.element(e,{title:"How to use Facebook Pixel with Nullstack"}),S.element(e,{title:"How to create an API with Nullstack"})))}}var P=Documentation_Documentation;function Article_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Documentation_Documentation.hash="04f5c67dea680397c425ffcd471e7471";class Article_Component extends S{constructor(...e){super(...e),Article_defineProperty(this,"title",""),Article_defineProperty(this,"html","")}async initiate({project:e,page:t,params:n}){const r=await this.getArticleByKey({key:n.slug});Object.assign(this,r),t.title=`${e.name} - ${r.title}`,t.description=r.description}whitelist(){return S.element("article",null,S.element("code",{class:"language-jsx language-sh"}),S.element("blockquote",null),S.element("em",null))}render(){return S.element("section",{class:"x p20y"},S.element("h1",{class:"x12 sm-f8 md+f8 m6b"}," ",this.title," "),S.element("article",{html:this.html}))}}Article_defineProperty(Article_Component,"getArticleByKey",!0);var j=Article_Component;Article_Component.hash="7d4f5cb381662a72b5a25eee0b4d8ae0";class Header_Header extends S{static renderLink({title:e,href:t,target:n}){return S.element("a",{href:t,target:n,class:"p2 ci1h"}," ",e," ")}static render(){const e=this.renderLink;return S.element("header",{class:"x12 ftl bgm1 s1 sm-off"},S.element("div",{class:"x xsb yy p4y"},S.element("a",{href:"/",title:"Nullstack"},S.element("img",{src:"/nullstack.png",style:"height: 30px"})),S.element("nav",{class:"yy"},S.element(e,{title:"About",href:"/"}),S.element(e,{title:"Documentation",href:"/documentation"}),S.element(e,{title:"Components",href:"/components"}),S.element(e,{title:"Source",href:"https://github.com/nullstack/nullstack",target:"_blank"})),S.element("a",{href:"/getting-started",class:"bci1 bgi1 bgm1h cm1 ci1h p4x p2y"},"Get Started")))}}var A=Header_Header;Header_Header.hash="9266bd51733910757a7b772830f5d18c";class Footer_Footer extends S{static render(){const e=(new Date).getFullYear();return S.element("footer",{class:"xx bgm2 p10y"},S.element("img",{src:"/nullstack.png"}),S.element("p",{class:"x12 m6t"}," © ",e," Nullstack "))}}var D=Footer_Footer;Footer_Footer.hash="c3c76be83e2a45fc0986f15762f4e734";n(1),n(2);function Snippet_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Snippet_Snippet extends S{constructor(...e){super(...e),Snippet_defineProperty(this,"html","")}async initiate({key:e}){this.html=await this.getSnippetByKey({key:e})}whitelist(){return S.element("div",{class:"\r token comment prolog doctype cdata punctuation selector\r tag property boolean number constant symbol attr-name\r deleted string char attr-value builtin inserted\r operator entity url language-css style atrule\r keyword function regex important variable bold italic\r "})}render(){return S.element("pre",{class:"bgm3 p4"},S.element("code",{html:this.html}))}}Snippet_defineProperty(Snippet_Snippet,"getSnippetByKey",!0);var O=Snippet_Snippet;Snippet_Snippet.hash="44da7b36ad27c2e1061d5defd0d77e7c";var stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return S.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&S.element("title",null,r),"spin"===a&&S.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),S.element("path",{d:"M501.9984,279.0708a16.0691,16.0691,0,0,1-13.4278,15.8986l-35.9968,5.9988A17.6011,17.6011,0,0,0,438.58,313.2018a190.8568,190.8568,0,0,1-13.0446,31.4643A17.5918,17.5918,0,0,0,426.82,363.09l21.2127,29.7891a16.0776,16.0776,0,0,1-1.7514,20.7457l-32.6594,32.6583a16.0432,16.0432,0,0,1-20.72,1.77l-29.6617-21.2007a17.59,17.59,0,0,0-18.5045-1.2931,192.38,192.38,0,0,1-31.5078,13.0457,17.6007,17.6007,0,0,0-12.1433,13.9121l-6.1141,36.0359a16.07,16.07,0,0,1-15.903,13.4484H232.82a16.0653,16.0653,0,0,1-15.8975-13.4277l-6-35.9967a17.6049,17.6049,0,0,0-12.1182-13.9633,191.0666,191.0666,0,0,1-30.5031-12.54,17.62,17.62,0,0,0-18.399,1.2888L119.709,448.852a15.4291,15.4291,0,0,1-9.2011,2.9509A15.7635,15.7635,0,0,1,99.1461,447.05l-32.7182-32.715a15.9459,15.9459,0,0,1-1.7394-20.626l21.0854-29.3308a17.5751,17.5751,0,0,0,1.255-18.6569,186.7013,186.7013,0,0,1-13.2112-31.3456A17.637,17.637,0,0,0,59.935,302.2907l-36.49-6.2208A16.0752,16.0752,0,0,1,10,280.168V234.0254a16.0757,16.0757,0,0,1,13.4571-15.902l35.5549-6a17.5854,17.5854,0,0,0,13.9763-12.2794,188.24,188.24,0,0,1,12.828-31.5448,17.6135,17.6135,0,0,0-1.2877-18.3989L63.09,119.78A16.0645,16.0645,0,0,1,64.82,99.0512l32.77-32.6584.1187-.124a15.6331,15.6331,0,0,1,11.2594-4.6469,15.8133,15.8133,0,0,1,9.3122,2.951l29.457,21.2039a17.5634,17.5634,0,0,0,18.6536,1.2507,186.6559,186.6559,0,0,1,31.3326-13.2068,17.6346,17.6346,0,0,0,12.0921-13.887l6.2252-36.49A16.0692,16.0692,0,0,1,231.9433,9.9987h46.1426a16.0748,16.0748,0,0,1,15.902,13.4571l6,35.5678a17.5926,17.5926,0,0,0,12.2968,13.9721,189.9907,189.9907,0,0,1,32.6888,13.4528,17.612,17.612,0,0,0,18.45-1.2714L393.28,63.9132a15.41,15.41,0,0,1,9.2011-2.9509,15.7748,15.7748,0,0,1,11.3618,4.7546l32.7138,32.7138a15.95,15.95,0,0,1,1.7144,20.6608L427.05,148.7826a17.6069,17.6069,0,0,0-1.2714,18.48,192.2247,192.2247,0,0,1,13.049,31.511,17.6,17.6,0,0,0,13.9121,12.139l36.0055,6.11.03.0043A15.6605,15.6605,0,0,1,501.9984,232.7Z",transform:"translate(0 0.0013)",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),S.element("circle",{cx:"256",cy:"256.0013",r:"101",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}))},refresh_stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return S.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&S.element("title",null,r),"spin"===a&&S.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),S.element("path",{d:"M79.9776,271.6767l-57.6-8.2342a14.4244,14.4244,0,0,1-12.373-14.639C13.3548,114.8959,120.9539,10,254.9739,10A243.4274,243.4274,0,0,1,381.0547,45.1482L410.7419,15.461a14.428,14.428,0,0,1,24.4645,8.15l20.3825,142.6906a14.4322,14.4322,0,0,1-16.3148,16.3148L296.5835,162.2336a14.43,14.43,0,0,1-8.15-24.4645l28.6167-28.6167a158.6017,158.6017,0,0,0-62.0766-12.668c-88.3543,0-159.7347,72.3451-158.54,160.7225A14.4326,14.4326,0,0,1,79.9776,271.6767Z",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":n||20}),S.element("path",{d:"M257.0534,502a244.0034,244.0034,0,0,1-125.9962-34.8244l-30.405,30.3907a14.4294,14.4294,0,0,1-24.4645-8.15L55.8062,346.725A14.4479,14.4479,0,0,1,72.121,330.41l142.6905,20.3969a14.43,14.43,0,0,1,8.15,24.4645l-27.7019,27.7019a158.754,158.754,0,0,0,61.7941,12.5421c87.4271,0,158.5547-71.1276,158.5547-158.5547,0-10.0821,9.0193-16.4541,16.4551-15.5124l57.5572,8.2208a14.4368,14.4368,0,0,1,12.3731,14.71C498.01,397.6249,390.4258,502,257.0534,502Z",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":n||20}))},globe_stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return S.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&S.element("title",null,r),"spin"===a&&S.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),S.element("circle",{cx:"256",cy:"256",r:"246",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),S.element("path",{d:"M437.0322,422.545c-37.8083-31.887-104.408-53.058-180.2668-53.058-76.4345,0-143.465,21.495-181.1186,53.7873",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),S.element("path",{d:"M77.0141,87.2566c37.8977,31.6422,104.241,52.6167,179.7513,52.6167,74.9415,0,140.8449-20.663,178.8813-51.9068",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),S.element("ellipse",{cx:"258.3311",cy:"255.7857",rx:"125.7359",ry:"245.7857",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),S.element("line",{x1:"10",y1:"256",x2:"502",y2:"256",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),S.element("line",{x1:"258.3311",y1:"10",x2:"258.3311",y2:"501.5714",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}))};class Home_Component extends S{prepare({project:e,page:t}){t.title=e.name+" - Full-stack Javascript Components"}renderHero(){return S.element("section",{class:"x xx sm-p2x p20y"},S.element("h1",{class:"x12 sm-f8 md+f12"}," Full-stack Javascript Components"),S.element("div",{class:"xx x8 m12b",style:"background-image: linear-gradient(0deg, #fff 49%, #eee 50%, #fff 51%);"},S.element("p",{class:"bgm1 f6 p2"}," for one-dev armies ")),S.element("div",{style:"letter-spacing: 1.2px; line-height: 120%;"},S.element("p",{class:"x12 f4"}," Nullstack is a full-stack framework for building ",S.element("strong",null,"progressive web applications"),". "),S.element("p",{class:"x12 f4"}," It connects a ",S.element("strong",null,"stateful UI")," layer to specialized ",S.element("strong",null,"microservices")," in the same component using ",S.element("strong",null,"vanilla javascript.")," "),S.element("p",{class:"x12 f4 m4t"}," Focus on solving your business logic instead of writing glue code. ")))}renderFeature({title:e,key:t,link:n}){return S.element("div",{class:"sm-x12 md+x6 p1"},!!e&&S.element("div",{class:"xsb bgm2 p4"},S.element("h3",{class:"ff2 fw3 f4"},e),S.element("a",{href:n,class:"ci1"},"documentation")),S.element(O,{key:t}))}renderDemo(){const e=this.renderFeature;return S.element("section",{class:"x xl sm-p2x"},S.element(e,{key:"Application"}),S.element(e,{key:"TaskList"}))}renderAbout(){return S.element("section",{class:"x xx sm-p2x p20y"},S.element("h2",{class:"x12 sm-f8 md+f12 m2b"}," Nullstack is your Application "),S.element("p",{class:"x12 f4"}," Nullstack is not another part of your stack, it is your stack "),S.element("p",{class:"x12 f4"}," Your application can be exported from back to front as a component and mounted in another application "))}renderStep({title:e,description:t,link:n,icon:r}){return S.element("div",{class:"md+x4 p1"},S.element("div",{class:"xx bgm2 p8y p4x"},S.element(r,{height:40,class:"ci1 m4b"}),S.element("h3",{class:"x12 f6"}," ",e," "),S.element("p",{class:"x12 f4 m4y"}," ",t," "),S.element("a",{href:n,class:"ci1"},"documentation")))}renderCycle(){const e=this.renderStep;return S.element("section",{class:"x xx sm-p2x bcm2y p10y"},S.element(e,{icon:stroke,title:"Server Side Rendering",description:"Nullstack prerenders your route in a single request using local functions on the first visit and generates SEO optimized HTML",link:"/server-side-rendering"}),S.element(e,{icon:refresh_stroke,title:"Single Page Application",description:"Subsequent requests will fetch JSON from an automatically generated API, update the application state, and rerender the page",link:"/fullstack-lifecycle"}),S.element(e,{icon:globe_stroke,title:"Static Site Generation",description:"Optionally you can use Nullstack to generate static websites for lightning-fast static applications using the full power of Nullstack",link:"/static-site-generation"}))}renderProductivity(){return S.element("section",{class:"x xx sm-p2x p20y"},S.element("h2",{class:"x12 sm-f8 md+f12 m2b"}," Productivity is in the Details "),S.element("p",{class:"x12 f4"}," Nullstack features have been extracted from real life projects with convenience and consistency in mind "))}renderFeatures(){const e=this.renderFeature;return S.element("section",{class:"x xl sm-p2x"},S.element(e,{title:"Stateful Components",key:"Stateful",link:"/stateful-components"}),S.element(e,{title:"Two Way Binding",key:"Binding",link:"/two-way-bindings"}),S.element(e,{title:"Built-in Routes",key:"Routes",link:"/routes"}),S.element(e,{title:"Full-stack Lifecycle",key:"Lifecycle",link:"/full-stack-lifecycle"}))}renderEcosystem(){return S.element("section",{class:"x xx sm-p2x p20y"},S.element("p",{class:"x12 f4 fw7"}," Don't be afraid of testing a new ecosystem, because it's not new at all "),S.element("p",{class:"x12 f4"},' There is no "Nullstack Way" of doing things, it is just javascript and you can use any isomorphic vanilla package made throughout history '),S.element("a",{href:"/documentation",class:"ci1 bci1 cm1h bgi1h m6t p2y p4x"}," Read the Documentation "))}render(){const e=this.renderHero,t=(this.renderFeature,this.renderDemo),n=this.renderAbout,r=this.renderCycle,i=this.renderProductivity,a=this.renderFeatures,l=this.renderEcosystem;return S.element("div",null,S.element(e,null),S.element(t,null),S.element(n,null),S.element(r,null),S.element(i,null),S.element(a,null),S.element(l,null))}}var F=Home_Component;Home_Component.hash="d181fdde17898c81f5633a047f43d812";n(3);class Application_Application extends S{prepare({page:e}){e.locale="en"}render(){return S.element("main",null,S.element(A,null),S.element(F,{route:"/"}),S.element(P,{route:"/documentation"}),S.element("div",{route:"/examples"},"examples"),S.element("div",{route:"/components"},"components"),S.element(j,{route:"/:slug"}),S.element(D,null))}}!function Application_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(Application_Application,"start",!0);var T=Application_Application;Application_Application.hash="5e4b36e2af7b857bdbd162d3e428aa11",S.start(T)}]);