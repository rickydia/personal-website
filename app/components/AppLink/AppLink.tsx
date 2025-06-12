import type { PropsWithChildren } from "react";
import { Link } from "react-router";

import css from "./styles.module.css";

export interface AppLinkProps {
  href: string;
}

export function AppLink({ href, children }: PropsWithChildren<AppLinkProps>) {
  return (
    <Link to={href} className={css.link}>
      {children}
    </Link>
  );
}
