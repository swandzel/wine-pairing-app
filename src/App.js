import { useState } from "react";

import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import Grapes from "./components/Grapes/Grapes";
import Wine from "./components/Wine/Wine";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation, containerAnimation } from "./utils/framer-animations";
import { getWines } from "./utils/api.js";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [wine, setWine] = useState(null);
  const [food, setFood] = useState(
    "Are you looking for a wine that suits your food? Enter what you will eat and we will find the right wine for you!"
  );
  const [info, setInfo] = useState(
    "Type for example beef, pizza, burger, asparagus etc."
  );
  const [loader, setLoader] = useState(false);

  const { hidden, visible, exit, fadeTransition } = fadeAnimation;
  const { open, closed, initial, containerTransition } = containerAnimation;

  const fetchWines = async () => {
    if (query !== "") {
      setWine(null);
      setLoader(true);
      const data = await getWines(query);
      setWine(data)
      setQuery("");
      setFood("Are you going to eat something else?");
      setInfo(`Results for "${query}"`);

      if (data.status === "failure") {
        setWine(null);
        setInfo(data.message);
        setQuery("");
        setFood(
          "Are you looking for a wine that suits your food? Enter what you will eat and we will find the right wine for you!"
        );
      }
      setLoader(false); 
    }
  
  }

  const search = (e) => {
    if (e.key === "Enter" && query !== "") {
      fetchWines()
    }
    return false;
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={initial}
          animate={wine ? open : closed}
          exit={!wine ? open : closed}
          key={loader}
          transition={containerTransition}
          className="App"
        >
          <Logo refreshPage={refreshPage} />
          <div className="container">
            <motion.div
              initial={hidden}
              animate={visible}
              exit={exit}
              key={food}
              className="food"
            >
              {food}
            </motion.div>

            <SearchBar
              fetchWines={fetchWines}
              query={query}
              queryFromSearch={(query) => setQuery(query)}
              search={search}
            />
            <motion.div
              initial={hidden}
              animate={visible}
              exit={exit}
              className="info"
            >
              {info}
            </motion.div>

            {loader && <Loader />}

            {wine && (
              <motion.div
                initial={hidden}
                animate={visible}
                transition={fadeTransition}
                key={wine.food}
              >
                <Grapes
                  pairedWines={wine.pairedWines}
                  pairingText={wine.pairingText}
                />
                <Wine productMatches={wine.productMatches?.[0]} />
              </motion.div>
            )}
            {!wine && (
              <motion.div
                initial={hidden}
                animate={visible}
                exit={exit}
                className="how-it-works"
              >
                {!loader && (
                  <p>
                    <i className="fas fa-info-circle"></i>
                    Types of food available in the database:
                    <br />
                    pizza, pork, lamb, beef, burger, chicken, white fish, salad,
                    cake
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
