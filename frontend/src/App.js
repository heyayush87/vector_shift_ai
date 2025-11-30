import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

export default function App() {
  return (
    <div style={styles.app}>

      {/* LEFT TOOLBOX */}
      <div style={styles.sidebar}>
        <h3 style={styles.title}>Node Toolbox</h3>
        <PipelineToolbar />
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.main}>

        {/* CANVAS */}
        <div style={styles.canvas}>
          <PipelineUI />
        </div>

        {/* BOTTOM PANEL */}
        <div style={styles.bottom}>
          <SubmitButton />
        </div>

      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "#020617",
    color: "#e5e7eb",
  },

  sidebar: {
    width: 240,
    padding: 12,
    background: "#020617",
    borderRight: "1px solid #1f2937",
    overflowY: "auto",
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    color: "#9ca3af",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  canvas: {
    flex: 1,
  },

  bottom: {
    borderTop: "1px solid #1f2937",
    padding: 10,
    background: "#020617",
  },
};
