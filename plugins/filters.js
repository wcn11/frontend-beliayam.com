import Vue from 'vue';

Vue.filter('formatDate', (date) => moment(date).format("DD-MM-yyyy, HH:mm"));

Vue.filter('formatMoney', (val) => {
    let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
  
      return formatter.format(val);
});