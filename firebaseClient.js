import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAvY5owOvktXWx10f53M7UvGG0j645ErU",
    authDomain: "najmat-b248e.firebaseapp.com",
    databaseURL: "https://najmat-b248e-default-rtdb.firebaseio.com",
    projectId: "najmat-b248e",
    storageBucket: "najmat-b248e.appspot.com",
    messagingSenderId: "1097132257075",
    appId: "1:1097132257075:web:a7ef29ffce8c03fe131846",
    measurementId: "G-KE738YVJFR"
}

export default function firebaseClient()    {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
console.log('doooooone!')
