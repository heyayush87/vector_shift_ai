import { useStore } from "../store";
import BaseNode from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleNameChange = (e) => {
    updateNodeField(id, "outputName", e.target.value);
  };

  const handleTypeChange = (e) => {
    updateNodeField(id, "outputType", e.target.value);
  };

  const currName =
    data?.outputName || id.replace("customOutput-", "output_");
  const outputType = data?.outputType || "Text";

  return (
    <BaseNode
      id={id}
      label="Output"
      description="Pipeline output"
      inputs={["value"]}
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
            value={outputType}
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
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
