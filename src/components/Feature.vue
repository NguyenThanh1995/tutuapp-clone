<template>
      <div class="wrap__main">
         <div class="wrap__banner py-15px">
            <carousel-3d 
               :autoplay="true" 
               :autoplay-timeout="3000"
               :border="0"
               :autoplay-hover-pause="true"
               :height="146"
               :width="293"
               :per-page="3"
               :key="JSON.stringify(Banner)"
               background="#00000000"
               class="m-0 p-0">
               <slide v-for="(item, i) in Banner" :index="i" :key="item + i" class="m-p p-0 bg-0">
                  <img :src="item" class="w-100 h-100 bg-0 object-fit" style="border-radius: 10px">
               </slide>
            </carousel-3d>
         </div>
            
         <div class="wrap__app-hot px-10px">
            <p class="wrap__app-hot--title">
               <img class="icon-18.7" src="https://www.tutuapp.vip/ios/img/home_ic_hot.497886da.svg">
               <span class="font-13.5 font-bold"> Hot </span>
            </p>
            <div class="wrap__app-hot--body">
               <ul class="list">
                  <li class="item" v-for="item in TopDownload" @click="$router.push({ path: `/lite/app/${item.id}` }, () => {})">
                     <img class="icon-59.7 radius-10px" :src="item.icon">
                     <p class="font-10.5 text-truncate name weight-500"> {{ item.name }} </p>
                  </li>
               </ul>
            </div>
            
         </div>
         
         <div class="wrap__app--body">
            <ul class="list">
               <li class="item" v-for="item in Apps">
                  <div class="app">
                     <div class="app-info" @click="$router.push({ path: `/lite/app/${item.id}` }, () => {})">
                        <img class="icon-59.7 radius-10px" :src="item.icon">
                        <div class="pl-12px">
                           <p class="font-13.5 weight-500 name m-0 p-0 truncate-2"> {{ item.name }} </p>
                           <p class="font-10.5 text-truncate p-0 m-0"> {{ item.developer }} </p>
                        </div>
                     </div>
                     <img class="icon-39.5" src="https://www.tutuapp.vip/ios/img/list_btn_download.bf8c0b77.svg">
                  </div>
               </li>
            </ul>
         </div>
         
         <My-Loading-Button
            v-show="!NotEnoughApps"
            :OutOfApp="OutOfApp"
            :MoreLoading="MoreLoading"
            @load-more="fetchMoreApp">
         </My-Loading-Button>
         
         <div class="wrap__main--loading" v-if="Loading">
            <img src="@/assets/ellipsis.svg">
         </div>
      </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"
import MyLoadingButton from "@/components/MyLoadingButton.vue"

export default {
   data() {
      return {
         NotEnoughApps: false,
         OutOfApp: false,
         Banner: [],
         Apps: [],
         TopDownload: [],
         Loading: true,
         MoreLoading: false
      }
   },
   components: {
      Carousel3d, Slide, MyLoadingButton
   },
   methods: {
      fetchData() {
         this.Loading = true

         Promise.all([
            fetch("http://localhost:8080/ajax/feature/Banners.php", {
               method: "post"
            })
            .then(res => res.json())
            .then(data => this.Banner = data),

            fetch("http://localhost:8080/ajax/feature/TopDownloads.php", {
               method: "post"
            })
            .then(res => res.json())
            .then(data => this.TopDownload = data),

            fetch("http://localhost:8080/ajax/feature/Apps.php", {
               method: "post",
               body: JSON.stringify({
                  limit: 10,
                  offset: 0
               })
            })
            .then(res => res.json())
            .then(data => this.Apps = data)
         ])
         .then(() => this.Loading = false)
      },
      fetchMoreApp() {
         let offset = Math.max(this.Apps.length - 1, 0)

         this.MoreLoading = true

         fetch("http://localhost:8080/ajax/feature/Apps.php", {
            method: "post",
            body: JSON.stringify({
               limit: 10,
               offset
            })
         })
         .then(res => res.json())
         .then(data => {

            this.MoreLoading = false

            let empty = !data.length
            
            if ( empty )
               this.OutOfApp = true

            this.Apps =  [...this.Apps, ...data]

         })

      }
   },
   watch: {
      "$route": "fetchData"
   },
   created() {
      this.fetchData()
   }
}
</script> 