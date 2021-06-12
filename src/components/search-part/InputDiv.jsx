import React from "react";
import Input from "./Input";
import LocationSearchingTwoToneIcon from "@material-ui/icons/LocationSearchingTwoTone";

const InputDiv = (props) => {
  const { city, setCity, data, setData } = props;

  return (
    <div className="center input-div">
      <Input city={city} setCity={setCity} data={data} setData={setData} />
      <div>
        <LocationSearchingTwoToneIcon
          style={{
            fontSize: "25px",
            margin: "52px 0px 0px 10px",
            color: "#ececec",
          }}
        />
      </div>
    </div>
  );
};

export default InputDiv;
