import { PrismaClient } from "@prisma/client";
const prisma : PrismaClient = new PrismaClient();

async function getAllSentMails(){
    try{
        const allSentMails = await prisma.emailSchema.findMany({
            where :{
                sent: true
            }
        })
        return allSentMails;

    }catch(e){
        console.log(`Error ${e}`)
    }
}

export default getAllSentMails;