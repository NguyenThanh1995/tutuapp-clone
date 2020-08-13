<template>
      <div class="wrap__main wrap__main--no-bar-VIP wrap__main--no-bar-bottom">
         <div class="wrap__login wrap__resigner">
            <p class="title">
               Sign Up
            </p>
            <div class="content">
               <div class="input__email input-custom">
                  <input class="input no-input" placeholder="Mail Address" required v-model="email" v-if="useEmail" key="1">
                  <input class="input no-input" placeholder="Phone Number" required v-model="email" v-else key="2">
                  <span class="bar"></span>
               </div>
               <div class="input__vertication-code input-custom">
                  <input class="input no-input" placeholder="Vertication Code" required v-model="verticationCode">
                  <span class="bar"></span>
                  <span class="font-11.5 color-main eye pl-2 py-0" style="border-left: 1px solid #e6e8eb"> Vertify </span>
               </div>
               <div class="input__password input-custom">
                  <input class="input no-input" placeholder="Password" :type=" eyeShow ? 'text' : 'password' " required v-model="password">
                  <span class="bar"></span>
                  <img class="eye" :src=" eyeShow ? 'https://www.tutuapp.vip/ios/img/ic_show.eea733b8.svg' : 'https://www.tutuapp.vip/ios/img/ic_cover.b472c31a.svg' " @click="eyeShow = !eyeShow">
               </div>
               <div class="input__re-password input-custom">
                  <input class="input no-input" placeholder="Cofirm Password" :type=" confirmPassword ? 'text' : 'password' " required v-model="confirmPassword">
                  <span class="bar"></span>
                  <img class="eye" :src=" confirmPassword ? 'https://www.tutuapp.vip/ios/img/ic_show.eea733b8.svg' : 'https://www.tutuapp.vip/ios/img/ic_cover.b472c31a.svg' " @click="confirmPassword = !confirmPassword">
               </div>
               
               <button class="button__submit" :disabled="!email || !password || !verticationCode || !confirmPassword"> Sign Up </button>

               <div class="footer__login justify-content-between">
                  <span class="color-main" @click="useEmail = !useEmail"> Sign up with {{ useEmail ? "phone" : "email" }} </span>
                  <router-link tag="span" to="/login"> Sign In </router-link>
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
         verticationCode: "",
         confirmPassword: "",
         eyeShow: false,
         eyeShowConfirm: false,
         useEmail: true
      }
   }
}
</script> 