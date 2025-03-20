"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-up" | "bounce";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimatedContainer({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: AnimatedContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) {
      return "opacity-0";
    }

    const baseClass = "transition-all transform";
    const durationClass = `duration-${duration}`;
    const delayClass = delay > 0 ? `delay-${delay}` : "";

    switch (animation) {
      case "fade-up":
        return `${baseClass} ${durationClass} ${delayClass} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
      case "fade-in":
        return `${baseClass} ${durationClass} ${delayClass} ${
          isVisible ? "opacity-100" : "opacity-0"
        }`;
      case "slide-in":
        return `${baseClass} ${durationClass} ${delayClass} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`;
      case "scale-up":
        return `${baseClass} ${durationClass} ${delayClass} ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`;
      case "bounce":
        return `${baseClass} ${durationClass} ${delayClass} ${
          isVisible
            ? "opacity-100 animate-bounce"
            : "opacity-0"
        }`;
      default:
        return `${baseClass} ${durationClass} ${delayClass} ${
          isVisible ? "opacity-100" : "opacity-0"
        }`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
