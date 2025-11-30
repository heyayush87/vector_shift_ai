import { Handle, Position } from "reactflow";
import { useStore } from "../store";

export default function BaseNode({
  id,
  label,
  description,
  inputs = [],
  outputs = [],
  children,
}) {
  const removeNode = useStore((s) => s.removeNode);

  return (
    <div
      style={{
        position: "relative",
        minWidth: 220,
        borderRadius: 10,
        border: "1px solid #1f2933",
        background: "#0b1120",
        color: "#e5e7eb",
        padding: "10px 12px",
        fontSize: 12,
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.5)",
      }}
    >
      {/* ❌ REMOVE BUTTON */}
      <button
        onClick={() => removeNode(id)}
        style={{
          position: "absolute",
          top: 5,
          right: 6,
          background: "transparent",
          border: "none",
          color: "#f87171",
          fontSize: 14,
          fontWeight: "bold",
          cursor: "pointer",
        }}
        title="Delete node"
      >
        ×
      </button>

      {/* HEADER */}
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

      {/* BODY */}
      <div>{children}</div>

      {/* INPUT HANDLES */}
      {inputs.map((name, i) => (
        <Handle
          key={name}
          type="target"
          position={Position.Left}
          id={`${id}-${name}`}
          style={{
            top: 50 + i * 18,
            width: 10,
            height: 10,
            background: "#22c55e",
          }}
        />
      ))}

      {/* OUTPUT HANDLES */}
      {outputs.map((name, i) => (
        <Handle
          key={name}
          type="source"
          position={Position.Right}
          id={`${id}-${name}`}
          style={{
            top: 50 + i * 18,
            width: 10,
            height: 10,
            background: "#3b82f6",
          }}
        />
      ))}
    </div>
  );
}
