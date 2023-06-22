const md5 = require("md5");
module.exports = {
    getByEmail: function (con, email, callback) {
        con.query(`SELECT * FROM users WHERE email = ${con.escape(email)}`, callback)
    },
    getByToken: function (con, token, callback) {
        con.query(`SELECT * FROM users WHERE token = ${con.escape(token)}`, callback)
    },
    updateToken: function (con, token, email, callback) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        con.query(
          `UPDATE users SET 
          token = ${con.escape(token)},
          latest_access_date = ${con.escape(currentDate)}
          WHERE email = ${con.escape(email)}`,
          callback
        )
    },
}
