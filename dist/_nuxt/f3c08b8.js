(window.webpackJsonp=window.webpackJsonp||[]).push([[4,25,26,27,28],{2293:function(t,e,o){var content=o(2319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("c9d5b5ac",content,!0,{sourceMap:!1})},2294:function(t,e,o){var content=o(2321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("4dbdb224",content,!0,{sourceMap:!1})},2295:function(t,e,o){var content=o(2323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("9afe5ed4",content,!0,{sourceMap:!1})},2296:function(t,e,o){var content=o(2325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("d03021a0",content,!0,{sourceMap:!1})},2318:function(t,e,o){"use strict";o(2293)},2319:function(t,e,o){var n=o(22)(!1);n.push([t.i,".text-see-more[data-v-c4a7dfe8]{background-color:#cf430f;color:#fff;font-size:14px;padding:7px;border-radius:9px}.c-it[data-v-c4a7dfe8]{height:130px;min-height:130px}.c-it img[data-v-c4a7dfe8]{height:70px}@media (max-width:480px){.text-see-more[data-v-c4a7dfe8]{font-size:10px}}@media (max-width:768px){.text-see-more[data-v-c4a7dfe8]{font-size:10px}}",""]),t.exports=n},2320:function(t,e,o){"use strict";o(2294)},2321:function(t,e,o){var n=o(22)(!1);n.push([t.i,".label-product[data-v-c2567be0]{font-size:19px}.text-see-more[data-v-c2567be0]{background-color:#cf430f;color:#fff;font-size:14px;padding:7px;border-radius:9px}.member-plan[data-v-c2567be0]{padding:0}.badge-discount[data-v-c2567be0]{position:absolute;margin:-10px}.badge-danger[data-v-c2567be0]{color:#f1e5dd;background-color:#bf4d09;box-shadow:0 0 2px 0 #000}@media (max-width:480px){.text-see-more[data-v-c2567be0]{font-size:10px}}@media (max-width:768px){.text-see-more[data-v-c2567be0]{font-size:10px}}",""]),t.exports=n},2322:function(t,e,o){"use strict";o(2295)},2323:function(t,e,o){var n=o(22)(!1);n.push([t.i,".text-see-more[data-v-9fcde878]{background-color:#cf430f;color:#fff;font-size:14px;padding:7px;border-radius:9px}.item-img[data-v-9fcde878]{max-height:150px}.text-label[data-v-9fcde878]{white-space:nowrap;width:100%;line-height:1.5;font-weight:700;font-size:calc(63% + 9px);overflow:hidden;text-overflow:ellipsis}@media (max-width:480px){.text-see-more[data-v-9fcde878]{font-size:10px}.text-label[data-v-9fcde878]{font-size:calc(27% + 9px)}}@media (max-width:768px){.text-see-more[data-v-9fcde878]{font-size:10px}.text-label[data-v-9fcde878]{font-size:calc(27% + 9px)}}",""]),t.exports=n},2324:function(t,e,o){"use strict";o(2296)},2325:function(t,e,o){var n=o(22)(!1);n.push([t.i,".text-see-more[data-v-7a1a2042]{background-color:#cf430f;color:#fff;font-size:14px;padding:7px;border-radius:9px}.badge-danger-out-of-stock[data-v-7a1a2042]{color:#ffe5e5;background-color:#cd4d00}.img-rounded[data-v-7a1a2042]{border-radius:12px!important}@media (max-width:480px){.text-see-more[data-v-7a1a2042]{font-size:10px}}@media (max-width:768px){.text-see-more[data-v-7a1a2042]{font-size:10px}}",""]),t.exports=n},2373:function(t,e,o){"use strict";o.r(e);var n=o(5),c=(o(42),o(57),o(2279)),r={name:"HomeCategories",components:{VueSlickCarousel:o.n(c).a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/category?page=").concat(t.fetchCategorySetting.page,"&show=").concat(t.fetchCategorySetting.show,"&sortBy=").concat(t.fetchCategorySetting.sortBy,"&orderBy=").concat(t.fetchCategorySetting.orderBy,"&status=").concat(t.fetchCategorySetting.status)).then((function(e){t.categories=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",categories:[],fetchCategorySetting:{page:1,show:5,sortBy:"ASC",orderBy:"name",status:"active"},settings:{slidesToScroll:1,slidesToShow:5,infinite:!0,autoplay:!0,arrows:!0,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToScroll:1,slidesToShow:4}},{breakpoint:576,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToScroll:1,slidesToShow:3}},{breakpoint:480,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToScroll:1,slidesToShow:2}}]}}}},d=(o(2318),o(17)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"beliayam-body"},[o("div",{staticClass:"pt-3 pb-2 beliayam-categories"},[o("div",{staticClass:"d-flex align-items-center mb-4"},[o("h5",{staticClass:"m-0"},[t._v("Cari ayam ?")]),t._v(" "),o("NuxtLink",{staticClass:"ml-auto text-white text-see-more",attrs:{to:"/kategori"}},[t._v("Kategori Lainnya\n        "),o("i",{staticClass:"text-white fad fa-chevron-circle-right"})])],1),t._v(" "),t.categories&&t.categories.length>0?o("VueSlickCarousel",t._b({staticClass:"categories-slider"},"VueSlickCarousel",t.settings,!1),t._l(t.categories,(function(e){return o("div",{key:e._id,staticClass:"col-c"},[o("div",{staticClass:"bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"},[o("NuxtLink",{attrs:{to:"/kategori/"+e.slug}},[e.icon?o("img",{staticClass:"img-fluid px-2 mx-auto",attrs:{src:t.baseApi+"/"+e.icon}}):o("img",{staticClass:"img-fluid px-2 mx-auto",attrs:{src:this.$config.baseURL+"/default/icon.png"}}),t._v(" "),o("p",{staticClass:"m-0 pt-2 text-muted text-center"},[t._v(t._s(e.name))])])],1)])})),0):t._e()],1)])}),[],!1,null,"c4a7dfe8",null);e.default=component.exports},2374:function(t,e,o){"use strict";o.r(e);var n=o(5),c=(o(42),o(57),o(2279)),r={name:"HomeProductOnDiscount",components:{VueSlickCarousel:o.n(c).a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/discounts?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:8,sortBy:"ASC",orderBy:"name"},settings:{centerPadding:"30px",slidesToShow:4,arrows:!0,autoplay:!0,infinite:!0,responsive:[{breakpoint:900,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToShow:2}},{breakpoint:545,settings:{arrows:!0,centerMode:!0,centerPadding:"100px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!0,centerMode:!0,centerPadding:"20px",slidesToShow:1}}]}}}},d=(o(2320),o(17)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.products&&t.products.length>0?o("section",{staticClass:"py-4 beliayam-main-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12 p-0"},[o("div",{staticClass:"beliayam-vegan"},[o("div",{staticClass:"fresh-vegan pb-2"},[o("div",{staticClass:"d-flex align-items-center mt-4 mb-2"},[o("h5",{staticClass:"m-0"},[t._v("Lagi Diskon Nih!")]),t._v(" "),o("NuxtLink",{staticClass:"ml-auto text-white text-see-more",attrs:{to:"/produk/diskon"}},[t._v("Produk Diskon Lainnya\n                "),o("i",{staticClass:"text-white fad fa-chevron-circle-right"})])],1),t._v(" "),t.products.length>0?o("VueSlickCarousel",t._b({staticClass:"trending-slider",attrs:{arrows:!0}},"VueSlickCarousel",t.settings,!1),t._l(t.products,(function(e){return o("div",{key:e._id,staticClass:"beliayam-slider-item"},[o("div",{staticClass:"\n                    list-card\n                    bg-white\n                    h-100\n                    rounded\n                    overflow-hidden\n                    position-relative\n                    shadow-sm\n                    ml-2\n                    mr-2\n                  "},[o("div",{staticClass:"list-card-beliayam-2 p-3"},[o("div",{staticClass:"member-plan position-absolute"},["price"===e.hasDiscount.discountBy?o("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon\n                        "+t._s(t._f("setSquareDecimal")(e.hasDiscount.discount/e.price*100))+"%")]):o("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon "+t._s(e.hasDiscount.discount)+"%")])]),t._v(" "),o("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:e.slug}},[o("img",{staticClass:"img",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),o("h5",{staticClass:"text-dark label-product"},[t._v("\n                        "+t._s(e.name)+"\n                      ")]),t._v(" "),o("h6",{staticClass:"mb-1 font-weight-bold"},["price"===e.hasDiscount.discountBy?o("span",[t._v("\n                          Rp\n                          "+t._s(t._f("formatMoney")(e.price-e.hasDiscount.discount))+"\n                        ")]):t._e(),t._v(" "),"percent"===e.hasDiscount.discountBy?o("span",[t._v("\n                          Rp\n                          "+t._s(t._f("formatMoney")(e.price-e.hasDiscount.discount/100*e.price))+"\n                        ")]):t._e(),t._v(" "),o("del",{staticClass:"text-danger"},[t._v(t._s(t._f("formatMoney")(e.price)))])]),t._v(" "),o("p",{staticClass:"text-gray mb-0 small"},[t._v("Fresh Premium item.")]),t._v(" "),o("p",{staticClass:"small text-muted m-0 text-dark"},[o("i",{staticClass:"fas fa-weight"}),t._v("\n                        "+t._s(e.weight||1)+" Kilogram.\n                      ")])])],1)])])})),0):t._e()],1)])])])])]):t._e()}),[],!1,null,"c2567be0",null);e.default=component.exports},2375:function(t,e,o){"use strict";o.r(e);var n=o(5),c=(o(42),o(57),{name:"HomeBestChoice",fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/_s?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy,"&min_stock=").concat(t.fetchProductSetting.min_stock)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:8,sortBy:"ASC",orderBy:"name",min_stock:21}}}}),r=(o(2322),o(17)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.products&&t.products.length>0?o("div",[o("div",{staticClass:"title d-flex align-items-center py-3"},[o("h5",{staticClass:"m-0"},[t._v("Pilihan terbaik")]),t._v(" "),o("NuxtLink",{staticClass:"ml-auto text-white text-see-more",attrs:{to:"/best-choices"}},[t._v("Produk Pilihan Lainnya\n      "),o("i",{staticClass:"text-white fad fa-chevron-circle-right"})])],1),t._v(" "),o("div",{staticClass:"pick_today"},[o("div",{staticClass:"row"},t._l(t.products,(function(e){return o("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[o("div",{staticClass:"\n            list-card\n            bg-white\n            h-100\n            rounded\n            overflow-hidden\n            position-relative\n            shadow-sm\n          "},[o("div",{staticClass:"list-card-image"},[o("NuxtLink",{staticClass:"text-dark",attrs:{to:"/"+e.slug}},[o("div",{staticClass:"p-3"},[o("img",{staticClass:"img-fluid item-img w-100 mb-3 rounded",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),o("p",{staticClass:"text-label mb-0"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),o("p",{},[o("i",{staticClass:"fas fa-weight"}),t._v(" "+t._s(e.weight)+" Kilogram\n                ")]),t._v(" "),o("h6",{staticClass:"price m-0 text-dark mt-2",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                  "+t._s(t._f("formatMoney")(e.price))+"\n                ")]),t._v(" "),o("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[o("h6",{staticClass:"btn btn-success w-100"},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Beli ini\n                  ")])])])])],1)])])})),0)])]):t._e()}),[],!1,null,"9fcde878",null);e.default=component.exports},2376:function(t,e,o){"use strict";o.r(e);var n=o(5),c=(o(42),o(57),o(2279)),r={name:"HomeLimitedStock",components:{VueSlickCarousel:o.n(c).a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/_s?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy,"&min_stock=").concat(t.fetchProductSetting.min_stock,"&max_stock=").concat(t.fetchProductSetting.max_stock)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:3,sortBy:"ASC",orderBy:"name",min_stock:0,max_stock:10},settings:{infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,centerMode:!0,arrows:!1,dots:!0,autoplay:!0}}}},d=(o(2324),o(17)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.products&&t.products.length>0?o("div",[o("div",{staticClass:"title d-flex align-items-center py-3"},[o("h5",{staticClass:"m-0"},[t._v("Sebentar Lagi Habis Nih!")]),t._v(" "),o("NuxtLink",{staticClass:"ml-auto text-white text-see-more",attrs:{to:"/produk-terbatas"}},[t._v("Produk Lainnya "),o("i",{staticClass:"text-white fad fa-chevron-circle-right"})])],1),t._v(" "),o("div",{staticClass:"beliayam-recommend"},[o("div",{staticClass:"row"},t._l(t.products,(function(e){return o("div",{key:e._id,staticClass:"col-12 col-md-4 mb-3"},[o("NuxtLink",{staticClass:"text-dark text-decoration-none",attrs:{to:""+e.slug}},[o("div",{staticClass:"\n              list-card\n              bg-white\n              h-100\n              rounded\n              overflow-hidden\n              position-relative\n              shadow-sm\n            "},[o("div",{staticClass:"beliayam-slider-item m-2 rounded"},[e.stock<=0?o("div",{staticClass:"member-plan position-absolute"},[o("span",{staticClass:"badge m-3 badge-danger-out-of-stock"},[t._v("\n                  Habis\n                ")])]):t._e(),t._v(" "),o("img",{staticClass:"img-fluid p-1 mx-auto img-rounded shadow-sm",attrs:{src:t.baseApi+"/"+e.image,alt:""+e.name}})]),t._v(" "),o("div",{staticClass:"p-3 position-relative"},[o("h6",{staticClass:"mb-1 font-weight-bold"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),e.stock>0?o("p",{staticClass:"badge badge-danger"},[t._v("\n                Hampir habis\n              ")]):o("p",{staticClass:"badge badge-danger"},[t._v("Habis")]),t._v(" "),o("div",{staticClass:"d-flex align-items-center"},[o("h6",{staticClass:"m-0"},[t._v("\n                  "+t._s(t._f("formatMoney")(e.price))+"/"+t._s(e.weight)+"\n                  Kilogram\n                ")]),t._v(" "),o("NuxtLink",{staticClass:"ml-auto",attrs:{to:"/"+e.slug}},[o("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[o("h6",{staticClass:"btn btn-success w-100"},[o("i",{staticClass:"fad fa-shopping-cart"}),t._v(" Beli ini")])])])],1)])])])],1)})),0)])]):t._e()}),[],!1,null,"7a1a2042",null);e.default=component.exports},2450:function(t,e,o){"use strict";o.r(e);var n={name:"Home",data:function(){return{mountains:[]}},created:function(){this.$store.dispatch("setGlobalModal",!0)},mounted:function(){this.$store.dispatch("setGlobalModal",!1)},head:{title:"Beranda Beliayam.com",htmlAttrs:{lang:"en"},bodyAttrs:{class:"fixed-bottom-padding"}}},c=o(17),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("section",{staticClass:"py-4 beliayam-main-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"beliayam-home-page"},[o("HomePromo"),t._v(" "),o("HomeCategories"),t._v(" "),o("HomeProductOnDiscount"),t._v(" "),o("HomeBestChoice"),t._v(" "),o("HomeLimitedStock")],1)])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"breadcrumb mb-0 d-none",attrs:{"aria-label":"breadcrumb"}},[o("div",{staticClass:"container"},[o("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{staticClass:"text-danger",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomePromo:o(2451).default,HomeCategories:o(2373).default,HomeProductOnDiscount:o(2374).default,HomeBestChoice:o(2375).default,HomeLimitedStock:o(2376).default})}}]);