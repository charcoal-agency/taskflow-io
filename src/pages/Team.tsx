"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, MoreHorizontal, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      role: "Project Manager", 
      email: "alex@example.com", 
      status: "online",
      tasks: 12
    },
    { 
      id: 2, 
      name: "Sam Smith", 
      role: "Designer", 
      email: "sam@example.com", 
      status: "online",
      tasks: 8
    },
    { 
      id: 3, 
      name: "Taylor Brown", 
      role: "Developer", 
      email: "taylor@example.com", 
      status: "away",
      tasks: 15
    },
    { 
      id: 4, 
      name: "Jordan Lee", 
      role: "Marketing", 
      email: "jordan@example.com", 
      status: "offline",
      tasks: 5
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search team members..."
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
            <div className="col-span-4">Member</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Tasks</div>
            <div className="col-span-1"></div>
          </div>
        </div>
        <div className="divide-y">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 hover:bg-muted/50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                      member.status === "online" ? "bg-green-500" : 
                      member.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                    }`}></div>
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {member.email}
                    </div>
                  </div>
                </div>
                <div className="col-span-3 text-muted-foreground">
                  {member.role}
                </div>
                <div className="col-span-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    member.status === "online" ? "bg-green-100 text-green-800" : 
                    member.status === "away" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </span>
                </div>
                <div className="col-span-2">
                  {member.tasks} tasks
                </div>
                <div className="col-span-1 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuItem>Assign Task</DropdownMenuItem>
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

export default Team;