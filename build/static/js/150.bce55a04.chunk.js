(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{1433:function(e,t,a){},1977:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(1),c=a(58),s=a.n(c),r=a(471),i=a(472),o=a(0),d=a(1848),u=a(1427),b=a(1157),j=a(1430),h=a(1432),O=a(470),v=a(128),p=a(469),m=a(468),f=a(1058),x=a(996),g=a(6),y=function(e){var t=e.title,a=e.icon,n=e.color;return Object(g.jsx)(l.Fragment,{children:Object(g.jsx)("div",{className:"toastify-header pb-0",children:Object(g.jsxs)("div",{className:"title-wrapper",children:[Object(g.jsx)(O.a,{size:"sm",color:n,icon:a}),Object(g.jsx)("h6",{className:"toast-title",children:t})]})})})},E=function(e){var t=Object(l.useRef)(null),a=e.store,n=e.isRtl,c=e.dispatch,s=e.calendarsColor,r=e.calendarApi,i=e.setCalendarApi,O=e.handleAddEventSidebar,E=e.blankEvent,N=e.toggleSidebar,C=e.selectEvent,D=e.updateEvent;Object(l.useEffect)((function(){null===r&&i(t.current.getApi())}),[r]);var S={events:a.events.length?a.events:[],plugins:[h.a,b.b,j.a,u.a],initialView:"dayGridMonth",headerToolbar:{start:"sidebarToggle, prev,next, title",end:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventClassNames:function(e){var t=e.event,a=s[t._def.extendedProps.calendar];return["bg-light-".concat(a)]},eventClick:function(e){var t=e.event;c(C(t)),O()},customButtons:{sidebarToggle:{text:Object(g.jsx)(f.a,{className:"d-xl-none d-block"}),click:function(){N(!0)}}},dateClick:function(e){var t=E;t.start=e.date,t.end=e.date,c(C(t)),O()},eventDrop:function(e){var t=e.event;c(D(t)),v.f.success(Object(g.jsx)(y,{title:"Event Updated",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},eventResize:function(e){var t=e.event;c(D(t)),v.f.success(Object(g.jsx)(y,{title:"Event Updated",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},ref:t,direction:n?"rtl":"ltr"};return Object(g.jsx)(p.a,{className:"shadow-none border-0 mb-0 rounded-0",children:Object(g.jsxs)(m.a,{className:"pb-0",children:[Object(g.jsx)(d.a,Object(o.a)({},S))," "]})})},N=Object(l.memo)(E),C=a(21),D=a(463),S=a(931),w=a(799),k=[{label:"Personal",color:"danger",className:"custom-control-danger mb-1"},{label:"Business",color:"primary",className:"custom-control-primary mb-1"},{label:"Family",color:"warning",className:"custom-control-warning mb-1"},{label:"Holiday",color:"success",className:"custom-control-success mb-1"},{label:"ETC",color:"info",className:"custom-control-info"}],A=function(e){var t=e.handleAddEventSidebar,a=e.toggleSidebar,n=e.updateFilter,c=e.updateAllFilters,r=e.store,i=e.dispatch;return Object(g.jsxs)(l.Fragment,{children:[Object(g.jsxs)("div",{className:"sidebar-wrapper",children:[Object(g.jsx)(m.a,{className:"card-body d-flex justify-content-center my-sm-0 mb-3",children:Object(g.jsx)(D.a.Ripple,{color:"primary",block:!0,onClick:function(){a(!1),t()},children:Object(g.jsx)("span",{className:"align-middle",children:"Add Event"})})}),Object(g.jsxs)(m.a,{children:[Object(g.jsx)("h5",{className:"section-label mb-1",children:Object(g.jsx)("span",{className:"align-middle",children:"Filter"})}),Object(g.jsx)(S.a,{type:"checkbox",className:"mb-1",label:"View All",id:"view-all",checked:r.selectedCalendars.length===k.length,onChange:function(e){return i(c(e.target.checked))}}),Object(g.jsx)("div",{className:"calendar-events-filter",children:k.length&&k.map((function(e){return Object(g.jsx)(S.a,{type:"checkbox",id:e.label,label:e.label,checked:r.selectedCalendars.includes(e.label),className:s()(Object(C.a)({},e.className,e.className)),onChange:function(t){return i(n(e.label))}},e.label)}))})]})]}),Object(g.jsx)("div",{className:"mt-auto",children:Object(g.jsx)("img",{className:"img-fluid",src:w.default,alt:"illustration"})})]})},F=a(124),P=a(122),B=a(492),T=a.n(B),R=a(1095),L=a(933),U=a(657),V=a(516),_=a(496),G=a(535),M=a(546),H=a(527),z=a(487),I=a(934),J=a(486),q=a(962),Y=a(482),W=a(24),K=a(64),Q=a(63),X=a(90),Z=a(37),$=a(272),ee=(a(523),a(483),["data"]),te=["data"],ae=function(e){var t=e.title,a=e.icon,n=e.color;return Object(g.jsx)(l.Fragment,{children:Object(g.jsx)("div",{className:"toastify-header pb-0",children:Object(g.jsxs)("div",{className:"title-wrapper",children:[Object(g.jsx)(O.a,{size:"sm",color:n,icon:a}),Object(g.jsx)("h6",{className:"toast-title",children:t})]})})})},ne=function(e){var t=e.store,a=e.dispatch,c=e.open,r=e.handleAddEventSidebar,i=e.calendarsColor,d=e.calendarApi,u=e.refetchEvents,b=e.addEvent,j=e.selectEvent,h=e.updateEvent,p=e.removeEvent,m=t.selectedEvent,f=Object(_.c)(),y=f.register,E=f.errors,N=f.handleSubmit,C=Object(l.useState)(""),w=Object(n.a)(C,2),k=w[0],A=w[1],B=Object(l.useState)(""),ne=Object(n.a)(B,2),le=ne[0],ce=ne[1],se=Object(l.useState)(""),re=Object(n.a)(se,2),ie=re[0],oe=re[1],de=Object(l.useState)({}),ue=Object(n.a)(de,2),be=ue[0],je=ue[1],he=Object(l.useState)(!1),Oe=Object(n.a)(he,2),ve=Oe[0],pe=Oe[1],me=Object(l.useState)(""),fe=Object(n.a)(me,2),xe=fe[0],ge=fe[1],ye=Object(l.useState)(new Date),Ee=Object(n.a)(ye,2),Ne=Ee[0],Ce=Ee[1],De=Object(l.useState)(new Date),Se=Object(n.a)(De,2),we=Se[0],ke=Se[1],Ae=Object(l.useState)([{value:"Business",label:"Business",color:"primary"}]),Fe=Object(n.a)(Ae,2),Pe=Fe[0],Be=Fe[1],Te=[{value:"Donna Frank",label:"Donna Frank",avatar:W.default},{value:"Jane Foster",label:"Jane Foster",avatar:K.default},{value:"Gabrielle Robertson",label:"Gabrielle Robertson",avatar:Q.default},{value:"Lori Spears",label:"Lori Spears",avatar:X.default},{value:"Sandy Vega",label:"Sandy Vega",avatar:Z.default},{value:"Cheryl May",label:"Cheryl May",avatar:$.default}],Re=function(){var e={id:m.id,title:ie,allDay:ve,start:we,end:Ne,url:k,extendedProps:{location:xe,description:le,guests:be,calendar:Pe[0].label}};a(h(e)),function(e,t,a){for(var n=d.getEventById(e.id),l=0;l<t.length;l++){var c=t[l];n.setProp(c,e[c])}n.setDates(e.start,e.end,{allDay:e.allDay});for(var s=0;s<a.length;s++){var r=a[s];n.setExtendedProp(r,e.extendedProps[r])}}(e,["id","title","url"],["calendar","guests","location","description"]),r(),v.f.success(Object(g.jsx)(ae,{title:"Event Updated",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},Le=function(){var e;a(p(m.id)),e=m.id,d.getEventById(e).remove(),r(),v.f.error(Object(g.jsx)(ae,{title:"Event Removed",color:"danger",icon:Object(g.jsx)(R.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},Ue=function(){return Object(Y.e)(m)||!Object(Y.e)(m)&&!m.title.length?Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)(D.a.Ripple,{className:"mr-1",type:"submit",color:"primary",children:"Add"}),Object(g.jsx)(D.a.Ripple,{color:"secondary",type:"reset",onClick:r,outline:!0,children:"Cancel"})]}):Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)(D.a.Ripple,{className:"mr-1",color:"primary",children:"Update"}),Object(g.jsx)(D.a.Ripple,{color:"danger",onClick:Le,outline:!0,children:"Delete"})]})},Ve=Object(g.jsx)(L.a,{className:"cursor-pointer",size:15,onClick:r});return Object(g.jsxs)(G.a,{isOpen:c,toggle:r,className:"sidebar-lg",contentClassName:"p-0",onOpened:function(){if(!Object(Y.e)(m)){var e=m.extendedProps.calendar;oe(m.title||ie),pe(m.allDay||ve),A(m.url||k),ge(m.extendedProps.location||xe),ce(m.extendedProps.description||le),je(m.extendedProps.guests||be),ke(new Date(m.start)),Ce(m.allDay?new Date(m.start):new Date(m.end)),Be([e.length?{label:e,value:e,color:i[e]}:{value:"Business",label:"Business",color:"primary"}])}},onClosed:function(){a(j({})),oe(""),pe(!1),A(""),ge(""),ce(""),je({}),Be([{value:"Business",label:"Business",color:"primary"}]),ke(new Date),Ce(new Date)},modalClassName:"modal-slide-in event-sidebar",children:[Object(g.jsx)(M.a,{className:"mb-1",toggle:r,close:Ve,tag:"div",children:Object(g.jsxs)("h5",{className:"modal-title",children:[m&&m.title&&m.title.length?"Update":"Add"," Event"]})}),Object(g.jsx)(H.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:Object(g.jsxs)(z.a,{onSubmit:N((function(e){Object(Y.e)(E)&&(Object(Y.e)(m)||!Object(Y.e)(m)&&!m.title.length?function(){var e={title:ie,start:we,end:Ne,allDay:ve,display:"block",extendedProps:{calendar:Pe[0].label,url:k.length?k:void 0,guests:be.length?be:void 0,location:xe.length?xe:void 0,desc:le.length?le:void 0}};a(b(e)),u(),r(),v.f.success(Object(g.jsx)(ae,{title:"Event Added",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})}():Re(),r())})),children:[Object(g.jsxs)(I.a,{children:[Object(g.jsxs)(J.a,{for:"title",children:["Title ",Object(g.jsx)("span",{className:"text-danger",children:"*"})]}),Object(g.jsx)(q.a,{id:"title",name:"title",placeholder:"Title",value:ie,onChange:function(e){return oe(e.target.value)},innerRef:y({register:!0,validate:function(e){return""!==e}}),className:s()({"is-invalid":E.title})})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"label",children:"Label"}),Object(g.jsx)(V.a,{id:"label",value:Pe,options:[{value:"Business",label:"Business",color:"primary"},{value:"Personal",label:"Personal",color:"danger"},{value:"Family",label:"Family",color:"warning"},{value:"Holiday",label:"Holiday",color:"success"},{value:"ETC",label:"ETC",color:"info"}],theme:Y.h,className:"react-select",classNamePrefix:"select",isClearable:!1,onChange:function(e){return Be([e])},components:{Option:function(e){var t=e.data,a=Object(P.a)(e,ee);return Object(g.jsxs)(U.e.Option,Object(o.a)(Object(o.a)({},a),{},{children:[Object(g.jsx)("span",{className:"bullet bullet-".concat(t.color," bullet-sm mr-50")}),t.label]}))}}})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"startDate",children:"Start Date"}),Object(g.jsx)(T.a,{required:!0,id:"startDate",name:"startDate",className:"form-control",onChange:function(e){return ke(e[0])},value:we,options:{enableTime:!1===ve,dateFormat:"Y-m-d H:i"}})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"endDate",children:"End Date"}),Object(g.jsx)(T.a,{required:!0,id:"endDate",name:"endDate",className:"form-control",onChange:function(e){return Ce(e[0])},value:Ne,options:{enableTime:!1===ve,dateFormat:"Y-m-d H:i"}})]}),Object(g.jsx)(I.a,{children:Object(g.jsx)(S.a,{type:"switch",id:"allDay",name:"customSwitch",label:"All Day",checked:ve,onChange:function(e){return pe(e.target.checked)},inline:!0})}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"eventURL",children:"Event URL"}),Object(g.jsx)(q.a,{type:"url",id:"eventURL",value:k,onChange:function(e){return A(e.target.value)},placeholder:"https://www.google.com"})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"guests",children:"Guests"}),Object(g.jsx)(V.a,{isMulti:!0,id:"guests",className:"react-select",classNamePrefix:"select",isClearable:!1,options:Te,theme:Y.h,value:be.length?Object(F.a)(be):null,onChange:function(e){return je(Object(F.a)(e))},components:{Option:function(e){var t=e.data,a=Object(P.a)(e,te);return Object(g.jsx)(U.e.Option,Object(o.a)(Object(o.a)({},a),{},{children:Object(g.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(g.jsx)(O.a,{className:"my-0 mr-1",size:"sm",img:t.avatar}),Object(g.jsx)("div",{children:t.label})]})}))}}})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"location",children:"Location"}),Object(g.jsx)(q.a,{id:"location",value:xe,onChange:function(e){return ge(e.target.value)},placeholder:"Office"})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"description",children:"Description"}),Object(g.jsx)(q.a,{type:"textarea",name:"text",id:"description",rows:"3",value:le,onChange:function(e){return ce(e.target.value)},placeholder:"Description"})]}),Object(g.jsx)(I.a,{className:"d-flex",children:Object(g.jsx)(Ue,{})})]})})]})},le=a(585),ce=a(123),se=a(83),re=a.n(se),ie=function(e){return function(t){re.a.get("/apps/calendar/events",{calendars:e}).then((function(e){t({type:"FETCH_EVENTS",events:e.data})}))}},oe=function(e){return function(t,a){re.a.post("/apps/calendar/add-event",{event:e}).then((function(){t({type:"ADD_EVENT"}),t(ie(a().calendar.selectedCalendars))}))}},de=function(e){return function(t){re.a.post("/apps/calendar/update-event",{event:e}).then((function(){t({type:"UPDATE_EVENT"})}))}},ue=function(e){return function(t,a){t({type:"UPDATE_FILTERS",filter:e}),t(ie(a().calendar.selectedCalendars))}},be=function(e){return function(t,a){t({type:"UPDATE_ALL_FILTERS",value:e}),t(ie(a().calendar.selectedCalendars))}},je=function(e){return function(t){re.a.delete("/apps/calendar/remove-event",{id:e}).then((function(){t({type:"REMOVE_EVENT"})}))}},he=function(e){return function(t){t({type:"SELECT_EVENT",event:e})}},Oe=(a(1433),{Business:"primary",Holiday:"success",Personal:"danger",Family:"warning",ETC:"info"});t.default=function(){var e=Object(ce.b)(),t=Object(ce.c)((function(e){return e.calendar})),a=Object(l.useState)(!1),c=Object(n.a)(a,2),o=c[0],d=c[1],u=Object(l.useState)(!1),b=Object(n.a)(u,2),j=b[0],h=b[1],O=Object(l.useState)(null),v=Object(n.a)(O,2),p=v[0],m=v[1],f=Object(le.a)(),x=Object(n.a)(f,2),y=x[0],E=(x[1],function(){return d(!o)}),C=function(e){return h(e)};return Object(l.useEffect)((function(){e(ie(t.selectedCalendars))}),[]),Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)("div",{className:"app-calendar overflow-hidden border",children:Object(g.jsxs)(r.a,{noGutters:!0,children:[Object(g.jsx)(i.a,{id:"app-calendar-sidebar",className:s()("col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column",{show:j}),children:Object(g.jsx)(A,{store:t,dispatch:e,updateFilter:ue,toggleSidebar:C,updateAllFilters:be,handleAddEventSidebar:E})}),Object(g.jsx)(i.a,{className:"position-relative",children:Object(g.jsx)(N,{isRtl:y,store:t,dispatch:e,blankEvent:{title:"",start:"",end:"",allDay:!1,url:"",extendedProps:{calendar:"",guests:[],location:"",description:""}},calendarApi:p,selectEvent:he,updateEvent:de,toggleSidebar:C,calendarsColor:Oe,setCalendarApi:m,handleAddEventSidebar:E})}),Object(g.jsx)("div",{className:s()("body-content-overlay",{show:!0===j}),onClick:function(){return C(!1)}})]})}),Object(g.jsx)(ne,{store:t,dispatch:e,addEvent:oe,open:o,selectEvent:he,updateEvent:de,removeEvent:je,calendarApi:p,refetchEvents:function(){null!==p&&p.refetchEvents()},calendarsColor:Oe,handleAddEventSidebar:E})]})}},483:function(e,t,a){},799:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/calendar-illustration.42be42ce.png"}}]);
//# sourceMappingURL=150.bce55a04.chunk.js.map