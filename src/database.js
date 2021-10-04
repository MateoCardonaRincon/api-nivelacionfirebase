// Import the functions you need from the SDKs you need

const admin = require('firebase-admin');

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nivelacion-firebase-example-default-rtdb.firebaseio.com"
});


const db = admin.firestore();


module.exports = db;
