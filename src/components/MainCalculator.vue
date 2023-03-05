<script setup lang="ts">
import {useStore} from "vuex";
import {computed, ref, watch, watchEffect} from 'vue';
import BasicButton from "./design/BasicButton.vue";

const store = useStore();
const result = computed(() => {
  return store.getters.getResultStrings
})
const calItems = computed(() => {
  return ['C', '( )', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '=']
})

const itemSelect = (item: string) => {
  store.commit('setResultStrings', item);
  console.log(item);
}

</script>

<template>
  <v-app id="inspire" class="d-flex ml-2 mr-2 h-screen">
    <div class="d-flex justify-end">
      <div class="result-font mr-3">{{ result }}</div>
    </div>
    <v-main class="mt-5 ml-2 mr-2 flex-row">
      <!-- main -->
      <div v-for="(item, idx) in calItems" class="d-inline-flex">
        <BasicButton
            :data="item"
            :idx="idx"
            class="ma-1"
            @itemSelect="itemSelect(item)"
            :key="item"
        />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>

.result-font {
  font-size: 3rem;
  display: flex;
}


</style>
