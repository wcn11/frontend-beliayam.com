(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{2291:function(t,e,r){var content=r(2314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("10df4748",content,!0,{sourceMap:!1})},2313:function(t,e,r){"use strict";r(2291)},2314:function(t,e,r){var n=r(22),d=r(142),o=r(2315),c=n(!1),l=d(o);c.push([t.i,".date-payment[data-v-cac2a61e]{font-size:15px}.background-overlay[data-v-cac2a61e]{background:url("+l+");background-repeat:no-repeat;background-position:50%;background-size:contain}.card-body[data-v-cac2a61e]{background-color:hsla(0,0%,100%,.91)}.title-invoice[data-v-cac2a61e]{font-size:calc(75% + 2vh)}.text-label[data-v-cac2a61e]{font-size:calc(75% + 1vh)}.text-label-address[data-v-cac2a61e]{font-weight:700;font-size:15px}.row[data-v-cac2a61e]{padding-right:8px;padding-left:8px}.container-order[data-v-cac2a61e]{padding:20px;border-radius:10px}.text-order-id[data-v-cac2a61e]{font-size:calc(45% + 10px)}.invoice-title h2[data-v-cac2a61e],.invoice-title h3[data-v-cac2a61e]{display:inline-block}.table>tbody>tr>.no-line[data-v-cac2a61e]{border-top:none}.table>thead>tr>.no-line[data-v-cac2a61e]{border-bottom:none}.table>tbody>tr>.thick-line[data-v-cac2a61e]{border-top:2px solid}.not-found-anything[data-v-cac2a61e]{margin-top:20%;margin-bottom:20%}.order-container[data-v-cac2a61e]{margin-top:20px}.badge-success[data-v-cac2a61e],.btn-success[data-v-cac2a61e]{color:#fff;background:unset;background-color:#4fa846}",""]),t.exports=c},2315:function(t,e,r){t.exports=r.p+"img/background.ae74fd5.png"},2370:function(t,e,r){"use strict";r.r(e);var n=r(11),d=r(5),o=(r(42),r(57),r(180)),c=r.n(o),l=r(0);r.n(l).a.locale("id-ID");var _={fetch:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.dispatch("setGlobalModal",!0),r=t.$route.query.trx_id){e.next=5;break}return t.$store.dispatch("setGlobalModal",!1),e.abrupt("return");case 5:return e.next=7,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/order/").concat(r)).then((function(e){t.order=e.data.data,t.$store.dispatch("setGlobalModal",!1)}));case 7:t.$store.dispatch("setGlobalModal",!1);case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{order:{}}},methods:{exportOrderToPDF:function(){var t,e=(t={margin:0,filename:this.order.bill.bill_desc,pagebreak:{mode:["avoid-all"]}},Object(n.a)(t,"filename",this.order.bill.bill_desc),Object(n.a)(t,"image",{type:"png",quality:.98}),Object(n.a)(t,"html2canvas",{dpi:192,letterRendering:!0,windowWidth:1024}),Object(n.a)(t,"jsPDF",{unit:"in",format:"a4",orientation:"portrait"}),t);c()().set(e).from(this.$refs.document).toPdf().save(this.order.bill.bill_desc)},cancelOrder:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("setGlobalModal",!0),e.next=3,t.$axios.put("".concat("https://be-dev.beliayam.com/api/v1","/order/cancel-order"),{user_id:t.$store.state.auth.user._id,order_id:t.order.order_id}).then((function(e){if(console.log(e),e.data.error)return t.$toast.warning(e.data.message),$("#modalConfirmCancelOrder").modal("hide"),void t.$store.dispatch("setGlobalModal",!1);t.$toast.success(e.data.message),$("#modalConfirmCancelOrder").modal("hide"),t.order=e.data.data,t.$store.dispatch("setGlobalModal",!1),window.location.reload()})).catch((function(e){e&&e.response&&e.response.data.error&&(t.$toast.warning(e.response.data.message),t.$store.dispatch("setGlobalModal",!1))}));case 3:t.$store.dispatch("setGlobalModal",!1);case 4:case"end":return e.stop()}}),e)})))()},openModalCancelOrder:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show";$("#modalConfirmCancelOrder").appendTo("body").modal(t)}}},v=_,m=(r(2313),r(17)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-4 beliayam-main-body"},[t.order&&Object.keys(t.order).length>0?r("div",{ref:"document",staticClass:"container card container-order"},[r("div",{attrs:{id:"ui-view","data-select2-id":"ui-view"}},[r("div",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"title-invoice float-left"},[t._v("Faktur")]),t._v(" "),r("div",{staticClass:"float-right"},[r("h3",{staticClass:"text-order-id"},[t._v("Pesanan #"+t._s(t.order.order_id))]),t._v(" "),1===t.order.payment.payment_status_code||0===t.order.payment.payment_status_code?r("span",{staticClass:"text-center badge badge-warning w-100"},[r("i",{staticClass:"fad fa-tasks"}),t._v(" Menunggu Pembayaran")]):t._e(),t._v(" "),2===t.order.payment.payment_status_code?r("div",[t.order.delivery?r("span",{staticClass:"text-center badge badge-success w-100"},[r("i",{staticClass:"fas fa-badge-check"}),t._v(" Pesanan Selesai")]):r("span",{staticClass:"text-center badge badge-success w-100"},[r("i",{staticClass:"fas fa-truck-loading"}),t._v(" Sedang Diproses")])]):t._e(),t._v(" "),t.order.payment.payment_status_code>2?r("div",[t._m(0)]):t._e()])]),t._v(" "),r("div",{staticClass:"background-overlay"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row mb-4"},[r("div",{staticClass:"col-sm-4 mb-5"},[r("h6",{staticClass:"mb-1"},[t._v("Penerima")]),t._v(" "),r("div",[r("strong",[t._v(t._s(t.order.user.name||"Pelanggan Beliayam.com"))])]),t._v(" "),r("div",[t._v(t._s(t.order.user.email||""))]),t._v(" "),r("div",[t._v(t._s(t.order.user.phone||""))])]),t._v(" "),r("div",{staticClass:"col-sm-4 mb-5 text-center"},[r("h6",{staticClass:"mb-1"},[t._v("Pembayaran")]),t._v(" "),r("h6",{staticClass:"font-weight-bold"}),t._v(" "),r("div",[t._v(t._s(t.order.payment.pg_name))]),t._v(" "),"cash"!==t.order.payment.pg_type?r("div",{staticClass:"mt-2"},[r("h4",[t._v(t._s(t.order.response.trx_id))])]):t._e(),t._v(" "),2==t.order.payment.payment_status_code?r("div",[r("div",{staticClass:"text-danger"},[r("span",{attrs:{cllass:"badge badge-pill badge-success date-payment"}},[t._v(" "+t._s(t._f("formatDate")(t.order.order_status.payment_date))+" ")]),t._v(" "),r("i",{staticClass:"fad fa-badge-check text-info"})])]):r("div",{staticClass:"text-danger"},[r("span",{staticClass:"badge badge-pill badge-danger date-payment"},[t._v(" "+t._s(t._f("formatDate")(t.order.bill.bill_date)))])])]),t._v(" "),r("div",{staticClass:"col-sm-4 mb-5 float-right text-right"},[r("h6",{staticClass:"mb-1"},[t._v("Dikirim Ke")]),t._v(" "),r("div",[t.order.shipping_address.label?r("span",[t._v("("+t._s(t.order.shipping_address.label)+")")]):t._e(),t._v("\n                    "+t._s(t.order.shipping_address.address1)+"\n                  ")]),t._v(" "),r("div",[t._v(t._s(t.order.shipping_address.sub_district.name))]),t._v(" "),r("div",[t._v(t._s(t.order.shipping_address.district.name))]),t._v(" "),r("div",[t._v(t._s(t.order.shipping_address.city.name))]),t._v(" "),r("div",[t._v(t._s(t.order.shipping_address.state.name))]),t._v(" "),t.order.shipping_address.postcode?r("div",[t._v("\n                    "+t._s(t.order.shipping_address.postcode)+"\n                  ")]):t._e(),t._v(" "),r("div",[t.order.shipping_address.details?r("strong",[t._v("("+t._s(t.order.shipping_address.details)+")")]):t._e()])])]),t._v(" "),r("div",{staticClass:"table-responsive-xl"},[r("table",{staticClass:"table table-striped w-100"},[t._m(1),t._v(" "),t.order.bill?r("tbody",[t._l(t.order.bill.bill_items,(function(e,n){return r("tr",{key:e._id,staticClass:"text-nowrap"},[r("td",{staticClass:"text-center"},[t._v(t._s(n+1))]),t._v(" "),r("td",{staticClass:"text-left"},[t._v(t._s(e.product.name))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("formatMoney")(e.product.price))+"\n                      ")]),t._v(" "),r("td",{staticClass:"text-left"},[t._v(t._s(e.details.quantity))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("formatMoney")(e.product.price*e.details.quantity))+"\n                      ")])])})),t._v(" "),r("tr",{staticClass:"text-nowrap"},[r("td",{attrs:{colspan:"3"}}),t._v(" "),t._m(2),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("formatMoney")(t.order.sub_total_product))+"\n                      ")])]),t._v(" "),r("tr",{staticClass:"text-nowrap"},[r("td",{attrs:{colspan:"3"}}),t._v(" "),t._m(3),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("formatMoney")(t.order.sub_total_charges))+"\n                      ")])]),t._v(" "),r("tr",{staticClass:"text-nowrap"},[r("td",{attrs:{colspan:"3"}}),t._v(" "),t._m(4),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        -"+t._s(t._f("formatMoney")(t.order.sub_total_voucher))+"\n                      ")])]),t._v(" "),r("tr",{staticClass:"text-nowrap"},[r("td",{attrs:{colspan:"3"}}),t._v(" "),t._m(5),t._v(" "),r("td",{staticClass:"text-center"},[r("strong",[t._v(t._s(t._f("formatMoney")(t.order.grand_total)))])])])],2):t._e()])])])])])])])]):t._e(),t._v(" "),r("div",{staticClass:"container card container-order mt-4"},[t.order&&Object.keys(t.order).length>0?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"invoice-title text-center"},[r("NuxtLink",{staticClass:"btn btn-secondary m-1",attrs:{to:"/akun/pesanan-saya"}},[r("i",{staticClass:"fas fa-chevron-circle-left"}),t._v(" Pesanan Lainnya\n          ")]),t._v(" "),t.order.payment.payment_status_code<2?r("button",{staticClass:"btn btn-danger m-1",on:{click:function(e){return t.openModalCancelOrder()}}},[r("i",{staticClass:"fas fa-ban"}),t._v(" Batalkan Pesanan\n          ")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-success m-1",on:{click:function(e){return t.exportOrderToPDF()}}},[r("i",{staticClass:"fas fa-file-download"}),t._v(" Unduh PDF\n          ")])],1)])]):t._e()]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"modalConfirmCancelOrder","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"modalConfirmCancelOrderLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered"},[r("div",{staticClass:"modal-content"},[t._m(6),t._v(" "),t._m(7),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n            tutup\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.cancelOrder()}}},[t._v("\n            Ya, Batalkan pesanan\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"text-center badge badge-danger w-100"},[r("i",{staticClass:"fas fa-ban"}),t._v(" Pesanan Dibatalkan")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"text-nowrap"},[r("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),r("th",[t._v("Item")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Harga")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Kuantitas")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Total")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"left"},[r("strong",[t._v("Subtotal")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"text-left"},[r("strong",[t._v("Biaya")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"text-left"},[r("strong",[t._v("Diskon")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"text-left"},[r("strong",[t._v("TOTAL")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header bg-danger"},[r("h5",{staticClass:"modal-title",attrs:{id:"modalConfirmCancelOrderLabel"}},[t._v("\n            Batalkan Pesanan\n          ")]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-body"},[r("h6",[t._v("Apakah anda yakin membatalkan pesanan ?")])])}],!1,null,"cac2a61e",null);e.default=component.exports}}]);