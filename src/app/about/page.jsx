'use client';

import { Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPage() {

  const handleRedirect = (url) => {
    window.open(url, '_blank'); // Opens in a new tab
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Task Application</h1>
          <p className="text-lg text-muted-foreground">
            Task Application is a modern task management application built with React and
            Tailwind CSS. It helps you organize your tasks efficiently with features
            like priority levels, due dates, and status tracking.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Create, edit, and delete tasks</li>
            <li>Set priority levels and due dates</li>
            <li>Mark tasks as completed</li>
            <li>Filter and search tasks</li>
            <li>Sort by priority or due date</li>
            <li>Dark mode support</li>
            <li>Responsive design</li>
            <li>Local storage persistence</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2" onClick={() => handleRedirect("https://github.com/DevWithCJ")}>
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => handleRedirect("mailto:dayagcj491@gmail.com")}>
              <Mail className="h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

