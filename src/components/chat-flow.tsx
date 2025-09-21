import { type FC, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type NodeChange,
  type EdgeChange,
  type Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import useAppContext from "../hooks/use-app-context";
import type { TMessageEdge, TMessageNode } from "../types/app-types";
import TextMessageNode from "./message-nodes/text-message-node";

const ChatFlow: FC = () => {
  const {
    messageEdges,
    messageNodes,
    setMessageNodes,
    setMessageEdges,
    setSelectedMessageNodeId,
  } = useAppContext();

  const onNodesChange = useCallback(
    (changes: NodeChange<TMessageNode>[]) =>
      setMessageNodes((nodesSnapshot) =>
        applyNodeChanges(changes, nodesSnapshot)
      ),
    [setMessageNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<TMessageEdge>[]) =>
      setMessageEdges((edgesSnapshot) =>
        applyEdgeChanges(changes, edgesSnapshot)
      ),
    [setMessageEdges]
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setMessageEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [setMessageEdges]
  );

  const onNodeClick = useCallback(
    (_event: React.MouseEvent<Element, MouseEvent>, node: TMessageNode) => {
      setSelectedMessageNodeId(node.id);
    },
    [setSelectedMessageNodeId]
  );

  return (
    <div
      style={{
        borderRight: "1px solid #eee",
      }}
    >
      <ReactFlow
        nodeTypes={{ textMessage: TextMessageNode }}
        nodes={messageNodes}
        edges={messageEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
};

export default ChatFlow;
