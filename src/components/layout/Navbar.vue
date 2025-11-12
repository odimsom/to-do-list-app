<script setup lang="ts">
defineOptions({
  name: 'NavBar',
})
</script>
<template>
  <header class="bg-aqua col-span-3 row-start-1 row-end-2">
    <div class="container flex justify-between items-center gap-4 py-2 px-6">
      <div class="text-white text-3xl font-bold">TOdo<span class="text-yellow-300">LIST</span></div>
      <ul class="nav-links flex space-x-6 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>
</template>
