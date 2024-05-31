import React from "react";

import { motion } from "framer-motion";

import { fadeAnimation } from "./../../utils/framer-animations";

import "./Food.css";

const Food = ({ food }) => {
  const { hidden, visible, exit } = fadeAnimation;

  return (
    <motion.div
      initial={hidden}
      animate={visible}
      exit={exit}
      key={food}
      className="food"
    >
      {food}
    </motion.div>
  );
};

export default Food;
