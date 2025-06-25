import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "@remixicon/react";

import css from "./styles.module.css";
import { AppLink } from "../AppLink";
import { TransitionIn } from "../TransitionIn";

export function Footer() {
  return (
    <footer className={css.footer}>
      <TransitionIn threshold={0} className={css.transitionIn}>
        <AppLink
          to="https://www.linkedin.com/in/rickydg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile link"
        >
          <RiLinkedinBoxLine />
        </AppLink>
        <AppLink
          to="https://www.instagram.com/smallpic.rick"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile link"
        >
          <RiInstagramLine />
        </AppLink>
        <AppLink
          to="https://github.com/rickydia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile link"
        >
          <RiGithubLine />
        </AppLink>
      </TransitionIn>
    </footer>
  );
}
