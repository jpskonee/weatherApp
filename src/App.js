import React, { useState } from "react";
import "./App.css";
import Search from "./components/search-part/Search";
import Result from "./components/display-part/Result";
import { Grid } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  return (
    <div className="App center">
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Search city={city} setCity={setCity} data={data} setData={setData} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Result city={city} setCity={setCity} data={data} setData={setData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
