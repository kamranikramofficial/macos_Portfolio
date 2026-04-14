const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Participant - Saylani Hackathon 2025",
    type: "Hackathon",
    date: "May 2025",
    image: "/images/blog1.png",
    points: [
      "Participated in Saylani AI Hackathon 2025: Embracing the Future.",
      "A 12-hour overnight coding challenge focused on real-time problem solving.",
      "Collaborated with fellow developers to create innovative tech-driven solutions.",
      "Event held at Zaitoon Ashraf IT Park, Shahrah-e-Faisal, Karachi.",
    ],
    link: "https://drive.google.com/file/d/1fHKioG-mRVqBchKNM8jCLxY2poEG83lU/view",
  },
  {
    id: 2,
    title: "Volunteer - Saylani Mass IT Training Program",
    type: "Volunteering",
    date: "Sep 2025",
    image: "/images/blog1.png",
    points: [
      "Proud volunteer under the Education Department of Saylani Welfare International Trust.",
      "Actively contributing to Pakistan's grand IT revolution by supporting Saylani's IT training initiatives.",
      "Awarded volunteer certificate for dedication and contribution to the Saylani Mass Training Programme.",
    ],
    link: "https://drive.google.com/file/d/1yD3lbu9ddIMHfU7cipWB72kLwQdAIwJI/view?usp=drive_link",
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    type: "Certification",
    date: "Mar 2025",
    image: "/images/blog2.png",
    points: ["Credential ID: kamranikram-jaads"],
    link: "https://www.freecodecamp.org/certification/kamranikram/javascript-algorithms-and-data-structures",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    type: "Certification",
    date: "Mar 2025",
    image: "/images/blog2.png",
    points: ["Credential ID: kamranikram-rwd"],
    link: "https://www.freecodecamp.org/certification/kamranikram/responsive-web-design",
  },
  {
    id: 5,
    title: "6,0000+ Followers on LinkedIn",
    type: "Achievements",
    date: "Oct 2025",
    image: "/images/blog5.png",
    points: ["Profile: kamranikramofficial"],
    link: "https://www.linkedin.com/in/kamranikramofficial/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express" ,"Firebase"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/kamranikramofficial",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://kamranikramofficial.me/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/KamranikramDev",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kamranikramofficial/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "All",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    name: "Team Meetup",
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    name: "Staircase Portrait",
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    name: "Coffee Break",
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    name: "Dev Setup",
    img: "/images/gal4.jpg",
  },
   {
    id: 5,
    name: "OutDoor picture",
    img: "/images/gal5.jpg",
  },
   {
    id: 6,
    name: "OutDoor picture with friends",
    img: "/images/gal6.jpg",
  },
   {
    id: 7,
    name: "technosedigital",
    img: "/images/gal7.jpg",
  },
     {
    id: 8,
    name: "technosedigital meeting",
    img: "/images/gal8.jpg",
  },
    {
    id: 9,
    name: "technosedigital office",
    img: "/images/gal9.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI Clinic Pro-Healthcare Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5rem] left-[2rem]",
      children: [
        {
          id: 1,
          name: "AI Clinic Pro Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Multi-role authentication and role-based access control",
            "Real-time appointment scheduling and management ",
            "Digital prescription generation and tracking",
            "Patient health records and timeline views",
            "AI-powered medical assistant chat",
            "Admin analytics and reporting",
            "Responsive design with dark/light theme support",
            "Secure OTP-based password reset flow"
          ],
        },
        {
          id: 2,
          name: "Frontend code .com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/hackathon2026",
          position: "top-13 right-60",
        },
         {
          id: 3,
          name: "Backend code.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/hackathon_server",
          position: "top-8 right-20",
        },
         {
          id: 4,
          name: "AI Clinic Pro.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-clinic-pro.vercel.app/",
          position: "top-40 right-20",
        },
        {
          id: 5,
          name: "Landing.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-45 right-100",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 6,
          name: "dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-69",
          imageUrl: "/images/project-1-2.png",
        },
        {
          id: 7,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-110 right-20",
        },
      ],
    },


    // ▶ Project 2
    {
      id: 7,
      name: "Dynamic Recipe Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-20 left-40",
      windowPosition: "top-[14rem] left-[2rem]",
      children: [
        {
          id: 1,
          name: "Dynamic Recipe Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-10",
          description: [
            "Fully responsive recipe website with dynamic recipe exploration.",
            "Includes user authentication and interactive filtering.",
            "Modern UI for smooth browsing experience.",
            "Tech: HTML, CSS, JavaScript, Bootstrap.",
          ],
        },
        {
          id: 2,
          name: "Source code.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/Food",
          position: "top-14 right-60",
        },
        {
          id: 3,
          name: "Live project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://kamranikramofficial.github.io/Food/",
          position: "top-38 right-18",
        },
        {
          id: 4,
          name: "Recipe-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-96",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Recipe-footer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-51 right-51",
          imageUrl: "/images/project-2-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 8,
      name: "Student Information System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-41 left-10",
      windowPosition: "top-[32rem] left-[2rem]",
      children: [
        {
          id: 1,
          name: "Student Information System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-10",
          description: [
            "Beginner-level project from Saylani First Module class.",
            "Built to practice front-end concepts with hands-on implementation.",
            "Tech: HTML, CSS, JavaScript.",
          ],
        },
        {
          id: 2,
          name: "Source code.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/student-info",
          position: "top-14 right-60",
        },
        {
          id: 3,
          name: "Live project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://student-info-lake.vercel.app/",
          position: "top-38 right-18",
        },
        {
          id: 4,
          name: "Student-Landing_Page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-96",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Student-Dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-51 right-51",
          imageUrl: "/images/project-3-2.png",
        }
      ],
    },

    // ▶ Project 4
    {
      id: 9,
      name: "PakAutoSe Generators",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-18 right-10",
      windowPosition: "top-[14rem] left-[12rem]",
      children: [
        {
          id: 1,
          name: "PakAutoSe Generators.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-10",
          subtitle: "E-commerce Platform for Generators & Services",
          description: [
            "Complete e-commerce for generators, parts, and services.",
            "Features: catalog, cart, checkout, order tracking, service requests, and admin panel.",
            "Tech: Next.js 14, TypeScript, Prisma, PostgreSQL, Tailwind CSS, NextAuth, Zustand.",
            "Supports COD and Stripe-ready online payments.",
          ],
        },
        {
          id: 2,
          name: "Source code.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/PakAtous",
          position: "top-14 right-60",
        },
        {
          id: 3,
          name: "Live project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://pak-atous.vercel.app/",
          position: "top-38 right-18",
        },
        {
          id: 4,
          name: "PakAutoSe-Admin_dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-39 right-96",
          imageUrl: "/images/project-4.png",
        },
          {
          id: 5,
          name: "PakAutoSe-Footer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-47 right-51",
          imageUrl: "/images/project-4-2.png",
        },
         {
          id: 6,
          name: "PakAutoSe-About.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-69 right-96",
          imageUrl: "/images/project-4-3.png",
        },
        {
          id: 7,
          name: "PakAutoSe-User_dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-72 right-51",
          imageUrl: "/images/project-4-4.png",
        }
      ],
    },

    // ▶ Project 5
    {
      id: 10,
      name: "Kamran 3D Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 right-16",
      windowPosition: "top-[23rem] left-[12rem]",
      children: [
        {
          id: 1,
          name: "Portfolio details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-10",
          subtitle: "Modern Interactive 3D Portfolio",
          description: [
            "Interactive 3D portfolio website built with React, Three.js, and Tailwind CSS.",
            "Includes 3D graphics, animated stars, modern responsive UI, and smooth animations.",
            "Tech stack covers React, React Three Fiber, Framer Motion, Vite, Node.js, Express, MongoDB.",
          ],
        },
        {
          id: 2,
          name: "Source code.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/Portfolio_React",
          position: "top-14 right-60",
        },
        {
          id: 3,
          name: "Live project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://kamranikramofficial.me/",
          position: "top-38 right-18",
        },
        {
          id: 4,
          name: "Portfolio-landing.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-96",
          imageUrl: "/images/project-5.png",
        },
         {
          id: 4,
          name: "Portfolio-contect.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-51 right-51",
          imageUrl: "/images/project-5-2.png",
        }
      ],
    },

    // ▶ Project 6
    {
      id: 11,
      name: "CSS-Toolkit",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-78 left-25",
      windowPosition: "top-[23rem] left-[2rem]",
      children: [
        {
          id: 1,
          name: "CSS-Toolkit.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-10",
          description: [
            "Web tool for generating custom CSS styles and HTML snippets quickly.",
            "Includes live previews and exportable code for developers and designers.",
            "Tech: HTML, CSS, JavaScript.",
          ],
        },
        {
          id: 2,
          name: "Source code.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kamranikramofficial/css-tools",
          position: "top-14 right-60",
        },
        {
          id: 3,
          name: "Live project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://css-tools-bay.vercel.app/",
          position: "top-38 right-18",
        },
        {
          id: 4,
          name: "CSS-toolkit-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-96",
          imageUrl: "/images/project-6.png",
        },
      ],
    },

  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/kamran-1.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/kamran-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/kamran-3.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/kamran.png",
      description: [
"Frontend Developer skilled in creating responsive web interfaces with HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap.",
"Knowledgeable in cross-browser compatibility, accessibility, and performance optimization.",
"Familiar with backend technologies including Node.js, Express.js, MongoDB, and REST APIdevelopment.", 
"Experienced in version control with Git and GitHub."    
  ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-40",
      imageUrl: "/images/trash-2.png",
    },
     {
      id: 3,
      name: "trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/images/trash-3.png",
    },
     {
      id: 4,
      name: "trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-35 left-20",
      imageUrl: "/images/trash-4.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG }; 