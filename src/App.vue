<script setup>
import Birja from "@/components/Birja.vue";
import birjaIcon from "./components/icons/birja.vue";
import Rate from "./components/icons/rate.vue";
import Friends from "./components/icons/friends.vue";
import Tasks from "./components/icons/tasks.vue";

import { ref } from "vue";
const selected = ref(0);

const changeTab = (i) => {
  selected.value = i;
};
</script>
<template>
  <div class="flex flex-col h-screen border main-bg">
    <div class="min-h-con">
      <Birja  class=""/>
    </div>
    <div
      class="flex items-center justify-between px-5 text-5xl bg-blue-600 h-25"
    >
      <div
        class="flex flex-col items-center text-white"
       
        @click="changeTab(0)"
      >
        <birja-icon  :class="selected !== 0 && 'opacity-25'" class="tr-03" />
        <span class="text-xl">Биржа</span>
      </div>
      <div
        class="flex flex-col items-center text-white"
        
        @click="changeTab(1)"
      >
        <friends :class="selected !== 1 ? 'opacity-25' : 'opacity-100'" class="tr-03" />
        <span class="text-xl">Друзья</span>
      </div>

      <div
        class="flex flex-col items-center text-white"
      
        @click="changeTab(2)"
      >
        <tasks   :class="selected !== 2 ? 'opacity-25' : 'opacity-100'" class="tr-03" />
        <span class="text-xl">Задания</span>
      </div>
      <div
        class="flex flex-col items-center text-white"
       
        @click="changeTab(3)"
      >
        <rate  :class="selected !== 3 ? 'opacity-25' : 'opacity-100'"  class="tr-03"/>
        <span class="text-xl">Рейтинг</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.h-con {
  height: calc(100vh - 100px);
}
.min-h-con {
  min-height: calc(100vh - 100px);
}
.tr-03{
  transition: all .3s ease;
}
</style>
