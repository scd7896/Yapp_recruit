import * as firebase from 'firebase';
import { config } from './config';
let database;
export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
  database = firebase.database()
}

export const getFireDB = () => {
    return database.ref('/recruit').once('value');
}
export const updatedURL = () => {
    return firebase.database().ref(`/recruit/recruit-data`).update({
        notionURL: 'www.facebook.com'
    });
}