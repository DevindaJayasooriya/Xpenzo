const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

//File filter
const fileFilter = (req, file, cb) =>{
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(!allowedTypes.includes(file.mimetype)){
        cb(new Error('Only images are allowed', false));
    } else{
        cb(null, true);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
    