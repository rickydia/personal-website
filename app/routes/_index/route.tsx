import type { Route } from "./+types/route";

import { AboutMeSection } from "./AboutMeSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { LandingSection } from "./LandingSection";
import { PhotosSection } from "./PhotosSection";
import css from "./styles.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ricky Diaz Gomez" },
    { name: "description", content: "Ricky Diaz Gomez's personal website" },
  ];
}

export default function Home() {
  return (
    <div className={css.container}>
      <LandingSection />
      <AboutMeSection />
      <ExperienceSection />
      <PhotosSection />
      <ContactSection />
    </div>
  );
}
