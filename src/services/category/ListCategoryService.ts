import  prismaClient from "../../prisma"

class listCategoryService {
    async execute(){
        
        const category = prismaClient.category.findMany({
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export {listCategoryService};