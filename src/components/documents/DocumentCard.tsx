import { FileText, Folder, MoreHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DocumentCardProps {
  id: number;
  name: string;
  type: "doc" | "pdf" | "txt" | "sheet" | "slide" | "folder";
  updatedAt: string;
  owner?: {
    name: string;
    avatar?: string;
  };
  items?: number;
  onOpen?: (id: number) => void;
  onRename?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const DocumentCard = ({
  id,
  name,
  type,
  updatedAt,
  owner,
  items,
  onOpen,
  onRename,
  onDelete,
}: DocumentCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "folder":
        return <Folder className="h-5 w-5 text-blue-500" />;
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "sheet":
        return <FileText className="h-5 w-5 text-green-500" />;
      case "slide":
        return <FileText className="h-5 w-5 text-yellow-500" />;
      default:
        return <FileText className="h-5 w-5 text-blue-500" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "folder":
        return "Folder";
      case "pdf":
        return "PDF";
      case "sheet":
        return "Spreadsheet";
      case "slide":
        return "Presentation";
      default:
        return type.toUpperCase();
    }
  };

  return (
    <div 
      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer group"
      onClick={() => onOpen?.(id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {getTypeIcon()}
          <div>
            <h3 className="font-medium text-sm">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                {getTypeLabel()}
              </span>
              {items !== undefined && (
                <span className="text-xs text-muted-foreground">
                  {items} items
                </span>
              )}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onOpen?.(id); }}>
              Open
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onRename?.(id); }}>
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={(e) => { e.stopPropagation(); onDelete?.(id); }} 
              className="text-red-600"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-muted-foreground">
          Updated {updatedAt}
        </p>
        {owner && (
          <div className="flex items-center gap-1">
            <Avatar className="h-5 w-5">
              {owner.avatar ? (
                <AvatarImage src={owner.avatar} alt={owner.name} />
              ) : (
                <AvatarFallback className="text-[8px]">
                  {owner.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;