<template>
  <div>
    <h1>A-component</h1>

    <div class="wrapper">
      <p>{{ str }}</p>
      <ComponentB @counter="submitCount" @person="submitPerson" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

import { inject } from 'vue'
import ComponentB from './b-component.vue'
const str = inject('user')
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
  background-color: #458dec;
  width: 100%;
}
</style>
