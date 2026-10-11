"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Page Transition
export const PageTransition = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Section Reveal
export const SectionReveal = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-20px" }}
    variants={{
      hidden: { opacity: 0.1, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger Container
export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Animated Heading Component (for stagger children)
export const AnimatedHeading = ({ children, className, style }: { children: ReactNode; className?: string, style?: any }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

// Subtle Hover Card
export const HoverCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={className}
  >
    {children}
  </motion.div>
);
