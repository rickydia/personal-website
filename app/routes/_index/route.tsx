import { useContext } from "react";

import { Theme, ThemeContext } from "~/theme";
import type { Route } from "./+types/route";

import css from "./styles.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className={css.container}>
      <h1>Home</h1>
      <button onClick={() => setTheme(Theme.DARK)}>Dark</button>
      <button onClick={() => setTheme(Theme.LIGHT)}>Light</button>
    </div>
  );
}
