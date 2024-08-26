
import React from "react";
import SettingHeader from "./SettingHeader";
import About from "./About";

function HeaderIcons(){
    return (
        <>
        <div className="w-[10%] flex justify-around">
            
            <SettingHeader />
            <About />
        </div>
        </>
    )
}

export default React.memo(HeaderIcons);