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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Flag, User, Paperclip } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task?: {
    id?: number;
    title: string;
    description?: string;
    projectId?: number;
    dueDate?: string;
    priority?: "low" | "medium" | "high";
    assigneeId?: string;
    attachments?: string[];
  };
  onSave: (task: any) => void;
}

const TaskModal = ({
  open,
  onOpenChange,
  task,
  onSave,
}: TaskModalProps) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [projectId, setProjectId] = useState(task?.projectId?.toString() || "");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [priority, setPriority] = useState<"low" | "medium" | "high">(task?.priority || "medium");
  const [assigneeId, setAssigneeId] = useState(task?.assigneeId || "");

  const handleSubmit = () => {
    onSave({
      id: task?.id,
      title,
      description,
      projectId: projectId ? parseInt(projectId) : undefined,
      dueDate: dueDate || undefined,
      priority,
      assigneeId: assigneeId || undefined,
    });
    onOpenChange(false);
  };

  const projects = [
    { id: 1, name: "Website Redesign" },
    { id: 2, name: "Product Launch" },
    { id: 3, name: "Marketing Campaign" },
  ];

  const teamMembers = [
    { id: "1", name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: "2", name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: "3", name: "Taylor Brown" },
    { id: "4", name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
  ];

  const priorityOptions = [
    { value: "low", label: "Low Priority", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Medium Priority", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "High Priority", color: "bg-red-100 text-red-800" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {task?.id ? "Edit Task" : "Create New Task"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details, context, or notes"
              rows={3}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="project">Project</Label>
            <Select value={projectId} onValueChange={setProjectId}>
              <SelectTrigger id="project">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id.toString()}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="priority">Priority</Label>
              <Select value={priority} onValueChange={(value) => setPriority(value as any)}>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorityOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className={cn("px-2 py-1 rounded-full text-xs", option.color)}>
                        {option.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Assignee</Label>
            <div className="flex flex-wrap gap-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer ${
                    assigneeId === member.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                  onClick={() => setAssigneeId(assigneeId === member.id ? "" : member.id)}
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
          
          <div className="grid gap-2">
            <Label htmlFor="attachments">
              <div className="flex items-center gap-2">
                <Paperclip className="h-4 w-4" />
                Attachments
              </div>
            </Label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
              <p className="text-sm text-muted-foreground">
                Drag and drop files here or click to browse
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Max file size: 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!title.trim()}
          >
            {task?.id ? "Update Task" : "Create Task"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;