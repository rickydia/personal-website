import { useContext } from "react";

import { Theme, ThemeContext } from "~/theme";

import css from "./styles.module.css";
import { NavItem } from "./NavItem";

export function NavMenu() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="/photos">Photos</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <li>
            <button onClick={toggleTheme}>{theme}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
