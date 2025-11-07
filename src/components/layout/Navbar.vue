<script setup lang="ts">
defineOptions({
  name: 'NavBar',
})
</script>
<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <slot name="logo">MyApp</slot>
      </div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>
