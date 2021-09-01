(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[1],{138:function(e,t,n){},147:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p}));var r=n(6),a=n.n(r),c=n(10),i=n(3),s=n(9),u=n(42),o={data:{id:null,email:null,login:null,isAuth:!1},isFetching:!1,resultCode:0,messages:[""]},l=function(e,t,n,r){return{type:"SET-USER-DATA",data:{id:e,email:t,login:n,isAuth:r}}},d=function(e){return{type:"SET-TOGGLE-FETCHING",isFetching:e}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getAuthMe();case 2:n=e.sent,t(d(!1)),0===n.resultCode&&(r=n.data,c=r.id,i=r.login,u=r.email,t(l(c,i,u,!0)),t(d(!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var i,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.getLogin(e,t,n);case 2:0===(i=r.sent).data.resultCode?c(f()):(o=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(u.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getLogOut();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(i.a)(Object(i.a)({},e),{},{data:t.data});case"SET-TOGGLE-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});default:return e}}},228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),i=n.n(c),s=(n(138),n(11)),u=n(8),o=n.n(u),l=n(2),d=function(){return Object(l.jsxs)("nav",{className:o.a.nav,children:[Object(l.jsx)("div",{className:"".concat(o.a.item),children:Object(l.jsx)(s.b,{to:"/profile",activeClassName:o.a.activeLink,children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(s.b,{to:"/dialogs",activeClassName:o.a.activeLink,children:"Messages"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(s.b,{to:"/news",activeClassName:o.a.activeLink,children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(s.b,{to:"/music",activeClassName:o.a.activeLink,children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(s.b,{to:"/settings",activeClassName:o.a.activeLink,children:"Settings"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(s.b,{to:"/users",activeClassName:o.a.activeLink,children:"Users"})}),Object(l.jsx)("div",{className:o.a.itemFriends,children:Object(l.jsx)(s.b,{to:"/friends",activeClassName:o.a.activeLink,children:"Friends"})}),Object(l.jsx)("span",{className:o.a.itemFriends,children:Object(l.jsx)(s.b,{to:"/Abay",activeClassName:o.a.activeLink,children:" Aboy "})})]})},f=(n(147),n(7));var j=function(e){return Object(l.jsx)("div",{children:"News"})};var p=function(e){return Object(l.jsx)("div",{children:"Music"})};var b=function(e){return Object(l.jsx)("div",{children:"Settings"})};var h=function(){return Object(l.jsx)("div",{children:"Friends"})},O=n(3),g=n(54),v=n(55),m=n(63),x=n(61),w=n(50),E=n.n(w);var y=function(e){return Object(l.jsxs)("header",{className:E.a.header,children:[Object(l.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",alt:""}),Object(l.jsx)("div",{className:E.a.loginBlock,children:e.isAuth?Object(l.jsxs)("div",{children:[e.login," - ",Object(l.jsx)("button",{onClick:e.AuthLogOut,children:" Log out"})]}):Object(l.jsx)(s.b,{to:"/login",children:"Login"})})]})},S=n(25),L=n(22),T=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.AuthMe()}},{key:"render",value:function(){return Object(l.jsx)(y,Object(O.a)(Object(O.a)({},this.props),{},{login:this.props.login,isAuth:this.props.isAuth,setAuthUserData:this.props.setAuthUserData,setToggleFetching:this.props.setToggleFetching,AuthMe:this.props.AuthMe,AuthLogOut:this.props.AuthLogOut}))}}]),n}(a.a.Component),A=Object(S.b)((function(e){return{isAuth:e.auth.data.isAuth,login:e.auth.data.login}}),{setAuthUserData:L.e,setToggleFetching:L.f,AuthMe:L.c,AuthLogOut:L.a})(T),F=n(6),k=n.n(F),N=n(10),C=n(9),I={isInitialized:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-INITIALIZED":return Object(O.a)(Object(O.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(O.a)({},e)}},U=n(240),G=n(62),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,319))})),D=a.a.lazy((function(){return n.e(6).then(n.bind(null,318))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,317))})),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,316))}));var W=function(){var e=Object(S.c)(),t=Object(S.d)((function(e){return e.appPage.isInitialized}));return Object(r.useEffect)((function(){e(function(){var e=Object(N.a)(k.a.mark((function e(t){var n,r,a,c,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.getAuthMe();case 3:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.login,i=r.email,t(Object(L.e)(a,c,i,!0)),t({type:"IS-INITIALIZED",isInitialized:!0})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),t?Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(A,{}),Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"app-wrapper-content",children:[Object(l.jsxs)(a.a.Suspense,{fallback:Object(l.jsx)(G.a,{}),children:[Object(l.jsx)(f.b,{path:"/dialogs",render:function(){return Object(l.jsx)(_,{})}}),Object(l.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(M,{})}}),Object(l.jsx)(f.b,{path:"/users",render:function(){return Object(l.jsx)(D,{})}}),Object(l.jsx)(f.b,{path:"/login",render:function(){return Object(l.jsx)(R,{})}})]}),Object(l.jsx)(f.b,{path:"/news",component:j}),Object(l.jsx)(f.b,{path:"/music",component:p}),Object(l.jsx)(f.b,{path:"/settings",component:b}),Object(l.jsx)(f.b,{path:"/friends",render:function(){return Object(l.jsx)(h,{})}})]})]}):Object(l.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(l.jsx)(U.a,{})})},z=n(33),H=n(53),B=n(73),K={friends:[{id:1,name:"Abay"},{id:2,name:"Karik"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K;return e},J=n(80),Y=n(83),q=n(79),Q=n(84),V=Object(z.combineReducers)({profilePage:H.c,dialogPage:B.a,sideBarPage:Z,usersPage:J.c,auth:L.d,form:q.a,appPage:P}),X=Object(z.createStore)(V,Object(Q.composeWithDevTools)(Object(z.applyMiddleware)(Y.a)));window.store=window.store||{};var $=X;i.a.render(Object(l.jsx)(s.a,{basename:"/workproject",children:Object(l.jsx)(S.a,{store:$,children:Object(l.jsx)(W,{})})}),document.getElementById("root"))},50:function(e,t,n){e.exports={header:"Header_header__3kPns",loginBlock:"Header_loginBlock__2AcFW"}},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b}));var r=n(6),a=n.n(r),c=n(10),i=n(29),s=n(3),u=n(9),o="ADD-POST",l={message:[{id:1,message:"Hi, how are you?",likeCount:22},{id:2,message:"It is my first post",likeCount:11}],profile:null,status:""},d=function(e){return{type:o,posts:e}},f=function(e){return{type:"SET-STATUS",status:e}},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:"SET-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:3,message:t.posts,likeCount:0};return Object(s.a)(Object(s.a)({},e),{},{message:[].concat(Object(i.a)(e.message),[n])});case"SET-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"DEL-POST":return Object(s.a)(Object(s.a)({},e),{},{message:e.message.filter((function(e){return e.id!==t.id}))});default:return e}}},62:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Iphone-spinner-2.d3fbaf2b.gif",a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(29),a=n(3),c="SEND-MESSAGE",i={users:[{id:"1",name:"Damir"},{id:"2",name:"Abay"},{id:"3",name:"Kyama"},{id:"4",name:"Kaidar"},{id:"5",name:"Aday"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"What's up?"},{id:3,messages:"How's it going?"}]},s=function(e){return{type:c,dialog:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,messages:t.dialog}])});default:return e}}},8:function(e,t,n){e.exports={nav:"Navbar_nav__2LvmE",item:"Navbar_item__3Z4YA",activeLink:"Navbar_activeLink__E3EjW",itemFriends:"Navbar_itemFriends__ukrFy"}},80:function(e,t,n){"use strict";n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return v}));var r=n(6),a=n.n(r),c=n(10),i=n(29),s=n(3),u=n(9),o=function(e,t,n){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),n):e}))},l={users:[],pageCount:10,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowing:[]},d=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},j=function(e){return{type:"SET-PAGE",pageNumber:e}},p=function(e){return{type:"SET-TOGGLE-FETCHING",isFetching:e}},b=function(e,t){return{type:"SET-TOGGLE-FOLLOWING",id:t,isFetching:e}},h=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(p(!0)),r(j(e)),n.next=5,u.c.getUsers(e,t);case 5:c=n.sent,r(p(!1)),r({type:"SET-USERS",users:c.items}),r({type:"SET-TOTAL-USERS",totalUsersCount:c.totalCount}),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},O=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(c(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(n,e,u.c.FollowFriends.bind(u.c),d);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(n,e,u.c.UnFollowFriends.bind(u.c),f);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,{followed:!0})});case"UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,{followed:!1})});case"SET-USERS":return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case"SET-PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.pageNumber});case"SET-TOTAL-USERS":return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-TOGGLE-FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"SET-TOGGLE-FOLLOWING":return Object(s.a)(Object(s.a)({},e),{},{isFollowing:t.isFetching?[].concat(Object(i.a)(e.isFollowing),[t.id]):e.isFollowing.filter((function(e){return e!=t.id}))});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(82),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"1eaa5d66-d310-487c-a1d0-2fd59af6c2de"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileApi object."),s.getProfile(e)},FollowFriends:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},UnFollowFriends:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},i={getAuthMe:function(){return a.get("auth/me").then((function(e){return e.data}))},getLogin:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},getLogOut:function(){return a.delete("auth/login")}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}}}},[[228,2,3]]]);
//# sourceMappingURL=main.ee5047ad.chunk.js.map