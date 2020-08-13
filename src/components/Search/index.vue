<template>
      <div class="wrap__main">
         <div class="wrap__search--header py-15px">
            <input class="input" placeholder="Search" v-model="InputSearch" @keyup.enter="Search">
            <img class="icon" src="https://www.tutuapp.vip/ios/img/ic_search.2d5fd24e.svg" @click="Search">
         </div>
         
         <div class="wrap__search--body px-15px">
            <div class="wrap__search--keywords-hot">
               <p class="title">
                  Hot
               </p>
               <div class="content">
                  <span class="keyword"> Youtube Download </span>
                  <span class="keyword"> Minecraft: Pocket Edition </span>
                  <span class="keyword"> Monument Valley 2 </span>
                  <span class="keyword"> PokeGo++ 2.0r-112 </span>
               </div>
            </div>
            <div class="wrap__search--interested">
               <p class="title">
                  Interested
               </p>
               <div class="wrap__app-hot--body">
                  <ul class="list">
                     <li class="item" v-for="item in []" @click="$router.push({ path: `/lite/app/${item.id}` }, () => {})">
                        <img class="icon-59.7 radius-10px" :src="item.icon">
                        <p class="font-10.5 text-truncate name weight-500"> {{ item.name }} </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         
         
      </div>
</template>

<script>
export default {
   data() {
     return {
       InputSearch: ""
     }
   },
   methods: {
     Search() {
       this.$router.push({
         path: "/lite/search/result",
         query: {
            query: this.InputSearch
         }
       })
     }
   }
}
</script> 