(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"336b":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[s("div",{staticClass:"pt-0 spaced-content pb-0"},t._l(t.conversations,(function(e,r){return s("div",{key:"conversation"+r,staticClass:"d-flex flex-row mb-1 border-bottom pb-3"},[s("a",{staticClass:"d-flex",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.selectConversation(e)}}},[s("img",{staticClass:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",attrs:{alt:t.otherUser(e.users).title,src:t.otherUser(e.users).img}}),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1 min-width-zero"},[s("div",{staticClass:"pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},[s("div",{staticClass:"min-width-zero"},[s("p",{staticClass:"mb-0 truncate"},[t._v(t._s(t.otherUser(e.users).title))]),t._v(" "),s("p",{staticClass:"mb-1 text-muted text-small"},[t._v(t._s(e.lastMessageTime))])])])])])])})),0)])},n=[],a=(s("7db0"),{props:["conversations","contacts","currentUser"],methods:{selectConversation:function(t){var e=this.otherUser(t.users);this.$emit("select-conversation",e,t.messages)},otherUser:function(t){var e=this,s=t.find((function(t){return t!==e.currentUser.id}));return this.contacts.find((function(t){return t.id===s}))}},computed:{},mounted:function(){this.selectConversation(this.conversations[0])}}),i=a,o=s("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},"4cf0":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{"app-menu":!0,shown:t.isOpen},on:{mouseenter:function(e){t.isMenuOver=!0},mouseleave:function(e){t.isMenuOver=!1}}},[t._t("default"),t._v(" "),s("a",{staticClass:"app-menu-button d-inline-block d-xl-none",on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[s("i",{staticClass:"simple-icon-options"})])],2)},n=[],a=s("5118"),i={data:function(){return{isOpen:!1,isMenuOver:!1}},methods:{addEvents:function(){document.addEventListener("click",this.handleDocumentClick),document.addEventListener("touchstart",this.handleDocumentClick)},removeEvents:function(){document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("touchstart",this.handleDocumentClick)},handleDocumentClick:function(t){this.isMenuOver||this.toggle()},toggle:function(){this.isOpen=!this.isOpen}},watch:{isOpen:function(t){var e=this;t?(Object(a["setTimeout"])((function(){e.$emit("show")}),300),this.addEvents()):this.removeEvents()}},beforeDestroy:function(){this.removeEvents()}},o=i,l=s("2877"),c=Object(l["a"])(o,r,n,!1,null,null,null);e["a"]=c.exports},"503c":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex flex-row chat-heading"},[s("div",{staticClass:"d-flex"},[s("img",{staticClass:"img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small",attrs:{alt:t.otherUser.title,src:t.otherUser.img}})]),t._v(" "),s("div",{staticClass:"d-flex min-width-zero"},[s("div",{staticClass:"card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},[s("div",{staticClass:"min-width-zero"},[s("div",[s("p",{staticClass:"list-item-heading mb-1 truncate"},[t._v("\n              "+t._s(t.otherUser.title)+"\n            ")])]),t._v(" "),s("p",{staticClass:"mb-0 text-muted text-small"},[t._v(t._s(t.otherUser.date))])])])])]),t._v(" "),s("div",{staticClass:"separator mb-5"}),t._v(" "),s("vue-perfect-scrollbar",{ref:"chatArea",staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},t._l(t.messages,(function(e,r){return s("div",{key:"message"+r},[s("b-card",{class:{"d-inline-block mb-3":!0,"float-left":e.sender===t.otherUser.id,"float-right":e.sender===t.currentUser.id},attrs:{"no-body":""}},[s("div",{staticClass:"position-absolute pt-1 pr-2 r-0"},[s("span",{staticClass:"text-extra-small text-muted"},[t._v(t._s(e.time))])]),t._v(" "),s("b-card-body",[e.sender===t.currentUser.id?s("div",{staticClass:"d-flex flex-row pb-1"},[s("img",{staticClass:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",attrs:{alt:t.currentUser.title,src:t.currentUser.img}}),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1 min-width-zero"},[s("div",{staticClass:"m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},[s("div",{staticClass:"min-width-zero"},[s("p",{staticClass:"mb-0 truncate list-item-heading"},[t._v("\n                    "+t._s(t.currentUser.title)+"\n                  ")])])])])]):s("div",{staticClass:"d-flex flex-row pb-1"},[s("img",{staticClass:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",attrs:{alt:t.otherUser.title,src:t.otherUser.img}}),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1 min-width-zero"},[s("div",{staticClass:"m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},[s("div",{staticClass:"min-width-zero"},[s("p",{staticClass:"mb-0 truncate list-item-heading"},[t._v("\n                    "+t._s(t.otherUser.title)+"\n                  ")])])])])]),t._v(" "),s("div",{staticClass:"chat-text-left"},[s("p",{staticClass:"mb-0 text-semi-muted"},[t._v(t._s(e.text))])])])],1),t._v(" "),s("div",{staticClass:"clearfix"})],1)})),0)],1)},n=[],a={props:["currentUser","otherUser","messages"],methods:{scrollToEnd:function(){var t=this;setTimeout((function(){var e=t.$refs.chatArea.$el;e.scrollTop=e.scrollHeight}),0)}},mounted:function(){this.scrollToEnd()},updated:function(){this.scrollToEnd()}},i=a,o=s("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},5118:function(t,e,s){(function(t){var r="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,n=Function.prototype.apply;function a(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new a(n.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new a(n.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},s("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},6017:function(t,e,s){(function(t,e){(function(t,s){"use strict";if(!t.setImmediate){var r,n=1,a={},i=!1,o=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?m():p()?b():t.MessageChannel?v():o&&"onreadystatechange"in o.createElement("script")?h():g(),l.setImmediate=c,l.clearImmediate=u}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var i={callback:t,args:e};return a[n]=i,r(n),n++}function u(t){delete a[t]}function d(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(s,r);break}}function f(t){if(i)setTimeout(f,0,t);else{var e=a[t];if(e){i=!0;try{d(e)}finally{u(t),i=!1}}}}function m(){r=function(t){e.nextTick((function(){f(t)}))}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}function b(){var e="setImmediate$"+Math.random()+"$",s=function(s){s.source===t&&"string"===typeof s.data&&0===s.data.indexOf(e)&&f(+s.data.slice(e.length))};t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(s){t.postMessage(e+s,"*")}}function v(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},r=function(e){t.port2.postMessage(e)}}function h(){var t=o.documentElement;r=function(e){var s=o.createElement("script");s.onreadystatechange=function(){f(e),s.onreadystatechange=null,t.removeChild(s),s=null},t.appendChild(s)}}function g(){r=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,s("c8ba"),s("4362"))},"7db0":function(t,e,s){"use strict";var r=s("23e7"),n=s("b727").find,a=s("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(i)},9542:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",{staticClass:"app-row"},[s("b-colxx",{staticClass:"chat-app",attrs:{xxs:"12"}},[s("conversation-detail",{key:"conversation",attrs:{"current-user":t.currentUser,"other-user":t.otherUser,messages:t.conversationMessages}})],1)],1),t._v(" "),s("div",{staticClass:"chat-input-container d-flex justify-content-between align-items-center"},[s("b-input",{staticClass:"flex-grow-1",attrs:{type:"text",placeholder:t.$t("chat.saysomething")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),s("div",[s("b-button",{staticClass:"icon-button large ml-1",attrs:{variant:"primary"},on:{click:t.sendMessage}},[s("i",{staticClass:"simple-icon-arrow-right"})])],1)],1),t._v(" "),s("application-menu",[s("b-tabs",{staticClass:"pl-0 pr-0 h-100",attrs:{"no-fade":"","content-class":"chat-app-tab-content","nav-class":"card-header-tabs ml-0 mr-0"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{staticClass:"chat-app-tab-pane",attrs:{title:t.$t("chat.messages"),active:"","title-item-class":"w-50 text-center","no-body":""}},[s("div",{staticClass:"pt-4 spaced-content pb-0 mt-2"}),t._v(" "),t.isLoadContacts&&t.isLoadConversations?s("conversation-list",{key:"conversationList",attrs:{"current-user":t.currentUser,conversations:t.conversations,contacts:t.contacts},on:{"select-conversation":t.selectConversation}}):s("div",{key:"conversationListLoading",staticClass:"loading"})],1),t._v(" "),s("b-tab",{staticClass:"chat-app-tab-pane",attrs:{title:t.$t("chat.contacts"),"title-item-class":"w-50 text-center","no-body":""}},[s("div",{staticClass:"pt-4 spaced-content pb-0 mt-2"},[s("div",{staticClass:"form-group"},[s("b-input",{staticClass:"rounded",attrs:{type:"text",placeholder:t.$t("menu.search")},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)]),t._v(" "),t.isLoadContacts?s("contact-list",{key:"contactList",attrs:{data:t.contactsSearchResult},on:{"select-contact":t.selectContact}}):s("div",{key:"contactListLoading",staticClass:"loading"})],1)],1)],1)],1)},n=[],a=(s("a4d3"),s("4de4"),s("7db0"),s("caad"),s("a434"),s("e439"),s("dbb4"),s("b64b"),s("2532"),s("159b"),s("ade3")),i=s("2f62"),o=s("4cf0"),l=s("ace4"),c=s("336b"),u=s("503c");function d(t,e){e.emit("message",JSON.stringify({req:{uri:"http://localhost/api/messages",method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}},type:"sent"})),console.log("Sent")}var f=d,m=s("8055"),p=s.n(m);function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={components:{"application-menu":o["a"],"contact-list":l["a"],"conversation-list":c["a"],"conversation-detail":u["a"]},data:function(){return{tabIndex:0,message:"",searchKey:"",isLoadCurrentConversation:!1,otherUser:null,conversationMessages:null}},computed:v({},Object(i["c"])(["currentUser","isLoadContacts","isLoadConversations","error","contacts","contactsSearchResult","conversations"])),methods:v({},Object(i["b"])(["getContacts","searchContacts","getConversations"]),{selectConversation:function(t,e){this.otherUser=t,this.conversationMessages=e},selectContact:function(t){var e=this;this.otherUser=this.contacts.find((function(e){return e._id===t}));var s=this.conversations.find((function(s){return s.users.includes(t)&&s.users.includes(e.currentUser._id)}));if(s)console.log("change selected conversation"),this.conversationMessages=s.messages;else{console.log("create new conversation");var r=new Date;this.conversations.splice(0,0,{users:[t,this.currentUser._id],messages:[],lastMessageTime:r.getHours()+":"+r.getMinutes()}),this.conversationMessages=[]}this.tabIndex=0,this.message="",this.searchKey=""},sendMessage:function(){console.log("add message to conversation");new Date;var t={text:this.message,chatId:"dd"};this.conversationMessages||(this.conversationMessages=[]),t.text&&(this.conversationMessages.push(t),f(t,this.socket),this.message="")}}),created:function(){this.socket=p()("http://45.80.68.81:3000"),this.socket.on("connect",(function(){console.log("Connected")})),console.log("created"),this.socket.on("sent",(function(t){console.log(t)}))},mounted:function(){console.log(this.currentUser),this.getContacts({userId:this.currentUser._id,searchKey:""}),console.log(1),this.getConversations(this.currentUser._id),console.log(2),document.body.classList.add("no-footer"),socket.on("sent",(function(t){console.log(t)}))},beforeDestroy:function(){document.body.classList.remove("no-footer")},watch:{searchKey:function(t,e){this.searchContacts({userId:this.currentUser._id,searchKey:t})}}},g=h,x=s("2877"),k=Object(x["a"])(g,r,n,!1,null,null,null);e["default"]=k.exports},a434:function(t,e,s){"use strict";var r=s("23e7"),n=s("23cb"),a=s("a691"),i=s("50c4"),o=s("7b0b"),l=s("65f0"),c=s("8418"),u=s("1dde"),d=Math.max,f=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var s,r,u,b,v,h,g=o(this),x=i(g.length),k=n(t,x),C=arguments.length;if(0===C?s=r=0:1===C?(s=0,r=x-k):(s=C-2,r=f(d(a(e),0),x-k)),x+s-r>m)throw TypeError(p);for(u=l(g,r),b=0;b<r;b++)v=k+b,v in g&&c(u,b,g[v]);if(u.length=r,s<r){for(b=k;b<x-r;b++)v=b+r,h=b+s,v in g?g[h]=g[v]:delete g[h];for(b=x;b>x-r+s;b--)delete g[b-1]}else if(s>r)for(b=x-r;b>k;b--)v=b+r-1,h=b+s-1,v in g?g[h]=g[v]:delete g[h];for(b=0;b<s;b++)g[b+k]=arguments[b+2];return g.length=x-r+s,u}})},ace4:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-perfect-scrollbar",{attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[s("div",{staticClass:"pt-0 spaced-content pb-0"},t._l(t.data,(function(e,r){return s("div",{key:"contact"+r,staticClass:"d-flex flex-row mb-3 border-bottom pb-3"},[s("a",{staticClass:"d-flex",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.selectContact(e.id)}}},[s("img",{staticClass:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",attrs:{alt:e.title,src:e.img}}),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1 min-width-zero"},[s("div",{staticClass:"pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},[s("div",{staticClass:"min-width-zero"},[s("p",{staticClass:" mb-0 truncate"},[t._v(t._s(e.username))])])])])])])})),0)])},n=[],a={props:["data"],methods:{selectContact:function(t){this.$emit("select-contact",t)}}},i=a,o=s("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},e1da:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",[s("b-colxx",{attrs:{xxs:"12"}},[s("h1",[t._v(t._s(t.currentUser.profile.anket.name))]),t._v(" "),s("piaf-breadcrumb"),t._v(" "),s("b-row",[s("b-colxx",{staticClass:"mb-5",attrs:{xxs:"12"}},[s("b-card",[s("img",{attrs:{width:"100%",src:"/assets/img/profile-title-img.jpg",alt:"title"}})])],1),t._v(" "),s("b-colxx",{staticClass:"col-left",attrs:{xxs:"12",lg:"5",xl:"4"}},[s("single-lightbox",{attrs:{thumb:t.currentUser.profile.picture,large:t.currentUser.profile.picture,"class-name":"img-thumbnail card-img social-profile-img"}}),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[s("b-card-body",[s("div",{staticClass:"text-center pt-4"},[s("p",{staticClass:"list-item-heading pt-2"},[t._v(t._s(t.currentUser.profile.anket.name))])]),t._v(" "),s("p",{staticClass:"mb-3"},[t._v("\r\n                                    "+t._s(t.currentUser.profile.info)+"\r\n                                ")]),t._v(" "),s("p",{staticClass:"text-muted text-small mb-2"},[t._v(t._s(t.$t("pages.location")))]),t._v(" "),s("p",{staticClass:"mb-3"},[t._v(t._s(t.currentUser.profile.anket.city))]),t._v(" "),s("p",{staticClass:"text-muted text-small mb-2"},[t._v(t._s(t.$t("menu.contact")))]),t._v(" "),s("div",{staticClass:"social-icons"},[s("ul",{staticClass:"list-unstyled list-inline"},[s("li",{staticClass:"list-inline-item"},[s("router-link",{attrs:{to:"#"}},[s("i",{staticClass:"simple-icon-social-facebook"})])],1),t._v(" "),s("li",{staticClass:"list-inline-item"},[s("router-link",{attrs:{to:"#"}},[s("i",{staticClass:"simple-icon-social-twitter"})])],1),t._v(" "),s("li",{staticClass:"list-inline-item"},[s("router-link",{attrs:{to:"#"}},[s("i",{staticClass:"simple-icon-social-instagram"})])],1)])])])],1)],1),t._v(" "),s("b-colxx",{staticClass:"col-right",attrs:{xxs:"12",lg:"7",xl:"8"}},[s("b-card",{staticClass:"mb-4",attrs:{title:t.$t("anket.title")}},[s("b-form",[s("b-row",[s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.name")}},[s("b-form-input",{attrs:{disabled:t.isEditMode,type:"text"},model:{value:t.currentUser.profile.anket.name,callback:function(e){t.$set(t.currentUser.profile.anket,"name",e)},expression:"currentUser.profile.anket.name"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"2"}},[s("b-form-group",{attrs:{label:t.$t("forms.age")}},[s("b-form-input",{attrs:{disabled:t.isEditMode,type:"number"},model:{value:t.currentUser.profile.anket.age,callback:function(e){t.$set(t.currentUser.profile.anket,"age",e)},expression:"currentUser.profile.anket.age"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"4"}},[s("b-form-group",{attrs:{label:t.$t("forms.city")}},[s("b-form-input",{attrs:{disabled:t.isEditMode},model:{value:t.currentUser.profile.anket.city,callback:function(e){t.$set(t.currentUser.profile.anket,"city",e)},expression:"currentUser.profile.anket.city"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"4"}},[s("b-form-group",{attrs:{label:t.$t("forms.sex")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,plaintext:"",options:["Мужской","Женский"],plain:""},model:{value:t.currentUser.profile.anket.sex,callback:function(e){t.$set(t.currentUser.profile.anket,"sex",e)},expression:"currentUser.profile.anket.sex"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"4"}},[s("b-form-group",{attrs:{label:t.$t("forms.maritalStatus")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Замужем/женат","В отношениях","Свободен/свободна"],plain:""},model:{value:t.currentUser.profile.anket.maritalStatus,callback:function(e){t.$set(t.currentUser.profile.anket,"maritalStatus",e)},expression:"currentUser.profile.anket.maritalStatus"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"4"}},[s("b-form-group",{attrs:{label:t.$t("forms.children")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Есть","Нет"],plain:""},model:{value:t.currentUser.profile.anket.children,callback:function(e){t.$set(t.currentUser.profile.anket,"children",e)},expression:"currentUser.profile.anket.children"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.RhythmOfLife")}},[s("b-form-input",{attrs:{disabled:t.isEditMode},model:{value:t.currentUser.profile.anket.RhythmOfLife,callback:function(e){t.$set(t.currentUser.profile.anket,"RhythmOfLife",e)},expression:"currentUser.profile.anket.RhythmOfLife"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.hobbies")}},[s("b-form-input",{attrs:{disabled:t.isEditMode},model:{value:t.currentUser.profile.anket.hobbies,callback:function(e){t.$set(t.currentUser.profile.anket,"hobbies",e)},expression:"currentUser.profile.anket.hobbies"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.perfectTripForYou")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Моря-океаны (пляжный отдых)","Экскурсионный туризм","Шоппинг-туризм","Лечебный отдых","Экстремальный отдых (рафтинг, виндсерфинг, дайвинг, сафари)."],plain:""},model:{value:t.currentUser.profile.anket.perfectTripForYou,callback:function(e){t.$set(t.currentUser.profile.anket,"perfectTripForYou",e)},expression:"currentUser.profile.anket.perfectTripForYou"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.eatingHabits")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Русская кухня (пельмени, борщ, блины)","Японская кухня (суши и роллы)","Итальянская кухня (паста, пицца, тирамису)","Американская кухня (хот-доги, бургеры, фри)","Вегетарианец!"],plain:""},model:{value:t.currentUser.profile.anket.eatingHabits,callback:function(e){t.$set(t.currentUser.profile.anket,"eatingHabits",e)},expression:"currentUser.profile.anket.eatingHabits"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.attitudeToAlcohol")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Негативное (точно не буду)","Нейтральное(в хорошей компании буду)","Положительное (буду)"],plain:""},model:{value:t.currentUser.profile.anket.attitudeToAlcohol,callback:function(e){t.$set(t.currentUser.profile.anket,"attitudeToAlcohol",e)},expression:"currentUser.profile.anket.attitudeToAlcohol"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.favoriteMusic")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Поп","Рок","Хип-хоп","Рэп","Электронная музыка","Джаз"],plain:""},model:{value:t.currentUser.profile.anket.favoriteMusic,callback:function(e){t.$set(t.currentUser.profile.anket,"favoriteMusic",e)},expression:"currentUser.profile.anket.favoriteMusic"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.haveAnyPets")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Собака","Кошка","Грызун","Птица","Рептилии","Не люблю животны"],plain:""},model:{value:t.currentUser.profile.anket.haveAnyPets,callback:function(e){t.$set(t.currentUser.profile.anket,"haveAnyPets",e)},expression:"currentUser.profile.anket.haveAnyPets"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.valuesLife")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Профессиональная карьера","Семья","Друзья","Материальное благополучие","Здоровье","Репутация и статус в обществе","Любовь","Образование"],plain:""},model:{value:t.currentUser.profile.anket.valuesLife,callback:function(e){t.$set(t.currentUser.profile.anket,"valuesLife",e)},expression:"currentUser.profile.anket.valuesLife"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.attractYouMore")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,options:["Ум","Доброта","Чувство юмора","Уверенность в себе","Целеустремленность","Отзывчивость","Инициативность","Трудолюбие","Терпеливость","Верность","Пунктуальность","Внимательнсть","Смелость","Жизнерадостность"],plain:""},model:{value:t.currentUser.profile.anket.attractYouMore,callback:function(e){t.$set(t.currentUser.profile.anket,"attractYouMore",e)},expression:"currentUser.profile.anket.attractYouMore"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.pushYouStronger")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,plain:"",options:["Глупость","Жадность","Лицемерие","Эгоизм","Грубость","Чрезмерная серьезность","Легкомысленность","Конфликтность","Вспыльчивость","Пассивность","Обидчивость","Завистливость","Неряшливость"]},model:{value:t.currentUser.profile.anket.pushYouStronger,callback:function(e){t.$set(t.currentUser.profile.anket,"pushYouStronger",e)},expression:"currentUser.profile.anket.pushYouStronger"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.mostCriticalAnotherPerson")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,plain:"",options:["Курение","Употребление алкоголя","Медлительность","Непунктуальность","Молчаливость","Пессимизм","Суетливость","Болтливость"]},model:{value:t.currentUser.profile.anket.mostCriticalAnotherPerson,callback:function(e){t.$set(t.currentUser.profile.anket,"mostCriticalAnotherPerson",e)},expression:"currentUser.profile.anket.mostCriticalAnotherPerson"}})],1)],1),t._v(" "),s("b-colxx",{attrs:{sm:"6"}},[s("b-form-group",{attrs:{label:t.$t("forms.qualitiesMostPronounced")}},[s("b-form-select",{attrs:{disabled:t.isEditMode,plain:"",options:["Креативность","Ответственность","Коммуникабельность","Обидчивость","Стрессоустойчивость","Нерешительность","Аккуратность","Честность","Терпеливость","Доброта","Верность","Искренность"]},model:{value:t.currentUser.profile.anket.qualitiesMostPronounced,callback:function(e){t.$set(t.currentUser.profile.anket,"qualitiesMostPronounced",e)},expression:"currentUser.profile.anket.qualitiesMostPronounced"}})],1)],1)],1),t._v(" "),s("b-button",{staticClass:"mt-4",attrs:{disabled:!t.isEditMode,pill:"",variant:"primary"},on:{click:t.changeA}},[t._v("Изменить")]),t._v(" "),s("b-button",{staticClass:"mt-4",attrs:{disabled:t.isEditMode,variant:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("forms.save")))])],1)],1)],1)],1)],1)],1)},n=[],a=(s("a4d3"),s("4de4"),s("fb6a"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),i=s("2f62"),o=s("2762"),l=s("825e"),c=s("52e6"),u=s("fb83"),d=s("e259"),f=s("0818"),m=s("08d7"),p=s("157e"),b=s("ed1b"),v=s("1d64"),h=s("725c");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function x(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var k={components:{"single-lightbox":o["a"],"gallery-detail":l["a"],"gallery-profile":c["a"],"user-follow":u["a"],"recent-post":d["a"],"user-card-basic":f["a"],post:m["a"]},computed:x({},Object(i["c"])(["currentUser"])),data:function(){return{produtcs:p["a"].slice(0,15),recentPosts:b["a"],followers:v["a"].slice(0,5),friends:v["a"].slice(0),posts:h["a"],isEditMode:!0}},methods:x({},Object(i["b"])(["saveQuestionary"]),{save:function(){this.saveQuestionary({currentUser:this.currentUser})},changeA:function(){this.isEditMode=!this.isEditMode}}),mounted:function(){}},C=k,_=s("2877"),y=Object(_["a"])(C,r,n,!1,null,null,null);e["default"]=y.exports}}]);