import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock, Loader2 } from "lucide-react";
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
    <div className="min-h-screen bg-light-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Form (60%) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {showSuccess && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg text-success">
                  {successMessage}
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                  {errors.submit}
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
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info Cards (40%) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Call Us Card */}
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <div className="bg-icon-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Call Us</h3>
              <a
                href="tel:1-800-916-2459"
                className="text-2xl font-bold text-secondary hover:text-secondary/80 transition-colors block mb-2"
              >
                1-800-916-2459
              </a>
              <p className="text-sm text-muted-foreground">
                Available 24/7 for emergencies
              </p>
            </div>

            {/* Visit Us Card */}
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <div className="bg-icon-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-2">
                14269 Danielson St, Suite 400
                <br />
                Poway, CA 92064
              </p>
              <a
                href="https://www.google.com/maps?q=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors font-medium text-sm inline-flex items-center"
              >
                Get Directions →
              </a>
            </div>

            {/* Email Us Card */}
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <div className="bg-icon-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Us</h3>
              <div className="space-y-3">
                <div>
                  <a
                    href="#"
                    className="text-secondary hover:text-secondary/80 transition-colors font-semibold block"
                  >
                    {CONFIG.EMAILS.SUPPORT}
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Support & General Inquiries
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-secondary hover:text-secondary/80 transition-colors font-semibold block"
                  >
                    {CONFIG.EMAILS.SALES}
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Sales & Business Development
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <div className="bg-icon-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Business Hours
              </h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday - Sunday: Closed</p>
                <p className="text-secondary font-medium text-xs mt-2">
                  *24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Our Location
          </h2>
          <div className="bg-white rounded-xl shadow-card p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-117.0358!3d32.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c8b0e0c0c0b%3A0x0!2s14269%20Danielson%20St%2C%20Poway%2C%20CA%2092064!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OneTriage Office Location"
              className="md:h-[450px] h-[350px]"
            />
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps?q=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                View Larger Map →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
