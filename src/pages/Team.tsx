"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Users } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import InviteMemberModal from "@/components/team/InviteMemberModal";

const Team = () => {
  const [teamMembers] = useState([
    { 
      id: 1, 
      name: "Alex Johnson", 
      role: "Project Manager", 
      email: "alex@example.com", 
      status: "online" as const,
      tasks: 12,
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    { 
      id: 2, 
      name: "Sam Smith", 
      role: "Designer", 
      email: "sam@example.com", 
      status: "online" as const,
      tasks: 8,
      avatar: "https://i.pravatar.cc/150?u=2"
    },
    { 
      id: 3, 
      name: "Taylor Brown", 
      role: "Developer", 
      email: "taylor@example.com", 
      status: "away" as const,
      tasks: 15
    },
    { 
      id: 4, 
      name: "Jordan Lee", 
      role: "Marketing", 
      email: "jordan@example.com", 
      status: "offline" as const,
      tasks: 5,
      avatar: "https://i.pravatar.cc/150?u=4"
    },
    { 
      id: 5, 
      name: "Morgan Lee", 
      role: "Developer", 
      email: "morgan@example.com", 
      status: "online" as const,
      tasks: 7,
      avatar: "https://i.pravatar.cc/150?u=5"
    },
    { 
      id: 6, 
      name: "Casey Smith", 
      role: "Designer", 
      email: "casey@example.com", 
      status: "away" as const,
      tasks: 9,
      avatar: "https://i.pravatar.cc/150?u=6"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInviteMember = (email: string, role: string) => {
    console.log("Inviting member:", { email, role });
    // In a real app, you would send an invitation email
    // For now, we'll just log it
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar 
          placeholder="Search team members..." 
          onSearch={setSearchQuery}
          className="flex-1"
        />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers
          .filter(member => 
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.email.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((member) => (
            <TeamMemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              email={member.email}
              status={member.status}
              tasks={member.tasks}
              avatar={member.avatar}
              onViewProfile={(id) => console.log("View profile", id)}
              onSendMessage={(id) => console.log("Send message", id)}
              onAssignTask={(id) => console.log("Assign task", id)}
            />
          ))}
      </div>

      {teamMembers.filter(member => 
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Users className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No team members found</h3>
          <p className="text-muted-foreground mt-1">
            Try adjusting your search or invite new members
          </p>
          <Button className="mt-4" onClick={() => setIsModalOpen(true)}>Invite Member</Button>
        </div>
      )}
      
      <InviteMemberModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onInvite={handleInviteMember}
      />
    </div>
  );
};

export default Team;