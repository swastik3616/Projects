import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

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
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "RedCloud Technologies",
    icon:"",
    iconBg: "#ffffff",
    date: "April 2024 - August 2024",
    points: [
      "Analyzing the needs of customer in a website.",
			"Designing User Interface (UI) for the problem statement.",
			"Improving designs to make more user friendly.",
			"User Experience improvements and feedbacks.",
    ],
  },
  
];



const projects: TProject[] = [
  {
    name: "Slot Booking for Vehicle Parking",
    description:
      "This vehicle parking app, built with Python, Flutter, a QR code generator, and MySQL, lets users book parking slots in advance. It generates a unique QR code for secure and easy access at the parking facility. The app ensures real-time updates and provides a seamless experience, offering a smooth, responsive interface across Android and iOS platforms.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Customized Virtual Assistant (Jarvis)",
    description:
      "We developed a personalized virtual assistant using Gemini AI, Python, and various APIs. This assistant will offer tailored responses, summarize texts, manage Google Calendar events, retrieve weather updates via a weather API, send emails, and utilize location tracking, all powered by the Gemini API Key.",
    tags: [
      {
        name: "FrontEnd",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini AI api",
        color: "green-text-gradient",
      },
      {
        name: "Weather API",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "DDOS Detection using Machine Learning",
    description:
      "Distributed Denial-of-Service (DDoS) attacks pose a significant threat to internet infrastructure security by disrupting critical services and causing financial and reputational damage. Machine learning (ML) offers promising capabilities in detecting and mitigating these attacks through advanced pattern recognition and anomaly detection techniques.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },

      
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },

  
];

export { services, technologies, experiences, projects };
