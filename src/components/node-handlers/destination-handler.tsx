import { Handle, Position } from "@xyflow/react";
import { type FC } from "react";

interface DestinationHandlerProps {
  nodeId: string;
}

const DestinationHandler: FC<DestinationHandlerProps> = () => {
  return <Handle type="target" position={Position.Left} />;
};

export default DestinationHandler;
