import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                  <Route
                  path="/"
                  element={
                    <>
                      <Helmet>
                        <title>OneTriage - AI Patient Triage & Healthcare Coordination Platform</title>
                        <meta
                          name="description"
                          content="Comprehensive healthcare platform combining AI-powered patient triage, automated care coordination, provider network management, and B2B partner growth. Reduce wait times 60%."
                        />
                        <meta name="keywords" content="healthcare coordination platform, AI patient triage, specialist care coordination, provider network management, B2B healthcare reseller, automated care tracking, healthcare coordination software, patient care management, specialist network matching, healthcare partner network, AI-driven patient triage, automated healthcare triage, intelligent patient onboarding, telemedicine automation, HIPAA compliant healthcare platform" />
                        <link rel="canonical" href="https://www.onetriage.com/" />
                        
                        {/* Open Graph Meta Tags */}
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="OneTriage - Healthcare Coordination & AI Patient Triage" />
                        <meta property="og:description" content="Comprehensive healthcare platform: AI patient triage, automated care coordination, provider network matching, B2B partner growth. 60% faster, 99.2% accurate." />
                        <meta property="og:url" content="https://www.onetriage.com/" />
                        <meta property="og:site_name" content="OneTriage" />
                        
                        {/* Twitter Card Meta Tags */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="OneTriage - Healthcare Coordination & AI Patient Triage" />
                        <meta name="twitter:description" content="Complete healthcare platform: AI triage, care coordination, provider networks, B2B growth. HIPAA compliant." />
                        
                        {/* Structured Data - Organization */}
                        <script type="application/ld+json">
                          {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "OneTriage",
                            "url": "https://www.onetriage.com",
                            "logo": "https://www.onetriage.com/ic_launcher.png",
                            "description": "Comprehensive healthcare platform combining AI-driven patient triage, automated care coordination, provider network management, and B2B partner growth. Reduce wait times 60% with intelligent care tracking.",
                            "address": {
                              "@type": "PostalAddress",
                              "streetAddress": "14269 Danielson St, Suite 400",
                              "addressLocality": "Poway",
                              "addressRegion": "CA",
                              "postalCode": "92064",
                              "addressCountry": "US"
                            },
                            "contactPoint": {
                              "@type": "ContactPoint",
                              "telephone": "+1-800-916-2459",
                              "contactType": "sales",
                              "availableLanguage": "English",
                              "areaServed": "US"
                            },
                            "sameAs": [
                              "https://www.linkedin.com/company/onetriage"
                            ]
                          })}
                        </script>
                        
                        {/* Structured Data - SoftwareApplication */}
                        <script type="application/ld+json">
                          {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "OneTriage",
                            "applicationCategory": "HealthApplication",
                            "operatingSystem": "Web-based",
                            "offers": {
                              "@type": "Offer",
                              "price": "0",
                              "priceCurrency": "USD"
                            },
                            "aggregateRating": {
                              "@type": "AggregateRating",
                              "ratingValue": "4.9",
                              "ratingCount": "500"
                            },
                            "description": "Comprehensive healthcare coordination and AI patient triage platform. Automates specialist connections, coordinates provider networks, manages patient flow optimization, and powers B2B partner growth. HIPAA compliant.",
                            "featureList": [
                              "AI-driven patient triage and assessment",
                              "Automated care coordination",
                              "Intelligent provider network matching",
                              "Care tracking and coordination",
                              "B2B partner and reseller network",
                              "24/7 automated patient assessment",
                              "EHR integration (Epic, Cerner, Allscripts)",
                              "HIPAA compliant security",
                              "Real-time care status tracking",
                              "Provider network analytics"
                            ]
                          })}
                        </script>
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
                        <title>Contact OneTriage - Healthcare Coordination Platform Demo</title>
                        <meta
                          name="description"
                          content="Schedule a demo of OneTriage's comprehensive healthcare platform. AI patient triage, care coordination, provider networks, and partner programs. Contact our team today."
                        />
                        <meta name="keywords" content="healthcare coordination demo, AI triage demo, specialist care platform, provider network consultation, B2B healthcare partnership, healthcare coordination contact, healthcare automation demo" />
                        <link rel="canonical" href="https://www.onetriage.com/contact" />
                        
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Contact OneTriage - Healthcare Platform Demo" />
                        <meta property="og:description" content="Schedule a demo of our healthcare coordination platform. AI triage, care coordination, provider networks." />
                        <meta property="og:url" content="https://www.onetriage.com/contact" />
                        
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:title" content="Contact OneTriage - Healthcare Platform Demo" />
                        <meta name="twitter:description" content="Get a demo of OneTriage's comprehensive healthcare coordination platform." />
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
                        <title>Partner With OneTriage - Healthcare & Telemedicine Partnership</title>
                        <meta
                          name="description"
                          content="Join OneTriage's partner network. Expand your healthcare services with our HIPAA-compliant telemedicine platform. White-label options, revenue sharing, and dedicated support available for healthcare systems, clinics, and insurance providers."
                        />
                        <meta name="keywords" content="telemedicine partnership, healthcare technology partner, white label telemedicine, telehealth platform integration, healthcare partnership opportunities, medical technology reseller, virtual care partnership" />
                        <link rel="canonical" href="https://www.onetriage.com/partner" />
                        
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Partner With OneTriage - Healthcare Technology Partnership" />
                        <meta property="og:description" content="Join OneTriage's partner network and expand your healthcare services with our telemedicine platform." />
                        <meta property="og:url" content="https://www.onetriage.com/partner" />
                        
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:title" content="Partner With OneTriage - Healthcare Technology Partnership" />
                        <meta name="twitter:description" content="Expand your healthcare services with OneTriage's telemedicine platform." />
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
                        <title>Privacy Policy - OneTriage HIPAA-Compliant Telemedicine</title>
                        <meta
                          name="description"
                          content="OneTriage Privacy Policy. Learn how we protect your personal and health information with HIPAA-compliant security measures, data encryption, and strict privacy protocols."
                        />
                        <meta name="keywords" content="HIPAA compliance, telemedicine privacy, healthcare data protection, patient privacy, medical information security, telehealth privacy policy" />
                        <link rel="canonical" href="https://www.onetriage.com/privacy" />
                        <meta name="robots" content="index, follow" />
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
                        <title>Terms and Conditions - OneTriage Telemedicine Services</title>
                        <meta
                          name="description"
                          content="OneTriage Terms and Conditions. Review our service terms, user responsibilities, medical disclaimer, and legal agreements for using our HIPAA-compliant telemedicine platform."
                        />
                        <meta name="keywords" content="telemedicine terms of service, telehealth legal agreement, healthcare platform terms, medical consultation terms, patient agreement" />
                        <link rel="canonical" href="https://www.onetriage.com/terms" />
                        <meta name="robots" content="index, follow" />
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
                        <title>Accessibility Statement - OneTriage WCAG Compliant Healthcare</title>
                        <meta
                          name="description"
                          content="OneTriage accessibility commitment and data collection notice. Learn about our WCAG 2.1 Level AA compliance, assistive technology support, and inclusive healthcare platform design."
                        />
                        <meta name="keywords" content="healthcare accessibility, WCAG compliance, accessible telemedicine, disability friendly healthcare, inclusive medical platform, assistive technology healthcare" />
                        <link rel="canonical" href="https://www.onetriage.com/accessibility" />
                        <meta name="robots" content="index, follow" />
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
