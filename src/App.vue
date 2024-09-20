<script setup>
import Birja from "@/components/Birja.vue";
import Friends from "@/components/Friends.vue";
import Friends1 from "@/components/Friends1.vue";
import Friends2 from "@/components/Friends2.vue";
import Rating from "@/components/Rating.vue";
import Tasks from "@/components/Tasks.vue";

import BirjaIcon from "./components/icons/birja.vue";
import RateIcon from "./components/icons/rate.vue";
import FriendsIcon from "./components/icons/friends.vue";
import TasksIcon from "./components/icons/tasks.vue";

import { ref } from "vue";

const selected = ref(0);
const addSelect = ref(0);
const changeTab = (i, j = 0) => {
  if (j == 0) {
    addSelect.value = 0;
  }

  selected.value = i + addSelect.value;

  if (j != 0) {
    addSelect.value++;
    addSelect.value = addSelect.value % 3;
  }
};
</script>
<template>
  <div class="flex flex-col h-screen main-bg">
    <div class="overflow-y-auto min-h-con">
      <Birja class="" v-if="selected == 0" />
      <friends v-else-if="selected == 1" />
      <friends1 v-else-if="selected == 2" />
      <friends2 v-else-if="selected == 3" />
      <tasks v-else-if="selected == 4" />
      <rating v-else-if="selected == 5" />
    </div>
    <div
      class="flex items-center justify-between px-5 text-4xl bg-blue-600 min-h-20"
    >
      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(0)"
        :class="selected !== 0 && 'opacity-25'"
      >
        <birja-icon class="tr-03" />
        <span class="text-lg">Биржа</span>
      </div>
      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(1, 1)"
        :class="
          selected !== 1 && selected != 2 && selected != 3
            ? 'opacity-25'
            : 'opacity-100'
        "
      >
        <friends-icon class="tr-03" />
        <span class="text-lg">Друзья</span>
      </div>

      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(4)"
        :class="selected !== 4 ? 'opacity-25' : 'opacity-100'"
      >
        <tasks-icon class="tr-03" />
        <span class="text-lg">Задания</span>
      </div>
      <div
        class="flex flex-col items-center gap-1 text-white"
        @click="changeTab(5)"
        :class="selected !== 5 ? 'opacity-25' : 'opacity-100'"
      >
        <rate-icon class="tr-03" />
        <span class="text-lg">Рейтинг</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.h-con {
  height: calc(100vh - 80px);
}
.min-h-con {
  min-height: calc(100vh - 80px);
}
.tr-03 {
  transition: all 0.3s ease;
}
</style>
