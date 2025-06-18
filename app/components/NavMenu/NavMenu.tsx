import { useContext } from "react";

import { Theme, ThemeContext } from "~/theme";
import DarkSwitch from "~/assets/darkSwitch.svg?react";
import LightSwitch from "~/assets/lightSwitch.svg?react";

import { NavItem } from "./NavItem";
import {
  ABOUT_ME_SECTION_ID,
  CONTACT_SECTION_ID,
  EXPERIENCE_SECTION_ID,
  PHOTOS_SECTION_ID,
} from "./constants";
import css from "./styles.module.css";

export function NavMenu() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <NavItem href={`/#${ABOUT_ME_SECTION_ID}`}>About</NavItem>
          <NavItem href={`/#${EXPERIENCE_SECTION_ID}`}>Experience</NavItem>
          <NavItem href={`/#${PHOTOS_SECTION_ID}`}>Photos</NavItem>
          <NavItem href={`/#${CONTACT_SECTION_ID}`}>Contact</NavItem>
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
