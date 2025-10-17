import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, Users, DollarSign, Headphones, Loader2, Hospital, Briefcase, Shield, Heart } from "lucide-react";
import { formatPhoneNumber, validatePhone, validateEmail } from "@/utils/phoneFormatter";
import { Lead } from "@/types/lead";
import { CONFIG } from "@/config/constants";

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    title: "",
    email: "",
    phone: "",
    orgType: "",
    potentialUsers: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Sharing Opportunities",
      description: "Expand your service offerings with attractive revenue models",
    },
    {
      icon: Building2,
      title: "White-Label Options",
      description: "Seamlessly integrate our platform with your brand",
    },
    {
      icon: Headphones,
      title: "Full Technical Support",
      description: "Dedicated support team to ensure smooth operations",
    },
    {
      icon: Users,
      title: "Marketing Resources",
      description: "Access comprehensive marketing materials and support",
    },
  ];

  const partnerTypes = [
    {
      icon: Hospital,
      title: "Healthcare Systems & Hospitals",
    },
    {
      icon: Briefcase,
      title: "Medical Practices & Clinics",
    },
    {
      icon: Shield,
      title: "Insurance Companies",
    },
    {
      icon: Heart,
      title: "Corporate Wellness Programs",
    },
    {
      icon: Users,
      title: "Technology Resellers",
    },
  ];

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization name is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title/Role is required";
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

    if (!formData.orgType) {
      newErrors.orgType = "Organization type is required";
    }

    if (!formData.potentialUsers) {
      newErrors.potentialUsers = "Please select potential users";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Partnership interest is required";
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
        id: Date.now(),
        timestamp: new Date().toISOString(),
        website_source: "OneTriage",
        form_type: "Contact", // Using Contact since we removed Partner from types
        name: formData.name,
        email: formData.email,
        phone: formatPhoneNumber(formData.phone),
        company: formData.organization,
        message: formData.message,
        status: "New",
        assigned_to: null,
      };

      // Log to console (matches database structure for future backend integration)
      console.log("=== PARTNER FORM SUBMISSION ===");
      console.log("Lead Data (for database):", leadData);
      console.log("================================");

      // Send n8n webhook notification
      console.log("n8n Webhook URL:", CONFIG.WEBHOOKS.PARTNER_FORM);
      
      try {
        console.log("Sending n8n webhook notification...");
        const webhookPayload = {
          formType: "Partner",
          timestamp: leadData.timestamp,
          source: leadData.website_source,
          data: {
            organization: formData.organization,
            name: formData.name,
            title: formData.title,
            email: formData.email,
            phone: formData.phone,
            organizationType: formData.orgType,
            potentialUsers: formData.potentialUsers,
            message: formData.message,
            source: "OneTriage Marketing Website",
          }
        };
        console.log("n8n payload:", JSON.stringify(webhookPayload, null, 2));
        
        const webhookResponse = await fetch(CONFIG.WEBHOOKS.PARTNER_FORM, {
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

      setShowSuccess(true);
      setSuccessMessage(
        "Thank you for your interest! Our partnerships team will contact you within 24 hours."
      );

      setTimeout(() => {
        setFormData({
          organization: "",
          name: "",
          title: "",
          email: "",
          phone: "",
          orgType: "",
          potentialUsers: "",
          message: "",
        });
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Partnership form error:", error);
      setErrors({
        ...errors,
        submit: "Please email us directly at sales@panvatech.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the OneTriage Partner Network
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Partner with us to expand your healthcare services and grow your business
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Grow your business with OneTriage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-icon-bg w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Partner With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with diverse organizations across the healthcare ecosystem
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-light-bg p-6 rounded-xl text-center hover:shadow-md transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <type.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{type.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-card p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Become a Partner
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our partnerships team will reach out
                </p>
              </div>

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
                    Organization Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Organization"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className={errors.organization ? "border-destructive" : ""}
                  />
                  {errors.organization && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.organization}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Title/Role <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Chief Medical Officer"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className={errors.title ? "border-destructive" : ""}
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-destructive">{errors.title}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization Type <span className="text-destructive">*</span>
                    </label>
                    <Select
                      value={formData.orgType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, orgType: value })
                      }
                    >
                      <SelectTrigger
                        className={errors.orgType ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Healthcare Provider">
                          Healthcare Provider
                        </SelectItem>
                        <SelectItem value="Insurance">Insurance</SelectItem>
                        <SelectItem value="Corporate">Corporate</SelectItem>
                        <SelectItem value="Technology Partner">
                          Technology Partner
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.orgType && (
                      <p className="mt-1 text-sm text-destructive">{errors.orgType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Potential Users <span className="text-destructive">*</span>
                    </label>
                    <Select
                      value={formData.potentialUsers}
                      onValueChange={(value) =>
                        setFormData({ ...formData, potentialUsers: value })
                      }
                    >
                      <SelectTrigger
                        className={errors.potentialUsers ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="501-1000">501-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.potentialUsers && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.potentialUsers}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Partnership Interest <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your partnership interests..."
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
                      Submitting...
                    </>
                  ) : (
                    "Submit Partnership Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
