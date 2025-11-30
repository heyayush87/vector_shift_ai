import { useState } from "react";
import BaseNode from "./BaseNode";

export const DelayNode = ({ id }) => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const handleDelay = () => {
    setOutput("Waiting...");
    setTimeout(() => setOutput(value), 2000);
  };

  return (
    <BaseNode id={id} label="Delay" description="Delays execution">
      <input
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleDelay} style={btn}>
        Delay 2s
      </button>
      <div style={outputStyle}>Output: {output}</div>
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

const btn = {
  fontSize: 12,
  padding: 4,
  marginTop: 4,
};

const outputStyle = {
  marginTop: 6,
  fontSize: 12,
};
