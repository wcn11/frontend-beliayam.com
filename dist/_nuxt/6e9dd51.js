(window.webpackJsonp=window.webpackJsonp||[]).push([[4,25,26,27,28],{2283:function(t,e,n){var content=n(2308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("79461117",content,!0,{sourceMap:!1})},2284:function(t,e,n){var content=n(2310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0192ac2d",content,!0,{sourceMap:!1})},2285:function(t,e,n){var content=n(2312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("1c42ec74",content,!0,{sourceMap:!1})},2286:function(t,e,n){var content=n(2314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("56376bd1",content,!0,{sourceMap:!1})},2307:function(t,e,n){"use strict";n(2283)},2308:function(t,e,n){var r=n(23)(!1);r.push([t.i,".c-it{height:100px;min-height:100px}",""]),t.exports=r},2309:function(t,e,n){"use strict";n(2284)},2310:function(t,e,n){var r=n(23)(!1);r.push([t.i,".badge-danger{color:#ffe5e5;background-color:rgba(255,96,0,.62)}",""]),t.exports=r},2311:function(t,e,n){"use strict";n(2285)},2312:function(t,e,n){var r=n(23)(!1);r.push([t.i,".item-img[data-v-70569eca]{max-height:150px}.text-label[data-v-70569eca]{white-space:nowrap;width:100%;line-height:1.5;font-size:.86rem;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=r},2313:function(t,e,n){"use strict";n(2286)},2314:function(t,e,n){var r=n(23)(!1);r.push([t.i,".badge-danger-out-of-stock[data-v-33609796]{color:#ffe5e5;background-color:#cd4d00}.img-rounded[data-v-33609796]{border-radius:12px!important}",""]),t.exports=r},2361:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(41),n(54),n(2269)),c={name:"HomeCategories",components:{VueSlickCarousel:n.n(o).a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/category?page=").concat(t.fetchCategorySetting.page,"&show=").concat(t.fetchCategorySetting.show,"&sortBy=").concat(t.fetchCategorySetting.sortBy,"&orderBy=").concat(t.fetchCategorySetting.orderBy,"&status=").concat(t.fetchCategorySetting.status)).then((function(e){t.categories=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",categories:[],fetchCategorySetting:{page:1,show:8,sortBy:"ASC",orderBy:"name",status:"active"},settings:{slidesToScroll:3,slidesToShow:8,arrows:!0,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}}]}}}},l=(n(2307),n(16)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"beliayam-body"},[n("div",{staticClass:"pt-3 pb-2 beliayam-categories"},[n("div",{staticClass:"d-flex align-items-center mb-2"},[n("h5",{staticClass:"m-0"},[t._v("Cari ayam ?")]),t._v(" "),n("NuxtLink",{staticClass:"ml-auto text-dark",attrs:{to:"/kategori"}},[t._v("lihat lainnya")])],1),t._v(" "),t.categories&&t.categories.length>0?n("VueSlickCarousel",t._b({staticClass:"categories-slider"},"VueSlickCarousel",t.settings,!1),t._l(t.categories,(function(e){return n("div",{key:e._id,staticClass:"col-c"},[n("div",{staticClass:"bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"},[n("NuxtLink",{attrs:{to:"/kategori/"+e.slug}},[n("img",{staticClass:"img-fluid px-2 mx-auto",attrs:{src:t.baseApi+"/"+e.icon}}),t._v(" "),n("p",{staticClass:"m-0 pt-2 text-muted text-center"},[t._v(t._s(e.name))])])],1)])})),0):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},2362:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(41),n(54),n(2269)),c={name:"HomeProductOnDiscount",components:{VueSlickCarousel:n.n(o).a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/discounts?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:10,sortBy:"ASC",orderBy:"name"},settings:{centerPadding:"30px",slidesToShow:4,arrows:!0,autoplay:!0,responsive:[{breakpoint:900,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToShow:2}},{breakpoint:545,settings:{arrows:!0,centerMode:!0,centerPadding:"100px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!0,centerMode:!0,centerPadding:"20px",slidesToShow:1}}]}}},filters:{formatDate:function(t){return moment(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}},l=(n(2309),n(16)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 p-0"},[n("div",{staticClass:"beliayam-vegan"},[n("div",{staticClass:"fresh-vegan pb-2"},[n("div",{staticClass:"d-flex align-items-center mt-4 mb-2"},[n("h5",{staticClass:"m-0"},[t._v("Lagi Diskon Nih!")]),t._v(" "),n("NuxtLink",{staticClass:"ml-auto text-dark",attrs:{to:"/produk/diskon"}},[t._v("lihat lainnya")])],1),t._v(" "),t.products.length>0?n("VueSlickCarousel",t._b({staticClass:"trending-slider",attrs:{arrows:!0}},"VueSlickCarousel",t.settings,!1),t._l(t.products,(function(e){return n("div",{key:e._id,staticClass:"beliayam-slider-item"},[n("div",{staticClass:"\n                    list-card\n                    bg-white\n                    h-100\n                    rounded\n                    overflow-hidden\n                    position-relative\n                    shadow-sm\n                    ml-2\n                    mr-2\n                  "},[n("div",{staticClass:"list-card-beliayam-2 p-3"},[n("div",{staticClass:"member-plan position-absolute"},["price"===e.hasDiscount.discountBy?n("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.hasDiscount.discount/e.price*100)+"%")]):n("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.hasDiscount.discount))])]),t._v(" "),n("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:e.slug}},[n("img",{staticClass:"img",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),n("h5",{staticClass:"text-dark"},[t._v(t._s(e.name))]),t._v(" "),n("h6",{staticClass:"mb-1 font-weight-bold"},[t._v("\n                        "+t._s(t._f("formatMoney")(e.price-e.hasDiscount.discount))+"\n                        "),n("del",{staticClass:"text-danger"},[t._v(t._s(t._f("formatMoney")(e.price)))])]),t._v(" "),n("p",{staticClass:"text-gray mb-0 small"},[t._v("Fresh Premium item.")]),t._v(" "),n("p",{staticClass:"small text-muted m-0 text-dark"},[t._v("\n                        "+t._s(e.weight||1)+" Kilogram.\n                      ")])])],1)])])})),0):t._e()],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},2363:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(41),n(54),{name:"HomeProductLowStock",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/_s?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy,"&min_stock=").concat(t.fetchProductSetting.min_stock)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:8,sortBy:"ASC",orderBy:"name",min_stock:40}}},filters:{formatDate:function(t){return moment(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}}),c=(n(2311),n(16)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title d-flex align-items-center py-3"},[n("h5",{staticClass:"m-0"},[t._v("Pilihan terbaik")]),t._v(" "),n("NuxtLink",{staticClass:"ml-auto text-dark",attrs:{to:"/best-choices"}},[t._v("lihat lainnya")])],1),t._v(" "),n("div",{staticClass:"pick_today"},[n("div",{staticClass:"row"},t._l(t.products,(function(e){return n("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[n("div",{staticClass:"\n            list-card\n            bg-white\n            h-100\n            rounded\n            overflow-hidden\n            position-relative\n            shadow-sm\n          "},[n("div",{staticClass:"list-card-image"},[n("NuxtLink",{staticClass:"text-dark",attrs:{to:"/"+e.slug}},[n("div",{staticClass:"p-3"},[n("img",{staticClass:"img-fluid item-img w-100 mb-3 rounded",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),n("p",{staticClass:"text-label"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),n("p",{},[n("i",{staticClass:"fas fa-weight"}),t._v(" "+t._s(e.weight)+" Kilogram\n                ")]),t._v(" "),n("h6",{staticClass:"price m-0 text-dark mt-2",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                  "+t._s(t._f("formatMoney")(e.price))+"\n                ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[n("h6",{staticClass:"btn btn-success w-100"},[n("i",{staticClass:"fas fa-cart-plus"}),t._v(" Beli ini\n                  ")])])])])],1)])])})),0)])])}),[],!1,null,"70569eca",null);e.default=component.exports},2364:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(41),n(54),n(2269)),c={name:"HomeLimitedStock",components:{VueSlickCarousel:n.n(o).a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/_s?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy,"&min_stock=").concat(t.fetchProductSetting.min_stock,"&max_stock=").concat(t.fetchProductSetting.max_stock)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:20,sortBy:"ASC",orderBy:"name",min_stock:0,max_stock:20},settings:{infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,centerMode:!0,arrows:!1,dots:!0,autoplay:!0}}},filters:{formatDate:function(t){return moment(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}},l=(n(2313),n(16)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title d-flex align-items-center py-3"},[n("h5",{staticClass:"m-0"},[t._v("Sebentar Lagi Habis Nih!")]),t._v(" "),n("NuxtLink",{staticClass:"ml-auto text-dark",attrs:{to:"/produk-terbatas"}},[t._v("lihat lainnya")])],1),t._v(" "),n("div",{staticClass:"beliayam-recommend"},[n("div",{staticClass:"row"},t._l(t.products,(function(e){return n("div",{key:e._id,staticClass:"col-12 col-md-4 mb-3"},[n("NuxtLink",{staticClass:"text-dark text-decoration-none",attrs:{to:""+e.slug}},[n("div",{staticClass:"\n              list-card\n              bg-white\n              h-100\n              rounded\n              overflow-hidden\n              position-relative\n              shadow-sm\n            "},[n("div",{staticClass:"beliayam-slider-item m-2 rounded"},[e.stock<=0?n("div",{staticClass:"member-plan position-absolute"},[n("span",{staticClass:"badge m-3 badge-danger-out-of-stock"},[t._v("\n                  Habis\n                ")])]):t._e(),t._v(" "),n("img",{staticClass:"img-fluid p-1 mx-auto img-rounded shadow-sm",attrs:{src:t.baseApi+"/"+e.image,alt:""+e.name}})]),t._v(" "),n("div",{staticClass:"p-3 position-relative"},[n("h6",{staticClass:"mb-1 font-weight-bold"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),e.stock>0?n("p",{staticClass:"badge badge-danger"},[t._v("\n                Hampir habis\n              ")]):n("p",{staticClass:"badge badge-danger"},[t._v("Habis")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("h6",{staticClass:"m-0"},[t._v("\n                  "+t._s(t._f("formatMoney")(e.price))+"/"+t._s(e.weight)+"\n                  Kilogram\n                ")]),t._v(" "),n("NuxtLink",{staticClass:"ml-auto",attrs:{to:"/"+e.slug}},[n("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[n("h6",{staticClass:"btn btn-success w-100"},[t._v("ambil semua")])])])],1)])])])],1)})),0)])])}),[],!1,null,"33609796",null);e.default=component.exports},2424:function(t,e,n){"use strict";n.r(e);var r={name:"Home",data:function(){return{mountains:[]}},head:{title:"Beranda Beliayam.com",htmlAttrs:{lang:"en"},bodyAttrs:{class:"fixed-bottom-padding"}}},o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"beliayam-home-page"},[n("HomePromo"),t._v(" "),n("HomeCategories"),t._v(" "),n("HomeProductOnDiscount"),t._v(" "),n("HomeBestChoice"),t._v(" "),n("HomeLimitedStock")],1)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb mb-0 d-none",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container"},[n("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[n("li",{staticClass:"breadcrumb-item"},[n("a",{staticClass:"text-danger",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomePromo:n(2425).default,HomeCategories:n(2361).default,HomeProductOnDiscount:n(2362).default,HomeBestChoice:n(2363).default,HomeLimitedStock:n(2364).default})}}]);