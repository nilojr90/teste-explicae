const multer = require('multer');
const path = require('path');

const uploadFolder = path.resolve(__dirname, '..', 'tmp');

module.exports = {
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename(request, file, callback) {
            const fileName = `${file.originalname}-${Math.random()}`;

            return callback(null, fileName);
        },
    }),

}