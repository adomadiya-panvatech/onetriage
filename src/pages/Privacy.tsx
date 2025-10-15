const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
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
          subtitle: "Service Delivery",
          text: "We use your information to facilitate telemedicine consultations, connect you with healthcare providers, and maintain your health records.",
        },
        {
          subtitle: "Service Improvements",
          text: "Your data helps us improve our platform, develop new features, and enhance the quality of care provided.",
        },
        {
          subtitle: "Communications",
          text: "We may send you appointment reminders, health information, platform updates, and marketing communications (which you can opt out of).",
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
          subtitle: "Healthcare Providers",
          text: "We share necessary information with healthcare providers involved in your care to ensure continuity and quality of treatment.",
        },
        {
          subtitle: "Service Providers",
          text: "We work with trusted third-party service providers who assist with platform operations, payment processing, and technical support.",
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
          text: "You may request deletion of your data, subject to legal and regulatory retention requirements.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time while still receiving essential service-related messages.",
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
                    href="mailto:privacy@onetriage.com"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    privacy@onetriage.com
                  </a>
                </p>
                <p className="text-foreground mt-2">
                  <strong>Address:</strong> 14269 Danielson St, Suite 400, Poway, CA 92064
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
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
