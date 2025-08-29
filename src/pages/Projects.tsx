"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: "Website Redesign", 
      description: "Complete overhaul of company website", 
      progress: 65, 
      tasks: 12,
      members: 5,
      color: "bg-blue-500"
    },
    { 
      id: 2, 
      name: "Product Launch", 
      description: "Launch of new SaaS product", 
      progress: 30, 
      tasks: 8,
      members: 3,
      color: "bg-green-500"
    },
    { 
      id: 3, 
      name: "Marketing Campaign", 
      description: "Q3 marketing initiatives", 
      progress: 90, 
      tasks: 5,
      members: 7,
      color: "bg-purple-500"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full rounded-md border pl-8 pr-4 py-2"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className={`h-3 w-3 rounded-full ${project.color} mt-1`}></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <h3 className="text-xl font-semibold mt-3">{project.name}</h3>
            <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} />
            </div>
            
            <div className="flex justify-between mt-4 text-sm">
              <span>{project.tasks} tasks</span>
              <span>{project.members} members</span>
            </div>
            
            <Button className="w-full mt-4" variant="outline">
              View Project
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;