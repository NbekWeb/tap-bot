<script setup></script>
<template>
  <div class="flex flex-col items-center px-5 pt-6">
    <div class="flex justify-center">
      <img src="@/assets/img/top-5.png" class="w-2/3 h-auto" />
    </div>
    <span class="mt-4 text-2xl text-white opacity-50"> 156 987 </span>
    <div class="relative w-full h-2 mt-2 mb-6 rounded-xl bg-grey-400">
      <div
        class="absolute top-0 left-0 w-1/3 h-full yellow-gradient rounded-xl"
      ></div>
    </div>
    <div class="flex flex-col w-full gap-2 text-white">
      <div
        class="flex items-center justify-between w-full p-2 yellow-gradient rounded-2xl"
      >
        <div class="flex items-center gap-3">
          <img src="@/assets/img/avatar-minion.png" class="w-14 h-14" />
          <div>
            <span class="text-xl"> Nik name </span>
            <div class="flex items-center gap-1 text-sm">
              <img src="@/assets/img/coin-vpn.png" class="w-4 h-4" />
              <span class="opacity-50">1 079 890</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3 pr-2 text-center">
          <span class="text-xl text-shadow-wrap">TOP 5</span>
          <span class="text-3xl opacity-50">1</span>
        </div>
      </div>
      <div
        class="flex items-center justify-between w-full p-2 bg-white-13 rounded-2xl"
      >
        <div class="flex items-center gap-3">
          <img src="@/assets/img/avatar.png" class="w-14 h-14" />
          <div>
            <span class="text-xl"> Nik name </span>
            <div class="flex items-center gap-1 text-sm">
              <img src="@/assets/img/coin-vpn.png" class="w-4 h-4" />
              <span class="opacity-50">1 000 890</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3 pr-2 text-center">
          <span class="text-3xl opacity-50">2</span>
        </div>
      </div>
      <div
        class="flex items-center justify-between w-full p-2 bg-white-13 rounded-2xl"
        v-for="i of 10"
        :key="i"
      >
        <div class="flex items-center gap-3">
          <img src="@/assets/img/anonim.png" class="w-14 h-14" />
          <div>
            <span class="text-xl"> Nik name </span>
            <div class="flex items-center gap-1 text-sm">
              <img src="@/assets/img/coin-vpn.png" class="w-4 h-4" />
              <span class="opacity-50">779 890</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3 pr-2 text-center">
          <span class="text-3xl opacity-50">{{ i + 2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-shadow-wrap {
  text-shadow: 1px 1px 0 #feb934, /* Right bottom */ -1px -1px 0 #feb934,
    /* Left top */ -1px 1px 0 #feb934, /* Left bottom */ 1px -1px 0 #feb934,
    /* Right top */ 0 1px 0 #feb934, /* Bottom */ 0 -1px 0 #feb934; /* Top */
}
</style>
