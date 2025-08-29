"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Folder } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: "Website Redesign", 
      description: "Complete overhaul of company website with modern design and improved UX", 
      progress: 65, 
      tasks: 12,
      members: [
        { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
        { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" },
        { name: "Taylor Brown" },
        { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
        { name: "Morgan Lee", avatar: "https://i.pravatar.cc/150?u=5" },
      ],
      color: "bg-blue-500"
    },
    { 
      id: 2, 
      name: "Product Launch", 
      description: "Launch of new SaaS product with comprehensive marketing campaign", 
      progress: 30, 
      tasks: 8,
      members: [
        { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
        { name: "Taylor Brown" },
        { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
      ],
      color: "bg-green-500"
    },
    { 
      id: 3, 
      name: "Marketing Campaign", 
      description: "Q3 marketing initiatives for brand awareness and lead generation", 
      progress: 90, 
      tasks: 5,
      members: [
        { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" },
        { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
        { name: "Morgan Lee", avatar: "https://i.pravatar.cc/150?u=5" },
        { name: "Casey Smith", avatar: "https://i.pravatar.cc/150?u=6" },
        { name: "Riley Jones", avatar: "https://i.pravatar.cc/150?u=7" },
        { name: "Quinn Davis", avatar: "https://i.pravatar.cc/150?u=8" },
        { name: "Parker Wilson" },
      ],
      color: "bg-purple-500"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleSaveProject = (project: any) => {
    console.log("Saving project:", project);
    // In a real app, you would save this to your database
    // For now, we'll just log it
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar 
          placeholder="Search projects..." 
          onSearch={setSearchQuery}
          className="flex-1"
        />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter(project => 
            project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              progress={project.progress}
              tasks={project.tasks}
              members={project.members}
              color={project.color}
              onView={(id) => console.log("View project", id)}
              onEdit={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
              onDelete={(id) => console.log("Delete project", id)}
            />
          ))}
      </div>

      {projects.filter(project => 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Folder className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No projects found</h3>
          <p className="text-muted-foreground mt-1">
            Try adjusting your search or create a new project
          </p>
          <Button className="mt-4" onClick={() => setIsModalOpen(true)}>Create New Project</Button>
        </div>
      )}
      
      <ProjectModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={selectedProject}
        onSave={handleSaveProject}
      />
    </div>
  );
};

export default Projects;