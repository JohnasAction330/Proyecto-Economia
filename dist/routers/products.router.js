"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const products_controller_2 = require("../controllers/products.controller");
const products_controller_3 = require("../controllers/products.controller");
const products_controller_4 = require("../controllers/products.controller");
const products_controller_5 = require("../controllers/products.controller");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const productName = req.body.productName || 'Sin-Nombre';
        const folderName = productName
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-_]/g, '');
        const folderPath = path_1.default.join(__dirname, '../../dist/images', folderName);
        if (!fs_1.default.existsSync(folderPath)) {
            fs_1.default.mkdirSync(folderPath, { recursive: true });
        }
        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        const baseName = path_1.default.basename(file.originalname, ext);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);
        cb(null, `${baseName}-${uniqueSuffix}${ext}`);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path_1.default.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (mimetype && extname) {
            cb(null, true);
        }
        else {
            cb(null, false);
        }
    }
});
router.get('/', products_controller_1.getProducts);
router.put('/:id', products_controller_5.updateProduct);
router.post('/:id/comments', products_controller_2.getComments);
router.post('/', products_controller_3.createProduct);
router.delete('/:id', products_controller_1.deleteProduct);
router.post('/upload-product-images', upload.array('images', 20), products_controller_4.submitFhoto);
exports.default = router;
//# sourceMappingURL=products.router.js.map