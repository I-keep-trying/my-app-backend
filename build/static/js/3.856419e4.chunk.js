/*! For license information please see 3.856419e4.chunk.js.LICENSE.txt */
(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[3],{568:function(t,e,n){t.exports=n(674)()},570:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"===typeof t||"number"===typeof t)o+=t;else if("object"===typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},572:function(t,e,n){"use strict";var r=n(630),o=n(621);var i=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0},a=n(606),s=n(631);var c=function(t,e){return e.length<2?t:Object(a.a)(t,Object(s.a)(e,0,-1))},u=n(590);var l=function(t,e,n){e=Object(o.a)(e,t);var a=null==(t=c(t,e))?t:t[Object(u.a)(i(e))];return null==a?void 0:Object(r.a)(a,t,n)},f=n(652),p=Object(f.a)(l);e.a=p},573:function(t,e,n){"use strict";var r=Array.isArray;e.a=r},574:function(t,e,n){"use strict";e.a=function(t){return null==t}},578:function(t,e,n){"use strict";e.a=function(t){return null!=t&&"object"==typeof t}},579:function(t,e,n){"use strict";var r=n(628),o="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||o||Function("return this")();e.a=i},580:function(t,e,n){"use strict";var r=n(593),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r.a?r.a.toStringTag:void 0;var c=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o},u=Object.prototype.toString;var l=function(t){return u.call(t)},f=r.a?r.a.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?c(t):l(t)}},584:function(t,e,n){"use strict";var r=n(602),o=n(579).a["__core-js_shared__"],i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var a=function(t){return!!i&&i in t},s=n(589),c=n(629),u=/^\[object .+?Constructor\]$/,l=Function.prototype,f=Object.prototype,p=l.toString,h=f.hasOwnProperty,d=RegExp("^"+p.call(h).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var v=function(t){return!(!Object(s.a)(t)||a(t))&&(Object(r.a)(t)?d:u).test(Object(c.a)(t))};var y=function(t,e){return null==t?void 0:t[e]};e.a=function(t,e){var n=y(t,e);return v(n)?n:void 0}},589:function(t,e,n){"use strict";e.a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},590:function(t,e,n){"use strict";var r=n(595);e.a=function(t){if("string"==typeof t||Object(r.a)(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},593:function(t,e,n){"use strict";var r=n(579).a.Symbol;e.a=r},594:function(t,e,n){"use strict";e.a=function(t){return t}},595:function(t,e,n){"use strict";var r=n(580),o=n(578);e.a=function(t){return"symbol"==typeof t||Object(o.a)(t)&&"[object Symbol]"==Object(r.a)(t)}},596:function(t,e,n){"use strict";e.a=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},599:function(t,e,n){"use strict";var r=function(){this.__data__=[],this.size=0},o=n(605);var i=function(t,e){for(var n=t.length;n--;)if(Object(o.a)(t[n][0],e))return n;return-1},a=Array.prototype.splice;var s=function(t){var e=this.__data__,n=i(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)};var c=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]};var u=function(t){return i(this.__data__,t)>-1};var l=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function f(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}f.prototype.clear=r,f.prototype.delete=s,f.prototype.get=c,f.prototype.has=u,f.prototype.set=l;e.a=f},601:function(t,e,n){"use strict";var r=n(593),o=n(596),i=n(573),a=n(595),s=r.a?r.a.prototype:void 0,c=s?s.toString:void 0;var u=function t(e){if("string"==typeof e)return e;if(Object(i.a)(e))return Object(o.a)(e,t)+"";if(Object(a.a)(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};e.a=function(t){return null==t?"":u(t)}},602:function(t,e,n){"use strict";var r=n(580),o=n(589);e.a=function(t){if(!Object(o.a)(t))return!1;var e=Object(r.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},603:function(t,e,n){"use strict";var r=n(573),o=n(595),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.a=function(t,e){if(Object(r.a)(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Object(o.a)(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},604:function(t,e,n){"use strict";var r=n(584),o=n(579),i=Object(r.a)(o.a,"Map");e.a=i},605:function(t,e,n){"use strict";e.a=function(t,e){return t===e||t!==t&&e!==e}},606:function(t,e,n){"use strict";var r=n(621),o=n(590);e.a=function(t,e){for(var n=0,i=(e=Object(r.a)(e,t)).length;null!=t&&n<i;)t=t[Object(o.a)(e[n++])];return n&&n==i?t:void 0}},619:function(t,e,n){"use strict";var r=n(584),o=Object(r.a)(Object,"create");var i=function(){this.__data__=o?o(null):{},this.size=0};var a=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},s=Object.prototype.hasOwnProperty;var c=function(t){var e=this.__data__;if(o){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return s.call(e,t)?e[t]:void 0},u=Object.prototype.hasOwnProperty;var l=function(t){var e=this.__data__;return o?void 0!==e[t]:u.call(e,t)};var f=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this};function p(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}p.prototype.clear=i,p.prototype.delete=a,p.prototype.get=c,p.prototype.has=l,p.prototype.set=f;var h=p,d=n(599),v=n(604);var y=function(){this.size=0,this.__data__={hash:new h,map:new(v.a||d.a),string:new h}};var b=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var g=function(t,e){var n=t.__data__;return b(e)?n["string"==typeof e?"string":"hash"]:n.map};var m=function(t){var e=g(this,t).delete(t);return this.size-=e?1:0,e};var O=function(t){return g(this,t).get(t)};var j=function(t){return g(this,t).has(t)};var _=function(t,e){var n=g(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function w(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}w.prototype.clear=y,w.prototype.delete=m,w.prototype.get=O,w.prototype.has=j,w.prototype.set=_;e.a=w},621:function(t,e,n){"use strict";var r=n(573),o=n(603),i=n(619);function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(a.Cache||i.a),n}a.Cache=i.a;var s=a;var c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,l=function(t){var e=s(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(c,(function(t,n,r,o){e.push(r?o.replace(u,"$1"):n||t)})),e})),f=n(601);e.a=function(t,e){return Object(r.a)(t)?t:Object(o.a)(t,e)?[t]:l(Object(f.a)(t))}},625:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t,e){"function"!==typeof t?null!==t&&"object"===typeof t&&(t.current=e):t(e)},o=function(t){return null!==t&&"object"===typeof t&&t.hasOwnProperty("current")}},626:function(t,e,n){"use strict";var r=n(627);e.a=r.instance},627:function(t,e,n){"use strict";var r;r=n(672),t.exports=r.default,t.exports.instance=r.instance},628:function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(166))},629:function(t,e,n){"use strict";var r=Function.prototype.toString;e.a=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},630:function(t,e,n){"use strict";e.a=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},631:function(t,e,n){"use strict";e.a=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i}},632:function(t,e,n){"use strict";var r=n(574),o="object"===typeof document&&null!==document,i="object"===typeof window&&null!==window&&window.self===window;e.a=function t(){return Object(r.a)(t.override)?o&&i:t.override}},633:function(t,e,n){"use strict";e.a=function(t,e){var n=t.handledProps,r=void 0===n?[]:n;return Object.keys(e).reduce((function(t,n){return"childKey"===n||-1===r.indexOf(n)&&(t[n]=e[n]),t}),{})}},634:function(t,e,n){"use strict";e.a=function(t,e,n){var r=t.defaultProps,o=void 0===r?{}:r;if(e.as&&e.as!==o.as)return e.as;if(n){var i=n();if(i)return i}return e.href?"a":o.as||"div"}},652:function(t,e,n){"use strict";var r=n(594),o=n(630),i=Math.max;var a=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,a=-1,s=i(r.length-e,0),c=Array(s);++a<s;)c[a]=r[e+a];a=-1;for(var u=Array(e+1);++a<e;)u[a]=r[a];return u[e]=n(c),Object(o.a)(t,this,u)}};var s=function(t){return function(){return t}},c=n(584),u=function(){try{var t=Object(c.a)(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),l=u?function(t,e){return u(t,"toString",{configurable:!0,enumerable:!1,value:s(e),writable:!0})}:r.a,f=Date.now;var p=function(t){var e=0,n=0;return function(){var r=f(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}},h=p(l);e.a=function(t,e){return h(a(t,e,r.a),t+"")}},672:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(673);n(568);var o=n(5);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var d=function(){function t(e){a(this,t),u(this,"handlers",void 0),this.handlers=e.slice(0)}return c(t,[{key:"addHandlers",value:function(e){for(var n=this.handlers.slice(0),r=e.length,o=0;o<r;o+=1)n.push(e[o]);return new t(n)}},{key:"dispatchEvent",value:function(t,e){var n=this.handlers.length-1;if(e){for(var r=n;r>=0;r-=1)this.handlers[r].called||(this.handlers[r].called=!0,this.handlers[r](t));for(var o=n;o>=0;o-=1)this.handlers[o].called=!1}else(0,this.handlers[n])(t)}},{key:"hasHandlers",value:function(){return this.handlers.length>0}},{key:"removeHandlers",value:function(e){for(var n=[],r=this.handlers.length,o=0;o<r;o+=1){var i=this.handlers[o];-1===e.indexOf(i)&&n.push(i)}return new t(n)}}]),t}();function v(t){var e=new Map;return t.forEach((function(t,n){e.set(n,t)})),e}function y(t){return Array.isArray(t)?t:[t]}function b(t){return"document"===t?document:"window"===t?window:function(t){return null!==t&&"object"===i(t)&&t.hasOwnProperty("current")}(t)?t.current||document:t||document}var g=function(){function t(e,n){a(this,t),u(this,"handlerSets",void 0),u(this,"poolName",void 0),this.handlerSets=n,this.poolName=e}return c(t,[{key:"addHandlers",value:function(e,n){var r=v(this.handlerSets);if(r.has(e)){var o=r.get(e);r.set(e,o.addHandlers(n))}else r.set(e,new d(n));return new t(this.poolName,r)}},{key:"dispatchEvent",value:function(t,e){var n=this.handlerSets.get(t),r="default"===this.poolName;n&&n.dispatchEvent(e,r)}},{key:"hasHandlers",value:function(t){if(!t)return this.handlerSets.size>0;var e=this.handlerSets.get(t);return!!e&&e.hasHandlers()}},{key:"removeHandlers",value:function(e,n){var r=v(this.handlerSets);if(!r.has(e))return new t(this.poolName,r);var o=r.get(e).removeHandlers(n);return o.hasHandlers()?r.set(e,o):r.delete(e),new t(this.poolName,r)}}]),t}();u(g,"createByType",(function(t,e,n){var r=new Map;return r.set(e,new d(n)),new g(t,r)}));var m=function(){function t(e){var n=this;a(this,t),u(this,"handlers",new Map),u(this,"pools",new Map),u(this,"target",void 0),u(this,"createEmitter",(function(t){return function(e){n.pools.forEach((function(n){n.dispatchEvent(t,e)}))}})),this.target=e}return c(t,[{key:"addHandlers",value:function(t,e,n){if(this.pools.has(t)){var r=this.pools.get(t);this.pools.set(t,r.addHandlers(e,n))}else this.pools.set(t,g.createByType(t,e,n));this.handlers.has(e)||this.addTargetHandler(e)}},{key:"hasHandlers",value:function(){return this.handlers.size>0}},{key:"removeHandlers",value:function(t,e,n){if(this.pools.has(t)){var r=this.pools.get(t).removeHandlers(e,n);r.hasHandlers()?this.pools.set(t,r):this.pools.delete(t);var o=!1;this.pools.forEach((function(t){return o=o||t.hasHandlers(e)})),o||this.removeTargetHandler(e)}}},{key:"addTargetHandler",value:function(t){var e=this.createEmitter(t);this.handlers.set(t,e),this.target.addEventListener(t,e,!0)}},{key:"removeTargetHandler",value:function(t){this.handlers.has(t)&&(this.target.removeEventListener(t,this.handlers.get(t),!0),this.handlers.delete(t))}}]),t}(),O=function(){function t(){var e=this;a(this,t),u(this,"targets",new Map),u(this,"getTarget",(function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=b(t);if(e.targets.has(r))return e.targets.get(r);if(!n)return null;var o=new m(r);return e.targets.set(r,o),o})),u(this,"removeTarget",(function(t){e.targets.delete(b(t))}))}return c(t,[{key:"sub",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r.canUseDOM){var o=n.target,i=void 0===o?document:o,a=n.pool,s=void 0===a?"default":a;this.getTarget(i).addHandlers(s,t,y(e))}}},{key:"unsub",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r.canUseDOM){var o=n.target,i=void 0===o?document:o,a=n.pool,s=void 0===a?"default":a,c=this.getTarget(i,!1);c&&(c.removeHandlers(s,t,y(e)),c.hasHandlers()||this.removeTarget(i))}}}]),t}(),j=new O,_=function(t){function e(){return a(this,e),h(this,f(e).apply(this,arguments))}return l(e,o.PureComponent),c(e,[{key:"componentDidMount",value:function(){this.subscribe(this.props)}},{key:"componentDidUpdate",value:function(t){this.unsubscribe(t),this.subscribe(this.props)}},{key:"componentWillUnmount",value:function(){this.unsubscribe(this.props)}},{key:"subscribe",value:function(t){var e=t.name,n=t.on,r=t.pool,o=t.target;j.sub(e,n,{pool:r,target:o})}},{key:"unsubscribe",value:function(t){var e=t.name,n=t.on,r=t.pool,o=t.target;j.unsub(e,n,{pool:r,target:o})}},{key:"render",value:function(){return null}}]),e}();u(_,"defaultProps",{pool:"default",target:"document"}),_.propTypes={},e.instance=j,e.default=_},673:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(e,n,e,t))||(t.exports=r)}()},674:function(t,e,n){"use strict";var r=n(675);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},675:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},708:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(33),o=n(164),i=n(572),a=n(625),s=n(570),c=n(5),u=n.n(c),l=n(626),f=n(632),p=n(633),h=n(634),d=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={active:!0,sticky:!1},e.stickyRef=Object(c.createRef)(),e.triggerRef=Object(c.createRef)(),e.addListeners=function(t){var n=Object(a.b)(t)?t.current:t;n&&(l.a.sub("resize",e.handleUpdate,{target:n}),l.a.sub("scroll",e.handleUpdate,{target:n}))},e.removeListeners=function(t){var n=Object(a.b)(t)?t.current:t;n&&(l.a.unsub("resize",e.handleUpdate,{target:n}),l.a.unsub("scroll",e.handleUpdate,{target:n}))},e.update=function(t){var n=e.state.pushing;if(e.ticking=!1,e.assignRects(),n)return e.didReachStartingPoint()?e.stickToContextTop(t):e.didTouchScreenBottom()?e.stickToScreenBottom(t):e.stickToContextBottom(t);if(e.isOversized()){if(e.contextRect.top>0)return e.stickToContextTop(t);if(e.contextRect.bottom<window.innerHeight)return e.stickToContextBottom(t)}return e.didTouchScreenTop()?e.didReachContextBottom()?e.stickToContextBottom(t):e.stickToScreenTop(t):e.stickToContextTop(t)},e.handleUpdate=function(t){e.ticking||(e.ticking=!0,e.frameId=requestAnimationFrame((function(){return e.update(t)})))},e.assignRects=function(){var t=e.props.context,n=Object(a.b)(t)?t.current:t||document.body;e.triggerRect=e.triggerRef.current.getBoundingClientRect(),e.contextRect=n.getBoundingClientRect(),e.stickyRect=e.stickyRef.current.getBoundingClientRect()},e.didReachContextBottom=function(){var t=e.props.offset;return e.stickyRect.height+t>=e.contextRect.bottom},e.didReachStartingPoint=function(){return e.stickyRect.top<=e.triggerRect.top},e.didTouchScreenTop=function(){return e.triggerRect.top<e.props.offset},e.didTouchScreenBottom=function(){var t=e.props.bottomOffset;return e.contextRect.bottom+t>window.innerHeight},e.isOversized=function(){return e.stickyRect.height>window.innerHeight},e.pushing=function(t){e.props.pushing&&e.setState({pushing:t})},e.stick=function(t,n){e.setState({bound:n,sticky:!0}),Object(i.a)(e.props,"onStick",t,e.props)},e.unstick=function(t,n){e.setState({bound:n,sticky:!1}),Object(i.a)(e.props,"onUnstick",t,e.props)},e.stickToContextBottom=function(t){Object(i.a)(e.props,"onBottom",t,e.props),e.stick(t,!0),e.pushing(!0)},e.stickToContextTop=function(t){Object(i.a)(e.props,"onTop",t,e.props),e.unstick(t,!1),e.pushing(!1)},e.stickToScreenBottom=function(t){var n=e.props.bottomOffset;e.stick(t,!1),e.setState({bottom:n,top:null})},e.stickToScreenTop=function(t){var n=e.props.offset;e.stick(t,!1),e.setState({top:n,bottom:null})},e}Object(o.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(f.a)()&&(this.state.active&&(this.handleUpdate(),this.addListeners(this.props.scrollContext)))},e.getDerivedStateFromProps=function(t,e){return e.active===t.active||t.active?{active:t.active}:{active:t.active,sticky:!1}},n.componentDidUpdate=function(t,e){if(e.active!==this.state.active)return this.state.active?(this.handleUpdate(),void this.addListeners(this.props.scrollContext)):void this.removeListeners(t.scrollContext);t.scrollContext!==this.props.scrollContext&&(this.removeListeners(t.scrollContext),this.addListeners(this.props.scrollContext))},n.componentWillUnmount=function(){Object(f.a)()&&(this.state.active&&(this.removeListeners(this.props.scrollContext),cancelAnimationFrame(this.frameId)))},n.computeStyle=function(){var t=this.props.styleElement,e=this.state,n=e.bottom,o=e.bound,i=e.sticky,a=e.top;return i?Object(r.a)({bottom:o?0:n,top:o?void 0:a,width:this.triggerRect.width},t):t},n.render=function(){var t=this.props,n=t.children,o=t.className,i=this.state,a=i.bottom,c=i.bound,l=i.sticky,f=Object(p.a)(e,this.props),d=Object(h.a)(e,this.props),v=Object(s.a)(l&&"ui",l&&"stuck-container",l&&(c?"bound-container":"fixed-container"),o),y=Object(s.a)("ui",l&&(c?"bound bottom":"fixed"),l&&!c&&(null===a?"top":"bottom"),"sticky"),b=l&&this.stickyRect?{height:this.stickyRect.height}:{};return u.a.createElement(d,Object(r.a)({},f,{className:v}),u.a.createElement("div",{ref:this.triggerRef,style:b}),u.a.createElement("div",{className:y,ref:this.stickyRef,style:this.computeStyle()},n))},e}(c.Component);d.handledProps=["active","as","bottomOffset","children","className","context","offset","onBottom","onStick","onTop","onUnstick","pushing","scrollContext","styleElement"],d.propTypes={},d.defaultProps={active:!0,bottomOffset:0,offset:0,scrollContext:Object(f.a)()?window:null}}}]);
//# sourceMappingURL=3.856419e4.chunk.js.map