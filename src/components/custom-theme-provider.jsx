'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function CustomThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

