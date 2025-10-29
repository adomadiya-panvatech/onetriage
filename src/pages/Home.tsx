import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Clock, Shield, Calendar, Check, Phone, Video, Users2, CheckCircle2,
  Zap, FileText, Workflow, MessageSquare, ClipboardCheck, TrendingUp,
  Award, Lock, HeartPulse, Sparkles
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
      icon: FileText,
      title: "Automated Document Collection",
      description: "Smart intake forms with OCR technology extract data automatically. Reduce check-in time by 75%."
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "Smart scheduling, reminders, and follow-ups - all automated. Free your staff for patient care."
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
    "60% reduction in patient wait times",
    "40% improvement in resource allocation",
    "99.2% accuracy in urgency classification",
    "24/7 automated patient assessment",
    "Seamless EHR integration (Epic, Cerner, Allscripts)",
    "30-50% reduction in administrative costs",
    "75% faster patient check-in process",
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
      question: "What is AI-driven patient triage?",
      answer: "AI-driven patient triage uses advanced machine learning algorithms to automatically assess patient symptoms, prioritize cases based on urgency, and route patients to the appropriate care providers. OneTriage's intelligent system reduces wait times by 60% while ensuring critical cases receive immediate attention."
    },
    {
      question: "How does OneTriage improve healthcare efficiency?",
      answer: "OneTriage automates time-consuming manual processes including patient intake, document collection, symptom assessment, and appointment scheduling. Healthcare providers report a 40% improvement in resource allocation and significant reduction in administrative burden, allowing staff to focus on delivering exceptional patient care."
    },
    {
      question: "Is OneTriage HIPAA compliant?",
      answer: "Yes, OneTriage is fully HIPAA compliant with enterprise-grade encryption, secure data transmission, and comprehensive audit trails. All patient data is protected according to federal healthcare regulations with TLS 1.2+ encryption in transit and AES-256 encryption at rest."
    },
    {
      question: "How long does it take to implement OneTriage?",
      answer: "Implementation typically takes 2-4 weeks depending on your existing systems and integration requirements. Our team provides full support throughout the onboarding process, including EHR integration, staff training, and workflow optimization."
    },
    {
      question: "Can OneTriage integrate with our existing EHR system?",
      answer: "Yes, OneTriage offers seamless integration with major EHR systems including Epic, Cerner, Allscripts, and more. Our API-first architecture ensures smooth data flow between systems without disrupting your existing workflows."
    },
    {
      question: "How much can hospitals save with triage automation?",
      answer: "Healthcare organizations typically see 30-50% reduction in administrative costs, improved patient throughput, and better resource utilization within the first 6 months of implementation. The average ROI is achieved within 8-12 months."
    },
  ];

  // Structured data for FAQs
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

  return (
    <div className="min-h-screen">
      <Helmet>
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
                  That Transforms Healthcare Delivery
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Reduce wait times by 60% and improve patient outcomes with intelligent automation. OneTriage streamlines patient onboarding, clinical workflows, and communication—so you can focus on exceptional care.
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
                alt="AI-powered patient triage system streamlining healthcare operations and reducing wait times"
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
              OneTriage revolutionizes healthcare with <strong>intelligent, AI-powered patient triage</strong> that automatically assesses symptoms, prioritizes cases, and routes patients to appropriate care providers. Our <strong>HIPAA-compliant platform</strong> integrates seamlessly with your existing EHR system, providing <strong>24/7 automated patient assessment</strong> while reducing administrative burden by up to 50%.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included in OneTriage
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive healthcare automation platform built for modern healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

      {/* Feature Detail: AI-Driven Patient Triage */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  What is AI-Driven Patient Triage?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OneTriage's <strong>AI-driven patient triage</strong> uses advanced machine learning algorithms trained on millions of clinical cases to automatically assess patient symptoms and determine urgency levels. The system analyzes patient-reported symptoms, medical history, and vital signs to provide accurate triage recommendations in seconds—not minutes or hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">60% reduction in patient wait times</div>
                      <div className="text-sm text-muted-foreground">Automated assessment eliminates bottlenecks</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">99.2% accuracy in urgency classification</div>
                      <div className="text-sm text-muted-foreground">Trained on millions of verified clinical cases</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">24/7 automated assessment without staff intervention</div>
                      <div className="text-sm text-muted-foreground">Always available, never fatigues</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Seamless integration with major EHR systems</div>
                      <div className="text-sm text-muted-foreground">Works with Epic, Cerner, Allscripts, and more</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="space-y-6">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <HeartPulse className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Intelligent Symptom Analysis</h3>
                    <p className="text-muted-foreground text-sm">Advanced NLP understands patient descriptions in natural language</p>
                  </div>
                  <div className="bg-secondary/5 p-6 rounded-xl">
                    <Zap className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Real-Time Priority Routing</h3>
                    <p className="text-muted-foreground text-sm">Automatically routes urgent cases to available providers immediately</p>
                  </div>
                  <div className="bg-accent/5 p-6 rounded-xl">
                    <TrendingUp className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground text-sm">AI improves accuracy with every assessment</p>
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

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
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
