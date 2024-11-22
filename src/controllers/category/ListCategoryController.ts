import {Request, Response} from 'express'
import { listCategoryService } from '../../services/category/ListCategoryService'

class ListCategoryController{
  async handle(req: Request, res: Response){
    const listcategoryService = new listCategoryService();

    const category = await listcategoryService.execute();

    return res.json(category);

  }
}

export { ListCategoryController }