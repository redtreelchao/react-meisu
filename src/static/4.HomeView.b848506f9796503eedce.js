webpackJsonp([4],{5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n;t.AJAX_TEST="AJAX_TEST",t.TEST_API="http://wx.redtravel.cn",t.PAGE_DONE="PAGE_DONE",t.GET_MORE="GET_MORE",t.CAT_MORE="CAT_MORE",t.SCROLL_UP="SCROLL_UP",t.GET_DETAIL="GET_DETAIL",t.SEARCH_DONE="SEARCH_DONE",t.SHOW_SEARCH="SHOW_SEARCH",t.DEL_INDENT="DEL_INDENT",t.GO_INDENT="GO_INDENT",t.ADD_AMOUNT="ADD_AMOUNT",t.MINUS_AMOUNT="MINUS_AMOUNT",t.ORDER_TO_PAY="ORDER_TO_PAY",t.GET_COUPONS="GET_COUPONS",t.GET_ORDER_LIST="GET_ORDER_LIST",t.ORDER_DETAIL="ORDER_DETAIL",t.DO_SORT="DO_SORT",t.APPID="wx8f2d4ba8d79914d1",t.GET_KEYWORD="GET_KEYWORD",t.CLEAR_PRODUCT="CLEAR_PRODUCT",t.BIND_COUPONS="BIND_COUPONS",t.GET_HISTORY="GET_HISTORY";n="http://iapi.putike.cn";t.KEYWORD_URL=n+"/index/api?method=product&action=hotkeyword",t.COUPONS_URL=n+"/index/api?method=user&action=ticketlist",t.ORDER_LIST=n+"/index/api?method=user&action=orderlist",t.BIND_COUPONS_URL=n+"/index/api?method=user&action=bind_coupons",t.PAY_URL=n+"/index/api?method=order&action=detail",t.SEARCH_URL=n+"/index/api?method=product&action=index&page=",t.PRODUCTS_URL=n+"/index/api?method=product&action=index&page=",t.DETAIL_URL=n+"/index/api?method=product&action=detail",t.INDEX_API=n+"/index/api?"},9:function(e,t,n){n(12),e.exports=self.fetch.bind(self)},12:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function o(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return _.iterable&&(t[Symbol.iterator]=function(){return t}),t}function r(e){this.map={},e instanceof r?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader;return t.readAsArrayBuffer(e),a(t)}function u(e){var t=new FileReader;return t.readAsText(e),a(t)}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(_.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(_.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(_.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!_.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):_.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},_.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},_.formData&&(this.formData=function(){return this.text().then(f)}),this.json=function(){return this.text().then(JSON.parse)},this}function l(e){var t=e.toUpperCase();return m.indexOf(t)>-1?t:e}function c(e,t){t=t||{};var n=t.body;if(c.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new r(t.headers)),this.method=l(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function f(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(r))}}),t}function p(e){var t=new r,n=(e.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(e){var n=e.trim().split(":"),o=n.shift().trim(),r=n.join(":").trim();t.append(o,r)}),t}function h(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof r?t.headers:new r(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var _={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};r.prototype.append=function(e,o){e=t(e),o=n(o);var r=this.map[e];r||(r=[],this.map[e]=r),r.push(o)},r.prototype["delete"]=function(e){delete this.map[t(e)]},r.prototype.get=function(e){var n=this.map[t(e)];return n?n[0]:null},r.prototype.getAll=function(e){return this.map[t(e)]||[]},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(e,o){this.map[t(e)]=[n(o)]},r.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(o){e.call(t,o,n,this)},this)},this)},r.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),o(e)},r.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),o(e)},r.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),o(e)},_.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];c.prototype.clone=function(){return new c(this)},d.call(c.prototype),d.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var y=[301,302,303,307,308];h.redirect=function(e,t){if(-1===y.indexOf(t))throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=r,e.Request=c,e.Response=h,e.fetch=function(e,t){return new Promise(function(n,o){function r(){return"responseURL"in a?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):void 0}var i;i=c.prototype.isPrototypeOf(e)&&!t?e:new c(e,t);var a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:p(a),url:r()},t="response"in a?a.response:a.responseText;n(new h(t,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&_.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(33),i=o(r);t["default"]=function(e,t,n){return t in e?(0,i["default"])(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(74),s=o(a),u=n(88),d=o(u),l=n(87),c=o(l),f=n(7),p=i["default"].createClass({displayName:"Header",getInitialState:function(){return{search:this.props.keyword||""}},handleChange:function(e){this.setState({search:e.target.value})},clearInput:function(){this.setState({search:""}),this._input.focus()},upenter:function(e){e.preventDefault(),13==e.keyCode&&this.props.doSearch(this.state.search)},componentDidMount:function(){"search"==this.props.type&&this._input.focus()},render:function(){var e,t=this,n=this.state.search,o="";return"home"!=this.props.type?(e=i["default"].createElement("span",{className:s["default"].cancel,onClick:this.props.hideSearch},"取消"),""!=this.state.search&&(o=i["default"].createElement("img",{src:c["default"],className:s["default"].delete_icon,onClick:this.clearInput}))):e=i["default"].createElement(f.Link,{to:"/userbox"},i["default"].createElement("span",{className:s["default"].personal},i["default"].createElement("img",{src:d["default"]}))),i["default"].createElement("div",null,i["default"].createElement("div",{className:s["default"].header},i["default"].createElement("div",{className:s["default"].inputwrapper},i["default"].createElement("input",{type:"text",ref:function(e){return t._input=e},value:n,onChange:this.handleChange,placeholder:"搜索",onFocus:this.props.showSearch,onKeyUp:this.upenter}),o),e),i["default"].createElement("div",{className:s["default"].headerWrapper}))}});t["default"]=p},66:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(65),i=o(r);t["default"]=i["default"]},74:function(e,t){e.exports={header:"Header__header___3VSYW",headerWrapper:"Header__headerWrapper___2BTHa",cancel:"Header__cancel___2drxP",personal:"Header__personal___1vVSR",inputwrapper:"Header__inputwrapper___aQJmS",delete_icon:"Header__delete_icon___2oVsX"}},87:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVQ4T6WT4VHDMAyFn+wBYAPSCWhOizACnYB0EtIJKBuwASzgS0ZoJ6AMYItTzsq5uaSXA//KRdInPfmZ8M9D0/qu66qU0guAJwBVjp8AfDjnDnVd6/d4rgAhhGcArwDuFwa7ANgz89HiIyAXv61UtDPIAMhjdzc6T7kX51ytcgZACKEFoLr1aHCTUvoC8Kg/ROTde9+klL4L0oGZGwPoYh6K4NE5t1eIiPRaHGP8JKJtkXNi5o0BZEb7ANH/M8VDOjPTIsDG1sRSTtmoBFxJsOLcuTc5tpMMOTNztbjEydi2k/kl6jXGGHsiulvjAxH58d5vx2vMV6ku/JuRrKu6UUTapUm0MxE1s1Y2SHZlkx+TeeOcH1N78zGt0T/N+QUxyZ8RNHorigAAAABJRU5ErkJggg=="},88:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACEklEQVRYR+2WQW7TQBSG328as6Q3wEixw45UarIlnKDpCQg36A2a3gBOgDkB4QQN23hjdtRe1L1B2GYq/5VNitxoknkOSBVSvfU/733zz7z3BvLIHx45v/yfAEHQP/R9/0REgspBkEsY8+1nkRZtHW3tQK97fEbgHMDhZrKS/GiMuSiKdKkFaQUQhYMYwPtdwUmmK2PeaSHUAFE0HEPkq2pn5KerPDnTaNUAvWhYne9LTdD6XqxWrzR3QgXQavdrQopcZNli6gLWAkwhcu4K9uA/+f0qT0auNU8AKgfCcDDxgM8uO5v/SX7J8mTiWqMCeB30A/r+tSvYAwCR0yxbzFxrVABVEE0Tuk9GkR9Ztui7ktflqhFVmnX/n0PkjaMT/qLIKM+TVBNbDdCAiCFSDSLbd1OSY23yVg40s9V3otOpWm1tM4ElyVmeJ7Fm102NyoEwHPQhckmR2DXtomg4FfJEO5CcALYSJBkLMC9L/pn/gIw9YHz/RtBOxZ0A+9T/Ri9IPWNOdw2lrQDd7vHomeddtj3TTT3JpWfM0TYIK0Bdcp3Ote3Vsw9QdRxZnhzZ1loB2jQdLVBJfrBViRWgFw7mArzVBtfotr0P7A5Ew9TV8TRJm5pWDqzrfg7gRdtENv2uybi1CqqL+PzgYELPG4H8/QTXHcuNkAVFCpApbm9ne5Xhv9i5JoazE2qC/I3mCeAOeiT3IfosH0wAAAAASUVORK5CYII="},118:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(150),s=o(a),u=i["default"].createClass({displayName:"Dropload",getInitialState:function(){return{isLockDown:!1}},handleScroll:function(){var e=document.body.offsetHeight,t=document.body.scrollHeight,n=document.body.scrollTop;return!this.state.isLockDown&&40>=t-e-n?(this.setState({isLockDown:!0}),this.props.handleScroll()):void 0},componentDidMount:function(){window.addEventListener("scroll",this.handleScroll)},componentWillReceiveProps:function(){console.log(this.state.isLockDown),this.props.isEnd||this.setState({isLockDown:!1})},componentWillUnmount:function(){window.removeEventListener("scroll",this.handleScroll)},render:function(){var e;return this.props.isEnd?(e=i["default"].createElement("p",{className:s["default"].loadEnd},"已全部加载"),window.removeEventListener("scroll",this.handleScroll)):e=i["default"].createElement("p",{className:s["default"].loadNotEnd},"正在努力加载"),i["default"].createElement("div",null,i["default"].createElement("div",{className:s["default"].infinite_load},e))}});t["default"]=u},119:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(118),i=o(r);t["default"]=i["default"]},122:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Product=void 0;var r=n(1),i=o(r),a=n(152),s=o(a),u=n(7),d=n(170),l=o(d),c=t.Product=function(e){var t=e.product&&e.product.pic,n=e.product&&e.product.title,o=e.product&&e.product.name,r=e.product&&e.product.price,a=e.product&&e.product.id,d="/productinfo?id="+a,c=document.body.clientWidth;return i["default"].createElement("div",null,i["default"].createElement("div",{className:s["default"].product_container},i["default"].createElement(u.Link,{to:d}," ",i["default"].createElement("div",{className:s["default"].price_cover},i["default"].createElement("div",{className:s["default"].product_price},"￥",r,"起"))),i["default"].createElement("div",null,i["default"].createElement(l["default"],{height:200},i["default"].createElement("img",{alt:o,className:s["default"].product_cover,src:t+"!/fw/"+c}))),i["default"].createElement("div",{className:s["default"].product_info},i["default"].createElement("p",{className:s["default"].product_title}," ",i["default"].createElement(u.Link,{to:d},n)),i["default"].createElement("p",{className:s["default"].product_name},i["default"].createElement(u.Link,{to:d},o)))))};c.propTypes={},t["default"]=c},123:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(122),i=o(r);t["default"]=i["default"]},124:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Products=void 0;var r=n(123),i=o(r),a=n(1),s=o(a),u=n(153),d=(o(u),t.Products=function(e){return s["default"].createElement("div",null,e.list.map(function(e,t){return s["default"].createElement(i["default"],{product:e,key:t})}))});t["default"]=d},125:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(124),i=o(r);t["default"]=i["default"]},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wxLoginMixin=void 0;var o=n(5);t.wxLoginMixin={componentWillMount:function(){var e=this,t=window.localStorage.uid,n=window.location.href,r=encodeURI("http://meisu.putike.cn/imeisu/?redirect="+n),i=navigator.userAgent.toLowerCase();if("micromessenger"==i.match(/MicroMessenger/i)&&void 0==localStorage.openid){if(this.props.location.query.openid&&void 0===t)fetch(o.INDEX_API+"method=user&action=wxlogin&openid="+this.props.location.query.openid).then(function(e){return e.json()}).then(function(t){1==t.success&&(null!==t.data&&(window.localStorage.uid=t.data&&t.data.id),window.localStorage.openid=e.props.location.query.openid)});else{var a="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+o.APPID+"&redirect_uri="+r+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect";window.location.href=a}return!0}return!1}}},148:function(e,t,n){var o,r;!function(i,a){o=a,r="function"==typeof o?o.call(t,n,t,e):o,!(void 0!==r&&(e.exports=r))}(this,function(){function e(e,t){return function(n,o,r,i){n[e]?n[e](o,r,i):n[t]&&n[t]("on"+o,r)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})},150:function(e,t){e.exports={infinite_load:"Dropload__infinite_load___168wk",loadNotEnd:"Dropload__loadNotEnd___dK26_"}},152:function(e,t){e.exports={product_container:"Product__product_container___3l_pN",product_cover:"Product__product_cover___WFXUO",product_info:"Product__product_info___2TsVN",product_title:"Product__product_title___1KhSz",product_name:"Product__product_name___3ah0B",product_price:"Product__product_price___2SMtC",price_cover:"Product__price_cover___1tq11"}},153:495,159:function(e,t,n){function o(e,t,n){var o=!0,s=!0;if("function"!=typeof e)throw new TypeError(a);return r(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),i(e,t,{leading:o,maxWait:t,trailing:s})}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var i=n(160),a="Expected a function";e.exports=o},160:720,170:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),u=n(79),d=u.findDOMNode,l=s.Children,c=s.Component,f=s.PropTypes,p=n(148),h=p.add,_=p.remove,m=n(173),y=n(159),v=n(172),E=n(171),w=function(e){function t(e){o(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=m(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=y(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return i(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),h(window,"resize",this.lazyLoadHandler),h(e,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return v(d(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,o=e.offsetHorizontal,r=e.offsetTop,i=e.offsetBottom,a=e.offsetLeft,s=e.offsetRight,u=e.threshold,d=u||t,l=n||d,c=o||d;return{top:r||l,bottom:i||l,left:a||c,right:s||c}}},{key:"lazyLoadHandler",value:function(){var e=this.getOffset(),t=d(this),n=this.getEventNode();if(E(t,n,e)){var o=this.props.onContentVisible;this.setState({visible:!0}),this.detachListeners(),o&&o()}}},{key:"detachListeners",value:function(){var e=this.getEventNode();_(window,"resize",this.lazyLoadHandler),_(e,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.height,r=e.width,i=this.state.visible,a={height:o,width:r},u="LazyLoad"+(i?" is-visible":"")+(n?" "+n:"");return s.createElement("div",{className:u,style:a},i&&l.only(t))}}]),t}(c);w.propTypes={children:f.node.isRequired,className:f.string,debounce:f.bool,height:f.oneOfType([f.string,f.number]),offset:f.number,offsetBottom:f.number,offsetHorizontal:f.number,offsetLeft:f.number,offsetRight:f.number,offsetTop:f.number,offsetVertical:f.number,threshold:f.number,throttle:f.number,width:f.oneOfType([f.string,f.number]),onContentVisible:f.func},w.defaultProps={debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250},e.exports=w},171:function(e,t){"use strict";var n=function(e){return null===e.offsetParent},o=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},r=function(e,t,r){if(n(e))return!1;var i=void 0,a=void 0,s=void 0,u=void 0;if("undefined"==typeof t||t===window)i=window.pageYOffset,a=window.pageXOffset,s=i+window.innerHeight,u=a+window.innerWidth;else{var d=o(t);i=d.top,a=d.left,s=i+t.offsetHeight,u=a+t.offsetWidth}var l=o(e);return i<l.top+r.bottom+e.offsetHeight&&s>l.top-r.top&&a<l.left+r.right+e.offsetWidth&&u>l.left-r.left};e.exports=r},172:function(e,t){"use strict";var n=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},o=function(e){return n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")},r=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(o(t)))return t;t=t.parentNode}return window};e.exports=r},173:720,211:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=arguments.length<=0||void 0===arguments[0]?v:arguments[0],t=arguments[1],n=y[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.getMore=t.framedone=void 0;var i,a=n(16),s=o(a),u=n(70),d=o(u),l=n(32),c=o(l);t["default"]=r;var f=n(9),p=o(f),h=n(5),_=t.framedone=function(e){return function(t){return(0,p["default"])(h.PRODUCTS_URL+e).then(function(e){return e.json()}).then(function(e){return t({type:h.PAGE_DONE,products:e,pageNum:1})}).then(function(e){return console.log(e)})}},m=t.getMore=function(e){return function(t){return(0,p["default"])(h.PRODUCTS_URL+e).then(function(e){return e.json()}).then(function(n){return t({type:h.GET_MORE,products:n,pageNum:e})})}},y=(t.actions={framedone:_,getMore:m},i={},(0,s["default"])(i,h.PAGE_DONE,function(e,t){return(0,c["default"])({},e,{products:t.products.data.products},{pageNum:t.pageNum})}),(0,s["default"])(i,h.GET_MORE,function(e,t){if(!t.products.data)return(0,c["default"])({},e,{isEnd:!0});var n=[].concat((0,d["default"])(e.products),(0,d["default"])(t.products.data.products));return(0,c["default"])({},e,{products:n},{pageNum:t.pageNum})}),i),v={products:[],pageNum:1,isEnd:!1}},332:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(487),s=o(a),u=n(125),d=o(u),l=n(66),c=o(l),f=n(119),p=o(f),h=n(126),_=i["default"].createClass({displayName:"HomeView",mixins:[h.wxLoginMixin],contextTypes:{router:i["default"].PropTypes.object.isRequired},getInitialState:function(){return{open:!1,type:"home"}},showSearch:function(e){e.preventDefault(),this.context.router.push("/catemap")},handleScroll:function(){return this.props.getMore(this.props.home.pageNum+1)},componentDidMount:function(){1==this.props.home.pageNum&&this.props.framedone(this.props.home.pageNum)},componentWillUnmount:function(){},render:function(){var e,t;return e=i["default"].createElement(d["default"],{list:this.props.home.products}),t=1==this.props.home.isEnd?i["default"].createElement(p["default"],{handleScroll:this.handleScroll,isEnd:!0}):i["default"].createElement(p["default"],{handleScroll:this.handleScroll}),i["default"].createElement("div",{className:s["default"].homewrapper},i["default"].createElement(c["default"],{type:this.state.type,showSearch:this.showSearch}),e,t)}});t["default"]=_},333:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(332),i=o(r);t["default"]=i["default"]},355:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),i=n(211),a=n(333),s=o(a),u={framedone:i.framedone,getMore:i.getMore},d=function(e){return{home:e.home}};t["default"]=(0,r.connect)(d,u)(s["default"])},487:function(e,t){e.exports={homewrapper:"HomeView__homewrapper___enZEv",search:"HomeView__search___1dyPg"}}});