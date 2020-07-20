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
import './Home.css';

const Home: React.FC = () => {

  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PlateTrader</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={fastFoodOutline} slot="start"/>
          Sign Up
        </IonButton>
        <IonToast isOpen={showToast} message="popping up!"></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Home;
