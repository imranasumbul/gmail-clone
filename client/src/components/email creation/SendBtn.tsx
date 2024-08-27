import React from "react";
import {  sendMailBtn } from "../../store/atoms/sendMail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
import axios from "axios"
import { composeMail } from "../../store/atoms/composeMailBtn";
import { userEmail } from "../../store/atoms/userEmail";
import { api } from "../../api";


const SendEmailBtn = function (){
    const   setSendMailBool = useSetRecoilState(sendMailBtn);
    const sendingMailInfo = useRecoilValue(sendingMail);
    const setEemailBoardVisibility = useSetRecoilState(composeMail);
    const senderEmail = useRecoilValue(userEmail);

    const sendMail = async () => {
        try {
            const response = await axios.post(`${api}user/send-mail`, {
                to: sendingMailInfo.to,
                from: senderEmail,
                subject: sendingMailInfo.subject,
                body: sendingMailInfo.body,
                date: new Date()
            });

            alert(response.data.msg);
            console.log(response.data.msg);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email');
        }
    };

    return (
        <>
        <button onClick={async function(e: React.MouseEvent<HTMLButtonElement>){
            setSendMailBool(true);
            e.preventDefault();
            setEemailBoardVisibility(false)
            await sendMail();
            
        }} className=" absolute bottom-2 left-4 text-lg shadow-md py-1 px-4 font-semibold text-white rounded-3xl bg-blue-600">
            Send
        </button>
        </>
    )
}

export default React.memo(SendEmailBtn);