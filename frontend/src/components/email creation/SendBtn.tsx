import React from "react";
import {  sendMailBtn } from "../../store/atoms/sendMail";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
import axios from "axios"
import { composeMail } from "../../store/atoms/composeMailBtn";
import { userEmail } from "../../store/atoms/userEmail";


const SendEmailBtn = function (){
    const  [sendMailBool, setSendMailBool] = useRecoilState(sendMailBtn);
    const sendingMailInfo = useRecoilValue(sendingMail);
    const setEemailBoardVisibility = useSetRecoilState(composeMail);
    const senderEmail = useRecoilValue(userEmail);

    const sendMail = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/user/send-mail', {
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
            setSendMailBool((a) => a = true);
            e.preventDefault();
            setEemailBoardVisibility((a) => a = false)
            await sendMail();
            
        }} className=" absolute bottom-2 left-4 text-lg shadow-md py-1 px-4 font-semibold text-white rounded-3xl bg-blue-600">
            Send
        </button>
        </>
    )
}

export default React.memo(SendEmailBtn);