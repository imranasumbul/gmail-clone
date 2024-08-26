import React from "react";
import { useLocation } from "react-router-dom";
import EachMail from "./EachMail"; // Assuming EachMail is your component to display individual emails
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
const InboxMails = () => {
    const location = useLocation();
    const receivedEmails = location.state?.receivedEmails || [];
    console.log(receivedEmails);

    return (
        <div>
            {receivedEmails.msg.length > 0 ? (
                receivedEmails.msg.map((mail: mailResponse) => (
                    <EachMail
                        key={mail.id}
                        from={mail.from}
                        subject={mail.subject}
                        body={mail.body}
                        date={new Date(mail.date)} // Parse the date properly
                    />
                ))
            ) : (
                <p>No inbox mails yet</p>
            )}
        </div>
    );
};

export default React.memo(InboxMails);