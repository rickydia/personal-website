import { Sparkle, Typography, TypographyVariant } from "~/components";

import css from "./styles.module.css";

export function LandingSection() {
  return (
    <section className={css.container}>
      <div className={css.content}>
        <Typography variant={TypographyVariant.DEFAULT}>Howdy! I'm</Typography>
        <Typography variant={TypographyVariant.HEADING}>
          Ricky Diaz Gomez,
        </Typography>
        <Sparkle>
          <Typography
            variant={TypographyVariant.DEFAULT}
            className={css.highlightSoftwareEngineer}
          >
            a full-stack software engineer.
          </Typography>
        </Sparkle>
        <Typography variant={TypographyVariant.SUBHEADING}>
          I enjoy doing and building things that{" "}
          <span className={css.highlightHelp}>help</span> people.
        </Typography>
      </div>
    </section>
  );
}
