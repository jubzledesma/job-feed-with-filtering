// src/main.ts
import './register_web_components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppReact from './AppReact'; // Assuming AppReact.tsx

const queryClient = new QueryClient();

const reactRootElement = document.getElementById('react-app');
if (reactRootElement) {
  const root = createRoot(reactRootElement);
  root.render(
    <React.StrictMode>

      <QueryClientProvider client={queryClient}>
        <AppReact />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

