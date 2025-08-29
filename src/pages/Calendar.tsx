"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CalendarEvent from "@/components/calendar/CalendarEvent";
import CalendarEventModal from "@/components/calendar/CalendarEventModal";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  
  // Sample events data
  const [events] = useState([
    {
      id: 1,
      title: "Team Meeting",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: "10:00",
      endTime: "11:00",
      attendees: ["1", "2", "3"],
      color: "bg-blue-100 text-blue-800 border-l-blue-500"
    },
    {
      id: 2,
      title: "Project Deadline",
      date: new Date(new Date().setDate(new Date().getDate() + 5)),
      startTime: "14:00",
      endTime: "15:00",
      attendees: ["1", "4"],
      color: "bg-green-100 text-green-800 border-l-green-500"
    },
    {
      id: 3,
      title: "Client Presentation",
      date: new Date(new Date().setDate(new Date().getDate() + 3)),
      startTime: "09:00",
      endTime: "10:30",
      attendees: ["2", "3", "4"],
      color: "bg-purple-100 text-purple-800 border-l-purple-500"
    }
  ]);

  // Generate calendar days
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 border-t border-l"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = 
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
      
      // Get events for this day
      const dayEvents = events.filter(event => 
        event.date.getDate() === day &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year
      );
      
      days.push(
        <div 
          key={day} 
          className={`h-32 border-t border-l p-1 ${isToday ? 'bg-primary/10' : ''}`}
        >
          <div className={`text-right p-1 ${isToday ? 'font-bold text-primary' : ''}`}>
            {day}
          </div>
          <div className="text-xs space-y-1 mt-1 max-h-24 overflow-y-auto">
            {dayEvents.map(event => (
              <CalendarEvent
                key={event.id}
                id={event.id}
                title={event.title}
                time={event.startTime}
                duration={`${event.startTime} - ${event.endTime}`}
                attendees={event.attendees.map(id => ({ name: `User ${id}` }))}
                color={event.color}
                onEdit={() => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }}
                onDelete={(id) => console.log("Delete event", id)}
              />
            ))}
          </div>
        </div>
      );
    }
    
    return days;
  };
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const today = new Date();
  const isCurrentMonth = 
    currentDate.getMonth() === today.getMonth() && 
    currentDate.getFullYear() === today.getFullYear();

  const handleSaveEvent = (event: any) => {
    console.log("Saving event:", event);
    // In a real app, you would save this to your database
    // For now, we'll just log it
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setCurrentDate(new Date())}
            disabled={isCurrentMonth}
          >
            Today
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Month
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setView("day")}>Day</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setView("week")}>Week</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setView("month")}>Month</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-7 bg-muted">
          {dayNames.map((day) => (
            <div key={day} className="p-2 text-center font-medium text-sm">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {renderCalendar()}
        </div>
      </div>
      
      <CalendarEventModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        event={selectedEvent}
        onSave={handleSaveEvent}
      />
    </div>
  );
};

export default Calendar;