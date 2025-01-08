'use client'

import { useState } from 'react'
import { TaskForm } from '@/components/task-form'
import { TaskList } from '@/components/task-list'
import { useTasks } from '@/hooks/useTasks'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export default function TasksPage() {
  const { tasks, addTask, updateTask, deleteTask, toggleTaskStatus } = useTasks()
  const [editingTask, setEditingTask] = useState(null)

  const handleEdit = (task) => {
    setEditingTask(task)
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Task Management</h1>
        <TaskForm onSubmit={addTask} />
      </div>
      
      <TaskList
        tasks={tasks}
        onToggleStatus={toggleTaskStatus}
        onDelete={deleteTask}
        onEdit={handleEdit}
      />

      <Dialog open={!!editingTask} onOpenChange={() => setEditingTask(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          {editingTask && (
            <TaskForm
              onSubmit={(updates) => {
                updateTask(editingTask.id, updates)
                setEditingTask(null)
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

