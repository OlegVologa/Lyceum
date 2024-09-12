<script setup>
import { useStore } from "../javascript/data.js";

function changeLang() {
  if (useStore().language === "en") {
    useStore().language = "ru";
  } else {
    useStore().language = "en";
  }
}

function changeLangEn() {
  if (useStore().language === "ru") {
    useStore().language = "en";
  }
}

function changeLangRu() {
  if (useStore().language === "en") {
    useStore().language = "ru";
  }
}
</script>

<template>
  <div
    class="language fw-semibold d-flex flex-column justify-content-between align-items-center"
  >
    <span
      @click="changeLangEn"
      :class="{
        animateLangText: useStore().language === 'en',
        'cursor-pointer': useStore().language === 'ru',
      }"
      class="animateDefault"
      >En</span
    >
    <div @click="changeLang" class="frame animateDefault cursor-pointer my-2">
      <div class="flex p-1">
        <img
          v-if="useStore().language === 'en'"
          class="animateDefault"
          src="../../public/images/english.png"
          alt="english-flag"
        />
        <img
          v-else
          class="animateDefault"
          :class="{ animateButtonRu: useStore().language === 'ru' }"
          src="../../public/images/russia.png"
          alt="russia-flag"
        />
      </div>
    </div>
    <span
      @click="changeLangRu"
      :class="{
        animateLangText: useStore().language === 'ru',
        'cursor-pointer': useStore().language === 'en',
      }"
      class="animateDefault"
      >Ru</span
    >
  </div>
</template>

<style scoped>
.animateDefault {
  transition: all 1s ease;
  width: 19px;
  height: 20px;
}

.animateLangText {
  transform: scale(1.2);
  color: black;
}

.animateButtonRu {
  transform: translateY(14px);
}

.language {
  color: grey;
}

.cursor-pointer {
  cursor: pointer;
}

.frame {
  border: 2px solid rgb(108, 108, 241);
  border-radius: 50px;
  width: 30px;
  height: 50px;
}
</style>
