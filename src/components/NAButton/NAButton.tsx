import { IonButton } from "@ionic/react";
import React from "react";
import { NAColorKeys, NACOLORS } from "../../config";

import "./NAButton.scss";

interface NAButtonProps {
  children: any;
  color?: NAColorKeys;
  size?: "large" | "small" | "medium"; // default large
  className?: string;
  routerLink?: string;
  type?: "submit" | "reset" | "button";
  fill?: "clear" | "outline" | "solid" | "default";
  disabled?: boolean;
  onClick?: () => void;
}

export const NAButton = (props: NAButtonProps) => {
  const {
    children,
    color,
    size,
    className,
    routerLink,
    type,
    fill,
    disabled,
    onClick,
  } = props;
  return (
    <IonButton
      shape="round"
      className={`na-button ${!!size ? size : ""} na-h4 white bold ${
        !!className ? className : ""
      }`}
      {...(!!color && {
        color: NACOLORS[color],
      })}
      {...(!!fill && {
        fill,
      })}
      {...(!!routerLink && {
        routerLink,
      })}
      {...(!!type && {
        type,
      })}
      {...(!!onClick && {
        onClick,
      })}
      {...(!!disabled && {
        disabled,
      })}
    >
      {children}
    </IonButton>
  );
};
