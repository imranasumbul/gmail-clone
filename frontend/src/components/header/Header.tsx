import React from "react";
import SearchEmails from "./SearchEmails";
import MenuIcon from "./MenuIcon";
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";

const  Header = function(){
    return (
        <>
        <div className="p-2 flex justify-between w-[100%] bg-slate-50"> 
            <div className="flex justify-around w-[10%]">
                <MenuIcon/>
                <Logo />
                
            </div>
            <SearchEmails/>
            <HeaderIcons/>

            
        </div>
        </>
    )
}
export default React.memo(Header);