const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-light-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-card p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Accessibility & Information Notice
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 15, 2025
          </p>

          <div className="prose prose-slate max-w-none space-y-10">
            {/* Accessibility Commitment */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OneTriage is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
              <div className="bg-light-bg p-6 rounded-lg space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    WCAG 2.1 Level AA Compliance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our platform strives to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure content is perceivable, operable, understandable, and robust for all users.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Keyboard Navigation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All interactive elements can be accessed and operated using keyboard navigation for users who cannot use a mouse.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Screen Reader Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our platform is optimized for screen readers with proper semantic HTML, ARIA labels, and alternative text for images.
                  </p>
                </div>
              </div>
            </section>

            {/* Platform Features */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Platform Accessibility Features
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Adjustable Text Sizes:</strong> Users can adjust text size through browser settings without loss of functionality
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Color Contrast:</strong> High contrast ratios between text and background for improved readability
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Video Captions:</strong> All video consultations support closed captioning when available
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Responsive Design:</strong> Platform adapts to different screen sizes and assistive technologies
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Clear Navigation:</strong> Consistent, intuitive navigation structure throughout the platform
                  </span>
                </li>
              </ul>
            </section>

            {/* Data Collection Notice */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Data Collection Notice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OneTriage collects and processes information to provide telemedicine services. This notice explains what data we collect, why we collect it, and how you can control it.
              </p>
              
              <div className="space-y-4">
                <div className="bg-light-bg p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">What We Collect</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Personal identification information (name, email, phone, date of birth)</li>
                    <li>Health and medical information necessary for consultations</li>
                    <li>Insurance and payment information</li>
                    <li>Technical data (IP address, browser type, device information)</li>
                    <li>Usage data (pages visited, features used, session duration)</li>
                  </ul>
                </div>

                <div className="bg-light-bg p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Why We Collect It</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>To facilitate telemedicine consultations and provide healthcare services</li>
                    <li>To maintain accurate health records and treatment history</li>
                    <li>To process payments and insurance claims</li>
                    <li>To improve platform performance and user experience</li>
                    <li>To comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div className="bg-light-bg p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">How We Protect It</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>HIPAA-compliant encryption and security measures</li>
                    <li>Secure data centers with redundant backups</li>
                    <li>Strict access controls and authentication requirements</li>
                    <li>Regular security audits and compliance reviews</li>
                    <li>Employee training on data privacy and security</li>
                  </ul>
                </div>

                <div className="bg-light-bg p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Your Control</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    You have the right to:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Access and review your data</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Restrict certain data processing activities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookie Notice */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cookie Notice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OneTriage uses cookies and similar tracking technologies to enhance your experience and analyze platform usage.
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Required for platform functionality, authentication, and security. Cannot be disabled.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Performance Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how users interact with the platform to improve performance.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Marketing Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver relevant content and measure campaign effectiveness. Can be disabled.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Accessibility Assistance
              </h2>
              <p className="text-muted-foreground mb-4">
                If you experience any difficulty accessing any part of our platform or have suggestions for improvement, please contact our accessibility team:
              </p>
              <div className="bg-light-bg p-6 rounded-lg space-y-2">
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:accessibility@onetriage.com"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    accessibility@onetriage.com
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
            </section>

            {/* Feedback */}
            <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                We Welcome Your Feedback
              </h3>
              <p className="text-sm text-muted-foreground">
                OneTriage is committed to continuous improvement. If you have feedback about our accessibility efforts or encounter barriers while using our platform, please let us know. Your input helps us serve all users better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
