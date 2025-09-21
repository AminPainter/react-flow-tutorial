import { type FC } from "react";

import useAppContext from "../../hooks/use-app-context";

const Header: FC = () => {
  const { setSelectedMessageNodeId } = useAppContext();

  const handleBackButtonClick = () => {
    setSelectedMessageNodeId(null);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        padding: "1rem",
        textTransform: "capitalize",
      }}
    >
      <button
        onClick={handleBackButtonClick}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <h3 style={{ flexGrow: 1, textAlign: "center" }}>Message</h3>
    </div>
  );
};

export default Header;
