import React from "react";
import { Rate } from "antd";

const Rater = ({ rating }) => {
  return (
    <span>
      <Rate rating={rating} disabled value={rating} />
    </span>
  );
};

export default Rater;
