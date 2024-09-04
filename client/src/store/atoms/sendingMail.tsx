import { atom } from "recoil";

interface SendingMailState {
    from: string,
    to: string,
    subject: string,
    body: string
}
export const sendingMail = atom<SendingMailState>({
    key: "emailSubject",
    default: {
        from: "testimrana@gmail.com",
        to : "",
        subject: "",
        body: ""
    }
})