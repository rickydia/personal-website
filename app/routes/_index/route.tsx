import type { Route } from "./+types/route";

import css from "./styles.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className={css.container}></div>;
}
