exports.login = function (user,password) {
  try {
    const userRecord = user;
    const companyRecord = password; 
    console.log('login!',userRecord,companyRecord)
    return { user: userRecord, company: companyRecord };
  } catch (err) {
    console.log('エラー', err);
    return err;
  }
}
