"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllSentMails_1 = __importDefault(require("../db calls/getAllSentMails"));
const postSentMails_1 = __importDefault(require("../db calls/postSentMails"));
const index_1 = __importDefault(require("../send-mail/index"));
const getAllInbox_1 = __importDefault(require("../db calls/getAllInbox"));
const deleteAll_1 = __importDefault(require("../db calls/deleteAll"));
const userRouter = express_1.default.Router();
userRouter.get("/sentemails", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const senderEmail = req.headers['authorization'];
        if (!senderEmail) {
            return res.status(400).json({
                msg: "Authorization header is missing",
            });
        }
        console.log(senderEmail);
        const allSentEmails = yield (0, getAllSentMails_1.default)(senderEmail.toString());
        res.status(200).json({
            msg: allSentEmails
        });
    });
});
userRouter.post("/send-mail", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, deleteAll_1.default)();
            const { to, from, subject, body, date } = req.body;
            const mailOptions = {
                from,
                to,
                subject,
                text: body
            };
            // Sending email
            let mailSent = false;
            const sendMailPromise = new Promise((resolve, reject) => {
                index_1.default.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(info);
                    }
                });
            });
            try {
                const info = yield sendMailPromise;
                console.log('Email sent: ', info.response);
                mailSent = true; // mark that the mail was successfully sent
            }
            catch (error) {
                console.error('Error sending email:', error);
                return res.status(400).json({
                    msg: 'Error sending email',
                    err: `${error}`
                });
            }
            // Save email to DB if sending was successful
            if (mailSent) {
                yield (0, postSentMails_1.default)({ to, from, subject, body, date });
                return res.status(200).json({
                    msg: 'Email sent successfully'
                });
            }
        }
        catch (e) {
            console.error(`Error: ${e}`);
            return res.status(500).json({
                msg: 'Internal server error',
                err: `${e}`
            });
        }
    });
});
userRouter.get("/receivedemails", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const receiverEmail = req.headers['authorization'];
        if (!receiverEmail) {
            return res.status(400).json({
                msg: "Authorization header is missing",
            });
        }
        console.log(receiverEmail);
        const allReceivedEmails = yield (0, getAllInbox_1.default)(receiverEmail.toString());
        res.status(200).json({
            msg: allReceivedEmails
        });
    });
});
exports.default = userRouter;
