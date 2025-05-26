export interface JobType {
  id: number;
  title: string;
  type: 'Full Time' | 'Part Time';
  salary: number;
  description: string;
  requirements: string[];
  company: string;
}

export interface ApplicationFormData {
  name: string;
  qualification: string;
  contact: string;
  age: string;
  gender: string;
  location: string;
  jobInterest: string;
}

export interface CompanyPartner {
  id: number;
  name: string;
  logoUrl: string;
}