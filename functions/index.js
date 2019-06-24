const functions = require("firebase-functions");
var fetch = require("node-fetch");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = firebase.database.ref("data").onCreate(event => {
  const root = event.data.ref.root;
  var message = [];

  root.child('users').once('value').then((snapshot)=>{
    snapshot.forEach(function(childSnapshot){
        
    })
  })
});
