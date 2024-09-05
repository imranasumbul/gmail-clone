import React from "react";
interface EachMailInterface {
    from?: string,
    to?: string,
    subject: string,
    body: string,
    date: Date
}
const EachMail = function ({from, to, subject, body, date}: EachMailInterface){
    return (
        <>
        <div className="h-10 p-6 overflow-hidden flex items-center rounded-lg relative border-2">
            <span className="w-[20%] font-bold flex-shrink-0 truncate overflow-hidden whitespace-nowrap">{from}</span>
            <span className="w-[20%] font-bold flex-shrink-0 truncate overflow-hidden whitespace-nowrap">{to}</span>
            <span className="m-2 font-bold truncate overflow-hidden whitespace-nowrap"> {subject} </span>
            <span className="m-2 truncate overflow-hidden whitespace-nowrap"> {body} </span>
            <span className="absolute right-4 m-2 truncate flex-shrink-0 overflow-hidden whitespace-nowrap"> {date.toLocaleString()} </span>
        </div>
        </>
    )
}

export default React.memo(EachMail);