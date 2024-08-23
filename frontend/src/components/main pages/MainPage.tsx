import React from "react"
import Header from "../header/Header";
 import Sidebar from "../sidebar/Sidebar";
import { useRecoilValue } from "recoil";
import { sidebarVisibility } from "../../store/atoms/sidebarVisibility";
import EmailSection from "../emails/EmailSection";
import { composeMail } from "../../store/atoms/composeMailBtn";
import EmailBoard from "../email creation/EmailBoard";

const MainPage = function (){
    const writeEmail = useRecoilValue(composeMail);
    const isSidebarVisible = useRecoilValue(sidebarVisibility);
    return (
        <>
        <div className="grid grid-rows-[auto,1fr]">
            < Header />
            {
                (isSidebarVisible) ? 
                <div className={`w-[15%] fixed top-20 left-0 transition-transform  ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionDuration: '3s' }}>
                    <Sidebar />
                </div> : 
                <EmailSection />
            }
            {(writeEmail) ? <EmailBoard/> : null}

        </div>
        </>
    )
}

export default React.memo(MainPage);