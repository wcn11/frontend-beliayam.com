(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{2260:function(t,e,c){var content=c(2289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("59b276c0",content,!0,{sourceMap:!1})},2288:function(t,e,c){"use strict";c(2260)},2289:function(t,e,c){var n=c(23)(!1);n.push([t.i,".related-products-empty[data-v-7cc20544]{font-size:24px}.item-img[data-v-7cc20544]{max-height:150px}",""]),t.exports=n},2338:function(t,e,c){"use strict";c.r(e);var n={name:"Index",props:["products"],data:function(){return{baseApi:"https://be-dev.beliayam.com",baseURL:"https://fe-dev.beliayam.com"}}},l=(c(2288),c(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.products&&t.products.length>0?c("div",{staticClass:"pick_today"},[c("h5",{staticClass:"mt-3 mb-3"},[t._v("Produk Terkait")]),t._v(" "),t.products&&t.products>0?c("div",{staticClass:"row"},t._l(t.products,(function(e){return c("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[c("div",{staticClass:"\n          list-card\n          bg-white\n          h-100\n          rounded\n          overflow-hidden\n          position-relative\n          shadow-sm\n        "},[c("div",{staticClass:"list-card-image"},[c("NuxtLink",{staticClass:"text-dark",attrs:{to:e.slug}},[c("div",{staticClass:"member-plan position-absolute"},[c("span",{staticClass:"badge m-3 badge-danger"},[t._v("10%")])]),t._v(" "),c("div",{staticClass:"p-3"},[c("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),c("h6",{staticStyle:{"white-space":"nowrap",width:"120px",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),c("h6",{staticClass:"price m-0 text-dark"},[c("i",{staticClass:"fas fa-weight"}),t._v(" 1 Ekor\n              ")]),t._v(" "),c("h6",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                "+t._s(t._f("formatMoney")(e.price))+"\n              ")]),t._v(" "),c("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[c("h6",{staticClass:"btn btn-success w-100"},[c("i",{staticClass:"fas fa-cart-plus"}),t._v(" Tambahkan\n                ")])])])])],1)])])})),0):c("div",{staticClass:"row"},[c("div",{staticClass:"col-12 col-md-12 mb-3 text-muted related-products-empty"},[t._v("\n      Belum ada produk terkait\n    ")])])]):t._e()}),[],!1,null,"7cc20544",null);e.default=component.exports}}]);