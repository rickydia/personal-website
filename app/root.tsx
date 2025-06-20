import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState, useCallback } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { Footer, NavMenu } from "~/components";
import type { Route } from "./+types/root";
import {
  getThemeScript,
  Theme,
  ThemeContext,
  THEME_LOCAL_STORAGE_KEY,
} from "./theme";
import { isValidTheme } from "./utils/isValidTheme";

export const links: Route.LinksFunction = () => [
  /*
   * Gets the fonts from Google Fonts
   */
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  /*
   * Gets the theme from the theme.css file
   */
  { rel: "stylesheet", href: "/themes/theme.css" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    /*
     * Suppresses the EXPECTED hydration warnings.
     *
     * This is because we store which theme the user has selected in their
     * localStorage. Since this is a client-side only state, we need to suppress
     * the hydration warnings since the theme is set after the initial render.
     */
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*
         * Sets the theme based on the user's preference or the theme they have
         * selected in their localStorage.
         */}
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
        <Meta />
        <Links />
        <SpeedInsights />
        <Analytics />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  /*
   * Sets the default theme based firstly on the theme they have selected in
   * their localStorage, and secondly on the user's preference.
   */
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return Theme.DARK;
    }
    const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    if (storedTheme && isValidTheme(storedTheme)) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? Theme.LIGHT
      : Theme.DARK;
  });

  /*
   * Sets the theme to the new theme and updates the localStorage and the
   * data-theme attribute on the html element.
   */
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
      document.documentElement.setAttribute(
        "data-theme",
        newTheme.toLowerCase()
      );
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
