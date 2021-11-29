import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";

const MovieList = ({ movCards, inputT, value }) => {
  return (
    <div className="movies">
      <div className="mov">
        {movCards
          .filter(
            (movie) =>
              movie.title.toLowerCase().includes(inputT.toLowerCase()) &&
              movie.rating >= value
          )
          .map((card) => (
            <MovieCard cardMovie={card} key={card.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
