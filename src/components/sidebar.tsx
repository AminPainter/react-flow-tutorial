import { type FC } from 'react';
import useAppContext from '../hooks/use-app-context';
import NodesPanel from './nodes-panel';
import NodeEditor from './node-editor';

const Sidebar: FC = () => {
  const { selectedMessageNodeId } = useAppContext();

  return selectedMessageNodeId ? <NodeEditor /> : <NodesPanel />;
};

export default Sidebar;
