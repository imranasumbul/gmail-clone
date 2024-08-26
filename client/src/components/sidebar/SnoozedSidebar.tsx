import React from "react";

const SnoozedSidebar = function(){
    return (
        <>
       
        <a className="flex justify-between w-[50%]" > 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="">Snoozed</span>

        
        </a>
        </>
    )
}
export default React.memo(SnoozedSidebar);