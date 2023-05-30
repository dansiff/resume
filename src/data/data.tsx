import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'template',
  description: " react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Daniel Sandoval.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Chicago based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Sandoval Bros</strong> helping build a modern, mobile-first, domain
        registrar, site builder, and game development.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">the local gym</strong>,
        fixing any <strong className="text-stone-100">Cars</strong>, or home remodeling in{' '}
        <strong className="text-stone-100">Chicago</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic ,
  
    description: `I am a self taught Full Stack Software engineer. 
  I am driven to prove myself and make a name for myself in the industry.
  Willing to solve any complex problem's given to me.'.`,
  aboutItems: [
    {label: 'Location', text: 'Chicago, IL', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'PC building, Car/house repair, Gym', Icon: SparklesIcon},
    {label: 'Study', text: 'Richard J daley', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Sandoval Bros, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: '',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'rogue Elves',
        description: 'A mobile game using unity to defend your base against a horde of Christmas themed baddies            .',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Zombie Training',
    description: 'Give .',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'VR infinite runner',
    description: 'Give .',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'junkyard website',
    description: 'website that provided general information and prices for materials received.  Included labor cost and directions via google maps link. .',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description .',
    url: 'ht',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short descript.',
    url: 'http',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description.',
    url: 'htt',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description.',
    url: 'ht',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description .',
    url: 'htt',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description.',
    url: 'htt',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description.',
    url: 'htt',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2019',
    location: 'Richard J Daley',
    title: 'Bachlors in computer science',
    content: <p>Completed bachlors</p>,
  },
  {
    date: 'March 2018',
    location: 'School of Business',
    title: 'self taught bussiness',
    content: <p>self taught via game studio as a indie developer.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'Sandoval Bros',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe 
        anythi.
      </p>
    ),
  },
  {
    date: 'March 2015 February 2019',
    location: 'home Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work
        anything.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Samuel parades',
      text: 'Daniel helped set up my website for my junkyard guided me through possible layouts and explained what type of functions could be implemented.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Cynthia Rodriguez',
      text: 'Here you should wrint.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'S',
      text: 'Add several of these,ills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'danielsand711@gmail.com',
      href: 'mailto:Danielsand711@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chicago IL, America',
      href: '',
    },
    {
      type: ContactType.Instagram,
      text: '',
      href: '/',
    },
    {
      type: ContactType.Github,
      text: '',
      href: '',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: ''},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: '/'},
  {label: 'Instagram', Icon: InstagramIcon, href: ''},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},
];
