import {
  ExternalLink,
  TransitionIn,
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
      <TransitionIn>
        <Typography variant={TypographyVariant.HEADING}>
          Some of the stuff I've done
        </Typography>
        <div className={css.content}>
          {EXPERIENCE_DATA.map((experience) => (
            <ExperienceItem key={experience.title} {...experience} />
          ))}
        </div>
        <ExternalLink to="/resume" text="View full resume" />
      </TransitionIn>
    </section>
  );
}
