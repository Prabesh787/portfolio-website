export const SITE_NAME = "Portfolio";
export const SITE_DESCRIPTION = "A modern portfolio website showcasing my projects and skills";

// Gallery is hidden for now — flip to true to bring back the page, nav link and home section.
export const SHOW_GALLERY = false;

const ALL_NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

export const NAV_LINKS = ALL_NAV_LINKS.filter(
  (l) => SHOW_GALLERY || l.path !== "/gallery"
);


