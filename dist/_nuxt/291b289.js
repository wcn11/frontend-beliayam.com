(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{2157:function(t,e,o){var content=o(2210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("e461f4b0",content,!0,{sourceMap:!1})},2209:function(t,e,o){"use strict";o(2157)},2210:function(t,e,o){var r=o(24)(!1);r.push([t.i,".margin-bottom-10[data-v-3b69c9d6]{margin-bottom:10px}.btn-view-promo[data-v-3b69c9d6]{color:#8b0000;background-color:#fff;border-color:#ffc107}.bg-promo[data-v-3b69c9d6]{background-color:#ffba08!important}.slider-container[data-v-3b69c9d6]{width:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1;margin-bottom:0}.slider-image[data-v-3b69c9d6]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.card-shadow[data-v-3b69c9d6]{box-shadow:1px 1px 5px 0 grey}@media only screen and (min-device-width:320px) and (max-device-width:480px){.slider-image[data-v-3b69c9d6]{height:120px}}@media only screen and (min-width:481px){.slider-image[data-v-3b69c9d6]{height:175px}}@media only screen and (min-width:690px){.slider-image[data-v-3b69c9d6]{height:250px}}",""]),t.exports=r},2248:function(t,e,o){"use strict";o.r(e);var r=o(4),n=(o(46),o(52),{name:"Promo",head:{title:"Promo Beliayam.com",htmlAttrs:{lang:"id"}},data:function(){return{param:this.$route.params,baseApi:"http://localhost:4000",promos:[],promo:{page:1,show:10,sortBy:"ASC",orderBy:"name",platform:["all"],isActive:!0}}},methods:{getPromoProducts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("http://localhost:4000/api/v1","/promo/").concat(t.$route.params.promo,"/product?page=").concat(t.promo.page,"&show=").concat(t.promo.show,"&sortBy=").concat(t.promo.sortBy,"&orderBy=").concat(t.promo.orderBy,"&platform[]=").concat(t.promo.platform,"&isActive=").concat(t.promo.isActive)).then((function(e){t.promos=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){document.getElementById("page-promo-_product").classList.add("animate__fadeInRight"),this.getPromoProducts()},beforeDestroy:function(){document.getElementById("page-promo-_product").classList.add("animate__fadeOutLeft")}}),c=(o(2209),o(18)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animate__animated",attrs:{id:"page-promo-_product"}},[o("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[o("div",{staticClass:"container"},[o("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[o("li",{staticClass:"breadcrumb-item"},[o("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Produk Promo Beliayam.com\n        ")])])])]),t._v(" "),o("section",{staticClass:"py-4 beliayam-main-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.promos,(function(e){return o("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[o("div",{staticClass:"\n              list-card\n              bg-white\n              h-100\n              rounded\n              overflow-hidden\n              position-relative\n              shadow-sm\n            "},[o("div",{staticClass:"list-card-image"},[o("NuxtLink",{staticClass:"text-dark",attrs:{to:"/broiler-09-10-kg"}},[o("div",{staticClass:"member-plan position-absolute"},[o("span",{staticClass:"badge m-3 badge-danger"},[t._v("110%")])]),t._v(" "),o("img",{staticClass:"img-fluid item-img w-100 mb-3 p-0",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),o("div",{staticClass:"p-3"},[o("h6",{staticStyle:{"white-space":"nowrap",width:"120px",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),o("h6",{staticClass:"price m-0 text-danger"},[o("i",{staticClass:"fas fa-weight"}),t._v(" 1 Ekor\n                  ")]),t._v(" "),o("h6",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                    "+t._s(e.price)+"\n                  ")]),t._v(" "),o("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[o("h6",{staticClass:"btn btn-success"},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Tambahkan\n                    ")])])])])],1)])])})),0)])])])}),[],!1,null,"3b69c9d6",null);e.default=component.exports}}]);