"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
  Calendar,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Billings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const billingData = [
    { 
      id: 1, 
      project: "Website Redesign", 
      client: "Acme Corporation", 
      amount: 25000,
      status: "paid",
      invoiceDate: "2023-10-15",
      dueDate: "2023-11-15",
      paymentDate: "2023-11-10",
      tasksCompleted: 12,
      totalTasks: 12,
      projectProgress: 100
    },
    { 
      id: 2, 
      project: "Product Launch", 
      client: "Globex Inc", 
      amount: 45000,
      status: "pending",
      invoiceDate: "2023-11-01",
      dueDate: "2023-12-01",
      paymentDate: null,
      tasksCompleted: 18,
      totalTasks: 20,
      projectProgress: 90
    },
    { 
      id: 3, 
      project: "Marketing Campaign", 
      client: "Wayne Enterprises", 
      amount: 15000,
      status: "overdue",
      invoiceDate: "2023-09-01",
      dueDate: "2023-10-01",
      paymentDate: null,
      tasksCompleted: 8,
      totalTasks: 8,
      projectProgress: 100
    },
    { 
      id: 4, 
      project: "Mobile App Development", 
      client: "Stark Industries", 
      amount: 75000,
      status: "draft",
      invoiceDate: null,
      dueDate: null,
      paymentDate: null,
      tasksCompleted: 5,
      totalTasks: 25,
      projectProgress: 20
    },
    { 
      id: 5, 
      project: "E-commerce Platform", 
      client: "Parker Industries", 
      amount: 60000,
      status: "sent",
      invoiceDate: "2023-11-10",
      dueDate: "2023-12-10",
      paymentDate: null,
      tasksCompleted: 15,
      totalTasks: 15,
      projectProgress: 100
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-blue-100 text-blue-800";
      case "overdue": return "bg-red-100 text-red-800";
      case "draft": return "bg-gray-100 text-gray-800";
      case "sent": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending": return <Clock className="h-4 w-4 text-blue-500" />;
      case "overdue": return <Clock className="h-4 w-4 text-red-500" />;
      case "draft": return <FileText className="h-4 w-4 text-gray-500" />;
      case "sent": return <FileText className="h-4 w-4 text-yellow-500" />;
      default: return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const filteredBillingData = billingData.filter(item => 
    item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalInvoiced = billingData.reduce((sum, item) => sum + item.amount, 0);
  const totalPaid = billingData
    .filter(item => item.status === "paid")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalOutstanding = billingData
    .filter(item => item.status === "pending" || item.status === "overdue" || item.status === "sent")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Billings</h1>
          <p className="text-muted-foreground">
            Track project invoices and payments
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoiced</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalInvoiced)}</div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalPaid)}</div>
            <p className="text-xs text-muted-foreground">
              Payments received
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalOutstanding)}</div>
            <p className="text-xs text-muted-foreground">
              Pending payments
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects or clients..."
          className="pl-10 pr-4 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Billing Overview</CardTitle>
          <CardDescription>Track invoices, payments, and project status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg">
            <div className="border-b p-4 font-medium">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">Project</div>
                <div className="col-span-2">Client</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Progress</div>
                <div className="col-span-1"></div>
              </div>
            </div>
            <div className="divide-y">
              {filteredBillingData.map((item) => (
                <div key={item.id} className="p-4 hover:bg-muted/50">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <div className="font-medium">{item.project}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.invoiceDate ? `Invoiced: ${new Date(item.invoiceDate).toLocaleDateString()}` : "Not invoiced"}
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {item.client.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{item.client}</span>
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="font-medium">{formatCurrency(item.amount)}</div>
                      {item.dueDate && (
                        <div className="text-sm text-muted-foreground">
                          Due: {new Date(item.dueDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(item.status)}
                        <Badge className={getStatusColor(item.status)}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <Progress value={item.projectProgress} className="w-full" />
                        <span className="text-xs w-10">{item.projectProgress}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.tasksCompleted}/{item.totalTasks} tasks
                      </div>
                    </div>
                    
                    <div className="col-span-1 flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Invoice</DropdownMenuItem>
                          <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                          <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete Invoice</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {filteredBillingData.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg">
          <FileText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-1">No billing records found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or create a new invoice
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>
      )}
    </div>
  );
};

export default Billings;