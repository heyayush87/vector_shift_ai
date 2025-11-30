import { useStore } from "./store";
import { useState } from "react";

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/pipelines/parse`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await response.json();
      setResult(data);
    } catch {
      setError("Backend unreachable");
    }

    setLoading(false);
  };

  return (
    <div style={container}>

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={button}
      >
        {loading ? "Analyzing..." : "Submit Pipeline"}
      </button>

      {result && (
        <div style={resultBox}>
          <b>Nodes:</b> {result.num_nodes}<br />
          <b>Edges:</b> {result.num_edges}<br />
          <b>DAG:</b> {result.is_dag ? "Yes ✅" : "No ❌"}
        </div>
      )}

      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
};

const container = {
  display: "flex",
  alignItems: "center",
  gap: 15,
};

const button = {
  padding: "10px 20px",
  borderRadius: 999,
  border: "none",
  background: "#22c55e",
  color: "#022c22",
  fontWeight: 600,
  cursor: "pointer",
};

const resultBox = {
  border: "1px solid #1f2937",
  borderRadius: 10,
  background: "#0f172a",
  padding: "8px 14px",
  fontSize: 13,
  color: "#e5e7eb",
};

const errorStyle = {
  marginLeft: 10,
  color: "#f87171",
};
