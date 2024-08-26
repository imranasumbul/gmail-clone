import  express  from "express";
import getAllSentMails from "../db calls/getAllSentMails";
import postSentMails from "../db calls/postSentMails";
import transporter from "../send-mail/index"
import getInboxMails from "../db calls/getAllInbox";

const userRouter = express.Router();

userRouter.get("/sentemails", async function (req, res){
    const senderEmail = req.headers['authorization'];
    if (!senderEmail) {
        return res.status(400).json({
          msg: "Authorization header is missing",
        });
    }
    console.log(senderEmail);
    const allSentEmails = await getAllSentMails(senderEmail.toString());
    
    res.status(200).json({
        msg: allSentEmails
    })
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
userRouter.get("/receivedemails", async function (req, res){
    const receiverEmail = req.headers['authorization'];
    if (!receiverEmail) {
        return res.status(400).json({
          msg: "Authorization header is missing",
        });
    }
    console.log(receiverEmail);
    const allReceivedEmails = await getInboxMails(receiverEmail.toString());
    
    res.status(200).json({
        msg: allReceivedEmails
    })
})

export default userRouter;








