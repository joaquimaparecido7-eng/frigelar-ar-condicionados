import { useReveal } from "../hooks/useReveal";

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transform: visible ? "none" : `translateY(${y}px)` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100" : "opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
