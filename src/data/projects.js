import { dkpCover, eduEventsCover, investCareCover, retailLedgerCover } from "../assets/images/images";

export const projects = [
  {
    id: 1,
    title: "E-commerce Website Frontend Project",
    description: "Responsive e-commerce storefront built with React and Tailwind CSS — product browsing, cart, authentication and Khalti payments, plus an admin panel for managing products, orders and users.",
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
    title: "EduEvents",
    description: "Centralized platform for colleges to publish campus events and for students to discover, register for and review them. I built the backend — authentication with OAuth sign-in, REST APIs, PayPal payment integration, real-time notifications — and handled deployment.",
    image: eduEventsCover,
    technologies: ["Node.js", "Express", "MongoDB", "Socket.IO", "OAuth", "PayPal"],
    category: "web",
    featured: true,
    github: "",
    live: "https://event-management-frontend-9zyv.onrender.com/",
  },
  {
    id: 3,
    title: "Invest Care Ltd — Corporate Website & CMS",
    description: "Public website and admin CMS for an investment holding company: React frontend, Node.js/Express content APIs and authenticated admin access for managing site content. Deployed through a CI/CD pipeline so every change is built and released consistently.",
    image: investCareCover,
    technologies: ["React", "Node.js", "Express", "CI/CD"],
    category: "web",
    featured: true,
    github: "",
    live: "https://investcare.com.np/",
  },
  {
    id: 4,
    title: "Retail Ledger — Offline-First Shop Accounting App",
    description: "Mobile app for retail shops to record supplier bills, customer bills, cheques and payments, generate supplier ledgers and manage customer credit. Works fully offline on the device and syncs with the Node.js backend once a network is available.",
    image: retailLedgerCover,
    technologies: ["Flutter", "Dart", "Node.js", "Offline sync"],
    category: "mobile",
    featured: false,
    github: "",
    live: "",
  },
];

export const projectCategories = ["all", "web", "mobile"];

