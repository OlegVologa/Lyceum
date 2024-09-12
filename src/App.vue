<script setup>

import { useStore } from "./javascript/data.js";

import TheHeader from './components/TheHeader.vue'
import TheTeachers from './components/TheTeachers.vue'
import TheStudents from './components/TheStudents.vue'
import TheFooter from './components/TheFooter.vue'
import TheBasket from './components/TheBasket.vue'

</script>

<template class="position-relative">

  <TheHeader />
  <TheTeachers />
  <TheStudents />
  <TheFooter />
  <TheBasket v-if="useStore().basket.basketOpen" />

</template>

<style scoped>

</style>
