import React, { type FC } from "react";

import useAppContext from "../../hooks/use-app-context";

const EditField: FC = () => {
  const { selectedMessageNodeId, setMessageNodes, messageNodes } =
    useAppContext();

  const selectedMessageNode = messageNodes.find(
    (node) => node.id === selectedMessageNodeId
  );

  if (!selectedMessageNode) throw new Error("No node selected");

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const updatedMessageNodes = messageNodes.map((node) => {
      if (node.id === selectedMessageNode.id)
        return {
          ...selectedMessageNode,
          data: {
            ...selectedMessageNode.data,
            label: event.target.value,
          },
        };

      return node;
    });

    setMessageNodes(updatedMessageNodes);
  };

  return (
    <textarea value={selectedMessageNode.data.label} onChange={handleChange} />
  );
};

export default EditField;
