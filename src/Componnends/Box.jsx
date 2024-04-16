import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxSystemProps({ item }) {
  return (
    <Box height={250} width={300} p={2} sx={{ border: "2px solid grey" }}>
      <h2 style={{ fontWeight: "bolder" }}>{item.city}</h2>
      <p>
        max:{item?.data?.DailyForecasts[0].Temperature.Maximum.Value}
        {item?.data?.DailyForecasts[0].Temperature.Maximum.Unit}
      </p>
      <p>
        min: {item?.data?.DailyForecasts[0].Temperature.Minimum.Value}
        {item?.data?.DailyForecasts[0].Temperature.Minimum.Unit}
      </p>
    </Box>
  );
}
