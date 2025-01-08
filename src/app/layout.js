import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav'
import { CustomThemeProvider } from '@/components/custom-theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <MainNav />
            <main>{children}</main>
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  )
}

