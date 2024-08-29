"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: 'mxslurp.click',
    port: 2525,
    secure: false, // Set to true if using SSL
    auth: {
        user: 'user-6d436e3e-1239-4c3b-bbe8-1fef2737283f@mailslurp.net',
        pass: 'I6AP9eUXA2HbP0pYkE2IgY8OuVbaKqUB' // Your actual password
    }
});
exports.default = transporter;
