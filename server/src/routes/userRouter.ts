import  express  from "express";
import getAllSentMails from "../db calls/getAllSentMails";
import postSentMails from "../db calls/postSentMails";
import transporter from "../send-mail/index"
import getInboxMails from "../db calls/getAllInbox";
import { SentMessageInfo } from 'nodemailer';

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
    try {
        
        const { to, from, subject, body, date } = req.body;
        const mailOptions = {
            from,
            to,
            subject,
            text: body
        };
        
        // Sending email
        let mailSent = false;
        const sendMailPromise = new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info);
                }
            });
        });

        try {
            const info : SentMessageInfo = await sendMailPromise;
            console.log('Email sent: ', info.response);
            mailSent = true; // mark that the mail was successfully sent
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(400).json({
                msg: 'Error sending email',
                err: `${error}`
            });
        }

        // Save email to DB if sending was successful
        if (mailSent) {
            await postSentMails({ to, from, subject, body, date });
            return res.status(200).json({
                msg: 'Email sent successfully'
            });
        }

    } catch (e) {
        console.error(`Error: ${e}`);
        return res.status(500).json({
            msg: 'Internal server error',
            err: `${e}`
        });
    }
});

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








