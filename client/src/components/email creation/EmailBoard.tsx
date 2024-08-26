import React from "react";
import EmailBoardHeading from "./EmailBoardHeading";
import { useRecoilValue } from "recoil";
import { composeMail } from "../../store/atoms/composeMailBtn";
import { isMailBoardBig } from "../../store/atoms/mailBoardSize";



const EmailBoard = function(){
    const emailBoardVisibility = useRecoilValue(composeMail);
    const fullScreen = useRecoilValue(isMailBoardBig);
    return (
        <>
        {(emailBoardVisibility) ? 
        ( (fullScreen) ? <div className="fixed bottom-10 right-10 rounded-2xl shadow-lg bg-white w-[90%] h-[90%] z-30 overflow-hidden">
            <EmailBoardHeading />
        </div> : <div className="fixed bottom-20 right-20 rounded-lg shadow-2xl bg-white w-[50%] h-[50%] z-30 overflow-hidden">
        <EmailBoardHeading />
        </div>)
         : null}
        
        </>
    )
}
export default React.memo(EmailBoard);