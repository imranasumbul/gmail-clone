import React from "react";
import XSVG from "./XSVG";
import ExpandSVG from "./ExpandSVG";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isMailBoardBig } from "../../store/atoms/mailBoardSize";
import CollapseSVG from "./CollapseSVG";
import { composeMail } from "../../store/atoms/composeMailBtn";
import SubjectSection from "./SubjectSection";
import ToSection from "./ToSection";
import BodySection from "./BodySection";


const EmailBoardHeading = function(){
    const [mailBoardBig, setIsMailBoardBig] = useRecoilState(isMailBoardBig);
    const setComposeMail = useSetRecoilState(composeMail);

    const removeMailBoard = function(){
        setComposeMail(false);
    }
    const expandMailBoard = function(){
        setIsMailBoardBig(true);
    }
    const shrinkMailBoard = function(){
        setIsMailBoardBig(false);
    }
    return (
        <>
        <div className="bg-blue-100 p-2 flex justify-between items-center">
            <b>New message</b>
            <div className="flex justify-center items-center">
                
                {(mailBoardBig) ? <CollapseSVG onClickFunction={shrinkMailBoard}/> : <ExpandSVG onClickFunction={expandMailBoard} />}
                <XSVG onClickFunction={removeMailBoard}/>
                
            </div>
            
        </div>
        <ToSection />
        <SubjectSection />
        <BodySection />

        </>
    )
}
export default React.memo(EmailBoardHeading);