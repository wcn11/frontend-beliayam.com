(window.webpackJsonp=window.webpackJsonp||[]).push([[43,33],{2281:function(t,e,n){var content=n(2304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2fff19e0",content,!0,{sourceMap:!1})},2303:function(t,e,n){"use strict";n(2281)},2304:function(t,e,n){var r=n(23)(!1);r.push([t.i,".not-found-anything[data-v-26a408ba]{margin-top:20%;margin-bottom:20%}.order-container[data-v-26a408ba]{margin-top:20px}",""]),t.exports=r},2339:function(t,e,n){var content=n(2409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("321cf454",content,!0,{sourceMap:!1})},2358:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(41),n(54),n(0)),d=n.n(o);d.a.locale("id-ID");var l={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.query.trx_id){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$axios.get("".concat("https://be-dev.beliayam.com/api/v1","/order/").concat(n)).then((function(e){t.order=e.data.data}));case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{order:{}}},methods:{cancelOrder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.put("".concat("https://be-dev.beliayam.com/api/v1","/order/cancel-order"),{user_id:t.$store.state.auth.user._id,order_id:t.order.order_id}).then((function(e){if(console.log(e),e.data.error)return t.$toast.warning(e.data.message),void $("#modalConfirmCancelOrder").modal("hide");t.$toast.success(e.data.message),$("#modalConfirmCancelOrder").modal("hide"),t.order=e.data.data,window.location.reload()})).catch((function(e){e&&e.response&&e.response.data.error&&t.$toast.warning(e.response.data.message)}));case 2:case"end":return e.stop()}}),e)})))()},openModalCancelOrder:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show";$("#modalConfirmCancelOrder").appendTo("body").modal(t)}},filters:{formatDate:function(t){return d()(t).format("dddd, Do MMMM YYYY HH:mm")},formatMoney:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}},c=l,_=(n(2303),n(16)),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-4 beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t.order&&Object.keys(t.order).length>0?n("div",{staticClass:"col-md-12"},[n("section",{staticClass:"\n            bg-white\n            beliayam-main-body\n            rounded\n            shadow-sm\n            overflow-hidden\n          "},[n("div",{staticClass:"container-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"beliayam-status"},[n("div",{staticClass:"\n                      p-3\n                      status-order\n                      bg-white\n                      border-bottom\n                      d-flex\n                      align-items-center\n                    "},[n("p",{staticClass:"m-0"},[n("i",{staticClass:"fad fa-calendar-alt"}),t._v("\n                      "+t._s(t._f("formatDate")(t.order.bill&&t.order.bill.bill_date))+"\n                    ")]),t._v(" "),n("a",{staticClass:"text-danger ml-auto text-decoration-none",attrs:{href:"/akun/pesanan-saya"}},[t._v("Kembali")])]),t._v(" "),n("div",{staticClass:"p-3"},[n("h6",{staticClass:"font-weight-bold"},[t._v("\n                      Order ID: #"+t._s(t.order.order_id)+"\n                    ")])]),t._v(" "),t.order.payment?n("div",{staticClass:"p-3 border-bottom"},[1===t.order.payment.payment_status_code||0===t.order.payment.payment_status_code?n("div",[n("h6",{staticClass:"font-weight-bold"},[t._v("Order Status:")]),t._v(" "),n("div",[t._m(0),t._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.openModalCancelOrder()}}},[t._v("\n                          batalkan pesanan\n                        ")]),t._v(" "),"cash"!==t.order.payment.pg_type?n("div",{staticClass:"font-weight-light mt-3 mb-3"},[n("div",[n("p",{staticClass:"m-0"},[t._v("\n                              Kode Virtual "+t._s(t.order.payment.payment_channel)+"\n                            ")]),t._v(" "),n("h5",{staticClass:"mt-2"},[t._v(t._s(t.order.response.trx_id))])]),t._v(" "),n("a",{staticClass:"btn btn-outline-danger mt-2",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar\n                            sekarang")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("p",{staticClass:"m-0"},[t._v("\n                              Batas Akhir Pembayaran\n                            ")]),t._v(" "),n("h6",{staticClass:"mt-2"},[t._v(t._s(t._f("formatDate")(t.order.bill.bill_expired)))])])]):t._e()])]):2===t.order.payment.payment_status_code?n("div",[n("h6",{staticClass:"font-weight-bold"},[t._v("Order Status")]),t._v(" "),n("div",[n("h5",[n("span",{staticClass:"badge badge-success"},[t._v(t._s(t.order.order_status.description))])]),t._v(" "),n("div",[n("p",{staticClass:"m-0"},[t._v("\n                            "+t._s(t.order.payment.payment_channel)+"\n                          ")]),t._v(" "),n("h5",{staticClass:"mt-2"},[t._v("#"+t._s(t.order.response.trx_id))])])])]):n("div",[n("h6",{staticClass:"font-weight-bold"},[t._v("Order Status")]),t._v(" "),n("div",[n("h5",[n("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.order.order_status.description))])])])])]):t._e(),t._v(" "),t.order.shipping_address?n("div",{staticClass:"p-3 border-bottom bg-white"},[n("h6",{staticClass:"font-weight-bold"},[t._v("Dikirim ke alamat:")]),t._v(" "),n("div",[t._v(t._s(t.order.shipping_address.phone))]),t._v(" "),n("p",{staticClass:"m-0 small"},[t._v("\n                      "+t._s(t.order.shipping_address.address1)+",\n                      "+t._s(t.order.shipping_address.sub_district.name)+",\n                      "+t._s(t.order.shipping_address.district.name)+", ("+t._s(t.order.shipping_address.details)+")\n                    ")]),t._v(" "),n("div",[t._v("\n                      "+t._s(t.order.shipping_address.city.name)+",\n                      "+t._s(t.order.shipping_address.state.name)+"\n                      "+t._s(t.order.shipping_address.postcode)+"\n                    ")])]):t._e(),t._v(" "),n("div",{staticClass:"p-3 border-bottom"},[n("h6",{staticClass:"font-weight-bold"},[t._v("Pesanan")]),t._v(" "),t.order.bill&&t.order.bill.bill_items?n("div",{staticClass:"order-container"},t._l(t.order.bill.bill_items,(function(e){return n("div",{key:e._id},[n("div",{staticClass:"justify-content-between d-flex"},[n("h6",{staticClass:"font-weight-bold"},[t._v("\n                            "+t._s(e.product.name)+"\n                          ")]),t._v(" "),e.details.quantity?n("span",{},[t._v("Kuantitas: "+t._s(e.details.quantity)+"\n                          ")]):t._e(),t._v(" "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t._f("formatMoney")(e.product.price)))])]),t._v(" "),n("span",{staticClass:"font-weight-light"},[t._v("Berat: "+t._s(e.product.weight)+" Kilogram\n                        ")]),t._v(" "),n("br"),t._v(" "),e.details.note?n("span",{staticClass:"small text-success font-weight-bold"},[t._v("Catatan: "+t._s(e.details.note)+"\n                        ")]):t._e()])})),0):t._e()]),t._v(" "),t.order?n("div",{staticClass:"p-3 bg-white"},[n("div",{staticClass:"d-flex align-items-center mb-2"},[n("h6",{staticClass:"mb-1"},[t._v("Subtotal Produk")]),t._v(" "),n("h6",{staticClass:"ml-auto mb-1"},[t._v("\n                        "+t._s(t._f("formatMoney")(t.order.sub_total_product))+"\n                      ")])]),t._v(" "),t.order&&t.order.charges&&t.order.charges.length>0?n("div",t._l(t.order.charges,(function(e){return n("div",{key:e._id,staticClass:"d-flex align-items-center mb-2"},[n("h6",{staticClass:"mb-1"},[t._v(t._s(e.chargeName))]),t._v(" "),n("h6",{staticClass:"ml-auto mb-1"},[t._v("\n                          "+t._s(t._f("formatMoney")(e.chargeValue))+"\n                        ")])])})),0):n("div",{staticClass:"d-flex align-items-center mb-2"},[n("h6",{staticClass:"mb-1"},[t._v("Biaya")]),t._v(" "),n("h6",{staticClass:"ml-auto mb-1"},[t._v("\n                        "+t._s(t._f("formatMoney")(0))+"\n                      ")])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-2"},[n("h6",{staticClass:"mb-1"},[t._v("Diskon Voucher")]),t._v(" "),n("h6",{staticClass:"ml-auto mb-1"},[t._v("\n                        -"+t._s(t._f("formatMoney")(t.order.sub_total_voucher))+"\n                      ")])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-2"},[n("h5",{staticClass:"font-weight-bold mb-1"},[t._v("Total Pembayaran")]),t._v(" "),n("h5",{staticClass:"font-weight-bold ml-auto mb-1"},[t._v("\n                        "+t._s(t._f("formatMoney")(t.order.grand_total))+"\n                      ")])]),t._v(" "),t._m(1)]):t._e()])])])])])]):n("div",{staticClass:"not-found-anything col-md-12"},[t._m(2)])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modalConfirmCancelOrder","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"modalConfirmCancelOrderLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n            tutup\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.cancelOrder()}}},[t._v("\n            Ya, Batalkan pesanan\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("span",{staticClass:"badge badge-warning"},[t._v("Menunggu Pembayaran")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"m-0 small text-muted"},[t._v("\n                      Kamu dapat memeriksa detail pesanan di sini,"),n("br"),t._v("Terima\n                      kasih.\n                    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h4",[t._v("Pesanan yang kamu cari telah diubah atau tidak ditemukan")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header bg-danger"},[n("h5",{staticClass:"modal-title",attrs:{id:"modalConfirmCancelOrderLabel"}},[t._v("\n            Batalkan Pesanan\n          ")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-body"},[n("h6",[t._v("Apakah anda yakin membatalkan pesanan ?")])])}],!1,null,"26a408ba",null);e.default=component.exports},2408:function(t,e,n){"use strict";n(2339)},2409:function(t,e,n){var r=n(23)(!1);r.push([t.i,".margin-bottom-10[data-v-1bfe5b48]{margin-bottom:10px}",""]),t.exports=r},2454:function(t,e,n){"use strict";n.r(e);var r={name:"PagesAkunPesananSayaOrder",head:{title:"Pesanan Saya",htmlAttrs:{lang:"id"}},mounted:function(){document.getElementById("page-account-order-details").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-account-order-details").classList.add("animate__fadeOutLeft")}},o=(n(2408),n(16)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate__animated",attrs:{id:"page-account-order-details"}},[e("ProfileOrderDetails")],1)}),[],!1,null,"1bfe5b48",null);e.default=component.exports;installComponents(component,{ProfileOrderDetails:n(2358).default})}}]);