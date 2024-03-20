import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"hbc-logistic","appId":"1:631150757208:web:0ba4f084457964dcf3112d","storageBucket":"hbc-logistic.appspot.com","apiKey":"AIzaSyAthf5EPIB3vCz2f89AAbriR2ABNcZP-44","authDomain":"hbc-logistic.firebaseapp.com","messagingSenderId":"631150757208"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
