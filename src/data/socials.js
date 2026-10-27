export const socialLinks = [
  {
    name: "GitHub",
    handle: "@Prabesh787",
    url: "https://github.com/Prabesh787",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "in/prabesh-bhattarai",
    url: "https://www.linkedin.com/in/prabesh-bhattarai-a7a8082b3/",
    icon: "linkedin",
  },
  {
    name: "Email",
    handle: "pbhattrai88@gmail.com",
    url: "mailto:pbhattrai88@gmail.com",
    icon: "mail",
  },
];

// Profiles only (no email) — used for icon rows in the navbar / contact page.
export const profileLinks = socialLinks.filter((s) => s.icon !== "mail");
