import React from "react";
import {  sendMailBtn } from "../../store/atoms/sendMail";
import { useRecoilState, useRecoilValue } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";

const SendEmailBtn = function (){
    const  [sendMailBool, setSendMailBool] = useRecoilState(sendMailBtn);
    const sendingMailInfo = useRecoilValue(sendingMail);
    function sendMail(){
        
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "lulu@yopmail.com",
            Password : "E20DB72E5200E99D2E6670EFC56383DFC783",
            Port: 2525,
            To : 'imranasumbul1211@gmail.com',
            From : "imranasumbul1211@gmail.com",
            Subject : "subject",
            Body : "body"
        }).then(
          message => alert(message)
        );
    }
    return (
        <>
        <button onClick={function(e: React.MouseEvent<HTMLButtonElement>){
            setSendMailBool((a) => a = true);
            e.preventDefault();
            sendMail();
        }} className=" absolute bottom-2 left-4 text-lg shadow-md py-1 px-4 font-semibold text-white rounded-3xl bg-blue-600">
            Send
        </button>
        </>
    )
}

export default React.memo(SendEmailBtn);