(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{2289:function(e,t,n){var content=n(2311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("79dbf4d0",content,!0,{sourceMap:!1})},2310:function(e,t,n){"use strict";n(2289)},2311:function(e,t,n){var r=n(22)(!1);r.push([e.i,".bg-success-order[data-v-b0d98e54]{background-color:#ce0000}.va-container[data-v-b0d98e54]{border:3px solid #ce0000;border-radius:6px}",""]),e.exports=r},2369:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(42),n(57),n(0));n.n(o).a.locale("id-ID");var c={name:"PaymentSuccess",fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.query,n.merchant_id,r=n.bill_no,n.trx_id,n.bill_reff,n.bill_total,n.payment_reff,n.payment_date,n.bank_user_name,n.status,n.signature,console.log(r),o=r,t.next=5,e.$axios.get("".concat("https://main-v1.beliayam.com/api/v1","/order/").concat(o)).then((function(t){e.order=t.data.data,e.$toast.success("Test development check"),console.log(t)})).catch((function(e){console.error(e)}));case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{order:{}}}},d=(n(2310),n(17)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"row d-flex justify-content-center bg-success-order"},[n("div",{staticClass:"col-md-6"},[e._m(1),e._v(" "),e.order&&e.order.bill?n("div",{staticClass:"bg-white rounded p-3 m-5 text-center"},["cash"!==e.order.payment.pg_type?n("div"):e._e(),e._v(" "),n("h6",{staticClass:"font-weight-bold mb-2"},[e._v("Batas Akhir Pembayaran")]),e._v(" "),n("h5",[e._v("\n          "+e._s(e._f("formatDate")(e.order.bill.bill_expired))+"\n        ")]),e._v(" "),n("div",[n("div",["emoney"===e.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:e.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),e._v(" Bayar Dengan\n                "+e._s(e.order.payment.pg_name))])]):e._e(),e._v(" "),"ibanking"===e.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:e.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),e._v(" Bayar Dengan\n                "+e._s(e.order.payment.pg_name))])]):e._e(),e._v(" "),"jumapp"===e.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:e.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),e._v(" Bayar Dengan\n                "+e._s(e.order.payment.pg_name))])]):e._e(),e._v(" "),"qris"===e.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:e.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),e._v(" Bayar Dengan\n                "+e._s(e.order.payment.pg_name))])]):e._e(),e._v(" "),"retail"===e.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:e.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),e._v(" Bayar Dengan\n                "+e._s(e.order.payment.pg_name))])]):e._e(),e._v(" "),"va"===e.order.payment.pg_type?n("div",{staticClass:"p-2 va-container"},[n("span",[e._v("Kode "+e._s(e.order.payment.pg_name)+" Anda")]),e._v(" "),n("h4",[e._v(e._s(e.order.response.trx_id))]),e._v(" "),n("a",{staticClass:"btn btn-danger",attrs:{href:e.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),e._v(" Bayar Dengan\n                "+e._s(e.order.payment.pg_name))])]):e._e()])]),e._v(" "),n("p",{staticClass:"small text-mutedm mt-2"},[e._v("\n          Pesanan anda akan disiapkan dan akan segera datang\n        ")]),e._v(" "),n("div",[n("h6",[e._v("Total Pembayaran")]),e._v(" "),n("h5",[e._v(e._s(e._f("formatMoney")(e.order.bill.bill_total)))])]),e._v(" "),n("NuxtLink",{staticClass:"btn rounded btn-warning btn-lg btn-block",attrs:{to:"/akun/pesanan-saya?trx_id="+e.order.order_id}},[e._v("Lihat Pesanan Saya")]),e._v(" "),e._m(2)],1):e._e()])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container text-center"},[e._v("\n      🎉 Pesanan Anda Sedang Kami Proses 🎉\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-5 text-center"},[n("i",{staticClass:"fad fa-check-circle display-1 text-warning"}),e._v(" "),n("h1",{staticClass:"text-white font-weight-bold"},[e._v("\n          Pesanan Berhasil Dilakukan 🎉\n        ")]),e._v(" "),n("p",{staticClass:"text-white"},[e._v("\n          Cek status pemesanan anda di\n          "),n("a",{staticClass:"font-weight-bold text-decoration-none text-white",attrs:{href:"#"}},[e._v("Pesanan Saya")]),e._v("\n          untuk informasi lebih lanjut.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-2"},[n("p",{staticClass:"text-muted font-italic"},[e._v("\n            Muat ulang halaman jika status pembayaran belum berubah\n          ")])])}],!1,null,"b0d98e54",null);t.default=component.exports}}]);