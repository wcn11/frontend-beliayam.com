(window.webpackJsonp=window.webpackJsonp||[]).push([[35,29],{2159:function(t,e,n){var content=n(2214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("4f8cecd6",content,!0,{sourceMap:!1})},2179:function(t,e,n){"use strict";n.r(e);var r={name:"Index",props:["products"],data:function(){return{baseApi:"https://be-dev.beliayam.com",baseURL:"https://fe-dev.beliayam.com"}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pick_today"},[n("h5",{staticClass:"mt-3 mb-3"},[t._v("Produk Terkait")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.products,(function(e){return n("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[n("div",{staticClass:"\n          list-card\n          bg-white\n          h-100\n          rounded\n          overflow-hidden\n          position-relative\n          shadow-sm\n        "},[n("div",{staticClass:"list-card-image"},[n("NuxtLink",{staticClass:"text-dark",attrs:{to:e.slug}},[n("div",{staticClass:"member-plan position-absolute"},[n("span",{staticClass:"badge m-3 badge-danger"},[t._v("10%")])]),t._v(" "),n("div",{staticClass:"p-3"},[n("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseApi+"/"+e.image}}),t._v(" "),n("h6",{staticStyle:{"white-space":"nowrap",width:"120px",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),n("h6",{staticClass:"price m-0 text-dark"},[n("i",{staticClass:"fas fa-weight"}),t._v(" 1 Ekor\n              ")]),t._v(" "),n("h6",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                "+t._s(e.price)+"\n              ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[n("h6",{staticClass:"btn btn-success w-100"},[n("i",{staticClass:"fas fa-cart-plus"}),t._v(" Tambahkan\n                ")])])])])],1)])])})),0)])}),[],!1,null,null,null);e.default=component.exports},2213:function(t,e,n){"use strict";n(2159)},2214:function(t,e,n){var r=n(24)(!1);r.push([t.i,".not-found-anything[data-v-05ac4c90]{margin:10%}.margin-bottom-10[data-v-05ac4c90]{margin-bottom:10px}#modal-cart-success[data-v-05ac4c90]{background-color:rgba(0,0,0,.56078);position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}",""]),t.exports=r},2250:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(46),n(52),n(28),n(15),n(2114)),o={name:"Products",components:{VueSlickCarousel:n.n(c).a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/product/").concat(t.$route.params.product)).then((function(e){t.product=e.data.data,t.getRelatedProducts()}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{relatedProducts:[],cart:{product_id:"",quantity:1,note:""},product:{},products:[],categorySetting:{page:1,show:10,sortBy:"ASC",orderBy:"name",status:"active"},settings:{infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,centerMode:!0,arrows:!1,dots:!0,autoplay:!0}}},methods:{addProductToCart:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.getters["auth/isAuthenticated"]||(t.$toast.success("Masuk Untuk Melanjutkan Belanja"),t.$router.push("/login")),e.next=3,t.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/cart"),{product_id:t.product._id,user_id:t.$auth.user._id,quantity:t.cart.quantity,note:t.cart.note}).then((function(e){e.data.error||(t.resetCarts(),$("#modal-cart-success").css("display","block"))})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},resetCarts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("cart/setCartsNav");case 2:case"end":return e.stop()}}),e)})))()},setIncrementQuantity:function(t){if(this.product.stock>parseInt(this.cart.quantity))return this.cart.quantity++;evt.preventDefault()},setDecrementQuantity:function(t){if(this.cart.quantity>1)return this.cart.quantity--;evt.preventDefault()},checkQuantity:function(t){""!==this.cart.quantity&&0!==parseInt(this.cart.quantity)||(this.cart.quantity="1",t.target.value="1"),parseInt(this.cart.quantity)>this.product.stock&&(this.cart.quantity=this.product.stock,t.target.value="".concat(this.product.stock))},filterQuantity:function(t){var e=(t=t||window.event).which?t.which:t.keyCode;return!(e>31&&(e<48||e>57))||t.preventDefault()},setQuantity:function(t){this.cart.quantity=t.target.value},refresh:function(){this.$nuxt.refresh()},setRelatedProductsFilter:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.products.products.filter((function(e){return e.slug!==t.$route.params.product}));case 2:return e.abrupt("return",t.relatedProducts=e.sent);case 3:case"end":return e.stop()}}),e)})))()},getRelatedProducts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/category/_s?key=").concat(t.product.category[0].slug,"&page=").concat(t.categorySetting.page,"&show=").concat(t.categorySetting.show,"&sortBy=").concat(t.categorySetting.sortBy,"&orderBy=$").concat(t.categorySetting.orderBy,"&status=").concat(t.categorySetting.status)).then((function(e){t.products=e.data.data,t.setRelatedProductsFilter()}));case 2:case"end":return e.stop()}}),e)})))()},closeModal:function(){$("#modal-cart-success").css("display","none")},toFirstLetterUpperCase:function(t){return t[0].toUpperCase()+t.substring(1)},setScript:function(){$(document).ready((function(){$(".qtyplus").click((function(t){t.preventDefault();var e=$(this).attr("field"),n=parseInt($("input[name="+e+"]").val());isNaN(n)?$("input[name="+e+"]").val(1):$("input[name="+e+"]").val(n+1)})),$(".qtyminus").click((function(t){t.preventDefault();var e=$(this).attr("field"),n=parseInt($("input[name="+e+"]").val());!isNaN(n)&&n>1?$("input[name="+e+"]").val(n-1):$("input[name="+e+"]").val(1)}))}))}},loading:{color:"red",height:"5px"},head:function(){return{title:"Produk Ayam Broiler",htmlAttrs:{lang:"en"}}},mounted:function(){document.getElementById("page-product").classList.add("animate__fadeInRight"),this.setScript()},beforeDestroy:function(){document.getElementById("page-product").classList.add("animate__fadeOutLeft")}},d=(n(2213),n(18)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animate__animated",attrs:{id:"page-product"}},[t.product&&Object.keys(t.product).length>0?n("div",[n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container"},[n("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Produk")])])])]),t._v(" "),n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"mb-3"},[n("img",{staticClass:"img-fluid shadow-sm rounded w-100",attrs:{src:this.$config.baseApi+"/"+t.product.image,alt:"Responsive image"}})]),t._v(" "),n("div",{staticClass:"pd-f d-flex align-items-center mb-3"},[n("button",{staticClass:"\n                  btn btn-warning\n                  p-3\n                  rounded\n                  btn-block\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mr-3\n                  btn-lg\n                ",on:{click:function(e){return t.addProductToCart()}}},[n("i",{staticClass:"fad fa-plus m-0 mr-2"}),t._v(" Keranjang\n              ")]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"p-4 bg-white rounded shadow-sm"},[n("div",{staticClass:"pt-0"},[n("h2",{staticClass:"font-weight-bold"},[t._v(t._s(t.product.name))]),t._v(" "),n("p",{staticClass:"\n                    font-weight-light\n                    text-dark\n                    m-0\n                    d-flex\n                    align-items-center\n                  "},[t._v("\n                  Produk MRP :\n                  "),n("b",{staticClass:"h6 text-dark m-0"},[t._v(t._s(t.product.price))]),t._v(" "),n("span",{staticClass:"badge badge-danger ml-2"},[t._v("50% OFF")])])]),t._v(" "),n("div",{staticClass:"pt-2"},[n("div",{staticClass:"row"},[t._m(1),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("p",{staticClass:"font-weight-bold m-0"},[t._v("Ketersediaan Produk:")]),t._v(" "),n("p",{staticClass:"text-muted m-0"},[t._v("\n                      "+t._s(t.product.stock)+" Kuantitas\n                    ")])])])]),t._v(" "),n("div",{staticClass:"details"},[n("div",{staticClass:"pt-3 bg-white"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"btn-group beliayam-radio btn-group-toggle",attrs:{"data-toggle":"buttons"}},[n("label",{staticClass:"btn btn-secondary"},[n("input",{attrs:{type:"radio",name:"options",id:"option3"}}),t._v("\n                        "+t._s(t.product.weight)+" Kg\n                      ")])]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("div",{staticClass:"cart-items-number d-flex",attrs:{id:"myform"}},[n("input",{staticClass:"qtyminus btn btn-success btn-sm",attrs:{type:"button",value:"-",field:"quantity",disabled:0===t.cart.quantity||1===t.cart.quantity||""===t.cart.quantity||0===t.product.stock},on:{click:t.setDecrementQuantity}}),t._v(" "),n("input",{staticClass:"qty form-control",attrs:{type:"text",name:"quantity",value:"1"},on:{keydown:function(e){return t.filterQuantity(e)},keyup:function(e){return t.setQuantity(e)},change:function(e){return t.checkQuantity(e)}}}),t._v(" "),n("input",{staticClass:"qtyplus btn btn-success btn-sm",attrs:{type:"button",value:"+",field:"quantity",disabled:t.cart.quantity>=t.product.stock||""===t.cart.quantity},on:{click:t.setIncrementQuantity}})])])])]),t._v(" "),n("div",{staticClass:"pt-3"},[t.product.stock<t.cart.quantity?n("div",{staticClass:"text-danger text-center"},[n("p",[t._v("\n                      Maks. persediaan produk ini hanya ada\n                      "+t._s(t.product.stock)+" item.\n                    ")])]):t._e(),t._v(" "),0===parseInt(t.cart.quantity)||""===t.cart.quantity?n("div",{staticClass:"text-danger text-center"},[n("p",[t._v("Min. Pembelian 1 Item")])]):t._e(),t._v(" "),n("div",{staticClass:"\n                      input-group\n                      mb-3\n                      border\n                      rounded\n                      shadow-sm\n                      overflow-hidden\n                      bg-white\n                    "},[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cart.note,expression:"cart.note"}],staticClass:"\n                        shadow-none\n                        border-0\n                        form-control form-control-lg\n                        pl-0\n                      ",attrs:{type:"text",placeholder:"Tambah Catatan disini...","aria-label":"","aria-describedby":"basic-addon1"},domProps:{value:t.cart.note},on:{input:function(e){e.target.composing||t.$set(t.cart,"note",e.target.value)}}})]),t._v(" "),n("p",{staticClass:"font-weight-bold mb-2"},[t._v("Deskripsi Produk")]),t._v(" "),n("p",{staticClass:"text-muted small mb-0"},[t._v("\n                    "+t._s(t.product.description)+"\n                  ")])])])])])]),t._v(" "),n("Product",{attrs:{products:t.relatedProducts}})],1)]),t._v(" "),n("div",{attrs:{id:"modal-cart-success"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content animate__animated animate__jello"},[n("div",{staticClass:"modal-header"},[t._m(3),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.closeModal()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])])])]):n("div",{staticClass:"not-found-anything"},[t._m(4)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"\n                  btn btn-success\n                  p-3\n                  rounded\n                  btn-block\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  btn-lg\n                  m-0\n                "},[n("i",{staticClass:"fad fa-shopping-cart m-0 mr-2"}),t._v(" Beli\n              ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6"},[n("p",{staticClass:"font-weight-bold m-0"},[t._v("Pengiriman")]),t._v(" "),n("p",{staticClass:"text-muted m-0"},[t._v("Gratis Ongkos Kirim")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"\n                          border-0\n                          btn btn-outline-secondary\n                          text-success\n                          bg-white\n                        "},[e("i",{staticClass:"fad fa-sticky-note"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[n("i",{staticClass:"fad fa-egg-fried text-success"}),t._v(" Berhasil\n              Ditambahkan\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h4",[t._v("Tidak Ditemukan Apapun")])])}],!1,null,"05ac4c90",null);e.default=component.exports;installComponents(component,{Product:n(2179).default})}}]);