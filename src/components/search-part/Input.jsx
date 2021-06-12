import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 10px",
    margin: "30px 0px 0px 30px",
    display: "flex",
    alignItems: "center",
    width: 350,
    height: 65,
    color: "white",
    borderRadius: "14px",
  },
  input: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase(props) {
  const { city, setCity, setData } = props;

  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const getData = async () => {
      const weatherData = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=491148ded347f128b1b79b6d21de468a`
      );
      const temp = weatherData.data.main.temp;
      const location = weatherData.data.name;
      const country = weatherData.data.sys.country;
      const pressure = weatherData.data.main.pressure;
      const humidity = weatherData.data.main.humidity;
      const descp = weatherData.data.weather[0].description;
      const windSpeed = weatherData.data.wind.speed;
      const icon = weatherData.data.weather[0].icon;
      const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      setData({
        temp: temp,
        pressure: pressure,
        humidity: humidity,
        descp: descp,
        windSpeed: windSpeed,
        country: country,
        location: location,
        iconLink: iconLink,
      });
    };

    getData();
    setCity("");
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        onChange={(event) => {
          const place = event.target.value;
          setCity(place);
        }}
        value={city}
        className={classes.input}
        placeholder="Enter a Location"
        inputProps={{ "aria-label": "Enter a Location" }}
      />
      <InputBase type="hidden" />
      <IconButton
        onClick={handleClick}
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
