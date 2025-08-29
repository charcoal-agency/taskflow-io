"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TaskScheduler from "@/components/tasks/TaskScheduler";

const TaskSchedulerWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Task Scheduler</CardTitle>
        <CardDescription>Optimize your task priorities with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <TaskScheduler />
      </CardContent>
    </Card>
  );
};

export default TaskSchedulerWidget;