import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle, Folder, Calendar, FileText, Users } from "lucide-react";

interface QuickCreateDropdownProps {
  onCreateTask?: () => void;
  onCreateProject?: () => void;
  onCreateEvent?: () => void;
  onCreateDocument?: () => void;
  onCreateFolder?: () => void;
}

const QuickCreateDropdown = ({
  onCreateTask,
  onCreateProject,
  onCreateEvent,
  onCreateDocument,
  onCreateFolder,
}: QuickCreateDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Quick Create</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onCreateTask}>
            <CheckCircle className="mr-2 h-4 w-4" />
            <span>New Task</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onCreateProject}>
            <Folder className="mr-2 h-4 w-4" />
            <span>New Project</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onCreateEvent}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>New Event</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onCreateDocument}>
            <FileText className="mr-2 h-4 w-4" />
            <span>New Document</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onCreateFolder}>
            <Folder className="mr-2 h-4 w-4" />
            <span>New Folder</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default QuickCreateDropdown;