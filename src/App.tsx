import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import SearchResults from "./pages/SearchResults";
import TaskDetail from "./pages/TaskDetail";
import ProjectDetail from "./pages/ProjectDetail";
import DocumentDetail from "./pages/DocumentDetail";
import TeamMemberDetail from "./pages/TeamMemberDetail";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SearchProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <MainLayout>
                  <Index />
                </MainLayout>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              } 
            />
            <Route 
              path="/tasks" 
              element={
                <MainLayout>
                  <Tasks />
                </MainLayout>
              } 
            />
            <Route 
              path="/tasks/:id" 
              element={
                <MainLayout>
                  <TaskDetail />
                </MainLayout>
              } 
            />
            <Route 
              path="/projects" 
              element={
                <MainLayout>
                  <Projects />
                </MainLayout>
              } 
            />
            <Route 
              path="/projects/:id" 
              element={
                <MainLayout>
                  <ProjectDetail />
                </MainLayout>
              } 
            />
            <Route 
              path="/calendar" 
              element={
                <MainLayout>
                  <Calendar />
                </MainLayout>
              } 
            />
            <Route 
              path="/documents" 
              element={
                <MainLayout>
                  <Documents />
                </MainLayout>
              } 
            />
            <Route 
              path="/documents/:id" 
              element={
                <MainLayout>
                  <DocumentDetail />
                </MainLayout>
              } 
            />
            <Route 
              path="/team" 
              element={
                <MainLayout>
                  <Team />
                </MainLayout>
              } 
            />
            <Route 
              path="/team/:id" 
              element={
                <MainLayout>
                  <TeamMemberDetail />
                </MainLayout>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <MainLayout>
                  <Settings />
                </MainLayout>
              } 
            />
            <Route 
              path="/notifications" 
              element={
                <MainLayout>
                  <Notifications />
                </MainLayout>
              } 
            />
            <Route 
              path="/reports" 
              element={
                <MainLayout>
                  <Reports />
                </MainLayout>
              } 
            />
            <Route 
              path="/search" 
              element={
                <MainLayout>
                  <SearchResults />
                </MainLayout>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SearchProvider>
  </QueryClientProvider>
);

export default App;