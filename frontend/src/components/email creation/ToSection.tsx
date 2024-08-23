import React from "react";

const ToSection = function (){
    return (
        <>
        <textarea className="w-[100%] flex-none h-10 p-2" name="emailTo" id="emailTo" placeholder="To">

        </textarea>
        </>
    )
}

export default React.memo(ToSection);