'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export function MainNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="text-xl font-bold">Task Application</Link>
        </div>
        <div className="flex items-center space-x-4 flex-1">
          <Link
            href="/"
            className={`text-sm transition-colors hover:text-primary ${
              pathname === '/' ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link
            href="/tasks"
            className={`text-sm transition-colors hover:text-primary ${
              pathname === '@/app/TasksPage' ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            Tasks
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors hover:text-primary ${
              pathname === '@/about/AboutPage' ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            About
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  )
}

