"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Logo = {
  src: string;
  alt: string;
};

export default function RotatingLogo({
  logos,
  interval = 3000, // 3 seconds
  className = "",
  startDelay = 0,
}: {
  logos: Logo[];
  interval?: number;
  className?: string;
  startDelay?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setIndex((i) => (i + 1) % logos.length);
      }, interval);
    }, startDelay);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [logos.length, interval, startDelay]);

  return (
    <span
      className={`inline-block align-middle transition-all duration-500 ${className}`}
      style={{ minWidth: 160 }}
    >
      <div
        className={
          `w-40 h-16 bg-white rounded-lg shadow border flex items-center justify-center`
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={logos[index].src}
            src={logos[index].src}
            alt={logos[index].alt}
            className="max-h-12 max-w-[144px] object-contain"
            style={{ display: "inline-block" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </span>
  );
}
