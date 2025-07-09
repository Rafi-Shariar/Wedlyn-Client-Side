import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { router } from './routes/Route.jsx';
import AuthProvider from "./context/AuthProvider.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
