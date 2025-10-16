// Database schema for centralized leads system
export interface Lead {
  id: number; // auto-increment
  timestamp: string; // ISO 8601 format
  website_source: string; // 'OneTriage', 'CareChakra', 'RegribMind', etc.
  form_type: 'Contact';
  name: string;
  email: string;
  phone: string; // formatted as (XXX) XXX-XXXX
  company: string | null; // nullable
  message: string;
  status: 'New' | 'Contacted' | 'Converted' | 'Closed';
  assigned_to: string | null; // nullable
}

