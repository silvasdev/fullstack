import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'



import { CreateCategoryController } from './controllers/category/CreateCategoryController';

import {ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';

import {ListByCategoryController} from "./controllers/product/ListByCategoryController"

import { CreateOrderController } from './controllers/order/CreateOrderController';

import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { AddItemController } from './controllers/order/AddItemController';

import { RemoveItemController } from './controllers/order/RemoveItemController';

import { SendOrderController } from './controllers/order/SendOrderController';

import { ListOrdersController } from './controllers/order/ListOrdersController';

import { DetailOrderController } from './controllers/order/DetailOrderController';

import { FinishOrderController } from './controllers/order/FinishOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'





const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

//routes category

router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle )

//rotas product

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle )

//filtrando produto por categoria

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

//orders

router.post('/order', isAuthenticated, new CreateOrderController().handle )

//remover orders

router.delete('/remove', isAuthenticated, new RemoveOrderController().handle)

// add item do pedido

router.post('/item', isAuthenticated, new AddItemController().handle )

//remover itemm do pedido

router.delete('/item/remove', isAuthenticated, new RemoveItemController().handle )

//enviar pedido

router.put('/item/send', isAuthenticated, new SendOrderController().handle )

//mostrar os pedidos ja enviados

router.get('/orders', isAuthenticated, new ListOrdersController().handle )

// detalhes do pedido

router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )

//pedido finalizado

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )

export {router};