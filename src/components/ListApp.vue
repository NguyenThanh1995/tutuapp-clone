<template>
         <div class="wrap__app--body">
            <ul class="list">
               <li class="item" v-for="item in apps">
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
</template>

<script>
export default {
   props: {
     apps: Array
   }
}
</script> 