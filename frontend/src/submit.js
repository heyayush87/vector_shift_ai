
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
    setResult(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/pipelines/parse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(" Failed to submit pipeline. Check backend or network.");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "10px 20px",
          borderRadius: 999,
          border: "none",
          background: "#22c55e",
          color: "#022c22",
          fontWeight: 600,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

     
    {result && (
  <div
    style={{
      position: "fixed",
      top: "10px",
      right: "10px",
      zIndex: 9999,
      background: "#0f172a",
      color: "white",
      padding: "15px 20px",
      borderRadius: "10px",
      minWidth: "220px",
      boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
    }}
  >
    <h4 style={{ marginTop: 0 }}> Result</h4>
    <p><b>Nodes:</b> {result.num_nodes}</p>
    <p><b>Edges:</b> {result.num_edges}</p>
    <p><b>DAG:</b> {result.is_dag ? "Yes " : "No "}</p>
  </div>
)}


     
      {error && (
        <div style={{ marginTop: "10px", color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
};
