import css from "./Typography.module.css";

export function Typography({ children }: { children: React.ReactNode }) {
  return <span className={css.typography}>{children}</span>;
}
