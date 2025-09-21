import { type ComponentType } from "react";
import { type NodeProps } from "@xyflow/react";

import type { TMessageNodeData } from "../../types/app-types";
import SourceHandler from "../node-handlers/source-handler";
import DestinationHandler from "../node-handlers/destination-handler";

const TextMessageNode: ComponentType<
  NodeProps & {
    data: TMessageNodeData;
  }
> = (props) => {
  return (
    <div style={{ minWidth: "8rem" }}>
      <h6 style={{ backgroundColor: "turquoise", padding: "3px 6px" }}>
        Send message
      </h6>

      <div style={{ backgroundColor: "#f5f5f5", padding: "3px 6px" }}>
        <p style={{ fontSize: ".5rem" }}>{props.data.label}</p>
      </div>

      <DestinationHandler nodeId={props.id} />
      <SourceHandler nodeId={props.id} />
    </div>
  );
};

export default TextMessageNode;
