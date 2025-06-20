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
          I'm a full-stack software engineer who cares deeply about building
          products that are both technically sound and user-friendly. Over the
          past few years, I've helped scale and reinvent products at Censys,
          where I served as a senior engineer on a major rebuild of their
          flagship platform. From frontend architecture to backend services,
          I've worked across the stack to build systems that are scalable,
          secure, and actually enjoyable to use.
        </Typography>
        <Typography variant={TypographyVariant.DEFAULT}>
          I'm especially drawn to frontend engineering and design
          systems—anything that brings clarity, structure, and beauty to complex
          ideas. I've worked most recently with React, TypeScript, and Remix,
          always with a healthy appreciation for accessibility and clean code.
        </Typography>
        <Typography variant={TypographyVariant.DEFAULT}>
          Outside of work, I'm often bouldering, dialing in my perfect espresso
          shot, or hanging out with some friends and my pup. I'm based in
          Seattle (after spending 5 years in Michigan), and I care a lot about
          building inclusive, human-centered tech.
        </Typography>
        <Typography variant={TypographyVariant.DEFAULT}>
          If you're curious, you can check out some of what I've built /
          contributed to on GitHub or you can reach out directly through
          LinkedIn—I'm always happy to chat.
        </Typography>
      </div>
    </section>
  );
}
