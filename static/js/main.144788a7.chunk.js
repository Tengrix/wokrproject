(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[2],{10:function(e,t,n){e.exports={nav:"Navbar_nav__2LvmE",item:"Navbar_item__3Z4YA",activeLink:"Navbar_activeLink__E3EjW",itemFriends:"Navbar_itemFriends__ukrFy"}},145:function(e,t,n){},154:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(40),s=n.n(c),i=(n(145),n(13)),u=n(10),o=n.n(u),l=n(2),d=a.a.memo((function(){return Object(l.jsxs)("nav",{className:o.a.nav,children:[Object(l.jsx)("div",{className:"".concat(o.a.item),children:Object(l.jsx)(i.b,{to:"/profile",activeClassName:o.a.activeLink,children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/dialogs",activeClassName:o.a.activeLink,children:"Messages"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/news",activeClassName:o.a.activeLink,children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/music",activeClassName:o.a.activeLink,children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/settings",activeClassName:o.a.activeLink,children:"Settings"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(i.b,{to:"/users",activeClassName:o.a.activeLink,children:"Users"})}),Object(l.jsx)("div",{className:o.a.itemFriends,children:Object(l.jsx)(i.b,{to:"/friends",activeClassName:o.a.activeLink,children:"Friends"})}),Object(l.jsx)("span",{className:o.a.itemFriends,children:Object(l.jsx)(i.b,{to:"/Abay",activeClassName:o.a.activeLink,children:" Aboy "})})]})})),f=(n(154),n(8));var b=function(e){return Object(l.jsx)("div",{children:"News"})};var p=function(e){return Object(l.jsx)("div",{children:"Music"})};var j=function(e){return Object(l.jsx)("div",{children:"Settings"})},O=a.a.memo((function(){return Object(l.jsx)("div",{children:"Friends"})})),h=n(25),g=n(5),v=n.n(g),m=n(9),x=n(3),S=n(30),w={isInitialized:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-INITIALIZED":return Object(x.a)(Object(x.a)({},e),{},{isInitialized:!0});default:return Object(x.a)({},e)}},y=function(){return{type:"IS-INITIALIZED"}},T=n(62),k=n(248),F=n(56),N=n.n(F),L=a.a.memo((function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.auth.data})),n=t.isAuth,a=t.login;Object(r.useEffect)((function(){e(Object(S.c)())}),[]);return Object(l.jsxs)("header",{className:N.a.header,children:[Object(l.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",alt:""}),Object(l.jsx)("div",{className:N.a.loginBlock,children:n?Object(l.jsxs)("div",{children:[a," - ",Object(l.jsx)("button",{onClick:function(){e(Object(S.a)())},children:" Log out"})]}):Object(l.jsx)(i.b,{to:"/login",children:"Login"})})]})})),C=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,379))})),P=a.a.lazy((function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,377))})),A=a.a.lazy((function(){return Promise.all([n.e(1),n.e(5),n.e(9)]).then(n.bind(null,378))})),I=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,374))}));var G=function(){console.log("Dialogs");var e=Object(h.c)(),t=Object(h.d)((function(e){return e.appPage.isInitialized}));return Object(r.useEffect)((function(){e(function(){var e=Object(m.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(Object(S.c)());case 3:t(y()),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())}),[]),t?Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(L,{}),Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"app-wrapper-content",children:Object(l.jsxs)(f.d,{children:[Object(l.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(f.a,{to:"/profile"})}}),Object(l.jsxs)(a.a.Suspense,{fallback:Object(l.jsx)(T.a,{}),children:[Object(l.jsx)(f.b,{path:"/dialogs",render:function(){return Object(l.jsx)(C,{})}}),Object(l.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(A,{})}}),Object(l.jsx)(f.b,{path:"/users",render:function(){return Object(l.jsx)(P,{title:"Samurais"})}}),Object(l.jsx)(f.b,{path:"/login",render:function(){return Object(l.jsx)(I,{})}})]}),Object(l.jsx)(f.b,{path:"/news",component:b}),Object(l.jsx)(f.b,{path:"/music",component:p}),Object(l.jsx)(f.b,{path:"/settings",component:j}),Object(l.jsx)(f.b,{path:"/friends",render:function(){return Object(l.jsx)(O,{})}})]})})]}):Object(l.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(l.jsx)(k.a,{})})},U=n(38),R=n(61),_=n(80),D={friends:[{id:1,name:"Abay"},{id:2,name:"Karik"}]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return e},W=n(87),M=n(90),z=n(86),B=n(91),J=Object(U.combineReducers)({profilePage:R.b,dialogPage:_.a,sideBarPage:H,usersPage:W.c,auth:S.d,form:z.a,appPage:E}),K=Object(U.createStore)(J,Object(B.composeWithDevTools)(Object(U.applyMiddleware)(M.a)));window.store=window.store||{};var Z=K;s.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(h.a,{store:Z,children:Object(l.jsx)(G,{})})}),document.getElementById("root"))},30:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return j}));var r=n(5),a=n.n(r),c=n(9),s=n(3),i=n(7),u=n(49),o={data:{id:null,email:null,login:null,isAuth:!1},isFetching:!1,resultCode:0,messages:[""],captcha:""},l=function(e,t,n,r){return{type:"SET-USER-DATA",data:{id:e,email:t,login:n,isAuth:r}}},d=function(e){return{type:"SET-TOGGLE-FETCHING",isFetching:e}},f=function(e){return{type:"GET-CAPTCHA",url:e}},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getAuthMe();case 2:n=e.sent,t(d(!1)),n.resultCode===i.a.Success&&(r=n.data,c=r.id,s=r.login,u=r.email,t(l(c,s,u,!0)),t(d(!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.getLogin(e,t,n,r);case 2:if((o=a.sent).data.resultCode!==i.a.Success){a.next=8;break}return a.next=6,s(b());case 6:a.next=15;break;case 8:if(o.data.resultCode!==i.a.InvalidSymbols){a.next=13;break}return a.next=11,s(O());case 11:a.next=15;break;case 13:l=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(u.a)("login",{_error:l}));case 15:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getLogOut();case 2:0===e.sent.data.resultCode&&(t(l(null,null,null,!1)),t(d(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getCaptcha();case 2:200===(n=e.sent).status&&t(f(n.data.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(s.a)(Object(s.a)({},e),{},{data:t.data});case"SET-TOGGLE-FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"GET-CAPTCHA":return Object(s.a)(Object(s.a)({},e),{},{captcha:t.url});default:return e}}},56:function(e,t,n){e.exports={header:"Header_header__3kPns",loginBlock:"Header_loginBlock__2AcFW"}},61:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return j}));var r=n(5),a=n.n(r),c=n(9),s=n(33),i=n(3),u=n(7),o={message:[{id:1,message:"Hi, how are you?",likeCount:22},{id:2,message:"It is my first post",likeCount:11}],profile:{aboutMe:"",userId:16786,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"Uakhit Damir",contacts:{github:"",vk:"",facebook:"",instagram:"damir.gst",twitter:"",website:"",youtube:"",mainLink:""},photos:{large:"",small:""}},isOwner:!1,status:"",error:"",setToggle:!1},l={addPost:function(e){return{type:"ADD-POST",posts:e}},setProfile:function(e){return{type:"SET-PROFILE",profile:e}},setStatus:function(e){return{type:"SET-STATUS",status:e}},deletePost:function(e){return{type:"DEL-POST",id:e}},setToggleFetching:function(e){return{type:"IS-FETCHING",value:e}},isOwner:function(e){return{type:"IS-OWNER",value:e}},successSavePhoto:function(e){return{type:"SAVE-PHOTO",photos:e}},setError:function(e){return{type:"SET-ERROR",error:e}}},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(l.setToggleFetching(!1)),t.prev=1,t.next=4,u.c.getProfile(e);case 4:r=t.sent,n(l.setProfile(r.data)),n(l.setToggleFetching(!0)),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(l.setStatus(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:(r=t.sent).data.resultCode===u.a.Success?n(l.setStatus(e)):console.log(r.data.messages[0]);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.data.id,t.next=3,u.c.saveProfile(e);case 3:if((s=t.sent).data.resultCode!==u.a.Success){t.next=10;break}if(null==c){t.next=8;break}return t.next=8,n(d(c));case 8:t.next=12;break;case 10:return n(l.setError(s.data.messages[0])),t.abrupt("return",Promise.reject(s.data.messages[0]));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.savePhoto(e);case 2:(r=t.sent).data.resultCode===u.a.Success&&n(l.successSavePhoto(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.posts,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{message:[].concat(Object(s.a)(e.message),[n])});case"SET-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DEL-POST":return Object(i.a)(Object(i.a)({},e),{},{message:e.message.filter((function(e){return e.id!==t.id}))});case"IS-OWNER":return Object(i.a)(Object(i.a)({},e),{},{isOwner:t.value});case"SAVE-PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"SET-ERROR":return Object(i.a)(Object(i.a)({},e),{},{error:t.error});case"IS-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{setToggle:t.value});default:return e}}},62:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Iphone-spinner-2.d3fbaf2b.gif",a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},7:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r,a=n(89),c=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"1eaa5d66-d310-487c-a1d0-2fd59af6c2de"}}),s={getUsers:function(e,t,n,r){return c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileApi object."),u.getProfile(e)},FollowFriends:function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))},UnFollowFriends:function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))}},i={getAuthMe:function(){return c.get("auth/me").then((function(e){return e.data}))},getLogin:function(e,t,n,r){return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},getLogOut:function(){return c.delete("auth/login")},getCaptcha:function(){return c.get("security/get-captcha-url")}},u={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/".concat(e))},updateStatus:function(e){return c.put("profile/status",{status:e})},saveProfile:function(e){return c.put("profile",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-type":"mulitpart/form-data"}})}};!function(e){e[e.Success=0]="Success",e[e.Fail=1]="Fail",e[e.InvalidSymbols=10]="InvalidSymbols"}(r||(r={}))},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(33),a=n(3),c={users:[{id:"1",name:"Damir"},{id:"2",name:"Abay"},{id:"3",name:"Kyama"},{id:"4",name:"Kaidar"},{id:"5",name:"Aday"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"What's up?"},{id:3,messages:"How's it going?"}]},s={sendMessage:function(e){return{type:"SEND-MESSAGE",dialog:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,messages:t.dialog}])});default:return e}}},87:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return S}));var r=n(5),a=n.n(r),c=n(9),s=n(33),i=n(3),u=n(7),o=function(e,t,n){return e.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),n):e}))},l={users:[],pageCount:10,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowing:[],filter:{searchingName:"",isFriend:null}},d=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},b=function(e){return{type:"SET-USERS",users:e}},p=function(e){return{type:"SET-PAGE",pageNumber:e}},j=function(e){return{type:"SET-TOTAL-USERS",totalUsersCount:e}},O=function(e){return{type:"SET-TOGGLE-FETCHING",isFetching:e}},h=function(e,t){return{type:"SET-TOGGLE-FOLLOWING",id:t,isFetching:e}},g=function(e){return{type:"SEARCH-USER",payload:e}},v=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(O(!0)),c(p(e)),c(g(n)),r.next=6,u.d.getUsers(e,t,n.searchingName,n.isFriend);case 6:s=r.sent,c(O(!1)),c(b(s.items)),c(j(s.totalCount)),r.next=14;break;case 12:r.prev=12,r.t0=r.catch(0);case 14:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},m=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===u.a.Success&&t(c(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(n,e,u.d.FollowFriends.bind(u.d),d);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(n,e,u.d.UnFollowFriends.bind(u.d),f);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,{followed:!1})});case"SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.pageNumber});case"SET-TOTAL-USERS":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-TOGGLE-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"SET-TOGGLE-FOLLOWING":return Object(i.a)(Object(i.a)({},e),{},{isFollowing:t.isFetching?[].concat(Object(s.a)(e.isFollowing),[t.id]):e.isFollowing.filter((function(e){return e!=t.id}))});case"SEARCH-USER":return Object(i.a)(Object(i.a)({},e),{},{filter:t.payload});default:return e}}}},[[235,3,4]]]);
//# sourceMappingURL=main.144788a7.chunk.js.map