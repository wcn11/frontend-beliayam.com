import Vue from 'vue';

import moment from "moment";

moment.locale("id-ID");

Vue.filter('formatDate', (date) => moment(date).format("DD-MM-yyyy, HH:mm"));

Vue.filter('formatMoney', (val) => {
  if (val) {

    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
});

Vue.filter('setSquareDecimal', (val) => {
  if (val) {

    return val.toFixed(0);
  }
});