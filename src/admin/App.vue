<template>
   <div id="app">
      <Header-App></Header-App>
      <router-view></router-view>
   </div>
</template>

<script>
   import HeaderApp from "./components/HeaderApp.vue"
   
   export default {
      components: { HeaderApp },
      created() {
         this.$router.replace("/")
      }
   }
   
</script>