(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{701:function(t,e,r){var content=r(781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("aca48e78",content,!0,{sourceMap:!1})},780:function(t,e,r){"use strict";r(701)},781:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,".retry-buttons[data-v-96e3aa60]{margin-top:10px}",""]),n.locals={},t.exports=n},896:function(t,e,r){"use strict";r.r(e);r(101);var n=r(2),o=r(28),c=r(29),l=r(49),d=r(48),h=r(24),f=r(9),v=(r(20),r(33),r(10),r(122),r(17)),y=r(92),m=r(248);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(l.a)(d,t);var e,r=_(d);function d(){var t;return Object(o.a)(this,d),(t=r.apply(this,arguments)).message=null,t.error=null,t.allowRetry=!0,t.loggingIn=null,t.joinDiscord=!1,t.redirecting=!1,t}return Object(c.a)(d,[{key:"mounted",value:function(){var t=this.$route.query,code=t.code,e=t.state,r=t.error,n=t.joindiscord;if(r)return this.$toast.error("An error occurred while logging in: "+(r||"Unknown error occurred")),this.$router.push("/");this.joinDiscord="true"===n,code?(this.loggingIn=!0,this.authenticate(code,e)):this.loggingIn=!1}},{key:"authenticate",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(code,e){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=localStorage.getItem("discord_oauth_state"),o=sessionStorage.getItem("auth_redirect")||this.$route.query.redirect||null,this.deleteState(),n&&e===n){t.next=7;break}return this.error="State does not match",t.abrupt("return");case 7:return this.message="Fetching token, please wait...",t.next=10,this.$store.dispatch("accounts/authorizeClient",code);case 10:return this.message="Success, fetching user information...",t.next=13,this.$store.dispatch("accounts/fetchClientInformation");case 13:return this.message="Success!",sessionStorage.removeItem("auth_redirect"),(c=this.$store.getters["nitropay/token"])&&Object(m.b)(c),t.next=19,this.$router.push(o?decodeURIComponent(o):"/users/@me");case 19:t.next=32;break;case 21:t.prev=21,t.t0=t.catch(0),console.error(t.t0),t.t1=t.t0.code,t.next="user_banned"===t.t1?27:30;break;case 27:return this.error="Account has been banned for <i>"+(null!==(r=t.t0.reason)&&void 0!==r?r:"no reason specified")+"</i>."+(t.t0.expiry?"<br>This ban will expire on <i>"+new Date(t.t0.expiry).toLocaleString()+"</i>.":""),this.allowRetry=!1,t.abrupt("break",32);case 30:return this.error="Failed to authenticate, please try again later.",t.abrupt("break",32);case 32:case"end":return t.stop()}}),t,this,[[0,21]])}))),function(t,r){return e.apply(this,arguments)})},{key:"redirect",value:function(){if(!this.redirecting){this.redirecting=!0;var t=this.$route.query.redirect,e="identify,guilds",r=this.generateState();localStorage.setItem("discord_oauth_state",r),t&&sessionStorage.setItem("auth_redirect",decodeURIComponent(t)),this.joinDiscord&&(e+=",guilds.join"),window.location.href="https://discord.com/api/oauth2/authorize?response_type=code&client_id=507970352501227523&scope="+e.split(",").join("%20")+"&redirect_uri="+encodeURIComponent("https://virtualdinerbot.com/login")+"&state="+r+"&prompt=none"}}},{key:"deleteState",value:function(){return localStorage.removeItem("discord_oauth_state")}},{key:"generateState",value:function(){var t=Object(y.a)(44);return localStorage.setItem("discord_oauth_state",t),t}}]),d}(v.Vue),k=x=w([Object(v.Component)({head:function(){return{title:"Login"}}})],x),j=(r(780),r(45)),component=Object(j.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("section",{staticClass:"section"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"box"},[null===t.loggingIn?e("div",[e("h3",{staticClass:"title is-3"},[e("b-icon",{staticClass:"fa-spin",attrs:{icon:"sync-alt"}}),t._v(" Logging in...\n          ")],1)]):!0===t.loggingIn?e("div",[t.error?e("b-notification",{staticClass:"has-text-weight-bold",attrs:{type:"is-danger",closable:!1}},[e("span",{domProps:{innerHTML:t._s(t.error||"[unknown error]")}}),t._v(" "),t.allowRetry?e("div",{staticClass:"buttons retry-buttons"},[e("b-button",{staticClass:"has-text-weight-bold",attrs:{"icon-left":"sync-alt",type:"is-warning"},on:{click:t.redirect}},[t._v("\n                Retry?\n              ")])],1):t._e()]):e("h3",{staticClass:"title is-3"},[t._v("\n            "+t._s(t.message||"Logging you in with Discord, please wait...")+"\n          ")])],1):e("div",[e("h3",{staticClass:"title is-3"},[t._v("\n            Logging you in with Discord, please wait...\n          ")]),t._v(" "),e("h5",{staticClass:"title is-5"},[e("b-icon",{attrs:{icon:"exclamation"}}),t._v("\n            By logging in, you agree to our "),e("nuxt-link",{attrs:{to:"/privacy"}},[t._v("\n              Privacy Policy\n            ")]),t._v(".\n          ")],1),t._v(" "),e("b-field",{scopedSlots:t._u([{key:"message",fn:function(){return[e("span",{staticClass:"has-text-warning"},[t._v("\n                This will automatically add you to the Virtual Diner Discord server without you needing to click the invite link. You can leave the server at any time.\n              ")])]},proxy:!0}])},[e("b-checkbox",{staticClass:"has-text-weight-bold",attrs:{type:"is-primary"},model:{value:t.joinDiscord,callback:function(e){t.joinDiscord=e},expression:"joinDiscord"}},[t._v("\n              Add me to the official Discord server!\n            ")])],1),t._v(" "),e("div",{staticClass:"buttons is-centered"},[e("b-button",{staticClass:"has-text-weight-bold",attrs:{type:"is-blurple","icon-left":"discord","icon-pack":"fab",size:"is-medium",loading:t.redirecting},on:{click:t.redirect}},[t._v("\n              Login with Discord\n            ")])],1)],1)])]),t._v(" "),e("Ad",{attrs:{id:"authentication"}})],1)])}),[],!1,null,"96e3aa60",null);e.default=component.exports;installComponents(component,{Ad:r(385).default})}}]);