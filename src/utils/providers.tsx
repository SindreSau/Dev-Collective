"use client";
// app/providers.tsx

// For configuring NextUI
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider enableSystem attribute="class">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
