import { useState, useEffect } from 'react';

/**
 * Custom hook that observes when an element enters the viewport.
 * Disconnects after first intersection (one-shot animation trigger).
 */
export function useIntersection(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return isVisible;
}

export default useIntersection;
