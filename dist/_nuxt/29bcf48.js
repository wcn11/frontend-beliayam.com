(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{2336:function(t,e,n){var content=n(2395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4a1e4f07",content,!0,{sourceMap:!1})},2394:function(t,e,n){"use strict";n(2336)},2395:function(t,e,n){var r=n(22)(!1);r.push([t.i,".margin-bottom-10[data-v-7661fd13]{margin-bottom:10px}",""]),t.exports=r},2465:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(42),n(57),{name:"Kategori",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://main-v1.beliayam.com/api/v1","/category?page=").concat(t.category.page,"&show=").concat(t.category.show,"&sortBy=").concat(t.category.sortBy,"&orderBy=").concat(t.category.orderBy,"&status=").concat(t.category.status)).then((function(e){t.categories=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://main-v1.beliayam.com",categories:[],category:{page:1,show:10,sortBy:"ASC",orderBy:"name",status:"active"}}},head:{title:"Kategori Ayam",htmlAttrs:{lang:"en"}},mounted:function(){document.getElementById("page-category-index").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-category-index").classList.add("animate__fadeOutLeft")}}),o=(n(2394),n(17)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated__animated",attrs:{id:"page-category-index"}},[n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container"},[n("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Kategori Beliayam.com\n        ")])])])]),t._v(" "),n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.categories,(function(e){return n("div",{key:e._id,staticClass:"col-md-3 margin-bottom-10"},[n("div",{staticClass:"bg-danger rounded shadow-sm text-center p-2"},[n("div",{staticClass:" rounded shadow-sm mb-3"},[n("img",{staticClass:"img-fluid",attrs:{src:t.baseApi+"/"+e.image}})]),t._v(" "),n("h5",{staticClass:"mt-2 mb-1 text-white"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"pt-3"},[n("NuxtLink",{attrs:{to:"/kategori/"+e.slug}},[n("p",{staticClass:"btn btn-warning btn-lg btn-block mb-0"},[n("i",{staticClass:"fad fa-tags mr-1"}),t._v(" Cari "+t._s(e.name)+"\n                ")])])],1)])])})),0)])])])}),[],!1,null,"7661fd13",null);e.default=component.exports}}]);