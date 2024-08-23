import React from "react";

interface CollapseSVGprops {
    onClickFunction : () => void
}

function CollapseSVG({onClickFunction} : CollapseSVGprops){
    return (
        <>
            <svg onClick={onClickFunction} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>

        </>
    )
}

export default React.memo(CollapseSVG);