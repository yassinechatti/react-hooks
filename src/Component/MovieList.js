import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";
// import Example from "./Modal";

const MovieList = ({ movCards }) => {
  return (
    <div className="movies">
      <div className="mov">
        {movCards.map((card) => (
          <MovieCard cardMovie={card} key={card.id} />
        ))}
      </div>
      {/* <Example /> */}
    </div>
  );
};

export default MovieList;
