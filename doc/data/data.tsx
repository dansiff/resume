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
import profilepic from '../images/profilepicreal.jpg';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">the local gym</strong>,
        working on  <strong className="text-stone-100">cars</strong> in my garage, or spending time with my kids. In the  {' '}
        <strong className="text-stone-100">Chicago</strong> area.
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
  profileImageSrc: profilepic,
  description: `Unreal engine developer who has expanded my skillset to include reactjs with nodejs utlizing yarn. I want to fund my video game studio with work as a full stack developer. Interested in learning and keeping up with modern coding.
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Chicago, USA', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Working out developing games learning complex skills ', Icon: SparklesIcon},
    {label: 'Study', text: 'Richard J Daley', Icon: AcademicCapIcon},
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
        level: 2,
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
    title: 'Rogue Elves',
    description: 'A mobile game of an elfs journey to defeat santa. made with unity',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'zombie trainer',
    description: 'FPS shooter for mobile training levels with a zombie game with infinite rounds and cod like gameplay.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'rebuilding America',
    description: 'Current VR project using lumen nanite and other upgrades to UE5.2 I plan to make a infinite runner VR shooter that will have levels unlocked by distance traveled.  resulting in a last stage of defending a nuclear-power submarine that will help rebuild society..',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Example ReactJS and node js',
    description: 'looking to build a repo base to complete task and show off capabilities.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: '',
    description: '',
    url: '',
    image: porfolioImage5,
  },
  {
    title: '',
    description: '.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: '',
    description: '.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: '',
    description: '',
    url: '',
    image: porfolioImage8,
  },
  {
    title: '',
    description: '.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: '',
    description: '',
    url: '',
    image: porfolioImage10,
  },
  {
    title: '',
    description: '',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2015',
    location: 'Digital',
    title: 'Unreal engine',
        content: <p>I studied blueprints and C++ to implement mobile games on google play store and other sources. This resulted in learning UI inputs for mobile devices.             .</p>,
  },
  {
    date: 'March 2016',
    location: 'home office',
    title: 'self taught how to manage my game studio',
    content: <p>Being a solo developer I had to manage funds to acquire equipment for my game studio and software to assist in making a viable game product.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2015 - Present',
    location: 'Sandoval Bros',
    title: 'Senior UX Engineer',
    content: (
      <p>
        After numerous solo releases I have established a work flow to complete numerous 
        .
      </p>
    ),
  },
  {
    date: 'March 2017 - February 2020',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        
        .
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
      name: 'Cynthia Rodriguez',
      text: 'Use this as an opprom current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '',
      text: 'Here you should write some nice things that someone has said about you.).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'open to discuss any work oppurtinities.' , 
  items: [
    {
      type: ContactType.Email,
      text: 'danielsand711@gmail.com',
      href: 'mailto:danielsand711@gmail.com' ,
    },
    {
      type: ContactType.Location,
      text: 'Chicago' ,
        href: 'https://www.google.ca/maps/place/2528+S+Kedzie+Ave,+Chicago,+IL+60623/@41.8452298,-87.7080592,17z/data=!3m1!4b1!4m6!3m5!1s0x880e3270507bcb8b:0x73c960ff7e626efd!8m2!3d41.8452298!4d-87.7054843!16s%2Fg%2F11b8vfqf56',
    },
    {
      type: ContactType.Instagram,
      text: '@',
      href: '',
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
  {label: 'Github', Icon: GithubIcon, href: 'h'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'h'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'h/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'h'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'h'},
];
