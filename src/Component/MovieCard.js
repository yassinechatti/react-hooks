import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rater from "./Rate";

const MovieCard = ({ cardMovie }) => {
  return (
    <div>
      
      <Link to={`/movie/${cardMovie.id}`}
      style={{ textDecoration: "none" }}
      >
        <Card
          style={{
            width: "18rem",
            backgroundColor: "black",
            border: "#11ffee00",
            borderRadius: "5%",
            marginBottom: "20px",
          }}
        >
          {
            <Card.Img
              variant="top"
              src={cardMovie.posterURL}
              width="260"
              height="260"
            />
          }
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              {cardMovie.title}
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              {cardMovie.description}
            </Card.Text>
            <Rater rating={cardMovie.rating} />
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
