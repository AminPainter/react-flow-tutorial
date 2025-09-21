import { useContext } from "react";
import AppContext from "../contexts/app-context";

const useAppContext = () => {
  const val = useContext(AppContext);
  if (val === null)
    throw new Error(`useAppContext cannot be used outside AppProvider`);
  return val;
};

export default useAppContext;
