import { atom, selector } from "recoil";

export const searchedEmail = atom<string>({
    key: "searchedEmail",
    default: ""
})

export const searchedEmailSeclector = selector({
    key: "searchedEmailSeclector",
    get : function({get}){
        const emailSearched = get(searchedEmail);
        return emailSearched.toLowerCase;
    }
})