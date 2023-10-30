// Dark/Light Theme Provider
"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";

const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;
