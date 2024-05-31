import React from "react";

import { motion } from "framer-motion";

import { fadeAnimation } from "./../../utils/framer-animations";

import "./Info.css";

const Info = ({ info }) => {
  const { hidden, visible, exit } = fadeAnimation;

  return (
    <motion.div initial={hidden} animate={visible} exit={exit} className="info">
      {info}
    </motion.div>
  );
};

export default Info;
