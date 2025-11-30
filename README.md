VectorShift Frontend Technical Assessment
Live Project

Frontend: https://vector-shift-ai-mauve.vercel.app/



Project Overview

Built a visual pipeline workflow builder using React

Users can drag nodes, connect edges, and validate pipelines

Real-time validation against backend logic

System determines:

Number of nodes

Number of connections

Whether the graph is a DAG

Architecture Summary
Frontend

Built with React + ReactFlow

State managed using Zustand

Pipeline logic stored centrally

Fully modular node system

Custom abstraction layer for fast node creation

Visual editor renders nodes and edges in real time

Backend

Built using FastAPI

Accepts structured JSON pipeline payloads

Returns:

Node count

Edge count

DAG validation result

Implements standard graph algorithms

Development Strategy

Instead of following tasks sequentially, a production-first workflow was used:

Backend integration validated first

Frontend ↔ backend stability ensured

Node abstraction layer created

Styling layered after logic was correct

Text handling & UI refinement added last

This mirrors real-world engineering practices.

Part 1: Node Abstraction
Objective

Avoid copy-pasting node logic

Create one reusable node base

Standardize visuals and behavior

Achievements

Introduced a shared base node wrapper

Centralized layout and design

Unified delete-button logic

Reduced duplication across node types

Rapid creation of new nodes

Outcome

Adding new nodes now takes minutes

UI consistency is guaranteed

Easier scaling

Part 2: UI & Layout Styling
Improvements

Toolbox aligned for navigation clarity

Canvas centralized as main workspace

Results displayed without scrolling

Submit button isolated

Dark theme enhances readability

Result

Clean interface

Guided user workflow

Zero visual clutter

Part 3: Text Node Enhancements
Features Implemented

Auto-expanding text node

Dynamic variable parsing

{{variable}} detection

Auto-generated input handles

Variables become graph inputs

Benefit

Enables real prompt engineering

No static text blocks

Fully customizable behavior

Part 4: Backend Integration
Workflow

Frontend sends node graph

Backend parses pipeline

Algorithm executes:

Node count

Edge count

DAG detection

Result Handling

Output displayed inline

No page reload

No alerts

Fully reactive UI

Backend Validation Algorithm

Adjacency list constructed from edges

Indegree table prepared

Kahn’s algorithm used for DAG detection

Guarantees accuracy and performance.

Performance & Reliability

DAG detection in linear time: O(N + E)

Zustand ensures minimal re-render

ReactFlow optimizations applied

Single backend call for validation

Zero unnecessary updates

Deployment Stack
Component	Platform
Frontend	Vercel
Backend	Render
State	Zustand
UI Engine	ReactFlow
API	FastAPI