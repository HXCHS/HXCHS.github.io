(window.webpackJsonp=window.webpackJsonp||[]).push([[112,54,55],{621:function(t,e,r){"use strict";r.r(e);r(101);var n=r(28),o=r(29),c=r(49),l=r(48),f=r(24),d=r(9),v=(r(33),r(10),r(154),r(59),r(261),r(17));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).avatarError=!1,t}return Object(o.a)(r,[{key:"getAvatarURL",get:function(){var t;return null!==(t=this.user)&&void 0!==t&&t.avatar&&!this.avatarError?"https://cdn.discordapp.com/avatars/"+(this.user._id||this.user.id)+"/"+this.user.avatar+"."+this.avatarFormat+"?size="+this.size:"https://cdn.discordapp.com/embed/avatars/"+this.defaultAvatar+".png"}},{key:"altText",get:function(){return this.user?(this.user.displayName||this.user.username)+"'s Discord Avatar":"Default Discord Avatar"}},{key:"avatarFormat",get:function(){var t;return null!==(t=this.user)&&void 0!==t&&null!==(t=t.avatar)&&void 0!==t&&t.startsWith("a_")?"gif":"webp"}},{key:"defaultAvatar",get:function(){var t,e;return((BigInt((null===(t=this.user)||void 0===t?void 0:t._id)||(null===(e=this.user)||void 0===e?void 0:e.id))>>22n)%6n).toString()}}]),r}(v.Vue);y([Object(v.Prop)({type:Object,default:function(){return null},required:!1})],m.prototype,"user",void 0),y([Object(v.Prop)({type:Number,default:function(){return 128}})],m.prototype,"size",void 0),y([Object(v.Prop)({type:Boolean,default:function(){return!1}})],m.prototype,"draggable",void 0);var _=m=y([v.Component],m),O=r(45),component=Object(O.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("img",{staticClass:"is-rounded",attrs:{src:t.getAvatarURL,draggable:t.draggable,alt:t.altText},on:{error:function(e){t.avatarError=!0}}})}),[],!1,null,null,null);e.default=component.exports},622:function(t,e,r){var content=r(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("5dddbffa",content,!0,{sourceMap:!1})},625:function(t,e,r){"use strict";r(622)},626:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,".card-avatar[data-v-c1911eb4]{border-radius:50%;height:150px;-o-object-fit:cover;object-fit:cover;width:150px}.user-rank[data-v-c1911eb4]{margin-bottom:20px}.manage-profile-button[data-v-c1911eb4]{background-color:#ff3860;border-radius:20px;color:#fff;font-weight:700}.manage-profile-button[data-v-c1911eb4]:hover{background-color:#e61e4d}",""]),n.locals={},t.exports=n},628:function(t,e,r){"use strict";r.r(e);r(58);var n=r(28),o=r(29),c=r(49),l=r(48),f=r(24),d=r(9),v=(r(33),r(10),r(101),r(17)),h=r(263),y=r(213);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"self",get:function(){return this.$store.getters["accounts/user"]}},{key:"accountAge",get:function(){return Object(y.b)(Object(h.a)(this.user.id||this.user._id)).format("MMM DD, YYYY")}},{key:"rank",get:function(){var t;return this.$getHighestRank((null===(t=this.user)||void 0===t?void 0:t.ranks)||[])}},{key:"canManageProfile",get:function(){return this.$hasAnyPermissions(this.self,["UPDATE_USER_RANK","MANAGE_TEAMS","MANAGE_STAFF_REMOVALS","BAN_USERS","MANAGE_APPEALS"])}}]),r}(v.Vue);_([Object(v.Prop)({type:Object,required:!1,default:function(){}})],O.prototype,"user",void 0),_([Object(v.Prop)({type:Boolean,required:!1,default:!1})],O.prototype,"loading",void 0),_([Object(v.Prop)({type:Boolean,required:!1,default:!1})],O.prototype,"admin",void 0),_([Object(v.Prop)({type:Boolean,required:!1,default:function(){return!0}})],O.prototype,"viewProfile",void 0);var j=O=_([v.Component],O),P=(r(625),r(45)),component=Object(P.a)(j,(function(){var t,e,r,n=this,o=n._self._c;n._self._setupProxy;return o("div",[o("div",{staticClass:"card is-grey"},[o("div",{staticClass:"card-content"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left user-avatar"},[o("figure",{staticClass:"image is-128x128"},[n.loading?o("b-skeleton",{attrs:{circle:"",width:"128px",height:"128px"}}):o("UserAvatar",{attrs:{user:n.user,size:128}})],1),n._v(" "),n.rank?o("b-tag",{staticClass:"rank",style:{"background-color":n.$getRankColour(n.rank),color:n.$getRankTextColour(n.rank)}},[n._v("\n              "+n._s(n.rank.name)+"\n            ")]):n._e()],1),n._v(" "),o("div",{staticClass:"media-content"},[n.loading?o("b-skeleton",{attrs:{height:"110px"}}):[o("p",{staticClass:"is-size-4 has-text-weight-bold"},[n._v("\n                "+n._s(n.user.displayName||n.user.username)+"\n              ")]),n._v(" "),o("p",[o("b-tag",{attrs:{type:"is-info"}},[o("b-icon",{attrs:{icon:"clock"}}),n._v("\n                  "+n._s(n.accountAge)+"\n                ")],1),n._v(" "),null!==(t=n.user)&&void 0!==t&&t.ban&&n.$hasPermissions(n.self,"BAN_USERS")?o("b-tag",{attrs:{type:"is-danger"}},[o("b-icon",{attrs:{icon:"hammer"}}),n._v("\n                  Account is banned.\n                ")],1):n._e()],1),n._v(" "),null!==(e=n.user)&&void 0!==e&&null!==(e=e.information)&&void 0!==e&&e.biography?o("div",[o("p",[n._v(n._s(null===(r=n.user.information)||void 0===r?void 0:r.biography))])]):n._e(),n._v(" "),n.viewProfile||n.canManageProfile&&n.admin?o("div",{staticClass:"mt-5"},[n.viewProfile?o("b-button",{attrs:{tag:"nuxt-link",to:"/users/"+n.user._id,type:"is-primary","icon-left":"mouse",size:"is-small"}},[n._v("\n                  View Profile\n                ")]):n._e(),n._v(" "),n.admin&&n.canManageProfile?o("b-button",{attrs:{tag:"nuxt-link",to:"/users/"+n.user._id+"/manage",type:"is-primary","icon-left":"edit",size:"is-small"}},[n._v("\n                  Manage Profile\n                ")]):n._e()],1):n._e()]],2)])])])])}),[],!1,null,"c1911eb4",null);e.default=component.exports;installComponents(component,{UserAvatar:r(621).default})},703:function(t,e,r){var content=r(786);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("5061f5b0",content,!0,{sourceMap:!1})},785:function(t,e,r){"use strict";r(703)},786:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,".team-users{margin-bottom:.8em}.team-users:last-child{margin-bottom:0}",""]),n.locals={},t.exports=n},901:function(t,e,r){"use strict";r.r(e);var n=r(16);r(34),r(10),r(58),r(37),r(78),r(38),r(33),r(42),r(60);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(101);var l=r(2),f=r(28),d=r(29),v=r(49),h=r(48),y=r(24),m=r(9),_=(r(20),r(51),r(53),r(17));function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(y.a)(t);if(e){var o=Object(y.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},P=function(t){Object(v.a)(r,t);var e=O(r);function r(){return Object(f.a)(this,r),e.apply(this,arguments)}return Object(d.a)(r,[{key:"teams",get:function(){return this.$store.getters["users/team"]}}]),r}(_.Vue),k=P=j([Object(_.Component)({asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.error,e.prev=1,e.next=4,Promise.all([r.dispatch("ranks/getRanks"),r.dispatch("users/getTeam")]);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",n({statusCode:e.t0.statusCode,message:e.t0.message}));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},head:function(){return{title:"Team"}}})],P),R=(r(785),r(45)),component=Object(R.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"box"},[e("h4",{staticClass:"title is-4"},[e("b-icon",{attrs:{icon:"users"}}),t._v("\n        Team\n      ")],1),t._v(" "),e("h5",{staticClass:"subtitle"},[t._v("\n        A list of staff members who keep Virtual Diner running smoothly.\n      ")])]),t._v(" "),e("div",{staticClass:"box"},t._l(t.teams.filter((function(t){var e;return(null==t||null===(e=t.users)||void 0===e?void 0:e.length)>0})),(function(r,i){return e("div",{key:r._id,staticClass:"team-users"},[e("h4",{staticClass:"title is-4"},[t._v("\n          "+t._s(r.name)+"\n        ")]),t._v(" "),r.description?e("h5",{staticClass:"subtitle is-5"},[t._v("\n          "+t._s(r.description)+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"columns is-multiline"},t._l(r.users,(function(t){return e("div",{key:t._id,staticClass:"column is-one-third mb-4"},[e("nuxt-link",{attrs:{to:"/users/"+t._id}},[e("UserCard",{attrs:{user:c(c({id:t._id},t),{},{rank:r}),"view-profile":!1}})],1)],1)})),0),t._v(" "),(i+1)%3==0?e("Ad",{attrs:{id:"team-section-"+(i+1),mini:!0}}):t._e()],1)})),0),t._v(" "),e("Ad",{attrs:{id:"team"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UserCard:r(628).default,Ad:r(385).default})}}]);