import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBCFN7XujqkSNQ-5OM0XjGUC03WQZCDVhk",
    authDomain: "myprogdashboard.firebaseapp.com",
    databaseURL: "https://myprogdashboard.firebaseio.com",
    projectId: "myprogdashboard",
    storageBucket: "myprogdashboard.appspot.com",
    messagingSenderId: "329450107577"
};
var database = firebase.initializeApp(config);
export default database;