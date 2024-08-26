import React from "react";
import {  sendMailBtn } from "../../store/atoms/sendMail";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
import axios from "axios"
import { composeMail } from "../../store/atoms/composeMailBtn";


const SendEmailBtn = function (){
    const  [sendMailBool, setSendMailBool] = useRecoilState(sendMailBtn);
    const sendingMailInfo = useRecoilValue(sendingMail);
    const setEemailBoardVisibility = useSetRecoilState(composeMail);
    // function sendMail(){
        
    //     Email.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "lulu@yopmail.com",
    //         Password : "E20DB72E5200E99D2E6670EFC56383DFC783",
    //         Port: 2525,
    //         To : 'imranasumbul1211@gmail.com',
    //         From : "imranasumbul1211@gmail.com",
    //         Subject : "subject",
    //         Body : "body"
    //     }).then(
    //       message => alert(message)
    //     );
    // }
    const sendMail = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/user/send-mail', {
                to: sendingMailInfo.to,
                from: sendingMailInfo.from,
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