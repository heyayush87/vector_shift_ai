// nodes/BaseNode.js
import { Handle, Position } from "reactflow";

export default function BaseNode({
  id,
  label,
  description,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        minWidth: 220,
        borderRadius: 10,
        border: "1px solid #1f2933",
        background: "#0b1120",
        color: "#e5e7eb",
        padding: "8px 10px",
        fontSize: 12,
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.5)",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #1f2933",
          paddingBottom: 4,
          marginBottom: 6,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 600 }}>{label}</div>
        {description && (
          <div style={{ fontSize: 11, color: "#9ca3af" }}>{description}</div>
        )}
      </div>

      <div>{children}</div>

      {/* Inputs on left */}
      {inputs.map((name, i) => (
        <Handle
          key={name}
          type="target"
          position={Position.Left}
          id={`${id}-${name}`}
          style={{
            top: 40 + i * 18,
            width: 10,
            height: 10,
            background: "#22c55e",
          }}
        />
      ))}

      {/* Outputs on right */}
      {outputs.map((name, i) => (
        <Handle
          key={name}
          type="source"
          position={Position.Right}
          id={`${id}-${name}`}
          style={{
            top: 40 + i * 18,
            width: 10,
            height: 10,
            background: "#3b82f6",
          }}
        />
      ))}
    </div>
  );
}
