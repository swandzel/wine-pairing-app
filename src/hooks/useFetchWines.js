import { useState, useCallback } from "react";
import { getWines } from "./../utils/api";

const INITIAL_FOOD_TEXT =
  "Are you looking for a wine that suits your food? Enter what you will eat and we will find the right wine for you!";
const INITIAL_INFO_TEXT =
  "Type for example beef, pizza, burger, asparagus etc.";

const useFetchWines = () => {
  const [query, setQuery] = useState("");
  const [wine, setWine] = useState(null);
  const [food, setFood] = useState(INITIAL_FOOD_TEXT);
  const [info, setInfo] = useState(INITIAL_INFO_TEXT);
  const [loader, setLoader] = useState(false);

  const fetchWines = useCallback(async () => {
    if (query.trim() !== "") {
      setWine(null);
      setLoader(true);

      try {
        const data = await getWines(query);
        setWine(data);
        setQuery("");
        setFood("Are you going to eat something else?");
        setInfo(`Results for "${query}"`);

        if (data.status === "failure") {
          setWine(null);
          setInfo(data.message);
          setFood(INITIAL_FOOD_TEXT);
        }
      } catch (error) {
        setInfo("An error occurred while fetching wines. Please try again.");
      } finally {
        setLoader(false);
      }
    }
  }, [query]);

  return {
    query,
    setQuery,
    wine,
    food,
    info,
    loader,
    fetchWines,
  };
};

export default useFetchWines;
