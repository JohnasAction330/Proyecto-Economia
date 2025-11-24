import {Request, Response} from 'express';
import { productsData } from '../data/products.data';
import path from 'path';
import fs from 'fs';

export const getProducts = (req : Request, res : Response) =>{
    res.json(productsData);
}

export const getComments = (req : Request, res : Response) =>{
    const productId = parseInt(req.params.id);
    const { user, comment } = req.body;
  
    if (!user || !comment) {
        return res.status(400).json({ error: 'Usuario y comentario son requeridos' });
    }

    const productIndex = productsData.findIndex(p => p.id === productId);

    if (productIndex === -1){
        return res.status(404).json({ error : 'Producto no encontrado'});
    }

    const newComment = {
        user: user.trim(),
        comment: comment.trim()
    };

    productsData[productIndex].comments?.push(newComment);

    res.status(201).json({
        sucess: true,
        comment : newComment,
        product: productsData[productIndex]
    });
}

export const createProduct = (req: Request, res: Response)=>{
    try {
        const newProduct = req.body;
        
        // Validar campos requeridos
        if (!newProduct.name || !newProduct.category || newProduct.price === undefined) {
            return res.status(400).json({ 
                error: 'Faltan campos requeridos: name, category, price' 
            });
        }
        
        // Validar formato de price
        if (typeof newProduct.price !== 'number' && !Array.isArray(newProduct.price)) {
            return res.status(400).json({ 
                error: 'El campo price debe ser un número (precio simple) o un array de objetos (precio por almacenamiento)' 
            });
        }
        
        // Si es array, validar estructura
        if (Array.isArray(newProduct.price)) {
            const isValidArray = newProduct.price.every((item: any) => 
                item.storage && typeof item.storage === 'string' &&
                item.amount && typeof item.amount === 'number'
            );
            
            if (!isValidArray) {
                return res.status(400).json({ 
                    error: 'Cada opción de precio debe tener: storage (string) y amount (number)' 
                });
            }
        }
        
        // Generar ID
        const lastId = productsData.length > 0 
            ? Math.max(...productsData.map(p => p.id)) 
            : 0;
        
        // Crear producto
        const product = {
            id: lastId + 1,
            name: newProduct.name,
            description: newProduct.description || '',
            category: newProduct.category,
            status: newProduct.status || 'in-stock',
            store: newProduct.store || 0,
            price: newProduct.price,
            discount: newProduct.discount || 0,
            colors: newProduct.colors || [],
            features: newProduct.features || [],
            image: newProduct.image || '',
            comments: newProduct.comments || []
        };
        
        productsData.push(product);
        
        console.log(`✅ Producto creado: ${product.name} (ID: ${product.id})`);
        console.log(`   Tipo de precio: ${typeof product.price === 'number' ? 'Simple' : 'Con opciones de almacenamiento'}`);
        
        res.status(201).json({
            message: 'Producto creado exitosamente',
            product: product
        });
        
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor al crear producto' 
        });
    }
}

export const submitFhoto = (req : Request, res : Response) =>{
    try {
        if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
            return res.status(400).json({ error: 'No se subieron imágenes' });
        }
        
        const productName = (req.body as any).productName || 'Sin-Nombre';
        const folderName = productName
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-_]/g, '');
        
        const imageUrls = req.files.map((file: Express.Multer.File) => 
            `http://localhost:3000/images/${folderName}/${file.filename}`
        );
        
        res.status(200).json({
            message: 'Imágenes subidas exitosamente',
            folderName: folderName,
            images: imageUrls
        });
        
    } catch (error) {
        console.error('Error al subir imágenes:', error);
        res.status(500).json({ error: 'Error al subir imágenes' });
    }
}

export const updateProduct = (req: Request, res: Response) =>{
     try {
        const productId = parseInt(req.params.id);
        
        if (isNaN(productId)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        
        const updatedData = req.body;
        
        // Buscar producto
        const productIndex = productsData.findIndex(p => p.id === productId);
        
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        // Validar formato de price si se proporciona
        if (updatedData.price !== undefined) {
            if (typeof updatedData.price !== 'number' && !Array.isArray(updatedData.price)) {
                return res.status(400).json({ 
                    error: 'El campo price debe ser un número o un array de opciones' 
                });
            }
            
            // Si es array, validar estructura
            if (Array.isArray(updatedData.price)) {
                const isValidArray = updatedData.price.every((item: any) => 
                    item.storage && typeof item.storage === 'string' &&
                    item.amount && typeof item.amount === 'number'
                );
                
                if (!isValidArray) {
                    return res.status(400).json({ 
                        error: 'Cada opción de precio debe tener: storage (string) y amount (number)' 
                    });
                }
            }
        }
        
        // Validar descuento
        if (updatedData.discount !== undefined) {
            if (updatedData.discount < 0 || updatedData.discount > 100) {
                return res.status(400).json({ 
                    error: 'El descuento debe estar entre 0 y 100' 
                });
            }
        }
        
        // Validar stock
        if (updatedData.store !== undefined && updatedData.store < 0) {
            return res.status(400).json({ 
                error: 'El stock no puede ser negativo' 
            });
        }
        
        const existingProduct = productsData[productIndex];
        
        // Actualizar producto (mantener comentarios existentes)
        productsData[productIndex] = {
            ...existingProduct,
            ...updatedData,
            id: productId,
            comments: existingProduct.comments
        };
        
        console.log(`✅ Producto actualizado: ${productsData[productIndex].name} (ID: ${productId})`);
        
        res.status(200).json({
            message: 'Producto actualizado exitosamente',
            product: productsData[productIndex]
        });
        
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor al actualizar producto' 
        });
    }
}

// FUNCIÓN ASYNC PARA ELIMINAR PRODUCTO
export const deleteProduct = async (req: Request, res:Response) =>{ // ← Agregar async aquí
    try {
        const productId = parseInt(req.params.id);
        
        if (isNaN(productId)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        
        const productIndex = productsData.findIndex(p => p.id === productId);
        
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        const deletedProduct = productsData[productIndex];
        
        console.log(`🗑️ Iniciando eliminación del producto: ${deletedProduct.name} (ID: ${productId})`);
        
        // Eliminar carpeta de imágenes (asíncrono)
        await deleteProductImagesFolder(deletedProduct);
        
        // Eliminar producto del array (corregir nombre de variable)
        productsData.splice(productIndex, 1); // ← Era "products", debe ser "productsData"
        
        console.log(`✅ Producto eliminado completamente: ${deletedProduct.name}`);
        
        res.status(200).json({
            message: 'Producto e imágenes eliminados exitosamente',
            product: deletedProduct,
            imagesDeleted: true
        });
        
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor al eliminar producto' 
        });
    }
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

function getFolderNameFromImageUrl(imageUrl: string): string | null {
    try {
        if (!imageUrl || typeof imageUrl !== 'string') {
            return null;
        }
        
        let pathAfterImages = '';
        
        if (imageUrl.includes('/images/')) {
            pathAfterImages = imageUrl.split('/images/')[1];
        } else if (imageUrl.includes('images/')) {
            pathAfterImages = imageUrl.split('images/')[1];
        } else {
            return null;
        }
        
        const folderName = pathAfterImages.split('/')[0];
        
        return folderName || null;
        
    } catch (error) {
        console.error('Error al extraer nombre de carpeta:', error);
        return null;
    }
}

function deleteProductImagesFolder(product: any): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            let folderName: string | null = null;
            
            // Intentar obtener folderName desde diferentes fuentes
            if (product.image) {
                folderName = getFolderNameFromImageUrl(product.image);
            } else if (product.colors && product.colors.length > 0) {
                for (const color of product.colors) {
                    if (color.images && color.images.length > 0) {
                        folderName = getFolderNameFromImageUrl(color.images[0]);
                        if (folderName) break;
                    }
                }
            }
            
            if (!folderName) {
                console.warn(`⚠️ No se pudo determinar la carpeta de imágenes para: ${product.name}`);
                resolve();
                return;
            }
            
            const folderPath = path.join(__dirname, '../../dist/images', folderName);
            
            if (!fs.existsSync(folderPath)) {
                console.warn(`⚠️ La carpeta no existe: ${folderPath}`);
                resolve();
                return;
            }
            
            // Obtener lista de archivos antes de eliminar (para logging)
            const files = fs.readdirSync(folderPath);
            console.log(`📁 Carpeta encontrada: ${folderPath}`);
            console.log(`📄 Archivos a eliminar: ${files.length}`);
            
            // Eliminar carpeta recursivamente
            fs.rmSync(folderPath, { recursive: true, force: true });
            
            console.log(`✅ Carpeta eliminada exitosamente: ${folderName}`);
            resolve();
            
        } catch (error) {
            console.error('❌ Error al eliminar carpeta de imágenes:', error);
            resolve();
        }
    });
}
