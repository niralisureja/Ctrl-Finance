"use client";

import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number; // Floating amplitude in pixels
  speed?: number; // Animation duration in seconds
  delay?: number; // Delay in seconds
}

export function FloatingElement({
  children,
  className,
  amplitude = 15,
  speed = 3,
  delay = 0,
}: FloatingElementProps) {
  // Generate a deterministic animation name based on props
  const animationName = `float-${amplitude}-${speed}-${delay}`;

  return (
    <div
      className={cn("relative inline-block", className)}
      style={{
        animationName,
        animationDuration: `${speed}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDelay: `${delay}s`
      }}
    >
      <style jsx>{`
        @keyframes ${animationName} {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-${amplitude}px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
      {children}
    </div>
  );
}
