var admin = require("firebase-admin");
// 輸入自己的金鑰
var serviceAccount = require("../fleet-impact-361308-firebase-adminsdk-mygg8-6d7c584b5a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fleet-impact-361308-default-rtdb.asia-southeast1.firebasedatabase.app"
});

var db = admin.database();

module.exports = db;