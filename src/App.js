import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Component/MovieList.js";
import Filter from "../src/Component/Filter.js";
import { useState } from "react";
import Example from "./Component/Modal";
import Rating from "./Component/FilterRating";

let movies = [
  {
    id: 0,
    title: "Spiderman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2BlhtulzLGHpJByKWu0wX4xugBrb4vKZ4raUoyXm_8_g3F_EEEmHxlH1pZD4gprk9e0&usqp=CAU",
    rating: 2,
  },
  {
    id: 1,
    title: "Superman",
    description: "Superhero film",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 3,
  },
  {
    id: 2,
    title: "Batman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHiNA6lBrmUz6MTPJiQxur4IPr-YgdC9XWg1U6xNvCKeAtG0gKyNPYk2mCMs7G8Pt2U&usqp=CAU",
    rating: 5,
  },
  {
    id: 3,
    title: "Batman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHiNA6lBrmUz6MTPJiQxur4IPr-YgdC9XWg1U6xNvCKeAtG0gKyNPYk2mCMs7G8Pt2U&usqp=CAU",
    rating: 5,
  },
  {
    id: 4,
    title: "Batman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHiNA6lBrmUz6MTPJiQxur4IPr-YgdC9XWg1U6xNvCKeAtG0gKyNPYk2mCMs7G8Pt2U&usqp=CAU",
    rating: 5,
  },
  {
    id: 5,
    title: "Batman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHiNA6lBrmUz6MTPJiQxur4IPr-YgdC9XWg1U6xNvCKeAtG0gKyNPYk2mCMs7G8Pt2U&usqp=CAU",
    rating: 5,
  },
  {
    id: 6,
    title: "Batman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHiNA6lBrmUz6MTPJiQxur4IPr-YgdC9XWg1U6xNvCKeAtG0gKyNPYk2mCMs7G8Pt2U&usqp=CAU",
    rating: 5,
  },
];
function App() {
  const [inputT, setInputT] = useState("");
  const [value, setValue] = useState(0);
  const [movCards, setmovCards] = useState(movies);
  const addMovie = (movie) => {
    movie.id = movies[movies.length - 1].id + 1;
    movies.push(movie);
    setmovCards([...movCards]);
  };
  return (
    <div className="App background">
      <Rating value={value} setValue={setValue} />
      <Filter
        setmovCards={setmovCards}
        movies={movies}
        inputT={inputT}
        setInputT={setInputT}
      />
      <MovieList movCards={movCards} inputT={inputT} value={value} />
      <Example addMovie={addMovie} />
    </div>
  );
}

export default App;
