

import React from "react";
import { useLocation } from "react-router-dom";
import EachMail from "./EachMail"; 
interface mailResponse{
    id: number,
    to: string,
    from: string,
    subject: string,
    body: string,
    date: Date,
    starred: boolean,
    sent: boolean
}
const SentMails = () => {
    const location = useLocation();
    const sentEmails = location.state?.sentEmails || [];
    console.log("hiii");
    console.log(sentEmails);

    return (
        <div>
            {sentEmails.msg ? (
                sentEmails.msg.map((mail: mailResponse) => (
                    <EachMail
                        key={mail.id}
                        to={mail.to}
                        from="testimrana@gmail.com"
                        subject={mail.subject}
                        body={mail.body}
                        date={new Date(mail.date)} 
                    />
                ))
            ) : (
                <p>No sent mails yet</p>
            )}
        </div>
    );
};

export default React.memo(SentMails);
