import type { TMessageNodeType } from "../types/app-types";

const messageTypes = [
  {
    id: "textMessage",
    displayName: "text message",
  },
] satisfies Array<{ id: TMessageNodeType; displayName: string }>;

export default messageTypes;
