import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Component/MovieList.js";
import Filter from "../src/Component/Filter.js";
import { useState } from "react";
import Example from "./Component/Modal";
import Rating from "./Component/FilterRating";
import Movie from "./movie";
import { Switch, Route } from "react-router-dom";

let movies = [
  {
    id: 0,
    title: "Spiderman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2BlhtulzLGHpJByKWu0wX4xugBrb4vKZ4raUoyXm_8_g3F_EEEmHxlH1pZD4gprk9e0&usqp=CAU",
    rating: 4,
    trailer: (
      <iframe
        width="1014"
        height="570"
        src="https://www.youtube.com/embed/JfVOs4VSpmA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 1,
    title: "Superman",
    description: "Superhero film",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 3,
    trailer: (
      <iframe
        width="1014"
        height="423"
        src="https://www.youtube.com/embed/KVu3gS7iJu4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 2,
    title: "Batman",
    description: "Superhero film",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHiNA6lBrmUz6MTPJiQxur4IPr-YgdC9XWg1U6xNvCKeAtG0gKyNPYk2mCMs7G8Pt2U&usqp=CAU",
    rating: 5,
    trailer: (
      <iframe
        width="1014"
        height="570"
        src="https://www.youtube.com/embed/mqqft2x_Aa4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 3,
    title: "The Flash",
    description: "Superhero film",
    posterURL:
      "https://cdn.europosters.eu/image/750/posters/the-flash-lightning-i23275.jpg",
    rating: 3,
    trailer: (
      <iframe
        width="1014"
        height="570"
        src="https://www.youtube.com/embed/Yj0l7iGKh8g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 4,
    title: "Aquaman",
    description: "Superhero film",
    posterURL: "https://m.media-amazon.com/images/I/81m6Y9w6WGL._AC_SY606_.jpg",
    rating: 2,
    trailer: (
      <iframe
        width="1014"
        height="570"
        src="https://www.youtube.com/embed/WDkg3h8PCVU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 5,
    title: "Captain America",
    description: "Superhero film",
    posterURL:
      "https://i.pinimg.com/564x/9e/29/33/9e2933afaa7a4664869297189e1d1e08.jpg",
    rating: 4,
    trailer: (
      <iframe
        width="1014"
        height="570"
        src="https://www.youtube.com/embed/JerVrbLldXw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 6,
    title: "Iron Man",
    description: "Superhero film",
    posterURL:
      "https://i.pinimg.com/originals/9e/23/61/9e2361a42060a1607ef2cc5105fb0818.jpg",
    rating: 5,
    trailer: (
      <iframe
        width="1014"
        height="570"
        src="https://www.youtube.com/embed/Ke1Y3P9D0Bc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
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
    <div className="background">
      <div className="App ">
        <div className="addFilter">
          <Example addMovie={addMovie} />
          <Filter
            setmovCards={setmovCards}
            movies={movies}
            inputT={inputT}
            setInputT={setInputT}
          />
          <Rating value={value} setValue={setValue} />
        </div>
        {/* <MovieList movCards={movCards} inputT={inputT} value={value} /> */}
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MovieList movCards={movCards} inputT={inputT} value={value} />
          )}
        />
        <Route
          path="/movie/:id"
          render={(props) => <Movie {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default App;
