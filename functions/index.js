// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

exports.numbers = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {
        const numbers = [
            {period: 1, value: 104}, 
            {period: 2, value: 198}, 
            {period: 3, value: 127}, 
            {period: 4, value: 159}, 
            {period: 5, value: 203}
        ];
    res.json({result: numbers});
    })
});