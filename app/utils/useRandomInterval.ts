import { useCallback, useEffect, useRef } from "react";

import { getRandomInt } from "./getRandomInt";

// This function is largely inspired by https://www.joshwcomeau.com/snippets/react-hooks/use-random-interval/
export function useRandomInterval(
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null
) {
  const timeoutId = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof minDelay === "number" && typeof maxDelay === "number") {
      const handleTick = () => {
        const nextTickAt = getRandomInt(minDelay, maxDelay);

        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current);
    }
  }, []);

  return cancel;
}
