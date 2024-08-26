
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userEmail } from "../../store/atoms/userEmail";
import { api } from "../../api";
const SentSidebar = function() {
    const senderEmail = useRecoilValue(userEmail);
    const navigate = useNavigate();

    const handleSentClick = async () => {
        const res = await axios.get(`${api}user/sentemails`, {
            headers: {
                Authorization: senderEmail
            }
        });
        navigate('/sentmails', { state: { sentEmails: res.data } });
    };

    return (
        <Link onClick={handleSentClick} className="flex justify-between w-[50%]" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            <span>Sent</span>
        </Link>
    );
};

export default React.memo(SentSidebar);
