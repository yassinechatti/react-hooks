import React from "react";
import { Card } from "react-bootstrap";
import Rater from "./Rate";

const MovieCard = ({ cardMovie }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#11ffee00",
          border: "#11ffee00",
          borderRadius: "20%",
        }}
      >
        <Card.Img
          variant="top"
          src={cardMovie.posterURL}
          width="260"
          height="260"
        />
        <Card.Body>
          <Card.Title style={{ color: "white" }}>{cardMovie.title}</Card.Title>
          <Card.Text style={{ color: "white" }}>
            {cardMovie.description}
          </Card.Text>
          <Rater rating={cardMovie.rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
