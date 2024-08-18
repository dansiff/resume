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
  title: 'Sandoval Bros',
  description: " Website for Daniel Sandoval",
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
                I'm a Chicago based <strong className="text-stone-100">Software Engineer</strong>, looking to contribute my expertise in 
                 <strong className="text-stone-100"></strong> building web applications.
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                Thank you for visiting my Reactjs web page. You can download my resume below. <strong className="text-stone-100"></strong>,
                 <strong className="text-stone-100"></strong>,{' '}
                <strong className="text-stone-100">Chicago</strong>.
            </p>
        </>
    ),
    actions: [
        {
            href: 'https://drive.google.com/file/d/1hXm2f1ICVj_xc4PIdNBOzv1baNnjxVAU/view?usp=sharing',
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
  
    description: `I have worked on applications in the medical field as well as development of website services for a large network of doctors. 
  I am driven to make a name for myself in the industry. The next chapter in software is powerful with an eager mindset we can achieve anything.
  Willing to solve any complex problem's presented with software solutions. Including robust API application or custom code scripts.'.`,
  aboutItems: [
    {label: 'Location', text: 'Chicago, IL', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'PC building, Car/house repair, Gaming,Gym', Icon: SparklesIcon},
    {label: 'Study', text: 'UIC', Icon: AcademicCapIcon},
      {label: 'Employment', text: 'Sandoval Bros, LLC.', Icon: BuildingOffice2Icon},
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
        level: 9,
      },
      {
        name: '',
        level: 0,
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
    url: '1',
    image: porfolioImage1,
  },
  {
    title: 'Zombie Training',
    description: 'FPS mobile game input via touch screen or bluetooth controller. .',
    url: '1',
    image: porfolioImage2,
  },
  {
    title: 'VR infinite runner',
    description: 'Simulated running through fields of dangers.',
    url: '1',
    image: porfolioImage3,
  },
  {
    title: 'junkyard website',
    description: 'website that provided general information and prices for materials received.  Included labor cost and directions via google maps link. .',
    url: '1',
    image: porfolioImage4,
  },
  {
    title: '5',
    description: '1',
    url: 'ht',
    image: porfolioImage5,
  },
  {
    title: '6',
    description: '1',
    url: 'http',
    image: porfolioImage6,
  },
  {
    title: '7',
    description: '.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: '8',
    description: '.',
    url: 'ht',
    image: porfolioImage8,
  },
  {
    title: ' 9',
    description: '.',
    url: 'htt',
    image: porfolioImage9,
  },
  {
    title: '10',
    description: '.',
    url: 'htt',
    image: porfolioImage10,
  },
  {
    title: '11',
    description: '.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '1',
    location: '1',
    title: '1',
    content: <p>a</p>,
  },
  {
    date: '1',
    location: '1',
    title: '1',
    content: <p>1</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2',
    location: '2',
    title: '2',
    content: (
      <p>
       2 .   
   
      </p>
    ),
  },
  {
    date: '3',
    location: '3',
    title: '3',
    content: (
      <p>
        3
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
      name: 'Samuel parades',
      text: 'Daniel helped set up my website for my junkyard guided me through possible layouts and explained what type of functions could be implemented.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Cynthia Rodriguez',
      text: 'Completed independent contracts for her mothers psychic products.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Class taught to local interested parties',
      text: 'Completed website training for WIX and wordpress to local community.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Listed our social media pages validating my backend experience.',
  items: [
    {
      type: ContactType.Email,
      text: 'danielsand711@gmail.com',
      href: 'mailto:Danielsand711@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chicago IL, America',
        href: 'https://www.google.com/maps/place/2532+S+Trumbull+Ave+%231,+Chicago,+IL+60623/@41.8452742,-87.7140551,17z/data=!4m6!3m5!1s0x880e326f245e4c31:0x1509b79c08c68685!8m2!3d41.8452742!4d-87.7114802!16s%2Fg%2F11f4kjgx3f?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '5',
      href: '5',
    },
    {
      type: ContactType.Github,
      text: 'github',
        href: 'https://github.com/dansiff',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dansiff'},
  
   
    {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/danielsand711/?fbclid=IwAR2i_YorU2Gt0ovuH-XhMkAxt6-Hv4_FnkfRAEruaKbwcCyw30_8ojkNKxk'},
    {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/danielsand7?fbclid=IwAR3mqBUzEJy2CbB2JMKOkZ_xjrIdPgG0S96NvvA2S-cuXlhBzl6j0vWTunE'},
];
