"use client";

import { motion } from "framer-motion";

const Transition = (Component) => {
  return () => (
    <>
      <Component />

      <motion.div
        className="slide-in absolute top-0 left-0 w-full h-screen bg-white origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out absolute top-0 left-0 w-full h-screen bg-white origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
