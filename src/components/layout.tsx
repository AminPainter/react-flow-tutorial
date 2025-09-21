import { type FC, type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        height: "100dvh",
        display: "grid",
        gridTemplateColumns: "1fr 20vw",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
