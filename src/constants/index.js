import project1 from "../assets/projects/interntrack.png"
import project2 from "../assets/projects/theinnercircle.png"
import project3 from "../assets/projects/wanderlust.png"
import pdfMern from "../assets/certificates/MERNCertificate.pdf"
import pdfDsa from "../assets/certificates/DSACertificate.pdf"
import pdfFullStack from "../assets/certificates/Full_Stack _Developer_Training _ Digital_Heroes.pdf"

export const HERO_CONTENT = `BTech CSE | MERN Stack | JAVA | DSA | Curious learner and a Million Dreams!`;

export const ABOUT_TEXT = `Passionate about Technology and problem-solving, with a strong foundation in Java, DSA, and full stack development. Experienced in building MERN stack applications, continuously learning new technologies, and enhancing skills in software development.
Eager to collaborate in dynamic environments and contribute to impactful projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "B-Tech CSE Student",
    company: "Moradabad Institue of Technology",
    description: `I am a student at MIT Moradabad, pursuing a degree in Computer Science to build a strong foundation in software engineering. I chose this path to continuously expand my skills, solve complex problems, and ultimately contribute to impactful technological solutions.`,
    technologies: ["JavaScript", "React.js", "Next.js", "mongoDB", "etc."],
  },
  
];
export const ACADEMICS = [
  {
    year: "2024 - 2028",
    course: "B-Tech",
    branch: "Computer Science",
    college: "Moradabad Institue of Technology",
    description: `Pursuing a degree in Computer Science to build a strong foundation in software engineering. I chose this path to continuously expand my skills, solve complex problems, and ultimately contribute to impactful technological solutions.`,
    technologies: ["OOPs", "C", "JAVA", "DSA", "OS Fundamentals","DBMS","Maths","etc"],
  },
  
];

export const PROJECTS = [
  {
    title: "Intertrack",
    image: project1,
    url: "https://interntrack-tan.vercel.app/",
    date: "June 2026",
    description:
      "A modern, lightweight, and highly responsive single-page web dashboard designed to centralize and simplify the internship application tracking journey. It offers a visual workspace to monitor application progress, calculate key performance metrics, and view status distributions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
  },
  {
    title: "the-inner-circle",
    image: project2,
    url: "https://the-inner-circle-fawn.vercel.app/",
    date: "April 2026",
    description:
      "A modern, light-themed responsive website built for The Inner Circle, a trading community and education platform based in Canada. This is a freelance project owned by The Inner Circle and developed by Prem.",
    technologies: ["ReactJS", "Tailwind CSS","Lovable"],
  },
  {
    title: "Wanderlust",
    image: project3,
    url: "https://wanderlust-plad.onrender.com/",
    date: "Oct '25 - Dec '25",
    description:
      "Wanderlust is a full-stack web application inspired by Airbnb that allows users to list, discover, and review accommodations. The project focuses on real-world backend practices, authentication, authorization, scalable architecture, and a clean UI",
    technologies: ["Node.js","Express.js", "Bootstrap", "EJS", "MongoDB", "Cloudinary", "Multer", "Joi"],
  },
  
];

export const CERTIFICATIONS = [
   {
    title: "Full-Stack Developer Training",
    issuer: "Digital Heroes",
    date: "June 2026",
    pdf: pdfFullStack,
    skills: ["Project Planning", "Database", "Security", "Deployment", "Integration"]
  },
  {
    title: "Delta (Full Stack Web Development)",
    issuer: "Apna College",
    date: "December 2025",
    pdf: pdfMern,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MySQL", "GitHub", "Full Stack"]
  },
  {
    title: "Alpha (DSA with Java)",
    issuer: "Apna College",
    date: "June 2025",
    pdf: pdfDsa,
    skills: ["DSA", "Java", "Data Structures", "Algorithms", "Problem solving"]
  }
];

export const CONTACT = {
  address: "Uttar Pradesh, india - 244001",
  // phoneNo: "+91 9548998327",
  email: "prem.s244001@gmail.com",
};
