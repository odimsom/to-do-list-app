<script setup lang="ts">
defineOptions({
  name: 'Sidebar-Layout',
})
</script>

<template>
  <aside class="col-start-1 row-start-1 row-end-3 bg-[#1E1E1E] text-gray-200 flex flex-col p-6">
    <!-- Logo -->
    <header class="flex items-center space-x-2 mb-8">
      <span class="text-yellow-400 text-xl">⚡</span>
      <h1 class="text-xl font-bold">
        TO<span class="text-yellow-400 font-extrabold">do</span>LIST
      </h1>
    </header>

    <!-- My Lists -->
    <nav class="flex-1">
      <h2 class="uppercase text-gray-400 text-sm tracking-wider mb-3">My Lists</h2>
      <ul class="space-y-2">
        <!-- Lista activa -->
        <li>
          <button
            class="w-full flex justify-between items-center px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium"
          >
            <span>Life</span>
            <span class="text-gray-800 font-bold">×</span>
          </button>
        </li>

        <!-- Otras listas -->
        <li>
          <button
            class="w-full text-left px-4 py-2 rounded-lg text-gray-300 hover:bg-[#2A2A2A] transition"
          >
            Work
          </button>
        </li>
      </ul>

      <!-- Nueva lista -->
      <button
        class="mt-4 text-left px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#2A2A2A] rounded-lg transition w-full"
      >
        + New List
      </button>
    </nav>

    <!-- Footer opcional -->
    <footer class="mt-auto pt-6">
      <slot name="sidebar-footer">
        <small class="text-sm text-gray-500">Items: 0</small>
      </slot>
    </footer>
  </aside>
</template>
