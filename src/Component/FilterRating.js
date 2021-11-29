import { Rate } from "antd";
import React from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ value, setValue }) => {
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
};
export default Rating;
