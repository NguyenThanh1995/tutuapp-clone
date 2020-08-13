<template>
      <div class="footer fixed-bottom bg-white p-0 align-items-center justify-content-center" v-show="$route.meta.showBarBottom">
         <router-link to="/lite/feature" class="footer-item">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_home_default.eb15c429.svg" class="default">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_home_selected.8abaecb4.svg" class="active">
            <p> Best </p>
         </router-link>

         <router-link to="/lite/game" class="footer-item">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_game_default.08498809.svg" class="default">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_game_selected.35a6596e.svg" class="active">
            <p> Games </p>
         </router-link>
         
         <router-link to="/lite/application" class="footer-item">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_app_default.dff4c192.svg" class="default">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_app_selected.8bd30e8d.svg" class="active">
            <p> Apps </p>
         </router-link>
         
         <router-link to="/lite/search" class="footer-item">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_search_default.1897dc9c.svg" class="default">
            <img src="https://www.tutuapp.vip/ios/img/tab_ic_search_selected.c1cf67cf.svg" class="active">
            <p> Search </p>
         </router-link>
      </div>
</template>

<script>
   export default {
      name: "FooterAppLite"
   }
</script>