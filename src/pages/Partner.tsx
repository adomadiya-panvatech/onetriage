import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
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
import { Building2, Users, DollarSign, Headphones, Loader2, Hospital, Briefcase, Shield, Heart, CheckCircle2, TrendingUp } from "lucide-react";
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
    website: "",
    region: "",
    orgType: "",
    potentialUsers: "",
    preferredContactMethod: "",
    bestTimeToContact: "",
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
      newErrors.orgType = "Partnership type is required";
    }

    if (!formData.potentialUsers) {
      newErrors.potentialUsers = "Potential users is required";
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
            website: formData.website,
            region: formData.region,
            partnershipType: formData.orgType,
            potentialUsers: formData.potentialUsers,
            preferredContactMethod: formData.preferredContactMethod || null,
            bestTimeToContact: formData.bestTimeToContact || null,
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
          website: "",
          region: "",
          orgType: "",
          potentialUsers: "",
          preferredContactMethod: "",
          bestTimeToContact: "",
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

  // Structured Data Schemas
  const partnerPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Partner With OneTriage - Healthcare Technology Partnership",
    "description": "Join OneTriage's partner network. Expand your healthcare services with our HIPAA-compliant referral management platform. White-label options, revenue sharing, and dedicated support available.",
    "url": "https://www.onetriage.com/partner"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OneTriage",
    "url": "https://www.onetriage.com",
    "description": "Healthcare referral management and AI patient triage platform offering B2B partnership opportunities",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-916-2459",
      "contactType": "sales",
      "email": "sales@onetriage.com",
      "areaServed": "US",
      "availableLanguage": "English"
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
        "name": "Partner With Us",
        "item": "https://www.onetriage.com/partner"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(partnerPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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

      {/* Content-Rich Section for SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Building Successful Healthcare Technology Partnerships
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  OneTriage's <strong>B2B partner program</strong> enables healthcare technology resellers, consulting firms, and healthcare systems to expand their service offerings while driving revenue growth. Our comprehensive partnership model provides flexible engagement options designed to meet the diverse needs of healthcare technology companies operating across various market segments.
                </p>
                
                <p>
                  Partners benefit from <strong>white-label solutions</strong> that allow seamless integration of OneTriage's referral management platform into their existing service portfolios. This capability enables technology resellers to offer enterprise-grade healthcare referral automation to their clients while maintaining brand consistency and reducing development overhead. Our white-label platform includes full customization options, allowing partners to tailor the solution to their specific market positioning and client requirements.
                </p>
                
                <p>
                  The <strong>revenue sharing model</strong> provides attractive financial incentives for partners who successfully refer healthcare organizations to OneTriage. Partners receive competitive commission structures based on client subscription value, with opportunities for ongoing revenue generation through client renewals and expansion accounts. Additionally, partners who offer white-label implementations benefit from margin opportunities on platform licensing and implementation services.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-light-bg p-6 rounded-xl border-2 border-border">
                    <TrendingUp className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Market Expansion Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to OneTriage's comprehensive referral management platform enables partners to expand into new healthcare verticals including hospital systems, ambulatory care networks, accountable care organizations, and specialty practice groups.
                    </p>
                  </div>
                  
                  <div className="bg-light-bg p-6 rounded-xl border-2 border-border">
                    <Headphones className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Comprehensive Partner Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicated partner success team provides technical support, sales enablement resources, marketing materials, and training programs to ensure successful client implementations and ongoing partner growth.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From inquiry to launch in 4 simple steps
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Submit Inquiry</h3>
                <p className="text-sm text-muted-foreground">
                  Complete the partnership form below
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Discovery Call</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with our partnerships team within 24-48 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Agreement & Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Finalize terms and begin technical integration
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">Go Live</h3>
                <p className="text-sm text-muted-foreground">
                  Launch and start serving your users (2-4 weeks)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our partners are transforming healthcare delivery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-light-bg p-8 rounded-xl">
              <div className="text-primary text-5xl font-serif mb-4">"</div>
              <p className="text-muted-foreground mb-6">
                "OneTriage helped us reduce ER wait times by 58% and improved patient satisfaction scores significantly. The integration was seamless."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Hospital className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Regional Health System</p>
                  <p className="text-sm text-muted-foreground">500+ bed hospital network</p>
                </div>
              </div>
            </div>
            <div className="bg-light-bg p-8 rounded-xl">
              <div className="text-secondary text-5xl font-serif mb-4">"</div>
              <p className="text-muted-foreground mb-6">
                "As a technology reseller, OneTriage's white-label solution allowed us to expand our healthcare offerings quickly with full support."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Healthcare IT Partner</p>
                  <p className="text-sm text-muted-foreground">Multi-state reseller</p>
                </div>
              </div>
            </div>
            <div className="bg-light-bg p-8 rounded-xl">
              <div className="text-accent text-5xl font-serif mb-4">"</div>
              <p className="text-muted-foreground mb-6">
                "The revenue sharing model exceeded our expectations. We're now able to offer 24/7 care to our members cost-effectively."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Insurance Provider</p>
                  <p className="text-sm text-muted-foreground">50,000+ covered lives</p>
                </div>
              </div>
            </div>
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

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Organization Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground border-b-2 border-primary pb-2">
                    1 Organization Information
                  </h3>
                  
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
                        <SelectContent className="bg-white z-50">
                          <SelectItem value="Reseller">Reseller</SelectItem>
                          <SelectItem value="Technology Partner">Technology Partner</SelectItem>
                          <SelectItem value="Healthcare Provider">Healthcare Provider</SelectItem>
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
                        <SelectContent className="bg-white z-50">
                          <SelectItem value="1-50">1-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="501-1000">501-1000</SelectItem>
                          <SelectItem value="1000+">1000+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.potentialUsers && (
                        <p className="mt-1 text-sm text-destructive">{errors.potentialUsers}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground border-b-2 border-primary pb-2">
                    2 Contact Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Full Name"
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
                        placeholder="you@company.com"
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

                {/* Section 3: Partnership Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground border-b-2 border-primary pb-2">
                    3 Partnership Details
                  </h3>
                  
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
