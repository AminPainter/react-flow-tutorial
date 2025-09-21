import React, { useRef, useState, type FC } from "react";
import { type XYPosition } from "@xyflow/react";

import type { TMessageNodeType } from "../types/app-types";
import { useDraggable } from "@neodrag/react";

interface MessageTypeButtonProps {
  displayText: string;
  nodeType: TMessageNodeType;
  onDrop: (nodeType: TMessageNodeType, position: XYPosition) => void;
}

const MessageTypeButton: FC<MessageTypeButtonProps> = ({
  displayText,
  onDrop,
  nodeType,
}) => {
  const draggableRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<XYPosition>({ x: 0, y: 0 });

  useDraggable(draggableRef as React.RefObject<HTMLDivElement>, {
    position: position,
    onDrag: ({ offsetX, offsetY }) => {
      setPosition({
        x: offsetX,
        y: offsetY,
      });
    },
    onDragEnd: ({ event }) => {
      setPosition({ x: 0, y: 0 });
      onDrop(nodeType, {
        x: event.clientX,
        y: event.clientY,
      });
    },
  });

  return (
    <div
      ref={draggableRef}
      style={{
        border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem 2rem",
        textTransform: "capitalize",
        backgroundColor: "transparent",
        borderRadius: "4px",
      }}
    >
      <div>icon</div>
      <div>{displayText}</div>
    </div>
  );
};

export default MessageTypeButton;
