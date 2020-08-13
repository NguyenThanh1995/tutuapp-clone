<template>
         <div class="wrap__app--loading">
            
            <div class="wrap__app--loading-body">
               <div class="wrap__app--load-more state" v-show="!OutOfApp && !MoreLoading" @click="$emit('load-more')">
                  <p class="font-11.5 m-0 p-0" style="color: #0084F0"> More </p>
                  <img class="icon" src="https://www.tutuapp.vip/ios/img/ic_more.9838c3ed.svg">
               </div>
               <div class="wrap__app--not-more state" v-show="OutOfApp && !MoreLoading">
                  <p class="font-11.5 m-0 p-0" style="color: #0084F0"> Not more </p>
               </div>
               <div class="wrap__app--more-loading state" v-show="MoreLoading">
                  <img class="" src="@/assets/ellipsis.svg">
               </div>

            </div>
         </div>
</template>

<script>
   export default {
      props: {
         OutOfApp: Boolean,
         MoreLoading: Boolean
      }
   }
</script>