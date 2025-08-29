import { useState } from "react";
import { MoreHorizontal, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface CalendarEventProps {
  id: number;
  title: string;
  time: string;
  duration: string;
  attendees?: {
    name: string;
    avatar?: string;
  }[];
  color?: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const CalendarEvent = ({
  id,
  title,
  time,
  duration,
  attendees,
  color = "bg-blue-100 text-blue-800",
  onEdit,
  onDelete,
}: CalendarEventProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "p-2 rounded border-l-4 mb-1 cursor-pointer group",
        color,
        isHovered ? "ring-1 ring-primary" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{title}</h4>
          <div className="flex items-center gap-1 text-xs mt-1">
            <Clock className="h-3 w-3" />
            <span>{time} • {duration}</span>
          </div>
        </div>
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
      
      {attendees && attendees.length > 0 && (
        <div className="flex -space-x-1 mt-2">
          {attendees.slice(0, 3).map((attendee, index) => (
            <Avatar key={index} className="h-5 w-5 border border-background">
              {attendee.avatar ? (
                <AvatarImage src={attendee.avatar} alt={attendee.name} />
              ) : (
                <AvatarFallback className="text-[7px]">
                  {attendee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
          ))}
          {attendees.length > 3 && (
            <div className="h-5 w-5 rounded-full bg-muted border border-background flex items-center justify-center">
              <span className="text-[7px] text-muted-foreground">+{attendees.length - 3}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarEvent;