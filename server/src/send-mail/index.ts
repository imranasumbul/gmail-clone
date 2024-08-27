import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: 'mxslurp.click',
    port: 2525,
    secure: false, // Set to true if using SSL
    auth: {
        user: 'user-6d436e3e-1239-4c3b-bbe8-1fef2737283f@mailslurp.net',
        pass: 'I6AP9eUXA2HbP0pYkE2IgY8OuVbaKqUB' // Your actual password
    }
})

export default transporter;