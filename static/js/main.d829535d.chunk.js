(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__2LvmE",item:"Navbar_item__3Z4YA",activeLink:"Navbar_activeLink__E3EjW",itemFriends:"Navbar_itemFriends__ukrFy"}},149:function(e,t,n){},158:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(40),s=n.n(c),i=(n(149),n(13)),u=n(10),o=n.n(u),l=n(2),d=function(){return Object(l.jsxs)("nav",{className:o.a.nav,children:[Object(l.jsx)("div",{className:"".concat(o.a.item),children:Object(l.jsx)(i.b,{to:"/profile",activeClassName:o.a.activeLink,children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/dialogs",activeClassName:o.a.activeLink,children:"Messages"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/news",activeClassName:o.a.activeLink,children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/music",activeClassName:o.a.activeLink,children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/settings",activeClassName:o.a.activeLink,children:"Settings"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/users",activeClassName:o.a.activeLink,children:"Users"})}),Object(l.jsx)("div",{className:o.a.itemFriends,children:Object(l.jsx)(i.b,{to:"/friends",activeClassName:o.a.activeLink,children:"Friends"})}),Object(l.jsx)("span",{className:o.a.itemFriends,children:Object(l.jsx)(i.b,{to:"/Abay",activeClassName:o.a.activeLink,children:" Aboy "})})]})},f=(n(158),n(7));var p=function(e){return Object(l.jsx)("div",{children:"News"})};var b=function(e){return Object(l.jsx)("div",{children:"Music"})};var j=function(e){return Object(l.jsx)("div",{children:"Settings"})};var h=function(){return Object(l.jsx)("div",{children:"Friends"})},O=n(3),g=n(71),v=n(72),m=n(91),x=n(88),w=n(56),E=n.n(w);var y=function(e){return Object(l.jsxs)("header",{className:E.a.header,children:[Object(l.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",alt:""}),Object(l.jsx)("div",{className:E.a.loginBlock,children:e.isAuth?Object(l.jsxs)("div",{children:[e.login," - ",Object(l.jsx)("button",{onClick:e.AuthLogOut,children:" Log out"})]}):Object(l.jsx)(i.b,{to:"/login",children:"Login"})})]})},k=n(28),T=n(25),A=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.AuthMe()}},{key:"render",value:function(){return Object(l.jsx)(y,Object(O.a)(Object(O.a)({},this.props),{},{login:this.props.login,isAuth:this.props.isAuth,setAuthUserData:this.props.setAuthUserData,setToggleFetching:this.props.setToggleFetching,AuthMe:this.props.AuthMe,AuthLogOut:this.props.AuthLogOut}))}}]),n}(a.a.Component),S=Object(k.b)((function(e){return{isAuth:e.auth.data.isAuth,login:e.auth.data.login}}),{setAuthUserData:T.e,setToggleFetching:T.f,AuthMe:T.c,AuthLogOut:T.a})(A),F=n(5),L=n.n(F),C=n(9),N=n(8),I={isInitialized:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-INITIALIZED":return Object(O.a)(Object(O.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(O.a)({},e)}},U=n(69),G=n(252),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,383))})),D=a.a.lazy((function(){return n.e(7).then(n.bind(null,382))})),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,381))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,378))}));var H=function(){var e=Object(k.c)(),t=Object(k.d)((function(e){return e.appPage.isInitialized}));return Object(r.useEffect)((function(){e(function(){var e=Object(C.a)(L.a.mark((function e(t){var n,r,a,c,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.getAuthMe();case 3:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.login,s=r.email,t(Object(T.e)(a,c,s,!0)),t({type:"IS-INITIALIZED",isInitialized:!0})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),t?Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(S,{}),Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"app-wrapper-content",children:Object(l.jsxs)(f.d,{children:[Object(l.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(f.a,{to:"/profile"})}}),Object(l.jsxs)(a.a.Suspense,{fallback:Object(l.jsx)(U.a,{}),children:[Object(l.jsx)(f.b,{path:"/dialogs",render:function(){return Object(l.jsx)(_,{})}}),Object(l.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(R,{})}}),Object(l.jsx)(f.b,{path:"/users",render:function(){return Object(l.jsx)(D,{})}}),Object(l.jsx)(f.b,{path:"/login",render:function(){return Object(l.jsx)(M,{})}})]}),Object(l.jsx)(f.b,{path:"/news",component:p}),Object(l.jsx)(f.b,{path:"/music",component:b}),Object(l.jsx)(f.b,{path:"/settings",component:j}),Object(l.jsx)(f.b,{path:"/friends",render:function(){return Object(l.jsx)(h,{})}})]})})]}):Object(l.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(l.jsx)(G.a,{})})},W=n(37),z=n(60),B=n(82),J={friends:[{id:1,name:"Abay"},{id:2,name:"Karik"}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return e},Z=n(90),V=n(94),Y=n(89),q=n(95),Q=Object(W.combineReducers)({profilePage:z.c,dialogPage:B.a,sideBarPage:K,usersPage:Z.c,auth:T.d,form:Y.a,appPage:P}),X=Object(W.createStore)(Q,Object(q.composeWithDevTools)(Object(W.applyMiddleware)(V.a)));window.store=window.store||{};var $=X;s.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(k.a,{store:$,children:Object(l.jsx)(H,{})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b}));var r=n(5),a=n.n(r),c=n(9),s=n(3),i=n(8),u=n(48),o={data:{id:null,email:null,login:null,isAuth:!1},isFetching:!1,resultCode:0,messages:[""],captcha:""},l=function(e,t,n,r){return{type:"SET-USER-DATA",data:{id:e,email:t,login:n,isAuth:r}}},d=function(e){return{type:"SET-TOGGLE-FETCHING",isFetching:e}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getAuthMe();case 2:n=e.sent,t(d(!1)),0===n.resultCode&&(r=n.data,c=r.id,s=r.login,u=r.email,t(l(c,s,u,!0)),t(d(!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.getLogin(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?s(f()):10===o.data.resultCode?s(j()):(l=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(u.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getLogOut();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getCaptcha();case 2:200===(n=e.sent).status&&t({type:"GET-CAPTCHA",url:n.data.url});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(s.a)(Object(s.a)({},e),{},{data:t.data});case"SET-TOGGLE-FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"GET-CAPTCHA":return Object(s.a)(Object(s.a)({},e),{},{captcha:t.url});default:return e}}},56:function(e,t,n){e.exports={header:"Header_header__3kPns",loginBlock:"Header_loginBlock__2AcFW"}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"h",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(5),a=n.n(r),c=n(9),s=n(33),i=n(3),u=n(8),o="ADD-POST",l={message:[{id:1,message:"Hi, how are you?",likeCount:22},{id:2,message:"It is my first post",likeCount:11}],profile:{aboutMe:"",userId:16786,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"Uakhit Damir",contacts:{github:"",vk:"",facebook:"",instagram:"damir.gst",twitter:"",website:"",youtube:"",mainLink:""},photos:{large:"",small:""}},isOwner:!1,status:"",error:""},d=function(e){return{type:o,posts:e}},f=function(e){return{type:"SET-STATUS",status:e}},p=function(e){return{type:"SET-ERROR",error:e}},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:"SET-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(f(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.data.id,t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=10;break}if(null==c){t.next=8;break}return t.next=8,n(b(c));case 8:t.next=12;break;case 10:return n(p(s.data.messages[0])),t.abrupt("return",Promise.reject(s.data.messages[0]));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE-PHOTO",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:3,message:t.posts,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{message:[].concat(Object(s.a)(e.message),[n])});case"SET-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DEL-POST":return Object(i.a)(Object(i.a)({},e),{},{message:e.message.filter((function(e){return e.id!==t.id}))});case"IS-OWNER":return Object(i.a)(Object(i.a)({},e),{},{isOwner:t.value});case"SAVE-PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"SET-ERROR":return Object(i.a)(Object(i.a)({},e),{},{error:t.error});default:return e}}},69:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Iphone-spinner-2.d3fbaf2b.gif",a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(93),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"1eaa5d66-d310-487c-a1d0-2fd59af6c2de"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileApi object."),i.getProfile(e)},FollowFriends:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},UnFollowFriends:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={getAuthMe:function(){return a.get("auth/me").then((function(e){return e.data}))},getLogin:function(e,t,n,r){return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},getLogOut:function(){return a.delete("auth/login")},getCaptcha:function(){return a.get("security/get-captcha-url")}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},saveProfile:function(e){return a.put("profile",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-type":"mulitpart/form-data"}})}}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(33),a=n(3),c="SEND-MESSAGE",s={users:[{id:"1",name:"Damir"},{id:"2",name:"Abay"},{id:"3",name:"Kyama"},{id:"4",name:"Kaidar"},{id:"5",name:"Aday"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"What's up?"},{id:3,messages:"How's it going?"}]},i=function(e){return{type:c,dialog:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,messages:t.dialog}])});default:return e}}},90:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return v}));var r=n(5),a=n.n(r),c=n(9),s=n(33),i=n(3),u=n(8),o=function(e,t,n){return e.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),n):e}))},l={users:[],pageCount:10,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowing:[]},d=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET-PAGE",pageNumber:e}},b=function(e){return{type:"SET-TOGGLE-FETCHING",isFetching:e}},j=function(e,t){return{type:"SET-TOGGLE-FOLLOWING",id:t,isFetching:e}},h=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(b(!0)),r(p(e)),n.next=5,u.c.getUsers(e,t);case 5:c=n.sent,r(b(!1)),r({type:"SET-USERS",users:c.items}),r({type:"SET-TOTAL-USERS",totalUsersCount:c.totalCount}),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},O=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(c(n)),t(j(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(n,e,u.c.FollowFriends.bind(u.c),d);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(n,e,u.c.UnFollowFriends.bind(u.c),f);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,{followed:!1})});case"SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.pageNumber});case"SET-TOTAL-USERS":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-TOGGLE-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"SET-TOGGLE-FOLLOWING":return Object(i.a)(Object(i.a)({},e),{},{isFollowing:t.isFetching?[].concat(Object(s.a)(e.isFollowing),[t.id]):e.isFollowing.filter((function(e){return e!=t.id}))});default:return e}}}},[[239,2,3]]]);
//# sourceMappingURL=main.d829535d.chunk.js.map