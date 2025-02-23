import { XIcon, Music2Icon } from "lucide-react";
import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

export const navLinks = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Services',
      url: '/services'
    },
    {
      label: 'Products',
      url: '/products'
    },
    {
      label: 'Contact',
      url: '/contact'
    }
  ];

export const socialLinks = [
    { name: "Facebook", icon: XIcon, href: "#" },
    { name: "Twitter", icon: XIcon, href: "#" },
    { name: "TikTok", icon: Music2Icon, href: "#" },
    { name: "Instagram", icon: XIcon, href: "#" },
  ];

export const features = [
  {
    name: 'Basic (Grade 1-JSS 3)',
    description: 'Foundational tutoring in core subjects to build strong academic skills.',
    icon: BookOpenIcon,
  },
  {
    name: 'Senior Secondary (SS1-SS3)',
    description: 'Advanced tutoring aligned with national and international curricula.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'K-12 (SAT, WAEC/NECO, UTME, IELTS)',
    description: 'Comprehensive preparation for standardized tests and national exams.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Graduate & Beyond (GRE, GMAT, TOEFL, IELTS)',
    description: 'Specialized coaching for graduate-level exams to equip students for international opportunities.',
    icon: BriefcaseIcon,
  },
];

export const ePrepLinks = [ 'Basic Classes', 'Grade K-12', 'Graduate & Beyond' ]

export const busEntLinks = [ 'Talent Recruitment', 'Corporate Training Programs', 'Consulting Services', 'Software & Solutions' ]

export const studyAbroadLinks = [ 'Overseas Admission Application', 'Right Through Program', 'Student Visa Application Support' ]

export const travelAbroadLinks = [ 'EB1-A', 'EB2-NIW' ]

export const footerLinks = [
    "Privacy Policy",
    "Terms of Service",
    "FAQs",
    "Contact Us",
]

export const stats = [
  { id: 1, name: 'Professional Experience', value: '12 years' },
  { id: 2, name: 'University Acceptance Rate', value: '95%' },
  { id: 3, name: 'Guidance & Support', value: '654 Hours' },
]