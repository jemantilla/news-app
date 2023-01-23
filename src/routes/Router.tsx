import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRoute, IonRouterOutlet } from "@ionic/react";

import Home from "../pages/Home";

export const RouterComponent = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <IonRoute exact path="/" render={(props: any) => <Home {...props} />} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
