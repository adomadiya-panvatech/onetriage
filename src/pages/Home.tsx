import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, Shield, Calendar, Check, Phone, Video, Users2, CheckCircle2,
  Zap, FileText, Workflow, MessageSquare, ClipboardCheck, TrendingUp,
  Award, Lock, HeartPulse, Sparkles, HelpCircle, Network, Handshake,
  Database
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-telemedicine.jpg";

const HomePage = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const keyFeatures = [
    {
      icon: Zap,
      title: "AI-Driven Patient Triage",
      description: "Intelligent symptom assessment and priority classification in seconds. 60% reduction in wait times."
    },
    {
      icon: Users2,
      title: "Intelligent Care Coordination",
      description: "Streamline specialist connections with automated tracking, coordination, and network matching."
    },
    {
      icon: FileText,
      title: "Automated Document Collection",
      description: "Smart intake forms with OCR technology extract data automatically. Reduce check-in time by 75%."
    },
    {
      icon: Workflow,
      title: "Provider Network & Workflow Automation",
      description: "Connect patients to provider networks with smart scheduling, reminders, and automated follow-ups."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant & Secure",
      description: "Enterprise-grade encryption with complete HIPAA compliance and comprehensive audit trails."
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Patient Submits Symptoms",
      description: "AI-powered intake form captures symptoms and medical history securely",
    },
    {
      number: "02",
      title: "Intelligent Triage & Routing",
      description: "Machine learning assesses urgency and routes to appropriate provider automatically",
    },
    {
      number: "03",
      title: "Automated Care Coordination",
      description: "Smart workflows handle scheduling, documents, and follow-ups seamlessly",
    },
  ];

  const benefits = [
    "Automated specialist tracking and coordination",
    "Patient acquisition through provider network partnerships",
    "Intelligent provider network matching and routing",
    "B2B partner and reseller growth engine",
    "60% reduction in patient wait times",
    "40% improvement in resource allocation",
    "99.2% accuracy in urgency classification",
    "24/7 automated patient assessment",
    "Seamless EHR integration (Epic, Cerner, Allscripts)",
    "30-50% reduction in administrative costs",
    "75% faster care coordination processing",
    "HIPAA-compliant with SOC 2 Type II certification",
  ];

  const trustBadges = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Lock, text: "SOC 2 Type II" },
    { icon: Award, text: "Healthcare IT Certified" },
    { icon: CheckCircle2, text: "99.9% Uptime SLA" },
  ];

  const faqs = [
    {
      icon: HelpCircle,
      question: "What makes OneTriage a comprehensive healthcare platform?",
      answer: "OneTriage uniquely combines four critical healthcare functions: (1) AI-driven patient triage for symptom assessment, (2) Automated care coordination for specialist connections, (3) Provider network matching to connect patients with trusted specialists, and (4) B2B partner/reseller network for scalable growth. This comprehensive approach reduces wait times by 60% while streamlining the entire patient care lifecycle."
    },
    {
      icon: Workflow,
      question: "How does OneTriage handle specialist connections?",
      answer: "OneTriage's intelligent care coordination system automates the entire specialist connection process—from initial assessment, to specialist matching based on expertise and availability, to appointment coordination and follow-up tracking. The platform maintains complete visibility throughout the patient journey, reducing processing time by 75% and preventing patients from falling through the cracks."
    },
    {
      icon: Network,
      question: "What is the OneTriage provider network?",
      answer: "The OneTriage provider network is a vetted ecosystem of healthcare specialists and providers. When a patient needs specialty care, our intelligent matching algorithm connects them with the most appropriate specialist based on clinical needs, geographic location, insurance acceptance, and availability. Providers benefit from qualified patient connections while patients receive faster access to appropriate care."
    },
    {
      icon: Handshake,
      question: "How does the B2B partner/reseller model work?",
      answer: "OneTriage partners with healthcare technology resellers, consulting firms, and healthcare systems to expand market reach. Partners connect healthcare organizations to OneTriage and can offer white-label solutions to their clients. Our partner program includes revenue sharing, co-marketing support, and dedicated technical assistance to ensure successful client implementations."
    },
    {
      icon: Shield,
      question: "Is OneTriage HIPAA compliant?",
      answer: "Yes, OneTriage is fully HIPAA compliant with enterprise-grade encryption, secure data transmission, and comprehensive audit trails. All patient data and coordination information is protected according to federal healthcare regulations with TLS 1.2+ encryption in transit and AES-256 encryption at rest."
    },
    {
      icon: Database,
      question: "Can OneTriage integrate with our existing EHR system?",
      answer: "Yes, OneTriage offers seamless integration with major EHR systems including Epic, Cerner, Allscripts, and more. Our API-first architecture ensures smooth bidirectional data flow for patient demographics, care orders, and clinical documentation without disrupting your existing workflows."
    },
  ];

  // Comprehensive Structured Data Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OneTriage",
    "url": "https://www.onetriage.com",
    "description": "Comprehensive healthcare platform combining AI-powered patient triage, automated care coordination, provider network management, and B2B partner growth.",
    "publisher": {
      "@type": "Organization",
      "name": "OneTriage",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.onetriage.com/ic_launcher.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.onetriage.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.onetriage.com/"
      }
    ]
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "OneTriage",
    "url": "https://www.onetriage.com",
    "logo": "https://www.onetriage.com/ic_launcher.png",
    "description": "HIPAA-compliant healthcare coordination and AI patient triage platform. Comprehensive ecosystem for automated care coordination, provider network management, and intelligent patient flow optimization.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14269 Danielson St, Suite 400",
      "addressLocality": "Poway",
      "addressRegion": "CA",
      "postalCode": "92064",
      "addressCountry": "US"
    },
    "telephone": "+1-800-916-2459",
    "priceRange": "Contact for pricing",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "medicalSpecialty": [
      "Healthcare Technology",
      "Patient Care Coordination",
      "AI-Powered Triage",
      "Healthcare Network Management"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare Coordination Platform",
    "provider": {
      "@type": "Organization",
      "name": "OneTriage"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "OneTriage Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Driven Patient Triage",
            "description": "Intelligent symptom assessment and priority classification using machine learning algorithms. 60% reduction in wait times, 99.2% accuracy."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Care Coordination",
            "description": "End-to-end care workflow automation from creation to follow-up tracking. 75% faster processing time."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Provider Network Coordination",
            "description": "Intelligent matching algorithm connecting patients with appropriate specialists based on clinical needs, location, and availability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B Partner & Reseller Network",
            "description": "White-label solutions and revenue sharing opportunities for healthcare technology partners."
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Structured Data Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Trusted by 500+ Healthcare Organizations</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Driven Patient Triage
                <span className="block text-secondary mt-2">
                  & Intelligent Care Coordination
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive healthcare platform that combines AI-powered patient triage, automated care coordination, provider network management, and partner-driven growth. Reduce wait times by 60% and streamline specialist connections.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" variant="hero" className="text-base">
                  <Link to="/contact">Schedule Your Demo</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 text-base"
                  onClick={scrollToHowItWorks}
                >
                  See How It Works
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-white/70 text-sm">Wait Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.2%</div>
                  <div className="text-white/70 text-sm">Triage Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/70 text-sm">Automated Assessment</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-powered patient triage and healthcare referral management system streamlining operations"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">40%</div>
                    <div className="text-sm text-muted-foreground">Resource Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <badge.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Paragraph - SEO Optimized */}
      <section className="py-12 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              OneTriage is a <strong>comprehensive healthcare platform</strong> that combines <strong>intelligent, AI-powered patient triage</strong> with <strong>automated care coordination</strong> and <strong>provider network management</strong>. Our <strong>HIPAA-compliant platform</strong> streamlines specialist connections, optimizes patient flow, connects patients to trusted provider networks, and powers partner-driven growth—all while providing <strong>24/7 automated patient assessment</strong> and reducing administrative burden by up to 50%.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Platform Overview - Content-Rich Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Transforming Healthcare Coordination Through AI and Automation
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  OneTriage represents the next generation of <strong>healthcare coordination technology</strong>, designed to address the critical pain points facing healthcare organizations today. Traditional care processes are plagued by manual workflows, communication gaps, lost connections, and extended wait times that negatively impact both patient care and provider efficiency.
                </p>
                
                <p>
                  Our <strong>AI-driven patient triage system</strong> revolutionizes how healthcare organizations assess and prioritize patient needs. Using advanced machine learning algorithms trained on millions of clinical data points, OneTriage automatically evaluates patient symptoms, medical history, and urgency indicators to provide accurate triage classifications in seconds rather than hours. This <strong>intelligent patient assessment</strong> process achieves 99.2% accuracy in urgency classification, enabling healthcare providers to allocate resources more effectively and reduce patient wait times by an average of 60%.
                </p>
                
                <p>
                  The <strong>automated care coordination</strong> component eliminates the friction and inefficiencies inherent in manual workflows. From the moment care is initiated, OneTriage's intelligent system automatically matches patients with appropriate specialists based on clinical expertise, geographic proximity, insurance network compatibility, and real-time availability. The platform maintains complete visibility throughout the entire patient journey, sending automated reminders, tracking status updates, and ensuring no patient falls through the cracks. Healthcare organizations using OneTriage report a 75% reduction in processing time and significantly improved completion rates.
                </p>
                
                <p>
                  <strong>Provider network management</strong> is central to OneTriage's comprehensive approach. Our platform connects healthcare organizations to a vetted ecosystem of specialists and providers, facilitating seamless communication and care coordination. The intelligent matching algorithm considers multiple factors including specialty requirements, clinical appropriateness, patient preferences, geographic accessibility, and insurance network alignment to ensure optimal provider-patient matches. This network-based approach benefits all stakeholders: patients receive faster access to appropriate care, specialists receive qualified connections, and providers maintain visibility into patient care continuity.
                </p>
                
                <p>
                  For <strong>B2B healthcare technology partners and resellers</strong>, OneTriage offers scalable growth opportunities through our partner program. Partners can offer white-label solutions to their healthcare organization clients, participate in revenue sharing arrangements, and leverage comprehensive co-marketing and technical support resources. This partner-driven model enables rapid market expansion while ensuring high-quality implementation and ongoing success for partner clients across various healthcare verticals including hospital systems, ambulatory care networks, accountable care organizations (ACOs), and independent practice associations (IPAs).
                </p>
                
                <p>
                  <strong>HIPAA compliance and enterprise-grade security</strong> are foundational to the OneTriage platform. All patient data and coordination information is protected with TLS 1.2+ encryption in transit and AES-256 encryption at rest, comprehensive audit trails, role-based access controls, and complete adherence to federal healthcare regulations. Our platform holds SOC 2 Type II certification and is designed to integrate seamlessly with major EHR systems including Epic, Cerner, Allscripts, and others through our API-first architecture.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-powered triage, care coordination, provider networks, and partner growth—all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-border hover:border-primary hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 bg-icon-bg rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail: Comprehensive Referral Ecosystem */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Comprehensive Healthcare Platform
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OneTriage is the only platform that combines <strong>AI-driven patient triage</strong>, <strong>intelligent care coordination</strong>, <strong>provider network management</strong>, and <strong>B2B partner growth</strong> in one seamless ecosystem. Our advanced machine learning algorithms automatically assess patient symptoms, route care to specialists, connect patients with trusted provider networks, and power partner-driven expansion.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Automated Care Coordination</div>
                      <div className="text-sm text-muted-foreground">Track, coordinate, and manage specialist connections seamlessly</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Network-Based Patient Acquisition</div>
                      <div className="text-sm text-muted-foreground">Grow through trusted provider networks and partnerships</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Provider Network Management</div>
                      <div className="text-sm text-muted-foreground">Connect patients to vetted specialist networks with intelligent matching</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">B2B Partner & Reseller Network</div>
                      <div className="text-sm text-muted-foreground">Scale through partner-driven growth and white-label solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">60% reduction in wait times + 99.2% triage accuracy</div>
                      <div className="text-sm text-muted-foreground">AI-powered efficiency across the entire patient lifecycle</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="space-y-6">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <Users2 className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Care Coordination Hub</h3>
                    <p className="text-muted-foreground text-sm">Track specialist connections, coordinate care transitions, and manage network relationships</p>
                  </div>
                  <div className="bg-secondary/5 p-6 rounded-xl">
                    <Zap className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Provider Network Matching</h3>
                    <p className="text-muted-foreground text-sm">Intelligently connect patients to trusted specialists based on needs and availability</p>
                  </div>
                  <div className="bg-accent/5 p-6 rounded-xl">
                    <TrendingUp className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Partner-Driven Growth</h3>
                    <p className="text-muted-foreground text-sm">B2B reseller network and strategic partnerships accelerate market expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How OneTriage Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple three-step process to transform your healthcare operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-light-bg p-8 rounded-xl border-2 border-border text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-4xl text-primary">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Schedule Your Demo Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Measurable Benefits for Healthcare Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from healthcare providers using OneTriage
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-border hover:border-primary hover:shadow-md transition-all"
              >
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Industry Applications - Content-Rich Section */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Healthcare Coordination Solutions for Every Organization Type
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <article className="bg-white p-6 rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Hospital Systems & Health Networks</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Large hospital systems and integrated health networks utilize OneTriage to streamline connections between primary care providers, specialists, and ancillary services. The platform's intelligent routing capabilities ensure patients are directed to the most appropriate care setting, whether that's a same-day appointment with a specialist within the network or urgent care placement. Hospital administrators benefit from comprehensive analytics that identify bottlenecks, track care patterns, and optimize resource allocation across the entire care continuum.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Centralized care coordination across multiple facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Real-time visibility into care status and transitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Integration with Epic, Cerner, and other enterprise EHR systems</span>
                  </li>
                </ul>
              </article>

              <article className="bg-white p-6 rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Primary Care Practices & Clinics</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Primary care physicians and clinic administrators leverage OneTriage to manage high volumes of specialist connections efficiently while maintaining continuity of care. The platform's automated workflow eliminates time-consuming phone calls and fax transmissions, replacing manual processes with intelligent digital coordination. Clinics report significant reductions in administrative overhead, improved completion rates, and enhanced patient satisfaction through faster access to specialty care.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Automated coordination creation and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Intelligent specialist matching based on patient needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Seamless communication with specialists</span>
                  </li>
                </ul>
              </article>

              <article className="bg-white p-6 rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Accountable Care Organizations (ACOs)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ACOs and value-based care organizations utilize OneTriage to maintain care coordination while managing costs and quality metrics. The platform's analytics help ACO administrators identify high-value partners, track care quality outcomes, and ensure patients receive appropriate care within preferred networks. This capability is critical for organizations participating in Medicare Shared Savings Programs and other value-based reimbursement models.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Value-based care coordination and quality tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Network management and preferred provider selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Comprehensive care analytics and reporting</span>
                  </li>
                </ul>
              </article>

              <article className="bg-white p-6 rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Specialty Care Networks</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Specialty care networks and independent practice associations benefit from OneTriage's provider network management capabilities. Specialist practices can manage incoming connections from multiple providers, optimize scheduling based on urgency and complexity, and maintain comprehensive visibility into patient care journeys. The platform's intelligent matching ensures specialists receive appropriate connections aligned with their clinical expertise and availability.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Centralized intake and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Automated appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Communication portal for providers</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Healthcare Providers Nationwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Over 500 healthcare organizations use OneTriage to improve patient experiences and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-light-bg p-8 rounded-xl border-2 border-border">
              <div className="flex items-center mb-4 text-accent text-lg">
                ★★★★★
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "OneTriage reduced our ER wait times by 58% in the first three months. Patients love the convenience, and our staff can finally focus on care instead of paperwork."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Chief Medical Officer</div>
                </div>
              </div>
            </div>

            <div className="bg-light-bg p-8 rounded-xl border-2 border-border">
              <div className="flex items-center mb-4 text-accent text-lg">
                ★★★★★
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "The AI triage accuracy is remarkable. We've seen a 40% improvement in resource allocation and patients consistently report better experiences."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-foreground">James Chen, MD</div>
                  <div className="text-sm text-muted-foreground">Medical Director</div>
                </div>
              </div>
            </div>

            <div className="bg-light-bg p-8 rounded-xl border-2 border-border">
              <div className="flex items-center mb-4 text-accent text-lg">
                ★★★★★
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "Implementation was seamless. The OneTriage team provided exceptional support, and our staff was up and running within two weeks."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  LP
                </div>
                <div>
                  <div className="font-semibold text-foreground">Lisa Patel</div>
                  <div className="text-sm text-muted-foreground">Director of Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about OneTriage
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border-2 border-border px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        <faq.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="pl-14 pr-8">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have more questions? Our team is here to help.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-white/90">
              Schedule a personalized demo and see how OneTriage can reduce wait times, improve patient satisfaction, and increase your operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Schedule Your Demo Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10">
                <Link to="/partner">Become a Partner</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>100% HIPAA Compliant</span>
              </div>
              <div>•</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>2-4 Week Implementation</span>
              </div>
              <div>•</div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Free Trial Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
