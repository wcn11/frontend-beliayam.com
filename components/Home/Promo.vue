<template>
  
              <div class="py-3 beliayam-promos">
                <div class="d-flex align-items-center mb-3">
                  <h5 class="m-0">Promo untukmu...</h5>
                  <a
                    href="/promo"
                    class="ml-auto btn btn-outline-success btn-sm"
                    >promo lainnya ...</a
                  >
                </div>
                <div class="promo-slider pb-0 mb-0">
                  <div class="beliayam-slider-item mx-2">
                    <NuxtLink to="/promo/broiler-10-11-kg"
                      ><img
                        :src="`${this.$config.baseURL}/img/promo1.jpg`"
                        class="img-fluid mx-auto rounded"
                        alt="Responsive image"
                    /></NuxtLink>
                  </div>
                  <div class="beliayam-slider-item mx-2">
                    <NuxtLink to="/promo/broiler-10-11-kg"
                      ><img
                        :src="`${this.$config.baseURL}/img/promo2.jpg`"
                        class="img-fluid mx-auto rounded"
                        alt="Responsive image"
                    /></NuxtLink>
                  </div>
                  <div class="beliayam-slider-item mx-2">
                    <NuxtLink to="/promo/broiler-10-11-kg"
                      ><img
                        :src="`${this.$config.baseURL}/img/promo3.jpg`"
                        class="img-fluid mx-auto rounded"
                        alt="Responsive image"
                    /></NuxtLink>
                  </div>
                  <div class="beliayam-slider-item mx-2">
                    <NuxtLink to="/promo/broiler-10-11-kg"
                      ><img
                        :src="`${this.$config.baseURL}/img/promo4.jpg`"
                        class="img-fluid mx-auto rounded"
                        alt="Responsive image"
                    /></NuxtLink>
                  </div>
                  <div class="beliayam-slider-item mx-2">
                    <NuxtLink to="/promo/broiler-10-11-kg"
                      ><img
                        :src="`${this.$config.baseURL}/img/promo2.jpg`"
                        class="img-fluid mx-auto rounded"
                        alt="Responsive image"
                    /></NuxtLink>
                  </div>
                  <div class="beliayam-slider-item mx-2">
                    <NuxtLink to="/promo/broiler-10-11-kg"
                      ><img
                        :src="`${this.$config.baseURL}/img/promo3.jpg`"
                        class="img-fluid mx-auto rounded"
                        alt="Responsive image"
                    /></NuxtLink>
                  </div>
                </div>
              </div>
</template>

<script>
export default {
    name: "HomePromo"
}
</script>

<style>

</style>