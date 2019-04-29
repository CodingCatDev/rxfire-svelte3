import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAQGKpP9F_A_HMVOHPYPjocD1P7yg-3YAk',
  authDomain: 'ajonp-rxfire-react-cats.firebaseapp.com',
  databaseURL: 'https://ajonp-rxfire-react-cats.firebaseio.com',
  projectId: 'ajonp-rxfire-react-cats',
  storageBucket: 'ajonp-rxfire-react-cats.appspot.com',
  messagingSenderId: '804986317201'
});

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);
const loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));

export { app, auth, firestore, collectionData, loggedIn$ };

export default firebase;
