<template>
  <div>

    <LayoutsHeader></LayoutsHeader>

    <LayoutsFooter></LayoutsFooter>

    <div v-if="$nuxt.isOffline">You are offline</div>
  </div>
</template>