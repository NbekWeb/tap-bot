<template>
    <div class="px-5 pt-10 text-white">
      <div class="flex flex-col items-center gap-3 mb-4 text-center">
        <span class="text-2xl font-semibold">Приглашайте друзей!</span>
        <span class="text-sm">Вы и ваш друг получите бонусы</span>
        <div
          class="flex items-center justify-center h-10 gap-1 text-sm border-4 border-green-800 green-linear box-shadow-linear w-52 rounded-3xl"
        >
          <span>Пригласить друга</span>
          <user />
        </div>
      </div>
      
      <div>
        <div class="flex items-center justify-between mb-2 text-lg font-semibold">
          <span>Список ваших друзей </span>
          <rotate />
        </div>
        <div class="flex flex-col gap-2 pb-4">
          
            <div
              class="flex items-center justify-between p-3 rounded-2xl bg-white-13"
            >
              <div class="flex items-center gap-5 text-xl">
                <img src="@/assets/img/avatar-minion.png" class="w-8 h-8" />
                <span>Nik name</span>
              </div>
              <div class="flex items-center gap-2 text-sm font-medium">
                <img src="@/assets/img/coin-vpn.png" class="w-6 h-6" />
                <span> +200</span>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-3 rounded-2xl bg-white-13"
            >
              <div class="flex items-center gap-5 text-xl">
                <img src="@/assets/img/avatar.png" class="w-8 h-8" />
                <span>Nik name</span>
              </div>
              <div class="flex items-center gap-2 text-sm font-medium">
                <img src="@/assets/img/coin-vpn.png" class="w-6 h-6" />
                <span> +200</span>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-3 rounded-2xl bg-white-13"
            >
              <div class="flex items-center gap-5 text-xl">
                <img src="@/assets/img/anonim.png" class="w-8 h-8" />
                <span>Nik name</span>
              </div>
              <div class="flex items-center gap-2 text-sm font-medium">
                <img src="@/assets/img/coin-vpn.png" class="w-6 h-6" />
                <span> +200</span>
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

  