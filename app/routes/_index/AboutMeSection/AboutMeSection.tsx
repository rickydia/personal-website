import {
  TransitionIn,
  Typography,
  TypographyVariant,
  ABOUT_ME_SECTION_ID,
  ExternalLink,
} from "~/components";

import css from "./styles.module.css";

export function AboutMeSection() {
  return (
    <section className={css.container} id={ABOUT_ME_SECTION_ID}>
      <TransitionIn threshold={0.5}>
        <Typography variant={TypographyVariant.HEADING}>
          A little bit about <span className={css.highlight}>me</span>
        </Typography>
        <div className={css.content}>
          <Typography variant={TypographyVariant.DEFAULT}>
            I'm a full-stack software engineer who cares deeply about building
            products that are{" "}
            <Typography variant={TypographyVariant.DEFAULT_BOLD}>
              both technically sound and user-friendly
            </Typography>
            . Over the past few years, I've helped scale and reinvent products
            at Censys, where I served as a senior engineer on a major rebuild of
            their flagship platform. From frontend architecture to backend
            services, I've worked across the stack to build systems that are{" "}
            <Typography variant={TypographyVariant.DEFAULT_BOLD}>
              scalable, secure, and actually enjoyable to use.
            </Typography>
          </Typography>
          <Typography variant={TypographyVariant.DEFAULT}>
            I'm especially drawn to frontend engineering and design
            systems—anything that brings clarity, structure, and beauty to
            complex ideas. I've worked most recently with{" "}
            <Typography variant={TypographyVariant.DEFAULT_BOLD}>
              React, TypeScript, and Remix
            </Typography>
            , always with a healthy appreciation for accessibility and clean
            code.
          </Typography>
          <Typography variant={TypographyVariant.DEFAULT}>
            Outside of work, I'm often bouldering, dialing in my perfect
            espresso shot (well... at least trying to), or hanging out with some
            friends and my pup. I'm based in Seattle (after spending 5 years in
            Michigan), and{" "}
            <Typography variant={TypographyVariant.DEFAULT_BOLD}>
              I care a lot about building inclusive, human-centered tech.
            </Typography>
          </Typography>
          <Typography variant={TypographyVariant.DEFAULT}>
            If you're curious, you can check out some of what I've built /
            contributed to on{" "}
            <ExternalLink
              to="https://github.com/rickydg"
              text="GitHub"
              className={css.link}
            />{" "}
            or you can reach out directly through{" "}
            <ExternalLink
              to="https://www.linkedin.com/in/rickydg"
              text="LinkedIn"
              className={css.link}
            />
            . I'm always happy to chat :)
          </Typography>
        </div>
      </TransitionIn>
    </section>
  );
}
