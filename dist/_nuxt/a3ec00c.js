(window.webpackJsonp=window.webpackJsonp||[]).push([[61,30],{2288:function(t,e,n){var content=n(2309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("65bf137c",content,!0,{sourceMap:!1})},2308:function(t,e,n){"use strict";n(2288)},2309:function(t,e,n){var r=n(22)(!1);r.push([t.i,".bg-success-order[data-v-26546ac8]{background-color:#ce0000}.va-container[data-v-26546ac8]{border:3px solid #ce0000;border-radius:6px}",""]),t.exports=r},2348:function(t,e,n){var content=n(2419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0a68d024",content,!0,{sourceMap:!1})},2366:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(42),n(56),n(31),n(75),n(15),n(86),n(0)),o=n.n(c);o.a.locale("id-ID");var l={name:"PaymentSuccess",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query,n.merchant_id,r=n.bill_no,n.trx_id,n.bill_reff,n.bill_total,n.payment_reff,n.payment_date,n.bank_user_name,n.status,n.signature,console.log(r),c=r,e.next=5,t.$axios.get("".concat("https://api-v2.beliayam.com/api/v1","/order/").concat(c)).then((function(e){t.order=e.data.data,t.$toast.success("Test development check"),console.log(e)})).catch((function(t){console.error(t)}));case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{order:{}}},filters:{formatDate:function(t){return o()(t).format("dddd, Do MMMM YYYY HH:mm")},formatMoney:function(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")}}},d=(n(2308),n(17)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"row d-flex justify-content-center bg-success-order"},[n("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),t.order&&t.order.bill?n("div",{staticClass:"bg-white rounded p-3 m-5 text-center"},["cash"!==t.order.payment.pg_type?n("div"):t._e(),t._v(" "),n("h6",{staticClass:"font-weight-bold mb-2"},[t._v("Batas Akhir Pembayaran")]),t._v(" "),n("h5",[t._v("\n          "+t._s(t._f("formatDate")(t.order.bill.bill_expired))+"\n        ")]),t._v(" "),n("div",[n("div",["emoney"===t.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar Dengan\n                "+t._s(t.order.payment.pg_name))])]):t._e(),t._v(" "),"ibanking"===t.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar Dengan\n                "+t._s(t.order.payment.pg_name))])]):t._e(),t._v(" "),"jumapp"===t.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar Dengan\n                "+t._s(t.order.payment.pg_name))])]):t._e(),t._v(" "),"qris"===t.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar Dengan\n                "+t._s(t.order.payment.pg_name))])]):t._e(),t._v(" "),"retail"===t.order.payment.pg_type?n("div",{staticClass:"p-2"},[n("a",{staticClass:"btn btn-danger",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar Dengan\n                "+t._s(t.order.payment.pg_name))])]):t._e(),t._v(" "),"va"===t.order.payment.pg_type?n("div",{staticClass:"p-2 va-container"},[n("span",[t._v("Kode "+t._s(t.order.payment.pg_name)+" Anda")]),t._v(" "),n("h4",[t._v(t._s(t.order.response.trx_id))]),t._v(" "),n("a",{staticClass:"btn btn-danger",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" Bayar Dengan\n                "+t._s(t.order.payment.pg_name))])]):t._e()])]),t._v(" "),n("p",{staticClass:"small text-mutedm mt-2"},[t._v("\n          Pesanan anda akan disiapkan dan akan segera datang\n        ")]),t._v(" "),n("div",[n("h6",[t._v("Total Pembayaran")]),t._v(" "),n("h5",[t._v("Rp "+t._s(t._f("formatMoney")(t.order.bill.bill_total)))])]),t._v(" "),n("NuxtLink",{staticClass:"btn rounded btn-warning btn-lg btn-block",attrs:{to:"/akun/pesanan-saya?trx_id="+t.order.order_id}},[t._v("Lihat Pesanan Saya")]),t._v(" "),t._m(2)],1):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container text-center"},[t._v("\n      🎉 Pesanan Anda Sedang Kami Proses 🎉\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5 text-center"},[n("i",{staticClass:"fad fa-check-circle display-1 text-warning"}),t._v(" "),n("h1",{staticClass:"text-white font-weight-bold"},[t._v("\n          Pesanan Berhasil Dilakukan 🎉\n        ")]),t._v(" "),n("p",{staticClass:"text-white"},[t._v("\n          Cek status pemesanan anda di\n          "),n("a",{staticClass:"font-weight-bold text-decoration-none text-white",attrs:{href:"#"}},[t._v("Pesanan Saya")]),t._v("\n          untuk informasi lebih lanjut.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("p",{staticClass:"text-muted font-italic"},[t._v("\n            Muat ulang halaman jika status pembayaran belum berubah\n          ")])])}],!1,null,"26546ac8",null);e.default=component.exports},2418:function(t,e,n){"use strict";n(2348)},2419:function(t,e,n){var r=n(22)(!1);r.push([t.i,".margin-bottom-10[data-v-0ef6298c]{margin-bottom:10px}",""]),t.exports=r},2474:function(t,e,n){"use strict";n.r(e);var r={name:"PagePaymentSukses",head:{title:"Pesanan Berhasil",htmlAttrs:{lang:"en"}},mounted:function(){document.getElementById("page-checkout-success").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-checkout-success").classList.add("animate__fadeOutLeft")}},c=(n(2418),n(17)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate__animated",attrs:{id:"page-checkout-success"}},[e("PaymentSuccess")],1)}),[],!1,null,"0ef6298c",null);e.default=component.exports;installComponents(component,{PaymentSuccess:n(2366).default})}}]);