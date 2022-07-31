import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";

const Loader = () => (
  <div className="loader">
    <motion.svg
      animate={{ scale: [1, 0.8, 1] }}
      transition={{ repeat: Infinity }}
      xmlns="http://www.w3.org/2000/svg"
      width="82.686"
      height="147"
      viewBox="0 0 82.686 147"
    >
      <path
        id="Icon_awesome-wine-glass-alt"
        data-name="Icon awesome-wine-glass-alt"
        d="M62.015,133.219H50.531V99.572A41.53,41.53,0,0,0,82.515,55.312L77.935,4.177A4.554,4.554,0,0,0,73.425,0H9.262A4.552,4.552,0,0,0,4.754,4.177L.172,55.314A41.53,41.53,0,0,0,32.156,99.575v33.643H20.671A11.485,11.485,0,0,0,9.187,144.7a2.3,2.3,0,0,0,2.3,2.3H71.2a2.3,2.3,0,0,0,2.3-2.3A11.485,11.485,0,0,0,62.015,133.219ZM17.729,13.781H64.958L67.017,36.75H15.67Z"
        transform="translate(0)"
      />
    </motion.svg>
    <div className="loader-info">Fetching data from Wine Pairing API.</div>
    <div className="loader-info-small">
      The first fetch may take up to 10 seconds.
    </div>
  </div>
);

export default Loader;
