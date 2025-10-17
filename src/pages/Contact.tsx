import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock, Loader2, Send, CheckCircle2, MessageSquare, Zap } from "lucide-react";
import { formatPhoneNumber, validatePhone, validateEmail } from "@/utils/phoneFormatter";
import { Lead } from "@/types/lead";
import { CONFIG } from "@/config/constants";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
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

      const response = await fetch(CONFIG.API_ENDPOINTS.CONTACT_SUBMIT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

    

      // Show success message
      setShowSuccess(true);
      setSuccessMessage("Thank you! Your message has been sent successfully. We'll respond within 24 hours.");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
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

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-semibold">24/7 Support Available</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's Get You
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mt-2">
                Started Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Questions about our telemedicine services? Our team is ready to help you get the care you need.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>No obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Form (60%) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    We typically respond within 1 hour during business hours
                  </p>
                </div>
              </div>

              {showSuccess && (
                <div className="mb-6 p-5 bg-gradient-to-r from-success/10 to-success/5 border-2 border-success/30 rounded-2xl text-success flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold">{successMessage}</span>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-5 bg-gradient-to-r from-destructive/10 to-destructive/5 border-2 border-destructive/30 rounded-2xl text-destructive flex items-center gap-3">
                  <Zap className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold">{errors.submit}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Company/Organization
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Company (Optional)"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
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
                  className="w-full group bg-gradient-to-r from-primary to-primary-light hover:shadow-xl text-white"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  By submitting, you agree to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                </p>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info Cards (40%) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Call Us Card */}
            <div className="group bg-gradient-to-br from-white to-light-bg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-border hover:border-primary">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur group-hover:blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-secondary to-accent w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Call Us Directly</h3>
              <a
                href="tel:1-800-916-2459"
                className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity block mb-3"
              >
                1-800-916-2459
              </a>
              <p className="text-muted-foreground font-medium">
                24/7 Emergency Support
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Available Now
              </div>
            </div>

            {/* Visit Us Card */}
            <div className="group bg-gradient-to-br from-white to-light-bg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-border hover:border-primary">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl blur group-hover:blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-primary to-primary-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visit Our Office</h3>
              <p className="text-foreground font-semibold mb-1">
                14269 Danielson St, Suite 400
              </p>
              <p className="text-muted-foreground mb-4">
                Poway, CA 92064
              </p>
              <a
                href="https://www.google.com/maps?q=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Directions
                <MapPin className="h-4 w-4" />
              </a>
            </div>

            {/* Email Us Card */}
            <div className="group bg-gradient-to-br from-white to-light-bg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-border hover:border-primary">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur group-hover:blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-accent to-secondary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Email Support</h3>
              <div className="space-y-4">
                <div className="bg-light-bg p-4 rounded-xl border border-border">
                  <a
                    href={`mailto:${CONFIG.EMAILS.SUPPORT}`}
                    className="text-primary hover:text-primary/80 transition-colors font-bold block text-lg"
                  >
                    {CONFIG.EMAILS.SUPPORT}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Support & General Inquiries
                  </p>
                </div>
                <div className="bg-light-bg p-4 rounded-xl border border-border">
                  <a
                    href={`mailto:${CONFIG.EMAILS.SALES}`}
                    className="text-primary hover:text-primary/80 transition-colors font-bold block text-lg"
                  >
                    {CONFIG.EMAILS.SALES}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sales & Business Development
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="group bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="font-semibold text-lg">Monday - Friday</p>
                  <p className="text-white/90">9:00 AM - 6:00 PM EST</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="font-semibold text-lg">Weekend</p>
                  <p className="text-white/90">Closed</p>
                </div>
                <div className="bg-accent text-foreground rounded-xl p-4 font-bold text-sm">
                  ⚡ 24/7 Emergency Support Available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 py-16 bg-gradient-to-b from-light-bg to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <MapPin className="h-4 w-4" />
                Find Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-muted-foreground">
                We're located in the heart of Poway, California
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-4 border-2 border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-117.0358!3d32.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c8b0e0c0c0b%3A0x0!2s14269%20Danielson%20St%2C%20Poway%2C%20CA%2092064!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "1.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OneTriage Office Location - 14269 Danielson St, Suite 400, Poway, CA 92064"
                className="md:h-[500px] h-[400px]"
              />
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps?q=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <MapPin className="h-5 w-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
