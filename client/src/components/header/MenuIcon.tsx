import React from "react"
import { useRecoilState } from "recoil"
import { sidebarVisibility } from "../../store/atoms/sidebarVisibility"

function MenuIcon(){

    const [isSidebarVisible, setSidebarVisibility]  = useRecoilState(sidebarVisibility);
    return (
        <>
        
        <button className="px-3 bg-gray-300 rounded-full" onClick={function(){
            setSidebarVisibility(!isSidebarVisible);
        }}>
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </button>
        </>
    )
}

export default React.memo(MenuIcon)