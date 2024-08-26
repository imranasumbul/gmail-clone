// import React from "react";
// import EachMail from "./EachMail"
// import {seeSentMails} from "../../store/atoms/seeSentMails"
// import { useRecoilValue } from "recoil";
// import axios from "axios";
// import {  userEmail } from "../../store/atoms/userEmail";

// const SentEmailSection = function (){
//     const seeSentMailsBool = useRecoilValue(seeSentMails);
    
    
//     return (
//         <>
//             sent emailsss
//             <EachMail from="from" subject="subject" body="body " date={new Date('2024-08-25 20:12:58.446')} />
        
//         </>
//     )
// }

// export default React.memo(SentEmailSection);

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
const SentMails = () => {
    const location = useLocation();
    const sentEmails = location.state?.sentEmails || [];
    console.log(sentEmails);

    return (
        <div>
            {sentEmails.msg.length > 0 ? (
                sentEmails.msg.map((mail: mailResponse) => (
                    <EachMail
                        key={mail.id}
                        from={mail.from}
                        subject={mail.subject}
                        body={mail.body}
                        date={new Date(mail.date)} // Parse the date properly
                    />
                ))
            ) : (
                <p>No sent mails yet</p>
            )}
        </div>
    );
};

export default SentMails;
