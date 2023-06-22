const md5 = require("md5");
const fs = require("fs");

const Projects = require("../model/Project");

module.exports = {
    add: function (req, res) {
        // Access the files
        const imageFile = req.files.project_image;
        const documentFile = req.files.project_pdf;
        // Create directories if they don't exist
        const imageDir = 'public/projects/images';
        const documentDir = 'public/projects/pdf';

        Projects.getByName(req.con, req.body.project_name, function (err, rows) {
            if (rows.length > 0) {
                res.send({ msg: 'exist' });
            } else {
                if (!fs.existsSync(imageDir)) {
                    fs.mkdirSync(imageDir);
                }
                
                if (!fs.existsSync(documentDir)) {
                    fs.mkdirSync(documentDir);
                }
                imageFile.mv(`${imageDir}/${req.body.project_name}_@_${imageFile.name}`, (err) => {
                    if (err) return res.status(500).send(err);
                });
            
                documentFile.mv(`${documentDir}/${req.body.project_name}_@_${documentFile.name}`, (err) => {
                    if (err) return res.status(500).send(err);
                });
                var datas = {
                    ...req.body,
                    project_image: `${req.body.project_name}_@_${imageFile.name}`,
                    project_pdf: `${req.body.project_name}_@_${documentFile.name}`
                }
                Projects.add(req.con, datas, function (err) {
                    res.send({ msg: 'saved' });
                });
            }
        });
    },
    get: function (req, res) {
        Projects.getAll(req.con, function (err, rows) {
            res.send(rows);
        });
    }
}
