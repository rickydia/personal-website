import { useRef, useState, type PropsWithChildren } from "react";

import SparkleIcon from "~/assets/sparkle.svg?react";
import { useIsMounted } from "~/utils/useIsMounted";
import { useIsVisible } from "~/utils/useIsVisible";
import { usePrefersReducedMotion } from "~/utils/usePrefersReducedMotion";
import { useRandomInterval } from "~/utils/useRandomInterval";

import css from "./styles.module.css";
import { generateSparkle } from "./utils";

// This function is largely inspired by https://www.joshwcomeau.com/react/animated-sparkles-in-react/
export function Sparkle({ children }: PropsWithChildren) {
  const isMountedFn = useIsMounted();
  const ref = useRef<HTMLSpanElement>(null);
  const isMounted = isMountedFn();
  const [sparkles, setSparkles] = useState(() => {
    return Array.from({ length: 3 }, () => generateSparkle(isMounted));
  });

  const prefersReducedMotion = usePrefersReducedMotion();
  const isVisible = useIsVisible(ref);

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(isMounted);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    !isMounted || prefersReducedMotion || !isVisible ? null : 50,
    !isMounted || prefersReducedMotion || !isVisible ? null : 450
  );

  return (
    <span className={css.container} ref={ref}>
      {sparkles.map((sparkle) => (
        <SparkleIcon
          key={sparkle.id}
          width={sparkle.size}
          height={sparkle.size}
          style={sparkle.style}
          className={css.sparkle}
        />
      ))}
      <span className={css.text}>{children}</span>
    </span>
  );
}
