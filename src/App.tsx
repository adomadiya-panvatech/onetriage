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
                          content="Connect with board-certified healthcare providers instantly through OneTriage's secure HIPAA-compliant telemedicine platform. Schedule video consultations 24/7 and get quality healthcare from home or work."
                        />
                        <meta name="keywords" content="telemedicine, online doctor consultation, video doctor visits, virtual healthcare, telehealth services, remote medical consultation, 24/7 healthcare, HIPAA compliant telemedicine, virtual doctor appointment, online medical care" />
                        <link rel="canonical" href="https://www.onetriage.com/" />
                        
                        {/* Open Graph Meta Tags */}
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="OneTriage - 24/7 Telemedicine & Video Doctor Consultations" />
                        <meta property="og:description" content="Connect with board-certified healthcare providers instantly through secure video consultations. Available 24/7 for quality care from anywhere." />
                        <meta property="og:url" content="https://www.onetriage.com/" />
                        <meta property="og:site_name" content="OneTriage" />
                        
                        {/* Twitter Card Meta Tags */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="OneTriage - 24/7 Telemedicine & Video Doctor Consultations" />
                        <meta name="twitter:description" content="Connect with healthcare providers instantly through secure video consultations available 24/7." />
                        
                        {/* Structured Data - Organization */}
                        <script type="application/ld+json">
                          {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MedicalOrganization",
                            "name": "OneTriage",
                            "url": "https://www.onetriage.com",
                            "logo": "https://www.onetriage.com/ic_launcher.png",
                            "description": "24/7 telemedicine platform connecting patients with board-certified healthcare providers through secure video consultations",
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
                              "contactType": "customer service",
                              "availableLanguage": "English",
                              "areaServed": "US"
                            },
                            "sameAs": [
                              "https://www.linkedin.com/company/onetriage"
                            ]
                          })}
                        </script>
                        
                        {/* Structured Data - Service */}
                        <script type="application/ld+json">
                          {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Telemedicine",
                            "provider": {
                              "@type": "MedicalOrganization",
                              "name": "OneTriage"
                            },
                            "areaServed": "US",
                            "hasOfferCatalog": {
                              "@type": "OfferCatalog",
                              "name": "Telemedicine Services",
                              "itemListElement": [
                                {
                                  "@type": "Offer",
                                  "itemOffered": {
                                    "@type": "Service",
                                    "name": "Video Consultation with Healthcare Provider"
                                  }
                                },
                                {
                                  "@type": "Offer",
                                  "itemOffered": {
                                    "@type": "Service",
                                    "name": "24/7 Medical Support"
                                  }
                                }
                              ]
                            }
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
                        <title>Contact OneTriage - 24/7 Telemedicine Support & Inquiries</title>
                        <meta
                          name="description"
                          content="Contact OneTriage for 24/7 telemedicine support. Call 1-800-916-2459, email support@onetriage.com, or visit us at 14269 Danielson St, Suite 400, Poway, CA 92064."
                        />
                        <meta name="keywords" content="contact telemedicine, telemedicine support, healthcare consultation inquiry, video doctor contact, telehealth support, online doctor contact, medical consultation booking" />
                        <link rel="canonical" href="https://www.onetriage.com/contact" />
                        
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Contact OneTriage - 24/7 Telemedicine Support" />
                        <meta property="og:description" content="Get in touch with OneTriage for telemedicine support and consultations. Available 24/7." />
                        <meta property="og:url" content="https://www.onetriage.com/contact" />
                        
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:title" content="Contact OneTriage - 24/7 Telemedicine Support" />
                        <meta name="twitter:description" content="Get in touch with OneTriage for telemedicine support and consultations." />
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
