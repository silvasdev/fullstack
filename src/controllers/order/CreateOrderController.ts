import { json, Request, Response } from "express";
import { CreateOrderService} from '../../services/Orders/CreateOrdersService'



class CreateOrderController{
    async handle(req: Request, res: Response){

        const {table, name} = req.body;

        const createorderservice = new CreateOrderService();

        const order = await createorderservice.execute({
            table,
            name
        })

        return res.json(order);

    }
}


export {CreateOrderController};