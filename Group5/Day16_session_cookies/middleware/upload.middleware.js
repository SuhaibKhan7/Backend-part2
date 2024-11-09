const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const uploads = async (req, res, next) => {
    upload.single('profileImage')(req, res, function (error) {
        if (error) {
            console.log(error);
            return res.status(400).send({ error: error.message });
        }
        next();
    });
};

module.exports = uploads;