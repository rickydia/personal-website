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
          <Sparkle>Fun</Sparkle> photos and memories
        </Typography>

        <div className={css.photosContainer}>
          <div className={css.photosColumn}>
            <Photo name="anya-1" />
            <Photo name="kira-1" />
            <Photo name="elle-1" />
          </div>
          <div className={css.photosColumn}>
            <Photo name="elle-1" />
            <Photo name="anya-1" />
            <Photo name="kira-1" />
          </div>
          <div className={css.photosColumn}>
            <Photo name="kira-1" />
            <Photo name="elle-1" />
            <Photo name="anya-1" />
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
