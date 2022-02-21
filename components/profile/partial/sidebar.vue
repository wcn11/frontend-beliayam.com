<template>
  <div class="col-lg-4">
    <div class="beliayam-account bg-white rounded shadow-sm overflow-hidden">
      <div class="p-4 profile text-center border-bottom">
        <img src="/img/user.png" class="img-fluid rounded-pill" />
        <h6 class="font-weight-bold m-0 mt-2">Beranda</h6>
        <p class="small text-muted m-0"><a>{{ this.$store.state.auth.user.name || this.$store.state.auth.phone }}</a></p>
      </div>
      <div class="account-sections">
        <ul class="list-group">
          <NuxtLink to="/akun" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-user beliayam-icofont bg-danger"></i>Akun Saya
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </NuxtLink>
          <NuxtLink to="/akun/pesanan-saya" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-box-heart beliayam-icofont bg-success"></i
              >Pesanan Saya
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </NuxtLink>
          <NuxtLink to="/promo" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-badge-percent beliayam-icofont bg-success"></i
              >Promo
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </NuxtLink>
          <NuxtLink to="/akun/alamat" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-address-book beliayam-icofont bg-dark"></i>
              Alamat
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </NuxtLink>
          <!-- <a
            href="terms_conditions.html"
            class="text-decoration-none text-dark"
          >
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-info-circle beliayam-icofont bg-primary"></i
              >Syarat, Privasi & Kebijakan
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </a> -->
          <a href="help_support.html" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-phone-alt beliayam-icofont bg-warning"></i>Bantuan &
              Dukungan
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </a>
          <!-- <a href="help_ticket.html" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-phone-alt beliayam-icofont bg-success"></i>Ticket
              <span class="badge badge-success p-1 badge-pill ml-auto"
                ><i class="fad fa-chevron-right"></i
              ></span>
            </li>
          </a> -->
          <a href="#" class="text-decoration-none text-dark">
            <li class="border-bottom bg-white d-flex align-items-center p-3">
              <i class="fad fa-lock beliayam-icofont bg-danger"></i>
              Logout
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>


