// Mock data extracted from Vaibhav's resume

export const personalInfo = {
  name: "Siva Bhadra Sai Vaibhav Kedarisetti",
  title: "ServiceNow Developer",
  email: "vaibhavkedarisetti1@gmail.com",
  phone: "+919347130705",
  linkedin: "https://linkedin.com/in/vaibhav-kedarisetti",
  github: "https://github.com/M10O",
  resumeLink: "https://drive.google.com/file/d/1UmlOs27ACEeXPFLCCAfDrRxgbAs4evmG/view?usp=sharing",
  profileImage: `${process.env.PUBLIC_URL}/vaibhav-profile.png`,
  summary: "ServiceNow Developer with hands-on experience across ITSM, HRSD, and CSM modules. 5x certified (CAD, CSA, CIS-CSM, CIS-ITSM, CIS-HRSD) with expertise in scripting, integrations, and GenAI use cases. Skilled in building custom applications, workflows, and AI-powered solutions that enhance customer service operations and demo experiences."
};

export const experience = [
  {
    id: "EXP001",
    company: "HCL Tech",
    role: "Graduate Engineer Trainee - ServiceNow",
    location: "Chennai, India",
    period: "Oct 2024 – Aug 2025",
    status: "Active",
    details: [
      "Actively engaged in both testing and development tasks within the PayPal project, ensuring timely and efficient delivery of features and functionality.",
      "Conducted walkthroughs of ServiceNow customizations and AI integrations to client teams, simplifying technical concepts for non-technical stakeholders.",
      "Conducted testing of workflows and business logic in ServiceNow, verifying functionality using test cases and test suites.",
      "Worked with AutomatePro for automated testing of ServiceNow modules, improving testing efficiency and reducing manual errors.",
      "Responsible for creating user stories, including requirements gathering, documentation, and providing clear definitions of acceptance criteria to guide the development process.",
      "Managed and resolved incoming tickets in ServiceNow, ensuring issues were promptly addressed and effectively communicated to relevant teams.",
      "Implemented an AI Search within the PayPal project, enabling users to quickly find incidents, requests, and knowledge articles",
      "Worked extensively on the Informa Project, contributing to ServiceNow customization and automation efforts.",
      "Configured workflows using Flow Designer and Workflow Editor to streamline business processes.",
      "Designed and implemented service Catalog items, including forms, variables, and variable sets.",
      "Managed RITM, associated tasks, and email notifications to support user request fulfillment.",
      "Developed custom scripts (Client Scripts, Business Rules, Script Includes) to extend ServiceNow functionalities.",
      "Implemented Generic Request solutions aligned with client needs in the Service Catalog."
    ]
  },
  {
    id: "EXP002",
    company: "LI-Mat Soft Solutions",
    role: "Software Developer Intern",
    location: "Bangalore, India",
    period: "Jan 2024 – June 2024",
    status: "Completed",
    details: [
      "Developed a dynamic tourism website tailored to client requirements, covering both front-end using React and back-end using MongoDB.",
      "Designed user-friendly interfaces and a comprehensive admin panel for managing content, bookings, and user data.",
      "Integrated RESTful APIs for creating and managing tour packages, storing data securely in MongoDB.",
      "Implemented core features such as Gallery, Packages, Sightseeing, User Profile, and booking modules to enhance user experience and engagement."
    ]
  },
  {
    id: "EXP003",
    company: "Benciti Technologies",
    role: "SDE Intern",
    location: "Hyderabad, India",
    period: "May 2022 - July 2022",
    status: "Completed",
    favorite: false,
    details: [
      "Developing & Testing of an android application called nudge math",
      "Techstack: ReactJS, HTML, CSS, JS, Git"
    ]
  }
];

export const projects = [
  {
    id: "PROJ001",
    name: "Claude + ServiceNow Integration (via MCP)",
    description: "Integrated Claude AI (Anthropic LLM) with ServiceNow using Model Context Protocol (MCP) for natural language-driven actions.",
    details: [
      "Enabled users to perform ServiceNow tasks like incident creation, catalog request, workflow trigger via prompt-based input.",
      "Built MCP server from scratch to interpret intents and connect to ServiceNow REST APIs securely."
    ],
    technologies: ["Claude AI", "MCP", "ServiceNow REST API", "Node.js"],
    link: "#",
    status: "Completed"
  },
  {
    id: "PROJ002", 
    name: "ServiceNow Quick Launch Chrome Extension",
    description: "Built a Chrome extension for quick navigation across ServiceNow tables.",
    details: [
      "Integrated with ServiceNow instance URLs for instant access, reducing navigation time by ~80%.",
      "Improved productivity by enabling faster table access and minimizing manual searches."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Chrome Developer APIs"],
    link: "#",
    status: "Completed",
    favorite: false
  },
  {
    id: "PROJ003",
    name: "Gemini AI Chat Integration in Service Portal",
    description: "Designed and developed a full-stack chat application within ServiceNow Service Portal, replicating core features of the Gemini AI website.",
    details: [
      "Built a secure Scripted REST API proxy for communication with Gemini 2.5 Pro API, using System Properties to safely store credentials.",
      "Configured and debugged REST Messages and POST method, resolving issues for successful outbound integration.",
      "Developed a custom Service Portal widget using HTML, SCSS, Angular."
    ],
    technologies: ["Gemini AI", "ServiceNow Service Portal", "Angular", "REST API"],
    link: "#",
    status: "Completed",
    favorite: false
  },
  {
    id: "PROJ004",
    name: "GenAI Summarization Tool using Now Assist Skill Kit", 
    description: "Built a GenAI skill to summarize incidents and change request records using Now Assist Skill Kit.",
    details: [
      "Integrated summaries into Agent Workspace to enhance visibility and reduce resolution time."
    ],
    technologies: ["Now Assist", "GenAI", "ServiceNow Agent Workspace"],
    link: "#", 
    status: "Completed",
    favorite: false
  }
];

export const education = [
  {
    id: "EDU001",
    institution: "BML Munjal University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2020 – Aug 2024",
    status: "Completed"
  },
  {
    id: "EDU002",
    institution: "Aditya Junior College",
    degree: "Intermediate (Maths, Physics, Chemistry)",
    period: "May 2017 – Mar 2019",
    status: "Completed"
  },
  {
    id: "EDU003",
    institution: "Sri Chaitanya Techno School",
    degree: "Secondary School (Class X)",
    period: "May 2016 – Mar 2017",
    status: "Completed"
  }
];

export const certifications = [
  {
    id: "CERT001",
    name: "Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    category: "ServiceNow",
    status: "Completed"
  },
  {
    id: "CERT002",
    name: "Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    category: "ServiceNow",
    status: "Completed"
  },
  {
    id: "CERT003",
    name: "Certified Implementation Specialist – IT Service Management (CIS-ITSM)",
    issuer: "ServiceNow",
    category: "ServiceNow",
    status: "Completed"
  },
  {
    id: "CERT004",
    name: "Certified Implementation Specialist – HR Service Delivery (CIS-HRSD)",
    issuer: "ServiceNow",
    category: "ServiceNow",
    status: "Completed"
  },
  {
    id: "CERT005",
    name: "Certified Implementation Specialist – Customer Service Management (CIS-CSM)",
    issuer: "ServiceNow",
    category: "ServiceNow",
    status: "Completed"
  },
  {
    id: "CERT006",
    name: "Micro-Certification – Automated Test Framework (ATF)",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  },
  {
    id: "CERT007",
    name: "Micro-Certification – Agentic AI Executive",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  },
  {
    id: "CERT008",
    name: "Micro-Certification – Configure the CMDB",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  }
];

export const skills = {
  "ITSM": ["Scripting", "Integration", "ACL", "SLA", "Incident Management", "Change Management", "Email Notifications", "Major Incident Management", "Flow Designer", "Service Requests", "Catalog Management", "Transform Maps", "Workflow"],
  "HRSD": ["Case Management", "COEs", "Profile Management", "HR Services Configuration"],
  "CSM": ["Case Workflows", "Account and Contact Management", "Omnichannels"]
};

export const technologies = {
  "Programming": ["Java", "Python"],
  "Web Development": ["JavaScript", "HTML", "Tailwind CSS", "Glide API", "Jelly Scripting", "XML"]
};

export const virtualAgentResponses = {
  help: {
    message: "I can help you explore Vaibhav's profile. Type the below commands in **All navigator at top left**",
    options: [
      "experience.list - View work experience records",
      "education.list - View education records",
      "certifications.list - View ServiceNow certifications",
      "projects_built.list - View project portfolio",
      "snow_skills.list - View ServiceNow skills",
      "tech_worked_on.list - View technologies",
      "sys_user_has_a_contact.list - View contact information"
    ],
    //recruiterNote: "**A note to recruiters: Vaibhav is actively looking for new opportunities and is available to join immediately.**"
  },
  certifications: {
    message: "Vaibhav holds 5 core ServiceNow certifications  ",
    data: certifications
  },
  experience: {
    message: "Here's a summary of Vaibhav's work experience:",
    data: experience
  },
  projects: {
    message: "Vaibhav has built several innovative ServiceNow integrations:",
    data: projects
  }
};

// Navigation menu items
export const navigationItems = [
  {
    category: "Portfolio Management",
    items: [
      { name: "Work Experience", table: "u_experience", icon: "Briefcase" },
      { name: "Projects Built", table: "u_projects_built", icon: "FolderOpen" }
    ]
  },
  {
    category: "Education & Credentials", 
    items: [
      { name: "Education", table: "u_education", icon: "GraduationCap" },
      { name: "Certifications", table: "u_certifications", icon: "Award" }
    ]
  },
  {
    category: "Service Management",
    items: [
      { name: "Knowledge", table: "u_snow_skills", icon: "BookOpen" },
      { name: "Technologies", table: "u_tech_worked_on", icon: "Monitor" }
    ]
  },
  {
    category: "System", 
    items: [
      { name: "Contact Info", table: "sys_user_has_a_contact", icon: "Mail" }
    ]
  }
];