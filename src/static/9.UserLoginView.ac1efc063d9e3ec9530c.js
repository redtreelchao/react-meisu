webpackJsonp([9],{5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a;t.AJAX_TEST="AJAX_TEST",t.TEST_API="http://wx.redtravel.cn",t.PAGE_DONE="PAGE_DONE",t.GET_MORE="GET_MORE",t.CAT_MORE="CAT_MORE",t.SCROLL_UP="SCROLL_UP",t.GET_DETAIL="GET_DETAIL",t.SEARCH_DONE="SEARCH_DONE",t.SHOW_SEARCH="SHOW_SEARCH",t.DEL_INDENT="DEL_INDENT",t.GO_INDENT="GO_INDENT",t.ADD_AMOUNT="ADD_AMOUNT",t.MINUS_AMOUNT="MINUS_AMOUNT",t.ORDER_TO_PAY="ORDER_TO_PAY",t.GET_COUPONS="GET_COUPONS",t.GET_ORDER_LIST="GET_ORDER_LIST",t.ORDER_DETAIL="ORDER_DETAIL",t.DO_SORT="DO_SORT",t.APPID="wx8f2d4ba8d79914d1",t.GET_KEYWORD="GET_KEYWORD",t.CLEAR_PRODUCT="CLEAR_PRODUCT",t.BIND_COUPONS="BIND_COUPONS",t.GET_HISTORY="GET_HISTORY";a="http://iapi.putike.cn";t.KEYWORD_URL=a+"/index/api?method=product&action=hotkeyword",t.COUPONS_URL=a+"/index/api?method=user&action=ticketlist",t.ORDER_LIST=a+"/index/api?method=user&action=orderlist",t.BIND_COUPONS_URL=a+"/index/api?method=user&action=bind_coupons",t.PAY_URL=a+"/index/api?method=order&action=detail",t.SEARCH_URL=a+"/index/api?method=product&action=index&page=",t.PRODUCTS_URL=a+"/index/api?method=product&action=index&page=",t.DETAIL_URL=a+"/index/api?method=product&action=detail",t.INDEX_API=a+"/index/api?"},14:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),i=l(n),r=a(17),o=l(r),u=(a(7),i["default"].createClass({displayName:"MainHeader",contextTypes:{router:i["default"].PropTypes.object.isRequired},getInitialState:function(){return{}},goBack:function(e){e.preventDefault(),this.context.router.push("/catemap")},componentDidMount:function(){},componentWillUnmount:function(){},render:function(){var e,t=this.props.title_right;switch(e="取消"==t?i["default"].createElement("p",{className:o["default"].title_cancel_right,onClick:this.props.cancelRight},t):i["default"].createElement("p",{className:o["default"].title_bar_right,onClick:this.props.doRight},t),t){case"取消":e=i["default"].createElement("p",{className:o["default"].title_cancel_right,onClick:this.props.cancelRight},t);break;case"tel":e=i["default"].createElement("p",{className:o["default"].title_tel_right,onClick:this.props.doRight},i["default"].createElement("a",{href:"tel:400-600-800"}));break;case"coupon":e=i["default"].createElement("p",{className:o["default"].title_bar_right,onClick:this.props.doRight},t)}return i["default"].createElement("div",null,i["default"].createElement("div",{className:o["default"].MainHeader},i["default"].createElement("i",{className:o["default"].goBack,onClick:this.context.router.goBack}),i["default"].createElement("p",{className:o["default"].title},this.props.title),e))}}));t["default"]=u},15:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(14),i=l(n);t["default"]=i["default"]},17:function(e,t){e.exports={MainHeader:"MainHeader__MainHeader___3F1Zi",goBack:"MainHeader__goBack___2Eg4z",title:"MainHeader__title___FxDNi",title_bar_right:"MainHeader__title_bar_right___1K_KU",title_cancel_right:"MainHeader__title_cancel_right___XEvG7",title_tel_right:"MainHeader__title_tel_right___-Sjjl"}},67:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),i=l(n),r=a(75),o=l(r),u=a(7),d=a(5),c=i["default"].createClass({displayName:"Recom",getInitialState:function(){return{search:this.props.keyword||"",stylekeyword:[],citykeyword:[]}},getKeyword:function(){var e=this;fetch(d.KEYWORD_URL).then(function(e){return e.json()}).then(function(t){var a=sessionStorage.stylekeyword=t.data&&t.data[0],l=sessionStorage.citykeyword=t.data&&t.data[1];e.setState({stylekeyword:a,citykeyword:l})})},componentDidMount:function(){var e,t,a=sessionStorage.stylekeyword,l=sessionStorage.citykeyword;if(void 0==a||void 0==l)this.getKeyword();else{var e=a.split(","),t=l.split(",");this.setState({stylekeyword:e,citykeyword:t})}},render:function(){var e,t,a,l=window.localStorage.searchHistory,n=this.state.citykeyword,r=this.state.stylekeyword;return"list"==this.props.from?(t=n&&n.map(function(e,t){return i["default"].createElement(u.Link,{to:"/catemap?keyword="+e,key:t},i["default"].createElement("span",null,e))}),a=r&&r.map(function(e,t){return i["default"].createElement(u.Link,{to:"/catemap?keyword="+e,key:t},i["default"].createElement("span",null,e))}),l&&(l=l.split(","),e=i["default"].createElement("div",{className:o["default"].history},i["default"].createElement("p",{className:o["default"].title},i["default"].createElement("i",{className:o["default"].icon_play}),"搜索历史"),i["default"].createElement("div",{className:o["default"].tags},l.map(function(e,t){return i["default"].createElement(u.Link,{to:"/catemap?keyword="+e,key:t},i["default"].createElement("span",null,e))}))))):"map"==this.props.from&&(t=n&&n.map(function(e,t){return i["default"].createElement(u.Link,{to:"/catelist?keyword="+e,key:t},i["default"].createElement("span",null,e))}),a=r&&r.map(function(e,t){return i["default"].createElement(u.Link,{to:"/catelist?keyword="+e,key:t},i["default"].createElement("span",null,e))}),l&&(l=l.split(","),e=i["default"].createElement("div",{className:o["default"].history},i["default"].createElement("p",{className:o["default"].title},i["default"].createElement("i",{className:o["default"].icon_play}),"搜索历史"),i["default"].createElement("div",{className:o["default"].tags},l.map(function(e,t){return i["default"].createElement(u.Link,{to:"/catelist?keyword="+e,key:t},i["default"].createElement("span",null,e))}))))),i["default"].createElement("div",{className:o["default"].Catemap},e,i["default"].createElement("div",{className:o["default"].play},i["default"].createElement("p",{className:o["default"].title},i["default"].createElement("i",{className:o["default"].icon_play}),"大家都玩啥"),i["default"].createElement("div",{className:o["default"].tags},t)),i["default"].createElement("div",null,i["default"].createElement("p",{className:o["default"].title},i["default"].createElement("i",{className:o["default"].icon_play}),"大家都去哪"),i["default"].createElement("div",{className:o["default"].tags},a)))}});t["default"]=c},68:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(67),i=l(n);t["default"]=i["default"]},75:function(e,t){e.exports={Catemap:"Recom__Catemap___2Sed_",title:"Recom__title___1fCkW",tags:"Recom__tags___3szIl"}},217:function(e,t){"use strict";function a(){var e=arguments.length<=0||void 0===arguments[0]?n:arguments[0],t=arguments[1],a=l[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var l=(t.actions={},{}),n={}},344:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(220),i=l(n),r=a(44),o=l(r),u=a(222),d=l(u),c=a(53),s=l(c),_=a(45),f=l(_),p=a(1),m=l(p),E=a(493),h=l(E),g=a(15),y=l(g),v=a(68),N=(l(v),a(5)),O=function(e){function t(e){(0,o["default"])(this,t);var a=(0,s["default"])(this,(0,i["default"])(t).call(this,e));return a.validTime=function(){var e=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;if(!e.test(a.state.tel))return alert("请输入有效的手机号码！"),!1;if(a.state.canClick!==!1){a.setState({canClick:!1});var t=a,l=function n(e){if(e>0&&"/UserLogin"==t.props.location.pathname){e-=1;var a=e+"s后重发";console.log(a),t.setState({showValidText:a}),setTimeout(function(){return n(e)},1e3)}else t.setState({showValidText:"发送验证码",canClick:!0})};l(60)}},a.getValid=function(){a.state.canClick&&(a.validTime(),fetch(N.INDEX_API+"method=user&action=valid&mobile="+a.state.tel).then(function(e){return e.json()}).then(function(e){1==e.success&&a.setState({showValid:!0,alreadyValid:!0})}))},a.telChange=function(e){a.setState({tel:e.target.value})},a.validChange=function(e){a.setState({valid:e.target.value})},a.doLogin=function(){fetch(N.INDEX_API+"method=user&action=login&mobile="+a.state.tel+"&code="+a.state.valid+"&openid="+localStorage.openid).then(function(e){return e.json()}).then(function(e){return a.setState({loading:!1}),1==e.success?(window.localStorage.uid=e.data.id,console.log(window.localStorage.uid),a.context.router.push("/Userbox")):alert(e.msg),e})},a.state={tel:"",valid:"",showValidText:"发送验证码",canClick:!0},a}return(0,f["default"])(t,e),(0,d["default"])(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.tel;return m["default"].createElement("div",{className:h["default"].loginbody},m["default"].createElement(y["default"],{title:"用户登录"}),m["default"].createElement("div",{className:h["default"].loginbox},m["default"].createElement("div",{className:h["default"].input_wrapper},m["default"].createElement("p",{className:h["default"].mobile},m["default"].createElement("input",{type:"text",onFocus:this.clearTel,onChange:this.telChange,placeholder:"请输入手机号",value:e})),m["default"].createElement("span",{onClick:this.getValid},this.state.showValidText)),m["default"].createElement("div",{className:h["default"].input_wrapper},m["default"].createElement("p",{className:h["default"].valid},m["default"].createElement("input",{type:"text",onChange:this.validChange,placeholder:"请输入验证码"})))),m["default"].createElement("div",{className:h["default"].loginBtn},m["default"].createElement("span",{onClick:this.doLogin},"登录")))}}]),t}(m["default"].Component);O.contextTypes={router:m["default"].PropTypes.object.isRequired},t["default"]=O},345:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(344),i=l(n);t["default"]=i["default"]},367:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(19);a(217);var i=a(345),r=l(i),o={},u=function(e){return{userLogin:e.userLogin}};t["default"]=(0,n.connect)(u,o)(r["default"])},493:function(e,t){e.exports={loginbody:"UserLogin__loginbody___ZBxVb",loginbox:"UserLogin__loginbox___2Z5Ai",input_wrapper:"UserLogin__input_wrapper___375Iv",mobile:"UserLogin__mobile___2um1B",valid:"UserLogin__valid___2Fn5U",loginBtn:"UserLogin__loginBtn___2-wTo"}}});