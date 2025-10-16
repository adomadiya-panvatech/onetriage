// Global configuration constants
export const CONFIG = {
  // API Endpoints
  API_ENDPOINTS: {
    CONTACT_SUBMIT: "https://hcmktapi.panvatech.com/api/contact/onetriage/submit",
  },
  
  // n8n Webhook URLs
  WEBHOOKS: {
    CONTACT_FORM: "https://n8n.panvatech.com/webhook/contact-form",
    PARTNER_FORM: "https://n8n.panvatech.com/webhook/contact-form",
    //: "https://n8n.panvatech.com/webhook-test/contact-form", // Using same endpoint for now
  },
  
  // Email addresses
  EMAILS: {
    SUPPORT: "support@panvatech.com",
    SALES: "sales@panvatech.com",
  },
  
  // Company information
  COMPANY: {
    NAME: "OneTriage",
    PHONE: "1-800-916-2459",
    ADDRESS: "14269 Danielson St, Suite 400, Poway, CA 92064",
  },
} as const;
