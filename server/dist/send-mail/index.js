"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailHost = process.env.SMTP_HOST;
const password = process.env.SMTP_PASS;
const smtpPort = Number(process.env.SMTP_PORT);
const smtpUser = process.env.SMTP_USER;
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: smtpPort,
    secure: (smtpPort == 465), // Set to true if using SSL
    auth: {
        user: smtpUser,
        pass: password // Your actual password
    }
});
exports.default = transporter;
