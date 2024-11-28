<template>
  <div>
    <h1>C-component</h1>
    <div class="wrapper">
      <p></p>
      <ComponentD @counter="submitCount" @person="submitPerson" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import ComponentD from './d-component.vue'
const emit = defineEmits()
const submitCount = (e) => {
  console.log(e)
  console.log('cccc')
  emit('counter', e)
}

const submitPerson = (e) => {
  console.log(e)
  console.log('pppp')
  emit('counter', e)
}
</script>

<style  scoped>
.wrapper {
  padding: 30px;
  background-color: #2b734b;
  width: 100%;
}
</style>
