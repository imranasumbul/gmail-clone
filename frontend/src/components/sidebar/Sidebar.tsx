import React from "react";
import InboxSidebar from "./InboxSidebar";
import StarredSidebar from "./StarredSidebar";
import SentSidebar from "./SentSidebar";
import SnoozedSidebar from "./SnoozedSidebar";
import DraftsSidebar from "./DraftsSidebar";
import ComposeMail from "./ComposeMail";

const Sidebar = function(){
    return (
        <>
        <div className="flex flex-col rounded-xl bg-slate-100 min-h-screen p-4 gap-3 items-center w-[100%]" > 
            <ComposeMail/>
            <InboxSidebar />
            <StarredSidebar/>
            <SnoozedSidebar />
            <SentSidebar/>
            <DraftsSidebar/>
        </div>
        </>
    )
}
export default React.memo(Sidebar);