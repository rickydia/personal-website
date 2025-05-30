import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import css from "./styles.module.css";
import { ThemeContext, Theme, THEME_LINK_ID } from "./theme";
import { useEffect } from "react";
import { isValidTheme } from "./utils/isValidTheme";

export const links: Route.LinksFunction = () => [
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
  { rel: "stylesheet", href: "/themes/dark.css", id: THEME_LINK_ID },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <SpeedInsights />
      </head>
      <body className={css.body}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const setTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    const themeLink = document.getElementById(THEME_LINK_ID);
    if (themeLink) {
      themeLink.setAttribute("href", `/themes/${theme}.css`);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && isValidTheme(storedTheme)) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: Theme.DARK, setTheme }}>
      <Outlet />
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
    <main className={css.main}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className={css.stack}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
