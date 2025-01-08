import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ListTodo, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Manage Your Tasks with Ease
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay organized and boost your productivity with our intuitive task management solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/tasks">
                Go to Tasks
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg">
            <ListTodo className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Task Organization</h2>
            <p className="text-muted-foreground text-center">
              Create, edit, and organize your tasks with an intuitive interface
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg">
            <CheckCircle className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Track Progress</h2>
            <p className="text-muted-foreground text-center">
              Mark tasks as complete and filter by status to stay on top of your work
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg">
            <Clock className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Due Dates</h2>
            <p className="text-muted-foreground text-center">
              Set priorities and due dates to manage your time effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

