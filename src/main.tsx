import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, // 5mint
//       staleTime: 10 * 10000, //fresh data
//       refetchOnMount: false,
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
