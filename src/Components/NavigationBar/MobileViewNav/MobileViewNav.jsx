import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useSelector } from "react-redux";

const container = {
  hidden: { opacity: 1, x: 100 },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: 10, opacity: 0 },
  visible: {
    x: -5,
    opacity: 1,
  },
};

const MobileViewNav = ({ children }) => {
  const isOpen = useSelector(state=>state.sideNav.isOpen);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isOpen]);

  return (
    <motion.span
      className="container"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {children.map((v, idx) => (
        <motion.span
          className="flex my-2"
          whileHover={{ scale: 1.1 }}
          variants={item}
          key={idx}
        >
          {v}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default MobileViewNav;
