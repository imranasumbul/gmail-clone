import { atom } from "recoil";

export const userEmail = atom<string>({
    key: "userEmail",
    default: "user-6d436e3e-1239-4c3b-bbe8-1fef2737283f@mailslurp.net"
})