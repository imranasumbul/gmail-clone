import React, {useState} from "react";
import {  sendMailBtn } from "../../store/atoms/sendMail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
import axios from "axios"
import { composeMail } from "../../store/atoms/composeMailBtn";
import { userEmail } from "../../store/atoms/userEmail";
import { api } from "../../api";

import { passwordCompVisibility } from "../../store/atoms/passwordComp";

export default function PasswordComponent(){
    const   setSendMailBool = useSetRecoilState(sendMailBtn);
    const sendingMailInfo = useRecoilValue(sendingMail);

    const senderEmail = useRecoilValue(userEmail);
    const setIsPasswordCompVisible = useSetRecoilState(passwordCompVisibility);
    const sendMail = async () => {
        try {
            const response = await axios.post(`${api}user/send-mail`, {
                to: sendingMailInfo.to,
                from: senderEmail,
                subject: sendingMailInfo.subject,
                body: sendingMailInfo.body,
                date: new Date().toISOString()
            });

            alert(response.data.msg);
            console.log(response.data.msg);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email');
        }
    };
    const [pass, setPass] = useState("");
    return (
        <>
        <div className="relative bg-blue-100 bottom-[70%] left-[50%] z-50 flex flex-col mt-6 text-gray-800  shadow-md bg-clip-border rounded-xl w-96">
            <div className="p-10">
                    <label className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    We can't let unauthenticated user send an email. Please verify yourself.
                    </label>
                    <input className="block w-[90%] font-sans text-base antialiased font-light leading-relaxed text-inherit" placeholder="Enter password" onChange={function(e){
                        setPass(e.target.value)
                    }}  />
                    
            </div>
            <div className="p-6 pt-0">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button" onClick={async function(e: React.MouseEvent<HTMLButtonElement>){
                        
                        if(pass === import.meta.env.VITE_APP_PASSWORD){
                            setSendMailBool(true);
                            e.preventDefault();
                            
                            await sendMail();
                        }else{
                            alert("you cannot send email from this id because you are not authenticated")
                        }
                        setIsPasswordCompVisible((v) => v = false)
                        
                    }}>
                    Submit
                </button>
            </div>
        </div>
        </>
    )
}