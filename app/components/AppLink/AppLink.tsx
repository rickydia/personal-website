import type { PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-router";

import css from "./styles.module.css";

export interface AppLinkProps extends LinkProps {
  to: string;
  className?: string;
}

export function AppLink({
  to,
  children,
  className,
  ...props
}: PropsWithChildren<AppLinkProps>) {
  return (
    <Link {...props} to={to} className={`${css.link} ${className}`}>
      {children}
    </Link>
  );
}
