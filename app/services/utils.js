require('date-utils');

exports.getUserWorklog = function (user) {
    // mongodbにuserを渡して、ワークログ情報を返す
    console.log('【確認】引数user=', user)
    console.log('【確認】return jsonResponse')
    return 'jsonResponse'
}


// 下記のソースコードをnode.js化する
// def getUserWorklog(user):
//     userCred = getUserCredentials(user)
        
//     log = mongoLog.db.log.find_one({"_id": userCred["user_id"]})
        
//     if log:
//         return log["years"]
//     return None


const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = "mongodb://127.0.0.1:27017/";

exports.createUserInDatabase = function (user, password) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dt = new Date();
    var formatted = dt.toFormat("YYYYMMDDHH24MISS");
    const dbo = db.db("db")
    const log =
    {
      "settings": {
        "slack": "",
        "total": {
          "remote": -1,
          "vacation": -1,
          "holiday": -1,
          "sick": -1
        }
      },
      "years": []
    }
    const credentials = {
      "user_id": "userId",
      "username": user,
      "password": password,
      "sessionend": formatted
    }
    // INSERT
    // dbo.collection("log").insertOne(log, function (err, res) {
    //   if (err) throw err;
    //   db.close();
    // });
    // dbo.collection("credentials").insertOne(credentials, function (err, res) {
    //   if (err) throw err;
    //   db.close();
    // });

    const result = dbo.collection("credentials").findOne({"username": user,
    "user_id": "userId"}, function (err, res) {
      if (err) throw err;
      db.close();
    });
    console.log(result)
    return result;

  });

}



// MongoClient.connect('mongodb://127.0.0.1:27017/myDB', (err, db) => {
//     assert.equal(null, err)
//     console.log("Connected successfully to server")
//     insertDocuments(db, () => {
//         db.close()
//     })
// })

// const insertDocuments = (client, callback) => {
//     const documents = [
//         { a: 1 },
//         { a: 2 },
//         { a: 3 }
//     ]
//     // myDBデータベースのdocumentsコレクションに対して
//     // ドキュメントを3つ追加します
//     const db = client.db("plactice")  //　追加
//     db.collection('documents').insertMany(documents, (err, result) => {
//         // insert結果の確認
//         assert.equal(err, null)
//         assert.equal(3, result.result.n)
//         assert.equal(3, result.ops.length)

//         console.log("Inserted 3 documents into the collection")
//         callback(result)
//     })
// }
