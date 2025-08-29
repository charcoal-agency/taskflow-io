"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import TaskCard from "@/components/tasks/TaskCard";
import ProjectCard from "@/components/projects/ProjectCard";
import DocumentCard from "@/components/documents/DocumentCard";
import TeamMemberCard from "@/components/team/TeamMemberCard";

const SearchResults = () => {
  // In a real app, you would get search params from the URL
  // For now, we'll simulate search results
  const [searchTerm, setSearchTerm] = useState("design");
  
  // Simulated search results
  const tasks = [
    { id: 1, title: "Design homepage", project: "Website Redesign", dueDate: "Today", priority: "High", completed: false, assignedTo: "Alex Johnson" },
    { id: 2, title: "Create wireframes", project: "Website Redesign", dueDate: "In 3 days", priority: "High", completed: false },
  ];
  
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
  ];
  
  const documents = [
    { id: 1, name: "Design Mockups", type: "pdf", updatedAt: "2 days ago" },
    { id: 2, name: "Design Assets", type: "folder", updatedAt: "1 week ago", items: 8, isFolder: true },
  ];
  
  const teamMembers = [
    { 
      id: 2, 
      name: "Sam Smith", 
      role: "Designer", 
      email: "sam@example.com", 
      status: "online",
      tasks: 8
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Search Results</h1>
        <p className="text-muted-foreground">
          Found {tasks.length + projects.length + documents.length + teamMembers.length} results for "{searchTerm}"
        </p>
      </div>

      {tasks.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                project={task.project}
                dueDate={task.dueDate}
                priority={task.priority}
                completed={task.completed}
                assignedTo={task.assignedTo}
                onToggle={() => {}}
              />
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
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
      )}

      {documents.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                id={doc.id}
                name={doc.name}
                type={doc.type}
                updatedAt={doc.updatedAt}
                isFolder={doc.isFolder}
                items={doc.items}
              />
            ))}
          </div>
        </div>
      )}

      {teamMembers.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                email={member.email}
                status={member.status}
                tasks={member.tasks}
              />
            ))}
          </div>
        </div>
      )}

      {tasks.length === 0 && projects.length === 0 && documents.length === 0 && teamMembers.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Search className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-1">No results found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or filters
          </p>
          <Button>Clear Search</Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;