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
              path="/projects" 
              element={
                <MainLayout>
                  <Projects />
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
              path="/team" 
              element={
                <MainLayout>
                  <Team />
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SearchProvider>
  </QueryClientProvider>
);

export default App;