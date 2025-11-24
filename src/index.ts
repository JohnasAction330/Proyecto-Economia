import cors from 'cors';
import express, {Express} from 'express';
import config from './config/config';
import productsRouter from './routers/products.router';
import path from 'path';

const app: Express = express();

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/products", productsRouter);


app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}`);
});