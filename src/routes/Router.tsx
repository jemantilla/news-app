import { IonModal, IonRoute, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import _ from "lodash";
// import { getSessionAuthUser } from "../functions/auth";
// import { useEffectOnlyOnce } from "../functions/common";
import React, { useState } from "react";
import Home from "../pages/Home";

// import * as routes from "../constants/routes";
// import { useUserStore } from "../store";
// import { UnauthenticatedRoute } from "./UnauthenticatedRoute";
// import { AuthUser } from "../models/global";
import { SplashScreen } from "../components/SplashScreen/SplashScreen";

export const RouterComponent = () => {
  const [showFakeSplashScreen, setShowFakeSplashScreen] = useState(false);

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <IonRoute exact path="/" render={(props: any) => <Home {...props} />} />
      </IonRouterOutlet>
      <IonModal isOpen={showFakeSplashScreen} animated={false}>
        {/* <SplashScreen
          onDidDismiss={() => {
            setShowFakeSplashScreen(false);
          }}
        /> */}
      </IonModal>
    </IonReactRouter>
  );
};
