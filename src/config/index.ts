export type NAColorKeys =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger"
  | "dark"
  | "medium"
  | "light"
  | "disabled";

export const NACOLORS = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  success: "success",
  warning: "warning",
  danger: "danger",
  dark: "dark",
  medium: "medium",
  light: "light",
  disabled: "disabled",
} satisfies {
  [key: string]: NAColorKeys;
};
