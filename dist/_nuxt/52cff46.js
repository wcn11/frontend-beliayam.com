(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{2341:function(t,e,r){var content=r(2413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7dd743df",content,!0,{sourceMap:!1})},2412:function(t,e,r){"use strict";r(2341)},2413:function(t,e,r){var n=r(23)(!1);n.push([t.i,".item-img[data-v-b019db48]{max-height:230px;height:230px}.label-product[data-v-b019db48]{width:235px;overflow:hidden;text-overflow:ellipsis;height:40px;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.margin-bottom-10[data-v-b019db48]{margin-bottom:10px}.category-description[data-v-b019db48]{font-size:15px}.not-found-anything[data-v-b019db48]{margin:10%}",""]),t.exports=n},2458:function(t,e,r){"use strict";r.r(e);var n=r(5),c=(r(41),r(54),{name:"CategoryDynamic",fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/category/_s?key=").concat(t.$route.params.category,"&page=").concat(t.category.page,"&show=").concat(t.category.show,"&sortBy=").concat(t.category.sortBy,"&orderBy=").concat(t.category.orderBy,"&status=").concat(t.category.status)).then((function(e){t.categories=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",categories:[],category:{page:1,show:10,sortBy:"ASC",orderBy:"name",status:"active"}}},head:function(){return{title:this.toFirstLetterUpperCase(this.$route.params.category),htmlAttrs:{lang:"id"}}},mounted:function(){document.getElementById("page-category-_category").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-category-_category").classList.add("animate__fadeOutLeft")},methods:{toFirstLetterUpperCase:function(t){return t[0].toUpperCase()+t.substring(1)}},filters:{}}),o=(r(2412),r(16)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"animate__animated",attrs:{id:"page-category-_category"}},[r("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[r("div",{staticClass:"container"},[r("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[r("li",{staticClass:"breadcrumb-item"},[r("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[r("NuxtLink",{staticClass:"text-danger",attrs:{to:"/kategori"}},[t._v("Kategori")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          "+t._s(t.toFirstLetterUpperCase(this.$route.params.category))+"\n        ")])])])]),t._v(" "),r("section",{staticClass:"py-4 beliayam-main-body"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"beliayam-listing"},[r("div",{staticClass:"d-flex align-items-center mb-3"},[r("h4",[t._v("\n                "+t._s(t.toFirstLetterUpperCase(this.$route.params.category))+"\n              ")])]),t._v(" "),r("div",{staticClass:"d-flex align-items-center mb-3 category-description"},[t._v("\n              "+t._s(t.categories.category&&t.categories.category.description)+"\n            ")]),t._v(" "),t.categories.products&&t.categories.products.length>0?r("div",{staticClass:"row"},t._l(t.categories.products,(function(e){return r("div",{key:e._id,staticClass:"col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3"},[r("div",{staticClass:"\n                    list-card\n                    bg-white\n                    h-100\n                    rounded\n                    overflow-hidden\n                    position-relative\n                    shadow-sm\n                  "},[r("div",{staticClass:"list-card-image"},[r("NuxtLink",{staticClass:"text-dark",attrs:{to:"/"+e.slug}},[r("div",{staticClass:"member-plan position-absolute"},[r("span",{staticClass:"badge m-3 badge-danger"},[t._v("10%")])]),t._v(" "),r("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),r("div",{staticClass:"p-3"},[r("h6",{staticClass:"label-product"},[t._v("\n                          "+t._s(e.name)+"\n                        ")]),t._v(" "),r("h6",{staticClass:"price m-0 text-danger"},[r("i",{staticClass:"fas fa-weight"}),t._v(" 1 Ekor\n                        ")]),t._v(" "),r("h6",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                          "+t._s(t._f("formatMoney")(e.price))+"\n                        ")]),t._v(" "),r("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[r("NuxtLink",{attrs:{to:"/"+e.slug}},[r("h6",{staticClass:"btn btn-success w-100"},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" Beli\n                            ")])])],1)])])],1)])])})),0):r("div",{staticClass:"not-found-anything"},[r("div",{staticClass:"text-center"},[r("h4",[t._v("\n                  Produk\n                  "),r("span",[t._v(t._s(t.toFirstLetterUpperCase(this.$route.params.category)))]),t._v("\n                  Belum Tersedia\n                ")])])])])])])])])])}),[],!1,null,"b019db48",null);e.default=component.exports}}]);