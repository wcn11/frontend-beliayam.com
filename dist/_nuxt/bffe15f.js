(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{2290:function(t,e,n){var content=n(2313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("081ceb86",content,!0,{sourceMap:!1})},2312:function(t,e,n){"use strict";n(2290)},2313:function(t,e,n){var r=n(22)(!1);r.push([t.i,".text-label[data-v-262dd43e]{font-size:calc(40% + 12px)}.text-label-address[data-v-262dd43e]{font-weight:700;font-size:15px}.row[data-v-262dd43e]{padding-right:8px;padding-left:8px}.container-order[data-v-262dd43e]{padding:20px;border-radius:10px}.text-order-id[data-v-262dd43e]{font-size:20px}.invoice-title h2[data-v-262dd43e],.invoice-title h3[data-v-262dd43e]{display:inline-block}.table>tbody>tr>.no-line[data-v-262dd43e]{border-top:none}.table>thead>tr>.no-line[data-v-262dd43e]{border-bottom:none}.table>tbody>tr>.thick-line[data-v-262dd43e]{border-top:2px solid}.not-found-anything[data-v-262dd43e]{margin-top:20%;margin-bottom:20%}.order-container[data-v-262dd43e]{margin-top:20px}.badge-success[data-v-262dd43e],.btn-success[data-v-262dd43e]{color:#fff;background:unset;background-color:#4fa846}",""]),t.exports=r},2369:function(t,e,n){"use strict";n.r(e);var r=n(11),d=n(5),o=(n(42),n(56),n(31),n(75),n(15),n(86),n(180)),l=n.n(o),c=n(0),_=n.n(c);_.a.locale("id-ID");var v={fetch:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.query.trx_id){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$axios.get("".concat("https://api-v2.beliayam.com/api/v1","/order/").concat(n)).then((function(e){t.order=e.data.data}));case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{order:{}}},methods:{exportOrderToPDF:function(){var t;l()(this.$refs.document,(t={margin:0,filename:"document.pdf",pagebreak:{mode:["avoid-all"]}},Object(r.a)(t,"filename",this.order.bill.bill_desc),Object(r.a)(t,"image",{type:"jpeg",quality:.98}),Object(r.a)(t,"html2canvas",{dpi:192,letterRendering:!0}),Object(r.a)(t,"jsPDF",{unit:"in",format:"letter",orientation:"portrait"}),t))},cancelOrder:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.put("".concat("https://api-v2.beliayam.com/api/v1","/order/cancel-order"),{user_id:t.$store.state.auth.user._id,order_id:t.order.order_id}).then((function(e){if(console.log(e),e.data.error)return t.$toast.warning(e.data.message),void $("#modalConfirmCancelOrder").modal("hide");t.$toast.success(e.data.message),$("#modalConfirmCancelOrder").modal("hide"),t.order=e.data.data,window.location.reload()})).catch((function(e){e&&e.response&&e.response.data.error&&t.$toast.warning(e.response.data.message)}));case 2:case"end":return e.stop()}}),e)})))()},openModalCancelOrder:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show";$("#modalConfirmCancelOrder").appendTo("body").modal(t)}},filters:{formatDate:function(t){return _()(t).format("dddd, Do MMMM YYYY HH:mm")},formatMoney:function(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")}}},m=v,f=(n(2312),n(17)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{ref:"document",staticClass:"container card container-order"},[t.order&&Object.keys(t.order).length>0?n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"invoice-title justify-content-between"},[n("h2",[t._v("Faktur")]),t._v(" "),n("div",{staticClass:"float-right"},[n("h3",{staticClass:"text-order-id"},[t._v("Pesanan #"+t._s(t.order.order_id))]),t._v(" "),n("br"),t._v(" "),1===t.order.payment.payment_status_code||0===t.order.payment.payment_status_code?n("span",{staticClass:"text-center badge badge-warning w-100"},[n("i",{staticClass:"fad fa-tasks"}),t._v(" Menunggu Pembayaran")]):t._e(),t._v(" "),2===t.order.payment.payment_status_code?n("div",[t.order.delivery?n("span",{staticClass:"text-center badge badge-success w-100"},[n("i",{staticClass:"fas fa-badge-check"}),t._v(" Pesanan Selesai")]):n("span",{staticClass:"text-center badge badge-success w-100"},[n("i",{staticClass:"fas fa-truck-loading"}),t._v(" Sedang Diproses")])]):t._e(),t._v(" "),t.order.payment.payment_status_code>2?n("div",[t._m(0)]):t._e()])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row d-flex justify-content-between mt-4"},[n("div",{},[n("address",[n("strong",{staticClass:"text-label"},[t._v("Ditagih Ke:")]),n("br"),t._v("\n                "+t._s(t.order.user.name||"Pelanggan Beliayam.com")),n("br"),t._v("\n                "+t._s(t.order.user.email||"")),n("br"),t._v("\n                "+t._s(t.order.user.phone||"")),n("br")]),t._v(" "),n("div",[n("strong",{staticClass:"text-label"},[t._v("Penerima:")]),n("br"),t._v("\n                "+t._s(t.order.shipping_address.receiver_name||"")),n("br"),t._v("\n                "+t._s(t.order.shipping_address.phone||"")),n("br")])]),t._v(" "),n("div",{staticClass:"text-right"},[n("address",[n("strong",{staticClass:"text-label"},[t._v("Dikirim Ke:")]),n("br"),t._v(" "),n("span",{staticClass:"text-label-address"},[t._v(t._s(t.order.shipping_address.label||""))]),n("br"),t._v("\n                "+t._s(t.order.shipping_address.address1||"")),n("br"),t._v("\n                "+t._s(t.order.shipping_address.sub_district.name)+",\n                "+t._s(t.order.shipping_address.district.name)),n("br"),t._v("\n                "+t._s(t.order.shipping_address.city.name)+","),n("br"),t._v("\n                "+t._s(t.order.shipping_address.state.name)),n("br"),t._v(" "),t.order.shipping_address.postcode?n("span",[t._v(t._s(t.order.shipping_address.postcode)+" ")]):t._e(),n("br"),t._v(" "),t.order.shipping_address.details?n("span",{staticClass:"text-muted"},[t._v("("+t._s(t.order.shipping_address.details)+")")]):t._e()])])]),t._v(" "),n("div",{staticClass:"row justify-content-between mt-5"},[n("div",{},[n("address",[n("strong",{staticClass:"text-label"},[t._v("Metode Pembayaran:")]),n("br"),t._v("\n                "+t._s(t.order.payment.pg_name)),n("br"),t._v(" "),"cash"!==t.order.payment.pg_type?n("h6",{staticClass:"font-weight-bold"},[t._v("\n                  "+t._s(t.order.response.trx_id)+"\n                ")]):t._e()])]),t._v(" "),n("div",{staticClass:"text-right"},[n("address",[n("strong",{staticClass:"text-label"},[t._v("Tanggal Pemesanan:")]),n("br"),t._v("\n                "+t._s(t._f("formatDate")(t.order.bill.bill_date))),n("br"),n("br")])])])])]):t._e(),t._v(" "),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"panel panel-default"},[t._m(1),t._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-condensed"},[t._m(2),t._v(" "),t.order.bill?n("tbody",[t._l(t.order.bill.bill_items,(function(e){return n("tr",{key:e._id},[n("td",[t._v(t._s(e.product.name))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v("\n                        Rp "+t._s(t._f("formatMoney")(e.product.price))+"\n                      ")]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.details.quantity))]),t._v(" "),n("td",{staticClass:"text-right"},[t._v("\n                        Rp\n                        "+t._s(t._f("formatMoney")(e.product.price*e.details.quantity))+"\n                      ")])])})),t._v(" "),n("tr",[n("td",{staticClass:"thick-line"}),t._v(" "),n("td",{staticClass:"thick-line"}),t._v(" "),t._m(3),t._v(" "),n("td",{staticClass:"thick-line text-right"},[t._v("\n                        Rp "+t._s(t._f("formatMoney")(t.order.sub_total_product))+"\n                      ")])]),t._v(" "),n("tr",[n("td",{staticClass:"no-line"}),t._v(" "),n("td",{staticClass:"no-line"}),t._v(" "),t._m(4),t._v(" "),n("td",{staticClass:"no-line text-right"},[t._v("\n                        Rp "+t._s(t._f("formatMoney")(t.order.sub_total_charges))+"\n                      ")])]),t._v(" "),n("tr",[n("td",{staticClass:"no-line"}),t._v(" "),n("td",{staticClass:"no-line"}),t._v(" "),t._m(5),t._v(" "),n("td",{staticClass:"no-line text-right"},[t._v("\n                        -Rp "+t._s(t._f("formatMoney")(t.order.sub_total_voucher))+"\n                      ")])]),t._v(" "),n("tr",[n("td",{staticClass:"no-line"}),t._v(" "),n("td",{staticClass:"no-line"}),t._v(" "),t._m(6),t._v(" "),n("td",{staticClass:"no-line text-right font-weight-bold"},[t._v("\n                        Rp "+t._s(t._f("formatMoney")(t.order.grand_total))+"\n                      ")])])],2):t._e()])])])])])])]),t._v(" "),n("div",{staticClass:"container card container-order"},[t.order&&Object.keys(t.order).length>0?n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"invoice-title text-center"},[n("NuxtLink",{staticClass:"btn btn-secondary",attrs:{to:"/akun/pesanan-saya"}},[n("i",{staticClass:"fas fa-chevron-circle-left"}),t._v(" Pesanan Lainnya\n            ")]),t._v(" "),1===t.order.payment.payment_status_code||2===t.order.payment.payment_status_code?n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.openModalCancelOrder()}}},[n("i",{staticClass:"fas fa-ban"}),t._v(" Batalkan Pesanan\n            ")]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-success",on:{click:function(e){return t.exportOrderToPDF()}}},[n("i",{staticClass:"fas fa-file-download"}),t._v(" Unduh PDF\n            ")])],1)])]):t._e()]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modalConfirmCancelOrder","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"modalConfirmCancelOrderLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t._m(8),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n            tutup\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.cancelOrder()}}},[t._v("\n            Ya, Batalkan pesanan\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-center badge badge-danger w-100"},[n("i",{staticClass:"fas fa-ban"}),t._v(" Pesanan Dibatalkan")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[n("strong",[t._v("Ringkasan Pesanan")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[n("strong",[t._v("Produk")])]),t._v(" "),n("td",{staticClass:"text-center"},[n("strong",[t._v("Harga")])]),t._v(" "),n("td",{staticClass:"text-center"},[n("strong",[t._v("Kuantitas")])]),t._v(" "),n("td",{staticClass:"text-right"},[n("strong",[t._v("Total")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"thick-line text-center"},[n("strong",[t._v("Subtotal Produk")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"no-line text-center"},[n("strong",[t._v("Biaya Tambahan")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"no-line text-center"},[n("strong",[t._v("Voucher")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"no-line text-center"},[n("strong",[t._v("Total")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header bg-danger"},[n("h5",{staticClass:"modal-title",attrs:{id:"modalConfirmCancelOrderLabel"}},[t._v("\n            Batalkan Pesanan\n          ")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-body"},[n("h6",[t._v("Apakah anda yakin membatalkan pesanan ?")])])}],!1,null,"262dd43e",null);e.default=component.exports}}]);