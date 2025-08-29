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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Mail } from "lucide-react";

interface InviteMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInvite: (email: string, role: string) => void;
}

const InviteMemberModal = ({
  open,
  onOpenChange,
  onInvite,
}: InviteMemberModalProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("member");

  const handleSubmit = () => {
    onInvite(email, role);
    setEmail("");
    setRole("member");
    onOpenChange(false);
  };

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "member", label: "Member" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Team Member</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((roleOption) => (
                  <SelectItem key={roleOption.value} value={roleOption.value}>
                    {roleOption.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium text-sm">Permissions</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Can view and edit projects they're assigned to</li>
              <li>• Can create and assign tasks</li>
              <li>• Can comment on tasks and documents</li>
              {role === "admin" && <li>• Full access to all projects and settings</li>}
              {role === "manager" && <li>• Can manage team members and projects</li>}
            </ul>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!email.trim() || !email.includes("@")}
          >
            Send Invitation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteMemberModal;