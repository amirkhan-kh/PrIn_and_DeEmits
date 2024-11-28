<template>
  <div>
    <h1>D-component</h1>
    <p>{{ str }}</p>
    <button @click="setData">set count</button>
  </div>
</template>

<script setup>
import { inject, defineEmits } from 'vue'
// const userperson = reactive([
//   { id: 1, name: 'Alice', age: 28 },
//   { id: 2, name: 'Bob', age: 32 },
//   { id: 3, name: 'Charlie', age: 26 },
// ])
const str = inject('user')
const emit = defineEmits(['counter'])

const setData = () => {
  emit('counter', 11)
}
</script>

<style scoped>
.wrapper {
  padding: 30px;
  background-color: #6b732b;
  width: 100%;
}
</style>
