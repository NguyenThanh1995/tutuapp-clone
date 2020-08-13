<template>
      <div class="wrap__main">
         <div class="wrap__app--header px-15px py-15px">
            <div class="wrap__app--header-body">
               <img class="icon-85.32 radius-20px icon" :src="Icon">
               <div class="app-name">
                  <p class="title truncate-2"> {{ Name }} </p>
                  <div class="info">
                     <span class="size"> {{ Size }} </span>
                     <div class="rate">
                        <div class="wrap__rate"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="wrap__app--info px-15px">
            <p class="title">
               Infomation
            </p>
            <div class="wrap__app-info--body">
               <ul class="list d-table">
                  <li class="item d-table-row" v-for="(item, key) in InfomationShow">
                     <p class="d-table-cell item--left pb-1"> {{ key }} </p>
                     <p class="d-table-cell item--right pb-1"> {{ item }} </p>
                  </li>
               </ul>
            </div>
         </div>
         
                  
         <div class="wrap__app--screen mt-5">
            <p class="title px-15px">
               Screenshot
            </p>
            <div class="wrap__app-screen--body">
               <ul class="list">
                  <li class="item" v-for="item in Screen">
                     <img class="w-119.45 radius-5px" :src="item">
                  </li>
               </ul>
            </div>
         </div>
         
         <div class="wrap__app--des mt-5" :class="{ open: openDetailDes }" @click="openDetailDes = !openDetailDes">
            <p class="title px-15px">
               <span> Description </span>
               
               <span>
                  <img src="https://www.tutuapp.vip/ios/img/content_ic_up.0fd2e30a.svg" class="control icon-10.5">
               </span>
            </p>
            <div class="wrap__app-des--body font-11 px-15px text-pre-line" :class="{ 'truncate-3': !openDetailDes }">{{ Description }}</div>
         </div>
         
                     
         <div class="wrap__app--you px-15px mt-4">
            <p class="wrap__app--you--title title">
               You may be interested in
            </p>
            <div class="wrap__app--you--body">
               <ul class="list">
                  <li class="item" v-for="item in YourApp" @click="$router.push({ path: `/lite/app/${item.id}` }, () => {})">
                     <img class="icon-59.7 radius-10px" :src="item.icon">
                     <p class="font-10.5 text-truncate name weight-500"> {{ item.name }} </p>
                  </li>
               </ul>
            </div>
            
         </div>
         
         <div class="wrap__app--download px-15px bg-white">
            <button class="button"> Install </button>
         </div>
      </div>
</template>

<script>
export default {
   data() {
      return {
         openDetailDes: false,
         Icon: "",
         Name: "",
         Size: "",
         Description: "",
         Infomation: {},
         Screen: [],
         YourApp: []
      }
   },
   computed: {
      InfomationShow() {
         let deep = new Object(null)

          for ( let index in this.Infomation )
            if ( !!this.Infomation[index] )
               deep[index] = this.Infomation[index]

          return deep
      }
   },
   methods: {
      fetchData() {
         fetch("http://192.168.0.115:8080/ajax/feature/Info.php", {
            method: "post",
            body: JSON.stringify({
               id: this.$route.params.id
            })
         })
         .then(res => res.json())
         .then(data => {
            let empty = true
            for ( let key in data ) {
               empty = false
               break
            }
            
            if ( empty ) return this.$router.push("/")

            this.Icon = data.icon
            this.Name = data.name
            this.Size = data.size
            this.Description = data.description
            this.Infomation = data.infomation
            this.Screen = data.screen
            this.YourApp = data.yourapp
         })
      }
   },
   watch: {
      "$store": "fetchData"
   },
   created() {
      this.fetchData()
   }
}
</script> 