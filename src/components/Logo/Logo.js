import React from "react";
import "./Logo.css";
import { motion } from "framer-motion";
import { fadeAnimation } from "../../utils/framer-animations";

const Logo = ({ refreshPage }) => {
  const { hidden, visible, fadeTransition } = fadeAnimation;

  return (
    <motion.div
      initial={hidden}
      animate={visible}
      transition={fadeTransition}
      className="logo"
      onClick={refreshPage}
    >
      <i className="fas fa-wine-glass-alt glass"></i>
      wine pairing app
    </motion.div>
  );
};

export default Logo;
