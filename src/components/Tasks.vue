<template>
  <div class="px-5 pt-10 text-white">
    <div class="flex flex-col items-center gap-3 mb-4 text-center">
      <span class="text-2xl font-semibold">Выполняйте задания!</span>
      <span class="text-sm">Вы и ваш друг получите бонусы</span>
      <div
        class="flex items-center justify-center h-10 gap-1 text-sm border-4 border-green-800 green-linear box-shadow-linear w-52 rounded-3xl"
      >
        <span>Пригласить друга</span>
        <user />
      </div>
    </div>
    <div class="flex flex-col gap-2 mb-4">
      <div class="flex gap-8 p-3 bg-blue-700 rounded-3xl">
        <img src="@/assets/img/prize.png" class="w-10" />
        <div class="flex flex-col gap-1">
          <span class="text-lg font-semibold">Пригласить друга</span>
          <div class="flex gap-2 text-sm">
            <img src="@/assets/img/coin-vpn.png" class="w-6 h-6" />
            <span class="font-semibold">+ 5 000 </span>
            <span class="text-xs">для вас и вашего друга</span>
          </div>
        </div>
      </div>
      <div class="flex gap-4 p-3 bg-blue-700 rounded-3xl">
        <img src="@/assets/img/prizes.png" class="h-auto w-15" />
        <div class="flex flex-col gap-1">
          <span class="text-lg font-semibold line-1"
            >Пригласить друга с Telegram Premium
          </span>
          <div class="flex gap-2 text-sm">
            <img src="@/assets/img/coin-vpn.png" class="w-6 h-6" />
            <span class="font-semibold">+ 25 000 </span>
            <span class="text-xs">для вас и вашего друга</span>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script setup>
import user from "@/components/icons/user.vue";
import Rotate from "./icons/rotate.vue";
</script>
<style>
.green-linear {
  background: linear-gradient(90deg, #48e8a4 0%, #59b9c6 100%);
}
.line-1 {
  line-height: 1;
}
</style>
