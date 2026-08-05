"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode, useState } from "react";

import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactModal } from "@/components/modals/ContactModal";
import { PageLoader } from "@/components/animations/PageLoader";

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delay={0}>
          <ContactModalProvider>
            <PageLoader />
            {children}
            <ContactModal />
          </ContactModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
