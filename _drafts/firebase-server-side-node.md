Server-side querying firebase from node:

const firebase = require('firebase');

const firebaseConfig = {
    apiKey: '<your-api-key>',
    authDomain: '<your-domain>.firebaseapp.com',
    databaseURL: 'https://<your-domain>.firebaseio.com',
    storageBucket: '<your-domain>.appspot.com'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

let signedLoginObject;

function prpFirebase(callback) {
    if (signedLoginObject) {
        callback(db, signedLoginObject);
    } else {
        console.log('Autenticando...');
        firebase.auth().signInWithEmailAndPassword('acdcjunior@gmail.com', 'parale1234567').catch(error => {
            console.log('Erro ao autenticar :', error);
        }).then(loginObject => {
            if (loginObject) {
                console.log('Autenticado com sucesso!');
                signedLoginObject = loginObject;
                callback(db, signedLoginObject);
            } else {
                console.log('Autenticacao realizada sem sucesso:', loginObject);
            }
        });
    }
}
    let ref = db.ref('users/' + loginObject.uid + '/extratos');
