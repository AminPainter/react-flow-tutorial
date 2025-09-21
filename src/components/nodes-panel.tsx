import { useCallback, type FC } from "react";
import messageTypes from "../constants/message-types";
import MessageTypeButton from "./message-type-button";
import useAppContext from "../hooks/use-app-context";
import { useReactFlow, type XYPosition } from "@xyflow/react";

const NodesPanel: FC = () => {
  const { setMessageNodes } = useAppContext();
  const { screenToFlowPosition } = useReactFlow();

  const handleNodeDrop = useCallback(
    (nodeType: string, screenPosition: XYPosition) => {
      const flow = document.querySelector(".react-flow");
      if (!flow) throw new Error("No flow found");

      const flowRect = flow.getBoundingClientRect();
      const isInFlow =
        flowRect &&
        screenPosition.x >= flowRect.left &&
        screenPosition.x <= flowRect.right &&
        screenPosition.y >= flowRect.top &&
        screenPosition.y <= flowRect.bottom;
      if (!isInFlow) return;

      const position = screenToFlowPosition(screenPosition);

      setMessageNodes((nodes) =>
        nodes.concat({
          id: Math.random().toString(),
          type: nodeType,
          position,
          data: { label: `${nodeType} node (click me to customize my text)` },
        })
      );
    },
    [setMessageNodes, screenToFlowPosition]
  );

  return (
    <div>
      <h3
        style={{
          borderBottom: "1px solid #eee",
          padding: "1rem",
          textTransform: "capitalize",
        }}
      >
        nodes panel
      </h3>

      <div style={{ padding: "1rem" }}>
        {messageTypes.map((messageType) => (
          <MessageTypeButton
            key={messageType.id}
            displayText={messageType.displayName}
            nodeType={messageType.id}
            onDrop={handleNodeDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default NodesPanel;
