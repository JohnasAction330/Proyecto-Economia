import { Request, Response } from 'express';
export declare const getProducts: (req: Request, res: Response) => void;
export declare const getComments: (req: Request, res: Response) => Response<any, Record<string, any>>;
export declare const createProduct: (req: Request, res: Response) => Response<any, Record<string, any>>;
export declare const submitFhoto: (req: Request, res: Response) => Response<any, Record<string, any>>;
export declare const updateProduct: (req: Request, res: Response) => Response<any, Record<string, any>>;
export declare const deleteProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=products.controller.d.ts.map