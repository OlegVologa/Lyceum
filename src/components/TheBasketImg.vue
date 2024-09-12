<script setup>
import { useStore } from "../javascript/data.js";
</script>

<template>
  <div class="basket-wrapper position-relative">
    <img
      v-if="useStore().basket"
      @click="useStore().basket.basketOpen = true"
      class="basket"
      src="../../public/images/basket.png"
      alt="basket"
    />
    <div
      class="numberItems position-absolute top-0 end-0 border border-light rounded-circle bg-danger d-flex justify-content-center align-items-center fw-bolder"
    >
      {{ useStore().numGoods }}
    </div>
  </div>
</template>

<style lang="sass" scoped>

.basket
  width: 60px
  height: 60px
  cursor: pointer

.numberItems
  width: 20px
  height: 20px
  color: white
</style>
