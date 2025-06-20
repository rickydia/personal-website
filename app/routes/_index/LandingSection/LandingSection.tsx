import { Typography, TypographyVariant } from "~/components";

import css from "./styles.module.css";

export function LandingSection() {
  return (
    <section className={css.container}>
      <div className={css.content}>
        <Typography variant={TypographyVariant.DEFAULT}>Howdy! I'm</Typography>
        <Typography variant={TypographyVariant.HEADING}>
          Ricky Diaz Gomez,
        </Typography>
        <Typography variant={TypographyVariant.DEFAULT}>
          a full-stack software engineer.
        </Typography>
        <Typography variant={TypographyVariant.SUBHEADING}>
          I enjoy doing and building things that help people.
        </Typography>
      </div>
    </section>
  );
}
