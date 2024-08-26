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
        from: "6597262-595c-44d6-b6df-c6d3dc695d1f@mailslurp.net",
        to : "",
        subject: "",
        body: ""
    }
})