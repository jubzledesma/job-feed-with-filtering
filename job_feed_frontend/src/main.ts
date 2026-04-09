// src/main.ts
import { createApp } from 'vue';
import AppVue from './App.vue';

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import AppReact from './AppReact'; // Assuming AppReact.tsx

// 1. Mount Vue
createApp(AppVue).mount('#vue-app');

// 2. Mount React
const reactRootElement = document.getElementById('react-app');
if (reactRootElement) {
  const root = createRoot(reactRootElement);
  root.render(createElement(AppReact));
}

