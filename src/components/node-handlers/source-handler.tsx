import { Handle, Position } from "@xyflow/react";
import { type FC } from "react";
import useAppContext from "../../hooks/use-app-context";

interface SourceHandlerProps {
  nodeId: string;
}

const SourceHandler: FC<SourceHandlerProps> = ({ nodeId }) => {
  const { messageEdges } = useAppContext();

  const outgoingEdges = messageEdges.filter(
    (edge) => edge.source === nodeId // && edge.sourceHandle === id
  );
  const isConnectable = outgoingEdges.length < 1;

  return (
    <Handle
      type="source"
      position={Position.Right}
      isConnectable={isConnectable}
    />
  );
};

export default SourceHandler;
