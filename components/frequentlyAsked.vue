<template>
  <div class="container">

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">FAQ</li>
        </ol>
      </div>
    </nav>
    
    <div class="p-4 m-4 bg-white rounded shadow-sm">
      <h4 class="mb-4 profile-title">FAQ - Basics</h4>
      <div id="basics">
        <div id="basicsAccordion">
          <div class="box border rounded mb-1 bg-white">
            <div id="basicsHeadingOne">
              <h5 class="mb-0">
                <button
                  class="
                    shadow-none
                    btn btn-block
                    d-flex
                    align-items-center
                    justify-content-between
                    card-btn
                    p-3
                    collapsed
                  "
                  data-toggle="collapse"
                  data-target="#basicsCollapseOne"
                  aria-expanded="false"
                  aria-controls="basicsCollapseOne"
                >
                  Do you have any built-in caching?
                  <i class="fad fa-chevron-down"></i>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseOne"
              class="collapse show"
              aria-labelledby="basicsHeadingOne"
              data-parent="#basicsAccordion"
              style=""
            >
              <div class="card-body border-top p-3 text-muted">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid ...
              </div>
            </div>
          </div>

          <div class="box border rounded mb-1 bg-white">
            <div id="basicsHeadingTwo">
              <h5 class="mb-0">
                <button
                  class="
                    shadow-none
                    btn btn-block
                    d-flex
                    align-items-center
                    justify-content-between
                    card-btn
                    p-3
                    collapsed
                  "
                  data-toggle="collapse"
                  data-target="#basicsCollapseTwo"
                  aria-expanded="false"
                  aria-controls="basicsCollapseTwo"
                >
                  Can I add/upgrade my plan at any time?
                  <i class="fad fa-chevron-down"></i>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseTwo"
              class="collapse"
              aria-labelledby="basicsHeadingTwo"
              data-parent="#basicsAccordion"
              style=""
            >
              <div class="card-body border-top p-3 text-muted">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid ...
              </div>
            </div>
          </div>

          <div class="box border rounded mb-1 bg-white">
            <div id="basicsHeadingThree">
              <h5 class="mb-0">
                <button
                  class="
                    shadow-none
                    btn btn-block
                    d-flex
                    align-items-center
                    justify-content-between
                    card-btn
                    p-3
                    collapsed
                  "
                  data-toggle="collapse"
                  data-target="#basicsCollapseThree"
                  aria-expanded="false"
                  aria-controls="basicsCollapseThree"
                >
                  What access comes with hosting plan?
                  <i class="fad fa-chevron-down"></i>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseThree"
              class="collapse"
              aria-labelledby="basicsHeadingThree"
              data-parent="#basicsAccordion"
              style=""
            >
              <div class="card-body border-top p-3 text-muted">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid ...
              </div>
            </div>
          </div>

          <div class="box border rounded mb-1 mb-2 bg-white">
            <div id="basicsHeadingFour">
              <h5 class="mb-0">
                <button
                  class="
                    shadow-none
                    btn btn-block
                    d-flex
                    align-items-center
                    justify-content-between
                    card-btn
                    collapsed
                    p-3
                  "
                  data-toggle="collapse"
                  data-target="#basicsCollapseFour"
                  aria-expanded="false"
                  aria-controls="basicsCollapseFour"
                >
                  How do I change my password?
                  <i class="fad fa-simple-down"></i>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseFour"
              class="collapse"
              aria-labelledby="basicsHeadingFour"
              data-parent="#basicsAccordion"
            >
              <div class="card-body border-top p-3 text-muted">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrequentlyAsked",
};
</script>


