(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[0],[,,,function(e,s,t){e.exports={nav:"Navbar_nav__3dKQv",item:"Navbar_item__2oB40",activeLink:"Navbar_activeLink__2zl4L",itemFriends:"Navbar_itemFriends__XZia7"}},,,,,,,,,,,function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2-Sg2",messages:"Dialogs_messages__bRGYr",message:"Dialogs_message__3VBPp"}},function(e,s,t){e.exports={dialogsItems:"DialogItems_dialogsItems__1-icN",active:"DialogItems_active__1YM7J",img:"DialogItems_img__3mM_w"}},,,,,function(e,s,t){e.exports={postsBLock:"MyPosts_postsBLock__21aF9",posts:"MyPosts_posts__1Xedv"}},function(e,s,t){},,,function(e,s,t){e.exports={header:"Header_header__1Al15"}},function(e,s,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2y6KL"}},function(e,s,t){e.exports={item:"Post_item__2Cx6j"}},,,,,function(e,s,t){},,,,,,,function(e,s,t){},function(e,s,t){"use strict";t.r(s);t(1);var a=t(11),i=t.n(a),n=(t(31),t(24)),c=t.n(n),r=t(0);var o=function(){return Object(r.jsx)("header",{className:c.a.header,children:Object(r.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",alt:""})})},d=t(4),j=t(3),l=t.n(j),m=function(){return Object(r.jsxs)("nav",{className:l.a.nav,children:[Object(r.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(r.jsx)(d.b,{to:"/profile",activeClassName:l.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:l.a.item,children:Object(r.jsx)(d.b,{to:"/dialogs",activeClassName:l.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:l.a.item,children:Object(r.jsx)(d.b,{to:"/news",activeClassName:l.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:l.a.item,children:Object(r.jsx)(d.b,{to:"/music",activeClassName:l.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:l.a.item,children:Object(r.jsx)(d.b,{to:"/settings",activeClassName:l.a.activeLink,children:"Settings"})}),Object(r.jsx)("div",{className:l.a.itemFriends,children:Object(r.jsx)(d.b,{to:"/friends",activeClassName:l.a.activeLink,children:"Friends"})}),Object(r.jsx)("span",{className:l.a.itemFriends,children:Object(r.jsx)(d.b,{to:"/Abay",activeClassName:l.a.activeLink,children:" Abay "})}),Object(r.jsx)("span",{className:l.a.itemFriends,children:Object(r.jsx)(d.b,{to:"/Salta",activeClassName:l.a.activeLink,children:" Salta "})}),Object(r.jsx)("span",{className:l.a.itemFriends,children:Object(r.jsx)(d.b,{to:"/Samal",activeClassName:l.a.activeLink,children:" Samal "})})]})},b=t(25),u=t.n(b);var g=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:e.pic})}),Object(r.jsx)("div",{className:u.a.descriptionBlock,children:"ava + description"})]})},v=t(13),x=t(9),h={message:[{id:1,message:"Hi, how are you?",likeCount:22},{id:2,message:"It is my first post",likeCount:11}],newPostText:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case w:var t={id:3,message:e.newPostText,likeCount:0},a=Object(x.a)({},e);return a.message=Object(v.a)(e.message),a.message.push(t),a.newPostText="",a;case y:var i=Object(x.a)({},e);return i.newPostText=s.newPost,i;default:return e}},p={users:[{id:"1",name:"Damir"},{id:"2",name:"Abay"},{id:"3",name:"Kyama"},{id:"4",name:"Kaidar"},{id:"5",name:"Aday"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"What's up?"},{id:3,messages:"How's it going?"}],newMessageBody:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case k:var t=Object(x.a)({},e);return t.newMessageBody=s.body,t;case P:var a=Object(x.a)({},e),i=a.newMessageBody;return a.messages=Object(v.a)(e.messages),a.messages.push({id:6,messages:i}),a.newMessageBody="",a;default:return e}},_={friends:[{id:1,name:"Abay"},{id:2,name:"Karik"},{id:3,name:"Samal"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},w="ADD-POST",y="CHANGE-NEW-POST-TEXT",k="NEW-MESSAGE-BODY",P="SEND-MESSAGE",C=t(20),M=t.n(C),B=t(26),L=t.n(B);var S=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:L.a.item,children:[Object(r.jsx)("img",{src:"https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",alt:""}),e.message,Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:[e.like,Object(r.jsx)("button",{children:"like"})]})})]})})};var T=function(e){var s=e.message.map((function(e){return Object(r.jsx)(S,{message:e.message,like:e.likeCount})}));return Object(r.jsxs)("div",{className:M.a.postsBLock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{value:e.newPostText,onChange:function(s){e.changeNewText(s.currentTarget.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.addPost()},children:"add new post"})})]}),Object(r.jsx)("div",{className:M.a.posts,children:s})]})},D=t(8),E=Object(D.b)((function(e){return{message:e.profilePage.message,newPostText:e.profilePage.newPostText}}),(function(e){return{changeNewText:function(s){e({type:y,newPost:s})},addPost:function(){e({type:w})}}}))(T);var A=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{pic:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"}),Object(r.jsx)(E,{})]})},F=(t(38),t(2));var I=function(e){return Object(r.jsx)("div",{children:"News"})};var H=function(e){return Object(r.jsx)("div",{children:"Music"})};var K=function(e){return Object(r.jsx)("div",{children:"Settings"})};var G=function(e){return Object(r.jsx)("div",{children:"Friends"})},J=t(14),W=t.n(J),X=t(15),Y=t.n(X);var z=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"".concat(Y.a.dialog," ").concat(Y.a.active),children:[Object(r.jsx)("img",{className:Y.a.img,src:"https://media.vanityfair.com/photos/5c5325d3cec32271820c6fc1/master/w_1600%2Cc_limit/ava-max-interview.jpg",alt:""}),Object(r.jsx)(d.b,{to:"/dialogs/"+e.id,children:e.name})]})})},Q=t(21),R=t.n(Q);var V=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:R.a.message,children:Object(r.jsx)("div",{className:R.a.chat,children:e.messages})})})};var Z=function(e){var s=e.users.map((function(e){return Object(r.jsx)(z,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return Object(r.jsx)(V,{messages:e.messages,id:e.id})})),a=e.newMessageBody;return Object(r.jsxs)("div",{className:W.a.dialogs,children:[Object(r.jsx)("div",{className:W.a.dialogsItems,children:s}),Object(r.jsxs)("div",{className:W.a.messages,children:[Object(r.jsxs)("div",{children:[" ",t]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{value:a,placeholder:"Enter your message",onChange:function(s){e.updatedMessageBody(s.currentTarget.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},q=Object(D.b)((function(e){return{users:e.dialogPage.users,messages:e.dialogPage.messages,newMessageBody:e.dialogPage.newMessageBody}}),(function(e){return{updatedMessageBody:function(s){e({type:k,body:s})},sendMessage:function(){e({type:P})}}}))(Z);var U=function(){return Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(o,{}),Object(r.jsx)(m,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(F.a,{path:"/dialogs",render:function(){return Object(r.jsx)(q,{})}}),Object(r.jsx)(F.a,{path:"/profile",render:function(){return Object(r.jsx)(A,{})}}),Object(r.jsx)(F.a,{path:"/news",component:I}),Object(r.jsx)(F.a,{path:"/music",component:H}),Object(r.jsx)(F.a,{path:"/settings",component:K}),Object(r.jsx)(F.a,{path:"/friends",render:function(){return Object(r.jsx)(G,{})}})]})]})})},$=t(22),ee=Object($.a)({profilePage:O,dialogPage:f,sideBarPage:N}),se=Object($.b)(ee);window.store=window.store||{};var te=se;i.a.render(Object(r.jsx)(d.a,{children:Object(r.jsx)(D.a,{store:te,children:Object(r.jsx)(U,{})})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.6b3b4787.chunk.js.map