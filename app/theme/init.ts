import { THEME_LOCAL_STORAGE_KEY } from "./constants";

/**
 * Sets the correct theme based on the user's preference or the theme they have
 * selected in their localStorage.
 */
export function getThemeScript() {
  return `
    (function() {
      try {
        var storedTheme = localStorage.getItem("${THEME_LOCAL_STORAGE_KEY}") || "";
        var isLight = storedTheme === "light" || (!storedTheme && window.matchMedia("(prefers-color-scheme: light)").matches);
        document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
      } catch (e) {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    })();
  `;
}
