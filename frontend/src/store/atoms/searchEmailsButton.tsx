import { atom } from "recoil";

export const searchedEmailButton = atom<boolean>({
    key: "searchedEmailButton",
    default: false
})