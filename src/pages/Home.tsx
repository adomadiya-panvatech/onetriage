import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Calendar, Home, Users, FileCheck, Check } from "lucide-react";
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
      <section className="relative bg-gradient-hero text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,193,7,0.3),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_45%,hsl(210_52%_24%_/_0.3)_55%,hsl(210_52%_24%_/_0.6)_100%)] hidden md:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 z-10 animate-fade-in">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                  🩺 24/7 Healthcare Access
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Healthcare That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mt-2">
                  Fits Your Life
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                Connect with trusted healthcare providers instantly through secure video consultations — anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 hover:scale-105">
                  <Link to="/contact">Get Started Free</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 text-lg px-8 py-6"
                  onClick={scrollToHowItWorks}
                >
                  See How It Works
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-white/70 text-sm">Consultations</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-white/70 text-sm">Patient Rating</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/70 text-sm">Available</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={heroImage}
                alt="Doctor providing telemedicine consultation via video call"
                className="relative rounded-3xl shadow-2xl ring-4 ring-white/20 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why OneTriage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3">
              Healthcare Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Reimagined</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern healthcare designed around your busy lifestyle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-primary-light w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3">
              Get Care in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">3 Easy Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From booking to treatment in minutes, not hours
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1">
              <div className="absolute left-[16.666%] right-[16.666%] top-0 h-px bg-gradient-to-r from-secondary via-primary to-accent opacity-30"></div>
            </div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent text-white text-2xl font-bold mb-8 shadow-xl hover:scale-110 transition-transform duration-300 relative z-10">
                  {step.number}
                </div>
                <div className="bg-light-bg p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,193,7,0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Your Advantages</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-3">
              Why Patients <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Love OneTriage</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Healthcare that works around your schedule, not the other way around
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-white font-medium text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real patients across the nation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-accent text-2xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  "OneTriage made it incredibly easy to connect with a doctor when I needed care. The platform is secure, user-friendly, and the providers are truly professional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg">
                    P{item}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Patient {item}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Check className="h-4 w-4 text-success" /> Verified Patient
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.3),transparent_70%)]"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                🚀 Start Your Journey Today
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Experience Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mt-2">
                On Your Terms?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join 50,000+ patients who trust OneTriage for convenient, secure, and professional healthcare access
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-7 hover:scale-105">
                <Link to="/contact">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 text-lg px-10 py-7">
                <Link to="/partner">For Healthcare Providers</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Support</span>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
