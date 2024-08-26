import { PrismaClient } from "@prisma/client";
const prisma : PrismaClient = new PrismaClient();

interface Mail {
    to : string,
    from: string,
    subject: string,
    body: string,
    date: Date,
}
async function postSentMails({to, from, subject, body, date} : Mail){
    try{
        const createSentMails = await prisma.emailSchema.create({
            data: {
                to,
                from,
                subject,
                body,
                date,
                sent: true
            }
        })
        return createSentMails;

    }catch(e){
        console.log(`Error ${e}`)
    }
}

export default postSentMails;