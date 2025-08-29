import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Palette } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: {
    id?: number;
    name: string;
    description?: string;
    color?: string;
  };
  onSave: (project: any) => void;
}

const ProjectModal = ({
  open,
  onOpenChange,
  project,
  onSave,
}: ProjectModalProps) => {
  const [name, setName] = useState(project?.name || "");
  const [description, setDescription] = useState(project?.description || "");
  const [color, setColor] = useState(project?.color || "bg-blue-500");

  const handleSubmit = () => {
    onSave({
      id: project?.id,
      name,
      description,
      color,
    });
    onOpenChange(false);
  };

  const colorOptions = [
    { value: "bg-blue-500", label: "Blue" },
    { value: "bg-green-500", label: "Green" },
    { value: "bg-purple-500", label: "Purple" },
    { value: "bg-red-500", label: "Red" },
    { value: "bg-yellow-500", label: "Yellow" },
    { value: "bg-indigo-500", label: "Indigo" },
  ];

  const teamMembers = [
    { id: "1", name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: "2", name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: "3", name: "Taylor Brown" },
    { id: "4", name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {project?.id ? "Edit Project" : "Create New Project"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Project Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter project name"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your project"
              rows={3}
            />
          </div>
          
          <div className="grid gap-2">
            <Label>Color</Label>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((option) => (
                <div
                  key={option.value}
                  className={`h-8 w-8 rounded-full cursor-pointer border-2 ${
                    color === option.value ? "border-primary" : "border-transparent"
                  }`}
                  style={{ backgroundColor: option.value.replace("bg-", "") }}
                  onClick={() => setColor(option.value)}
                />
              ))}
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Team Members</Label>
            <div className="flex flex-wrap gap-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted cursor-pointer hover:bg-muted/80"
                >
                  <Avatar className="h-5 w-5">
                    {member.avatar ? (
                      <AvatarImage src={member.avatar} alt={member.name} />
                    ) : (
                      <AvatarFallback className="text-xs">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="text-sm">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            {project?.id ? "Update Project" : "Create Project"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;