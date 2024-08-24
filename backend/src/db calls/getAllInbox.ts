import { PrismaClient } from "@prisma/client";
const prisma : PrismaClient = new PrismaClient();

async function getInboxMails(){
    try{
        const allInboxMails = await prisma.emailSchema.findMany({
            where :{
                sent: false
            }
        })
        return allInboxMails;

    }catch(e){
        console.log(`Error ${e}`);
    }
}

export default getInboxMails;