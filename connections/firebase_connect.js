var firebase = require('firebase');
// 貼上自己的 config 設定
var config = {
    apiKey: "AIzaSyBI6locrcoI0Z561Ks2rvNUkLmbwRgQzGE",
    authDomain: "stron-0913.firebaseapp.com",
    projectId: "stron-0913",
    storageBucket: "stron-0913.appspot.com",
    messagingSenderId: "4111837942",
    appId: "1:4111837942:web:7119b90b6b11f112dadad7",
    measurementId: "G-S64QP072DW"
};


firebase.initializeApp(config);

module.exports = firebase;