(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2292:function(t,e,o){var content=o(2317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("6a86308a",content,!0,{sourceMap:!1})},2316:function(t,e,o){"use strict";o(2292)},2317:function(t,e,o){var r=o(22)(!1);r.push([t.i,".text-see-more[data-v-77da72a4]{background-color:#cf430f;color:#fff;font-size:14px;padding:7px;border-radius:9px}.c-it[data-v-77da72a4]{height:130px;min-height:130px}.c-it img[data-v-77da72a4]{height:70px}@media (max-width:480px){.text-see-more[data-v-77da72a4]{font-size:10px}}@media (max-width:768px){.text-see-more[data-v-77da72a4]{font-size:10px}}",""]),t.exports=r},2372:function(t,e,o){"use strict";o.r(e);var r=o(5),n=(o(42),o(56),o(2278)),c={name:"HomeCategories",components:{VueSlickCarousel:o.n(n).a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://api-v2.beliayam.com/api/v1","/category?page=").concat(t.fetchCategorySetting.page,"&show=").concat(t.fetchCategorySetting.show,"&sortBy=").concat(t.fetchCategorySetting.sortBy,"&orderBy=").concat(t.fetchCategorySetting.orderBy,"&status=").concat(t.fetchCategorySetting.status)).then((function(e){t.categories=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://api-v2.beliayam.com",categories:[],fetchCategorySetting:{page:1,show:5,sortBy:"ASC",orderBy:"name",status:"active"},settings:{slidesToScroll:1,slidesToShow:5,infinite:!0,autoplay:!0,arrows:!0,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}}]}}}},d=(o(2316),o(17)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"beliayam-body"},[o("div",{staticClass:"pt-3 pb-2 beliayam-categories"},[o("div",{staticClass:"d-flex align-items-center mb-4"},[o("h5",{staticClass:"m-0"},[t._v("Cari ayam ?")]),t._v(" "),o("NuxtLink",{staticClass:"ml-auto text-white text-see-more",attrs:{to:"/kategori"}},[t._v("Kategori Lainnya\n        "),o("i",{staticClass:"text-white fad fa-chevron-circle-right"})])],1),t._v(" "),t.categories&&t.categories.length>0?o("VueSlickCarousel",t._b({staticClass:"categories-slider"},"VueSlickCarousel",t.settings,!1),t._l(t.categories,(function(e){return o("div",{key:e._id,staticClass:"col-c"},[o("div",{staticClass:"bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"},[o("NuxtLink",{attrs:{to:"/kategori/"+e.slug}},[e.icon?o("img",{staticClass:"img-fluid px-2 mx-auto",attrs:{src:t.baseApi+"/"+e.icon}}):o("img",{staticClass:"img-fluid px-2 mx-auto",attrs:{src:this.$config.baseURL+"/default/icon.png"}}),t._v(" "),o("p",{staticClass:"m-0 pt-2 text-muted text-center"},[t._v(t._s(e.name))])])],1)])})),0):t._e()],1)])}),[],!1,null,"77da72a4",null);e.default=component.exports}}]);