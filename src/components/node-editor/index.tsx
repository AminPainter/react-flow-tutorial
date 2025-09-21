import { type FC } from "react";

import useAppContext from "../../hooks/use-app-context";
import Header from "./header";
import EditField from "./edit-field";

const NodeEditor: FC = () => {
  const { selectedMessageNodeId, messageNodes } = useAppContext();

  const selectedMessageNode = messageNodes.find(
    (node) => node.id === selectedMessageNodeId
  );

  if (!selectedMessageNode) throw new Error("No node selected");

  return (
    <div>
      <Header />

      <div style={{ marginTop: "2rem", padding: "1rem" }}>
        <EditField />
      </div>
    </div>
  );
};

export default NodeEditor;
