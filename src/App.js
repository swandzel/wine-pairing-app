import { useState } from "react";
import axios from "axios";
import "./App.css";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import Grapes from "./components/Grapes/Grapes";
import Wine from "./components/Wine/Wine";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [query, setQuery] = useState("");
  const [wine, setWine] = useState(null);
  const [food, setFood] = useState(
    "Are you looking for a wine that suits your food? Enter what you will eat and we will find the right wine for you!"
  );
  const [info, setInfo] = useState(
    "Type for example beef, pizza, burger, asparagus etc."
  );
  const [loader, setLoader] = useState(false);

  const search = (e) => {
    if (e.key === "Enter" && query !== "") {
      fetchFunc();
    }
    return false;
  };

  const fetchFunc = async () => {
    if (query !== "") {
      setWine(null);
      setLoader(true);
      try {
        const { data } = await axios.get(
          `https://wine-paring.herokuapp.com/getWine?food=${query.toLocaleLowerCase()}`
        );
        console.log(data);

        if (data.status === "success") {
          setWine(data.data);
          setQuery("");
          setFood("Are you going to eat something else?");
          setInfo(`Results for "${data.data.food}"`);
        }
        //should be not found
        if (data.status === "not found") {
          setWine(null);
          setInfo(data.data.message);
          setQuery("");
          setFood(
            "Are you looking for a wine that suits your food? Enter what you will eat and we will find the right wine for you!"
          );
        }
        setLoader(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const variants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: "500px", opacity: 1 },
    initial: { opacity: 1 },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial="initial"
          animate={wine ? "open" : "closed"}
          exit={!wine ? "open" : "closed"}
          key={loader}
          variants={variants}
          transition={{ ease: "linear", delay: 0.2 }}
          className="App"
        >
          <Logo refreshPage={refreshPage} />
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={food}
              className="food"
            >
              {food}
            </motion.div>

            <SearchBar
              fetchFunc={fetchFunc}
              query={query}
              queryFromSearch={(query) => setQuery(query)}
              search={search}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="info"
            >
              {info}
            </motion.div>

            {loader && <Loader />}

            {wine && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                key={wine.food}
              >
                <Grapes
                  pairedWines={wine.pairedWines}
                  pairingText={wine.pairingText}
                />
                <Wine productMatches={wine.productMatches} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
