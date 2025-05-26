import { JobType, CompanyPartner } from './types';

export const JOBS: JobType[] = [
  {
    id: 1,
    title: 'Telecalling Executive',
    type: 'Full Time',
    salary: 13000,
    description: 'Make outbound calls to potential customers to promote products and services. Work from the comfort of your home with flexible hours.',
    requirements: [
      'Excellent communication skills',
      'Fluency in English and local languages',
      'Basic computer knowledge',
      'Quiet work environment'
    ],
    company: 'Flipkart'
  },
  {
    id: 2,
    title: 'Data Entry Operator',
    type: 'Part Time',
    salary: 6000,
    description: 'Update and maintain databases, enter customer information, process orders, and manage digital documents.',
    requirements: [
      'Fast typing speed (minimum 40 WPM)',
      'Attention to detail',
      'Basic computer skills',
      'Knowledge of MS Excel'
    ],
    company: 'Amazon'
  },
  {
    id: 3,
    title: 'Customer Support Representative',
    type: 'Full Time',
    salary: 13000,
    description: 'Handle customer inquiries via phone, email, and chat. Provide product information and resolve customer issues.',
    requirements: [
      'Strong communication skills',
      'Problem-solving abilities',
      'Patient and empathetic attitude',
      'Basic technical knowledge'
    ],
    company: 'Mahindra'
  },
  {
    id: 4,
    title: 'Freelance Content Writer',
    type: 'Part Time',
    salary: 6000,
    description: 'Create engaging content for blogs, websites, and social media platforms. Work on your own schedule.',
    requirements: [
      'Excellent writing skills',
      'Creativity and research abilities',
      'Knowledge of SEO principles',
      'Ability to meet deadlines'
    ],
    company: 'ITC'
  },
  {
    id: 5,
    title: 'Online Tutor',
    type: 'Part Time',
    salary: 6000,
    description: 'Teach students online in your area of expertise. Set your own hours and connect with students from around the country.',
    requirements: [
      'Strong knowledge in specific subject areas',
      'Good teaching and communication skills',
      'Patience and understanding',
      'Reliable internet connection'
    ],
    company: 'Isuzu'
  },
  {
    id: 6,
    title: 'Digital Marketing Assistant',
    type: 'Full Time',
    salary: 13000,
    description: 'Assist in implementing marketing campaigns, managing social media accounts, and analyzing marketing data.',
    requirements: [
      'Knowledge of digital marketing concepts',
      'Experience with social media platforms',
      'Basic analytical skills',
      'Creative mindset'
    ],
    company: 'Flipkart'
  }
];

export const COMPANY_PARTNERS: CompanyPartner[] = [
  {
    id: 1,
    name: 'Flipkart',
    logoUrl: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Amazon',
    logoUrl: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Mahindra',
    logoUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Isuzu',
    logoUrl: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'ITC',
    logoUrl: 'https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];