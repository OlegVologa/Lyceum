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
  <div class="container">
    <img class="gimnasium mb-5 mx-auto" src="../../public/images/gymnasium.jpg" alt="gimnasium" />
    <h2 class="title text-uppercase fw-medium text-center pt-3 p-sm-3 p-lg-5">
      {{ useStore().professorsHeading[useStore().language] }}
    </h2>

    <div
      v-for="professor in useStore().professors"
      class="row my-5"
      :key="professor.title.en"
    >
      <div
        cols="12"
        class="d-flex flex-column justify-content-center align-items-center col-sm-6 col-lg-4 p-3"
        :class="[
          professor.positionLeft
            ? ['order-sm-2', 'order-lg-3']
            : ['order-sm-1', 'order-lg-1'],
        ]"
      >
        <img class="photo py-3" :src="professor.image" :alt="professor.title.en" />
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h2>{{ professor.title[useStore().language] }}</h2>

          <h3 class="fs-5 text-center">
            {{ professor.years }}
            <span>
              {{ professor.bc[useStore().language] }}
            </span>
          </h3>
        </div>
      </div>
      <div
        cols="12"
        class="d-flex flex-column justify-content-center align-items-center col-sm-12 col-lg-4 order-sm-3 order-lg-2"
      >
        <p class="text p-3">{{ professor.description[useStore().language] }}</p>
      </div>
      <div
        cols="12"
        class="d-flex flex-column justify-content-center align-items-center col-sm-6 col-lg-4 p-3"
        :class="[
          professor.positionLeft
            ? ['order-sm-1', 'order-lg-1']
            : ['order-sm-2', 'order-lg-3'],
        ]"
      >
        <h4 class="py-3">{{ useStore().course[useStore().language] }}</h4>

        <div class="accordion" :id="professor.title.en">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseOne' + professor.title.en"
                aria-expanded="true"
                :aria-controls="'collapseOne' + professor.title.en"
              >
                {{ professor.question1[useStore().language] }}
              </button>
            </h2>
            <div
              :id="'collapseOne' + professor.title.en"
              class="accordion-collapse collapse show"
              :data-bs-parent="'#' + [professor.title.en]"
            >
              <div class="accordion-body">
                {{ professor.answer1[useStore().language] }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseTwo' + professor.title.en"
                aria-expanded="true"
                :aria-controls="'collapseTwo' + professor.title.en"
              >
                {{ professor.question2[useStore().language] }}
              </button>
            </h2>
            <div
              :id="'collapseTwo' + professor.title.en"
              class="accordion-collapse collapse"
              :data-bs-parent="'#' + [professor.title.en]"
            >
              <div class="accordion-body">
                {{ professor.answer2[useStore().language] }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseThree' + professor.title.en"
                aria-expanded="true"
                :aria-controls="'collapseThree' + professor.title.en"
              >
                {{ professor.question3[useStore().language] }}
              </button>
            </h2>
            <div
              :id="'collapseThree' + professor.title.en"
              class="accordion-collapse collapse"
              :data-bs-parent="'#' + [professor.title.en]"
            >
              <div class="accordion-body">
                {{ professor.answer3[useStore().language] }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseFour' + professor.title.en"
                aria-expanded="true"
                :aria-controls="'collapseFour' + professor.title.en"
              >
                {{ professor.question4[useStore().language] }}
              </button>
            </h2>
            <div
              :id="'collapseFour' + professor.title.en"
              class="accordion-collapse collapse"
              :data-bs-parent="'#' + [professor.title.en]"
            >
              <div class="accordion-body">
                {{ professor.answer4[useStore().language] }}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn btn btn-outline-success my-3"
          data-bs-toggle="modal"
          :data-bs-target="'#' + professor.title.en + 'Modal'"
        >
          {{ useStore().button[useStore().language] }}
        </button>

        <div
          class="modal fade"
          :id="professor.title.en + 'Modal'"
          tabindex="-1"
          :aria-labelledby="professor.title.en + 'ModalLabel'"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-info-subtle">
              <div class="modal-header">
                <h1 class="modal-title fs-5" :id="professor.title.en + 'ModalLabel'">
                  {{ professor.buyCourse[useStore().language] }}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="modal-body d-flex flex-row justify-content-center align-items-center"
              >
                <img class="coin me-4" src="../../public/images/coin3.png" alt="coins" />
                <span class="me-2">
                  {{ professor.costCourse }}
                </span>
                <span>
                  {{ useStore().drachmas[useStore().language] }}
                </span>
              </div>
              <div class="modal-footer">
                <button
                  @click="
                    (useStore().courseFree[professor.title.en] = 0), quantityGoods()
                  "
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  {{ useStore().courseNo[useStore().language] }}
                </button>
                <button
                  @click="
                    (useStore().courseFree[professor.title.en] = professor.costCourse),
                      quantityGoods()
                  "
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  {{ useStore().courseYes[useStore().language] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.gimnasium
  width: 100%
  height: 100%

.photo
  width: 100%
  border-radius: 50%

.text
  text-indent: 20px

.modal-body
  font-size: 20px
  font-weight: 500

.coin
  width: 80px
  height: 50px
</style>
