import { useState, type FC, type ReactNode } from "react";

import AppContext from "../contexts/app-context";
import type { TMessageEdge, TMessageNode } from "../types/app-types";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [messageNodes, setMessageNodes] = useState<TMessageNode[]>([]);
  const [messageEdges, setMessageEdges] = useState<TMessageEdge[]>([]);
  const [selectedMessageNodeId, setSelectedMessageNodeId] = useState<
    string | null
  >(null);

  const isFlowValid = (() => {
    if (messageNodes.length <= 1) return true;

    const nodesWithoutTarget = messageNodes.filter((node) => {
      const incomingEdges = messageEdges.filter(
        (edge) => edge.target === node.id
      );
      return incomingEdges.length === 0;
    });

    // Allow exactly one root node (node without target)
    return nodesWithoutTarget.length === 1;
  })();

  return (
    <AppContext.Provider
      value={{
        messageNodes,
        setMessageNodes,
        messageEdges,
        setMessageEdges,
        selectedMessageNodeId,
        setSelectedMessageNodeId,
        isFlowValid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
