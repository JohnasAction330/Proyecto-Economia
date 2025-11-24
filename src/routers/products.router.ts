import {Router} from 'express';
import { deleteProduct, getProducts } from '../controllers/products.controller';
import { getComments } from '../controllers/products.controller';
import { createProduct } from '../controllers/products.controller';
import { submitFhoto } from '../controllers/products.controller';
import { updateProduct } from '../controllers/products.controller';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
const router  = Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const productName = (req.body as any).productName || 'Sin-Nombre';
        
        const folderName = productName
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-_]/g, '');
        
        const folderPath = path.join(__dirname, '../../dist/images', folderName);
        
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        
        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);
        
        cb(null, `${baseName}-${uniqueSuffix}${ext}`);
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

router.get('/', getProducts);
router.put('/:id', updateProduct)
router.post('/:id/comments', getComments)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)

router.post('/upload-product-images', upload.array('images', 20), submitFhoto)


export default router;