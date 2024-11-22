import prismaClient from "../../prisma";


interface AdditemRequeste{
    amount: number,
    order_id: string,
    product_id: string
}


class AddItemService{
    async execute({amount, order_id, product_id}: AdditemRequeste){

        const Additem = await prismaClient.item.create({
            data:{
                amount: amount,
                order_id: order_id,
                product_id: product_id
            }
        })

        return Additem;

    }
}


export {AddItemService};