import { useState } from "react";
import BaseNode from "./BaseNode";

export const MathAddNode = ({ id }) => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const sum = Number(a || 0) + Number(b || 0);

  return (
    <BaseNode id={id} label="Math Add" description="Adds two numbers">

      <input
        placeholder="A"
        value={a}
        onChange={(e) => setA(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="B"
        value={b}
        onChange={(e) => setB(e.target.value)}
        style={inputStyle}
      />

      <div style={outputStyle}>Sum = {sum}</div>

    </BaseNode>
  );
};

const inputStyle = {
  width: "100%",
  marginBottom: 6,
  padding: 4,
  borderRadius: 6,
  border: "1px solid #374151",
  background: "#020617",
  color: "#e5e7eb",
  fontSize: 12,
};

const outputStyle = {
  marginTop: 6,
  fontSize: 12,
};
