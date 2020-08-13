<template>
   <div id="app">
      <Header-App></Header-App>
      <router-view></router-view>
      <Footer-App-Lite></Footer-App-Lite>
   </div>
</template>

<style>
   @import "style.css"
</style>

<script>
import HeaderApp from "@/components/HeaderApp.vue"
import FooterAppLite from "@/components/FooterAppLite.vue"
export default {
  name: 'App',
  components: {
     HeaderApp, FooterAppLite
  },
  created() {
     this.$router.replace("/")
  }
}
</script>
