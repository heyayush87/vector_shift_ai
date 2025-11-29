from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict
from collections import deque

app = FastAPI()

# Allow frontend on localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    type: Optional[str] = None
    data: Optional[Dict] = None
    position: Optional[Dict] = None


class Edge(BaseModel):
    id: Optional[str] = None
    source: str
    target: str
    sourceHandle: Optional[str] = None
    targetHandle: Optional[str] = None


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    node_ids = [n.id for n in pipeline.nodes]
    adj = {nid: [] for nid in node_ids}
    indegree = {nid: 0 for nid in node_ids}

    for e in pipeline.edges:
        if e.source in adj and e.target in adj:
            adj[e.source].append(e.target)
            indegree[e.target] += 1

    # Kahn's algorithm for DAG detection
    q = deque([nid for nid, d in indegree.items() if d == 0])
    visited = 0

    while q:
      u = q.popleft()
      visited += 1
      for v in adj[u]:
        indegree[v] -= 1
        if indegree[v] == 0:
          q.append(v)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
