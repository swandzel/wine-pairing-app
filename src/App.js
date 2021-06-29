import { useState } from "react";
import "./App.css";
import Grapes from "./components/Grapes";
import Wine from "./components/Wine";

function App() {
  const [query, setQuery] = useState("");
  const [wine, setWine] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${query}&apiKey=8395e847ccc4443ea9277390146ac94e`
      )
        .then((data) => data.json())
        .then((data) => {
          setWine(data);
          setQuery("");
          console.log(data);
          console.log(data.productMatches.length);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          placeholder="Search Wine"
        />
      </div>

      <Grapes pairedWines={wine.pairedWines} pairingText={wine.pairingText} />

      {typeof productMatches !== "undefined" ? (
        <Wine
          productMatches={wine.productMatches[0]}
          productMatchesLength={wine.productMatches.length}
        />
      ) : (
        wine.message
      )}
    </div>
  );
}

export default App;
