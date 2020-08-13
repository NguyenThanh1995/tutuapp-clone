<template>
      <div class="navbar navbar-expand-lg navbar-light header bg-white align-items-center align-contents-center fixed-top p-0 flex-wrap">
         <div class="navbar-toggler border-0" @click="openMenu">
            <span class="navbar-toggler-icon small"></span>
         </div>
         
         <div class="navbar-brand">
            <img src="https://www.tutuapp.vip/ios/img/nav_ic_logo_english.5527b3a7.svg">
            <img src="https://www.tutuapp.vip/ios/img/nav_ic_download.f273287c.svg">
         </div>
         
         <div class="navbar-brand"></div>

         <div class="w-100" v-if="$route.meta.showBarVip">
            <div class="header__VIP-lite">
               <router-link to="/" class="item" exact-active-class="active" active-class="">
                  Dowload VIP
               </router-link>
               <router-link to="/lite" actve-class="actve" class="item">
                  TutuApp Lite
               </router-link>
            </div>
         </div>

         <div class="navbar-backdrop"
            v-if="stateMenuRenderBackdrop"
            :class="{ show: stateMenuBackdrop }"
            @transitionend="$emit('menuBackdropHide')"
            @click="closeMenu"></div>
         
         <div class="collapse navbar-collapse" :style="{
            transform: `translateX(${stateMenu}%)`,
            display: stateMenu > -100 ? 'block' : 'none'
         }">
            <ul class="navbar-nav pl-3" ref="NavBarNav">
               <li class="nav-item">
                  <p class="font-23.8 weight-500 title--welcome p-0 m-0 pt-3 ml-3">
                     Welcome
                  </p>
               </li>
               <li class="nav-item" @click="closeMenu">
                  <router-link tag="button" to="/login" class="button button--login m-0 ml-3">
                     Log In
                  </router-link>
               </li>
               <hr>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_bind.5c08f2a6.svg">
                  <span> Bind your UDID </span>
               </li>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_vip.83421fc6.svg">
                  <span> Purchase VIP </span>
               </li>
               <hr>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_home.c01c8a5a.svg">
                  <span> Home </span>
               </li>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_download.95acc064.svg">
                  <span> Download Tutuapp VIP </span>
               </li>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_games.5b47e147.svg">
                  <span> iOS Apps &amp; Games </span>
               </li>
               <hr>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_feedback.59d77923.svg">
                  <span> Feedback </span>
               </li>
               <li class="nav-item" @click="closeMenu">
                  <div class="d-table-row">
                     <img class="icon-13.5 d-table-cell" src="https://www.tutuapp.vip/ios/img/leftbar_ic_contact.a0c83ffb.svg">
                     <span class="d-table-cell"> Contact Us </span>
                  </div>
                  <div class="d-table-row">
                     <div class="d-table-cell"></div>
                     <ul class="list-unstyled m-0 p-0 small d-table-cell">
                        <li> Twitter </li>
                        <li> Instagram </li>
                        <li> Youtube </li>
                     </ul>
                  </div>
               </li>
               <hr>
               <li class="nav-item" @click="closeMenu">
                  <img class="icon-13.5" src="https://www.tutuapp.vip/ios/img/leftbar_ic_blog.7b5507ee.svg">
                  <span> Blog </span>
               </li>
            </ul>
         </div>
      </div>
</template>

<script>
export default {
   name: "HeaderApp",
   data() {
      return {
         stateMenu: -100,
         stateMenuBackdrop: false,
         stateMenuRenderBackdrop: false
      }
   },
   methods: {
      openMenu() {
         
         this.stateMenu = 0
         this.stateMenuRenderBackdrop = true
         setTimeout(() => this.stateMenuBackdrop = true, 10)
      },
      closeMenu() {
         if ( this.stateMenu == -100 )
            return
         this.stateMenu = -100
         this.$once("menuBackdropHide", () => this.stateMenuRenderBackdrop = false)
         setTimeout(() => this.stateMenuBackdrop = false, 10)
      }
   }
}
</script> 