import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import Grapes from "./components/Grapes/Grapes";
import Wine from "./components/Wine/Wine";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Food from "./components/Food/Food";
import Info from "./components/Info/Info";

import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation, containerAnimation } from "./utils/framer-animations";

import useFetchWines from "./hooks/useFetchWines";

import "./App.css";

const App = () => {
  const { query, setQuery, wine, food, info, loader, fetchWines } =
    useFetchWines();

  const { hidden, visible, exit, fadeTransition } = fadeAnimation;
  const { open, closed, initial, containerTransition } = containerAnimation;

  const search = (e) => {
    if (e.key === "Enter" && query !== "") {
      fetchWines();
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
            <Food food={food} />

            <SearchBar
              fetchWines={fetchWines}
              query={query}
              queryFromSearch={(query) => setQuery(query)}
              search={search}
            />
            <Info info={info} />

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

            {loader && <Loader />}
          </div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
