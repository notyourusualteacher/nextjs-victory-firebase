// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });

  // initialise db
var db = admin.firestore();

exports.numbers = functions.https.onRequest(async (req, res) => {
    // handle cors
    cors(req, res, () => {
        i = 1;
        numbers = [];
        
        // get all 'numbers' documents from firestore
        db.collection('numbers').get()
            .then((snapshot) => {
            snapshot.forEach((doc) => { 
                console.log(doc.id, '=>', doc.data().value);
                numbers_list = doc.data().value;
                numbers_list.forEach((single_value) => {
                    numbers.push({period: i, value: single_value});
                    i++;
                });
            });
            // send the result only after db query has returned
            }).then(() => {
                res.json({result: numbers});
            })
            .catch((err) => {
            console.log('Error getting documents', err);
            });
    })
});