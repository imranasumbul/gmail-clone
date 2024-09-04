import React from "react";

import { useSetRecoilState } from "recoil";

import { composeMail } from "../../store/atoms/composeMailBtn";


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
            
            setIsPasswordCompVisible(true);
            setEemailBoardVisibility(false)
        }} className=" absolute bottom-2 left-4 text-lg shadow-md py-1 px-4 font-semibold text-white rounded-3xl bg-blue-600">
            Send
        </button>
        </>
    )
}

export default React.memo(SendEmailBtn);