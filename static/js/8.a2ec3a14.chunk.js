(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[8],{284:function(e,t,c){"use strict";t.a=c.p+"static/media/51f6fb256629fc755b8870c801092942.22c31152.png"},302:function(e,t,c){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2Y1mw",contacts:"ProfileInfo_contacts__1ifIm"}},385:function(e,t,c){"use strict";c.r(t);var o=c(4),i=c(0),s=c(302),r=c.n(s),a=c(64),n=c(276),l=c(3);var b=function(e){var t=Object(i.useState)(!1),c=Object(n.a)(t,2),o=c[0],s=c[1],r=Object(i.useState)(e.status),a=Object(n.a)(r,2),b=a[0],u=a[1];return Object(l.jsx)("div",{children:o?Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){e.isAuth&&(s(!1),e.updateProfileStatus(b))},type:"text",value:b})}):Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:function(){e.isOwner&&e.isAuth&&(s(!0),u(e.status))},children:e.status||"no status"})})})},u=c(284),j=c(6),d=c.n(j),p=c(11),f=c(362),O=c(66),h=c(25),x=c(380),v=c(382),m=c(384);function g(){return Math.round(20*Math.random())-10}function k(){var e=50+g(),t=50+g();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var P=Object(x.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),w=function(e){var t=Object(h.c)(),c=Object(h.d)((function(e){return e.profilePage.error})),s=Object(i.useState)(c),a=Object(n.a)(s,2),b=a[0],u=a[1],j=P(),x=Object(i.useState)(k),g=Object(n.a)(x,1)[0],w=Object(i.useState)(!1),y=Object(n.a)(w,2),A=y[0],N=y[1],S=function(){N(!1)},F=Object(f.a)({enableReinitialize:!0,initialValues:{userId:e.profile.userId,aboutMe:e.profile.aboutMe,fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,contacts:{vk:e.profile.contacts.vk,github:e.profile.contacts.github,instagram:e.profile.contacts.instagram,facebook:e.profile.contacts.facebook,twitter:e.profile.contacts.twitter,website:e.profile.contacts.website,youtube:e.profile.contacts.youtube,mainLink:e.profile.contacts.mainLink},photos:{small:"",large:""}},validate:function(e){var t={};return e.aboutMe||(t.aboutMe="Required"),e.fullName||(t.fullName="Required"),e.lookingForAJobDescription||(t.lookingForAJobDescription="Required"),t},onSubmit:function(){var e=Object(p.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(Object(O.f)(c));case 3:S(),u(""),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),O.d.setError(e.t0),u(e.t0);case 11:F.resetForm();case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}),J=Object(l.jsx)("div",{style:g,className:j.paper,children:Object(l.jsxs)("form",{onSubmit:F.handleSubmit,children:[b&&Object(l.jsx)("div",{style:{border:"1px solid red",color:"darkred",padding:"10px"},children:b}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"About Me:"}),Object(l.jsx)(v.a,Object(o.a)({type:"aboutMe"},F.getFieldProps("aboutMe"))),F.touched.aboutMe&&F.errors.aboutMe&&Object(l.jsx)("div",{style:{color:"red"},children:F.errors.aboutMe})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Full name:"}),Object(l.jsx)("input",Object(o.a)({type:"fullName"},F.getFieldProps("fullName"))),F.touched.fullName&&F.errors.fullName&&Object(l.jsx)("div",{style:{color:"red"},children:F.errors.fullName})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Looking for job:"}),Object(l.jsx)("input",{type:"checkbox"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"My skills:"}),Object(l.jsx)("input",Object(o.a)({type:"lookingForAJobDescription"},F.getFieldProps("lookingForAJobDescription"))),F.touched.lookingForAJobDescription&&F.errors.lookingForAJobDescription&&Object(l.jsx)("div",{style:{color:"red"},children:F.errors.lookingForAJobDescription})]}),Object(l.jsx)("b",{children:"Contacts:"}),Object.keys(e.profile.contacts).map((function(e,t){return Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsxs)("b",{children:[e,":"]}),Object(l.jsx)("div",{children:Object(l.jsx)("input",Object(o.a)({type:"contacts.".concat(e)},F.getFieldProps("contacts.".concat(e))))})]},t)})),Object(l.jsx)("button",{disabled:!F.isValid,type:"submit",color:"primary",children:"save"})]})});return Object(l.jsxs)("div",{children:[e.isOwner&&Object(l.jsx)("button",{type:"button",disabled:!e.isAuth,onClick:function(){N(!0)},children:"update profile"}),Object(l.jsx)(m.a,{open:A,onClose:S,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:J}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Name:"})," ",e.profile.fullName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"yes":"no"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"My Skills:"})," ",e.profile.lookingForAJobDescription]}),Object(l.jsx)("b",{children:" Contacts:"}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"vk:"})," ",e.profile.contacts.vk]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"github:"})," ",e.profile.contacts.github]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"youtube:"})," ",e.profile.contacts.youtube]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"facebook:"})," ",e.profile.contacts.facebook]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"website:"})," ",e.profile.contacts.website]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"mainLink:"})," ",e.profile.contacts.mainLink]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"instagram:"})," ",e.profile.contacts.instagram]}),Object(l.jsxs)("div",{className:r.a.contacts,children:[Object(l.jsx)("b",{children:"twitter:"})," ",e.profile.contacts.twitter]})]})};var y=function(e){var t=Object(h.d)((function(e){return e.auth.data.isAuth}));return e.profile?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:r.a.descriptionBlock,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:e.photos.large||u.a,alt:"profile pic"}),e.isOwner&&Object(l.jsx)("input",{type:"file",disabled:!t,onChange:function(t){t.target.files&&e.saveUserPhoto(t.target.files[0])}}),Object(l.jsx)(b,{status:e.status,updateProfileStatus:e.updateProfileStatus,isOwner:e.isOwner,isAuth:t})]}),Object(l.jsx)(w,{isOwner:e.isOwner,profile:e.profile,isAuth:t})]})}):Object(l.jsx)(a.a,{})};var A=function(e){var t=e.profile,c=e.updateProfileStatus,o=e.photos,i=e.saveUserPhoto,s=e.status,r=e.isOwner;return Object(l.jsx)("div",{children:Object(l.jsx)(y,{status:s,profile:t,updateProfileStatus:c,photos:o,saveUserPhoto:i,isOwner:r})})},N=c(35),S=c(8);t.default=Object(N.compose)(Object(h.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.data.isAuth,authorizedUserId:e.auth.data.id,photos:e.profilePage.profile.photos}}),{GetProfile:O.a,getProfileStatus:O.c,updateProfileStatus:O.g,saveUserPhoto:O.e}),S.g)((function(e){var t=Object(h.c)(),c=Object(h.d)((function(e){return e.auth.data.id})),s=parseInt(e.match.params.userId),r=Object(h.d)((function(e){return e.profilePage.setToggle})),n=Object(h.d)((function(e){return e.auth.data.isAuth}));return Object(i.useEffect)((function(){n&&(s||null==c?(e.GetProfile(s),t(Object(O.c)(s))):(e.GetProfile(c),t(Object(O.c)(c))))}),[s,c]),Object(l.jsx)("div",{children:r?Object(l.jsx)(A,Object(o.a)(Object(o.a)({},e),{},{profile:e.profile,GetProfile:e.GetProfile,status:e.status,getProfileStatus:e.getProfileStatus,updateProfileStatus:e.updateProfileStatus,isAuth:e.isAuth,authorizedUserId:e.authorizedUserId,photos:e.photos,saveUserPhoto:e.saveUserPhoto,isOwner:!s})):Object(l.jsx)(a.a,{})})}))}}]);
//# sourceMappingURL=8.a2ec3a14.chunk.js.map