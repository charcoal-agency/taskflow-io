import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Bell, Check, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "task" | "project" | "mention" | "system";
  user?: {
    name: string;
    avatar?: string;
  };
}

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Task Assigned",
      description: "Alex assigned you a new task: Design homepage",
      time: "2 min ago",
      read: false,
      type: "task",
      user: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" }
    },
    {
      id: 2,
      title: "Project Update",
      description: "Website Redesign project is now 75% complete",
      time: "1 hour ago",
      read: false,
      type: "project"
    },
    {
      id: 3,
      title: "Mentioned in Comment",
      description: "Sam mentioned you in a comment on Project Requirements",
      time: "3 hours ago",
      read: true,
      type: "mention",
      user: { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" }
    },
    {
      id: 4,
      title: "System Update",
      description: "Scheduled maintenance will occur this weekend",
      time: "1 day ago",
      read: true,
      type: "system"
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "task":
        return <Check className="h-4 w-4 text-blue-500" />;
      case "project":
        return <Check className="h-4 w-4 text-green-500" />;
      case "mention":
        return <Bell className="h-4 w-4 text-yellow-500" />;
      case "system":
        return <Bell className="h-4 w-4 text-purple-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <span className="text-xs text-muted-foreground">
            {unreadCount} unread
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {notifications.map((notification) => (
            <DropdownMenuItem 
              key={notification.id} 
              className={cn(
                "flex items-start gap-3 p-3 cursor-pointer",
                !notification.read && "bg-muted/50"
              )}
              onClick={() => markAsRead(notification.id)}
            >
              {notification.user ? (
                <Avatar className="h-8 w-8">
                  {notification.user.avatar ? (
                    <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                  ) : (
                    <AvatarFallback>
                      {notification.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
              ) : (
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  {getTypeIcon(notification.type)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{notification.title}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {notification.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {notification.time}
                </p>
              </div>
              {!notification.read && (
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="p-1">
          <Button 
            variant="ghost" 
            className="w-full text-sm" 
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark all as read
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;