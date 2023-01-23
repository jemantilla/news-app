import {
  createAnimation,
  IonButton,
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
} from "@ionic/react";
import React from "react";
import { useEffectOnlyOnce } from "../../functions/common";

import "./SplashScreen.scss";
import leftHeart from "../../assets/left-heart.png";
import rightHeart from "../../assets/right-heart.png";
import nameLogo from "../../assets/pintig-pinas-white-red.png";
import { NAButton } from "../NAButton/NAButton";

interface SplashScreenProps {
  onDidDismiss: () => void;
}
export const SplashScreen = (props: SplashScreenProps) => {
  const { onDidDismiss } = props;
  const init = () => {
    setTimeout(() => {
      onDidDismiss();
    }, 4000);
  };

  const triggerAnimation = async () => {
    const leftHeartAnimation1 = createAnimation()
      .addElement(document.querySelector(".splash-heart-left-logo")!)
      .duration(750)
      .iterations(1)
      .easing("ease")
      .fromTo("transform", "translateX(0)", "translateX(-120%)");

    const rightHeartAnimation1 = createAnimation()
      .addElement(document.querySelector(".splash-heart-right-logo")!)
      .duration(750)
      .iterations(1)
      .easing("ease")
      .fromTo("transform", "translateX(0)", "translateX(120%)");

    const nameAnimation1 = createAnimation()
      .addElement(document.querySelector(".splash-heart-name-logo")!)
      .duration(750)
      .delay(250)
      .iterations(1)
      .easing("ease")
      .fromTo("opacity", "0", "1")
      .fromTo("transform", "translateY(0)", "translateY(250%)");

    const initialAnimation = createAnimation().addAnimation([
      leftHeartAnimation1,
      rightHeartAnimation1,
      nameAnimation1,
    ]);

    await initialAnimation.play();
    // await nameAnimation1.play();

    const leftHeartAnimation2 = createAnimation()
      .addElement(document.querySelector(".splash-heart-left-logo")!)
      .duration(250)
      .iterations(1)
      .easing("ease")
      .fromTo("transform", "translateX(-100%)", "translateX(0)");

    const rightHeartAnimation2 = createAnimation()
      .addElement(document.querySelector(".splash-heart-right-logo")!)
      .duration(250)
      .iterations(1)
      .easing("ease")
      .fromTo("transform", "translateX(100%)", "translateX(0)");

    const finalAnimation = createAnimation().addAnimation([
      leftHeartAnimation2,
      rightHeartAnimation2,
    ]);

    finalAnimation.play();

    // await nameAnimation1.play();

    // const containerHeartAnimation = createAnimation()
    //   .addElement(document.querySelector(".splash-heart-container")!)
    //   .duration(500)
    //   .iterations(1)
    //   .fromTo("justify", "space-between", "center");

    // containerHeartAnimation.play();
  };

  useEffectOnlyOnce(() => {
    setTimeout(() => {
      triggerAnimation();
    }, 500);
    init();
  });
  return (
    <IonPage className="splash-screen-page">
      <div className="splash-bg" />
      <IonContent className="splash-screen-content" scrollY={false}>
        <div className="splash-screen-main ion-padding">
          <div className="splash-heart-container">
            <IonImg className="splash-heart-left-logo" src={leftHeart} />
            <IonImg className="splash-heart-right-logo" src={rightHeart} />
            <IonImg className="splash-heart-name-logo" src={nameLogo} />
          </div>
          <NAButton onClick={onDidDismiss} className="bold">
            Get Started
          </NAButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
