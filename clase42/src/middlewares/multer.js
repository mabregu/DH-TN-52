const multer = require('multer');
const path = require('path');
const maxSize = 2 * 1024 * 1024; // 2MB

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/img'),
    filename: (req, file, cb) => {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('Error: File upload only supports the following filetypes - ' + filetypes);
    }
}).array('files', 10);

module.exports = upload;