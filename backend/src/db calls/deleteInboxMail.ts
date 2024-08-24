import { PrismaClient } from "@prisma/client";
const prisma : PrismaClient = new PrismaClient();

async function deleteMails(mailID : number){
    try{
        await prisma.emailSchema.delete({
            where :{
                id: mailID
            }
        })
        return 1
    }catch(e){
        console.log(`Error ${e}`);
    }
}

export default deleteMails;