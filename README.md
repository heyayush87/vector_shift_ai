VectorShift Frontend Technical Assessment
Live Project

Frontend: https://vector-shift-ai-mauve.vercel.app/



Project Overview


Part 1 – Node Abstraction & Design System

In Part 1, I focused on creating a reusable and scalable node architecture instead of hardcoding logic into individual components. I implemented a BaseNode component that acts as a UI wrapper for all nodes, providing consistent layout, headers, styling, input/output handles, and delete functionality. This abstraction removed duplication and allowed every node (Input, LLM, Text, Output, Math, Filter, etc.) to share the same structural behavior while implementing their own local logic. As a result, adding a new node became trivial and required only a standalone logic component, improving maintainability and extensibility of the system.

Part 2 – UI & Layout Improvements

For Part 2, I focused on improving the overall user experience and layout design to make the system usable as a real workflow builder. I designed a toolbar that displays available nodes, a central canvas for building pipelines using ReactFlow, and a results panel that shows validation output without navigation or scrolling. I applied a dark theme with consistent spacing, visual hierarchy, and clearly visible handles to improve usability. The layout was optimized so all critical actions—adding nodes, connecting edges, and submitting—can be performed on a single screen with no visual clutter.

Part 3 – Text Node Enhancements

Part 3 was focused on making the Text Node dynamic and intelligent. I implemented auto-resizing behavior so the node expands as the user types, enabling multi-line input. I also added template parsing to detect variables written in the format {{variable}}, and for each detected variable, a dynamic input handle is created automatically. This allows variables to be connected to other nodes, making the pipeline functional rather than static. This feature transforms the UI from a visual editor into a real pipeline configuration tool.

Part 4 – Backend Integration & DAG Validation

For Part 4, I connected the frontend to a FastAPI backend where the entire pipeline is sent for validation. When the user clicks submit, all nodes and edges are serialized and transmitted to the API. The backend constructs a graph using an adjacency list and applies Kahn’s Algorithm to calculate whether the graph is a Directed Acyclic Graph (DAG). It also returns the total number of nodes and edges. The frontend then displays these results instantly within the UI. This integration adds real computation to the project and demonstrates full-stack interaction rather than a static frontend-only solution.