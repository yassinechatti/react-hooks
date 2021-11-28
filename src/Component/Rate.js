import React, { useState } from "react";
import { Rate } from "antd";

const Rater = ({ rating }) => {
  const [value, setValue] = useState(2);

  return (
    <span>
      <Rate rating={rating} disabled value={rating} />
    </span>
  );
};

export default Rater;
