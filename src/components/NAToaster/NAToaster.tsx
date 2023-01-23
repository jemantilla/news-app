import React from "react";
import { IonToast } from "@ionic/react";

import "./NAToaster.scss";

interface NAToasterProps {
  isOpen: boolean;
  message: string;
  duration: number;
  onDidDismiss: () => void;
  color: string;
}
export const NAToaster = (props: NAToasterProps) => {
  const { isOpen, message, duration, onDidDismiss, color } = props;

  return (
    <IonToast
      isOpen={isOpen}
      message={message}
      color={color}
      duration={duration}
      onDidDismiss={onDidDismiss}
      cssClass="ca-toaster"
    />
  );
};
