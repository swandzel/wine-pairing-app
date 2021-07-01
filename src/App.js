import { useState } from "react";
import "./App.css";
import Grapes from "./components/Grapes";
import Wine from "./components/Wine";

function App() {
  const [query, setQuery] = useState("");
  const [wine, setWine] = useState({});
  const [food, setFood] = useState(
    "Are you looking for wine to accompany your meal? Enter what you eat and we will find the right wine for you!"
  );
  const [info, setInfo] = useState(
    "Type for example beef, pizza, burger, cake etc."
  );

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${query}&apiKey=8395e847ccc4443ea9277390146ac94e`
      )
        .then((data) => data.json())
        .then((data) => {
          setWine(data);
          setQuery("");
          setFood("Are you going to eat something else?");
          setInfo("");
          console.log(data);
          // console.log(data.productMatches.length);
        })
        .catch((err) => console.log(err));
    }
  };
  // console.log(wine.productMatches[0]);/

  return (
    <div className="App">
      <div className="logo">
        <i class="fas fa-wine-glass-alt glass"></i>
        Pair My Wine
      </div>
      <div className="container">
        <div className="food">{food}</div>
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              placeholder="Look for wine for yourself "
            />
          </div>
          <button className="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
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
  );
}

export default App;
