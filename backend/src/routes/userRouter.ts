import  express  from "express";
import getAllSentMails from "../db calls/getAllSentMails";
import postSentMails from "../db calls/postSentMails";



const userRouter = express.Router();

userRouter.get("/sentemails", async function (re, res){
    const allSentEmails = await getAllSentMails();
    if(!allSentEmails){
        return res.json({
            msg: `No sent mails yet`
        })
    }
})

userRouter.post("/sentemails", async function (req, res){
    try{
        const to = req.body.to;
        const from = req.body.from;
        const subject = req.body.subject;
        const body = req.body.body;
        const date = req.body.date;
        await postSentMails({to, from, subject, body, date});
        return res.status(200).json({
            msg: `email sent successfully`
        })
    }catch(e){
        console.log(`Error ${e}`);
        
    }
    
})
export default userRouter;