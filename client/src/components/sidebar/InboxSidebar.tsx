
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userEmail } from "../../store/atoms/userEmail";
import { api } from "../../api";
const InboxSidebar = function(){
    const senderEmail = useRecoilValue(userEmail);
    const navigate = useNavigate();

    const handleInboxClick = async () => {
        const res = await axios.get(`${api}user/receivedemails`, {
            headers: {
                Authorization: senderEmail
            }
        });
        navigate('/inboxmails', { state: { receivedEmails: res.data } });
    };

    return (
        <>
        
        <Link onClick={handleInboxClick} className="flex justify-between w-[50%]" > 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>
            <span className="" >Inbox</span>

        
        </Link>
        </>
    )
}
export default React.memo(InboxSidebar);