import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function DeleteConfirmationModal({ isOpen, onClose, onDelete }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
          {/* Visually hidden title for accessibility */}
          <VisuallyHidden>
            <DialogTitle>Delete Confirmation</DialogTitle>
          </VisuallyHidden>
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
          <X className="h-6 w-6 text-red-500" />
          <h2 className="text-lg font-bold">Delete Task?</h2>
          <p className="text-sm text-muted-foreground">Are you sure you want to delete this task?</p>
          <div className="flex items-center gap-2">
            <Button variant="destructive" onClick={onDelete}>
              Delete
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
}