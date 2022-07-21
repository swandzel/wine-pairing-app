import { useState } from "react";
import axios from "axios";
import "./App.css";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import Grapes from "./components/Grapes/Grapes";
import Wine from "./components/Wine/Wine";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { motion } from "framer-motion";

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
      setLoader(true);
      setWine(null);
      try {
        const { data } = await axios.get(
          `https://wine-paring.herokuapp.com/getWine?food=${query.toLocaleLowerCase()}`
        );
        console.log(data);

        if (data.status === "success") {
          setWine(data.data);
          setQuery("");
          setFood("Are you going to eat something else?");
          setInfo("");
        }
        //should be not found
        if (data.status === "error") {
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
    open: { height: "auto" },
    closed: { height: "500px" },
  };

  return (
    <>
      <motion.div
        animate={wine ? "open" : "closed"}
        variants={variants}
        transition={{ ease: "linear" }}
        className="App"
      >
        <Logo refreshPage={refreshPage} />
        <div className="container">
          <div className="food">{food}</div>
          <SearchBar
            fetchFunc={fetchFunc}
            query={query}
            queryFromSearch={(query) => setQuery(query)}
            search={search}
          />
          <div className="info">{info}</div>

          {loader && <Loader />}

          {wine && wine.pairedWines && wine.pairingText && wine.productMatches && (
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
      <Footer />
    </>
  );
}

export default App;
