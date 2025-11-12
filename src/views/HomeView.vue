<script setup lang="ts">
// import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
// import Footer from '@/components/layout/Footer.vue'

defineOptions({ name: 'HomeView' })
</script>

<template>
  <div
    class="min-h-screen bg-[brown] grid grid-cols-[minmax(10%_20%)_1fr_20%] grid-rows-[50px_1fr]"
  >
    <!-- <Navbar /> -->
    <Sidebar />
    <main class="bg-[#0f0f0f] col-start-2 col-span-2 row-start-1 row-end-3">
      <section class="h-full flex flex-col items-center justify-center space-y-8 text-white p-6">
        <!-- Encabezado -->
        <header class="text-center">
          <p class="text-gray-300 text-lg">
            {{ new Date().toLocaleString('en-US', { month: 'short', day: 'numeric' }) }}
          </p>
          <h1 class="text-3xl font-semibold mt-1">Good Afternoon.</h1>
          <p class="text-gray-400">What's your plan for today?</p>
        </header>

        <!-- Input para añadir TODO -->
        <div class="w-full max-w-md">
          <input
            type="text"
            placeholder="Add Todo"
            class="w-full bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-gray-300"
          />
        </div>

        <!-- Lista de tareas -->
        <ul class="w-full max-w-md space-y-3">
          <!-- Ejemplo de tarea -->
          <li
            class="bg-white/10 hover:bg-white/20 transition rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p class="text-gray-300 text-sm mb-1">2023-02-04</p>
              <p class="font-medium">Take out the bins</p>
            </div>
            <span class="text-gray-400 text-sm">#life</span>
          </li>

          <li
            class="bg-white/10 hover:bg-white/20 transition rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p class="text-gray-300 text-sm mb-1">2023-02-05</p>
              <p class="font-medium">Go to gym</p>
            </div>
            <span class="text-gray-400 text-sm">#life</span>
          </li>

          <li
            class="bg-white/10 hover:bg-white/20 transition rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p class="text-gray-300 text-sm mb-1">2023-02-09</p>
              <p class="font-medium">Brainstorm blog post ideas</p>
            </div>
            <span class="text-gray-400 text-sm">#blog</span>
          </li>
        </ul>
      </section>
    </main>
    <!-- Sidebar-right component inserted in HomeView.vue -->
    <aside
      class="col-start-4 row-start-1 row-end-3 bg-[#1E1E1E] text-gray-200 flex flex-col items-center p-6"
    >
      <!-- Encabezado -->
      <header class="flex items-center space-x-2 mb-6">
        <span class="text-yellow-400 text-xl">📅</span>
        <h1 class="text-xl font-bold">Calendar</h1>
      </header>

      <!-- Calendario -->
      <section class="w-full flex flex-col items-center">
        <!-- Navegación de mes -->
        <div class="flex items-center justify-center space-x-4 mb-3">
          <button class="text-gray-400 hover:text-white">◀</button>
          <div class="text-center">
            <p class="text-lg font-semibold">2023</p>
            <p class="text-gray-400">Feb</p>
          </div>
          <button class="text-gray-400 hover:text-white">▶</button>
        </div>

        <!-- Días de la semana -->
        <div class="grid grid-cols-7 gap-2 text-center text-gray-400 text-sm mb-2">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span
          ><span>S</span>
        </div>

        <!-- Días del mes -->
        <div class="grid grid-cols-7 gap-2 text-center">
          <!-- ejemplo de días -->
          <span class="text-gray-500">29</span>
          <span class="text-gray-500">30</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span
            class="bg-yellow-400 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mx-auto font-semibold"
            >4</span
          >
          <span>5</span>

          <span
            class="bg-gray-700 text-gray-300 rounded-full w-8 h-8 flex items-center justify-center mx-auto"
            >9</span
          >
          <span
            class="bg-gray-700 text-gray-300 rounded-full w-8 h-8 flex items-center justify-center mx-auto"
            >10</span
          >
        </div>

        <!-- Botón mostrar todo -->
        <button
          class="mt-6 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition"
        >
          Show All
        </button>
      </section>

      <!-- Ordenar tareas -->
      <section class="w-full mt-8">
        <h2 class="uppercase text-gray-400 text-sm tracking-wider mb-3">Sort Method</h2>
        <div class="grid grid-cols-2 gap-3">
          <button class="bg-yellow-400 text-gray-900 rounded-lg py-2 font-medium">None</button>
          <button class="bg-gray-700 text-gray-300 rounded-lg py-2 hover:bg-gray-600">Date</button>
          <button class="bg-gray-700 text-gray-300 rounded-lg py-2 hover:bg-gray-600">Name</button>
          <button class="bg-gray-700 text-gray-300 rounded-lg py-2 hover:bg-gray-600">
            Priority
          </button>
          <button class="col-span-2 bg-gray-700 text-gray-300 rounded-lg py-2 hover:bg-gray-600">
            Tag
          </button>
        </div>
      </section>
    </aside>

    <!-- <Footer /> -->
  </div>
</template>
