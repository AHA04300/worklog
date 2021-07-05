// def createUser(user,password):
//     userCred = utils.getUserCredentials(user)
    
//     if userCred:
//         return jsonify({"error":"User already exists"}),400
    
//     userCred = utils.createUserInDatabase(user, password)
    
//     if userCred:
//         return jsonify({"success":"User "+ user + " created"})
    
//     return None

const utils = require("../utils")

exports.createUser = function (user,password) {
    const userCred = utils.createUserInDatabase(user, password)
    console.log("userCres-->",userCred)
    if (userCred){
        return JSON.stringify({"success":"User "+ user + " created"})
    }
        
    return;
}