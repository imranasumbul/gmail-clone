import { atom } from "recoil";

export const seeSentMails = atom<boolean>({
    key: "seeSentMails",
    default: false
})