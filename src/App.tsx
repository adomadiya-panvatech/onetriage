import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import PartnerPage from "./pages/Partner";
import PrivacyPolicyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import AccessibilityPage from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Helmet>
                        <title>OneTriage - 24/7 Telemedicine & Video Doctor Consultations</title>
                        <meta
                          name="description"
                          content="Connect with healthcare providers instantly through OneTriage's secure video platform. Schedule appointments 24/7 and get quality care from home or work."
                        />
                      </Helmet>
                      <HomePage />
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <Helmet>
                        <title>Contact OneTriage - Get Started with Telemedicine</title>
                        <meta
                          name="description"
                          content="Contact OneTriage for 24/7 telemedicine support. Call 1-800-916-2459 or visit us at 14269 Danielson St, Suite 400, Poway, CA 92064."
                        />
                      </Helmet>
                      <ContactPage />
                    </>
                  }
                />
                <Route
                  path="/partner"
                  element={
                    <>
                      <Helmet>
                        <title>Partner With OneTriage - Telemedicine Partnership Opportunities</title>
                        <meta
                          name="description"
                          content="Join OneTriage as a partner. Expand your healthcare services with our telemedicine platform. White-label options and revenue sharing available."
                        />
                      </Helmet>
                      <PartnerPage />
                    </>
                  }
                />
                <Route
                  path="/privacy"
                  element={
                    <>
                      <Helmet>
                        <title>Privacy Policy - OneTriage</title>
                        <meta
                          name="description"
                          content="OneTriage Privacy Policy. Learn how we protect your personal and health information with HIPAA-compliant security measures."
                        />
                      </Helmet>
                      <PrivacyPolicyPage />
                    </>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <>
                      <Helmet>
                        <title>Terms and Conditions - OneTriage</title>
                        <meta
                          name="description"
                          content="OneTriage Terms and Conditions. Review our service terms, user responsibilities, and legal agreements for using our telemedicine platform."
                        />
                      </Helmet>
                      <TermsPage />
                    </>
                  }
                />
                <Route
                  path="/accessibility"
                  element={
                    <>
                      <Helmet>
                        <title>Accessibility & Information Notice - OneTriage</title>
                        <meta
                          name="description"
                          content="OneTriage accessibility commitment and data collection notice. Learn about our WCAG compliance and privacy practices."
                        />
                      </Helmet>
                      <AccessibilityPage />
                    </>
                  }
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
