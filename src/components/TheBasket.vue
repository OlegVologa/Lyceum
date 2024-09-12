<script setup>
import { useStore } from "../javascript/data.js";
function quantityGoods() {
  useStore().numGoods = 0;
  for (let elem in useStore().courseFree) {
    if (useStore().courseFree[elem] > 0) {
      useStore().numGoods += 1;
    }
  }
}
</script>

<template>
  <div
    @click="useStore().basket.basketOpen = false"
    class="basket-left position-absolute top-0 start-0 bg-secondary opacity-50 z-2"
  ></div>
  <div
    class="basket-right position-absolute top-0 end-0 h-100 bg-primary-subtle border-start border-primary z-1 p-3"
  >
    <button
      @click="useStore().basket.basketOpen = false"
      type="button"
      class="btn-close position-fixed top-2 end-0 me-3"
      aria-label="Закрыть"
    ></button>

    <h3 class="title text-uppercase fw-medium border-bottom border-primary py-4 mb-4">
      {{ useStore().basket.title[useStore().language] }}
    </h3>

    <div class="wrapper h6 fw-medium border-bottom border-primary py-4 mb-5">
      <div v-for="professor in useStore().professors" :key="professor.title.en">
        <div
          v-if="useStore().courseFree[professor.title.en] != 0"
          class="itemWrapper course d-flex flex-column border border-primary border-rounded rounded-3 bg-body-primary p-4 mb-4 me-5"
        >
          <h2 class="align-self-center mb-3">
            {{
              useStore().teacher[useStore().language] +
              " " +
              professor.title[useStore().language]
            }}
          </h2>

          <div
            class="secondElem d-flex flex-row justify-content-between align-items-center mb-3"
          >
            <img
              class="courseCard rounded-circle"
              :src="professor.image"
              :alt="professor.title.en"
            />
            <button
              @click="(useStore().courseFree[professor.title.en] = 0), quantityGoods()"
              type="button"
              class="btn-close"
              aria-label="Закрыть"
            ></button>
          </div>
          <div class="d-flex flex-row justify-content-center h4">
            <img class="coin me-4" src="../../public/images/coin3.png" alt="coins" />
            <span class="me-2">
              {{ professor.costCourse }}
            </span>
            <span>
              {{ useStore().drachmas[useStore().language] }}
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="useStore().numGoods === 0"
        class="title h3 text-uppercase fw-medium mb-4"
      >
        {{ useStore().onChosen[useStore().language] }}
      </div>
    </div>
    <div class="title h3 text-uppercase fw-medium mb-5">
      <span>
        {{ useStore().total[useStore().language] + " " }}
      </span>
      <span>
        {{
          useStore().courseFree.Thales +
          useStore().courseFree.Parmenid +
          useStore().courseFree.Geraclit
        }}
      </span>
    </div>
    <div v-if="useStore().numGoods != 0">
      <img class="owl mb-5" src="../../public/images/owl.jpg" alt="owl" />
      <h3 class="title text-uppercase fw-medium text-center mb-2">
        {{ useStore().basket.farewell.one[useStore().language] }}
      </h3>
      <h3 class="title text-uppercase fw-medium text-center mb-2">
        {{ useStore().basket.farewell.two[useStore().language] }}
      </h3>
      <h3 class="title text-uppercase fw-medium text-center mb-2">
        {{ useStore().basket.farewell.three[useStore().language] }}
      </h3>
      <h3 class="title text-uppercase fw-medium text-center mb-2">
        {{ useStore().basket.farewell.four[useStore().language] }}
      </h3>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.course
  box-shadow: 10px 5px 5px #6198e8

@media (min-width: 400px)
  .course
    max-width: 80%
  .secondElem
    justify-content: evenly

.courseCard
  width: 50px
  height: 50px

.coin
  width: 50px
  height: 35px

.basket-right
  width: 100%

@media (min-width: 768px)
    .basket-right
      width: 75%
    .basket-left
      width: 25%
      height: 100%
    .course
      max-width: 410px

@media (min-width: 1024px)
    .basket-right
      width: 50%
    .basket-left
      width: 50%

.owl
  height: auto
  width: 100%
</style>
