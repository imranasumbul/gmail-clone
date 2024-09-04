import React from "react";
import { useRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";
const SubjectSection = function (){
    const [sendingMailInfo, setSendingMailInfo] = useRecoilState(sendingMail);
    console.log(sendingMailInfo);
    
    return (
        <>
        <textarea onChange={function(e){
            setSendingMailInfo({
                ...sendingMailInfo,
                subject: e.target.value
            })
        }} className="w-[100%] focus:border-none flex-none h-12 p-2" name="emailSubject" id="emailSubject" placeholder="Subject">

        </textarea>
        </>
    )
}

export default React.memo(SubjectSection);