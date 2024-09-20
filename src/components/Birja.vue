<script setup>
import { ref } from "vue";
import mainCharacter from "../assets/img/stars.png";
// const mainCharacter = "../assets/img/rocket.png"; // Replace with the actual path to your image
const points = ref(0);
const pointsToAdd = 10; // Define this according to your needs
const clicks = ref([]);

function handleCardClick(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${
    x / 10
  }deg)`;

  setTimeout(() => {
    card.style.transform = "";
  }, 100);

  points.value += pointsToAdd;
  clicks.value.push({ id: Date.now(), x: e.pageX, y: e.pageY });

  const img = document.createElement("img");
  img.src = mainCharacter;
  img.style.position = "absolute";
  img.style.left = `${e.pageX - 60}px`;
  img.style.top = `${e.pageY - 25}px`;
  img.style.width = "120px";
  img.style.height = "auto";
  img.style.transition = "all 1s ease-in-out";
  img.style.opacity = "1";
  img.style.pointerEvents = "none";
  img.style.zIndex = "100";
  document.body.appendChild(img);

  setTimeout(() => {
    img.style.transform = "translateY(-100px)";
    img.style.opacity = "0";
  }, 0);
  setTimeout(() => {
    img.remove();
  }, 1000);
}
</script>

<template>
  <div class="flex flex-col h-full pt-6">
    <div class="flex flex-col items-center gap-6">
      <div class="flex items-center gap-2 text-2xl text-white">
        <img src="@/assets/img/avatar.png" class="w-8 h-8" />
        <span> Nik name </span>
      </div>
      <div class="relative h-2 w-50 rounded-xl bg-grey-400 mb-7">
        <div
          class="absolute top-0 left-0 w-1/3 h-full yellow-gradient rounded-xl"
        ></div>
        <img
          src="@/assets/img/star-top.png"
          class="absolute w-12 pb-2 transform -translate-y-1/2 -right-4 top-1/2"
        />
      </div>
    </div>
    <div class="pt-2.5 bg-blue-900 grow rounded-t-3xl blue-shadow ">
      <div class="flex flex-col h-full pt-4 bg-dark-200 rounded-t-3xl">
        <div
          class="flex items-center justify-center gap-3 font-semibold text-white mb-18 tex4t-4xl"
        >
          <img src="@/assets/img/coin-vpn.png" class="w-12" />
          <span>156 987</span>
        </div>

        <div class="relative flex items-end justify-center grow">
          <div
            class="absolute z-10 rounded-full w-60 h-60 circle-outer -top-10 bg-coin"
            @click="handleCardClick"
          >
            <div class="w-full h-full rounded-full circle-out">
              <img
                src="@/assets/img/main-coin.png"
                alt="Main Character"
                class="w-full h-full"
              />
            </div>
          </div>

          <img
            src="@/assets/img/card.png"
            class="absolute top-0 left-0 w-screen -z-2"
          />
          <div
            class="flex justify-between w-full px-5 pb-5 text-2xl font-semibold text-white"
          >
            <div class="flex gap-2">
              <img src="@/assets/img/thunder.png" class="w-8 h-auto" />
              <span> 2500/2500 </span>
            </div>
            <div class="flex gap-2">
              <img src="@/assets/img/rocket.png" class="w-8 h-auto" />
              <span> Ускорить </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.circle-out {
  box-shadow: 0px 0px 15px 5px rgba(255, 195, 65, 0.5);
}
</style>
