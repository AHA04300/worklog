const utils = require("../utils")


exports.getWorklogData = function (user,year,date) {
    // if (year){
    // //utilsのgetUserYearDataを呼び出す
    // const userData = 'userData'
    // }

    // else if (date){
    // //utilsのgetUserDateDataを呼び出す
    // }

    // else {
    console.log('【確認】exports.getWorklogData')
    const userData = utils.getUserWorklog(user)
        if (userData) {
            return {'years': userData}
        }
    // }
}


// exports.getWorklogData = function (user,year,date) {
//     try {
//       const userRecord = user;
//       const companyRecord = password; 
//       console.log('login!',userRecord,companyRecord)
//       return { user: userRecord, company: companyRecord };
//     } catch (err) {
//       console.log('エラー', err);
//       return err;
//     }
//   }
  