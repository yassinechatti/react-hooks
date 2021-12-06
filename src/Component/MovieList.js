import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";
// import { Switch, Route } from "react-router-dom";
// import Movie from "../movie";

const MovieList = ({ movCards, inputT, value }) => {
  return (
    <div>
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
      {/* <Switch>
        <Route path="/movie/:id" component={Movie} />
      </Switch> */}
    </div>
  );
};

export default MovieList;
