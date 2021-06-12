import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const LogoDiv = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="center location-indicator-div">
        <div className="location-icon">
          {data && <LocationOnIcon style={{ fontSize: "30px" }} />}
        </div>
        <div>
          <div className="current-location-h">
            {" "}
            {data && "Current Location"}
          </div>
          <div className="current-location-b">
            {" "}
            {data && data.location} {data && data.country}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDiv;
