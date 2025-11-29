import { useEffect, useMemo, useRef } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../store";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);
  const textareaRef = useRef(null);

  const text = data?.text ?? "{{input}}";

  // Auto-resize
  useEffect(() => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    el.style.height = "0px";
    el.style.height = el.scrollHeight + "px";
  }, [text]);

  // Extract {{variable}} names
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
    const set = new Set();
    let m;
    while ((m = regex.exec(text)) !== null) {
      set.add(m[1]);
    }
    return Array.from(set);
  }, [text]);

  const handleChange = (e) => {
    updateNodeField(id, "text", e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Text"
      description="Template with variables"
      outputs={["output"]}
    >
      {/* Dynamic input handles for each {{var}} */}
      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            top: 60 + i * 18,
            width: 10,
            height: 10,
            background: "#facc15",
          }}
        />
      ))}

      <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 2 }}>
        Text:
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        rows={1}
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden",
          padding: "3px 5px",
          borderRadius: 6,
          border: "1px solid #374151",
          background: "#020617",
          color: "#e5e7eb",
          fontSize: 12,
        }}
      />
      {variables.length > 0 && (
        <div style={{ marginTop: 4, fontSize: 11, color: "#9ca3af" }}>
          Variables: {variables.join(", ")}
        </div>
      )}
    </BaseNode>
  );
};
