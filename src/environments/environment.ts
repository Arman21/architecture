import { ApiEndpoints } from './../app/models/apiEndpoint';
import { PageUrls } from './../app/models/pageUrls';
import { firebaseConfig } from './../app/models/firebaseConfig';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const FIREBASE_CONFIG: firebaseConfig = {
  apiKey: "AIzaSyANWpu482dWxdAWck0URbRzmnT3eRh2vNU",
  authDomain: "interceptors-e4384.firebaseapp.com",
  projectId: "interceptors-e4384",
  storageBucket: "interceptors-e4384.appspot.com",
  messagingSenderId: "369077577574",
  appId: "1:369077577574:web:95578113007079b2ab4aa7",
  measurementId: "G-LX2H74GVZV"
};

export const environment = {
  firebase: FIREBASE_CONFIG,
  production: false
}

export const API_ENDPOINTS: ApiEndpoints = {
  listApi: 'http://localhost:3000/usersList'
}

export const PAGE_URLS: PageUrls = {
  usersPage: 'home-page-all-users-list',
  oneUserPage: 'single-user-page',
  signUpPage: 'sign-up-page',
  signInPage: 'sign-in-page'
}



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
