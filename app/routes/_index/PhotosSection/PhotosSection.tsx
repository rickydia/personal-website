import {
  ExternalLink,
  TransitionIn,
  TypographyVariant,
  Typography,
  PHOTOS_SECTION_ID,
  Sparkle,
} from "~/components";

import { Photo } from "./Photo";
import css from "./styles.module.css";

export function PhotosSection() {
  return (
    <section id={PHOTOS_SECTION_ID} className={css.container}>
      <TransitionIn>
        <Typography variant={TypographyVariant.HEADING}>
          <Sparkle>Fun</Sparkle> photos and{" "}
          <span className={css.memories}>memories</span>
        </Typography>

        <div className={css.photosContainer}>
          <div className={css.photosColumn}>
            <Photo name="anya-1" />
            <Photo name="birds-1" />
            <Photo name="elle-1" />
          </div>
          <div className={css.photosColumn}>
            <Photo name="moher-1" />
            <Photo name="elle-2" />
            <Photo name="plants-1" />
          </div>
          <div className={css.photosColumn}>
            <Photo name="ricky-1" />
            <Photo name="vatican-1" />
            <Photo name="kira-1" />
          </div>
        </div>

        <ExternalLink
          to="https://www.instagram.com/smallpic.rick"
          text="View more photos"
        />
      </TransitionIn>
    </section>
  );
}
