import type { Route } from "./+types/route";
import { LandingContent } from "./LandingContent";

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
      <LandingContent />
    </div>
  );
}
