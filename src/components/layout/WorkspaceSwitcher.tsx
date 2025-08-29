"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown,
  Plus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WorkspaceSwitcher = () => {
  const [activeWorkspace, setActiveWorkspace] = useState("Personal");
  
  const workspaces = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Work" },
    { id: 3, name: "Freelance" }
  ];

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="font-medium">{activeWorkspace}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {workspaces.map((workspace) => (
            <DropdownMenuItem 
              key={workspace.id}
              onClick={() => setActiveWorkspace(workspace.name)}
              className={activeWorkspace === workspace.name ? "bg-primary/10" : ""}
            >
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              {workspace.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            Create Workspace
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WorkspaceSwitcher;