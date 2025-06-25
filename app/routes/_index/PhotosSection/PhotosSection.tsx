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
            <Photo name="ricky-1" alt="Photo of Ricky outside a castle" />
            <Photo name="birds-1" alt="Photo of birds flying in the sky" />
            <Photo name="elle-1" alt="Photo of Elle on her phone" />
          </div>
          <div className={css.photosColumn}>
            <Photo name="moher-1" alt="Photo of Cliffs of Moher in Ireland" />
            <Photo name="elle-2" alt="Photo of Elle walking on a street" />
            <Photo name="plants-1" alt="Photo of a large cactus" />
          </div>
          <div className={css.photosColumn}>
            <Photo name="anya-1" alt="Photo of Anya holding a drink" />
            <Photo name="vatican-1" alt="Photo of Vatican City" />
            <Photo name="kira-1" alt="Photo of Kira in a ghost costume" />
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
