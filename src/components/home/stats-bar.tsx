"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Destinations", value: 500, suffix: "+" },
  { label: "Reviews", value: 10000, suffix: "+" },
  { label: "Countries", value: 50, suffix: "+" },
  { label: "Travelers", value: 1, suffix: "M+", displayValue: "1M+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000 ? `${Math.floor(count / 1000)}K` : count.toString();

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg-slow opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {stat.displayValue ? (
                  stat.displayValue
                ) : (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="mt-2 text-sm text-foreground/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
