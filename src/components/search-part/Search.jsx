import React from "react";
import BannerMsg from "./BannerMsg";
import InputDiv from "./InputDiv";
import LogoDiv from "./LogoDiv";

const Search = (props) => {
  const { city, setCity, data, setData } = props;
  return (
    <div className="search">
      <LogoDiv city={city} setCity={setCity} data={data} setData={setData} />
      <BannerMsg />
      <InputDiv city={city} setCity={setCity} data={data} setData={setData} />
    </div>
  );
};

export default Search;
