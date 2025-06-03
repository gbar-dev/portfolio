import { useEffect, useRef, useState } from "react";

type OnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function OnScroll({
  children,
  className = "",
  delay = 0,
}: OnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? className : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}
