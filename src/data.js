// Skills Icons
import clangIcon from "./images/skillsIcon/ISO_C++_Logo.svg.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/git_gihub_logo.png"
import RPIIcon from "./images/skillsIcon/java_logo.png"
import SolidworksIcon from "./images/skillsIcon/linux.png"
import codeIcon from "./images/skillsIcon/Python-logo-notext.svg.png"
import moveItIcon from "./images/backgroundIcons/arms.svg"
import forceTorqueIcon from "./images/backgroundIcons/arm.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import googleScholarIcon from "./images/contactIcon/gscholar.png"


// School images
import WaterlooLogo from "./images/school/tulsa_logo_quality.png"
import WaterlooImg from "./images/amsaself.webp"


// Helper function for getting text (simplified as we now only support English)
export const getText = (textObj) => {
  // If it's already a string, return as-is
  if (typeof textObj === 'string') return textObj;

  // If it's an object, return English or first value
  if (textObj && typeof textObj === 'object') {
    return textObj.en || Object.values(textObj)[0] || '';
  }

  // Fallback
  return textObj || '';
};

const siteData = {

  name: "Asma Mohseni",

  headerParagraph: "I am a Computer Science student focused on robotics software, with experience building reliable systems for robot control, motion planning, and real-world experimentation. I enjoy solving technical problems analytically, collaborating across teams, and turning research ideas into practical implementations.",

  // Navigation labels
  nav: {
    home: "Home",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume"
  },

  // Section titles  
  sections: {
    about: "About",
    nvidia: "Work Experience",
    publications: "Publications",
    education: "Education",
    internships: "Internships",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },

  // Button text translations
  buttons: {
    explore: "Explore",
    readMore: "Read More",
    close: "Close"
  },

  contactEmail: "asm5800@utulsa.edu",

  education: [
    {
      title: "University of Tulsa",
      para: "Bachelor of Computer Science ",
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "",
      description: [
        "Majoring in Computer Science with minors in Mathematics, and working as an undergraduate software researcher at the Institute for Robotics and Autonomy",
        "Clubs: Software Engineering Club, Artificial Intelligence Club",
        "Relevant coursework: Java Programming, Data Structures, Algorithms, Assembly Language Programming, Programming Languages, Physics II, Numerical Methods, Interaction Design, Introduction to Cybersecurity."
      ],
    }

  ],

  // About Section --------------
  aboutParaOne: "I am a Computer Science student with a strong interest in robotics software, especially robot control, motion planning, and perception. My background has helped me become a collaborative teammate who communicates clearly, approaches problems analytically, and adapts quickly in research and engineering environments.",

  aboutParaTwo: "My experience spans robotics software engineering in Python and C++, from dual-arm manipulation and trajectory generation to sensing and simulation, alongside full-stack application development with React and TypeScript. I enjoy building clean, maintainable systems and working on projects where practical implementation, thoughtful design, and real-world impact come together.",

  aboutParaThree: "",

  nvidiaTime: "2024 to Present",

  nvidiaExperience: [
    "At NVIDIA, I worked on both Isaac Lab and Isaac Sim, focusing on distinct facets of robotic simulation. In Isaac Lab, I developed scalable humanoid and legged robot models and designed reinforcement learning-based locomotion policies. In Isaac Sim, I concentrated on high-fidelity simulation, building realistic digital twins, synthetic sensor models, and inference pipelines for deploying trained policies through ROS and Isaac Sim. I also presented several talks at NVIDIA GTC on robot composition and software-in-the-loop simulation pipelines."
  ],

  // NVIDIA Carousel Items
  nvidiaCarouselItems: [
    // wam
    {
      media: "h1FlipGif", // Will be imported in component
      type: 'video',
      title: "Undergraduate Research Challange The University of Tulsa",
      description: "I programmed a 7-axis Barrett robotic arm in C++ using object-oriented design and the Libbarrett library to replicate prehistoric scraping and cutting motions with experimental stone tools, while collecting and logging force data for archaeological research.",
      tags: ["Matplotlib", "force–torque sensing", "C++", "OOP"],
      highlights: {
        tech: "7-DOF Barrett arm, C++ and Libbarrett, force–torque sensing.",
        impact: "Reduced the time and variability of archaeological experiments by automating complex, repetitive scraping motions replacing with long, monotonous human testing."
      },
      github: "https://github.com/bagherhassani"
    },
    //pick and place bimanual 
    {
      media: "siggraphTalk",
      type: 'video',
      title: "Dual-Arm Pick-and-Place ",
      description: "Controlled two Universal Robots UR5e arms from a single Python program with synchronized timing and collision avoidance for shared-object handling. Documented setup steps and safety checks for repeatable lab use. Achieved 90% success (45/50 runs) for synchronized dual-arm pick-and-place and reduced average cycle time by 26.7%.",
      tags: ["Python", "Dual-Arm Manipulation", "Synchronized Motion", "TCP/IP", "Universal Robots (UR5e)"],
      highlights: {

        tech: "Python, synchronized dual-arm motion timing, collision avoidance, shared-object handling, lab deployment documentation.",
        impact: "Achieved 90% success (45/50 runs) and reduced average cycle time by 26.7% for synchronized dual-arm pick-and-place."
      },
      github: "https://github.com/bagherhassani"
    },

    {
      media: "newton",
      type: 'video',
      title: "UR Singularity Detection & Path Correction",
      description: "Implemented a safety check for UR arm motion that detects near‑singular joint configurations and blocks unsafe commands before execution to prevent controller safety stops. When possible, the code auto-corrects the motion by retargeting joint commands before sending them to the robot.",
      tags: ["Universal Robots", "Singularity", "Robot Motion", "Trajectory Checking", "Python", "Safety"],
      highlights: {

        tech: "Python, joint-space checks for near-singular poses, safe-command gating, joint retargeting before execution.",
        impact: "Prevented safety stops and auto-corrected 85% of unsafe motions before execution."
      },
      github: "https://github.com/bagherhassani"
    },



    // smooth trajecory generation
    {
      media: "urLousdVideo",
      type: 'video',
      title: "Bimanual Object Handling",
      description: "Implemented a Python bimanual (dual-arm) Universal Robots control workflow that coordinates two arms to handle an object through a staged manipulation sequence. The program performs simultaneous arm movements to target joint poses, supports master-only motion while the slave holds, and synchronizes gripper actions during key steps. The design is intended to extend toward force/torque-based estimation of object mass and center-of-mass for adaptive load sharing in future work.",
      tags: [
        "Universal Robots",
        "Bimanual Manipulation",
        "Dual-Arm Coordination",
        "Robot Motion",
        "Trajectory Generation",
        "Python",
        "Force/Torque Sensing"
      ],
      highlights: {
        tech: "Python, UR dual-arm control, quintic joint-trajectory generation (~125 Hz), simultaneous move execution with completion monitoring, timed gripper control (RG2 via XML-RPC), interactive multi-position sequencing.",
        impact: "Enabled repeatable synchronized dual-arm positioning and staged manipulation, establishing a foundation for future mass/center-of-mass estimation and adaptive bimanual load sharing."
      },
      github: "https://github.com/bagherhassani"
    },
    // singularity detection



  ],

  projectsItems: [
    {
      media: "/study-partner-app.mov",
      type: "video",
      title: "Study Partner App",
      description: "Building a web app that connects 1,000+ university students with study partners - features a matching system, session filtering, account dashboard, and a clean UI/UX.",
      tags: ["TypeScript", "React Native", "Supabase", "Expo"],
      status: "Under development",
      highlights: {
        tech: "Visual Studio, Supabase, TypeScript.",
        impact: ""
      }
    },
    {
      media: "/university-ai-assistant-demo.mp4",
      type: "video",
      title: "University AI Assistant Web Demo",
      badge: "Idea Challenge Winner",
      disableAudio: true,
      description: "Developed a full-stack university chatbot prototype that pairs a Flask backend with polished, interactive web interfaces for student support. Implemented responsive chat experiences with animated backgrounds, predefined question shortcuts, theme toggling, and campus-resource sections, then connected them to backend routes that return structured responses for common university questions.",
      tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Frontend Development", "Chatbot", "UI/UX"],
      highlights: {
        tech: "Flask routing, frontend chat workflows, responsive UI design, particles.js visual effects, Markdown-style message rendering, local API integration.",
        impact: "Turned a chatbot concept into a working demo that showcases both interface design and backend integration for campus information workflows."
      }
    }
  ],

  skills: [
    {
      img: codeIcon,
      para:
        "Python",
    },
    {
      img: clangIcon,
      para:
        "C++",
    },

    {
      img: RPIIcon,
      para:
        "Java",
    },
    {
      img: rosIcon,
      para:
        "ROS",
    },
    {
      img: openCVIcon,
      para:
        "Git/GitHub",
    },
    {
      img: SolidworksIcon,
      para:
        "Linux",
    },

    {
      img: moveItIcon,
      para:
        "MoveIt",
    },
    {
      img: forceTorqueIcon,
      para:
        "Force-Torque Sensing",
    },

  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's chat about robots!",
  social: [

    {
      img: githubIcon,
      url: "https://github.com/Asma199-alt"
    },
    {
      img: googleScholarIcon,
      url: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevenfeng7/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;
