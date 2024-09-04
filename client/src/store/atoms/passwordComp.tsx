import { atom } from "recoil";

export const passwordCompVisibility = atom<boolean>({
    key: "passwordCompVisibility",
    default: false
})