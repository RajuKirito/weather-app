import { useEffect, useState } from "react";
import axios from "axios";
import DayCard from "./Card";
import { Grid } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [loc, setLoc] = useState();
  const [res, setRes] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLoc({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    } else {
      console.log("false");
    }
  }, []);

  useEffect(() => {
    if (!loc) {
      return;
    }
    console.log("Latitude is :", loc.lat);
    console.log("Longitude is :", loc.lon);
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${loc.lat},${loc.lon}&aggregateHours=24&forecastDays=7&contentType=json&iconSet=icons1&locationMode=single&key=T5HND6S8SKB2RYT3NYEQUFGW2`
      )
      .then((res) => setRes(res))
      .catch((err) => console.log(err));
  }, [loc]);

  console.log(res);
  if (!loc || !res) {
    return;
  }

  return (
    <div>
      <NavBar />
      {/* <h1>{res.data.location}</h1> */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <DayCard day={res.data.location.values[0]} />
        </Grid>
        <Grid item xs={3}>
          <DayCard day={res.data.location.values[1]} />
        </Grid>
        <Grid item xs={3}>
          <DayCard day={res.data.location.values[2]} />
        </Grid>
        <Grid item xs={3}>
          <DayCard day={res.data.location.values[3]} />
        </Grid>
        <Grid item xs={3}>
          <DayCard day={res.data.location.values[4]} />
        </Grid>

        <Grid item xs={3}>
          <DayCard day={res.data.location.values[5]} />
        </Grid>

        <Grid item xs={3}>
          <DayCard day={res.data.location.values[6]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
