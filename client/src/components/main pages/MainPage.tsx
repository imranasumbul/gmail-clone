
import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useRecoilValue } from "recoil";
import { sidebarVisibility } from "../../store/atoms/sidebarVisibility";
import EmailSection from "../emails/EmailSection";
import { composeMail } from "../../store/atoms/composeMailBtn";
import EmailBoard from "../email creation/EmailBoard";
import PasswordBoard from "../email creation/PasswordBoard";

const MainPage = function (){
    const writeEmail = useRecoilValue(composeMail);
    const isSidebarVisible = useRecoilValue(sidebarVisibility);
    
    return (
        <>
        <div className="grid grid-rows-[auto,1fr] h-screen">
            <Header />
            <div className="flex h-full overflow-hidden">
                {/* Sidebar */}
                <div
                    className={`transition-transform duration-300 ease-in-out ${
                        isSidebarVisible ? 'w-1/6' : 'w-0'
                    } fixed top-20 left-0 h-full overflow-auto z-30`}
                    style={{ transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)' }}
                >
                    <Sidebar />
                </div>

                {/* Email Section */}
                <div
                    className={` transition-all duration-300 ease-in-out ${
                        isSidebarVisible ? 'w-5/6 ml-[16.67%]' : 'w-full'
                    } flex-1`}
                >
                    <EmailSection />
                </div>
            </div>

            {writeEmail && <EmailBoard />}
            {<PasswordBoard />}
        </div>
        </>
    )
}

export default React.memo(MainPage);
