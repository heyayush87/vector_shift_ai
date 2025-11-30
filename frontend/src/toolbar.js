import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={styles.container}>

      <Section title="Core Nodes">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="customOutput" label="Output" />
      </Section>

      <Section title="Custom Nodes">
        <DraggableNode type="mathAdd" label="Math Add" />
        <DraggableNode type="mathMultiply" label="Multiply" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="textAnalyzer" label="Analyzer" />
      </Section>

    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={styles.sectionTitle}>{title}</div>
    <div style={styles.group}>{children}</div>
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: "#9ca3af",
    marginBottom: 6,
  },

  group: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
};
