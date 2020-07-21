import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonIcon, 
  IonToast 
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
        <IonToolbar>
          <IonTitle>PlateTrader</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background">

      <IonContent className="ion-padding main">
        <IonButton onClick={handleClick}>
          <IonIcon icon={fastFoodOutline} slot="start"/>
          Sign Up
        </IonButton>
        <IonToast isOpen={showToast} message="popping up!"></IonToast>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
