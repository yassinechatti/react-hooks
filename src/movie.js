import React, { useEffect, useState } from "react";

const Movie = ({ match, movies, history }) => {
  console.log(match.params.id);
  const [movie, setMovie] = useState({});
  // console.log(product)

  useEffect(() => {
    setMovie(movies.find((el) => el.id === +match.params.id));
  }, [movies, match.params.id]);
  // const cardMovie = location.state;
  return (
    <div>
      <h2>{movie.description}</h2>
      {movie.trailer}
      <button onClick={() => history.goBack()}>GoBack</button>
    </div>
  );
};

export default Movie;
