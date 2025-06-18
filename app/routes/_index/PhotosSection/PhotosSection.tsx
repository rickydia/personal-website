import { RiArrowRightUpLine } from "@remixicon/react";

import { AppLink, Typography, TypographyVariant } from "~/components";

import { Photo } from "./Photo";
import css from "./styles.module.css";

export function PhotosSection() {
  return (
    <section className={css.container}>
      <Typography variant={TypographyVariant.HEADING}>
        Fun photos and memories
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

      <AppLink to={"/photos"} className={css.link}>
        <Typography
          variant={TypographyVariant.DEFAULT_BOLD}
          className={css.linkText}
        >
          View more photos
        </Typography>
        <RiArrowRightUpLine className={css.icon} />
      </AppLink>
    </section>
  );
}
