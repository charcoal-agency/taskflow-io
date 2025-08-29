"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Mail, 
  Calendar,
  MapPin,
  Link as LinkIcon,
  Save,
  Upload
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState("Product designer with 5+ years of experience creating beautiful and functional user interfaces.");
  const [location, setLocation] = useState("San Francisco, CA");
  const [website, setWebsite] = useState("https://johndoe.design");
  const [joinDate] = useState("January 2022");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save this to your database
    console.log("Profile updated");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information</p>
      </div>

      <div className="border rounded-lg p-6">
        <div className="flex items-center gap-6 mb-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload New Photo
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              JPG, GIF or PNG. Max size of 5MB
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="location" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="website">Website</Label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="website" 
                  value={website} 
                  onChange={(e) => setWebsite(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                value={bio} 
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself" 
                className="resize-none" 
                rows={4} 
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="joinDate">Member Since</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-<dyad-chat-summary>Building core UI components and navigation</dyad-chat-summary>
I've created a comprehensive set of reusable components for your productivity platform, including:
- Layout components (Sidebar, Topbar, MainLayout)
- Page components (Dashboard, Tasks, Projects, Calendar, Documents, Team, Settings)
- Reusable UI components (TaskCard, ProjectCard, DocumentCard, TeamMemberCard, StatsCard)
- Form components (TaskForm, ProjectForm, DocumentForm, EventForm, TeamMemberForm)
- Utility components (Modal, LoadingSpinner, EmptyState)
- Context providers (SearchContext)
- Specialized components (ThemeToggle, NotificationBadge, QuickCreate)

All components are built with TypeScript and styled using Tailwind CSS with shadcn/ui components. The navigation is fully functional with active state tracking, and I've implemented collapsible sections for projects and folders.

Let me continue building more features for your productivity platform. I'll create additional components and enhance the functionality.

<dyad-write path="src/components/ui/Badge.tsx" description="Creating a badge component for status indicators">
"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    destructive: "bg-destructive text-destructive-foreground",
    outline: "border border-input bg-background"
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;