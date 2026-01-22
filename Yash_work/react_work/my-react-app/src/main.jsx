import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <App />
        <Toaster position="top-right" />
         <ReactQueryDevtools initialIsOpen={false} />
      </UserProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
