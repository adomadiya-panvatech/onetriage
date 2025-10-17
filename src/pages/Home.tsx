import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Calendar, Check, Phone, Video, Users2, CheckCircle2 } from "lucide-react";
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
      description: "Access healthcare professionals any time, day or night"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health information is secure and protected"
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Connect with providers through secure video calls"
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
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Healthcare
                <span className="block text-secondary mt-2">
                  On Your Schedule
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Connect with board-certified healthcare providers through secure video consultations. Quality care delivered conveniently, 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-base">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 text-base"
                  onClick={scrollToHowItWorks}
                >
                  Learn More
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">50,000+</div>
                  <div className="text-white/70 text-sm">Consultations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-white/70 text-sm">Patient Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/70 text-sm">Available</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional healthcare provider conducting secure telemedicine video consultation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose OneTriage
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional telemedicine services designed for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple three-step process to connect with healthcare providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border-2 border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive telemedicine benefits for convenient healthcare access
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-light-bg p-4 rounded-lg border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by thousands of patients nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-xl border-2 border-border"
              >
                <div className="flex items-center mb-4 text-accent text-lg">
                  ★★★★★
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "OneTriage made it incredibly easy to connect with a healthcare provider. The platform is secure, user-friendly, and the providers are truly professional."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Schedule your consultation today and experience healthcare on your terms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10">
                <Link to="/partner">Healthcare Provider Portal</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div>•</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Available</span>
              </div>
              <div>•</div>
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
