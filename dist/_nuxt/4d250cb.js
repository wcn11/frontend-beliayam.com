(window.webpackJsonp=window.webpackJsonp||[]).push([[44,14],{2114:function(t,e,n){var content=n(2122);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("171c9467",content,!0,{sourceMap:!1})},2121:function(t,e,n){"use strict";n(2114)},2122:function(t,e,n){var r=n(25)(!1);r.push([t.i,"#modal-vouchers[data-v-123c4e39]{background-color:rgba(0,0,0,.56078);position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.voucher-list[data-v-123c4e39]{border-radius:5px;margin-bottom:20px;display:flex}.label-voucher[data-v-123c4e39]{font-size:5vh;font-weight:500}.img-voucher[data-v-123c4e39]{border-radius:15px}@media only screen and (max-device-width:767px){.content-heading[data-v-123c4e39]{margin-top:10px}}",""]),t.exports=r},2133:function(t,e,n){var content=n(2173);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("026e53d5",content,!0,{sourceMap:!1})},2150:function(t,e,n){"use strict";n.r(e);var r=n(15),c=n(5),o=(n(53),n(32),n(14),n(40),n(37),n(58),n(27),n(59),n(46),n(73));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"Cart",data:function(){return{baseApi:"http://localhost:4000",cart:{},carts:[],vouchers:[],selectedVoucher:[]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.$store.state.cart.carts.length<=0)){e.next=6;break}return e.next=3,t.$store.dispatch("cart/setCarts");case 3:return e.next=5,t.$store.state.cart.carts;case 5:t.carts=e.sent;case 6:return e.next=8,t.$store.dispatch("cart/setVouchers");case 8:return e.next=10,t.$store.state.cart.vouchers;case 10:t.vouchers=e.sent;case 11:case"end":return e.stop()}}),e)})))()},methods:{checkout:function(){var t=this,e=this.getCarts.map((function(t,e){return t._id}));this.$axios.$post("".concat("http://localhost:4000/api/v1","/checkout/cart"),{cart:{cart_id:this.$store.state.cart.cart._id,products:e},user_id:this.$store.state.auth.user._id,vouchers:[],type:"checkout",platform:"all",isActive:"true"}).then((function(e){e.data.error&&t.$toast.warning(e.data.message),console.log(e)})).catch((function(e){e&&e.response&&e.response.data.error?t.$toast.warning(e.response.data.message):t.$toast.warning("Server Sibuk")}))},setVoucher:function(t,e){this.selectedVoucher.push(t),this.$store.dispatch("cart/setVoucher",t)},setIncrement:function(t){var e=this,n=this.getCarts.filter((function(e,n){if(e._id===t)return e.indexFilter=n,e}));n.length>0&&n[0].productOnLive.stock>parseInt(n[0].quantity)&&(this.$store.dispatch("cart/setIncrement",n[0]),this.$axios.$put("".concat("http://localhost:4000/api/v1","/cart/update/quantity"),{user_id:this.$auth.user._id,product_id:t,type:"plus",quantity:1}).then((function(t){t.data.error&&e.$toast.warning(t.data.message)})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Server Sibuk")})))},setDecrement:function(t){var e=this,n=this.getCarts.filter((function(e,n){if(e._id===t)return e.indexFilter=n,e}));n.length>0&&parseInt(n[0].quantity)>1&&(this.$store.dispatch("cart/setDecrement",n[0]),this.$axios.$put("".concat("http://localhost:4000/api/v1","/cart/update/quantity"),{user_id:this.$auth.user._id,product_id:t,type:"minus",quantity:1}).then((function(t){t.data.error&&e.$toast.warning(t.data.message)})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Server Sibuk")})))},openModalVouchers:function(){$("#modal-vouchers").css("display","block")},closeModal:function(){$("#modal-vouchers").css("display","none")}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("cart",["getCarts","getCountCart","getCartsVouchers","getSelectedVouchers"]))},m=d,h=(n(2121),n(18)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container"},[n("ol",{staticClass:"d-flex align-items-center mb-0 p-0"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{staticClass:"text-success",attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n          Keranjang Anda\n        ")])])])]),t._v(" "),n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[t.getCarts.length>0?n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[n("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[n("div",{staticClass:"\n                card\n                border-0\n                beliayam-accor\n                rounded\n                shadow-sm\n                overflow-hidden\n              "},[n("div",{staticClass:"card-header bg-white border-0 p-0",attrs:{id:"headingOne"}},[n("h2",{staticClass:"mb-0"},[n("button",{staticClass:"\n                      btn\n                      d-flex\n                      align-items-center\n                      bg-white\n                      btn-block\n                      text-left\n                      btn-lg\n                      h5\n                      px-3\n                      py-4\n                      m-0\n                    ",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                    Keranjang ("+t._s(t.getCarts.length)+" items)\n                  ")])])]),t._v(" "),n("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[n("div",{staticClass:"card-body p-0 border-top"},[n("div",{staticClass:"beliayam-cart"},[t._l(t.getCarts,(function(e){return n("div",{key:e._id,staticClass:"\n                        cart-items\n                        bg-white\n                        position-relative\n                        border-bottom\n                      "},[t._m(0,!0),t._v(" "),n("div",{staticClass:"d-flex align-items-center p-3"},[t._m(1,!0),t._v(" "),n("div",{staticClass:"ml-3 text-dark text-decoration-none w-100"},[n("h5",{staticClass:"mb-1"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text-muted mb-2"},[t._v("\n                            "+t._s(e.price)+"\n                          ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("p",{staticClass:"total_price font-weight-bold m-0"},[t._v("\n                              "+t._s(e.price*e.quantity)+"\n                            ")]),t._v(" "),n("form",{staticClass:"cart-items-number d-flex ml-auto",attrs:{id:"myform",method:"POST",action:"#"}},[n("input",{staticClass:"qtyminus btn btn-success btn-sm",attrs:{type:"button",value:"-",field:"quantity"},on:{click:function(n){return t.setDecrement(e._id)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"product.quantity"}],staticClass:"qty form-control",attrs:{type:"number",name:"quantity",value:"1"},domProps:{value:e.quantity},on:{input:function(n){n.target.composing||t.$set(e,"quantity",n.target.value)}}}),t._v(" "),n("input",{staticClass:"qtyplus btn btn-success btn-sm",attrs:{type:"button",value:"+",field:"quantity"},on:{click:function(n){return t.setIncrement(e._id)}}})])])])])])})),t._v(" "),n("div",[n("div",{staticClass:"text-decoration-none btn btn-block p-3",attrs:{type:"button"},on:{click:function(e){return t.checkout()}}},[n("div",{staticClass:"\n                            rounded\n                            shadow\n                            bg-success\n                            d-flex\n                            align-items-center\n                            p-3\n                            text-white\n                          "},[n("div",{staticClass:"more text-white"},[n("h6",{staticClass:"m-0"},[t._v("\n                              Subtotal Rp.\n                              "+t._s(t.getSelectedVouchers.grandTotalAfterDiscount?t.getSelectedVouchers.grandTotalAfterDiscount:t.getCountCart)+"\n                            ")]),t._v(" "),n("p",{staticClass:"small m-0"},[t._v("Lanjutkan ke pembayaran")])]),t._v(" "),t._m(2)])])])],2)])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"sticky_sidebar"},[n("div",{staticClass:"\n                bg-white\n                rounded\n                overflow-hidden\n                shadow-sm\n                mb-3\n                checkout-sidebar\n              "},[t._m(3),t._v(" "),n("div",[n("div",{staticClass:"bg-white p-3 clearfix"},[n("p",{staticClass:"font-weight-bold small mb-2"},[t._v("Voucher")]),t._v(" "),n("button",{staticClass:"btn btn-light mb-1 w-100",on:{click:function(e){return t.openModalVouchers()}}},[n("i",{staticClass:"fad fa-badge-percent text-danger"}),t._v(" "),n("span",{staticClass:"small text-muted"},[t._v("\n                      Gunakan / Masukkan Voucher")])]),t._v(" "),t._l(t.getSelectedVouchers.vouchers,(function(e){return n("p",{key:e._id,staticClass:"mb-1"},[t._v("\n                    "+t._s(e.voucherName?e.voucherName:e.voucherCode)+"\n                    "),n("span",{staticClass:"float-right text-dark"},[t._v("-Rp. "+t._s(e.discountValueFee))])])})),t._v(" "),n("h6",{staticClass:"mb-0 text-success"},[t._v("\n                    Total Diskon"),n("span",{staticClass:"float-right text-success"},[t._v("- Rp. "+t._s(t.getSelectedVouchers.totalVoucherFee))])])],2),t._v(" "),n("div",{staticClass:"bg-white p-3 clearfix"},[n("p",{staticClass:"font-weight-bold small mb-2"},[t._v("Rincian Tagihan")]),t._v(" "),n("p",{staticClass:"mb-1"},[t._v("\n                    Total produk\n                    "),n("span",{staticClass:"small text-muted"},[t._v("("+t._s(this.$store.state.cart.carts.length)+" item)")]),t._v(" "),n("span",{staticClass:"float-right text-dark"},[t._v("Rp. "+t._s(t.getCountCart))])]),t._v(" "),n("p",{staticClass:"mb-1"},[t._v("\n                    Diskon\n                    "),n("span",{staticClass:"float-right text-dark"},[t._v("-Rp. "+t._s(t.getSelectedVouchers.totalVoucherFee))])])]),t._v(" "),n("div",{staticClass:"p-3 border-top"},[n("h5",{staticClass:"mb-0"},[t._v("\n                    SubTotal\n                    "),n("span",{staticClass:"float-right text-danger"},[t._v("Rp.\n                      "+t._s(t.getSelectedVouchers.grandTotalAfterDiscount?t.getSelectedVouchers.grandTotalAfterDiscount:t.getCountCart))])])])])]),t._v(" "),n("p",{staticClass:"text-success text-center"},[t._v("\n              Anda Hemat Rp. "+t._s(t.getSelectedVouchers.totalVoucherFee)+"\n            ")])])])]):t._e()]),t._v(" "),n("div",{attrs:{id:"modal-vouchers"}},[n("div",{staticClass:"\n          modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg\n        "},[n("div",{staticClass:"modal-content animate__animated animate__jello"},[n("div",{staticClass:"modal-header"},[t._m(4),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.closeModal()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",[n("div",{staticClass:"paragraphs p-3"},[n("div",{staticClass:"justify-content-center"},t._l(t.getCartsVouchers,(function(e,r){return n("div",{key:e._id,staticClass:"voucher-list row"},[n("img",{staticClass:"col-md-4 d-flex clearfix img-fluid img-voucher",attrs:{src:t.baseApi+"/"+e.banner,alt:""+(e.voucherName?e.voucherName:e.voucherCode)}}),t._v(" "),n("div",{staticClass:"col-md-8 content-heading pl-2 pr-2"},[n("div",[n("div",[n("p",{staticClass:"mb-1 label-voucher"},[t._v("\n                            "+t._s(e.voucherName?e.voucherName:e.voucherCode)+"\n                            "),n("button",{staticClass:"\n                                btn btn-outline-danger\n                                font-weight-light\n                                float-right\n                              ",on:{click:function(n){return t.setVoucher(e,r)}}},[t._v("\n                              gunakan\n                            ")])])]),t._v(" "),n("p",[t._v("\n                          Donec id elit non mi porta gravida at eget metus.\n                          Etiam porta sem malesuada magna mollis euismod.\n                          Donec sed odio dui.\n                        ")])])])])})),0)])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"position-absolute",attrs:{href:"product_details.html"}},[n("span",{staticClass:"badge badge-danger m-3"},[t._v("10%")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"product_details.html"}},[e("img",{staticClass:"img-fluid",attrs:{src:"img/cart/g1.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-auto"},[e("i",{staticClass:"fad fa-caret-right"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n                  d-flex\n                  align-items-center\n                  beliayam-cart-item-profile\n                  border-bottom\n                  bg-white\n                  p-3\n                "},[n("img",{staticClass:"mr-3 rounded-circle img-fluid",attrs:{alt:"beliayam",src:"img/starter1.jpg"}}),t._v(" "),n("div",{staticClass:"d-flex flex-column"},[n("h6",{staticClass:"mb-1 font-weight-bold"},[t._v("Beli Ayam Warehouse")]),t._v(" "),n("p",{staticClass:"mb-0 small text-muted"},[n("i",{staticClass:"feather-map-pin"}),t._v(" Jl. Jend. Sudirman Kav.\n                    52-53 SCBD LOT 28, Jakarta Selatan\n                  ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[n("i",{staticClass:"fad fa-egg-fried text-success"}),t._v(" Gunakan Voucher\n            ")])}],!1,null,"123c4e39",null);e.default=component.exports},2172:function(t,e,n){"use strict";n(2133)},2173:function(t,e,n){var r=n(25)(!1);r.push([t.i,".margin-bottom-10[data-v-12a4b850]{margin-bottom:10px}",""]),t.exports=r},2210:function(t,e,n){"use strict";n.r(e);var r={name:"PageCart",head:{title:"Keranjang",htmlAttrs:{lang:"en"}},mounted:function(){document.getElementById("page-cart-index").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-cart-index").classList.add("animate__fadeOutLeft")}},c=(n(2172),n(18)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate__animated",attrs:{id:"page-cart-index"}},[e("Cart")],1)}),[],!1,null,"12a4b850",null);e.default=component.exports;installComponents(component,{Cart:n(2150).default})}}]);