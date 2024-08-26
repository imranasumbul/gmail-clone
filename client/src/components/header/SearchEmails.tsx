import React from "react";
 import {  useSetRecoilState } from "recoil";

import { searchedEmail } from "../../store/atoms/searchedEmails";
import { searchedEmailButton } from "../../store/atoms/searchEmailsButton";

function searchEmails(){
    const setSearchEmailButton = useSetRecoilState(searchedEmailButton)
    const setInputEmail = useSetRecoilState(searchedEmail);
    return <>
    <div className="relative w-[50%]">
        <input type="text" onChange={function(e){
            setInputEmail(e.target.value)
        }} placeholder="Search mail" className=" bg-blue-100 focus:bg-white focus:shadow-lg focus:border-none focus:outline-none w-[100%] px-12 py-3 rounded-3xl"/>
        <button onClick={function(){
            setSearchEmailButton(true);
        }} className="absolute left-0 top-3 mx-3 hover:bg-gray-300 rounded-xl p-2">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </button>
    </div>
    
    </>
}
export default React.memo(searchEmails);