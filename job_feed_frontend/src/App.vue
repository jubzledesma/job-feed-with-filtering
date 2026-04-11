<script setup lang="ts">
import { ref } from 'vue'

// A reactive variable
const message = ref('Hello from Vite + Vue!')

// A simple function
const updateMessage = () => {
  message.value = 'TypeScript is working!'
}
</script>

<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="updateMessage">Click Me</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
  font-family: sans-serif;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #33a06f;
}
</style>

