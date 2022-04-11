<template>
  <div id="page-home" class="animate__animated">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,128L30,112C60,96,120,64,180,42.7C240,21,300,11,360,42.7C420,75,480,149,540,165.3C600,181,660,139,720,138.7C780,139,840,181,900,186.7C960,192,1020,160,1080,128C1140,96,1200,64,1260,53.3C1320,43,1380,53,1410,58.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg> -->
    <Home />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {};
  },
  beforeDestroy() {
    document.getElementById("page-home").classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
#page-home {
  background: url("~/static/img/background-global.png");
    	/* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ce0000' fill-opacity='1' d='M0 32L30 69.3C60 107 120 181 180 192C240 203 300 149 360 106.7C420 64 480 32 540 37.3C600 43 660 85 720 101.3C780 117 840 107 900 90.7C960 75 1020 53 1080 58.7C1140 64 1200 96 1260 128C1320 160 1380 192 1410 208L1440 224L1440 0L1410 0C1380 0 1320 0 1260 0C1200 0 1140 0 1080 0C1020 0 960 0 900 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z'%3E%3C/path%3E%3C/svg%3E"); */
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}
</style>
