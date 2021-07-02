
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