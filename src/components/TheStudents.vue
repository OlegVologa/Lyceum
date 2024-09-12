<script setup>
import { useStore } from "../javascript/data.js";
</script>

<template>
  <div class="container">
    <img class="school mb-5 mx-auto" src="../../public/images/school.jpg" alt="shool" />
    <h2 class="title text-uppercase fw-medium text-center pt-3 p-sm-3 p-lg-5">
      {{ useStore().studentsHeading[useStore().language] }}
    </h2>
    <div
      v-for="student in useStore().students"
      class="row p-3 g-3 my-lg-5"
      :key="student.id"
    >
      <div
        class="d-flex flex-column justify-content-center col-md-4 p-3 g-3"
        :class="{ 'order-md-2': student.positionLeft }"
      >
        <img
          class="photo d-block img-fluid mx-auto"
          :src="student.image"
          alt="pythagoras"
        />
        <h2 class="text-center pt-3">
          {{ student.title[useStore().language] }}
        </h2>
        <h3 class="fs-5 text-center">
          {{ student.years }}
          <span>
            {{ student.bc[useStore().language] }}
          </span>
        </h3>
      </div>
      <div
        class="d-flex flex-column justify-content-center col-md-6"
        :class="{ 'order-md-1': student.positionLeft }"
      >
        <h4 class="fs-5 mb-5">
          {{ student.description[useStore().language] }}
        </h4>
        <p class="bg-primary-subtle">
          {{ student.question1[useStore().language] }}
        </p>
        <p class="bg-warning-subtle">
          {{ student.answer1[useStore().language] }}
        </p>
        <p class="bg-primary-subtle">
          {{ student.question2[useStore().language] }}
        </p>
        <p class="bg-warning-subtle">
          {{ student.answer2[useStore().language] }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.school
  width: 100%
  height: 100%

.photo
  width: 100%
  border-radius: 50%
</style>
