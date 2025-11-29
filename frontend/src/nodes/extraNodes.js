// nodes/extraNodes.js
import BaseNode from "./BaseNode";

export const MathAddNode = (props) => {
  const { id } = props;
  return (
    <BaseNode
      id={id}
      label="Math: Add"
      description="Adds two numbers"
      inputs={["a", "b"]}
      outputs={["sum"]}
    >
      <div style={{ fontSize: 12 }}>sum = a + b</div>
    </BaseNode>
  );
};

export const MathMultiplyNode = (props) => {
  const { id } = props;
  return (
    <BaseNode
      id={id}
      label="Math: Multiply"
      description="Multiplies two numbers"
      inputs={["a", "b"]}
      outputs={["product"]}
    >
      <div style={{ fontSize: 12 }}>product = a * b</div>
    </BaseNode>
  );
};

export const FilterNode = (props) => {
  const { id } = props;
  return (
    <BaseNode
      id={id}
      label="Filter"
      description="Filter items by condition"
      inputs={["items", "condition"]}
      outputs={["filtered"]}
    >
      <div style={{ fontSize: 12 }}>Keeps only matching items</div>
    </BaseNode>
  );
};

export const DelayNode = (props) => {
  const { id } = props;
  return (
    <BaseNode
      id={id}
      label="Delay"
      description="Delays execution"
      inputs={["input"]}
      outputs={["output"]}
    >
      <div style={{ fontSize: 12 }}>Simulates async delay</div>
    </BaseNode>
  );
};

export const LoggerNode = (props) => {
  const { id } = props;
  return (
    <BaseNode
      id={id}
      label="Logger"
      description="Logs incoming data"
      inputs={["value"]}
      outputs={[]}
    >
      <div style={{ fontSize: 12 }}>Debug logging node</div>
    </BaseNode>
  );
};
