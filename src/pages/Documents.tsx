"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, Folder, FileText, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Documents = () => {
  const folders = [
    { id: 1, name: "Design Assets", items: 12, updatedAt: "2 days ago" },
    { id: 2, name: "Research", items: 8, updatedAt: "1 week ago" },
    { id: 3, name: "Client Docs", items: 15, updatedAt: "3 days ago" },
  ];

  const documents = [
    { id: 1, name: "Project Requirements", type: "doc", updatedAt: "Today" },
    { id: 2, name: "Meeting Notes", type: "txt", updatedAt: "Yesterday" },
    { id: 3, name: "Design Mockups", type: "pdf", updatedAt: "2 days ago" },
    { id: 4, name: "User Research", type: "doc", updatedAt: "1 week ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Documents</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full rounded-md border pl-8 pr-4 py-2"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Folders</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {folders.map((folder) => (
            <div 
              key={folder.id} 
              className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Folder className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-medium">{folder.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {folder.items} items • Updated {folder.updatedAt}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Open</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
        <div className="border rounded-lg">
          <div className="border-b p-4 font-medium">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-6">Name</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-2">Last Updated</div>
            </div>
          </div>
          <div className="divide-y">
            {documents.map((doc) => (
              <div key={doc.id} className="p-4 hover:bg-muted/50 cursor-pointer">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="col-span-6 font-medium">
                    {doc.name}
                  </div>
                  <div className="col-span-3">
                    <span className="bg-muted px-2 py-1 rounded text-xs">
                      {doc.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-muted-foreground">
                    {doc.updatedAt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;