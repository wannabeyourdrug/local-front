(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~chat"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1798:function(e,t,n){"use strict";var s=n("7e41"),i=n.n(s);i.a},"7db0":function(e,t,n){"use strict";var s=n("23e7"),i=n("b727").find,a=n("44d2"),l="find",r=!0;l in[]&&Array(1)[l]((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(l)},"7e41":function(e,t,n){},"841c":function(e,t,n){"use strict";var s=n("d784"),i=n("825a"),a=n("1d80"),l=n("129f"),r=n("14c3");s("search",1,(function(e,t,n){return[function(t){var n=a(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n):new RegExp(t)[e](String(n))},function(e){var s=n(t,e,this);if(s.done)return s.value;var a=i(e),c=String(this),u=a.lastIndex;l(u,0)||(a.lastIndex=0);var o=r(a,c);return l(a.lastIndex,u)||(a.lastIndex=u),null===o?-1:o.index}]}))},"8ca3":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar fixed-top"},[s("div",{staticClass:"d-flex align-items-center navbar-left"},[s("a",{staticClass:"menu-button d-none d-md-block",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeSideMenuStatus({step:e.menuClickCount+1,classNames:e.menuType,selectedMenuHasSubItems:e.selectedMenuHasSubItems})}}},[s("menu-icon")],1),e._v(" "),s("a",{staticClass:"menu-button-mobile d-xs-block d-sm-block d-md-none",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeSideMenuForMobile(e.menuType)}}},[s("mobile-menu-icon")],1)]),e._v(" "),s("div",{staticClass:"navbar-right"},[s("div",{staticClass:"d-none d-md-inline-block align-middle mr-3"},[s("switches",{staticClass:"vue-switcher-small",attrs:{id:"tool-mode-switch",theme:"custom",color:"primary"},model:{value:e.isDarkActive,callback:function(t){e.isDarkActive=t},expression:"isDarkActive"}}),e._v(" "),s("b-tooltip",{attrs:{target:"tool-mode-switch",placement:"left",title:"Dark Mode"}})],1),e._v(" "),s("div",{staticClass:"header-icons d-inline-block align-middle"},[s("div",{staticClass:"position-relative d-inline-block"},[s("b-dropdown",{attrs:{variant:"empty",size:"sm",right:"","toggle-class":"header-icon notificationButton","menu-class":"position-absolute mt-3 notificationDropdown","no-caret":""}},[s("template",{slot:"button-content"},[s("i",{staticClass:"simple-icon-bell"})])],2)],1),e._v(" "),s("div",{staticClass:"position-relative d-none d-sm-inline-block"},[s("div",{staticClass:"btn-group"},[s("b-button",{staticClass:"header-icon btn-sm",attrs:{variant:"empty"},on:{click:e.toggleFullScreen}},[s("i",{class:{"d-inline-block":!0,"simple-icon-size-actual":e.fullScreen,"simple-icon-size-fullscreen":!e.fullScreen}})])],1)])]),e._v(" "),s("div",{staticClass:"user d-inline-block"},[s("b-dropdown",{staticClass:"dropdown-menu-right",attrs:{right:"",variant:"empty","toggle-class":"p-0","menu-class":"mt-3","no-caret":""}},[s("template",{slot:"button-content"},[s("span",{staticClass:"name mr-1"},[e._v(e._s(e.currentUser.profile.anket.name))]),e._v(" "),s("span",[e.currentUser.profile.picture?s("img",{attrs:{alt:e.currentUser.profile.anket.name,src:e.currentUser.profile.picture}}):s("img",{attrs:{alt:e.currentUser.profile.anket.name,src:n("9024")}})])]),e._v(" "),s("b-dropdown-item",{on:{click:e.goToProfile}},[e._v("Профиль")]),e._v(" "),s("b-dropdown-divider"),e._v(" "),s("b-dropdown-item",{on:{click:e.logout}},[e._v("Выйти")])],2)],1)])])},i=[],a=(n("a4d3"),n("99af"),n("4de4"),n("c975"),n("e439"),n("dbb4"),n("b64b"),n("5319"),n("841c"),n("159b"),n("ade3")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.classObject},[e.shouldShowLabel?n("span",{staticClass:"vue-switcher__label"},[e.label?n("span",{domProps:{textContent:e._s(e.label)}}):e._e(),e._v(" "),!e.label&&e.value?n("span",{domProps:{textContent:e._s(e.textEnabled)}}):e._e(),e._v(" "),e.label||e.value?e._e():n("span",{domProps:{textContent:e._s(e.textDisabled)}})]):e._e(),e._v(" "),n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value},on:{change:e.trigger}}),e._v(" "),n("div")])},r=[],c={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(e){this.$emit("input",e.target.checked)}},computed:{classObject:function(){var e,t=this.color,n=this.value,s=this.theme,i=this.typeBold,l=this.disabled;return e={"vue-switcher":!0},Object(a["a"])(e,"vue-switcher--unchecked",!n),Object(a["a"])(e,"vue-switcher--disabled",l),Object(a["a"])(e,"vue-switcher--bold",i),Object(a["a"])(e,"vue-switcher--bold--unchecked",i&&!n),Object(a["a"])(e,"vue-switcher-theme--".concat(s),t),Object(a["a"])(e,"vue-switcher-color--".concat(t),t),e},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}},u=c,o=(n("1798"),n("2877")),d=Object(o["a"])(u,l,r,!1,null,null,null),h=d.exports,m=[{img:"/assets/img/profile-pic-l-2.jpg",title:"Joisse Kaycee just sent a new comment!",date:"09.04.2018 - 12:45",id:1},{img:"/assets/img/notification-thumb.jpg",title:"1 item is out of stock!",date:"09.04.2018 - 12:45",id:2},{img:"/assets/img/notification-thumb-2.jpg",title:"New order received! It is total $147,20.",date:"09.04.2018 - 12:45",id:3},{img:"/assets/img/notification-thumb-3.jpg",title:"3 items just added to wish list by a user!",date:"09.04.2018 - 12:45",id:4}],b=m,v=n("2f62"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[n("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}})])},f=[],g={},w=Object(o["a"])(g,p,f,!1,null,null,null),M=(w.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[n("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}})])}),S=[],_={},C=Object(o["a"])(_,M,S,!1,null,null,null),k=(C.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[n("path",{staticClass:"view-icon-svg",attrs:{d:"M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"}}),e._v(" "),n("path",{staticClass:"view-icon-svg",attrs:{d:"M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"}})])}),O=[],y={},x=Object(o["a"])(y,k,O,!1,null,null,null),H=(x.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("svg",{staticClass:"main",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17"}},[n("rect",{attrs:{x:"0.48",y:"0.5",width:"7",height:"1"}}),e._v(" "),n("rect",{attrs:{x:"0.48",y:"7.5",width:"7",height:"1"}}),e._v(" "),n("rect",{attrs:{x:"0.48",y:"15.5",width:"7",height:"1"}})]),e._v(" "),n("svg",{staticClass:"sub",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17"}},[n("rect",{attrs:{x:"1.56",y:"0.5",width:"16",height:"1"}}),e._v(" "),n("rect",{attrs:{x:"1.56",y:"7.5",width:"16",height:"1"}}),e._v(" "),n("rect",{attrs:{x:"1.56",y:"15.5",width:"16",height:"1"}})])])}),j=[],P={},I=Object(o["a"])(P,H,j,!1,null,null,null),E=I.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17"}},[n("rect",{attrs:{x:"0.5",y:"0.5",width:"25",height:"1"}}),e._v(" "),n("rect",{attrs:{x:"0.5",y:"7.5",width:"25",height:"1"}}),e._v(" "),n("rect",{attrs:{x:"0.5",y:"15.5",width:"25",height:"1"}})])},$=[],F={},A=Object(o["a"])(F,D,$,!1,null,null,null),T=A.exports,V=n("2b47"),N=n("ed08");function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={components:{"menu-icon":E,"mobile-menu-icon":T,switches:h},data:function(){return{selectedParentMenu:"",searchKeyword:"",isMobileSearch:!1,isSearchOver:!1,fullScreen:!1,menuHiddenBreakpoint:V["h"],searchPath:V["i"],localeOptions:V["g"],notifications:b,isDarkActive:!1}},methods:L({},Object(v["d"])(["changeSideMenuStatus","changeSideMenuForMobile"]),{},Object(v["b"])(["setLang","signOut"]),{search:function(){this.$router.push("".concat(this.searchPath,"?search=").concat(this.searchKeyword)),this.searchKeyword=""},searchClick:function(){window.innerWidth<this.menuHiddenBreakpoint?this.isMobileSearch?(this.search(),this.isMobileSearch=!1):this.isMobileSearch=!0:this.search()},handleDocumentforMobileSearch:function(){this.isSearchOver||(this.isMobileSearch=!1,this.searchKeyword="")},changeLocale:function(e,t){var n=Object(N["a"])().direction;t!==n&&Object(N["b"])(t),this.setLang(e)},logout:function(){var e=this;localStorage.clear(),this.signOut().then((function(){e.$router.push("/user/login")}))},goToProfile:function(){this.$router.push("/app/profile/social")},toggleFullScreen:function(){var e=this.isInFullScreen(),t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullScreen=!e},getThemeColor:function(){return localStorage.getItem("themeColor")?localStorage.getItem("themeColor"):V["c"]},isInFullScreen:function(){return document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement}}),computed:L({},Object(v["c"])({currentUser:"currentUser",menuType:"getMenuType",menuClickCount:"getMenuClickCount",selectedMenuHasSubItems:"getSelectedMenuHasSubItems"})),beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentforMobileSearch)},created:function(){var e=this.getThemeColor();this.isDarkActive=e.indexOf("dark")>-1},watch:{"$i18n.locale":function(e,t){t!==e&&this.$router.go(this.$route.path)},isDarkActive:function(e){var t=this.getThemeColor(),n=!1;e&&t.indexOf("light")>-1?(n=!0,t=t.replace("light","dark")):!e&&t.indexOf("dark")>-1&&(n=!0,t=t.replace("dark","light")),n&&(localStorage.setItem("themeColor",t),setTimeout((function(){window.location.reload()}),500))},isMobileSearch:function(e){e?document.addEventListener("click",this.handleDocumentforMobileSearch):document.removeEventListener("click",this.handleDocumentforMobileSearch)}}},Z=R,B=Object(o["a"])(Z,s,i,!1,null,null,null);t["a"]=B.exports},9024:function(e,t,n){e.exports=n.p+"assets/img/default_picture.1bdab980.jpg"},f9de:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar",on:{mouseenter:function(t){e.isMenuOver=!0},mouseleave:function(t){e.isMenuOver=!1},touchstart:function(t){e.isMenuOver=!0}}},[n("div",{staticClass:"main-menu"},[n("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[n("ul",{staticClass:"list-unstyled"},e._l(e.menuItems,(function(t,s){return n("li",{key:"parent_"+t.id,class:{active:e.selectedParentMenu===t.id&&""===e.viewingParentMenu||e.viewingParentMenu===t.id},attrs:{"data-flag":t.id}},[t.newWindow?n("a",{attrs:{href:t.to,rel:"noopener noreferrer",target:"_blank"}},[n("i",{class:t.icon}),e._v("\n                        "+e._s(e.$t(t.label))+"\n                    ")]):t.subs&&t.subs.length>0?n("a",{attrs:{href:"#"+t.to},on:{click:function(n){return n.preventDefault(),e.openSubMenu(n,t)}}},[n("i",{class:t.icon}),e._v("\n                        "+e._s(e.$t(t.label)))]):n("router-link",{attrs:{to:t.to},nativeOn:{click:function(n){return e.changeSelectedParentHasNoSubmenu(t.id)}}},[n("i",{class:t.icon}),e._v("\n                        "+e._s(e.$t(t.label)))])],1)})),0)])],1),e._v(" "),n("div",{staticClass:"sub-menu"},[n("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},e._l(e.menuItems,(function(t,s){return n("ul",{key:"sub_"+t.id,class:{"list-unstyled":!0,"d-block":e.selectedParentMenu===t.id&&""===e.viewingParentMenu||e.viewingParentMenu===t.id},attrs:{"data-parent":t.id}},e._l(t.subs,(function(t,i){return n("li",{class:{"has-sub-item":t.subs&&t.subs.length>0,active:e.$route.path.indexOf(t.to)>-1}},[t.newWindow?n("a",{attrs:{href:t.to,rel:"noopener noreferrer",target:"_blank"}},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(e.$t(t.label)))])]):t.subs&&t.subs.length>0?[n("b-link",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"menu_"+s+"_"+i,expression:"`menu_${itemIndex}_${subIndex}`"}],staticClass:"rotate-arrow-icon opacity-50",attrs:{variant:"link"}},[n("i",{staticClass:"simple-icon-arrow-down"}),e._v(" "),n("span",{staticClass:"d-inline-block"},[e._v(e._s(e.$t(t.label)))])]),e._v(" "),n("b-collapse",{attrs:{visible:"",id:"menu_"+s+"_"+i}},[n("ul",{staticClass:"list-unstyled third-level-menu"},e._l(t.subs,(function(t,a){return n("li",{key:"third_"+s+"_"+i+"_"+a,class:{"third-level-menu":!0,active:e.$route.path===t.to}},[t.newWindow?n("a",{attrs:{href:t.to,rel:"noopener noreferrer",target:"_blank"}},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(e.$t(t.label)))])]):n("router-link",{attrs:{to:t.to}},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(e.$t(t.label)))])])],1)})),0)])]:n("router-link",{attrs:{to:t.to}},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(e.$t(t.label)))])])],2)})),0)})),0)],1)])},i=[],a=(n("a4d3"),n("4de4"),n("7db0"),n("caad"),n("c975"),n("a15b"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("1276"),n("159b"),n("ade3")),l=n("2f62"),r=n("2b47"),c=[{id:"piaf",icon:"iconsminds-profile",label:"menu.profile",to:"/app/profile/social"},{id:"pages",icon:"iconsminds-file-clipboard-file---text",label:"menu.questionary",to:"/app/chat"},{id:"search",icon:"iconsminds-magnifi-glass",label:"menu.search",to:"/app/search"}],u=c;function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={data:function(){return{selectedParentMenu:"",isMenuOver:!1,menuItems:u,viewingParentMenu:""}},mounted:function(){this.selectMenu(),window.addEventListener("resize",this.handleWindowResize),document.addEventListener("click",this.handleDocumentClick),this.handleWindowResize()},beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentClick),window.removeEventListener("resize",this.handleWindowResize)},methods:d({},Object(l["d"])(["changeSideMenuStatus","addMenuClassname","changeSelectedMenuHasSubItems"]),{selectMenu:function(){var e=this.$route.path.split("/").filter((function(e){return""!==e}))[1];this.selectedParentMenu=void 0!==e||null!==e?e.toLowerCase():"dashboards",this.isCurrentMenuHasSubItem()},isCurrentMenuHasSubItem:function(){var e=this,t=this.menuItems.find((function(t){return t.id===e.selectedParentMenu})),n=!!(t&&t.subs&&t.subs.length>0);return n!=this.selectedMenuHasSubItems&&(n||this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:!1})),n},changeSelectedParentHasNoSubmenu:function(e){this.selectedParentMenu=e,this.viewingParentMenu=e,this.changeSelectedMenuHasSubItems(!1),this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:!1})},openSubMenu:function(e,t){var n=t.id,s=t.subs&&t.subs.length>0;if(this.changeSelectedMenuHasSubItems(s),s){var i=this.menuType?this.menuType.split(" ").filter((function(e){return""!==e})):"";i.includes("menu-mobile")?this.addMenuClassname({classname:"sub-show-temporary",currentClasses:this.menuType}):!i.includes("menu-sub-hidden")||2!==this.menuClickCount&&0!==this.menuClickCount?!i.includes("menu-hidden")||1!==this.menuClickCount&&3!==this.menuClickCount?!i.includes("menu-default")||i.includes("menu-sub-hidden")||1!==this.menuClickCount&&3!==this.menuClickCount||this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:s}):this.changeSideMenuStatus({step:2,classNames:this.menuType,selectedMenuHasSubItems:s}):this.changeSideMenuStatus({step:3,classNames:this.menuType,selectedMenuHasSubItems:s}),this.viewingParentMenu=n}else this.viewingParentMenu=n,this.selectedParentMenu=n,this.toggle()},handleDocumentClick:function(e){if(!this.isMenuOver){var t=!0,n=e.path||e.composedPath&&e.composedPath();n.map((function(e){"svg"!==e.nodeName&&"rect"!==e.nodeName&&void 0!==e.className&&e.className.indexOf("menu-button")>-1&&(t=!1)})),this.viewingParentMenu="",this.selectMenu(),!t&&this.selectedMenuHasSubItems||this.toggle()}},toggle:function(){var e=this.menuType.split(" ").filter((function(e){return""!==e}));e.includes("menu-sub-hidden")&&3===this.menuClickCount?this.changeSideMenuStatus({step:2,classNames:this.menuType,selectedMenuHasSubItems:this.selectedMenuHasSubItems}):(e.includes("menu-hidden")||e.includes("menu-mobile"))&&(1!==this.menuClickCount||this.selectedMenuHasSubItems)&&this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:this.selectedMenuHasSubItems})},handleWindowResize:function(e){if(!e||e.isTrusted){var t=this.getMenuClassesForResize(this.menuType);this.changeSideMenuStatus({step:0,classNames:t.join(" "),selectedMenuHasSubItems:this.selectedMenuHasSubItems})}},getMenuClassesForResize:function(e){var t=e.split(" ").filter((function(e){return""!==e})),n=window.innerWidth;return n<r["h"]?t.push("menu-mobile"):n<r["j"]?(t=t.filter((function(e){return"menu-mobile"!==e})),t.includes("menu-default")&&!t.includes("menu-sub-hidden")&&t.push("menu-sub-hidden")):(t=t.filter((function(e){return"menu-mobile"!==e})),t.includes("menu-default")&&t.includes("menu-sub-hidden")&&(t=t.filter((function(e){return"menu-sub-hidden"!==e})))),t}}),computed:d({},Object(l["c"])({menuType:"getMenuType",menuClickCount:"getMenuClickCount",selectedMenuHasSubItems:"getSelectedMenuHasSubItems"})),watch:{$route:function(e,t){if(e.path!==t.path){var n=e.path.split("/").filter((function(e){return""!==e}))[1];this.selectedParentMenu=void 0!==n||null!==n?n.toLowerCase():"dashboards",this.selectMenu(),this.toggle(),this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:this.selectedMenuHasSubItems}),window.scrollTo(0,top)}}}},m=h,b=n("2877"),v=Object(b["a"])(m,s,i,!1,null,null,null);t["a"]=v.exports}}]);