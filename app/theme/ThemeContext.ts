import { createContext } from "react";

import { Theme } from "./types";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.DARK,
  setTheme: () => {},
});
