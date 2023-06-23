const fs = require("fs");

const Projects = require("../model/Project");
const imageDir = 'public/projects/images';
const documentDir = 'public/projects/pdf';

module.exports = {
    add: function (req, res) {
        // Access the files
        const imageFile = req.files?.project_image;
        const documentFile = req.files?.project_pdf;
        // Create directories if they don't exist
        if (!fs.existsSync(imageDir)) {
            fs.mkdirSync(imageDir);
        }
        if (!fs.existsSync(documentDir)) {
            fs.mkdirSync(documentDir);
        }
        if (imageFile) {
            imageFile.mv(`${imageDir}/${req.body.project_name}_@_${imageFile.name}`, (err) => {
                if (err) return res.status(500).send(err);
            });
        }
        if (documentFile) {
            documentFile.mv(`${documentDir}/${req.body.project_name}_@_${documentFile.name}`, (err) => {
                if (err) return res.status(500).send(err);
            });
        }
        var project_image_name = (imageFile) ? `${req.body.project_name}_@_${imageFile.name}` : '';
        var project_pdf_name = (documentFile) ? `${req.body.project_name}_@_${documentFile.name}` : '';
        var datas = {
            ...req.body,
            project_image: project_image_name,
            project_pdf: project_pdf_name
        }
        const flag = req.body.flag;
        if (flag === 'save') {
            Projects.getByName(req.con, req.body.project_name, function (err, rows) {
                if (rows.length > 0) {
                    res.send({ msg: 'exist' });
                } else {
                    Projects.add(req.con, datas, function (err) {
                        res.send({ msg: 'saved' });
                    });
                }
            });
        } else {
            Projects.getById(req.con, req.body.project_id, function (err, rows) {
                if (rows.length > 0) {
                    if (!project_image_name) {
                        datas.project_image = rows[0].project_image;
                    } else {
                        fs.unlinkSync(`${imageDir}/${rows[0].project_image}`);
                    }
                    if (!project_pdf_name) {
                        datas.project_pdf = rows[0].project_pdf;
                    } else {
                        fs.unlinkSync(`${documentDir}/${rows[0].project_pdf}`);
                    }
                    if (rows[0]?.project_name == req.body.project_name) {
                        Projects.update(req.con, datas, function (err) {
                            res.send({ msg: 'updated' });
                        });
                    } else {
                        Projects.getByName(req.con, req.body.project_name, function (err, rows2) {
                            if (rows2.length > 0) {
                                res.send({ msg: 'exist' });
                            } else {
                                Projects.update(req.con, datas, function (err) {
                                    res.send({ msg: 'updated' });
                                });
                            }
                        });
                    }
                }
            });
        }

    },
    get: function (req, res) {
        Projects.getAll(req.con, function (err, rows) {
            res.send(rows);
        });
    },
    getById: function (req, res) {
        Projects.getById(req.con, req.body.id, function (err, rows) {
            res.send(rows);
        });
    },
    getTwoLatest: function (req, res) {
        Projects.getTwo(req.con, function (err, rows) {
            res.send(rows);
        });
    },
    delete: function (req, res) {
        var id = req.body.id;
        Projects.getById(req.con, id, function (err, rows) {
            if (rows.length > 0) {
                if (fs.existsSync(`${imageDir}/${rows[0].project_image}`)) {
                    fs.unlinkSync(`${imageDir}/${rows[0].project_image}`);
                }
                if (fs.existsSync(`${documentDir}/${rows[0].project_pdf}`)) {
                    fs.unlinkSync(`${documentDir}/${rows[0].project_pdf}`);
                }
                Projects.deleteById(req.con, id, function (err) {
                    res.send({ msg: 'deleted' });
                });
            }
        });
    }
}
