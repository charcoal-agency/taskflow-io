"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  TrendingUp,
  Users,
  Folder,
  FileText
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StatsCard from "@/components/dashboard/StatsCard";
import DashboardWidget from "@/components/dashboard/DashboardWidget";
import TaskCard from "@/components/tasks/TaskCard";
import ProjectCard from "@/components/projects/ProjectCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design homepage", project: "Website Redesign", dueDate: "Today", priority: "high", completed: false },
    { id: 2, title: "Meeting with client", project: "Product Launch", dueDate: "Tomorrow", priority: "medium", completed: false },
    { id: 3, title: "Update documentation", project: "Marketing Campaign", dueDate: "In 2 days", priority: "low", completed: true },
  ]);

  const projects = [
    { 
      id: 1, 
      name: "Website Redesign", 
      description: "Complete overhaul of company website", 
      progress: 65, 
      tasks: 12,
      members: [
        { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
        { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" },
        { name: "Taylor Brown" },
        { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
      ],
      color: "bg-blue-500"
    },
    { 
      id: 2, 
      name: "Product Launch", 
      description: "Launch of new SaaS product", 
      progress: 30, 
      tasks: 8,
      members: [
        { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" },
        { name: "Taylor Brown" },
        { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" },
      ],
      color: "bg-green-500"
    },
  ];

  const toggleTaskComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value="24"
          description="+2 from last week"
          icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "+8.7%", positive: true }}
        />
        <StatsCard
          title="Pending Tasks"
          value="8"
          description="3 due today"
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "+2", positive: false }}
        />
        <StatsCard
          title="Overdue Tasks"
          value="2"
          description="Requires attention"
          icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "0", positive: true }}
        />
        <StatsCard
          title="Productivity"
          value="78%"
          description="+12% from last week"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "+12%", positive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DashboardWidget
          title="Upcoming Tasks"
          description="Your tasks due soon"
          icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                project={task.project}
                dueDate={task.dueDate}
                priority={task.priority as "low" | "medium" | "high"}
                completed={task.completed}
                onToggleComplete={toggleTaskComplete}
              />
            ))}
          </div>
        </DashboardWidget>

        <DashboardWidget
          title="Active Projects"
          description="Your current projects"
          icon={<Folder className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="space-y-4">
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
              />
            ))}
          </div>
        </DashboardWidget>
      </div>

      <DashboardWidget
        title="Calendar Overview"
        description="Your upcoming events and deadlines"
        icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="flex items-center justify-center h-48">
          <div className="text-center">
            <Calendar className="mx-auto h-10 w-10 text-muted-foreground" />
            <h3 className="mt-2 font-medium">No events scheduled</h3>
            <p className="text-sm text-muted-foreground mt-1">Your calendar is empty for the next 7 days</p>
            <Button className="mt-3" size="sm">Schedule Event</Button>
          </div>
        </div>
      </DashboardWidget>
    </div>
  );
};

export default Dashboard;