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
import { Calendar, Clock, User, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CalendarEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event?: {
    id?: number;
    title: string;
    date: Date;
    startTime: string;
    endTime: string;
    location?: string;
    description?: string;
    attendees: string[];
  };
  onSave: (event: any) => void;
}

const CalendarEventModal = ({
  open,
  onOpenChange,
  event,
  onSave,
}: CalendarEventModalProps) => {
  const [title, setTitle] = useState(event?.title || "");
  const [date, setDate] = useState(
    event?.date ? event.date.toISOString().split("T")[0] : ""
  );
  const [startTime, setStartTime] = useState(event?.startTime || "");
  const [endTime, setEndTime] = useState(event?.endTime || "");
  const [location, setLocation] = useState(event?.location || "");
  const [description, setDescription] = useState(event?.description || "");
  const [attendees, setAttendees] = useState(event?.attendees || []);

  const handleSubmit = () => {
    onSave({
      id: event?.id,
      title,
      date: new Date(date),
      startTime,
      endTime,
      location,
      description,
      attendees,
    });
    onOpenChange(false);
  };

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
            {event?.id ? "Edit Event" : "Create New Event"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Event title"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <span className="self-center">-</span>
                <div className="relative flex-1">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Meeting room, address, or video call link"
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details, agenda, or notes"
              rows={3}
            />
          </div>
          
          <div className="grid gap-2">
            <Label>Attendees</Label>
            <div className="flex flex-wrap gap-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer ${
                    attendees.includes(member.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                  onClick={() => {
                    if (attendees.includes(member.id)) {
                      setAttendees(attendees.filter((id) => id !== member.id));
                    } else {
                      setAttendees([...attendees, member.id]);
                    }
                  }}
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
          <Button onClick={handleSubmit}>
            {event?.id ? "Update Event" : "Create Event"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarEventModal;