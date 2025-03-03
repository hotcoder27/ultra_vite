import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon, BuildingLibraryIcon, UserIcon } from '@heroicons/react/24/outline';
import { Facebook, Instagram, Youtube, Linkedin } from "react-feather";
import { learntyImg, learnbkImg, learnxyImg, learn } from '../utils';

export const navLinks = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Services',
      url: '#services'
    },
    {
      label: 'Products',
      url: '/products'
    },
    {
      label: 'Contact',
      url: '#contact'
    }
  ];

export const missions = [
  {
    title: "Online Tutoring and Test Prep",
    description: "Offering foundational and advanced tutoring across all educational levels, including preparation for standardized tests and graduate-level exams.",
    image: learnbkImg,
  },
  {
    title: "Business & Career",
    description: "Providing talent recruitment, corporate training, consulting services, and customized software solutions to enhance business growth and efficiency.",
    image: learnxyImg,
  },
  {
    title: "Travel Abroad",
    description: "Assisting with USA permanent resident services, visa applications, travel planning, and accommodation arrangements for international travel.",
    image: learn,
  },
  {
    title: "Study Abroad",
    description: "Supporting students with overseas admission applications, visa application support, and guidance through programs like the Right Through Program (RTP).",
    image: learntyImg,
  },
];

export const links = [
  { label: 'Online Tutoring & Test Prep', href: '/etutor' },
  { label: 'Business & Career', href: '/business-career' },
  { label: 'Study Abroad', href: '/study-abroad' },
  { label: 'Travel Abroad', href: '/travel-abroad' },
];

export const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Linkedin", icon: Linkedin, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
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

export const testimonials = [
  {
    id: 1,
    content: "Ultra Ade Tech's online tutoring for my child in JSS 3 was phenomenal. Their foundational approach significantly improved his math skills. We saw a noticeable difference in his confidence and grades.",
    author: "Aisha Abubakar",
    role: "Parent",
    avatarUrl: UserIcon,
  },
  {
    id: 2,
    content: "I was overwhelmed with the IELTS preparation until I found Ultra Ade Tech. Their comprehensive program and personalized coaching helped me achieve my target score. I'm now headed to study abroad!",
    author: "Fatima Bello",
    role: "Prospective Student",
    avatarUrl: UserIcon,
  },
  {
    id: 3,
    content: "The EB2 NIW consultation from Ultra Ade Tech was exceptional. Their expertise and guidance made the complex process of obtaining a USA permanent resident visa much smoother. I am very grateful for their support.",
    author: "Ngozi Okafor",
    role: "Immigrant Applicant",
    avatarUrl: UserIcon,
  },
  {
    id: 4,
    content: "Ultra Ade Tech's development of a custom web solution for our business streamlined our operations and improved efficiency. Their team was professional and responsive throughout the entire process.",
    author: "Olamide Ogunleye",
    role: "Business Owner",
    avatarUrl: UserIcon,
  },
  {
    id: 5,
    content: "The RTP program for study abroad was a game changer! All my applications and Visa processing was handled seamlessly. I am now studying in my dream university.",
    author: "Kelechi Nwosu",
    role: "Student",
    avatarUrl: UserIcon,
  },
]

export const stats = [
  { id: 1, name: 'Professional Experience', value: '12 years' },
  { id: 2, name: 'University Acceptance Rate', value: '95%' },
  { id: 3, name: 'Guidance & Support', value: '654 Hours' },
]