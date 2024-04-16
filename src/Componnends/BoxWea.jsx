import * as React from "react";
import Box from "@mui/material/Box";
import { WeatherComponent } from "../utils/weatherName.jsx";

export default function BoxSystemPropsWea({ item }) {
  return (
    <>
      <Box height={300} width={300} p={2} sx={{ border: "2px solid grey" }}>
        <h2>{WeatherComponent(item?.Date)}</h2>
        <h3>
          <p>max:</p>
          {item?.Temperature.Maximum.Value}
          {item?.Temperature.Maximum.Unit}
        </h3>
        <h3>
          <p>min:</p>
          {item?.Temperature.Minimum.Value} {item?.Temperature.Minimum.Unit}
        </h3>
      </Box>
    </>
  );
}
