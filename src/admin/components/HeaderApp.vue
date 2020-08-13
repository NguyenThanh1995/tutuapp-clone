<template>
   <div class="fixed-top navbar-nav navbar-expand-lg bg-light navbar-light">
      <div class="navbar-toggler" @click="openMenu">
         <span class="navbar-toggler-icon"></span>
      </div>
   
      <span class="navbar-brand">
         TutuApp Admin
      </span>
      
      <span class="navbar-brand"navbar-brand>
         
      </span>
      
      <div class="navbar-backdrop"
         v-if="active"
         :class="{ show }"
         @click="closeMenu"></div>
     
      <div class="collapse navbar-collapse"
         :class="{ show, active }"
         @transitionend="$emit('collapse.transitionend')">
         <ul class="navbar-nav">
            <li class="nav-item"
               v-for="(item, index) in map"
               :key="index">
               <router-link class="nav-link" :to="item.path"> {{ item.text }} </router-link>
            </li>
         </ul>
      </div>
      
   </div>
</template>

<style scoped lang="scss">
   .navbar-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0;
      display: none;
      transition: opacity .4s;
      &.active {
         display: block;
      }
      &.show {
         opacity: 1;
      }
   }
   .navbar-collapse {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      display: none;
      width: 250px;
      transform: translateX(-100%);
      transition: transform .4s;
      &.active {
         display: block;
      }
      &.show {
         transform: translateX(0%);
      }
   }
</style>

<script>
   export default {
      data() {
         return {
            map: [
               { path: "/", text: "Manager Apps" }
            ],
            
            active: false,
            show: true,
            animating: false
         }
      },
      methods: {
         openMenu() {
            this.show = false
            this.active = true
            this.animating = true
            setTimeout(() => {
               this.show = true
               this.$once("collapse.transitionend", () => {
                  this.animating = false
               })
            })
         },
         closeMenu() {
            this.show = false
            this.animating = true
            this.$once("collapse.transitionend", () => {
               this.animating = false
               this.active = false
               this.show = true
            })
         }
      }
   }
</script>