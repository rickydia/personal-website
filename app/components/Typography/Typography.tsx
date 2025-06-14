import React from "react";
import css from "./styles.module.css";

export enum TypographyVariant {
  DEFAULT = "default",
  DEFAULT_BOLD = "default-bold",
  HEADING = "heading",
  SUBHEADING = "subheading",
}

export enum TypographyElement {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SPAN = "span",
  DIV = "div",
  STRONG = "strong",
  EM = "em",
  SMALL = "small",
  LABEL = "label",
}

interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  element?: TypographyElement;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  role?: string;
}

// Map variants to their default semantic elements
const variantElementMap: Record<TypographyVariant, TypographyElement> = {
  [TypographyVariant.DEFAULT]: TypographyElement.P,
  [TypographyVariant.DEFAULT_BOLD]: TypographyElement.STRONG,
  [TypographyVariant.HEADING]: TypographyElement.H1,
  [TypographyVariant.SUBHEADING]: TypographyElement.H2,
};

export function Typography({
  children,
  variant = TypographyVariant.DEFAULT,
  element,
  className = "",
  id,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
  role,
  ...props
}: TypographyProps) {
  // Use provided element or fall back to semantic default for variant
  const Component = element || variantElementMap[variant];

  const classes = [css.typography, css[`variant-${variant}`], className]
    .filter(Boolean)
    .join(" ");

  const elementProps = {
    className: classes,
    id,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    role,
    ...props,
  };

  return React.createElement(Component, elementProps, children);
}
