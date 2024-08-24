import { atom } from "recoil";

export const sendMailBtn = atom<boolean>({
    key: "sendMailBtn",
    default: false
})