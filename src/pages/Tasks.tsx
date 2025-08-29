"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Search
} from "lucide-react";
import TaskList from "@/components/tasks/TaskList";
import CreateTaskButton from "@/components/tasks/CreateTaskButton";
import TaskFilter from "@/components/tasks/TaskFilter";

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tasks = [
    { id: 1, title: "Design homepage", project: "Website Redesign", dueDate: "Today", priority: "High", completed: false, assignedTo: "Alex Johnson" },
    { id: 2, title: "Meeting with client", project: "Product Launch", dueDate: "Tomorrow", priority: "Medium", completed: false },
    { id: 3, title: "Update documentation", project: "Marketing Campaign", dueDate: "In 2 days", priority: "Low", completed: true },
    { id: 4, title: "Research competitors", project: "Product Launch", dueDate: "Next week", priority: "Medium", completed: false, assignedTo: "Sam Smith" },
    { id: 5, title: "Create wireframes", project: "Website Redesign", dueDate: "In 3 days", priority: "High", completed: false },
  ];

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <CreateTaskButton />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full rounded-md border pl-8 pr-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <TaskFilter />
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
          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;