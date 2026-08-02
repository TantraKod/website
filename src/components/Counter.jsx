import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter that counts up when element enters viewport.
 * Extracted as shared utility for Hero and Statistics sections.
 */
export default function Counter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const isDecimal = String(target).includes('.');
    const numTarget = parseFloat(target);
    const steps = 45;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * numTarget;
      setCount(isDecimal ? parseFloat(value.toFixed(1)) : Math.round(value));
      if (step >= steps) clearInterval(interval);
    }, 28);

    return () => clearInterval(interval);
  }, [started, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
