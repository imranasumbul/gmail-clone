import { PrismaClient } from "@prisma/client";
const prisma : PrismaClient = new PrismaClient();

async function getAllSentMails(senderMail : string){
    try{
        const allSentMails = await prisma.emailSchema.findMany({
            where :{
                from: senderMail,
                sent: true
                
            }
        })
        return allSentMails;

    }catch(e){
        console.log(`Error ${e}`)
    }
}

export default getAllSentMails;