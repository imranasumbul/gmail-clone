import nodemailer from "nodemailer"
const mailHost = process.env.SMTP_HOST
const password = process.env.SMTP_PASS
const smtpPort = Number(process.env.SMTP_PORT)
const smtpUser = process.env.SMTP_USER

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: smtpPort,
    secure: (smtpPort == 465), // Set to true if using SSL
    auth: {
        user: smtpUser,
        pass: password // Your actual password
    }
})

export default transporter;