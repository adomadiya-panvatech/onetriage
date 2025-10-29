import { CONFIG } from "@/config/constants";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Contact Form Data",
          text: "When you submit our contact or demo request forms, we collect your full name, email address, phone number, company name, preferred demo date/time, and any messages or comments you provide.",
        },
        {
          subtitle: "Partner Application Data",
          text: "For partnership inquiries, we collect company information, contact details, geographic region, partnership type interest, current patient volume, and additional information about your organization.",
        },
        {
          subtitle: "Personal Information",
          text: "We collect information such as your name, email address, phone number, date of birth, and insurance information when you register for our services.",
        },
        {
          subtitle: "Healthcare Information",
          text: "During consultations, we collect health-related information, medical history, symptoms, and treatment information necessary to provide care.",
        },
        {
          subtitle: "Technical Data",
          text: "We automatically collect information about your device, IP address, browser type, and usage patterns when you access our platform.",
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar technologies to enhance your experience, remember preferences, and analyze platform usage.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Lead Management & Follow-up",
          text: "Information from contact and partner forms is used to qualify leads, schedule demos, and follow up on inquiries. Our team uses n8n workflow automation to route inquiries to the appropriate team members via Microsoft Teams notifications.",
        },
        {
          subtitle: "Demo Scheduling & Coordination",
          text: "When you provide a preferred demo date and time, we use this information to coordinate personalized demonstrations of our platform. Automated workflows send calendar invites and reminders to ensure smooth scheduling.",
        },
        {
          subtitle: "Service Delivery",
          text: "We use your information to facilitate telemedicine consultations, connect you with healthcare providers, and maintain your health records.",
        },
        {
          subtitle: "Service Improvements",
          text: "Your data helps us improve our platform, develop new features, and enhance the quality of care provided.",
        },
        {
          subtitle: "Communications",
          text: "We may send you appointment reminders, health information, platform updates, demo follow-ups, and marketing communications (which you can opt out of at any time).",
        },
        {
          subtitle: "Legal Compliance",
          text: "We use and disclose information as required by law, including compliance with HIPAA, state regulations, and court orders.",
        },
      ],
    },
    {
      title: "3. Data Sharing and Disclosure",
      content: [
        {
          subtitle: "Internal Workflow Automation",
          text: "We use n8n workflow automation to process form submissions and route them to our sales and partnership teams via Microsoft Teams. This ensures timely response to your inquiries.",
        },
        {
          subtitle: "Healthcare Providers",
          text: "We share necessary information with healthcare providers involved in your care to ensure continuity and quality of treatment.",
        },
        {
          subtitle: "Service Providers",
          text: "We work with trusted third-party service providers who assist with platform operations, payment processing, technical support, analytics, and workflow automation (including n8n and Microsoft Teams).",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, to protect rights and safety, or in response to legal processes.",
        },
        {
          subtitle: "Never Sold",
          text: "We never sell your personal or health information to third parties for marketing purposes.",
        },
      ],
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "HIPAA Compliance",
          text: "Our platform is fully HIPAA-compliant, implementing all required administrative, physical, and technical safeguards.",
        },
        {
          subtitle: "Encryption",
          text: "All data is encrypted in transit using TLS 1.2 or higher and at rest using industry-standard encryption protocols.",
        },
        {
          subtitle: "Secure Storage",
          text: "Health records are stored in secure, HIPAA-compliant data centers with redundant backups and disaster recovery systems.",
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls ensuring only authorized personnel can access your information on a need-to-know basis.",
        },
      ],
    },
    {
      title: "5. Your Rights",
      content: [
        {
          subtitle: "Access Your Data",
          text: "You have the right to access, review, and obtain copies of your personal and health information.",
        },
        {
          subtitle: "Corrections",
          text: "You can request corrections to inaccurate or incomplete information in your records.",
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your data, subject to legal and regulatory retention requirements (including HIPAA requirements for medical records).",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time while still receiving essential service-related messages such as demo confirmations and appointment reminders.",
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to receive your data in a structured, commonly used format and to transmit it to another service provider.",
        },
      ],
    },
    {
      title: "6. Data Retention",
      content: [
        {
          subtitle: "Contact & Lead Data",
          text: "Information submitted through contact and partner forms is retained for legitimate business purposes including lead follow-up, demo scheduling, and relationship management. You may request deletion at any time.",
        },
        {
          subtitle: "Medical Records",
          text: "Healthcare records are retained according to HIPAA requirements and applicable state laws, typically for a minimum of 6-7 years from the last date of service.",
        },
        {
          subtitle: "Automated Deletion",
          text: "We automatically delete certain temporary data (such as session cookies) after specified retention periods. Marketing data is deleted upon opt-out request.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-light-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-card p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 15, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <p className="text-foreground mb-8">
              OneTriage is committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our telemedicine platform.
            </p>

            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact our Privacy Officer:
              </p>
              <div className="bg-light-bg p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    {CONFIG.EMAILS.SUPPORT}
                  </a>
                </p>
                <p className="text-foreground mt-2">
                  <strong>Address:</strong> 14269 Danielson St, Suite 400, Poway, CA 92064
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Your Privacy Rights</h3>
              <p className="text-sm text-foreground mb-3">
                To exercise any of your privacy rights, including access, correction, deletion, or opt-out requests, please contact our Privacy Officer at the email address above. We will respond to your request within 30 days.
              </p>
            </div>

            <div className="mt-6 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> This Privacy Policy may be updated periodically. We will notify you of significant changes through our platform or via email. Your continued use of OneTriage after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
