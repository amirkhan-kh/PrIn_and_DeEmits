<template>
  <div>
    <h1>B-component</h1>
    <div class="wrapper">
      <ComponentC @counter="submitCount" @person="submitPerson" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

import ComponentC from './c-component.vue'
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

<style scoped>
.wrapper {
  padding: 30px;
  background-color: #ec4596;
  width: 100%;
}
</style>
