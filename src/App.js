import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Grapes from "./components/Grapes";
import Wine from "./components/Wine";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [wine, setWine] = useState({});
  const [food, setFood] = useState(
    "Are you looking for a wine that suits your food? Enter what you will eat and we will find the right wine for you!"
  );
  const [info, setInfo] = useState(
    "Type for example beef, pizza, burger, asparagus etc."
  );

  const search = (e) => {
    if (e.key === "Enter" && query !== "") {
      fetchFunc();
    }
    return false;
  };

  const fetchFunc = () => {
    if (query !== "") {
      fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${query}&apiKey=8395e847ccc4443ea9277390146ac94e`
      )
        .then((data) => data.json())
        .then((data) => {
          setWine(data);
          setQuery("");
          setFood("Are you going to eat something else?");
          setInfo("");
        })
        .catch((err) => console.log(err));
    }
    return false;
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="App">
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

          {typeof wine.productMatches !== "undefined" ? (
            <>
              <Grapes
                pairedWines={wine.pairedWines}
                pairingText={wine.pairingText}
              />
              {wine.productMatches.length > 0 ? (
                <Wine productMatches={wine.productMatches[0]} />
              ) : null}
            </>
          ) : (
            <span className="error">{wine.message}</span>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
