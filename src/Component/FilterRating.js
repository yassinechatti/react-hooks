import { Rate } from "antd";
import React from "react";

const Rating = ({ value, setValue }) => {
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
};
export default Rating;
