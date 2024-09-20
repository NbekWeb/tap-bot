<script setup>
import Birja from "@/components/Birja.vue";
import Friends from "@/components/Friends.vue";
import BirjaIcon from "./components/icons/birja.vue";
import RateIcon from "./components/icons/rate.vue";
import FriendsIcon from "./components/icons/friends.vue";
import TasksIcon from "./components/icons/tasks.vue";

import { ref } from "vue";

const selected = ref(0);

const changeTab = (i) => {
  selected.value = i;
};
</script>
<template>
  <div class="flex flex-col h-screen main-bg">
    <div class="overflow-y-auto min-h-con">
      <Birja class="" v-if="selected == 0" />
      <friends v-else-if="selected == 1" />
    </div>
    <div
      class="flex items-center justify-between px-5 text-4xl bg-blue-600 min-h-25"
    >
      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(0)"
      >
        <birja-icon :class="selected !== 0 && 'opacity-25'" class="tr-03" />
        <span class="text-lg">Биржа</span>
      </div>
      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(1)"
      >
        <friends-icon
          :class="selected !== 1 ? 'opacity-25' : 'opacity-100'"
          class="tr-03"
        />
        <span class="text-lg">Друзья</span>
      </div>

      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(2)"
      >
        <tasks-icon
          :class="selected !== 2 ? 'opacity-25' : 'opacity-100'"
          class="tr-03"
        />
        <span class="text-lg">Задания</span>
      </div>
      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(3)"
      >
        <rate-icon
          :class="selected !== 3 ? 'opacity-25' : 'opacity-100'"
          class="tr-03"
        />
        <span class="text-lg">Рейтинг</span>
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
.tr-03 {
  transition: all 0.3s ease;
}
</style>
