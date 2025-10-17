import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Calendar, Home, Users, FileCheck, Check } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

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
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock access to healthcare professionals",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "HIPAA-compliant video calling for complete privacy",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book with your preferred provider in just a few clicks",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Schedule your appointment",
      description: "Choose a time that works for you",
    },
    {
      number: "02",
      title: "Connect via secure video call",
      description: "Meet with your provider from anywhere",
    },
    {
      number: "03",
      title: "Receive care and prescriptions",
      description: "Get the treatment you need",
    },
  ];

  const benefits = [
    "No waiting rooms",
    "Choose your preferred provider",
    "Connect to your existing healthcare network",
    "Save time and travel costs",
    "Access from home or workplace",
    "Prescription services available",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.15),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 z-10">
              <div className="inline-block mb-2">
                <span className="bg-secondary/20 text-white px-4 py-2 rounded-md text-sm font-medium border border-secondary/30">
                  Trusted Telemedicine Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Healthcare
                <span className="block text-secondary mt-2">
                  On Your Schedule
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Connect with board-certified healthcare providers through secure video consultations. Quality care, delivered conveniently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg text-base px-8 py-6">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 text-base px-8 py-6"
                  onClick={scrollToHowItWorks}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">50,000+</div>
                  <div className="text-white/60 text-sm">Consultations</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-white/60 text-sm">Patient Rating</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-white/60 text-sm">Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl"></div>
              <img
                src={heroImage}
                alt="Professional healthcare provider during telemedicine consultation"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-3">
              Why Healthcare Professionals Choose OneTriage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade telemedicine infrastructure built for modern healthcare delivery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-3">
              Three Simple Steps to Quality Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional healthcare consultation process, streamlined for efficiency
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl border border-border">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">Patient Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-3">
              Comprehensive Telemedicine Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for convenience without compromising on quality of care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-light-bg p-4 rounded-lg border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">Patient Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-3">
              Trusted by Healthcare Consumers Nationwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Verified patient testimonials from our telemedicine platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-xl border border-border"
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-accent text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "OneTriage made it incredibly easy to connect with a healthcare provider when I needed care. The platform is secure, user-friendly, and the providers are truly professional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    P{item}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Patient {item}</div>
                    <div className="text-sm text-muted-foreground">Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Start Your Telemedicine Consultation Today
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of patients who trust OneTriage for convenient, secure, and professional healthcare consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg text-base px-8 py-6">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6">
                <Link to="/partner">Healthcare Provider Portal</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Availability</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Secure Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
