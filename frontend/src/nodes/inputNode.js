import { useStore } from "../store";
import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleNameChange = (e) => {
    updateNodeField(id, "inputName", e.target.value);
  };

  const handleTypeChange = (e) => {
    updateNodeField(id, "inputType", e.target.value);
  };

  // ✅ FIX: allow empty input value instead of forcing default
  const currName =
    data?.inputName !== undefined
      ? data.inputName
      : id.replace("customInput-", "input_");

  const inputType =
    data?.inputType !== undefined
      ? data.inputType
      : "Text";

  return (
    <BaseNode
      id={id}
      label="Input"
      description="Pipeline input"
      outputs={["value"]}
    >
      <div style={{ marginBottom: 4 }}>
        <label style={{ fontSize: 11, color: "#9ca3af" }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{
              marginLeft: 4,
              width: "100%",
              padding: "2px 4px",
              borderRadius: 6,
              border: "1px solid #374151",
              background: "#020617",
              color: "#e5e7eb",
            }}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: 11, color: "#9ca3af" }}>
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            style={{
              marginLeft: 4,
              padding: "2px 4px",
              borderRadius: 6,
              border: "1px solid #374151",
              background: "#020617",
              color: "#e5e7eb",
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
