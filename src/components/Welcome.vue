<template>
      <div class="wrap__main">
         <div class="main__home--first">
            <img src="https://www.tutuapp.vip/ios/img/home_cloud_front@2x.68b4e574.png" class="home-cloud-front">
            <img src="https://www.tutuapp.vip/ios/img/home_spaceship@2x.88e81970.png" class="home-spaceship">
            <div class="home-download-button">
               <img src="https://www.tutuapp.vip/ios/img/home_btn_highlight@2x.e0cbed5a.png" class="home-btn-download-hl">
               <img src="https://www.tutuapp.vip/ios/img/home_btn_light@2x.8a17d04a.png" class="home-btn-download-light">
               <img src="https://www.tutuapp.vip/ios/img/home_btn_download_english@2x.c8f85d45.png" class="home-btn-download">
            </div>
            <img src="https://www.tutuapp.vip/ios/img/group3.dffc1e7e.svg" class="home-slide-icon">
            <img src="https://www.tutuapp.vip/ios/img/home_star_big.16c1544d.svg" class="home-star-big">
            <img src="https://www.tutuapp.vip/ios/img/home_star.4ce62c2b.svg" class="home-star">
            <div>
               <img src="https://www.tutuapp.vip/ios/img/home_cloud_left.e6859c92.svg" class="home-cloud-left">
            </div>
            <div>
               <img src="https://www.tutuapp.vip/ios/img/home_cloud_right.25d518fe.svg" class="home-cloud-right">
            </div>
            <img src="https://www.tutuapp.vip/ios/img/home_light_top.387c6a3b.svg" class="home-light-top">
            <img src="https://www.tutuapp.vip/ios/img/home_light_bottom.5975e2aa.svg" class="home-light-bottom">
         </div>

         <div class="main__home--content">
            <img src="https://www.tutuapp.vip/ios/img/home_transition@2x.e2b19c6d.png" class="transition-img">
            <div class="guide-block px-15px">
               <div class="guide-item guide-item-first">
                  <div class="guide-item-header" @click="showGuidePanel">
                     <img class="icon-18.7" src="https://www.tutuapp.vip/ios/img/home_ic_video.f42f4329.svg">
                     <span> Installation Guide </span>
                     <img class="icon-18.7 ic-more" src="https://www.tutuapp.vip/ios/img/ic_more.e86cacfd.svg">
                  </div>
                  <div class="panel-alert-slide" v-show="guidPanelShow">
                     <div class="backdrop" :class="{
   show: guidPanelShow,
   active: guidPanelActive
}" @click="closeGuidePanel"></div>
                     <div class="content" :class="{
   show: guidPanelShow,
   active: guidPanelActive
}" @transitionend="$emit('guidEnd')">
                        <ul class="navbar">
                           <li class="navbar-item" @click="guidPanelValue = 0" :class="{ active: guidPanelValue == 0 }"> Installtion </li>
                           <li class="navbar-item" @click="guidPanelValue = 1" :class="{ active: guidPanelValue == 1 }"> Verification </li>
                        </ul>
                        <div class="body">

                        </div>
                     </div>
                  </div>
               </div>
               <div class="guide-item">
                  <div class="guide-item-header">
                     <img class="icon-18.7" src="https://www.tutuapp.vip/ios/img/home_ic_hot.d9f9dc64.svg">
                     <span> VIP Feature</span>
                  </div>
                  
                  <div class="guide-item-body">
                  
                     <List-App :apps="Apps" class="no-margin"></List-App>
                     <p class="font-11.5 pt-5px color-main text-center"> Check more VIP Apps &gt; </p>
                  </div>
               </div>
               <div class="guide-item">
                  <ul class="guide-item-support">
                     <li>
                        <img src="paypal.png">
                     </li>
                     <li>
                        <img src="visa.png">
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
import ListApp from "./ListApp.vue"
export default {
   data() {
      return {
         guidPanelShow: false,
         guidPanelActive: false,
         guidPanelValue: 0,
      
         Apps: [ { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/002/54/98/20/2549820.175x175-75.jpg", "name": "Pokemon Go++" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/003/17/28/47/3172847.175x175-75.jpg", "name": "Plague Inception" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/003/45/31/06/3453106.175x175-75.jpg", "name": "Alphabounce 9" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/003/62/77/60/3627760.175x175-75.png", "name": "NBA 2K2020" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/us/002/63/68/74/2636874.175x175-75.jpg", "name": "Youtube++" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/003/62/85/21/3628521.175x175-75.jpg", "name": "Mortality Konoha" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/us/000/14/13/90/141390.175x175-75.jpg", "name": "Minecraft" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/003/40/61/21/3406121.175x175-75.png", "name": "Injudicial 2" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/us/000/14/13/90/141390.175x175-75.jpg", "name": "Minecraft" }, { "icon": "https://photos.tutuapp.com/picture/app_ios/cn/003/40/61/21/3406121.175x175-75.png", "name": "Injudicial 2" } ]
      }
   },
   components: {
      ListApp
   },
   methods: {
      showGuidePanel() {
         this.guidPanelShow = true
         setTimeout(() => this.guidPanelActive = true, 70)
      },
      closeGuidePanel() {
         this.guidPanelActive = false
         this.$once("guidEnd", () => this.guidPanelShow = false)
      }
   }
}
</script> 