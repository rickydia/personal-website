import { Theme, THEME_VALUES } from "~/theme";

export const isValidTheme = (theme: any): theme is Theme => {
  return THEME_VALUES.includes(theme);
};
