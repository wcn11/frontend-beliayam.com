(this["webpackJsonpadmin-dashboard-beliayam"]=this["webpackJsonpadmin-dashboard-beliayam"]||[]).push([[115],{1740:function(e,t,a){},1975:function(e,t,a){"use strict";a.r(t);var s=a(16),c=a(1),l=a(83),n=a.n(l),r=a(471),i=a(472),o=a(584),u=a(6),d=function(e){var t=e.data;return Object(u.jsxs)("div",{className:"pricing-faq",children:[Object(u.jsx)("h3",{className:"text-center",children:"FAQ's"}),Object(u.jsx)("p",{className:"text-center",children:"Let us help answer the most common questions."}),Object(u.jsx)(r.a,{className:"my-2",children:Object(u.jsx)(i.a,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:Object(u.jsx)(o.a,{type:"margin",data:t,titleKey:"question",contentKey:"ans",accordion:!0})})})]})},j=a(21),m=a(58),b=a.n(m),p=a(470),h=a(468),f=a(1140),O=a(476),g=a(572),x=a(573),y=a(463),N=function(e){var t=e.data,a=e.duration;return Object(u.jsx)(r.a,{className:"pricing-card",children:Object(u.jsx)(i.a,{className:"mx-auto",sm:{offset:2,size:10},lg:{offset:2,size:10},md:"12",children:Object(u.jsx)(r.a,{children:t.map((function(e,t){var s,c="yearly"===a?e.yearlyPlan.perMonth:e.monthlyPrice,l="yearly"===a?e.yearlyPlan.totalAnnual:e.monthlyPrice,n="Basic"===e.title?"mb-2 mt-5":"Standard"===e.title?"mb-1":"mb-2";return Object(u.jsx)(i.a,{md:"4",xs:"12",children:Object(u.jsx)(p.a,{className:b()("text-center",(s={},Object(j.a)(s,"".concat(e.title.toLowerCase(),"-pricing"),e.title),Object(j.a)(s,"popular",!0===e.popular),s)),children:Object(u.jsxs)(h.a,{children:[!0===e.popular?Object(u.jsx)("div",{className:"pricing-badge text-right",children:Object(u.jsx)(f.a,{color:"light-primary",pill:!0,children:"Popular"})}):null,Object(u.jsx)("img",{className:n,src:e.img,alt:"pricing svg"}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)(O.a,{children:e.subtitle}),Object(u.jsxs)("div",{className:"annual-plan",children:[Object(u.jsxs)("div",{className:"plan-price mt-2",children:[Object(u.jsx)("sup",{className:"font-medium-1 font-weight-bold text-primary mr-25",children:"$"}),Object(u.jsx)("span",{className:"pricing-".concat(e.title.toLowerCase(),"-value font-weight-bolder text-primary"),children:c}),Object(u.jsx)("span",{className:"pricing-duration text-body font-medium-1 font-weight-bold ml-25",children:"/month"})]}),"Basic"!==e.title&&"yearly"===a?Object(u.jsxs)("small",{className:"annual-pricing text-muted",children:["USD ",l," / year"]}):null]}),Object(u.jsx)(g.a,{tag:"ul",className:"list-group-circle text-left mb-2",children:e.planBenefits.map((function(e,t){return Object(u.jsx)(x.a,{tag:"li",children:e},t)}))}),Object(u.jsx)(y.a.Ripple,{color:"Basic"===e.title?"success":"primary",outline:"Standard"!==e.title,block:!0,children:"Basic"===e.title?"Your current plan":"Upgrade"})]})})},t)}))})})})},v=a.p+"static/media/pricing-Illustration.1f07f42e.svg",M=function(){return Object(u.jsx)("div",{className:"pricing-free-trial",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(i.a,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:Object(u.jsxs)("div",{className:"pricing-trial-content d-flex justify-content-between",children:[Object(u.jsxs)("div",{className:"text-center text-md-left mt-3",children:[Object(u.jsx)("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),Object(u.jsx)("h5",{children:"You will get full access to with all the features for 14 days."}),Object(u.jsx)("div",{className:"mt-2 mt-lg-3",children:Object(u.jsx)(y.a.Ripple,{color:"primary",children:"Start 14-day FREE trial"})})]}),Object(u.jsx)("img",{className:"pricing-trial-img img-fluid",src:v,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})})},w=(a(660),a(1104)),T=function(e){var t=e.duration,a=e.setDuration;return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h1",{className:"mt-5",children:"Pricing Plans"}),Object(u.jsx)("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[Object(u.jsx)("h6",{className:"mr-1 mb-0",children:"Monthly"}),Object(u.jsx)(w.a,{id:"plan-switch",type:"switch",checked:"yearly"===t,onChange:function(e){e.target.checked?a("yearly"):a("monthly")}}),Object(u.jsx)("h6",{className:"ml-50 mb-0",children:"Annually"})]})]})};a(1740),t.default=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(null),i=Object(s.a)(r,2),o=i[0],j=i[1],m=Object(c.useState)("monthly"),b=Object(s.a)(m,2),p=b[0],h=b[1];return Object(c.useEffect)((function(){n.a.get("/pricing/data").then((function(e){var t=[],a=[];Object.entries(e.data).forEach((function(e){var c=Object(s.a)(e,2),n=c[0],r=c[1];"qandA"!==n?(t.push(r),l([].concat(t))):(a.push(r),j(a[0]))}))}))}),[]),Object(u.jsxs)("div",{id:"pricing-table",children:[Object(u.jsx)(T,{duration:p,setDuration:h}),null!==a&&null!==o?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(N,{data:a,duration:p}),Object(u.jsx)(M,{}),Object(u.jsx)(d,{data:o})]}):null]})}},471:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j=i.a.oneOfType([i.a.number,i.a.string]),m={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,a=e.cssModule,l=e.noGutters,r=e.tag,i=e.form,o=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];o.forEach((function(t,a){var s=e[t];if(delete j[t],s){var c=!a;m.push(c?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var b=Object(d.mapToCssModules)(u()(t,l?"no-gutters":null,i?"form-row":"row",m),a);return n.a.createElement(r,Object(s.a)({},j,{className:b}))};p.propTypes=m,p.defaultProps=b,t.a=p},472:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:j,offset:j})]),b={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},f=function(e){var t=e.className,a=e.cssModule,l=e.widths,r=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];l.forEach((function(t,s){var c=e[t];if(delete i[t],c||""===c){var l=!s;if(Object(d.isObject)(c)){var n,r=l?"-":"-"+t+"-",j=h(l,t,c.size);o.push(Object(d.mapToCssModules)(u()(((n={})[j]=c.size||""===c.size,n["order"+r+c.order]=c.order||0===c.order,n["offset"+r+c.offset]=c.offset||0===c.offset,n)),a))}else{var m=h(l,t,c);o.push(m)}}})),o.length||o.push("col");var j=Object(d.mapToCssModules)(u()(t,o),a);return n.a.createElement(r,Object(s.a)({},i,{className:j}))};f.propTypes=b,f.defaultProps=p,t.a=f},473:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-title"),a);return n.a.createElement(l,Object(s.a)({},r,{className:i}))};m.propTypes=j,m.defaultProps={tag:"div"},t.a=m},474:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-header"),a);return n.a.createElement(l,Object(s.a)({},r,{className:i}))};m.propTypes=j,m.defaultProps={tag:"div"},t.a=m},476:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-text"),a);return n.a.createElement(l,Object(s.a)({},r,{className:i}))};m.propTypes=j,m.defaultProps={tag:"p"},t.a=m},572:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j={tag:d.tagPropType,flush:i.a.bool,className:i.a.string,cssModule:i.a.object,horizontal:i.a.oneOfType([i.a.bool,i.a.string])},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=e.flush,i=e.horizontal,o=Object(c.a)(e,["className","cssModule","tag","flush","horizontal"]),j=Object(d.mapToCssModules)(u()(t,"list-group",r?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(i)),a);return n.a.createElement(l,Object(s.a)({},o,{className:j}))};m.propTypes=j,m.defaultProps={tag:"ul",horizontal:!1},t.a=m},573:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(5),i=a.n(r),o=a(58),u=a.n(o),d=a(82),j={tag:d.tagPropType,active:i.a.bool,disabled:i.a.bool,color:i.a.string,action:i.a.bool,className:i.a.any,cssModule:i.a.object},m=function(e){e.preventDefault()},b=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=e.active,i=e.disabled,o=e.action,j=e.color,b=Object(c.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(d.mapToCssModules)(u()(t,!!r&&"active",!!i&&"disabled",!!o&&"list-group-item-action",!!j&&"list-group-item-"+j,"list-group-item"),a);return i&&(b.onClick=m),n.a.createElement(l,Object(s.a)({},b,{className:p}))};b.propTypes=j,b.defaultProps={tag:"li"},t.a=b},584:function(e,t,a){"use strict";var s=a(0),c=a(21),l=a(16),n=a(127),r=a(1),i=a(58),o=a.n(i),u=a(1173),d=a(470),j=a(474),m=a(473),b=a(793),p=a(468),h=a(6),f=function(e){var t,a=e.data,i=e.type,f=e.accordion,O=e.active,g=e.toggle,x=e.titleKey,y=e.contentKey,N=e.className,v=Object(r.useState)(f?O:Object(n.a)(O)),M=Object(l.a)(v,2),w=M[0],T=M[1],P=function(e){if(f)T(e===w?null:e);else{var t=w,a=t.indexOf(e);t.includes(e)?(t.splice(a,1),T(Object(n.a)(t))):(t.push(e),T(Object(n.a)(t)))}};return Object(h.jsx)("div",{className:o()("collapse-icon",(t={},Object(c.a)(t,N,N),Object(c.a)(t,"collapse-default",!i),Object(c.a)(t,"collapse-shadow","shadow"===i),Object(c.a)(t,"collapse-border","border"===i),Object(c.a)(t,"collapse-margin","margin"===i),t)),children:a.map((function(e,t){var a,l=x?e[x]:e.title,n=y?e[y]:e.content;return Object(h.jsxs)(d.a,{className:o()("app-collapse",(a={},Object(c.a)(a,e.className,e.className),Object(c.a)(a,"open",f?w===t:w.includes(t)&&"shadow"===i),a)),children:[Object(h.jsxs)(j.a,Object(s.a)(Object(s.a)({className:o()("align-items-center",{collapsed:f?w!==t:!w.includes(t)})},"hover"===g?{onMouseEnter:function(){return P(t)}}:{onClick:function(){return P(t)}}),{},{children:[Object(h.jsx)(m.a,{className:"collapse-title",children:l}),Object(h.jsx)(u.a,{size:14})]})),Object(h.jsx)(b.a,{isOpen:f?w===t:w.includes(t),children:Object(h.jsx)(p.a,{children:n})})]},t)}))})};t.a=f,f.defaultProps={active:[],toggle:"click"}}}]);
//# sourceMappingURL=115.47d5837e.chunk.js.map