import React from "react";
import {  sendMailBtn } from "../../store/atoms/sendMail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
import axios from "axios"
import { composeMail } from "../../store/atoms/composeMailBtn";
import { userEmail } from "../../store/atoms/userEmail";
import { api } from "../../api";
import { passwordCompVisibility } from "../../store/atoms/passwordComp";


const SendEmailBtn = function (){
    // const   setSendMailBool = useSetRecoilState(sendMailBtn);
    // const sendingMailInfo = useRecoilValue(sendingMail);
    // const setEemailBoardVisibility = useSetRecoilState(composeMail);
    // const senderEmail = useRecoilValue(userEmail);
    const setIsPasswordCompVisible = useSetRecoilState(passwordCompVisibility);
    const setEemailBoardVisibility = useSetRecoilState(composeMail);
    
    

    return (
        <>
        <button onClick={async function(){
            
            setIsPasswordCompVisible((v) => v = true);
            setEemailBoardVisibility(false)
        }} className=" absolute bottom-2 left-4 text-lg shadow-md py-1 px-4 font-semibold text-white rounded-3xl bg-blue-600">
            Send
        </button>
        </>
    )
}

export default React.memo(SendEmailBtn);