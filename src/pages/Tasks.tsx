"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Search, 
  Filter,
  Calendar,
  Flag,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design homepage", project: "Website Redesign", due: "Today", priority: "High", completed: false },
    { id: 2, title: "Meeting with client", project: "Product Launch", due: "Tomorrow", priority: "Medium", completed: false },
    { id: 3, title: "Update documentation", project: "Marketing Campaign", due: "In 2 days", priority: "Low", completed: true },
    { id: 4, title: "Research competitors", project: "Product Launch", due: "Next week", priority: "Medium", completed: false },
    { id: 5, title: "Create wireframes", project: "Website Redesign", due: "In 3 days", priority: "High", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full rounded-md border pl-8 pr-4 py-2"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

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
          {tasks.map((task) => (
            <div key={task.id} className="p-4 hover:bg-muted/50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <Checkbox 
                    checked={task.completed} 
                    onCheckedChange={() => toggleTask(task.id)}
                  />
                </div>
                <div className="col-span-5">
                  <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                    {task.title}
                  </span>
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">
                  {task.project}
                </div>
                <div className="col-span-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {task.due}
                  </div>
                </div>
                <div className="col-span-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === "High" 
                      ? "bg-red-100 text-red-800" 
                      : task.priority === "Medium" 
                        ? "bg-yellow-100 text-yellow-800" 
                        : "bg-green-100 text-green-800"
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <div className="col-span-1 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;