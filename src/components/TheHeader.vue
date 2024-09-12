<script setup>
import { useStore } from "../javascript/data.js";
import TheLangButton from "./TheLangButton.vue";
import TheBasket from "./TheBasket.vue";
import TheBasketImg from "./TheBasketImg.vue";
</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-between">
      <div class="col-4 col-md-2 order-md-1 d-flex p-1">
        <a class="logo">
          <img class="logo-png" src="../../public/images/owl.png" alt="logo" />
        </a>
      </div>
      <div class="col-8 col-md-4 col-lg-3 order-md-3 p-1">
        <div class="d-flex flex-row justify-content-evenly align-items-center pt-4">
          <TheLangButton />
          <TheBasketImg />
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-7 order-md-2 text-center p-3">
        <h1 class="title text-uppercase">
          {{ useStore().header.title[useStore().language] }}
        </h1>
        <h3 class="title-text text-lowercase">
          {{ useStore().header.subtitle[useStore().language] }}
        </h3>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-sm-evenly">
      <a href="tel:002222222222" class="phone p-1">
        <img class="me-2" src="../../public/images/phone.svg" alt="phone" />
        <span class="">0 022-222-222-22</span>
      </a>
      <a href="mailto:Classical_School@gmail.com" class="gmail p-1">
        <img class="me-2" src="../../public/images/gmail.svg" alt="gmail" />
        <span class="">Classical_School@gmail.com</span>
      </a>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.title,
.title-text
  font-family:"DS Greece"

.phone,
.gmail
  transition: all .5s

.phone,
.gmail
  margin-bottom: 10px

.phone:hover,
.gmail:hover
  color: red
</style>
