import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    next,
    tailwind,
    nodejs,
    mongodb,
    git,
    flutter,
    meta,
    techlive,
    acm,
    udemy,

    ethereum,
    greenergy,
    aimaze,
    threejs,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
    
  ];
  
  const services = [
    {
      title: "Full-stack Web Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Programmer",
      icon: web,
    },
    {
      title: "Gamer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
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
      name: "Flutter",
      icon: flutter,
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
      name: "Ethereum",
      icon: ethereum,
    },
    {
      name: "Next.js",
      icon: next,
    },
    
  ];
  
  const experiences = [
    {
      title: "Webmaster",
      company_name: "ACM Bist student chapter",
      icon: acm,
      iconBg: "#383E56",
      date: "November 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ]
    }

  ];
  

  const projects = [
    {
      name: "Portfolio",
      description:
        "My personal developer portfolio with stunning visuals and 3d animations. It contains all of the information about me including my certifications, skillset, experience and contact-details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Yuvraj8823/portfolio",
      url:"https://yuvrajsr.me/",
    },
    {
      name: "Tech.Live",
      description:
        "A blog website which will keep you updated about everything related to tech. Also it will provide you multiple advanced projects with source code and end-to-end explanation",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Graph-QL",
          color: "green-text-gradient",
        },
        {
          name: "graph-cms",
          color: "pink-text-gradient",
        },
      ],
      image: techlive,
      source_code_link: "https://github.com/Yuvraj8823/techlive",
      url:"https://techlive.vercel.app/",
    },
    {
      name: "Ai-Maze",
      description:
        "Web application that can convert low resolution images to high resolution image. It can also enhance low-light images and apply filter according to the image and user's preference",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: aimaze,
      source_code_link: "https://github.com/Yuvraj8823/image-enhancer",
      url:"https://i-maze.vercel.app/",
    },
  ];
  
  const certificates = [
    {
      title: "Front-End Developement",
      company_name: "Meta",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "Introduction to Web development",
        "Html and css in-depth",
        "Programming with Javascript",
        "React",
        "Version Control"
      ]
    },
    {
      title: "Full-Stack Web Developement",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#383E56",
      date: "september 2022",
      points: [
        "Introduction to Web development",
        "Html , css and javascript ",
        "Node.js & Express.js",
        "MongoDB & mongoose.js",
        "REST API",
        "React.js",
        "Web3 and Dapps"
      ]
    },
    {
      title: "Data structures with Python",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "Introduction to Python",
        "Object Oriented programming in python",
        "introduction to data structures",
        "Data structures using Python",
        "Algorithms using Python"
      ]
    }
  ]

  const skills = [
    {
      title: "Languages",
      content: ["C++","Python","Java","Javascript","Typescript"]
    },
    {
      title: "Libraries",
      content: ["React.js","Three.js","Framer-Motion","jquery","Gsap"]
    },
    {
      title:"Frameworks",
      content:["Next.js","flutter","Tailwindcss","Bootstrap"]
    }
  ]

  export { services, technologies, experiences, projects, certificates, skills };