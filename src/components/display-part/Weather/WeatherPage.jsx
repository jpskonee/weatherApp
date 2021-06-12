import React from "react";
import DateDiv from "./DateDiv";
import SimpleCard from "../Weather/SimpleCard";
import AnimationCard from "./AnimationCard";
import Description from "./Description";

const WeatherPage = (props) => {
  const { city, setCity, data, setData } = props;
  return (
    <div>
      <DateDiv />
      <SimpleCard city={city} setCity={setCity} data={data} setData={setData} />
      <Description />
      <AnimationCard data={data} />
    </div>
  );
};

export default WeatherPage;
