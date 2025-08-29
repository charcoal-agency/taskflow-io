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
import { FileText, Folder } from "lucide-react";

interface DocumentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  document?: {
    id?: number;
    name: string;
    type: "doc" | "pdf" | "txt" | "sheet" | "slide" | "folder";
    description?: string;
    folderId?: number;
  };
  onSave: (document: any) => void;
}

const DocumentModal = ({
  open,
  onOpenChange,
  document,
  onSave,
}: DocumentModalProps) => {
  const [name, setName] = useState(document?.name || "");
  const [type, setType] = useState<"doc" | "pdf" | "txt" | "sheet" | "slide" | "folder">(document?.type || "doc");
  const [description, setDescription] = useState(document?.description || "");
  const [folderId, setFolderId] = useState(document?.folderId?.toString() || "");

  const handleSubmit = () => {
    onSave({
      id: document?.id,
      name,
      type,
      description,
      folderId: folderId ? parseInt(folderId) : undefined,
    });
    onOpenChange(false);
  };

  const folders = [
    { id: 1, name: "Design Assets" },
    { id: 2, name: "Research" },
    { id: 3, name: "Client Docs" },
  ];

  const documentTypes = [
    { value: "doc", label: "Document", icon: <FileText className="h-4 w-4" /> },
    { value: "pdf", label: "PDF", icon: <FileText className="h-4 w-4" /> },
    { value: "txt", label: "Text File", icon: <FileText className="h-4 w-4" /> },
    { value: "sheet", label: "Spreadsheet", icon: <FileText className="h-4 w-4" /> },
    { value: "slide", label: "Presentation", icon: <FileText className="h-4 w-4" /> },
    { value: "folder", label: "Folder", icon: <Folder className="h-4 w-4" /> },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {document?.id ? "Edit Document" : "Create New Document"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="type">Type</Label>
            <Select value={type} onValueChange={(value) => setType(value as any)}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {documentTypes.map((docType) => (
                  <SelectItem key={docType.value} value={docType.value}>
                    <div className="flex items-center gap-2">
                      {docType.icon}
                      {docType.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description"
              rows={3}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="folder">Folder</Label>
            <Select value={folderId} onValueChange={setFolderId}>
              <SelectTrigger id="folder">
                <SelectValue placeholder="Select a folder" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No folder</SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder.id} value={folder.id.toString()}>
                    {folder.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            {document?.id ? "Update Document" : "Create Document"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentModal;