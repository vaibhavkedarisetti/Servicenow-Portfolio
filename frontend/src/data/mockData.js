// Mock data extracted from Vaibhav's resume

export const personalInfo = {
  name: "Siva Bhadra Sai Vaibhav Kedarisetti",
  title: "ServiceNow Developer",
  email: "vaibhavkedarisetti1@gmail.com",
  phone: "+919347130705",
  linkedin: "https://linkedin.com/in/vaibhav-kedarisetti",
  github: "https://github.com/M10O",
  resumeLink: "https://drive.google.com/file/d/1wNOuL9khx1mL5JftfdiTd_PeCVFWgR7H/view?usp=sharing",
  profileImage: `${process.env.PUBLIC_URL}/vaibhav-profile.png`,
  summary: "ServiceNow Developer with hands-on experience across ITSM, HRSD, and CSM modules. 5x certified (CAD, CSA, CIS-CSM, CIS-ITSM, CIS-HRSD) with expertise in scripting, integrations, and GenAI use cases. Skilled in building custom applications, workflows, and AI-powered solutions that enhance customer service operations and demo experiences."
};

export const experience = [
  {
    id: "EXP001",
    company: "Deloitte Consulting, USI",
    role: "Analyst",
    location: "Hyderabad, India",
    period: "Jan 2026 – Present",
    status: "Active",
    details: [
      "Currently contributing to the 3rd project by providing support for ServiceNow–Workday Integration.",
      "Contributing to Deloitte's firm initiative WeaveX, focused on developing intelligent AI Agents to automate enterprise workflows and enhance user productivity using ServiceNow's AI capabilities.",
      "Currently working on multiple ServiceNow projects across ITSM and HRSD modules, including enhancement and end-to-end implementation engagements for enterprise clients.",
      "In the 1st enhancement project, worked extensively on the ITSM module by configuring and enhancing Flow Designer, Workflow Editor, and Service Catalog Items to streamline business processes and improve operational efficiency.",
      "Collaborated closely with client stakeholders and cross-functional teams during the Wolfspeed project to gather enhancement requirements, provide production support, and ensure smooth delivery of ServiceNow solutions.",
      "Actively resolved client-raised defects, incidents, and enhancement tasks by performing root cause analysis and ensuring timely resolution aligned with SLA expectations.",
      "In the 2nd implementation project, currently involved in implementing the Employee Relations module from scratch within the HRSD platform, including HR Services configuration, case management workflows, and process automation using Flow Designer.",
      "Worked on designing scalable HR solutions and improving employee experience by automating HR operations and streamlining employee case handling processes.",
      "Contributed to Deloitte's Firm Initiative FastForward - FF2 for Knowledge 26, focused on building an employee onboarding portal using the HRSD module and Moveworks Bot integration.",
      "Enhanced the employee portal experience by replacing Virtual Agent with Moveworks Bot and managing knowledge articles related to company policies, leave management, onboarding, and employee wellbeing."
    ]
  },
  {
    id: "EXP002",
    company: "Work4Flow",
    role: "Software Engineer",
    location: "Remote",
    period: "Oct 2025 – Dec 2025",
    status: "Completed",
    details: [
      "Developed an advanced ServiceNow application named Confidential until released, a successor to the Now Assist Readiness Evaluation (NARE) app, which was acquired by ServiceNow and published on the ServiceNow Store.",
      "Designed and implemented over nine dynamic page variants using UI Builder, incorporating metrics, client state parameters, and data broker scripts for enhanced interactivity and performance for the application.",
      "Developed multiple Script Includes to retrieve real-time data from the instance backend and render it seamlessly on client-side interfaces.",
      "Configured and managed Scheduled Jobs to execute Script Includes automatically every day at 9 AM PST or as per client-specific requirements.",
      "Built a comprehensive Guided Setup experience to help users easily understand and configure the application post-installation."
    ]
  },
  {
    id: "EXP003",
    company: "HCL Tech",
    role: "Graduate Engineer Trainee - ServiceNow",
    location: "Chennai, India",
    period: "Oct 2024 – Aug 2025",
    status: "Completed",
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
    id: "EXP004",
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
    id: "EXP005",
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
    name: "Voice-to-Action Assistant – Built with ServiceNow Build Agent",
    description: "Built entirely with ServiceNow Build Agent - a Voice-to-Action Assistant that lets Workspace users create, update, search, and manage incidents using just their voice commands.",
    details: [
      "Created a complete scoped application using only natural language prompts in ServiceNow IDE - Build Agent generated all code, flows, tables, and UI components.",
      "Built a Build Agent Skill with intents like create_incident, update_ticket, search_tickets with slot filling, confirmations, and entity extraction.",
      "Developed 6 Flow Designer flows for create, update, search, comment, status updates, and list tasks operations.",
      "Implemented a Workspace floating voice widget with speech-to-text and smart UI for hands-free incident management.",
      "Created logging & audit table (u_voice_actions) for all interactions with role-based access (u_voice_agent / u_voice_agent_admin).",
      "Enabled automatic work notes for every action and natural language understanding for voice commands like 'Create an incident for email not working' or 'Assign INC0023456 to the Network Team'.",
      "Zero external API keys required - everything runs natively inside ServiceNow using agentic AI, eliminating navigation friction for L1 teams."
    ],
    technologies: ["ServiceNow Build Agent", "Now Assist", "Agentic AI", "App Engine", "Workspace", "Flow Designer", "Build Agent Skills"],
    link: "#",
    status: "Completed",
    favorite: true
  },
  {
    id: "PROJ002",
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
    id: "PROJ003", 
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
    id: "PROJ004",
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
    id: "PROJ005",
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
  },
  {
    id: "CERT009",
    name: "Micro-Certification – Welcome to ServiceNow",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  },
  {
    id: "CERT010",
    name: "Micro-Certification – Platform Analytics",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  },
  {
    id: "CERT011",
    name: "Micro-Certification – Predictive Intelligence",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  },
  {
    id: "CERT012",
    name: "Micro-Certification – Virtual Agent",
    issuer: "ServiceNow",
    category: "Micro-Certification",
    status: "Completed"
  },
  {
    id: "CERT013",
    name: "Now Assist Executive Micro Cert",
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