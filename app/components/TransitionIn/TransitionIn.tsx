import type { PropsWithChildren } from "react";

import css from "./styles.module.css";
import { useElementOnScreen } from "./utils";

interface TransitionInProps {
  threshold?: number;
  reappear?: boolean;
  className?: string;
}

export function TransitionIn({
  children,
  threshold = 0.2,
  reappear = false,
  className,
}: PropsWithChildren<TransitionInProps>) {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold,
    reappear,
  });

  return (
    <div
      ref={containerRef}
      className={`${css.container} ${
        isVisible ? css.visible : css.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
