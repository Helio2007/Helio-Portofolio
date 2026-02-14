/**
 * Your portfolio projects – edit this file to add or change projects.
 * Images: use URLs (e.g. from imgur, Cloudinary) or put images in public/ and use "/your-image.png".
 *
 * Field guide:
 * - id: unique string (used in URL /project/:id)
 * - Img: image URL or path (e.g. "/project1.png")
 * - Title: project name
 * - Description: short summary (shown on card)
 * - Link: live demo URL (use "" if no demo)
 * - Github: repo URL or "Private"
 * - TechStack: array of tech names (e.g. ["React", "Tailwind"])
 * - Features: array of feature descriptions
 */

export const localProjects = [
  {
    id: "HEGI",
    Img: "https://placehold.co/600x340/1e1b4b/6366f1?text=Project+1",
    Title: "HEGI",
    Description: "A car rental website made with html, css, and javascript. My first serious project in web development.",
    Link: "",
    Github: "https://github.com/Helio2007/HEGI",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Features: [
      "Feature or learning point one",
      "Feature or learning point two",
      "Feature or learning point three",
    ],
  },
  {
    id: "another-project",
    Img: "https://placehold.co/600x340/312e81/818cf8?text=Project+2",
    Title: "Another Project",
    Description: "Another brief description. Replace with your own projects.",
    Link: "",
    Github: "Private",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Features: [
      "First main feature",
      "Second main feature",
    ],
  },
];
