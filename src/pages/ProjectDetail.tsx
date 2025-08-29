"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Flag,
  BarChart3,
  Edit,
  Plus,
  MoreHorizontal
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import TaskList from "@/components/tasks/TaskList";
import TeamCollaboration from "@/components/team/TeamCollaboration";
import TaskAnalytics from "@/components/tasks/TaskAnalytics";
import TaskTemplates from "@/components/tasks/TaskTemplates";

const ProjectDetail = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design homepage", project: "Website Redesign", dueDate: "Today", priority: "High", completed: false, assignedTo: "Alex Johnson" },
    { id: 2, title: "Meeting with client", project: "Product Launch", dueDate: "Tomorrow", priority: "Medium", completed: false },
    { id: 3, title: "Update documentation", project: "Marketing Campaign", dueDate: "In 2 days", priority: "Low", completed: true },
  ]);

  const project = {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of company website to improve user experience and modernize the brand.",
    progress: 65,
    tasks: 12,
    members: 5,
    color: "bg-blue-500",
    startDate: "Oct 1, 2023",
    dueDate: "Dec 15, 2023",
    membersList: [
      "Alex Johnson", 
      "Sam Smith", 
      "Taylor Brown",
      "Jordan Lee",
      "Casey Davis"
    ]
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className={`h-4 w-4 rounded-full ${project.color}`}></div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Edit Project
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>Key metrics and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Team Members</h3>
                <div className="flex -space-x-2">
                  {project.membersList.map((member, index) => (
                    <Avatar key={index} className="border-2 border-background">
                      <AvatarImage 
                        src={`https://i.pravatar.cc/150?u=${member.replace(/\s+/g, '')}`} 
                        alt={member} 
                      />
                      <AvatarFallback>
                        {member.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <Button variant="ghost" size="icon" className="border-2 border-dashed">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Project Tasks</span>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </CardTitle>
              <CardDescription>Tasks related to this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg">
                <div className="border-b p-4 font-medium">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-1"></div>
                    <div className="col-span-5">Task</div>
                    <div className="col-span-2">Project</div>
                    <div className="col-span-2">Due Date</div>
                    <div className="col-span-1">Priority</div>
                    <div className="col-span-1"></div>
                  </div>
                </div>
                <div className="divide-y">
                  <TaskList tasks={tasks} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <TaskAnalytics />
          
          <TaskTemplates />
        </div>
        
        <div className="space-y-6">
          <TeamCollaboration />
          
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
              <CardDescription>Key milestones and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <p className="font-medium">Project Kickoff</p>
                    <p className="text-sm text-muted-foreground">Oct 1, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-500">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <p className="font-medium">Design Phase Complete</p>
                    <p className="text-sm text-muted-foreground">Nov 15, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-yellow-500">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <p className="font-medium">Development Phase</p>
                    <p className="text-sm text-muted-foreground">Nov 16 - Dec 10, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-red-500">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <p className="font-medium">Project Deadline</p>
                    <p className="text-sm text-muted-foreground">Dec 15, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project Files</CardTitle>
              <CardDescription>Important documents and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-800 text-xs">PDF</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Project Requirements</p>
                      <p className="text-xs text-muted-foreground">2.4 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center">
                      <span className="text-green-800 text-xs">FIG</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Design Mockups</p>
                      <p className="text-xs text-muted-foreground">5.1 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-800 text-xs">DOC</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Meeting Notes</p>
                      <p className="text-xs text-muted-foreground">45 KB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button className="w-full mt-4" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;