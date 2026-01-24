"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export default function PageTransition({
  children,
  pageKey,
}: PageTransitionProps) {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
