"use client";

import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Flag, 
  MoreHorizontal,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TaskCardProps {
  id: number;
  title: string;
  project: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
  assignedTo?: string;
  onToggle: (id: number) => void;
}

const TaskCard = ({ 
  id, 
  title, 
  project, 
  dueDate, 
  priority, 
  completed, 
  assignedTo,
  onToggle 
}: TaskCardProps) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={`p-4 border rounded-lg hover:bg-muted/50 transition-colors ${completed ? "opacity-75" : ""}`}>
      <div className="flex items-start gap-3">
        <Checkbox 
          checked={completed} 
          onCheckedChange={() => onToggle(id)}
          className="mt-1"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className={`font-medium ${completed ? "line-through text-muted-foreground" : ""}`}>
              {title}
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <p className="text-sm text-muted-foreground mt-1">{project}</p>
          
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{dueDate}</span>
            </div>
            
            <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor()}`}>
              {priority}
            </span>
            
            {assignedTo && (
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">
                  {assignedTo.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;