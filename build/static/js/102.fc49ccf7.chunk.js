(this["webpackJsonpadmin-dashboard-beliayam"]=this["webpackJsonpadmin-dashboard-beliayam"]||[]).push([[102],{2016:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(1),c=a(521),s=a(465),i=a(495),o=a(123),l=a(481),u=a(674),d=a(129),b=a(629),p=a(1085),j=a(1115),m=a(1184),h=a(471),f=a(472),v=a(1054),O=a(463),g=a(486),x=a(496),y=a(1023),N=a(1051),C=a(6),T=function(e){var t=e.selectedCharge,a=Object(o.b)(),s=Object(c.i)().id,T=Object(i.c)(),P=T.register,k=T.errors,w=T.handleSubmit,E=Object(r.useState)(null),R=Object(n.a)(E,2),A=(R[0],R[1]),M=Object(r.useState)(null),D=Object(n.a)(M,2),S=D[0],V=D[1];Object(r.useEffect)((function(){a(Object(u.d)(s))}),[s]),Object(r.useEffect)((function(){V(t)}),[t]);return S?Object(C.jsxs)(h.a,{children:[Object(C.jsx)(f.a,{sm:"12",children:Object(C.jsx)(v.a,{className:"mb-2",children:Object(C.jsxs)(v.a,{className:"mt-50",body:!0,children:[Object(C.jsxs)("h4",{children:[t.chargeName," "]}),Object(C.jsxs)("div",{className:"d-flex flex-wrap mt-1 px-0",children:[Object(C.jsxs)(O.a.Ripple,{id:"change-img",tag:g.a,className:"mr-75 mb-0",color:"primary",children:[Object(C.jsx)("span",{className:"d-none d-sm-block",children:"Change"}),Object(C.jsx)("span",{className:"d-block d-sm-none",children:Object(C.jsx)(j.a,{size:14})}),Object(C.jsx)("input",{type:"file",hidden:!0,id:"change-img",onChange:function(e){var t=new FileReader,a=e.target.files;t.onload=function(){A(t.result)},t.readAsDataURL(a[0])},accept:"image/*"})]}),Object(C.jsxs)(O.a.Ripple,{color:"secondary",outline:!0,children:[Object(C.jsx)("span",{className:"d-none d-sm-block",children:"Remove"}),Object(C.jsx)("span",{className:"d-block d-sm-none",children:Object(C.jsx)(m.a,{size:14})})]})]})]})})}),Object(C.jsx)(f.a,{sm:"12",children:Object(C.jsx)(x.a,{onSubmit:w((function(e){Object(l.e)(k)&&a(Object(u.e)(s,{chargeName:e.chargeName,chargeBy:e.chargeBy,chargeValue:e.chargeValue,shortDescription:e.shortDescription,description:e.description,termsAndConditions:e.termsAndConditions})),d.f.success(Object(C.jsx)(b.a,{icon:Object(C.jsx)(p.a,{size:12}),content:"Charge"}),{transition:d.c,hideProgressBar:!0,autoClose:8e3})})),children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(f.a,{md:"4",sm:"12",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{for:"chargeName",children:"Charge Name"}),Object(C.jsx)(N.a,{type:"text",id:"chargeName",name:"chargeName",placeholder:"Charge Name",defaultValue:S.chargeName,innerRef:P({required:!0})})]})}),Object(C.jsx)(f.a,{md:"4",sm:"12",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{for:"chargeBy",children:"Charge By"}),Object(C.jsx)(N.a,{type:"text",id:"chargeBy",name:"chargeBy",placeholder:"Charge By...",defaultValue:S.chargeBy,innerRef:P({required:!0})})]})}),Object(C.jsx)(f.a,{md:"4",sm:"12",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{for:"chargeValue",children:"Charge Value"}),Object(C.jsx)(N.a,{type:"number",id:"chargeValue",name:"chargeValue",placeholder:"Charge Value...",defaultValue:S.chargeValue,innerRef:P({required:!0})})]})}),Object(C.jsx)(f.a,{md:"4",sm:"12",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{for:"shortDescription",children:"Short Description"}),Object(C.jsx)(N.a,{type:"text",id:"shortDescription",name:"shortDescription",placeholder:"Short Description....",defaultValue:S.shortDescription,innerRef:P({required:!0})})]})}),Object(C.jsx)(f.a,{md:"4",sm:"12",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{for:"description",children:"Description"}),Object(C.jsx)(N.a,{type:"text",id:"description",name:"description",placeholder:"Short Description....",defaultValue:S.description,innerRef:P({required:!0})})]})}),Object(C.jsx)(f.a,{md:"4",sm:"12",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{for:"termsAndConditions",children:"Terms And Condition"}),Object(C.jsx)(N.a,{type:"text",id:"termsAndConditions",name:"termsAndConditions",placeholder:"Terms And Condition....",defaultValue:S.termsAndConditions,innerRef:P({required:!0})})]})}),Object(C.jsxs)(f.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(C.jsx)(O.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(C.jsx)(O.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})})]}):null},P=a(1080),k=a(470),w=a(468),E=a(534),R=a(1062),A=a(1063),M=a(542),D=a(543),S=a(500);a(501),t.default=function(){var e=Object(r.useState)("1"),t=Object(n.a)(e,2),a=t[0],i=t[1],l=Object(o.c)((function(e){return e.charges})),d=Object(o.b)(),b=Object(c.i)().id;return Object(r.useEffect)((function(){return d(Object(u.d)(b)),function(){return d(Object(u.d)(b))}}),[d,b]),null!==l.selectedCharge&&void 0!==l.selectedCharge?Object(C.jsx)(h.a,{className:"app-user-edit",children:Object(C.jsx)(f.a,{sm:"12",children:Object(C.jsx)(k.a,{children:Object(C.jsxs)(w.a,{className:"pt-2",children:[Object(C.jsx)(E.a,{pills:!0,children:Object(C.jsx)(R.a,{children:Object(C.jsxs)(A.a,{active:"1"===a,onClick:function(){return i("1")},children:[Object(C.jsx)(P.a,{size:14}),Object(C.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Product"})]})})}),Object(C.jsxs)(M.a,{activeTab:a,children:[Object(C.jsx)(D.a,{tabId:"1",children:Object(C.jsx)(T,{selectedCharge:l.selectedCharge})}),Object(C.jsx)(D.a,{tabId:"2"}),Object(C.jsx)(D.a,{tabId:"3"})]})]})})})}):Object(C.jsxs)(S.a,{color:"danger",children:[Object(C.jsx)("h4",{className:"alert-heading",children:"Product not found"}),Object(C.jsxs)("div",{className:"alert-body",children:["Product with id: ",b," doesn't exist. Check list of all Products: ",Object(C.jsx)(s.b,{to:"/order/charge/list",children:"Products List"})]})]})}},468:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),l=a(58),u=a.n(l),d=a(82),b={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,i=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),a);return s.a.createElement(i,Object(n.a)({},o,{className:l,ref:c}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},470:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),l=a(58),u=a.n(l),d=a(82),b={tag:d.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.color,i=e.body,o=e.inverse,l=e.outline,b=e.tag,p=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(u()(t,"card",!!o&&"text-white",!!i&&"card-body",!!c&&(l?"border":"bg")+"-"+c),a);return s.a.createElement(b,Object(n.a)({},j,{className:m,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},482:function(e,t,a){"use strict";a.d(t,"n",(function(){return n})),a.d(t,"m",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"j",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return b})),a.d(t,"h",(function(){return p})),a.d(t,"i",(function(){return j})),a.d(t,"k",(function(){return m})),a.d(t,"l",(function(){return h}));var n="https://be-dev.beliayam.com/api/v1/admin/auth/refresh-token",r="https://be-dev.beliayam.com/api/v1/admin/auth/login",c="https://be-dev.beliayam.com/api/v1/admin/users",s=function(e){return"https://be-dev.beliayam.com/api/v1/admin/users/".concat(e)},i="https://be-dev.beliayam.com/api/v1/admin/category",o=function(e){return"https://be-dev.beliayam.com/api/v1/admin/category/".concat(e)},l="https://be-dev.beliayam.com/api/v1/admin/product",u=function(e){return"https://be-dev.beliayam.com/api/v1/admin/product/".concat(e)},d="https://be-dev.beliayam.com/api/v1/admin/charge",b=function(e){return"https://be-dev.beliayam.com/api/v1/admin/charge/".concat(e)},p="https://be-dev.beliayam.com/api/v1/admin/promo",j=function(e){return"https://be-dev.beliayam.com/api/v1/admin/promo/".concat(e)},m="https://be-dev.beliayam.com/api/v1/admin/voucher",h=function(e){return"https://be-dev.beliayam.com/api/v1/admin/voucher/".concat(e)}},488:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1),r=a.n(n).a.createContext({})},497:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a(485),c=a(484),s=a.n(c),i=a(83),o=a.n(i);a(482);o.a.defaults.baseURL="https://be-dev.beliayam.com/",o.a.defaults.headers.common.Authorization="Bearer token";var l=o.a.create(),u=function(e){return localStorage.getItem(e)};var d=function(){var e=Object(r.a)(s.a.mark((function e(t,a){var c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(n.a)(Object(n.a)({},a),{},{url:t,headers:Object(n.a)({"Content-Type":"application/json"},null===a||void 0===a?void 0:a.headers)}),e.prev=1,l.interceptors.request.use(function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Authorization||u()&&(t.headers.Authorization="Bearer ".concat(u())),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,o.a.request(c);case 5:if(!(i=e.sent)){e.next=8;break}return e.abrupt("return",i);case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),null===e.t0||void 0===e.t0?void 0:e.t0.response;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()},500:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(21),s=a(1),i=a.n(s),o=a(5),l=a.n(o),u=a(58),d=a.n(u),b=a(82),p=a(483);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:b.tagPropType,transition:l.a.shape(p.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},p.a.defaultProps),{},{unmountOnExit:!0})};function v(e){var t=e.className,a=e.closeClassName,c=e.closeAriaLabel,s=e.cssModule,o=e.tag,l=e.color,u=e.isOpen,j=e.toggle,h=e.children,f=e.transition,v=e.fade,O=e.innerRef,g=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),x=Object(b.mapToCssModules)(d()(t,"alert","alert-"+l,{"alert-dismissible":j}),s),y=Object(b.mapToCssModules)(d()("close",a),s),N=m(m(m({},p.a.defaultProps),f),{},{baseClass:v?f.baseClass:"",timeout:v?f.timeout:0});return i.a.createElement(p.a,Object(n.a)({},g,N,{tag:o,className:x,in:u,role:"alert",innerRef:O}),j?i.a.createElement("button",{type:"button",className:y,"aria-label":c,onClick:j},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,h)}v.propTypes=h,v.defaultProps=f,t.a=v},501:function(e,t,a){},534:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),l=a(58),u=a.n(l),d=a(82),b={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tabs,i=e.pills,o=e.vertical,l=e.horizontal,b=e.justified,p=e.fill,j=e.navbar,m=e.card,h=e.tag,f=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(d.mapToCssModules)(u()(t,j?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":c,"card-header-tabs":m&&c,"nav-pills":i,"card-header-pills":m&&i,"nav-justified":b,"nav-fill":p}),a);return s.a.createElement(h,Object(n.a)({},f,{className:v}))};p.propTypes=b,p.defaultProps={tag:"ul",vertical:!1},t.a=p},542:function(e,t,a){"use strict";var n=a(14),r=a(121),c=a(1),s=a.n(c),i=a(5),o=a.n(i),l=a(58),u=a.n(l),d=a(488),b=a(82),p={tag:b.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,c=Object(b.omit)(this.props,Object.keys(p)),i=Object(b.mapToCssModules)(u()("tab-content",t),a);return s.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(r,Object(n.a)({},c,{className:i})))},t}(c.Component);t.a=j,j.propTypes=p,j.defaultProps={tag:"div"}},543:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),l=a(58),u=a.n(l),d=a(488),b=a(82),p={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function j(e){var t=e.className,a=e.cssModule,c=e.tabId,i=e.tag,o=Object(r.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(b.mapToCssModules)(u()("tab-pane",t,{active:c===e}),a)};return s.a.createElement(d.a.Consumer,null,(function(e){var t=e.activeTabId;return s.a.createElement(i,Object(n.a)({},o,{className:l(t)}))}))}j.propTypes=p,j.defaultProps={tag:"div"}},629:function(e,t,a){"use strict";var n=a(1),r=a(469),c=a(6);t.a=function(e){var t=e.icon,a=e.content;return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("div",{className:"toastify-header",children:Object(c.jsxs)("div",{className:"title-wrapper",children:[Object(c.jsx)(r.a,{size:"sm",color:"success",icon:t}),Object(c.jsx)("h6",{className:"toast-title font-weight-bold",children:"Update Berhasil"})]})}),Object(c.jsx)("div",{className:"toastify-body",children:Object(c.jsxs)("span",{children:[a," telah berhasil diupdate, silahkan cek kembali!"]})})]})}},674:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d})),a.d(t,"e",(function(){return b}));var n=a(485),r=a(484),c=a.n(r),s=a(497),i=a(482),o=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.a)(i.d,{params:e}).then((function(t){var n,r;a({type:"GET_DATA_CHARGE",data:null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data,totalPages:null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.total,params:e})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.a)(Object(i.e)(e)).then((function(e){var t;a({type:"GET_CHARGE_BYID",selectedCharge:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"POST",data:e},t.next=3,Object(s.a)(i.d,r).then((function(){a({type:"ADD_CHARGE",charge:e})})).then((function(){var e;a(o(null===(e=n().charges)||void 0===e?void 0:e.params))}));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.a)(Object(i.e)(e),{method:"DELETE"}).then((function(){a({type:"DELETE_CATEGORY"})})).then((function(){var e;a(o(null===(e=n().charges)||void 0===e?void 0:e.params))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e,a){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n,r){var l;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,l={method:"PUT",data:t},a.next=4,Object(s.a)(Object(i.e)(e),l).then((function(e){var t;e&&n({type:"UPDATE_CHARGE",data:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})})).then((function(){var e;n(o(null===(e=r().charges)||void 0===e?void 0:e.params))}));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e,t){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=102.fc49ccf7.chunk.js.map