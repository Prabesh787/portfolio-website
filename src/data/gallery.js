import { gallery1 } from '../assets/images/images';

// Placeholder data URL for missing images
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+";

export const galleryItems = [
  {
    id: 1,
    title: "College Journey",
    image: gallery1,
    date: "2020-2024",
    description: "My time at college, learning and growing as a developer.",
    category: "education"
  },
  {
    id: 2,
    title: "First Internship",
    image: placeholderImage,
    date: "2023",
    description: "My first professional experience in backend development.",
    category: "career"
  },
  {
    id: 3,
    title: "Project Development",
    image: placeholderImage,
    date: "2024",
    description: "Working on exciting projects and building real-world applications.",
    category: "projects"
  },
  {
    id: 4,
    title: "Future Goals",
    image: placeholderImage,
    date: "2025+",
    description: "Looking forward to new challenges and opportunities in tech.",
    category: "future"
  }
];

export const galleryCategories = ["all", "education", "career", "projects", "future"];