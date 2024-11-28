<template>
  <div>
    <h1>Parent component</h1>
    <div class="wrapper">
      <input type="text" placeholder="user name" v-model="user.name" />
      <ComponentA :user="user" />
    </div>
  </div>
</template>

<script setup>
import { reactive, provide } from 'vue'

import ComponentA from './components/a-component.vue'
const user = reactive({
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
})
provide('user', user)
</script>

<style scoped>
.wrapper {
  padding: 30px;
  background-color: #f0f0f0;
  width: 100%;
}
</style>
