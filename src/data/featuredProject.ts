import ProjectImage1 from "../assets/searchprice-home.jpg";
import ProjectImage2 from "../assets/searchprice-testimonials.jpg";
import ProjectImage3 from "../assets/searchprice-about.jpg";
import ProjectImage4 from "../assets/searchprice-advantages.jpg";
import LightProjectImage1 from "../assets/searchprice-home-light.jpg";
import LightProjectImage2 from "../assets/searchprice-testimonials-light.jpg";
import LightProjectImage3 from "../assets/searchprice-about-light.jpg";
import LightProjectImage4 from "../assets/searchprice-advantages-light.jpg";

export const featuredProject = {
  title: "SearchPrice",
  description:
    "A web platform for comparing product prices and profitability across marketplaces, helping sellers find opportunities and reduce research time.",
  scope:
    "Built with Next.js and React, the website presents marketplace comparisons through a responsive interface with light and dark themes.",
  status: "Live website",
  footer: "Website available online",
  demoLink: "https://searchprice.vercel.app",
  technologies: ["Next.js", "React", "Tailwind CSS"],
  images: {
    dark: [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4],
    light: [
      LightProjectImage1,
      LightProjectImage2,
      LightProjectImage3,
      LightProjectImage4,
    ],
  },
};
