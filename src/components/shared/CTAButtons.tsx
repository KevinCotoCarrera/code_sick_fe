"use client";

import { motion } from "framer-motion";

interface CTAButtonsProps {
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryClassName?: string;
  secondaryClassName?: string;
}

export default function CTAButtons({
  primaryText = "Get Started",
  secondaryText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  primaryClassName = "px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors",
  secondaryClassName = "px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors",
}: CTAButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={primaryClassName}
        onClick={onPrimaryClick}
      >
        {primaryText}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={secondaryClassName}
        onClick={onSecondaryClick}
      >
        {secondaryText}
      </motion.button>
    </div>
  );
}
