import React from "react";

const SubjectSection = function (){
    return (
        <>
        <textarea className="w-[100%] flex-none h-12 p-2" name="emailSubject" id="emailSubject" placeholder="Subject">

        </textarea>
        </>
    )
}

export default React.memo(SubjectSection);