(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[351],{2993:function(e){"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var c,l,u,s=t(e),p=t(i);if(s&&p){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(s!=p)return!1;var f=e instanceof Date,d=i instanceof Date;if(f!=d)return!1;if(f&&d)return e.getTime()==i.getTime();var m=e instanceof RegExp,T=i instanceof RegExp;if(m!=T)return!1;if(m&&T)return e.toString()==i.toString();var E=n(e);if((l=E.length)!==n(i).length)return!1;for(c=l;0!=c--;)if(!r.call(i,E[c]))return!1;if(o&&e instanceof Element&&i instanceof Element)return e===i;for(c=l;0!=c--;)if(!("_owner"===(u=E[c])&&e.$$typeof||a(e[u],i[u])))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(e,t,n){t.ql=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=p(n(7294)),i=p(n(5697)),c=p(n(4839)),l=p(n(2993)),u=n(1640),s=n(286);function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,h,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),g=(T=A,h=E=function(e){function t(){return d(this,t),m(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=f(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(a.default.Component),E.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);g.renderStatic=g.rewind,t.ql=g},286:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(e,t,n){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=l(n(7294)),i=l(n(6494)),c=n(286);function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},T=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),l=0;l<a.length;l++){var u=a[l],s=(0,i.default)({},o[u],r[u]);o[u]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:n.g.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:n.g.cancelAnimationFrame||A,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,p=e.styleTags,f=e.title,d=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,o),x(f,d);var m={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,a),metaTags:P(c.TAG_NAMES.META,i),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,s),styleTags:P(c.TAG_NAMES.STYLE,p)},T={},E={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=m[e].oldTags)})),t&&t(),u(e,T,E)},_=function(e){return Array.isArray(e)?e.join(""):e},x=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var p=a.indexOf(u);-1!==p&&a.splice(p,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=O(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),a=_(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&y(v),e.defer?v=g((function(){S(e,(function(){v=null}))})):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,p=e.title,f=void 0===p?"":p,d=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,r),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,o,r),link:M(c.TAG_NAMES.LINK,a,r),meta:M(c.TAG_NAMES.META,i,r),noscript:M(c.TAG_NAMES.NOSCRIPT,l,r),script:M(c.TAG_NAMES.SCRIPT,u,r),style:M(c.TAG_NAMES.STYLE,s,r),title:M(c.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=b},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var a=e.attr,l=e.title,u=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(7294),a=r(o),i=r(n(6872));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function p(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),p()},c.componentDidUpdate=function(){p()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),p()},c.render=function(){return a.createElement(r,this.props)},o}(o.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",l),f}}},4153:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),o=n(9692),a=n(5444),i=n(785),c=o.default.nav.withConfig({displayName:"NavModuleStyles",componentId:"sc-1h1i11r-0"})([".nav{position:fixed;top:0;left:0;width:100%;z-index:100;padding:20px var(--borderSpacing) 0 var(--borderSpacing);@media (min-width:1024px){padding-top:50px;}@media (min-width:1440px){padding-top:70px;}}.hamburger{background-color:transparent;border:none;width:30px;height:30px;padding:0;cursor:pointer;outline:none;&:focus{border:none;outline:none;}.bar{display:block;background-color:#fff;height:2px;border-radius:2px;&:nth-of-type(2){margin-top:8px;margin-bottom:8px;}}}.logo{font-weight:700;font-size:20px;letter-spacing:-0.5px;a{color:#fff;text-decoration:none;transition:color 0.3s ease;}@media (min-width:1024px){font-size:25px;}span{color:var(--primary);}&:hover,&:focus{a{color:var(--primary);}}}.container{display:flex;align-items:center;justify-content:space-between;height:100%;}.menu{background-color:#000;width:var(--menuWidth);transform:translateX(calc(var(--menuWidth) * -1));height:100%;top:0;bottom:0;left:0;position:fixed;z-index:99;padding:30px var(--borderSpacing);display:flex;align-items:center;ul{list-style:none;padding:0;margin:0;}li{text-transform:capitalize;letter-spacing:-0.5px;font-size:28px;@media (min-width:375px){font-size:36px;}@media (min-width:414px){font-size:40px;}a{color:#fff;font-weight:700;text-decoration:none;}span{color:var(--primary);}}}"]),l=n(735),u=[{path:"/",text:"home"},{path:"/products",text:"products"},{path:"/blogs",text:"blogs"},{path:"/contact",text:"contact"}],s={open:{y:[0,10,10,10,10],rotate:[0,0,0,45,45]},closed:{y:[10,10,0,0,0]}},p={open:{opacity:0},closed:{opacity:1}},f={open:{y:[0,-10,-10,-10,-10],rotate:[0,0,0,-45,-45]},closed:{y:[-10,-10,0,0,0]}},d={open:{x:0},closed:{x:"calc(var(--menuWidth) * -1)"}},m=function(){var e=(0,r.useContext)(i.Z),t=e[0],n=e[1],o=function(){n((function(e){return!e}))},m=(0,a.useStaticQuery)("2060664360").site.siteMetadata.title;return r.createElement(c,null,r.createElement("div",{className:"nav"},r.createElement("div",{className:"container"},r.createElement(l.E.button,{initial:"closed",animate:t?"open":"closed",onClick:o,"aria-label":t?"Close Menu":"Open Menu",className:"hamburger"+(t?" open":"")},r.createElement(l.E.span,{className:"bar",variants:s}),r.createElement(l.E.span,{className:"bar",variants:p}),r.createElement(l.E.span,{className:"bar",variants:f})),m&&r.createElement("div",{className:"logo"},r.createElement(a.Link,{to:"/"},m,r.createElement("span",null,"."))))),r.createElement(l.E.div,{initial:"closed",animate:t?"open":"closed",variants:d,transition:{type:"ease",stiffness:50,velocity:50},className:"menu"},r.createElement("ul",null,u.map((function(e,t){return r.createElement("li",{onClick:o,key:t},r.createElement(a.Link,{to:e.path,activeClassName:"menu__item--active"},e.text,r.createElement("span",null,".")))})))))},T=n(8771),E=n(3201),h=[{path:"/",text:"home"},{path:"/products",text:"products"},{path:"/blog",text:"blog"},{path:"/contact",text:"contact"}],A=[{path:"www.facebook.com",icon:r.createElement(E.R9i,null)},{path:"www.twitter.com",icon:r.createElement(E.N1v,null)},{path:"www.instagram.com",icon:r.createElement(E.Zf_,null)},{path:"www.linkedin.com",icon:r.createElement(E.ltd,null)}],g=o.default.footer.withConfig({displayName:"FooterStyles",componentId:"sc-1eh4ra0-0"})(["background-color:#000;padding:var(--sectionPadding) 25px 40px 25px;.container{display:flex;flex-direction:column;@media (min-width:768px){align-items:center;}}.footer__menu{ul{list-style:none;padding:0;margin:0 0 20px 0;@media (min-width:768px){display:flex;}}li{margin-top:5px;margin-bottom:5px;@media (min-width:768px){margin-left:6px;margin-right:6px;}a{color:#fff;text-decoration:none;text-transform:capitalize;font-weight:700;font-size:20px;transition:color 0.3s ease;@media (min-width:375px){font-size:22px;}span{color:var(--primary);}}&:hover,&:focus{a{color:var(--primary);}}}}.social__menu{margin-bottom:40px;ul{margin:0;padding:0;list-style:none;display:flex;li{font-size:25px;margin-right:8px;@media (min-width:768px){margin-left:5px;margin-right:5px;}a{color:var(--primary);transition:color 0.3s ease;}&:hover,&:focus{a{color:#fff;}}}}}.copyright{font-size:13px;p{margin:0;a{color:#fff;font-weight:700;text-decoration:none;transition:color 0.3s ease;&:hover,&:focus{color:var(--primary);}span{color:var(--primary);}}}}"]),y=function(){return r.createElement(g,null,r.createElement("div",{className:"container"},r.createElement("div",{className:"footer__menu"},r.createElement("ul",null,h.map((function(e,t){return r.createElement("li",{key:t},r.createElement(a.Link,{to:e.path,activeClassName:"menu__item--active"},e.text,r.createElement("span",null,".")))})))),r.createElement("div",{className:"social__menu"},r.createElement("ul",null,A.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.path,target:"_blank",rel:"nofollow noreferrer noopener"},e.icon))})))),r.createElement("div",{className:"copyright"},r.createElement("p",null,"Designed & developed by"," ",r.createElement("a",{href:"https://www.morganbaker.dev",target:"_blank",rel:"noreferrer"},"Morgan Baker"),r.createElement("span",null,".")))))},b=(0,o.createGlobalStyle)([":root{--background:#000;--primary:#ffc400;--bannerTitle:34px;--bannerSubTitle:20px;--borderSpacing:30px;--menuWidth:100vw;--sectionPadding:70px;--h2:20px;--p:15px;--blockquote:20px;@media(min-width:375px){--bannerTitle:42px;--bannerSubTitle:22px;--sectionPadding:80px;--h2:22px;--p:16px;}@media(min-width:414px){--bannerTitle:50px;--bannerSubTitle:27px;--h2:27px;--p:18px;}@media(min-width:768px){--bannerTitle:60px;--bannerSubTitle:30px;--h2:30px;--p:19px;--blockquote:26px;}@media(min-width:1024px){--borderSpacing:75px;--h2:36px;--p:20px;}@media(min-width:1152px){--bannerTitle:50px;--bannerSubTitle:26px;--h2:26px;--p:18px;}@media(min-width:1440px){--borderSpacing:105px;--h2:28px;--p:19px;}}*{box-sizing:border-box;scroll-behavior:smooth;}body{font-family:'Heebo',sans-serif;margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--background);color:#fff;overflow-x:hidden;font-size:var(--p);}h1,h2{margin-bottom:1rem;line-height:1.25em;@media(min-width:1200px){margin-bottom:1.5rem;}}h1{margin-bottom:1rem;font-size:var(--h1);font-weight:900;}h2{font-size:var(--h2);font-weight:700;}a{color:var(--primary);&:hover,&:focus{text-decoration:none;}}blockquote{font-size:var(--blockquote);font-family:'Times New Roman',Times,serif;font-style:italic;margin:var(--borderSpacing);}a.btn,button.btn{color:#fff;background-color:transparent;font-family:'Heebo',sans-serif;border:0;text-decoration:none;padding:0;transition:var(--transition) color;text-transform:capitalize;font-size:var(--menuItem);font-weight:900;letter-spacing:-0.5px;position:relative;padding-bottom:10px;align-self:flex-start;&::after{content:\"\";display:block;position:absolute;height:3px;left:0;right:0;bottom:8px;background-color:var(--primary);}&:focus{color:var(--primary);}@media(hover:hover){cursor:pointer;}}@media (min-width:1200px){font-size:var(--menuItem);}@media (hover:hover){a:hover{color:var(--primary);}}.container{margin-left:auto;margin-right:auto;}.section-padding{padding:var(--paddingStd) var(--paddingBorder);}.section-padding--large{padding:var(--paddingLarge) var(--paddingBorder);}"]),v=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(b,null),r.createElement(l.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.75}},r.createElement(m,null),r.createElement(T.Z,null,t,r.createElement(y,null))))}},2248:function(e,t,n){"use strict";var r=n(7294),o=n(7701),a=n(5444);t.Z=function(e){var t=e.title,n=e.description,i=(0,a.useStaticQuery)("2870553852").site.siteMetadata,c=i.siteDesc,l=i.siteTitle,u=i.siteUrl,s=i.image,p=i.twitterUsername;return r.createElement(o.ql,{htmlAttribute:{lang:"en"},title:t+" | "+l},r.createElement("meta",{name:"description",content:n||c}),r.createElement("meta",{name:"image",content:s}),r.createElement("meta",{property:"og:url",content:u}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:image",content:""+u+s}),r.createElement("meta",{property:"og:image",content:"400"}),r.createElement("meta",{property:"og:image:height",content:"300"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:p}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:c}),r.createElement("meta",{name:"twitter:image",content:""+u+s}))}}}]);
//# sourceMappingURL=commons-11d1b6d288799b8ea5cd.js.map