---
layout: single
title: 'Server-side connecting and querying Firebase from Node.JS'
category: node
tags: [firebase, node, sample]
lang: en-US
comments: true
share: true
mathjax: false
published: true
---

It took me a bit of work to figure out how to connect to and query Firebase from a (server-side, naturally) Node script, so, in order to make it easier in the future, here goes a rough draft of how you can do it:

    const firebase = require('firebase');

    const firebaseConfig = {
        apiKey: '<your-api-key>',
        authDomain: '<your-domain>.firebaseapp.com',
        databaseURL: 'https://<your-domain>.firebaseio.com',
        storageBucket: '<your-domain>.appspot.com'
    };

    firebase.initializeApp(firebaseConfig);

    const db = firebase.database();

    console.log('Authenticating...');
    firebase.auth().signInWithEmailAndPassword('your@email.com', 'YoUrPaSsWoRd').catch(error => {
        console.log('Error while authenticating:', error);
    }).then(loginObject => {
        if (loginObject) {
            console.log('Success!!');
            // now do your thing!
            let something = db.ref('users/' + loginObject.uid + '/something');
            // do something with something
        } else {
            console.log('Oops, something went wrong while authenticating:', loginObject);
        }
    });


That should be enough to get you started.
