import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pipelines/parse`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ nodes, edges }),
});


      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();
      alert(
        `Pipeline summary:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes " : "No "}`
      );
    } catch (err) {
      console.error(err);
      alert("Failed to submit pipeline. Check console for details.");
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: "8px 16px",
          borderRadius: 999,
          border: "none",
          background: "#22c55e",
          color: "#022c22",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};
