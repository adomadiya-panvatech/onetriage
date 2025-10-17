import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Calendar, Check, ArrowRight, Star, Users2, Award, Phone, Video, Zap } from "lucide-react";
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
      icon: Video,
      title: "Instant Video Consultations",
      description: "Connect face-to-face with board-certified providers in minutes",
      highlight: "Most Popular"
    },
    {
      icon: Shield,
      title: "HIPAA Secure & Private",
      description: "Bank-level encryption ensures your health data stays confidential",
      highlight: "Certified"
    },
    {
      icon: Clock,
      title: "24/7 Medical Access",
      description: "Healthcare when you need it - day, night, weekends, and holidays",
      highlight: "Always Open"
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
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">HIPAA Certified Healthcare Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                See a Doctor
                <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mt-2">
                  In Minutes
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Board-certified providers available 24/7 for video consultations. No waiting rooms, no hassle.
              </p>

              {/* Key Stats Row */}
              <div className="flex flex-wrap items-center gap-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent border-2 border-white flex items-center justify-center text-xs font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">50,000+ Patients</div>
                    <div className="text-white/60">Trust Us</div>
                  </div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">4.9/5 Rating</div>
                    <div className="text-white/60">2,340 Reviews</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group bg-white text-primary hover:bg-white/95 shadow-2xl text-lg px-8 py-7 hover:scale-105 transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/5 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/10 text-lg px-8 py-7"
                  onClick={scrollToHowItWorks}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  1-800-916-2459
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Insurance accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Prescriptions available</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:ml-8">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl rotate-12 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-2xl -rotate-12 blur-xl"></div>
              
              {/* Main Image Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional healthcare provider conducting secure telemedicine video consultation"
                  className="rounded-2xl w-full shadow-xl"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border-4 border-primary">
                  <div className="flex items-center gap-3">
                    <div className="bg-success/10 p-3 rounded-xl">
                      <Users2 className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">1,200+</div>
                      <div className="text-sm text-muted-foreground">Providers Available</div>
                    </div>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-success to-success/80 text-white px-6 py-3 rounded-xl shadow-lg border-4 border-white">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="font-bold">Online Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-light-bg relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" />
              Why Choose OneTriage
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Healthcare Made
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mt-2">
                Simple & Accessible
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the future of healthcare with our comprehensive telemedicine platform
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30 hover:-translate-y-2"
              >
                {/* Highlight Badge */}
                {feature.highlight && (
                  <div className="absolute -top-3 left-8 bg-gradient-to-r from-secondary to-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {feature.highlight}
                  </div>
                )}
                
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-primary to-primary-light w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary-light hover:shadow-xl text-white text-lg px-10 py-7">
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" />
              Simple 3-Step Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              From Booking to Treatment
              <span className="block text-secondary mt-2">In Just Minutes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              No complicated processes. No waiting rooms. Just quality healthcare when you need it.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-gradient-to-br from-white to-light-bg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-primary group">
                    {/* Step Number Badge */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for Desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/4 -right-6 text-secondary">
                        <ArrowRight className="h-12 w-12 opacity-30" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of satisfied patients experiencing healthcare on their terms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-light hover:shadow-xl text-white text-lg px-10 py-7">
                  <Link to="/contact">Book Consultation Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 text-lg px-10 py-7">
                  <Link to="/partner">For Healthcare Providers</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-light-bg to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4 text-accent" />
              Complete Healthcare Solution
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything You Need,
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mt-2">
                Nothing You Don't
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience healthcare designed around your life, not the other way around
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-white p-5 rounded-2xl border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-success" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Bottom Stats Banner */}
          <div className="mt-20 bg-gradient-to-r from-primary to-primary-light text-white rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-white/80 text-lg">Happy Patients</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">1,200+</div>
                <div className="text-white/80 text-lg">Providers</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/80 text-lg">Availability</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.9★</div>
                <div className="text-white/80 text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 fill-accent" />
              Patient Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Loved by Patients
              <span className="block text-secondary mt-2">Nationwide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real experiences from real patients who chose OneTriage for their healthcare needs
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Sarah M.",
                role: "Working Professional",
                rating: 5,
                text: "OneTriage made it so easy to see a doctor while managing my busy schedule. The video quality was excellent, and my provider was incredibly professional and caring."
              },
              {
                name: "James T.",
                role: "Parent of Two",
                rating: 5,
                text: "Being able to get my kids checked by a doctor from home is a game-changer. No more waiting rooms or taking time off work. Highly recommend!"
              },
              {
                name: "Maria L.",
                role: "Senior Citizen",
                rating: 5,
                text: "The platform is so user-friendly! I was worried about technology, but the support team guided me through everything. Now I use it regularly for all my consultations."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-light-bg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-primary hover:-translate-y-2"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Check className="h-4 w-4 text-success" />
                      Verified Patient • {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">2,340+</div>
              <div className="text-muted-foreground">5-Star Reviews</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-hero text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-base font-semibold">Join 50,000+ Satisfied Patients</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready for Healthcare
              <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent mt-2">
                That Works For You?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get started in minutes. No credit card required. See a board-certified provider today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="group bg-white text-primary hover:bg-white/95 shadow-2xl text-xl px-12 py-8 hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Free Consultation
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/5 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/10 text-xl px-12 py-8"
              >
                <Link to="/partner" className="flex items-center gap-2">
                  <Users2 className="h-6 w-6" />
                  For Healthcare Providers
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 pb-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Shield className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <div className="font-bold text-sm">HIPAA Certified</div>
                  <div className="text-xs text-white/70">100% Secure</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Clock className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <div className="font-bold text-sm">24/7 Available</div>
                  <div className="text-xs text-white/70">Always Online</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Star className="h-6 w-6 text-accent fill-accent" />
                <div className="text-left">
                  <div className="font-bold text-sm">4.9/5 Rating</div>
                  <div className="text-xs text-white/70">2,340 Reviews</div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-white/60 text-sm">
              No credit card required • Free consultation • Insurance accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
