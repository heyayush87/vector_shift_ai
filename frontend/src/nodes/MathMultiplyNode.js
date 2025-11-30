import { useState } from "react";
import BaseNode from "./BaseNode";

export const MathMultiplyNode = ({ id }) => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const product = Number(a || 0) * Number(b || 0);

  return (
    <BaseNode id={id} label="Math Multiply" description="Multiplies numbers">
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
      <div style={outputStyle}>Product = {product}</div>
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
