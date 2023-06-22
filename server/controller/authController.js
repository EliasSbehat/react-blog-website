const Users = require("../model/User");

module.exports = {
    signin: function (req, res) {
        var email = req.body.email;
        var pwd = req.body.pwd;
        Users.getByEmail(req.con, email, function (err, rows) {
        if (rows.length > 0) {
            if (rows[0].activate != 1) {
            res.send({ msg: 'no-activate', data: {} });
            } else {
            if (rows[0].password === md5(pwd)) {
                Users.getByToken(req.con, rows[0].token, function (err, newData) {
                var newToken = md5(rows[0].user_email + "__!Security!__" + rows[0].user_name + new Date().toISOString() + "__Token.");
                Users.updateToken(req.con, newToken, email, function (callback) {
                    var userData = { email: rows[0].user_email, name: rows[0].user_name, token: newToken, register_date: rows[0].register_date, plan: rows[0].payment_plan, pay_date: rows[0].payment_date };
                    req.session.user = rows[0];
                    res.send({ msg: "success", data: userData });
                });
                });
            } else {
                res.send({ msg: 'wrong-pwd', data: {} });
            }
            }
        } else {
            res.send({ msg: 'wrong-email', data: {} });
        }
        });
    },
}
