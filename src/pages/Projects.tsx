"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: "Website Redesign", 
      description: "Complete overhaul of company website", 
      progress: 65, 
      tasks: 12,
      members: 5,
      color: "bg-blue-500",
      membersList: ["Alex Johnson", "Sam Smith", "Taylor Brown"]
    },
    { 
      id: 2, 
      name: "Product Launch", 
      description: "Launch of new SaaS product", 
      progress: 30, 
      tasks: 8,
      members: 3,
      color: "bg-green-500",
      membersList: ["Jordan Lee", "Taylor Brown"]
    },
    { 
      id: 3, 
      name: "Marketing Campaign", 
      description: "Q3 marketing initiatives", 
      progress: 90, 
      tasks: 5,
      members: 7,
      color: "bg-purple-500",
      membersList: ["Alex Johnson", "Sam Smith", "Jordan Lee", "Taylor Brown"]
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
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            progress={project.progress}
            tasks={project.tasks}
            members={project.members}
            color={project.color}
            membersList={project.membersList}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;