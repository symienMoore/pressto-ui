<script setup lang="ts">
const route = useRoute()
const {data} = await useFetch('/api/hello');
// console.log(data)
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <p>{{data}}!!</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
