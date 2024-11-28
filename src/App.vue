<template>
  <div>
    <header>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/service">Service</router-link></li>
      </ul>
    </header>
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
