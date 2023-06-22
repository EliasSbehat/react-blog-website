const md5 = require("md5");
module.exports = {
    getByEmail: function (con, email, callback) {
        con.query(`SELECT * FROM users WHERE user_email = ${con.escape(email)}`, callback)
    }
}
