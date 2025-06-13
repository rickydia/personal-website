import { useContext } from "react";

import { Theme, ThemeContext } from "~/theme";
import DarkSwitch from "~/assets/darkSwitch.svg?react";
import LightSwitch from "~/assets/lightSwitch.svg?react";

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
            <button
              className={css.button}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === Theme.DARK ? (
                <DarkSwitch className={css.svg} aria-label="Dark theme" />
              ) : (
                <LightSwitch className={css.svg} aria-label="Light theme" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
