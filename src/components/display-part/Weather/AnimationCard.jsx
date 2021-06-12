import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const AnimationCard = (props) => {
  const { data } = props;
  const img =
    "https://i.pinimg.com/originals/2b/5a/ed/2b5aed3b50d0cd38d27178223a8afc28.gif";
  return (
    <div>
      <Card
        style={{
          backgroundColor: "#f5f5f5",
          width: "100%",
        }}
      >
        <CardContent
          className="center"
          style={{
            margin: "auto",
          }}
        >
          <img
            src={`${data ? data.iconLink : img}`}
            alt="weather-icon"
            style={{
              height: "fit-parent",
              width: "300px",
              imageResolution: "from-image",
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimationCard;
