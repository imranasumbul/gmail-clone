import React from "react";
import { useRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";

const ToSection = function (){
    const [sendingMailInfo, setSendingMailInfo] = useRecoilState(sendingMail);
    console.log(sendingMailInfo.to);
    return (
        <>
        
        <textarea onChange={function(e){
            setSendingMailInfo({
                ...sendingMailInfo,
                to: e.target.value
            })
        }} className="w-[100%] flex-none h-12 p-2" name="emailTo" id="emailTo" placeholder="To">

        </textarea>
        
        </>
    )
}

export default React.memo(ToSection);