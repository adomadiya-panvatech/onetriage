import { CONFIG } from "@/config/constants";

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using OneTriage's telemedicine platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with these terms, please do not use our services.",
    },
    {
      title: "2. Service Description",
      content:
        "OneTriage provides a telemedicine platform that connects patients with licensed healthcare providers through secure video consultations. Our services include appointment scheduling, video calling, health record management, and prescription services where applicable. Services are available 24/7, subject to provider availability.",
    },
    {
      title: "3. User Accounts and Registration",
      content:
        "To use our services, you must create an account with accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old or have parental consent to use our services. You agree to notify us immediately of any unauthorized access or security breaches.",
    },
    {
      title: "4. User Responsibilities",
      content:
        "You agree to provide accurate health information, comply with provider instructions, attend scheduled appointments or cancel with appropriate notice, pay all applicable fees, and use the platform only for lawful purposes. You must not misuse the platform, share your account, provide false information, or engage in any activity that could harm the platform or other users.",
    },
    {
      title: "5. Prohibited Uses",
      content:
        "You may not use OneTriage to seek prescriptions for controlled substances without legitimate medical need, share or resell accounts, attempt to breach security measures, use automated systems to access the platform, impersonate others, or engage in fraudulent activities.",
    },
    {
      title: "6. Intellectual Property Rights",
      content:
        "All content, features, and functionality on the OneTriage platform, including but not limited to text, graphics, logos, software, and user interfaces, are owned by OneTriage and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "OneTriage provides a platform connecting patients with healthcare providers but is not responsible for the medical advice, diagnosis, or treatment provided by healthcare professionals. To the maximum extent permitted by law, OneTriage shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses.",
    },
    {
      title: "8. Medical Disclaimer",
      content:
        "OneTriage is NOT for medical emergencies. If you are experiencing a medical emergency, call 911 immediately. Our services are not a substitute for in-person medical care when required. The provider-patient relationship is established directly between you and the healthcare provider, not with OneTriage. Providers make independent medical judgments and decisions.",
    },
    {
      title: "9. Payment Terms",
      content:
        "You agree to pay all fees associated with the services you receive. Fees may include consultation charges, subscription fees, and other applicable costs. Payment is due at the time of service unless other arrangements are made. We accept various payment methods and use secure payment processing. Refund policies are subject to applicable laws and our refund policy.",
    },
    {
      title: "10. Termination Rights",
      content:
        "We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, non-payment, or any other reason we deem appropriate. You may terminate your account at any time by contacting us. Upon termination, you will lose access to the platform, but certain data retention obligations may apply.",
    },
    {
      title: "11. Governing Law",
      content:
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts located in San Diego County, California.",
    },
    {
      title: "12. Changes to Terms",
      content:
        "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the platform. We will notify you of significant changes via email or platform notification. Your continued use of OneTriage after changes constitutes acceptance of the updated terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-light-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-card p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 15, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <p className="text-foreground mb-8">
              Please read these Terms and Conditions carefully before using the OneTriage telemedicine platform. These terms govern your access to and use of our services.
            </p>

            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-light-bg p-6 rounded-lg space-y-2">
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a
                  
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    {CONFIG.EMAILS.SUPPORT}
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:1-800-916-2459"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    1-800-916-2459
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Address:</strong> 14269 Danielson St, Suite 400, Poway, CA 92064
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Important:</strong> By using OneTriage, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, you must discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
