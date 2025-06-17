import type { PropsWithChildren } from "react";

import css from "./styles.module.css";

export function Tag({ children }: PropsWithChildren) {
  return <div className={css.tag}>{children}</div>;
}
