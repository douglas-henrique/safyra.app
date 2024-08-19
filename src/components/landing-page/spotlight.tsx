'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface SpotlightProps {
  children: ReactNode,
  className?: string
}

export default function Spotlight({ children, className }: SpotlightProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={ `group w-4/6 relative border-purple-600 bg-purple-600 rounded-xl border border-white/10  
      px-8 py-6 shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              #ffffff90,
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
