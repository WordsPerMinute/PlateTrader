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
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { fastFoodOutline, restaurantOutline, pizzaOutline } from 'ionicons/icons';
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
        {/* <IonToolbar className="test">
          <div className="title-container">
            <img src="/assets/logo/logo_100.png" alt="PlaterTrader logo"/>
            <h1>PlateTrader</h1>
          </div>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="background">
        <IonContent className="main">
          <IonGrid>
            <IonRow>
              <IonCol className="subtitle-container">
                <IonText color="light" className="ion-text-center logo-subtitle-container">
                  <img src="/assets/logo/logo_100.png" alt="PlaterTrader logo"/> 
                  <h2>PlateTrader</h2>
                </IonText>
                <div className="break"></div>
                <IonText color="light">
                  <p>The app for restaurant workers and owners to trade meals with people working at other establishments</p>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="demo-container">
                <img src="/assets/PlateTrader_in_action.png" className="demo-photo" alt=""/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="buttons-container ion-justify-content-center">
                <IonButton onClick={handleClick}>
                  <IonIcon icon={restaurantOutline} slot="start"/>
                  Sign Up
                </IonButton>
                <IonButton onClick={handleClick}>
                  <IonIcon icon={fastFoodOutline} slot="start"/>
                  Sign In
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        <IonToast isOpen={showToast} message="Coming soon!"></IonToast>
        </IonContent>
      </IonContent>
      {/* <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter> */}
    </IonPage>
  );
};

export default Home;
