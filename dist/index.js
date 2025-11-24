"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const products_router_1 = __importDefault(require("./routers/products.router"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '100mb' }));
app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'images')));
app.use("/api/products", products_router_1.default);
app.listen(config_1.default.port, () => {
    console.log(`Servidor corriendo en el puerto ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map