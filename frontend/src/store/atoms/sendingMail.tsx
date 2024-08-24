import { atom } from "recoil";

interface SendingMailState {
    to: string;
    subject: string;
    body: string;
}
export const sendingMail = atom<SendingMailState>({
    key: "emailSubject",
    default: {
        to : "",
        subject: "",
        body: ""
    }
})