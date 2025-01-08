import { Check, Pencil, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DeleteConfirmationModal } from '@/components/DeleteConfirmationModal';
import { useState } from 'react'


export function TaskCard({ task, onToggleStatus, onDelete, onEdit }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDelete = () => {
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        onDelete(task.id);
        setIsDeleteModalOpen(false);
    };
  
    const priorityColors = {
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  }

  return (
    <div className="rounded-lg border p-4 space-y-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className={`font-medium line-clamp-1 ${
            task.status === 'completed' ? 'line-through text-muted-foreground' : ''
          }`}>
            {task.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
        </div>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleStatus(task.id)}
          >
            <Check className={`h-4 w-4 ${
              task.status === 'completed' ? 'text-green-500' : 'text-muted-foreground'
            }`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(task)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
          >
            <Trash className="h-4 w-4" />
          </Button>
          
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleConfirmDelete}
      />
    </div>
  )
}

