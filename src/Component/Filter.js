import React from "react";
import Rating from "./FilterRating";
const Filter = ({ setmovCards, movies }) => {
  const handleKeyUp = (e) => {
    doFilter(e.target.value);
  };

  const doFilter = (name) => {
    let movieToFilter = movies;
    name === ""
      ? setmovCards(movies)
      : setmovCards(
          movieToFilter.filter((move) =>
            move.title.toLowerCase().includes(name.toLowerCase())
          )
        );
  };

  return (
    <div>
      <label htmlFor="#filter" style={{ color: "white" }}>
        Filter
      </label>
      <input id="filter" onKeyUp={handleKeyUp}></input>
      <Rating setmovCards={setmovCards} movies={movies} />
    </div>
  );
};

export default Filter;
