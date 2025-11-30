import { useState } from "react";
import BaseNode from "./BaseNode";

export const FilterNode = ({ id }) => {
  const [items, setItems] = useState("");
  const [limit, setLimit] = useState("");

  const filtered = items
    .split(",")
    .map(n => Number(n.trim()))
    .filter(n => !isNaN(n) && n > Number(limit || 0));

  return (
    <BaseNode id={id} label="Filter" description="Filters values greater than N">
      <input
        placeholder="Items (1,2,3)"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Greater than..."
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        style={inputStyle}
      />
      <div style={outputStyle}>Result: [{filtered.join(", ")}]</div>
    </BaseNode>
  );
};

const inputStyle = {
  width: "100%",
  marginBottom: 4,
  fontSize: 12,
  padding: "4px",
  borderRadius: 6,
};

const outputStyle = {
  marginTop: 6,
  fontSize: 12,
};
