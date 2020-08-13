<template>
      <div class="wrap__main wrap__main--no-bar-VIP wrap__main--no-bar-bottom">
         <div class="wrap__login">
            <p class="title">
               Log In
            </p>
            <div class="content">
               <div class="input__email input-custom">
                  <input class="input no-input" placeholder="EMail / Mobile Phone / User Name" required v-model="email">
                  <span class="bar"></span>
               </div>
               <div class="input__email input-custom">
                  <input class="input no-input" placeholder="Password" :type=" eyeShow ? 'text' : 'password' " required v-model="password">
                  <span class="bar"></span>
                  <img class="eye" :src=" eyeShow ? 'https://www.tutuapp.vip/ios/img/ic_show.eea733b8.svg' : 'https://www.tutuapp.vip/ios/img/ic_cover.b472c31a.svg' " @click="eyeShow = !eyeShow">
               </div>
               
               <button class="button__submit" :disabled="!email || !password"> Log In </button>

               <div class="footer__login">
                  <router-link tag="span" to="/registered" class="color-main"> Sign Up </router-link>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
export default {
   data() {
      return {
         email: "",
         password: "",
         eyeShow: false
      }
   }
}
</script> 