(this["webpackJsonpadmin-dashboard-beliayam"]=this["webpackJsonpadmin-dashboard-beliayam"]||[]).push([[165],{1863:function(e,a,t){"use strict";t.r(a);var n=t(21),c=t(485),r=t(16),s=t(484),i=t.n(s),o=t(1),l=t(482),u=t(497),d=t(58),m=t.n(d),b=t(469),j=t(551),h=t(123),p=t(495),f=t(129),v=t(824),O=t(133),x=t(521),g=t(465),y=t(509),N=t(481),k=t(245),w=t(1101),S=t(471),z=t(472),C=t(473),T=t(476),B=t(496),I=t(1023),P=t(486),F=t(1051),q=t(1020),A=t(463),D=(t(526),t(6)),L=function(e){var a=e.name,t=e.role;return Object(D.jsxs)(o.Fragment,{children:[Object(D.jsx)("div",{className:"toastify-header",children:Object(D.jsxs)("div",{className:"title-wrapper",children:[Object(D.jsx)(b.a,{size:"sm",color:"success",icon:Object(D.jsx)(w.a,{size:12})}),Object(D.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Selamat Datang, ",a]})]})}),Object(D.jsx)("div",{className:"toastify-body",children:Object(D.jsxs)("span",{children:["Anda berhasil login sebagai ",t,". Sekarang anda bisa mulai bekerja. Enjoy!"]})})]})};a.default=function(e){var a,s=Object(j.a)(),d=Object(r.a)(s,2),b=d[0],w=(d[1],Object(o.useContext)(O.a)),R=Object(h.b)(),E=Object(x.g)(),J=Object(o.useState)("beliayamcom@gmail.com"),U=Object(r.a)(J,2),V=U[0],_=U[1],G=Object(o.useState)("bac.beliayamcom"),H=Object(r.a)(G,2),K=H[0],M=H[1],Q=Object(p.c)(),W=Q.register,X=Q.errors,Y=Q.handleSubmit,Z="dark"===b?"login-v2-dark.svg":"login-v2.svg",$=t(650)("./".concat(Z)).default,ee=function(){var e=Object(c.a)(i.a.mark((function e(){var a,t,n,c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(N.e)(X)){e.next=17;break}return a={method:"POST",data:{email:V,password:K}},e.prev=2,e.next=5,Object(u.a)(l.m,a);case 5:t=e.sent,n=t.data.data,c=n.admin,r=n.token,s={id:c._id,name:c.name,username:c.username,email:c.email,role:c.role.roleName,ability:[{action:"manage",subject:"all"}],accessToken:r.accessToken,refreshToken:r.refreshToken},R(Object(v.a)(s)),w.update(s.ability),E.push(Object(N.c)(c.role.roleName)),f.f.success(Object(D.jsx)(L,{name:s.fullName||s.username,role:s.role}),{transition:f.c,hideProgressBar:!0,autoClose:8e3}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(D.jsxs)(S.a,{className:"auth-inner m-0",children:[Object(D.jsxs)(g.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(D.jsx)("img",{src:k.default,alt:""}),Object(D.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Beliayam.com"})]}),Object(D.jsx)(z.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(D.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(D.jsx)("img",{className:"img-fluid",src:$,alt:"Login V2"})})}),Object(D.jsx)(z.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(D.jsxs)(z.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(D.jsx)(C.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Selamat Datang di Dashboard! \ud83d\udc4b"}),Object(D.jsx)(T.a,{className:"mb-2",children:"Silahkan Login dengan mengisi data dibawah"}),Object(D.jsxs)(B.a,{className:"auth-login-form mt-2",onSubmit:Y(ee),children:[Object(D.jsxs)(I.a,{children:[Object(D.jsx)(P.a,{className:"form-label",for:"login-email",children:"Email"}),Object(D.jsx)(F.a,{autoFocus:!0,type:"email",value:V,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return _(e.target.value)},className:m()({"is-invalid":X["login-email"]}),innerRef:W({required:!0,validate:function(e){return""!==e}})})]}),Object(D.jsxs)(I.a,{children:[Object(D.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(D.jsx)(P.a,{className:"form-label",for:"login-password",children:"Password"}),Object(D.jsx)(g.b,{to:"/forgot-password",children:Object(D.jsx)("small",{children:"Lupa Password?"})})]}),Object(D.jsx)(y.a,(a={value:K,id:"login-password",name:"login-password",className:"input-group-merge",onChange:function(e){return M(e.target.value)}},Object(n.a)(a,"className",m()({"is-invalid":X["login-password"]})),Object(n.a)(a,"innerRef",W({required:!0,validate:function(e){return""!==e}})),a))]}),Object(D.jsx)(I.a,{children:Object(D.jsx)(q.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Ingat saya"})}),Object(D.jsx)(A.a.Ripple,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(D.jsxs)("p",{className:"text-center mt-2",children:[Object(D.jsx)("span",{className:"mr-25",children:"Belum punya akun?"}),Object(D.jsx)(g.b,{to:"/misc/not-authorized",children:Object(D.jsx)("span",{children:"Buat baru"})})]})]})})]})})}},482:function(e,a,t){"use strict";t.d(a,"n",(function(){return n})),t.d(a,"m",(function(){return c})),t.d(a,"a",(function(){return r})),t.d(a,"j",(function(){return s})),t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return o})),t.d(a,"f",(function(){return l})),t.d(a,"g",(function(){return u})),t.d(a,"d",(function(){return d})),t.d(a,"e",(function(){return m})),t.d(a,"h",(function(){return b})),t.d(a,"i",(function(){return j})),t.d(a,"k",(function(){return h})),t.d(a,"l",(function(){return p}));var n="https://be-dev.beliayam.com/api/v1/admin/auth/refresh-token",c="https://be-dev.beliayam.com/api/v1/admin/auth/login",r="https://be-dev.beliayam.com/api/v1/admin/users",s=function(e){return"https://be-dev.beliayam.com/api/v1/admin/users/".concat(e)},i="https://be-dev.beliayam.com/api/v1/admin/category",o=function(e){return"https://be-dev.beliayam.com/api/v1/admin/category/".concat(e)},l="https://be-dev.beliayam.com/api/v1/admin/product",u=function(e){return"https://be-dev.beliayam.com/api/v1/admin/product/".concat(e)},d="https://be-dev.beliayam.com/api/v1/admin/charge",m=function(e){return"https://be-dev.beliayam.com/api/v1/admin/charge/".concat(e)},b="https://be-dev.beliayam.com/api/v1/admin/promo",j=function(e){return"https://be-dev.beliayam.com/api/v1/admin/promo/".concat(e)},h="https://be-dev.beliayam.com/api/v1/admin/voucher",p=function(e){return"https://be-dev.beliayam.com/api/v1/admin/voucher/".concat(e)}},497:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),c=t(485),r=t(484),s=t.n(r),i=t(83),o=t.n(i);t(482);o.a.defaults.baseURL="https://be-dev.beliayam.com/",o.a.defaults.headers.common.Authorization="Bearer token";var l=o.a.create(),u=function(e){return localStorage.getItem(e)};var d=function(){var e=Object(c.a)(s.a.mark((function e(a,t){var r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(n.a)(Object(n.a)({},t),{},{url:a,headers:Object(n.a)({"Content-Type":"application/json"},null===t||void 0===t?void 0:t.headers)}),e.prev=1,l.interceptors.request.use(function(){var e=Object(c.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.headers.Authorization||u()&&(a.headers.Authorization="Bearer ".concat(u())),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e.next=5,o.a.request(r);case 5:if(!(i=e.sent)){e.next=8;break}return e.abrupt("return",i);case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),null===e.t0||void 0===e.t0?void 0:e.t0.response;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},509:function(e,a,t){"use strict";var n=t(0),c=t(21),r=t(16),s=t(122),i=t(1),o=t(58),l=t.n(o),u=t(1117),d=t(1116),m=t(486),b=t(1049),j=t(1051),h=t(1050),p=t(823),f=t(6),v=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],O=function(e){var a=e.label,t=e.hideIcon,o=e.showIcon,O=e.visible,x=e.className,g=e.htmlFor,y=e.placeholder,N=e.iconSize,k=e.inputClassName,w=Object(s.a)(e,v),S=Object(i.useState)(O),z=Object(r.a)(S,2),C=z[0],T=z[1];return Object(f.jsxs)(i.Fragment,{children:[a?Object(f.jsx)(m.a,{for:g,children:a}):null,Object(f.jsxs)(b.a,{className:l()(Object(c.a)({},x,x)),children:[Object(f.jsx)(j.a,Object(n.a)(Object(n.a)({type:!1===C?"password":"text",placeholder:y||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(c.a)({},k,k))},a&&g?{id:g}:{}),w)),Object(f.jsx)(h.a,{addonType:"append",onClick:function(){return T(!C)},children:Object(f.jsx)(p.a,{className:"cursor-pointer",children:function(){var e=N||14;return!1===C?t||Object(f.jsx)(u.a,{size:e}):o||Object(f.jsx)(d.a,{size:e})}()})})]})]})};a.a=O,O.defaultProps={visible:!1}}}]);
//# sourceMappingURL=165.1fdb730c.chunk.js.map