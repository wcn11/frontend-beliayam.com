(window.webpackJsonp=window.webpackJsonp||[]).push([[38,10],{2308:function(t,n,e){"use strict";e.r(n);var o={name:"About"},r=e(16),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("h1",[t._v("halo")])}),[],!1,null,null,null);n.default=component.exports},2380:function(t,n,e){"use strict";e.r(n);e(73);var o={name:"about",asyncData:function(){return{content:"Created at: "+new Date,renderedOn:"client"}},data:function(){return{title:"Tentang Beliayam.com"}},head:function(){return{title:this.title,htmlAttrs:{lang:"id"}}},methods:{refresh:function(){this.$nuxt.refresh()}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1e3)})),window.onNuxtReady((function(){console.log("123")}))}},r=e(16),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("About"),t._v(" "),e("div",[t._v(t._s(t.content)+" - "+t._s(t.renderedOn))]),t._v(" "),e("button",{on:{click:t.refresh}},[t._v("Refresh")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("Ke Beranda")])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{About:e(2308).default})}}]);