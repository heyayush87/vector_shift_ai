import { useState } from "react";
import BaseNode from "./BaseNode";

export const TextAnalyzerNode = ({ id }) => {
  const [value, setValue] = useState("");

  const cleaned = value.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = value.split("").reverse().join("");

  const vowels = (cleaned.match(/[aeiou]/g) || []).length;
  const consonants = cleaned.length - vowels;

  return (
    <BaseNode id={id} label="Text Analyzer" description="Analyzes sentence">
      <input
        placeholder="Enter a sentence"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle}
      />

      <div style={outputStyle}>
        <div><b>Reversed:</b> {reversed}</div>
        <div><b>Vowels:</b> {vowels}</div>
        <div><b>Consonants:</b> {consonants}</div>
      </div>
    </BaseNode>
  );
};



// ------------------
// STYLES
// ------------------
const inputStyle = {
  width: "100%",
  marginBottom: 6,
  fontSize: 12,
  padding: "4px",
  borderRadius: 6,
};

const outputStyle = {
  marginTop: 6,
  fontSize: 12,
};
