import  express  from "express";
import getAllSentMails from "../db calls/getAllSentMails";
import postSentMails from "../db calls/postSentMails";
import transporter from "../send-mail/index"


const userRouter = express.Router();

userRouter.get("/sentemails", async function (re, res){
    const allSentEmails = await getAllSentMails();
    if(!allSentEmails){
        return res.json({
            msg: `No sent mails yet`
        })
    }
})



userRouter.post("/send-mail", async function(req, res){
    try{
        const { to, from, subject, body, date} = req.body;
        const mailOptions = {
            from,
            to,
            subject,
            text : body
            
        };
        await postSentMails({to, from, subject, body, date});
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({
                    msg: 'Error sending email'
                });
            }
            console.log('Message sent:', info.response);
            res.status(200).json({
                msg: 'Email sent successfully'
            });
        });
        
        
    }catch(e){
        console.log(`Error ${e}`);
    }
})
export default userRouter;








