import type { PropsWithChildren } from "react";

import { AppLink } from "~/components/AppLink";
import { Typography, TypographyVariant } from "~/components/Typography";

import css from "./styles.module.css";

export interface NavItemProps {
  href?: string;
}

export function NavItem({ children, href }: PropsWithChildren<NavItemProps>) {
  return (
    <li className={css.item}>
      {href ? (
        <AppLink href={href}>
          <Typography variant={TypographyVariant.DEFAULT}>
            {children}
          </Typography>
        </AppLink>
      ) : (
        children
      )}
    </li>
  );
}
