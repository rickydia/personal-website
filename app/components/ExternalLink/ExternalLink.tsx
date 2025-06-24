import { RiArrowRightUpLine } from "@remixicon/react";

import css from "./styles.module.css";
import { AppLink } from "../AppLink";
import { Typography, TypographyVariant } from "../Typography";

interface ExternalLinkProps {
  to: string;
  text: string;
}

export function ExternalLink({ to, text }: ExternalLinkProps) {
  return (
    <AppLink
      to={to}
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      reloadDocument
    >
      <Typography
        variant={TypographyVariant.DEFAULT_BOLD}
        className={css.linkText}
      >
        {text}
      </Typography>
      <RiArrowRightUpLine className={css.icon} />
    </AppLink>
  );
}
