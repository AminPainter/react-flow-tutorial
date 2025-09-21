import { ReactFlowProvider } from "@xyflow/react";

import ChatFlow from "./components/chat-flow";
import Layout from "./components/layout";
import Sidebar from "./components/sidebar";
import TopBar from "./components/top-bar";
import AppProvider from "./providers/app-providers";

const App = () => {
  return (
    <ReactFlowProvider>
      <AppProvider>
        <Layout>
          <TopBar />
          <ChatFlow />
          <Sidebar />
        </Layout>
      </AppProvider>
    </ReactFlowProvider>
  );
};

export default App;
