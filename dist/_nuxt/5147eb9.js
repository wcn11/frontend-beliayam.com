(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{2135:function(t,e,o){var content=o(2177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("7fa0a4d4",content,!0,{sourceMap:!1})},2176:function(t,e,o){"use strict";o(2135)},2177:function(t,e,o){var r=o(25)(!1);r.push([t.i,".margin-bottom-10[data-v-d384ed44]{margin-bottom:10px}.btn-view-promo[data-v-d384ed44]{color:#8b0000;background-color:#fff;border-color:#ffc107}.bg-promo[data-v-d384ed44]{background-color:#ffba08!important}.slider-container[data-v-d384ed44]{width:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1;margin-bottom:0}.slider-image[data-v-d384ed44]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.card-shadow[data-v-d384ed44]{box-shadow:1px 1px 5px 0 grey}@media only screen and (min-device-width:320px) and (max-device-width:480px){.slider-image[data-v-d384ed44]{height:120px}}@media only screen and (min-width:481px){.slider-image[data-v-d384ed44]{height:175px}}@media only screen and (min-width:690px){.slider-image[data-v-d384ed44]{height:250px}}",""]),t.exports=r},2213:function(t,e,o){"use strict";o.r(e);var r=o(5),n=(o(46),o(52),{name:"Promo",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("".concat("http://localhost:4000/api/v1","/promo?page=").concat(t.promo.page,"&show=").concat(t.promo.show,"&sortBy=").concat(t.promo.sortBy,"&orderBy=").concat(t.promo.orderBy,"&platform[]=").concat(t.promo.platform,"&isActive=").concat(t.promo.isActive)).then((function(e){t.promos=e.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"http://localhost:4000",promos:[],promo:{page:1,show:10,sortBy:"ASC",orderBy:"name",platform:["all"],isActive:!0}}},head:{title:"Promo Beliayam.com",htmlAttrs:{lang:"id"}},mounted:function(){document.getElementById("page-promo-index").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-promo-index").classList.add("animate__fadeOutLeft")}}),c=(o(2176),o(18)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animate__animated",attrs:{id:"page-promo-index"}},[o("div",{staticClass:"slider-container"},[o("div",{staticClass:"slider-wrapper"},[o("div",{staticClass:"slider-slide"},[o("a",{attrs:{href:"https://www.tokopedia.com/hotel/"}},[o("img",{staticClass:"slider-image",attrs:{src:this.$config.baseURL+"/img/contoh-banner-promo.jpg",alt:"","data-slider-impression":'{"event":"promoView","eventCategory":"promo microsite - promo list","eventAction":"impression on promo","eventLabel":"","ecommerce":{"promoView":{"promotions":[{"id":87171,"name":"\\/promo - p1 - slider banner","position":1,"creative":"87171","creative_url":"https:\\/\\/ecs7.tokopedia.net\\/img\\/blog\\/promo\\/2019\\/08\\/Hotel_Launching_Digital-Hompage.jpg"}]}}}'}})])])])]),t._v(" "),o("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[o("div",{staticClass:"container"},[o("ol",{staticClass:"d-flex align-items-center mb-0 p-0"},[o("li",{staticClass:"breadcrumb-item"},[o("NuxtLink",{staticClass:"text-success",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Promo Beliayam.com\n        ")])])])]),t._v(" "),o("section",{staticClass:"py-4 beliayam-main-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.promos,(function(e){return o("div",{key:e._id,staticClass:"col-md-4 margin-bottom-10"},[o("div",{staticClass:"rounded bg-promo text-center card-shadow"},[o("div",{staticClass:"bg-white rounded shadow-sm mb-3"},[o("img",{staticClass:"img-fluid",attrs:{src:t.baseApi+"/"+e.image_promo}})]),t._v(" "),o("h5",{staticClass:"mt-2 mb-1 text-white"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"mt-2 mb-1 text-white bg-danger"},[o("i",{staticClass:"fad fa-badge-discount"}),t._v(" "+t._s(e.tags)+"\n              ")]),t._v(" "),o("div",{staticClass:"pt-3 p-2"},[o("NuxtLink",{attrs:{to:"/promo/"+e.slug}},[o("p",{staticClass:"btn btn-warning btn-lg btn-block btn-view-promo mb-0"},[o("i",{staticClass:"fad fa-tags mr-1"}),t._v(" Lihat Produk\n                ")])])],1),t._v(" "),o("NuxtLink",{attrs:{to:"/promo/by-one-get-one/detail"}},[o("p",{staticClass:"mb-0 pt-2 pb-2 small text-dark"},[o("i",{staticClass:"fad fa-file-contract mr-1"}),t._v(" Syarat & Ketentuan\n              ")])])],1)])})),0)])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[o("div",{staticClass:"container"},[o("ol",{staticClass:"d-flex align-items-center mb-0 p-0"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{staticClass:"text-success",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Promo details\n        ")])])])])}],!1,null,"d384ed44",null);e.default=component.exports}}]);