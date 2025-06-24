import { useEffect, useRef, useState } from "react";

// This hook is largely based on https://johnckealy.medium.com/how-to-create-slide-in-on-scroll-animations-in-a-react-app-127eae92ee16
export function useElementOnScreen(
  options: IntersectionObserverInit & { reappear?: boolean }
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppear = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callback = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callback, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callback]);

  return [containerRef, isVisible];
}
