<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Bantuan</li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body p-5">
                <h2 class="card-title text-center">Bantuan</h2>

                <div class="mt-5">
                  <div class="row">
                    <div class="col-sm-4 mb-3">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            <i class="fab fa-whatsapp-square text-success"></i>
                            WhatsApp
                          </h5>
                          <p class="card-text">
                            WhatsApp Kami Di Nomor Telepon <br />
                            +62 818-0805-1777
                          </p>
                          <a
                            href="https://wa.me/6281808051777"
                            class="btn btn-danger w-100"
                            >Chat</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4 mb-3">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            <i class="fad fa-phone-office"></i> Telepon Kami
                          </h5>
                          <p class="card-text">
                            WhatsApp Kami Di Nomor Telepon<br />
                            +62 818-0805-1777
                          </p>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-danger w-100"
                            >Telepon</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4 mb-3">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            <i class="fas fa-envelope"></i> Email Kami
                          </h5>
                          <p class="card-text">
                            Kirimi Email Kami Ke <br />
                            support@beliayam.com
                          </p>
                          <a
                            href="mailto:support@beliayam.com"
                            class="btn btn-danger w-100"
                            >Kirim Email</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "bantuan",
  head: {
    title: "Bantuan",
    htmlAttrs: {
      lang: "en",
      script: [
        {
          src: "~/static/js/countdown.min.js",
        },
      ],
    },
  },
};
</script>

<style>
</style>