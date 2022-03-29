import Vue from 'vue';

import moment from "moment";

moment.locale("id-ID");

Vue.filter('formatDate', (date) => moment(date).format("dddd, Do MMMM yyyy HH:mm"));

Vue.filter('formatMoney', (val) => {
  if (val) {

    return "Rp " + val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
  return "0"
});

Vue.filter('setSquareDecimal', (val) => {
  if (val) {

    return val.toFixed(0);
  }
});