(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[6],{243:function(n,t,e){"use strict";function r(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}e.d(t,"a",(function(){return r}))},249:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e(55);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,i=void 0;try{for(var u,s=n[Symbol.iterator]();!(r=(u=s.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return e}}(n,t)||Object(r.a)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},254:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(3),o=e(243),i=(e(0),e(7)),u=e(25),s=e(2),a=function(n){return{isAuth:n.auth.data.isAuth}};function c(n){return Object(u.b)(a)((function(t){var e=t.isAuth,u=Object(o.a)(t,["isAuth"]);return e?Object(s.jsx)(n,Object(r.a)({},u)):Object(s.jsx)(i.a,{to:"login"})}))}},255:function(n,t,e){"use strict";t.a=e.p+"static/media/51f6fb256629fc755b8870c801092942.22c31152.png"},317:function(n,t,e){n.exports={selectedPage:"Paginator_selectedPage__1niP5",paginator:"Paginator_paginator__3WUIh",pageNumber:"Paginator_pageNumber__1ctyn",btn:"Paginator_btn__18qU9"}},318:function(n,t,e){n.exports={img:"UsersApiComponent_img__hQbIU"}},327:function(n,t,e){"use strict";e.r(t);var r=e(61),o=e(62),i=e(80),u=e(77),s=e(0),a=e.n(s),c=e(25),l=e(79),f=e(249),p=e(317),g=e.n(p),d=e(2),h=function(n){for(var t=n.onPageChanged,e=n.totalItemsCount,r=n.pageCount,o=n.currentPage,i=n.portionSize,u=Math.ceil(e/r),a=[],c=1;c<=u;c++)a.push(c);var l=Math.ceil(u/i),p=Object(s.useState)(1),h=Object(f.a)(p,2),b=h[0],j=h[1],O=(b-1)*i+1,v=b*i;return Object(d.jsx)("div",{className:g.a.paginator,children:Object(d.jsxs)("div",{children:[b>1&&Object(d.jsx)("button",{className:g.a.btn,onClick:function(){return j(b-1)},children:" PREV"}),a.filter((function(n){return n>=O&&n<=v})).map((function(n,e){return Object(d.jsx)("span",{children:Object(d.jsx)("button",{className:o===n?g.a.selectedPage:"",onClick:function(){return t(n)},children:n})},e)})),l>b&&Object(d.jsx)("button",{className:g.a.btn,onClick:function(){return j(b+1)},children:"NEXT"})]})})},b=e(318),j=e.n(b),O=e(11),v=e(255),m=function(n){var t=n.user,e=n.UnFollowFriend,r=n.FollowFriend,o=n.isFollowing;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(O.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{className:j.a.img,src:null!=t.photos.small?t.photos.small:v.a,alt:""})})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:o.some((function(n){return n==t.id})),onClick:function(){e(t.id)},children:"unfollow"}):Object(d.jsx)("button",{disabled:o.some((function(n){return n==n})),onClick:function(){r(t.id)},children:"follow"})})]}),Object(d.jsx)("span",{children:Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:t.name}),Object(d.jsx)("div",{children:t.status})]})})]})},y=function(n){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{currentPage:n.currentPage,pageCount:n.pageCount,totalItemsCount:n.totalUsersCount,onPageChanged:n.onPageChanged,portionSize:10}),n.users.map((function(t){return Object(d.jsx)(m,{user:t,FollowFriend:n.FollowFriend,UnFollowFriend:n.UnFollowFriend,isFollowing:n.isFollowing},t.id)}))]})},F=e(60),w=e(33),x=e(7),P=e(254);function C(n,t){return n===t}function U(n,t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!n(t[o],e[o]))return!1;return!0}function _(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return typeof n})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return t}var k=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=0,u=r.pop(),s=_(r),a=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(e)),c=n((function(){for(var n=[],t=s.length,e=0;e<t;e++)n.push(s[e].apply(null,arguments));return a.apply(null,n)}));return c.resultFunc=u,c.dependencies=s,c.recomputations=function(){return i},c.resetRecomputations=function(){return i=0},c}}((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,e=null,r=null;return function(){return U(t,e,arguments)||(r=n.apply(null,arguments)),e=arguments,r}}));var A=k((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),S=function(n){return n.usersPage.pageCount},N=function(n){return n.usersPage.totalUsersCount},I=function(n){return n.usersPage.currentPage},E=function(n){return n.usersPage.isFetching},M=function(n){return n.usersPage.isFollowing},T=function(n){Object(i.a)(e,n);var t=Object(u.a)(e);function e(){var n;Object(r.a)(this,e);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){var e=n.props;(0,e.getUser)(t,e.pageCount)},n}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var n=this.props;(0,n.getUser)(n.currentPage,n.pageCount)}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[this.props.isFetching?Object(d.jsx)(F.a,{}):null,Object(d.jsx)(y,{currentPage:this.props.currentPage,pageCount:this.props.pageCount,totalUsersCount:this.props.totalUsersCount,users:this.props.users,onPageChanged:this.onPageChanged,isFetching:this.props.isFetching,isFollowing:this.props.isFollowing,FollowFriend:this.props.FollowFriend,UnFollowFriend:this.props.UnFollowFriend,getUser:this.props.getUser})]})}}]),e}(a.a.Component);t.default=Object(w.compose)(Object(c.b)((function(n){return{users:A(n),pageCount:S(n),totalUsersCount:N(n),currentPage:I(n),isFetching:E(n),isFollowing:M(n)}}),{FollowFriend:l.a,UnFollowFriend:l.b,setCurrentPage:l.e,setToggleFollowing:l.f,getUser:l.d}),x.f,P.a)(T)}}]);
//# sourceMappingURL=6.666ea2e6.chunk.js.map