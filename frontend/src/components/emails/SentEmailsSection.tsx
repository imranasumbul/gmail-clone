import React from "react";
import EachMail from "./EachMail"
import {seeSentMails} from "../../store/atoms/seeSentMails"
import { useRecoilValue } from "recoil";


const SentEmailSection = function (){
    const seeSentMailsBool = useRecoilValue(seeSentMails);
    
    return (
        <>
            sent emailsss
            <EachMail from="from" subject="subject" body="body " date={new Date('2024-08-25 20:12:58.446')} />
        
        </>
    )
}

export default React.memo(SentEmailSection);