import { createContext } from "react";

import type { TAppContext } from "../types/app-types";

const AppContext = createContext<TAppContext | null>(null);

export default AppContext;
