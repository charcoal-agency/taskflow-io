"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Filter, FileText } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import DocumentCard from "@/components/documents/DocumentCard";
import DocumentModal from "@/components/documents/DocumentModal";

const Documents = () => {
  const [folders] = useState([
    { 
      id: 1, 
      name: "Design Assets", 
      type: "folder" as const,
      updatedAt: "2 days ago",
      items: 12,
      owner: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" }
    },
    { 
      id: 2, 
      name: "Research", 
      type: "folder" as const,
      updatedAt: "1 week ago",
      items: 8,
      owner: { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" }
    },
    { 
      id: 3, 
      name: "Client Docs", 
      type: "folder" as const,
      updatedAt: "3 days ago",
      items: 15,
      owner: { name: "Taylor Brown" }
    },
  ]);

  const [documents] = useState([
    { 
      id: 4, 
      name: "Project Requirements", 
      type: "doc" as const, 
      updatedAt: "Today",
      owner: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=1" }
    },
    { 
      id: 5, 
      name: "Meeting Notes", 
      type: "txt" as const, 
      updatedAt: "Yesterday",
      owner: { name: "Jordan Lee", avatar: "https://i.pravatar.cc/150?u=4" }
    },
    { 
      id: 6, 
      name: "Design Mockups", 
      type: "pdf" as const, 
      updatedAt: "2 days ago",
      owner: { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?u=2" }
    },
    { 
      id: 7, 
      name: "User Research", 
      type: "sheet" as const, 
      updatedAt: "1 week ago",
      owner: { name: "Taylor Brown" }
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const handleSaveDocument = (document: any) => {
    console.log("Saving document:", document);
    // In a real app, you would save this to your database
    // For now, we'll just log it
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Documents</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar 
          placeholder="Search documents..." 
          onSearch={setSearchQuery}
          className="flex-1"
        />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Folders</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {folders
            .filter(folder => 
              folder.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((folder) => (
              <DocumentCard
                key={folder.id}
                id={folder.id}
                name={folder.name}
                type={folder.type}
                updatedAt={folder.updatedAt}
                items={folder.items}
                owner={folder.owner}
                onOpen={(id) => console.log("Open folder", id)}
                onRename={(id) => console.log("Rename folder", id)}
                onDelete={(id) => console.log("Delete folder", id)}
              />
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents
            .filter(doc => 
              doc.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((doc) => (
              <DocumentCard
                key={doc.id}
                id={doc.id}
                name={doc.name}
                type={doc.type}
                updatedAt={doc.updatedAt}
                owner={doc.owner}
                onOpen={(id) => console.log("Open document", id)}
                onRename={(id) => console.log("Rename document", id)}
                onDelete={(id) => console.log("Delete document", id)}
              />
            ))}
        </div>
      </div>

      {folders.filter(folder => 
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && 
      documents.filter(doc => 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No documents found</h3>
          <p className="text-muted-foreground mt-1">
            Try adjusting your search or create a new document
          </p>
          <Button className="mt-4" onClick={() => setIsModalOpen(true)}>Create New Document</Button>
        </div>
      )}
      
      <DocumentModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        document={selectedDocument}
        onSave={handleSaveDocument}
      />
    </div>
  );
};

export default Documents;