import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  progress: number;
  tasks: number;
  members: {
    name: string;
    avatar?: string;
  }[];
  color: string;
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const ProjectCard = ({
  id,
  name,
  description,
  progress,
  tasks,
  members,
  color,
  onView,
  onEdit,
  onDelete,
}: ProjectCardProps) => {
  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className={`h-3 w-3 rounded-full ${color}`}></div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onView?.(id)}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit?.(id)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete?.(id)} className="text-red-600">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <h3 className="text-lg font-semibold mt-3">{name}</h3>
      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{description}</p>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-muted-foreground">{tasks} tasks</span>
        <div className="flex -space-x-2">
          {members.slice(0, 3).map((member, index) => (
            <Avatar key={index} className="h-6 w-6 border-2 border-background">
              {member.avatar ? (
                <AvatarImage src={member.avatar} alt={member.name} />
              ) : (
                <AvatarFallback className="text-xs">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
          ))}
          {members.length > 3 && (
            <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
              <span className="text-xs text-muted-foreground">+{members.length - 3}</span>
            </div>
          )}
        </div>
      </div>
      
      <Button 
        className="w-full mt-4" 
        variant="outline" 
        size="sm"
        onClick={() => onView?.(id)}
      >
        View Project
      </Button>
    </div>
  );
};

export default ProjectCard;