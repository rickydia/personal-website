import { RiArrowRightUpLine } from "@remixicon/react";

import {
  AppLink,
  Typography,
  TypographyVariant,
  EXPERIENCE_SECTION_ID,
} from "~/components";

import { ExperienceItem } from "./ExperienceItem";
import { EXPERIENCE_DATA } from "./constants";
import css from "./styles.module.css";

export function ExperienceSection() {
  return (
    <section className={css.container} id={EXPERIENCE_SECTION_ID}>
      <Typography variant={TypographyVariant.HEADING}>
        Some of the stuff I've done
      </Typography>
      <div className={css.content}>
        {EXPERIENCE_DATA.map((experience) => (
          <ExperienceItem key={experience.title} {...experience} />
        ))}
      </div>
      <AppLink
        to={"/resume"}
        className={css.link}
        target="_blank"
        rel="noopener noreferrer"
        reloadDocument
      >
        <Typography
          variant={TypographyVariant.DEFAULT_BOLD}
          className={css.linkText}
        >
          View full resume
        </Typography>
        <RiArrowRightUpLine className={css.icon} />
      </AppLink>
    </section>
  );
}
