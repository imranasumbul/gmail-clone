import React from "react";

import { useRecoilValue } from "recoil";

import { passwordCompVisibility } from "../../store/atoms/passwordComp";
import PasswordComponent from "./PasswordComponent";



const PasswordBoard = function(){
    const passwordBoardVisibility = useRecoilValue(passwordCompVisibility);
    
    return (
        <>
      
        {(passwordBoardVisibility) ? <PasswordComponent /> : null }
        
        </>
    )
}
export default React.memo(PasswordBoard);