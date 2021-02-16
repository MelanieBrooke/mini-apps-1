var db = require('./index.js');

var postUserInfo = function(user) {
  var queryString = 'INSERT INTO users (userName, pswd, firstName, lastName, email) VALUES (?, ?, ?, ?, ?)';
  var queryArgs = [user.userName, user.pswd, user.firstName, user.lastName, user.email];
  db.connection.query(queryString, queryArgs, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log('userInfo added to database')
    }
  })
}

var postUserContact = function(user) {
  var queryString = 'UPDATE users SET phone = ?, address1 = ?, address2 = ?, addressCity = ?, addressState = ?, addressZip = ? WHERE userName = ?';
  var queryArgs = [user.phone, user.address1, user.address2, user.addressCity, user.addressState, user.addressZip, user.userName];
  db.connection.query(queryString, queryArgs, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log('userContact added to database')
    }
  })
}

var postUserPayment = function(user) {
  var queryString = 'UPDATE users SET cardNum = ?, cardCVV = ?, cardExpMonth = ?, cardExpYear = ?, billingZip = ? WHERE userName = ?';
  var queryArgs = [user.cardNum, user.cardCVV, user.cardExpMonth, user.cardExpYear, user.billingZip, user.userName];
  db.connection.query(queryString, queryArgs, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log('userPayment added to database')
    }
  })
}

module.exports.postUserInfo = postUserInfo;
module.exports.postUserContact = postUserContact;
module.exports.postUserPayment = postUserPayment;