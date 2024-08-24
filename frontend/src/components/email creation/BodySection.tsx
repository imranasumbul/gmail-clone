import React from "react";
import SendBtn from "./SendBtn";
import { useRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
const BodySection = function (){
    const [sendingMailInfo, setSendingMailInfo] = useRecoilState(sendingMail);
    return (
        <>
        <div className="relative w-[100%] flex-grow h-[80%] p-2">
            <textarea onChange={function(e){
            setSendingMailInfo({
                ...sendingMailInfo,
                body: e.target.value
            })
        }}  className="w-full h-full " name="emailBody" id="emailBody"></textarea>
            <SendBtn />
        </div>
        </>
    )
}

export default React.memo(BodySection);
