(this["webpackJsonpadmin-dashboard-beliayam"]=this["webpackJsonpadmin-dashboard-beliayam"]||[]).push([[170],{1869:function(e,a,t){"use strict";t.r(a);var n=t(21),r=t(481),c=t(16),i=t(477),s=t.n(i),o=t(1),l=t(473),u=t(484),d=t(58),m=t.n(d),b=t(466),p=t(561),h=t(123),j=t(493),f=t(128),v=t(832),g=t(134),O=t(530),x=t(465),y=t(520),k=t(483),N=t(91),w=t(1043),S=t(471),T=t(472),C=t(474),z=t(476),I=t(501),P=t(965),q=t(488),A=t(993),B=t(962),E=t(463),F=(t(533),t(6)),R=function(e){var a=e.name,t=e.role;return Object(F.jsxs)(o.Fragment,{children:[Object(F.jsx)("div",{className:"toastify-header",children:Object(F.jsxs)("div",{className:"title-wrapper",children:[Object(F.jsx)(b.a,{size:"sm",color:"success",icon:Object(F.jsx)(w.a,{size:12})}),Object(F.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Selamat Datang, ",a]})]})}),Object(F.jsx)("div",{className:"toastify-body",children:Object(F.jsxs)("span",{children:["Anda berhasil login sebagai ",t,". Sekarang anda bisa mulai bekerja. Enjoy!"]})})]})};a.default=function(e){var a,i=Object(p.a)(),d=Object(c.a)(i,2),b=d[0],w=(d[1],Object(o.useContext)(g.a)),D=Object(h.b)(),L=Object(O.g)(),J=Object(o.useState)("beliayamcom@gmail.com"),U=Object(c.a)(J,2),V=U[0],_=U[1],G=Object(o.useState)("bac.beliayamcom"),H=Object(c.a)(G,2),K=H[0],M=H[1],Q=Object(j.c)(),W=Q.register,X=Q.errors,Y=Q.handleSubmit,Z="dark"===b?"login-v2-dark.svg":"login-v2.svg",$=t(666)("./".concat(Z)).default,ee=function(){var e=Object(r.a)(s.a.mark((function e(){var a,t,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(k.f)(X)){e.next=17;break}return a={method:"POST",data:{email:V,password:K}},e.prev=2,e.next=5,Object(u.a)(l.q,a);case 5:t=e.sent,n=t.data.data,r=n.admin,c=n.token,i={id:r._id,name:r.name,username:r.username,email:r.email,role:r.role.roleName,ability:[{action:"manage",subject:"all"}],accessToken:c.accessToken,refreshToken:c.refreshToken},D(Object(v.a)(i)),w.update(i.ability),L.push(Object(k.d)(r.role.roleName)),f.f.success(Object(F.jsx)(R,{name:i.fullName||i.username,role:i.role}),{transition:f.c,hideProgressBar:!0,autoClose:8e3}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(F.jsxs)(S.a,{className:"auth-inner m-0",children:[Object(F.jsxs)(x.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(F.jsx)("img",{src:N.default,height:"40",alt:""}),Object(F.jsx)("h1",{className:"brand-text text-primary ml-1",children:"Beliayam.com"})]}),Object(F.jsx)(T.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(F.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(F.jsx)("img",{className:"img-fluid",src:$,alt:"Login V2"})})}),Object(F.jsx)(T.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(F.jsxs)(T.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(F.jsx)(C.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Selamat Datang di Dashboard! \ud83d\udc4b"}),Object(F.jsx)(z.a,{className:"mb-2",children:"Silahkan Login dengan mengisi data dibawah"}),Object(F.jsxs)(I.a,{className:"auth-login-form mt-2",onSubmit:Y(ee),children:[Object(F.jsxs)(P.a,{children:[Object(F.jsx)(q.a,{className:"form-label",for:"login-email",children:"Email"}),Object(F.jsx)(A.a,{autoFocus:!0,type:"email",value:V,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return _(e.target.value)},className:m()({"is-invalid":X["login-email"]}),innerRef:W({required:!0,validate:function(e){return""!==e}})})]}),Object(F.jsxs)(P.a,{children:[Object(F.jsx)("div",{className:"d-flex justify-content-between",children:Object(F.jsx)(q.a,{className:"form-label",for:"login-password",children:"Password"})}),Object(F.jsx)(y.a,(a={value:K,id:"login-password",name:"login-password",className:"input-group-merge",onChange:function(e){return M(e.target.value)}},Object(n.a)(a,"className",m()({"is-invalid":X["login-password"]})),Object(n.a)(a,"innerRef",W({required:!0,validate:function(e){return""!==e}})),a))]}),Object(F.jsx)(P.a,{children:Object(F.jsx)(B.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Ingat saya"})}),Object(F.jsx)(E.a.Ripple,{type:"submit",color:"primary",block:!0,children:"Sign in"})]})]})})]})})}},473:function(e,a,t){"use strict";t.d(a,"u",(function(){return n})),t.d(a,"q",(function(){return r})),t.d(a,"a",(function(){return c})),t.d(a,"m",(function(){return i})),t.d(a,"l",(function(){return s})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return l})),t.d(a,"h",(function(){return u})),t.d(a,"i",(function(){return d})),t.d(a,"d",(function(){return m})),t.d(a,"e",(function(){return b})),t.d(a,"j",(function(){return p})),t.d(a,"k",(function(){return h})),t.d(a,"o",(function(){return j})),t.d(a,"p",(function(){return f})),t.d(a,"f",(function(){return v})),t.d(a,"g",(function(){return g})),t.d(a,"t",(function(){return O})),t.d(a,"s",(function(){return x})),t.d(a,"n",(function(){return y})),t.d(a,"r",(function(){return k})),t.d(a,"x",(function(){return N})),t.d(a,"v",(function(){return w})),t.d(a,"w",(function(){return S})),t.d(a,"y",(function(){return T}));var n="https://be-dev.beliayam.com/api/v1/admin/auth/refresh-token",r="https://be-dev.beliayam.com/api/v1/admin/auth/login",c="https://be-dev.beliayam.com/api/v1/admin/users",i=function(e){return"https://be-dev.beliayam.com/api/v1/admin/users/".concat(e)},s=function(e,a){return"https://be-dev.beliayam.com/api/v1/admin/users/".concat(e,"/").concat(a)},o="https://be-dev.beliayam.com/api/v1/admin/category",l=function(e){return"https://be-dev.beliayam.com/api/v1/admin/category/".concat(e)},u="https://be-dev.beliayam.com/api/v1/admin/product",d=function(e){return"https://be-dev.beliayam.com/api/v1/admin/product/".concat(e)},m="https://be-dev.beliayam.com/api/v1/admin/charge",b=function(e){return"https://be-dev.beliayam.com/api/v1/admin/charge/".concat(e)},p="https://be-dev.beliayam.com/api/v1/admin/promo",h=function(e){return"https://be-dev.beliayam.com/api/v1/admin/promo/".concat(e)},j="https://be-dev.beliayam.com/api/v1/admin/voucher",f=function(e){return"https://be-dev.beliayam.com/api/v1/admin/voucher/".concat(e)},v="https://be-dev.beliayam.com/api/v1/admin/order",g=function(e){return"https://be-dev.beliayam.com/api/v1/admin/order/".concat(e)},O=function(e){return"https://be-dev.beliayam.com/api/v1/admin/order/".concat(e,"/complete-order")},x=function(e){return"https://be-dev.beliayam.com/api/v1/admin/order/".concat(e,"/cancel-order")},y="https://be-dev.beliayam.com/api/v1/admin/users/time-range/client",k="https://be-dev.beliayam.com/api/v1/admin/order/by-payment-method",N="https://be-dev.beliayam.com/api/v1/admin/sales/revenue",w="https://be-dev.beliayam.com/api/v1/admin/sales/total",S="https://be-dev.beliayam.com/api/v1/admin/product/total",T="https://be-dev.beliayam.com/api/v1/admin/users/total"},484:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),r=t(481),c=t(477),i=t.n(c),s=t(83),o=t.n(s),l=t(473),u=o.a.create({baseURL:"https://be.beliayam.com/",headers:{Authorization:"Bearer token"}}),d=function(e){return localStorage.getItem(e)},m=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.interceptors.response.use((function(e){return e}),function(){var e=Object(r.a)(i.a.mark((function e(a){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401===a.response){e.next=2;break}return e.abrupt("return",Promise.reject(a));case 2:return t={accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken")},e.prev=3,e.next=6,o.a.post(l.u,{"Content-Type":"application/json"},t);case 6:return n=e.sent,localStorage.setItem("accessToken",n.data.token.accessToken),localStorage.setItem("refreshToken",n.data.token.refreshToken),o.a.defaults.headers.common.Authorization="Bearer ".concat(n.data.token.accessToken),a.hasRefreshedToken=!0,e.next=13,Promise.reject(tokenError);case 13:case 22:return e.abrupt("return",e.sent);case 16:return e.prev=16,e.t0=e.catch(3),(r=new Error("Cannot refresh token")).originalError=a,e.next=22,Promise.reject(r);case 23:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(a){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(i.a.mark((function e(a,t){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(n.a)(Object(n.a)({},t),{},{url:a,headers:Object(n.a)({"Content-Type":"application/json"},null===t||void 0===t?void 0:t.headers)}),e.prev=1,u.interceptors.request.use(function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.headers.Authorization||d()&&(a.headers.Authorization="Bearer ".concat(d())),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),m(),e.next=6,o.a.request(c);case 6:if(!(s=e.sent)){e.next=9;break}return e.abrupt("return",s);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),null===e.t0||void 0===e.t0?void 0:e.t0.response;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a,t){return e.apply(this,arguments)}}()},520:function(e,a,t){"use strict";var n=t(0),r=t(21),c=t(16),i=t(124),s=t(1),o=t(58),l=t.n(o),u=t(1059),d=t(1058),m=t(488),b=t(991),p=t(993),h=t(992),j=t(831),f=t(6),v=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],g=function(e){var a=e.label,t=e.hideIcon,o=e.showIcon,g=e.visible,O=e.className,x=e.htmlFor,y=e.placeholder,k=e.iconSize,N=e.inputClassName,w=Object(i.a)(e,v),S=Object(s.useState)(g),T=Object(c.a)(S,2),C=T[0],z=T[1];return Object(f.jsxs)(s.Fragment,{children:[a?Object(f.jsx)(m.a,{for:x,children:a}):null,Object(f.jsxs)(b.a,{className:l()(Object(r.a)({},O,O)),children:[Object(f.jsx)(p.a,Object(n.a)(Object(n.a)({type:!1===C?"password":"text",placeholder:y||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(r.a)({},N,N))},a&&x?{id:x}:{}),w)),Object(f.jsx)(h.a,{addonType:"append",onClick:function(){return z(!C)},children:Object(f.jsx)(j.a,{className:"cursor-pointer",children:function(){var e=k||14;return!1===C?t||Object(f.jsx)(u.a,{size:e}):o||Object(f.jsx)(d.a,{size:e})}()})})]})]})};a.a=g,g.defaultProps={visible:!1}}}]);
//# sourceMappingURL=170.e850aba7.chunk.js.map