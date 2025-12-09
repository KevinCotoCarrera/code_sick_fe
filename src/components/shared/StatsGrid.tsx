"use client";

import { motion } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  delay?: number;
  className?: string;
}

export function StatCounter({
  value,
  label,
  delay = 0,
  className = "",
}: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xl text-gray-400">{label}</div>
    </motion.div>
  );
}

interface StatsGridProps {
  stats: Array<{ value: string; label: string }>;
  className?: string;
}

export default function StatsGrid({ stats, className = "" }: StatsGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${className}`}
    >
      {stats.map((stat, index) => (
        <StatCounter
          key={index}
          value={stat.value}
          label={stat.label}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
