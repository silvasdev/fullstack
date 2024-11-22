import { Request, Response } from 'express'
import {AddItemService} from '../../services/Orders/AddItemService'


class AddItemController{
    async handle(req: Request, res: Response){

        const {amount, order_id, product_id} = req.body;


        const AddItem = new AddItemService();

        const item = await AddItem.execute({
            amount,
            order_id,
            product_id
        })

        return res.json(item)
    }
}

export {AddItemController};