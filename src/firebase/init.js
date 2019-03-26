import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAl-WSlbmlwfNdrhhlftsoKC5rpyyEMqNw",
    authDomain: "udemy-geo-ninjas-73a2b.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-73a2b.firebaseio.com",
    projectId: "udemy-geo-ninjas-73a2b",
    storageBucket: "udemy-geo-ninjas-73a2b.appspot.com",
    messagingSenderId: "892518078629"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()