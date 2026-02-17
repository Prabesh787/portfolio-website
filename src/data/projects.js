import { dkpCover } from "../assets/images/images";

export const projects = [
  {
    id: 1,
    title: "E-commerce Website Frontend Project",
    description: "A modern and responsive e-commerce frontend built with React and Tailwind CSS, featuring product browsing, cart management, user authentication, and secure payment integration. The application includes an admin panel for managing products, orders, and users, along with a smooth checkout flow and real-time state management. Designed with scalability, performance, and user experience in mind.",
    image: dkpCover,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Khalti"],
    category: "web",
    featured: true,
    github: "https://github.com/khatiwadaprajwal/DKP-ecommerce-store",
    live: "https://dkp-ecommerce-store-frontend.onrender.com/",
    date: "2025-02-15"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Hospital Management System developed using Spring Boot, designed to manage core hospital operations such as patients, doctors, appointments, and medical records. The application uses PostgreSQL for persistent data storage and Redis for caching and performance optimization. Cloudinary is integrated for secure media storage (e.g., reports and images). The application is Dockerized for consistent deployment and is hosted on Render. Swagger (OpenAPI) is used as the API client and documentation tool for testing and interaction with REST endpoints.",
    image: "/placeholder-project.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
    category: "web",
    featured: true,
    github: "https://github.com/Prabesh787/portfolio-website",
    live: "https://hms-v1-1.onrender.com/swagger-ui/index.html#",
    date: "2025-12-20"
  },
  {
    id: 3,
    title: "Mobile App",
    description: "A cross-platform mobile application for task management. Available on both iOS and Android platforms.",
    image: "/placeholder-project.jpg",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "mobile",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
    date: "2024-03-10"
  },
  {
    id: 4,
    title: "API Service",
    description: "RESTful API service with comprehensive documentation. Includes authentication, rate limiting, and error handling.",
    image: "/placeholder-project.jpg",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    category: "backend",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
    date: "2024-04-05"
  },
];

export const projectCategories = ["all", "web", "mobile", "backend"];

