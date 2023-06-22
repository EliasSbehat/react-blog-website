const md5 = require("md5");
const Users = require("../model/User");

module.exports = {
    signin: function (req, res) {
        var email = req.body.email;
        var pwd = req.body.password;
        Users.getByEmail(req.con, email, function (err, rows) {
            if (rows.length > 0) {
                if (rows[0].password === md5(pwd)) {
                    var newToken = md5(rows[0].email + "__!Security!__" + rows[0].password + new Date().toISOString() + "__Token.");
                    Users.updateToken(req.con, newToken, email, function (callback) {
                        var userData = { email: rows[0].email, token: newToken };
                        res.send({ msg: "success", data: userData });
                    });
                } else {
                    res.send({ msg: 'wrong-pwd', data: {} });
                }
            } else {
                res.send({ msg: 'wrong-email', data: {} });
            }
        });
    },
    verifyUser: function (req, res) {
        var token = req.body.token;
        Users.getByToken(req.con, token, function (err, rows) {
            if (rows.length > 0) {
                var newToken = md5(rows[0].email + "__!Security!__" + rows[0].password + new Date().toISOString() + "__Token.");
                Users.updateToken(req.con, newToken, rows[0].email, function (callback) {
                    var userData = { email: rows[0].email, token: newToken };
                    res.send({ msg: "success", data: userData });
                });
            } else {
                res.send({ msg: 'error', data: {} });
            }
        });
    }
}
