(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[5],{241:function(e,t,r){e.exports={formControl:"FormControl_formControl__3bI51",error:"FormControl_error__2p-ba",formSummaryError:"FormControl_formSummaryError__2aYFp"}},243:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return u}));var n=r(3),s=r(242),i=(r(0),r(241)),c=r.n(i),a=r(2),o=function(e){var t=e.input,r=e.meta,i=Object(s.a)(e,["input","meta"]),o=r.touched&&r.error;return Object(a.jsxs)("div",{className:c.a.formControl+""+(o?c.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},t),i))}),o&&Object(a.jsxs)("span",{children:[" ",r.error," "]})]})},u=function(e){var t=e.input,r=e.meta,i=Object(s.a)(e,["input","meta"]),o=r.touched&&r.error;return Object(a.jsxs)("div",{className:c.a.formControl+""+(o?c.a.error:""),children:[Object(a.jsx)("input",Object(n.a)(Object(n.a)({},t),i)),o&&Object(a.jsxs)("span",{className:c.a.error,children:[" ",r.error," "]})]})}},244:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return s}));var n=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},251:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(3),s=r(242),i=(r(0),r(7)),c=r(25),a=r(2),o=function(e){return{isAuth:e.auth.data.isAuth}};function u(e){return Object(c.b)(o)((function(t){var r=t.isAuth,c=Object(s.a)(t,["isAuth"]);return r?Object(a.jsx)(e,Object(n.a)({},c)):Object(a.jsx)(i.a,{to:"login"})}))}},265:function(e,t,r){e.exports={dialogs:"Dialogs_dialogs__IcOa7",messages:"Dialogs_messages__2ipxb",message:"Dialogs_message__2cCpI"}},266:function(e,t,r){e.exports={dialogsItems:"DialogItems_dialogsItems__2fZHv",active:"DialogItems_active__2ISGM",img:"DialogItems_img__3cAL3"}},319:function(e,t,r){"use strict";r.r(t);var n=r(25),s=r(73),i=(r(0),r(265)),c=r.n(i),a=r(11),o=r(266),u=r.n(o),j=r(2);var d=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"".concat(u.a.active),children:[Object(j.jsx)("img",{className:u.a.img,src:"https://media.vanityfair.com/photos/5c5325d3cec32271820c6fc1/master/w_1600%2Cc_limit/ava-max-interview.jpg",alt:""}),Object(j.jsx)(a.b,{to:"/dialogs/"+e.id,children:e.name})]})})};var l=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:e.messages})})})},m=r(106),b=r(107),f=r(243),O=r(244),g=Object(O.a)(10);var x=Object(b.a)({form:"dialog"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(m.a,{component:f.b,name:"dialog",type:"text",placeholder:"Enter your message",validate:[O.b,g]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:" Send "})})]})})),h=function(e){var t=e.dialogPage,r=t.users.map((function(e){return Object(j.jsx)(d,{name:e.name,id:e.id},e.id)})),n=t.messages.map((function(e){return Object(j.jsx)(l,{messages:e.messages,id:e.id},e.id)}));return Object(j.jsxs)("div",{className:c.a.dialogs,children:[Object(j.jsx)("div",{children:r}),Object(j.jsxs)("div",{className:c.a.messages,children:[Object(j.jsxs)("div",{children:[" ",n]}),Object(j.jsx)("div",{children:Object(j.jsx)(x,{onSubmit:function(t){e.sendMessage(t.dialog)}})})]})]})},v=r(33),p=r(251),_=r(7);t.default=Object(v.compose)(Object(n.b)((function(e){return{dialogPage:e.dialogPage}}),{sendMessage:s.b}),_.f,p.a)(h)}}]);
//# sourceMappingURL=5.49ba6880.chunk.js.map