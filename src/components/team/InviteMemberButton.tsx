"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Modal from "@/components/ui/Modal";
import TeamMemberForm from "@/components/team/TeamMemberForm";
import { useToast } from "@/hooks/use-toast";

const InviteMemberButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (data: any) => {
    console.log("Member data:", data);
    // In a real app, you would save this to your database
    toast({
      title: "Member invited",
      description: "An invitation has been sent to the team member."
    });
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Invite Member
      </Button>
      
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Invite Team Member"
        size="lg"
      >
        <TeamMemberForm 
          onSubmit={handleSubmit} 
          onCancel={() => setIsOpen(false)} 
        />
      </Modal>
    </>
  );
};

export default InviteMemberButton;