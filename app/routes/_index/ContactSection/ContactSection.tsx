import { RiLinkedinBoxLine, RiMailLine } from "@remixicon/react";

import {
  AppLink,
  CONTACT_SECTION_ID,
  Typography,
  TypographyVariant,
} from "~/components";

import css from "./styles.module.css";

export function ContactSection() {
  return (
    <section className={css.container} id={CONTACT_SECTION_ID}>
      <Typography variant={TypographyVariant.HEADING}>
        Let's get in touch!
      </Typography>

      <div className={css.content}>
        <AppLink to="mailto:rickydg@proton.me" className={css.link}>
          <RiMailLine className={css.icon} />
          <Typography variant={TypographyVariant.SUBHEADING}>
            Email Me
          </Typography>
        </AppLink>
        <Typography variant={TypographyVariant.DEFAULT_BOLD} className={css.or}>
          or
        </Typography>
        <AppLink
          to="https://www.linkedin.com/in/rickydg"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          <RiLinkedinBoxLine className={css.icon} />
          <Typography variant={TypographyVariant.SUBHEADING}>DM Me</Typography>
        </AppLink>
      </div>
    </section>
  );
}
