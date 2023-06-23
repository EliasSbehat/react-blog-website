module.exports = {
    add: function (con, data, callback) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        con.query(
            `INSERT INTO projects SET 
            project_name = ${con.escape(data.project_name)}, 
            project_author = ${con.escape(data.project_author)},
            project_introduction = ${con.escape(data.project_introduction)}, 
            about_developers = ${con.escape(data.about_developers)}, 
            project_video = ${con.escape(data.project_video)}, 
            project_location = ${con.escape(data.project_location)}, 
            project_image = ${con.escape(data.project_image)}, 
            project_pdf = ${con.escape(data.project_pdf)}, 
            created_date = ${con.escape(currentDate)}`,
            callback
        )
    },
    update: function (con, data, callback) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        con.query(
            `UPDATE projects SET 
            project_name = ${con.escape(data.project_name)}, 
            project_author = ${con.escape(data.project_author)},
            project_introduction = ${con.escape(data.project_introduction)}, 
            about_developers = ${con.escape(data.about_developers)}, 
            project_video = ${con.escape(data.project_video)}, 
            project_location = ${con.escape(data.project_location)}, 
            project_image = ${con.escape(data.project_image)}, 
            project_pdf = ${con.escape(data.project_pdf)}, 
            created_date = ${con.escape(currentDate)}
            WHERE id = ${con.escape(data.project_id)}`,
            callback
        )
    },
    getAll: function (con, callback) {
        con.query(`SELECT * FROM projects`, callback)
    },
    getById: function (con, id, callback) {
        con.query(`SELECT * FROM projects WHERE id = ${con.escape(id)}`, callback)
    },
    getTwo: function (con, callback) {
        con.query(`SELECT * FROM projects ORDER BY created_date DESC LIMIT 2`, callback)
    },
    getByName: function (con, name, callback) {
        con.query(`SELECT * FROM projects WHERE project_name = ${con.escape(name)}`, callback)
    },
    getById: function (con, id, callback) {
        con.query(`SELECT * FROM projects WHERE id = ${con.escape(id)}`, callback)
    },
    deleteById: function (con, id, callback) {
        con.query(`DELETE FROM projects WHERE id = ${con.escape(id)}`, callback)
    },
}
