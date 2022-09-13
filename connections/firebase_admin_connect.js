var admin = require("firebase-admin");
// 輸入自己的金鑰
var serviceAccount = require("../stron-0913-firebase-adminsdk-zr104-f684483638.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://stron-0913-default-rtdb.firebaseio.com"
});

var db = admin.database();

module.exports = db;