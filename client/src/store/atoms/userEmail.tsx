import { atom } from "recoil";

export const userEmail = atom<string>({
    key: "userEmail",
    default: "86e46147-26e6-4716-a59f-aa947fa0e1e4@mailslurp.net"
})