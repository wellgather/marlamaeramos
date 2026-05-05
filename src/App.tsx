import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import WellnessExperience from "./pages/WellnessExperience";
import Hospitality from "./pages/Hospitality";
import Courses from "./pages/Courses";
import Experiences from "./pages/Experiences";
import Retreats from "./pages/Retreats";
import RetreatFacilitator from "./pages/RetreatFacilitator";
import RetreatFounders from "./pages/RetreatFounders";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/wellness-experience" element={<WellnessExperience />} />
            <Route path="/hospitality" element={<Hospitality />} />
            {/* Legacy redirect */}
            <Route path="/consultancy" element={<Navigate to="/wellness-experience" replace />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/retreats/facilitator-training" element={<RetreatFacilitator />} />
            <Route path="/retreats/founders" element={<RetreatFounders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
