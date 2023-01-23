import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.scss";
import { NANewsFeed } from "../components/NANewsFeed/NANewsFeed";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="home-content" scrollY={false} fullscreen>
        <IonHeader
          className="home-header ion-vertical-padding"
          collapse="condense"
        >
          <IonToolbar className="home-toolbar">
            <IonTitle
              className="home-title na-h1 primary ion-no-padding ion-text-start"
              slot="start"
            >
              On World News
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="home-content-main">
          <NANewsFeed />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
