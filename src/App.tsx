import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import useScrollToHash from "@/hooks/useScrollToHash";
import useGlobalScrollReveal from "@/hooks/useGlobalScrollReveal";
import Index from "./pages/Index.tsx";
import TheMethod from "./pages/TheMethod.tsx";
import MonadOS from "./pages/MonadOS.tsx";
import MonadLTS from "./pages/MonadLTS.tsx";
import About from "./pages/About.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import MeaningCeiling from "./pages/blog/MeaningCeiling.tsx";
import PushVsPull from "./pages/blog/PushVsPull.tsx";
import InternalOperatingSystem from "./pages/blog/InternalOperatingSystem.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollHandler = () => {
  useScrollToHash();
  useGlobalScrollReveal();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/the-method" element={<TheMethod />} />
          <Route path="/monad-os" element={<MonadOS />} />
          <Route path="/monad-lts" element={<MonadLTS />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/blog/the-meaning-ceiling" element={<MeaningCeiling />} />
          <Route path="/blog/push-vs-pull" element={<PushVsPull />} />
          <Route path="/blog/internal-operating-system" element={<InternalOperatingSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
