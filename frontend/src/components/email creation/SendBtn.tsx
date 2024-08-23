import React from "react";

const SendEmailBtn = function (){
    return (
        <>
        <button className=" absolute bottom-2 left-4 text-lg shadow-md py-1 px-4 font-semibold text-white rounded-3xl bg-blue-600">
            Send
        </button>
        </>
    )
}

export default React.memo(SendEmailBtn);