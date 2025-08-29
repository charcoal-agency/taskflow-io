import { Mail, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "online" | "away" | "offline";
  tasks: number;
  avatar?: string;
  onViewProfile?: (id: number) => void;
  onSendMessage?: (id: number) => void;
  onAssignTask?: (id: number) => void;
}

const TeamMemberCard = ({
  id,
  name,
  role,
  email,
  status,
  tasks,
  avatar,
  onViewProfile,
  onSendMessage,
  onAssignTask,
}: TeamMemberCardProps) => {
  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500",
    offline: "bg-gray-500",
  };

  return (
    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              {avatar ? (
                <AvatarImage src={avatar} alt={name} />
              ) : (
                <AvatarFallback>
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
            <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${statusColors[status]}`}></div>
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onViewProfile?.(id)}>
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSendMessage?.(id)}>
              Send Message
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAssignTask?.(id)}>
              Assign Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Mail className="h-3 w-3" />
          <span>{email}</span>
        </div>
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
          status === "online" ? "bg-green-100 text-green-800" : 
          status === "away" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="mt-3 pt-3 border-t">
        <p className="text-sm">
          <span className="font-medium">{tasks}</span> tasks assigned
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;