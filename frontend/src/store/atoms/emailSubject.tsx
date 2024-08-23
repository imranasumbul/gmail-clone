import { atom } from "recoil";

export const emailSubject = atom<string>({
    key: "emailSubject",
    default: ""
})