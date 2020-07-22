import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonIcon, 
  IonToast, 
  IonFooter,
  IonText,
} from '@ionic/react';
import { fastFoodOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';

const Home: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500)
  };

  return (
    <IonPage className="page-container">
      <IonHeader>
        <IonToolbar className="test">
          <div className="title-container">
            <img src="/assets/logo/logo_100.png" alt="PlaterTrader logo"/>
            <h1>PlateTrader</h1>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background">
        <IonContent className="ion-padding main">
          <IonText color="light">
            <h1>Welcome to PlateTrader</h1>
          </IonText>
          <IonText color="light">
            <p>PlateTrader...</p>
          </IonText>
          <IonButton onClick={handleClick}>
            <IonIcon icon={fastFoodOutline} slot="start"/>
            Sign Up
          </IonButton>
          <IonToast isOpen={showToast} message="popping up!"></IonToast>
        </IonContent>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
