const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let dest = path.resolve(__dirname, '../../public/img');
        cb(null, dest);
    },
    filename: (req, file, cb)=>{
        let image = 'image-' + Date.now() + path.extname(file.originalname);
        cb(null, image);
    },
})

const upload = multer({storage})

module.exports = upload