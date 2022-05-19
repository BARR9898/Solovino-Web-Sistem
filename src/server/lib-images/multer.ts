import multer from 'multer'

// Settings
const storage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
});
export default multer({storage});