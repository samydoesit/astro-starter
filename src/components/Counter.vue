<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg?: string }>()
const count = ref<number>(0)
function add() {
  return count.value = count.value + 1
}
function subtract() {
  return count.value = count.value - 1
}

// return {
//   count,
//   add,
//   subtract,
// }
</script>

<template>
  <div class="counter">
    <button @click="subtract()">
      -
    </button>
    <pre>{{ count }}</pre>
    <button @click="add()">
      +
    </button>
  </div>
  <h3 v-if="msg">
    {{ msg }}
  </h3>
  <div class="counter-message">
    <slot />
  </div>
</template>

<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
}

.counter-message {
  text-align: center;
}
</style>
