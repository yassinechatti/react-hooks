import { Rate } from "antd";
import React, { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ setmovCards, movies }) => {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
    doFilter(value);
  };
  const doFilter = (rate) => {
    let moviesToFilter = movies;
    rate === 0
      ? setmovCards(movies)
      : setmovCards(moviesToFilter.filter((move) => move.rating >= rate));
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
};
export default Rating;
