import React from "react";
import SendBtn from "./SendBtn";

const BodySection = function (){
    return (
        <>
        <div className="relative w-[100%] flex-grow h-[80%] p-2">
            <textarea className="w-full h-full " name="emailBody" id="emailBody"></textarea>
            <SendBtn />
        </div>
        </>
    )
}

export default React.memo(BodySection);
