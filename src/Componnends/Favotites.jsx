import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import jsonDay from "../assets/day.json";
import BoxSystemProps from "./Box";
import Grid from "@mui/material/Grid";

const Favorites = (props) => {
  const { nameCity, setCityName, favorite, setFavorite } =
    useContext(AppContext);
  const [data, setdata] = useState();
  const dataDay = async (key) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=1JqqEZNWCnGJBmfFW0zudh0aHUivCdSJ&metric=true`
    );
    const data = await res.json();
    return data;
    return jsonDay;
  };
  useEffect(() => {
    if (favorite.length === 0) return;
    const fun = async () => {
      const arr = [];
      for (let item of favorite) {
        console.log(item);
        const data = await dataDay(item.key);
        arr.push({ key: item.key, city: item.city, data });
      }
      console.log("arr", arr);
      setFavorite(arr);
    };
    fun();
  }, []);

  return (
    <>
      <h3>Favorites</h3>
      <Grid
        gap={4}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {favorite.map((item, index) => {
          return <BoxSystemProps item={item} />;
        })}
      </Grid>
    </>
  );
};
export default Favorites;
