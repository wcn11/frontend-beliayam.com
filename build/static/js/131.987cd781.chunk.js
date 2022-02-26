(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[131],{1799:function(e,s,a){},1957:function(e,s,a){"use strict";a.r(s);var l=a(0),t=a(470),c=a(471),r=a(465),n=a(468),i=a(475),j=a(473),d=a(469),m=a(1980),b=a(1874),o=a(1787),x=a(890),h=a(6),u=function(e){var s=[{name:"R&D",value:50,color:e.series2},{name:"Operational",value:85,color:e.series1},{name:"Networking",value:16,color:e.series5},{name:"Hiring",value:50,color:e.series3}],a=Math.PI/180;return Object(h.jsxs)(n.a,{children:[Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(j.a,{tag:"h4",children:"Expense Ratio"}),Object(h.jsx)("small",{className:"text-muted",children:"Spending on various categories"})]})}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)("div",{className:"recharts-wrapper",children:Object(h.jsx)(m.a,{children:Object(h.jsx)(b.a,{height:350,children:Object(h.jsx)(o.a,{data:s,innerRadius:80,dataKey:"value",label:function(s){var l=s.cx,t=s.cy,c=s.midAngle,r=s.innerRadius,n=s.outerRadius,i=s.percent,j=s.fill,d=r+.5*(n-r),m=l+d*Math.cos(-c*a),b=t+d*Math.sin(-c*a);return Object(h.jsx)("text",{x:m,y:b,fill:j===e.secondary?"#000":"#fff",textAnchor:"middle",dominantBaseline:"central",children:"".concat((100*i).toFixed(0),"%")})},labelLine:!1,children:s.map((function(e,s){return Object(h.jsx)(x.a,{fill:e.color,label:!0},"cell-".concat(s))}))})})})}),Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-wrap",children:[Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#ffe700"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Operational"})]}),Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#ffa1a1"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Networking"})]}),Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-primary bullet-bordered mr-50"}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Hiring"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#00d4bd"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"R&D"})]})]})]})]})},O=a(998),p=a(490),g=a.n(p),y=a(1879),f=a(1880),v=a(775),N=a(776),k=a(1845),w=a(1792),C=[{name:"7/12",apple:80,samsung:130,oneplus:150,motorola:210},{name:"8/12",apple:100,samsung:150,oneplus:170,motorola:380},{name:"9/12",apple:80,samsung:140,oneplus:160,motorola:220},{name:"10/12",apple:100,samsung:150,oneplus:170,motorola:380},{name:"11/12",apple:50,samsung:90,oneplus:110,motorola:150},{name:"12/12",apple:125,samsung:90,oneplus:100,motorola:65},{name:"13/12",apple:70,samsung:110,oneplus:130,motorola:210},{name:"14/12",apple:100,samsung:150,oneplus:170,motorola:380},{name:"15/12",apple:80,samsung:100,oneplus:120,motorola:180},{name:"16/12",apple:30,samsung:60,oneplus:70,motorola:110}],K=function(e){return e.active&&e.payload?Object(h.jsxs)("div",{className:"recharts-custom-tooltip",children:[Object(h.jsx)("p",{className:"font-weight-bold mb-0",children:e.label}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"active",children:e.payload.map((function(e){return Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("span",{className:"bullet  bullet-sm bullet-bordered mr-50",style:{backgroundColor:e.fill}}),Object(h.jsxs)("span",{className:"align-middle text-capitalize mr-75",children:[e.dataKey," : ",e.payload[e.dataKey]]})]},e.dataKey)}))})]}):null},S=function(){return Object(h.jsxs)(n.a,{children:[Object(h.jsxs)(i.a,{className:"flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start",children:[Object(h.jsx)(j.a,{tag:"h4",children:"Brand Turnover"}),Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(O.a,{size:15}),Object(h.jsx)(g.a,{options:{mode:"range",defaultDate:["2019-05-01","2019-05-10"]},className:"form-control flat-picker bg-transparent border-0 shadow-none"})]})]}),Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("div",{className:"d-flex align-items-center flex-wrap mb-2",children:[Object(h.jsxs)("div",{className:"mr-1",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#826af9"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Apple"})]}),Object(h.jsxs)("div",{className:"mr-1",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#9f87ff"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Samsung"})]}),Object(h.jsxs)("div",{className:"mr-1",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#d2b0ff"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Oneplus"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#f8d3ff"}}),Object(h.jsx)("span",{className:"align-middle",children:"Motorola"})]})]}),Object(h.jsx)("div",{className:"recharts-wrapper bar-chart",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(y.a,{height:300,data:C,barSize:15,children:[Object(h.jsx)(f.a,{strokeDasharray:"3 3"}),Object(h.jsx)(v.a,{dataKey:"name"}),Object(h.jsx)(N.a,{}),Object(h.jsx)(k.a,{content:K}),Object(h.jsx)(w.a,{dataKey:"apple",stackId:"a",fill:"#826af9"}),Object(h.jsx)(w.a,{dataKey:"samsung",stackId:"a",fill:"#9f87ff"}),Object(h.jsx)(w.a,{dataKey:"oneplus",stackId:"a",fill:"#d2b0ff"}),Object(h.jsx)(w.a,{dataKey:"motorola",stackId:"a",fill:"#f8d3ff",radius:[15,15,0,0]})]})})})]})]})},P=a(972),z=a(987),R=a(1881),A=a(1793),D=[{name:"7/12",pv:280},{name:"8/12",pv:200},{name:"9/12",pv:220},{name:"10/12",pv:180},{name:"11/12",pv:270},{name:"12/12",pv:250},{name:"13/12",pv:70},{name:"14/12",pv:90},{name:"15/12",pv:200},{name:"16/12",pv:150},{name:"17/12",pv:160},{name:"18/12",pv:100},{name:"19/12",pv:150},{name:"20/12",pv:100},{name:"21/12",pv:50}],I=function(e){var s=e.active,a=e.payload;return s&&a?Object(h.jsx)("div",{className:"recharts-custom-tooltip",children:Object(h.jsx)("span",{children:"".concat(a[0].value,"%")})}):null},M=function(e){var s=e.warning;return Object(h.jsxs)(n.a,{children:[Object(h.jsxs)(i.a,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(j.a,{tag:"h4",children:"Balance"}),Object(h.jsx)("small",{className:"text-muted",children:"Commercial networks & enterprises"})]}),Object(h.jsxs)("div",{className:"d-flex align-items-center flex-wrap mt-sm-0 mt-1",children:[Object(h.jsx)("h5",{className:"font-weight-bold mb-0 mr-1",children:"$ 100,000"}),Object(h.jsxs)(P.a,{className:"badge-md",color:"light-secondary",children:[Object(h.jsx)(z.a,{className:"text-danger mr-50",size:15}),"20%"]})]})]}),Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{className:"recharts-wrapper",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(R.a,{height:300,data:D,children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(v.a,{dataKey:"name"}),Object(h.jsx)(N.a,{}),Object(h.jsx)(k.a,{content:I}),Object(h.jsx)(A.a,{dataKey:"pv",stroke:s,strokeWidth:3})]})})})})]})},B=a(1882),F=a(1794),T=[{name:"7/12",sales:20,clicks:60,visits:100},{name:"8/12",sales:40,clicks:80,visits:120},{name:"9/12",sales:30,clicks:70,visits:90},{name:"10/12",sales:70,clicks:110,visits:170},{name:"11/12",sales:40,clicks:80,visits:130},{name:"12/12",sales:60,clicks:80,visits:160},{name:"13/12",sales:50,clicks:100,visits:140},{name:"14/12",sales:140,clicks:90,visits:240},{name:"15/12",sales:120,clicks:180,visits:220},{name:"16/12",sales:100,clicks:160,visits:180},{name:"17/12",sales:140,clicks:140,visits:270},{name:"18/12",sales:180,clicks:200,visits:280},{name:"19/12",sales:220,clicks:220,visits:375}],H=function(e){return e.active&&e.payload?Object(h.jsxs)("div",{className:"recharts-custom-tooltip",children:[Object(h.jsx)("p",{className:"font-weight-bold mb-0",children:e.label}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"active",children:e.payload.map((function(e){return Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:e.fill}}),Object(h.jsxs)("span",{className:"align-middle text-capitalize mr-75",children:[e.dataKey," : ",e.payload[e.dataKey]]})]},e.dataKey)}))})]}):null},V=function(e){e.primary;return Object(h.jsxs)(n.a,{children:[Object(h.jsxs)(i.a,{className:"flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start",children:[Object(h.jsx)(j.a,{tag:"h4",children:"Website Data"}),Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(O.a,{size:15}),Object(h.jsx)(g.a,{options:{mode:"range",defaultDate:["2019-05-01","2019-05-10"]},className:"form-control flat-picker bg-transparent border-0 shadow-none"})]})]}),Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-primary bullet-bordered mr-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Clicks"})]}),Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"rgba(115, 103, 240, .5)"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Sales"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"rgba(115, 103, 240, .2)"}}),Object(h.jsx)("span",{className:"align-middle",children:"Visits"})]})]}),Object(h.jsx)("div",{className:"recharts-wrapper",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(B.a,{height:400,data:T,children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(v.a,{dataKey:"name"}),Object(h.jsx)(N.a,{}),Object(h.jsx)(k.a,{content:H}),Object(h.jsx)(F.a,{dataKey:"sales",stackId:"sales",stroke:"0",fill:"rgba(115, 103, 240, .5)"}),Object(h.jsx)(F.a,{dataKey:"clicks",stackId:"clicks",stroke:"0",fill:"rgb(115, 103, 240)"}),Object(h.jsx)(F.a,{dataKey:"visits",stackId:"visits",stroke:"0",fill:"rgba(115, 103, 240, .2)"})]})})})]})]})},E=a(1883),J=a(1884),W=a(1250),L=a(1252),U=a(1795),$=[{subject:"Battery","iPhone 11":41,"Samsung s20":65},{subject:"Brand","iPhone 11":64,"Samsung s20":46},{subject:"Camera","iPhone 11":81,"Samsung s20":42},{subject:"Memory","iPhone 11":60,"Samsung s20":25},{subject:"Storage","iPhone 11":42,"Samsung s20":58},{subject:"Display","iPhone 11":42,"Samsung s20":63},{subject:"OS","iPhone 11":33,"Samsung s20":76},{subject:"Price","iPhone 11":23,"Samsung s20":43}],_=function(e){var s=e.series1,a=e.series3;return Object(h.jsxs)(n.a,{children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{tag:"h4",children:"Mobile Comparison"})}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)("div",{className:"recharts-wrapper",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(E.a,{cx:"50%",cy:"50%",height:400,data:$,children:[Object(h.jsx)(J.a,{}),Object(h.jsx)(W.a,{dataKey:"subject"}),Object(h.jsx)(L.a,{}),Object(h.jsx)(U.a,{dataKey:"iPhone 11",stroke:s,fill:s,fillOpacity:1}),Object(h.jsx)(U.a,{dataKey:"Samsung s20",stroke:a,fill:a,fillOpacity:.8})]})})}),Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-primary bullet-bordered mr-50"}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Replies"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-bordered mr-50",style:{backgroundColor:"#ffe700"}}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Shares"})]})]})]})]})},q=a(1885),G=a(1798),Q=[{x:5.4,y:170},{x:5.4,y:100},{x:5.7,y:110},{x:5.9,y:150},{x:6,y:200},{x:6.3,y:170},{x:5.7,y:140},{x:5.9,y:130},{x:7,y:150},{x:8,y:120},{x:9,y:170},{x:10,y:190},{x:11,y:220},{x:12,y:170},{x:13,y:230}],X=[{x:14,y:220},{x:15,y:280},{x:16,y:230},{x:18,y:320},{x:17.5,y:280},{x:19,y:250},{x:20,y:350},{x:20.5,y:320},{x:20,y:320},{x:19,y:280},{x:17,y:280},{x:22,y:300},{x:18,y:120}],Y=[{x:14,y:290},{x:13,y:190},{x:20,y:220},{x:21,y:350},{x:21.5,y:290},{x:22,y:220},{x:23,y:140},{x:19,y:400},{x:20,y:200},{x:22,y:90},{x:20,y:120}],Z=function(e){var s=e.primary,a=e.success,l=e.danger;return Object(h.jsxs)(n.a,{children:[Object(h.jsxs)(i.a,{className:"flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start",children:[Object(h.jsx)(j.a,{tag:"h4",children:"Framework Usage"}),Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(O.a,{size:15}),Object(h.jsx)(g.a,{options:{mode:"range",defaultDate:["2019-05-01","2019-05-10"]},className:"form-control flat-picker bg-transparent border-0 shadow-none"})]})]}),Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-primary bullet-bordered mr-50"}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"React"})]}),Object(h.jsxs)("div",{className:"mr-2",children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-success bullet-bordered mr-50"}),Object(h.jsx)("span",{className:"align-middle mr-75",children:"Vue"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"bullet bullet-sm bullet-danger bullet-bordered mr-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Angular"})]})]}),Object(h.jsx)("div",{className:"recharts-wrapper",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(q.a,{height:400,children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(v.a,{type:"number",dataKey:"x"}),Object(h.jsx)(N.a,{type:"number",dataKey:"y"}),Object(h.jsx)(G.a,{name:"Angular",data:Q,fill:l}),Object(h.jsx)(G.a,{name:"Vue",data:X,fill:a}),Object(h.jsx)(G.a,{name:"React",data:Y,fill:s})]})})})]})]})},ee=a(130);a(486),a(1799),s.default=function(){var e=Object(l.useContext)(ee.a).colors,s="#ffe700",a="#00d4bd",n="#826bf8",i="#FFA1A1";return Object(h.jsxs)(l.Fragment,{children:[Object(h.jsx)(r.a,{breadCrumbTitle:"Recharts",breadCrumbParent:"Charts",breadCrumbActive:"Recharts"}),Object(h.jsxs)(t.a,{className:"match-height",children:[Object(h.jsx)(c.a,{sm:"12",children:Object(h.jsxs)("p",{children:["React Chart component with bootstrap and material ui. Click"," ",Object(h.jsx)("a",{href:"https://github.com/recharts/recharts",target:"_blank",rel:"noopener noreferrer",children:"here"})," ","for github repo."]})}),Object(h.jsx)(c.a,{sm:"12",children:Object(h.jsx)(M,{warning:e.warning.main})}),Object(h.jsx)(c.a,{sm:"12",children:Object(h.jsx)(V,{primary:e.primary.main})}),Object(h.jsx)(c.a,{sm:"12",children:Object(h.jsx)(Z,{primary:e.primary.main,danger:e.danger.main,success:e.success.main})}),Object(h.jsx)(c.a,{sm:"12",children:Object(h.jsx)(S,{primary:e.primary.main})}),Object(h.jsx)(c.a,{xl:"6",lg:"12",children:Object(h.jsx)(_,{series1:s,series3:n})}),Object(h.jsx)(c.a,{xl:"6",lg:"12",children:Object(h.jsx)(u,{series1:s,series2:a,series3:n,series5:i})})]})]})}},465:function(e,s,a){"use strict";var l=a(466),t=a(1042),c=a(975),r=a(1063),n=a(1058),i=a(998),j=a(476),d=a(477),m=a(478),b=a(1271),o=a(954),x=a(964),h=a(6);s.a=function(e){var s=e.breadCrumbTitle,a=e.breadCrumbParent,u=e.breadCrumbParent2,O=e.breadCrumbParent3,p=e.breadCrumbActive;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[s?Object(h.jsx)("h2",{className:"content-header-title float-left mb-0",children:s}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(d.a,{tag:"li",children:Object(h.jsx)(l.b,{to:"/",children:"Home"})}),Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),u?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:u}):"",O?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",Object(h.jsx)(d.a,{tag:"li",active:!0,children:p})]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(t.a,{size:14})}),Object(h.jsxs)(o.a,{tag:"ul",right:!0,children:[Object(h.jsxs)(x.a,{tag:l.b,to:"/apps/chat",children:[Object(h.jsx)(c.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(x.a,{tag:l.b,to:"/apps/chat",children:[Object(h.jsx)(r.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(x.a,{tag:l.b,to:"/apps/email",children:[Object(h.jsx)(n.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(x.a,{tag:l.b,to:"/apps/calendar",children:[Object(h.jsx)(i.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},486:function(e,s,a){}}]);
//# sourceMappingURL=131.987cd781.chunk.js.map