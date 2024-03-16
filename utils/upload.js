import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const storage = new GridFsStorage({
    url : `${MONGODB_URI}`,
    options : {useUnifiedTopology : true, useNewUrlParser : true},
    file : (req,file) => {
        const match = ['image/png','image/jpg'];

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now}-file-${file.originalName}`;
        }

        return {
            bucketName : 'files',
            filename : `${Date.now}-file-${file.originalName}`
        }
    }
})

export default multer({storage});  