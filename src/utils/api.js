import axios from "axios";

const APIKEY = process.env.REACT_APP_APIKEY

export const getWines = async ( query ) => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/food/wine/pairing?food=${query}&apiKey=${APIKEY}`
      );

      return data
    } catch (error) {
      console.error(error);
    }
};
