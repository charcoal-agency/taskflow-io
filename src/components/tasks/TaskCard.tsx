import { useState } from "react";
import { 
  Calendar, 
  Flag, 
  MoreHorizontal, 
  Check,
  User,
  Paperclip
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  id: number;
  title: string;
  project?: string;
  dueDate?: string;
  priority?: "low" | "medium" | "high";
  completed: boolean;
  assignee?: {
    name: string;
    avatar?: string;
  };
  attachments?: number;
  onToggleComplete: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const priorityClasses = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const priorityIcons = {
  low: <Flag className="h-3 w-3 text-green-500" />,
  medium: <Flag className="h-3 w-3 text-yellow-500" />,
  high: <Flag className="h-3 w-3 text-red-500" />,
};

const TaskCard = ({
  id,
  title,
  project,
  dueDate,
  priority = "medium",
  completed,
  assignee,
  attachments,
  onToggleComplete,
  onEdit,
  onDelete,
}: TaskCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "border rounded-lg p-4 transition-all",
        completed ? "bg-muted/30" : "hover:shadow-md",
        isHovered ? "ring-1 ring-primary" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <Checkbox 
          checked={completed} 
          onCheckedChange={() => onToggleComplete(id)}
          className="mt-0.5"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className={cn(
              "font-medium text-sm",
              completed ? "line-through text-muted-foreground" : ""
            )}>
              {title}
            </h3>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onEdit?.(id)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onDelete?.(id)} className="text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {project && (
            <p className="text-xs text-muted-foreground mt-1">
              {project}
            </p>
          )}
          
          <div className="flex items-center gap-3 mt-3">
            {dueDate && (
              <div className="flex items-center gap-1 text-xs">
                <Calendar className="h-3 w-3" />
                <span>{dueDate}</span>
              </div>
            )}
            
            <span className={cn(
              "text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1",
              priorityClasses[priority]
            )}>
              {priorityIcons[priority]}
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </span>
            
            {attachments && attachments > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Paperclip className="h-3 w-3" />
                <span>{attachments}</span>
              </div>
            )}
          </div>
        </div>
        
        {assignee && (
          <Avatar className="h-6 w-6">
            {assignee.avatar ? (
              <AvatarImage src={assignee.avatar} alt={assignee.name} />
            ) : (
              <AvatarFallback className="text-xs">
                {assignee.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default TaskCard;