import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="LLM"
      description="Language model call"
      inputs={["system", "prompt"]}
      outputs={["response"]}
    >
      <div style={{ fontSize: 11, color: "#9ca3af" }}>
        Takes system + prompt, outputs response.
      </div>
    </BaseNode>
  );
};
