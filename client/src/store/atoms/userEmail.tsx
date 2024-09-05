import { atom } from "recoil";

export const userEmail = atom<string>({
    key: "userEmail",
    default: "testimrana@gmail.com"
})