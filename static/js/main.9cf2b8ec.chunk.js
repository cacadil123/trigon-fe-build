(this["webpackJsonpsingle-sign-on"]=this["webpackJsonpsingle-sign-on"]||[]).push([[0],{211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(79),c=n.n(r),i=(n(90),n(91),n(215)),s=n(85),o=n(216),d=n(47),u=n(11),m=n(2),b=function(e){var t=e.label;return Object(m.jsx)("button",{className:"btn btn-primary btn-primary-lg btn-block ",name:"commit",tabIndex:2,type:"submit",value:"Continue",children:t})},h=n(20),p=n(46),j=n(34),g=n.n(j),O=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(null),c=Object(u.a)(r,2),i=c[0],s=c[1],o=Object(a.useState)(null),j=Object(u.a)(o,2),O=j[0],f=j[1],x=p.a().shape({phoneNumber:p.b().required("Please enter phone number").matches(/^[789]\d{9}$/,"Phone Number format should be (9882223456)")}),v=[{name:"phoneNumber",type:"text",placeholder:"Enter phone Number",label:"Phone Number",id:"phoneNumber"},{name:"fullName",type:"text",placeholder:"Enter Full Name",label:"Full Name",id:"fullName"},{name:"email",type:"email",placeholder:"Enter Email",label:"Enter your SSO name or Email address:",id:"email"}],y=[{name:"phoneNumber",type:"text",placeholder:"Enter phone Number",label:"Phone Number",id:"phoneNumber"}],N=[{name:"verificationCode",type:"text",placeholder:"Enter OTP",label:"Phone OTP",id:"verificationCode"}];return Object(m.jsx)("div",{className:"page-wrap gradient-primary",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"panel",id:"login",children:[Object(m.jsx)("h3",{children:"Initiate Single Sign-on (SSO)"}),Object(m.jsx)(h.c,{initialValues:{phoneNumber:""},validationSchema:x,onSubmit:function(e,t){var a=Object(d.a)(Object(d.a)({},e),{},{meta:localStorage.getItem("ip")||""});g.a.post(0===n?"https://login.api.triloksecure.com/api/v1/users/register":1===n?"https://login.api.triloksecure.com/api/v1/users/verify-code":"https://login.api.triloksecure.com/api/v1/users/verify-user",a).then((function(e){l(e.data.success),s(e.data.message),f(e.data.type),e.data.redirect&&l(null),2===e.data.redirect&&l(null),"Code is verified!, You are loggedIn successfully!"===e.data.message&&window.location.assign("https://www.tigon.one/"),console.log("res",e)})).catch((function(e){console.log(e.message)})),console.log(e)},children:function(e){var t=e.errors,a=e.touched;return Object(m.jsxs)(h.b,{children:[null!==i&&Object(m.jsxs)("div",{className:"alert ".concat("success"===O?"alert-success":"fail"===O?"alert-danger":"alert-warning"," alert-dismissible"),children:[Object(m.jsx)("button",{type:"button",class:"close","data-dismiss":"alert",children:"\xd7"}),i]}),Object(m.jsx)("div",{className:"alert",children:"Please fill your details:"}),null===n&&y.map((function(e){return Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:e.label,children:e.label}),Object(m.jsx)(h.a,{className:"form-control no-icon",id:e.id,name:e.name,placeholder:e.placeholder,tabIndex:1,type:e.type}),t[e.name]&&a[e.name]?Object(m.jsx)("div",{style:{color:"red"},children:t[e.name]}):null]})})),0===n&&v.map((function(e){return Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:e.label,children:e.label}),Object(m.jsx)(h.a,{className:"form-control no-icon",id:e.id,name:e.name,placeholder:e.placeholder,tabIndex:1,type:e.type,required:!0}),t[e.name]&&a[e.name]?Object(m.jsx)("div",{style:{color:"red"},children:t[e.name]}):null]})})),1===n&&N.map((function(e){return Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:e.label,children:e.label}),Object(m.jsx)(h.a,{className:"form-control no-icon",id:e.id,name:e.name,placeholder:e.placeholder,tabIndex:1,type:e.type,required:!0}),t[e.name]&&a[e.name]?Object(m.jsx)("div",{style:{color:"red"},children:t[e.name]}):null]})})),Object(m.jsx)(b,{label:0===n?"Register":1===n?"Verify OTP":"Continue"})]})}})]})})})})},f=new i.a;function x(){return Object(m.jsx)(s.a,{client:f,children:Object(m.jsx)(v,{})})}function v(){var e=Object(o.a)("repoData",(function(){return g.a.get("https://api.ipify.org?format=json").then((function(e){return JSON.stringify(localStorage.setItem("ip",e.data.ip))}))})),t=e.isLoading,n=e.error;e.data,e.isFetching;return t?Object(m.jsx)("span",{style:{color:"white"},children:"Loading..."}):n?"An error has occurred: "+n.message:Object(m.jsx)(O,{})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),r(e),c(e)}))};n(211);c.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),y()},90:function(e,t,n){},91:function(e,t,n){}},[[212,1,2]]]);
//# sourceMappingURL=main.9cf2b8ec.chunk.js.map