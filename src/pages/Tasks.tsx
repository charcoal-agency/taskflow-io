"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import TaskCard from "@/components/tasks/TaskCard";
import TaskModal from "@/components/tasks/TaskModal";
import { CheckCircle } from "lucide-react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: "Design homepage", 
      project: "Website Redesign", 
      dueDate: "Today", 
      priority: "high", 
      completed: false,
      assignee: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
      attachments: 3
    },
    { 
      id: 2, 
      title: "Meeting with client", 
      project: "Product Launch", 
      dueDate: "Tomorrow", 
      priority: "medium", 
      completed: false,
      assignee: { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" }
    },
    { 
      id: 3, 
      title: "Update documentation", 
      project: "Marketing Campaign", 
      dueDate: "In 2 days", 
      priority: "low", 
      completed: true,
      assignee: { name: "Taylor Brown" }
    },
    { 
      id: 4, 
      title: "Research competitors", 
      project: "Product Launch", 
      dueDate: "Next week", 
      priority: "medium", 
      completed: false,
      assignee: { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
      attachments: 1
    },
    { 
      id: 5, 
      title: "Create wireframes", 
      project: "Website Redesign", 
      dueDate: "In 3 days", 
      priority: "high", 
      completed: false,
      assignee: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" }
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const toggleTaskComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleFilterChange = (filterId: string, isActive: boolean) => {
    if (isActive) {
      setActiveFilters([...activeFilters, filterId]);
    } else {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          task.project?.toLowerCase().includes(searchQuery.toLowerCase());
    
    // For demo purposes, we'll just return all tasks if no filters are active
    // In a real app, you would implement actual filtering logic here
    return matchesSearch;
  });

  const handleSaveTask = (task: any) => {
    console.log("Saving task:", task);
    // In a real app, you would save this to your database
    // For now, we'll just log it
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar 
          placeholder="Search tasks..." 
          onSearch={setSearchQuery}
          className="flex-1"
        />
        <FilterBar
          filters={[
            { id: "completed", label: "Completed", value: "completed" },
            { id: "pending", label: "Pending", value: "pending" },
            { id: "high-priority", label: "High Priority", value: "high" },
          ]}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            project={task.project}
            dueDate={task.dueDate}
            priority={task.priority as "low" | "medium" | "high"}
            completed={task.completed}
            assignee={task.assignee}
            attachments={task.attachments}
            onToggleComplete={toggleTaskComplete}
            onEdit={() => {
              setSelectedTask(task);
              setIsModalOpen(true);
            }}
            onDelete={(id) => console.log("Delete task", id)}
          />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <CheckCircle className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No tasks found</h3>
          <p className="text-muted-foreground mt-1">
            Try adjusting your search or filter criteria
          </p>
          <Button className="mt-4" onClick={() => setIsModalOpen(true)}>Create New Task</Button>
        </div>
      )}
      
      <TaskModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        task={selectedTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default Tasks;