(this["webpackJsonpadmin-dashboard-beliayam"]=this["webpackJsonpadmin-dashboard-beliayam"]||[]).push([[69],{1879:function(e,a,t){"use strict";t.r(a);var s=t(16),r=t(1),c=t(83),n=t.n(c),o=t(465),l=t(466),i=t(964),d=t(472),b=t(470),u=t(617),m=t(469),j=t(471),p=(t(965),t(6));a.default=function(){var e=Object(r.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1],g=Object(r.useState)(""),f=Object(s.a)(g,2),O=f[0],h=f[1];Object(r.useEffect)((function(){n.a.get("/faq/data/knowledge_base").then((function(e){return c(e.data)}))}),[]);var v=function(e){var a=e.item;return Object(p.jsx)(d.a,{className:"kb-search-content",md:"4",sm:"6",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(o.b,{to:"/pages/knowledge-base/".concat(a.category),children:[Object(p.jsx)(u.a,{src:a.img,alt:"knowledge-base-image",top:!0}),Object(p.jsxs)(m.a,{className:"text-center",children:[Object(p.jsx)("h4",{children:a.title}),Object(p.jsx)("p",{className:"text-body mt-1 mb-0",children:a.desc})]})]})})},a.id)};return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(l.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbActive:"Knowledge Base"}),Object(p.jsx)(i.a,{searchTerm:O,setSearchTerm:h}),null!==t?Object(p.jsx)("div",{id:"knowledge-base-content",children:Object(p.jsx)(j.a,{className:"kb-search-content-info match-height",children:t.map((function(e){var a=e.title.toLowerCase().includes(O.toLowerCase()),t=e.desc.toLowerCase().includes(O.toLowerCase());return O.length<1||a||t?Object(p.jsx)(v,{item:e},e.id):null}))})}):null]})}},466:function(e,a,t){"use strict";var s=t(465),r=t(1133),c=t(1066),n=t(1154),o=t(1149),l=t(1089),i=t(477),d=t(478),b=t(479),u=t(1346),m=t(1045),j=t(1055),p=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,g=e.breadCrumbParent2,f=e.breadCrumbParent3,O=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[a?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(d.a,{tag:"li",children:Object(p.jsx)(s.b,{to:"/",children:"Home"})}),Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),g?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",f?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:f}):"",Object(p.jsx)(d.a,{tag:"li",active:!0,children:O})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(u.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(r.a,{size:14})}),Object(p.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(c.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/email",children:[Object(p.jsx)(o.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/calendar",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},467:function(e,a,t){"use strict";var s=t(14),r=t(1),c=t.n(r),n=t(5),o=t.n(n),l=t(475),i={children:o.a.node},d=function(e){return c.a.createElement(l.a,Object(s.a)({group:!0},e))};d.propTypes=i,a.a=d},469:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,ref:c}))};m.propTypes=u,m.defaultProps={tag:"div"},a.a=m},470:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u={tag:b.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,u=e.tag,m=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(b.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return n.a.createElement(u,Object(s.a)({},j,{className:p,ref:m}))};m.propTypes=u,m.defaultProps={tag:"div"},a.a=m},471:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u=l.a.oneOfType([l.a.number,l.a.string]),m={tag:b.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var s=e[a];if(delete u[a],s){var r=!t;m.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var j=Object(b.mapToCssModules)(d()(a,c?"no-gutters":null,l?"form-row":"row",m),t);return n.a.createElement(o,Object(s.a)({},u,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},472:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),j={tag:b.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,s){var r=e[a];if(delete l[a],r||""===r){var c=!s;if(Object(b.isObject)(r)){var n,o=c?"-":"-"+a+"-",u=g(c,a,r.size);i.push(Object(b.mapToCssModules)(d()(((n={})[u]=r.size||""===r.size,n["order"+o+r.order]=r.order||0===r.order,n["offset"+o+r.offset]=r.offset||0===r.offset,n)),t))}else{var m=g(c,a,r);i.push(m)}}})),i.length||i.push("col");var u=Object(b.mapToCssModules)(d()(a,i),t);return n.a.createElement(o,Object(s.a)({},l,{className:u}))};f.propTypes=j,f.defaultProps=p,a.a=f},476:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-text"),t);return n.a.createElement(c,Object(s.a)({},o,{className:l}))};m.propTypes=u,m.defaultProps={tag:"p"},a.a=m},477:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u={tag:b.tagPropType,listTag:b.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,o=e.children,l=e.tag,i=e.listTag,u=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(b.mapToCssModules)(d()(a),c),p=Object(b.mapToCssModules)(d()("breadcrumb",t),c);return n.a.createElement(l,Object(s.a)({},m,{className:j,"aria-label":u}),n.a.createElement(i,{className:p},o))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},478:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u={tag:b.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,o=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(d()(a,!!c&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=u,m.defaultProps={tag:"li"},a.a=m},479:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var s=t(21),r=t(14),c=t(59),n=t(122),o=t(1),l=t.n(o),i=t(5),d=t.n(i),b=t(467),u=t(82);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var j=["defaultOpen"],p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return l.a.createElement(b.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,j)))},a}(o.Component);p.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},498:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(59),n=t(122),o=t(1),l=t.n(o),i=t(5),d=t.n(i),b=t(58),u=t.n(b),m=t(82),j={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,n=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(m.mapToCssModules)(u()(a,!!c&&"form-inline"),t);return l.a.createElement(n,Object(s.a)({},i,{ref:o,className:d}))},a}(o.Component);p.propTypes=j,p.defaultProps={tag:"form"},a.a=p},617:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),n=t.n(c),o=t(5),l=t.n(o),i=t(58),d=t.n(i),b=t(82),u={tag:b.tagPropType,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.top,o=e.bottom,l=e.tag,i=Object(r.a)(e,["className","cssModule","top","bottom","tag"]),u="card-img";c&&(u="card-img-top"),o&&(u="card-img-bottom");var m=Object(b.mapToCssModules)(d()(a,u),t);return n.a.createElement(l,Object(s.a)({},i,{className:m}))};m.propTypes=u,m.defaultProps={tag:"img"},a.a=m},756:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"},964:function(e,a,t){"use strict";var s=t(1071),r=t(470),c=t(469),n=t(476),o=t(498),l=t(1056),i=t(1057),d=t(829),b=t(1058),u=t(6);a.a=function(e){var a=e.searchTerm,m=e.setSearchTerm,j=e.handleFilter;return Object(u.jsx)("div",{id:"knowledge-base-search",children:Object(u.jsx)(r.a,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(t(756).default,")")},children:Object(u.jsxs)(c.a,{className:"text-center",children:[Object(u.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(u.jsxs)(n.a,{className:"mb-2",children:["Popular searches: ",Object(u.jsx)("span",{className:"font-weight-bolder",children:"Sales automation, Email marketing"})]}),Object(u.jsx)(o.a,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(u.jsxs)(l.a,{className:"input-group-merge",children:[Object(u.jsx)(i.a,{addonType:"prepend",children:Object(u.jsx)(d.a,{children:Object(u.jsx)(s.a,{size:14})})}),Object(u.jsx)(b.a,{value:a,onChange:function(e){return function(e){j?j(e):m(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},965:function(e,a,t){}}]);
//# sourceMappingURL=69.22efd477.chunk.js.map