function makeid(length) {
    var result           = '';
    var characters       = '1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const fall = {
  makeid(length) {
    var result             = 'yamite bubasai'
  }
}

console.log(makeid(12));
// in console write 'node "c:\Users\[user]\module\ts_modules\pkg\cfg\cfg.js"' or your! Thanks!
