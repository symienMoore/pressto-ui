<script setup lang="ts">
const {data, status} = await useFetch("/api/hello");
console.log(status)

</script>
<template>
  <h1>Dashboard</h1>
  <p>
    this is the dashboard.
    {{data}}
  </p>
</template>