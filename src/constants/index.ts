import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // meta,
  // tesla,
  // shopify,
  threejs,
  postgre,
  prisma,
  allbest,
  zustand,
  editor,
  edlis,
  eco,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PostgreSql",
    icon: postgre,
  },

  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
];

const experiences = [
  {
    title: "Front End developer",
    company_name: "Allbest",
    icon: allbest,
    iconBg: "#383E56",
    date: "february 2025 - april 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Collaborative editor",
    description:
      "Real Time editor with collaboration feature that allow user to collaborate with eaech other and inviteanother user to their project, with federated authentication and realtime notificacation",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "liveblocks",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: editor,
    source_code_link: "https://github.com/kzncod-e/livedocs",
  },
  {
    name: "Project manager",
    description:
      "A task-based project management tool that allows users to organize their projects efficiently. Userscan create tasks, update progress statuses (To Do, In Progress, Completed), and manage them with anintuitive drag-and-drop interface. The app includes secure user authentication and is fully hosted andmanaged on AWS for scalability and reliability.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "dnd",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: edlis,
    source_code_link: "https://github.com/kzncod-e/task-manager-app",
  },
  {
    name: "eco traveler",
    description:
      "Discover your dream destinations! Our AI-powered site offers live, personalized recommendations,interactive maps, quizzes, and custom itineraries—all designed to make trip planning exciting and tailored to you",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: eco,
    source_code_link: "https://github.com/EcoTraveler/eco-traveler",
  },
];

export { services, technologies, experiences, testimonials, projects };
