(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{2342:function(t,e,o){var content=o(2406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("2436035c",content,!0,{sourceMap:!1})},2405:function(t,e,o){"use strict";o(2342)},2406:function(t,e,o){var r=o(22)(!1);r.push([t.i,".margin-bottom-10[data-v-1a7a59a5]{margin-bottom:10px}.btn-view-promo[data-v-1a7a59a5]{color:#8b0000;background-color:#fff;border-color:#ffc107}.bg-promo[data-v-1a7a59a5]{background-color:#ffba08!important}.slider-container[data-v-1a7a59a5]{width:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1;margin-bottom:0}.slider-image[data-v-1a7a59a5]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.card-shadow[data-v-1a7a59a5]{box-shadow:1px 1px 5px 0 grey}",""]),t.exports=r},2465:function(t,e,o){"use strict";o.r(e);var r=o(5),n=(o(42),o(57),{name:"Promo",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("setGlobalModal",!0),e.next=3,t.$axios.$get("".concat("https://be-dev.beliayam.com/api/v1","/promo?page=").concat(t.promo.page,"&show=").concat(t.promo.show,"&sortBy=").concat(t.promo.sortBy,"&orderBy=").concat(t.promo.orderBy,"&platform=").concat(t.promo.platform,"&isActive=").concat(t.promo.isActive)).then((function(e){t.promos=e.data}));case 3:t.$store.dispatch("setGlobalModal",!1);case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{baseApi:"https://be-dev.beliayam.com",promos:[],selectedPromo:{},promo:{page:1,show:10,sortBy:"ASC",orderBy:"name",platform:["all"],isActive:!0}}},head:{title:"Promo Beliayam.com",htmlAttrs:{lang:"id"}},methods:{openModalDetailPromo:function(t){this.selectedPromo=t,$("#modal-promo-detail").appendTo("body").modal("show")}},mounted:function(){document.getElementById("page-promo-index").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-promo-index").classList.add("animate__fadeOutLeft")}}),l=n,d=(o(2405),o(17)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animate__animated",attrs:{id:"page-promo-index"}},[o("div",{staticClass:"slider-container"},[o("div",{staticClass:"slider-wrapper"},[o("div",{staticClass:"slider-slide"},[o("a",{attrs:{href:"javascript:void(0)"}},[o("img",{staticClass:"slider-image",attrs:{src:this.$config.baseURL+"/img/banner-global.jpg",alt:"","data-slider-impression":'{"event":"promoView","eventCategory":"promo microsite - promo list","eventAction":"impression on promo","eventLabel":"","ecommerce":{"promoView":{"promotions":[{"id":87171,"name":"\\/promo - p1 - slider banner","position":1,"creative":"87171","creative_url":"https:\\/\\/ecs7.tokopedia.net\\/img\\/blog\\/promo\\/2019\\/08\\/Hotel_Launching_Digital-Hompage.jpg"}]}}}'}})])])])]),t._v(" "),o("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[o("div",{staticClass:"container"},[o("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[o("li",{staticClass:"breadcrumb-item"},[o("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Promo Beliayam.com\n        ")])])])]),t._v(" "),o("section",{staticClass:"py-4 beliayam-main-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.promos,(function(e){return o("div",{key:e._id,staticClass:"col-md-4 margin-bottom-10"},[o("div",{staticClass:"rounded bg-promo text-center card-shadow"},[o("div",{staticClass:"bg-white rounded shadow-sm mb-3"},[o("img",{staticClass:"img-fluid",attrs:{src:t.baseApi+"/"+e.image_promo}})]),t._v(" "),o("h5",{staticClass:"mt-2 mb-1 text-white"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"mt-2 mb-1 text-white bg-danger"},[o("i",{staticClass:"fad fa-badge-discount"}),t._v(" "+t._s(e.tags)+"\n            ")]),t._v(" "),o("div",{staticClass:"pt-3 p-2"},[o("NuxtLink",{attrs:{to:"/promo/"+e.slug}},[o("p",{staticClass:"btn btn-warning btn-lg btn-block btn-view-promo mb-0"},[o("i",{staticClass:"fad fa-tags mr-1"}),t._v(" Lihat Produk\n                ")])])],1),t._v(" "),o("div",{attrs:{role:"button"},on:{click:function(o){return t.openModalDetailPromo(e)}}},[t._m(0,!0)])])])})),0)])]),t._v(" "),t.selectedPromo?o("div",{staticClass:"modal fade",attrs:{id:"modal-promo-detail",tabindex:"-1","aria-labelledby":"modal-promo-detailLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[o("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),o("div",{staticClass:"modal-body",domProps:{innerHTML:t._s(JSON.parse(JSON.stringify(t.selectedPromo.termsAndConditions)))}}),t._v(" "),t._m(2)])])]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"mb-0 pt-2 pb-2 small text-dark"},[o("i",{staticClass:"fad fa-file-contract mr-1"}),t._v(" Syarat & Ketentuan\n              ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"modal-promo-detailLabel"}},[t._v("\n            Syarat & Ketentuan\n          ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n            oke\n          ")])])}],!1,null,"1a7a59a5",null);e.default=component.exports}}]);