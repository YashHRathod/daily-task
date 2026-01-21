import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <App />
         <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="top-right" />
      </UserProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
