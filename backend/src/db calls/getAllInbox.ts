import { PrismaClient } from "@prisma/client";
const prisma : PrismaClient = new PrismaClient();

async function getInboxMails(receiverMail : string){
    try{
        const allInboxMails = await prisma.emailSchema.findMany({
            where :{
                to: receiverMail
            }
        })
        return allInboxMails;

    }catch(e){
        console.log(`Error ${e}`);
    }
}

export default getInboxMails;