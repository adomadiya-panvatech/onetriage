import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Mail, Clock, Loader2, Send, CheckCircle2, MessageSquare, Video, Users } from "lucide-react";
import { formatPhoneNumber, validatePhone, validateEmail } from "@/utils/phoneFormatter";
import { Lead } from "@/types/lead";
import { CONFIG } from "@/config/constants";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    preferredContactMethod: "",
    bestTimeToContact: "",
    serviceInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number (must be 10 digits)";
    }

    if (!formData.serviceInterest.trim()) {
      newErrors.serviceInterest = "Service interest is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Prepare lead data matching database schema
      const leadData: Lead = {
        id: Date.now(), // temporary ID for console logging
        timestamp: new Date().toISOString(),
        website_source: "OneTriage",
        form_type: "Contact",
        name: formData.fullName,
        email: formData.email,
        phone: formatPhoneNumber(formData.phone),
        company: formData.company || null,
        message: formData.message,
        status: "New",
        assigned_to: null,
      };

      // Log to console (matches database structure for future backend integration)
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("Lead Data (for database):", leadData);
      console.log("================================");

      // Split full name into first and last name
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

        // Send n8n webhook notification
        console.log("n8n Webhook URL:", CONFIG.WEBHOOKS.CONTACT_FORM);
        
        try {
          console.log("Sending n8n webhook notification...");
          const webhookPayload = {
            formType: "Contact",
            timestamp: leadData.timestamp,
            source: leadData.website_source,
            data: {
              name: leadData.name,
              email: leadData.email,
              phone: leadData.phone,
              company: leadData.company || null,
              preferredContactMethod: formData.preferredContactMethod || null,
              bestTimeToContact: formData.bestTimeToContact || null,
              serviceInterest: formData.serviceInterest,
              message: leadData.message,
              source: "OneTriage Marketing Website",
            }
          };
          console.log("n8n payload:", JSON.stringify(webhookPayload, null, 2));
          
          const webhookResponse = await fetch(CONFIG.WEBHOOKS.CONTACT_FORM, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(webhookPayload)
          });
          
          console.log("n8n response status:", webhookResponse.status);
          console.log("n8n response:", await webhookResponse.text());
        } catch (webhookError) {
          console.warn("n8n webhook notification failed:", webhookError);
          // Don't fail the form submission if webhook notification fails
        }

      // Call API endpoint
      const apiPayload = {
        lead: {
          firstName: firstName,
          lastName: lastName,
          email: leadData.email,
          phone: leadData.phone,
          company: leadData.company || "",
          serviceInterest: formData.serviceInterest,
          message: leadData.message,
        },
        submittedAt: leadData.timestamp,
        source: "OneTriage Marketing Website",
      };

      // API call commented out
      // const response = await fetch(CONFIG.API_ENDPOINTS.CONTACT_SUBMIT, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(apiPayload),
      // });

      // if (!response.ok) {
      //   throw new Error(`API call failed with status ${response.status}`);
      // }

    

      // Show success message
      setShowSuccess(true);
      setSuccessMessage("Thank you! Your demo request has been submitted. Our team will contact you within 24 hours to confirm your personalized demo.");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          preferredContactMethod: "",
          bestTimeToContact: "",
          serviceInterest: "",
          message: "",
        });
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        ...errors,
        submit:
          "There was an error sending your message. Please try again, or email us directly at support@onetriage.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data Schemas
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact OneTriage",
    "description": "Schedule a demo of OneTriage's comprehensive healthcare platform. AI patient triage, care coordination, provider networks, and partner programs.",
    "url": "https://www.onetriage.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "OneTriage",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-916-2459",
        "contactType": "customer service",
        "email": "support@onetriage.com",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14269 Danielson St, Suite 400",
        "addressLocality": "Poway",
        "addressRegion": "CA",
        "postalCode": "92064",
        "addressCountry": "US"
      }
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.onetriage.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              We're here to help 24/7. Schedule a personalized demo of our AI-driven patient triage and care coordination platform.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 text-base">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {showSuccess && (
                <div className="mb-6 p-4 bg-success/10 border-2 border-success/30 rounded-lg text-success flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>{successMessage}</span>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive/30 rounded-lg text-destructive">
                  {errors.submit}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Contact Method
                      </label>
                      <Select
                        value={formData.preferredContactMethod}
                        onValueChange={(value) =>
                          setFormData({ ...formData, preferredContactMethod: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="microsoft-team">Microsoft Team</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Interest <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g., Healthcare IT Solutions, Telemedicine, etc."
                        value={formData.serviceInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceInterest: e.target.value })
                        }
                        className={errors.serviceInterest ? "border-destructive" : ""}
                      />
                      {errors.serviceInterest && (
                        <p className="mt-1 text-sm text-destructive">{errors.serviceInterest}</p>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Best Time to Contact
                      </label>
                      <Select
                        value={formData.bestTimeToContact}
                        onValueChange={(value) =>
                          setFormData({ ...formData, bestTimeToContact: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible / Any Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message/Comments <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Call Us Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Call Us</h3>
              <a
                href="tel:1-800-916-2459"
                className="text-xl font-bold text-secondary hover:text-secondary/80 transition-colors block mb-1"
              >
                1-800-916-2459
              </a>
              <p className="text-muted-foreground text-xs">
                Available 24/7 for emergencies
              </p>
            </div>

            {/* Visit Us Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-foreground font-medium text-sm mb-1">
                14269 Danielson St, Suite 400
              </p>
              <p className="text-muted-foreground text-xs mb-3">
                Poway, CA 92064
              </p>
              <a
                href="https://www.google.com/maps?q=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium text-xs inline-flex items-center gap-1"
              >
                Get Directions <span>→</span>
              </a>
            </div>

            {/* Email Us Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Email Us</h3>
              <div className="space-y-2">
                <div>
                  <a
                    href={`mailto:${CONFIG.EMAILS.SUPPORT}`}
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-medium block"
                  >
                    {CONFIG.EMAILS.SUPPORT}
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Support & General</p>
                </div>
                <div>
                  <a
                    href={`mailto:${CONFIG.EMAILS.SALES}`}
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-medium block"
                  >
                    {CONFIG.EMAILS.SALES}
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Sales & Business</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl shadow-md p-5 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">
                Business Hours
              </h3>
              <div className="space-y-1.5 text-xs">
                <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                <p>Weekend: Closed</p>
                <p className="text-accent font-medium text-xs mt-2 pt-2 border-t border-white/20">
                  *24/7 Emergency Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content-Rich Section for SEO */}
        <section className="mt-12 md:mt-16 max-w-6xl mx-auto">
          <article className="bg-gradient-to-br from-white to-light-bg/30 rounded-xl shadow-md p-6 md:p-10 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Video className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                What to Expect from Your OneTriage Demo
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base">
                Our personalized demonstration provides healthcare organizations with a comprehensive overview of how <strong className="text-foreground">OneTriage's AI-powered healthcare platform</strong> can transform your operations. During your demo, our team will walk you through the complete ecosystem, including <strong className="text-foreground">AI-driven patient triage capabilities</strong>, automated care coordination workflows, provider network management features, and B2B partnership opportunities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
                <div className="bg-white/60 p-4 rounded-lg border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Live Platform Walkthrough</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">See the platform in action with real-world scenarios and use cases tailored to your organization's needs.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/60 p-4 rounded-lg border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Q&A Session</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Get answers to your specific questions about implementation, integration, security, and ROI potential.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/60 p-4 rounded-lg border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Custom Solution Design</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Discuss how OneTriage can be configured to meet your unique healthcare workflow requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 md:p-6 bg-white/80 rounded-lg border border-border/50">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Why Healthcare Organizations Choose OneTriage</h3>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Proven Results:</strong> Healthcare providers using OneTriage report 60% reduction in patient wait times and 75% faster care coordination.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">HIPAA Compliant:</strong> Enterprise-grade security with SOC 2 Type II certification and complete regulatory compliance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">EHR Integration:</strong> Seamless connectivity with Epic, Cerner, Allscripts, and other major EHR systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Rapid Implementation:</strong> Typical deployment timeframe of 2-4 weeks with dedicated support throughout.</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        {/* Map Section */}
        <div className="mt-12 md:mt-16 bg-white rounded-xl shadow-md p-6 md:p-8 max-w-7xl mx-auto border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Our Location
          </h2>
          <div className="mb-4 text-center">
            <p className="text-foreground font-medium mb-1">14269 Danielson St, Suite 400</p>
            <p className="text-muted-foreground text-sm">Poway, CA 92064</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-117.0358!3d32.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c8b0e0c0c0b%3A0x0!2s14269%20Danielson%20St%2C%20Poway%2C%20CA%2092064!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OneTriage Office Location - 14269 Danielson St, Suite 400, Poway, CA 92064"
              className="w-full md:h-[450px] h-[300px]"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps?q=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-sm md:text-base"
            >
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
