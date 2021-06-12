import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const SimpleCard = (props) => {
  const { data } = props;
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "15px auto 0px",
      }}
    >
      <CardContent
        style={{
          fontSize: "20px",
          fontWeight: "400",
          opacity: 2.0,
        }}
      >
        <div
          style={{
            fontSize: "23px",
            fontWeight: "400",
          }}
        >
          {data && data.temp} <sup style={{ fontSize: "10px" }}> °C</sup>
        </div>

        <div
          style={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          {" "}
          {data && data.location}
        </div>
      </CardContent>

      <CardContent
        style={{
          fontSize: "16px",
          fontWeight: "50px",
          opacity: 0.7,
        }}
      >
        <div>
          <b>Pressure:</b> {data && data.pressure}
        </div>
        <div>
          <b>Humidity:</b> {data && data.humidity}
        </div>
        <div>
          <b> Wind Speed </b> {data && data.windSpeed}
        </div>
        <div>
          <b>Location</b> {data && data.descp}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
