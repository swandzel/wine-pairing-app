import axios from "axios";

const callAPI = async (
  setWine,
  setLoader,
  setQuery,
  setFood,
  setInfo,
  query
) => {
  if (query !== "") {
    setWine(null);
    setLoader(true);
    try {
      const { data } = await axios.get(
        `https://wine-paring.herokuapp.com/getWine?food=${query.toLocaleLowerCase()}`
      );

      if (data.status === "success") {
        setWine(data.data);
        setQuery("");
        setFood("Are you going to eat something else?");
        setInfo(`Results for "${data.data.food}"`);
      }

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

export default callAPI;
