const admin = require('firebase-admin')
//const firebase = require('firebase');

const serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL: "https://swe445-93560-default-rtdb.firebaseio.com"
})

module.exports = admin;