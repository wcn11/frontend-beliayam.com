(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{2328:function(t,e,n){var content=n(2386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("f10f81ae",content,!0,{sourceMap:!1})},2385:function(t,e,n){"use strict";n(2328)},2386:function(t,e,n){var r=n(23)(!1);r.push([t.i,".badge-danger-out-of-stock[data-v-3ab76924]{color:#ffe5e5;background-color:#cd4d00}.label-product[data-v-3ab76924]{width:235px;overflow:hidden;text-overflow:ellipsis;height:40px;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.margin-bottom-10[data-v-3ab76924]{margin-bottom:10px}.category-description[data-v-3ab76924]{font-size:15px}.not-found-anything[data-v-3ab76924]{margin:10%}.item-img[data-v-3ab76924]{max-height:180px;height:180px}@media (max-width:1200px){.item-img[data-v-3ab76924]{max-height:170px;height:170}}@media (max-width:992px){.item-img[data-v-3ab76924]{max-height:280px;height:280px}}@media (max-width:768px){.item-img[data-v-3ab76924]{max-height:235px;height:235px}}@media (max-width:480px){.item-img[data-v-3ab76924]{max-height:235px;height:235px}}",""]),t.exports=r},2437:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(41),n(54),{name:"LimitedProducts",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/_s?page=").concat(t.fetchProductSetting.page,"&show=").concat(t.fetchProductSetting.show,"&sortBy=").concat(t.fetchProductSetting.sortBy,"&orderBy=").concat(t.fetchProductSetting.orderBy,"&min_stock=").concat(t.fetchProductSetting.min_stock,"&max_stock=").concat(t.fetchProductSetting.max_stock)).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",products:[],fetchProductSetting:{page:1,show:20,sortBy:"ASC",orderBy:"name",min_stock:0,max_stock:20}}},head:function(){return{title:"Pilihan Terbaik Daging Ayam!",htmlAttrs:{lang:"id"}}},mounted:function(){document.getElementById("page-category-_category").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-category-_category").classList.add("animate__fadeOutLeft")},methods:{},filters:{formatDate:function(t){return moment(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}}),o=(n(2385),n(16)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animate__animated",attrs:{id:"page-category-_category"}},[n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container"},[n("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Produk Terbatas\n        ")])])])]),t._v(" "),n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"beliayam-listing"},[t._m(0),t._v(" "),t.products&&t.products.length>0?n("div",{staticClass:"row"},t._l(t.products,(function(e){return n("div",{key:e._id,staticClass:"col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3"},[n("div",{staticClass:"\n                    list-card\n                    bg-white\n                    h-100\n                    rounded\n                    overflow-hidden\n                    position-relative\n                    shadow-sm\n                  "},[n("div",{staticClass:"list-card-image"},[n("NuxtLink",{staticClass:"text-dark",attrs:{to:"/"+e.slug}},[e.stock<=0?n("div",{staticClass:"member-plan position-absolute"},[n("span",{staticClass:"badge m-3 badge-danger-out-of-stock"},[t._v("\n                          Habis\n                        ")])]):t._e(),t._v(" "),n("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),n("div",{staticClass:"p-3"},[n("h5",{staticStyle:{"white-space":"nowrap",width:"100%",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n                          "+t._s(e.name)+"\n                        ")]),t._v(" "),n("p",{staticClass:"small text-muted m-0 text-dark"},[t._v("\n                          "+t._s(e.weight||1)+" Kilogram.\n                        ")]),t._v(" "),n("p",{staticClass:"text-danger mb-0 small"},[t._v("\n                          Sisa "+t._s(e.stock)+" item\n                        ")]),t._v(" "),n("h6",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                          "+t._s(t._f("formatMoney")(e.price))+"\n                        ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[n("NuxtLink",{attrs:{to:"/"+e.slug}},[n("h6",{staticClass:"btn btn-success w-100"},[n("i",{staticClass:"fas fa-cart-plus"}),t._v(" Beli\n                            ")])])],1)])])],1)])])})),0):n("div",{staticClass:"not-found-anything"},[t._m(1)])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center mb-3"},[n("h4",[t._v("Produk Terbatas")]),t._v(" "),n("div",{staticClass:"m-0 text-center ml-auto"},[n("a",{staticClass:"btn text-muted bg-white mr-2",attrs:{href:"#","data-toggle":"modal","data-target":"#exampleModal"}},[n("i",{staticClass:"fad fa-filter mr-1"}),t._v(" Filter")]),t._v(" "),n("a",{staticClass:"btn text-muted bg-white",attrs:{href:"#","data-toggle":"modal","data-target":"#exampleModal"}},[n("i",{staticClass:"fad fa-signal mr-1"}),t._v(" Sort")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h4",[t._v("\n                  Produk\n                  "),n("span",[t._v(" Diskon ")]),t._v("\n                  Belum Tersedia\n                ")])])}],!1,null,"3ab76924",null);e.default=component.exports}}]);