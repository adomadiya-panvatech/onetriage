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
      icon: Users2,
      title: "Intelligent Referral Management",
      description: "Streamline specialist referrals with automated tracking, coordination, and network matching."
    },
    {
      icon: FileText,
      title: "Automated Document Collection",
      description: "Smart intake forms with OCR technology extract data automatically. Reduce check-in time by 75%."
    },
    {
      icon: Workflow,
      title: "Referral Network & Workflow Automation",
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
    "Automated specialist referral tracking and coordination",
    "Referral-based patient acquisition through provider network",
    "Intelligent provider network matching and routing",
    "B2B partner and reseller growth engine",
    "60% reduction in patient wait times",
    "40% improvement in resource allocation",
    "99.2% accuracy in urgency classification",
    "24/7 automated patient assessment",
    "Seamless EHR integration (Epic, Cerner, Allscripts)",
    "30-50% reduction in administrative costs",
    "75% faster referral processing time",
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
      question: "What makes OneTriage a comprehensive referral ecosystem?",
      answer: "OneTriage uniquely combines four critical healthcare functions: (1) AI-driven patient triage for symptom assessment, (2) Automated referral management for specialist coordination, (3) Provider network matching to connect patients with trusted specialists, and (4) B2B partner/reseller network for scalable growth. This comprehensive approach reduces wait times by 60% while streamlining the entire referral lifecycle."
    },
    {
      question: "How does OneTriage handle specialist referrals?",
      answer: "OneTriage's intelligent referral management system automates the entire specialist referral process—from initial referral creation, to specialist matching based on expertise and availability, to appointment coordination and follow-up tracking. The platform maintains complete visibility throughout the referral journey, reducing referral processing time by 75% and preventing patients from falling through the cracks."
    },
    {
      question: "What is the OneTriage provider network?",
      answer: "The OneTriage provider network is a vetted ecosystem of healthcare specialists and providers. When a patient needs specialty care, our intelligent matching algorithm connects them with the most appropriate specialist based on clinical needs, geographic location, insurance acceptance, and availability. Providers benefit from qualified referrals while patients receive faster access to appropriate care."
    },
    {
      question: "How does the B2B partner/reseller model work?",
      answer: "OneTriage partners with healthcare technology resellers, consulting firms, and healthcare systems to expand market reach. Partners refer healthcare organizations to OneTriage and can offer white-label solutions to their clients. Our partner program includes revenue sharing, co-marketing support, and dedicated technical assistance to ensure successful client implementations."
    },
    {
      question: "Is OneTriage HIPAA compliant?",
      answer: "Yes, OneTriage is fully HIPAA compliant with enterprise-grade encryption, secure data transmission, and comprehensive audit trails. All patient data and referral information is protected according to federal healthcare regulations with TLS 1.2+ encryption in transit and AES-256 encryption at rest."
    },
    {
      question: "Can OneTriage integrate with our existing EHR system?",
      answer: "Yes, OneTriage offers seamless integration with major EHR systems including Epic, Cerner, Allscripts, and more. Our API-first architecture ensures smooth bidirectional data flow for patient demographics, referral orders, and clinical documentation without disrupting your existing workflows."
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
                  & Intelligent Referral Management
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive healthcare referral ecosystem that combines AI-powered patient triage, automated referral management, provider network coordination, and partner-driven growth. Reduce wait times by 60% and streamline specialist referrals.
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
              OneTriage is a <strong>comprehensive healthcare referral ecosystem</strong> that combines <strong>intelligent, AI-powered patient triage</strong> with <strong>automated referral management</strong> and <strong>provider network coordination</strong>. Our <strong>HIPAA-compliant platform</strong> streamlines specialist referrals, manages referral-based patient flow, connects patients to trusted provider networks, and powers partner-driven growth—all while providing <strong>24/7 automated patient assessment</strong> and reducing administrative burden by up to 50%.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Referral Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-powered triage, referral management, provider networks, and partner growth—all in one platform
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
                  Comprehensive Healthcare Referral Platform
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OneTriage is the only platform that combines <strong>AI-driven patient triage</strong>, <strong>intelligent referral management</strong>, <strong>provider network coordination</strong>, and <strong>B2B partner growth</strong> in one seamless ecosystem. Our advanced machine learning algorithms automatically assess patient symptoms, route referrals to specialists, connect patients with trusted provider networks, and power partner-driven expansion.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Automated Specialist Referral Management</div>
                      <div className="text-sm text-muted-foreground">Track, coordinate, and manage referrals to specialists seamlessly</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Referral-Based Patient Acquisition</div>
                      <div className="text-sm text-muted-foreground">Grow through trusted provider referrals and network partnerships</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Provider Network Coordination</div>
                      <div className="text-sm text-muted-foreground">Connect patients to vetted specialist networks with intelligent matching</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">B2B Partner & Reseller Network</div>
                      <div className="text-sm text-muted-foreground">Scale through partner-driven referrals and white-label solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">60% reduction in wait times + 99.2% triage accuracy</div>
                      <div className="text-sm text-muted-foreground">AI-powered efficiency across the entire referral lifecycle</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="space-y-6">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <Users2 className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Referral Management Hub</h3>
                    <p className="text-muted-foreground text-sm">Track specialist referrals, coordinate care transitions, and manage network relationships</p>
                  </div>
                  <div className="bg-secondary/5 p-6 rounded-xl">
                    <Zap className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Provider Network Matching</h3>
                    <p className="text-muted-foreground text-sm">Intelligently connect patients to trusted specialists based on needs and availability</p>
                  </div>
                  <div className="bg-accent/5 p-6 rounded-xl">
                    <TrendingUp className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Partner-Driven Growth</h3>
                    <p className="text-muted-foreground text-sm">B2B reseller network and referral partnerships accelerate market expansion</p>
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
