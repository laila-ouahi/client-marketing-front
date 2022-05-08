import React from "react";
import { Radio } from "antd";

export default ({ onChange, error, value, items }) => {
  return (
    <div>
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {items.map((item, index) => (
          <Radio style={{padding: 5}} key={index} value={item}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
      {error && <div className="errors">{error}</div>}
    </div>
  );
};
