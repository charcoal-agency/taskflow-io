"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet-custom";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  Flag,
  BarChart3
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface ProjectDetailSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: any;
}

const ProjectDetailSheet = ({ open, onOpenChange, project }: ProjectDetailSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>{project.name}</SheetTitle>
          <SheetDescription>{project.description}</SheetDescription>
        </SheetHeader>
        <div className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <div className={`h-3 w-3 rounded-full ${project.color}`}></div>
            <Button>Edit Project</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center text-muted-foreground">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span className="text-sm">Progress</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">{project.progress}%</div>
                <Progress value={project.progress} className="mt-2" />
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center text-muted-foreground">
                <Flag className="h-4 w-4 mr-2" />
                <span className="text-sm">Tasks</span>
              </div>
              <div className="mt-2 text-2xl font-bold">{project.tasks}</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center text-muted-foreground">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm">Members</span>
              </div>
              <div className="mt-2 text-2xl font-bold">{project.members}</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">Due Date</span>
              </div>
              <div className="mt-2 text-2xl font-bold">Dec 15</div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Team Members</h3>
            <div className="flex -space-x-2">
              {project.membersList?.map((member: string, index: number) => (
                <Avatar key={index} className="border-2 border-background">
                  <AvatarFallback>
                    {member.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              )) || <p className="text-muted-foreground text-sm">No members assigned</p>}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Alex Johnson</span> completed task "Design homepage"
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Sam Smith</span> commented on task "Meeting with client"
                  </p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectDetailSheet;