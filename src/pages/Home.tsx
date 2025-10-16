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
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.3),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connect with Your Healthcare Provider in Minutes — Anytime, Anywhere
              </h1>
              <p className="text-xl text-white/90">
                Secure 24/7 video consultations from the comfort of your home
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                  onClick={scrollToHowItWorks}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Doctor providing telemedicine consultation via video call"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose OneTriage?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Healthcare access designed for your modern lifestyle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-icon-bg w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting healthcare has never been easier
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-cta text-white text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits of OneTriage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Healthcare on your terms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-success" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of patients nationwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-light-bg p-8 rounded-xl shadow-card"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "OneTriage made it so easy to connect with a doctor when I needed care. The platform is secure and the providers are professional."
                </p>
                <div className="font-semibold text-foreground">Patient {item}</div>
                <div className="text-sm text-muted-foreground">Verified Patient</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Healthcare on Your Terms?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of patients who trust OneTriage for their healthcare needs
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
