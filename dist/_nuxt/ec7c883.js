(window.webpackJsonp=window.webpackJsonp||[]).push([[38,31],{2296:function(t,e,n){var content=n(2326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("76622832",content,!0,{sourceMap:!1})},2324:function(t,e,n){"use strict";var r=n(6),o=n(2),c=n(7),d=n(57),l=n(386),m=n(385),f=n(8),h=o.RangeError,v=o.String,_=Math.floor,y=c(m),C=c("".slice),x=c(1..toFixed),k=function(t,e,n){return 0===e?n:e%2==1?k(t,e-1,n*t):k(t*t,e/2,n)},w=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=_(r/1e7)},P=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},D=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,n,r,o,c=l(this),m=d(t),data=[0,0,0,0,0,0],f="",_="0";if(m<0||m>20)throw h("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return v(c);if(c<0&&(f="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*k(2,69,1))-69)<0?c*k(2,-e,1):c/k(2,e,1),n*=4503599627370496,(e=52-e)>0){for(w(data,0,n),r=m;r>=7;)w(data,1e7,0),r-=7;for(w(data,k(10,r,1),0),r=e-1;r>=23;)P(data,1<<23),r-=23;P(data,1<<r),w(data,1,1),P(data,2),_=D(data)}else w(data,0,n),w(data,1<<-e,0),_=D(data)+y("0",m);return _=m>0?f+((o=_.length)<=m?"0."+y("0",m-o)+_:C(_,0,o-m)+"."+C(_,o-m)):f+_}})},2325:function(t,e,n){"use strict";n(2296)},2326:function(t,e,n){var r=n(22)(!1);r.push([t.i,".text-weight[data-v-3484443d]{color:#ff680d;font-size:12px}.member-plan[data-v-3484443d]{padding:10px}.badge-discount[data-v-3484443d]{color:#f1e5dd;background-color:#bf4d09;box-shadow:0 0 2px 0 #000}.title-product[data-v-3484443d]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:calc(45% + 10px)}.related-products-empty[data-v-3484443d]{font-size:24px}.item-img[data-v-3484443d]{max-height:150px;border-radius:6px}",""]),t.exports=r},2355:function(t,e,n){var content=n(2433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0107ec12",content,!0,{sourceMap:!1})},2376:function(t,e,n){"use strict";n.r(e);n(27),n(15),n(31),n(75),n(86),n(2324);var r=n(0),o=n.n(r);o.a.locale("id-ID");var c={name:"Index",props:["products","currentProduct"],data:function(){return{baseApi:"https://api-v2.beliayam.com",baseURL:"https://beliayam.com"}},methods:{getPriceLabel:function(t){var e=t,n=e.price,r=o()().format();if(e.hasPromo&&e.hasPromo.isActive&&e.hasPromo.promoStart<r&&e.hasPromo.promoEnd>r)if("percent"===e.hasPromo.promoBy){var c=e.hasPromo.promoValue/100*e.price;n=e.price-c}else n="price"===e.promoBy?e.price-e.hasPromo.promoValue:e.price;else{if(!(e.hasDiscount&&e.hasDiscount.isDiscount&&e.hasDiscount.discountStart<r&&e.hasDiscount.discountEnd>r))return n;if("percent"===e.hasDiscount.discountBy){var d=e.hasDiscount.discount/100*e.price;n=e.price-d}else n="price"===e.hasDiscount.discountBy?e.price-e.hasDiscount.discount:e.price}return n},getPriceBadge:function(t){var e=t,n=0,r=o()().format();if(e.hasPromo&&e.hasPromo.promoStart<r&&e.hasPromo.promoEnd>r)n="percent"===e.hasPromo.promoBy?e.hasPromo.promoValue:"price"===e.hasPromo.promoBy?e.hasPromo.discount/e.price*100:0;else{if(!(e.hasDiscount&&e.hasDiscount.isDiscount&&e.hasDiscount.discountStart<r&&e.hasDiscount.discountEnd>r))return n;n="percent"===e.hasDiscount.discountBy?e.hasDiscount.discount:"price"===e.hasDiscount.discountBy?e.hasDiscount.discount/e.price*100:e.price}return n}},computed:{filterProduct:function(){var t=this,e=[];return this.products&&this.products.products&&this.products.products.length>0&&this.currentProduct?this.products.products.filter((function(e){return e._id!==t.currentProduct._id&&e})):e}},filters:{formatDate:function(t){return o()(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")},setSquareDecimal:function(t){return t.toFixed(2)}}},d=(n(2325),n(17)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pick_today"},[n("h5",{staticClass:"mt-3 mb-3"},[t._v("Produk Terkait")]),t._v(" "),t.products&&t.products.products?n("div",{staticClass:"row"},t._l(t.filterProduct,(function(e){return n("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[n("div",{staticClass:"\n          list-card\n          bg-white\n          h-100\n          rounded\n          overflow-hidden\n          position-relative\n          shadow-sm\n        "},[n("div",{staticClass:"list-card-image"},[n("NuxtLink",{staticClass:"text-dark",attrs:{to:e.slug}},[e.stock<=0?n("div",{staticClass:"member-plan position-absolute"},[n("span",{staticClass:"badge m-3 badge-danger-out-of-stock"},[t._v("\n                Kehabisan Persediaan\n              ")])]):t._e(),t._v(" "),e.hasPromo?n("div",{staticClass:"member-plan position-absolute"},[n("span",{staticClass:"badge badge-success badge-discount"},[t._v("\n                #"+t._s(e.hasPromo.tags)+"\n              ")])]):!e.hasPromo&&e.hasDiscount&&e.hasDiscount.isDiscount?n("div",{staticClass:"member-plan position-absolute"},["percent"===e.hasDiscount.discountBy?n("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon "+t._s(e.hasDiscount.discount)+"%")]):n("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon\n                "+t._s(t._f("setSquareDecimal")(e.hasDiscount.discount/e.price*100))+"%")])]):t._e(),t._v(" "),n("div",{staticClass:"p-3"},[e.image?n("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseApi+"/"+e.image}}):n("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseURL+"/default/product.jpg"}}),t._v(" "),n("h6",{staticClass:"title-product"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),n("h6",{staticClass:"price m-0 text-weight"},[n("i",{staticClass:"fas fa-weight"}),t._v(" 1 Ekor/ "+t._s(e.weight)+"Kg\n              ")]),t._v(" "),n("div",{staticClass:"pt-4 text-right"},[t.getPriceBadge(e)>0?n("del",{staticClass:"ml-2 text-danger"},[t._v("Rp "+t._s(t._f("formatMoney")(e.price)))]):t._e(),t._v(" "),n("span",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                  Rp "+t._s(t._f("formatMoney")(t.getPriceLabel(e)))+"\n                ")])]),t._v(" "),n("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[n("h6",{staticClass:"btn btn-success w-100"},[n("i",{staticClass:"fas fa-cart-plus"}),t._v(" Tambahkan\n                ")])])])])],1)])])})),0):n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-12 mb-3 text-muted related-products-empty"},[t._v("\n      Belum ada produk terkait\n    ")])])])}),[],!1,null,"3484443d",null);e.default=component.exports},2432:function(t,e,n){"use strict";n(2355)},2433:function(t,e,n){var r=n(22)(!1);r.push([t.i,".title-product[data-v-420dcc98]{font-size:calc(45% + 20px)}.text-description[data-v-420dcc98]{font-size:15px}.notes[data-v-420dcc98]{max-width:calc(65% - 4ch);padding-right:5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.input-none[data-v-420dcc98]{display:none}.input-wrapper[data-v-420dcc98]{width:100%;margin-left:8px;position:relative}.input[data-v-420dcc98]{height:35px;border-radius:4px;border:1px solid #f52c5c;width:95%;outline:none;box-sizing:border-box;height:60px;max-height:100px}.placeholder[data-v-420dcc98]{pointer-events:none;position:absolute;font-weight:400;top:18px;left:8px;padding:0 8px;background-color:#b4390c;border-radius:5px;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .25s cubic-bezier(.4,0,.2,1);color:grey}.input:not(:-moz-placeholder-shown).input:not(:focus)+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;-moz-transition:.2s ease;transition:.2s ease}.input:not(:-ms-input-placeholder).input:not(:focus)+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;-ms-transition:.2s ease;transition:.2s ease}.input:not(:placeholder-shown).input:not(:focus)+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;transition:.2s ease}.input[data-v-420dcc98]:focus{border-color:#b4390c}.input:focus+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;transition:.2s ease}.input[data-v-420dcc98]:invalid:not(:-moz-placeholder-shown){-moz-transition:.2s ease;transition:.2s ease;border-color:#f52c5c}.input[data-v-420dcc98]:invalid:not(:-ms-input-placeholder){-ms-transition:.2s ease;transition:.2s ease;border-color:#f52c5c}.input[data-v-420dcc98]:invalid:not(:placeholder-shown){transition:.2s ease;border-color:#f52c5c}.input:invalid:not(:-moz-placeholder-shown)+.placeholder[data-v-420dcc98]{-moz-transition:.2s ease;transition:.2s ease;color:#fff}.input:invalid:not(:-ms-input-placeholder)+.placeholder[data-v-420dcc98]{-ms-transition:.2s ease;transition:.2s ease;color:#fff}.input:invalid:not(:placeholder-shown)+.placeholder[data-v-420dcc98]{transition:.2s ease;color:#fff}.input:invalid:not(:-moz-placeholder-shown).input:not(:focus)+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;-moz-transition:.2s ease;transition:.2s ease}.input:invalid:not(:-ms-input-placeholder).input:not(:focus)+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;-ms-transition:.2s ease;transition:.2s ease}.input:invalid:not(:placeholder-shown).input:not(:focus)+.placeholder[data-v-420dcc98]{transform:scale(.75) translateY(-36px) translateX(-15%);color:#fff;transition:.2s ease}.badge-discount[data-v-420dcc98]{position:absolute;margin:2%}.badge-danger-out-of-stock[data-v-420dcc98]{color:#ffe5e5;background-color:#cd4d00}.not-found-anything[data-v-420dcc98]{margin:10%}.margin-bottom-10[data-v-420dcc98]{margin-bottom:10px}#modal-cart-success[data-v-420dcc98]{background-color:rgba(0,0,0,.56078);position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}",""]),t.exports=r},2486:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(42),n(56),n(31),n(75),n(15),n(86),n(2278)),c=n.n(o),d=n(0),l=n.n(d);l.a.locale("id-ID");var m={name:"Products",components:{VueSlickCarousel:c.a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://api-v2.beliayam.com/api/v1","/product/slug/").concat(t.$route.params.product)).then((function(e){t.product=e.data.data,t.getRelatedProducts()}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{relatedProducts:[],cart:{product_id:"",quantity:1,note:""},product:{},products:[],categorySetting:{page:1,show:5,sortBy:"ASC",orderBy:"name",status:"active"},settings:{infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,centerMode:!0,arrows:!1,dots:!0,autoplay:!0}}},methods:{getPriceLabel:function(){var t=this.product,e=t.price,n=l()().format();if(t.hasPromo&&t.hasPromo.isActive&&t.hasPromo.promoStart<n&&t.hasPromo.promoEnd>n)if("percent"===t.hasPromo.promoBy){var r=t.hasPromo.promoValue/100*t.price;e=t.price-r}else e="price"===t.promoBy?t.price-t.hasPromo.promoValue:t.price;else{if(!(t.hasDiscount&&t.hasDiscount.isDiscount&&t.hasDiscount.discountStart<n&&t.hasDiscount.discountEnd>n))return e;if("percent"===t.hasDiscount.discountBy){var o=t.hasDiscount.discount/100*t.price;e=t.price-o}else e="price"===t.hasDiscount.discountBy?t.price-t.hasDiscount.discount:t.price}return e},getPriceBadge:function(){var t=this.product,e=0,n=l()().format();if(t.hasPromo&&t.hasPromo.promoStart<n&&t.hasPromo.promoEnd>n)e="percent"===t.hasPromo.promoBy?t.hasPromo.promoValue:"price"===t.hasPromo.promoBy?t.hasPromo.discount/t.price*100:0;else{if(!(t.hasDiscount&&t.hasDiscount.isDiscount&&t.hasDiscount.discountStart<n&&t.hasDiscount.discountEnd>n))return e;e="percent"===t.hasDiscount.discountBy?t.hasDiscount.discount:"price"===t.hasDiscount.discountBy?t.hasDiscount.discount/t.price*100:t.price}return e},addProductToCart:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.product.stock<=0)){e.next=3;break}return $("#outOfStockModal").modal("show"),e.abrupt("return");case 3:if(t.$store.getters["auth/isAuthenticated"]){e.next=7;break}return t.$toast.success("Masuk Untuk Melanjutkan Belanja"),t.$router.push("/login"),e.abrupt("return");case 7:return e.next=9,t.$axios.$post("".concat("https://api-v2.beliayam.com/api/v1","/cart"),{product_id:t.product._id,user_id:t.$store.state.auth.user._id,quantity:t.cart.quantity,note:t.cart.note}).then((function(e){e.data.error||(t.resetCarts(),$("#modal-cart-success").css("display","block"))})).catch((function(t){console.log(t)}));case 9:case"end":return e.stop()}}),e)})))()},buy:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.getters["auth/isAuthenticated"]){e.next=4;break}return t.$toast.success("Masuk Untuk Melanjutkan Belanja"),t.$router.push("/login"),e.abrupt("return");case 4:return e.next=6,t.addProductToCart();case 6:t.$router.push("/keranjang");case 7:case"end":return e.stop()}}),e)})))()},resetCarts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("cart/setCartsNav");case 2:case"end":return e.stop()}}),e)})))()},setIncrementQuantity:function(t){if(this.product.stock>parseInt(this.cart.quantity))return this.cart.quantity++;evt.preventDefault()},setDecrementQuantity:function(t){if(this.cart.quantity>1)return this.cart.quantity--;evt.preventDefault()},checkQuantity:function(t){""!==this.cart.quantity&&0!==parseInt(this.cart.quantity)||(this.cart.quantity="1",t.target.value="1"),parseInt(this.cart.quantity)>this.product.stock&&(this.cart.quantity=this.product.stock,t.target.value="".concat(this.product.stock))},setQuantity:function(t){this.cart.quantity=t.target.value},refresh:function(){this.$nuxt.refresh()},setRelatedProductsFilter:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.relatedProducts=t);case 1:case"end":return n.stop()}}),n)})))()},getRelatedProducts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://api-v2.beliayam.com/api/v1","/category/_s?key=").concat(t.product.category[0].slug,"&page=").concat(t.categorySetting.page,"&show=").concat(t.categorySetting.show,"&sortBy=").concat(t.categorySetting.sortBy,"&orderBy=$").concat(t.categorySetting.orderBy,"&status=").concat(t.categorySetting.status)).then((function(e){t.setRelatedProductsFilter(e.data.data)}));case 2:case"end":return e.stop()}}),e)})))()},closeModal:function(){$("#modal-cart-success").css("display","none")},toFirstLetterUpperCase:function(t){return t[0].toUpperCase()+t.substring(1)},setScript:function(){$(document).ready((function(){$(".qtyplus").click((function(t){t.preventDefault();var e=$(this).attr("field"),n=parseInt($("input[name="+e+"]").val());isNaN(n)?$("input[name="+e+"]").val(1):$("input[name="+e+"]").val(n+1)})),$(".qtyminus").click((function(t){t.preventDefault();var e=$(this).attr("field"),n=parseInt($("input[name="+e+"]").val());!isNaN(n)&&n>1?$("input[name="+e+"]").val(n-1):$("input[name="+e+"]").val(1)}))}))},checkInput:function(t){return t.charCode>=48&&t.charCode<=57}},loading:{color:"red",height:"5px"},head:function(){return{title:"Produk Ayam Broiler",htmlAttrs:{lang:"en"}}},filters:{formatDate:function(t){return l()(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")},setSquareDecimal:function(t){return t}},mounted:function(){document.getElementById("page-product").classList.add("animate__fadeInRight"),this.setScript()},beforeDestroy:function(){document.getElementById("page-product").classList.add("animate__fadeOutLeft")}},f=(n(2432),n(17)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animate__animated",attrs:{id:"page-product"}},[t.product&&Object.keys(t.product).length>0?n("div",[n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container"},[n("ul",{staticClass:"d-flex align-items-center mb-0 p-0 list-unstyled"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{staticClass:"text-danger",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Produk")])])])]),t._v(" "),n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"mb-3"},[t.product.stock<=0?n("div",{staticClass:"member-plan position-absolute"},[n("span",{staticClass:"badge m-3 badge-danger-out-of-stock"},[t._v("\n                  Kehabisan Persediaan\n                ")])]):t._e(),t._v(" "),t.product.hasPromo?n("div",["percent"===t.product.hasPromo.promoBy?n("span",{staticClass:"badge badge-success badge-discount"},[t._v("\n                  #"+t._s(t.product.hasPromo.tags)+"\n                ")]):t._e()]):t.product.hasDiscount&&t.product.hasDiscount.isDiscount?n("div",["percent"===t.product.hasDiscount.discountBy?n("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon\n                  "+t._s(t.product.hasDiscount.discount/t.product.price*100)+"%")]):n("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon\n                  "+t._s(t._f("setSquareDecimal")(t.product.hasDiscount.discount/t.product.price*100))+"%")])]):t._e(),t._v(" "),t.product.image?n("img",{staticClass:"img-fluid shadow-sm rounded w-100",attrs:{src:this.$config.baseApi+"/"+t.product.image,alt:""+t.product.name}}):n("img",{staticClass:"img-fluid shadow-sm rounded w-100",attrs:{src:this.$config.baseURL+"/default/product.jpg",alt:""+t.product.name}})]),t._v(" "),n("div",{staticClass:"pd-f d-flex align-items-center mb-3"},[n("button",{staticClass:"\n                  btn btn-warning\n                  p-3\n                  rounded\n                  btn-block\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mr-3\n                  btn-lg\n                ",on:{click:function(e){return t.addProductToCart()}}},[n("i",{staticClass:"fad fa-plus m-0 mr-2"}),t._v(" Keranjang\n              ")]),t._v(" "),n("button",{staticClass:"\n                  btn btn-success\n                  p-3\n                  rounded\n                  btn-block\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  btn-lg\n                  m-0\n                ",on:{click:function(e){return t.buy()}}},[n("i",{staticClass:"fad fa-shopping-cart m-0 mr-2"}),t._v(" Beli\n              ")])]),t._v(" "),t.product.hasPromo?n("div",{staticClass:"text-danger font-italic"},[t._v("\n              *Pembelian produk saat promo, me-reset produk yang sama pada\n              keranjang\n            ")]):t.product.hasDiscount.isDiscount?n("div",{staticClass:"text-danger font-italic"},[t._v("\n              *Pembelian produk saat diskon, me-reset produk yang sama pada\n              keranjang\n            ")]):t._e()]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"p-4 bg-white rounded shadow-sm"},[n("div",{staticClass:"pt-0"},[n("h2",{staticClass:"font-weight-bold title-product"},[t._v("\n                  "+t._s(t.product.name)+"\n                ")]),t._v(" "),n("p",{staticClass:"\n                    font-weight-light\n                    text-dark\n                    m-0\n                    d-flex\n                    align-items-center\n                  "},[n("b",{staticClass:"h6 text-dark m-0"},[t._v("Rp "+t._s(t._f("formatMoney")(t.getPriceLabel())))]),t._v(" "),t.getPriceBadge()>0?n("del",{staticClass:"ml-2 text-danger"},[t._v("Rp "+t._s(t._f("formatMoney")(t.product.price)))]):t._e(),t._v(" "),t.getPriceBadge()>0?n("span",{staticClass:"badge badge-danger ml-2"},[t._v(t._s(t.getPriceBadge())+"% Hemat")]):t._e()])]),t._v(" "),n("div",{staticClass:"pt-2"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("p",{staticClass:"font-weight-bold m-0"},[t._v("Ketersediaan Produk:")]),t._v(" "),n("p",{staticClass:"text-muted m-0"},[t._v("\n                      "+t._s(t.product.stock)+" Kuantitas\n                    ")])])])]),t._v(" "),n("div",{staticClass:"details"},[n("div",{staticClass:"pt-3 bg-white"},[n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"mr-2"},[t._v(" Berat: ")]),t._v(" "),n("div",{staticClass:"btn-group beliayam-radio btn-group-toggle",attrs:{"data-toggle":"buttons"}},[n("label",{staticClass:"btn btn-secondary"},[n("input",{attrs:{type:"radio",name:"options",id:"option3"}}),t._v("\n                        "+t._s(t.product.weight)+" Kg\n                      ")])]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("div",{staticClass:"cart-items-number d-flex",attrs:{id:"myform"}},[n("input",{staticClass:"qtyminus btn btn-success btn-sm",attrs:{type:"button",value:"-",field:"quantity",disabled:0===t.cart.quantity||1===t.cart.quantity||""===t.cart.quantity||0===t.product.stock},on:{click:t.setDecrementQuantity}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cart.quantity,expression:"cart.quantity"}],staticClass:"qty form-control",attrs:{type:"text",name:"quantity",onkeypress:"return event.charCode >= 48 && event.charCode <= 57"},domProps:{value:t.cart.quantity},on:{keyup:function(e){return t.setQuantity(e)},change:function(e){return t.checkQuantity(e)},input:function(e){e.target.composing||t.$set(t.cart,"quantity",e.target.value)}}}),t._v(" "),n("input",{staticClass:"qtyplus btn btn-success btn-sm",attrs:{type:"button",value:"+",field:"quantity",disabled:t.cart.quantity>=t.product.stock||""===t.cart.quantity},on:{click:t.setIncrementQuantity}})])])])]),t._v(" "),n("div",{staticClass:"pt-3"},[t.product.stock<t.cart.quantity?n("div",{staticClass:"text-danger text-center"},[n("p",[t._v("\n                      Maks. persediaan produk ini hanya ada\n                      "+t._s(t.product.stock)+" item.\n                    ")])]):t._e(),t._v(" "),0===parseInt(t.cart.quantity)||""===t.cart.quantity?n("div",{staticClass:"text-danger text-center"},[n("p",[t._v("Min. Pembelian 1 Item")])]):t._e(),t._v(" "),n("div",{class:"input-wrapper mt-2 mb-3"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cart.note,expression:"cart.note"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.cart.note},on:{input:function(e){e.target.composing||t.$set(t.cart,"note",e.target.value)}}}),t._v(" "),n("span",{staticClass:"placeholder"},[t._v("Tulis catatan untuk item ini")])]),t._v(" "),n("p",{staticClass:"font-weight-bold mb-2"},[t._v("Deskripsi Produk")]),t._v(" "),n("p",{staticClass:"text-muted mb-0 text-description"},[t._v("\n                    "+t._s(t.product.description)+"\n                  ")])])])])])]),t._v(" "),n("ProductRelatedProducts",{attrs:{products:t.relatedProducts,currentProduct:t.product}})],1)]),t._v(" "),n("div",{attrs:{id:"modal-cart-success"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content animate__animated animate__jello"},[n("div",{staticClass:"modal-header"},[t._m(1),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.closeModal()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])])])]):n("div",{staticClass:"not-found-anything"},[t._m(2)]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6"},[n("p",{staticClass:"font-weight-bold m-0"},[t._v("Pengiriman")]),t._v(" "),n("p",{staticClass:"text-muted m-0"},[t._v("Gratis Ongkos Kirim")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[n("i",{staticClass:"fad fa-egg-fried text-success"}),t._v(" Berhasil\n              Ditambahkan\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h4",[t._v("Tidak Ditemukan Apapun")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"outOfStockModal",tabindex:"-1","aria-labelledby":"outOfStockModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-md modal-dialog-centered"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header bg-danger justify-content-center"},[n("h5",{staticClass:"modal-title",attrs:{id:"outOfStockModalLabel"}},[t._v("\n            Kehabisan Persediaan\n          ")])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("h6",[t._v("Sayangnya persediaan produk sedang habis")])]),t._v(" "),n("div",{staticClass:"modal-footer justify-content-center"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n            mengerti\n          ")])])])])])}],!1,null,"420dcc98",null);e.default=component.exports;installComponents(component,{ProductRelatedProducts:n(2376).default})}}]);