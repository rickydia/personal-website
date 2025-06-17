import {
  Typography,
  TypographyVariant,
  ABOUT_ME_SECTION_ID,
} from "~/components";

import css from "./styles.module.css";

export function AboutMeSection() {
  return (
    <section className={css.container} id={ABOUT_ME_SECTION_ID}>
      <Typography variant={TypographyVariant.HEADING}>
        A little bit about me
      </Typography>
      <div className={css.content}>
        <Typography variant={TypographyVariant.DEFAULT}>
          I'm a full-stack software engineer with a passion for building
          scalable and efficient web applications. I'm a quick learner and I'm
          always looking for new challenges.
        </Typography>
        <Typography variant={TypographyVariant.DEFAULT}>
          Lorem ipsumLorem ipsum dolor sit amet consectetur adipiscing elit.
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
          cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Lorem ipsumLorem ipsum dolor
          sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis
          convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
          fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
          malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
          himenaeos.
        </Typography>
      </div>
    </section>
  );
}
