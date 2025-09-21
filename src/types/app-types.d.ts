import type { Node, Edge } from "@xyflow/react";
import type { Dispatch, SetStateAction } from "react";

export type TMessageNodeData = { label: string };

export type TMessageNodeType = "textMessage";

export type TMessageNode = Node<TMessageNodeData>;

export type TMessageEdge = Edge;

export type TAppContext = {
  messageNodes: TMessageNode[];
  setMessageNodes: Dispatch<SetStateAction<TMessageNode[]>>;

  messageEdges: TMessageEdge[];
  setMessageEdges: Dispatch<SetStateAction<TMessageEdge[]>>;

  selectedMessageNodeId: string | null;
  setSelectedMessageNodeId: Dispatch<SetStateAction<string | null>>;

  isFlowValid: boolean;
};
