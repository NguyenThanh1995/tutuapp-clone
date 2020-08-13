<template>
      <div class="wrap__main">
         <div class="wrap__search--header py-15px">
            <input class="input" placeholder="Search" v-model="InputSearch" @keyup.enter="Search">
            <img class="icon" src="https://www.tutuapp.vip/ios/img/ic_search.2d5fd24e.svg" @click="Search">
         </div>
         
         
         <div class="wrap__app--body">
            <ul class="list">
               <li class="item" v-for="item in Result">
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
      </div>
</template>


<script>
exports = {
   data() {
     return {
       InputSearch: "",
       Result: []
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
     },
     fetchData() {
       fetch("http://192.168.0.115:8080/ajax/feature/Apps.php", { method: "post" })
       .then(res => res.json())
       .then(data => this.Result = data)
       .catch(e => alert(e + ""))
     }
   },
   watch: {
     "$route": "fetchData"
   },
   created() {
     this.fetchData(this.InputSearch = this.$route.query.query)
   }
}
</script> 