import { atom } from "recoil";

export const sidebarVisibility = atom<boolean>({
    key: "sidebarVisibility",
    default: false
})